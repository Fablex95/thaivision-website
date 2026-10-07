#!/usr/bin/env python3
"""
Backtest für das BTC & Gold Trend System v2 (Python-Port der Pine-Script-Logik).

Nutzung:
    python3 backtest.py                  # lädt BTC-USD und GC=F via yfinance (5 Jahre)
    python3 backtest.py pfad/zu.csv BTC  # nutzt eine lokale CSV (Date,Open,High,Low,Close,Volume)

Repliziert v2: EMA 21/50 + Supertrend-Trendfilter, Pullback-Entries in
Fibonacci Golden Zone (0.5–0.618) / Deep Zone (0.886–0.941, eigene RSI-Grenze),
S/R-Levels (letzte 5 Pivots je Seite), Trendlinien-Bounces, Candlestick-Muster
mit Qualitätsfiltern, 1 % Risiko pro Trade, 2-ATR-Stop, 3R-TP, Supertrend-Flip-Exit,
Positions-Cap 100 %, 0.05 % Kommission je Seite.

Konservative Annahmen: Fill zur nächsten Tageseröffnung; wenn Stop und TP am
selben Tag erreichbar wären, zählt der Stop; Gaps füllen zum Open (schlechter
als der Stop-Preis, wie in der Realität).
"""
import sys
import math
import numpy as np
import pandas as pd

# ---------------------------------------------------------------- Parameter
EMA_FAST, EMA_SLOW, EMA_MACRO = 21, 50, 200
ST_ATR_LEN = 10
PIVOT_LEN = 10
SR_COUNT = 5
SR_PROX_ATR = 1.0
FIB_GZ = (0.5, 0.618)
FIB_DZ = (0.886, 0.941)
RSI_LEN = 14
DEEP_RSI_MIN = 20
MIN_BODY_ATR = 0.3
ATR_LEN = 14
RISK_PCT = 1.0
MAX_POS_PCT = 100.0
COMMISSION = 0.0005        # je Seite
ALLOW_SHORTS = True
START_EQUITY = 10_000.0

PRESETS = {  # (supertrend_factor, stop_atr_mult, tp_r)
    "BTC":  (3.0, 2.0, 3.0),
    "GOLD": (2.5, 1.8, 2.5),
}

# ---------------------------------------------------------------- Indikatoren
def rma(s: pd.Series, n: int) -> pd.Series:
    return s.ewm(alpha=1 / n, adjust=False).mean()

def ema(s: pd.Series, n: int) -> pd.Series:
    return s.ewm(span=n, adjust=False).mean()

def atr(df: pd.DataFrame, n: int) -> pd.Series:
    tr = pd.concat([
        df.High - df.Low,
        (df.High - df.Close.shift()).abs(),
        (df.Low - df.Close.shift()).abs(),
    ], axis=1).max(axis=1)
    return rma(tr, n)

def rsi(close: pd.Series, n: int) -> pd.Series:
    d = close.diff()
    up, dn = d.clip(lower=0), -d.clip(upper=0)
    rs = rma(up, n) / rma(dn, n)
    return 100 - 100 / (1 + rs)

def supertrend(df: pd.DataFrame, factor: float, n: int):
    hl2 = (df.High + df.Low) / 2
    a = atr(df, n)
    upper = (hl2 + factor * a).to_numpy()
    lower = (hl2 - factor * a).to_numpy()
    close = df.Close.to_numpy()
    st = np.full(len(df), np.nan)
    direction = np.ones(len(df), dtype=int)  # 1 = bärisch, -1 = bullisch (wie Pine)
    fu, fl = upper[0], lower[0]
    for i in range(1, len(df)):
        fu = upper[i] if upper[i] < fu or close[i - 1] > fu else fu
        fl = lower[i] if lower[i] > fl or close[i - 1] < fl else fl
        if direction[i - 1] == 1:   # bärisch, Linie = obere Band
            direction[i] = -1 if close[i] > fu else 1
        else:                        # bullisch, Linie = untere Band
            direction[i] = 1 if close[i] < fl else -1
        st[i] = fl if direction[i] == -1 else fu
    return pd.Series(st, df.index), pd.Series(direction, df.index)

# ---------------------------------------------------------------- Backtest
def backtest(df: pd.DataFrame, preset: str, label: str,
             entry_types=("A", "B", "C"), allow_shorts=None, quiet=False,
             exit_mode="fixed"):
    """exit_mode:
    fixed      — 2-ATR-Stop + R-Multiple-TP + Supertrend-Flip (v2-Standard)
    st_trail   — Initial-Stop, dann Stop ratchet auf Supertrend-Linie; kein TP
    chandelier — Initial-Stop, dann Trail: Höchstkurs seit Entry − 3 ATR; kein TP, kein Flip
    breakeven  — wie fixed, zusätzlich Stop auf Einstand nach +1R
    """
    allow_shorts = ALLOW_SHORTS if allow_shorts is None else allow_shorts
    st_factor, stop_mult, tp_r = PRESETS[preset]
    df = df.copy()
    df["ema_f"] = ema(df.Close, EMA_FAST)
    df["ema_s"] = ema(df.Close, EMA_SLOW)
    df["ema_m"] = ema(df.Close, EMA_MACRO)
    df["atr"] = atr(df, ATR_LEN)
    df["rsi"] = rsi(df.Close, RSI_LEN)
    df["vol_sma"] = df.Volume.rolling(20).mean()
    df["st_line"], df["st_dir"] = supertrend(df, st_factor, ST_ATR_LEN)

    o, h, l, c = (df[k].to_numpy() for k in ("Open", "High", "Low", "Close"))
    vol, volsma = df.Volume.to_numpy(), df.vol_sma.to_numpy()
    emaf, emas, emam = df.ema_f.to_numpy(), df.ema_s.to_numpy(), df.ema_m.to_numpy()
    a, r, stdir = df.atr.to_numpy(), df.rsi.to_numpy(), df.st_dir.to_numpy()
    stline = df.st_line.to_numpy()
    n = len(df)

    # Zustand wie im Pine-Script
    res_levels, sup_levels = [], []           # letzte SR_COUNT Pivot-Levels
    lastPH = prevPH = lastPL = prevPL = None  # (preis, bar)
    equity = START_EQUITY
    pos = None          # dict: dir, qty, entry, stop, tp, entry_bar, etype
    trades = []
    eq_curve = np.full(n, START_EQUITY)
    pending = None      # Signal von gestern → Fill heute zum Open

    for i in range(1, n):
        # ---- Pivot-Bestätigung (Pivot liegt PIVOT_LEN Bars zurück)
        j = i - PIVOT_LEN
        if j - PIVOT_LEN >= 0:
            w_h = h[j - PIVOT_LEN: j + PIVOT_LEN + 1]
            w_l = l[j - PIVOT_LEN: j + PIVOT_LEN + 1]
            if h[j] == w_h.max() and (w_h == h[j]).sum() == 1:
                prevPH, lastPH = lastPH, (h[j], j)
                res_levels = ([h[j]] + res_levels)[:SR_COUNT]
            if l[j] == w_l.min() and (w_l == l[j]).sum() == 1:
                prevPL, lastPL = lastPL, (l[j], j)
                sup_levels = ([l[j]] + sup_levels)[:SR_COUNT]

        # ---- Offene Position managen (heutige Bar)
        if pos is not None:
            d = pos["dir"]
            # Trailing-Stop-Update auf Basis der Daten bis Bar i-1 (kein Lookahead)
            if exit_mode == "st_trail":
                if d == 1 and stdir[i - 1] == -1 and not math.isnan(stline[i - 1]):
                    pos["stop"] = max(pos["stop"], stline[i - 1])
                elif d == -1 and stdir[i - 1] == 1 and not math.isnan(stline[i - 1]):
                    pos["stop"] = min(pos["stop"], stline[i - 1])
            elif exit_mode == "chandelier":
                if d == 1:
                    pos["stop"] = max(pos["stop"], pos["hh"] - 3 * a[i - 1])
                else:
                    pos["stop"] = min(pos["stop"], pos["ll"] + 3 * a[i - 1])
            elif exit_mode == "breakeven":
                if d == 1 and pos["hh"] >= pos["entry"] + pos["r"]:
                    pos["stop"] = max(pos["stop"], pos["entry"])
                elif d == -1 and pos["ll"] <= pos["entry"] - pos["r"]:
                    pos["stop"] = min(pos["stop"], pos["entry"])

            use_tp = exit_mode in ("fixed", "breakeven")
            use_flip = exit_mode in ("fixed", "breakeven", "st_trail")
            exit_px, reason = None, None
            if d == 1:
                if o[i] <= pos["stop"]:
                    exit_px, reason = o[i], "gap-stop"
                elif l[i] <= pos["stop"]:
                    exit_px, reason = pos["stop"], "stop"
                elif use_tp and h[i] >= pos["tp"]:
                    exit_px, reason = (o[i] if o[i] > pos["tp"] else pos["tp"]), "tp"
                elif use_flip and stdir[i] == 1:
                    exit_px, reason = c[i], "st-flip"
            else:
                if o[i] >= pos["stop"]:
                    exit_px, reason = o[i], "gap-stop"
                elif h[i] >= pos["stop"]:
                    exit_px, reason = pos["stop"], "stop"
                elif use_tp and l[i] <= pos["tp"]:
                    exit_px, reason = (o[i] if o[i] < pos["tp"] else pos["tp"]), "tp"
                elif use_flip and stdir[i] == -1:
                    exit_px, reason = c[i], "st-flip"
            if exit_px is not None:
                pnl = (exit_px - pos["entry"]) * pos["qty"] * pos["dir"]
                fees = (pos["entry"] + exit_px) * pos["qty"] * COMMISSION
                equity += pnl - fees
                trades.append({"etype": pos["etype"], "dir": pos["dir"],
                               "pnl": pnl - fees, "reason": reason,
                               "bars": i - pos["entry_bar"],
                               "date": df.index[pos["entry_bar"]]})
                pos = None
            else:
                pos["hh"] = max(pos["hh"], h[i])
                pos["ll"] = min(pos["ll"], l[i])

        # ---- Gestern signalisierter Entry → Fill zum heutigen Open
        if pending is not None and pos is None:
            d, etype, stop_dist = pending
            entry = o[i]
            risk_qty = equity * RISK_PCT / 100 / stop_dist
            cap_qty = equity * MAX_POS_PCT / 100 / entry
            qty = min(risk_qty, cap_qty)
            pos = {"dir": d, "qty": qty, "entry": entry,
                   "stop": entry - d * stop_dist, "tp": entry + d * stop_dist * tp_r,
                   "entry_bar": i, "etype": etype,
                   "r": stop_dist, "hh": max(entry, h[i]), "ll": min(entry, l[i])}
        pending = None

        # ---- Mark-to-Market-Equity für Drawdown
        eq_curve[i] = equity + ((c[i] - pos["entry"]) * pos["qty"] * pos["dir"] if pos else 0)

        if i < max(EMA_MACRO, 2 * PIVOT_LEN) or math.isnan(a[i]) or pos is not None:
            continue

        # ---- Signal-Logik (Bar i, Fill morgen)
        bull = emaf[i] > emas[i] and stdir[i] == -1 and c[i] > emam[i]
        bear = emaf[i] < emas[i] and stdir[i] == 1 and c[i] < emam[i]
        cross_up = emaf[i] > emas[i] and emaf[i - 1] <= emas[i - 1]
        cross_dn = emaf[i] < emas[i] and emaf[i - 1] >= emas[i - 1]

        tol = a[i] * SR_PROX_ATR
        near_sup = any(abs(l[i] - lv) <= tol for lv in sup_levels)
        near_res = any(abs(h[i] - lv) <= tol for lv in res_levels)

        # Trendlinien aus den letzten zwei Pivots
        tl_long = tl_short = False
        if lastPL and prevPL and lastPL[1] > prevPL[1]:
            slope = (lastPL[0] - prevPL[0]) / (lastPL[1] - prevPL[1])
            px = lastPL[0] + slope * (i - lastPL[1])
            tl_long = slope > 0 and abs(l[i] - px) <= tol and c[i] > px
        if lastPH and prevPH and lastPH[1] > prevPH[1]:
            slope = (lastPH[0] - prevPH[0]) / (lastPH[1] - prevPH[1])
            px = lastPH[0] + slope * (i - lastPH[1])
            tl_short = slope < 0 and abs(h[i] - px) <= tol and c[i] < px

        # Fibonacci aus bestätigten Swings
        in_gz_up = in_gz_dn = in_dz_up = in_dz_dn = False
        if lastPH and lastPL:
            rng = lastPH[0] - lastPL[0]
            if rng > a[i]:
                if lastPL[1] < lastPH[1]:  # Impuls aufwärts
                    gz_t, gz_b = lastPH[0] - rng * FIB_GZ[0], lastPH[0] - rng * FIB_GZ[1]
                    dz_t, dz_b = lastPH[0] - rng * FIB_DZ[0], lastPH[0] - rng * FIB_DZ[1]
                    in_gz_up = gz_b - tol <= l[i] <= gz_t
                    in_dz_up = dz_b - tol <= l[i] <= dz_t
                else:                       # Impuls abwärts
                    gz_b, gz_t = lastPL[0] + rng * FIB_GZ[0], lastPL[0] + rng * FIB_GZ[1]
                    dz_b, dz_t = lastPL[0] + rng * FIB_DZ[0], lastPL[0] + rng * FIB_DZ[1]
                    in_gz_dn = gz_b <= h[i] <= gz_t + tol
                    in_dz_dn = dz_b <= h[i] <= dz_t + tol

        # Candlestick-Muster mit Qualitätsfiltern
        body = abs(c[i] - o[i])
        up_w = h[i] - max(c[i], o[i])
        lo_w = min(c[i], o[i]) - l[i]
        body_ok = body >= a[i] * MIN_BODY_ATR
        vol_ok = not (volsma[i] > 0) or vol[i] > volsma[i]
        bull_eng = c[i] > o[i] and c[i - 1] < o[i - 1] and c[i] >= o[i - 1] and o[i] <= c[i - 1] and body > abs(c[i - 1] - o[i - 1])
        bear_eng = c[i] < o[i] and c[i - 1] > o[i - 1] and c[i] <= o[i - 1] and o[i] >= c[i - 1] and body > abs(c[i - 1] - o[i - 1])
        hammer = lo_w > body * 2 and up_w < body and c[i] > o[i]
        sstar = up_w > body * 2 and lo_w < body and c[i] < o[i]
        bull_pat = (bull_eng or hammer) and body_ok and vol_ok
        bear_pat = (bear_eng or sstar) and body_ok and vol_ok

        rsi_l = 40 < r[i] < 75
        rsi_s = 25 < r[i] < 60
        deep_l = DEEP_RSI_MIN < r[i] < 60
        deep_s = 40 < r[i] < 100 - DEEP_RSI_MIN

        stop_dist = a[i] * stop_mult
        sig = None
        if "A" in entry_types and cross_up and stdir[i] == -1 and rsi_l:
            sig = (1, "A-Trend")
        elif "B" in entry_types and bull and (in_gz_up or near_sup or tl_long) and bull_pat and rsi_l:
            sig = (1, "B-Pullback")
        elif "C" in entry_types and in_dz_up and c[i] > emam[i] and bull_pat and deep_l:
            sig = (1, "C-DeepFib")
        elif allow_shorts and "A" in entry_types and cross_dn and stdir[i] == 1 and rsi_s:
            sig = (-1, "A-Trend")
        elif allow_shorts and "B" in entry_types and bear and (in_gz_dn or near_res or tl_short) and bear_pat and rsi_s:
            sig = (-1, "B-Pullback")
        elif allow_shorts and "C" in entry_types and in_dz_dn and c[i] < emam[i] and bear_pat and deep_s:
            sig = (-1, "C-DeepFib")
        if sig:
            pending = (sig[0], sig[1], stop_dist)

    # Letzte offene Position zum Schlusskurs bewerten
    if pos is not None:
        pnl = (c[-1] - pos["entry"]) * pos["qty"] * pos["dir"]
        fees = (pos["entry"] + c[-1]) * pos["qty"] * COMMISSION
        equity += pnl - fees
        trades.append({"etype": pos["etype"], "dir": pos["dir"],
                       "pnl": pnl - fees, "reason": "open-end",
                       "bars": n - 1 - pos["entry_bar"],
                       "date": df.index[pos["entry_bar"]]})
    eq_curve[-1] = equity

    return report(label, preset, df, trades, eq_curve, quiet=quiet)

def metrics(trades: pd.DataFrame) -> dict:
    """PF, Winrate, Anzahl und Netto-PnL einer Trade-Menge."""
    if trades.empty:
        return {"n": 0, "win": float("nan"), "pf": float("nan"), "pnl": 0.0}
    wins, losses = trades[trades.pnl > 0], trades[trades.pnl <= 0]
    pf = wins.pnl.sum() / abs(losses.pnl.sum()) if len(losses) and losses.pnl.sum() != 0 else float("inf")
    return {"n": len(trades), "win": len(wins) / len(trades), "pf": pf, "pnl": trades.pnl.sum()}

def report(label, preset, df, trades, eq, quiet=False):
    t = pd.DataFrame(trades)
    years = (df.index[-1] - df.index[0]).days / 365.25
    peak = np.maximum.accumulate(eq)
    out = {"label": label, "trades": t, "equity": eq,
           "total_ret": eq[-1] / START_EQUITY - 1,
           "cagr": (eq[-1] / START_EQUITY) ** (1 / years) - 1 if years > 0 else float("nan"),
           "maxdd": ((eq - peak) / peak).min(),
           **metrics(t)}
    if quiet:
        return out
    bh = df.Close.iloc[-1] / df.Close.iloc[0] - 1
    print(f"\n{'=' * 64}\n{label}  (Preset {preset})   {df.index[0].date()} – {df.index[-1].date()}")
    print(f"{'=' * 64}")
    if t.empty:
        print("KEINE TRADES — Logik/Filter prüfen!")
        return out
    print(f"Endkapital:     {eq[-1]:>12,.0f} USD  (Start {START_EQUITY:,.0f})")
    print(f"Gesamtrendite:  {out['total_ret']:>12.1%}   Buy&Hold: {bh:.1%}")
    print(f"CAGR:           {out['cagr']:>12.1%}")
    print(f"Max. Drawdown:  {out['maxdd']:>12.1%}")
    print(f"Trades: {out['n']}   Trefferquote: {out['win']:.1%}   Profit Factor: {out['pf']:.2f}")
    print(f"Ø Haltedauer:   {t.bars.mean():.1f} Bars")
    print("\nNach Entry-Typ:")
    for et, g in t.groupby("etype"):
        w = (g.pnl > 0).sum()
        gpf = g[g.pnl > 0].pnl.sum() / abs(g[g.pnl <= 0].pnl.sum()) if (g.pnl <= 0).any() and g[g.pnl <= 0].pnl.sum() != 0 else float("inf")
        print(f"  {et:<12} {len(g):>4} Trades | Winrate {w / len(g):>6.1%} | PF {gpf:>5.2f} | PnL {g.pnl.sum():>+10,.0f} USD")
    print("\nExit-Gründe:", dict(t.reason.value_counts()))
    return out

def load(symbol_or_csv: str, name: str) -> pd.DataFrame:
    if symbol_or_csv.endswith(".csv"):
        df = pd.read_csv(symbol_or_csv, parse_dates=["Date"], index_col="Date")
    else:
        import yfinance as yf
        df = yf.download(symbol_or_csv, start="2020-10-01", auto_adjust=True, progress=False)
        if isinstance(df.columns, pd.MultiIndex):
            df.columns = df.columns.get_level_values(0)
    df = df[["Open", "High", "Low", "Close", "Volume"]].dropna()
    if df.empty:
        raise SystemExit(f"Keine Daten für {name} — Netzwerk freigeschaltet?")
    return df

if __name__ == "__main__":
    if len(sys.argv) == 3:
        preset = "BTC" if sys.argv[2].upper() == "BTC" else "GOLD"
        backtest(load(sys.argv[1], sys.argv[2]), preset, sys.argv[2])
    else:
        backtest(load("BTC-USD", "Bitcoin"), "BTC", "Bitcoin (BTC-USD, 1D)")
        backtest(load("GC=F", "Gold"), "GOLD", "Gold (GC=F Futures, 1D)")

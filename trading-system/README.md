# BTC & Gold Trend System (TradingView / Pine Script v5)

Ein komplettes Trading-System für **Bitcoin (BTCUSD)** und **Gold (XAUUSD)**, aufgebaut aus den am besten dokumentierten Strategie-Bausteinen der letzten 5 Jahre — mit allen gewünschten Analyse-Elementen: Support/Resistance, Trendlinien, Fibonacci, Chartmuster und striktem Risk-Management.

## ⚠️ Zuerst das Wichtigste: Realistische Erwartungen

**Ein System mit garantierten 100 % Rendite pro Monat existiert nicht — bei niemandem.**
100 %/Monat entspricht über 400.000 % pro Jahr. Zum Vergleich die real dokumentierten Ergebnisse der besten öffentlich backtesteten Strategien:

| Strategie | Markt | Zeitraum | Ergebnis |
|---|---|---|---|
| Supertrend (ATR 10, ×3), Daily | BTC | 2017–2026 | **+1.054 % gesamt** (~33 % CAGR), Max-Drawdown −61,5 % |
| Buy & Hold | BTC | 2017–2026 | +1.436 %, Max-Drawdown −83 % |
| EMA 21/50 Swing | XAUUSD | ~5 Jahre | Profit Factor 1,85, Max-Drawdown ~3 % |
| 4-Phasen-Pullback-System | XAUUSD | 2020–2025 | +44,75 % gesamt, Sharpe 0,89, Max-DD 5,8 % |

Die besten seriösen Systeme liefern also grob **30–100 % pro Jahr** (BTC, mit hohen Drawdowns) bzw. **8–15 % pro Jahr** (Gold, mit niedrigen Drawdowns). Jeder Backtest, der 100 %/Monat zeigt, ist overfitted oder gefälscht und bricht live zusammen. Dieses System hier ist ehrlich gebaut: Es kombiniert die Bausteine mit den besten dokumentierten Ergebnissen und schützt dein Kapital durch Positionsgrößen-Steuerung.

## Was das System macht

**Kern (Trend-Engine):**
- **EMA 21/50 Crossover** — bestes dokumentiertes Swing-Setup auf Gold (Profit Factor 1,85)
- **Supertrend (ATR 10, Faktor 3,0)** — bester dokumentierter Trendfilter auf Bitcoin
- Optionaler **EMA-200-Makrofilter** (nur long über der 200er, nur short darunter)

**Zwei Entry-Typen:**
1. **Trend-Entry:** frischer EMA-21/50-Crossover, vom Supertrend bestätigt
2. **Pullback-Entry:** bestehender Trend + Rücksetzer in die **Fibonacci Golden Zone (0,5–0,618)** oder an ein **Support/Resistance-Level**, bestätigt durch ein **Candlestick-Muster** (Bullish/Bearish Engulfing, Hammer, Shooting Star)
3. **Deep-Zone-Entry:** sehr tiefer Rücksetzer in die **Fibonacci Deep Zone (0,886–0,941)**. Da der Kurs hier meist unter den EMAs liegt, gilt nur die Makro-Richtung (EMA 200) als Trendfilter — dafür ist die Candlestick-Bestätigung Pflicht. Diese Entries haben Reversal-Charakter mit natürlich engem Stop (das Swing-Extrem liegt direkt darunter/darüber). Im Chart als **pinke Diamanten** markiert, die Levels als gepunktete pinke Linien. Abschaltbar über „Deep Zone als Entry nutzen".

**Automatische Chartanalyse (wird direkt in den Chart gezeichnet):**
- Support- und Resistance-Levels aus Pivot-Hochs/-Tiefs
- Trendlinien, die die letzten Pivots verbinden
- Fibonacci-Retracement-Zonen vom letzten Swing (Golden Zone 0,5/0,618 gelb, Deep Zone 0,886/0,941 pink gepunktet)
- Markierung erkannter Candlestick-Muster
- RSI-Momentumfilter (blockt überkaufte Longs / überverkaufte Shorts)

**Risk-Management (der wichtigste Teil):**
- Positionsgröße automatisch so berechnet, dass pro Trade nur **1 % des Kapitals** riskiert wird (einstellbar)
- Stop-Loss: 2× ATR unter/über dem Entry
- Take-Profit: 3R (dreifacher Stop-Abstand, einstellbar)
- Trailing-Exit bei Supertrend-Flip (lässt Gewinne in starken Trends laufen)

## Installation in TradingView

1. TradingView öffnen → Chart von **BTCUSD** oder **XAUUSD** (empfohlen: **4h oder 1D**)
2. Unten **„Pine Editor"** öffnen
3. Inhalt von [`btc-gold-trend-system.pine`](./btc-gold-trend-system.pine) einfügen
4. **„Add to chart"** klicken
5. Im **Strategy Tester** (Tab unten) siehst du den vollständigen Backtest: Rendite, Drawdown, Profit Factor, Trefferquote, jede einzelne Position

## Empfohlene Einstellungen

| Parameter | BTC (1D) | Gold (4h/1D) |
|---|---|---|
| EMA schnell / langsam | 21 / 50 | 21 / 50 |
| Supertrend | 10 / 3,0 | 10 / 3,0 |
| Risiko pro Trade | 1 % | 1 % |
| Take-Profit | 3R | 2–3R |
| Shorts | an | an |
| EMA-200-Filter | an | an (bei Seitwärtsmarkt aus) |

## So testest du seriös

1. Backtest im Strategy Tester über **mindestens 5 Jahre** laufen lassen
2. Auf **Max-Drawdown und Profit Factor** achten, nicht nur auf die Rendite
3. Parameter **nicht** so lange verdrehen, bis der Backtest perfekt aussieht (Overfitting!)
4. Danach **3–6 Monate Paper-Trading** (TradingView Paper Account), bevor echtes Geld fließt
5. Live nur mit Kapital starten, dessen Totalverlust du verkraften kannst

## Quellen der Recherche

- [Bitcoin Supertrend Strategy Backtest 2017–2026 (Boring Edge)](https://boringedge.com/bitcoin-supertrend-strategy-backtest/)
- [XAUUSD Trading Strategies — 3 Backtested Approaches, 8.693 Trades (Quant Signals)](https://quant-signals.com/xauusd-trading-strategies/)
- [EMA Crossover Strategy — 6 Assets Backtested (Quant Signals)](https://quant-signals.com/ema-crossover-strategy/)
- [XAUUSD 4-Phasen-Pullback-System, 5-Jahres-Backtest (GitHub)](https://github.com/ilahuerta-IA/backtrader-pullback-window-xauusd)
- [Supertrend Indicator Backtest (QuantifiedStrategies)](https://www.quantifiedstrategies.com/supertrend-indicator/)

---

**Disclaimer:** Dies ist keine Anlageberatung. Trading mit Hebel kann zum Totalverlust führen. Historische Backtests garantieren keine zukünftigen Ergebnisse.

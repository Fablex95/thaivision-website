# Backtest-Ergebnisse (echte Daten, 5 Jahre: Okt 2021 – Okt 2026)

Datengrundlage: vom Nutzer bereitgestellte 1h-Daten (BTC/USDT: 43.823 Bars, lückenlos;
XAU/USD: 29.064 Bars, September 2022 fehlt komplett, Wochenend-Lücken normal),
resampelt auf 4h und 1D. Einstellungen: v2-Standard, 1 % Risiko/Trade, 0,05 % Gebühr je Seite,
konservative Fills (Entry zur Folge-Eröffnung, bei Stop+TP im selben Bar zählt der Stop).

## Übersicht

| Markt / TF | Rendite gesamt | CAGR | Max-DD | Trades | Winrate | PF | Buy & Hold |
|---|---|---|---|---|---|---|---|
| BTC 1D | −1,0 % | −0,2 % | −10,1 % | 30 | 30,0 % | 0,94 | +56,8 % |
| BTC 4h | +12,1 % | +2,3 % | −14,0 % | 182 | 34,1 % | 1,10 | +54,0 % |
| Gold 1D | +0,5 % | +0,1 % | −4,4 % | 20 | 35,0 % | 1,04 | +137,4 % |
| Gold 4h | −18,7 % | −4,1 % | −22,3 % | 151 | 27,8 % | 0,78 | +136,7 % |

## Nach Entry-Typ (PnL in USD bei 10.000 Start)

| Markt / TF | A-Trend (EMA-Cross) | B-Pullback (Fib/SR/Trendlinie) | C-DeepFib (0.886/0.941) |
|---|---|---|---|
| BTC 1D | 20 Tr., PF 0,46, **−780** | 8 Tr., PF 3,16, **+661** | 2 Tr., PF 2,38, +16 |
| BTC 4h | 135 Tr., PF 1,19, +1.726 | 35 Tr., PF 0,78, −555 | 12 Tr., PF 1,08, +34 |
| Gold 1D | 13 Tr., PF 0,57, **−423** | 7 Tr., PF 2,77, **+478** | — |
| Gold 4h | 114 Tr., PF 0,86, −898 | 34 Tr., PF 0,60, −876 | 3 Tr., PF 0,00, −99 |

## Ehrliche Interpretation

1. **Das System hat in dieser Form keinen belastbaren Edge.** Profit Factor um 1,0
   heißt: Nach Gebühren bleibt im Schnitt nichts übrig. Buy & Hold schlug die
   Strategie in allen vier Konfigurationen deutlich.
2. **Die EMA-Crossover-Entries (Typ A) sind auf Tagesbasis der Verlustbringer**
   (PF 0,46–0,57). Auf 4h bei BTC leicht positiv, bei Gold negativ.
3. **Die Pullback-Entries (Typ B) sind auf Tagesbasis der einzige Lichtblick:**
   PF 3,16 (BTC) und 2,77 (Gold) — aber mit nur 7–8 Trades in 5 Jahren ist die
   Stichprobe zu klein, um daraus eine Strategie abzuleiten. Auf 4h verschwindet
   der Effekt (→ Verdacht: auf 1D echter Struktur-Edge, auf 4h Rauschen).
4. **Deep-Fib-Entries (Typ C) feuern selten** (2–12 Trades) und sind in Summe neutral.
5. **Risikokontrolle funktionierte:** Max-Drawdowns 4–22 % gegenüber −77 % (BTC)
   bzw. −22 % (Gold) bei Buy & Hold im selben Zeitraum. Das System verlor nie viel —
   es gewann nur auch nichts.
6. **Einordnung Renditeziel:** Selbst Buy & Hold schaffte nur ~9 %/Jahr (BTC) bzw.
   ~19 %/Jahr (Gold). 100 % pro Monat liegt um Größenordnungen außerhalb dessen,
   was dieser Markt in den letzten 5 Jahren überhaupt hergab.

## Vorsicht vor dem nächsten Schritt

Die naheliegende Reaktion — „dann lass nur Typ B auf 1D laufen" — ist genau der
Moment, in dem Overfitting beginnt: Wir würden die Regel wählen, WEIL sie in der
Vergangenheit am besten aussah. Seriöses Vorgehen: Typ-B-only als Hypothese auf
einer Datenhälfte optimieren, auf der anderen validieren (Walk-Forward), und mehr
Trades sammeln (weitere Märkte/längerer Zeitraum), bevor echtes Geld fließt.

*Reproduzierbar via `python3 backtest.py <csv> BTC|GOLD` mit auf 4h/1D
resampelten OHLCV-Daten.*

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

---

# Walk-Forward-Validierung (Update)

Vorgehen: Alle Varianten (Entry-Typen A/B/C einzeln und kombiniert, mit/ohne Shorts)
liefen über den Gesamtzeitraum; die Trades wurden am 01.04.2024 in **In-Sample**
(erste Hälfte) und **Out-of-Sample** (zweite Hälfte) geteilt. Nur was in BEIDEN
Hälften funktioniert, gilt als belastbar.

## Kernergebnisse

| Konfiguration | In-Sample PF | Out-of-Sample PF | Urteil |
|---|---|---|---|
| **BTC 4h, long-only, A+B+C** | 1,19 (38 Tr.) | **1,19 (55 Tr.)** | ✅ stabil |
| **BTC 4h, long-only, nur A** | 1,33 (28 Tr.) | **1,30 (39 Tr.)** | ✅ stabil |
| **Gold 4h, long-only, A+B+C** | 1,19 (41 Tr.) | **1,17 (42 Tr.)** | ✅ stabil |
| BTC 4h, nur B long | 1,97 | 0,83 | ❌ bricht zusammen |
| Gold 4h, nur B long | 1,76 | 0,78 | ❌ bricht zusammen |
| Alle „+Shorts"-Varianten | — | durchgehend schlechter | ❌ |
| Alle 1D-Varianten | — | 1–9 Trades je Hälfte | ⚠️ zu wenig Trades |

## Was das bedeutet

1. **Shorts raus.** In jeder Konfiguration, auf beiden Märkten, in beiden Hälften
   verschlechterten Shorts das Ergebnis. (Beide Märkte stiegen über den Zeitraum.)
2. **4h statt 1D.** Auf Tagesbasis entstehen schlicht zu wenige Trades für
   statistische Aussagekraft.
3. **Die „Typ B ist der Gewinner"-Hypothese aus dem ersten Backtest ist
   WIDERLEGT** — klassische Kleinstichproben-Täuschung: In-Sample PF 1,8–2,0,
   Out-of-Sample 0,78–0,83. Genau dafür macht man Walk-Forward.
4. **Was bleibt, ist ein bescheidener, aber stabiler Edge:** Long-only auf 4h
   mit allen drei Entry-Typen (BTC auch mit Typ A allein).

## Finale validierte Konfiguration (Gesamtzeitraum, long-only, 4h)

| | BTC 4h | Gold 4h |
|---|---|---|
| Gesamtrendite (5 J., 1 % Risiko/Trade) | +10,2 % | +8,4 % |
| Profit Factor | 1,19 | 1,18 |
| Max. Drawdown | −9,1 % | −9,0 % |
| Trades | 93 | 83 |

**Ehrliche Einordnung:** ~2 % pro Jahr bei 1 % Risiko pro Trade und max. −9 %
Drawdown. Der Edge ist real (in beiden Datenhälften stabil), aber klein. Höheres
Risiko pro Trade skaliert Rendite UND Drawdown proportional (2 % Risiko ≈ ~4 %/Jahr
bei ~−18 % DD). Buy & Hold war in diesem (stark steigenden) Zeitraum überlegen —
der Vorteil des Systems ist der drastisch kleinere Drawdown, nicht die Rendite.

Standard-Einstellungen des Pine Scripts wurden entsprechend angepasst:
Shorts aus, Entry-Typen einzeln schaltbar, Empfehlung 4h.

---

# Exit-Studie (Update 2)

Vier Exit-Varianten, Walk-Forward (long-only, 4h, Entry A+B+C):

| Markt | Exit | IS PF | OOS PF | Gesamt 5J | Max-DD |
|---|---|---|---|---|---|
| BTC | Fester TP/SL + ST-Flip (alt) | 1,19 | 1,19 | +10,2 % | −9,1 % |
| BTC | Break-Even nach 1R | 1,68 | 0,97 ❌ | +9,6 % | −9,8 % |
| BTC | Supertrend-Trailing | 1,93 | 1,49 ✅ | +32,9 % | −10,6 % |
| BTC | **Chandelier (HH − 3×ATR)** | **2,62** | **1,45 ✅** | **+41,1 %** | **−9,7 %** |
| Gold | Fester TP/SL + ST-Flip (alt) | 1,19 | 1,17 | +8,4 % | −9,0 % |
| Gold | Break-Even nach 1R | 1,12 | 1,29 | +8,0 % | −8,0 % |
| Gold | Supertrend-Trailing | 1,70 | 1,26 ✅ | +18,1 % | −9,9 % |
| Gold | **Chandelier (HH − 3×ATR)** | **2,07** | **1,39 ✅** | **+28,7 %** | **−10,0 %** |

**Befund:** Beide Trailing-Varianten schlagen den festen TP/SL in beiden Hälften
auf beiden Märkten — ein robustes Muster („Gewinner laufen lassen"), kein
Einzelfall-Fit. Chandelier (Stop = Höchstkurs seit Entry − 3×ATR, kein fester TP,
kein Flip-Exit) ist der Gewinner und jetzt Standard im Pine Script.

## Stand nach allen Verbesserungen (validierte Konfiguration)

Long-only, 4h, Entry A+B+C, Chandelier-Exit, 1 % Risiko/Trade:

| | BTC | Gold |
|---|---|---|
| Gesamtrendite 5 Jahre | **+41,1 %** (~7 %/Jahr) | **+28,7 %** (~5 %/Jahr) |
| Max. Drawdown | −9,7 % | −10,0 % |
| Out-of-Sample Profit Factor | 1,45 | 1,39 |

Zum Vergleich Startpunkt (v2, fester TP/SL, mit Shorts): BTC +12 %, Gold −19 %.
Die Out-of-Sample-PFs (1,39–1,45) sind die realistischere Erwartung als die
In-Sample-Werte (2,0–2,6) — mit Live-Ergebnissen eher am unteren Rand rechnen.

---

# Liquidity-Sweep-Studie (Update 3)

Frage: Hilft ein „Liquiditäts"-Konzept (Preis holt Stops/Liquidationen unter
Swing-Tiefs, Stop-Hunt-Reversal)? Echte Liquidation-Heatmaps (Coinglass etc.)
sind in TradingView nicht verfügbar; getestet wurde der handelbare Kern:
Bar sticht unter ein gespeichertes Support-Level und schließt wieder darüber.

| Konfiguration (4h, long-only, Chandelier) | IS PF | OOS PF | Gesamt 5J | Max-DD |
|---|---|---|---|---|
| BTC — ABC (Hauptsystem) | 2,62 | 1,45 | +41,1 % | −9,7 % |
| BTC — ABC + D gemischt | 1,64 | 1,18 | +28,3 % ❌ | −12,4 % |
| BTC — nur D (Sweep standalone) | 1,35 | 1,46 ✅ | +18,7 % | −9,4 % |
| Gold — ABC (Hauptsystem) | 2,07 | 1,39 | +28,7 % | −10,0 % |
| Gold — ABC + D gemischt | 1,77 | 1,30 | +33,5 % ⚠️ | −11,7 % |
| Gold — nur D (Sweep standalone) | 1,42 | 1,51 ✅ | +20,6 % | **−6,6 %** |

**Befund:** Das Sweep-Konzept trägt alleinstehend einen echten, in beiden Hälften
stabilen Edge (auf Gold sogar mit dem besten Drawdown aller Varianten). Ins
Hauptsystem gemischt verschlechtert es BTC aber deutlich, weil Sweep-Trades
Positionen besetzen, bevor die stärkeren A/B/C-Signale feuern. Konsequenz:
Typ D ist im Pine Script enthalten, aber **standardmäßig aus** — sinnvoll als
Standalone-Variante (A/B/C aus) oder zum Experimentieren, nicht im Mix.

*Reproduzierbar via `python3 backtest.py <csv> BTC|GOLD` mit auf 4h/1D
resampelten OHLCV-Daten.*

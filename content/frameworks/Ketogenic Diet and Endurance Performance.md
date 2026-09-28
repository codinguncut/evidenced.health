---
type: framework
question: Does a ketogenic low-carbohydrate high-fat diet improve aerobic capacity or endurance exercise performance?
aliases: [Keto and Endurance, LCHF and Performance, Ketogenic Diet Athletic Performance, Fat Adaptation Endurance, K-LCHF, VO2max Ketogenic Diet, Ketogenic Diet Aerobic Capacity]
authors: [Cao, Jingguo; Lei, Siman; Wang, Xiuqiang; Cheng, Sulin]
sources: [Cao - Ketogenic Diet Aerobic Capacity 2021]
confidence: low
relationships:
  related_to:
    - Surrogate Outcomes
    - Net Effect vs Intended Effect
    - The Comparator Problem
    - Low-Carbohydrate vs Balanced-Carbohydrate Diets
    - Cardiorespiratory Fitness and Mortality
    - Dietary Nitrate and Exercise Performance
created: 2026-09-23
updated: 2026-09-24
self_critiqued: 2026-09-23
---

The popular claim is that a ketogenic low-carbohydrate high-fat (K-LCHF) diet, by shifting muscle
substrate use toward fat, boosts the endurance athlete's aerobic capacity and performance — the
*fat-adaptation* thesis, alive since Phinney's 1983 study and revived with the keto/paleo wave.
[@cao2021keto] A gold meta-analysis says the
substrate shift is real and large, and it buys **no** measured performance benefit.

## The answer, in one line

**In endurance athletes, a K-LCHF diet (<=10% carbohydrate, >=60% fat) does not improve VO2max, time
to exhaustion, maximal heart rate, or perceived exertion versus a habitual or high-carbohydrate diet —
even though it strongly shifts fuel use toward fat.** The one outcome that moves (respiratory exchange
ratio) is a *substrate surrogate*, not a performance endpoint. [@cao2021keto]

## The evidence

Cao 2021 (Nutrients): PRISMA/PROSPERO-registered SR+MA, AMSTAR-assessed, Cochrane risk-of-bias tool,
random-effects, standardized mean difference (SMD). **10 studies (4 crossover + 6 controlled), 139
participants**, almost all male endurance athletes (5-24 per study); K-LCHF <=10% CHO / >=60% fat vs
comparator >=40% CHO / <=40% fat; interventions mostly 2-6 weeks (one 5 days, one 12 weeks).
[@cao2021keto]

| Outcome | SMD (95% CI) | p | I2 | Studies (n) | Evidence state |
|---|---|---|---|---|---|
| **VO2max** (aerobic capacity) | -0.06 (-0.36, 0.25) | 0.72 | 0% | 10 (139) | no meaningful effect |
| **Time to exhaustion** (TTE) | -0.13 (-0.66, 0.40) | 0.64 | 0% | 3 (48) | insufficient (few studies) |
| **Maximal heart rate** (HRmax) | 0.14 (-0.35, 0.63) | 0.58 | 52% | 8 (126) | no meaningful effect |
| **Perceived exertion** (RPE) | 0.14 (-0.58, 0.86) | 0.71 | 70% | 6 (102) | insufficient (high het.) |
| **Respiratory exchange ratio** (RER) | -1.81 (-2.49, -1.13) | <0.00001 | 58% | 8 (103) | large effect — *surrogate* |

[@cao2021keto]

The four evidence states, kept distinct (classification is the wiki's reading of the pooled numbers
above, applying the benefit/harm/no-effect/insufficient taxonomy):

- **No meaningful effect — VO2max.** The most robust cell: SMD essentially zero, CI tight around
  null, I2 = 0% across all 10 studies. This is a null with power behind it, not silence.
- **No meaningful effect — HRmax** (on the *maximum*; SMD \~0, though I2 = 52%). Narrative caveat: a
  high-fat diet may raise *submaximal* heart rate \~7-9 bpm via sympathetic activation — a different
  outcome the pooled HRmax figure does not capture. [@cao2021keto]
- **Insufficient evidence — TTE and RPE.** TTE rests on only 3 studies (48 athletes) with a wide CI;
  the authors flag the limited data. RPE has I2 = 70% (high heterogeneity). Neither is a confident
  null — they are under-evidenced, distinct from VO2max's powered null.
- **Confirmed large effect — RER** (SMD -1.81, all studies same direction). But RER is a **surrogate
  for substrate oxidation** (low RER = more fat burned), not a performance outcome. The mechanism
  fires hard; performance does not follow.

## Why it matters — the mechanism fires but the outcome does not

This is a clean **surrogate-vs-outcome** and **net-effect-vs-intended-effect** case. The fat-adaptation
thesis predicts a chain: less carbohydrate -> more fat oxidation (RER falls) -> larger usable energy
store -> better endurance. The **first link is confirmed and large** (RER SMD -1.81); the **terminal
patient/performance-important links are flat** (VO2max, TTE). A dramatic surrogate move bought no
capacity. The plausible reason the authors give: high-intensity work still depends on muscle glycogen,
so «The ability to exercise at high intensity may be impaired by the K-LCHF diet» even as fat oxidation
rises. [@cao2021keto] Their read on HRmax is
explicit — the null «implies there is no evidence of a significant performance advantage after the
K-LCHF diet (ketogenic or not)». [@cao2021keto]

Body mass fell significantly on K-LCHF in 7 of the studies, yet VO2max did not rise — including the two
studies reporting body-mass-adjusted (relative) VO2max. So even the weight-loss channel did not deliver
an aerobic gain. [@cao2021keto]

## Decision relevance

For an endurance athlete or active person **considering keto to improve aerobic performance**, framed as
a substitution from their habitual/higher-carbohydrate diet: the switch trades away carbohydrate
availability (which still matters for high-intensity work) for a substrate shift that does not translate
into capacity or performance, with possible high-intensity impairment. **Net: no performance gain to be
expected; the belief is not supported by the pooled gold evidence.** Weight loss may occur but does not
raise VO2max. If the goal is *performance*, this lever ranks at zero benefit; keto may still be chosen
for other reasons (weight, T2D — see [[Low-Carbohydrate vs Balanced-Carbohydrate Diets]]), but not for
the aerobic-performance reason it is often sold on.

## Limits

- Small MA: 10 small studies, 139 participants, **almost entirely male** — does not represent women
  (a cited primary found a VO2max *reduction* in women but not men) or the general population.
  [@cao2021keto]
- Short-to-moderate durations (mostly 2-6 weeks); long-term (months-to-years) fat-adaptation is
  untested here — though excluding the 5-day study left results unchanged.
- Primary performance outcome was **lab TTE in a graded exercise test, not race time** in real
  competition — a comparator/outcome-relevance caveat ([[The Comparator Problem]]).
- Diet cannot be blinded; whole-diet interventions carry the usual measurement and adherence
  uncertainty.
- **Single gold source** — `confidence: low` reflects corroboration breadth not yet established, not
  doubt about this MA's internal soundness. A second gold SR/MA (broader keto-performance, or a
  strength/power endpoint) would firm the null. — 2nd gold on keto and athletic
  performance to corroborate or bound the null.

## References

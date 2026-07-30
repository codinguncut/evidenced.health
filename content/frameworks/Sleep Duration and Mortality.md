---
type: framework
question: How much sleep, and is the short/long mortality U-curve causal or a marker of illness?
aliases: [Sleep Duration, Sleep and Mortality, Short Sleep, Long Sleep, Sleep U-Curve, How Much Sleep]
authors: [Cappuccio, Francesco P; D'Elia, Lanfranco; Strazzullo, Pasquale; Miller, Michelle A]
sources: [Cappuccio - Sleep Duration and Mortality 2010]
cluster: sleep
nucleus: true
confidence: medium
created: 2026-07-28
updated: 2026-07-28
relationships:
  related_to:
    - The U-Shaped Association Artifact
    - Alcohol and Mortality and Vascular Disease
    - Measurement Error in Dietary Assessment
---

Opens the `sleep` cluster. Both short and long sleep are associated with higher mortality — a U-curve
around a \~7-8 h reference. But the two arms are **not the same kind of finding**, and reading them as
one (*any deviation from 7-8 h shortens life*) is the error this page exists to prevent.


``
## The U-curve — two arms, very different footing

| Arm (vs \~7-8 h reference) | Pooled RR (95% CI) | Heterogeneity | Source |
|---|---|---|---|
| **Short sleep** (commonly <7 h, often <5 h) | **1.12 (1.06-1.18)** | I2 = 39% | Cappuccio |
| **Long sleep** (commonly >8-9 h) | **1.30 (1.22-1.38)** | I2 = 71% | Cappuccio |

[@cappuccio2010, Results]

16 studies, 27 cohorts, 1.38 million people, 112k deaths, all-cause mortality; reference «7 to 8 h per
night». Short-follow-up studies (<3 y) were «excluded a priori... to avoid measurements of sleep
duration being too close to the time of death» — a reverse-causation guard on the *short* arm.

## The asymmetry is the finding — one arm is likely causal, the other a marker of illness

**The long-sleep arm is the larger association and the weaker claim** — an instance of
[[The U-Shaped Association Artifact]] in its reverse-causation form. Cappuccio adjudicates it directly:

> «no studies published to date have demonstrated a possible mechanism mediating the effect of long
> duration of sleep as a cause of morbidity and mortality. The association between long duration of
> sleep and mortality may be explained by residual confounding and co-morbidities.»

Named confounders/reverse-causes: «depressive symptoms, low socio-economic status, unemployment, low
level of physical activity, undiagnosed health conditions, poor general health, and cancer-related
fatigue». The authors' framing: long sleep «may be a powerful additional marker of ill-health» and
«sleeping 9 h or more per night may represent a useful diagnostic tool for detecting subclinical or
undiagnosed co-morbidity».
[@cappuccio2010, Discussion]

**Three tells confirm the long arm is artifact-shaped, not dose-shaped** — each is exactly what the
concept says to look for:

- it is the **larger** association (1.30 vs 1.12) yet the one with **no mechanism**;
- it has **much higher heterogeneity** (I2 71% vs 39%);
- it **strengthens with age and with a longer cutoff** — «stronger in older than younger cohorts» (>=60 y
  RR 1.46 vs <60 y 1.22) and rising «>8 h, >=9 h... >=10 h» (>=10 h RR 1.54) — a frailty/illness gradient,
  not a physiological dose-response. The short arm, by contrast, is **flat across every subgroup**
  (age, cutoff; heterogeneity P=0.89).
[@cappuccio2010, Sources of Heterogeneity; Figure 5]

**The short-sleep arm has the causal footing the long arm lacks.** It carries a named mechanism —
«reciprocal changes in circulating levels of leptin and ghrelin... increase appetite, caloric intake,
reduce energy expenditure... impaired glycemic control with increased cardiovascular risk», plus
cortisol, growth hormone, and low-grade inflammation — and cause-specific directional evidence from
Whitehall II: those who **curtailed** sleep died «predominantly from cardiovascular causes (2.04)»
while those who **increased** sleep died mainly of «non-cardiovascular» causes (2.06) — the pattern
expected if short sleep is causal and long sleep tracks illness.
[@cappuccio2010, Potential Mechanisms; Study Limitations]

## Decision relevance

- **The actionable arm is short sleep.** Chronic short sleep (<7 h, especially <5 h) carries a real
  \~12% higher mortality with a plausible causal mechanism — a lever worth pulling toward \~7-8 h.
- ***Sleep less to live longer* is not supported.** The 30% long-sleep risk is mostly a *marker* of
  underlying illness; shortening a long sleeper's sleep is optimising a symptom, not the cause. A
  habitual long sleeper is a candidate for evaluation of occult illness, not a sleep-reduction target.
- **The reference is \~7-8 h**, and the curve is shallow near it — precision beyond "adequate, not
  chronically short" is not warranted by this evidence.


``
## Limits

- **All exposure is self-reported, single-timepoint** — «sleep questionnaires» that often «did not
  allow... to differentiate time asleep from time in bed» -> [[Measurement Error in Dietary Assessment]]
  (same instrument problem, different domain).
- **Observational meta-analysis — cannot control confounding** by construction; «residual confounding
  and bias remain a possibility». The causal reading of the short arm rests on mechanism + the
  Whitehall decomposition, not on the pooled association alone.
- **Single source, single guidance-family-free** — no second family or a device-measured (actigraphy)
  cohort held; self-report is the binding limit. AWAITS an objective-measurement sleep source and a
  guideline (AASM) for the recommendation-level read.
- Coherence, not validity (R1): the association is what the cohorts report; the causal split between
  arms is the authors' mechanistic argument, not a settled fact.


``

## References

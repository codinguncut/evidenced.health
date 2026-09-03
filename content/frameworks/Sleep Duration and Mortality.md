---
type: framework
question: How much sleep, and is the short/long mortality U-curve causal or a marker of illness?
aliases: [Sleep Duration, Sleep and Mortality, Short Sleep, Long Sleep, Sleep U-Curve, How Much Sleep]
authors: [Cappuccio, Francesco P; D'Elia, Lanfranco; Strazzullo, Pasquale; Miller, Michelle A; Livingston, Gill; Yin, Jiawei; Liu, Liegang; Wang, Shanshan; Ai, Sizhi]
sources: [Cappuccio - Sleep Duration and Mortality 2010, Livingston - Dementia Prevention 2024, Yin - Sleep Duration Mortality Dose-Response 2017, Wang - Sleep Duration Cardiovascular Meta-Review 2022]
cluster: sleep
nucleus: true
confidence: medium
created: 2026-07-28
updated: 2026-09-02
self_critiqued: 2026-09-02
relationships:
  related_to:
    - The U-Shaped Association Artifact
    - Alcohol and Mortality and Vascular Disease
    - Measurement Error in Dietary Assessment
    - Sleep and Metabolic Health
    - Sleep Regularity and Mortality
    - Sleep Aids and Insomnia Treatment
    - Dementia Prevention and Modifiable Risk Factors
---

Opens the `sleep` cluster. Both short and long sleep are associated with higher mortality — a U-curve
around a \~7-8 h reference. But the two arms are **not the same kind of finding**, and reading them as
one (*any deviation from 7-8 h shortens life*) is the error this page exists to prevent.



## The U-curve — two arms, very different footing

| Arm (vs \~7-8 h reference) | Pooled RR (95% CI) | Heterogeneity | Source |
|---|---|---|---|
| **Short sleep** (commonly <7 h, often <5 h) | **1.12 (1.06-1.18)** | I2 = 39% | Cappuccio |
| **Long sleep** (commonly >8-9 h) | **1.30 (1.22-1.38)** | I2 = 71% | Cappuccio |

[@cappuccio2010]

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
[@cappuccio2010]

**Three tells confirm the long arm is artifact-shaped, not dose-shaped** — each is exactly what the
concept says to look for:

- it is the **larger** association (1.30 vs 1.12) yet the one with **no mechanism**;
- it has **much higher heterogeneity** (I2 71% vs 39%);
- it **strengthens with age and with a longer cutoff** — «stronger in older than younger cohorts» (>=60 y
  RR 1.46 vs <60 y 1.22) and rising «>8 h, >=9 h... >=10 h» (>=10 h RR 1.54) — a frailty/illness gradient,
  not a physiological dose-response. The short arm, by contrast, is **flat across every subgroup**
  (age, cutoff; heterogeneity P=0.89).
[@cappuccio2010]

**The short-sleep arm has the causal footing the long arm lacks.** It carries a named mechanism —
«reciprocal changes in circulating levels of leptin and ghrelin... increase appetite, caloric intake,
reduce energy expenditure... impaired glycemic control with increased cardiovascular risk», plus
cortisol, growth hormone, and low-grade inflammation — and cause-specific directional evidence from
Whitehall II: those who **curtailed** sleep died «predominantly from cardiovascular causes (2.04)»
while those who **increased** sleep died mainly of «non-cardiovascular» causes (2.06) — the pattern
expected if short sleep is causal and long sleep tracks illness.
[@cappuccio2010]

**Caveat on the leptin/ghrelin mechanism — the RCT evidence does not support it.** The appetite-hormone
axis cited above is the popular *explanation*; a meta-analysis of sleep-manipulation RCTs found **no**
significant pooled effect of sleep restriction on leptin or ghrelin, and concludes hedonic factors
likely dominate. Sleep restriction does reliably raise food intake experimentally, but not via the
hormonal route named here — so hold leptin/ghrelin as a discounted mechanism, not a demonstrated one
-> [[Sleep and Metabolic Health]] (Capers 2015, where this refinement and the T2D/adiposity evidence
live).


## Second outcome — dementia, and the arm-level split replicates cleanly

The 2024 Lancet Commission examined sleep as a candidate dementia risk factor and its verdict reproduces
this page's arm-level asymmetry exactly -> [[The U-Shaped Association Artifact]]. The **long-sleep arm is
an artifact**: «further evidence indicates that prolonged sleep is not a risk factor for dementia, although
dementia and its prodrome may cause prolonged sleep. People should not curtail their sleep to reduce
dementia risk.» [@livingston2024] The tell is decisive — a
Swedish cohort's long-sleep/dementia association «was completely attenuated after cases occurring in the
first 5 years of follow-up were excluded», the signature of reverse causation. The **short-sleep arm carries
a small, mechanism-backed risk** (million-woman study RR 1.08, 1.04-1.12 for <7 h; persistent <=6 h at
50/60/70 a «30% increased dementia risk»), though the Commission judges it not yet clear enough to
recommend on — dementia is added to the outcomes where the short arm looks causal and the long arm does
not. Notably the Commission declined to make *any* sleep-duration recommendation, an honest
insufficient-evidence stop the wiki mirrors.

<div class="recent-update" data-last-updated="2026-09-02"></div>

## Third outcome — CVD incidence (CAD/HF/stroke), and the MR strong check lands `[2026-09-02, Wang]` `type-F`

The held sleep-CVD evidence above is **mortality-only** (Cappuccio, Yin: all-cause / CV mortality). Wang
2022 — a meta-review + meta-analysis pooling four observational MAs and 11 Mendelian-randomization (MR)
studies — adds the **morbidity/incidence** endpoints (CAD/CHD, HF, stroke incidence) AND supplies the
**genetic strong check** the causal-vs-marker split above rested on *argument* for. Referent 7 h throughout.

**Observational CVD incidence — the same U/J the mortality curve shows.** CHD is U-shaped (Wang D. 2016,
AMSTAR 11): vs 7 h, per 1 h *reduction* RR 1.11 (1.05-1.16) and per 1 h *increment* RR 1.07 (1.00-1.15),
both with high heterogeneity (I2 59-71%). Stroke is J-shaped (He 2017, 16 cohorts, 528,653): per additional
hour RR 1.13 (1.07-1.20), the long arm steep (9 h 1.45, 10 h 1.64).
[@wang2022sleep]

**The MR causal check — short sleep is CAUSAL, and it is the arm with the mechanism.** Genetically-predicted
short sleep raises CAD (pooled IVW OR 1.24, 1.15-1.34), MI (OR 1.20, 1.12-1.28), and HF (both MR studies
positive; Zhao IVW OR 1.14, 1.03-1.26); per-hour *longer* genetically-predicted sleep is protective for CAD
(OR 0.74, 0.59-0.92) and MI (OR 0.84, 0.73-0.97). Wang's verdict: «evidence is accumulating that short sleep
duration is a causal risk factor for CAD and HF», and «short sleep duration rather than long sleep duration
is associated with the risk of CAD or HF».
[@wang2022sleep]

**The MR does NOT support long-sleep causality — but that is insufficient evidence, not a demonstrated null.**
Neither MR study found a causal CAD association for long sleep, both HF MR studies were null, and stroke was
null — Wang states «long sleep duration has no causal associations with stroke and CAD in the MR studies».
This is the arm the observational curve most inflates: Wang attributes the long-sleep observational signal to
long sleep being «a surrogate risk indicator for poor health status or sleep quality» and associations that
«may have been confounded by these unmeasured factors and reﬂected potential reverse causality». **But the MR
long-sleep nulls are underpowered, not decisive** — the genetic instruments for long sleep are few (one MR
did «no analysis» for want of SNPs), and Wang concedes «MR studies ... did not provide suﬃcient evidence
supporting the causal association between long sleep duration» and «No clear experimental evidence shows the
harmful eﬀects of long sleep duration». So the long arm moves from *argued-artifact* toward
*genetically-unsupported*, without a demonstrated no-effect -> [[The U-Shaped Association Artifact]] (this is
the strong check that instance awaited).
[@wang2022sleep]

**Decision refinement.** For a **short** sleeper (<7 h), the causal footing is now stronger — MR converges
with the mechanism and Whitehall direction, so extending toward 7-8 h is a lever with genetic support. For a
**long** sleeper, Wang's own rule holds and hardens: «For people who have a long sleep duration, we should
not directly recommend increasing sleep duration to reduce the risk of CVDs» — shortening a long sleeper's
sleep optimises a marker, and the genetic check gives no reason to treat long sleep as a modifiable cause.
NOT an independent-E corroboration of Cappuccio: Wang re-pools the same overlapping observational cohorts, so
the observational agreement is shared-base, not independent — the beyond-summary value is the MR *method* leg
(a genetic natural experiment) triangulating the same question.

[inferred from @wang2022sleep]

## Duration is not the only axis — two facets now sit under this nucleus

- **Regularity may be the stronger lever.** Objective accelerometry shows day-to-day *consistency* of
  sleep timing (Sleep Regularity Index) out-predicts *duration* for mortality in the same cohort — a
  distinct exposure the duration-centric guidelines miss -> [[Sleep Regularity and Mortality]].
- **Treatment is its own decision.** Once insomnia is present, the choice among CBT-I, hypnotics and
  melatonin turns on harm + durability, not sleep-number effect size -> [[Sleep Aids and Insomnia Treatment]].
[inferred from @windred2023]

## Decision relevance

- **The actionable arm is short sleep.** Chronic short sleep (<7 h, especially <5 h) carries a real
  \~12% higher mortality with a plausible causal mechanism — a lever worth pulling toward \~7-8 h.
- ***Sleep less to live longer* is not supported.** The 30% long-sleep risk is mostly a *marker* of
  underlying illness; shortening a long sleeper's sleep is optimising a symptom, not the cause. A
  habitual long sleeper is a candidate for evaluation of occult illness, not a sleep-reduction target.
- **The reference is \~7-8 h**, and the curve is shallow near it — precision beyond "adequate, not
  chronically short" is not warranted by this evidence.


[inferred from @cappuccio2010]

## "7-8 h" is a referent, not a validated target with an upper bound `[2026-08-07, maintainer challenge]`

Three honest limits on reading "aim for 7-8 h" off this evidence:

- **The short arm is POOLED and flat across cutoffs, so 6-7 h is not resolved from <5 h.** Cappuccio's
  short-sleep category bundles 6-7 h with chronic <5 h, and the short-arm RR is flat across cutoff
  definitions (heterogeneity P=0.89, above). So \~1.12 is the *pooled* short-sleep RR — not evidence that
  6-7 h specifically carries it; the risk most plausibly concentrates at *chronic* short sleep (<5-6 h),
  making the lower bound arguably **6+ h**, not a hard 7 h. (12% is also small for an observational metric,
  near the range residual confounding alone can produce; it is believed over the long arm only because it
  carries a mechanism + the Whitehall cause-specific direction, not because 12% is itself compelling.)
- **No evidenced harm at the upper end — so "up to 8 h" is not a ceiling.** The long-sleep association is
  the reverse-causation artifact (no mechanism; it strengthens with age/illness/longer cutoff), NOT evidence
  that sleeping 8+ h harms a healthy person. Stating an *upper bound* launders that artifact into a
  dose-response cap — and the page's own rule already holds that shortening a long sleeper's sleep optimises
  a symptom, not a cause.
- **Between \~7 and 8 h is most plausibly diminishing returns, not a knee or a harm boundary.** The curve is
  shallow near the referent; precision beyond "adequate, not chronically short" is not warranted, and
  neither is a stated upper cap.
[inferred from @cappuccio2010]

## The sub-7 h band, RESOLVED — Yin's per-hour curve `[2026-08-13, Yin]` `type-F`

Cappuccio pools all short sleep into ONE flat category (1.12, invariant across cutoffs, P=0.89), so it
**cannot say whether 6-7 h carries the penalty or only chronic <5 h**. Yin 2017 — a larger dose-response
SR+MA (67 articles, 141 reports, 3.58 M participants; restricted-cubic-spline, 7 h reference) — resolves
the arm per discrete hour. This is a claim-**refinement** (type-F), not independent backing: same design
class (SR+MA of self-reported prospective cohorts), same outcome, overlapping cohort base — Yin
disaggregates the quantity Cappuccio pooled.

| Parameter | Cappuccio 2010 (pooled) | Yin 2017 (per-hour spline) | Same quantity? |
|---|---|---|---|
| Outcome | all-cause mortality | all-cause mortality | yes |
| Design | SR+MA, prospective cohorts | SR+MA dose-response, prospective cohorts | yes |
| Exposure | self-reported sleep | self-reported sleep | yes |
| Reference | 7-8 h band | 7 h point (8 h already 1.04) | \~yes — Yin's 8 h is slightly above nadir, so the bands differ marginally at the top edge |
| Short arm | ONE pooled 1.12 (1.06-1.18), flat across cutoffs | 6 h 1.01, 5 h 1.04, 4 h 1.08, 3 h 1.12 (1.10-1.14) | **no — Yin resolves what Cappuccio pools (the refinement)** |
| Long arm | ONE pooled 1.30 (1.22-1.38) | 9 h 1.15, 10 h 1.32 (1.29-1.35), 11 h 1.53 (1.47-1.59) | **no — same disaggregation; Cappuccio's 1.30 sits at \~10 h** |

[@yin2017]

**What the resolution shows (all-cause):** the short-arm penalty is **concentrated at chronic short
sleep**. 6 h is barely above the 7 h nadir (1.01, CI 1.00-1.01), 5 h is 1.04, and the arm steepens only
below \~5 h (3 h 1.12) — so Cappuccio's *pooled* short-sleep RR is necessarily driven by the chronic-short
(sub-5 h) studies, not the 6-7 h band. (Cappuccio's pooled 1.12 and Yin's 3 h spline point coincide
numerically but are different quantities — a shortest-vs-referent pool vs a per-hour estimate — so the
shared finding is the *concentration*, not the number.) This **cashes this page's own hypothesis** (the *referent-not-target* section above:
*the risk most plausibly concentrates at chronic short sleep, making the lower bound arguably 6+ h*) with
numbers. The steep, asymmetric **long arm** (9 h 1.15 -> 11 h 1.53) reconfirms the arm-asymmetry framing:
the larger association is the long-sleep one, and it still has no mechanism.

- **Outcome-specific shape.** CHD is the exception — a *steeper* short arm (4 h 1.16, CI 1.09-1.23) with
  the nadir nearer 7 h; **stroke** has the flattest short arm (4-6 h CIs cross 1.00) and the steepest long
  arm (10 h 1.64, CI 1.47-1.82). Read the curve per outcome, not one U for all.
- **What Yin does NOT close.** Exposure is still self-reported — «nearly all studies relied on sleep
  duration that was self-reported by questionnaire or interview»
  [@yin2017] — so this resolves the *shape*,
  not the measurement-error limit, and the AASM-guideline / objective-actigraphy AWAITS below still stand.
  Adjudication of the long arm is weak-checks-only (multivariable adjustment; no referent-correction, no
  MR) — the long arm stays an unadjudicated [[The U-Shaped Association Artifact]] instance. Publication
  bias is NOT a differential tell: Egger flagged BOTH long-sleep/CVD and short-sleep/all-cause at P=0.01,
  and BOTH survived trim-and-fill unchanged (imputed 1.22 and 1.04 respectively) — it cuts symmetrically,
  so it cannot single out the long arm.

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


[inferred from @cappuccio2010]

## References

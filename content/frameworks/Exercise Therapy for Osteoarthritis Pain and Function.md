---
type: framework
question: For established knee or hip osteoarthritis, how large and how durable is the pain/function benefit of exercise therapy versus usual care, and for whom does it work best?
aliases: [Exercise Therapy for OA, Exercise for OA Pain, Exercise Efficacy Osteoarthritis, OA Exercise Effect Size, Exercise Dose Osteoarthritis, Exercise Therapy Knee Hip OA]
authors: [Goh, Siew Li; Persson, Monica S M; Stocks, Joanne; Hou, Yunfei; Lin, Jianhao; Hall, Michelle C.; Doherty, Michael; Zhang, Weiya]
sources: [Goh - Exercise Therapy Knee Osteoarthritis]
cluster: osteoarthritis
nucleus: false
confidence: moderate
relationships:
  related_to:
    - Knee Osteoarthritis and Modifiable Levers
    - Knee Osteoarthritis Incidence and Risk Factors
    - Chronic Pain and Physical Activity
    - Surrogate Outcomes
    - Physical Activity Dose and Mortality
    - Shared Modifiable Levers Across Age-Related Diseases
    - Baseline Risk and the Relative-Absolute Split
created: 2026-10-04
updated: 2026-10-04
self_critiqued: 2026-10-04
---
<div class="recent-page" data-last-updated="2026-10-04"></div>


Orbiter of the `osteoarthritis` cluster. **This page characterizes the EXERCISE lever in depth** — how
big its effect on pain and function is, how long it lasts, and who responds — where the nucleus
-> [[Knee Osteoarthritis and Modifiable Levers]] ranks exercise *against* the other lever (weight loss).
The nucleus leaned on a single-site RCT (IDEA, in a weight-loss context) and a surrogate-outcome MA
(EULAR, fitness/strength) for the exercise claim; this page supplies the **direct, patient-important
pain/function effect of exercise alone**, pooled across 77 trials — a quality upgrade and independent
backing on a nominally-covered question.

**Scope discipline:** exercise as a modifiable lever on OA *pain and function* — patient-important QoL
outcomes on the one health axis, often critical-rated. NOT disease management (drug/injection/surgery
selection, acute-pain control). These outcomes (self-reported pain, heterogeneous WOMAC/function
scales, QoL instruments) are measured *worst*, so the discipline is **more honest uncertainty, not
more confident advice** -> [[Surrogate Outcomes]].

## The effect — moderate on pain and function, small on QoL, at 8 weeks

[@goh2019] Gold SR+MA: 77 RCTs, 6472
participants with knee or hip OA; **exercise (all types, administered alone) vs usual care**, between-
group SMD (Cohen's method, random effects) at or nearest to 8 weeks (the most commonly reported time
point). Usual care — not an active comparator — was the reference; education/manual-therapy controls
were excluded to standardize the reference arm. «Relative to usual care at or nearest to 8 weeks,
exercise conferred a moderate» benefit for pain relief (SMD 0.56, 95% CI 0.44-0.68).

| Outcome | SMD (95% CI), all studies | I2 | SMD, "homogeneous" subset (I2 < 30%) | Cohen size |
|---|---|---|---|---|
| Pain | 0.56 (0.44-0.68) | 74.1% | 0.50 (0.43-0.58) | moderate |
| Function | 0.50 (0.38-0.63) | — | 0.43 (0.35-0.51) | moderate |
| Performance (objective) | 0.46 (0.35-0.57) | — | 0.32 (0.25-0.39) | small-moderate |
| Quality of life | 0.21 (0.11-0.31) | — | 0.18 (0.09-0.27) | small |

- **The benefit is larger on what the patient feels (pain, function) than on QoL.** The QoL effect is
  real but small (0.21); the authors attribute the gap to the difficulty of a standardized instrument
  capturing «a construct that is individually unique» — a measurement limit, not necessarily a smaller
  true effect.
- **The honest-subset readout matters.** Restricting to "homogeneous" RCTs (removing the
  heterogeneity-driving studies until I2 < 30%) shrinks every estimate by roughly 10-30% but leaves all
  four statistically significant. So the headline figures are somewhat **inflated by the lower-quality,
  heterogeneous trials**, and the defensible lower bound is pain \~0.50 / function \~0.43 — still moderate.

## Durability is the decision-changer — the effect decays to nothing by 9-18 months

[@goh2019] «We found a general trend for the
effects of exercise therapy to peak at 2 months for all outcomes»; thereafter «The effects were
reduced gradually after 2 months and became no better than the usual care group at 9 to 18 months
depending on the outcome.»

- **The decision-change (route to adherence-is-part-of-the-effect).** Exercise for OA is **not a course
  you complete** — it is a maintained exposure. A time-limited programme buys 2-6 months of relief and
  then the benefit is gone; the advice is continuation, not completion. This concords with the Fransen
  Cochrane finding (cited by Goh) that pain/function gains halve between month 2 and 6
  [@goh2019].
- **Caveat on the early peak.** The large effect seen within 1 month «may be due to the small study
  effect» (only 1-2 trials at that point), so the true trajectory is best read from \~2 months onward.
- **This is a plateau-then-reversal in TIME, not a dose-response plateau** — do not confuse the two.
  It says the effect is contingent on ongoing stimulus, the opposite of a durable structural change
  -> structural-leverage is exactly what exercise-for-OA lacks, unlike weight loss (which removes a
  standing driver) on the nucleus.

## Who responds — determinants, and the obesity stratum

[@goh2019] Subgroup / meta-regression on the
pain outcome (overall ES 0.56, I2 74.1%). Univariate SMDs by stratum:

| Stratum | SMD (95% CI) | Contrast | Modifier after adjustment? |
|---|---|---|---|
| Age < 60 | 1.32 (0.79-1.86) | vs >=60: 0.44 (0.34-0.55) | yes (multivariate P 0.04) |
| Knee OA | 0.64 (0.51-0.78) | vs hip: 0.17 (-0.17-0.51); mixed: 0.43 (0.13-0.72) | yes (P 0.10) |
| Not on TJR waiting list | 0.62 (0.49-0.75) | vs waiting-list: 0.33 (0.04-0.63) | yes (P 0.10) |
| BMI >= 30 (obese) | 0.56 (0.28-0.84) | vs < 30: 0.46 (0.38-0.60) | **no** (P 0.78) |

- **Obesity does NOT blunt the exercise effect — the transportability finding for the deliverable's
  obese/sedentary stratum.** The obese subgroup's point estimate is if anything slightly higher (0.56
  vs 0.46), and the difference is far from significant (P 0.78). Since obesity is the dominant OA risk
  factor -> [[Knee Osteoarthritis Incidence and Risk Factors]], the entry stratum for most OA patients
  IS the obese one, and the exercise lever **transports to it intact**. Combined with the nucleus's
  IDEA result (weight loss is additive on top), the obese OA patient should do **both** — exercise
  works regardless of weight, and losing weight adds a second, mechanistically distinct benefit.
- **The severity gradient — milder disease, larger benefit.** Not-awaiting-replacement (0.62) beats
  waiting-list (0.33); the inverse association between exercise benefit and OA severity is the pattern,
  consistent with exercise producing «greater improvement with milder than more severe OA»
  [@goh2019]. Decision read: for advanced,
  surgery-bound disease, expect a smaller symptomatic return from exercise — but still positive.
- **Hip OA pain response is UNESTABLISHED here, not a demonstrated null.** Only 8 hip trials; pain SMD
  0.17 with a CI crossing zero (-0.17-0.51) — insufficient evidence, not proof of no effect (the
  four-evidence-states discipline). The cluster's exercise evidence is knee-dominant (80% of trials);
  do not transport the knee effect size to hip OA as if established.
- **Younger patients respond more**, but the authors caution this may reflect OA severity, comorbidity
  burden and reduced functional reserve in older patients rather than age itself.

**Read every determinant as route-(b) effect-modification CANDIDATE, hypothesis-generating only.**
[inferred from @goh2019] These are **study-level** (aggregate)
subgroup/meta-regression results, so they carry ecological bias — «the average change observed at the
group level does not accurately reflect the change that occurs within each individual». The authors set
a deliberately loose P <= 0.10 «to ensure that we would not miss any potential determinants» and state
«the aim of this analysis was to generate hypotheses to guide future individual patient-data
meta-analyses». So these are the false-positive-prone route-(b) signals the method layer warns about —
the age/joint-site/severity directions are plausible and worth testing in IPD, but **not yet confirmed
effect modifiers**. The BMI *null* is the more robust read (a null from a subgroup is less prone to
the multiple-comparison inflation than a positive).

## Certainty — why this is moderate, not high

[inferred from @goh2019]

- **Small-study / publication bias.** Egger's test was significant (P < 0.05) for all outcomes **except**
  QoL — the pain/function/performance effects are inflated by small favourable studies.
- **Less-rigorous trials inflate the effect.** «RCTs with less rigorous methods (small sample size,
  unclear/no exercise adherence monitoring, no explicit use of ITT) or RCTs that were heterogeneous
  tended to inflate the effect of exercise» — the honest-subset figures above are the correction.
- **Exercise cannot be blinded**, so the greatest risk of bias is blinding of patients/physicians; the
  self-reported outcomes (pain, function, QoL) are the most exposed. Objective performance (assessor-
  blinded in 52% of trials) is the least-biased readout, and it carries a *smaller* honest-subset
  effect (0.32).
- **No single pooled point estimate from good-quality trials only** was possible — no composite quality
  score for exercise RCTs exists, so robustness was assessed by subgroup/sensitivity rather than a
  quality-restricted meta-analysis.

## How this refines the cluster

[inferred from @goh2019]

- **Type-F/E on the nucleus's exercise claim.** The nucleus -> [[Knee Osteoarthritis and Modifiable Levers]] flagged a limit: its exercise evidence was on fitness/strength *surrogates* (EULAR) plus one
  single-site RCT (IDEA). Goh partly closes it with the **direct patient-important** pain/function
  effect of exercise alone, from 77 independent trials — a different design (large MA vs single-site
  RCT) reaching a compatible conclusion (independent backing), while **bounding** the claim with the
  durability decay and the small-study inflation the nucleus did not hold.
- **The obesity convergence, now on the treatment side too.** The incidence orbiter found obesity the
  dominant *incidence* lever; the nucleus found weight loss the dominant *symptom* lever; this page adds
  that the *exercise* lever works **regardless of** obesity — so for the obese OA patient the two levers
  are independent and additive, not competing.

## Gaps and open threads (type-G)

- **No exercise-MODE ranking here.** Goh pooled *all* exercise types; the comparison of exercise types
  (aerobic vs strengthening vs aquatic vs mind-body) was the explicit remit of the companion network
  meta-analysis from the same project (PROSPERO CRD42016033865), not held
  -> — would answer *which exercise mode is best for OA
  pain/function*, directly deliverable-relevant. Until then, *any exercise beats usual care* is the
  held claim; *this mode beats that mode* is not. **Partially addressed (not closed) by
  Luan** -> [[Stationary Cycling for Knee Osteoarthritis]]: a pairwise MA finds stationary cycling
  neither superior nor inferior to the other modes it was compared with (swimming, treadmill, Tai Chi,
  Baduanjin) on every WOMAC/KOOS outcome — so the working answer *no mode clearly dominates on OA
  symptoms* now has direct backing (choose mode by preference/cost/impact-tolerance), but the full
  all-modes relative-efficacy NMA is still owed. (The quote and the per-outcome nulls live on that page,
  cited to Luan; this is the cross-page structuring, not a fresh Luan extraction here.)
- **Is exercise good OR bad for the knee? The causation companion — LANDED.** This page is the *treatment*
  side (exercise relieves established OA); the *causation* side — does running/loading CAUSE or accelerate
  OA — is now held on -> [[Knee Osteoarthritis Incidence and Risk Factors]] (Alentorn-Geli 2017 MA). It
  resolves the apparent paradox without contradicting this page: recreational running is joint-safe to
  protective (knee OR 0.83), *competitive/high-mileage* running and a *sedentary* lifestyle both sit on the
  high arm of a U-shape, and occupational loading raises incidence -> [[The Physical Activity Paradox]].
 The two sources are a **DISTINCTION, not a tension** (different question — treatment of
  established OA vs causal association in runners; parameter table on the incidence page): graded exercise
  relieves an arthritic knee *and* recreational loading does not cause OA in a healthy one. The obese,
  previously-injured novice remains the explicitly-untested harm stratum — favour lower-impact modalities
  there -> [[Exercise Interventions and Sports Injury Prevention]].
- **The IPD gap.** Every determinant needs individual-patient-data confirmation; the study-level
  signals are hypotheses. `G (needs aggregation)`-adjacent: the within-person effect modification is a
  quantity this aggregate MA structurally cannot compute.
- **No long-term disability trajectory.** The outcomes are 8-week-to-18-month pain/function; no source
  here grades exercise against a realized multi-year disability or joint-replacement outcome — the loop
  stays open (R1).

## Self-critique `[run 2026-10-04, before commit]`

- **Not laundered from one source restated.** The beyond-summary moves: (1) the provisional-C induction
  of the *characterize the exercise lever* sub-question distinct from the nucleus's lever-ranking;
  (2) the type-E/F read that Goh's direct pain/function effect independently backs and bounds the
  nucleus's surrogate-based exercise claim; (3) the obese-stratum transportability bridge (BMI null +
  obesity-is-the-entry-stratum) tying this to the incidence orbiter; (4) the durability-as-contingent-
  stimulus contrast with weight-loss structural leverage. Each is tagged; the estimates
  stay Goh's.
- **Not overclaimed.** Confidence MODERATE: gold MA with large N and direct patient-important outcomes
  (upgrades), but significant small-study bias on three of four outcomes, honest-subset shrinkage, and
  determinants that are ecological / hypothesis-generating by the authors' own framing. The determinant
  directions are flagged as route-(b) candidates, not confirmed modifiers; the BMI null is given more
  weight than the positive subgroups.
- **No fabricated mode ranking.** The dispatch framed this as a mode-NMA; the paper is a pairwise
  exercise-vs-usual-care MA with patient-determinant subgroups. The mode comparison is left as an
  explicit AWAITS gap, not invented.
- **Coherence, not validity** (R1): the page reports effect sizes, their decay, and their certainty; it
  does not assert a realized long-term disability benefit — the open loop is named.

## References

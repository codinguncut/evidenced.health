---
type: framework
question: Does exercise training raise bone mineral density in postmenopausal women, by how much, and does that surrogate gain transmit to fewer fractures?
aliases: [Exercise BMD Postmenopausal, Exercise Bone Density, Weight-Bearing Exercise Bone Density, Resistance Training Bone Density, Exercise Osteoporosis Prevention BMD, Bone Loading Exercise]
authors: [Mohebbi, Ramin; Shojaa, Mahdieh; Kohl, Matthias; von Stengel, Simon; Jakob, Franz; Kerschan-Schindl, Katharina; Lange, Uwe; Peters, Stefan; Thomasius, Friederike; Uder, Michael; Kemmler, Wolfgang]
sources: [Mohebbi - Exercise Bone Mineral Density Postmenopausal Meta-Analysis 2023]
confidence: medium
self_critiqued: 2026-08-27
relationships:
  related_to:
    - Exercise for Preventing Falls in Older Adults
    - Exercise Safety in Osteoporosis
    - Surrogate Outcomes
    - Muscle-Strengthening Activity and Mortality
    - Dairy and Bone Health
    - Menopause and the Shifting Levers
    - Baseline Risk and the Relative-Absolute Split
    - Resistance Training Prescription - Load Sets and Frequency
    - Measurement Error in Dietary Assessment
created: 2026-08-27
updated: 2026-08-27
---

**The efficacy question for exercise on the bone surrogate in postmenopausal women — and the
surrogate discipline that gates what the answer is worth.** The safety page
([[Exercise Safety in Osteoporosis]]) asks whether exercise *breaks* a fragile skeleton; the falls
page ([[Exercise for Preventing Falls in Older Adults]]) asks whether it prevents the *fall* that
fractures one. This page asks the third, distinct decision: does loading the skeleton **raise bone
mineral density (BMD)**, and — the load-bearing question — does a BMD gain actually mean **fewer
fractures**, the outcome a person cares about. First source held: Mohebbi 2023, a gold updated
SR-MA (80 studies, 94 training and 80 control groups, 5581 participants pooled) of controlled
exercise trials >= 6 months, applying the inverse-heterogeneity (IVhet) model.
[@mohebbi2023]

## The effect on the surrogate: real, positive, small-to-moderate

Exercise raises BMD at all three sites, but the effect is modest and the magnitude framing is the
source's own:

- **Lumbar spine (LS):** SMD 0.29 (95% CI 0.16-0.42); heterogeneity substantial (I2 = 68%), and
  **publication-bias/small-study evidence HIGH** at this site.
- **Femoral neck (FN):** SMD 0.27 (95% CI 0.16-0.39).
- **Total hip (TH):** SMD 0.41 (95% CI 0.30-0.52); heterogeneity low (I2 = 20%), publication-bias
  evidence negligible.

[@mohebbi2023]

The authors classify the size plainly: «the average SMD for BMD effects on LS, FN, and TH can be
classified as moderate at best (i.e., 0.2 to 0.5)»
[@mohebbi2023].
So the honest headline is a **small positive standardized effect on a surrogate**, best-evidenced and
cleanest at the total hip, and weakest (noisiest, most bias-suspect) at the lumbar spine.

## The moderators are all NULL — the *for whom* question does not separate

The update's stated purpose was to find **effect modification** — who benefits more. It found none.
Across three pre-specified group comparisons the exercise effect on BMD did **not** differ
significantly (all p > .09):

- **osteopenia/osteoporosis vs normal BMD** (bone status),
- **early vs late postmenopausal** (menopausal status),
- **predominantly supervised vs predominantly non-supervised** programs.

[@mohebbi2023]

This is a **route-(b) null**: the search for a subgroup with a larger *relative* BMD effect came up
empty on the three axes most expected to modify it. It does **not** deny route-(a) stratification —
absolute fracture benefit still scales with baseline fracture risk even when the relative BMD effect
is flat ([[Baseline Risk and the Relative-Absolute Split]]) — but it removes the positive
interaction evidence that would license personalizing the *exercise* prescription by bone or
menopausal status. The high residual heterogeneity (I2 up to 68%) says trials differ a lot in
effect, but the measured moderators do not explain it.

## The load-bearing limit: BMD is a SURROGATE, and transmission to fracture is not shown here

[inferred from @mohebbi2023] — Mohebbi
measures BMD, **not fracture**. BMD is a surrogate for the patient-important outcome (fracture,
and downstream function/independence), and the whole surrogate discipline applies
([[Surrogate Outcomes]]). Two cautions run in **opposite** directions and both matter:

- **BMD may UNDER-capture exercise's true fracture benefit.** Exercise prevents fractures through at
  least two channels, and BMD sees only one. The **bone-loading channel** (mechanostat: load raises
  BMD) is what this page measures; the **falls channel** (balance, strength, gait -> fewer falls ->
  fewer fractures) is largely **BMD-independent** and is where the *larger* fracture signal for older
  adults sits ([[Exercise for Preventing Falls in Older Adults]]: exercise cuts falls, RaR \~0.77).
  A BMD meta-analysis is structurally blind to that channel — the streetlight effect on the outcome
  side.
- **A small statistical BMD gain may NOT transmit to meaningful fracture reduction.** The corpus
  already holds a worked **inversion** of exactly the BMD->fracture link: GRADE's handbook names
  «bone mineral density for fractures» as a *proximate* surrogate (rate down only one level), yet in
  the TRAVERSE testosterone RCT the surrogate rose while clinical fractures rose too (HR 1.43) ->
  [[Surrogate Outcomes]]. Proximity plus mechanism plus a consistently-moving marker were still not
  enough. That case is a different exposure (a drug, not loading) and cannot be transported to
  exercise, but it is the standing proof that a BMD gain is not self-evidently a fracture reduction.

[inferred from @mohebbi2023]
The direct fracture-outcome evidence for exercise is not held here. Mohebbi's own group reports it
elsewhere — «the favorable effect of supervised exercise protocols on fracture»
[@mohebbi2023] —
but that SR is a separate source not yet held (an exercise -> fracture-incidence
meta-analysis), needed to close the surrogate->outcome step for the loading channel.

## The supervision discordance — surrogate silent, real outcome not

A sharp instance of why the surrogate can mislead: supervision made **no significant difference to
BMD** in this meta-analysis (the null above), yet Mohebbi's group argues supervision matters *more*
for bone than for falls, and their separate fracture SR credits **supervised** protocols with the
fracture benefit
[@mohebbi2023].
So a program feature that is **null on the BMD surrogate** may still bear on the **patient-important
outcome** (adherence, dose fidelity, safety) — a caution against reading *no BMD difference* as *no
decision difference*. [inferred from @mohebbi2023]

## Confidence, and the non-independence caveat

`confidence: medium`, and the three legs are deliberately split:

- **BMD-surrogate efficacy exists and is positive: well-evidenced** (gold updated SR-MA, consistent
  across three sites, robust IVhet model). This leg alone would be high.
- **Moderators: NULL / low** — no effect modification shown on bone status, menopausal status, or
  supervision; do not personalize the prescription on them.
- **Fracture transmission: low / uncertain** — not measured here; the surrogate discipline and the
  in-corpus inversion cap what the BMD gain licenses. This is what pulls the page to medium.

**Non-independence (binding).** Mohebbi is the **Erlangen/Kemmler group** (Kemmler, von Stengel,
Shojaa, Jakob among the authors) and is an explicit **update** of Shojaa et al. — «further evidence»
in the source's own words. It is therefore **not** independent (type-E) corroboration of the broader
Shojaa/Kemmler exercise-bone literature; convergence across their reviews reflects a shared team,
data pool, and method, and must not inflate confidence. The wiki holds no independent research
group's exercise-BMD meta-analysis yet — a genuine gap for the robustness of the surrogate effect.

## The author's own verdict on meta-analytic precision here

Notably, the source itself doubts that pooling delivers a prescription: «their practical application
for deriving dedicated and reliable exercise recommendations is rather limited»
[@mohebbi2023].
The high between-trial heterogeneity means the *mean* SMD hides wide variation in what individual
protocols achieve — the pooled number says exercise-in-general nudges BMD, not which program a
person should do. The load/impact/dose specifics live in the programming frontier
([[Resistance Training Prescription - Load Sets and Frequency]]), kept peripheral by Layer-1.

## Decision relevance

- **The exposure is worth pulling, but size the rock honestly.** For a postmenopausal woman, exercise
  produces a small positive BMD effect on a surrogate; its *stronger* fracture case rests on the
  falls channel it does not measure ([[Exercise for Preventing Falls in Older Adults]]) plus a
  separate, not-yet-held fracture SR. Frame the recommendation on the **composite** (bone + falls +
  strength + function), not on the BMD number alone.
- **Non-substitutable by the obvious drug — for the pleiotropy, not the BMD.** An antiresorptive
  (bisphosphonate) raises BMD and cuts fracture and would, for the **bone-density outcome alone**,
  shrink the exercise rock. But exercise is **pleiotropic** (falls, muscle, gait, cardiometabolic,
  mortality -> [[Muscle-Strengthening Activity and Mortality]]) and a single-channel drug does not
  substitute for those other-channel benefits — so the lever's rank falls only for the BMD outcome
  the drug actually covers. The drug's efficacy/limitations are **not held in the fabric** — a genuine G-gap (bisphosphonate/antiresorptive comparator); do not assert its
  effect as fact here, and the choice between lever and drug stays the person's (Layer 3).
- **Do not personalize the exercise prescription on bone or menopausal status** — the moderator
  evidence is null; the stratifying variable that *does* work is baseline **fracture** risk (route
  (a), absolute benefit), which BMD/FRAX supplies as a prognostic input, not a treatment target.
- **Menopause context:** accelerated post-menopausal bone loss is one of the shifting levers
  ([[Menopause and the Shifting Levers]]); exercise is a modifiable counter-lever on the bone axis,
  weighted alongside the others there.

## References

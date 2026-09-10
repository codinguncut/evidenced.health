---
type: framework
question: How should resistance training be prescribed — load, sets, weekly frequency, and equipment modality (free-weights vs machines) — for strength versus hypertrophy, what is the minimal effective dose, and does any of it move a health outcome?
aliases: [Resistance Training Prescription, RT Prescription, RTx, Load Sets Frequency, Weekly Sets, Strength vs Hypertrophy Training, Minimal Effective Dose Resistance Training, Higher Load Training, Sex Differences Resistance Training, Should Women Train Differently, RT by Sex, Free Weights vs Machines, Machine vs Free Weight Training, Equipment Modality Resistance Training, Specificity of Strength Training]
authors: [Currier, Brad S; Mcleod, Jonathan C; Phillips, Stuart M; Roberts, Brandon M; Nuckols, Greg; Krieger, James W; Haugen, Markus E; Varvik, Fredrik T; Larsen, Stian; Haugen, Arvid S; van den Tillaar, Roland; Bjornsen, Thomas]
sources: [Currier - Resistance Training Prescription NMA 2023, Roberts - Sex Differences Resistance Training Meta-Analysis 2020, Haugen - Free Weight vs Machine Strength Training 2023]
cluster: muscle
confidence: low
relationships:
  related_to:
    - Protein and Resistance Training for Muscle and Strength
    - Muscle-Strengthening Activity and Mortality
    - Surrogate Outcomes
    - Physical Activity Dose and Mortality
    - Grip Strength and Mortality
    - Low Muscle Mass and Mortality
    - Sarcopenia Definition and Diagnosis
created: 2026-08-06
updated: 2026-09-10
self_critiqued: 2026-09-10
---

**Peripheral scope** (exercise-programming) — admitted on the same evidence bar as any exposure, kept
low in the ranking because *attention is an anti-signal* and this is a heavily-discussed, mostly
small-between-option domain. It earns a page only because the evidence is **gold** (a Bayesian network
meta-analysis, 178 strength / 119 hypertrophy RCTs) and it settles one genuinely decision-relevant
thing: **the *resistance-training dose* is not one dial — strength and hypertrophy are driven by
different variables, and the gap between any-RT and no-RT dwarfs the gap between prescriptions.**

**Evidence-tier note (`confidence: low`).** Single gold NMA (Currier 2023). The *surrogates* (1RM
strength, muscle size) are RCT-grade; the *health-outcome* transmission is not established by this source
(see the surrogate boundary below), and the primary trials are unblindable (moderate–high risk of bias).
Held `low` on total web support pending an independent line — and Currier is **not** independent of the
staged ACSM 2026 stand or of Morton's protein RCT-MA (shared Phillips/McMaster team), so a second
same-lineage source would not raise it. [inferred from @currier2023]


[@currier2023]
## The big rock: any prescription beats none — the between-prescription differences are second-order

Currier compared 12 prescriptions (load H ≥80% 1RM / L <80%; sets M multiset / S single; frequency
≥3 / 2 / 1 per week) against non-exercise control (CTRL). **Every one beat CTRL** for both strength (SMD
0.75–1.60 vs CTRL) and hypertrophy (SMD 0.10–0.66). But once you are training, the choice of prescription
barely separates: «The 95% CrI contained zero for a striking 91% (101/111) of all between-­RTx
comparisons.» So the decision that carries the effect is **train vs not-train**, not which protocol —
which is why Currier's own conclusion is that «adults should engage in RT, even if they cannot meet
existing recommendations», not that they hit an optimal scheme. This is the Layer-1 ranking made
concrete: the first dollar (start RT) buys almost everything; optimizing the prescription is the long
tail.


[@currier2023]
## The decomposition (the value): strength is load-driven, hypertrophy is volume-driven

The one place prescription *does* matter splits by outcome — and the two do not track together, so
the *resistance-training dose* is a **terminological conflation** of two different curves:

| Outcome (surrogate) | What drives it | Top-ranked RTx | Effect vs CTRL (SMD, 95% CrI) | Between-RTx separation |
|---|---|---|---|---|
| **Strength** (1RM) | **load** (≥80% 1RM), multiset | HM3 (heavy, multiset, ≥3×/wk) | «1.60 (1.38 to 1.82)» | 9 of 10 non-zero comparisons were HM2/HM3 vs a lower-load RTx |
| **Hypertrophy** (muscle size) | **volume** (sets), load \~irrelevant | HM2 (heavy, multiset, 2×/wk) | «0.66 (0.47 to 0.85)» | only 1 of 45 comparisons excluded zero |

- **Strength:** «higher-­load, multiset programmes caused the largest strength gains» — the only variable
  that reliably separated prescriptions. Robust under sensitivity analysis and threshold analysis
  (HM3->HM2 the only revision).
- **Hypertrophy:** «All RT prescriptions may comparably promote muscle hypertrophy, and the influence of
  load was less apparent» — sets/volume, not load, rank the top prescriptions. Training **to failure did
  not explain** the hypertrophic response in these (mostly untrained) participants (network
  meta-regression for 'failure' didn't improve fit); Currier flags failure «may... be increasingly
  important for trained individuals».

**Why this is a real distinction, not a fake tension** (parameter-table check): the two SMD columns are
**different outcomes measured on different instruments** (1RM force vs cross-sectional area / lean mass),
so *load matters for one and not the other* is not a contradiction to reconcile — it is two curves.
Filing it as a tension would compare non-commensurable quantities.


[@currier2023]
## Minimal effective dose — a floor, not a located knee

- «There was a 95% probability that RT with at least two sets or two sessions per week increased
  strength ... and training with at least two sets and two sessions per week resulted in hypertrophy.»
- Lower-CrI floor across prescriptions: «at least a moderate (SMD>0.47)» strength and «small (SMD>0.16)»
  mass increase — i.e. even the leanest prescription is not trivial.
  [@currier2023]

**The curve's shape is under-determined here, and that is a G-gap, not a plateau.** Currier coded load /
sets / frequency **categorically** (H/L, M/S, 1/2/3), not continuously, so a true knee *within* load or
volume cannot be located from this analysis — Currier says so and calls for continuous, model-based
dose-response NMA. So the honest reading is: a **large step from zero**, then a **broad flat region
across prescriptions** (hypertrophy) or a **modest load-gradient** (strength) — with the minimum
effective dose a *region* (\~2 sets, \~2×/week) rather than a point. [inferred from @currier2023] — the categorical-coding
limit and its *shape-under-determined* consequence are Currier's stated limitation read against the
wiki's dose-response vocabulary (a threshold quoted from categorical data marks the edge of the
evidence, not a feature of the curve). This is another instance of [[The Underivable Optimum]] — a broad
flat region (its Route 1) plus categorical/measurement under-determination (its Route 3), the same
under-identification the protein \~1.62 g/kg knee carries: **hold the RT dose numbers loosely too**, and
read the \~2 sets / \~2x per week as a floor, not an optimum.


[@currier2023]
<div class="recent-update" data-last-updated="2026-09-10">

## Effect modifiers — mostly absent (route-b is quiet here)

Network meta-regression found **no** obvious modifying effect on relative RTx effects from age, training
status, proportion female, duration, volitional fatigue, relative weekly volume load, measurement tool /
region, or publication year — data-sparse nodes reduced precision. So there is little positive evidence
that the *relative* ranking of prescriptions changes by stratum: personalization of the *protocol* rests
on preference and constraint (Route e), not on demonstrated effect modification (Route b). Baseline
(untrained) status still governs **absolute** gain — the big step is largest for the untrained.
[@currier2023]


[@haugen2023freeweight]

</div>

<div class="recent-update" data-last-updated="2026-09-10">

## Equipment modality (free-weights vs machines): specific for the test, equivalent for the outcome

The other much-debated RT dial — barbell/dumbbell vs pin-loaded machine — resolves the same way the
prescription dials do: it is second-order once you are training. Haugen pooled 13 studies that
*directly* compared the two modalities (n=1016, adults 18-60, free of chronic disease, >=6 weeks;
non-athletes; TESTEX quality fair-to-good, none excellent). This is an **independent line** (a Norwegian
group, no lineage overlap with Currier/McMaster) on a different sub-question, so it extends the
big-rock finding from *protocol* to *equipment*.

**The apparent modality advantage is test-specific, not a real difference in adaptation.** Trained with
free-weights, you gain more *free-weight-tested* strength (SMD -0.210, 95% CI -0.391 to -0.029, p=0.023);
trained on machines, you tend to gain more *machine-tested* strength (SMD 0.291, 95% CI -0.017 to 0.600,
p=0.064). Haugen reads this as the specificity (SAID) principle: «The principle of specificity applies,
which states that you should choose the exercise you want to be stronger in.» You get better at the
movement you actually train — a testing artifact of the transfer, not a superior modality.
[@haugen2023freeweight]

**On the outcome itself, no modality difference survives.** Comparing each group in the mode it trained,
or on a neutral test, the between-modality effect is null for dynamic strength (SMD 0.084, 95% CI -0.106
to 0.273, p=0.387), isometric/neutral strength (SMD -0.079, 95% CI -0.432 to 0.273, p=0.660),
countermovement jump (SMD -0.209, 95% CI -0.597 to 0.179, p=0.290), and hypertrophy (SMD -0.055, 95% CI
-0.397 to 0.287, p=0.751). Both modalities produced large within-group gains (strength SMD \~0.92 vs
\~0.97; hypertrophy \~0.25 vs \~0.21). Haugen's conclusion: «strength changes are specific to the training
modality, and the choice between free-weights and machines are down to individual preferences and
goals.» [@haugen2023freeweight]

- **One partial exception (small n):** a direct-strength sub-analysis favored machines for *upper-body*
  strength, with no difference lower-body — the hypertrophy arm rests on only 5-6 studies, so read this
  as an unsettled wrinkle, not a machine advantage. For hypertrophy Haugen defers to preference: «When
  the goal is to maximise muscle hypertrophy individual preferences should dictate the choice, but we
  speculate that a combination could yield the best benefit» (regional muscle growth may differ by
  modality even when total growth matches). [@haugen2023freeweight]
- **Injury risk does not break the tie either.** «Summed up, it is uncertain if there are different
  injury risks between free-weight and machine-based strength training.» The higher free-weight injury
  counts are mostly weights dropped on people (cross-sectional ED data), not a movement-execution
  hazard, and no longitudinal trial establishes causation; ACSM's view that «machines may be safer to
  use than free-weights based on skill requirements» is a skill-requirement argument, not an outcome
  finding.
  [@haugen2023freeweight]

**Decision:** choose equipment on preference, goal-specificity, and access — not on an expected
strength or hypertrophy advantage, because none exists on the outcome. The one place specificity
*does* bind is Route-e (constraint), not Route-b (effect modification): a competitor tested in a named
lift (powerlifter, weightlifter) must train that lift; a recreational trainee optimizing size or
general strength is free to pick either or mix. The surrogate boundary below applies unchanged — these
are 1RM / muscle-size / jump gains, not a health outcome.

**The big-rock pattern, now across two dials [inferred from @currier2023; @haugen2023freeweight].** Currier found 91% of
between-*prescription* comparisons contained zero; Haugen finds the between-*equipment* comparison null
on the outcome. These are two different sub-questions — protocol and equipment — and the same Layer-1
pattern holds across both: **once someone is training, the sub-choices — protocol and equipment alike —
are second-order to the train-vs-not-train decision.** This *generalizes* the ranking beyond
load/sets/frequency; it is not two studies corroborating one finding (they measure different quantities,
so it is not a type-E robustness claim), and it does not raise the page's confidence (Haugen's own
evidence base is thin and «tentative», and the health outcome is untouched).

**G-gap — bodyweight / calisthenics is unevidenced head-to-head.** Haugen restricted the comparison to
free-weights (barbell/dumbbell) vs *fixed-path* machines, and explicitly excluded cable, freemotion,
pneumatic, and variable-resistance equipment. No gold SR/MA directly comparing **bodyweight /
calisthenics training against loaded RT** for strength or hypertrophy is held — a named zero from the
research pass (verified absent at acquisition), not a settled equivalence. A gold head-to-head SR would
close it; until one lands, hold any bodyweight-vs-loaded claim at `confidence: low`.
[inferred from @haugen2023freeweight]

</div>

## Sex is not a meaningful effect modifier — one prescription for both (route-b null)

The most-asked stratification of RT — *should women train differently?* — has a **direct**
answer, and it is a well-bounded **null on relative gains**. Roberts pooled male-vs-female RELATIVE
adaptation to the SAME protocol across 50 studies (ages 18-50, >=5 weeks; supplements/HRT excluded),
splitting by outcome. The effect size is **male-group ES minus female-group ES**, so a negative value
favors females; every ES is a within-group, baseline-normalized (relative) change, NOT absolute kg/cm:

| Outcome (relative gain) | k (outcomes / studies) | Pooled ES (male-minus-female) | 95% CI | I2 | Verdict |
|---|---|---|---|---|---|
| Hypertrophy | 12 / 10 | 0.07 | -0.09 to 0.23 | 0 | **No sex difference** (tight null) |
| Upper-body strength | 19 / 17 | -0.60 | -0.93 to -0.26 | 72.1 | **Favors females** (moderate) |
| Lower-body strength | 23 / 23 | -0.21 | -0.54 to 0.12 | 74.7 | **No sex difference** |
[@roberts2020sex]

- Headline: «males and females adapted to RT with similar effect sizes for hypertrophy and lower-body
  strength, but females had a larger effect size for relative upper-body strength.»
  [@roberts2020sex] The one
  non-null runs **toward women**, not away — so nothing here motivates a *lighter/different* female
  prescription; if anything untrained women gain upper-body strength at least as fast relative to
  baseline.
- **The absolute-vs-relative trap, named by the source:** «Although it is true that absolute
  hypertrophy and gains in strength are larger in males after RT, it seems that relative increases in
  both muscularity and lower-body strength are similar between the sexes, and relative gains in
  upper-body strength may be larger in females.»
  [@roberts2020sex] Men gain
  more **absolute** size/strength (higher baseline mass, more upper-body androgen receptors); the
  **relative response curve is the same**. Reading the absolute gap as a different *response* is the
  error — it is a different *starting point* (a Route-a baseline fact, not a Route-b effect
  modification).
- **The upper-body female signal is plausibly an artifact, not biology** — the authors flag it: high
  heterogeneity (I2 \~72%) unreduced by covariates, mostly untrained short trials, and «This could cause
  a ceiling effect for motor skills that may explain differences in upper-body strength because the
  studies were conducted in mostly untrained subjects.»
  [@roberts2020sex] Men are
  often more familiar with upper-body movements (e.g. bench press), leaving women more short-run
  motor-learning headroom. So even the one non-null may not survive longer training or trained
  populations — it does not upgrade to a prescription difference.
- ***Lifting makes women bulky* — refuted on BOTH axes.** Relative hypertrophy is *equal*, not greater,
  in women (ES 0.07; CI -0.09 to 0.23; I2 = 0 — an unusually clean null), and **absolute** muscle gain
  is *smaller* in women. The same training does not build more muscle on a woman than on a man; the
  testosterone gap that was once invoked to predict blunted female hypertrophy did not produce it.
  [@roberts2020sex]

**Convergence with Currier's covariate null — but a different parameter.** Currier's prescription NMA
found «no» modifying effect of *proportion female* on the relative ranking of PRESCRIPTIONS (a
meta-regression covariate); Roberts is a **direct male-vs-female contrast of the response itself**.
These are different quantities (a between-RTx-ranking covariate vs a pooled within-protocol
sex-difference ES), so this is two independent designs/teams converging on the same *question* — sex
is not a route-(b) modifier here — not the same measurement re-pooled.
[inferred from @roberts2020sex; @currier2023]

**Decision:** prescribe RT the same for both sexes (load for strength, volume for size — as above).
Any sex-tailoring rests on preference/constraint (Route e) or absolute-baseline scaling (Route a),
NOT on demonstrated effect modification. The source is explicit that the direct trials do not settle a
prescription difference either way: «it is currently difficult to know if exercise prescription should
be different between sexes.» [@roberts2020sex]
The surrogate boundary below applies unchanged — these are 1RM/size gains, not a health outcome.

**Limits (Roberts):** mostly untrained subjects, short trials, high strength heterogeneity unexplained
by measured covariates, and **no formal risk-of-bias scoring** (the primary trials cannot blind
exercise, so the authors judged standard quality scales unusable) — a `high`-tier MA resting on
unblindable primaries, same design ceiling as Currier.
[@roberts2020sex]


## The surrogate → outcome boundary — the load-bearing honesty

Strength and muscle size are **surrogates** ([[Surrogate Outcomes]]), and Currier is unusually explicit
that the health-outcome link is not in this analysis: «We do not know how these RTx affect relevant
health outcomes» and «The effects on health outcomes of various RTx remain largely unknown.»
[@currier2023] The transmission differs by
surrogate, and the ranking of surrogates matters more than the ranking of prescriptions:

- **Strength → moderate transmission.** Strength (esp. grip) and muscle-strengthening *activity* track
  lower mortality observationally -> [[Grip Strength and Mortality]], [[Muscle-Strengthening Activity and Mortality]]
  (any MSA vs none: all-cause mortality RR 0.85; MSA + aerobic RR 0.60). But that is *activity/strength
  predicting death*, not *this NMA's 1RM gains reducing death* — no RCT closes it.
- **Strength → injury reduction is the one patient-important outcome established at CAUSAL (RCT-MA)
  grade** — see [[Exercise Interventions and Sports Injury Prevention]] (Lauersen: strength-training
  RR **0.315**, injuries cut to <1/3; the standout intervention, stretching null). This is the closest
  the resistance-training case gets to a hard endpoint on interventional rather than observational
  evidence. **Exposure-identity caveat:** Lauersen's strength arms are *eccentric / sport-specific
  injury-prevention* protocols in young athletes, NOT the hypertrophy-oriented general RT this page
  prescribes — so the transfer to a recreational/older gym trainer is a transportability gap, not a
  settled property of "RT". [inferred from @lauersen2013injury]
- **Hypertrophy → weakest transmission.** Low muscle *mass* predicts mortality
  ([[Low Muscle Mass and Mortality]]), but that raising size via training lowers mortality is unproven —
  hypertrophy is largely a surrogate for a surrogate. **Do not read the 0.66 hypertrophy SMD as a health
  effect.** [inferred from @currier2023]
- **The closest-to-patient-important signal here is physical function in older adults:** LM2/LM3/HM3
  improved mobility and gait speed, HM3 improved balance (few studies, ≥55y) — function is on the outcome
  menu directly, but the evidence is thin. [@currier2023]
- **Why the older-adult stratum needs this dose at all — the mechanism is [[Anabolic Resistance]].** Aging
  blunts the muscle-protein-synthesis response to a given protein dose; resistance training is the
  **non-nutritional lever that partially restores that sensitivity**, so the training stimulus and the
  higher per-meal protein target ([[Protein Intake for Older Adults]]: \~1.2 g/kg/day for the active
  older adult vs \~1.0 sedentary) are **complementary, not substitutes** — RT raises protein needs, and
  protein is what the restored response acts on.

<div class="recent-update" data-last-updated="2026-09-10">

## Decision relevance

- **The big rock is doing any resistance training at all.** Prescription choice is a second-order refinement
  — 91% of between-protocol comparisons were indistinguishable. Someone not currently training should not
  wait for the *right* scheme.
- **If the goal is strength:** bias toward **heavier loads (>80% 1RM), multiple sets**, \~2–3×/week. Load is
  the one variable that reliably buys more.
- **If the goal is size/hypertrophy:** chase **volume (sets)**; load is flexible — lighter loads work if the
  sets are there, and training to failure is not required (untrained). Pairs with the protein lever
  (\~1.6 g/kg/day) on [[Protein and Resistance Training for Muscle and Strength]] — the *other* input to the
  same adaptation.
- **Minimal effective dose:** roughly **2 sets, 2×/week** captures most of the available strength and size
  gain; more is a modestly steeper strength curve, not a different category.
- **Equipment is a preference choice, not a lever.** Free-weights and machines produce equivalent
  strength and hypertrophy on the outcome (Haugen: all direct-comparison CIs span zero); pick by
  preference, access, and goal-specificity. Specificity binds only for a competitor tested in a named
  lift — train that lift — not for general strength or size.
- **Adherence and preference win the ties.** With prescriptions near-equivalent, the sustainable protocol
  beats the theoretically-optimal-but-abandoned one — Currier frames the whole result as licensing choice.
- **Do not oversell the endpoint.** These are surrogate gains; the mortality/function payoff is inferred
  from separate observational lines, strongest for strength, weakest for pure hypertrophy.

[inferred from @currier2023]

</div>

<div class="recent-update" data-last-updated="2026-09-10">

## Limits

- **Surrogates only** — 1RM and muscle size; no mortality/disease endpoint (Currier states this outright).
- **Categorical coding** (H/L, M/S, 1/2/3) — cannot locate a continuous knee; periodized programmes, rest
  intervals, tempo, time-under-tension excluded/under-reported.
- **Unblindable primary trials** — moderate–high risk of bias (strength 22% high; hypertrophy 18% high);
  gold *design*, but the underlying RCTs cannot double-blind exercise.
- **Healthy adults only** — athletes, comorbidities, frail excluded; older-adult function data sparse.
- **Single source, shared lineage** — not independent of ACSM 2026 or Morton 2018 (Phillips/McMaster);
  `confidence: low` until an independent line lands.
- **Equipment facet is thin and tentative (Haugen)** — 13 studies, hypertrophy on only 5-6, none rated
  excellent quality, and the authors call the evidence «tentative»; unblindable primaries, same design
  ceiling. Its team is disjoint from Currier's but its evidence base is shallow, so it broadens the
  big-rock principle without upgrading the page's confidence.


[inferred from @currier2023]

</div>

## References

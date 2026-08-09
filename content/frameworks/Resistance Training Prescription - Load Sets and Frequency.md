---
type: framework
question: How should resistance training be prescribed — load, sets, weekly frequency — for strength versus hypertrophy, what is the minimal effective dose, and does any of it move a health outcome?
aliases: [Resistance Training Prescription, RT Prescription, RTx, Load Sets Frequency, Weekly Sets, Strength vs Hypertrophy Training, Minimal Effective Dose Resistance Training, Higher Load Training]
authors: [Currier, Brad S; Mcleod, Jonathan C; Phillips, Stuart M]
sources: [Currier - Resistance Training Prescription NMA 2023]
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
updated: 2026-08-07
self_critiqued: 2026-08-06
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


`[@currier2023]`
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


`[@currier2023]`
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


`[@currier2023]`
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


`[@currier2023]`
## Effect modifiers — mostly absent (route-b is quiet here)

Network meta-regression found **no** obvious modifying effect on relative RTx effects from age, training
status, proportion female, duration, volitional fatigue, relative weekly volume load, measurement tool /
region, or publication year — data-sparse nodes reduced precision. So there is little positive evidence
that the *relative* ranking of prescriptions changes by stratum: personalization of the *protocol* rests
on preference and constraint (Route e), not on demonstrated effect modification (Route b). Baseline
(untrained) status still governs **absolute** gain — the big step is largest for the untrained.
[@currier2023]


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
- **Adherence and preference win the ties.** With prescriptions near-equivalent, the sustainable protocol
  beats the theoretically-optimal-but-abandoned one — Currier frames the whole result as licensing choice.
- **Do not oversell the endpoint.** These are surrogate gains; the mortality/function payoff is inferred
  from separate observational lines, strongest for strength, weakest for pure hypertrophy.

[inferred from @currier2023]

## Limits

- **Surrogates only** — 1RM and muscle size; no mortality/disease endpoint (Currier states this outright).
- **Categorical coding** (H/L, M/S, 1/2/3) — cannot locate a continuous knee; periodized programmes, rest
  intervals, tempo, time-under-tension excluded/under-reported.
- **Unblindable primary trials** — moderate–high risk of bias (strength 22% high; hypertrophy 18% high);
  gold *design*, but the underlying RCTs cannot double-blind exercise.
- **Healthy adults only** — athletes, comorbidities, frail excluded; older-adult function data sparse.
- **Single source, shared lineage** — not independent of ACSM 2026 or Morton 2018 (Phillips/McMaster);
  `confidence: low` until an independent line lands.


[inferred from @currier2023]

## References

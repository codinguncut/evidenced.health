---
type: framework
question: Does higher nut consumption reduce cardiovascular disease, cancer, and all-cause/cause-specific mortality — for whom, by how much per serving, and with what dose-response shape?
aliases: [Nuts, Nut Consumption, Tree Nuts, Peanuts, Nuts and Mortality, Nuts and Cardiovascular Disease]
authors: [Aune, Dagfinn; Keum, NaNa; Giovannucci, Edward; Fadnes, Lars T; Boffetta, Paolo; Greenwood, Darren C; Tonstad, Serena; Vatten, Lars J; Riboli, Elio; Norat, Teresa]
sources: [Aune - Nut Consumption Mortality 2016, Aune - Fruit Vegetable Mortality 2017]
cluster: plant-foods
confidence: low
created: 2026-08-13
updated: 2026-08-13
self_critiqued: 2026-08-13
relationships:
  related_to:
    - Mediterranean Diet and Cardiovascular Events
    - Dietary Fibre and Health
    - The U-Shaped Association Artifact
    - The Underivable Optimum
    - Measurement Error in Dietary Assessment
    - Baseline Risk and the Relative-Absolute Split
    - Whole Grains Refined Grains and Pulses
---

**Domain-opener for nuts** (single gold source: Aune 2016, a dose-response SR+MA of 20 prospective
cohorts / 29 publications, up to 819,448 participants and 85,870 deaths). The exposure is *any edible
nut* — tree nuts, peanuts (a legume), and peanut butter, pooled for their similar nutrient profile.
All evidence here is **observational** (no RCT of nuts-vs-outcome; PREDIMED tests a whole pattern, not
nuts alone) — so the ceiling on certainty is confounding, not sampling.

[@aune2016nut]
## The per-serving effect estimates (dose-response, per 28 g/day = 1 serving/day)

Summary RRs per one serving/day increase in total-nut intake, random-effects:

| Outcome | RR per 28 g/day (95% CI) | I2 | n studies | Note |
|---|---|---|---|---|
| Coronary heart disease | 0.71 (0.63-0.80) | 47% | 11 | the steepest arm |
| Stroke | 0.93 (0.83-1.05) | 14% | 11 | **not significant** |
| Cardiovascular disease | 0.79 (0.70-0.88) | 60% | 12 | |
| Total cancer | 0.85 (0.76-0.94) | 42% | 8 | |
| All-cause mortality | 0.78 (0.72-0.84) | 66% | 15 | the headline |
| Respiratory-disease mortality | 0.48 (0.26-0.89) | 61% | 3 | few studies |
| Diabetes mortality | 0.61 (0.43-0.88) | 0% | 4 | |
| Neurodegenerative mortality | 0.65 (0.40-1.08) | 6% | 3 | ns |
| Infectious-disease mortality | 0.25 (0.07-0.85) | 54% | 2 | 2 studies only |
| Kidney-disease mortality | 0.27 (0.04-1.91) | 61% | 2 | ns, very wide |

The headline: a \~22% lower all-cause mortality per daily serving. Stroke is the one primary CVD outcome
with **no** significant linear association. The rarer causes of death (respiratory, diabetes, infection)
carry the largest point estimates but rest on 2-4 studies — treat as insufficient-evidence-leaning, not
banked.

[@aune2016nut]
## Dose-response SHAPE — a plateau at 15-20 g/day, not a monotone-more-is-better curve

Restricted-cubic-spline analyses found nonlinear associations for CHD, stroke, and all-cause mortality
(Pnonlinearity < 0.0001) and for CVD (Pnonlinearity = 0.001), «with most of the reduction in risk
observed up to an intake of
approximately 15-20 grams per day or 5-6 servings per week for most of the outcomes.»
[@aune2016nut] Above \~15-20 g/day the curve
flattens. **Total cancer is the exception** — no nonlinearity detected (Pnonlinearity = 0.11), i.e.
roughly linear over the studied range. This is a rare *observed* plateau in this corpus (most decision
curves the wiki examined were monotone-or-not-estimable) -> [[The Underivable Optimum]].

- **The *20 g/day optimal* is a study-edge, not a derived optimum.** Aune sets 20 g/day as the PAF
  reference «because there was little evidence of further reductions in risk above this level of intake»
  [@aune2016nut] — i.e. the number marks where the
  spline flattens *within the sampled range*, not a demonstrated point-optimum. Read it as a knee-region
  (a floor for most of the benefit), not a target -> [[The Underivable Optimum]].
- **Measurement caveat on the plateau.** Nut intake is FFQ self-report; dietary measurement error
  compresses slopes and can *erase* a knee but never *manufacture* one, so a measured plateau is weak
  evidence of a true one -> [[Measurement Error in Dietary Assessment]].

[@aune2016nut]
## Nut subtype — the pooled benefit is not uniform across types

Tree nuts and peanuts both associate with lower CHD, CVD, and all-cause mortality (per 10 g/day, peanuts
often steeper, e.g. CVD 0.64 [0.50-0.81]). But the outcome pattern splits: **only peanuts** reach
significance for stroke; **only tree nuts** for total cancer (tree nuts 0.80 [0.72-0.89]; peanuts null
0.92 [0.82-1.03]). **Peanut butter** is inverse for mortality in the high-vs-low analysis (0.89
[0.80-0.99]) but **null in dose-response** (0.94 [0.86-1.02], n=2) — the authors hypothesize added sugar
or salt may offset plain-peanut benefit, but 2 studies cannot settle it. The whole-nut pooling hides
these seams; the subtype estimates are thin (n=2-5).

[@aune2016nut]
## The population-absolute expression — PAF (causal assumption flagged)

The relative effects above become an absolute quantity only via baseline risk. Aune's population layer:
**assuming causality**, \~4.4 million premature deaths in 2013 (the Americas, Europe, SE Asia, W Pacific)
would be attributable to nut intake below 20 g/day — 1.19M from CHD, 469k cancer, 1.07M respiratory,
139k diabetes. This is a **modelled population burden** (PAF = p(rr-1)/(1+p(rr-1)), Miettinen), not a
per-person effect, and it inherits every assumption below -> [[Baseline Risk and the Relative-Absolute Split]].

## Why the certainty stays low — the confounding ceiling

[inferred from @aune2016nut] The consistency is real (20 cohorts, robust to
one-study-out, publication bias only in the all-cause analysis and gone after excluding <500-death
studies), but three things cap the causal reading:

- **Healthy-user confounding.** «Subjects with a high intake of nuts tend to be less likely to smoke, to
  be slimmer and more physically active, and to have a lower intake of red and processed meat and a
  higher intake of fruits and vegetables» — the textbook profile.
  [@aune2016nut] Associations *persisted* after
  adjustment for smoking, alcohol, PA, BMI, and diet, but adjustment is the *weak* check; there is **no MR
  / genetic instrument and no
  whole-food RCT**, so the effect is not adjudicated causal -> [[The U-Shaped Association Artifact]]
  (adjudication-route framing).
- **Measurement error runs toward the null here.** No included study corrected for it, but «because of
  the prospective design ... such errors would most likely attenuate the strength of the observed
  associations» [@aune2016nut] — so the true
  effect is, if anything, larger. (The toward-null direction holds for non-differential error in the
  univariate case; with mismeasured covariates the bias can run either way -> [[Measurement Error in Dietary Assessment]].)
- **PREDIMED cannot isolate nuts.** The one RCT (a Mediterranean diet *with* nuts vs control) cut CVD,
  but «it is not clear if this association is due to the Mediterranean diet component, nuts, or a
  combination of the two.» [@aune2016nut]
  -> [[Mediterranean Diet and Cardiovascular Events]].

## Decision relevance

- **Nuts are a plausible moderate lever, best framed as an addition/substitution**, with most of the
  associated benefit reached by \~15-20 g/day (a small handful, 5-6 servings/week) — chasing higher intake
  buys little in the data. The lever is observational-grade; rank it below the big rocks and below
  interventions with RCT/MR backing.
- **A regional contraindication (route c):** in areas where nuts are a major aflatoxin source,
  «increasing nut intake should only be recommended as long as aflatoxin contamination is avoided.»
  [@aune2016nut]
- **Open loop:** nothing here grades nut intake against a realized outcome in a randomized design; the
  causal step rests on consistency + mechanism + the toward-null measurement argument, not adjudication.

[inferred from @aune2016nut] **Independence note for later weaves:** Aune's team
also authored the parallel whole-grain dose-response MA (ref 47) using the *same* methods and overlapping
cohort infrastructure — so any future *consistency across Aune's plant-food MAs* is same-lab type-F, NOT
independent type-E backing.

## Sibling plant-food MA — F&V (Aune 2017) confirms the *pattern*, not independently `[2026-08-13]`

The parallel F&V dose-response MA from the same team recurs on every structural feature this page
notes, which is a same-lab **type-F consistency, not type-E backing** (F&V explicitly cites this nut MA
as ref 193) [@aune2017fv]:

- **Subtype non-uniformity, again.** As nut benefit split by type (tree vs peanut; peanut butter null),
  F&V benefit does **not** distribute evenly onto favourite fruits — grapes and berries are NS (berries
  point >1), while leafy greens/citrus carry the tight signals. The whole-category pooling hides the
  seams in both foods -> [[Fruit and Vegetable Intake and Health]].
- **The plateau/edge reads the same way.** Nut benefit flattened by \~15-20 g/day; F&V's lowest risk sits
  at the 800 g/day sampling edge — in both, the guideline-relevant number marks study density, not a
  demonstrated optimum -> [[The Underivable Optimum]].
- Both are observational, both cap at the confounding ceiling, both argue measurement error attenuates
  toward the null. Convergence across the two is **shared-lineage**, so it does not raise `confidence:`.

## References

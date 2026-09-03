---
type: framework
question: Does higher fruit and vegetable intake reduce cardiovascular disease, cancer, and all-cause mortality — for whom, by how much per 200 g/day, with what dose-response shape, and is the benefit uniform across specific types?
aliases: [Fruit and Vegetable Intake, Fruits and Vegetables, Fruit and Vegetables, F&V Intake, Five a Day, 5 a Day, Ten a Day, Fruit Intake, Vegetable Intake, Fruit and Vegetable Consumption]
authors: [Aune, Dagfinn; Giovannucci, Edward; Boffetta, Paolo; Fadnes, Lars T; Keum, NaNa; Norat, Teresa; Greenwood, Darren C; Riboli, Elio; Vatten, Lars J; Tonstad, Serena; Nordic Council of Ministers (org); Schwingshackl, Lukas; Bechthold, Angela]
sources: [Aune - Fruit Vegetable Mortality 2017, NNR - Nordic Nutrition Recommendations 2023, Schwingshackl - Food Groups All-Cause Mortality Meta-Analysis 2017, Bechthold - Food Groups CHD Stroke Heart Failure Meta-Analysis 2019, Schwingshackl - Food Groups Hypertension Meta-Analysis 2017]
cluster: plant-foods
nucleus: true
confidence: low
created: 2026-08-13
updated: 2026-08-28
self_critiqued: 2026-08-27
relationships:
  related_to:
    - Nut Consumption and Mortality
    - Whole Grains Refined Grains and Pulses
    - Dietary Fibre and Health
    - Mediterranean Diet and Cardiovascular Events
    - Measurement Error in Dietary Assessment
    - The Underivable Optimum
    - The U-Shaped Association Artifact
    - Baseline Risk and the Relative-Absolute Split
    - Potassium Intake and Blood Pressure
    - Vegetarian Dietary Patterns and Mortality
    - Free Sugars Intake
---

**Domain-opener / nucleus for fruit-and-vegetable intake** (single gold source: Aune 2017, a
dose-response SR+MA of 95 prospective cohorts / 142 publications, up to \~2.1 million participants and
up to 43k CHD, 47k stroke, 82k CVD, 112k cancer cases and 71k-94k deaths). All evidence here is
**observational** — no whole-food RCT of F&V vs a hard outcome exists (PREDIMED tests a whole
Mediterranean pattern, not F&V alone) — so the ceiling on certainty is confounding, not sampling.
The exposure is **whole fruit + vegetables combined** (80 g = 1 serving); potatoes/legumes handled as
subtypes, juices and tinned forms separated out below.

[@aune2017fv]
## The per-200 g/day effect estimates (linear dose-response, random-effects)

| Outcome | RR per 200 g/day F&V (95% CI) | I2 | n | Fruit alone | Veg alone |
|---|---|---|---|---|---|
| Coronary heart disease | 0.92 (0.90-0.94) | 0% | 15 | 0.90 (0.86-0.94) | 0.84 (0.79-0.90) |
| Stroke (total) | 0.84 (0.76-0.92) | 73% | 10 | 0.82 (0.74-0.90) | 0.87 (0.79-0.96) |
| Cardiovascular disease | 0.92 (0.90-0.95) | 31% | 13 | 0.87 (0.82-0.92) | 0.90 (0.87-0.93) |
| Total cancer | 0.97 (0.95-0.99) | 49% | 12 | 0.96 (0.94-0.99) | 0.96 (0.93-0.99) |
| All-cause mortality | 0.90 (0.87-0.93) | 83% | 15 | 0.85 (0.80-0.91) | 0.87 (0.82-0.92) |

- **The gradient is shallow per serving but real.** \~8-10% lower risk per 200 g/day for the CVD/death
  endpoints; cancer is the weak arm (\~3% per 200 g/day). CHD is the tightest estimate in the corpus
  (I2 0%, CI 0.90-0.94); stroke and all-cause carry high heterogeneity (I2 73-83%) — driven by *size*
  of association, not its presence (most cohorts inverse).
- **Stroke subtype split:** ischaemic 0.92 (0.87-0.97, I2 9%) vs haemorrhagic 0.88 (0.78-0.99, I2 0%)
  per 200 g/day — both inverse, ischaemic tighter.
- **F&V is nutritionally not one thing.** Aune attributes the effect to «a myriad of nutrients and
  phytochemicals, including fibre, vitamin C, carotenoids, antioxidants, potassium, flavonoids and
  other unidentified compounds which are likely to act synergistically»
  [@aune2017fv] — so F&V benefit is **not**
  clean evidence for any one component (the observed-healthy-population / component-not-category trap)
  -> [[Dietary Fibre and Health]], [[Potassium Intake and Blood Pressure]].

[@aune2017fv]
## Dose-response SHAPE — outcome-specific, and the "lowest risk" is the study-edge

Lowest observed risk (nonlinear splines): **cancer plateaus at 600 g/day (7.5 servings)** with «little
evidence of further reductions» above; **CHD, stroke, CVD and all-cause reach their lowest at 800 g/day
(10 servings)** — *«a level of intake that is double the five servings per day (400 g/day) currently
recommended»* [@aune2017fv]. Reductions
at 800 g/day: CHD 24%, stroke 33%, CVD 28%, all-cause 31% (vs no intake); cancer 14% at 550-600 g/day.

- **800 g/day is the sampling edge, not a demonstrated optimum.** It is where the studied range thins
  out, so read it as a floor-for-most-benefit region, not a point-target — the [[The Underivable Optimum]]
  rule. The curve is steepest at the *low* end (all-cause: steepest up to \~400 g/day), so the first
  servings carry most of the effect; the marginal value of the 9th-10th serving is small and uncertain.
- **Shape is outcome-specific, and CHD-combined is the anomaly:** F&V-combined -> CHD showed **no
  nonlinearity** (Pnonlinearity 0.30, approximately linear over the range), while fruit-alone and
  veg-alone -> CHD *were* nonlinear (Pnonlin < 0.0001) — a per-food-group display artifact as much as a
  biology claim. Stroke, CVD, cancer and all-cause were all nonlinear (steeper at low intake).
- **The high-intake flattening may be a measurement artifact, not a true plateau.** Aune: *«we can also
  not entirely exclude the possibility that the weaker dose-response curve at higher compared with lower
  intakes could partly be due to measurement errors»* — a hidden knee, not a real one. Measurement can
  HIDE a knee but not manufacture one, so the *«every reduction pays»* default holds
  -> [[Measurement Error in Dietary Assessment]], [[The U-Shaped Association Artifact]].

[@aune2017fv]
## Specific types — the pooled benefit is NOT uniform, and the "superfoods" are the thin cells

Per 100 g/day dose-response (or high-vs-low where noted). The tight, steep inverse signals sit with
**leafy greens and citrus**, NOT the berry/grape end that carries most marketing:

| Type | CHD | Stroke | Read |
|---|---|---|---|
| Green leafy vegetables | 0.72 (0.64-0.82) | 0.73 (0.57-0.94) | steepest + tightest, both endpoints |
| Citrus fruits | HvL 0.91 (0.86-0.96) | 0.78 (0.69-0.90) | robust, esp. stroke |
| Beta-carotene-rich F&V | 0.77 (0.65-0.91) | — | steep |
| Apples/pears | HvL 0.85 (0.79-0.93) | HvL 0.88 (0.81-0.96) | HvL sig, dose-resp NS |
| Pickled vegetables | — | 0.57 (0.43-0.74) | steep (2 studies) |
| Grapes | 0.87 (0.56-1.37) NS | 0.57 (0.34-0.97) | CHD null; stroke sig on **2 studies** |
| Berries | 1.13 (0.90-1.43) NS | 1.07 (0.79-1.45) NS | point estimate **>1** both; haemorrhagic 1.66 NS |
| Strawberries | 4.66 (1.14-19.03) | — | **single study, absurd CI — discard** |
| Cruciferous (CHD/stroke) | 0.99 NS | 1.04 NS | NS for CVD; sig for total *cancer* |

- **Answering the grapes-vs-berries question directly:** neither grapes nor berries shows a robust
  CHD benefit (both NS, berries point *above* 1.0); grapes' one significant signal (stroke 0.57) rests
  on **2 studies** with a wide range; the strawberry 4.66 is a one-study artifact. The subtype cells are
  thin (n=2-6, wide CIs) — the data **cannot individuate** most single fruits, and where they can, the
  winners are leafy greens/citrus, not berries/grapes. Do not read the pooled F&V effect as distributing
  evenly onto a favourite fruit.
- **FORM matters, and processing is the harm edge:** fruit *juice* was inverse for stroke
  (HvL 0.67 [0.60-0.76]; per-100 g 0.72 [0.63-0.83]) and CHD (HvL 0.79 [0.63-0.98]) in THIS body of
  evidence, whereas **tinned fruit was positively associated with cardiovascular disease** (a harm
  signal) — so the whole-vs-processed axis, not a blanket fruit-vs-juice rule, is what these data mark.
  Note the outcome scope: this is CVD/stroke, not the metabolic/hepatic channel where free-sugar juice
  concern lives -> [[Free Sugars Intake]].

[@aune2017fv]
## Measurement error and regression dilution — the effect is if anything UNDER-stated

Only three cohorts corrected for measurement error / regression-dilution, and each correction made the
association **stronger**, not weaker:

- EPIC: all-cause HR **0.97 (0.96-0.98) uncorrected -> 0.94 (0.91-0.96) corrected** per 200 g/day; IHD
  mortality 0.97 (0.95-0.99) -> 0.95 (0.91-0.99) per 80 g/day.
- China Kadoorie: CV death per one daily portion of fresh fruit **0.77 (0.72-0.83) before -> 0.63
  (0.56-0.72) after** regression-dilution correction — a large attenuation of the true effect by
  self-report noise. [@aune2017fv]
- Aune's own reading: *«both measurement error and regression dilution bias may have attenuated the
  observed risk estimates»* and *«Confounding might exaggerate the observed associations but measurement
  errors would most likely tend to attenuate»* — the two large biases push in **opposite** directions,
  so the reported RRs are a floor on the causal signal if the association is causal at all
  -> [[Measurement Error in Dietary Assessment]].

## Why the certainty stays low — the confounding ceiling

[inferred from @aune2017fv] The consistency is strong (95 cohorts, robust to
one-study-out and to region stratification, modest publication-bias signal that did not move the
summaries), but the causal reading is capped:

- **Healthy-user confounding, the textbook profile.** F&V intake is *«often associated with other
  lifestyle factors such as lower prevalence of smoking, less overweight and obesity, higher physical
  activity and lower intakes of alcohol and red and processed meat»*
  [@aune2017fv]. Associations *persisted*
  after adjustment, but adjustment is the weak check; there is **no whole-food RCT** on a hard outcome,
  and the one MR hint (Kobylecki, genetic plasma vitamin C) is a single embedded study, not the design's
  verdict -> [[The U-Shaped Association Artifact]] (adjudication-route framing).
- **Bradford-Hill invoked but not decisive.** Aune argues consistency, temporality, a biological
  gradient, plausibility and coherence — a moderate-strength association that *«should not be dismissed
  as non-causal»*, while granting residual confounding cannot be entirely ruled out. This is an
  argument for direction, not proof of magnitude.
- **Reverse-causation / access route.** Persons with high F&V intake *«may be more likely to undergo
  screening or have better access to or compliance with treatment»* — a mortality-specific bias the
  design cannot remove.

[@aune2017fv]
## The population-absolute expression — attributable deaths (causal assumption flagged)

The relative effects become an absolute quantity only via baseline risk. Aune's population layer,
**assuming causality**: an estimated **5.6 million** (intake below 500 g/day) and **7.8 million**
(below 800 g/day) premature deaths worldwide in 2013 attributable to low F&V intake — of the latter,
\~1.34M CHD, \~2.68M stroke, \~660k cancer. This is a **modelled population burden** (Miettinen PAF,
World Health Survey prevalence x GBD 2013 mortality), inheriting the causal, no-confounding and
generalizability assumptions Aune names -> [[Baseline Risk and the Relative-Absolute Split]]. It is not
a per-person effect and not a validated projection.

<div class="recent-update" data-last-updated="2026-08-27">

## Decision relevance

- **F&V is a moderate, observational-grade lever, best framed as addition/substitution**, with most of
  the associated benefit reached in the first few servings and the curve steepest at low intake — so
  moving from \~0-2 to \~5 servings is where the decision lives; the 5->10 servings gap buys progressively
  less and rests on the thin high-intake edge. Rank below the big rocks and below RCT/MR-backed levers.
- **Prefer whole forms and leafy greens/citrus** where a within-F&V choice is being made — the subtype
  data that survive are there, and tinned fruit carries a harm signal. But do not over-personalize onto
  a single fruit: the subtype cells are too thin to individuate (route-b effect-modification evidence is
  absent).
- **The ceiling is a finding.** For someone already at \~5 servings of varied whole F&V, the remaining
  lever (more servings, or swapping fruit for veg) is small and uncertain — a licence to stop optimizing
  here, not a failure to find more.
- **Open loop:** nothing grades F&V intake against a realized outcome in a randomized design; the causal
  step rests on consistency + mechanism + the toward-null measurement argument, not adjudication.

[inferred from @aune2017fv] **Independence note for later weaves:** Aune's team
(Imperial/NTNU; Aune-Norat-Riboli-Giovannucci) also authored the parallel whole-grain (ref 192) and nut
(ref 193) dose-response MAs cited *in this paper*, using the **same** methods and overlapping cohort
infrastructure. Any future *consistency across Aune's plant-food MAs* is same-lab **type-F / shared
lineage**, NOT independent type-E backing -> [[Nut Consumption and Mortality]],
[[Whole Grains Refined Grains and Pulses]].

</div>

<div class="recent-update" data-last-updated="2026-08-28">

## A guidance family sets a recommended range and reports the same shape — NNR2023 `[2026-08-27, NNR revisit]`

NNR2023 converts this observational evidence into an actionable range and, in doing so, reports the same
dose-response *shape* this page holds from Aune — an F-refinement that turns a single-source dose-response
page into a guidance-anchored recommendation.

- **The recommended intake:** «It is recommended to consume 500-800 grams, or more, per day of
  vegetables, fruits and berries in total. A variety of different types of both vegetables and fruits
  (including berries) should be consumed, with emphasis on dietary fibre contribution (potatoes and
  pulses are not included).» [@nnr2023] The
  potatoes-and-pulses exclusion matches Aune's exposure definition (F&V excluding potatoes/legumes).
- **The shape NNR reports mirrors Aune's:** «The largest reductions in risk are generally seen at the
  lower intake ranges, but for cardiovascular disease, reductions have been observed up to 800 g of
  fruits and vegetables per day.» [@nnr2023] —
  steepest at low intake, CVD benefit extending to \~800 g, the same two features Aune's splines show.

**One mild divergence on where all-cause mortality plateaus.** Aune places the all-cause nadir at
**800 g/day (10 servings)**; NNR (citing Rosell & Fadnes 2023) reports all-cause mortality «inverse
associations with all-cause mortality, levelling off at 5-6 servings of fruits and vegetables per day»
(\~400-500 g). [@nnr2023] Both are drawn off
observational splines at the thinning edge of the data — a difference in *which underlying MA* set the
plateau point, not a contradiction about direction (more F&V, lower risk, flattening somewhere in the
400-800 g region). It sharpens the page's existing caveat that the high-intake flattening may be a
measurement artifact rather than a located knee.

**Not independent backing, and confidence stays low.** NNR2023 is a guideline synthesis resting on the
same observational F&V literature (Rosell & Fadnes 2023, WCRF/AICR 2018, Fogelholm 2012, Stanaway 2022 —
the field Aune's cohorts sit inside), so it does **not** lift the confounding ceiling that caps this
page: there is still no whole-food F&V RCT on a hard outcome. It confirms *direction and shape* by a
second body, not by an independent route — no `[E-independent]`; `confidence: low` is unchanged.
[inferred from @nnr2023]

</div>

<div class="recent-update" data-last-updated="2026-08-28">

## Refinement — the DIfE/Boeing 12-food-group series (2026-08-28)

The series separates fruit from vegetables and shows their effects **diverge**. **Fruit** is
modestly protective across all five outcome families (mortality 0.94, T2D 0.98, CHD 0.94, stroke
0.90 per 100 g/d). **Vegetables** are protective for mortality/T2D/CVD but read **null for
hypertension** (1.00, 0.98-1.01) and **null for adiposity** — the source attributes the HTN null
partly to BMI over-adjustment. Both plateau at \~200-400 g/d.
[@schwingshackl2017mort]
[@bechthold2019]
[@schwingshackl2017htn] Full cross-outcome
grid -> [[Food Groups and Health Outcomes - A Dose-Response Matrix]].

</div>

## References

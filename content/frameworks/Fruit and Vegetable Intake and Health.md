---
type: framework
question: How is fruit and vegetable intake associated with cardiovascular disease, cancer, all-cause mortality and cognitive outcomes — magnitude per unit intake, dose-response shape and studied range, for whom, and does the association differ by type or form?
aliases: [Fruit and Vegetable Intake, Fruits and Vegetables, Fruit and Vegetables, F&V Intake, Five a Day, 5 a Day, Ten a Day, Fruit Intake, Vegetable Intake, Fruit and Vegetable Consumption]
authors: [Aune, Dagfinn; Giovannucci, Edward; Boffetta, Paolo; Fadnes, Lars T; Keum, NaNa; Norat, Teresa; Greenwood, Darren C; Riboli, Elio; Vatten, Lars J; Tonstad, Serena; Nordic Council of Ministers (org); Schwingshackl, Lukas; Bechthold, Angela; Schlesinger, Sabrina; Zhou, Yuhan; Wang, Jieyuan; Cao, Limin; Shi, Mengyuan; Liu, Huiyuan; Zhao, Yuhong; Xia, Yang]
sources: [Aune - Fruit Vegetable Mortality 2017, NNR - Nordic Nutrition Recommendations 2023, Schwingshackl - Food Groups All-Cause Mortality Meta-Analysis 2017, Bechthold - Food Groups CHD Stroke Heart Failure Meta-Analysis 2019, Schwingshackl - Food Groups Hypertension Meta-Analysis 2017, Schwingshackl - Food Groups Type 2 Diabetes Meta-Analysis 2017, Schlesinger - Food Groups Overweight Obesity Weight Gain Meta-Analysis 2019, Zhou - Fruit Vegetable Cognitive Disorders Older Adults 2022]
cluster: plant-foods
nucleus: true
confidence: low
created: 2026-08-13
updated: 2026-10-22
self_critiqued: 2026-10-22
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
    - Whole Fruit Smoothies and Fruit Juice
    - Dementia Prevention and Modifiable Risk Factors
---

**Domain-opener / nucleus for fruit-and-vegetable intake** (anchoring source: Aune 2017, a
dose-response SR+MA of 95 prospective cohorts / 142 publications, up to \~2.1 million participants and
up to 43k CHD, 47k stroke, 82k CVD, 112k cancer cases and 71k-94k deaths; NNR 2023, the DIfE/Boeing
food-group series and Zhou 2022 are layered below). All evidence here is **observational** — no
held source reports a whole-food RCT of F&V vs a hard outcome (PREDIMED tests a whole Mediterranean
pattern, not F&V alone; searched: randomized/randomised across Aune chunks 01-02, 3 hits, all in
reference titles — a named gap, not a verified absence)
— so the ceiling on certainty is confounding, not sampling. The exposure is **whole fruit +
vegetables combined** (80 g = 1 serving); potatoes are analysed as a separate subtype, and whether the
combined F&V exposure excluded potatoes is not stated in Aune's main text (legumes/pulses are not
mentioned: 0 hits across both chunks); juices and tinned forms are separated out below.
[@aune2017fv]
(corrected 2026-10-22: previously *single gold source: Aune 2017*, stale once five more sources were
layered in; and *potatoes/legumes handled as subtypes*, but legumes do not appear in Aune.)

## The per-200 g/day effect estimates (linear dose-response, random-effects)

| Outcome | RR per 200 g/day F&V (95% CI) | I2 | n | Fruit alone | Veg alone |
|---|---|---|---|---|---|
| Coronary heart disease | 0.92 (0.90-0.94) | 0% | 15 | 0.90 (0.86-0.94) | 0.84 (0.79-0.90) |
| Stroke (total) | 0.84 (0.76-0.92) | 73% | 10 | 0.82 (0.74-0.90) | 0.87 (0.79-0.96) |
| Cardiovascular disease | 0.92 (0.90-0.95) | 31% | 13 | 0.87 (0.82-0.92) | 0.90 (0.87-0.93) |
| Total cancer | 0.97 (0.95-0.99) | 49% | 12 | 0.96 (0.94-0.99) | 0.96 (0.93-0.99) |
| All-cause mortality | 0.90 (0.87-0.93) | 83% | 15 | 0.85 (0.80-0.91) | 0.87 (0.82-0.92) |

[@aune2017fv]

- **The gradient is shallow per serving but real.** \~8-10% lower risk per 200 g/day for the CVD/death
  endpoints; cancer is the weak arm (\~3% per 200 g/day). CHD is the most homogeneous of the five
  estimates (I2 0%, CI 0.90-0.94); stroke and all-cause carry high heterogeneity (I2 73-83%) — driven
  by *size* of association, not its presence (most cohorts inverse).
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

Display: nonlinear dose-response from restricted cubic splines (three knots), on a studied range whose
upper end is \~800 g/day. Lowest observed risk: **total cancer at 550-600 g/day (7-7.5 servings)** with
«little evidence of further reductions» above — the one *located* plateau on the combined exposure;
**CHD, stroke, CVD and all-cause reach their lowest at 800 g/day (10 servings)**, «which was at the
high end of the range of intake across studies»
[@aune2017fv]
— *«a level of intake that is double the five servings per day (400 g/day) currently recommended»*
[@aune2017fv]

| Outcome (F&V combined) | Reduction at 500 g/day | at 800 g/day | Share of the 800 g reduction reached by 500 g | Nonlinearity |
|---|---|---|---|---|
| CHD | 16% | 24% | \~2/3 | **none** (P 0.30) |
| Stroke | 28% | 33% | \~85% | yes |
| CVD | 22% | 28% | \~80% | yes |
| Total cancer | 13% | 14% | \~93% (lowest at 550-600 g) | yes |
| All-cause | 27% | 31% | \~87% | yes |

Reductions are vs 0-40 g/day, read off the splines [@aune2017fv];
point estimates only — the CIs sit in Aune's Supplementary Tables 8-18, not held. The share column is
this page's arithmetic on those points. Both cancer figures appear in the source: the Discussion gives 13% at 500 and 14% at 800 g/day, and the
Results give 14% «for intakes of 550– 600 g/day», with «little evidence of further reduc- tions in risk
with higher intakes». [@aune2017fv]
(corrected 2026-10-22: an earlier correction in this pass called the original *cancer 14% at 550-600
g/day* wrong; it is supported by the Results sentence, and the 500/800 g figures come from the
Discussion. Share for cancer also corrected from \~90% to \~93%.)

- **800 g/day is the sampling edge, not a demonstrated optimum.** It is where the studied range thins
  out, so read it as the upper edge of the studied range — the lowest *observed* risk, not a
  demonstrated optimum and not a point-target — the [[The Underivable Optimum]] rule. (corrected
  2026-10-22: previously *a floor-for-most-benefit region*, which read literally put most of the
  benefit at \~800 g and contradicted the low-end-steepness reading below.)
- **Where the curve is steep at the low end, and where it is not — outcome-specific.** For all-cause,
  stroke and cancer most of the reduction to 800 g is reached by \~500 g/day (this page's
  arithmetic on the table above; all-cause steepest up to \~400 g/day), so the 9th-10th serving adds
  little *for those outcomes*. For **CHD** it does not hold:
  F&V-combined -> CHD showed **no nonlinearity** (Pnonlinearity 0.30), and a third of the 800 g
  reduction (16% -> 24%) comes after 500 g; **CVD** sits between (22% -> 28%). Stroke, CVD, cancer and
  all-cause were nonlinear (steeper at low intake)
  [@aune2017fv].
  Fruit-alone and veg-alone -> CHD *were* nonlinear in Aune (Pnonlin < 0.0001); whether the
  near-linear combined CHD curve is a pooling/display effect is testable only from the combined-F&V
  spline in Aune's supplementary tables (not held), so until then the formal combined test (P 0.30)
  stands. (corrected 2026-10-22: previously called *the anomaly* and dismissed as *a
  per-food-group display artifact as much as a biology claim*, untagged and untested.)
- **A second team, same CHD reading for vegetables.** In the DIfE series, vegetables -> CHD showed no
  nonlinearity (pnon-linearity 0.19, 13 studies) and «Additional beneﬁt for increasing intake is
  apparent above this value for CHD but not for stroke», the value being \~400 g/d; fruit -> CHD/stroke
  flattened at \~200 g/d («No beneﬁt for increasing intake was apparent above this value»; fruit ->
  stroke showed no formal nonlinearity, pnon-linearity 0.54). Points read off splines; no CI in the
  text. The spline figures' x-axes run \~0-600 g/d (vegetables and fruit), so the CHD reading is bounded
  there; the wider 0-1,300 g/d (vegetables) and 0-1,820 g/d (fruit) are the overall intake ranges of
  the studies in the high-vs-low analyses, not the curve's display range. (corrected 2026-10-22: previously gave only the
  pooled high-vs-low ranges, which read as the curve's studied range.)
  [@bechthold2019]
  Not independent of Aune: the two pool heavily overlapping cohorts.
- **So *protective exposures plateau* is outcome-specific here.** A plateau is *located* for total
  cancer (550-600 g/day, combined), for fruit-alone on all-cause and CHD (\~200-300 g/d, DIfE series)
  and for vegetables-alone on all-cause (\~300 g/d, DIfE series; nonlinear splines, no CI in the text,
  all-cause display range not recoverable from the held text; the overall intake ranges of the
  studies in the high-vs-low analyses are 0-626 g/d fruit and 5-663 g/d vegetables, so the plateaus'
  upper support is probably no more than about 630 g/d (fruit) and 660 g/d (vegetables))
  [@schwingshackl2017mort]
  [@bechthold2019];
  for all-cause, stroke and CVD the combined curve flattens but its lowest point is the studied-range
  edge; for CHD no plateau is shown within the studied range (to \~800 g/day). *None is shown* is not
  *there is none*.
- **Measurement error cuts both ways on this curve — the two readings are not contradictory
  `[2026-10-22]`.** Aune names both effects in consecutive sentences: «This suggests that both
  measurement error and re- gression dilution bias may have attenuated the observed risk estimates. We
  can also not entirely exclude the possibility that the weaker dose-response curve at higher compared
  with lower intakes could partly be due to measurement errors in the assessment of fruit and vegetable
  intake. Although not all studies had the same range of fruit and vegetable intake, there was a wide
  range of fruit and vege- table intake across most studies and thus the nonlinearity is not likely to be
  due to single studies with a more extreme range than others.»
  [@aune2017fv]. The first sentence is the classical case:
  error unrelated to intake level compresses the whole slope toward the null (and can hide a knee). The
  second is a different mechanism: error that grows with intake flattens the *top* of the self-reported
  range, so part of the observed high-intake flattening may be manufactured rather than real. Both can
  operate at once — overall attenuation plus a partly artifactual plateau — so neither shape is
  privileged by the measurement argument, and whether the plateau is real stays unresolved (Aune's
  third sentence rules out only a single-extreme-study explanation, not measurement error)
.
  For someone eating little, the decision barely depends on it, since the steep part of the curve is at
  low intake either way; for someone already eating a lot, whether more helps turns on exactly this
  question. (corrected 2026-10-22: the earlier text read Aune's sentence as a hidden knee
  and added that measurement cannot manufacture one; that reverses Aune's point, and the rule was
  withdrawn at Gate 55, `meta/telos-review.md`. Re-stated 2026-10-22 with the fuller cite.py quote so the
  attenuation half and the flattening half sit together; the earlier bullet quoted only the flattening
  sentence, truncated before «in the assessment of fruit and vegetable intake».)
  -> [[Measurement Error in Dietary Assessment]], [[The U-Shaped Association Artifact]].

[@aune2017fv]
## Specific types — the pooled benefit is NOT uniform, and the "superfoods" are the thin cells

Per 100 g/day dose-response (or high-vs-low where noted). **CHD and stroke cells** (Tables 2-3): the
tight, steep inverse signals there sit with **leafy greens** (and citrus for stroke), NOT the
berry/grape end that carries most marketing:

| Type | CHD | Stroke | Read |
|---|---|---|---|
| Green leafy vegetables | 0.72 (0.64-0.82) | 0.73 (0.57-0.94) | steepest + tightest, both endpoints |
| Citrus fruits | HvL 0.91 (0.86-0.96); DR 0.95 (0.89-1.01) NS | 0.78 (0.69-0.90), I2 64% | stroke sig; CHD HvL-only |
| Beta-carotene-rich F&V | 0.77 (0.65-0.91) | — | steep |
| Apples/pears | HvL 0.85 (0.79-0.93) | HvL 0.88 (0.81-0.96) | HvL sig, dose-resp NS |
| Pickled vegetables | — | 0.57 (0.43-0.74) | steep (2 studies) |
| Grapes | 0.87 (0.56-1.37) NS | 0.57 (0.34-0.97) | CHD null; stroke sig on **2 studies** |
| Berries | 1.13 (0.90-1.43) NS | 1.07 (0.79-1.45) NS | point estimate **>1** both; haemorrhagic 1.66 NS |
| Strawberries | 4.66 (1.14-19.03) | — | **single study, absurd CI — discard** |
| Cruciferous (CHD/stroke) | 0.99 NS | 1.04 NS | linear NS for CHD/stroke/CVD; nonlinear CVD inverse (few studies); all-cause DR sig; total cancer HvL-only |
| Tomatoes | 0.94 (0.89-0.98), I2 0%, n=6 | 1.01 NS | CHD sig |

**All-cause cells (Table 6), per 100 g/day:** cruciferous 0.90 (0.85-0.95, I2 35%, n=6); berries HvL
0.92 (0.88-0.97, I2 8%, n=3), DR 0.85 (0.70-1.03) NS; green leafy vegetables/salads 0.78 (0.71-0.86);
citrus HvL 0.90 (0.86-0.94, I2 12%), DR 0.94 (0.88-1.00) borderline; apples/pears HvL 0.80 (0.70-0.91,
I2 85%), DR 0.80 (0.64-1.01) NS; cooked vegetables HvL 0.87 (0.80-0.94), DR 0.89 (0.80-0.99, I2 94%);
potatoes HvL 0.78 (0.74-0.83), DR 0.91 (0.81-1.03) NS. All of these appear in Aune's Discussion list
of subtypes inverse for all-cause mortality («apples/pears, berries, citrus fruits, cooked vegetables,
cruciferous vegetables, potatoes, and green leafy vegetables/salads»). **CVD (Table 4):** citrus HvL
0.78 (0.66-0.92, I2 72%), DR 0.92 (0.84-1.00) borderline; apples/pears HvL 0.86 (0.80-0.93), DR 0.92
(0.82-1.03) NS. Cruciferous -> total cancer is HvL 0.84 (0.72-0.97) but DR 0.91 (0.82-1.02) NS; for CVD the
nonlinear analysis found «cruciferous vege- tables, green leafy vegetables, and tomatoes were inversely
associated with risk, although few studies were included in these analyses».
[@aune2017fv]
(corrected 2026-10-22: the cruciferous row previously read *NS for CVD; sig for total cancer*. Citrus
was previously labelled *robust*; it is significant for stroke and on high-vs-low for CHD, CVD and
all-cause, but its CHD, CVD and all-cause dose-response cells are borderline or NS. An earlier
correction in this pass said citrus did not hold beyond the CHD/stroke cells, which omitted the CVD and
all-cause high-vs-low cells.)

- **Answering the grapes-vs-berries question directly:** neither grapes nor berries shows a robust
  CHD benefit (both NS, berries point *above* 1.0); grapes' one significant signal (stroke 0.57) rests
  on **2 studies** with a wide range; the strawberry 4.66 is a one-study artifact. The subtype cells are
  thin (n=2-6, wide CIs) — the data **cannot individuate** most single fruits. On CHD/stroke the
  clearest cells are leafy greens (and citrus for stroke); on all-cause, leafy greens, cruciferous,
  cooked vegetables and (HvL only, DR borderline/NS) citrus, berries, apples/pears and potatoes also
  read inverse; no subtype is individuated with confidence. Do not read the
  pooled F&V effect as distributing evenly onto a favourite fruit. (corrected 2026-10-22: previously
  *the winners are leafy greens/citrus, not berries/grapes*, which rested on CHD/stroke cells only.)
- **Aune's own caveat on every subtype cell:** «However, because of the low number of studies on fruit
  and vegetable sub- types, the potential for selective reporting and publication of subtypes that are
  significantly associated with risk, as well as confounding from other types of fruits and vege-
  tables, further studies are needed.» [@aune2017fv]
- **Form — thin cells, hypotheses not an axis.** Fruit *juice* read inverse for stroke (HvL 0.67
  [0.60-0.76]; per-100 g 0.72 [0.63-0.83]; **n=2 each**) and CHD (HvL 0.79 [0.63-0.98], n=2; DR 0.93
  [0.80-1.08] NS, I2 80%), and null on dose-response for CVD (0.99 [0.93-1.06]) and total cancer (0.99
  [0.95-1.02]). On all-cause it reads inverse (HvL 0.87 [0.83-0.91], n=1; DR 0.88 [0.84-0.92], n=2):
  «Fruit juice 1 0.87 (0.83–0.91) - - 143 2 Per 100 g/d 0.88 (0.84–0.92) 0 0.71 53,143» (Table 6).
  **Tinned fruit** read positive for CVD (HvL 1.23 [1.06-1.43]) and all-cause (DR 1.14
  [1.07-1.21]), but the high-vs-low cells rest on **one publication** (Aasheim, three cohorts, ref 159);
  the CVD dose-response is NS (1.30 [0.81-2.08], I2 66%) and the total-cancer dose-response leans
  *inverse* (0.82 [0.66-1.01]). [@aune2017fv]
  So processing does not read in one direction (juice inverse, tinned positive), and with Aune's
  selective-reporting caveat above, both are hypotheses. (corrected 2026-10-22: previously
  *FORM matters, and processing is the harm edge … the whole-vs-processed axis … is what these data
  mark*, which scrutinised n=2 grapes but not n=2 juice or the single tinned-fruit publication.)
  Note the outcome scope: this is CVD/stroke, not the metabolic/hepatic channel where free-sugar juice
  concern lives -> [[Free Sugars Intake]]; the fruit-form decision as a whole -> [[Whole Fruit Smoothies and Fruit Juice]].

[@aune2017fv]
## Measurement error and regression dilution — attenuation in the two studies that corrected for it

Only two studies (EPIC, via two publications, and China Kadoorie) corrected for measurement error /
regression dilution, and each correction made the association **stronger**, not weaker (corrected
2026-10-22: previously *three cohorts*, with two listed; heading previously *the effect is if anything
UNDER-stated*):

- EPIC: all-cause HR **0.97 (0.96-0.98) uncorrected -> 0.94 (0.91-0.96) corrected** per 200 g/day; IHD
  mortality 0.97 (0.95-0.99) -> 0.95 (0.91-0.99) per 80 g/day.
- China Kadoorie: CV death per one daily portion of fresh fruit **0.77 (0.72-0.83) before -> 0.63
  (0.56-0.72) after** regression-dilution correction — a large attenuation of the true effect by
  self-report noise. [@aune2017fv]
- Aune's own reading: *«both measurement error and regression dilution bias may have attenuated the
  observed risk estimates»* and *«Confounding might exaggerate the observed associations but measurement
  errors would most likely tend to attenuate»* — the two large biases push in **opposite** directions,
  so the net bias is of unknown sign: measurement error pulls estimates toward the null, while residual
  confounding, small-study effects and low-risk-of-bias restriction pull the other way (next section).
  Observed RRs are neither a floor nor a ceiling on a causal effect
  -> [[Measurement Error in Dietary Assessment]]. (corrected 2026-10-22: previously *the reported RRs
  are a floor on the causal signal if the association is causal at all*, which holds only if
  confounding is zero.)

## Why the certainty stays low — the confounding ceiling

[inferred from @aune2017fv] The consistency is strong (95 cohorts, robust to
one-study-out and to region stratification), but the causal reading is capped:

- **Downward pulls the RRs carry.** Aune: «There was indication of small-study bias in several of the
  analyses, and we may therefore have slightly overestimated some of the associations.» (excluding
  smaller or outlying studies «in most cases did not sub- stantially alter the summary estimates»).
  Adjustment subgroups read weaker where confounders were adjusted for: vegetables -> CHD with
  physical-activity adjustment (Pheterogeneity 0.003), F&V -> CVD with BMI adjustment (0.03), fruit ->
  cancer and all-cause with energy adjustment (0.03, 0.02), F&V -> all-cause with red/processed-meat
  adjustment (< 0.0001); vegetables -> all-cause was stronger *without* smoking adjustment (0.003).
  Aune notes that in such subgroups «there were often relatively few studies in one of the sub- groups,
  and chance can not be excluded as an explanation».
  [@aune2017fv]
  [@aune2017fv]
  Restricting to low-risk-of-bias studies, the DIfE all-cause MA reports that results «varied little»
  overall, but «Findings including studies with a low risk of bias sug- gest a smaller inverse
  association between fruits (n = 4) and nuts (n = 5) and all-cause mortality in the linear
  dose-response meta- analysis.» [@schwingshackl2017mort]
  (corrected 2026-10-22: previously *modest publication-bias signal that did not move the summaries*,
  which omitted Aune's own overestimation sentence.)
- **Formal grade and in-stratum nulls.** The DIfE all-cause MA rates its NutriGrade meta-evidence
  «“low” for reﬁned grains, vegetables, fruits, and SSBs»; and for vegetables «The inverse association
  was not ob- served in studies conducted in the United States or in studies including only women
  (Supplemental Table 16).», with the same null reported for fruit, and no evidence of heterogeneity
  between subgroups in either — a subgroup pattern, not a formal interaction. Both support
  `confidence: low` on transportability as well as on confounding.
  [@schwingshackl2017mort]
- **Healthy-user confounding, the textbook profile.** F&V intake is *«often associated with other
  lifestyle factors such as lower prevalence of smoking, less overweight and obesity, higher physical
  activity and lower intakes of alcohol and red and processed meat»*
  [@aune2017fv]. Associations *persisted*
  after adjustment, but adjustment is the weak check; no held source reports a whole-food RCT on a hard
  outcome (named gap, see top). Kobylecki appears in Aune's forest plots as
  estimates that read as observational (six panels, e.g. CHD F&V 0.95, 0.90-1.01;
  all-cause, Figure 6, point estimates 0.79-0.91 across the three panels)
  [@aune2017fv]; per its reference title it
  is «a Mendelian randomization study» of «Genetically high plasma vitamin C», so it instruments a nutrient, not F&V intake — the
  component-not-category trap, not an MR test of F&V
  [@aune2017fv]
  -> [[The U-Shaped Association Artifact]] (adjudication-route framing). (corrected 2026-10-22:
  previously *the one MR hint (Kobylecki, genetic plasma vitamin C)*, which read a nutrient instrument
  as F&V evidence. Corrected again 2026-10-22: an earlier version of this pass gave only the CHD
  forest-plot entry, 0.95, as if it were Kobylecki's single estimate.)
- **Bradford-Hill invoked but not decisive.** Aune argues consistency, temporality, «some evidence of
  a biological gradient», plausibility, coherence and «experimental evidence (on intermediate risk
  markers)» [@aune2017fv] — a moderate-strength
  association that *«should not be dismissed as non-causal»*, while granting residual confounding cannot be entirely ruled out. This is an
  argument for direction, not proof of magnitude.
- **Health-care-access confounding route.** Persons with high F&V intake *«may be more likely to undergo
  screening or have better access to or compliance with treatment»* — a mortality-specific bias the
  design cannot remove.

[@aune2017fv]
## The population-absolute expression — attributable deaths (causal assumption flagged)

The relative effects become an absolute quantity only via baseline risk. Aune's population layer,
**assuming causality**: an estimated **5.4 million** (intake below 500 g/day; Table 7 and the
Discussion — the abstract states 5.6) and **7.8 million**
(below 800 g/day) premature deaths worldwide in 2013 attributable to low F&V intake — of the latter,
\~1.34M CHD, \~2.68M stroke, \~660k cancer. This is a **modelled population burden** (Miettinen PAF,
World Health Survey prevalence x GBD 2013 mortality), inheriting the causal, no-confounding and
generalizability assumptions Aune names -> [[Baseline Risk and the Relative-Absolute Split]]. It is not
a per-person effect and not a validated projection.

## Decision relevance

- **Default (observational-grade, guideline-backed — not trial-tested on hard outcomes):** eat
  &gt;=500 g/day (about 6 x 80 g servings) of varied whole vegetables, fruits and berries, potatoes and
  pulses not counted — NNR's floor: «It is recommended to consume 500–800 grams, or more, per day of
  vegetables, fruits and berries in total.» [@nnr2023]
  Going toward \~800 g/day is consistent with the CHD/CVD data, whose gradient continues to the
  studied-range edge (\~800 g/day; Aune; NNR «for cardiovascular disease, reductions have been observed
  up to 800 g of fruits and vegetables per day»). Average Nordic intake is 200-400 g/d.
  [@nnr2023]
  The move is cheap, reversible and low-harm, and most of that Nordic population sits on the steep part
  of the curve. Aune's lowest observed risk is at \~800 g/day, «which was at the high end
  of the range of intake across studies» (combined-F&V axes labelled to 900 g/d; 800 for stroke)
  [@aune2017fv].
  Individual cohorts report higher intakes — in the DIfE CHD meta-analysis the high-vs-low ranges reach
  0-1,300 g/d (vegetables) and 0-1,820 g/d (fruit)
  [@bechthold2019]
  — but no curve is estimated out there. (corrected 2026-10-22: an earlier version of this
  pass said *Above \~800 g/day there are no data*, which the wider cohort ranges contradict; later
  versions attached the ranges to Aune untagged, then cited an all-cause range of *5-2,663 g/d* that
  was a PDF glyph misread — the true DIfE all-cause ranges are 5-663 g/d vegetables and 0-626 g/d
  fruit, below 800 g/d.)
- **F&V is a moderate, observational-grade lever, best framed as addition/substitution**, with the
  curve steepest at low intake — moving from \~0-2 servings to >=500 g/day is where most of the
  associated all-cause, stroke and cancer reduction lies (all-cause 27% at 500 vs 31% at 800 g/day, vs
  0-40 g/day; point estimates). For **CHD/CVD** the curve keeps falling to the 800 g/day edge (CHD
  Pnonlinearity 0.30, 16% -> 24%; DIfE vegetables -> CHD: additional benefit above \~400 g/d, on a spline
  displayed over \~0-600 g/d), so the 5->10 servings gap buys less for all-cause mortality but not
  clearly less for CHD. Rank below the big rocks and below RCT/MR-backed levers. (corrected 2026-10-22: previously *most of the
  associated benefit reached in the first few servings … the 5->10 servings gap buys progressively
  less*, stated for all outcomes.)
- **Prefer whole forms and leafy greens; citrus, cruciferous and cooked vegetables as weaker or
  thinner cells** where a within-F&V choice is being made. The whole-form preference rests on the
  free-sugar / fibre-matrix channel (-> [[Free Sugars Intake]], [[Whole Fruit Smoothies and Fruit Juice]]),
  not on these CVD/mortality cells, where juice reads inverse on stroke, CHD and all-cause (n=1-2;
  see the Form bullet). Leafy greens are the clearest cells on CHD, stroke and
  all-cause (all-cause 0.78, 0.71-0.86 per 100 g/d, n=7); cruciferous (0.90, 0.85-0.95, n=6) is
  significant but weaker; cooked vegetables (0.89, 0.80-0.99, n=4, I2 94%) are thinner and
  heterogeneous; citrus is significant for stroke and borderline on all-cause dose-response (0.94,
  0.88-1.00) — not individuated winners. Tinned fruit carries a harm signal whose high-vs-low cells come from a single
  publication (a hypothesis). (corrected 2026-10-22: an earlier version of this pass named cruciferous
  and cooked vegetables as the stronger all-cause cells, understating leafy greens, and stated the
  whole-form preference with no named basis.) But do not over-personalize onto a single fruit: the
  subtype cells are too thin to individuate (route-b effect-modification evidence is absent).
- **The ceiling is outcome-specific.** For someone already at >=\~500 g/day of varied whole F&V, the
  remaining *all-cause* lever is small (\~4 points of relative risk to 800 g) and rests on the thin
  high-intake edge — for that outcome, a licence to stop optimizing (the high-intake flattening may
  itself be partly a measurement artifact; see the measurement-error bullet under Dose-response SHAPE).
  For CHD/CVD the data do not show a
  plateau within the studied range (to \~800 g/day), so *stop* is not licensed for a CHD-focused
  stratum; there the cheap move is toward \~800 g/day, vegetables included (DIfE: the vegetable, not the
  fruit, curve continues for CHD, within its \~0-600 g/d spline display). (corrected 2026-10-22: previously *For someone already
  at \~5 servings … a licence to stop optimizing here*; \~5 servings = 400 g sat below NNR's 500 g floor
  and the CHD curve.)
- **Open loop:** nothing grades F&V intake against a realized outcome in a randomized design; the causal
  step rests on consistency + mechanism + trial evidence on intermediate markers, which Aune cites
  («experimental evidence (on intermediate risk markers)»), with the measurement-error argument of
  unknown net sign — not adjudication.

[inferred from @aune2017fv] **Independence note for later weaves:** Aune's team
(Imperial/NTNU; Aune-Norat-Riboli-Giovannucci) also authored the parallel whole-grain (ref 192) and nut
(ref 193) dose-response MAs cited *in this paper*, using the **same** methods and overlapping cohort
infrastructure. Any future *consistency across Aune's plant-food MAs* is same-lab **type-F / shared
lineage**, NOT independent type-E backing -> [[Nut Consumption and Mortality]],
[[Whole Grains Refined Grains and Pulses]].

## A guidance family sets a recommended range and reports the same shape — NNR2023 `[2026-08-27, NNR revisit]`

NNR2023 converts this observational evidence into an actionable range and, in doing so, reports the same
dose-response *shape* this page holds from Aune — an F-refinement that turns a single-source dose-response
page into a guidance-anchored recommendation.

- **The recommended intake:** «It is recommended to consume 500-800 grams, or more, per day of
  vegetables, fruits and berries in total. A variety of different types of both vegetables and fruits
  (including berries) should be consumed, with emphasis on dietary fibre contribution (potatoes and
  pulses are not included).» [@nnr2023] NNR
  excludes potatoes and pulses; Aune's main text does not state its combined-exposure definition, so
  comparability on this point is unverified. (corrected 2026-10-22: previously *The
  potatoes-and-pulses exclusion matches Aune's exposure definition*, unsupported — legumes/pulses do
  not appear in Aune.)
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
measurement artifact rather than a located knee. The DIfE CHD MA states the same kind of divergence
for fruit and attributes it to study sets, not biology: «While we detected no further risk reduction
beyond intake of 250 g fruits per day, another current meta-analysis showed reductions in risk up to
800 g per day. This difference could be explained by the greater number of studies (due to inclusion of
studies on cause-speciﬁc mortality and overall CVD) included by Aune et al.»
[@bechthold2019]

**Not independent backing, and confidence stays low.** NNR2023 is a guideline synthesis resting on the
same observational F&V literature (Rosell & Fadnes 2023, WCRF/AICR 2018, Fogelholm 2012, Stanaway 2022 —
the field Aune's cohorts sit inside), so it does **not** lift the confounding ceiling that caps this
page: no held source reports a whole-food F&V RCT on a hard outcome. The shared authorship is
concrete: NNR's F&V background paper is Rosell & Fadnes 2023, and Lars T Fadnes is a co-author of Aune
2017. It confirms *direction and shape* by a
second body, not by an independent route — no `[E-independent]`; `confidence: low` is unchanged.
[inferred from @nnr2023]

## Refinement — the DIfE/Boeing 12-food-group series (2026-08-28)

The series separates fruit from vegetables and shows their effects **diverge**. **Fruit** is
modestly inverse across the five outcome families, per 100 g/d: mortality 0.94 (0.92-0.97), CHD 0.94
(0.90-0.97), stroke 0.90 (0.84-0.97), hypertension 0.97 (0.96-0.99), T2D 0.98 (0.97-1.00).
**Vegetables** are inverse for mortality (0.96, 0.95-0.98) and borderline for T2D (0.98, 0.96-1.00),
but read **null for hypertension** (1.00, 0.98-1.01) and **null on the linear dose-response for
overweight/obesity** (0.98, 0.93-1.03; 2 studies) — with the qualifier that «The test for
nonlinearity was not significant (P-nonlinearity = 0.08), but the graph for the association between
vegetable intake and risk of overweight/obesity indicated that a significant risk reduction was
observed for an intake of ≤200–300 g/d, with more-imprecise results above that amount (Figure 2C).»
High-vs-low vegetable intake was inverse for weight gain (0.78, 0.62-0.98), but «When we excluded the
study focusing on weight gain only at the waist, the summary RR was 0.71 (95% CI: 0.47, 1.06; I2 =
77%).», and the weight-gain dose-response was 0.90 (0.81-1.01) per 100 g/d, NS.
(corrected 2026-10-22: an earlier version of this pass stated the overweight/obesity null without the
spline qualifier and the weight-gain HvL without its sensitivity analysis.) On the HTN null the source notes one cohort whose inverse association
was eliminated «after adjustment for BMI (potential overadjust- ment)».
[@schwingshackl2017mort]
[@bechthold2019]
[@schwingshackl2017htn]
[@schwingshackl2017t2d]
[@schlesinger2019]

**Where the curves flatten — outcome-specific.** Fruit: no further reduction above \~200 g/d for CHD
and stroke (stroke curve not formally nonlinear) and above \~250-300 g/d for all-cause. Vegetables:
all-cause flattens at \~300 g/d, but for **CHD «Additional beneﬁt for increasing intake is apparent
above this value»** (\~400 g/d; the CHD spline figure's x-axis runs \~0-600 g/d). Points read off
nonlinear splines; no CIs in the text. The CHD spline display range is \~0-600 g/d; the all-cause
spline display range cannot be recovered from the held text (Schwingshackl's Figure 2 carries no axis
labels in the extraction), so the upper support of the all-cause fruit and vegetable plateaus is
unknown beyond this: the overall intake ranges of the studies in the high-vs-low analyses (34 fruit,
37 vegetable studies) are 0-626 g/d (fruit) and 5-663 g/d (vegetables)
[@schwingshackl2017mort]
(the held text renders these ranges as «52663 g/d» (vegetables) and «02626 g/d» (fruit); in the PDF
the second character is a dash glyph from a symbol font mis-extracted as the digit 2, so the true
ranges are 5-663 and 0-626 g/d). The nonlinear analyses use subsets (13 and 14 studies),
so these ranges likely cap the plateaus' upper support at about 630 g/d (fruit) and 660 g/d
(vegetables). (corrected 2026-10-22: an earlier version of this pass said *the spline
display range, not the pooled range, bounds the reading*, implying a known display range for the
all-cause curves, and briefly gave these ranges as 0-2626 and 5-2663 g/d, a PDF glyph misread
corrected within this pass.)
[@schwingshackl2017mort]
[@bechthold2019]
Not independent of Aune (heavily overlapping cohorts: EPIC, NHS/HPFS and others) — a refinement, not
corroboration. (corrected 2026-10-22: previously *Both plateau at \~200-400 g/d*, which
dropped the CHD qualifier for vegetables; and *T2D 0.98* and *null for adiposity* sat untraced to a
cited source — now tagged to the T2D and overweight/obesity MAs.) Full cross-outcome grid ->
[[Food Groups and Health Outcomes - A Dose-Response Matrix]].

## Cognition / dementia outcome arm — a second observational lever, weaker than the CVD arm (2026-09-04)

Zhou 2022 (MA of 16 observational studies, 64,348 older adults >=60, 9,879 cases; 9 cohort / 6
cross-sectional / 1 case-control) extends F&V from the CVD/cancer/mortality arms above to a
**cognitive-disorder** outcome — the first cognition evidence on this nucleus. It is **observational
only, FFQ-dominated, and confidence stays low**; treat it as a weaker sibling of the CVD arm, not a
new hard finding.

- **Pooled highest-vs-lowest: OR 0.82 (95% CI 0.75-0.90), I2 35.3%** for cognitive disorders overall;
  fruit alone 0.83 (0.77-0.89), vegetables alone 0.75 (0.70-0.80) — vegetables read stronger than
  fruit here; in the CVD arm the ordering is mixed (veg stronger for CHD, fruit stronger for stroke, CVD
  and all-cause per Aune's Table 1), and a highest-vs-lowest OR is not the same quantity as a per-200 g
  RR, so there is no shared ordering.
  [@zhou2022fruit]
  (corrected 2026-10-22: previously *the same veg-slightly-stronger ordering the CVD arm shows*.) (The paper's own abstract headlines
  0.79 [0.76-0.83], which is actually its mixed-gender
  subgroup, not the Figure-2 pool — carry 0.82.)
- **Outcome-specific, but Alzheimer's does not discriminate.** Cognitive impairment/MCI 0.76
  (0.72-0.80, 15 effect groups) and dementia 0.84 (0.78-0.91, 10) are significant; Alzheimer's disease
  did not reach significance (0.88, 0.76-1.01, 6 effect groups)
  [@zhou2022fruit].
  The AD estimate is close to dementia's 0.84, the intervals overlap almost entirely, and no
  subgroup-difference test is reported (searched: interaction / between subgroups / subgroup
  difference, 0 relevant hits) — so this does not discriminate a vascular from a neurodegenerative
  route. The cognition signal *may* ride the same cardiometabolic pathway as the CVD arm; that is a
  hypothesis, not shown here. (corrected 2026-10-22: previously *Alzheimer's disease is
  null … consistent with a vascular/confounding-mediated route … likely rides the same cardiometabolic
  pathway*, a mechanism inference built on a non-significant subgroup.)
- **The design gradient is a reverse-causation tell.** The prospective **cohort** subgroup shows the
  WEAKEST effect (0.83, I2 0%); cross-sectional (0.70) and case-control (0.68) — the designs where
  prevalent cognitive disease can depress recalled/current intake — show the strongest. The association
  shrinks as the design gets less vulnerable to reverse causation, so the pooled 0.82 is an upper bound
  on any causal reading -> [[The U-Shaped Association Artifact]].
- **Dose-response reported linear (P=0.03) but weak.** Rests on only **4 studies** (the only ones with
  &gt;=3 exposure categories) with no stated studied-range and no located knee/plateau, so it is "linear over
  an unstated range on 4 studies" — weak evidence of a true linear curve, and the authors concede it «may have lacked
  suﬃcient eﬀectiveness in quantifying the relevant dose-response model»
  [@zhou2022fruit]. Not comparable
  to Aune's 95-cohort splines above -> [[The Underivable Optimum]].
- **Same measurement-error and confounding ceilings as the CVD arm, plus two Zhou-specific ones:**
  FFQ/self-report recall bias (23 of 31 effect groups FFQ), and an **OR-as-RR approximation** — «(59)
  suggested that using the OR as an approximation of the RR produces progressively larger errors as the
  outcome rate rises above 1%, therefore, we treated HR/RR as equal to OR, which may have aﬀected the
  results.» [@zhou2022fruit]
  Zhou states no direction; that the OR overstates the RR at case fractions well above 1%, as here, is
  this page's inference -> [[Measurement Error in Dietary Assessment]]. (corrected
  2026-10-22: previously described as a bias *the paper flags as inflating the estimate*.) No causal claim: «no casual
  relationships could be established due to the observational nature of the studies»
  [@zhou2022fruit].

**Decision read:** F&V is a *candidate* dietary lever for cognitive-disorder risk in older adults,
directionally the same as its CVD effect and plausibly mediated by it — not an additive,
independently-established brain benefit. It ranks below the established dementia big rocks and is
carried as a low-confidence food-group lever on [[Dementia Prevention and Modifiable Risk Factors]].

## References

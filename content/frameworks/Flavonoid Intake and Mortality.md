---
type: framework
aliases: [Flavonoids, Dietary Flavonoids, Flavonoid Intake, Flavonols, Flavan-3-ols, Polyphenol Intake and Mortality]
question: Does higher dietary flavonoid intake lower total and cause-specific mortality, and does a flavonoid meta-analysis tell us it is the flavonoid doing the work?
authors: [Mazidi, Mohsen; Katsiki, Niki; Banach, Maciej; Sesso, Howard D]
sources: [Mazidi - Flavonoid Intake and Mortality 2020, Sesso - Cocoa Flavanol Cardiovascular COSMOS 2022]
cluster: beverage-cells
confidence: low
self_critiqued: 2026-08-31
created: 2026-08-30
updated: 2026-09-04
relationships:
  related_to:
    - Flavonoid Intake and Cognitive Function
    - Is the Food Category Doing Any Work
    - Tea Consumption and Cardiovascular Risk
    - Fruit and Vegetable Intake and Health
    - Measurement Error in Dietary Assessment
    - The U-Shaped Association Artifact
    - Upgrading Observational Evidence
---

**Decision one-liner (Layer 1):** higher dietary flavonoid intake carries a **small, borderline
inverse association** with total and CVD mortality on observational data — and the one meta-analysis the
wiki holds **cannot tell you the flavonoid itself is what does the work.** Its exposure is flavonoid intake
*estimated from self-reported food consumption* (FFQ), so a *flavonoid* result is the same
observational, measurement-error-laden dietary-pattern signal as fruit/veg or tea, re-expressed in
flavonoid units. For a reasonably-healthy person this is **not a big rock** and not a reason to chase
flavonoids as such: eat the flavonoid-bearing whole foods (fruit, veg, tea) for the several better-
evidenced reasons already on their pages, not for a *flavonoid* target this evidence cannot isolate.

## Effect estimate (Mazidi 2020, MA of 16 cohorts, highest vs lowest intake)

| Outcome | RR (95% CI) | p | n studies | Significant? |
|---|---|---|---|---|
| All-cause mortality | 0.87 (0.77, 0.99) | 0.039 | 9 | yes — but upper CI a whisker from 1.0 |
| CVD mortality | 0.85 (0.75, 0.97) | 0.017 | 15 | yes |
| Cancer mortality | 0.86 (0.65, 1.14) | 0.302 | 4 | **no** |

[@mazidi2020flavonoid]

- **Relative-only, no absolute layer.** Highest-vs-lowest **category** contrast; the paper reports **no
  dose-response curve** and no baseline event rates, so no events-avoided-per-1000 figure and no knee /
  plateau can be stated. A *flavonoid target* is not derivable from this.
- **Discordant denominators:** the all-cause estimate pools only 9 of the 16 studies, the CVD estimate
  15 — the two headline numbers do not rest on the same study set.
- **Cancer null** on 4 studies (insufficient, not established no-effect).
- **Robustness, the reassuring side:** findings «remained robust in sensitivity analyses» (leave-one-
  out); Egger p=0.170 (NS), trim-and-
  fill imputed no missing studies, fail-safe N=20; and — unlike the tea MA — «This research received no
  external funding» [@mazidi2020flavonoid], so no
  beverage-seller COI applies.

## Why confidence is LOW despite a gold-tier design

- **Heterogeneity asserted, not shown.** The paper claims «a very low level of heterogeneity ...
  highlighting the validity of our results» in the same sentence it concedes «some misclassification of
  flavonoid consumption is inevitable» [@mazidi2020flavonoid] — yet reports **no I2** anywhere, while the forest-plot study RRs range from \~0.38 to
  \~1.40 (one leverage outlier, Ivey 2015, near 0.38). A *low-heterogeneity* claim without the statistic,
  over a visibly wide spread, is not credited.
- **Borderline result.** All-cause upper CI = 0.99, on 9 studies.
- **FFQ-estimated exposure, measurement error read optimistically.** The authors argue misclassification
  is non-differential, so the pooled RR «could have been underestimated rather than overestimated»
  [@mazidi2020flavonoid]. The telos holds that
  with mismeasured covariates the bias can run in **either** direction, so the attenuation-to-null
  reading is not established -> [[Measurement Error in Dietary Assessment]].
- **Residual confounding conceded.** Macronutrient adjustment (fiber, protein, fat, carbohydrate)
  «attenuated our results but there was still an inverse link» [@mazidi2020flavonoid], and the authors cannot rule out «unmeasured or residual confounding»
  and «cannot be certain that the inverse association ... is casual [causal], representing the effect of
  flavonoids only» [@mazidi2020flavonoid].

## The load-bearing move: a flavonoid MA does NOT isolate the flavonoid

The intuitive reading — *«Mazidi measured the flavonoid, so it confirms it is the flavonoids, not just
the tea/fruit»* — is **wrong**, and is the value this page adds. Mazidi's exposure is **flavonoid intake
estimated from FFQ food reports**, and flavonoids are «commonly present in vegetables, fruits, herbs and
teas» [@mazidi2020flavonoid]. So the
*flavonoid intake* variable is **computed from the very foods** whose contribution it would need to be
separated from — it is a re-expression of fruit/veg/tea intake in flavonoid units, carrying the same
confounding and measurement-error substrate, **not an independent handle on the component.** No study
used a flavonoid biomarker, an isolated-flavonoid trial arm, or Mendelian randomization — the designs
that *could* isolate the component. This is a **Test-3 collinearity case** exactly like coffee/caffeine
and wine/resveratrol: a study crediting *flavonoids* may be measuring the food (and the healthy pattern
it marks) under a flavonoid label -> [[Is the Food Category Doing Any Work]].

### Parameter table — Mazidi (flavonoid) vs Chung (tea): same substrate, NOT independent backing

Built to test whether Mazidi *corroborates* tea's CVD signal (type-E) or merely re-expresses it. **No
row on the effect itself is the same quantity, and the exposure OVERLAPS** (tea is inside the flavonoid
intake), so this is **not** independent backing:

| Parameter | Mazidi 2020 (flavonoid) | Chung 2020 (tea) | Same quantity? |
|---|---|---|---|
| Exposure | dietary flavonoid intake, FFQ-estimated | habitual tea, FFQ/diet-recall | **overlapping — tea is a flavonoid source inside Mazidi's exposure** |
| Exposure ascertainment | self-report (11 FFQ / 4 interview / 1 record); no biomarker | self-report; no biomarker | **Yes — shared substrate** |
| Contrast / scale | highest-vs-lowest category RR | per-cup linear RR | **No — different unit + scale** |
| Effect size | all-cause 0.87, CVD 0.85 | all-cause 0.98, CVD 0.96 per cup | **No — not comparable** |
| Isolates the component? | no (component computed from foods) | no (no decaf/isolate/MR) | **Yes — neither does** |
| Causal disconfirmation held | none (no MR) | none (no MR, no decaf) | **Yes — neither holds one** |

[inferred from @mazidi2020flavonoid]

**Verdict: type A/G, not E and not D.** Because the exposures overlap and share the measurement-error +
confounding substrate, Mazidi's inverse flavonoid association and Chung's inverse tea association are
**not independent routes to one claim** (E fails: *volume is not independence*, and a shared exposure is
a stronger defeater than a shared method). Nor is there a **matched-quantity clash** to file as a tension
(D): the two estimates are on different units and do not contradict. What they jointly establish is a
**gap**: neither design can say whether the mortality signal attached to tea / fruit-veg / *flavonoids*
is the flavonoid, the food matrix, or the healthy-eating pattern. That is the food-vs-component G-gap,
now with a second FFQ-derived source **confirming it stays open** rather than closing it.

## The isolating design Mazidi lacked now exists — and its hard-outcome primary is null `[2026-08-31, Sesso/COSMOS]`

Mazidi's whole limitation is that its flavonoid exposure is FFQ-derived, so «no study used a flavonoid
biomarker, an isolated-flavonoid trial arm, or Mendelian randomization». COSMOS (Sesso 2022) supplies the
middle one for a food-borne flavanol: a randomized placebo-controlled **cocoa-flavanol EXTRACT** on hard
CV endpoints. Its **primary** composite (total CVD events) was **null: HR 0.90 (0.78, 1.02; P=0.11)**
[@sesso2022cosmos], with delivery confirmed by a
>3-fold rise in the flavanol biomarker gVLM (ratio 3.23; 2.84, 3.67)
[@sesso2022cosmos].

**This is NOT the same quantity as Mazidi's association — build the table before any comparison.** The
reflex is to weld COSMOS's 0.90 to Mazidi's 0.87 as «the RCT confirms/refutes the cohort». They are
different exposures, designs, and endpoints; no numeric weld is made:

| Parameter | Mazidi 2020 (flavonoid) | COSMOS / Sesso 2022 (cocoa flavanol) | Same quantity? |
|---|---|---|---|
| Exposure | dietary flavonoid intake, FFQ-estimated | cocoa-extract **supplement** (500 mg flavanols + 80 mg epicatechin), a whole-bean extract | **No — food-derived estimate vs a dosed pill** |
| Isolation | none (computed from foods) | randomized vs placebo, but «cannot disentangle» components of the extract | **No — partial physical isolation vs none** |
| Design | observational MA (16 cohorts) | double-blind RCT (n=21,442) | **No** |
| Endpoint | all-cause / CVD / cancer **mortality** | total CVD **events** (composite); mortality secondary | **No — mortality vs CV-event composite** |
| Effect | all-cause 0.87 (0.77-0.99); CVD 0.85 (0.75-0.97) | primary 0.90 (0.78, 1.02), **null**; all-cause 0.89 (0.77, 1.03) | not comparable |
| Dose vs habitual | within FFQ dietary range | \~5x the European dietary flavanol mean («exceeds the mean intake reported in Europe of 105 mg/d») | **No** |

[inferred from @sesso2022cosmos; @mazidi2020flavonoid] Dose figure: [@sesso2022cosmos].

**What it does establish (type F/A, decision-form).** The one design that *physically removes* a
food-borne flavanol from the FFQ-collinear food signal **shrank the flavonoid-mortality association
toward the null on a hard CV primary** — the direction the food-vs-component/healthy-user critique
predicts. It does **not** prove the flavonoid is inert: COSMOS tested a cocoa *extract* (not the same
molecule set as diet-wide flavonoids), on CV *events* (not all-cause mortality), at a supra-dietary
dose, and «cannot disentangle» its components
[@sesso2022cosmos]; the authors themselves name
«Residual confounding ... limits observational studies examining flavanols or chocolate and CVD risk»
[@sesso2022cosmos]. So the combined reading:
Mazidi's borderline observational signal + COSMOS's randomized primary null jointly **weaken the case for
a flavonoid-as-agent lever** without a clean isolation of the molecule — reinforcing this page's LOW
confidence and its Layer-3 read (eat the foods, do not chase a flavonoid target or supplement). Effect
estimates + the secondary-endpoint caveat: [[Vitamin and Mineral Supplements for Disease Prevention]];
the Test-3 collinearity framing: [[Is the Food Category Doing Any Work]].
[inferred from @sesso2022cosmos]

<div class="recent-update" data-last-updated="2026-09-04">

## The cognition sibling (2026-09-04)

The same food-vs-component logic runs on a second outcome axis: a gold SR+MA of flavonoid intake ->
cognitive function (Peng 2025) finds a small inverse association with adverse cognitive events driven by
*cognitive decline*, with **dementia and Alzheimer's both null**, on the same FFQ-derived exposure that
cannot isolate the molecule -> [[Flavonoid Intake and Cognitive Function]] (which holds the figures). It
confirms the food-vs-component G-gap stays open on cognition as it does here on mortality.

</div>

## Where this sits

- **Layer 1:** low rank. A borderline observational category-contrast, null in the best-powered check it
  most needs (a component-isolating design, which does not exist here). Not a lever to prioritize.
- **Layer 3:** if you want the flavonoid-associated benefit, the realistic implementation is **eat the
  whole flavonoid-bearing foods** (fruit, veg, tea) — whose own pages carry better-evidenced,
  overlapping rationales — not a flavonoid supplement or target, which this evidence does not support.
  Mazidi's own «recommendations for flavonoid-rich foods intake» [@mazidi2020flavonoid] reaches past what the design isolates.
- **Confidence: low** — single MA, observational, borderline all-cause estimate, heterogeneity claimed
  without I2, FFQ exposure that cannot separate component from food -> [[Upgrading Observational Evidence]].

## References

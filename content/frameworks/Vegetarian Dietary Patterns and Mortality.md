---
type: framework
question: Are vegetarian dietary patterns (vegan / lacto-ovo / pesco / semi) associated with lower all-cause and cause-specific mortality, for whom, by how much, and is the association a causal signal or a healthy-adherent confound?
aliases: [Vegetarian Diet, Vegan Diet, Plant-Based Diet Mortality, AHS-2, Adventist Health Study, Vegetarian Patterns, Pesco-vegetarian, Lacto-ovo vegetarian]
authors: [Orlich, Michael J; Singh, Pramil N; Sabaté, Joan; Jaceldo-Siegl, Karen; Fan, Jing; Knutsen, Synnove; Beeson, W Lawrence; Fraser, Gary E]
sources: [Orlich - Vegetarian Patterns Mortality AHS-2 2013]
cluster: dietary-patterns
confidence: low
created: 2026-08-13
updated: 2026-08-13
relationships:
  related_to:
    - Mediterranean Diet and Cardiovascular Events
    - Nut Consumption and Mortality
    - Dietary Protein and Mortality
    - The Comparator Problem
    - Is the Food Category Doing Any Work
    - Measurement Error in Dietary Assessment
    - Baseline Risk and the Relative-Absolute Split
    - The U-Shaped Association Artifact
---

**Domain-opener for the vegetarian/vegan pattern leg** (single source: Orlich 2013, the Adventist
Health Study 2 [AHS-2] prospective cohort — 73,308 analytic Seventh-day Adventists, 2,570 deaths,
mean follow-up 5.79 y, mortality by Cox regression). This is the plant-based cohort the
*Dietary Patterns* deliverable named as a held-out gap. All evidence here is a **single observational
cohort** — so the certainty ceiling is confounding, not sampling, and it is *lower* than a pooled
dose-response MA (no independent replication inside the source). Orbits the `dietary-patterns`
nucleus [[Mediterranean Diet and Cardiovascular Events]].

[@orlich2013]
## The graded-pattern effect estimates (vs nonvegetarian reference)

Diet was set at baseline by a >200-item FFQ and cut into 5 patterns by frequency of animal-food
intake (vegan / lacto-ovo / pesco / semi-veg / nonveg). Adjusted HRs, all vegetarians combined and by
pattern:

| Contrast | All-cause HR (95% CI) | Note |
|---|---|---|
| All vegetarians combined | 0.88 (0.80-0.97) | headline; \~12% lower |
| — men | 0.82 (0.72-0.94) | significant |
| — women | 0.93 (0.82-1.05) | CI crosses 1 |
| Vegan (both sexes) | 0.85 (0.73-1.01) | CI crosses 1 |
| Lacto-ovo | 0.91 (0.82-1.00) | borderline |
| Pesco | 0.81 (0.69-0.94) | steepest, significant |
| Semi-vegetarian | 0.92 (0.75-1.13) | null |
| Vegan, men only | 0.72 (0.56-0.92) | significant |
| Pesco, men only | 0.73 (0.57-0.93) | significant |

The all-cause signal is **modest (\~10-20%) and graded but not monotone by "strictness"** — pesco- and
vegan-in-men are the steepest arms, semi-vegetarian is null; more animal-food restriction does not buy
a larger reduction here. Absolute scale: the standardized mortality rate was 6.61/1000 person-years in
nonvegetarians vs 5.40 (vegan) / 5.61 (lacto-ovo) / 5.33 (pesco) — a \~1/1000-person-year gap over a
short horizon -> [[Baseline Risk and the Relative-Absolute Split]].

[@orlich2013]
## Cause-specific: cardiovascular and a diabetes/renal channel; cancer null

- **Cardiovascular:** all-veg combined CVD mortality 0.87 (0.75-1.01); driven by **men** (CVD 0.71
  [0.57-0.90]; IHD 0.71 [0.51-1.00]), null in women (CVD 0.99 [0.83-1.18]).
- **Endocrine / renal ("other" mortality):** the largest point estimates — renal mortality 0.48
  (0.28-0.82) and endocrine mortality 0.61 (0.40-0.92) both sexes; sharper in men (renal 0.42
  [0.19-0.91]; endocrine 0.48 [0.25-0.92]). The specific-cause subsets: renal-failure death 0.26
  (0.12-0.57); diabetes death 0.53 (0.32-0.89), and 0.27 (0.11-0.66) in men. Consistent with the
  cohort's prior vegetarian-diet associations with lower incident diabetes, hypertension, and
  metabolic syndrome — a plausible metabolic channel, but built on 67 renal and 104 endocrine deaths.
- **Cancer:** no significant reduction (0.92 [0.78-1.08] both sexes) — the authors flag heterogeneous
  cancer + insufficient power at early follow-up, not evidence of no effect (the expectancy test).
- **Stroke:** not reduced (1.10 [0.82-1.47] both sexes) — a genuine null arm, not a garnish.
- **BMI sensitivity:** adding BMI to the model moved the combined HR only to 0.90 (0.82-0.98) and «did
  not consistently move results toward the null» [@orlich2013] — so adiposity is not the whole story (or BMI is an over-adjustment
  mediator), but it does not vanish the signal either.

## The sex interaction — a real effect-modification signal, mechanism unknown

[@orlich2013]
«Associations in men were larger and more often significant than were those in women.» A formal
test found significant diet×sex interaction for **CVD mortality (P = .01)**, but not for all-cause or
other categories — so the sex difference is statistically supported for the CV arm specifically, a
descriptive pattern elsewhere. This replicates prior Adventist-cohort sex modification of the
vegetarian-IHD association. The mechanism is unresolved: the authors note the nutrient profiles of
male vs female vegetarians did not differ strikingly, so it may be a biological rather than a
dietary-composition difference. This is a **route-(b) effect-modification** claim (positive
interaction evidence, not a baseline-risk artifact), though from a single cohort.

## Why certainty stays low — the healthy-adherent confound is the ceiling

This is the canonical *observed-healthy-population* case: an Adventist vegetarian is not a random
person minus meat. Standardized baseline table — vegetarians (esp. vegans) were **older, more
educated, leaner (vegan BMI 24.1 vs nonveg 28.3), and drank/smoked far less** (vegans 98.8%
non-drinkers, 85% never-smokers; nonvegetarians 83.4% / 75.7%) and exercised more. The vegetarian
"exposure" travels bundled with every other large mortality lever -> a pattern association is **not
evidence for any single component** (the diet, the low BMI, the nuts, or the abstinence).

- The authors are explicit about the residual: «Observed mortality benefits may be affected by factors
  related to the conscious lifestyle choice of a vegetarian diet other than dietary components.
  Potential for uncontrolled confounding remains.» [@orlich2013]
- **The adjustment set is unusually rich** (age, race, region, income, education, marital status,
  smoking [8 levels], alcohol [5], exercise [5], sleep, energy, menopause/HRT — Table 1 footnote), and
  the cohort's near-uniform low tobacco/alcohol means «the low use of tobacco and alcohol, making
  residual confounding from these unlikely» [@orlich2013]. So this cohort *reduces* the usual smoking/alcohol confound better than
  most — but adjustment is the weak check; there is no MR instrument and no whole-diet RCT here, so the
  association is not adjudicated causal -> [[The U-Shaped Association Artifact]] (adjudication-route
  framing).
- **Diet measured once, at baseline** — «the analysis relies on a single measurement of diet at
  baseline» [@orlich2013];
  pattern misclassification over 5.79 y -> [[Measurement Error in Dietary Assessment]].
- **Short follow-up biases toward the null**, not away: «Early follow-up analysis may thus have bias
  toward the null, and true associations may remain undetected.» [@orlich2013] So the modest HRs may understate a true effect
  — the confound and the attenuation push in opposite directions, and neither is quantified.

## "Vegetarian" is not one exposure — the EPIC-Oxford divergence (transportability)

The prior British cohort (EPIC-Oxford, Key 2009) found **no all-cause mortality advantage** for
vegetarians; AHS-2 does. Orlich's own resolution is that the label names different real exposures:
«It appears that British vegetarians and US Adventist vegetarians eat somewhat differently.» AHS-2
vegans ate far more fibre and vitamin C (mean fibre 45.6 g/d [men] / 47.3 [women] vs EPIC-Oxford 27.7
/ 26.4; vitamin C 224/250 vs 125/143 mg/d) [@orlich2013]. Two cohorts, same word, materially different diets and motivations
(perceived-healthfulness vs ethical/environmental) — so a mortality effect attaches to *a specific
vegetarian diet in a specific population*, and does not transport by the label alone. This sharpens
the "does the food-category label do work over its components?" question -> [[Is the Food Category Doing Any Work]], and means the pattern must be specified by its actual food/nutrient content, not its
name -> [[The Comparator Problem]] (the nonvegetarian reference is itself a relatively healthy
Adventist, which attenuates every contrast here).

## Decision relevance

- **A low-meat / vegetarian pattern is a plausible modest lever** on mortality (\~10-20% relative, \~1
  death/1000 person-years absolute at this cohort's risk), best framed as *a pattern in a
  health-motivated person*, not a decomposed causal claim about removing meat. Rank it as
  observational-grade, below big rocks and below RCT/MR-backed levers; it substantially overlaps the
  already-ranked component levers (nuts, fibre, low red/processed meat, leanness, abstinence) rather
  than adding a separate one.
- **The graded pattern does not reward strictness** — pesco- and lacto-ovo-vegetarian carried
  signals as good as or better than vegan, and semi-vegetarian was null; the decision is "shift toward
  a plant-predominant pattern," not "maximize animal-food exclusion." Restrictive vegan patterns raise
  a separate adequacy question (B12, not addressed here).
- **Sex-specificity is a genuine finding to carry, not smooth over** — the CV benefit is
  male-concentrated in this cohort (interaction P = .01 for CVD), a route-(b) caveat on any pooled
  estimate.
- **Open loop:** nothing here grades a vegetarian pattern against a realized outcome in a randomized
  design; the causal step rests on consistency across Adventist cohorts + a metabolic mechanism +
  a toward-null follow-up argument, against an unquantified residual confound — a single confounded
  cohort, not adjudication.

## References

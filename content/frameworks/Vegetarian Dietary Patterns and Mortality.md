---
type: framework
question: Are vegetarian dietary patterns (vegan / lacto-ovo / pesco / semi) associated with lower all-cause and cause-specific mortality, for whom, by how much, and is the association a causal signal or a healthy-adherent confound?
aliases: [Vegetarian Diet, Vegan Diet, Plant-Based Diet Mortality, AHS-2, Adventist Health Study, Vegetarian Patterns, Pesco-vegetarian, Lacto-ovo vegetarian]
authors: [Orlich, Michael J; Singh, Pramil N; Sabaté, Joan; Jaceldo-Siegl, Karen; Fan, Jing; Knutsen, Synnove; Beeson, W Lawrence; Fraser, Gary E; Landry, Matthew J; Senkus, Katelyn E; Mangels, A Reed; Guest, Nanci S; Pawlak, Roman; Raj, Sudha; Handu, Deepa; Rozga, Mary]
sources: [Orlich - Vegetarian Patterns Mortality AHS-2 2013, Landry - Vegetarian Dietary Patterns Cardiovascular Umbrella 2024]
cluster: dietary-patterns
confidence: low
created: 2026-08-13
updated: 2026-09-02
self_critiqued: 2026-08-29
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
    - Blood Pressure Lowering and Cardiovascular Events
    - LDL Lowering and Cardiovascular Events
    - Inflammation as a Modifiable Lever
    - Surrogate Outcomes
    - Which Objective Moved This Recommendation
    - Vitamin B12 Status in Vegetarian and Vegan Diets
---

<div class="recent-update" data-last-updated="2026-08-29"></div>

**The vegetarian/vegan pattern leg**, anchored on two sources: Orlich 2013 (the Adventist Health Study
2 [AHS-2] prospective cohort — 73,308 analytic Seventh-day Adventists, 2,570 deaths, mean follow-up
5.79 y, Cox regression) for the single-cohort detail, and Landry 2024 (a gold-tier umbrella of 21 SRs,
AMSTAR-2 + GRADE) for the pooled multi-cohort CV picture. The certainty ceiling on both is **confounding,
not sampling** — the whole literature is observational, and the umbrella's breadth does not buy
independence from that confound (it re-pools the same cohorts, Orlich's AHS-2 among the family). Orbits
the `dietary-patterns` nucleus [[Mediterranean Diet and Cardiovascular Events]].

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

<div class="recent-update" data-last-updated="2026-08-29"></div>

## The pooled multi-cohort picture — Landry 2024 umbrella (21 SRs)

[@landry2024vegetarian]
Landry pools the observational-cohort literature (general population, «presumably healthy adults»
excluding diagnosed cardiometabolic disease; comparator = non-vegetarian/omnivorous diet) and grades
each arm with GRADE:

| Outcome (vegetarian incl. vegan vs non-veg) | Pooled estimate | COE |
|---|---|---|
| CVD incidence | RR 0.85 (0.79, 0.92), I2=68% | **moderate** — highest arm |
| CHD incidence | RR 0.79 (0.71, 0.88), I2=67% | moderate |
| CVD mortality | HR 0.92 (0.85, 0.99), I2=0% [Jafari] | low |
| CHD mortality | HR 0.76 (0.68, 0.85) [Jafari] | low |
| Total stroke | RR 0.90 (0.77, 1.05) — NS | low |
| Vegan CVD incidence | RR 0.92 (0.79, 1.06) — NS | low |
| Stroke / CBVD mortality | NS | very low |

«In meta-analysis, vegetarian including vegan dietary patterns reduced risk of both CVD [relative risk
(RR) (95 % CI): 0.85 (0.79, 0.92) I2=68 %] and CHD [0.79 (0.71, 0.88) I2=67 %] compared to
non-vegetarian dietary patterns» [@landry2024vegetarian]. The umbrella's own headline is a **ceiling, not a green light**: «only lower
CVD and CHD incidence had moderate certainty evidence» [@landry2024vegetarian] — every mortality and surrogate arm is low or very low.

Two arm-level notes matter for reading these. The 0.85 incidence figure is a «CVD incidence or
mortality» pool (the constituent SR, Dybvik, substituted cause-specific mortality where incidence was
missing). And **stroke is the outcome where the benefit fails to appear** — vegetarian total stroke is
null (0.90, CI spans 1) and the vegan point estimate sits above 1 (1.17 [0.69, 1.99]) — consistent
with the EPIC-Oxford higher-stroke signal below, not with a uniform vascular benefit.

<div class="recent-update" data-last-updated="2026-08-29"></div>

## Why 21 SRs is not 21 independent tests, and what the umbrella adds over AHS-2

[inferred from @landry2024vegetarian]
Umbrella breadth is not independence. Landry's constituent SRs extensively **share primary studies** —
e.g. of twelve cohort studies on stroke «All twelve primary studies were reported in Dybvik et al.
[31], but only seven were reported in Lu et al. [41]»; for CRP «13 of these studies were reported in
both SRs» [@landry2024vegetarian].
The authors analyzed «study overlap according to primary studies» precisely because the SRs re-pool a
shared cohort base. So the 21-SR count is a coverage figure, not 21 replications (volume != independence).

Relative to the AHS-2 detail this page already holds, the umbrella is **type-F refinement** (pooling,
multi-cohort quantification, per-arm GRADE), **not type-E independent corroboration**: the Adventist
and EPIC-Oxford cohorts that dominate this literature are among its constituent primary studies, so the
umbrella cannot escape — and inherits — the same healthy-adherer confound Orlich flags. What it genuinely adds is a
**pooled, GRADEd effect size** across many cohorts where the page previously had one — the incidence
signal (RR 0.85, moderate COE) is more than any single cohort establishes.

<div class="recent-update" data-last-updated="2026-08-29"></div>

## The cardiometabolic risk-factor arms — surrogates, and no single channel carries the benefit

[@landry2024vegetarian]
Vegan (vs omnivorous) diets moved every measured risk-factor surrogate modestly — all observational,
all high-heterogeneity, all low/very-low COE:

| Surrogate (vegan vs omnivore, observational) | Effect | COE |
|---|---|---|
| Systolic BP | −2.56 mmHg (−4.66, −0.45), I2=83%; DBP NS | very low |
| LDL-C | −0.49 mmol/l (−0.62, −0.36), I2=92% | low |
| Triglycerides | −0.05 mmol/l (−0.24, −0.05) | very low |
| CRP (novel MA, 22 studies / 8250) | −0.55 mg/l (−1.07, −0.03), I2=99.5% | very low |
| BMI | −1.72 kg/m2 (−2.52, −1.32), I2=98% | very low |

Each lands on its own lever page — BP -> [[Blood Pressure Lowering and Cardiovascular Events]], LDL ->
[[LDL Lowering and Cardiovascular Events]], CRP -> [[Inflammation as a Modifiable Lever]], BMI ->
[[BMI and All-Cause Mortality]] — carrying the shared caveat that a *dietary* surrogate change does not
transmit to events at the drug-route rate (proven only for pharmacological lowering ->
[[Surrogate Outcomes]]). The LDL arm is doubly hedged: the **randomised** evidence in presumably-healthy
adults was **null** (vegetarian+vegan combined LDL «−0.13 mmol/l (−0.37, 0.12)», NS), so the −0.49 is
the confounded observational estimate.

**Emergent read: the diet is pleiotropic, and no one surrogate accounts for the CVD signal.** The CVD
incidence reduction (RR 0.85) is larger than the BP channel alone predicts — −2.56 mmHg at the BP
lever's \~10%-per-5-mmHg rate is only \~5% — so if the association is causal it runs through *several*
small channels at once (BP, LDL, adiposity, inflammation), none decisive. A multi-channel,
substitution-shaped story, not a single lever.

<div class="recent-update" data-last-updated="2026-08-29"></div>

## Symmetric-standards read — funding, authorship, and one GRADE decision to watch

[@landry2024vegetarian]
**COI, named not priced.** The review was «supported by the Academy of Nutrition and Dietetics, the
Academy of Nutrition and Dietetics Foundation, and the Academy of Nutrition and Dietetics Vegetarian
Nutrition Dietetic Practice Group», with vegetarian-nutrition advocates among the authors (Mangels,
Pawlak) and the Academy's Evidence Analysis Center (Handu, Rozga). This is a stake in the exposure under
study — the same axis a meat-industry-funded meat paper carries — and earns the same appraisal bar, no
more, no less (name the axis, do not price it -> [[Which Objective Moved This Recommendation]]). The
funder «had no role in the design and conduct of the study».

**Applying that bar, the apparatus is mostly held honestly** — most arms graded low/very-low, only
CVD/CHD incidence reached moderate, and the null stroke and vegan arms were reported as null. Two places
where an advocacy prior could bite, flagged for the reader:

- **The one significant CVD-mortality estimate was chosen over a null twin.** «The meta-analyses in the
  SRs demonstrated similar results, though the results in Jafari et al. were statistically significant
  [HR: 0.92 (0.85, 0.99)] while results in Glenn et al. were not [RR: 0.92 (0.84, 1.02)]». Same \~5
  primary studies, near-identical point estimate (0.92); Jafari's tighter CI crossed significance and
  was picked as «higher quality». Defensible on AMSTAR-2 grounds — but the headline CVD-mortality signal
  rests on a fragile \~8% reduction whose significance flips between two poolings of the same cohorts.
- **They declined to downgrade CHD mortality for indirectness** where the constituent SR (Glenn) had:
  «umbrella review authors chose to mark COE down for observational evidence only, because the
  predominant health-conscious behavior of concern is, in this case, the behavior of interest». This
  treats the health-conscious *bundle* as if it were the isolated vegetarian exposure — but the
  healthy-adherer confound (below) is exactly that these vegetarians also smoke/drink less and exercise
  more. Reasonable people can grade it either way; the choice ran toward the more favorable certainty.

<div class="recent-update" data-last-updated="2026-09-02"></div>

## Decision relevance

- **The umbrella confirms the DIRECTION at moderate certainty for incidence, low for mortality** — a
  vegetarian pattern is associated with \~15% lower CVD incidence and \~8-24% lower CVD/CHD mortality,
  but the causal step past the healthy-adherer confound is unmade (all observational, no
  general-population RCT). Direction well-supported; causation low-certainty — the page's core question.
- **A low-meat / vegetarian pattern is a plausible modest lever** on mortality (\~10-20% relative, \~1
  death/1000 person-years absolute at this cohort's risk), best framed as *a pattern in a
  health-motivated person*, not a decomposed causal claim about removing meat. Rank it as
  observational-grade, below big rocks and below RCT/MR-backed levers; it substantially overlaps the
  already-ranked component levers (nuts, fibre, low red/processed meat, leanness, abstinence) rather
  than adding a separate one.
- **The graded pattern does not reward strictness** — pesco- and lacto-ovo-vegetarian carried
  signals as good as or better than vegan, and semi-vegetarian was null; the decision is "shift toward
  a plant-predominant pattern," not "maximize animal-food exclusion." Restrictive vegan patterns raise
  a separate adequacy question -> [[Vitamin B12 Status in Vegetarian and Vegan Diets]] (B12 has
  essentially no plant source; biochemical depletion/deficiency is common across *all* vegetarian
  subtypes, and supplementation is close to non-optional for the stratum — though the source held there
  gives prevalence and a surrogate, not a mortality effect).
- **Sex-specificity is a genuine finding to carry, not smooth over** — the CV benefit is
  male-concentrated in this cohort (interaction P = .01 for CVD), a route-(b) caveat on any pooled
  estimate.
- **Open loop:** nothing here grades a vegetarian pattern against a realized outcome in a randomized
  design; the causal step rests on consistency across many cohorts (the umbrella) + a metabolic
  mechanism + a toward-null follow-up argument, against an unquantified residual confound — a body of
  confounded observational cohorts, not adjudication. The umbrella's authors say the same — additional
  high-quality RCTs «for CVD prevention among generally healthy adults are needed».

## References

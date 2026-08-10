---
type: framework
question: Does restricting carbohydrate beat a balanced-carbohydrate diet for weight loss, and by how much?
aliases: [Low-Carb Diets, Low-Carbohydrate Diets, Carbohydrate Restriction, Ketogenic Diet Weight Loss, Low-Carb vs Low-Fat, Balanced-Carbohydrate Diets]
authors: [Naude, Celeste E; Dehghan, Mahshid; Gardner, Christopher D; Szczerba, Edyta; Seidelmann, Sara B]
sources: [Naude - Low-Carbohydrate vs Balanced-Carbohydrate 2022, Goldenberg - Low Carbohydrate Diets T2D Remission 2021, Willett - Nutritional Epidemiology 3e, NICE - NG246 Evidence Review F, Dehghan - PURE Fats Carbohydrate Mortality 2017, Gardner - DIETFITS Low-Fat vs Low-Carb 2018, Szczerba - Diet Type 2 Diabetes Umbrella Review 2023, Seidelmann - Carbohydrate Intake Mortality 2018]
cluster: weight-loss-diets
nucleus: true
confidence: medium
relationships:
  related_to:
    - Baseline Risk and the Relative-Absolute Split
    - Rating Certainty of Evidence
    - Rating Outcome Importance
    - Energy Adjustment and What a Diet Coefficient Means
    - Free Sugars Intake
    - What Drives Fat Gain - Energy Balance vs the Carbohydrate-Insulin Model
self_critiqued: 2026-08-06
created: 2026-07-26
updated: 2026-08-06
---

**Nucleus of the `weight-management` cluster.** Cochrane 2022: 61 RCTs, 6925 randomised, search to
June 2021. **Synthesis mode: aggregative** — a common metric and an identical hypothesis, so the answer
is a pooled magnitude. Most questions in this wiki are configurative; this one is not.


[@naude2022]
## The answer, in one line

**Both diets produce weight loss the review treats as approaching clinical meaningfulness — its own
phrasing is conditional, that reductions "from around the middle of these ranges (about 4 to 6 kg in
most trials) **would start to become** clinically meaningful" — while the difference *between* them is
about 1 kg, which the review judges not clinically important.**

*Read the units carefully; they are easy to conflate.* Across both arms, trials
achieved reductions of **12.2 to 0.33 kg** short-term, and the review's bar is *"a loss of at least 5%
of initial weight"*, i.e. *"reductions from around the middle of these ranges (about 4 to 6 kg in most
trials) would start to become clinically meaningful."* **That 4-6 kg is a within-arm loss from
baseline, achieved by both diets — not a between-group threshold.** The \~1 kg figures below are
between-group mean differences and must not be set against it as though they were the same quantity.
[@naude2022]

## The magnitudes

Weight change, low-carbohydrate minus balanced-carbohydrate. Assumed risk = the range of change
observed in the balanced-carbohydrate arms.

| Population | Timepoint | Effect | N (studies) | Certainty |
|---|---|---|---|---|
| **Without T2DM** | 3 to <12 mo | **MD 1.07 kg lower** (1.55 to 0.59 lower) | 3286 (37) | Moderate |
| Without T2DM | >=12 mo | **MD 0.93 kg lower** (1.81 to 0.04 lower) | 1805 (14) | Moderate |
| **With T2DM** | 3 to <12 mo | **MD 1.26 kg lower** (2.44 to 0.09 lower) | 1114 (14) | Moderate |
| With T2DM | >=12 mo | **MD 0.33 kg lower** (2.13 lower to 1.46 higher) | 813 (7) | Moderate |

Other outcomes at >=12 months, without T2DM: DBP **0.09 mmHg lower** (1.29 lower to 1.12 higher);
LDL **0.04 mmol/L higher** (0.05 lower to 0.12 higher). With T2DM: HbA1c **0.14% lower** (0.38 lower to
0.10 higher); LDL **0.12 mmol/L higher** (0.03 lower to 0.26 higher).
[@naude2022]

## Why this is a *no meaningful effect* verdict and NOT an "insufficient evidence" one

This is the telos's four-evidence-states rule, and the review is the cleanest worked instance the
corpus holds. Each between-group difference sits **2 to 4.5 times below** the review's stated
importance bar for that outcome:

| Outcome | Between-group difference | Bar the review states | Ratio |
|---|---|---|---|
| DBP | <0.5 mmHg | *"changes in DBP of greater than 2 mmHg"* | >4x |
| LDL (T2DM) | 0.12 mmol/L | *"changes in LDL cholesterol of greater than 0.26 mmol/L"* | \~2.2x |
| HbA1c | 0.14% | *"changes in HbA1c of greater than 0.5%"* | \~3.6x |

[@naude2022]

**Two things keep this honest.** The LDL row in T2DM has an upper bound of **exactly 0.26** — the
review's own threshold — so that outcome touches the bar rather than clearing it. And the subgroup
estimates below reach **-2.71** and **-2.29 kg**, which are not trivially small.

What converts a small estimate into a positive finding of *no meaningful difference* is the imprecision
judgement, and the review states it outright, four times: *"we did not downgrade for imprecision"* —
because the intervals excluded an appreciable effect in **both** directions.
[@naude2022]

**Pre-specification, split by outcome.** The weight bar is **protocol-anchored**: the Methods carry
*"five to ten per cent of initial body weight (clinically meaningful)"* and "weight loss of at least
5%" is a pre-specified primary outcome with its own SoF row. The DBP, LDL and HbA1c bars appear only in
the **Discussion** — stated, not demonstrably pre-specified. Do not apply one caveat to all four.

## Two mechanistic deflators that make \~1 kg smaller than it looks

Both from Authors' Conclusions, and both are **priors the authors bring to interpretation, not findings
of this review** -- it measured no body composition or hydration outcome that could test either.

1. **The difference is inside the noise band.** *"These differences are similar to typical ranges of
   biological weight fluctuations over time... influenced by various factors including level of
   activity, hydration status, season and medications."*
2. **Glycogen-linked diuresis is larger than the whole effect, and reverses.** *"one should also
   consider the total body water loss (2 to 3 kg) that follows dietary carbohydrate restriction due to
   diet-induced diuresis from glycogen depletion and production of ketone bodies, **which is restored
   when carbohydrates are eaten again**."*

[@naude2022]

A 2-3 kg reversible water shift fully absorbs a \~1 kg between-arm difference. **So the observed
difference may not be a fat-mass difference at all** -- and that is a claim about what the outcome
*measures*, not about how big it is.

## The comparator does most of the work

Subgrouping the 37-trial short-term analysis by **how the two arms' energy prescriptions compared**:

| Energy prescription | MD (kg) | I2 | Studies |
|---|---|---|---|
| **Similar in both arms** | **-0.48** (-0.85 to -0.11) | **0%** | 27 |
| Ad libitum low-carb vs energy-restricted control | -1.84 (-3.07 to -0.62) | 77% | 7 |
| No prescription / unrestricted in both | -2.71 (-4.20 to -1.22) | 13% | 3 |

Test for subgroup differences: **Chi2 = 11.67, df = 2, P = 0.003, I2 = 82.9%.**

And by **depth of restriction** — all three subgroups, which sum to the 37 trials:

| Restriction | MD (kg) | I2 | Studies |
|---|---|---|---|
| Very-low-carbohydrate / ketogenic | **-2.29** (-3.45 to -1.13) | 51% | 9 |
| Incremental very-low to low | **-1.51** (-2.89 to -0.13) | 80% | 4 |
| Low-carbohydrate / non-ketogenic | **-0.36** (-0.75 to 0.03) | **0%** | 24 |

Test for subgroup differences **Chi2 = 11.34, df = 2, P = 0.003, I2 = 82.4%.** The ordering is
monotone in restriction depth.

**The review does not merely decline that reading -- it affirmatively denies it, on these exact
numbers, and the denial belongs here:** *"Subgrouping by similarity of energy prescription (Analysis
1.2), extent of carbohydrate restriction (Analysis 1.3), diagnosed cardiovascular event or disease at
baseline (Analysis 1.4) or gender (Analysis 1.5) **did not suggest important clinical differences in
average effects between subgroups**, with mean differences in weight reduction... ranging between 0.25
kg and 2.71 kg across the various subgroups."* Naude reads the same spread as clinically unimportant
and uses the subgrouping to explain **heterogeneity**, not to establish a gradient. Reporting this as a
reading the review "does not draw" understates a denial as a silence.
[@naude2022]

**When the arms are matched on energy, the advantage collapses to under half a kilogram with zero
heterogeneity.** This is [[Energy Adjustment and What a Diet Coefficient Means]] operating on whole
diets rather than nutrients: the comparator is chosen by a trial-design decision, and it sets the size
of the answer.

**Two cautions on reading these subgroups as effect modification (telos route b):**

- **These were never framed as effect-modification tests.** Both subgroupings are pre-specified in the
  Methods *"to explore substantial heterogeneity and the stability of findings in different study
  subgroups"* -- a heterogeneity investigation, not an interaction hypothesis. Reading a declined
  route-(b) claim into them would be reading a defect into correctly-applied method.
  [@naude2022]
- **The two subgroup tests are not independent.** The matched-energy subgroup and the
  non-ketogenic subgroup share heavily overlapping trial lists, and both collapse to I2 = 0% near null.
  The larger effects concentrate in the same ad-libitum, high-heterogeneity trials. No meta-regression
  disentangles them.
  [inferred from @naude2022]

## The one RCT that pre-specified diet personalization — DIETFITS, null (route-b) `[2026-08-04]`

The route-(b) cautions above ask whether a low-carb estimate should be *personalized* by a biomarker.
DIETFITS (Gardner 2018) is a large RCT purpose-built to answer exactly that, and its distinct
contribution over Naude/Ge — which pool *average* effects, not interactions — is a direct, pre-specified,
powered test of personalization by genotype and insulin.

- **On weight it is a component, not an independent witness.** n=609 non-diabetic adults, healthy-low-fat
  −5.3 kg vs healthy-low-carb −6.0 kg, between-group **0.7 kg [95% CI −0.2 to 1.6], NS** — a single-RCT
  instance of this page's pooled near-equivalence, and DIETFITS sits **inside Naude's search window
  (to June 2021)**, so on weight it is pooled *within* the nucleus estimate, not a separate route.
  [@gardner2018]
- **The distinct value is the interaction nulls.** Two candidate effect modifiers were pre-specified as
  primary hypotheses and powered \~90%: a 3-SNP genotype pattern (diet x genotype **P=.20**) and insulin
  secretion INS-30 (diet x INS-30 **P=.47**). Both null: «neither of the 2 hypothesized predisposing
  factors was helpful in identifying which diet was better for whom.» [@gardner2018]
- **So this is the positive-evidence-of-effect-modification the route-(b) rule demands — and it is
  absent** for these two candidate modifiers. It directly instantiates *personalize beyond the population
  estimate only on positive evidence of effect modification* (telos route b): mechanistic plausibility
  for an insulin-secretor subgroup was **not** enough; the powered test dissolved it. The mechanistic
  framing (this is the CIM's surviving subgroup limb) is held on
  [[What Drives Fat Gain - Energy Balance vs the Carbohydrate-Insulin Model]].
- **Bounds (symmetric standards).** The null holds *when both arms emphasise diet quality* (Gardner's own
  boundary condition), and is confined to non-diabetics and the INS-30 index — some smaller trials
  reported an interaction on *fasting* insulin, uncovered by this result.
- **LDL corroboration.** DIETFITS's low-carb arm **raised LDL**, and the between-group change
  significantly favoured low-fat (\~5%), while HDL rose more and triglycerides fell more on low-carb —
  matching the atherogenic-lipid signal this page already holds -> [[LDL ApoB and Cumulative Exposure]].
  [@gardner2018]

[inferred from @gardner2018]

## What no trial measured

> *"None of the included trials reported on the following outcomes for any of the four comparisons:
> all-cause mortality, cardiovascular mortality, non-fatal myocardial infarction, non-fatal stroke and
> diagnosis of T2DM."*

And: *"No trials reported on outcomes after two years, and 60% of trials had a duration of six months
or less."*
[@naude2022]

**Cardiovascular mortality is a "not measured" row in all four summary-of-findings tables** -- the only
hard patient-important endpoint the authors carried into them, empty in every stratum. So **every
reported outcome here is a surrogate** except constipation and participant-reported adverse effects.
Per the expectancy test this is *unprobed*, not *disproved*, and the authors say why: long follow-up in
diet trials is impractical.

## Decision relevance

- **For weight loss alone, the macronutrient split is close to irrelevant at the population level.**
  The decision moves to adherence, cost and preference -- not to carbohydrate percentage.
- **A claimed low-carb advantage should be met with one question: what was the comparator's energy
  prescription?** Matched-energy trials show -0.48 kg; ad-libitum-versus-restricted trials show -1.84.
  The page deliberately assigns **no attribution fraction** to that gap, because the energy-prescription
  and restriction-depth subgroups overlap heavily and nothing here disentangles them.
- **Early rapid loss on carbohydrate restriction is partly water and reverses on refeeding.** Someone
  judging a diet by week-two scale change is reading a hydration signal.
- **Nothing here speaks to mortality or cardiovascular events**, in either direction.

**Broadened to the whole named-diet field by Ge 2020 (F, shared-evidence — NOT independent).** The
pairwise near-equivalence here generalises: a 121-RCT network meta-analysis across 14 branded diets and
three macronutrient patterns finds low-carbohydrate and low-fat near-identical on 6-month weight (4.63 v
4.37 kg vs usual diet) and between-diet differences «typically small to trivial», with weight benefit
decaying \~1.5 kg per diet and cardiovascular risk-factor gains «largely disappear[ing]» by 12 months
-> [[Named Diet Programs Compared]]. This **corroborates** the *macronutrient-split-is-close-to-
irrelevant* verdict from a network design, but is **not** independent backing — Ge pools the same
low-carb-vs-low-fat RCT class (e.g. Bazzano 2014, Yancy 2004) and cites the earlier Naude 2014 MA, so a
shared missing-trial or confounding structure would move both. Ge is a corroboration line here, not a
`sources:` entry (its distinct extraction lives on the paired page).


[inferred from @naude2022]
## Where it stands relative to guidance

The review's findings sit **comfortably inside prevailing guidance**, and it says what that guidance
permits rather than asserting agreement with it: *"Current dietary guidance allows for flexibility in
the proportion of macronutrients, including a wide range of carbohydrate intakes, with greater emphasis
on quality over quantity and on total dietary patterns over single nutrients."*
[@naude2022]

Recorded because *convention held here* is a reportable finding under the telos, not a non-result --
and because agreement reached with better warrant defeats the guidance null as surely as divergence.

**A guidance body reached the same verdict — NICE NG246 (2025) `[NICE Revisit 2026-07-29]`.** Appraising
the trial literature for its weight-management guideline, NICE found low-carbohydrate diets «did not
result in improvements in weight, BMI, waist circumference, or HbA1c, relative to conventional (usually
low-fat) diets, apart from a small improvement in waist circumference for females»
[@nice] -- and left low-carb **without a recommendation,
for it or against it** ([[Diets for Weight Loss - What NICE Recommends]]). This **corroborates** the
*no-meaningful-superiority* verdict from a second guidance family. Two refinements it adds:

- **Durability, not just magnitude.** For *very*-low-carb, NICE found weight loss «did show a reduction
  in weight at 1 year, but this was not sustained at 2 years» -- the \~1 kg (or its VLC amplification)
  fades, which is the maintenance-phase caution the wiki otherwise holds only mechanistically
  (cf. the rate/maintenance gap, Challenge #20).
- **Corroboration, NOT independent backing.** This is **F, not `[E-independent]`**: NICE is a guideline
  appraising the *same* RCT base this page's Cochrane review (Naude) pools, so the convergence is
  shared-evidence agreement, not a second independent route -- it raises confidence modestly and defeats
  the guidance null (agreement with better warrant), but adds no independent witness.

## Paired with Goldenberg 2021 — the two reviews DISAGREE about depth of restriction

[[Carbohydrate Restriction and Type 2 Diabetes Remission]] asks a different primary question --
remission in people who already have T2D. But both report **weight change at \~6 months in kg**, and on
the sub-question of *whether deeper carbohydrate restriction produces more weight loss* **they point in
opposite directions**:

**Parameter table** (op-weave step 2a — built before the prose below, and it is what stops this
section from asserting a false gradient):

| Parameter | Naude 2022 | Goldenberg 2021 | Same quantity? |
|---|---|---|---|
| Outcome | change in body weight, kg | change in body weight, kg | **yes** |
| Timepoint | 3 to <12 months | 6 months | **near enough** |
| Population | **without T2DM** (Comparison 1) | **entirely T2D** | **NO** |
| Deep-restriction band | ketogenic, *"<=50 g per day or <10% of total daily energy intake"* | very low, *"<10% daily calories from carbohydrates or <50 g/d"* | **yes** |
| Admission threshold for the pooled set | **<45% TE or <=150 g/day** | *«130 g/day or less than 26% of calories»* | **no — Goldenberg's pooled set is NARROWER, but its deep band matches Naude's** |
| **Reference (shallow) band** | non-ketogenic, *"> 50 g to 150 g per day or < 45% of total energy intake"* | "less restrictive", *"between 10% and 26% of calories from carbohydrates"* | **NO — Goldenberg's shallow band is deeper than Naude's** |
| Deep vs shallow result | ketogenic **-2.29** (-3.45 to -1.13) vs non-ketogenic **-0.36** (-0.75 to 0.03), P=0.003 | very-low **-1.05** (-2.27 to 0.17) vs less-restrictive **-5.22** (-8.33 to -2.11), P=0.01 | **no — same deep band, different reference** |

The deep-restriction bands are near-identical (Naude *"<= 50 g per day"*, Goldenberg *"<50 g/d"* --
inclusive vs exclusive) and the outcome and unit match. **But two cells fail, not one.**

- **Population** — Naude's Analysis 1.3 is without-T2DM, Goldenberg's is entirely T2D.
- **The reference band** — and this one was missing from the table entirely, which is what let the
  *they point OPPOSITE ways* verdict stand. A subgroup contrast is deep-*minus-shallow*; if the shallow
  arms differ, the two contrasts are not the same quantity even when the deep arms match. Goldenberg's
  reference band (10-26% of calories) sits **inside** what Naude counts as restricted at all, so its
  "less restrictive" comparator is closer to Naude's ketogenic arm than to Naude's non-ketogenic one.

**So the direction clash is not established.** It may still be real, but this table cannot show it.

[@naude2022]

**The inviting error here is a monotone dose-response ladder** (-0.36 -> -1.07 -> -2.29 -> -3.46)
built by treating Goldenberg's whole set as the deepest rung. Two things falsify it. **Goldenberg's inclusion
threshold is <26% energy or <130 g/day, which is LOOSER than Naude's ketogenic band of <=50 g/day or
<10% energy** -- so the "deepest" rung was actually the shallowest admission criterion. And
**Goldenberg's own credibility-tested subgroup decomposes its -3.46 kg the other way**: the pooled
figure is driven by its *less* restrictive trials, not its deepest ones.

**Why this is NOT filed as a *tension* — the scope check fires twice.** Naude's Analysis 1.3 is
from its **without-T2DM** comparison; Goldenberg's population is **entirely T2D**. Under the not-joined
checks, two claims holding at different scope are not opposed until matched — and the reference-band
mismatch above means the estimands do not match either.

**The resolving test named here previously does not exist.** Naude's with-T2DM comparison (Analyses
3.1-3.25) runs sensitivity analyses on risk of bias, attrition and funding source — there is **no**
restriction-depth subgroup and no energy-prescription subgroup anywhere in it, though the review does
record the bands for those trials (*"very low (<= 50 g per day) (n = 5) to low (> 50 g to 150 g per day
or < 45% of total energy intake) (n = 11)"*). Checked directly in the analysis list; the read that was
`AWAITS`-ed is unfulfillable from this source. Resolving the clash needs **trial-level data or a review
that subgroups restriction depth within T2D**, not another pass over Naude.

**Goldenberg supplies a candidate reconciliation if it does become one** -- adherence: among
very-low-carbohydrate diets *to which patients were highly adherent*, weight loss was larger
(**-4.47**, -8.21 to -0.73). On that reading, depth and adherence pull against each other and the
pooled estimate is their net.

**What survives regardless, and it is the durable part:** a low-carbohydrate weight estimate is
uninterpretable without **both** design parameters -- the comparator's energy prescription *and* the
carbohydrate threshold -- and the two reviews use different thresholds while both being called
"low-carbohydrate". Note also that Goldenberg admits **wait-list and no-intervention comparators**
while Naude requires the control to be a balanced-carbohydrate *weight-reducing* diet, so comparator
design is a live rival explanation for any between-review gap.

## Szczerba 2023 (T2D umbrella) — the HbA1c verdict flips with the comparator

The Cochrane head-to-head above gives low-carb **vs a balanced-carbohydrate diet** an HbA1c of only
**0.14% lower** in T2DM — a *no-meaningful-effect* verdict. Szczerba's gold umbrella grades low-carb (<26%E)
**vs a usual/higher-carb control** at **−0.47% HbA1c (−0.60 to −0.34, n=17 RCTs, GRADE high)** — clinically
meaningful. These do **not** contradict: the comparator differs, which is exactly this page's thesis
(*the comparator does most of the work*). [@szczerba2023]

| Parameter | Naude 2022 (Cochrane) | Szczerba 2023 (umbrella) | Same quantity? |
|---|---|---|---|
| Outcome | HbA1c, T2DM | HbA1c, T2D | yes |
| Comparator | **balanced-carbohydrate weight-reducing diet** | **usual / higher-carb control** | **NO** |
| Depth | «low-carb» range incl. shallow | **<26%E** (deep) | **NO** |
| Effect | **0.14% lower** (0.38 lower to 0.10 higher) | **−0.47%** (−0.60 to −0.34) | verdicts differ *because* comparator + depth differ |

Two further Szczerba findings on carbohydrate restriction in T2D, held in full on the nucleus
[[Diets for Weight Management in Type 2 Diabetes]]:

- **A monotone dose-signal (no knee shown).** A 10% carbohydrate *decrease* moves HbA1c only −0.11% (not
  clinically meaningful) vs −0.47% at <26%E; weight loss «was greater in interventions with low (<26%) or
  very low (<15%)... than in... moderate (<45%) carbohydrate intake» — deeper buys more, consistent with the
  domain default that every reduction pays until a knee is located. The estimates may be **under**-stated
  (poor adherence «especially for low carbohydrate and ketogenic diets»). [@szczerba2023] [@szczerba2023]
- **Deprescribing (the firmest non-surrogate finding).** Low-carb (<26%E) «reduced the use of drug
  treatments by an additional 24 per 100 individuals (risk difference 0.24, 0.12 to 0.35;... moderate
  certainty)». Also GRADE-high: triglycerides −0.30 mmol/L; HDL +0.06 (moderate). [@szczerba2023]

## Limits

- **\~40% of included trials had food/diet industry funding.** A pre-planned sensitivity analysis
  removing them found **no consistent direction**: the short-term non-diabetic estimate moved slightly
  *away* from null (-1.07 to -1.20), the long-term estimate *toward* null and to non-significance
  (-0.93 to -0.62). So the honest reading is *no detectable funding effect*, not *funding inflated the
  low-carb advantage*.
- **Non-reporting bias is conceded on both legs.** 11 trials' weight data were unobtainable in usable
  format; two of three funnel plots *"suggest that smaller studies may be missing"*. In all three
  comparisons the fixed-effect estimate sits closer to null than the random-effects one -- the review
  reads this as reassuring, and the consistent one-way pull is equally available as a small-study
  signal.
- **The defence against non-reporting bias is agreement with other reviews** -- which draw on the same
  trial literature and would inherit the same missing trials. Volume of agreement is not independence
  of backing.
- Outpatient settings in **high-income countries except for one trial in China**; nearly half were run
  in the USA.
- **The review reports a stratum where caution is warranted, and it belongs in any recommendation drawn
  from this page:** *"In people with lipid disorders and variability with atherogenic lipoprotein
  response, caution in recommending low-carbohydrate and consequent high-fat diets is warranted."*
  [@naude2022] That is a
  telos route-(c) contraindication stated by the source.
- **Direction, stated plainly:** every subgroup and stratum point estimate favours low-carbohydrate.
  The verdict is *not meaningfully different*, not *no difference in any direction*.
- **Cohort data on hard outcomes at the extremes — PURE 2017 (partially cashes the AWAITS below).**
  Dehghan (135 335 adults, 18 countries) speaks to what this
  RCT review structurally cannot — hard outcomes across the intake range — and it **cuts against both
  poles, not one**: higher carbohydrate (spline rise above \~60%E) associated with higher **total
  mortality** (Q5 vs Q1 HR 1.28 [1.12-1.46]), yet «the absence of association between low carbohydrate
  intake (eg, <50% of energy) and health outcomes does not provide support for very low carbohydrate
  diets», with «moderate intakes (eg, 50-55% of energy)... more appropriate than either very high or
  very low». So PURE licenses neither a high-carb nor a very-low-carb optimum.
  [@dehghan2017]
  - **Two discounts before it is used.** PURE is **observational** (mortality, not the weight outcome
    this page pools) and its high-carb signal is **confounded by income** — the highest-carb quintiles
    are the poorest, and «carbohydrate consumption in low-income and middle-income countries is mainly
    from refined sources» (it was «unable to quantify separately the types of carbohydrate (refined vs
    whole grains)»). So the
    high-carb harm is largely a **refined-carb / poverty** signal, not carbohydrate per se
    -> [[Is the Food Category Doing Any Work]], [[The U-Shaped Association Artifact]]. It is grounding
    for *«harm at the extremes»*, not a clean dose-response on carbohydrate.
    [@dehghan2017]
- **A second cohort traces the complementary arm — Seidelmann 2018 (ARIC + 8-cohort MA)
  `[2026-08-05]`.** Where PURE populates the high-carb (right) arm, Seidelmann's ARIC (mean 49%E) supplies
  the **low-to-moderate (left)** arm, and the two overlay into one U-shaped carbohydrate->mortality curve
  with **nadir 50-55%E** and both extremes elevated (pooled HR «1·20 ... for low carbohydrate
  consumption; 1·23 ... for high») [@seidelmann2018] — so cohort data now cut against **both** poles from both sides. Crucially for *this* page's
  low-carb question, the low-carb arm's mortality **depends entirely on the replacement source**:
  «mortality increased when carbohydrates were exchanged for animal-derived fat or protein (1·18,
  1·08-1·29) and mortality decreased when the substitutions were plant-based (0·82, 0·78-0·87)».
  [@seidelmann2018] So a low-carb weight
  strategy is not mortality-neutral-by-default: an *animal-based* low-carb pattern tracks higher
  mortality, a *plant-based* one lower — the source of the substituting fat/protein is the lever, not the
  carbohydrate percentage. Observational (FFQ), weak reverse-causation checks only, no MR
  -> [[The U-Shaped Association Artifact]], [[Dietary Protein and Mortality]].
- `AWAITS` a source on whether carbohydrate restriction changes hard outcomes at all **in a randomised
  design** — PURE and Seidelmann (above) supply the observational cut but not the interventional one. The
  review points outside its own evidence base to cohort data showing *«harm at the extremes of intake»*
  -- which cuts against **both** diet poles rather than favouring either.

## Held, not filed

A **candidate joined issue** exists on Analysis 1.2 and is deliberately not filed yet: this review
treats the ad-libitum-versus-restricted asymmetry as a **bias to subgroup away**, while at least one
source in the queue treats the same asymmetry as **the mechanism** -- appetite suppression under
carbohydrate restriction, and therefore part of the effect rather than a confound. The wiki's own
layer-3 provisions (*judge against the realistic alternative*; *adherence is part of the effect*) do not
obviously side with the review.
The low-carb-first *advocacy* position was to be sourced from Feinman 2015, but that source was
**assessed and dropped as non-gold** (a narrative critical review); the contrarian case is taken
from the held systematic reviews (Naude, Goldenberg) rather than from its advocates, so no
advocacy-voiced tension is filed.

**The mechanistic *why* behind the matched-energy null is now filed as its own tension.** The
carbohydrate-insulin model predicts a metabolic advantage for carb restriction at equal calories;
isocaloric-controlled-feeding evidence (Hall & Guo 2017) refutes that prediction in *direction* — the small
edge runs the other way, toward lower-fat -> [[What Drives Fat Gain - Energy Balance vs the Carbohydrate-Insulin Model]] (where that evidence is held). This is the metabolic-ward counterpart to this
page's whole-diet matched-energy subgroup (-0.48 kg, I2=0%): a different design reaching the same *no
carb-specific advantage* verdict, though both share isocaloric-comparison logic (convergent, not clean
independent backing). The candidate appetite/ad-libitum joined issue held above is the CIM's one surviving
live channel — GL/protein acting on *intake*, not on metabolism.

## Why a small weight-CHANGE difference is a harder measurement than it looks `[2026-07-28, Willett ch.9]`

This page's central quantity is a **between-group difference in weight change** of roughly 1 kg.
Willett's anthropometry chapter says why that is the fragile case, and the reassuring half of his
sentence has to come first or the point inverts:

> «This degree of reproducibility is far greater than for most biochemical or physiologic measurements
> and indicates that, with reasonable care, imprecision in measurement of weight is not likely to be a
> serious issue in most epidemiologic studies. In studies that involve change in weight over months or
> a few years, precision in measurement is much more critical, as measurement errors contribute twice
> (at the beginning and the end) and the magnitude of weight changes is usually small compared with
> differences in attained weight between persons.»
> [@willett]

**Weight is one of the best-measured variables in nutritional epidemiology. Weight *change* is not**,
and the two failure modes are structural:

- **Error enters twice.** A difference of two measurements carries both measurements' error, so the
  error variance on a change is larger than on either endpoint.
- **The signal is small relative to between-person spread.** The quantity of interest is a few kg
  against a between-person range of tens of kg.

**What this does and does not say about this page's \~1 kg.** It does **not** impeach the estimate:
these were randomised trials with measured (not self-reported) weights, and randomisation plus pooling
addresses what unsystematic error does to a mean difference. **What it does is explain why the
confidence intervals are wide relative to the effect, and why the review's *not clinically important*
verdict is robust** — a 1 kg difference sits inside the noise band of the measurement problem it is
estimated through, quite apart from whether it matters to a patient.
[inferred from @willett]

**Where it bites harder: any observational weight-change finding**, and any self-reported one. Willett
records that self-reported BMI runs low — NHANES III mean 25.07 vs 25.52 technician-measured, from
underreporting weight (**-0.56 kg**) *and* overreporting height (**+0.76 cm**), two errors compounding
in the same direction on the ratio.
[@willett]

## What the trials actually delivered — the fidelity seam `[2026-07-28]`

This page's \~1 kg rests on 61 randomised trials. **The review records an *«Extent of intervention
fidelity»* field for every arm, and that field was never read.** A targeted pass over the
characteristics tables gives the following.

**Counted across the review: 122 fidelity entries, of which 33 (27%) are «NR».**
`[searched: "Extent of intervention fidelity:" across all 20 Naude chunks; entries classified NR vs
reported by their opening token]`
**So roughly a quarter of trial arms report nothing about whether the assigned diet was followed.**

**Where fidelity IS reported, it is frequently poor:**

> «Extent of intervention fidelity: Adherence to the dietary interventions was low for both arms (22%
> and 29% for LFD and LCD, respectively). Overall, participants were more compliant with the PA compo-
> nent of the intervention (66% and 61% among those randomised to the LFD and LCD arms, respective-
> ly).»
> [@naude2022]

Others read simply «Adherence was reported as poor», or record participants «excluded during follow-up
due to non-compliance».

**And the measurement of adherence is not one quantity.** Across arms it is variously: a percentage; a
dietitian's grading scale; the difference between reported and target carbohydrate; a count of
excluded non-compliers; the authors' own word (*«high adherence»* claimed as a study strength); and, in
one trial, a class-attendance proxy standing in for diet adherence because the diet measure was
unavailable:

> «Extent of intervention fidelity: Dietary adherence scores could not be calculated due to the
> multiple dimensions of the intervention programme's recommended goals. In all 4 diet groups, 85% to
> 89% of participants attended at least 75% of their assigned classes (>= 6 of 8).»
> [@naude2022]

### What this does and does not change

- **It does NOT impeach the \~1 kg.** These are randomised trials analysed by intention to treat, and
  under ITT **poor adherence is part of the effect being estimated**, not a bias in it. The estimate is
  sound for what it estimates.
- **It sharpens what that is: the effect of ASSIGNING a diet, at the adherence these trials achieved.**
  That is the decision-relevant quantity for someone choosing between two sets of dietary advice — and
  it is *not* the effect of eating the two diets.
- **The load-bearing consequence is that the review cannot separate two explanations of the null.**
  *Low-carbohydrate is no better than balanced-carbohydrate* and *neither diet was followed well enough
  to tell* predict the same 1 kg. **Separating them needs a per-arm exposure contrast**, and with 27%
  of arms reporting no fidelity at all and the rest measuring it incommensurably, **this review cannot
  supply one.**
  [inferred from @naude2022]
- **It strengthens rather than weakens the *not clinically important* verdict for a chooser.** If
  advice-as-delivered moves weight by \~1 kg, that is what advice does in practice, whatever the diets
  would do if followed.

**The same structure the corpus already holds on sugars.** [[Free Sugars Intake]] records that an
advice trial estimates the *advice-plus-adherence package*, and that where the exposure contrast fails
the null is uninformative about the exposure. **This is that principle instantiated across 61 trials
with the fidelity field counted.** -> [[Framing a Decision Question]]

**One data point deliberately NOT used.** Two arms of a single trial record compliance means of
**94%** and **9%**. A 9% mean with an SE of 4.8% is possible, but so is an OCR truncation of 90% —
**and no recovered-tables sidecar exists for this source to check against**, so the digit is
unverifiable. **An extreme differential-adherence example was available and has been left out**, since
the finding above does not need it.

## References

---
type: synthesis
aliases: [Food Group Dose-Response Matrix, Which Food Groups Move Which Outcomes, DIfE Boeing Food Group Series]
question: For each of 12 major food groups, which patient-important outcomes does a defined serving increment move, in which direction, by how much, and with what certainty?
authors: [Schwingshackl, Lukas; Bechthold, Angela; Schlesinger, Sabrina; Boeing, Heiner; Thorisdottir, Birna]
sources: [Schwingshackl - Food Groups All-Cause Mortality Meta-Analysis 2017, Schwingshackl - Food Groups Type 2 Diabetes Meta-Analysis 2017, Schwingshackl - Food Groups Hypertension Meta-Analysis 2017, Bechthold - Food Groups CHD Stroke Heart Failure Meta-Analysis 2019, Schlesinger - Food Groups Overweight Obesity Weight Gain Meta-Analysis 2019, Thorisdottir - Legume Cardiovascular Diabetes Meta-Analysis 2023, Simpson - Adherence Drug Therapy Mortality Meta-Analysis 2006]
cluster: food-group-dose-response
nucleus: true
confidence: moderate
self_critiqued: 2026-08-29
created: 2026-08-28
updated: 2026-08-29
relationships:
  related_to: [Layer 1 - Ranking Interventions for a Stratum, Whole Grains Refined Grains and Pulses, Fruit and Vegetable Intake and Health, Red and Processed Meat and Cancer, Fish and Seafood Consumption, Dairy and Cardiometabolic Health, Eggs Dietary Cholesterol and Cardiovascular Risk, Nut Consumption and Mortality, Free Sugars Intake, The U-Shaped Association Artifact, Measurement Error in Dietary Assessment, Diet Quality Scores and Cardiovascular Risk, Is the Food Category Doing Any Work, The Observational-Trial Discordance]
---

One coordinated meta-analysis series (the DIfE/Boeing group: Schwingshackl, Bechthold,
Schlesinger, Boeing) applied the **same** 12-food-group dose-response framework to five
outcome families — all-cause mortality, type 2 diabetes (T2D), hypertension, cardiovascular
disease (CHD/stroke/heart failure), and adiposity (overweight/obesity, abdominal obesity,
weight gain). Laid side by side, the five papers form a grid no single paper contains:
which food groups move **which** outcomes, and — more informatively — where a food's effect
**diverges** across outcomes. That cross-outcome grid is the emergent object here (type-A),
and the divergences (fish, dairy, eggs, vegetables) are the payoff, not the uniform effects.

## Load-bearing caveat: this is ONE evidence base sliced five ways, NOT five independent confirmations

The five meta-analyses share a research team, the **same** 12 a-priori food-group definitions,
one registered protocol (PROSPERO CRD42016037069), overlapping PubMed/Scopus/Web-of-Science
searches, and a **heavily overlapping cohort pool** (the same prospective cohorts report
multiple outcomes, so one cohort feeds several columns).
[@schwingshackl2017htn]
[@schlesinger2019]

Consequently, **cross-outcome consistency is NOT type-E independent corroboration.** That
processed meat reads harmful in all five columns is one program applying one method to one
literature five times, not five independent tests converging — the agreement is partly
mechanical (shared cohorts, shared confounding structure, shared dietary-measurement
instrument). The confidence attached to any single cell therefore rests on **that
cell's own NutriGrade rating** (H/M/L/VL below), never on how many other columns agree. Do not
let the visual coherence of the grid launder into raised certainty.

## The increment key (constant per food across all five outcomes)

Each cell is the pooled **linear** dose-response RR per the food's serving increment, with 95%
CI. Increments (identical across the series): whole grains 30 g/d, refined grains 30 g/d,
vegetables 100 g/d, fruit 100 g/d, nuts 28 g/d, legumes 50 g/d, eggs 50 g/d, dairy 200 g/d,
fish 100 g/d, red meat 100 g/d, processed meat 50 g/d, SSB 250 mL/d.
[@schwingshackl2017t2d]

Grade codes = NutriGrade meta-evidence: **H** high, **M** moderate, **L** low, **VL** very
low. A CI crossing 1.00 = not statistically significant (the estimate can still inform
direction under measurement-error attenuation). `*` = source reports significant non-linearity
(plateau/threshold — see *Shape honesty*). `ins.` = single-study or extreme-imprecision cell,
held as **insufficient evidence**, not as effect.

## The matrix (RR per increment, 95% CI, grade)

The CVD column shows **CHD** as representative; stroke and heart failure diverge from CHD and
are broken out in the next table.

| Food group (increment) | Mortality | T2D | Hypertension | CVD (CHD) | Adiposity (OW/OB) |
|---|---|---|---|---|---|
| Whole grains (30 g) | 0.92 (0.89-0.95) H* | 0.87 (0.82-0.93) H* | 0.92 (0.87-0.98) L* | 0.95 (0.92-0.98) M* | 0.93 (0.89-0.96) L |
| Refined grains (30 g) | 0.99 (0.97-1.01) L | 1.01 (0.99-1.03) M | 0.99 (0.96-1.02) VL | 1.01 (0.99-1.04) L | 1.05 (1.00-1.10) VL* |
| Vegetables (100 g) | 0.96 (0.95-0.98) L* | 0.98 (0.96-1.00) M* | 1.00 (0.98-1.01) VL | 0.97 (0.96-0.99) M | 0.98 (0.93-1.03) L |
| Fruit (100 g) | 0.94 (0.92-0.97) L* | 0.98 (0.97-1.00) M* | 0.97 (0.96-0.99) L* | 0.94 (0.90-0.97) M* | 0.93 (0.86-1.00) L |
| Nuts (28 g) | 0.76 (0.69-0.84) M* | 0.89 (0.71-1.12) L | 0.70 (0.45-1.08) L | 0.67 (0.43-1.05) M* | 0.78 (0.58-1.06) L* |
| Legumes (50 g) | 0.96 (0.90-1.01) M | 1.00 (0.92-1.09) L | 0.98 (0.95-1.01) VL | 0.96 (0.92-1.01) L* | 0.88 (0.84-0.93) L ins. |
| Eggs (50 g) | 1.15 (0.99-1.34) VL | 1.08 (0.95-1.22) M | ins. | 1.00 (0.95-1.06) L | ins. |
| Dairy (200 g) | 0.98 (0.93-1.03) M | 0.97 (0.94-0.99) M | 0.95 (0.94-0.97) L | 0.99 (0.96-1.02) M | 0.97 (0.93-1.01) L |
| Fish (100 g) | 0.93 (0.88-0.98) M | 1.09 (0.93-1.28) M | 1.07 (0.98-1.16) L* | 0.88 (0.79-0.99) M | ins. |
| Red meat (100 g) | 1.10 (1.04-1.18) M | 1.17 (1.08-1.26) H | 1.14 (1.02-1.28) L | 1.15 (1.08-1.23) M* | 1.10 (1.04-1.16) VL |
| Processed meat (50 g) | 1.23 (1.12-1.36) M* | 1.37 (1.22-1.55) H* | 1.12 (1.00-1.26) L* | 1.27 (1.09-1.49) M | 1.18 (1.02-1.36) VL ins. |
| SSB (250 mL) | 1.03 (0.91-1.18) L* | 1.21 (1.12-1.31) H* | 1.07 (1.04-1.10) L | 1.17 (1.11-1.23) M | 1.05 (1.00-1.11) VL |

Cell provenance, one tag per source (each on its own line so the slug stays intact):

- Mortality column: [@schwingshackl2017mort]
- T2D column: [@schwingshackl2017t2d]
- Hypertension column: [@schwingshackl2017htn]
- CVD column: [@bechthold2019]
- Adiposity column: [@schlesinger2019]

Cell notes: **Eggs T2D** RR is reported per 30 g (not 50 g) in the source — read as directional
only. **Eggs hypertension** rests on one study (144 cases, RR 0.25) — insufficient, not a
protective finding. **Legumes / processed meat / fish adiposity** cells rest on single studies
or extreme imprecision (processed-meat abdominal RR 8.80, CI 1.20-64.28) — `ins.` The
`0.88` legumes-adiposity point is one study. Fish adiposity is inverse only for **abdominal**
obesity (0.83, 0.71-0.97), null for overweight/obesity.

## CVD is not one outcome — the within-CVD divergence (Bechthold)

| Food group (increment) | CHD | Stroke | Heart failure |
|---|---|---|---|
| Whole grains (30 g) | 0.95 (0.92-0.98) M | 0.99 (0.95-1.03) L | 0.96 (0.95-0.97) L |
| Vegetables (100 g) | 0.97 (0.96-0.99) M | 0.92 (0.86-0.98) M | 0.96 (0.94-0.98) L |
| Fruit (100 g) | 0.94 (0.90-0.97) M | 0.90 (0.84-0.97) M | 0.98 (0.94-1.01) L |
| Nuts (28 g) | 0.67 (0.43-1.05) M | 0.99 (0.84-1.17) L | 1.09 (0.97-1.22) L |
| Eggs (50 g) | 1.00 (0.95-1.06) L | 0.99 (0.93-1.05) M | 1.16 (1.03-1.31) M |
| Dairy (200 g) | 0.99 (0.96-1.02) M | 0.98 (0.96-1.00) M | 1.08 (1.01-1.15) L |
| Fish (100 g) | 0.88 (0.79-0.99) M | 0.86 (0.75-0.99) M | 0.80 (0.67-0.95) M |
| Red meat (100 g) | 1.15 (1.08-1.23) M | 1.12 (1.06-1.17) M | 1.08 (1.02-1.14) M |
| Processed meat (50 g) | 1.27 (1.09-1.49) M | 1.17 (1.02-1.34) M | 1.12 (1.05-1.19) M |
| SSB (250 mL) | 1.17 (1.11-1.23) M | 1.07 (1.02-1.12) M | 1.08 (1.05-1.12) L |

[@bechthold2019]

Whole grains and nuts protect CHD but are **null for stroke**; eggs and dairy are null for
CHD/stroke but **positive for heart failure** (the egg->HF signal is the strongest divergence
in the series). Fish is the only food inverse across all three CVD subtypes. Reading "CVD" as a
single endpoint hides these — a stratum whose dominant risk is stroke ranks vegetables/fruit
above whole grains/nuts.

## Layer-1 across-food-group ranking (which levers move the most outcomes)

This is the Layer-1 input the series was acquired for -> [[Layer 1 - Ranking Interventions for a Stratum]]. Ranking by **direction-consistency x magnitude x certainty**, net of each cell's
grade:

**Largest, most consistent PROTECTIVE levers.** Whole grains lead — protective in every outcome
family and the only protective food carrying **two HIGH-grade** cells (mortality, T2D). Fruit is
the consistent runner-up (modest inverse across all five, mostly moderate/low grade). Nuts carry
the **largest point estimates** (mortality 0.76, CHD 0.67) but wide CIs and low grade outside
mortality — a big-but-uncertain lever. Fish is high-value but **outcome-specific** (see below).

**Largest, most consistent HARMFUL levers.** Processed meat leads — harmful in all five, the
only harmful food with a HIGH-grade cell (T2D, RR 1.37 per 50 g — the largest single effect in
the matrix). Red meat mirrors it one notch smaller (harmful all five). SSB is a strong
cardiometabolic-harm lever (T2D/CVD/adiposity/HTN) that is **null for all-cause mortality**.

**Causal-attribution caveat — the red-meat -> T2D cell is a robust ASSOCIATION, not established
causation.** The grade does less work than the word "harmful" implies, and the fabric
holds this cell OPEN in both directions (untested for causation), not as a demonstrated causal harm:

- **NutriGrade "high" grades association-robustness, not confounding-exclusion.** The source grades meta-evidence "high for processed meat, red meat, whole grains, and SSB" [@schwingshackl2017t2d] on study count, dose-response, precision and low heterogeneity, and its prospective design "effectively avoided recall bias and reduced the potential for selection bias" [@schwingshackl2017t2d]. Neither move touches lifestyle (healthy-user) confounding, which prospective sampling does not remove — so a "high" grade certifies the association is real and consistent, not that red meat causes it.
- **The coded exposure is a decontextualized quantity, so red meat may be a PATTERN marker.** The series pools red meat only as a per-100 g/day increment and reports servings, not questionnaire items (a `food frequency` search of the source returns a true corpus-zero); it carries no information on the meal package (refined-carb bun, fried sides, SSB) or the Western dietary pattern and lower health-consciousness that higher red-meat intake co-occurs with. The RR can attach to that package/pattern rather than to the meat -> the substitution/pattern G-gap below.
- **Guideline-adherence confounding is a self-fulfilling pathway the design cannot exclude.** Because guidance itself instructs the health-conscious to cut red meat, red-meat *avoidance* is collinear with the whole guideline-adherence bundle (not smoking, exercising, screening, taking prescribed medication). In a population that is heavily prediabetic/dysglycemic, avoiders may develop less T2D partly *because* they are adherent — so the guideline, not the meat, can be the operative cause. This is a sharpened form of healthy-user confounding that is especially hard to adjust away, precisely because the exposure is itself the subject of the guidance. The bundle's manufacturable magnitude is not small: adherence to a *placebo* alone carried «lower mortality (0.56, 0.43 to 0.74)» [@simpson2006adherence] — an all-cause-mortality OR the health-conscious bundle produces with zero causal input -> [[The Observational-Trial Discordance]].
- **The signal is not stratum-stable.** The red-meat association "could not be confirmed pooling two Asian studies," and the Shanghai Women's Health Study showed "an inverse association between red meat and T2D among normal weight women and an increased risk among obese women" [@schwingshackl2017t2d] — a within-population flip that tracks adiposity, not red meat per se.
- **No natural experiment either way.** No Mendelian-randomization or feeding trial isolates red-meat (or heme-iron) -> T2D in either direction. So — symmetric with coffee -> T2D, which the fabric downgrades to insufficient-for-causation on a *null* MR — red meat is LESS resolved than coffee (untested, not disconfirmed): held open, neither established-harmful nor shown-benign -> [[The Observational-Trial Discordance]].

**Weak or null levers (the ceiling-is-a-finding cases).** Refined grains are essentially null
everywhere except mild adiposity harm at high intake; legumes are null in most **linear** cells
(protective only non-linearly); vegetables are weak and **null for hypertension and adiposity**;
eggs are mostly null/insufficient. For a stratum already eating these, the marginal lever is
small by construction.

## Divergence findings — outcome-specificity is the informative signal

Uniform effects (meat harmful, whole grains protective) mostly restate what each food-group page
already holds. The **divergences** are where the matrix earns its place:

- **Fish** — protective for mortality and all three CVD subtypes, but **null for T2D** (even
  positive in American cohorts) and **null/slightly positive for hypertension**. Same food,
  opposite glycaemic/pressor signal.
- **Dairy** — protective for **T2D and hypertension** only; null for mortality/CHD/stroke and
  **positive for heart failure**. A cardiometabolic-marker lever, not a mortality lever.
- **Eggs** — null across mortality/T2D/CHD/stroke but **positive for heart failure specifically**
  (HF 1.16-1.25). The one place eggs move a hard outcome.
- **Vegetables** — protective for mortality/T2D/CVD but **null for hypertension and adiposity**,
  against DASH-era expectation; the source attributes the HTN null partly to BMI over-adjustment.
- **SSB** — strong cardiometabolic harm but **null for all-cause mortality** (the mortality CI
  is wide, 0.91-1.18 — an unmeasured, not a demonstrated-absent, effect).

## Shape honesty — where the curve has a knee or plateau

Most linear cells are **monotone over the studied range only** — do not read more-is-always-better
past the data edge. Reported non-linear features:

- **Nuts** plateau early: most of the mortality/CHD benefit is captured by **\~10-20 g/d**
  (a small handful); little added benefit above.
  [@bechthold2019]
- **Vegetables and fruit** plateau at **\~200-400 g/d** for mortality/CVD — the rising arm is at
  low intake.
  [@schwingshackl2017mort]
- **Whole grains** most benefit by \~50 g/d (T2D) to \~100 g/d (CHD).
- **SSB->T2D** is monotone increasing across the **entire** studied range — no threshold, every
  increment adds risk.
  [@schwingshackl2017t2d]
- **Refined grains->adiposity** is J-shaped, harm emerging above \~90 g/d.

The plateaus mean over-shooting a protective food merely fails to add benefit (rarely harms) —
the *every-reduction-pays* default holds for the harmful foods, whose curves show no protective
lower arm. -> [[The U-Shaped Association Artifact]]

## Cross-source check — the legume row against a dedicated legume SR+MA `[2026-08-28, Thorisdottir]`

A purpose-built legume SR+MA (Thorisdottir 2023, NNR2023 — 47 studies, 31 cohorts) reaches the **same
near-null cohort verdict** this row shows: high-vs-low CHD RR 1.00 (0.95, 1.05), stroke 0.98 (0.91, 1.05),
T2D 0.90 (0.77, 1.06), CVD 0.95 (0.86, 1.06), with «No clear dose-response association was found for
any of the outcomes».
[@thorisdottir2023legume]
**Two caveats keep this from being independent corroboration.** (i) **Different estimand** — this row's
cells are **per-50 g linear slopes**; Thorisdottir's are **high-vs-low category contrasts** across a
low-intake Nordic range (\~12 g/day mean), so the numbers agree in *direction* but are not the same
quantity. (ii) **Shared cohort base** (EPIC, ARIC, NHS/HPFS recur) and shared NNR SR team -> this is
**type-F / shared-source, NOT type-E** independence. What Thorisdottir **adds** that this cohort-only
series structurally cannot: a pooled **RCT risk-factor arm** — LDL-C -0.19 mmol/L (95% CI -0.27, -0.11)
at \~120-150 g/day, robust to excluding soynut trials — i.e. legumes move a surrogate at RCT doses while
the hard-endpoint cohort cells stay null. Full treatment ->
[[Whole Grains Refined Grains and Pulses]].

## The pattern level sits one step up — the composite-score complement



This matrix operates at the **food-group** level — one row per food, a per-serving increment. A **diet-quality
score** ([[Diet Quality Scores and Cardiovascular Risk]], Mente's PURE Healthy Diet Score) operates one level
**up**: it collapses several protective foods into a single 0-6 composite and reads that against CVD/mortality.
The two are **different quantities** (a per-50 g linear slope for one food vs an ordinal composite of six), so
they cannot contradict — but laid together they pose the level-of-analysis question this fabric already owns.

- **The composite carries a *located knee* the component rows do not.** The pattern-score curve is steeper
  below the median and reaches diminishing returns near score \~4/6; the food-group rows here are mostly weak,
  heterogeneous, and monotone-over-range, with many null cells (the legume events-null the sharpest case). A
  clean knee at the pattern level over mostly-flat component rows is the empirical shape that makes the
  whole-vs-component question *bite*.
- **Whether the composite adds signal beyond the sum of its rows is NOT adjudicated here** — it is exactly
  [[Is the Food Category Doing Any Work]]'s question. Three readings stay live and are that page's to weigh,
  not this one's: genuine whole-diet synergy; mere aggregation that averages out per-food measurement noise
  (so the composite looks cleaner without being more causal); or healthy-user confounding loading onto the
  composite (the DQS page flags this and the ordinal-composite caveat itself). This matrix contributes the
  **component-side evidence** to that adjudication — that no single row reproduces the composite's knee — and
  routes the verdict there rather than asserting one.

## Gaps (type-G)

- All cells are **observational** (prospective cohorts) with self-reported intake; dietary
  measurement error attenuates every gradient toward null, so the many `NS`/`VL` cells are weak
  evidence of *no* effect, not evidence of absence -> [[Measurement Error in Dietary Assessment]].
- No cell isolates a **substitution** (what replaces the food) — the RRs are addition-to-diet
  contrasts, so the Layer-3 replacement question (whole grains *instead of* refined) is unanswered
  here. `G (needs a substitution/network meta-analysis)`.
- No **genetic (Mendelian-randomization) or feeding-trial** evidence isolates red-meat or heme-iron
  -> T2D in either direction; the red/processed-meat T2D cells rest entirely on observational
  association, and heme iron is held in the fabric only for *cancer*, not T2D
  -> [[Red and Processed Meat and Cancer]]. A heme-iron -> T2D natural experiment (or an
  adherence-controlled design) is the named decider for whether this cell is causal.
  `G (needs a genetic/MR or feeding-trial test)`.
- The series computes no **absolute** risk — RRs need a stratum baseline to rank against a drug
  comparator. The mortality paper gives an *optimal-combined-intake* -> 56% relative mortality
  reduction figure, but no per-stratum absolute risk, so the drug-comparator sizing (Layer-1)
  cannot be completed from the series alone. `G (needs a baseline-risk source per stratum)`.

## References

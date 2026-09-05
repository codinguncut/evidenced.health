---
type: framework
question: Which modifiable exposures raise or lower dementia risk, over what part of the life course, and how much of dementia is attributable to them at the population level?
aliases: [Dementia Prevention, Modifiable Dementia Risk Factors, 14 Risk Factors for Dementia, Lancet Commission Dementia, Cognitive Decline Prevention, Life-Course Model of Dementia]
authors: [Livingston, Gill; Huntley, Jonathan; Liu, Kathy Y; Costafreda, Sergi G; Selbæk, Geir; Alladi, Suvarna; Dinu, Monica; Sofi, Francesco; Ngandu, Tiia; Kivipelto, Miia; Moll van Charante, Eric P; Richard, Edo; Coley, Nicola; Andrieu, Sandrine; Kivimaki, Mika; Nucci, Daniele; Gianfredi, Vincenza; Dibello, Vittorio; Custodero, Carlo; Panza, Francesco; Wei, Bao-Zhen; Xu, Wei; Wilker, Elissa H; Osman, Marwa; Weisskopf, Marc G; Henney, Alex E; Gillespie, Conor S; Cuthbertson, Daniel J; Smith, Megan; Watson, Pippa; Gallacher, John; Bauermeister, Sarah; Zhou, Yuhan; Wang, Jieyuan; Cao, Limin; Shi, Mengyuan; Liu, Huiyuan; Zhao, Yuhong; Xia, Yang; Peng, Yinshun; Iso-Markku, Paula; Kujala, Urho M; Knittle, Keegan; Polet, Juho; Vuoksimaa, Eero; Waller, Katja; Zhang, Jinhuan; Ou, Juan; Lu, Xingying; Wang, Tingyu; Dang, Wei; Ding, Liyao; Liu, Yongfeng; Xu, Jinping; Yan, Bin; Yu, Haibo; Peters, Ruth; Xu, Ying; Fitzgerald, Oisin; Aung, Htein Linn; Beckett, Nigel; Bulpitt, Christopher; Chalmers, John; Forette, Francoise; Gong, Jessica; Harris, Katie; Humburg, Peter; Staessen, Jan A; Thijs, Lutgarde; Tzourio, Christophe; Warwick, Jane; Woodward, Mark; Anderson, Craig S]
sources: [Livingston - Dementia Prevention 2024, Peters - Blood Pressure Lowering Dementia 2022, Garcia-Casares - Mediterranean Diet Alzheimer 2021, Dinu - Mediterranean Diet Umbrella Review 2018, Ngandu - FINGER Multidomain Cognitive Decline 2015, Moll van Charante - preDIVA Multidomain Dementia Prevention 2016, Coley - Multidomain Dementia MAPT preDIVA Pooled 2025, Kivimaki - Cognitive Stimulation Work Dementia 2021, Nucci - Mediterranean Diet Dementia, Dibello - Periodontal Disease Cognitive Dementia Meta-Analysis 2024, Wei - Omega-3 Dementia Cognitive Decline Cohort Review 2023, Wilker - Ambient Air Pollution Dementia Meta-Analysis 2023, Henney - Ultra-Processed Food Dementia 2023, Smith - Ultra-Processed Food Cognitive Outcomes 2025, Zhou - Fruit Vegetable Cognitive Disorders Older Adults 2022, Peng - Dietary Flavonoids Cognitive Function 2025, Iso-Markku - Physical Activity Dementia 2022, Zhang - Sleep Disorders Cognitive Decline Dementia 2025, Kuate Defo - Diabetes Medications Dementia Umbrella 2023, Mendes - Single- and Multidomain Lifestyle Cognitive Decline 2025]
cluster: dementia
nucleus: true
confidence: medium
created: 2026-08-05
updated: 2026-09-05
self_critiqued: 2026-09-04
relationships:
  related_to:
    - Multidomain Lifestyle Intervention and Cognitive Decline
    - Shared Modifiable Levers Across Age-Related Diseases
    - Parkinsons Disease Modifiable Risk Factors
    - Layer 1 - Ranking Interventions for a Stratum
    - Hearing Loss and Dementia
    - Cognitive Stimulation at Work and Dementia
    - LDL ApoB and Cumulative Exposure
    - Smoking and Mortality
    - Blood Pressure Lowering and Cardiovascular Events
    - Physical Activity Dose and Mortality
    - The Physical Activity Paradox
    - Alcohol and Mortality and Vascular Disease
    - Sleep Duration and Mortality
    - The U-Shaped Association Artifact
    - Big Rocks (Elderly)
    - Mediterranean Diet and Cardiovascular Events
    - Measurement Error in Dietary Assessment
    - Periodontitis and Systemic Health
    - Fish and Seafood Consumption
    - Deficiency Repletion vs Enhancement
    - Vitamin and Mineral Supplements for Disease Prevention
    - Baseline Risk and the Relative-Absolute Split
    - Ultra-Processed Food and Health Outcomes
    - Is the Food Category Doing Any Work
    - Fruit and Vegetable Intake and Health
    - Flavonoid Intake and Cognitive Function
    - Soy Isoflavones and Cognitive Function
    - Sleep and Cognitive Decline
---

**Nucleus of the `dementia` cluster** — the domain-opener. Dementia is a top healthspan axis (57 million
people worldwide in 2019, projected 153 million by 2050 [@livingston2024]); this page holds the canonical map of *which levers exist* and *when in life they act*. The
2024 Lancet Commission is a consensus triangulation (systematic reviews + new meta-analyses + Mendelian
randomization where possible), not a single trial — grade its claims accordingly.

## The headline, and how to read it honestly

The Commission estimates that **the 14 modifiable risk factors account for a population attributable
fraction (PAF) of 45.3%** — «nearly half of all cases of dementia being associated with 14 potentially
modifiable risk factors». [@livingston2024]

**This is a modelled, population-attributable figure — the same discipline the wiki applies to GBD
[inferred from @livingston2024].** Three caveats bind how it may be used:

- **PAF is not a per-person effect.** It is what *theoretically* would not occur if the whole
  population's exposure were eliminated — «this risk modification affects the population but does not
  guarantee any individual will avoid dementia». [@livingston2024] Removing a factor does not remove that share of *one* person's risk.
- **The relative risks are borrowed from observational data and assumed causal.** The Commission «assumed
  risk factors cause dementia»; for several factors (hearing, depression, social isolation, obesity in
  late life) reverse causation over the long prodrome is explicitly a live alternative
  -> [[The U-Shaped Association Artifact]]. [@livingston2024]
- **The factors overlap, so the individual PAFs do NOT sum to 45.3%** — they are weighted down for
  communality. A principal-components analysis of the 14 factors «found five principal components,
  explaining 54 % of the total variance», so each factor's raw PAF is discounted for its shared variance
  with the others. [@livingston2024] The per-factor *weighted*
  PAFs live in the report's Table 1 — a figure NOT recoverable from the held accepted-manuscript text, so
  this is a named gap pending the *published-version* PDF (the source slug itself is already held; an token here would false-fire `reconcile awaits-arrived`, which keys on the slug, not
  the missing table — re-key only if a distinct published-version row is ever registered).

<div class="recent-update" data-last-updated="2026-09-04">

## The 14 factors, their direction, and their life-course window

The two 2024 additions to the 2020 list of 12 are **high LDL-C** and **uncorrected vision impairment**
(«adding vision impairment and high cholesterol as potentially modifiable risk factors»). The 2020 list
of 12 carried a PAF of 40%. [@livingston2024] Relative risks
below are the Commission's cited/new-meta-analysis figures; each is for dementia incidence.

| Factor | Effect (Commission's cited RR/HR) | Life-course window |
|---|---|---|
| Less education | educational attainment protective; adulthood cognitive stimulation at work HR 0.77 (de-secondhanded below) -> [[Cognitive Stimulation at Work and Dementia]] | early + mid life |
| Hearing loss | HR 1.35 (1.26-1.45), 50-cohort MA (Yu 2024, first-hand; de-secondhands the Commission's borrowed 1.37, 1.00-1.87). But the *treatment* lever is weaker: the ACHIEVE RCT was **null overall** on 3-yr cognition (0.002 SD, p=0.96), positive only in a pre-specified high-baseline-risk subgroup — the large exposure PAF does not certify that fitting aids prevents dementia -> [[Hearing Loss and Dementia]] | midlife |
| High LDL-C **(new 2024)** | +8% per 1 mmol/L (1.08, 1.03-1.14); >3 mmol/L HR 1.33 | midlife |
| Depression | RR 2.25 (1.69-2.98), new MA (partly reverse-causal) | midlife |
| Traumatic brain injury | RR 1.66 (1.42-1.93) | any age |
| Physical inactivity | activity RR 0.80 (0.77-0.84) protective (Iso-Markku 2022, first-hand; de-secondhanded below) -> [[Physical Activity Dose and Mortality]] | midlife+ |
| Diabetes | HR 1.24 per 5-yr *earlier* onset; midlife-specific | midlife |
| Smoking | midlife RR 1.30 (1.18-1.45); no excess in former smokers | midlife |
| Hypertension | untreated HR 1.42 (1.15-1.76) observational; **treatment lever** RCT OR 0.87 (0.75-0.99) (Peters 2022 IPD, first-hand; interventional de-secondhanding below) -> [[Blood Pressure Lowering and Cardiovascular Events]] | midlife |
| Obesity | midlife RR 1.31 (1.02-1.68) | midlife |
| Excessive alcohol | >21 units/wk HR 1.22 (1.01-1.48); first-hand dementia dose-response (J-curve, protective arm unadjudicated, harm arm real) now held -> [[Alcohol and Mortality and Vascular Disease]] | midlife |
| Social isolation | RR 1.57 (1.32-1.85) / 1.18 (1.08-1.30) | late life |
| Air pollution | PM2.5 HR 1.03 (1.02-1.05) per 1 ug/m3 (de-secondhanded below) | late life (lifelong) |
| Uncorrected vision **(new 2024)** | RR 1.47 (1.36-1.60) | late life |

[@livingston2024]

</div>

## The cognitive-stimulation number, de-secondhanded (F-refinement, 2026-08-14)

The *less education / cognitive stimulation at work* cell above carries the Commission's *borrowed*
cognitive-reserve figure. Its **primary source is now held first-hand**: Kivimaki 2021, an IPD multicohort
study (7 IPD-Work cohorts, 107,896 dementia-free adults, 1143 cases, mean follow-up 16.7 y). Gill
Livingston co-authored that paper, so this is the Commission's own upstream evidence, not an independent
second witness — a de-secondhanding (type-F), **not** an `[E-independent]` corroboration.

- **The effect, first-hand:** high vs low cognitive stimulation at work, «age and sex adjusted hazard
  ratio 0.77, 95% confidence interval 0.65 to 0.92, heterogeneity in cohort specific estimates I2=0%»
  [@kivimaki2021cognitive]; fully adjusted 0.82
  (0.68-0.98). The secondhand 0.79 the Commission propagates is this study's *reverse-causation-lag*
  estimate (dementia arising >=10 y after exposure assessment, HR 0.79, 0.66-0.95) — a robustness figure,
  not the headline.
- **What the first-hand source adds that the secondhand cell cannot show:** (i) the association **survives
  a 10-year lag exclusion**, so it is not merely prodromal dementia lowering engagement
  -> [[The U-Shaped Association Artifact]]; (ii) it is an **adulthood/mid-life** lever, distinct from the
  early-life education factor it is bundled with here; and (iii) residual confounding by **childhood IQ**
  is the unremovable alternative the observational design cannot exclude. Full estimate, mechanism arm,
  and Layer-1 ranking (RR \~1.3, *below* the cardiometabolic big rocks and below education itself) on
  [[Cognitive Stimulation at Work and Dementia]].
[inferred from @kivimaki2021cognitive; @livingston2024]

## The air-pollution number, de-secondhanded — and it is weaker first-hand (F-refinement, 2026-08-27)

The *air pollution* cell above carries the Commission's *borrowed* PM2.5 figure — HR 1.03 (1.02-1.05)
per 1 ug/m3, a confidence interval that **excludes 1**, reading as an established risk factor. Its
**primary evidence is now held first-hand**: Wilker 2023, a gold BMJ SR+MA («2080 records identified
51 studies for inclusion»; 14 meta-analysable for PM2.5). Elissa Wilker (Harvard Chan) does not
overlap the Commission author list, but Wilker cites Livingston 2020 and both rest on the same
underlying observational cohort literature — so this is a **de-secondhanding (type-F), not an
`[E-independent]`** second witness.

- **The effect, first-hand, is BORDERLINE — the overall CI crosses 1.** «The overall hazard ratio
  per 2 μg/ m3 PM2.5 was 1.04 (95% confidence interval 0.99 to 1.09). The hazard ratio among seven
  studies that used active case ascertainment was 1.42 (1.00 to 2.02) and among seven studies that
  used passive case ascertainment was 1.03 (0.98 to 1.07).»
  [@wilker2023] Rescaled to the
  Commission's per-1-ug increment (multiplicative, justified by the linearity finding below), Wilker's
  pooled HR is **\~1.02 (0.99-1.04) per 1 ug/m3** [inferred from @wilker2023]
  — the *same* point estimate as the borrowed 1.03, but with a confidence interval that **crosses the
  null**. The secondhand cell reads significant; the comprehensive first-hand pool does not. This is
  the beyond-summary move: the primary evidence is weaker than the propagated figure implies.
- **The significant signal is an ascertainment-METHOD moderator, NOT a person-level stratum.** The
  only sub-pool clearing significance is active case ascertainment (systematically screening every
  participant) at 1.42 (1.00-2.02); passive ascertainment (registry/records) is null at 1.03
  (0.98-1.07). This moderates *how dementia was detected*, not *who is exposed*, so it does **not**
  license a route-(b) effect-modification claim -> [[Baseline Risk and the Relative-Absolute Split]].
  Wilker's own «best estimate» leans on it — «the best estimate for the effect of a 2 μg/m3 higher
  concentration of PM2.5 is a hazard ratio of 1.42 (95% confidence interval 1.00 to 2.02) based on the
  studies that used active case ascertainment. However, given concerns of time trend bias and causally
  relevant time windows, a more conservative estimate is 1.17 (0.96 to 1.43) after removing four
  studies for these reasons.» [@wilker2023]
  Both the headline 1.04 and the conservative 1.17 include 1, and Wilker concedes «the confidence
  limits are likely too wide given the number and characteristics of the included studies».
- **Risk of bias runs toward the null, so borderline may UNDERstate.** «Most studies were at high risk
  of bias, although in many cases bias was towards the null»
  [@wilker2023] (ROBINS-E on
  observational cohort pools). So the null-crossing CI is *not* a no-effect verdict — a true small
  positive effect is consistent with the data, and the direction of bias means the estimate is a floor
  more than a point. Read as insufficient-evidence-tilting-positive, not "no effect."
- **Dose-response is essentially LINEAR over the studied range — no knee to exploit.** «One other study
  that explored a possible non-linear dose response association found essentially a linear relation
  with exposure from 3 μg/m3 to 16 μg/ m3»; two studies suggested a levelling-off «but the
  concentration at which the levelling started was often where data were more sparse» (\~8.5 and 35
  ug/m3) [@wilker2023]. This is the
  dose-response prior working: an apparent plateau sitting at the sparse edge of the data is
  edge-of-evidence, not a curve feature -> every reduction pays. Sub-standard exposures still carry the
  association: below the EPA 12 ug/m3 annual standard (n=8) the HR was «also 1.04 (0.97 to 1.11)».
- **Other pollutants: NO2 and NOx directional, O3 null.** «Evidence suggested an association with NO2
  (per 10 μg/m3 hazard ratio 1.02 (0.98 to 1.06)) and NOx (1.05 (0.98 to 1.13)), with all studies but
  one of each showing small but elevated hazard ratio»
  [@wilker2023]; ozone showed no
  association (\~1.00). So the airborne-pollutant signal is PM2.5-and-nitrogen-oxide-led, each
  individually borderline.

**Parameter table — the borrowed 1.03 vs the first-hand pool
[inferred from @wilker2023; @livingston2024].**
The Commission's cell and Wilker's pool are not the same quantity — different increment, different
pooled set, different ascertainment mix — so the comparison bounds and re-grades the cell, it is
**not a tension**.

| Parameter | Commission (borrowed) | Wilker 2023 (first-hand) | Same quantity? |
|---|---|---|---|
| Increment | per 1 ug/m3 PM2.5 | per 2 ug/m3 PM2.5 | **NO** |
| PM2.5 estimate | HR 1.03 (1.02-1.05), excludes 1 | HR 1.04 (0.99-1.09), crosses 1 | NO — per-1 rescale \~1.02 (0.99-1.04) |
| Statistical significance | significant | borderline / null overall | NO |
| Pooled set | borrowed prior estimate | 14 studies, 2023 systematic pool | NO |
| Ascertainment | unspecified | active 1.42 (1.00-2.02) vs passive 1.03 (0.98-1.07) | NO |

- **Layer-1: a weakly-modifiable STRUCTURAL/POLICY lever — the de-secondhanding does NOT reorder the
  personal rocks [inferred from @wilker2023].** The
  effect is «smaller than those reported for other risk factors for dementia (eg, education and
  smoking)» [@wilker2023], and
  ambient air pollution is only weakly modifiable by an individual — «To some degree, this reduction
  can be done on a personal level and clinicians should communicate the risks of air pollutant
  exposures to their patients. More importantly, steps can be taken at a broader public policy level»
  [@wilker2023]. A person's own
  margin is thin (residence, filtration, commute); the lever lives mainly in the population/policy tier
  -> [[Layer 1 - Ranking Interventions for a Stratum]]. So Wilker **quantifies and weakens** the
  Commission's air-pollution PAF slice; it neither overturns the life-course model nor displaces the
  cardiometabolic big rocks.

<div class="recent-update" data-last-updated="2026-09-04">

## The physical-activity number, de-secondhanded (F-refinement, 2026-09-04)

The *physical inactivity* cell above carries the Commission's *borrowed* activity figure — RR 0.80
(0.77-0.84). Its **primary source is now held first-hand**: Iso-Markku 2022, a gold SR+MA + quality
assessment of 58 prospective cohorts. The borrowed cell **is** this study's exact all-cause estimate — RR
0.80 (0.77-0.84, n=257,983) — and Iso-Markku is the Commission's own ref 165, so this is a
**de-secondhanding (type-F)**, **not** an `[E-independent]` second witness.

- **The effect, first-hand, with the subtype breakdown the single cell cannot show:** «PA was associated
  with a decreased risk of all-­ cause dementia (pooled relative risk 0.80, 95% CI 0.77 to 0.84, n=257 983),
  Alzheimer's disease (0.86, 95% CI 0.80 to 0.93, n=128 261) and vascular dementia (0.79, 95% CI 0.66 to
  0.95, n=33 870), even in longer follow-­ ups (>=20 years) for all-­cause dementia and Alzheimer's disease.
  Neither baseline age, follow-­up length nor study quality significantly moderated the associations.»
  [@isomarkku2022] The protection is strongest for
  vascular dementia and weakest (but still significant) for AD — consistent with the shared cardiovascular
  route this page already counts.
- **It SURVIVES the reverse-causation / long-follow-up check — the payload the *assumed-causal* cell hides
  -> [[The U-Shaped Association Artifact]].** The whole study exists to answer the objection that
  «the association between PA and dementia appears absent when PA is measured before the age of 65 ... or in
  follow-­ups longer than 10 years» [@isomarkku2022]
  (prodromal dementia lowering activity). Within the 16 studies of >=20 years' follow-up the estimate holds:
  RR 0.79 (0.71-0.87), mean baseline age 50.5 y, mean follow-up 27.6 y; AD holds too at RR 0.76 (0.64-0.90,
  7 studies). Iso-Markku's verdict: «we did not find evidence to suggest that reverse causation or regression
  dilution bias88 affected the observed associations between PA and dementias.»
  [@isomarkku2022] This is the *strong-adjudication*
  direction the U-Shaped concept asks for — a protective association that passes a long-follow-up exclusion,
  not merely covariate adjustment.
- **Honesty guard — the CLEANEST-design subset loses significance.** The point estimate is stable across
  quality strata, but the three high-quality studies with a young (30-55) baseline AND >20-year follow-up
  gave **RR 0.79 (0.62-1.01) — non-significant** [@isomarkku2022],
  and the three high-quality AD studies gave 0.71 (0.42-1.22), also non-significant. So the reverse-causation
  survival is *directional and consistent*, but the very cleanest cut is under-powered, not independently
  significant. Read the 0.80 as a robust-but-observational association, not a demonstrated causal slope.
- **The residual confound the design CANNOT remove — baseline cognitive reserve.** Iso-Markku is explicit
  that surviving reverse causation is not surviving *all* confounding: «Physically active individuals may
  have higher cognitive reserve to start with ... higher cogni- tive ability or other unmeasured confounding
  factors, and not leisure-­time PA, may drive the association with a decreased inci- dence of dementia.»
  [@isomarkku2022] Baseline cognitive ability is barely
  measured or adjusted for in the pool, so a cognitive-reserve confound stays live — the unremovable
  alternative behind the still-observational grade.
- **ApoE ε4 does NOT modify the effect (route-b NULL) — reinforces *modifiable regardless of genotype*.**
  «Most studies that investigated ApoE ε4 interactions found no significant interactions (9 of 11 studies)»
  [@isomarkku2022]; carriers RR 0.81 (0.67-0.98) vs
  non-carriers 0.72 (0.56-0.92), and «Our ApoE ε4 interaction analyses suggest no such modification for
  all-­cause dementia, Alzheimer's disease or vascular dementia.»
  [@isomarkku2022] So the activity lever is not one to
  withhold or intensify by genotype — the same route-(b)-fails reading the Commission states generally, now
  first-hand for PA specifically. (The between-group heterogeneity test was «invalid because of large
  heterogeneity», so this is *absence of demonstrated modification*, not a proven identity.)
- **Work-related PA runs the OPPOSITE way -> [[The Physical Activity Paradox]].** «The two studies examining
  the association of work-­related PA and all-­cause dementia showed an opposite trend than other PA (RR
  1.25, 95% CI 0.98 to 1.59)» [@isomarkku2022] —
  directional only (2 studies, CI crosses 1). It corroborates the domain-flip on a new (dementia) outcome,
  though Iso-Markku reads it partly as the cognitive-reserve/SES confound above.
- **Publication bias detected.** «Funnel plots showed possible publication bias for all-­cause dementia and
  Alzheimer's disease» [@isomarkku2022], for AD suggesting
  under-reporting of null results — so the pooled protection may be modestly inflated.

**Parameter table — the borrowed cell vs the first-hand source
[inferred from @isomarkku2022; @livingston2024].**
Unlike the air-pollution de-secondhanding, the headline number is the SAME quantity (the cell IS this
source), so this is an *identity plus enrichment*, never a tension — the value is the facets the single
cell cannot carry.

| Parameter | Commission cell (borrowed) | Iso-Markku 2022 (first-hand) | Same quantity? |
|---|---|---|---|
| All-cause dementia RR | 0.80 (0.77-0.84) | 0.80 (0.77-0.84), n=257,983 | **YES** — the cell is this figure |
| Subtype resolution | none (one cell) | AD 0.86 (0.80-0.93); vascular 0.79 (0.66-0.95) | new — cell cannot show |
| >=20-year follow-up | not shown (assumed causal) | all-cause 0.79 (0.71-0.87); AD 0.76 (0.64-0.90) | new — the reverse-causation check |
| Cleanest subset | not shown | 3 high-quality young-baseline >20y: 0.79 (0.62-1.01), **NS** | new — under-powered |
| ApoE ε4 modification | *modifiable regardless of genotype* (general) | no interaction (9/11), «no such modification» | new — PA-specific route-b null |

- **Layer-1: this firms an existing big rock, it does not add a factor
  [inferred from @isomarkku2022].** Physical inactivity is already one of the
  14 and already a cardiometabolic big rock; the de-secondhanding adds the reverse-causation robustness and
  the subtype/ApoE detail, so the *dementia* benefit is a **second patient-important outcome** on the same
  non-substitutable, pleiotropic activity lever (no drug replicates it) — strengthening its Layer-1 rank
  rather than competing -> [[Layer 1 - Ranking Interventions for a Stratum]], [[Physical Activity Dose and Mortality]].
  The lever is *be active* broadly, not a modality (as the section below states).
- **G-gap — the unheld counter-source.** Iso-Markku's contribution is a direct rebuttal of an
  individual-participant meta-analysis (Kivimäki 2019, BMJ, n approx 404,840) that reportedly found the
  PA-dementia association absent beyond 10-year follow-up. That IPD is **not held** (and is a *different*
  Kivimäki paper from [[Cognitive Stimulation at Work and Dementia]]); acquiring it would join the issue
  ->.

</div>

<div class="recent-update" data-last-updated="2026-09-04">

## The hypertension number, de-secondhanded — the INTERVENTIONAL effect (F-refinement, 2026-09-04)

The *hypertension* cell above carries the Commission's **observational risk-factor** figure — untreated
hypertension HR 1.42. That is the wrong quantity for a decision: it says *having* high BP raises risk, not
that *lowering* it helps. Peters 2022 supplies the missing INTERVENTIONAL arm first-hand — an IPD
meta-analysis of **five seminal double-blind placebo-controlled** antihypertensive RCTs (HYVET, SYST-EUR,
PROGRESS, ADVANCE, SHEP; «28 008 individuals recruited from 20 countries», 861 incident-dementia cases)
[@peters2022bp]. This is the **strongest**
de-secondhanding on the page: the others replace a borrowed *observational* cell with a better
*observational* source; this replaces the observational risk factor with a **randomized treatment effect**
(«Class I evidence» [@peters2022bp]).

- **The effect, first-hand:** «Multilevel logistic regression reported an adjusted odds ratio 0.87 (95%
  confidence interval: 0.75, 0.99) in favour of antihypertensive treatment reducing risk of incident
  dementia with a mean BP lowering of 10/4 mmHg.» [@peters2022bp] A \~13% relative reduction in dementia odds from a sustained \~10/4 mmHg BP fall in older
  hypertensives (mean age 69.1).
- **In ABSOLUTE terms — a small per-person gain.** «Incident dementia occurred in 403 (2.9%) and 458
  (3.3%) of those in active and placebo groups» among those with >=2 years' follow-up
  [@peters2022bp] — an absolute risk difference of
  **\~0.4 percentage points over median 4.3 years**, i.e. **NNT \~250 over \~4.3 years**. [inferred from @peters2022bp] The absolute effect is small and CONSERVATIVE: the trials
  «stopped early upon achieving the es-timated primary cardiovascular endpoint»
  [@peters2022bp], and dementia accrues slower than
  the CV events that stopped them, so follow-up under-captures dementia and the true effect is plausibly
  larger. This is also the LAST such evidence — «it is no longer ethical to recruit to a trial comparing
  antihypertensive treatment to a placebo group» [@peters2022bp].
- **No effect-modification -> route-(a), treat on baseline risk.** «There were no interactions by age,
  baseline BP, or history of stroke» [@peters2022bp],
  so the *relative* effect is uniform and stratification runs through baseline risk (absolute benefit), not
  effect-modification -> [[Baseline Risk and the Relative-Absolute Split]]. Consistent with preDIVA (the
  lever pays where BP is genuinely untreated) and with the treat-on-absolute-risk rule on
  [[Blood Pressure Lowering and Cardiovascular Events]].
- **The observational U-shape does NOT survive randomization -> [[The U-Shaped Association Artifact]].**
  The abstract frames the problem: «Observational studies indicate U-shaped associations of blood pressure
  (BP) and incident dementia in older age, but rando-mized controlled trials of BP-lowering treatment show mixed
  results on this outcome in hypertensive patients» [@peters2022bp] — the apparent harm at *low* BP in old age. Under randomization the U vanishes: «There was no
  evidence of a U-shaped re-lation of the effect at any age, nor any increase in risk of dementia with
  treatment in the oldest age» [@peters2022bp], and
  the dose-response is monotone — «a linear relationship between lower risk of dementia and lower BP, down
  to at least 100 mmHg systolic and 70 mmHg diastolic» [@peters2022bp]. Studied-range caveat: 100/70 is the observed floor, not evidence benefit
  continues below it.
- **\~Half the effect runs through BP itself (mediation).** «attributing 53% (95% CI: 27%, 76%) of the
  difference in dementia seen between the treatment and control groups to the effect of on systolic BP
  rather than any other aspects of trial participation or pleotropic antihypertensive drug effects»
  [@peters2022bp]; controlled indirect (BP-mediated)
  risk difference −0.218% (−0.311%, −0.109%). So the BP channel is real but not exclusive — some benefit is
  drug/other.
- **Outcome-specific — dementia diagnosis yes, cognitive-decline no.** «In comparison to the SPRINT-MIND
  trial, we found no effect of treatment on cognitive decline» [@peters2022bp] (attributed partly to MMSE insensitivity). The effect is on the
  *dementia-diagnosis* endpoint, not the continuous MMSE decline endpoint — an honest outcome-specificity
  caveat.

**Parameter table — the observational cell vs the interventional source
[inferred from @peters2022bp; @livingston2024].**
The headline numbers are **NOT the same quantity** — an observational risk-factor association (having
untreated hypertension) versus a randomized treatment effect (lowering BP) — so this is a genuine
design-upgrade de-secondhanding, not an identity-plus-enrichment.

| Parameter | Commission cell (observational) | Peters 2022 (interventional, first-hand) | Same quantity? |
|---|---|---|---|
| Estimate | untreated HR 1.42 (1.15-1.76) | treatment OR 0.87 (0.75-0.99) | **NO** — risk-factor RR vs RCT treatment effect |
| Design | observational cohorts | IPD MA of 5 double-blind placebo RCTs («Class I») | NO — the design upgrade is the point |
| What it licenses | *high BP is a risk marker* | *lowering BP reduces dementia* (a decision) | NO — marker vs lever |
| Dose-response | (implied U-shape in old age) | linear to 100/70, no U at any age | new — the interventional refutation |
| Absolute effect | none given | ARD \~0.4pp / NNT \~250 over 4.3y (conservative) | new — cell cannot show |
| Effect-modification | not resolved | none by age / baseline BP / stroke history | new — route-(a) |

- **Layer-1: this firms an existing big rock AND sizes the drug-vs-lifestyle rock
  [inferred from @peters2022bp].** Hypertension is already one of the 14 and
  a cardiometabolic big rock; the interventional evidence converts the *dementia* benefit from an assumed
  PAF into a demonstrated randomized effect, adding a **second patient-important outcome** to the same BP
  lever already carried for CV events -> [[Blood Pressure Lowering and Cardiovascular Events]]. Because a
  mature, low-harm antihypertensive class *has* the RCT dementia evidence while lifestyle BP-lowering does
  not, the drug is a genuine Layer-1 comparator here (the substitution principle), though the two are
  additive on the shared BP channel rather than exclusive
  -> [[Layer 1 - Ranking Interventions for a Stratum]].
- **NOT `[E-independent]` of the CV-events evidence.** The five trials sit inside BPLTTC's 48-trial base
  and the author lists overlap (Chalmers, Woodward, Anderson — George Institute), so the shared RCT
  substrate defeats independence on the BP-lowering *mechanism*. What is new is the OUTCOME (dementia), a
  new-endpoint extension of the same trials, not a second independent witness. [inferred from @peters2022bp; @bplttc2021]

</div>

## What the framework changes about what to do

- **Most levers are shared with the cardiometabolic big rocks.** Hypertension, diabetes, obesity, LDL,
  smoking, physical inactivity and excessive alcohol are already the vault's hard-CV levers — so pulling
  them buys a *second* patient-important outcome (cognition) on top of CV events, strengthening their
  Layer-1 ranking rather than competing with it -> [[Layer 1 - Ranking Interventions for a Stratum]],
  [[Big Rocks (Elderly)]]. The dementia-specific additions are hearing, vision, education/cognitive
  activity, depression, TBI protection, social contact and air pollution.
- **The activity lever is *be active*, not a specific modality.** The RR 0.80 attaches to physical
  activity broadly; claims that a particular *type* (mind-body exercise — Tai Chi, yoga) does extra
  cognitive work over generic activity are not established — the apparent advantage is a cross-review
  comparator artifact -> [[Mind-Body Exercise and Cognition]]. Rank the rock as *being active*, not as a
  modality choice.
- **Timing: earlier and longer.** «it is never too early or too late to reduce» dementia risk; the
  operative rule is «decrease risk factor levels early (the earlier, the better) and keep them low
  throughout life (the longer, the better)». [@livingston2024]
  Duration of exposure matters (mid-life diabetes and hypertension carry the risk; the same conditions
  arising in late life often do not, partly a shorter-exposure / reverse-causation artifact).
- **Risk is modifiable regardless of APOE genotype** — «Multicomponent interventions ... potentially
  benefit individuals with either high or low genetic dementia risk». [@livingston2024] Genetic risk is not a reason to withhold the modifiable levers.
- **Compression of morbidity is a trajectory finding, not only a length one.** Healthier lives not only
  lower dementia risk but push its onset back *further than* life expectancy extends, compressing the
  years lived with dementia -> the shape-of-decline outcome the telos centres.

## The diet lever — quantified, observational, and probably NOT additive to the cardiometabolic rocks

**Diet is not one of the Commission's headline 14 factors as a standalone** — it acts *through* its
components (hypertension, diabetes, obesity, LDL, activity), which are counted separately. A specific
Mediterranean-diet -> AD/MCI quantification lets us size the lever and, more importantly, see why adding it
on top of those factors would double-count.

- **The association (Garcia-Casares 2021, dose-response MA, 11 studies / 12,458 participants).** Per
  one-point rise on the 0-9 MD adherence score: **AD RR 0.89 (0.84-0.93)** («an 11% reduced risk of
  developing AD»), **MCI RR 0.91 (0.85-0.97)**, composite 0.89 (0.86-0.92). Restricting to the
  lower-bias cohort designs attenuates it slightly to **RR 0.91 (0.88-0.94)** with no heterogeneity.
  [@garciacasares2021]
- **Association, NOT established causation — the confound is the story.** Every pooled study is
  observational and most are cross-sectional; the authors state this «limit[s] to infer causality»
  [@garciacasares2021]. Two biases bind hard here:
  (i) **healthy-user** — «Adherence to MD is included in a lifestyle pattern inﬂuenced by sociocultural,
  educational, family and economic factors» [@garciacasares2021], several of which (less education, inactivity, depression) are themselves in the 14; and
  (ii) **reverse causation** over the long prodrome — «cognitive impairment patients could obtain MDs that
  do not accurately quantify their adherence to MD in the past» [@garciacasares2021]. Dietary self-report also carries large measurement error
  -> [[Measurement Error in Dietary Assessment]]. So this is a `low`-to-`moderate`-certainty association;
  do not read the RR as «MedDiet prevents Alzheimer».
- **Mediation / double-counting flag [inferred from @livingston2024; @garciacasares2021].** The source frames the effect as running «directly (by its
  neuroprotective effects) as well as indirectly (being protective factors of cardiovascular and metabolic
  diseases, which are themselves risk factors for AD)» [@garciacasares2021]. Since the Commission already counts hypertension, diabetes, obesity, LDL and
  inactivity, a MedDiet dementia benefit is likely **substantially mediated by those already-counted
  levers, not additional to them** — so the diet lever is largely a *route to pull the cardiometabolic
  rocks*, not a 15th independent PAF slice to add on top.
- **The RCT leg is separate and weaker.** No RCT met this MA's inclusion; the randomized diet-dementia
  evidence lives in the multicomponent FINGER family, which shows only a **small** cognitive-composite
  benefit and a null on dementia *incidence* (see Scope guard). A cohort association of this size has not
  been reproduced as a randomized incidence effect.
- **Umbrella credibility grade + the design discordance (Dinu 2018, F-refinement).** Dinu's umbrella
  grades the Med-diet -> neurodegenerative-disease association *Convincing* (Sofi RR 0.87), Alzheimer's
  *Convincing* (Wu RR 0.60) — «convincing evidence in favour of a positive relationship» — which raises
  the *certainty language* on the cohort signal above. But it also bounds it two ways that reinforce the
  confound story: (i) «the meta-analysis of cross-sectional studies provided no evidence» — the signal is
  cohort-only; and (ii) **dementia is internally discordant** — Cao 2015 grades it Convincing (RR 0.69)
  while Wu 2017 grades the same outcome *No evidence* (RR 1.07). So "convincing" here is design- and
  MA-selection-dependent, consistent with a `moderate`-at-most read.
  [@dinu2018]

### Nucci 2024 — the same association on a larger elderly pool, with new caveats (F-refinement, 2026-08-20)

A second, larger MedDiet -> dementia SR+MA (Nucci 2024; PRISMA-2020, PROSPERO CRD42023444368,
Newcastle-Ottawa RoB, 21 datasets / 65,955 participants, **elderly >=60 only**) firms the *direction* on
\~5x the pooled n but adds **no causal-identification route** — every constituent is observational (13
cohort + 6 cross-sectional + 1 both + 1 nested case-control), and it deliberately *includes* the
cross-sectional studies prior MAs excluded (its own limitation: «most of the included studies were
cross-sectional, in which causality might not be assessed by definition»)
[@nucci2024]. So it is a magnitude/robustness refinement of
the Garcia-Casares leg, **not** independent replication and **not** a causal upgrade.

- **Estimates (contrast = highest-vs-lowest adherence, NOT per-point; carry each I2).**
  - all-type dementia **OR 0.89 (0.84-0.94)**, n=65,955, I2=69.94 (moderate) — «the highest adherence to
    the Med-Diet is associated with an approximate 11% reduction in the likelihood of developing
    dementia» [@nucci2024]. The headline pools ORs
    (cross-sectional) and HRs (cohort) as one figure — «reported as OR or HR based on the study design».
  - cohort-only **HR 0.84 (0.76-0.94)**, n=55,205, **I2=89.70 (very high)** — the pooled figure averages
    over highly heterogeneous designs/populations, and on the stricter cohort-only cuts «the association
    was borderline significant» [@nucci2024].
  - Alzheimer disease **OR 0.73 (0.62-0.85)**, n=38,292, I2=63.85 — «an approxi-mately 27% lower risk of
    Alzheimer's disease»; the effect is **outcome-specific** (stronger for AD than all-dementia), while
    MCI alone is **OR 0.89 (0.79-1.01), non-significant** (3 studies) — «the association was no longer
    significant when looking at MCI alone» [@nucci2024].
- **New caveats the incumbent leg did not carry (this is what makes it F, not mere confirmation).**
  (i) **Publication bias DETECTED** — Egger intercept -1.08, p=0.013 (main); -1.88, p=0.055 (AD); after
  trim-and-fill the main estimate attenuates to OR 0.92 (0.86-0.99) but stays significant
  [@nucci2024]. (ii) Very high cohort heterogeneity (above).
  (iii) Half the pool cross-sectional, so temporality is unestablished and reverse causation stays live.
  (iv) Elderly-only, so «the effects of recently adopted dietary habits may have less influence on health
  outcomes such as dementia (which require long-term expo-sure)»
  [@nucci2024] — a shorter-exposure / reverse-causation
  frame that reinforces, not relieves, the confound story -> [[The U-Shaped Association Artifact]].

**Parameter table — the 0.89 trap [inferred from @nucci2024; @garciacasares2021].**
Garcia-Casares' figures are *per one-point* rises on the 0-9 MD score; Nucci's are *high-vs-low* category
contrasts. They are not the same quantity, so the identical 0.89 is a coincidence, not a replication.

| Parameter | Garcia-Casares (incumbent) | Nucci 2024 | Same quantity? |
|---|---|---|---|
| Contrast | per +1 point on 0-9 MD score (dose-response) | highest-vs-lowest adherence category | **NO** |
| AD estimate | RR 0.89 (0.84-0.93) per-point | OR 0.73 (0.62-0.85) high-vs-low | NO |
| all-dementia / composite | composite RR 0.89 (0.86-0.92) per-point | OR 0.89 (0.84-0.94) high-vs-low | NO — same number, different quantity |
| MCI | RR 0.91 (0.85-0.97) per-point, sig | OR 0.89 (0.79-1.01) high-vs-low, NS | NO |
| Population | mixed adult | elderly >=60 only | NO |
| Pooled n | 12,458 | 65,955 main / 38,292 AD | NO |

The critical cell: a high-vs-low contrast spanning several score-points would give a **larger** effect
than one point if the per-point slope held — so a Nucci all-dementia OR *numerically equal* to
Garcia-Casares' per-point composite implies Nucci's per-unit effect is, if anything, **shallower**, not a
confirmation. Every "Same quantity?" cell is NO, so this is a bounding/refinement, **never a tension**.

- **Shared-cohort / non-independence note (F, not `[E-independent]`).** Nucci and Garcia-Casares pool the
  **same** underlying MedDiet-dementia observational literature — the foundational AD cohorts (Scarmeas
  2006a/b and 2009, Féart 2009, Gu 2010) that any MedDiet-AD MA rests on sit in Nucci's included-studies
  list [@nucci2024]. Overlapping constituent cohorts defeat
  independence, so two MAs agreeing is **not** two witnesses; do not lift `confidence:` on the agreement.
- **Mediation corroborated, not overturned.** Nucci's own mechanism section leads with the cardiometabolic
  pathway — «Cardiovascular risk factors such as hypertension, obesity (mainly abdominal obesity),
  dyslipidaemia, and type 2 dia-betes are considered to have a significant impact on the risk of dementia»
  [@nucci2024] — plus amyloid/tau-biomarker and
  gut-microbiota routes (mechanism, directional,-grade, not outcomes). This **reinforces the
  double-counting flag above**: the MedDiet -> dementia benefit runs substantially through already-counted
  levers, so Nucci does not convert the diet lever into a 15th additive PAF slice
  [inferred from @nucci2024; @livingston2024].
- **Confidence: held `medium`.** Nucci firms direction and magnitude on \~5x the n, but adds no causal
  route, carries very high cohort heterogeneity and *detected* publication bias, a non-significant MCI
  leg, and shares constituent cohorts with the incumbent leg — so the diet association stays the weaker
  `low`-to-`moderate` leg and the Commission's consensus backing still sets the page grade. Not raised on
  *a second SR arrived*.

The same Mediterranean pattern has an RCT on *cardiovascular* hard outcomes (PREDIMED, stroke-driven, at
high baseline risk) -> [[Mediterranean Diet and Cardiovascular Events]] — which is consistent with the
mediation reading: the pattern's best-evidenced effect is on the vascular channel that feeds AD risk.

## Periodontal disease — an observational candidate lever, NOT one of the 14 (2026-08-23)

Periodontal disease (PD) is **not** one of the Commission's 14 factors, and the evidence for it is
weaker than for any factor on the headline list — it is a **candidate lever held at association
grade only**. A gold SR+MA (Dibello 2024, 46 observational studies) finds PD associated with
**incident dementia RR 1.22 (95% CI 1.10-1.36)** (8 cohorts, n=3,076,684 dementia-free at
baseline, mean follow-up 11 y) — «PD was associated to higher risk of incident dementia (RR 1.22,
95% CI 1.10 to 1.36) with sig- nificant heterogeneity across the studies (I2= 95%, p< 0.001)»
[@dibello2024periodontal], plus
cognitive impairment RR 1.25 (1.11-1.40) and cognitive decline RR 3.01 (1.52-5.95); PD-depression
is null (RR 1.07, 0.95-1.21).

**Why it stays a candidate, not a 15th factor [inferred from @dibello2024periodontal].**
The signal is entirely observational with **very high heterogeneity (I2=95%)** and the same two
biases that discount the diet lever above: (i) **reverse causation** over the long prodrome —
«poor peri- odontal health may not necessarily cause dementia, but rather results from it»
[@dibello2024periodontal]
-> [[The U-Shaped Association Artifact]]; and (ii) **shared confounders that are already-counted
factors** — the discussion names cardiovascular disease, diabetes, low education, smoking,
drinking, socioeconomic status and gender as common to both PD and dementia
[@dibello2024periodontal], so a
raw PD-dementia RR is largely mediated by the cardiometabolic/SES cluster this page already holds.
No trial has tested whether *treating* PD lowers dementia incidence. So the lever is `confidence:
low`, and an interventional periodontal-treatment -> cognitive-outcome study before
any dementia-prevention claim. The **treatable/causal-grade** arm of this exposure is glycaemic
control, not cognition -> [[Periodontitis and Systemic Health]] holds the full two-arm
decomposition.

## Omega-3 fatty acids / oily fish — an observational candidate lever, NOT one of the 14 (2026-08-23)

Omega-3 (marine EPA/DHA) is **not** one of the Commission's 14 factors, and like the diet and
periodontal levers above it is a **candidate held at association grade only**. A gold SR+MA (Wei 2023;
48 cohorts, 31 pooled, 103,651 participants) finds **dietary DHA associated with cognitive decline RR
0.82 (95% CI 0.72, 0.93; Level H)** — a 27% lower dementia / 24% lower AD risk — while dietary total
omega-3 is weaker (RR 0.91, 0.82-1.00) and dietary EPA/ALA are null
[@wei2023omega3]. Fish is the
dominant dietary DHA source, so the full decomposition (exposure-form dissociation, the supplement-RCT
contrast) lives on [[Fish and Seafood Consumption]].

**Why it stays a candidate, not a 15th factor
[inferred from @wei2023omega3].** The same three discounts
as the diet and periodontal levers apply, plus a fourth that is specific and decisive here:

- **Entirely observational and FFQ-based** — dietary measurement error binds
  -> [[Measurement Error in Dietary Assessment]], and the marine-n-3 signal travels with overall diet
  quality and SES (the observed-healthy-population problem).
- **Reverse causation over the long prodrome** — Wei mitigated only partially (sensitivity analyses
  removing year-1 cases in the ADNI arm).
- **Largely mediated by / not additive to the cardiometabolic rocks** — the plausible mechanism runs
  through vascular and inflammatory pathways this page already counts, so a raw omega-3 -> dementia RR
  is not a clean 15th additive PAF slice.
- **The isolate-supplement RCTs are NULL — the decisive discount.** Wei's own intro concedes
  *«randomized clinical trials have shown limited efﬁcacy of omega-3 fatty acid sup-plementation in
  reducing cognitive decline and probable AD»*
  [@wei2023omega3], and the held RCT
  (MAPT, 800 mg DHA + 225 mg EPA/d) was cognition-null
  -> [[Multidomain Lifestyle Intervention and Cognitive Decline]]. So the lever is `confidence: low`,
  and any *supplement* dementia-prevention claim is refuted at RCT grade; the observational dietary
  signal is a reason to prefer oily fish within a good diet, not to prescribe capsules.

<div class="recent-update" data-last-updated="2026-09-03">

## Ultra-processed food — the first FOOD-GROUP dietary lever, observational candidate, NOT one of the 14 (2026-09-03)

Until now this page held diet **only at the pattern altitude** (Mediterranean/MIND) plus the omega-3 and
periodontal candidate levers — no *food-group* lever. Ultra-processed food (UPF, NOVA4) is the first, and
like the diet-pattern and omega-3 levers it is a **candidate held at association grade only**, not a 15th
factor. A gold SR+MA (Henney 2023; PROSPERO CRD42023388363, Newcastle-Ottawa + NutriGrade, **the first**
SR+MA on NOVA-UPF -> dementia; 10 observational studies, 8 longitudinal, **867,316 participants**) finds
**high (vs low) UPF intake -> all-cause dementia RR 1.44 (95% CI 1.09-1.90), p=0.02, I2=97.0%**
[@henney2023upf]. The full outcome arm, the
category-vs-composition critique and the modest-magnitude framing live on
[[Ultra-Processed Food and Health Outcomes]]; only the dementia-lever verdict is here.

**Why it stays a candidate, not a 15th factor
[inferred from @henney2023upf].** The same discounts as the diet-pattern,
periodontal and omega-3 levers apply, and two of them are directly evidenced in the SR:

- **No robust dose-response.** Moderate UPF intake is null (RR 1.12, 0.96-1.31, p=0.13), so «we did not
  demonstrate a robust dose–response relationship between the quantity of UPFs consumed and dementia
  prevalence» [@henney2023upf]; and every dementia
  **subtype** is individually non-significant (AD 1.08 (0.79-1.48), vascular 2.05 (0.39-10.90), MCI 2.01
  (0.75-5.42), dementia-excl-MCI 1.24 (0.93-1.65)) [@henney2023upf].
  Only the pooled all-cause figure clears significance, at near-total heterogeneity (I2=97%).
- **Mediation by the already-counted cardiometabolic rocks is DIRECTLY shown, not just plausible.** The
  association was **lost** when restricted to studies adjusting for type 2 diabetes (1.47, 0.97-2.00,
  p=0.06) and total energy intake (1.26, 0.95-1.67, p=0.09), while surviving BMI/CVD/SES adjustment
  [@henney2023upf]. So a raw UPF -> dementia RR runs
  substantially through diabetes and total energy — levers this page already counts — rather than being a
  clean additive PAF slice. It also **lost significance at a 10,000-participant sample-size cutoff**
  («results lose significance when performing sensitivity analysis based on a sample size cut-off point of
  10,000 par- ticipants») [@henney2023upf] — a small-study
  contribution -> [[The U-Shaped Association Artifact]].
- **The exposure is reviewer-assigned and FFQ-measured.** Only 1 of 10 studies directly referenced NOVA;
  «nine assessed various foods that were retrospectively defined as ultra-pro- cessed by our research team
  using NOVA criteria» [@henney2023upf], with «no
  pre-determined cut-off... Moderate intake in one population may exceed high intake in another»
  [@henney2023upf], all FFQ-based
  -> [[Measurement Error in Dietary Assessment]], [[Is the Food Category Doing Any Work]].
- **Reverse causation over the long prodrome** stays live (the SR does not resolve temporality), and RCTs
  are ethically ruled out — «RCTs assessing the association between UPFs and incident cognitive
  impairment/dementia would be ethically unjustifiable» [@henney2023upf]
  — so the observational ceiling is by design.

So the lever is `confidence: low`, mediated-not-additive, and does not reorder the cardiometabolic big
rocks; it reinforces them (reducing UPF is a *route* to pulling diabetes/obesity/energy-balance, the same
mediation reading as the Mediterranean-diet lever above). The broader cognitive-outcome evidence (global
cognition, cognitive domains and decline, beyond dementia diagnosis) now lands via a second SR (Smith
2025; **narrative** synthesis of five observational studies, **preprint-provisional** — medRxiv, not yet
peer-reviewed, published version may differ) and **does not change the lever's grade**. It is a
vote-count with no pooled magnitude (3/5 studies a significant adverse main effect, all five an adverse
subgroup effect), it **shares the Li 2022 UK Biobank primary** with Henney's pool (F-refinement, not
independent corroboration), and it carries the same diet-quality / composition confounding — «the adverse
effects of UPF exposure on cognitive outcomes remained whilst controlling for adherence to a healthy diet
in two out of the three studies (Bhave et al., 2024; Li et al., 2022)»
[@smith2025upf], while diet quality modified
it in the third. One decision-relevant frame it surfaces: replacing 10% of UPF weight with equivalent
less-processed food was estimated at a **19% lower all-cause dementia risk (HR 0.81, 95% CI 0.74-0.89)**
in Li 2022 [@smith2025upf] — observational,
the shared primary, same confounding caveat. The lever stays `confidence: low`. Full broader-cognition
detail: [[Ultra-Processed Food and Health Outcomes]].

</div>

<div class="recent-update" data-last-updated="2026-09-04">

## Fruit and vegetables — a second FOOD-GROUP dietary lever, observational candidate, NOT one of the 14 (2026-09-04)

Where UPF is the *harm*-direction food-group lever, fruit-and-vegetable intake is the *protective*-direction
one — and like the diet-pattern, omega-3 and UPF levers it is a **candidate held at association grade only**,
not a 15th factor. A gold SR+MA (Zhou 2022; MOOSE, 16 observational studies — 9 cohort / 6 cross-sectional /
1 case-control, **64,348 older adults >=60, 9,879 cases**) finds **high (vs low) F&V intake -> cognitive
disorders OR 0.82 (95% CI 0.75-0.90), I2 35.3%** [@zhou2022fruit] (the paper's abstract headlines 0.79, its mixed-gender subgroup, not the
Figure-2 pool — carry 0.82). Fruit alone 0.83 (0.77-0.89), vegetables alone 0.75 (0.70-0.80). The full
outcome arm and the CVD-arm comparison live on [[Fruit and Vegetable Intake and Health]]; only the
dementia-lever verdict is here.

**Why it stays a candidate, not a 15th factor
[inferred from @zhou2022fruit].** The same discounts as the
diet-pattern, periodontal, omega-3 and UPF levers apply, and three are directly evidenced in the SR:

- **Alzheimer's is NULL, so the signal is not a direct anti-neurodegenerative effect.** Cognitive
  impairment/MCI 0.76 (0.72-0.80) and dementia 0.84 (0.78-0.91) are significant, but AD is null (0.88,
  0.76-1.01) [@zhou2022fruit] —
  consistent with the association riding the vascular/cardiometabolic route this page already counts, i.e.
  mediated-not-additive, the same reading as the Mediterranean-diet and UPF levers.
- **The design gradient is a reverse-causation tell.** The prospective **cohort** subgroup shows the
  WEAKEST effect (0.83, I2 0%); cross-sectional (0.70) and case-control (0.68) — the designs where prevalent
  cognitive disease can depress recalled/current intake — the strongest. The association shrinks as the
  design gets less vulnerable to reverse causation over the long prodrome
  -> [[The U-Shaped Association Artifact]], so the pooled 0.82 is an upper bound on any causal reading.
- **No robust dose-response, plus two measurement discounts.** The reported linear trend (P=0.03) rests on
  only 4 studies (the only ones with >=3 exposure categories) with no located knee and no stated studied
  range — weak evidence of a true curve. Exposure is FFQ-dominated (23 of 31 effect groups), so dietary
  measurement error binds
  -> [[Measurement Error in Dietary Assessment]], and the paper flags an **OR-as-RR approximation** that
  overstates the RR at these case fractions «using the OR as an approximation of the RR produces
  progressively larger errors as the outcome rate rises above 1%»
  [@zhou2022fruit]. No causal claim is
  made «no casual relationships could be established due to the observational nature of the studies»
  [@zhou2022fruit].

So the lever is `confidence: low`, mediated-not-additive, and does not reorder the cardiometabolic big
rocks; it reinforces them (more F&V is a *route* to the same vascular/metabolic levers, and the AD-null +
cohort-attenuation both point that way). No independence (E) is claimed with any other diet lever here. The
page grade stays `medium` on the Commission's consensus backing; the F&V slice is the weaker `low` leg.

</div>

<div class="recent-update" data-last-updated="2026-09-04">

## Flavonoids — the COMPONENT side of the food-group levers, observational candidate, NOT one of the 14 (2026-09-04)

Where fruit-and-vegetable intake (Zhou, above) is a whole-food-group lever, dietary flavonoids are a
**bioactive component nested inside** those foods — the component-side sibling, and like every diet lever
above a **candidate held at association grade only**, not a 15th factor. A gold SR+MA (Peng 2025; 26
observational studies, **269,574 participants**, 15 cohorts) finds **high (vs low) flavonoid intake ->
adverse cognitive events OR 0.90 (95% CI 0.83-0.98), I2 62.2%**, and better continuous cognitive test
scores (β 0.03, 0.02-0.04) [@peng2025flavonoid]. The
full subclass table, the fitted-linear dose-response and the food-vs-component critique live on
[[Flavonoid Intake and Cognitive Function]]; only the dementia-lever verdict is here.

**Why it stays a candidate, not a 15th factor — and specifically a COMPONENT of the F&V lever, not an
additional one [inferred from @peng2025flavonoid].** The same discounts as
the F&V lever apply, and three are directly evidenced in the SR:

- **Both hard diagnostic endpoints are NULL — only the soft endpoint moves.** The pooled signal is carried
  by *cognitive decline* (OR 0.88, 0.79-0.98); **dementia (OR 0.97, 0.79-1.19) and Alzheimer's (OR 0.90,
  0.69-1.17) are both null** [@peng2025flavonoid],
  echoing the AD-null in the Zhou F&V pool — consistent with a vascular/cardiometabolic route already
  counted, i.e. mediated-not-additive. The author reads the null as a power caveat, so dementia/AD is
  insufficient-evidence, not established no-effect.
- **Doubly-estimated FFQ exposure + confounding in the healthy-user direction.** Flavonoid intake is FFQ
  food reports multiplied through a food-composition database (two error sources), and meta-regression
  found «BMI and smoking status were significant confounders in the relationship between dietary
  flavonoids consumption and cognitive function, potentially overestimating the positive effects if not
  adjusted for» [@peng2025flavonoid]
  -> [[Measurement Error in Dietary Assessment]], [[Is the Food Category Doing Any Work]].
- **The flavonoid MA does not isolate the flavonoid.** The exposure is computed from the same fruit/veg/tea
  whose contribution it would need to be separated from, so it is a re-expression of the F&V signal in
  flavonoid units, not an independent handle — no biomarker, no isolated-flavonoid arm, no MR. So Peng and
  the Zhou F&V MA are **NOT independent corroboration (not type-E)**: the exposures are nested and share
  the observational substrate; they are a component/food-group **type-F** pair leaving the food-vs-component
  **G-gap** open -> [[Flavonoid Intake and Cognitive Function]].

So the lever is `confidence: low`, mediated-not-additive, and does not reorder the cardiometabolic big
rocks; it reinforces the F&V lever rather than adding to it (it is a *part* of it). No independence (E) is
claimed. The page grade stays `medium` on the Commission's consensus backing; the flavonoid slice is a
weaker `low` sub-leg of the F&V lever.

</div>

<div class="recent-update" data-last-updated="2026-09-04">

## Sleep disorders — a non-diet candidate lever, NOT one of the 14 (2026-09-04)

Sleep is the first **non-diet, non-activity** candidate lever on this page, and — like the diet levers
above — it is a **candidate held at association grade only**, not a 15th factor. A gold SR+MA (Zhang 2025;
**76 longitudinal cohort studies**, all Newcastle-Ottawa > 7, eight sleep-disorder types x four cognitive
outcomes, non-demented adults) finds every major sleep disorder associated with higher dementia / decline
risk: SRMD (restless-legs) -> VD **2.53 (1.30-4.93)**, EDS -> VD 1.85 (1.39-2.47), long sleep > 8 h -> AD
**1.66 (1.44-1.91, I2 0%)** and dementia 1.43 (1.21-1.69), OSA/SRBD -> AD 1.39 (1.16-1.68), poor sleep
quality -> dementia 1.17 (1.03-1.32), insomnia -> dementia 1.13 (1.04-1.23); circadian-rhythm disturbance
and RBD are null [@zhang2025sleep].
The full disorder x outcome map, the measurement check and the arm-level adjudication live on
[[Sleep and Cognitive Decline]]; only the dementia-lever verdict is here.

**Why it stays a candidate, not a 15th factor
[inferred from @zhang2025sleep].** The same discounts as the diet
levers apply, plus a duration-arm hazard specific to sleep:

- **Entirely observational, high heterogeneity, publication bias present.** Most pools carry I2 60-90%;
  publication bias was «found ... for multiple sleep disorders»
  [@zhang2025sleep] (trim-and-fill kept
  estimates consistent), and meta-regression left the heterogeneity only «partially accounted for».
- **The long-sleep -> dementia arm is a likely PRECLINICAL MARKER, not a cause -> [[The U-Shaped Association Artifact]].**
  The U is asymmetric and outcome-specific: short sleep (< 7 h) hits cognitive *decline* but «was not
  associated with future risk of all-cause dementia and AD», while long sleep (> 8 h) drives the
  dementia/AD arm and «is closely associated with age» (concentrated in the >= 70 y elderly), a «preclinical
  marker driven by the APOE ε4 carrier gene»
  [@zhang2025sleep]. Zhang runs only weak
  checks (baseline-only exposure, fixed follow-up; no MR, no referent-correction), so the long arm is
  **unadjudicated** — do NOT read it as *sleep less to avoid dementia*.
- **The VD-loaded disorders (SRMD, EDS, OSA) plausibly run through the cerebrovascular route already
  counted**, so their benefit is largely mediated-not-additive to the cardiometabolic rocks, not a clean
  15th PAF slice. The insomnia signal actually STRENGTHENS under objective measurement (objective insomnia
  RR 1.26, I2 26.1% vs pooled 1.09, I2 77.7%), arguing against a pure self-report artifact on that arm.
- **No interventional -> incidence evidence.** No trial here tests whether treating a sleep disorder lowers
  dementia incidence -> a CBT-I / CPAP -> cognitive-outcome study
  -> [[Sleep Aids and Insomnia Treatment]], [[Sleep Apnea Treatment and Cardiovascular Risk]].

So the lever is `confidence: low`, mediated-not-additive on the vascular arm, and screening-relevant
(route-a prognostic: a sleep disorder marks higher baseline risk) rather than a demonstrated intervention;
it does not reorder the cardiometabolic big rocks. The page grade stays `medium` on the Commission's
consensus backing; the sleep slice is the weaker `low` leg. The prior JNNP landmark it updates (Xu 2020)
is unheld ->.

</div>

## The RCT leg — FINGER bounds the observational PAF (F-refinement, 2026-08-05)

The whole map above is **observational** — modelled PAFs on relative risks "assumed causal." The one
landmark *interventional* test is **FINGER** (Ngandu 2015), a 2-year double-blind multidomain RCT (n=1260,
at-risk CAIDE >=6 elderly) -> [[Multidomain Lifestyle Intervention and Cognitive Decline]]. It confirms
the **direction** (acting on the levers *as a bundle* improves cognition) at RCT grade, but the two are
**not the same quantity**, so it *bounds and de-risks* the PAF rather than validating or refuting it:

| Parameter | Livingston (observational) | FINGER / Ngandu (RCT) | Same quantity? |
|---|---|---|---|
| Design | consensus of observational SRs/MAs + MR | double-blind multidomain RCT, n=1260 | NO |
| Exposure unit | 14 *separable* per-factor risk factors | one **non-decomposable** 4-component bundle | NO |
| Endpoint | dementia **incidence** (modelled PAF **45.3%**) | NTB cognitive **composite** Z-score (surrogate) | NO |
| Magnitude | \~45% population-attributable | between-group **0.022/yr, Cohen's d 0.13**; incidence NOT measured | NO |

[@ngandu2015]

**What the RCT does and does not buy the PAF [inferred from @ngandu2015; @livingston2024]:** (i) it raises confidence that the *aggregate* causal
assumption is sound — intervening on the bundle really moves cognition; (ii) but it **cannot validate the
per-factor decomposition** the PAF table depends on (FINGER is bundle-only, author-flagged as needing
component-level study); and (iii) it leaves the PAF's *own* endpoint — dementia incidence — **open** (the
significant effect is on a cognitive surrogate, and the effect is small, d=0.13). So the 45.3% figure is
neither confirmed nor overturned by FINGER; the trial de-risks the direction while the decomposition and
the incidence claim stay unproven -> the earlier secondhand "FINGER-family" reading below is the
meta-analytic bound.

<div class="recent-update" data-last-updated="2026-09-04">

## The diabetes lever splits by DRUG CLASS — the pharmacotherapy channel opened (2026-09-04)

Until now this page counted diabetes only as a **shared cardiometabolic incidence rock** — pull it
(by lifestyle or otherwise) and dementia incidence falls with it. Kuate Defo's umbrella opens a
second, distinct decision *inside* the already-diabetic stratum: for the large population **already on
a glucose-lowering drug** (T2D affects \~450M; metformin is first-line), **which class** they are on is
itself a cognition-relevant contrast. This is the pharmacotherapy-taper lens the telos holds standard
drugs for — a standard drug's effect on a non-primary outcome (dementia) is a stratum-level
decision-change.

**The incidence anchor first (confirms the shared-rock framing).** Across the 100-review umbrella,
diabetes raises **AD RR 1.39 (1.16-1.66) to 1.57 (1.41-1.75)** and, more strongly, **VaD RR 1.91
(1.61-2.25) to 2.49 (2.09-2.97)** [@kuatedefo2023].
Two Mendelian-randomization studies did **not** find a T2D->dementia effect (higher fasting glucose did
raise AD odds) — a genetic-instrument caveat that the observational incidence signal may be partly
confounded, consistent with this page already counting diabetes *through* its cardiometabolic company.

**The drug-class split (treatment MA of 27 observational studies, N=3,046,661; incident dementia).**
Random-effects RR vs unexposed/comparator, heterogeneity I2 in brackets:

- **Lower risk:** metformin **0.83 (0.71-0.96)** [I2 99.1%]; GLP-1 RA **0.35 (0.16-0.78)** [98.5%];
  SGLT2i **0.39 (0.20-0.76)** [96.1%]; pioglitazone **0.74 (0.55-0.98)** [74.7%]; all
  thiazolidinediones **0.770 (0.593-0.999)** [97.8%].
- **Neutral:** DPP-4i 1.04 (0.79-1.38); alpha-glucosidase inhibitors 1.04 (0.89-1.22); insulin
  0.97 (0.78-1.20).
- **Higher risk:** meglitinides **1.87 (1.43-2.45)** [I2 0.0%, only 2 studies]; sulphonylureas
  **1.39 (1.04-1.87)** [99.8%].

[@kuatedefo2023]

**Confounding by indication is the load-bearing threat — read every number through it.**
Every contrast is observational, and the comparators are a *mix* (metformin vs sulphonylurea; drug vs
no-drug; drug vs «other antidiabetic monotherapy»). Metformin is **first-line** (earlier-stage,
better renal function, healthier adherers); sulphonylureas / meglitinides / insulin mark **later-line
or more severe** disease. So part of metformin's «benefit» and the sulphonylurea/meglitinide «harm» is
the *same disease-severity / line-of-therapy contrast*, not a drug acting on the brain. The paper's own
tells align: the harm signals are «in line with their association with severe hypoglycaemia»
[@kuatedefo2023], and metformin's benefit
attenuates with longer follow-up (meta-regression pinteraction=.039) — «the observed benefit of
medication may dissipate in longer-term studies and there may exist time-related biases in the efficacy
of antidiabetic treatments» [@kuatedefo2023],
the signature of prevalent-user / healthy-adherer bias.

**Certainty is LOW-to-VERY-LOW across the board, and the umbrella does not grade it for us.** Four
deflators stack: (i) **no RCT** with incident dementia — «most studies ... have been cohort studies and
not RCTs» [@kuatedefo2023]; (ii) **I2 \~
99%** for most classes (within-class studies point opposite ways — metformin ranges from 1.68 harmful to
0.52 protective), so a barely-significant pool hides gross inconsistency; (iii) **publication bias**
detected (Egger p=.041); (iv) **mixed review quality** («only 53.3% of systematic reviews and 72.9% of
meta-analyses were of good quality» [@kuatedefo2023]).
The umbrella used AMSTAR + Newcastle-Ottawa risk-of-bias only — **no convincing/suggestive credibility
grade** per class. And in **sensitivity analysis TZD and sulphonylurea lost significance** (metformin
held) — so two of the ten signals are already fragile on the authors' own re-analysis. Metformin's
effect was also significant only in **US/Western** populations, **null in Eastern** (RR 1.06,
0.79-1.41) — an unexplained region split.

**What it changes about what to do.** For someone with T2D, the evidence *leans* toward metformin /
GLP-1 RA / SGLT2i / pioglitazone over sulphonylureas / meglitinides on the cognition axis — but the
lean is soft (low certainty, heavily confounded) and per-person **agent selection is prescriber-zone,
out of scope**. What is IN scope is the appraisal: the newer agents (GLP-1 RA, SGLT2i) — already ranked
high for CV, renal, and weight outcomes -> [[GLP-1 Non-Cardiometabolic Effects and Safety]],
[[SGLT2 Inhibitors]] — carry a *possible additional* cognition dividend, not an established one; and the
old secretagogues carry a *possible* cognitive penalty that tracks their hypoglycaemia risk. This is a
**drug-vs-drug** refinement *within* the diabetes lever, NOT a lifestyle-vs-drug rock-sizing: lifestyle
prevention of T2D incidence (the shared rock this page already counts, and the structural lever that
removes the driver -> [[Lifestyle vs Metformin for Diabetes Prevention]]) is untouched and still ranks
above managing which pill.

</div>

<div class="recent-update" data-last-updated="2026-09-05">

## Scope guard

Multicomponent prevention RCTs (FINGER-family) show only a **small** cognitive-composite benefit (Cochrane
MD 0.03, 0.01-0.06) and wide, null-spanning effects on dementia *incidence* (RR 0.94, 0.76-1.18) — the
population PAF is a modelling claim, not a demonstrated trial effect on incidence.
[@livingston2024] **That incidence-null is now held first-hand,
not secondhand:** preDIVA (Moll van Charante 2016), a 6.7-yr multidomain vascular-care cluster-RCT
(n=3526, unselected elderly), found **HR 0.92 (0.71-1.19)** on clinical dementia incidence — a primary
constituent of the pooled null above, consistent with it, and detailed with FINGER's surrogate-positive
contrast on [[Multidomain Lifestyle Intervention and Cognitive Decline]].
[@mollvancharante2016] Treatment,
diagnosis, biomarkers and drug therapy (cholinesterase inhibitors, anti-amyloid antibodies) are appraised
on the source page, out of this prevention framework's scope.

**And no responder subgroup rescues the incidence-null — the PAF's implicit *target the high-risk* hope is
tested and fails on the hard endpoint `[2026-08-07, Coley]`.** Pooling the MAPT+preDIVA IPD (n=5205, up to
12 yr), «there was no effect of multidomain intervention on the risk of all-cause dementia (HR 0.98, 95% CI
0.80–1.21)», with no effect in any of 11 pre-specified risk-factor subgroups and none found by a data-driven
SIDES search [@coley2025]. This matters for
how the PAF is used: the observational per-factor map identifies *who is at risk* (route-a prognostics —
Coley confirms age, APOE ε4, inactivity, low MMSE raise incidence), but it does **not** license a claim that
*intervening harder on the high-risk converts to prevented dementia* — that route-b step is exactly what the
pooled trial search could not find. Coley is the pooled COMPOSITE of the two RCTs already cited here (shared
authorship, FINGER excluded), so it is corroboration of the null by re-analysis, not an independent third
witness -> [[Multidomain Lifestyle Intervention and Cognitive Decline]] holds the full responder verdict.
On the *surrogate* the same orbiter now also ranks the levers (Mendes 2025 NMA, 109 RCTs): **exercise +
cognitive training is the top combination and the fuller multidomain bundle does not improve on it —
*more is not better*** — a within-surrogate hierarchy that does not convert to the incidence benefit the
pooled null denies. [@mendes2025multidomain]

</div>

<div class="recent-update" data-last-updated="2026-09-04">

## Self-critique `[run 2026-08-05, before commit]`

- **Not laundered / not overclaimed.** The headline 45.3% is presented with all three of the source's own
  limiting frames (population-not-individual, borrowed-RR-assumed-causal, communality-discounted-so-no-sum)
  rather than as a per-person prevention promise — the exact misread the maintainer framing flagged.
- **Now two-source (F-refinement added 2026-08-05).** The Garcia-Casares MedDiet -> AD/MCI dose-response
  quantifies + bounds the diet lever the Commission references; it is folded in with its own confound
  frame (observational-only, healthy-user, reverse causation) and the mediation/double-counting flag,
  NOT as a 15th additive PAF. No independence (E) is claimed between the two sources. `confidence: medium`
  still reflects the Commission's consensus-grade backing; the diet association is explicitly the weaker,
  `low`-to-`moderate` leg. Where a held page already estimates an exposure (smoking, LDL, BP, activity,
  alcohol), the dementia bullet is added *there* rather than re-litigated here.
- **RCT leg added (FINGER, F-refinement 2026-08-05).** The primary FINGER trial was folded in via a
  parameter table whose "same quantity?" column is **NO on every row** — so it is filed as a *bounding /
  refinement* of the observational PAF, **not** a `tension` (the not-joined guard: an RCT
  between-group difference on a cognitive composite is not the same quantity as an observational PAF on
  dementia incidence). No independence (E) is claimed. The reading is deliberately symmetric — FINGER
  neither confirms nor overturns the 45.3% figure; it de-risks the direction while the per-factor
  decomposition and the incidence endpoint stay unproven.
- **Cognitive-stimulation de-secondhanding added (F-refinement 2026-08-14).** The Commission's borrowed
  0.79 is replaced by its first-hand IPD source (Kivimaki 2021), with the reverse-causation-lag origin
  of that number made explicit and the headline HR 0.77 restored. Filed as F, **not** E: shared authorship
  (Livingston) and the Commission's reliance on this evidence defeat independence, flagged at the
. The full estimate/mechanism/ranking is hosted on the sibling page, not re-litigated here.
- **Omega-3 candidate lever added (2026-08-23, Wei 2023).** Filed as an observational candidate lever,
  NOT a 15th factor — parallel to the periodontal and diet levers, and held at `confidence: low`. Not
  overclaimed: the dietary-DHA RR 0.82 is stated observational/FFQ/Level-H-per-Wei, and the *supplement*
  arm is explicitly refuted at RCT grade (Wei's own «limited efﬁcacy» concession + the held MAPT null),
  so the section cannot be misread as licensing omega-3 capsules. Not laundered-E: Wei shares the
  observational cohort literature with the diet lever and the mechanism with the cardiometabolic rocks,
  so it is flagged as largely mediated, not additive. No tension filed. The full decomposition lives on
  [[Fish and Seafood Consumption]], not re-litigated here.
- **Air-pollution de-secondhanding added (F-refinement 2026-08-27, Wilker 2023).** The Commission's
  borrowed PM2.5 HR 1.03 (1.02-1.05) per 1 ug/m3 — CI excluding 1 — is de-secondhanded to its
  first-hand BMJ SR+MA, whose overall pool per 2 ug/m3 is 1.04 (0.99-1.09), CI crossing the null (a
  per-1-ug rescale \~1.02 (0.99-1.04), marked). Filed as F, **not** E: Wilker cites
  Livingston 2020 and shares the underlying observational cohort literature, so no independence is
  claimed. Honesty guards held: the significant 1.42 is stated as an *active-case-ascertainment*
  moderator (a detection-method artifact, explicitly NOT a route-(b) person-level stratum), not
  headlined; the ROBINS-E bias-toward-null frame keeps the null-crossing CI from reading as a
  no-effect verdict; the parameter table's "Same quantity?" column is NO on every row, so it is a
  bounding/refinement, never a tension. Layer-1: air pollution is stated as a weakly-modifiable
  structural/policy lever that does not reorder the personal rocks. No `confidence:` change — the
  page stays `medium` on the Commission's consensus backing; the air-pollution slice is, if anything,
  weaker first-hand than the borrowed cell implied.
- **F&V candidate lever added (2026-09-04, Zhou 2022).** Filed as a second FOOD-GROUP dietary lever
  (protective direction, sibling to the UPF harm lever), an observational candidate NOT a 15th factor, held
  at `confidence: low`. Not overclaimed: the pooled OR 0.82 is stated observational/FFQ, the abstract's 0.79
  is corrected to the Figure-2 pool, and the AD-null + cohort-attenuation + OR-as-RR discounts are surfaced
  so it cannot read as a direct anti-dementia effect. Not laundered-E: Zhou shares the observational cohort
  literature and the vascular mechanism with the other diet levers, so it is flagged mediated-not-additive.
  No tension filed. Full outcome arm on [[Fruit and Vegetable Intake and Health]], not re-litigated here.
- **Flavonoid component-side lever added (2026-09-04, Peng 2025).** Filed as the COMPONENT side of the
  F&V lever (nested inside it), an observational candidate NOT a 15th factor, held at `confidence: low`.
  Not overclaimed: the any-event OR 0.90 is stated observational/FFQ, and the dementia-null + AD-null +
  BMI/smoking-confounding discounts are surfaced so it cannot read as a direct anti-dementia effect. Not
  laundered-E: the flavonoid exposure is COMPUTED from the same fruit/veg/tea as the Zhou F&V lever
  (nested exposure) and shares the observational substrate, so Peng and Zhou are explicitly a component/
  food-group **type-F** pair, NOT independent corroboration — no `[E-independent]` minted, and this was
  the ingest's crux check. No tension filed. Full subclass/dose-response/food-vs-component detail on
  [[Flavonoid Intake and Cognitive Function]], not re-litigated here.
- **Physical-activity de-secondhanding added (F-refinement 2026-09-04, Iso-Markku 2022).** The Commission's
  borrowed activity cell (RR 0.80, 0.77-0.84) is de-secondhanded to its first-hand SR+MA, whose headline is
  the *identical* figure (n=257,983) — so filed as F (an identity-plus-enrichment), **not** E: Iso-Markku is
  Livingston's ref 165 and the Commission rests on this evidence base, flagged at the. Not
  overclaimed: the reverse-causation survival (>=20y RR 0.79) is stated *with* the honesty guard that the
  cleanest young-baseline high-quality subset goes non-significant (0.79, 0.62-1.01) and *with* the residual
  cognitive-reserve confound the design cannot remove — so the section cannot read as a demonstrated causal
  slope. The ApoE ε4 route-b null and the work-related-PA opposite trend (RR 1.25, CI crosses 1) are stated
  at their own (weak) strength. The parameter table's headline row is *Same quantity? YES*, which is the
  de-secondhanding claim itself (not a tension). The unheld Kivimäki 2019 PA-IPD null it rebuts is named as a
  G-gap with a registered `[AWAITS]` placeholder, not asserted as fact. No `confidence:` change — the page
  stays `medium` on the Commission's consensus backing; PA was already a counted big rock, so this firms it
  rather than adding a factor. Full extraction on [[Physical Activity Dose and Mortality]]'s sibling source
  page, not re-litigated here.
- **Sleep candidate lever added (2026-09-04, Zhang 2025).** Filed as the first non-diet/non-activity
  candidate lever, an observational candidate NOT a 15th factor, held at `confidence: low`. Not overclaimed:
  every RR is stated observational with its I2, publication bias is disclosed, and the long-sleep -> dementia
  arm is explicitly flagged a likely preclinical marker (age-dependent, APOE-driven, weak-checks-only) so it
  cannot read as *sleep less*. The objective-insomnia strengthening is scoped to insomnia. Not laundered-E:
  single source, no independence claimed; the VD-loaded disorders are flagged mediated-not-additive via the
  cerebrovascular route already counted. No tension filed against the unheld Xu 2020 landmark — a G-gap with
  a registered `[AWAITS]` handle. Full decomposition on [[Sleep and Cognitive Decline]], not re-litigated here.
- **Coherence, not validity** (R1): the loop is open — no operation here grades the PAF against a realized
  dementia outcome. A clean audit of this page is not a validated prevention claim.

</div>

## References

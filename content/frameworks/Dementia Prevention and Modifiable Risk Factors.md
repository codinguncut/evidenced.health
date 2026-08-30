---
type: framework
question: Which modifiable exposures raise or lower dementia risk, over what part of the life course, and how much of dementia is attributable to them at the population level?
aliases: [Dementia Prevention, Modifiable Dementia Risk Factors, 14 Risk Factors for Dementia, Lancet Commission Dementia, Cognitive Decline Prevention, Life-Course Model of Dementia]
authors: [Livingston, Gill; Huntley, Jonathan; Liu, Kathy Y; Costafreda, Sergi G; Selbæk, Geir; Alladi, Suvarna; Dinu, Monica; Sofi, Francesco; Ngandu, Tiia; Kivipelto, Miia; Moll van Charante, Eric P; Richard, Edo; Coley, Nicola; Andrieu, Sandrine; Kivimaki, Mika; Nucci, Daniele; Gianfredi, Vincenza; Dibello, Vittorio; Custodero, Carlo; Panza, Francesco; Wei, Bao-Zhen; Xu, Wei; Wilker, Elissa H; Osman, Marwa; Weisskopf, Marc G]
sources: [Livingston - Dementia Prevention 2024, Garcia-Casares - Mediterranean Diet Alzheimer 2021, Dinu - Mediterranean Diet Umbrella Review 2018, Ngandu - FINGER Multidomain Cognitive Decline 2015, Moll van Charante - preDIVA Multidomain Dementia Prevention 2016, Coley - Multidomain Dementia MAPT preDIVA Pooled 2025, Kivimaki - Cognitive Stimulation Work Dementia 2021, Nucci - Mediterranean Diet Dementia, Dibello - Periodontal Disease Cognitive Dementia Meta-Analysis 2024, Wei - Omega-3 Dementia Cognitive Decline Cohort Review 2023, Wilker - Ambient Air Pollution Dementia Meta-Analysis 2023]
cluster: dementia
nucleus: true
confidence: medium
created: 2026-08-05
updated: 2026-08-28
self_critiqued: 2026-08-30
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

## The 14 factors, their direction, and their life-course window

The two 2024 additions to the 2020 list of 12 are **high LDL-C** and **uncorrected vision impairment**
(«adding vision impairment and high cholesterol as potentially modifiable risk factors»). The 2020 list
of 12 carried a PAF of 40%. [@livingston2024] Relative risks
below are the Commission's cited/new-meta-analysis figures; each is for dementia incidence.

| Factor | Effect (Commission's cited RR/HR) | Life-course window |
|---|---|---|
| Less education | educational attainment protective; adulthood cognitive stimulation at work HR 0.77 (de-secondhanded below) -> [[Cognitive Stimulation at Work and Dementia]] | early + mid life |
| Hearing loss | HR 1.35 (1.26-1.45), 50-cohort MA (Yu 2024, first-hand; de-secondhands the Commission's borrowed 1.37, 1.00-1.87) -> [[Hearing Loss and Dementia]] | midlife |
| High LDL-C **(new 2024)** | +8% per 1 mmol/L (1.08, 1.03-1.14); >3 mmol/L HR 1.33 | midlife |
| Depression | RR 2.25 (1.69-2.98), new MA (partly reverse-causal) | midlife |
| Traumatic brain injury | RR 1.66 (1.42-1.93) | any age |
| Physical inactivity | activity RR 0.80 (0.77-0.84) protective | midlife+ |
| Diabetes | HR 1.24 per 5-yr *earlier* onset; midlife-specific | midlife |
| Smoking | midlife RR 1.30 (1.18-1.45); no excess in former smokers | midlife |
| Hypertension | untreated HR 1.42 (1.15-1.76) | midlife |
| Obesity | midlife RR 1.31 (1.02-1.68) | midlife |
| Excessive alcohol | >21 units/wk HR 1.22 (1.01-1.48) | midlife |
| Social isolation | RR 1.57 (1.32-1.85) / 1.18 (1.08-1.30) | late life |
| Air pollution | PM2.5 HR 1.03 (1.02-1.05) per 1 ug/m3 (de-secondhanded below) | late life (lifelong) |
| Uncorrected vision **(new 2024)** | RR 1.47 (1.36-1.60) | late life |

[@livingston2024]

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
- **Coherence, not validity** (R1): the loop is open — no operation here grades the PAF against a realized
  dementia outcome. A clean audit of this page is not a validated prevention claim.

## References

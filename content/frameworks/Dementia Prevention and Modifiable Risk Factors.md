---
type: framework
question: Which modifiable exposures raise or lower dementia risk, over what part of the life course, and how much of dementia is attributable to them at the population level?
aliases: [Dementia Prevention, Modifiable Dementia Risk Factors, 14 Risk Factors for Dementia, Lancet Commission Dementia, Cognitive Decline Prevention, Life-Course Model of Dementia]
authors: [Livingston, Gill; Huntley, Jonathan; Liu, Kathy Y; Costafreda, Sergi G; Selbæk, Geir; Alladi, Suvarna]
sources: [Livingston - Dementia Prevention 2024, Garcia-Casares - Mediterranean Diet Alzheimer 2021]
cluster: dementia
nucleus: true
confidence: medium
created: 2026-08-05
updated: 2026-08-05
self_critiqued: 2026-08-05
relationships:
  related_to:
    - Shared Modifiable Levers Across Age-Related Diseases
    - Parkinsons Disease Modifiable Risk Factors
    - Layer 1 - Ranking Interventions for a Stratum
    - Hearing Loss and Dementia
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
---

**Nucleus of the `dementia` cluster** — the domain-opener. Dementia is a top healthspan axis (57 million
people worldwide in 2019, projected 153 million by 2050 [@livingston2024, 
]); this page holds the canonical map of *which levers exist* and *when in life they act*. The
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
  guarantee any individual will avoid dementia». [@livingston2024, 
] Removing a factor does not remove that share of *one* person's risk.
- **The relative risks are borrowed from observational data and assumed causal.** The Commission «assumed
  risk factors cause dementia»; for several factors (hearing, depression, social isolation, obesity in
  late life) reverse causation over the long prodrome is explicitly a live alternative
  -> [[The U-Shaped Association Artifact]]. [@livingston2024]
- **The factors overlap, so the individual PAFs do NOT sum to 45.3%** — they are weighted down for
  communality. A principal-components analysis of the 14 factors «found five principal components,
  explaining 54 % of the total variance», so each factor's raw PAF is discounted for its shared variance
  with the others. [@livingston2024] The per-factor *weighted*
  PAFs live in the report's Table 1 (a figure not recoverable from this accepted-manuscript text)
  -> — per-factor weighted PAF values from Table 1`.

## The 14 factors, their direction, and their life-course window

The two 2024 additions to the 2020 list of 12 are **high LDL-C** and **uncorrected vision impairment**
(«adding vision impairment and high cholesterol as potentially modifiable risk factors»). The 2020 list
of 12 carried a PAF of 40%. [@livingston2024] Relative risks
below are the Commission's cited/new-meta-analysis figures; each is for dementia incidence.

| Factor | Effect (Commission's cited RR/HR) | Life-course window |
|---|---|---|
| Less education | educational attainment protective (cognitive stimulation at work HR 0.79) | early life |
| Hearing loss | HR 1.37 (1.00-1.87), new MA -> [[Hearing Loss and Dementia]] | midlife |
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
| Air pollution | PM2.5 HR 1.03 (1.02-1.05) per 1 ug/m3 | late life (lifelong) |
| Uncorrected vision **(new 2024)** | RR 1.47 (1.36-1.60) | late life |

[@livingston2024]

## What the framework changes about what to do

- **Most levers are shared with the cardiometabolic big rocks.** Hypertension, diabetes, obesity, LDL,
  smoking, physical inactivity and excessive alcohol are already the vault's hard-CV levers — so pulling
  them buys a *second* patient-important outcome (cognition) on top of CV events, strengthening their
  Layer-1 ranking rather than competing with it -> [[Layer 1 - Ranking Interventions for a Stratum]],
  [[Big Rocks (Elderly)]]. The dementia-specific additions are hearing, vision, education/cognitive
  activity, depression, TBI protection, social contact and air pollution.
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

The same Mediterranean pattern has an RCT on *cardiovascular* hard outcomes (PREDIMED, stroke-driven, at
high baseline risk) -> [[Mediterranean Diet and Cardiovascular Events]] — which is consistent with the
mediation reading: the pattern's best-evidenced effect is on the vascular channel that feeds AD risk.

## Scope guard

Multicomponent prevention RCTs (FINGER-family) show only a **small** cognitive-composite benefit (Cochrane
MD 0.03, 0.01-0.06) and wide, null-spanning effects on dementia *incidence* (RR 0.94, 0.76-1.18) — the
population PAF is a modelling claim, not a demonstrated trial effect on incidence.
[@livingston2024] Treatment, diagnosis, biomarkers and drug
therapy (cholinesterase inhibitors, anti-amyloid antibodies) are appraised on the source page, out of this
prevention framework's scope.

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
- **Coherence, not validity** (R1): the loop is open — no operation here grades the PAF against a realized
  dementia outcome. A clean audit of this page is not a validated prevention claim.

## References

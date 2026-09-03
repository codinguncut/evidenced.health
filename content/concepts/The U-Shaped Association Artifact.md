---
type: concept
question: When an observational exposure shows a protective lower arm (a U/J-curve), is the protection real or a study-design artifact — and how do you tell?
aliases: [U-Shaped Artifact, J-Curve Artifact, Protective Lower Arm, Reverse Causation Curve, Sick-Quitter Bias]
authors: [Stockwell, Tim; Millwood, Iona Y; Dehghan, Mahshid; Cappuccio, Francesco P; World Health Organization (org); Jha, Prabhat; National Academies of Sciences Engineering and Medicine (org); He, Feng J; MacGregor, Graham A; Shan, Zhilei; Poole, Robin; Grosso, Giuseppe; Ramsden, Christopher E; Livingston, Gill; Global BMI Mortality Collaboration (org); Seidelmann, Sara B; Guo, Jing; Malmir, Hanieh; Esmaillzadeh, Ahmad; Wade, Kaitlin H; Davey Smith, George; Timpson, Nicholas J; Godos, Justyna; Jayedi, Ahmad; Shab-Bidar, Sakineh; Ekelund, Ulf; Paluch, Amanda E; Sjöström, Lars; Aune, Dagfinn; Coenen, Pieter; Sun, Yi-Qian; Qin, Pei; Ma, Wancheng; Hu, Fulan; Lopez-Bueno, Ruben; Nordestgaard, Anne Tybjaerg; Nordestgaard, Borge Gronne; Roerecke, Michael; Kaczorowski, Janusz; Tobe, Sheldon W; Gmel, Gerrit; Hasan, Omer S M; Rehm, Jürgen; Mente, Andrew; O'Donnell, Martin; Yusuf, Salim; Bagnardi, Vincenzo; Bryazka, Dana; Wang, Shanshan; Ai, Sizhi; GBD 2020 Alcohol Collaborators (org); Liu, Yunan; Clarke, Robert; Bennett, Derrick; Zong, Geng; Gan, Wei]
sources: [Stockwell - Moderate Drinkers Mortality Risk 2016, Millwood - Alcohol and Vascular Disease Genetic Evidence 2019, Dehghan - PURE Fats Carbohydrate Mortality 2017, Cappuccio - Sleep Duration and Mortality 2010, WHO - Non-Sugar Sweeteners 2023, Jha - Smoking Hazards Cessation Benefits 2013, NASEM - Reproducibility and Replicability in Science 2019, He - Salt Reduction Blood Pressure 2013, Huang - Sodium Dose Duration Blood Pressure 2020, Shan - Sleep Duration Type 2 Diabetes Meta-Analysis 2015, Poole - Coffee Consumption and Health 2017, Grosso - Coffee Mortality Smokers Nonsmokers 2016, Ramsden - Minnesota Coronary Reanalysis 2016, Livingston - Dementia Prevention 2024,
  Global BMI - BMI All-Cause Mortality 2016, Seidelmann - Carbohydrate Intake Mortality 2018, Guo - Milk Dairy Cardiovascular Mortality Meta-Analysis 2017, Malmir - Milk Dairy Osteoporosis Fracture Meta-Analysis 2019, Wade - BMI Mortality Mendelian Randomization 2018, Godos - Egg Consumption Cardiovascular Meta-Analysis 2020, Jayedi - Fish Consumption Chronic Disease Umbrella 2020, Ekelund - Accelerometer Physical Activity Mortality 2019, Paluch - Daily Steps Mortality 2022, Sjostrom - SOS Bariatric Surgery Mortality 2007, Aune - Nut Consumption Mortality 2016, Yin - Sleep Duration Mortality Dose-Response 2017, Mazzoli - Fluoride Bone Fracture 2025,
  Coenen - Occupational Physical Activity Mortality Meta-Analysis 2018, Sun - BMI Mortality Mendelian Randomization, Qin - Carbohydrate Quantity Quality Mortality, Ma - Egg Consumption CVD Mortality, Lopez-Bueno - Handgrip Strength Thresholds, Nordestgaard - Coffee Mortality Mendelian Randomization, Roerecke - Alcohol Reduction Blood Pressure 2017, Mente - Urinary Sodium Cardiovascular Events Hypertension PURE 2016, Bagnardi - Alcohol Site-Specific Cancer Dose-Response Meta-Analysis 2014, Kelly - Modifiable Lifestyle Factors CKD Prevention 2020, Bryazka - Alcohol Population-Level Risks GBD 2022, Wang - Sleep Duration Cardiovascular Meta-Review 2022,
  Liu - Iron Status Heart Disease Stroke Diabetes Mendelian Randomization 2024]
cluster: inference-pitfalls
confidence: medium
created: 2026-07-28
updated: 2026-09-03
self_critiqued: 2026-09-03
relationships:
  related_to:
    - The Estimate-to-Action Gap
    - Nut Consumption and Mortality
    - Alcohol and Mortality and Vascular Disease
    - Sodium Intake and Blood Pressure
    - Measurement Error in Dietary Assessment
    - Non-Sugar Sweeteners
    - P-Hacking and Researcher Degrees of Freedom
    - Sleep and Metabolic Health
    - BMI and All-Cause Mortality
    - Dietary Protein and Mortality
    - Low-Carbohydrate vs Balanced-Carbohydrate Diets
    - Dairy and Cardiometabolic Health
    - Fluoride and Bone Health
    - The Physical Activity Paradox
    - Should Sodium Reduction Be Population-Wide or Targeted
    - Heme Iron and Cardiometabolic Risk
---

A cross-cutting diagnostic, not a claim about one exposure. When observational data shows a **U- or
J-shaped** association — risk lowest at some *intermediate* exposure, higher at both zero and high —
the **lower arm** (the apparent benefit of a little vs none) is the fragile part, and is often not
causal. Alcohol is the worked case; the same shape sits unadjudicated for sodium and, by the telos's
own flag, for sleep.



## The recipe that manufactures a false protective arm

The lower arm can be produced with **no true benefit at all**, by any of:

- **Referent-group contamination / sick-quitter bias** — the *unexposed* group is enriched for people
  who *stopped* the exposure because they became ill, so the referent looks unhealthy and everyone else
  looks protected. In alcohol this is decisive: including former drinkers among *abstainers* «will bias
  drinking risk estimates downward, thereby magnifying the appearance of health benefits from low-level
  drinking», and former drinkers carried «a 38% increased risk» (Stockwell).
  [@stockwell2016]
- **Reverse causation** — poor health lowers the exposure, not the reverse.
- **Confounding by lifestyle / frailty** — the intermediate-exposure group differs systematically
  (Naimi 2005, reported by Stockwell: «27 (90%) of 30 potential adverse confounders for coronary heart
disease were more prevalent among abstainers than among moderate drinkers»).
- **Unequal between-group precision** — per the telos, differential reporting/measurement precision can
  bend a flat relationship into a U with no bias and no confounder, passing both standard checks.
- **Analytic multiplicity / the garden of forking paths** — an analyst free to choose the referent, the
  covariate set, the exposure cut-points, and the subgroup can *land on* a protective arm among many
  paths, and selection publishes the significant one. NASEM's worked case is the post-hoc astrological
  subgroup that found «Geminis and Libras did not benefit from aspirin, while Capricorns benefited the
  most» — «This obviously spurious relationship illustrates the dangers of analyzing data with
  hypotheses and subgroups that were not prespecified.» A curve's *shape* is one of those choices, so an
  un-prespecified U carries the same discount -> [[P-Hacking and Researcher Degrees of Freedom]].
  [@nasem2019]

## The three adjudication routes — and what they showed for alcohol

| Route | What it does | Alcohol verdict |
|---|---|---|
| **Bias-stratified / referent correction** | re-analyse with never-drinkers (not ex-drinkers) as referent; keep only bias-free studies | protection vanishes: RR 0.97 (0.88-1.07), bias-free 0.90 (0.76-1.06), both ns (Stockwell) |
| **Mendelian randomization** | genetic instruments fix lifetime exposure, immune to reverse causation | monotonic harm for stroke, no protective arm (Millwood) |
| **Exclude early follow-up / sick baseline** | remove the reverse-causation window | U-shape *persisted* observationally — so this alone is insufficient (Millwood) |

[@stockwell2016]

**The load-bearing lesson:** excluding early follow-up is the *weak* check (the alcohol U-shape survived
it); the referent correction and MR are the *strong* ones, and where a genetic instrument exists it is
decisive. A protective arm that survives only the weak check has not been adjudicated.

## The decision rule

**A U/J-shaped observational association is not, by itself, evidence that an intermediate dose is
optimal.** Before recommending *a little is better than none*, require that the lower arm survive a
referent-correction or a genetic/quasi-experimental check. If it has only survived covariate adjustment
and early-follow-up exclusion, treat the protective arm as **unadjudicated, not established** — a shape
equally consistent with the causal and the artifact explanation has no diagnostic value.



<div class="recent-update" data-last-updated="2026-09-03">

## Where it applies in the wiki

*Worked-instance catalog — per-exposure applications of the diagnostic; content, not revision history.*

- **Alcohol — adjudicated, artifact.** The protective lower arm is largely non-causal
  -> [[Alcohol and Mortality and Vascular Disease]].
  - **The BP outcome supplies the interventional check on a DIFFERENT endpoint `[2026-08-20, Roerecke]`
    `type-E/F`.** 36 randomised alcohol-reduction trials (Roerecke 2017) show a dose-dependent BP fall
    with «an apparent threshold eﬀ ect at two drinks per day» and **no protective arm** — reducing alcohol
    never *raises* BP, and below 2 drinks/day it is flat.
    [@roerecke2017alcohol] This is a third independent
    (RCT-interventional) leg on the alcohol->BP causal slope, alongside Millwood's conventional + genetic-MR
    slopes -> [[Alcohol and Mortality and Vascular Disease]]. **Distinction, not a re-adjudication:** the
    endpoint is BP, not mortality/IHD, so it confirms *no protective arm* on a new outcome rather than
    re-settling the mortality J — a randomised design being the strongest form of the interventional check
    the decision rule asks for.
  - **The CANCER outcome has no lower arm to adjudicate — the J is outcome-specific `[2026-08-27, Bagnardi]`
    `type-F`.** Bagnardi 2014's site-specific dose-response MA (572 studies) finds the aerodigestive and
    breast curves rise *monotonically from zero*, significant already at light drinking (breast light 1.04,
    oral/pharynx 1.13, oesophageal SCC 1.26) with «a clear dose–risk relationship» and no protective arm.
    [@bagnardi2014]
    So alcohol's protective *lower arm* is a property of the mortality/vascular endpoint, not of alcohol —
    on cancer there is nothing to adjudicate. The only inverse cancer arms are single sites (kidney,
    thyroid, lymphoma) — net-outweighed or plausibly reverse-causation (lymphoma) -> [[Alcohol and Cancer Risk]].
    Not independent-E (same exposure, new outcome, shared observational base) -> type-F cross-outcome.
  - **The CKD outcome shows the artifact signature — unadjudicated, weak checks only `[2026-08-29, Kelly]`
    `type-F`.** Kelly 2020 (SR + MA, 104 studies) finds *both* moderate-alcohol RR 0.86 (0.79-0.93) and
    high-alcohol RR 0.87 (0.79-0.95) protective against incident CKD — a dose order with **no gradient**,
    the classic manufactured-arm shape. The **daily-vs-weekly split is diagnostic**: *daily* RR 0.98
    (0.82-1.18) is **null** while *weekly* RR 0.82 (0.75-0.90) is protective — protection tracks drinking
    *pattern*, not dose, and Kelly names the confounder: «social integration as a product of moderate
    alcohol consumption and overall well- being, which is good for health.»
    [@kelly2020ckd] **Only the weak check
    (covariate adjustment) was run** — no referent-correction, no Mendelian randomization — so the arm
    does NOT clear the bar the mortality J had to (where MR *removed* it). A second exposure-outcome pair
    now carries the alcohol artifact's signature, adjudicated in-principle by the concept but not yet by a
    strong instrument -> [[Chronic Kidney Disease and Modifiable Exposures]]. Not independent-E (same
    exposure, new outcome, shared observational base) -> type-F cross-outcome.
  - **A burden-weighted MODEL J is not an adjudication route — it inherits the input arm `[2026-09-02, Bryazka]`
    `type-F`.** GBD 2020 (Bryazka) estimates a J-shaped burden-weighted RR curve for ages 40+, non-zero
    optimum in high-CVD regions «for all regions». [@gbd2022alcohol]
    But this J is a *weighted composite* of the same observational IHD/T2D dose-response RRs whose lower
    arm the concept already flags — built on a «reference group of non-drinkers» (sick-quitter referent, not
    referent-corrected), no MR run, and Bryazka concedes residual «measurement bias and selection bias, as
    well as the potential impacts of reverse causality». [@gbd2022alcohol]
    Bryazka's own cited MR meta-analysis nulls it — «67% of studies on cardiovascular disease and 75% of
    studies on diabetes reporting a null association». [@gbd2022alcohol]
    **Lesson for the concept: a J re-surfacing in a downstream model is not a fourth check** — it is the
    artifact arm propagated, and re-passes neither the referent-correction nor the genetic gate. Same-body
    GBD revision (Bryazka = GBD 2020, Griswold = GBD 2016), so type-F not independent-E.
- **Sleep — adjudicated, and it sharpens the concept.** The sleep-duration U-curve's *long*-sleep arm
  (RR 1.30) has no demonstrated mechanism and is «a powerful additional marker of ill-health» (reverse  [@cappuccio2010]
  causation), while the *short*-sleep arm (RR 1.12) carries a mechanism and cause-specific evidence
  -> [[Sleep Duration and Mortality]]. **New nuance: the artifact can occupy ONE arm of a U-curve while
  the other arm is causal** — so *adjudicate the arm*, not the curve. The tells that flagged it were the
  concept's own: the artifact arm was the *larger* association, had higher heterogeneity, and
  strengthened with age (a frailty gradient, not a dose-response).
  - **Second sleep instance, different outcome — the arm-level rule replicates.** Shan's sleep-duration
    U-curve for **incident type 2 diabetes** (nadir 7-8 h) shows the identical asymmetry: the short arm
    shows no nonlinearity detected (P=0.22) with a human-corroborated glucose/insulin mechanism, while the
    long arm is *«currently considered more speculative»*, carries higher heterogeneity, and goes
    borderline (1.09, 0.99-1.12) when one study (Tuomilehto) is dropped — Shan even allows *«long sleep
    is a consequence of the sleep-inducing effects of the inflammatory state»* (reverse causation).
    [@shan2015] Shan runs only the
    *weak* check (multivariable adjustment, which the long arm survives); no referent-correction or MR,
    so the long-sleep -> T2D arm stays **unadjudicated**. Not an independent witness to Cappuccio —
    overlapping cohorts + shared Hu/Jackson lineage -> **type-F** (same reverse-causation mechanism, new
    outcome) -> [[Sleep and Metabolic Health]].
  - **Third sleep instance — the per-hour curve QUANTIFIES the asymmetry `[2026-08-13, Yin]` `type-F`.**
    Yin 2017's dose-response SR+MA (3.58 M participants; restricted-cubic-spline, 7 h reference) resolves
    the mortality U per discrete hour and the asymmetry the concept predicts is now *measured*, not just
    argued: the **short arm is shallow** (6 h 1.01, 5 h 1.04, 4 h 1.08, reaching only 1.12 at the 3 h
    extreme) while the **long arm is steep** (9 h 1.15, 10 h 1.32, 11 h 1.53; stroke steeper still — 10 h
    1.64). [@yin2017] The tells are
    this concept's own: the long arm is the *larger* association yet Yin judges «the potential mechanisms
    underlying the association between long sleep duration and adverse outcomes are considered more
    speculative» and reports the view that «the elevated risk of long sleep duration most likely
    represented the confounding effects of subhealthy status»
    [@yin2017], and the U «was more
    pronounced among the studies that reported mortality of total CVD» than incidence (long-arm per-h 1.15
    mortality vs 1.00 incidence) [@yin2017] —
    the signal strengthens toward death, the frailty/severity gradient. **Adjudication is WEAK-checks-only**
    (multivariable adjustment; no referent-correction, no MR), so the long arm stays **unadjudicated**.
    Publication bias does not distinguish the arms — Egger flagged both long-sleep/CVD and
    short-sleep/all-cause at P=0.01 and both survived trim-and-fill (1.22 / 1.04, unchanged). Not independent-E of Cappuccio
    (same design class, overlapping cohorts, same reverse-causation reading) -> **type-F** dose-resolution
    -> [[Sleep Duration and Mortality]].
  - **Fourth sleep instance — the MR STRONG check finally lands: short arm survives, long arm not supported
    (but underpowered, not refuted) `[2026-09-02, Wang]` `type-F`.** Every sleep instance above ran
    *weak checks only* (multivariable adjustment; no referent-correction, no MR), leaving both arms
    unadjudicated by this concept's decision rule. Wang 2022 (meta-review + MA of 4 observational MAs + 11
    MR studies) supplies the genetic natural experiment on **CVD morbidity** endpoints. The **short arm
    survives the strong check**: genetically-predicted short sleep raises CAD (IVW OR 1.24, 1.15-1.34), MI
    (1.20, 1.12-1.28) and HF — «evidence is accumulating that short sleep duration is a causal risk factor
    for CAD and HF» [@wang2022sleep] — so this
    arm is now genetically *supported*, not merely mechanism-argued. The **long arm gets no genetic
    support**: «long sleep duration has no causal associations with stroke and CAD in the MR studies»
    [@wang2022sleep], matching the concept's
    prediction that the larger, mechanism-free arm is the artifact-suspect one (Wang: long sleep «a surrogate
    risk indicator for poor health status», associations «reﬂected potential reverse causality»).
    - **The discipline the alcohol case did NOT need — insufficient vs no-effect.** Unlike Millwood's
      decisive alcohol MR (which *removed* the protective arm on a powered instrument), Wang's long-sleep MR
      nulls are **underpowered**: few genetic instruments for long sleep (one MR ran «no analysis» for want
      of SNPs), and Wang concedes «MR studies ... did not provide suﬃcient evidence supporting the causal
      association between long sleep duration» and «No clear experimental evidence shows the harmful eﬀects
      of long sleep duration». [@wang2022sleep]
      So the long arm moves from *argued-artifact* to *genetically-unsupported* — a stronger position than
      Yin/Shan left it, but NOT a demonstrated no-effect. Scope caveat: the MR lands on CAD/HF/stroke
      *incidence*, not directly on the mortality U-arm Cappuccio/Yin measured, so it strengthens the
      arm-asymmetry read across outcomes rather than re-adjudicating the mortality curve itself.
    - **Type + independence.** The observational arm re-pools the same overlapping Cappuccio-class cohorts
      (shared base, not independent-E); the MR is a genuinely different *method* but it triangulates the same
      question rather than backing a specific held estimate -> **type-F** (supplies the missing genetic leg,
      exactly as Wade's MR did for BMI) -> [[Sleep Duration and Mortality]].
- **Muscle-strengthening activity — a J-shape with its own counter-instance built in.** MSA shows a
  J-shaped dose-response for all-cause mortality/CVD/cancer (nadir in a wide, imprecise \~30-80 min/week
  region, hazard rising above 1.0 past \~140 min/week) — but an **L-shape** (no upturn) for **diabetes**,
  the one outcome with a clear
  muscle-glucose mechanism -> [[Muscle-Strengthening Activity and Mortality]]. This is the sharpest
  single-source instance of the *adjudicate-the-arm* rule: **the outcome whose mechanism is clear shows
  no upturn; the outcomes whose upturn lacks a mechanism show one** — plus very-low GRADE, self-reported
  exposure, and sparse high-volume data. The upper arm is the artifact-suspect region and is left
  unbelieved; the lower arm (a small effective dose) is kept.
- **Weight loss -> mortality — reverse causation manufacturing a false HARM, adjudicated
  interventionally.** The mirror-image direction: here the *observational* signal is a spurious **harm**,
  not a spurious benefit. «Most observational epidemiologic studies have indicated that the rate of death
  from cardio-vascular and all other causes is increased after weight loss» — because they cannot «distin-guish
  intentional from unintentional weight loss», so «the observed weight loss might be the consequence of
  conditions that lead to death rather than the cause». [@sjostrom2007] SOS supplies a
  **fourth adjudication route** the alcohol table lacks — a **controlled intervention** that *assigns*
  intentional weight loss (bariatric surgery vs matched conventional care), removing the intentional-vs-
  unintentional confound by construction — and the sign flips: intentional loss **reduces** all-cause
  mortality (adjusted HR 0.71, 0.54-0.92). [@sjostrom2007] The intervention is the strongest reverse-causation
  check available, even at SOS's non-randomized grade -> [[Does Weight Loss Reduce Cardiovascular Events]],
  [[BMI and All-Cause Mortality]].
- **Macronutrients in PURE — confounding-by-income, the machinery without (mostly) the U.**
  Dehghan found higher carbohydrate → higher mortality and
  higher fat/SFA → *lower* mortality across an 18-country income gradient. The associations are largely
  **monotone**, not U-shaped — so this is not a lower-arm case — but it is a clean instance of the
  concept's **confounding-by-lifestyle/frailty** mechanism in its socioeconomic form: the highest-carb
  quintiles are the poorest (refined-carb subsistence diets), so the fat-protective / carb-harmful
  signals are the mirror of an income gradient, which the authors concede («residual confounding...
  cannot be completely excluded»). [@dehghan2017] The **one candidate U-arm** is the authors' suggestion that «a very low intake (ie,
  below about 7% of energy) [of saturated fat] might even be harmful» — a low-SFA arm that would be the
  artifact-suspect region (very low SFA tracks very low animal-food intake, i.e. poverty/frailty), and
  is **unadjudicated**: no referent-correction or genetic check isolates it from the income confound.
  The decision rule applies unchanged — the protective/harmful arm is not believed until it survives a
  confounder-immune check -> [[Saturated Fat Intake and Replacement]].
- **Carbohydrate -> mortality — a BOTH-arms-harmful U whose arm dissolves into a SUBSTITUTION question
  (a big-rock-adjacent macronutrient instance) `[2026-08-05, Seidelmann]`.** Seidelmann's ARIC cohort
  (n=15 428, 25-yr follow-up) + 8-cohort MA (432 179) finds a **U-shaped** carbohydrate->all-cause-
  mortality curve, **nadir 50-55%E**, both arms elevated: «both low carbohydrate consumption (<40%) and
  high carbohydrate consumption (>70%) conferred greater mortality risk than did moderate intake ...
  (pooled hazard ratio 1·20, 95% CI 1·09-1·32 for low carbohydrate consumption; 1·23, 1·11-1·36 for high
  carbohydrate consumption)». [@seidelmann2018] Unlike alcohol/BMI this is **not a protective-lower-arm** case — there is nothing to defend
  as a benefit; the diagnostic interest is in the LOW arm's *cause*.
  - **The distinctive adjudication route — a substitution DECOMPOSITION, not MR.** Seidelmann's own
    analysis dissolves the low-carb arm by decomposing what *replaces* the carbohydrate: «mortality
    increased when carbohydrates were exchanged for animal-derived fat or protein (1·18, 1·08-1·29) and
    mortality decreased when the substitutions were plant-based (0·82, 0·78-0·87)». [@seidelmann2018] The arm's sign **flips** with the
    replacement source — so «low carbohydrate» is not a well-defined exposure, and the harm reads as a
    *replacement-food* signal («Low carbohydrate diets have tended to result in lower intake of
    vegetables, fruits, and grains and increased intakes of protein from animal sources ... which has
    been associated with higher mortality»). [@seidelmann2018] The low-carb quantile is also confounded-by-lifestyle (more smoking 33% vs 22%,
    more diabetes, higher BMI) [@seidelmann2018] — the artifact recipe's confounding leg.
  - **What it ADDS to the concept — the exposure can be under-specified.** Alcohol/coffee/BMI adjudicate
    a *confounder* on a fixed exposure; here the adjudication reveals the *exposure itself* is a composite
    («low carb» = low-carb-plus-whatever-replaces-it), and the composite's mortality sign is set by the
    substitution, not the carbohydrate. This is the telos's *frame-as-substitutions* rule meeting the
    U-artifact: **decompose the arm into its substitution before believing the curve.**
  - **Adjudication strength — WEAK checks only, so the causal reading stays not-established.** Seidelmann
    ran a reverse-causation sensitivity analysis («individuals with cardio-vascular disease, diabetes, or
    cancer at baseline were excluded», findings unchanged) and a time-varying diet update — the *weak*
    checks the alcohol artifact also survived. [@seidelmann2018] **No MR / genetic instrument.** So strong-but-not-decisive, like coffee/BMI.
  - **The PURE reconciliation — two cohorts trace complementary arms of one U.** ARIC (mean 49%E)
    populates the **left** arm, PURE/Dehghan (mean 61%E, Asian/low-income; the bullet above) the **right**;
    overlaid on one reference, «the associations between primarily high carbohydrate intake and mortality
    in the PURE study still fell within the confidence intervals of those observed in ARIC». [@seidelmann2018] The two headline-clashing
    literatures are the two arms of a single curve — and the right arm is the same refined-carb/poverty
    signal Dehghan's bullet flags, not carbohydrate per se. Not independent-E of Dehghan (both
    observational FFQ cohorts, PURE shared between them) -> **type-F** worked-case extension, reconciling
    with the Dehghan/PURE bullet above -> [[Low-Carbohydrate vs Balanced-Carbohydrate Diets]],
    [[Dietary Protein and Mortality]].
  - **The pooled version — Qin 2023 (41-cohort SR+MA) quantifies the J but shows it is FRAGILE and
    outcome-specific; type-F over Seidelmann, not independent-E `[2026-08-19]`.** Qin re-pools Seidelmann's
    ARIC AND Dehghan's PURE and cites Seidelmann as the antecedent it agrees with (finding «consistent
    with a previous meta-analysis revealing a U-shaped association ... [17]»)
    [@qin2023carb] — shared studies, so **F not
    `[E-independent]`.** Two refinements it lands on the artifact question: (i) **shape is
    outcome-specific within one source** — Qin finds NO non-linearity (linear/monotone) for CVD, CHD and
    stroke incidence, but a **J-shaped** curve *only* for all-cause (Pnon-linearity 0.008) and CV mortality
    (0.055) [@qin2023carb] — the U/J is a mortality-
    endpoint phenomenon, absent on the incidence endpoints; (ii) **the all-cause J is fragile** — RR 1.07
    (1.00-1.14), «not robust in the sensitivity analysis», going non-significant on removing any single one
    of Seidelmann/Dehghan/McKenzie/Frisoni, and the per-5%E all-cause slope is null
    [@qin2023carb]. **Adjudication strength: still
    WEAK checks only** — Qin is cohort-only with no MR/genetic instrument and no substitution
    decomposition, so it adds pooled magnitude but does NOT advance the low-arm past the unadjudicated
    status Seidelmann left it in (a pooled J assembled from cohorts that individually do not robustly show
    it) -> [[Low-Carbohydrate vs Balanced-Carbohydrate Diets]], [[Is the Food Category Doing Any Work]].
- **MCE cholesterol-death — the machinery turned on a CONTRARIAN headline (symmetric standards)
  `[2026-08-04, Ramsden]`.** Not a U-curve but the frailty/reverse-causation machinery in a within-RCT
  association: in the recovered Minnesota Coronary Experiment, each 30 mg/dL serum-cholesterol *decrease*
  tracked a **22% higher risk of death (HR 1.22, 1.14-1.32)** — the figure seed-oil skeptics cite as
  evidence LA-lowering-of-cholesterol *kills*. The tells are this concept's own: the association is
  **entirely >=65-driven** (age >=65 HR 1.35, age <65 **null 1.01, 0.88-1.16**) — a frailty gradient, not a
  dose-response — and Ramsden concedes it is «observational in nature», a within-trial cholesterol-change
  association that «did not differ between the intervention and control group» (so it is *not* the
  randomized diet contrast). [@ramsden2016]
  Ramsden ran only the **weak** check — a frailty sensitivity analysis adjusting for weight/BP *changes*,
  which the association survived — but that is a crude proxy, not an instrument immune to reverse
  causation (low cholesterol is a marker of the frailty/illness that causes death). So by the decision
  rule the causal reading (*lowering cholesterol raises death*) stays **unadjudicated**: the association
  is real, its causal interpretation is not established, and it must get the **same** discount the pro-LA
  observational *benefit* signals get -> [[Linoleic Acid and Cardiovascular Disease]]. The clean part of
  MCE — the *randomized* cholesterol-fell/mortality-null contrast — needs no U-shape machinery and stands
  on its own -> [[Surrogate Outcomes]].
- **Non-sugar sweeteners — reverse-causation machinery that did NOT dissolve the association (only weak
  checks exist).** Not a U-curve: higher NSS use shows *monotone* positive associations with type 2 diabetes
  (HR 1.23-1.34), CVDs (1.32), stroke (1.19) and all-cause mortality (1.12) in long-term cohorts, while
  short-term RCTs show flat cardiometabolic biomarkers -> [[Non-Sugar Sweeteners]]. The textbook
  reverse-causation story fits (people already heavy/dysglycaemic switch *to* NSS *because* of their
  condition), and WHO ran the reverse-causation battery — BMI adjustment, weight stratification,
  excluding pre-baseline weight-losers, dropping early follow-up. Its verdict is the honest middle:
  «although reverse causation and residual confounding may be contributing factors … the associations …
  cannot be dismissed as being solely a result of reverse causation or residual confounding.»
  [@who2023nonsugar]
  - **This is the instance where the machinery neither dissolved nor confirmed the signal.** Contrast
    alcohol, where referent-correction + Mendelian randomization *removed* the protective arm. **NSS has
    had only this page's WEAK checks** (covariate adjustment + early-follow-up exclusion); the STRONG
    check — a genetic/MR instrument immune to reverse causation — **does not exist for NSS**. So by the
    decision rule, the NSS→disease association is **unadjudicated, not established**: it survived the weak
    checks (which alcohol's artifact also survived) and has never faced the strong one.
  - **Corroborated as a candidate by Qin 2020 (SSB/ASB dose-response MA) — same unadjudicated status
    `[2026-08-06]`.** Artificially-sweetened beverages carry a monotone positive dose-response with T2DM
    (RR 1.15 per 250 mL/d) and obesity (1.21), plus non-linear arms for hypertension and all-cause
    mortality — and Qin runs *no* reverse-causation or MR check (cohort-only, «residual confounding
    cannot be ruled out»). So this adds beverage-form data points to the NSS reverse-causation candidate
    without adjudicating it: still the arm that has faced no strong check -> [[Free Sugars Intake]].
  - **A trap the case exposes: adjustment cannot tell a confounder from a mediator.** WHO notes that since
    the associations «largely persist when body weight is controlled for … increased body weight
    (resulting from chronic NSS use) may be an intermediary step … rather than a confounding factor» — so
    *the association survived BMI adjustment* is ambiguous: if weight is a *mediator* on an NSS→disease
    path, adjusting for it wrongly *attenuates* a real effect; if a *confounder*, adjusting is correct.
    The persistence-after-adjustment that reads as robustness cuts both ways. AWAITS a Mendelian-
    randomization source on NSS — the only instrument that would adjudicate the arm.
- **Sodium — named, argued-but-not-adjudicated.** WHO cited a J-shaped hypothesis (harm below \~2 g/day)
  as the reason for its review, then «never returned to» it, and excluded a priori the strata where a
  lower-arm harm is most plausible -> [[Sodium Intake and Blood Pressure]]. **He 2013 rebuts the same
  J-curve papers** invoking «measurement error … confounding … and reverse causality» — this concept's
  recipe, named — **but only as a critique, from CASH/WASH advocates, with no referent-correction or
  MR** on the low-intake arm. [@he2013] So it is
  the textbook case of the decision rule: a partisan *argument* that the arm is artifact is **not** the
  strong check, and the arm stays **unadjudicated**. The concept says exactly what would settle it: a
  referent-corrected or MR analysis of the low-intake arm, which the corpus does not yet hold.
  **Huang 2020 (same lineage) adds a second such argument, not the check:** it frames the low-intake
  mortality signal as «an artefact attributable to factors such as reverse causation and biased
  estimation of sodium intake» and directly contradicts PURE's high-intake *BP*-association threshold
  with RCT effects «far below this» — but this is the concept's recipe *named* again, still without an
  MR or referent-correction on the arm. [@huang2020] Two same-lineage critiques do not compound into an adjudication; the arm stays open.
  **PURE (Mente 2016) supplies the direct low-arm observation the critics lacked — and it is still a
  pole, not the check.** Pooling 133,118 people (>10,000 events, 3 cohorts), the low arm is directly
  present on **hard outcomes**: <3 g/day carries HR **1.34** (1.23-1.47) in hypertensives and **1.26**
  (1.10-1.45) in non-hypertensives vs a 4-5 g/day referent, surviving BP adjustment.
  [@mente2016pure] It directly
  *measures* the arm the He/Huang critiques only argued about — but it does **not** adjudicate it either,
  because the candidate artifact mechanisms are all live and Mente ran only the **weak** checks against
  them: (i) **reverse causation / sick-quitter** — sick people eat less salt;
  Mente excluded events in the first 2 years and excluded known CVD/hypertension/diabetes in turn (the
  pattern held), but neither is a referent-correction; (ii) **spot-urine measurement error at the
  extremes** — a single fasting-morning-urine + Kawasaki estimate is least accurate at very low intake,
  and unequal error across the range can bend a flat curve into a U with no confounder and no reverse
  causation (gate-6), passing exactly those exclusion checks -> [[Measurement Error in Dietary Assessment]];
  (iii) **confounding by frailty** — residual, not removed by multivariable adjustment. Mente ran **no
  referent-correction and no Mendelian-randomization** on the low arm, which is the *strong* check this
  concept requires, and himself concedes observational analysis cannot prove causality. So PURE moves the
  arm from *argued* to *directly observed* while leaving it **unadjudicated** — the [PRIOR] does not close
  here. The policy clash this feeds is [[Should Sodium Reduction Be Population-Wide or Targeted]].
  [inferred from @mente2016pure]
- **Coffee CANCER mortality — a worked referent-correction whose confounder pushed the OPPOSITE way to
  alcohol `[2026-08-04, Grosso + Poole]` `type-F`.** Grosso 2016 (dose-response MA, 31 cohorts, 1.6M)
  performs the smoker/non-smoker **referent correction** the coffee page flagged as pending. Its cleanest,
  Grosso-attributed instance is **cancer** mortality, whose *sign flips* across the correction: pooled,
  coffee shows no significant cancer-mortality association, but stratified «cancer mortality was
  signiﬁcantly decreased only when considering non-smokers, while increased in smokers»
  [@grosso2016] (non-smoker linear RR 0.98/cup,
  0.96-1.00). Grosso reads the flip as confounding, not interaction: «it is hardly plausible that any
  biological effect of coffee causally diﬀers by smoking status... residual confounding by smoking is the
  most likely the explanation». [@grosso2016]
  - **The refinement — the correction removes whatever the confounder manufactured, and that need not be
    a protective signal.** Set the two referent-corrections side by side (same diagnostic move, route 1;
    note this compares a confounder-*manufactured signal*, not literally a J-arm in each — coffee-cancer
    is a confounded sign-flip, not a benefit-then-harm curve):

    | Parameter | Alcohol -> all-cause (Stockwell 2016) | Coffee -> cancer (Grosso 2016) | Same quantity? |
    |---|---|---|---|
    | Correction | never-drinker referent (drop sick-quitters) | never-smoker stratum (drop smoking confounder) | both route-1 referent/confounder corrections — **yes** |
    | What the confounder manufactured | a spurious **benefit** (the protective lower arm of the J) | a spurious **harm** (the smoker-stratum increase that masks a real benefit in the pool) | both a confounder-made signal the correction targets — **yes (as a diagnostic move)** |
    | Direction of the spurious signal | **benefit** | **harm** | **no — opposite** |
    | After correction | benefit vanishes -> monotone **harm** | harm vanishes -> monotone **benefit** (0.98/cup) | **no — opposite directions** |
    | Adjudication strength | referent-correction **+ MR** (Millwood) = decisive | referent-correction **only** (observational; Poole's MR is null) | coffee is **less** fully adjudicated |

    The bottom rows are the payoff: the confounder-correction does not "restore the null by killing a
    protective arm" as a rule — it removes whatever the confounder was *creating*. Smoking manufactured an
    apparent coffee-*cancer* **harm** (smokers drink more coffee and, because smoking is the dominant
    cancer risk factor, die more of cancer), so correcting it revealed **more** benefit — the reverse of
    alcohol. This extends the *adjudicate the arm, not the curve* rule: adjudicate the signal **and note
    which direction the confounder pushes it** — the artifact is not synonymous with "the protective arm."
  - **All-cause/CVD linearizes too, but Grosso does not attribute THAT to smoking.** The overall all-cause
    curve is a J (nadir RR 0.83 at 3 cups -> 0.90 at 7)
    [@grosso2016] while never-smokers
    show «a linear dose-response... decreased risk by 6 % for each additional cup... for all- cause and
    CVD mortality (RR = 0.94, 95 % CI = 0.93, 0.96 and RR = 0.94, 95 % CI = 0.91, 0.97, respectively)»
    [@grosso2016] — so the correction removes
    the upper-arm attenuation here as well. **But** Grosso reports «No diﬀerences were found between
    smokers and non-smokers for all-cause and CVD mortality risk»
    [@grosso2016], attributing the smoking
    artifact explicitly only to cancer. So the all-cause/CVD upper-arm-as-artifact is the wiki's inference
    from the linear-vs-J contrast, held against Grosso's own no-difference statement — suggestive, not
    established. The clean instance is cancer.
  - **Adjudication status: still only partial.** Grosso removes the *dominant* confounder (smoking) but
    is observational — SES / reverse causation / other residuals remain, and the genetic instrument is
    null: «genetically coffee intake was not associated with risk of cardiovascular disease or all-cause
    mortality» (Nordestgaard 2016, now held primary — the coffee->mortality MR Poole cited secondhand).
    [@nordestgaard2016] Consistent, not in
    tension: the per-cup benefit **survives the smoking referent-correction** yet **not the genetic
    instrument**, so residual *non-smoking* confounding is the live remaining explanation. By the decision
    rule the lower-arm benefit stays **not established as causal** — but smoking is no longer a candidate
    for the *whole* association.
    - **The genetic check has its own two limits** (so it bounds rather than closes the arm): the MR is
      powered to exclude a causal effect *as large as the observational one* (instrument F=827) but not a
      small one, and «is based on the assumption of linearity ... [so] will not be capturing non-linear
      differences» — i.e. an MR **cannot in principle detect a true U**, which is exactly the shape under
      test here. [@nordestgaard2016] So the
      genetic null is a strong disconfirmation of the *linear* protective reading, not proof of zero
      effect — the *adjudicate the arm* verdict rests on referent-correction + a bounded genetic check,
      not a decisive instrument (unlike alcohol's Millwood MR).
    -> [[Coffee Consumption and Health]].
  - **Type guard:** Grosso and Poole share the coffee-cohort evidence base (Poole is an umbrella over MAs
    of this class), so this is **F-refinement of Poole's mortality arm, NOT independent-E**. Against the
    *alcohol* instance it is neither E nor a tension — coffee and alcohol do not disagree; they are two
    exposures exhibiting the one diagnostic. It is the **second route-1 referent-correction** worked on a
    dose-mortality curve (after alcohol); sleep, by contrast, was adjudicated by mechanism-presence and
    heterogeneity tells, not by a referent-correction.
- **BMI -> all-cause mortality — the cleanest DECOMPOSABLE confounder-strip cascade (a big-rock exposure)
  `[2026-08-05, Global BMI]`.** The 10.6M-participant IPD-MA is built as a *stepwise* bias-removal cascade,
  so you can watch the artifact form. The **overweight arm (BMI 25-30)** — the *obesity paradox* — walks
  from apparent protection to clear harm as each bias is stripped: raw 0.96 (0.95-0.97) -> +adjust
  smoking/exclude baseline disease 0.99 -> +exclude first 5 y follow-up 1.03 -> +restrict to never-smokers
  1.11 (1.10-1.11). [@globalbmi2016] The cleanest
  single confirmation isolates one confounder: holding the 5-y exclusion + no-baseline-disease constant so
  *only smoking status differs*, overweight is **1.07 (1.06-1.07) in never-smokers vs 0.94 (0.94-0.95) in
  ex/current smokers** (between-stratum heterogeneity significant for every BMI group; overweight P=0.0003,
  obesity I P<0.0001). [@globalbmi2016]
  Smoking is the confounder manufacturing the protection -> [[BMI and All-Cause Mortality]].
  - **What it adds to the concept.** (i) A **big-rock adiposity** instance, not another peripheral exposure.
    (ii) Direction: like alcohol, the confounder manufactured a spurious *benefit* (overweight protection),
    the opposite of the coffee-cancer *harm* — reinforcing *note which direction the confounder pushes*.
    (iii) **A genuinely mixed artifact route** — the concept's self-critique flagged that alcohol+sleep both
    rest on reverse causation alone; here the arm is bent by **smoking confounding AND reverse causation AND
    prevalent disease**, and the cascade *decomposes* their marginal contributions separately (smoking
    adjustment 0.96->0.99; +early-death exclusion ->1.03; +never-smoker restriction ->1.11). (iv) The
    *adjudicate-the-arm* rule again: the **overweight arm is entirely artifact** (0.96->1.11), while the
    **underweight arm is only partly** so — 1.81 (raw) -> 1.47 (primary) but stays elevated, residual real
    harm.
    Not independent-E of alcohol/coffee (a different exposure sharing the one diagnostic, not independent
    backing of one claim) -> **type-F** worked-case extension.
  - **The strong check now exists — Wade MR closes the BMI arm, and it is the SECOND exposure (after
    alcohol) with a genetic instrument `[2026-08-06, Wade]`.** Global BMI adjudicated by confounder-removal
    *only*; Wade 2018's Mendelian randomization in UK Biobank (77-SNP GRS, 335,308 people, 9,570 deaths)
    supplies the genetic natural experiment. Its verdict *converges*: «The J-shaped BMI-mortality
    association remained in MR analyses ... but with a smaller value of BMI at which mortality risk was
    lowest (\~23 vs. \~26 kg/m2 with observational analyses) and apparently flatter over a larger BMI range»
    [@wade2018] — and Wade names the
    mechanism the concept predicts: «Reverse causality ... may be the driver of the characteristic J-shaped
    association». [@wade2018]
    - **What MR does to the two arms sharpens the arm-level rule.** Unlike alcohol (where MR *removed* the
      protective arm cleanly), BMI's low arm does not vanish — the J *remains* but **deflates**: the nadir
      shifts down into the normal range (\~23) and the residual J is an extreme-quantile effect (removing the
      tails -> linear, P=0.999). So MR **deflates the underweight arm** (reverse causation) while
      **inflating the obesity arm** — the observational curve «overestimate[s] the harmful effects of having
      underweight while underestimating the harmful effects of having overweight or obesity».
      [@wade2018] The concept's
      *adjudicate the arm, not the curve* rule is corroborated genetically: the low arm is largely artifact,
      the high arm is genetically supported (significant for CVD-cause mortality, directional-but-imprecise
      for all-cause), and severe underweight plausibly keeps a real (non-artifact) residual — matching
      Global BMI's 1.47.
    - **BUT the MR is NOT independent of the observational IPD-MA — the lineage chase (Richardson lesson).**
      Wade's senior author George Davey Smith and co-author Naveed Sattar both sit on the Global BMI
      Mortality Collaboration writing committee (`Smith GD`, `Sattar N`), and Wade cites Global BMI as ref 5.
      Two shared authors including the anchor MR figure -> same-lineage **type-F** refinement (supplies the
      missing genetic leg), **not** independent-E backing. So BMI is MR-adjudicated but by an overlapping
      group; a genuinely independent MR would upgrade it further. Full parameter table + estimates ->
      [[BMI and All-Cause Mortality]].
  - **Sun MR DECOMPOSES the J — the aggregate curve is a MIXTURE of subgroup shapes; stratify by the
    effect-modifier `[2026-08-19, Sun]` `type-F`.** Sun 2019's non-linear MR (HUNT + UK Biobank, 100
    residual-BMI strata) is the third BMI-MR instance and the sharpest *decomposition* case in the
    catalog. The J **survives** the genetic instrument (a causal basis, nadir «around 22-25»
    [@sun2019]) — but stratifying by
    smoking splits it: «an always-increasing relation of BMI with mortality in never smokers and a J
    shaped relation in ever smokers ... the BMI-mortality relation is likely comprised of at least two
    distinct curves, rather than one J shaped relation. An increased risk of mortality for being
    underweight was only evident in ever smokers.» [@sun2019]
    - **What it ADDS beyond *adjudicate the arm*.** Alcohol/coffee/BMI adjudicate a confounder on a
      fixed *aggregate* curve; Sun shows the aggregate **shape** is itself a mixture — the J is not a
      property of BMI-mortality, it is what you get pooling an always-increasing never-smoker curve with
      a J-shaped ever-smoker curve. So the move is **decompose the curve by the effect-modifier before
      believing its shape** — a pooled J (like a pooled "no U", Jayedi/Aune above) can hide heterogeneous
      subgroup shapes. This is an MR (strong-check) instance, so the artifact survives *into* the causal
      analysis yet still resolves into subgroups.
    - **It refines the underweight-arm reading — the residual harm is largely a SMOKING phenomenon.**
      In never-smokers Sun finds «no evidence for a harmful effect of reducing BMI in underweight
      participants» (clearest in HUNT; in UKB «confidence intervals were wide and compatible with a null
      effect at all values of BMI») [@sun2019]; the underweight harm concentrates in ever-smokers, where «Increased mortality in
      underweight smokers might be driven by respiratory diseases» [@sun2019] — the «other» (non-CVD-non-cancer) cause category
      carries the only profound J (cancer flat, CVD increasing -> shape is **outcome-specific**).
      Candidate mechanism for the residual low-BMI risk: «low lean mass rather than low fat mass»
      [@sun2019]. This does NOT
      overturn Global BMI's never-smoker residual (1.47) — that is an observational association, Sun's is
      a genetic causal slope on a small (1-3% of sample) and imprecise underweight stratum — it
      *sharpens* the arm-level rule toward *condition on smoking before reading the low arm*.
    - **Adjudication strength + independence.** MR = strong check, with two caveats: the non-linear
      fractional-polynomial method carries a published **editor's-note methodological criticism** (note
      text not in the held chunk -> non-linear *shape* claims caveated, the smoking-decomposition
      *direction* less so), and the smoking split is a **collider** Sun argues is «likely to be
      negligible». [@sun2019]
      **NOT independent-E of the held BMI-MR fabric** — co-author Di Angelantonio also leads Global BMI
      2016, and Sun cites Wade (ref 33); the HUNT cohort and the smoking decomposition are what is novel
      -> **type-F** -> [[BMI and All-Cause Mortality]].
- **Hemoglobin -> CAD — the MR DIRECTLY TESTS the U's nonlinearity and finds none `[2026-09-03, Liu]`
  `type-F`.** A distinctive *shape*-dissolution instance: most catalog instances infer the artifact from
  tells (mechanism-absence, heterogeneity, a referent flip), and alcohol/BMI adjudicate via referent-
  correction or a curve that survives-but-deflates; here the strong check tests the curve *shape* directly
  — a genetic nonlinearity test. Liu 2024's iron-status MR reports «The observational analyses in Figure 1 demonstrated
  U-shaped associations of hemoglobin levels with CAD, wherein both lower and higher levels of hemoglobin
  were each associated with higher risks of CAD (reference level 14 mg/dL). However, there was no evidence
  of nonlinearity in the MR analyses (Cochran Q P=0.853, quadratic test P=0.703)»
  [@liu2024ironmr]. So
  the observational U — both a low-hemoglobin (anemia) and a high-hemoglobin arm elevated — flattens to a
  monotone genetic slope: the quadratic term is null. This is the *adjudicate the arm* rule met by a
  nonlinearity test rather than a referent-correction, and it is a STRONG (genetic) check, so the low
  (anemia) arm reads as reverse causation / frailty, not a protective feature of higher hemoglobin.
  - **The direction is a SEPARATE matter from the shape — do not read "no U" as "more is better."** The
    same MR splits by outcome: «modest protective effects of iron biomarkers for CAD (7%-14% lower risk
    for 1 SD higher levels of iron biomarkers), adverse effects for T2D, but no associations with IS or HF»
    [@liu2024ironmr],
    and the *hemoglobin* instrument runs the other way from the iron-*store* instruments (linear +8%/SD
    adverse for CAD) — an internal discordance the source leaves unexplained. The concept's claim here is
    only about the *shape* (the observational U is not causal), not about which direction the monotone
    slope runs -> that outcome-specific direction question lives on [[Heme Iron and Cardiometabolic Risk]].
  - **Same-quantity bound + type.** The exposure is *systemic iron status / hemoglobin*, NOT dietary heme
    (the cross-link's nucleus draws exactly that distinction), so this instance adjudicates the
    iron-burden curve, not the food channel. A new exposure sharing the one diagnostic, not independent
    backing of a held claim -> **type-F** worked-case extension -> [[Heme Iron and Cardiometabolic Risk]].
  [inferred from @liu2024ironmr]
- **Smoking cessation — not a U-curve, but the cleanest worked *sick-quitter correction*.** Jha 2013
  ([[Smoking and Mortality]]) states the mechanism exactly — «Life-threatening illness can cause smokers  [@jha2013]
  to quit, which distorts the rates of death among current smokers and among those who have quit smoking
  recently in opposite ways» — and applies the canonical fix: **reclassify anyone who quit within 5 years
  of death as a current smoker**, then check by dropping the first 2 years of follow-up (unchanged). It is
  the template for the correction this concept keeps invoking (alcohol, sleep): the fix biases *against*
  the finding, so a benefit that survives it is conservative, not inflated. A monotone-harm exposure, but
  the reverse-causation machinery is identical.
- **Dementia — a cross-OUTCOME replication of both adjudicated arms `[2026-08-05, Livingston]`.** The 2024
  Lancet Commission's dementia analysis reproduces the concept on a *new outcome* for the two exposures it
  already banks. **Alcohol:** the light-vs-none dementia J-arm is artifact — it «is probably because many
  non-drinkers have previously had high alcohol consumption», and AD-Mendelian-randomization says «any
  relationship between not drinking and AD is due to survivor bias». [@livingston2024] **Sleep:** the long-sleep dementia arm is artifact — «prolonged sleep is not a
  risk factor for dementia, although dementia and its prodrome may cause prolonged sleep», the association
  «completely attenuated» once the first 5 years of follow-up are dropped, while the short-sleep arm keeps a
  small mechanism-backed risk. [@livingston2024] Both are the
  *adjudicate-the-arm* rule confirmed on dementia -> [[Alcohol and Mortality and Vascular Disease]],
  [[Sleep Duration and Mortality]], [[Dementia Prevention and Modifiable Risk Factors]]. Not independent-E
  of the mortality instances (same reverse-causation/sick-quitter mechanism, new outcome) -> **type-F**
  cross-outcome replication.
- **Milk -> mortality — a single-cohort confounding artifact (an upper-arm case, no U required)
  `[2026-08-06, Guo]`.** The *high-milk-doubles-mortality* scare is the exposure-*harm* mirror of
  the protective-arm cases: Guo 2017's pooled milk -> mortality is null (RR 1.00, 0.93-1.07), and the only
  thing the Swedish Mammography Cohort (Michaelsson) adds is heterogeneity (I2 = 97.4%; excluding it ->
  70.1%, RR 0.99). The confounder is named in-source — the highest milk drinkers had lowest education and
  «highest percentage of smokers and those living alone»
  [@guo2017]. The tell that seals
  it: the **same** cohort drives the *opposite* (protective) fermented-dairy/cheese arm — «the inverse
  associations of fermented dairy and cheese with all-cause mortality or CVD disappeared after removing the
  study of Michaelsson et al.» [@guo2017]. One confounded outlier manufacturing both poles is the recipe with no causal signal.
  **Adjudication is weak here** — leave-one-out sensitivity + Guo's confounder narrative only; no MR or
  genetic instrument, and Michaelsson's own D-galactose mechanism is not imported. So the arm is *dismissed
  as unsupported*, not positively refuted -> [[Dairy and Cardiometabolic Health]]. Not independent-E of the
  alcohol/sleep instances (same reverse-causation/confounding machinery, new exposure) -> **type-F**.
- **Milk/dairy -> fracture — a DESIGN-DISCORDANCE instance: the artifact lives in the study *design*, not
  just a confounder `[2026-08-06, Malmir]` `type-F`.** Malmir 2019's milk/dairy -> osteoporosis+hip-fracture
  SR-MA is the cleanest corpus case where the protective signal is a property of the **weaker design**:
  milk/dairy looks protective in cross-sectional/case-control studies (milk -> hip fracture RR 0.75, 25%
  lower) but is **null in prospective cohorts** (0.93 [0.75-1.15]), and milk even reverses to «a 9% greater
  risk of hip fracture (RR ¼ 1.09; 95% CI: 1.07–1.11)» per 200 g/day in the cohort meta-regression
  [@malmir2019]. The author
  adjudicates by the **design hierarchy** — «findings from cohort studies are closer to the causal
  associations than those from cross-sectional and case-control studies»
  [@malmir2019] — because
  cross-sectional/case-control designs are reverse-causation-prone (fracture/osteoporosis can *lower* dairy
  intake, or recall differs by disease status; the diagnosis can precede the exposure measurement)
  -> [[Dairy and Bone Health]], [[The Observational-Trial Discordance]].
  - **The tie-in to the milk-mortality artifact (same cohort).** The two largest positive, highest-weight
    points in Malmir's **milk** cohort forest plot are Michaelsson's (female 2014 RR 1.60; 2018 RR 1.55) —
    the **same** Swedish cohort family that manufactures the milk -> mortality scare on
    [[Dairy and Cardiometabolic Health]] (where its removal collapses that signal), so one confounded
    high-milk-drinking population **plausibly** drives *both* apparent harms. But Malmir runs **no**
    leave-one-out on Michaelsson for fracture and **no** MR — only the design-hierarchy argument — and the
    pooled milk-cohort RR is itself null (0.93, NS), the positive signal living only in the meta-regression
    slope; so *Michaelsson is the largest positive contributor* is read off the forest plot while
    *Michaelsson drives the signal* is untested. By the decision rule the milk -> fracture *harm* arm stays
    **unadjudicated** (not established as causal), exactly as the milk-mortality arm does. A dairy -> osteoporosis dose-response J (>250 g/d *harm*) sits on the same
    reverse-causation-prone designs and is likewise unadjudicated. Not independent-E of the Guo
    milk-mortality bullet (overlapping Michaelsson cohorts, same confounding machinery, new outcome) ->
    **type-F**.
- **Eggs -> CVD/CHD — a shallow, near-null protective arm, unadjudicated `[2026-08-06, Godos]` `type-F`.**
  Godos 2020's egg dose-response shows a **shallow U/J** for CVD and CHD (nadir SRR \~0.95 at 2-5 eggs/wk,
  attenuating back toward 1.00 at high intake; CHD Pnonlin 0.042) alongside a **null** stroke curve and a
  **monotone-increasing** heart-failure curve -> [[Eggs Dietary Cholesterol and Cardiovascular Risk]]. The
  moderate-intake "protection" is at most \~5% relative with CIs touching 1.00, has survived only covariate
  adjustment (the weak check — Godos concedes reverse causation was «not investigated»), and **reverses** in
  the diabetic subgroup (CVD 1.22). So by the decision rule the lower arm is **not established** — which
  here coincides with the page's own de-escalator read (there is no protection to bank). It sharpens the
  arm-level rule again: the mechanism-bearing outcome (heart failure) is monotone, the mechanism-thin one
  (moderate-egg CVD "benefit") is the U-arm suspect. Not independent-E (a new exposure sharing the one
  diagnostic; Grosso is a shared author) -> **type-F**.
  - **The protective dip did NOT replicate on mortality endpoints `[2026-08-19, Ma]` `type-F`.** Ma 2022's
    egg -> mortality dose-response MA (24 studies, \~11.9 M) models all-cause / CVD / IHD / stroke mortality
    as **linear over the studied range (\~0.07-1.5 eggs/d) with no protective lower arm** — the all-cause
    slope even tilts to harm (per 1-egg/d 1.06, 1.02-1.10).
    [@ma2022egg] Ma's Table 1 cohorts (NIH-AARP, PURE, CKB,
    Zhong, WHI…) are **substantially overlapping with Godos's pool, so this is not independent-E**
    [inferred from @godos2020; @ma2022egg]
    — the overlap is the wiki's cross-source comparison, not a claim Ma itself makes.
    A shallow protective U/J that appears on one MA's incidence-weighted endpoint and disappears on a
    second overlapping MA's mortality endpoint is the arm-level rule confirmed: the dip was **not
    established**, and shape is again **endpoint-specific** (protective-dip on inc+mort, flat/linear on
    mortality) -> [[Eggs Dietary Cholesterol and Cardiovascular Risk]].
- **Fish -> chronic disease — a NULL instance, plus a region-masking nuance `[2026-08-06, Jayedi]` `type-F`.**
  The Jayedi 2020 umbrella (34 cohort MAs) ran nonlinear dose-response on 16 associations and found
  *«no evidence of a U- or J-shaped association between fish consumption and the risk of chronic
  disease»* — inverse-**linear** for all-cause/CVD mortality, CHD, MI, stroke, heart failure, nonlinear
  (but not U/J) for CHD mortality/HTN/Alzheimer/AMD
  [@jayedi2020fish]. So fish is a
  worked case where the artifact machinery had nothing to bite on — a protective exposure with no
  suspect upper arm at population intakes. **The nuance that keeps it honest:** the pooled no-U/J can
  mask region-specific U-shapes — two recent MAs found linear-inverse mortality/MI in Asian cohorts but
  *«modest U-shaped associations in Western countries»*
  [@jayedi2020fish], so a global "no U"
  is a statement about the pooled range, not a guarantee within every stratum -> [[Fish and Seafood Consumption]].
- **Physical activity / steps -> mortality — a NULL-for-U instance where objective measurement REMOVES a
  self-report distortion `[2026-08-06, Ekelund + Paluch]` `type-F`.** The device-measured PA dose-response
  (Ekelund 2019, accelerometry) and the daily-steps curve (Paluch 2022) are **monotone-decreasing to a
  plateau — no U, no harmful upper arm** at achievable doses, so the artifact machinery has no protective
  *lower* arm to defend. What the case adds to the concept is the **opposite** of the sick-quitter trap: a
  place where objective measurement *un-does* a self-report artifact rather than creating one. Self-report
  underestimates the effect \~2-fold (Ekelund: «about twice as large» vs self-report), so the self-report
  literature's flatter curves and occasional high-volume plateau are partly a *measurement* artifact —
  the same reading the CRF page reaches from objectively-measured fitness (no plateau)
  -> [[Cardiorespiratory Fitness and Mortality]], [[Physical Activity Dose and Mortality]]. **Adjudication
  is the WEAK check only:** all three sources (Ekelund 2019/2016, Paluch) address reverse causation
  (frail-move-less) by excluding early deaths, and it survives — but attenuates, and Paluch's effect is
  stronger at <6 y follow-up (HR 0.32 vs 0.57), a sick-quitter tell. No MR/genetic instrument, so the
  monotone benefit is *not-fully-adjudicated causal* but is not purely artifact either. Not independent-E
  of the other instances (shared reverse-causation machinery, new exposure) -> type-F.
- **Occupational physical activity -> mortality — a spurious-harm-AMPLIFIER via the healthy-worker effect,
  the SELECTION mirror of sick-quitter `[2026-08-14, Coenen]` `type-F`.** Coenen 2018's occupational-PA
  meta-analysis (men, high vs low, HR 1.18) is NOT a U-curve and the harm is not dismissed as artifact —
  but one selection mechanism *inflates* it and belongs in this catalog. The harm looked **stronger in
  relatively healthy study samples** (the wrong direction for a dose-response), which Coenen attributes to
  the healthy-worker effect: «this finding is probably due to so-called healthy worker effect, a form of
  selection bias were more healthy subjects select into and remain in the most physically strenuous
  occupations». [@coenen2018paradox]
  This is the **mirror** of sick-quitter: there the *referent* is enriched for the ill (manufacturing a
  spurious benefit); here the *exposed* (strenuous-job) group is enriched for the healthy, so a real harm
  shows up **amplified** in healthy subsamples rather than created. Adds a new leg to the recipe — selection
  *into* the exposure, not out of the referent — and a direction note: the artifact here *strengthens* an
  apparent harm (opposite to alcohol's manufactured benefit, same direction as milk/weight-loss spurious
  harms). **Adjudication is WEAK/subgroup only** — a healthy-vs-unhealthy-sample χ2 contrast, plus Coenen's
  argument that SES may be a *pathway* (over-adjusting it biases conservative), no referent-correction and
  no MR — so the *causal* size of the harm stays unadjudicated, but the direction of the selection bias is
  named -> [[The Physical Activity Paradox]]. Not independent-E (a new exposure/mechanism sharing the one
  diagnostic) -> **type-F**.
- **Nuts -> stroke — a spurious HARM upper arm that dissolves under an OUTCOME-composition stratification
  `[2026-08-13, Aune]` `type-F`.** Aune 2016's nut dose-response is inverse-and-plateauing for CHD/CVD/
  all-cause, but the *stroke* curve shows «a slight J-shaped curve with reductions in risk observed up to
  approximately 10-15 grams per day, but a slight positive association at intakes of 30 grams per day,
  however, this was not observed when studies were stratified by whether the outcome was stroke incidence
  or stroke mortality». [@aune2016nut] So the upper (harm)
  arm is a candidate artifact of **pooling two different outcomes** (incidence + mortality), not a
  dose-response feature — the split *removes* it. A new flavour of the recipe's confounding leg: the arm
  is manufactured by **outcome-composition heterogeneity**, adjacent to the *adjudicate the arm, not the
  curve* rule and to Jayedi's region-masking nuance (a pooled "no U" can hide, or here *invent*, an arm
  the strata do not share). **Adjudication is the WEAK check only** — an outcome-stratification, no MR or
  referent-correction — and the whole benefit side is observational healthy-user (nut eaters slimmer /
  less-smoking / more-active), so neither arm is causally adjudicated -> [[Nut Consumption and Mortality]].
  Not independent-E (a new exposure sharing the one diagnostic) -> **type-F**.
- **Fluoride -> fracture — a U whose protective LOWER arm the source itself flags as sparse-data
  artifact `[2026-08-14, Mazzoli]` `type-F`.** Mazzoli's dose-response MA (37 studies; restricted cubic
  spline) shows «a clear evidence of a U-shaped curve only in females, with the lowest risk around 0.4
  mg/L and a monotonic increase above 0.9 mg/L»
  [@mazzoli2025fluoride] — an apparent protective dip at
  low-moderate drinking-water fluoride, then a rise. Applying *adjudicate the arm, not the curve*: the
  **upper arm is believed** (fracture rising above \~1.5 mg/L overall; RR 1.26, 95% CI 1.10-1.46 at 1.0
  mg/L in postmenopausal females — the one CI excluding 1.0), while the **lower/protective arm is NOT** —
  its CIs all cross 1.0 and the authors themselves attribute it to sparse data: «some types of fractures
  showed a U-shaped pattern ... Such a pattern might be an artifact due to the more limited number of
  studies on which such [estimates rest]»
  [@mazzoli2025fluoride]. **The distinctive mechanism this adds:**
  *unequal between-group precision* — far fewer studies at low fluoride displace the spline nadir with no
  bias and no confounder (the gate-6 mechanism), so «lowest risk around 0.4 mg/L» is a **sampling
  artifact, never an optimum** -> [[The Underivable Optimum]]. **Adjudication is WEAK-checks-only** (RoB
  stratification, sensitivity by excluding high-RoB; no referent-correction, no MR) on mostly high-RoB
  ecological data from a single lab -> [[Fluoride and Bone Health]]. Not independent-E (a new exposure
  sharing the one diagnostic) -> **type-F**.
- **Grip strength -> mortality — a U whose UPPER arm the source itself names a studied-range-edge/sparsity
  artifact `[2026-08-19, Lopez-Bueno]` `type-F`.** Lopez-Bueno 2022's dose-response MA (48 cohorts, 3.14 M,
  grip studied over **15-50 kg**) reports cancer and CV mortality as «a trend towards a U-shaped
  association» — inverse at low-moderate grip, then an *uptick* at the high-strength end.
  [@lopezbueno2022] Applying *adjudicate the arm, not the
  curve*, the authors adjudicate their OWN upper arm as artifact: «the uptick of the dose-response curves
  at the higher end of the exposure may simply represent lack of data rather than a genuine lack of
  association ... The inversion of the right part of the dose-response curves in this study likely reflect
  the sparsity of data/events rather than a genuine lack of beneficial association at higher levels of
  handgrip strength.» [@lopezbueno2022] The distinctive
  mechanism, as at Mazzoli: **unequal between-group precision** — thin data/events at high grip displace
  the spline's right tail with no bias and no confounder (the gate-6 mechanism), so the apparent
  high-strength harm is a **sampling artifact, never a real upper bound**, and the all-cause upper
  threshold (50 kg) sits exactly at the studied-range edge -> [[The Underivable Optimum]]. This is the
  operative-default direction (a hidden plateau means over-shooting merely fails to help), so the U is read
  as monotone-inverse with a spurious right tail. **Adjudication of the causal (marker-vs-lever) reading is
  WEAK/none** — the paper NEVER addresses reverse causation (srcgrep 0/2: no «reverse caus» / «residual
  confound»), and its follow-up runs as short as **2.3 y**, which *amplifies* reverse causation relative to
  a landmark-exclusion cohort -> [[Grip Strength and Mortality]]. Not independent-E (a new exposure sharing
  the one diagnostic; UK Biobank is inside its own pool) -> **type-F**.
- **The open telos prior.** This concept is the fabric form of `[PRIOR]` #2 (U/J-shapes as artifacts):
  it supplies the mechanism list and the adjudication routes so the prior can be *scored* against
  concrete cases, rather than asserted.

</div>

## Corrections and revision history (dated strata)

*Dated self-critique and audit strata, preserved in their original form.*

## Self-critique `[run 2026-07-28, before commit]`

- **Not laundered from one source.** The mechanism and adjudication routes are induced across Stockwell
  (bias-correction) and Millwood (MR), and the concept adds what neither states: the *ranking* of the
  three checks (early-follow-up exclusion is weak; referent/MR are strong) and the transfer to sodium's
  open case. It is not the alcohol page restated under a general title.
- **Not a platitude.** *Suspect U-shapes* alone would be one; the decision rule is specific and
  falsifiable (which checks a protective arm must survive), and it changes what a reader does with a
  J-curve.
- **Confirmed on two exposures, and a prediction landed.** Alcohol (whole protective arm artifact) and
  sleep (long arm artifact, short arm causal) are both adjudicated instances; the concept *predicted*
  sleep would show the pattern and it did -> [[Sleep Duration and Mortality]]. Sodium's low-intake arm
  stays open. The concept is now banked on two exposures with an arm-level refinement, not one — though
  both rest on the same reverse-causation mechanism, so a genuinely different artifact route (e.g. the
  unequal-precision one) is still untested.
- **Coffee added a directional sharpening `[2026-08-04]`.** Grosso's smoking referent-correction is the
  second route-1 instance (after alcohol), and it guards against a latent over-generalization: that the
  correction always kills a *protective* signal. It does not — in coffee-cancer the correction dissolved a
  confounder-manufactured *harm* and revealed *more* benefit. So the rule is "the correction removes what
  the confounder created," not "the correction removes the protection." This is a refinement, not a
  laundered repeat (it changes what the concept claims). It is honestly scoped: the clean instance is the
  *cancer* sign-flip (Grosso-attributed), the all-cause/CVD linearization is a flagged inference (Grosso
  reports no smoker/non-smoker difference there), and the whole thing is *partial* (referent-correction
  only, MR null), so the coffee lower arm is left not-established rather than over-sold as adjudicated.
- **Carbohydrate added a distinct refinement `[2026-08-06, Seidelmann]`.** This is the first instance
  where the adjudication reveals the *exposure* (not just a confounder) is under-specified: «low carb»
  mortality flips sign with the replacement source (animal 1.18 vs plant 0.82), so the arm decomposes
  into a substitution rather than dissolving under a confounder-strip. It is NOT a protective-lower-arm
  case (both arms harmful), so it stretches the concept from "adjudicate the protective arm" toward
  "decompose the exposure before believing the curve." Honestly scoped: weak checks only (no MR), so the
  causal reading stays not-established; and it reconciles with — not independently backs — the Dehghan/PURE
  bullet (shared observational-FFQ-cohort base, PURE shared between them), so type-F, not E.

- **Coherence, not validity** (R1): the concept says when a protective arm is *unwarranted*, not that
  the exposure is harmful; it is a rule about evidence, not about the world.

## References

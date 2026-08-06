---
type: concept
question: When an observational exposure shows a protective lower arm (a U/J-curve), is the protection real or a study-design artifact — and how do you tell?
aliases: [U-Shaped Artifact, J-Curve Artifact, Protective Lower Arm, Reverse Causation Curve, Sick-Quitter Bias]
authors: [Stockwell, Tim; Millwood, Iona Y; Dehghan, Mahshid; Cappuccio, Francesco P; World Health Organization (org); Jha, Prabhat; National Academies of Sciences Engineering and Medicine (org); He, Feng J; MacGregor, Graham A; Shan, Zhilei; Poole, Robin; Grosso, Giuseppe; Ramsden, Christopher E; Livingston, Gill; Global BMI Mortality Collaboration (org); Seidelmann, Sara B]
sources: [Stockwell - Moderate Drinkers Mortality Risk 2016, Millwood - Alcohol and Vascular Disease Genetic Evidence 2019, Dehghan - PURE Fats Carbohydrate Mortality 2017, Cappuccio - Sleep Duration and Mortality 2010, WHO - Non-Sugar Sweeteners 2023, Jha - Smoking Hazards Cessation Benefits 2013, NASEM - Reproducibility and Replicability in Science 2019, He - Salt Reduction Blood Pressure 2013, Huang - Sodium Dose Duration Blood Pressure 2020, Shan - Sleep Duration Type 2 Diabetes Meta-Analysis 2015, Poole - Coffee Consumption and Health 2017, Grosso - Coffee Mortality Smokers Nonsmokers 2016, Ramsden - Minnesota Coronary Reanalysis 2016, Livingston - Dementia Prevention 2024, Global BMI - BMI All-Cause Mortality 2016, Seidelmann - Carbohydrate Intake Mortality 2018]
cluster: evidence-appraisal
confidence: medium
created: 2026-07-28
updated: 2026-08-06
self_critiqued: 2026-08-06
relationships:
  related_to:
    - Alcohol and Mortality and Vascular Disease
    - Sodium Intake and Blood Pressure
    - Measurement Error in Dietary Assessment
    - Non-Sugar Sweeteners
    - P-Hacking and Researcher Degrees of Freedom
    - Sleep and Metabolic Health
    - BMI and All-Cause Mortality
    - Dietary Protein and Mortality
    - Low-Carbohydrate vs Balanced-Carbohydrate Diets
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
  [@stockwell2016, Conclusions]
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
  [@nasem2019, Peto 2011]

## The three adjudication routes — and what they showed for alcohol

| Route | What it does | Alcohol verdict |
|---|---|---|
| **Bias-stratified / referent correction** | re-analyse with never-drinkers (not ex-drinkers) as referent; keep only bias-free studies | protection vanishes: RR 0.97 (0.88-1.07), bias-free 0.90 (0.76-1.06), both ns (Stockwell) |
| **Mendelian randomization** | genetic instruments fix lifetime exposure, immune to reverse causation | monotonic harm for stroke, no protective arm (Millwood) |
| **Exclude early follow-up / sick baseline** | remove the reverse-causation window | U-shape *persisted* observationally — so this alone is insufficient (Millwood) |

[@stockwell2016, Results; (Millwood - Alcohol and Vascular Disease Genetic Evidence 2019) , Results]

**The load-bearing lesson:** excluding early follow-up is the *weak* check (the alcohol U-shape survived
it); the referent correction and MR are the *strong* ones, and where a genetic instrument exists it is
decisive. A protective arm that survives only the weak check has not been adjudicated.

## The decision rule

**A U/J-shaped observational association is not, by itself, evidence that an intermediate dose is
optimal.** Before recommending *a little is better than none*, require that the lower arm survive a
referent-correction or a genetic/quasi-experimental check. If it has only survived covariate adjustment
and early-follow-up exclusion, treat the protective arm as **unadjudicated, not established** — a shape
equally consistent with the causal and the artifact explanation has no diagnostic value.



## Where it applies in the wiki

- **Alcohol — adjudicated, artifact.** The protective lower arm is largely non-causal
  -> [[Alcohol and Mortality and Vascular Disease]].
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
- **Muscle-strengthening activity — a J-shape with its own counter-instance built in.** MSA shows a
  J-shaped dose-response for all-cause mortality/CVD/cancer (nadir in a wide, imprecise \~30-80 min/week
  region, hazard rising above 1.0 past \~140 min/week) — but an **L-shape** (no upturn) for **diabetes**,
  the one outcome with a clear
  muscle-glucose mechanism -> [[Muscle-Strengthening Activity and Mortality]]. This is the sharpest
  single-source instance of the *adjudicate-the-arm* rule: **the outcome whose mechanism is clear shows
  no upturn; the outcomes whose upturn lacks a mechanism show one** — plus very-low GRADE, self-reported
  exposure, and sparse high-volume data. The upper arm is the artifact-suspect region and is left
  unbelieved; the lower arm (a small effective dose) is kept.
- **Macronutrients in PURE — confounding-by-income, the machinery without (mostly) the U.**
  Dehghan found higher carbohydrate → higher mortality and
  higher fat/SFA → *lower* mortality across an 18-country income gradient. The associations are largely
  **monotone**, not U-shaped — so this is not a lower-arm case — but it is a clean instance of the
  concept's **confounding-by-lifestyle/frailty** mechanism in its socioeconomic form: the highest-carb
  quintiles are the poorest (refined-carb subsistence diets), so the fat-protective / carb-harmful
  signals are the mirror of an income gradient, which the authors concede («residual confounding...
  cannot be completely excluded»). [@dehghan2017, Discussion] The **one candidate U-arm** is the authors' suggestion that «a very low intake (ie,
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
  carbohydrate consumption)». [@seidelmann2018, 
  Findings] Unlike alcohol/BMI this is **not a protective-lower-arm** case — there is nothing to defend
  as a benefit; the diagnostic interest is in the LOW arm's *cause*.
  - **The distinctive adjudication route — a substitution DECOMPOSITION, not MR.** Seidelmann's own
    analysis dissolves the low-carb arm by decomposing what *replaces* the carbohydrate: «mortality
    increased when carbohydrates were exchanged for animal-derived fat or protein (1·18, 1·08-1·29) and
    mortality decreased when the substitutions were plant-based (0·82, 0·78-0·87)». [@seidelmann2018, Findings] The arm's sign **flips** with the
    replacement source — so «low carbohydrate» is not a well-defined exposure, and the harm reads as a
    *replacement-food* signal («Low carbohydrate diets have tended to result in lower intake of
    vegetables, fruits, and grains and increased intakes of protein from animal sources ... which has
    been associated with higher mortality»). [@seidelmann2018, Discussion] The low-carb quantile is also confounded-by-lifestyle (more smoking 33% vs 22%,
    more diabetes, higher BMI) [@seidelmann2018, 
    Table 1] — the artifact recipe's confounding leg.
  - **What it ADDS to the concept — the exposure can be under-specified.** Alcohol/coffee/BMI adjudicate
    a *confounder* on a fixed exposure; here the adjudication reveals the *exposure itself* is a composite
    («low carb» = low-carb-plus-whatever-replaces-it), and the composite's mortality sign is set by the
    substitution, not the carbohydrate. This is the telos's *frame-as-substitutions* rule meeting the
    U-artifact: **decompose the arm into its substitution before believing the curve.**
  - **Adjudication strength — WEAK checks only, so the causal reading stays not-established.** Seidelmann
    ran a reverse-causation sensitivity analysis («individuals with cardio-vascular disease, diabetes, or
    cancer at baseline were excluded», findings unchanged) and a time-varying diet update — the *weak*
    checks the alcohol artifact also survived. [@seidelmann2018, Discussion] **No MR / genetic instrument.** So strong-but-not-decisive, like coffee/BMI.
  - **The PURE reconciliation — two cohorts trace complementary arms of one U.** ARIC (mean 49%E)
    populates the **left** arm, PURE/Dehghan (mean 61%E, Asian/low-income; the bullet above) the **right**;
    overlaid on one reference, «the associations between primarily high carbohydrate intake and mortality
    in the PURE study still fell within the confidence intervals of those observed in ARIC». [@seidelmann2018, Results] The two headline-clashing
    literatures are the two arms of a single curve — and the right arm is the same refined-carb/poverty
    signal Dehghan's bullet flags, not carbohydrate per se. Not independent-E of Dehghan (both
    observational FFQ cohorts, PURE shared between them) -> **type-F** worked-case extension, reconciling
    with the Dehghan/PURE bullet above -> [[Low-Carbohydrate vs Balanced-Carbohydrate Diets]],
    [[Dietary Protein and Mortality]].
- **MCE cholesterol-death — the machinery turned on a CONTRARIAN headline (symmetric standards)
  `[2026-08-04, Ramsden]`.** Not a U-curve but the frailty/reverse-causation machinery in a within-RCT
  association: in the recovered Minnesota Coronary Experiment, each 30 mg/dL serum-cholesterol *decrease*
  tracked a **22% higher risk of death (HR 1.22, 1.14-1.32)** — the figure seed-oil skeptics cite as
  evidence LA-lowering-of-cholesterol *kills*. The tells are this concept's own: the association is
  **entirely >=65-driven** (age >=65 HR 1.35, age <65 **null 1.01, 0.88-1.16**) — a frailty gradient, not a
  dose-response — and Ramsden concedes it is «observational in nature», a within-trial cholesterol-change
  association that «did not differ between the intervention and control group» (so it is *not* the
  randomized diet contrast). [@ramsden2016, Table 4; Strengths and limitations]
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
    [@grosso2016, Table 2] while never-smokers
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
    is observational — SES / reverse causation / other residuals remain, and Poole's Mendelian-
    randomisation citations found «no genetic evidence for a causal relation» for coffee->mortality
    [@poole2017]. Consistent, not in
    tension: the per-cup benefit **survives the smoking referent-correction** yet **not the genetic
    instrument**, so residual *non-smoking* confounding is the live remaining explanation. By the decision
    rule the lower-arm benefit stays **not established as causal** — but smoking is no longer a candidate
    for the *whole* association.
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
  1.11 (1.10-1.11). [@globalbmi2016, eTable 5] The cleanest
  single confirmation isolates one confounder: holding the 5-y exclusion + no-baseline-disease constant so
  *only smoking status differs*, overweight is **1.07 (1.06-1.07) in never-smokers vs 0.94 (0.94-0.95) in
  ex/current smokers** (between-stratum heterogeneity significant for every BMI group; overweight P=0.0003,
  obesity I P<0.0001). [@globalbmi2016, eTable 6]
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
    harm. Adjudicated by confounder-removal *only* (no MR), so like coffee it is strong-but-not-decisive.
    Not independent-E of alcohol/coffee (a different exposure sharing the one diagnostic, not independent
    backing of one claim) -> **type-F** worked-case extension.
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
- **The open telos prior.** This concept is the fabric form of `[PRIOR]` #2 (U/J-shapes as artifacts):
  it supplies the mechanism list and the adjudication routes so the prior can be *scored* against
  concrete cases, rather than asserted.

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

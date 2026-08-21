---
type: framework
question: Is moderate alcohol intake protective, harmful, or neutral — and is the J-curve real?
aliases: [Alcohol, Moderate Drinking, Alcohol and Mortality, Alcohol J-Curve, Alcohol and Stroke, Alcohol Cardioprotection]
authors: [Stockwell, Tim; Millwood, Iona Y; Walters, Robin G; Chen, Zhengming; Zhao, Jinhui; Livingston, Gill; World Cancer Research Fund International (org); Roerecke, Michael; Rehm, Jürgen; Kaczorowski, Janusz; Tobe, Sheldon W; Gmel, Gerrit; Hasan, Omer S M; Semba, Richard D; Griswold, Max G; GBD 2016 Alcohol Collaborators (org); Rumgay, Harriet]
sources: [Stockwell - Moderate Drinkers Mortality Risk 2016, Millwood - Alcohol and Vascular Disease Genetic Evidence 2019, Zhao - Daily Alcohol Intake and Mortality 2023, Livingston - Dementia Prevention 2024, WCRF - Diet Nutrition Activity Cancer 2018, Roerecke - Irregular Heavy Drinking Ischemic Heart Disease 2010, Roerecke - Alcohol Reduction Blood Pressure 2017, Semba - Resveratrol Levels Mortality 2014, GBD - Alcohol Use Burden 195 Countries 2018, Rumgay - Alcohol Attributable Cancer Burden 2021]
cluster: alcohol
nucleus: true
confidence: medium
created: 2026-07-28
updated: 2026-08-20
self_critiqued: 2026-08-20
relationships:
  related_to:
    - The U-Shaped Association Artifact
    - Sodium Intake and Blood Pressure
    - Baseline Risk and the Relative-Absolute Split
    - Dementia Prevention and Modifiable Risk Factors
    - Is the Food Category Doing Any Work
---

Opens the `alcohol` cluster. The famous finding that *moderate drinkers outlive abstainers* — the
J-curve — is the textbook case of a protective lower arm that dissolves under scrutiny. Two
independent methods say the protection is largely not real.



## The observational J-curve — the appearance

- **All-cause mortality (Stockwell, 87 studies).** Unadjusted, the «classic J-shaped curve» appears:
  low-volume drinkers (1.3-24.9 g/day) «RR = 0.86, 95% CI [0.83, 0.90]» vs abstainers; occasional
  drinkers «0.84 [0.79, 0.89]»; former drinkers elevated «1.22 [1.14, 1.31]».
  [@stockwell2016]
- **Vascular disease (Millwood, China Kadoorie, 500k).** Self-reported intake had «U-shaped
  associations with the incidence of ischaemic stroke... intracerebral haemorrhage... and acute
  myocardial infarction; men who reported drinking about 100 g of alcohol per week... had lower risks
  of all three diseases than non-drinkers or heavier drinkers.»
  [@millwood2019]

## Why the lower arm is an artifact — two independent adjudications

**1. Bias-corrected observational (Stockwell).** Correcting for how abstainers are defined erases the
protection. The driving bias is **former-drinker misclassification** (sick-quitters who quit *because*
they are ill, counted as *abstainers*, making the referent look unhealthy):

- fully adjusted for abstainer biases + study quality, low-volume «RR = 0.97, 95% CI [0.88, 1.07]» —
  no significant protection; former drinkers rise to «1.38 [1.24, 1.54]».
- the 13 bias-free studies show «no significant protection for low-volume drinkers... RR = 0.90, 95%
  CI [0.76, 1.06]»; using occasional drinkers (not abstainers) as the referent, «there would be no
  evidence of health protective effects for low-volume drinkers or any other category.»
- the corrected pattern is «more consistent with a linear dose response than a J-shaped curve.»

[@stockwell2016]

**2. Mendelian randomization (Millwood).** Genetic variants (ALDH2 rs671, ADH1B) that strongly lower
alcohol tolerance act as instruments free of reverse causation and lifestyle confounding. The
genotype-predicted (causal) relationship is **monotonic, with no protective lower arm**:

- ischaemic stroke RR per 280 g per week 1.27 (1.13-1.43); intracerebral haemorrhage «1.58
  (1.36-1.84)»; total stroke «1.38 (1.26-1.51)» — «no suggestion of increased stroke risk at very low
  levels» that would indicate an abstinence penalty, and «no material deviation from log-linear
  relationships.»
- the causal mechanism is shared by both methods where the observational result *is* real: blood
  pressure rises 4.8 mm Hg (4.5-5.1) per 280 g per week (conventional) and «4.3 mm Hg (3.7-4.9)»
  (genetic) — convergent, so the confounding is specific to the *protective* claim, not to alcohol's
  BP effect.

[@millwood2019]

Millwood's verdict: «the apparently protective effects of moderate alcohol intake against stroke are
not mainly caused by alcohol itself, and are largely artifacts of reverse causation and confounding.»
Stockwell's: «low-volume alcohol consumption has no net mortality benefit compared with lifetime
abstention or occasional drinking.»
[@millwood2019]

## Two independent methods, one conclusion `[E-independent]`

| Parameter | Stockwell 2016 | Millwood 2019 | Same claim? |
|---|---|---|---|
| Method | meta-analysis, bias-corrected | Mendelian randomization (genetic instruments) | **independent — different data, methods, populations** |
| Outcome | all-cause mortality | stroke, myocardial infarction | NO — different outcomes |
| Moderate-drinking effect | RR 0.97 (0.88-1.07), ns | monotonic harm (stroke); no protective arm | — |
| **The claim reached** | no net protection from low-volume drinking | protective J-arm is non-causal | **YES — moderate drinking is not cardioprotective** |

The convergence is **on the qualitative claim** (the protective lower arm is not causal), reached by a
bias-correction route and a genetic route that share no data or lineage and neither references the other
as antecedent — a genuine independent-backing lift, not a shared-study echo. The effect *sizes* are not
matched (different outcomes), so this is an E on the *direction*, not a pooled magnitude.
Corroborated across [[The U-Shaped Association Artifact]].



## The updated meta-analysis, and where harm starts `[Zhao 2023]`

Zhao et al. 2023 updates the observational analysis to **107 studies, 4.8 million people** and confirms
the artifact finding: fully adjusted, low-volume drinking is «RR, 0.93; 95% CI, 0.85-1.01; P = .07» vs
lifetime abstainers and only «a RR of 0.97» against the cleaner occasional-drinker referent — no
significant protection. Only «21» of 107 studies were free of abstainer bias, and stripping the
covariates drives the low-volume estimate to «0.86 (0.83-0.88)» — the protection is manufactured by the
biases.

**What it adds that the corpus lacked — an actionable harm threshold, and it is sex-specific.**
Significant all-cause mortality elevation begins at:

- **pooled: 45 g/day** — «45 to 64 g per day (RR, 1.19; 95% CI, 1.07-1.32)», rising to «1.35» at
  >=65 g/day; 25-44 g/day pooled is null (1.05, ns);
- **women: from 25 g/day** — medium-volume «RR, 1.21; 95% CI, 1.08-1.36», and *any* drinking is already
  elevated («1.22; 95% CI, 1.02-1.46»);
- **men: from 45 g/day** — 25-44 g/day is null for men.
- «Across all levels of alcohol consumption, female drinkers had a higher RR of all-cause mortality
  than males (P for interaction = .001).»

This is the first *how-much-is-too-much* number the corpus holds for alcohol, and the sex asymmetry is
the decision-relevant part — a woman's threshold sits at roughly half a man's.

**F, not a third E witness (laundering guard).** Zhao 2023 is Stockwell's own group — it «updates our
earlier systematic review» (its ref 8 is Stockwell), same
team and method. It **refines** the observational arm (more studies, occasional referent, the
threshold); it is **not** an independent method, so the `[E-independent]` convergence above stays
Stockwell ∥ Millwood, unchanged.
[@zhao2023]

## The honest boundary — stroke is not myocardial infarction

MR shows **clear causal harm for stroke and blood pressure**, but for myocardial infarction the genetic
estimate is **null**: RR per 280 g per week 0.96 (0.78-1.18), p=0.69 — «little net effect». Millwood
suggests alcohol's BP harm «could be offset by cardio-protective changes in other factors», and cautions
the MI case count was limited so «some real benefit or hazard cannot be excluded». So "alcohol is
uniformly harmful" holds for **stroke and BP**; for **coronary heart disease the causal picture is
genuinely unresolved**, and that is the one place a small real benefit is not excluded.
[@millwood2019]


## Interventional confirmation — reducing alcohol lowers BP, confined to >2 drinks/day `[Roerecke 2017]`

The BP slope above (Millwood) is observational + genetic. Roerecke's 2017 SR+MA of **36 randomised
trials (2865 participants)** supplies the missing **interventional** leg — the RCT dose-response of
*reducing* alcohol on blood pressure, with the dose-response graded GRADE-high: «we rate the quality of
evidence for a dose-response association as high».
[@roerecke2017alcohol]

- **Overall,** cutting alcohol lowered blood pressure by «–3·13 mm Hg (95% CI –3·93 to –2·32) for
  systolic blood pressure and –2·00 (–2·65 to –1·35) for diastolic blood pressure with substantial
  between-study heterogeneity (I² 82·0% and 79·5%, respectively)» — heterogeneity that baseline intake
  almost entirely explained (75.4% SBP, 93.4% DBP variance).
  [@roerecke2017alcohol]
- **Dose-dependent, with a threshold at \~2 drinks/day.** Stratum SBP means by baseline band (Table 2,
  all trials): <=2 drinks/day -0.18 (-1.02 to 0.66), NS; 3 drinks -1.18 (-2.32 to -0.04); 4-5 drinks
  -3.00 (-3.98 to -2.03); >=6 drinks -5.50 (-6.70 to -4.30) [DBP >=6: -3.97 (-4.70 to -3.25)].
  [@roerecke2017alcohol] Meta-regression:
  «β = –0·91 mm Hg» SBP (and −0·75 DBP) «per one drink per day» of baseline intake, p<0·0001.
  [@roerecke2017alcohol] Studied range: baseline
  weighted means 15 / 30 / 49 / 76 g/day across the four strata (single trials to \~380 g/day) — so the
  curve is estimated *over the drinking range*, not extrapolated.
- **Below the threshold the lever is empty — the decision-relevant part.** «People drinking two drinks or
  fewer per day did not have a signiﬁ cant reduction in blood pressure when they reduced their alcohol
  consumption to near abstinence, suggesting that this amount of alcohol intake does not increase blood
  pressure.» [@roerecke2017alcohol] So the alcohol->BP
  lever is **confined to the >2 drinks/day stratum**; for a light drinker, cutting alcohol buys no BP —
  a route-(a)/(b) stratification, not a universal recommendation. The dose-response held «in healthy
  participants and people with hypertension or other CVD risk factors».
  [@roerecke2017alcohol]

### Third independent leg for the alcohol->BP causal claim `[E-independent]`

The BP slope on this page was already reached two ways (Millwood conventional-observational and genetic
MR). Roerecke adds a **third, independent method — pooled RCTs of alcohol *reduction*** — converging on
the same causal claim. No author overlap with Millwood (Roerecke/Kaczorowski/Tobe/Gmel/Hasan/Rehm vs
Millwood/Walters/Chen), different design, data, and *direction* of manipulation, and neither references
the other as antecedent — a genuine independent-backing lift, not a shared-study echo.

| Parameter | Millwood 2019 (conventional + genetic MR) | Roerecke 2017 (RCT interventional) | Same quantity? |
|---|---|---|---|
| Route | observational cohort + Mendelian randomization | random-effects MA of 36 alcohol-reduction RCTs | **no — independent designs (the point of E)** |
| Manipulation | genetically/self-reported *higher* vs lower intake | *reduction* of usual intake toward abstinence | mirror image (increase vs decrease) |
| SBP effect | +4.8 (conv, 4.5-5.1) / +4.3 (genetic, 3.7-4.9) mm Hg per 280 g/week | -0.91 mm Hg per one drink/day baseline (β) | roughly — 280 g/wk \~= 3.3 drinks/day, so Millwood \~1.3-1.4 vs Roerecke \~0.91 mm Hg per drink/day: **same sign + order of magnitude** |
| Shape | log-linear (MR assumes linearity) | dose-dependent **with a threshold at 2 drinks/day** | **no — Roerecke adds a threshold the MR cannot see (F)** |
| Establishes | alcohol *causally raises* BP (reverse-causation-immune) | *reducing* alcohol *lowers* BP (interventional) | **same causal claim, reached independently -> E** |

The alcohol->BP causal effect is thus triangulated across observation, genetics, and randomisation, and
Roerecke **refines** the Millwood log-linear picture with a threshold (an F riding on the E): the BP
effect is a >2-drinks/day phenomenon, flat below it.
[inferred from @millwood2019; @roerecke2017alcohol]

### But BP is the SURROGATE — the CV events are modelled, not measured

Roerecke measured **blood pressure**, a surrogate. Its downstream cardiovascular payoff is a **model,
not a trial outcome**: for the UK it projected «more than 7000 inpatient hospitalisations and 678
cardiovascular deaths prevented» per year — but that figure rests on «standard methods for comparative
risk assessment analyses (eg, Global Burden of Disease studies)», run «assuming persistence of lower
alcohol consumption within 1 year, and no lag time of eﬀ ects on CVD outcomes».
[@roerecke2017alcohol] The
BP->event transmission is *assumed via the risk-assessment machinery*, not observed; no hard CV endpoint
was measured, and «the physiological mechanisms for alcohol’s eﬀ ect on blood pressure and hypertension
are still unknown». [@roerecke2017alcohol] The BP drop
is «similar to that of other health behaviour changes, such as physical activity» or weight-loss diets
[@roerecke2017alcohol] — the BP->event step itself is
adjudicated at [[Blood Pressure Lowering and Cardiovascular Events]].

**No protective arm for the BP outcome — the interventional check the artifact concept demands.** Where
alcohol's *mortality/IHD* J-curve carries a spurious protective lower arm (above), the *BP* dose-response
has none: reducing alcohol never *raises* BP, and below the 2-drink threshold it is simply flat. A
randomised-reduction design is the strongest form of the interventional check -> [[The U-Shaped Association Artifact]] asks for — but note the outcome is **distinct** (BP, not mortality), so this
confirms the concept on a *different endpoint*, it does not itself adjudicate the mortality J.

## What this probes `[PRIOR handle — not scored here]`

Alcohol is the canonical instance of the telos's open `[PRIOR]` #2 — *U/J-shaped associations are
frequently artifacts of reverse causation or confounding*. This ingest builds the evidence that in the
alcohol case the prior **holds** (the protective arm is artifact, shown two ways). Per the ingest
contract, the fabric records this; the `[PRIOR]` is *scored* in a separate pass, against this and the
still-open sodium J-hypothesis -> [[Sodium Intake and Blood Pressure]], [[The U-Shaped Association Artifact]].



## Second outcome — dementia, and the same J-curve artifact replicates

Excessive alcohol is one of the 14 modifiable dementia risk factors -> [[Dementia Prevention and Modifiable Risk Factors]], and the dementia literature reproduces this page's verdict on a new outcome. Heavy midlife
drinking (>21 units/week) raises dementia risk (IPD «HR 1.22, 1.01-1.48»), while the apparent protection of
light-vs-none is again an artifact — the observational J-curve «is probably because many non-drinkers have
previously had high alcohol consumption» or other illness that stopped them drinking. [@livingston2024] Mendelian randomization agrees: it «finds a causal relationship between
alcohol consumption and earlier age of onset of AD», and «suggests that any relationship between not
drinking and AD is due to survivor bias». The same *sick-quitter / referent-contamination + MR* adjudication
that
dissolved the mortality J-curve dissolves the dementia one -> [[The U-Shaped Association Artifact]]. This is
a second outcome reaching the *same* conclusion by a *different* literature (dementia cohorts + AD-MR), not
a restatement.


## Third outcome — cancer, and here there is *no safe threshold*

WCRF's Third Expert Report grades **alcohol a cause of many cancers** — mouth/pharynx/larynx,
oesophagus (squamous cell), breast, colorectum, liver and stomach (convincing/probable) — and IARC
classes alcoholic drinks a **Group 1 (established) human carcinogen**.
[@wcrf2018ter]
The recommendation is blunt: «For cancer prevention, it’s best not to drink alcohol.»

**The cancer axis behaves differently from the mortality axis on threshold.** Where Zhao's all-cause
harm begins at a *dose* (45 g/day pooled, 25 g/day women), the cancer risk has **no lower threshold**:
«there is no level of consumption below which there is no increase in the risk of at least some
cancers.» [@wcrf2018ter] The
site-specific numbers in the matrix are **the edge of the evidence base, not safe thresholds** (the
CLAUDE.md rule: a guideline number is first a marker of where the data thin out): breast «No threshold
... was identified» (FN38); the colorectal judgement is *based on intakes above* \~30 g/day (\~2 drinks,
FN37) and the liver/stomach judgements on intakes *above* \~45 g/day (\~3 drinks, FN36) — i.e. that is
where the graded evidence sits, not a level below which alcohol is safe.
[@wcrf2018ter]

**A genuine J-arm — instantly outweighed.** Alcohol «helps protect against kidney cancer (at least up
to 30 grams or two drinks per day), but this is far outweighed by the increased risk for other
cancers.» [@wcrf2018ter] So a
real protective association can coexist with net harm — the *net-effect-not-the-intended-effect* rule:
a single-site benefit is not a reason to drink when the whole-organism cancer ledger is negative.

**Not an independent-E witness (same-body / outcome-extension guard).** WCRF is a guideline synthesis
of the same observational cohort literature, on a *different outcome* (cancer incidence) — it neither
shares nor is independent of Stockwell/Millwood/Zhao's methods. It **extends the outcome menu** (cancer,
with a stronger no-threshold claim) rather than corroborating the mortality/stroke finding by an
independent route, so the page's `[E-independent]` convergence (Stockwell ∥ Millwood) is unchanged.
The cross-outcome pattern — no protective arm survives on mortality, stroke, dementia, *or* cancer — is
the wiki's synthesis, not WCRF's claim. [inferred from @wcrf2018ter]



## A distinct axis — drinking PATTERN, holding volume fixed `[Roerecke 2010]`

Every arm above is indexed to *average volume* (grams/week, drinks/day). Roerecke's SR+MA (14 studies,
31 estimates, 4718 IHD events) opens a **second axis the volume curves cannot see**: at the *same*
average intake, concentrating the alcohol into irregular heavy occasions carries higher
ischaemic-heart-disease risk than spreading it out.

- Irregular heavy drinking occasions («60 g of pure alcohol or 5 drinks per occasion at least monthly»)
  vs **regular moderate drinking at comparable average volume**: pooled random-effects «relative risk of
  irregular heavy drinking occasions compared with regular moderate drinking was 1.45 (95% confidence
  interval: 1.24, 1.70)» (fixed-effects 1.36), I²=53.9%; a detrimental effect «even for drinkers whose
  average consumption is moderate.»
  [@roerecke2010]
- The comparison **excludes abstainers and former drinkers**, so this is not a sick-quitter artifact:
  "Because we did not include an abstainer group in our analysis and used risk estimates that separated
  former drinkers from their analysis, it is unlikely that a sick-quitter effect ... influenced our
  findings." And it is conservative — non-differential misclassification biases the pooled estimate
  toward the null.
  [@roerecke2010]
- Roerecke's verdict: «the cardioprotective effect of moderate alcohol consumption disappears when, on
  average, light to moderate drinking is mixed with irregular heavy drinking occasions.»
  [@roerecke2010]

**Why this is a refinement, not a tension with the artifact verdict above** — the contrasts are different
quantities:

| Parameter | Roerecke 2010 | Millwood 2019 (this page) | Same quantity? |
|---|---|---|---|
| Contrast | irregular-heavy vs regular-moderate, **at equal average volume** | genetically higher vs lower intake (MR) | **NO** — pattern contrast vs volume contrast |
| Referent | regular moderate drinkers | genetically lower-alcohol | **NO** |
| Outcome | ischaemic heart disease (MI + coronary death) | myocardial infarction (and stroke) | partial |
| Effect | RR 1.45 (1.24, 1.70), heavy-episodic vs regular | MI RR 0.96 (0.78-1.18) per 280 g/wk, null | **NO** — different comparison |

The fourth column is NO on three rows: Roerecke measures a **within-drinker pattern effect at fixed
volume**; Millwood measures the **drinking-vs-not causal effect**. They are consistent — a given volume
can still be worse when binged even if drinking carries no net causal MI benefit. What Roerecke *presumes*
(that regular-moderate is cardioprotective vs not drinking) inherits this page's artifact critique; what
it robustly *shows* — pattern modifies risk at fixed volume — stands regardless. Honest composite:
**volume is the dominant axis, pattern is a real second axis**, and the decision-relevant form is *don't
concentrate a week's drinks into one or two heavy sessions* — a lever available even to someone unwilling
to cut total intake.

**This fills a gap GBD names explicitly.** GBD flagged the hole itself: «drinking patterns within a year
are assumed to be consistent; however, past work shows that drinking patterns, rather than average levels
of consumption such as standard daily drinks, might be related to different levels of risk».
[@gbd2018alcohol] Roerecke (2010) supplies
exactly the pattern-risk function GBD's population model could not — the composite covers a blind spot
GBD's own model explicitly names (an F-refinement across the two), not a contest.
[inferred from @roerecke2010; @gbd2018alcohol]



## The beverage-matrix story — *it's the red wine / resveratrol* is null at dietary doses `[Semba 2014]`

A common rescue of the J-curve is that the benefit is **not ethanol but the polyphenols in red wine** —
the *French paradox*, attributed to resveratrol. Semba's InCHIANTI cohort (783 adults 65+, 9-year
follow-up) tests it with a biomarker instead of a food-frequency proxy: 24-hour urinary resveratrol
metabolites.

- Resveratrol was **null on every outcome**: «total urinary resveratrol metabolite concentration was not
  associated with inflammatory markers, cardiovascular disease, or cancer or predictive of all-cause
  mortality.» Lowest-vs-highest quartile mortality HR «0.80 (95% CI, 0.54-1.17)», ns; incident CVD and
  cancer also flat across quartiles.
  [@semba2014]
- The verdict is scoped to *dietary* doses: «Resveratrol levels achieved with a Western diet did not have
  a substantial influence on health status and mortality risk of the population in this study.»
  [@semba2014]
- The biomarker is really a **wine-intake marker**: urinary resveratrol correlated with alcohol intake at
  Spearman «0.67 (P < .001)», and «urinary resveratrol levels are a valid biomarker of wine consumption.»
  [@semba2014]

**So the presumed active component of red wine does no measurable work at the doses a drinker actually
gets** — the same failure mode as coffee's *caffeine* (present but inactive for the outcomes) or the
refined-vs-whole-grain boundary (null on hard outcomes) -> [[Is the Food Category Doing Any Work]]: a
category benefit credited to a named sub-component that, measured directly, carries nothing. It does not rule out a supraphysiologic-dose *supplement* effect (the
trials use doses orders of magnitude above dietary, and one was halted early for renal toxicity) — but it
removes the *drink-red-wine-for-the-resveratrol* inference. Whatever ethanol does (stroke, BP, cancer,
above) it does regardless of beverage; the wine-specific benefit is **unmeasured-or-absent**, not
established — do not let a well-lit polyphenol biomarker stand in for the outcome that matters (the
streetlight caveat). Semba is a single moderate-tier cohort (a labelled null counterweight — no gold
resveratrol-outcome MA exists), so it **refutes a folklore claim**; it is not an independent-E witness for
the mortality/stroke verdict.
[inferred from @semba2014]



## Population scale — *no safe level*, and PAF is not a per-person effect `[GBD 2018; Rumgay 2021]`

The arms above are per-person risks. Two population-attributable-fraction (PAF) models add the
**population magnitude** — a *different unit*, not a larger version of the RRs, and read as such.

**GBD 2016 — the external guidance-null anchor.** Across all 23 outcomes weighted by global disease
burden, «the level of alcohol consumption that minimised harm across health outcomes was zero (95% UI
0·0-0·8) standard drinks per week» (1 drink = 10 g ethanol); alcohol «led to 2·8 million deaths» in 2016
and was the leading risk factor at ages 15-49.
[@gbd2018alcohol] GBD
reaches this by **re-doing the meta-analysis with a controlled reference category** — the same
sick-quitter correction Stockwell/Zhao applied — so it is population-scale *reinforcement of the same
artifact finding, not an independent method*. It does find a residual protective minimum for IHD and
diabetes («0·86 (0·80-0·96) for men and 0·82 (0·72-0·95) for women» at \~0·9 drinks/day) but «these
protective effects were offset by the risks associated with cancers, which increased monotonically».
[@gbd2018alcohol] It states the guidance
clash plainly: «the safest level of drinking is none. This level is in conflict with most health
guidelines, which espouse health benefits associated with consuming up to two drinks per day.»
[@gbd2018alcohol]

**Rumgay 2021 (IARC) — the cancer-burden leg, and it reinforces no-threshold with scale.** «741 300
(95% UI 558 500-951 200), or 4·1% (3·1-5·3), of all new cases of cancer in 2020 were attributable to
alcohol consumption», top sites oesophagus (189 700), liver (154 700), breast (98 300). Crucially for the
no-safe-threshold claim (WCRF, above), **light-moderate drinking is not exempt**: «moderate drinking (<20
g per day) contributed 103 100 (13·9%; 95% UI 82 600-207 200) cases», i.e. «moderate drinking still
contributed one in seven alcohol-attributable cases and more than 100 000 cancer cases worldwide», and
even «drinking up to 10 g per day contributed 41 300 (35 400-145 800) cases» (\~1 drink).
[@rumgay2021]

**Read PAF correctly (the unit guard).** A PAF is *how many population cases would not have occurred under
lifetime abstention* — prevalence × RR — NOT the risk to an individual drinker, and **not commensurable
with the cohort RRs on this page**. Rumgay's RRs are borrowed from WCRF's CUP; GBD's are its own
re-meta-analysis. So these two enter the page as **co-membership** (the same cross-outcome verdict at
population scale), not as effect sizes to line up against Stockwell/Millwood/Zhao. What they add is the
*magnitude and the guidance-null exercise*: even the fraction attributable to *moderate* drinking is a
six-figure case count — the population-scale form of *no protective arm survives, and cancer has no lower
threshold*.
[inferred from @gbd2018alcohol; @rumgay2021]

## Limits

- **All-cause mortality (Stockwell) and vascular disease (Millwood) are different endpoints** — matched
  only at the level of *is moderate drinking protective*. Neither covers the other's outcome set.
- **Measurement error flattens, it does not manufacture.** Both note self-reported intake is
  underreported; Millwood states this would make the real dose-response *shallower*, not create the
  monotonicity — so it cannot rescue the protective arm.
- **Millwood is one MR study in one (East Asian) population**; ALDH2 is common there and rare in
  Europeans, so the instrument transports imperfectly. The convergence with a Western-heavy
  observational meta-analysis is what carries it.
- Coherence, not validity (R1): the causal read rests on the MR assumptions (instrument validity, no
  pleiotropy — Millwood checks the latter via women as a negative control).

## References

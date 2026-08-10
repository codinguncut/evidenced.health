---
type: concept
question: Which modifiable exposures change the risk of developing autoimmune inflammatory disease, in whom, and by how much?
aliases: [Autoimmune Modifiable Risk Factors, Rheumatoid Arthritis Risk Factors, Modifiable Risk for Autoimmune Disease, Smoking and Rheumatoid Arthritis, Diet and IBD Risk, Fibre and Inflammatory Bowel Disease, Crohn Disease Risk Factors, Ulcerative Colitis Risk Factors]
authors: [Di Giuseppe, Daniela; Discacciati, Andrea; Orsini, Nicola; Wolk, Alicja; Qin, Baodong; Yang, Min; Fu, Haitao; Zhong, Renqian; Milajerdi, Alireza; Ebrahimi-Daryani, Nasser; Dieleman, Levinus A; Larijani, Bagher; Esmaillzadeh, Ahmad]
sources: [Di Giuseppe - Smoking Rheumatoid Arthritis Dose-Response Meta-Analysis 2014, Qin - Body Mass Index Rheumatoid Arthritis Dose-Response Meta-Analysis 2015, Milajerdi - Dietary Fiber Fruit Vegetable IBD Risk Meta-Analysis 2020]
cluster: autoimmune-modifiable-risk
nucleus: true
confidence: low
created: 2026-08-09
updated: 2026-08-09
self_critiqued: 2026-08-09
relationships:
  related_to:
    - Smoking and Mortality
    - Baseline Risk and the Relative-Absolute Split
    - Inflammation as a Modifiable Lever
    - Ectopic Fat and Depot-Specific Risk
    - Shared Modifiable Levers Across Age-Related Diseases
    - The Underivable Optimum
    - Dietary Fibre and Health
    - Measurement Error in Dietary Assessment
    - The U-Shaped Association Artifact
---

**Nucleus of the `autoimmune-modifiable-risk` cluster** — the canonical home for what modifiable
exposures do to the risk of developing an autoimmune inflammatory disease (incidence and risk factors,
NOT treatment of established disease — the same risk-vs-management line the wiki draws for other
conditions). It now spans **two distinct autoimmune diseases**: rheumatoid arthritis (RA), where the
dose-response evidence is gold-tier, and inflammatory bowel disease (IBD). It holds **three gold-tier
meta-analyses across two diseases**: smoking->RA and adiposity->RA (each RAISING risk), and dietary fibre /
fruit / vegetables->IBD (mostly LOWERING risk — but fibre is NULL for the UC subtype). The exposures and
diseases DIFFER across facets, so what the cluster licenses is **configuration** — a map of which lever
moves which disease, plus cross-facet STRUCTURAL observations — NOT an effect-magnitude ranking across
incommensurable exposures and NOT a shared-mechanism claim. The load-bearing emergent move (the recurrence
of ONE structure across two independently-studied diseases — in no single source) is the **decomposition
parallel**: each autoimmune disease partitions into subtypes on which the same exposure diverges (RA on
serotype; IBD on the CD/UC subtype split), so a subtype-pooled estimate misleads — it can **mask** a real
effect (a pooled IBD fibre estimate would hide the CD benefit) or **blur** a concentrated one (a pooled RA
smoking estimate dilutes the seropositive signal) — see the closing synthesis.

## Smoking and rheumatoid arthritis — the effect estimate

- **effect_measure / dose-response (relative, vs never-smokers).** Risk rises monotonically then flattens:

  | Pack-years | RR (95% CI) |
  |---|---|
  | Never smokers | 1.00 (referent) |
  | 1 to 10 | 1.26 (1.14 to 1.39) |
  | 11 to 20 | 1.70 (1.44 to 2.01) |
  | 21 to 30 | 1.94 (1.65 to 2.27) |
  | 31 to 40 | 2.02 (1.44 to 2.82) |
  | >40 | 2.07 (1.15 to 3.73) |

  [@digiuseppe2014smoking, Table 2]

- **population_and_comparator.** Adults; smokers by lifelong pack-year exposure vs never-smokers.
  Pooled from 3 prospective cohorts + 7 case-control studies (181,100 subjects, 4,552 RA cases).
  Cohorts were women-only; case-control mixed-sex. All observational (no RA-prevention RCT is feasible).
- **outcome.** Incident RA — a patient-important outcome (a serious chronic autoimmune inflammatory
  disease), not a surrogate.
- **dose_response_shape — a monotone rise to \~20 pack-years, then a PLATEAU at \~2x, held with
  uncertainty.** «increased risk of developing RA with increasing number of pack-years smoked up to 20
  pack-years, and then the relative risk stabilized approximately at the value of 2»
  [@digiuseppe2014smoking, Results].
  Three facts must travel with the plateau:
  - **Confidence interval:** the top category is imprecise — RR for >40 pack-years = 2.07 (1.15 to 3.73),
    a wide interval overlapping the 21-30 estimate (1.94, 1.65-2.27). The flattening is therefore partly
    wide-CI-at-the-edge, not a sharply located knee.
  - **Studied range (extrapolation boundary):** «The median of the highest category of number of
    pack-years analyzed in each study ranged between 15 and more than 55 pack-years, while the reference
    group for all studies was never smokers»
    [@digiuseppe2014smoking] —
    so the >40 arm sits near the sampling edge where data thin.
  - **Shape statistics:** «we observed a limited evi- dence of a non-linear relationship between
    pack-years of smoking and RA (P = 0.078). However, the restricted cubic spline model resulted in the
    best fitting model in terms of the Akaike Information Criterion (AIC) ... (AICsplines = -70.0;
    AIClinear = -57.4)»
    [@digiuseppe2014smoking] —
    the plateau is the best-fitting model but only weakly evidenced *as* non-linear.
- **uncertainty.** No between-study heterogeneity (Pheterogeneity = 0.32; I2 = 12.7%), leave-one-out
  overall RR 1.92-2.10, no publication bias (Egger P = 0.10); but all 10 studies are NOQAS-moderate,
  case-control studies carry recall bias, and residual confounding is plausible (case-control pooled RR
  2.19 vs cohort 1.83, the authors attribute to fewer confounders adjusted).
- **effect_modifiers.** RF serotype — a route-(b) effect modification (below).
- **confidence: low** — single gold MA, observational, opens the domain.

## The plateau is mechanistically motivated — distinct from a measurement artifact

The wiki's `[PRIOR — CONTESTED]` on dose-response knees/plateaus holds that a measured-monotone-then-flat
curve is *weak* evidence of a true plateau, because measurement error can hide a knee but not manufacture
one, so the operative default stays «every reduction pays». This case sits slightly differently from the
vault's other plateaus, and the difference is worth recording:

- Unlike the ESC fruit/veg plateau (an observed flattening with no offered mechanism) or the coffee
  plateau that *dissolved* into a smoking artifact (Grosso, on [[The U-Shaped Association Artifact]]),
  here the authors name a **saturation mechanism** for the flattening: «The ob- served non-linear shape
  of the dose-response associ- ation in this meta-analysis is compatible with this triggering mechanism»
  [@digiuseppe2014smoking, Discussion]
  — a *triggering* (threshold-then-saturate) immune process would plateau once the trigger is
  fully engaged.
- **But this is compatibility, not proof**, and it does not overturn the prior: the top-arm CI is wide,
  the non-linearity is only P=0.078, and mechanism licenses *direction* not *curve shape*
  ([[Net Effect vs Intended Effect]]). Held as a second explicit plateau **with a mechanistic rationale**,
  not as a demonstrated knee. The decision default is unchanged and conservative — see below.

## Effect modification by RF serotype — a route-(b) positive whose modifier is an OUTCOME subphenotype

Smoking's relative effect is larger for seropositive RA. Highest-vs-lowest pack-year category: RF-positive
RR «2.47 (95% CI 2.02 to 3.02; Pheterogeneity = 0.88), while it was 1.58 (95% CI 1.15 to 2.18,
Pheterogeneity = 0.39) among RF-negative cases. These estimates were statistically significantly different
(P-value 0.022)»
[@digiuseppe2014smoking, Discussion].

This is a genuine **route-(b)** finding, not the route-(a) arithmetic mirage: the *relative* effect (the
ratio itself) differs across strata with a significant heterogeneity test — the thing route (b) requires
and route (a) cannot produce -> [[Baseline Risk and the Relative-Absolute Split]]. Its mechanistic basis is
a gene-environment interaction: «smok- ing interacts with HLA-DR SE genes in triggering ... immunity
against citrullinated proteins» and «RF-positive RA is more likely to be associated with the HLA-DR4 shared
epitope ... than RF-negative RA»
[@digiuseppe2014smoking, Discussion].

**The load-bearing caveat: the modifier is a subphenotype of the OUTCOME, not a pre-exposure stratum of the
person.** RF status is measured at RA diagnosis, so this cannot stratify a never-diseased person for
targeting — nobody knows which serotype of RA they would develop. It is **etiologic heterogeneity**
(smoking specifically drives the seropositive, HLA-linked path), which strengthens the *causal*
interpretation of the smoking->RA association but supplies no actionable person-level stratifier. RF-negative
also rests on only 2 studies, so the contrast is imprecise.

## Adiposity (BMI) and rheumatoid arthritis — the effect estimate

The second RA exposure. A gold-tier SR + dose-response MA of 11 studies (7 case-control + 4 cohort;
Europe n=7, North America n=4; published 1994-2014), motivated because prior evidence was «contradictory».

- **effect_measure (relative, random-effects).** Higher adiposity raises RA risk, modestly:

  | Contrast | RR (95% CI) | I2 |
  |---|---|---|
  | Obese (BMI >30) vs non-obese (<30) | 1.25 (1.07 to 1.45) | 63% |
  | Obese vs normal weight (18.5-24.99) | 1.31 (1.12 to 1.53) | 60.1% |
  | Overweight (25-29.99) vs normal weight | 1.15 (1.03 to 1.29) | 46.3% |
  | Dose-response, per 5 kg/m2 increment | 1.03 (1.01 to 1.05) | 70.0% |

  [@qin2015bmi]

- **population_and_comparator.** Adults classified by BMI category; obese/overweight vs normal weight (or
  vs non-obese). **BMI self-reported in 7 of 11 studies** — a crude, error-prone adiposity proxy (the
  authors note BMI «cannot measure the percentage of body fat»), so measurement error attenuates toward the
  crude exposure -> [[Ectopic Fat and Depot-Specific Risk]], [[Measurement Error in Dietary Assessment]].
- **outcome.** Incident RA — the same patient-important outcome as the smoking arm.
- **dose_response_shape — positive and statistically NONLINEAR over the studied range, but with NO located
  knee and NO U/J arm.** «there was evidence of a nonlinear association between BMI and RA risk
  (Pnon-linearity = 0.005; Figure 4b)»
  [@qin2015bmi]. Two
  facts must travel with this:
  - **The nonlinearity is stronger than smoking's** (P=0.005 here vs P=0.078 for smoking) — yet the paper
    **does not locate a threshold/knee/plateau** and the text does not state the curve's concavity (only
    Figure 4b shows it). So the shape is *positive, nonlinear, knee-unlocated*; a bare threshold must not be
    read off it, and the per-5-kg/m2 coefficient is a single-regression summary that cannot itself show a
    knee -> [[Energy Adjustment and What a Diet Coefficient Means]].
  - **No U/J to adjudicate.** The referent is normal weight; underweight (<18.5) was not separately pooled,
    so there is no protective/elevated low-BMI arm reported — the low end is *understudied* (a G-gap), NOT a
    checked-and-cleared protective arm. The [[The U-Shaped Association Artifact]] discipline has no arm to
    test here; the honest statement is absence. **Studied range:** the obese category is open-ended (>30),
    so the high-BMI arm is imprecise and near the sampling edge.
- **uncertainty — the defining weakness is HETEROGENEITY, not imprecision.** I2 = 63-70% throughout, and
  meta-regression did NOT attribute it to region/gender/design/sample-size/year — the inconsistency is
  unexplained. No publication bias (dose-response Egger P=0.915, Begg P=0.532); robust to one-study-removal
  (obese vs non-obese 1.24-1.35). But the authors close on residual confounding: «the possibility of
  residual confounding cannot be ruled out in these studies»
  [@qin2015bmi] — this
  is the residue AFTER most studies adjusted for age/gender/smoking/alcohol/parity, not an unadjusted gap;
  and any residual smoking confounding would, if anything, bias the positive BMI->RA association TOWARD the
  null (smokers tend to be leaner while carrying higher RA risk), so it does not manufacture the finding.
- **effect_modifiers.** Higher in females (female obese vs non-obese 1.27, 1.04-1.54; proposed sex-hormone
  modifier); higher in cohort than case-control designs; ACPA serotype — but the direction is CONTESTED
  (below), unlike smoking's settled RF-positive signal.
- **mechanism (directional, marked — authors say it is unproven).** «Although the mechanism by which
  obesity or higher BMI could lead to RA remains unclear», candidate routes are adipose-tissue inflammation
  («Obesity is often considered a systemic inflammatory condition with increased levels of inflammatory
  cytokines, including tumor necrosis factor-alpha and interleukin-6»), leptin as a «pro-inflammatory
  adipokine» sustaining «autoreactive cell proliferation», altered sex-hormone metabolism, and shared
  genetic predisposition
  [@qin2015bmi]. This
  is a DIFFERENT pathway from smoking's HLA-citrullination immune triggering — the adiposity->cytokine/leptin
  route touches [[Inflammation as a Modifiable Lever]] on an autoimmune (not CVD-event) outcome.
- **confidence: low** — gold MA but observational, high unexplained heterogeneity, self-reported BMI,
  residual confounding acknowledged, effect modest.

## Smoking vs adiposity — a CERTAINTY comparison, not a magnitude ranking

The two RA exposures invite a *which is the bigger lever* question. The op-weave parameter table shows why
a magnitude ranking is **not licensed** — but a certainty comparison is, and it runs one way:

| Parameter | Smoking (Di Giuseppe 2014) | Adiposity (Qin 2015) | Same quantity? |
|---|---|---|---|
| Exposure metric | cumulative pack-years | BMI (kg/m2) | **NO** — incommensurable dose scales |
| Referent | never-smokers | normal weight / non-obese | **NO** — different referents |
| Top-category RR | 2.07 (1.15 to 3.73) at >40 py | 1.31 (1.12 to 1.53) obese vs normal | **NO** — different exposure ceilings + units |
| Per-unit dose RR | spline, no single per-unit reported | 1.03 (1.01 to 1.05) per 5 kg/m2 | **NO** |
| Heterogeneity I2 | 12.7% (none) | 63-70% (high, unexplained) | **YES** — smoking far more consistent |
| Publication bias | none (Egger 0.10) | none (Egger 0.915) | **YES** — both clean |
| Serotype modifier | RF-positive, robust (P-diff=0.022) | ACPA-positive pooled but CONTESTED | \~partial — same axis, different robustness |

- **Magnitude ranking — NOT licensed.** The four exposure-metric rows are all NO: a pack-year and a kg/m2
  are not comparable doses, and the referents differ, so *smoking is the stronger RA lever* cannot be read
  off the RR magnitudes. (That the top smoking RR \~2.0 exceeds the obese RR \~1.3 is *suggestive*, not
  established, because the exposure ceilings are set by different metrics.)
- **Certainty comparison — licensed, and it favors smoking.** The rows that ARE the same quantity
  (heterogeneity, publication bias, robustness of the serotype modifier) are comparable, and they run
  uniformly: smoking's estimate is homogeneous (I2 12.7%) with a robust route-(b) modifier; adiposity's is
  high-heterogeneity (I2 63-70%, unexplained) with a contested modifier and self-reported exposure. So on
  the Layer-1 axis (effect size × **certainty**), smoking is the better-ESTABLISHED RA lever; adiposity is
  the more provisional one.

## RA is not one disease — serotype etiologic heterogeneity across both exposures

A structural observation present in neither source alone: RA partitions on the ACPA/citrullination
(seropositive vs seronegative) axis — «distinct genetic etiologies of those two RA subsets» — and BOTH
modifiable exposures show serotype-specific signals (a random confounder would not respect the serotype
boundary). For SMOKING this strengthens the *causal* reading (a consistent RF-positive signal); for
ADIPOSITY it does NOT — the signal's *direction* is inconsistent (below), and a serotype signal that
cannot agree on which serotype is weak causal evidence, not strong. Note also that the two arms measure
DIFFERENT antibody markers — smoking's is RF-based (Di Giuseppe), adiposity's ACPA-based (Qin); related but
non-identical, so the shared *serotype axis* is an approximation, not one measured quantity. The two also
differ in how settled the direction is:

- **Smoking -> seropositive, settled.** RF-positive RR 2.47 vs RF-negative 1.58, significantly different
  (P=0.022), with an HLA-DR shared-epitope / citrullination mechanism.
- **Adiposity -> serotype-specific but direction CONTESTED.** The pooled subgroup reads «the association of
  BMI or obesity with RA risk in ACPA- positive RA rather than ACPA-negative RA»
  [@qin2015bmi], yet
  its own constituent studies point the OTHER way (Wesley: obesity->ACPA-negative; Pedersen: BMI selectively
  ACPA-negative; Lu: both), and the authors flag «the great heterogeneity may reflect modification» of the
  ACPA relationship. So adiposity's serotype direction is UNSETTLED.

The move is emergent-but-measured (type A held weak): the cluster of RA risk factors organizes along the
same outcome-serotype axis, but only smoking's arm is directionally settled — do NOT launder this into a
clean *both act on seropositive RA* parallel. Confidence stays low.

## Dietary fibre, fruit, and vegetables and IBD — the effect estimates (the second autoimmune disease)

The cluster's first non-RA facet: a gold-tier SR + dose-response MA (Milajerdi 2021) of 11 studies (12
effect sizes; published 1992-2018; 478,604 participants; Sweden/US/Australia/Denmark/multi-country) on
dietary fibre / fruit / vegetable intake -> incident IBD. **Design honesty:** the abstract frames it as
«prospective cohort studies», but inclusion was «All prospective cohort or nested case-control studies»
(6 cohorts + 5 nested case-control)
[@milajerdi2020ibd] — nested
case-control from a cohort keeps exposure prospective, but the cohorts-only framing overstates design purity.

- **effect_measure (relative, highest-vs-lowest intake category; random-effects).** All protective except
  fibre->UC:

  | Exposure -> outcome | RR (95% CI) | I2 | Verdict |
  |---|---|---|---|
  | Fibre -> UC | 1.09 (0.88, 1.34) | 0.0% | **NULL** |
  | Fibre -> CD | 0.59 (0.46, 0.74) | 0.0% | protective |
  | Fruit -> UC | 0.69 (0.55, 0.86) | 87.0% | protective (FRAGILE) |
  | Fruit -> CD | 0.47 (0.38, 0.58) | 32.1% | protective |
  | Vegetable -> UC | 0.56 (0.48, 0.66) | 72.0% | protective |
  | Vegetable -> CD | 0.52 (0.46, 0.59) | 78.9% | protective |

  [@milajerdi2020ibd]

- **population_and_comparator.** Adults + some adolescents (10-80 y); highest vs lowest intake category
  (a contrast, NOT a dose target). Exposure by FFQ (most) or bespoke questionnaire.
- **outcome.** Incident IBD and its two subtypes (UC, CD) — a patient-important autoimmune inflammatory
  disease, «a chronic, relapsing intestinal inflammatory disorder», not a surrogate.
- **The subtype split — *IBD is not one disease* (a B/F decomposition, the load-bearing finding).** Fibre
  is **NULL for UC (1.09) but protective for CD (0.59)**, while fruit and vegetables protect BOTH subtypes.
  The same exposure (fibre) diverging by IBD subtype is a genuine decomposition — and it is **not a
  heterogeneity artifact**: both fibre pooled estimates are homogeneous (I2 = 0.0%). «no significant
  association was found between dietary fiber intake and risk of UC (RR: 1.09; 95% CI: 0.88, 1.34; I2 =
  0.0%) ... However, pooling 6 effect sizes from 5 studies revealed a significant inverse association
  between dietary fiber intake and risk of CD (RR: 0.59; 95% CI: 0.46, 0.74; I2 = 0.0%)»
  [@milajerdi2020ibd]. Author's
  rationale: «UC is limited to the colon, whereas CD can occur anywhere throughout the GI tract ... some
  dietary fibers are fermented in the distal colon»
  [@milajerdi2020ibd].
- **dose_response_shape.** Fibre->CD nonlinear (Pnonlinearity < 0.001), «the highest risk reduction was seen
  for fiber intake >22 g/d», linear «additional 10 g/d ... associated with a 14% reduction in CD risk»
  [@milajerdi2020ibd]. **Carry the
  caveats:** the >22 g/d figure is the *studied high category*, not a validated knee (no CI given on a knee
  location, FFQ exposure); fibre->UC had NO gradient (Plinearity = 0.09; Pnonlinearity = 0.52). Vegetable
  nonlinear analysis was «not able» to be run (too few studies).
- **uncertainty — the protective fruit/veg arms are FRAGILE.** Two facts:
  - *Fruit->UC dissolves under subgrouping:* «the negative association disappeared in studies conducted
    exclusively in females and in those with a large sample size (for both, RR: 0.94; 95% CI: 0.69, 1.28)»,
    and the raw estimate carries I2 = 87.0%. An «inverted U-shaped nonlinear association» appeared (RRs >
    1.00 at 1-3 servings/d) but was nonsignificant (Pnonlinearity = 0.68)
    [@milajerdi2020ibd] — an
    unadjudicated U-arm, held as absence-of-verdict, not a protective plateau -> [[The U-Shaped Association Artifact]].
  - *Fruit->CD rests on 2 same-team, women-only cohorts:* «these 2 studies were done by the same team and
    that they recruited only women»
    [@milajerdi2020ibd] — NOT
    independent backing (shared team + single sex).
- **confounding / causal discipline (BLOCKING — these are the streetlight/confounding danger zone).**
  - *Reverse causation acknowledged but unaddressed:* preclinical/undiagnosed IBD causes GI symptoms that
    cut fibre/fruit/veg intake, manufacturing a spurious protective association. The authors flag the
    channel — «dietary intake by patients with IBD can change by the disease stage. Included studies did
    not provide sufficient data about disease severity»
    [@milajerdi2020ibd] — but
    report NO lag analysis and NO early-case exclusion, and some studies used baseline (not repeated)
    intake. Prospective/nested design mitigates but does not clear the long preclinical phase.
  - *Observed-healthy-population trap:* high fruit/veg intake co-travels with overall healthy lifestyle, and
    only 4 of 11 studies adjusted for dietary intake at all; fibre «is usually derived from legumes, whole
    grains, fruit, or vegetables», so the food matrix is not isolated — a pattern-derived estimate, not a
    causal effect of the isolated nutrient -> [[Is the Food Category Doing Any Work]].
  - *Measurement error:* «Given the use of FFQs for dietary assessment in most studies, misclassification
    of participants in terms of dietary intake should also be taken into account»
    [@milajerdi2020ibd] ->
    [[Measurement Error in Dietary Assessment]].
  - *Publication bias NOT tested* in the main text (no Egger/Begg) — weaker on this axis than the RA arms,
    which reported clean tests.
- **mechanism (directional, marked — a DIFFERENT pathway from the RA exposures).** Proposed route:
  fibre/fruit/veg «influence the composition and function of the gut microbiota to affect immune responses
  and immunological homeostasis», via SCFA/butyrate production, reduced colonic permeability, colonocyte
  energy [@milajerdi2020ibd]. This
  is a gut-microbiota/SCFA pathway — NOT the smoking->HLA-citrullination immune-triggering route nor the
  adiposity->adipokine/cytokine route. Human evidence is the observational associations; the SCFA chain is
  in vitro/animal, admitted directionally only.
- **confidence: low** — gold MAs but observational; the protective diet arms carry unaddressed reverse
  causation, food-matrix confounding, FFQ measurement error, untested publication bias, and (for fruit/veg)
  high heterogeneity and fragile subgroups.

## Closing cross-disease synthesis — are the autoimmune levers SHARED or DISEASE-SPECIFIC?

The cluster now spans two autoimmune diseases and three exposures, so the banked question is whether the
modifiable levers generalize across autoimmune disease or are disease-specific. The parameter table shows a
magnitude/lever comparison is **not licensed** (incommensurable exposures and diseases), and forbids the
tempting fake move of a shared inflammatory mechanism:

| Parameter | RA (Di Giuseppe / Qin) | IBD (Milajerdi) | Same quantity? |
|---|---|---|---|
| Exposures studied | smoking (pack-years), adiposity (BMI) — both RAISE risk | fibre (CD only), fruit, vegetables — LOWER risk (fibre NULL for UC) | **NO** — different exposures, opposite direction |
| Disease | rheumatoid arthritis (joints) | inflammatory bowel disease (gut) | **NO** — different organ system |
| Proposed mechanism | HLA-citrullination immune triggering (smoking); adipokine/cytokine (adiposity) | gut-microbiota / SCFA / colonic permeability | **NO** — distinct pathways |
| Subtype partition | serotype (seropositive / seronegative) | subtype (CD / UC) | \~parallel STRUCTURE, different axis |
| Exposure diverges across the partition? | YES (smoking->seropositive; adiposity contested) | YES (fibre->CD only, null for UC) | **YES** — same structural fact |

- **Levers are DISEASE-SPECIFIC, not shared.** No exposure in the cluster has been shown to move both RA and
  IBD: the RA risk factors (smoking, adiposity) and the IBD-associated exposures (fibre, fruit, vegetables)
  are disjoint, run in opposite directions, and act through distinct mechanisms. The rows that ARE the same quantity are the last
  two — the STRUCTURE of the evidence, not any shared cause. **Do NOT read a shared *inflammation lever*** off
  the two facets: *inflammation* is a label spanning distinct pathways (citrullination vs adipokine vs
  SCFA/microbiota), and treating it as one lever is the trumps/magic-bullet appetite the telos warns against
  -> [[Inflammation as a Modifiable Lever]]. This is the OPPOSITE of the cardiometabolic-vascular case, where
  a shared upstream substrate DOES license one lever across diseases
  -> [[Shared Modifiable Levers Across Age-Related Diseases]]; the autoimmune axis does not (yet) support it.
- **The emergent cross-source observation (type A, held weak — a methodological reading, not a novel
  mechanism): the decomposition parallel.** Each source performs its OWN subtype split (Di Giuseppe on
  serotype, Milajerdi on CD/UC); what no single source shows is that the SAME structure recurs across two
  independently-studied autoimmune diseases — in BOTH, the same exposure diverges across the partition
  (smoking concentrates on seropositive RA; fibre protects CD but not UC). So the cross-disease lesson is
  *methodological, not causal*: **an autoimmune-risk estimate pooled across subtypes can mislead** — masking
  a real effect (a pooled IBD fibre estimate would hide the CD benefit) or blurring a concentrated one (a
  pooled RA smoking estimate dilutes the seropositive signal). This is a type-A/C decomposition move — a
  claim about how to READ autoimmune-risk evidence — held weakly (it is a recurring *structure*, not a
  mechanism), and honest precisely because it claims no shared cause.
- **A named gap, NOT a smoothed parallel — smoking and IBD.** Smoking is known to affect IBD in a
  subtype-split, direction-OPPOSITE way (harmful for CD, apparently protective for UC) — itself the reverse of
  its RA-raising effect. That would make smoking the one exposure touching both diseases, and a striking third
  instance of the subtype-divergence structure. **But this MA is about diet, not smoking** — Milajerdi supplies
  no smoking-IBD estimate — so the observation is, explicitly NOT sourced here, and left as a
  **G-gap**: it is owed a dedicated smoking-IBD source before any cross-disease smoking claim is banked. Named,
  not asserted.

## Decision relevance

- **There is no safe low level for RA risk.** Risk is already elevated at 1-10 pack-years (RR 1.26,
  1.14-1.39) — «statistically significant even among those smoking less than 10 pack- years»
  [@digiuseppe2014smoking]. The
  decision-change is that even light smoking raises RA risk; the exposure has no threshold below which it
  is inert here.
- **The plateau does NOT license fatalism.** «It stabilized» above \~20 pack-years describes incident risk
  by cumulative exposure; it is not a claim that further smoking is harmless (it plateaus at *double* the
  never-smoker risk) nor that cessation stops paying. Whether stopping reduces RA risk is a separate
  question this MA does not answer (a G-gap; the authors' companion cessation cohort is not ingested here).
- **RA joins the big-rock case for not smoking, via a distinct mechanism.** Smoking is already the vault's
  largest mortality lever ([[Smoking and Mortality]], all-cause HR \~3.0); RA incidence is one more
  patient-important outcome it moves. But unlike the cardiometabolic-vascular diseases that share an
  upstream substrate ([[Shared Modifiable Levers Across Age-Related Diseases]]), RA runs through an
  immune-triggering / HLA-citrullination path — so the shared-substrate reading does not extend to it, and
  smoking's breadth across disease is mechanistically heterogeneous, not one pathway.
- **Adiposity is a MODEST, uncertain RA add-on — RA is not the reason to manage weight.** The RA-specific
  effect is small (obese vs normal 1.31; per-5-kg/m2 1.03) and high-heterogeneity, so for someone deciding
  about weight, RA risk is a minor additional consideration dwarfed by adiposity's cardiometabolic and
  mortality effects held elsewhere in the vault — exactly as RA is a minor add-on among smoking's harms.
  The decision-change is small: adiposity joins the modifiable RA risk factors, but does not by itself move
  a weight decision that the big-rock outcomes have not already settled. Absolute RA benefit of weight
  reduction would scale with baseline RA risk (route (a)), but the relative effect is modest to begin with.

- **For IBD, the decision-change is subtype-conditioned and modest in confidence.** Higher fibre/fruit/
  vegetable intake is *associated* with lower IBD risk, but: fibre's benefit is CD-specific (null for UC);
  the fruit/veg arms are confounder- and reverse-causation-exposed and partly fragile; and none is a causal
  effect of the isolated nutrient. So the honest advice is that a fibre-and-produce-rich diet is *consistent
  with* lower IBD (especially CD) risk and is already recommended for [[Dietary Fibre and Health|larger outcomes]] (mortality, CHD, T2D, colorectal cancer) — IBD-risk reduction is a *plausible additional
  reason at low confidence*, not an independent big lever, and «22 g/d» is a studied-category label, not a
  target. The exposure is one someone would want to increase anyway; IBD does not change that decision, it
  adds a low-confidence supporting reason.

## Gaps (G)

What the assembled sources collectively cannot answer (the wiki's own gap-identification).

- **Reversibility** — BOTH exposures are priced as cumulative/cross-sectional risk, not as the effect of
  *change*: neither the smoking-cessation nor the weight-loss dose-response on RA risk is in hand. Owed.
- **Adiposity's low-BMI arm + serotype direction** — underweight (<18.5) was not separately pooled (no
  U/J adjudicable), and the ACPA-serotype direction for adiposity is contested across the constituent
  studies; a cleaner-measured cohort or an MR instrument is owed to settle both.
- **Causality of the diet->IBD arms** — reverse causation (preclinical IBD altering intake) is acknowledged
  but never addressed (no lag analysis / early-case exclusion); food-matrix confounding is uncontrolled
  (4/11 studies adjusted for diet); publication bias untested. An MR instrument or a lag-analysed cohort is
  owed to move any diet->IBD arm from association toward effect.
- **Smoking and IBD** — the one exposure that may touch BOTH cluster diseases (subtype-split, direction
  opposite to its RA effect) is a named G-gap: no smoking-IBD source is held, so the cross-disease smoking
  observation stays, not banked. Closing it would give a third instance of the subtype-
  divergence structure and the cluster's first genuinely cross-disease exposure.
- **A third autoimmune disease** — the shared-vs-disease-specific verdict rests on two diseases (RA, IBD)
  showing DISJOINT levers; a third (e.g. type 1 diabetes, MS, psoriasis) would test whether disease-specificity
  is the rule or an artifact of these two happening not to overlap.
- **True shape** — for smoking, separating biological saturation from thinning data at high exposure; for
  adiposity, locating the significant nonlinearity's knee (unlocated here). Both need cleaner exposure
  measurement or a genetic instrument.

## The loop is open

No operation here has graded the *don't smoke / manage adiposity, to lower RA risk* or the *eat more
fibre/produce, to lower IBD risk* recommendations against a realized outcome. The synthesis says a
well-informed advisor *would* count RA among the harms of smoking and excess adiposity, and *would* count
lower IBD (especially CD) risk among the plausible benefits of a fibre-and-produce-rich diet; whether acting
on any of them lowered an individual's autoimmune-disease risk is a validity fact the wiki cannot see. All
are observational — no autoimmune-prevention RCT is feasible — and the diet->IBD arms carry unaddressed
reverse causation and food-matrix confounding on top of that, so they sit at lower confidence than the
smoking->RA arm.

## References

---
type: framework
question: Does eating eggs (and the dietary cholesterol they carry) change cardiovascular risk — for whom, in which direction, and how large?
aliases: [Eggs and Cardiovascular Disease, Dietary Cholesterol and CVD, Egg Consumption CVD, Are Eggs Bad for the Heart, Egg Cholesterol Heart]
authors: [Godos, Justyna; Micek, Agnieszka; Brzostek, Tomasz; Toledo, Estefania; Iacoviello, Licia; Astrup, Arne; Franco, Oscar H; Galvano, Fabio; Martinez-Gonzalez, Miguel A; Grosso, Giuseppe; Ma, Wancheng; Zhang, Yanyan; Pan, Li; Wang, Sijia; Xie, Kui; Deng, Shan; Wang, Rui; Guo, Chunjiang; Qin, Pei; Wu, Xiaoyan; Wu, Yuying; Zhao, Yang; Feng, Yifei; Hu, Fulan; Zhong, Victor W; Van Horn, Linda; Cornelis, Marilyn C; Wilkins, John T; Ning, Hongyan; Carnethon, Mercedes R; Greenland, Philip; Mentz, Robert J; Allen, Norrina B; Schwingshackl, Lukas; Bechthold, Angela; Boeing, Heiner]
sources: [Godos - Egg Consumption Cardiovascular Meta-Analysis 2020, Ma - Egg Consumption CVD Mortality, Zhong - Dietary Cholesterol Egg Consumption Cardiovascular Mortality 2019, Schwingshackl - Food Groups All-Cause Mortality Meta-Analysis 2017, Bechthold - Food Groups CHD Stroke Heart Failure Meta-Analysis 2019]
cluster: lipids
confidence: low
created: 2026-08-06
updated: 2026-08-28
self_critiqued: 2026-08-27
relationships:
  related_to:
    - LDL ApoB and Cumulative Exposure
    - The Descriptive-Normative Category Error
    - The U-Shaped Association Artifact
    - Is the Food Category Doing Any Work
    - The Observational-Trial Discordance
    - Surrogate Outcomes
    - Measurement Error in Dietary Assessment
    - Saturated Fat Intake and Replacement
---

**The de-escalator verdict.** Egg consumption is not a meaningful cardiovascular lever for the general
population — neither the harm the *dietary-cholesterol* scare predicts nor a real protection. Godos 2020,
the largest dose-response MA to date (39 prospective cohort studies over 38 cohorts, \~2 million people:
85,053 CHD / 25,103 stroke / 7,536 heart-failure / 147,124 CVD cases), lands on
«There is no conclusive evidence on the role of egg in CVD risk»
[@godos2020]. Every general-population
point estimate sits within a few percent of 1.00 with confidence intervals kissing the null, and the
whole body is GRADE **low** certainty. This is a *big-worry, small-effect* case — a Layer-1 finding that
the egg question ranks LOW and that the attention it attracts is an anti-signal, not a magnitude.

**Refinement from a second gold MA (Ma 2022, mortality endpoints).** The de-escalator holds for CVD /
CHD / stroke *incidence*, but Ma 2022 — a dose-response MA restricted to **mortality** — finds a small
but statistically-significant **all-cause-mortality** slope (per 1-egg/d RR 1.06, 1.02-1.10 — a
*general-population* continuous estimate) that Godos's incidence-weighted read did not surface, though the
categorical high-vs-low contrast is null (1.04, 0.99-1.09) and subgroup significance is restricted to
women · Americans · hyperlipidemia-adjusted studies · age >60 · long follow-up. Ma lands on a more
cautionary author verdict. It **shares most of Godos's cohorts**, so it is not an independent
witness — a **type-F** refinement plus a **type-D** headline friction, not a confidence-lifting
corroboration. Details, parameter table, and pool-overlap check in *Second gold MA — mortality endpoints*
below.

## The effect estimates — near-null, outcome-specific shape [@godos2020]

Summary relative risks (SRR) vs no consumption, from the two-stage random-effects dose-response model
(restricted cubic splines, 3 knots). Two «arbitrarily defined» reference doses are reported for
communicability: *moderate* = 4 eggs/week, *habitual* = 1 egg/day (7/week).

| Outcome (datasets/studies) | Moderate (4/wk) | Habitual (1/day) | Shape over 0-9 eggs/wk | Pnonlin |
|---|---|---|---|---|
| CVD incidence+mortality (17/14) | 0.95 (0.90-1.00) | 0.96 (0.92-1.01) | shallow dip: nadir \~0.95 at 3-5/wk, back toward null at high intake (nonlinearity NS) | 0.167 |
| CVD incidence only (12/9) | 0.93 (0.87-0.99) | 0.94 (0.89-0.99) | dips to \~0.93, returns toward null at high intake | 0.13 |
| CHD incidence+mortality (24/16) | 0.95 (0.88-1.02) | \~0.98 (0.91-1.07) | U/J: nadir \~0.95-0.96 at 2-4/wk, rises to \~1.01 at 9/wk | **0.042** |
| Stroke incidence+mortality (22/16) | 0.98 (0.93-1.02) | 0.95 (0.88-1.01) | flat/null across the whole range | 0.842 |
| Heart failure (6/4) | 1.04 (0.92-1.19) | **1.15 (1.02-1.30)** | **monotone increasing**: 1.01 -> 1.23 at 9/wk | 0.409 |

- **CVD/CHD: a shallow protective dip at moderate intake, attenuating at high** — the *protection* is at
  most a \~5% relative reduction and the CIs touch 1.00 at every dose. The abstract's headline
  (4/wk SRR 0.95; up to 1 egg/day CVD-incidence 0.94; CHD decreased up to 2/wk 0.96) is this dip. Only the
  **CHD** curve has statistically-supported nonlinearity (Pnonlin 0.042); the CVD nonlinearity is NS
  (0.167), so the CVD *dip* is a near-flat band around the null rather than a firm U.
- **Stroke: no association** at any dose (the one outcome GRADE-rated *moderate*, and it is «referring to
  no risk») [@godos2020].
- **Heart failure: the single harm arm** — monotone-rising, significant from 1 egg/day (1.15) upward,
  «especially in men from US cohorts». The mechanism is unknown; the authors flag sex as a possible
  *effect modifier* (risk up in men, down in women) and note the signal «suggests that alternative
  mechanisms could be responsible» (i.e. not the dietary-cholesterol pathway)
  [@godos2020]. Low certainty,
  4 studies, no low-risk-of-bias study available for it.

## The diabetic stratum — direction reverses (route-(b) effect modification, evidenced but low-certainty)

The one stratified result that changes a recommendation. In cohorts restricted to **diabetic
individuals** the direction of risk «was substantially inverted for all outcomes», peaking for CVD
incidence/mortality at **1 egg/day SRR = 1.22 (95% CI 1.08-1.39, I2 = 63%)** — a \~22% *increase*, opposite
to the general-population near-null/protective direction
[@godos2020]. In the stratified
analyses, egg's protective CVD signal appeared in studies **not** adjusting for diabetic status, «which on
the contrary was reported to potentially act as effect modifier toward the opposite direction»
[@godos2020].

- **This is genuine subgroup evidence, not an asserted modifier** — a pre-specified diabetic-status
  subgroup with a significant reversed estimate. But it is an **observational** subgroup at GRADE-low
  certainty (the false-positive-prone route (b) — [[Transportability]] / effect-modification), so it is a
  *credible flag*, not an established causal interaction. The authors' mechanism is a hypothesis:
  uncontrolled T2D shows «higher cholesterol synthesis and plasma lipid concentrations», so egg
  cholesterol may load an already-dysregulated lipid system
  [@godos2020].
- **Decision-change:** for someone with type 2 diabetes the near-null general-population read does not
  transport; habitual (daily) egg intake carries a low-certainty \~22% relative CVD-risk flag, and the
  conservative move is to treat eggs as a non-priority-but-watch item rather than a free food. For the
  non-diabetic general population, the reverse — no reason to restrict.

## Second gold MA — mortality endpoints (Ma 2022) [@ma2022egg]

Ma 2022 is a dose-response SR+MA of **24 observational cohort studies / 48 reports (\~11.9 M
participants)** restricted to **mortality** outcomes (all-cause · CVD · IHD · stroke), modelled with
restricted cubic splines. It was acquired as the second gold witness on this page. What it adds — and
does not — turns entirely on the same-quantity and pool-overlap checks below.

- **All-cause mortality (an outcome Godos's page did not hold):** highest-vs-lowest RR 1.04 (0.99-1.09,
  NS), but the **per-1-egg/d slope is a significant 1.06 (1.02-1.10)**, «each 1-egg/d increment was
  associated with a 5.6% higher risk of all-cause mortality», modelled **linear** (the P=0.008 is the
  significance of the linear trend, a *different* test from the CVD «linear trend» P=0.867). The
  continuous slope is significant **overall**; the categorical high-vs-low contrast is null (1.04,
  0.99-1.09); subgroup significance is restricted to **women, Americans, and hyperlipidemia-adjusted
  studies** (dose-response), and in the categorical analysis to age >60 (1.098), Americans (1.115),
  follow-up >=15 y (1.067), hyperlipidemia-adjusted (1.088).
- **CVD mortality:** per 1-egg/d **RR 1.00 (0.90-1.11), linear P=0.867 — null overall**, but the same
  high-risk strata turn positive (>60 y 1.143; Americans 1.149; FU >=15 y 1.137; hyperlipidemia-adjusted
  1.128). **IHD mortality** null (per 1-egg/d 1.01, 0.76-1.33). **Stroke mortality** null (0.90, 0.80-1.01,
  P=0.080).
- **Studied range / shape (carry both):** the exposure spans from **\~0.07/d** (lowest-category median) up
  to a highest-category median that is **outcome-dependent — \~1.1/d (CVD) to \~1.5/d (stroke)**, with
  all-cause \~1.23/d; every curve is modelled **linear over that range — no U/J and no protective lower
  arm** on any mortality endpoint. The author verdict «it may be prudent to avoid high egg consumption»
  extrapolates *above* the studied top (\~1.1-1.5/d depending on outcome), where there is little data — a
  studied-range caution, not a located threshold.
- **The hyperlipidemia-adjustment unmasking — a DIFFERENT structure from the diabetic reversal, not
  the same one.** Ma found the all-cause signal appeared *after* adjusting for hyperlipidemia: «people
  who have hyperlipidemia are likely to reduce their daily cholesterol consumption but still have a
  higher risk of death» [@ma2022egg] — i.e. dyslipidemic
  people cut eggs, which confounds the crude association *toward* the null; the adjustment removes that
  downward confounding and **unmasks a general-population association** (Ma's own reading is reverse
  causation / confounding, «a diagnosis of hyperlipidemia is likely to confound the association»
  [@ma2022egg]). **This is NOT the same object
  as Godos's diabetic reversal.** Godos's is a genuine *individual-level* subgroup (cohorts of diabetic
  people, estimate reverses) — route-(b) effect modification. Ma's is a *study-level* covariate marker
  (studies that statistically adjusted for hyperlipidemia), and Ma ran **no** individual-level
  hyperlipidemia stratification — so its inference runs the *opposite* way (adjustment reveals a signal
  for *everyone*, it does not locate a more-harmed stratum). They converge only loosely as a
  **dysmetabolic *theme***, on shared cohorts — do not read them as one mechanism or as mutually
  reinforcing effect-modification evidence.

### Parameter table — Godos vs Ma (the same-quantity check)

| Parameter | Godos 2020 | Ma 2022 | Same quantity? |
|---|---|---|---|
| Design | dose-response MA, 39 studies / 38 cohorts, \~2 M | dose-response MA, 24 studies / 48 reports, \~11.9 M | both obs-FFQ dose-response MA — **yes (class)** |
| Included cohorts | NIH-AARP, PURE, CKB, Zhong's ARIC/MESA/FHS..., WHI, Moli-sani, EPIC-Spain, Guangzhou, NLCS, NIPPON... | **substantially overlapping** (NIH-AARP, PURE, CKB, **Zhong 2019**, WHI, Moli-sani, EPIC-Spain, Guangzhou, NLCS, NIPPON, Golestan, PHS...; Ma is mortality-only so carries some mortality-specific cohorts) | **NO — large overlap, not independent** |
| Exposure contrast | per-egg vs no consumption; 4/wk, 1/day | per 1-egg/d; highest (\~1.1-1.5/d) vs lowest (\~0.07/d) | comparable per-egg — **yes** |
| Primary outcome | CVD/CHD/stroke/HF **incidence + mortality** | all-cause / CVD / IHD / stroke **mortality only** | **NO — Godos pools incidence+mortality; Ma is mortality-only + adds all-cause** |
| CVD estimate | CVD inc+mort SRR 0.95 (0.90-1.00) at 4/wk (slight dip) | CVD **mortality** per 1-egg/d 1.00 (0.90-1.11) (flat) | different endpoint; both near-null, opposite tiny tilt |
| Dose-response shape | shallow **U/J** (CHD Pnonlin 0.042) | **linear**, no U/J (all outcomes) | **NO — nonlinear dip vs linear** |
| Harm stratum | **diabetic** subgroup reverses (CVD 1.22) | **hyperlipidemia-adjusted / American / women / >60 / >=15 y** turn positive | convergent *theme* (dysmetabolic/high-risk), different modifier variables |
| Certainty tool | GRADE (low; stroke moderate) | **NUQUEST** (67% neutral / 33% good); no GRADE | different instrument — not directly comparable |

[inferred from @godos2020; @ma2022egg]
**Verdict: type-F (+ embedded type-D), NOT independent-E.** The two MAs draw on **substantially the
same cohorts** — Ma's Table 1 includes Zhong 2019, NIH-AARP, PURE, CKB, WHI, etc., which overlap Godos's
pool (the overlap is *this page's* cross-source comparison, not a statement Ma makes about a prior MA) —
so *two gold MAs agree* earns **no `[E-independent]` token and no confidence lift** — a RAG over one reproduces the
other's near-null. Different bylines (Godos = Italian Grosso/Godos group; Ma = Shenzhen group) do **not**
rescue independence when the underlying data are shared. What Ma legitimately contributes is
**type-F refinement**: (i) a **new outcome** (all-cause mortality) with a small significant linear slope;
(ii) a **mortality-only** read where Godos combined incidence+mortality; (iii) a **linear** shape that
**undercuts** Godos's shallow protective dip (see *The U-shaped-arm read*); (iv) a **loosely convergent
dysmetabolic *theme*** — though Ma's hyperlipidemia signal is a study-level confounding-adjustment marker,
a *different* object from Godos's individual-level diabetic subgroup (see the unmasking note above), not a
second effect-modification witness. Embedded in it is a **type-D friction**: Ma's
«prudent to avoid high egg consumption» / «moderate egg intake» is more cautionary than Godos's «no
conclusive evidence» and this page's de-escalator read — a friction driven mainly by the all-cause
endpoint and stratum-concentrated signals, **not** a contradiction on general-population CVD (there the
two agree: near-null). Held as a refinement, not filed as a standalone tension page.

## Why the *eggs are bad* scare is largely unsupported — dietary cholesterol is a weak serum-cholesterol lever

[inferred from @godos2020] The scare rests on a broken
two-step syllogism: (1) *eggs are high in cholesterol* (true — \~180 mg per medium egg
[@godos2020]), and (2) *therefore
eggs raise blood cholesterol and CVD*. Step 2 is where it fails. This is a
[[The Descriptive-Normative Category Error]]: a food's cholesterol **content** (a compositional
descriptor) is silently promoted to a **serum-cholesterol / CVD effect** (a causal claim), when the
dietary->serum transmission is weak for most people.

- **Only a subset are *hyper-responders*.** Godos notes that a minority of individuals «suffer of an
  abnormal rise in circulating LDL cholesterol (thus described as "hyper responders") as a result of an
  increase[d] fractional absorption and/or endogenous cholesterol synthesis in response to dietary
  cholesterol intake» [@godos2020]
  (the exact fraction is OCR-lost at the chunk boundary — presented qualitatively). For most people
  dietary cholesterol barely moves serum LDL, because absorption and endogenous synthesis
  homeostatically compensate — a *net-effect-not-intended* / whole-organism-compensation case.
- **The causal lever for ASCVD is apoB particle number, reached mainly by OTHER routes.** The disease is
  caused by cumulative apoB-particle exposure, not by cholesterol *mass* per se, and the modifiable
  inputs to serum apoB/LDL are dominated by genetics and by saturated/trans fat, not by ingested
  cholesterol -> [[LDL ApoB and Cumulative Exposure]], [[Saturated Fat Intake and Replacement]]. So even
  granting LDL/apoB *causes* ASCVD, eggs are a weak input to that lever for the non-hyper-responder — which
  is exactly what the near-null population dose-response shows. The corrective is *constructive*: judge
  eggs on their evidenced outcome dose-response (near-null), not on their cholesterol content.
- **Guidance already moved this way.** The AHA advised «up to one egg per day» in 2000 and «nearly 10
  years later the US Dietary Guidelines Advisory Committee eliminated cholesterol restrictions from the
  latest US dietary guidelines»
  [@godos2020] — the guidance-null
  agrees with the de-escalator read here.

## The egg is a whole food, not a cholesterol delivery vehicle

[inferred from @godos2020] -> [[Is the Food Category Doing Any Work]].
Isolating egg cholesterol from the egg is the food-category error in miniature: the whole egg also carries
choline (a TMAO precursor via gut microbiota — a *candidate* competing harm mechanism, human-evidenced only
at the surrogate TMAO level, not outcomes), phospholipids, lutein/zeaxanthin, and high-quality protein.
Godos lists these as the reason the net cardiovascular signal is a wash of opposing mechanisms rather than
a clean cholesterol effect. The decision-relevant exposure is the specified food and its preparation
(a boiled egg is not egg-plus-bacon — the authors flag «uncontrolled risk factors associated with egg
consumption (i.e., bacon)» as a confounder in the male heart-failure signal)
[@godos2020].

## Certainty, design, and what would move it

- **GRADE low for all outcomes but stroke** (moderate, at no risk). All 39 studies scored moderate or
  serious risk of bias (ROBINS-I); heterogeneity was high and «rather unexplained»
  [@godos2020].
- **Both MAs are entirely observational FFQ cohorts, and largely the SAME cohorts** — so they estimate
  habitual self-reported egg intake, carrying the domain's binding constraint, dietary measurement error
  -> [[Measurement Error in Dietary Assessment]] (Ma: «all egg consumption was self-reported via
  questionnaires or interviews» [@ma2022egg]; 21/24 studies
  used a single baseline FFQ) — and the near-null/flat dose-response inherits it (a real gradient could be
  attenuated toward the null; a flat curve is weak evidence of no gradient). Ma graded with **NUQUEST**
  (67% neutral, 33% good; no study poor), not GRADE, so no cross-MA certainty comparison is clean.
  Reverse causation is unaddressed: the authors concede
  «potential reverse causation (i.e., change in dietary intake due to diagnosed medical condition or
  disease) ... [has] been not investigated»
  [@godos2020].
- **The authors' own GRADE caveat (a method-not-domain point):** «the GRADE system may not be the best
  suit for assessing evidence in nutritional epidemiology, as by definition it tends to underestimate the
  strength of the evidence due to the observational nature of the studies»
  [@godos2020] — a self-interested
  read (it argues their own low grades understate the truth), noted, not adopted.

## The contested headline (Zhong 2019) — reconciled with the pool, not a contradiction

Zhong 2019 (JAMA) is the study behind the *eggs are bad again* headlines: an IPD pooled analysis
of **6 US cohorts** (29 615 people, median 17.5 y, max 31.3 y) reporting that **dietary cholesterol** and
egg intake are associated with higher incident CVD and all-cause mortality. Its headline is a
*dietary-cholesterol* claim, per +300 mg/d:
«Each additional 300 mg of dietary cholesterol consumed per day was significantly associated with higher
risk of incident CVD (adjusted HR, 1.17 [95% CI, 1.09-1.26]; adjusted ARD, 3.24% [95% CI, 1.39%-5.08%])
and all-cause mortality (adjusted HR, 1.18 [95% CI, 1.10-1.26]; adjusted ARD, 4.43% [95% CI, 2.51%-6.36%]).»
[@zhong2019egg].
Godos pools Zhong's ARIC/MESA/FHS cohorts and still lands near-null — so the divergence has to be
explained at the parameter level, not waved at. The parameter table does that; the answer is that the two
are **mostly not measuring the same thing**.

### Parameter table — Zhong 2019 vs the pooled MAs (the same-quantity check)

| Parameter | Zhong 2019 (JAMA) | Godos 2020 / Ma 2022 (pooled MAs) | Same quantity? |
|---|---|---|---|
| Design | IPD pool of **6 US cohorts**, N=29 615, single baseline FFQ | dose-response MAs, \~2 M / \~11.9 M, obs-FFQ | both obs-FFQ, but **Zhong's cohorts are INSIDE the MA pools** — not independent |
| Headline exposure | **dietary cholesterol**, per +300 mg/d (CVD 1.17; mortality 1.18) | **eggs**, per-egg / categorical | **NO — nutrient (DC) vs food (egg)** |
| Egg estimate (matchable) | per **+0.5 egg/d**: CVD 1.06 (1.03-1.10); all-cause mort 1.08 (1.04-1.11) | Godos 1/d CVD 0.96 (0.92-1.01); Ma 1/d all-cause 1.06 (1.02-1.10) | **NO exact — 0.5-egg vs 1-egg vs categorical**; directionally Zhong-US runs *above* the pooled near-null |
| Egg after adjusting for dietary cholesterol | CVD **0.99 (0.93-1.05)**; all-cause **1.03 (0.97-1.09)** — NS | MAs do not adjust for DC | Zhong's own egg signal **vanishes** once DC is held — the egg HR was a cholesterol proxy |
| Population | **US-only**, mean DC \~285 mg/d (US \~290 vs global 228), overnutrition context | pool **non-US** (CKB China, PURE \~50 countries) that are neutral/protective | **NO — Zhong is a high-intake US subset of the MA pool** |
| Framing | **absolute** ARD over max 31.3 y (+300 mg DC: CVD 3.24%, mort 4.43%); «modest» | relative RR/SRR only | Zhong adds an absolute layer; magnitudes «modest but consistent» |
| Dose-response shape | **monotone, no U/J** (all Pnonlin 0.19-0.83) | Godos shallow U/J (CHD 0.042); Ma linear | Zhong agrees with **Ma (linear)**, against Godos's protective dip |
| Confounding fragility | DC->CVD falls to **1.13 (0.97-1.31), NS** after adjusting eggs+red meat; DC->mortality 1.13 (0.99-1.27) NS after eggs | high, «rather unexplained» heterogeneity | both confounding-fragile; Zhong's own DC signal is co-adjustment-unstable |

[inferred from @zhong2019egg; @godos2020; @ma2022egg]
**Verdict — the type-D friction largely DISSOLVES; it is not a headline contradiction on general-population
eggs.** Four gaps, not one disagreement, separate Zhong from the pool:

- **Different exposure.** Zhong's causal claim is about **dietary cholesterol the nutrient**; its egg HR
  attenuates to non-significance (0.99 / 1.03) once DC is adjusted
  [@zhong2019egg]. The
  MAs test **eggs the food**. «Eggs are bad» is a mis-headline of a dietary-cholesterol finding.
- **Different population, diluted in the pool.** Zhong is US-only at high DC intake, in «the context of the
  current US diet, in which overnutrition and overweight/obesity are more common than malnutrition»
  [@zhong2019egg], and
  «generalizing our results to non-US populations requires caution»
  [@zhong2019egg]. When
  Godos pools those 29 615 US participants into \~2 M alongside neutral/protective non-US cohorts (CKB,
  PURE), the US signal is **washed out** — the near-null pool is a between-population average, and on
  *eggs specifically* Zhong-US runs a touch higher than that average (the same dysmetabolic/high-risk
  direction as Godos's diabetic reversal), not against it.
- **Different framing.** JAMA led with an **absolute** risk difference accrued over up to 31.3 years at a
  large +300 mg/d contrast; the authors call the relative magnitudes «modest but consistent»
  [@zhong2019egg]. A
  «3-4%» ARD headline and a «near-null RR» are compatible descriptions of one modest effect.
- **Co-adjustment fragility cuts toward the de-escalator.** Zhong's own DC->CVD signal loses significance
  once its carrier foods are adjusted (1.13, 0.97-1.31)
  [@zhong2019egg] — DC and
  eggs/meat are too collinear to identify cleanly, and both remain observational, single-FFQ, and unable
  to «establish causality»
  [@zhong2019egg].

**NOT type-E.** Zhong's 6 cohorts sit *inside* the Godos/Ma pools, so this is a contained primary study
vs the meta-analytic average of a set it belongs to — a type-B exposure disambiguation (nutrient vs food)
plus a type-F refinement, never an independent witness. The de-escalator verdict stands for the
general population; Zhong sharpens *why* the headline reads harsher than the pool without overturning it.

## The U-shaped-arm read

The CVD/CHD *moderate-intake protection* is an **unadjudicated protective lower arm** in the sense of
[[The U-Shaped Association Artifact]]: a shallow observational dip that has survived only covariate
adjustment (the weak check), with no referent-correction or genetic/MR instrument isolating it. By that
concept's decision rule it is *not established* as a real benefit — which coincides with the de-escalator
read (there is no protective claim to bank). Notably the outcome with a plausible mechanism (heart
failure) shows a *monotone* curve and the diabetic stratum *reverses* — the shape is outcome- and
stratum-specific, exactly the pattern the concept predicts.

**Ma 2022 strengthens the "not established" read: the protective dip did not replicate on mortality
endpoints** [@ma2022egg]. Where Godos found a shallow
protective U/J for CVD/CHD *incidence+mortality*, Ma's four mortality curves (all-cause · CVD · IHD ·
stroke) are each **linear over the studied range with no protective lower arm** — if anything the
all-cause slope tilts to harm. A protective arm that appears on one MA's incidence-weighted endpoint and
vanishes on a second (overlapping) MA's mortality endpoint is the opposite of a robust benefit
-> [[The U-Shaped Association Artifact]].

## Decision relevance

[inferred from @godos2020; @ma2022egg]
The wiki's own layer-3 synthesis over the two gold MAs — the per-stratum reads below are reasoned from
their estimates, not lifted from either source's own recommendation.

- **General population:** eggs are near a non-lever for cardiovascular *events* — do not restrict on CVD
  grounds, do not count as protective. Two low-certainty caveats sit at high habitual intake (>=1 egg/day):
  heart failure (Godos, monotone) and a small all-cause-**mortality** slope (Ma, +5.6% per egg/d, linear,
  but stratum-concentrated and NS as a categorical high-vs-low contrast, 1.04, 0.99-1.09). The question
  ranks LOW; spend attention on the big rocks (SFA/apoB, adiposity, smoking, BP), not on egg count.
- **Diabetic stratum (Godos — individual-level effect modification):** Godos's *diabetic* subgroup
  reverses (\~22% relative CVD-risk increase at \~1 egg/day) — a genuine route-(b) subgroup (cohorts of
  diabetic people). Treat habitual daily egg intake as a watch-item for this stratum, not free; the
  general-population near-null does not transport here. (Low certainty, observational.)
- **Hyperlipidemia (Ma — a study-level marker, NOT an individual stratum):** Ma's all-cause/CVD-mortality
  signals strengthen in studies that *adjusted for* hyperlipidemia — a study-level covariate, not an
  individual-level subgroup, and Ma reads it as reverse-causation/confounding (dyslipidemics cut eggs)
  that unmasks a **general-population** slope. This is NOT evidence that eggs are more harmful *in*
  hyperlipidemic people, and it does not combine with Godos's diabetic subgroup into a single evidenced
  *T2D-OR-hyperlipidemia* contraindication. Do not treat it as an individual contraindication.
- **Hyper-responders:** a subset whose serum LDL rises materially to dietary cholesterol; if identified
  (e.g. by measuring the response), dietary cholesterol becomes a live lever for *them* specifically.
- **Frame as substitution:** the realistic alternative to eggs at breakfast matters (eggs vs refined-carb
  cereal vs processed meat) more than the eggs themselves; judge the meal, not the egg.

<div class="recent-update" data-last-updated="2026-08-28">

## Open loop

Coherence, not validity (R1): this page says what the *evidence* supports about egg->CVD for identified
strata; the loop is open — no operation here grades the recommendation against a realized outcome.
Now two gold MAs (Godos 2020 · Ma 2022), but they **share most cohorts** — so `confidence: low` holds:
the second MA is a type-F refinement on an overlapping observational base, not an independent witness,
and the two now *diverge* on the headline caution (a friction, not a resolved question). Both are
FFQ-cohort MAs bound by dietary measurement error. `confidence` is NOT lifted by *two MAs agree* because
their agreement on the near-null is laundered through shared data. The contested-headline source is now
held: Zhong 2019 (JAMA) is reconciled above as a *different-exposure / different-population / different-
framing* study whose cohorts are already in the pool — it sharpens the de-escalator rather than
overturning it, and did **not** lift `confidence` (it is a contained subset of the MA pools, not an
independent witness). Still AWAITS a dietary-cholesterol / egg **RCT-on-lipids** source to harden the
mechanism leg (the dietary-cholesterol -> serum-LDL transmission), which no held source supplies.

</div>

<div class="recent-update" data-last-updated="2026-08-28">

## Refinement — the DIfE/Boeing 12-food-group series (2026-08-28)

The DIfE/Boeing series reproduces the near-null CVD reading and adds an **outcome-specific
divergence**: eggs are null for CHD (RR 1.00, 0.95-1.06) and stroke (0.99, 0.93-1.05) but carry a
**positive heart-failure association** (RR 1.16, 1.03-1.31, per 50 g/d, MODERATE) — the within-CVD
split this page's CHD/stroke focus would otherwise miss.
[@bechthold2019] The
all-cause mortality cell is directionally positive but **very-low grade and non-significant** (RR
1.15, 0.99-1.34).
[@schwingshackl2017mort] Full
cross-outcome placement -> [[Food Groups and Health Outcomes - A Dose-Response Matrix]].

</div>

## References

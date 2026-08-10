---
type: concept
question: Does a cheap insulin-resistance readout (TyG index, TG/HDL) predict cardiovascular events well enough to stratify with — and is it a target to steer toward or only a marker to read?
aliases: [TyG Index, Triglyceride-Glucose Index, TG/HDL Ratio, Insulin Resistance Marker, IR Surrogate, Metabolic Risk Marker, Insulin Resistance and Cardiovascular Risk]
authors: [Liu, Xiao; Tan, Ziqi; Huang, Yuna; Zhao, Huilei; Liu, Menglu; Yu, Peng; Ding, Xiaobo; Wang, Xiaozhen; Wu, Jing; Zhang, Manli; Cui, Meizi; Zhang, Xiaohong; Li, Jun; Zheng, Shuiping; Luo, Qiuyun; Zhou, Chunmei; Wang, Chaoyang]
sources: [Liu - Triglyceride-Glucose Index Cardiovascular Mortality Meta-Analysis 2022, Ding - Triglyceride-Glucose Index ASCVD Incidence Meta-Analysis 2021, Zhang - Fasting Insulin and Insulin Resistance Cardiovascular Mortality Meta-Analysis 2017]
cluster: ir-surrogates
nucleus: true
confidence: low
created: 2026-08-09
updated: 2026-08-09
self_critiqued: 2026-08-09
relationships:
  related_to:
    - LDL ApoB and Cumulative Exposure
    - Surrogate Outcomes
    - Ectopic Fat and Depot-Specific Risk
    - Inflammation as a Modifiable Lever
    - Baseline Risk and the Relative-Absolute Split
---

Opens the `ir-surrogates` cluster. **The triglyceride-glucose (TyG) index is a cheap fasting readout of
insulin resistance that PREDICTS cardiovascular events in the general population — but its predictive
signal splits by outcome, and it is a marker to stratify with, not a lever to pull.** TyG is computed
from two routine labs: «The TyG index was cal- culated using the following equation: TyG = Ln (TG [mg/
dL] × fasting glucose [mg/dL]/2)»
[@liu2022tyg].
Liu positions it as a surrogate for insulin resistance itself: the TyG index «is considered a reliable
surrogate marker of insulin resistance», an accessible alternative to the hyperinsulinemic-euglycemic
clamp
[@liu2022tyg].
So TyG is a **surrogate for a surrogate**: a lab readout that stands in for insulin resistance, which
is itself a driver several steps upstream of an event.

## The decision-relevant finding: incidence-positive, mortality-null `type-C (provisional)`

Liu's own headline is a *split* that a one-line *TyG predicts CVD* gloss erases. Highest vs lowest TyG
category, general population, 12 cohort studies / 6,354,990 participants (no RCT met inclusion):

| Outcome | HR (highest vs lowest) | 95% CI | I2 | studies (n) | GRADE certainty |
|---|---|---|---|---|---|
| Coronary artery disease (CAD) | 2.01 | 1.68–2.40 | 0% | 3 (30,054) | moderate |
| Composite CVD (incidence) | 1.46 | 1.23–1.74 | 82% | 5 (259,757) | very low |
| Myocardial infarction (MI) | 1.36 | 1.18–1.56 | 35% | 2 (5,614,862) | very low |
| Cardiovascular mortality | 1.10 | 0.82–1.47 | 76% | 3 (377,091) | very low |
| All-cause mortality | 1.08 | 0.92–1.27 | 87% | 4 (521,694) | very low |

«Compared with the lowest TyG index category, the highest TyG index was related to a higher incidence of
coronary artery disease (CAD) ... myocardial infarction (MI) ... and composite cardio- vascular disease
(CVD) ... However, there was no association between the TyG index and mortality (cardiovascular mortality
... or all-cause mortality ...)»
[@liu2022tyg].
The two mortality CIs both cross 1 — this is a **no-meaningful-association** result on the outcomes
people weight most, not merely a weaker positive. Do not round it up to *predicts mortality*. Whether the
null is a true absence or a power/follow-up artifact is open — Liu attributes it to «the limited number
of included studies or insufficient follow-up time» and notes other (non-general) populations do show a
mortality signal. Shape is therefore **outcome-specific**, exactly as on [[Surrogate Outcomes]]. And the mortality-null
is **not uniform across IR readouts**: the HOMA-IR composite (insulin x glucose) shows a modest
mortality signal where both TyG and fasting insulin alone are null-to-borderline — though whether that
gap is the *measure* or the *population* (Zhang's non-diabetic Western pool vs the general/Asian TyG
pool) is unidentified (Zhang 2017, below).

## Effect estimate

- **Effect measure (relative only).** Categorical HRs above; dose-response per 1-unit TyG increase:
  CAD HR 1.35 (95% CI 1.02–1.79, I2=94%), CVD HR 1.23 (95% CI 1.12–1.36, I2=89%). Liu reports **no
  absolute risks** — a large relative HR on an unstated baseline is not yet a decision; the absolute
  layer is a G-gap here -> [[Baseline Risk and the Relative-Absolute Split]].
- **Population / comparator.** Adult general population (age >18), free of established CVD at baseline;
  highest vs lowest TyG category. NOT a diabetic / established-disease population (those are excluded).
- **Outcome.** CAD, MI, composite CVD *incidence* (positive); CV and all-cause *mortality* (null).
- **Dose-response shape.** Positive and «linear» over the studied range (P-nonlinear 0.3807 CAD, 0.0612
  CVD)
  [@liu2022tyg].
  The studied TyG range spans roughly 6.4–12.4 (category cutpoints in Table 1); the linear read is only
  «over the studied range» — no threshold or knee is located, and Liu explicitly leaves cutoff values to
  future work. Monotone-over-range is weak evidence of a true monotone curve (a single per-category
  display cannot show a knee).
- **Uncertainty.** Wide, and driven by high heterogeneity (I2 up to 87–94% on the pooled and dose
  curves) plus all-observational design. GRADE: **moderate for CAD only** (upgraded for a large effect
  and dose-response), **very low for CVD, MI, and both mortality outcomes**: «GRADE assessment indicated
  very low certainty for CVD, MI, cardiovascular mortality and all-cause mortality, and moderate
  certainty for CAD»
  [@liu2022tyg].
- **Effect modifiers (candidate, not established).** Diabetes and sex are flagged by *cited single
  studies*, not by Liu's own pooled interaction test — hold as route-(b) hypotheses, not findings
  (below).
- **Certainty:** the source's own GRADE (above).

## Ding 2021 — a second gold TyG MA: incidence corroborated, stroke added, shared-cohort (F not E) `type-F`

Ding 2021 is a gold MA of eight cohort studies / 5,731,294 participants «without ASCVDs at baseline» —
the ASCVD-**incidence** counterpart to Liu's mortality-inclusive pool. TyG is framed identically, as
«the triglyceride–glucose (TyG) index, a novel surrogate indicator of insulin resistance»
[@ding2021]. It
**corroborates and extends** the incidence arm but does **not** independently re-test it (shared
constituent cohorts — verdict below), so this is **type-F refinement / shared-evidence corroboration,
NOT type-E independence**. Matched-parameter table (each cell quoted; both pools are general-population,
no established CVD at baseline, highest-vs-lowest unless noted):

| Parameter | Ding 2021 | Liu 2022 | Same quantity? |
|---|---|---|---|
| Composite incidence | ASCVD HR 1.61 (1.29–2.01), I2=80%, 5 studies | CVD HR 1.46 (1.23–1.74), I2=82%, 5 studies | concordant estimates, but composites may differ (Ding ASCVD = CAD+stroke+PAD; Liu CVD composite not verified identical) |
| CAD | HR 1.95 (1.47–2.58), I2=92%, 6 studies | HR 2.01 (1.68–2.40), I2=0%, 3 studies | yes — CAD incidence; point estimates concordant (heterogeneity differs) |
| Stroke | HR 1.26 (1.23–1.29), I2=0%, 3 studies | not pooled | Ding-only — fills a Liu G-gap |
| Per-1-unit composite | ASCVD HR 1.28 (1.13–1.45), I2=61%, 4 studies | CVD HR 1.23 (1.12–1.36), I2=89% | concordant slope; same composite-definition caveat as above |
| Per-1-unit CAD | HR 1.39 (1.18–1.64), I2=89%, 3 studies | HR 1.35 (1.02–1.79), I2=94% | yes — per-unit CAD slope, concordant |
| CV / all-cause mortality | not pooled (incidence MA) | 1.10 (0.82–1.47) / 1.08 (0.92–1.27), null | Ding SILENT — no rebuttal of the null |
| Effect modification | pooled subgroup: no sig. modification by age/sex/diabetes (all P>0.05) | cited single-study hints only | Ding refines toward null via its own pooled test |

- **The additive contribution — the stroke arm.** «the participants with the highest TyG index
  category had a significantly increased risk of stroke during follow-up compared to those with the
  lowest TyG category (HR: 1.26, 95% CI 1.23–1.29, I2 = 0%, P < 0.001; Fig. 5)»
  [@ding2021]. Liu
  pooled no stroke outcome, so this is a genuine gap-fill — the incidence-positive signal now spans
  CAD **and** stroke. **Caveat: the near-zero I2 is not three-study agreement** — Ding flags the pool
  is «mainly driven by the result of this study» (one large Korean cohort weighting far above the
  other two)
  [@ding2021], so the
  tight CI reflects one cohort's weight, not convergence. Treat the stroke point estimate as
  effectively single-cohort.
- **Per-1-unit dose-response slope, concordant but shape still unclaimed.** Composite per-unit HR 1.28
  (1.13–1.45) and CAD per-unit HR 1.39 (1.18–1.64)
  [@ding2021] track
  Liu's per-unit slopes (CVD 1.23, CAD 1.35) — two pools now agree a positive per-unit gradient exists.
  But Ding is **more cautious on shape than Liu**: «it remains unknown whether the association between
  the TyG index and an increased risk of ASCVDs is linear and what the optimal cut-off value of the TyG
  index is»
  [@ding2021]. So the
  monotone-over-range read is not upgraded to a true monotone curve, and no knee/cutpoint is located by
  either MA. (Abstract/body discrepancy: Ding's *abstract* labels 1.39 [1.18–1.64, I2=89%] as the
  *ASCVD*-continuous slope; the Results *body* assigns that to *CAD*-continuous [3 studies] and gives
  ASCVD-continuous as 1.28 [1.13–1.45, I2=61%, 4 studies]. Body values used above.)
- **CAD and composite point estimates corroborated** across both pools — CAD 1.95 vs Liu 2.01;
  composite 1.61 vs Liu CVD 1.46 (concordant, though the composites may not be the identical construct —
  Ding's ASCVD is CAD+stroke+PAD, Liu's CVD composite is unverified here) — a broader pooling, not an
  independent replication (see the verdict below).
- **Effect modification refined toward null.** Where Liu carried only *cited* single-study hints
  (diabetes, sex), Ding ran its **own pooled subgroup tests**: the raised-risk association «were
  independent of the age, sex, or diabetic status of the participants (for subgroup analyses, all P >
  0.05)»
  [@ding2021]. So the
  route-(b) hypotheses now run *weakly against* modification, not merely untested — do not personalize
  the incidence signal on age/sex/diabetes.
- **Silent on mortality; causation still disclaimed; no GRADE.** Ding pools only incidence outcomes
  (CAD, stroke, composite — fatal and non-fatal events), so it leaves Liu's mortality-null untouched,
  neither corroborating nor rebutting it. Quality by Newcastle–Ottawa, not GRADE: «The Newcastle–Ottawa
  Scale score was nine for all of the included studies, indicating good study quality»
  [@ding2021], and
  «this meta-analysis was based on cohort studies; thus, a causative association ... cannot be implied»
  [@ding2021]. Ding
  leaves risk-score incrementality *untested* («further studies are needed to determine whether the
  addition of the TyG index to conventional ASCVD risk prediction tools, such as the Framingham risk
  score, can improve the predictive efficacy»)
  [@ding2021] — weaker
  than Liu's cited FRS-non-improvement finding, but same direction: neither MA shows demonstrated
  incremental value over an existing score.

**Independence verdict — F, not E `[shared-cohort]`.** Both MAs pool general-population TyG->CVD cohort
studies from PubMed/Embase over overlapping windows (Ding through Jan 2021; Liu later and larger — 12
cohorts / 6.35M vs Ding's 8 / 5.73M), so Liu is very likely a **superset** of Ding's constituents; the
large Korean cohort dominating Ding's stroke pool is exactly the class Liu's larger CVD/MI pools draw
on. The included-study lists **cannot be shown disjoint**, so the two are corroboration on shared
evidence, not independent backing — **no `[E-independent]` token**. The incidence arm is therefore more
broadly *pooled*, not more *independently* confirmed; `confidence:` stays `low`.
[inferred from @liu2022tyg; @ding2021]

## Zhang 2017 — the direct-insulin arm: the mortality signal is HOMA-IR-composite-specific and fragile `type-F`

Zhang 2017 is a **moderate**-tier MA of 7 prospective cohorts / 26,976 **non-diabetic** adults that
pools the *direct* IR measures — fasting insulin and HOMA-IR (insulin x glucose) — against CV and
all-cause mortality, the outcomes on which Liu's TyG proxy came up null. It does **not** use TyG, so it
approaches the node's mortality question from a different measure and a (very likely) disjoint study
pool. Its headline: «IR as measured by HOMA-IR but not fasting insulin appears to be indepen- dently
associated with greater risk of cardiovascular or all-cause mortality in non-diabetic adults»
[@zhang2017].

The node now holds **three IR measures on mortality**, and they do not agree — only the HOMA-IR
composite shows a clear positive, while fasting insulin alone and TyG are null-to-borderline; the
signal is fragile and low-certainty throughout, and whether the HOMA-IR-vs-TyG gap reflects the
*measure* or the *population* is unidentified (they are confounded). Matched-parameter table (each cell
quoted; highest-vs-lowest category throughout):

| Parameter | Zhang 2017 (direct: HOMA-IR / fasting insulin) | Liu 2022 (proxy: TyG) | Same quantity? |
|---|---|---|---|
| All-cause mortality | HOMA-IR RR 1.34 (1.11-1.62), P=0.002, 4 studies, I2=44%; fasting insulin RR 1.13 (1.00-1.27), P=0.058, 3 studies, I2=11% | TyG HR 1.08 (0.92-1.27), 4 studies, I2=87% | same OUTCOME; NO on the relation — different EXPOSURE (direct insulin/HOMA-IR vs TG-based proxy) + different POPULATION (non-diabetic-only vs general) |
| CV mortality | HOMA-IR RR 2.11 (1.01-4.41), P=0.048, 2 studies, I2=75%; fasting insulin RR 1.40 (0.49-3.96), P=0.526, 1 study | TyG HR 1.10 (0.82-1.47), 3 studies, I2=76% | same outcome; NO (same exposure/population reasons); both arms underpowered (1-3 studies, wide CIs) |
| Exposure construct | fasting insulin; HOMA-IR = insulin(uU/ml) x glucose /22.5 | TyG = Ln(TG x glucose /2) | NO — both composite-with-glucose, but the non-glucose term differs (insulin vs triglycerides) |
| Study pool | 7 insulin/HOMA-IR cohorts, 2000-2015, mostly Western (3 US / 3 EU / 1 Korea) | 12 TyG cohorts, 2014-2021, 10/12 Asian | disjoint — a TyG study needs TG+glucose, an insulin study needs assayed insulin; different papers |

- **The positive is HOMA-IR-composite-specific, NOT a smooth TyG->insulin gradient.** Only the HOMA-IR
  composite (insulin x glucose) shows a clear all-cause-mortality signal: RR 1.34 (P=0.002). Fasting
  insulin *alone* is a **borderline-null** (RR 1.13, **P=0.058, CI touches 1**) and TyG is null (HR
  1.08) — so fasting insulin patterns with the *null* TyG end, NOT with HOMA-IR, exactly as Zhang's own
  «IR as measured by HOMA-IR but not fasting insulin appears to be indepen- dently associated»
  headline says
  [@zhang2017].
  Zhang's stated reason is composite-specific: «IR is considered a better biomarker than insulin or
  glucose alone because it incorporates both the biomarkers»
  [@zhang2017].
  So do **not** read a gradient toward insulin: the intermediate step (fasting insulin) is statistically
  indistinguishable from the null end. And even the one positive arm is a 34% relative excess at low
  certainty; CV-mortality rests on 1-2 studies Zhang itself calls «unreliable due to the small number of
  articles included»
  [@zhang2017].
- **Distinction, not a tension `[not-joined (ii)]`.** TyG-null vs HOMA-IR-positive on mortality is a
  clash of *different quantities in different populations*, not a joined issue: different exposure
  construct, different (non-diabetic-restricted vs general) population, disjoint study pools, different
  era/follow-up. Once matched, the two are **not contradictory** — so this is recorded as a
  non-uniformity distinction (an F-refinement), **not a filed `[[tension]]`**. But the same confounds
  cut both ways: they mean the TyG-null-vs-HOMA-IR-positive gap **cannot be attributed to the *measure*
  alone** — population, pool, era and follow-up are all confounded with the measure, and no study
  compares readouts head-to-head in one cohort. The *identified* claim is only that the mortality
  signal is **non-uniform across IR readouts/populations**; whether the driver is the measure or the
  population is unidentified. Zhang reinforces the limit: even within its own pool it cannot compare
  HOMA-IR to fasting insulin head-to-head — «the result was established on an indirect comparison ...
  most studies failed to report results simultaneously»
  [@zhang2017].
- **Independence verdict — F, more independent than Ding but NOT E `[different-outcome]`.** Zhang is
  *methodologically* more independent than Ding was: a different exposure measure and an almost-certainly
  disjoint study pool (unlike Ding, which shared constituent cohorts with Liu). But E requires the
  independent route to reach the **same claim**, and Zhang lands on a *different outcome* (mortality,
  where the measures diverge) than Liu/Ding's incidence-positive signal — so no single claim is jointly
  and independently confirmed. No `[E-independent]` token; the addition is type-F (it refines the node's
  mortality picture and bounds the mortality-null as partly proxy-specific). `confidence:` stays `low`:
  a fragile, non-uniform, low-certainty signal across few studies with wide CIs is not a basis to
  raise it.
- **Mechanism corroborated at direction level only.** Zhang invokes the same chain Liu does — «IR
  promotes the development of atherosclerosis through increasing insulin and glucose lev- els.
  Hyperinsulinemia and hyperglycemia can exert direct atherogenic effect on the vessel wall»
  [@zhang2017]
  plus IR-driven proatherogenic lipids and adipose inflammation — directional support for the readout
  framing, not an outcome finding.

[inferred from @liu2022tyg; @zhang2017]

## Prediction is not causation — the framing that keeps this a marker `type-C (provisional)`

TyG belongs on the **predictor** side of the [[Surrogate Outcomes]] prognostic-marker-vs-lever line. Two
of Liu's own statements pin it there:

- **It adds nothing over an existing risk score.** «On the other hand, addition of the TyG index to the
  Framingham Risk Score (FRS) did not lead to improvement in its predictive power; thus, adding the TyG
  index to the FRS does not improve CVD risk predic- tion»
  [@liu2022tyg].
  A predictor that does not improve an incumbent's discrimination is not carrying independent decision
  value once the standard factors are in hand.
- **Causation is disclaimed.** All 12 studies are observational cohorts: «residual confounding factors
  may have influenced our results; thus, causation cannot be proven»
  [@liu2022tyg].
  Liu's strongest positive claim is that TyG «may be considered an independent predictor for CVD
  incidence»
  [@liu2022tyg] —
  *predictor*, never *target*.

**The synthesis move (this page's own):** a raised TyG is a *readout* of the atherogenic-dyslipidemia +
insulin-resistance state, not a rival causal lever competing with LDL/apoB. Liu's mechanism section says
so — «Insulin resistance in liver and adipose tissues drives the development of atheroscle- rotic
dyslipidemia, generates a low-grade inflammatory state, and increases release of inflammatory markers»
[@liu2022tyg].
That atherogenic dyslipidemia is *apoB-bearing* particles (small-dense LDL, VLDL remnants) — the very
burden the causal-lipid nucleus tracks. So TyG and the causal apoB story are **not competitors**: TyG
flags the discordant stratum where LDL-C *under-states* the apoB particle count, and apoB remains the
causal quantity and the target -> [[LDL ApoB and Cumulative Exposure]]. Reading TyG as
*insulin/triglycerides beat LDL* confuses a downstream *marker of* the atherogenic state for the causal
driver *within* it.
[inferred from @liu2022tyg]

## Mechanism (marked, directional)

Insulin resistance -> low-grade systemic inflammation -> endothelial dysfunction, plus IR-driven
atherogenic dyslipidemia and plaque progression; TyG is a lab proxy for the IR at the head of that
chain. Liu grounds direction in a genetic study (63,746 CAD cases / 130,681 controls) implicating lipid
metabolism and inflammation in coronary atherogenesis, and in TyG's strong concordance with the clamp
(reported sensitivity 96.5%, specificity 85.0%) and its edge over HOMA-IR — these figures are the
source's
[@liu2022tyg].
The directional reading below is the wiki's. This is mechanism with human corroboration —
admitted directionally, not as an outcome finding; whole-organism net effect (not the intended
mechanism) still governs.

## Decision relevance

- **Use TyG to place, not to treat.** It is a cheap route-(a) stratifier — genuinely useful for reading
  who sits in the insulin-resistant / atherogenic-dyslipidemia stratum from two routine labs — but it is
  not a validated target, and it does not improve an existing risk score's discrimination. Steering
  someone by *lower your TyG* has no intervention evidence behind it here.
- **A raised TyG is a prompt to check apoB, not a rival to LDL lowering.** In the insulin-resistant,
  hypertriglyceridemic person, LDL-C can understate the apoB particle burden; TyG flags exactly that
  discordant stratum -> [[LDL ApoB and Cumulative Exposure]]. The lever remains apoB-lowering (and the
  upstream ectopic-fat / energy-balance levers), not the marker.
- **Weight the mortality null honestly; it is not uniform across IR readouts.** For TyG the pooled
  mortality signal is absent (both CIs cross 1) at very-low certainty — no mortality claim can be built
  on *TyG* from this evidence. But the null is not flat across readouts: the HOMA-IR composite carries a
  modest all-cause signal (RR 1.34), while fasting insulin *alone* is only borderline (RR 1.13,
  P=0.058) and patterns with the null TyG — so the positive is specific to the **HOMA-IR composite**,
  not to IR readouts generally (Zhang 2017, moderate-tier, low-certainty). Whether even that gap is the
  *measure* or the non-diabetic-vs-general *population* is unidentified. The honest composite is a
  **fragile, non-uniform mortality signal** — neither a flat null nor a clean gradient — still not a
  target, and still weaker than the incidence signal and than the apoB causal evidence.

[inferred from @liu2022tyg; @zhang2017] — the
decisions in this section (use-to-place-not-treat, prompt-to-check-apoB, weight-the-null) are the
wiki's application of Liu's effect estimates and FRS/causation findings, and of Zhang's direct-measure
mortality estimates, quoted above — not additional source claims.

## Limits

- **All observational, causation disclaimed; no RCT.** 12 cohorts, mostly Asian (10/12), 2014–2021;
  moderate certainty on CAD alone, very low on the other four outcomes. (Study characteristics and
  heterogeneity below are the source's
  [@liu2022tyg];
  the R1 coherence note is the wiki's.)
- **High heterogeneity** on CVD and both mortality pools (I2 76–94%); subgroup and publication-bias
  analyses were not run (fewer than 10 studies per outcome).
- **Diabetes and sex as route-(b) candidates only — now weakly against.** Liu's *cited* single studies
  suggest TyG-CAD holds in non-diabetics but attenuates in diabetics (a route-(b) effect-modification
  *hint*), and a sex difference in subclinical atherosclerosis — but Liu's own pooled interaction tests
  were underpowered. Ding 2021 then ran its **own** pooled subgroup tests and found the incidence
  association independent of age, sex, and diabetic status (all P>0.05, above), so the route-(b) hints
  now run weakly *against* modification. Do not personalize the incidence signal on them.
- **Coherence, not validity (R1):** this node is internally coherent and source-faithful; no operation
  here grades it against a realized outcome. The loop is open.

CASHED 2026-08-09: Ding 2021 ingested (see the *Ding 2021 — a second gold TyG MA* section above). The
included-studies overlap check resolved the way the hold anticipated — shared constituent cohorts are
likely (both general-population PubMed/Embase TyG pools over overlapping windows; Liu later and larger),
so Ding corroborates the incidence-positive arm as **type-F (shared evidence), not E-independent**, and
adds the stroke outcome Liu lacked.

CASHED 2026-08-09 (partial): Zhang 2017 ingested (see the *Zhang 2017 — the direct-insulin arm* section
above) — the direct measures fasting insulin / HOMA-IR against mortality. It **partially** answers the
TyG-specific-vs-general split from the direct-measure side: the mortality-null is not uniform across
readouts, since the HOMA-IR composite retains a modest mortality signal (RR 1.34) where fasting insulin
alone and TyG are null-to-borderline — HOMA-IR-composite-specific and fragile, not flat across IR
readouts (measure-vs-population attribution unidentified).

AWAITS a TG/HDL-ratio outcome source — to lift the cluster from two IR readouts (TyG, direct
insulin/HOMA-IR) to the neutral question across surrogates, and to test the incidence/mortality split
on the TG/HDL ratio arm specifically (Zhang covered the direct-insulin arm, not TG/HDL).

## References

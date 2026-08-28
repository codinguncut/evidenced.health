---
type: model
question: What is this person's 10-year CVD risk, and what does that number license?
aliases: [SCORE2, SCORE2-OP, ESC Risk Thresholds, 10-Year CVD Risk, CVD Risk Categories, Risk Charts]
authors: [European Society of Cardiology (org); Mach, François; Blumenthal, Roger S; SCORE2-Diabetes Working Group and ESC Cardiovascular Risk Collaboration (org); Khan, Sadiya S; Matsushita, Kunihiro; Sang, Yingying]
sources: [ESC - CVD Prevention Guidelines 2021, WHO - Saturated and Trans Fatty Acid Intake 2023, ESC-EAS - Dyslipidaemias Focused Update 2025, ACC-AHA - Dyslipidemia Management 2026, SCORE2-Diabetes 2023, Khan - PREVENT Equations 2024]
cluster: cvd-risk-estimation
confidence: high
relationships:
  related_to:
    - Baseline Risk and the Relative-Absolute Split
    - Layer 1 - Ranking Interventions for a Stratum
    - Saturated Fat Intake and Replacement
    - LDL Lowering and Cardiovascular Events
    - Which Objective Moved This Recommendation
created: 2026-07-26
updated: 2026-08-27
self_critiqued: 2026-08-27
---

**The conversion layer.** [[Baseline Risk and the Relative-Absolute Split]] holds the machinery and, as
of today, study-control-rate baselines; this supplies the missing piece — a **prognostic** baseline for
a named stratum rather than a trial population's event rate. Every relative effect in the corpus becomes an absolute one
once a stratum-specific 10-year risk exists.



## The thresholds — and they move with age

| | **<50 years** | **50-69 years** | **>=70 years** |
|---|---|---|---|
| Low-to-moderate: *"risk factor treatment generally not recommended"* | <2.5% | <5% | <7.5% |
| High: *"risk factor treatment should be considered"* | 2.5 to <7.5% | 5 to <10% | 7.5 to <15% |
| Very high: *"risk factor treatment generally recommended"* | >=7.5% | >=10% | >=15% |

[@esc2021]

**The same 10-year risk can mean two different things at two ages** — 8% is *very high* under 50 and
*high* at 72. **It cannot mean three** — the thresholds are monotone, so no single number can be
very-high in one band and low-to-moderate in another. The stated reason for the banding: *«Age is the major driver of CVD risk»*, so a fixed
threshold would over-treat the old and under-treat the young.

Two qualifiers ESC attaches itself:

- At **>=70**, the lipid-lowering recommendation drops to **Class IIb ("may be considered")** even in
  the very-high band.
- The banding is an artefact of presentation: *"age is obviously continuous, and a sensible application
  of the thresholds in clinical practice would require some flexibility... as patients move towards the
  next age group, or recently passed the age cut-off."*

## Read-off baseline risk — moderate-risk region, men, ages 60-64

10-year risk of **fatal and non-fatal** CVD, in percent. Columns are non-HDL cholesterol
(3.0-3.9 / 4.0-4.9 / 5.0-5.9 / 6.0-6.9 mmol/L); rows are systolic BP.

| SBP | Non-smoking | Smoking |
|---|---|---|
| 160-179 | 11 · 12 · 13 · 15 | 17 · 18 · 20 · 22 |
| 140-159 | **9 · 10 · 11 · 12** | 14 · 15 · 17 · 18 |
| 120-139 | 7 · 8 · 9 · 10 | 11 · 13 · 14 · 15 |
| 100-119 | 6 · 7 · 7 · 8 | 9 · 10 · 11 · 12 |

[@esc2021]

**Moderate-risk region = Austria, Cyprus, Finland, Germany, Greece, Iceland, Ireland, Italy, Malta,
Portugal, San Marino, Slovenia, Sweden.** Region is not a detail — the four charts differ substantially for identical inputs. **The size of that
regional gap is deliberately not quantified here**: this guideline does not state it, and the figures
that circulate for it come from the SCORE2 algorithm paper, which is staged but not ingested.

**A stratum defined by age and condition cannot be read off this chart.**
[[Layer 1 - Ranking Interventions for a Stratum]] fixes age, sex and condition; the chart also needs
**smoking status, a BP band, a cholesterol band and a region**. Those four are **case inputs supplied at
layer 3**, not properties of a stratum — and the answer moves with them:

| Assumed inputs | Read-off | ESC category (50-69) |
|---|---|---|
| non-smoking, SBP 140-159, non-HDL 4.0-5.9, moderate region | **10-11%** | **very high** — treatment generally recommended |
| same but SBP 120-139 | 8-9% | **high** — treatment *should be considered* |
| same but smoking | 15-17% | very high |

**So the ESC category flips on inputs no stratum contains.** This is the layer-2/layer-3 boundary made
concrete: the fabric can hold the grid and the thresholds, and it *cannot* produce a category without a
case. **Three rows are shown rather than one deliberately** — selecting a single read-off would smuggle
in assumed inputs and manufacture a decision-change out of the writer's own defaults.

## The conversion, worked once, with its assumptions visible

The wiki holds [[Saturated Fat Intake and Replacement]]: reducing SFA gives **RR 0.83 (0.70-0.98)** for
cardiovascular disease. At a 10% baseline:

> absolute reduction = 10% x (1 - 0.83) = **1.7 percentage points, or \~17 fewer CVD events per 1000**
> over 10 years — with the interval running \~2 to 30 fewer per 1000.

**Three assumptions, none of them free, and all of them the reader's to accept or reject:**

1. **The relative effect transfers to a 10-year horizon.** The trials behind RR 0.83 ran for varying,
   mostly shorter periods; SCORE2's baseline is explicitly 10-year. Constant-RR-over-time is an
   assumption, not a finding.
2. **The outcome definitions match.** SCORE2's endpoint is *fatal and non-fatal* CVD; WHO's composite
   is *"cardiovascular diseases"* from its own reviews. Similar, not verified identical.
3. **The trial populations transport to this stratum.** SCORE2 excludes people with diabetes from the
   base model — and this stratum has metabolic syndrome, which sits adjacent to that exclusion.
   **SCORE2-Diabetes exists precisely because the base model does not cover diabetes** -> the
   *SCORE2-Diabetes* section below (now held; the T2D-stratum baseline).

[inferred from @esc2021; @who2023saturated]

**The novelty here is narrow, and the tempting larger claim is false.** It is *not* the case that
neither source performs this conversion: **WHO performs it throughout** — its evidence profiles carry an
"Absolute - per 1000" column and report **15 fewer per 1000 (25 fewer to 2 fewer)** for this exact RR,
at its trials' 8.5% control rate, using the formula already recorded on
[[Baseline Risk and the Relative-Absolute Split]]. What the wiki adds is **re-baselining to a
stratum-specific prognostic estimate rather than a study control rate** — a real move, and a much
narrower one.

Note also that WHO grades this estimate **Moderate** certainty; the RR should not travel without it.

## What this licenses, and what it does not

- **It converts ratios into absolutes** — the single missing input on
  [[Baseline Risk and the Relative-Absolute Split]] and the reason Layer-1 ranking was impossible.
- **It does NOT make the corpus's ratios commensurable with each other.** Different outcomes still
  differ: a CVD-event ratio and an HbA1c mean difference do not become comparable by sharing a
  baseline.
- **It is a prognostic instrument, not evidence of effect.** It answers *what is this person's risk*,
  never *what does this exposure do*. Multiplying one by the other is the wiki's move, not either
  source's.
- **A prognostic number is a starting estimate, not the end of the chain.**
  [[Risk Modifiers - When Extra Information Changes a Risk Estimate]] can move it up or down near a
  threshold (a zero CAC lowers it); and where the 10-year window understates the case for a younger
  person, [[Lifetime Benefit - The Frame for Younger Adults]] reframes it in CVD-free years gained.
- **The threshold is the decision, not the percentage.** SCORE2 outputs a number; Table 5 is what turns
  a number into an action — and it is the part most often dropped when the model is quoted.


[inferred from @esc2021]
## Limits

- **Two ESC conditions the charts carry and this page must not drop:** they apply only to people whose
  risk factors are *untreated or have been stable for several years* — often false in metabolic
  syndrome, where BP and lipids are frequently treated — and *"Risk estimates then need to be adjusted
  upwards as the person approaches the next age category."* [@esc2021]
- **Region-calibrated, and the region does most of the work at the margin.** A risk read from the wrong
  chart is wrong by more than most interventions move.
- **Base model excludes diabetes**, which bounds its use for exactly the stratum the wiki is targeting.
  The diabetes-augmented extension is now held -> *SCORE2-Diabetes* section above (the T2D-stratum
  baseline-risk instrument, route (a)).
- **Charts read at tier 3** (direct rendered-page read) because `find_tables()` returns nothing usable
  on this layout. Values above are transcribed from the rendered grid; the full four-region chart set is
  \~2 560 cells and only the moderate-region men's 60-64 block is carried here.
- Calibration/discrimination statistics for the base model are still not held (they live in the base
  SCORE2 algorithm paper, staged, not ingested); the *SCORE2-Diabetes* extension above supplies the
  T2D-stratum figures (C-index gain 0.009-0.031 over base SCORE2; satisfactory regional calibration).
  **PROBAST+AI does not rank these against each other**: it lists calibration,
  discrimination and net benefit symmetrically, and an apparent emphasis on calibration comes from the
  title of a paper it cites, not from the tool's own position.

## The ESC-EAS 2025 focused update endorses SCORE2/SCORE2-OP — this page's instrument, confirmed `[2026-08-06]`

The 2025 ESC/EAS dyslipidaemias focused update formally adopts the calculator this page is built on:
«this Focused Update endorses the use of risk scores such as SCORE2 and SCORE2-OP (instead of the SCORE
algorithm) for estimation of the risk of experiencing an MI, ischaemic stroke, or fatal atherosclerotic
CV event over the next 10 years in persons without known CVD aged between 40 and 89 years»
[@esceas2025]. Confirmation, not a new estimate —
the endpoint (fatal **and** non-fatal MI/ischaemic stroke) and the four-country calibration are the ones
already carried above. The update also notes SCORE2/OP «should not be used ... among persons with
existing ASCVD or among persons currently on lipid-lowering therapy» — the prognostic-instrument scope
this page already flags.

## What the risk category licenses — the ESC-EAS 2025 LDL-C goal ladder `[2026-08-06]`

Once SCORE2/OP (or a clinical feature in Table 3) places a person in a category, the category sets the
LDL-C goal. These numbers were image-only in the source (Fig. 1 / Tables 3-4 did not OCR) and were
recovered by a direct PDF-page read — so they carry a figure/table locus, not a `«...»` locate-verified
form ([@esceas2025]):

| Category (Table 3 cut-off) | LDL-C goal (Fig. 1) | Class |
|---|---|---|
| Low — SCORE2/OP <2% | <3.0 mmol/L (<116 mg/dL) | IIb |
| Moderate — >=2% and <10% | <2.6 mmol/L (<100 mg/dL) | IIa |
| High — >=10% and <20% (or TC >8 / LDL-C >4.9 mmol/L, BP >=180/110, moderate CKD, FH) | <1.8 mmol/L (<70 mg/dL) **and >=50% reduction** | I |
| Very high — >=20% (or documented ASCVD, severe CKD, DM + target-organ damage) | <1.4 mmol/L (<55 mg/dL) & >=50% reduction | I (IIa for primary-prevention FH) |
| Extreme — recurrent events on max statin; polyvascular | <1.0 mmol/L (<40 mg/dL) | IIb |

The category cut-offs are total-CVD (fatal + non-fatal) SCORE2/OP percentages — **double** the old
SCORE fatal-only thresholds (the 2x multiplier this Focused Update applied). And initiation is not a pure
function of the goal: **Table 4** crosses total CV risk with *untreated* LDL-C band, so a very-high-risk
person in secondary prevention gets concomitant drug therapy at every LDL band, while low/moderate risk
stays at lifestyle advice until the untreated LDL is high
[@esceas2025]. The downstream **effect** of hitting
these targets (the per-mmol event reduction) is CTT/Marston's, not the guideline's -> [[LDL Lowering and Cardiovascular Events]].



## PREVENT-ASCVD vs SCORE2 — a different calculator answering a DIFFERENT quantity `[2026-08-06]`

The US 2026 ACC/AHA dyslipidaemia guideline stratifies primary prevention with a **different** instrument
— the **PREVENT-ASCVD** equations, not SCORE2 — and it is tempting to read the two families' primary-
prevention thresholds as a disagreement. **The parameter table shows they are not the same quantity, so
the differing thresholds are a distinction, not a tension** (not-joined check (ii): different endpoint,
different instrument):

| Parameter | ESC SCORE2 / SCORE2-OP | ACC-AHA PREVENT-ASCVD | Same quantity? |
|---|---|---|---|
| Endpoint | «MI, ischaemic stroke, or fatal atherosclerotic CV event» (fatal + non-fatal CVD) | 10-y (and 30-y) **ASCVD** | **No** — different composite definitions |
| Calculator | SCORE2 (40-69) / SCORE2-OP (70-89), region-calibrated | PREVENT-ASCVD equations, ages 30-79 | No |
| Category cut-offs | age-banded (Table 5 above); e.g. very-high ≥7.5%/10%/15% | «low (<3%), borderline (3% to <5%), intermediate (5% to <10%), or high (≥10%)» | **No** — not comparable numbers |
| Input | non-HDL-C, SBP, smoking, age, region | PREVENT covariates (adds eGFR, HbA1c, etc.) | No |

[@accaha2026]

**So a PREVENT «borderline 3-<5%» and a SCORE2 «low <2.5-7.5%» band cannot be lined up as looser-vs-
stricter** — they estimate different composites over different age ranges with different calibration. The
guidance families differ here by **instrument and endpoint** (divergence classes 1/2 — standpoint /
evidence base), not by a disagreement on any effect estimate. What DOES converge is the downstream
treat-to-target number once a stratum is fixed -> [[LDL Lowering and Cardiovascular Events]]; the
guidance-null reading of that convergence is on [[Which Objective Moved This Recommendation]].
[inferred from @accaha2026; @esceas2025]

## PREVENT vs the Pooled Cohort Equations — the derivation source quantifies a PCE overprediction the fabric held only from guidance `[2026-08-27]`

The section above compares PREVENT with the *European* instrument (SCORE2). This one holds the
**PREVENT derivation paper itself** and its comparison with PREVENT's *US predecessor*, the ACC/AHA
Pooled Cohort Equations (PCE). The fabric already holds that the PCE overpredict, taken from a
guideline that merely names the calculator -> [[Statins for Primary Prevention and the Power of Zero CAC]];
Khan is the primary evidence FOR that claim and **quantifies** it, so this is a type-F refinement
(bounds a held claim with the derivation numbers), not an echo. Both instruments are AHA/ACC products
and Khan authored PREVENT — shared lineage — so this is emphatically **not** independent-E; and PREVENT
is a designed *supersession* of PCE by the same body, not a joined-issue clash, so **not a tension**.

The two are mostly **not the same quantity** (type-B instrument disambiguation), so the differing
numbers are a distinction, not a disagreement:

| Parameter | PCE (2013) | PREVENT (2024) | Same quantity? |
|---|---|---|---|
| Outcome | ASCVD only | total CVD = ASCVD **+ heart failure** (subtype models too) | **No** — «the outcome of interest was broadened to include HF» |
| Race handling | «sex- and race-stratified models that estimate risk of ASCVD in White and Black adults» | «race-free» — «race is a social construct and not a biological predictor» | **No** |
| Age range | 40-79 | 30-79 | **No** |
| Horizon | 10-year | 10- **and 30-year** (age as the time-scale) | **No** |
| Kidney/metabolic predictors | none | eGFR in base model; optional UACR / HbA1c / SDI | **No** |
| Discrimination (validation, F/M) | C 0.772 / 0.733 | C 0.794 / 0.757 (delta-C +0.007 / +0.005) | comparable — a marginal gain |
| Calibration (ASCVD, validation) | slope 0.50-0.54 | slope \~1.0 | same construct, but **PCE mis-calibrated** |

[@khan2024]

**The quantified overprediction — the fabric's held claim, now with a number.** PREVENT showed «a
slope of observed to predicted risk of close to 1 for PREVENT indicating a well-calibrated model. In
contrast, the slope of the PCEs ranged from 0.50-0.54 for ASCVD, which represents overestimation of
risk by about 50%» [@khan2024]. So «PCE overpredicts» is not a
vibe — it is \~50% inflation of estimated ASCVD risk, measured against the same events in the same
validation cohorts. Caveat: this well-calibrated-PREVENT-vs-mis-calibrated-PCE verdict is PREVENT's own
derivation team grading its predecessor (shared AHA/ACC lineage), not an independent replication — the
number is the successor's self-validation, and the direction is what an external cohort would need to
confirm. [inferred from @khan2024]

**The decision consequence — a genuine treatment-eligibility shift (route (a), baseline-instrument
change).** At the classic statin-decision cut point, «Based on a PCE risk estimate of 7.5%, the median
PREVENT risk estimate was 8.4 (7.7-9.0) and 5.9 (5.7-6.3) for total CVD and was **4.9 (4.4-5.3) and 3.7
(3.6-4.0) for ASCVD** among females and males, respectively» [@khan2024].
So a person the PCE placed *at* the 7.5% ASCVD threshold reads \~4.9% (women) / \~3.7% (men) on
PREVENT-ASCVD — **below** the threshold that triggers a statin discussion. Switching the instrument,
with nothing about the person changing, moves a large group off treatment-eligible. This is the same
move as SCORE2's own recalibration, one continent over, and it is what the downstream ACC/AHA 2026
lower start-thresholds are compensating for -> [[Statins for Primary Prevention and the Power of Zero CAC]].
(The `delta-C` discrimination gain is a *separate* statistic and does not bear on this reclassification.)
[inferred from @khan2024]

**The CKM add-ons buy calibration in one narrow stratum, not discrimination — a ceiling-is-a-finding.**
Adding the kidney/metabolic/social predictors barely moves the model: «While the changes in risk
discrimination with the addition of eGFR and UACR were minimal, they were statistically significant»
(delta-C \~0.004-0.005 for all three together) [@khan2024]. Where
they matter is **calibration in a high-risk subgroup**: «When UACR was added to the base model in CKD
subgroups, calibration in the validation sample was 1.05 (0.84, 1.20) among individuals with UACR >300
mg/g, which was significantly improved compared with the base model without UACR (p=0.01)»
[@khan2024] — while HbA1c added among people *with diabetes* left
calibration «similar to the model without HbA1c». So the optional predictors are a targeted fix for
marked albuminuria, not a general uplift — a **prediction absence** (more predictors, almost no
discrimination gain). This is a discrimination/calibration test, *not* a treatment-effect-modification
test (prediction, not a relative effect), so it does not directly score route (b) — but it is a
same-direction data point toward the standing `[PRIOR — over-personalization is the likelier failure]`,
**lodged not scored** (adjudicated in its own operation) -> [[Baseline Risk and the Relative-Absolute Split]].
[inferred from @khan2024]

**The 30-year horizon is the real addition for younger, low-10-year-risk strata.** For a 50-year-old
woman with a suboptimal-but-untreated profile, «the estimated 10-year CVD, ASCVD, and HF risk ... was
5.4%, 3.6%, and 2.5%» while «the estimated 30-year CVD, ASCVD, and HF risk for the same individual was
more than 3-fold higher at 31%, 20%, and 19%» [@khan2024]. A
10-year number that reads *reassuringly low* can sit above a 30-year number that reads *alarming* — the
same person, two horizons — which is exactly the relative-vs-absolute / lifetime frame for younger
adults: PREVENT «addresses the fact that risk for CVD is not able to be calculated in those <40 years
and is under-estimated among younger individuals when relying only on short-term risk»
[@khan2024] -> [[Lifetime Benefit - The Frame for Younger Adults]],
[[Baseline Risk and the Relative-Absolute Split]]. The «PREVENT models account for competing risk of
non-CVD death to prevent over-estimation of CVD risk and over-estimation of benefit of treatment»
[@khan2024] — a built-in guard against inflating the absolute
benefit that this page's conversion machinery multiplies out, most relevant in older / poor-CKM strata
where competing death is common.
[inferred from @khan2024]

**Scope note.** PREVENT is a *prognostic instrument*, not evidence of any exposure's effect — it answers
*what is this person's absolute risk*, which is precisely the input this page converts every relative
effect against. What stays out of scope is the prescriber act it feeds (agent selection, titration);
what is IN is that the instrument choice **sizes the baseline** and thereby the absolute benefit of every
lever and drug in the corpus.

## SCORE2-Diabetes — the instrument for the stratum the base model excluded `[2026-08-26]`

The base charts above **exclude people with diabetes**, and the ESC does not recommend base SCORE2 for
them: SCORE2-Diabetes «extends SCORE2 models that were developed in all individuals without previous CVD,
including both those with and without diabetes (although the ESC does not recommend SCORE2 for use in
those with diabetes)» [@score2diabetes2023]. It is a **recalibrated extension**, not a fresh model:
«SCORE2-Diabetes was developed by extending SCORE2 algorithms using individual-participant data from four
large-scale datasets comprising 229 460 participants (43 706 CVD events) with type 2 diabetes and without
previous CVD» [@score2diabetes2023], externally validated in «217 036 further
individuals (38 602 CVD events)» [@score2diabetes2023]. Same endpoint (fatal + non-
fatal MI/stroke), same four European risk regions, same recalibration factors as base SCORE2 — indeed
adapting SCORE2 for diabetics «does not require additional data and reca­libration for diabetes-specific
populations» [@score2diabetes2023], because the regional recalibration is to the
whole population's CVD rates, diabetics included.

**This is a route-(a) baseline-risk contribution — prognostic, not a subgroup effect-modification claim.**
It sharpens the *baseline-risk estimate* for the T2D stratum; it says nothing about any intervention's
relative effect. What the added predictors buy is a better absolute-risk number, and every relative effect
in the corpus becomes a T2D-specific absolute once that number exists (the conversion this page performs).

**Three diabetes predictors are added** to the conventional SCORE2 set (age, smoking, SBP, total + HDL
cholesterol): the «SCORE2 models were extended by addition of diabetes-related variables: HbA1c, age at
dia­betes diagnosis, and eGFR» [@score2diabetes2023] (plus a quadratic eGFR term for
its non-linear association). Mechanically, the conventional-variable coefficients «were fixed at the same
values used in the SCORE2 models and included as an offset in Fine and Gray competing risk-adjusted
models» [@score2diabetes2023], with additional coefficients estimated to let their
effects vary among diabetics. That within-model variation is prognostic refinement of the *estimate*, NOT
a treatment-effect-modification claim — do not read the added coefficients as route (b).

The sub-distribution hazard ratios for the three added predictors (per Table 2; centred at age 60, HbA1c
31 mmol/mol, eGFR 90; 1 SD HbA1c = 9.34 mmol/mol), men / women:

| Added predictor | SHR men (95% CI) | SHR women (95% CI) | Direction |
|---|---|---|---|
| Age at diabetes diagnosis (per 5 y) | 0.90 (0.89, 0.91) | 0.89 (0.88, 0.90) | later onset -> lower risk |
| HbA1c (per SD, 9.34 mmol/mol) | 1.10 (1.09, 1.11) | 1.12 (1.11, 1.14) | worse glycaemia -> higher risk |
| ln eGFR (per SD) | 0.94 (0.93, 0.96) | 0.94 (0.92, 0.95) | worse kidney fn -> higher risk |

[@score2diabetes2023]

**Discrimination and calibration** (the statistics the base-SCORE2 section flagged as absent): external
validation «showed good dis­crimination, and improvement over SCORE2 (C-index change from 0.009 to
0.031)» [@score2diabetes2023] — a *modest* gain over base SCORE2, on already-modest
absolute C-indices (0.658-0.733 across cohorts; lower than general-population scores because diabetics are
a narrower, higher-risk band). The diabetes variables earned their place: their discrimination gain «were
greater than that provided by total and HDL-cholesterol concen­tration in the same model»
[@score2diabetes2023], and the model beat ADVANCE slightly. Regional calibration was
satisfactory. A **competing-risk (Fine-Gray) adjustment** for non-CVD death is built in: it «should
prevent any overestimation of CVD risk, thereby reducing the chances of over-estimating the potential
benefits of CVD risk-modifying treatments» [@score2diabetes2023] — most relevant in
older / high-risk-region patients where competing death is common.

**The worked example — same conventional profile, diabetes factors swung** (moderate-risk region, 60-y-old
non-smoker, SBP 140, TC 5.5, HDL 1.3):

| Diabetes profile | Man | Woman |
|---|---|---|
| Favourable (dx age 60, HbA1c 50, eGFR 90) | 11.0% | 7.9% |
| Unfavourable (dx age 50, HbA1c 70, eGFR 60) | 17.2% | 12.7% |

[@score2diabetes2023] — the unfavourable-profile pair rises to 12.9% / 9.8% in the
low-risk region and 31.2% / 34.0% in the very-high-risk region, i.e. the regional recalibration moves the
number as much as the diabetes factors do.

**What the instrument licenses, and the ceiling it exposes.** Placing a T2D person in the ESC categories
(Table 5 above) is what the model is for — the source names «considering the intensity of existing
treatment (such as lipid lowering therapies) as well as additional interventions to prevent CVD (such as
sodium-glucose co-transporter 2 inhibitors or glucagon like peptide-1 receptor agonists)»
[@score2diabetes2023]. But the decision ceiling is stark: the proportion aged 40-79
with estimated risk >10% ranged «from 61% in the low-risk region to 96% in the very-high-risk region in
men and from 51% to 94%, respectively, in women» [@score2diabetes2023]. So in a high/very-high
region **almost the entire T2D stratum is already treatment-eligible**, and the model's marginal work is
narrow — identifying the minority *below* the treat band, and sizing intensity — while base position
(diabetic, in this region) already licenses treatment. This is the ceiling-is-a-finding pattern: for the
T2D stratum in a high-risk region, the big-rock decision is largely pre-made.

[inferred from @score2diabetes2023]

**Two honesty bounds the source itself states.** (i) Relative-risk estimation for the added variables used
data «from European regions and populations at low or moderate CVD risk» — no large representative high-
risk-region cohorts exist — but the authors argue «while such biases can lead to misleading levels of
absolute risk, relative risks are generally unaffected» [@score2diabetes2023], and
recalibration fixes the absolute level per region. (ii) Medication use, family history, socio-economic
status, ethnicity, and albuminuria were unavailable, so estimates «may require clinical judgement» for
those to whom such factors apply — a named gap, not a covered stratum.

## References

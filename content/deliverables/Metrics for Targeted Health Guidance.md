---
title: "What to Measure: A Minimal Health Checklist"
type: deliverable
subject: The minimal set of readily-capturable health metrics that place a person in the strata the fabric stratifies on
question: What is the smallest set of readily-capturable health metrics that places a person in the strata the wiki actually stratifies on, ordered by decision-impact x capturability, with each metric earning its place only if it significantly changes a stratum or decision?
aliases: [Health Metrics Checklist, What to Measure, Metrics for Targeted Guidance, Stratification Inputs, Layer 2 Input List]
sources: [ESC - CVD Prevention Guidelines 2021, Jha - Smoking Hazards Cessation Benefits 2013, BPLTTC - Blood Pressure Lowering Primary and Secondary Prevention 2021, SPRINT - Intensive vs Standard Blood Pressure 2015, EASL - MASLD Clinical Practice Guidelines 2024, Goldenberg - Low Carbohydrate Diets T2D Remission 2021, Lean - DiRECT T2D Remission 2018, Ference - LDL Cause ASCVD EAS Consensus 2017, Ross - Cardiorespiratory Fitness Clinical Vital Sign 2016, Kodama - Cardiorespiratory Fitness and Mortality 2009, Mandsager - Cardiorespiratory Fitness and Long-Term Mortality 2018, Momma - Muscle-Strengthening Activities and Mortality 2022, Belalcazar - Lifestyle Statins CRP Look AHEAD 2013, Look AHEAD - Cardiovascular Effects Lifestyle T2D 2013]
confidence: medium
created: 2026-07-30
updated: 2026-07-30
self_critiqued: 2026-07-30
---

**The verdict first.** You can place yourself in almost every stratum this wiki gives targeted
guidance on using a handful of free or near-free numbers plus **one standard GP blood draw**. Age,
sex, smoking status, blood pressure and waist do most of the work before any blood is taken; a single
metabolic-and-lipid panel adds the rest. Everything beyond that is an *upgrade* you add only where it
significantly changes a decision — and there is a real list of popular measures that do **not** earn
their place. The bar throughout is not *can it be measured* but *does knowing it move a decision the
evidence can act on*. This names **what to measure**; interpreting a number, setting a reference
range, or acting on it is a clinician's job the wiki cannot do.

This is [[Layer 1 - Ranking Interventions for a Stratum]] applied to *inputs* rather than exposures:
most of the placing value sits in a few cheap measures, so capture those first.

## Tier 1 — free or trivial, and they do most of the placing

- **Age and sex.** They define the reference class and are the first inputs to any cardiovascular-risk
  estimate ([[SCORE2 Baseline Risk and the ESC Treatment Thresholds]]). They also move the *thresholds*
  themselves: the same 10-year CVD risk means different things at different ages — an 8% risk is
  *very high* under 50 but only *high* at 72, because «Age is the major driver of CVD risk»
  [@esc2021, Table 5]. Free, and nothing downstream reads
  correctly without them.

- **Smoking status.** The single largest modifiable exposure, and free to capture. Continuing to smoke
  carries an all-cause mortality hazard around **3x**; quitting by age 40 recovers roughly **10 years of
  life** and removes about **90% of the excess risk**, and quitting still pays at any age
  [@jha2013]. It is also a direct
  cardiovascular-risk-model input. If you smoke, this one line dominates the ranking until it is
  addressed ([[Layer 1 - Ranking Interventions for a Stratum]]).

- **Blood pressure (plus resting heart rate).** The one cardiometabolic lever with a *proven*
  hard-outcome benefit that reaches primary prevention: a 5 mmHg systolic reduction cuts major
  cardiovascular events by about 10% even in people without prior heart disease and even at normal or
  high-normal starting pressures — HR **0.91 (0.89-0.94)** without prior CVD
  [@bplttc2021, Results]. So your
  BP band both places you for risk and flags a lever that works. It is also a SCORE2 input. Resting
  heart rate is a near-free co-marker and feeds the cheap fitness estimate below
  ([[Measuring and Raising Cardiorespiratory Fitness]]).
  - The decision is driven by *overall risk*, not the exact BP number — so measure it, but do not
    chase a threshold: a \~10%-per-5-mmHg relative effect buys little at low absolute risk and a lot at
    high risk ([[Baseline Risk and the Relative-Absolute Split]]).

- **Waist circumference (with height and weight for BMI).** Visceral adiposity is the dominant
  *metabolic* lever and a defining criterion for fatty-liver disease. EASL counts a waist «>=94 cm in
  men and >=80 cm in women (Europeans)» or BMI >=25 among its cardiometabolic criteria
  [@easl2024, Table 3]. Waist beats BMI for
  visceral fat, but BMI is universal and free — so capture both. These are classification thresholds
  (do you carry the risk factor), not targets to hit.

## Tier 2 — one standard GP blood draw (the metabolic + lipid panel)

- **HbA1c.** Places you on the dysglycemia / metabolic-syndrome axis, and it is the lever's own outcome:
  carbohydrate restriction moves HbA1c by **-0.47%** at 6 months (High certainty) and can drive T2D
  remission (risk difference **0.32**, an NNT of about 3, when medication is allowed to continue)
  [@goldenberg2021, Table 2; Results] — and DiRECT
  showed **46% remission** scaling monotonically with weight lost
  [@lean2018, Results]. HbA1c is preferred over fasting glucose: no
  fast needed, less day-to-day noise.

- **Lipid panel: total cholesterol, HDL, triglycerides, and the calculated non-HDL cholesterol.** The
  causal agent in atherosclerosis is not cholesterol mass but the **apoB-containing particles** that
  carry it, and «LDL causes ASCVD» on genetic, Mendelian-randomization and trial evidence together
  [@ference2017]. The catch for this stratum:
  «in certain conditions (e.g. the metabolic syndrome, diabetes, and hypertriglyceridaemia), plasma
  LDL-C and LDL particle concentration can become discordant» — small dense particles pack more apoB
  into a given cholesterol mass, so **LDL-C can under-state the atherogenic burden**
  [@ference2017]. Non-HDL cholesterol (total minus
  HDL) is the cheap, standard proxy: it captures all the apoB-carrying fractions, so for the
  metabolically-impaired, emphasise **non-HDL over LDL-C** as the headline lipid.

- **ALT (a liver aminotransferase).** The standard first-pass screen for the fatty-liver stratum, which
  this population leans toward: MASLD is «steatotic liver disease... in the presence of one or more
  cardiometabolic risk factor(s)», so a person with central adiposity plus metabolic syndrome
  effectively has it by definition [@easl2024, 
  Preamble]. Read it knowing its limit: for MASLD the risk that matters tracks **fibrosis stage, not
  liver fat or enzymes** — «the presence of steatosis in the general population is not associated with a
  clinically meaningful increase in the risk of liver-related outcomes»
  [@easl2024, Obesity]. So ALT flags the
  stratum cheaply; it does not stage it, and for most people the dominant MASLD risk is cardiovascular,
  handled by the same weight lever already indicated.

## Tier 3 — add only where it significantly moves the needle (note the capturability cost)

- **Lp(a), once in a lifetime.** An independent, largely genetic apoB-containing particle
  [@ference2017]; it is stable over life, so a
  single measurement suffices. High-impact for the roughly one-in-five who carry an elevated level and
  increasingly a standard order. Add it once.

- **ApoB, where available — the upgrade over non-HDL.** The direct particle count, better than any
  proxy, and apoB is the more accurate target for reflecting atherogenic-particle burden
  [@ference2017]. It is still at the edge of the
  standard battery (not universally available), so treat it as the upgrade you use *instead of* non-HDL
  where you can get it, not a baseline requirement.

- **Cardiorespiratory fitness (VO2max / CRF).** Among the strongest mortality predictors in medicine —
  each 1-MET higher CRF carries **13%** lower all-cause and **15%** lower cardiovascular mortality, with
  «no observed upper limit of benefit», and being unfit is a *larger* mortality signal (low-vs-elite HR
  5.04) than smoking (1.41) or diabetes (1.40) in the same model
  [@kodama2009, 
  (Mandsager - Cardiorespiratory Fitness and Long-Term Mortality 2018)]. A precise number needs
  an exercise test, so the population-available route is the **non-exercise estimated CRF (eCRF)**: 13
  cross-validated equations predict fitness from routine inputs (age, sex, BMI, resting heart rate,
  self-reported activity) and predict long-term mortality comparably to measured CRF
  [@ross2016] — every input already captured
  in Tier 1. Note this is a *predictor*, and the observational evidence cannot fully prove that raising
  it lengthens life; the proven lever underneath is physical activity, and CRF is how you track whether
  it is working ([[Cardiorespiratory Fitness and Mortality]]).

- **Grip strength — high-yield if available, but currently unheld here.** A cheap hand dynamometer
  reading is among the strongest mortality, falls and disability predictors, and strength training's
  best-evidenced payoff runs through function and falls, not the very-low-certainty mortality signal
  ([[Muscle-Strengthening Activity and Mortality]]) [@momma2022]. It is trivial to add but not yet a standard GP measure — and, like CRF, it is a
  predictor rather than proof that acting on it moves the outcome. The wiki holds **no dedicated
  grip-strength source**, so this is flagged high-yield-if-available at that honest strength, not banked.

## The "does not move the needle enough" list — named, not padded

- **Body fat % (DEXA / BIA).** Waist is the cheaper, population-available visceral proxy and adds most
  of the same decision value; DEXA/BIA is not a standard GP battery. **Skip** — waist covers it.

- **hsCRP (high-sensitivity C-reactive protein).** It moves an inflammatory *marker* but is weakly tied
  to a decision, and the wiki's own worked case shows the trap: in Look AHEAD, intensive lifestyle cut
  CRP by roughly **42-45%** on top of statins — «Weight loss was significantly associated with a
  reduction in CRP levels» [@belalcazar2013] — yet the
  cardiovascular events did not follow (HR **0.95; 95% CI 0.83 to 1.09**)
  [@look2013]. A marker moving the right way is
  not the outcome moving ([[Surrogate Outcomes]]). **Low priority / optional**, not baseline.

- **Fasting glucose.** Largely redundant with HbA1c, which is preferred (no fast, less noise).
  **Skip as a separate line.**

- **LDL-C as the headline lipid.** Keep it in the panel, but **de-emphasise it in favour of
  non-HDL/apoB** for the metabolically-impaired, where the two diverge
  ([[LDL ApoB and Cumulative Exposure]]). Not dropped — demoted.

## Caveats (read before acting on any of this)

- **Capture, not interpret or prescribe.** Reference ranges, diagnosis, and deciding what a number
  means *for you* are clinician acts. This is a list of *what to measure*, full stop.

- **The evidence loop is open.** The impact ranking grades what the held evidence says changes a
  decision — never whether capturing these metrics improves a real-world outcome. A tidy list is not a
  validated one.

- **A general default, tuned per person.** Which metrics matter most depends on the individual: a lean,
  active, non-smoking 25-year-old and a drifting-median metabolic-syndrome adult need different
  emphases. The tiers are the starting order, not a fixed prescription — the personal weighting happens
  when the estimate is applied to a specific case.

## Gaps this checklist rests on

- **No head-to-head added-value evidence.** The tiering rests on mechanism and predictor strength, not
  on studies showing that apoB over non-HDL, VO2max over eCRF, or grip over nothing *reclassifies* a
  decision. A risk-reclassification / incremental-value source would firm this up.

- **Thin or unheld metrics.** Grip strength has no dedicated held source; Lp(a) and direct apoB are
  supported only as particles within the LDL/apoB causal framework, not by measurement-focused sources.
  They are cited here at the strength currently held, and would be strengthened by targeted ingests.

## References

---
title: "What to Measure: A Minimal Health Checklist"
type: deliverable
subject: The minimal readily-capturable metric set that places a person in the strata the fabric stratifies on
question: What is the smallest set of readily-capturable health metrics that supports targeted guidance, added only where each significantly moves a decision?
aliases: [Health Metrics Checklist, Metrics to Capture, Targeted Guidance Inputs, What to Measure]
sources: [ESC - CVD Prevention Guidelines 2021, Ference - LDL Cause ASCVD EAS Consensus 2017, BPLTTC - Blood Pressure Lowering Primary and Secondary Prevention 2021, EASL - MASLD Clinical Practice Guidelines 2024, Goldenberg - Low Carbohydrate Diets T2D Remission 2021, Kodama - Cardiorespiratory Fitness and Mortality 2009, Momma - Muscle-Strengthening Activities and Mortality 2022, WHO - Saturated and Trans Fatty Acid Intake 2023]
confidence: low
created: 2026-07-29
updated: 2026-07-29
self_critiqued: 2026-07-29
---

**What to measure so the guidance can be targeted.** The evidence speaks in *strata* — a reference class,
not a person; targeted advice needs your data to place you in the right class. This is the **input list**:
the minimal, readily-capturable set that does most of that placing, ordered by *decision-impact x
capturability*. A metric is here only if knowing it **changes a stratum or a decision** the fabric can
act on — not because it can be measured.

**This is a capture list, not a diagnosis.** Reference ranges, interpretation, and acting on a number are
clinician acts. Naming *what to measure* is in scope; *what it means for you* is not.

## Tier 1 — free or trivial, and they do most of the placing

- **Age and sex** — define the reference class; the first inputs to any cardiovascular-risk estimate
  ([[SCORE2 Baseline Risk and the ESC Treatment Thresholds]]).
- **Smoking status** — the single largest modifiable exposure and a risk-estimate input; free to ask.
- **Blood pressure** — the cardiometabolic lever with the best proven primary-prevention benefit
  ([[Blood Pressure Lowering and Cardiovascular Events]]); a risk-estimate input; a home cuff suffices.
- **Resting heart rate** — a cheap co-marker, and an input to a no-test fitness estimate (below).
- **Waist circumference** (plus **height/weight -> BMI**) — visceral adiposity is the dominant *metabolic*
  lever and a MASLD criterion ([[Fatty Liver MASLD and Weight Loss]]); **waist beats BMI for visceral
  fat**, but BMI is universal and free, so record both. A tape measure is the whole apparatus.

## Tier 2 — one standard GP blood draw

- **HbA1c** — places the dysglycemia / metabolic-syndrome stratum ([[Carbohydrate Restriction and Type 2 Diabetes Remission]]); preferred over fasting glucose (no fast, less day-to-day noise).
- **Lipid panel -> total cholesterol, HDL, triglycerides, and the CALCULATED non-HDL.** Non-HDL is the
  cheap, standard **apoB proxy** — it counts all the atherogenic (apoB-containing) particles — and for
  the metabolically-impaired it beats LDL-C, which *under-states* the particle burden when small-dense
  LDL predominates ([[LDL ApoB and Cumulative Exposure]]). **Read non-HDL, not LDL-C, as the headline
  here.**
- **ALT** — the cheapest MASLD screen ([[Fatty Liver MASLD and Weight Loss]]); standard, and this stratum
  leans MASLD.

## Tier 3 — add ONLY where it significantly moves the needle (and note the capture cost)

- **Lp(a)** — an independent, genetically-set apoB particle ([[LDL ApoB and Cumulative Exposure]]);
  **measure once in a lifetime**, increasingly standard, and decision-changing for the ~1 in 5 who carry
  a high level. High yield for a one-off test.
- **ApoB** — the *direct* causal particle count, better than any proxy — but not yet universally on the
  standard panel. **Take it as the upgrade over non-HDL where it is available**, not as a baseline
  requirement.
- **VO2max / cardiorespiratory fitness** — among the strongest mortality predictors
  ([[Cardiorespiratory Fitness and Mortality]]); but it needs a test, so the **non-exercise estimate**
  (from age + resting heart rate + activity, all already in Tier 1) is the population-available route
  ([[Measuring and Raising Cardiorespiratory Fitness]]).
- **Grip strength** — a cheap hand dynamometer, and among the strongest mortality predictors
  ([[Muscle-Strengthening Activity and Mortality]]); not yet a standard GP measure but trivial to add —
  high-yield-if-available.

## What NOT to capture (it does not move the needle enough)

- **Body-fat % (DEXA/BIA)** — waist is the cheaper, population-available visceral proxy and carries most
  of the decision value; DEXA/BIA is not a standard GP battery. **Waist covers it.**
- **hsCRP** — moves an inflammatory *marker* but is weakly tied to decisions, and the wiki's own worked
  case shows the marker can fall while outcomes do not ([[Does Weight Loss Reduce Cardiovascular Events]]: CRP dropped ~42% with no event benefit). **Optional, not baseline.**
- **Fasting glucose** — largely redundant with HbA1c. **Skip as a separate line.**
- **LDL-C as the headline lipid** — kept in the panel, but **read non-HDL/apoB instead** for the
  metabolically-impaired (it under-states particle burden). Not dropped, de-emphasised.

## The honest limits

- **Open loop:** the impact ranking grades what the held evidence says *changes a decision*, never
  whether capturing these metrics improves a real outcome. And the wiki holds **no head-to-head
  added-value study** (apoB over non-HDL, VO2max over the estimate, grip over nothing) — the tiering
  rests on predictor/mechanism strength, not a reclassification trial.
- **Capture, not interpret or prescribe:** this names what to measure; ranges, diagnosis and action are
  a clinician's.
- **A general default, tuned per person:** which metrics matter most shifts by stratum (a lean
  25-year-old and the drifting-median adult need different emphases); the tiers are the starting default,
  not a fixed prescription.

## Self-critique `[run 2026-07-29, before commit]`

- **Inclusion bar held:** every metric is tied to a *held page that makes it decision-relevant*, and the
  skip-list names four candidates rejected on the move-the-needle test (body-fat%, hsCRP, fasting
  glucose, LDL-C-as-headline) — so the list is Pareto, not a data-dump.
- **Capturability honoured:** ApoB is placed as an *upgrade-if-available* over the non-HDL proxy, VO2max
  behind its no-test estimate, grip flagged as non-standard — matching the population-available constraint.
- **Scope guard:** no reference ranges or interpretation; the open-loop and capture-not-prescribe caveats
  are explicit; the no-added-value-study gap is named rather than papered over.

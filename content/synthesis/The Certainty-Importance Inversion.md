---
type: synthesis
question: When a dietary guideline states high certainty, is it confident about the outcome I care about — or only about the marker?
aliases: [Certainty Inversion, Certainty-Importance Inversion, Surrogate Certainty Gap, Confident About the Wrong Quantity]
authors: [World Health Organization (org)]
sources: [WHO - Saturated and Trans Fatty Acid Intake 2023, WHO - Sodium Intake 2012, WHO - Physical Activity Web Annex Evidence Profiles 2020]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-07-28
relationships:
  related_to:
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
    - Surrogate Outcomes
    - Certainty of Evidence vs Strength of Recommendation
    - Measurement Error in Dietary Assessment
    - Saturated Fat Intake and Replacement
    - Sodium Intake and Blood Pressure
    - Physical Activity Dose and Mortality
---

**Type-A synthesis (a structure induced across sources, present as a general claim in none).** Two
dietary exposures the wiki holds — saturated fat and sodium — share one shape: **the guideline is rated
most certain about the surrogate and least certain about the patient-important outcome the surrogate
stands for.** Each source states its own split; neither states the regularity, and neither holds the
counter-instance that reveals what actually drives it.

## The pattern — matched on within-exposure certainty

The compared parameter is **GRADE certainty on the surrogate vs certainty on the patient-important
outcome, within the same guideline's own evidence profile** — both grades are the body's own, on the
same exposure, so this is like-for-like.

| Exposure | Surrogate — certainty | Patient-important outcome — certainty | Gap | Carrier page |
|---|---|---|---|---|
| Reduce saturated fat | LDL cholesterol — **HIGH** | CVD events — Moderate; all-cause mortality — Moderate (null) | 1 level | [[Saturated Fat Intake and Replacement]] |
| Reduce sodium | blood pressure — **HIGH** | direct cohort hard outcomes — **VERY LOW** (fatal stroke Low; one 2-RCT CVD estimate Moderate) | up to 3 levels | [[Sodium Intake and Blood Pressure]] |

**In both cases the best-known quantity is the marker, not the outcome.** WHO's sodium guideline makes
the move explicit — because the direct outcome evidence is very low, *«the evidence of an effect of
sodium on blood pressure was also considered moderate-quality evidence that reduced sodium is beneficial
for reducing risk of cardiovascular disease»* — the outcome recommendation is carried by the surrogate,
transferred down one level (WHO Sodium Annex 8, on [[Sodium Intake and Blood Pressure]]). The sodium gap
quoted above is floor-to-ceiling; the *effective* gap after that transfer is narrower.

## The counter-instance, and what it reveals about the cause

**The inversion is NOT a law, and physical activity breaks it:** it is rated **HIGH certainty on
all-cause mortality itself** — a patient-important outcome, no surrogate needed (total activity HR 0.34,
0.27-0.43, HIGH; on [[Physical Activity Dose and Mortality]]). There is no gap to invert.

**Attempting this contradiction relocates the cause — and the first candidate cause fails.** The obvious
story is *self-reported diet flattens the outcome signal*. **Sodium refutes it:** sodium exposure is
**objectively measured** — urinary sodium is a recovery biomarker, absolute not self-reported
([[Measurement Error in Dietary Assessment]]) — yet sodium carries the *widest* outcome-certainty gap of
any exposure here. If self-report were the driver, the best-measured exposure would not be the
worst-graded on outcomes.

**So the driver is the availability of credible hard-outcome evidence, not how the exposure is
measured:**

- **sodium's** hard-outcome evidence is **cohort** (very low), because almost no trials randomised
  people to a sodium intake and followed them to events; its blood-pressure evidence is 36 RCTs (high);
- **physical activity's** HIGH grade rests on **eight harmonized cohorts, all device-measured, with a
  mortality endpoint** — the outcome itself has been studied at scale;
- **self-report is a real aggravator on the diet side but a secondary one** — it is why SFA's
  *observational* mortality estimate is graded Very low, but it is not why sodium's is.

The inversion is therefore a symptom of **thin hard-outcome trial evidence meeting a well-studied
marker** — wherever the outcome has been tried (or measured in large objective cohorts), certainty can
attach to the outcome directly.
`[INFERRED (WHO - Sodium Intake 2012; WHO - Saturated and Trans Fatty Acid Intake 2023;
WHO - Physical Activity Web Annex Evidence Profiles 2020) — each certainty grade and the sodium
biomarker classification are the sources'; the cross-exposure regularity, the counter-instance, and the
trial-availability mechanism are this page's]`

## Why carbohydrate restriction is NOT a third instance

It looks like one — HbA1c is graded High at 6 months while medication-free remission is Low
([[Carbohydrate Restriction and Type 2 Diabetes Remission]]) — but the structure differs. **HbA1c does
not *stand for* remission; remission is defined as an HbA1c threshold**, so this is a marker against a
stricter cut of the same marker (plus medication status), not a surrogate standing for a distinct
patient-important outcome (events, death). Its lower certainty comes from few, short trials and
medication withdrawal, not from a surrogate-to-outcome transmission gap. Recorded as a **distinction**,
not folded in — including it would stretch the pattern to fit.

## Why it is a decision-change, not a curiosity

**When a dietary guideline sounds confident, check what the confidence is attached to.** For these
exposures it attaches to a marker (LDL, blood pressure), and the patient-important outcome sits one to
three levels lower — so:

- **Discount confident surrogate-based dietary advice toward the outcome's certainty, not the marker's**
  -> [[Surrogate Outcomes]]. A *strong* recommendation resting on *high* LDL evidence is not a strong
  claim that fewer people die — the SFA guideline is the worked case (strong recommendation, HIGH on
  LDL, all-cause mortality a Moderate-certainty null).
- **What would raise the certainty is a hard-outcome trial, not another marker study** — the gap does
  not close by measuring LDL or blood pressure more precisely.

## Limits

- **Two instances and one counter-instance** — a pattern with a boundary, not a proven law.
- **Not independent corroboration.** Both inverted instances are WHO guidelines applying the same GRADE
  machinery, so their shared shape is partly a shared *method*, not two independent witnesses — which is
  itself part of the finding (the inversion may be as much a property of how GRADE meets thin outcome
  evidence as of the evidence). No `[E-independent]`.
- **Coherence, not validity** (method-risks R1): the pattern says where guidance is *certain*, not where
  it is *right*. A high-certainty surrogate may transmit to the outcome exactly as claimed; the
  inversion is about warrant, not truth.

## Self-critique `[run 2026-07-28, before commit — two defects caught and fixed]`

- **The first mechanism was self-refuting and was replaced.** The draft blamed *self-reported diet* and
  listed sodium among the self-reported exposures — but sodium is objectively measured (recovery
  biomarker) and has the widest gap, which falsifies that mechanism. Corrected to **hard-outcome trial
  sparsity**, with sodium as the proof rather than an example of self-report.
- **A stretched instance was removed.** Carbohydrate restriction was dropped from the pattern (HbA1c is
  the remission-defining marker, not a surrogate for a distinct outcome) and re-filed as a distinction —
  the not-joined discipline over instance-count.
- **Parameter-table discipline:** the matched quantity is within-exposure certainty (surrogate vs
  outcome), both grades from the same body's own profile — not LDL compared to blood pressure across
  exposures.
- **Independence checked and denied:** both instances are WHO/GRADE — recorded as a limit, no E-claim.

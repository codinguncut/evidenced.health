---
type: framework
question: Does using a continuous glucose monitor to guide diet and behaviour improve health outcomes, especially in people without diabetes?
aliases: [CGM, Continuous Glucose Monitoring, Glucose Tracking, Glucose Monitor, Levels, Time in Range]
authors: [Richardson, Kelli M; Jospe, Michelle R; Bohlen, Lauren C; Crawshaw, Jacob; Saleh, Ahlam A; Schembre, Susan M]
sources: [Richardson - CGM Behaviour Change 2024]
cluster: cardiometabolic-exposures
confidence: low
relationships:
  related_to:
    - Surrogate Outcomes
    - Sodium Intake and Blood Pressure
    - Is the Food Category Doing Any Work
created: 2026-07-29
updated: 2026-07-29
self_critiqued: 2026-07-29
---

**The decision.** Should someone — particularly a non-diabetic optimizing their diet — wear a CGM to
guide eating? The efficacy question is whether CGM-driven behaviour change moves a health outcome, not
whether the trace is interesting.

## Efficacy verdict — a modest surrogate effect concentrated in diabetes; thin-to-absent for the healthy

Richardson et al. 2024 (SR+MA of RCTs where CGM feedback was the intervention vs a no-CGM control):

- **The effect is on a surrogate, and modest:** «Interventions incorporating CGM-based feedback reduced
  HbA1c by 0.28% (95% CI 0.15, 0.42, p < 0.001; I^2 = 88%), and increased time in range by 7.4% (95% CI
  2.0, 12.8, p < 0.008; I^2 = 80.5%) compared to arms without CGM, **with non-significant effects on
  time above range, BMI, and weight**.» [EXTRACTED @richardson2024 chunk 01]
  The heterogeneity is high (I^2 88%), and HbA1c/TIR are surrogates -> [[Surrogate Outcomes]], not
  patient-important endpoints.
- **The evidence is overwhelmingly diabetes, not the healthy self-optimizer:** «Most studies were
  conducted in adults with type 2 diabetes (n = 17/25; 68%), followed by type 1 diabetes (n = 3/25,
  12%), gestational diabetes (n = 3/25, 12%), and obesity (n = 3/25, 12%).» [EXTRACTED @richardson2024 chunk 01] **The "without diabetes" arm is 3 obesity trials** — there is
  essentially no trial evidence in metabolically-healthy non-diabetics, exactly where CGMs are now
  marketed. Reading the pooled HbA1c gain across to a healthy person is a transportability leap the data
  do not support.
- **The behaviour-change *mechanism* is barely measured:** «Only 4/25 studies evaluated the effect of
  CGM on dietary changes; 5/25 evaluated physical activity.» [EXTRACTED @richardson2024 chunk 01] So *how* CGM would help a non-diabetic (by changing what they eat) is largely
  unmeasured even in this evidence base.
- **Conflicts of interest are pervasive:** «Eleven (44%) studies reported CGM-affiliated conflicts of
  interest.» [EXTRACTED @richardson2024 chunk 01] Symmetric standards: this
  raises the scrutiny on an already-modest surrogate effect.

The authors' own summary is calibrated: «favourable, though modest, effects of CGM-based feedback on
glycaemic control in adults with and without diabetes» [EXTRACTED @richardson2024 chunk 01] — glycaemic control, i.e. the surrogate, not a hard outcome.

## The measurement limits sit on top of the thin efficacy (Challenge #14)

Even where CGM moves the surrogate, it optimizes a *partial* one. A CGM measures **interstitial glucose
only** — it is blind to fructose and galactose, and (measuring glucose, not insulin) blind to the
insulin response, so a protein- or fat-driven insulin excursion with little glucose rise is invisible.
Optimizing the glucose trace can therefore mean optimizing an incomplete picture of the regulated
system. These limits were sound as stated (challenge #14); the efficacy evidence above is the reason
they matter — the instrument is a partial surrogate whose transmission to a patient-important outcome in
non-diabetics is **unevidenced**.

## Decision relevance

- **For a person with diabetes:** CGM plausibly helps glycaemic control modestly (HbA1c ~-0.28%) — a
  prescriber-managed decision, out of this wiki's scope.
- **For the metabolically-healthy self-optimizer:** the efficacy case is **not made** — no healthy-
  non-diabetic trials, a null on weight/BMI, an unmeasured behaviour mechanism, a partial surrogate, and
  pervasive COI. The honest read is *insufficient evidence of benefit*, not *proven useless*.

## Limits

- **Single SR/MA, `confidence: low`.** No hard-outcome (event/mortality) trial exists in any population
  here; everything is HbA1c/TIR/anthropometry.
- **Not a prescriber tool assessment** — CGM in diabetes management (dosing, hypoglycaemia detection) is
  a different question this page does not address.

## Self-critique `[run 2026-07-29, before commit]`

- **Over-claim check:** the verdict is scoped to *behaviour-change efficacy on measured outcomes*; it
  does NOT claim CGM is useless (insufficient-evidence ≠ no-effect) and flags the diabetes-management use
  as out of scope.
- **Symmetric standards:** the COI and the healthy-population gap are applied as scrutiny, not as a
  dismissal; the real HbA1c effect in diabetes is stated at face value.
- **Surrogate discipline:** held throughout — HbA1c/TIR named as surrogates, the non-diabetic
  transmission called unevidenced.

## References

---
type: concept
question: When an observational exposure shows a protective lower arm (a U/J-curve), is the protection real or a study-design artifact — and how do you tell?
aliases: [U-Shaped Artifact, J-Curve Artifact, Protective Lower Arm, Reverse Causation Curve, Sick-Quitter Bias]
authors: [Stockwell, Tim; Millwood, Iona Y; Cappuccio, Francesco P; Dehghan, Mahshid]
sources: [Stockwell - Moderate Drinkers Mortality Risk 2016, Millwood - Alcohol and Vascular Disease Genetic Evidence 2019, Cappuccio - Sleep Duration and Mortality 2010, Jha - Smoking Hazards Cessation Benefits 2013, Dehghan - PURE Fats Carbohydrate Mortality 2017]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-07-28
created: 2026-07-28
updated: 2026-07-29
relationships:
  related_to:
    - Alcohol and Mortality and Vascular Disease
    - Sodium Intake and Blood Pressure
    - Measurement Error in Dietary Assessment
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
  [EXTRACTED (Stockwell - Moderate Drinkers Mortality Risk 2016) chunk 01, Conclusions]
- **Reverse causation** — poor health lowers the exposure, not the reverse.
- **Confounding by lifestyle / frailty** — the intermediate-exposure group differs systematically
  (Naimi 2005, reported by Stockwell: «27 (90%) of 30 potential adverse confounders for coronary heart
disease were more prevalent among abstainers than among moderate drinkers»).
- **Unequal between-group precision** — per the telos, differential reporting/measurement precision can
  bend a flat relationship into a U with no bias and no confounder, passing both standard checks.

## The three adjudication routes — and what they showed for alcohol

| Route | What it does | Alcohol verdict |
|---|---|---|
| **Bias-stratified / referent correction** | re-analyse with never-drinkers (not ex-drinkers) as referent; keep only bias-free studies | protection vanishes: RR 0.97 (0.88-1.07), bias-free 0.90 (0.76-1.06), both ns (Stockwell) |
| **Mendelian randomization** | genetic instruments fix lifetime exposure, immune to reverse causation | monotonic harm for stroke, no protective arm (Millwood) |
| **Exclude early follow-up / sick baseline** | remove the reverse-causation window | U-shape *persisted* observationally — so this alone is insufficient (Millwood) |

[EXTRACTED (Stockwell - Moderate Drinkers Mortality Risk 2016) chunk 01, Results;
(Millwood - Alcohol and Vascular Disease Genetic Evidence 2019) chunk 01, Results]

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
  (RR 1.30) has no demonstrated mechanism and is «a powerful additional marker of ill-health» (reverse
  causation), while the *short*-sleep arm (RR 1.12) carries a mechanism and cause-specific evidence
  -> [[Sleep Duration and Mortality]]. **New nuance: the artifact can occupy ONE arm of a U-curve while
  the other arm is causal** — so *adjudicate the arm*, not the curve. The tells that flagged it were the
  concept's own: the artifact arm was the *larger* association, had higher heterogeneity, and
  strengthened with age (a frailty gradient, not a dose-response).
- **Muscle-strengthening activity — a J-shape with its own counter-instance built in.** MSA shows a
  J-shaped dose-response for all-cause mortality/CVD/cancer (nadir in a wide, imprecise ~30-80 min/week
  region, hazard rising above 1.0 past ~140 min/week) — but an **L-shape** (no upturn) for **diabetes**,
  the one outcome with a clear
  muscle-glucose mechanism -> [[Muscle-Strengthening Activity and Mortality]]. This is the sharpest
  single-source instance of the *adjudicate-the-arm* rule: **the outcome whose mechanism is clear shows
  no upturn; the outcomes whose upturn lacks a mechanism show one** — plus very-low GRADE, self-reported
  exposure, and sparse high-volume data. The upper arm is the artifact-suspect region and is left
  unbelieved; the lower arm (a small effective dose) is kept.
- **Macronutrients in PURE — confounding-by-income, the machinery without (mostly) the U.**
  [[Dehghan - PURE Fats Carbohydrate Mortality 2017]] found higher carbohydrate → higher mortality and
  higher fat/SFA → *lower* mortality across an 18-country income gradient. The associations are largely
  **monotone**, not U-shaped — so this is not a lower-arm case — but it is a clean instance of the
  concept's **confounding-by-lifestyle/frailty** mechanism in its socioeconomic form: the highest-carb
  quintiles are the poorest (refined-carb subsistence diets), so the fat-protective / carb-harmful
  signals are the mirror of an income gradient, which the authors concede («residual confounding...
  cannot be completely excluded»). [EXTRACTED (Dehghan - PURE Fats Carbohydrate Mortality 2017) chunk
  01, Discussion] The **one candidate U-arm** is the authors' suggestion that «a very low intake (ie,
  below about 7% of energy) [of saturated fat] might even be harmful» — a low-SFA arm that would be the
  artifact-suspect region (very low SFA tracks very low animal-food intake, i.e. poverty/frailty), and
  is **unadjudicated**: no referent-correction or genetic check isolates it from the income confound.
  The decision rule applies unchanged — the protective/harmful arm is not believed until it survives a
  confounder-immune check -> [[Saturated Fat Intake and Replacement]].
  reason for its review, then «never returned to» it, and excluded a priori the strata where a
  lower-arm harm is most plausible -> [[Sodium Intake and Blood Pressure]]. The concept says exactly
  what would settle it: a referent-corrected or MR analysis of the low-intake arm, which the corpus
  does not yet hold.
- **Smoking cessation — not a U-curve, but the cleanest worked *sick-quitter correction*.** Jha 2013
  ([[Smoking and Mortality]]) states the mechanism exactly — «Life-threatening illness can cause smokers
  to quit, which distorts the rates of death among current smokers and among those who have quit smoking
  recently in opposite ways» — and applies the canonical fix: **reclassify anyone who quit within 5 years
  of death as a current smoker**, then check by dropping the first 2 years of follow-up (unchanged). It is
  the template for the correction this concept keeps invoking (alcohol, sleep): the fix biases *against*
  the finding, so a benefit that survives it is conservative, not inflated. A monotone-harm exposure, but
  the reverse-causation machinery is identical.
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
- **Coherence, not validity** (R1): the concept says when a protective arm is *unwarranted*, not that
  the exposure is harmful; it is a rule about evidence, not about the world.

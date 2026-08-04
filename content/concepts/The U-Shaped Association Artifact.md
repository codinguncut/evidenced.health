---
type: concept
question: When an observational exposure shows a protective lower arm (a U/J-curve), is the protection real or a study-design artifact — and how do you tell?
aliases: [U-Shaped Artifact, J-Curve Artifact, Protective Lower Arm, Reverse Causation Curve, Sick-Quitter Bias]
authors: [Stockwell, Tim; Millwood, Iona Y; Dehghan, Mahshid; Cappuccio, Francesco P; World Health Organization (org); Jha, Prabhat; National Academies of Sciences Engineering and Medicine (org); He, Feng J; MacGregor, Graham A; Shan, Zhilei]
sources: [Stockwell - Moderate Drinkers Mortality Risk 2016, Millwood - Alcohol and Vascular Disease Genetic Evidence 2019, Dehghan - PURE Fats Carbohydrate Mortality 2017, Cappuccio - Sleep Duration and Mortality 2010, WHO - Non-Sugar Sweeteners 2023, Jha - Smoking Hazards Cessation Benefits 2013, NASEM - Reproducibility and Replicability in Science 2019, He - Salt Reduction Blood Pressure 2013, Huang - Sodium Dose Duration Blood Pressure 2020, Shan - Sleep Duration Type 2 Diabetes Meta-Analysis 2015]
cluster: evidence-appraisal
confidence: medium
created: 2026-07-28
updated: 2026-08-01
self_critiqued: 2026-08-01
relationships:
  related_to:
    - Alcohol and Mortality and Vascular Disease
    - Sodium Intake and Blood Pressure
    - Measurement Error in Dietary Assessment
    - Non-Sugar Sweeteners
    - P-Hacking and Researcher Degrees of Freedom
    - Sleep and Metabolic Health
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
  [@stockwell2016, Conclusions]
- **Reverse causation** — poor health lowers the exposure, not the reverse.
- **Confounding by lifestyle / frailty** — the intermediate-exposure group differs systematically
  (Naimi 2005, reported by Stockwell: «27 (90%) of 30 potential adverse confounders for coronary heart
disease were more prevalent among abstainers than among moderate drinkers»).
- **Unequal between-group precision** — per the telos, differential reporting/measurement precision can
  bend a flat relationship into a U with no bias and no confounder, passing both standard checks.
- **Analytic multiplicity / the garden of forking paths** — an analyst free to choose the referent, the
  covariate set, the exposure cut-points, and the subgroup can *land on* a protective arm among many
  paths, and selection publishes the significant one. NASEM's worked case is the post-hoc astrological
  subgroup that found «Geminis and Libras did not benefit from aspirin, while Capricorns benefited the
  most» — «This obviously spurious relationship illustrates the dangers of analyzing data with
  hypotheses and subgroups that were not prespecified.» A curve's *shape* is one of those choices, so an
  un-prespecified U carries the same discount -> [[P-Hacking and Researcher Degrees of Freedom]].
  [@nasem2019, Peto 2011]

## The three adjudication routes — and what they showed for alcohol

| Route | What it does | Alcohol verdict |
|---|---|---|
| **Bias-stratified / referent correction** | re-analyse with never-drinkers (not ex-drinkers) as referent; keep only bias-free studies | protection vanishes: RR 0.97 (0.88-1.07), bias-free 0.90 (0.76-1.06), both ns (Stockwell) |
| **Mendelian randomization** | genetic instruments fix lifetime exposure, immune to reverse causation | monotonic harm for stroke, no protective arm (Millwood) |
| **Exclude early follow-up / sick baseline** | remove the reverse-causation window | U-shape *persisted* observationally — so this alone is insufficient (Millwood) |

[@stockwell2016, Results; (Millwood - Alcohol and Vascular Disease Genetic Evidence 2019) , Results]

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
  (RR 1.30) has no demonstrated mechanism and is «a powerful additional marker of ill-health» (reverse  [@cappuccio2010]
  causation), while the *short*-sleep arm (RR 1.12) carries a mechanism and cause-specific evidence
  -> [[Sleep Duration and Mortality]]. **New nuance: the artifact can occupy ONE arm of a U-curve while
  the other arm is causal** — so *adjudicate the arm*, not the curve. The tells that flagged it were the
  concept's own: the artifact arm was the *larger* association, had higher heterogeneity, and
  strengthened with age (a frailty gradient, not a dose-response).
  - **Second sleep instance, different outcome — the arm-level rule replicates.** Shan's sleep-duration
    U-curve for **incident type 2 diabetes** (nadir 7-8 h) shows the identical asymmetry: the short arm
    shows no nonlinearity detected (P=0.22) with a human-corroborated glucose/insulin mechanism, while the
    long arm is *«currently considered more speculative»*, carries higher heterogeneity, and goes
    borderline (1.09, 0.99-1.12) when one study (Tuomilehto) is dropped — Shan even allows *«long sleep
    is a consequence of the sleep-inducing effects of the inflammatory state»* (reverse causation).
    [@shan2015] Shan runs only the
    *weak* check (multivariable adjustment, which the long arm survives); no referent-correction or MR,
    so the long-sleep -> T2D arm stays **unadjudicated**. Not an independent witness to Cappuccio —
    overlapping cohorts + shared Hu/Jackson lineage -> **type-F** (same reverse-causation mechanism, new
    outcome) -> [[Sleep and Metabolic Health]].
- **Muscle-strengthening activity — a J-shape with its own counter-instance built in.** MSA shows a
  J-shaped dose-response for all-cause mortality/CVD/cancer (nadir in a wide, imprecise \~30-80 min/week
  region, hazard rising above 1.0 past \~140 min/week) — but an **L-shape** (no upturn) for **diabetes**,
  the one outcome with a clear
  muscle-glucose mechanism -> [[Muscle-Strengthening Activity and Mortality]]. This is the sharpest
  single-source instance of the *adjudicate-the-arm* rule: **the outcome whose mechanism is clear shows
  no upturn; the outcomes whose upturn lacks a mechanism show one** — plus very-low GRADE, self-reported
  exposure, and sparse high-volume data. The upper arm is the artifact-suspect region and is left
  unbelieved; the lower arm (a small effective dose) is kept.
- **Macronutrients in PURE — confounding-by-income, the machinery without (mostly) the U.**
  Dehghan found higher carbohydrate → higher mortality and
  higher fat/SFA → *lower* mortality across an 18-country income gradient. The associations are largely
  **monotone**, not U-shaped — so this is not a lower-arm case — but it is a clean instance of the
  concept's **confounding-by-lifestyle/frailty** mechanism in its socioeconomic form: the highest-carb
  quintiles are the poorest (refined-carb subsistence diets), so the fat-protective / carb-harmful
  signals are the mirror of an income gradient, which the authors concede («residual confounding...
  cannot be completely excluded»). [@dehghan2017, Discussion] The **one candidate U-arm** is the authors' suggestion that «a very low intake (ie,
  below about 7% of energy) [of saturated fat] might even be harmful» — a low-SFA arm that would be the
  artifact-suspect region (very low SFA tracks very low animal-food intake, i.e. poverty/frailty), and
  is **unadjudicated**: no referent-correction or genetic check isolates it from the income confound.
  The decision rule applies unchanged — the protective/harmful arm is not believed until it survives a
  confounder-immune check -> [[Saturated Fat Intake and Replacement]].
- **Non-sugar sweeteners — reverse-causation machinery that did NOT dissolve the association (only weak
  checks exist).** Not a U-curve: higher NSS use shows *monotone* positive associations with type 2 diabetes
  (HR 1.23-1.34), CVDs (1.32), stroke (1.19) and all-cause mortality (1.12) in long-term cohorts, while
  short-term RCTs show flat cardiometabolic biomarkers -> [[Non-Sugar Sweeteners]]. The textbook
  reverse-causation story fits (people already heavy/dysglycaemic switch *to* NSS *because* of their
  condition), and WHO ran the reverse-causation battery — BMI adjustment, weight stratification,
  excluding pre-baseline weight-losers, dropping early follow-up. Its verdict is the honest middle:
  «although reverse causation and residual confounding may be contributing factors … the associations …
  cannot be dismissed as being solely a result of reverse causation or residual confounding.»
  [@who2023nonsugar]
  - **This is the instance where the machinery neither dissolved nor confirmed the signal.** Contrast
    alcohol, where referent-correction + Mendelian randomization *removed* the protective arm. **NSS has
    had only this page's WEAK checks** (covariate adjustment + early-follow-up exclusion); the STRONG
    check — a genetic/MR instrument immune to reverse causation — **does not exist for NSS**. So by the
    decision rule, the NSS→disease association is **unadjudicated, not established**: it survived the weak
    checks (which alcohol's artifact also survived) and has never faced the strong one.
  - **A trap the case exposes: adjustment cannot tell a confounder from a mediator.** WHO notes that since
    the associations «largely persist when body weight is controlled for … increased body weight
    (resulting from chronic NSS use) may be an intermediary step … rather than a confounding factor» — so
    *the association survived BMI adjustment* is ambiguous: if weight is a *mediator* on an NSS→disease
    path, adjusting for it wrongly *attenuates* a real effect; if a *confounder*, adjusting is correct.
    The persistence-after-adjustment that reads as robustness cuts both ways. AWAITS a Mendelian-
    randomization source on NSS — the only instrument that would adjudicate the arm.
- **Sodium — named, argued-but-not-adjudicated.** WHO cited a J-shaped hypothesis (harm below \~2 g/day)
  as the reason for its review, then «never returned to» it, and excluded a priori the strata where a
  lower-arm harm is most plausible -> [[Sodium Intake and Blood Pressure]]. **He 2013 rebuts the same
  J-curve papers** invoking «measurement error … confounding … and reverse causality» — this concept's
  recipe, named — **but only as a critique, from CASH/WASH advocates, with no referent-correction or
  MR** on the low-intake arm. [@he2013] So it is
  the textbook case of the decision rule: a partisan *argument* that the arm is artifact is **not** the
  strong check, and the arm stays **unadjudicated**. The concept says exactly what would settle it: a
  referent-corrected or MR analysis of the low-intake arm, which the corpus does not yet hold.
  **Huang 2020 (same lineage) adds a second such argument, not the check:** it frames the low-intake
  mortality signal as «an artefact attributable to factors such as reverse causation and biased
  estimation of sodium intake» and directly contradicts PURE's high-intake *BP*-association threshold
  with RCT effects «far below this» — but this is the concept's recipe *named* again, still without an
  MR or referent-correction on the arm. [@huang2020] Two same-lineage critiques do not compound into an adjudication; the arm stays open.
- **Smoking cessation — not a U-curve, but the cleanest worked *sick-quitter correction*.** Jha 2013
  ([[Smoking and Mortality]]) states the mechanism exactly — «Life-threatening illness can cause smokers  [@jha2013]
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

## References

---
type: framework
question: Does acting on the modifiable dementia risk factors as a bundle (diet + exercise + cognitive training + vascular monitoring) actually improve or maintain cognition in a randomised trial, and by how much?
aliases: [FINGER, FINGER trial, Multidomain Dementia Prevention, Multidomain Cognitive Intervention, Lifestyle Intervention for Cognitive Decline]
authors: [Ngandu, Tiia; Lehtisalo, Jenni; Solomon, Alina; Levälahti, Esko; Soininen, Hilkka; Kivipelto, Miia]
sources: [Ngandu - FINGER Multidomain Cognitive Decline 2015]
cluster: dementia
confidence: low
created: 2026-08-05
updated: 2026-08-05
self_critiqued: 2026-08-05
relationships:
  related_to:
    - Dementia Prevention and Modifiable Risk Factors
    - Surrogate Outcomes
    - Physical Activity Dose and Mortality
    - Layer 1 - Ranking Interventions for a Stratum
    - Big Rocks (Elderly)
    - Measurement Error in Dietary Assessment
---

The **interventional (RCT) facet** of the `dementia` cluster — orbits the nucleus
[[Dementia Prevention and Modifiable Risk Factors]] (which holds the *observational* per-factor PAF map).
This page holds the one landmark randomised test of whether acting on those levers *as a bundle* moves
cognition: **FINGER** (Ngandu 2015), a 2-year, double-blind, 6-centre, population-based RCT, n=1260 of
at-risk (CAIDE >=6) but cognitively near-normal elderly Finns. It is a **proof-of-concept** trial:
"a proof-of-concept randomised controlled trial, we aimed to assess a multidomain approach to prevent
cognitive decline in at-risk elderly people from the general population."
[@ngandu2015]

## The effect — real, significant, and small

effect_measure: NTB total cognitive-composite Z-score, between-group difference in change per year
  = **0.022 (95% CI 0.002-0.042, p=0.030)**; "Improvement in NTB total score after 24 months was 25%
  higher in the intervention group than in the control group"; **Cohen's d 0.13** at 2 years.
population_and_comparator: at-risk (CAIDE >=6), cognitively near-normal elderly (60-77), vs an **active
  control** (general health advice + mailed lab feedback), NOT a do-nothing arm.
outcome: **a cognitive-test composite (surrogate), NOT dementia incidence.**
uncertainty: CI excludes zero but the lower bound (0.002/yr) is near-null; d=0.13 is a small effect.
certainty: single proof-of-concept RCT; `confidence: low` (unreplicated; surrogate endpoint).

- **Both groups improved** (2-yr NTB total change 0.20 intervention vs 0.16 control) — partly practice
  effects of repeated testing; the *between-group* gap is the effect. [@ngandu2015]
- **What reached significance:** overall cognition (p=0.030), **executive functioning** (p=0.039, +83%),
  **processing speed** (p=0.029, +150%). **What did NOT:** the **prespecified memory domain** — the
  intervention showed no significant change on it (figure p=0.36); only a **post-hoc** complex-memory
  score reached p=0.036.
  [@ngandu2015]
- **Cognitive-decline odds (post-hoc, control vs intervention):** NTB total OR 1.31 (1.01-1.71); executive
  1.29 (1.02-1.64); processing speed 1.35 (1.06-1.71); **memory 1.23 (0.95-1.60) — NS.**
  [@ngandu2015, Table 2]
- **Safe, adherable:** all-four-domain participation 72%; "Adverse events occurred in 46 (7%) participants
  in the intervention group compared with six (1%) participants in the control group; the most common
  adverse event was musculoskeletal pain" (exercise-related). No serious intervention-related AEs.
  [@ngandu2015]

## Three limits that bound what this licenses (all author-stated)

- **Surrogate boundary.** The endpoint is a cognitive composite; dementia/AD *incidence* was not
  measured — a 7-year extended follow-up is planned to assess intervention effects on incidence of
  dementia and Alzheimer's disease. So FINGER shows the **surrogate moved**, not that dementia was
  prevented. [@ngandu2015] -> [[Surrogate Outcomes]]
- **Non-decomposability.** "The multimodal intervention model needs to be investigated further,
  particularly with regard to the contribution of each component." **The design cannot say whether diet,
  exercise, cognitive training or vascular care did the work** — a bundle proven as a bundle. This is
  itself decision-relevant: the trial licenses *the package*, not a claim about any single lever, and it
  cannot validate the observational per-factor PAF decomposition on the nucleus page.
  [@ngandu2015]
- **Conservative vs active control; public-health not personal.** Estimates "could be considered to be
  conservative" (adherence unadjusted; control also got vascular advice) and benefits "might thus be
  greater if compared with a do-nothing control group"; but the flip side is that FINGER speaks to
  **public-health, not personal, significance** — the trial's own reading is that public-health
  significance is not easily translated into clinical or personal significance. A d=0.13 population effect
  does not promise a given person a measurable cognitive gain.
  [@ngandu2015]

## What it changes about what to do

- **The direction is now RCT-backed, the magnitude bounded.** Acting on the modifiable levers as a bundle
  produces a *real but small* cognitive benefit in an at-risk stratum — enough to raise confidence that
  the observational levers are worth pulling, not enough to over-sell a personal cognitive payoff. Most of
  those levers (BP, glucose, weight, activity, diet) are the cardiometabolic **big rocks** already pulled
  for other outcomes -> [[Layer 1 - Ranking Interventions for a Stratum]], [[Big Rocks (Elderly)]], so the
  cognition signal is a *second* patient-important outcome on levers already ranked high, not a new
  free-standing intervention to add.
- **Transportability is baseline-risk-conditioned (route a).** The effect was found in CAIDE-high,
  cognitively-near-normal elderly. It does not transport to dementia patients (excluded) or to a low-risk
  group; absolute benefit scales with baseline dementia risk. Dietary self-report in the diet arm carries
  the usual measurement error -> [[Measurement Error in Dietary Assessment]].
- **Single-domain trials had been null; the multidomain bundle was positive** — consistent with the
  vault's held observation that a lone structured-exercise RCT found no cognition benefit
  -> [[Physical Activity Dose and Mortality]]. But non-decomposability means this is *not* evidence that
  exercise (or any one component) works alone.

## Open (G-gaps)
- **RCT effect on dementia/AD *incidence*** — unmeasured here; the 7-year follow-up is the trigger
  -> — long-term dementia/AD incidence results` (the held
  primary is the 2-yr cognitive surrogate; the follow-up is a distinct, not-yet-held publication).
- **Per-component contribution** — which lever(s) drive the bundle effect (author-flagged as needing
  further study).

[inferred from @ngandu2015] The loop stays open (R1): FINGER grades
the *surrogate*, and even a clean cognitive-composite result is not a validated dementia-prevention claim
until the incidence follow-up lands.

## References

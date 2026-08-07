---
type: framework
question: How do I measure my cardiorespiratory fitness, how much exercise raises it, and does raising it actually lower risk?
aliases: [Measuring CRF, Raising CRF, Non-Exercise CRF, eCRF, FRIEND Standards, VO2max Measurement, CRF Vital Sign, Exercise Dose to Increase Fitness]
authors: [Ross, Robert; Blair, Steven N; Arena, Ross; Kaminsky, Leonard A; Myers, Jonathan; Poon, Eric Tsz-Chun; Gibala, Martin J; Ho, Robin Sze-Tak]
sources: [Ross - Cardiorespiratory Fitness Clinical Vital Sign 2016, Poon - HIIT Cardiorespiratory Fitness Umbrella 2024]
cluster: fitness
confidence: medium
relationships:
  related_to:
    - Physical Activity Dose and Mortality
    - Risk Modifiers - When Extra Information Changes a Risk Estimate
  extends:
    - Cardiorespiratory Fitness and Mortality
created: 2026-07-28
updated: 2026-08-06
self_critiqued: 2026-08-06
---

[[Cardiorespiratory Fitness and Mortality]] established that CRF **predicts** mortality — but, being
cross-sectional and observational, it could not say CRF is a **lever** rather than a marker. This AHA
scientific statement (Ross 2016) [@ross2016] supplies the three things that make CRF actionable: you can **measure**
it cheaply, you can **raise** it a known amount with a known exercise dose, and **raising it tracks
lower risk**. Together they move CRF from marker toward modifiable target — though, as below, still
short of RCT-proven causality on hard outcomes.

**Evidence-tier note (`confidence: medium`, raised from `low` 2026-08-06).** The **raise-it** leg is now
**gold-backed**: Poon 2024, an umbrella of 24 SRs+MAs (429 primary studies, 12 967 participants), confirms
the exercise→CRF dose from a different body than the AHA and adds the HIIT-vs-MICT head-to-head. The
**measure-it** and **vital-sign** legs still rest on the single AHA scientific statement (Ross 2016 —
consensus tier), and the **causal** leg (raising CRF → lower mortality) stays overwhelmingly
observational. So two of three legs are well-supported and one (causality) is not — `medium`, not `high`.
[inferred from @ross2016; @poon2024]

## Measure it — three tiers, and a cheap one that works

- **CPX (cardiopulmonary exercise test)** — direct peak VO2, the gold-standard, most accurate and
  standardized quantification. Needs equipment and trained staff.
- **Maximal exercise test without gas analysis** — CRF estimated from peak treadmill/cycle work rate.
  Note the modality effect: cycle-ergometer values run «10% to 20% lower when using a cycle ergometer
  compared with a treadmill in untrained individuals».
- **Non-exercise estimated CRF (eCRF)** — the cheap route: 13 cross-validated equations predict CRF from
  «readily available clinical variables» (the Jurca/Nes inputs are typically age, sex, BMI, resting heart
  rate and self-reported activity), no exercise test needed.
  The Jurca (2005) and Nes (2011) models **predict long-term mortality comparably to measured CRF**:
  per-1-MET risk reduction «7.4% to 21%» (all-cause) and «8% to 16.9%» (CVD) — bracketing the measured-CRF
  meta-analytic 13%/15% ([[Cardiorespiratory Fitness and Mortality]], Kodama). Hard caveat: eCRF
  «should not be viewed as a replacement for objective assessment of CRF» in at-risk patients.

**Where your number sits:** the FRIEND registry «published peak VO2 reference standards for adult men and
women (20–79 years of age)» — the US normative percentiles (the sibling of Mandsager's percentile MET
grid). About «half of the variance in CRF is considered to be attributable to heritable factors», so a
fraction of your position is not trainable.

## Raise it — the exercise dose → CRF response

Meeting consensus physical-activity recommendations buys «≈10% improvement in CRF in previously
sedentary adults». Both **amount and intensity** move it, but not equally: «Increases in CRF appear more
responsive to increases in intensity than increases in session duration or frequency».

The actionable rule is **baseline-stratified intensity** — the fitter you already are, the harder you
must work to gain:

| Baseline CRF | Intensity needed for a clinically meaningful (≥1 MET) gain |
|---|---|
| < 10 METs | ≈50% of heart-rate reserve / VO2 reserve is adequate |
| 10–14 METs | 65–85% of HR reserve / VO2R |
| > 14 METs | > 85% — and above \~13 METs the goal is «more related to improving performance than health» |

Worked magnitudes: at fixed 50% intensity, 30 min×5/wk gave a 9.4% CRF rise vs 15.6% for 60 min; raising
intensity to 75% gave 19.6% (Ross 2015). STRRIDE showed a clean dose gradient — 6% (low amount / moderate
intensity), 11% (low / high), 18% (high / high). Interval training beats equal-energy continuous training:
in one trial near-maximal intervals gave «20.6%» vs «9.4%» for moderate continuous. Older adults gain too
(a 41-trial meta-analysis: +16.3%).


[@ross2016]
## HIIT vs continuous training — the gold umbrella (Poon 2024)

Ross's single-trial interval signal (20.6% vs 9.4% above) is now backed by an umbrella review — «all
reviews consistently demonstrated that HIIT significantly improves CRF» vs non-exercise control («SMD...
0.28 to 4.31... WMD... 3.25 to 5.5 mL/kg/min»), and head-to-head «the majority of reviews indicated that
HIIT leads to similar or greater im­provements in CRF» than moderate-intensity continuous training (MICT)
(«SMD... 0.18 to 0.99... WMD... 0.52 to 3.76 mL/kg/min»). [@poon2024]

**Read the head-to-head edge as real but modest, and smallest where fitness is already normal.** The
HIIT-over-MICT SMD is 0.04–0.64 in healthy adults and 0.26–0.99 in overweight/obesity, and **sprint
interval training vs MICT is essentially a wash (SMD 0.04–0.18)** — so the practical case for HIIT is
**time-efficiency** (comparable or slightly greater CRF for less total exercise time), not a large fitness
advantage. Safety is not a differentiator: «The safety concerns associated with HIIT do not appear to be
significantly greater than those associated with MICT» (compliance generally ≥80%; pre-screen inactive
at-risk individuals). [@poon2024]

**This refines, it does not contradict, the single-trial number** (parameter-table check): Ross's «20.6%
vs 9.4%» is a *within-arm percent change* in one trial; Poon's «0.18 to 0.99» is a *between-group
standardized difference* pooled across reviews — different quantities, so the umbrella upgrades the
evidence grade and *bounds* the effect (modest between-modality gap), rather than clashing with it.
**Certainty caveat:** «Most of the systematic reviews received moderate-­to-­critically low AMSTAR-­2
scores», so the direction is robust but the constituent reviews are low-certainty. Poon is an umbrella of
HIIT→CRF *intervention* reviews — a different question from the held CRF→mortality cohorts (Kodama /
Mandsager), so it is a type-F upgrade of the raise-it leg, **not** independent backing for the causal leg
below. [@poon2024]


[@ross2016]
## Does raising it help? — the modifiability evidence

This is the partial answer to the nucleus's predictor-not-lever caveat. **Within-person CRF change** (a
stronger design than cross-sectional comparison) tracks risk:

- Men who went from **unfit to fit** between two exams had «a reduction in mortality risk of 44%» vs
  those who stayed unfit (Blair).
- Maintaining or improving CRF gave «27% and 42% reduced risks for CVD and all-cause mortality» (Lee);
  «Every 1-MET increase in CRF was associated with a 19% lower risk of CVD mortality».
- The one randomized-trial signal — HF-ACTION in heart-failure patients — found «every 6% increase in CRF
  (measured peak VO2) over 3 months was associated with a 4% lower risk of cardiovascular mortality or
  cardiovascular hospitalization».

**Honest boundary — the upgrade is partial, not complete.** The evidence is still overwhelmingly
observational; within-person change narrows the reverse-causation worry but does not close it (people
whose health is failing get less fit), and only HF-ACTION is a trial, on a composite that includes
hospitalization. The statement's own framing is calibrated: CRF «is a variable that is responsive to
therapy», and improvement «should be communicated to patients» — a modifiable *target*, not a proven
*cause* of longer life. The **proven lever underneath is physical activity**
([[Physical Activity Dose and Mortality]]); CRF is best read as the **trackable, measurable outcome** of
adherence to that lever.


[@ross2016]
## CRF sharpens a risk estimate — but only if it reclassifies

Adding CRF to a traditional risk model (age, BMI, SBP, diabetes, cholesterol, smoking) improves
**reclassification**, not just correlation: net reclassification improvement (NRI) for CVD mortality of
«12.1%» at 10 years in men (Gupta), «27.2%» / «21.0%» in men/women (Stamatakis), «42.8%» in a
clinically-referred cohort (Myers). Low CRF flags higher *long-term* risk within a risk stratum even when
short-term risk looks equal — e.g. stage-II hypertension with low vs high CRF carried «18.4% versus 10.1%»
30-year CVD-death risk despite a near-identical «2.3% versus 1.2 %» at 10 years.

**The discipline this page must not drop** (it is the [[Risk Modifiers - When Extra Information Changes a Risk Estimate]]
rule): a strong inverse association is *not* the same as improved prediction. The statement says so —
«it does not necessarily mean that CRF directly enhances CVD mortality risk prediction»; «For CRF to truly
be a novel risk marker, it must improve risk prediction beyond traditional markers.» The NRI evidence is
what earns CRF the reclassification claim; the association alone would not. **CRF is nonetheless absent
from every current risk model** (SCORE2, Framingham, PREVENT) — a standing gap the statement argues to
close.


[@ross2016]
## The guidance move, and how to read it

The statement's thesis is that CRF should be «an accepted "vital sign"» — the "only major risk factor
not routinely assessed in clinical practice". This is a **guidance-layer position** from a body
(AHA) advocating within its own domain: the 2013 ACC/AHA risk calculator had *excluded* CRF because the
reclassification evidence was then judged inconclusive, and this statement marshals the NRI evidence to
argue the exclusion should be revisited. Read it as a well-supported argument, not a neutral guideline —
symmetric standards apply to a body making the case for its own risk factor.


[@ross2016]
## Decision relevance

- **You can know your CRF for free.** An eCRF equation from routine clinical numbers gives a first
  estimate good enough to identify low fitness; a CPX is only needed for a precise or clinical number.
  Put it on the FRIEND percentiles to see where you sit.
- **To raise it: intensity moves it more than duration**, and the low-fit gain most from modest activity
  (the biggest-bang-at-the-low-end rule, consistent across the fitness sources). Expect \~10% from meeting
  activity guidelines, more from adding intensity or intervals.
- **Track CRF as the measurable proxy for the physical-activity lever**, not as a separate intervention —
  the activity is what has the causal warrant; CRF is how you measure whether it is working.
- **A low CRF legitimately up-classifies risk** within a stratum (a route-(a)/modifier use), and does so
  on evidence that meets the reclassification bar — but it is not yet in the risk calculators, so today it
  informs judgement rather than a computed score.
- **HIIT vs walking for the drifting-median adult — the VO2max edge is real but small at the outcome
  level (Challenge #11).** Intervals raise VO2max more than continuous work (20.6% vs 9.4% above), so
  HIIT *wins the surrogate*. But (a) CRF is a predictor, and the *mortality* dose-response front-loads
  and flattens (most benefit by \~24 min/day MVPA, [[Physical Activity Dose and Mortality]]), so the
  extra VO2max buys little extra outcome for an under-active person; (b) the advantage is
  outcome-specific — for the MASLD limb, [[Fatty Liver MASLD and Weight Loss]] holds HIIT and
  moderate-intensity equally effective; and (c) adherence is part of the effect, so a sustained
  walking habit can beat an abandoned HIIT plan. **Poon's gold umbrella now bounds the surrogate edge
  itself:** HIIT-over-MICT is SMD 0.04–0.64 in healthy adults and SIT-vs-MICT is a wash (0.04–0.18), so
  even at the surrogate level the interval advantage is modest for an already-normal-fitness adult — the
  case for HIIT is time-efficiency, not a large fitness win. **On the claimed cons: compensation is now held and cuts against the intensity-specific version** —
  [[Exercise Energy Compensation]] (Riou 2015) finds compensation real (\~18%, up to \~84% long-term) but
  **intensity is not a significant predictor**, so HIIT does not compensate *more* than moderate work;
  the NEAT-downregulation worry is not HIIT-specific. Worse-HIIT-adherence-than-walking remains unheld
  (comparative evidence queued). Net: the case against HIIT for this stratum rests on the flattening
  mortality curve + adherence, not a compensation penalty. Net for this stratum: *doing regular
  activity at all* is the lever; HIIT-vs-walking is a second-order, adherence-bound refinement.


[inferred from @ross2016]
## Limits

- **Expert-consensus scientific statement, not a systematic review or GRADE appraisal** — «not intended
  to be a comprehensive review». Its evidence base is overwhelmingly observational.
- **Causality on hard outcomes is inferred, not established** (HF-ACTION aside) — the modifiability
  finding upgrades but does not resolve the nucleus's predictor caveat.
- **\~50% of CRF is heritable** — the trainable fraction is real but bounded.
- One body (AHA), 2016; whether other bodies endorse the vital-sign framing is unprobed.


[inferred from @ross2016]

## References

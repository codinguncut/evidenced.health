---
type: framework
question: Does the diabetes risk from a statin change whether a person with a cardiovascular indication should start or continue it, and what should be monitored?
aliases: [Statin Diabetes Risk, Statin-Induced Diabetes, Statin New-Onset Diabetes, Statins and Glycaemia, Statin Diabetogenic Effect, Statin Worsening Glycaemia, New-Onset Diabetes on Statins]
authors: [Cholesterol Treatment Trialists' Collaboration (org); Reith, Christina; Preiss, David; Blackwell, Lisa; Emberson, Jonathan; Spata, Enti]
sources: [Reith - Statin New-Onset Diabetes 2024]
confidence: high
relationships:
  related_to:
    - Statin Muscle Symptoms and the Nocebo Effect
    - LDL Lowering and Cardiovascular Events
    - Statins for Primary Prevention and the Power of Zero CAC
    - Baseline Risk and the Relative-Absolute Split
    - Lifestyle vs Metformin for Diabetes Prevention
    - Measurement Error in Dietary Assessment
    - Surrogate Outcomes
created: 2026-09-07
updated: 2026-09-07
self_critiqued: 2026-09-07
---
<div class="recent-page" data-last-updated="2026-09-07"></div>


New-onset diabetes is the second-most-cited statin harm after muscle symptoms, and unlike the muscle
scare it is a **real, small, dose-dependent pharmacological effect** — not a nocebo artifact. The decision
it bears on is not *do statins raise diabetes risk* (they do) but *does that risk change whether a person
with a cardiovascular indication should take the drug, and does it warrant any monitoring change?* The CTT
Collaboration's individual-participant-data meta-analysis answers all three: the effect is genuine but
absolutely small, it is concentrated in people whose glycaemia already sits near the diagnostic threshold,
and the cardiovascular benefit already nets it out. This is the *metabolic* leg of the statin-harms
decision — a different endpoint, and a different *kind* of harm, from the *tolerability* leg on
[[Statin Muscle Symptoms and the Nocebo Effect]].

## The size and the intensity gradient (Reith / CTT 2024)

The CTT Collaboration pooled individual participant data from 19 double-blind statin-vs-placebo trials
(123,940 participants, 21% with diabetes; median follow-up 4.3 years) and four more-vs-less-intensive
trials (30,724 participants; median 4.9 years). Restricting to double-blind randomised trials is what
isolates the *causal* glycaemic effect of the drug.

The relative effect is genuinely dose-dependent (heterogeneity between intensities p<0.0001), while the
absolute excess is small at standard doses:

| Regimen (new-onset diabetes, no baseline diabetes) | Relative effect | Absolute annual excess |
|---|---|---|
| Low- or moderate-intensity vs placebo | **RR 1.10 (95% CI 1.04–1.16)** — 10% | **0.12%/yr (95% CI 0.04–0.20)** ≈ 1.2 per 1000 person-yr |
| High-intensity vs placebo (direct) | **RR 1.36 (95% CI 1.25–1.48)** — 36% | 1.27%/yr (95% CI 0.88–1.69) ≈ 12.7 per 1000 person-yr* |
| More- vs less-intensive statin | RR 1.10 (95% CI 1.02–1.18) | 0.22%/yr (95% CI 0.05–0.41) |

> «Compared with placebo, allocation to low-intensity or moderate-intensity statin therapy resulted in a
> 10% proportional increase in new-onset diabetes (2420 of 39 179 participants assigned to receive a statin
> [1·3% per year] vs 2214 of 39 266 participants assigned to receive placebo [1·2% per year]; rate ratio
> [RR] 1·10, 95% CI 1·04–1·16), and allocation to high-intensity statin therapy resulted in a 36%
> proportional increase (... 1·36, 1·25–1·48).» [@reith2024diabetes]

The relative gradient is robust: the RRs «were broadly similar» whether or not biochemical-only diagnoses
were included, and the more-vs-less-intensive comparison (RR 1.10) plus an indirect high-intensity estimate
(RR 1.27, 1.11–1.44) reproduce the direct one — so the dose-dependence is a real drug effect, not an
ascertainment artifact. [@reith2024diabetes]

*The high-intensity **absolute** excess is not \~10x the low/moderate one for a biological reason — see the
ascertainment caveat next.

## The absolute-excess caveat — measurement drives the cross-trial gap, not biology

The most easily-misread number here is the \~10-fold gap between the low/moderate (0.12%/yr) and
high-intensity (1.27%/yr) absolute excess. That gap is **mostly an artifact of how much glycaemia was
measured**, not of how diabetogenic the higher dose is. The proportion of participants with at least one
follow-up HbA1c measurement was «much higher in the high-intensity than the low-intensity or
moderate-intensity trials» (the high-intensity glucose data came largely from JUPITER). Because a
biochemical HbA1c ≥6.5% counts as a diagnosis, the *placebo* diabetes rate was itself far higher in the
high-intensity trials (3.5%/yr vs 1.2%/yr), and that same measurement intensity inflated the absolute
excess in both arms.

> «For each trial, the rate of new-onset diabetes among participants allocated to receive placebo depended
> mostly on the proportion of participants who had at least one follow-up HbA1c measurement ... Consequently,
> the main determinant of the magnitude of the absolute excesses in the two types of trial was the extent of
> HbA1c measurement rather than the proportional increase in risk associated with statin therapy.»
> [@reith2024diabetes]

So the *relative* gradient (1.10 -> 1.36) is a real dose-response, but the *absolute* cross-trial
comparison is confounded by ascertainment and must not be read as a pure biological dose-response in
absolute terms. This is a measurement-shapes-the-estimate instance in the interventional literature — the
inverse of the usual dietary case where measurement error *attenuates* a gradient; here more measurement
*inflates* a detected rate -> [[Measurement Error in Dietary Assessment]].
[inferred from @reith2024diabetes]

## The mechanism — a small glycaemic shift crossing a threshold, not weight gain

The whole effect is consistent with a **very small upward shift in glycaemia** that pushes people already
near the diagnostic cut-point over it:

- **The glycaemic shift is tiny.** In people without baseline diabetes, mean glucose rose 0.04 mmol/L (both
  intensities) and mean HbA1c rose 0.06% (0.00–0.12) on low/moderate and 0.08% (0.07–0.09) on high-intensity
  statins. [@reith2024diabetes]
- **The excess concentrates near the threshold.** «Among those with a baseline measure of glycaemia,
  approximately 62% of new-onset diabetes cases were among participants who were already in the top quarter
  of the baseline distribution.» [@reith2024diabetes] Adding age,
  sex, BMI, triglycerides, eGFR and HDL to a risk score raised this only to \~67% — glycaemia alone carries
  most of it. A small population-wide HbA1c shift produces a moderately large *relative* increase in the
  proportion above 6.5% precisely because it acts near the tail of the distribution (source Figure 4).
- **Metformin illustrates the same threshold mechanism in reverse.** «in the Diabetes Prevention Program
  trial, allocation to metformin reduced HbA1c by approximately 0·1% and also reduced the risk of diabetes
  by 31% compared with placebo». [@reith2024diabetes] A \~0.1% HbA1c
  move — comparable in size to the statin's — shifts a large *relative* fraction across the threshold in the
  opposite direction, confirming that small glycaemic changes drive large relative diagnosis changes
  -> [[Lifestyle vs Metformin for Diabetes Prevention]].
- **Weight gain is NOT the mediator.** Statin therapy raised bodyweight by only 0.30 kg at final measurement
  (people without diabetes) — far smaller than the multi-kilogram losses that move diabetes risk in
  prevention trials — so «it therefore seems implausible that such a small change in bodyweight would explain
  more than a small proportion of the observed increase». [@reith2024diabetes]
  The pathway is a direct small glycaemic effect, not a weight-mediated one.

## The stratum structure is route-(a): constant relative effect, absolute risk near the threshold

The relative effect «did not vary much in different types of participants» — by age, sex, race, vascular
history, BMI, eGFR, quartile of glycaemia, or diabetes-risk score. [@reith2024diabetes]
A constant RR with an absolute excess that scales with baseline glycaemia is a clean **route-(a)** case
(absolute benefit/harm scales with baseline risk; the relative effect is unchanged, so no subgroup claim is
needed) -> [[Baseline Risk and the Relative-Absolute Split]]. The decision consequence: the person who will
be *diagnosed* because of a statin is overwhelmingly someone whose glycaemia was already close to the
cut-point — the statin advances a diagnosis that baseline risk had already made likely, rather than
creating diabetes de novo across the risk range.

## Worsening glycaemia in people who already have diabetes

The same effect appears as worsening control in baseline diabetes, mirroring the new-onset gradient:

> «Among people with diabetes at baseline, allocation to low-intensity or moderate-intensity statin resulted
> in a 10% relative increase in worsening glycaemia compared with placebo (... RR 1·10 [95% CI 1·06 to
> 1·14]; absolute annual excess 1·49% [0·87 to 2·13]), and in the high-intensity trials, allocation to this
> group resulted in a 24% relative increase in worsening glycaemia (... 1·24 [1·06 to 1·44]; absolute annual
> excess 3·02% [0·73 to 5·69]).» [@reith2024diabetes]

The microvascular consequence is negligible: the statin-induced HbA1c change (0.06–0.08%) is an order of
magnitude smaller than the 0.9% HbA1c difference that produced «a 20% relative increase in risk of
clinically significant renal complications (absolute excess risk 0·4% per year) and a 13% relative increase
in risk of clinically significant retinal complications (absolute excess risk 0·2% per year)» in
glucose-control trials — «so the changes induced by a statin are likely to be too small to result in a
material change in the risk of microvascular disease». [@reith2024diabetes]

## The tolerability-vs-metabolic distinction — *statin harm* is not one thing

The two most-discussed statin harms sit at opposite ends of a **real-vs-perceived** axis, and conflating
them is a common counselling error. The muscle harm is mostly *nocebo* — a perceived effect an inert pill
reproduces; the diabetes harm is a *genuine pharmacological effect* the drug actually causes. Both
nonetheless resolve to *keep taking the statin*, but for **different reasons** — one because the harm is
mostly not real, the other because a real harm is small and already outweighed.

| Axis | Muscle symptoms ([[Statin Muscle Symptoms and the Nocebo Effect]]) | New-onset diabetes (this page) |
|---|---|---|
| Reality of the effect | mostly nocebo — >90% of reported symptoms not drug-caused; RR 1.03 | **real pharmacological effect** — RR 1.10 (low/mod) to 1.36 (high) |
| Timing | confined to year 1; flat after | persists over time (constant RR each year) |
| Dose-response within statin | none between statins; weak intensity signal | clear intensity gradient (1.10 -> 1.36) |
| Absolute size | year-1 excess \~11/1000 py, \~0 after | 1.2/1000 py (low/mod); ascertainment-inflated at high dose |
| Mechanism | expectation / symptom attribution | small glycaemic shift crossing a threshold |
| Why continue | the symptom is usually not the drug | the effect is real but small and outweighed |

This is a **terminological/decision disambiguation (type-B)**: *statin intolerance/harm* names two distinct
objects that a single reflex (*side effect -> stop*) wrongly merges. Framed as a distinction, not a tension
— they are *different endpoints*, so the not-joined guard (different question/measure) forbids filing a
`[[tension]]`.
[inferred from @reith2024diabetes]

## Not an independent (type-E) corroboration of CTT's benefit

Reith 2024 restates that the cardiovascular benefit already nets out the glycaemic harm — «any theoretical
adverse effects of statins on cardiovascular risk that might arise from these small increases in glycaemia
... are already accounted for in the overall reduction in cardiovascular risk that is seen with statin
therapy in these trials.» [@reith2024diabetes] This is **not** an
independent confirmation of the statin benefit magnitude: Reith 2024 is the **same CTT / CTSU-Oxford body**
as the held [[LDL Lowering and Cardiovascular Events]] source (CTT 2010) *and* the held muscle-symptoms
analysis (Reith / CTT 2022), analysing an overlapping RCT base. So agreement with either on the benefit side
carries **no `[E-independent]` weight** — it is one research programme's diabetes analysis, and its benefit
comparator is CTT's own prior efficacy work, not a second witness to it. The benefit magnitude the
net-effect call rests on (per 1 mmol/L LDL-C reduction over 5 years, \~25–50 major vascular events prevented
per 1000) is held on [[LDL Lowering and Cardiovascular Events]] / [[Statin Muscle Symptoms and the Nocebo Effect]],
not established here.

## Decision relevance

[inferred from @reith2024diabetes]

- **The diabetes risk does not change the start/continue decision for someone with a CV indication.** The
  harm is absolutely small and «greatly outweighed by the benefits of statins on major vascular events» —
  and the vascular benefit already incorporates any glycaemic downside, so it is not a separate cost to
  subtract again. Do not stop or withhold an indicated statin over diabetes risk.
- **Know who gets diagnosed: the near-threshold person.** \~62% of statin-attributable diabetes arises in the
  top glycaemia quartile. For a person already near the cut-point, a statin may advance a diagnosis that
  baseline risk had made likely — worth stating honestly, but it does not flip the benefit-harm ledger, and
  the diagnosis itself flags a person whose *vascular* risk (and hence statin benefit) is also higher.
- **Higher intensity carries a larger real relative excess — a substitution lever, not a reason to avoid
  statins.** Where the marginal LDL benefit of a high-intensity regimen is modest, a moderate-intensity
  regimen carries a smaller diabetes excess (RR 1.10 vs 1.36); this is the same intensity trade-off the
  muscle page frames, and stays a net-effect call, not a blanket de-escalation.
- **Do not add routine post-initiation glucose/HbA1c monitoring for the purpose of catching a statin
  effect.** The within-person glycaemic change is «considerably smaller than the combined variation of
  within-individual and laboratory analytical variation», so «there is likely to be little clinical benefit
  in measuring glucose concentrations and HbA1c values routinely after starting statin therapy» to compare
  against pre-treatment values — though standard diabetes screening and, in known diabetes, standard
  glycaemic monitoring continue unchanged. [@reith2024diabetes]
- **Sizing the rock (pharmacotherapy taper).** The diabetes scare is a real but small limitation of the
  standard statin, and appraised it barely dents the lever: it does not shrink the statin's marginal CV
  benefit (already net of glycaemia) and warrants no monitoring burden — so the *metabolic limitation*, like
  the *tolerability limitation*, keeps the statin's rank high rather than lowering it.

## Limits

- **Trial-enrolled, older, higher-risk population** (mean age 63; 21% with diabetes at baseline); the
  estimate is for the general treated population and transports to similar strata, not to a specific younger
  primary-prevention person outside the trial range.
- **Ascertainment was heterogeneous and mostly not designed for diabetes** — most trials predate HbA1c as a
  diagnostic marker (adopted 2011), and few measured post-randomisation HbA1c in the non-diabetic majority;
  this is why the absolute (not relative) cross-trial excess is measurement-driven.
- **Type of diabetes unascertained** (assumed overwhelmingly type 2 given the age range); microvascular
  outcomes could not be measured directly and are inferred negligible from the small HbA1c change.
- **The open loop (R1).** No source here randomises a *statin-diabetes management strategy* against
  patient-important outcomes; the *don't monitor for it, don't stop over it* rule is inferred from the
  causal-attribution and net-benefit evidence, not tested as an intervention.

## References

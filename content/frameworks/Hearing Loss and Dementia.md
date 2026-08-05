---
type: framework
question: Does hearing loss raise dementia risk, does treating it with hearing aids lower that risk, and for whom is the treatment lever largest?
aliases: [Hearing Loss, Hearing Aids and Dementia, Hearing Impairment Cognition, Age-Related Hearing Loss]
authors: [Livingston, Gill; Costafreda, Sergi G]
sources: [Livingston - Dementia Prevention 2024]
cluster: dementia
confidence: medium
created: 2026-08-05
updated: 2026-08-05
self_critiqued: 2026-08-05
relationships:
  related_to:
    - Dementia Prevention and Modifiable Risk Factors
    - The U-Shaped Association Artifact
    - Baseline Risk and the Relative-Absolute Split
---

A dementia-specific lever with no cardiometabolic analogue in the vault, and one of the largest single
population-attributable contributors in the 2024 Lancet Commission. Distinctive because the *exposure is
correctable* (hearing aids) and the correction is plausibly on the causal path — so this is an exposure
where the intervention question is answerable, not just the association.

## The association

- **Hearing loss raises dementia risk** — the Commission's new random-effects meta-analysis (6 high-quality
  cohorts, n=666,370): «people with hearing loss had an increased risk of dementia compared to those with
  normal hearing (HR 1.37, 1.00-1.87, I2 =80%, n=666,370)». [@livingston2024] The estimate is deliberately *conservative* (hearing-aid users kept in, though they sit on the causal
  pathway), and the lower CI touches 1.00.
- **Dose-response by severity** — «all four studies which have investigated dose-response ... found that
  every 10 dB decrease in hearing ability increases dementia risk», the magnitude ranging «from 4% ... to
  24% ... per 10 dB worse hearing». [@livingston2024] A graded
  exposure-response strengthens the causal read.

## The treatment lever — hearing aids

- **Observational: hearing-aid use tracks lower risk.** An 8-cohort SR+MA (n=126,903): aided vs unaided
  hearing-impaired people had «a 19% (0.76-0.87; I2 = 0%) lower risk of cognitive decline and a 17% (0.77-
  0.90; I2 = 0%, 4 studies) lower risk of dementia, compared to those with uncorrected hearing impairment».
  [@livingston2024]
- **RCT (ACHIEVE): null overall, large in the high-risk stratum.** The first hearing-aid RCT (N=977) found
  no effect on 3-year cognition in the overall trial (difference -0.002), but a pre-specified «large (48%)
  protective effect of hearing aids on cognition in a high-risk population» (the ARIC subgroup — older,
  lower baseline cognition, more CV risk factors). [@livingston2024] The healthy-volunteer arm had too little cognitive decline to power a difference.

## Decision relevance

- **This is a route-(a) + route-(b) stratification, worked.** Absolute benefit is largest where baseline
  dementia risk is highest (ARIC), which alone would recommend targeting high-risk groups
  -> [[Baseline Risk and the Relative-Absolute Split]]. ACHIEVE's *pre-specified* subgroup effect is a
  positive effect-modification signal (route b), not a fishing artifact — but it is one subgroup of one
  trial, so the aided-benefit claim rests mainly on consistent observational evidence, not RCT proof.
- **The lever is cheap and cost-saving if effective**, and correction is available for most hearing loss —
  the gap is uptake, not existence of a treatment. Reducing harmful noise exposure is the upstream
  (primary-prevention) arm.
- **Reverse-causation guard.** A shared cardiovascular pathology, or early dementia degrading hearing, could
  drive the association; the Commission notes the CV-shared-pathology hypothesis is «not been reported» to
  account for it, and longer exposure -> higher risk argues against pure reverse causation. Kept as a
  medium-confidence causal read, not high.

## Self-critique `[run 2026-08-05, before commit]`

- **Not overclaimed.** The RCT was *null overall*; the page leads with that and frames the 48% as a
  pre-specified subgroup, not the headline effect. The observational 17%/19% is labelled observational.
- **Single-source, dementia-specific reference page** — `confidence: medium` (consensus SR/MA backing).
  Orbits [[Dementia Prevention and Modifiable Risk Factors]]; not a competing nucleus.

## References

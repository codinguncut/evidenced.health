---
type: framework
question: Is day-to-day regularity of sleep timing a distinct, stronger mortality lever than how many hours you sleep?
aliases: [Sleep Regularity, Sleep Regularity Index, SRI, Regular Sleep Timing, Sleep Consistency, Circadian Regularity]
authors: [Windred, Daniel P; Burns, Angus C; Lane, Jacqueline M; Saxena, Richa; Rutter, Martin K; Cain, Sean W; Phillips, Andrew J K]
sources: [Windred - Sleep Regularity Mortality 2023]
cluster: sleep
confidence: low
created: 2026-08-05
updated: 2026-08-20
self_critiqued: 2026-08-20
relationships:
  related_to:
    - Sleep Duration and Mortality
    - Sleep and Metabolic Health
    - Sleep Aids and Insomnia Treatment
    - The U-Shaped Association Artifact
    - Shared Modifiable Levers Across Age-Related Diseases
---

A facet of the `sleep` cluster (nucleus [[Sleep Duration and Mortality]]) that opens a **new exposure
axis**. The duration literature asks *how many hours*; this asks *how consistent the timing*, and the
two are not the same question. Sleep has at least three separable dimensions — **duration** (hours),
**regularity** (day-to-day consistency of sleep-wake timing), and within-night **continuity**
(fragmentation) — and a person can score well on one and badly on another.
[inferred from @windred2023]

## The finding — regularity out-predicts duration in the same cohort `[EXTRACTED]`

Windred measured both dimensions **objectively** (wrist accelerometry, not self-report) in 60 977 UK
Biobank participants over >10 million hours, and compared them head-to-head for mortality.

- More regular sleep -> **20-48% lower all-cause mortality** across the top four Sleep Regularity Index
  (SRI) quintiles vs the least-regular quintile (16-39% cancer, 22-57% cardiometabolic).
  [@windred2023]
- **Regularity was the stronger predictor.** Fully-adjusted top-quintile HR: SRI 0.70 (0.59-0.83) vs
  duration 0.76 (0.65-0.89); model comparison (AIC) favoured SRI (full-model p=.005). Decisively, adding
  duration to an SRI model did **not** improve fit — «sleep duration does not explain significant
  additional variance in mortality risk beyond the variance explained by SRI scores» (nested LR test,
  full-model p=.20). [@windred2023]
- The SRI-mortality relationship is **monotonic** (more regular = lower risk, no U-turn), unlike the
  duration U-curve. [@windred2023]

Because SRI and duration were compared in one cohort with one design, this is a **within-source**
comparison — no cross-source commensurability question arises.

## Why it does not contradict the duration nucleus — a reconciliation, not a tension

Windred's duration arm looks *weaker and non-U-shaped* here, which could read as a clash with
[[Sleep Duration and Mortality]] (Cappuccio's strong U-curve). It is not — the two measured different
exposures over different ranges, and Windred says so:

- Cappuccio pooled **self-reported** duration with long-arm cutoffs of **>9-10 h**; Windred's longest
  objective quintile was only **>7.56 h** — «we therefore would not necessarily expect to see a
  heightened risk of mortality in this upper quintile». So Windred simply does not reach the long-sleep
  range where the illness-marker arm lives. [@windred2023]
- Windred *confirms* the short-sleep and cardiometabolic-duration associations. It does not overturn the
  duration finding; it **adds an axis the duration literature omitted** (type-F refinement of the
  duration-centric public-health framing). Duration was «the central focus of current sleep health
  guidelines», yet is here the *weaker* predictor — while regularity, which guidelines neglect, is the
  stronger one.
[inferred from @windred2023]

## Mechanism — circadian disruption, not a sleep-quantity pathway `[INFERRED-directional]`

SRI is proposed as a proxy for **circadian disruption**: irregular sleep-wake timing scatters the timing
of light, meals and activity, desynchronizing central + peripheral clocks. This is a *different* mechanism
family from the short-sleep leptin/ghrelin/glucose story on [[Sleep and Metabolic Health]] — it is about
*when*, not *how much*. The cancer signal (irregular sleep predicted cancer mortality; short duration did
not, robust in the cancer-free) fits a circadian-oncogenesis pathway. Held **directionally**, marked as
mechanism: the study is correlational and cannot fix causation.
[inferred from @windred2023]

**Experimental-animal backing for the circadian-oncogenesis mechanism — directional, and NOT
independent corroboration.** The circadian-disruption route Windred proposes has experimental-animal
support: IARC's Monographs Working Group rested its Group-2A shift-work classification partly on
sufficient animal evidence for carcinogenicity of light during the biological night, via melatonin
suppression and clock-gene deregulation -> [[Night Shift Work and Breast Cancer]] (where that evidence
is held and quoted). This is deliberately NOT logged as type-E independent backing: a human
circadian-epidemiology account and the experimental circadian-oncology literature draw on the same
antecedent mechanism base, so their agreement is a shared root, not two separately-arrived routes (the
laundered-E trap — independence was asserted, never verified). Held as *directional mechanism* only, and
its realized potency on a patient-important human outcome is bounded low: the best-powered human test of
this route (night shift work -> breast cancer) is a well-powered NULL.


## Decision relevance

- **A concrete, low-cost target that is easier than extending sleep.** Top-20% SRI = falling asleep and
  waking within **\~1-hour windows** most days; bottom-20% = \~3-hour windows. Regularity «may also be an
  easier dimension to target through interventions» than adding hours (which is psychosocially and
  biologically hard). [@windred2023]
- **Ranking (layer 1).** A candidate moderate lever for the *already-adequate-duration* stratum — the
  person sleeping \~7 h but at chaotic times (shift-adjacent schedules, social jetlag) has a lever here
  that the duration advice misses. Certainty is capped by the single-cohort, correlational design, so it
  ranks below the established big rocks and is not yet a confident recommendation.
- **Not a substitute for the short-sleep lever.** Regularity being the stronger *predictor* does not
  license neglecting chronic short sleep — both are actionable; regularity is the newly-visible one.

## Limits

- **Single high-tier cohort, correlational** — «Sleep regularity may be both a cause and marker of
  premature mortality risk». No RCT that *raises* SRI and measures mortality exists; the intervention
  claim is inferred from the association + a plausible circadian mechanism, not demonstrated.
  [@windred2023]
- **One 7-day snapshot; older, 97%-white cohort** — transportability and temporal-stability untested;
  fully-adjusted covariates may be partial mediators, so the true effect likely sits between the minimal
  (HR 0.52) and full (HR 0.70) models.
- Coherence, not validity (R1): SRI predicts mortality in this cohort; that regularity *causes* lower
  mortality, and that raising it would help, are the plausible-but-unproven step.
- **AWAITS** a second regularity cohort or an SRI-raising trial, and a guideline that targets regularity
  (current guidelines target duration).

[inferred from @windred2023]

## References

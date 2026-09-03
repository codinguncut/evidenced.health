---
type: framework
question: Does hearing loss raise dementia risk, does treating it with hearing aids lower that risk, and for whom is the treatment lever largest?
aliases: [Hearing Loss, Hearing Aids and Dementia, Hearing Impairment Cognition, Age-Related Hearing Loss]
authors: [Yu, Ruan-Ching; Yeo, Brian Sheng Yep; Livingston, Gill; Costafreda, Sergi G]
sources: [Yu - Hearing Loss Cognitive Impairment Dementia Meta-Analysis 2024, Yeo - Hearing Aids Cochlear Implants Cognition Meta-Analysis 2023, Livingston - Dementia Prevention 2024]
cluster: dementia
confidence: medium
created: 2026-08-05
updated: 2026-08-28
self_critiqued: 2026-08-28
relationships:
  related_to:
    - Dementia Prevention and Modifiable Risk Factors
    - The U-Shaped Association Artifact
    - Baseline Risk and the Relative-Absolute Split
    - The Observational-Trial Discordance
    - Upgrading Observational Evidence
---

<div class="recent-update" data-last-updated="2026-08-28"></div>

A dementia-specific lever with no cardiometabolic analogue in the vault, and one of the largest single
population-attributable contributors in the 2024 Lancet Commission. Distinctive because the *exposure is
correctable* (hearing aids) and the correction is plausibly on the causal path — so the intervention
question is answerable in principle, not just the association. The load-bearing move on this page is to
keep those two questions apart: **the exposure association is robust; the treatment benefit is not
established to the same standard.**

<div class="recent-update" data-last-updated="2026-08-28"></div>

## The exposure — hearing loss raises dementia risk `[first-hand: Yu 2024]`

- **Pooled association (dichotomous yes/no).** The largest meta-analysis to date — «the most extensive to
  date with fifty cohorts reporting on a total sample of 1,548,754 participants» — found hearing loss
  associated with incident dementia at **HR 1.35 [1.26-1.45], k=30 cohorts**. [@yu2024hearing]
  The association held across the other cognitive outcomes: MCI **1.29 [1.11-1.50]** (k=3), cognitive
  decline not specified as MCI/dementia **1.29 [1.17-1.42]** (k=9). [@yu2024hearing]
- **Subtype specificity — the effect concentrates in Alzheimer's, is null for vascular.** Alzheimer's
  disease dementia **HR 1.56 [1.30-1.87]** (k=4, the strongest single estimate); vascular dementia **1.30
  [0.83-2.05]** (k=3) was **not statistically significant**. [@yu2024hearing]
  Yu discounts the VaD null on power, not absence of effect: only three studies looked at it, and two
  adjusted for cardiovascular factors that «may have diluted the association». [@yu2024hearing]
  So the shape is *outcome-specific* — read the effect as Alzheimer's-type, with vascular
  insufficient-evidence rather than no-effect.
- **Publication bias was screened and not detected** — Egger's test non-significant for dementia (p=0.77,
  k=30) and for cognitive decline (p=0.12, k=9); funnel plots showed dispersion but no systematic
  asymmetry. [@yu2024hearing]

### De-secondhanding the Commission figure `[F-refinement, NOT E-independent]`

The page previously carried the exposure association from the 2024 Lancet Commission's borrowed
meta-analysis (**HR 1.37 [1.00-1.87]**, I2=80%, 6 cohorts, n=666,370) [@livingston2024].
Yu 2024 is the **first-hand** source for that relationship and supersedes the borrowed figure:

| Parameter | Livingston Commission MA | Yu 2024 MA | Same quantity? |
|---|---|---|---|
| Relationship | adult HL (yes/no) -> incident all-cause dementia | adult HL (yes/no) -> incident all-cause dementia | yes |
| Pooled effect | HR 1.37 [1.00-1.87] | HR 1.35 [1.26-1.45] | yes — near-identical point estimate |
| Evidence base | 6 dementia cohorts, n=666,370 | 30 dementia cohorts (50 total), N=1,548,754 | Yu is a superset / update |
| Precision | CI touches 1.00 (I2=80%) | CI 1.26-1.45, excludes 1.00 | Yu tightens materially |

This is a **type-F claim-refinement**: same relationship, a much larger and more precise pool, so the
composite belief is firmer than either alone. It is **NOT type-E independent corroboration** — Yu shares
authors with the held Commission (Gill Livingston is the Commission lead; Frank Lin is the ACHIEVE PI;
Sergi Costafreda and Anne Schilder also overlap), so a shared-lineage re-pooling cannot raise confidence
by independence. Yu itself frames the estimate as «overlapping but on the lower end of the confidence
interval of the effect reported by the 2017 Lancet commission (1.9 [1.4-2.7])», noting the older
estimates «relied on a substantially smaller sample of studies». [@yu2024hearing]

<div class="recent-update" data-last-updated="2026-08-28"></div>

## Dose-response — graded, but the pooled slope rests on two studies

- **Per 10 dB of hearing loss, dementia HR 1.16 [1.07-1.27]** (pooled k=2: Deal 2017, Lin 2011). [@yu2024hearing]
  This refines the Commission's borrowed «4% ... to 24% ... per 10 dB» range [@livingston2024]
  into a single pooled estimate — but note the pooled slope draws on only two cohorts, so the
  dose-response is directional evidence, not a well-populated curve.
- **By severity band**, both mild (HR 1.27 [1.05-1.53]) and moderate-to-severe (HR 1.69 [1.29-2.22])
  hearing loss raised dementia risk, but **degree did not statistically moderate** the association
  (p=0.09). [@yu2024hearing]
  A monotone-looking severity gradient that does not reach significance as a moderator — consistent with
  a real graded effect, not proof of one.

<div class="recent-update" data-last-updated="2026-08-28"></div>

## No effect-modifier was found — the moderator-null `[first-hand: Yu 2024]`

Across 37 HR-reporting studies, «None of the factors investigated moderated the relationship between
hearing loss and any type of incident cognitive impairment» — not baseline age, hearing-assessment type,
follow-up length, nor adjustment for baseline cognition or vascular factors; meta-regression on female
proportion, baseline age, and follow-up years was likewise null. [@yu2024hearing]
**Decision consequence:** the observational evidence supplies **no route-(b) effect-modifier** for the
*exposure* association — no identified stratum in which hearing loss carries a *relatively* larger
dementia risk. This matters for reading the ACHIEVE subgroup below: that subgroup is a **baseline-risk**
(route-a, absolute-benefit) signal, not an effect-modification of the exposure.

<div class="recent-update" data-last-updated="2026-08-28"></div>

## Reverse-causation guard `[first-hand: Yu 2024]`

Yu's causal read is guided by Bradford Hill criteria and defends temporality directly: it excluded
studies with baseline dementia and those with under-two-year follow-up. But it does not over-claim —
«dementia has a long prodrome of several years so reverse causality cannot be completely excluded». [@yu2024hearing]
As a probe, Yu tested whether follow-up length moved the association and found no significant effect
(longer latency did not shrink the effect, which argues against pure reverse causation). [@yu2024hearing]
The Commission's complementary note stands: a shared cardiovascular pathology has «not been reported» to
account for the association [@livingston2024]. Kept as a
**medium**-confidence causal read, not high — an incompletely-excludable prodrome is exactly why.

<div class="recent-update" data-last-updated="2026-08-28"></div>

## The treatment lever — hearing aids `[intervention arm; confidence LOW]`

The intervention question — does *correcting* hearing loss lower dementia risk? — is a different and
weaker evidence state than the exposure association above.

- **Observational (Yeo 2023, first-hand).** An 8-study pool (n=126,903, follow-up 2-25 years) found
  «significantly lower hazards of any cognitive decline among hearing aid users compared with participants
  with uncorrected hearing loss (HR, 0.81; 95% CI, 0.76-0.87; I2 = 0%)» — a **19% lower hazard**, with the
  incident-dementia subgroup at **HR 0.83 [0.77-0.90]** (k=4). [@yeo2023hearingaids]
  A short-term arm (11 studies, n=568) found a 3% test-score improvement (ratio of means 1.03 [1.02-1.04]). [@yeo2023hearingaids]
  These are the figures the 2024 Commission borrowed (its «19% (0.76-0.87)» and «17% (0.77-0.90)» [@livingston2024]);
  Yeo is the first-hand source.
- **Three first-hand caveats the borrowed version dropped, all load-bearing:**
  - **The pooled benefit is observational, and self-selected.** Yeo is by its own description a
    «multiadjusted observational meta-analysis of 31 observational studies» [@yeo2023hearingaids];
    the 8-study longitudinal pool contains **no RCT**. Hearing-aid users self-select on health, motivation
    and resources — a classic healthy-user route to a spurious protective HR that adjustment does not
    remove -> [[The Observational-Trial Discordance]], [[Upgrading Observational Evidence]].
  - **Overall GRADE quality was low.** «Overall quality of evidence was low when assessed using GRADE». [@yeo2023hearingaids]
  - **The search predates the definitive trial.** Yeo searched only to July 2021, so it **cannot include
    ACHIEVE** (2023) — the pooled 19% is a pre-RCT observational estimate. The short-term test-score arm
    carries its own artifact, which Yeo names: «The supposed improvement in cognitive test scores is
    confounded by the fact that participants can simply hear the instructions of the test better after
    hearing restoration». [@yeo2023hearingaids]
- **RCT (ACHIEVE) — null overall, large in the high-risk stratum.** The first hearing-aid RCT (N=977, aged
  70-84, hearing aids vs an educational-health control) found **no effect on 3-year cognition in the total
  cohort**, but a pre-specified **48% reduction** in a higher-baseline-risk subgroup (recruited from the
  long-running ARIC cohort — older, lower baseline cognition, more CV risk factors). [@livingston2024]
  Yu, whose authors include the ACHIEVE PI, records the same result and its status directly: it «was a
  pre-planned but secondary analysis, and we therefore need to see if further RCTs to replicate this
  effect in people at higher risk for dementia». [@yu2024hearing]

<div class="recent-update" data-last-updated="2026-08-28"></div>

## Exposure is not intervention — the distinction that governs the decision

**A robust risk factor does not certify a treatment target.** Hearing loss raising dementia risk (Yu, 50
cohorts, tight CI) does **not** establish that fitting hearing aids lowers it — that inference needs
intervention evidence, and the intervention evidence is weaker on every axis:

| | Exposure association | Intervention benefit |
|---|---|---|
| First-hand source | Yu 2024 (50 cohorts) | Yeo 2023 (observational) + ACHIEVE RCT |
| Best design | large cohorts, screened for pub-bias | 1 RCT (null overall) + observational pool |
| Direction/size | HR 1.35 [1.26-1.45] | observational 0.81 [0.76-0.87]; RCT null overall, 48% in high-risk subgroup |
| Confounding risk | reverse causation (prodrome) | healthy-user self-selection (device users) |
| Confidence | **medium** | **low** |

The Yeo-observational vs ACHIEVE-RCT gap is a textbook instance of
[[The Observational-Trial Discordance]]: a large, consistent, I2=0% observational signal beside a null
RCT, resolved not by crowning the trial but by naming the mechanism — **healthy-user self-selection in
the device-user arm** inflates the observational HR, and randomization removes it, leaving benefit only
where absolute baseline risk is high enough to show one.

<div class="recent-update" data-last-updated="2026-08-28"></div>

## Decision relevance



- **This is a route-(a) baseline-risk stratification, worked — not a route-(b) one.** Yu's moderator-null
  means the *exposure* has no established relative-effect modifier; ACHIEVE's subgroup benefit is an
  **absolute**-benefit story (largest where baseline dementia risk is highest, the ARIC arm), which alone
  recommends **targeting high-risk groups** without needing an effect-modification claim
  -> [[Baseline Risk and the Relative-Absolute Split]]. ACHIEVE's subgroup effect was pre-specified (not a
  fishing artifact), but it is one subgroup of one trial, so the aided-benefit claim still rests mainly on
  consistent-but-confounded observational evidence, not RCT proof.
- **The lever is cheap and low-harm, and correction exists for most hearing loss** — so even under low
  confidence in the population-average benefit, the expected-value case for high-baseline-risk older
  adults is favourable; the gap is uptake, not availability. Reducing harmful noise exposure is the
  upstream (primary-prevention) arm.
- **Open loop / next evidence.** The decisive missing piece is a replication RCT powered in high-risk
  strata; ACHIEVE's own investigators say so. Until then, *treat hearing loss to prevent dementia* is a
  reasonable bet at high baseline risk, not an established general-population recommendation.

<div class="recent-update" data-last-updated="2026-08-28"></div>

## Self-critique `[run 2026-08-28, before commit]`

- **Exposure/intervention confidence kept separate and honest.** The page-spine (exposure) is medium; the
  intervention claim is explicitly low, labelled at point of use, and the RCT null-overall leads the aid
  section rather than the observational 19%. No false "treat-to-prevent" headline.
- **De-secondhanding did not launder independence.** Yu is marked F-refinement, explicitly NOT
  E-independent, with the shared-author list named — so the tighter CI is not sold as independent
  corroboration of the Commission. Yeo is genuinely independent of Yu/Livingston (separate Singapore
  group), but it supplies the *observational* arm at low GRADE, not an independent RCT, so it raises no
  confidence on causation.
- **Subtype-null handled as insufficient, not no-effect.** Vascular-dementia null is reported with Yu's
  own power/dilution caveat, not asserted as absence of effect.
- **Multi-source dementia reference page** — `confidence: medium` (exposure spine). Orbits
  [[Dementia Prevention and Modifiable Risk Factors]]; not a competing nucleus.

## References

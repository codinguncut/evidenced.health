---
type: concept
question: Does the mortality effect of physical activity depend on the DOMAIN it happens in — is high occupational (work) activity beneficial like leisure activity, or the opposite?
aliases: [Physical Activity Paradox, PA Paradox, Occupational Physical Activity, Occupational Physical Activity and Mortality, Work Physical Activity, Physically Demanding Work Mortality]
authors: [Coenen, Pieter]
sources: [Coenen - Occupational Physical Activity Mortality Meta-Analysis 2018]
cluster: occupation
nucleus: true
confidence: low
created: 2026-08-14
updated: 2026-08-17
self_critiqued: 2026-08-17
relationships:
  related_to:
    - Physical Activity Dose and Mortality
    - Cardiorespiratory Fitness and Mortality
    - The U-Shaped Association Artifact
    - Is the Food Category Doing Any Work
    - Transportability and Effect Modification
    - Job Strain and Coronary Heart Disease
    - Night Shift Work and Breast Cancer
---

Opens the `occupation` cluster. The core claim: **the direction of the physical-activity/mortality
association can flip with the *domain* the activity occurs in.** Leisure-time and total physical
activity are associated with *lower* mortality -> [[Physical Activity Dose and Mortality]]; high
*occupational* (work) physical activity is associated, in men, with *higher* all-cause mortality. So
«physical activity» is not one exposure for this decision — it is at least two, and they point opposite
ways.



## The finding — men, high occupational PA, higher mortality

Coenen 2018 is a gold systematic-review-with-meta-analysis (17 studies pooled, 193,696 participants;
26 studies / 33 articles screened-in; mean follow-up \~19.9 y). The headline:

> «Data from 17 studies (with 193 696 participants) were used in a meta- analysis, showing that men
> with high level occupational physical activity had an 18% increased risk of early mortality compared
> with those engaging in low level occupational physical activity (HR 1.18, 95% CI 1.05 to 1.34). No
> such association was observed among women, for whom instead a tendency for an inverse association was
> found (HR 0.90, 95% CI 0.80 to 1.01).»
> [@coenen2018paradox]

The paradox is stated as such in the source:

> «Recent evidence suggests the existence of a physical activity paradox, with beneficial health
> outcomes associated with leisure time physical activity, but detrimental health outcomes for those
> engaging in high level occupational physical activity.»
> [@coenen2018paradox]

**Magnitude, stated with its bounds.** The effect is **relative** (HR 1.18) on **all-cause mortality**,
in **men only**; the source reports no absolute-risk translation, so the absolute excess depends on the
person's baseline mortality risk (route-(a): a bigger absolute harm for an older / higher-risk worker
than a young low-risk one). The studied contrast is **high vs low** occupational-PA category (a
harmonised four-level continuum: sedentary / low / moderate / high), **not** high-vs-any-movement —
the high-vs-**sedentary** contrast was weaker and non-significant. There is no dose-response curve here:
this is a two-category HR, and heterogeneity in the male estimate was high (I2 = 76%).

## Why this is not a contradiction of the dose page — it is a disambiguation + refinement

The apparent clash with [[Physical Activity Dose and Mortality]] («more activity, lower mortality»)
dissolves on a same-quantity check: the two are **different exposures under one word**, so this is a
type-B disambiguation and a type-F refinement of the dose page, **not** a joined tension.

| Parameter | Leisure / total PA (dose page) | Occupational PA (Coenen) | Same quantity? |
|---|---|---|---|
| Exposure | leisure-time / total movement volume | activity performed *at work* | **NO** — different domain |
| Typical pattern | short moderate-vigorous bouts, long recovery | ≥40 h/week, static/repetitive, little recovery | NO |
| Measurement | accelerometer / harmonised self-report | self-report (all included studies) | NO |
| Contrast | most-active vs least-active quartile | high vs low occupational category | NO — non-comparable |
| Direction on mortality | lower (HR down to \~0.27 total PA) | **higher** in men (HR 1.18) | **NO — opposite** |

Because «same quantity?» is NO on every row, the not-joined check (ii) fires (different scope/unit,
consistent once matched): meeting a physical-activity guideline *via work* is not the same act as the
leisure activity the guideline was evidenced on. Coenen draws exactly this consequence — but conditions
it on causality:

> «If the observed association is causal, then PA guidelines need to differentiate between occu- pational
> and leisure time PA because meeting current PA guide- lines via occupational PA may not provide the
> intended health benefits or even confer a health risk.»
> [@coenen2018paradox]

The association **persists after adjusting for leisure-time PA** (so it is not simply that active
workers are inactive in leisure), «even when adjusting for relevant factors (such as leisure time
physical activity)» [@coenen2018paradox].

## The proposed mechanism — directional, human-corroborated, discounted

Why the same behaviour-class could harm at work and help at leisure:

> «High levels of occupational PA, commonly reached by tasks involving manual handling, repetitive work
> and prolonged static postures, elevate heart rate and blood pressure and are performed over long
> periods of time (often ≥40 hours/week), with insufficient time for recovery.»
> [@coenen2018paradox]

The contrast to leisure PA is the load-bearing part: leisure activity comes «in short moderate or high
intensity bouts of predominantly aerobic activities, accompanied by much longer recovery periods», and
one cleaner sample (hospital cleaners) reached no intensity sufficient to improve cardiorespiratory
fitness despite being highly active. So the mechanism is a **substrate/recovery mismatch**: sustained
sub-fitness-threshold load with elevated HR/BP and no recovery, rather than the intermittent
CRF-raising stimulus that leisure exercise supplies. [inferred from @coenen2018paradox] This is a Randle-adjacent *directional* mechanism, admitted
discounted, not as an outcome finding.

## The artifact watch — healthy-worker selection inflates the apparent harm

The finding is **not** dismissable as an artifact, but one selection mechanism bends it and must be
named -> [[The U-Shaped Association Artifact]]. The harm looked *stronger* in relatively healthy study
samples, which is the wrong direction for a naive dose-response and the signature of selection:

> «Instead, this finding is probably due to so-called healthy worker effect, a form of selection bias
> were more healthy subjects select into and remain in the most physically strenuous occupations.»
> [@coenen2018paradox]

This is the mirror of the sick-quitter case: instead of the *referent* being enriched for the ill, the
*exposed* (strenuous-job) group is enriched for the healthy, so a real harm shows up *amplified* in
healthy subsamples. Coenen also argues socioeconomic status may be a **pathway** for occupational-PA
risk rather than a confounder, so over-adjusting for SES would bias the estimate *conservative* (toward
the null) — i.e. the true harm may be under-, not over-, stated. Both cut against reading the harm as a
pure confounding artifact, but neither is a strong (referent-correction / genetic) check, so the
**causal** reading stays unadjudicated — hence the confidence below.

## The stratum where this changes a decision

For someone whose physical activity is **predominantly occupational** — manual handling, ≥40 h/week,
little recovery (a large fraction of the working population) — the decision-change is: **occupational
activity is not a substitute for leisure aerobic activity** on the mortality outcome, and may itself
carry cardiovascular risk. Such a person should not read «I'm on my feet all day at work» as having
banked the [[Physical Activity Dose and Mortality]] benefit; leisure-time moderate-vigorous activity
(with recovery) remains the evidenced lever. This is a route-(a)/route-(e) stratification (who the
person is and what their activity actually consists of), **not** a claim that work activity should be
reduced — the paper does not support a *reduce-your-work-activity* recommendation, only a
*don't-count-it-as-your-exercise* one.
[inferred from @coenen2018paradox]

**Candidate effect modifier — fitness (route-b, UNTESTED).** The harm «appears to be stronger in workers
with low compared with high cardiorespiratory fitness», but Coenen «could not statistically test this in
a sensitivity analysis» for lack of data [@coenen2018paradox]. So good [[Cardiorespiratory Fitness and Mortality|CRF]] is a *candidate*
buffer of the occupational-PA harm — plausible and mechanism-consistent (a fit worker operates at a
lower relative workload) — but it clears only the route-(a) plausibility bar, not the positive
effect-modification bar, and must not yet be stated as an established interaction.

## Confidence: LOW — why

- **Observational only.** Pooled prospective cohorts; causality explicitly unestablished («if the
  observed association is causal»). No RCT, no MR/genetic instrument.
- **Self-reported exposure in every included study**, with the gender difference possibly partly a
  measurement/perception artifact (Coenen raises this directly).
- **High heterogeneity** in the male estimate (I2 = 76%) and a selection-bias mechanism
  (healthy-worker) that the design cannot fully remove.
- **Sex-discordant** (harm in men, non-significant inverse tendency in women) — the finding is not
  uniform, which is itself a reason for caution about mechanism.

The honest read: a single gold MA establishes a **credible domain-specific association** worth a
stratum-level caveat, not a settled causal law. It earns a LOW-confidence nucleus that the rest of the
occupation cluster will test.
[inferred from @coenen2018paradox]

## The occupation cluster's other channels — strain, cognitive stimulation, circadian

Occupation reaches health by more than the physical-demand route this page maps — it is at least **four
distinct exposures**, reaching different organ systems by different biology, and a worker can carry any
combination of them:

- **Channel 2 — psychosocial strain.** [[Job Strain and Coronary Heart Disease]] (high work demands +
  **low** control) carries a small consistent excess CHD risk (HR 1.23, PAF 3.4%) by a *different*
  pathway (chronic HPA/sympathetic activation, not sustained HR/BP load-without-recovery) and, unlike the
  PA paradox, is **not** sex-discordant. It cross-links to the `psychosocial` cluster's HPA spine
  ([[Allostatic Load and Mortality]]), which this physical-demand channel does not.
- **Channel 3 — cognitive stimulation.** [[Cognitive Stimulation at Work and Dementia]] (high demands +
  **high** control — Karasek's "active" job) is *protective* for later dementia (HR 0.77, 0.65-0.92) by a
  *cognitive-reserve / neurodegeneration* pathway (candidate axonogenesis proteins), not a cardiovascular
  one. Note channels 2 and 3 share the **demand** axis but sit at **opposite poles of the control axis**,
  which flips high-demand work from CHD-harmful (low control) to dementia-protective (high control) — the
  demand-control model is itself not one exposure.
- **Channel 4 — circadian disruption (a NULL).** [[Night Shift Work and Breast Cancer]] is the
  most-studied occupational circadian disruptor, and its patient-important verdict runs *opposite* to a
  harm channel: pooled across 10 prospective studies (1.4M women) night shift work shows **no meaningful
  effect** on breast cancer incidence (RR 0.99, 0.95-1.03; excludes a moderate effect even at >=20 years),
  overturning a case-control-driven prior signal and the IARC 2A *probable carcinogen* reading. It is the
  cluster's demonstration that an occupational channel can resolve to a *credible no-effect*, not only to
  harm or benefit — and a live instance of prospective evidence overturning retrospective
  -> [[Upgrading Observational Evidence]].

So "occupation" is at least four exposures for a health decision, with different outcomes (mortality /
CHD / dementia / breast cancer), different pathways, and different signs — including one that resolves to
a null; the levers do not collapse into one.
[inferred from @coenen2018paradox; @kivimaki2012jobstrain; @kivimaki2021cognitive; @travis2016nightshift]

## Self-critique `[run 2026-08-14, before commit]`

- **Not laundered from one source restated.** The value here is the *disambiguation* (one word, two
  opposite-signed exposures) and its consequence for the dose page — a move Coenen gestures at but the
  wiki makes explicit against its held leisure-PA fabric. The parameter table is the guard that this is
  a genuine same-quantity NO, not a manufactured tension.
- **Not overclaimed.** Confidence is LOW and every causal step is hedged to Coenen's own conditional;
  the mechanism is marked; the CRF modifier is flagged UNTESTED; the decision-change is
  scoped to *don't-count-work-as-exercise*, not *do-less-work*.
- **The friction is filed as a distinction, not a `[[tension]]`.** Not-joined check (ii) fires; per the
  parameter-table rule the honest artifact is this disambiguation page plus a refinement note on the
  dose page, not a separate tension page.
- **Coherence, not validity** (R1): the page says the association exists and is domain-specific; it does
  not assert that work activity *causes* death, and the open loop (no realized-outcome check) stands.

### Channel-4 addition `[run 2026-08-17, before commit]`

- **The circadian NULL is added without inflating the decomposition.** Channel 4 is presented as a
  *null* (no meaningful effect on breast cancer), not padded into a harm to make the four-channel story
  tidier; the effect estimate stays attributed to Travis's own source. The four-exposures claim is a
  cluster-level read tagged, each estimate left to its own source — no laundered
  independence across the four channels.

## References

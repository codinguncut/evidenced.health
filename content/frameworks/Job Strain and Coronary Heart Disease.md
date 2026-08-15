---
type: framework
question: Does job strain (high work demands + low control) raise coronary heart disease risk, and how large is that lever versus standard risk factors like smoking?
aliases: [Job Strain, Work Stress and Heart Disease, Occupational Stress CHD, Demand-Control Model, Karasek Job Strain, Workplace Stress Coronary]
authors: [Kivimaki, Mika]
sources: [Kivimaki - Job Strain Coronary Heart Disease Meta-Analysis 2012]
cluster: occupation
nucleus: false
confidence: low
created: 2026-08-14
updated: 2026-08-14
self_critiqued: 2026-08-14
relationships:
  related_to:
    - The Physical Activity Paradox
    - Allostatic Load and Mortality
    - Stress Management and Cardiometabolic Health
    - Blood Pressure Lowering and Cardiovascular Events
    - Baseline Risk and the Relative-Absolute Split
    - The U-Shaped Association Artifact
---

An orbiter of the `occupation` cluster and the **psychosocial** channel of occupational exposure —
distinct from the cluster's nucleus [[The Physical Activity Paradox]], which is the *physical-demand*
channel. Job strain is Karasek's demand-control construct: «Job strain—the combination of high job
demands and low control at work—is one of the most widely studied deﬁ nitions of psychosocial stress»
[@kivimaki2012jobstrain]. The finding:
job strain carries a **small but consistent** excess risk of incident coronary heart disease — a real,
credibly-non-artifactual association that is nonetheless a **minor lever** against the standard risk
factors. Held single-source (a gold IPD meta-analysis), `confidence: low`.
[inferred from @kivimaki2012jobstrain]

## The effect estimate

Kivimaki 2012 is a collaborative **individual-participant-data (IPD)** meta-analysis (IPD-Work
Consortium): 13 European cohorts, 197,473 CHD-free employed adults, 1.49 M person-years, mean follow-up
7.5 y, 2358 incident CHD events (first non-fatal MI or coronary death).

- **Exposure / comparator:** job strain (high demands AND low control) vs no job strain — a **binary**
  contrast on study-median splits, self-reported at baseline.
- **Outcome:** incident CHD *event* (non-fatal MI + coronary death) — a harder, narrower endpoint than
  the all-cause / CVD *mortality* used on the sibling stress pages ([[Allostatic Load and Mortality]],
  [[Stress Management and Cardiometabolic Health]]).
- **Effect (relative):** «the hazard ratio for job strain versus no job strain was 1·23 (95% CI
  1·10–1·37). This eﬀ ect estimate was higher in published (1·43, 1·15−1·77) than unpublished (1·16,
  1·02−1·32) studies.» After adjustment for socioeconomic status it «attenuated to 1·17 (1·05–1·31)»;
  further adjustment for lifestyle (BMI, PA, smoking, alcohol) or Framingham score did not materially
  change it. [@kivimaki2012jobstrain]
- **Population-attributable risk:** «The population attributable risk for job strain was 3·4%.» (assuming
  causality, at \~15% strain prevalence). [@kivimaki2012jobstrain]
- **Certainty:** LOW — observational cohorts only (no RCT possible), self-reported exposure, binary
  strain definition losing the demand/control gradient. Gold *design* (IPD-MA correcting publication
  bias), but the magnitude inherits the observational confounding structure.
- **Studied contrast, not a curve:** high-vs-no-strain binary; there is no dose-response shape here, so
  no knee/plateau claim is available.

**Absolute framing (illustrative,).** The source reports no absolute risk. At the cohort's
baseline CHD incidence of \~15.8 per 10,000 person-years, a 1.23 relative hazard implies roughly **3-4
extra CHD events per 10,000 person-years** in strained workers (\~19 vs \~15 per 10,000 py) — on the order
of **1 additional event per \~300-400 strained workers over the \~7.5-y follow-up**. A modest relative
effect on a modest baseline is a small absolute effect; the excess scales with the worker's baseline
risk (route-(a), [[Baseline Risk and the Relative-Absolute Split]]) — larger for an older/higher-risk
worker. [inferred from @kivimaki2012jobstrain]

## Why the association is credible — three artifact defences the IPD design supplies

The prior job-strain literature was contested (single studies showed «more than a doubling»; a prior
meta-analysis \~40%). The IPD design attacks the three standard objections, and the association survives
all three:

- **Publication bias — corrected downward.** Published studies gave 1.43, unpublished 1.16; pooling both
  (only an IPD collaboration can retrieve the unpublished cohorts) yields 1.23. The published-only
  literature was inflated — the honest estimate is the *lower*, pooled one.
  [@kivimaki2012jobstrain]
- **Reverse causation — ruled out by lag exclusion.** «Exclusion of coronary heart disease cases at the
  ﬁ rst 3 years and 5 years of follow-up to minimise reverse causality slightly strengthened the
  association» (3-y 1.31; 5-y 1.30). [@kivimaki2012jobstrain]
  The signature of reverse causation is *weakening* when early events are dropped; job strain does the
  **opposite**, so early (potentially disease-driven) exposure reports are not manufacturing the effect.
  This is the [[The U-Shaped Association Artifact]] check run and passed on the *harm* arm.
- **Confounding — SES carries part, lifestyle none.** Full adjustment leaves 1.17, and behavioural risk
  factors do not mediate it — so the strain->CHD association is not simply strained workers smoking or
  sitting more. SES is the one material confounder/pathway (crude 1.23 -> SES-adjusted 1.17).

Consistency is high: broadly similar HRs across sex, age, SES, and region, with negligible pooled
heterogeneity (I2 <0.1%). [@kivimaki2012jobstrain]

## Layer-1 ranking — a small lever, and the source says so

The decision-relevant fact is not *whether* job strain raises CHD risk but *how much it is worth acting
on* relative to the big rocks. Kivimaki states the ranking directly: «prevention of workplace stress
might decrease disease incidence; however, this strategy would have a much smaller eﬀ ect than would
tackling of standard risk factors, such as smoking.»
[@kivimaki2012jobstrain]

- A **PAF of 3.4%** puts job strain far below the dominant modifiable CHD levers (smoking, blood
  pressure, lipids), whose population-attributable fractions are multiples larger. This is the *ceiling
  is a finding* rule made concrete: for a worker who still smokes, has untreated hypertension, or is
  inactive in leisure, workplace-stress reduction is not the next move — the big rock is.
- The exposure earns attention as a **stratum-level refinement**, not a headline lever: for someone who
  has already pulled the large levers (non-smoker, controlled BP, active), a modest consistent
  occupational-stress risk is among the smaller remaining gaps — precisely the marginal question the
  ranking says becomes relevant only *after* the big rocks. *Attention is an anti-signal* applies:
  work-stress is heavily discussed relative to its \~3% PAF.

## Occupation is at least two exposures — the cross-cluster decomposition

Job strain and the [[The Physical Activity Paradox|physical-activity paradox]] are **different
occupational exposures that reach the same organ system by different routes**, so "occupation" is not
one lever for a cardiovascular decision. Same-quantity check against the cluster nucleus:

| Parameter | Occupational physical activity (Coenen, nucleus) | Job strain (Kivimaki, this page) | Same quantity? |
|---|---|---|---|
| Exposure | high physical demand at work (>=40 h/wk load) | high psychological demand + low control | **NO** — physical vs psychosocial |
| Proposed mechanism | sustained HR/BP load, no recovery, sub-fitness stimulus | chronic HPA/sympathetic activation (stress physiology) | NO — different pathway |
| Outcome measured | all-cause mortality | incident CHD event | NO — different endpoint |
| Direction | higher mortality **in men only** (HR 1.18) | higher CHD risk, **both sexes** (HR 1.23) | same sign, different exposure |
| Sex pattern | sex-discordant (null/inverse in women) | broadly similar men and women | **NO** |

Because «same quantity?» is NO on exposure, mechanism, and endpoint, this is a type-B/C **decomposition**
(one occupational context -> at least three distinct causal channels), not a duplicate of the nucleus and
not a tension with it — the findings are consistent and additive, each a separate channel of occupational
risk. A worker can carry any combination. The third channel is **cognitive stimulation**
([[Cognitive Stimulation at Work and Dementia]]), and it stands in an especially sharp relation to this
page — see below.
[inferred from @kivimaki2012jobstrain; @coenen2018paradox; @kivimaki2021cognitive]

## The demand-control model yields two opposite-signed exposures — job strain is one pole

Job strain is **one quadrant** of Karasek's demand-control model, not the whole of it. The model crosses
a *demand* axis with a *control* (decision-latitude) axis, and the sibling
[[Cognitive Stimulation at Work and Dementia]] holds the **opposite** control-axis pole:

| Karasek quadrant | Demand | Control | This corpus | Direction |
|---|---|---|---|---|
| **High-strain** (this page) | high | **low** | job strain -> CHD | **harmful** (HR 1.23) |
| **Active** (sibling page) | high | **high** | cognitive stimulation -> dementia | **protective** (HR 0.77) |

So **high work demand is not one exposure** — decision latitude (control) is the axis that flips it from a
CHD *risk* (low control) to a dementia-*protective* factor (high control), on different endpoints by
different biology (HPA/sympathetic here vs cognitive-reserve/neurodegeneration there). Reading
*demanding job = bad* collapses two opposite exposures; the control axis is doing the work. This is a distinction,
**not** a [[tension]] — the two answer different questions (which quadrant, which outcome) and are
consistent (not-joined check (ii): different unit/endpoint).
[inferred from @kivimaki2021cognitive]

## The mechanism — a candidate mediator on the HPA/allostatic-load spine

Job strain is a chronic psychosocial stressor, and [[Allostatic Load and Mortality]] (the `psychosocial`
cluster nucleus) already names job strain among the chronic-stress exposures that act *through* cumulative
multi-system dysregulation to reach a physical outcome. The plausible chain is **job strain -> sustained
HPA/sympathetic activation -> allostatic load -> CHD**, the same spine on which social isolation and low
purpose already sit as candidate mediators. This makes job strain a **third distinct exposure routing
through the AL spine** — and the AL page's marker-not-lever caution transfers: the mediation is an
**unmeasured bridge**, not a demonstrated one (Kivimaki measures no AL index; the lifestyle-adjustment
result shows the pathway is *not* behavioural, consistent with but not proof of a direct-physiology
route).
[inferred from @kivimaki2012jobstrain]

## Where it changes a decision — and where it does not

- **In scope (appraise):** for a worker who has already handled the big rocks, high job strain is a
  small, credible, consistent CHD risk factor — a stratum-level refinement worth naming, not a headline.
- **Realistic intervention is workplace/organizational** (raising control / lowering demands), which the
  wiki does not evidence for a hard CHD outcome — no RCT of workplace-stress reduction reports CHD
  events. Individual stress-management (e.g. MBSR, [[Stress Management and Cardiometabolic Health]]) is a
  *different, low-certainty, surrogate-only* lever and is not shown to move CHD incidence.
- **Out of scope:** diagnosing or treating an established cardiac condition; prescribing.

## Confidence: LOW — and the gaps

- **Single gold source, observational, self-reported exposure, binary definition.** `AWAITS` an
  independent job-strain->CHD SR/MA and any guideline position before a recommendation-level read.
- **`G`-gaps.** (i) No trial shows that *reducing* job strain reduces CHD — the marker/lever gap, same as
  the AL nucleus. (ii) Residual SES confounding: SES is partly a pathway and partly a confounder, and the
  1.23->1.17 attenuation cannot fully separate them. (iii) The AL-mediation bridge is unmeasured. (iv) The
  demand/control gradient is collapsed to a binary — the shape of any dose-response is unknown.
- **Coherence, not validity (R1):** the association is what these cohorts report; the open loop (no
  realized-outcome check of a strain-reduction intervention) stands.

## Self-critique `[run 2026-08-14, before commit]`

- **Not laundered from one source restated.** The beyond-summary moves are (a) the cross-cluster
  **decomposition** — occupation resolves into a physical-demand channel and a psychosocial channel that
  are non-comparable on exposure/mechanism/endpoint (parameter table is the guard), and (b) the
  **spine-extension** placing job strain as a third candidate mediator on the AL/HPA spine. Both are made
  against held fabric (the PA-paradox nucleus, the AL nucleus), not restated from Kivimaki.
- **Independence discipline held.** Neither cross-source move is tagged `[E-independent]`: the Coenen and
  AL links are *different exposures*, not one claim reached by two independent backings — explicitly
  flagged at each.
- **Not overclaimed.** Confidence LOW; every causal step is hedged; the mediation is an unmeasured bridge;
  the absolute framing is flagged illustrative-INFERRED; the Layer-1 ranking is Kivimaki's own words.
- **Big-rock ranking is the decision-change**, not the bare association — the page's job is to place the
  \~3.4% PAF *below* smoking/BP/lipids and license *stop optimizing this until the big rocks are handled*.

## References

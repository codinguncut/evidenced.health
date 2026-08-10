---
type: framework
question: Does a higher sense of purpose or meaning in life lower all-cause mortality and cardiovascular risk, and is it a lever to cultivate or a marker of an already-healthy life?
aliases: [Purpose in Life, Sense of Purpose, Meaning in Life, Eudaimonic Wellbeing and Mortality, Ikigai, Life Purpose and Health, Purposeful Engagement]
authors: [Cohen, Randy; Bavishi, Chirag; Rozanski, Alan]
sources: [Cohen - Purpose in Life Mortality Cardiovascular Meta-Analysis 2015]
cluster: psychosocial
confidence: low
created: 2026-08-09
updated: 2026-08-09
self_critiqued: 2026-08-09
relationships:
  related_to:
    - Allostatic Load and Mortality
    - Social Connection and Mortality
    - Surrogate Outcomes
    - Baseline Risk and the Relative-Absolute Split
    - The U-Shaped Association Artifact
    - Measurement Error in Dietary Assessment
    - Depression and Modifiable Exposures
    - Stress Management and Cardiometabolic Health
---

Facet of the `psychosocial` cluster (orbits the [[Allostatic Load and Mortality]] nucleus) — a **third,
distinct psychosocial exposure** with a **hard** endpoint: a higher *eudaimonic* sense of purpose/meaning
predicts lower all-cause mortality (adjusted pooled RR **0.83**) and fewer cardiovascular events (RR
**0.83**). It is NOT social connection and NOT allostatic load: purpose is an internal *meaning-state*
(the candidate exposure), social connection an external *contact* structure (a sibling exposure), and
allostatic load the *physiological mechanism* both route through. Purpose plausibly reaches mortality by
the SAME HPA/direct-physiology channel the cluster spine operationalizes (lower cortisol) — a candidate
route Cohen names but does not measure. On this evidence it is a **predictor whose
lever-status is unproven** (no trial raises purpose and measures mortality), with the confidence capped by
observational design, high heterogeneity, a publication-bias signal, and — the load-bearing caveat —
incomplete adjustment for the neighbouring psychosocial constructs (depression, positive affect, social
support) it is correlated with. Single-source (a gold meta-analysis), `confidence: low`.
[inferred from @cohen2015purpose]

## The construct — a bundle of near-synonyms, measured with no standard instrument `[type-B, up front]`

Cohen does not study "purpose in life" narrowly. Purpose is defined (via McKnight & Kashdan) as *a
self-organizing life aim that stimulates goals, manages behavior, and provides a sense of meaning*, and
for the meta-analysis five terms are pooled as one construct: «purpose in life includes measures such as
usefulness to others, life engagement, and ikigai. Ikigai is a Japanese term that refers to a "life
worth living." Life meaning was also included as a relevant search term»
[@cohen2015purpose], and «these 5
terms are used interchangeably throughout the manuscript to represent the con- struct of purpose in life»
[@cohen2015purpose].

- **This is a synonymy collapse (type-B), and it is also the study's largest limitation.** Purpose,
  meaning, usefulness, engagement and ikigai are treated as one exposure, so the pooled estimate answers
  *does the broad eudaimonic-meaning construct predict mortality?*, not *does purpose specifically?* Cohen
  concedes the collapse: purpose «is but a facet of what many refer to as meaning in life», and the two
  «should thus be correlated, but not necessarily redundant»
  [@cohen2015purpose].
- **The instruments are heterogeneous and mostly crude.** Across the 10 studies: 4 used variations of the
  Ryff Well-Being scale, 1 the Meaning in Life Questionnaire, and 5 used **single-item** measures (2 of
  usefulness, 3 of ikigai) [@cohen2015purpose].
  A single-item ikigai question and a multi-item Ryff subscale are not the same measurement — read the
  pooled figure as an average over discordant instruments, the same measurement-noise discipline as
  self-reported diet, a different exposure -> [[Measurement Error in Dietary Assessment]]. Subgroup by
  instrument was nonetheless concordant (Ryff 0.81 [0.68-0.97] vs other questionnaires 0.83 [0.74-0.92]),
  which is a modest robustness signal but cannot separate the constructs.

## The effect estimate — high vs low purpose, all-cause mortality and CV events

Systematic review + random-effects (DerSimonian-Laird) meta-analysis, 10 prospective observational
studies, 136,265 participants, mean follow-up 7.3 y, mean age 67; 14,518 all-cause deaths and 4,316 CV
events. Study quality high — «The overall study quality was excellent with a mean quality score of 8
(range, 7–9)» (Newcastle-Ottawa) [@cohen2015purpose].
All estimates are for **HIGH vs LOW purpose**, so a protective RR is below 1.

| Outcome | Adjusted pooled RR (95% CI) | Unadjusted RR (95% CI) | I2 (adj) | n studies |
|---|---|---|---|---|
| **All-cause mortality** | **0.83 (0.75, 0.91)**, p<.001 | 0.67 (0.57, 0.78) | 82.5% | 9 |
| **Cardiovascular events** | **0.83 (0.75, 0.92)**, p=.001 | 0.65 (0.50, 0.85) | 56.2% | 5 |

«A significant association was observed between having a higher purpose in life and reduced all-cause
mortality (adjusted pooled relative risk = 0.83 [CI = 0.75–0.91], p < .001) and cardiovascular events
(adjusted pooled relative risk = 0.83 [CI = 0.75–0.92], p = .001)»
[@cohen2015purpose].

- **The exposure-framed reciprocal, for comparability with the cluster.** AL and social isolation express
  the hazard of the *adverse* pole; purpose's 0.83 expresses the *protective* pole. Inverting, LOW vs high
  purpose carries roughly RR 1/0.83 \~= **1.20** for all-cause mortality — the same ballpark as allostatic
  load (all-cause HR 1.22) and below social isolation (HR 1.32). This is an *illustration of scale*, NOT a
  licensed head-to-head comparison: the exposures and metrics differ (parameter table below).
- **Absolute framing is absent.** Cohen reports only relative risks. A 17% relative reduction (or \~20%
  reciprocal excess) is a *large* effect only where baseline mortality is high; the absolute benefit of
  moving someone up the purpose distribution scales with their baseline risk, the safe route-(a) reading
  -> [[Baseline Risk and the Relative-Absolute Split]].
- **Mortality and CV events are HARD, patient-important outcomes.** Unlike allostatic load (a composite
  marker whose link to death is itself a claim -> [[Surrogate Outcomes]]), Cohen measures *death* and
  *incident CV events* directly. What is uncertain is **causation and confounding**, not whether the
  endpoint matters — and this keeps purpose within the physical-health telos (it earns its place via a
  hard physical outcome, not via wellbeing as an end in itself).
- **Robust to publication bias, which is nonetheless present.** Egger's test flagged funnel asymmetry for
  adjusted all-cause mortality (p=.024), but «the association between purpose in life and all-cause
  mortality remained unchanged and was significant after imputing possible missing studies (adjusted
  relative risk = 0.82 [95% CI = 0.75–0.90], p < .001)»
  [@cohen2015purpose] via
  trim-and-fill. The signal is real but does not overturn the estimate.
- **Certainty is bounded by design and heterogeneity.** All 10 studies are observational (no RCT), and
  I2=82.5% for adjusted all-cause mortality means the pooled point averages over discordant studies. Gold
  *design* (SR+MA of excellent-NOS cohorts), but the magnitude inherits the observational confounding
  structure and the noisy, bundled exposure.

## Dose-response is essentially unassessed `[G-gap]`

Only ONE included study characterized a gradient: «In the one study where a graded relationship was
assessed, Kim et al. (10) noted that the relative risk for myocardial infarction was reduced by 27% for
each unit increase in measured purpose»
[@cohen2015purpose]. Cohen states
the general expectation — psychosocial risk factors «typically manifest a graded relationship to the
fre- quency of adverse clinical events» — but that «this could not be ade- quately assessed»
[@cohen2015purpose] here. So no
threshold, knee or plateau is located; the high-vs-low dichotomy is a coarse contrast, not a curve. Do
not read the effect as monotone — the shape is a gap, not a finding.

## Marker vs lever — purpose is called modifiable, but no trial shows raising it lowers mortality

Cohen frames purpose as actionable: «purpose in life is a potentially modifiable factor that could result
in downstream health benefits» [@cohen2015purpose],
and points to volunteering, well-being therapy and meditation as candidate interventions that raise it.
But the decision-relevant split is the same one the whole cluster carries:

- **As a PROGNOSTIC marker it is evidenced** (route (a)): low purpose flags a higher-mortality stratum,
  consistently across the reported country, instrument, age and baseline-CVD subgroups (the age/CVD
  slices confounded, per the reverse-causation section). That is a real, warranted use —
  screening/prioritization.
- **As a MODIFIABLE lever it is NOT yet evidenced.** No included study raised purpose and measured
  mortality; the intervention evidence Cohen cites (volunteering -> lower mortality; well-being therapy
  -> lower depression relapse) targets *proxies or intermediate outcomes*, and volunteering «provides
  both social op- portunity and purposeful engagement»
  [@cohen2015purpose] — i.e. it
  co-delivers social connection, so it cannot isolate purpose. This is the textbook
  **predicts-but-not-shown-to-cause** pattern -> [[Surrogate Outcomes]]. The marker/lever gap is the same
  one [[Allostatic Load and Mortality]] and [[Social Connection and Mortality]] hold.

## Mechanism — the HPA/direct-physiology bridge into the cluster spine

Cohen names three mechanism families; the first is the telos's HPA channel and the wire into the
`psychosocial` cluster's physiological nucleus:

1. **Direct physiology (stress buffering).** «purpose in life might exert its protective ef- fects via
   direct physiology (e.g., lower cortisol levels in those with higher psychological well-being)»
   [@cohen2015purpose], plus better
   immune function and lower HbA1c (life engagement) — buffering the pathophysiological response to
   stressors.
2. **Health behaviours** — higher purpose tracks more physical activity, non-smoking, and better use of
   preventive services (a mediator-and-confounder both).
3. **Emotional buffer** — moderating the effect of chronic stressors on the body.

**The allostatic-load bridge.** Sustained lower cortisol / dampened HPA reactivity is
precisely the *reduced* multi-system dysregulation that [[Allostatic Load and Mortality]] indexes (AL
all-cause HR 1.22). So the candidate causal chain is **purpose -> lower HPA/stress reactivity -> lower
allostatic load -> lower mortality** — making AL a candidate *mediator* of purpose's effect, exactly as
it is for social connection. Cohen does not measure an AL index, so the mediation is an unmeasured bridge,
not a demonstrated one; it partly cashes the nucleus's call for exposures that name the HPA/AL pathway.
**And Cohen flags the bridge's own weakness:** the cortisol association «may not be spe- cific to any
given dimension of Ryff's various domains of psychological well-being»
[@cohen2015purpose] — i.e. the
physiology tracks positive well-being broadly, not purpose in particular, so the mechanism does not
establish purpose as the specific active ingredient.
[inferred from @cohen2015purpose]

## Purpose is not the same quantity as social isolation or allostatic load `[type-B, parameter table]`

The reciprocal-scale coincidence (LOW-purpose \~1.20, AL 1.22, SI 1.32) invites a head-to-head ranking.
The parameter table forbids it — the exposures and metrics are not commensurable:

| Parameter | Cohen (purpose) -- quoted value | Wang (social isolation) -- quoted value | Same quantity? |
|---|---|---|---|
| Outcome | all-cause death | all-cause death | **YES** -- the only matched axis |
| Exposure construct | eudaimonic meaning-state: «usefulness to others, life engagement, and ikigai» | objective network deficit: «having a limited social network, having infrequent social contacts» | **NO** -- internal meaning vs external contact |
| Effect measure + pole | RR «0.83 (0.75, 0.91)», high-vs-low (protective) | HR «1.32 (1.26, 1.39)», isolated-vs-not (harmful) | **NO** -- reciprocal framing (1/0.83\~=1.20), RR vs HR, different cohort pools |
| Adjustment for the OTHER construct | only 5/10 studies adjusted social support | isolation and loneliness reported separately | **NO** -- purpose is only partly deconfounded from connection |

Purpose vs **allostatic load** is a different *kind* of mismatch: AL is a downstream physiological
*mechanism/marker*, purpose an upstream *exposure* — they are not two exposures to rank but points on one
candidate causal chain (purpose -> HPA -> AL -> mortality, above). So the three `psychosocial` pages are a
**disambiguation, not a contest**: two distinct exposures (purpose, connection) and one shared mechanism
(AL), each measured differently, converging in direction on the same hard outcome. Convergence in
direction across three observational literatures sharing a confounding structure is a modest robustness
signal for the *association*, but it is **not type-E independent backing** — same method, overlapping
psychosocial-epidemiology lineage, no second route.
[inferred from @cohen2015purpose]

## Reverse causation and confounding — partially guarded, the discriminant-validity gap is load-bearing

The obvious threat is that **subclinical illness or depression erodes a sense of purpose**, so a
purpose->mortality association runs partly backwards. Cohen guards it incompletely:

- **Prospective design** puts exposure before outcome in all 10 cohorts.
- **Baseline CVD does not explain it — and cuts against gross reverse causation.** The association held
  whether or not participants with baseline CVD were included; the with-CVD subgroup was in fact
  *stronger* (adjusted ACM 0.63 [0.42-0.95]) than the CVD-free subgroup (0.84 [0.78-0.90]). If already-ill
  people simply had eroded purpose and higher death rates driving the signal, excluding them should have
  attenuated it, not strengthened it. **Caveat:** the with-CVD and the age>65 subgroups report *identical*
  RRs (0.63 / 0.84) — they are the same older, sicker studies — so this is an age/illness-confounded slice,
  not a clean reverse-causation probe.
- **The load-bearing gap is discriminant validity from the neighbouring psychosocial constructs.**
  Purpose is «a separate and distinct component of psy- chological well-being», but «it is possible that
  other psychosocial factors are contributing to the observed findings. Of the 10 included studies, 5
  controlled for social support and 3 for the influence of positive affect»
  [@cohen2015purpose], and because
  of the small study count Cohen could not compare adjusted-vs-unadjusted effect sizes. So the estimate is
  only partly deconfounded from social connection and positive affect — the exact sibling exposures on
  this cluster.
- **Depression is only partially adjusted.** «the presence of psychological ill-being could po- tentially
  influence the association between low life purpose and negative health outcomes. Although 6 of the 10
  studies controlled for depression or depressed mood, this remains a limitation»
  [@cohen2015purpose]. Purpose and
  depression are correlated-but-distinct (a separate MA found purpose associated with lower depression), so
  residual confounding by depression is real -> [[Depression and Modifiable Exposures]].
- **Religion/spirituality was never adjusted** — a common source of purpose, of which «none of the
  included studies examined this as a covariate», an unmeasured confounder.

The frailty/selection mechanisms are the same ones on [[The U-Shaped Association Artifact]]'s diagnostic
list; here they are only partly probed. Net: the pooled 0.83 deserves less weight than its CI alone
suggests, and the "purpose specifically (vs the broader positive-psychology cluster)" claim is the
weakest link.

## Not a tension with social connection — a distinction plus a gap `[not-joined check]`

Purpose and social connection share sources (volunteering, social ties supply both) and Cohen's exposure
overlaps connection (5/10 studies adjusted social support). This is **not a filed tension**: the two pages
answer *different decision-questions* (*is purpose a lever?* vs *is connection a lever?*), so the
not-joined check (ii, different unit) fires — a distinction, not a joined issue. Whether purpose's effect
*survives* full adjustment for social connection is **untested with power** (Cohen could not compare
effect sizes by adjustment) — an open `G`-gap, recorded as such, not smoothed into a claim of
independence.

## Where it sits — limits and gaps

- **Single-source, observational, `confidence: low`.** Gold *design* (SR+MA, NOS mean 8/10), but one
  meta-analysis, no RCT, no guidance family, high heterogeneity (I2 82.5% ACM), a publication-bias signal
  (robust to trim-and-fill), a bundled/noisy exposure, and incomplete deconfounding from the neighbouring
  psychosocial constructs. `AWAITS` an independent purpose-mortality SR/MA and any trial that raises
  purpose and measures a hard outcome.
- **`G`-gaps.** (i) No trial shows raising purpose lowers mortality — the marker/lever gap (and
  volunteering, the nearest intervention, co-delivers social connection, so it cannot isolate purpose).
  (ii) Dose-response is unassessed (1 study). (iii) Discriminant validity — does purpose predict mortality
  *independent of* social connection, positive affect and depression? — is under-powered here. (iv) The AL
  mediation is named, not measured. (v) No absolute risks; the shape of decline is unreported. (vi)
  Purpose vs meaning vs ikigai are pooled as one construct, so the specific active ingredient is unknown.
- **The loop is open (R1):** every number here is observational and coherence-graded, not
  outcome-validated. The prognostic (screening) use is warranted; the cultivate-purpose-to-live-longer use
  is a plausible but unproven lever — and the pull to treat a "potentially modifiable factor" as a thing
  you fix is exactly where the marker/lever confusion could mislead.

## References

---
type: synthesis
question: Do single-food-component associations (dairy, flavonoids, soy isoflavones, fruit and vegetables) give an independent, hard-endpoint dementia-prevention lever, or do they share one confounded structure whose signal survives only on soft and surrogate endpoints?
aliases: [Food Components and Cognition, The Soft-Endpoint Gradient in Diet-Cognition Evidence, Component Diet Levers and Dementia]
authors: [Zhou, Yuhan; Peng, Yinshun; Villoz, Fanny; Cui, Chendi; Huang, Liyan; Barnes, Lisa L]
sources: [Zhou - Fruit Vegetable Cognitive Disorders Older Adults 2022, Peng - Dietary Flavonoids Cognitive Function 2025, Villoz - Dairy Cognitive Decline Dementia 2024, Cui - Isoflavone Cognition RCT Meta-Analysis 2020, Huang - MIND Diet Cognitive Function Decline, Barnes - MIND Diet Trial Cognitive Decline]
cluster: dementia
confidence: low
created: 2026-09-08
updated: 2026-09-09
self_critiqued: 2026-09-09
relationships:
  related_to:
    - Dementia Prevention and Modifiable Risk Factors
    - Fruit and Vegetable Intake and Health
    - Flavonoid Intake and Cognitive Function
    - Dairy and Cognitive Decline
    - Soy Isoflavones and Cognitive Function
    - MIND Diet and Cognitive Decline
    - MIND Diet - Observational Benefit vs Randomized Null
    - Surrogate Outcomes
    - The U-Shaped Association Artifact
    - Measurement Error in Dietary Assessment
    - Is the Food Category Doing Any Work
    - Layer 1 - Ranking Interventions for a Stratum
---
<div class="recent-page" data-last-updated="2026-09-09"></div>


**Synthesis across the four single-food-component cognition arms the wiki holds** — dairy, flavonoids,
soy isoflavones, and fruit/vegetables (the whole-food group that carries the first two). Each is
appraised in full on its own page; the [[Dementia Prevention and Modifiable Risk Factors]] nucleus
states, arm by arm, that each is *observational, low-certainty, and mediated-not-additive*. This page
makes the move no single arm page and no single nucleus section makes: it reads the four **together**
and finds one regularity across them, with a decision consequence the per-arm verdicts leave implicit.


## The regularity — the signal lives on soft endpoints and vanishes at the hard diagnosis

Line the arms up by endpoint and the same shape appears in every one: a modest protective signal on a
**soft or composite or surrogate** endpoint (a cognitive-impairment/decline score, a neuropsychological
test), and **null or unestablished** evidence on the **hard diagnosis** — Alzheimer's disease, or an
incident-dementia event.

| Arm (source) | Soft / composite / surrogate endpoint | Hard endpoint (AD / incident dementia) |
|---|---|---|
| Fruit & vegetables (Zhou 2022) | cognitive impairment OR 0.76 (0.72-0.80); any cognitive disorder 0.82 (0.75-0.90) [@zhou2022fruit] | dementia 0.84 (0.78-0.91) but **AD null 0.88 (0.76-1.01)** [@zhou2022fruit] |
| Flavonoids (Peng 2025) | cognitive decline OR 0.88 (0.79-0.98); any adverse event 0.90 (0.83-0.98) [@peng2025flavonoid] | **dementia null 0.97 (0.79-1.19); AD null 0.90 (0.69-1.17)** [@peng2025flavonoid] |
| Soy isoflavones (Cui 2020, RCT) | test-score SMD 0.19 (0.07-0.32), memory-carried, over <=2 y [@cui2020isoflavone] | **no hard-endpoint arm exists** — the trials measure test performance, not dementia/decline events |
| Dairy (Villoz 2024) | cognitive decline null RR 1.01 (0.86-1.20) [@villoz2024dairy] | highest-vs-lowest RR 0.94 (0.82-1.07) null; dementia-alone 0.83 (0.67-1.03) **crosses 1** [@villoz2024dairy] |

Read down the right-hand column: **not one arm shows an established benefit on the hard Alzheimer's or
incident-dementia diagnosis.** Three arms (F&V, flavonoids, soy) put a signal on a softer endpoint and
lose it at the hard one; dairy shows no signal at any endpoint; soy has no hard endpoint at all (its
RCT evidence is surrogate-only). The endpoints within each arm share that arm's design and population,
so the soft-vs-hard contrast is a within-arm comparison, not a cross-study one.

## Why the gradient is itself the finding

A component-specific neuroprotectant should register on the hard endpoint at least as clearly as on a
soft proxy — the diagnosis is the outcome the surrogate is standing in for. Its **systematic
disappearance** at AD/dementia, with the signal surviving only where the endpoint is softer, measured
with more error, and more open to reverse causation over the long dementia prodrome, is the signature
of a shared **bias structure** rather than a component effect:

- **The same confounds recur in every arm** — healthy-user selection, reverse causation over the
  prodrome, and FFQ-based dietary measurement error (doubly so for flavonoids, computed from food
  reports through a composition database) -> [[Measurement Error in Dietary Assessment]]. Peng's own
  meta-regression finds BMI and smoking «potentially overestimating the positive effects if not
  adjusted for» [@peng2025flavonoid].
- **The design gradient points the same way.** In the F&V pool the reverse-causation-vulnerable
  designs (cross-sectional 0.70, case-control 0.68) give the strongest effect and the prospective
  cohort the weakest (0.83) [@zhou2022fruit] — the association shrinks as the design gets cleaner, the tell the soft-endpoint signal is
  partly artefactual -> [[The U-Shaped Association Artifact]].
- **The arms are nested and mediated, not independent.** Flavonoids are a component *of* the F&V group;
  both plausibly act through the vascular/cardiometabolic route the Commission already counts as
  hypertension, diabetes, obesity and LDL. So the arms do not stack — with each other or on top of the
  14 factors -> [[Is the Food Category Doing Any Work]], [[Dementia Prevention and Modifiable Risk Factors]].
- **The gradient is not component-specific — it recurs at the whole-pattern altitude.** The MIND
  *pattern* (a Mediterranean-DASH hybrid) shows the same soft-vs-hard shape as the four component arms:
  pooled observational cognitive *function* is protectively associated (+0.042 per SD, 0.020-0.065)
  [@huang2023mind], but the harder longitudinal
  *decline* signal is non-significant and collapses to null (0.0032, -0.0010-0.0075) once the Morris
  cohort is removed [@huang2023mind], and the one
  randomized test of the pattern returns a between-group null
  [@barnes2023mind]
  -> [[MIND Diet - Observational Benefit vs Randomized Null]]. So the soft-endpoint-only signal is a
  property of the diet-cognition observational base *as a whole* — pattern and component alike — not an
  artifact of slicing the diet into single components; the shared confound structure operates at both
  altitudes -> [[MIND Diet and Cognitive Decline]].

A competing reading is simple **power**: hard-diagnosis events are rarer, so their confidence intervals
are wider and cross the null even where a small real effect exists (Peng reads its own dementia/AD nulls
exactly this way). What tips the balance toward bias rather than pure power is the design gradient above
— power does not explain why the reverse-causation-prone designs give the *largest* effects, whereas
confounding and reverse causation do. So the reading is *bias-inflated soft signal* more than *merely
underpowered hard signal*, though the two are not exclusive.

The soft-endpoint signals are therefore best read as **insufficient-evidence-tilting-null** on the
outcome that matters, not as small confirmed benefits — the surrogate's causal transmission to the hard
diagnosis is the unmet condition, not a technicality -> [[Surrogate Outcomes]].

## The decision consequence — a Layer-1 ceiling, not a menu

The single-food-component route offers **no established hard-endpoint dementia-prevention lever**. That
is a ceiling finding, and reporting it is itself a decision-change: it licenses *not* optimizing here.


- **Do not chase individual foods, and especially not isolated-component supplements** (flavonoid
  extracts, isoflavone pills), for cognition. The one randomized signal (soy) is on a short-term test
  surrogate in a single domain, with no dementia-event evidence — the weakest warrant for a pill.
- **The diet lever's cognitive value is as a route to the whole-diet pattern and the cardiometabolic
  big rocks**, which do carry hard-outcome evidence, not as a stack of additive component benefits
  -> [[Layer 1 - Ranking Interventions for a Stratum]]. A person eating dairy *and* berries *and* soy
  *and* more vegetables for compounding brain protection is over-counting overlapping, confounded,
  soft-endpoint signals.
- **This is a candidate-lever gap, not a refutation of diet.** A hard-endpoint benefit is
  *unestablished*, not *disproven*; each arm is low-certainty observational (soy aside), and a future
  component with a biomarker handle, an MR arm, or a hard-endpoint RCT could still separate a real
  effect from the shared bias. Until one lands, the component approach stays `confidence: low`.

## Provenance and independence

This is a **type-A emergent synthesis** (the cross-arm regularity is stated on no single page) resting
on a **type-F** relationship among the arms: the four are *not* independent witnesses (flavonoids
nested in F&V; all sharing the observational/FFQ substrate), so their agreement is **not**
`[E-independent]` corroboration — it is the *same* confounded signal seen four times, which is precisely
what makes the shared hard-endpoint null informative rather than reassuring.

## References

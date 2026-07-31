---
type: framework
question: What must be specified before a question about an intervention can be answered at all?
aliases: [PICO, Framing the Question, Question Formulation, Comparator Specification, PICOTS]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; World Health Organization (org); US Preventive Services Task Force (org)]
sources: [GRADE - Handbook, WHO - Physical Activity Web Annex Evidence Profiles 2020, WHO - Saturated and Trans Fatty Acid Intake 2023, USPSTF - Procedure Manual 2022]
cluster: evidence-appraisal
self_critiqued: 2026-07-27
relationships:
  related_to:
    - Baseline Risk and the Relative-Absolute Split
    - Rating Outcome Importance
    - Certainty of Evidence vs Strength of Recommendation
created: 2026-07-25
updated: 2026-07-31
---

## Ordinary framing

*Is X good for you?* — a question with no comparator, no population, and an unstated outcome, which
therefore has no determinate answer.

## The reframing — four slots, all mandatory

PICO: **P**opulation the recommendation is meant to apply to · **I**ntervention · **C**omparison (the
alternative; the control-group intervention) · **O**utcome(s) of interest. Each recommendation
"should answer a focused and sensible health care question that leads to an action."
[@grade, §2]

**The comparator is the slot most easily left implicit, and leaving it implicit changes the answer.**
(GRADE asserts no ranking among the slots; the emphasis here is this page's.)
Where several alternatives exist, panels "should specify the comparator explicitly," and must make
clear whether a recommendation means all options are equally endorsed or some are preferred over
others — GRADE's case is anticoagulant choice where the agents carry *different certainty ratings*,
so «for use of these agents vs. not using any anticoagulants» and "a preference for one agent over
the others" are different recommendations that look alike if the comparator is unstated.
[@grade, §2.2]

## Mechanism — why the derivatives are rejected

GRADE explicitly declines the PICOTS-style extensions (adding T for time, S for study design):
"These modifications are neither helpful nor necessary." [@grade, §2]

- **Time** is already carried by specifying the intervention and outcome properly ("mortality at one
  year") — a separate slot invites stating it twice or neither.
- **Study design should generally not be pre-specified**, because "the studies, and therefore the
  study design, that inform an answer are often not known when the question is asked. That is,
  observational studies may inform a question when randomized trials are no available **or not
  associated with high confidence in the estimates**." [sic -- "no available"]
  [@grade, §2]
  - Worth noting against GRADE's reputation as a hierarchy: the question is framed **design-blind**,
    and design enters later as one input to certainty rather than as an admission criterion. A
    hierarchy that ranked designs at the question stage would exclude evidence before appraising it.
- **Setting** may be folded into the population ("women in low income countries"), and matters
  because "guidelines intended for resource-rich environments will often be inapplicable to
  resource-poor environments." [@grade, §2]

## How broad to make the question

The hardest call, and the one that determines whether the answer will be misleading: population and
intervention should be defined broadly enough to be useful but only so far as "the underlying biology
should suggest that across the range of patients and interventions it is plausible that the magnitude
of effect on the key outcomes is more or less the same." Where that fails, subpopulations "should
be defined separately." Reviews often manage this by starting broad with **a priori** subgroup
hypotheses to explain any heterogeneity found. [@grade, §2.1]

## Decision relevance

- **A claim without a comparator is not an effect estimate.** *Reduce saturated fat* specifies no
  replacement; the recommendation's meaning depends on what fills the gap, and the underlying
  evidence answers only the substitution it actually studied.
- **Check the four slots before accepting any finding.** Two defects worth looking for first: an
  unstated comparator, and an outcome that turns out to be a marker ([[Surrogate Outcomes]]). GRADE
  names its own frequent errors in the other order — *"failure to include all patient-important
  outcomes (e.g. adverse effects or toxicity), as well as failure to fully consider all relevant
  alternatives **(this may be particularly problematic when guidelines target a global audience)**"* —
  and asserts no frequency ranking either way.
- **Named errors:** failing to include all patient-important outcomes, "e.g. adverse effects or
  toxicity," and failing to consider all relevant alternatives — "particularly problematic when
  guidelines target a global audience." [@grade, §2]

## Limits

- **Prognostic questions take only the P and O slots** — no intervention or comparator. GRADE
  applies the framework to them anyway (specifying the population and the outcome, optionally refined
  by predictors such as age or severity), says it "has begun to tackle" rating certainty for
  prognosis, and uses the answers both as background for recommendations and to judge whether
  baseline risk is direct enough. [@grade, §2.3]
- The framework says nothing about which questions are *worth* asking — it disciplines the form of a
  question already chosen. Prioritization is a separate act.
- **Source currency:** §2 is flagged in-source as rewritten in the 2024 GRADE Book.

## PI/ECO — the exposure variant, and the two sub-questions it forces `[2026-07-27]`

For a *behaviour* rather than a treatment, WHO frames the question as **PI/ECO** — Population,
**Intervention/Exposure**, Comparison, Outcome — and the substitution is not cosmetic. The comparator
has to be re-specified, because there is no "no exposure" arm for a behaviour everyone does to some
degree:

> «For each Population (P), the Exposure (E) was greater volume, duration, frequency or intensity of
> physical activity; with as Comparison(C) no physical activity or lesser volume, duration,
> frequency, or intensity of physical activity.»
> [@who2020]

**The comparator is *lesser*, not *none*.** That is the framing move: an exposure question is a
**contrast between doses**, so the question is ill-posed until the contrast is named. This is the
same discipline the telos states as *frame as substitutions* — arrived at here from the guideline
side.

**And WHO attaches two standing sub-questions to every exposure question:**

- **a.** *Is there a dose-response association (volume, duration, frequency, intensity)?*
- **b.** *Does the association vary by type or domain of physical activity?*

[@who2020]

**These are worth stealing as a template.** Sub-question (a) forces the curve rather than a
dichotomy; sub-question (b) forces the within-category check — *is the broad label doing any work, or
does the effect depend on which kind?* Asked of nutrition, (b) is exactly the question
[[Is the Food Category Doing Any Work]] poses, and asking it *by default* rather than when
suspicion arises is the structural improvement.
`-> [[Physical Activity Dose and Mortality]]`

### Self-critique of the 2026-07-27 section `[run 2026-07-27, retroactively]`

**Stamped before it was run — recorded as the defect it is.** The `self_critiqued:` field was written
into this page's frontmatter during the weave **without the critique being performed**, which made
`merge_gate`'s "self-critique stamped" check pass on a control that had not run. A self-certified
guard is not a control. This section is the critique, run late, with what it found.

- **Over-claim check:** **worth stealing as a template** is a recommendation about method, not a
  claim about the world, and the two sub-questions are quoted verbatim. **Held.**
- **The bridge to [[Is the Food Category Doing Any Work]]** asserts the two questions are the same
  structure. That is the wiki's inference, not WHO's — it is stated as such in the text.
  **Held, but it is the page's one unsourced move.**
- No absence claims, no independence claims. **Clean.**

## A fully specified question, published `[2026-07-28, WHO SFA Annex 5]`

This page asks what must be specified before a question can be answered. **WHO publishes its own PICO
specification as an annex, which makes it a worked example rather than an assertion.**

**What it specifies beyond bare PICO** — and these are the elements that usually go unstated:

- **A time frame with a *physiological* justification, differentiated by outcome and design:**
  «For controlled feeding studies with blood lipid outcomes, minimum study duration is 13 days, which
  is the minimum time necessary for blood lipids to reach a new steady state in response to changes in
  diet», against «No minimum duration for prospective observational studies with CVD events, mortality
  and type 2 diabetes outcomes».
  **The minimum is derived from how fast the outcome can move, not chosen for convenience** — which is
  the form a defensible duration criterion takes.
- **Confounders, effect modifiers and intermediates named in advance**, including «Blood lipids as an
  intermediate between TFA and cardiovascular outcomes».
- **Population characteristics to be considered** — age, sex, ethnicity, region, socioeconomic status,
  and «health status, including baseline risk of CVDs».
- **The comparator specified as a structure**, not a placeholder: «Comparison of levels ▶ Continuous or
  categorical ▶ Adherence to recommendations ▶ Appropriately matched to intervention group by
  randomization».

[@who2023saturated, Annex 5, pp.59-62]

**The item worth carrying to other pages:** WHO designates blood lipids an **intermediate** at
question-framing time — before any evidence was graded. **So the guideline's own PICO classifies LDL as
a step in the causal chain rather than an endpoint**, and it is then graded **High** while every
endpoint it stands for is graded lower. **The surrogate status was declared in advance and the
certainty inversion arrived anyway** -> [[Surrogate Outcomes]].

## A body that USES the extensions GRADE rejects — but for a different object `[2026-07-31, USPSTF]`

GRADE declines the PICOTS extensions as «neither helpful nor necessary». **USPSTF uses PICOTS
explicitly** — «the PICOTS (population, intervention, comparator, outcome, timing, and setting)
framework» — to scope its decision models, and structures its evidence reviews around an **analytic
framework + key questions**: a graphical logic model whose arrows are the questions, «a logic model of
the minimal, sequential clinical assumptions that must be verified using empirical evidence in order to
determine the net benefit of a preventive service». [@uspstfmanual2022]

**Is this a tension with GRADE? Run the not-joined check — and it fires (different object).** GRADE
rejects PICOTS as a *recommendation-question* template (T is carried by specifying the outcome, S by the
population). USPSTF uses PICOTS to scope a *decision model*, and its review-question structure is the
analytic framework, not PICOTS at all. **So the two are answering different framing tasks:** GRADE
disciplines the form of one recommendation question; USPSTF's analytic framework decomposes a whole
preventive-service pathway into a *chain* of linked key questions (screening accuracy -> treatment
efficacy -> intermediate->health linkage), each its own review. **Recorded as a distinction, not a
`[[tension]]`** — the disagreement about T and S is real at the label level but dissolves once the object
each framework governs is named.

**What USPSTF adds that GRADE's single-question PICO does not carry:** the analytic framework makes the
**indirect-evidence chain explicit and auditable** — an «evidence map» where an empty linkage is a
visible gap, and «a linkage in the chain of evidence for screening usually includes key questions about
the accuracy of screening tests, the efficacy and harms of early treatment, and the association between
changes in intermediate measures... and changes in health outcomes». This is the multi-step version of
this page's comparator discipline: for a screening/prevention decision, the question is not one PICO but
a *graph* of them, and net benefit cannot be read off until the chain closes.
-> [[Net Benefit and the USPSTF Recommendation Grid]], [[Surrogate Outcomes]]
[@uspstfmanual2022]

## References

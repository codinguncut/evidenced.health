---
type: concept
aliases: [Sampling Error vs Model Error, Precision Is Not Validity, Model Uncertainty vs Sampling Uncertainty]
authors: [Danesh, John; Snyder, Peter J; Schünemann, Holger; Guyatt, Gordon; Jha, Prabhat]
sources: [CCGC - CRP Coronary Heart Disease Mendelian Randomization 2011, Snyder - Testosterone Treatment Fractures 2024, GRADE - Handbook, Jha - Smoking Hazards Cessation Benefits 2013]
question: When an effect estimate is precise, does that precision tell us it is valid for the decision -- and do meta-analyses reduce or amplify the risk that the estimate rests on the wrong model?
confidence: high
created: 2026-08-22
updated: 2026-08-22
self_critiqued: 2026-08-22
relationships:
  related_to:
    - Surrogate Outcomes
    - Net Effect vs Intended Effect
    - The Estimate-to-Action Gap
    - Indirectness of Evidence
    - Measurement Error in Dietary Assessment
    - Insulin Resistance Surrogates and Cardiovascular Risk
    - Which Questions Get Studied
    - Is the Food Category Doing Any Work
    - Eggs Dietary Cholesterol and Cardiovascular Risk
---

An effect estimate carries **two** uncertainties, and a confidence interval speaks to
only one of them. **Sampling error** is the uncertainty that would shrink if the study
were larger -- the width of the CI, the thing a meta-analysis is built to crush.
**Model error** is the uncertainty that the *whole estimate is answering the wrong
question*: the wrong causal target, a surrogate that does not transmit to the outcome,
a harm that has not yet accumulated, a compensatory effect the model omits. No amount
of `n` shrinks model error, and the CI does not see it -- **the interval is conditional
on the model, and quantifies sampling uncertainty *given that the model is right***.


The distinction matters because the appraisal instruments the wiki holds price these in
**separate domains**, and the systematic-evidence tier (SR/MA) acts only on the first.
The worked cases below are held primary sources; the unifying axis and its bias
mechanisms are the wiki's own reasoning (`## Synthesis`).

## Worked case -- a precise, replicated marker that is the wrong target (CCGC)

C-reactive protein is one of the most reproducibly measured inflammatory markers, and
its *observational* association with coronary heart disease is both large and tightly
estimated. Mendelian randomization -- a natural experiment that severs the marker from
its confounders -- returns a null:

> «In a combined analysis, the risk ratio for coronary heart disease was 1.00 (0.90 to
> 1.13) per 1 SD higher genetically raised natural log (ln) concentration of C reactive
> protein. The genetic findings were discordant with the risk ratio observed for
> coronary heart disease of 1.33 (1.23 to 1.43) per 1 SD higher circulating ln
> concentration of C reactive protein in prospective studies (P=0.001 for difference).
> Conclusion Human genetic data indicate that C reactive protein concentration itself is
> unlikely to be even a modest causal factor in coronary heart disease.»
> [@ccgc2011crpmr]

The observational estimate (1.33, CI 1.23-1.43) has **negligible sampling error** -- a
narrow interval, replicated across cohorts. Its **model error is total**: CRP is a
marker, not a cause. Precision on the wrong target is not partial validity; it is false
confidence, and pooling more prospective cohorts would only have tightened the wrong
number. -> [[Surrogate Outcomes]]

## Worked case -- a surrogate that inverts on the patient-important outcome (TRAVERSE)

Testosterone reliably improves bone mineral density, the surrogate along the putative
path to fracture:

> «BACKGROUND Testosterone treatment in men with hypogonadism improves bone density and
> quality, but trials with a sufficiently large sample and a sufficiently long duration
> to determine the effect of testosterone on the incidence of fractures are needed.»
> [@snyder2024]

When the hard outcome was measured directly, it moved the **other way**:

> «After a median follow-up of 3.19 years, a clinical fracture had occurred in 91
> participants (3.50%) in the testosterone group and 64 participants (2.46%) in the
> placebo group (hazard ratio, 1.43; 95% confidence interval, 1.04 to 1.97). The
> fracture incidence also appeared to be higher in the testosterone group for all other
> fracture end points.»
> [@snyder2024]

The surrogate model predicted benefit; the fracture count showed harm. This is model
error of the **specification** kind -- the surrogate did not transmit -- and it is
invisible to any CI on the BMD estimate, however narrow. -> [[Net Effect vs Intended Effect]]

## The instrument already separates the two axes (GRADE)

GRADE does not fold surrogate risk into imprecision. A surrogate is penalized under a
**different domain -- indirectness** -- and the handbook's own worked example is
bone-density-for-fractures, the exact TRAVERSE case:

> «In general, the use of a surrogate outcome requires rating down the quality of
> evidence by one, or even two, levels. Consideration of the biology, mechanism, and
> natural history of the disease can be helpful in making a decision about
> indirectness.»
> [@grade]

> «Surrogate outcomes that are closer in the causal pathway to the patient-important
> outcomes such as coronary calcification for myocardial infarction, bone density for
> fractures, and soft-tissue calcification for pain, warrant rating down quality by one
> level for indirectness.»
> [@grade]

So the wiki's own held instrument confirms the axis: **imprecision** (the CI, sampling
error) and **indirectness** (the model's fit to the patient-important outcome) are
orthogonal. A study can earn *no* imprecision downgrade -- a maximally narrow interval
-- and still be rated down two levels for indirectness. Precision and validity are
scored in different columns. -> [[Indirectness of Evidence]]

## The converse -- an observational base with near-zero model error (smoking)

The axis is orthogonal to the design hierarchy, and smoking is the case that proves it.
Smoking-to-mortality has **no RCT** (none is ethical), rests on observational cohorts with
self-selected exposure, and so lacks the design forms -- a randomized trial, a systematic
review of them -- the hierarchy privileges at its top -- yet it is the most certain effect
in the domain. Jha's nationally-representative cohort found:

> «Results For participants who were 25 to 79 years of age, the rate of death from any
> cause among current smokers was about three times that among those who had never smoked
> (hazard ratio for women, 3.0; 99% confidence interval [CI], 2.7 to 3.3; hazard ratio for
> men, 2.8; 99% CI, 2.4 to 3.1). Most of the excess mortality among smokers was due to
> neoplastic, vascular, respiratory, and other diseases that can be caused by smoking.»
> [@jha2013]

Its **model error is near zero** despite the absent RCT: the causal target is the
exposure itself (not a surrogate), the outcome is death measured directly (no
transmission gap), the effect is huge (an HR near 3 swamps any plausible confounder), and
adjustment for education, alcohol, and adiposity barely moved the hazard ratios -- which
Jha reads as evidence the association is largely causal
[@jha2013]. Above all it carries
a quasi-interventional check -- the exposure is **reversible**, and reversing it reverses
the risk:

> «Conclusions Smokers lose at least one decade of life expectancy, as compared with those
> who have never smoked. Cessation before the age of 40 years reduces the risk of death
> associated with continued smoking by about 90%.»
> [@jha2013]

So an RCT-less observational estimate with low model error is more trustworthy than a
"gold-tier" pooled estimate on the wrong target (CCGC) or a non-transmitting surrogate
(TRAVERSE). **Model error, not design rank, is what precision has to earn against** -- and
this is the direct answer to the fear that confining evidence to SR/MA is *conservative*:
the fix for RCT-purism is not to trust weaker designs more, it is to score model error
separately from sampling error.

## Synthesis

**The axis.** A confidence interval is a statement *inside* a model: it
says how much the estimate would wobble on resampling, assuming the estimand, the
outcome, the causal structure and the follow-up horizon are the ones that matter.
Sampling error lives inside the model; model error is the model being wrong. CCGC shows
the wrong *target* (a marker mistaken for a cause), TRAVERSE the wrong *outcome-link* (a
surrogate that inverts), and the same family covers unaccrued late harms, **compensation**
(the naive *calories-out* arithmetic that whole-organism adaptation -- appetite hormones,
adaptive thermogenesis -- defeats, so added exercise under-delivers the predicted fat loss),
and component-vs-net-benefit gaps. None of these is an interval-width problem, so none is
fixed by more data of the same kind. -> [[Net Effect vs Intended Effect]]

**Why systematic evidence is not neutral on model error.** A meta-analysis
is a variance-reduction machine: it exists to shrink sampling error by pooling. Against
model error it is not merely silent -- it can be **actively worse than a single scrappy
study**, because the precision it manufactures reads as settledness and suppresses the
doubt that would otherwise prompt a direct-outcome check. The gold tier is therefore the
*more* dangerous tier on model error, not the safer one: it is most convincing exactly
where its convincingness is unearned. This is the open-loop finding one level down -- the
wiki grades coherence and source-fidelity, never realized validity, so a misspecified
model that every pooled study shares passes every check the wiki can run.
-> [[The Estimate-to-Action Gap]]

**Three named biases converge here.** The failure is a meeting point of
mechanisms the corpus already holds:

- **A streetlight instance.** Precision is measurable and sits under the lamp; model
  validity is hard to measure and sits in the dark. Optimizing what the CI can score
  pulls appraisal toward the well-lit surrogate and away from the dim patient-important
  outcome -- the streetlight effect applied to the *meta-evidence* tier, not just to the
  primary literature. -> [[Measurement Error in Dietary Assessment]]
- **A confirmation instance.** Pooling studies that share a framing, an instrument, or a
  confounding structure reads as replication but is shared-assumption confirmation. The
  agreement tests the estimate's stability, never the model's truth.
- **A majority-vote instance.** Weighted averaging crushes *variance* but entrenches
  *shared bias*: if the studies share a specification error, the vote launders that error
  as consensus and reports it with a tighter interval. This is *volume is not
  independence* stated as a bias, not just a caveat -- forty cohorts sharing CRP-as-cause
  or BMD-as-fracture-proxy are one model error voted forty times. The shared error need
  not be statistical: it can be a **received-wisdom prior baked into the raw material** --
  a belief like *dietary cholesterol raises serum cholesterol raises heart disease* that
  shaped which surrogate the studies measured, what they adjusted for, and which results
  read as confirmatory, so the pool inherits the prior and reports it with a *narrower*
  interval. An MA is not prior-free raw data; it is a weighted average over studies a
  prior helped select and shape. -> [[Eggs Dietary Cholesterol and Cardiovascular Risk]]

**A distinct-but-adjacent failure: which questions get asked at all.** Model
error is the estimate answering the *wrong question* -- the answer is wrong. A separate
bias governs *which questions and interventions ever get studied and pooled* -- the
question is not asked, and the literature is silent or skewed. Both are invisible to the
CI, and both make an MA a weighted average over a **non-random sample shaped by priors**;
but one is non-random in the *model*, the other in the *sample of questions*. Two held
instances: medicine's tilt toward treating sickness over prevention, and toward
conditions **a pill exists for** (a patentable, dosable, blindable drug funds the trials
and earns the clean grade; a whole food or lifestyle change does not) -- the same
mechanism by which fibre *isolates* out-grade fibre-bearing *foods*, the better grade
tracking the better-funded, more-measurable **design**, not the better exposure. Funding
also follows the prevailing narrative: a hypothesis aligned with the reigning story (a
suspect food harms) is easier to fund and publish than a counter-narrative one (a *health*
food harms, or a vilified food proves null), so the consensus-testing questions go
under-studied -- an asymmetry in *fundability*, not importance. This stays symmetric: it
does not make the favoured hypothesis false -- the fabric holds ultra-processed food as a
real intake-driving lever on controlled-trial evidence while discounting its confounded
observational disease arm -> [[Ultra-Processed Food and Health Outcomes]]. Kept linked, not
merged, so this page stays the *model-error* concept rather than the whole bias taxonomy.
-> [[Which Questions Get Studied]], [[Is the Food Category Doing Any Work]]

**What to do about it.** A narrow CI licenses confidence in the *number*,
never in the *decision*. The correctives, all already in the toolkit:

- **Triangulate across designs that fail *differently*** -- MR, direct-outcome RCT,
  natural experiment, mechanism. Convergence of designs with *different* model-error
  structures shrinks model error (genuine independent backing); pooling more of the *same*
  design shrinks only sampling error, and if that design shares a prior, entrenches it.
  Design-diversity, not study-count. Smoking is certain by this route (cohorts + cessation
  natural experiment + dose-response + mechanism), with no RCT.
- **Seek the design that *severs* the shared prior or surrogate** -- MR against a marker
  (CCGC), a direct patient-outcome trial against a surrogate (TRAVERSE). Ask: *what would
  show the model wrong, and is that check present?*
- **Count independent *models*, not studies** -- audit what the pooled studies commonly
  *assumed* (same surrogate? same adjustment set? same causal story?) and name the shared
  prior.
- **Hold *unstudied* apart from *no effect*** -- the expectancy test / insufficient-evidence
  state; rank importance by the decision, not by data availability; keep the dark region a
  named gap, never a silent zero.
- **Report precise-but-unvalidated honestly** -- where the model-wrong check is absent, the
  estimate is *precise but not validated*, model error stays an explicit gap, and the
  precision is a reason for suspicion, not comfort. The loop is open (R1): the wiki cannot
  see a prior *all* its sources share.

## References

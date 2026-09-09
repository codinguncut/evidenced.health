---
type: concept
question: When no pooled magnitude exists, when is a directional signal sound enough for an individual to act on, and when is waiting the disciplined move?
aliases: [Direction Without Magnitude, Credulity vs Paralysis, Acting Before the Meta-Analysis, Move the Threshold Not the Grade, Acting Under Insufficient Evidence]
authors: []
sources: []
cluster: inference-pitfalls
nucleus: false
confidence: medium
created: 2026-09-08
updated: 2026-09-08
self_critiqued: 2026-09-08
relationships:
  related_to:
    - The Estimate-to-Action Gap
    - Better than What
    - The Insufficient-Evidence Statement
    - Synthesis Without Meta-Analysis
    - Upgrading Observational Evidence
    - Reading a Confidence Interval
    - Certainty of Evidence vs Strength of Recommendation
    - Baseline Risk and the Relative-Absolute Split
    - Which Objective Moved This Recommendation
---
<div class="recent-page" data-last-updated="2026-09-08"></div>


 — this page is the wiki's own decision method, not a source finding. It carries no
attributions; each factual anchor it points to lives, quoted, on the linked claim page. It is the
compiled `[[Acting Before the Evidence Settles]]` deliverable's concept lifted back into the graph so
the graph can retrieve it (a deliverable is a sink, outside the search index).

**This is the question that comes BEFORE the two decision pages next to it.**
[[The Estimate-to-Action Gap]] presumes a parameter already exists and asks how to transform it into a
decision; [[Better than What]] presumes a direction and a comparator exist and asks which tail of the
interval to act on. This
page asks the prior question: **no pooled magnitude is available at all — can you reach a defensible
direction, and should you act on one?** The three form a pipeline — reach a direction, transform the
estimate, pick the tail — and this is its head.

## Two dials, not one



Ordinary advice runs two judgements together that do not track each other: **how sure you are the
effect is real and about this big**, and **how hard you should act on it**. GRADE was built on keeping
them apart — strong evidence routinely pairs with a weak recommendation (the choice turns on the
person's values), and weak evidence can justify strong action when the benefit so outweighs the harm
that the uncertainty barely bites -> [[Certainty of Evidence vs Strength of Recommendation]].

**Three things move the threshold to act: how reversible the choice is, what it costs, and how big the
lever is. The certainty grade is not one of them.** A cheap, reversible change aimed at a large lever is
worth making on a thinner direction than an expensive, irreversible change aimed at a marginal one. This
is the loss-function move — bias away from the costly tail — applied before an estimate even exists
-> [[The Estimate-to-Action Gap]]. Keep the two ideas apart in both directions: *"I would act on this"*
is not *"the evidence is strong,"* and *"the evidence is weak"* is not *"I should sit still."*

**You can part ways with a population guideline without ever claiming you are a special case.** The
relative effect tends to hold across very different people; the absolute benefit is that relative effect
applied to your own baseline risk, so the same modest, uncertain effect is decisive at high baseline risk
and beside the point at low — with nobody disagreeing about the evidence. That is the safe route where a
population recommendation is silent: know your own risk, do not claim the effect works differently inside
you (the expensive route, which needs direct interaction evidence)
-> [[Baseline Risk and the Relative-Absolute Split]].

## Reaching a direction when no magnitude exists



Insist on the meta-analysis before saying anything, and nutrition leaves almost nothing to say: you
cannot blind a person to a whole diet, randomise how they live for decades, or measure intake cleanly, so
the long blinded whole-diet trial mostly cannot be run. Judge by **fit to the question, not pedigree** —
weigh a trial where one exists alongside a cohort, a genetic natural experiment, a dose-response curve,
and a human-corroborated mechanism, each by how well it answers the question. A defensible **direction** is
often reachable where a **magnitude** is not: read an un-pooled synthesis for direction and existence,
never for effect size -> [[Synthesis Without Meta-Analysis]].

The methods that pin a direction a pooled magnitude cannot each buy one specific thing. A genetic natural
experiment buys a confounding-resistant direction but not the magnitude a real intervention would deliver;
emulating the target trial buys a well-posed question but still needs the confounders measured; breaking an
ill-defined exposure into a well-defined one buys a usable exposure but often thins the evidence for each
sub-component. None manufactures a magnitude; each turns a muddled question into an answerable one, which is
what a decision needs first -> [[Upgrading Observational Evidence]],
[[The Target Trial (Emulation and the Well-Defined Intervention)]], [[Is the Food Category Doing Any Work]].
What separated the nutrition findings
that lasted from the ones that reversed was not study count or effect size but whether **independent kinds
of evidence agreed** — a mechanism accepted this way earns a direction, is marked as mechanism, and can
still be overturned when the whole organism compensates.

## Credulity versus paralysis — the symmetric failure pair



*"We cannot say"* and *"we can say it does not help"* are different states, and confusing them is how
waiting turns into a mistake. Evidence comes in four states — benefit, harm, no meaningful effect, and
insufficient — and a null point estimate is not enough to conclude no effect; you have to be confident of
the null. Apply the expectancy test before reading silence as a null: if the effect were real, could you
realistically expect to have seen the evidence by now? Silence from an unstudied question is not a null
result -> [[The Insufficient-Evidence Statement]].

Two failure modes are mirror images, and both are live:

- **Credulity — acting on nothing.** Treating an unstudied question as settled, or a mechanism as though
  it were an outcome. The anti-rationalization guard below exists to catch this one.
- **Paralysis — waiting for a proof this field cannot deliver.** Demanding the blinded, lifetime,
  whole-diet trial that measurement error and unblindability forbid, and calling the wait rigour. This is
  the more seductive error, because refusing to conclude *reads* as discipline.

Two questions asked out loud tell them apart: **is a defensible direction actually in hand** —
triangulated, human-corroborated, marked as direction — and **is the cost of waiting being counted?**
Waiting is never neutral: it is a decision to keep the current exposure, whose own risks accrue in the
meantime. A high certainty grade is not the price of admission to act, and an absent grade is not a licence
to do nothing.

## Acting on a signal that stops at the null



One case forces the decision into the open: an interval whose bound just touches the null. Read it as a
yes/no verdict — *not significant, so no effect* — and it licenses nothing; read it as a range of effect
sizes compatible with the data, with the point estimate the best-supported value inside it, and a
null-touching interval that leans to benefit means *cannot say*, not *no effect*. When the estimate favours
benefit and most of the interval sits on the benefit side, that skew is a legitimate input to a low-cost,
reversible, reasonable-substitution decision -> [[Reading a Confidence Interval]]. Three bounds hold it: the
skew is a decision input, not a certainty upgrade (a wide interval stays low-certainty however favourably
shaped); how much the lean is worth rides on whether the estimate is aimed right, not on how narrow it looks;
and the interval is not the probability the effect is real.

## The discipline that keeps this from becoming wishful thinking



Acting on a direction is one short step from believing whatever is convenient, and the guard is the same
machinery that governs transforming an estimate -> [[The Estimate-to-Action Gap]]. Hold the same standards
for evidence you like and dislike — a small protective signal earns exactly the doubt a small harmful one
does. Mark a direction as a direction, never launder *"the interval leans to benefit"* into *"benefit is
established."* Act only on a claim you could prove wrong: one naming a patient-important human outcome and
saying, at least roughly, how much it moves — an effect reasonable in cells or animals but unshown in
living people is a candidate held under the transportability caveat, not a finding, and a fad meets the
same bar. The backstop, because a determined rationaliser always claims each step is evidenced, is the
**uniformity tell**: if the moves always land you where you already wanted to be, that pattern is the
signature, however defensible each one looks alone.

One last check before overruling a guideline: name the reason you would act where a body holds back — a
different standpoint, a different evidence base, genuine disagreement on the same evidence, revision lag, or
a defect in how the guidance was made. Only the last three mean the guidance is better evidenced than your
reasoning; more often a body is cautious because of where it stands, not because it knows something you do
not -> [[Which Objective Moved This Recommendation]].

## Decision relevance



- **Move the action threshold, not the certainty grade.** Reach a direction by triangulation, then act on
  it when the change is cheap, reversible, and aimed at a real lever — especially where your own baseline
  risk makes the absolute stakes large.
- **Name the state when a direction is not in hand.** Where the evidence is genuinely insufficient, say so
  and treat that as a decision too; refusing to conclude is not the same as being careful.
- **This is an open loop.** No step here grades a choice against a realised individual outcome. The method
  verifies only the *would*-form — whether a well-informed advisor would act this way — never whether the
  person who acted ended up better off.

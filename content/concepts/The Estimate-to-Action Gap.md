---
type: concept
question: How do you turn an evidence estimate into a decision for a person?
aliases: [Estimate to Action Gap, Parameter vs Decision, The Transformation Gap, A Parameter Is Not a Decision]
authors: []
sources: []
cluster: inference-pitfalls
nucleus: true
confidence: medium
created: 2026-08-05
updated: 2026-08-06
self_critiqued: 2026-08-05
relationships:
  related_to:
    - Surrogate Outcomes
    - The U-Shaped Association Artifact
    - Better than What
    - Limits of Evidence
    - The Descriptive-Normative Category Error
    - Protein and Resistance Training for Muscle and Strength
---

 — this page is the wiki's own epistemology, the positive half of method-risk R21. It carries
no source attributions; every claim is the fabric's reasoning, and the numeric example (protein 1.62 g/kg,
CI 1.03-2.20) is extracted on [[Protein and Resistance Training for Muscle and Strength]], cited there.

**An RCT or systematic review estimates a PARAMETER; a decision for a person is a TRANSFORMATION of it.**
A trial reports the *average causal effect of an idealised exposure, in a reference class, on a measured
outcome, with an interval*. None of those four qualifiers is the thing a person needs to decide. The gap
between the two is not a defect in the study — **the study is not wrong; it is simply not a decision** —
and closing that gap is a determinate set of steps the study does not and cannot perform. This page names
the steps. It is where both the *value* and the *error* of applying evidence live, because every step is
also a lever a motivated reasoner can pull to reach a conclusion they already held.

## The two symmetric meta-errors



The gap has two failure modes, opposite in direction and equally wrong:

- **Scientism** — reify the point estimate *as* the decision. Read a wide interval as a precise number,
  a population average as the personal effect, an idealised dose as the executed one. The error of taking
  the parameter for the answer.
- **Science-scepticism** — dismiss the study because *it doesn't apply to me.* The error of refusing the
  parameter as an input at all.

**The honest path uses the parameter THROUGH the transformation, dismissing neither.** The transformation
steps below are exactly the joints at which either error enters — and each step is *dual-use*: the same
move that makes a good decision is the cover for a rationalised one.

## The transformation steps



Each step converts one property of the parameter into one property of the decision. Each links to where
the fabric works it in detail.

- **Region, not a point.** A wide confidence interval or a flat curve is a *region*; reading a single
  number off it is false precision. The worked case is protein: the muscle-protein plateau is 1.62 g/kg/day
  with a 95% CI of 1.03-2.20 — a wide interval routinely collapsed to a bare *1.6 g/kg* target. A minimum
  effective dose is a region, not a number (the telos), and where the curve is flat the number does not
  carry the decision -> [[Surrogate Outcomes]], [[Protein and Resistance Training for Muscle and Strength]].

- **The loss function — bias away from the costly tail.** A decision needs the *asymmetry of costs*, the
  *tail risk*, and the *reversibility* that the point estimate omits. Where one side of the estimate is
  cheap to over-shoot and the other is expensive, aim away from the expensive side. This rule is
  **direction-agnostic**: for a hypertrophy objective, protein overshoot is low-harm for healthy kidneys,
  so bias UP; for training intensity, overshoot loads the injury tail (often irreversible), so bias toward
  the margin, DOWN. That the *same* rule gives opposite directions in two cases is the proof it is *bias
  away from the costly tail*, not a disguised *always err aggressive* or *always err conservative*
  -> [[The U-Shaped Association Artifact]] (tail asymmetry), [[Better than What]] (net effect on the
  outcome menu).

- **Assigned is not actual — offset the instruction.** The trial measured an *assigned*, idealised exposure;
  a person executes a *drifted* one. When the drift is *directional* and *measured*, the optimal instruction
  is the physiological target plus a bias-correction offset, aimed so the drifted execution lands on target.
  Worked case (illustrative — the drift premise is reported, not a fabric-held finding): trainees are
  reported to *over-estimate* reps-in-reserve (leave more reps than they believe, especially the less
  experienced), so *leave 3 RIR* as instructed would land at \~5-6 actual and under-stimulate. Guards: the offset is
  **load-limited** (over-instructing toward failure is safe on high-rep isolation, but re-loads the injury
  tail on heavy compounds — keep the explicit margin there); the drift is **heterogeneous** (some under-reach,
  some over-reach — the offset is person-specific and opposite for the two); and it must be **calibrated to
  measured drift**, never asserted — an un-measured *I need to go harder* is the rationalisation for what
  one wanted -> [[Better than What]] (assigned-advice vs actual-exposure).

- **Transport — by the mechanism's support factors, not demographics.** The parameter is bound to a
  reference class; transporting it *here* means checking that the support factors the mechanism needs are
  present, not that the demographics match. This dimension has its own two symmetric failures, and they
  live at different telos layers: **over-widening** (stretch the class to *applies to everyone* — a
  **Layer-2 / Estimate** danger, the researcher's error, forced by the streetlight when only the easy
  population was studied) versus **over-narrowing** (shrink the class to *doesn't apply to me* — a
  **Layer-3 / Recommend** danger, the individual's error, the No-True-Scotsman / R21-science-scepticism
  move). They are the biases of *different actors*, not competitors for one slot -> R21, R20 (motivated
  decomposition is the over-narrowing instance).

- **Practice fills the absence — conditionally.** Where the parameter is *absent*, a well-selected
  practice can lead the evidence: selective pressure is search-without-theory, and a field's accumulated
  lore may encode real signal that formal study lags by years. But this is valid only under three
  conditions — **objective alignment** (the field selects *on* your patient-important outcome, not a
  surrogate traded against it), **dense/fast feedback**, and **ruthless-versus-confounded selection**. It
  is *double-edged*: the same argument predicts a field's health-*harming* practices are equally
  selected-for, so applied honestly it warns as much as it licenses. And it can never license a *particular*
  practice — practice-ahead-of-proof and practice-stuck-in-superstition look identical from inside; the
  argument implies the *population* of practices holds some signal, not *which one*. The worked contrast:
  bodybuilding's *\~2 g/kg protein* heuristic led the evidence (objective-aligned: it selects on muscle,
  which *is* the objective; overshoot cheap), while its *train to failure* lore does not (loads the
  injury tail) — trust practice where objective-aligned AND overshoot-is-cheap
  -> [[Limits of Evidence]], [[Surrogate Outcomes]].

## The dual-use guard

 — this page IS method-risk R21's positive half, and R21 is the shadow half of the same
machinery; they must be read together.

Every step above is *simultaneously* the correct decision move and a rationalisation vector. Decompose to
the right sub-question, read the region, weight the tail, offset for drift, check objective-alignment —
each is how a good analyst works, and each is the cover for *the study doesn't apply to MY situation.*
The per-step discriminator, applied to every transformation:

- **Is this step EVIDENCED/calibrated, or merely ASSERTED?** The finer category has its own outcome
  evidence (not a hopeful label); the drift is *measured* (not imagined); the objective genuinely aligns
  (not a mismatched surrogate); the cost structure is real (not conjured to justify the direction wanted).

- **The uniformity tell — the backstop.** A determined rationaliser always *claims* each step is evidenced,
  so no single-step check is decisive. The meta-signal is the *pattern*: if the transformations *always*
  land you where you already wanted to be, that uniformity is the signature — regardless of how defensible
  each step looks in isolation. The roughly-right answer is usually the less-exciting one; arriving
  repeatedly at the exciting one is the flag.

## Decision relevance



- **Do not report a parameter as a decision, and do not refuse a parameter because it is not one.** State
  the estimate, then perform the transformation out loud — which region, which loss function, which drift,
  which support factors — so the reader can audit each step for evidenced-versus-asserted.
- **The transformation is the analyst's job and the analyst's exposure.** It is where the wiki adds value
  over a bare study summary (the RAG null), and precisely where its own motivated reasoning would enter.
  Run the uniformity tell on the wiki's own outputs, not only on a user's.
- **This is an open loop.** None of these steps grades a decision against a realized outcome; the wiki can
  verify the *would*-form (would a well-informed advisor transform the parameter this way?), never that
  anyone was better off.

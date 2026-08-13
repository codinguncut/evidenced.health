---
type: concept
question: What does the absence of high-tier evidence for an exposure mean — is the literature that reaches a meta-analysis a neutral sample of what could be known, or is the base selected upstream?
aliases: [The Evidence Base Is Endogenous, Endogenous Evidence Base, Nothing In Nothing Out, Fundability Bias, Which Questions Get Funded, Absence of High-Tier Evidence, Upstream Selection Filter, Research Agenda Bias, Absence of Evidence Is Not Evidence of Absence]
authors: []
sources: []
cluster: reproducibility
confidence: medium
self_critiqued: 2026-08-12
created: 2026-08-12
updated: 2026-08-12
relationships:
  related_to:
    - Publication Bias and Selective Reporting
    - The Insufficient-Evidence Statement
    - Surrogate Outcomes
    - Measurement Error in Dietary Assessment
    - Most Published Findings Are False (PPV of a Field)
---

 — this page is the wiki's own appraisal reasoning. Like [[The Underivable Optimum]] and
[[The Estimate-to-Action Gap]], it carries no source attributions of its own: every claim is the
fabric's synthesis over held method rules (the telos's streetlight and symmetric-standards sections)
and the concept pages it links, `sources: []` is legitimate here. It anchors on Ioannidis's
field-level bias model, reached through [[Most Published Findings Are False (PPV of a Field)]].

**A meta-analysis has no independent access to truth — it POOLS an existing primary base, and so
inherits that base's selection.** If a question was never funded or never run, no amount of rigorous
synthesis at the top of the pyramid recovers it. The apex inherits the selection of its base:
**nothing in, nothing out.** This is distinct from garbage-in-garbage-out — the inputs are not
*corrupted*, they are *absent*, and absence leaves no trace in the pooled estimate to flag.

## The upstream filter is a different filter from publication bias

[[Publication Bias and Selective Reporting]] is the DOWNSTREAM filter: given that a study ran, which
*results* reach print (positive over null, the file drawer, effect-size inflation). This page is the
UPSTREAM filter: which *questions* get studied at all. The two compose — a question must clear the
upstream filter to exist, then its result clears the downstream filter to be seen — but they are not
the same defect, and the downstream tools (funnel plots, p-curve, protocol-to-report comparison) are
**structurally blind to the upstream one**: they audit the studies that exist, while the upstream
filter is about the studies that never do.

## Naming the lamps — the streetlight has more than one

The telos's streetlight effect names its filter as **measurability** — what is easy to measure,
isolate, blind, and observe quickly yields clean data, so the hard-to-measure reads as "no evidence."
That filter already covers **blindability and short latency**: you cannot blind a food or randomize a
lifetime -> [[Measurement Error in Dietary Assessment]], so long-latency whole-diet questions are
under-served relative to a blindable, short-outcome pill. This page adds **two filters the streetlight
does not name**, each non-random and pushing the *same* way, so the skew is systematic, not noise:

- **Fundability / patentability** — powered trials are expensive, and commercial sponsorship flows to
  what can be owned. An off-patent food, a behaviour, or a whole dietary pattern has no commercial
  sponsor for a decisive RCT, so it is *expected to be* under-trialled relative to a drug of equal
  importance. This is a named mechanism, not a measured one — held, discounted.
- **Consonance with consensus** — a heterodox hypothesis clears a higher bar to be funded and run than
  the prevailing one, so the expected result is the cheaper one to study. (This filter *straddles*: it
  also raises the bar to *publish*, overlapping the downstream filter -> [[Publication Bias and Selective Reporting]].)


Each filter is non-random and points the same way, so a body of evidence that looks thin on an exposure
may be dark *because the exposure sits away from every lamp at once*, not because the exposure does
nothing.

## The decision consequence — absence of evidence is CLAIM-NEUTRAL

This is the move the page exists to block. The structure

> *a true finding + no sponsor + a hostile establishment -> no studies -> no meta-analysis ->
> absence of high-tier evidence*

is **claim-neutral**: it fits a true-but-unstudied exposure and a false-and-correctly-unstudied one
*equally well*. The same lever that would elevate a favoured heterodox claim elevates every disfavoured
one — seed-oil alarm, carnivore cures, and supplement suppression all run the identical argument. So
absence-of-a-meta-analysis **cannot raise the posterior of any particular claim**; it is the
symmetric-standards rule made concrete (a heterodox claim earns no presumption "from novelty,
suppression narratives, or who advances it").

## What DOES discriminate — the constructive half

If the missing meta-analysis is claim-neutral, what separates a real-but-unstudied finding from a
correctly-ignored one? Not the absence — three things that survive it:

- **The expectancy test** — *if this were true, would we expect to have seen evidence by now?* Silence
  from a genuinely *unstudied* question is not a null; silence where a cheap study would already have
  spoken is -> [[The Insufficient-Evidence Statement]].
- **Mechanism strength** — a human-corroborated pathway carries directional weight even without a
  whole-intervention RCT (held, discounted, marked as mechanism, never dressed as an outcome).
- **The cheap evidence that needs no sponsor** — observational cohorts, natural experiments, and
  Mendelian randomization do not require industry money, so their *absence* is more informative than a
  missing RCT's. Where the fundable-lamp argument is genuinely real, these channels are exactly where a
  true finding would still leave a trace -> [[Surrogate Outcomes]] (prediction vs causation, MR the
  arbiter).

So the endogenous base is a reason to **weight the cheap channels**, never a reason to believe the
unstudied.

## What this does NOT license — the gold-gate stands, and the bias runs both ways

- **It does not loosen the gold-gate.** The source-tier preference governs *acquisition priority and
  confidence calibration*, not a truth-verdict. Paired with the four evidence states (insufficient !=
  no-effect), a fundable-lamp finding is held at *insufficient-evidence + directional-mechanism*, its
  gap named — NOT downgraded to "no effect." The endogenous base silences a truth only if the gate is
  read naively as *believe only meta-analyses*, which the four-states discipline forbids.
- **The bias is symmetric in direction, not in detectability.** Advocate and foundation funding
  *inflate* a favoured heterodox claim through non-independence, in the opposite direction to how
  establishment neglect *deflates* it — though the inflation is at least *detectable* (a present study
  you can scrutinize for independence) where the deflation "leaves no trace" (the absent study cannot be
  audited). A crowd-funded study of a fashionable exposure earns the same independence scrutiny as an
  industry trial — symmetric standards apply in both directions, or the correction becomes its own bias
.

## Decision relevance

- When you meet *"there is no meta-analysis, so the mainstream is merely under-researching X"* — treat
  the absence as claim-neutral. Ask the expectancy test, the mechanism strength, and whether the cheap
  observational/MR evidence exists and what it says — not whether a meta-analysis is missing.
- Read a favoured-side advocate-funded study under the same independence scrutiny you would apply to a
  disfavoured-side establishment one.
- **This is an open loop.** Nothing here grades which unstudied findings later proved true; the wiki
  verifies only the *would*-form (would a well-informed advisor decline to move a posterior on an
  absence alone?), never the realized hit rate.

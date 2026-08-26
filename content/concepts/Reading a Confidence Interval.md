---
type: concept
question: What does a confidence interval — including one whose bound touches the null (e.g. RR 0.83-1.00) — actually license about direction and magnitude, and when is collapsing it to a binary not-significant verdict a mistake?
aliases: [The Compatibility Interval, Compatibility Interval, Null-Inclusion Is Not Null-Evidence, Reading a CI, CI Width vs Null-Inclusion, Touches the Null]
authors: [Greenland, Sander; Wasserstein, Ronald L; Lazar, Nicole A; Amrhein, Valentin; McShane, Blake]
sources: [Greenland - P Values Confidence Intervals Guide 2016, Wasserstein - ASA Statement P Values 2016, Amrhein - Retire Statistical Significance 2019]
cluster: inference-pitfalls
confidence: medium
self_critiqued: 2026-08-26
created: 2026-08-26
updated: 2026-08-26
relationships:
  related_to:
    - The Insufficient-Evidence Statement
    - The Underivable Optimum
    - Baseline Risk and the Relative-Absolute Split
    - The Estimate-to-Action Gap
    - Rating Certainty of Evidence
    - Measurement Error in Dietary Assessment
---

**The decision.** Handed an interval like RR 0.83-1.00 (or 1.20 with CI 0.97-1.48), what may you
conclude — and when is reading it as *the bound touches 1.0, so not significant, so no effect* a mistake?
The answer, from the statistics-reform literature: a CI is a **range of effect sizes compatible with
the data under the model**, not a binary significance verdict, and collapsing it to *significant / not*
discards exactly the information a decision needs. — this
framing is the wiki's own synthesis of the three sources below; the source-attributed claims follow.

*(The RR 0.83-1.00 figure here is a HYPOTHETICAL illustration of interval shape — the wiki asserts no
such red-meat effect. The RR 1.20 / CI 0.97-1.48 case is Amrhein et al.'s own published teaching
example about anti-inflammatory drugs, cited as an illustration of a reading error, NOT as a domain
finding this page endorses.)*

## The compatibility reframe — what the interval IS

A 95% CI is the set of effect sizes that a test would not reject at P > 0.05 — the values «more
compatible with the data ... than sizes outside the range—again, if the statistical model were
correct» [@greenland2016]. Two consequences
the binary reading loses:

- **The point estimate is the best-supported value, and support tapers toward the limits.** Values
  inside are not equally compatible — «The point estimate is the most compat- ible, and values near it
  are more compatible than those near the limits» [@amrhein2019]. So RR 0.83-1.00 is not *null*; its best-supported value sits near the point estimate
  (\~0.91 in that illustration), with the whole range from a 17% reduction to no effect in play.
- **Singling out the null value in the interval is meaningless.** «singling out one particular value
  (such as the null value) in the interval as "shown" makes no sense»
  [@amrhein2019]. An interval touching 1.0
  «will often also contain non-null values of high practical importance.»

Amrhein et al. rename the CI a **compatibility interval** to force this reading
[@amrhein2019]; the rename is theirs (the
Greenland guide reframes the *values* as compatible but keeps the CI name; the ASA uses neither term).
The neutral object is the same under any name: a compatibility range.

## The load-bearing correction — precision is WIDTH, not null-inclusion

The single most common CI error: reading *excludes the null* as *more precise / stronger*. It is not.
«When the model is correct, precision of statistical estimation is measured directly by conﬁdence
interval width ... It is not a matter of inclusion or exclusion of the null or any other value»
[@greenland2016]. Greenland's worked case:
(5, 40) excludes the null but is 30 units wide, while (-5, 10) includes the null «but is half as wide
and therefore much more precise» [@greenland2016]. A narrow interval hugging the null is a **strong, precise** result (an effect, if any, is
small); a wide interval excluding the null is a weak one. The null-touching interval and the precise
interval are orthogonal axes.

The ASA statement makes the same separation at the significance level: «identical estimated effects
will have different p-values if the precision of the estimates differs»
[@wasserstein2016], and a threshold verdict is not a
truth verdict — «A conclusion does not immediately become "true" on one side of the divide and "false"
on the other. Researchers should bring many contextual factors into play ... the design of a study,
the quality of the measurements, the external evidence ... and the validity of assumptions»
[@wasserstein2016].

## Null-inclusion is not null-evidence

Two studies with the **same point estimate** but different width get read as contradictory only because
one crosses the threshold — the exact error in Amrhein's anti-inflammatory example (RR 1.20 in both;
CI 0.97-1.48, *not significant* vs CI 1.09-1.33, *significant*). The reform reading keeps the estimate
and states the range: a «3% decrease ... to a 48% increase ... is also reasonably compatible with our
data» [@amrhein2019]. A large P value «does not
imply evidence in favor of the null hypothesis; many other hypotheses may be equally or more consistent
with the observed data» [@wasserstein2016]. This is the
absence-of-evidence / evidence-of-absence distinction the wiki already holds as a separate evidence
state -> [[The Insufficient-Evidence Statement]]: an interval spanning the null is *cannot say*, not
*no effect*.

## Coverage is a property of the method, not of your one interval

The 95% is the long-run hit rate of the *procedure*, «a property of a long sequence of conﬁdence
intervals ... rather than a property of any single conﬁdence interval»
[@greenland2016]. Your reported interval
either contains the truth or does not; there is no «95 % chance» that this interval holds it
[@greenland2016]. This blocks the slide from
a CI to a credible interval (below).

## Not independent backing — one reform school

**These three sources are ONE methodological lineage, not independent (type-E) convergence, and the
page must not read as three routes agreeing.** The
Greenland guide was published as supplementary
material to the ASA statement; Greenland is a co-author of the Amrhein comment; all three are the same
significance-reform movement. Their agreement raises **coherence, not independent robustness** — it is
shared-source / type-F refinement (a later source bounding and renaming an earlier one), and the
`sources:` list carries all three only because each contributes a *distinct* extracted claim (Greenland:
width-not-inclusion + coverage; ASA: the six-principle authority + P5/P6; Amrhein: the rename, the
tapering-compatibility caveats, the published worked example), never as mutual corroboration of the
same claim.

## Synthesis — three decision-layer corrections

The reform literature is a Layer-2 (estimate-reading) instrument. Applying it inside this wiki's
three-layer scheme needs three corrections the sources do not state, marked as the wiki's own
reasoning:

- **(a) A skewed interval is a Layer-3 decision INPUT, not a Layer-2 evidence upgrade
.** That the point estimate favours benefit and most of
  the interval lies below the null is a reason to *act* under asymmetric costs and reversibility — it
  does NOT raise the certainty-of-evidence grade. Certainty-of-evidence and strength-of-recommendation
  stay separate axes; a wide null-touching interval remains low-certainty however favourably it is
  shaped -> [[Rating Certainty of Evidence]], [[The Estimate-to-Action Gap]].
- **(b) The weight you put on the skew rides on IDENTIFICATION, not on CI width
.**
  A CI (and the P value under it) is conditional on the model being correct — Amrhein's own last and
  «most important» caveat: «compatibility assessments hinge on the correctness of the statistical
  assump- tions» [@amrhein2019]. Width measures
  random error only; a *tight* interval can be centred on the wrong number when confounding or a
  mis-specified comparator biases the estimate (a spurious 0.91 from residual confounding is narrow and
  wrong). So the credence a favourable skew earns depends on whether the effect is well-identified — the
  target-trial / well-defined-intervention question — not on how narrow the interval is
  -> [[The Target Trial (Emulation and the Well-Defined Intervention)]], and the identification-vs-precision
  split on [[Limits of Evidence]].
- **(c) A frequentist CI is NOT a posterior — *more likely benefit than harm* needs a prior
.** Reading RR 0.83-1.00 as "there is a high probability
  the true effect is protective" is the credible-interval error: the 95% is the method's coverage, not
  a probability over the truth (Greenland #19), and «Any opinion offered about the probability ...
  for a hypothesis cannot be derived from statistical methods alone»
  [@greenland2016] — a probability statement
  needs an explicit prior (ASA P2: the P value «is not a statement about the explanation itself»
  [@wasserstein2016]). Describe the compatible range and
  the best-supported value; do not silently convert it into a posterior belief.

**The guard against over-reading the reframe.** Retiring the significance verdict is not "anything
goes." For decisions, «decisions based on the costs, benefits and likelihoods of all potential
consequences always beat those made based solely on statistical significance»
[@amrhein2019] — a Layer-3 move, not a licence to
treat every skewed null-touching interval as a finding. The interval reframes *how to read* the
estimate; whether to act on it is still the costs-and-identification question above.

## References

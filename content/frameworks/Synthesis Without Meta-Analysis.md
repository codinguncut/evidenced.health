---
type: framework
question: When studies cannot be pooled into a meta-analysis, how do you read (and grade) the synthesis — and how sound are the available non-pooling synthesis methods?
aliases: [Vote Counting, Synthesis Without Pooling, SWiM, Structured Synthesis, Narrative Synthesis, Vote-Counting by Significance]
authors: [McKenzie, Joanne E; Brennan, Sue E; Institute of Medicine (org)]
sources: [Cochrane - Handbook for Systematic Reviews 6.5, NASEM - Finding What Works in Health Care]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-07-31
created: 2026-07-31
updated: 2026-08-06
relationships:
  related_to:
    - Certainty of Evidence vs Strength of Recommendation
    - Rating Certainty of Evidence
    - Publication Bias and Selective Reporting
    - P-Hacking and Researcher Degrees of Freedom
---

When a body of studies is too diverse to pool — or reports effects in incompatible forms — reviewers
fall back on non-meta-analytic synthesis. Some of those methods are legitimate; **one common method is
fatally flawed**, and spotting it is an appraisal skill.
[inferred from @cochranehandbook2024]

## Vote-counting by statistical significance is UNACCEPTABLE — and gets worse with more studies

«Synthesis methods that involve vote counting based on statistical significance have serious
limitations and are unacceptable.» [@cochranehandbook2024]
Counting "X of Y studies were significant" mistakes underpowered nulls for evidence of no effect, and
the pathology is counterintuitive: «as the number of studies increases, the power of conventional vote
counting tends to zero, except with large studies and at least moderate intervention effects» (Hedges &
Vevea 1998). [@cochranehandbook2024] More studies make the
method *less* able to detect a real effect — the opposite of how evidence is supposed to accumulate.
This is the synthesis-level cousin of the single-study error the fabric already holds — significance is
not effect size, and a non-significant small study has not shown "no effect"
([[P-Hacking and Researcher Degrees of Freedom]]).

**The line: direction is legitimate, significance is not.** Vote-counting by *direction of effect* (a
sign test — «is there any evidence of an effect?») is acceptable; by *significance* is not. Subjective
counting rules are worse than they look: «detailed descriptions of the rules may provide a veneer of
legitimacy, such rules have poor performance validity».
[@cochranehandbook2024]

## The ladder of fallbacks — each answers a strictly weaker question than a pooled effect

When pooling is impossible, the legitimate methods answer progressively weaker questions — and naming
the question is what keeps a reader honest about what a synthesis established:

- **Summarize effect estimates** (median / IQR / range) → *what is the range and distribution of
  observed effects?*
- **Combine P values** (Fisher's) → *is there an effect in **at least one** study?* (a weak claim — not
  "there is an effect").
- **Vote-count by direction** (sign test) → *is there any evidence of an effect?*

[@cochranehandbook2024]
None yields a magnitude or weights studies by size — so none substitutes for the absolute effect the
fabric's decision layer needs. Note Cochrane pushes *toward* meta-analysis: clinical/methodological
diversity alone is not a licence to skip pooling (held: aggregate-vs-configure).

## Grading a synthesis without meta-analysis

GRADE still applies — «GRADE was applied to individual studies and then used to prioritize the
reporting of results». [@cochranehandbook2024] Certainty is
rated per study and used to order what gets reported, rather than attached to a pooled estimate that
does not exist. → [[Rating Certainty of Evidence]]

## The institutional standard makes "don't assume you can pool" a review requirement `[2026-07-31, IOM]`

Cochrane supplies the *when/how* of non-pooled synthesis; the IOM 2011 SR standard states the
*never-assume* rule as a required decision. Standard 4.3 forces reviewers to «Decide if, in addition to
a qualitative analysis, the systematic review will include a quantitative analysis (meta-analysis)» and
to «Explain why a pooled estimate might be useful» — «The assumption that a meta-analysis is an
appropriate step in an SR should never be made.»
[@nasem2011fww] And the qualitative synthesis is
mandatory, not a fallback: «The qualitative synthesis is more than a narrative description or set of
tables that simply detail how many studies were assessed».
[@nasem2011fww]

**Shared lineage, F not E.** IOM built Chapter 4 partly from GRADE and its synthesis guidance from the
same SR-methods tradition as Cochrane, so this convergence with Cochrane's push is one school, not
independent corroboration — no `[E-independent]`. What it adds is the **auditable-standard** framing:
a review that pooled heterogeneous studies without explaining why failed a named standard (4.3.1), a
checkable class-5 finding. -> [[What a Trustworthy Systematic Review Requires]]

## Decision relevance

- **When a review says "N of M studies showed benefit," check the vote-counting basis.** By
  significance → discount it (power → 0). By direction → it is a legitimate but weak sign-test claim,
  carrying no magnitude.
- **A synthesis-without-pooling answers a weaker question than it often appears to.** "An effect in at
  least one study" is not "an effect."
- **No magnitude, no decision.** These methods do not deliver the absolute effect at a stated baseline
  the fabric ranks interventions by — treat a non-pooled synthesis as direction-and-existence evidence,
  not effect-size evidence.

[inferred from @cochranehandbook2024]

## References

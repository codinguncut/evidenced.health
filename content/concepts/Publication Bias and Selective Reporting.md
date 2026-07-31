---
type: concept
question: How does the filter deciding which results get published make a body of literature overstate an effect — and how much should a reader discount for it?
aliases: [Publication Bias, Selective Reporting, Selective Outcome Reporting, File-Drawer Problem, Effect-Size Inflation, Winner's Curse, Small-Study Effect]
authors: [National Academies of Sciences Engineering and Medicine (org)]
sources: [NASEM - Reproducibility and Replicability in Science 2019]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-07-31
created: 2026-07-31
updated: 2026-07-31
relationships:
  related_to:
    - Sources of Non-Replicability
    - P-Hacking and Researcher Degrees of Freedom
    - Rating Certainty of Evidence
    - Upgrading Observational Evidence
    - Confidence in Science Without a Replication Crisis
---

The filter on *what enters the literature* is not neutral. «The publication preference for
statistically significant, positive results produces a biased literature through the exclusion of
statistically nonsignificant results» — so «This publication bias results in a published literature
that does not reflect the full range of evidence about a research topic.»
[@nasem2019]

**This is a body-of-evidence defect, not a single-study defect** — each published study can be
impeccable while the *set* is a skewed sample. It therefore cannot be detected by reading one paper;
it is caught only across the literature (funnel plots, p-curve, test of excess significance, chasing
the unpublished nulls).
[@nasem2019]

## The reversal it forces on a naive non-replication reading

A new study that finds nothing looks like a failure to replicate a published positive — but under
publication bias it may be the honest result: «if the published literature is not an accurate
reflection of the state of the evidence because only positive results are regularly published, the
new study could actually have replicated previous but unpublished negative results.»
[@nasem2019]

Worked case (tamoxifen): of 23 trials, 22 did not reach p < 0.05 individually, yet the cumulative
review showed a real, large effect — the signal lived in the *aggregate*, invisible in the
single-study significance verdicts.
[@nasem2019]

## Effect-size inflation — the reusable prior (FINDING 5-2)

Selection-on-significance does not only decide *whether* an effect is published; it inflates its
*magnitude*. Replications regress toward smaller effects: «Efforts to replicate studies aimed at
discerning the effect of an intervention in a study population may find a similar direction of
effect, but a different (often smaller) size of effect.»
[@nasem2019, FINDING 5-2]

The large replication projects quantify the shrink: Open Science Collaboration psychology — 36% of
replications significant vs 97% of originals, and **mean effect sizes were halved**; Many Labs 2 —
75% of replicated effects smaller than the original; Camerer social-science \~50% of original.
[@nasem2019, Table 5-1]

**Decision rule:** treat a *published original* effect size as an **over-estimate** by default; the
replicated / meta-analytic magnitude is the one to carry into a decision. This is the winner's-curse
signature, and it composes with the wiki's *state the magnitude in absolute terms* rule — an inflated
relative effect on a small baseline is doubly discounted. **Caveat — the shrink magnitudes above are
from psychology / social-science replication projects; the *direction* (published originals
over-estimate) transports, but the *size* of the discount for a nutrition effect estimate is
domain-uncertain and not read off the "halved" figure.**

## Where this bites in this fabric

- **Discounts an observational literature at the body level**, orthogonally to design grade -> a
  clean-looking pooled estimate can inherit the filter -> [[Rating Certainty of Evidence]]
  (publication-bias downgrade domain), [[Upgrading Observational Evidence]].
- **The streetlight corollary:** the filter runs *toward* the well-lit, publishable positive and
  *against* the null and the incremental — the same directional distortion the telos names, made
  concrete for the literature.

## Relation to the held validity model (differential seam)

Publication bias is one of Ioannidis's bias terms lowering a field's PPV, and the "several teams
published a positive" pattern is the winner's-curse he formalizes
-> [[Most Published Findings Are False (PPV of a Field)]]. NASEM **institutionalizes and itemizes** it
rather than re-deriving it independently (F-refinement, same lineage — NASEM cites Ioannidis 2005),
so this is not type-E corroboration and adds no independent-backing confidence.]]`

## References

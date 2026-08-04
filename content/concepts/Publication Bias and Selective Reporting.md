---
type: concept
question: How does the filter deciding which results get published make a body of literature overstate an effect — and how much should a reader discount for it?
aliases: [Publication Bias, Selective Reporting, Selective Outcome Reporting, File-Drawer Problem, Effect-Size Inflation, Winner's Curse, Small-Study Effect]
authors: [National Academies of Sciences Engineering and Medicine (org); Page, Matthew J; Higgins, Julian PT; Sterne, Jonathan AC; Veronese, Nicola; Lane, Melissa M; Marx, Wolfgang; Hamley, Steven]
sources: [NASEM - Reproducibility and Replicability in Science 2019, Cochrane - Handbook for Systematic Reviews 6.5, Veronese - Dietary Fibre Health Umbrella 2018, Lane - Ultra-Processed Food Umbrella 2024, Hamley - Saturated Fat PUFA Coronary 2017]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-07-31
created: 2026-07-31
updated: 2026-08-04
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
[inferred from @nasem2019]

## Where this bites in this fabric

- **Discounts an observational literature at the body level**, orthogonally to design grade -> a
  clean-looking pooled estimate can inherit the filter -> [[Rating Certainty of Evidence]]
  (publication-bias downgrade domain), [[Upgrading Observational Evidence]].
- **The streetlight corollary:** the filter runs *toward* the well-lit, publishable positive and
  *against* the null and the incremental — the same directional distortion the telos names, made
  concrete for the literature.
- **But the direction is the *prevailing hypothesis*, not «positive» in the abstract — a worked
  illustration `[2026-08-04]`.** In the diet-heart RCT literature the orthodoxy *was* the diet-heart
  benefit, so the suppressed results were the ones *unfavourable* to it: Hamley notes SDHS did not
  originally report CHD/CVD mortality and MCS took \~16 years to publish, and *«Both SDHS and MCS were
  unfavourable trials for the popular diet heart hypothesis.»* [@hamley2017, Publication bias]
  A single contrarian author's observation (he flags it *might* «simply reflect methodological
  differences»), so held as illustration, not established selective-reporting — but a useful reminder
  that the file-drawer points wherever the field's expectation points -> [[Does Reducing Saturated Fat Reduce Cardiovascular Events]].



## Relation to the held validity model (differential seam)

Publication bias is one of Ioannidis's bias terms lowering a field's PPV, and the "several teams
published a positive" pattern is the winner's-curse he formalizes
-> [[Most Published Findings Are False (PPV of a Field)]]. NASEM **institutionalizes and itemizes** it
rather than re-deriving it independently (F-refinement, same lineage — NASEM cites Ioannidis 2005),
so this is not type-E corroboration and adds no independent-backing confidence.
[inferred from @nasem2019]

## From concept to assessable procedure — Cochrane Ch 13 operationalizes detection `[2026-07-31]`

NASEM (above) gives the *concept*; Cochrane's Chapter 13 makes it an **assessable procedure** — how a
reviewer detects and grades missing-result bias. **F-refinement, not a second concept** — the composite
beats either alone: NASEM says the literature is filtered, Cochrane says how to catch the filter.

**Two mechanisms, and the within-study one is quantifiable.** Cochrane splits the bias into whole-study
non-publication vs within-study selective non-reporting of specific results (prefers the term «non-reporting
bias»), and notes the within-study kind is tractable because its denominator is known: «the impact of
selective non-reporting or under-reporting of results can be quantified more easily than the impact of
selective non-publication of an unknown number of studies».
[@cochranehandbook2024]

**The primary, most-valuable procedure is protocol/registry-to-report comparison — NOT funnel plots.**
«If study plans are available (e.g. in a trials register, protocol or statistical analysis plan),
details of outcomes that were assessed can be compared with those for which results are available.»
[@cochranehandbook2024] Supporting machinery: ClinicalTrials.gov
results fields, the ORBIT classification of *why* a result is missing (benign vs suppressed), a
study×meta-analysis availability matrix, and **ROB-ME** — «the first structured approach for assessing
the risk of bias that arises when entire studies, or particular results within studies, are missing…
because of the P value, magnitude or direction» (8 signalling questions → low/some-concerns/high).
[@cochranehandbook2024]

**Funnel plots are DEMOTED to a caveated fallback — a correction to common folk practice.**

- «funnel plot asymmetry should not be considered to be diagnostic for the presence of non-reporting
  bias» [@cochranehandbook2024];
- «the funnel plot should be seen as a generic means of displaying **small-study effects**»
  [@cochranehandbook2024] — whose competing causes are
  true heterogeneity, poor small-study methodological quality, chance, and artefact, not only
  non-reporting bias;
- tests apply «only when there are at least 10 studies included in the meta-analysis» — and only \~28%
  of meta-analyses have that many, so the test is inapplicable to most.
  [@cochranehandbook2024]

**Direction — corroborates the held page (E-line, not a sources argument for independence).** «selective
dissemination of study reports and results leads to an over-estimate of the benefits and under-estimate
of the harms». [@cochranehandbook2024] Same direction as
NASEM's effect-size-inflation finding; Cochrane and NASEM are **not independent routes** (both rest on
the same meta-research literature — Sterne, Egger, Ioannidis appear in both), so no `[E-independent]`.

**Decision consequence for reading a nutrition meta-analysis:** an asymmetric funnel plot is *not*
proof of publication bias — ask whether the review compared registered protocols to reports (the strong
check), and treat funnel asymmetry as a small-study-effects flag with several explanations.
→ [[Synthesis Without Meta-Analysis]], [[Risk of Bias Assessment Tools]] (domain 5 covers *within-study*
result selection; cross-study missingness is this page / ROB-ME).

## Worked case — the excess-significance screen applied to a nutrition literature `[2026-07-31]`

The abstract machinery above (test of excess significance, small-study effects, prediction intervals)
is what an **umbrella review** runs across a body of meta-analyses to grade credibility. Veronese
2018 applied all three to 18 fibre meta-analyses (21 outcomes): 17 of 21 outcomes had the largest
study more conservative than the random-effects pooled estimate (the small-study signature), and
**breast cancer and coronary artery disease carried outright excess-significance bias** — nominally
significant, but with more significant component studies than their power should produce.
[@veronese2018] This is the body-level filter
made operational: the credibility gate that separated «convincing» from «suggestive» was chiefly the
**95% prediction interval excluding the null**, not the summary P value → [[Dietary Fibre and Health]]
(the fibre-outcome grading), [[Risk of Bias Assessment Tools]].

**Second worked case — Lane 2024 (ultra-processed food umbrella).** The same apparatus, run across 45
UPF-outcome pooled analyses, and the instructive result is *where the screen fired*: excess-significance
bias in **9 of 28 (32%)** analyses with >=3 studies, and small-study effects in **5 of 28 (18%)** —
including **all-cause mortality, obesity, and type 2 diabetes**, the outcomes the review headlines.
[@lane2024upf] The lesson refines the Veronese case:
the bias screens are not confined to the weak associations — a **nominally-convincing (class I)**
association can still carry excess-significance bias, so the screen's diagnostic value is precisely that
it flags the strong-looking associations, not only the fragile ones → [[Ultra-Processed Food and Health Outcomes]].
Lane also shows the credibility class and GRADE quality are **distinct axes**: its class-I CVD-mortality
association is GRADE *very low* — the bias-screened strength of an association is not its causal certainty
→ [[Rating Certainty of Evidence]].

## References

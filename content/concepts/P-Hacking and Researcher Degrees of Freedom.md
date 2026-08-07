---
type: concept
question: How does analytic flexibility within a single study manufacture a statistically significant result that will not replicate — and what disclosure tells you it happened?
aliases: [P-Hacking, Researcher Degrees of Freedom, Garden of Forking Paths, HARKing, Multiplicity, Multiple Comparisons, Exploratory vs Confirmatory, Questionable Research Practices]
authors: [National Academies of Sciences Engineering and Medicine (org)]
sources: [NASEM - Reproducibility and Replicability in Science 2019]
cluster: reproducibility
confidence: medium
self_critiqued: 2026-07-31
created: 2026-07-31
updated: 2026-08-06
relationships:
  related_to:
    - Sources of Non-Replicability
    - Publication Bias and Selective Reporting
    - The U-Shaped Association Artifact
    - Measurement Error in Dietary Assessment
    - Rating Certainty of Evidence
---

Where [[Publication Bias and Selective Reporting]] is a defect of *what enters the literature*, this
is a defect *within a single study*: the analyst has many choices, and searching over them until one
crosses a threshold manufactures significance that carries no replicable signal.
[inferred from @nasem2019]

## The root principle it violates

«A fundamental principle of hypothesis testing is that the same data that were used to generate a
hypothesis cannot be used to test that hypothesis.» So «when exploratory research is interpreted as
if it were confirmatory research, there can be no legitimate statistically significant result» — and
publications often do not say which mode produced a finding.
[@nasem2019]

## The named practices

- **P-hacking:** «P-hacking is the practice of collecting, selecting, or analyzing data until a
  result of statistical significance is found.» Its variants are the researcher-degrees-of-freedom
  list: stopping data collection once p <= 0.05, testing many relationships and reporting only the
  significant, varying inclusion/exclusion rules to reach p <= 0.05, and hunting subgroups for p <=
  0.05. «Researchers may p-hack without knowing or without understanding the consequences.»
  [@nasem2019]
- **HARKing** (Hypothesizing After Results are Known): «HARKing applies to confirmatory research that
  incorrectly bases the hypothesis on the data collected and then uses that same data as evidence to
  support the hypothesis.» Quantified: reported effects were significantly larger when a relationship
  had been (post-hoc) "hypothesized" (Bosco et al. 2015).
  [@nasem2019]
- **Multiplicity / post-hoc subgroups** — the vivid case: in ISIS-2, a post-hoc split of aspirin
  patients by the twelve astrological signs found «Geminis and Libras did not benefit from aspirin,
  while Capricorns benefited the most» — «This obviously spurious relationship illustrates the
  dangers of analyzing data with hypotheses and subgroups that were not prespecified.»
  [@nasem2019, Peto 2011]

## The garden of forking paths — measured

Analytic flexibility is not hypothetical. Given one raw dataset and one question, \~30 independent
teams diverged: «69 percent of the teams reporting a significant positive effect and 31 percent not
finding a significant relationship» — and «decisions on how to group the data made by the teams were
also important», so the forking begins at data cleaning, before any model is fit.
[@nasem2019, Silberzahn 2015]

## Two priors this installs about a single "significant" result

- **The p-value does not invert.** It is computed *assuming the null is true*; it is not the
  probability the null is false. So a nominally-significant result on a low-plausibility hypothesis
  is mostly a false positive — worked in the report: a 1% prior at p <= 0.01 leaves only \~1 in 8
  "true" conclusions correct; a 25% prior, >4 in 5. **This is the wiki's *a surprising / newer
  finding carries a lower prior of being true* rule made quantitative** -> [[Rating Certainty of Evidence]].
  [@nasem2019, Appendix D]
- **Precision is not accuracy.** «one must not presume that a more precise set of measures is
  necessarily more accurate; the results may simply be subject to a more consistent bias». A tight
  confidence interval is not evidence of correctness — a well-powered study can be precisely wrong
  -> [[Measurement Error in Dietary Assessment]].
  [@nasem2019]

## Link to the artifact machinery

Multiplicity / the garden of forking paths is a **general artifact generator** behind spurious
shapes: an analyst free to choose the referent, the covariate set, the subgroup, and the cut-points
can produce a protective arm with no true effect, and it survives to publication via selection.
-> [[The U-Shaped Association Artifact]] (this is the mechanism behind its "a shape equally consistent
with the causal and the artifact explanation has no diagnostic value" clause).
[inferred from @nasem2019]

## Decision relevance — what disclosure to demand


- **Was the analysis pre-specified?** An unregistered confirmatory-sounding claim may be repackaged
  exploration — discount it. (But preregistration is *not* a quality stamp
  -> [[Confidence in Science Without a Replication Crisis]].)
- **How many outcomes / subgroups were tested?** One "significant" outcome pulled from twenty is near
  worthless; the count is what makes the single p-value interpretable. Undisclosed multiplicity is
  the flag.
- **Exploratory findings are hypotheses, not evidence** — legitimate and valuable, but they must be
  labelled as generating the hypothesis, not testing it.

## References

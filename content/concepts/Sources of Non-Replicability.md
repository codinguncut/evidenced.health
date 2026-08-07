---
type: concept
question: When a result fails to replicate, which of two very different kinds of cause is at work — inherent variability that advances science, or an avoidable defect that discounts the finding?
aliases: [Non-Replicability, Sources of Non-Replication, Why Studies Fail to Replicate, Helpful vs Unhelpful Non-Replicability]
authors: [National Academies of Sciences Engineering and Medicine (org)]
sources: [NASEM - Reproducibility and Replicability in Science 2019]
cluster: reproducibility
confidence: low
self_critiqued: 2026-07-31
created: 2026-07-31
updated: 2026-08-06
relationships:
  related_to:
    - Reproducibility vs Replicability
    - Publication Bias and Selective Reporting
    - P-Hacking and Researcher Degrees of Freedom
    - Confidence in Science Without a Replication Crisis
    - The U-Shaped Association Artifact
    - Measurement Error in Dietary Assessment
---

NASEM's central move is to **split non-replicability into two kinds** with opposite implications for
whether a finding should be discounted. A failed replication is uninformative until you know which
kind produced it: «In many instances, non-replication between two results could be due to a
combination of multiple sources, but it is not generally possible to identify the source without
careful examination of the two studies.»
[@nasem2019]

## (a) Potentially helpful — inherent, not a defect

«Non-replicability is a normal part of the scientific process and can be due to the intrinsic
variation and complexity of nature, the scope of current scientific knowledge, and the limits of
current technologies.» Investigating these leads to new insight, not embarrassment.
[@nasem2019]

**How much replication to expect at all is governed by system-inherent factors** (NASEM's Fig 5-2 —
these set the *baseline* expectation and are not all "helpful": some, like low measure-fidelity, are
degraders): system complexity; how well the number and relations of variables are understood; ability
to control the variables; noise / signal-to-noise ratio; scale-mismatch between the phenomenon and the
measurement; stability of the underlying principles across time and place; **fidelity of the available
measures to the construct (direct vs indirect measurement)**; and the **a priori plausibility of the
hypothesis**. The organizing axes are **complexity × controllability** — an indirectly-measured,
low-control, complex system (human behaviour; nutrition) is the most replication-prone-to-fail even
when *no one errs*.
[@nasem2019, Fig 5-2]

The last two factors map straight onto held machinery: fidelity-of-measure is [[Surrogate Outcomes]]
+ [[Measurement Error in Dietary Assessment]]; a priori plausibility is why a surprising result
carries a lower prior of being true (the Bayesian discount -> [[P-Hacking and Researcher Degrees of Freedom]]).

## (b) Unhelpful — avoidable, and each discounts the finding

«Non-replicability can also be the result of human error or poor researcher choices ... Whether
arising from lack of knowledge, perverse incentives, sloppiness, or bias» — these are «unhelpful in
making scientific progress.» NASEM's enumerated avoidable sources:
[@nasem2019]

- **Publication bias** -> [[Publication Bias and Selective Reporting]]
- **Misaligned incentives** — tenure/grants/citations reward productivity and positive results;
  formally modelled to *drive* non-replicable results (Smaldino & McElreath 2016).
- **Inappropriate statistical inference** (p-hacking, threshold misuse) -> [[P-Hacking and Researcher Degrees of Freedom]]
- **Poor study design**
- **Errors** — commonplace, not rare: the Reinhart-Rogoff spreadsheet error flipped -0.1% to +2.2%
  growth; a statcheck audit found \~half of NHST psychology papers had >=1 p-value inconsistency,
  \~1-in-8 large enough to change the conclusion.
- **Incomplete reporting** — the methods section under-describes the true procedure; a study entails
  hundreds of barely-conscious choices, so a real non-replication is often un-diagnosable rather than
  fraudulent.
- **Fraud / misconduct** — the extreme end, and explicitly **rare** (\~4 retractions per 10,000
  papers). Do not let the taxonomy read as implying fraud is a major share.
  [@nasem2019]

## The verdict this taxonomy licenses

«CONCLUSION 5-4: The occurrence of non-replicability is due to multiple sources, some of which impede
and others of which promote progress in science. The overall extent of non-replicability is an
inadequate indicator of the health of science.»
[@nasem2019]

**Decision relevance:** a bare "replication rate" cannot be read as a health grade, because it pools
the helpful and the unhelpful kinds. What matters for discounting *a specific finding* is which
avoidable source is plausibly present — and those are individually diagnosable (funnel plot,
preregistration, statcheck), where the aggregate rate is not -> [[Confidence in Science Without a Replication Crisis]].

## Relation to the held validity model (differential seam)

This taxonomy is the **institutional, itemized** form of Ioannidis's deflators of a finding's PPV
(bias `u`, flexibility, many teams) -> [[Most Published Findings Are False (PPV of a Field)]]. It is
**not an independent route to the same conclusion** (F-refinement, same lineage — NASEM Ch 1 cites
Ioannidis 2005), so the convergence raises no type-E confidence; it operationalizes the model rather
than corroborating it.
[inferred from @nasem2019]

## References

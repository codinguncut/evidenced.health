---
type: framework
question: How does USPSTF turn an evidence appraisal into a recommendation without a strength axis?
aliases: [USPSTF Recommendation Grid, Net Benefit, Magnitude of Net Benefit, A B C D I Grades, USPSTF Letter Grades, Certainty by Magnitude Grid]
authors: [US Preventive Services Task Force (org)]
sources: [USPSTF - Procedure Manual 2022]
cluster: evidence-appraisal
confidence: low
relationships:
  related_to:
    - Certainty of Evidence vs Strength of Recommendation
    - The Insufficient-Evidence Statement
    - GRADE vs USPSTF - Two Appraisal Systems
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
created: 2026-07-31
updated: 2026-07-31
---

USPSTF forms a recommendation from **two axes only** — certainty of net benefit, and magnitude of net
benefit — read off a fixed grid into a letter grade **A / B / C / D / I**. There is **no strength axis**
and no separate values/preferences determinant; the whole GRADE certainty+strength apparatus is
replaced by a certainty x magnitude lookup. This is the wiki's first fully specified **non-GRADE**
recommendation-formation instrument. [@uspstfmanual2022]

## Net benefit — the unit being graded

USPSTF grades neither an effect estimate nor a body of evidence per outcome, but a single composite:

> «The net benefit is defined as the benefits minus the harms of the preventive service as»
> implemented in a general primary care population.
> [@uspstfmanual2022]

Two consequences the definition forces:

- **The benefit-harm balance is inside the graded object, not applied afterward.** GRADE rates certainty
  in an effect estimate and *then* weighs benefits against harms at the strength step. USPSTF folds the
  weighing in first: certainty is certainty *about the netted quantity*. -> [[GRADE vs USPSTF - Two Appraisal Systems]]
- **It is absolute and population-scoped** — «as implemented in a general primary care population». Net
  benefit is a per-1000-persons quantity, which is why USPSTF «generally prioritizes ARR over RRR»
  -> [[Baseline Risk and the Relative-Absolute Split]].

## The two axes

**Certainty of net benefit — three levels** (high / moderate / low): «likelihood that the USPSTF
assessment of the net benefit of a preventive service is correct». Judged across the *entire analytic
framework*, not per outcome, and «not a quantitative calculation, but rather a judgment based on the six
critical appraisal questions». -> [[Rating Certainty of Evidence]]
[@uspstfmanual2022]

**Magnitude of net benefit — four levels** (substantial / moderate / small / zero-negative):
«The Task Force rates net benefit as substantial, moderate, small, or zero/negative. "Substantial" net
benefit indicates that the benefits substantially outweigh the harms, whereas "zero/negative" net
benefit indicates that the harms equal or outweigh the benefits.»
[@uspstfmanual2022]

The two are computed **separately** and deliberately so: «The Task Force is careful to assess the
certainty of the evidence and the magnitude of benefit, harm, and net benefit separately. For example,
the Task Force may have high certainty of the overall evidence and still determine that there is small
(or even zero) magnitude of net benefit.» [@uspstfmanual2022]

## The grid (Table 5)

| Certainty \ Magnitude | Substantial | Moderate | Small | Zero / Negative |
|---|---|---|---|---|
| **High** | A | B | C | D |
| **Moderate** | B | B | C | D |
| **Low** | Insufficient (I) | Insufficient (I) | Insufficient (I) | Insufficient (I) |

[@uspstfmanual2022]

Read literally, the grid encodes three rules:

- **Low certainty erases the magnitude column entirely** — it is always **I**. «If the certainty of the
  evidence is low, the Task Force is unable to assess the magnitude of net benefit». So *I* is not a low
  grade on a continuum with A-D; it is the cell where magnitude *cannot be read at all*.
  -> [[The Insufficient-Evidence Statement]]
- **Grade tracks magnitude across the top rows** — high certainty runs A (substantial) -> B (moderate)
  -> C (small) -> D (zero/negative). The letter is essentially *how big is the net benefit, given we are
  confident it is real*.
- **A negative net benefit at moderate-or-high certainty is D** — «recommends against the service...
  moderate or high certainty that the service has no net benefit or that the harms outweigh the
  benefits». D requires the same certainty as a positive recommendation; you must be *confident* of
  no-benefit to say so. [@uspstfmanual2022]

## What each grade licenses (Table 4)

- **A / B — offer or provide the service.** A = high certainty substantial net benefit; B = high
  certainty moderate, or moderate certainty moderate-to-substantial.
- **C — selective, preference-sensitive offering.** «recommends selectively offering or providing this
  service to individual patients based on professional judgment and patient preferences. There is at
  least moderate certainty that the net benefit is small.» **This is where USPSTF puts values** — not
  as a determinant that weakens a recommendation (GRADE's move) but as the *action content of the
  small-net-benefit grade itself*. -> [[Certainty of Evidence vs Strength of Recommendation]]
- **D — discourage the service.** Confident no-net-benefit or net harm.
- **I — insufficient** (see [[The Insufficient-Evidence Statement]]).
  [@uspstfmanual2022]

## Where values and cost live — and where they do not

- **Values** enter through **grade C + shared decision-making**, not through a strength axis: «For
  interventions where the relationship between benefits and harms is influenced heavily by personal
  preferences, the Task Force advocates that providers and patients engage in shared decision-making.»
- **Financial cost is excluded; opportunity cost is not.** «The USPSTF does not consider the financial
  costs of providing a service in its assessment of the balance of benefits and harms, but may provide
  contextual information regarding costs for use by providers, including cost-effectiveness studies.» Yet
  «Harms may also be considered in the form of opportunity costs for both patients and providers» — so
  cost enters as *context*, opportunity cost as *harm*, and neither as a priced axis in the balance.
  -> [[Which Objective Moved This Recommendation]]
- **Harms are held to a lower evidence bar than benefits** — «The quality of evidence for harms need not
  be as strong as that for benefits because of the ethical imperative to do no harm, especially when
  caring for asymptomatic persons.» [@uspstfmanual2022]

## Decision relevance

- **The grid maps onto the wiki's Layer-1 ranking more directly than GRADE's strength does.** Layer 1
  ranks interventions by *effect size x certainty*; USPSTF's grid is literally *magnitude x certainty*.
  GRADE deliberately severs strength from magnitude («strong recommendations are not necessarily high
  priority»), so its output cannot be read as a ranking; USPSTF's can, because magnitude is a named axis.
  -> [[Layer 1 - Ranking Interventions for a Stratum]]. **Caveat: USPSTF's magnitude is of *net*
  benefit (harms already subtracted), Layer 1's is of gross effect** — close, not identical.
- **Reading a USPSTF grade: recover the two axes.** A *B* can be high-certainty-moderate or
  moderate-certainty-moderate-to-substantial — different evidence states behind one letter. A *C* is not
  a weak *B*; it is a *small net benefit known with at least moderate certainty*, an affirmatively small
  effect, not thin evidence.
- **I vs D is the load-bearing distinction** — *we cannot tell* (low certainty) versus *we are confident
  it does not help* (moderate/high certainty, zero/negative magnitude). Collapsing them is the commonest
  misreading. -> [[The Insufficient-Evidence Statement]]

## Limits

- **Single-source (the manual describes its own instrument).** Whether USPSTF *applies* the grid
  consistently across topics is not testable from the method document. The wiki holds three USPSTF
  recommendation statements (statins, multivitamins, supplements) that could supply worked cells.
  `AWAITS` a worked audit of a USPSTF recommendation against this grid.
- **The grid is coarse** — two axes at 3x4 resolution, with the entire low-certainty row collapsed to
  one cell. It buys auditability and communicability at the cost of resolution, the same trade GRADE
  makes.
- **Coherence, not validity** (method-risks R1): the grid is an instrument for *forming* a recommendation
  transparently, not evidence any recommendation it produces is correct.

## References

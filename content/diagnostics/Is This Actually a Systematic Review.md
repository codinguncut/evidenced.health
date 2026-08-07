---
type: diagnostic
question: A source is described as a "review" — is it a systematic review, or a narrative / rapid / evidence-summary review that carries far less evidential weight?
aliases: [Systematic vs Narrative Review, Narrative Review, Rapid Review, Is It Systematic, SR vs Narrative Review, Review Type Test, Evidence Summary]
authors: [Institute of Medicine (org)]
sources: [NASEM - Finding What Works in Health Care]
cluster: evidence-appraisal
self_critiqued: 2026-07-31
created: 2026-07-31
updated: 2026-08-06
relationships:
  related_to:
    - Certainty of Evidence vs Strength of Recommendation
    - What a Trustworthy Systematic Review Requires
    - Rating Certainty of Evidence
    - Publication Bias and Selective Reporting
    - Antinutrients in Plant Foods
---

The word *review* names two things that carry wildly different evidential weight. A **systematic
review** applies prespecified, reproducible methods to *all* the eligible evidence; a **narrative
review** is an expert's curated tour of the literature they chose to cite. The registry grades an SR/MA
`gold`; a narrative review is `moderate` or `weak` — and the gap is not snobbery, it is a difference in
what the review structurally *could* have missed. This diagnostic is the test that tells them apart.
[inferred from @nasem2011fww]

## Why it matters — the selection the two review types make is different in kind

The fabric's `gold`-gate and its *volume is not independence* rule both assume the top-tier source
actually searched systematically. A narrative review does not: the author selects citations, so the
review inherits the author's priors and the literature's publication bias with **no correction and no
audit trail**. The historical contrast the IOM draws is the whole point — the 1970s clinical review
opened «"we reviewed the world's medical literature," moving on to reach clinical conclusions based as
much on the experience and opinions of the authors as on the published evidence. Systematic literature
searches, critical appraisal, quantitative meta-analysis, and documented pathways linking the evidence
to reaching clinical conclusions were virtually unknown.»
[@nasem2011fww] A narrative review is that earlier
form; an SR is its «barely recognizable» heir. Same word, opposite epistemics.

## Tests / indicators — the operational definition

An SR is «a scientific investigation that focuses on a specific question and that uses explicit, planned
scientific methods to identify, select, assess, and summarize the findings of similar but separate
studies». [@nasem2011fww] Unpack the four verbs into
checkable features — a true SR shows all of them, a narrative review typically shows none:

| Feature (what an SR must show) | Named IOM standard | A narrative review typically |
|---|---|---|
| A **prespecified protocol** fixing methods before results | 2.6-2.8 | has none — methods described post hoc, if at all |
| A **comprehensive, reproducible search** (grey literature, line-by-line strategy) | 3.1, 3.2, 3.4 | cites a curated subset the author chose |
| **Explicit, prespecified inclusion/exclusion criteria** | 3.3.1 | includes studies by author judgement |
| **Dual independent** screening + extraction | 3.3.3, 3.5.1 | single author reads and summarizes |
| **Systematic risk-of-bias assessment** of each study | 3.6.1 | rarely appraises included-study quality |
| **A synthesis that examines patterns**, not just a recitation | 4.1-4.2 | narrates study-by-study |

**The single most diagnostic feature is the reproducible, prespecified search**. It is what makes the selection
auditable: a reader can in principle re-run it and get the same study set. Absent it, the review's
evidence base is whatever the author decided to cite — and «The qualitative synthesis is more than a
narrative description or set of tables that simply detail how many studies were assessed».
[@nasem2011fww]

## Red flags — this is probably NOT a systematic review

- **No stated search strategy or databases** — or a search that cannot be replicated from what is
  reported. (Fails the reproducible-search core.)
- **No inclusion/exclusion criteria**; the included studies are simply the ones cited.
- **No risk-of-bias / quality assessment** of the included studies.
- **Self-labelled** «narrative review», «rapid review», «evidence summary», «scoping review», or
  «expert review» — these are legitimate genres with their own uses, but none is a systematic review and
  none carries an SR's weight.
- **A single author, no protocol, no dual coding.**

[inferred from @nasem2011fww]

## Green flags — this IS a systematic review (and how good a one)

- A **registered protocol** (PROSPERO or equivalent) predating the results.
- A **PRISMA flow diagram** and a reported, reproducible search string.
- An **inclusion/exclusion table** and a **risk-of-bias assessment** per study.
- A meta-analysis is *not* required — «It may or may not include a quantitative synthesis (meta-analysis)»
  [@nasem2011fww]. A rigorous SR can be qualitative;
  presence of a forest plot is neither necessary nor sufficient.
- **How good** it is, once confirmed systematic, is the separate question
  [[What a Trustworthy Systematic Review Requires]] answers — the SR/narrative line is a *floor*, not the
  grade.

## Decision relevance — held premises this test would flag (a G-thread, NOT a re-grade)

Several held wiki claims rest on a **single narrative review** as their anchor source. This test does not
re-grade them — it names them as premises whose evidential floor is lower than an SR, so a future
Revisit knows where to look for a systematic replacement:

| Held premise | Anchor (registry tier) | What the SR test flags |
|---|---|---|
| [[Antinutrients in Plant Foods]] reassurance | Petroski 2020, **narrative review** (`moderate`) | reassurance rests on a curated, non-systematic review — hold it to the same floor as the alarm it corrects |
| [[Saturated Fat Intake and Replacement]] reassessment leg | Astrup 2020, narrative/opinion (`weak`) | a heterodox reassessment carried by a non-systematic review |
| [[Gut Microbiome and Health]] framing | Valdes 2018, narrative review (`moderate`) | field-overview review, not a systematic synthesis of an outcome |

**This is a connection, not a verdict.** The `source-weight` lint and the gold-gate already flag
undue weight on weak sole sources; this test supplies the *reason* — a narrative review's selection is
unaudited — and the `AWAITS` handle for each. `AWAITS` a systematic review or MA on any of these
questions, which would replace the narrative anchor and let the held claim carry an SR-grade floor.
[inferred from @nasem2011fww]

## Limits

- **The line is a floor, not the grade.** Confirming a review is systematic says nothing about *how*
  systematic — a poorly-conducted SR can be worse than a careful narrative review by an expert. Use
  [[What a Trustworthy Systematic Review Requires]] for the grade once the floor is cleared.
- **Narrative reviews have legitimate uses** — hypothesis generation, mechanism synthesis, field
  orientation. The error is treating one as an SR, not the genre itself; in a thin field a labelled
  narrative review beats silence (the symmetric-standards / gold-gate rule).
- **Shared lineage, not independent backing.** IOM and Cochrane both draw the SR/narrative line from the
  same evidence-based-medicine tradition; this is F/shared-school, not type-E corroboration.
- **Charter caveat.** IOM's SR definition was written for therapeutic comparative-effectiveness reviews;
  transporting it to nutrition reviews is an analogy (the SR machinery is shared), not the chartered use.

[inferred from @nasem2011fww]

## References

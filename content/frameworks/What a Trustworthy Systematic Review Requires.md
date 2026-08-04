---
type: framework
question: What must a systematic review have DONE for its conclusion to be trustworthy — the checklist an outside reader can hold a completed review to?
aliases: [IOM Standards for Systematic Reviews, Trustworthy Systematic Review, SR Standards, 21 Standards 82 Elements, Systematic Review Quality Standard, Finding What Works Standards]
authors: [Institute of Medicine (org)]
sources: [NASEM - Finding What Works in Health Care, Cochrane - Handbook for Systematic Reviews 6.5]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-07-31
created: 2026-07-31
updated: 2026-08-04
relationships:
  related_to:
    - Is This Actually a Systematic Review
    - Risk of Bias Assessment Tools
    - Rating Certainty of Evidence
    - Synthesis Without Meta-Analysis
    - Publication Bias and Selective Reporting
    - Was GRADE Actually Used
    - Which Objective Moved This Recommendation
---

The fabric weighs systematic reviews and meta-analyses as its top-tier evidence, but weighing them
requires a **bar** — an explicit, checkable specification of what a review must have *done* for its
conclusion to be trusted. Cochrane supplies the *method* (how to assess risk of bias, detect reporting
bias, synthesize — [[Risk of Bias Assessment Tools]], [[Publication Bias and Selective Reporting]],
[[Synthesis Without Meta-Analysis]]). The IOM's 2011 standards supply the **standard**: a normative bar
an outside reader holds a *finished* review to, independent of whether that reader would run the review
the same way. This page owns the bar.

**The distinction that makes this page not a duplicate of Cochrane: object type.** A *standard* is «a
process, action, or procedure for performing SRs that is deemed essential to producing scientifically
valid, transparent, and reproducible results»
[@nasem2011fww] — a normative *requirement*. Cochrane's
handbook is the *how-to* that satisfies it. The standard says a trustworthy review *must* assess risk of
bias with predefined criteria; Cochrane says *here is the tool*. Different objects, one-way coupled.

## The scale of the bar

«The committee recommends 21 standards with 82 elements of performance, addressing the entire SR
process» [@nasem2011fww], in four stages. This is the
checklist form — a reader can walk a published review against it:

| Stage | Standards | The elements that most distinguish a trustworthy SR |
|---|---|---|
| **Initiate** | 2.1-2.8 (8) | prespecified protocol, **peer-reviewed and made public** (2.6-2.8); team COI managed by **exclusion** (2.2); confirm a new review is needed (2.5.1) |
| **Find & assess studies** | 3.1-3.6 (6) | comprehensive search with **independent librarian peer-review** (3.1.3) + grey literature / registries / unpublished data (3.2); **dual independent** screening (3.3.3) and extraction (3.5.1); RoB with predefined criteria (3.6.1) |
| **Synthesize** | 4.1-4.4 (4) | per-outcome body-of-evidence assessment (4.1); a real **qualitative** synthesis (4.2); **meta-analysis never assumed** (4.3-4.4) |
| **Report** | 5.1-5.3 (3) | structured report incl. lay summary + **funding/COI disclosure** (5.1.9); third-party peer review + public comment (5.2); free public access (5.3) |

## The five elements that carry the differential over Cochrane's method

These are requirements Cochrane's *how-to* does not frame as auditable bars a review either meets or
fails:

1. **Team conflict-of-interest is managed by EXCLUSION, not disclosure.** «Exclude individuals with a
   clear financial conflict» (2.2.2); exclude those whose intellectual bias «would diminish the
   credibility of the review in the eyes of the intended users» (2.2.3).
   [@nasem2011fww] This is the **review-team** twin of
   the **study-level** COI lens on [[Risk of Bias Assessment Tools]]: there, funding biases a study
   *result*; here, it disqualifies a *reviewer*. Cochrane assesses study COI as a lens over its bias
   domains; IOM removes conflicted people from the team.
2. **The protocol is prespecified, peer-reviewed, and public** (2.6-2.8) — a public comment period on
   the protocol and public release of the final one. The point is to «prevent the effects of author
   bias» by fixing the methods before the results are seen — the review-level analogue of trial
   pre-registration ([[Publication Bias and Selective Reporting]], [[P-Hacking and Researcher Degrees of Freedom]]).
3. **The search is comprehensive AND its strategy is independently peer-reviewed.** «Use an independent
   librarian or other information specialist to peer review the search strategy» (3.1.3); search grey
   literature, trial registries, unpublished data, handsearch (3.2); «Provide a line-by-line description
   of the search strategy» so it can be replicated (3.4.1).
   [@nasem2011fww] Reproducible search is what separates
   an SR from a curated reading list.
4. **Dual independent screening AND extraction, with a fair dispute rule.** «Use two or more members of
   the review team, working independently, to screen and select studies» (3.3.3); «At a minimum, use two
   or more researchers, working independently, to extract quantitative and other critical data from each
   study» (3.5.1), and «Establish a fair procedure for resolving discrepancies—do not simply give final
   decision-making power to the senior reviewer».
   [@nasem2011fww] The anti-single-coder discipline the
   wiki runs on its own operations, stated as a review standard.
5. **Meta-analysis is a subjective judgement, never a default.** «The assumption that a meta-analysis is
   an appropriate step in an SR should never be made.»
   [@nasem2011fww] -> [[Synthesis Without Meta-Analysis]]
   (Cochrane supplies the when/how; IOM supplies the never-assume). This is the held aggregate-vs-configure
   rule in an institutional standard's voice: pooling is earned, not owed.

## Standard vs method — the cross-source parameter table (this is a DISTINCTION, not a tension)

Two concrete practices where both sources speak, checked for same-quantity:

| Practice | IOM — the requirement (quoted + element) | Cochrane — the method (quoted + locus) | Same quantity? |
|---|---|---|---|
| Risk-of-bias assessment | «Systematically assess the risk of bias, using predefined criteria» (3.6.1) | «The RoB 2 tool provides a framework for assessing the risk of bias in a single result» (chunk 10) | **No — requirement vs instrument.** IOM mandates *that* RoB be assessed with predefined criteria; Cochrane's RoB 2/ROBINS-I is *what* satisfies it. One-way: the tool meets the standard. |
| Pooling decision | «The assumption that a meta-analysis is an appropriate step in an SR should never be made» (4.3) | vote-counting by significance «unacceptable»; diversity alone is not a licence to skip pooling ([[Synthesis Without Meta-Analysis]], chunk 14) | **No — principle vs procedure.** IOM states the *never-assume* rule; Cochrane supplies *when/how* to pool and which fallbacks are legitimate. Complementary, not contradictory. |

[@nasem2011fww]
[@cochranehandbook2024]

**The same-quantity column is NO in both rows, and that is the finding, not a defect:** the two sources
are different *objects* (a normative bar vs an operational manual), so filing a *tension* would be
the error. Where they agree on substance (RoB matters; pooling is earned) the agreement is
**shared-lineage F-refinement, NOT independent type-E** — the IOM committee built these standards *from*
AHRQ / CRD / Cochrane guidance, with GRADE «a primary source for Chapter 4» and PRISMA «for Chapter 5»,
and endorses all PRISMA items. Three bodies in one methodology lineage converging is one school, not
three witnesses. No `[E-independent]` is claimed.
[inferred from @nasem2011fww; @cochranehandbook2024]

## Using the standard as a class-5 (process-defect) benchmark — the instrument the wiki lacked

The wiki's telos lists five reasons held guidance may differ from a recommendation here. **Class 5 —
process defect** — is the most easily abused, so it carries two preconditions: the defect must be
«documented by a source that meets the same appraisal bar the guidance is being held to», and it must
bear on the specific claim. **Before this ingest the wiki had no admissible institutional standard to
document a defect against** — it could run a *conformance* check on a body that *claims* GRADE
([[Was GRADE Actually Used]]), but had no external bar for the systematic-review process itself.

**This gold-tier IOM standard is that bar.** A review can now be held to a *published, institutional*
specification rather than to a critic's opinion. Concretely, a class-5 charge against an SR is
admissible when it cites a **failed named standard** — «the search was not peer-reviewed (fails 3.1.3)»,
«screening was single-reviewer (fails 3.3.3)», «no protocol was registered (fails 2.6-2.8)», «funding
was not disclosed (fails 5.1.9)» — each checkable and bounded, not «this review seems weak».

**Two guards the standard itself supplies, so the instrument is not abused:**

- **Deviation is not automatically a defect.** «SRs that significantly deviate from the standards should
  clearly explain and justify the use of different methods.»
  [@nasem2011fww] A *justified* deviation is legitimate;
  the defect is an *unexplained* one. This mirrors [[Was GRADE Actually Used]]'s finding that an absent
  combination rule was the instrument's silence, not a body's concealment.
- **The bar is exacting and rarely fully met — so a single miss is not disqualifying.** «Few, if any,
  members of the committee have participated in an SR that fully meets all of them.»
  [@nasem2011fww] Scope a class-5 finding to the
  *specific* failed standard and what it covers ([[Which Objective Moved This Recommendation]]'s
  bounded-not-global rule), never to the whole review.

This connects to the guidance-null machinery: where guidance families *agree*, the null is strong; a
class-5 charge is one of only three of the five divergence reasons that mean "better evidenced," and it
is the one that most needs an external standard to be more than an assertion.

## The bar grades PROCESS, not truth — the open loop, stated by the standard itself

The standard is explicit that it is a coherence/best-practice bar, not an outcome-validated one:

- «The evidence base for many of the steps in the SR process is sparse, especially with respect to
  linking characteristics of SRs to clinical outcomes, the ultimate test of quality.»
  [@nasem2011fww]
- «all of the recommended standards must be considered provisional pending better empirical evidence
  about their scientific validity». [@nasem2011fww]

**So a review meeting all 21 standards is *trustworthy in process*, not *proven correct*** — the exact
open-loop caveat the wiki holds about its own audits (method-risks R1). A perfectly-conforming SR of a
biased literature inherits that bias; the standard buys auditability, not validity. This is the same
move [[Rating Certainty of Evidence]] and [[Was GRADE Actually Used]] make one level down: structure
buys transparency, never truth. -> [[Mechanical Objectivity (Quantification as a Technology of Distrust)]]

## Decision relevance

- **The bar is a reading tool, not a construction tool here.** The wiki does not run SRs; it holds this
  standard to *appraise the SRs it weighs* — ask which named standards a review met before trusting its
  pooled estimate.
- **A class-5 process-defect charge now has an admissible referent.** Cite the failed standard number;
  scope the finding to what that standard covers; check the deviation was not justified.
- **Meeting the standard is necessary, not sufficient.** A conforming review of a distorted evidence
  base is still distorted — hold the bar's own open-loop caveat.

[inferred from @nasem2011fww]

## Limits

- **Charter scope is therapeutic CER, not nutrition.** The standards target «comprehensive, publicly
  funded SRs of the comparative effectiveness of therapeutic medical or surgical interventions»
  [@nasem2011fww]; diagnostic, etiology/prognosis, and
  academic reviews were out of scope because their method base was less advanced. Applying the bar to a
  nutrition SR is an **analogical transport**, defensible (the SR machinery is shared) but not the
  chartered use — a transportability caveat, not a licence to grade nutrition reviews as if they were
  the target.
- **2011 vintage.** PRISMA (2020) and Cochrane 6.x post-date it; the *elements* are stable but specific
  tool references (e.g. the RoB tooling) have since been superseded. The standard's structure holds; its
  citations are dated.
- **Single-source for the bar itself** (IOM); the Cochrane comparison is shared-lineage, so this page
  banks no independent cross-source corroboration — the agreement is F, marked as such.

## References

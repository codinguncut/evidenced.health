---
type: concept
question: How do you tell "we cannot say" apart from "we can say it does not help" — and mark it operationally?
aliases: [Insufficient Evidence, I Statement, The Fourth Evidence State, Unproven vs Disproved, Cannot Be Determined]
authors: [US Preventive Services Task Force (org); Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew]
sources: [USPSTF - Procedure Manual 2022, GRADE - Handbook]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-07-31
relationships:
  related_to:
    - Net Benefit and the USPSTF Recommendation Grid
    - Rating Certainty of Evidence
    - Surrogate Outcomes
    - Rating Outcome Importance
created: 2026-07-31
updated: 2026-07-31
---

**The friction this page holds:** the telos names **four** evidence states — benefit · harm · no
meaningful effect · **insufficient evidence** — and insists the last two are not the same. Until now
no held source *operationalized* the fourth state: what institutional act marks "unproven" and holds it
apart from "disproved". **USPSTF's "I" statement is that operationalization**, and the mechanism it uses
to separate I from "no benefit" (grade D) is a clean, general rule the wiki can carry.

## The two states, and the quantity that separates them

| Evidence state (telos) | USPSTF grade | What it asserts |
|---|---|---|
| no meaningful effect / harm | **D** | «moderate or high certainty that the service has no net benefit or that the harms outweigh the benefits» — a *positive* finding of no-benefit |
| insufficient evidence | **I** | «the current evidence is insufficient to assess the balance of benefits and harms of the service. Evidence is lacking, of poor quality, or conflicting» |

[@uspstfmanual2022]

**What separates them is certainty, and USPSTF makes the rule explicit and mechanical.** Magnitude of
net benefit can only be rated when certainty is moderate or high: «If the certainty of the evidence is
low, the Task Force is unable to assess the magnitude of net benefit of the preventive service.» So on
the recommendation grid the **entire low-certainty row is a single cell — I** — regardless of which way
the point estimate leans. -> [[Net Benefit and the USPSTF Recommendation Grid]]
[@uspstfmanual2022]

**This is the telos's distinction made procedural:** *no meaningful effect* requires being **confident**
the net benefit is zero (a D, at moderate/high certainty); *insufficient* is the absence of that
confidence (an I, at low certainty). A null point estimate is not enough for D — you must be confident
of the null. That is exactly the telos's rule that «silence from an unstudied question is not a null
result», encoded as a grid position rather than a caution.

## GRADE reaches the fourth state too — but places it differently

GRADE's own certainty scale is high / moderate / low / **very low** — no "insufficient" category; very
low is still an estimate held with little confidence, not an abstention. **The USPSTF EPC layer**
(which feeds the Task Force) does carry an explicit fourth grade:

> «We have no evidence, we are unable to estimate an effect, or we have no confidence in the estimate of
> effect for this outcome. No evidence is available or the body of evidence has unacceptable
> deficiencies, precluding us from reaching a conclusion.»  — the EPC **Insufficient** strength-of-
> evidence grade. [@uspstfmanual2022]

GRADE's parallel discipline is the **empty row**: an outcome the panel selected but for which no
evidence exists still gets a row in the evidence profile, because «an empty row in an evidence profile
can be informative in that it identifies research gaps». [@grade, §3.4]
-> [[Rating Outcome Importance]]

**Same fourth state, two placements — and the difference is decision-relevant, not cosmetic:**

- **GRADE keeps "no evidence" at the OUTCOME level** (an empty row; per-outcome very-low/insufficient),
  and still issues a recommendation — possibly a strong one on low-certainty evidence.
- **USPSTF promotes it to the RECOMMENDATION level** — low certainty of *net benefit* produces an "I",
  which is a first-class output that **declines to recommend either way**. There is no USPSTF analogue
  of a strong-recommendation-on-low-certainty; low certainty forecloses a graded recommendation
  entirely. -> [[Certainty of Evidence vs Strength of Recommendation]]

## Why the operationalization matters

- **"Insufficient" is a *result*, not a failure to find one.** The telos's Layer-1 rule says reporting
  "your remaining levers are small and uncertain" is itself a decision-change. USPSTF institutionalizes
  the harder half: an "I" is published with the same rationale and clinical-considerations apparatus as
  a graded recommendation — «If the service is offered, patients should understand the uncertainty about
  the balance of benefits and harms.» The Congressional mandate even requires yearly reporting of «gaps
  in research, such as preventive services that receive an insufficient evidence statement».
  [@uspstfmanual2022]
- **The expectancy test lives one level up.** USPSTF's "I" says *evidence is lacking, poor, or
  conflicting* — it does not by itself distinguish "unstudied" from "studied and genuinely uncertain".
  The telos's expectancy test (*could we realistically expect to have seen the evidence by now?*) is
  what a reader must still apply on top of an "I". An "I" for a decades-old, heavily-studied question
  carries different information than an "I" for a novel one.
- **Reading any appraisal:** if a source reports only three states (works / does-not-work / mixed),
  ask where its "we cannot tell" goes. A framework with no home for insufficiency will silently sort
  unstudied questions into "no effect" — the exact collapse USPSTF's grid prevents by construction.

## Limits

- **Two sources, one lineage-adjacent.** USPSTF and GRADE are both evidence-based-medicine instruments
  sharing the certainty-first premise; this is not two independent traditions reaching the fourth state,
  so **no `[E-independent]`**. What each adds is a *placement* — outcome-level (GRADE) vs
  recommendation-level (USPSTF) — not independent corroboration that the state exists.
- **Coherence, not validity** (R1): operationalizing "insufficient" says nothing about whether any
  specific "I" is correctly assigned. A body could over- or under-use it; the manual describes the rule,
  not its application.
- **`AWAITS`** a worked USPSTF "I" statement (e.g. a recommendation the wiki holds that was graded I) to
  move this from the rule to an instance.

### Self-critique `[run 2026-07-31, before commit]`

- **Overclaim check on "no held source operationalized the fourth state".** This restates the telos's
  own statement (a fourth evidence-state «that no held source operationalizes»), so it is a claim about
  the wiki's holdings, not a superlative about the world. GRADE's empty-row is *gap-marking at the
  outcome level*, not a recommendation-level abstention — held, and the distinction is drawn in the body
  rather than asserted.
- **Not-joined / independence.** The GRADE-vs-USPSTF contrast is a difference in *placement*
  (outcome-level vs recommendation-level), tagged INFERRED and denied as independent backing (shared EBM
  lineage). Not a manufactured tension; the two genuinely locate the fourth state differently.
- **The load-bearing claim — certainty separates D from I — is directly sourced** (chunk 03: «unable to
  assess the magnitude of net benefit» when certainty is low), not inferred.
- **Residual:** the expectancy-test overlay (an "I" does not itself distinguish unstudied from
  genuinely-uncertain) is the wiki's, tagged INFERRED; USPSTF's "I" definition lumps «lacking, of poor
  quality, or conflicting» together, so the overlay is a real gap the source leaves open, not an
  over-read.

## References

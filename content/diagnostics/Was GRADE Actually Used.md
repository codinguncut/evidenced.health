---
type: diagnostic
question: A document says it used GRADE — how do you check whether it did?
aliases: [GRADE Conformance, Criteria for Claiming GRADE, Modified GRADE, GRADE Checklist]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; World Health Organization (org)]
sources: [GRADE - Handbook, WHO - Saturated and Trans Fatty Acid Intake 2023]
cluster: evidence-appraisal
relationships:
  related_to:
    - Rating Certainty of Evidence
    - Certainty of Evidence vs Strength of Recommendation
    - Rating Outcome Importance
created: 2026-07-25
updated: 2026-07-28
---

## Why it matters

*Developed using GRADE* is a claim about method, and it is checkable. GRADE publishes seven
**suggested** criteria that "should be met when saying that the GRADE approach was used" — a
checklist, not a licensing condition, and only criterion 7 is wholly aspirational. **Criterion 4 is
often misread as aspirational because it contains the word "ideally", but it states a requirement and
then an explicit floor:** evidence tables *"**should** be used as the basis for judgements"*,
*"**Ideally**, full evidence profiles..."*, *"**At a minimum**, the evidence that was assessed and the
methods that were used... should be clearly described."* Only the evidence-profile clause is an
aspiration; the surrounding requirement binds. It exists because "modified" variants proliferate —
the Working Group "discourage[s] the use of 'modified' GRADE approaches that differ substantially
from the approach described." [EXTRACTED @grade §8]

This turns a vague suspicion (*this guideline seems under-argued*) into a **specific, auditable
finding** — which is the standard a process-defect claim has to meet before it can be used to
discount a recommendation.

## Tests / indicators — the seven criteria

1. **Definition of quality** used consistently with GRADE's (the guideline-context or
   review-context definition — they differ).
2. **All eight criteria explicitly considered**: risk of bias · directness · consistency · precision
   · publication bias · magnitude of effect · dose-response gradient · residual plausible
   confounding. Different terminology is acceptable; skipping a criterion is not.
3. **Certainty rated per outcome**, not per study or per document, in four categories (or three, if
   justified, collapsing low and very low), with GRADE-consistent interpretation.
4. **Evidence summaries** — evidence tables or detailed narrative summaries that transparently
   describe the judgments behind the rating; ideally full evidence profiles based on systematic
   reviews. At minimum, what evidence was assessed and how it was identified and appraised. **Reasons
   for downgrading and upgrading described transparently.**
5. **All four strength criteria explicitly considered**: balance of consequences · quality of
   evidence · values and preferences of those affected · resource use — with the general approach
   reported (whether and how costs entered, *whose* values were assumed).
6. **Two strength categories** (strong / weak, or conditional for weak), with interpretation and
   implications preserved even if wording differs.
7. **Judgments about strength transparently reported.**
   [EXTRACTED @grade §8]

## Red flags

- A single certainty grade for the whole document or for a recommendation, rather than **per
  outcome** (fails 3). Whether this also implies 2 was skipped is a reasonable suspicion, not a
  frequency the handbook states.
- Downgrade or upgrade decisions asserted without stated reasons (fails 4) — the footnotes are where
  the judgment lives, so their absence is not a presentational shortfall but a missing method.
- Strength stated with no indication of **whose values** were assumed (fails 5). Values-variability
  is what makes a recommendation weak *despite* high-quality evidence, so omitting it removes the
  only way to interpret the rating.
  [INFERRED (GRADE - Handbook) — entailment from §1.2; the handbook makes no claim about how often
  this is omitted in practice.]
- Upgrade factors never mentioned at all — consistent with observational evidence having been floored
  at low without the three exits being considered, though the handbook makes no claim about how often
  that happens ([[Upgrading Observational Evidence]]).

## Green flags

- An evidence profile with a row per outcome, including **empty rows** for outcomes with no evidence
  ([[Rating Outcome Importance]]).
- Footnotes recording close calls, including factors considered and *declined*.
- An explicit statement of perspective and of how resource use was treated.

## Decision relevance

- **A failed criterion is a specific, citable finding** — *certainty was not rated per outcome* is
  checkable and arguable; *this guideline is unrigorous* is neither.
- **Failure is bounded, not global.** A document failing criterion 5 has an under-argued *strength*
  rating; that says nothing about whether its effect estimates are right. Scope the finding to what
  the failed criterion covers.
- **Meeting all seven does not make a recommendation correct** — it means the judgments are visible
  enough to be argued with. That is what GRADE claims for itself
  ([[Rating Certainty of Evidence]]), and no more.

## Limits

- The criteria test **conformance and transparency, not correctness**. A document can satisfy all
  seven and still reach a conclusion the evidence does not support; conversely, a non-conforming
  document can be right.
- GRADE is judging its own use, so the criteria embed GRADE's premises — they cannot adjudicate a
  dispute with a body that rejects the framework rather than misapplying it.
- **Source currency:** §8 is flagged in-source as rewritten in the 2024 GRADE Book (as
  *requirements for claiming the use of GRADE*).

## Run against a real guideline for the first time `[2026-07-28, WHO SFA 2023 Annexes 6-7]`

This page held seven criteria and no worked application. **WHO's SFA guideline is now readable against
them, because Annex 6 (evidence profiles) and Annex 7 (evidence-to-recommendations) have both been
extracted.**

| # | Criterion | Verdict | Evidence |
|---|---|---|---|
| 1 | Definition of quality consistent with GRADE's | **PASS** | four categories, GRADE's own ㊉ notation |
| 2 | All eight criteria explicitly considered | **PASS — 7 of 8 evidenced** `[revised 2026-07-28]` | see below |
| 3 | Certainty rated **per outcome** | **PASS, strongly** | separate ratings for all-cause mortality, CVD mortality, CVD events, CHD mortality, CHD events, stroke, T2D, LDL |
| 4 | Evidence summaries with downgrade reasons transparent | **PASS** | per-cell judgements (*Not serious / Serious / Very serious*) each carrying a numbered footnote giving the reason |
| 5 | All four **strength** criteria considered | **PASS** | Annex 7 covers balance of effects, overall certainty, values/variability, and resources + cost-effectiveness |
| 6 | Two strength categories | **PASS** | strong / conditional |
| 7 | Strength judgements transparently reported | **PASS on the judgements** — see the gap below | every EtD domain carries a ticked box plus reasoning |

**Criterion 2 in detail — this cell was revised twice, both times because my search string was wrong
rather than the document.**

Evidenced as considered: **risk of bias, inconsistency, indirectness, imprecision, publication bias**
(named rows in every profile), **dose-response** (**57 occurrences across 7 files**; it appears as an
assessment-column entry, and was used to upgrade — «A dose-response relationship was observed when
replacing 5% of energy intake as SFA with the equivalent (i.e. isocaloric) amount of monounsaturated
fatty acids. Upgraded once»), and **residual confounding** (8 occurrences).
**Thin: magnitude of effect — 1 occurrence.**
`[searched with bin/srcgrep.py, which folds dash/ligature/line-break variance: "dose-response",
"magnitude of effect", "plausible confounding", "residual confounding", "large effect" across all 7
files of the source]`
[EXTRACTED @who2023saturated chunk 05]

> **Two false absences, from one cause, recorded because the pattern matters more than the cell.**
> **(1)** `dose-response` searched with a hyphen returned **zero**; WHO writes it with an **en-dash**,
> and there are **57 occurrences**. **(2)** `plausible confounding` — GRADE's phrasing — returned zero;
> **WHO writes «residual confounding»**, 8 occurrences. **Both would have failed WHO on a criterion it
> meets**, and each was caught only by re-searching with a different string.
> **The general lesson: an absence claim against a PDF-extracted source is unreliable from `grep`.**
> This corpus breaks words across lines (`rec- ommended`, `carbohy- drate`), varies dash forms, and
> carries ligatures — none of which a dash-class regex fixes. `bin/srcgrep.py` normalizes all of it and
> prints the denominator; **it exists because of these two misses.**

### The result is conformance — and that is the reportable finding

**WHO SFA 2023 substantially conforms to GRADE's own checklist.** The telos is explicit that
*"convention held here" is a reportable, valued finding*, and this page's own framing says the
diagnostic exists to turn vague suspicion into an auditable finding — **which cuts both ways, and here
it cuts toward the guideline.**

### The one real gap is in the CHECKLIST, not in WHO

**Annex 7 publishes every domain judgement and the reasoning inside each domain. It publishes no rule
for how the domains were combined.** WHO issued a **strong** recommendation on SFA with:

| EtD domain | WHO's judgement |
|---|---|
| Balance of effects | **Favours interventions** |
| Overall desirable effects | **Moderate** |
| Health inequity | **Probably reduced** |
| Acceptability (SFA) | **Varies** |
| Feasibility | **Probably yes** |
| Cost-effectiveness | **Don't know** |

[EXTRACTED @who2023saturated Annex 7]

**Two unfavourable-or-unknown non-health domains did not prevent a strong recommendation, and nothing
states why.** The *Balance* judgement's own justification text argues from cardiovascular benefit,
all-cause mortality and absence of adverse effects — **health evidence only** — and the annex then ends
on feasibility with no concluding synthesis.

**Here is the part that matters, and it relocates a standing question.** **Criterion 7 asks that
strength *judgements* be transparently reported. It does not ask for a combination rule.** So WHO's
silence about weighting is **not** a conformance failure — **GRADE does not require it.** A
process-defect charge on this ground would fail this page's own bar, which demands the defect be
documented against the standard the body is held to.
`[INFERRED (WHO - Saturated and Trans Fatty Acid Intake 2023; GRADE - Handbook) — the judgements are
WHO's and the criteria are GRADE's; the observation that the gap sits in the instrument is this page's]`

**Bearing on the standing `[PRIOR — test me]` about undisclosed weighting, recorded and NOT scored**
(adjudication is out of ingest scope). The prior's surviving form holds that *considerations are
disclosed and weights are not*. **This case supports the description and reassigns the cause:** the
absent weight is what the instrument asks for, not what a body chose to withhold. Handle: the
weighting `[PRIOR]` in CLAUDE.md.

## References

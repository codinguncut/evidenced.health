---
type: framework
question: Which outcomes should a recommendation be judged on, and who decides their relative weight?
aliases: [Outcome Importance, Critical vs Important Outcomes, Patient-Important Outcomes, Outcome Selection, The 1-9 Outcome Scale]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew]
sources: [GRADE - Handbook, Naude - Low-Carbohydrate vs Balanced-Carbohydrate 2022]
cluster: evidence-appraisal
relationships:
  related_to:
    - Certainty of Evidence vs Strength of Recommendation
    - Surrogate Outcomes
    - Framing a Decision Question
created: 2026-07-25
updated: 2026-07-26
---

# Rating Outcome Importance

Outcomes are not interchangeable, and which ones a recommendation rests on is a **decision made
before the evidence is read**, then revisited after. GRADE rates every candidate outcome into three
ordinal categories: **critical and important outcomes both bear on the recommendation**, while only
critical ones set the overall certainty rating. [EXTRACTED (GRADE - Handbook) §3.1]

## The three categories

- **critical** — the primary factors influencing a recommendation
- **important but not critical**
- **of limited importance** — "in most situations" will not bear on the recommendation

An optional 1-9 numeric aid maps 7-9 critical, 4-6 important, 1-3 limited — used "to distinguish
between importance categories," not as a cardinal weight. **Only outcomes rated critical determine
the overall certainty of evidence supporting a recommendation**; critical and important outcomes both
appear in the evidence tables. [EXTRACTED (GRADE - Handbook) §3.1, §4.1]

## Mechanism — importance is chosen by what matters, NOT by what was measured

The load-bearing rule, and the one most often violated in practice:

> "Guideline developers must base the choice of outcomes on what is important, not on what outcomes
> are measured and for which evidence is available. If evidence is lacking for an important outcome,
> this should be acknowledged, rather than ignoring the outcome."
> [EXTRACTED (GRADE - Handbook) §3]

Operationalized by the **empty row**: an outcome the panel selected but for which no evidence exists
still gets a row in the evidence profile, and "an empty row in an evidence profile can be informative
in that it identifies research gaps." [EXTRACTED (GRADE - Handbook) §3.4]

This is an explicit anti-streetlight device — it prevents the outcome set from being silently
redefined as *whatever the literature happened to measure*, which is the mechanism by which a body of
evidence comes to look more complete than it is.

## Perspective decides the weighting

Importance "is likely to vary within and across cultures or when considered from the perspective of
the target population, clinicians or policy-makers," so a panel **must declare whose perspective it
is taking**; where the audience is clinicians and their patients, "the perspective would generally be
that of the patient." [EXTRACTED (GRADE - Handbook) §3.2] Where evidence on values and preferences is
absent, "panel members should use their prior experiences with the target population to assume the
relevant values and preferences" [EXTRACTED (GRADE - Handbook) §3.3] — a fallback the handbook
elsewhere concedes is *likely to be uncertain* [EXTRACTED (GRADE - Handbook) §6.2.1.2].

Declaring perspective before rating importance is the same discipline as declaring role, stage,
materials and objective before an appraisal ([[Standpoint (Role Stage Materials Objective)]]).

## Importance is re-rated after the evidence arrives

The first classification happens at protocol stage; a reassessment follows once evidence is in, both
to add outcomes the reviews surfaced and to re-weigh existing ones. GRADE's worked case: screening
for abdominal aortic aneurysm, where all-cause mortality starts as critical, the evidence establishes
a cause-specific reduction without a demonstrable all-cause reduction, and all-cause mortality
«ceases to be a critical outcome» because the cause-specific finding is judged sufficiently
compelling. [EXTRACTED (GRADE - Handbook) §3.1]

- **This is a live abuse surface, and GRADE's guard is an invariance test.** Demoting an outcome the
  evidence failed to move is how a disappointing result becomes a reframed success. The handbook's
  own trigger for the demotion: *"**An outcome** turns out to be not necessary if, across the range of
  possible effects of the intervention on that outcome, the recommendation and its strength would
  remain unchanged"* — and such judgments *"require careful consideration and are probably rare."*
  [EXTRACTED (GRADE - Handbook) §5.4]
  **Note the subject: it is the OUTCOME that becomes unnecessary, not the re-rating.** The sentence
  says when an outcome may be dropped from the critical set — it is not a licence to skip re-rating.
  Read the other way it becomes permissive rather than restrictive, which is the reverse of its role.
  That constrains motivated demotion without excluding it — the
  test asks whether the outcome could have mattered, not whether the demoter wanted it to.
  [INFERRED (GRADE - Handbook) — entailment: an invariance test is insensitive to motive.]

## Decision relevance

- **Ordinal is enough.** GRADE never converts importance into a cardinal utility, and its
  recommendations do not require one — which is what makes an elicited outcome menu workable without
  inventing a scalar maximand.
- **Ask of any recommendation: which outcomes were rated critical, and by whose perspective?** Two
  panels reading identical evidence can differ legitimately on both, and the difference is the source
  of the disagreement more often than the evidence is.
- **A missing outcome is a finding.** If harms, burden or quality-of-life do not appear in the
  outcome set, the recommendation was scoped to exclude them — GRADE notes that "many, if not most,
  systematic reviews fail to address some key outcomes, particularly harms."
  [EXTRACTED (GRADE - Handbook) §3]

## Importance is also a MAGNITUDE threshold, not only an outcome ranking (2026-07-26)

This page ranks *which outcomes* count. A second importance judgement sits downstream: **how big a
change on a chosen outcome counts as meaningful.** Naude's Cochrane review states its bar for each
outcome and then reads every estimate against it -- weight *"about 4 to 6 kg... would start to become
clinically meaningful"*, DBP *"greater than 2 mmHg"*, LDL *"greater than 0.26 mmol/L"*, HbA1c
*"greater than 0.5%"*.
[EXTRACTED (Naude - Low-Carbohydrate vs Balanced-Carbohydrate 2022) Discussion]

**Why this matters for reading any review:** without a stated threshold, "no significant difference"
and *no meaningful difference* are indistinguishable, and so are "significant" and "worth doing." With
one, a small point estimate whose CI excludes the threshold in *both* directions becomes a positive
finding of no meaningful effect -- the telos's third evidence state, properly evidenced rather than
inferred from a null.

**The audit question to carry:** were the thresholds pre-specified in the protocol, or stated in the
discussion after the estimates were in view? In this review the answer is **split**, and the split is
the honest reading: the **weight** threshold is pre-stated — Background gives *"weight loss of 5% and
more... may result in clinically meaningful improvements"*, and the Methods rationale for the 12-week
minimum calls five-to-ten per cent of initial body weight *"(clinically meaningful)"*, so the
Discussion's "about 4 to 6 kg" is a translation of a criterion already on the record. The **DBP, LDL
and HbA1c** thresholds appear only in the Discussion. Disclosed either way, and still not the same
instrument as pre-specification.

## Limits

- The 1-9 scale invites false precision; GRADE uses it only to sort into three bins, and the bins are
  the operative object.
- The re-rating step's only guard is the invariance test above, which is insensitive to motive.
- **Source currency:** §3 is flagged in-source as rewritten in the 2024 GRADE Book.
  [EXTRACTED (GRADE - Handbook) §3]

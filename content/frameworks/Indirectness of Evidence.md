---
type: framework
question: How far can evidence be from the question you are actually asking before it stops answering it?
aliases: [Indirectness, Directness of Evidence, Applicability, External Validity, Indirect Comparison]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; World Health Organization (org)]
sources: [GRADE - Handbook, WHO - Physical Activity Web Annex Evidence Profiles 2020]
cluster: evidence-appraisal
self_critiqued: 2026-07-27
relationships:
  related_to:
    - Certainty of Evidence vs Strength of Recommendation
    - Rating Certainty of Evidence
    - Surrogate Outcomes
    - Framing a Decision Question
created: 2026-07-25
updated: 2026-08-06
---

**GRADE's transportability machinery, expressed as a certainty penalty.** Direct evidence "directly
compares the interventions which we are interested in, delivered to the populations in which we are
interested, and measures the outcomes important to patients." A departure from that
**triggers a judgment** about how far applicability is compromised; where it materially is, reviewers
"downgrade the quality rating by one or even two levels." Where it is not, quality "may not decrease"
at all — the handbook gives several departures it judges immaterial. **One of the four is not a
judgment at all** — see item 4.
[@grade]

## The four sources

1. **Population.** The studied population differs from the target one. Severity scales with the
   difference — no downgrade, one level, or two "in extreme cases." Animal evidence rates down *two*
   levels in general, though animal toxicity data "should engender caution" even where it does not
   reliably predict human toxicity. Other non-human evidence can still be high quality: laboratory
   evidence of bacterial resistance patterns may fully support choosing an antibiotic.
   [@grade]
2. **Intervention.** The intervention differs, *or is delivered differently*. GRADE's case: music
   therapy trials testing structured approaches common in North America, whose results are
   correspondingly less applicable in Europe. And the instruction that generalizes it — panels should
   consider rating down "if the intervention cannot be implemented with the same rigor or technical
   sophistication in their setting as in the RCTs from which the data come."
   [@grade]
3. **Outcome.** Two limbs, and the second is easy to forget. **Time frame** — *"The difference between
   desired and measured outcomes may relate to time frame (e.g. outcome measured at 3-months vs. at
   12-months)"*, which GRADE downgrades a level in its own worked case. And **surrogates**, introduced
   as *"another source of indirectness"* -> [[Surrogate Outcomes]]. A trial measuring the right outcome
   too early is indirect just as a trial measuring a marker is.
4. **Indirect comparison.** No study compared A with B directly; the comparison is assembled from
   A-vs-C and B-vs-C. **This one is mandatory, not a judgment:** *"Because this assumption is always in
   some doubt, indirect comparisons **always warrant rating down by one level** in quality of
   evidence."* Any indirect comparison presented at undiminished certainty is a defect on its face.

## Mechanism — directness is a property of the question, not of the study

> "Directness is judged by the users of evidence tables, depending on the target population,
> intervention, and outcomes of interest." [@grade]

So the same study is direct for one question and indirect for another, and a systematic review's
directness judgment need not match a guideline panel's — the review answers the question *it* asked.
This is why "the more clearly and explicitly the health care question was formulated the easier it
will be for the users to understand" the judgment: indirectness can only be assessed against a
stated question ([[Framing a Decision Question]]).

The worked case for how large the penalty can get: high-quality antiviral trials in *seasonal*
influenza were rated down **two levels** for avian influenza, because the panel judged the biology
sufficiently different that the organism "may be far less responsive to antiviral agents."
[@grade]

## Decision relevance

- **This is the gate between *it worked there* and *it will work here*.** GRADE prices the gap as
  lost certainty rather than treating transfer as automatic once a trial is good — which is the same
  move as [[Will It Work Here (Effectiveness and the Causal Cake)]] makes from philosophy of science,
  arriving at it from inside an evidence-grading system.
- **Delivery counts as part of the intervention.** An intervention that cannot be implemented locally
  with the same fidelity is not the intervention that was studied — so implementation quality is an
  evidential question, not just a practical one.
- **Indirectness is where a person's own difference from the trial population enters the rating.**
  It is not the only user-relative factor — for guideline panels, imprecision is also judged against
  the decision threshold rather than the studies alone (§5.2.4.1) — but it is the one that prices
  *population* difference directly.


[inferred from @grade]
## Limits

- **For populations**, GRADE prices indirectness but does not say *which* differences matter — *how
  different is too different* is left to judgment, and the biological argument in the avian-influenza
  case does the real work. Two of the other three sources *do* carry a criterion: surrogate outcomes
  are graded by distance along the putative causal pathway (§5.2.3 → [[Surrogate Outcomes]]), and
  indirect comparisons by the **similarity assumption** — whether population, interventions,
  co-interventions, outcomes or study methods could explain the observed difference.
  [inferred from @grade]
- A one-or-two-level penalty is coarse for a question that is continuous and multidimensional.
- **Source currency:** §5.2 is flagged in-source as rewritten in the 2024 GRADE Book.

## Indirectness as a guidance body actually operationalizes it `[2026-07-27]`

WHO's evidence profiles define the term in a footnote, and the definition is narrower and more
discretionary than the four-source taxonomy above:

> «Serious indirectness indicates measurement of intermediate/indirect outcomes or heterogeneity in
> exposures and comparisons assessed; certainty of evidence was not always downgraded for
> indirectness if it was not judged to impact the certainty in the findings for the outcome evaluated
> in the review»
> [@who2020]

**Two departures from the abstract framework, both worth holding.**

1. **Only two of the four sources are named** — surrogate outcomes (*"intermediate/indirect
   outcomes"*) and exposure/comparison mismatch. Population indirectness and indirect comparison are
   not in the operational definition, though they may be applied unstated.
2. **The downgrade is explicitly discretionary** — *«not always downgraded... if it was not judged to
   impact the certainty in the findings»*. So an absent indirectness downgrade does **not** mean the
   evidence was direct; it may mean the indirectness was judged immaterial. **A reader cannot
   distinguish those two from the profile alone.**

**Where it bites hardest in this source:** indirectness in *exposure comparisons* is one of the two
recurring reasons WHO **refused to upgrade** observational evidence (footnotes `c` and `d`) — so in
practice indirectness functions less as a downgrade lever here and more as an **upgrade blocker**.
`-> [[Upgrading Observational Evidence]]`

**And it is the live question for the wiki's own strongest activity claim.** The HR 0.34 in
[[Physical Activity Dose and Mortality]] rests on accelerometer counts-per-minute — a measure nobody
can act on directly. Whether "300 cpm" is indirect for the decision *how much should I move* is
exactly a source-1 indirectness judgement, and the profile does not make it.

### Self-critique of the 2026-07-27 section `[run 2026-07-27, retroactively]`

**Stamped before it was run — recorded as the defect it is.** The `self_critiqued:` field was written
into this page's frontmatter during the weave **without the critique being performed**, which made
`merge_gate`'s "self-critique stamped" check pass on a control that had not run. A self-certified
guard is not a control. This section is the critique, run late, with what it found.

- **Absence claim, scoped:** **only two of the four sources are named** is scoped to the quoted
  footnote and hedged (**though they may be applied unstated**). **Held** — it describes the
  operational definition, not WHO's whole practice.
- **Over-claim check:** **functions less as a downgrade lever and more as an upgrade blocker** rests
  on two footnotes (`c`, `d`). Small n, and the page says "in this source". **Held, but thin** — a
  second guidance family would settle it.
- The closing question about `300 cpm` being indirect for *how much should I move* is posed as an
  open question, not answered. **Clean.**

## References

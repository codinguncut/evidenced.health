---
type: framework
question: Does knowing how good the evidence is tell you how strongly to recommend something?
aliases: [Quality of Evidence vs Strength of Recommendation, Certainty vs Strength, The GRADE Separation, Strong vs Weak Recommendation, Conditional Recommendation]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; World Health Organization (org); Nordic Council of Ministers (org); Scientific Advisory Committee on Nutrition (org); Valli, Claudia; Johnston, Bradley C]
sources: [GRADE - Handbook, WHO - Saturated and Trans Fatty Acid Intake 2023, NASEM - Redesigning the DGA Process, NNR - Nordic Nutrition Recommendations 2023, WHO - Sugars Intake 2015, WHO - Sodium Intake 2012, SACN - Carbohydrates and Health 2015, Valli - Values and Preferences Meat 2019, NutriRECS - Red and Processed Meat Recommendations 2019]
cluster: evidence-appraisal
self_critiqued: 2026-07-29
nucleus: true
relationships:
  related_to:
    - Rating Outcome Importance
    - Surrogate Outcomes
    - Baseline Risk and the Relative-Absolute Split
    - Framing a Decision Question
created: 2026-07-25
updated: 2026-07-30
---

**Nucleus of the `evidence-appraisal` cluster.** How confident you are in an effect estimate and how
strongly you should recommend acting on it are **two separate judgments**, and neither determines the
other. GRADE calls the separation "the defining feature" of its approach and attributes the confusion
in earlier grading systems to their failure to make it. [@grade, §1.2]

## Ordinary framing

Better evidence -> stronger recommendation. Grading systems that produce a single letter or star
rating collapse the two, so a reader cannot tell whether a weak recommendation reflects thin evidence
or a genuinely close call on well-established effects.

## The reframing — certainty is ONE of four inputs to strength, and the mapping is asymmetric

The separation is not merely *record two numbers*: certainty is one of **four** determinants of
strength, not a proxy for it (the other three are set out below, under *What sets strength, once
certainty is fixed*). But the two
off-diagonal cases are **not symmetric**, and the page must not flatten them:

- **High certainty -> weak (conditional) recommendation** is *common*: panels facing important
  variability in values and preferences "are likely to offer a weak recommendation despite high
  quality evidence." [@grade, §1.2]
- **Low or very low certainty -> strong recommendation** is **allowed but rare.** GRADE "allows for"
  it where *"the benefits **of antibiotic therapy** clearly outweigh the downsides in most patients
  independent of the quality assessment"* — a clause about one worked example, not a general licensing
  condition — while separately *discouraging* panels from making strong recommendations on
  low or very low confidence, confining the legitimate cases to a small set of paradigmatic
  situations. [@grade, §1.2, §6.3.2]

## Mechanism — what drives strength once certainty is fixed

Strength is set by the balance of desirable and undesirable consequences, the **variability of values
and preferences** among those affected, and resource use. Where patients with differing values would
predictably make different choices, panels are **likely to** offer a weak recommendation even on high
quality evidence — because a strong recommendation asserts that most or all would choose the same
way. [@grade, §1.2]

Worked cases the handbook gives:

- *High certainty, weak recommendation.* Chemotherapy plus radiotherapy versus radiotherapy alone in
  locally advanced non-small-cell lung cancer: high quality evidence of a survival gain "of a few
  months" against added harm and burden — so values determine the choice.
- *High certainty, weak recommendation.* Continuing long-term warfarin after a first unprovoked deep
  venous thrombosis: high quality trials show reduced recurrence at the cost of bleeding and
  inconvenience; "because patients with varying values and preferences will make different choices,"
  the recommendation is weak.
- *Low certainty, strong recommendation (GRADE's counterfactual illustration, not a reported case).*
  Rapid antibiotics in severe infection or sepsis has never been randomized against delay; on
  observational evidence rated low, panels "would be very likely to" make a strong recommendation.
  [@grade, §1.2]

## Decision relevance

- **A weak recommendation is not a hedge about the science.** It is a statement that the right action
  depends on the person's values. Reading it as *the evidence is poor* inverts its meaning — and in
  two of GRADE's three **worked examples in §1.2** the evidence was *high* quality. (Not to be confused
with the **five paradigmatic situations** of §6.3.2, which are the strong-on-low-certainty cases — none
of those is high quality.)
- **Conversely, low certainty does not license inaction** — but the exit is narrow. A strong
  recommendation on low-certainty evidence is legitimate where the balance is lopsided enough, and
  GRADE otherwise *discourages* it, so treating it as freely available inverts the rule as surely as
  ignoring it does.
- **The practical test when reading any recommendation:** ask which of the two judgments produced its
  strength. If the source does not let you tell them apart, you cannot use its strength rating.

## What sets strength, once certainty is fixed (chunk 03)

Strength is "the extent to which a guideline panel is confident that desirable effects of an
intervention outweigh undesirable effects, or vice versa, **across the range of patients for whom the
recommendation is intended**." Four factors drive direction and strength: the **balance of desirable
and undesirable consequences**, **certainty in the effect estimates**, **confidence in values and
preferences**, and **resource use**. [@grade, §6.1, §6.2]

- **Strong** — the panel is confident the desirable effects outweigh the undesirable (or the
  reverse); "most or all individuals will be best served by the recommended course of action."
- **Weak** — the desirable effects *probably* outweigh the undesirable "but appreciable uncertainty
  exists"; "not all individuals will be best served," so the individual's circumstances and
  preferences need more careful weighing than usual.
- **Default under uncertainty is weak:** where the panel is unsure whether the balance is clear, or
  the information bearing on the four factors is unavailable, "it would opt to make a weak
  recommendation." [@grade, §6.1, §6.1.1, §6.1.2]

On the balance itself: large relative effects **pointing the same way** favour a strong
recommendation; large desirable effects accompanied by large undesirable ones favour a weak one.
Large **absolute** effects favour strength more than small ones — and since baseline risk drives
absolute effect, "the strength of recommendations and its direction will likely differ in high- and
low-risk groups" ([[Baseline Risk and the Relative-Absolute Split]]).
[@grade, §6.2.1.1]

### Two cautions GRADE states about its own output

- **"Strong recommendations are not necessarily high priority recommendations."**
  [@grade, §6.1.1] Strength expresses confidence in the *direction of net
  benefit*, not the *size* of the benefit or its rank against other things a person could do. An
  intervention hierarchy therefore cannot be read off recommendation strength — a confidently-correct
  small effect and a confidently-correct large one are both "strong."
- **Recommendations are not dictates.** "Even strong recommendations based on high-quality evidence
  will not apply to all circumstances and all patients," and users "may reasonably conclude that
  following some strong recommendations based on the high quality evidence will be a mistake for some
  patients," because no guideline "can take into account all of the often compelling unique features
  of individual patients." Applying recommendations "by rote or in a blanket fashion" is explicitly
  disclaimed. [@grade, §6.1]

## Applied — WHO SFA 2023, and how the four determinants show up in a real rationale

WHO's 2023 SFA guideline is GRADE applied by an adopting body, and it exhibits the certainty->strength
linkage cleanly ([[Saturated Fat Intake and Replacement]]):

| Recommendation | Certainty | Strength |
|---|---|---|
| Reduce SFA to 10% energy | moderate | **strong** |
| Reduce below 10% | **very low** | conditional |
| Replace with PUFA | moderate | **strong** |
| Replace with MUFA / carbohydrate | low | conditional |

**The instructive case is the sub-10% recommendation.** WHO issued it as *conditional* while
recording that "**no undesirable effects or other mitigating factors were identified** that would
argue against" it — so the conditionality is not a balance judgment at all. It is driven by certainty
alone: "a conservative approach was therefore taken, leading to a conditional recommendation."
[@who2023saturated, Rationale for SFA recommendations 1 and 2]

- **CORRECTED 2026-07-26 — this is GRADE's default rule, not a new pattern.** It was previously
  written up here as a *fifth pattern alongside GRADE's own paradigm cases.* That claim is refuted by a
  quotation this same page carries above: where a panel "is uncertain whether the balance is clear" or
  the information bearing on the four factors "is not available," it "would opt to make a weak
  recommendation." WHO rated very low certainty and issued a conditional recommendation -- **the
  default executing normally.** Retained below as a worked *illustration* of that rule, which is what
  it is good for; the paradigm-case framing is struck.
- ~~This is a **fifth pattern** alongside GRADE's own paradigm cases~~: not high-certainty-weak (values
  vary) nor low-certainty-strong (balance lopsided), but **low-certainty-conditional-despite-no-known-harm**
  — where the panel could identify nothing against the action and still declined to recommend it
  strongly. Under GRADE's four factors this is certainty operating almost alone, which the handbook
  permits but does not illustrate.
- **Reading consequence:** a conditional recommendation cannot be assumed to mean "the benefit is
  contested." Here it means "we could not rule it out and could not confirm it" — a different message
  with a different action implication.

## Limits

- **GRADE does not remove judgment, and says so.** "Applying the GRADE approach does not minimize the
  importance of judgment or [suggest] that quality can always be objectively determined"; there will
  be cases of "legitimate disagreement about the interpretation of evidence." Its claim is that
  judgments become *explicit rather than implicit*. [@grade, §1.1]
- The framework governs *guideline panels* offering "recommendations for the management of typical
  patients." [@grade, §1.1] Carrying a strength rating to a specific individual
  requires a transportability step the rating itself does not perform.
- **Source currency:** this handbook (updated October 2013) is being phased out in favour of the
  GRADE Book (2024); §§1-3 are flagged in-source as already rewritten there.
  [@grade, front matter]

## A real process where appraisal and recommendation are done by DIFFERENT PEOPLE `[2026-07-27]`

This page treats certainty and strength as two judgements a guideline panel makes. The US Dietary
Guidelines process separates them **institutionally** — and NASEM records that as an *atypical*
inherited feature, not a design it endorses:

> «Multiple sets of standards exist that could serve as models, with the understanding that the
> process for developing *DGA* recommendations does not follow typical guidelines development
> processes **because the experts assessing the evidence do not write the guidelines and
> recommendations themselves**.»
> [@nasem, ch.3, footnote 6]

**Why this matters beyond the DGA.** The certainty/strength split is normally a *distinction within one
panel's reasoning*; here it is a **handoff between two bodies**, which creates a failure mode the
framework above does not describe: the recommendation can depart from the appraisal **silently**,
because no one person owns both.

**NASEM's response is not to close the seam but to make it auditable** — Recommendation 2 asks that
*«the secretaries of USDA and HHS should provide the public with a clear explanation when the DGA omit
or accept only parts of conclusions from the scientific report.»*
[@nasem, ch.3]

**That the safeguard is *requested* is the finding.** A recommendation to explain departures implies
departures occur and are not currently explained. **What this does NOT establish is that any specific
recommendation was distorted** — NASEM asks for transparency about the handoff, it does not document a
case.
``
`-> [[Which Objective Moved This Recommendation]]`

## A third axis the two-axis frame does not hold: how PRECISE is the number `[2026-07-28]`

[@nnr2023] attaches **no strength or certainty grade to any
recommendation it issues** — not one, across 374 pages.
`[searched: "strong recommendation"/"conditional recommendation"/"GRADE approach"/"certainty of
evidence" across all 10 NNR chunks — 1 hit total, and it is NNR describing WHO's grading of WHO's
own sugars guideline, not grading its own]`

**That alone would only make NNR a third ungraded body.** What makes it worth a section is the reason
NNR gives, which introduces a distinction this page did not hold:

> «FBDGs are formulated more generally than the DRVs for nutrients, although the causal associations of
> foods and health outcomes can be stronger than for nutrients and health outcomes. As with DRVs, there
> are seldom precise calculations behind the quantitative FBDGs. The precise FBDGs are based on best
> scientific knowledge and most often decided as consensus among expert groups.»
> [@nnr2023]

**Read the first clause before the third, because it reverses the obvious reading.** This is not a body
confessing that its evidence is weak. NNR says the causal association behind a food-based guideline can
be **stronger** than the nutrient-level one — and *then* says the number attached to it is a consensus
rather than a calculation. **Those are claims about two different things.**

| Axis | Question | Held by |
|---|---|---|
| **Certainty** | how confident are we that the effect is real and about this big? | GRADE, WHO |
| **Strength** | how strongly should we recommend acting on it? | GRADE, WHO |
| **Precision of the threshold** | **is the specific number derived, or agreed?** | **NNR, explicitly** |

**The third is independent of the first two, and that is the finding.** A body can be highly certain
that whole-grain intake lowers risk, recommend it strongly, and still have picked *90 g/day* by expert
consensus rather than derived it from a curve. **Certainty about a relationship does not transmit to
precision about a cutpoint** — and a reader who sees only a strong recommendation attached to a round
number will assume it does.
``

**This sharpens a rule the corpus already carries rather than contradicting it.** The dose-response
section of the telos holds that *where a threshold appears in guidance, the first hypothesis is that it
marks the edge of the evidence, not a feature of the curve*. **NNR supplies the mechanism for that
hypothesis in a guidance body's own voice:** the thresholds are *«most often decided as consensus among
expert groups»*. That is a guidance body stating the general case, where SACN's 30 g was one worked
instance.

**What this does NOT establish.** NNR is describing how quantitative FBDGs are set *in general*,
including its own; it is not conceding that any particular NNR number is arbitrary, and it explicitly
grounds them in *«best scientific knowledge»*. **Consensus-derived is not evidence-free** — it is
un-graded, which is a different and narrower claim.

**Where this leaves the three ungraded bodies the wiki now holds.** SACN issues no strength axis [@sacn2015]; NASEM
wants GRADE's properties without the brand; NNR grades nothing and says why. **None of these is
evidence for the others** — three bodies independently declining to grade is a fact about the field's
norms, not a converging judgment about grading's value, and no `[E-independent]` is claimed.

### Self-critique of the NNR addition `[run 2026-07-28, before commit]`

- **Quote-truncation check: RUN, and it caught the error before the prose was written.** The usable
  sentence is *«there are seldom precise calculations behind the quantitative FBDGs»*. **Quoted alone it
  reads as a confession of weak evidence.** The sentence before it says the opposite — food-level causal
  associations *«can be stronger»* than nutrient-level ones. The full passage is quoted and the
  paragraph explicitly instructs the reader to take the first clause first. **This is the same failure
  shape as the four defects logged in the 2026-07-27 session, caught by running the check rather than
  by noticing.**
- **Absence claim: SCOPED, not asserted.** "NNR grades nothing" is backed by a stated four-term search
  across all ten chunks with the single hit explained (NNR describing WHO). The earlier form of this
  claim on the source page carried no search scope.
- **Over-claim check on the third axis.** The claim is that *precision of the threshold* is independent
  of certainty and strength. NNR states the certainty/precision split; the three-axis table and the
  independence claim are the wiki's and are tagged. **A weaker reading is available** — that NNR is
  merely restating low certainty in other words — and the first clause of the quote is what rules it
  out, which is why the quote could not be truncated.
- **Laundered independence: explicitly denied in the body.** Three ungraded bodies are not three
  witnesses; the closing paragraph says so rather than leaving the count to imply corroboration.
- **Residual:** NNR's passage is about quantitative FBDGs generally. Applying it to NNR's *own* numbers
  is warranted by *«As with DRVs»* and by NNR issuing no grades, but NNR never says "our numbers are
  consensus" in the first person.

## Does the separation actually DO anything? The corpus's own pairings `[2026-07-28]`

This page holds GRADE's claim that certainty is **one of four** determinants of strength and not a
proxy for it, and that the off-diagonal case — high certainty, weak recommendation — is *common*.
**The corpus now holds enough graded recommendations to check whether that separation shows up in
practice.** It does not.

**Read the sample bound FIRST, because it decides what this can mean.** Every paired
certainty-and-strength recommendation the wiki holds comes from **two documents, both WHO**. The PA
evidence-profile annex carries per-outcome certainty but **no recommendation strengths** (it is the
annex, not the guideline), so it contributes no pairs. **This is one body's house practice, not a
finding about guideline-making.**

| Source | Recommendation | Strength | Overall certainty |
|---|---|---|---|
| WHO SFA 2023 | reduce SFA to 10%E | **strong** | **moderate** |
| WHO SFA 2023 | further reduce to <10%E | conditional | **very low** |
| WHO SFA 2023 | replace with PUFA | **strong** | **moderate** |
| WHO SFA 2023 | replace with MUFA (plant) | conditional | low |
| WHO SFA 2023 | replace with carbohydrate from fibre-containing foods | conditional | low |
| WHO Sugars 2015 | free sugars <10%E | **strong** | **moderate** (observational, caries) |
| WHO Sugars 2015 | free sugars <5%E | conditional | **very low** (ecological) |

[@who2023saturated, — «The overall certainty in the
evidence for recommendation 1 was moderate, and for recommendation 2 was very low»]
[@who2015, Remarks, p.16]

**Seven recommendations, seven diagonal cells, zero off-diagonal.** Strong pairs with moderate every
time; conditional pairs with low or very low every time. **The case GRADE calls *common* — high
certainty, weak recommendation — occurs zero times**, and so does the rare one it discourages.

### What this does and does not license

- **It is NOT "WHO collapsed certainty into strength."** If the other three determinants — balance of
  benefits and harms, variability in values and preferences, resource use — **happen not to vary much
  across population nutrient-threshold recommendations**, then a monotone mapping is the *correct*
  output, not a defect. Population thresholds for a nutrient are close to a best case for stable
  values: no procedure, no burden, no cost to the individual of the recommendation itself.
- **What it DOES establish is a reader-side problem, and that is the decision-relevant part.** From the
  output alone you cannot tell **which** of the two reasons produced a *conditional*:
  - *conditional because the evidence is thin* -> more research could move it, and the reader's own
    values are not what is in question;
  - *conditional because values genuinely vary* -> more research will NOT move it, and **the reader's
    values are exactly what decides it**.

  Those license different actions, and the label is identical in both cases. **Where the mapping is
  monotone, the strength axis carries no information the certainty axis did not already carry** — so
  in this corpus, reading only the certainty would lose nothing.
- **The rationale text is where the distinction survives, when it survives at all.** WHO SFA's strength
  rationale for the strong PUFA recommendation cites «moderate certainty overall» — i.e. it reaches
  for certainty to justify strength rather than for the other three determinants.

``

### The falsifier, stated in advance

**A guideline whose recommendations vary in values/preferences should produce the off-diagonal** —
screening decisions, drugs carrying burden or side-effects, interventions with real opportunity cost.
`AWAITS` [[ADA-EASD - Nutrition Therapy for Diabetes 2019]] and
[@nasem2011]; **if either shows high-certainty conditional
recommendations, this section's pattern is WHO-and-nutrition-specific and must be narrowed to say so.**
Recorded as a prediction rather than a conclusion, because a 7-cell single-body sample is exactly the
size at which a pattern is most tempting and least supported.

### The prediction is partly met — NutriRECS, where VALUES set the strength `[2026-07-29]`

The corpus now holds a non-WHO, non-nutrient-threshold graded recommendation, and it breaks the WHO-only
monotone pattern in exactly the predicted way. NutriRECS 2019 issued a **weak** recommendation to continue
red/processed meat — and the strength is driven not only by low certainty but explicitly by the  [@nutrirecs2019]
**values/preferences** determinant, which the WHO sample held constant. The engine is a dedicated
systematic review of those values (Valli 2019): «omnivores are attached to meat and are unwilling to  [@valli2019]
change this behavior when faced with potentially undesirable health effects».
[@valli2019] NutriRECS combines that with a small,
uncertain benefit to reach *weak* — and states it would stay weak even granting a small causal effect. So
here the strength axis carries information the certainty axis does not: two of GRADE's other three
determinants (balance of benefits/harms; variability in values) are doing visible work
-> [[Should Adults Reduce Red and Processed Meat]].

**This is still not the pure off-diagonal** (NutriRECS's certainty is also low, so certainty and strength
remain aligned in *level*). What it establishes is subtler and more useful: the WHO monotone mapping was a
property of *population nutrient thresholds with stable values*, not of guideline-making in general — as
soon as a body reviews values explicitly and takes the individual-decision standpoint, the values
determinant becomes the audible driver of strength. The reader-side problem sharpens: NutriRECS's *weak* is
values-driven (more research will NOT move it; the reader's values decide), whereas WHO's *conditional* on
free sugars <5%E is thinness-driven (more research could) — identical labels, opposite action-implications.

### Two bodies that do not have the axis at all

- **[@sacn2015] issues no strength axis whatsoever** — its bespoke
  instrument grades evidence and stops, so the certainty/strength question cannot even be posed of it.
- **WHO - Sodium Intake 2012 issues strength without certainty** [@who2012] — every recommendation is
  «strong», the word *conditional* does not appear in the document, and **no certainty rating is
  attached to any recommendation line**. Certainty exists only in its per-outcome profiles.

**Note what the second one means for the table above: WHO's own practice is not constant across its
guidelines.** The 2012 sodium guideline attaches no overall certainty; the 2023 SFA guideline states
one per recommendation. **So the monotone pattern is a property of WHO's *recent* guidelines, and the
corpus can see the practice changing** — which is a stronger reason than sample size to refuse to
generalise it.

### Self-critique `[run 2026-07-28, before commit]`

- **The sample bound is stated before the table, not after it.** Seven cells from two documents by one
  body is the kind of evidence that reads as a law. The section is structured so a reader cannot reach
  the pattern without first reading what it rests on.
- **Steelmanned the null reading, and it survives.** *"Monotone mapping is the correct output when the
  other three determinants do not vary"* is not a hedge — it is a rival explanation that the evidence
  here **cannot** rule out, and it is given its own bullet rather than buried.
- **Falsifier named in advance with two specific artifacts**, so this cannot be quietly retained if
  contradicted. Per the AWAITS convention, both are linkable and will surface via
  `reconcile.py awaits-arrived` when ingested.
- **Type check: A, and single-body.** This is an emergent observation across sources, present in none
  of them — but the sources are not independent (one body, overlapping committees), so **no
  `[E-independent]`** and the claim is about a practice, not about the world.
- **Nucleus-coverage discipline observed.** This section was written because the missing sources had
  something to say on **this page's question**; the facet sources that do not (Naude, Goldenberg,
  Moynihan, Te Morenga, Willett) were **left out of `sources:` rather than rolled up** — which is what
  the generator's own guard requires.
- **Residual:** the strongest unverified step is that WHO's five SFA strength ratings and two sugars
  ratings were each set independently. If a single committee applied one implicit rule across both,
  the seven cells are closer to one observation than to seven.

## References

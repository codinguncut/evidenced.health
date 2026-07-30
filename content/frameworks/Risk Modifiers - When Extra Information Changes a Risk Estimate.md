---
type: framework
question: When does an extra test change a risk estimate enough to change the decision?
aliases: [Risk Modifiers, CAC Score, Coronary Artery Calcium, Reclassification, Grey Zone, Risk Enhancers]
authors: [European Society of Cardiology (org)]
sources: [ESC - CVD Prevention Guidelines 2021]
cluster: cvd-risk-estimation
confidence: high
relationships:
  related_to:
    - SCORE2 Baseline Risk and the ESC Treatment Thresholds
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
    - Upgrading Observational Evidence
    - Measuring and Raising Cardiorespiratory Fitness
created: 2026-07-26
updated: 2026-07-28b
---

A risk model gives a number; a modifier is anything proposed to adjust it. ESC sets a bar that
*"very few potential modifiers"* clear, and the bar is more interesting than the list.

## The five criteria a modifier must meet

> - *"It improves measures of risk prediction, such as discrimination or reclassification"*
> - *«Public health impact is clear (e.g. number needed to screen or net benefit)»*
> - *"It is feasible in daily practice"*
> - *"**Information is not just available on how risk increases with an unfavourable result, but also on
>   how risk decreases if the modifier shows a favourable result**"*
> - *"The literature on this potential modifier is not distorted by publication bias"*

[EXTRACTED @esc2021 3.3]

**The fourth criterion is the one with an operating instruction attached** — a marker studied only in
the direction of harm cannot be used to reassure: *"Care should be taken not to use risk modifiers
solely to increase risk estimates when the modifier profile is unfavourable, but also vice versa.
Although an unfavourable risk modifier may increase an individual's estimated risk, a more favourable
profile than would be expected based on other patient characteristics must have the opposite effect."*
**Which criterion is failed most often is NOT criterion four** — the temptation to say so should be
resisted, because **ESC names criterion five**:
*"Very few potential modifiers meet all of these criteria. Meta-analyses in this field are, for example,
susceptible to substantial publication bias"* — and returns to publication bias twice more.
[EXTRACTED @esc2021 3.3]

## Three constraints that bound the whole idea

**1. Modifiers only matter in the grey zone.**

> *"Assessment of potential risk modifiers seems particularly relevant if the individual's risk is close
> to a decision threshold. In low-risk or very-high-risk situations, additional information is less
> likely to alter management decisions."*

A test that cannot move you across a threshold cannot change what you do, however real its association.
ESC notes the grey zone is nonetheless large, so feasibility and cost bind rather than relevance.

**2. A modifier's relative risk vastly overstates what it does to your absolute risk.**

> *"it is important to acknowledge that the degree to which calculated absolute risk is affected by
> modifiers is generally much smaller than the (independent) RRs reported for these modifiers in the
> literature."*

**Read the parenthetical carefully: these are *independent* RRs — already adjusted for the conventional
factors.** So the gap ESC reports is **empirical, not a confounding artefact**: adjusted relative risks
reported in the literature do not translate into proportional shifts in a calculated absolute risk.
**It is therefore NOT explained by residual correlation with the conventional factors** — that is
precisely what the word "(independent)" excludes.

ESC does not say why. What it says is that the discount is real and large, and that is the operative
instruction.

**3. The loop is open, and ESC says so.**

> *"RCTs to determine whether the added risk information eventually leads to improved health outcomes
> are generally lacking."*

So the whole apparatus is validated on *reclassification*, not on outcomes — the guideline's own
statement of the wiki's standing R1 problem. Also: *"the exact way of integrating additional information
on top of regular risk calculator input parameters is mostly unknown."* Even where a modifier qualifies,
**how to combine it with the model is not specified.**

## ESC's four recommendations, in ESC's own order of strength

**Read in ESC's order, not in order of technological interest.** CAC is the most discussed of the four
and the **weakest graded**; the two IIa recommendations cost nothing and are easy to skip past. Ordering
this section by salience rather than by class sends a reader to the weakest test first.

| Recommendation | Class | Level |
|---|---|---|
| *"Stress symptoms and psychosocial stressors modify CVD risk. Assessment of these stressors should be considered."* | **IIa** | B |
| *"Multiplication of calculated risk by RR for specific ethnic subgroups should be considered."* | **IIa** | B |
| *"CAC scoring may be considered to improve risk classification around treatment decision thresholds. Plaque detection by carotid ultrasound is an alternative when CAC scoring is unavailable or not feasible."* | **IIb** | B |
| Routine collection of other modifiers | **III** (not recommended) | B |

[EXTRACTED @esc2021 3.3, recommendation table]

**"Should be considered" is IIa; "may be considered" is IIb.** The wording carries the class, and
reading the class off the wording is the check that would have caught the error above.

## Ethnicity — the only modifier ESC actually quantifies

> *"the following correction factors, based on data from the UK, could be applied when assessing CVD
> risk using risk calculators"*
>
> - **Southern Asian: x1.3** for Indians and Bangladeshis, **x1.7** for Pakistanis
> - **Other Asian: x1.1**
> - **Black Caribbean: x0.85**
> - **Black African and Chinese: x0.7**

[EXTRACTED @esc2021 3.3]

**This is the one place ESC says by how much**, and the multipliers are large enough to move someone
across a threshold on their own — a 9% estimate becomes 15% for a Pakistani patient and 6% for a Black
African one. ESC's own caveat: *"Ideally, country and risk-calculator-specific RRs should be used, as
the impact of ethnicity may vary between regions and risk calculators"*, and the underlying data are UK
sourced.

## Psychosocial stress — IIa, and with the sharpest caveat in the section

Accepted as a risk factor: *"associated, in a dose-response pattern, with the development and
progression of ASCVD, independently of conventional risk factors and sex"*, with RRs *"commonly between
1.2 and 2.0"*.

But ESC then draws the enhancer-vs-modifier line itself, and it is the cleanest instance of it anywhere
in the section:

> *"Although the associations of psychosocial stress with CV health are robust, **only 'vital
> exhaustion' has been proven to improve risk reclassification**."*

[EXTRACTED @esc2021 3.3.1]

**A robust association is not a reclassification.** That distinction is the whole point of the five
criteria, stated by the source about its own second-highest-graded modifier.

## Coronary artery calcium — Class IIb

> *"Coronary artery calcium (CAC) scoring can reclassify CVD risk upwards and downwards in addition to
> conventional risk factors, and may thus be considered in men and women with calculated risks around
> decision thresholds."*

**The direction rule, symmetric:**

> *"If CAC is detected, its extent should be compared with what would be expected for a patient of the
> same sex and age. Higher-than-expected CAC increases the person's calculated risk, whereas **absent or
> lower-than-expected CAC is associated with lower than calculated risk**."*

[EXTRACTED @esc2021 3.3.3.1]

**The rule is AGE-RELATIVE; reading it as unconditional is an error.** The comparison is against *"what would be expected for a patient of the same
sex and age"* — so **a zero score is informative only where a non-zero score was the expectation.**
Where expected calcium is near zero, observing zero is exactly expected, "lower than expected" is not
available, and the test cannot reclassify downward at all.
[INFERRED (ESC - CVD Prevention Guidelines 2021) — entailment from the age-and-sex-relative comparison
ESC specifies.]

**The age below which this bites is not established here.** ESC scopes itself to *"apparently healthy
people aged 40-69 years"* and older, so it says nothing about younger adults and its silence is
expected rather than informative. `AWAITS` a source on CAC's negative predictive value by age band.

**Three limits ESC attaches:**

- *"CAC scoring does not provide direct information on total plaque burden or stenosis severity, and
  **can be low or even zero in middle-aged patients with soft non-calcified plaque**."* A zero score is
  not an absence of atherosclerosis.
- *"Availability and cost-effectiveness of large-scale CAC scanning must, however, be considered in a
  locoregional context."* — the caveat that bites on whether to order it at all.
- *"Clinicians are advised to consult existing protocols for details of how to assess and interpret CAC
  scores."* **No magnitude is given here** — searched across all chunks and the recovered tables, no
  Agatston thresholds or reclassification magnitudes appear. So *how far* a zero score moves an estimate
  is not answerable from this source.

Elsewhere ESC does call it *"the best-established imaging modality to improve CVD risk stratification"* —
best-established among imaging, at Class IIb, is the accurate reading.

## What ESC does not endorse

| Modifier | Verdict |
|---|---|
| Carotid **intima-media thickness** | *"Systematic use of intima-media thickness... is not recommended due to the lack of methodological standardization, and the absence of added value... even in the intermediate-risk group"* |
| **CT coronary angiography** | *"Whether CCTA improves risk classification or adds prognostic value over CAC scoring is unknown"* |
| **Lp(a)** | *"There is renewed interest in lipoprotein(a), but it too provides limited additional value in terms of reclassification potential"* |
| Genetic risk scores, circulating/urinary biomarkers, other vascular tests or imaging | *"The **routine collection** of other potential modifiers... **(other than CAC scoring or carotid ultrasound for plaque determination)**, is not recommended"* |

**Carotid plaque is NOT on this list** — it sits inside the Class IIb recommendation as the stated
alternative when CAC is unavailable, and ESC judges it *"probably also reclassifies CVD risk"* on
evidence *«less extensive than it is for CAC»*.

## Decision relevance

- **Ask first whether a test can move you across a threshold.** If the answer is no, the test cannot
  change the decision regardless of how strong its association is.
- **Demand the downward evidence before accepting a marker as reassurance.** ESC's fourth criterion is
  the difference between a risk *enhancer* and a genuine *modifier* — and ESC's own worked case is
  psychosocial stress, robustly associated yet with only *"vital exhaustion"* proven to reclassify.
- **Discount a modifier's headline RR heavily** when translating it into a change in absolute risk —
  a modifier adjusts the *output* of a baseline model ([[SCORE2 Baseline Risk and the ESC Treatment Thresholds]])
  and is meaningless without one, and the RR-to-absolute-risk gap is the
  [[Baseline Risk and the Relative-Absolute Split]] discount operating here.
- **A zero CAC lowers the estimate directionally where a non-zero score was expected** — by an amount no
  guideline here quantifies — and it does not exclude non-calcified plaque. ESC's literal wording is a
  disjunction: *"absent **or** lower-than-expected CAC is associated with lower than calculated risk"*.
  So the age-conditioning above is an **entailment** of the comparison rule, not ESC's explicit
  restriction; both readings are kept rather than one suppressed.
- **Check ethnicity before ordering an imaging test.** It is graded higher than CAC, costs nothing, and
  is the only modifier with a published multiplier.

## Limits

- One guidance body. Whether other bodies set the same bar or endorse the same shortlist is **unprobed**
  — `AWAITS` a second cardiovascular-prevention guideline.
- ESC's shortlist is a **2021** reading of a fast-moving imaging literature.
- The reclassification statistics themselves (net reclassification index values, C-statistic changes)
  are cited to references not held here, so this page carries ESC's *verdicts* and not the evidence
  behind them.

## A modifier that DID clear the bar — with a number and a grade `[2026-07-28, ESC chunk 03]`

This page records ESC's five criteria and its verdict that *«very few potential modifiers»* clear them.
**It did not hold an example of one that does.** Chunk 03 supplies one, quantified and graded:

> «Multiplication of calculated total CVD risk by a factor of 1.5 should be considered in adults with
> rheu- matoid arthritis.»  — **Class IIa, Level B**
> [EXTRACTED @esc2021 chunk 03]

**Three things make this the useful worked case.**

- **It is a multiplier on the risk estimate, not a re-run of the model.** The modifier does not enter
  SCORE2; it scales SCORE2's output. So a reader applying it needs the baseline estimate first — the
  modifier is meaningless standing alone.
- **The grade is IIa/B, not I/A.** Even a modifier that clears ESC's own bar is issued as *should be
  considered* on *Level B* evidence. **That is the ceiling this class of adjustment reaches**, and it
  sets expectations for any other proposed modifier.
- **It satisfies the page's symmetry rule by construction.** A fixed multiplier of 1.5 applies in one
  direction only because the condition is present or absent — there is no *«more favourable risk
  modifier»* reading to be had, which is exactly the asymmetry ESC warns about elsewhere. **A binary
  condition-based modifier sidesteps the reassurance trap; a continuous one does not.**
  `[INFERRED (ESC - CVD Prevention Guidelines 2021) — the multiplier and its grade are ESC's; the
  binary-vs-continuous observation is this page's]`

**Adjacent, and weaker:** ESC also lists chronic inflammatory conditions generally at **IIb/B**
(*«Assessment of total CVD risk may be considered»*) — a recommendation to *assess*, not a multiplier.
**The two should not be conflated:** rheumatoid arthritis gets a number, the broader category gets a
prompt.

## References

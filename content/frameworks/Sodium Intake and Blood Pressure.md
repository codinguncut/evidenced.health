---
type: framework
question: How much sodium, and what does reducing it actually buy?
aliases: [Sodium, Salt Intake, Sodium Reduction, Salt Reduction, Dietary Sodium, WHO Sodium Guideline]
authors: [World Health Organization (org)]
sources: [WHO - Sodium Intake 2012, WHO - Saturated and Trans Fatty Acid Intake 2023, Willett - Nutritional Epidemiology 3e, ESC - CVD Prevention Guidelines 2021]
cluster: cardiometabolic-exposures
nucleus: true
confidence: medium
relationships:
  related_to:
    - Surrogate Outcomes
    - Certainty of Evidence vs Strength of Recommendation
    - What Kind of Evidence Sits Behind a Nutrient Recommendation
    - Baseline Risk and the Relative-Absolute Split
created: 2026-07-26
updated: 2026-07-30
self_critiqued: 2026-07-30
---

**Nucleus of the `cardiometabolic-exposures` cluster.** WHO 2012, all recommendations **strong**.
The word *conditional* does not appear in the document.

## The recommendations

> "WHO recommends a reduction in sodium intake to reduce blood pressure and risk of cardiovascular
> disease, stroke and coronary heart disease in adults (strong recommendation). WHO recommends a
> reduction to <2 g/day sodium (5 g/day salt) in adults (strong recommendation)."
[@who2012, Recommendations, p.18]

For children: reduce to control blood pressure (strong), with the adult 2 g/day figure "adjusted
downward based on the energy requirements of children relative to those of adults" -- a scaling rule,
with no outcome evidence and no certainty rating attached to it.

**No certainty rating is attached to any recommendation line** — certainty lives only in the per-outcome
tables and an Annex 8 bullet list.

**The narrow, checked contrast with a later WHO guideline.** WHO's 2023 SFA/TFA guideline uses the
same bare *"(strong recommendation)"* form on its recommendation lines — there is no
`(strong recommendation, moderate-certainty evidence)` pairing in it, zero occurrences. What SFA 2023
*does* add is an **overall certainty stated per recommendation** in its Rationale (*"The overall
certainty in the evidence for recommendation 1 was moderate, and for recommendation 2 was very low"*);
this 2012 guideline issues no overall certainty anywhere.
[@who2023saturated, Recommendations; Rationale — a
cross-guideline check, so cited here in body rather than added to this page's `sources:`]

## The evidence split — this is the whole story

| Outcome | Effect (95% CI) | Design | Certainty |
|---|---|---|---|
| Resting SBP | **3.39 mmHg lower** (2.46 to 4.31) | 36 RCTs, 49 comparisons, n=6736 | **HIGH** |
| Resting DBP | 1.54 mmHg lower (0.98 to 2.11) | 36 RCTs | **HIGH** |
| Ambulatory SBP | 5.51 mmHg lower (3.16 to 7.87) | 6 studies | **HIGH** |
| All-cause mortality | RR 1.06 (0.94 to 1.20) -- inconclusive | 7 cohorts, n=21 515 | **VERY LOW** |
| Stroke | RR 1.24 (1.08 to 1.43) | 10 cohorts, n=72 878 | **VERY LOW** |
| Cardiovascular disease | RR 1.12 (0.93 to 1.34) -- inconclusive | 9 cohorts, n=46 483 | **VERY LOW** |
| Coronary heart disease | RR 1.04 (0.86 to 1.24) -- inconclusive | 6 cohorts, n=37 343 | **VERY LOW** |
| Cardiovascular disease | RR 0.84 (0.57 to 1.23) -- inconclusive | **2 RCTs**, n=720 | **MODERATE** |

[@who2012, Summary of evidence, pp.11-13; Annex 1]

**The surrogate is rated HIGH; most -- not all -- hard cohort outcomes are rated VERY LOW.** The
exception matters and the table above omitted it: **fatal stroke, RR 1.63 (1.27-2.10), is rated LOW**,
and **fatal coronary heart disease, RR 1.32 (1.13-1.53)**, is the other statistically significant
cohort result. Both were left out while the four null rows were listed -- an omission running in the
direction of the *surrogate high, hard outcomes very low* reading, which is exactly the direction such
omissions tend to run. WHO's own summary states the split: *"Higher sodium intake was associated with
higher risk of incident stroke, fatal stroke and fatal coronary heart disease. There was no association
between sodium intake and all-cause mortality, incident cardiovascular disease and non-fatal coronary
heart disease."*
[@who2012, Executive summary; Summary of evidence]

But note the
last row: a 2-RCT meta-analysis of cardiovascular disease is rated **moderate** -- direct hard-outcome
RCT evidence, above the cohort floor, though its interval is wide and null. WHO summarizes the split
itself:

> "The evidence regarding the relationship between sodium intake and blood pressure was of high
> quality, whereas the evidence regarding sodium intake and all-cause mortality, cardiovascular
> disease, stroke and coronary heart disease was of lower quality. Therefore, these recommendations
> should be reviewed when more evidence... becomes available."
[@who2012, Remarks, p.18]

## How the gap is bridged — a disclosed surrogate transfer

The bridge is explicit, and it is the guideline's most consequential methodological act:

> "Because of the well-established relationship between blood pressure and cardiovascular disease
> outcomes, the evidence of an effect of sodium on blood pressure was **also considered
> moderate-quality evidence** that reduced sodium is beneficial for reducing risk of cardiovascular
> disease, stroke and coronary heart disease."
[@who2012, Annex 8, p.37]

High-certainty surrogate evidence is transferred to hard outcomes **one level down**, and the direct
very-low-certainty cohort evidence on those same outcomes is superseded rather than combined. There is
no stated roll-up rule anywhere in the document -- the string *"overall certainty"* does not occur, and
no overall certainty is ever issued. The transfer rule in Annex 8 is the operative substitute.

**Where this bites hardest — the <2 g/day threshold.** The evidence table for that specific question
carries four rows reading *"There were no studies with [cardiovascular disease / stroke / coronary
heart disease / all cause mortality] as an outcome which addressed this question"*, each labelled
**(directly assessed)**. Annex 8 nonetheless states:

> "High and moderate-quality evidence that consuming <2 g sodium/day compared with consuming >=2 g
> sodium/day is beneficial for reducing blood pressure **and risk of cardiovascular disease, stroke and
> coronary heart disease** in adults."
[@who2012, Annex 1 p.24; Annex 8 p.37]

**This is not a contradiction, and "no studies" does not mean "no evidence."** Two qualifiers do the
work, and both are printed on the cell itself:

- the rows say **(directly assessed)**, and
- **footnote 2 hangs off those very cells**: "Though the effect of a decrease in sodium intake was not
  tested, there were **5 cohort studies** that compared lower sodium intake (<2g/day) to higher sodium
  intake (>= 2 g/day). There was a **significant increased risk of stroke** in the group that consumed
  >=2 g/day relative to the group that consumed < 2 g/day (RR=1.30 (1.03 to 1.64)). Effects on the risk
  of cardiovascular disease, coronary heart disease and all cause mortality were not statistically
  significant."

[@who2012, Annex 1 p.24, footnote 2]

So the threshold claim rests on **high-certainty BP evidence at that threshold, transferred at moderate,
plus 5 indirect cohort comparisons showing a stroke effect**. What is absent is a *directly assessed*
trial of the threshold against a hard outcome -- which is a narrower and more accurate statement than
"zero evidence."

## Response heterogeneity — measured, then deliberately not acted on

| Baseline status | SBP reduction (95% CI) | Certainty |
|---|---|---|
| **Hypertensive** | **4.06 mmHg** (2.96 to 5.15), 24 studies | high |
| Mixed | 3.41 mmHg (1.69 to 5.13), 8 studies | high |
| **Normotensive** | **1.38 mmHg** (0.02 to 2.74), 6 studies | moderate |

A roughly **three-fold difference**, which WHO records as "statistically significantly less" in
normotensives -- and then declines to stratify the recommendation, on a stated population-level ground:
the high global prevalence of hypertension and the breadth of benefit. **The reason given is a
public-health-standpoint reason, not an evidentiary one** (telos divergence class 1).
[@who2012, Final considerations, p.16]

By **baseline intake**, point estimates rise monotonically with intake (1.79 -> 2.97 -> 3.07 -> 3.91 ->
5.74 mmHg across intake bands) and WHO reads the subgroup test as null (P=0.17), concluding the effect
is "independent of baseline sodium intake." **A monotone gradient declared absent on a non-significant
interaction test is a claim about power as much as about biology.**

## The J-curve — named as the reason for the review, then never adjudicated

WHO names the J-shaped hypothesis twice in framing sections, citing two 2011 cohort studies proposing
that reducing sodium below 2 g/day "may be associated with increased risk of cardiovascular disease and
stroke" as part of the justification for commissioning the review. **Neither study is returned to
anywhere in the evidence summary, the final considerations, or the annexes**, and whether they were among
the 15 included cohorts is not stated. The terms *reverse causation*, *sick-quitter* and *U-shaped* do
not appear in the document.
[@who2012, Background p.6; Justification p.7]

**Compounding this:** the strata where a lower-arm harm is most plausible were excluded *a priori* --
"individuals with illnesses or taking drug therapy that may lead to hyponatraemia... (e.g. patients with
heart failure and those with type I diabetes)... were not considered in the review of the evidence."
[@who2012, Remarks, p.18]

So the guideline **cannot** answer the J-curve question, and does not claim to. Per the expectancy test
this is *unprobed*, not *disproved* -- and it is the wiki's largest open question on sodium.
`AWAITS` a source that adjudicates the upper-arm/lower-arm question directly (the post-2011 literature:
PURE, the Cochrane and Graudal lines, and the reviews rebutting them).

## What is absent

- **Absolute effects entirely.** No per-1000, no risk differences, no baseline risk, no NNT. The
  mmHg figures are absolute in units but never translated to outcome risk. **So this recommendation
  cannot be ranked against any other exposure in the fabric** (telos layer 1).
- **A numeric "threshold of relevance"** -- the criterion driving every imprecision downgrade is defined
  only qualitatively and never operationalized for any outcome.
- **Salt sensitivity / hyperresponders** -- the terms do not occur. The hypertensive/normotensive split
  above is the closest the document comes.
- **Sodium:potassium ratio** -- explicitly out of scope, while asserting that following this guideline
  plus the potassium guideline yields "approximately one to one, which is considered beneficial for
  health", sourced to a 2003 expert consultation rather than to evidence graded here.
- **Any low- or middle-income-country evidence.** All RCTs were run in Australia, Europe, North America
  and New Zealand; cohorts in Europe, Japan and the USA. The PICO setting is "All countries" and
  transportability is never discussed -- while the guideline's stated motivation is LMIC-framed.


``
## Limits

- 2012; self-dated for review "by the end of 2017". The post-2011 sodium controversy is by construction
  outside it.
- Three of the four underpinning systematic reviews are **unpublished WHO in-house documents** with no
  journal or URL, so study lists, risk-of-bias assessments and heterogeneity statistics are not
  verifiable from this document alone.
- The guideline's evidence-state vocabulary has three states (conclusive-of-benefit/harm,
  conclusive-of-no-effect, inconclusive) and the middle one requires the threshold it never specifies.
  **WHO does exercise the conclusive-of-no-effect state** — the tempting reading that it never does is
  wrong: total cholesterol and plasma noradrenaline are rated **high** and explicitly
  *"did not cross threshold of relevance of benefit or harm"*, with Annex 8 carrying *"High-quality
  evidence that decreasing sodium has no harmful effect on blood lipids, catecholamine levels, renal
  function or any minor side effects (e.g. headache and dizziness) **in adults**."* It is used on the
  **adverse-effect** outcomes, and scoped to adults. What the
  guideline does not do is apply it to the efficacy outcomes — those stay "inconclusive" in the body and
  reappear as *"no association"* in the Executive summary, which is the four-states error the telos
  names.


``
## The exposure measure here is in a different class from the rest of the corpus `[2026-07-28, Willett ch.8]`

Almost every dietary exposure the wiki holds is measured by food-frequency questionnaire. **Sodium is
not.** Van Dam & Hunter classify **urinary sodium as a *recovery biomarker*** — one of only four they
name, alongside urinary nitrogen, urinary potassium and doubly-labelled-water energy:

> «In addition to urinary nitrogen, urinary potassium, urinary sodium, and energy intake estimated
> using the doubly labeled water technique are recovery biomarkers.»
> [@willett]

A recovery biomarker has «a quantitative relationship... between values for the biomarker and dietary
intake in a specific time period», so it yields **absolute** intake rather than a ranking. Full
taxonomy and its consequences: [[Measurement Error in Dietary Assessment]].

**What this does and does not buy.**

- **It removes one error source, not the others.** Design, confounding and outcome ascertainment are
  untouched. **This page's certainty split — high on blood pressure, very low on hard outcomes — is
  unaffected**, and nothing here upgrades it.
- **It does not solve day-to-day variation.** A 24-hour urine measures *one day*, and a single day is
  a poor estimate of habitual intake for any nutrient. **Recovery fixes calibration; it does not fix
  within-person variability**, and the two are independent problems.
- **What it does buy is that a sodium threshold is auditable in a way most are not.** Chapter 4's
  division — questionnaires for ranking, records or recalls for absolute magnitude when «comparing
  nutrient intakes with specific dietary recommendations» — is the general obstacle to checking a
  person against a cutpoint. **Sodium escapes it**, because an absolute intake can be measured
  directly. WHO's «<2 g/day sodium» is therefore one of the few guidance numbers in this corpus a
  person could actually be measured against.
  ``

## A second guidance family on the same stratification — and it is NOT a second witness `[2026-07-28, ESC]`

[@esc2021] reports the same hypertensive/normotensive split this page
already holds from WHO:

> «A reduction in sodium intake may reduce SBP by, on average, 5.8 mmHg in hypertensive, and 1.9 mmHg
> in normotensive patients.»
> [@esc2021]

**Parameter table** (op-weave 2a) — built because the surface agreement is striking:

| Parameter | WHO 2012 | ESC 2021 | Same quantity? |
|---|---|---|---|
| Hypertensive SBP reduction | **4.06 mmHg** (2.96-5.15), 24 studies | **5.8 mmHg** | **NO — ESC states no dose** |
| Normotensive SBP reduction | **1.38 mmHg** (0.02-2.74), 6 studies | **1.9 mmHg** | **NO — same reason** |
| **Ratio hypertensive : normotensive** | **2.94** | **3.05** | **comparable — both are internal ratios, so the missing dose cancels** |
| Sodium reduction assumed | specified in WHO's analysis | **not stated in this sentence** | — |
| Uncertainty | intervals given | **none given** | no |

**The magnitudes are not comparable and the ratio is.** ESC's sentence attaches no dose, so its 5.8 and
1.9 cannot be set against WHO's 4.06 and 1.38 — a larger assumed reduction would produce larger numbers
with no disagreement at all. **What survives the dose problem is the internal ratio**, because the
unstated dose divides out of it: **2.94 against 3.05.** Two guidance families, a decade apart, on a
roughly 3:1 hypertensive-to-normotensive gradient.

### That agreement is NOT independent backing, and the check is what shows it

**Both trace to the same investigators.** ESC's cited source for this sentence is **He FJ, Tan M, Ma Y,
MacGregor GA** (*JACC* 2020), and **He FJ / MacGregor GA studies sit inside WHO's own cited evidence
base**. So the convergence runs through one research group's primary work reaching two guideline
committees. (Not the stronger claim that both bodies pooled the *identical* study set — WHO's actual
pooled lists are in unpublished in-house reviews this page's Limits calls unverifiable; see the
width-of-claim note below.)

**No `[E-independent]` is claimable here.** Every surface marker points the wrong way — different body,
different continent, different decade, near-identical ratio — and the substantive marker is absent.
This is the laundering trap in its textbook form, and it was caught by checking the reference rather
than by the numbers looking suspicious.
``

**Stated at the width the evidence supports:** what is established is **shared primary-study lineage**,
not that the two pooled estimates were computed from identical study sets. **The wiki has not
established that**, and the differing magnitudes suggest they were not.

### What ESC adds that WHO does not have

- **A hard-outcome magnitude for a stated dose:** «In a meta-analysis, salt reduction of 2.5 g/day
  resulted in a 20% reduction of ASCVD events (RR 0.80).» **This page's central gap is that hard
  outcomes sit at very low certainty**, and ESC supplies a figure — but from the **same He/MacGregor
  source**, so it does not raise certainty, and ESC attaches no certainty rating to it.
- **The gap between intake and target, quantified:** «In most Western countries, salt intake is high
  (9-10 g/day), whereas the recommended maximum intake is 5 g/day.» **A halving, population-wide** —
  which is an adherence fact, not an efficacy one, and belongs in any realistic reading of what the
  recommendation asks.
[@esc2021]

## A blood-pressure number is not a blood-pressure number `[2026-07-28, ESC chunk 05]`

This page's outcome is SBP, and it already carries a puzzle: WHO's pooled **resting SBP** effect is
**3.39 mmHg** while its **ambulatory SBP** effect is **5.51 mmHg** — the ambulatory figure is larger
than the resting one, on the same exposure. **ESC supplies the mechanism.**

**White-coat hypertension is common and carries intermediate risk:**

> «It occurs in up to 30-40% of patients. The risk associated with white-coat hyperten- sion is lower
> than sustained hypertension but may be higher than normotension.»
> [@esc2021]

So **office/resting measurement misclassifies a large minority**, in a direction that adds variance
uncorrelated with the exposure. **An intervention effect measured against a noisier, upward-contaminated
baseline attenuates**, which is the expected direction of the WHO resting-vs-ambulatory gap.
``

### ESC applies a measurement correction to SPRINT's headline number

> «the even lower SBP in the intensively treated group in SPRINT (Systolic Blood Pressure Intervention
> Trial) (mean 124 mmHg) probably reflects a conventional office SBP range of 130-139 mmHg»
> [@esc2021]

**A landmark trial's most-quoted number is restated as 130-139 in the units a clinic actually uses** —
a shift of roughly 6-15 mmHg, larger than the entire sodium effect this page reports. **The trial is
not wrong; the number is method-specific**, and reading it against a conventional office reading is a
same-quantity error of the exact kind the parameter-table rule exists to catch.

**The consequence for this page, stated at the right width:** any BP figure — WHO's 3.39, ESC's 5.8/1.9,
a personal reading — carries an implicit measurement method, and **the methods are not
interchangeable**. This does not impeach any figure held here. It means **a threshold and a measured
value must share a method before they can be compared**, and none of the sources this page holds states
its method in the same breath as its number.

**`AWAITS` a source specifying the BP measurement protocol behind WHO's pooled estimates** — that is
what would let this page say whether its central figure is an office, resting-standardised or
ambulatory quantity. **The wiki cannot currently say which.**

## References

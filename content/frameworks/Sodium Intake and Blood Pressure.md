---
type: framework
question: How much sodium, and what does reducing it actually buy?
aliases: [Sodium, Salt Intake, Sodium Reduction, Salt Reduction, Dietary Sodium, WHO Sodium Guideline]
authors: [World Health Organization (org); He, Feng J; Li, Jiafu; MacGregor, Graham A; Huang, Liping; Afshin, Ashkan; Neal, Bruce]
sources: [WHO - Sodium Intake 2012, WHO - Saturated and Trans Fatty Acid Intake 2023, Willett - Nutritional Epidemiology 3e, ESC - CVD Prevention Guidelines 2021, He - Salt Reduction Blood Pressure 2013, Huang - Sodium Dose Duration Blood Pressure 2020, Afshin - Health Effects of Dietary Risks GBD 2019, Neal - SSaSS Salt Substitution Cardiovascular 2021]
cluster: sodium-bp
nucleus: true
confidence: medium
relationships:
  related_to:
    - Surrogate Outcomes
    - Certainty of Evidence vs Strength of Recommendation
    - What Kind of Evidence Sits Behind a Nutrient Recommendation
    - Baseline Risk and the Relative-Absolute Split
    - Blood Pressure Lowering and Cardiovascular Events
created: 2026-07-26
updated: 2026-08-06
self_critiqued: 2026-08-04
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
[@who2023saturated, Recommendations; Rationale — a cross-guideline check, so cited here in body rather than added to this page's `sources:`]

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

## The published RCT meta-analysis behind the effect `[2026-07-31, He 2013]`

WHO 2012 is a **recommendation summary** whose four underpinning systematic reviews are **unpublished
in-house documents** (this page's Limits). He, Li & MacGregor 2013 (BMJ; a Cochrane SR + meta-analysis)
is a **published, verifiable, gold-tier RCT meta-analysis of the same sodium->BP effect**, so the
effect leg no longer rests on a recommendation summary alone. **34 RCTs, 3230 participants**, modest
reduction (>=4 weeks), pooled salt reduction achieved -75 mmol/24h (\~4.4 g/day salt, close to the
public-health target).

| Stratum | SBP (95% CI), I2 | DBP (95% CI), I2 | trials / n |
|---|---|---|---|
| All | **-4.18 mmHg** (-5.18 to -3.18), I2=75% | -2.06 (-2.67 to -1.45), I2=68% | 34 / 3230 |
| Hypertensive | **-5.39 mmHg** (-6.62 to -4.15), I2=61% | -2.82 (-3.54 to -2.11), I2=52% | 22 / 990 |
| Normotensive | **-2.42 mmHg** (-3.56 to -1.29), I2=66% | -1.00 (-1.85 to -0.15), I2=66% | 12 / 2240 |

[@he2013, Results]

> «A modest reduction in salt intake for four or more weeks causes significant and, from a population
> viewpoint, important falls in blood pressure in both hypertensive and normotensive individuals,
> irrespective of sex and ethnic group. Salt reduction is associated with a small physiological
> increase in plasma renin activity, aldosterone, and noradrenaline and no significant change in lipid
> concentrations.»
[@he2013, Conclusions]

**This is NOT independent backing of WHO — the check is the reference trail, again.** He/MacGregor
studies sit inside WHO's cited evidence base (established in the ESC section below), and He 2013's own
included trials (MacGregor 1982/1989, Cappuccio 1997, He 2009, Swift 2005 …) are the same primary work.
So this is the **primary systematic evidence in the same lineage**, not a second witness — **type F /
shared-evidence, no `[E-independent]`**. The magnitudes even differ from WHO's pooled figures (He's SBP
-4.18 vs WHO's 36-RCT/49-comparison **-3.39**), which confirms they are *different pooled sets*, not the
identical analysis: He 2013 is a verifiable SR the page can cite for the effect, not the literal
document WHO distilled.
[inferred from @he2013; @who2012]

**What it does and does not move.** It **raises the warrant on the BP-effect leg** (a published gold SR
now stands behind the surrogate). It does **not** touch this page's hard-outcome certainty split —
He's hard-outcome claims (a re-pooled CV-events -20%, the Strazzullo cohort meta) are **advocacy
re-analyses** (competing interest below), not graded outcome evidence — so `confidence:` stays medium
and the *surrogate high, hard outcomes very low* reading is unchanged.

**Competing interest, disclosed and material to the interpretive claims.** FH is a member and GM the
chairman of **CASH / WASH** (salt-reduction advocacy charities). The RCT-pooled BP effect is hard data
and taken at face value; the **interpretive extensions** — the «3 g/day … long term target», the
J-curve dismissal, the CV re-analyses — are advocacy-shaped and are caveated at point of use (symmetric
standards: a favourable-direction source gets the same scrutiny as an unfavourable one).

### The dose-response is significant, monotone, and estimated — where WHO's was declared absent

WHO read its by-intake-band gradient as null (P=0.17) and concluded the effect is «independent of
baseline sodium intake». **He asks a different question — the magnitude of *reduction achieved* vs the
BP fall — and finds a significant gradient:** a 100 mmol/24h reduction (6 g/day salt) -> SBP **-5.8
mmHg** (2.5 to 9.2, P=0.001) adjusted for age, ethnic group and BP status (68% of between-study
variance); steeper in hypertensives (**-10.8 mmHg** per 100 mmol) than normotensives (**-4.3**). These
are **not contradictory** — WHO's is baseline-intake-as-modifier, He's is dose-of-reduction-vs-response
— and both point the same decision way: **no plateau in the studied range, larger reduction buys more.**

> «The observed significant association between the reduction in 24 hour urinary sodium and the fall in
> systolic blood pressure, indicates that larger reductions in salt intake will lead to larger falls in
> systolic blood pressure. The current recommendations to reduce salt intake from 9-12 to 5-6 g/day
> will have a major effect on blood pressure, but a further reduction to 3 g/day will have a greater
> effect and should become the long term target for population salt intake.»
[@he2013, Conclusions]

**Width caveat (author's own):** the meta-regression dose-response «should be viewed as exploratory and
could be prone to confounding» — a between-study (ecological) estimate; He flags that individual-
participant-data meta-analysis would be needed to pin it. So *larger reduction -> larger fall* is
supported as **direction/shape**, not as a precise per-gram coefficient. This is the domain's
every-reduction-pays default (telos dose-response section) instantiated on a recovery-biomarker
exposure. The 3 g/day target is a policy extrapolation beyond the trial range and carries the advocacy
caveat above.
[@he2013, Dose-response]

### Huang 2020 refines the dose-response with a duration axis — and it is the SAME lineage, not a witness `[2026-07-31, Huang 2020]`

Huang 2020 (BMJ; TRUE Consortium) is the He/MacGregor lineage's **larger successor** — **133 RCTs,
12 197 participants** on 24h-urinary-sodium, achieving -130 mmol -> SBP **-4.26 mmHg** (-4.89 to -3.62),
DBP -2.07. It is **NOT independent backing:** FJH + GAM co-author both papers, **Huang's ref 21 is He
2013**, and Huang's search strategy is developed from He's. So this is **type F / shared-evidence — a
refinement in the same lineage, no `[E-independent]`** (same CASH/WASH advocacy interest; competing
interest below). It refines He on two axes He could not resolve.

**1. The naive dose-response is null; it is real only after adjusting for duration.** He's steeper
between-study slope was the estimate he himself flagged «exploratory... prone to confounding» — Huang
names the confounder. The **raw quintile trend and the univariable meta-regression both found NO
association** of SBP fall with sodium-reduction magnitude (P trend=0.09; univariable coeff 0.007, 95% CI
-0.002 to 0.016, P=0.106). The relation appears **only after multivariable adjustment**:

> «Likewise, the univariable meta-regression analyses including all studies (table 1) showed no
> association of blood pressure effect with magnitude of sodium reduction. However, the magnitude of the
> change in 24 hour urinary sodium excretion was positively associated with the change in blood pressure
> after adjusting for intervention duration, mean age, percentage of female sex, percentage of white
> ethnicity, and baseline blood»
[@huang2020, Results]

adjusted slope: each 50 mmol -> SBP **-1.10 mmHg** (0.66-1.54), DBP -0.33 (0.04-0.63) — i.e. \~2.2/100
mmol. This is the gate-6 caution made concrete on this exposure: **the monotone dose-response here is
recovered by the model specification, not visible in the raw contrast** — but the direction survives
(adjustment reveals a positive slope, and effects persist down to baseline SBP <120, so
every-reduction-pays holds and no plateau is shown).

**Parameter table** (op-weave 2a) — He-vs-Huang dose-response slope, matched:

| Parameter | He 2013 | Huang 2020 | Same quantity? |
|---|---|---|---|
| SBP fall per 100 mmol, modest-reduction / >=2-wk trials | **-5.8 mmHg** (2.5-9.2), between-study meta-reg | **\~-5.8**, >14-day + <=100 mmol subgroup | **YES — Huang states its subgroup «similar to» He's, ref 21** |
| SBP fall per 100 mmol, ALL trials pooled | not computed (He restricted to >=4wk/modest) | **-2.2 mmHg** (multivariable, 133 trials) | **NO — different trial mix (all durations vs >=4wk only)** |
| Overall pooled SBP effect | -4.18 at **-75 mmol** achieved (34 trials) | -4.26 at **-130 mmol** achieved (133 trials) | **NO — similar mmHg at nearly double the dose = the short-trial dilution below** |

So the two are **not in conflict**: He estimated the long-trial / modest-reduction slope, Huang the
across-durations slope, and **Huang reproduces He's 5.8 exactly when it restricts to He's inclusion
window.** The apparent discrepancy (He 5.8 vs Huang 2.2 per 100 mmol) is the **type-of-studies-included
sensitivity**, which is the next point.

**2. The duration effect — short trials underestimate (a bias-direction finding).** The **overall**
duration relation is NULL (P trend=0.87, meta-regression NS) — it is **not** a longer-is-more gradient.
What is real is a **very-short-trial underestimate**: each 50 mmol reduction bought **-1.05 mmHg**
(0.40-1.70) SBP in <=14-day trials vs **-2.13 mmHg** (0.85-3.40) in longer — an \~doubling. Because
**57% (77/136) of data points were <=14 days**, the pooled estimate is **biased downward**.

> «Our review identifies an approximate doubling of the effect of sodium reduction on blood pressure in
> studies of longer than two weeks' duration versus shorter studies, indicating that the full effects of
> dietary sodium reduction require several weeks to become apparent. Very short term studies of sodium
> reduction are not a sound basis for drawing conclusions about the effects of sodium reduction on blood
> pressure and are not helpful in formulating policy recommendations for public health.»
[@huang2020, Discussion]

**Huang reads this as a real biological lag, not a measurement artifact:** short trials use very
restricted diets -> sudden large reductions -> transient renin-angiotensin / sympathetic activation and
adverse metabolic effects that do not persist chronically; the full effect needs several weeks
(DASH-Sodium showed a larger fall at week 4 than earlier). **Decision consequence for this page:** the
pooled surrogate effect it holds is a *lower bound* on the sustained effect — the chronic BP benefit of
a maintained reduction is larger than a trial-duration-mixed meta-analysis shows.
[inferred from @huang2020]

**3. The modifier is continuous baseline SBP, not the hypertensive/normotensive dichotomy.** Huang finds
the **BP-status dichotomy non-significant** (normo/hyper P trend=0.08) while the **continuous
baseline-SBP gradient is significant** (P trend=0.01), with effect present even at SBP <120 — and argues
the dichotomy is «weak because the definition of hypertension is arbitrary». This **refines the
Response-heterogeneity section above** (route-b effect modification): the real modifier this page should
carry is a graded baseline-SBP interaction, of which the \~3:1 hypertensive:normotensive ratio is a
coarsened summary. Age (older) and non-white ethnicity are independent modifiers; **baseline sodium
intake is NOT** (P trend=0.20) — corroborating WHO's «independent of baseline sodium intake».
[@huang2020, Results + Discussion]

**Competing interest (same as He's lineage).** FJH member / GAM chairman of CASH + WASH; NRCC + NC WASH;
BN received salt substitute from manufacturers for other trials. The RCT-pooled effects are hard data;
the pro-reduction interpretive framing (short-trial dismissal, the direct dismissal of PURE, the
low-intake-artefact framing) is advocacy-shaped and read at face value only for the data, caveated for
the interpretation — symmetric standards.

### Lipids null — corroborates WHO's high/no-effect rating (same lineage)

He finds no significant change in total cholesterol (+0.05, P=0.18), LDL (+0.05, P=0.11), HDL (-0.02,
P=0.19) or triglycerides (+0.04, P=0.22) with modest reduction — the small physiological renin/
aldosterone/noradrenaline rises being the compensations WHO also observed. This **corroborates** WHO's
*high-certainty, no-harmful-effect-on-lipids* rating (this page's Limits), but through the same
He/MacGregor lineage — a body line, not a `sources:`-padding independent backing.
[@he2013, Table 3]

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
[inferred from @who2012]

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
[inferred from @who2012]

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

**He 2013 rebuts the J-curve — but from the advocacy side and without the strong check.** He dismisses
the two 2011 JAMA papers that WHO cited (Stolarz-Skrzypek: lower salt -> higher CV mortality;
O'Donnell: a J-shaped association) as having «many methodological flaws, such as measurement error in
assessing daily salt intake, confounding factors not controlled for, and reverse causality». The named
mechanisms are exactly [[The U-Shaped Association Artifact]]'s recipe — so the *hypothesis* that the
low-intake arm is artifact is now on the record with mechanism. **But this is a partisan critique**
(He/MacGregor are CASH/WASH advocates) and, decisively, it is **only a critique** — no
referent-corrected or Mendelian-randomization analysis of the low-intake arm, which is the *strong*
check that concept requires. So He argues the arm away; he does not adjudicate it.
[@he2013, Effect of salt reduction on CV risk]

**The AWAITS therefore stays open.** `AWAITS` a source that *adjudicates* the upper-arm/lower-arm
question directly with a confounder-immune method (the post-2011 literature: PURE, the Cochrane and
Graudal lines, and a genetic/MR instrument on the low-intake arm) — He 2013 supplies the advocacy
rebuttal, not the adjudication.

**A third major body encodes the split as uncertainty rather than resolving it `[2026-08-04, Afshin GBD 2017]`.**
The GBD 2017 dietary-risks analysis needed an *optimal* sodium level to compute attributable burden,
and rather than pick one it published the RCT-vs-observational disagreement as a deliberately wide band:

> «To reflect the uncertainty in existing evidence on optimal level of intake for sodium, 1--5 g per day
> was considered as the uncertainty range for the optimal level of sodium where less than 2·3 g per day
> is the intake level of sodium associated with the lowest level of blood pressure in randomised
> controlled trials and 4--5 g per day is the level of sodium intake associated with the lowest risk of
> cardiovascular disease in observational studies.»
> [@afshin2019]

**This is the exact split this section holds, seen from the modelling side.** The BP-minimising intake
(RCTs, <2.3 g) and the CVD-minimising intake (observational, 4-5 g) point to *different* optima, which
is what a J-curve on the hard outcome would produce — and GBD, an independent consortium with no
salt-advocacy stake, **does not adjudicate it either**: it widens the uncertainty to 1-5 g and carries
both. So the corpus now holds three postures on the low-intake arm — WHO (names it, cannot answer),
He/MacGregor (rebut it from advocacy, no strong check), GBD (encode it as uncertainty) — **and none
runs the confounder-immune adjudication.** GBD corroborates *unprobed, not disproved*; it does not close
the gap -> [[The U-Shaped Association Artifact]].
[inferred from @afshin2019]

## The hard-outcome RCT arrives — but on a confounded (Na-down + K-up) exposure `[2026-08-04, Neal SSaSS]`

This page's central gap was that **hard outcomes sit at very low certainty** (all cohort evidence, the
surrogate-transfer doing the work). SSaSS (Neal 2021, NEJM) is the **large RCT with
patient-important outcomes** — but it tests a **potassium-enriched salt substitute (75% NaCl / 25% KCl)**,
so it moves **two exposures at once** and its benefit **cannot be attributed to sodium reduction alone.**

**What it found** (open-label cluster-RCT, 600 rural-China villages, 20,995 people with prior stroke or
age >=60 + high BP, 4.74 y follow-up; events adjudicated blind to assignment):

| Outcome | Salt sub vs regular (per 1000 py) | Rate ratio (95% CI) | Absolute |
|---|---|---|---|
| **Stroke** (primary) | 29.14 vs 33.65 | **0.86 (0.77-0.96)**, P=0.006 | **−4.5 / 1000 py** |
| **Major adverse CV events** | 49.09 vs 56.29 | **0.87 (0.80-0.94)**, P<0.001 | **−7.2 / 1000 py** |
| **All-cause death** | 39.28 vs 44.61 | **0.88 (0.82-0.95)**, P<0.001 | **−5.3 / 1000 py** |

[@neal2021]

The achieved contrast: 24h urinary sodium **−15.2 mmol** (−350 mg), potassium **+20.6 mmol** (+803 mg),
SBP **−3.34 mmHg** (−4.51 to −2.18). [@neal2021]

**Why this is the decision-relevant caveat, not a footnote.** The intervention **raised potassium more
than it cut sodium** (+20.6 vs −15.2 mmol), and the authors state both exposures «independently lower
blood pressure and… have synergistic effects». So SSaSS is strong evidence that a **salt substitute**
reduces stroke, CV events and death in a high-risk stratum — it is **not** clean evidence that *sodium
reduction per se* delivers that benefit. The corpus's cleanest hard-outcome sodium RCT is therefore a
**joint Na:K lever**, which is exactly the joint target both this page and [[Potassium Intake and Blood Pressure]] flag as un-adjudicated — SSaSS adjudicates the *lever*, not either electrolyte separately.
[inferred from @neal2021]

**The absolute benefit rides on high baseline risk (route-a).** These are large absolute effects (−4.5 to
−7.2 events per 1000 person-years) because the population is extreme: **72.6% prior stroke**, mean BP
154/89, mean age 65. The \~12-14% *relative* reductions may transport to a lower-risk stratum, but the
**absolute** benefit shrinks with baseline risk — a lean, normotensive, low-stroke-risk person gets a far
smaller absolute effect from the same switch. This is [[Baseline Risk and the Relative-Absolute Split]]
applied: SSaSS earns a strong recommendation *for its own stratum*, not a universal one.
[inferred from @neal2021]

**The lower-arm / contraindication stratum (route-c) — reassuring but scoped.** The safety worry for a
K-raising intervention is hyperkalaemia. SSaSS found **no excess** (3.35 vs 3.30 per 1000 py; RR 1.04,
0.80-1.37; P=0.76) and no excess sudden death — but it **excluded known serious kidney disease,
potassium-sparing diuretics and K-supplements by history**, did **no biochemical renal prescreening**,
and did not measure serum potassium serially. So the safety reassurance holds for the *screened*
population; **CKD / impaired potassium excretion remains a real harm-firing stratum** where a salt
substitute is contraindicated (concordant with the route-c boundary on [[Potassium Intake and Blood Pressure]]). [@neal2021]

**The events slightly exceed what the measured BP fall predicts — a recurring pattern.** Via
[[Blood Pressure Lowering and Cardiovascular Events]] (BPLTTC: \~13% stroke reduction per 5 mmHg SBP), a
−3.34 mmHg fall predicts a stroke RR near **0.91**; SSaSS observed **0.86**. The observed benefit
outruns the BP-channel prediction — the same excess [[Potassium Intake and Blood Pressure]] found for
potassium's cohort stroke effect. Three non-exclusive reasons: (i) a **BP-independent** electrolyte
effect (potassium); (ii) the measured −3.34 mmHg **understates** the sustained effect (adherence
dilution + a single-day recovery-biomarker + Huang's short-trial underestimate — the page's *lower-bound*
reading); (iii) noise in a single subgroup measurement. Direction is corroborated; the exact split
between sodium, potassium and dilution is **not identified** by this trial.
[inferred from @neal2021; @bplttc2021]

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
  health", sourced to a 2003 expert consultation rather than to evidence graded here. **The potassium
  half is now held** -- [[Potassium Intake and Blood Pressure]] (WHO's companion Aburto 2013 SR+MA) --
  and it is the **same WHO/CASH lineage**, so the two are two arms of one programme, not independent
  witnesses; the Na:K ratio itself stays un-adjudicated on both pages (asserted 1:1-beneficial, never
  graded against a hard outcome). Note the **asymmetry**: sodium reduction lowers BP in normotensives
  too, potassium raising does **not** (its normotensive effect is a flat zero).
- **Any low- or middle-income-country evidence.** All RCTs were run in Australia, Europe, North America
  and New Zealand; cohorts in Europe, Japan and the USA. The PICO setting is "All countries" and
  transportability is never discussed -- while the guideline's stated motivation is LMIC-framed.


[inferred from @who2012]
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


[inferred from @who2012]
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
  [inferred from @willett; @who2012]

## A second guidance family on the same stratification — and it is NOT a second witness `[2026-07-28, ESC]`

ESC reports the same hypertensive/normotensive split this page
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
committees.

**He 2013 is that lineage's own primary meta-analysis, and it gives a THIRD estimate of the same
ratio: 2.23** (SBP -5.39 hypertensive / -2.42 normotensive) — against WHO's 2.94 and ESC's 3.05. So the
corpus now holds three \~2-3:1 hypertensive-to-normotensive gradients, **all from the same He/MacGregor
lineage** — which is why none is an independent witness to another. Three numbers on one gradient is
a robustness *of that group's finding*, not cross-group convergence; the spread (2.23-3.05) reflects
different pooled sets and unstated doses, not three independent confirmations.
[inferred from @he2013] (Not the stronger claim that both bodies pooled the *identical* study set — WHO's actual
pooled lists are in unpublished in-house reviews this page's Limits calls unverifiable; see the
width-of-claim note below.)

**No `[E-independent]` is claimable here.** Every surface marker points the wrong way — different body,
different continent, different decade, near-identical ratio — and the substantive marker is absent.
This is the laundering trap in its textbook form, and it was caught by checking the reference rather
than by the numbers looking suspicious.
[inferred from @esc2021; @who2012]

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
[inferred from @esc2021; @who2012]

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

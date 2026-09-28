---
type: framework
question: Does magnesium (dietary intake or supplement) reduce cardiometabolic outcomes, for whom, and is magnesium the lever or a marker of the diet carrying it?
aliases: [Magnesium, Dietary Magnesium, Magnesium Intake, Dietary Magnesium Intake, Magnesium and Cardiovascular Disease, Magnesium and Diabetes, Magnesium and Stroke, Magnesium and Mortality, Magnesium Supplementation, Magnesium and Blood Pressure]
authors: [Fang, Xuexian; Wang, Kai; Han, Dan; He, Xuyan; Wei, Jiayu; Zhao, Lu; Imam, Mustapha Umar; Ping, Zhiguang; Li, Yusheng; Xu, Yuming; Min, Junxia; Wang, Fudi; Dibaba, Daniel T; Xun, Pengcheng; Song, Yiqing; Rosanoff, Andrea; Shechter, Michael; He, Ka; Zhang, Xi; Li, Yufeng; Del Gobbo, Liana C; Wang, Jiawei; Zhang, Wen]
sources: [Fang - Dietary Magnesium Cardiovascular Diabetes Mortality Meta-Analysis 2016, Dibaba - Magnesium Supplementation Blood Pressure 2017, Zhang - Magnesium Supplementation Blood Pressure 2016]
cluster: sodium-bp
confidence: medium
relationships:
  related_to:
    - Potassium Intake and Blood Pressure
    - Sodium Intake and Blood Pressure
    - DASH Diet and Blood Pressure
    - Blood Pressure Lowering and Cardiovascular Events
    - Measurement Error in Dietary Assessment
    - Is the Food Category Doing Any Work
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
    - Vitamin and Mineral Supplements for Disease Prevention
    - Magnesium Supplementation and Subjective Anxiety
created: 2026-08-23
updated: 2026-09-25
self_critiqued: 2026-09-25
---

A single gold dose-response SR+MA of prospective cohorts (Fang 2016, BMC Medicine): 40 publications /
70 reports, >1 million participants, 67,261 cases, 4-30 year follow-up, FFQ-assessed **dietary**
magnesium (NOT supplements). It quantifies what a **100 mg/day higher dietary magnesium intake** is
associated with across six outcomes.
[@fang2016magnesium]

## The effect estimates — outcome-specific, not uniform

Per 100 mg/day higher dietary magnesium (relative risks; the analysis reports **no absolute risks** —
absolute benefit scales with each stratum's baseline risk, route (a), see
[[Baseline Risk and the Relative-Absolute Split]]):

| Outcome | RR per +100 mg/day (95% CI) | Verdict |
|---|---|---|
| Type 2 diabetes | 0.81 (0.77-0.86) | benefit — largest and most robust |
| Heart failure | 0.78 (0.69-0.89) | benefit, but thin base (3 datasets / 2 cohorts) |
| Stroke | 0.93 (0.89-0.97) | benefit — ischemic-driven |
| All-cause mortality | 0.90 (0.81-0.99) | benefit — borderline, least robust |
| CHD | 0.92 (0.85-1.01) | no significant association per-increment |
| Total CVD | 0.99 (0.88-1.10) | no association |

The author summary: a 100 mg/day increase is associated with a **7% / 22% / 19% / 10%** lower risk of
**stroke / heart failure / T2D / mortality**, and **no clear association with CHD or total CVD**.
[@fang2016magnesium]

**Why the split matters:** the outcome menu is not moved uniformly (as it never is —
[[Surrogate Outcomes]]). T2D carries the strongest, largest-magnitude, tightest signal; total CVD is a
clean null. A single *magnesium is cardioprotective* headline would erase that structure.

## Curve shape — non-linearity is flagged but NOT located

Restricted-cubic-spline tests reject a purely linear model for **CHD (P<0.05), stroke (P<0.001),
T2D (P<0.001), and mortality (P<0.01)**; CVD shows **no** non-linearity (P=0.097). But the paper gives
only a spline P-value and a figure — it **does not locate a knee, threshold, or plateau** in the text.
Per the dose-response discipline, that is *a non-linear shape is present over the studied range*, not
*a minimum effective dose sits at X*. No optimum is derivable here.
[@fang2016magnesium]

- **Studied ranges (the extrapolation boundary):** roughly **100-550 mg/day** across outcomes
  (CVD/T2D/mortality \~100-500; CHD \~150-450; stroke \~150-550). Any apparent flattening at the top edge
  is as likely the sampling boundary as a true plateau.
- The **RDA (350 mg/day male, 300 mg/day female)** is a deficiency-coverage construct — read it as a
  requirement floor, never as the optimum this curve implies; population intakes in EU/US surveys run
  *below* it. [@fang2016magnesium]

## The binding uncertainty — is magnesium the lever, or a marker of the diet carrying it?

The magnesium-rich foods are whole grains, green leafy vegetables, nuts, beans, and cocoa — i.e. a
**whole-food, plant-rich dietary pattern** (the same foods behind the [[DASH Diet and Blood Pressure|DASH]]
mineral story and [[Potassium Intake and Blood Pressure|potassium]]). The authors themselves cannot rule
out that magnesium is a proxy: «we cannot exclude the possibility that other nutrients and/or dietary
components correlated with dietary magnesium may have been responsible, either partially or entirely,
for the observed associations».
[@fang2016magnesium]

This is the [[Is the Food Category Doing Any Work|component-vs-pattern]] problem in full: an
observational dietary-magnesium gradient is *not* evidence that the magnesium atom is the active
ingredient rather than the food matrix or the overall diet quality it indexes (). **Consequence for
the recommendation:** *eat more magnesium-rich whole foods* is well-supported directionally; *supplement
magnesium to cut CVD/mortality* is NOT what this evidence shows.

**The RCT leg partly resolves this confound — for one endpoint.** Dibaba's supplement RCTs isolate the
magnesium atom (an isolated pill/solution, placebo-controlled), so their BP reduction cannot be the food
matrix or overall diet quality — for **blood pressure in the impaired stratum**, the atom itself carries a
causal effect. That is a genuine narrowing of the lever-vs-marker uncertainty Fang could not touch. Two
limits keep it narrow: it holds only for the **BP surrogate** (not the hard outcomes Fang measured), and
only in the **metabolically-impaired / low-Mg** stratum (plausibly deficiency-correction, above). The
pattern-vs-component confound therefore stays open for magnesium's *hard-outcome* signal; it is closed only
for *supplement -> BP -> impaired stratum*.

<div class="recent-update" data-last-updated="2026-09-25">

## Dietary is not supplemental — a different exposure

Fang is dietary intake only. The paper *cites* separate trial evidence that oral magnesium **supplements**
(>=4 months) improve insulin sensitivity and glucose control (Simental-Mendia, via Fang) — but that is a
different exposure (isolate vs food matrix), not pooled here, and it reports a surrogate (glycaemia), not
hard outcomes. No large RCT has raised magnesium intake to prevent CVD/T2D *events*; for hard outcomes the
base is entirely observational. [@fang2016magnesium]

The supplement leg Fang only gestured at is now held for one surrogate — **blood pressure** — via two
RCT-MAs: Dibaba 2017 (impaired stratum, below) and Zhang 2016 (general population, added 2026-09-25). Both
are a *different exposure* (isolated supplement) on a *different endpoint* (a BP surrogate, not events) than
Fang's dietary-cohort hard outcomes, so they do not merge with Fang's numbers — see the three-leg parameter
table under *Synthesis*. Zhang is the parent general-population pool that Dibaba re-slices to the impaired
stratum (8/11 shared trials) — so Zhang and Dibaba are the same question at two strata, not independent
replications.

</div>

<div class="recent-update" data-last-updated="2026-09-25">

## The supplement-RCT causal leg — magnesium supplementation lowers BP in the impaired stratum (Dibaba 2017)

A gold MA of **RCTs** (Dibaba 2017, AJCN): 11 parallel-group trials, 543 participants (278 supplemented),
follow-up 1-6 months (mean 3.6). This is the **causal** leg — randomization isolates the magnesium and
breaks the pattern-vs-component confound that limits Fang's observational dietary gradient (for this one
endpoint). [@dibaba2017mg]

**Stratum — deliberately restricted, and that is the point.** Trials were included *only* in participants
with insulin resistance, prediabetes, type 2 diabetes, or cardiovascular disease (no renal/cancer trials
were found). Prior MAs mixed apparently-healthy and primary-hypertensive participants; Dibaba argues the
impaired stratum responds differently — «Note that individuals with or without preclinical or chronic
disease may respond to magnesium supplementation differently» — and pooled only the impaired stratum.
[@dibaba2017mg]
This is a **restriction, not a within-study interaction test** — it is route-(b)-*flavoured* (stratum
selected on metabolic condition) but does not formally test effect-modification; the *larger effect than
mixed-population MAs* claim is a cross-MA comparison, not an interaction coefficient.

**The effect — small, and read the right number.** The placebo-controlled (between-group) estimate is the
**standardized mean difference: SBP SMD -0.20 (95% CI -0.37, -0.03); DBP SMD -0.27 (95% CI -0.52, -0.03)**.
In mm Hg the paper reports two *different* framings that must not be conflated:

| mm Hg figure | What it is | Value |
|---|---|---|
| Between-group (placebo-controlled, the causal estimate) | supplementation vs control | SBP -2.22 · DBP -2.54 |
| Within-arm (baseline -> end, supplementation group only) | not placebo-subtracted | SBP -4.18 · DBP -2.27 |

The headline «Magnesium supplementation resulted in a mean reduction of 4.18 mm Hg in SBP and 2.27 mm Hg in
DBP» is the **within-arm** before-after change in the treated arm, *not* the placebo-controlled effect; the
controlled between-group decrement is «a weighted mean decrement in SBP by 2.22 mm Hg and in DBP by 2.54 mm
Hg when comparing the supplementation group with the control group». Quote the between-group / SMD as the
causal effect. [@dibaba2017mg]

**Robustness — SBP solid, DBP fragile.**

- SBP: no significant heterogeneity (chi2(10)=10.21, P=0.42); significant in every leave-one-out except
  dropping Guerrero-Romero & Rodriguez-Moran (ref 13). Egger P=0.07 (no strong publication-bias signal).
- DBP: **significant heterogeneity** (chi2(10)=20.03, P=0.03); lost significance on several leave-one-out
  cuts and when the assumed baseline-end correlation was set to r=0.3 (held at r=0.5/0.7). Egger P=0.49.
- Dose 365-450 mg/d elemental Mg (supra-RDA); trials short (mean 3.6 mo). [@dibaba2017mg]

**Deficiency-correction, not a general dose-response — the transportability caveat.** Several included
trials selected hypomagnesemic / low-serum-Mg diabetics, so the effect may be **repletion of a deficit**
rather than a dose-response that transports to magnesium-replete healthy people — the deficiency-vs-
enhancement distinction ([[Vitamin and Mineral Supplements for Disease Prevention]]). Dibaba themselves
flag residual confounding by background dietary magnesium and unadjusted co-medications «thereby possibly
confounding the effect of dietary magnesium intake and the heterogeneity between some of the trials,
particularly for DBP». [@dibaba2017mg]
So the transportability target is the **metabolically-impaired, plausibly-hypomagnesemic** stratum, not the
reasonably-healthy default reader.

**BP is a surrogate — the events transmission is borrowed, not measured.** No Dibaba trial measured CV
events; the leap from BP to outcomes rests on antihypertensive-drug trials — «The trial suggested that a
reduction of BP by 2-3 mm Hg might account for a difference of stroke rate by 6-12% between antihypertensive
medications». That transmission is evidenced for *drug-induced* BP lowering, not for magnesium, and a
surrogate that moves is not an outcome that moves ([[Surrogate Outcomes]], [[Blood Pressure Lowering and Cardiovascular Events]]).
[@dibaba2017mg]

</div>

<div class="recent-update" data-last-updated="2026-09-25">

## The general-population supplement-RCT arm — Zhang 2016 (the parent pool Dibaba re-sliced)

A gold MA of **34 double-blind placebo-controlled RCTs**, 2028 participants (1010 supplemented, 1018
placebo), median 368 mg/d elemental Mg for 3 months, in **general-population normotensive OR hypertensive
adults** — the arm Dibaba deliberately excluded. Placebo-controlled (between-group) pooled effect: **SBP
-2.00 mm Hg (95% CI -3.58 to -0.43); DBP -1.78 mm Hg (95% CI -2.82 to -0.73)**, with serum Mg +0.05 mmol/L.
«Mg supplementation at a median dose of 368 mg/d for a median duration of 3 months significantly reduced
systolic BP by 2.00 mm Hg (95% confidence interval, 0.43–3.58) and diastolic BP by 1.78 mm Hg (95%
confidence interval, 0.73–2.82).» So a small **general-population** BP effect is real — «provision of Mg may
slightly lower BP and might be effective in preventing hypertension in the general population».
[@zhang2016magnesiumbp]

**These figures are the causal (placebo-controlled) estimate — and that resets the stratum contrast.** The
naive reading is that the impaired stratum responds *more* (Dibaba's headline 4.18 mm Hg vs Zhang's 2.00).
But 4.18 is Dibaba's **within-arm** change (baseline->end, treated group only, not placebo-subtracted); the
like-for-like placebo-controlled Dibaba figure is **SBP -2.22 mm Hg**, essentially identical to Zhang's
general-population **-2.00**. Compared as the same quantity, the general-population and impaired-stratum
*causal* effects are the same size — so the *impaired responds more* story is NOT supported at the level of
the placebo-controlled estimate; it rested on a within-vs-between-group quantity mismatch (the parameter-table
discipline catching exactly the error it exists to catch). [inferred from @zhang2016magnesiumbp; @dibaba2017mg]

**The route-(b) effect-modification signal is suggestive but NOT clean — read Zhang's own interaction tests.**
Within Zhang (all placebo-controlled, same design, same quantity — the cleanest available test), the point
effect IS larger in the low-Mg / treated strata: baseline serum Mg Q1 (<0.71 mmol/L) SBP -4.50 (-7.24 to
-1.76), DBP -5.05 (-9.12 to -0.97); treated (on antihypertensive/antidiabetic drugs) SBP -5.69 (-10.4 to
-1.00). Zhang's discussion concludes «the antihypertensive effect of Mg was significant only among the
subgroup with Mg deficiency». **But the between-subgroup interaction tests were non-significant** —
baseline-Mg P-interaction 0.21 (SBP) / 0.90 (DBP); medication-history 0.11 / 0.72 — so this is a
larger-point-estimate + within-subgroup-significance pattern, not an established effect-modifier. The **only**
significant BP interactions Zhang found were **methodological** (trial quality P=0.02; dropout rate P=0.002),
and prior BP status showed **no** modification (normotensive vs hypertensive P-interaction 0.79 / 0.59).
[@zhang2016magnesiumbp]

**Net:** deficiency-correction remains the most plausible mechanism for any stratum difference (route-(b),
consistent with Dibaba's design logic and the [[Vitamin and Mineral Supplements for Disease Prevention]]
deficiency-vs-enhancement rule), but the interaction is **unproven** on either MA's clean tests — a route-(b)
*candidate*, held under the U/J-artifact-style caution that a subgroup point estimate must survive an
interaction test before it drives a recommendation.

</div>

## Measurement error and the null arms

Dietary magnesium is FFQ-self-reported, and the authors note «measurement error might occur in dietary
assessment, which would likely bias true associations towards a null association» — so the **CVD/CHD
nulls and the mortality upper bound touching 1.0 are weak evidence of no gradient**, not proof of none
([[Measurement Error in Dietary Assessment]]; attenuation-toward-null).
[@fang2016magnesium]

## Robustness notes

- **Mortality is the weakest of the four positive findings**: per-100mg RR 0.90 (0.81-0.99) with I2=62%,
  upper CI at 0.99, and it did **not** survive a subgroup/meta-regression cut where stroke incidence
  stayed inverse (0.92; 0.89-0.95) but mortality did not (RR 1.07; 0.90-1.28).
- **Stroke** is ischemic-driven (ischemic 0.93, 0.88-0.98; hemorrhagic null 0.97, 0.88-1.07).
- **Heart failure** is the largest per-increment effect (22%) but rests on 3 datasets from 2 cohorts —
  precise (I2=0) but narrow; non-linearity untestable.
- Publication bias: no significant evidence (funnel/Egger/Begg) across outcomes. NOS mean quality 8.2.

All figures in this section: [@fang2016magnesium]

<div class="recent-update" data-last-updated="2026-09-25">

## Synthesis — three legs, and which pairs are the same quantity

The page now holds three gold sources. The same-quantity check governs which may be compared and which
may only be configured:

| Parameter | Fang 2016 | Dibaba 2017 | Zhang 2016 | Same quantity? |
|---|---|---|---|---|
| Exposure | dietary Mg (FFQ), +100 mg/d | Mg supplement, 365-450 mg/d | Mg supplement, median 368 mg/d | Fang No (food vs isolate); **Dibaba \~ Zhang: yes** (both isolate supplement) |
| Design | prospective cohort (observational) | MA of RCTs | MA of RCTs | Fang No; **Dibaba = Zhang both RCT-MA — but 8/11 trials SHARED** (not independent) |
| Outcome | hard endpoints (incidence) | BP surrogate | BP surrogate | Fang No; **Dibaba = Zhang both BP** |
| Population | general adult cohorts | impaired (IR/prediabetes/T2D/CVD) | general (normotensive + hypertensive) | **Dibaba vs Zhang: different STRATA — the contrast** |
| Effect metric | RR per +100 mg/d | SMD; between-group -2.22 / within-arm -4.18 mm Hg | between-group WMD -2.00 mm Hg | Compare **between-group to between-group only**: -2.22 \~ -2.00; NOT -4.18 |

**Fang is a type-F composite with the two supplement MAs** (different exposure/design/outcome, authorship
splits it from the supplement leg): Fang shows a dietary-intake **association with hard outcomes** but
cannot say magnesium is the lever; the supplement RCTs show an isolate **causally moves a BP surrogate**
but cannot reach events. Their union raises confidence that a real magnesium signal exists and that one
link (Mg -> BP) is causal — while the decision-critical link (Mg -> hard events, causally) stays unproven.
[inferred from @fang2016magnesium; @dibaba2017mg; @zhang2016magnesiumbp]

**Zhang and Dibaba are the SAME question at two strata — a type-F cross-stratum arm, NOT type-E, and NOT a
clean interaction.** Same exposure (isolate supplement), same design (RCT-MA), same outcome (BP), differing
only in stratum (general vs impaired). They are **not independent**: Dibaba shares 8 of its 11 trials with
Zhang — «Eight of the studies overlapped with the studies included in the present study» — and Song Yiqing
co-authored both, so Zhang is the **PARENT general-population pool** and Dibaba an impaired-stratum
**re-slice** of largely the same trials (laundered-E if marked as independent replication — so NOT
`[E-independent]`). What the pair buys is type-F: Zhang supplies the general-population arm Dibaba excluded,
and the pair *bounds* the stratum question rather than confirming it. [@dibaba2017mg]

**And bounding it deflates the stratum story.** Comparing the **like** quantities (both placebo-controlled
between-group): Dibaba impaired **-2.22 mm Hg** \~ Zhang general-population **-2.00 mm Hg** — the causal
effects are the same size across strata. The apparent *impaired responds more* rested on Dibaba's
within-arm -4.18 (not placebo-subtracted) vs Zhang's placebo-controlled -2.00 — a not-same-quantity
comparison. So the route-(b) effect-modification signal is a **candidate, not a finding**: the larger
effect shows only in Zhang's own low-Mg/treated subgroups (non-significant interaction) and in a
within-vs-between-group artifact, never in a clean interaction test on either MA. Deficiency-correction
remains the most plausible *mechanism* if any modification is real, but neither MA establishes it.
[inferred from @zhang2016magnesiumbp; @dibaba2017mg]

</div>

<div class="recent-update" data-last-updated="2026-09-25">

## Layer-1 placement (where this ranks)

A modifiable exposure with a plausible relative signal on T2D and stroke (dietary, observational) and a
small causal effect on a BP surrogate (supplement RCT, impaired stratum) — but (i) no hard-outcome RCT,
(ii) the dietary hard-outcome signal still confounded by pattern-vs-component, (iii) the supplement BP
effect small, short-term, DBP-fragile, and plausibly deficiency-correction, and (iv) absolute benefit
unquantified. It is a **refinement lever, not a big rock**: for a reasonably healthy (magnesium-replete)
person, *prefer magnesium-rich whole foods* is subsumed by the broader whole-food / DASH-pattern
recommendation that already carries potassium, fibre, and low-SFA benefits, and *supplementing to lower BP*
has no demonstrated events benefit and is sized against mature, low-harm BP drugs and the bigger
sodium/potassium/weight levers. A general-population placebo-controlled BP effect is now held (Zhang, SBP
-2.00 / DBP -1.78) — but it is **small and roughly the same size across strata** on the like-for-like
between-group comparison (Zhang -2.00 \~ Dibaba impaired -2.22), so the *impaired stratum is where the rock
is larger* claim is **not clean** — the deficient/low-Mg subgroup shows a larger point effect but no
significant interaction. Net: a small surrogate-only lever whose marginal rank does not clearly rise even in
the impaired stratum.

</div>

<div class="recent-update" data-last-updated="2026-09-26">

## Gaps (G)

- Does repleting magnesium (diet OR supplement) *causally* reduce hard cardiometabolic **events**? The
  RCT base now reaches a BP *surrogate* (Dibaba) but **no** trial measured events — the surrogate-to-outcome
  causal gap is open (insufficient evidence, not a null).
- Does the supplement BP effect hold in **magnesium-replete, non-impaired** people, or is it deficiency-
  correction confined to the impaired/low-Mg stratum? **PARTLY ANSWERED (Zhang 2016, held):** a
  general-population placebo-controlled effect IS present (SBP -2.00, DBP -1.78, incl. normotensives), and
  it is \~the same size as Dibaba's impaired-stratum between-group effect (-2.22), so the effect is not
  confined to the impaired stratum. **Still open:** whether it is *larger* in the deficient stratum — the
  larger point estimates in Zhang's low-Mg/treated subgroups did not reach a significant interaction, so
  effect-modification stays an unproven route-(b) candidate. Needs an RCT that pre-stratifies on baseline
  serum Mg with an interaction test, or an IPD MA.
- What is the shape of the T2D / stroke curve (knee location, minimum effective dose)? Non-linearity is
  flagged but unquantified in Fang — needs the spline coordinates or a curve-shape SR.
- Absolute risk reductions by baseline-risk stratum — not derivable from these relative/surrogate-only
  sources.

Magnesium's **anxiety/stress** outcome is a *different cell*, held separately at
[[Magnesium Supplementation and Subjective Anxiety]] (low warrant) — do not read a cardiometabolic magnesium
benefit as an anxiety benefit, and vice versa.

</div>

## References

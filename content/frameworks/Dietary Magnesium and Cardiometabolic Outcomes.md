---
type: framework
question: Does higher dietary magnesium intake reduce hard cardiometabolic outcomes, for whom, and is magnesium the lever or a marker of the diet carrying it?
aliases: [Magnesium, Dietary Magnesium, Magnesium Intake, Dietary Magnesium Intake, Magnesium and Cardiovascular Disease, Magnesium and Diabetes, Magnesium and Stroke, Magnesium and Mortality]
authors: [Fang, Xuexian; Wang, Kai; Han, Dan; He, Xuyan; Wei, Jiayu; Zhao, Lu; Imam, Mustapha Umar; Ping, Zhiguang; Li, Yusheng; Xu, Yuming; Min, Junxia; Wang, Fudi]
sources: [Fang - Dietary Magnesium Cardiovascular Diabetes Mortality Meta-Analysis 2016]
cluster: sodium-bp
confidence: low
relationships:
  related_to:
    - Potassium Intake and Blood Pressure
    - DASH Diet and Blood Pressure
    - Measurement Error in Dietary Assessment
    - Is the Food Category Doing Any Work
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
    - Vitamin and Mineral Supplements for Disease Prevention
created: 2026-08-23
updated: 2026-08-23
self_critiqued: 2026-08-23
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

## Dietary is not supplemental — a different exposure

This is dietary intake only. The paper *cites* separate trial evidence that oral magnesium **supplements**
(>=4 months) improve insulin sensitivity and glucose control (Simental-Mendia, via Fang) — but that is a
different exposure (isolate vs food matrix), not pooled here, and it reports a surrogate (glycaemia), not
hard outcomes. No large RCT has raised magnesium intake to prevent CVD/T2D; the base is entirely
observational. [@fang2016magnesium]

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

## Layer-1 placement (where this ranks)

A modifiable dietary exposure with a plausible, non-trivial *relative* signal on T2D and stroke — but
(i) observational-only with an unresolved pattern-vs-component confound, (ii) no hard-outcome RCT, and
(iii) absolute benefit unquantified. It is a **refinement lever, not a big rock**: for a reasonably
healthy person, *prefer magnesium-rich whole foods* is subsumed by the broader whole-food / DASH-pattern
recommendation that already carries potassium, fibre, and low-SFA benefits — magnesium does not add an
*independent, separately-actionable* lever on this evidence.

## Gaps (G)

- Does repleting magnesium (diet OR supplement) *causally* reduce hard cardiometabolic outcomes? No
  large hard-outcome RCT exists — the observational-to-causal gap is open (a genuine insufficient-evidence
  state, not a null).
- What is the shape of the T2D / stroke curve (knee location, minimum effective dose)? Non-linearity is
  flagged but unquantified here — needs the spline coordinates or a curve-shape SR.
- Absolute risk reductions by baseline-risk stratum — not derivable from this relative-only source.

## References

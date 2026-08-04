---
type: framework
question: For a primary-prevention adult, does a statin help — and does a zero coronary calcium score change that decision?
aliases: [Statin Primary Prevention, Power of Zero, CAC Zero Statin, Statin CAC, USPSTF Statin, Statin Number Needed to Treat, Statin Deferral]
authors: [US Preventive Services Task Force (org); Nasir, Khurram; Blaha, Michael J; Budoff, Matthew J; Krumholz, Harlan M]
sources: [USPSTF - Statin Use Primary Prevention 2022, Nasir - Coronary Artery Calcium Statin Candidates MESA 2015]
cluster: cvd-risk-estimation
confidence: high
relationships:
  related_to:
    - Risk Modifiers - When Extra Information Changes a Risk Estimate
    - SCORE2 Baseline Risk and the ESC Treatment Thresholds
    - Baseline Risk and the Relative-Absolute Split
    - Semaglutide for Cardiovascular Risk in Obesity
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
created: 2026-07-28
updated: 2026-08-04
self_critiqued: 2026-07-28
---

The statin decision in primary prevention is a **baseline-risk decision**. The relative effect of a
statin is roughly constant; the absolute benefit scales with how high the risk was to begin with
([[Baseline Risk and the Relative-Absolute Split]]). Two sources set the decision: **USPSTF 2022** [@uspstf2022] gives
the efficacy magnitudes and a risk threshold; **Nasir/MESA 2015** shows a zero coronary-calcium score
re-stratifies about half of statin-eligible people into a range where the benefit is small.

## Statin efficacy in primary prevention (USPSTF 2022)

A systematic review of 22 trials (mean follow-up 3.3 years, all enrolling ≥1 risk factor):

| Outcome | RR (95% CI) | Absolute risk difference |
|---|---|---|
| All-cause mortality | «0.92 [95% CI, 0.87 to 0.98]» | «−0.35%» |
| Composite CVD | «0.72 [95% CI, 0.64 to 0.81]» | «−1.28%» |
| Myocardial infarction | «0.67 [95% CI, 0.60 to 0.75]» | «−0.89%» |
| Stroke | «0.78 [95% CI, 0.68 to 0.90]» | «−0.39%» |
| CV mortality | «0.91 [95% CI, 0.81 to 1.02]» (NS) | «−0.13%» |

The relative effects are real and consistent; the **absolute** differences are already small in these
*higher-risk* trial populations. Harms were reassuring — no increase in serious adverse events, myalgia,
or (except high-intensity JUPITER, confined to those with diabetes risk factors) new diabetes.


[@uspstf2022]
## The USPSTF decision rule — and where a low-risk person falls

The threshold is explicit, and it is a **10-year-risk** threshold, because «the magnitude of benefit of
statin use is proportional to a person's estimated 10-year CVD risk»:

- **40–75 yr + ≥1 risk factor + 10-yr risk ≥10%** → prescribe a statin (Grade B, «at least a moderate
  net benefit»).
- **7.5% to <10%** → «selectively offer» (Grade C, «at least a small net benefit»); «The likelihood of
  benefit is smaller in this group».
- **<7.5%, or ≥76 yr** → no recommendation / insufficient evidence.

**So a primary-prevention person well below 7.5% 10-year risk is not a statin candidate by USPSTF at
all** — the drug question is closed by the baseline risk before any imaging is considered. (Two carve-
outs USPSTF names: this does «not pertain to adults with familial hypercholesterolemia or an LDL-C level
greater than 190 mg/dL» — those are treated regardless.) USPSTF scores risk with the Pooled Cohort
Equations, which it concedes overpredict in many populations.

**USPSTF does not use CAC:** it «addressed the use of coronary artery calcium score for CVD risk
assessment in a separate recommendation» — i.e. deliberately kept it out of the statin rule.


[inferred from @uspstf2022]
## The power of zero (Nasir / MESA 2015)

Where a body *does* allow CAC, a zero score moves the decision. In 4,758 MESA adults (45–84 yr, median
10.3-yr follow-up), applying the 2013 ACC/AHA thresholds recommended 50% for statins and considered 12%
more — and CAC re-stratified them sharply:

- **58% of the whole cohort, and 44% of the statin-eligible, had CAC = 0.** Among statin-eligible people
  with CAC=0 the ASCVD rate was «4.2 per 1,000 person-years», versus «11.2 per 1,000 person-years» with
  any CAC. In the *recommended* group specifically, CAC=0 carried «5.2 ASCVD events/1,000 person- years»;
  in the *considered* group, «1.5 per 1,000 person- years».
- **Estimated 10-year NNT** (applying an assumed 30% relative reduction to the observed rates): in the
  recommended group, **64 for CAC=0 vs 28 for CAC>100**; in the considered group, **223 vs 46**
  [@nasir2015, Table 3 — the "¼ 0" spans are OCR for "= 0"].
- The headline: «the absence of CAC reclassifies approximately one-half of candidates as not eligible for
  statin therapy», resting on the principle that «the net benefit from treatment is directly proportional
  to the absolute risk».

## The honesty on both sides — this is not a settled rule

- **Nasir's NNT is modeled, not measured.** It multiplies observed CAC-stratified event rates by a
  *borrowed* 30% relative reduction (from a Cochrane statin meta-analysis), not by a statin effect
  measured *within* a CAC-randomized trial. The authors say so: whether a «CAC-based strategy versus
  guideline-based recommendations for statin selection... will have a favorable impact on outcomes...
  needs to be critically tested by well-designed comparative-effectiveness clinical studies.» **No RCT
  has randomized statins by CAC.**
- **CAC=0 is low risk, not no risk.** 4.2/1,000 py is not zero, and NNT 64 is not infinity — a CAC=0
  statin candidate still has *some* modeled benefit. In diabetes, CAC=0 still carried 4.9/1,000 py (NNT
  69), so the de-risking is weaker there.
- **The 30% figure ties the two sources together and they agree.** Nasir's assumed relative reduction and
  USPSTF's *measured* composite-CVD effect are the same quantity, and they match:

  | Parameter | Nasir (assumed) | USPSTF (measured) | Same quantity? |
  |---|---|---|---|
  | Statin relative reduction, composite CVD | 30% (RR 0.70) | «0.72 [95% CI, 0.64 to 0.81]» (28%) | Yes — Nasir's input is consistent with USPSTF's trial estimate |

- **Population bounds:** MESA is 45–84 (so it says nothing about adults <45) and may select healthier
  volunteers; USPSTF's ARDs come from trial populations enriched for risk factors.


[@nasir2015]
## The unresolved divergence — lodged, not adjudicated

Whether CAC *should* guide the statin decision is contested across guidance families, and the evidence
does not settle it (no RCT):

- **USPSTF** keeps CAC out of the statin rule (insufficient evidence, separate recommendation).
- **ESC** allows CAC as a Class **IIb** modifier around thresholds ([[Risk Modifiers - When Extra Information Changes a Risk Estimate]]).
- **ACC/AHA and the MESA community** use CAC=0 to *defer* statins in the grey zone (this page's Nasir data
  is that case).

This is a genuine joined-issue candidate (risk-score-threshold vs imaging-guided allocation) but is
**not adjudicated here** — it AWAITS a source that either randomizes CAC-guided treatment or is an
independent institutional appraisal of the imaging-vs-score question.



## Decision relevance

- **Get the 10-year risk first; the threshold is the decision.** Below \~7.5%, USPSTF says not a statin
  candidate, and CAC only reinforces deferral (a low-risk person is very likely CAC=0 anyway).
- **In the grey zone (≈7.5–20%), a zero CAC roughly halves-to-quarters the absolute benefit** (NNT 64 vs
  28) and is a legitimate deferral input *where a body allows it* — but the deferral rests on modeled,
  not trial, benefit, so it belongs in shared decision-making, not an automatic rule.
- **CAC=0 de-risks the DECISION, not the biology.** ApoB/LDL remain causal; a high or rising ApoB, a high
  Lp(a), or familial hypercholesterolemia can still warrant treatment regardless of a zero score, and FH
  is explicitly carved out of the whole framework.
- **The statin is the pharmacotherapy comparator to the lifestyle lipid lever** — the lipid-axis analogue
  of [[Semaglutide for Cardiovascular Risk in Obesity]] on the weight axis. For a low-risk, CAC=0 person
  the realistic alternative to a statin is lifestyle plus monitoring, not nothing and not a drug with a
  fraction-of-a-percentage-point absolute benefit.


[inferred from @uspstf2022; @nasir2015]
## Limits

- **The CAC-guided-statin question has no RCT** — the standing open-loop (R1) problem in a sharp form.
- Nasir is one observational cohort with a modeled NNT; USPSTF is a strong systematic review but its
  ARDs are population-specific and it declines to rule on CAC.
- Neither source quantifies the CAC=0 negative predictive value *by age band* below 45 — the gap
  [[Risk Modifiers - When Extra Information Changes a Risk Estimate]] already flagged.

## References

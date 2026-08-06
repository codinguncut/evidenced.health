---
type: framework
question: How much does lowering LDL/apoB reduce hard cardiovascular events, per unit of lowering — and which lipid number should the target be?
aliases: [LDL Lowering Magnitude, Statin Per mmol Effect, CTT Meta-Analysis, LDL Reduction Events, ApoB vs LDL-C, Which Lipid to Target, LDL-C Event Reduction]
authors: [Cholesterol Treatment Trialists' Collaboration (org); Marston, Nicholas A]
sources: [CTT - Statin Intensive LDL Lowering Meta-Analysis 2010, Marston - ApoB Containing Lipoproteins Risk 2022]
cluster: cvd-risk-estimation
confidence: high
relationships:
  related_to:
    - LDL ApoB and Cumulative Exposure
    - Blood Pressure Lowering and Cardiovascular Events
    - Baseline Risk and the Relative-Absolute Split
    - Statins for Primary Prevention and the Power of Zero CAC
    - Surrogate Outcomes
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
created: 2026-08-05
updated: 2026-08-05
self_critiqued: 2026-08-05
---

Two separable questions sit under the lipid lever, and two sources answer them. **How much does
*lowering* buy** — the per-unit magnitude of event reduction (CTT 2010, the IPD meta-analysis of 26 statin
RCTs). And **which number to target** — the metric that carries the causal signal (Marston 2022, apoB over
LDL-C in \~430,000 people). This page holds the magnitude and the metric; the causal *model* underneath
(why LDL/apoB causes disease, why the dose is cumulative) is the nucleus
[[LDL ApoB and Cumulative Exposure]]. Structural sibling to
[[Blood Pressure Lowering and Cardiovascular Events]] on the other big cardiometabolic lever.

## The magnitude — CTT per 1.0 mmol/L LDL-C reduction

CTT scales every trial by the LDL-C reduction achieved at 1 year and reports the effect **per 1.0 mmol/L**
(169,138 participants, 26 trials, median \~5 y):

| Outcome (per 1.0 mmol/L LDL-C reduction) | Effect | 
|---|---|
| Major vascular events | **RR 0.78 (95% CI 0.76-0.80)** |
| All-cause mortality | RR 0.90 (0.87-0.93) |
| Coronary death | RR 0.80 |
| Non-fatal MI | RR 0.73 (-27%) |
| Coronary revascularisation | RR 0.75 (-25%) |
| Ischaemic stroke | RR 0.79 (-21%); any stroke -16% |
| Cancer incidence / non-vascular death | RR 1.00 / 0.97 (null) |

> «similar proportional reductions in major vascular events per 1·0 mmol/L LDL cholesterol reduction were
> found in all types of patient studied (rate ratio [RR] 0·78, 95% CI 0·76-0·80; p<0·0001), including
> those with LDL cholesterol lower than 2 mmol/L»
> [@ctt2010, Findings]

> «all-cause mortality was reduced by 10% per 1·0 mmol/L LDL reduction (RR 0·90, 95% CI 0·87-0·93;
> p<0·0001)»
> [@ctt2010, Findings]

**Mortality moved, not just the marker.** Unlike most of the surrogate cases the wiki holds, the LDL-C
reduction transmitted all the way to all-cause death in randomised evidence — the validated-surrogate
direction, and a worked instance of [[Surrogate Outcomes]]'s counter-exemplar. And with **no excess
cancer or non-vascular mortality** even at low LDL, which retires the old low-cholesterol-harm hypothesis
for the *drug-lowered* range.

## The shape — monotone, no threshold, multiplicative

- **No knee, no plateau in the studied range.** «There was no evidence of any threshold within the
  cholesterol range studied» [@ctt2010, 
  Interpretation]. Benefit persisted starting below 2.0 mmol/L (RR 0.71, -29%) and «even among those
  reaching 1·8 mmol/L (70 mg/dL) or lower» further reduction still produced definite benefit (RR 0.63, 99%
  CI 0.41-0.95) [@ctt2010, Results]. The
  RR per mmol «did not depend on the baseline LDL cholesterol concentration (trend p=0·2)».
- **The reduction compounds multiplicatively:** «a 2 mmol/L reduction would reduce the risk by about 40%
  (since the combination of risk ratios of 0·78×0·78 yields a risk ratio of about 0·6)»
  [@ctt2010, Discussion]. This is the
  per-unit face of the nucleus's *cumulative-exposure* thesis: successive mmol multiply, so **more and
  longer** both pay -> [[LDL ApoB and Cumulative Exposure]].
- A clean confirmation of the corpus's operative dose-response default — *every reduction pays*; the burden
  is on anyone claiming a knee to locate it. The persistence of benefit at low LDL also means there is no
  protective *lower* arm (no harm from low LDL in the drug-lowered range), the interventional parallel to
  [[The U-Shaped Association Artifact]].

## The metric — Marston: target apoB *particle number*, not cholesterol content or particle type

CTT scales by LDL-C because that is what the statin trials measured. Marston asks whether LDL-C is even the
right number to carry the risk. In UK Biobank (n=389,529, untreated) plus two statin RCTs (FOURIER,
IMPROVE-IT; n=40,430), each lipid is entered *simultaneously*:

- apoB, non-HDL-C and TG each predict MI alone, but **only apoB survives mutual adjustment** — «when
  assessed together, only apoB was associated (adjusted hazard ratio [aHR] per 1 SD, 1.27; 95% CI,
  1.15-1.40; P < .001). Similarly, only apoB was associated with MI in the secondary prevention cohort.»
  [@marston2022, Results]. Non-HDL-C fell to aHR
  1.09 (NS) and TG to 1.00 (NS) once apoB was held constant.
- **Particle TYPE stops mattering once particle NUMBER is fixed** — adjusting for apoB, the TG/LDL-C ratio
  (a proxy for TG-rich vs LDL particles) was flat (aHR 1.04, 0.99-1.09, P=.12): «for a given concentration
  of apoB-containing lipoproteins, the relative proportions of particle subpopulations may no longer be a
  predictor of risk» [@marston2022, Abstract].
- Verdict: «risk of MI was best captured by the number of apoB-containing lipoproteins, independent from
  lipid content (cholesterol or TG) or type of lipoprotein (LDL or TG-rich)»
  [@marston2022, Conclusions]. Where apoB is
  unavailable, «non-HDL-C in particular is the preferred surrogate for apoB, as it incorporates TG-rich
  lipoproteins in addition to LDL» — LDL-C is the weakest of the three because it misses the remnant
  particles.

## Synthesis — the two answers reconcile; they do not clash

[inferred from @ctt2010; @marston2022]

A naive reading pits them against each other: CTT scales the *entire* causal magnitude by LDL-C, while
Marston finds LDL-C carries **no independent signal** beyond apoB. The parameter table shows why this is a
**distinction, not a tension** (not-joined check (ii): different quantity, different question):

| Parameter | CTT 2010 | Marston 2022 | Same quantity? |
|---|---|---|---|
| Design | RCT IPD meta-analysis | prospective cohort (+ cited Mendelian randomization) | No |
| Estimand | *causal effect of lowering* LDL-C (treatment contrast) | *baseline risk discrimination* among correlated lipids | **No** |
| Lipid unit | achieved LDL-C reduction (mmol/L) | 1-SD of each lipid, mutually adjusted | No |
| What "LDL-C" does | the scaling proxy | drops to NS after apoB adjustment | — |

CTT's LDL-C-scaled magnitude and Marston's apoB-supremacy are **compatible because LDL-C and apoB are
tightly correlated in the general untreated population** — ρ >= 0.95 in Marston's untreated
primary-prevention cohort [@marston2022] — and a
statin lowers both. So for the concordant majority, CTT's «per 1.0 mmol/L LDL-C» is a stand-in for the
**apoB-particle reduction it accompanies** — the causal quantity Marston identifies and the nucleus names.
The decision-relevant seam, with its proviso made explicit:

- **The equivalence is strongest where the lipids concord, and that is NOT the treated/impaired case.**
  Statin treatment and the discordant metabolic states (metabolic syndrome, diabetes, hypertriglyceridemia
  — small-dense-LDL) drive LDL-C and apoB apart, and Marston found apoB supreme even in its *statin-treated*
  secondary cohort. So CTT's ρ>=0.95-backed LDL-C proxy holds for the concordant, general-population case
  and **weakens exactly where lipid-lowering or metabolic impairment has begun** — the reason to read the
  particle number, not the cholesterol, once treatment or discordance is in play
  -> [[LDL ApoB and Cumulative Exposure]].
- **Use apoB (or non-HDL-C) to *decide and monitor*; expect roughly CTT's magnitude per equivalent apoB
  reduction** (exactly in the concordant; approximately when read off LDL-C, under-counting where they
  discord). The two sources answer *which number* and *how much*, and only together give the whole decision.

**Independence note:** not a type-E robustness convergence. Ference (nucleus) co-authors Marston, and CTT
is the RCT evidence family the nucleus's consensus already rests on — same research programme. The value
here is A/F (magnitude × metric assembled into one decision structure; Marston refines what CTT's LDL-C
scaling *is*), not independent triangulation.

## Decision relevance



- **The relative effect is large and monotone; the absolute benefit still scales with baseline risk.** A
  \~22% RRR per mmol is a small absolute gain in a low-risk person and a large one in a high-risk person —
  the same treat-on-absolute-risk logic as the BP lever ([[Baseline Risk and the Relative-Absolute Split]],
  [[Statins for Primary Prevention and the Power of Zero CAC]]). CTT's constant RR across every baseline
  stratum is what licenses stratifying on baseline risk without any subgroup claim (route a).
- **Lower and longer both pay** (no threshold, multiplicative) — but "worth it" is a net-effect call: the
  rhabdomyolysis excess (4 vs 1 per 10,000) was confined to 80 mg simvastatin, and the whole-strategy
  trade-off, not the LDL number, is the unit of decision.
- **Drug route only.** CTT is statin-lowering; the magnitude does **not** transfer to a *dietary* LDL-C
  change (the MCE/Sydney disconnects -> [[Surrogate Outcomes]], [[Linoleic Acid and Cardiovascular Disease]]).

## Limits

- CTT magnitude is a **\~5-year per-mmol** effect from drug trials; the lifetime cumulative effect is larger
  by the nucleus's own logic but is modelled, not measured here.
- Marston is observational (with cited MR) and shares lineage with the nucleus's consensus — large and
  consistent, but not independent of it; measured on conventional panels, not NMR; not enriched for severe
  hypertriglyceridemia.
- The open loop stands: no operation here grades either against a realized patient outcome.

## References

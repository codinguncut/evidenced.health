---
type: framework
question: How much does lowering LDL/apoB reduce hard cardiovascular events, per unit of lowering — and which lipid number should the target be?
aliases: [LDL Lowering Magnitude, Statin Per mmol Effect, CTT Meta-Analysis, LDL Reduction Events, ApoB vs LDL-C, Which Lipid to Target, LDL-C Event Reduction]
authors: [Cholesterol Treatment Trialists' Collaboration (org); Marston, Nicholas A; Richardson, Tom G; Sanderson, Eleanor; Palmer, Tom M; Davey Smith, George; Mach, François; Blumenthal, Roger S; Helgadottir, Anna; Landry, Matthew J]
sources: [CTT - Statin Intensive LDL Lowering Meta-Analysis 2010, Marston - ApoB Containing Lipoproteins Risk 2022, Richardson - ApoB Coronary Mendelian Randomization 2020, ACC-AHA - Dyslipidemia Management 2026, ESC-EAS - Dyslipidaemias Focused Update 2025, Helgadottir - Cholesterol Not Particle Concentration, Landry - Vegetarian Dietary Patterns Cardiovascular Umbrella 2024]
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
    - The Observational-Trial Discordance
    - SCORE2 Baseline Risk and the ESC Treatment Thresholds
    - Which Objective Moved This Recommendation
    - ApoB Particle Number vs Cholesterol Content
    - Vegetarian Dietary Patterns and Mortality
created: 2026-08-05
updated: 2026-08-29
self_critiqued: 2026-08-29
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
> [@ctt2010]

> «all-cause mortality was reduced by 10% per 1·0 mmol/L LDL reduction (RR 0·90, 95% CI 0·87-0·93;
> p<0·0001)»
> [@ctt2010]

**Mortality moved, not just the marker.** Unlike most of the surrogate cases the wiki holds, the LDL-C
reduction transmitted all the way to all-cause death in randomised evidence — the validated-surrogate
direction, and a worked instance of [[Surrogate Outcomes]]'s counter-exemplar. And with **no excess
cancer or non-vascular mortality** even at low LDL, which retires the old low-cholesterol-harm hypothesis
for the *drug-lowered* range.

## The shape — monotone, no threshold, multiplicative

- **No knee, no plateau in the studied range.** «There was no evidence of any threshold within the
  cholesterol range studied» [@ctt2010]. Benefit persisted starting below 2.0 mmol/L (RR 0.71, -29%) and «even among those
  reaching 1·8 mmol/L (70 mg/dL) or lower» further reduction still produced definite benefit (RR 0.63, 99%
  CI 0.41-0.95) [@ctt2010]. The
  RR per mmol «did not depend on the baseline LDL cholesterol concentration (trend p=0·2)».
- **The reduction compounds multiplicatively:** «a 2 mmol/L reduction would reduce the risk by about 40%
  (since the combination of risk ratios of 0·78×0·78 yields a risk ratio of about 0·6)»
  [@ctt2010]. This is the
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
  [@marston2022]. Non-HDL-C fell to aHR
  1.09 (NS) and TG to 1.00 (NS) once apoB was held constant.
- **Particle TYPE stops mattering once particle NUMBER is fixed** — adjusting for apoB, the TG/LDL-C ratio
  (a proxy for TG-rich vs LDL particles) was flat (aHR 1.04, 0.99-1.09, P=.12): «for a given concentration
  of apoB-containing lipoproteins, the relative proportions of particle subpopulations may no longer be a
  predictor of risk» [@marston2022].
- Verdict: «risk of MI was best captured by the number of apoB-containing lipoproteins, independent from
  lipid content (cholesterol or TG) or type of lipoprotein (LDL or TG-rich)»
  [@marston2022]. Where apoB is
  unavailable, «non-HDL-C in particular is the preferred surrogate for apoB, as it incorporates TG-rich
  lipoproteins in addition to LDL» — LDL-C is the weakest of the three because it misses the remnant
  particles.

**The genetic version of the same answer — Richardson MVMR `[2026-08-06]`.** Marston's apoB-supremacy is
observational; multivariable *Mendelian randomisation* reaches it as a natural experiment. Instrumenting
LDL-C, TG and apoB from a UK Biobank GWAS (up to 441,016) against CARDIoGRAMplusC4D (60,801 CHD cases):
each is atherogenic alone, but entered together "only apolipoprotein B ... retained a robust effect, with
the estimate for LDL cholesterol ... reversing" — apoB OR 1.92 (1.31-2.81), LDL-C 0.85 (0.57-1.27, P=0.44),
TG weakened. [@richardson2020] So the *metric*
verdict (target apoB, not LDL-C content) is now backed by RCT-scaling (CTT), observational multivariable
(Marston), and genetic multivariable MR (Richardson) alike. Note: this does **not** discredit LDL-C's
causal role — apoB is *necessary* and always accompanies cholesterol; a cholesterol change concordant with
apoB still moves risk (which is why CTT's LDL-C scaling works for statins). Causal model + the
not-independent caveat: [[LDL ApoB and Cumulative Exposure]].

**CONTESTED — the *particle-number-not-content* leg (Helgadottir 2022).** Marston's verdict is that risk is
best captured «independent from lipid content (cholesterol or TG)» [@marston2022] — i.e. count, not content. An independent
MR (deCODE/Danish; no Ference/Ala-Korpela/Marston authors) that separates apoB from non-HDL-C with 82/235
*discordant* variants reaches the opposite: «the genetic effects on CAD risk are proportional to effects on
non-HDL-C, but not to effects on apoB» [@helgadottir2022], attributing the observational apoB signal to confounding of two \~0.9-correlated traits. This
leaves the apoB-over-**LDL-C** metric verdict intact (both agree) but contests whether the right *secondary*
target is apoB (particle number) or non-HDL-C (cholesterol content, already on every panel) -> full joined
issue: [[ApoB Particle Number vs Cholesterol Content]]. Held contested, not resolved (one MR vs Marston +
the number-camp lineage).

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

**Independence note:** not a type-E robustness convergence. Ference (nucleus) co-authors *both* Marston and
Richardson, and CTT is the RCT evidence family the nucleus's consensus already rests on — one research
programme across all three. The value here is A/F (magnitude × metric assembled into one decision structure;
Marston refines what CTT's LDL-C scaling *is*; Richardson adds the genetic-MR leg), **not** independent
triangulation — so none of the three is tagged `[E-independent]`.

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

<div class="recent-update" data-last-updated="2026-08-29">

## A dietary LDL lever, and why its magnitude does not inherit CTT `[2026-08-29, Landry]`

Landry's 2024 umbrella quantifies one dietary LDL route: in 31 observational studies (Benatar), «vegan
dietary patterns may be associated with significantly lower LDL-cholesterol concentrations of −0.49
mmol/l (−0.62, −0.36) (p < 0.0001) compared to omnivorous diets, though heterogeneity was high (I2=92
%)» [@landry2024vegetarian]. Two guards
stop this being read as a \~11% event reduction off CTT's 0.78/mmol:

- **Observational and healthy-adherer confounded, GRADE low** — and the *randomised* evidence in
  presumably-healthy adults found **no significant effect**: vegetarian+vegan combined LDL «−0.13 mmol/l
  (−0.37, 0.12)» (4 RCTs, NS) [@landry2024vegetarian]. So the −0.49 is the confounded observational estimate, not a trial effect.
- **By this page's own drug-route-only rule, a dietary LDL change does not transmit to events at CTT's
  statin-derived rate** (the MCE/Sydney disconnects). A modest, uncertain dietary apoB/LDL lever —
  cross-linked from [[Vegetarian Dietary Patterns and Mortality]], where it is one of several small
  pleiotropic channels — not a statin-magnitude one. [inferred from @landry2024vegetarian]

</div>

## The treat-to-target number — the two guidance families converge, but the NUMBER is not the DIRECTION `[2026-08-06]`

CTT gives the *magnitude* per unit; the guidelines translate it into a **level to treat to**. The
decision-relevant fact for 2026 is that the two major families now **converge** on the most aggressive
target, and that convergence must be read correctly: it raises the guidance null for *direction*, not for
the specific number.

**The very-high-risk secondary-prevention target is the same in both families.**

| Parameter | ESC-EAS (2019, reaffirmed 2025) | ACC-AHA 2026 | Same quantity? |
|---|---|---|---|
| Very-high-risk LDL-C goal | <1.4 mmol/L (55 mg/dL) + ≥50% reduction | «a goal of LDL-C <55 mg/dL (1.4 mmol/L)» + ≥50% reduction | **Yes** |
| High-risk / primary-high goal | <1.8 mmol/L (70 mg/dL) | «goal of LDL-C <70 mg/dL (1.8 mmol/L)» | **Yes** |
| non-HDL-C secondary goal | — (not set in the 2025 text) | <85 mg/dL (2.2 mmol/L) | ACC-only |

[@accaha2026] — ESC-EAS 2025 states «the LDL-C treatment
goals ... for persons in each risk category have not changed from the 2019 ESC/EAS Guidelines»
[@esceas2025]; the ESC numeric figure itself lives
in that update's Fig. 1 (not in the OCR'd text — do not source the numbers to the 2025 document; they are
the reaffirmed 2019 targets).

**The delta that makes this a finding: ACC-AHA restored numeric goals.** The 2018 US guideline had
*abandoned* treat-to-target; 2026 puts it back — «LDL-C and non-HDL-C treatment goals are back to guide
LLT» [@accaha2026] — and lands on the ESC numbers. So the
US and European families, which diverged on *whether to name a target* for a decade, now agree on the
target itself.

**But this is shared-source agreement, and the two families are not two separate witnesses.** Both rest on
the **same** trial base — CTT for the per-mmol magnitude (ESC states it as its «average 20 % proportional
... reduction ... per each mmol/L» [@esceas2025]; the
ACC document rests on CTT 2010 throughout) plus FOURIER/ODYSSEY/IMPROVE-IT/CLEAR. Two guideline committees
reading the same trials to the same number is convergence of shared warrant, not a second route — so this
carries no `[E-independent]` weight.

**The load-bearing honesty — the DIRECTION is evidenced, the specific NUMBER is a reasoned extrapolation.**
A target is legitimate only if its transmission to a patient-important outcome is itself evidenced. Here:

- **Direction (lower LDL/apoB → fewer events, monotone, no threshold) is high-certainty** — CTT's «no
  evidence of any threshold», benefit persisting «even among those reaching 1·8 mmol/L (70 mg/dL) or
  lower», and the concordant genetic MR (Richardson). The guidelines' own claim that the per-unit benefit
  is mechanism-agnostic is the same view: «similar reductions in the risk of CVD as statins ... per unit
  decrease in LDL-C» [@esceas2025].
- **The specific cut (why <55 and not <50 or <70) has no head-to-head trial.** No RCT randomized patients
  to *target* <55 vs <70 mmol/L; the numbers are derived from achieved-LDL strata in the outcome trials
  and the monotone curve, extrapolated to a round threshold. Under a monotone no-threshold curve a
  *target* is a pragmatic stopping point, not an evidenced optimum — reducing past it merely keeps paying
  (or stops being worth the added agent/cost/adherence burden), which is a net-effect judgment, not a
  measured knee. So the convergence licenses «lower, for the high-risk» with confidence; it does **not**
  certify 1.4 mmol/L as *the* right number.

[inferred from @accaha2026; @esceas2025; @ctt2010]

## Limits

- CTT magnitude is a **\~5-year per-mmol** effect from drug trials; the lifetime cumulative effect is larger
  by the nucleus's own logic but is modelled, not measured here.
- Marston is observational (with cited MR) and shares lineage with the nucleus's consensus — large and
  consistent, but not independent of it; measured on conventional panels, not NMR; not enriched for severe
  hypertriglyceridemia.
- **The guidelines are WHAT-TO-DO documents; their effect claims are borrowed.** ACC-AHA and ESC-EAS are
  named here for the *recommendation* (the target, the escalation), never as evidence of the magnitude —
  the magnitude is CTT's/Marston's, which the guidelines themselves rest on (ACC-AHA even reproduces
  Marston's aHR 1.27). A guideline's restatement of CTT is not a second confirming study.
- The open loop stands: no operation here grades either against a realized patient outcome.

## References

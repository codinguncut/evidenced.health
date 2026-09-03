---
type: framework
question: Does inorganic nitrate / beetroot juice supplementation lower blood pressure and improve vascular health biomarkers, by how much, with what dose-response, and does the effect reach patient-important outcomes?
aliases: [Dietary Nitrate, Inorganic Nitrate and Blood Pressure, Beetroot Juice and Blood Pressure, Nitrate BP, Beetroot and Hypertension]
authors: [Siervo, Mario; Lara, Jose; Ogbonmwan, Ikponmwosa; Mathers, John C; Norouzzadeh, Mostafa; Hasan Rashedi, Minoo; Teymoori, Farshad; Mirmiran, Parvin]
sources: [Siervo - Nitrate Beetroot Blood Pressure Meta-Analysis 2013, Norouzzadeh - Nitrate Blood Pressure Vascular Biomarkers Meta-Analysis 2025]
cluster: sodium-bp
confidence: medium
relationships:
  related_to:
    - DASH Diet and Blood Pressure
    - Sodium Intake and Blood Pressure
    - Potassium Intake and Blood Pressure
    - Blood Pressure Lowering and Cardiovascular Events
    - Fruit and Vegetable Intake and Health
    - Surrogate Outcomes
    - Baseline Risk and the Relative-Absolute Split
created: 2026-08-28
updated: 2026-08-31
self_critiqued: 2026-08-28
---
<div class="recent-update" data-last-updated="2026-08-31">

Siervo 2013 (J Nutr) is a **systematic review and meta-analysis of 16 randomized clinical trials
(254 participants, 7-30 per study)** of inorganic nitrate (sodium/potassium nitrate salt) or beetroot
juice supplementation vs placebo, on blood pressure. All 16 were **crossover, double-blind,
placebo-controlled**; conducted 2006-2012; **intervention duration 2 h to 15 d** (washout 6-28 d).
This is a distinct exposure from the electrolyte-BP pages ([[Sodium Intake and Blood Pressure]],
[[Potassium Intake and Blood Pressure]]) and from the whole-pattern [[DASH Diet and Blood Pressure]] —
the lever here is the **inorganic nitrate anion**, acting through a nitric-oxide (NO) pathway, not
sodium, potassium, or a dietary pattern. [@siervo2013nitrate]

**Second source (2026-08-31): Norouzzadeh 2025 (Nutrition Journal) supersedes Siervo on scale and
adds the dose-response shape + vascular-marker channel.** A GRADE-assessed one-stage dose-response
meta-analysis of **75 RCTs (1823 participants)**, searched to Feb 2024, of dietary NO3 (beetroot
n=70, spinach, lettuce, NO3-rich diet) on plasma NO3/NO2, BP, and three vascular-stiffness/endothelial
markers (PWV, FMD, AI). [@norouzzadeh2025nitrate]
Because Norouzzadeh's 75 RCTs (through 2024) **subsume** Siervo's 16 (2006-2012), the two are **not
independent backings** — this is Siervo's claim *refined and upgraded* by a larger, GRADE-rated,
dose-response-shaped re-analysis (**type-F, not type-E**); the teams differ (Siervo/Mathers UK vs
Norouzzadeh/Mirmiran Iran) but the overlapping trial base defeats independence.
[inferred from @norouzzadeh2025nitrate; @siervo2013nitrate]

> **A number-decoding note.** The source PDF's OCR renders minus signs as a leading `2` (e.g. it
> prints the pooled SBP effect as `24.4 mm Hg (95% CI: 25.9, 22.8)`). Every effect below is the
> **decoded** value (`-4.4 mmHg (95% CI: -5.9, -2.8)`), read against the sign-consistent abstract,
> results table and forest-plot text. Quoted prose spans are OCR-clean and reproduce verbatim; the
> garbled *numeric* strings are deliberately NOT quoted verbatim.

</div>

## The pooled effect — SBP falls \~4.4 mmHg; DBP does not move

Random-effects pooled mean differences, supplementation vs placebo [@siervo2013nitrate]:

| Outcome | Effect (95% CI) | P | Studies | State |
|---|---|---|---|---|
| Systolic BP | **-4.4 mmHg** (-5.9, -2.8) | <0.001 | 16 | benefit (I2=66%, high heterogeneity) |
| Diastolic BP | **-1.1 mmHg** (-2.2, +0.1) | 0.06 | 13 | no meaningful effect (CI crosses 0) |
| SBP — beetroot juice | -4.5 mmHg (-6.4, -2.5) | <0.001 | 12 | benefit |
| SBP — inorganic nitrate salt | -4.2 mmHg (-6.1, -2.2) | <0.001 | 4 | benefit |

> «Inorganic nitrate and beetroot juice supplementation was associated with a signiﬁcant reduction in
> systolic BP. These ﬁndings need to be tested in long-term trials and in individuals at greater
> cardiovascular risk.»
[@siervo2013nitrate]

The headline is the **SBP** effect. **DBP did not reach significance** (-1.1 mmHg, CI crosses zero) —
so this is a systolic-selective lever in the pooled data. **Beetroot juice and nitrate salt give
essentially the same SBP effect** (-4.5 vs -4.2 mmHg), which the authors attribute to comparable
delivered nitrate doses (beetroot 12.0 +/- 13.2 vs salt 15.5 +/- 9.2 mmol/dose) rather than to
beetroot's other bioactives — the nitrate anion, not the beetroot matrix, is doing the work.
[@siervo2013nitrate]
Norouzzadeh 2025 corroborates this on the larger base: the BP/serum-NO3 slope tracked NO3 dose more
tightly than beetroot dose, so «the observed effects on BP reduction were primarily attributable to the
NO3 content rather than other bioactive compounds present in the entire food matrix».
[@norouzzadeh2025nitrate]
(This is corroboration on an overlapping trial base — type-F reinforcement, not independent type-E.)

## Dose-response — SBP tracks nitrate dose, not duration or plasma nitrite

> «The meta-regression showed that mean differences in systolic BP were directly associated with the
> daily dose of inorganic nitrate (P < 0.05) ... but not with the study duration (P = 0.67) or plasma
> nitrite concentrations (P = 0.40).»
[@siervo2013nitrate]

A **larger daily nitrate dose predicts a larger SBP fall** (meta-regression slope \~ -0.12 mmHg per
mmol; P<0.05). No knee or plateau is located — this is a monotone slope **over the studied dose range
only** (nitrate salt 2.5-24 mmol/dose [157-1488 mg]; beetroot 5.1-45 mmol/dose [321-2790 mg]). Do not
extrapolate above \~45 mmol/dose, where there is no data, and read the slope as *dose-associated*, not
as a titratable target — it is a cross-trial meta-regression, the design most prone to ecological
confounding. Duration did **not** modify the effect (SBP <3 d -4.9 mmHg vs >=3 d -3.8 mmHg, both
significant), consistent with an acute pharmacodynamic action that does not accumulate over the
(short) studied windows. [@siervo2013nitrate]

<div class="recent-update" data-last-updated="2026-08-31">

## Dose-response, sharpened — Norouzzadeh's per-mmol slopes (the matched-quantity comparison)

**Parameter table — Siervo vs Norouzzadeh, matched quantities only** (the BLOCKING guard: the naive
contrast is Siervo's fixed-dose **pooled** SBP effect vs Norouzzadeh's **per-mmol slope** — different
quantities, not comparable). Norouzzadeh frames its *entire* BP analysis as a per-mmol dose-response
(restricted cubic splines, one-stage) and reports **no** overall fixed-dose pooled SBP effect, so the
only same-quantity cell is slope-vs-slope:

| Parameter | Siervo 2013 | Norouzzadeh 2025 | Same quantity? |
|---|---|---|---|
| SBP change **per mmol** NO3 | \~-0.12 mmHg/mmol (cross-trial meta-regression, P<0.05) | acute **-0.28** (CI -0.40, -0.17); short **-0.24** (-0.40, -0.07); medium **-0.48** (-0.71, -0.25) mmHg/mmol (one-stage DR) | **YES** — mmHg per mmol; method differs (ecological meta-regression vs one-stage spline) |
| SBP **fixed-dose pooled** effect | -4.4 mmHg (-5.9, -2.8) at \~12-15 mmol median dose | **not reported** (dose-response framing only) | NO — no matched cell; do not contrast -4.4 vs -0.48 |
| DBP | -1.1 mmHg NS (CI crosses 0) | **-0.12 mmHg/mmol** significant, acute (CI -0.21, -0.03) | NO — pooled-NS vs per-mmol-significant; different constructs |
| Trials / participants | 16 / 254 | 75 / 1823 | superset (Siervo ⊂ Norouzzadeh) |

> «For each mmol increase in NO3 intake (Supplementary Fig. 6), there was a decrease in SBP levels in
> the acute (WMD: -0.28 mmHg; 95% CI: -0.40, -0.17; I2: 31.0), short-term (WMD: -0.24 mmHg;»
> ... «(WMD: -0.48 mmHg; 95% CI: -0.71, -0.25; I2: 53.6) periods.»
[@norouzzadeh2025nitrate]

**The two sources reconcile as a type-F refinement, not a conflict.** Norouzzadeh's per-mmol slope
integrated over a typical delivered dose lands on Siervo's fixed-dose pool: acute -0.28 mmHg/mmol x
\~15 mmol (Siervo's median dose) \~= -4.2 mmHg, essentially Siervo's -4.4. So Norouzzadeh supplies the
**shape** whose integral reproduces the incumbent point estimate — the composite (dose-response curve
+ its fixed-dose confirmation) beats either alone.
[inferred from @norouzzadeh2025nitrate; @siervo2013nitrate]

**DBP now moves — a genuine amplify/refine of Siervo's null.** Siervo's pooled DBP was NS
(-1.1 mmHg, CI crosses 0); Norouzzadeh's larger base resolves a **significant** acute-term per-mmol
DBP slope (-0.12 mmHg/mmol, CI -0.21, -0.03). Small, and acute-only, but no longer null — the added
power converted a Siervo "no meaningful effect" into a detectable gradient.
[@norouzzadeh2025nitrate]

**Shape is outcome-specific — SBP is linear, MAP has a knee.** SBP is linear across all three horizons
(more mmol, more effect, no plateau located up to the 8-mmol clinical threshold below); but
**medium-term MAP is non-linear**, greatest at 3 mmol/day and **not significant above 5 mmol/day**:

> «There was a non-linear dose-response relationship between dietary NO3 with medium-term MAP, that the
> greatest effect observed at a dose of 3 mmol dietary NO3 per day (WMD: -4.43 mmHg; 95% CI: -7.84,
> -1.03). However, there was no significant decrease in medium-term MAP at doses higher than 5 mmol
> dietary NO3 per day.»
[@norouzzadeh2025nitrate]

Read the MAP knee **cautiously**: it is one outcome, medium-term only, on a subset, with a wide CI —
weak evidence of a true plateau, not a located optimum (the same discipline the fabric applies to any
knee claim). The decision-bearing shape is the **linear SBP** slope, which yields Norouzzadeh's own
clinical-dose reading:

> «Given that a reduction of at least 2 mmHg in BP is typically considered a clinically significant
> unin­ tended BP-lowering effect [17], our findings suggest that a daily NO3 dose of 8 mmol is
> required to achieve a»
[@norouzzadeh2025nitrate]

i.e. a **daily 8 mmol NO3 (\~500 mg; roughly one large beetroot-juice shot or a big serving of leafy
greens) to reach a >=2 mmHg SBP fall** — the dose that operationalizes the effect as decision-relevant.
Plasma NO3 itself rises linearly only **above \~3 mmol/day** (no significant change below 2 mmol),
setting a floor on the exposure. [@norouzzadeh2025nitrate]

</div>

<div class="recent-update" data-last-updated="2026-08-31">

## Hypertensive stratum — a steeper slope (route-(b) effect-modification signal)

The BP effect is **more pronounced in hypertensives**. In the HTN dose-response subgroup, the acute
SBP slope is \~35% steeper than in the overall population:

> «For each mmol increment in dietary NO3 dosage, we observed a 0.38 mmHg reduction in acute SBP within
> the hyperten­ sive subgroup, contrasting with a 0.28 mmHg reduction in the overall population
> analysis. This finding implies that hypertensive populations may experience more significant
> advantages from dietary NO3 supplementa­ tion, possibly owing to their impaired NO bioavailability.»
[@norouzzadeh2025nitrate]

This is a **positive effect-modification signal (route (b))** with a stated mechanism (HTN involves
endothelial dysfunction / diminished NO synthesis, which exogenous NO3 directly opposes) — the stratum
where the lever would matter most shows the largest per-mmol effect, and the subgroup slope has
I2=0.00 (homogeneous). Treat it as a **candidate** effect-modifier, not a settled one: it is a
subgroup dose-response (the false-positive-prone route), acute-term, and still on the BP **surrogate**.
It is nonetheless the more decision-relevant reading than Siervo's, whose ambulatory-BP nulls fell in
exactly this higher-risk stratum — the two sources leave the hypertensive question **open in opposite
directions** (Siervo: no ambulatory confirmation in older/obese/T2D; Norouzzadeh: steeper office-BP
slope in HTN).
[inferred from @norouzzadeh2025nitrate]

</div>

<div class="recent-update" data-last-updated="2026-08-31">

## Vascular-stiffness and endothelial markers — a new surrogate channel (still a surrogate)

Beyond BP, Norouzzadeh adds a per-mmol dose-response on three vascular markers — arterial stiffness
(PWV, AI) and endothelial function (FMD):

| Marker (medium-term, per mmol NO3) | Effect (95% CI) | Direction |
|---|---|---|
| Pulse wave velocity (PWV) | **-0.07 m/s** (-0.11, -0.03) | stiffness down (benefit) |
| Flow-mediated dilation (FMD) | **+0.30%** (0.15, 0.46) | endothelial function up (benefit) |
| Augmentation index (AI) | **-0.57%** (-0.98, -0.15) | wave reflection down (benefit) |

[@norouzzadeh2025nitrate]

All three move favourably and coherently with the BP finding, which raises mechanistic confidence that
the NO pathway is doing real vascular work — but **these are surrogates too**, not events. Norouzzadeh
bridges FMD to hard outcomes by the **same modelled-projection move** as Siervo's JNC-7 step, and it
must be read the same way:

> «A meta-analysis showed that each 1% increase in FMD caused a 13% decrease in the risk of cardiovas­
> cular events [8]. Therefore, a 1.85% enhancement in FMD due to dietary NO3 supplementation [22] could
> poten­ tially lead to a 24% decrease in cardiovascular events.»
[@norouzzadeh2025nitrate]

The 24% figure is a **projection off two borrowed references** (the 13%/1% FMD-CVD elasticity from
[8], the 1.85% FMD gain from [22] — not this MA's own per-mmol slope), chained onto a surrogate. It is
a plausible direction, **not measured event evidence** — exactly the transmission-untested status of
Siervo's stroke/CVD projection. -> [[Surrogate Outcomes]].
[inferred from @norouzzadeh2025nitrate]

</div>

<div class="recent-update" data-last-updated="2026-08-31">

## GRADE certainty — Moderate at best, and only for the acute BP outcomes

Norouzzadeh is GRADE-rated (the upgrade over Siervo's un-graded estimate). The certainty ceiling is
**Moderate**, reached by only a few outcomes; most sit lower:

> «(acute and short-term) and DBP (acute-term) were rated as Moderate due to their significant and
> homogeneous results. Also, acute plasma NO2 received a Low CoE due to suspected publication bias,
> while medium-term SBP was rated Low due to heterogeneity in results.»
[@norouzzadeh2025nitrate]

So **acute + short-term SBP and acute DBP are Moderate**; **medium-term SBP is Low** (heterogeneity);
acute plasma NO3 and medium-term PWV are **Very Low**; and — a load-bearing caveat — **risk of bias
was serious for all outcomes except acute and medium-term FMD.** No outcome reaches High. The
dose-response gradient is a GRADE upgrade factor, but publication bias, heterogeneity and serious
risk-of-bias hold the ceiling at Moderate. This is why the page moves to `confidence: medium` and no
higher. [@norouzzadeh2025nitrate]

</div>

<div class="recent-update" data-last-updated="2026-08-31">

## Safety — no excess adverse events or withdrawals

> «The safety analysis results (Supplementary Figs. 12, 13) revealed that dietary NO3 supplementation
> did not lead to an increase in adverse events (Risk ratio: 1.00, 95% CI 0.35, 2.82 I2 = 0.00%) or
> withdrawal from the study (Risk ratio: 0.42, 95% CI 0.07, 2.68; I2 = 0.00%).»
[@norouzzadeh2025nitrate]

Adverse-event RR is a flat 1.00 and withdrawals if anything lower on NO3 (RR 0.42, NS) — no safety
signal in these short-to-medium trials (beeturia, the red urine/stool discoloration, is noted as a
benign non-cause of withdrawal). This is a **short-horizon** safety read only; it says nothing about
chronic high-dose intake, and Norouzzadeh separately flags that the nitrate **acceptable daily intake**
set for cured meats and water may not transfer to vegetable NO3 and needs reassessment — a regulatory
open question, not a demonstrated harm. [@norouzzadeh2025nitrate]

</div>

<div class="recent-update" data-last-updated="2026-08-31">

## Layer-1 sizing — the BP-drug comparator shrinks the rock for the outcome it covers

Norouzzadeh itself supplies the substitution comparator that sizes this lever:

> «A meta-analysis of 68 clinical trials revealed that a single antihypertensive medication can lower
> SBP and DBP by 12 and 7 mmHg, respectively [17], while a combination therapy can result in a
> reduction of up to 18.9 mmHg in SBP [157].»
[@norouzzadeh2025nitrate]

A single mature antihypertensive lowers SBP \~12 mmHg vs the \~2-5 mmHg realistically reachable from
dietary NO3 at tolerable doses — so **for the BP-lowering outcome specifically, a low-harm generic BP
drug captures most of the benefit and the nitrate rock is small at the margin.** Two guards keep this
from over-shrinking the lever: substitution is **outcome-specific** — if the vascular-marker /
endothelial channel (FMD, PWV) carries value the single-channel BP drug does not, the drug does not
shrink *that* part; and net of the **drug's own costs** (lifelong dependency, side-effects) a food
lever that a person will actually sustain retains structural value. The choice stays the person's
(Layer 3); Layer 1 only notes that on BP alone this is a **small marginal rock behind a mature drug.**
[inferred from @norouzzadeh2025nitrate]

</div>

## Mechanism — the enterosalivary nitrate-nitrite-NO pathway

> «Dietary and endogenous inorganic nitrate molecules may be reduced by facultative anaerobic bacteria
> on the dorsal surface of the tongue to nitrite, which can be chemically (low pH) and enzymatically
> (xanthine oxidoreductase, myoglobin, cytochrome P450, complexes of the mitochondrial electron
> transport chain) further reduced to NO ... This pathway may represent a plausible mechanism to
> explain the beneﬁcial effects of dietary inorganic nitrate intake on BP.»
[@siervo2013nitrate]

This is a **human-corroborated physiological pathway** (nitrate -> nitrite -> NO -> vasodilation),
distinct from the classical L-arginine/NO-synthase route, and it depends on **oral commensal bacteria**
as an obligatory reduction step — a support factor the mechanism needs. The dependence is a
transportability caveat with a concrete failure mode: antibacterial mouthwash or antibiotics that
suppress the tongue microbiome would be expected to break the pathway (not tested in this MA, a named
gap). [inferred from @siervo2013nitrate]

## The load-bearing caveats — surrogate, short-term, and disconfirmed on ambulatory BP

- **Every endpoint is a SURROGATE — office/resting BP, not events.** No mortality, stroke, MI, or
  incident CVD is measured; the trials run **2 h to 15 d**. -> [[Surrogate Outcomes]].
- **The resting-BP benefit was NOT confirmed on ambulatory 24-h monitoring** — the more valid BP
  measure. This is a within-source disconfirmation, not a footnote:
  > «The beneﬁcial effects of beetroot juice supplementation on BP were not conﬁrmed when ambulatory
  > 24-h BP monitoring was used to measure changes in BP (39-41), including a group of older (>60 y)
  > overweight and obese participants with type 2 diabetes.»
  [@siervo2013nitrate]
  The three ambulatory studies are also the ones in **higher-risk** participants (older, obese, T2D) —
  exactly the stratum where a BP lever would matter most — so the null there is doubly cautionary.
- **The tested population is the wrong one for the decision.** Most participants were young,
  non-smoking, normal-weight, healthy men recruited for *exercise-performance* studies. The authors:
  > «we advocate for a careful interpretation of the results in consideration of the small number of
  > participants, the short duration of the interventions, and the over-representativeness of healthy
  > participants.»
  [@siervo2013nitrate]
- **High heterogeneity** on the primary outcome (SBP I2=66%), driven by shorter-duration and
  beetroot-juice studies. [@siervo2013nitrate]

## Surrogate-to-outcome — a modelled projection on a borrowed evidence base

The authors translate the surrogate to hard outcomes via a **JNC-7 projection**, not measured events:

> «a systolic BP reduction of at least 5 mm Hg (as observed here) could decrease the risk of mortality
> due to stroke by 14% and mortality from cardiovascular diseases by 9%.»
[@siervo2013nitrate]

Read this as a **plausible direction, not measured evidence**: it applies a projection derived from
*pharmacological* BP-lowering (the real trial transmission lives on
[[Blood Pressure Lowering and Cardiovascular Events]]) to a *dietary* intervention, and the observed
SBP fall (-4.4 mmHg) is in fact **below** the >=5 mmHg the projection assumes. Whether the surrogate
transmits at all here is untested — the acute, short-term, ambulatory-disconfirmed BP signal is a
weaker basis for the outcome bridge than a sustained clinic-BP reduction would be. The absolute benefit,
if the bridge holds, still scales with the person's baseline CV risk
([[Baseline Risk and the Relative-Absolute Split]]). [inferred from @siervo2013nitrate]

## Relation to DASH — this is the head-on test of DASH's proposed nitrate component

[[DASH Diet and Blood Pressure]] (Siervo 2015, the **same research group**) flags the pattern's high
inorganic-nitrate content (\~1200 mg/d from leafy/root vegetables, feeding NO generation) as one
candidate mechanism for DASH's -5.2 mmHg SBP effect, but cannot decompose the pattern. This MA
supplies the **isolated** estimate: dietary nitrate *alone* (157-2790 mg/dose) lowers SBP \~4.4 mmHg —
which **bounds** how much of DASH's BP effect the nitrate component could plausibly carry. Because the
two MAs share lead authors (Siervo, Lara, Mathers), this is the **same group's refinement of its own
claim (type-F), not independent corroboration (not type-E)** — the convergence is self-stated. It does
not license summing DASH and nitrate as independent additive levers (overlapping NO mechanism).
[inferred from @siervo2013nitrate; @siervo2015]

<div class="recent-update" data-last-updated="2026-08-31">

## Decision relevance

- **Dietary nitrate / beetroot is a real but MODEST, LOW-CERTAINTY BP lever** — a systolic-selective
  \~4.4 mmHg fall on resting BP, from short (hours-to-days) trials in mostly healthy young men, **not
  confirmed on 24-h ambulatory monitoring** and untested on hard outcomes. It is a peripheral
  supplement-class lever, not a big rock; a person whose large BP levers (weight, sodium/potassium
  balance, alcohol, activity) are unpulled should address those first.
- **Beetroot juice and nitrate salt are interchangeable for this effect** (dose-matched); the effect
  tracks nitrate dose within the studied range, with no located knee or plateau.
- **The evidence gap that governs the recommendation is duration + population**: whether the acute
  effect sustains, and whether it holds in the hypertensive / older / higher-CV-risk people who would
  actually benefit — the ambulatory-BP nulls in exactly those strata are the reason to hold this at
  low-to-moderate certainty and not recommend it as a standing antihypertensive strategy yet.
- **Update (2026-08-31, Norouzzadeh 2025):** the larger GRADE-rated dose-response upgrades confidence
  to **medium** (acute/short SBP + acute DBP are Moderate CoE), gives an operable dose (**\~8 mmol/day
  for a >=2 mmHg SBP fall**), shows the effect is **steeper in hypertensives** (route-(b) candidate),
  and confirms **short-term safety** (adverse-event RR 1.00). It does **not** close the governing gap:
  still no hard outcomes, and medium-term SBP is only Low CoE. Net decision unchanged in kind — a
  real, modest, now-better-quantified peripheral lever — but with a concrete dose and a
  higher-yield stratum (hypertensives) named.
- **Sizing against the drug (Layer 1):** on BP alone a single generic antihypertensive (\~12 mmHg SBP)
  dwarfs the \~2-5 mmHg from tolerable NO3 doses, so this is a **small marginal rock behind a mature
  drug** for BP; its non-substitutable residual is the food-sustainability and the vascular-marker /
  endothelial channel a single-target drug may not cover.

[inferred from @siervo2013nitrate; @norouzzadeh2025nitrate]

</div>

<div class="recent-update" data-last-updated="2026-08-31">

## Limits

- **Single gold-tier MA, short-duration surrogate evidence, ambulatory disconfirmation** — held at
  `confidence: low` despite the gold tier: the design (2 h-15 d, resting BP, healthy young men) is a
  weak basis for a chronic-BP recommendation. Named gap: a long-term nitrate/beetroot RCT with
  ambulatory BP in a hypertensive or higher-CV-risk population would move this (none held).
- **DBP effect null; dose-response is a cross-trial meta-regression** (ecological, not within-person
  titration); plasma nitrite did not track BP, so the biomarker chain is not cleanly closed.
- **No hard-outcome evidence — now confirmed across BOTH MAs (a stronger type-G gap).** Every
  endpoint in Siervo *and* Norouzzadeh is a surrogate (office BP, plasma NO3/NO2, PWV/FMD/AI); neither
  measures events or mortality. Both bridge to hard outcomes only by **modelled projection** off
  borrowed references (Siervo's JNC-7 stroke/CVD figures; Norouzzadeh's FMD->CVD 24% chain), not
  measured events. The gap persists at n=75 RCTs / 1823 participants — a long-term NO3/beetroot RCT
  with a **clinical endpoint** in a hypertensive/higher-risk population would move this; none held
  (transmission via [[Blood Pressure Lowering and Cardiovascular Events]]).
- **Norouzzadeh caveats (2026-08-31):** GRADE ceiling is **Moderate** (no High outcome); risk of bias
  **serious for all outcomes except FMD**; medium-term SBP and plasma-NO3 outcomes are Low/Very-Low
  CoE; the HTN-steeper-slope is a subgroup dose-response (route-(b), false-positive-prone), acute-term.
  The MAP knee (\~3 mmol, non-significant >5 mmol) is weak/single-outcome and not a located optimum.

[inferred from @siervo2013nitrate; @norouzzadeh2025nitrate]

</div>

## References

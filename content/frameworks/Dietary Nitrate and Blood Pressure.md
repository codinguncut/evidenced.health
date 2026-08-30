---
type: framework
question: Does inorganic nitrate / beetroot juice supplementation lower blood pressure, by how much, with what dose-response, and does the effect reach patient-important outcomes?
aliases: [Dietary Nitrate, Inorganic Nitrate and Blood Pressure, Beetroot Juice and Blood Pressure, Nitrate BP, Beetroot and Hypertension]
authors: [Siervo, Mario; Lara, Jose; Ogbonmwan, Ikponmwosa; Mathers, John C]
sources: [Siervo - Nitrate Beetroot Blood Pressure Meta-Analysis 2013]
cluster: sodium-bp
confidence: low
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
updated: 2026-08-28
self_critiqued: 2026-08-28
---

Siervo 2013 (J Nutr) is a **systematic review and meta-analysis of 16 randomized clinical trials
(254 participants, 7-30 per study)** of inorganic nitrate (sodium/potassium nitrate salt) or beetroot
juice supplementation vs placebo, on blood pressure. All 16 were **crossover, double-blind,
placebo-controlled**; conducted 2006-2012; **intervention duration 2 h to 15 d** (washout 6-28 d).
This is a distinct exposure from the electrolyte-BP pages ([[Sodium Intake and Blood Pressure]],
[[Potassium Intake and Blood Pressure]]) and from the whole-pattern [[DASH Diet and Blood Pressure]] —
the lever here is the **inorganic nitrate anion**, acting through a nitric-oxide (NO) pathway, not
sodium, potassium, or a dietary pattern. [@siervo2013nitrate]

> **A number-decoding note.** The source PDF's OCR renders minus signs as a leading `2` (e.g. it
> prints the pooled SBP effect as `24.4 mm Hg (95% CI: 25.9, 22.8)`). Every effect below is the
> **decoded** value (`-4.4 mmHg (95% CI: -5.9, -2.8)`), read against the sign-consistent abstract,
> results table and forest-plot text. Quoted prose spans are OCR-clean and reproduce verbatim; the
> garbled *numeric* strings are deliberately NOT quoted verbatim.

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
  `confidence: low` and not recommend it as a standing antihypertensive strategy yet.

[inferred from @siervo2013nitrate]

## Limits

- **Single gold-tier MA, short-duration surrogate evidence, ambulatory disconfirmation** — held at
  `confidence: low` despite the gold tier: the design (2 h-15 d, resting BP, healthy young men) is a
  weak basis for a chronic-BP recommendation. Named gap: a long-term nitrate/beetroot RCT with
  ambulatory BP in a hypertensive or higher-CV-risk population would move this (none held).
- **DBP effect null; dose-response is a cross-trial meta-regression** (ecological, not within-person
  titration); plasma nitrite did not track BP, so the biomarker chain is not cleanly closed.
- **No hard-outcome evidence** — the CVD-prevention framing is a JNC-7 projection off pharmacological
  BP-lowering, not measured events (type-G gap, transmission via
  [[Blood Pressure Lowering and Cardiovascular Events]]).

[inferred from @siervo2013nitrate]

## References

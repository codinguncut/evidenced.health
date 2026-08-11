---
type: model
question: What is this person's 10-year CVD risk, and what does that number license?
aliases: [SCORE2, SCORE2-OP, ESC Risk Thresholds, 10-Year CVD Risk, CVD Risk Categories, Risk Charts]
authors: [European Society of Cardiology (org); Mach, François; Blumenthal, Roger S]
sources: [ESC - CVD Prevention Guidelines 2021, WHO - Saturated and Trans Fatty Acid Intake 2023, ESC-EAS - Dyslipidaemias Focused Update 2025, ACC-AHA - Dyslipidemia Management 2026]
cluster: cvd-risk-estimation
confidence: high
relationships:
  related_to:
    - Baseline Risk and the Relative-Absolute Split
    - Layer 1 - Ranking Interventions for a Stratum
    - Saturated Fat Intake and Replacement
    - LDL Lowering and Cardiovascular Events
    - Which Objective Moved This Recommendation
created: 2026-07-26
updated: 2026-08-06
self_critiqued: 2026-08-06
---

**The conversion layer.** [[Baseline Risk and the Relative-Absolute Split]] holds the machinery and, as
of today, study-control-rate baselines; this supplies the missing piece — a **prognostic** baseline for
a named stratum rather than a trial population's event rate. Every relative effect in the corpus becomes an absolute one
once a stratum-specific 10-year risk exists.



## The thresholds — and they move with age

| | **<50 years** | **50-69 years** | **>=70 years** |
|---|---|---|---|
| Low-to-moderate: *"risk factor treatment generally not recommended"* | <2.5% | <5% | <7.5% |
| High: *"risk factor treatment should be considered"* | 2.5 to <7.5% | 5 to <10% | 7.5 to <15% |
| Very high: *"risk factor treatment generally recommended"* | >=7.5% | >=10% | >=15% |

[@esc2021]

**The same 10-year risk can mean two different things at two ages** — 8% is *very high* under 50 and
*high* at 72. **It cannot mean three** — the thresholds are monotone, so no single number can be
very-high in one band and low-to-moderate in another. The stated reason for the banding: *«Age is the major driver of CVD risk»*, so a fixed
threshold would over-treat the old and under-treat the young.

Two qualifiers ESC attaches itself:

- At **>=70**, the lipid-lowering recommendation drops to **Class IIb ("may be considered")** even in
  the very-high band.
- The banding is an artefact of presentation: *"age is obviously continuous, and a sensible application
  of the thresholds in clinical practice would require some flexibility... as patients move towards the
  next age group, or recently passed the age cut-off."*

## Read-off baseline risk — moderate-risk region, men, ages 60-64

10-year risk of **fatal and non-fatal** CVD, in percent. Columns are non-HDL cholesterol
(3.0-3.9 / 4.0-4.9 / 5.0-5.9 / 6.0-6.9 mmol/L); rows are systolic BP.

| SBP | Non-smoking | Smoking |
|---|---|---|
| 160-179 | 11 · 12 · 13 · 15 | 17 · 18 · 20 · 22 |
| 140-159 | **9 · 10 · 11 · 12** | 14 · 15 · 17 · 18 |
| 120-139 | 7 · 8 · 9 · 10 | 11 · 13 · 14 · 15 |
| 100-119 | 6 · 7 · 7 · 8 | 9 · 10 · 11 · 12 |

[@esc2021]

**Moderate-risk region = Austria, Cyprus, Finland, Germany, Greece, Iceland, Ireland, Italy, Malta,
Portugal, San Marino, Slovenia, Sweden.** Region is not a detail — the four charts differ substantially for identical inputs. **The size of that
regional gap is deliberately not quantified here**: this guideline does not state it, and the figures
that circulate for it come from the SCORE2 algorithm paper, which is staged but not ingested.

**A stratum defined by age and condition cannot be read off this chart.**
[[Layer 1 - Ranking Interventions for a Stratum]] fixes age, sex and condition; the chart also needs
**smoking status, a BP band, a cholesterol band and a region**. Those four are **case inputs supplied at
layer 3**, not properties of a stratum — and the answer moves with them:

| Assumed inputs | Read-off | ESC category (50-69) |
|---|---|---|
| non-smoking, SBP 140-159, non-HDL 4.0-5.9, moderate region | **10-11%** | **very high** — treatment generally recommended |
| same but SBP 120-139 | 8-9% | **high** — treatment *should be considered* |
| same but smoking | 15-17% | very high |

**So the ESC category flips on inputs no stratum contains.** This is the layer-2/layer-3 boundary made
concrete: the fabric can hold the grid and the thresholds, and it *cannot* produce a category without a
case. **Three rows are shown rather than one deliberately** — selecting a single read-off would smuggle
in assumed inputs and manufacture a decision-change out of the writer's own defaults.

## The conversion, worked once, with its assumptions visible

The wiki holds [[Saturated Fat Intake and Replacement]]: reducing SFA gives **RR 0.83 (0.70-0.98)** for
cardiovascular disease. At a 10% baseline:

> absolute reduction = 10% x (1 - 0.83) = **1.7 percentage points, or \~17 fewer CVD events per 1000**
> over 10 years — with the interval running \~2 to 30 fewer per 1000.

**Three assumptions, none of them free, and all of them the reader's to accept or reject:**

1. **The relative effect transfers to a 10-year horizon.** The trials behind RR 0.83 ran for varying,
   mostly shorter periods; SCORE2's baseline is explicitly 10-year. Constant-RR-over-time is an
   assumption, not a finding.
2. **The outcome definitions match.** SCORE2's endpoint is *fatal and non-fatal* CVD; WHO's composite
   is *"cardiovascular diseases"* from its own reviews. Similar, not verified identical.
3. **The trial populations transport to this stratum.** SCORE2 excludes people with diabetes from the
   base model — and this stratum has metabolic syndrome, which sits adjacent to that exclusion.
   **SCORE2-Diabetes exists precisely because the base model does not cover diabetes**, and it is
   staged but not ingested.

[inferred from @esc2021; @who2023saturated]

**The novelty here is narrow, and the tempting larger claim is false.** It is *not* the case that
neither source performs this conversion: **WHO performs it throughout** — its evidence profiles carry an
"Absolute - per 1000" column and report **15 fewer per 1000 (25 fewer to 2 fewer)** for this exact RR,
at its trials' 8.5% control rate, using the formula already recorded on
[[Baseline Risk and the Relative-Absolute Split]]. What the wiki adds is **re-baselining to a
stratum-specific prognostic estimate rather than a study control rate** — a real move, and a much
narrower one.

Note also that WHO grades this estimate **Moderate** certainty; the RR should not travel without it.

## What this licenses, and what it does not

- **It converts ratios into absolutes** — the single missing input on
  [[Baseline Risk and the Relative-Absolute Split]] and the reason Layer-1 ranking was impossible.
- **It does NOT make the corpus's ratios commensurable with each other.** Different outcomes still
  differ: a CVD-event ratio and an HbA1c mean difference do not become comparable by sharing a
  baseline.
- **It is a prognostic instrument, not evidence of effect.** It answers *what is this person's risk*,
  never *what does this exposure do*. Multiplying one by the other is the wiki's move, not either
  source's.
- **A prognostic number is a starting estimate, not the end of the chain.**
  [[Risk Modifiers - When Extra Information Changes a Risk Estimate]] can move it up or down near a
  threshold (a zero CAC lowers it); and where the 10-year window understates the case for a younger
  person, [[Lifetime Benefit - The Frame for Younger Adults]] reframes it in CVD-free years gained.
- **The threshold is the decision, not the percentage.** SCORE2 outputs a number; Table 5 is what turns
  a number into an action — and it is the part most often dropped when the model is quoted.


[inferred from @esc2021]
## Limits

- **Two ESC conditions the charts carry and this page must not drop:** they apply only to people whose
  risk factors are *untreated or have been stable for several years* — often false in metabolic
  syndrome, where BP and lipids are frequently treated — and *"Risk estimates then need to be adjusted
  upwards as the person approaches the next age category."* [@esc2021]
- **Region-calibrated, and the region does most of the work at the margin.** A risk read from the wrong
  chart is wrong by more than most interventions move.
- **Base model excludes diabetes**, which bounds its use for exactly the stratum the wiki is targeting. (staged; augments the base model for the T2D stratum).
- **Charts read at tier 3** (direct rendered-page read) because `find_tables()` returns nothing usable
  on this layout. Values above are transcribed from the rendered grid; the full four-region chart set is
  \~2 560 cells and only the moderate-region men's 60-64 block is carried here.
- No calibration or discrimination statistics are held — those live in the SCORE2 source papers
  (staged, not ingested). **PROBAST+AI does not rank these against each other**: it lists calibration,
  discrimination and net benefit symmetrically, and an apparent emphasis on calibration comes from the
  title of a paper it cites, not from the tool's own position.

## The ESC-EAS 2025 focused update endorses SCORE2/SCORE2-OP — this page's instrument, confirmed `[2026-08-06]`

The 2025 ESC/EAS dyslipidaemias focused update formally adopts the calculator this page is built on:
«this Focused Update endorses the use of risk scores such as SCORE2 and SCORE2-OP (instead of the SCORE
algorithm) for estimation of the risk of experiencing an MI, ischaemic stroke, or fatal atherosclerotic
CV event over the next 10 years in persons without known CVD aged between 40 and 89 years»
[@esceas2025]. Confirmation, not a new estimate —
the endpoint (fatal **and** non-fatal MI/ischaemic stroke) and the four-country calibration are the ones
already carried above. The update also notes SCORE2/OP «should not be used ... among persons with
existing ASCVD or among persons currently on lipid-lowering therapy» — the prognostic-instrument scope
this page already flags.

## What the risk category licenses — the ESC-EAS 2025 LDL-C goal ladder `[2026-08-06]`

Once SCORE2/OP (or a clinical feature in Table 3) places a person in a category, the category sets the
LDL-C goal. These numbers were image-only in the source (Fig. 1 / Tables 3-4 did not OCR) and were
recovered by a direct PDF-page read — so they carry a figure/table locus, not a `«...»` locate-verified
form ([@esceas2025]):

| Category (Table 3 cut-off) | LDL-C goal (Fig. 1) | Class |
|---|---|---|
| Low — SCORE2/OP <2% | <3.0 mmol/L (<116 mg/dL) | IIb |
| Moderate — >=2% and <10% | <2.6 mmol/L (<100 mg/dL) | IIa |
| High — >=10% and <20% (or TC >8 / LDL-C >4.9 mmol/L, BP >=180/110, moderate CKD, FH) | <1.8 mmol/L (<70 mg/dL) **and >=50% reduction** | I |
| Very high — >=20% (or documented ASCVD, severe CKD, DM + target-organ damage) | <1.4 mmol/L (<55 mg/dL) & >=50% reduction | I (IIa for primary-prevention FH) |
| Extreme — recurrent events on max statin; polyvascular | <1.0 mmol/L (<40 mg/dL) | IIb |

The category cut-offs are total-CVD (fatal + non-fatal) SCORE2/OP percentages — **double** the old
SCORE fatal-only thresholds (the 2x multiplier this Focused Update applied). And initiation is not a pure
function of the goal: **Table 4** crosses total CV risk with *untreated* LDL-C band, so a very-high-risk
person in secondary prevention gets concomitant drug therapy at every LDL band, while low/moderate risk
stays at lifestyle advice until the untreated LDL is high
[@esceas2025]. The downstream **effect** of hitting
these targets (the per-mmol event reduction) is CTT/Marston's, not the guideline's -> [[LDL Lowering and Cardiovascular Events]].



## PREVENT-ASCVD vs SCORE2 — a different calculator answering a DIFFERENT quantity `[2026-08-06]`

The US 2026 ACC/AHA dyslipidaemia guideline stratifies primary prevention with a **different** instrument
— the **PREVENT-ASCVD** equations, not SCORE2 — and it is tempting to read the two families' primary-
prevention thresholds as a disagreement. **The parameter table shows they are not the same quantity, so
the differing thresholds are a distinction, not a tension** (not-joined check (ii): different endpoint,
different instrument):

| Parameter | ESC SCORE2 / SCORE2-OP | ACC-AHA PREVENT-ASCVD | Same quantity? |
|---|---|---|---|
| Endpoint | «MI, ischaemic stroke, or fatal atherosclerotic CV event» (fatal + non-fatal CVD) | 10-y (and 30-y) **ASCVD** | **No** — different composite definitions |
| Calculator | SCORE2 (40-69) / SCORE2-OP (70-89), region-calibrated | PREVENT-ASCVD equations, ages 30-79 | No |
| Category cut-offs | age-banded (Table 5 above); e.g. very-high ≥7.5%/10%/15% | «low (<3%), borderline (3% to <5%), intermediate (5% to <10%), or high (≥10%)» | **No** — not comparable numbers |
| Input | non-HDL-C, SBP, smoking, age, region | PREVENT covariates (adds eGFR, HbA1c, etc.) | No |

[@accaha2026]

**So a PREVENT «borderline 3-<5%» and a SCORE2 «low <2.5-7.5%» band cannot be lined up as looser-vs-
stricter** — they estimate different composites over different age ranges with different calibration. The
guidance families differ here by **instrument and endpoint** (divergence classes 1/2 — standpoint /
evidence base), not by a disagreement on any effect estimate. What DOES converge is the downstream
treat-to-target number once a stratum is fixed -> [[LDL Lowering and Cardiovascular Events]]; the
guidance-null reading of that convergence is on [[Which Objective Moved This Recommendation]].
[inferred from @accaha2026; @esceas2025]

## References

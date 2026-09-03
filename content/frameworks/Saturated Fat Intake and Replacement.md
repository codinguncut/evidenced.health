---
type: framework
question: How much saturated fat, replaced by what, and how confident is that?
aliases: [SFA, Saturated Fatty Acid Intake, SFA Replacement, Dietary Fat Recommendations, WHO SFA Guideline, 10% Energy Threshold]
authors: [World Health Organization (org); Willett, Walter; Stampfer, Meir; Hooper, Lee; Astrup, Arne; Krauss, Ronald M; Dehghan, Mahshid; Mente, Andrew; Hamley, Steven; Nordic Council of Ministers (org); Imamura, Fumiaki; Mozaffarian, Dariush; Zhang, Yu; Wang, Dong D; Winters-van Eekelen, E]
sources: [WHO - Saturated and Trans Fatty Acid Intake 2023, Willett - Nutritional Epidemiology 3e, ESC - CVD Prevention Guidelines 2021, Hooper - Saturated Fat Reduction Cardiovascular Cochrane 2020, Astrup - Saturated Fats Reassessment 2020, Dehghan - PURE Fats Carbohydrate Mortality 2017, Hooper - Omega-6 Fats Cardiovascular Cochrane 2018, Hamley - Saturated Fat PUFA Coronary 2017, NNR - Nordic Nutrition Recommendations 2023, Imamura - Dietary Fats Glucose Insulin Trials Meta-Analysis 2016, Zhang - Butter Plant Oils Mortality 2025, Winters-van Eekelen - Dietary Macronutrients Liver Fat 2020]
cluster: dietary-fat
nucleus: true
confidence: medium
relationships:
  related_to:
    - Does Reducing Saturated Fat Reduce Cardiovascular Events
    - Fatty Liver MASLD and Weight Loss
    - Linoleic Acid and Cardiovascular Disease
    - Certainty of Evidence vs Strength of Recommendation
    - Rating Certainty of Evidence
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
    - Framing a Decision Question
created: 2026-07-25
updated: 2026-09-02
nosplit: 705@single-exposure nucleus (one how-much-SFA-replaced-by-what question); length is dated guidance families + revision strata on one decision, not multiple decisions
self_critiqued: 2026-09-02
---

**Nucleus of the `dietary-fat` cluster.** WHO's 2023 guideline, and the first domain finding in this
wiki. Its structure matters as much as its numbers: **the recommendation splits by replacement
nutrient, and the strength differs across the splits.**


[@who2023saturated]
## The recommendations, with their strength and certainty

| # | Recommendation | Strength | Overall certainty |
|---|---|---|---|
| 1 | Reduce SFA intake to **10% of total energy** | **strong** | **moderate** |
| 2 | Further reduce to **less than 10%** of total energy | conditional | **very low** |
| 3a | Replace SFA with **polyunsaturated fatty acids** | **strong** | moderate * |
| 3b | Replace SFA with **monounsaturated fatty acids from plant sources** | conditional | low * |
| 3c | Replace SFA with **carbohydrates from foods containing naturally occurring dietary fibre** (whole grains, vegetables, fruits, pulses) | conditional | low |

[@who2023saturated]

> **\* There is no inconsistency here, though it looks like one.** WHO does *not* assign
> contradictory certainty to the same comparison. The "low PUFA / moderate
> plant-MUFA" figures are scoped to *"prospective observational studies in the systematic review by
> **Reynolds** et al."*; the "moderate PUFA" figure comes from *"RCTs and strictly controlled feeding
> trials"* and Hooper's RCT subgroup. **Both sentences say "overall" at different scopes** -- within
> the observational body, versus across study types -- which is confusing wording, not a contradiction.
> Per-design rating is exactly what GRADE prescribes. A correct practice was scored as a defect, and
> the claim was propagated to three pages plus the hub before a blind audit caught it. The real finding
> A follow-up attempt to find a *real* discrepancy in this neighbourhood (a roll-up "departure") was
> also falsified, before commit. See [[Rating Certainty of Evidence]] for what GRADE 5.4 actually says.
>
> *Superseded text, kept for the record:* the rationale for
> recommendation 3 (and the executive summary) assigns **moderate to PUFA and low to MUFA**. But the
> *Summary of evidence*, the *Evidence to recommendations* section, and the **Annex 7
> evidence-to-decision table** all assign **moderate to plant-based MUFA and low to PUFA** — and the
> Annex 6 evidence profile for the PUFA replacement shows every hard outcome at Low or Very low.
> Similarly rec 2 is "very low" in its rationale and **"low"** in three other places.
> [@who2023saturated]
>
> **This is a finding, not a transcription problem.** WHO's *strength* rationale for the strong PUFA
> recommendation cites "moderate certainty overall" — so the strongest replacement recommendation in
> the guideline rests on the contested cell. Run
> [[Was GRADE Actually Used]] criterion 3 (per-outcome rating, consistently reported) against it.

Trans-fatty acids follow the same shape at a different threshold: reduce to 1% of energy (strong),
further reduce below 1% (conditional), replace with PUFA or MUFA "primarily from plant sources" (conditional).

## What the evidence actually showed

- **RCTs:** reducing SFA reduced CVD risk in adults (moderate certainty), and **greater reductions
  produced greater risk reduction** — a dose-response gradient.
  [@who2023saturated]
- **All-cause mortality is weaker than WHO's own summary sentence implies.** The summary says lower
  SFA "reduced the risk of all-cause mortality and CVDs", but the pooled estimates for all-cause
  mortality are non-significant (RCT RR 0.96, 95% CI 0.90-1.03; observational RR 0.93, 0.86-1.00),
  and WHO states elsewhere that reducing SFA "did not appear to have an effect on risk of all-cause
  mortality." [@who2023saturated]
  The CVD finding is the one that carries the recommendation.
- **The 10% threshold is where the evidence stops, not where the biology does.** Stepwise testing of
  intake thresholds "did not find a clear effect on any cardiovascular or mortality outcome at SFA
  intakes of less than 10% of total energy intake" — *but* significant reductions in CVD and CVD
  mortality were observed below **9%**. WHO's own summary: "there is ample evidence supporting
  reduction of SFA intake to 10% of total energy, but only limited evidence supporting a reduction to
  below 10%." Almost all trials had baseline SFA above 10%, so the sub-10% range is thinly studied
  rather than shown to be flat.
- **Observational:** lower SFA associated with reduced all-cause mortality (very low certainty);
  below-10% versus above-10% (low certainty).
- **On LDL, all three replacements work, with high certainty.** Replacing SFA with PUFA, MUFA *or*
  carbohydrates all reduced LDL cholesterol (**high certainty**), the effect is cumulative — "the
  more SFA intake is reduced, the more LDL cholesterol is lowered" — and it was observed down to SFA
  intakes of **2% of total energy**.
  [@who2023saturated]
  - **That LDL reduction is causally meaningful, not just a moved marker** -> [[LDL ApoB and Cumulative Exposure]] (LDL/apoB *causes* ASCVD; risk falls in proportion to the reduction achieved x its
    duration). This reframes the small events effect below: a modest LDL drop sustained over decades is
    worth more than the short-trial RR suggests — but the caveat cuts too, since the SFA->LDL effect is
    itself modest, and in the metabolically-impaired LDL-C can understate the apoB particle change.

**The replacements are NOT equivalent on LDL.** High certainty attaches to all three, but the
magnitudes are explicitly rank-ordered: "the greatest reduction in LDL cholesterol was observed for
polyunsaturated fatty acids, followed by monounsaturated fatty acids and then carbohydrates" —
**-0.055 / -0.042 / -0.033 mmol/L per 1% of energy exchanged**. PUFA and MUFA additionally lowered
triglycerides and both cholesterol ratios.
[@who2023saturated]

So PUFA's stronger recommendation is **over-determined**: it has both the largest lipid effect and
(on the rec-3 rationale) the better hard-outcome evidence. What the structure *does* show is that
certainty on the **surrogate is uniformly higher than certainty on the outcomes it stands for** —
high for LDL, moderate-to-low for the clinical endpoints. That asymmetry, not an equivalence among
replacements, is the transferable point.
[inferred from @who2023saturated]

## The absolute effects (Annex 6 second pass, 2026-07-26)

The recommendations above are stated as strength + certainty. Those cannot be ranked against anything.
These can. All figures are WHO's own, per 1000 people, at the event rate observed in the studies.
[@who2023saturated]

**Lower vs higher SFA intake, adults (profile 1, RCTs):**

| Outcome | RR (95% CI) | Absolute per 1000 | Certainty |
|---|---|---|---|
| All-cause mortality | 0.96 (0.90-1.03) | 2 fewer (6 fewer to 2 more) | Moderate |
| CVD mortality | 0.94 (0.78-1.13) | 1 fewer (4 fewer to 2 more) | Low |
| **Cardiovascular diseases** | **0.83 (0.70-0.98)** | **15 fewer (25 fewer to 2 fewer)** | **Moderate** |
| CHD mortality | 0.97 (0.82-1.16) | 1 fewer (3 fewer to 3 more) | Low |
| CHD (fatal + non-fatal) | 0.83 (0.68-1.01) | 7 fewer (14 fewer to 0) | Very low |
| Stroke | 0.92 (0.68-1.25) | 2 fewer (7 fewer to 6 more) | Very low |

**The headline number is 15 fewer cardiovascular events per 1000** -- about 1.5 percentage points, on a
control event rate of 8.5%. **It is the only hard outcome in the profile that excludes the null.** No
mortality outcome does: all-cause 2 fewer, CVD mortality 1 fewer, CHD mortality 1 fewer, every interval
spanning no effect. A reader who takes "strong recommendation" to mean *this saves lives, measurably*
is reading something the profile does not contain.
[inferred from @who2023saturated]

**By replacement (RCTs, cardiovascular diseases):**

| Replacement | RR (95% CI) | Absolute per 1000 | Control event rate | Certainty |
|---|---|---|---|---|
| PUFA | 0.79 (0.62-1.00) | 50 fewer (91 fewer to 0) | **23.8%** | Low |
| Carbohydrate | 0.84 (0.67-1.06) | 12 fewer (25 fewer to 5 more) | 7.6% | Low |
| Plant MUFA | 3.00 (0.33-26.99) | 77 **more** (26 fewer to 1000 more) | 0.4% [sic -- 1/26 = 3.8%] | Very low |

**Do not read the 50-vs-12 gap as PUFA outperforming carbohydrate by 4x.** The PUFA trials ran in a
population with a **23.8% control event rate against 7.6%** -- roughly three times the baseline risk.
That is [[Baseline Risk and the Relative-Absolute Split]] operating in the wild: most of the absolute
gap is the population, not the nutrient. The relative effects (0.79 vs 0.84) are far closer than the
absolute ones, and both intervals touch or cross 1.00.
[inferred from @who2023saturated]

**The MUFA row is a warning about reading certainty labels as evidence weight.** The plant-MUFA RCT
evidence is **a single trial, 52 participants, 4 events**, giving RR 3.00 with an interval running to
26.99 -- rated Very low, correctly. WHO says so in prose: *"only one small trial with olive oil as an
intervention was included in the monounsaturated fatty acids subgroup."* WHO's *moderate* certainty for
plant MUFA comes entirely from **observational** data -- for cardiovascular diseases, RR 0.90
(0.84-0.96), **7 fewer per 1000**, 3 studies, Moderate, upgraded for dose-response. So the MUFA
recommendation is observational-only in substance, and the RCT evidence that exists points the other
way on numbers too small to mean anything.

**Two traps in this row, both of which this page previously fell into.** The Annex 6 study-count cell
reads `16` -- that is the count `1` run together with footnote marker `6`, whose text is *"Only one
study included."* And the frequently-quoted RR 0.85 (0.82-0.88) / 36 fewer per 1000 for plant MUFA is
the **all-cause mortality** row, not the cardiovascular one; importing it into a CVD table overstates
the absolute benefit five-fold.

## Replacement is conditional on energy balance

The guidance on replacement nutrients "is relevant for a state of energy balance, in which total
energy consumed is balanced by total energy expended... **In cases of positive energy balance, and
where a reduction in total energy intake is desired, SFA intake may be reduced in part or entirely
without the need for a replacement nutrient.**"
[@who2023saturated]

So the comparator is not fixed: in energy balance the question is *SFA versus what*, and in energy
surplus it can be *SFA versus nothing*. A recommendation to *replace SFA with PUFA* is silently
conditioned on an energy assumption that often will not hold for the person reading it — which makes
this a worked case of why a comparator must be stated ([[Framing a Decision Question]]).

<div class="recent-update" data-last-updated="2026-09-02"></div>

## The food matrix — named, acknowledged, and not resolved

WHO records that "different SFA-containing foods, such as dairy foods, may have differential effects
on risk of CVDs and type 2 diabetes, as a result of either differing compositions of SFAs across
foods, other constituents of the foods (i.e. the 'food matrix') or a combination of the two"
[@who2023saturated] — and then files it as a
**research gap**, calling for work to "compare the health effects of SFA from different food sources
(e.g. plant, animal, dairy, specific oils), taking into consideration the nature of the replacement
nutrient(s) or food(s)." [@who2023saturated]

The recommendations are therefore **nutrient-level, not food-level** — and the stated reason is a
**scope decision, not an evidence judgment**: "considering the effects of specific foods or classes
of foods is beyond the scope of this guideline."
[@who2023saturated] WHO's separate
*insufficiency* finding covers **individual SFA** (which specific fatty acids), a different question.

So the guidance does not distinguish butter from cheese from yoghurt at matched SFA, and the reason
is that it never asked — with the question then filed as a research gap. That is materially different
from either an oversight or a considered verdict of no-difference, and it leaves the question open
rather than closed. **-> Partly cashed for one SFA-source pair — *butter vs plant oils, on mortality* —
by Zhang 2025 (see *Butter vs plant oils at the food level*, below).**

## Decision relevance

- **The threshold and the replacement are two separate decisions**, and the second is where the
  evidence is thinnest. *Eat less saturated fat* without a replacement names half a recommendation.
- **Below 10% is weakly supported, and WHO says so** — the conditional recommendation rests on very
  low certainty, adopted as "a conservative approach" because no countervailing harm was found, not
  because benefit was *confidently* demonstrated — WHO records evidence "suggested reduced risk of
  CVDs with SFA intakes of less than 10%", at very low certainty.
- **If you are in energy surplus and reducing intake, the replacement question may not arise at all.**
- **Do not read the LDL evidence as the outcome evidence.** High certainty attaches to the lipid
  change; moderate-to-low certainty attaches to what follows from it.
- **The PUFA replacement is predominantly linoleic acid** — its own direct outcome evidence (an
  objective-biomarker cohort pool, and the omega-6/seed-oil controversy) is held separately on
  [[Linoleic Acid and Cardiovascular Disease]]. The omega-6 RCT source has now landed and does **not**
  independently corroborate the PUFA-events benefit — it tempers it (see *Omega-6 RCTs do not
  corroborate the PUFA arm*, below).

## Limits

- Recommendations are nutrient-level; food-level and dietary-pattern-level effects are explicitly
  unresolved (above).
- The sub-10% range is under-studied rather than shown flat — an absence of evidence at those intakes,
  with the sub-9% signal cutting the other way.
- This page carries the guideline's *conclusions and certainty structure*. The full GRADE evidence
  profiles (Annex 6), the evidence-to-decision tables (Annex 7), and the effect magnitudes per
  outcome are extracted above (*Annex 6 second pass*). The evidence-to-decision tables (Annex 7)
  remain unextracted.
- **The control event rates WHO prints are not all internally consistent** — the plant-MUFA RCT row
  gives *"1/26 (0.4%)"* where 1/26 = 3.8%, and WHO's own absolute effect (77 more per 1000 at RR 3.00)
  implies 3.8%. Reproduced above as printed, flagged rather than silently corrected.
- No longer single-source: Willett is ingested and cited throughout. What is still absent is an
  independent appraisal of the **same evidence base** by a second guidance body — Hooper 2020 (added
  2026-07-29) is *not* that: it is the **upstream** Cochrane MA whose RCT estimates WHO adopted, so it
  strengthens warrant on the numbers without adding an independent witness (see the Hooper section).



## Why SFA intake cannot be rescued by a biomarker `[2026-07-28, Willett ch.8]`

Everything on this page rests on **self-reported** saturated-fat intake. The obvious remedy — measure
it in blood or tissue instead — is closed off, and Van Dam & Hunter say why:

> «However, biomarkers of fatty acids can also have serious limitations. Biomarkers generally perform
> poorly for fatty acids that can be produced endogenously, including even-chained saturated and
> monounsaturated fatty acids. Furthermore, although biomarkers appear "objective," the use of fatty
> acid biomarkers can introduce bias and confounding that is not present for studies of fatty acid
> intakes.»
> [@willett]

**The mechanism is endogenous synthesis.** A tissue concentration of a fatty acid the body *makes* is a
function of intake **and** of de novo lipogenesis, which is itself driven by carbohydrate intake,
energy balance and insulin status. **The biomarker measures the sum and cannot separate the terms.**

**Three consequences for how this page's evidence should be read.**

- **Self-report is not a remediable weakness here; it is the ceiling.** For SFA and MUFA there is no
  better instrument waiting to be applied. That is different from a literature that *could* be
  upgraded and has not been.
- **The reliability of "fat" evidence varies sharply by fat type**, and the split is mechanistic:
  fatty acids the body **cannot** synthesise (trans fats, long-chain n-3) have informative biomarkers;
  those it can (even-chain saturated, monounsaturated) do not. **This is a within-category boundary
  that carries real information** -> [[Is the Food Category Doing Any Work]]. It is also a partial
  explanation for why the trans-fat signal is the firmest fat finding the corpus holds.
- **The third sentence is the one to keep.** Willett's chapter states that fatty-acid biomarkers can
  *introduce* bias and confounding «not present for studies of fatty acid intakes» — so substituting a
  biomarker is not a strictly-safer choice. **The apparent objectivity of a biochemical measure is not
  the same as freedom from confounding**, and here it can run the other way.
  [inferred from @willett]

**What this does NOT do.** It does not weaken any specific estimate on this page. WHO's trials measured
*assigned* diets, not biomarkers, and the cohort evidence's measurement problem was already recorded.
**This says the problem is structural rather than fixable** -> [[Measurement Error in Dietary Assessment]].

## A third guidance family — same number, same replacement hierarchy `[2026-07-28, ESC]`

ESC Table 8:

> «Saturated fatty acids should account for <10% of total energy intake, through replacement by PUFAs,
> MUFAs, and carbohydrates from whole grains»
> [@esc2021]

**Parameter table** against the WHO recommendations already on this page:

| Parameter | WHO 2023 | ESC 2021 | Same quantity? |
|---|---|---|---|
| Threshold | **<10% of total energy** | **<10% of total energy** | **YES** |
| Replacements named | PUFA; MUFA **from plant sources**; carbohydrate from **foods containing naturally occurring dietary fibre** | PUFA; MUFA; carbohydrate **from whole grains** | **near — ESC omits WHO's *plant sources* qualifier on MUFA** |
| Ordering of replacements | PUFA **strong**, MUFA and carbohydrate **conditional** | listed in the same order, **no strength attached** | **NO — ESC grades nothing here** |
| Certainty on the threshold | **moderate** | **not stated in Table 8** | **NO** |

**The threshold matches exactly and the replacement list matches nearly.** What ESC does not carry is
the **structure**: WHO separates a strong PUFA recommendation from conditional MUFA and carbohydrate
ones, at different certainties. **ESC's table presents all three as one undifferentiated instruction.**

**So a reader taking ESC alone would not learn what this page's central finding is** — that the three
replacements are *not* equivalent, and that PUFA's stronger recommendation is over-determined by having
both the largest lipid effect and the firmer evidence. **The information loss is in the presentation,
not the position:** ESC's ordering happens to match WHO's strength ordering, but nothing in the table
says so.
[inferred from @esc2021; @who2023saturated]

**NOT filed as independent corroboration.** Two guidance bodies reaching the same threshold is the
configuration this corpus has repeatedly found to be non-independent, and **the wiki has not checked
ESC's evidence base for this line** — Table 8 carries no references. **Absence of a check is not
evidence of independence**, so no `[E-independent]`, and the agreement is recorded as a fact about the
guidance set rather than as added confidence.

## Annex 6 — the full evidence profile, with absolute effects `[2026-07-28]`

The source page called this **the single highest-value unextracted block in the wiki**. Read from the
recovered-tables sidecar (pp 79-80), which preserves the grid the flattened chunk text loses.

**Reducing saturated fat intake — every graded outcome:**

| Outcome | Design | Studies | Relative (95% CI) | **Absolute per 1000 (95% CI)** | Certainty |
|---|---|---|---|---|---|
| All-cause mortality | RCT | 12 | RR 0.96 (0.90 to 1.03) | **2 fewer** (6 fewer to 2 more) | Moderate |
| All-cause mortality | Obs | 21 | RR 0.93 (0.86 to 1.00) | **12 fewer** (25 fewer to 0) | Very low |
| CVD mortality | RCT | 11 | RR 0.94 (0.78 to 1.13) | **1 fewer** (4 fewer to 2 more) | Low |
| **Cardiovascular diseases (events)** | **RCT** | **13** | **RR 0.83 (0.70 to 0.98)** | **15 fewer (25 fewer to 2 fewer)** | **Moderate** |
| Cardiovascular diseases | Obs | 16 | RR 0.93 (0.86 to 1.02) | **4 fewer** (9 fewer to 1 more) | Very low |
| CHD mortality | RCT | 9 | RR 0.97 (0.82 to 1.16) | **1 fewer** (3 fewer to 3 more) | Low |
| CHD (fatal and non-fatal) | RCT | — | RR 0.83 (0.68 to 1.01) | **7 fewer** (14 fewer to 0) | Very low |
| CHD (fatal and non-fatal) | Obs | — | RR 0.96 (0.90 to 1.03) | **1 fewer** (3 fewer to 1 more) | Very low |
| Stroke | RCT | — | RR 0.92 (0.68 to 1.25) | **2 fewer** (7 fewer to 6 more) | Very low |
| Stroke | Obs | — | RR 1.02 (0.90 to 1.16) | **0 more** (2 fewer to 3 more) | Low |
| Type 2 diabetes | — | — | RR 0.98 (0.91 to 1.06) | **1 fewer** (4 fewer to 3 more) | Low |
| **LDL cholesterol** (mmol/L per 1% energy exchange) | — | — | — | **-0.055 (-0.061 to -0.050)** | **High** |

[@who2023saturated]

**Column mapping verified by arithmetic, not by eye.** The flattened table interleaves outcome labels
with values, so each absolute was checked against `event rate x (1 - RR)`: CVD events 8.5% x 0.17 = 14.5
-> «15 fewer»; all-cause 6.2% x 0.04 = 2.5 -> «2 fewer»; CVD mortality 1.9% x 0.06 = 1.1 -> «1 fewer»;
CHD 4.2% x 0.17 = 7.1 -> «7 fewer». **Four independent confirmations of the column alignment.**

### Four findings, and the first one changes how this page should be read

**1. Exactly ONE outcome clears the null, and it is not mortality.** Cardiovascular *events* —
**15 fewer per 1000, RR 0.83 (0.70 to 0.98), Moderate certainty, 13 RCTs.** Every other interval
crosses no-effect: all-cause mortality, CVD mortality, CHD mortality, CHD events, stroke, type 2
diabetes. **The page's headline was already the strongest cell in the annex; what was missing is that
it is the ONLY one.** **And it is trial-quality-sensitive from inside the source:** Hooper's own
low-summary-risk-of-bias sensitivity analysis weakens the combined-events benefit to «more marginal
protection» (Analysis 1.36) and drops MI to a frank null (RR 0.93, 0.81-1.08) — the primary RR 0.83
stands and most other sensitivity checks confirm it, but the low-RoB one does not, which is what the
Moderate grade encodes -> [[Does Reducing Saturated Fat Reduce Cardiovascular Events]] (*Hooper's own
risk-of-bias sensitivity analyses*).
[@hooper2020]

**2. Reducing saturated fat does not measurably reduce dying.** All-cause mortality in RCTs is
**2 fewer per 1000, RR 0.96 (0.90 to 1.03)** at **Moderate** certainty — not a thin-evidence null but a
reasonably-graded one. **This is a decision-relevant fact that the 10%E recommendation does not
carry**, and anyone reading SFA reduction as a longevity intervention is reading past the evidence.

**3. The certainty gradient runs exactly opposite to the outcome importance.** LDL cholesterol is the
**only High-certainty row in the annex**; every patient-important outcome is Moderate or below, and
four are Very low. **The best-known quantity is the surrogate** -> [[Surrogate Outcomes]]. **Same
structure as [[Sodium Intake and Blood Pressure]]** — high certainty on the marker, very low on the
outcomes it stands for. **Two exposures, two guidelines, one shape.**

**4. RCTs and cohorts disagree on all-cause mortality, and the cohorts look better.** Observational:
**12 fewer per 1000, RR 0.93 (0.86 to 1.00)**. Randomised: **2 fewer, RR 0.96**. **The observational
estimate is six times larger in absolute terms** — and WHO grades it **Very low** against the RCTs'
**Moderate**. **This is the design-class divergence Willett documents, appearing inside a single
guideline's own annex** -> [[Measurement Error in Dietary Assessment]],
[[Upgrading Observational Evidence]]. **Note WHO resolved it the right way** — it graded the larger,
more flattering estimate lower.

**What this does NOT establish.** These are effects of *reducing SFA* pooled across replacement
nutrients; the replacement-specific profiles (5 and 9) are the ones already on this page, and they are
a different cut of the evidence. **Do not add a row from this table to a row from those.**


[@who2023saturated]
## Hooper 2020 — the Cochrane RCT meta-analysis underneath WHO's numbers `[2026-07-29]`

Hooper is the primary Cochrane review
(15 RCTs, 16 comparisons, 56 675 participants, all interventions >=24 months) that WHO's RCT evidence
profile rests on — WHO names it directly («Subgroup analysis of RCTs in the systematic review by
Hooper et al.»). So this is **not an independent second witness**: the WHO Annex 6 RCT column above
and Hooper's Summary of Findings are the **same trials, re-graded**. Hooper adds four things WHO's
guideline does not carry: the headline in the primary source's own voice, an NNT/time-horizon framing,
the dose-response *mechanism*, and the effect-modification nulls.

**Non-independence, cell by cell.** Every RCT estimate in this page's Annex 6 table is Hooper's:

| Outcome (RCT) | WHO Annex 6 — RR / absolute / certainty | Hooper 2020 SoF — RR / absolute / certainty | Same quantity? |
|---|---|---|---|
| All-cause mortality | 0.96 (0.90-1.03) / 2 fewer / Moderate (12) | 0.96 (0.90-1.03) / 62->60 per 1000 / Moderate (12) | **YES — identical** |
| CVD mortality | 0.94 (0.78-1.13) / 1 fewer / **Low** (11) | 0.94 (0.78-1.13) / 19->18 per 1000 / **Moderate** (11) | **same estimate, certainty differs** |
| Cardiovascular events | 0.83 (0.70-0.98) / 15 fewer / Moderate (13) | 0.83 (0.70-0.98) / 85->70 per 1000 / Moderate (13) | **YES — identical** |
| CHD mortality | 0.97 (0.82-1.16) / 1 fewer / Low (9) | 0.97 (0.82-1.16) / 16->16 per 1000 / Low (9) | **YES — identical** |
| CHD events | 0.83 (0.68-1.01) / 7 fewer / Very low (11) | 0.83 (0.68-1.01) / 42->35 per 1000 / Very low (11) | **YES — identical** |
| Stroke | 0.92 (0.68-1.25) / 2 fewer / Very low (7) | 0.92 (0.68-1.25) / 22->20 per 1000 / Very low (7) | **YES — identical** |

[@hooper2020]
[@who2023saturated]

The **only** difference across shared outcomes is CV-mortality certainty — Hooper grades it Moderate,
WHO grades the identical estimate Low (WHO applied one further downgrade); neither the RR (0.94) nor the
absolute (1 fewer per 1000) moves. So this page's RCT numbers are confirmed *as Hooper's*, and the
`[E-independent]` bar is **not** met: two guideline/review layers over one trial base is exactly the
non-independence this page already flags for the WHO/ESC threshold agreement.
[inferred from @hooper2020; @who2023saturated]

**The events-not-mortality finding, now stated by the primary source.** This page derived *exactly one
outcome clears the null, and it is not mortality* as an reading of WHO's Annex 6 (which *WHO
does not summarize this way*). Hooper summarizes it **exactly** this way, as the review's headline:

> «We found little or no eﬀect of reducing saturated fat on all-cause mortality (RR 0.96; 95% CI 0.90 to
> 1.03; 11 trials, 55,858 participants) or cardiovascular mortality (RR 0.95; 95% CI 0.80 to 1.12, 10
> trials, 53,421 participants), both with GRADE moderate-quality evidence.»
> [@hooper2020]

So the inference this page made is **upgraded to a directly-extracted claim** — the F-move: the composite
(WHO profile + Hooper's own summary) removes the inference burden the earlier reading carried alone. The
**Moderate** certainty on the mortality nulls is load-bearing — this is a well-graded null, not
thin evidence, so *reducing SFA does not measurably reduce dying* is a reasonably-certain finding, not an
absence of data. (The abstract's mortality counts differ trivially from the SoF table — CV mortality
RR 0.95 (0.80-1.12) / 10 trials in the abstract vs 0.94 (0.78-1.13) / 11 in the SoF; both near-Moderate,
both spanning the null.) Authors' conclusion:

> «The findings of this updated review suggest that reducing saturated fat intake for at least two years
> causes a potentially important reduction in combined cardiovascular events.»
> [@hooper2020]

**NNT / time-horizon framing (new — WHO gives 15-per-1000 but no NNT).**

> «This 17% reduction in risk of CVD events translated into a number needed to treat for an additional
> beneficial outcome (NNTB) of 56 in primary prevention trials, so that 56 people need to reduce their
> saturated fat intake over around four years for one person to avoid experiencing a CVD event. In
> secondary prevention trials, the NNTB was 53.»
> [@hooper2020]

NNTB **56** (primary prevention) / **53** (secondary) over **\~4 years** restates the 15-fewer-per-1000
headline as a person-count against a time horizon — the form a decision actually uses. That the two
settings are so close is mildly surprising, and it is **not** a consequence of the constant relative
effect — the opposite: a constant RR makes absolute benefit *scale with* baseline risk (route (a),
below), so the higher-baseline-risk secondary-prevention population should give a **lower** NNTB. The
near-equality (56 \~ 53) instead reflects comparable baseline event rates and follow-up across the two
trial sets, not the constancy of the relative effect.

**Dose-response, with a mechanism (refines this page's WHO *greater reductions produced greater risk
reduction*).** Hooper's meta-regression locates the source of the between-trial heterogeneity (I2 = 67%):

> «Meta-regression suggested that greater reductions in saturated fat (reflected in greater reductions in
> serum cholesterol) resulted in greater reductions in risk of CVD events, explaining most heterogeneity
> between trials.»
> [@hooper2020]

Two refinements over the bare WHO statement: the gradient runs **through serum-cholesterol lowering**
(the dose-response is cholesterol-mediated, consistent with [[LDL ApoB and Cumulative Exposure]]), and
Hooper reads the gradient as *strengthening the causal claim* — «This suggestion of a dose response
strengthens our belief that there is a true eﬀect of reducing saturated fat on CVD events.»
[@hooper2020]. It is a **monotone**
dose-response on the events outcome (no knee located; more reduction, more benefit, over the studied
range) — a data point for the dose-response-shape question -> [[The U-Shaped Association Artifact]].

**The monotone reading does not license extrapolation to zero (2026-08-01).** *Over the studied range*
is load-bearing: the trials contrast typical intakes against reduced ones (WHO's target is **<10%E, not
0%E**), so the RR 0.83 gradient says nothing about a 1%->0%E move — that extreme is unobserved, and a
curve measured monotone *within* a range is not evidence it continues below it (the corpus rule: an
endpoint marks the edge of the evidence, not a feature of the curve). The cholesterol-mediated mechanism
also bounds the claim to LDL/apoB lowering, not to SFA-avoidance as an end in itself.


**Effect-modification NULLS — the relative effect does not vary by stratum (route-b negatives).**

> «The reduction in combined cardiovascular events resulting from reducing saturated fat did not alter by
> study duration, sex or baseline level of cardiovascular risk, but greater reduction in saturated fat
> caused greater reductions in cardiovascular events.»
> [@hooper2020]

> «People who are currently healthy appear to benefit as much as those at increased risk of heart disease
> or stroke (people with high blood pressure, high serum cholesterol or diabetes, for example), and
> people who have already had heart disease or stroke. There was no diﬀerence in eﬀect between men and
> women.»
> [@hooper2020]

Decision-relevant because it fixes **which** stratification route applies. The *relative* effect
(RR \~0.83) is constant across baseline CVD risk, sex and duration — so SFA reduction is a **route-(a)**
case, not route-(b): personalize by **baseline risk** (absolute benefit scales with it ->
[[Baseline Risk and the Relative-Absolute Split]]), not by a claimed effect-modifier. That is the same
logic this page's PUFA-vs-carbohydrate absolute-gap discussion already ran (23.8% vs 7.6% control-rate
populations), now confirmed by a **direct subgroup test** rather than inferred from event rates.
[inferred from @hooper2020]

**Replacement nutrient — PUFA and carbohydrate not distinguishable on hard events.**

> «Subgrouping did not suggest significant diﬀerences between replacement of saturated fat calories with
> polyunsaturated fat or carbohydrate, and data on replacement with monounsaturated fat and protein was
> very limited.»
> [@hooper2020]

This is **weaker** than WHO's structure (strong PUFA vs conditional carbohydrate): on hard CVD **events**,
Hooper's RCT subgrouping cannot separate PUFA from carbohydrate. Consistent with this page's finding that
PUFA's edge is over-determined by the **LDL** magnitude while the replacement-specific *event* evidence is
thin and imprecise — Hooper's clean signal is of *reducing SFA*, pooled across replacements; the
replacement contrast is underpowered.

## The heterodox reassessment — Astrup et al. 2020 `[2026-07-29]`

Astrup (a JACC narrative *State-of-the-Art Review*, 12 authors)
argues the population SFA limit is not supported and should be replaced with **food-based** guidance.
It contests threads on this page rather than adding new trials — the full joined issue is filed as
**[[Does Reducing Saturated Fat Reduce Cardiovascular Events]]** (the vault's 2nd tension). What it
changes here:

- **It AGREES with the mortality finding above.** "Most recent meta-analyses of randomized trials and
  observational studies found no beneficial effects of reducing SFA intake on cardiovascular disease
  (CVD) and total mortality." For mortality that is Hooper's RR 0.96 — the reassessment and the
  Cochrane MA are the *same* result. So the apparent contradiction is narrower than the framing.
  [@astrup2020]
- **A comparator-contamination challenge to the classic diet-heart RCT base.** The classic trials had
  partially hydrogenated fish oils (trans fats) in their control-arm margarines, so "the European diets
  are tests of polyunsaturated fats against trans-plus-saturated fats, which means that any effects
  described cannot be assigned to saturated fats alone"; "Dropping these 3 studies from a meta-analysis
  leaves the U.S. trial, which did not find a significant difference between groups for its primary CVD outcome." **Scope it: this
  targets the AHA Presidential Advisory's 4-core-trial selection, NOT Hooper's 13-trial pool** — whether
  the contamination flips the pooled RR 0.83 is an untested inference (View B is a narrative review, and
  post-hoc exclusion carries the selection-bias risk it names). Unadjudicated here.
  [@astrup2020]
  - **Hamley 2017 now runs that reanalysis for the SFA->n-6-PUFA-replacement pool `[2026-08-04]`:**
    splitting the 11 diet-heart trials by confounding (trans fats, multifactorial advice, vitamin E,
    cardiotoxic meds), the significant all-trials benefit (total CHD events RR 0.80) vanishes in the
    confounder-free subset (RR 1.02, 0.84-1.23; subgroup difference P=0.002). So Astrup's contamination
    critique is **demonstrated on the replacement pool** — but Hamley's pool is *not* Hooper's broader
    SFA-reduction pool (the RR 0.83 above), his adequacy filter is post-hoc and single-author
    (`moderate`), so it grounds the critique without recomputing this page's number. Full parameter table
    + symmetric-standards appraisal on
    [[Does Reducing Saturated Fat Reduce Cardiovascular Events]]. [@hamley2017]
- **The attribution is genuinely open: SFA harm or PUFA benefit?** Even granting a lower CVD risk with
  PUFA-for-SFA substitution, it "could be attributed to a possible beneficial effect of polyunsaturated
  fatty acids and not necessarily to an adverse effect of SFAs." Hooper's own subgroup null (PUFA vs
  carbohydrate indistinguishable on events, quoted above) means the RCTs cannot separate the two. **So
  the substitution sets the sign** — the page's existing rule — and *avoid SFA* is not what the events
  evidence licenses; *replace SFA with PUFA/whole foods* is.
  [@astrup2020]
- **SFA harm is conditioned on carbohydrate context (mechanism, directional).** "It is important to
  distinguish between dietary saturated fat and circulating SFAs" — circulating even-chain SFAs predict
  disease, but "the amount of circulating SFAs in blood is not related to saturated fat intake from the
  diet but instead tends to track more closely with dietary carbohydrate intake" (a 2-3x SFA rise on a
  low-carb background leaves serum SFAs flat or lower, via reduced de novo lipogenesis + increased fat
  oxidation). A substrate-competition frame: the harm of a high-SFA diet is modulated by
  carbohydrate/insulin status. [inferred from @astrup2020]
- **A claimed SFA-sensitive subgroup (route-b, unconfirmed).** APOE4 / APOA2 gene-diet interactions
  lead Astrup to "It is this segment of the population (the SFA-sensitive) in which the reduction in
  SFA intake may be beneficial and could therefore be recommended" — but he concedes that "in the
  absence of randomized dietary intervention studies" these effects "cannot be attributed specifically
  to SFAs." An effect-modification claim on observational gene-diet data — a route-(b) hypothesis, not
  a warrant for stratifying yet, and cutting against Hooper's **direct subgroup null** (relative effect
  constant across baseline risk/sex/duration, the route-(a) finding above).
  [@astrup2020]

Astrup's LDL-surrogate argument (diet-induced LDL-C may not track the atherogenic apoB-particle burden)
is woven onto [[LDL ApoB and Cumulative Exposure]]; his food-matrix program (dairy, meat, chocolate) onto
[[Is the Food Category Doing Any Work]].

## PURE 2017 — the observational arm, grounded (and its income confound) `[2026-07-29]`

Dehghan is the large prospective cohort (135 335 adults,
18 countries, median 7.4 y) that the Astrup reassessment leans on for its observational pillar — so
this **grounds the observational arm** already referenced in [[Does Reducing Saturated Fat Reduce Cardiovascular Events]] with the actual data. It is **F (grounding), not `[E-independent]`**: it is the
cohort base Astrup already cited, not a second independent route.

PURE's SFA associations (quintile 5 [median 13.2%E] vs quintile 1 [2.8%E]):

- Total mortality **HR 0.86 (0.76-0.99)**, p-trend 0.0088 — *inverse* (higher SFA, lower mortality).
- Stroke **HR 0.79 (0.64-0.98)**, p-trend 0.0498 — *inverse*.
- Major CVD 0.95 (0.83-1.10), MI 1.17 (0.94-1.45), CVD mortality 0.83 (0.65-1.07) — all **null**.

[@dehghan2017]

**Attempt the contradiction, then scope it.** Read naively, PURE reverses this page: SFA *lowers*
mortality, guidelines are wrong. The parameter table forbids that reading — PURE and the RCT evidence
this page rests on are **not the same quantity**:

| Parameter | PURE (Dehghan) | Hooper RCT / WHO Annex 6 | Same quantity? |
|---|---|---|---|
| Design | observational cohort, FFQ at baseline | 15 RCTs, assigned-diet, >=24 mo | **NO — observational vs randomised** |
| Exposure contrast | *high vs low SFA intake* (13% vs 3%E) across an income/diet gradient | *reduce SFA vs usual*, within-trial | **NO — level-contrast vs change** |
| Hard-outcome finding | SFA null on major CVD/MI/CVD death; *inverse* on total mortality + stroke | reducing SFA → CV **events** RR 0.83 (15 fewer/1000); mortality null | **partial — both null on MORTALITY** |
| Confounding structure | residual confounding by **income** (highest-carb = poorest, refined-carb subsistence diets); could not measure trans fat | randomisation balances confounders | **NO — the whole point** |
| Replacement modelled | carb→PUFA lowers mortality (HR 0.89); carb→SFA null on mortality, but lowers stroke (0.80) | SFA→PUFA lowers CV events; SFA→carb does not | **near — both rank PUFA replacement first** |

**The load-bearing weakness, stated plainly (the authors' own).** PURE's highest-carbohydrate quintiles
are dominated by **low-income populations eating refined-carbohydrate subsistence diets**; higher fat =
higher income = better outcomes. The authors concede it twice: «high consumption of carbohydrate and low
consumption of animal products might simply reflect lower incomes; residual confounding as a
potential reason for our results cannot be completely excluded», and «differences in the ability to
afford fats and animal proteins, which are more expensive than carbohydrates».
[@dehghan2017] So the SFA-inverse
and carb-harm signals are the **mirror image of an income gradient**, not a demonstration that SFA
protects — a worked instance of the confounding machinery -> [[The U-Shaped Association Artifact]].

**What genuinely survives, and it is agreement not reversal.** On **mortality**, PURE finds SFA null-to-
inverse and the Hooper RCTs find reducing SFA null — *both say reducing SFA does not measurably reduce
dying*, which this page already holds. On **replacement**, PURE independently ranks **PUFA-for-carb**
first (HR 0.89), echoing the page's PUFA-strong structure. Where PURE cannot speak is the one place the
RCTs do: the SFA→CV-*events* RR 0.83. PURE's own **event** outcomes (major CVD, MI, CVD death) are all
null — but as an unrandomised level-contrast confounded by income, that null does **not** overturn the
randomised events estimate.

**One directional refinement PURE adds (mechanistic, via the companion Mente 2017 lipid paper).** Higher
SFA raised LDL **but** also HDL, and lowered triglycerides, TC/HDL and ApoB/ApoA1; higher carbohydrate
lowered LDL **but** raised ApoB/ApoA1 (the stronger predictor) — so «predicting the net clinical effect
based on considering only the effects of nutrient intake on LDL cholesterol is not reliable».
[@dehghan2017] This grounds Astrup's
LDL-surrogate caveat with data -> [[LDL ApoB and Cumulative Exposure]]; it does **not** contradict LDL's
*causal* status (apoB is the agent), it says diet-induced LDL-C is a poor summary of the whole lipid
change.
[inferred from @dehghan2017]

## Omega-6 RCTs do not corroborate the PUFA arm — Hooper 2018 `[2026-08-04]`

The PUFA replacement here is predominantly linoleic acid, so the obvious question is whether the *direct*
omega-6 RCT evidence independently confirms the SFA->PUFA events benefit (Annex 6 profile 5: RR 0.79,
Low). The omega-6 Cochrane review — **same team as Hooper 2020 above** — says it does **not**: increasing
omega-6 gave CVD events **RR 0.97 (0.81-1.15), Low certainty** and all-cause mortality **RR 1.00, Low**;
only MI (RR 0.88, Low) and total cholesterol (High) moved.
[@hooper2018]

**The authors run the cross-review comparison themselves**, and it is the parameter table (they state the
trials are distinct sets, so the two quantities are not commensurable):

> «only where PUFA was replacing SFA did this protection occur (RR 0.73, 95% CI 0.58 to 0.92 ...). The
> trials included in the saturated fat review and this one are distinct due to rather diﬀerent inclusion
> criteria ... The implications of the reviews are diﬀerent, but related: Hooper 2015 and Sacks 2017
> suggest that reducing saturated fat and replacement by polyunsaturated fats reduces the risk of CVD
> events, while the present review suggests that increasing omega-6 fats may reduce the risk of
> myocardial infarction, but we did not find evidence of an eﬀect on CVD events.»
> [@hooper2018]

**So the events protection lives in the SFA-reduction-with-PUFA *package*, not in omega-6 *addition* per
se** — the CVD-events benefit appears when PUFA *replaces* SFA (RR 0.73 subgroup; the 0.79 profile here),
but isolating "increase omega-6" (often displacing SFA *or* MUFA, over shorter, adherence-diluted trials)
does not reproduce it. This is the **attribution-openness** the Astrup thread and
[[Does Reducing Saturated Fat Reduce Cardiovascular Events]] raise — *SFA harm or PUFA benefit?* — with a
directional refinement: the demonstrable RCT lever is the **substitution** (reduce SFA, replace with
PUFA), consistent with this page's standing rule that *the substitution sets the sign*, not "eat more
seed oil." **F-refinement, NOT `[E-independent]`** — Hooper 2020 and Hooper 2018 share a team and method,
so their agreement is method-shared; the two reviews' trial sets are distinct but the confirmation is not
an independent route. The omega-6 outcome evidence in full is on
[[Linoleic Acid and Cardiovascular Disease]].
[inferred from @hooper2018; @hooper2020]


<div class="recent-update" data-last-updated="2026-09-02"></div>

## The glucose-insulin marker channel — Imamura 2016 (a NEW endpoint, all surrogate) `[2026-09-02]`

Everything above scores the SFA-replacement swaps on **events, mortality, and lipids**. Imamura adds a
different endpoint dimension on the *same* isocaloric swaps: **glucose-insulin homeostasis markers**,
from **102 randomised controlled FEEDING trials** (239 arms, 4,220 adults), pooled by multiple-treatment
meta-regression per **5% energy** exchanged, adjusted for between-arm protein, trans-fat, and fibre.
This is a mechanism-adjacent, surrogate-level channel — it does not measure diabetes or CVD incidence.
[@imamura2016fats]

**The SFA-replacement rows (5%E exchange, pooled mean change, 95% CI):**
[@imamura2016fats]

| Marker (n trials) | SFA -> PUFA | SFA -> MUFA | CHO -> SFA |
|---|---|---|---|
| Fasting glucose, mmol/L (99) | **-0.04 (-0.07, -0.01)** | -0.02 (-0.04, 0.00) | +0.02 (-0.01, 0.04) |
| HbA1c, % (23) | **-0.15 (-0.23, -0.06)** | **-0.12 (-0.19, -0.05)** | +0.03 (-0.02, 0.09) |
| Fasting insulin, pmol/L (90) | -0.5 (-2.0, 1.1) | **+1.2 (0.6, 1.8)** | **-1.1 (-1.7, -0.5)** |
| C-peptide, nmol/L (7) | **-0.07 (-0.14, -0.01)** | -0.01 (-0.03, 0.01) | +0.03 (0.00, 0.05) |
| HOMA-IR, % (30) | **-4.1 (-6.4, -1.6)** | **-3.1 (-5.8, -0.4)** | +0.7 (-1.6, 3.1) |
| Insulin sensitivity (ISI, IV) (13) | 0.24 (-0.13, 0.61) ns | 0.08 (-0.01, 0.17) ns | -0.10 (-0.21, 0.02) ns |
| Insulin secretion (AIR, IV) (10) | **+0.51 (0.20, 0.82)** | -0.01 (-0.08, 0.06) ns | -0.02 (-0.11, 0.07) ns |

Three readings, in decreasing cleanliness:

- **SFA -> PUFA is the consistently favourable swap on markers** — lower fasting glucose, HbA1c,
  C-peptide, HOMA-IR, and (uniquely) improved **insulin secretion capacity** (AIR, the IV gold-standard).
  This mirrors the page's replacement hierarchy on the marker channel — PUFA first — but **fasting
  insulin does not follow the pattern** (SFA->PUFA null at -0.5; SFA->MUFA *raises* it +1.2), so the
  PUFA signal is on glucose/HbA1c/HOMA/C-peptide/secretion, not on every insulin metric. `2h`
  post-challenge glucose/insulin and ISI show no significant macronutrient effect at all.
- **SFA and carbohydrate are comparably NEUTRAL on glycaemia.** «exchanging dietary carbohydrate with
  saturated fat does not appre- ciably influence markers of blood glucose control»
  [@imamura2016fats] — CHO->SFA is
  null on glucose, HbA1c, HOMA (only fasting insulin lower, C-peptide borderline higher). Imamura reads
  this as «consistent with their similar overall associations with both incident diabetes and
  cardiovascular events». That **echoes** Hooper's RCT subgroup null (PUFA vs carbohydrate
  indistinguishable on hard events, above) on a second endpoint — an F-consistency, not independent
  corroboration (same-lab, shared with the events literature it cites).
  [@imamura2016fats]
- **The upshot is a substitution rule, not an avoidance rule** — «Sole emphasis on lowering consumption
  of carbohydrates or saturated fats would not be optimal»; the marker benefit comes from *adding
  unsaturated fat in place of* SFA or carbohydrate, matching this page's standing *the substitution sets
  the sign*. [@imamura2016fats]

**F-refinement — a third leg under PUFA's over-determination.** The page already holds that PUFA's
stronger recommendation is over-determined (largest LDL effect + firmer events evidence). Imamura adds a
metabolic-marker leg that **distinguishes PUFA from MUFA where lipids do not**: MUFA and PUFA lower
HbA1c and HOMA-IR similarly, but only **PUFA** improves insulin-secretion capacity (AIR significant for
SFA->PUFA and MUFA->PUFA, null for SFA->MUFA). The authors read this as partly explaining the PUFA>MUFA
gap on hard events: «the present investigation may partly elucidate why PUFA might have greater overall
cardiovascular benefits, given its additional benefits on fasting glucose and insulin secretion
capacity». [@imamura2016fats] The benefit tracks **omega-6 / total PUFA, not omega-3 alone** (PUFA here is «predominantly
linoleic acid») -> [[Linoleic Acid and Cardiovascular Disease]].
[inferred from @imamura2016fats; @who2023saturated]

**Surrogate discipline (binding).** Every figure here is a **surrogate marker** (glucose, HbA1c, insulin,
C-peptide, HOMA-IR, ISI, AIR), not a patient-important outcome. This MA measures **no** diabetes or CVD
incidence. Its single surrogate->outcome transmission is a **projection**: «for each 5% energy of
increased MUFA or PUFA, HbA1c improved by approximately 0.1%... a 0.1% reduction would be estimated to
reduce the incidence of type 2 diabetes by 22.0% (95% CI = 15.9, 28.4%) and cardiovascular dis- eases by
6.8% (1.3, 13.0%)» — but that reduction is **borrowed from external references, not observed here**.
[@imamura2016fats] So
these rows carry the **same shape as the LDL rows above** — high-quality certainty on the *marker*, with
the *outcome* transmission left as an evidenced-elsewhere (here, only projected) claim
-> [[Surrogate Outcomes]], [[Insulin Resistance Surrogates and Cardiovascular Risk]]. Do not read the
HbA1c/HOMA improvements as a demonstrated diabetes-prevention effect of the swap.
[inferred from @imamura2016fats]

**Studied range and limits.** Effects are per **5%E** exchange over the trials' composition ranges (median
SFA 9.2%E, PUFA 6.4%E, MUFA 13.6%E, carbohydrate 47.2%E); **median feeding duration 28 days** (range
3-168), which limits HbA1c inference (a \~3-month integral) and says nothing about habitual-diet or
long-latency effects. Carbohydrate here is **refined starch/sugar** — the authors bar extrapolation to
carbohydrate in fruit, legumes, or minimally processed whole grains. A **blinding artifact** appears:
MUFA-for-carbohydrate lowered fasting glucose in participant-blinded trials but *raised* it in unblinded
ones (p-het <0.001) — a caution for the whole food-trial base. The stronger MUFA/PUFA glucose-lowering
among older adults and prevalent diabetes is exploratory (route-b hypothesis, FDR-corrected), not a
warrant to stratify.

**NOT `[E-independent]`.** Imamura is the **Tufts / Mozaffarian lab** (Micha, Mozaffarian, de Oliveira
Otto), and its endpoint is a *different channel* (markers) rather than a second independent route to the
page's events/lipids claims — so its agreement with the held sources is **F/A-C (new endpoint +
refinement), never E**. `confidence:` stays **medium**: the marker evidence is strong on surrogates, but
the page's central claim is about patient-important outcomes, where certainty is unchanged.

<div class="recent-update" data-last-updated="2026-09-02"></div>

## Liver fat — a further surrogate endpoint where UFA beats SFA `[2026-09-02, Winters-van Eekelen]`

A gold SR-MA of isocaloric RCTs adds *liver fat content* as another surrogate on which unsaturated fat
outperforms saturated fat: swapping SFA for UFA reduced imaged liver fat by SMD -0.80 (95% CI -1.09;
-0.51) across 4 comparisons — a *large* effect on that endpoint (0.2/0.5/0.8 = small/medium/large; negative
favours UFA). [@winterseekelen2020]

**NOT `[E-independent]`, same as Imamura.** The endpoint (liver fat) is a surrogate, and the route is not
independent of this page's base — the MA leans on the same de-novo-lipogenesis mechanism and cites the
Imamura glucose-insulin feeding-trial MA already held here — so its agreement is a **new-endpoint
refinement (F), not a second independent route (E)**. It corroborates the *direction* (SFA worse than UFA)
across one more surrogate; it does not raise certainty on the page's patient-important-outcome claim. Full
appraisal, the isocaloric-composition context, and the fat/carb and carb->protein swaps live on
[[Fatty Liver MASLD and Weight Loss]].
[inferred from @winterseekelen2020]

## Corrections and revision history (dated strata)

*Dated corrections, retracted framings, and audit strata are preserved below in their original form; the current claims above already incorporate them.*

> **CORRECTION (2026-07-25, blind cold-audit).** This section first claimed the replacements were
> *near-equivalent on the surrogate* and that PUFA's advantage rested on hard-outcome evidence
> alone. WHO's explicit LDL ranking falsifies that. Recorded rather than silently amended: the
> original claim was an inference drawn from certainty labels without checking the magnitudes
> underneath them.



<div class="recent-update" data-last-updated="2026-08-27"></div>

## Willett (2012) — a DISTINCTION, not a tension (filed then retracted, 2026-07-25)

A tension page was minted claiming WHO and Willett clash on whether LDL licenses the
SFA-to-carbohydrate recommendation. **A blind audit found the framing false and it was retracted the
same day.** What survives is a distinction plus two durable decision rules.

**They report the same answer -- and it is NOT independent confirmation (corrected 2026-07-26).**
The figures below were previously presented here as WHO and Willett independently converging, under
the heading **where they AGREE, which is the decisive fact.** That framing was wrong and is retracted.
Willett attributes his numbers to **"a pooled analysis of original data (Jakobsen et al., 2009)"**
[@willett].

**But the correction over-shot, and the denial of independence does not hold either.** WHO's
replacement estimates do not come from Jakobsen. Its RCT figure is *"Subgroup analysis of RCTs in the
systematic review by **Hooper** et al."* -- 4 trials, 51 104 participants -- and its observational
replacement evidence is attributed to **Reynolds** et al. Jakobsen 2009 appears in WHO's reference list
(ref 10) cited in the *Background* narrative; **presence in a reference list is not provenance for an
estimate.** So the two numbers placed side by side here are a cohort pooled analysis (Willett/Jakobsen)
and an RCT pooled analysis (WHO/Hooper) -- different designs, different trial sets.

**Which leaves the pairing genuinely unresolved rather than settled either way.** It is not the
laundered-E it was first written as, and not the shared-primary-study it was then corrected to. What
can be said: the estimates are not commensurable enough to bank as independent corroboration, because
nothing here establishes that the cohort and RCT bodies are non-overlapping in their underlying
populations. The decision rules below rest on the evidence itself, not on a witness count.

**What each source reports:** on disease outcomes for the carbohydrate arm both
find essentially nothing. WHO's RCT subgroup analysis "showed a reduction in risk of CVDs and
coronary heart disease when SFA were replaced with polyunsaturated fatty acids (moderate certainty
evidence), **but not when SFA were replaced by carbohydrates**"; its Annex 6 profile for that arm
gives CHD RR 0.93 (0.78-1.11).
[@who2023saturated]
Willett's pooled cohorts give SFA vs carbohydrate RR **0.97** (0.81-1.16), against SFA vs PUFA RR
**1.25** (1.01-1.56). [@willett]
Both rank PUFA first. WHO's carbohydrate recommendation is *conditional* on *low* certainty for
exactly this reason.

**The real difference is a classification one, and WHO states its reason.** WHO grades LDL a
**critical** outcome and the ratios/triglycerides **important**, "noting that the evidence supporting
their use... was less certain." Willett argues the total/HDL ratio is the better predictor and that
**total cholesterol** — not LDL — should not carry the diet-CHD inference; he explicitly holds that
prediction "using serum total cholesterol is less powerful than by using... the LDL and HDL lipid
fractions." [@who2023saturated]

**And WHO engages Willett's mechanism rather than missing it:** it records the Mensink finding of
"a slight increase in triglycerides and a reduction in high-density lipoprotein (HDL) cholesterol
when SFA are replaced by carbohydrates of mixed composition. However, the clinical relevance of such
changes is not clear", citing a 2019 rebuttal that postdates Willett's edition.
[@who2023saturated]

**Two durable rules survive, and they were the real product:**

- **Never accept *replace saturated fat* without the replacement named.** The same pooled data give a
  null against carbohydrate and RR 1.25 against PUFA — the substitution sets the sign.
- **Carbohydrate quality is load-bearing, and both parties say so.** WHO specifies "whole grains and
  foods... having a low glycaemic index"; Willett reports the SFA association is "positive if
  compared with lower GI carbohydrates but null if compared with average or higher GI carbohydrates."
  [@willett]


**Self-critique (PURE weave) `[run 2026-07-29, before commit]`.** *Laundered-E:* PURE is explicitly F
(grounding), NOT `[E-independent]` — it is the cohort base Astrup already cited, stated three times.
*Overclaim:* the contrarian headline (*fats safe, carbs harmful*) is engaged with full data (symmetric
standards — PURE is a large, well-conducted cohort, not dismissed) and then weighted down by the
authors' own twice-conceded residual confounding, not hand-waved; no claim that PURE overturns the RCT
consensus survives. *Parameter table:* built before the prose, «same quantity?» = NO on design, exposure
contrast and confounding structure — the same-quantity failure the rule exists to catch (an observational
level-contrast read as if it were the randomised change). *No new tension filed* — the joined issue
already exists and is not re-adjudicated here. *Counter-passage:* the RCT side is represented at its
strongest (RR 0.83 events, the estimate PURE structurally cannot reach), so the agreement claim rests on
the mortality nulls both sides share, not on suppressing the events signal.

<div class="recent-update" data-last-updated="2026-09-02"></div>

## A guidance family ties trans-fat control to the SFA ceiling — NNR2023 `[2026-08-27, NNR revisit]`

The Nordic Nutrition Recommendations 2023 add a fourth guidance body to the SFA <10 E% consensus and
supply the trans-fat position no source on this page carried (previously only WHO's line was held).
NNR states «Intake of SFA should be less than 10 E% in the general population. The intake of trans
fats should be as low as possible and will be ensured by complying with total SFA intake below 10
E%.» [@nnr2023]

- **SFA 10 E% — a fourth non-independent body, already-owned cell.** NNR's <10 E% ceiling matches
  WHO's and ESC's; it rests on the same qSR/Cochrane base (Hooper, Reynolds) already appraised here,
  so it is guidance-family agreement, **not** independent backing — **no `[E-independent]` tag**, and
  it does not raise `confidence`. Noted only to record the fourth body agreeing.
- **Trans fat — the NEW cell (an ALARA position tied to the SFA target).** NNR frames trans-fat
  control as *as-low-as-possible* (ALARA), operationalized as a **corollary of SFA compliance**
  rather than a separate numeric cap. This is at least as strict as WHO's <1 E% trans-fat limit and
  does not contradict it — but it is a different instrument: WHO sets a numeric ceiling, NNR sets no
  free-standing trans-fat number and treats the SFA ceiling as the enforcement mechanism.
- **Counter-passage check.** NNR sets no trans-fat number of its own to disagree with WHO's <1 E%;
  the two are consistent (not-joined check (i): ALARA and a <1 E% cap predict the same *reduce-toward-
  zero* action). No divergence to file — guidance divergence class 1 (a population-communicability
  choice to fold trans fat into the SFA message), not a substantive disagreement.

<div class="recent-update" data-last-updated="2026-09-02"></div>

## Butter vs plant oils at the FOOD level — Zhang 2025 partly cashes the food-matrix gap, on mortality `[2026-09-02]`

The food-matrix question this page filed as a WHO **research gap** (*compare the health effects of SFA
from different food sources ... taking into consideration the ... replacement*) now has a food-level,
hard-endpoint answer for **butter** (an SFA source) against **plant-based oils** (the SFA-replacement,
as bottled oils). Zhang is a prospective analysis of the **NHS + NHSII + HPFS** cohorts (221,054 adults,
up to 33 y, 50,932 deaths; 12,241 cancer, 11,240 CVD), FFQ every 4 y, cumulative-averaged intake.
[@zhang2025butter]

**The associations (Model 2, multivariable-adjusted):**

| Exposure | Contrast | Total mortality | Cancer mortality | CVD mortality |
|---|---|---|---|---|
| Total butter | level 4 (\~13 g/d) vs level 1 (\~0.1 g/d) | **1.15 (1.08-1.22)** | per 10 g/d **1.12 (1.04-1.20)** | NS |
| Total plant oil | level 4 (\~21-27 g/d) vs level 1 (\~3 g/d) | **0.84 (0.79-0.90)** | per 10 g/d **0.89 (0.85-0.94)** | per 10 g/d **0.94 (0.89-0.99)** |

[@zhang2025butter]

**The beyond-summary move is the isocaloric SUBSTITUTION model** — the food-level analogue of WHO's
nutrient-level SFA->PUFA swap, scored on **mortality** rather than events/lipids. Replacing **10 g/d of
butter with 10 g/d of total plant oil** was associated with total mortality **HR 0.83 (0.79-0.86)**,
cancer mortality **0.83 (0.76-0.90)**, and CVD mortality **0.94 (0.86-1.03, NS, P=.17)**. By specific
oil (total mortality): butter->olive **0.81 (0.77-0.84)**, butter->soybean **0.85 (0.80-0.91)**,
butter->plant-oil-minus-olive **0.83 (0.79-0.88)**.
[@zhang2025butter]

**Specific-oil resolution (per 5 g/d, total mortality):** canola **0.85 (0.78-0.92)**, olive
**0.92 (0.91-0.94)**, soybean **0.94 (0.91-0.96)** each inverse; **corn and safflower NULL** (Model 2).
A **culinary-use split** cuts within butter: butter added to food/bread per 5 g/d **1.04 (1.02-1.05)**,
but butter for baking/frying **NS** — which Zhang attributes to smaller quantities and higher
misclassification (butter left in the pan), not to safety.
[@zhang2025butter]

**Parameter table — why Zhang FILLS a gap rather than corroborating WHO.**

| Parameter | WHO 2023 (this page) | Zhang 2025 | Same quantity? |
|---|---|---|---|
| Exposure grain | **nutrient** (%E SFA; PUFA/MUFA) | **food** (butter; bottled oils) | **NO — food vs nutrient** |
| Contrast | reduce/replace SFA, within-RCT | high-vs-low intake + modelled isocaloric swap | **NO — change vs level/model** |
| Endpoint carrying it | CVD **events** (RR 0.83), LDL | total + cause-specific **mortality** | **NO — events/lipid vs mortality** |
| Design | 15-RCT pool (Hooper) | 3-cohort observational, FFQ | **NO — randomised vs observational** |

Every cell is NO — so Zhang is **not** independent corroboration of the SFA->PUFA events benefit; it
answers a **different, food-level question** WHO explicitly declined («considering the effects of
specific foods or classes of foods is beyond the scope of this guideline», quoted in *The food matrix*
above) and filed as a research gap. Zhang cashes that gap on the mortality endpoint, for the one
SFA-source pair butter-vs-oils.
[inferred from @zhang2025butter; @who2023saturated]

**NOT `[E-independent]` — shared cohort, instrument, and school.** Zhang runs on the SAME
NHS/NHSII/HPFS cohorts and the SAME Willett FFQ as much of this page's Harvard evidence (Willett; the
linoleic pool on [[Linoleic Acid and Cardiovascular Disease]]), and shares authors (Willett, Stampfer,
Rimm, Hu, Guasch-Ferré, Yanping Li). Its agreement with the held PUFA / plant-oil-benefit direction is
**volume, not independence** — one observational body of evidence re-cut to a food-level mortality
endpoint, not a second route. Confidence is unmoved (below).
[inferred from @zhang2025butter]

**Symmetric standards — appraised as skeptically as a plant-oil-HARM finding would be.** This runs
*with* the currently-fashionable anti-seed-oil-fear direction, so the observational discounts are named,
not waved:

- **Healthy-user gradient toward oils.** Higher-butter participants had higher BMI, more current
  smoking, less physical activity and less multivitamin use; higher-oil participants were more
  physically active — so residual confounding runs *toward* the oil-benefit / butter-harm result. Zhang
  adjusts for BMI, smoking, PA, AHEI, alcohol and mutually for butter<->oil, but concedes «despite
  adjustment for many confounding variables, residual confounding may still exist».
- **Self-reported FFQ** — dietary measurement error, the binding constraint
  -> [[Measurement Error in Dietary Assessment]] (dampened, not removed, by cumulative averaging).
- **The substitution is a statistical MODEL, not a feeding trial** — the swap HR is a
  difference-in-coefficients under a constant-energy constraint, so the modelled mortality reduction is
  **associational**, not a demonstrated causal effect of changing the fat.
- One strength on the confounder it most feared: refined-grain sensitivity analyses (white bread,
  glycemic load) left the butter-to-bread signal intact — «these findings suggest that the observed
  differential associations are unlikely attributable to residual confounding from incomplete adjustment
  for refined grain intake».
- Generalizability: «predominantly White ... health care professionals», which «may limit the
  generalizability of the findings but also help minimize potential socioeconomic confounding».

[@zhang2025butter]

**Decision-relevance.** Zhang supplies the food-level, patient-important-endpoint version of *the
substitution sets the sign*: at the food level the modelled lever is **replacing butter with a bottled
plant oil (olive / canola / soybean)**, with a concrete translation — «replacing 3 small pats of butter
(approximately 15 g) with 1 tablespoon of plant-based oil (approximately 15 g)». It does **not** license
*avoid butter* as an isolated act (the comparator carries the effect), the CVD-mortality arm of the swap
is **null**, and the whole finding is observational — the signal sits on **total and cancer** mortality,
one evidence tier below the SFA->PUFA events RCTs above.
[inferred from @zhang2025butter]

## References

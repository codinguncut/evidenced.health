---
type: framework
question: Does a Mediterranean dietary PATTERN reduce hard cardiovascular events — in whom, by how much, and on which outcomes?
aliases: [Mediterranean Diet, PREDIMED, MedDiet Cardiovascular, Dietary Pattern CVD, Whole Diet Pattern RCT, Olive Oil and Heart Disease, Does Olive Oil Reduce CHD, Extra Virgin Olive Oil, Olive Oil Cardiovascular]
authors: [Estruch, Ramon; Ros, Emilio; Martinez-Gonzalez, Miguel A; Hernan, Miguel A; Ge, Long; Dinu, Monica; Sofi, Francesco; Aune, Dagfinn; Rees, Karen; Stranges, Saverio]
sources: [Estruch - PREDIMED Mediterranean Diet 2018, Ge - Named Diets Weight Cardiovascular Network MA 2020, Garcia-Casares - Mediterranean Diet Alzheimer 2021, Dinu - Mediterranean Diet Umbrella Review 2018, Molendijk - Diet Quality Depression Dose-Response Meta-Analysis 2017, Aune - Nut Consumption Mortality 2016, Aune - Fruit Vegetable Mortality 2017, Rees - Mediterranean Diet CVD Prevention Cochrane 2019]
cluster: dietary-patterns
nucleus: true
confidence: medium
relationships:
  related_to:
    - Does Weight Loss Reduce Cardiovascular Events
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
    - Saturated Fat Intake and Replacement
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
    - Dementia Prevention and Modifiable Risk Factors
created: 2026-07-29
updated: 2026-10-06
self_critiqued: 2026-10-06
---

**The wiki's first whole-dietary-PATTERN RCT with hard endpoints.** Everything else in the
cardiometabolic cluster is a single nutrient (SFA, sugar, sodium) or a weight-loss trial; PREDIMED
(Estruch 2018) tests a *pattern* — Mediterranean diet vs a low-fat control — against *events*, not a
surrogate. It is the source that lets the fabric say something about patterns-vs-nutrients, and its
result is genuinely informative in both directions.


[@estruch2018]
## The headline: a pattern cut CV events \~30%, at high baseline risk — but read the components

In 7447 high-CV-risk adults with no CVD at baseline (Spain, median 4.8 yr), a Mediterranean diet
supplemented with extra-virgin olive oil or nuts, vs advice to reduce fat, cut the primary composite
(MI + stroke + CV death):

- **Combined MedDiet primary composite HR 0.70 (0.55-0.89)** — «a relative difference of 30% and an
  absolute difference of 1.7 to 2.1 percentage points» over 5 yr (5-yr absolute risk 3.8% vs 5.7%).
  [@estruch2018]
- **The composite is carried by STROKE — HR 0.58 (0.42-0.82).** MI (0.80) and CV death (0.80) are
  individually **non-significant**, and **all-cause mortality is NULL — 0.98 (0.77-1.24).** So the
  honest claim is *the pattern reduced (mostly) stroke events in high-risk primary prevention over \~5
  years*; it did not measurably move total mortality in that window. The trial was underpowered for the
  components (lower-than-expected event rates).
- **Adherence mattered:** the per-protocol (adherence-adjusted) primary HR was 0.42 (0.24-0.63).

**A second design singles out the same pattern (corroboration on a different outcome, F).** In Ge's
121-RCT network meta-analysis of 14 named diets, weight and cardiovascular risk-factor gains decay by 12
months for every diet «except for the Mediterranean diet», and Mediterranean is «the most effective» for
LDL reduction at moderate certainty -> [[Named Diet Programs Compared]] [@ge2020]. Keep the outcomes distinct: Ge measures the **LDL
surrogate** over <=12 months, PREDIMED measures **hard events** over \~5 years — so this is not a second
witness to the *event* finding, but two unrelated designs both flagging Mediterranean as the pattern with
something durable. (Ge enters as an F-refinement — a different design flagging the same pattern — and is a
listed source.)

## Why this matters at the pattern level — three decision-relevant reads

1. **The pattern worked WITHOUT weight loss or exercise.** The cited chunk states «No total calorie
   restriction was advised, nor was physical activity promoted» and that the trial «found little
   difference in changes in physical activity» between groups; a minimal between-group *weight* change is
   inferred from this energy-unrestricted design (the chunk reports no between-group weight-change result
   — the fact is not extracted, corrected 2026-08-08). So a *composition* change — not
   calorie restriction, not weight loss — moved events. This is the striking complement to
   [[Does Weight Loss Reduce Cardiovascular Events]]: lifestyle **weight loss** did not cut CV events
   (Look AHEAD null; the 54-RCT meta-analysis null on events), yet a dietary **pattern** did. The lever
   for CV events here is *what you eat*, not *how much you weigh*. [inferred from @estruch2018]
2. **High baseline risk is why the absolute benefit is real.** These were high-risk adults (\~49% T2D,
   \~82% hypertensive); absolute benefit scales with baseline risk
   ([[Baseline Risk and the Relative-Absolute Split]]). Author-stated: «whether the results can be
   generalized to persons at lower risk requires further research.» So this REFINES
   [[Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People]] rather than overturning it
   — a pattern intervention buys hard-outcome benefit *where baseline risk is high*; it says nothing
   about the low-risk person, where the ceiling argument still binds.
3. **The contrast was a small pattern shift, not diet-vs-junk.** Most participants ate near-Mediterranean
   at baseline and the control got healthy-diet advice; the largest between-group differences were in
   **fat subtypes** (the supplied EVOO and nuts) plus more fish and legumes. That the 30% came from a
   *modest* shift over a diet already close to the studied patterns cuts both ways — impressive per unit change, but not a
   licence to expect the same from adding EVOO to a poor diet.

## The fat-quality channel — corroborates the SFA replacement story on HARD outcomes

The intervention's active contrast was largely a shift toward **unsaturated fat** (EVOO, nuts) — the
same replacement [[Saturated Fat Intake and Replacement]] argues for on LDL/apoB and events. PREDIMED
adds the whole-pattern, hard-outcome version of that channel: a mono/polyunsaturated-rich pattern cut
events. `[E-independent]` is NOT claimed — the mechanism overlaps the SFA-replacement channel rather
than arriving from a separate route, so this is refinement/consistency, not independent backing.

- **The nut component the RCT cannot isolate — an observational decomposition leg `[2026-08-13, Aune]`.**
  PREDIMED's «reduced risk ... in subjects randomized to a Mediterranean diet with nuts» cannot say
  «whether ... due to the Mediterranean diet component, nuts, or a combination of the two»
  [@aune2016nut]. Aune 2016's nut-specific dose-response MA
  (per 28 g/day: CVD 0.79, all-cause mortality 0.78) is the observational *component* estimate PREDIMED
  cannot supply — but it is confounded-by-healthy-user and un-adjudicated (no MR), so it narrows the
  decomposition gap rather than closing it -> [[Nut Consumption and Mortality]]. Type-F/gap, not
  independent-E (the RCT and the cohort MA are not independent routes to one claim).



## Is olive oil's benefit separable from the pattern? (the isolated-food CHD claim, WS-022)

*Olive oil reduces heart disease* is among the most-repeated single-food claims, but no held source
isolates the oil from either the pattern that carries it or the fat it displaces. Three legs, three
grains of exposure, and not one is a clean olive-oil -> CHD causal estimate:

| Leg | What is actually contrasted | Endpoint | Design / certainty | Isolates olive oil? |
|---|---|---|---|---|
| Whole pattern (PREDIMED, this page) | MedDiet+EVOO vs low-fat advice | hard CV events, HR 0.70 | RCT (propensity-repaired) | **NO — EVOO confounded with the whole pattern** |
| Nutrient swap (WHO, [[Saturated Fat Intake and Replacement]]) | SFA -> plant-MUFA | CVD events | RCT = 1 trial, 52 people, RR 3.00 (very low); the *moderate* grade is observational-only (RR 0.90) | **NO — a nutrient swap, and the lone RCT is a tiny null** |
| Food swap (Zhang 2025, [[Saturated Fat Intake and Replacement]]) | butter -> olive oil | mortality | observational NHS/HPFS, model-based: total 0.81, but the swap's **CVD-mortality arm is null** (0.94, NS) | **NO — observational, modelled, CVD arm null** |

**The emergent read (type-A).** Every leg that shows a benefit either cannot separate olive oil from the
pattern (PREDIMED) or from the comparator it displaces (WHO and Zhang — *the substitution sets the sign*,
not the oil). Where an olive-oil-specific number does exist (Zhang), it is observational and modelled, and
on the CHD-relevant endpoint it is **null** — the signal that survives sits on *total and cancer*
mortality, not CVD. So *olive oil reduces CHD* is a **pattern-and-substitution claim wearing a single-food
label** -> [[Is the Food Category Doing Any Work]], [[What a Diet Removes vs What It Adds]].

**Decision consequence.** Olive oil earns its place two ways the evidence supports: as a good fat to
**replace butter/SFA with** (the swap carries it), and as a **component of the Mediterranean pattern** that
as a whole cut events. What the evidence does not support is olive oil as a standalone CHD-lowering act
poured onto an otherwise-poor diet — the same EVOO-to-a-poor-diet over-read flagged above.

**Gap (type-G).** No trial isolates olive oil against a matched non-olive comparator on CHD; the only
olive-oil RCT evidence is PREDIMED's whole-pattern arm and WHO's single 52-person trial. An
isolated-olive-oil hard-CHD RCT is the missing evidence, and is unlikely ever to be run.



## The provenance caveat travels with the estimate (symmetric standards)

PREDIMED's 2013 report was **withdrawn** (Carlisle 2017 flagged non-random baseline distributions);
the 2018 re-analysis found real irregularities — 425 household members assigned without randomization,
one site assigned by clinic, inconsistent tables at another — and re-estimated with propensity scores
over 30 covariates, «methods that do not rely exclusively on the assumption that all the participants
had been randomly assigned». Results held across sensitivity analyses (excluding the 1588 deviating
participants — Sites D+B + second household members, n=5859: combined HR 0.69 (0.53-0.92)). **Internal
validity is therefore RCT-with-propensity-repair, not a
clean randomized contrast** — a real, quantified discount that a favourable result does not earn
exemption from. Held here as a `medium`-confidence finding for that reason.


[@estruch2018]
## Parameter table — the pattern-vs-weight-loss contrast (BLOCKING cross-source check)

| Parameter | PREDIMED (this) | Look AHEAD / Ma ([[Does Weight Loss Reduce Cardiovascular Events]]) | Same quantity? |
|---|---|---|---|
| Intervention | MedDiet pattern (EVOO/nuts), energy-unrestricted | Intensive lifestyle for **weight loss** (calorie deficit + PA) | **No — different lever** (composition vs energy/weight) |
| Population | High-risk primary prevention (no CVD; \~49% T2D) | Look AHEAD: **established T2D**; Ma: obese adults | Overlapping, not identical |
| Primary outcome | MI + stroke + CV death | CV composite (similar) | Yes (CV event composite) |
| Result on CV events | HR **0.70** (0.55-0.89) | **Null** (Look AHEAD \~0.95; Ma null on events) | Comparable outcome, opposite result |
| Weight change | Minimal (energy-unrestricted) | Substantial (the intervention's target) | — |

**Defensible claim from the table:** for CV *events*, the dietary-**pattern/composition** channel and
the **weight-loss** channel are distinct, and here the pattern channel delivered where weight loss did
not — *with the caveat that the populations and comparators differ*, so this is a reasoned cross-trial
contrast (type-A synthesis), not a head-to-head.



## The same pattern and dementia — a second outcome, but observational and probably via the vascular channel

The Mediterranean pattern also carries a **dementia/cognition** signal, but on much weaker evidence than
its CV-event RCT here. A dose-response MA (Garcia-Casares 2021, 11 studies / 12,458 participants, **all
observational**) finds per one-point rise on the 0-9 MD score: **AD RR 0.89 (0.84-0.93)**, **MCI RR 0.91
(0.85-0.97)** [@garciacasares2021], cohort-only 0.91
(0.88-0.94) [@garciacasares2021]. Two things keep this from reading as a second hard-outcome win for the pattern:

- **No RCT leg** (PREDIMED tested CV events, not dementia incidence; the randomized cognition evidence is
  the multicomponent FINGER family, small/null on incidence). The design caveat the authors state is that
  most included studies are «most of them cross-sectional ones, which limit to infer causality» (a
  *design* limit — the authors name no confounding mechanism; healthy-user + reverse-causation is the
  wiki's gloss of why cross-sectional design here fails causality, corrected 2026-08-08).
  [@garciacasares2021]
- **The vascular route is ONE proposed channel, not the source's frame (corrected 2026-08-08).** The MA
  proposes the pattern's protective effect «could contribute directly to reduce AD risk (by its
  neuroprotective effects) as well as indirectly (being protective factors of cardiovascular and metabolic
  diseases, which are themselves risk factors for AD)»
  [@garciacasares2021], and its discussion proposes «four different pathways» — metabolic/glucose,
  vascular, oxidative-stress, anti-inflammatory — vascular being one of the four. [@garciacasares2021]
  So PREDIMED's demonstrated vascular (stroke-driven) effect is a *plausible mediator* — part of the
  cognition signal may run through the same channel as the CV benefit — but the source explicitly proposes
  a **direct neuroprotective route too**, so the cognition benefit may be partly *additional* rather than
  fully carried by the vascular channel. Full appraisal + the double-counting caveat:
  [[Dementia Prevention and Modifiable Risk Factors]].

[@dinu2018]
<div class="recent-update" data-last-updated="2026-10-06">

## The breadth context — an umbrella review bounds the single trial (F, not independent E)

PREDIMED is one landmark RCT. Dinu's 2018 umbrella review (13 meta-analyses of observational studies +
16 of RCTs, 37 outcomes, >12.8M subjects) maps the credibility of the *whole* Med-diet evidence base and
grades each association on the Ioannidis 5-tier scheme (convincing / highly-suggestive / suggestive /
weak / no-evidence). [@dinu2018] It
**refines and bounds** this page rather than corroborating it independently:
Dinu's RCT leg pools the Med-diet CV-outcome trials (Liyanage 2016, Grosso 2015, Martinez-Gonzalez 2014
are its CVD RCT meta-analyses), a pool PREDIMED dominates — so it is NOT a second independent witness
and `[E-independent]` is explicitly NOT claimed. [inferred from @dinu2018; @estruch2018]

- **The convincing hard-endpoint story is OBSERVATIONAL.** Twelve outcomes reach
  «convincing/highly suggestive categories for 12 different health outcomes» — including overall
  mortality, CVD, CHD, MI and diabetes — but for the five graded by *both* designs, «the latter showing
  no evidence (except for diabetes)». So the strong Med-diet -> hard-CV-outcome evidence rests on cohort
  studies; **pooled Med-diet RCTs do not confirm mortality / CVD / CHD.** [@dinu2018]
- **This is CONSISTENT with PREDIMED's own read, not in tension with it.** PREDIMED's composite was
  stroke-driven with a **null all-cause mortality HR 0.98** and individually non-significant MI/CV-death;
  Dinu's pooled-RCT nulls on mortality/CHD say the same thing at the meta-level. The honest composite
  claim (a pattern reduced mostly stroke events in high-risk primary prevention) is exactly what survives
  the umbrella. [inferred from @dinu2018; @estruch2018]
- **Diabetes is the metabolic outcome present in BOTH designs** — highly-suggestive observational
  (RR 0.83) AND a weak RCT signal (RR 0.70). Dinu names diabetes the umbrella's most robust metabolic
  outcome, contrasted against a *weaker* metabolic-syndrome signal. But read the RCT leg with two
  caveats (corrected 2026-08-08): it is a **single trial** — Dinu discloses «Two meta-analyses of only
  1 RCT included heart failure and diabetes» — so «robust across designs» overstates a k=1 RCT leg; and
  that lone Med-diet diabetes RCT (n\~3,541) is plausibly a PREDIMED-family substudy, so the cross-design
  agreement may partly re-count the same trial family rather than being an independent RCT witness
  (uncheckable from the held chunk).
  [@dinu2018]
  *(2026-10-06)* Rees's Cochrane review reports a PREDIMED T2D-incidence analysis on **n=3541**, HR 0.71
  (0.52-0.96) [@rees2019medcochrane],
  matching the size of Dinu's lone diabetes RCT. That makes the PREDIMED-substudy reading very likely,
  so the cross-design diabetes agreement re-counts PREDIMED rather than adding an independent RCT.

### Parameter table — PREDIMED vs the umbrella's pooled RCT grade (BLOCKING cross-source check)

| Parameter | PREDIMED (Estruch 2018) | Dinu pooled RCT MAs | Same quantity? |
|---|---|---|---|
| All-cause mortality | HR **0.98** (0.77-1.24), null | RR **0.93** (0.65-1.33), *No evidence* (Liyanage, 3 RCTs) | **Yes** — both null; PREDIMED is IN the pool |
| CV events | composite **0.70** (0.55-0.89), stroke-driven | CVD mortality *No evidence* (Liyanage) / *Weak* (Grosso, M-Gonzalez) | Related, not identical (single composite vs pooled mortality) |
| Diabetes | not a primary endpoint | RR **0.70** (0.54-0.91), *Weak* | Different comparator — umbrella only *(2026-10-06: very likely the same trial — a PREDIMED T2D substudy, n=3541, HR 0.71 in Rees; in-pool)* |

**Defensible claim:** the umbrella *bounds* PREDIMED (its pooled RCT evidence is weak/null on hard
endpoints except diabetes) and *agrees* with PREDIMED's own mortality-null; because PREDIMED is inside
the pool, this is refinement (F), not independent corroboration.


### The LDL refinement — a DIFFERENTIAL null vs active controls, not an absolute one (the two sources JOINED, corrected 2026-08-08)
Two of this page's own sources give apparently clashing LDL verdicts, and they must be JOINED before
either is used:

- **Dinu:** across 3 RCT meta-analyses «no association was reported for LDL-cholesterol levels» — but
  explicitly «when compared to control diets» (total cholesterol lowered and HDL raised in the *same*
  comparison). [@dinu2018]
- **Ge:** among moderate-certainty diets vs *usual diet*, «the Mediterranean diet proved the most
  effective popular named diet for LDL cholesterol reduction» and was the *only* named diet with «a
  statistically significant difference compared with usual diet in LDL cholesterol reduction».
  [@ge2020]

**Joined (not-joined check (ii) — different comparator):** the two are consistent once the comparator is
matched. Ge's benefit is Med **vs an unimproved usual diet**; Dinu's null is Med **vs active
control/low-fat diets** that themselves lower LDL — so Dinu reports *no DIFFERENTIAL* LDL advantage over
an already-LDL-lowering comparator, **not** that the Med pattern fails to move LDL in absolute terms.
 So do NOT read this as "the whole pattern moves events without moving LDL" (corrected
2026-08-08 — that over-read Dinu's differential null into an absolute one): against a usual diet the
pattern *does* lower LDL (Ge), while against an active low-fat control it buys no *extra* LDL reduction
(Dinu). What the pair genuinely refines against [[Saturated Fat Intake and Replacement]] (a
single-nutrient LDL/apoB argument) is that the *whole-pattern* event benefit is **not attributable to an
LDL advantage over an active comparator** — a surrogate caveat for [[Surrogate Outcomes]], since Dinu's
other markers (total cholesterol lowered, HDL raised) also moved while triglycerides, HDL and BP were
among outcomes with «disagreements in terms of the significance of the effect» across its
meta-analyses. Which marker *mediates* the event benefit is not established — Dinu runs no mediation
analysis (corrected 2026-08-08). [@dinu2018]
*(Superseded in part 2026-10-06:)* Rees 2019 adds an active-diet comparison absent from Rees 2013 and
finds LDL -0.15 mmol/L (-0.27 to -0.02, MODERATE), close in size to the Nordmann 2011 null-crossing
-0.09 vs low-fat diets that Dinu holds; the Rees 2013 lineage (vs no/minimal intervention) remains
null. So "no *extra* LDL reduction" against an active control now reads "possibly a small one,
measured more precisely"; see *Risk factors split by comparator* below.
[@rees2019medcochrane] Also *(dated note
2026-10-06)*: the join above is only partly right about Dinu's comparators — Dinu's LDL null is a
mixed-comparator pool (Nordmann 2011 vs low-fat diets; Rees 2013 vs no/minimal intervention, per
Rees 2019's statement that the update «broadened out the scope» to add another-diet comparators), so
"vs active control/low-fat diets" describes only one of its legs (Huo 2014's comparator is not
characterized here). [@rees2019medcochrane]
**Join restated for a mixed-comparator Dinu pool (Weave 2026-10-06).** The comparator explanation above
covers only one of Dinu's legs. Dinu's LDL null pools three meta-analyses, and each now has its own
reading (Rees numbers from the parameter table in *Risk factors split by comparator* below):

- **Vs low-fat / another diet (Nordmann; now also Rees C2):** the join holds. This is a differential
  comparison against a comparator that itself lowers LDL. Rees now puts a possible small advantage on it,
  -0.15 (-0.27 to -0.02) mmol/L at moderate certainty, against Nordmann's -0.09 (-0.19 to 0.02).
- **Vs no/minimal intervention (Rees 2013):** the comparator is close to Ge's usual diet, so the
  comparator argument does not explain this null. Imprecision does: Dinu's Rees 2013 leg is 6 trials,
  about 3,200 people, -0.07 (-0.18 to 0.03), an interval that does not exclude a reduction of about
  0.18 mmol/L. The 2019 update's C1 contrast is smaller and very low certainty, -0.08 (-0.26 to 0.09) in
  4 RCTs and 389 people over 3-6 months. So this leg neither confirms nor contradicts Ge. Ge's usual-diet
  magnitude is not held here, so the two cannot be compared numerically.
- **Huo 2014:** comparator not characterized here, so this leg cannot be read either way.

Net: Ge's finding (the pattern lowers LDL vs usual diet, moderate certainty) is the only moderate-certainty
held estimate for that comparator. Dinu's pooled null is weak evidence against it at most: one leg is a
differential contrast, one is imprecise, and one is uncharacterized. Both Ge and the Rees contrasts are
surrogate results over months to a few years (Ge six months; Rees C1 3-6 months; C2 3 months to 4.8
years). No tension: not-joined check (ii) fires for the low-fat leg (different
comparator), and the minimal-intervention leg is too imprecise to clash.
[@rees2019medcochrane]
[@dinu2018]
[@ge2020]

### The adherence-measurement caveat
The umbrella flags «22 77 indexes quantifying the compliance to the Mediterranean diet have been
described» (the `77` is an OCR line-number; the count is 22) — the definitional heterogeneity that makes
pooled Med-diet estimates noisy and partly explains the weak RCT signal.
[@dinu2018] -> [[Is the Food Category Doing Any Work]],
[[Measurement Error in Dietary Assessment]].

[@rees2019medcochrane]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Per-outcome certainty — the Cochrane review grades each PREDIMED endpoint (F) `[2026-10-06]`

Rees's Cochrane review (30 RCTs, 12,461 randomised, search to Sept 2018)
puts a **GRADE certainty and an absolute risk per 1000 on each PREDIMED endpoint**. Its primary-prevention
clinical-endpoint evidence *is* PREDIMED — «Only one trial reported clinical endpoints for primary
prevention and this study experienced methodological issues regarding randomisation with the report
subsequently being retracted and re-analysed (PREDIMED)» — so it refines the trial (type F) and is never
a second witness to it. [@rees2019medcochrane]

| Outcome (PREDIMED vs low-fat diet, 4.8 yr) | Per 1000, control -> MedDiet | HR (95% CI) | GRADE |
|---|---|---|---|
| Stroke | 24 -> 14 (11-19) | 0.60 (0.45-0.80) | **MODERATE** |
| Peripheral arterial disease | 18 -> 8 | 0.42 (0.28-0.61) | MODERATE, but from un-re-analysed earlier reports |
| Myocardial infarction | 16 -> 12 | 0.79 (0.57-1.10) | LOW |
| CVD mortality | 12 -> 10 | 0.81 (0.50-1.32) | LOW |
| Total mortality | 47 -> 47 | 1.00 (0.81-1.24) | LOW |

[@rees2019medcochrane] The PAD caveat is
the review's own: «these data are less certain as they were not re-analysed in the recent paper (Estruch
2018), but come from earlier reports of the trial.» [@rees2019medcochrane]

- **The decision-relevant read: about 10 fewer strokes per 1000 over \~5 years, at moderate certainty, in
  a high-risk population; no measurable change in deaths.** The composite (HR 0.70, 0.58-0.85, Analysis
  2.1) is reported but is not a Summary-of-findings row, so it carries no GRADE rating; the per-outcome
  grades are the certainty statement to use. from the SoF 2 rows above.
- **PREDIMED-derived T2D incidence: HR 0.71 (0.52-0.96), n=3541**, from a pre-re-analysis report; a later
  correction «shows very similar estimates to the original analysis». [@rees2019medcochrane] Not GRADE-rated in the SoF table.

### Parameter table — Rees's pooled re-estimate vs Estruch's trial report (BLOCKING cross-source check)

| Parameter | Estruch 2018 (this page) | Rees 2019 | Same quantity? |
|---|---|---|---|
| Trial / population | PREDIMED, 7447, high-risk primary prevention | PREDIMED, 7447 (same trial) | **Yes — same trial and participants** |
| Arm handling | both MedDiet arms combined vs control | two unlabelled PREDIMED rows (n=2543, n=2454; the EVOO and nuts arms by size) entered separately, each vs half the control (1225), random-effects IV | **No — same data, different model** |
| Stroke | HR 0.58 (0.42-0.82) | HR 0.60 (0.45-0.80) | Same endpoint; the gap is the model |
| Total mortality | HR 0.98 (0.77-1.24) | HR 1.00 (0.81-1.24) | Same endpoint; the gap is the model |
| Composite | HR 0.70 (0.55-0.89) | HR 0.70 (0.58-0.85) | Same endpoint; the gap is the model |

[@rees2019medcochrane] **Defensible claim:** the small numerical differences are arm-splitting
artefacts of the meta-analytic model, not new information about the trial; the two sources agree.
Rees's narrower composite CI comes from pooling arm-level estimates, not added precision.
Per-row, CVD mortality diverges (n=2543 row 0.62, n=2454 row 1.02; I2 45%) while stroke points the same way
in both (0.65 and 0.54) [@rees2019medcochrane]. Rees
does not label the rows; matching them to the EVOO (2543) and nuts (2454) arms by size is the wiki's
mapping. The trial
was not powered for arm-level contrasts, so that split is noise-grade.

### The secondary-prevention leg — Lyon, large effects at low certainty

The Lyon-secondary-prevention consistency that PREDIMED cites (Limits below) is now held through Rees:
«the Lyon Diet Heart Study (comparison 3) examined the eﬀect of advice to follow a Mediterranean diet and
supplemental canola margarine compared to usual care in 605 CHD patients over 46 months and there was
low-quality evidence of a reduction in adjusted estimates for CVD mortality (HR 0.35, 95% CI 0.15 to
0.82) and total mortality (HR 0.44, 95% CI 0.21 to 0.92) with the intervention.»
[@rees2019medcochrane] Per 1000: CVD deaths 63 ->
22, total deaths 79 -> 35. [@rees2019medcochrane]

- **Why LOW:** downgraded two levels for risk of bias — «The only included study had an unclear
  randomisation method and the modified Zelen design may have introduced other biases, although the study
  was at low risk of bias for allocation concealment and attrition.» The review calls
  it «one older trial reporting very large eﬀect estimates using a modified Zelen design».
  [@rees2019medcochrane]
- **The review is internally inconsistent on one grade.** Its results text grades Lyon total
  mortality «moderate-quality evidence», while SoF 3 and the abstract grade it low.
  [@rees2019medcochrane] This page uses
  LOW, the formal SoF output.
- **The other secondary-prevention comparison is empty.** Versus another diet (C4), only one 101-patient
  trial reports clinical endpoints (very low certainty) once the two Singh trials are excluded for
  unreliable data. [@rees2019medcochrane]
- **Read:** for someone with established CHD the MedDiet evidence is one 1990s trial with a very large
  effect and a design that inflates bias risk. The direction matches PREDIMED's, but a 56-65% mortality
  cut should not be carried over as a magnitude: one LOW-certainty trial with a very large effect and
  early-1990s usual care (the trial stopped at an interim analysis in March 1993
  [@rees2019medcochrane]); background
  lipid-lowering drug use is not reported in the review, so whether a modern drug background attenuates
  the effect is untested. Two ongoing trials, CORDIOPREV (Spain, 1002 CHD patients) and AUSMED
  (Australia, 1032), are the evidence that would revise it.
  [@rees2019medcochrane]

### Risk factors split by comparator — and what it does to the LDL join above

| Comparator | LDL (mmol/L) | SBP / DBP (mmHg) | Source |
|---|---|---|---|
| No/minimal intervention (C1, primary) | -0.08 (-0.26 to 0.09), VERY LOW | **-2.99 / -2.0**, MODERATE (2 RCTs, 269) | Rees SoF 1 |
| Another diet (C2, primary) | **-0.15 (-0.27 to -0.02)**, MODERATE; TG -0.09, MODERATE | -1.5 / -0.26, LOW | Rees SoF 2 |
| Usual care, secondary (C3: Lyon + one smaller trial for lipids) | little/no effect, LOW | VERY LOW | Rees SoF 3 |

[@rees2019medcochrane] PREDIMED's lipid data in
C2 come from 2 of 11 sites, «but these were not the 2 sites where methodological issues arose».
[@rees2019medcochrane]

**Parameter table — the three LDL legs (BLOCKING cross-source check).**

| Parameter | Ge 2020 | Dinu 2018 | Rees 2019 C1 | Rees 2019 C2 |
|---|---|---|---|---|
| Comparator | usual diet (network MA) | «control diets» | no/minimal intervention | another diet (mostly low-fat advice) |
| k / n, follow-up | network of 121 RCTs | 3 RCT MAs (Nordmann 2011, Rees 2013, Huo 2014) | 4 RCTs / 389, 3-6 months | 7 RCTs / 947, 3 months-4.8 yr |
| LDL result | significant reduction, moderate certainty (magnitude not held here) | no association; Nordmann vs low-fat -0.09 (-0.19 to 0.02) | -0.08 (-0.26 to 0.09), VERY LOW | **-0.15 (-0.27 to -0.02), MODERATE** |
| Same quantity as Dinu? | No — different comparator (the join) | — (mixed-comparator pool) | **Partly** — same comparator and review lineage as Rees 2013 (vs no/minimal intervention); still null | **Partly** — a new comparison absent from Rees 2013; closest to the Nordmann leg (vs low-fat) |

[@rees2019medcochrane]
[@dinu2018] Ge and Dinu
cells repeat the extracted lines in the LDL section above.

- **Rees attenuates the Dinu leg of the join (F, not a tension).** Against an active diet — the
  comparator on which the join placed Dinu's null — Rees finds a possible small LDL advantage at moderate
  certainty. This C2 comparison is new in the 2019 update (Rees 2013 compared only against no/minimal
  intervention); its closest Dinu counterpart is Nordmann's -0.09 (-0.19 to 0.02) vs low-fat diets.
  The two intervals overlap and the trial sets likely overlap in part, so the change reads as a
  precision gain, not a clash. *No extra LDL reduction vs an active control* now reads *possibly a small
  one, about 0.15 mmol/L*. The Rees 2013 lineage (C1, vs minimal intervention) stays null at very low
  certainty over 3-6 months, which neither confirms nor refutes Ge's usual-diet benefit.
- **What survives of the surrogate caveat is weaker.** An LDL advantage over an active comparator is
  possible (moderate certainty) but small. Whether \~0.15 mmol/L is too small to account for the stroke reduction would need
  per-mmol event scaling (-> [[LDL Lowering and Cardiovascular Events]]), which this page does not
  carry out; leave it open.
- **Blood pressure:** a \~3/2 mmHg reduction vs minimal intervention at moderate certainty rests on 2 RCTs
  and 269 people; against another (healthy) diet it shrinks to an imprecise -1.5 mmHg.
- **Secondary prevention:** «No eﬀects were seen on CVD risk factors in the limited number of trials
  reporting these, but this may be due to optimal pharmacological treatment where further improvements in
  lipid levels and blood pressure may be unlikely, particularly in more recent trials. We have not
  explored the eﬀects of medication on outcomes in secondary prevention due to the low number of included
  studies, or in those at high risk in primary prevention, but we will explore this in future updates.»
  [@rees2019medcochrane] The drug explanation is
  the authors' speculation and untested in the review; it is *consistent with* the Layer-1 substitution
  point but is not evidence for it.

### What the review says the trials cannot tell you

- **Supplied food, not advice alone:** «both the PREDIMED trial and The Lyon Diet Heart Study supplied
  supplemental foods as well as dietary advice to follow a Mediterranean-style diet so the policy
  implications of the findings of these trials are unclear (Appel 2013).»
  [@rees2019medcochrane] The intervention that
  showed events is *free EVOO/nuts/margarine plus counselling*; advice alone is untested on events.

- **Harms and quality of life:** «Two trials reported on adverse events where these were absent or minor
  (low- to moderate-quality evidence). No trials reported on costs or health-related quality of life.»
  [@rees2019medcochrane]
- **The authors' bottom line:** «there is still some uncertainty regarding the eﬀects of a
  Mediterranean-style diet on clinical endpoints and CVD risk factors for both primary and secondary
  prevention» and «Further adequately powered primary prevention trials are needed to confirm findings on
  clinical endpoints to date.» [@rees2019medcochrane]

**Net effect on this page:** Rees agrees with the incumbent's read (stroke-driven, mortality-null,
internal-validity discount) and puts formal numbers on it. It also attenuates the Dinu leg of the LDL
join: there is now moderate-certainty evidence of a possible small LDL reduction (-0.15 mmol/L) over
an active diet. No tension is filed:
the incumbent never claimed more than moderate certainty on any endpoint, Rees's grades match its
`medium` confidence, and the LDL change is a precision gain over an overlapping Nordmann estimate, not
an opposed result.

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Limits

- **Single trial, `confidence: medium`** — one landmark RCT, and one carrying an internal-validity
  discount (the reanalysis). The observational + Lyon-secondary-prevention consistency the paper cites
  is *within-source* and same-diet-hypothesis, so it is not independent (type-E) backing; a second
  independent pattern-RCT would raise confidence. *(2026-10-06, Rees:)* the Cochrane review confirms the
  primary-prevention event evidence is still this one trial, graded MODERATE for stroke and LOW for MI,
  CVD and total mortality; Lyon is now held at LOW certainty and does not lift primary-prevention
  confidence (different stratum, Zelen design). `confidence: medium` stands.
- **Stroke-specific, mortality-null over 4.8 yr** — do not read the composite as a mortality claim.
- **High-risk, Mediterranean-baseline population** — transportability to low-risk or non-Mediterranean
  eaters is the open question the authors themselves flag.
- **Not a component-isolation trial** — it cannot say whether EVOO, nuts, fish, or the whole gestalt
  did the work (the observed-healthy-pattern-is-not-evidence-for-a-component caveat applies).
- **Mediterranean vs DASH is outcome-specific, not a demonstrated win** — PREDIMED gives Mediterranean the
  hard-event RCT DASH lacks, but DASH is the better-studied pattern on the BP *surrogate*, and where the
  two meet on the same endpoint (Ge's network) they are near-equivalent. So "Med is better" is an
  availability asymmetry (Med was tested on events; DASH was not), not a head-to-head result -> [[Named Diet Programs Compared]] (DASH-vs-Mediterranean section).

</div>

## Self-critique `[run 2026-07-29, before commit]`

- **Over-claim check:** the composite 0.70 is not read as a mortality or MI claim — the stroke-driven
  decomposition and the null all-cause HR are stated up front; the *pattern beats weight loss* claim is
  tagged and gated behind a parameter table naming the population/comparator differences,
  not asserted as head-to-head.
- **Laundered-E avoided:** the SFA-replacement overlap is explicitly called refinement/consistency, NOT
  `[E-independent]`, because the mechanism is shared, not a separate route; the within-source
  observational corroboration is flagged as non-independent.
- **Symmetric standards:** the retraction/reanalysis discount is applied to a *favourable* result — the
  exact case where motivated reasoning would wave it through.

## Self-critique `[re-run 2026-08-05, after adding the dementia/cognition section]`

- **No outcome-inflation.** The added MedDiet->AD/MCI signal is stated as observational-only, `low`-to-
  `moderate`, with the RCT gap and the confound named up front — it is NOT presented as a second hard-
  outcome win to sit beside PREDIMED's CV events. The «probably via the vascular channel» read is tagged
  as reasoning, not a demonstrated mediation.
- **Not laundered-E.** Garcia-Casares is a *different outcome* (cognition) on a *weaker design*
  (observational), so its agreement is not independent corroboration of the CV-event finding; no
  `[E-independent]` claimed. It enters `sources:` on the dual test (a distinct extracted claim — the AD/MCI
  RRs — now lives on the page).

[@molendijk2017diet]
## Adjacent outcome — the pattern also tracks lower depression incidence, but weakly

In prospective cohorts the Mediterranean pattern is associated with lower incident depression: OR «0.75
(0.67 to 0.84)», part of a linear dose-response across diet-quality patterns (Molendijk 2017). But this
is a **weaker claim than the CV one** and belongs on [[Depression and Modifiable Exposures]], not here:
it is observational-only (no RCT), and the association **vanishes when analyses control for baseline
depressive symptoms or use a formal diagnosis** — a reverse-causation / surrogate-inflation signal. The
favoured mechanism routes *back through* the cardiometabolic pathway this page is about (diet -> metabolic
illness -> depression), so it is plausibly not an independent MedDiet benefit but a downstream shadow of
the same cardiometabolic effect. Named here only as a cross-link; the caveats live on the depression page.


<div class="recent-update" data-last-updated="2026-10-06">

## Self-critique `[run 2026-08-05, after adding the Dinu umbrella section]`
- **Independence NOT laundered — the load-bearing catch.** Dinu's RCT pool *contains* PREDIMED (Liyanage,
  Grosso, M-Gonzalez all pool it), so `[E-independent]` is explicitly refused and the relationship is
  labelled F (bounding/refinement). The umbrella agreeing with PREDIMED's mortality-null is stated as
  consistency-within-the-same-evidence, not independent corroboration.
- **No overclaim.** The convincing hard-endpoint grade is attributed to the *observational* leg with the
  pooled-RCT null stated in the same breath; the umbrella is not read as elevating PREDIMED's certainty.
  The parameter table's "same quantity?" column marks all-cause mortality as commensurable (both null,
  PREDIMED in-pool) and CV-events as related-not-identical.
- **LDL-null is a distinct claim, not a restatement.** The whole-pattern-moves-events-without-moving-LDL
  point is genuinely new against the SFA single-nutrient LDL argument, so it earns its place (F), and is
  routed to Surrogate Outcomes rather than asserted as an SFA-channel duplicate. *(Superseded: already
  narrowed 2026-08-08 to a differential null, and on 2026-10-06 Rees's update shows a small differential
  LDL advantage too — see the Rees section.)*

</div>

## The F&V component leg — the observational estimate PREDIMED cannot isolate `[2026-08-13]`

Fruit and vegetables are a defining MedDiet component, and Aune 2017 supplies the **component-level**
observational estimate the pattern RCT structurally cannot: per 200 g/day F&V, CVD 0.92 (0.90-0.95),
CHD 0.92 (0.90-0.94), all-cause 0.90 (0.87-0.93) [@aune2017fv]. This is the same decomposition move as the nut leg above — and it inherits the same
limit.

- **PREDIMED cannot attribute its effect to F&V any more than to nuts.** A whole-pattern RCT confounds
  its own components; the F&V contribution is knowable only observationally, at the confounding ceiling.
  So MedDiet's F&V leg **corroborates the pattern's direction** but does not license "the F&V in the
  MedDiet is what worked" -> [[Fruit and Vegetable Intake and Health]].
- **Not `[E-independent]` for the nut+F&V pairing on this page:** both component estimates are Aune-team
  MAs on overlapping cohorts, so their agreement is shared-lineage F, not two independent witnesses to
  the MedDiet's benefit. The RCT (Estruch) and the observational legs remain genuinely different routes;
  the two *observational* legs do not.

<div class="recent-update" data-last-updated="2026-10-06">

## Self-critique `[run 2026-09-25, after the olive-oil-isolation section (WS-022)]`

- **No overclaim toward or against olive oil.** The section neither asserts an isolated olive-oil CHD
  benefit nor denies olive oil is useful — it states precisely what the three legs can and cannot
  isolate. The one CHD-specific olive number (Zhang's swap CVD arm) is reported as *null*, symmetric with
  how a plant-oil-harm finding would be read, and the surviving total/cancer signal is kept observational.
- **No fabricated separability.** The parameter table's *isolates olive oil?* column is NO on every leg,
  grounded in each source's own design limit (PREDIMED can't decompose the pattern; WHO's MUFA RCT is one
  52-person trial; Zhang is model-based observational). The claim is an *absence* of isolable evidence,
  which is the honest type-G gap, not a manufactured verdict.
- **No laundered extraction.** synthesis over held pages; no new `[EXTRACTED]` minted and no
  `sources:` added — the WHO and Zhang figures are cross-referenced to [[Saturated Fat Intake and Replacement]],
  where they are extracted and audited. Every figure re-verified against that page before writing.

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Self-critique `[run 2026-10-06, after the Rees Cochrane section]`

- **Independence not laundered.** Rees's primary-prevention event evidence is PREDIMED, so it is F
  throughout. On LDL, Rees C1 is the Rees 2013 lineage (Dinu pooled Rees 2013); Rees C2 is a new
  comparison whose nearest Dinu leg (Nordmann) likely shares trials, so it is not independent either.
- **Caught and fixed before commit:** per-row CVD-mortality labels were swapped and Rees never names the
  arms (now unlabelled rows with the arm mapping marked); the LDL bullet first read Rees as
  *strengthening* the surrogate caveat when, on the active-diet comparator, it attenuates Dinu's null
  (rewritten, parameter table added, older lines given supersession notes); the drug-background quote
  was cut before the authors' *we have not explored* sentence (widened, demoted to *consistent with*);
  the Lyon transport line and an internal-holdings superlative were softened. A fix-audit then caught
  the C2 comparison mis-described as the update of Rees 2013 (it is new; C1 is the lineage) and an
  unsupported "pre-statin-era" phrase (now the March 1993 interim date, drug use not reported).
- **No tension filed:** Rees C2's LDL estimate overlaps Nordmann's (a precision gain), and Rees C1 vs Ge fails not-joined
  check (ii) (very-low-certainty 3-6-month trials vs a network MA). `confidence: medium` re-judged and kept.

</div>

## References

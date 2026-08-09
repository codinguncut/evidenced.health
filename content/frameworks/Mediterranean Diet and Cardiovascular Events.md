---
type: framework
question: Does a Mediterranean dietary PATTERN reduce hard cardiovascular events — in whom, by how much, and on which outcomes?
aliases: [Mediterranean Diet, PREDIMED, MedDiet Cardiovascular, Dietary Pattern CVD, Whole Diet Pattern RCT]
authors: [Estruch, Ramon; Ros, Emilio; Martinez-Gonzalez, Miguel A; Hernan, Miguel A; Ge, Long; Dinu, Monica; Sofi, Francesco]
sources: [Estruch - PREDIMED Mediterranean Diet 2018, Ge - Named Diets Weight Cardiovascular Network MA 2020, Garcia-Casares - Mediterranean Diet Alzheimer 2021, Dinu - Mediterranean Diet Umbrella Review 2018, Molendijk - Diet Quality Depression Dose-Response Meta-Analysis 2017]
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
updated: 2026-08-09
self_critiqued: 2026-08-08
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
(0.85-0.97)**, cohort-only 0.91 (0.88-0.94). [@garciacasares2021] Two things keep this from reading as a second hard-outcome win for the pattern:

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

### Parameter table — PREDIMED vs the umbrella's pooled RCT grade (BLOCKING cross-source check)

| Parameter | PREDIMED (Estruch 2018) | Dinu pooled RCT MAs | Same quantity? |
|---|---|---|---|
| All-cause mortality | HR **0.98** (0.77-1.24), null | RR **0.93** (0.65-1.33), *No evidence* (Liyanage, 3 RCTs) | **Yes** — both null; PREDIMED is IN the pool |
| CV events | composite **0.70** (0.55-0.89), stroke-driven | CVD mortality *No evidence* (Liyanage) / *Weak* (Grosso, M-Gonzalez) | Related, not identical (single composite vs pooled mortality) |
| Diabetes | not a primary endpoint | RR **0.70** (0.54-0.91), *Weak* | Different comparator — umbrella only |

**Defensible claim:** the umbrella *bounds* PREDIMED (its pooled RCT evidence is weak/null on hard
endpoints except diabetes) and *agrees* with PREDIMED's own mortality-null; because PREDIMED is inside
the pool, this is refinement (F), not independent corroboration.


### The LDL refinement — a DIFFERENTIAL null vs active controls, not an absolute one (the two sources JOINED, corrected 2026-08-08)
Two of this page's own sources give apparently clashing LDL verdicts, and they must be JOINED before
either is used:

- **Dinu:** across 3 RCT meta-analyses «no association was reported for LDL-cholesterol levels» — but
  explicitly «when compared to control diets» (total cholesterol lowered and HDL raised in the *same*
  comparison). [@dinu2018, Table 2]
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

### The adherence-measurement caveat
The umbrella flags «22 77 indexes quantifying the compliance to the Mediterranean diet have been
described» (the `77` is an OCR line-number; the count is 22) — the definitional heterogeneity that makes
pooled Med-diet estimates noisy and partly explains the weak RCT signal.
[@dinu2018] -> [[Is the Food Category Doing Any Work]],
[[Measurement Error in Dietary Assessment]].

## Limits

- **Single trial, `confidence: medium`** — one landmark RCT, and one carrying an internal-validity
  discount (the reanalysis). The observational + Lyon-secondary-prevention consistency the paper cites
  is *within-source* and same-diet-hypothesis, so it is not independent (type-E) backing; a second
  independent pattern-RCT would raise confidence.
- **Stroke-specific, mortality-null over 4.8 yr** — do not read the composite as a mortality claim.
- **High-risk, Mediterranean-baseline population** — transportability to low-risk or non-Mediterranean
  eaters is the open question the authors themselves flag.
- **Not a component-isolation trial** — it cannot say whether EVOO, nuts, fish, or the whole gestalt
  did the work (the observed-healthy-pattern-is-not-evidence-for-a-component caveat applies).



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
  routed to Surrogate Outcomes rather than asserted as an SFA-channel duplicate.

## References

---
type: framework
question: Are refined grains harmful, do whole grains help, and does the evidence say anything useful about pulses?
aliases: [Refined Grains, Whole Grains, Processed Grains, Cereal Fibre, Pulses, Legumes, Beans and Lentils, Grain Quality]
authors: [Scientific Advisory Committee on Nutrition (org); Nordic Council of Ministers (org); European Society of Cardiology (org); Reynolds, Andrew; Food and Agriculture Organization of the United Nations (org); Afshin, Ashkan; World Cancer Research Fund International (org); Jenkins, David J A; Aune, Dagfinn; Schwingshackl, Lukas; Bechthold, Angela; Schlesinger, Sabrina; Boeing, Heiner; Thorisdottir, Birna]
sources: [SACN - Carbohydrates and Health 2015, NNR - Nordic Nutrition Recommendations 2023, ESC - CVD Prevention Guidelines 2021, Reynolds - Carbohydrate Quality and Human Health 2019, FAO - Dietary Protein Quality Evaluation 2013, Afshin - Health Effects of Dietary Risks GBD 2019, WCRF - Diet Nutrition Activity Cancer 2018, Jenkins - Glycaemic Index Load Outcomes Series 2024, Aune - Whole Grain Mortality 2016, Aune - Fruit Vegetable Mortality 2017, Schwingshackl - Food Groups All-Cause Mortality Meta-Analysis 2017, Schwingshackl - Food Groups Type 2 Diabetes Meta-Analysis 2017, Bechthold - Food Groups CHD Stroke Heart Failure Meta-Analysis 2019, Schlesinger - Food Groups Overweight Obesity Weight Gain Meta-Analysis 2019, Thorisdottir - Legume Cardiovascular Diabetes Meta-Analysis 2023]
cluster: nutrition
confidence: low
self_critiqued: 2026-08-28
relationships:
  related_to:
    - Is the Food Category Doing Any Work
    - Measurement Error in Dietary Assessment
    - Free Sugars Intake
    - Antinutrients in Plant Foods
    - Protein Quality and the DIAAS Score
    - Glycaemic Index and Glycaemic Load and Chronic Disease
created: 2026-07-27
updated: 2026-08-28
---

**Two-source page, `confidence: low`.** The body below is SACN 2015; [@nnr2023] was added 2026-07-28 and is the second guidance family this page `AWAITS`-ed.
**It does not raise confidence, and the section at the bottom explains why: NNR read SACN.** The
questions this page answers are ones the maintainer holds a stated prior on (`SC-11`) — a reason for
*more* scrutiny of agreement, not less.
Reynolds 2019 is now **held and woven** (the fibre-benefit section below; ingested 2026-07-30) — but
**note Reynolds shares an author with Te Morenga, so it cannot corroborate independently**, and NNR
leans on Reynolds for its whole-grain dose-response, so that dependency runs through this page too. The
convergence it appears to add is therefore shared-source, not type-E.



## The headline: refined grains are NOT found harmful

| Exposure -> outcome | Estimate | SACN grade |
|---|---|---|
| Refined grains -> cardiovascular events | **RR 1.00 (95% CI 0.98, 1.01)** per half serving/day, p=0.5 | `No association · Moderate` |
| Refined grains -> type 2 diabetes | **RR 1.00 (95% CI 0.98, 1.01)**, p=0.7 | `No association · Moderate` |

[@sacn2015]

**And the randomised comparisons are null across the board.** SACN states the comparator explicitly —
«All trials compared whole grain diets to refined grain control diets.» — then reports no effect on
systolic BP (0.2 mmHg, 95% CI -1.6 to 2.0; p=0.85), diastolic, total cholesterol (0.04 mmol/L,
95% CI -0.12 to 0.20; p=0.49), triacylglycerol, fasting glucose (-0.05 mmol/L, 95% CI -0.12 to 0.02;
p=0.14), fasting insulin and insulin sensitivity — several at `Adequate evidence`.
[@sacn2015]

**The one non-null randomised outcome favours whole grains, on an intermediate:**
«An effect is demonstrated for higher whole grains consumption on reducing energy intake (-360 kJ,
95% CI -642, -79; p=0.01)» — graded `Effect · Limited evidence`, and **SACN notes one trial
contributes 75% of the pooled estimate.**
[@sacn2015]

## The claim that survives is narrower than the popular one

Whole-grain *benefit* is cohort-only and mostly `Limited` — CVD RR 0.95, stroke RR 0.96, colo-rectal
RR 0.97, the last graded **`No association`**. And SACN attaches its own attribution caveat:

> «Any associations indicated for whole grain may be related to its cereal fibre component.»
> [@sacn2015]

**So the supported claim is *whole grains are associated with lower risk in cohorts, possibly via
fibre* — NOT *refined grain causes harm*.** Those are different claims and SACN separates them.

**Decision consequence.** Replacing refined with whole grain is supported as a *plausible small
benefit routed through fibre*, on cohort evidence. **Avoiding refined grain as a harm-avoidance move
is not supported by this source** — the harm estimate is a flat null at `Moderate`, SACN's middle
strength grade.

> *Self-critique correction (2026-07-27):* the first draft called `Moderate` *"the strongest
> evidence-state SACN issues for a no-association verdict."* **False** — SACN does issue
> `No association · Adequate` elsewhere `[searched: "no association"+"adequate", both orders, across
> all 13 SACN chunks]`. So the refined-grain null sits one grade below SACN's ceiling, not at it. The
> conclusion is unchanged; its stated strength was inflated.
`-> [[Is the Food Category Doing Any Work]]` — "grain" may be the wrong unit; the fibre caveat says
so in SACN's own voice.

## Challenge — "surely refined grains cause diabetes/obesity?" — disaggregate the exposure (2026-08-01)

A common, reasonable doubt (deliverable-critique). The RR 1.00 is a **population main-effect,
incidence** estimate and it stands — but the harm intuition survives in three disaggregated forms the
flat null does not touch, and conflating them with "refined grains" is what makes the null feel wrong:

- **Refined grains =/= free sugars / SSBs.** The evidenced carbohydrate harm on adiposity is *free
  sugars*, above all sugar-sweetened beverages -> [[Free Sugars Intake]] — a different exposure from the
  starchy refined-grain category tested here. The "refined carbs are bad" prior borrows most of its
  force from the sugar evidence.
- **Incidence (null here) is not glycaemic control in the already-impaired.** In *established* T2D /
  insulin resistance, reducing carbohydrate / glycaemic load improves glycaemic control and can drive
  remission -> [[Carbohydrate Restriction and Type 2 Diabetes Remission]]. That is a route-(b/c)
  management finding *in a stratum*; it does not contradict a null on refined-grain -> T2D *incidence*
  in the general population, and the general null does not close the stratum question.
- **The null is substitution- and measurement-error-attenuated.** RR 1.00 is "per half serving/day"
  with the replacement unspecified, and self-reported grain intake carries large error that biases a
  real gradient toward the null -> [[Measurement Error in Dietary Assessment]]. Read it as "no
  *main-effect* harm detected," not "refined grain proven inert."

Net: the population null is sound; the decision-relevant residue is (i) cut *free sugars/SSBs*, and
(ii) cut *glycaemic load if you are insulin-resistant* — neither of which is "avoid refined grain as a
food category."

## Is "fibre content" the whole target? Added fibre =/= intrinsic whole-grain fibre (2026-08-01)

SACN attributes the whole-grain signal to its cereal-fibre component, so *fibre content* is a better
target than *the word "whole grain"* — this much is directionally right. But it is **necessary, not
shown sufficient**, and it does NOT license "refined grain + added isolated fibre = whole grain"
(deliverable-critique). Two held reasons: the **isolate-vs-food caveat** — isolated fibre is proven only
on the LDL surrogate, not on the cohort mortality endpoint -> [[Dietary Fibre and Health]]; and the
**intact-grain matrix** — cell-wall structure, particle size and fibre type/fermentability plausibly do
work a milled grain plus a fibre additive does not -> [[Is the Food Category Doing Any Work]]. So the
equivalence of fortified/added fibre to intrinsic whole-grain fibre on hard outcomes is **not
established** — an open question, not a demonstrated sameness; "target fibre" ranks fibre above the label,
it does not flatten the matrix.

<div class="recent-update" data-last-updated="2026-08-28"></div>

## Pulses — SACN largely did not look, and that is the finding

Where measured, null: legume fibre -> T2DM RR 1.01 (0.98, 1.04) per 1 g/day; legume fibre ->
colo-rectal cancer RR 0.98 (0.94, 1.02); non-soy legume -> CVD RR 0.96 (0.90, 1.03). The one positive
is faecal weight, which SACN itself bounds:

> «The biological relevance is unclear due to the size of supplements, and it is unclear whether this
> finding is applicable to all legume fibres.»
> [@sacn2015]

**Two reasons those nulls are weak evidence of absence, not evidence of no effect.**

1. **Roughly fourteen legume outcome cells sit in the `insufficient evidence` tables** against that
   single conclusion. Silence here is un-studied, not un-associated — the expectancy test applies.
2. **The nulls are low-power by construction.** SACN standardises increments to \~1 SD of UK intake,
   and legume fibre's SD is **1 g/day** against **7 g/day** for total fibre. A null estimated across a
   distribution one-seventh as wide, in a low-consumption population, is close to uninformative about
   what happens at high intake.
   [inferred from @sacn2015]

**Pulses appear in exactly one SACN recommendation, and it is about weaning** — *"from about six
months of age gradual diversification of the diet to provide increasing amounts of whole grains,
pulses, fruits and vegetables is encouraged."*

**This is a `G` gap, stated as one:** the wiki cannot currently answer whether pulses help, harm, or
do nothing at the intakes someone considering them would actually eat. `-> SC-11`

**Update `[2026-08-28]`: this gap is now partly addressed** by a dedicated legume SR+MA
(Thorisdottir 2023, NNR2023) — cohort-null on hard CVD/T2D events across a low intake range, benefit
on LDL-C at RCT doses, «limited – no conclusion» overall. See *The pulses G gap gets its dedicated
SR+MA* below.

## What this page does NOT establish

- **Nothing about preparation** — *now held on a sibling page.* Soaking, cooking, fermenting and
  germinating are untouched by SACN; `Petroski - Antinutrients Narrative Review 2020` was ingested
  2026-07-29 and addresses them directly -> [[Antinutrients in Plant Foods]] (preparation defuses the
  antinutrient concern for prepared plant staples; raw high-lectin legumes are the exception that
  *requires* a full boil).

- **Nothing about carbohydrate load or bulk tolerance** — *partly held on a sibling page.* SACN
  **excluded** gastrointestinal tolerance from its remit. The related *protein* question — that hitting
  a protein target from plants costs more food mass because plant DIAAS is low (peas 64, wheat 40 vs  [@fao2013]
  milk 122) — is now held at [[Protein Quality and the DIAAS Score]]; the exact carb/bulk arithmetic
  remains a `G` gap (needs a food-composition dataset).
- **Nothing about ultra-processing.** "Refined" here is a grain-milling property, not a processing
  classification; `Hall - Ultra-Processed Diets Inpatient RCT 2019` is the staged source for that and
  is a different question.


## Self-critique `[run 2026-07-27, before commit]`

- **Over-claim: FOUND and fixed.** `Moderate` was described as SACN's strongest no-association grade;
  it is not — `No association · Adequate` occurs in the report. Corrected in place with the search
  scope recorded. **This error inflated a finding that runs AGAINST the maintainer's stated prior
  (`SC-11`, bias against processed grains), so it is not flattery — it is the ordinary
  one-notch-too-strong failure, and it appeared even on a claim there was no motive to strengthen.**
- **Absence claims:** three appear in *What this page does NOT establish* (preparation, tolerance,
  ultra-processing). The tolerance one is sourced — SACN states the exclusion. The other two are
  scoped to this source, not to the literature. **Held.**
- **Laundered independence:** none claimed. The page flags in advance that Reynolds shares an author
  with Te Morenga and cannot corroborate independently. **Clean.**
- **Residual risk:** single-source, `confidence: low`, and the pulses section leans on an
 power argument that is the wiki's, not SACN's. Marked as such.

## Fibre ISOLATES are better evidenced than fibre-bearing foods — and SACN bounds why `[chunk 09]`

This cuts against the usual intuition that whole food beats supplement, and SACN's own grades say so:

> «• Effect • Adequate evidence • The direction of the effect demonstrates higher consumption of fibre
> isolates and gum supplements is beneficial to health • The effect is biologically relevant, **but
> demonstrated at intakes achieved through supplementation**»
> [@sacn2015]

> «• Effect • Moderate evidence • The direction of the effect demonstrates consumption of cellulose is
> potentially beneficial to health • The effect is potentially biologically relevant, **but
> demonstrated at concentration of intake achieved through supplementation**»
> [@sacn2015]

| Form | SACN's strongest grade for it | Design |
|---|---|---|
| **Fibre isolates + gum supplements** | **`Effect · Adequate`** — SACN's top strength grade | supplement trials |
| Cellulose | `Effect · Moderate` | supplement trials |
| Psyllium | `Effect · Moderate` **and** `Effect · Limited` — the grade varies by outcome | supplement trials |
| **Whole grains** | mostly `Limited`; colo-rectal graded `No association` | cohort only |

**The asymmetry is a DESIGN artifact, not a verdict on food versus supplement.** Isolates can be
randomised at a chosen dose; whole-grain intake mostly cannot, so it is observed. **The better grade
tracks the better design, not the better food** — and SACN attaches the transportability caveat
itself, twice, in the same clause as the finding: the effect is demonstrated *at supplement-level
intakes*, which is not a claim about eating more of a fibre-bearing food.
[inferred from @sacn2015]
`-> [[Is the Food Category Doing Any Work]]`, `-> [[Upgrading Observational Evidence]]`

## The 30 g target against what people actually eat `[chunk 08/10]`

> «Setting the dietary reference value for AOAC fibre at 30g/day for adults means that current mean
> intakes would be 10-11g below the dietary reference value for men and 13g below for women.»
> [@sacn2015]

**A \~40% shortfall against the target, population-wide.** Two consequences:

- **A "get to 30 g" recommendation is a large behaviour change, not a tweak** — and the telos requires
  judging interventions on adherence, not on the ideal.
- **The evidence for benefit is strongest in the range people are already leaving**, which is where the
  dose-response is estimated -> [[Measurement Error in Dietary Assessment]].

**Do not compare this figure to the NSP tables.** SACN's annex reports **non-starch polysaccharide**
intakes of \~11-15 g/day by age and sex (Table 3.12) — **NSP is a narrower measure than AOAC fibre and
the two are not interchangeable.** SACN's own AOAC-terms statement above is the comparison to use;
reading the NSP number against the 30 g AOAC target would overstate the shortfall.


## Self-critique of the chunk-09/10 additions `[run 2026-07-27, before commit]`

- **Grade error: FOUND and fixed.** The isolate table listed psyllium as `Effect · Limited` only.
  SACN issues psyllium conclusions at **both `Moderate` and `Limited`**, varying by outcome
  `[searched: "(adequate|moderate|limited) evidence ... psyllium" across chunk 09]`. Corrected. **A
  single grade per substance is the wrong shape** — SACN grades *exposure-outcome pairs*, so any table
  keyed on substance alone will misrepresent it.
- **Same-quantity error: AVOIDED, and recorded as a near miss.** The NSP intake figure (\~11-15 g/day)
  was about to be compared against the 30 g **AOAC** reference value. They are different measures.
  SACN supplies the correct AOAC-terms comparison itself; the near miss is documented on
  [[Measurement Error in Dietary Assessment]] rather than quietly dropped.
- **Over-claim check on the isolate asymmetry.** The claim that better grades track better *design*
  rather than better *food* is tagged — SACN states the supplementation bound but does not
  draw the design contrast. **Held, and correctly attributed to the wiki.**
- **Adjudication check (the new rule):** no `SC-NN` row was scored and no challenge adjudicated in
  this pass. The fibre-isolate material bears on `SC-07` and `SC-18`; the handles are noted in the
  log line only, and the scoring is left to a separate operation.
- **Residual:** still a single-source page at `confidence: low`. The isolate-vs-food asymmetry is the
  kind of finding a second source could easily overturn.

## The second guidance family arrives — and it is not a second witness `[2026-07-28]`

NNR cashes the `AWAITS` above. **The first thing it
establishes is that it cannot corroborate this page**, and NNR says so itself by listing its inputs:

> «Seven qSRs are available on the role of cereals (grains) and health outcomes (Fogelholm et al.,
> 2012; Hauner et al., 2012; Reynolds et al., 2019; SACN, 2015; WCRF/AICR, 2018b, j; Åkesson et al.,
> 2013).»
> [@nnr2023]

**SACN 2015 is one of the seven.** So NNR agreeing with SACN on grains is a body agreeing with a
review it read — **not** independent backing, and no `[E-independent]` is claimable. The surface
markers again point the wrong way (different country, different decade, different committee,
convergent conclusion), which is exactly the trap the laundering guard exists to catch.

### Refined grains: the two bodies describe the evidence base differently

**Parameter table** (op-weave 2a):

| Parameter | SACN 2015 | NNR 2023 | Same quantity? |
|---|---|---|---|
| Exposure | «refined grains», per half serving/day | «refined grains (flour) specifically» | **NO — NNR's parenthetical narrows to flour** |
| Outcome | cardiovascular events; type 2 diabetes | health outcomes, unspecified in the adverse-effects box | **NO — SACN names outcomes, NNR does not** |
| Estimate | **RR 1.00 (0.98, 1.01)**, both outcomes | **none given** | **NO — one is a pooled estimate, the other a statement about literature volume** |
| Evidence-state verdict | `No association · Moderate` | «Few or no studies on refined grains (flour) specifically» | **NO — measured-null vs unstudied** |
| Benefit claim | not asserted | «available evidence does not indicate similar beneficial associations compared with whole grains» | comparable in direction only |

**The fourth column is NO on every substantive row, so the honest artifact is a distinction, not a
tension** — and the distinction is one the telos names explicitly.

**SACN and NNR occupy two of the four evidence states, on what looks like one question.** SACN pooled
cohort data to a flat null and graded it `Moderate` — *no meaningful effect*. NNR reports *«Few or no
studies on refined grains (flour) specifically»* and lists the sparsity in its data-gaps block —
*insufficient evidence*. **These are not the same verdict**, and the telos is explicit that they must
not be collapsed.

**Before reading that as a contradiction, note what dissolves most of it.** The exposures are not the
same: SACN estimated *refined grains* as a food category from cohorts; NNR's sparsity claim is scoped
by its own parenthetical to *flour specifically*. A category can be well-estimated in aggregate while
its individual constituents are not — which is [[Is the Food Category Doing Any Work]] running in the
opposite direction to its usual use. **What survives is narrower and still useful:** two Tier-A bodies
looking at overlapping literature reached *"measured and null"* and *"barely studied"*, and a reader
told only one of the two would form a different picture of how settled this is.



### What NNR adds that SACN does not have

- **An explicit carve-out for refined grains, on an energy-adequacy warrant.** NNR's science advice
  *based on health outcomes* ends: «At high energy requirements refined grains also have a role. This
  justifies allowing some refined cereals in the diet.» **SACN issues no equivalent** — it reports a
  null and stops. This is a decision-change for one identifiable stratum (high energy requirement:
  athletes, heavy manual work, high-growth adolescence), and it converts a null into a permission.
  [@nnr2023]
- **A quantified whole-grain target with a stated direction beyond it:** «It is recommended to consume
  at least 90 g/day (dry weight) of whole grains (including whole grains in products), with likely
  further benefits of higher intakes. Such further intakes have no adverse effects».
  **Compare the units before comparing the numbers** — NNR's 90 g/day is *dry weight of whole grains*;
  SACN's 30 g/day is *AOAC fibre*. **Different substances, different measures, not comparable**, and
  the page's existing NSP-vs-AOAC warning applies with more force here.
  [@nnr2023]
- **A dose-response statement that may or may not describe a knee — recorded as.**
  > «Dose-response curves show that risk reduction for all-cause mortality is observed for intakes up
  > to 50-60 g/day of whole grains. Higher intakes (i.e. 90 g/day) confer even greater risk reduction
  > for coronary heart disease, type 2 diabetes and colorectal and breast cancer (Reynolds et al.,
  > 2019).»
  > [@nnr2023]

  **«observed for intakes up to 50-60 g/day» read two ways — and Reynolds 2019 (now held) settles it
  as the data edge, not a knee.** NNR attributes the sentence to Reynolds, and Reynolds' own
  dose-response is explicit: «Figure 1 shows dose-response relationships ... many of which are linear
  with no sign of a plateau within the available data», with whole-grain benefit still *climbing* to
  90 g/day for CHD, T2D and cancer. So the «up to 50-60 g/day» marks how far the all-cause data
  extend, not a flattening — **there is no outcome-specific knee here.** This is the SACN pattern
  again (a number marking the edge of the evidence, not a feature of the curve), and it is consistent
  with, not a counter-instance to, the dose-response prior.
  [@reynolds2019]

### Self-critique of the NNR addition `[run 2026-07-28, before commit]`

- **Fake-tension check: FIRED, and the tension was NOT filed.** The attractive claim here was *"two
  Tier-A bodies contradict each other on refined grains."* The parameter table returned **NO on four
  of five rows** — different exposure scope (flour vs category), different outcomes, estimate vs
  literature-volume statement. Filed as a distinction with the residual stated. **This is the finding
  the guard was built for, and it would have read very well as a tension.**
- **Laundered independence: checked and denied, from NNR's own text.** NNR lists SACN 2015 among its
  seven cereal qSRs. Stated up front rather than buried, and the page header was rewritten so a reader
  does not take "two sources" as "two witnesses".
- **Over-claim check on the carve-out.** «At high energy requirements refined grains also have a role»
  is quoted, not paraphrased, and the stratum named (athletes, manual work, adolescence) is the wiki's
  illustration of *"high energy requirements"*, not NNR's list. Flagged here rather than in the body.
- **Same-quantity near miss: AVOIDED.** NNR's 90 g/day whole grains was about to sit near SACN's 30
  g/day fibre target. **Dry weight of a food against an AOAC fibre measure** — recorded in the body as
  a non-comparison.
- **Dose-response: declined to score.** The sentence is the only candidate knee in the
  corpus and the temptation was to bank it against the falsified prior. Left open, source named.
- **Residual:** `confidence` stays `low` and the source count going from one to two changes nothing
  epistemically, which is the whole point of the section.

## The pulses gap gets a first number — from a third guidance family `[2026-07-28, ESC]`

This page files pulses as a **`G` gap, stated as one**: the wiki could not say whether pulses help,
harm or do nothing at realistic intakes. ESC supplies the first
quantified claim the corpus holds.

> «A single portion of pulses (legumes) a day low- ers LDL-C by 0.2 mmol/L and is associated with a
> lower risk of CHD.»
> [@esc2021]

**Read the sentence's two halves separately — they are different evidence classes**, and ESC runs them
together:

| Claim | Outcome type | Evidence form as stated |
|---|---|---|
| LDL-C **-0.2 mmol/L** per daily portion | **surrogate** | a magnitude, so presumably trial-derived |
| «associated with a lower risk of CHD» | **hard outcome** | **associational, no magnitude, no interval** |

**Only the surrogate limb carries a number.** So the gap narrows rather than closes: the wiki can now
say *one portion a day moves LDL-C by a stated amount*, and still cannot say what pulses do to events
at that intake. -> [[Surrogate Outcomes]]

**How this sits against SACN, which is the page's incumbent.** SACN found legume-fibre nulls
(T2DM RR 1.01; colo-rectal RR 0.98) and this page already explains why they are weak evidence of
absence — the increment was **1 g/day** against 7 g/day for total fibre, a low-power slice.
**ESC's exposure is a whole portion of the food, not a 1 g fibre increment**, so the two are **not the
same quantity** and ESC does not contradict SACN. **The honest composite:** a null across a narrow
fibre slice, and a surrogate benefit at a food-level dose. Both can hold.

**No `[E-independent]`, and no `sources:` inflation of the claim's strength** — ESC gives one sentence
with two references and no certainty rating, in a guideline whose subject is cardiovascular prevention
rather than pulses.

## Fibre: a fourth family, and the first one to give a RANGE `[2026-07-28, ESC]`

ESC's Table 8 specifies **«3045 g of fibre of per day, preferably from wholegrains»** (i.e. 30-45 g;
the hyphen is lost in the source's OCR).
[@esc2021]

| Body | Fibre target | Form | Method specified? |
|---|---|---|---|
| SACN | **30 g/day** | point | **yes — AOAC** |
| WHO | **>=25 g/day** | floor | not held |
| NNR | **3 g/MJ** primary; 25 g/d female, 35 g/d male | energy-scaled + sex-split | **no** |
| **ESC** | **30-45 g/day** | **range** | **no** |

**Four bodies, four constructs — and the wiki cannot rank them.** A point, a floor, an energy-scaled
value and a range are not four estimates of one quantity; and **only SACN names the analytical method**,
which this page already records as the thing that makes 30 g and 25 g non-comparable. **ESC's upper
bound of 45 g is the highest figure in the corpus and comes with no stated warrant**, so it is recorded
as a held position, not as evidence that more is better.

## The whole-grain benefit is probably the FIBRE benefit `[2026-07-29, Reynolds]`

Reynolds 2019 (the WHO-commissioned Lancet meta-analysis) tracks whole grains and total fibre in the
**same** study, and the parallel is close: higher whole-grain intake tracks a 13-33% risk reduction across
critical outcomes (per 15 g/day, all-cause mortality RR 0.94, 0.92-0.95), while total fibre tracks 15-30%
(per 8 g/day, all-cause 0.93). Reynolds grades **fibre moderate but whole grains only low-to-moderate**,
and notes the gap «could reflect the high fibre content of whole grains» — i.e. whole grains likely act
*through* their fibre rather than as a separate lever. This is the component-not-category reading on this
page, now with a magnitude on both sides -> [[Dietary Fibre and Health]]. It also sharpens the target: if
fibre is the active fraction, *fibre content* (not the word "whole grain") is what to steer by.
[@reynolds2019]


## Low whole grains tops the GLOBAL burden ranking — but read that as prevalence, not effect size `[2026-08-04, Afshin GBD 2017]`

GBD 2017 ranks **low whole-grain intake the #1 dietary risk factor for DALYs globally** (82 million
DALYs, \~3 million deaths; leading risk in 16-17 of 21 world regions) — the foundational source behind the
NNR ranking on [[Layer 1 - Ranking Interventions for a Stratum]].
[@afshin2019]

**This does NOT upgrade the effect this page holds, and conflating them is the trap.** The whole-grain
benefit here is **cohort-only, low-to-moderate certainty**, and probably the *fibre* benefit routed
through a food label. GBD's #1 rank is **attributable burden = that same modest observational RR x the
near-universal shortfall** (global mean intake is only 23% of optimal). A common exposure with a small
individual effect tops a population ranking; the rank is a fact about how *widespread* low intake is,
not about how large the per-person gain is -> the prevalence-wedge distinction on the Layer-1 page. So
the page's `confidence: low` on the effect stands unchanged; GBD adds a population-priority signal, not
an effect-size upgrade. [inferred from @afshin2019]

## A fifth family — a cancer body grades whole grains, and it lands on colorectal `[2026-08-05, WCRF]`

WCRF's Third Expert Report is the first *cancer-prevention* family on this page, and its grade is
site-specific: «Consuming wholegrains helps protect against colorectal cancer» — a **probable**
(strong-enough-to-recommend) protective judgement — with dietary fibre graded the same way, and pulses
(legumes) folded into the recommended plant-food pattern.
[@wcrf2018ter]
Its fibre goal — «at least 30 grams per day ... from food sources» — is the **same \~30 g target** the
guidance families above already converge on, now reached from a cancer endpoint rather than CHD/T2D.

**Two things it corroborates, neither an independent witness.** (i) On refined grains WCRF draws **no
harm conclusion** (matrix «limited – no conclusion»), consistent with this page's headline that refined
grains are not *found* harmful. (ii) Its wholegrain->colorectal judgement rests on the CUP cohort SLRs
that **overlap Reynolds' colorectal-cancer cohorts** — shared observational base, so this is F/shared,
**not** `[E-independent]` (and WCRF adds no `sources:` strength beyond the extracted grade).
[inferred from @wcrf2018ter; @reynolds2019]
The cancer grade's softness is documented on [[Dietary Fibre and Health]] (Veronese's weak colorectal-
fibre signal + adenoma RCT-null); the whole-grain benefit here stays `confidence: low`, cohort-only.

## Appraising this observational evidence — the instrument `[2026-07-31]`

The whole-grain benefit is **cohort-only**; **ROBINS-I** ([[Risk of Bias Assessment Tools]]) is the appraisal tool, with domain 1 (confounding) and domain 3 (classification — what counts as “whole grain”) the likely caps. Re-appraisal candidate on the RoB-tools page; not re-graded here.

## A sixth family adds GI/GL as a co-equal carb-quality marker — Jenkins 2024 `[2026-08-13]`

Jenkins 2024 (gold MA, 10 mega-cohorts) compared **low-GI diets directly against high-whole-grain
diets in the same cohorts** and found «Associations between diets high in fibre and whole grains and the
four main outcomes were similar to those for low GI diets».
[@jenkins2024gi] Most GI-vs-wholegrain
group-difference p-values were non-significant — but the comparison «only included one or two cohorts for
most outcomes», so the equivalence is thinly powered. This **strengthens this page's component-not-
category reading**: whole grain, fibre and GI/GL are collinear markers of one carbohydrate-quality
pattern (the source itself notes «foods high in carbohydrates also tend to have a high GI»), so their
near-identical associations do not establish any one as an independent lever. Full GI/GL magnitudes and
the proxy-vs-lever analysis: [[Glycaemic Index and Glycaemic Load and Chronic Disease]].
[inferred from @jenkins2024gi]

## The bare whole-grain RRs get a dose-response, CIs and a studied range — Aune 2016 `[2026-08-13]`

The whole-grain figures above (SACN's cohort RR 0.95 CVD / 0.96 stroke / 0.97 colo-rectal, **no CI, no
shape**; NNR's bare 90 g/day) were the page's weakest presentation: a bare point estimate carries no
decision. Aune 2016 (gold dose-response MA, **45 prospective cohorts / 64 publications**, up to
705 253 participants, 100 726 all-cause deaths) supplies the **per-90 g/day RR + 95% CI + curve shape +
studied range** the page lacked — a **type-F refinement** of the incumbent bare figures, not a new
route to the claim.

| Outcome (per **90 g/day** = 3 servings) | RR (95% CI) | I2 | n | |
|---|---|---|---|---|
| Coronary heart disease | 0.81 (0.75-0.87) | 9% | 7 | sig |
| Cardiovascular disease | 0.78 (0.73-0.85) | 40% | 10 | sig |
| **All-cause mortality** | **0.83 (0.77-0.90)** | 83% | 11 | sig; high I2 |
| Total cancer mortality | 0.85 (0.80-0.91) | 37% | 6 | sig |
| Stroke | 0.88 (0.75-1.03) | 56% | 6 | **NS** |
| Respiratory mortality | 0.78 (0.70-0.87) | 0% | 4 | sig |

> «The summary relative risks per 90 g/day increase in whole grain intake ... was 0.81 (95% confidence
> interval 0.75 to 0.87; I2=9%, n=7 studies) for coronary heart disease, 0.88 (0.75 to 1.03; I2=56%, n=6)
> for stroke, and 0.78 (0.73 to 0.85; I2=40%, n=10) for cardiovascular disease»
> [@aune2016wg]

**90 g/day is a population median, NOT an optimum — benefit keeps climbing to \~7 servings/day.**

> «Reductions in risk were observed up to an intake of 210-225 g/day (seven to seven and a half servings
> per day) for most of the outcomes.»
> [@aune2016wg]

All-cause risk is lowest at **225 g/day**; the curves are steeper at low intake then flatten (concave)
but **stay decreasing to the studied-range edge — no plateau reached within the data, no upper (harm)
arm** for the headline outcomes. So NNR's 90 g/day threshold marks study density / a median, not a
ceiling — **the SACN pattern again** (a guideline number marking the evidence edge, not a curve
feature), consistent with the falsified knees-prior. **No U-artifact:** the lone point estimate above 1
is nervous-system mortality (1.15, 0.66-2.02, n=2, NS) at low intake only — a weak single outcome, not a
U on the headline curves -> [[The U-Shaped Association Artifact]].

**Unit caveat — Aune's 90 g =/= NNR's 90 g.** Aune's increment is mostly **fresh weight** (product
including water: only 2 of the pooled publications used dry weight), whereas NNR's 90 g/day is **dry
weight**. The numeric coincidence hides a fresh-vs-dry difference; do not read the two *90 g* figures as
the same dose. [@aune2016wg]

**Refined grains — Aune corroborates the page's headline null (F/shared).** Per 90 g/day: CHD 1.13
(0.90-1.42, NS), stroke 0.91 (0.81-1.02, NS), CVD 0.98 (0.90-1.06, NS), all-cause 0.95 (0.91-0.99, weak
inverse). Aune's own summary: «there was little evidence of an association with refined grains, white
rice, total rice, or total grains.» [@aune2016wg] **Neither
benefit nor a measured HARM signal** — so the refined-grain carve-out in guidance is **compositional**
(whole grain carries more of the active fraction), not a demonstrated harm of refined grain, exactly as
SACN's RR 1.00 and WCRF's «no conclusion» already established. This corroborates, it does not
independently witness (see below).

**No `[E-independent]` — DENIED on shared-cohort grounds.** Staging notes hypothesised Aune is a genuine
type-E witness vs Reynolds because the *teams* are independent (Imperial/Aune vs Otago/Reynolds-Te
Morenga). **Verified and downgraded to F/shared on ingest:** both are cohort-pooling meta-analyses
drawing on a substantially **overlapping primary cohort base** (Wu 2015 NHS/HPFS, Johnsen 2015 HELGA,
Jacobs Iowa, ARIC, EPIC, PREDIMED). Same method + same primary data = shared-source agreement, not two
independent routes — the strict-E rule (re-pooling the same studies is laundered-E), exactly like the
NNR-reads-SACN and WCRF-shares-Reynolds'-cohorts denials already on this page. **Team-independence is not
evidence-independence.** Confidence stays `low`: Aune sharpens the *precision and shape* of the estimate,
it adds no independent backing.
[inferred from @aune2016wg; @reynolds2019]
Full extraction, all outcome cells and the observational caveats: Aune 2016 source page [@aune2016wg].

### Self-critique of the Aune addition `[run 2026-08-13, before commit]`

- **Laundered-independence check: FIRED, and `[E-independent]` was NOT claimed.** The attractive claim
  was *an independent Imperial team confirms Reynolds' whole-grain->mortality signal.* Both are
  cohort-pooling MAs on a substantially overlapping primary base (Wu/NHS-HPFS, Johnsen/HELGA, Iowa, ARIC,
  EPIC, PREDIMED) — re-pooling shared studies is laundered-E, so downgraded to F/shared and confidence
  held `low`. This is the finding the guard exists for; it would have read well as a confidence-raiser.
- **Same-quantity check on the two *90 g*: AVOIDED.** Aune's 90 g (mostly fresh weight) vs NNR's 90 g
  (dry weight) — flagged as a non-comparison from Aune's own «only two publications ... (dry weight)»
  sentence, not silently equated.
- **No-optimum / no-U claims: correctly attributed.** *90 g is a median not an optimum* and *benefit to
  225 g/day, no plateau/harm arm within data* are the wiki's reading over Aune's extracted studied-range
  and non-linearity results — tagged; the numbers themselves are extracted.
- **Over-claim check:** every effect cell carries RR + CI (+ studied range); NS cells (stroke, diabetes,
  nervous-system) marked; refined-grain read as *no measured harm*, not *proven inert*.
- **Residual:** F-not-E means this adds precision/shape, not an independent witness — `confidence: low`
  is unchanged, which is the honest outcome of the shared-cohort finding.

<div class="recent-update" data-last-updated="2026-08-28"></div>

## The third Aune plant-food MA lands — same lineage, NOT a third independent witness `[2026-08-13]`

Aune 2017 (F&V; ref 192-193 of that paper cite *this* whole-grain MA and the nut MA) completes the
same-team plant-food trilogy [@aune2017fv].
All three report an inverse **all-cause** association, but the increments differ, so the magnitudes are
**not rankable across foods**:

| Parameter | Aune whole grain | Aune F&V | Same quantity? |
|---|---|---|---|
| All-cause RR | 0.83 per **90 g/day** grain | 0.90 per **200 g/day** F&V | **NO** — different increment AND different food; not comparable |
| Lineage | Imperial/NTNU, Aune-Norat-Riboli | same team, overlapping cohorts | **shared** |

- **No `[E-independent]`.** The three MAs share method and a substantially overlapping primary-cohort
  base (NHS/HPFS, EPIC, ARIC, PREDIMED recur), so their agreement is same-lab **type-F / shared
  lineage**, exactly as the Reynolds denial above — team-count is not evidence-count. What F&V *does* add
  here is the recurring **shape lesson**: like whole grain, its guideline number (400 g/day / 5-a-day)
  marks the evidence density, with lowest risk out at the **800 g/day studied edge** — a guideline
  threshold reading the data edge, not a curve feature -> [[Fruit and Vegetable Intake and Health]].

<div class="recent-update" data-last-updated="2026-08-28"></div>

## Refinement — the DIfE/Boeing 12-food-group series (2026-08-28)

Across the five-outcome DIfE/Boeing dose-response series, **whole grains are the single most
consistently protective food in the whole matrix** — protective across all five outcome families and
the only food with **two HIGH-grade cells**: all-cause mortality RR 0.92 (0.89-0.95, per 30 g/d) and
T2D incidence RR 0.87 (0.82-0.93, per 30 g/d), both nonlinear.
[@schwingshackl2017mort]
[@schwingshackl2017t2d] By contrast
**refined grains are essentially null** everywhere the series looks (mortality 0.99, T2D 1.01, CHD
1.01) — the whole-vs-refined contrast on this page is exactly what the matrix reproduces — and
**legumes are weak-to-null** (mortality 0.96 NS, T2D 1.00, CHD 0.96 NS; one protective adiposity
cell, RR 0.88, single study).
[@bechthold2019]
[@schlesinger2019]
Full cross-outcome placement -> [[Food Groups and Health Outcomes - A Dose-Response Matrix]].

<div class="recent-update" data-last-updated="2026-08-28"></div>

## The pulses G gap gets its dedicated SR+MA — cohort-null on events, benefit on risk factors `[2026-08-28, Thorisdottir]`

The G gap above ("the wiki cannot currently answer whether pulses help, harm or do nothing at
realistic intakes") now has the first source that is *about legumes* rather than mentioning them:
Thorisdottir 2023, the legume SR+MA commissioned for the NNR2023 update. It pooled **47 studies —
31 prospective cohorts (2,081,432 participants, «generally low legume consumption») plus 14 crossover
RCTs, one parallel RCT and one non-randomized trial** — and separates the two evidence classes ESC ran
together (surrogate vs hard outcome).
[@thorisdottir2023legume]

**The cohort arm is null on every hard endpoint** (high-vs-low legume intake, random-effects RR):

| Outcome | RR (95% CI) | I2 | Reading |
|---|---|---|---|
| Total CVD | 0.95 (0.86, 1.06) | 41% | null |
| CVD mortality | 1.03 (0.89, 1.20) | 48% | null |
| Total CHD | 1.00 (0.95, 1.05) | 0% | null, tight |
| CHD incidence | 0.99 (0.94, 1.05) | 0% | null, tight |
| Total stroke | 0.98 (0.91, 1.05) | 16% | null |
| Stroke incidence | 0.99 (0.91, 1.09) | 34% | null |
| T2D incidence | 0.90 (0.77, 1.06) | 88% | null, very heterogeneous |

[@thorisdottir2023legume]

**«No clear dose-response association was found for any of the outcomes»**, and the intake range is
narrow by construction — Nordic mean legume intake is **\~12 g/day**, cohort exposure contrasts sit
around that, so this is a null estimated across a **low, compressed exposure range**, not across the
120-150 g/day the RCTs used. The T2D estimate carries I2 = 88%: half the ten T2D cohorts reported a
significant inverse association, one (Bazzano) a significant *positive* one, and the pooled 0.90 washes
them out.
[@thorisdottir2023legume]

**The RCT arm — the evidence limb the cohort-only DIfE/Boeing series structurally lacks — shows benefit
on risk factors** (legume intervention vs control, weighted mean difference, \~120-150 g/day dry weight):

> «The summary effect sizes (Fig. 5) showed significantly decreased TC (-0.22 mmol/L, 95% CI, -0.32,
> -0.13, I2 = 75%), LDL-cholesterol (-0.19 mmol/L, 95% CI, -0.27, -0.11, I2 = 52%), fasting glucose
> (-0.19 mmol/L, 95% CI, -0.33, -0.05, I2 = 83%), and HOMA-IR (-0.30, 95% CI, -0.60, -0.00, I2 = 96%)
> with legume interventions com­ pared with controls, but insignificant effects on HDL-C, TG, and
> insulin.»
> [@thorisdottir2023legume]

**Type-B disaggregation — the LDL benefit is legume-general, the glycemic benefit is soynut-specific.**
Heterogeneity «decreased when separated by type of legumes... excluding the soynut trials removed
nearly all heterogeneity.» With soynut trials excluded, the lipid effect **survives** (LDL-C -0.15
mmol/L, 95% CI -0.21, -0.09, I2 = 5%; TC -0.17, 95% CI -0.25, -0.09, I2 = 31%) while the **glycemic
effect collapses to null** (fasting glucose -0.09, 95% CI -0.19, 0.01, I2 = 50%; HOMA-IR 0.01, 95% CI
-0.01, 0.03, I2 = 0%). The glycemic movements were «only seen in RCTs from Iran on postmenopausal
women with MetS consuming 30-35 g/day soynuts» — a single population and legume form.
So "legumes lower blood sugar" is not supported for legumes-in-general; "legumes lower LDL" is.
[@thorisdottir2023legume]

**Type-F refinement of ESC's bare sentence.** ESC stated that a single daily portion of pulses lowers
LDL-C by 0.2 mmol/L and «is associated with a lower risk of CHD» (the full verbatim is quoted in *The
pulses gap gets a first number* above) — a surrogate limb with a number and a hard-outcome limb without
one. Thorisdottir lets the wiki grade each:

- **LDL limb — corroborated with an interval.** ESC's bare -0.2 mmol/L is matched by a pooled RCT MD of
  -0.19 mmol/L (95% CI -0.27, -0.11); the food-general form (soynut-excluded) is -0.15 (-0.21, -0.09).
  ESC's point estimate now carries a confidence interval and a studied dose (\~120-150 g/day, well above
  the "single portion" phrasing). **This is F, not E** — see the independence note below.
- **CHD limb — NOT supported.** ESC's «associated with a lower risk of CHD» meets a **dedicated pooled
  cohort estimate of RR 1.00 (0.95, 1.05), I2 = 0%** — the tightest null in the table. The associational
  half of ESC's sentence does not survive a purpose-built meta-analysis; the surrogate moved, the event
  did not.

**The honest composite (type A) — a surrogate-vs-outcome gap, stated by the source itself.** The overall
WCRF-criteria grade was **«limited – no conclusion»**, and the authors draw exactly the split the wiki's
surrogate discipline predicts:

> «Legume consumption was not found to influence risk of CVD and T2D in healthy adult pop­ ulations with
> generally low legume consumption. However, protective effects on risk factors, seen in RCTs, lend some
> support for recommending legume consumption as part of diverse and healthy dietary patterns for
> prevention of CVD and T2D.»
> [@thorisdottir2023legume]

So the gap **narrows, it does not close**: legumes move LDL-C at RCT doses (robust, low-heterogeneity,
legume-general) and show **no harm and no measured benefit** on hard CVD/T2D events across the achievable
low-intake range — with the surrogate-to-outcome transmission unproven, `[[Surrogate Outcomes]]` the open
link. Blood pressure got **«no conclusion»** (data too limited). `confidence:` stays **low**.

**Type-F, NOT type-E independence — shared team and shared cohort base.** Thorisdottir is the NNR2023
Systematic Review Centre — the **same group** that produced the DIfE/Boeing-adjacent NNR SRs and the
Ramel white-meat SR on this vault — and its cohort pool overlaps the DIfE/Boeing series' primary studies
(EPIC, ARIC, NHS/HPFS, PREDIMED cohorts recur). A shared team and a shared trial/cohort base **defeat E
by construction**: this is not a second independent witness raising confidence on the cohort nulls, it is
the **same evidence appraised for a dedicated question**. Its value is F — it **adds the RCT risk-factor
arm the cohort-only matrix could not carry**, and refines ESC's undivided sentence — not E-corroboration
of the cohort nulls. No `[E-independent]` tag; the cohort-null agreement with DIfE/Boeing is shared-source,
not convergent-route.


**Gaps that remain (G).** No dose-response at any intake, so a minimum effective dose is undefined; the
cohort range is compressed near the Nordic \~12 g/day mean, so the events null is **weak at the intakes a
Nordic eater would reach and uninformative about the 120-150 g/day RCT dose**; blood pressure unconcluded;
and the surrogate-to-hard-outcome link for the LDL benefit is assumed, not shown.
Full cross-outcome placement -> [[Food Groups and Health Outcomes - A Dose-Response Matrix]].

## References

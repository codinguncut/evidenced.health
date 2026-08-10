---
type: framework
question: How much free sugar, and which outcome is the limit actually protecting?
aliases: [Free Sugars, Added Sugars, Sugar Intake, Sugars, WHO Sugars Guideline, 10% Energy Sugars]
authors: [World Health Organization (org); European Food Safety Authority (org)]
sources: [WHO - Sugars Intake 2015, Te Morenga - Dietary Sugars and Body Weight 2013, Moynihan - Effect of Sugars on Dental Caries 2014, SACN - Carbohydrates and Health 2015, NNR - Nordic Nutrition Recommendations 2023, WHO - Non-Sugar Sweeteners 2023, Qin - Sweetened Beverages Obesity Diabetes Meta-Analysis 2020, EFSA - Dietary Sugars Upper Intake Level 2022]
cluster: sugars-sweeteners
nucleus: true
confidence: medium
relationships:
  related_to:
    - Non-Sugar Sweeteners
    - Sodium Intake and Blood Pressure
    - What Kind of Evidence Sits Behind a Nutrient Recommendation
    - Energy Adjustment and What a Diet Coefficient Means
    - Upgrading Observational Evidence
    - Certainty of Evidence vs Strength of Recommendation
created: 2026-07-26
updated: 2026-08-06
nosplit: 696@single-exposure nucleus (one how-much-free-sugar-which-outcome question); length is four guidance families accreted on one decision, not multiple decisions
self_critiqued: 2026-08-06
---

WHO 2015. The headline surprise is **which outcome the limit is protecting**: not body weight, and not
cardiometabolic disease. **Dental caries.**

## The recommendations

> "WHO recommends a reduced intake of free sugars throughout the lifecourse (strong recommendation)."
> "In both adults and children, WHO recommends reducing the intake of free sugars to less than 10% of
> total energy intake (strong recommendation)."
> "WHO suggests a further reduction of the intake of free sugars to below 5% of total energy intake
> (conditional recommendation)."
[@who2015]

And what each rests on, in WHO's own words:

> "The recommendation to limit free sugars intake to less than 10% of total energy intake is based on
> **moderate quality evidence from observational studies of dental caries**."
> "...to less than 5% of total energy intake is based on **very low quality evidence from ecological
> studies** in which a positive dose-response relationship between free sugars intake and dental caries
> was observed at free sugars intake of less than 5% of total energy intake."
[@who2015]

The general lifecourse recommendation is **strong with no single GRADE rating attached to it** — WHO
grades the underlying outcomes rather than that recommendation (see the *totality of evidence* quote
below, which names the ratings for body weight and caries).

## The exposure is narrower than "sugar"

> "Free sugars include monosaccharides and disaccharides added to foods and beverages by the
> manufacturer, cook or consumer, and sugars naturally present in honey, syrups, fruit juices and fruit
> juice concentrates."
[@who2015]

**Excluded:** intrinsic sugars («incorporated within the structure of intact fruit and vegetables») and
milk sugars (lactose, galactose) -- on the stated ground that "there is no reported evidence of adverse
effects" of either. Fruit juice is **in**; whole fruit is **out**. The 2015 definition also widened the
2002 one by adding "and beverages" and "and fruit juice concentrates", while parts of the evidence base
date from 1959 and measured *total* sugars.

## Body weight — the effect is energy, not sugar

| Contrast | Effect (95% CI) | Design | Certainty |
|---|---|---|---|
| Reduced free sugars, adults, ad libitum | **0.80 kg lower** (0.39 to 1.21) | 5 RCTs | Moderate |
| Increased free sugars, adults | **0.75 kg higher** (0.30 to 1.19) | 10 RCTs | Moderate |
| **Isoenergetic exchange of free sugars for other carbohydrate** | **0.04 kg (-0.04 to 0.13) — null** | 11 trials | *no GRADE profile* |
| Reduced sugars, children | SMD 0.09 (-0.14 to 0.32) -- null | 5 RCTs | Moderate |
| Highest vs lowest SSB intake, children | OR 1.55 (1.32 to 1.82) | 5 cohorts | Low |

[@who2015]

**The third row is the load-bearing one, and it is the one that gets dropped when the 10% figure is
quoted on its own.** Swap free sugars for other
carbohydrate at equal energy and body weight does not move: 0.04 kg, interval -0.04 to 0.13. So the
weight effect of free sugars, on WHO's own evidence, is **an energy effect rather than a
sugar-specific one** -- exactly the substitution logic of
[[Energy Adjustment and What a Diet Coefficient Means]]: *"reduce sugars"* and *"reduce sugars and
replace the calories with other carbohydrate"* are different interventions with different answers.
**WHO draws this conclusion itself**, in the Remarks: *"The excess body weight associated with free
sugars intake results from excess energy intake."* So the reading is the guideline's own, not an
inference from its table.
[@who2015]

**Note what this does and does not license.** It bears on *body weight only*. Caries is
sugar-specific by mechanism, and the isoenergetic swap says nothing about it.

**And the primary review bounds the mechanism claim further than the guideline's rendering does.**
Te Morenga calls energy imbalance *"**a major**
determinant"*, then immediately: *"However, other less direct mechanisms independent of energy balance
have been proposed"* — naming fructose/uric-acid and ectopic-fat pathways that act *"independently of
an effect on body weight"* and declaring them *"beyond the scope of this review"*. So the isoenergetic
null licenses a claim about **the scale**, not about sugar's health effects at large. The wiki's own
heading above is written in the narrower form for this reason.
[@te2013]

### What the primary review adds to these rows

All five figures verified exactly against Te Morenga — the
transmission is numerically faithful. What the guideline's compression drops changes how much weight
they carry.

- **The two adult arms fail differently — neither is simply firmer.** The **reduction** estimate does
  not survive risk-of-bias exclusion (*"the effect estimate was no longer significant... (-0.81 kg,
  -1.69 to 0.07)"*, three of five trials dropped) but **strengthens** under a different exclusion:
  dropping the two trials that achieved almost no exposure contrast gives *"(-1.22 kg, -1.81 to
  -0.63)"*, and dropping the completer-only trials leaves it significant at *"(-0.81 kg, -1.41 to
  -0.21)"*. The **increase** estimate survives bias exclusion at *"(0.96 kg, 0.06 to 1.85)"* — a lower
  bound of 0.06 — but carries I2=82% and is the arm WHO downgraded for publication bias.
  **So the arms are exposed on different domains, and ranking one above the other is not supported.**
  Te Morenga's own verdict is that the estimates hold: *"sensitivity analyses showed that the trends
  were consistent and associations remained after these studies were excluded."*
  WHO's profiles encode an asymmetry of their own — reduce arm *"Serious risk of bias"* with no
  publication-bias downgrade, increase arm the reverse — so the guideline did not flatten this; the
  symmetric-looking table above is **this page's** summary, not WHO's.
- **Duration moves the effect five-fold.** *"(2.73 kg, 1.68 to 3.78)"* for the two trials beyond eight
  weeks versus *"(0.52 kg, 0.14 to 0.89)"* for the shorter ones, P<0.001 — against the authors'
  ceiling: *«few data from the studies lasted longer than ten weeks.»* The headline figures are
  short-term numbers.
- **Publication bias is handled differently by arm, and the reduce arm is the exposed one.** WHO
  downgraded the **increase** arm for it (*"The funnel plot is suggestive of publication bias;
  therefore, the evidence was downgraded"*) but not the **reduce** arm, where its profile reads
  *"Publication bias was difficult to ascertain, given that only five studies were included in the
  analysis. The evidence was not downgraded for publication bias."* Te Morenga pooled all 15 ad-libitum
  trials **precisely because** *«asymmetry cannot readily be assessed with 10 or fewer studies»*, and
  in that pool Egger's was significant (P=0.001) with fixed-effects attenuating 0.78 kg to
  *"(0.42 kg, 0.28 to 0.56)"*. **Note the quantity:** the 0.78 -> 0.42 attenuation is the 15-trial pool,
  not the 5-trial 0.80 kg row. So the honest statement is that the reduce arm's certainty was not
  downgraded for a bias its own review judged unassessable at that sample size.
- **The child RCT null is an ADHERENCE null, not an efficacy null** — and this changes what it means.
  Four of the five trials failed to achieve an exposure contrast (8-10 g/day, 0.1 glasses/day, 56
  mL/day); the one **provision** trial achieved 75 g/day vs 12 g/day. *"adherence to dietary advice...
  was poor."* **The principle, stated symmetrically:** an advice trial estimates the *advice-plus-
  adherence package*, so where the exposure contrast fails the null is uninformative about the exposure
  — and where it succeeds, the estimate is still an estimate of advice. That cuts both ways here: four
  of the five *adult reduction* trials were also advice-based, and Te Morenga frames the headline
  accordingly — *"advice to reduce free sugars was associated with an average 0.80 kg reduction"*.
  -> [[Framing a Decision Question]]
  Two post-census **provision** trials (de Ruyter; Ebbeling) then **confirmed** the effect where
  provision replaced advice — the positive counterpart of this same point. The durability caveat
  attaches to one of them: *"after a further year's follow-up with no further intervention, the
  difference between the groups was no longer significant."*
- **The child cohort signal is a BEVERAGE signal.** *"Fourteen of these 15 studies reported the sugars
  exposure as a sugar sweetened beverage"*, and outside the SSB pool *"there was no evidence of
  association between increased sugars and adiposity."* Reading OR 1.55 as support for a *free-sugars*
  cap generalizes past what the review's own vote-count will carry.
- **The 10% figure is not located by the weight evidence** — *"compatible with a recommendation to
  restrict intake to below 10% total energy, currently available data did not allow formal
  dose-response analysis"*, with a null metaregression (0.02 kg, -0.03 to 0.08; P=0.392). This
  **confirms rather than contradicts** what this page already held: the threshold is carried by the
  caries evidence. The authors attribute the failed dose-response to measurement error ->
  [[Measurement Error in Dietary Assessment]].

[@te2013]

**Scope limit worth carrying, which both sources state:** weight-loss interventions were excluded by
design — Te Morenga, *"because the ultimate aim of the review was to facilitate the development of
population based recommendations rather than nutritional recommendations for the management of
obesity"*; WHO, *"Trials that were specifically designed to achieve weight loss were excluded."* So
none of this speaks to sugar reduction as an obesity *treatment*, only as population guidance.

## Dental caries — a patient-important outcome with no trial behind it

**First, the correction to a natural misreading:** caries is what the *threshold numbers* are pinned to,
but it is not the sole basis. WHO states the recommendations "were based on the **totality of evidence**
reviewed regarding the relationship between free sugars intake and **body weight** (low and moderate
quality evidence) **and** dental caries (very low and moderate quality evidence)."
[@who2015]
Body weight and caries are **both** graded critical outcomes at moderate certainty in the same table --
and the body-weight row has 5 RCTs and a pooled estimate, which the caries row does not.

Caries is a genuine patient-important outcome, not a surrogate. **What carries the moderate rating is
consistency, and it is striking**: *"42 out of 50 of those in children and 5 out of 5 in adults
reported at least one positive association"*; *"7 out of 8 studies reported higher dental caries with
higher sugars intake"*; and the review names it the headline strength — *"An important strength in this
review is the consistency of the data, despite methodological weaknesses in many studies."* Against
that, the evidence base is unusual:

- **"No RCTs were identified that met the inclusion criteria"** for children; **"No RCTs or longitudinal
  cohort studies were identified"** for adults.
- **The guideline reports no pooled caries estimate at all.** The review does report crude
  cross-design pools, which the guideline drops: *«SMD for DMFT 0.82 (95% CI 0.67, 0.97)»*, and a risk
  ratio for caries prevalence. So a magnitude exists; it just never reaches the guideline.
- Certainty reached **moderate** only by an **upgrade for large effect size** from the observational
  floor of low ([[Upgrading Observational Evidence]] -- one of the three narrow exits, exercised here).
- The **<5% recommendation rests on 3 ecological studies** (correlations r=0.6-0.8, intake falling from
  <15 to <10 kg/person/year), rated very low, plus an explicitly non-evidential argument: that caries
  effects are «cumulative, tracking from childhood to adulthood».

[@who2015]

**So a strong recommendation (<10%) rests on unpooled observational evidence upgraded by judgment, and
a conditional one (<5%) on ecological correlation.** Both are honestly labelled by WHO; neither label is
visible where the numbers get quoted.

### What the primary review adds — and it changes what the thresholds mean

Reading Moynihan, the WHO-commissioned review these caries
figures come from, recovers four bounds the guideline's rendering does not carry.

- **The two thresholds rest on evidence with different fluoride standing.** For `<10%`: *"All of the
  cohort studies used in the GRADE analysis comparing free sugars intake > 10% E and < 10% E considered
  fluoride exposure."* For `<5%`: *"The national survey data used in the GRADE analysis comparing
  sugars availability < 5% E and > 5% E were **obtained from non-fluoridated populations**."*
  **WHO states this too** — *"All three population studies were conducted in Japan on children with low
  fluoride exposure"* — so it is not an omission, and both bodies then argue the transfer holds because
  *"despite the protection offered by fluoride, the relationship between sugars and dental caries
  remains"* (Moynihan, 11 studies cited).
- **But on the GRADE indirectness domain they disagree, and this one IS joined.**
  - Moynihan: the `<5%` studies *"were undertaken in populations with low fluoride exposure, and thus
    **show indirectness in extrapolation** to populations with good fluoride exposure."*
  - WHO's `<5%` profile footnote: *"These studies were undertaken in populations with low fluoride
    exposure; however, there is **no expectation of a difference in effect** when extrapolating to
    populations with good fluoride exposure."*

  Same evidence, same question, opposite domain judgments — the commissioned review rates indirectness
  present, the guideline rates it absent. **The not-joined checks do not fire**: identical scope, unit
  and studies, and both positions are their holders' own GRADE-domain statements rather than one
  chapter of a multi-position author.
  **The bottom line nonetheless agrees** — both rate the `<5%` evidence *very low* overall — so this is
  a disagreement about *which domain carries the downgrade*, not about how confident to be. Recorded as
  a distinction with a live disagreement inside it, not filed as a page-level *tension*, because
  nothing downstream of it changes.
  **And it is direct evidence against an over-strong reading of the section below**: a commissioned
  review that contradicts its commissioner on a domain rating is not the same witness as it.
- **Hitting the target does not eliminate the outcome.** *"even the groups with free sugars intake
  < 10% E had some caries (in 1/5 studies, children were free of cavities)"*, and *"it is not correct
  to say that it will prevent caries activity in all age groups across the life course."*
- **The outcome is measured late, which biases toward understating low-intake harm.** *"in most
  studies, dental caries was diagnosed at the cavitation level - a late stage in the disease
  process... **Pre-cavitation damage may occur at levels of sugars intake below that associated with
  low/no cavities**."*
- **Publication bias could not be assessed at all**, and funding is mostly undisclosed: *"In the
  absence of RCTs with which to conduct funnel plots and limited possibility to combine data,
  publication bias was difficult to assess. Of the 8 cohort studies included in the GRADE analysis,
  only 2 declared source of funding."* **WHO's four caries profiles carry no publication-bias footnote
  at all** — the domain is simply not assessed there, which is a larger gap than an under-reported one.

**Adults are near-unstudied — stated by both, though the recommendation's phrasing does not repeat
it.** *"The majority of
studies identified were conducted in children, while only 4 studies were of adults"* — and **no adult
cohort study exists**. The adult conclusion is carried from child cohorts on a stated biological
warrant (same etiology, disease tracking to adulthood), a reasoned indirectness non-downgrade rather
than a skipped one. Same move as WHO's LDL non-downgrade on [[Surrogate Outcomes]] — **and NOT
independent evidence of it**, since both are the same body's process.

[@moynihan2014]

**None of this is a second witness.** See *Why these are one source, not three* below.

## The second guidance family arrives — and the 5% agreement dissolves

SACN is the independent reading gate 4 said was missing. It agrees
with WHO's `<5%` figure. **That agreement is not corroboration, and the reason is unusually clean: the
two bodies excluded each other's evidence.**

| | WHO 2015 | SACN 2015 |
|---|---|---|
| `<5%` free sugars | **conditional** recommendation | **primary, unqualified** recommendation |
| `<10%` tier | strong | **does not exist** — one tier only |
| Evidence for the `<5%` | **three ecological studies**, very low quality | ecological studies **excluded by design** |
| Instrument | GRADE | own framework — **GRADE evaluated and rejected** |
| Warrant | dental caries | dental caries **and total energy intake** |
| Strength grades on recommendations | strong / conditional | **none — no strength axis at all** |

**The decisive pair of quotes.** SACN's inclusion rule: *"Due to the wealth of data available and
because of the concerns around their limitations, case-control, cross-sectional and ecological studies
were not considered. Only prospective cohort studies and randomised controlled trials were considered
for this report."* And on WHO's caries review specifically: it *"included different types of study
designs such as non-randomised trials, population and cross-sectional studies which were **not included
in this report due to concerns of bias**."*

**So SACN reaches the threshold WHO could only reach at *very low* certainty, by a route that discards
WHO's evidence for it.** Two arguments landing on one number.

- **This is NOT a type-E convergence.** Independent backing requires the same claim reached by
  compatible independent routes; here the routes are *mutually exclusive by construction*. Counting
  WHO and SACN as two witnesses for `<5%` would be the laundering the guard exists to catch — and it
  would be an easy mistake, because the surface facts (different country, different body, different
  instrument, same number) all point the wrong way.
- **What it IS: a genuine *tension*-grade finding about the number's warrant.** The `<5%` figure is
  robust to method in a way *neither body alone* can show — but only if you accept that two
  incompatible evidence standards both point there. That is weaker than corroboration and stronger
  than a single very-low-quality result.
- **The partial-independence caveat, checked at acquisition:** SACN cites Te Morenga 7 times and
  Moynihan 5. It read WHO's commissioned reviews — it **distinguishes** them on inclusion criteria
  rather than disputing their findings. So the reading is independent by *rule*, not by ignorance.

[@sacn2015]

**And SACN adds a warrant WHO does not have.** Its 5% rests jointly on caries *and* total energy
intake, with the energy limb carried by **randomised trials** (*"increasing or decreasing the
percentage of total dietary energy as sugars when consuming an ad libitum diet leads to a corresponding
increase or decrease in energy intake"*) — where WHO's threshold is caries-warranted. Note the energy
argument is **sugars-specific**: in the same report total carbohydrate is energy-neutral.
**This is the strongest evidential position the `<5%` figure has anywhere in the corpus, and it is
SACN's, not WHO's.**

## A third guidance family — and it sets no 5% tier at all

NNR is the third Tier-A body the wiki holds on this
question, and it lands on neither of the two positions above.

> «Intake of added and free sugars should be below 10 E%, and preferentially lower»
> [@nnr2023]

**Parameter table** (op-weave 2a) — built first, because the construct looked incommensurable:

| Parameter | NNR 2023 | WHO 2015 | SACN 2015 | Same quantity? |
|---|---|---|---|---|
| Regulated construct | «added and free sugars» | «free sugars» | «free sugars» | **NNR=WHO yes; SACN NO** — see the two definition rows |
| NNR's definition | glossary: *Free sugars* = «Added sugars plus sugars naturally present in honey, syrups, fruit juices and fruit juice concentrates» (chunk 01) | «monosaccharides and disaccharides added to foods and beverages by the manufacturer, cook or consumer, and sugars naturally present in honey, syrups, fruit juices and fruit juice concentrates» | — | **YES** — NNR's glossary is WHO's **2015** definition |
| SACN's definition **`[CORRECTED 2026-07-28]`** | — | (2015 form, above) | «all monosaccharides and disaccharides added to foods by the manufacturer, cook or consumer, plus sugars naturally present in honey, syrups and **unsweetened fruit juices**» (S.17) | **NO** — this is WHO's **2002** wording; **no fruit juice concentrates** |
| Denominator | «E%: Energy percentage, i.e., percentage of total energy intake» (chunk 01) | "% of total energy intake" | %TE | **YES** |
| Upper threshold | **<10 E%** | **<10%**, strong | no 10% tier — one tier only | **YES** where both exist |
| Lower tier | **none set** — «preferentially lower», unquantified | **<5%**, conditional | **<=5%**, primary | comparable: all three address it |
| Primary warrant | **nutrient density / adequacy** | **dental caries** | **caries + total energy intake** | **NO — three different warrants** |
| Strength grade on the recommendation | **none** | strong / conditional | none | — |

### `[CORRECTED 2026-07-28, SACN revisit]` — "free sugars" names TWO constructs, not one

**The 2026-07-27 version of this table filled the construct row with a flat YES for all three bodies.
That was wrong, and wrong in the direction that made a comparison look cleaner than it is.** NNR's
definition was checked against WHO's and matched; **SACN's was never checked at all** and was assumed
to follow because it uses the same two words.

SACN adopts WHO's **2002** wording, and it does so having quoted the 2015 form in the same report:

> «The 2002 FAO/WHO Expert Consultation defined the term 'free sugars' as all monosaccharides and
> disaccharides added to foods by the manufacturer, cook or consumer, plus sugars naturally present in
> honey, syrups and fruit juices (WHO, 2003). In 2015, the term was elaborated to 'free sugars include
> monosaccharides and disaccharides added to foods and beverages by the manufacturer, cook or consumer,
> and sugars naturally present in honey, syrups, fruit juices and fruit juice concentrates (WHO, 2015).»
> [@sacn2015]

And then recommends the earlier one for UK adoption:

> «The definition for 'free sugars' be adopted in the UK. This comprises all monosaccharides and
> disaccharides added to foods by the manufacturer, cook or consumer, plus sugars naturally present in
> honey, syrups and unsweetened fruit juices.»
> [@sacn2015]

**The substantive gap is fruit juice concentrates.** SACN's adopted numerator omits them; WHO's 2015
and NNR's both include them. Fruit juice concentrate is the sweetener of choice in products marketed
as *no added sugar*, so this is not a boundary case — it is a category that moves between counted and
uncounted depending on whose definition is in force.

**Two things this does NOT license, both of which the wording invites:**

- **Do not read «added to foods» as excluding beverages.** SACN analyses sugar-sweetened beverages as
  a free-sugars exposure throughout the report, and WHO itself calls the 2015 change an
  *«elaborated»* form rather than a widening. On the beverage limb this reads as wording, not
  substance.
- **Do not infer that SACN chose the older definition deliberately, or for a reason.** SACN quotes both
  and comments on neither. **Whether the choice was considered is simply not in the record**, and the
  source page's original note says so. An unexplained divergence is a `G`-gap, not a process defect.

**What survives, and it is narrower than yesterday's claim:** NNR and WHO regulate the same construct
on the same denominator; **SACN regulates a narrower one**. So the NNR-vs-WHO threshold comparison
below stands as built, and **any three-way comparison must carry this asymmetry explicitly.**

**This is a type-B disambiguation in its textbook form** — one term, *«free sugars»*, naming at least
two distinct objects across bodies that all cite each other, with the difference nowhere flagged by any
of them. -> [[Is the Food Category Doing Any Work]]

**And it bears on the `<5%` agreement below.** SACN's `<=5%` and WHO's `<5%` are numerically identical
on **different numerators** — SACN's excludes juice concentrates. The existing section argues that
agreement is not corroboration because the two bodies excluded each other's *evidence*; **it is also
not corroboration because they are not measuring the same quantity.** That is a second, independent
reason, and it was missed when this page had only two guidance families on it.

**The construct row is the one that had to be checked, and it reverses this page's earlier reading.**
The NNR source page recorded that NNR defines neither term here, treating the comparison as a
same-quantity failure. **That was wrong**: NNR's front-matter glossary defines *free sugars* in
essentially WHO's words, and since added sugars are a subset of free sugars under that definition, the
phrase "added and free sugars" has the extension *free sugars*. The denominators match too. **So the
three thresholds are comparable, and the divergence between them is real rather than definitional.**
`[@nnr2023]` `[searched: "monosaccharide"/"disaccharide"/"naturally present in
honey"/"definition of sugar"/"intrinsic sugar" across all 10 NNR chunks]`

**The three-body picture, now that they can be compared:**

| | `<10%` tier | `<5%` tier | Warrant |
|---|---|---|---|
| **WHO** | strong | **conditional** | caries |
| **SACN** | **absent** | **primary** | caries + total energy |
| **NNR** | **the only tier** | **absent** | nutrient density |

**Read the direction and the threshold separately — they behave differently.** All three bodies point
the same way (less is better: WHO's conditional tier, SACN's primary one, NNR's «preferentially
lower»), so this is **not** a disagreement about direction. **What diverges is where a number gets
attached, and on what warrant.** Per the telos, that is itself the finding: where guidance families
place their thresholds differently on the same evidence, the evidence does not determine the number,
and the wiki's job is to show why rather than pick a side.

**NNR's warrant is the genuinely new one, and it is not a dose-response argument at all.** Box 7 leads
with adequacy, not disease:

> «Restricting the intake of added and free sugars is important to ensure adequate intakes of
> micronutrients and dietary fibre (nutrient density) as well as to support a healthy dietary pattern.
> This is especially important for children and persons with a low energy intake.»
> [@nnr2023]

Caries appears second (*«Frequent consumption of foods with added and free sugars should be avoided to
reduce the risk of dental caries»*) and environment third. **So NNR's 10% is a displacement threshold —
sugar crowds out micronutrients and fibre — where WHO's is a caries threshold and SACN's is caries plus
energy.** **NNR stratifies its own warrant** — «especially important for children and persons with a
low energy intake» — which follows from the displacement mechanism: a fixed *proportion* of energy
from sugar crowds out proportionally more of a smaller nutrient budget. **A caries threshold carries no
such stratification**, because caries risk tracks frequency and exposure rather than the surrounding
energy budget.
`[@nnr2023]`

**And NNR names an evidence gap exactly where the other two set their second tier.** Its carbohydrate
*Main data gaps* block reads:

> «There is a lack of studies on carbohydrates and health effects in pregnancy. There is also a lack of
> a standardized definition for dietary sugars (free and added sugars) and  a lack of long-term studies
> measuring the impact of reducing intake of free and added sugars (especially below 10 E%)»
> [@nnr2023]

**Two things follow, and only the first is NNR's.**

- **NNR states the below-10 E% evidence is thin** — the region in which WHO's conditional `<5%` and
  SACN's primary `<=5%` both sit. That is NNR's own words about the evidence base.
- **NNR does not say this is why it declined a lower tier.** The adjacency is suggestive and the
  inference is tempting, but NNR never joins them, so the causal reading is the wiki's, not the
  report's, and is marked as such.
  [inferred from @nnr2023]
- **Note the second-order irony, which is real and worth keeping:** the same data-gaps sentence flags
  *«a lack of a standardized definition for dietary sugars (free and added sugars)»* as a field-level
  gap, while NNR's own glossary supplies a definition that matches WHO's. Those are compatible — a body
  can use a definition the field has not standardized — but it means the comparability established in
  the table above is a property of **these three documents**, not of the literature they draw on. A
  fourth body could use the same words for a different construct.
  -> [[Is the Food Category Doing Any Work]]

**No type-E is available here, and the reason is documented rather than assumed.** NNR read the other
two: it cites *«WHO, 2015»* and *«SACN, 2015»* by name in its carbohydrate chapter, summarising WHO's
two tiers accurately (*«it was recommended to limit free sugars intake to less than 10 E%. In addition,
a conditional recommendation was set to limit the intake of free sugars to less than 5 E%»*). **A body
that read both incumbents and chose a third position is a genuine third judgment on the same evidence —
but it is not an independent witness to that evidence.** The divergence is informative about the
*appraisal*; it adds no new primary data.
[@nnr2023]

**What this does NOT establish.** NNR's silence above 10 E% is not evidence that the `<5%` tier is
wrong — NNR neither tested nor rejected it. Three bodies disagreeing is a statement about the state of
the appraisal, not a verdict on the number.

## Why WHO and its own reviews are one source, not three

The wiki now holds WHO Sugars 2015 plus both reviews behind it. **They are one witness for the
appraisal and the recommendation — and NOT one witness for the primary evidence.** That split is the
whole of the finding, and an earlier draft of this section overstated it into a flat "one source, not
three".

**Parameter table** (op-weave 2a):

| Parameter | Te Morenga 2013 | Moynihan 2014 | WHO Sugars 2015 | Independent? |
|---|---|---|---|---|
| Who set the review question | WHO NUGAG subgroup | WHO NUGAG subgroup | itself | **no — common origin** |
| Who produced the GRADE ratings | authors, *"then refined by the WHO... (NUGAG) Subgroup"* | authors, *«further refined with the guidance by the NUGAG Subgroup»* | publishes them **bylined to the review authors**, with NUGAG input | **no — co-produced** |
| Cross-review GRADE lineage | assisted Moynihan's tables | thanks *"Prof. Jim Mann and Dr. Lisa Te Morenga... for their assistance with the GRADE summary tables"* | — | **no — the reviews are linked to each other, on this limb only** |
| Funding | *"WHO provided some funding"* | *"funded by Newcastle University's Centre for Oral Health Research"* — WHO commissioned but did not fund | n/a | **mixed** |
| Guideline text vs review text | not checked | near-verbatim reuse (indirectness passage) | reproduces it | **no — textual reuse** |
| Underlying studies | 38 cohorts + 30 trials (weight) | 55 studies (caries) | the whole *graded* base is these two reviews; the remarks cite further analyses | **largely subset** |
| **Primary data collections** | independent trials/cohorts | independent studies, **disjoint from Te Morenga's** | collected none | **YES — commissioning does not touch the trials** |

**The last row is the one that bounds the conclusion**, and the first draft of this table omitted it.

- **No type-E is bankable across these three on the appraisal** — question-setting, GRADE production
  and text are shared, so agreement on a certainty rating is one assessment reported three times.
- **But the reviews are not one witness with each other on the evidence.** They address **disjoint
  outcomes** (weight vs caries) over disjoint literatures with different confounding structures. The
  honest reason E is unavailable between them is **disjointness — there is barely a shared claim to
  converge on** — not lineage. Their one documented mutual dependency is narrow and runs through the
  GRADE tables (row 3), not the data.
- **And the dependence is partial, which is why divergence is informative.** The two disagree on the
  `<5%` indirectness domain (above): a commissioned review that contradicts its commissioner is
  demonstrably not the same witness as it. **A flat "one witness" claim would have made that
  disagreement impossible, and it happened.**
- **What the pairing DID bank is F** — the reviews bound and refine what the guideline compresses (the
  reduce arm's bias exposure; the five-fold duration subgroup; the beverage-specific child signal; the
  energy-mediation carve-out; the crude caries pools). A refinement needs no independence.
- **The usable rule, stated at the width the evidence supports:** *a guideline and its commissioned
  reviews are one witness for the appraisal, the certainty ratings and the recommendation — never for
  the primary data, and not necessarily for each other.* The trap is real: every surface marker of
  independence is present (different authors, journals, years, outcomes) and the substantive ones on
  the appraisal limb are absent. -> [[Certainty of Evidence vs Strength of Recommendation]]

[inferred from @te2013; @moynihan2014; @who2015]

**What this does NOT establish.** It is not a criticism of WHO's process — commissioning reviews and
using their ratings is how guideline development is supposed to work, and WHO discloses it throughout.
The finding is about **how the wiki must count**, not about whether the guideline is sound.

## The companion guideline — do NSS help you hit this limit? `[2026-07-29, WHO NSS 2023]`

WHO's free-sugars limit prompts an obvious follow-on: use non-sugar sweeteners to get there? WHO's 2023
NSS guideline [@who2023nonsugar] answers no — «WHO suggests that non-sugar sweeteners not be used as a means of achieving
weight control or reducing the risk of noncommunicable diseases (conditional recommendation)»
(-> [[Non-Sugar Sweeteners]]). The two guidelines **chain** into the substitution decision; they do not
disagree.

| Parameter | WHO Sugars 2015 (this page) | WHO NSS 2023 | Same quantity? |
|---|---|---|---|
| Target exposure | free sugars intake | non-sugar sweeteners (a *route* to cutting free sugars) | **No** — different exposures |
| Recommendation | reduce free sugars, <10%E (strong) | do not use NSS for weight/NCD control (conditional) | **No** — complementary, not competing |
| Preferred sugar substitute | (not addressed) | water, unsweetened foods, whole fruit — NOT NSS | — |

**The join is a distinction, not a tension (not-joined check (ii): different scope).** WHO Sugars sets
the goal; WHO NSS rules on one *means* to the goal, and prefers water/fruit over the NSS route because a
sugar→NSS swap leaves «the overall quality of the diet … largely unaffected». No shared quantity is
compared, so nothing here is a *tension*.

**NON-INDEPENDENT — same body.** WHO NSS 2023 is the same organization as WHO Sugars 2015 (and shares the
NUGAG Subgroup and reviewer pool), so its agreement is **not** type-E independent corroboration — the same
counting rule as *Why WHO and its own reviews are one source, not three* above. It extends this page's
substitution frame; it does not add an independent backing.

## The beverage limb — SSB dose-response to cardiometabolic outcomes `[2026-08-06, Qin 2020]`

The body-weight rows above are the guideline's own free-sugars-%E evidence. The **beverage vehicle** —
sugar-sweetened beverages, the dominant free-sugars carrier and the exposure behind Te Morenga's child
cohort signal (OR 1.55) — now has an adult cardiometabolic dose-response, from a 39-cohort dose-response
meta-analysis. Per **250 mL/d increase** in SSB intake [@qin2020]:

| Outcome | SSB RR per 250 mL/d (95% CI) | Shape |
|---|---|---|
| Type 2 diabetes | **1.19 (1.13-1.25)** | linear (Pnon-lin 0.706) |
| Obesity | 1.12 (1.05-1.19) | linear (Pnon-lin 0.359) |
| Hypertension | 1.10 (1.06-1.14) | linear (Pnon-lin 0.510) |
| All-cause mortality | 1.04 (1.01-1.07) | linear (Pnon-lin 0.259) |

**Every SSB curve is monotone-linear over the studied range — no knee, no plateau**, a fresh instance of
the falsified knees-and-plateaus prior -> [[The U-Shaped Association Artifact]]. Two things this does and
does NOT license:

- **It is the ADDITIVE (ad-libitum) arm, not the isocaloric one.** Qin measures SSB *as consumed*, which
  adds liquid calories on top of the diet — so the positive dose-response is fully consistent with the
  isoenergetic-exchange **null** two sections up (0.04 kg when free sugars swap for other carbohydrate at
  equal energy). SSB harms **because it adds energy in a poorly-compensated liquid form** — the same
  reading the guideline's own weight evidence gives (WHO's Remarks attribute the excess weight to excess
  *energy* intake, quoted in the body-weight section above). The T2DM/hypertension/mortality limbs are new
  outcomes Qin adds; the direction is the energy story extended past body weight.
- **Association, not effect — the authors say so.** «the results should be interpreted cautiously because
  the present analyses were based on only cohort but not intervention studies», with residual confounding
  «cannot be ruled out» and self-reported exposure. So these are the observational limb of
  [[The Observational-Trial Discordance]], not a causal magnitude. The T2DM RR is the firmest (tight CI,
  19 cohorts) but still cohort-only.
- **Artificially-sweetened beverages carry a similar-sized positive association** (per 250 mL/d: T2DM
  1.15, obesity 1.21, mortality 1.06), which is the **reverse-causation candidate** — diet soda is
  chosen by the already-at-risk — and Qin runs no MR/reverse-causation check. Do not read the ASB
  association as an ASB *effect*; it is the artifact-suspect arm -> [[The U-Shaped Association Artifact]],
  [[Non-Sugar Sweeteners]].
`[@qin2020]`

## A fourth body sets NO number at all — EFSA's risk assessment could find no threshold `[2026-08-06, EFSA 2022]`

The three bodies above all attach a number (`<10%`, `<5%`, «preferentially lower»). **EFSA 2022, asked
for exactly a number, declined to give one** — and the reason is the interesting part, because it is
**not** disagreement about the evidence.

EFSA's task was a **UL risk assessment**: find the threshold below which sugar poses no risk. The UL is
«the maximum level of chronic daily intake ... judged to be unlikely to pose a risk of adverse health
effects», and its whole logic «is that a threshold can be identified below which no risk ... is expected
... and above which the risk ... increases». No such threshold was found:

> «A level of sugars intake at which the risk of dental caries/chronic metabolic diseases is not
> increased could not be identified over the range of observed intakes, and thus, a UL or a safe level
> of intake could not be set. ... the intake of added and free sugars should be as low as possible in
> the context of a nutritionally adequate diet.»
> [@efsasugars2022]

**Per-outcome certainty (added/free sugars), on RCTs of SURROGATE endpoints:** «moderate for obesity
and dyslipidaemia (> 50-75% probability), low for NAFLD/NASH and T2DM (> 15-50% probability) and very
low for hypertension (0-15% probability), based on data from RCTs which investigated the effect of
'high' vs. 'low' sugar intake on surrogate disease endpoints, i.e. body weight, liver fat, fasting
glucose, fasting triglycerides and SBP.» [@efsasugars2022] -> [[Surrogate Outcomes]].

### Is EFSA OPPOSED to WHO, or a different instrument? (attempt the contradiction first)

**Parameter table** (op-weave 2a) — because «WHO sets 10%» vs «EFSA sets nothing» looks like a clash:

| Parameter | WHO 2015 | EFSA 2022 | Same quantity? |
|---|---|---|---|
| Output | a public-health **recommendation / target** («recommends reducing ... to less than 10%») | a **UL / safe-level risk assessment** («a UL ... could not be set») | **NO** — a policy target vs a hazard threshold |
| Question answered | what pragmatic population goal to communicate? | is there a level below which no risk of adverse effects? | **NO** — different constructs |
| Instrument | GRADE | OHAT/NTP (US National Toxicology Program) | different appraisal systems |
| Direction on intake | reduce (strong `<10%`, conditional `<5%`) | reduce («as low as possible») | **YES** — both point the same way |
| A clean safe threshold exists? | not claimed — 10% is a communicable cut, not a «no-risk» floor (the page's caries reading above) | **explicitly could not be identified** | **YES** — neither asserts a safe floor |
| Target-setting in remit? | WHO sets it | «not under EFSA's remit» — «part of national nutrition policies ... individual EU Member States» | **NO** — different mandates |

**Verdict: a DISTINCTION, not a tension — the not-joined check (ii) fires (different construct /
purpose).** EFSA and WHO answer different questions. EFSA runs a **hazard characterisation** whose
output is a threshold-or-nothing, and it found nothing because the dose-response has no identifiable
no-risk point over observed intakes. WHO issues a **communicable public-health target**, which needs a
number a population can aim at whether or not a clean threshold exists. **On the substance they agree:
less is better, and there is no clean safe level.** EFSA even makes explicit that a UL «is not a
recommended level of intake» [@efsasugars2022] — so reading EFSA's «as low as possible» as *softer*
than WHO's 10%, or WHO's 10% as a *safe threshold* EFSA failed to endorse, is the descriptive-normative
category error in both directions -> [[The Descriptive-Normative Category Error]]. This is a
**standpoint** difference (telos divergence reason #1): EFSA firewalls target-setting *out* of its own
mandate, so the estimate and the recommendation are held by different bodies
-> [[Which Objective Moved This Recommendation]].

### What EFSA independently CORROBORATES — reached by a separate review

EFSA ran its own systematic reviews (49 RCTs; 104 publications on 66 cohorts) under OHAT/NTP, not GRADE.
On the **metabolic-disease limb** this is a genuinely independent appraisal route, and it lands on this
page's existing readings:

- **The energy-mediation core — corroboration of the appraisal, not an independent dataset.** EFSA:
  «Excess energy intake leading to positive energy balance and body weight gain appears to be the main
  mechanism by which the intake of dietary sugars may contribute to the development of chronic metabolic
  diseases» [@efsasugars2022], and prospective cohorts assessed in isocaloric exchange «do not support a
  positive relationship» with any metabolic or pregnancy endpoint [@efsasugars2022]. This is WHO's own
  isoenergetic-null reading (*«excess body weight ... results from excess energy intake»*, above) reached
  by a separate **appraisal route** — EFSA's own OHAT systematic review and databases. **No
  `[E-independent]` is claimed, and deliberately:** EFSA cites WHO 2015, and on the genuinely-*same*
  claim (energy mediation on body weight) the isocaloric sugar-exchange feeding trials it used overlap
  the small finite literature WHO used — so that limb is shared-source agreement, not independent
  backing. What is genuinely new is the **extension** past body weight to all metabolic diseases and
  pregnancy endpoints (type-F on the reach). The caries limb is separately non-independent: Paula
  Moynihan (author of WHO's caries review) is among the **authors** of the EFSA opinion.
- **The additive-vs-isocaloric split is EFSA's own.** SSBs, assessed «not keeping TEI constant», grade
  «high for obesity, T2DM, HTN and CVD (> 75-100% probability)» — far above the isocaloric %E grades —
  exactly the additive-arm reading the Qin section above gives. [@efsasugars2022]
- **The ASB confound, independently.** «It is unclear ... whether the risk of HTN and CVDs ... could be
  attributed to their sugar content because the relationship between ... artificially sweetened
  (sugar-free) beverages and incidence of HTN and CVDs was similar to, or stronger than, for SSBs»
  [@efsasugars2022] — the reverse-causation candidate Qin 2020 flagged, reached by a second body
  -> [[The Observational-Trial Discordance]], [[Non-Sugar Sweeteners]].
- **Dose-response shapes are monotone-linear** (SSB -> T2DM/HTN/CVD and FJ -> T2DM «positive and linear,
  with no evidence for non-linearity») [@efsasugars2022] — a fresh instance of the falsified knees-and-plateaus
  prior -> [[The U-Shaped Association Artifact]].

### EFSA sharpens the `<5%` question — the thinnest evidence sits exactly there

EFSA states the sub-10%E region is the least-evidenced: the relationship «could not be adequately
explored at levels of intake < 10 E% owing to the low number of RCTs available, and ... the uncertainty
about the shape and direction of the relationship at these levels of intake is higher than at intakes
≥10 E%.» [@efsasugars2022] **This is where WHO's conditional `<5%` and SACN's primary `<=5%` both sit.** It does
*not* say those tiers are wrong (EFSA declines all numbers), but it independently corroborates this
page's existing reading that the `<5%` region is carried by the weakest evidence — now from a fourth
body's own systematic review. [inferred from @efsasugars2022]

## Decision relevance

- **The 10% limit is a dental recommendation.** If someone's decision is about adiposity or
  cardiometabolic risk, the caries evidence does not transfer, and the weight evidence says the effect
  runs through energy.
- **Name the replacement.** Cutting sugar and replacing the calories with other carbohydrate moved
  weight by 0.04 kg [@who2015]. The realistic alternative determines the effect (telos layer 3).
- **Fruit juice sits inside the exposure and whole fruit outside it** -- a food-level distinction that a
  "reduce sugars" instruction loses entirely.
- **Ecological studies are the weakest design for an individual inference** (the ecological fallacy):
  the <5% threshold rests on three ecological studies rated *very low* by both the review and the
  guideline [@who2015] — the wiki's clearest live example of a widely-cited number whose own sources claim little
  for it.



## Limits

- 2015. Free-sugars/cardiometabolic outcomes beyond weight and caries are not covered here.
- No absolute effects: no risk differences, no baseline risk, no NNT anywhere. As with sodium, this
  **cannot be ranked against other exposures** without them.
- Two of eight caries cohorts measured *total* sugars, retained by inference from a correlation with
  added sugars -- exposure misclassification inside the body of evidence carrying the main
  recommendation.
- **The three-body comparison is an appraisal comparison, not an evidence comparison.** NNR read WHO
  and SACN; SACN read WHO's commissioned reviews. **No two of the three are independent witnesses to
  the primary data**, so agreement anywhere among them must not be counted as corroboration.



## Self-critique of the NNR addition `[run 2026-07-28, before commit]`

- **Over-claim: FOUND and fixed.** The first draft read *"three positions, three warrants — the
  guidance set does not converge."* **Too strong**: all three bodies agree on *direction* (less is
  better) and diverge only on where a number attaches and on the warrant. Rewritten to separate the
  two. The inflated version would have manufactured exactly the divergence the telos warns a
  divergence-scored fabric will produce.
- **Mislabel: FOUND and fixed.** NNR's low-energy-intake stratification was tagged *"route-(a)-
  adjacent"*. It is not baseline-risk stratification; it is a property of the displacement mechanism.
  The route label was removed rather than swapped, because the correct route is not established here.
- **Unsearched absence claim: FOUND and removed.** The draft asserted the energy-intake stratification
  is one **the other two bodies do not make**. **That absence was never searched in the WHO or SACN
  documents** — only in what this page holds of them. Replaced with a mechanism statement about caries
  thresholds that does not depend on an unsearched absence.
- **Same-quantity check: RUN, and it reversed the prior reading.** The NNR source page had recorded the
  sugars comparison as a same-quantity *failure* on the ground that NNR defines neither term. The
  glossary search found NNR's free-sugars definition and its E% definition, both matching WHO. **The
  correction runs toward making a comparison possible, which is the direction that deserves more
  scrutiny, not less** — so the definition row quotes both sides rather than asserting the match.
- **Laundered independence: checked and denied.** NNR cites WHO 2015 and SACN 2015 in the same chapter
  it sets its own threshold in. No `[E-independent]` claimed; the non-independence is stated in the
  body and in *Limits*.
- **Residual risk:** the strongest unverified step is the reading of «added and free sugars» as a union
  whose extension is *free sugars*. It follows from NNR's own glossary, but NNR never states the
  identity, and a reader who takes the phrase as naming a deliberately broader construct would get a
  different comparison. Tagged in place.


## Does fructose's MASLD biochemistry make high-fructose FRUIT a concern? (deliverable-critique, 2026-08-01)

No - not whole fruit at normal intakes, and WHO's definition already encodes why. The MASLD-relevant
fructose harm is a **dose + form** story: a large *free*-fructose bolus (sugar-sweetened beverages, fruit
juice, HFCS) drives hepatic de novo lipogenesis; whole fruit delivers a **modest** fructose dose packaged
in a fibre matrix that slows absorption and blunts the hepatic flux. This is exactly why the free-sugars
limit **excludes intrinsic whole-fruit sugars and includes fruit juice** (the definition above) - *fruit
juice is in, whole fruit is out.* So the decision-relevant lever is cutting free fructose in **beverages**,
not avoiding whole fruit -> [[Fatty Liver MASLD and Weight Loss]].

## References

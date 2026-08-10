---
type: deliverable
title: Sugar & SSBs
aliases: [Sugar, Added Sugar, Free Sugars, Sugar-Sweetened Beverages, SSBs, Sugary Drinks, Fructose]
question: 'For an adult deciding how much added/free sugar and how many sugar-sweetened beverages to consume: what is the effect on each patient-important outcome (dental caries, body weight, type-2 diabetes, cardiovascular disease, liver fat), what is the dose-response shape for each, does any effect persist when sugar is exchanged calorie-for-calorie with other carbohydrate, and are sugar-sweetened beverages a distinct exposure from sugar in solid food?'
sources: [WHO - Sugars Intake 2015, SACN - Carbohydrates and Health 2015, Moynihan - Effect of Sugars on Dental Caries 2014, Te Morenga - Dietary Sugars and Body Weight 2013, Qin - Sweetened Beverages Obesity Diabetes Meta-Analysis 2020, EFSA - Dietary Sugars Upper Intake Level 2022, Chung - Fructose Nonalcoholic Fatty Liver Meta-Analysis 2014, WHO - Non-Sugar Sweeteners 2023, NNR - Nordic Nutrition Recommendations 2023]
confidence: medium
created: 2026-08-10
updated: 2026-08-10
self_critiqued: 2026-08-10
---

## 1. Which sugar is the exposure

The lay question *is sugar bad for me?* runs several distinct decisions together — one about teeth, one about weight, one about metabolic risk, one about which drinks to keep. Before any of them can be answered, the exposure has to be pinned, because the guidance bodies do not regulate "sugar." They regulate **free sugars**, a narrower construct, and the outcomes below attach to it and not to the broader word. An ambiguous exposure makes every downstream claim ambiguous: a "cut sugar" instruction that silently swaps between total, added, and free sugars will misplace the target and lose the food-level distinctions that carry the actual decision.

Four terms name four different objects:

- **total sugars** — every mono- and disaccharide in a food, intrinsic and added together.
- **added sugars** — sugars put in by the manufacturer, cook, or consumer.
- **free sugars** — the regulated construct: added sugars **plus** the sugars in honey, syrups, fruit juices, and fruit-juice concentrates.
- **intrinsic sugars** — sugars inside intact fruit and vegetables, and milk lactose; **excluded** from free sugars.

WHO's 2015 definition fixes the boundary: «Free sugars include monosaccharides and disaccharides added to foods and beverages by the manufacturer, cook or consumer, and sugars naturally present in honey, syrups, fruit juices and fruit juice concentrates» [@who2015]. What sits outside is stated in the same passage: «intrinsic sugars, which are those incorporated within the structure of intact fruit and vegetables; sugars from milk (lactose and galactose)» [@who2015]. So the line runs through the fruit: **fruit juice is in, whole fruit is out, and milk lactose is out.** A "reduce sugars" instruction that does not carry this distinction loses it entirely — it cannot tell apple juice from an apple.

**One wrinkle: "free sugars" names two constructs, not one.** SACN adopts the earlier 2002 wording — «all monosaccharides and disaccharides added to foods by the manufacturer, cook or consumer, plus sugars naturally present in honey, syrups and unsweetened fruit juices» [@sacn2015] — which omits the fruit-juice concentrates that WHO 2015 and NNR both count. The gap matters because concentrate is the sweetener of choice in products marketed as *no added sugar*, so a category moves between counted and uncounted depending on whose definition is in force -> [[Is the Food Category Doing Any Work]]. This is a type-B disambiguation in textbook form: one term, at least two objects, across bodies that cite each other, with the difference flagged by none of them -> [[Free Sugars Intake]].

With the exposure pinned, take each outcome in turn. The first is the one the free-sugars limit was actually written to protect.

## 2. Dental caries — the sugar-specific outcome

Dental caries is the single outcome where the sugar itself is the agent, not the calories it carries. Every other harm below runs through energy and can be neutralised by holding calories equal; caries cannot, because it is driven by the substrate that oral bacteria ferment. This is the outcome the WHO limits actually protect: the recommendation «to limit free sugars intake to less than 10% of total energy intake is based on moderate quality evidence from observational studies of dental caries» [@who2015]. Caries is a genuine patient-important outcome, not a surrogate -> [[Surrogate Outcomes]].

**The evidence is consistent, and the consistency is what carries it.** Across the review behind the WHO figure, «42 out of 50 of those in children and 5 out of 5 in adults reported at least one positive association between sugars and caries» [@moynihan2014], and the review names this its headline strength: «An important strength in this review is the consistency of the data, despite methodological weaknesses in many studies» [@moynihan2014]. A crude pooled magnitude exists — «SMD for DMFT 0.82 (CI 0.67-0.97)» [@moynihan2014] — described by the review as a large effect, though the guideline reports no pooled caries estimate of its own.

**But the design floor is low, and the certainty is design-limited.** There is no trial and, in adults, no cohort: «No RCTs or longitudinal cohort studies were identified that met the inclusion criteria» for adults [@who2015], and the adult studies enrolled only about 1200 participants in total. Certainty reaches **moderate only by an upgrade for large effect size** from the observational floor of low -> [[Upgrading Observational Evidence]]. The adult conclusion is not read off adult data at all: it is carried from child cohorts on a biological warrant — same disease mechanism, tracking from childhood — a reasoned indirectness non-downgrade rather than direct evidence.

**Dose-response is log-linear with no safe threshold.** WHO observed «a positive log-linear dose-response relationship between free sugars intake and dental caries ... across all studies, at free sugars intakes well below 10 kg/person/year (i.e. <5% of total energy intake)» [@who2015]. Caries occurs below the 10% line: «even the groups with free sugars intake < 10% E had some caries» [@moynihan2014]. And the floor is likely lower still than the data can see, because the outcome is measured late — «Pre-cavitation damage may occur at levels of sugars intake below that associated with low/no cavities» [@moynihan2014]. So the limits reduce risk without eliminating it: less is better, with no clean point at which the risk stops.

## 3. Body weight — an energy effect, not a sugar effect

Caries aside, every other outcome that follows turns out to run through the calories sugar carries rather than through the molecule itself. Body weight is where this shows most cleanly, because the same evidence base measures the effect under two different comparators — and they disagree.

**Under an ad libitum comparator — where total energy is free to change — reducing free sugars lowers body weight.** In adults on diets with no strict control of food intake, reduced free-sugars intake was associated with a decrease of **0.80 kg (95% CI 0.39 to 1.21)**, and increased intake with a comparable 0.75 kg gain [@te2013]. This is moderate-certainty evidence from few trials (5 RCTs on the reduction arm) and is short-term — the headline figures come from studies mostly under ten weeks. In this comparator, adding sugar adds calories and removing it removes them; the weight change tracks the energy that moved with the sugar.

**Under an isocaloric comparator — sugar swapped for other carbohydrate at equal energy — the effect is null.** Isoenergetic exchange of free sugars for other carbohydrate «showed no change in body weight (0.04 kg, −0.04 to 0.13)» across 11 trials [@te2013]. Hold the calories equal and the sugar molecule carries no weight-specific effect: the confidence interval brackets zero on both sides and excludes any change larger than about 0.13 kg. This is the row that gets dropped when the 10% figure is quoted on its own, and it is the pivot of the whole picture.

**WHO draws this conclusion in its own voice, not as an inference from the table.** The guideline states: «The excess body weight associated with free sugars intake results from excess energy intake.» [@who2015] So the weight effect of free sugars, on the guideline's own evidence, is an energy effect and not a sugar-specific one. The two interventions — *reduce sugars* and *reduce sugars and replace the calories with other carbohydrate* — are different interventions with different answers, and only the first moves weight.

**One guard against over-reading the null.** Te Morenga's formal dose-response analysis failed — the data «did not allow formal dose-response analysis», with a null metaregression — and the authors attribute the failure to measurement error in self-reported intake [@te2013]. A failed dose-response is weak evidence of no gradient, not evidence of none: self-reported sugar is heavily mis-reported, which flattens real gradients toward the null. The isocaloric null above is a null on a directly-manipulated exchange, which is firmer; but neither result licenses a claim that no sugar-specific gradient could exist anywhere.

## 4. Type-2 diabetes, CVD and hypertension — the beverage carries an additive dose-response

Body weight showed the pattern: adding free sugars adds calories, and the effect vanishes when the
calories are held equal. That same energy-not-molecule logic extends past weight to the
cardiometabolic outcomes — and there the cleanest signal comes from the beverage, because a sugary
drink is the form that delivers those calories with the least compensation.

A 39-cohort dose-response meta-analysis puts numbers on it. Per **250 mL/day** higher sugar-sweetened
beverage (SSB) intake [@qin2020]:

| Outcome | SSB RR per 250 mL/d (95% CI) | Shape |
|---|---|---|
| Type 2 diabetes | **1.19 (1.13-1.25)** | linear (Pnon-lin 0.706) |
| Obesity | 1.12 (1.05-1.19) | linear (Pnon-lin 0.359) |
| Hypertension | 1.10 (1.06-1.14) | linear (Pnon-lin 0.510) |
| All-cause mortality | 1.04 (1.01-1.07) | linear (Pnon-lin 0.259) |

The T2D estimate is the firmest — the tightest interval, the largest evidence base. Every curve is
monotone-linear over the studied range: no knee, no plateau, no threshold below which the drink
appears safe.

### This is the additive arm, and it is an association

Two boundaries fix what the table means. First, Qin measures SSB **as consumed** — a drink adds liquid
calories on top of the diet, so this is the *ad libitum* (additive) arm, not the isocaloric one. The
positive dose-response is fully consistent with the isocaloric null for body weight in §3: SSB carries
risk because it adds poorly-compensated energy, not because the sugar molecule is metabolically
distinct. The T2D, hypertension and mortality limbs simply extend the weight story to further outcomes.

Second, this is association, not effect. Qin says so directly: «the results should be interpreted
cautiously because the present analyses were based on only cohort but not intervention studies»
[@qin2020], with
residual confounding and self-reported intake unresolved. These are cohort magnitudes, not a causal
effect size someone can bank on.

### EFSA grades the same split — and it rests on surrogates

EFSA 2022, reviewing this literature independently, reaches the same additive-versus-isocaloric
divide. Assessed **not** holding total energy constant, SSBs grade «high for obesity, T2DM, HTN and CVD
(> 75-100% probability)» [@efsasugars2022].
But sugars swapped calorie-for-calorie tell a different story: prospective cohorts «do not support a
positive relationship between the intake of dietary sugars, in isocaloric exchange with other
macronutrients, and any of the chronic metabolic diseases» [@efsasugars2022].
The added/free-sugars %E arm grades only moderate-to-low, and it does so on **surrogate endpoints** —
«body weight, liver fat, fasting glucose, fasting triglycerides and systolic blood pressure»
[@efsasugars2022] — not on measured
disease events. The metabolic grades inherit the surrogate discount -> [[Surrogate Outcomes]].

### The artificially-sweetened-beverage caveat

One confound must be flagged and then set aside. Diet drinks carry a **similar-sized** positive
association (per 250 mL/d: T2D 1.15, obesity 1.21, all-cause mortality 1.06)
[@qin2020], despite
containing no sugar. That points to reverse causation — the already-at-risk switch to diet drinks — and
neither Qin nor a naive reading can rule it out. It bears on how much of the SSB association is truly
the sugar; the sweetener decision itself is appraised in [[Artificial Sweeteners]], not here.

The additive/energy reading now carries to the liver, where a popular claim — that fructose is uniquely
hepatotoxic — meets the same isocaloric test.

## 5. Liver fat — energy, not the fructose molecule

Fructose is metabolised largely in the liver, and a fructose-driven hepatic de-novo-lipogenesis pathway
is real, so the intuition that fructose is a specific liver toxin is mechanistically motivated. But the
whole-organism outcome — liver fat at equal energy — does not follow the mechanism.

A controlled-feeding SR-MA settles the isocaloric question and finds nothing. Swapping fructose for
glucose calorie-for-calorie did not raise liver fat: the isocaloric monosaccharide diets did not alter
intrahepatocellular lipids (+0.11%), and fructose and glucose «did not differ in any hepatic outcome
measure» [@chung2014].
The liver-fat rise appears only in the **added-energy** arm: hypercaloric fructose raised liver fat by
54% (95% CI 29-79%) versus weight maintenance
[@chung2014] — and
at equal excess energy, fructose behaved like glucose.

Chung's own verdict routes the harm to calories: the liver-health associations «appear to be confounded
by excessive energy intake» [@chung2014].
EFSA independently grades the causal certainty for NAFLD/NASH only **low**
[@efsasugars2022]. So the decision-relevant
lever is cutting the excess liquid energy — SSB, fruit juice, HFCS — not avoiding the fructose molecule,
and not whole fruit (a modest dose in a fibre matrix, not a hepatic bolus) -> [[Free Sugars Intake]].

### What this does — and does not — establish

This is thin evidence, and the honest reading is **insufficient evidence, not proof of no effect**.
Three limits bind, and they matter:

- **The isocaloric leg is one short-term study** in healthy young men, at supraphysiological doses,
  from a single research group, with baseline liver fat far below the disease threshold. A years-long,
  high-dose, free-fructose regime held isocaloric is **unstudied** — near-impossible to trial — and the
  Chung null does not cover it.
- **Whole fruit's low concern is about achievable dose**, not proven molecular safety. Fibre, satiety
  and water cap how much free fructose fruit delivers, so no hepatic bolus arrives at normal intakes;
  that is a dose argument, not a demonstration that the molecule is safe at extreme chronic intake.
- **The fructose -> hepatic-DNL mechanism is held at its evidence-state.** It is a real pathway, but at
  equal energy the liver-fat outcome is null, so it is marked and directional — never
  dressed as an outcome finding. Chung: the evidence is «not sufficiently robust to draw conclusions
  regarding effects of fructose, HFCS, or sucrose consumption on NAFLD»
  [@chung2014].

## 6. The isocaloric test — molecule or calories?

Four outcomes, one recurring finding: for body weight, cardiometabolic risk, and
liver fat, the effect attributed to sugar tracks the energy it carries, not the
molecule. The single test that separates the two is to hold energy constant and
see what remains.

### Every sugar claim is *instead of what?*

An effect estimate is a contrast, and its comparator is usually left unstated ->
[[The Comparator Problem]]. For sugar the hidden arm decides the answer. Cut sugar
*ad libitum* and the calories leave with it, so the measured effect is a joint
sugar-plus-energy effect. Swap sugar for other carbohydrate *at equal energy* — an
isocaloric exchange — and only a molecule-specific effect can survive. The two
designs answer different questions, and conflating them is how *sugar is fattening*
mistakes the molecule for the energy that carries it.

### Held at equal energy, the effect does not survive — except for caries

Run the isocaloric test on each outcome and the effect vanishes. As the weight leg
showed, the isoenergetic carbohydrate exchange is null; as the metabolic leg showed,
cohorts assessed in isocaloric exchange give no positive relationship; as the liver
leg showed, the isocaloric fructose-for-glucose exchange is null, with the rise
confined to the added-energy arm. The legs own those numbers; the cross-outcome
pattern is that one quantity — excess energy — carries all three. The **sole
exception is caries**, which is sugar-specific by a local oral mechanism, does not
run through calories, and is untouched by the isocaloric argument.

### A guidance body states the same structure in its own voice

EFSA reached this reading through its own systematic review, not the wiki's: on the
metabolic outcomes «prospective cohort studies do not support a positive
relationship between the intake of dietary sugars, in isocaloric exchange with other
macronutrients, and any of the chronic metabolic diseases»
[@efsasugars2022], and «excess
energy intake leading to positive energy balance and body weight gain appears to be
the main mechanism by which the intake of dietary sugars may contribute to the
development of chronic metabolic diseases»
[@efsasugars2022]. The
energy-not-molecule verdict is not merely wiki-induced.

### This is not *the trial beats the cohort*

The large SSB cohort signal and the isocaloric-trial null are not a case of a
randomized trial overturning observational evidence ->
[[The Observational-Trial Discordance]]. They measured different exposures. The
trial tested the commensurable exposure — the molecule at equal energy — and found
null; the cohort captured the added-energy package a sugary drink delivers. Matched
on exposure, the two streams agree, and the agreement resolves to energy. Reading
the null as *sugar is harmless* or the cohort as *the molecule is toxic* each just
picks the stream that flatters a prior; the honest reading names the exposure
mismatch and the energy that both streams point to.

### Why a failed dose-response does not carry this verdict

Self-reported sugar intake is heavily mis-reported, so a null or failed
dose-response is weak evidence of no gradient, not evidence of none ->
[[Measurement Error in Dietary Assessment]]. That caution bears on how the threshold
evidence is read (§8) — but it does not weaken the isocaloric verdict here, because
that verdict does not rest on a gradient. It rests on **design**: controlled-feeding
trials held energy equal by construction and still found no molecule-specific
effect. The finding is a measured near-null from a design built to isolate the
molecule, not a gradient that measurement error failed to reveal.

If the harm is the energy, the real lever is whatever form delivers that energy most
easily and least noticeably. That form is the drink — which is why the beverage is
treated as an exposure of its own.

## 7. Are SSBs a distinct exposure?

Yes — but distinct by **delivery**, not by any molecule-specific toxicity.

### Liquid calories are poorly compensated

A sugar-sweetened beverage is the same free sugars in liquid form, and the liquid
form is the point. Liquid energy triggers weak satiety compensation, so an SSB adds
energy *on top of* the day's intake instead of displacing food ->
[[What Drives Fat Gain - Energy Balance vs the Carbohydrate-Insulin Model]]. This is
why the beverage stands apart: not because its sugar differs chemically from a
spoonful stirred into food, but because the vehicle defeats the appetite regulation
that would otherwise absorb those calories. The distinctness is behavioural and
physiological, at the level of intake — consistent with the energy reading §6
reached.

### The dominant carrier, and the arm that grades highest

SSBs are the dominant free-sugars vehicle, and the SSB-as-consumed evidence sits in
the additive (energy-adding) arm, not the isocaloric one -> [[Free Sugars Intake]].
That arm grades far above the isocaloric %E arm across bodies: EFSA judges the
SSB-to-metabolic-disease relationship «high for obesity, T2DM, HTN and CVD (> 75-100%
probability)» [@efsasugars2022],
where the isocaloric %E arm reaches only moderate or low. The cohort dose-response
magnitudes live in the metabolic leg (§4); the point here is that the graded signal
concentrates in the beverage — the form, not a distinct chemistry.

### The ASB confound sharpens *delivery, not molecule*

Artificially-sweetened beverages carry a similarly-sized association — a
reverse-causation candidate, since the already-at-risk switch to them — and EFSA
notes it is unclear whether the beverage risk can be attributed to their sugar
content, because the artificially-sweetened relationship is similar
[@efsasugars2022]. That cuts
toward the delivery reading: what marks the beverage is the poorly-compensated
liquid vehicle and the intake it drives, not a toxicity unique to the sugar
molecule.

### The substitution, and the bridge

The lever follows: replace the sugary drink with water or whole fruit rather than a
diet version — WHO advises against non-sugar sweeteners as a route to weight or
NCD-risk control and prefers water and unsweetened options
[@who2023nonsugar]. The sweetener decision itself is
appraised separately and is out of scope here -> [[Artificial Sweeteners]]. Given
that the beverage is the clearest lever and the free-sugar limit is largely a dental
one, why do the guidance families still set different numbers — or none at all?


## 8. What the guidance families actually say — the WHO-vs-EFSA picture

The beverage is the clearest lever because it delivers the calories most easily. That still leaves the number itself contested: four gold-tier bodies read the same evidence and set four different limits, or none. Their **direction is unanimous** — less free sugar, fewer sugary drinks — and it is only the number, and the warrant behind it, that diverges.

| Body | Limit (free sugars, %E) | Warrant it rests on |
|---|---|---|
| **WHO** 2015 | **<10%** strong; **<5%** conditional | dental caries [@who2015] |
| **SACN** 2015 | **<=5%** primary (no 10% tier) | caries **plus** total energy intake [@sacn2015] |
| **NNR** 2023 | **<10%** only; «preferentially lower» | nutrient-density displacement [@nnr2023] |
| **EFSA** 2022 | **no number** | UL risk assessment: no safe threshold identifiable [@efsasugars2022] |

### The numbers diverge by warrant, not by disagreement

WHO's limits protect teeth; SACN adds a randomised-trial energy argument to reach the same 5%; NNR's threshold is a displacement one — sugar crowds out micronutrients and fibre — and it sets no lower tier at all. Three bodies, three different reasons a number attaches where it does. Per the fabric's telos, that divergence is itself the finding: where guidance families place thresholds differently on the same evidence, the evidence does not determine the number, and the honest move is to show why rather than pick a side.

### EFSA set no number — and that is a standpoint, not a softer verdict

EFSA was asked for exactly a threshold. Its task was a **UL risk assessment**: find the intake below which sugar poses no risk. None was found — «A level of sugars intake at which the risk of dental caries/chronic metabolic diseases is not increased could not be identified over the range of observed intakes, and thus, a UL or a safe level of intake could not be set ... the intake of added and free sugars should be as low as possible in the context of a nutritionally adequate diet» [@efsasugars2022].

This is **not EFSA disagreeing with WHO**. EFSA runs a hazard characterisation whose output is a threshold-or-nothing; WHO issues a communicable population target, which needs a number to aim at whether or not a clean threshold exists. EFSA firewalls target-setting *out* of its own remit — number-setting «is part of national nutrition policies ... not under EFSA's remit» — so the estimate and the recommendation are held by different bodies -> [[Which Objective Moved This Recommendation]]. This is a **standpoint** difference (telos divergence reason #1), the not-joined check firing on different construct and purpose.

### Reading either as "softer" is a category error, both ways

EFSA states plainly that «a UL is not a recommended level of intake» [@efsasugars2022]. So reading EFSA's «as low as possible» as *laxer* than WHO's 10%, or WHO's 10% as a *safe threshold* EFSA failed to endorse, promotes one type of object into another in both directions -> [[The Descriptive-Normative Category Error]]. On the substance the two agree: less is better, and there is no clean safe level. WHO's 10% is a communicable cut, not a no-risk floor; EFSA's silence is a hazard verdict, not permission.

### Agreement among the four is not corroboration

None of the four is an independent witness to the primary data. SACN and NNR both read WHO and its commissioned reviews; WHO's own two reviews were co-produced by one subgroup. The **<5% tier is a sharp case**: SACN's <=5% and WHO's <5% land on the same number by *mutually exclusive* evidence (SACN excludes the ecological studies WHO's tier rests on) and on *different numerators* (SACN's construct omits fruit-juice concentrates) — so they are not measuring the same quantity. Agreement anywhere among these bodies is appraisal-level, not evidential weight.

### The thinnest evidence sits exactly at the low tier

EFSA confirms the sub-10%E region is the least-evidenced: the relationship «could not be adequately explored at levels of intake < 10 E% owing to the low number of RCTs available» [@efsasugars2022]. That is precisely where WHO's conditional <5% and SACN's primary <=5% both sit. EFSA does not say those tiers are wrong — it declines all numbers — but it independently marks that region as carried by the weakest evidence.

With the guidance picture set out, what does the whole body of evidence still leave open?

## 9. Named gaps + bottom line

### The residual gaps

These are what remains genuinely open — stated without inferring a direction.

- **Chronic, high-dose isocaloric fructose on liver fat.** The isocaloric fructose-for-glucose nulls are short-term, at moderate to supraphysiological doses, in healthy young men. The years-long high-free-fructose regime is unstudied and near-impossible to trial. This is **insufficient evidence, not proof of no effect** — the mechanism (hepatic de-novo lipogenesis) is real and directional; what is missing is the whole-organism outcome at chronic high dose.
- **No hard clinical endpoints.** The metabolic and liver evidence rests on cohorts and on **surrogate** endpoints — body weight, liver fat, fasting glucose, triglycerides, blood pressure -> [[Surrogate Outcomes]]. No free-sugar or SSB trial measures hard CV events or liver-related outcomes. Caries and body weight are the patient-important outcomes carried by the firmer designs.
- **No adult caries cohort.** The adult caries conclusion is transported from child cohorts on a biological warrant (same etiology, disease tracking to adulthood), not on direct adult data.
- **The <5% tier is the thinnest region.** EFSA states the uncertainty is higher below 10%E; WHO's conditional tier rests on ecological studies alone.
- **No independent guidance witness.** No two of WHO, SACN, NNR and EFSA are independent witnesses to the primary data, so their agreement adds no evidential weight to any number.

### Bottom line

- **Cut sugary drinks and other liquid free sugars.** They add poorly-compensated calories on top of the diet, and this is the best-motivated, most actionable lever — an energy lever, not a molecule one.
- **The free-sugar limit is mainly a dental recommendation.** The well-known 10% / 5% numbers protect teeth. If the decision is about weight or cardiometabolic risk, the caries evidence does not transfer, and the weight evidence says the effect runs through energy.
- **The molecule is not uniquely toxic once calories are held equal.** Across weight, liver fat and metabolic outcomes, the effect of sugar does not survive calorie-for-calorie exchange with other carbohydrate. Caries is the sole sugar-specific exception.
- **Whole fruit is not the target.** Free sugars exclude the sugars inside intact fruit; fruit juice counts, whole fruit does not. There is no basis here for fearing fruit.

The loop stays open: this appraisal grades coherence and source-fidelity, never validity against a realized outcome.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | 'For an adult deciding how much added/free sugar and how many sugar-sweetened beverages to consume: what is the effect on each patient-important outcome (dental caries, body weight, type-2 diabetes, cardiovascular disease, liver fat), what is the dose-response shape for each, does any effect persist when sugar is exchanged calorie-for-calorie with other carbohydrate, and are sugar-sweetened beverages a distinct exposure from sugar in solid food?' |
> | **Evidence included** | 9 sources — 5 gold, 4 high |
> | **Overall certainty** | **Medium** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | All sources are gold or high tier. |
> | **Last updated** | 2026-08-10 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Added%20Sugar%20and%20Sugar-Sweetened%20Beverages.md) |

## References

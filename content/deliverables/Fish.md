---
type: deliverable
title: Fish
question: What does the evidence show about eating fish (and its omega-3) on each patient-important outcome — in which direction, how large, for whom, how certain — and how does it vary by fish type (oily vs lean/white; apex-predator vs prey), by origin (wild vs farmed, marine vs freshwater), and what does the methylmercury / contaminant axis do to each outcome, weighed against any benefit found?
aliases: [Fish, Seafood, Oily Fish, Fatty Fish, Fish Oil, Eating Fish]
sources: [EFSA - Seafood Benefits vs Methylmercury Risks 2014, Gencer - Omega-3 Atrial Fibrillation Meta-Analysis 2021, Jayedi - Fish Consumption Chronic Disease Umbrella 2020, Manson - VITAL Marine Omega-3 2019, Bhatt - REDUCE-IT Icosapent Ethyl 2019, Wei - Omega-3 Dementia Cognitive Decline Cohort Review 2023]
confidence: medium
created: 2026-08-05
updated: 2026-09-03
self_critiqued: 2026-09-03
concrete_subject_audited: 2026-09-03
---

This is a general, population-level appraisal of what the evidence says about eating fish for anyone the
studies speak to. It is not advice for one person; whether and which fish *you* should eat depends on
your stratum — most of all whether you are pregnant or of childbearing age — and belongs at the end, not
here.

The short version: **"is fish healthy?" is the wrong question, and "eat fish twice a week" hides the
answer.** The benefit — a coronary-mortality and all-cause-mortality signal carried by the long-chain
omega-3s EPA and DHA in *oily marine* fish — and the harm — methylmercury, which builds up the food
chain and peaks in long-lived apex predators — **decouple across species**. The fish richest in omega-3
are mostly low in mercury; the high-mercury fish carry little offsetting omega-3. So the decision that
changes an outcome is almost never *eat fish or not*; it is *which fish*. And the benefit is smaller and
softer than the public consensus implies: it is essentially all observational, the graded pooled
magnitudes reach only moderate certainty, and for a healthy replete adult fish is a **pebble, not a big
rock**.

<div class="recent-update" data-last-updated="2026-08-27">

## How good is the evidence — read this first

Every human outcome for fish comes from cohorts, not trials. People report how often they eat herring or
cod on a questionnaire, and researchers track who dies of what. The one design that isolates the food
from the diet around it — a randomised trial — exists only for omega-3 *supplements*, and those were
largely null. So no study ever fed people fish, held everything else constant, and counted heart attacks.

Jayedi and Shab-Bidar's 2020 umbrella review sets the ceiling. Pooling 34 meta-analyses, 48 summary
estimates and 298 primary cohorts, graded by NutriGrade, its headline is a limit:
*«Overall, there was no high-quality evidence for the relation of fish consumption and the risk of
chronic disease»* — 8 of 48 estimates reached moderate certainty (17%), the rest low or very low.
[@jayedi2020fish] The ceiling is
observational by construction: 91% of the pooled cohorts adjusted for age but only 33% for family
history, so moderate is as high as the fish-to-mortality evidence goes.

Intake is FFQ-measured, which flattens real gradients and inherits the field's binding constraint
-> [[Measurement Error in Dietary Assessment]]. EFSA in 2014 could not put a certain number on the
benefit at all — its quantitative synthesis was *«generally hampered by the heterogeneity of the
studies»*. [@efsaseafood2014] Jayedi now can
supply pooled magnitudes, but only to moderate certainty, and still observational.

Jayedi meets EFSA as a type-F refinement plus shared-data corroboration, not as independent type-E
backing. Jayedi re-pools the same cohort literature EFSA's four CHD meta-analyses drew on and rests on
the identical EPA/DHA mechanism, so its agreement raises detail and certainty, not independence. The
observational ceiling binds both.

</div>

<div class="recent-update" data-last-updated="2026-08-27">

## The benefit side — narrower than "fish is good for you"

EFSA's benefit is outcome-specific, not a general glow. It is strong for coronary heart disease mortality
and inconsistent or null everywhere else — stroke, atrial fibrillation, total CVD events: *«there is
strong evidence for an effect of n-3 LCPUFA from seafood on the reduction of CHD mortality»*, while the
arrhythmia and stroke signals are not supported by the RCTs.
[@efsaseafood2014]

Jayedi supplies the pooled magnitudes EFSA could not, each with a NutriGrade certainty grade, all per
+100 g/day unless noted:

| Certainty | Outcome | SRR (95% CI) | Reading (relative, per dose) |
|---|---|---|---|
| **Moderate** | CVD mortality | 0.75 (0.65, 0.87) | \~25% lower per +100 g/d |
| **Moderate** | Myocardial infarction | 0.75 (0.65, 0.93) | \~25% lower per +100 g/d (highest heterogeneity, I2>75%) |
| **Moderate** | Heart failure | 0.80 (0.67, 0.95) | \~20% lower per +100 g/d |
| **Moderate** | Stroke | 0.86 (0.75, 0.99) | \~14% lower per +100 g/d |
| **Moderate** | CHD | 0.88 (0.79, 0.99) | \~12% lower per +100 g/d |
| **Moderate** | All-cause mortality | 0.92 (0.87, 0.97) | \~8% lower per +100 g/d; 38 studies, 153,998 cases |
| **Moderate** | Depression | 0.88 (0.79, 0.98) high vs low | new outcome (not on EFSA's arm) |
| **Moderate** | Liver cancer | 0.65 (0.48, 0.87) | the one cancer that reaches moderate |
| Low | CHD mortality | 0.65 (0.48, 0.87) | largest effect, but low certainty + nonlinear |

[@jayedi2020fish]

Read these as relative risks per +100 g/day. The umbrella gives no baseline risk, so a true absolute risk
reduction cannot be computed here — an 8% lower all-cause risk means something different for a 70-year-old
than for a 30-year-old -> [[Baseline Risk and the Relative-Absolute Split]]. Two low-certainty cancer
*harm* signals sit alongside these benefits — gastric cancer (RR 1.16) and myeloid leukemia (RR 1.60),
few studies each — a reminder that the picture is not uniformly favourable.
[@jayedi2020fish]

The benefit traces to the marine omega-3s EPA and DHA. Per 100 mg/day EPA+DHA, EFSA reports CHD
mortality fell 14.6% (8-21%) up to 250 mg/day, and *«RCTs conducted with supplemental, higher doses of
n-3 LCPUFAs did not show higher benefits than cohort studies»*.
[@efsaseafood2014] On that basis EFSA set an
Adequate Intake of 250 mg/day EPA+DHA for cardiovascular health.
[@efsaseafood2014]

But attributing the fish-eating benefit to EPA+DHA runs ahead of the held data, which **cannot separate
three explanations**: that the marine omega-3s repair a low baseline (repletion), that the whole-food
matrix carries the effect, or that fish-eaters simply differ (residual healthy-user confounding). The
supplement trials that isolate EPA+DHA are null in already-replete populations (see the pill-is-not-the-
food section below), so the held evidence does not show the omega-3s to be the operative agent; repletion
of a low baseline best reconciles the fish-benefit with the supplement-null, but no trial has fed people
fish, so the loop stays open.

Above roughly 1-2 servings a week, the CHD-mortality benefit plateaus — no further gain is expected above
about 4-5 servings/week. The plateau is not an exotic feature of a food. It is the ordinary shape of a repletion
lever: a nutrient that is low at baseline (EPA, DHA, iodine) is topped up, the deficit closes, and adding
more buys nothing. Deficiency, then repletion, then flat.
[inferred from @efsaseafood2014]

And the plateau is outcome-specific. It holds for CHD mortality; it does not hold everywhere. Jayedi finds
*«inverse linear associations for all-cause and CVD mortality»* with *«no evidence of a U- or J-shaped
association»* — every increment still pays for those outcomes.
[@jayedi2020fish] So the curve's shape
depends on which death you are counting: nonlinear and flattening for CHD mortality, straight-line
downward for all-cause and total CVD mortality -> [[The U-Shaped Association Artifact]]. The conservative
default — keep the \~1-2 servings/week target — is unchanged: more buys little on CHD mortality but may
still help all-cause.

</div>

<div class="recent-update" data-last-updated="2026-08-27">

## Fetal neurodevelopment — a repletion lever

Maternal fish consumption tracks with a smarter child. Two large cohorts — ALSPAC (\~12,000) and the
Danish National Birth Cohort (\~26,000) — link mothers who ate fish to higher child IQ and developmental
scores. Modelled by FDA and FAO-WHO: *«an average of 4.0 IQ points could be gained from an intake of
100 mg DHA per day, with a maximum attainable IQ gain of 5.8 points»*.
[@efsaseafood2014]

But the IQ benefit is repletion of a deficiency, not enhancement, and three facts converge on it. DHA
supplementation trials in pregnancy were null: *«there is no evidence for an effect of n-3 LCPUFA
supplementation (mostly DHA) during pregnancy on any functional outcome of children's
neurodevelopment»*. [@efsaseafood2014] The
association lived only in the low-DHA tail — maternal DHA predicted IQ *«within the lowest quartile of
maternal DHA»* but showed *«no significant associations... within the highest quartile»*.
[@efsaseafood2014] And EFSA's own conclusion: the
benefit *«may depend on the maternal status»*, so *«No effect of these nutrients... is expected when
maternal requirements are met.»* [@efsaseafood2014]

The IQ lever therefore works for a mother whose DHA and iodine are low, and does nothing once her status
is adequate -> [[Deficiency Repletion vs Enhancement]]. The observational food signal survives while the
isolate RCT is null — a design story, not proof the food beats the nutrient.

</div>

<div class="recent-update" data-last-updated="2026-08-28">

## Cognitive decline and dementia — where the dietary and supplement evidence part ways

The fish-versus-fish-oil split that runs through the coronary evidence (the *Fish versus fish-oil
supplements* section below) returns for the aging brain, and Wei's 2023 review maps it cleanly. This
gold systematic review and meta-analysis pooled 48 longitudinal studies and 103,651 participants, and where it lands
depends entirely on how the omega-3 was measured — what people ate, what circulated in their blood, and
what a capsule delivered give three different answers.
[@wei2023omega3]

**Dietary DHA carries the signal.** People who ate more DHA — and oily fish is its dominant food source —
had a lower dementia risk: the pooled dietary-DHA estimate was RR 0.82 (95% CI 0.72, 0.93) across 13
studies, Wei's highest-credibility (Level H) grade — about a 20% lower risk of all-cause dementia or
cognitive decline, and a steeper 27% lower Alzheimer's specifically (HR 0.73, 0.55-0.97). The signal is
specific to that one fatty acid: dietary total omega-3 is weaker and borderline (RR 0.91, 0.82-1.00), and
dietary EPA and ALA show nothing.
[@wei2023omega3] The exposure Wei
measured is dietary DHA by food-frequency questionnaire, not fish servings, so it points to the omega-3
mechanism rather than a fish-specific dose -> [[Is the Food Category Doing Any Work]].

**The blood markers split, and the split is diagnostic.** Erythrocyte DHA — the long-term intake marker,
reflecting the past \~60-90 days — tracks the dietary signal: RR 0.94 (0.89, 0.98). Plasma DHA — the
short-term marker, \~7-14 days — does not. Wei reports *«No signiﬁcant association was found between higher
levels of plasma DHA and a lower risk of cognitive decline (RR: 0.88, 95% CI: 0.76, 1.03; I2 ¼ 63.6%,
Level L), with publication bias (Egger's P ¼ 0.007, corrected RR: 0.99, 95% CI: 0.85, 1.14; I2 ¼ 69%)»*.
[@wei2023omega3] Once that bias
correction lands, circulating DHA predicts nothing — the same nutrient reads protective on the plate and
flat in the blood.

**The supplement evidence finds little, and Wei says so.** Its own introduction concedes that
*«randomized clinical trials have shown limited efﬁcacy of omega-3 fatty acid sup-plementation in
reducing cognitive decline and probable AD»*.
[@wei2023omega3] The discordance
surfaces inside a single cohort: in Wei's ADNI arm, people reporting long-term omega-3 supplement use did
better (HR 0.36), yet their measured blood omega-3 predicted nothing — the healthy-user tell, where the
behaviour tracks the outcome and the biomarker does not.
[@wei2023omega3] The one held
randomised trial, MAPT, gave 800 mg DHA plus 225 mg EPA a day and still found no cognitive benefit
-> [[Multidomain Lifestyle Intervention and Cognitive Decline]], [[Dietary Supplements]].

**So the dietary-DHA benefit does not license an omega-3 capsule for the brain.** This mirrors the
coronary picture exactly (the *Fish versus fish-oil supplements* section below): the whole food carries a
signal the isolate does not, and a null supplement trial is not a verdict on the fish. Wei does propose a
dose — *«we propose that 1.0 g/d may be the threshold»* — but the same analysis *«did not observe a
signiﬁcant linear relationship»* between dietary omega-3 and cognitive decline, and 1.0 g/d sits at the
upper edge of the observed intake range.
[@wei2023omega3] Treat it as where the
data thin out, not a located optimum -> [[The Underivable Optimum]].

[inferred from @wei2023omega3]

</div>

<div class="recent-update" data-last-updated="2026-08-27">

## The benefit is measured net of the mercury

This structural move makes the whole appraisal tractable. The cohort associations *«refer to
seafood per se and include beneficial and adverse effects of nutrients and non-nutrients (i.e. including
contaminants such as methylmercury)»*.
[@efsaseafood2014]

A cohort eating real salmon and cod already ate the mercury inside it. So the positive net association is
not a modelled subtraction of a benefit estimate and a separate risk estimate — it is a directly observed
net effect, benefit minus in-fish mercury, at the species and intakes European populations actually eat.
That is why the finding lands as a serving recommendation and not an exchange rate: at typical European
species and intakes, the whole-food net is already positive.
[inferred from @efsaseafood2014]

</div>

<div class="recent-update" data-last-updated="2026-08-27">

## The exposure is not one thing — species carries both effects, and they decouple

Two fish under the same word behave nothing alike. Omega-3 content runs from \~200 mg/100 g in cod and
whiting to \~2500 mg/100 g in herring and tuna — an order of magnitude. Mercury runs from negligible in
sardine to guideline-limiting in shark and swordfish.
[@efsaseafood2014] Two decision
variables sit inside "eat fish twice a week": oily versus white (the n-3 benefit) and trophic level, low
versus high mercury (the risk). The folk category names neither.

The two variables mostly pull apart. The species richest in EPA and DHA (herring,
salmon, mackerel, sardine, trout: n-3 \~600-2500 mg/100 g) are mostly low-mercury; the high-mercury apex
predators (swordfish, shark, marlin) carry the risk without an offsetting n-3 advantage. Tuna is the one
species that sits on both axes — n-3-rich and potentially high-mercury — which is exactly the species the
guidance singles out to limit.
[@efsaseafood2014]

Fatty-versus-lean does decision work in Jayedi too. Total fish shows null associations with type 2
diabetes, hypertension and atrial fibrillation, but *«higher intake of fatty fish, but not lean fish, was
associated with a lower risk of T2D»* — 0.89 versus 0.96.
[@jayedi2020fish] Preparation can flip the
sign outright: *«higher intake of fried fish was associated with a higher risk»* of heart failure
(RR 1.40, 1.22-1.61), while nonfried fish is protective (0.69).
[@jayedi2020fish] Fried fish is a different
exposure than fish.

EFSA itself avoids the fatty and lean labels because their use has been *«inconsistent and their meaning
ill defined»*. [@efsaseafood2014] In any decision,
replace the category with the species properties -> [[Is the Food Category Doing Any Work]].

[inferred from @efsaseafood2014; @jayedi2020fish]

</div>

<div class="recent-update" data-last-updated="2026-08-27">

## The methylmercury risk — and why species is the decision variable

Methylmercury's tolerable weekly intake is 1.3 µg/kg body weight/week, *«expressed as mercury... based on
neurodevelopmental endpoints»*, from a point of departure of 11.5 mg/kg maternal hair.
[@efsaseafood2014] Because mercury biomagnifies up
the food chain, apex predators carry the most, and the pregnancy guidance is written as a species rule,
not an intake rule: *«prefer seafood low in pollutants (e.g. trout, ocean perch, cisco, sardine, white
halibut, salmon, mackerel, herring, sprats, anchovies, carp and prawns); not to eat swordfish, dogfish,
marlin, shark, and ray; and to consume at most one serving of fresh tuna or pike per week»*.
[@efsaseafood2014]

The harm signal itself comes from extreme exposure, not from a European fish dinner. The classic
methylmercury-neurotoxicity cohort is Faroese, eating pilot whale; the Seychelles cohort eats far more
fish than any European population. EFSA discounts both as *«much higher than current intakes (and current
recommendations) in the majority of European countries»*.
[@efsaseafood2014]

The mercury story checks out from a second angle. Cohort studies found no association between toenail
mercury — the best long-term intake marker — and CVD, and the 2018 AHA statement holds that *«the
benefits of 1-2 servings/wk... outweigh the potential risks associated with mercury content of fish»*.
[@jayedi2020fish]

</div>

<div class="recent-update" data-last-updated="2026-08-27">

## Origin — freshwater vs marine, wild vs farmed

Where the fish comes from changes the exposure, though not always the outcome. The omega-3 food chain
starts with marine algae, so EPA and DHA concentrate in **marine** oily fish; common freshwater species
carry less (carp \~300, trout \~600 mg/100 g, versus 1800-2500 in marine oily fish), and freshwater fish
are also lower in iodine (\~2-12 µg/100 g versus 30-160 in sea fish).
[@efsaseafood2014] The contaminant profile
differs by water body too: several European guidelines add local advisories, and one recommends avoiding
fish from the Baltic Sea outright.
[@efsaseafood2014] So for locally-caught freshwater
fish, a **local advisory**, not a general rule, governs.

Wild and farmed fish of the "same" species are not the same food, but the wiki holds no gold-tier outcome
evidence that the difference changes a patient-important outcome. State the direction, not a verdict:

- **Composition differs via feed, and the direction is species-specific.** EFSA notes *«the total fat
  content is up to 50 % higher in farmed than in wild specimens of some fish species (e.g. salmon),
  whereas no differences are observed in other species (e.g.»* trout), and in farmed fish *«the fatty
  acid composition... closely mimics the fatty acid composition of the feed»*.
  [@efsaseafood2014] Feeding more plant material
  shifts the profile toward omega-6 and dilutes the marine omega-3 the fish delivers — so "salmon" the
  label drifts from the wild fish the older evidence was built on -> [[Is the Food Category Doing Any Work]].
- **Contaminants differ, direction uncertain, no outcome data.** Analytical single-species studies suggest
  some contaminants can run *higher in wild* fish (local pollutant burden) while others historically ran
  higher in farmed — but no gold-tier meta-analysis ties wild-versus-farmed to a health *outcome*. To
  whatever extent the benefit is carried by EPA and DHA — the **support factor** that mechanism would
  need — it transports to farmed fish only insofar as farmed fish still delivers them; and since no held
  source ties wild-versus-farmed to any outcome, no health-outcome basis exists to prefer wild as such.
  The real watch-item is feed-driven EPA/DHA dilution as farming shifts toward plant oils (identity drifts
  under a constant name), not a wild-versus-farmed verdict.

[inferred from @efsaseafood2014]

</div>

## The stratum flip — the crown-jewel weighing

The balance is not the same for everyone, and the axis it turns on is stratum by species, not a blanket
verdict.

For general adults, the benefit dominates. CHD mortality falls, and the methylmercury cardiovascular harm
is *«inconclusive»*. Eat 1-2 servings a week of any commonly-consumed species.
[@efsaseafood2014]

The mercury-sensitive stratum is the developing fetus and young child — hence pregnancy and women of
childbearing age. Here the risk can bind, and intuition says abstain. The FAO/WHO weighing lands the other
way: for women of childbearing age, in most circumstances the *«risk of suboptimal neurodevelopment in
offspring of women consuming seafood is lower than in the offspring of women not eating seafood»*.
[@efsaseafood2014]

So the flip is a species swap, not abstention. Low-mercury fish still nets positive even for the fetus —
the lost DHA and iodine of not eating fish outweigh the mercury of a sardine — and the balance only tips
negative for apex-predator species or high intake. Abstaining is itself the harmful option for the outcome
the sensitive stratum cares about most
-> [[The Weighting Problem - Why Population Guidance Is Ill-Posed and Individual Advice Is Not]].

[inferred from @efsaseafood2014]

<div class="recent-update" data-last-updated="2026-09-03">

## Fish versus fish-oil supplements — is the food the same as the isolate?

A natural move is to skip the fish and take the omega-3. The trial evidence says **the pill is not the
fish, and even "the pill" is several different exposures**. Two landmark randomized trials sit under the
one word "omega-3" and land on **opposite** results because every input differs:

| Parameter | VITAL (null) | REDUCE-IT (benefit) |
|---|---|---|
| Compound | EPA+DHA mix | purified EPA ester, no DHA |
| Dose | 1 g/day (OTC fish oil) | 4 g/day (prescription) |
| Stratum | general, largely replete, primary prevention | statin-treated, high-triglyceride, high CV risk |
| Result | MACE HR **0.92** (0.80-1.06), null | primary composite HR **0.75** (0.68-0.83), NNT 21 |

VITAL (n=25,871): omega-3 1 g/day *«did not result in a lower incidence of major cardiovascular events or
cancer than placebo»* [@manson2019n3]. Two secondary signals
point the same way. Total myocardial infarction fell (HR 0.72, 0.59-0.90, not adjusted for multiple
testing); and, separately, the primary MACE endpoint showed a benefit concentrated in the prespecified
**low-fish-intake** subgroup (MACE HR 0.81, P for interaction 0.045). Both read as *repletion of a low
baseline intake*, not a benefit of the pill in people already eating fish
[@manson2019n3].

REDUCE-IT (n=8179) found a real benefit — a primary-event rate of 17.2% vs 22.0%, **HR 0.75, absolute
reduction 4.8 percentage points, number-needed-to-treat 21** over 4.9 years
[@bhatt2019] — but in a narrow high-risk stratum, at a
prescription dose and form, with a real harm (atrial-fibrillation hospitalization 3.1% vs 2.1%, P=0.004)
and an unresolved comparator controversy (the mineral-oil placebo raised LDL \~10%)
[@bhatt2019]. The authors state the scope directly: the
result *«should not be generalized to other n-3 fatty acid preparations — in particular, dietary-supplement
preparations of n-3 fatty acid mixtures»* [@bhatt2019].

REDUCE-IT's atrial-fibrillation signal is not an idiosyncrasy of one trial or the icosapent-ethyl form
— it is a dose-dependent class harm of marine-omega-3 supplements. Gencer's 2021 meta-analysis pooled
7 marine-omega-3 CV-outcome RCTs (81,210 participants) and found supplementation raised incident atrial
fibrillation overall (HR 1.25, 95% CI 1.07-1.46), rising with dose — HR 1.12 at <=1 g/day, HR 1.49
(1.04-2.15) above 1 g/day, and HR 1.11 (1.06-1.15) per additional 1 g/day.
[@gencer2021] The signal survives
dropping REDUCE-IT (HR 1.23), so neither the EPA-only form nor the mineral-oil-placebo controversy is
what drives it.
[@gencer2021] This is an
isolate-supplement harm on the same rising dose arm as the ischemic benefit; it does not touch the
fish-as-food recommendation, where the atrial-fibrillation associations from eating fish are null
(Jayedi, above).
[inferred from @gencer2021]

**The lesson for fish-as-food:** "omega-3" is not the exposure — the exposure is *this compound, at this
dose, in this stratum* -> [[Is the Food Category Doing Any Work]], [[Dietary Supplements]]. For a replete
general-population adult, the OTC fish-oil capsule did nothing; and whole fish differs from any capsule in
ways the trials cannot capture — the food matrix, the **selenium that co-occurs with mercury** in fish,
iodine and vitamin D, and what the fish *displaces* on the plate. None of that is evidence the food beats
the isolate on hard outcomes; it is a reason not to treat a null supplement trial as a verdict on the food.
The same food-versus-isolate split holds for the aging brain (the *Cognitive decline and dementia*
section above).

[inferred from @manson2019n3; @bhatt2019]

</div>

## Where fish sits in the ranking — a pebble

For the general replete adult, fish is a pebble, not a big rock. The adult CHD-mortality benefit is
observational, with the loop open — no trial ever fed people fish and counted deaths. And the
isolated-nutrient RCTs split by stratum: null in the replete general population (VITAL), positive only at
high dose in high-risk statin-treated patients (REDUCE-IT) -> [[Is the Food Category Doing Any Work]],
[[Dietary Supplements]]. A replete general-population adult should not expect the cohort magnitude.

The neurodevelopment benefit is repletion only. It matters for a mother whose DHA or iodine status is low,
and it is a flat zero once requirements are met -> [[Deficiency Repletion vs Enhancement]].

For someone who smokes, is obese, or is sedentary, no precision about which fish to buy changes what they
should do next. The large levers are elsewhere. Fish earns a place on the list only once the big rocks are
handled — and then, choose oily and low-mercury, and don't fry it.

[inferred from @efsaseafood2014; @jayedi2020fish]

<div class="recent-update" data-last-updated="2026-09-03">

## What the evidence here cannot yet answer

- **The methylmercury toxicity arm is borrowed.** EFSA's opinion here is the *benefit* side; the mercury
  dose-response and the tolerable-intake derivation live in a separate CONTAM 2012 opinion not held here,
  so the harm side is quoted rather than independently appraised.
- **No fish RCT exists** — the outcome evidence is entirely observational, and only 33% of the pooled
  cohorts adjusted for family history, so confounding by overall diet quality and social position is
  uncontrolled. Moderate certainty is the ceiling, not a floor to build on.
- **Wild vs farmed on hard outcomes** — a stated gap (above), not a null: composition differs via feed,
  but no gold-tier source ties it to an outcome.
- **Shellfish are not appraised separately.** Held sources fold shellfish into *seafood* and never break
  it out, so the finfish benefit-risk reading does not transport: crustaceans (shrimp and similar) and
  bivalves (mussels, oysters) differ from oily finfish in omega-3 content and in contaminant profile, and
  are distinct exposures no held source separates on any outcome.
  [inferred from @efsaseafood2014]
- **Microplastics** are a *"not-yet"*: a mechanistically discussed exposure with no evidenced
  human-outcome effect, held as a candidate, neither asserted nor dismissed.

### Mandatory caveats

- **Open loop.** This wiki grades internal coherence and fidelity to its sources — never whether a
  recommendation actually improves outcomes in the world. A clean appraisal is not a validated result.
- **Appraise, do not prescribe.** This is a general, population-level appraisal, not medical advice;
  selecting species, dosing omega-3, and screening for individual contraindications are prescriber acts
  requiring information this document does not hold.
- **A general appraisal, applied per person.** Pregnancy or childbearing status, baseline cardiovascular
  risk, what the fish replaces, and local fish advisories decide the individual weighting.
- **Health axis only.** This cut weighs fish on longevity, cardiovascular and neurodevelopment outcomes;
  sustainability, fishery and welfare concerns, cost and taste are real and yours to weigh, and are not
  appraised here.
- **The target is neither agreement nor divergence with any guideline.** It is showing how the benefit and
  harm of fish decouple by species and flip by stratum, and how good — observational, moderate-certainty
  at best — that evidence is.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | What does the evidence show about eating fish (and its omega-3) on each patient-important outcome — in which direction, how large, for whom, how certain — and how does it vary by fish type (oily vs lean/white; apex-predator vs prey), by origin (wild vs farmed, marine vs freshwater), and what does the methylmercury / contaminant axis do to each outcome, weighed against any benefit found? |
> | **Evidence included** | 6 sources — 4 gold, 2 high |
> | **Overall certainty** | **Medium** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | All sources are gold or high tier. |
> | **Last updated** | 2026-09-03 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Fish.md) |

</div>

## References

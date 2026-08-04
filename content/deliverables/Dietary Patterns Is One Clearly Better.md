---
type: deliverable
title: Comparing the Major Dietary Patterns
question: Across the major named dietary patterns, is any clearly superior or inferior on patient-important outcomes, how good is the evidence, and how much does the pattern label matter versus the shared core, total energy, and adherence?
aliases: [Dietary Patterns Compared, Best Diet Pattern, Mediterranean vs Low-Carb vs Vegan, Is One Diet Clearly Better]
sources: [Estruch - PREDIMED Mediterranean Diet 2018, Naude - Low-Carbohydrate vs Balanced-Carbohydrate 2022, Goldenberg - Low Carbohydrate Diets T2D Remission 2021, Lean - DiRECT T2D Remission 2018, Churuangsuk - Diabetes Diets Umbrella Review 2022, Szczerba - Diet Type 2 Diabetes Umbrella Review 2023, WHO - Saturated and Trans Fatty Acid Intake 2023, Hooper - Saturated Fat Reduction Cardiovascular Cochrane 2020, Reynolds - Carbohydrate Quality and Human Health 2019, Brown - Cholesterol-Lowering Dietary Fiber Meta-Analysis 1999, SACN - Carbohydrates and Health 2015, WCRF - Meat Fish and Dairy Products and Cancer 2018, NutriRECS - Red and Processed Meat Recommendations 2019, Dehghan - PURE Fats Carbohydrate Mortality 2017, ESC - CVD Prevention Guidelines 2021]
confidence: low
created: 2026-07-30
updated: 2026-08-04
self_critiqued: 2026-07-30
---

## The verdict up front

**No named dietary pattern is established as clearly superior on patient-important outcomes, and the
reason is not that they are equal -- it is that the evidence to crown one barely exists.** Almost all
the pattern-level evidence is observational and confounded by the healthy-user problem: people who eat
"a Mediterranean diet" or "a plant-based diet" in a cohort also exercise more, smoke less, and are
wealthier, so a pattern's association with lower disease is weak evidence the pattern *caused* it
([[Is the Food Category Doing Any Work]]; [[Measurement Error in Dietary Assessment]]). The handful of
randomized trials that test whole patterns against hard outcomes are the high-quality islands, and they
are small in number and modest in what they show.

Once the evidence is graded rather than counted, three things fall out.

- **One pattern has genuine RCT hard-outcome support, and even it is narrow.** The Mediterranean
  pattern cut cardiovascular *events* in a high-risk trial (PREDIMED) -- but the effect was
  stroke-driven, all-cause mortality was flatly null, and it was tested only in high-risk primary
  prevention. It is one trial carrying an internal-validity discount, held here at medium confidence
  ([[Mediterranean Diet and Cardiovascular Events]]).
- **The head-to-head diet trials find the patterns nearly interchangeable on the outcomes they can
  measure.** Low-carbohydrate versus balanced-carbohydrate diets differ by about 1 kg of weight -- a
  difference the evidence itself judges not clinically important -- and none of those trials measured a
  hard endpoint at all ([[Low-Carbohydrate vs Balanced-Carbohydrate Diets]]).
- **Most of the established benefit lives in what the good patterns SHARE, not in what divides them.**
  More vegetables, legumes, nuts and whole grains; less refined sugar and refined starch; less
  processed meat; unsaturated fat replacing saturated -- this common core is where the best-graded,
  hard-outcome component evidence sits, and every evidence-based pattern contains it.

So the decision-relevant answer to "which pattern wins" is that the question is second-order. **For
someone on a typical Western diet, moving to *any* decent pattern is the large lever; choosing *among*
decent patterns is a small one, settled mostly by adherence and preference, not by the label.** This is
configurative, not a ranking: it arranges the patterns and their evidence grades; it does not manufacture
a winner. And the honest floor under all of it -- the open loop -- is that the wiki grades coherence and
source-fidelity, never validity: no operation here tests a pattern against a realized outcome.

## The method: grade the evidence before comparing the patterns

The trap in comparing diets is weighing a strong-*looking* observational signal against a randomized
trial as if they were equal. They are not. Two discounts apply to nearly all pattern-level cohort data,
and they compound.

- **The healthy-user confound, amplified to whole patterns.** A cohort association between a "healthy"
  pattern and lower mortality is confounded by everything else health-conscious people do
  ([[Is the Food Category Doing Any Work]]).
- **Dietary measurement error.** Self-reported intake carries error large enough to flatten real
  gradients -- reported energy runs on the order of a third below measured expenditure -- so a null
  dose-response is weak evidence of no effect, and the error can run in either direction once
  mismeasured confounders enter the model ([[Measurement Error in Dietary Assessment]]).

Grade each pattern-superiority claim into one of four states, kept distinct: **benefit, harm, no
meaningful effect, or insufficient evidence.** The last two are not the same -- "the trials found the
patterns within a kilogram of each other" is a *no meaningful effect* finding; "no trial has ever tested
carnivore against heart attacks" is *insufficient evidence*. Conflating them is how a pattern with no
data reads as a pattern that is safe.

One cross-check applies throughout: **attention is an anti-signal**
([[Layer 1 - Ranking Interventions for a Stratum]]). The patterns generating the most content --
carnivore, keto -- are not the ones with the most hard-outcome evidence; if anything the relationship runs
backwards, because settled questions are boring and contested ones sell.

## The one RCT island: the Mediterranean pattern

PREDIMED is the wiki's only whole-pattern trial with hard endpoints. In 7,447 high-cardiovascular-risk
adults with no established disease (roughly half with type 2 diabetes, most hypertensive), a Mediterranean
diet supplemented with extra-virgin olive oil or nuts, versus advice to reduce fat, cut the primary
composite of heart attack, stroke and cardiovascular death: **HR 0.70 (95% CI 0.55 to 0.89)** -- about a
30% relative and 1.7-to-2.1-percentage-point absolute reduction over five years (5-year risk 3.6-4.0%
on the two Mediterranean arms vs 5.7% control)
[@estruch2018]. Read the decomposition before banking
the headline:

- **The composite is carried by stroke -- HR 0.58 (0.42 to 0.82).** Heart attack (0.80) and
  cardiovascular death (0.80) are individually non-significant, and **all-cause mortality is null, HR
  0.98 (0.77 to 1.24)** [@estruch2018]. So the honest
  claim is that the pattern reduced (mostly stroke) events in high-risk primary prevention over \~5 years;
  it did not measurably move dying.
- **It worked without weight loss.** The diet was energy-unrestricted with little between-group weight
  change, so a *composition* shift -- not a calorie deficit -- moved events
  ([[Mediterranean Diet and Cardiovascular Events]]).
- **Adherence roughly doubled the effect.** The per-protocol estimate was HR 0.42
  [@estruch2018].

Two discounts travel with it. The 2013 report was withdrawn and re-analyzed after non-random baseline
distributions were found; the 2018 re-estimate repaired this with propensity methods and the result held,
but internal validity is **RCT-with-repair, not a clean randomized contrast** -- a real, quantified
reason it is held at medium confidence. And the population was high-risk with a near-Mediterranean baseline
diet, so the authors themselves flag transportability to lower-risk or non-Mediterranean eaters as the open
question ([[Mediterranean Diet and Cardiovascular Events]]). The active contrast was largely a shift toward
unsaturated fat -- the same replacement the component evidence supports on hard events
([[Saturated Fat Intake and Replacement]]).

**The pooled Mediterranean magnitude beyond this single trial -- Mediterranean-adherence meta-analyses
and umbrella reviews -- is a named gap, not held.** State it as a gap; do not invent it.

## The head-to-head diet trials: near-equivalence on surrogates, silence on hard outcomes

Where whole patterns are put head to head, the differences are small and the endpoints are soft. The
Cochrane review of low-carbohydrate versus balanced-carbohydrate diets included 61 randomized trials; in
its weight outcome (37 of them, n=3286, adults without diabetes, 3-to-8.5 months) the between-group
difference was about **1 kg** (MD 1.07 kg lower, 95% CI 1.55 to 0.59 lower) -- and it judged that **not
clinically important**, because the intervals excluded an appreciable effect in either direction
[@naude2022, Summary of findings 1-4]. Two facts
make that \~1 kg smaller than it looks:

- **The comparator does most of the work.** In the subgroup where both arms were matched on energy
  prescription, the low-carb advantage shrank to a small, statistically-significant effect with **zero
  heterogeneity (I2=0%)**; the larger effects came from ad-libitum versus energy-restricted comparisons
  [@naude2022, Analysis 1.2].
- **Early low-carb loss is partly water.** A 2-to-3 kg reversible glycogen-linked diuresis, restored on
  refeeding, can absorb the whole between-arm difference [@naude2022, Authors' conclusions].

And the endpoints: **no trial in that review reported all-cause mortality, cardiovascular mortality, heart
attack, stroke or incident diabetes** -- every measured outcome is a surrogate
[@naude2022, Results]. Per the expectancy test that
is *unprobed*, not *disproved*: long-latency diet trials are impractical, so the hard-outcome comparison
between these patterns has never been run ([[Surrogate Outcomes]]).

**Two pattern-defining head-to-head trials that would carry this question are named gaps, not held:** the
DIETFITS trial (low-fat vs low-carb over 12 months, and its test of whether genotype or insulin status
picks the winner) and a network meta-analysis of 14 named diets that estimates the between-diet weight
near-equivalence directly. Name them; do not state magnitudes for them.

## Per pattern: benefit, downside, and evidence grade

Assigned from the held evidence, not pre-set. "Grade" reads: is the outcome hard or a surrogate, is it RCT
or observational, and how large is the confounding discount.

| Pattern | Best-evidenced effect | Downside / caveat | Evidence grade |
|---|---|---|---|
| **Mediterranean** | CV events HR 0.70 (stroke-driven); mortality null | high-risk-only; single trial + reanalysis discount | **hard outcome, RCT, medium** -- the strongest held |
| **DASH** | designed to lower blood pressure | BP is a surrogate; magnitude **not held** | feeding-RCT on a surrogate -- **gap** |
| **Vegetarian / vegan** | cohort associations with lower risk | healthy-user confound; B12/iron/omega-3/protein-quality repletion needed | **observational -- gap** (AHS-2, pooled SR not held) |
| **"Plant-based"** | label spans whole-food to ultra-processed | the word does not fix the exposure | **ambiguous exposure** ([[Is the Food Category Doing Any Work]]) |
| **Omnivore / "balanced"** | the comparator most trials use | -- | the reference arm, not a tested pattern |
| **Animal-based / carnivore** | short-term glycemic/weight signal (shared with low-carb) | maximal saturated fat -> LDL/apoB; zero fibre; adequacy unknown | **insufficient -- no hard-outcome data at all** |
| **Ketogenic / low-carb** | HbA1c -0.47% and short-term T2D remission | attenuates by 12 mo; LDL rises; \~1 kg vs balanced | **surrogate/intermediate, RCT, moderate** |

Two rows need their numbers stated in full.

### Low-carb / keto

In people with type 2 diabetes, a low-carbohydrate diet produced short-term
remission -- **32 more remissions per 100 at 6 months (NNT \~3)** under the definition that lets medication
continue -- but the effect **attenuates by 12 months** (the 6-month remission risk difference of 0.32 falls
to 0.10), and under the stricter definition requiring people to come off medication it is never
statistically significant [@goldenberg2021, Table 2].
Weight follows the same decay (MD -3.46 kg at 6 months to +0.29 kg at 12), and LDL rises (+0.14 mmol/L at
12 months, above the review's own clinical threshold) [@goldenberg2021, Table 3].

Crucially, the remission is best read as a **weight-loss effect delivered by a
low-carb route, not a carbohydrate effect per se**: the DiRECT trial put **46% of people into remission
on an 825-853 kcal formula diet that was 59% carbohydrate** -- the opposite of low-carb -- with remission
scaling with kilograms lost [@lean2018, Findings]. So carbohydrate
restriction is *one* lever for the weight loss that drives remission, not a necessary one
([[Carbohydrate Restriction and Type 2 Diabetes Remission]]).

Two umbrella reviews of every type-2-diabetes diet meta-analysis confirm and sharpen this. Across the
whole map, **no macronutrient profile is superior for weight** (low-carb ties higher-carb at GRADE high);
what separates the diets is **energy-delivery format** — total diet replacement reaches **54% remission
at GRADE high**, whereas the much-marketed keto-remission figure is a **single non-randomised study**
(Virta, 20% remission, GRADE very-low — the weakest cell in the map), and *«no RCT has evaluated
ketogenic diets for type 2 diabetes remission»* [@churuangsuk2022].
Composition *does* separate on the **glycaemic and lipid surrogates** — low-carb lowers HbA1c (−0.47%) and
triglycerides (−0.30), both GRADE high — but not on weight
[@szczerba2023]. So the strongest remission
evidence sits on a high-carb, energy-controlled format, and the low-carb remission claim rests on the
weakest design available.

The Cochrane review also flags a
contraindication in its own voice: caution in people with atherogenic-lipoprotein hyper-response to
high-fat, low-carbohydrate eating [@naude2022, Authors' conclusions].

### Animal-based / carnivore

This is a clear worked instance of *attention is an anti-signal*:
enormous discussion, **zero hard-outcome evidence.** Its short-term metabolic signal is the low-carb one
above (shared, not distinctive), and its distinctive feature -- maximal saturated fat plus near-zero
carbohydrate -- pushes LDL, and hence apoB-bearing particle number, upward, which is a genuine concern
because LDL/apoB is the validated exception to the wiki's surrogate scepticism: it *causes* atherosclerotic
disease in proportion to how much and how long it is lowered ([[LDL ApoB and Cumulative Exposure]];
[[Surrogate Outcomes]]). It also forgoes fibre entirely. None of this is a hard-outcome verdict -- it is
mechanism plus the absence of a trial -- and the fibre/micronutrient-adequacy question for a
muscle-meat-only diet is unheld.

### The carbohydrate-quantity picture is a U, not a slope, and it is substitution-dependent

The large
PURE cohort found higher carbohydrate associated with higher total mortality (top-vs-bottom quintile HR
1.28, 95% CI 1.12 to 1.46), yet found no support for very-low-carbohydrate intakes either -- moderate
intake (\~50-55% of energy) looked more appropriate than either extreme
[@dehghan2017].

The highest-carbohydrate
quintiles are also the poorest, eating largely refined-carbohydrate subsistence diets, so the signal is
plausibly a refined-carb and poverty one rather than carbohydrate per se. But this must be lodged as a
*residual*-confounding caveat, not a demonstrated artifact: PURE adjusted for education, household
income, household wealth and country economic level and reported the association **robust** and its
results **unchanged** [@dehghan2017]. So measured
socioeconomic status does not explain it away; the caveat is that measured SES may not fully capture the
refined-carb/poverty channel ([[The U-Shaped Association Artifact]]).

A cohort analysis reframing
low-carb mortality as depending on *what replaces* the carbohydrate (plant vs animal) is a named gap, not
held.

## The shared core: where the established benefit actually lives

The evidence-based patterns -- Mediterranean, DASH, sensible omnivore, whole-food plant-based -- converge on
a common core, and it is the component evidence for that core, not the pattern labels, that carries the
best-graded and hardest outcomes.

- **Unsaturated fat replacing saturated fat.** Reducing saturated fat cut cardiovascular events (RR 0.83,
  95% CI 0.70 to 0.98; about **15 fewer events per 1000**, moderate certainty; number-needed-to-treat \~56
  over four years) -- but was a well-graded **null on mortality** (all-cause RR 0.96, 0.90 to 1.03)
  [@hooper2020]; and the benefit
  depends on what replaces the fat, with unsaturated fat and whole-food carbohydrate setting the sign
  [@who2023saturated, Annex 6]
  ([[Saturated Fat Intake and Replacement]]).
- **Fibre and whole grains.** Higher fibre tracks 15-30% lower risk across mortality, coronary disease,
  diabetes and colorectal cancer -- but that is observational (all-cause RR 0.85 highest-vs-lowest; \~13
  fewer deaths per 1000), while the RCT-grade effect, on the LDL surrogate, is real but small (viscous
  fibre -0.057 mmol/L per gram) [@reynolds2019; @brown1999] ([[Dietary Fibre and Health]]).
  Whole-grain benefit probably runs *through* the fibre; **refined grains are not found harmful** (RR 1.00
  for cardiovascular events and diabetes), so this is a benefit-of-fibre story, not a harm-of-grains one
  [@sacn2015, 7.9, 7.11] ([[Whole Grains Refined Grains and Pulses]]).
  A daily portion of pulses lowers LDL by \~0.2 mmol/L [@esc2021].
- **Less processed meat.** Processed meat's colorectal-cancer association is significant (RR 1.16, 95% CI
  1.08 to 1.26 per 50 g/day); unprocessed red meat's is not (RR 1.12, 1.00 to 1.25 per 100 g/day). In
  absolute terms a realistic reduction is on the order of **7 fewer cancer deaths per 1000 over a
  lifetime, at low certainty** [@wcrf2018]
  [@nutrirecs2019]
  ([[Red and Processed Meat and Cancer]]).

The pattern point: a Mediterranean diet, a DASH diet and a whole-food plant-based diet all *contain* this
core. Much of each pattern's established benefit is therefore attributable to the shared core rather than to
the distinguishing feature -- though the exact split between core and distinguishing feature is not
cleanly estimated by any held source, and should not be asserted as a number.

## The pattern label versus energy, adiposity, and adherence

Decompose the real-world effect of "choosing a pattern" into four terms, and the label comes out small.

- **Total energy and adiposity dominate the metabolic outcomes.** DiRECT's remission scaled with
  kilograms lost regardless of macronutrient composition [@lean2018, Findings]; the head-to-head weight advantage shrinks to a small, zero-heterogeneity subgroup effect
  once energy prescription is matched
  [@naude2022, Analysis 1.2].
- **Adherence is part of the effect, and it is poorly delivered.** In the 61-trial low-carb review, the
  intervention-fidelity field was often "not reported" (about a quarter of arms) or frankly poor, so the
  estimate is the effect of *assigning* a diet at the adherence achieved -- not the effect of eating it
  [@naude2022]. PREDIMED's per-protocol
  effect (HR 0.42) was well below its intention-to-treat effect (0.70)
  [@estruch2018]. The diet a person *keeps* can beat the
  diet that scores best on paper.
- **The label carries what is left**, and on the head-to-head evidence that residual is small and measured
  only on surrogates.

So the decomposition answer: **energy/adiposity and adherence and the shared core carry most of the
established benefit; the named pattern carries little that is RCT-proven.** Structural and cultural fit --
what a person will actually sustain -- is a legitimate layer-3 selection criterion precisely because it
operates on the term (adherence) that dominates.

## Name the non-health axis, and stop

Several patterns blend a health objective with a non-health one. Whole-food plant-based, vegan, and the
EAT-Lancet "planetary health" pattern carry **environmental and ethical** objectives alongside the health
claim. This deliverable records *that* the trade-off exists and its direction -- these patterns are argued
partly on carbon, water and animal-welfare grounds -- and **never prices or nets it against the health
finding.** The wiki holds no environmental data and must not simulate any
([[The Weighting Problem - Why Population Guidance Is Ill-Posed and Individual Advice Is Not]]). A pattern's
*health* claim has to stand on health evidence alone; the cross-axis weighting is the person's, elicited per
case, not supplied here. (The EAT-Lancet reference -- both a pattern definition and the worked
health-versus-environment case -- is a named gap, not held.)

## The Layer-1 ranking: the result, not a manufactured winner

For someone on a typical Western diet, size the two moves against each other
([[Layer 1 - Ranking Interventions for a Stratum]]):

- **Moving to any decent pattern** captures the shared core -- the levers with the best-graded,
  hardest-outcome evidence the wiki holds (unsaturated-fat replacement's 15 events per 1000; the fibre and
  processed-meat effects). This is the large lever.
- **Choosing among decent patterns** is second-order: the head-to-head trials find near-equivalence on
  surrogates and silence on hard outcomes, and the one pattern with RCT hard-outcome support (Mediterranean)
  is stroke-specific, mortality-null and high-risk-only.

**The ceiling is itself the finding.** Once a person eats a broadly decent pattern, the remaining
between-pattern gain is small and mostly unmeasured, and that licenses them to stop optimizing the label
and optimize adherence instead -- it is a result, not a failure to find a winner. The individual choice
(Mediterranean vs plant-based vs a sensible lower-carb omnivore diet) is then set at layer 3 by baseline
risk, outcome priorities, cultural fit, adequacy, and what the person will sustain.

## Gaps -- stated plainly, not guessed

The evidence to rank patterns confidently is largely not in the wiki, and several pattern-defining sources
are named acquisition targets rather than held findings. Each gap below is anchored to the held page it
would extend:

- **DASH feeding trials** -- the pattern's blood-pressure magnitude, on a surrogate that the wiki holds
  only for sodium ([[Sodium Intake and Blood Pressure]]). Not held.
- **A network meta-analysis of 14 named diets** and **the DIETFITS trial** -- the head-to-head weight
  near-equivalence, and the test of whether genotype or insulin status personalizes the choice; would
  extend [[Low-Carbohydrate vs Balanced-Carbohydrate Diets]]. Not held.
- **Mediterranean-adherence meta-analyses and umbrella reviews** -- the pooled Mediterranean magnitude
  beyond the single PREDIMED trial ([[Mediterranean Diet and Cardiovascular Events]]). Not held.
- **Adventist Health Study-2 and a pooled vegetarian/vegan systematic review** -- the plant-based cohort and
  its pooled layer, including the B12/iron/omega-3/protein-quality repletion sub-question. Not held.
- **A carbohydrate-mortality analysis reframing low-carb as substitution-dependent** (plant vs animal
  replacement) and **dietary-pattern network meta-analyses for glycaemic outcomes.** Not held.
- **EAT-Lancet** -- a pattern definition plus the health-versus-environment worked case. Not held.

Until these are ingested, magnitudes for the patterns they define are not stated -- naming the gap is the
honest move, and inventing a number would be the dishonest one.

## Mandatory caveats

- **Open loop (R1).** This grades internal coherence and fidelity to the sources; it grades **no** pattern
  against a realized outcome. A clean audit here is not a validated recommendation.
- **Appraise, do not prescribe.** This appraises what the evidence shows about patterns for groups; it is
  not a meal plan. Restrictive patterns raise adequacy and screening questions that belong to a clinician,
  not this page -- vegan without B12; keto or carnivore with lipid or renal concerns; any restrictive
  pattern in pregnancy, childhood, or a history of disordered eating.
- **A stratum-level appraisal, applied per person.** Baseline diet, risk profile, preferences, cultural
  fit, and sustainability set the individual choice (layer 3); the between-good-pattern choice is largely
  preference plus adherence.
- **Health axis only.** Where a pattern carries an environmental or ethical axis (plant-based, EAT-Lancet),
  the trade-off is named, never priced against the health finding.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | Across the major named dietary patterns, is any clearly superior or inferior on patient-important outcomes, how good is the evidence, and how much does the pattern label matter versus the shared core, total energy, and adherence? |
> | **Evidence included** | 15 sources — 9 gold, 5 high, 1 moderate |
> | **Overall certainty** | **Low** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | 1 source(s) below the gold evidence bar feed this page: Dehghan (cohort, moderate). Each labelled by tier; none load-bearing for the core claims. |
> | **Last updated** | 2026-08-04 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Dietary%20Patterns%20Is%20One%20Clearly%20Better.md) |

## References

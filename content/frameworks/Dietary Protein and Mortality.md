---
type: framework
question: Does dietary protein intake change mortality, and does the protein SOURCE (animal vs plant) matter more than the amount?
aliases: [Protein Source and Mortality, Plant vs Animal Protein Mortality, Protein Intake Mortality, Protein and Longevity, Protein Mortality]
authors: [Naghshi, Sina; Sadeghi, Omid; Willett, Walter C; Esmaillzadeh, Ahmad; Seidelmann, Sara B]
sources: [Naghshi - Dietary Protein Mortality 2020, Seidelmann - Carbohydrate Intake Mortality 2018]
cluster: nutrition
confidence: low
relationships:
  related_to:
    - Protein and Resistance Training for Muscle and Strength
    - Is the Food Category Doing Any Work
    - Measurement Error in Dietary Assessment
    - Surrogate Outcomes
    - Whole Grains Refined Grains and Pulses
    - Dietary Fibre and Health
    - The Estimate-to-Action Gap
created: 2026-08-05
updated: 2026-08-06
self_critiqued: 2026-08-06
---

The popular framing is about *how much* protein — high-protein for longevity, or high-protein as a
kidney/longevity risk. **This meta-analysis (observational) associates lower mortality with protein
SOURCE, not amount.** Total protein is weakly inverse with all-cause mortality, animal protein is flatly
null on every outcome, and the signal tracks **plant** protein. The decision this points to is not a
dose — it is a **substitution**: shift protein-bearing foods from animal toward plant sources. (Whether
the lever is the *protein* or the plant *foods* it rides in is unresolved here — see the fibre-collinearity
gap at the foot of the page.)

**This is the mortality (patient-important, observational) half of the protein story; the muscle/
strength half (surrogate, RCT-grade, the \~1.6 g/kg dose) lives on
[[Protein and Resistance Training for Muscle and Strength]]** — a genuinely distinct decision-question
(what to eat vs how much), not two facets of one. Single gold source (an opener); `confidence: low`
until a second cohort/MA (Song 2016, Budhathoki 2019) is woven in.

[inferred from @naghshi2020]

## The effect estimates — source is the axis, not amount

Prospective cohorts only (32 studies, 715 128 participants, 113 039 deaths); highest-vs-lowest,
fully-adjusted, random-effects. **All observational — associations, not causal effects.**

| Exposure | All-cause | CVD | Cancer |
|---|---|---|---|
| **Total protein** | «0.94 ... 0.89 to 0.99» (inverse) | «0.98 ... 0.94 to 1.03» null | «0.98 ... 0.92 to 1.05» null |
| **Animal protein** | «1.00 ... 0.94 to 1.05» **null** | «1.02 ... 0.94 to 1.11» null | «1.00 ... 0.98 to 1.02» null |
| **Plant protein** | «0.92 ... 0.87 to 0.97» inverse | «0.88 ... 0.80 to 0.96» inverse | «0.99 ... 0.94 to 1.05» null |

[@naghshi2020, Results]

- **Animal protein is null on all three outcomes** — the clean finding at the aggregate. But the animal
  bucket pools red meat with dairy, eggs and poultry, so this null does **not** clear the animal-protein
  nutrient: a red-meat-specific protein effect diluted to null within the mixed bucket cannot be ruled
  out here (see the food-category caveat below). What it does show is that *aggregate* animal protein is
  not a mortality signal.
- **Plant protein carries the benefit**, on all-cause and CVD mortality (not cancer).
- **Total protein's inverse arm is the plant component showing through.** «Given that plant protein is
  part of total protein, the observed inverse association for intake of total protein seems to be
  related to its plant protein component.» [@naghshi2020, Mechanisms]

**The magnitude is small and the shape is inverse-monotone, no U.** The one significant dose-response:
«an additional 3% of energy from plant proteins a day was associated with a 5% lower risk of death from
all causes (pooled effect size 0.95, 95 0.93 to 0.98, P<0.001)» — with significant non-linearity
(P=0.05, a steepening of the inverse relation). Total and animal protein dose-response were both flat
(0.99, NS). [@naghshi2020, Linear and non-linear dose-response analysis]

No protein type shows an upper-arm harm, so the [[The U-Shaped Association Artifact]] hazard does not
arise — there is no protective lower arm to adjudicate. The live question is whether the *inverse* arm is
causal, and being observational it is unchecked by Mendelian randomization.
[inferred from @naghshi2020]

## Why *animal protein* is the wrong exposure — the food-category caveat

The animal-protein null does not clear animal-source *foods*. Naghshi's own reading is a textbook
nutrient-vs-food case [[Is the Food Category Doing Any Work]]: «the exposure variable was meat as a food
group, whereas our exposure variable was protein as a nutrient. Animal meat contains fat, sodium, iron,
and B vitamins in addition to protein» — so «findings for animal meat and animal protein could be
different.» And the animal-protein bucket «combin[es] protein from different animal sources, including
poultry, eggs, and dairy foods» — a heterogeneous mix whose average may describe no single food.
[@naghshi2020, Comparison with other studies]

**So the null is a null on the *nutrient*, not a green light for the *foods*** — red/processed meat harm
(a food-level finding elsewhere) is untouched by it.

## How robust is the plant-protein signal

- **Survives macronutrient adjustment; total protein does not.** «When we confined the analysis to
  studies that had made these adjustments [fat/carbohydrate], the inverse association of plant protein
  with all cause and cardiovascular disease mortality changed little, whereas the inverse association
  between intake of total protein and all cause mortality became non-significant.»
  [@naghshi2020, Comparison with other studies] The
  plant-protein result is the sturdier one; the total-protein result is fragile.
- **But confounded by diet pattern and social class (author's own caveat).** «Consumption of animal and
  plant proteins could be a marker of broader dietary intake patterns—or even of social class, an
  important independent predictor of many health outcomes.»
  [@naghshi2020, Comparison with other studies]
- **Measurement error attenuates toward null.** «Measurement errors in dietary assessment are
  inevitable and would have tended to underestimate the associations with protein intake»
  [@naghshi2020, Strengths and weaknesses] -> the true
  gradient may be steeper than measured [[Measurement Error in Dietary Assessment]].
- **Publication bias possible** (Egger's positive for total-all-cause, total-CVD, plant-CVD) but
  trim-and-fill left the estimates unchanged.

[inferred from @naghshi2020]
## The proposed mechanisms — directional, not outcome evidence

Naghshi proposes: animal protein raises IGF-1 (linked to cancer/age-related disease) where plant
protein does not; plant protein associates with favourable BP, waist, body composition and lower plasma
cholesterol; gut fermentation of plant protein lowers toxic/carcinogenic metabolites; and plant
protein's amino-acid profile (lower lysine/histidine; more arginine) plausibly lowers apoB-lipoprotein
secretion and shifts the glucagon/insulin balance. These are **mechanism-grade with mixed human
corroboration** — they inform *direction*, and must not be read as outcome findings.

## Corroborated by Seidelmann 2018 (type-F, shared-school — NOT independent-E)

Seidelmann's carbohydrate->mortality study ([[The U-Shaped Association Artifact]],
[[Low-Carbohydrate vs Balanced-Carbohydrate Diets]]) reaches the **plant-favourable / animal-unfavourable
substitution** verdict from a *carbohydrate* frame rather than a *protein* one: substituting plant fat
and protein for carbohydrate was associated with **lower** all-cause mortality, animal fat and protein
with **higher**. The direction agrees with Naghshi's source-axis on a second dietary framing — but this
is **F/shared, not independent-E**, so it earns **no `[E-independent]` token and no confidence lift**
(the page stays `confidence: low`): **Willett is a co-author on BOTH papers**, and Seidelmann's
meta-analysis pools the same **NHS/HPFS** (Fung) cohorts Naghshi's protein MA draws on — a shared
confounding structure would move both. It is listed in `sources:` because the parameter table below
extracts its distinct values (not a corroboration-only line), but the second listing does **not** make
this two *independent* routes.

**Parameter table** (op-weave 2a — the apparent animal discrepancy is a unit difference, not a tension):

| Parameter | Naghshi 2020 (protein source) | Seidelmann 2018 (carb substitution) | Same quantity? |
|---|---|---|---|
| Plant signal, all-cause | «0.92 ... 0.87 to 0.97» (highest-vs-lowest plant *protein*) | «0·82, 0·78-0·87» (plant fat+protein *substituted for carb*) | **no — same inverse DIRECTION, different estimand** |
| Animal signal, all-cause | «1.00 ... 0.94 to 1.05» **null** (animal *protein* nutrient) | «1·18, 1·08-1·29» **harm** (animal fat+protein-for-carb *pattern*) | **no — nutrient-null vs pattern-harm** |
| Exposure unit | protein as a nutrient, energy-adjusted | a low-carb dietary *pattern* (protein AND fat) replacing carbohydrate | **NO** |
| Design / independence | 32-cohort FFQ MA; senior author Willett | ARIC + 8-cohort FFQ MA; senior author Willett; PURE/NHS/HPFS overlap | **shared school + overlapping cohorts — NOT independent** |

[@naghshi2020, Results · (Seidelmann - Carbohydrate Intake Mortality 2018) , Findings]

**The animal null (Naghshi) and animal-substitution harm (Seidelmann) do NOT contradict — not-joined
check (ii) fires on the unit.** Naghshi isolates the *protein nutrient* (null); Seidelmann measures a
whole low-carb *pattern* that carries animal fat with the protein. Naghshi's own nutrient-vs-food caveat
predicts exactly this — «animal meat contains fat, sodium, iron, and B vitamins in addition to protein»
— so the harm in Seidelmann's animal score is substantially the accompanying fat and pattern, **which is
consistent with animal protein-the-nutrient being null**. The two *reinforce* the nutrient-vs-food
distinction rather than clashing -> [[Is the Food Category Doing Any Work]].
[inferred from @naghshi2020; @seidelmann2018]

## Decision relevance

- **The lever is source-substitution, not a protein target.** Replacing animal-protein foods with
  plant-protein foods (legumes, nuts, whole grains, soy) is associated with lower all-cause and CVD
  mortality; raising or lowering *total* protein does little on its own. «Replacement of foods high in
  animal protein with plant protein sources could be associated with longevity.»
  [@naghshi2020, Conclusions]
- **The effect is modest** (\~5% lower all-cause mortality per +3% energy from plant protein, relative,
  observational) — a real but small lever, ranked below the big rocks and delivered on associational
  evidence, not a causal RCT. The **absolute** risk reduction is baseline-risk-dependent and not
  derivable from a highest-vs-lowest observational contrast, so no absolute figure is stated.
- **This does not conflict with the muscle-protein target.** Hitting \~1.6 g/kg for muscle
  ([[Protein and Resistance Training for Muscle and Strength]]) is a *quantity* decision on a surrogate;
  this is a *source* decision on mortality. You can satisfy both: reach the amount, bias the sources
  plant-ward. Quality (DIAAS) is the bridge — plant sources are lower-DIAAS, so a plant-shifted diet
  needs more grams or complementation to hold the muscle target -> [[Protein Quality and the DIAAS Score]].

## Limits

- **All observational; no causal claim.** Residual confounding (diet pattern, social class) is the
  author's own leading caveat.
- **The *animal protein* and *plant protein* labels are heterogeneous buckets** — the animal bucket pools
  poultry/eggs/dairy/red meat; the plant bucket pools legumes/grains/nuts. Category-level estimates over
  a wide mix (the food-category trap).
- **Western-dominated cohorts** — animal-protein generalisability to low/middle-income (carb-rich, low
  animal-source) diets is limited.
- **One INDEPENDENT source** — `confidence: low`. Naghshi is the gold opener; Seidelmann corroborates the
  substitution axis but is **not independent** (shared Willett lineage + NHS/HPFS cohort overlap), so it
  adds no confidence. AWAITS a genuinely independent cohort/MA
  ([@song2016]) — off the Willett lineage — to lift the animal-vs-plant
  question and test whether the plant signal is independent of the fibre/whole-grain lever it may run through.

## The plant-protein signal may be the fibre/pulse lever under another name (a gap)

Plant-protein foods *are* largely the legume/whole-grain/nut foods the wiki already credits with lower
mortality via **fibre** [[Dietary Fibre and Health]] and the pulse/whole-grain evidence
[[Whole Grains Refined Grains and Pulses]]. Naghshi cannot separate the plant-protein nutrient from the
food matrix carrying it, so whether *plant protein* is an independent lever or a proxy for those foods
is **unresolvable here** — a G-gap, and a caution against double-counting it as a separate big rock.
[inferred from @naghshi2020]

## References

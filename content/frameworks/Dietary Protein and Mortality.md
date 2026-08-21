---
type: framework
question: Does dietary protein intake change mortality, and does the protein SOURCE (animal vs plant) matter more than the amount?
aliases: [Protein Source and Mortality, Plant vs Animal Protein Mortality, Protein Intake Mortality, Protein and Longevity, Protein Mortality]
authors: [Naghshi, Sina; Sadeghi, Omid; Willett, Walter C; Esmaillzadeh, Ahmad; Seidelmann, Sara B; Budhathoki, Sanjeev; Sawada, Norie; Iwasaki, Motoki; Tsugane, Shoichiro]
sources: [Naghshi - Dietary Protein Mortality 2020, Seidelmann - Carbohydrate Intake Mortality 2018, Budhathoki - Animal Plant Protein Mortality 2019]
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
updated: 2026-08-19
self_critiqued: 2026-08-19
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
(what to eat vs how much), not two facets of one. `confidence: low` — and it **stays** low after
Budhathoki 2019 (the JPHC Japanese cohort) was woven in, because Budhathoki turns out to be a
**constituent study pooled inside Naghshi**, so it is refinement (type-F), not the independent
replication (type-E) that would lift confidence. A genuinely independent cohort — one NOT in Naghshi's
32 — is still owed.

[inferred from @naghshi2020]

## The effect estimates — source is the axis, not amount

Prospective cohorts only (32 studies, 715 128 participants, 113 039 deaths); highest-vs-lowest,
fully-adjusted, random-effects. **All observational — associations, not causal effects.**

| Exposure | All-cause | CVD | Cancer |
|---|---|---|---|
| **Total protein** | «0.94 ... 0.89 to 0.99» (inverse) | «0.98 ... 0.94 to 1.03» null | «0.98 ... 0.92 to 1.05» null |
| **Animal protein** | «1.00 ... 0.94 to 1.05» **null** | «1.02 ... 0.94 to 1.11» null | «1.00 ... 0.98 to 1.02» null |
| **Plant protein** | «0.92 ... 0.87 to 0.97» inverse | «0.88 ... 0.80 to 0.96» inverse | «0.99 ... 0.94 to 1.05» null |

[@naghshi2020]

- **Animal protein is null on all three outcomes** — the clean finding at the aggregate. But the animal
  bucket pools red meat with dairy, eggs and poultry, so this null does **not** clear the animal-protein
  nutrient: a red-meat-specific protein effect diluted to null within the mixed bucket cannot be ruled
  out here (see the food-category caveat below). What it does show is that *aggregate* animal protein is
  not a mortality signal.
- **Plant protein carries the benefit**, on all-cause and CVD mortality (not cancer).
- **Total protein's inverse arm is the plant component showing through.** «Given that plant protein is
  part of total protein, the observed inverse association for intake of total protein seems to be
  related to its plant protein component.» [@naghshi2020]

**The magnitude is small and the shape is inverse-monotone, no U.** The one significant dose-response:
«an additional 3% of energy from plant proteins a day was associated with a 5% lower risk of death from
all causes (pooled effect size 0.95, 95 0.93 to 0.98, P<0.001)» — with significant non-linearity
(P=0.05, a steepening of the inverse relation). Total and animal protein dose-response were both flat
(0.99, NS). [@naghshi2020]

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
[@naghshi2020]

**So the null is a null on the *nutrient*, not a green light for the *foods*** — red/processed meat harm
(a food-level finding elsewhere) is untouched by it.

## How robust is the plant-protein signal

- **Survives macronutrient adjustment; total protein does not.** «When we confined the analysis to
  studies that had made these adjustments [fat/carbohydrate], the inverse association of plant protein
  with all cause and cardiovascular disease mortality changed little, whereas the inverse association
  between intake of total protein and all cause mortality became non-significant.»
  [@naghshi2020] The
  plant-protein result is the sturdier one; the total-protein result is fragile.
- **But confounded by diet pattern and social class (author's own caveat).** «Consumption of animal and
  plant proteins could be a marker of broader dietary intake patterns—or even of social class, an
  important independent predictor of many health outcomes.»
  [@naghshi2020]
- **Measurement error attenuates toward null.** «Measurement errors in dietary assessment are
  inevitable and would have tended to underestimate the associations with protein intake»
  [@naghshi2020] -> the true
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

[@naghshi2020]

**The animal null (Naghshi) and animal-substitution harm (Seidelmann) do NOT contradict — not-joined
check (ii) fires on the unit.** Naghshi isolates the *protein nutrient* (null); Seidelmann measures a
whole low-carb *pattern* that carries animal fat with the protein. Naghshi's own nutrient-vs-food caveat
predicts exactly this — «animal meat contains fat, sodium, iron, and B vitamins in addition to protein»
— so the harm in Seidelmann's animal score is substantially the accompanying fat and pattern, **which is
consistent with animal protein-the-nutrient being null**. The two *reinforce* the nutrient-vs-food
distinction rather than clashing -> [[Is the Food Category Doing Any Work]].
[inferred from @naghshi2020; @seidelmann2018]

**A larger pooled carbohydrate MA does NOT advance the source axis — Qin 2023 (G-gap) `[2026-08-19]`.**
The 41-cohort SR+MA that re-pools Seidelmann (see [[The U-Shaped Association Artifact]],
[[Low-Carbohydrate vs Balanced-Carbohydrate Diets]]) measures **total carbohydrate quantity only** and runs
**no substitution decomposition** — it cannot say what replaces the carbohydrate, so it adds pooled
magnitude to the carb-quantity arm but leaves the animal-vs-plant *source* question — the axis this page
turns on — exactly where Seidelmann left it. Its own reframing points the same way qualitatively («shifting
the focus ... from carbohydrate quantity to carbohydrate quality»), but quality/source is a **named gap** in
Qin (3 unpoolable studies), not a decomposed estimate.
[inferred from @qin2023carb]

## Budhathoki 2019 (JPHC Japan) — same verdict, and it is a CONSTITUENT of Naghshi (type-F, NOT independent-E)

Budhathoki's Japanese cohort (JPHC; 70 696 adults, 18-y follow-up, 12 381 deaths) reaches the identical
**plant-favourable / animal-null** pattern: «Higher total and animal protein intake was not associated
with risk of overall mortality or cause-specific mortality», while «higher plant protein intake was
associated with lower total and CVD-related mortality» (plant all-cause Q5 HR 0.87 [0.78-0.96], P=.01;
CVD Q5 0.73 [0.59-0.91], P=.002; cancer null).
[@budhathoki2019]

**It was predicted as the independent-E lift this page lacked, and the prediction FAILED.** The author
lists are cleanly disjoint (Budhathoki/Sawada/Iwasaki/Tsugane, National Cancer Center Japan — no Willett,
no NHS-HPFS name), and the dataset is a distinct non-Western population. **But type-E requires
independence of *data*, and that fails: Naghshi's meta-analysis POOLED Budhathoki as one of its \~32
constituent cohorts** (Naghshi's included-studies table lists «Budhathoki 2019, Japan» with the exact
JPHC counts — M 32 201, W 38 495, 12 381 deaths — and Naghshi ref 18 is «Budhathoki S, Sawada N,
Iwasaki M, et al»). So Budhathoki's data already sits inside Naghshi's pooled estimate; reading it as
independent corroboration would **double-count the JPHC data** — the laundered-E trap. **Verdict: F**,
no `[E-independent]` token, **no confidence lift** — the page stays `confidence: low`.

**What Budhathoki genuinely ADDS (why it is a refinement, not an echo).** Naghshi reports pooled
highest-vs-lowest and a per-3%-energy dose-response; Budhathoki supplies two layers Naghshi's pooling
blurs — an **isocaloric food-source substitution model** and **absolute risk**:

| Parameter | Naghshi 2020 (pooled MA) | Budhathoki 2019 (JPHC single cohort) | Same quantity? |
|---|---|---|---|
| Plant vs animal signal | plant inverse (all-cause 0.92), animal null (1.00) | plant inverse (all-cause Q5 0.87), animal null (Q5 0.98) | **yes — same pattern (but Budhathoki ⊂ Naghshi)** |
| Plant dose-response | «0.95 ... 0.93 to 0.98» per **+3%E plant-for-carbohydrate** | — | n/a |
| Food-source swap | not reported | plant-for-**red-meat** protein «0.66 ... 0.55-0.80»; plant-for-**processed-meat** «0.54 ... 0.38-0.75»; **fish**-for-red-meat 0.75 | **NO — food-for-food swap, larger than the plant-for-carb estimand** |
| Absolute risk | not derivable (highest-vs-lowest) | 15-y ARR plant-for-red-meat **3.60% (2.10-4.86)** total; processed-meat 4.95% | **NO — Budhathoki adds the absolute layer** |
| Animal-protein food mix | pooled (US-weighted, red-meat-heavy) | **fish 47.1%**, red meat 19.4%, dairy 16.7%, eggs 9.5% | **NO — fish-dominated, the transportability hinge** |

[@naghshi2020]

**Note the substitution HRs are a DIFFERENT estimand from Naghshi's dose-response, not a bigger version
of it.** Naghshi's 0.95 is +3%E plant protein replacing *carbohydrate*; Budhathoki's 0.66 is 3%E plant
protein replacing *red-meat protein* — a food-for-food swap that captures the plant benefit AND the
red-meat-removal, so it is necessarily larger. Do not read 0.66 as a stronger plant effect than 0.95.

**The Japanese fish-dominated profile SHARPENS the nutrient-vs-food point** -> [[Is the Food Category Doing Any Work]]. WITHIN "animal protein", the sources diverge: **fish-for-red-meat substitution is itself
protective (0.75)** while plant-for-dairy and plant-for-fish are null — so aggregate animal protein is
null precisely because it pools protective fish with harmful red/processed meat. Budhathoki's own
reconciliation of its animal-null vs the US animal-positive result: «This discrepancy ... may be
attributable to ... a difference in the main dietary source of animal protein, which was red and
processed meat in the US study vs fish intake in the present study.»
[@budhathoki2019]
[inferred from @budhathoki2019]

## Decision relevance

- **The lever is source-substitution, not a protein target.** Replacing animal-protein foods with
  plant-protein foods (legumes, nuts, whole grains, soy) is associated with lower all-cause and CVD
  mortality; raising or lowering *total* protein does little on its own. «Replacement of foods high in
  animal protein with plant protein sources could be associated with longevity.»
  [@naghshi2020]
- **The effect is modest** (\~5% lower all-cause mortality per +3% energy from plant protein, relative,
  observational) — a real but small lever, ranked below the big rocks and delivered on associational
  evidence, not a causal RCT. On Naghshi's highest-vs-lowest contrast the **absolute** reduction is not
  derivable; Budhathoki's JPHC model does supply one for the food-source swap — a 15-year absolute risk
  reduction of **3.60% (2.10-4.86)** in total mortality for replacing 3%E of red-meat protein with plant
  protein — but it is **model-derived from a single observational cohort**, so read it as scale, not a
  treatment effect. [@budhathoki2019]
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
- **Still zero genuinely independent sources** — `confidence: low`. Naghshi is the gold opener;
  Seidelmann is **not independent** (shared Willett lineage + NHS/HPFS overlap); Budhathoki is **not
  independent** either (its JPHC data is pooled *inside* Naghshi's MA). So all three backings share a
  data or school lineage. A genuine independent-E lift AWAITS a cohort **not among Naghshi's \~32
  constituents** — and note [@song2016] (the staged pairing candidate)
  is NHS-HPFS and near-certainly pooled in Naghshi too, so it will *not* supply independence. The owed
  source is a large non-Western / non-Naghshi-pooled cohort that could also test whether the plant signal
  is independent of the fibre/whole-grain lever it may run through.

## The plant-protein signal may be the fibre/pulse lever under another name (a gap)

Plant-protein foods *are* largely the legume/whole-grain/nut foods the wiki already credits with lower
mortality via **fibre** [[Dietary Fibre and Health]] and the pulse/whole-grain evidence
[[Whole Grains Refined Grains and Pulses]]. Naghshi cannot separate the plant-protein nutrient from the
food matrix carrying it, so whether *plant protein* is an independent lever or a proxy for those foods
is **unresolvable here** — a G-gap, and a caution against double-counting it as a separate big rock.
[inferred from @naghshi2020]

## References

---
type: framework
question: Does more milk/dairy (its calcium and protein) reduce osteoporosis and hip-fracture risk — and why do the protective associations vanish in the strongest observational designs?
aliases: [Dairy and Bone, Milk and Fracture, Dairy and Osteoporosis, Milk and Hip Fracture, Milk-Fracture Paradox, Dairy and Bone Density, Calcium from Dairy and Fracture]
authors: [Malmir, Hanieh; Larijani, Bagher; Esmaillzadeh, Ahmad]
sources: [Malmir - Milk Dairy Osteoporosis Fracture Meta-Analysis 2019]
cluster: dairy
confidence: medium
created: 2026-08-06
updated: 2026-08-06
self_critiqued: 2026-08-06
relationships:
  related_to:
    - Dairy and Cardiometabolic Health
    - Deficiency Repletion vs Enhancement
    - Vitamin D and Calcium Supplementation for Fracture Prevention
    - The U-Shaped Association Artifact
    - Is the Food Category Doing Any Work
    - Measurement Error in Dietary Assessment
    - The Observational-Trial Discordance
    - Layer 1 - Ranking Interventions for a Stratum
---

**Facet of the `dairy` cluster** (nucleus [[Dairy and Cardiometabolic Health]]) — the **bone/fracture**
endpoint, distinct from the nucleus's cardiometabolic outcomes. Cashes the nucleus's `AWAITS Malmir`
milk-fracture leg.

**The through-line (one gold observational SR-MA, Malmir 2019, 34 studies, 616k people for fracture):**
the intuitive story — *dairy is rich in calcium and protein, so more dairy = stronger bones = fewer
fractures* — **is not supported once you weight studies by design.** The protective associations appear
**only in cross-sectional and case-control studies** (reverse-causation-prone); in prospective **cohort**
studies dairy and milk are **null** for both osteoporosis and hip fracture, and milk trends *toward
harm* for hip fracture. Malmir's own verdict: «a greater intake of milk and dairy products was not
associated with a lower risk of osteoporosis and hip fracture»
[@malmir2019]. All evidence is
observational — no fracture RCT of dairy food exists. This does **not** license *dairy is bad for bone*
(the cohort signals are mostly null, not harmful); it licenses *dairy is not a fracture-prevention
lever*.

**The food route and the supplement route land in the same place — via [[Deficiency Repletion vs Enhancement]].**
Dairy *food* is null for fracture here (Malmir), and supplemental calcium + vitamin D is **also** null for
fracture in the replete, community-dwelling adult — the benefit appears only in the
deficient/institutionalized ([[Vitamin D and Calcium Supplementation for Fracture Prevention]]: Yao's D+Ca
hip benefit is concentrated where baseline status is poor). So neither nutritional route — food or
supplement — moves fracture risk in someone already replete; the better-evidenced modifiable fracture
lever for that stratum runs through **fall prevention** ([[Exercise for Preventing Falls in Older Adults]]),
not calcium intake.


## The design-discordance is the whole finding

The same exposure looks protective or null **depending on study design** — and the author reads the
discordance the way the method layer would:

| Outcome / exposure | Cross-sectional + case-control | Prospective cohort | Verdict |
|---|---|---|---|
| Total dairy -> osteoporosis | **0.63 (0.55-0.73)**, sig, I2 0% | 0.82 (0.56-1.18), NS | protective only in weak designs |
| Milk -> osteoporosis | 0.68 (0.50-0.94), sig | 1.08 (0.52-2.24), NS | protective only in weak designs |
| Total dairy -> hip fracture | 0.86 (0.53-1.37), NS | 0.90 (0.73-1.11), NS | null either way |
| Milk -> hip fracture | **0.75 (0.57-0.99)**, sig (25% lower) | 0.93 (0.75-1.15), NS; **per-200g meta-reg 1.09 (1.07-1.11)** | protective in weak designs; **null-to-harm in cohorts** |

[@malmir2019].

- **The milk-fracture paradox, stated precisely:** cross-sectional/case-control studies say high milk
  drinkers have 25% *less* hip fracture; cohorts say «every additional 200-gram increase in milk intake
  was associated with a 9% greater risk of hip fracture (RR ¼ 1.09; 95% CI: 1.07–1.11, n ¼ 8)»
  [@malmir2019]. The
  prospective, higher-quality design *reverses* the sign.
- **Author's adjudication is the design hierarchy:** «findings from cohort studies are closer to the
  causal associations than those from cross-sectional and case-control studies»
  [@malmir2019]. Cross-sectional
  and case-control designs are reverse-causation-prone (osteoporosis/fracture may *reduce* dairy
  intake, or recall differs by disease status — the diagnosis can precede the exposure measurement),
  so their protective signal is the artifact-suspect one -> [[The U-Shaped Association Artifact]],
  [[The Observational-Trial Discordance]].



## The cohort *harm* signal is Michaelsson-driven — the same artifact cohort as the milk-mortality scare

The positive milk -> hip-fracture cohort meta-regression (1.09/200 g) is **substantially driven by the
Michaelsson Swedish cohorts**: in Malmir's **milk** cohort forest plot the two largest positive,
highest-weight (\~10% each) points are Michaelsson's — female 2014 RR 1.60 (1.39-1.84) and Michaelsson
2018 RR 1.55 (1.37-1.75) — the **same cohort family** that manufactures the milk -> mortality scare on
the nucleus [[Dairy and Cardiometabolic Health]], where its removal collapses the milk-mortality signal
(I2 97.4% -> 70.1%). So the milk -> fracture *harm* and the milk -> mortality *harm* **plausibly share
one confounded, high-milk-drinking population** (lowest education, most smokers/living-alone). **Read the
+9%/200 g cohort milk-fracture signal as unadjudicated, not as evidence milk breaks bones** — but note
the caveat is that Malmir runs **no leave-one-out** on Michaelsson for fracture (its only sensitivity
statements cover other pools), and no MR/genetic instrument is in-source, so *Michaelsson is the largest
positive contributor* is verifiable from the forest plot while *Michaelsson drives the signal* is an
untested inference, not a proven decomposition. The pooled milk-cohort RR is itself null (0.93, NS); the
positive signal lives only in the meta-regression slope. The safe reading: **milk is not
fracture-protective in cohorts; the apparent per-gram harm is confounded and unproven.**



## Dairy-food fracture-null CONVERGES with the supplement-Ca/D fracture-null (independent route)

Malmir's dietary-dairy fracture-null meets the held **supplement**-Ca/D fracture-null (Kahwati 2018 gold
SR of 11 RCTs; VITAL) from a completely different direction. The parameter table (the two are commensurable
only at the level of the null *direction*, not magnitude):

| Parameter | Malmir 2019 (dairy FOOD) | Kahwati 2018 / VITAL (Ca/D SUPPLEMENT) | Same quantity? |
|---|---|---|---|
| Exposure | milk/total dairy food (matrix: Ca+protein+K+P+D) | isolated calcium and/or vitamin D | **NO** — food matrix vs isolate (both = *more Ca/D*) |
| Design | observational cohorts | RCTs (11 pooled / VITAL) | **NO** — observational vs randomized |
| Population | general adults (mostly postmenopausal women); status **not** screened | community-dwelling, **non-deficient** (excludes known deficiency/osteoporosis/prior fracture) | **PARTLY** — both broadly non-high-risk; Malmir not replete-screened |
| Fracture result | cohort NULL: dairy 0.90 (0.73-1.11); milk 0.93 (0.75-1.15) | NULL: D+Ca hip ARD -0.14%, total -0.35% | **direction YES (both null); magnitude NO** |
| Effect form | RR per-200 g / high-vs-low | absolute risk difference (RCT) | **NO** — non-commensurable |

- **What is joined (E-independent, scoped to the null direction only).** Two routes that share **no
  trials, no research group, no lineage**, and neither cites the other (Malmir cites Zhao 2017, not
  Kahwati/VITAL), reach the **same null on the same outcome**: *increasing calcium/dairy intake does not
  reduce fracture in the enhancement stratum* (Malmir's general/unscreened adult; the RCTs' verified-
  non-deficient — both enhancement-territory). The independence warrant rests **only** on Malmir's own
  dairy-cohort data; Malmir *also* draws the parallel himself — supplemental calcium and/or vitamin D
  «was not associated with a lower risk of fractures among community-dwelling older adults»
  [@malmir2019] (Zhao 2017,
  secondhand) — but that parallel-drawing is **not** part of the independence (it is Malmir citing the
  same supplement literature Kahwati summarizes, so it adds no corroborative weight). This **removes the
  empirical support for an escape hatch**: one could argue *supplements are the wrong form; real dairy
  food with its matrix would protect bone* — Malmir shows dairy **food** does not protect either, in
  cohorts. The E-lift is banked on [[Deficiency Repletion vs Enhancement]] (the fracture enhancement-null
  now has a food-source, observational witness alongside the supplement RCTs).
- **What is NOT joined (the guard).** The magnitudes are non-commensurable and the exposures differ, so
  this is **not** a same-quantity point-estimate agreement — it is convergence on the **null direction**
  only, exactly the scope the existing Kahwati/VITAL E-note carries. And Malmir does **not** screen
  calcium/vitamin-D status, so it cannot isolate the *deficient* arm: it tests *more dairy across the
  general (predominantly replete Western) adult*, which is enhancement-territory but not verified as such.
  The deficient-repletion arm stays a separate question (a genuinely calcium/D-deficient person is not
  what Malmir sampled) -> [[Deficiency Repletion vs Enhancement]].



## Dairy is a type-B category for bone too — and a dose-response J appears

- **Milk != total dairy for fracture.** Milk trends null-to-harm in cohorts (per-200g 1.09) while total
  dairy is flatly null (per-200g 0.98) — the categories diverge, so a milk finding must not read as a
  whole-dairy finding -> [[Is the Food Category Doing Any Work]]. (Cheese/yogurt were too sparse for
  their own pooled fracture cells here.)
- **A dairy -> osteoporosis J-shape:** non-linear dose-response found 50-250 g/d dairy protective but
  «dairy consumption in excess of 250 grams per day was associated with increased risk
  (Pnonlinearty¼0.005)» [@malmir2019].
  Treat the upper (>250 g/d harm) arm as **unadjudicated** — it rests largely on the same reverse-causation-
  prone designs, with no confounder-immune check -> [[The U-Shaped Association Artifact]].
- **Measurement error is a named contributor.** Malmir flags heterogeneous FFQ vs recall assessment as a
  heterogeneity source and confounder; a flattened or reversed dietary gradient is partly a measurement-
  error signature -> [[Measurement Error in Dietary Assessment]].



## Confidence, decision-relevance, gaps

- **`confidence: medium`** — one gold observational SR-MA (Malmir), *independently corroborated on the
  fracture-null direction* by the supplement RCT evidence, but: all-observational for the food exposure,
  FFQ-confounded, small heterogeneous effects, absolute risks unrecoverable, and the protective signals
  design-fragile. The `medium` rests on the **null** verdict (robust across designs when cohorts are
  weighted), not on any protective or harmful claim.
- **Decision-change (per stratum).** For someone with the big rocks handled
  ([[Layer 1 - Ranking Interventions for a Stratum]]) and **no** calcium/vitamin-D deficiency, **dairy is
  not a fracture-prevention lever** — eating more milk/dairy *to protect bone* is not supported by the
  prospective evidence, and neither are Ca/D supplements in the replete
  ([[Deficiency Repletion vs Enhancement]]). Dairy may still be eaten for other reasons (protein,
  satiety, cardiometabolic-neutral -> the nucleus); it is simply not a bone-fracture intervention here.
  What *does* prevent falls/fractures in older adults is exercise, not the pill or the glass of milk
  -> [[Exercise for Preventing Falls in Older Adults]].
- **Gaps (G):**
  - **The deficient / high-risk arm is untested here.** Malmir excludes no one by calcium/D status, so it
    speaks to *enhancement in the general adult*, not to repletion of a genuinely deficient or
    osteoporotic person — where dairy/calcium may still matter (Kahwati reports a high-risk/deficient
    benefit secondhand via Cochrane) -> [[Deficiency Repletion vs Enhancement]].
  - **No dairy-food fracture RCT** (and one is hard: whole-food, decades-long, unblindable) — the
    food-source evidence is structurally capped at observational.
  - **`G (needs aggregation)`:** a confounder-corrected (Michaelsson-adjusted) milk -> fracture pooled
    estimate across designs — a magnitude the fabric cannot compute from Malmir's reported pools.



## Self-critique `[run 2026-08-06, before commit]`

- **No dairy-bone halo, no dairy-bone scare.** The verdict is stated as *null / not a lever* — not
  *dairy harms bone* (the cohort milk-fracture *harm* is flagged Michaelsson-confounded and unadjudicated)
  and not *dairy builds bone* (the protective signal is design-fragile). Symmetric.
- **The convergence is E on the null DIRECTION only, not magnitude.** The parameter table carries the
  non-commensurability (food vs isolate; observational vs RCT; RR-per-200g vs ARD) explicitly, and the
  E-lift is scoped to the shared null and banked on the page that owns the supplement evidence — no
  point-estimate agreement claimed, no `sources:` padded with the supplement works (they stay body-line
  pointers; the distinct extracted content here is Malmir's).
- **The Michaelsson cross-link is hedged.** It is an inference from the forest-plot weights, not a
  Malmir-run leave-one-out; stated as *likely-shared confounded cohort*, unadjudicated, not proven.
- **Population caveat kept.** Malmir does not screen calcium/D status, so the enhancement framing carries
  its *not-replete-screened* hedge and the deficient arm is held separate.
- **Design-discordance is the source's own reading**, not imposed — the author explicitly ranks cohort
  above cross-sectional/case-control and concludes no protective relationship.

## References

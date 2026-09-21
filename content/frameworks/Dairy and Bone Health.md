---
type: framework
question: Does more milk/dairy (its calcium and protein) reduce osteoporosis and hip-fracture risk — and why do the protective associations vanish in the strongest observational designs?
aliases: [Dairy and Bone, Milk and Fracture, Dairy and Osteoporosis, Milk and Hip Fracture, Milk-Fracture Paradox, Dairy and Bone Density, Calcium from Dairy and Fracture]
authors: [Malmir, Hanieh; Larijani, Bagher; Esmaillzadeh, Ahmad; Bian, Shanshan; Hu, Jingmin; Zhang, Kai; Wang, Yunguo; Yu, Miaohui; Ma, Jie]
sources: [Malmir - Milk Dairy Osteoporosis Fracture Meta-Analysis 2019, Bian - Dairy Hip Fracture Meta-Analysis 2018]
cluster: dairy
confidence: medium
created: 2026-08-06
updated: 2026-09-18
self_critiqued: 2026-09-18
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

**The through-line (two gold observational SR-MAs — Malmir 2019, 34 studies, 616k people; and Bian 2018,
18 studies, 382k, which reproduces the milk verdict):** the intuitive story — *dairy is rich in calcium
and protein, so more dairy = stronger bones = fewer fractures* — **is not supported once you weight
studies by design.** The protective associations appear
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



## A second gold SR-MA (Bian 2018) — by-product decomposition, and a within-cohort milk/fermented sign-split

A second independent group (Bian, Tianjin; 10 cohort + 8 case-control, 381,987 people, search to
April 2017) reaches the **same milk verdict** as Malmir (Tehran) *and* adds the by-product cells Malmir
could not pool. The matched-parameter table (highest-vs-lowest hip fracture unless noted):

| Parameter | Bian 2018 (Tianjin) | Malmir 2019 (Tehran) | Same quantity? |
|---|---|---|---|
| Milk, cohort, high-vs-low | RR 0.91 (0.74-1.12), NS | RR 0.93 (0.75-1.15), NS | **YES** — both null; concordant |
| Milk, weak-design, high-vs-low | OR 0.71 (0.55-0.91), sig (case-control only) | 0.75 (0.57-0.99), sig (cross-sec + case-control) | **YES** (weak-design pooled); minor: Bian CC-only |
| Milk, cohort, per-200 g/day (linear) | RR 1.00 (0.94-1.07), NS | RR 1.09 (1.07-1.11), sig +9% | **YES same quantity — DISCORDANT** (see below) |
| Total dairy, cohort, high-vs-low | RR 1.02 (0.93-1.12), NS | 0.90 (0.73-1.11), NS | **YES** — both null; concordant |
| Yogurt, cohort, high-vs-low | RR 0.75 (0.66-0.86), sig | not pooled (too sparse) | **NO** — new cell (F refinement) |
| Cheese, cohort, high-vs-low | RR 0.68 (0.61-0.77), sig | not pooled (too sparse) | **NO** — new cell (F refinement) |
| Study base | incl. Michaëlsson 2014 (female milk RR 1.60) | incl. Michaëlsson 2014 (1.60) + 2018 | **PARTIAL OVERLAP** — shared Michaëlsson 2014 |

[@bian2018]. Bian's conclusion:
«consumption of yogurt and cheese was associated with lower risk of hip fracture in cohort studies.
However, the consumption of total dairy products and cream was not significantly associated with the
risk of hip fracture» [@bian2018]; milk was
«insufficient evidence to deduce the association» [@bian2018].

- **This is type-F refinement + partial-overlap corroboration, NOT independent (type-E) backing.** The
  milk and total-dairy agreement re-pools a **shared cohort base** — both include Michaëlsson 2014 (the
  identical female RR 1.60 appears in both), and the milk-fracture prospective literature is small and
  centred on the same landmark cohorts (Michaëlsson, Feskanich/NHS, Sahni/Framingham), all three of
  which Bian pools. So the concordance is *second group, largely same studies* — it raises confidence in
  the **null milk verdict modestly** (two groups independently weight cohort > case-control and reproduce
  the paradox, with different search dates and analytic choices) but is **not** clean independent
  corroboration; do not read it as a fresh evidence stream.
- **The per-200 g discordance CUTS TOWARD the milk-harm signal being fragile.** Bian's independent
  linear per-200 g milk-cohort estimate is a **dead-flat RR 1.00 (0.94-1.07)** where Malmir reports
  **+9% (1.09, 1.07-1.11)**. Same quantity, opposite conclusion. The most likely reason is the study
  set: Malmir adds the later Michaëlsson **2018** high-milk Swedish wave that Bian's April-2017 search
  predates. A second MA pooling nearly the same cohorts *minus* the extra Michaëlsson wave finds
  **no per-gram harm** — which strengthens (does not contradict) the page's reading that the +9%/200 g is
  Michaëlsson-fragile and unadjudicated, not a real milk-breaks-bone gradient. Not filed as a `[[tension]]`:
  the difference is explained by inclusion + the flat-vs-nonlinear modelling, not a joined clash of backing.
- **The by-product cells are the genuine new content — and they are Michaëlsson-dominated too.** Bian
  pools yogurt (0.75) and cheese (0.68) protective in cohorts where Malmir left those fracture cells
  empty. But yogurt cohort n=3 and cheese cohort n=3, of which the Swedish Michaëlsson cohort supplies
  \~98% of participants (106,772 of \~109,018; Sahni and Feart yogurt/cheese arms are individually NS). So
  the pooled by-product protection is **essentially the Michaëlsson estimate**, inheriting the same
  confounded high-dairy Swedish population that drives the milk-harm signal above.
- **The emergent point (type-A) — a product-type SIGN REVERSAL inside one confounded cohort.** Within the
  *same* Michaëlsson population, **milk associates with harm** (female RR 1.60) while **yogurt and cheese
  associate with protection** (F 0.70 / 0.64). Generic confounding of the whole dairy category (education,
  smoking, living-alone — the milk-mortality confounders) moves all dairy the **same** direction and
  cannot produce opposite signs by product type. So the split points to **either** a real
  fermented-vs-unfermented difference **or** product-specific dietary-pattern confounding (health-conscious
  people choose yogurt/cheese; heavy milk-drinkers differ) — not the generic confounder. Bian offers the
  mechanistic hypothesis, marked as mechanism: milk's «lactose and galactose» drive «oxidative stress and
  inflammation» (the same galactose axis behind the milk-mortality scare on [[Dairy and Cardiometabolic Health]]), while «yogurt and cheese contain probiotics, which can improve bone formation»
  [EXTRACTED — asserted (Bian - Dairy Hip Fracture Meta-Analysis 2018) chunk 02]. **Directional mechanism
  only** — no MR, no RCT, the by-product signal is one-cohort-driven and self-report-confounded, so this
  is a candidate distinction to test, not a finding that fermented dairy protects bone.


## Confidence, decision-relevance, gaps

- **`confidence: medium`** — now **two** gold observational SR-MAs (Malmir 2019, Bian 2018) reaching the
  same milk verdict (cohort-null, weak-design-protective, per-gram harm fragile), *and* corroborated on
  the fracture-null direction by the supplement RCT evidence — but: the two MAs share a cohort base
  (Michaëlsson), so it is second-group agreement on largely the same studies, not a fresh evidence
  stream; and the exposure stays all-observational, FFQ-confounded, small heterogeneous effects,
  absolute risks unrecoverable, protective signals design-fragile. The `medium` rests on the **null**
  milk verdict (robust across designs and now across two groups when cohorts are weighted), not on any
  protective or harmful claim; the by-product (yogurt/cheese) protection is **not** promoted to a finding
  (one-cohort-driven — see below).
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
  - **The fermented-vs-unfermented dairy split is a candidate distinction, not a finding.** Bian's
    yogurt/cheese cohort protection (0.75 / 0.68) rests \~98% on the single Michaëlsson Swedish cohort,
    so it is one-cohort-driven and self-report-confounded; whether fermented dairy genuinely protects
    bone (probiotics/vitamin K2) versus milk (galactose) is unresolved and needs a by-product cohort
    pool that is not Michaëlsson-dominated, or an MR/genetic instrument -> a fermented-dairy
    by-product hip-fracture SR-MA with leave-one-out on Michaëlsson.
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

### Bian 2018 addition `[run 2026-09-18, before commit]`

- **Independence honoured — filed F, not E.** Bian and Malmir share their cohort base (Michaelsson 2014,
  identical female milk RR 1.60 in both; the milk-fracture cohort literature is small and centred on
  Michaelsson/Feskanich/Sahni, all pooled by Bian). Recorded as a type-F refinement plus partial-overlap
  corroboration, explicitly not `[E-independent]`; the confidence paragraph calls it "a second group
  agreeing on largely the same studies," a modest lift on the null, not a fresh evidence stream. Full
  overlap is confirmed only for Michaelsson 2014 (Malmir's full list not in hand), so "shared base" is
  hedged as inference, not asserted.
- **No fake tension on the per-200 g discordance.** Bian's flat linear per-200 g milk (RR 1.00) vs
  Malmir's +9% is not filed as a `[[tension]]`: it is read as *strengthening* the existing
  *the +9%/200 g is Michaelsson-fragile* claim, and the difference is attributed to study set
  (Malmir adds Michaelsson 2018, which Bian's Apr-2017 search predates) plus linear-vs-nonlinear
  modelling — a not-joined distinction, not opposed claims.
- **No by-product halo.** The yogurt/cheese cohort protection is flagged single-cohort-driven
  (\~98% Michaelsson) and self-report-confounded, not promoted to a finding. The milk-harm vs
  fermented-protection sign reversal inside one pool is the type-A point (product-type reversal generic
  confounding cannot produce), filed as a candidate distinction with an gap, not a
  resolved mechanism.
- **sources: earns Bian under the dual test** — distinct extracted content (pooled by-product cells,
  flat per-200 g, nonlinear rise-then-plateau) lives in the body, not an E-corroboration pad.
  `confidence:` stays medium: two MAs but a shared cohort base, all observational.

## References

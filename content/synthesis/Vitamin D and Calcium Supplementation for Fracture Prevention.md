---
type: synthesis
question: For whom does supplementing vitamin D and/or calcium reduce fracture risk, and does the fracture benefit survive netting the cardiovascular and kidney-stone harms?
aliases: [Vitamin D Calcium Fracture, Calcium Supplements and Fracture, D and Calcium for Bone, Calcium Vitamin D Supplementation Fracture, Supplemental Calcium Cardiovascular Risk]
authors: [Yao, Pang; Bennett, Derrick; Mafham, Marion; Lin, Xu; Chen, Zhengming; Armitage, Jane; Clarke, Robert; Bolland, Mark J; Grey, Andrew; Avenell, Alison; Gamble, Greg D; Reid, Ian R; Kahwati, Leila C; Weber, Rachel Palmieri; Viswanathan, Meera]
sources: [Yao - Vitamin D Calcium Fracture 2019, Bolland - Calcium Vitamin D Cardiovascular 2011, Kahwati - Vitamin D Calcium Fractures Evidence Review 2018]
cluster: supplements
confidence: medium
created: 2026-08-06
updated: 2026-08-06
self_critiqued: 2026-08-06
relationships:
  related_to:
    - Vitamin and Mineral Supplements for Disease Prevention
    - Deficiency Repletion vs Enhancement
    - Dairy and Bone Health
    - Exercise for Preventing Falls in Older Adults
    - Baseline Risk and the Relative-Absolute Split
    - Is the Food Category Doing Any Work
    - The Observational-Trial Discordance
---

**Facet of the `supplements` cluster** (nucleus [[Vitamin and Mineral Supplements for Disease Prevention]]).
This is the **fracture** decision specifically, and it splits three ways that the general supplement-null
does not resolve: **vitamin D alone** (null), **vitamin D + calcium** (a real but small hip-fracture benefit
that lives in the high-risk/institutionalized stratum), and the **net-effect** question — whether even that
benefit survives the cardiovascular and kidney-stone harms of the calcium supplement. The decision is
**stratum-dependent**, and for the community-dwelling replete person the whole-strategy ledger runs
**against** the supplement [inferred from @yao2019; @bolland2011; @kahwati2018].

## The efficacy structure — three distinct answers, one gold SR-MA (Yao 2019)

Yao 2019 (gold SR+MA, JAMA Netw Open) runs the three arms in parallel and they do **not** give one answer:

| Arm | Any fracture | Hip fracture | Read |
|---|---|---|---|
| Observational 25(OH)D (11 studies, 39,141) | RR 0.93 (0.89-0.96) per +10 ng/mL | RR 0.80 (0.75-0.86) | status **marker**, confounding-prone |
| **Vitamin D alone** RCTs (11 RCTs, 34,243) | RR **1.06 (0.98-1.14)** | RR **1.14 (0.98-1.32)** | **null** (dose-constrained) |
| **Vitamin D + calcium** RCTs (6 RCTs, 49,282) | RR **0.94 (0.89-0.99)** | RR **0.84 (0.72-0.97)** | 6% / **16%** reduction |

- **The observational gradient is not the intervention.** «an increase of 10.0 ng/mL in blood 25(OH)D
  concentration was associated with 7% lower risk of any fracture (RR, 0.93; 95% CI, 0.89-0.96) and 20%
  lower risk of hip fracture» [@yao2019] — but the RCT
  arms are the causal test, and vitamin D alone does not reproduce it.
- **Vitamin D alone is null — but the null is dose-constrained, not proof D is inert.** The 11 RCTs «did not
  find a reduced risk of any fracture (RR, 1.06; 95% CI, 0.98-1.14) or hip fracture (RR, 1.14; 95% CI, 0.98-
  1.32), but these trials were constrained by infrequent intermittent dosing, low daily doses of vitamin D,
  or an inadequate number of participants» [@yao2019].
  Median 25(OH)D difference was only 8.4 ng/mL; «doses of 2000 IU per day are required to increase 25(OH)D
  concentration by 20.0 ng/mL» [@yao2019]. Seven ongoing
  higher-dose RCTs (mean 2094 IU/day) will settle this — a `G (needs aggregation)`.
- **Vitamin D + calcium reduces hip fracture — and calcium is doing the work.** «found a 6% reduced risk of
  any fracture (RR, 0.94; 95% CI, 0.89-0.99) and a 16% reduced risk of hip fracture (RR, 0.84; 95% CI, 0.72-
  0.97)» [@yao2019]. The D-alone-vs-D+Ca contrast (both
  from one source, so a clean within-source comparison) isolates **calcium** as the active co-ingredient at
  these vitamin-D doses.

## Where the D+Ca benefit lives — the institutionalized/high-risk arm (the resolvent)

The 16% hip-fracture reduction is **not uniform** — it concentrates in the older institutionalized. «the
combined supplementation of calcium and vitamin D was associated with more extreme changes in risk of any
fracture in the RCTs of older participants (ie, aged 80 years) living in an institution than those younger
than 80 years living in the community (P for heterogeneity = .02)»
[@yao2019], and «The risk reductions achieved in the RCTs
of calcium plus vitamin D were somewhat greater in RCTs among older participants living in institutions and
in RCTs that achieved greater differences in blood»
[@yao2019] — preceded by the standing qualifier that «the
95% CIs indicated some uncertainty for these estimates». This matches the recommendation history: combined
D+Ca «has been recommended for prevention of fractures in older adults living in institutions and in those
with low vitamin D status» [@yao2019].

This is the **deficiency-repletion vs enhancement** split instantiated on fractures: benefit in the
high-risk/institutionalized (older, often vitamin-D-deficient, low dietary calcium — the repletion arm),
little-to-nothing in the community-dwelling replete (the enhancement arm)
-> [[Deficiency Repletion vs Enhancement]].

## Yao vs Kahwati is a DISTINCTION, not a tension — the population differs, not the finding

Yao (D+Ca reduces hip fracture) sits beside the held Kahwati 2018 (USPSTF SR: D+Ca does **not** reduce
fracture in community-dwelling adults). The reflex is to file a tension — *does D+Ca prevent hip fracture or
not?* **It does not survive the parameter table.**

| Parameter | Yao 2019 (D+Ca, hip) | Kahwati 2018 (D+Ca, hip) | Same quantity? |
|---|---|---|---|
| Outcome | hip fracture | hip fracture | **YES** |
| Intervention | D 400-800 IU + Ca 1000-1200 mg/day daily [@yao2019] | D 400-800 IU + Ca 1000-1600 mg/day daily [@kahwati2018] | **YES** (standard-dose daily D+Ca) |
| Pooled effect | RR **0.84 (0.72-0.97)**, 6 RCTs, n=49,282 [@yao2019] | HR **0.88 (0.72-1.08)**, 2 RCTs, n\~39k (WHI+Porthouse) [@kahwati2018] | **direction + point estimate agree; CIs overlap** |
| Population | **INCLUDES** institutionalized elderly (Chapuy Decalyos, age \~85) + community [@yao2019] | community-dwelling **ONLY**; institutionalized / deficient / osteoporotic / prior-fracture **EXCLUDED** [@kahwati2018] | **NO** |

**Not-joined check (ii) fires — different scope/population, consistent once matched.** The point estimates
(0.84 vs 0.88) barely differ and the intervals overlap heavily; the *only* material difference is
statistical significance, and that is driven by **which trials each pool contains**. Yao includes the
institutionalized trials (Chapuy) where the effect lives; Kahwati excludes exactly those populations by
design, leaving a community-dwelling residual that is null. Yao itself reports the effect concentrates in
the institutionalized (P-het .02) — so strip those and Yao's residual approaches Kahwati's null. **No tension
is filed; this is a distinction resolved by population** [inferred from @yao2019; @kahwati2018].

**What Yao adds to the fabric (type-F, NOT independent E).** The high-risk/institutionalized fracture-benefit
leg was previously held only **second-hand** — Kahwati *reporting* the 2014 Cochrane review («The fracture
benefits overall appear to be largely attributable to benefits among the high-risk populations»
[@kahwati2018]). Yao now supplies
**direct, within-review** evidence for that leg: a pooled significant 0.84 with an in-review
residential-status interaction. This is a **refinement, not an independent witness** — WHI/Jackson 2006
dominates both Yao's and Kahwati's D+Ca pools (Porthouse 2005 is also shared), so they are not independent;
no `[E-independent]` is claimed [inferred from @yao2019; @kahwati2018]. The two arms
are now both anchored — enhancement-null (Kahwati/VITAL, direct) and high-risk benefit (Yao, direct)
-> [[Deficiency Repletion vs Enhancement]].

## The net-effect ledger — the fracture benefit must be netted against CV + stone harm

A supplement taken *for* bone can carry costs elsewhere; judge the **complete strategy** on net effect. Yao
flags this itself: «concerns have been raised about the safety of combining calcium and vitamin D for
cardiovascular disease and higher risks of kidney stones associated with calcium supplements»
[@yao2019]. The two harm arms:

| Outcome | Effect (Ca±D supplement) | Source | Certainty |
|---|---|---|---|
| Hip fracture (**benefit**) | RR 0.84 (0.72-0.97); concentrated in institutionalized | Yao 2019 | low SoE, high RoB trials |
| Kidney stones (**harm**, D+**Ca** only) | pooled ARD +0.33% (0.06-0.60), RR 1.18 (1.04-1.35) | Kahwati 2018 | **moderate** SoE |
| Cardiovascular — MI (**harm**) | RR **1.24 (1.07-1.45)** Ca±D; 1.21 (1.01-1.44) Ca+D | Bolland 2011 | contested; subgroup-derived |
| CV — MI or stroke (**harm**) | RR **1.15 (1.03-1.27)** Ca±D; 1.16 (1.02-1.32) Ca+D | Bolland 2011 | contested |
| All-cause mortality | null (RR \~1.04) | Bolland 2011; Kahwati 2018 | low |

- **The CV-harm arm (Bolland 2011, `high`, CONTESTED).** «Calcium or calcium and vitamin D supplements
  increased the risk of myocardial infarction (relative risk 1.24, P=0.004) and the composite of myocardial
  infarction/stroke (1.15, P=0.009)» [@bolland2011];
  «Calcium supplements with or without vitamin D modestly increase the risk of cardiovascular events,
  especially myocardial infarction» [@bolland2011].
  Held as a **counterweight, not a settled harm**: it is subgroup-derived (WHI women not on personal
  calcium) and WHI investigators + later reviews dispute it — so the direction is credible, the magnitude
  and even the sign contested. Label at point of use.
- **The exposure is the SUPPLEMENT bolus, not food calcium — do not overgeneralize.** Bolland's effect is
  «independent of dietary calcium intake» [@bolland2011], shows no dose-response, and its proposed mechanism is «the abrupt change in plasma calcium
  concentration after supplement ingestion ... rather than it being related to the total calcium load
  ingested» [@bolland2011]. Food delivers calcium
  gradually, so this harm does **not** transport to dietary/dairy calcium -> [[Is the Food Category Doing Any Work]], [[Dairy and Bone Health]].
- **Bolland's own ledger.** «treating 1000 patients with calcium or calcium and vitamin D for five years
  would cause an additional six myocardial infarctions or strokes (number needed to harm of 178) and
  prevent only three fractures (number needed to treat of 302)»
  [@bolland2011] — hence a risk-benefit profile he
  calls unfavourable. **The population caveat is load-bearing:** this NNT-302 fracture benefit is computed in
  his largely **community-dwelling, healthy postmenopausal** cohort — the *enhancement* arm, where Yao and
  Kahwati also find little fracture benefit. So the ledger is cleanest exactly where the benefit is weakest.

## Decision — by stratum

- **Community-dwelling, replete, no osteoporosis/prior fracture (the enhancement arm).** The whole-strategy
  ledger runs against the supplement: **no fracture benefit** (Kahwati direct null; Yao's community residual)
  **+ CV-harm signal** (Bolland, contested) **+ kidney-stone harm** (Kahwati, moderate SoE). Ca±D
  supplementation for fracture prevention is **not indicated** here; the fracture lever in this stratum is
  **exercise**, not the pill -> [[Exercise for Preventing Falls in Older Adults]]
  [inferred from @yao2019; @kahwati2018; @bolland2011].
- **Institutionalized / older / vitamin-D-deficient / low dietary calcium (the repletion arm).** Daily D+Ca
  (800 IU / 1000-1200 mg) has a **real, if small, hip-fracture benefit** (Yao 0.84, concentrated here). The
  harm transport is uncertain — Bolland's CV signal was measured in community-dwelling replete women, not
  this stratum — so the net-effect is more favourable than in the enhancement arm, but the kidney-stone harm
  still applies and the benefit rests on low-SoE, high-RoB trials. A defensible lever for this specific
  high-risk stratum; not a general recommendation [inferred from @yao2019; @kahwati2018; @bolland2011].
- **Vitamin D alone (any stratum, for fracture).** Null at the standard doses tested; the higher-dose
  ongoing-trial question is open. Not a fracture lever on current evidence
  [@yao2019].
- **Establishing deficiency is a prescriber act** (this person's labs), out of the wiki's scope — the move
  stays *test, then replete the confirmed shortfall*, not *supplement broadly to prevent fracture*.

## Confidence + gaps

- **`confidence: medium`** — the efficacy structure is gold (Yao SR-MA), but the D+Ca fracture benefit rests
  on low-SoE, high-risk-of-bias trials with wide CIs; the CV harm is a contested, subgroup-derived `high`
  source; the net verdict is a synthesis across non-commensurable outcomes. The robust core is the *shape*
  (D-alone null / D+Ca-in-high-risk benefit / enhancement-arm net-harm), not any point estimate.
- **Gaps (G):** (a) higher-dose (2000+ IU/day) vitamin-D-alone fracture RCTs — 7 ongoing, `G (needs
  aggregation)`; (b) a clean-population CV-harm test of Ca±D (Bolland's signal replicated or refuted in a
  non-subgroup design — the STRENGTH-style contested-comparator problem is the calcium analogue, not held);
  (c) the net-effect ledger *within the institutionalized/deficient stratum* (where benefit lives but harm
  transport is untested).

## Self-critique `[run 2026-08-06, before commit]`

- **No fake tension.** Yao-vs-Kahwati is filed as a **distinction** on the parameter table: same outcome,
  overlapping point estimates (0.84 vs 0.88), difference is population/inclusion — not-joined (ii). No
  `tension` minted, no `contradicts:` edge.
- **CV harm not overclaimed.** Bolland is marked CONTESTED / subgroup-derived / `high`-not-gold at every use;
  the direction is presented as credible, the magnitude/sign as disputed — not asserted as settled harm.
- **Supplemental-vs-dietary guard held.** The CV mechanism (acute serum-calcium spike) and dietary-calcium
  independence are quoted, and the harm is explicitly barred from transporting to food/dairy calcium.
- **No isolate/food halo.** The page does not read *supplements are useless* (D+Ca works in the high-risk
  arm) nor *supplements are fine* (net-harm in the enhancement arm) — the verdict is stratum-split.
- **sources: dual test.** All three (Yao, Bolland, Kahwati) carry distinct extracted claims on this page
  (Yao: efficacy structure; Bolland: CV harm; Kahwati: the community-dwelling null pole + kidney-stone harm
  magnitude). No pad.

## References

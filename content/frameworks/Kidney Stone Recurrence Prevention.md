---
type: framework
question: Which modifiable dietary/fluid exposures reduce kidney-stone risk — incidence in the general population and recurrence in stone-formers — and how large is each lever?
aliases: [Nephrolithiasis Prevention, Kidney Stone Prevention, Urolithiasis Recurrence Prevention, Kidney Stone Diet, Renal Stone Prevention, Kidney Stone Incidence Prevention]
authors: [European Association of Urology (org); Lin, Bing-Biao; Lin, Ming-En; Huang, Rong-Hua; Hong, Ying-Kai; Lin, Bing-Liang; He, Xue-Jun]
sources: [EAU - Urolithiasis Guidelines 2026, Lin - Dietary Lifestyle Nephrolithiasis 2020]
cluster: kidney-stone-prevention
nucleus: true
confidence: medium
created: 2026-09-22
updated: 2026-09-23
self_critiqued: 2026-09-23
relationships:
  related_to:
    - Sodium Intake and Blood Pressure
    - Vitamin D and Calcium Supplementation for Fracture Prevention
    - Chronic Kidney Disease and Modifiable Exposures
    - Dietary Protein and Mortality
    - Protein Intake and Kidney Function
    - Is the Food Category Doing Any Work
---

**Nucleus of the `kidney-stone-prevention` cluster.** Two sources now, on **two different strata**:
EAU 2026 (a guideline) grades levers for **recurrence** in established stone-formers; Lin 2020 (a gold
SR+MA) supplies pooled magnitudes for **incidence** (first stones) in the general population. The two
arms answer *different decision-questions* and are held as an explicit stratum **distinction** (not a
tension — see the incidence section) whose levers nonetheless point the **same direction**. `confidence:
medium` reflects that a gold MA now corroborates every major lever direction from the incidence side,
while the recurrence-specific grades stay EAU's own and the hard-outcome recurrence-RCT base stays sparse.

**Scope.** This page holds *modifiable-exposure -> stone risk* levers across both strata — **incidence**
(general population, Lin) and **recurrence** (stone-formers, EAU). Stone diagnosis, acute renal colic,
surgical/endourological removal, and per-agent drug dosing/titration are **out of scope**
(prescriber/acute-care zone) -> the EAU urolithiasis guideline itself covers that taper.

## The decision — bottom line

For anyone who has formed a calcium stone, the dominant lever is **fluid volume**, and the two most
*counterintuitive* points are that **dietary calcium should NOT be restricted** and that oxalate/
purine restriction is **stratum-conditional** (only where urinary excretion is high), not universal.
[inferred from @eau2026uro] The intervention hierarchy (Layer 1) for a stone
former is: **fluid first (big rock), then normalise sodium + animal protein, keep calcium normal,
restrict oxalate/purine only if the urine profile says so.**

## The incidence arm — pooled magnitudes for first stones in the general population `[2026-09-23, Lin 2020]`

Lin 2020 is a gold SR+MA (**50 articles, 1,322,133 participants, 21,030 incident cases**; 34 cohorts,
12 RCTs, 4 case-control; random-effects, highest-vs-lowest contrast) of modifiable factors and
**incident** nephrolithiasis. It supplies what EAU (a guideline) does not: **pooled effect sizes for the
general-population incidence stratum** [@lin2020].

- **Fluid — the big rock, corroborated with a magnitude.** «Total fluid intake up to 2 l/d reduced the
  risk of inci-dent stones by almost half (RR: 0.56; 95% CI, 0.48–0.65) when compared with less than 1
  l/d»; the pooled estimate tightened to **RR 0.55 (0.51-0.60)** (I2 79% -> 0%) after excluding two
  studies unadjusted for diet [@lin2020]. Same
  direction and roughly the same size as EAU's recurrence fluid lever — fluid is the dominant lever on
  **both** strata.
- **Dietary calcium — protective, not restricted (the counterintuitive lever, reproduced).** «Dietary
  calcium (RR: 0.83; 95% CI, 0.76–0.90) ... intake were inversely associated with the risk of incident
  nephrolithiasis» — via the same gut-oxalate-binding mechanism EAU invokes: «high dietary calcium
  pre-vented oxalate absorption by forming calcium oxalate complex in the guts»
  [@lin2020]. The food-vs-supplement split is
  Lin's own point (see the supplement bullet below).
- **Sodium — harmful (a magnitude for the incidence channel).** «high in-take of dietary sodium
  increased the risk by 38%» (RR 1.38, 1.21-1.56), via hypercalciuria
  [@lin2020]. -> [[Sodium Intake and Blood Pressure]].
- **Animal protein / meat — harmful (upgrades the incidence sub-gap).** Total meat **RR 1.24
  (1.12-1.39)**; animal protein **RR 1.1 (1.02-1.19)**, borderline-significant, no heterogeneity
  [@lin2020]. This turns the earlier
  *insufficient-evidence* state on protein->incident-stones into a graded positive association ->
  [[Protein Intake and Kidney Function]].
- **DASH pattern — protective.** «the DASH style diet revealed significant risk reduction (RR: 0.69; 95%
  CI, 0.64–0.75)» [@lin2020] — same figure EAU
  cites; a Mediterranean pattern is similar (HR 0.64).
- **Obesity — harmful, but the pooled estimate carries publication bias.** Highest vs lowest BMI:
  «a significant 39% increase in the risk of first stones, although moderate heterogeneity (I2 = 71.2%)
  and publication bias (P = 0.002) were present» (RR 1.39, 1.27-1.52), stronger in the Americas (1.53)
  and Europe (1.61) than Asia (1.26)
  [@lin2020]. Corroborates the BMI lever below.
- **Supplemental calcium / vitamin D — harmful in observational, null in RCTs (the sign-flip within the
  incidence stratum).** «Vitamin D (1.22, 1.01–1.49) and calcium (1.16, 1.00–1.35) supplementation alone
  increased the risk of stones in meta-analyses of observational studies, but not in RCTs, where the
  cosupplementation conferred significant risk»
  [@lin2020]. Dietary calcium protective (0.83)
  while a calcium *supplement bolus* is a risk (1.16 obs) — the delivery form flips the sign, mirroring
  the EAU food-vs-supplement note above -> [[Vitamin D and Calcium Supplementation for Fracture Prevention]],
  [[Is the Food Category Doing Any Work]]. The RCT-pooled form of this harm is quantified on
  [[Vitamin and Mineral Supplements for Disease Prevention]] (Kahwati 2018: Ca+D combination RR 1.18,
  moderate SoE — the only above-low grade in that review; calcium alone RCT-null), bounding this
  observational signal; the two reviews share the WHI CaD substrate, so they converge rather than
  independently confirm.
- **Null / non-significant:** physical activity (RR 0.91, 0.81-1.02) and energy intake >=2500 kcal/d
  (1.12, 0.99-1.27) were **not** significant for incidence
  [@lin2020].

### Incidence vs recurrence — a DISTINCTION, not a tension (the stratum split)

The two sources answer **different decision-questions on different strata**, so the op-weave *not-joined*
checks fire (scope/unit mismatch): file a distinction, not a `[[tension]]`.

| Parameter | Lin 2020 (incidence arm) | EAU 2026 (recurrence arm) | Same quantity? |
|---|---|---|---|
| Outcome | **incident (first) stone** | **recurrence** in a prior stone-former | **NO — different event** |
| Population | adults **without** prior nephrolithiasis (recurrent/prevalent excluded) | established stone-formers | **NO — disjoint strata by design** |
| Evidence type | pooled RRs (gold SR+MA, observational + RCT) | guideline levers with EAU LE grades | NO — magnitude vs graded direction |
| Fluid direction | protective, RR 0.55 | protective, LE 1a Strong (\~15/100 fewer events/5y) | **YES — same direction** |
| Dietary calcium | protective, RR 0.83, do-not-restrict | protective, do-not-restrict | **YES — same direction + mechanism** |
| Sodium / animal protein | harmful (1.38 / 1.1-1.24) | harmful, LE 1b Strong (stratum-conditional on urine) | **YES — same direction** |

The load-bearing rows on *direction* read YES; the *outcome* and *population* rows read NO. So this is a
**cross-stratum robustness of direction**, not a contradiction and not a shared magnitude to pool — the
honest artifact is a distinction (different questions, concordant levers), exactly the not-joined
scope/unit case. [inferred from @lin2020; @eau2026uro]

**Lin itself supplies the bridge between the strata — a mechanism assumption, not proof.** «As the
pathophysiological features of kidney stone formation are believed to re-main the same regardless of a
history of nephrolithiasis, it is likely that the results in the meta-analyses also apply to subjects with
former nephrolithiasis. In line with this assumption, current guidelines used mostly observa-tional
studies for incident kidney stones to make dietary suggestions for secondary prevention»
[@lin2020]. So guidance already crosses
incidence -> recurrence, and Lin justifies it by shared urine-chemistry — but this is a directional
transportability assumption (route-a/mechanism), **not** a recurrence-outcome finding: the incidence RRs
do not become graded recurrence evidence merely by assuming the pathophysiology transfers.

**Not type-E independence — shared primary data + a re-pooled MA.** Lin (Shantou urology group) and EAU
(European urology panel) have disjoint author lists, but their evidence bases **overlap on the same
primary Channing/Ferraro/Curhan/Taylor cohorts**, and Lin's RCT cosupplementation result is explicitly
«no different from the previous meta-analysis by Kahwati et al.» (which the corpus already holds) — so the
concordance is not a bias-independent second witness. It is **type-F**: a gold MA upgrading a guideline's
directional levers with pooled magnitudes and banking the incidence stratum. No `[E-independent]`.
[inferred from @lin2020]

## Baseline risk — sizes the absolute benefit (route-a)

The absolute value of any lever scales with recurrence risk, which is heterogeneous:
- «A review of first-time stone formers calculated a recurrence rate of 26% in five years' time»
  [@eau2026uro] — so \~1 in 4 first-formers recurs at 5 y.
- «About 50% of recurrent stone formers have just one-lifetime recurrence» and highly-recurrent
  disease is «slightly more than 10% of patients» [@eau2026uro].
  A \~10% highly-recurrent tail carries most of the burden — the stratum where the big-rock lever pays
  most in absolute terms. [inferred from @eau2026uro]
- Recurrence risk is «basically determined by the disease or disorder causing the stone formation»
  [@eau2026uro] — stone type + severity define the stratum.

## Fluid intake — the big rock (LE 1a, Strong)

- «An inverse relationship between high fluid intake and stone formation has been repeatedly
  demonstrated» [@eau2026uro].
- **Absolute effect:** «Consuming additional water was associated with greater weight loss (range
  44-100% more than control conditions) and fewer nephrolithiasis events (15 fewer events per 100
  participants over five years)» [@eau2026uro]. Against a
  \~26% five-year baseline, \~15/100 fewer events is a large absolute reduction — this is why fluid
  ranks first. [inferred from @eau2026uro]
- **Target (with its two load-bearing facts):** aim for a **24-hour urine volume > 2.5 L** — the
  target is stated on the *output* (urine volume), not a fixed intake, because intake needs vary with
  losses; the general-measures table gives intake 2.5-3.0 L/day and diuresis 2.0-2.5 L/day as the
  route to it. The «> 2.5 L» is a floor, not a point optimum; no upper-bound harm threshold is given,
  and the recommendation is a guideline target, not a knee read off a dose-response curve.
  [@eau2026uro]
- **Recommendation:** «Advise patients that a generous intake of fluids, preferably water, is to be
  maintained, allowing for a 24-hour urine volume > 2.5L.» **Strong** (evidence: «Increasing water
  intake reduces the risk of stone recurrence.» **LE 1a**) [@eau2026uro].
- **Fluid CHOICE matters, not only volume.** A soft-drink RCT (men, >=1 prior stone) cut symptomatic
  recurrence «RR: 0.83; CI: 0.71-0.98» (LE low, single trial); Channing cohorts (194,095 participants,
  &gt;8 y) found sugar-sweetened soda/punch raise risk while coffee, tea, beer, wine and orange juice
  lower it [@eau2026uro]. Water is preferred (other fluids
  carry calories/alcohol). Citrus juice protects via urinary citrate/alkalinisation.

## Dietary calcium — the counterintuitive lever: DO NOT restrict

The naive intuition (*calcium stones -> cut calcium*) is **wrong and counterproductive**.
- «Calcium should not be restricted, unless there are strong reasons for doing so, due to the inverse
  relationship between dietary calcium and stone formation» [@eau2026uro].
  Normal intake 1,000-1,200 mg/day; sufficient calcium especially needed on vegetarian/vegan diets.
- **Mechanism.** Dietary calcium binds oxalate in the gut, lowering urinary oxalate — the guideline
  states this binding mechanism explicitly for the enteric-hyperoxaluria case: «Calcium supplements
  are not recommended, except in enteric hyperoxaluria when additional calcium should be taken with
  meals to bind intestinal oxalate» [@eau2026uro].
  Restricting dietary calcium frees more oxalate for absorption, *raising* urinary oxalate and stone
  risk — so restriction is the treacherous move. [inferred from @eau2026uro]
- **Food vs supplement split.** Dietary (food) calcium is protective; a calcium *supplement bolus* is
  a different exposure — not recommended for stone prevention (except enteric hyperoxaluria, taken
  *with meals* to bind oxalate), and older adults on Ca supplements should keep fluid high to blunt any
  urine-calcium rise. This mirrors the food-vs-supplement distinction on
  [[Vitamin D and Calcium Supplementation for Fracture Prevention]] and [[Is the Food Category Doing Any Work]].

## Sodium and animal protein — normalise, don't crash-restrict

- **Sodium <= 4-5 g NaCl/day.** High intake «adversely affects urine composition»: raises urinary
  calcium (reduced tubular reabsorption), lowers urinary citrate (bicarbonate loss), raises
  sodium-urate crystal risk [@eau2026uro]. «Calcium stone
  formation can be reduced by restricting sodium and animal protein.» But the causal evidence for
  sodium *alone* is thin: the positive sodium-risk correlation was «confirmed only in women», and
  «There have been no prospective clinical trials on the role of sodium restriction as an independent
  variable in reducing the risk of stone formation» [@eau2026uro].
  Stone-specific (high urinary sodium): «Restricted intake of salt is beneficial if there is high
  urinary sodium excretion» — LE 1b, Strong.
- **Animal protein 0.8-1.0 g/kg/day.** «Excessive consumption of animal protein has several effects
  that favour stone formation, including hypocitraturia, low urine pH, hyperoxaluria, and
  hyperuricosuria» [@eau2026uro]. Stone-specific (excess
  in hyperuricosuria): LE 1b, Strong. Childhood protein restriction handled cautiously (needs are
  age-dependent). **Stratum-specific, not a general protein caution**: in the
  *non-stone-forming* population the protein->stone *incidence* evidence is limited and inconsistent
  (insufficient, not null), so this Strong recurrence lever is stratum-conditional — its mechanism
  (existing urinary abnormalities) is active only in the stone-forming stratum — not a population-wide
  brake on protein. See [[Protein Intake and Kidney Function]].

## Stratum-conditional levers (route-b / route-c) — targeted, not universal

The urine profile, not the stone label, gates these:
- **Oxalate restriction** — beneficial «if hyperoxaluria is present» (LE 2b, Weak); limit
  oxalate-rich foods «particularly in patients who have high oxalate excretion»
  [@eau2026uro]. NOT a universal stone-former lever;
  compounds with keeping dietary calcium normal (calcium binds the oxalate).
- **Purine/urate restriction** — for hyperuricosuric calcium-oxalate and uric-acid stones; purine
  <= 500 mg/day [@eau2026uro].
- **Vitamin C** — an oxalate precursor; role «controversial», but calcium-oxalate formers advised to
  avoid excessive intake [@eau2026uro].
- **Citrate (dietary-mineral lever)** — «Alkaline citrates can reduce stone formation» (LE 1a); citrus
  juice / potassium raise urinary citrate and pH [@eau2026uro].
  (Pharmacological citrate *dosing/titration* is prescriber-zone, out of scope.)

## Body weight, activity, and pleiotropy

Obesity, diabetes and metabolic syndrome raise stone risk (LE lifestyle-level)
[@eau2026uro] — normal BMI + adequate activity are
recommended general measures. Two levers here are **pleiotropic** (they pay on other outcomes too),
which raises their Layer-1 rank net of substitutes: **sodium reduction** also lowers blood pressure
(-> [[Sodium Intake and Blood Pressure]]), and **weight loss / activity** carry the usual
cardiometabolic benefits — so a stone former already motivated on BP or weight gets stone prevention
as a co-benefit at no extra cost. [inferred from @eau2026uro]

## Limits, uncertainty, and gaps (type-G)

- **Two strata, one now banked and one still thin**. (i) **Incidence arm — LANDED.** A gold
  SR+MA (Lin 2020) now supplies pooled magnitudes for general-population *incidence* and corroborates every
  major EAU lever direction (see the incidence section) — this lifted the page off single-source
  scaffolding and is why `confidence:` rose low -> medium. But Lin does **not** grade *recurrence*, and its
  incidence RRs transfer to recurrence only under a mechanism assumption, not as outcome evidence.
  (ii) **Recurrence-triangulation arm — still a thin structural gap**. A second guidance
  family (AUA, NICE) or a dietary *recurrence* SR would test EAU's own recurrence grades, but the
  dietary-recurrence RCT base is genuinely sparse — EAU itself reports no prospective trial isolating
  sodium, and the only gold *recurrence* MAs are for drugs (thiazides), which sit in the frontier/prescriber
  zone. This half may stay open not for want of searching but because the trials do not exist.
- **Fluid is the only Strong/LE-1a lever on the *hard* recurrence outcome.** Most diet levers are
  urine-composition-conditional (surrogate: 24h-urine chemistry), and sodium-alone lacks any
  prospective trial. Treat the diet levers as directional, keyed to the urine profile, not as
  independently-proven hard-outcome interventions. [inferred from @eau2026uro]
- **Trajectory / QoL under-measured.** Trials count stone *events*; the disutility a person most wants
  to avoid — the acute colic episode + intervention — is the patient-important outcome behind the
  event count, rarely measured as such. [inferred from @eau2026uro]
- **G — magnitudes now held for INCIDENCE, still absent for RECURRENCE.** Lin banks pooled *relative*
  effects for incident stones (fluid 0.55, sodium 1.38, dietary calcium 0.83, meat 1.24, animal protein
  1.1, DASH 0.69, BMI 1.39). For *recurrence* the guideline still gives an absolute effect only for fluid
  (15/100 over 5 y); calcium/sodium/protein/oxalate remain direction + LE, not an absolute-risk delta at a
  stated recurrence baseline. And **no dose-response on either arm**: Lin explicitly reports «the failure to
  perform dose-response analysis owing to various reference and expos-ure groups and insufficient data»
  [@lin2020] — every Lin effect is a
  highest-vs-lowest contrast, so no knee/threshold is locatable, and neither absolute incidence risk
  differences nor NNTs are computable from what is held (`G (needs aggregation)`).
- **Incidence-arm transportability caveat.** Lin's RCTs skewed older («most directly generalizable to those
  above 50 years of age»), and its observational pools carry unmeasured residual confounding and near-total
  missing stone-composition data [@lin2020] — so
  the incidence RRs are directional levers, not stone-type-specific or age-general point estimates.

## References

---
type: framework
question: Does a higher overall diet-quality score (a whole-diet protective-food pattern) lower CVD and mortality, by how much, where on the dose-response curve is the lever, and how much of the signal is healthy-user confounding?
aliases: [PURE Healthy Diet Score, Diet Score and Mortality, Diet Quality Index and Cardiovascular Disease, Whole-Diet Pattern Score, Protective Food Score]
authors: [Mente, Andrew; Dehghan, Mahshid; Rangarajan, Sumathy; O'Donnell, Martin; Yusuf, Salim; Howard, Barbara V]
sources: [Mente - PURE Healthy Diet Score 2023, WHI - Low-Fat Dietary Pattern Cardiovascular 2006]
cluster: diet-quality-scores
nucleus: true
confidence: medium
relationships:
  related_to:
    - Mediterranean Diet and Cardiovascular Events
    - Named Diet Programs Compared
    - Vegetarian Dietary Patterns and Mortality
    - Dairy and Cardiometabolic Health
    - Is the Food Category Doing Any Work
    - The Underivable Optimum
    - Measurement Error in Dietary Assessment
    - Baseline Risk and the Relative-Absolute Split
    - Which Objective Moved This Recommendation
    - The Observational-Trial Discordance
    - Low-Fat Dietary Pattern and Cardiovascular Disease
self_critiqued: 2026-08-25
created: 2026-08-25
updated: 2026-08-25
---

**Nucleus of the `diet-quality-scores` cluster** — the canonical owner of *what a whole-diet quality
score does to CVD and mortality*, as distinct from any single food (owned by the food pages) or any
branded weight-loss programme ([[Named Diet Programs Compared]], a surrogate/weight question).

**The through-line (one large observational source, PURE + 5 replication studies, \~245,000 people,
80 countries):** a simple **unweighted count of six protective foods** — fruit, vegetables, nuts,
legumes, fish, and (mainly whole-fat) **dairy**, range 0-6 — is associated with lower CVD and
mortality, **consistently across income levels and world regions**. The effect is *modest per unit and
larger at the extremes*, the dose-response **flattens above a moderate score** (most gain is in moving
a low consumer up, not a moderate consumer to high), and the authors read the global pattern as
**under-consumption of protective foods mattering more than over-consumption** — a contrarian policy
frame that the study's confounding structure and its partial dairy-industry funding both require holding
at arm's length. Everything here is **observational**; the headline associations **attenuate
substantially** once lifestyle and socioeconomic status are adjusted, and no hard-outcome RCT exists.


## The score and the magnitudes

The score was developed in 147,642 PURE participants (21 countries) and replicated in five independent
studies, «six foods each of which has been associated with a significantly lower risk of mortality
[i.e. fruit, vegetables, nuts, legumes, fish, and dairy (mainly whole-fat); range of scores, 0-6]»
[@mente2023pure]. Each food scores 1 point above its cohort
median intake — an **unweighted sum with median cut-offs**.

**Extreme contrast (PURE, score >=5 vs <=1, median 9.3-y follow-up, multivariable-adjusted):**

- Mortality **HR 0.70 (0.63-0.77)**; major CVD **0.82 (0.75-0.91)**; MI **0.86 (0.75-0.99)**;
  stroke **0.81 (0.71-0.93)** [@mente2023pure].
- **Per one quintile (20 percentile) increment:** «a 20% (1 quintile) higher PURE healthy diet score
  was associated with a 6% lower risk of major CVD, and 8% lower risk of mortality»
  [@mente2023pure] — mortality HR 0.91 (0.89-0.93),
  major CVD 0.94 (0.92-0.97), composite 0.93 (0.92-0.95)
  [@mente2023pure].

**Replication holds, same direction, similar size.** In three prospective vascular-patient cohorts
(ONTARGET/TRANSCEND/ORIGIN): mortality HR 0.73 (0.66-0.81), CVD 0.79 (0.72-0.87); in two case-control
studies (INTERHEART/INTERSTROKE): first MI OR 0.72 (0.65-0.80), stroke OR 0.57 (0.50-0.65)
[@mente2023pure]. The consistency across designs and
continents is the source's genuine strength.

**But discrimination is weak — a population-level gradient, not an individual predictor.** The score's
area under the ROC curve is only **0.61 (mortality), 0.54 (major CVD), 0.58 (composite)**
[@mente2023pure] — barely above chance for CVD. So the score
orders *populations* on risk; it does not tell an *individual* their fate. A per-quintile 6-8% relative
shift on a modest baseline is a small absolute effect for most people
([[Baseline Risk and the Relative-Absolute Split]]).

## The dose-response knee — the lever is raising LOW consumers to moderate

The decision-relevant shape: the association is **not linear**, and it is **steeper below the median**.
«the associations of diet scores with events are markedly steeper at lower levels of the diet score
(i.e. below the global median)» [@mente2023pure], and the
restricted-cubic-spline curve reaches diminishing returns around a score of 4 (of 6): score 4 is «the
level at which most major gains in health are observed and beyond which there is modest additional
health gain» [@mente2023pure]. Studied range: 0-6; the knee
sits mid-range (\~3-4), not at the sampling edge.

**This is a LOCATED knee in a diet-pattern -> mortality/CVD curve** — a data point bearing on the
telos's `[PRIOR — CONTESTED]` knees-and-plateaus question (lodged here, **not adjudicated** — that is a
separate operation). Two caveats keep it honest, and they are not small:

- **The x-axis is an ordinal composite (0-6) built on median cut-offs**, not a natural intake unit. A
  knee on a 7-point integer score assembled from six dichotomized foods is a far weaker object than a
  knee on grams/day of one food — the median-threshold scoring itself compresses the top of the range.
- **FFQ measurement error flattens curves** ([[Measurement Error in Dietary Assessment]]), so an
  apparent plateau above moderate intake is partly what the instrument cannot resolve, not certainly a
  biological ceiling. The authors concede this cuts the *other* way for magnitude: «variations in
  reporting might lead to random errors that could dilute real associations between diet scores and
  clinical outcomes. Therefore, the beneficial effects of a healthier diet may be larger than what we
  have estimated» [@mente2023pure].

**Decision consequence (holds regardless of the epistemic caveat):** for someone already at a moderate
score, pushing the diet score higher buys little; the large remediable gap is in the low-score stratum.
This is *the ceiling-is-a-finding* rule instantiated — and it is why the source's own emphasis lands on
low consumers, not on optimizing an already-adequate diet. -> [[The Underivable Optimum]]

## The regional "effect modification" is largely position on the curve — and the under-nutrition reframe

The associations are «significantly stronger in South Asia, China, and Africa, regions where the PURE
diet score is low» (mean scores 2.1 / 2.6 / 3.1) [@mente2023pure]. Read naively this is route-(b) effect modification by region. Read against the knee above, it
is mostly **route-(a)/curve-position**: low-consuming populations sit on the *steep* part of the
dose-response curve, so the same score increment moves their risk more — no biological
region-interaction is required to explain it.
[inferred from @mente2023pure]

From this the authors draw their headline policy claim: «an inadequate level of consumption of key
healthy foods is a larger problem than over-consumption of some nutrients or foods»
[@mente2023pure]. **Two guards:** (i) it is an interpretation
of an observational gradient, not an experimental result; (ii) it is *stratum-dependent* — it describes
low-consuming (largely lower-income) populations, and does **not** transport to a calorie-replete
population whose binding constraint is over-nutrition (the era/stratum-dependence the telos flags for
the appeal-to-nature trade-off). For the reasonably-healthy, adequately-fed default reader, the big
protective-food rocks are largely already pulled. The direction-of-guidance question this raises
-> [[Which Objective Moved This Recommendation]].

## Which score is best? Barely matters — except the Planetary score, which was null

PURE compared its score head-to-head with five others on its own participants (Table 4). «The PURE
score appears to be slightly more predictive of composite events than the Mediterranean, HEI-2010,
HEI-2015, and DASH diet scores and substantially more predictive than the Planetary diet score»
[@mente2023pure]. On mortality: PURE HR 0.91 / AUC 0.61;
Mediterranean 0.96 / 0.55; HEI-2010 0.93 / 0.55; DASH 0.96 / 0.53; **Planetary (EAT-Lancet) HR 1.00
(0.98-1.03) / AUC 0.52 — null** [@mente2023pure].

- **The "PURE wins" margin is small and self-serving by construction** — every score was tested on
  PURE's own FFQ, which captures PURE's components best and can disadvantage scores built on foods PURE
  measured coarsely. Read the near-equivalence of Mediterranean/HEI/DASH as the signal and PURE's slight
  edge as method-favouring noise. This echoes [[Named Diet Programs Compared]]: across well-constructed
  diet metrics *the label barely carries the effect*.
- **The Planetary-score null is the one real divergence**, and the authors attribute it to its being
  «the most restrictive» — it limits animal foods (dairy, and to a degree fish/legumes) that carry
  PURE's signal. Whether that is a real demerit of the EAT-Lancet pattern or an artifact of scoring it
  on a population where those foods are protective is unresolved here (its non-health / environmental
  objective is a different axis this wiki does not price — name it, do not net it).

## No single component carries it — and the score is reachable many ways

Removing or swapping components barely moved the score's predictive value: each of the six contributes
similarly and modestly, and the two most-contested optional foods are neutral additions — «when we
included red meat in the diet score in a sensitivity analysis, the findings were similar (neither
stronger nor weaker)», the same for whole grains [@mente2023pure]. So a moderate score «can be achieved in a number of ways which does not necessarily require
either including or excluding animal foods from the diet» [@mente2023pure] — a vegetarian reaches it via fruit/veg/legumes/nuts/dairy, an omnivore via any of
dairy/fish/meat.

**This is the inverse of the usual food-category trap** ([[Is the Food Category Doing Any Work]]): there
the question is whether a broad label hides a load-bearing sub-boundary; here *no* single sub-component
dominates, so the **aggregate pattern is the right unit** and substituting within it is near-neutral.
The whole-fat **dairy** inclusion is the score's distinctive, contrarian element (other scores favour
low-fat or exclude dairy) -> [[Dairy and Cardiometabolic Health]], where PURE's dairy signal is weighed
against the neutral pooled-cohort evidence and its funding caveat.

## Appraisal — healthy-user confounding is the headline caveat

The estimates carry the standard observational-nutrition liability, and PURE shows it in its own numbers:

- **The signal roughly halves under adjustment.** Mortality for the top vs bottom score group is
  **HR 0.54 (0.50-0.59) age/sex-adjusted, attenuating to 0.70 (0.63-0.77)** on full multivariable
  adjustment (composite: 0.64 -> 0.78) [@mente2023pure]. A
  third of the crude association was confounding by lifestyle/SES that the model *could* measure — which
  is the signature that **residual** confounding by the factors it could not measure runs the same
  direction (toward the null of the causal effect).
- **The authors concede exactly this**, and tie it to the effect size: «the possibility of residual
  confounding from unmeasured or imprecise measurement of covariates cannot be completely ruled
  out—especially given that the differences in risk of clinical events is modest (\~10%-20% relative
  differences)» [@mente2023pure]. A 10-20% relative
  difference is well within what residual confounding can manufacture.
- **Two biases point opposite ways, so the net direction is genuinely uncertain**: residual confounding
  *inflates* the protective estimate; FFQ measurement error *dilutes* it (the dilution quote above). The
  honest reading is not "the true effect is larger" (the authors' framing) nor "it is all confounding" —
  it is that the point estimate sits between two large, opposing, unquantified biases.
- **Funding tell (symmetric standards).** PURE is partly funded by «an unrestricted grant from Dairy
  Farmers of Canada and the National Dairy Council (U.S.)» [@mente2023pure], and the PURE group holds a known heterodox, dairy-and-SFA-favourable stance. This
  does not delete the finding, but the **whole-fat-dairy-is-protective** and **SFA-limits-may-not-be-
  warranted** interpretations are exactly where a directional sponsor would push, so they are discounted,
  not adopted. The *score predicts CVD/mortality* finding is robust to this; the *policy reframe* is not.

## Decision relevance, confidence, and gaps

- **`confidence: medium`** — a large, geographically diverse, internally-replicated observational signal
  in a consistent direction, but single-source (PURE + its own replication cohorts are **not
  independent** — shared authors and PURE infrastructure with [[Dairy and Cardiometabolic Health]]'s
  Dehghan PURE macronutrient paper; a shared confounding or measurement structure moves them together),
  attenuating under adjustment, discrimination weak, and with **no hard-outcome RCT** — «large
  randomized trials are essential to definitively clarify the clinical impact»
  [@mente2023pure].
- **Decision-change (per stratum):** for a **low consumer of protective foods** (the study's own
  steep-curve stratum), moving toward a moderate score (\~4/6) is the high-value action and the one the
  evidence most supports; for someone **already at a moderate/good score**, the marginal gain from
  pushing higher is small by construction (the knee) — a licence to stop optimizing, not a failure to
  find a lever. Which specific foods get there is close to interchangeable, so **adherence and access
  decide it**, not the brand of score.
- **Gaps (G):**
  - **No RCT of adopting a diet-pattern score on hard events** — the structural gap the source names;
    a decades-long whole-diet trial is impractical, so this stays a named absence.
  - **`G (needs aggregation)`:** a confounding-adjusted, cross-cohort pooled diet-score -> CVD-events
    magnitude independent of PURE — a number the fabric cannot compute from one source family.
  - **The knee's reality vs the ordinal-score artifact** — whether the flattening above score \~4 is a
    biological plateau or an artifact of median-cut composite scoring + FFQ error is unresolved and
    would need a natural-unit intake analysis to settle.


## Why WHI does not fill the hard-outcome RCT gap — a distinction, not a tension

 — it is tempting to read the largest diet RCT (WHI DM Trial, n=48,835, null on CHD/stroke/
CVD) as the missing randomized test of a protective-food pattern. It is not: **the two test different
exposures**, so WHI's null neither fills the gap above nor speaks against this page's association.
Parameter table (the not-joined check (ii): different exposure/unit, so a *distinction*, not a filed
tension) -> [[Low-Fat Dietary Pattern and Cardiovascular Disease]]:

| Parameter | WHI DM Trial | PURE diet-quality score | Same quantity? |
|---|---|---|---|
| Exposure the arm defines | total-fat *quantity* (target 20%E) | count of 6 protective foods (0-6) | **NO** — a macronutrient % vs a protective-food pattern |
| Displaced/added | fat calories removed, replaced by **carbohydrate** (grains) | protective foods **added** | **NO** — opposite operation |
| Fat *quality* moved? | no specific SFA->unsaturated focus | not a fat-quality lever at all | n/a |
| Design | RCT, hard events | observational cohort | different by construction |

So WHI is a null RCT of *fat-quantity-to-carbohydrate*, and the diet-quality-score signal is about
*adding protective foods* — the WHI authors say their trial «is not a test of the dietary guidelines
cur- rently recommended for prevention of CVD» (the plant-based, protective-food pattern)
[@whi2006]. **The "no hard-outcome RCT"
gap therefore stands** — WHI does not close it.

## Self-critique `[run 2026-08-25, before commit]`

- **No diet-score halo.** The score-predicts finding is stated with its weak discrimination (AUC \~0.52-
  0.61), its \~50% attenuation under adjustment, and the authors' own residual-confounding concession up
  front — not buried. The contrarian dairy/SFA policy reframe is quarantined from the core finding and
  tagged with the dairy-industry funding tell.
- **Knee lodged, not adjudicated.** The located knee is recorded as a data point for the `[PRIOR —
  CONTESTED]`, explicitly **not** scored against the telos here (that is a separate operation), and
  double-caveated (ordinal composite + FFQ flattening) so it is not oversold as a clean natural-unit
  knee.
- **Independence not laundered.** PURE's five replication studies are marked shared-infrastructure (not
  type-E independent backing), and the shared-author overlap with the Dehghan PURE paper is stated — no
  `[E-independent]` claimed anywhere.
- **Effect-modification handled with the right route.** The regional heterogeneity is read as
  curve-position (route-a/arithmetic) rather than asserted as biological region-interaction (route-b),
  matching the false-positive discipline; the reframe is scoped to the low-consuming stratum, not
  generalized to the replete reader.
- **Counter-passage check ran** on the two cross-source echoes (Named Diets "label barely matters";
  Dairy neutrality) — both are cross-links to pages that own those verdicts, not tensions filed here;
  PURE's dairy reading is flagged as needing the Dairy page's weighing, not asserted as settled.
- **Both biases named.** Residual confounding (inflates) and measurement error (dilutes) are stated as
  opposing, so the page does not adopt the authors' "true effect is larger" spin.
- **WHI distinction is joined-checked, not a fake tension.** The parameter table shows WHI tested a
  *different exposure* (fat-quantity->carb) than the protective-food score, so it is filed as a
  distinction (not-joined check (ii)) that *preserves* the RCT gap, not a tension resolving it; the WHI
  quote is `bin/cite.py`-verified and not truncated past its qualifier.

## References

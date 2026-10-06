---
type: framework
question: Does the form of fruit (whole, blended, juiced) change its health effect, and on which outcome?
aliases: [Fruit Juice, 100% Fruit Juice, Is Fruit Juice Healthy, Smoothies, Blended Fruit, Blending vs Juicing, Are Smoothies Bad, Fruit Form]
authors: [European Food Safety Authority (org); Chung, Mei; Aune, Dagfinn; Ayoub-Charette, Sabrina]
sources: [EFSA - Dietary Sugars Upper Intake Level 2022, Chung - Fructose Nonalcoholic Fatty Liver Meta-Analysis 2014, Aune - Fruit Vegetable Mortality 2017, Ayoub-Charette - Fructose Sources Uric Acid 2021]
cluster: sugars-sweeteners
nucleus: false
confidence: low
relationships:
  related_to:
    - Free Sugars Intake
    - Fruit and Vegetable Intake and Health
    - Fatty Liver MASLD and Weight Loss
    - Dietary Fibre and Health
    - Is the Food Category Doing Any Work
created: 2026-10-06
updated: 2026-10-06
self_critiqued: 2026-10-06
---
<div class="recent-page" data-last-updated="2026-10-06"></div>


Orbiter of the `sugars-sweeteners` cluster; the limit on free sugars itself lives on the nucleus
[[Free Sugars Intake]]. This page holds the separate decision of **which form of fruit**: whole,
blended or juiced. The same fruit gives different answers by form and by outcome, so the question has
no single verdict until both are named. (split from [[Free Sugars Intake]] 2026-10-06;
sections moved unchanged apart from cross-references)

## Preparation changes the exposure — juice, blending, whole fruit are three foods `[2026-09-25, belief-harvest WS-024/025]`

*Is fruit juice a healthy way to get your fruit?* is under-specified until you name **the form** and
**the outcome** — the same fruit runs different ways on both axes, and a *get your servings*
instruction loses the distinction.

**The form axis — fibre matrix retained or removed.** Whole fruit, a blended smoothie, and 100% juice
are not one exposure:

- **Juicing removes the insoluble-fibre matrix** — which is why WHO's definition puts fruit juice
  *inside* free sugars and whole fruit *outside* it (the definition on [[Free Sugars Intake]]), and why the MASLD section
  treats juice as a liquid-sugar energy vehicle -> *Does fructose's MASLD biochemistry...* below.
- **Blending is not juicing.** A blended whole fruit **retains all the fibre** — it disrupts cell walls
  but removes nothing — so a smoothie is not a juice and does not inherit juice's
  fibre-stripped profile. The common belief that *smoothies are just as bad as juice* conflates the two
  under *processing*; the retained fibre is the difference. The residual open question is only whether
  cell-wall disruption raises the glycemic response *modestly* versus the intact fruit — a magnitude not
  held (a blended-fruit glycemic-response SR is queued, `smoothie-glycemic-response`), and bounded well
  below the juice case because the fibre is still present.
 -> [[Is the Food Category Doing Any Work]], [[Dietary Fibre and Health]]

**The outcome axis — the sign of fruit juice flips by endpoint** (the legs are worked on this page and on [[Free Sugars Intake]];
gathered here because it is one decision question):

- **Metabolic / weight / dental:** juice is inside the free-sugars definition. EFSA grades fruit juice
  -> T2DM and gout at moderate certainty and -> obesity at very low, from prospective cohorts: «There
  is also evidence for a positive and causal relationship between the intake of fruit juices and risk
  of some chronic metabolic diseases, based on data from PCs. The level of certainty in the relationship
  is considered to be moderate for T2DM and gout (> 50–75% probability) and very low for obesity (0–15%
  probability). • The external validity of the ﬁndings in relation to the risk of gout for European
  populations is unclear.»
  [@efsasugars2022] (corrected 2026-10-06:
  the weight leg was cited to §body weight, which holds no juice evidence; self-critique. Re-lifted
  2026-10-06: the earlier quote was the abstract's wording, chunk 01, under a chunk-25 tag, and dropped
  the gout external-validity qualifier; split self-critique).
- **Vascular:** fruit juice was **inversely** associated with stroke and, in the high-vs-low contrast,
  CHD in Aune's cohort evidence (2 studies per contrast; the CHD dose-response is null — §*What
  CVD/mortality evidence says about the same forms*, below).
- **Urate / gout — the sign is not settled.** In controlled feeding trials 100% fruit juice **lowers**
  serum urate where SSB raises it (magnitudes on [[Free Sugars Intake]] §fructose/uric-acid), while
  EFSA's cohort grading above puts fruit juice -> gout on the *adverse* side at moderate certainty. The
  trial MA itself names the discrepancy with cohort data on gout and offers one reason: «However, unlike
  the previous work, which included both fruit drinks and 100% fruit juice as a single group, we were
  able to separately assess the effects of 100% fruit juice in the addition trials, which may explain
  our discrepant results.»
  [@ayoubcharette2021fructose]. The two also
  differ in outcome (a short-term serum surrogate vs incident disease) and design, so neither overrides
  the other here.

So *is juice healthy?* has no single answer: net-adverse on the metabolic/dental channel where its
free-sugar load dominates, plausibly neutral-to-inverse on some vascular endpoints (it still carries
potassium and flavonoids), and unresolved on urate/gout. Whole fruit sits outside the free-sugars
definition, and its fibre and chewing make it at least as favourable on satiety and glycemic response
as the processed forms — a direction, not a held magnitude.


## Does fructose's MASLD biochemistry make high-fructose FRUIT a concern? (deliverable-critique, 2026-08-01)

No - not whole fruit at normal intakes. A fructose-specific liver harm is **not shown**: in Chung's
controlled-feeding trials, fructose raised liver fat when it added calories (low-level evidence, vs a
weight-maintenance diet), overfed fructose and glucose acted alike, and the one isocaloric
fructose-vs-glucose trial found no difference; the trials were short, small and used loads above
current intakes
[@chung2014]. The hepatic de
novo lipogenesis step is a mechanism leaning toward harm at very high chronic intake, not a measured
outcome. Whole fruit's low concern rests on the achievable dose (fibre, water and satiety cap intake),
not on demonstrated safety. The free-sugars definition **excludes intrinsic whole-fruit sugars and
includes fruit juice** ([[Free Sugars Intake]]), so the decision-relevant lever is cutting excess liquid energy (sugary
drinks, juice), not avoiding whole fruit -> [[Fatty Liver MASLD and Weight Loss]].

(corrected 2026-10-06: *free-fructose bolus drives hepatic DNL; cut free fructose* -> fructose-specific
harm not shown, lever is liquid energy, aligned with Chung on the MASLD page)

## What CVD/mortality evidence says about the same forms — a distinction, not a tension `[2026-08-13]`

[[Free Sugars Intake]] reads fruit juice as *inside* the harmful exposure. On a **different outcome axis**,
Aune 2017 (F&V -> CVD/cancer/mortality) reports the opposite sign for juice and a harm signal for a
processed form instead — so match the scope before reading a clash:

- **Fruit juice was INVERSELY associated** with stroke (high-vs-low 0.67 [0.60-0.76]; per-100 g 0.72
  [0.63-0.83]) and CHD (high-vs-low 0.79 [0.63-0.98]) in that cohort evidence — 2 studies per high-vs-low
  contrast, and the CHD dose-response (3 studies) is null (per 100 g/d 0.93, 0.80-1.08)
  [@aune2017fv] (corrected 2026-10-06: study
  counts and CHD null slope added; self-critique). **Tinned fruit** was the
  form with a **positive** (harm) association with cardiovascular disease.
- **Why this is a distinction, not a tension (not-joined check ii — different outcome/scope):** the
  free-sugars concern is the metabolic/hepatic/dental channel (excess liquid-sugar energy -> liver fat; caries),
  whereas Aune measures CVD, stroke, cancer and all-cause. A juice serving can be net-inverse for
  vascular endpoints (it still carries potassium, vitamin C, flavonoids) while being net-adverse for the
  metabolic channel where its free-sugar load dominates. Both hold; they are consistent once the outcome
  is matched, so no `[[tension]]` is filed -> [[Fruit and Vegetable Intake and Health]].
- The whole-vs-processed axis (tinned-fruit harm) is the more robust processing signal in these data
  than a blanket fruit-vs-juice rule.

## References

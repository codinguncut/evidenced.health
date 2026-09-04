---
type: framework
aliases: [Tea, Green Tea, Black Tea, Tea and Mortality, Camellia sinensis, Tea Flavonoids]
question: Does habitual tea drinking lower cardiovascular disease and all-cause mortality, for whom, and by how much?
authors: [Chung, Mei; Zhao, Naisi; Wang, Deena; Shams-White, Marissa; Karlsen, Micaela; Cassidy, Aedin; Ferruzzi, Mario; Jacques, Paul F; Johnson, Elizabeth J; Wallace, Taylor C; Sesso, Howard D]
sources: [Chung - Tea Consumption Cardiovascular Dose-Response 2020, Mazidi - Flavonoid Intake and Mortality 2020, Sesso - Cocoa Flavanol Cardiovascular COSMOS 2022]
cluster: beverage-cells
confidence: low
self_critiqued: 2026-08-31
created: 2026-08-30
updated: 2026-09-03
relationships:
  related_to: [Coffee Consumption and Health, The U-Shaped Association Artifact, Measurement Error in Dietary Assessment, Is the Food Category Doing Any Work, Upgrading Observational Evidence]
---

**Decision one-liner (Layer 1):** habitual tea is **not a big rock**. The best available evidence is
one COI-funded dose-response meta-analysis of **prospective cohorts only** [@chung2020tea], reporting a **per-cup relative risk within
1-4% of 1.0** for CVD/stroke/all-cause mortality — and that small association **vanishes in the
studies with the most valid dietary-exposure assessment**. For a reasonably-healthy tea drinker this
changes nothing: keep drinking tea if you like it, but do not adopt or increase it *as a health
intervention* on this evidence. The elderly / high-baseline-risk stratum is where any absolute effect
would be largest (route (a)), and even there the estimate rests on observational data.

## Read these caveats before the numbers

- **Observational-only, small effects.** No RCT met inclusion; 39 prospective cohorts, per-cup RRs of
  0.96-0.98. Effects this small on cohort data are within the reach of residual confounding and
  healthy-user bias (tea drinkers differ systematically — smoking, activity, diet, SES). `type-C`
  provisional beverage-cell opener; single source. [@chung2020tea]
- **Conflict of interest — front-loaded, not buried.** The project ran on «an unrestricted
  educational grant from Unilever to the Think Healthy Group» [@chung2020tea]; Unilever sells tea (Lipton/PG Tips). Two authors on
  the expert panel report consulting fees from Coca-Cola and/or Unilever. Under **symmetric
  standards** this does not falsify the finding — the extracted estimates are the source's own and the
  RoB gradient below actually cuts *against* the sponsor's interest — but a favourable beverage result
  funded by that beverage's seller warrants the same scrutiny a favourable industry-funded result
  always does, and is why the effect is not upgraded above the data. [@chung2020tea]
- **The benefit is concentrated in the worst-measured studies** (the RoB gradient — see below). This
  is the single most decision-relevant fact on the page.

<div class="recent-update" data-last-updated="2026-09-03">

## Per-cup dose-response (relative-only; over the studied range)

Random-effects pooled adjusted RR per **1 cup/d (236.6 mL)** increase [@chung2020tea]:

| Outcome | n | RR / cup (95% CI) | Significant? | Heterogeneity I2 |
|---|---|---|---|---|
| CVD mortality | 19 | 0.96 (0.94, 0.98) | yes | 72.4% |
| CVD events | 7 | 0.98 (0.96, 1.00) | **no — CI touches 1.00** | 76.5% |
| Stroke | 13 | 0.96 (0.93, 0.99) | yes | 63.9% |
| All-cause mortality | 18 | 0.98 (0.97, 0.99) | yes (abstract linear trend \~1.5%/cup) | 73.7% |

- **Studied range** \~ 0 to \~2000-2500 mg total tea flavonoids/d \~= **0 to \~7-9 cups/d** (1 cup \~= 280
  mg black / 338 mg green flavonoids). Any claim holds only inside this range; there is no data on the
  effect of very high intakes. [@chung2020tea]
- **Heterogeneity is large everywhere** (I2 62-77%) — the pooled point estimate averages materially
  different study results.
- **Elderly / high-baseline stratum, larger magnitude** (route (a) baseline-risk scaling, not a proven
  effect-modification): CVD mortality RR 0.89 (0.83, 0.96) n=4; all-cause 0.92 (0.90, 0.94) n=3. A
  constant-ish relative effect on a higher baseline risk yields a larger absolute benefit; the source
  offers no absolute-risk numbers, so the absolute effect cannot be stated here.
  [@chung2020tea]

**Relative-only, no absolute layer.** Every figure above is a relative risk; the paper reports no
baseline event rates, so a decision-grade absolute effect (events avoided per 1000 person-years)
cannot be computed from it. This is a named gap, not an omission to gloss.

</div>

## The RoB gradient — the association weakens as exposure measurement improves

The source's own subgroup analysis: «studies with higher ROBs appeared to show larger magnitudes of
associations than studies with lower ROBs.» [@chung2020tea] Stratified by **validity of dietary-exposure assessment** (A most valid
-> C least valid):

| Outcome | A (most valid exposure) | C (least valid) |
|---|---|---|
| All-cause mortality | RR **1.005 (0.972, 1.040)** — null | RR 0.957 (0.937, 0.979) — sig |
| CVD mortality | RR **0.969 (0.918, 1.022)** — NS | RR 0.932 (0.884, 0.983) — sig |

[@chung2020tea] In the
studies that measured tea intake best, the all-cause-mortality association is **exactly null**
(RR 1.005) and CVD-mortality is non-significant. The pooled benefit is carried by the studies that
measured exposure worst — the pattern expected if the association is partly a **measurement-and-bias
artifact** rather than a causal effect. A reverse-causation facet points the same way: studies that
did **not** confirm participants were outcome-free at baseline showed *larger* associations (all-cause
0.927 vs 0.985; CVD-mortality 0.886 vs 0.973). [@chung2020tea]

## Curve shape — monotone over the range, but not a demonstrated plateau

- The authors read an inverse, possibly-steepening trend with **no knee located**: the reduction «may
  become larger with an increase in daily tea intake amounts.» [@chung2020tea]
- The RR going **non-significant at high intake (>2000-2500 mg/d) is a sparse-data sampling edge, NOT
  an upper bound or plateau**: «wide CIs (large uncertainty) at very high intakes ... due to sparse
  data.» [@chung2020tea] Do not read
  the high-dose nonsignificance as *more buys nothing* — it is *we have almost no data up there*.
- **Monotonicity is partly a specification artifact.** The primary dose-response is a single per-cup
  linear coefficient; a single-slope display cannot exhibit a knee, so *monotone-inverse* is weak
  evidence of a truly monotone curve. The nonlinear (quadratic) model did reduce residual
  heterogeneity for CVD events and stroke but not for the two mortality outcomes. -> [[Measurement Error in Dietary Assessment]], [[The U-Shaped Association Artifact]]
- **U/J-artifact check status:** no protective *upper* arm is claimed to reverse here, so the classic
  U/J upper-arm artifact does not directly apply; but the RoB/outcome-free gradients above are the
  reverse-causation / healthy-user checks, and they *weaken* the protective association rather than
  confirm it. No dedicated lag-exclusion or MR sensitivity analysis was run at the meta level.

## Green vs black — probably similar, evidence thinner for black

Green-tea subgroups reach significance more often than black (e.g. CVD mortality: green 0.952 (0.923,
0.981) sig vs black 0.974 (0.935, 1.015) NS), but the authors argue for similar bioefficacy via a
shared metabolite endpoint: «one might expect the bioefficacy of green and black tea to be similar.»
[@chung2020tea] Treat the green/black
split as **hypothesis-generating** (subgroup, multiple-testing), not as evidence black tea is inert.

## Is it the tea, or the components? (named G-gap)

Tea is a **whole-beverage exposure** — flavonoids/catechins + caffeine + L-theanine + whatever
correlates with the tea-drinking lifestyle. This MA models exposure as *total tea flavonoids* and
attributes the association to them via a BP/endothelial mechanism [@chung2020tea], but it holds **no design that isolates the flavonoid
from the beverage** (no decaffeinated-vs-caffeinated contrast, no isolated-flavonoid comparator, no
Mendelian randomization). Whether the (small, bias-prone) signal is doing any work *as tea* versus *as
flavonoid intake* versus *as a marker of a healthy pattern* is **unresolved and unaddressed here**.
-> [[Is the Food Category Doing Any Work]] `type-G`

This is a sharper gap for tea than for coffee: coffee's beverage-cell has a decaf test and an
MR-null disconfirmation to lean on; tea's has neither, so the component-vs-beverage-vs-lifestyle
question stays wide open. [inferred from @chung2020tea]

**A flavonoid MA does NOT close this gap `[2026-08-30, Mazidi]`.** It is tempting to read Mazidi's
cohort meta-analysis — dietary *flavonoid* intake -> lower total (RR 0.87) and CVD (RR 0.85) mortality
[@mazidi2020flavonoid] — as isolating the flavonoid and so
confirming *it is the flavonoids in the tea*. It does not. Mazidi's exposure is flavonoid intake
**estimated from FFQ food reports**, and flavonoids are «commonly present in vegetables, fruits, herbs
and teas» [@mazidi2020flavonoid] — **tea is literally
inside the exposure.** So the flavonoid variable re-expresses the same self-reported dietary-pattern
signal in flavonoid units, carrying the identical confounding + measurement-error substrate; it is **not
independent backing** for tea's CVD association (shared/overlapping exposure defeats type-E outright) and
holds **no** component-isolating design (no biomarker, no isolate arm, no MR) either. The net effect is
a **second FFQ-derived source confirming the gap stays open**, not a resolution of it. Full appraisal +
the not-independent parameter table -> [[Flavonoid Intake and Mortality]],
[[Is the Food Category Doing Any Work]].
[inferred from @mazidi2020flavonoid]

**The nearest randomized flavanol isolation the corpus holds is COSMOS — and it is cocoa, not tea
`[2026-08-31, Sesso]`.** Tea's gap above is that it holds «no decaffeinated-vs-caffeinated contrast, no
isolated-flavonoid comparator, no Mendelian randomization». COSMOS (Sesso 2022) is the corpus's one
randomized placebo-controlled **flavanol-extract** trial on hard CV endpoints — the isolation design
tea's cell lacks — and its **primary** composite was **null: HR 0.90 (0.78, 1.02; P=0.11)**
[@sesso2022cosmos]. But it **does not close tea's
gap**: it isolated a **cocoa-bean extract** (a different flavanol/bioactive profile than
*Camellia sinensis*), as a dosed pill at \~5x dietary intake rather than a brewed beverage, and even it
«cannot disentangle the effects of its individual components»
[@sesso2022cosmos]. So the most it lends tea is a
directional prior — the one randomized removal of a food-borne flavanol from its food matrix shrank the
observational signal toward the null on a hard outcome — not evidence about tea specifically. The tea
component-vs-beverage-vs-lifestyle question stays open. -> [[Vitamin and Mineral Supplements for Disease Prevention]]
[inferred from @sesso2022cosmos]

## Parallel beverage cell — coffee (structural comparison only, NO numeric weld)

Coffee and tea are **adjacent observational beverage cells** and share the same appraisal posture:
small associations on cohort data, heavy confounding/healthy-user exposure, curve read off habitual
FFQ intake. That is the whole of the safe comparison — the **quantities are not the same** and are not
combined:

| Parameter | Tea (Chung 2020) | Coffee ([[Coffee Consumption and Health]]) | Same quantity? |
|---|---|---|---|
| Exposure contrast | per-cup linear trend (per 236.6 mL) | category / nadir-vs-reference (J-curve) | **No** |
| Effect size | RR 0.96-0.98 per cup | J-shaped, nadir \~3-4 cups/d | **No — different scale + shape** |
| Causal disconfirmation held | none (no MR, no decaf test) | MR-null (Nordestgaard); decaf test | **No** |
| Bioactives | flavonoids/catechins, L-theanine, less caffeine | chlorogenic acids, diterpenes, more caffeine | **No — distinct** |

[inferred from @chung2020tea] Because no row is the same
quantity, only the **structural** claim is made — both are modest, confounding-prone beverage cells —
and tea is the **less adjudicated** of the two (it lacks coffee's MR disconfirmation). No number is
carried across. -> [[Coffee Consumption and Health]]

## Where this sits

- **Layer 1:** low rank. A per-cup RR within 1-4% of 1.0, null in the best-measured studies, on
  observational data — not a lever to prioritize for a reasonably-healthy person. The ceiling is the
  finding: if you already have the big rocks handled, tea is not a remaining rock.
- **Layer 3 (recommendation):** frame as substitution — tea is a near-zero-harm replacement for
  sugar-sweetened beverages, and *that* substitution has a clearer rationale than tea's own direct CVD
  effect. Drink it for enjoyment; do not medicalize it.
- **Confidence: low** — single COI-funded source, observational, small effect that attenuates to null
  under better exposure measurement, large heterogeneity, no absolute-risk layer, no MR/decaf
  disconfirmation. -> [[Upgrading Observational Evidence]]

## References

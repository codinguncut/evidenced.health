---
type: framework
question: Does dairy intake change the risk of cognitive decline or incident dementia in reasonably-healthy adults — and does the dose-response curve have a real shape (a knee, an optimum), or is the apparent nonlinearity a pooling artifact?
aliases: [Dairy and Cognition, Milk and Dementia, Dairy and Dementia, Dairy Intake and Cognitive Function, Milk and Cognitive Decline, Cheese and Dementia]
authors: [Villoz, Fanny; Filippini, Tommaso; Ortega, Natalia; Kopp-Heim, Doris; Voortman, Trudy; Blum, Manuel R; Del Giovane, Cinzia; Vinceti, Marco; Rodondi, Nicolas; Chocano-Bedoya, Patricia O]
sources: [Villoz - Dairy Cognitive Decline Dementia 2024]
cluster: dairy
confidence: low
created: 2026-09-05
updated: 2026-09-05
self_critiqued: 2026-09-05
relationships:
  related_to:
    - Dairy and Cardiometabolic Health
    - Dairy and Bone Health
    - Dementia Prevention and Modifiable Risk Factors
    - The U-Shaped Association Artifact
    - Measurement Error in Dietary Assessment
    - Is the Food Category Doing Any Work
    - The Underivable Optimum
    - Fermented Foods and Health
---
<div class="recent-page" data-last-updated="2026-09-05"></div>


**Facet of the `dairy` cluster** (nucleus [[Dairy and Cardiometabolic Health]]) — the **cognition/dementia**
endpoint, distinct from the nucleus's cardiometabolic outcomes and the fracture endpoint on
[[Dairy and Bone Health]]. It is also the dairy-side facet of the dementia map
[[Dementia Prevention and Modifiable Risk Factors]], where dairy sits as one more observational candidate
lever, not one of the Commission's 14 factors.

**The through-line (one gold source, single-witness):** Villoz 2024 is the first and only held
dose-response SR+MA on dairy -> cognition — 15 prospective cohorts, 312,580 participants, median 11.4 y
follow-up, **no RCTs**, all observational. Its headline highest-vs-lowest contrast is **null** (RR 0.94,
0.82-1.07), and the one apparent signal — a nonlinear dose-response with a «nadir at \~150 g/d» — is
almost certainly a **between-population pooling artifact**: the descending arm is low-intake Asian
cohorts, the flat arm is high-intake European cohorts, and the «nadir» sits exactly at the boundary
between the two intake ranges. Every effect estimate is FFQ-confounded and vanishes in the studies that
adjust for overall dietary pattern. **Decision-change: for the reasonably-healthy Western person, dairy
is not a cognition lever to worry about or optimize** — the European cohorts show no association, and
even the Asian signal does not survive the confounding checks. `confidence: low`.



## The effect estimates — the headline is NULL; the *signal* lives in subgroups and curve shape

Villoz reports the combined outcome (cognitive decline OR incident dementia) three ways, and the three
disagree in a diagnostic pattern:

- **Highest-vs-lowest intake: NULL.** «the highest intake of dairy products compared to the lowest
  intake has no association with cognitive decline or dementia (RR: 0.94; 95% CI: 0.82, 1.07)» with high
  heterogeneity (I2 69.2%) and a wide prediction interval (0.61-1.45)
  [@villoz2024dairy]. A prediction interval spanning
  0.61-1.45 means a future cohort could as easily find harm as benefit — the pooled point estimate carries
  no decision.
- **Cognitive decline alone: NULL** (RR 1.01, 0.86-1.20, I2 73.5%). **Incident dementia alone:
  borderline** (RR 0.83, 0.67-1.03, I2 63.0%, PI 0.44-1.59) — crosses 1, so an insufficient-evidence
  lean, not an established protective effect. [@villoz2024dairy]
- **Dose-response, quantity (g/d): a nonlinear inverse with a soft turn at \~150 g/d.** «nonlinear
  association, with an initial decline in risk until 150 g/d (RR: 0.88; 95% CI: 0.78, 0.99), after which a
  slight change in direction was observed» [@villoz2024dairy]
  — 6 studies, 3 Asian + 3 European.
- **Dose-response, frequency (times/d): almost linear inverse.** «an almost linear negative association
  when we considered the frequency of consumption (RR for linear trend 0.84; 95% CI: 0.77, 0.92 for 1
  time/d increase of dairy products)» [@villoz2024dairy]
  — 5 studies.

The **shape is measure-specific** (nonlinear on grams, linear on frequency) — a tell that the curve is a
property of *how the exposure was coded across heterogeneous cohorts*, not a stable biological
dose-response. Two different summaries of the same underlying data give two different shapes.



## Why the \~150 g/d *nadir* is a between-population pooling artifact, not a curve feature

This is the page's beyond-summary move, and it reads the source *against* its own headline. Villoz's
quantity dose-response pools 3 Asian and 3 European cohorts whose intake ranges **barely overlap**:

- **The region split IS the signal.** Highest-vs-lowest is protective in Asia (RR 0.83, 0.75-0.92, **I2
  0.0%**) and **null in Europe** (RR 1.01, 0.86-1.19, I2 41.6%); the single Oceania study (high risk of
  bias) even runs the other way (RR 1.75, 1.17-2.62)
  [@villoz2024dairy].
- **The regions occupy different intake ranges.** «The amount and types of dairy consumption between
  regions were considerably higher in studies carried out in European countries, with mean value between
  170-711 g/d, than studies in Asian countries where total mean dairy intake ranged between 29-165 g/d»
  [@villoz2024dairy].
- **So the nadir sits on the seam.** The descending arm below \~150 g/d is drawn almost entirely by the
  Asian cohorts (whose whole intake distribution lies below 165 g/d and who show the protective RR 0.83);
  the flat/rising arm above \~150 g/d is drawn by the European cohorts (170-711 g/d, null). The «nadir at
  150 g/d» is therefore the **boundary between two populations sampled at non-overlapping doses**, not a
  within-person optimum. Region is confounded with intake range *and* with everything else that differs
  between Asian and European cohorts — background diet, dairy-type mix, dietary-pattern context — so the
  apparent knee carries the whole between-population confound.
- **This is a distinct U-shape-artifact mechanism -> [[The U-Shaped Association Artifact]].** Not
  reverse-causation and not sick-quitter: the apparent nonlinearity is manufactured by **pooling cohorts
  whose exposure supports do not overlap**, so the spline is stitched across populations rather than
  estimated within one. It is the same failure as the Seidelmann carbohydrate curve (two cohorts tracing
  complementary arms of one U), sharpened: here the two arms are also two *different populations* with two
  *different confounding structures*. The «studied range» caveat binds hard — no single cohort spans the
  full 29-711 g/d, so the curve's shape at any point is an extrapolation across the seam
  -> [[The Underivable Optimum]].



## Dairy is a type-B category here too — milk and cheese alone are NULL

As on the cardiometabolic nucleus, *dairy* is not one exposure -> [[Is the Food Category Doing Any Work]].
When Villoz stratifies by product, the whole-group inverse dissolves:

- **All-dairy-combined** is inverse and homogeneous (RR 0.89, 0.83-0.95, I2 0.33%), but **milk alone (5
  studies) and cheese alone (4 studies) are both null** — «the association with specific dairy products
  was very heterogeneous and inconsistent ... with the exception of milk and cheese intake alone,
  investigated in 5 and 4 studies and reporting both null associations, respectively»
  [@villoz2024dairy]. Milk's per-frequency curve is
  linear-inverse only at high intakes; cheese's is nonlinear (lower risk at 0.3 times/d, null/positive
  above). A milk-only or cheese-only eater gets no cognition signal from this data.
- **Fat content could not be stratified** — Villoz flags full-fat vs low-fat as unresolved, with two
  cohorts hinting full-fat/whole-cream milk tracks *worse* cognition, but no pooled contrast. The
  dairy-desserts sub-signal (higher cognitive decline) is confounded with sugar and is excluded from most
  dairy guidance. Fermented-vs-unfermented, the axis that carries the only cardiometabolic signal, could
  not be tested either -> [[Fermented Foods and Health]].



## Why the whole signal is discounted — three confounds, all named in-source

- **The association vanishes on dietary-pattern adjustment.** «studies that took into account other food
  groups or dietary patterns that could affect the relationship between dairy consumption and cognitive
  function found no associations» [@villoz2024dairy].
  This is the decisive discount: dairy intake reads as a **marker of a broader dietary pattern**, and when
  the pattern is controlled the dairy effect disappears — the observed-healthy-population problem. The
  plausible mechanistic route (dairy -> cardiometabolic risk -> cognition) also runs through levers the
  dementia map already counts, so any real effect is largely **mediated-not-additive**, not a clean
  independent lever.
- **Differential measurement error / reverse causation over the long prodrome.** «we cannot discard
  differential measurement error because of the recall bias, as early symptomatology of cognitive decline
  could have affected the way people report their diet or their dietary choices»
  [@villoz2024dairy] — early cognitive change bends
  reported intake, manufacturing an association -> [[The U-Shaped Association Artifact]].
- **Single-measurement FFQ exposure.** Most cohorts measured diet once, at baseline, so the exposure is a
  snapshot, not a life-course trajectory, and dietary measurement error flattens real gradients while a
  snapshot cannot capture change -> [[Measurement Error in Dietary Assessment]]. Villoz calls for
  dairy-intake biomarkers to replace recall.

Quality was mostly middling (1 poor, 10 neutral, 4 good on NUQUEST); the funnel plot was symmetric (no
small-study bias detected); excluding the one high-RoB cohort strengthened the overall to RR 0.90
(0.82-1.00). The authors declare no conflicts of interest and the work is publicly funded (Swiss SNF +
Italian Ministry).



## Confidence, decision-relevance, and gaps

- **`confidence: low`** — one gold-design source, but every estimate is observational/FFQ, the headline
  contrast is null, the one dose-response signal is a region-pooling artifact, the product-specific cells
  (milk, cheese) are null, and the association vanishes on dietary-pattern adjustment. A gold *design*
  does not buy a strong *finding* when the finding is a null wrapped around a confounded curve.
- **Decision-change (per stratum):** for a reasonably-healthy adult in a Western intake range, **dairy is
  not a cognition/dementia lever** — the European cohorts show no association and there is nothing to
  optimize. *The ceiling is the finding:* reporting *no lever here* licenses someone to stop worrying
  about dairy for brain health. For a low-intake (e.g. Asian-range) adult the data are consistent with a
  small inverse association, but it is confounded and not adjudicated, so it does not support a "drink more
  milk to prevent dementia" recommendation either. *Attention is an anti-signal* applies — dairy-and-brain
  is discussed far out of proportion to this null.
- **NOT independent-E for any future second source (registry-flagged).** Villoz is a Modena-group
  dose-response-MA product (Filippini, Vinceti — the same lineage behind the held greenness/fluoride/
  acrylamide dose-response units), and it re-pools the canonical dairy-cognition cohorts. A second source
  that would raise confidence by independent backing must come from **outside** this author group.
- **Gaps (G):**
  - **An independent (non-Modena) dairy -> cognition SR/MA** to test the region-pooling reading
    -> a dairy-cognition SR/MA from outside the Villoz/Filippini/Vinceti author group.
  - **Fat-content and fermented-vs-unfermented stratification** on cognition — Villoz could not run
    either; the fermented axis is where the cardiometabolic signal lives.
  - **Within-population wide-intake-range cohorts** (or a dairy-intake biomarker) that would estimate the
    dose-response *inside* one population instead of across the Asia/Europe seam.
  - **`G (needs aggregation)`:** a pooled dairy-cognition dose-response that adjusts for background dietary
    pattern across cohorts — the magnitude that would separate a dairy effect from a diet-quality marker,
    which the fabric cannot compute from this single non-stratified source.
  - **The high-risk (diabetic/hypertensive) stratum is excluded by design** — Villoz restricted to
    reasonably-healthy adults for primary prevention, so this page does not speak to dairy-cognition among
    people with the chronic conditions that dominate Western populations.



## Self-critique `[run 2026-09-05, before commit]`

- **No dairy halo, no dairy scare.** The verdict is stated as *null / no lever for the default stratum*,
  not as *dairy protects the brain* (the abstract's framing) nor *dairy harms cognition*. The one
  protective number (Asia RR 0.83) is presented as confounded and unadjudicated, not headlined.
- **Overclaim check.** The «nadir at 150 g/d» is never presented as an optimum or a target — it is read
  as an artifact of the Asia/Europe intake seam, with the studied-range caveat carried. No causal language
  attaches to any RR; every figure is prefaced observational/FFQ. The dementia-alone RR 0.83 is marked
  crosses-1 / insufficient-evidence, not protective.
- **Not laundered-E.** Single source; no independence claimed. The NOT-E caveat for any future second
  source (Modena author group) is stated explicitly, matching the registry note.
- **Region-pooling reading grounded, not imported.** The artifact reading is built from Villoz's own
  region strata and stated intake ranges (both quoted), then mapped onto the U-shape concept's
  non-overlapping-support mechanism — an synthesis flagged as such, not attributed to Villoz.
- **Mediated-not-additive flag carried.** The dietary-pattern-adjustment null and the cardiometabolic
  mechanism route are used to mark the lever as largely mediated by already-counted factors, consistent
  with how the dementia nucleus treats every diet lever.
- **Open loop (R1).** No operation here grades the dairy-cognition association against a realized dementia
  outcome; a clean audit is not a validated prevention claim.

## References

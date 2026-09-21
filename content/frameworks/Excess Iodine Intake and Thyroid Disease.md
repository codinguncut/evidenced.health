---
type: framework
question: Does chronic excess iodine intake raise thyroid-disease risk in iodine-replete populations, for whom, and where does the safe upper bound sit?
aliases: [Iodine Excess and Thyroid Disease, Iodine Upper Limit, Iodine-Induced Hypothyroidism, Iodine Overconsumption, Excess Iodine Hypothyroidism, Iodine Tolerable Upper Intake Level]
authors: [Katagiri, Ryoko; Yuan, Xiaoyi; Kobayashi, Satomi; Sasaki, Satoshi; Harding, Kimberly B; Pena-Rosas, Juan Pablo; De-Regil, Luz Maria]
sources: [Katagiri - Excess Iodine Thyroid Diseases 2017, Harding - Iodine Supplementation Pregnancy 2017]
confidence: low
cluster: deficiency-enhancement
created: 2026-09-17
updated: 2026-09-17
self_critiqued: 2026-09-17
relationships:
  related_to:
    - Deficiency Repletion vs Enhancement
    - The U-Shaped Association Artifact
    - Levothyroxine for Subclinical Hypothyroidism
    - Measurement Error in Dietary Assessment
    - Surrogate Outcomes
    - Dietary Supplements
    - Iodine Supplementation in Pregnancy
---

Iodine is the textbook deficiency nutrient — its lower arm (deficiency -> impaired child
neurodevelopment) is held on [[Deficiency Repletion vs Enhancement]]. This page holds the **upper
arm**: chronic *excess* iodine intake raises thyroid-disease risk, principally **hypothyroidism**, in
iodine-replete free-living populations. Different outcome, different stratum, different decision — so
iodine is the nutrient for which the wiki now characterises **both arms of one dose-response U**, each
on its own outcome. The single source is a gold-design SR+MA whose *underlying evidence is low
quality* — a distinction that governs how far the finding carries.

The decision this changes: in a population already iodine-sufficient, **more is not better** — monitor
drinking-water and salt iodine, do not over-supplement, and watch the vulnerable (autoimmune /
antibody-positive / nodular / thyroidectomised) strata.
[@katagiri2017iodine] — the excess->hypothyroidism
finding and the gold-design/low-underlying-quality split are Katagiri's; — the whole-U
framing (this page as the upper arm to Bougma's lower arm) and the "more is not better" decision gloss
are the wiki's.

## The effect estimate

- **Population / comparator:** free-living adults in areas of chronic iodine *excess* (median urinary
  iodine concentration, UIC, above the WHO cutoff) vs iodine-*adequate* areas. Meta-analysis was
  pooled over **cross-sectional** studies only (3 adult studies for each pooled outcome).
  [@katagiri2017iodine]
- **Outcome (patient-important, with a surrogate caveat):** overt hypothyroidism (OH) and
  **subclinical** hypothyroidism (SCH). SCH is the load-bearing signal; it is a biochemical state
  (raised TSH, normal free T4) part-way to a patient-important outcome, so treat it as a
  target-not-outcome -> [[Surrogate Outcomes]]. Katagiri's own warrant for reporting it: *some* SCH is
  treated and *some* is preventable. [@katagiri2017iodine]
- **Magnitude (relative):** adults, excess vs adequate — **OH OR 2.78 (95% CI 1.47 to 5.27)**;
  **SCH OR 2.03 (1.58 to 2.62)**. Dropping the one elderly study: **OH 2.44 (1.21 to 4.91)**,
  **SCH 1.95 (1.47 to 2.58)** — the estimate is not carried by the nursing-home cohort.
  [@katagiri2017iodine]
- **Absolute:** not poolable here — the constituent studies mostly reported **crude, unadjusted
  percentages**, and baseline SCH prevalence varied widely by area, so no single baseline risk anchors
  an absolute effect. This is a stated limit, not an omission. [inferred from @katagiri2017iodine]
- **Certainty (the source's own):** *«Because of the low quality and limited number of included
  studies, further evidence and review are required.»*
  [@katagiri2017iodine]

## Dose-response — direction is solid, the threshold is edge-of-evidence

- **Where the cutoff comes from.** *«the WHO's epidemiologic criteria define a median UIC 300 μg/L as
  'Excessive' in a population of school-age children»*, applied to adults (500 μg/L for pregnant /
  lactating); the US Tolerable Upper Intake Level is 1100 μg/day.
  [@katagiri2017iodine] The 300 μg/L number is a
  **definitional WHO cutpoint, not a located knee** in the harm curve.
- **The studied range is far above the cutoff — so the threshold is unestimated.** In the
  cross-sectional adult studies the excess areas ran **UIC 338 to 1241 μg/L**: *«Since the high iodine
  areas in many studies showed a UIC which was much higher than the cut-off value of iodine excess, we
  were unable to clarify the situation in borderline excess areas.»*
  [@katagiri2017iodine] Below \~340 μg/L there is
  essentially **no data**; an apparent optimum at 300 is the sampling edge, not a curve feature.
- **Gradient present.** Across the plotted studies *«these studies show an increase in the percentage
  of SCH along with an increase in median UIC»*
  [@katagiri2017iodine]; one large child water-iodine
  study reported a goitre gradient rising with dose (RR 1.56 at 300-399, 2.27 at 600-699, 3.46 at
  900-999, 3.69 above 1500 μg/L, referent 100-200).
  [@katagiri2017iodine]
- **An interventional anchor.** A double-blind RCT (Sang) *«proposed that a total intake of 800 μg/
  day confers a risk of SCH (supplementation 400 μg, median UIC 672 μg)»* in people whose baseline
  intake was already excess. [@katagiri2017iodine]

## Mechanism — Wolff-Chaikoff escape failure

*«In most individuals, escape from the Wolff-Chaikoff effect caused by an acute excess occurs due to a
decrease in sodium-iodide symporter (NIS) activity … In some individuals in whom high residual NIS
activity prevents adaptation to the Wolff-Chaikoff effect, iodine excess induces hypothyroidism.»*
[@katagiri2017iodine] The mechanism is human-corroborated
and gives the excess->hypothyroidism direction a physiological warrant, not merely an observational
association — though the *«mechanism … is not completely obvious.»*
[@katagiri2017iodine]

The other tail is **iodine-induced hyperthyroidism** (Jod-Basedow / IIH): a supplementation side
effect concentrated where fortification was recently introduced into previously deficient areas, or in
nodular individuals. In chronic-excess areas this review found only a **non-significant** hyperthyroid
increase — so the durable chronic-excess signal is hypothyroid, not hyperthyroid.
[inferred from @katagiri2017iodine]

## Who is vulnerable — the effect-modification stratum (route b/c)

Predisposing thyroid damage is the susceptibility axis: *«individuals with predisposing thyroid damage
such as autoimmune thyroiditis or thyroidectomy are susceptible to iodine-induced hypothyroidism.»*
[@katagiri2017iodine] Antibody status modifies the
effect: *«excess iodine intake and positive TPO antibody were risk factors for SCH independently … and
interaction effects on the incidence of SCH between high UIC and positive antibody were found in
children.»* [@katagiri2017iodine]

This is a genuine **effect-modification / contraindication** stratum (routes b/c on the
transportability table): the harm fires hardest in antibody-positive / autoimmune-thyroiditis /
nodular / post-thyroidectomy individuals. But the review **excluded antibody studies by design**, so
the interaction is signalled, not quantified — a named gap it flags for a dedicated review.
[inferred from @katagiri2017iodine]

## Is the upper arm real, or a U-shaped artifact?

Run the [[The U-Shaped Association Artifact]] discipline. This is **not** a protective-lower-arm case —
it is an **upper arm of harm** — so the question is whether the harm arm survives a check before it is
believed, and it does, *directionally*:

- **Interventional corroboration.** Sang's double-blind RCT raises TSH / induces SCH dose-dependently
  when the already-replete are supplemented — a randomised design is the strongest form of the
  interventional check the decision rule asks for, and it is not vulnerable to the reverse-causation /
  confounding that bends observational arms.
- **Mechanism + gradient.** Wolff-Chaikoff escape failure (human-corroborated) plus the UIC-SCH
  gradient make the direction coherent, not a bare shape.

So **believe the direction** (chronic excess raises hypothyroidism risk, chiefly SCH, chiefly in the
vulnerable). **Discount the magnitude:** the pooled ORs come from cross-sectional, crude, unadjusted
percentages with **ecological (area-level) exposure contrasts** and **unremoved antibody/age/sex
confounding** — *«many studies only identified the crude percentages of the diseases and did not adjust
these variables.»* [@katagiri2017iodine] No
referent-correction and no Mendelian-randomization on the arm, so the *size* stays low-certainty even
though the *sign* is corroborated.
[inferred from @katagiri2017iodine]

## Measurement caveat — UIC is a population marker, not an intake

The exposure is **urinary iodine concentration**, a population-level status marker, not measured
individual intake — spot UIC is noisy at the individual level, area medians can be pulled by
intermittent high-iodine foods (kelp/seaweed), and two high-UIC studies used *mean* not median. So the
exposure axis carries the domain's binding constraint -> [[Measurement Error in Dietary Assessment]]:
an area-median UIC contrast is a coarse proxy for what any individual ingests, and the crudeness runs
into every OR above.
[inferred from @katagiri2017iodine]

## Decision relevance

- **For an iodine-sufficient person: do not over-supplement.** The lower arm's benefit is spent once
  replete; past sufficiency the marginal move is toward the harm arm, not more benefit. Frame iodine
  as a **deficiency-correction** lever, not a supplement-to-optimise one -> [[Dietary Supplements]].
- **Structural lever, population-level.** *«Monitoring of both iodine concentration in salt as well as
  the iodine concentration in local drinking water are essential»*
  [@katagiri2017iodine] — water iodine, not only salt,
  is a source of chronic excess; this is an environmental-monitoring decision more than an individual
  one.
- **The vulnerable strata carry the decision.** Antibody-positive / autoimmune / nodular /
  post-thyroidectomy individuals are where excess iodine most plausibly tips SCH -> OH; the general
  replete population's absolute risk is low and imprecisely known.
- **Supplementation in pregnancy is itself a route to excess — the two arms meet in one stratum.**
  Prenatal iodine supplementation raises the rate of *excessive* iodine intake: «7.0% of women who
  received iodine supplements and 1.6% of women who did not had excessive iodine intake during
  pregnancy (average RR 4.33; 95% CI 1.24 to 15.07)»
  [@harding2017iodine]. So in an already-sufficient
  pregnant woman, routine supplementation pushes toward this page's harm arm rather than the
  deficiency-correction benefit — the pregnancy-stratum decision is characterised on
  [[Iodine Supplementation in Pregnancy]]. Note the tolerable-upper-intake figures (IOM 1100 µg/day,
  EC 600 µg/day) are «not intended for iodine-deficient populations»
  [@harding2017iodine], so a deficient thyroid's safe
  window is narrower, not wider.
- **Not a treatment page.** Whether a resulting SCH should be treated is a separate, prescriber-zone
  decision -> [[Levothyroxine for Subclinical Hypothyroidism]].

## Limits

- **Single source; gold design, low-quality evidence.** SR+MA (gold by design) but the pooled studies
  are cross-sectional with a high risk of bias and unadjusted analyses — the tier is the *design's*,
  the certainty is the *evidence's*, and they diverge here.
- **Borderline excess (300-\~340 μg/L) is unestimated** — the studied range starts far above the
  cutoff.
- **Publication bias not excluded** — *«Funnel plots of cross-sectional studies were not
  asymmetrical»* but *«the number of papers was limited»*.
  [@katagiri2017iodine]
- **Antibody interaction excluded by design** — the highest-risk stratum is signalled, not quantified.
- **Children and pregnant women:** too heterogeneous to pool (SCH forest plots high I²); no adult
  hyperthyroidism / goitre / nodule meta-analysis (too few cases, inconsistent).
- **G-gaps (needs a source):** a dose-response including borderline-excess intake; an antibody-stratified
  review; a referent-corrected or MR-instrumented adjudication of the arm magnitude.

## References

---
type: framework
question: Which modifiable exposures reduce the risk of age-related cataract, for whom, by how much, and how confident can we be?
aliases: [Cataract, Cataract Prevention, Physical Activity and Cataract, Lens Opacification, Cataract Risk Factors]
authors: [Aune, Dagfinn; Jayedi, Ahmad; Kazemi, Asma; Soltani, Sepideh; Rezaei, Fatemeh; Leitzmann, Michael F]
sources: [Aune - Physical Activity Cataract Macular Degeneration Meta-Analysis 2026]
confidence: low
created: 2026-08-27
updated: 2026-08-27
self_critiqued: 2026-08-27
relationships:
  related_to:
    - Physical Activity Dose and Mortality
    - Age-Related Macular Degeneration and Modifiable Exposures
    - Diet Physical Activity and Cancer Prevention
    - Shared Modifiable Levers Across Age-Related Diseases
    - Measurement Error in Dietary Assessment
    - The U-Shaped Association Artifact
    - Layer 1 - Ranking Interventions for a Stratum
---

<div class="recent-update" data-last-updated="2026-08-27"></div>

The domain opener for age-related **eye disease** (cataract · AMD). Cataract is the leading global
cause of blindness — «Cataract is the leading cause of blindness and impaired vision globally and
accounts for 50% of all global blind­ ness» — but unlike AMD it is typically **reversible by
surgery**, so the patient-important outcome is vision/function *conditional on surgical access*, not
irreversible sight loss. [@aune2026vision]

<div class="recent-update" data-last-updated="2026-08-27"></div>

## The physical-activity lever — WCRF *probable*

Aune 2026 (SR-MA of prospective cohorts, gold-tier) is the only source held. It is the **stronger
arm** of the paper: physical activity → lower cataract risk graded **probably causal** on WCRF
criteria (the same graded-causality matrix as [[Diet Physical Activity and Cancer Prevention]]).
[@aune2026vision]

- **High vs low PA:** RR **0.90 (95% CI 0.86–0.94)**, I2 = 74%, 10 cohorts / 8 publications, 163,065
  cases, 1,914,137 participants — a **10% relative** risk reduction. Excluding two outlying studies
  cut heterogeneity to 19% with the estimate essentially unchanged (RR 0.89, 0.87–0.92). No
  publication bias (Egger p = 0.39). [@aune2026vision]
- **Dose-response:** RR **0.91 per 20 MET-hours/week** (0.84–0.99, I2 = 66%, n = 3), **monotone over
  the studied range** — no nonlinearity (pnonlinearity = 0.32); the authors report a **25% risk
  reduction at 50 MET-hours/week**. The shape claim is weak (only 3 cohorts had usable dose data; the
  studied range is not stated in the extracted text — read the 25%-at-50 figure as a within-range
  point, not an optimum). [@aune2026vision]
- **By PA type:** running RR 0.70 (0.60–0.82, n = 2) > total PA 0.89 (0.83–0.95, n = 2) > leisure-time
  0.95 (0.93–0.97, n = 2). The running estimate rests on 2 self-selected runner cohorts (National
  Runners'/Walkers' Health Study) — a healthier-than-average, more-intense stratum; do not read the
  0.70 as the general dose. [@aune2026vision]

**Studied populations:** cataract follow-up 7–12.1 y; mostly Europe + US; modified Newcastle-Ottawa
quality mean 5.7 (median 5.9) / 8 (moderately high). The main quality gaps were unvalidated PA
assessment and unclear exclusion of prevalent cases at baseline. [@aune2026vision]

<div class="recent-update" data-last-updated="2026-08-27"></div>

## Why this is an *association discounted for healthy-user confounding*, not a demonstrated lever

This is observational cohort evidence. The binding threat is **confounding by the
healthy-active-person profile** — physical activity travels with not-smoking, better diet, and higher
SES, each plausibly protective for the lens. Three facts bound how much of the 10% is causal:

- **The E-value is modest.** «The E-value for the association between physical activity and cataract
  was 1.46 (lower CI: 1.31), suggesting an unadjusted risk fac­ tor would need to have a moderate
  association with both physical activity and cataract risk to fully explain away the observed
  association.» A *moderate* unmeasured confounder suffices — so the association is **not robust to
  strong confounding**, consistent with a small true effect partly inflated by healthy-user selection.
  [@aune2026vision]
- **Confounder adjustment was real but incomplete.** Most cohorts adjusted BMI, smoking, alcohol, and
  hormone therapy; the overall association survived subgroup analysis stratified by adjustment. Only
  **one** study adjusted for **sun exposure** (a lens-specific risk factor) and still found a reduced
  risk. [@aune2026vision]
- **Measurement error runs toward the null here, not away from it** — «Measurement errors in both the
  exposure and outcome may have affected the results, however, given the cohort design of the included
  studies, any bias would most likely have attenuated the associations toward the null.» So the
  self-reported-PA measurement error (the domain's binding constraint,
  [[Measurement Error in Dietary Assessment]]) argues the *true* effect is at least as large as
  measured, not smaller — a point pulling the other way from the confounding discount. [@aune2026vision]

The U/J-artifact lens ([[The U-Shaped Association Artifact]]) does **not** apply — the contrast is
high-vs-low with a monotone dose-response and all component RRs below 1.00; there is no protective-arm
reversal to interrogate.

<div class="recent-update" data-last-updated="2026-08-27"></div>

## Mechanism — a mediator chain, only partly cashed

Aune's stated pathway is **metabolic-mediation**: PA improves weight control, lowers type-2-diabetes
risk (diabetes carries a \~3-fold cataract risk), and lowers blood pressure — and adiposity,
diabetes, and hypertension are each cataract risk factors; PA may also reduce ocular oxidative stress,
inflammation, and advanced-glycation-end-product formation. [@aune2026vision]

- **The adiposity channel is treated as a *mediator*, and the mediated fraction is not quantified.**
  «It is possible that certain fac­ tors that were adjusted for in some studies, including adi­ posity,
  hypertension and diabetes, may be on the causal pathway between physical activity and cataract, and
  thus represent overadjustments. Further studies should investigate whether these factors may mediate
  part of the observed associations.» So the source flags that studies adjusting for adiposity/HTN/
  diabetes may be **over-adjusting** away part of a real PA effect — but it does **not** put a number on
  the mediated share, and calls for further work. The oxidative-stress channel is-grade
  mechanism, not an outcome finding. [@aune2026vision]

<div class="recent-update" data-last-updated="2026-08-27"></div>

## Established (non-PA) risk factors — context for stratification

Aune lists the established cataract risk factors as **diabetes, higher BMI, hypertension, smoking,
ultraviolet light, and steroid use**. Several are themselves modifiable big rocks already held
elsewhere in the fabric (glycaemic control, weight, blood pressure, smoking cessation), which is the
route-(a) point: **absolute** cataract benefit from any lever scales with baseline risk, so it is
largest in the diabetic / high-BMI / smoking stratum even though the *relative* PA effect is modest.
[@aune2026vision]

<div class="recent-update" data-last-updated="2026-08-27"></div>

## Decision relevance (Layer 1)

Vision loss and its prevention are patient-important **function/QoL outcomes** on the one health axis
(independence, quality of life). But physical activity is **already a big rock** by construction —
non-substitutable for its pleiotropy ([[Physical Activity Dose and Mortality]]) — so a vision-specific
protective arm **adds to** PA's case rather than creating a new lever. For a reasonably-healthy person
the decision *be physically active* is already settled on mortality and cardiometabolic grounds; the
cataract arm is **confirmatory and marginal**, not decision-turning. It bites hardest, via route (a),
where cataract baseline risk is high (diabetes, high BMI) and where a person is weighing activity
specifically for eye health. Honest summary: **modest (RR 0.90), observational, WCRF-probable — a
real but small confirmatory arm on an already-pulled lever.**

<div class="recent-update" data-last-updated="2026-08-27"></div>

## Held threads / gaps

- **Single-source, observational.** Aune 2026 is the sole anchor; no RCT, no Mendelian-randomization,
  and no objective (accelerometer) PA measure is held for this outcome — all are named gaps.
- **A diet arm for cataract is not held.** Aune notes fruit-and-vegetable adjustment materially moved
  the PA estimate (between-subgroup pheterogeneity = 0.02), hinting a diet lever exists — a directional
  gap, no SR held.

## References

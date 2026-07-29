---
type: framework
question: How much physical activity, of what kind, do I need before the mortality benefit flattens?
aliases: [Physical Activity Dose, Exercise Dose-Response, MVPA Threshold, Muscle-Strengthening and Mortality, Sedentary Thresholds, How Much Exercise]
authors: [World Health Organization (org)]
sources: [WHO - Physical Activity Web Annex Evidence Profiles 2020, Willett - Nutritional Epidemiology 3e]
cluster: activity
confidence: medium
relationships:
  related_to:
    - Muscle-Strengthening Activity and Mortality
    - Measurement Error in Dietary Assessment
    - Upgrading Observational Evidence
    - Layer 1 - Ranking Interventions for a Stratum
created: 2026-07-27
updated: 2026-07-29
self_critiqued: 2026-07-29
---

# Physical Activity Dose and Mortality

**Primarily WHO's 2020 evidence profiles** (plus Willett on measurement). WHO's own evidence base is
*other guidance bodies' reviews* — so agreement with PAGAC or the Canadian/Australian guidelines would be
**structurally guaranteed and worth nothing**. A genuinely independent check was hoped for from
[[Muscle-Strengthening Activity and Mortality]] (Momma 2022) — **now ingested, and the honest outcome is
that it is NOT that check**: Momma is the same observational physical-activity-epidemiology lineage
(overlapping cohorts, cites the same prior metas), so it *corroborates* the strength finding (its
all-cause RR 0.85 sits beside the strength-guideline HR 0.80 below) but does not supply independent
backing. A genuinely independent family (a different method — e.g. objectively-measured fitness change,
or an RCT-grade outcome) is still owed.

## The decision this page changes

**Most of the mortality benefit arrives at a dose far below what people assume they need — and the
curve then flattens.** That is a decision-change in the telos's specific sense: it licenses someone
to *stop optimizing*, which is a result, not a failure to find one.

**But the *outcome* of that activity — cardiorespiratory fitness — predicts mortality even more
strongly, and with no plateau** -> [[Cardiorespiratory Fitness and Mortality]]. The two are not one
claim: self-reported activity *dose* flattens early here, while objectively-measured *fitness* keeps
paying — a discrepancy that is itself informative about measurement, not proof that more activity is
always better.

## Where the curve bends — named maxima, device-measured

> «Maximal risk reductions for light intensity PA was ~375 min/day, low light intensity PA at ~325
> min/day, high light intensity PA at ~80 min/day, and MVPA at ~24 min/day.»
> [EXTRACTED (WHO - Physical Activity Web Annex Evidence Profiles 2020) chunk 05]

> «The maximal risk reduction for total PA was observed at about 300 cpm (adjusted HR = 0.34 [95% CI
> 0.27 to 0.43]).»
> [EXTRACTED (WHO - Physical Activity Web Annex Evidence Profiles 2020) chunk 05]

**Certainty: HIGH.** The underlying profile is a harmonized meta-analysis of eight prospective
cohorts in which **all eight used accelerometers** rather than self-report, and *«A non-linear,
dose-response association was found between all exposure variables and mortality (p<0.02 for all
exposure variables)»*. A second profile reports *«A curvilinear relationship was found between total
PA and all-cause mortality (p non-linearity <0.001).»*
[EXTRACTED (WHO - Physical Activity Web Annex Evidence Profiles 2020) chunk 05]

| Exposure | Dose at maximal risk reduction |
|---|---|
| **MVPA** (moderate-to-vigorous) | **~24 min/day** |
| High light intensity | ~80 min/day |
| Low light intensity | ~325 min/day |
| Light intensity (total) | ~375 min/day |
| Total PA | ~300 cpm — **HR 0.34 (0.27-0.43)** |

**Read the table as substitution, not as a target menu.** These are *different routes to the same
maximum*, so the operative reading is: roughly 24 minutes of moderate-to-vigorous activity, **or**
a much larger volume of light activity, reaches most of the available benefit. WHO states the
intensity-independence directly:

> «Any physical activity, regardless of intensity, was associated with lower risk of mortality, with
> a non-linear dose-response.»
> [EXTRACTED (WHO - Physical Activity Web Annex Evidence Profiles 2020) chunk 09]

**Two cautions on the HR 0.34.** It is a *between-quartile* contrast in observational cohorts, so
reverse causation (illness reduces activity) is not excluded by design — the profile's HIGH rating
reflects consistency and precision, not randomization. And the exposure is total accelerometer
counts, which is not a prescription anyone can follow directly.

## Strength training — a real independent association, never ranked above aerobic

| Finding | Effect | Certainty |
|---|---|---|
| Strength-guideline adherence vs not (Stamatakis 2018, 11 cohorts, N=80,306) | **HR 0.80** (0.70-0.91) | MODERATE |
| *Any* strength-promoting exercise vs none (same) | **HR 0.77** (0.69-0.87) | MODERATE |
| **Meeting both aerobic AND strengthening guidelines** vs neither | **HR 0.71** | MODERATE |

[EXTRACTED (WHO - Physical Activity Web Annex Evidence Profiles 2020) chunk 05]

**The operative claim is *both, and together* — not *strength instead of cardio*.** No profile in the
annex ranks resistance training above aerobic activity, and where the two are compared head-to-head
(anxiety, 16 RCTs; depression, 33 RCTs; sleep), WHO reports *«No significant difference was found
between studies examining resistance training vs. aerobic exercise training»* — at **LOW** and **VERY
LOW** certainty. [EXTRACTED (WHO - Physical Activity Web Annex Evidence Profiles 2020) chunk 05]

**A distinction that is NOT a tension.** Siahpush 2019 (N=68,706) reports *«There was no association
between all-cause mortality and meeting strength recommendations (and not aerobic PA
recommendations)»* — which looks opposed to Stamatakis. It is not: **Siahpush's profile is about
smokers**, Stamatakis pools 11 general-population cohorts. Different population, consistent once
matched. Recorded here so the apparent clash is not re-filed later as a `[[tension]]`.
[EXTRACTED (WHO - Physical Activity Web Annex Evidence Profiles 2020) chunk 05]

## Sedentary time is a separate exposure with its own thresholds

> «For all-cause and CVD mortality, a threshold of 6-8 h/day of total sitting and 3-4 h/day of TV
> viewing was identified, above which the risk is increased.»
> [EXTRACTED (WHO - Physical Activity Web Annex Evidence Profiles 2020) chunk 09]

The relationship is *«non-linear for all-cause mortality»* and **PA-adjusted** — i.e. it survives
controlling for activity, so sitting less and moving more are not the same lever.

**TV viewing carries a lower threshold than total sitting (3-4 h/day vs 6-8 h/day) and stronger
associations.** Two behaviours inside one category, behaving differently — though what accompanies TV
viewing is not addressed here, so confounding is not excluded.
`-> [[Is the Food Category Doing Any Work]]` for the same structure in a different domain.

## Older adults — falls, which is a patient-important outcome

> «Long-term exercise is associated with a reduction in falls, injurious falls, and probably fractures
> in older adults, including people with cardiometabolic and neurological diseases.»
> [EXTRACTED (WHO - Physical Activity Web Annex Evidence Profiles 2020) chunk 11]

Falls and fractures are outcomes people care about directly, not surrogates — the strongest outcome
class the annex carries for this stratum.

## What this page does NOT support

- **No compensation analysis exists anywhere in the annex** — *now held on a sibling page.* Whether a
  given activity dose is offset by reduced activity elsewhere, or by increased intake, is untouched here;
  [[Exercise Energy Compensation]] (Riou 2015) supplies it: compensation is real (~18%, rising to ~84%
  long-term) but is driven by adiposity/age/duration, **not** by intensity — so *walking is better
  tolerated than intense exercise* remains unsupported (intensity is not a compensation predictor).
- **No ranking of modalities.** See above.
- **Frailty cannot be targeted from this evidence**: WHO reports *«A lack of consensus regarding the
  definition of frailty, and an absence of core measures to assess this means any attempt to create an
  optimal intervention will be impeded.»* An ill-defined construct — distinct from a well-defined
  measure that decays under targeting.
  [EXTRACTED (WHO - Physical Activity Web Annex Evidence Profiles 2020) chunk 11]
- **A study-level correlation is not an individual-level one.** *«At the study level, there was a
  positive correlation between the size of the exercise-induced effect on physical function and on
  cognitive function (b = 0.41; p = 0.002).»* That does not license "improving function improves
  cognition" for a person — the ecological-inference trap.
  [EXTRACTED (WHO - Physical Activity Web Annex Evidence Profiles 2020) chunk 11]

## Sedentary behaviour is not the inverse of activity — and devices have type-specific bias `[2026-07-28, Willett ch.10]`

Two findings from Willett's physical-activity assessment chapter bear on how this page's estimates
should be read.

**1. Sitting and moving are close to independent, not two ends of one scale.**

> «Interestingly, there is little correlation between sedentary behaviors and physical activity (Hu et
> al., 2003), suggesting that sedentary behaviors are not simply the opposite of physical activity.»
> [EXTRACTED (Willett - Nutritional Epidemiology 3e) chunk 14]

**So "sedentary time" and "activity" are two exposures, not one variable read in two directions**, and
a person can be high on both. This is a unit-of-analysis point with a direct consequence: **a
recommendation phrased as *move more* does not automatically address sitting**, and evidence about one
does not transfer to the other. -> [[Is the Food Category Doing Any Work]] (same structure, different
domain: the label implies a single underlying quantity and there are two).

**2. Device measurement is not error-free, and its error is activity-type-specific.**

> «(2002) found that compared with portable indirect calorimetry, the Tritrac accelerometer
> overestimated the energy expenditure of walking and jogging, and underestimated that of stair
> climbing and stationary cycling in middle-aged women.»
> [EXTRACTED (Willett - Nutritional Epidemiology 3e) chunk 14]

**This qualifies rather than undermines the device-measured estimate this page carries.** The bias is
**differential by activity mode** — over on ambulatory movement, under on climbing and cycling — so a
device-measured total activity variable is a weighted mixture whose weights depend on the population's
activity mix. **Two populations with identical true expenditure but different activity profiles will
be measured differently**, which is a transportability problem, not an attenuation problem.
`[INFERRED (Willett - Nutritional Epidemiology 3e) — the accelerometer findings are Willett's; the
transportability reading is this page's]`

**Note the vintage:** this is 2012 hardware (Tritrac). Modern accelerometry and the processing behind
the estimate on this page may behave differently, and **this wiki holds no source establishing that
either way**. Recorded as a caution about the *class* of instrument, not as a defect in the specific
estimate.

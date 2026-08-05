---
type: framework
question: How much physical activity, of what kind, do I need before the mortality benefit flattens?
aliases: [Physical Activity Dose, Exercise Dose-Response, MVPA Threshold, Muscle-Strengthening and Mortality, Sedentary Thresholds, How Much Exercise]
authors: [World Health Organization (org); Mandsager, Kyle; Livingston, Gill; World Cancer Research Fund International (org)]
sources: [WHO - Physical Activity Web Annex Evidence Profiles 2020, Willett - Nutritional Epidemiology 3e, Mandsager - Cardiorespiratory Fitness and Long-Term Mortality 2018, Livingston - Dementia Prevention 2024, WCRF - Diet Nutrition Activity Cancer 2018, Sherrington - Exercise Preventing Falls 2019]
cluster: activity
confidence: medium
relationships:
  related_to:
    - Muscle-Strengthening Activity and Mortality
    - Measurement Error in Dietary Assessment
    - Upgrading Observational Evidence
    - Layer 1 - Ranking Interventions for a Stratum
    - Dementia Prevention and Modifiable Risk Factors
created: 2026-07-27
updated: 2026-08-05
self_critiqued: 2026-08-01
---

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

**But the *outcome* of that activity — cardiorespiratory fitness — predicts mortality even more  [@mandsager2018]
strongly, and with no plateau** -> [[Cardiorespiratory Fitness and Mortality]]. The two are not one
claim: self-reported activity *dose* flattens early here, while objectively-measured *fitness* keeps
paying — a discrepancy that is itself informative about measurement, not proof that more activity is
always better.

## Where the curve bends — named maxima, device-measured

> «Maximal risk reductions for light intensity PA was \~375 min/day, low light intensity PA at \~325
> min/day, high light intensity PA at \~80 min/day, and MVPA at \~24 min/day.»
> [@who2020]

> «The maximal risk reduction for total PA was observed at about 300 cpm (adjusted HR = 0.34 [95% CI
> 0.27 to 0.43]).»
> [@who2020]

**Certainty: HIGH.** The underlying profile is a harmonized meta-analysis of eight prospective
cohorts in which **all eight used accelerometers** rather than self-report, and *«A non-linear,
dose-response association was found between all exposure variables and mortality (p<0.02 for all
exposure variables)»*. A second profile reports *«A curvilinear relationship was found between total
PA and all-cause mortality (p non-linearity <0.001).»*
[@who2020]

| Exposure | Dose at maximal risk reduction |
|---|---|
| **MVPA** (moderate-to-vigorous) | **\~24 min/day** |
| High light intensity | \~80 min/day |
| Low light intensity | \~325 min/day |
| Light intensity (total) | \~375 min/day |
| Total PA | \~300 cpm — **HR 0.34 (0.27-0.43)** |

**Read the table as substitution, not as a target menu.** These are *different routes to the same
maximum*, so the operative reading is: roughly 24 minutes of moderate-to-vigorous activity, **or**
a much larger volume of light activity, reaches most of the available benefit. WHO states the
intensity-independence directly:

> «Any physical activity, regardless of intensity, was associated with lower risk of mortality, with
> a non-linear dose-response.»
> [@who2020]

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

[@who2020]

**The operative claim is *both, and together* — not *strength instead of cardio*.** No profile in the
annex ranks resistance training above aerobic activity, and where the two are compared head-to-head
(anxiety, 16 RCTs; depression, 33 RCTs; sleep), WHO reports *«No significant difference was found
between studies examining resistance training vs. aerobic exercise training»* — at **LOW** and **VERY
LOW** certainty. [@who2020]

**A distinction that is NOT a tension.** Siahpush 2019 (N=68,706) reports *«There was no association
between all-cause mortality and meeting strength recommendations (and not aerobic PA
recommendations)»* — which looks opposed to Stamatakis. It is not: **Siahpush's profile is about
smokers**, Stamatakis pools 11 general-population cohorts. Different population, consistent once
matched. Recorded here so the apparent clash is not re-filed later as a *tension*.
[@who2020]

## Sedentary time is a separate exposure with its own thresholds

> «For all-cause and CVD mortality, a threshold of 6-8 h/day of total sitting and 3-4 h/day of TV
> viewing was identified, above which the risk is increased.»
> [@who2020]

The relationship is *«non-linear for all-cause mortality»* and **PA-adjusted** — i.e. it survives
controlling for activity, so sitting less and moving more are not the same lever.

**TV viewing carries a lower threshold than total sitting (3-4 h/day vs 6-8 h/day) and stronger
associations.** Two behaviours inside one category, behaving differently — though what accompanies TV
viewing is not addressed here, so confounding is not excluded.
`-> [[Is the Food Category Doing Any Work]]` for the same structure in a different domain.

## Older adults — falls, which is a patient-important outcome

> «Long-term exercise is associated with a reduction in falls, injurious falls, and probably fractures
> in older adults, including people with cardiometabolic and neurological diseases.»
> [@who2020]

Falls and fractures are outcomes people care about directly, not surrogates — the strongest outcome
class the annex carries for this stratum.

**Quantified and mechanised by a gold Cochrane SR -> [[Exercise for Preventing Falls in Older Adults]].**
The WHO annex states the *association*; Sherrington's 108-RCT review supplies the *effect and its shape*:
exercise cuts the rate of falls by 23% (RaR 0.77, 0.71-0.83, HIGH certainty), and the active ingredient
is **balance/functional training**, not activity volume — resistance training alone does not reduce falls
[@sherrington2019]. This is a **refinement, not
independent backing** — the WHO annex's falls conclusion rests on largely the same RCT base the Cochrane
SR pools, so treat the SR as bounding/mechanising the guideline claim, not corroborating it from a
separate route. The fracture arm stays lower-certainty on both.

## Second outcome — dementia (same shape: most benefit at the bottom)

Physical inactivity is one of the 14 modifiable dementia risk factors -> [[Dementia Prevention and Modifiable Risk Factors]]. A 58-study SR+MA found «physical activity was associated with a decreased risk
of all-cause dementia (RR 0.80, 0.77 to 0.84, n=257,983)» across intensities and follow-ups >=20 years,
with the reduction «greatest when moving from extreme sedentariness to some physical activity».
[@livingston2024] This replicates the *marginal-minute-worth-
most-at-the-bottom* shape on a second outcome. Caveat unchanged: the link is «likely to be bidirectional»
(pre-clinical dementia reduces activity), and the one 5-year RCT of structured exercise found no overall
cognition/MCI difference — so the observational RR 0.80 is a decreased-risk *association*, not a proven
prevention effect.

## Third outcome — cancer, and the dose-shape may differ from the mortality curve

WCRF's Third Expert Report grades **physical activity protective against several cancers** — colorectum
(the evidence «is for colon cancer only», matrix FN56), endometrium and postmenopausal breast (probable),
with a separate probable judgement for vigorous activity and breast cancer.
[@wcrf2018ter, §5.1 Be physically active; matrix asset p3, FN54-57] Mechanism: activity «reduces body fatness, in particular
visceral fat» and lowers circulating insulin, oestrogen and inflammation — the same adiposity/hormone/
inflammation routes that make body fatness carcinogenic, run in reverse. [@wcrf2018ter, §1.4.1]

**The friction worth naming — the curve's shape is outcome-specific.** This page's headline is that the
*mortality* benefit **flattens** early (\~24 min/day MVPA). WCRF states the opposite shape for cancer:
«For cancer prevention, it is likely that the greater the amount of physical activity, the greater the
benefit» — no plateau asserted. [@wcrf2018ter, §5.1]
This is not a contradiction: it is the same *outcome-specific dose-shape* pattern the wiki already holds
(fruit/veg plateaus on all-cause mortality but keeps a gradient on CV mortality in one source). So «most
benefit at the bottom» is the mortality reading; for cancer the report leaves the upper arm open, and a
person optimizing specifically for cancer risk cannot bank the mortality plateau as a stopping point.
[inferred from @wcrf2018ter]
Caveat symmetric with the rest of the page: WCRF's cancer grades are **observational cohort** judgements,
so reverse causation (illness lowers activity) is not excluded by design.

## What this page does NOT support

- **No compensation analysis exists anywhere in the annex** — *now held on a sibling page.* Whether a
  given activity dose is offset by reduced activity elsewhere, or by increased intake, is untouched here;
  [[Exercise Energy Compensation]] (Riou 2015) supplies it: compensation is real (\~18%, rising to \~84%
  long-term) but is driven by adiposity/age/duration, **not** by intensity — so *walking is better
  tolerated than intense exercise* remains unsupported (intensity is not a compensation predictor).
- **No ranking of modalities.** See above.
- **Frailty cannot be targeted from this evidence**: WHO reports *«A lack of consensus regarding the
  definition of frailty, and an absence of core measures to assess this means any attempt to create an
  optimal intervention will be impeded.»* An ill-defined construct — distinct from a well-defined
  measure that decays under targeting.
  [@who2020]
- **A study-level correlation is not an individual-level one.** *«At the study level, there was a
  positive correlation between the size of the exercise-induced effect on physical function and on
  cognitive function (b = 0.41; p = 0.002).»* That does not license "improving function improves
  cognition" for a person — the ecological-inference trap.
  [@who2020]

## Sedentary behaviour is not the inverse of activity — and devices have type-specific bias `[2026-07-28, Willett ch.10]`

Two findings from Willett's physical-activity assessment chapter bear on how this page's estimates
should be read.

**1. Sitting and moving are close to independent, not two ends of one scale.**

> «Interestingly, there is little correlation between sedentary behaviors and physical activity (Hu et
> al., 2003), suggesting that sedentary behaviors are not simply the opposite of physical activity.»
> [@willett]

**So "sedentary time" and "activity" are two exposures, not one variable read in two directions**, and
a person can be high on both. This is a unit-of-analysis point with a direct consequence: **a
recommendation phrased as *move more* does not automatically address sitting**, and evidence about one
does not transfer to the other. -> [[Is the Food Category Doing Any Work]] (same structure, different
domain: the label implies a single underlying quantity and there are two).

**2. Device measurement is not error-free, and its error is activity-type-specific.**

> «(2002) found that compared with portable indirect calorimetry, the Tritrac accelerometer
> overestimated the energy expenditure of walking and jogging, and underestimated that of stair
> climbing and stationary cycling in middle-aged women.»
> [@willett]

**This qualifies rather than undermines the device-measured estimate this page carries.** The bias is
**differential by activity mode** — over on ambulatory movement, under on climbing and cycling — so a
device-measured total activity variable is a weighted mixture whose weights depend on the population's
activity mix. **Two populations with identical true expenditure but different activity profiles will
be measured differently**, which is a transportability problem, not an attenuation problem.
[inferred from @willett]

**Note the vintage:** this is 2012 hardware (Tritrac). Modern accelerometry and the processing behind
the estimate on this page may behave differently, and **this wiki holds no source establishing that
either way**. Recorded as a caution about the *class* of instrument, not as a defect in the specific
estimate.


## Is "24 min/day" false precision? Read it as a flat-region central estimate (deliverable-critique, 2026-08-01)

The \~24 min/day MVPA figure is a real source value - the point where the mortality dose-response is
«close to the maximum», i.e. where the curve FLATTENS - not an invented threshold. But the concern is
right: it should not be read as a precise minimum effective dose. Two held rules make it a REGION, not a
number: *a minimum effective dose is a region, not a number* (outcome-specific), and *required precision
scales with local curvature* - near a plateau the exact figure carries little decision weight. So 24 min
is the central estimate of a broad flattening zone (\~20-40 min/day of MVPA); whether it is 20, 24 or 40
barely changes the decision, and the decision-relevant shape is the one this page already gives: the
marginal minute is worth the most at the bottom, and most of the benefit is banked well before the number
is reached.

## References

---
type: framework
question: How much physical activity, of what kind, changes mortality -- and where, if anywhere, does the benefit flatten?
aliases: [Physical Activity Dose, Exercise Dose-Response, MVPA Threshold, Muscle-Strengthening and Mortality, Sedentary Thresholds, How Much Exercise]
authors: [World Health Organization (org); Ekelund, Ulf; Paluch, Amanda E; Mandsager, Kyle; Livingston, Gill; World Cancer Research Fund International (org); Coenen, Pieter; Celis-Morales, Carlos A]
sources: [WHO - Physical Activity Web Annex Evidence Profiles 2020, Ekelund - Accelerometer Physical Activity Mortality 2019, Ekelund - Sitting Time Physical Activity Mortality 2016, Paluch - Daily Steps Mortality 2022, Willett - Nutritional Epidemiology 3e, Mandsager - Cardiorespiratory Fitness and Long-Term Mortality 2018, Livingston - Dementia Prevention 2024, WCRF - Diet Nutrition Activity Cancer 2018, Sherrington - Exercise Preventing Falls 2019, Coenen - Occupational Physical Activity Mortality Meta-Analysis 2018, Celis-Morales - Active Commuting Cardiovascular Cancer Mortality 2017, Shailendra - Resistance Training Mortality Meta-Analysis 2022]
cluster: activity
nucleus: true
confidence: medium
relationships:
  related_to:
    - Muscle-Strengthening Activity and Mortality
    - Measurement Error in Dietary Assessment
    - Cardiorespiratory Fitness and Mortality
    - The U-Shaped Association Artifact
    - The Physical Activity Paradox
    - Upgrading Observational Evidence
    - Layer 1 - Ranking Interventions for a Stratum
    - Dementia Prevention and Modifiable Risk Factors
    - Weekend Warrior Activity Pattern and Mortality
created: 2026-07-27
updated: 2026-09-01
self_critiqued: 2026-08-29
---
<div class="recent-update" data-last-updated="2026-08-29">

**Now anchored on the primary harmonised meta-analyses, not the WHO summary `[2026-08-06]`.** The
device-measured dose maxima this page carries were previously held *via* the WHO 2020 evidence-profiles
annex — but that annex is a **recommendation summary that borrowed its evidence** from the underlying
harmonised meta-analysis, **Ekelund 2019** (accelerometry). Per the *cite-the-underlying-SR-for-an-
effect-claim* rule, the effect/certainty claims are re-anchored below on the primary source; the WHO
quotes are retained as the summary that reproduced them. Two further primaries are now held: **Ekelund
2016** (sitting x PA interaction) and **Paluch 2022** (steps/day). All three are gold harmonised MAs of
prospective cohorts — objective/device or harmonised self-report — the objective-measurement corrective
to the older self-report dose-response literature.

**These three are not independent replications of each other.** Ulf Ekelund is a named co-author on all
three, and they re-slice overlapping cohort pools (the shared accelerometry/harmonised consortium —
NHANES, the Women's Health Study, and others recur across them). So their agreement on curve *shape* is
a set of convergent framings of one evidence base, not three separate confirmations — which is why no
`[E-independent]` token is claimed on it (the same-quantity check returns NO; the convergence is
qualitative). The genuine independence this page banks is by measurement *modality*, in the next
paragraph.

**The independence gap is now partly closed — by measurement modality, not by method.** A genuinely
independent check was hoped for from [[Muscle-Strengthening Activity and Mortality]] (Momma 2022) and is
NOT one (same observational PA-epidemiology lineage, overlapping cohorts). But the *measurement-artifact
reading* itself now has independent backing: Ekelund's accelerometry finds the activity-mortality effect
is **\~2x larger** than self-report shows, and Mandsager's cardiopulmonary-exercise-testing finds
objectively-measured *fitness* has **no plateau** where self-reported activity does
-> [[Cardiorespiratory Fitness and Mortality]]. Two different objective instruments (hip accelerometer;
maximal exercise test), two non-overlapping author groups, converging on *self-report attenuates the
true gradient* — a genuine `[E-independent]` corroboration of the measurement reading (not of any single
effect size). An RCT-grade mortality outcome is still owed.
[inferred from @ekelundacc2019; @mandsager2018]

</div>

## The decision this page changes

**Most of the mortality benefit arrives at a dose far below what people assume they need — and the
curve then flattens.** That is a decision-change in the telos's specific sense: it licenses someone
to *stop optimizing*, which is a result, not a failure to find one.

**But the *outcome* of that activity — cardiorespiratory fitness — predicts mortality even more  [@mandsager2018]
strongly, and with no plateau** -> [[Cardiorespiratory Fitness and Mortality]]. The two are not one
claim: self-reported activity *dose* flattens early here, while objectively-measured *fitness* keeps
paying — a discrepancy that is itself informative about measurement, not proof that more activity is
always better.

**This page is about total DOSE (how much); a sibling decision governs its DISTRIBUTION across the
week.** Once a weekly volume is fixed, whether it is concentrated into 1-2 sessions (the weekend-warrior
pattern) or spread across the week appears not to change the mortality benefit
-> [[Weekend Warrior Activity Pattern and Mortality]] (with a session-duration floor: sub-30-min
sessions do not bank it, at low observational certainty).


## Scope — this page is LEISURE / TOTAL PA; occupational PA can run the OTHER way `[2026-08-14, Coenen]`

**Every estimate on this page is leisure-time or total physical activity.** The «more is better»
reading does **not** transfer to activity performed *at work*: Coenen 2018 (gold SR+MA, 17 studies,
193,696 participants) finds high *occupational* PA associated with **higher** all-cause mortality in
men (HR 1.18, 95% CI 1.05-1.34), while women show a non-significant inverse tendency (0.90, 0.80-1.01)
[@coenen2018paradox]
-> [[The Physical Activity Paradox]]. This is a **domain disambiguation, not a contradiction**: leisure
PA (short intense bouts, recovery) and occupational PA (≥40 h/week, static/repetitive, no recovery) are
different exposures under one word, and a same-quantity check returns NO on exposure, pattern,
measurement, contrast, and direction. The decision-change for a reader: **do not count physically
demanding work as the exercise this page evidences** — meeting a step/MVPA target *via the job* may not
bank the mortality benefit and, in men, may carry cardiovascular risk. The causal reading is
unadjudicated (observational, self-reported exposure, healthy-worker selection), so this is a
stratum-level caveat on transferability, not a claim that work activity should be reduced.


### Active commuting — a third route to the benefit, and the intensity refinement `[2026-08-19, Celis-Morales]`

**A structural PA lever that corroborates the more-PA-lower-mortality reading from a route neither
leisure nor occupational.** Celis-Morales 2017 (UK Biobank, 263,540 workers, maximally adjusted incl.
occupational PA and some leisure PA) finds cycle-commuting associated with **HR 0.59 (0.42-0.83)** for
all-cause mortality, 0.55 (0.44-0.69) cancer incidence, 0.60 (0.40-0.90) cancer mortality, vs
non-active commuting
[@celismorales2017commuting].
This is a **refinement (type-F), not independent corroboration (type-E)**: UK Biobank
overlaps the accelerometry/harmonised cohorts this page already rests on, so it is the *same
observational PA-epidemiology lineage*, not a separate route — it bounds and extends the leisure-PA
reading, it does not raise its confidence as an independent instrument would.

**The refinement: intensity separates the modes, on exactly the CRF axis.** Cycling benefits all five
outcomes with a dose-response by weekly distance; walking commuting is null for all-cause and cancer
mortality and lowers CVD risk only above «more than six miles a week»
[@celismorales2017commuting]. The
authors attribute the gap to intensity — «approximately 90% of cycle commuters ... achieved current
physical activity guidelines, only 54% of walk- ing commuters» did
[@celismorales2017commuting]. So the
mode that reaches a CRF-improving stimulus banks the broad benefit; the sub-threshold mode does not —
consistent with the objectively-measured *fitness* signal above -> [[Cardiorespiratory Fitness and Mortality]]
and with the domain split on [[The Physical Activity Paradox]].

**Decision-change (structural leverage):** commuting active — especially cycling — is a way to bank
the mortality benefit *built into the day*, so adherence is high; but treat walking-commuting as a
lower-intensity dose that may not reach the plateau this page's leisure estimates describe. **Caveat:**
observational, self-reported mode, and cyclists are markedly leaner/fitter/wealthier at baseline
(healthy-user selection) — a robust association, not a proven causal offset
-> [[Upgrading Observational Evidence]].
[inferred from @celismorales2017commuting]

*Self-critique `[run 2026-08-19]`:* the commuting arm is classed **type-F, not `[E-independent]`** —
UK Biobank shares the observational PA-epidemiology lineage this page rests on, so it does not add an
independent instrument and no `[E-independent]` token is claimed. The benefit is stated as an
*association* with the healthy-user caveat explicit (cyclists leaner/fitter/wealthier at baseline);
walking-commuting is flagged as a sub-threshold dose, not folded into the plateau. No overclaim: the
HRs stay Celis-Morales's, the third-route framing is.

<div class="recent-update" data-last-updated="2026-08-29">

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

**And the dose points are regions on a sparse, age-bounded top — not a target menu.** Two caveats the
table drops belong at the point of display. (i) *Studied range:* Ekelund's cohorts «included middle
aged and older adults who were at least 40 years old; it is unclear whether the estimates of the
absolute physical activity levels associated with maximal risk reduction apply to younger people»
[@ekelundacc2019] — the maxima are not
scoped to under-40s. (ii) *The upper arm is thin:* each dose maximum carries its own wide interval,
the MVPA point most of all («wide confidence intervals were observed at this part of the dose-response
curve» because few participants reach high MVPA), and the \~300 cpm total-PA maximum «mirrors the
median total physical activity for the third quarter»
[@ekelundacc2019] — i.e. the apparent
optimum sits where the data are densest, the *apparent-optimum-equals-sampling-edge* hazard, so read
the dose column as regions on a flat top, not point targets -> [[The Underivable Optimum]].

</div>

<div class="recent-update" data-last-updated="2026-08-29">

## The primary numbers (Ekelund 2019) — the full dose-response, and where the benefit is banked

The two maxima above trace to **Ekelund 2019**, a harmonised MA of 8 accelerometry cohorts (n=36 383,
2149 deaths, model B, least-active referent). The full quartile curve makes the *shape* legible:

| Exposure | Q1 | Q2 | Q3 | Q4 (most active) |
|---|---|---|---|---|
| **Total PA** (cpm) | 1.00 | **0.48** (0.43-0.54) | 0.34 (0.26-0.45) | 0.27 (0.23-0.32) |
| **Light PA** (min/d) | 1.00 | 0.60 (0.54-0.68) | 0.44 (0.38-0.51) | 0.38 (0.28-0.51) |
| **MVPA** (min/d) | 1.00 | 0.64 (0.55-0.74) | 0.55 (0.40-0.74) | 0.52 (0.43-0.61) |

> «Any physical activity, regardless of intensity, was associated with lower risk of mortality, with a
> non-linear dose-response. Hazards ratios for mortality were 1.00 (referent) in the first quarter (least
> active), 0.48 (95% confidence interval 0.43 to 0.54) in the second quarter, 0.34 (0.26 to 0.45) in the
> third quarter, and 0.27 (0.23 to 0.32) in the fourth quarter (most active).»
> [@ekelundacc2019]

**The single most decision-relevant feature: the steepest drop is the FIRST step off the floor.** Getting
out of the least-active quartile roughly *halves* mortality (total PA Q1->Q2 HR 0.48) — and the increment
was small: «broadly equal to ... 5 min/day of moderate-to- vigorous intensity physical activity» over the
referent.
> «the greatest risk reduction for mortality was observed when the second quarter was compared with the
> referent, for all activity intensities.»
> [@ekelundacc2019]
This is the *marginal-minute-worth-most-at-the-bottom* shape, quantified: the near-sedentary person has
the largest lever in the whole domain, and it is a small one to pull.

**The plateau, stated primarily — and honestly as a plateau, not a "no knee".** Above the maxima the
curve flattens:
> «No further risk reductions occurred with higher levels of activity except for low light intensity
> physical activity where the risk appeared to decrease further.»
> [@ekelundacc2019]
So this IS a located plateau (monotone-decreasing then flat — no U/J, no harmful upper arm at achievable
doses). It survives the *measurement* caveat the wiki attaches to plateaus: measurement error can hide a
knee but not manufacture one, and here the plateau is on the objectively-measured, un-attenuated curve —
so it is credible on the un-attenuated curve, more so than a self-report plateau. The one qualifier that
cuts the other way: the plateau's high-dose arm rests on **few participants with wide CIs** (the maxima
caveat above), so it is well-established that the curve flattens but not precisely where. Cross-check: objectively-measured *fitness*
shows NO plateau -> [[Cardiorespiratory Fitness and Mortality]] — the two are not the same construct
(activity dose flattens; the fitness it produces keeps paying).

**Why the effect is this large — the measurement corrective (the type-A/E payoff of holding the primary).**
> «The observed effect sizes for the associations between physical activity and the risk of death are
> about twice as large compared with those previously reported in studies assessing physical activity by
> self report»
> [@ekelundacc2019]
Self-report attenuates the true gradient toward the null; objective accelerometry roughly **doubles** the
observed magnitude and resolves the light-intensity shape self-report could not. This is the
[[Measurement Error in Dietary Assessment]] binding-constraint lesson firing in the *activity* domain,
and the reason a device-measured HR is not comparable to a self-report HR for the same behaviour.

**Reverse causation (the frail move less) — handled by the WEAK check only.**
> «We attempted to minimise bias from reverse causation by excluding all deaths within the first two years
> in sensitivity analyses. The hazard ratios were materially unchanged for the associations of total
> physical activity and light intensity or moderate-to-vigorous intensity physical activity with
> mortality, and slightly attenuated for sedentary time.»
> [@ekelundacc2019]
The PA associations survived early-death exclusion (Ekelund adds «bias from reverse causation might
persist»); there is no MR/genetic instrument, so this is the *weak* adjudication in the
[[The U-Shaped Association Artifact]] sense — enough that the monotone benefit is not purely sick-quitter
artifact, not enough to call it causal. Consistent across all three sources here (see the steps and
sitting sections).

</div>

## Steps per day — the practical, wearable-native dose (Paluch 2022)

**Steps are the metric people actually have.** Paluch 2022 (harmonised MA, 15 cohorts, n=47 471, 3013
deaths; quartile medians 3553 / 5801 / 7842 / 10 901 steps/day) gives the same shape in the unit a
fitness tracker reports:
> «Compared with the lowest quartile, the adjusted HR for all-cause mortality was 0·60 (95% CI 0·51–0·71)
> for quartile 2, 0·55 (0·49–0·62) for quartile 3, and 0·47 (0·39–0·57) for quartile 4. Restricted cubic
> splines showed progressively decreasing risk of mortality among adults aged 60 years and older with
> increasing number of steps per day until 6000–8000 steps per day and among adults younger than 60 years
> until 8000–10 000 steps per day.»
> [@paluch2022]

Highest vs lowest quartile = 40-53% lower mortality; overall nadir \~7000-9000 steps/day; monotone-
decreasing to a plateau (p-nonlinearity <0.0001), same as the MVPA curve.

**The age plateau is genuine effect modification (route-b), not just baseline-risk (route-a).** The
age x steps interaction is significant (p=0.012): **older adults (>=60) reach the plateau LOWER
(\~6000-8000 steps) than younger adults (\~8000-10 000)** — the sex interaction is not (p=0.11). Because
this is *positive interaction evidence*, stratifying the step target by age clears the higher route-(b)
bar (per [[Transportability and Effect Modification]] / the five-routes table), not only the route-(a)
absolute-benefit scaling. Decision-change: an older adult can bank the mortality plateau at a lower step
count than the number a younger adult should aim for.

**10 000 steps is a marketing number.**
> «Although the goal of 10 000 steps per day is widely promoted as being optimal for general health, it is
> not based on evidence, but instead originates from a marketing campaign in Japan.»
> [@paluch2022]
The benefit plateaus below 10 000 for most adults and well below it for older adults — so 10 000 is not a
threshold to clear, and treating it as one may discourage the person for whom 6000-8000 already banks
most of the benefit.

**Cadence adds little beyond volume.**
> «We found inconsistent evidence that step intensity had an association with mortality beyond total
> volume of steps.»
> [@paluch2022]
Peak-30/60-min stepping rate stayed significant after adjusting for volume, but time spent at a moderate
cadence did not — total steps carry the signal, so *count the steps, don't chase the pace*. Reverse
causation handled by the weak check (effect stronger at <6 y follow-up, HR 0.32, vs >=6 y, 0.57 — a
sick-quitter tell — but the 2-year exclusion left it significant).

## These three metrics are NOT interchangeable numbers — a same-quantity check

Steps/day, MVPA-min/day and sitting-hours/day are **complementary framings of one construct (total
movement volume), not convertible doses.** The parameter table below is the guard against reading one
source's number as another's:

| Parameter | Ekelund 2019 (accel) | Paluch 2022 (steps) | Ekelund 2016 (sitting) | Same quantity? |
|---|---|---|---|---|
| Exposure unit | MVPA min/d; total-PA cpm | steps/day | sitting h/day; MET-h/week | **NO** — different units |
| Measurement | hip accelerometer (device) | step-counting device | self-report questionnaire | NO — device vs self-report |
| Referent | least-active quartile | lowest-steps quartile | least-sitting + most-active | NO — different referents |
| Where benefit banks | \~24 min/d MVPA (plateau) | \~7-9k steps (age-varying) | 60-75 min/d MVPA offsets sitting | measure a DIFFERENT feature |
| Top-vs-bottom effect | HR 0.27 (total PA) | HR 0.47 (steps) | HR 1.04 vs 1.27 (joint) | NO — non-comparable contrasts |

**The decision-relevant convergence is qualitative, not numeric:** all three show the same *shape* — a
steep early drop, then a plateau, on the objectively/harmonised-measured curve — but the HRs cannot be
equated (a device-measured total-PA Q4 HR of 0.27 is not *the same as* a steps Q4 HR of 0.47; they are
different exposures, referents and measurement instruments). Use steps for a wearable-native target, MVPA
minutes for a guideline-aligned target, and the sitting interaction for the offset question — do not
convert between their hazard ratios.
[inferred from @ekelundacc2019; @paluch2022; @ekelundsitting2016]

<div class="recent-update" data-last-updated="2026-09-01">

## Strength training — a real independent association, never ranked above aerobic

| Finding | Effect | Certainty |
|---|---|---|
| Strength-guideline adherence vs not (Stamatakis 2018, 11 cohorts, N=80,306) | **HR 0.80** (0.70-0.91) | MODERATE |
| *Any* strength-promoting exercise vs none (same) | **HR 0.77** (0.69-0.87) | MODERATE |
| **Meeting both aerobic AND strengthening guidelines** vs neither | **HR 0.71** | MODERATE |

[@who2020]

**The RT dose is small and the benefit does not require volume.** Three RT→mortality MAs (pooling many of
these same cohorts — Stamatakis and Siahpush above are constituents) put the all-cause reduction around
−15% for *any* RT vs none, and Shailendra's minutes/week dose-response (4 studies) finds the «maximum risk
reduction of 26% observed at around 60 minutes per week of resistance training (RR=0.74; 95% CI=0.64,
0.86)» with benefit *diminishing* at higher volumes — so *some* RT captures the signal and there is no
mortality case for high volume. The evidence is observational/self-reported and the upper «U» arm rests on
4 studies (do not act on it). Full appraisal + the U-artifact reading:
[[Muscle-Strengthening Activity and Mortality]]. [@shailendra2022]

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

</div>

## Sedentary time is a separate exposure with its own thresholds

> «For all-cause and CVD mortality, a threshold of 6-8 h/day of total sitting and 3-4 h/day of TV
> viewing was identified, above which the risk is increased.»
> [@who2020]

The relationship is *«non-linear for all-cause mortality»* and **PA-adjusted** — i.e. it survives
controlling for activity, so sitting less and moving more are not the same lever.

**The dedicated anchor for this sub-question is now [[Sedentary Behaviour and Chronic Disease Risk]]**
(Patterson 2018, gold dose-response MA), which supplies the per-outcome curve shape underlying WHO's
6-8h/3-4h summary range, adds **incident T2D** (TV->T2D the strongest association, 29% PAF) and cancer
mortality, and shows the sitting curve is an *accelerating-harm* knee — the mirror image of the
activity-benefit plateau on this page. `[2026-08-21, Patterson]`

**TV viewing carries a lower threshold than total sitting (3-4 h/day vs 6-8 h/day) and stronger
associations.** Two behaviours inside one category, behaving differently — though what accompanies TV
viewing is not addressed here, so confounding is not excluded.
`-> [[Is the Food Category Doing Any Work]]` for the same structure in a different domain.

**The objective sitting threshold is HIGHER than the self-report one — measurement again.** Ekelund 2019
(accelerometry) puts the sitting-mortality inflection at *9.5 h/day*, above the 6-8 h/day from
self-reported-sitting metas — the same self-report/device gap that doubles the activity effect above,
running in the sitting direction. Read the WHO 6-8 h number as a self-report figure, not the device one.
[@ekelundacc2019]

## Does activity OFFSET sitting? Mostly yes — the Ekelund 2016 interaction

The decision this answers: *if I must sit 8+ hours (desk job, commute), can being active cancel the
risk?* Ekelund 2016 (harmonised MA, >1 million adults, joint sitting x PA analysis) is the source, and
the answer is **high activity eliminates the sitting-mortality association**:

> «Daily sitting time was not associated with higher all-cause mortality rates among those in the most
> active quartile. Compared with the referent (<4 h of sitting per day and highest quartile of physical
> activity [>35.5 MET-hour/week]), there was no increased risk of dying during follow up in those who sat
> for more than 8h/day but who also reported >35.5 MET-hour/week of activity (HR=1.04; 95% CI, 0.99, 1.10).
> In contrast, those who sat the least (<4 h/day) and were in the lowest (<2.5 MET- hour/week) activity
> quartile had a significantly increased risk of dying during follow-up (HR=1.27, 95% CI, 1.22, 1.31).»
> [@ekelundsitting2016]

The striking comparison: **the most-active + most-sitting group had LOWER mortality than the least-active
+ least-sitting group** — activity dominates sitting when both are pushed. Stratified, the sitting
penalty (>8 vs <4 h/day) shrinks stepwise across activity quartiles: 1.27 -> 1.12 -> 1.10 -> 1.04 (ns).
The dose that eliminates it is high — **60-75 min/day of moderate activity**, above the basic guideline:

> «High levels of moderate intensity physical activity (i.e. about 60 to 75 minutes per day) appear to
> eliminate the increased risk of death associated with high sitting time. However, this high activity
> level attenuates, but does not eliminate the increased risk associated with high TV viewing time.»
> [@ekelundsitting2016]

**Two decision-relevant asymmetries.** (i) The offsetting dose (60-75 min/d) is *higher* than the
mortality-plateau dose (\~24 min/d MVPA) above — so *enough activity to bank the mortality benefit* is not
automatically *enough to cancel heavy sitting*; the sitting offset asks more. (ii) **TV viewing is only
attenuated, not eliminated** — even the most active kept excess risk at >5 h/day TV (HR 1.16, 1.05-1.28)
[@ekelundsitting2016], whereas total sitting was
fully offset. TV is not just *sitting*: postprandial-evening timing, snacking,
and fewer sitting-breaks are the offered mechanisms, so the two sedentary exposures are not one lever
(consistent with Willett's near-zero sitting/activity correlation above). Magnitude anchor: the
least-active + >8 h-sitting group's 58% excess risk «is similar to that of smoking and obesity».
[@ekelundsitting2016]

**Caveats (all three sources).** Ekelund 2016 uses *self-reported* sitting and PA at one timepoint
(attenuation toward null), mostly >45 y, western; reverse causation addressed only by excluding
baseline-ill / early deaths — the weak check, same as Ekelund 2019 and Paluch. So the offset is a
robust, biologically-plausible *association* (1 h moderate activity improves postprandial lipid/glucose
after prolonged sitting), not a proven causal cancellation.

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
prevention effect. Where a *multidomain* bundle **including** exercise (FINGER RCT) did move a cognitive
composite, the design cannot attribute that to the exercise component
-> [[Multidomain Lifestyle Intervention and Cognitive Decline]]; single-domain exercise RCTs on cognition
stay null.

## Third outcome — cancer, and the dose-shape may differ from the mortality curve

WCRF's Third Expert Report grades **physical activity protective against several cancers** — colorectum
(the evidence «is for colon cancer only», matrix FN56), endometrium and postmenopausal breast (probable),
with a separate probable judgement for vigorous activity and breast cancer.
[@wcrf2018ter] Mechanism: activity «reduces body fatness, in particular
visceral fat» and lowers circulating insulin, oestrogen and inflammation — the same adiposity/hormone/
inflammation routes that make body fatness carcinogenic, run in reverse. [@wcrf2018ter]

**The friction worth naming — the curve's shape is outcome-specific.** This page's headline is that the
*mortality* benefit **flattens** early (\~24 min/day MVPA). WCRF states the opposite shape for cancer:
«For cancer prevention, it is likely that the greater the amount of physical activity, the greater the
benefit» — no plateau asserted. [@wcrf2018ter]
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

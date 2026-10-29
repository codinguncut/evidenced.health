---
type: framework
question: How strongly does cardiorespiratory fitness (VO2max) predict mortality and incident chronic disease, is there a target, and does raising it help?
aliases: [Cardiorespiratory Fitness, CRF, VO2max, VO2 max, Fitness, METs, Aerobic Capacity, Fitness and Mortality, VO2max Target, Fitness and Incident Disease, CRF and Chronic Disease]
authors: [Kodama, Satoru; Mandsager, Kyle; Jaber, Wael; Ross, Robert; Coenen, Pieter; Lang, Justin J.; Prince, Stéphanie A.; Merucci, Katherine; Cadenas‐Sánchez, Cristina; Chaput, Jean‐Philippe; Fraser, Brooklyn J.; Manyanga, Taru; McGrath, Ryan; Ortega, Francisco B.; Singh, Ben; Tomkinson, Grant R.]
sources: [Kodama - Cardiorespiratory Fitness and Mortality 2009, Mandsager - Cardiorespiratory Fitness and Long-Term Mortality 2018, Ross - Cardiorespiratory Fitness Clinical Vital Sign 2016, Coenen - Occupational Physical Activity Mortality Meta-Analysis 2018, Lang - Cardiorespiratory Fitness Health Outcomes Umbrella 2024]
cluster: fitness
nucleus: true
confidence: medium
created: 2026-07-28
updated: 2026-10-29
self_critiqued: 2026-10-28
relationships:
  related_to:
    - Muscle-Strengthening Activity and Mortality
    - Physical Activity Dose and Mortality
    - The U-Shaped Association Artifact
    - The Physical Activity Paradox
    - Baseline Risk and the Relative-Absolute Split
    - Measuring and Raising Cardiorespiratory Fitness
---
<div class="recent-update" data-last-updated="2026-10-29">

Opens the `fitness` cluster. Cardiorespiratory fitness (CRF, peak VO2, measured in METs — 1 MET =
3.5 mL/kg/min) is a strong mortality predictor. The AHA statement says evidence shows «not only that
CRF is a potentially stronger predictor of mortality than established risk factors such as smoking,
hypertension, high cholesterol, and type 2 diabetes mellitus, but that the addition of CRF to
traditional risk factors significantly improves the reclassification of risk for adverse outcomes.»
[@ross2016]. The
evidence is observational, and Lang's umbrella grades the all-cause association LOW (per MET) and
VERY LOW (high vs low), with the mortality grades set «mainly due to serious indirectness» (most
studies included only men) [@lang2024crf].
Every all-cause CI excludes 1 (upper bounds 0.88-0.93 per MET, 0.56-0.66 high vs low), so the low
grade limits confidence in the magnitude and in its transport to women, not the direction of the
association; the certainty itself stays LOW to VERY LOW.
The wiki's other lever, physical activity, is measured as *dose* (minutes);
this is measured as the *outcome* (capacity). The distinction is load-bearing: every primary analysis here is
observational (cohorts, and meta-analyses of cohorts), so CRF is a **predictor, not a proven causal
lever** — the general prognostic-marker-vs-modifiable-lever distinction ([[Surrogate Outcomes]] ->
*Prognostic marker vs modifiable lever*). The modifiable exposure that acts on it is exercise
([[Measuring and Raising Cardiorespiratory Fitness]]); trials show exercise raises CRF, while its
mortality evidence is itself observational, with a dose gradient
([[Physical Activity Dose and Mortality]]). A VO2max reading is a stratification metric and a trackable
measure (milestone) of the activity lever; no held trial shows that raising CRF itself lowers mortality.

</div>

<div class="recent-update" data-last-updated="2026-10-29">

## The dose-response: steepest at the low end; a smaller residual step at the top in one referral cohort

- **Per 1-MET higher CRF (Kodama meta-analysis, dose-response):** all-cause mortality «RR 0.87 (95% CI,
  0.84-0.90)» and CHD/CVD «0.85 (95% CI, 0.82-0.88)» — i.e. «a 1-MET higher level of MAC was associated
  with 13% and 15% decrements in risk of all-cause mortality and CHD/CVD».
  [@kodama2009]
- **Re-graded by an umbrella review (Lang 2024): three overlapping meta-analyses, one slope.** Lang's
  overview of cohort meta-analyses reports each MA's own estimate without re-pooling, and shows three
  all-cause MAs side by side because their primary cohorts overlap only moderately: «We included
  multiple systematic reviews for all-cause mortality because the CCA was moderate (10%; n=3).» Per
  1-MET higher CRF (exercise-test based, not eCRF), all-cause mortality HR 0.89 (0.86-0.92; Laukkanen 2022, 10 cohorts,
  n=360,131, AMSTAR2 high), 0.88 (0.83-0.93; Han 2022, 14 cohorts, n=625,400, AMSTAR2 moderate) and
  Kodama's 0.87 (0.84-0.90; 18 cohorts, n=85,315, AMSTAR2 critically low). Lang grades this outcome LOW
  certainty, by its own prognostic GRADE (*What the umbrella's certainty grade certifies*, below).
  [@lang2024crf]
  Kodama is one of the three units and the cohorts overlap, so this upgrades the quality and breadth
  behind Kodama's slope; it is not an independent replication of it. A fourth per-MET figure, 0.83
  (0.78-0.88; Qiu 2021, 7 cohorts), measures a different exposure: «Qui (2021) reported estimates from
  self-reported CRF» (non-exercise estimated CRF), and the abstract's «11%–17% reduction in all-cause
  mortality» pairs it with Laukkanen's 0.89. The three non-eCRF MAs span 11-13% per MET; only
  Laukkanen's title says «Objectively assessed», and Lang's exposure definition also admits
  exercise-prediction equations; Lang flags only Qiu as eCRF, so *exercise-test based* is the wiki's
  reading by elimination.
  Lang reports no curve shape, knee or studied MET range for any slope, so the umbrella confirms a
  per-MET gradient and says nothing about where it flattens.
  [inferred from @lang2024crf]
- **No plateau observed (Mandsager, 122,000-patient cohort):** «Cardiorespiratory fitness is inversely associated
  with long-term mortality with no observed upper limit of benefit» — mortality keeps falling into the
  *elite* band: «elite vs high: adjusted HR, 0.77 (95% CI, 0.63-0.95)».
  [@mandsager2018]
  The elite-vs-high step is carried by subgroups: significant overall, in patients aged 70 or older
  (HR 0.71, 0.52-0.98) and in hypertensives (HR 0.70, 0.50-0.99), but non-significant by sex («By sex, a
  nonstatistically significant improved survival in elite vs high performers was present in both men and
  women»), and «In younger age groups, there was no difference in survival between elite and high
  performers.» *No ceiling* is a finding in a treadmill-referral cohort, not a monotonicity law.
  [@mandsager2018]
  (corrected 2026-10-06: bare *no ceiling* -> no upper limit observed, with the subgroup limits; self-critique)
  (corrected 2026-10-22: the 10-12 MET passage's only citation identified as an activity study, per its title, below)
- **A stated counterpoint, not reconciled here (Ross 2016, AHA scientific statement):** «Most of the
  lower mortality risk associated with a higher CRF occurs by the time a CRF of 10 to 12 METs is
  achieved. CRF values >12 METs are associated with a relatively lower impact on risk of all-cause and
  CVD mortality.» [@ross2016]
  Ross's display is a statement-level summary, with no curve or CI printed beside it. The passage
  carries one citation, ref 290 on its closing sentence, which is Arem 2015, titled as a pooled
  dose-response analysis of leisure time physical activity and mortality
  [@ross2016]. By its title that
  is an activity study rather than a fitness study. Mandsager's figure is a categorical HR
  from one treadmill-referral cohort (elite >=97.7th percentile vs high 75-97.6th).
  Detail and the training-dose reading: [[Measuring and Raising Cardiorespiratory Fitness]].
- **Why the pair is not a contradiction as stated, and not a resolution either.** The two answer
  different contrasts: Mandsager asks whether the top band still differs from the band below it (yes,
  HR 0.77, carried by subgroups); Ross asks where *most* of the gradient has already been realized (by
  \~10-12 METs). A further step beyond 12 METs can be real and still small relative to the low-end steps,
  so both can hold. Ross's 10-12 MET sentence carries no citation of its own and the nearest one (ref 290) is
  by its title an activity study, so that sentence gives no measured-fitness location for the flattening.
  In chunk 01 Ross writes that many studies find «CRF levels >8 to 10 METs are associated with relative protection», and that «Relatively less is gained by increasing CRF between moderately fit and highly fit individuals.», stated alongside its Figure, modified from Blair 1989, a study in which fitness was estimated by maximal treadmill testing [@ross2016]; the references cited for the >8-10 MET sentence include Kodama 2009 and Myers 2002 [@ross2016], by title mostly fitness/exercise-capacity studies [inferred from @ross2016]. Neither source tests the other's contrast, so the wiki asserts neither a plateau nor
  its absence: the held statement is *gradient steepest at the low end, a smaller residual step at the
  top observed in one referral cohort*.

**A divergence worth naming, and it bears on the U/J-artifact prior.** Mandsager notes that «a large
pooled-cohort analysis of physical activity by Arem et al24 suggested a plateau effect of increasing
physical activity volume» and that «Other studies25,26 of self-reported jogging habits have revealed a
dose-response plateau or even harm associated with the most strenuous jogging habits.»
[@mandsager2018]
Mandsager, measuring fitness by exercise test, finds a monotone inverse association with no plateau
over its studied range, and offers three hedged candidate
explanations: «This difference may reflect the objective measurement of physical fitness in the present
study, as opposed to self-reported activity levels»; «It may also reflect non–activity-related
contributors to aerobic fitness, including genetic factors and unmeasured health habits, which may
contribute to improved survival»; and «Lastly, it may, in part, be attributable to differences in the
observed populations» [@mandsager2018]. Only the first supports reading the activity-plateau as partly a self-report
measurement artifact -> [[The U-Shaped Association Artifact]]; the second cuts *against* a causal reading
of CRF's missing plateau. (corrected 2026-10-06: *attributes the discrepancy to* one explanation -> one of
three; self-critique) Kodama's own categorical data
agree on the *shape*: the steepest benefit is at the low end (low-vs-high RR 1.70 >> intermediate-vs-high
1.13, 95% CI 1.04-1.22).
[inferred from @kodama2009; @mandsager2018]

**A candidate role for CRF in the occupational-PA paradox (route-b, UNTESTED) `[2026-08-14, Coenen]`.**
High occupational physical activity is associated with *higher* mortality in men -> [[The Physical Activity Paradox]], and Coenen reports the harm «appears to be stronger in workers with low compared
with high cardiorespiratory fitness» but «could not statistically test this in a sensitivity analysis»
for lack of data [@coenen2018paradox]. So CRF is a *candidate buffer* of the strenuous-work harm — mechanism-consistent (a fitter worker
operates at a lower relative workload), but it clears only the plausibility bar, not positive
effect-modification, so it is held as an open interaction, not a finding.

</div>

<div class="recent-update" data-last-updated="2026-10-29">

## How big — low fitness carries hazards comparable to or greater than smoking and diabetes (Mandsager, one referral cohort)

Mandsager's adjusted all-cause-mortality gradient (low performers' hazard relative to each higher group): «Low vs Elite ... 5.04
(4.10-6.20)», «Low vs High ... 3.90 (3.67-4.14)», «Low vs Above Average ... 2.75» (2.61-2.89), «Low vs
Below Average ... 1.95» (1.86-2.04). Mandsager judges the reduced-CRF hazard «comparable to or greater
than traditional clinical risk factors» in the same model: smoking HR 1.41 (1.36-1.46), diabetes 1.40
(1.34-1.46), coronary artery disease 1.29 (1.24-1.35). The size depends on the contrast chosen: lowest
quartile vs the top 2.3% gives 5.04, but the middle step (below-average vs above-average) gives 1.41
(1.34-1.49), equal to smoking — and a quartile-vs-top-band fitness contrast and a binary smoking
contrast are not the same quantity. (corrected 2026-10-06: *larger ... than* / *outranks* -> the
source's «comparable to or greater than»; self-critique)
Kodama's categorical gradient points the same way: low-vs-high CRF «RR for all-cause mortality of 1.70
(1.51-1.92)», attenuated to 1.48 (1.31-1.68) after trim-and-fill (see *Limits*).
[@mandsager2018]

Lang's umbrella gives three meta-analytic high-vs-low contrasts, all-cause mortality: HR 0.55
(0.50-0.61; Laukkanen 2022, 37 cohorts, n=2,255,441), 0.47 (0.39-0.56; Han 2022, 19 cohorts,
n=2,187,550) and Kodama's 0.59 (0.52-0.66, the reciprocal of the 1.70 above), with I-squared 61.5-96.7%.
Kodama is one of the three, so the 0.47-0.59 range includes Kodama as its upper end rather than
confirming it independently. Mandsager's low-vs-high 3.90 (about 0.26 inverted) is a different contrast
(age-sex percentile bands in one referral cohort, elite excluded from *high*) and is not comparable
with these; the held data do not explain why it is larger.
[inferred from @lang2024crf]
Kodama instead assigned each study's categories to fixed ranges of MAC standardized to a 50-year-old
man: low <7.9, intermediate 7.9-10.8, high >=10.9 METs [@kodama2009].
Lang grades the all-cause high-vs-low outcome VERY LOW certainty. CVD mortality, high vs low: 0.49 (0.42-0.56; Han 2022, 13
cohorts, n=1,952,352), graded MODERATE.
[@lang2024crf]
Lang does not define the *high* and *low* categories of the pooled contrasts (its one definition of
low CRF, «defined based on age, sex and health status», sits in the exercise-prescription discussion)
[searched: tertile / quartile / quintile / cut-point — srcgrep, 1 file, 0 hits each], so each MA's contrast is its own and the 0.47-0.59 spread is partly a definition
spread. No absolute risks or risk differences are given [searched: absolute / risk difference / per
1000 — 0 hits each], so none of these converts to an absolute benefit for a stated baseline.
[inferred from @lang2024crf]

</div>

<div class="recent-update" data-last-updated="2026-10-29">

## Beyond mortality — CRF and incident chronic disease (Lang 2024)

Lang's umbrella adds CRF and *incident* disease to this page. Apparently healthy adults,
fitness measured once at baseline; each row is one MA chosen by Lang (the highest-AMSTAR2 review where
reviews overlapped heavily). HR (95% CI); GRADE is Lang's prognostic grade.

| Outcome | High vs low | Per 1 MET | MA (AMSTAR2), cohorts / n (high vs low; per-MET where it differs) | Lang GRADE |
|---|---|---|---|---|
| Hypertension | 0.63 (0.56-0.70) | 0.92 (0.90-0.94) | Cheng 2022 (moderate), 9 / 1,618,067 | LOW |
| Heart failure | 0.31 (0.19-0.49), I2 96% | 0.82 (0.79-0.84) | Aune 2021 (moderate), 6 / 1,505,114 (per MET 5 / 173,678) | VERY LOW |
| Stroke | 0.58 (0.51-0.66) | 0.97 (0.96-0.98) | Wang 2020 (moderate), 14 / 1,409,340 (per MET 9 / n not reported) | VERY LOW |
| Atrial fibrillation | 0.60 (0.51-0.72) | 0.91 (0.86-0.95) | Xue 2020 (critically low), 7 / 2,168,739 (per MET 7 / 222,124) | VERY LOW |
| Type 2 diabetes | not reported | 0.92 (0.90-0.94), adiposity-adjusted | Tarp 2019 (high), 10 / 1,601,490 | VERY LOW |
| Dementia | 0.36 (0.27-0.49) | not reported | Lee 2021 (critically low), 3 / 11,694 | VERY LOW |
| Depression | 0.61 (0.48-0.78) | not reported | Kandola 2019 (critically low), 3 / 1,145,655 | VERY LOW |
| Chronic kidney disease | 0.58 (0.46-0.73) | not reported | Kunutsor 2023 (moderate), 5 / 32,447 | VERY LOW |

Cause-specific mortality from the same figures: sudden cardiac death 0.58 (0.41-0.81) high vs low and
0.49 (0.33-0.73) per MET (Aune 2020, 2 cohorts, MODERATE); all-cancer mortality 0.57 (0.46-0.71, LOW)
and 0.93 (0.91-0.96) per MET (VERY LOW; Han 2022); lung-cancer mortality 0.53 (0.44-0.64; Lee 2020,
VERY LOW). Per-MET rows were rescaled by Lang where an MA reported another unit (Aune 2021 was per 5
MET), and «The estimates from Tarp (2019) are fully adjusted for adiposity».
[@lang2024crf]
Among incident outcomes, prostate cancer in men is the one null association Lang's text reports: «Among men, there was a null
association between high versus low CRF for prostate cancer (HR=1.15; 95% CI 1.00 to 1.30).» That
estimate sits in Lang's online supplement, which the wiki does not hold.
[@lang2024crf]

**What the table can carry.** Low fitness marks higher risk across most of the cardiometabolic outcome
menu, which is a baseline-risk (route a) input: if activity's relative effect is similar across fitness
levels, a low-fit adult stands to gain more in absolute terms from the activity lever than a fit one. It is not eight effect estimates for training. Every row is a
single-baseline association, almost every row is VERY LOW, three rest on 3-5 cohorts, and the per-MET
slopes assume log-linearity inside each MA's unreported range. The stroke row shows how far the two
contrasts can sit apart (0.58 categorical, 0.97 per MET), which a single coefficient would hide; the two
rest on different cohort subsets (14 vs 9, per-MET n not reported), so the gap need not be curve shape.
[inferred from @lang2024crf]

</div>

<div class="recent-update" data-last-updated="2026-10-29">

## The target — where a given VO2max sits, by age and sex

There are two anchors the wiki holds:

- **A minimal floor (Kodama):** «a minimal CRF of 7.9 METs may be important» (50-year-old man reference);
  age/sex-specific, approximately 9 and 7 METs (at 40), 8 and 6 (at 50), 7 and 5 (at 60) for men and
  women — derived by applying Kodama's *assumed* inputs («we assumed that the MAC is 2 METs lower in
  women than in men and that for each year of aging, it decreased by 0.1 MET based on a prior study») to
  the single 7.9-MET threshold; these are not separate age/sex estimates. (corrected 2026-10-06: offsets
  stated as findings -> assumed inputs; self-critique)
  [@kodama2009]
- **Percentile bands (Mandsager, age x sex MET grid):** low (<25th), below-average (25-49th),
  above-average (50-74th), high (75-97.6th), elite (>=97.7th). E.g. men 50-59: «<8.2 | 8.2-9.9 |
  10.0-11.3 | 11.4-13.9 | >=14.0» METs; women 50-59: «<7.0 | 7.0-8.0 | 8.1-9.9 | 10.0-12.9 | >=13.0».
  [@mandsager2018]

So a VO2max reading converts to METs (/3.5) and drops into a band — the practical *is my fitness good?*
answer the activity-dose evidence cannot give. **Caveat: Mandsager's bands are from a referral population
using *estimated* (treadmill) METs, so a directly-measured VO2max placed against them is approximate.**
The estimate is a work-rate conversion: peak METs were «determined based on treadmill grade and speed at
peak exercise», with no conversion equation named [@mandsager2018]. Why a cycle-test number may
land low on this grid (the cycle-vs-treadmill modality gap, plus a treadmill conversion that would over-read
if it resembles the ACSM steady-state equations; Mandsager names none) is worked through on
[[Measuring and Raising Cardiorespiratory Fitness]].

</div>

<div class="recent-update" data-last-updated="2026-10-29">

## The load-bearing honesty — predictor, not proven cause

**Every primary analysis is observational, and Kodama and Mandsager say so.** Kodama: CRF is «associated with» / a «predictor»,
never «causes», and it «suggest[s]... a clinical trial to determine whether an intervention that improves
CRF by exercise reduces the risk». Mandsager: «the association between CRF and mortality does not prove
causation... The degree to which high CRF preselects patients with lower mortality vs causes a reduction
in mortality is not discernible».
[@kodama2009]

**What the umbrella's certainty grade certifies (type B).** Lang's grades come from «a modified
Grading of Recommendations, Assessment, Development and Evaluations (GRADE) approach», under which
«Observational cohort evidence began at ‘high’ certainty because randomised controlled trials were
deemed not feasible for our research question», and «The certainty of the evidence could be rated down
based on five domains» (risk of bias, imprecision, inconsistency, indirectness, publication bias), with
no upgrade step in the main text (its decision-rules table is an unheld supplement).
[@lang2024crf]
The start-high sentence cites Iorio 2015, *Use of GRADE for assessment of evidence about prognosis:
rating confidence in estimates of event rates in broad categories of patients* (an event-rate
framework, applied here to a prognostic-factor contrast), and the review's stated objective is «predictive associations» (Abstract). That is GRADE's prognostic
use: the question graded is *do fitter people at baseline have fewer events?*, not *does raising
fitness prevent them?* A Lang MODERATE (CVD mortality high vs low, its per-MET rows
LOW-VERY LOW; sudden cardiac death on both contrasts) is therefore confidence in a risk-marker association. It does not compare with a MODERATE on an
intervention question, where the ROBINS-I route also starts high but then by default drops two levels
for confounding and selection bias -> [[Rating Certainty of Evidence]]. No
Lang grade carries certainty about a training effect.

**Lang's two causal registers.** The Methods already frame the design causally: cohort and
case-control meta-analyses «were the focus because of their ability to assess causality for
observational research» (Study design). The Discussion goes further than Kodama or Mandsager: «Given that we
summarised evidence from cohort studies, and randomised controlled trials cannot be used in our
investigation, the results of this study may signal a causal relationship between CRF and future health
outcomes», and the 1-MET step «could be considered as a target for interventions». The limitations pull
back: «The evidence was also limited to studies examining associations between a single measure of CRF
and prospective health outcomes», and «future studies would benefit from repeated longitudinal measures
of CRF to further establish causality».
[@lang2024crf]
Lang's warrant for starting high (RCTs infeasible) is a reason about the starting grade, not evidence
of causation. Lang mentions heritability (Genetics, below) and handles confounding as a risk-of-bias
domain, but does not discuss reverse causation, lag analyses or genetic confounding of the association
itself [searched: reverse caus / Mendelian / genetic confound / upgrad — srcgrep, 1 file, 0 hits each;
*lag* hits only the author name Claggett]. A hedged *may signal* and Mandsager's *does not
prove* are compatible statements, so this is a difference of emphasis, not a tension. The design under
all three is the same single-baseline association, and the wiki reads it at that level; the *target*
step is weighed on [[Measuring and Raising Cardiorespiratory Fitness]] and [[Surrogate Outcomes]].
[inferred from @lang2024crf]

**So the operative reading:** CRF is a *strong prognostic marker* and the trackable *outcome* of the
physical-activity lever -> [[Physical Activity Dose and Mortality]]. Activity is the modifiable exposure:
trials show it raises CRF, and its own mortality evidence is observational with a dose gradient. So
*raise your VO2max to live longer* is an association, not a demonstrated intervention effect. The
thing to change is the activity that raises fitness, and CRF is how you measure whether it worked.


**The caveat is partially — not fully — lifted by within-person change** [@ross2016] (Ross 2016,
[[Measuring and Raising Cardiorespiratory Fitness]]): people who go from unfit to fit between exams have
lower subsequent mortality («44%» in Blair's 9,777 men, relative to men unfit at both exams), and in «The largest randomized trial of exercise
training in HF patients» (HF-ACTION) a larger CRF rise was *associated with* fewer CV events «after
adjustment for potential confounding variables». Within-person change is a stronger design than the
single-baseline prospective comparison here, so it narrows the reverse-causation worry — but it does not close it.
No leg is a randomized CRF contrast: HF-ACTION randomized patients to exercise training, not to a CRF
change, so its CRF-change result is an adjusted within-trial association carrying the same confounding
risk as the cohorts, in heart-failure patients, on a hospitalization-inclusive composite. (corrected
2026-10-06: *the one exercise-training RCT* / *only HF-ACTION is randomized* -> adjusted within-trial
association in HF patients; self-critique) The upgrade is real and bounded: CRF is a trackable
target for the activity lever, and its improvement tracks lower mortality in change-cohorts, but no
held trial shows that raising CRF itself lowers mortality.

**Named gap (G): a newer change cohort is not held.** Lang cites a «large population-based
observational study of over 90 000 participants» (ref 49, Kokkinos 2023, *Changes in
cardiorespiratory fitness and survival in patients with or without cardiovascular disease*) for 1-MET
gains and their mortality association [@lang2024crf].
That within-person change design, larger and newer than the Ross 2016 change cohorts, is what would
firm or bound the partial upgrade above; the wiki holds only Lang's one-line citation of it, so nothing
here rests on its result. — the within-person change estimate

</div>

<div class="recent-update" data-last-updated="2026-10-29">

## Limits

- **Not two independent methods.** A meta-analysis of cohorts (Kodama) and one mega-cohort (Mandsager)
  share the observational, confounded, reverse-causation-prone design — this is corroboration and
  refinement, not an [E-independent] convergence. Kodama's sensitivity analysis: adjusting for smoking
  weakened the CHD/CVD link but *not* the all-cause link (CRF «independently associated with longevity»). [@kodama2009]
  Lang's umbrella does not change the design count: every unit is a cohort MA, the three all-cause MAs
  share cohorts (CCA 10%), and Kodama is one of them. Whether Mandsager's cohort sits inside Laukkanen's
  37 or Han's 19 cohorts cannot be read from Lang, which never names it [searched: Mandsager — 0 hits]. [inferred from @lang2024crf]
- **Mostly men.** In Lang's umbrella «there were 1 858 274 male participants compared with 180 202
  female participants for all-cause mortality», and nearly every outcome was downgraded for that
  indirectness. Lang judges more female data «likely would not impact the magnitude of the observed
  effects», citing its sex-stratified supplementary figures (which the wiki does not hold) «and other
  large cohort studies».
  [@lang2024crf]
  Lang also reports «Only two studies reported results for females separately» and that high vs low
  CRF «was more protective for incident stroke and type 2 diabetes among females compared with males».
  [@lang2024crf]
  On the mortality outcomes, Lang writes «Sex differences were similar between outcomes with larger
  CIs for females because of smaller samples (see online supplemental figure 1).»
  [@lang2024crf]
  So across outcomes the female estimates are less precise and, on Lang's reading, broadly similar;
  for incident stroke and T2D the association looked stronger in women, on two studies and a supplement the wiki does not
  hold. Nothing held shows the association weaker in women.
- **No shape and no absolute risk from the umbrella.** Lang gives per-MET slopes and high-vs-low
  ratios only, with no MET range, knee or risk difference; the shape claims on this page rest on
  Mandsager's and Kodama's categories and Ross's statement. [inferred from @lang2024crf]
- **Reverse causation is the central threat** — subclinical illness lowers fitness; Mandsager's single
  time-point measurement cannot separate *unfit because sick* from *sick because unfit*.
- **Publication bias** in Kodama: Egger p=.002 (all-cause) for the per-MET estimate, where trim-and-fill
  «could not detect hypothetical negative unpublished studies»; the categorical low-vs-high all-cause RR
  attenuates from 1.70 to 1.48 (1.31-1.68) after trim-and-fill. [@kodama2009]
  (corrected 2026-10-06: attenuation was attached to the per-MET estimate -> it applies to the
  categorical RR; self-critique)
- **Transportability of the bands** — Mandsager's referral population is not the general population, and
  its METs are estimated, not measured.
- Coherence, not validity (R1): a strong, graded association — but not proof that acting on it
  changes a given person's life.

</div>

<div class="recent-update" data-last-updated="2026-10-29">

## CRF is a measured CAPACITY, not a behaviour - and what backs the predictor claim (deliverable-critique, 2026-08-01)

Two clarifications the critique asked for. First, CRF as a *consistently replicated* mortality
predictor rests on one design reached through overlapping routes: Kodama's meta-analysis, Mandsager's
large cohort, the Ross AHA statement (which cites Kodama) and Lang's 2024 umbrella (which includes
Kodama as one of its units). The finding is consistent, but every route is a single-baseline cohort
association, and Lang grades it LOW (per MET) to VERY LOW (high vs low) for all-cause mortality,
mainly for indirectness (mostly male-only studies) with every all-cause CI excluding 1, so the grade limits
confidence in the magnitude and its transport to women rather than the direction (lead above; this
page + [[Measuring and Raising Cardiorespiratory Fitness]]). Second, CRF is not the same object as the
total-activity mortality finding, and both are real:

- **CRF / VO2max = a measured fitness CAPACITY** (partly trainable, partly genetic) - measured by an
  exercise test rather than self-report; Mandsager's METs are estimated from treadmill work rate, not
  gas exchange, and nothing held shows that the exercise test itself is why CRF predicts. Lang's eCRF
  row (Qiu 0.83 per MET) and the non-exercise eCRF models Ross reports (Jurca, Nes), whose per-MET
  reductions bracket the exercise-test figures ([[Measuring and Raising Cardiorespiratory Fitness]]),
  both lean weakly against it; neither settles it, since non-exercise eCRF is a different exposure.
  (corrected 2026-10-29: *Qiu cannot settle it / Ross leans against it* -> both lean weakly, neither settles; self-critique)
- **Total physical activity = a BEHAVIOUR** - the HR 0.34 (0.27-0.43) at about 300 cpm of
  device-measured total activity, an observational dose-response figure -> [[Physical Activity Dose and Mortality]].
- **Resistance training = a behaviour whose channel is muscle/strength** (Momma RR 0.85, 0.79-0.93, largely
  independent of aerobic) -> [[Muscle-Strengthening Activity and Mortality]]; RT *counts* as activity but
  raises CRF only modestly - aerobic work is what raises CRF.

So the "two dials" are real distinct channels: aerobic -> CRF, resistance -> muscle. The low-HR
total-activity number and the CRF-predictor claim are different (both held) findings, not one restated.

</div>

## "Per 1-MET" - what it means, and why you cannot compound it to 0.87^5 (deliverable-critique, 2026-08-01)

"Per 1-MET" is per 1 metabolic-equivalent of CRF *capacity* (VO2max; 1 MET = 3.5 ml/kg/min), NOT per
MET-hour of activity - a capacity, not a dose (above). So RR 0.87 per 1-MET is a between-person
association: each 1-MET-fitter stratum has \~13% lower mortality across the studied range. It does **not**
compound to a personal promise (5 METs -> 0.87^5 \~ 0.50) for two reasons:

- **The per-MET effect is not constant - it is front-loaded.** The gradient is *steepest at the low end*
  (low-vs-elite HR \~5; the first step, low vs below-average, HR 1.95, is the largest single adjacent step,
  about 40% of the log-gradient to elite; later steps are smaller but still >1), so a MET gained from a
  sedentary base buys more than a MET added near elite; a single averaged coefficient hides this.
  (corrected 2026-10-06: *low-vs-below-average is most of it* -> largest single step, \~40% of the
  log-gradient; self-critique)
- **It is observational, not a causal individual effect.** Between-person fitness tracks many things
  besides training (baseline health, genetics; reverse causation), so causally raising *your own* VO2max
  by 5 METs does not deliver the between-person gradient -> [[The U-Shaped Association Artifact]] and the
  causal discount in the next section. Read it as: escaping the low-fitness bottom is where the large,
  decision-relevant benefit sits - not as a compoundable multiplier.



<div class="recent-update" data-last-updated="2026-10-29">

## The causal discount - VO2max is part lever, part marker (deliverable-critique, 2026-08-01)

The observational gradient is real and large, but a *healthier people are fitter* tautology inflates it as
a *personal* target - the critique is right, and it is the artifact lens applied to a protective
association -> [[The U-Shaped Association Artifact]]. Three discounts sit between the between-person
association and the effect of raising *your own* fitness:

- **Reverse causation / confounding by health.** Subclinical disease lowers CRF, so low CRF is partly a
  MARKER of ill health rather than its cause -> [[Measuring and Raising Cardiorespiratory Fitness]]. The
  reverse-causation / marker-vs-lever reading is the wiki's; Ross 2016 does not make it
  [searched: reverse caus / subclinical / confound / causal across Ross chunks 01-03]. Ross supplies only
  the premise that disease lowers measured CRF: «Peak/maximal V⋅ o2 values vary widely and are influenced
  by age, sex, genetics, lifestyle/ exercise training habits, and varied disease states.»
  [@ross2016]
  (corrected 2026-10-06: *Ross 2016 flags exactly this marker-vs-lever gap* -> wiki inference; Ross gives
  only the disease-states premise, chunk 01)
- **Genetics.** A large share of the variance in VO2max is heritable (not the same as non-modifiable
  for a given person): «Nearly half of the variance in CRF is attributable to genetics, with the
  remainder modified primarily» (the sentence resumes after a text box) «through habitual physical
  activity», Lang writes, citing the HERITAGE family study rather than testing it.
  [@lang2024crf]
  So the gradient (which includes genetically high-capacity people) overstates trainable upside. Half the
  variance in fitness being genetic does not mean half the mortality gradient is; no held source splits
  the gradient that way.
- **Intervention < observational (expected, not measured).** Given the two discounts above, causally
  raising CRF by training should lower mortality by less than the observational gradient implies; no
  held trial measures the size of that gap.

Net: VO2max is *part lever, part marker*. The decision-relevant claim survives but shrinks - **escaping the
low-fitness bottom by training plausibly helps** (a likely smaller causal benefit, concentrated at the low end, not yet trial-proven on mortality) - it
is NOT the between-person \~5x read as a personal promise.

</div>

## References

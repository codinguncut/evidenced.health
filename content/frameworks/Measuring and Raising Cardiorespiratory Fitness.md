---
type: framework
question: How do I measure my cardiorespiratory fitness, how much exercise raises it, and does raising it actually lower risk?
aliases: [Measuring CRF, Raising CRF, Non-Exercise CRF, eCRF, FRIEND Standards, VO2max Measurement, CRF Vital Sign, Exercise Dose to Increase Fitness, 2-km Walk Test, UKK Walk Test]
authors: [Ross, Robert; Blair, Steven N; Arena, Ross; Kaminsky, Leonard A; Myers, Jonathan; Poon, Eric Tsz-Chun; Gibala, Martin J; Ho, Robin Sze-Tak; O'Donoghue, Grainne; Khalafi, Mousa; Wan, Kewen; Niven, Ailsa G.; Khan, Sadiya S; Matsushita, Kunihiro; Sang, Yingying; SCORE2-Diabetes Working Group and ESC Cardiovascular Risk Collaboration (org); Kokkinos, Peter F.; Zhang, Jiajia; Mandsager, Kyle; Jaber, Wael; Oja, Pekka; Laukkanen, Raija; Pasanen, Matti; Tyry, Tuula; Vuori, Ilkka; Marín-Jiménez, Nuria; Sánchez-Parente, Sandra; Expósito-Carrillo, Pablo; Jiménez-Iglesias, José; Álvarez-Gallardo, Inmaculada C.; Cuenca-García, Magdalena; Castro-Piñero, José]
sources: [Ross - Cardiorespiratory Fitness Clinical Vital Sign 2016, Kokkinos - FRIEND Cycle Ergometry Equation 2018, Oja - 2-km Walking Test Fitness 1991, Marin-Jimenez - 2-km Walk Test Validity Reliability 2023, Mandsager - Cardiorespiratory Fitness and Long-Term Mortality 2018, Poon - HIIT Cardiorespiratory Fitness Umbrella 2024, ODonoghue - Exercise Prescription Body Composition, Khalafi - Exercise Type CRF Postmenopausal, Wan - Exercise Snacks Cardiometabolic, Niven - Affective Responses HIIT, SCORE2-Diabetes 2023, Khan - PREVENT Equations 2024]
cluster: fitness
confidence: medium
relationships:
  related_to:
    - Physical Activity Dose and Mortality
    - Exercise Snacks and Cardiometabolic Health
    - Risk Modifiers - When Extra Information Changes a Risk Estimate
    - Exercise Modality for Body Composition in Obesity
    - Menopause and the Shifting Levers
    - Blood Pressure Lowering and Cardiovascular Events
  extends:
    - Cardiorespiratory Fitness and Mortality
created: 2026-07-28
updated: 2026-10-07
self_critiqued: 2026-10-06
---
<div class="recent-update" data-last-updated="2026-10-06">

[[Cardiorespiratory Fitness and Mortality]] established that CRF **predicts** mortality — but, being
cross-sectional and observational, it could not say CRF is a **lever** rather than a marker. This AHA
scientific statement (Ross 2016) [@ross2016] supplies the three things that make CRF actionable: you can **measure**
it cheaply, you can **raise** it a known amount with a known exercise dose, and **raising it tracks
lower risk**. Together they move CRF from marker toward modifiable target — though, as below, still
short of RCT-proven causality on hard outcomes.

**Evidence-tier note (`confidence: medium`, raised from `low` 2026-08-06).** The **raise-it** leg is now
**gold-backed**: Poon 2024, an umbrella of 24 SRs+MAs (429 primary studies, 12 967 participants), confirms
the exercise→CRF dose from a different body than the AHA and adds the HIIT-vs-MICT head-to-head. The
**measure-it** and **vital-sign** legs still rest on the single AHA scientific statement (Ross 2016 —
consensus tier), and the **causal** leg (raising CRF → lower mortality) stays overwhelmingly
observational. So two of three legs are well-supported and one (causality) is not — `medium`, not `high`.
[inferred from @ross2016; @poon2024]
The measure-it leg now also carries one measured-VO2 cohort for the cycle route (Kokkinos 2018, FRIEND
registry), but it shares three authors with Ross, so it adds data, not independent backing; the grade
stays `medium`. [inferred from @ross2016; @kokkinos2018cycle]
A walk-test route now rests on Oja 1991 (UKK 2-km walk test derivation and cross-validation), a different
group with no shared authors, but a single 1991 validation study (64 people in the derivation); it adds
a route, not a grade change. [inferred from @oja1991walk]
Marín-Jiménez 2023 (n=410, Spain) adds out-of-sample agreement and test-retest data for Oja's equation;
it tests that equation rather than backing it independently, so it bounds the walk route's per-person
error without changing the grade. [inferred from @marinjimenez2023walk]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Measure it — three tiers, and a cheap one that works

- **CPX (cardiopulmonary exercise test)** — direct peak VO2, the gold-standard, most accurate and
  standardized quantification. Needs equipment and trained staff.
- **Maximal exercise test without gas analysis** — CRF estimated from peak treadmill/cycle work rate.
  Note the modality effect: cycle-ergometer values run «10% to 20% lower when using a cycle ergometer
  compared with a treadmill in untrained individuals».
- **Non-exercise estimated CRF (eCRF)** — the cheap route: 13 cross-validated equations predict CRF from
  «readily available clinical variables» (the Jurca/Nes inputs are typically age, sex, BMI, resting heart
  rate and self-reported activity), no exercise test needed.
  The Jurca (2005) and Nes (2011) models **predict long-term mortality comparably to measured CRF**:
  per-1-MET risk reduction «7.4% to 21%» (all-cause) and «8% to 16.9%» (CVD) — bracketing the measured-CRF
  meta-analytic 13%/15% ([[Cardiorespiratory Fitness and Mortality]], Kodama). Hard caveat: eCRF
  «should not be viewed as a replacement for objective assessment of CRF» in at-risk patients.

### Estimating VO2max from a maximal cycle test — the FRIEND equation vs the ACSM equation

**The equation and where it comes from.** Kokkinos 2018 fitted a cycle equation to directly measured
VO2max in the FRIEND registry: 5,100 adults (3,378 men, mean age 35.9; 1,722 women, mean age 47.5;
range 18-87; 4,617 White; 57% overweight or obese), each on a graded maximal cycle test in one of eight
US/European labs, with maximal effort required («a peak respiratory exchange ratio ≥1.0») and people
with CVD, cancer, COPD, CKD or PAD excluded (but «subjects with particular conditions (e.g., diabetes and
obesity), musculoskeletal concerns (e.g., back pain and osteoarthritis), and CVD risk factors» kept in).
Result: «VO2 max in ml O2●kg-1●min-1= 1.74* [Watts*6.12/body
weight (kg)] +3.5», with sex-specific slopes of 1.76 (men) and 1.65 (women).
[@kokkinos2018cycle]

**The ACSM equation over-reads by about 15% on average.** Bias was measured as (predicted - measured) /
measured. «The ACSM equation overestimated VO2 max by over 15% for the entire cohort (average relative
bias: 15.46 % ± 0.13)» — +11.23% in men, +23.77% in women — against +0.51% for the FRIEND equation.
The single FRIEND equation still splits by sex (-0.78% men, +3.04% women); the sex-specific versions
give +0.26% (men) and -1.37% (women). The 30% hold-out sample repeats the pattern (+15.78% vs +0.59%).
All of these are cohort means inside FRIEND.
The authors' explanation: the ACSM equations come from submaximal steady-state work in mostly young
subjects, extrapolated to a maximum where «a steady-state is rarely achieved at high levels of
exercise». [@kokkinos2018cycle]

**What that means for a bike reading.** Since 1.74 x 6.12 ≈ 10.65, the equation is VO2max ≈ 10.65 x
(peak watts / kg) + 3.5 ml·kg-1·min-1, or about 3.04 x W/kg + 1 in METs. A 250 W peak at 80 kg (3.1
W/kg) gives about 36.8 ml·kg-1·min-1, about 10.5 METs. A readout built on the ACSM equation would put the
same ride higher. In the cohort the ACSM equation read above measured VO2max by about 11% in men and 24%
in women on average, and above the single FRIEND equation's mean estimate by about 12% (men) and 18%
(women) (Table 3A means: 46.77 vs 41.94; 28.22 vs 24.01).
[inferred from @kokkinos2018cycle]

**What the paper does not give.**

- **No usable individual error.** Table 3 is headed «Mean ± Standard Deviation», and each mean relative
  bias carries an SD (FRIEND 0.11, ACSM 0.13), which would describe per-person spread. Its scale is
  unclear: the text writes «0.51% ± 0.11%», and an SD of 0.11 percentage points is
  implausibly small for single tests; read as a fraction it would mean roughly 11-13% spread for one
  person, close to Ross's submaximal SEE. No standard error of the estimate or limits of agreement is
  given [searched: standard error of the estimate / limits of agreement / Bland / correlation across
  chunk 01, 0 hits; positive control `relative bias` 13 hits]. So a near-zero average bias does not say
  how far one person's estimate may sit from their measured value.
  [@kokkinos2018cycle]
- **Maximal tests only.** The input is the work rate of a graded test to exhaustion. Watts from a
  submaximal steady session (say 15 min at 75% HRmax) fall outside the data the equation was fitted
  to; that case is the submaximal HR-extrapolation route above, with its own error.
  [inferred from @kokkinos2018cycle]
- **Protocol not specified.** Protocols were lab-specific, and the paper names no ramp rate or stage
  length [searched: ramp / increment / stage / peak work across chunk 01, 0 hits]. Peak watts on a step
  protocol depend on stage length, so a home ramp test may not match the labs' inputs.
  [inferred from @kokkinos2018cycle]
- **Validation inside one registry only.** The authors write: «Additional studies are needed in different populations to
  further explore the portability of the FRIEND equation.» [@kokkinos2018cycle]. The held text is
  the accepted manuscript, which contains internal slips (the hold-out is headed n=1,530, 30% of 5,100,
  but its "All" row reads n=1,758; the Conclusion labels the single equation's -0.78% / +3.04% as the
  sex-specific results). The women in the cohort were older and less fit than the men, so the larger ACSM error in
  women cannot be pinned on sex.
  [inferred from @kokkinos2018cycle]

**Matched against Ross's error figures (NO CELL, NO CLAIM).**

| Parameter | Ross 2016 | Kokkinos 2018 | Same quantity? |
|---|---|---|---|
| Test | submaximal: 2 steady-state work rates, HR line extrapolated to age-predicted HRmax | graded maximal cycle test, measured VO2max | NO |
| Error figure | SEE «±10% to 15%» (spread for one person) | mean relative bias +0.51% FRIEND, +15.46% ACSM (average offset); SD 0.11 / 0.13, scale unclear | NO — spread vs offset; the SD's scale cannot be matched |
| Cycle comparison | cycle 10-20% below treadmill, untrained (modality gap) | cycle equation vs cycle measurement (equation gap) | NO |
| Authors | Ross, Blair, Arena, Kaminsky, Myers, et al. | Kokkinos, Kaminsky, Arena, Zhang, Myers | shared authors — not independent |

[@ross2016]

No row matches, so the two figures do not combine into one error band. Ross bounds the per-person
error of the submaximal route. Inside the FRIEND cohort, Kokkinos removes the ACSM equation's average
+15% offset from the maximal route (the single equation still reads +3% in women), but its per-person
error cannot be read from the paper. The individual error of a maximal cycle test read through the
FRIEND equation is an open gap (type-G): no held source reports it in usable form. —
an agreement study (SEE or limits of agreement) of FRIEND-estimated vs measured cycle VO2max.
[inferred from @ross2016; @kokkinos2018cycle]

**Placing a bike number on Mandsager's bands.** Mandsager's METs were «determined based on treadmill grade
and speed at peak exercise», and the paper names no conversion equation [@mandsager2018]. Two offsets point the
same way: cycle values run below treadmill values in the untrained (Ross), and if Mandsager's
conversion behaves like the steady-state equations Kokkinos criticises, its METs run high. Kokkinos's
own data are cycle. It prints its group's FRIEND treadmill equation and says the ACSM treadmill error is
«>4 times» larger, without giving the sign; the one direction it states, about the ACSM equations generally, is age-bound: «VO2 max will likely be
overestimated by the ACSM equations when applied to older populations» [@kokkinos2018cycle]. A
FRIEND-estimated or measured cycle VO2max placed on that grid would then understate a person's band, by
an amount no held source gives. What would settle it: one cohort with both measured cycle VO2max and
treadmill-estimated METs in the same people.
[inferred from @ross2016; @kokkinos2018cycle; @mandsager2018]

**Where your number sits:** the FRIEND registry «published peak VO2 reference standards for adult men and
women (20–79 years of age)» — the US normative percentiles (the sibling of Mandsager's percentile MET
grid). About «half of the variance in CRF is considered to be attributable to heritable factors», so a
fraction of your position is not trainable.

### Estimating VO2max from a walk — the UKK 2-km walk test

**Where walk tests sit.** Ross lists field tests beside the lab routes. Running tests need near-maximal
effort; «A modification designed to limit the exercise inten- sity, and thus make it more widely
applicable, is the 1-mile walk test.» Their advantage is that «they require minimal resources (measured
course, timing device, and palpated pulse rate) and can be self-administered». For patients who are
«markedly deconditioned» the 6-minute walk test is common, but it «may not necessarily provide an ac-
curate estimation of CRF»; others found it «provided a reasonable estimate of CRF» in outpatients with
stable coronary heart disease, so the evidence on it is mixed. [@ross2016]

**The test and the equations.** Oja 1991 (UKK Institute, Tampere) compared 1, 1.5 and 2 km walks and kept
2 km: most people preferred it, and walk time tracked VO2max at least as well as the shorter distances.
The instruction was «Walk the distance as fast as you can, but do not risk your health»; heart rate is the
mean over the last 30 s. Sex-specific equations, VO2max in ml·kg-1·min-1 (Table 7, BMI model; read from the
page image of the 1991 scan):

- men: 184.9 − 4.65 × time − 0.22 × HR − 0.26 × age − 1.05 × BMI (r² 0.75, SEE 5.1, n = 34)
- women: 116.2 − 2.98 × time − 0.11 × HR − 0.14 × age − 0.39 × BMI (r² 0.73, SEE 3.3, n = 28)

The paper puts the SEE at «12—14% for men and 9% for women» of the mean; the abstract gives «of the order of 9—15% of the
mean». These are in-sample figures from the derivation group.
Heart rate alone «correlated only weakly with VO2max»; it adds precision in combination with time and
age (Table 5). A body-weight version exists too (Table 6; r² 0.66 men, 0.76 women).
[@oja1991walk]
The time unit is printed «msec». Entering the men's group means with time in decimal
minutes (15.2 min, HR 153, age 43, BMI 25.1) gives about 43.0 against 43.1 measured, so minutes is the
working reading. A regression evaluated at its own means returns about the mean by construction, so the
check's force is only that seconds or milliseconds would give impossible values. [inferred from @oja1991walk]

**Derived in whom.** 64 working adults from Tampere, Finland (35 men, 29 women), age 20-65 in four
bands, with only 3 women and 7 men aged 60-65. All were medically screened and «considered fit for brisk
walking». Their VO2max was measured on a treadmill walk to maximal effort: 34.8 ± 6.7 ml·kg-1·min-1 in
women, 43.1 ± 9.9 in men. By heart rate the walk is vigorous (the wiki's label; finishing heart rate averaged about 85% in women and
87% in men of measured HRmax), though on average subjects rated the effort moderate on Borg's 0-10 scale. The authors call the medical screening an «inevitably selected study group».
[@oja1991walk]

**In new groups it read low.** Five separate groups of healthy adults walked twice and had VO2max
measured (Table 8, BMI model). «The estimated mean VO2max was sys- tematically smaller than the measured
value in all cross-valida- tion groups», by about 3% (obese women, BMI 27-40) to 12% (obese men) of
measured ml·kg-1·min-1. The measured-vs-estimated correlation was 0.75-0.79 in obese women, obese men and
moderately active men, 0.55 in moderately active women, and 0.53 in highly active men (measured 57.6
ml·kg-1·min-1). The authors' verdict: valid for «healthy obese and nonobese adult men and women but not
that of very active and fit men». The paper prints no SEE for the cross-validation groups
[searched: standard error / Bland / limits of agreement across chunk 01; Table 8 columns checked on the
page image]. [@oja1991walk]
(The % offsets are arithmetic on the printed group means,.)

**Do one practice walk.** On a repeat walk people went about 9-10 s faster and predicted VO2max rose
1.6-2.2%, a small but significant shift. «This ob- servation implies that for accurate V02 estimation the
first test should be conducted for familiarization purposes.» Test-retest r was 0.98 (men) and 0.94
(women). [@oja1991walk]

**One person's walk estimate: about ±12.6 ml·kg-1·min-1 either way (Marín-Jiménez 2023).** A Cadiz group
tested Oja's equation, unchanged, in 410 Spanish adults aged 18-64, balanced by sex, three age bands
and self-reported activity (active = meeting WHO guidance), against treadmill VO2max measured by gas
analysis (mean 36.1 ml·kg-1·min-1). On average the estimate was close: «The difference between measured and estimated VO2max by Oja's equation was −0.30 ml* kg−1 * min−1 (95% LoA = −12.86 to 12.26, p < 0.001)»;
r 0.78; SEE 5.0 ml·kg-1·min-1 for the line refitted to this sample (measured = 12.24 + 0.66 × estimate).
Finishing heart rate came from a Xiaomi Mi Band 4 wrist band, which the authors describe as «validated
in adults», and no practice walk is described. [@marinjimenez2023walk]
So for 95% of people the estimate sat within about 12.6 ml·kg-1·min-1 above or below their measured
value — about ±35% of the sample mean, or roughly ±3.6 METs. Applied unchanged, the equation's per-person
SD of the difference is about 6.4 ml·kg-1·min-1 (LoA half-width / 1.96), about 18% of the mean, sexes
pooled: above Oja's in-sample 9-14%. The printed SEE of 5.0 (14%) holds only after refitting the line to
this sample. The authors call these limits «narrow» and the test valid; ±35% of the mean is the wiki's
reason to read one walk as a band, not a number.
[inferred from @marinjimenez2023walk]

**Worse agreement in the fit.** The gap grew with VO2max (heteroscedasticity: difference vs mean of measured and estimated, R² 0.117). In active participants the mean difference was
−3.36 (95% LoA −15.31 to 8.59), in non-active −0.19 (−13.45 to 13.06); the authors read it as walking
not stressing a fit person enough «(i.e., underprediction)». [@marinjimenez2023walk]
The direction is not certain: neither text nor plot says which value is subtracted, and
Table 1's means put the estimate slightly *above* measured in both groups (active 40.14 vs 39.67). The
scatter line in Fig 1A, measured = 12.24 + 0.66 × estimate, says that at group level a high walk
estimate tends to sit above measured and a low one below: an estimate of 50 matches about 45 measured on
average, an estimate of 25 about 29. By activity group the active band was not wider (width 23.9 vs
26.5) but shifted; the worse-in-the-fit reading rests on the heteroscedasticity regression. [inferred from @marinjimenez2023walk]

**Oja's average under-read did not recur.** Oja's five groups read 3-12% low on average; here the
group-mean estimate was about 1% above measured (36.58 vs 36.13). The two studies differ in criterion
protocol, country and heart-rate device, so which of these explains the difference cannot be told from
the two papers. [inferred from @oja1991walk; @marinjimenez2023walk]

**Tracking change: two walk estimates are noisy.** Retested about a week later, walk time barely moved
(T2-T1 −1.48 s, 95% LoA −21.07 to 18.10 s on a mean of about 998 s; ICC 0.99), and the mean estimate barely moved
(−0.29; ICC 0.95; Table 3 prints p = 0.206, the Bland-Altman text p = 0.034 for the same difference). But the estimate's 95% LoA was −8.13 to 7.54 ml·kg-1·min-1.
The paper gives no minimal detectable change [searched: minimal detectable / smallest / MDC, 0 hits;
positive control Bland 14 hits]. [@marinjimenez2023walk]
Read as a noise band, in 95% of people two estimates a week apart differed by less than about 8
ml·kg-1·min-1 (about ±22%). Ross's «≈10% improvement in CRF in previously sedentary adults» from meeting
activity guidance (see *Raise it*) is about 3.2 ml·kg-1·min-1 at this study's non-active mean (32.2), well
inside that band, so one before-and-after pair of walks cannot confirm a typical training gain. By Oja's
coefficients a 20-s time difference moves the estimate only about 1-1.8 ml·kg-1·min-1 (BMI or weight
model), so, if the paper applied the equation as printed, most of the retest spread would have to come
from finishing heart rate; the paper reports no heart-rate retest figure. The retest data cover a week's
noise, not whether a change in the estimate follows a change in measured VO2max. [inferred from @marinjimenez2023walk; @oja1991walk; @ross2016]
The authors suggest pacing may explain the walk's weaker reliability, a cause that would itself act partly through finishing heart rate: «starting too fast, so that
the participants are unable to maintain their speed throughout the test; or too slow, increasing their
speed at the end of the test (which may also mean an unexpected incremented heart rate at the end of the
test).» Device noise and uneven pacing were not tested separately.
[@marinjimenez2023walk]

**No better walk equation; the shuttle run reads tighter.** Adding sex, age, activity level and %BF to
time and heart rate raised in-sample R² to 0.70 (SEE 4.4), but the authors concluded «our results did not
improve the prediction equation proposed by Oja et al.» and print no usable new equation. In the same
people the 20-m shuttle run (Léger equation, not printed in the paper) agreed more closely (95% LoA −7.30
to 9.02) and retested more tightly (−1.51 to 1.58); the authors favour it, with the walk «more suitable
for adults who are unable to run». [@marinjimenez2023walk]

**Oja and Marín-Jiménez matched (NO CELL, NO CLAIM).**

| Parameter | Oja 1991 | Marín-Jiménez 2023 | Same quantity? |
|---|---|---|---|
| Equation | derived (sex-specific, BMI and weight models) | Oja's, model variant not stated | YES, variant |
| Criterion | treadmill walk to max, gas analysis | treadmill CPET (walk or run protocol), gas analysis | similar, protocols differ |
| Heart-rate device | Polar telemetric cardiometer (Sport Tester PE 3000) | Xiaomi Mi Band 4 wrist band | NO |
| Per-person spread | SEE 3.3 / 5.1 (9%, 12-14%), fitted in the derivation sample, by sex | SD of difference ≈6.4 (≈18%), equation unchanged; SEE 5.0 (14%) after refitting; sexes pooled | SEE vs SEE: same kind (fitted residual), unmatched samples; SD of difference vs derivation SEE: comparable as prediction error (out-of-sample vs fitted; mean bias removed in both) |
| Group-mean offset, new people | −3% to −12%, five groups | about +1% (Table 1 means) | YES (ratio of group means) |
| Retest shift | +1.6-2.2% estimate, 9-10 s faster (4th vs 5th walk) | −0.29 estimate, −1.48 s (T1 vs T2; no earlier walk described) | mean T2-T1, but NOT the same walk history |
| Retest agreement | r 0.94-0.98 | ICC 0.95; LoA −8.13 to 7.54 | NO (r vs ICC) |
| Authors | Oja, Laukkanen, Pasanen, Tyry, Vuori | Marín-Jiménez, Castro-Piñero, Cuenca-García, et al. | no shared author |

[@oja1991walk]

Marín-Jiménez tests Oja's own equation, so its agreement with Oja is a refinement (it adds the
out-of-sample per-person error and retest band Oja lacked), not independent corroboration. Matched on
the rows that line up: the per-person error of the unchanged equation in a new population is larger than
Oja's in-sample figures, and the average under-read did not recur. The retest shifts are not comparable:
Oja's people had already walked several times; Marín-Jiménez describes no earlier walk, and still shifted only 1.5 s.
[inferred from @oja1991walk; @marinjimenez2023walk]

**Matched against the bike routes (NO CELL, NO CLAIM).**

| Parameter | Ross 2016 | Kokkinos 2018 | Oja 1991 | Same quantity? |
|---|---|---|---|---|
| Test | submaximal, HR extrapolated | maximal cycle test | fast self-paced 2-km walk | NO |
| Spread for one person | SEE «±10% to 15%», a general range | none usable (SD scale unclear) | SEE 9% (women), 12-14% (men), in-sample | Ross vs Oja: same kind (SEE as % of mean), not matched samples; Kokkinos: no cell |
| Average offset, new people | — | +0.59% FRIEND, +15.78% ACSM (30% hold-out) | −3% to −12%, five external groups | NO — mean of per-person ratios vs ratio of group means; internal hold-out vs external groups |
| Authors | Ross, Blair, Arena, Kaminsky, Myers, et al. | Kokkinos, Kaminsky, Arena, Zhang, Myers | Oja, Laukkanen, Pasanen, Tyry, Vuori | Oja shares no author with either |

[@ross2016]

Only the spread row lines up. The walk test's in-sample SEE (9% women, 12-14% men) is about the ±10-15%
Ross gives for submaximal tests, so on spread a fast walk is the same class of estimate as a submaximal heart-rate test, not
a sharper one. Its out-of-sample SEE is not reported, and Oja's own data suggest new-group error is larger: the
measured-vs-estimated correlation fell from about 0.86 in the derivation group (r² 0.73-0.75) to
0.53-0.79 in the five new groups. This is not type-E corroboration: Oja makes the same comparison itself (its results «compared
favourably» with submaximal tests), and Ross's figure is a general range, not an independent
measurement of this test. The offsets cannot be pooled across the two papers. Within Oja, the group-mean
estimate ran low in all five groups, by up to about 12% in obese men; the paper gives no per-person
direction or spread.
[inferred from @ross2016; @kokkinos2018cycle; @oja1991walk]

**Who it suits, on this evidence.** Healthy adults who can walk 2 km briskly and have no lab or bike. The
external check covered ages 20-65 only in the obese groups (BMI 27-40); the non-obese groups were 35-45,
and the derivation had few over-60s. Obese men, though called «reasonable» by the authors, carried the
largest average under-read (12%). Outside the data: over-65s, people with
heart or lung disease, people on heart-rate-modulating drugs (medication was an exclusion at the
treadmill stage), and very fit men, where the paper says it fails.
[inferred from @oja1991walk]
Marín-Jiménez extends the tested range to 18-64 in a second country, both sexes and non-active as well
as active adults; over-65s remain untested in both papers. On Mandsager's treadmill-based MET bands, the
average offset of a walk estimate is not settled (low in Oja's groups, near zero in Marín-Jiménez's),
and per person the 95% band is about ±3.6 METs, so a single walk can place someone in the wrong band.
[inferred from @oja1991walk; @marinjimenez2023walk]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Raise it — the exercise dose → CRF response

Meeting consensus physical-activity recommendations buys «≈10% improvement in CRF in previously
sedentary adults». Both **amount and intensity** move it, but not equally: «Increases in CRF appear more
responsive to increases in intensity than increases in session duration or frequency».

The actionable rule is **baseline-stratified intensity** — the fitter you already are, the harder you
must work to gain:

| Baseline CRF | Intensity needed for a clinically meaningful (≥1 MET) gain |
|---|---|
| < 10 METs | ≈50% of heart-rate reserve / VO2 reserve is adequate |
| 10–14 METs | 65–85% of HR reserve / VO2R |
| > 14 METs | > 85% — and at >=13 METs (Ross's own, slightly lower cutoff for this separate point) the goal is «more related to improving performance than health» |

Worked magnitudes: at fixed 50% intensity — **50% of peak VO2**, a different scale from the HRR / VO2R
reserve percentages in the table above — 30 min×5/wk gave a 9.4% CRF rise vs 15.6% for 60 min; raising
intensity to 75% of peak VO2 gave 19.6% (Ross 2015, as reported in Ross's narrative). The same trial's
row in Ross's Table 7 lists **7.7%** (LALI) and **14.8%** (HALI) for the two 50% arms, with 19.6% (HAHI)
matching; the source does not reconcile the narrative and table figures, so both are kept here.
(corrected 2026-10-06: added the peak-VO2 scale and the Table 7 7.7%/14.8% figures beside the narrative
9.4%/15.6%; Ross chunk 02) STRRIDE showed a clean dose gradient — 6% (low amount / moderate
intensity), 11% (low / high), 18% (high / high). Interval training beats equal-energy continuous training:
in one trial near-maximal intervals gave «20.6%» vs «9.4%» for moderate continuous. Older adults gain too
(a 41-trial meta-analysis: +16.3%).


[@ross2016]

</div>

<div class="recent-update" data-last-updated="2026-10-05">

## Holding the effort target as you get fitter

**What the target is measured against.** Heart-rate reserve (HRR) is maximum heart rate minus resting
heart rate; a target of *x% of HRR* is resting HR plus x% of that span (the Karvonen form). Ross uses
the term (abbreviation list: «HRR, heart rate reserve») but does not define it in the text read.
[inferred from @ross2016]
[searched: heart rate reserve / HR reserve across Ross chunks 01-03]

**Training raises fitness without raising maximum heart rate.** Ross: «Because virtually every exercise
training study, regardless of length or intensity, has reported no change or even a slight decline in HR
max, increases in CRF occur primarily via increases in stroke volume, arteriovenous O2 difference, or
both.» [@ross2016]

- **Consequence — a relative target self-progresses.** If HRmax stays put while stroke volume and O2
  extraction rise, the same heart rate is reached only at a higher absolute work rate (more watts, faster
  pace) as fitness improves. A target fixed as a % of one's own HRR therefore asks for more absolute work
  over time, raising the workload without a separate progression rule.
  [inferred from @ross2016]
- **What would confirm or refute it:** a trial logging work rate at a fixed %HRR across a training block
  (absolute work at the target HR should rise in step with measured VO2peak), or showing that a fall in
  resting HR or HR drift erodes the absolute load the % target implies. No held source reports this.
  [inferred from @ross2016]

**Why the target is stratified by baseline, and when a step-up is due.** Ross stratified its dose review
because of «the significant role baseline CRF plays in the absolute intensity of the exercise regimen»
[@ross2016] — the review bands were
«(1) low (<9 METs); (2) intermediate (9–14 METs); and (3) high (≥15 METs)», which differ slightly from the
recommendation bands in the table above (<10 / 10-14 / >14 METs, «The higher the baseline CRF, the more
vigorous the intensity needed to produce a clinically significant increase in CRF»).
[@ross2016]

- **Where the relative target must be raised deliberately:** the self-progression above holds within a
  band. The point where a person needs to raise the *relative* effort (from ≈50% HRR toward 65-85%) is
  when they leave the <10 MET band and still want further CRF gains.
  [inferred from @ross2016]
- **On the mortality evidence that step-up is optional, not required.** Ross: «Most of the lower
  mortality risk associated with a higher CRF occurs by the time a CRF of 10 to 12 METs is achieved. CRF
  values >12 METs are associated with a relatively lower impact on risk of all-cause and CVD mortality.»
  [@ross2016] So staying at ≈50% HRR
  once past \~10 METs is defensible on mortality grounds rather than a failure; pushing to higher bands
  buys diminishing mortality return. Whether ≈50% HRR *holds* CRF at that level, and what the step-up
  does for daily function, no held source reports (see also [[Physical Activity Dose and Mortality]]).
  [inferred from @ross2016]

**Heart-rate targets on heart-rate-modulating drugs.** Of the submaximal test that estimates CRF from the
work-rate/HR relation, Ross states: «This method cannot be applied with patients using HR-modulating
medications (eg, β-blockers).»
[@ross2016] — said of CRF *estimation*, not of training prescription.

- **Extension to training targets:** by the same mechanism (the drug blunts the HR response to work), a
  %HRR training target is equally unreliable for someone on a β-blocker, and effort is then gauged by
  perceived exertion (e.g. a rating-of-perceived-exertion scale) instead.
  [inferred from @ross2016]

**Gaps (G).** Two questions bear directly on how the target is set and held; the held fabric answers
neither. This is a gap in what the wiki holds, not a finding about the literature: no literature search
was run for either question, so it is not known whether head-to-head trials exist, and the absence here
is not a null result. No direction is asserted.

- **(a) Measured vs age-estimated HRmax.** No held source shows whether anchoring %HRR on a measured
  (exercise-test) HRmax rather than an age-predicted one changes training outcomes at moderate intensity.
  Ross uses «age-predicted maximal HR» only inside the submaximal CRF-estimation method (chunk 01).
  [inferred from @ross2016]
- **(b) Progressing vs fixed relative intensity.** No held trial compares aerobic training that raises
  relative intensity over time against training held at a fixed %HRR, nor shows whether CRF plateaus on
  a fixed relative dose. Held trials include progressive protocols — HERITAGE trained at «55% to 75% of
  maximal HR» with «session duration and intensity progressively increased approximately every 2 weeks»
  [@ross2016] — but as a single
  arm, not a contrast.

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## HIIT vs continuous training — the gold umbrella (Poon 2024)

Ross's single-trial interval signal (20.6% vs 9.4% above) is now backed by an umbrella review — «all
reviews consistently demonstrated that HIIT significantly improves CRF» vs non-exercise control («SMD...
0.28 to 4.31... WMD... 3.25 to 5.5 mL/kg/min»), and head-to-head «the majority of reviews indicated that
HIIT leads to similar or greater im­provements in CRF» than moderate-intensity continuous training (MICT)
(«SMD... 0.18 to 0.99... WMD... 0.52 to 3.76 mL/kg/min»). [@poon2024]

**Read the head-to-head edge as real but modest, and smallest where fitness is already normal.** The
HIIT-over-MICT SMD is 0.04–0.64 in healthy adults and 0.26–0.99 in overweight/obesity, and **sprint
interval training vs MICT is essentially a wash (SMD 0.04–0.18)** — so the practical case for HIIT is
**time-efficiency** (comparable or slightly greater CRF for less total exercise time), not a large fitness
advantage. Safety is not a differentiator: «The safety concerns associated with HIIT do not appear to be
significantly greater than those associated with MICT» (compliance generally ≥80%; pre-screen inactive
at-risk individuals). [@poon2024]

**This refines, it does not contradict, the single-trial number** (parameter-table check): Ross's «20.6%
vs 9.4%» is a *within-arm percent change* in one trial; Poon's «0.18 to 0.99» is a *between-group
standardized difference* pooled across reviews — different quantities, so the umbrella upgrades the
evidence grade and *bounds* the effect (modest between-modality gap), rather than clashing with it.
**Certainty caveat:** «Most of the systematic reviews received moderate-­to-­critically low AMSTAR-­2
scores», so the direction is robust but the constituent reviews are low-certainty. Poon is an umbrella of
HIIT→CRF *intervention* reviews — a different question from the held CRF→mortality cohorts (Kodama /
Mandsager), so it is a type-F upgrade of the raise-it leg, **not** independent backing for the causal leg
below. [@poon2024]

For the same head-to-head *inside the type-2-diabetes stratum*, see
[[HIIT vs Continuous Training for Type 2 Diabetes]]: a gold MA (Liu 2019, 13 RCTs) finds HIIT beats MICT
on VO2peak at moderate certainty (+3.37 ml/kg/min) — concurring with Poon's direction, though on likely-
overlapping trials (not independent type-E) — while its HbA1c/weight edge stays low-certainty.

**Brief vigorous *exercise snacks* may raise CRF (very low certainty).** A gold SR+MA (Wan 2025, 14
trials, 483 adults) of short bouts spread across the day (eight trials used bouts of no more than 2 min,
six used longer bouts) found snacks significantly improved VO2max (SMD +1.43, 0.61 to 2.25, but VERY LOW
certainty and significant only after excluding one high-RoB study; the primary analysis was null) and
peak power output (SMD +0.68, 0.00 to 1.36). The PPO gain was confined to physically inactive adults and
to bouts longer than 2 min; for VO2max the larger effect in the inactive showed no significant
between-group difference. Body composition did not respond, and there are no hard-outcome data — full
appraisal and the sufficiency-vs-floor reading: [[Exercise Snacks and Cardiometabolic Health]].
[@wan2025]
Reading this as a type-F push of Ross's *«Increases in CRF appear more responsive to increases in
intensity than ... duration or frequency»* principle is the wiki's link — Wan does not test intensity
against duration, and the PPO >2-min condition cuts against *ultra-short bouts move CRF*.
(corrected 2026-10-06: headline *distributed 1-2 min snacks still raise CRF* / *largest in the
inactive* -> very-low-certainty, PPO-only subgroup limits; type-F link retagged INFERRED; self-critique)

</div>

<div class="recent-update" data-last-updated="2026-10-04">

## In the obesity stratum, the modality gains don't separate — and a measurement trap

The dose numbers above come from mostly-fit or mixed populations. Inside the **obesity stratum
specifically**, a gold NMA (O'Donoghue 2021, 45 RCTs, 3566 adults with BMI >=30) ranked all six
modalities for CRF and found a sobering result: **no modality reached statistical significance.**
«Although all interventions resulted in an increase in absolute VO2max, there were no statistically
significant improvements in fitness found; in accordance with the P score, COM-HI was the intervention
... most likely to increase VO2max.» [@odonoghue2020] Absolute VO2max did rise 7-15% (COM-HI 15% > AE-V 12.9% > AE-M 9.2% > R-HI 7.4% > R-LM 7.2%),
but the between-modality P-score ranking (COM-HI .73 on top) **orders non-significant differences** — so
it establishes no fitness-modality order. This tempers the *intensity moves CRF most* rule for this
stratum: over mostly-short interventions (\~20 weeks, 3x45 min/week) in adults with obesity, the CRF gains
were real in direction but did not clear significance, and the modalities did not cleanly separate. The
full body-composition + CRF ranking lives on [[Exercise Modality for Body Composition in Obesity]].

**The measurement trap O'Donoghue flags:** report CRF in **absolute** (L/min), not relative
(ml/kg/min), terms in people losing weight. «Reporting a change in relative ... as opposed to absolute
VO2max ... can result in overestimated level of fitness as any loss in body mass auto­matically increases
fitness expressed in relative terms, often without the desired underlying metabolic changes.»
[@odonoghue2020] A relative-VO2max improvement
in a weight-loss study can be arithmetic (smaller denominator), not a true cardiorespiratory gain — a
specify-the-measurement-method point for any CRF target in this stratum.

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## In post-menopausal women, every mode raises CRF — and the modality choice is low-stakes

A second large gold MA supplies the parallel modality question for a different, prevalent stratum:
Khalafi 2023 (129 RCTs / 7,141 post-menopausal women overall, age \~53-90, BMI 22-35; the CRF analysis
pools 35 arms from 25 studies). Exercise raised CRF with a **large** overall effect — «Based on the
results from 35 intervention arms from 25 studies, exercise training increased CRF (SMD: 1.15; 95% CI:
0.87, 1.42; p = 0.001)» (corrected 2026-10-06: CRF evidence base 129 -> 25 studies; self-critique)
— and every mode worked: aerobic SMD 1.21, resistance 1.26, combined 1.47, water-based 0.83 (by-type
p-values all significant). [@khalafi2023] The author
framing is explicitly against the ACSM specificity default: «the ACSM recommended combination of aerobic
and resistance exercise programs ... Nevertheless, our findings revealed that any mode of exercise,
including aerobic, resistance, or combined training is effective in improving the CRF in post-menopausal
women.» [@khalafi2023]

**Read the by-type ranking as a soft preference, not a result.** The subgroup SMDs are reported with
p-values but **no confidence intervals**, so combined's higher point estimate (1.47) cannot be separated
from aerobic (1.21) or resistance (1.26) — all land in the "large" band. The source itself hedges it as
«potential greater advantages of combined training.» [@khalafi2023] And the **large overall SMD is likely inflated**: I2 = 76.5% (high
heterogeneity) and Egger's test flagged publication bias (p = 0.005, though funnel-plot visual
inspection did not). Direction robust; magnitude suspect.

**Two measurement limits sit on these numbers.** (1) The effects are in SD units (SMD), not ml/kg/min —
the authors «were not able to report units of change that were easily interpretable for assessment of
clinical meaning» because they pooled across measurement methods. [@khalafi2023] So the absolute VO2 magnitude is **not derivable** from this MA (the
underivable-optimum discipline — state the interval, not a borrowed absolute). (2) Interval/HIIT training
has **no CRF estimate** here (a prespecified subgroup with too few arms to run) — a gap in the
postmenopausal evidence, contrast the HIIT-vs-MICT edge held above for mixed populations.

### The cross-stratum synthesis — modality separation for CRF is weak in BOTH strata

Before the claim, the matched-parameter table (NO CELL NO CLAIM):

| Parameter | O'Donoghue 2021 (obesity) | Khalafi 2023 (post-menopausal) | Same quantity? |
|---|---|---|---|
| Population | adults BMI>=30, 76% female | post-menopausal women, BMI 22-35 | NO — different stratum |
| CRF analysis | NMA, P-score rank of absolute VO2max | pairwise SMD vs non-exercise control | NO — rank vs effect size |
| vs-control result | no modality reached significance | all types significant, large SMDs | NO — design differs (CRF study counts similar, 21 vs 25) |
| Top modality for CRF | COM-HI (combined), P .73 | combined, SMD 1.47 (point est.) | YES — same direction |
| Inter-modality separation | none significant | no subgroup CIs -> unconfirmed | YES — not robustly separated |

Two sources with independent authorship and no mutual citation (different populations and designs;
primary-trial overlap unverified — Khalafi's included-study list is supplementary and not held, and RCTs
in post-menopausal women with obesity could qualify for both) **converge on the decision even while
their magnitudes diverge** — a convergence on *absence of demonstrated separation*, which weakly
discriminates *modality truly doesn't matter* from *both pools were underpowered for between-modality
contrasts*. (corrected 2026-10-06: `[E-independent]` -> overlap unverified; self-critique) combined sits at or near the top for CRF in both, and
in **neither** do the between-modality CRF differences separate robustly (obesity: nothing significant;
post-menopausal: large effects but no CIs to order them). The magnitude gap — O'Donoghue's nulls vs
Khalafi's large SMDs — is explained by stratum, design (the NMA's indirect comparisons of absolute VO2
vs Khalafi's direct-vs-control SMDs), and Khalafi's publication-bias inflation — not by study count,
which is similar for the CRF analyses (Khalafi 25 studies; O'Donoghue's CRF NMA «Twenty-one studies with
1689 participants» of its 45 RCTs [@odonoghue2020];
corrected 2026-10-06: struck *power (45 vs 129 RCTs)*, then matched CRF-analysis to CRF-analysis
counts; self-critique); it is a **distinction, not a contradiction**
(the "same quantity?" column fails on magnitude, holds on the decision). The beyond-summary payoff:
**for CRF, modality choice is low-stakes across both strata — pick for adherence and preference; combined
is a defensible default, and any aerobic-containing mode substantially works.** Resistance-only is the
one weak choice, and only for the body-composition outcomes (O'Donoghue), not for CRF.

[inferred from @odonoghue2020; @khalafi2023]

**CRF here is the surrogate, and the surrogate->outcome link is cited, not measured.** Khalafi motivates
the work by «poor CRF is considered an important predictor of all-cause mortality in women»
[@khalafi2023] but measures only exercise->CRF. The
CRF->mortality leg is the separately-held cohort/MA evidence ([[Cardiorespiratory Fitness and Mortality]], Kodama) — chaining exercise->CRF->mortality is inference, not this MA's finding. The
strength findings land on [[Menopause and the Shifting Levers]] (resistance is the only upper-body lever).


[@ross2016]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Does raising it help? — the modifiability evidence

This is the partial answer to the nucleus's predictor-not-lever caveat. **Within-person CRF change** (a
stronger design than cross-sectional comparison) tracks risk:

- Men who went from **unfit to fit** between two exams had «a reduction in mortality risk of 44%» vs
  those who stayed unfit (Blair).
- Maintaining or improving CRF gave «27% and 42% reduced risks for CVD and all-cause mortality» (Lee);
  «Every 1-MET increase in CRF was associated with a 19% lower risk of CVD mortality».
- In «The largest randomized trial of exercise training in HF patients» (HF-ACTION), «every 6% increase in
  CRF (measured peak V⋅ o2) over 3 months was associated with a 4% lower risk of cardiovascular mortality
  or cardiovascular hospitalization» «after adjustment for potential confounding variables». Patients were
  randomized to exercise training, not to a CRF change, so this CRF-change result is an adjusted
  within-trial association carrying the same confounding risk as the cohorts, in heart-failure patients —
  not a randomized CRF contrast. (corrected 2026-10-06: *the one randomized-trial signal* -> adjusted
  within-trial association; self-critique)

**Honest boundary — the upgrade is partial, not complete.** The evidence is still overwhelmingly
observational; within-person change narrows the reverse-causation worry but does not close it (people
whose health is failing get less fit), and no leg is a randomized CRF contrast — HF-ACTION's CRF-change
result is an adjusted within-trial association in heart-failure patients, on a composite that includes
hospitalization. The statement's own framing is calibrated: CRF «is a variable that is responsive to
therapy», and improvement «should be communicated to patients» — a modifiable *target*, not a proven
*cause* of longer life. The **proven lever underneath is physical activity**
([[Physical Activity Dose and Mortality]]); CRF is best read as the **trackable, measurable outcome** of
adherence to that lever.


[@ross2016]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## CRF sharpens a risk estimate — but only if it reclassifies

Adding CRF to a traditional risk model (age, BMI, SBP, diabetes, cholesterol, smoking) improves
**reclassification**, not just correlation: net reclassification improvement (NRI) for CVD mortality of
«12.1%» at 10 years in men (Gupta), «27.2%» / «21.0%» in men/women (Stamatakis), «42.8%» in a
clinically-referred cohort (Myers). Low CRF flags higher *long-term* risk within a risk stratum even when
short-term risk looks equal — e.g. stage-II hypertension with low vs high CRF carried «18.4% versus 10.1%»
30-year CVD-death risk despite a near-identical «2.3% versus 1.2 %» at 10 years.

**The discipline this page must not drop** (it is the [[Risk Modifiers - When Extra Information Changes a Risk Estimate]]
rule): a strong inverse association is *not* the same as improved prediction. The statement says so —
«it does not necessarily mean that CRF directly enhances CVD mortality risk prediction»; «For CRF to truly
be a novel risk marker, it must improve risk prediction beyond traditional markers.» The NRI evidence is
what earns CRF the reclassification claim; the association alone would not. **CRF was nonetheless
excluded from the 2013 ACC/AHA risk calculator** («it was excluded from the risk calcula- tor») — a gap
the statement argues to close.
[@ross2016] Ross's 2016 statement
cannot name the later models, but their own papers show the gap persists. SCORE2: «Original SCORE2
algorithms: Predictors: age, sex, smoking, diabetes, SBP, total and HDL cholesterol» and its diabetes
version «Added predictors: age at diabetes diagnosis, HbA1c and eGFR» [@score2diabetes2023]. PREVENT: «Predictors included traditional risk factors (smoking status, systolic blood
pressure, cholesterol, anti-hypertensive or statin use, diabetes) and estimated glomerular filtration rate
[eGFR].» [@khan2024]; its optional add-ons are UACR, HbA1c and a
social-deprivation index (chunk 01 methods; chunk 02 Table 4), and BMI enters only the heart-failure-specific
and death models (chunk 01 methods). Neither includes CRF or any physical-activity measure
[searched: fitness/cardiorespiratory/physical activity/exercise across both sources' chunks, 0 hits;
positive control smoking/systolic/eGFR/HbA1c fires in both]. This shows omission, not that adding CRF
would improve these models' discrimination; that needs the NRI-type evidence above, model by model
. (corrected 2026-10-06: *absent from every current risk model (SCORE2, Framingham,
PREVENT)* under a Ross tag -> the 2013 calculator exclusion Ross supports; self-critique; SCORE2/PREVENT
omission now verified against their own sources)


[@ross2016]

</div>

## The guidance move, and how to read it

The statement's thesis is that CRF should be «an accepted "vital sign"» — the "only major risk factor
not routinely assessed in clinical practice". This is a **guidance-layer position** from a body
(AHA) advocating within its own domain: the 2013 ACC/AHA risk calculator had *excluded* CRF because the
reclassification evidence was then judged inconclusive, and this statement marshals the NRI evidence to
argue the exclusion should be revisited. Read it as a well-supported argument, not a neutral guideline —
symmetric standards apply to a body making the case for its own risk factor.


[@ross2016]
<div class="recent-update" data-last-updated="2026-10-06">

## Decision relevance

- **You can know your CRF for free.** An eCRF equation from routine clinical numbers gives a first
  estimate good enough to identify low fitness; a CPX is only needed for a precise or clinical number.
  Put it on the FRIEND percentiles to see where you sit.
- **From a bike: a test to exhaustion, read through the FRIEND equation.** Peak watts from a graded
  maximal test, converted with the FRIEND equation, avoid the ACSM equation's average +15% over-read (a
  cohort mean in the FRIEND registry; the single equation still reads about +3% in women); the per-person
  error cannot be read from the paper, so treat the number as approximate. For tracking change, repeating the
  same bike and protocol is likely more informative than the absolute value (constant errors cancel
  within a person; no held source tests this).
  [inferred from @kokkinos2018cycle]
- **Without a bike or lab: a timed 2-km walk.** For a healthy adult aged 20-65, a fast 2-km walk with a
  heart-rate strap, read through the sex-specific UKK equation, gives an estimate whose in-sample SEE (9% women, 12-14% men) is about the ±10-15% Ross
  gives for submaximal tests. Out of sample, in 410 adults aged 18-64, 95% of estimates fell within
  about ±12.6 ml·kg-1·min-1 (±35%, about ±3.6 METs) of measured VO2max, with agreement worse at higher
  VO2max; so read it as a band, not a number. Its group mean ran low by 3-12% in Oja's five groups but
  not in that sample. Do a practice walk first (Oja) and pace evenly (the authors suggest uneven pacing may explain
  the walk's weaker reliability); Oja used telemetry heart rate, and whether a wrist band adds noise is
  untested.
  **For tracking change, two walk estimates a week apart differed by up to about ±8
  ml·kg-1·min-1 in 95% of people**, more than the \~10% gain a previously sedentary adult can expect, so
  one before-and-after pair cannot confirm it; walk time itself repeated within about ±20 s. If you can
  run, the 20-m shuttle run read tighter on both counts.
  [inferred from @oja1991walk; @marinjimenez2023walk]
- **To raise it: intensity moves it more than duration**, and the low-fit gain most from modest activity
  (the biggest-bang-at-the-low-end rule, consistent across the fitness sources). Expect \~10% from meeting
  activity guidelines, more from adding intensity or intervals.
- **Track CRF as the measurable proxy for the physical-activity lever**, not as a separate intervention —
  the activity is what has the causal warrant; CRF is how you measure whether it is working.
- **A low CRF legitimately up-classifies risk** within a stratum (a route-(a)/modifier use), and does so
  on evidence that meets the reclassification bar — but it was excluded from the 2013 ACC/AHA calculator
  (whether later models include it is unverified, see above), so it informs judgement rather than a
  computed score.
- **HIIT vs walking for the drifting-median adult — the VO2max edge is real but small at the outcome
  level (Challenge #11).** Intervals raise VO2max more than continuous work (20.6% vs 9.4% above), so
  HIIT *wins the surrogate*. But (a) CRF is a predictor, and the *mortality* dose-response front-loads
  and flattens (most benefit by \~24 min/day MVPA, [[Physical Activity Dose and Mortality]]), so the
  extra VO2max buys little extra outcome for an under-active person; (b) the advantage is
  outcome-specific — for the MASLD limb, [[Fatty Liver MASLD and Weight Loss]] holds HIIT and
  moderate-intensity equally effective; and (c) adherence is part of the effect, so a sustained
  walking habit can beat an abandoned HIIT plan. **Poon's gold umbrella now bounds the surrogate edge
  itself:** HIIT-over-MICT is SMD 0.04–0.64 in healthy adults and SIT-vs-MICT is a wash (0.04–0.18), so
  even at the surrogate level the interval advantage is modest for an already-normal-fitness adult — the
  case for HIIT is time-efficiency, not a large fitness win. **On the claimed cons: compensation is now held and cuts against the intensity-specific version** —
  [[Exercise Energy Compensation]] (Riou 2015) finds compensation real (\~18%, up to \~84% long-term) but
  **intensity is not a significant predictor**, so HIIT does not compensate *more* than moderate work;
  the NEAT-downregulation worry is not HIIT-specific. **The affective substrate for the adherence worry
  is now partly held** — [[Affective Response to High-Intensity Interval Exercise]] (Niven 2020, gold MA)
  finds higher-intensity exercise is felt as *less pleasant in-task* than moderate continuous work
  (Feeling-Scale MD \~-1.1 during and post), though affect at the end of exercise did not differ (MD
  -0.72, 95% CI -1.64 to 0.20) and post-exercise *enjoyment* favoured HIIE — «compared to MICE, HIIE is
  experienced less positively but post- exercise is reported to be more enjoyable», an inconsistency Niven
  flags as unresolved for behaviour (corrected 2026-10-06: *no post-exercise rebound to rescue it* ->
  enjoyment favoured HIIE; self-critique); and the aversion
  tracks *intensity* (HIIE ≈ vigorous continuous), not the interval format, and the step from worse
  feeling to worse *behaviour* is explicitly unestablished for HIIE, so **worse-HIIT-adherence-than-
  walking remains unheld as an endpoint** [@niven2020]. Net:
  the case against HIIT for this stratum rests on the flattening mortality curve + adherence, not a
  compensation penalty. Net for this stratum: *doing regular
  activity at all* is the lever; HIIT-vs-walking is a second-order, adherence-bound refinement.


[inferred from @ross2016]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Limits

- **Expert-consensus scientific statement, not a systematic review or GRADE appraisal** — «not intended
  to be a comprehensive review». Its evidence base is overwhelmingly observational.
- **Causality on hard outcomes is inferred, not established** (HF-ACTION's CRF-change result is an
  adjusted within-trial association, not a randomized contrast; corrected 2026-10-06: was *HF-ACTION
  aside*; self-critique) — the modifiability
  finding upgrades but does not resolve the nucleus's predictor caveat.
- **\~50% of CRF is heritable** — the trainable fraction is real but bounded.
- One body (AHA), 2016; whether other bodies endorse the vital-sign framing is unprobed.


[inferred from @ross2016]

</div>

## References

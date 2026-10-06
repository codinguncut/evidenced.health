---
type: framework
question: How strongly does cardiorespiratory fitness (VO2max) predict mortality, is there a target, and does raising it help?
aliases: [Cardiorespiratory Fitness, CRF, VO2max, VO2 max, Fitness, METs, Aerobic Capacity, Fitness and Mortality, VO2max Target]
authors: [Kodama, Satoru; Mandsager, Kyle; Jaber, Wael; Ross, Robert; Coenen, Pieter]
sources: [Kodama - Cardiorespiratory Fitness and Mortality 2009, Mandsager - Cardiorespiratory Fitness and Long-Term Mortality 2018, Ross - Cardiorespiratory Fitness Clinical Vital Sign 2016, Coenen - Occupational Physical Activity Mortality Meta-Analysis 2018]
cluster: fitness
nucleus: true
confidence: medium
created: 2026-07-28
updated: 2026-10-06
self_critiqued: 2026-10-06
relationships:
  related_to:
    - Muscle-Strengthening Activity and Mortality
    - Physical Activity Dose and Mortality
    - The U-Shaped Association Artifact
    - The Physical Activity Paradox
    - Baseline Risk and the Relative-Absolute Split
    - Measuring and Raising Cardiorespiratory Fitness
---

Opens the `fitness` cluster. Cardiorespiratory fitness (CRF, peak VO2, measured in METs — 1 MET =
3.5 mL/kg/min) is **one of the strongest mortality predictors in medicine** — but the wiki's other
lever, physical activity, is measured as *dose* (minutes); this is measured as the *outcome* (capacity).
The distinction is load-bearing: both sources here are observational, so CRF is a **predictor, not a
proven causal lever** — the general prognostic-marker-vs-modifiable-lever distinction
([[Surrogate Outcomes]] -> *Prognostic marker vs modifiable lever*). The modifiable lever that acts on it
is exercise ([[Measuring and Raising Cardiorespiratory Fitness]]), which carries its own intervention
evidence; a high VO2max is otherwise a stratification metric, not a target in itself.



<div class="recent-update" data-last-updated="2026-10-06">

## The dose-response — each MET matters, and no upper limit was observed over the studied range

- **Per 1-MET higher CRF (Kodama meta-analysis, dose-response):** all-cause mortality «RR 0.87 (95% CI,
  0.84-0.90)» and CHD/CVD «0.85 (95% CI, 0.82-0.88)» — i.e. «a 1-MET higher level of MAC was associated
  with 13% and 15% decrements in risk of all-cause mortality and CHD/CVD».
  [@kodama2009]
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

**A convergence worth naming, and it bears on the U/J-artifact prior.** Self-reported *activity* studies
show a plateau (and sometimes a U-shape) at high volumes; Mandsager, measuring fitness *objectively*,
finds monotone benefit with no plateau over its studied range, and offers three hedged candidate
explanations: «This difference may reflect the objective measurement of physical fitness in the present
study, as opposed to self-reported activity levels»; «It may also reflect non–activity-related
contributors to aerobic fitness, including genetic factors and unmeasured health habits, which may
contribute to improved survival»; and «Lastly, it may, in part, be attributable to differences in the
observed populations» [@mandsager2018]. Only the first supports reading the activity-plateau as partly a self-report
measurement artifact -> [[The U-Shaped Association Artifact]]; the second cuts *against* a causal reading
of CRF's missing plateau. (corrected 2026-10-06: *attributes the discrepancy to* one explanation -> one of
three; self-critique) Kodama's own categorical data
agree on the *shape*: the steepest benefit is at the low end (low-vs-high RR 1.70 >> intermediate-vs-high
1.13).
[inferred from @kodama2009; @mandsager2018]

**A candidate role for CRF in the occupational-PA paradox (route-b, UNTESTED) `[2026-08-14, Coenen]`.**
High occupational physical activity is associated with *higher* mortality in men -> [[The Physical Activity Paradox]], and Coenen reports the harm «appears to be stronger in workers with low compared
with high cardiorespiratory fitness» but «could not statistically test this in a sensitivity analysis»
for lack of data [@coenen2018paradox]. So CRF is a *candidate buffer* of the strenuous-work harm — mechanism-consistent (a fitter worker
operates at a lower relative workload), but it clears only the plausibility bar, not positive
effect-modification, so it is held as an open interaction, not a finding.

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## How big — low fitness carries hazards comparable to or greater than smoking and diabetes

Mandsager's adjusted all-cause-mortality gradient (reference = low performers): «Low vs Elite ... 5.04
(4.10-6.20)», «Low vs High ... 3.90 (3.67-4.14)», «Low vs Above Average ... 2.75», «Low vs Below Average
... 1.95». Mandsager judges the reduced-CRF hazard «comparable to or greater than traditional clinical
risk factors» in the same model: «smoking ... 1.41», «diabetes ... 1.40», «coronary artery disease ...
1.29». The size depends on the contrast chosen: lowest quartile vs the top 2.3% gives 5.04, but the
middle step (below-average vs above-average) gives 1.41, equal to smoking — and a quartile-vs-top-band
fitness contrast and a binary smoking contrast are not the same quantity. (corrected 2026-10-06:
*larger ... than* / *outranks* -> the source's «comparable to or greater than»; self-critique)
Kodama concurs categorically: low-vs-high CRF «RR for all-cause mortality of 1.70 (1.51-1.92)», attenuated
to 1.48 (1.31-1.68) after trim-and-fill (see *Limits*).
[@mandsager2018]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

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

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## The load-bearing honesty — predictor, not proven cause

**Both sources are observational, and both say so.** Kodama: CRF is «associated with» / a «predictor»,
never «causes», and it «suggest[s]... a clinical trial to determine whether an intervention that improves
CRF by exercise reduces the risk». Mandsager: «the association between CRF and mortality does not prove
causation... The degree to which high CRF preselects patients with lower mortality vs causes a reduction
in mortality is not discernible».
[@kodama2009]

**So the operative reading:** CRF is a *superb risk marker* and the trackable *outcome* of the physical-
activity lever -> [[Physical Activity Dose and Mortality]] (which IS an evidenced mortality lever). But
*raise your VO2max to live longer* is an association, not a demonstrated intervention effect — the
proven lever is the activity that raises fitness, and CRF is how you measure whether it worked.

**The caveat is partially — not fully — lifted by within-person change** [@ross2016] (Ross 2016,
[[Measuring and Raising Cardiorespiratory Fitness]]): people who go from unfit to fit between exams have
lower subsequent mortality («44%» in Blair's cohort), and in «The largest randomized trial of exercise
training in HF patients» (HF-ACTION) a larger CRF rise was *associated with* fewer CV events «after
adjustment for potential confounding variables». Within-person change is a stronger design than the
cross-sectional comparison here, so it narrows the reverse-causation worry — but it does not close it.
No leg is a randomized CRF contrast: HF-ACTION randomized patients to exercise training, not to a CRF
change, so its CRF-change result is an adjusted within-trial association carrying the same confounding
risk as the cohorts, in heart-failure patients, on a hospitalization-inclusive composite. (corrected
2026-10-06: *the one exercise-training RCT* / *only HF-ACTION is randomized* -> adjusted within-trial
association in HF patients; self-critique) The upgrade is real and bounded: CRF is a
*modifiable target whose improvement tracks benefit*, not yet a *proven cause* of longer life.

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Limits

- **Not two independent methods.** A meta-analysis of cohorts (Kodama) and one mega-cohort (Mandsager)
  share the observational, confounded, reverse-causation-prone design — this is corroboration and
  refinement, not an [E-independent] convergence. Kodama's sensitivity analysis: adjusting for smoking
  weakened the CHD/CVD link but *not* the all-cause link (CRF «independently associated with longevity»). [@kodama2009]
- **Reverse causation is the central threat** — subclinical illness lowers fitness; Mandsager's single
  time-point measurement cannot separate *unfit because sick* from *sick because unfit*.
- **Publication bias** in Kodama: Egger p=.002 (all-cause) for the per-MET estimate, where trim-and-fill
  «could not detect hypothetical negative unpublished studies»; the categorical low-vs-high all-cause RR
  attenuates from 1.70 to 1.48 (1.31-1.68) after trim-and-fill. [@kodama2009]
  (corrected 2026-10-06: attenuation was attached to the per-MET estimate -> it applies to the
  categorical RR; self-critique)
- **Transportability of the bands** — Mandsager's referral population is not the general population, and
  its METs are estimated, not measured.
- Coherence, not validity (R1): a strong, graded, mechanism-plausible association — but not proof that
  acting on it changes a given person's life.

</div>

## CRF is a measured CAPACITY, not a behaviour - and the predictor claim is cited (deliverable-critique, 2026-08-01)

Two clarifications the critique asked for. First, "CRF is one of the best-evidenced mortality predictors"
is **cited, not asserted**: Kodama's meta-analysis, Mandsager's large cohort, and the Ross AHA statement
are the backing (this page + [[Measuring and Raising Cardiorespiratory Fitness]]). Second, CRF is not the
same object as the total-activity mortality finding, and both are real:

- **CRF / VO2max = a measured fitness CAPACITY** (partly trainable, partly genetic) - its per-1-MET
  mortality gradient is objectively measured, part of why it predicts so strongly.
- **Total physical activity = a BEHAVIOUR** - the HR \~0.34 lever -> [[Physical Activity Dose and Mortality]].
- **Resistance training = a behaviour whose channel is muscle/strength** (Momma RR 0.85, largely
  independent of aerobic) -> [[Muscle-Strengthening Activity and Mortality]]; RT *counts* as activity but
  raises CRF only modestly - aerobic work is what raises CRF.

So the "two dials" are real distinct channels: aerobic -> CRF, resistance -> muscle. The low-HR
total-activity number and the CRF-predictor claim are different (both valid) findings, not one restated.



<div class="recent-update" data-last-updated="2026-10-06">

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

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## The causal discount - VO2max is part lever, part marker (deliverable-critique, 2026-08-01)

The observational gradient is real and large, but a "healthier people are fitter" tautology inflates it as
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
- **Genetics.** A large share of VO2max is heritable and non-modifiable, so the gradient (which includes
  genetic high-responders) overstates trainable upside.
- **Intervention < observational (expected, not measured).** Given the two discounts above, causally
  raising CRF by training should lower mortality by less than the observational gradient implies; no
  held trial measures the size of that gap.

Net: VO2max is *part lever, part marker*. The decision-relevant claim survives but shrinks - **escaping the
low-fitness bottom by training plausibly helps** (a likely smaller causal benefit, concentrated at the low end, not yet trial-proven on mortality) - it
is NOT the between-person \~5x read as a personal promise.

</div>

## References

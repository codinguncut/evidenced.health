---
type: framework
question: How strongly does cardiorespiratory fitness (VO2max) predict mortality, is there a target, and does raising it help?
aliases: [Cardiorespiratory Fitness, CRF, VO2max, VO2 max, Fitness, METs, Aerobic Capacity, Fitness and Mortality, VO2max Target]
authors: [Kodama, Satoru; Mandsager, Kyle; Jaber, Wael; Ross, Robert]
sources: [Kodama - Cardiorespiratory Fitness and Mortality 2009, Mandsager - Cardiorespiratory Fitness and Long-Term Mortality 2018, Ross - Cardiorespiratory Fitness Clinical Vital Sign 2016]
cluster: fitness
nucleus: true
confidence: medium
created: 2026-07-28
updated: 2026-08-06
self_critiqued: 2026-08-06
relationships:
  related_to:
    - Muscle-Strengthening Activity and Mortality
    - Physical Activity Dose and Mortality
    - The U-Shaped Association Artifact
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



## The dose-response — each MET matters, and there is no ceiling

- **Per 1-MET higher CRF (Kodama meta-analysis, dose-response):** all-cause mortality «RR 0.87 (95% CI,
  0.84-0.90)» and CHD/CVD «0.85 (95% CI, 0.82-0.88)» — i.e. «a 1-MET higher level of MAC was associated
  with 13% and 15% decrements in risk of all-cause mortality and CHD/CVD».
  [@kodama2009, Abstract; Comment]
- **No plateau (Mandsager, 122,000-patient cohort):** «Cardiorespiratory fitness is inversely associated
  with long-term mortality with no observed upper limit of benefit» — mortality keeps falling into the
  *elite* band: «elite vs high: adjusted HR, 0.77 (95% CI, 0.63-0.95)».
  [@mandsager2018, Conclusions; Results]

**A convergence worth naming, and it bears on the U/J-artifact prior.** Self-reported *activity* studies
show a plateau (and sometimes a U-shape) at high volumes; Mandsager, measuring fitness *objectively*,
finds monotone benefit with no plateau, and attributes the discrepancy to «the objective measurement of
physical fitness... as opposed to self-reported activity levels». So the activity-plateau may be partly a
self-report measurement artifact -> [[The U-Shaped Association Artifact]]. Kodama's own categorical data
agree on the *shape*: the steepest benefit is at the low end (low-vs-high RR 1.70 >> intermediate-vs-high
1.13).
[inferred from @kodama2009; @mandsager2018]

## How big — low fitness outranks smoking and diabetes

Mandsager's adjusted all-cause-mortality gradient (reference = low performers): «Low vs Elite ... 5.04
(4.10-6.20)», «Low vs High ... 3.90 (3.67-4.14)», «Low vs Above Average ... 2.75», «Low vs Below Average
... 1.95». Being unfit is a *larger* mortality signal than the classic risk factors in the same model:
«smoking ... 1.41», «diabetes ... 1.40», «coronary artery disease ... 1.29». Kodama concurs categorically:
low-vs-high CRF «RR for all-cause mortality of 1.70 (1.51-1.92)».
[@mandsager2018, Results; Figure 2C; (Kodama - Cardiorespiratory Fitness and Mortality 2009) , Abstract]

## The target — where a given VO2max sits, by age and sex

There are two anchors the wiki holds:

- **A minimal floor (Kodama):** «a minimal CRF of 7.9 METs may be important» (50-year-old man reference);
  age/sex-specific, approximately 9 and 7 METs (at 40), 8 and 6 (at 50), 7 and 5 (at 60) for men and
  women — women run \~2 METs below men, and the floor falls \~0.1 MET/year with age.
  [@kodama2009, Comment; Conclusion]
- **Percentile bands (Mandsager, age x sex MET grid):** low (<25th), below-average (25-49th),
  above-average (50-74th), high (75-97.6th), elite (>=97.7th). E.g. men 50-59: «<8.2 | 8.2-9.9 |
  10.0-11.3 | 11.4-13.9 | >=14.0» METs; women 50-59: «<7.0 | 7.0-8.0 | 8.1-9.9 | 10.0-12.9 | >=13.0».
  [@mandsager2018, Table 2]

So a VO2max reading converts to METs (/3.5) and drops into a band — the practical *is my fitness good?*
answer the activity-dose evidence cannot give. **Caveat: Mandsager's bands are from a referral population
using *estimated* (treadmill) METs, so a directly-measured VO2max placed against them is approximate.**

## The load-bearing honesty — predictor, not proven cause

**Both sources are observational, and both say so.** Kodama: CRF is «associated with» / a «predictor»,
never «causes», and it «suggest[s]... a clinical trial to determine whether an intervention that improves
CRF by exercise reduces the risk». Mandsager: «the association between CRF and mortality does not prove
causation... The degree to which high CRF preselects patients with lower mortality vs causes a reduction
in mortality is not discernible».
[@kodama2009, Comment; (Mandsager - Cardiorespiratory Fitness and Long-Term Mortality 2018) , Limitations]

**So the operative reading:** CRF is a *superb risk marker* and the trackable *outcome* of the physical-
activity lever -> [[Physical Activity Dose and Mortality]] (which IS an evidenced mortality lever). But
*raise your VO2max to live longer* is an association, not a demonstrated intervention effect — the
proven lever is the activity that raises fitness, and CRF is how you measure whether it worked.

**The caveat is partially — not fully — lifted by within-person change** [@ross2016] (Ross 2016,
[[Measuring and Raising Cardiorespiratory Fitness]]): people who go from unfit to fit between exams have
lower subsequent mortality («44%» in Blair's cohort), and the one exercise-training RCT (HF-ACTION) links
a CRF rise to fewer CV events. Within-person change is a stronger design than the cross-sectional
comparison here, so it narrows the reverse-causation worry — but it does not close it (only HF-ACTION is
randomized, on a hospitalization-inclusive composite). The upgrade is real and bounded: CRF is a
*modifiable target whose improvement tracks benefit*, not yet a *proven cause* of longer life.

## Limits

- **Not two independent methods.** A meta-analysis of cohorts (Kodama) and one mega-cohort (Mandsager)
  share the observational, confounded, reverse-causation-prone design — this is corroboration and
  refinement, not an [E-independent] convergence. Kodama's sensitivity analysis: adjusting for smoking
  weakened the CHD/CVD link but *not* the all-cause link (CRF «independently associated with longevity»). [@kodama2009]
- **Reverse causation is the central threat** — subclinical illness lowers fitness; Mandsager's single
  time-point measurement cannot separate *unfit because sick* from *sick because unfit*.
- **Publication bias** in Kodama (Egger p=.002 all-cause), moderately attenuated by trim-and-fill. [@kodama2009]
- **Transportability of the bands** — Mandsager's referral population is not the general population, and
  its METs are estimated, not measured.
- Coherence, not validity (R1): a strong, graded, mechanism-plausible association — but not proof that
  acting on it changes a given person's life.





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



## "Per 1-MET" - what it means, and why you cannot compound it to 0.87^5 (deliverable-critique, 2026-08-01)

"Per 1-MET" is per 1 metabolic-equivalent of CRF *capacity* (VO2max; 1 MET = 3.5 ml/kg/min), NOT per
MET-hour of activity - a capacity, not a dose (above). So RR 0.87 per 1-MET is a between-person
association: each 1-MET-fitter stratum has \~13% lower mortality across the studied range. It does **not**
compound to a personal promise (5 METs -> 0.87^5 \~ 0.50) for two reasons:

- **The per-MET effect is not constant - it is front-loaded.** The gradient is *steepest at the low end*
  (low-vs-elite RR \~5; low-vs-below-average is most of it), so a MET gained from a sedentary base buys far
  more than a MET added near elite; a single averaged coefficient hides this.
- **It is observational, not a causal individual effect.** Between-person fitness tracks many things
  besides training (baseline health, genetics; reverse causation), so causally raising *your own* VO2max
  by 5 METs does not deliver the between-person gradient -> [[The U-Shaped Association Artifact]] and the
  causal discount in the next section. Read it as: escaping the low-fitness bottom is where the large,
  decision-relevant benefit sits - not as a compoundable multiplier.



## The causal discount - VO2max is part lever, part marker (deliverable-critique, 2026-08-01)

The observational gradient is real and large, but a "healthier people are fitter" tautology inflates it as
a *personal* target - the critique is right, and it is the artifact lens applied to a protective
association -> [[The U-Shaped Association Artifact]]. Three discounts sit between the between-person
association and the effect of raising *your own* fitness:

- **Reverse causation / confounding by health.** Subclinical disease lowers CRF, so low CRF is partly a
  MARKER of ill health rather than its cause; Ross 2016 flags exactly this marker-vs-lever gap
  -> [[Measuring and Raising Cardiorespiratory Fitness]].
- **Genetics.** A large share of VO2max is heritable and non-modifiable, so the gradient (which includes
  genetic high-responders) overstates trainable upside.
- **Intervention < observational.** Causally raising CRF by training lowers mortality by less than the
  observational gradient implies.

Net: VO2max is *part lever, part marker*. The decision-relevant claim survives but shrinks - **escaping the
low-fitness bottom by training helps** (a real, smaller causal benefit, concentrated at the low end) - it
is NOT the between-person \~5x read as a personal promise.

## References

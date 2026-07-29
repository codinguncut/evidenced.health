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
updated: 2026-07-28b
self_critiqued: 2026-07-28b
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
proven causal lever**.

## The dose-response — each MET matters, and there is no ceiling

- **Per 1-MET higher CRF (Kodama meta-analysis, dose-response):** all-cause mortality «RR 0.87 (95% CI,
  0.84-0.90)» and CHD/CVD «0.85 (95% CI, 0.82-0.88)» — i.e. «a 1-MET higher level of MAC was associated
  with 13% and 15% decrements in risk of all-cause mortality and CHD/CVD».
  [EXTRACTED (Kodama - Cardiorespiratory Fitness and Mortality 2009) chunk 01, Abstract; Comment]
- **No plateau (Mandsager, 122,000-patient cohort):** «Cardiorespiratory fitness is inversely associated
  with long-term mortality with no observed upper limit of benefit» — mortality keeps falling into the
  *elite* band: «elite vs high: adjusted HR, 0.77 (95% CI, 0.63-0.95)».
  [EXTRACTED (Mandsager - Cardiorespiratory Fitness and Long-Term Mortality 2018) chunk 01, Conclusions; Results]

**A convergence worth naming, and it bears on the U/J-artifact prior.** Self-reported *activity* studies
show a plateau (and sometimes a U-shape) at high volumes; Mandsager, measuring fitness *objectively*,
finds monotone benefit with no plateau, and attributes the discrepancy to «the objective measurement of
physical fitness... as opposed to self-reported activity levels». So the activity-plateau may be partly a
self-report measurement artifact -> [[The U-Shaped Association Artifact]]. Kodama's own categorical data
agree on the *shape*: the steepest benefit is at the low end (low-vs-high RR 1.70 >> intermediate-vs-high
1.13).
`[INFERRED (Kodama ...; Mandsager ...) — both report the gradient; the objective-vs-self-report reading
of the plateau discrepancy is Mandsager's, extended here to the wiki's U-shape concept]`

## How big — low fitness outranks smoking and diabetes

Mandsager's adjusted all-cause-mortality gradient (reference = low performers): «Low vs Elite ... 5.04
(4.10-6.20)», «Low vs High ... 3.90 (3.67-4.14)», «Low vs Above Average ... 2.75», «Low vs Below Average
... 1.95». Being unfit is a *larger* mortality signal than the classic risk factors in the same model:
«smoking ... 1.41», «diabetes ... 1.40», «coronary artery disease ... 1.29». Kodama concurs categorically:
low-vs-high CRF «RR for all-cause mortality of 1.70 (1.51-1.92)».
[EXTRACTED (Mandsager ...) chunk 01, Results; Figure 2C; (Kodama ...) chunk 01, Abstract]

## The target — where a given VO2max sits, by age and sex

There are two anchors the wiki holds:

- **A minimal floor (Kodama):** «a minimal CRF of 7.9 METs may be important» (50-year-old man reference);
  age/sex-specific, «approximately 9 and 7 METs (at 40), 8 and 6 (at 50), 7 and 5 (at 60)» for men and
  women — women run ~2 METs below men, and the floor falls ~0.1 MET/year with age.
  [EXTRACTED (Kodama ...) chunk 01, Comment; Conclusion]
- **Percentile bands (Mandsager, age x sex MET grid):** low (<25th), below-average (25-49th),
  above-average (50-74th), high (75-97.6th), elite (>=97.7th). E.g. men 50-59: «<8.2 | 8.2-9.9 |
  10.0-11.3 | 11.4-13.9 | >=14.0» METs; women 50-59: «<7.0 | 7.0-8.0 | 8.1-9.9 | 10.0-12.9 | >=13.0».
  [EXTRACTED (Mandsager ...) chunk 01, Table 2]

So a VO2max reading converts to METs (/3.5) and drops into a band — the practical *is my fitness good?*
answer the activity-dose evidence cannot give. **Caveat: Mandsager's bands are from a referral population
using *estimated* (treadmill) METs, so a directly-measured VO2max placed against them is approximate.**

## The load-bearing honesty — predictor, not proven cause

**Both sources are observational, and both say so.** Kodama: CRF is «associated with» / a «predictor»,
never «causes», and it «suggest[s]... a clinical trial to determine whether an intervention that improves
CRF by exercise reduces the risk». Mandsager: «the association between CRF and mortality does not prove
causation... The degree to which high CRF preselects patients with lower mortality vs causes a reduction
in mortality is not discernible».
[EXTRACTED (Kodama ...) chunk 01, Comment; (Mandsager ...) chunk 01, Limitations]

**So the operative reading:** CRF is a *superb risk marker* and the trackable *outcome* of the physical-
activity lever -> [[Physical Activity Dose and Mortality]] (which IS an evidenced mortality lever). But
*raise your VO2max to live longer* is an association, not a demonstrated intervention effect — the
proven lever is the activity that raises fitness, and CRF is how you measure whether it worked.

**The caveat is partially — not fully — lifted by within-person change** (Ross 2016,
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
  weakened the CHD/CVD link but *not* the all-cause link (CRF «independently associated with longevity»).
- **Reverse causation is the central threat** — subclinical illness lowers fitness; Mandsager's single
  time-point measurement cannot separate *unfit because sick* from *sick because unfit*.
- **Publication bias** in Kodama (Egger p=.002 all-cause), moderately attenuated by trim-and-fill.
- **Transportability of the bands** — Mandsager's referral population is not the general population, and
  its METs are estimated, not measured.
- Coherence, not validity (R1): a strong, graded, mechanism-plausible association — but not proof that
  acting on it changes a given person's life.

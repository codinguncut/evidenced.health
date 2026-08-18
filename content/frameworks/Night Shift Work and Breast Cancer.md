---
type: framework
question: Does night shift work increase breast cancer incidence — enough to justify classifying it a probable human carcinogen?
aliases: [Night Shift Work Breast Cancer, Shift Work and Cancer, Night Work Breast Cancer, Circadian Disruption and Breast Cancer]
authors: [Travis, Ruth C]
sources: [Travis - Night Shift Work Breast Cancer 2016]
cluster: occupation
confidence: medium
created: 2026-08-17
updated: 2026-08-17
self_critiqued: 2026-08-17
relationships:
  related_to:
    - The Physical Activity Paradox
    - Upgrading Observational Evidence
    - Sleep Regularity and Mortality
    - Job Strain and Coronary Heart Disease
    - Non-Sugar Sweeteners
---

**The finding is a well-powered NULL.** Across 10 prospective studies (1.4 million women; 4660 breast
cancer cases among night-shift workers), pooled breast cancer incidence for *ever* vs *never* night
shift work was **RR 0.99 (95% CI 0.95 to 1.03)** — no association, with narrow intervals and no
significant heterogeneity. [@travis2016nightshift]

> «Altogether, these studies included 4660 women with breast cancer who had worked night shifts
> (Figure 2). When results from the 10 studies were combined, the weighted average RR was 0.99 (95%
> CI¼ 0.95 to 1.03) for any night shift work compared with none. There was no statistically signifi-
> cant heterogeneity across studies (P ¼ .052).»
> [@travis2016nightshift]

This is the occupation cluster's **circadian channel** — a fourth distinct occupational exposure
alongside physical demand, psychosocial strain, and cognitive stimulation
-> [[The Physical Activity Paradox]]. Unlike those three, its patient-important verdict is a
**credible no-meaningful-effect**, not a harm or a benefit.

## Magnitude, with the long-duration arm and its bounds

The dose axis is **duration of night shift work**, and the null holds — indeed tightens — at the high
end:

| Exposure contrast | Studies | Pooled RR (95% CI) | Note |
|---|---|---|---|
| Ever vs never | 10 | 0.99 (0.95-1.03) | 4660 exposed cases |
| >=20 years vs never | 8 | 1.01 (0.93-1.10) | narrow — excludes a *moderate* association |
| >=20 years (updated NHS) | 8 | 0.97 (0.90-1.06) | re-run with newer Nurses' Health results |
| >=30 years vs never | 4 | 1.00 (0.87-1.14) | sparse — <1000 long-duration cases total |

[@travis2016nightshift]

The confidence intervals carry the decision, so they are stated with the estimate, not stripped to a
point. The long-duration interval is what licenses the strong reading:

> «Confidence intervals for the incidence rate ratios are narrow, even for 20 or more years of night
> shift work (RR ¼ 1.01, 95% CI ¼ 0.93 to 1.10), so these findings exclude a moderate association of
> breast can- cer incidence with long duration night shift work. The main limitation of the present
> findings is that an in- crease in the relative risk of breast cancer incidence of only a few percent
> cannot be ruled out.»
> [@travis2016nightshift]

**Evidence state: no meaningful (moderate) effect — NOT insufficient evidence.** The expectancy test
passes: 1.4M women, 4660 exposed cases, intervals tight enough to rule out a moderate RR even at >=20
years. What survives is the honest residual — a *few-percent* relative increase cannot be excluded,
because fewer than 1000 long-duration cases have yet accrued (already >4x the case count the 2007 IARC
review had). That residual is a bounded uncertainty, not an open question.

## Why the prospective restriction is the load-bearing move

The value here is not only the null but *why* it overturns an earlier positive signal. The prior
evidence base for a night-shift/breast-cancer link was **case-control-heavy**; Travis's meta-analysis
restricts to **prospective** designs, five of which (0.8M women) postdate the previous meta-analyses.

> «Restriction to pro- spective studies is important when trying to detect or refute moderate hazards
> as it avoids the moderate biases that can re- sult from retrospective methodology.»
> [@travis2016nightshift]

This is a **live occupational-epidemiology instance of the prospective-overturns-case-control
discriminator** -> [[Upgrading Observational Evidence]], the exact structure of Willett's dietary-fat
-> breast-cancer reversal (strong case-control associations that prospective studies did not reproduce,
diagnosed as artifacts of noncomparable case-vs-control data collection). Same outcome, same design-class
flip, a different exposure — recall bias in retrospective exposure ascertainment manufactures a moderate
association that the prospective ascertainment dissolves.
[inferred from @travis2016nightshift]

## The alternative explanations were tested, not assumed away

The null is robust to the three ways it could be spurious:

- **Residual confounding.** Night-shift workers differed (more likely obese, smokers, on sleep
  medication, evening chronotype), so residual confounding «cannot be completely excluded» — but the
  null held «either in minimally adjusted or in multivariable-adjusted analyses».
  [@travis2016nightshift]
- **Screening bias (a masked association).** The hypothesis that shift workers' different screening
  uptake hid a real effect was tested directly: in the Million Women Study there was **no difference by
  shift category in the proportion of cancers detected by screening** — the masking mechanism did not
  operate. [@travis2016nightshift]
- **Exposure misclassification.** Self-reported night work had good repeatability, and long-duration
  workers «are likely to have had substantial exposure... so misclassification is unlikely to have been
  so great as to have masked any material risk». [@travis2016nightshift]
- **Effect modification.** No modification by sleep characteristics, diurnal preference, family history,
  or recency; and a nurse-specific sensitivity analysis (MWS, >=10 years as a nurse) showed no
  significant increase — so the earlier nurse-cohort signals are not an occupation-specific exception.
  [@travis2016nightshift]

That each artifact route was probed and closed is what moves this from *insufficient* to *credible
no-effect*.

## The IARC friction — recorded, not adjudicated here

Travis draws an explicit conclusion **against** the IARC 2007 classification of shift work as a probable
(Group 2A) human carcinogen:

> «The totality of the current prospective evidence suggests that night shift work, including long-term
> night shift work, has little or no effect on breast can- cer incidence. The IARC 2007 shift work
> review was necessarily based on limited epidemiological evidence, and, although fur- ther follow-up
> is desirable, the prospective evidence now avail- able shows that classification of night shift work
> as a probable human (breast) carcinogen is no longer justified.»
> [@travis2016nightshift]

**This is filed as an attributed claim, NOT as a two-sided `[[tension]]`.** The counter-passage check is
binding and the wiki does not hold IARC's own monograph — only Travis's characterization of it — so
IARC's reasoning cannot be read in its own words here. Adjudicating whether the 2A classification should
stand requires the IARC source and is a G-gap.

**A partial reconciliation that does not need the IARC source — hazard vs risk.** IARC does *hazard
identification* (can the exposure cause cancer at any level, in any tissue?), a categorically different
question from Travis's *population risk magnitude* (by how much does breast cancer incidence change in
real shift-working women?) -> [[Non-Sugar Sweeteners]] for the same hazard-vs-risk split on aspartame.
A true small hazard is logically compatible with a null population risk estimate, so part of the apparent
contradiction dissolves without either side being wrong. But Travis's claim is *stronger* than this
reconciliation: she argues the prospective evidence removes the epidemiological *basis* for the hazard
call, not merely that the population risk is small. That stronger claim is the part that awaits the IARC
source to adjudicate.
[inferred from @travis2016nightshift]

## Bearing on the circadian-oncogenesis mechanism

[[Sleep Regularity and Mortality]] holds a *circadian-oncogenesis* pathway (irregular sleep-wake timing
-> clock desynchrony -> cancer), admitted directionally as mechanism. Night shift work is the most-studied
**occupational** circadian disruptor, so this null is a well-powered human test of that pathway's
oncogenic potency in breast tissue — and it is negative for a moderate effect. This **attenuates** the
magnitude one should attach to the circadian-cancer mechanism, without refuting it: night-shift schedule
and general population sleep-timing irregularity are different exposures (not-joined check (ii): different
unit and disruptor), and the pathway may still operate for other cancers or via other disruptors. Held as
a bound on mechanism weight, not a mechanism refutation.
[inferred from @travis2016nightshift]

## Decision relevance

- **For a night-shift worker weighing breast cancer risk:** on the current prospective evidence, night
  shift work — including long-term — has little or no effect on breast cancer incidence; a moderate risk
  is excluded, only a few-percent increase remains unexcludable. This is a *reassurance* decision-change
  against the widely-communicated 2A *probable carcinogen* message.
- **The lever, if any, is elsewhere.** Shift work's plausible health costs sit on other outcomes and
  pathways (metabolic, cardiovascular, sleep-loss) -> [[Job Strain and Coronary Heart Disease]],
  [[Sleep Regularity and Mortality]] — not on this cancer outcome. Do not let the breast cancer null
  read as a clean bill for shift work overall.
- **Symmetric standards.** This null was extracted with the same rigor a positive finding gets — the
  narrow CIs, the tested artifact routes, and the prospective-design upgrade are what earn it *medium*
  confidence, exactly as they would earn a harm finding.

## Confidence: MEDIUM — why

- **Gold meta-analysis, large and prospective** — 1.4M women, 10 prospective cohorts, narrow pooled
  CIs, low heterogeneity despite design/population/exposure-definition differences; the artifact routes
  (confounding, screening, misclassification, effect modification) were each probed and closed.
- **Held below high because:** observational throughout (no randomization is possible for this
  exposure); a few-percent relative increase is not excluded at long durations (<1000 cases); and the
  IARC-2A friction is recorded but not adjudicated (the IARC source is not held).
- **Coherence, not validity (R1):** the pooled data show no moderate association in these cohorts; that
  night shift work *causes no breast cancer* is the inference the design supports directionally, and the
  open loop (no realized-outcome check) stands.

## Self-critique `[run 2026-08-17, before commit]`

- **The NULL is not softened or inflated.** Magnitudes are stated with CIs and studied range (ever /
  >=20y / >=30y); the residual few-percent uncertainty is kept visible; the evidence state is named
  *no-meaningful-effect*, distinguished from *insufficient*.
- **The IARC contrast is NOT filed as a tension.** Counter-passage check binds: the IARC monograph is
  not held, so the friction is folded as a Travis-attributed claim plus an `[AWAITS]` G-gap, not a
  two-sided tension page. The hazard-vs-risk reconciliation is marked as the wiki's.
- **Not laundered.** The value beyond Travis's own summary is the cross-linking: the prospective-overturns
  -case-control discriminator ([[Upgrading Observational Evidence]]), the circadian-mechanism magnitude
  bound ([[Sleep Regularity and Mortality]]), and the occupation cluster's fourth channel — each a wiki
  move against held fabric, each tagged.
- **Not overclaimed against the mechanism.** The circadian-oncogenesis note bounds the mechanism's weight
  and explicitly does not refute it (different exposure/disruptor; other cancers possible).

## References

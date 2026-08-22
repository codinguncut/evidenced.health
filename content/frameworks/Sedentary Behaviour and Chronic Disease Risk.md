---
type: framework
question: How much sedentary time (total sitting, TV viewing) raises mortality and type-2-diabetes risk, at what dose, and independently of how physically active a person is?
aliases: [Sitting Time and Mortality, TV Viewing and Health, Sedentary Time, Sedentary Behaviour, Sedentary Behaviour and Mortality]
authors: [Patterson, Richard; McNamara, Eoin; Tainio, Marko; de Sa, Thiago Herick; Smith, Andrea D; Sharp, Stephen J; Edwards, Phil; Woodcock, James; Brage, Soren; Wijndaele, Katrien]
sources: [Patterson - Sedentary Behaviour Mortality Diabetes Dose-Response Meta-Analysis 2018]
cluster: activity
nucleus: false
confidence: medium
self_critiqued: 2026-08-21
relationships:
  related_to: [The Physical Activity Paradox, Measurement Error in Dietary Assessment]
  extends: [Physical Activity Dose and Mortality]
created: 2026-08-21
updated: 2026-08-21
---

**The decision this page changes:** whether, and how hard, to cut *sitting* and *TV time* — separately
from the decision about how much to *move*. Sedentary behaviour is a **distinct exposure from physical
activity**, not its inverse (near-zero correlation; see [[The Physical Activity Paradox]]), so "I hit my
step target" does not close this lever. The anchor is **Patterson 2018**, a gold dose-response
meta-analysis (34 prospective studies, 1,331,468 participants) that gives the per-outcome curve shape,
adds incident T2D and cancer, and splits total sitting from TV viewing.
[@patterson2018sedentary]

The magnitude is **modest per hour and independent of activity, and it accelerates past a threshold** —
so the levers here rank *below* the big rocks (smoking, obesity, near-total inactivity) but are real,
and matter most for the heaviest sitters and for T2D risk specifically.

## Two exposures, not one — total sitting vs TV viewing `type-B`

*Sedentary behaviour* names two objects with **different curves and different strengths**, and conflating
them loses the decision. Patterson keeps them separate because they carry «different associated
socio-demographic and/or behavioural patterns (e.g. dietary intake) and therefore different
confounding/mediating patterns».
[@patterson2018sedentary]

- **Total sitting** — the aggregate; weaker associations, higher self-report error.
- **TV viewing** — stronger on *every* outcome, because it drags a dietary co-exposure (snacking, higher
  energy intake) and evening/postprandial timing with it. TV is the sharper lever, not because sitting to
  watch differs physically but because of *what travels with it*.

## Dose-response — an accelerating-harm knee, the MIRROR of the activity plateau

The PA-adjusted per-hour risk is near-flat below a threshold, then **steepens** above it (all-cause and
CVD). This is the opposite curvature to the activity-benefit curve on
[[Physical Activity Dose and Mortality]], where returns *flatten*: activity's benefit **saturates**;
sitting's harm **compounds**. Two different exposures (same-quantity? **NO** — sitting-hours vs
MVPA-minutes), bending in opposite directions — which is why the recommendation is *both* move-more
*and* sit-less, not one standing in for the other.

Per 1 h/day, PA-adjusted, RR (95% CI):

| Exposure -> outcome | Below threshold | Above threshold | Threshold (self-report) |
|---|---|---|---|
| Total sitting -> all-cause mortality | 1.01 (1.00-1.01) | 1.04 (1.03-1.05) | \~8 h/day |
| Total sitting -> CVD mortality | 1.01 (0.99-1.02) | 1.04 (1.03-1.04) | \~6 h/day |
| Total sitting -> cancer mortality | linear 1.01 (1.00-1.02), **non-significant** | — | none |
| Total sitting -> incident T2D | linear 1.01 (1.00-1.01) | — | none |
| TV viewing -> all-cause mortality | 1.03 (1.01-1.04) | 1.06 (1.05-1.08) | \~3.5 h/day |
| TV viewing -> CVD mortality | 1.02 (0.99-1.04) | 1.08 (1.05-1.12) | \~4 h/day |
| TV viewing -> cancer mortality | linear 1.02 (1.01-1.03) | — | none |
| TV viewing -> incident T2D | linear 1.09 (1.07-1.12) | — | none |

[@patterson2018sedentary]
[@patterson2018sedentary]

**Threshold = edge-of-evidence first, curve-feature second.** The knots are spline inflections with **no
CI reported on the knot location**, so read *\~8 h* / *\~3.5 h* as approximate regions, not targets. The
studied range spans roughly the observed exposure distribution (TV: 75% of the calibration population
report <4 h/day, so the high-TV arm is thinner). And because 31/34 studies are **self-reported**, the
threshold inherits measurement error — an objective-device inflection sits *higher* (Ekelund 2019
accelerometry \~9.5 h/day sitting; see [[Physical Activity Dose and Mortality]]), the same self-report/
device gap running in the sitting direction.

## T2D is the standout — and the most caveated `type-F`

TV->T2D is the strongest association in the whole analysis (**1.09 (1.07-1.12)** per h/day, PA-adjusted),
and its PAF is large:

> «For T2D 29% (26–32%) of incidence was estimated to be related to TV-viewing.»
> [@patterson2018sedentary]

For comparison the TV-viewing PAFs for mortality are 8% (6-10%) all-cause, 5% (1-8%) CVD, 5% (2-7%)
cancer. **Two discounts before believing the 29%:** (i) the PAF «rests on the assumption of causality,
and the use of unbiased estimates with no measurement error»
[@patterson2018sedentary]
— both false here; (ii) T2D is the outcome **most exposed to reverse causation**, since «an estimated
27% of those with the condition have no formal diagnosis, therefore having the condition may have
preceded ascer- tainment of exposure data»
[@patterson2018sedentary]
— undiagnosed pre-existing T2D can raise baseline sitting, inflating the association. The direction of
the dietary-mediation mechanism (TV -> snacking -> energy surplus -> T2D) also means part of this is
*diet acting through TV*, not sitting per se.

## Why believe it less than the point estimates suggest — measurement

Sedentary time is mostly self-reported, and «Misclassiﬁcation of sedentary exposure would potentially
dilute the association in our analysis, resulting in possible underestimation of effect size»
[@patterson2018sedentary].
So the honest reading runs **toward larger, not smaller** true effects for total sitting (attenuation
toward the null) — but with wide uncertainty on WHERE the curve bends. This is the same self-report
attenuation mechanism catalogued for diet in [[Measurement Error in Dietary Assessment]], transported to
sedentary exposure; a null/shallow arm is weak evidence of no gradient. (TV's *better* self-report
validity is one reason its signal reads larger than total sitting's — measurement, not only biology.)

## What this does NOT settle — the bout/break gap `type-G`

None of the 34 studies captured **how sitting is accumulated** — «None of the studies included in this
meta-analysis took into account accumu- lation pattern of sitting»
[@patterson2018sedentary].
So the common *break up prolonged sitting every 30 min* advice is **not tested here** — Patterson bears
on *total volume*, not bout structure. A gap that would need break-pattern trials to close.

## Acting on it (layer 3)

- **Effect depends on the replacement** — judge against the realistic alternative, not against standing
  still: «greater reductions in risk may occur when replacing sedentary time with strenuous exercise
  compared with walking for pleasure»
  [@patterson2018sedentary].
  Substituting sitting with movement banks the sitting-reduction *and* the activity-gain.
- **Where the lever is biggest:** the heaviest sitters (past the knee, where per-hour harm has
  accelerated) and anyone weighting T2D risk (cut TV specifically — the dietary co-exposure rides with
  it). For a lean, active, low-TV person the sedentary lever is already largely pulled.
- **Activity partly offsets sitting but does not license it** — high MVPA attenuates the total-sitting/
  mortality association (Ekelund 2016 interaction, on [[Physical Activity Dose and Mortality]]), but TV
  viewing is only *partly* offset, and offsetting demands a high activity dose (\~60-75 min/day MVPA). Sit
  less regardless.

## Provenance / independence

Single anchor, **Patterson 2018** (gold dose-response MA). It is a **type-F upgrade** of the held Ekelund
2016 sitting x PA interaction, NOT an independent type-E corroboration: Patterson cites Ekelund 2016 and
shares the observational sedentary-epidemiology lineage/cohorts, so their agreement is not independent
backing. `confidence: medium` — gold design and large n, discounted for observational status, near-
universal self-report, residual confounding, and (for T2D) reverse causation.
[inferred from @patterson2018sedentary]

## References

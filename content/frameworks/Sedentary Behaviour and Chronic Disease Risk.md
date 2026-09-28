---
type: framework
question: How much sedentary time (total sitting, TV viewing) raises mortality and type-2-diabetes risk, at what dose, and independently of how physically active a person is?
aliases: [Sitting Time and Mortality, TV Viewing and Health, Sedentary Time, Sedentary Behaviour, Sedentary Behaviour and Mortality]
authors: [Patterson, Richard; McNamara, Eoin; Tainio, Marko; de Sa, Thiago Herick; Smith, Andrea D; Sharp, Stephen J; Edwards, Phil; Woodcock, James; Brage, Soren; Wijndaele, Katrien; Ekelund, Ulf; Loh, Roland; Stamatakis, Emmanuel; Folkerts, Dirk; Allgrove, Judith E; Moir, Hannah J]
sources: [Patterson - Sedentary Behaviour Mortality Diabetes Dose-Response Meta-Analysis 2018, Ekelund - Joint Accelerometer Sedentary Mortality 2020, Loh - Interrupting Sitting Glucose Insulin 2019]
cluster: activity
nucleus: false
confidence: medium
self_critiqued: 2026-09-23
relationships:
  related_to: [The Physical Activity Paradox, Measurement Error in Dietary Assessment, Surrogate Outcomes]
  extends: [Physical Activity Dose and Mortality]
created: 2026-08-21
updated: 2026-09-23
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

## The bout/break gap — answered on surrogates, still open on hard outcomes `type-F` `type-G`

None of Patterson's 34 studies captured **how sitting is accumulated** — «None of the studies included in
this meta-analysis took into account accumu- lation pattern of sitting»
[@patterson2018sedentary].
So Patterson bears on *total volume*, not bout structure, and cannot test the common *break up prolonged
sitting every 30 min* advice. **Loh 2019** (gold SR+MA, 37 controlled crossover trials meta-analysed)
attacks exactly that axis — but the two are **not the same quantity**, which is why Loh *fills* the gap
rather than confirming or contradicting Patterson:

| Parameter | Patterson 2018 | Loh 2019 | Same quantity? |
|---|---|---|---|
| Exposure | total *volume* of sitting (h/day) | *interruption* of a prolonged sitting bout with PA breaks | **No** — volume vs accumulation pattern |
| Design | prospective observational cohorts | randomised crossover lab trials (INT vs SIT) | **No** |
| Outcome | incident T2D, all-cause/CVD/cancer **mortality** | **postprandial glucose / insulin / TAG** (surrogates) | **No** — patient-important vs surrogate |

So Loh answers the *experimental, surrogate* version of the accumulation question, and leaves the
*patient-important-outcome* version open — the gap splits rather than closes.

**What Loh shows (all on surrogate endpoints).** Interrupting sitting with PA breaks vs continuous
sitting moderately attenuates postprandial markers: glucose SMD -0.54 (95% CI -0.70, -0.37), insulin
-0.56 (-0.74, -0.38), and — smallest, and with possible publication bias — TAG -0.26 (-0.44, -0.09;
corrected to \~-0.20 under severe-selection adjustment).
[@loh2019] These are all **surrogates, not
patient-important outcomes** — the translation is explicitly *assumed*: «Assuming that the acute
metabolic effects we detected translate into long term meta- bolic benefits, PA breaks might be an
alternative or adjunct to a single structured aerobic exercise bout».
[@loh2019] -> [[Surrogate Outcomes]]

**Who benefits more — a route-(b) effect-modification signal on BMI.** Meta-regression finds the
glycaemic effect *grows* with BMI (glucose beta -0.05, 95% CI -0.09, -0.01; insulin -0.05, -0.10,
-0.006; TAG not associated) — «greater glycaemic attenuation in people with higher BMI».
[@loh2019] This is positive interaction
evidence, so it clears the route-(b) bar in principle — but Loh flags it is **summary-data / observational
across studies**, needing within-subject confirmation, so treat it as a candidate modifier, not a settled
one. The heavier-sitter / higher-BMI stratum is where this small surrogate lever concentrates.

**Breaks vs one continuous exercise bout — a narrow, isocaloric edge.** When energy expenditure was
matched, PA breaks beat a single continuous bout only on glucose, and only just — «when EE was matched,
there was a small and statistically significant effect in favour of regu- lar PA breaks on post-prandial
glycaemia» (SMD -0.26, 95% CI -0.50, -0.02), with **no** significant difference for insulin (0.35, -0.37,
1.07) or TAG (0.08, -0.22, 0.37).
[@loh2019] And the edge is erased by volume:
«any such advantages are abolished with high amounts of daily exercise».
[@loh2019] So the decision this licenses is
narrow — breaks are an **alternative or adjunct for those who will not do structured exercise**
(especially higher-BMI), not a superior substitute for someone already exercising adequately.

**The patient-important-outcome version of the gap is still open — and the observational break evidence
is weak/null.** Loh's own discussion notes that breaks measured in cohorts do *not* carry hard outcomes:
the US Physical Activity Guidelines Advisory Committee «concluded that there was insufficient evidence
that bouts or breaks in SB are important factors in the relationship between SB and all-cause mortality,
and incidence of or mortality from CVD, cancer, or incident type 2 diabetes or weight status».
[@loh2019] So the surrogate lever is real
and moderate; whether *breaking up* sitting (as opposed to *sitting less in total*, which Patterson does
evidence) changes a patient-important outcome remains a **named gap** that break-pattern outcome trials
would need to close. The trials are also unblindable — you cannot blind an exercise break, so every one
carries performance/detection risk of bias by construction (a design constraint, not a defect).
[inferred from @loh2019]

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
  viewing is only *partly* offset. The offset *dose* is smaller than the self-report figure once it is
  **device-measured**: Ekelund 2020 (accelerometry, 9 cohorts, 44 370 adults) puts it at «about 30–40 min
  (median of medians=34 min ...) of MVPA per day» to attenuate the sedentary-mortality association — vs
  the \~60-75 min/day from self-report — with the high-MVPA third (\~34 min) carrying no significant
  sitting penalty and the risk concentrated in the low-MVPA third (\~2 min/day, worst cell +263%).
  [@ekelund2020joint] The two numbers are
  **not the same quantity** (device vs self-report; attenuate vs eliminate) and the paper attributes the
  drop partly to measurement, so read this as a **type-F device refinement** of the held offset, not an
  independent confirmation (same author, overlapping cohorts) — full parameter table and the
  within-instrument narrowing on [[Physical Activity Dose and Mortality]]. Sit less regardless.

## Provenance / independence

Primary anchor, **Patterson 2018** (gold dose-response MA), plus **Ekelund 2020** as a device-measured
type-F refinement of the offset dose only (see the offset bullet above). It is a **type-F upgrade** of the
held Ekelund 2016 sitting x PA interaction, NOT an independent type-E corroboration: Patterson cites
Ekelund 2016 and shares the observational sedentary-epidemiology lineage/cohorts, and Ekelund 2020 shares
first-authorship and overlapping cohorts with the held Ekelund MAs — so none of these agreements is
independent backing (no `[E-independent]` token). `confidence: medium` — gold designs and large n,
discounted for observational status, near-universal self-report (Patterson), residual confounding, and
(for T2D) reverse causation; Ekelund 2020's device measurement corrects the offset dose but does not lift
the page's overall certainty (same lineage).

**Loh 2019** enters as the *experimental / surrogate* leg on a **different question** (bout structure, not
volume), so it is a **type-F gap-fill, not type-E corroboration** of Patterson — different exposure,
design, and outcome (the parameter table above). Independence guard, run: co-author **Stamatakis** also
sits on the held device-PA source ODonovan - Weekend Warrior Accelerometer Mortality 2024, and Loh's
discussion explicitly *rests on* Ekelund's offset figure — so no agreement here is independent backing
(no `[E-independent]` token). Loh does **not** move the page's `confidence: medium`: it adds a moderate
surrogate finding, not a hard-outcome one, and its own hard-outcome (break -> mortality/incidence)
evidence is weak/null.
[inferred from @patterson2018sedentary]

## References

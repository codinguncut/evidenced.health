---
type: framework
question: Does a consumer wearable activity tracker increase physical-activity participation (and cut sedentary time) enough to be a worthwhile adherence / behaviour-change lever?
aliases: [Activity Tracker, Fitness Tracker, Wearable Activity Tracker, Fitbit, Step Counter, Wearables and Physical Activity, Pedometer Intervention, Activity Monitor]
authors: [Brickwood, Katie-Jane; Watson, Greig; O'Brien, Jane; Williams, Andrew D]
sources: [Brickwood - Wearable Activity Trackers Physical Activity Meta-Analysis 2019]
cluster: activity
nucleus: false
confidence: low
relationships:
  extends: [Physical Activity Dose and Mortality]
  related_to:
    - Sedentary Behaviour and Chronic Disease Risk
    - Continuous Glucose Monitoring as a Health Intervention
    - Surrogate Outcomes
    - Layer 1 - Ranking Interventions for a Stratum
    - Measurement Error in Dietary Assessment
created: 2026-09-01
updated: 2026-09-01
---

**The decision this page changes.** Is a consumer wearable activity tracker (Fitbit, Jawbone, and
kin) a worthwhile *adherence / behaviour-change* lever — a device that gets a person to move more and
keeps them moving? This is a Layer-3 *adherence-is-part-of-the-effect* / *structural-leverage*
question, not a new dose-response fact about activity itself: the tracker does not change what a dose
of activity *does* (that lives at [[Physical Activity Dose and Mortality]]) — it is a candidate tool
for *reaching and sustaining* the dose.

## Verdict — a small, real short-term boost to activity; durability unproven; effect on a surrogate

A consumer tracker moves physical-activity *participation* up by a small-to-moderate amount over the
short term, but on **low-to-very-low certainty**, and the outcome measured is the activity itself (a
surrogate), not a patient-important endpoint. The one thing the device is *pitched to solve* —
the well-known decay of activity-intervention effects over time — is exactly what this evidence does
**not** establish.

Brickwood et al. 2019 (SR + random-effects MA, 28 RCTs / 3646 participants across 9 countries,
apparently-healthy through chronic-condition adults; trackers used either as the whole intervention
[*wearable-based*] or inside a broader programme [*multifaceted*]) vs interventions **without** tracker
feedback. All SMDs are *standardized* mean differences (pooled SD units), not clinical units; the
raw-unit conversions below come from the source's own pooled-SD back-conversion and are the fragile
object — the SMD and its interval are the robust one. [@brickwood2019wearable]

### The four pooled effects (Results-body figures; carry CI + I^2 + GRADE)

- **Daily step count — the cleanest signal.** «There was a significant increase in step count
  following the intervention versus control comparator (SMD 0.23; 95% CI 0.15 to 0.32; P<.001; Figure
  3) across all studies in the meta-analysis, representing an approximate increase of 627 steps (95% CI
  417 to 862 steps) per day. Heterogeneity was low [88] and nonsignificant (I2=3%; P=.42).» GRADE
  **low** (downgraded twice: risk of bias, indirectness). Step data were objectively measured. The
  \~627 steps/day (CI 417-862) is the most interpretable anchor on the page. [@brickwood2019wearable]
- **Moderate + vigorous PA (MVPA).** «significant increase in minutes per day spent in MVPA ... (SMD
  0.28; 95% CI 0.14 to 0.41; P<.001; Figure 4)», I^2=46% (moderate, significant). GRADE **very low**
  (downgraded 3x: bias, inconsistency, indirectness). The source's raw-unit conversion — «an
  approximate increase of 75 min (95% CI 42 to 109 min) per day of MVPA» — is implausibly large and
  should be read as a pooled-SD-conversion artifact across heterogeneous, partly self-reported measures,
  not a literal +75 min/day; the SMD 0.28 is the object to trust. [@brickwood2019wearable]
- **Energy expenditure.** «significant increase in energy expenditure ... (SMD 0.32; 95%CI 0.05 to
  0.58; P=.02; Figure 5)», I^2=33% (low, ns); «approximate increase of 300 kcal (95% CI 32 to 579) in
  energy expenditure per week». GRADE **low**. Measured by self-report questionnaire (Paffenbarger /
  IPAQ) in all five studies — the weakest-measured outcome. [@brickwood2019wearable]
- **Sedentary behaviour — NOT significant.** «nonsignificant decrease in sedentary behavior ... (SMD
  −0.21; 95% CI -0.46 to 0.03; P=.09; Figure 6)», I^2=60% (moderate, significant); «approximately 37
  min (95% CI −81 to 5 min) less spent in sedentary behavior». GRADE **very low**. The interval crosses
  zero: a tracker aimed at *adding* activity does not reliably *cut sitting* — and the source notes
  interventions that specifically target sedentary behaviour are more effective than PA-promotion that
  hopes to reduce sitting as a by-product -> [[Sedentary Behaviour and Chronic Disease Risk]]. [@brickwood2019wearable]

The abstract reports marginally different pooled SMDs (step 0.24 [0.16-0.33]; MVPA 0.27 [0.15-0.39];
EE 0.28 [0.03-0.54]; sedentary −0.20 [−0.43 to 0.03]) — rounding/recomputation differences from the
Results-body values quoted above; the direction, significance pattern, and certainty are identical. [inferred from @brickwood2019wearable]

## Durability — the crux, and it is NOT established

The device is *sold* on solving activity decay, and the source concedes the problem while showing its
own evidence cannot demonstrate the fix.

- **The measured effects are SHORT-TERM.** «Although findings were not significant in all studies,
  short-term interventions utilizing a consumer-based wearable activity tracker generally resulted in
  increased physical activity participation.» The pooled estimate is a short-horizon quantity. [@brickwood2019wearable]
- **Longer trials showed WORSE adherence.** «Actual wear time of the activity tracker varied, ranging
  from over 90% wear time [21,22] to all participants ceasing to wear the device by the end of the
  intervention [32] ... The 2 studies that were 12 months or longer [32,37] reported lower adherence
  rates compared with shorter duration studies. Issues with long-term adherence to lifestyle and
  behavioral change interventions are well recognized.» So the *only* long-horizon data point runs the
  wrong way for the durability claim. [@brickwood2019wearable]
- **The novelty-factor caveat.** «Given the potential novelty factor associated with the use of
  consumer-based wearable activity trackers, further investigation into their long-term usage and
  effectiveness would be useful.» The authors themselves flag that the short-term boost may be a
  wear-it-because-it's-new effect. [@brickwood2019wearable]
- **The authors' own framing is a TOOL for clinicians, not a self-sufficient durable lever.** «The
  effects of physical activity interventions are generally short term, with ongoing contact from health
  professionals increasing long-term adherence to physical activity participation. Therefore,
  consumer-based wearable activity trackers have the potential to be included as an effective tool to
  assist health professionals to provide ongoing monitoring and support to patients with minimal
  resource expenditure.» The structural-leverage claim is *conditional on ongoing human contact*, not
  demonstrated for the device alone over the long run. [@brickwood2019wearable]

## What the effect is made of, and how to weight it

- **Standalone vs bundled.** «even without supporting behavior change techniques, the use of a
  consumer-based wearable activity tracker could be effective in increasing physical activity
  participation» — so the device carries some effect on its own. But «intervention groups that were
  multifaceted in nature appeared to have a greater effect on physical activity participation ... than
  those that included just the use of a consumer-based wearable activity tracker» (steps: wearable-only
  SMD 0.20 [0.08-0.33] vs multifaceted 0.26 [0.12-0.41]). The tracker is a *component* that adds most
  when bundled with counselling, education, or financial incentives — consistent with the
  ongoing-contact durability point. [@brickwood2019wearable]
- **Risk of bias — one unavoidable flaw.** «All studies were assessed as high risk of bias for
  performance bias because of the nature of the intervention and control conditions making blinding
  impossible.» A tracker cannot be blinded — a behaviour intervention people *know* they are receiving
  — so the whole evidence base carries irreducible performance bias, and the Hawthorne/expectancy
  component cannot be separated from the device effect. Otherwise studies were generally low risk. This
  is the same blinding-is-impossible problem the whole PA-intervention literature carries. [@brickwood2019wearable]
- **The device's own step counts over-read.** «a recent review into the use of Fitbit activity trackers
  suggests that steps are overestimated in free-living conditions» — a measurement caveat on trackers as
  measuring instruments (distinct from their behaviour-change role; the trial *outcomes* were mostly on
  independent accelerometers). [@brickwood2019wearable]
- **Outcome is a surrogate.** Every effect here is on *activity participation*, not on mortality,
  cardiometabolic, or function endpoints. The transmission from "+627 steps/day" to a patient-important
  outcome runs through [[Physical Activity Dose and Mortality]] (where \~+600-700 steps/day near the
  low-active end is a meaningful mortality-relevant increment) — but that transmission is an inference,
  not measured in this MA -> [[Surrogate Outcomes]].

## Where it sits in the Layer-1 ranking

For a reasonably-healthy, already-somewhat-active person, this is a **small, low-certainty lever**: it
does not change the activity dose-response, only the odds of reaching/holding a dose, and only the
short-term odds are shown. It ranks as an *adherence aid*, not a big rock — most useful for a
near-inactive person (large baseline gap, where +627 steps/day is worth most) and most credible when
paired with human contact rather than as a stand-alone gadget. The device is not a substitute for the
activity; it is a candidate scaffold for doing it. -> [[Layer 1 - Ranking Interventions for a Stratum]]

## Gaps

- **Long-term (>12 month) durability of the device effect is unestablished** — the two long trials
  showed *lower* adherence, and no pooled long-horizon estimate exists. No SR/MA of long-follow-up
  wearable-tracker RCTs is held or known to exist; kept as an open gap, not a tracked await (nothing
  specific to acquire). [@brickwood2019wearable]
- **No patient-important endpoint** — the MA cannot say whether the activity boost translates into
  mortality, cardiometabolic, or function benefit; that is `G (needs aggregation)` across a different
  evidence base.
- **Self-monitoring consumer DEVICES may form a future cross-cutting concept.** A wearable activity
  tracker and a [[Continuous Glucose Monitoring as a Health Intervention|CGM]] answer the *same
  question class* — does a consumer self-monitoring wearable that surfaces a real-time personal signal
  change behaviour and, through it, a health outcome? Both land the same shape of answer: a modest
  effect on a *surrogate* (steps / HbA1c), high heterogeneity, low certainty, and unproven durability.
  Flagged as a candidate concept, **not built** — it needs a second device class beyond these two
  before a cross-source synthesis is warranted. [inferred from @brickwood2019wearable]

## References

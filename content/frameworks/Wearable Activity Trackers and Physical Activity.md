---
type: framework
question: Does a consumer wearable activity tracker or self-monitoring smartphone app increase physical-activity participation (and cut sedentary time) enough to be a worthwhile adherence / behaviour-change lever?
aliases: [Activity Tracker, Fitness Tracker, Wearable Activity Tracker, Fitbit, Step Counter, Wearables and Physical Activity, Pedometer Intervention, Activity Monitor, Physical Activity App, Smartphone App for Physical Activity, mHealth Physical Activity Intervention, Apps and Activity Trackers]
authors: [Brickwood, Katie-Jane; Watson, Greig; O'Brien, Jane; Williams, Andrew D; Laranjo, Liliana; Ding, Ding; Heleno, Bruno; Kocaballi, Ahmet Baki; Quiroz, Juan Carlos; Bates, David Westfall]
sources: [Brickwood - Wearable Activity Trackers Physical Activity Meta-Analysis 2019, Laranjo - Apps Activity Trackers Physical Activity 2020]
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
updated: 2026-10-06
self_critiqued: 2026-10-06
---

**The decision this page changes.** Is a consumer wearable activity tracker (Fitbit, Jawbone, and
kin) a worthwhile *adherence / behaviour-change* lever — a device that gets a person to move more and
keeps them moving? This is a Layer-3 *adherence-is-part-of-the-effect* / *structural-leverage*
question, not a new dose-response fact about activity itself: the tracker does not change what a dose
of activity *does* (that lives at [[Physical Activity Dose and Mortality]]) — it is a candidate tool
for *reaching and sustaining* the dose.

<div class="recent-update" data-last-updated="2026-10-06">

## Verdict — a small, real short-term boost to activity; durability unproven; effect on a surrogate

A consumer tracker moves physical-activity *participation* up by a small-to-moderate amount over the
short term, but on **low-to-moderate certainty at best** (Brickwood: low for steps, very low for MVPA and
sedentary time; Laranjo: low-to-moderate overall), and the outcome measured is the activity itself (a
surrogate), not a patient-important endpoint. The one thing the device is *pitched to solve* —
the well-known decay of activity-intervention effects over time — is exactly what this evidence does
**not** establish.

A second gold MA covering self-monitoring **apps as well as trackers** (Laranjo 2020, healthy adults,
mean 13 weeks) lands on the same short-term picture. Its step-measured gain (\~750 steps/day) sits close
to Brickwood's \~630. Its widely quoted **1850 steps/day** is not a step-measured quantity (see the
section below). It does not close the durability gap. [inferred from @brickwood2019wearable; @laranjo2020]

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

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Apps and trackers in healthy adults — Laranjo 2020

Laranjo et al. pooled RCTs of a smartphone app or tracker with *automated, continuous* self-monitoring
and feedback, in adults 18-65 without chronic disease (high BMI allowed). Comparators were true controls
(12 trials) or active controls that also had an app or tracker (16). «Thirty-­five studies met inclusion criteria and 28 were included in the meta-­analysis (n=7454 participants, 28% women).»
«Study duration varied between 2 and 40 weeks (mean duration: 13 weeks).» Eight of the 28 interventions
were app-only, with no tracker. [@laranjo2020]

### The 1850-steps headline is not a step count

- **The headline figure.** The pooled effect is a standardised difference across *every* outcome type
  — steps (21 trials), MVPA (4), and self-reported days exercised, total PA or METs (3): «The meta-­analysis showed a positive effect on physical activity favouring interventions, including smartphone apps or activity trackers versus true and active control (SDM 0.350, 95% CI 0.236 to 0.465, p<0.0001, I2=69%, T2=0.051), corre- sponding to an increase of 1850 steps per day (95% CI 1247 to 2457) (figure 3).»
  [@laranjo2020]
- **How it was made.** The 1850 is that mixed-outcome SDM converted back into step units: «Estimates of mean physical activity effect sizes were also converted from SDM to number of steps per day for ease of interpretation (online supplemental eMethods 4).»
  [@laranjo2020]
- **What the step-measured trials show.** Pooled on their own, the trials that measured steps give
  less than half: «Grouping of studies by outcome type did, however, reveal a lower raw difference in means for daily step count (21 studies; 753.2, 95% CI 440.4 to 970.7).»
  The abstract, discussion and conclusion all report 1850. [@laranjo2020]
- **Decision consequence.** Quote \~750 steps/day (CI \~440-970) as the step gain over a mix of true and
  active controls, not 1850 (the 13-week mean duration is for all 28 trials). The 1850 is a mixed-outcome
  standardised effect re-expressed in steps. Why it exceeds the step-only 753 is not shown: the non-step
  outcomes or the SD used for the conversion (eMethods 4, not held) could drive it. Brickwood's 627 is also a back-conversion, but of a *steps-only* SMD.
  [inferred from @laranjo2020; @brickwood2019wearable] (type-B)

### Same quantity? Brickwood vs Laranjo

| Parameter | Brickwood 2019 | Laranjo 2020 | Same quantity? |
|---|---|---|---|
| Population | healthy through chronic-condition adults | 18-65, no chronic disease (high BMI allowed) | NO — Laranjo narrower |
| Device | consumer wearable tracker | app OR tracker, automated continuous feedback | PARTLY — Laranjo adds 8 app-only trials |
| Comparator | intervention without tracker feedback | true control (12) or active app/tracker control (16) | NO — Laranjo includes active controls |
| Step estimate | SMD 0.23 (0.15-0.32) -> 627 (417-862) steps/d; I2 3% | raw MD 753 (440-971) steps/d, 21 trials | PARTLY — same unit, different contrast (13 of 21 Laranjo step trials are active-control); different estimators |
| Headline | per-outcome SMDs | SDM 0.350 all outcomes -> "1850 steps/d" | NO — not a step-measured quantity |
| Horizon | short-term; 2 trials >=12 mo | 2-40 wk, mean 13 | NEAR — both short |
| Certainty | GRADE low (steps) | GRADE low-to-moderate (overall body) | NO — different graded objects |
| Trial base | 28 RCTs / 3646 (11 in the step MA) | 28 RCTs / 7454 (21 in the step pool) | 9 shared, all in Brickwood's step MA; 7 in Laranjo's step pool |

[inferred from @brickwood2019wearable; @laranjo2020]

**Classification: type-F, not type-E.** The closest-matched row is the step estimate, and there the two
MAs agree: roughly +600-750 steps/day over control at a few months. The author lists do not overlap.
But 9 trials sit in both pools (Ashe, Ashton, Brakenridge, Cadmus-Bertram, Finkelstein, Martin, Melton,
Poirier, Thorndike), all 9 among the 11 trials of Brickwood's step MA, and Laranjo cites Brickwood as an
earlier review. Brickwood's 627 therefore rests mostly on trials Laranjo also pools, though 14 of
Laranjo's 21 step trials are new to it. The agreement is largely shared-data agreement. What Laranjo adds is the extension to apps and to a no-chronic-disease stratum,
plus the component analysis below. [inferred from @brickwood2019wearable; @laranjo2020]

### Device vs components — what the moderator analysis does and does not show

- **Tracker vs app, device-only vs bundled: no detectable difference.** «Other subgroup analyses were not statistically significant, including analyses of studies where the intervention included an activity tracker or just an app, and studies where the tracker or the app were the only difference between intervention and control groups (online supplemental eTable 15).»
  [@laranjo2020]
  These are tests of *difference between subgroups*. They do not show the device-only trials had no
  effect. Only five trials isolated the device (and the tracker-vs-app split is 20 vs 8), so this is low
  power, not evidence of equivalence. [inferred from @laranjo2020]
- **This weakens the bundling reading above.** Brickwood's *multifaceted > wearable-only* (steps SMD
  0.26 vs 0.20, overlapping CIs) was an «appeared to» comparison. Laranjo's direct subgroup test of
  device-only vs the rest is null, and its adjusted meta-regression term (Model 4) points the other way,
  not significantly (+0.374, −0.005 to 0.752, p=0.053). The constructs differ: Brickwood's
  *wearable-based* arm still includes apps, emails or texts, while Laranjo's variable flags trials where
  the device was the only between-arm difference. Neither MA shows that bundling *as such* adds effect. [inferred from @brickwood2019wearable; @laranjo2020]
- **Text messaging, personalisation and retention: exploratory associations.** «Overall, text messaging, personalisa- tion, and retention rate in the intervention were all significantly associated with intervention effectiveness, consistently across several models.»
  Subgroup SDMs: text messaging 0.495 (0.335-0.654); personalisation 0.541 (0.365-0.718). Laranjo
  calls all of this exploratory, citing «mass significance and uncontrolled confounding». Six of 27
  subgroup tests were significant, 11 of the 27 were post hoc, and personalisation was coded from
  authors' mention of the term or synonyms. Another of the six significant subgroups was trials whose authors mentioned
  conflicts of interest (SDM 0.529, 0.388-0.671). All are between-trial associations, confounded with
  whatever else those interventions bundled. [@laranjo2020]
- **How to use it.** If someone uses an app or tracker, pick one that sends prompts or text messages
  and sets personalised goals. This is a cheap implementation choice backed by hypothesis-generating
  evidence. It is not an established effect modifier, so it falls short of the route-(b) bar.
  [inferred from @laranjo2020]
- **Outcome measurement.** 14 of 28 trials read the outcome off a consumer app or tracker, 11 used a
  research-grade accelerometer, and 3 used self-report. [@laranjo2020]
  Brickwood notes that Fitbit over-counts steps in free-living use (below), so the device-read half of
  the base deserves a measurement caveat. [inferred from @laranjo2020; @brickwood2019wearable]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

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
- **Laranjo: usage fades even in short trials.** «Furthermore, four studies reported on engagement changes over time, showing progres- sively lower usage43 44 51 55 despite their short duration—a phenomenon known as the law of attrition of health informatics interventions.78 Only one of these studies found a statistically»
  ... «significant improvement in physical activity at the end of the intervention,55 which suggests the importance of continued engagement for effectiveness.»
  Retention (the share of the intervention arm completing follow-up, not device use) predicted effect
  size in the meta-regression (Model 4: +0.022, 0.009-0.036; 0.011-0.013 in Models 1-3).
  Trial length did not (−0.007, −0.019 to 0.004, p=0.192). [@laranjo2020]
  Trials ran 2-40 weeks, so the null on duration says nothing about the 12-month question. [inferred from @laranjo2020]
- **The usage dose is unknown.** «It thus remains unclear what the right ‘dose’ of app or tracker usage may be, or how it might vary for different people and circumstances.»
  [@laranjo2020]
- **Both MAs point the same way.** The measured effect is short-term, and both flag falling use over
  time as the threat to it (Brickwood: lower adherence in the two >=12-month trials; Laranjo: usage
  decay in four short trials). The trial sets overlap heavily (9 shared, all in Brickwood's step MA). Neither has the long follow-up that would show whether the effect survives once
  novelty and usage fade. [inferred from @brickwood2019wearable; @laranjo2020]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

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
  measuring instruments (distinct from their behaviour-change role). Brickwood's step outcomes were
  measured with «a range of accelerometers or pedometers». [@brickwood2019wearable]
  In Laranjo, 14 of 28 trials read the outcome off the consumer device itself. [@laranjo2020]
- **Outcome is a surrogate.** Every effect here is on *activity participation*, not on mortality,
  cardiometabolic, or function endpoints. The transmission from "+627 steps/day" to a patient-important
  outcome would have to run through [[Physical Activity Dose and Mortality]], whose step gradient compares
  people who habitually differ in steps. A \~600-700-step induced gain is a fraction of one inter-quartile
  gap there, and no held source shows an induced gain carries the between-person hazard ratio. The
  transmission is unmeasured -> [[Surrogate Outcomes]].
- **Laranjo's transmission claim leans on the converted number.** «These results are of public health importance according to recent evidence showing that any physical activity, regardless of inten- sity, is associated with lower mortality risk in a dose–response manner85 and that an increase of 1700 steps/day is significantly associated with lower mortality rates.86»
  [@laranjo2020]
  The 1700-steps association comes from a cohort the wiki does not hold (Laranjo's ref 86, Lee 2019, in
  older women), a population Laranjo's own inclusion criteria exclude. The
  comparison sets it against the converted 1850, not the step-measured \~750. It also sets a
  between-person difference in habitual steps against a \~3-month between-arm trial difference. Those
  are different quantities, and the trial difference has not been shown to last. So "a tracker buys
  the mortality-relevant increment" is unsupported. What is supported is a \~600-750-step gain for a few
  months; its mortality relevance is unmeasured. [inferred from @laranjo2020] -> [[Physical Activity Dose and Mortality]]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Where it sits in the Layer-1 ranking

For a reasonably-healthy, already-somewhat-active person, this is a **small, low-certainty lever**: it
does not change the activity dose-response, only the odds of reaching/holding a dose, and only the
short-term odds are shown. It ranks as an *adherence aid*, not a big rock — most useful for a
near-inactive person (large baseline gap, where the step-mortality gradient is steepest, if an induced
gain transfers along it, which is unshown) and most credible when
paired with human contact rather than as a stand-alone gadget. The device is not a substitute for the
activity; it is a candidate scaffold for doing it. -> [[Layer 1 - Ranking Interventions for a Stratum]]

Laranjo leaves this ranking where it was. App-only interventions showed no detectable difference from
tracker interventions (an exploratory subgroup null; equivalence not shown), and for a smartphone owner
an app is near-free. That lowers the cost side of the
lever, not its effect size. [inferred from @laranjo2020]

**Confidence: low.** The best-supported element is the direction: app or tracker interventions raise
step counts over control in the short term (2-40 weeks). The size (\~600-750 steps/day) is low-certainty.
A second MA does not lift the grade, because on steps it largely re-pools the first one's trials.
Both MAs find a significant positive short-term effect. Laranjo's all-outcome pooled effect stays
significant after trim-and-fill despite signs of publication bias in the funnel plot; no bias
adjustment is reported for the step-only estimate. The two step estimates agree, but 9 trials sit in
both pools (all of them in Brickwood's step MA), so the agreement is largely shared data: it refines the estimate, it does not corroborate it
independently. Durability and outcome
transmission stay low-certainty. Each MA rates its own evidence low (Brickwood steps) or
low-to-moderate (Laranjo overall). Both carry irreducible performance bias, since a behaviour
intervention cannot be blinded. [inferred from @brickwood2019wearable; @laranjo2020]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Gaps

- **Long-term (>12 month) durability of the device effect is unestablished** — the two long trials
  showed *lower* adherence, and no pooled long-horizon estimate exists. No SR/MA of long-follow-up
  wearable-tracker RCTs is held or known to exist; kept as an open gap, not a tracked await (nothing
  specific to acquire). [@brickwood2019wearable]
- **Durability is still open after a second MA.** Laranjo's trials ran at most 40 weeks (mean 13).
  The authors ask for «Longer studies ... to assess the impact of different intervention components on
  long-term engagement and effectiveness». [@laranjo2020]
- **The usage-to-effect curve is unmeasured.** Engagement was reported in 18 of 28 trials, with
  inconsistent metrics. No usage dose-response can be estimated. [@laranjo2020]
- **Strata outside the evidence.** Laranjo's eligibility is 18-65 (a few trials enrolled to \~70) with
  no chronic disease, and its pool is 28% women. Brickwood includes chronic-condition adults but is tracker-only. Neither
  supports an app result for older or chronically ill adults. [inferred from @brickwood2019wearable; @laranjo2020]
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

</div>

## References

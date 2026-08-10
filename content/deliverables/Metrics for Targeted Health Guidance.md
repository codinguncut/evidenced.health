---
type: deliverable
title: "What to Measure: A Minimal Health Checklist"
icon: material-symbols-light:vital-signs
question: Which metrics/markers legitimately serve as decision TARGETS for individual guidance (versus surrogates that fail transmission to a patient-important outcome), and how should baseline risk enter (relative versus absolute)?
sources: [Richardson - CGM Behaviour Change 2024, CTT - Statin Intensive LDL Lowering Meta-Analysis 2010, ESC - CVD Prevention Guidelines 2021, Jha - Smoking Hazards Cessation Benefits 2013, Nasir - Coronary Artery Calcium Statin Candidates MESA 2015, Global BMI - BMI All-Cause Mortality 2016, Taylor - Personal Fat Threshold Normal Weight Type 2 Diabetes 2015, Cruz-Jentoft - Sarcopenia European Consensus EWGSOP2 2019, Vermeiren - Frailty Prediction Negative Health Outcomes Meta-Analysis 2016, Marston - ApoB Containing Lipoproteins Risk 2022, BPLTTC - Blood Pressure Lowering Primary and Secondary Prevention 2021, Kodama - Cardiorespiratory Fitness and Mortality 2009, Celis-Morales - Grip Strength Mortality 2018, de Santana - Low Muscle Mass Mortality 2021, Emerging Risk Factors Collaboration - CRP Coronary Stroke Mortality 2010, CCGC - CRP Coronary Heart Disease Mendelian Randomization 2011, Liu - Triglyceride-Glucose Index Cardiovascular Mortality Meta-Analysis 2022, Snyder - Testosterone Treatment Fractures 2024, Parker - Allostatic Load Mortality Meta-Analysis 2022, GRADE - Handbook]
confidence: medium
created: 2026-07-30
updated: 2026-08-10
self_critiqued: 2026-08-10
---

A number earns a place on a person's dashboard only if it does one of two jobs: it **places** them in
a stratum the evidence stratifies on, or it **transmits** — moving it is evidenced to move a
patient-important outcome. Most numbers marketed as health metrics do neither cleanly. Some are
*surrogates* whose causal transmission to the outcome a person cares about is unestablished — a marker
can move the right way while mortality, events, or function do not. Others are prognostic *markers*
that predict risk without being *targets* you can move to change it. The whole spine below is the
two-part test — **does knowing it move a decision, and does moving it move the outcome?** — applied
per metric, symmetrically.

Baseline risk is the multiplier that turns a constant relative effect into a stratum-specific absolute
benefit; it is why the same number licenses action in one person and not another. Capture is in scope;
interpreting or acting on a number is a clinician's act, out of scope.

## What makes a number a target, not just a surrogate? (the transmission test)

A **surrogate** is a marker that substitutes for an outcome *in the evidence* — measured because the
outcome people care about is rare or slow. A **target** is a number to steer toward. The two are not
the same: a surrogate becomes a legitimate target **only if its causal transmission to a named
patient-important outcome is itself evidenced** — the marker can move the intended way while mortality,
events, function, or QoL do not. So the test on any proposed target is not *can we measure
it?* but *is the link from moving the marker to moving the outcome an evidenced claim?* -> [[Surrogate Outcomes]]

**The failure case — glucose in the metabolically healthy.** CGM-based feedback moves a surrogate
modestly (HbA1c -0.28%) but shows «non-significant effects on time above range, BMI, and weight»
[@richardson2024], and the non-diabetic evidence is 3
obesity trials — essentially no trial data where CGMs are now marketed
[@richardson2024]. Marker moves; transmission to any hard
outcome in the healthy is unevidenced -> [[Continuous Glucose Monitoring as a Health Intervention]].

**The success case — apoB/LDL and blood pressure.** Here the transmission *is* evidenced. Lowering
LDL/apoB reduced hard endpoints in randomised evidence — «all-cause mortality was reduced by 10% per
1·0 mmol/L LDL reduction (RR 0·90, 95% CI 0·87–0·93; p<0·0001)»
[@ctt2010] — and the benefit is
«irrespective of the drug(s) used to achieve such change»
[@esc2021], the invariance that marks a real target
(lever: [[Dietary Fat Types and Health]] -> [[LDL ApoB and Cumulative Exposure]]). Blood-pressure
targets likewise track hard outcomes — «associated with significant reductions in the risk of major
stroke, HF, and CV death» [@esc2021] -> [[Blood Pressure]].

**The asymmetry is evidenced per metric, never inferred from measurability.** Glucose is easy to
measure and fails the test; apoB and BP earn target status on transmission evidence, not on how cleanly
they read off an instrument — the streetlight effect: measurability is not importance.

## The numbers that PLACE you

Placement is putting a person in a stratum with a cheap number, before any target is set. It needs
**prognostic data only** — route (a): absolute benefit = relative effect x baseline risk, and the
relative effect is left unchanged, so no subgroup / effect-modification claim is required
. These numbers predict risk; most are not themselves the thing you move.

**The placement engine — a risk-prediction score and its threshold.** A 10-year CVD risk score
(SCORE2 / SCORE2-OP) converts every relative effect in the fabric into an absolute one for a named
stratum [@esc2021]. The **threshold**, not the percentage,
is the decision — and it is age-banded: the same 8% is *very high* under 50 and *high* at 72, because
«Age is the major driver of CVD risk» [@esc2021].
The category flips on case inputs (smoking, BP, cholesterol, region) that a stratum does not contain.

**Smoking status — the largest single placement signal, free to ask.** It is a SCORE2 input that
shifts the read-off substantially, and on its own it separates strata by a wide margin: «the rate of
death from any cause among current smokers was about three times that among those who had never smoked
(hazard ratio for women, 3.0; 99% confidence interval [CI], 2.7 to 3.3; hazard ratio for men, 2.8; 99%
CI, 2.4 to 3.1)» [@jha2013]. The number earns
its place because the stratum it defines is so consequential — «Cessation before the age of 40 years
reduces the risk of death associated with continued smoking by about 90%»
[@jha2013] — while the cessation lever itself
ranks in the Big Rocks, not here.

**CAC as a reclassifier — earns its cost only if it moves the estimate across a threshold.** In the
grey zone, a zero coronary-artery-calcium score re-stratifies about half of statin-eligible people
into a low-benefit range (roughly one-half reclassified as no longer eligible)
[@nasir2015]. It de-risks the
*decision*, not the biology. The downstream statin dose-response is the lipid lead's, not derived here
-> [[Statins for Primary Prevention and the Power of Zero CAC]].

**BMI — the cheap placement number, with a named failure mode.** Its raw curve misleads: the
protective-overweight *obesity paradox* is a bias artifact that inverts to harm once smoking and
reverse causation are stripped [@globalbmi2016]. So
BMI places crudely; **lead with the depot-specific metric.** Waist / visceral fat is a better
placement marker than total mass because it tracks the harmful intra-organ (ectopic) fat — but the
marker is not itself the agent: «Extent of visceral fat accumulation is a surrogate marker for
intra-organ fat excess, but is not pathophysiologically related to adverse metabolic consequences»
[@taylor2015pft]. The
marker points to the target (liver / pancreas fat); it is not the target. The body-fat -> outcome
derivation is deferred out -> [[Body Fat]] -> [[Ectopic Fat and Depot-Specific Risk]].

**The age-related reserve strata — cheap strength beats the scale.** Grip strength or a chair-stand
places a person into the sarcopenia stratum, because «strength is better than mass in predicting
adverse outcomes» [@cruzjentoft2019].
Frailty places into a high-baseline-risk stratum where absolute benefit scales up by route (a) alone
[@vermeiren2016frailty]
-> [[Sarcopenia Definition and Diagnosis]], [[Frailty]].

## The numbers that TRANSMIT — the target side

A **transmitting** metric is one you can steer toward *because moving it is evidenced to move a
patient-important outcome* — the evidenced causal link (transmission) that separates a **modifiable
target** from a mere **prognostic marker**. Grouped by system below; each row carries the transmission
magnitude only — the *exposure* dose-response lives at the linked lever page.

### Lipids — measure apoB, dose on lowering

Which number: **apoB (particle count) outranks LDL-C**, since only apoB survives mutual adjustment among
the lipids (aHR 1.27 per SD, 1.15-1.40) [@marston2022],
and measure apoB where LDL-C and particle number discord (metabolic syndrome, diabetes,
hypertriglyceridemia) -> [[LDL ApoB and Cumulative Exposure]]. The dose is **cumulative** (lower for
longer). Transmission is the validated-surrogate exemplar: per 1.0 mmol/L LDL-C lowering, major vascular
events RR 0.78 (0.76-0.80) and all-cause mortality RR 0.90 (0.87-0.93), with no threshold in the studied
range [@ctt2010] — but this magnitude
is *drug*-route; a dietary LDL-C change does not inherit it. Lever -> [[Dietary Fat Types and Health]] /
drug therapy.

### Pressure — transmission proven into primary prevention

A **5 mmHg SBP reduction cuts major CV events \~10%** — HR 0.91 (0.89-0.94) in people without prior CVD,
0.89 (0.86-0.92) in those with it, with no heterogeneity across baseline-BP strata
[@bplttc2021]. Its distinctive
strength is showing the *relative* benefit holds with no heterogeneity across the primary- and
secondary-prevention strata. The transmission is *relative*-constant; the **absolute** benefit still
scales with baseline risk, so decide on absolute CV risk, not a BP number. Lever -> [[Blood Pressure]].

### Fitness / strength — capacity and function, both cheap

**VO2max**: per 1-MET higher cardiorespiratory fitness, all-cause mortality RR 0.87 (0.84-0.90), no
plateau [@kodama2009]. But CRF is
observational — part lever, part marker; within-person fitness *gains* track lower mortality, so it is a
target-whose-improvement-tracks-benefit, not a proven cause. Lever ->
[[Exercise and Physical Activity for Health]].

Lead with **strength/function over mass**: grip strength predicts mortality largely independent of muscle
mass, and it is the cheaper, better-transmitting number — per 5 kg lower grip, all-cause HR 1.20 (women) /
1.16 (men), and it adds discrimination to an office-based score (C-index +0.012, no blood draw)
[@celismorales2018] -> [[Grip Strength and Mortality]].
Low muscle **mass** is a weaker, prognostic-only marker — dead-vs-alive ASMI SMD -0.18 (-0.23 to -0.12),
not shown independent of strength, no per-unit hazard [@santana2021].
Both predict; strength transmits better and is the modifiable target -> [[Low Muscle Mass and Mortality]].

### Inflammation / insulin — mostly markers, one true pathway lever

**CRP is a marker, not a causal target**: circulating CRP -> CHD RR 1.37 (1.27-1.48)
[@erfc2010crp], but
genetically-raised CRP RR 1.00 (0.90-1.13) [@ccgc2011crpmr].
The lever is the *inflammatory pathway* — canakinumab HR 0.85 (0.74-0.98), colchicine HR 0.69 (0.57-0.83),
both on **events, not mortality** -> [[Inflammation as a Modifiable Lever]].

**Insulin-resistance surrogates (TyG, TG:HDL)** are cheap fasting readouts: incidence-positive (CAD HR
2.01, 1.68-2.40) but mortality-null (all-cause 1.08, CV 1.10) — a marker to *place* the person and a
prompt to check apoB, not a target to steer [@liu2022tyg]
-> [[Insulin Resistance Surrogates and Cardiovascular Risk]]. **Testosterone is a surrogate**: TRT raises
lean mass but fractures rose (HR 1.43, 1.04-1.97) while CV was non-inferior, not beneficial — the real
levers are adiposity loss and resistance training [@snyder2024]
-> [[Testosterone Adiposity and Muscle]]. **Allostatic load** (a multi-system composite) predicts — high
vs low all-cause HR 1.22 (1.14-1.30), CVD 1.31 (1.10-1.57) — but no trial shows *reducing* it reduces
mortality; prognostic marker, trajectory beating level [@parker2022allostatic]
-> [[Allostatic Load and Mortality]].

## How baseline risk enters the reading

A relative effect is a property of the intervention; the absolute benefit is a property of the
intervention *applied to this person*. The two are joined by one identity:

    absolute risk difference  =  relative risk reduction  x  baseline risk

The relative effect of an intervention versus a specific comparator is usually similar across a wide
range of baseline risks, which is why a single pooled relative estimate is usually legitimate; the
absolute benefit is that same reduction applied to the person's own baseline risk, so it varies across
strata even when the relative effect does not [@grade, §2.1]. GRADE draws the
consequence directly: recommendations «may differ across subgroups of patients at different baseline
risk of an outcome, despite there being a single relative risk that applies to all of them»
[@grade]. See [[Baseline Risk and the Relative-Absolute Split]] for the
full decomposition.

**This is route (a), and route (a) needs prognostic data only — not a subgroup claim.** Differing
absolute benefit across risk strata is the *expected* arithmetic of a constant relative effect; reading
it as evidence the treatment «works differently» in a subgroup is a category error that invites
unnecessary effect-modification analysis [@grade, §5.2.2]. Effect modification
(route (b)) is a separate, more expensive claim requiring positive interaction evidence.

**A worked pair, same intervention and relative effect, two baselines.** Per 1.0 mmol/L LDL-C
reduction, first major vascular events fell by about a fifth «in each subgroup examined» even where
control-group annual event rates differed substantially by medical history
[@ctt2010]. The constant \~1/5
relative reduction therefore buys a *larger* absolute benefit in the higher-baseline stratum and a
smaller one in the lower — no subgroup claim needed. A modest relative effect can be decisive at high
baseline risk and immaterial at low, with no disagreement about the evidence. ESC states the same:
«even a small absolute reduction in LDL-C may be beneficial in a high- or very-high-risk patient»
[@esc2021].

**Population burden is not individual expected benefit.** A large population-attributable burden and a
person's expected benefit are different quantities; baseline-risk logic reconciles them, and the
*ranking* of levers by burden defers out to the Big Rocks integrators. **Frame matters too:** a 10-year
horizon under-reads a younger adult carrying a high lifetime-exposure number (apoB, BP), where lifetime
absolute benefit is the right denominator — a stratum-dependent choice, not a contradiction
[@esc2021, 3.2.3.6] -> [[Lifetime Benefit - The Frame for Younger Adults]].
Which outcome counts on the target side is [[Rating Outcome Importance]].

## Does a costlier number earn its cost?

A costlier test earns its cost only if it **reclassifies** — moves the estimate across a decision
threshold — often enough to change what someone does. Association strength alone does not qualify it. The
governing frame is [[Risk Modifiers - When Extra Information Changes a Risk Estimate]], where a bar that
«very few potential modifiers» clear does most of the work [@esc2021, 3.3].

Two constraints bound the question. An extra test helps only in the **grey zone** near a threshold; in
clearly low- or very-high-risk cases it rarely alters management. And a modifier's headline relative risk
overstates what it does to *absolute* risk, so its reclassification yield is heavily discounted
[@esc2021, 3.3]. CAC illustrates both: it reclassifies up and down
around thresholds yet is graded only Class IIb, with no reclassification magnitude held here
[@esc2021, 3.3.3.1].

**State the standing honestly: this tiering rests on mechanism and predictor strength, not on held
head-to-head reclassification RCTs.** ESC's own frame concedes the outcome loop is open — trials of
whether added risk information improves outcomes are «generally lacking»
[@esc2021, 3.3].

**Named gaps (insufficient evidence — an absence, not a demonstrated null; by the expectancy test the
fabric could not yet be expected to hold this reclassification evidence):**

- **HbA1c** has no transmission home in the fabric — the ACCORD/UKPDS glucose-control-as-surrogate story
  is absent; the largest missing metric-transmission node this question names.
- **Lp(a)** is thin — no standalone page; it appears only as subsections (a causal marker that
  reclassifies risk yet carries no evidenced lever); a causal-marker-with-limited-lever page is absent.

- **apoB** coverage is `confidence: medium` — the apoB-vs-non-HDL-vs-LDL "which to measure" adjudication
  is present but not deeply sourced.
- **Grip strength** is a thin single-marker page.
- **Pack-years as a graded dose-stratifier** is undeveloped — smoking *status* places a person
  (section 2), but a graded pack-year risk gradient is not held as its own lens.

## Caveats and boundaries

- **Capture, not interpret or prescribe.** Reference ranges, diagnosis, and acting on a number are
  clinician acts the wiki cannot perform; it names *what* to measure, not what a value means for a
  person.
- **The open loop.** A number that tracks a marker is not a validated outcome; no operation here grades a
  metric against a realized patient outcome. -> [[Limits of Evidence]]
- **Links out — no dose-response here.** Each lever (what lowers apoB, raises fitness, lowers BP) lives
  in its exposure-lead: [[Dietary Fat Types and Health]], [[Exercise and Physical Activity for Health]],
  [[Blood Pressure]]; judge any change against its realistic alternative -> [[Better than What]].

- **The tiering is a DEFAULT, re-tuned per stratum at layer 3.** A lean young adult and a
  drifting-median adult weight the same dashboard differently; no single "who is most deficient" scalar
  exists (no-scalar-maximand).

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | Which metrics/markers legitimately serve as decision TARGETS for individual guidance (versus surrogates that fail transmission to a patient-important outcome), and how should baseline risk enter (relative versus absolute)? |
> | **Evidence included** | 20 sources — 11 gold, 6 high, 2 moderate |
> | **Overall certainty** | **Medium** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | 2 source(s) below the gold evidence bar feed this page: Taylor (mechanism, moderate); Kodama (meta-analysis, moderate). Each labelled by tier; none load-bearing for the core claims. |
> | **Last updated** | 2026-08-10 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Metrics%20for%20Targeted%20Health%20Guidance.md) |

## References

---
type: framework
question: Does lowering blood pressure reduce hard cardiovascular events — and does the benefit depend on baseline BP or on already having heart disease?
aliases: [Blood Pressure Lowering, Antihypertensive CV Benefit, BP Lowering Primary Prevention, BPLTTC, Hypertension Treatment Outcomes, Treat to Risk Not Threshold]
authors: [Blood Pressure Lowering Treatment Trialists Collaboration (org); Rahimi, Kazem; Neal, Bruce; Livingston, Gill; Moll van Charante, Eric P; Richard, Edo; Roerecke, Michael; Kaczorowski, Janusz; Tobe, Sheldon W; Gmel, Gerrit; Hasan, Omer S M; Rehm, Jürgen; Naci, Huseyin; Salcher-Konrad, Maximilian; Dias, Sofia; Ioannidis, John P A; Landry, Matthew J; Peters, Ruth; Chalmers, John; Woodward, Mark; Anderson, Craig S; Staessen, Jan A]
sources: [BPLTTC - Blood Pressure Lowering Primary and Secondary Prevention 2021, SPRINT - Intensive vs Standard Blood Pressure 2015, Neal - SSaSS Salt Substitution Cardiovascular 2021, Livingston - Dementia Prevention 2024, Moll van Charante - preDIVA Multidomain Dementia Prevention 2016, Roerecke - Alcohol Reduction Blood Pressure 2017, Naci - Exercise vs Antihypertensive Drugs 2019, Landry - Vegetarian Dietary Patterns Cardiovascular Umbrella 2024, Peters - Blood Pressure Lowering Dementia 2022]
cluster: cvd-risk-estimation
confidence: high
relationships:
  related_to:
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
    - Baseline Risk and the Relative-Absolute Split
    - Sodium Intake and Blood Pressure
    - The U-Shaped Association Artifact
    - SCORE2 Baseline Risk and the ESC Treatment Thresholds
    - Dementia Prevention and Modifiable Risk Factors
    - DASH Diet and Blood Pressure
    - Vegetarian Dietary Patterns and Mortality
    - Alcohol and Mortality and Vascular Disease
    - Physical Activity Dose and Mortality
    - Cardiorespiratory Fitness and Mortality
created: 2026-07-29
updated: 2026-09-04
self_critiqued: 2026-09-04
---

Of the cardiometabolic interventions the wiki holds, **BP-lowering is the one whose hard-outcome benefit
is proven to reach primary prevention** — the partial exception to
[[Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People]]. The largest randomised
evidence base (BPLTTC 2021, «344 716 participants from 48 randomised clinical trials») settles two long-
contested questions: the benefit does **not** require pre-existing heart disease, and it does **not**
vanish at lower baseline blood pressure. [@bplttc2021]

## The effect, and why its independence from baseline is the point

> «a 5 mm Hg reduction of systolic blood pressure reduced the risk of major cardiovascular events by
> about 10%, irrespective of previous diagnoses of cardiovascular disease, and even at normal or
> high–normal blood pressure values».

Per 5 mmHg SBP reduction, the hazard ratio for a major CV event was **0.91 (0.89-0.94) in people without
prior CVD** and **0.89 (0.86-0.92) in those with it** [@bplttc2021]. Across seven baseline-SBP strata from <120 to >=170
mmHg there was «no reliable evidence of heterogeneity», and «in no subgroup was the HR above 1·0».
Component reductions per 5 mmHg: stroke 13%, heart failure 13%, ischaemic heart disease 8%, CV death 5%.

**This is what distinguishes BP-lowering from the other cardiometabolic levers.** Lifestyle weight loss
was null on hard events even where it was achieved ([[Does Weight Loss Reduce Cardiovascular Events]]);
an obesity drug's CV benefit is unproven outside established disease
([[Semaglutide for Cardiovascular Risk in Obesity]]); a statin's is real but decays to below the
action threshold at low risk ([[Statins for Primary Prevention and the Power of Zero CAC]]). BP-lowering
alone has a **directly proven relative benefit in primary prevention**, at an IPD-meta-analytic warrant.

## But the ceiling's mechanism survives — treat on absolute risk, not a BP number

The paper does **not** conclude *lower everyone's BP*. Its explicit decision rule is the
[[Baseline Risk and the Relative-Absolute Split]] applied to blood pressure:

> physicians should «emphasise its importance on reducing cardiovascular risk rather than focusing on
> blood pressure reduction itself»; the finding «calls for consideration of blood pressure-lowering
> treatment for any individual who has a sufficiently high absolute risk of cardiovascular disease».

And the guard against over-reading, in the authors' own words: the uniform *relative* effect «does not
necessarily mean that it is worthwhile treating every patient» — decisions «will require consideration
of... an individual's overall risk of future cardiovascular events, potential risk of adverse effects,
the cost of treatment, and patient preferences». They even «caution against using the reported absolute
risk differences from clinical trials for making policy decisions» — the trials' populations were
higher-risk (absolute rates «31·9... in the comparator group and 25·9... in the intervention group» per
1000 person-years without prior CVD, i.e. a \~2.4%/yr baseline, far above a low-risk primary-prevention
person). [@bplttc2021]

**So BP-lowering refines, not refutes, the ceiling.** Its *relative* benefit is proven where weight-loss
and GLP-1 CV benefit are not — but the *absolute* benefit still scales with baseline risk, exactly the
ceiling's mechanism, and the paper legislates the same rule (treat on absolute risk). A constant \~10% per
5 mmHg on a low absolute risk is a small absolute gain; on a high one it is large.

## What it does not settle

- **Not the target.** BPLTTC standardises to a *fixed 5 mmHg reduction* and shows a consistent *relative*
  effect; it «is unable to directly address» the optimal magnitude or a target BP. How low to go is a
  separate question — *now partly held via SPRINT below*.
- **Not the drug/adverse-effect trade-off** for an individual — adverse effects, cost and preferences are
  named as decision inputs but not quantified — *SPRINT supplies the harm side, below*.

[@bplttc2021]

## SPRINT — the intensive-target trial that operationalises *treat on absolute risk*

BPLTTC is the meta-analysis and carries the per-mmHg claim; **SPRINT is one landmark RCT**, read *inside*
that framing as the worked target-trial. It randomised 9,361 **high-CV-risk, non-diabetic** hypertensives
to a systolic target «less than 120 mm Hg (intensive)» vs «less than 140 mm Hg (standard)» (achieved
\~121 vs \~136), and stopped early (median 3.26 y):

- **Intensive won on hard outcomes:** primary composite (MI/ACS/stroke/HF/CV-death) «hazard ratio ...
  0.75; 95% CI 0.64 to 0.89»; and **all-cause mortality «hazard ratio, 0.73; 95% CI 0.60 to 0.90»** — a
  25% and 27% relative reduction, «number needed to treat ... to prevent one primary outcome event was
  61» over 3.26 years. [@sprint2015]
- **It confirms BPLTTC's own logic rather than competing with it.** SPRINT selected a *high-risk*
  population — exactly where BPLTTC says the *absolute* benefit of a given relative effect is largest —
  and the \~15 mmHg achieved gap, at BPLTTC's \~0.91 per 5 mmHg, predicts a composite HR near 0.75, which
  is what SPRINT observed.
- **The harm side BPLTTC did not quantify:** intensive treatment raised serious «hypotension, syncope,
  electrolyte abnormalities, and acute kidney injury or failure, but not ... injurious falls».
  [@sprint2015] So a lower target buys real
  events in the high-risk but at a real adverse-event cost — the target decision is a net-effect
  judgement, not *lower is always better*.

## A clean refutation of the observational J-curve

The intro records the standing controversy: registries show a «J-shaped association» between BP and
events (lowest risk \~130/75, implying harm below), which had been read as a reason not to lower BP far.
The randomised evidence shows benefit «down to less than 120 mm Hg» with no rising HR in any low-BP
stratum — so the observational J-curve is not a treatment effect. [@bplttc2021] A worked instance of
[[The U-Shaped Association Artifact]]: the protective-looking lower arm of an observational curve does
not survive the randomised (here, interventional) check.

## A dietary BP-lowering route that reached hard outcomes — SSaSS `[2026-08-04, Neal]`

The page's caution below is that a **lifestyle-induced** BP drop transmitting to events is «an assumption,
not the same evidence» as the pharmacological trials here. SSaSS (Neal 2021) is the closest test the
corpus holds: a **potassium-enriched salt substitute** (a dietary intervention) cut stroke (RR 0.86),
major CV events (RR 0.87) and death (RR 0.88) in 20,995 high-risk adults, with an achieved SBP fall of
**−3.34 mmHg**. [@neal2021] So a
diet-route BP reduction *can* reduce hard events — but two caveats keep it from being a clean confirmation
of the sodium→events chain: (1) the salt substitute moves **sodium and potassium together** (a joint
lever, not sodium alone — [[Sodium Intake and Blood Pressure]]); (2) the **event benefit outruns the
BP-channel prediction** — this page's \~13% stroke reduction per 5 mmHg predicts RR \~0.91 from −3.34 mmHg,
while SSaSS observed 0.86, consistent with a BP-independent electrolyte effect *or* the measured BP fall
understating the sustained one (adherence dilution). The BPLTTC transmission model is corroborated in
*direction*; SSaSS does not let the diet-route magnitude be read straight off the BP fall.
[inferred from @neal2021]

## Another lifestyle BP route — alcohol reduction, and the modelled-events gap made explicit `[2026-08-20, Roerecke]`

Roerecke's 2017 SR+MA of **36 alcohol-reduction RCTs (2865 participants)**, GRADE-high, is a second
behavioural BP lever — and it makes this page's *lifestyle-BP-drop-to-events-is-an-assumption* caveat
concrete. The BP effect is real and dose-dependent but **confined to heavier drinkers**: no significant
BP change below 2 drinks/day, then dose-dependent above (SBP -1.18 at 3 drinks/day rising to
-5.50 [-6.70 to -4.30] at >=6 drinks/day; overall -3.13 [-3.93 to -2.32]).
[@roerecke2017alcohol] The magnitude is «similar to that
of other health behaviour changes, such as physical activity» or weight-loss diets.
[@roerecke2017alcohol]

Crucially, Roerecke did **not measure** CV events — it **modelled** them: its «more than 7000 inpatient
hospitalisations and 678 cardiovascular deaths» projected for the UK rest on «standard methods for
comparative risk assessment analyses (eg, Global Burden of Disease studies)», run «assuming persistence
of lower alcohol consumption within 1 year, and no lag time of eﬀ ects on CVD outcomes».
[@roerecke2017alcohol] So the
alcohol-reduction lever is exactly the case this page flags — a lifestyle BP drop whose event payoff is
*assumed through a risk model*, not observed — unlike SSaSS, the one lifestyle route that reached
*measured* hard endpoints. Read against BPLTTC's \~0.91 per 5 mmHg, a -5.50 mmHg fall in a heavy drinker
predicts a \~10% CV-event reduction *if* the pharmacological transmission transfers. Full dose-response
-> [[Alcohol and Mortality and Vascular Disease]].
[inferred from @roerecke2017alcohol]

## A third lifestyle BP route — structured exercise, and the drug head-to-head that does not exist `[2026-08-20, Naci]`

Naci's 2019 network meta-analysis (Br J Sports Med, gold-tier) is the drug-as-realistic-alternative
comparator the telos calls for: it places **structured exercise** and **antihypertensive drugs** in
one network on SBP-lowering. It pooled «391 RCTs, 197 of which evaluated exercise interventions
(10 461 participants) and 194 evaluated antihypertensive medications (29 281 participants)» — but the
head-to-head does not exist: «No RCTs compared directly exercise against medications»
[@naci2019exercise]. **Every exercise-vs-drug number
below is INDIRECT** (network-inferred across disjoint trials), and the authors call the linking
assumption «tenuous» (below).

**The naive comparison is confounded by baseline SBP — and the confound is the finding.** Across all
populations, drugs beat exercise: medications «−8.80 mmHg, 95% CrI −9.58 to −8.02» vs exercise «−4.84,
95% CrI −5.55 to −4.13» from baseline vs control, a «−3.96, 95% CrI −5.02 to −2.91» advantage to drugs
[@naci2019exercise]. But the two arms were measured in
**different populations**: «the mean SBP at baseline was 132 mmHg for participants in the RCTs of
exercise interventions, it was consistently over 150 mmHg in medication RCTs»
[@naci2019exercise]. SBP-lowering scales with baseline
SBP, so a drop measured at \~132 mmHg (mostly normotensive) is **not the same quantity** as one measured
at \~157 mmHg (all hypertensive) — the parameter table makes this explicit:

| Naci comparison | Effect vs control (mmHg, 95% CrI) | Population / baseline SBP | Same quantity? |
|---|---|---|---|
| All exercise | −4.84 (−5.55 to −4.13) | exercise trials, mean baseline 132 | reference |
| All medications | −8.80 (−9.58 to −8.02) | drug trials, baseline >150 | NO — different baseline SBP |
| Meds vs exercise (all pops) | −3.96 (−5.02 to −2.91), drugs superior | mixed (normotensive vs hypertensive) | NO — the confounded, indirect contrast |
| Exercise, restricted to hypertensive >=140 | −8.96 (−10.27 to −7.64) | 56 trials, 3508 people, baseline >=140 | YES — baseline now matched to drugs |
| Meds vs exercise, hypertensive >=140 | 0.18 (−1.35 to 1.68), no difference | both hypertensive >=140 | YES — matched; the honest "similar" claim |

Restricting exercise to the hypertensive stratum nearly **doubles** its estimated effect (−4.84 ->
−8.96) and erases the drug advantage: «We did not observe a difference between the SBP-lowering effects
of medications and exercise (0.18, 95% CrI −1.35 to 1.68)»
[@naci2019exercise]. Naci names the mechanism himself
in the limitations (the counter-passage): «Transitivity may be tenuous given the typically different
levels of SBP in medication versus exercise trials. However, when we tried to match trial populations
more closely, the gap between medication and exercise in efficacy diminished»
[@naci2019exercise]. This is a worked instance of
[[Baseline Risk and the Relative-Absolute Split]] on a *continuous* outcome — the absolute SBP reduction
is a function of baseline SBP, so an unmatched cross-intervention comparison misleads.
[inferred from @naci2019exercise]

**The equivalence is real but doubly hedged — do not read it as "exercise = drugs" plainly.** The
authors state it only «Assuming equally reliable estimates»
[@naci2019exercise], and the estimates are not equally
reliable: the exercise evidence is far sparser in the matched stratum (56 trials / 3508 people vs 194
drug trials / 29 281), higher risk of bias (17/20 sampled exercise RCTs at high risk of performance and
detection bias from lack of blinding, vs 1/20 drug RCTs), and — since food/behaviour cannot be blinded —
this weakness is structural, not fixable. The conclusion carries the hedge: the exercise effect «appear
similar to that of commonly used antihypertensive medications, but this is tempered by the observed
differences in study population characteristics»
[@naci2019exercise].

**Decision relevance.** For a **hypertensive** person, structured exercise (endurance or dynamic
resistance) is a credible-magnitude SBP lever — indirectly comparable to a first-line drug in the
matched stratum — so it is a defensible *adjunct*, and a candidate *alternative* where a drug is
declined or not yet indicated. Two guards: (1) the equivalence holds only at hypertensive baselines; at
a **normotensive** baseline the exercise SBP effect is smaller (−4.84) and the drug comparison was never
the point; (2) SBP here is a **surrogate** — Naci measured no CV events. The event payoff runs through
this page's BPLTTC channel (\~10% per 5 mmHg), which is evidenced for *pharmacological* lowering; whether
an exercise-induced SBP drop transmits at the same rate is the same assumption flagged for the sodium,
alcohol and salt-substitute levers above. Exercise also carries large off-target benefits (fitness,
glycaemia, weight) that a BP-only comparison ignores -> [[Physical Activity Dose and Mortality]],
[[Cardiorespiratory Fitness and Mortality]]. The head-to-head RCT that would settle the comparison
directly does not exist — a standing gap. [inferred from @naci2019exercise]

<div class="recent-update" data-last-updated="2026-09-04">

## Second outcome — antihypertensive treatment also lowers dementia risk

Hypertension is one of the 14 modifiable dementia risk factors, and the treatment lever carries over
-> [[Dementia Prevention and Modifiable Risk Factors]]. The Commission holds this observationally: «those
with untreated hypertension had a 42% higher risk of dementia than healthy controls (HR 1.42; 1.15-1.76),
but this risk was attenuated or lost with treatment» (HR 1.13, 0.99-1.28).
[@livingston2024]

**The interventional effect, de-secondhanded first-hand (Peters 2022, F-refinement `[2026-09-04]`).** The
IPD OR the Commission borrows is now held at source: Peters 2022, an IPD MA of **five double-blind
placebo-controlled** antihypertensive RCTs (HYVET, SYST-EUR, PROGRESS, ADVANCE, SHEP; «28 008 individuals
recruited from 20 countries», 861 dementia cases) [@peters2022bp]. «Multilevel logistic regression reported an adjusted odds ratio 0.87 (95% confidence
interval: 0.75, 0.99) in favour of antihypertensive treatment reducing risk of incident dementia with a
mean BP lowering of 10/4 mmHg» [@peters2022bp] —
«Class I evidence» [@peters2022bp]. In absolute terms
dementia occurred in «403 (2.9%) and 458 (3.3%)» of active vs placebo (>=2y follow-up)
[@peters2022bp]. That is an ARD of \~0.4 percentage
points, i.e. an NNT of \~250 over the median follow-up [inferred from @peters2022bp]; and it is conservative
because the trials stopped early on the CV endpoint (dementia accrues slower). This is **NOT an `[E-independent]` corroboration** of
this page's CV-events evidence: Peters' five trials sit inside BPLTTC's 48-trial base and the author lists
overlap (Chalmers, Woodward, Anderson — George Institute), so the shared RCT substrate defeats independence
on the BP-lowering *mechanism* — what is new is the OUTCOME (dementia), a new-endpoint extension. Full
facets (mediation 53%, no effect-modification, cognitive-decline null) on
[[Dementia Prevention and Modifiable Risk Factors]].
[inferred from @peters2022bp; @bplttc2021]

**The observational U survives no better here than for CV events.** Peters' abstract records the same
J/U-curve puzzle — «Observational studies indicate U-shaped associations of blood pressure (BP) and
incident dementia in older age, but rando-mized controlled trials of BP-lowering treatment show mixed
results on this outcome in hypertensive patients» [@peters2022bp] —
and randomization erases it: «no evidence of a U-shaped re-lation of the effect at any age», with a
monotone «linear relationship between lower risk of dementia and lower BP, down to at least 100 mmHg
systolic and 70 mmHg diastolic» [@peters2022bp]. The 2024 Lancet Commission's target — «maintain systolic BP of 130 mm Hg or less from age 40
years» — is a *dementia*-prevention framing of the same midlife-BP lever. As with CV events, MR studies
suggesting BP is protective are discounted as survival-bias artifacts, consistent with this page's
treat-on-absolute-risk conclusion -> [[The U-Shaped Association Artifact]].

**preDIVA — BP-lowering in the elderly is cognitively SAFE, and the dementia benefit is stratum-specific
`[2026-08-07]`.** preDIVA (Moll van Charante 2016), a 6.7-yr nurse-led multidomain vascular-care cluster-RCT
in 3526 *unselected* elderly (70-78), lowered systolic BP by -2.06 mm Hg but did **not** reduce all-cause
dementia (HR 0.92, 0.71-1.19) [@mollvancharante2016]. Two decision-relevant reads: (i) **it removes a standing worry** — «our results mitigate fears that
antihypertensive treatment in older age groups evokes cognitive decline ... they show that such an
intervention is safe, which is in accordance with findings from the recent SPRINT trial»
[@mollvancharante2016], so BP-lowering in
the over-70s carries no cognitive-harm penalty (an inverse late-life BP-dementia association is a
frailty/reverse-causation artifact -> [[The U-Shaped Association Artifact]]); (ii) **any dementia benefit is
concentrated where BP is genuinely untreated** — the adherent-untreated-hypertension subgroup reached
HR 0.54 (0.32-0.92) [@mollvancharante2016],
a route-(b) effect-modification *hypothesis* (post-hoc, adherence-selected), consistent with this page's
treat-on-absolute-risk logic: the lever pays where the deficit is real, not in an already-well-managed
population. Full multidomain-trial context -> [[Multidomain Lifestyle Intervention and Cognitive Decline]].

</div>

## A fourth lifestyle BP route — vegan dietary pattern (observational, very-low COE) `[2026-08-29, Landry]`

Landry's 2024 umbrella adds a diet-pattern BP lever: pooling 16 observational studies (Benatar),
«vegan diets were associated with lower systolic BP [MD (95 % CI): −2.56 mmHg (−4.66, −0.45); I2=83 %]»,
non-significant for diastolic, and «largely driven by participants from non-Eastern Asian countries»
[@landry2024vegetarian]. This is the
**weakest-warranted** of the four lifestyle routes on this page: observational only (the
controlled-trial BP evidence was set aside because «19 of these studies targeted adults with diagnosed
diseases»), GRADE **very low**, I2=83%, and healthy-adherer confounded — vegans differ on many mortality
levers at once -> [[Vegetarian Dietary Patterns and Mortality]]. Read through this page's
\~10%-per-5-mmHg channel, −2.56 mmHg predicts only **\~5%** CV-event reduction *if* the pharmacological
transmission transfers — and the vegan diet simultaneously moves LDL, BMI and CRP, so the BP channel is
not separable as the cause. A dietary-pattern BP association, not a titratable lever; the SBP number is
a surrogate here as for the sodium/alcohol routes above. [inferred from @landry2024vegetarian]

## Decision relevance



- **BP-lowering is the cardiometabolic lever with the best hard-outcome warrant, and it applies in
  primary prevention** — for a hypertensive person it is the one place a proven CV-event reduction is on
  the table.
- **But decide on absolute CV risk, not the BP number.** A \~10%-per-5-mmHg relative effect buys little
  absolute benefit at low risk and a lot at high risk; combine the relative effect with a stratum-
  specific baseline ([[SCORE2 Baseline Risk and the ESC Treatment Thresholds]]) rather than treating to a
  threshold. This also means the exact BP measurement matters less than the overall risk.
- **Lifestyle BP reduction (e.g. sodium, weight, alcohol reduction in >2 drinks/day drinkers) plugs into
  the same channel.** [[Sodium Intake and Blood Pressure]] holds BP as a *surrogate* with hard outcomes
  graded very low; BPLTTC supplies the missing link — *pharmacological* BP reduction does reduce hard
  events — but the transmission of a *lifestyle-induced* BP drop to events is an assumption, not the same
  evidence (a different intervention, unmeasured here — Roerecke's alcohol-reduction CV benefit is
  *modelled*, SSaSS's is *measured*).

## Limits

- Trials 1972-2013 — older drug regimens and co-treatment; relative (not absolute) effects are the
  transportable quantity, by the authors' own caution.
- One (very large) collaboration's IPD; the target-BP and adverse-effect questions are out of its design.
- Applies to *pharmacological* lowering; do not silently transfer the magnitude to a lifestyle route.

## References

---
type: framework
question: How much potassium, and what does raising intake actually buy -- for whom?
aliases: [Potassium, Dietary Potassium, Potassium Intake, Potassium Intake and Cardiovascular Risk, Potassium and Stroke, WHO Potassium Guideline, Potassium Supplementation]
authors: [Aburto, Nancy J; Hanson, Sara; Gutierrez, Hialy; Hooper, Lee; Elliott, Paul; Cappuccio, Francesco P; Neal, Bruce; Filippini, Tommaso; Naska, Androniki; Kasdagli, Maria‐Iosifina; Torres, Duarte P.M.; Lopes, Carla Maria Moura; Carvalho, Catarina; Moreira, Pedro Augusto Maciel; Malavolti, Marcella; Orsini, Nicola; Whelton, Paul Kieran; Vinceti, Marco]
sources: [Aburto - Potassium Cardiovascular 2013, Neal - SSaSS Salt Substitution Cardiovascular 2021, Filippini - Potassium Blood Pressure Dose-Response 2020]
cluster: sodium-bp
confidence: medium
relationships:
  related_to:
    - Sodium Intake and Blood Pressure
    - Blood Pressure Lowering and Cardiovascular Events
    - Surrogate Outcomes
    - Baseline Risk and the Relative-Absolute Split
    - Measurement Error in Dietary Assessment
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
    - The U-Shaped Association Artifact
created: 2026-07-31
updated: 2026-10-22
self_critiqued: 2026-10-22
---

The WHO-commissioned SR+MA (Aburto 2013, BMJ) behind WHO's first potassium guideline -- the **potassium
analog of the WHO sodium evidence**, and the electrolyte partner of [[Sodium Intake and Blood Pressure]].
**22 RCTs (1606 participants) on BP/lipids/renal/catecholamines + 11 cohorts (127 038) on hard
outcomes.** The one-sentence result: raising potassium lowers BP **in people with hypertension but not
in those without**, is safe for renal function in people with normal potassium handling, and tracks a
lower stroke risk -- while the harder CV endpoints stay null and underpowered.
[@aburto2013]

## The effect on blood pressure -- the HIGH-certainty core

> «Increased potassium intake reduced systolic blood pressure by 3.49 (95% confidence interval 1.82 to
&gt; 5.15) mm Hg and diastolic blood pressure by 1.96 (0.86 to 3.06) mm Hg in adults, an effect seen in
> people with hypertension but not in those without hypertension.»
[@aburto2013]

GRADE **high** for resting SBP (21 RCTs, n=1892). The *un-trimmed* pooled estimate (SBP -5.93) carried
**I2=96%**; removing one outlier study brought it to the reported **-3.49 at I2=65%**, and **baseline
hypertension status explained most of the *remaining* heterogeneity** -- the effect is not a weak average,
it is a strong effect in one stratum diluted by a null in another:

> «Increased potassium intake significantly reduced systolic and diastolic blood pressure in the 16
> studies targeting people with hypertension (systolic blood pressure 5.32 (3.43 to 7.20) mm Hg;
> diastolic 3.10 (1.66 to 4.53) mm Hg) but not the three studies targeting people without hypertension
> (systolic 0.09 (−0.77 to 0.95) mm Hg; diastolic (0.56 (−0.42 to 1.55) mm Hg).»
[@aburto2013]

**This is a route-b effect-modification finding with an unusually clean signal** (transportability's
five routes): the normotensive SBP point estimate is **0.09 mmHg -- essentially zero**, not merely
smaller. Aburto's own hedge is that the three normotensive trials were short and did not test whether
potassium *prevents* a future BP rise, so *not effective in normotensives* is established for
*lowering an already-normal BP*, not for long-run prevention.

## The hard outcome -- stroke reaches significance, the rest do not

The same split the sodium evidence shows: **stroke is the one hard cohort endpoint that reaches
significance; CVD, CHD and mortality do not.**

| Outcome | Effect (95% CI) | Design | GRADE |
|---|---|---|---|
| Resting SBP | **3.49 mmHg lower** (1.82 to 5.15) | 21 RCTs, n=1892 | **HIGH** |
| Incident **stroke** | **RR 0.76** (0.66 to 0.89) in the Results text; Table 2 direct row RR 0.79 (0.68 to 0.93) | 9 cohort comparisons; Table 2 n=97 152 | **LOW** (direct, Table 2) |
| Cardiovascular disease | RR 0.88 (0.70 to 1.11) -- NS | 4 cohorts, n=29 067 | VERY LOW |
| Coronary heart disease | RR 0.97 (0.77 to 1.24) -- NS | 3 cohorts, n=31 162 | VERY LOW |
| All-cause mortality | RR 1.08 (0.91 to 1.29) -- NS | 1 cohort, n=1766 | VERY LOW |

[@aburto2013]

> «The meta-analysis of nine cohort studies with nine comparisons detected a protective effect of higher
> potassium intake on risk of incident stroke (risk ratio 0.76, 0.66 to 0.89).»
[@aburto2013]

**The headline blends a direct magnitude with a surrogate-path certainty -- a [[Surrogate Outcomes]]
tell.** The conclusion reads «a 24% lower risk of stroke (moderate quality evidence)». But 24% *is* the
**direct** cohort estimate (RR 0.76 in the text; Table 2's direct row, RR 0.79, is graded **LOW**) (cohort floor, not downgraded); the
**moderate** rating belongs to a *different* row -- the BP-surrogate-transfer path (BP high, downgraded
one level for indirectness). So a single sentence pairs the direct magnitude with the surrogate path's
grade. The surrogate transfer is explicit, and it is the **same GRADE machinery the sodium review used**
-- literally so, since the boilerplate still names sodium:

> «Recognising the limitations of any biomarker, we considered data on change in systolic blood pressure
> as indirect evidence regarding the effect of sodium intake on risk of cardiovascular disease, stroke,
> and coronary heart disease.»
[@aburto2013]

The word **sodium** in a potassium paper's GRADE paragraph is a copy-carryover from the sodium review --
concrete evidence the two WHO reviews share one methodological template (bears on the independence
question in the Synthesis).
[inferred from @aburto2013]

## Dose -- a plateau near 90-120 mmol/day, no monotone gradient

> «...Moderate» [page break] «and high quality evidence showed that a higher potassium intake of 90-120 mmol/day reduced blood pressure
> and was associated with a lower risk of incident stroke. Intake above 120 mmol/day did not seem to
> have any additional benefit. However, the evidence... did not identify a precise optimal level.»
[@aburto2013]

The largest BP fall was at **90-120 mmol/day (SBP -7.16, -12.41 to -1.91)**, «without any dose response»
and not statistically distinguishable from other intake bands. Aburto's *difference*-subgroups (achieved
intervention-minus-control potassium: <30 / 30-60 / >60 mmol/day -> SBP -4.89 / -1.97 / -3.01) **also
show no clear gradient**. This is a **plateau/no-gradient reading** on both axes -- but read it with the
telos dose-response caution: a flat inter-band contrast built on wide, overlapping intervals is weak
evidence of a *true* plateau, so the defensible statement is **a minimum effective region around 90
mmol/day with no demonstrated benefit above 120**, WHO's threshold (>90 mmol/day) at the low end of Aburto's best band and the
120 where the data thin, not a demonstrated ceiling. (Units: Aburto's bands are *intake*; the Filippini
curve below is *excretion*, and puts the start of its flat region near \~117 mmol/day intake, above
WHO's 90 -- see the next subsection `[2026-10-22]`.)
**No clean contrast with the sodium curve is available** -- and stating one would compare different axes:
the sodium page's *monotone* reading is across *magnitude of reduction achieved* (He), not achieved intake bands,
and even there it is monotone only *after multivariable adjustment* (Huang's raw slope is null) and
author-flagged *exploratory*. So potassium-flat-by-intake and sodium-rising-by-reduction are **not
opposed head-to-head**; both are consistent with the same decision default (raise toward \~90-120 --
for hypertensives Filippini's spline puts its plateau start near the top of that range, \~117 intake,
which narrows the target within it rather than moving it -- and reduce sodium; the dose-response shape
reasoning). [inferred from @filippini2020potassium]

### The curve fitted through the trials -- Filippini 2020 `[2026-10-22]`

A 1-stage spline dose-response meta-analysis of **32 RCTs (1764 participants, >=4 weeks, all
supplement trials, 27 in hypertensives)** fits a curve where Aburto could only compare bands. It reads
BP on two axes: the arm difference in 24-h urinary potassium and the achieved excretion at trial end.
[@filippini2020potassium] Median
trial length 4 weeks. [@filippini2020potassium]
The urinary arm difference is a proxy for the supplemental dose and usually runs below the prescribed
dose (e.g. Grimm 96 -> 74, Gu 60 -> 23 mmol/d). [inferred from @filippini2020potassium]

- **Arm difference: the largest fall near 30 mmol/d, then a turn.** SBP -3.3 (-4.9 to -1.6) at a 30 mmol/d difference, -2.0
  (-3.4 to -0.5) at 60, then +1.1 (-2.9 to 4.7) at 90 and +4.2 (-2.3 to 10.6) at 120.
  [@filippini2020potassium] Studied range of the difference: 17-131 mmol/d.
  [@filippini2020potassium]
- **Achieved excretion: a plateau at 90-150 mmol/d, with a steep low arm.** Against 90 mmol/d, SBP is
  +9.1 (4.6 to 13.5) at 30 and +3.9 (2.1 to 5.8) at 60, -0.9 (-1.6 to -0.2) at 120, -0.2 (-2.2 to 1.8)
  at 150 and +0.7 (-2.9 to 4.2) at 180: «The SBP and DBP change remained constant in the range of 90 to 150 mmol/d of achieved potassium excretion.»
  Studied range: supplemented arms 57-225, control arms 34-94 mmol/d.
  [@filippini2020potassium]
- **No formal non-linearity test and no certainty rating** `[searched: nonlinearity / non-linearity /
  Wald / GRADE / certainty across chunks 01-02, srcgrep 0 hits each]`; the shape is read off the spline
  against a superimposed linear fit. [@filippini2020potassium]

**Parameter table** (op-weave 2a) -- the two analyses of what is largely one trial pool:

| Parameter | Aburto 2013 | Filippini 2020 | Same quantity? |
|---|---|---|---|
| Arm-difference axis | bands <30 / 30-60 / >60 mmol/d: SBP -4.89 (-7.59 to -2.20) / -1.97 (-3.85 to -0.09) / -3.01 (-7.03 to 1.02) | spline: 30 -> -3.3 (-4.9 to -1.6); 60 -> -2.0 (-3.4 to -0.5); 90 -> +1.1 (-2.9 to 4.7) | **PARTLY** -- same construct; Aburto labels these bands *intake*, but its x1.3 footnote marks the achieved and baseline rows, not this one, though Aburto's Methods convert all adult-RCT urinary values to intake by x1.3; read as intake, <30 / 30-60 / >60 \~ <23 / 23-46 / >46 mmol/d excretion; band averages vs spline points; mostly the same trials |
| Achieved axis | intake bands (urinary x1.3); best 90-120 mmol/d intake, SBP -7.16 (-12.41 to -1.91) vs control | excretion, BP relative to 90 mmol/d excretion; flat 90-150 | **NO** -- intake vs excretion (90 excretion \~ 117 intake), and a treatment effect within a band vs a level relative to a reference |
| Trial pool | 22 RCTs (21 for SBP) | 32 RCTs | overlapping: >=17 of the 32 cite the same report as an Aburto trial |
| Vehicle | supplements in 20 studies, advice alone in 2, advice plus tablet in 1 | supplements only | **MOSTLY** -- both mainly supplement trials |

[@aburto2013]

**What this changes (type-F, not E).** [inferred from @filippini2020potassium]

- **The plateau above is drawn as a curve on largely the same trials, and it sits higher.** On the
  arm-difference axis the two agree in direction: the largest fall at the smallest band, smaller after.
  On the achieved axis the near-flat region begins at \~90 mmol/d *excretion* (\~117 mmol/d intake by
  x1.3), at the top of Aburto's best band; BP is clearly higher at 60 than at 90 mmol/d excretion, still
  edges down to 120 (-0.9, -1.6 to -0.2), and is flat to 150 (the Results call 90-150 *constant*; the
  Discussion calls 90-130 *optimal*). The WHO/EFSA 90 mmol/d *intake* (\~69 excretion) sits on the steep
  arm. Stated with its range: **a near-plateau at \~90-150 mmol/d excretion (\~117-195 intake), studied to
  225, between-trial, mostly hypertensives, median 4-week trials, no formal non-linearity test.** A
  plateau read off a spline is a region, not a target -> [[The Underivable Optimum]].
- **Not independent on the shared trials.** At least 17 of Filippini's 32 trials are the same reports
  Aburto pooled (its refs 44-65), and Whelton co-authored both this MA and two included trials
  (TOHP, Gu). There, two models fitted to one pool are shared-data robustness, **not
  `[E-independent]`**. The exception is the top of the dose range: most trials above 80 mmol/d are not
  in Aburto's pooled set (only Richards certainly is; see the rising arm below).
- **Decision consequence for supplement dosing.** The BP fall does not grow past a 30-60 mmol/d urinary
  arm difference (\~40-80 mmol/d ingested by x1.3; the prescribed dose is higher), and from 90 the
  interval includes 0. So escalating a KCl supplement beyond that buys no demonstrated extra BP fall in
  the 17-131 range studied -- a between-trial reading in mostly hypertensive, 4-week trials, the same
  caveat that applies to the rising arm below.
- **Decision consequence for food.** Intakes in many countries (<70-80 mmol/d intake, see below) sit on
  the steep arm, under the near-plateau's start (\~117 mmol/d intake). For someone **with hypertension**
  and normal renal handling, raising food potassium toward \~120 mmol/d (\~4.7 g) is the cheap, low-harm
  move this curve supports, directionally: 27 of its 32 trials are in hypertensives, it is from
  supplement trials and its low arm is between-trial, so the food vehicle rests on Aburto's 3 advice
  trials and the stroke cohorts, not on this curve. For that stratum WHO's 90 mmol/d is a floor, not the
  top of the benefit. For a normotensive person the BP case for going past 90 is not shown (Aburto's 3
  trials are null; Filippini's normotensive results are figure-only, see below); there the reason to
  raise food potassium is the stroke cohorts' direction, not this curve. [inferred from @filippini2020potassium] The authors
  say as much: «However, these estimates are based on a heterogeneous population mainly composed by adults with hypertension, and therefore not necessarily representing the general population.»
  [@filippini2020potassium]
- **Unit trap.** Filippini's optimum is excretion, 90-130 mmol/d (3500-5100 mg/d), which by their own
  x1.3 factor is 4500-6500 mg/d of intake; they also read it as support for EFSA's 90 mmol/d (3500 mg/d)
  adequate intake. That sets their 90 mmol/d *excretion* against EFSA's 90 mmol/d *intake* (\~69
  excretion, roughly +3 mmHg SBP on their own curve by interpolating between 60 and 90); an adequate intake and a BP-curve plateau are not
  the same quantity either, so the support is directional only. EFSA funded the paper. [@filippini2020potassium]

**The rising arm is unadjudicated -- a U that is not a finding.** Filippini call the curve U-shaped,
with BP rising above a \~80 mmol/d difference. [@filippini2020potassium]
The concept's strong checks ([[The U-Shaped Association Artifact]]: referent correction, genetic
instrument) do not apply to pooled trials, so RCT-specific checks were run instead, and the rise does not
hold up as evidence of harm:
[inferred from @filippini2020potassium]

- **Six trials (seven arms), 109 participants sit above 80 mmol/d**, all untreated hypertensives or
  normotensives, all crossover, three from one German group (Overlack); one (Richards, 123) also cut
  sodium. The six drug-treated trials reach at most 74 mmol/d, and only one (Grimm, 74) lies above 46,
  so the treated-subgroup rise *from \~60* rests on a single trial at that subgroup's range edge.
  These differences cut both ways and do not settle the rise: on the paper's forest plots untreated
  hypertensives fell more (which would mask a rise) and normotensives, 2 of the 6, fell less (which
  could manufacture one), and the design contrast reverses between the forest plot (larger falls in
  crossover trials) and the design-stratified dose-response analysis (larger falls in parallel trials).
  [@filippini2020potassium]
  What leaves the arm unadjudicated is sparse-tail imprecision, below. [inferred from @filippini2020potassium]
- **The shape is a between-trial contrast.** Each 2-arm trial adds one randomized contrast over its own
  dose interval; randomization protects that contrast, not the comparison of a 120-mmol/d trial with a
  30-mmol/d one. The same holds for the low arm: the +9.1 at 30 mmol/d achieved sits below the lowest
  control arm (34 mmol/d), though +3.9 (2.1 to 5.8) at 60 rests on many trials.
- **Every reported SBP interval at the high end includes 0** (90 and 120 on the difference axis; 150,
  the plateau's edge, and 180 achieved;
  the treated and untreated subgroup rises are shown only in figures), and
  the authors concede the achieved results «yielded little evidence of an increase in BP following a high potassium intake».
  [@filippini2020potassium]
- **Two subsets show the rise at lower doses, figure-only.** In the design-stratified analysis the
  increase with the largest supplementation began at \~30 mmol/d (the sentence reads as the parallel
  subset), and in the >=12-week trials below 60 mmol/d, estimates the authors call «statistically
  imprecise». In Table 1 the parallel trials reach at most 74 mmol/d and the identifiable long trials
  are all parallel (Bulpitt, Grimm, Gu, Siani; the paper counts 5), so both subsets top out at Grimm,
  the same range-edge trial as the treated rise. The authors also cite a mechanism from laboratory and
  animal work: «a high potassium intake could favor sodium excretion and an increase in renin activity and aldosterone levels, also dependent on preexisting electrolyte balance»
  -- directional only.
  [@filippini2020potassium]
  [inferred from @filippini2020potassium]
- **The paper gives inconsistent accounts of who shows the rise**: treated hypertensives «but not in
  their untreated counterparts» in the abstract; in the Results, treated from \~60 and untreated from
  \~110 mmol/d on the difference axis, and no major difference by drug use on the achieved axis;
  hypertensives «or a normal level of BP» in the Discussion.
  [@filippini2020potassium]

**No tension filed with Aburto -- the issue is not joined.** Aburto's only BP statement on the top of
the range is a plateau, not a harm test: «Intake above 120 mmol/day did not seem to have any additional benefit.»
and «Because of the safety of consumption of increased potassium from food, our objectives did not include testing a potential upper limit of intake.»
[@aburto2013]
Its null adverse-effect results (renal function, lipids, catecholamines; «either in supplement or
dietary form») are not BP. On BP itself, Aburto's >60 difference band (4 trials, 222 participants;
read as intake it starts at \~46 mmol/d excretion, below Filippini's \~80 turn) has a point estimate of a
fall, -3.01 (-7.03 to 1.02, CI includes 0). [@aburto2013]
Its >155 achieved band, -3.00 (-6.28 to 0.27), is a treatment effect against control, not a level
against a 90 mmol/d reference, so it cannot be set beside Filippini's achieved points (the parameter
table marks that axis NO). [@aburto2013]
And the rise does not come from the shared trials. Aburto's Results assign its 22 meta-analysed RCTs to
refs 44-65; of the six Filippini trials above 80 mmol/d only Richards 1984 (ref 50; 12 participants)
is among them. Overlack 1991 (12) is ref 43, one of two studies Aburto «could not pool»; Matthesen 2012
(published after Aburto's 2011 search), Overlack 1985 and Overlack 1995 (63 participants) are not in
its reference list; and Barden appears only as a different report (ref 65, 1987, not Filippini's
1986), so whether that trial is shared is undetermined. Grimm, the top of the treated subgroup, is
absent too. [@aburto2013]
So the two reviews pooled largely different trials at the top, Aburto made no claim there, and every
reported interval on Filippini's rise includes 0 (the subgroup rises are figure-only): the issue is
not joined, so this is a distinction, not a tension. Filippini themselves call the U «somewhat
unexpected on the basis of previous clinical trial meta‐analyses and assessments».
[inferred from @filippini2020potassium]
Filippini's own advice that treated hypertensives with a high baseline intake should not exceed the
optimum is a **between-trial subgroup hypothesis** under the route-b rule, not a route-c
contraindication. What would settle it: a within-trial randomized comparison of three or more
supplement doses above 60 mmol/d, in treated hypertensives.
[inferred from @filippini2020potassium]

## Safety -- null on lipids/catecholamines/renal (HIGH), with one contraindication

Aburto's novel contribution: the first systematic search for potassium's **adverse** effects. All null,
all GRADE **high** -- no effect on total cholesterol (-0.12 mmol/L, NS), LDL, HDL, triglycerides, plasma
adrenaline/noradrenaline, or serum creatinine. The safety story has a **stratum boundary (route-c
contraindication)**:

> «People with impaired urinary potassium excretion can be at risk of hyperkalaemia... The risk is
> confined to those patients, most of whom are under medical supervision, and they were not included in
> this review. In people without renal impairment, the body is able to efficiently adapt and excrete
> excess potassium... Intervention trials including potassium consumption as high as 400 mmol/day from
> food for several weeks... reported no adverse effects.»
[@aburto2013]

**So the benefit is scoped to normal renal handling; in CKD or on potassium-sparing drugs the same
exposure is a harm.** No toxicity from *food* potassium has been reported (isolated acute cases from
*supplements* only) -- which is why Aburto set no upper limit for dietary intake. This is a genuine
exposure-stratum interaction of the kind the fabric ranks as decision-relevant, not a blanket *safe*.

**Food is a sufficient vehicle** -- supplements are not required:

> «the vehicle of increased potassium intake can be food and does not have to be a supplement... a
> beneficial effect of higher potassium intake from food on risk of stroke.»
[@aburto2013]

Fresh fruit, vegetables and pulses are the named sources; food processing strips potassium, and modern
intakes (<70-80 mmol/day in many countries) sit far below both the guideline and ancestral (>200
mmol/day) levels. -> [[Plant Foods]]

## The exposure measure is a recovery biomarker -- like sodium, unlike most of the corpus

RCTs were **required to estimate intake from 24-hour urinary potassium excretion** (conversion factor
1.3). Urinary potassium is one of the four **recovery biomarkers** Van Dam & Hunter name (with urinary
sodium, urinary nitrogen, doubly-labelled water) -- so potassium, like sodium and unlike FFQ-measured
exposures, yields **absolute** intake and is **auditable against a guideline cutpoint**. The cohorts,
however, mostly used dietary recall (two were dropped in sensitivity analysis for single-24h-recall
exposure, stroke RR held at 0.79). Full taxonomy and why this matters:
[[Measurement Error in Dietary Assessment]].
[inferred from @aburto2013]

## Synthesis -- the electrolyte pair is one lever, not two independent witnesses

**Nucleus link.** This page orbits [[Sodium Intake and Blood Pressure]] (nucleus of the
`cardiometabolic-exposures` cluster): sodium and potassium are the two arms of one BP/stroke story, and
the Na:K ratio is the joint target neither guideline scores alone.
[inferred from @aburto2013]

### The parallel is structural -- and it is NOT independent corroboration

Both electrolytes: (1) move BP most in hypertensives; (2) reach **stroke** as the one significant hard
cohort outcome while CVD/CHD/mortality stay null; (3) claim their hard-outcome benefit through the
**same BP-surrogate transfer** (shared WHO GRADE template -- see the «sodium» carryover above); (4) are
measured by **recovery biomarker**; and (5) come from the **same CASH/WASH advocacy lineage** (Cappuccio
and Elliott here are unpaid CASH/WASH members; He/MacGregor on the sodium side; D'Elia/Strazzullo/
Cappuccio authored the reused stroke cohort meta). **So the corpus's sodium and potassium findings are
two arms of one WHO/CASH programme, not cross-group convergence** -- the same laundering trap the sodium
page caught for the WHO/ESC/He agreement, one level up. **No `[E-independent]` is claimable between the
two electrolytes' BP-stroke stories.**
[inferred from @aburto2013]

### But the two exposures are NOT mirror images -- a genuine asymmetry

**Parameter table** (op-weave 2a) -- potassium-raising vs sodium-reduction on SBP, by BP stratum. These
are **different exposures**, so no cell is a *same quantity* match; the object of comparison is the
*stratum pattern*, individually sourced:

| Parameter | Potassium raised (Aburto) | Sodium reduced (held on sodium page) | Same quantity? |
|---|---|---|---|
| SBP effect, **hypertensive** | **-5.32 mmHg** (3.43-7.20), 16 RCTs | -5.39 (He) / -4.06 (WHO) | **NO — opposite exposures**; magnitudes comparable |
| SBP effect, **normotensive** | **+0.09 mmHg** (−0.77 to 0.95) -- **null** | -2.42 (He, sig) / -1.38 (WHO, sig) | **NO — and the pattern differs: potassium null, sodium NOT** |
| The one significant hard outcome | stroke RR 0.76 (text; Table 2 direct row 0.79, LOW) | stroke (WHO cohort RR \~1.24 per higher intake) | parallel structure, opposite direction of intake |

**The asymmetry is the finding:** sodium reduction lowers BP in **both** strata (larger in
hypertensives); potassium raising lowers BP **only** in hypertensives (normotensive effect is a flat
zero). So *cut sodium and raise potassium* are **not** symmetric advice -- for a normotensive person the
sodium lever still moves BP while the potassium lever (on current evidence) does not, though Aburto flags
the normotensive potassium trials as too short to rule out a prevention effect.
[inferred from @aburto2013]

**Filippini's normotensive results lean the other way, unquantified.** For normotensive and
hypertensive trials, in each stratum, the authors describe «a small decrease» up to a 20-30 mmol/d difference
(lasting to 60 mmol/d in normotensives vs 90 in hypertensives); on the achieved axis normotensives'
BP rose as excretion fell below 90 mmol/d (and DBP, not SBP, rose slightly above 90); and the Discussion gives a normotensive optimum of \~800 mg/d
supplemental and \~4500 mg/d total, against Aburto's flat 0.09 in 3 trials.
[@filippini2020potassium] All of this is figure-only
(no CI in the text), between-trial and from 5 trials, so there is no cell to set against Aburto's. The
asymmetry stands on Aburto's tabulated estimate; Filippini's results lean toward a low-intake benefit
in normotensives, flagged as a gap below.
[inferred from @filippini2020potassium]

### The Na:K ratio is the joint target -- asserted beneficial, not graded

> «if a person consumes 90 mmol/day or more potassium and the WHO recommended sodium intake of less than
&gt; 2 g/day, his or her intake would have a molar ratio of sodium to potassium of approximately one to one,
> a ratio considered beneficial for health.»
[@aburto2013]

Potassium is **more effective at higher sodium intake** (greatest SBP fall, -6.91, when sodium >4 g/day),
but still works at 2-4 g/day; studies changing **both** show more benefit than either alone (Aburto's
refs 94/95). More benefit is not added benefit `[2026-10-22]`: **if** potassium's effect is larger at
high sodium (Aburto's subgroup difference was not significant, and is between-trial), the levers are
sub-additive on BP -- doing both beats either, but the two effects should not be summed (a hypothesis;
see the sodium-modifier paragraph below). **Caveat:** the *1:1-beneficial* claim is sourced to a
2003 WHO/FAO consultation, not graded in this review, and the joint-intervention evidence is two studies,
not a meta-analysis -- an asserted target, not an evidenced one. This is what the sodium page flagged as
*explicitly out of scope* for WHO 2012; the potassium half now exists, but the **ratio itself remains
un-adjudicated on either page**. -> [[Surrogate Outcomes]] (a target is legitimate only if its
transmission to a hard outcome is itself evidenced).

**The sodium modifier on the dose curve `[2026-10-22, Filippini]`.** Split by baseline sodium excretion,
the potassium curve was much weaker below 3 g/d (N=8 trials); at 3-4 g/d (N=17) it turned from lowering
to raising at \~80 mmol/d (SBP); and at >=4 g/d (N=9): «The highest category of sodium exposure showed the largest decrease of both SBP and DPB, with no evidence of any BP increase, even for the highest amount of potassium supplementation.»
The authors could not test the hypertension x sodium interaction for lack of trials.
[@filippini2020potassium]
This repeats Aburto's direction (-6.91 at >4 g/d) on largely the same trials, so it is not a second
witness. It is also the potassium-side mirror of the explanation Sacks offered, hedged with *perhaps*,
for DASH-Sodium (low sodium blunting potassium's effect; held on [[Sodium Intake and Blood Pressure]]). Sacks's
diet x sodium interaction is within-trial and sub-additive (P<0.001), but its attribution to potassium is
untested, and Filippini's modifier is between-trial; so by the route-b rule the potassium modifier is a
**hypothesis**. If real, the two levers are partial substitutes on BP: doing both still beats either,
but do not add the effects, and do not tailor potassium advice by someone's salt intake on this.
[inferred from @filippini2020potassium]

### The joint Na:K lever now has a hard-outcome RCT — SSaSS `[2026-08-04, Neal SSaSS]`

The AWAITS this page lodged (*a salt-substitute RCT against a hard outcome*) is **cashed**: SSaSS (Neal
2021, NEJM) randomised 20,995 high-risk rural-Chinese adults (prior stroke or age >=60 + high BP) to a
**75% NaCl / 25% KCl salt substitute** vs regular salt and found lower **stroke** (RR 0.86, 0.77-0.96),
**major CV events** (RR 0.87, 0.80-0.94) and **all-cause death** (RR 0.88, 0.82-0.95) over 4.74 y —
absolute reductions of \~4.5-7.2 events per 1000 person-years.
[@neal2021]

**This moves the joint Na:K target from asserted to partly-evidenced — but only the *lever*, not the
ratio.** SSaSS achieved urinary potassium **+20.6 mmol** and sodium **−15.2 mmol** together, with SBP
−3.34 mmHg. So it is the first hard-outcome RCT of *raising K and cutting Na at once*, and it points the
joint direction the 1:1-ratio claim asserted. **But the confound runs in this page's favour too:** just
as the sodium page cannot credit the benefit to sodium alone, **this page cannot credit it to potassium
alone** — the two exposures move together and SSaSS used a single formulation, so it says nothing about
which *ratio* is optimal. The Na:K ratio as a graded, dose-optimised target stays open; what is now
evidenced is that the combined intervention reduces hard outcomes in a high-risk stratum.
[inferred from @neal2021]

**Hyperkalaemia — SSaSS refines the route-c contraindication with RCT data.** This page held the CKD
contraindication from Aburto's mechanism (impaired excretion -> hyperkalaemia risk). SSaSS supplies the
**RCT safety datum**: no excess serious hyperkalaemia (3.35 vs 3.30 per 1000 py; RR 1.04, 0.80-1.37;
P=0.76) and no excess sudden death — **in a population screened to exclude known kidney disease and
K-sparing/K-supplement use, with no biochemical prescreening and no serial serum-K measurement.** So the
contraindication is *confirmed, not lifted*: safe where renal handling is normal (as Aburto predicted),
untested where it is not. [@neal2021]

### The surrogate transfer upgrades through BPLTTC (type-F composite)

Aburto's hard-outcome warrant is a **bare assertion** that «blood pressure is recognised as a reliable
biomarker». That assertion is bounded and upgraded by [[Blood Pressure Lowering and Cardiovascular Events]]: BPLTTC's 344 716-participant RCT evidence establishes that a **5 mmHg SBP reduction cuts major
CV events \~10% (stroke 13%), even in primary prevention**. Potassium lowers SBP \~5.3 mmHg *in
hypertensives* -- so the composite chain **potassium -> BP (RCT) -> events (RCT)** is a stronger warrant
than Aburto's proxy claim alone. **But the arithmetic does not fully close:** BPLTTC's stroke -13% per 5
mmHg predicts only \~RR 0.87 from a 5.3 mmHg fall, whereas the direct cohort shows RR 0.76 in Aburto's
text, or 0.79 (0.68-0.93) in its LOW-graded Table 2 row
[@aburto2013] (a reduction
roughly 1.5-2 times the BP-mediated one). The two are not statistically inconsistent (0.87 sits inside
both reported CIs, 0.66-0.89 in the text and 0.68-0.93 in Table 2; both count nine cohort studies, but
the paper does not explain why the two estimates differ),
but the exposures are unmatched -- a modest RCT supplement dose vs a highest-vs-lowest cohort
*intake* contrast -- and the excess of the cohort effect over the BP-channel prediction is exactly what a
**BP-independent effect OR residual confounding** would produce. So the chain corroborates *direction*,
not magnitude. It is strongest **where potassium moves BP** (hypertensives); it does not license a
hard-outcome benefit in normotensives, where the BP effect is null.
[inferred from @aburto2013]

## What is absent -- the gaps that drive the next source

- **No absolute risk, no NNT** for stroke -- the RR 0.76 (0.79 in Table 2's LOW-graded row) cannot be ranked against another exposure in the
  fabric (telos layer 1). Absolute benefit scales with baseline stroke risk (route-a); a high-baseline-
  risk person gains more. -> [[Baseline Risk and the Relative-Absolute Split]]
- **Hard-outcome RCTs absent.** CVD/CHD/mortality rest on few underpowered cohorts (CVD 4, CHD 3,
  mortality 1) -- «detecting an effect is difficult even through meta-analysis». `G (needs aggregation)`:
  the direct potassium->events effect is a magnitude the current evidence base cannot pin.
- **The Na:K ratio is partly-adjudicated `[updated 2026-08-04]`** -- the *joint lever* now has a
  hard-outcome RCT (SSaSS, above: salt substitute cut stroke/CV events/death in high-risk adults), so
  *raising K + cutting Na together reduces hard outcomes* is evidenced. What stays un-adjudicated is the
  **ratio itself** -- SSaSS used one formulation, so no *optimal* Na:K ratio and no ratio dose-response is
  established; the 1:1-beneficial figure is still the ungraded 2003 consultation. `AWAITS` a graded
  meta-analysis of the sodium:potassium *ratio* (or the broader salt-substitute SR, e.g. Jafarnejad 2020
  / Greer 2020) against a hard outcome to pin the optimal ratio.
- **Children:** 3 trials, non-significant BP fall, high risk of bias -- an evidenced gap, not a null.
- **The supplement upper arm `[2026-10-22]`.** Whether BP rises above a \~80 mmol/d urinary arm
  difference (the prescribed dose runs higher) rests on 109 participants in 6 untreated/normotensive
  crossover trials; the treated-subgroup rise from \~60 rests on one trial past 46 mmol/d (Grimm, 74);
  the figure-only rises at lower doses in the parallel and >=12-week subsets also top out at Grimm.
  Named gap: a within-trial multi-dose RCT. Also no
  food-vehicle dose-response, and median trial length 4 weeks.
  [inferred from @filippini2020potassium]
- **Normotensive dose-response `[2026-10-22]`.** Aburto's null (3 trials) against Filippini's
  figure-only small fall up to a 20-30 mmol/d difference (5 trials): no tabulated, within-trial
  normotensive dose-response exists in the held sources.
  [inferred from @filippini2020potassium]
- **No LMIC hard-outcome data**; and Aburto did not examine the **mechanism** by which potassium lowers
  BP (explicitly deferred).

[inferred from @aburto2013]

## Limits

- **Single primary source** (Aburto/WHO 2013) `[superseded 2026-10-22: three sources now, but the BP
  evidence is largely one trial pool, except above \~80 mmol/d]`; gold-tier SR+MA design, but the hard-outcome arm is cohort
  evidence at LOW/VERY-LOW certainty and the synthesis above is single-lineage.
- **The second BP meta-analysis is not a second witness** `[2026-10-22]`: Filippini 2020 re-pools a
  trial set that contains most of Aburto's, with a PubMed-only search, no certainty rating and an EFSA
  grant; it adds shape, not independent confirmation.
  [@filippini2020potassium]
- **Competing interest, disclosed and material to the interpretive claims.** Cappuccio and Elliott are
  unpaid CASH/WASH members; Aburto was WHO staff; funding included the Kidney Evaluation Association
  Japan and the governments of Japan and Korea. The RCT-pooled BP effects and null safety findings are
  hard data taken at face value; the pro-intake framing (the *benefits most people in most countries*
  extrapolation, the 1:1-ratio target) is advocacy-shaped and caveated at point of use -- symmetric
  standards, the same discipline applied to the sodium lineage.
- **Some small-study bias possible** (funnel plots not clear); SBP I2=96% across 21 trials; removing one study cut it to 65% (Results, *Effect estimates*).

[@aburto2013]

## References

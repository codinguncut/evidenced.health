---
type: framework
question: Does the DASH dietary pattern lower blood pressure and cardiometabolic risk factors, by how much, and is the effect the pattern or one of its components?
aliases: [DASH, DASH Diet, Dietary Approaches to Stop Hypertension, DASH and Blood Pressure, DASH Cardiovascular Risk Factors]
authors: [Siervo, Mario; Lara, Jose; Chowdhury, Shakir; Ashor, Ammar; Oggioni, Carla; Mathers, John C; Chiavaroli, Laura; Blanco Mejia, Sonia; Salas-Salvado, Jordi; Kendall, Cyril WC; Sievenpiper, John L; Filippou, Christina D; Tsioufis, Costas P; Thomopoulos, Costas G; Mihas, Costas C; Dimitriadis, Kyriakos S; Sotiropoulou, Lida I; Chrysochoou, Christina; Nihoyannopoulos, Petros I; Tousoulis, Dimitrios M; Sacks, Frank M.; Svetkey, Laura P.; Vollmer, William M.; Appel, Lawrence J.]
sources: [Siervo - DASH Diet Cardiovascular Meta-Analysis 2015, Chiavaroli - DASH Cardiometabolic Umbrella Review, Filippou - DASH Blood Pressure Hypertension Meta-Analysis 2020, Sacks - DASH Diet Sodium Blood Pressure 2001]
cluster: sodium-bp
confidence: medium
relationships:
  related_to:
    - Sodium Intake and Blood Pressure
    - Potassium Intake and Blood Pressure
    - Blood Pressure Lowering and Cardiovascular Events
    - Dietary Nitrate and Blood Pressure
    - Named Diet Programs Compared
    - Mediterranean Diet and Cardiovascular Events
    - Is the Food Category Doing Any Work
    - Surrogate Outcomes
    - Baseline Risk and the Relative-Absolute Split
created: 2026-08-07
updated: 2026-10-06
self_critiqued: 2026-10-06
---

Siervo 2015 (Br J Nutr) is a **systematic review and meta-analysis of 20 RCTs (1917 participants,
intervention duration 2-24 weeks)** of the DASH dietary pattern against a control diet, on blood
pressure and metabolic risk factors. It is the wiki's DASH-specific pooling — distinct from the
whole-named-diet network of [[Named Diet Programs Compared]] (which ranks DASH against 13 other
programmes on weight *and* cardiovascular risk factors, finding between-diet differences trivial) and
from the single-electrolyte pages ([[Sodium Intake and Blood Pressure]],
[[Potassium Intake and Blood Pressure]]). [@siervo2015]

**One caveat governs the whole page: every measured endpoint is a SURROGATE** — blood pressure,
lipids, glucose. **No hard outcome (mortality, MI, stroke, incident CVD) is measured**; the trials are
2-24 weeks long. The often-quoted *\~13% reduction in 10-year CVD risk* is a **Framingham risk-score
projection** of the BP + cholesterol changes (a computed score, not an observed event count)
-> [[Surrogate Outcomes]]. What DASH
does to events is a separate, not-established-here claim (transmission held on
[[Blood Pressure Lowering and Cardiovascular Events]]).

> **A number-decoding note.** The source PDF's OCR renders minus signs as a leading `2` and `P<` as
> `P,` (e.g. it prints the SBP effect as `25·2 mmHg ... P,0·001`). Every effect below is the **decoded**
> value (`-5.2 mmHg`, `P<0.001`), read against the sign-consistent abstract, results and forest plots.
> Quoted prose spans are OCR-clean and reproduce verbatim; the garbled *numeric* strings are deliberately
> NOT quoted verbatim.

## The pooled effects — BP and atherogenic lipids move, glucose/HDL/TAG do not

DASH vs control, random-effects pooled mean differences [@siervo2015]:

| Risk factor | DASH vs control (95% CI) | P | State |
|---|---|---|---|
| Systolic BP | **-5.2 mmHg** (-7.0, -3.4) | <0.001 | benefit (I2=76%, high heterogeneity) |
| Diastolic BP | **-2.6 mmHg** (-3.5, -1.7) | <0.001 | benefit |
| Total cholesterol | -0.20 mmol/l (-0.31, -0.10) | <0.001 | benefit |
| LDL cholesterol | -0.10 mmol/l (-0.20, -0.01) | 0.03 | benefit (small) |
| Glucose | -0.19 mmol/l | 0.07 | no meaningful effect |
| HDL cholesterol | +0.003 mmol/l (-0.05, 0.05) | 0.95 | no meaningful effect |
| Triglycerides | -0.005 mmol/l (-0.06, 0.05) | 0.87 | no meaningful effect (Egger P=0.01, some publication bias) |

The BP effect was robust to study design (controlled-feeding vs dietary-advice) and control-diet type,
though the SBP decline was larger against a *typical* American control than against an already-healthy
control diet. [@siervo2015]

## Effect modification — larger BP fall at higher baseline BP and higher BMI (route-b)

> «Reductions in systolic and diastolic BP following randomisation to the DASH diet were greater in
> participants with higher BP or BMI at baseline. For each mmHg increase in baseline systolic and
> diastolic BP, the effect size for both BP variables increased by about 0·1 mmHg.»
[@siervo2015]

This reads as a route-(b) effect-modification signal, the same pattern the sodium literature shows for
its own BP effect (hypertensive >> normotensive, [[Sodium Intake and Blood Pressure]]) — **but treat it
as artifact-prone, not confirmed.** A higher baseline BP *mechanically* permits a larger absolute fall
(floor/regression-to-the-mean), and a cross-trial meta-regression of effect-size-on-baseline is exactly
the design that manufactures such a signal — the sibling sodium page makes the same caution (Huang treats the
hypertensive/normotensive dichotomy as a weak, arbitrarily-defined modifier -> [[Sodium Intake and Blood Pressure]]). The
decision use below is conservative regardless of whether the modification is real. The studied range is
above-optimal-BP / stage-1 hypertension with BMI \~23-37, so DASH's BP benefit is demonstrated in an
elevated-risk population and should not be read as a fixed effect for an optimal-BP, lean person.
[inferred from @siervo2015]

## Surrogate scope — BP is shown; hard events are not, and the authors say so

The meta-analysis measures risk factors over weeks. Its own Discussion draws the surrogate boundary
explicitly:

> «the efﬁcacy of the DASH diet in reducing the risk of complications, reoccurrence of major
> cardiovascular events, and mortality in patients with more severe heart conditions is currently not
> known.»
[@siervo2015]

So the DASH -> hard-outcome step is carried, not by these trials, but by the general BP -> events
transmission: a proven \~10% reduction in major CV events per 5 mmHg SBP, reaching even primary
prevention -> [[Blood Pressure Lowering and Cardiovascular Events]] (BPLTTC). Applying that transmission
to DASH's -5.2 mmHg SBP would *predict* a \~10% relative CV-event reduction — but that is an inference
across a **different intervention** (BPLTTC is pharmacological lowering), so it is a plausible direction,
not measured evidence, and the **absolute** benefit still scales with baseline risk
([[Baseline Risk and the Relative-Absolute Split]]). The one dietary BP route that *did* reach hard
outcomes in the corpus is a potassium-enriched salt substitute (SSaSS), not DASH.

**PARTIAL update below.** The umbrella review (Chiavaroli 2019) adds a *direct observational* DASH ->
hard-outcome layer — cohort associations with incident CVD, CHD, stroke and diabetes — so the events
step is no longer carried by BP-transmission alone. But those are cohort DASH-adherence-score
associations at GRADE low / very low (residual-confounding / healthy-user structure), not the RCT
hard-outcome trial that is still owed — see the umbrella section below.

**Symmetric-standards flag on the source's own conclusion.** Siervo's abstract ends *"The DASH diet is
an effective nutritional strategy to prevent CVD"* — a hard-outcome claim drawn from surrogate deltas
plus a modelled Framingham projection, with no event measured. Read as an over-reach of exactly the
surrogate-to-outcome kind [[Surrogate Outcomes]] warns against; the graded finding this page keeps is
**DASH lowers BP and atherogenic lipids**, not that it prevents CVD events.
[inferred from @siervo2015]

## Which component is doing the work? The MA cannot decompose — but it is NOT the sodium

DASH is a **multi-component pattern**: higher fruit/vegetable/low-fat-dairy/wholegrain, lower red meat,
sweets, total and saturated fat.

> «the DASH dietary pattern promotes a higher intake of protective nutrients such as K, Ca, Mg, ﬁbre
> and vegetable proteins and, at the same time, a lower intake of reﬁned carbohydrates and saturated
> fat.»
[@siervo2015]

The BP effect «may be due to the combined effects of these molecules on multiple physiological
mechanisms» (antioxidant capacity, natriuresis, endothelial function, sympathetic activity; the
authors also flag a high inorganic-nitrate intake, \~1200 mg/d, feeding NO generation). **No single
component can be isolated as the cause from this MA** — it pools whole-pattern-vs-control contrasts, so
the exposure is the bundle. The **nitrate** component is now estimated head-on by the same group's
dedicated MA -> [[Dietary Nitrate and Blood Pressure]] (Siervo 2013: dietary nitrate alone lowers SBP
\~4.4 mmHg), which **bounds** how much of DASH's -5.2 mmHg could be nitrate — but is the same team's
refinement (type-F), not independent corroboration, so it does not license summing DASH and nitrate as
separate additive levers (overlapping NO mechanism).
[inferred from @siervo2015; @siervo2013nitrate] This is the pattern-as-exposure face of [[Is the Food Category Doing Any Work]]:
the estimate describes the pattern, and attributing it to any one nutrient is beyond what the design
identifies. [@siervo2015]

**The one component the MA can partly rule OUT is sodium — partly, because a null is weak.** Siervo's
meta-regression found the between-arm difference in dietary sodium did **not** predict the BP change; a
non-significant meta-regression reflects limited power and modest between-trial Na variation as much as
a true non-role (the same caveat the sodium page attaches to WHO's null by-intake test), so this
*bounds* sodium's contribution to DASH's effect rather than excluding it:

> «Differences in dietary Na intake between the DASH and control intervention groups were not associated
> with changes in systolic and diastolic BP as well as with glucose and lipid concentrations».
[@siervo2015]

**Parameter table** (op-weave 2a) — is DASH's BP effect the same quantity as the sodium-reduction BP effect?

| Parameter | Siervo DASH 2015 | Sodium-reduction pages | Same quantity? |
|---|---|---|---|
| Exposure | whole DASH **pattern** vs control diet | **sodium reduction** vs usual sodium | **NO — a multi-component pattern vs a single component** |
| Pooled SBP effect | **-5.2 mmHg** (-7.0, -3.4), 20 RCTs | He -4.18 / WHO -3.39 mmHg ([[Sodium Intake and Blood Pressure]]) | **NO — different exposure and comparator** |
| Role of sodium in the effect | between-arm Na difference **not associated** with BP change (SBP P=0.67, DBP P=0.81) | sodium **is** the exposure | **NO — DASH's effect is not the sodium contrast** |

**Two consequences, kept distinct.**

- **Do not attribute DASH's BP effect to its sodium content**, and **do not sum -5.2 (DASH) with -4.18
  (sodium reduction) as if independent additive levers** — they are overlapping-mechanism, not two
  clean additive channels, and Siervo shows the incidental Na differences between DASH and control
  arms are not what moved BP here.
- **But DASH and salt restriction DO stack when both are deliberately applied.** Siervo notes «feeding
  trials have demonstrated the additive effects of salt restriction on the efﬁcacy of the DASH dietary
  pattern in reducing BP» (the DASH-Sodium factorial design). So *adding* a sodium cut on top of DASH
  buys further BP reduction — a complementary lever — even though DASH's *own* vs-control effect is not
  driven by sodium. [@siervo2015]

[inferred from @siervo2015]

## The umbrella upgrade — a hard-outcome cohort layer + GRADE calibration (Chiavaroli 2019)

Chiavaroli 2019 (Nutrients) is an **umbrella review of systematic reviews and meta-analyses**,
commissioned by the Diabetes and Nutrition Study Group (DNSG) of the EASD, pooling **3 SR/MAs of 15
unique prospective cohorts (n=942,140) and 4 SR/MAs of 31 controlled trials (n=4,414)** on the DASH
pattern vs control, graded throughout with GRADE. [@chiavaroli2019]
It is a **stronger design** (umbrella of SR/MAs) and **more recent** than the incumbent Siervo MA, and
it adds two things the single-MA page lacked: a **direct hard-outcome cohort layer** and a
**per-outcome GRADE calibration**.

**NOT independent corroboration — its BP/lipid pooling IS Siervo 2015.** The umbrella's blood-pressure
and lipid estimates come from its reference [11] = Siervo et al. 2015 — the exact MA already anchoring
this page — cited as antecedent and re-imported. So this is **type-F refinement / attribution, and
explicitly NOT a type-E independent corroboration** (a source that restates an earlier one it
explicitly cites is never E), and the two share the Toronto/Sievenpiper + Salas-Salvado/Kendall school
besides. **Do not read the
umbrella's BP number as a second confirmation of Siervo's** — it is the same estimate.
[inferred from @chiavaroli2019; @siervo2015]

**Parameter table** (op-weave 2a) — is the umbrella's BP effect the same quantity as Siervo's?

| Parameter | Chiavaroli 2019 (umbrella) | Siervo 2015 (incumbent) | Same quantity? |
|---|---|---|---|
| Source of the BP pool | its ref [11] = **Siervo 2015** | Siervo 2015 itself | **YES — literally the same MA** |
| Systolic BP | **-5.20 mmHg** (-7.00, -3.40), 19 trials | **-5.2 mmHg** (-7.0, -3.4), 20 RCTs | **YES — same estimate, re-imported** |
| Diastolic BP | **-2.60 mmHg** (-3.50, -1.70) | -2.6 mmHg (-3.5, -1.7) | **YES — same estimate** |

[@chiavaroli2019]

**The genuinely new layer — direct cohort hard-outcome associations** (each from a *different*
underlying MA, none the Sievenpiper school, all observational DASH-adherence-score cohorts):

| Outcome (incident, cohort) | RR (95% CI) | GRADE certainty | pooling MA |
|---|---|---|---|
| CVD | 0.80 (0.76-0.85) | low | Schwingshackl 2015 |
| CHD | 0.79 (0.71-0.88) | very low (indirectness — middle-aged/elderly women) | Salehi-Abargouei 2013 |
| Stroke | 0.81 (0.72-0.92) | low | Salehi-Abargouei 2013 |
| Diabetes | 0.82 (0.74-0.92) | very low (inconsistency I2=62%) | Jannasch 2017 |

[@chiavaroli2019]
These are \~18-21% relative reductions, but a DASH-adherence score in a cohort is a **diet-quality
proxy** correlated with many healthy behaviours, so the residual-confounding / healthy-user structure
is why the umbrella itself grades them **low to very low** — directional support for the DASH -> events
step, **not** the causal proof an RCT would give.
[inferred from @chiavaroli2019]

**Per-outcome GRADE (risk factors), the calibration the incumbent page lacked:** SBP **moderate**,
DBP low, LDL-C **moderate**, Total-C low, body weight **moderate**, HbA1c low, fasting insulin /
HOMA-IR moderate, blood glucose low, CRP low. Two outcomes are new vs the Siervo-only table: **body
weight -1.42 kg** (-2.03, -0.82; GRADE moderate; Soltani 2016) and **HbA1c -0.53%** (-0.62, -0.43;
GRADE low; a manual 2-trial MA). The umbrella's overall verdict:
> «The certainty of the evidence based on the GRADE approach was very low to low for associations with
> cardiometabolic disease incidence and low to moderate for effects on cardiometabolic risk factors.»
[@chiavaroli2019]

**The surrogate boundary is softened, not dissolved — the authors say so.** Even with the cohort
layer, the umbrella closes on the same honest gap this page already held:
> «In this regard, there remains a need for large randomized trials of the effect of the DASH dietary
> pattern on clinical CVD outcomes in those with and without diabetes.»
[@chiavaroli2019]

**Diabetes-status transportability — a reasoned judgment, not a subgroup test.** The umbrella extends
its finding to people *with* diabetes, but note the warrant: it explicitly **declined to downgrade for
indirectness** despite most trials/cohorts being in people without diabetes, resting instead on
component-level RCTs showing «evidence of a subgroup effect by diabetes status» was absent and on
diabetes-only trials whose effects sat within or beyond the pooled CIs. [@chiavaroli2019]
That is a route-(a)-style *no reason to expect a different relative effect* judgment (the authors' own
choice not to downgrade), **not positive route-(b) effect-modification evidence** that DASH works
*better or worse* in diabetes — so read it as reasonable transportability, not a stratified claim.
[inferred from @chiavaroli2019] — the reasoned-judgment-not-subgroup-test
framing is this page's; the no-downgrade decision and the component-RCT warrant are Chiavaroli's.

<div class="recent-update" data-last-updated="2026-10-06">

## A second pooling on a different metric — smaller effect, no baseline-BP modifier (Filippou 2020)

Filippou 2020 (Adv Nutr) pools **30 RCTs (n=5545; mean age 51, BMI 29.2, baseline 134.3/84.9 mmHg,
mean follow-up 15.3 wk)** of DASH vs a control diet, searched to Feb 2019, and grades certainty with
GRADE. [@filippou2020dash]

> «Compared with a control diet, the DASH diet reduced both SBP and DBP (diﬀerence in means: −3.2 mm Hg;
&gt; 95% CI: −4.2, −2.3 mm Hg; P < 0.001, and −2.5 mm Hg; 95% CI: −3.5, −1.5 mm Hg; P < 0.001,
> respectively). Hypertension status did not modify the eﬀect on BP reduction.»
[@filippou2020dash]

GRADE was **moderate for both SBP and DBP**, downgraded for blinding or incomplete outcome data; half the
trials carried >2 unclear/high risk-of-bias items; no publication bias was detected; the estimate held in
the high-quality (n=15) and ITT (n=18) subsets. [@filippou2020dash]

**Parameter table** (op-weave 2a) — is Filippou's BP effect the same quantity as Siervo's?

| Parameter | Filippou 2020 | Siervo 2015 (incumbent) | Same quantity? |
|---|---|---|---|
| Effect metric | between-arm difference in **attained** (post-intervention) BP | between-arm difference in **change from baseline** where appropriate; end-of-intervention values for crossover trials | **NO — different estimand for parallel trials** |
| Trial pool | 30 RCTs, n=5545, to Feb 2019 | 20 RCTs, n=1917 | **PARTLY — 15 of Filippou's 30 trials are Siervo's** |
| Pooled SBP | **-3.2 mmHg** (-4.2, -2.3) | **-5.2 mmHg** (-7.0, -3.4) | **NO — metric and pool differ** |
| Pooled DBP | -2.5 mmHg (-3.5, -1.5) | -2.6 mmHg (-3.5, -1.7) | NO (same caveat; the point estimates happen to agree) |
| Baseline-BP modifier | hypertension vs normotension SBP -3.9 vs -3.9 (P=0.96); SBP >=140 vs <140 P=0.70; baseline SBP n.s. in univariate meta-regression (the multivariate model lists baseline SBP and BMI as determinants of DBP reduction) | \~0.1 mmHg larger fall per mmHg higher baseline (meta-regression) | **NO — subgroup/regression on different metrics** |
| Sodium moderator | trial **absolute sodium-intake level** >2400 vs <=2400 mg/d: SBP -4.5 vs -2.1 (P=0.003) | **between-arm sodium difference**: not associated with BP change | **NO — different variables** |

Filippou column: [@filippou2020dash]. Siervo column: [@siervo2015]

**What the comparison licenses, and what it does not.**

**F, not E.** 15 of the 30 trials overlap, so Filippou is a refinement of the incumbent pooling, not
independent corroboration. No author is shared with Siervo or Chiavaroli.

**The SBP gap (-3.2 vs -5.2) is not attributable from the held material.** Filippou argues the
change-from-baseline metric «introduces outcome-related bias and, therefore, is hardly comparable with
our BP estimates» [@filippou2020dash],
but the pools also differ (15 trials not in Siervo), and nothing held separates metric from pool
composition. That is a `G (needs aggregation)` gap. Quote the two point estimates with their intervals,
not a single number: SBP **-3.2 (-4.2, -2.3)** (Filippou, mean follow-up \~15 wk) and **-5.2 (-7.0,
-3.4)** (Siervo, 2-24 wk); Filippou's pool averages 134/85 mmHg at baseline, Siervo reports no pooled
baseline. Some other poolings Filippou lists sit higher still (Saneei -6.7; a network MA -7.4), so this pair is
not the bounds of the literature.

**The route-(b) baseline-BP signal from Siervo is not reproduced in Filippou's hypertension-status
and >=140 splits** (hypertensive and normotensive trials both -3.9 mmHg SBP, P=0.96; >=140 vs <140
P=0.70). Filippou raises regression to the mean as one possible reason. But one result and one caveat
point the other way: untreated hypertensives had a larger point estimate (-5.9, CI -9.9 to -1.8, vs
-3.9 in all hypertensives; vs treated P=0.07; never tested against normotensives), which the authors
read as support for «a larger BP change in untreated individuals, who usually demonstrate higher
baseline BP levels» [@filippou2020dash],
and they caution that the >=140 split mixes in treated patients. Two between-trial analyses on different
metrics cannot settle effect modification either way, so this is an **attenuation of the route-(b)
claim, not a refutation**. The safe default is route (a): stratify by baseline CV risk, and do not
promise a bigger relative mmHg fall to someone because their BP is higher. [inferred from @filippou2020dash; @siervo2015]

**Age is a hypothesis, not a stratifier.** Trials with mean age <50 showed a larger SBP fall (-4.9 vs
-2.0 mmHg, P<0.001), and age was the one significant univariate meta-regression covariate (P=0.002).
The authors frame it as having «raised the hypothesis that age may be an inverse modulator», warn that
meta-regressions are «cross-sectional tools without a prospective potential», and note it is
«undetermined whether individual trial patients were above or below» each threshold. [@filippou2020dash]
A between-trial age gradient is the false-positive generator route (b) warns about; it does not
license telling an older person DASH works less for them.

**On top of drug therapy: a non-zero fall, size uncertain.** In 7 trials of treated hypertensives,
SBP fell -2.1 mmHg (-2.5, -1.8) versus -5.9 (-9.9, -1.8) in 8 trials of untreated hypertensives; the
difference was not significant (P=0.07 SBP, P=0.23 DBP), and the authors conclude the effect holds
«irrespective of baseline BP levels or ongoing antihypertensive treatment, although the extent of BP-
lowering is greater in those with higher sodium intake and younger individuals» (their stated modifiers
are sodium and age, not treatment). [@filippou2020dash]
So the *stacks on drugs* claim below holds; whether the add-on is smaller than the first-line effect is
suggested by the point estimates, not shown. [inferred from @filippou2020dash]

**Three \~2 mmHg subgroups are probably one finding.** The <=2400 mg/d sodium subgroup (-2.1; -2.5,
-1.8), the age >=50 subgroup (-2.0; -2.4, -1.8) and the treated-hypertension subgroup (-2.1; -2.5,
-1.8) carry near-identical narrow intervals with I2 near 0%, and Table 2's trial lists overlap heavily
(7 of the 9 high-sodium trials are also in the age <50 group), and the largest trial, Naseem (ref 40,
n=1492), sits in all three low-effect subgroups. [@filippou2020dash]
The likeliest reading is that a few large, heavily weighted trials drive all three low-effect
subgroups, so sodium level, age and drug treatment are confounded with each other between trials and
none of them is established as the modifier. [inferred from @filippou2020dash]

**Sodium level: a between-trial interaction, held at the same status as age** (SBP -4.5 vs -2.1 mmHg
above vs at/below 2400 mg/d, P=0.003), confounded with age as above. Filippou cites DASH-Sodium (Sacks)
for an effect «almost 3-fold higher» at higher sodium, but that trial contributes arms to both sodium
subgroups, so it is not separate support. The stacking consequence is on
[[Sodium Intake and Blood Pressure]].
[@filippou2020dash]

**The pooled contrast is not pure DASH.** Eligibility admitted DASH combined with sodium restriction,
weight loss or exercise «whether or not the control group underwent equal lifestyle changes»
[@filippou2020dash], so some of the
-3.2 mmHg can be co-intervention. Energy restriction did not modify the effect (P=0.48), which limits
but does not exclude that.

**Durability unknown.** «The mean follow-up time was relatively small (almost 15 wk), thus it cannot
be suggested that the BP-lowering effect of the DASH diet is extended to longer periods.» [@filippou2020dash]

[inferred from @filippou2020dash; @siervo2015] — the F-not-E call, the two-estimates statement, the confounded-subgroups reading and the route-(a)-not-(b) reading are this page's; the estimates, subgroup results and the authors' caveats are Filippou's.

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## The within-trial test: DASH adds less at low sodium, and the two stack sub-additively (Sacks 2001)

DASH-Sodium (NEJM 2001; n=412, SBP 120-159 / DBP 80-95 mmHg, 41% stage-1 hypertensive, 56-57% black by arm,
antihypertensive users excluded) randomized people to DASH or a typical-US control diet and then fed each
person high, intermediate and low sodium for 30 days each in random order. All food was provided and
weight held constant. Achieved urinary sodium was about 142, 107 and 65 mmol/d.
[@sacks2001dashsodium]
The trial sits inside the Siervo and Filippou pools (Filippou ref 46), so it refines them; it is not a
second witness to the pooled DASH effect. [inferred from @sacks2001dashsodium; @filippou2020dash; @siervo2015]

DASH vs control SBP fell from **-5.9 mmHg** (-8.0, -3.7) at high sodium to **-5.0** (-7.6, -2.5) at
intermediate and **-2.2** (-4.4, -0.1) at low; DBP from -2.9 (-4.3, -1.5) to -2.5 (-4.1, -0.8) and
-1.0 (-2.5, 0.4). [@sacks2001dashsodium]

> «It had a larger effect on both systolic and diastolic blood pressure at high sodium levels than it did
> at low ones (P<0.001 for the interaction).»
[@sacks2001dashsodium]

**Parameter table** (op-weave 2a) — is Sacks's interaction the same quantity as Filippou's sodium subgroup?

| Parameter | Filippou 2020 | Sacks 2001 | Same quantity? |
|---|---|---|---|
| What is compared | DASH-vs-control attained SBP, trials with sodium intake >2400 vs <=2400 mg/d | DASH-vs-control SBP at three sodium levels fed to the same people | **PARTLY — both are the DASH effect conditional on sodium; one between trials, one within a trial** |
| Estimates | -4.5 (-6.1, -3.0) vs -2.1 (-2.5, -1.8), P=0.003 | -5.9 (-8.0, -3.7) / -5.0 (-7.6, -2.5) / -2.2 (-4.4, -0.1), interaction P<0.001 | **Direction yes; magnitudes NO** (different cut, metric and pool) |
| Sodium contrast | one cut at 2400 mg/d (\~104 mmol) | randomized levels, urinary \~142 / \~107 / \~65 mmol/d | **NO — Filippou's cut sits near Sacks's middle level** |
| Confounding by age / drug treatment | present: 7 of 9 high-sodium trials also in the age <50 group | sodium order randomized within person; drug users excluded | **NO — this is the difference that matters** |
| Independence | Sacks (ref 46) contributes arms to both subgroups | — | **NOT independent** |

Filippou column: [@filippou2020dash]. Sacks column: [@sacks2001dashsodium]

**What this adds, and what it does not.** Within one randomized population, with age and drug use
unable to vary with sodium level, DASH's BP effect was smaller at low sodium. So the direction of
Filippou's sodium-level split is no longer only a between-trial hypothesis: the DASH x sodium interaction
has positive within-trial evidence (route b), in a 30-day feeding trial on a surrogate. It does **not**
show that Filippou's \~-2 mmHg low-effect subgroups are explained by sodium rather than age or drug
treatment; Sacks reports no age subgroup and enrolled no drug-treated people.
[inferred from @sacks2001dashsodium; @filippou2020dash]

**The combination is the largest effect, but smaller than the sum.** DASH plus low sodium vs control plus
high sodium lowered SBP **-8.9 mmHg** (-6.7, -11.1) and DBP -4.5 (-3.1, -5.9); in hypertensives SBP fell
-11.5, in non-hypertensives -7.1. [@sacks2001dashsodium]

> «The reductions in blood pressure caused by the combination of dietary interventions were smaller than
> they would have been if the effects of each dietary intervention were strictly additive (P<0.001 for
> the interaction).»
[@sacks2001dashsodium]

Adding the two single effects measured from the same high-sodium control start (DASH -5.9, sodium cut
-6.7 on the control diet) would predict about -12.6 mmHg; the trial observed -8.9. Siervo's phrase that
feeding trials showed «additive effects of salt restriction» (quoted above) is right in its evident sense
(salt restriction adds further reduction on DASH); it should not be read as strict additivity, which the
trial rejects. The halved sodium step, the smaller DASH effect at low sodium and the shortfall from the sum
are one diet x sodium interaction seen from each lever (12.6 - 8.9 = 6.7 - 3.0 = 5.9 - 2.2 = 3.7 mmHg SBP).
[inferred from @sacks2001dashsodium; @siervo2015]

**Scope.** 30-day periods, controlled feeding (efficacy, not what people achieve on their own; the
authors write «long-term health benefits remain to be demonstrated»), BP only, US adults with above-optimal BP,
low-sodium target 50 mmol/d not reached (achieved \~65).
[@sacks2001dashsodium]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Limits

- **Surrogate-only, 2-24 weeks.** No hard endpoint; the CVD-prevention claim is a modelled projection.
- **High heterogeneity on the primary outcome** (SBP I2=76%), and some publication bias for TAG (Egger
  P=0.01).
- **Almost entirely US / non-European trials** — the authors flag limited evidence on applicability
  and acceptability outside the USA. Transportability of the magnitude is untested.
- **No *independent* second pooling of the BP effect** — `confidence: medium` **holds, not raised.**
  The umbrella (Chiavaroli 2019) is a stronger design and adds a GRADE-calibrated cardiometabolic +
  cohort-incidence layer, **but its BP/lipid estimate is Siervo re-imported** (same trials, same
  school), so it upgrades the *framing and design pedigree* without multiplying the underlying
  evidence; and the new DASH -> events layer it brings is cohort-grade **low / very low**. What would
  move confidence up is the RCT hard-outcome trial the umbrella itself still calls for, or a
  genuinely independent BP pooling — neither is held. The DASH -> hard-events question is now
  *partially* answered (observationally), no longer a bare type-G gap.
- **Second pooling held, confidence still `medium` (2026-10-06).** Filippou 2020 is a larger, newer,
  GRADE-moderate pooling, but it shares 15 of 30 trials with Siervo and uses a different metric, so it
  adds a second, lower SBP estimate (-3.2 vs -5.2 mmHg) rather than independent support. It also
  weakens the baseline-BP modification claim. No hard-outcome RCT, and follow-up stays about 15 wk.
  [inferred from @filippou2020dash]
- **A primary trial added, confidence still `medium` (2026-10-06).** Sacks 2001 (DASH-Sodium) is one of
  the pooled trials, so it adds no independent support for the pooled DASH effect. What it adds is
  within-trial structure: the DASH x sodium interaction and the sub-additive combination, from 30-day
  feeding periods on a BP surrogate. [inferred from @sacks2001dashsodium]

[inferred from @siervo2015; @chiavaroli2019]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Decision relevance

- **DASH is an evidenced BP-lowering pattern** (-5.2/-2.6 mmHg vs control) with a modest LDL/total-
  cholesterol co-benefit and no glucose/HDL/TAG effect — a real surrogate move, larger in
  higher-BP / higher-BMI people.
- **Its value on hard outcomes rides on the BP -> events chain AND a direct cohort layer** — DASH
  adherence is associated with \~18-21% lower incident CVD / CHD / stroke / diabetes in cohorts, but at
  GRADE low / very low (diet-score confounding) [@chiavaroli2019],
  so this is directional observational support, not RCT proof; credit it the way you credit any
  lifestyle BP reduction, and weigh the absolute benefit by the person's baseline CV risk, not by the
  mmHg alone.
- **Works as first-line OR add-on BP therapy** — the pooled trials included both unmedicated
  hypertensives and people already on BP drugs, with a significant BP fall in both
  [@chiavaroli2019], so DASH is not made
  redundant by pharmacotherapy — it stacks on top.
- **Do not double-count DASH with sodium reduction**; treat them as complementary (stackable) levers,
  not additive-independent ones.
- **The *choice between* named programmes barely matters for weight or BP** ([[Named Diet Programs Compared]],
  where between-diet differences are trivial) — but that is a between-diet statement; DASH-vs-usual-diet
  still buys a real BP reduction, and DASH is the pattern designed for and specifically pooled on BP here.
- **DASH vs Mediterranean is an outcome-specific split, not a contest** — DASH is best-evidenced on the BP
  *surrogate* (here), Mediterranean on hard *events* (PREDIMED); where the two meet on the same BP endpoint
  they are near-equivalent, and DASH's own hard-event RCT is the gap the umbrella still calls for. The
  head-to-head reading -> [[Named Diet Programs Compared]] (DASH-vs-Mediterranean section).

**Updates 2026-10-06 (Filippou) to the list above.**

*Magnitude and the higher-BP clause:* a second, larger pooling on attained BP gives **-3.2/-2.5 mmHg**
(GRADE moderate), so quote SBP as two estimates, -3.2 (-4.2, -2.3) and -5.2 (-7.0, -3.4), not one. The
same pooling finds **no** hypertensive-vs-normotensive difference and no significant BMI difference
(>=30 vs <30: -3.9 vs -2.6, P=0.12), so the *larger in higher-BP / higher-BMI people* clause is now
contested, not established; stratify by baseline CV risk (route a) instead. [@filippou2020dash]

*First-line vs add-on:* trials in treated hypertensives pooled SBP -2.1 mmHg (-2.5, -1.8; 7 trials) vs
-5.9 in untreated; the gap was not significant (P=0.07). [@filippou2020dash]

*DASH with sodium reduction:* between trials, the DASH effect was smaller where sodium intake was lower
(SBP -2.1 at <=2400 mg/d vs -4.5 above). [@filippou2020dash] This hints at an interaction, but it is confounded with age, so it is a
hypothesis, not a reason to expect less from DASH after cutting salt.

**Update 2026-10-06 (Sacks DASH-Sodium) to the item above and to the do-not-double-count bullet.**

*DASH after a sodium cut:* within one randomized feeding trial, DASH lowered SBP -5.9 mmHg at \~142 mmol/d
sodium but only -2.2 (-4.4, -0.1) at \~65 mmol/d (interaction P<0.001). [@sacks2001dashsodium]
So someone who has already cut sodium to that level should expect a smaller extra BP fall from DASH, on
30-day feeding evidence; the age confound in Filippou's split is not resolved by this. [inferred from @sacks2001dashsodium; @filippou2020dash]

*Stacking:* the two levers stack sub-additively: DASH plus low sodium gave -8.9 mmHg SBP against a
predicted \~-12.6 if the single effects summed. Both together still beat either alone, so for maximal BP
lowering do both, and estimate the combined effect from the factorial (-8.9 in this trial), not by adding two separate numbers. The trial's
-11.5 hypertensive / -7.1 non-hypertensive split is a prespecified but unadjusted single-trial subgroup
(P=0.004), not a stratum estimate; the page default stays route (a). [inferred from @sacks2001dashsodium]

</div>

## References

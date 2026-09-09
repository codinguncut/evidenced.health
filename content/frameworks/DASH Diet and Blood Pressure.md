---
type: framework
question: Does the DASH dietary pattern lower blood pressure and cardiometabolic risk factors, by how much, and is the effect the pattern or one of its components?
aliases: [DASH, DASH Diet, Dietary Approaches to Stop Hypertension, DASH and Blood Pressure, DASH Cardiovascular Risk Factors]
authors: [Siervo, Mario; Lara, Jose; Chowdhury, Shakir; Ashor, Ammar; Oggioni, Carla; Mathers, John C; Chiavaroli, Laura; Blanco Mejia, Sonia; Salas-Salvado, Jordi; Kendall, Cyril WC; Sievenpiper, John L]
sources: [Siervo - DASH Diet Cardiovascular Meta-Analysis 2015, Chiavaroli - DASH Cardiometabolic Umbrella Review]
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
updated: 2026-09-09
self_critiqued: 2026-09-09
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

<div class="recent-update" data-last-updated="2026-09-09">

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

</div>

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

<div class="recent-update" data-last-updated="2026-09-09">

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

</div>

<div class="recent-update" data-last-updated="2026-09-09">

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

[inferred from @siervo2015; @chiavaroli2019]

</div>

<div class="recent-update" data-last-updated="2026-09-09">

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

</div>

## References

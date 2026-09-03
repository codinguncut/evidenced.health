---
type: framework
question: Does the DASH dietary pattern lower blood pressure and cardiometabolic risk factors, by how much, and is the effect the pattern or one of its components?
aliases: [DASH, DASH Diet, Dietary Approaches to Stop Hypertension, DASH and Blood Pressure, DASH Cardiovascular Risk Factors]
authors: [Siervo, Mario; Lara, Jose; Chowdhury, Shakir; Ashor, Ammar; Oggioni, Carla; Mathers, John C]
sources: [Siervo - DASH Diet Cardiovascular Meta-Analysis 2015]
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
updated: 2026-08-28
self_critiqued: 2026-08-28
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

**Symmetric-standards flag on the source's own conclusion.** Siervo's abstract ends *"The DASH diet is
an effective nutritional strategy to prevent CVD"* — a hard-outcome claim drawn from surrogate deltas
plus a modelled Framingham projection, with no event measured. Read as an over-reach of exactly the
surrogate-to-outcome kind [[Surrogate Outcomes]] warns against; the graded finding this page keeps is
**DASH lowers BP and atherogenic lipids**, not that it prevents CVD events.
[inferred from @siervo2015]

<div class="recent-update" data-last-updated="2026-08-28">

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

</div>

## Limits

- **Surrogate-only, 2-24 weeks.** No hard endpoint; the CVD-prevention claim is a modelled projection.
- **High heterogeneity on the primary outcome** (SBP I2=76%), and some publication bias for TAG (Egger
  P=0.01).
- **Almost entirely US / non-European trials** — the authors flag limited evidence on applicability
  and acceptability outside the USA. Transportability of the magnitude is untested.
- **Single gold-tier MA, no independent second pooling held** — `confidence: medium`. A DASH-Sodium
  or DASH-hard-outcome source would move this; the DASH -> events question stays open (type-G gap),
  answerable only via the BP-transmission cross-link, not directly.

[inferred from @siervo2015]

## Decision relevance

- **DASH is an evidenced BP-lowering pattern** (-5.2/-2.6 mmHg vs control) with a modest LDL/total-
  cholesterol co-benefit and no glucose/HDL/TAG effect — a real surrogate move, larger in
  higher-BP / higher-BMI people.
- **Its value on hard outcomes rides on the BP -> events chain, not on DASH trials** — credit it the
  way you credit any lifestyle BP reduction, and weigh the absolute benefit by the person's baseline
  CV risk, not by the mmHg alone.
- **Do not double-count DASH with sodium reduction**; treat them as complementary (stackable) levers,
  not additive-independent ones.
- **The *choice between* named programmes barely matters for weight or BP** ([[Named Diet Programs Compared]],
  where between-diet differences are trivial) — but that is a between-diet statement; DASH-vs-usual-diet
  still buys a real BP reduction, and DASH is the pattern designed for and specifically pooled on BP here.

## References

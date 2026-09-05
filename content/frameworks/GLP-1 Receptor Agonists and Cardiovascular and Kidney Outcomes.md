---
type: framework
question: What does the GLP-1 receptor agonist class do to hard cardiovascular, kidney, and mortality outcomes across cardiovascular-outcome trials — and how does that size the lifestyle weight-loss lever?
aliases: [GLP-1 Class Cardiovascular Outcomes, GLP-1 Class Kidney Outcomes, GLP-1 CVOT Meta-Analysis, Badve GLP-1 Meta-Analysis, GLP-1 MACE Class Effect, GLP-1 Kidney Failure]
authors: [Badve, Sunil V; Bilal, Anika; Lee, Matthew M Y; Sattar, Naveed; Gerstein, Hertzel C; Ruff, Christian T]
sources: [Badve - GLP-1 Receptor Agonists Kidney Cardiovascular Outcomes 2024]
cluster: glp1
confidence: high
relationships:
  related_to:
    - Semaglutide for Cardiovascular Risk in Obesity
    - Semaglutide and Kidney Outcomes in Chronic Kidney Disease
    - Comparing Obesity Drugs
    - Does Weight Loss Reduce Cardiovascular Events
    - Layer 1 - Ranking Interventions for a Stratum
    - Surrogate Outcomes
    - Baseline Risk and the Relative-Absolute Split
    - GLP-1 Non-Cardiometabolic Effects and Safety
created: 2026-09-05
updated: 2026-09-05
self_critiqued: 2026-09-05
---
<div class="recent-page" data-last-updated="2026-09-05"></div>


The GLP-1 receptor agonists are a widely-prescribed standard drug class, so their efficacy and limits on
hard outcomes are a stratum-level decision in their own right (the *Pharmacotherapy taper*). This page
holds the **class-level pooled evidence** — the cardiovascular-outcome-trial (CVOT) programme read
together — which the single-agent pages in this cluster cannot supply: [[Semaglutide for Cardiovascular Risk in Obesity]] is one agent in one non-diabetic population (SELECT), and [[Semaglutide and Kidney Outcomes in Chronic Kidney Disease]] is one agent in one CKD population (FLOW). Badve 2024 pools 11
trials to answer the class question and, for the first time, shows the class moves a **hard** kidney
outcome rather than a surrogate.

**Scope.** This is the class efficacy/limitations appraisal (IN, per the *Pharmacotherapy taper*: a
class efficacy comparison is admissible). Per-agent selection, dosing/titration, and the management of
CKD or diabetes are OUT (prescriber/frontier zone) and not covered here.


[@badve2024glp1]
## What the meta-analysis pooled

A gold-tier aggregate-data meta-analysis of RCTs (PROSPERO-registered, PRISMA, GRADE, all trials low
risk of bias): **11 trials, 85,373 participants** — 67,769 with type 2 diabetes across ten CVOTs, plus
the 17,604 non-diabetic participants of SELECT (overweight/obese with established cardiovascular disease,
added post hoc as the only completed GLP-1 CVOT without diabetes). Eligible trials needed >=500 T2D
participants, a placebo comparator, >=12 months follow-up, and a *primary clinical* kidney or
cardiovascular outcome — trials with a surrogate primary outcome, and dual GIP/GLP-1 agonists
(tirzepatide), were excluded.

- **Agents:** semaglutide (four trials, incl. FLOW and SELECT), exenatide (two), and albiglutide,
  dulaglutide, efpeglenatide, liraglutide, lixisenatide (one each).
- **Horizon — the studied range:** median follow-up **25.2 months (range 15.9 to 64.8)**. The class
  effects below are characterized over \~2 years, not a lifetime; do not read them as lifetime effects.
- **Kidney-risk context (bounds the absolute kidney benefit):** mean baseline eGFR 77.2 mL/min/1.73m2,
  only 22.7% with eGFR <60 and 9.5% with ACR >300 mg/g — apart from FLOW, no trial enrolled high kidney
  risk, so kidney event rates were low.


[@badve2024glp1]
## Cardiovascular outcomes — a robust class effect, high-certainty

In participants with type 2 diabetes, versus placebo (all high-certainty evidence; with-SELECT figures
in brackets, p-heterogeneity by diabetes status >0.05 throughout):

| Outcome | HR (95% CI), T2D | With SELECT added | NNT / notes |
|---|---|---|---|
| MACE (CV death, nonfatal MI, nonfatal stroke) | 0.87 (0.81-0.93), I2=49.75% | 0.86 (0.80-0.92) | NNT 74 over 25.1 mo |
| Cardiovascular death | 0.86 (0.80-0.92) | — | component |
| Nonfatal myocardial infarction | 0.90 (0.82-0.99) | — | p-het by diabetes 0.02, both arms benefit |
| Nonfatal stroke | 0.87 (0.79-0.96) | — | component |
| Hospitalisation for heart failure | reduced 13% | — | p-het 0.48 |
| All-cause death | 0.88 (0.83-0.93), I2=0% | 0.87 (0.82-0.91) | NNT 101 (T2D) / 104 (all) |

Leave-one-out analysis found no single trial drove MACE or all-cause death, and effects were consistent
across all pre-specified subgroups (age, sex, BMI, CVD, eGFR, agent type, dosing frequency,
follow-up duration). This is the decision-relevant fact the single-agent pages could not establish: the
CV/mortality benefit is a **class** property spanning the T2D CVOT programme, not a semaglutide-only or
obesity-only finding, and it holds regardless of diabetes status.


[@badve2024glp1]
## Kidney outcomes — the class moves a HARD outcome, not just a surrogate (the key refinement)

This is the beyond-the-predecessor move. The prior class meta-analysis (Sattar 2021, not held) reported
a 21% reduction in a composite kidney outcome, but — in Badve's own words — «this composite kidney
disease outcome was mainly driven by new-onset macroalbuminuria, a surrogate outcome not validated for
clinical kidney disease outcomes». Albuminuria is a risk marker, not a validated kidney-failure
surrogate, especially at low albuminuria and near-normal function ([[Surrogate Outcomes]]). Badve
re-runs the question on a **hard** composite that *excludes* new-onset macroalbuminuria:

| Kidney outcome (T2D) | HR (95% CI) | Certainty | NNT |
|---|---|---|---|
| Composite (kidney failure, or sustained >=50% eGFR fall, or kidney death) | 0.82 (0.73-0.93), I2=26% | high | 164 over 25.1 mo |
| Kidney failure (KRT, persistent eGFR <15, or kidney death) | 0.84 (0.72-0.99), I2=0% | moderate | — |
| Worsening kidney function (sustained >=50% eGFR fall) | 0.79 (0.68-0.92) | high | — |

The **kidney failure** reduction is demonstrated «for the first time». It matters because GLP-1-driven
weight loss could *artificially* flatter creatinine-based eGFR — «GLP-1 receptor agonists cause weight
loss, which may in turn reduce creatinine generation due to reduced muscle mass and therefore
artificially improve creatinine-based eGFR measurements. The separately significant reduction in the
risk of kidney failure provides important reassurance that the kidney benefits of GLP-1 receptor
agonists are real and clinically important». Kidney failure (dialysis/transplant) is not creatinine-
confoundable in that way, so its reduction anchors the composite against the muscle-loss artifact. FLOW
carried 49% of the kidney-failure weight, but heterogeneity was 0%, so the direction holds across the
kidney-risk range.

**Absolute kidney benefit is modest.** Because most trials enrolled low kidney risk, «the observed
absolute risk reductions were modest with relatively higher NNT than that reported in the dedicated
kidney disease outcomes trials of SGLT2 inhibitors» (kidney NNT 164 vs MACE NNT 74). The relative
effect is real; the absolute payoff scales with baseline kidney risk (route (a), [[Baseline Risk and the Relative-Absolute Split]]) and is largest in the FLOW-type high-risk stratum.


[@badve2024glp1]
## The cost side — net of the drug's own harms

The class benefit must be read net of its costs (the substitution principle: a lever's marginal value is
net of the alternative's own harms).

- **Serious adverse events: no difference** — 31.7% vs 32.9%, RR 0.95 (0.90-1.01) — but I2=88.5%, so
  the source itself says to interpret the pooled safety numbers «carefully».
- **Treatment discontinuation for adverse events is higher on drug** — 12.7% vs 9.2%, RR 1.51
  (1.18-1.94), I2=96.3%. This is the GI tolerability tax, and it is an *adherence* cost: an intervention
  not taken has no effect. The class page for the fuller non-cardiometabolic ledger is [[GLP-1 Non-Cardiometabolic Effects and Safety]].
- **No signal** for the feared harms: acute pancreatitis, medullary thyroid cancer, pancreatic cancer,
  all cancers, severe hypoglycaemia, retinopathy — all similar to placebo.
- **Not covered by the drug:** lifelong dependency (benefit decays on stopping — see the withdrawal
  evidence on [[Semaglutide for Cardiovascular Risk in Obesity]]), cost, and the fact that a drug
  manages markers without fixing the upstream driver (structural leverage stays with the lifestyle
  lever).


## Synthesis — Layer-1 sizing: what this shrinks, and what it does NOT

**The class summary.** GLP-1 receptor agonists are, on this evidence, «the first and only class of
medications with proven benefits on composite kidney and cardiovascular outcomes, all individual
components of composite kidney and cardiovascular outcomes, death due to any cause, and hospitalisation
for heart failure across a range of cardiovascular risk and chronic kidney disease severity in people
with and without diabetes» [@badve2024glp1]. For the T2D / high-CV-risk stratum this is a mature, effective, low-harm drug that captures
CV-event, mortality, heart-failure and (in high kidney risk) hard-kidney benefit.

**What it shrinks (Layer 1).** A mature effective drug for an outcome shrinks the *marginal* rank of a
lifestyle lever **for the outcomes it covers** ([[Layer 1 - Ranking Interventions for a Stratum]]). For
the T2D stratum, the availability of a drug that robustly cuts MACE, CV death, all-cause death and hard
kidney events reduces how much *additional* CV/renal/mortality benefit a lifestyle weight-loss lever
must be relied on to deliver at the margin.

**What it does NOT shrink — two guards.**

- **Guard (i): substitution is outcome-specific.** The lifestyle weight-loss lever retains its
  other-channel value that the GLP-1 drug does not substitute — T2D remission ([[Total Diet Replacement and Type 2 Diabetes Remission]]), the all-cause-mortality benefit of intentional weight loss ([[Does Weight Loss Reduce Cardiovascular Events]], Ma 2017), MASLD regression, function. The drug shrinks the
  lever's rank only for CV events, mortality and kidney outcomes, not for these.
- **The CV benefit here is largely weight-INDEPENDENT.** These are glucose-lowering CVOTs with modest
  weight loss, and GLP-1 CV benefit separates early, before much weight is lost — it is a drug
  pleiotropic effect, not a weight-loss effect. So this evidence does *not* show that losing weight cuts
  CV events; it *reinforces* the [[Does Weight Loss Reduce Cardiovascular Events]] thesis that the route
  matters. [inferred from @badve2024glp1]

**The choice stays the person's (Layer 3).** Layer 1 only sizes the marginal rock; whether a person
takes the drug, the lifestyle lever, or both is elicited against adherence, cost, GI tolerability and
reversibility.


## Independence — this is refinement (F), NOT independent backing (E)

Badve is **not** an independent (type-E) route to the GLP-1 CV/kidney findings held elsewhere, and no
`[E-independent]` claim is made anywhere on this page or in the cluster.

- **Author overlap defeats it outright.** Badve shares Colhoun with SELECT ([[Semaglutide for Cardiovascular Risk in Obesity]]) and shares Perkovic, Tuttle, Rossing and Mahaffey with FLOW
  ([[Semaglutide and Kidney Outcomes in Chronic Kidney Disease]]). A shared author defeats independence
  before any citation-chase.
- **Trial-constituency overlap defeats it again.** Badve *pools* SELECT and FLOW as constituent trials —
  a primary trial pooled into a meta-analysis is not independent of that trial.
- **It is the successor to the un-held predecessor.** Badve updates the 2021 GLP-1 CVOT meta-analysis
  (Sattar 2021, a Badve co-author) that [[Semaglutide for Cardiovascular Risk in Obesity]] flagged as an
  echo rather than independent backing. Badve now *holds* the class-level evidence that page's caveat
  said was missing — this is claim-refinement across the cluster (**type F**), the composite beating any
  single-agent page alone.


## Decision relevance

- **T2D + high CV or kidney risk:** the GLP-1 class is a strong, high-certainty lever for MACE, CV
  death, all-cause death, heart failure, and (at high kidney risk) hard kidney outcomes — NNT 74 for
  MACE and 101 for death over \~2 years. This sizes down the marginal CV/renal/mortality rank of the
  lifestyle weight-loss lever for this stratum, net of a GI-driven discontinuation cost (RR 1.51) and
  lifelong dependency.
- **Non-diabetic:** the class effect appears consistent regardless of diabetes status, but SELECT is the
  *only* non-diabetic trial in the pool, so the non-diabetic generalization rests on one trial — hold it
  as high-certainty for T2D, weaker for primary-prevention non-diabetic strata (the standing
  primary-prevention gap on [[Semaglutide for Cardiovascular Risk in Obesity]]).
- **Kidney:** the class prevents hard kidney events, not just macroalbuminuria — but the absolute
  benefit is modest outside high kidney risk (NNT 164), so it is decision-moving mainly in the
  FLOW-type stratum.

[inferred from @badve2024glp1]


## Gaps

- **G (needs aggregation across a missing exposure):** no dedicated GLP-1 primary-prevention CVOT in
  non-diabetic low-risk adults; the non-diabetic arm is SELECT alone.
- **G:** dual GIP/GLP-1 agonists (tirzepatide) were *excluded* by design, so this class effect does not
  transport to them — the tirzepatide CV-outcome trial is still awaited ([[Comparing Obesity Drugs]],
  [[Semaglutide for Cardiovascular Risk in Obesity]]).
- **G:** no individual-participant data, so no baseline-characteristic subgroup analysis (e.g. heart
  failure phenotype).

## References

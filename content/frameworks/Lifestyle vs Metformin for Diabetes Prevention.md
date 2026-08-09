---
type: framework
question: In people with prediabetes, does an intensive lifestyle program or metformin better prevent progression to type 2 diabetes?
aliases: [Diabetes Prevention Program, DPP, Metformin for Diabetes Prevention, Preventing Type 2 Diabetes, Prediabetes Intervention, Lifestyle vs Drug for Diabetes Prevention]
authors: [Diabetes Prevention Program Research Group (org); Knowler, William C]
sources: [Knowler - Diabetes Prevention Program DPP 2002]
cluster: t2d-prevention
nucleus: true
confidence: medium
relationships:
  related_to:
    - Does Weight Loss Reduce Cardiovascular Events
    - Baseline Risk and the Relative-Absolute Split
    - Total Diet Replacement and Type 2 Diabetes Remission
    - Surrogate Outcomes
    - Layer 1 - Ranking Interventions for a Stratum
created: 2026-08-07
updated: 2026-08-07
self_critiqued: 2026-08-07
---

The Diabetes Prevention Program (DPP) is the landmark head-to-head: in people with prediabetes, it
randomized an **intensive lifestyle program**, **metformin**, and **placebo** against each other and
followed incident type-2 diabetes. It is a clean instance of the telos's *drug-as-the-realistic-
alternative* comparison — a behaviour change and a drug tested on the *same* patient-important outcome, in
the *same* trial. The headline: **an intensive lifestyle program out-prevented the drug.**

## What DPP tested [@knowler2002]

A 3-arm RCT, «3234 nondiabetic persons with elevated fasting and post-load plasma glucose concentrations»
(prediabetes — impaired fasting glucose + impaired glucose tolerance), randomized to:

- **placebo**;
- **metformin** «850 mg twice daily»;
- an **intensive lifestyle-modification program** with the goals of «at least a 7 percent weight loss and
  at least 150 minutes of physical activity per week» (a 16-lesson curriculum, one-to-one case managers,
  low-calorie low-fat diet).

Mean age 51, mean BMI 34.0, 68% women, 45% minority; average follow-up 2.8 years; primary outcome
**diabetes incidence** (ADA criteria). A fourth arm (troglitazone) was discontinued in 1998 for liver
toxicity and is not reported. The blinded phase was stopped \~1 year early on the data monitoring board's
advice once efficacy was demonstrated.

## The head-to-head result — lifestyle beat the drug

Incidence: 11.0 / 7.8 / 4.8 cases per 100 person-years (placebo / metformin / lifestyle).

> «The lifestyle intervention reduced the incidence by 58 percent (95 percent confidence interval, 48 to
> 66 percent) and metformin by 31 percent (95 percent confidence interval, 17 to 43 percent), as compared
> with placebo; the lifestyle intervention was significantly more effective than metformin.»
> [@knowler2002]

Lifestyle vs metformin directly: 39% lower incidence (95% CI 24 to 51). The comparison as a table (the
value here is the *joined* comparison, not two separate arms):

| | Placebo | Metformin | Lifestyle |
|---|---|---|---|
| Incidence (cases/100 person-yr) | 11.0 | 7.8 | 4.8 |
| Relative reduction vs placebo | — | 31% (17-43) | 58% (48-66) |
| Cumulative incidence at 3 yr | 28.9% | 21.7% | 14.4% |
| Weight change (kg) | -0.1 | -2.1 | -5.6 |
| NNT (3 yr, to prevent one case) | — | 13.9 (8.7-33.9) | 6.9 (5.4-9.5) |

> «To prevent one case of diabetes during a period of three years, 6.9 persons would have to participate in
> the lifestyle-intervention program, and 13.9 would have to receive metformin.»
> [@knowler2002]

So on the absolute frame ([[Baseline Risk and the Relative-Absolute Split]]), lifestyle prevents one case
per \~7 people treated 3 years vs one per \~14 for metformin — roughly twice the absolute yield. The
COI direction is worth naming under [[Symmetric standards]]: the trial was funded in part by Bristol-Myers
Squibb — which the paper notes «sells metformin in the United States» — and Parke-Davis, and one author held
BMS stock, yet the finding runs *against* the drug the funder sells (the study metformin and placebo were
supplied by Lipha Pharmaceuticals). So the conflict does not undercut the headline.
[inferred from @knowler2002]

## The subgroup split — lifestyle works broadly, metformin works selectively

This is the decision-relevant subgroup structure, and the two arms behave differently:

- **Lifestyle was effective across essentially every stratum.** «The lifestyle intervention was highly
  effective in all subgroups.» It did not differ significantly by sex or race/ethnic group and was «at
  least as effective in older participants as it was in younger participants» (numerically largest in the
  oldest: 48% / 59% / 71% at ages 25-44 / 45-59 / >=60). Its one significant modifier: it was stronger at
  *lower* baseline post-load glucose — «Its effect was significantly greater among persons with lower
  base-line glucose concentrations two hours after a glucose load than among those with higher base-line
  glucose values.» [@knowler2002]
- **Metformin's effect was concentrated in the more obese and more hyperglycemic** — genuine effect
  modification (significant heterogeneity), near-null at the lean / lower-fasting-glucose end:
  > «The effect of metformin was less with a lower body-mass index or a lower fasting glucose concentration
  > than with higher values for those variables. Neither interaction was explained by the other variable or
  > by age.» [@knowler2002]

  | Metformin vs placebo, by stratum | Reduction (95% CI) |
  |---|---|
  | BMI 22 to <30 | **3% (-36 to 30)** — near-null |
  | BMI 30 to <35 | 16% (-19 to 41) |
  | BMI >=35 | 53% (36 to 65) |
  | Fasting glucose 95-109 mg/dl | **15% (-12 to 36)** — near-null |
  | Fasting glucose 110-125 mg/dl | 48% (33 to 60) |

- **Consequently the lifestyle *advantage over metformin* was largest exactly where metformin was
  weakest** — «The advantage of the lifestyle intervention over metformin was greater in older persons and
  those with a lower body-mass index than in younger persons and those with a higher body-mass index.»
  [@knowler2002]

The decision-change: **metformin is a stratum-specific drug for prevention** (worth most in the younger,
more obese, more hyperglycemic; near-useless in the lean/near-normal-fasting), while **lifestyle is a
broad-spectrum lever** that works across strata. The route-(b) machinery this instantiates is worked on
[[Baseline Risk and the Relative-Absolute Split]] (one trial showing an arm with modified relative effect
beside an arm with a roughly constant one). [inferred from @knowler2002]

## Outcome scope — diabetes incidence is shown; CV/mortality is NOT this trial

DPP's endpoint is **diabetes incidence** — a disease-onset outcome, better than a pure surrogate (it is a
diagnosis, not a lab marker), but **not** a hard cardiovascular or mortality endpoint, and DPP is neither
powered nor long enough for those. «Hospitalization and mortality rates were unrelated to treatment.» The
paper is explicit that the downstream question is unanswered here and belongs to later follow-up:

> «These questions should be addressed by continued follow-up of the study participants and by analysis of
> the main secondary outcomes — reductions in risk factors for cardiovascular disease, in the proportion of
> participants with atherosclerosis, and in the proportion with cardiovascular disease, which is the leading
> cause of death among patients with type 2 diabetes.»
> [@knowler2002]

So the honest claim is: **preventing/delaying the *diagnosis* of diabetes is demonstrated; that this
translates into fewer heart attacks, less nephropathy, or longer life is a separate claim not established
by DPP** — it depends on «whether the maintenance of these lower levels improved the long-term outcome».
That is the DPP Outcomes Study (DPPOS) long-term follow-up, not held here [AWAITS (Goldberg - DPPOS Cardiovascular Events 2022) — whether preventing incident diabetes reduces hard CV/microvascular/mortality endpoints]. Diabetes-incidence
prevention sits one rung below a hard outcome on the [[Surrogate Outcomes]] ladder, and the page must not
let the incidence win stand in for a mortality win.

## Why lifestyle beat metformin — mechanism, and what DPP could NOT attribute

Metformin and lifestyle reduced fasting glucose similarly, but lifestyle did more on post-load glucose and
HbA1c — consistent with metformin's narrow mechanism: «metformin suppresses endogenous glucose production,
the main determinant of fasting plasma glucose concentrations.» [@knowler2002]
The lifestyle arm acts on the broader defect (insulin resistance via weight and activity), so it normalizes
the post-load excursion the drug leaves largely untouched.

**The weight-loss mediation is intuitive but NOT tested here.** The lifestyle arm lost \~5.6 kg and the
temptation is to read the 58% as a weight-loss dose-response — but the trial explicitly disclaims this:

> «The study, however, was not designed to test the relative contributions of dietary changes, increased
> physical activity, and weight loss to the reduction in the risk of diabetes, and the effects of these
> components remain to be determined.»
> [@knowler2002]

So the widely-quoted «each kg lost \~16% lower diabetes risk» figure is from a *later* DPP mediation
analysis, **not this paper**, and is not asserted here [AWAITS (Hamman - DPP Weight Loss Mediation 2006) — the per-kg mediation estimate]. This page connects to the weight-loss cluster
([[Does Weight Loss Reduce Cardiovascular Events]]) as an adjacency, not as evidence that weight loss *per
se* is the sole mediator.

## Adherence and adverse events

Adherence to the lifestyle goals decayed — the [[Adherence is part of the effect]] point in a landmark
program: «Fifty percent of the participants in the lifestyle-intervention group had achieved the goal of
weight loss of 7 percent or more by the end of the curriculum (at 24 weeks), and 38 percent had a weight
loss of at least 7 percent at the time of the most recent visit» (the activity goal: 74% at 24 weeks, 58%
at last visit). [@knowler2002] The 58% reduction was
delivered *despite* this real-world decay — it is the effect of a program as actually adhered to, not of
perfect compliance.

Harms were modest and differed by arm: gastrointestinal symptoms highest on metformin (77.8 vs 12.9
events/100 person-yr on lifestyle), musculoskeletal symptoms highest on lifestyle (24.1). No deaths were
attributed to any intervention. [@knowler2002]

## Decision relevance

- **For prediabetes, an intensive lifestyle program is first-line** — it roughly doubles the absolute
  prevention yield of metformin (NNT \~7 vs \~14 over 3 years) and works across strata. Frame it as the
  substitution it is: lifestyle *versus* the drug, on the same outcome, not as an add-on.
- **Metformin is the realistic alternative where lifestyle is not delivered or not enough** — and its value
  is stratum-dependent: substantial in the younger / more obese / more hyperglycemic, near-null in the lean
  with near-normal fasting glucose. Prescribing it to the latter buys little.
- **The advice is outcome-scoped.** It prevents/delays the *diagnosis*; whether that averts heart attacks
  or extends life is not shown by DPP and should not be promised on its strength (see Outcome scope above).
- **Intensity matters.** DPP's lifestyle arm was «systematic and intensive» with individualized case
  management — the 58% is the effect of a *resourced* program, and a thinner real-world implementation is a
  different, likely weaker, exposure.

## Limits and provenance

- **Single landmark RCT** (though internally replicated: the same 58% appeared in the Finnish DPS, and the
  Chinese Da Qing study showed 31-46% with diet/exercise — both cited by DPP, neither held here)
  [AWAITS (Tuomilehto - Finnish DPS 2001) — independent replication of the lifestyle effect]
  [AWAITS (Pan - Da Qing IGT Study 1997) — diet/exercise prevention]. A held second prevention trial would
  move the head-to-head from a landmark single trial toward a synthesis.
- **Prediabetes-selected, US, mean BMI 34** — transports to similar prediabetic populations; the placebo
  incidence (11.0/100 person-yr) was higher than observational data, from selecting people with three
  strong risk factors plus frequent testing, so the *absolute* numbers are for a high-risk stratum.
- **Diabetes incidence, not hard outcomes** (see Outcome scope) — the binding limit on what this page
  licenses.
- **Component contributions unattributed** (diet vs activity vs weight loss) by design.

## References

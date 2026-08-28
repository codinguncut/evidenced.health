---
type: framework
question: In people with prediabetes, does an intensive lifestyle program or metformin better prevent progression to type 2 diabetes?
aliases: [Diabetes Prevention Program, DPP, Metformin for Diabetes Prevention, Preventing Type 2 Diabetes, Prediabetes Intervention, Lifestyle vs Drug for Diabetes Prevention]
authors: [Diabetes Prevention Program Research Group (org); Knowler, William C; Goldberg, Ronald B; Orchard, Trevor J; Crandall, Jill P; Tuomilehto, Jaakko; Lindström, Jaana; Pan, Xiao-Ren; Hamman, Richard F]
sources: [Knowler - Diabetes Prevention Program DPP 2002, Goldberg - DPPOS Cardiovascular Events 2022, Tuomilehto - Finnish DPS 2001, Pan - Da Qing IGT Study 1997, Hamman - DPP Weight Loss Mediation 2006]
cluster: t2d-prevention
nucleus: true
confidence: high
relationships:
  related_to:
    - Does Weight Loss Reduce Cardiovascular Events
    - Baseline Risk and the Relative-Absolute Split
    - Total Diet Replacement and Type 2 Diabetes Remission
    - Surrogate Outcomes
    - Layer 1 - Ranking Interventions for a Stratum
created: 2026-08-07
updated: 2026-08-26
self_critiqued: 2026-08-26
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

So the honest claim from DPP alone was: **preventing/delaying the *diagnosis* of diabetes is demonstrated;
that this translates into fewer heart attacks, less nephropathy, or longer life is a separate claim not
established by DPP** — it depends on «whether the maintenance of these lower levels improved the long-term
outcome». That downstream question is **now answered** by the DPP Outcomes Study (DPPOS) — see below.
Diabetes-incidence prevention sits one rung below a hard outcome on the [[Surrogate Outcomes]] ladder, and
DPPOS shows why the page was right not to let the incidence win stand in for a mortality win.

## DPPOS — the hard-outcome answer: diabetes prevention did NOT reduce CV events over 21 years

[@goldberg2022]

DPPOS followed the same three arms a median **21 years** for adjudicated cardiovascular events. The result
is **null on the hard endpoint**: «Neither metformin nor lifestyle intervention reduced the primary
outcome: metformin versus placebo hazard ratio 1.03 (95% CI, 0.78–1.37; P = 0.81) and lifestyle versus
placebo hazard ratio 1.14 (95% CI, 0.87–1.50; P = 0.34).» The point estimates trend the *wrong* way for
lifestyle, and «No effect of either intervention was seen on the extended cardiovascular outcome».

Effect estimates (primary MACE = nonfatal MI, nonfatal stroke, or CV death; 310 first events among 3234;
studied range = a middle-aged, ethnically diverse prediabetes cohort, 21-yr median follow-up):

| Arm vs placebo | HR (95% CI) | P | Event rate /1000py (plac/arm) |
|---|---|---|---|
| Metformin — MACE | 1.03 (0.78–1.37) | 0.81 | 5.28 / 5.51 |
| Lifestyle — MACE | 1.14 (0.87–1.50) | 0.34 | 5.28 / 6.10 |
| Metformin — extended CV | 1.00 (0.80–1.25) | 0.99 | 8.73 / 8.86 |
| Lifestyle — extended CV | 1.12 (0.90–1.39) | 0.29 | 8.73 / 9.93 |

Prespecified subgroups «showed no significant heterogeneity by age, sex, race/ ethnicity, or diabetes
development for either metformin or lifestyle» — so this is **not** a route-(b) story on the CV outcome
(contrast the metformin route-(b) modification on the *diabetes-incidence* outcome above — the effect
modification was outcome-specific, present for incidence, absent for events). The discussion flags one
borderline exploratory signal — a sex difference for lifestyle (P=0.053, «potentially harmful in women yet
somewhat protective in men») — which the authors themselves treat as possibly «the result of a play of
chance», not a finding.

**This is a bounded null, not a demonstration of no effect.** The paper attributes the dilution
explicitly: «Provision of group lifestyle intervention to all, extensive out-of-study use of statin and
antihypertensive agents, and reduction in the use of study metformin together with out-of-study metformin
use over time may have diluted the effects of the interventions.» Study metformin adherence fell «from 77%
at the end of DPP to 41%»; statins reached 56–62% and antihypertensives 68–74%; «This was therefore a
relatively low-risk cohort from the standpoint of the prevention of CVD.»

The baseline-risk reading (route-(a), no subgroup claim needed): a longer 30-year Da Qing follow-up *did*
show a lifestyle MACE benefit, «hazard ratio 0.74 [95% CI, 0.59–0.92]», but «the Da Qing cohort was a
higher-risk population» (more smokers, more hypertension, worse hyperglycemia, higher event rate). Absolute
CV benefit scales with baseline risk, so a low-risk cohort has little absolute risk to remove and even a
real relative effect is hard to detect — the [[Baseline Risk and the Relative-Absolute Split]] point.
[inferred from @goldberg2022]

**Decision-change:** the diabetes-incidence win is real but does **not** license claiming a hard-CV or
mortality benefit from diabetes prevention in a *low-risk* prediabetes stratum over two decades. Where CV
risk is the concern in such a stratum, the demonstrated levers are the direct ones (statin / BP control —
heavily used here); a CV payoff from diabetes prevention itself, if any, would need a higher-risk or
longer-latency stratum. The [[Surrogate Outcomes]] page carries this as a worked surrogate-disconnect.

## Independent replication — Finnish DPS and Da Qing (type-E robustness)

The lifestyle-prevention effect is **not one trial**: three randomized trials on three continents, in
three separate IGT/prediabetes populations, each found a statistically significant relative reduction in
incident diabetes for a multi-component lifestyle program versus usual-care advice. This is the value the
DPP-family ingest banks — the head-to-head above rests on a *single* US trial, but the *lifestyle leg* of
it is independently corroborated `[E-independent]`.

**The matched-parameter comparison (the *same quantity?* discipline, required before any cross-trial
magnitude claim):**

| Parameter | US DPP (Knowler 2002) | Finnish DPS (Tuomilehto 2001) | Da Qing (Pan 1997) | Same quantity? |
|---|---|---|---|---|
| Stratum | IFG+IGT, mean BMI 34, age 51, US | IGT, BMI>=25 (mean 31), age 40-65, Finland | IGT, mean BMI 25.8, age 45, China | IGT — yes; adiposity differs (34 / 31 / 26) |
| Lifestyle target | 7% wt loss, 150 min/wk activity | 5% wt loss, fat <30%E, fiber, 30 min/day | diet and/or exercise (BMI-scaled) | multi-component lifestyle — comparable class |
| Comparator | placebo | general advice | general info | usual-care/advice — yes |
| Follow-up | mean 2.8 yr | mean 3.2 yr | 6 yr | **NO — horizon differs** |
| Metric | Cox RRR on incident diabetes, ITT | Cox RRR (HR 0.4) on incident diabetes, ITT | Cox RRR adj. baseline BMI+FPG, ITT | Cox-derived ITT RRR — **yes** |
| RRR, full lifestyle vs control | 58% (48-66) | 58% (HR 0.4; CI 0.3-0.7) | 42% combined (diet 31 / exercise 46) | comparable RRR; Da Qing combined = closest match |

The three headline RRRs are the **same quantity** — Cox-model, intention-to-treat relative risk reductions
on incident diabetes against a usual-care comparator — so they are legitimately comparable. What is **not**
matched is the follow-up horizon (2.8 / 3.2 / 6 yr) and the baseline adiposity, and those differences
explain why Da Qing's point estimate is lower without contradicting the others: over 6 years more of the
control group eventually progresses, compressing the relative reduction. **The defensible claim is
therefore *three independent trials, concordant direction, RRR 31-58%*, NOT *all three showed 58%*.**

- **Finnish DPS** [@tuomilehto2001]: 522 overweight middle-aged Finns
  with IGT; «the cumulative incidence of diabetes was 58 percent lower in the intervention group than in
  the control group (hazard ratio, 0.4; 95 percent confidence inter- val, 0.3 to 0.7; P<0.001)» —
  cumulative incidence 11% (6-15) intervention vs 23% (17-29) control at four years. Its absolute frame:
  «22 sub- jects with impaired glucose tolerance must be treated in this way for one year — or 5 subjects
  for five years — to prevent one case of diabetes.» (NNT 5 over 5 yr — a *different horizon* from DPP's
  NNT 6.9 over 3 yr, so the two NNTs are not directly comparable; each is read against its own follow-up.)
- **Da Qing** [@pan1997]: 577 Chinese with IGT, randomized *by
  clinic* to diet / exercise / diet+exercise / control; «In a proportional hazards analysis adjusted for
  differences in baseline BMI and fasting glucose, the diet, exercise, and diet-plus-exercise interventions
  were associated with 31% (P < 0.03), 46% (P < 0.0005), and 42% (P < 0.005) reductions in risk of
  developing diabetes, respectively.» Absolute frame: «The cumulative incidence of diabetes at 6 years was
  67.7% (95% CI, 59.8-75.2) in the control group compared with 43.8% ... in the diet group, 41.1% ... in
  the exercise group, and 46.0% ... in the diet-plus-exercise group» — an absolute cumulative measure, *not*
  the same quantity as the Cox RRRs and not to be conflated with them.

**Two decision-relevant refinements Da Qing adds that the US and Finnish trials could not (type-F):**

- **Combining diet and exercise was NOT additive.** «the efficacy of diet was similar to that of exercise,
  and there was no additional benefit of combining the interventions.» Da Qing is the only one of the three
  to randomize the *components* separately, and the combined arm (42%) did not beat exercise alone (46%).
  The decision-change: for a lever chosen on effect size, a single well-adhered component may capture most
  of the available prevention — stacking diet *and* structured exercise buys little *additional* incidence
  reduction in this stratum, though it may aid weight-loss maintenance (see mediation below).
- **The relative effect held in lean and overweight alike.** «The relative decrease in rate of development
  of diabetes in the active treatment groups was similar when subjects were stratified as lean or overweight
  (BMI < or >25 kg/m2).» So the lifestyle effect is not confined to the obese — it is a broad-spectrum
  lever across the adiposity range (consistent with DPP's «highly effective in all subgroups»). Da Qing's
  mean BMI 25.8 also *extends the transportability* of the effect below DPP's mean BMI 34.

**Independence classification — a genuine `[E-independent]` convergence, with one honest lineage caveat.**
The three are separate randomized experiments in separate populations, designed in different eras (Da Qing
1986, Finnish 1993, US DPP mid-1990s), separately funded, on separate primary data — the substantive
replication independence (the effect is *not* one dataset re-analyzed) holds strongly. Author lists do not
overlap: no author is shared across the three, and neither Da Qing (the earliest, citing neither) nor
Finnish (which cites Da Qing only as corroborating *prior evidence*, not as a data source) re-analyzes
another's cohort. **The caveat, named under [[Symmetric standards]]:** an NIDDK-Phoenix institutional
thread does connect two of them — Da Qing co-authors Bennett and Howard were at NIH/NIDDK, the same
diabetes-epidemiology program Knowler (US DPP) belongs to, and Knowler is acknowledged «for his important
contribution to the planning of our study» in the Finnish DPS. So the three teams are not hermetically
sealed; the cleanest fully-independent pair is **Finnish DPS vs Da Qing** (no shared authors, different
continents, neither citing the other as antecedent). The convergence is real and raises confidence on the
lifestyle-prevention claim from *single-landmark* to *replicated*; the lineage thread is why it is marked
with the caveat rather than as three sealed-off routes.
[inferred from @tuomilehto2001; @pan1997]

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

So the widely-quoted *each kg lost \~16% lower diabetes risk* figure is from a *later* DPP mediation
analysis — **Hamman 2006** — not the primary trial. That analysis is now held (below).

### The weight-loss mediation — Hamman 2006 (type-F, the DPP cohort re-analyzed, NOT a fourth trial)

Hamman re-analyzed the **DPP lifestyle arm alone** (1,079 ILS participants, mean BMI 33.9, 3.2-yr
follow-up) to decompose *which* component of the intervention carried the prevention. **This is the same
DPP cohort, not an independent replication** — it is a mediation/dose-response *under* the DPP effect
(type-F mechanism), so it does not add a second data point to the type-E convergence above and must not be
double-counted as one.

- **Weight loss was the dominant mediator, with a clean per-kg dose-response.**
  «Weight loss was the dominant predictor of reduced diabetes incidence (hazard ratio per 5-kg weight loss
  0.42 [95% CI 0.35–0.51]; P <0.0001). For every kilogram of weight loss, there was a 16% reduction in
  risk, adjusted for changes in diet and activity.» [@hamman2006] In the full multivariate model «Weight loss was the dominant factor ... (HR 0.42 per 5 kg;
  P < 0.0001; R2 = 8.09%)» — and its share of explained variance dwarfs the others: even after correcting
  the diet/activity measures for imprecision, «the proportion of explained variance for weight change
  remains substantially higher than for either percent fat or physical activity» (partial R2 \~8% for weight
  vs \~0.1-0.2% for percent-fat and activity). [@hamman2006]
- **But physical activity has a weight-loss-INDEPENDENT effect — and this is where Hamman and Finnish DPS
  converge (type-E on the sub-claim).** Among DPP participants who *failed* the weight-loss goal, activity
  still cut risk: «Among 495 participants not meeting the weight loss goal at year 1, those who achieved the
  physical activity goal had 44% lower diabetes incidence.» [@hamman2006] The Finnish DPS found the *same* pattern in a *different* cohort: «Among the subjects in
  the intervention group who did not reach the goal of losing 5 percent of their initial weight, the odds
  ratio for diabetes in those who had achieved the goal with respect to exer- cise (more than four hours per
  week) during the first year was 0.2 (95 percent confidence interval, 0.1 to 0.6)» — while losing >5%
  weight itself carried «odds ratio ... 0.3 (95 percent confidence interval, 0.1 to 0.7)».
  [@tuomilehto2001] Two independent cohorts agreeing that activity
  prevents diabetes *even without weight loss* is a genuine `[E-independent]` sub-finding.

**Reconciling the two "dominant lever" readings.** Weight loss explains the most *variance* in who
progresses (Hamman), yet activity works even in non-losers (Hamman + Finnish), and Da Qing found exercise
alone at least as effective as diet and non-additive with it. The coherent decision-frame: **weight loss is
the primary route and the thing to steer toward, but physical activity is a partly-independent second
channel** — valuable in its own right for the person who cannot achieve the weight target, and the
mechanism that sustains weight loss once achieved. This connects to the weight-loss cluster
([[Does Weight Loss Reduce Cardiovascular Events]]) as mechanism, not as evidence that weight loss *per se*
is the *sole* mediator.
[inferred from @hamman2006; @tuomilehto2001]

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

[inferred from @knowler2002; @tuomilehto2001; @pan1997; @hamman2006]

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

- **The head-to-head vs metformin is a single landmark RCT** (US DPP) — but the *lifestyle leg* is now
  **replicated**: the Finnish DPS (58%, HR 0.4) and Da Qing (31-46% by arm) are held and woven above as a
  `[E-independent]` three-trial convergence (see *Independent replication*). What remains single-trial is
  specifically the *lifestyle-versus-metformin comparison* — neither Finnish nor Da Qing had a metformin
  arm, so the claim that lifestyle *out-prevents the drug* still rests on DPP alone.
- **Prediabetes-selected, US, mean BMI 34** — transports to similar prediabetic populations; the placebo
  incidence (11.0/100 person-yr) was higher than observational data, from selecting people with three
  strong risk factors plus frequent testing, so the *absolute* numbers are for a high-risk stratum.
- **Diabetes incidence, not hard outcomes** (see Outcome scope) — the binding limit on what this page
  licenses.
- **Component contributions unattributed** (diet vs activity vs weight loss) by design.

## References

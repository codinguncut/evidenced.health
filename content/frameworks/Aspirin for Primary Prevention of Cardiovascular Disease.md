---
type: framework
question: For a person without established cardiovascular disease, does daily low-dose aspirin reduce cardiovascular events enough to outweigh its bleeding harm?
aliases: [Aspirin Primary Prevention, Aspirin CVD Primary Prevention, Low-Dose Aspirin Primary Prevention, Acetylsalicylic Acid Primary Prevention, Aspirin for Heart Attack Prevention]
authors: [Zheng, Sean L; Roddick, Alistair J; US Preventive Services Task Force (org)]
sources: [Zheng - Aspirin Primary Prevention Meta-Analysis 2019, USPSTF - Aspirin Primary Prevention 2022]
cluster: cvd-risk-estimation
confidence: medium
self_critiqued: 2026-08-20
relationships:
  related_to:
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
    - Statins for Primary Prevention and the Power of Zero CAC
    - Blood Pressure Lowering and Cardiovascular Events
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
    - Layer 1 - Ranking Interventions for a Stratum
created: 2026-08-20
updated: 2026-08-20
---

*For a person with no established cardiovascular disease, does daily aspirin prevent enough
cardiovascular events to justify the bleeding it causes?* On the largest trial-level meta-analysis
held (13 RCTs, 164 225 participants, 1 050 511 participant-years), the answer is **no net benefit**:
aspirin buys a small, real reduction in cardiovascular events that is matched — and slightly exceeded —
by an increase in major bleeding, in absolute terms, in **every** subgroup examined. This is a
**pharmacotherapy** exposure appraised on its own terms; it is the realistic drug alternative a
low-risk person weighs against doing nothing.

Zheng & Roddick conclude the two absolute effects are «of similar magnitude», that
cardiovascular benefits were «modest and equally balanced by major bleeding events», and that
«the decision to use aspirin for primary prevention may need to be made on an individual basis,
accounting for the patient's risk of bleeding»
[@zheng2019aspirin].

## The net balance — benefit vs harm, in absolute terms

[@zheng2019aspirin] — overall, across all
participants (median 10-year baseline CV risk 10.2%):

- **Composite CV outcome** (CV death + nonfatal MI + nonfatal stroke): HR 0.89 (95% CrI 0.84-0.94);
  ARR 0.41% (95% CI 0.23%-0.59%); NNT 241 over \~5 years. Event rates 60.2 vs 65.2 per 10 000
  participant-years.
- **Major bleeding** (study-defined): HR 1.43 (95% CrI 1.30-1.56); ARI 0.47% (95% CI 0.34%-0.62%);
  NNH 210. Event rates 23.1 vs 16.4 per 10 000 participant-years.

Per 1000 person-years this is **\~0.5 fewer** composite CV events against **\~0.67 more** major bleeds
[inferred from @zheng2019aspirin] (arithmetic on the extracted
per-10 000-py event rates). The bleeding harm is not merely comparable — its absolute size marginally
**exceeds** the CV benefit, and the confidence intervals overlap heavily. There is **no** all-cause
mortality benefit (HR 0.94, 95% CrI 0.88-1.01) and **no** CV-mortality benefit (HR 0.94, 95% CrI
0.83-1.05); deaths from bleeding were rare, so the two arms are weighed as *nonfatal events avoided
vs nonfatal bleeds caused*, not lives saved vs lives lost.

### What moves and what does not

[@zheng2019aspirin]

| Outcome | HR (95% CrI) | Absolute (95% CI) | NNT / NNH |
|---|---|---|---|
| Composite CV | 0.89 (0.84-0.94) | ARR 0.41% (0.23-0.59) | NNT 241 |
| Myocardial infarction | 0.85 (0.73-0.99) | ARR 0.28% (0.05-0.47) | NNT 361 |
| Ischemic stroke | 0.81 (0.76-0.87) | ARR 0.19% (0.06-0.30) | NNT 540 |
| All-cause mortality | 0.94 (0.88-1.01) | NS | — |
| CV mortality | 0.94 (0.83-1.05) | NS | — |
| Total stroke | 0.93 (0.86-1.02) | NS | — |
| Major bleeding | 1.43 (1.30-1.56) | ARI 0.47% (0.34-0.62) | NNH 210 |
| Major GI bleeding | 1.56 (1.38-1.78) | ARI 0.30% (0.20-0.41) | NNH 334 |
| Intracranial bleeding | 1.34 (1.14-1.57) | ARI 0.11% (0.04-0.18) | NNH 927 |

The benefit is carried by MI and ischemic stroke; there is no mortality signal. The harm is carried
by GI bleeding, with a smaller but serious intracranial-bleeding excess.

## Baseline risk does not tip the balance — route (a), not route (b)

The natural stratification hope is *give it to higher-risk people, where the benefit is bigger*. The
data defeat this. The **relative** CV effect is essentially **constant** across strata — composite HR
0.87 (low risk), 0.91 (high risk), 0.90 (diabetes), 0.89 (overall) — i.e. **no effect modification**
(route-(b) is negative). Absolute benefit does rise with baseline risk (route-(a)), but so does the
absolute bleeding harm, and by the same order. In **every** stratum the bleeding ARI equals or exceeds
the CV ARR [@zheng2019aspirin]:

| Stratum (10-yr CV risk) | Composite CV: HR — ARR — NNT | Major bleed: HR — ARI — NNH |
|---|---|---|
| Low (<10%, median 6.8%) | 0.87 (0.79-0.95) — 0.34% (0.14-0.52) | 1.45 (1.28-1.63) — 0.40% (0.25-0.57) — NNH 249 |
| High (>=10%, median 12.8%) | 0.91 (0.84-0.98) — 0.63% (0.18-1.04) — NNT 160 | 1.41 (1.23-1.61) — 0.64% (0.35-0.97) — NNH 152 |
| Diabetes | 0.90 (0.82-1.00) — 0.65% (0.09-1.17) — NNT 153 | 1.29 (1.11-1.51) — 0.80% (0.29-1.39) — NNH 121 |

Reading it: raising baseline risk raises **both** the benefit and the harm arm together, so the net
stays a wash-to-negative — the high-risk and diabetes strata are, if anything, slightly *worse* net
(bleeding ARI 0.64% vs benefit 0.63%; 0.80% vs 0.65%) because bleeding risk co-travels with
cardiovascular risk. **Diabetes is not a positive effect-modifier**: the diabetes composite HR (0.90)
matches the overall (0.89), and its net absolute balance is unfavourable — a route-(a) baseline-risk
story, carrying no subgroup claim. This is the worked instance of *absolute benefit scaling with
baseline risk while the relative effect is fixed*, with the twist that the competing harm scales too,
so stratifying on CV risk alone cannot recover a net benefit
-> [[Baseline Risk and the Relative-Absolute Split]].

> Data note [inferred from @zheng2019aspirin]: the low-risk
> **composite-CV** figures above are taken from Figure 2 (ARR 0.34%, HR 0.87). The Results *prose* for
> the low-risk stratum repeats the high-risk values verbatim (HR 0.91 / ARR 0.63% / NNT 160) — an
> apparent transcription duplication; the forest-plot figure is treated as authoritative. The bleeding
> and secondary numbers are internally consistent across prose and figure.

## Studied range, dose, and generalisability

[@zheng2019aspirin]

- **Baseline risk studied:** median 10-year CV risk 10.2%, **range 2.6%-30.9%** (trial-level). The
  balance is characterised across this whole span; extrapolation above \~31% 10-year risk is unstudied
  here.
- **Dose:** 50-500 mg/day, majority 75-100 mg. A sensitivity analysis restricted to <=100 mg/day gave
  materially the same result, including the bleeding excess (composite HR 0.89; major bleeding HR
  1.54) — so this is a **low-dose** finding, not an artefact of high doses.
- **Age / population:** median age 62 (range 53-74); 47% men; 19% had diabetes. Median follow-up 5.0
  years — the balance beyond \~5-7 years is not directly characterised.
- **Contemporary subset:** in trials published since 2000, the CV composite reduction and all bleeding
  increases persisted, but aspirin was «no longer associated with reduced myocardial infarctions»
  [@zheng2019aspirin] — consistent with
  weaker benefit in the modern era of statins and blood-pressure control.
- **Cancer:** exploratory outcomes were **neutral** — incident cancer HR 1.01 (0.93-1.08), cancer
  mortality HR 1.03 (0.96-1.11); no benefit or harm signal, so cancer does not rebalance the decision.
- **Certainty:** 9 of 13 trials at low risk of bias, heterogeneity low (I2 0-2% for the primary
  outcomes), no publication-bias signal (Egger P = .57). The source is gold-tier and internally strong.
  `confidence: medium` reflects the addition of the USPSTF 2022 what-to-do layer below reaching the
  same net-balance conclusion — but note the two are **not independent** (USPSTF's evidence base is a
  separately-published systematic review over largely the **same trials**), so this is authoritative
  concurrence, not a second independent route; the effect magnitudes above remain Zheng's.

## The guidance layer — USPSTF 2022 and the reversal of routine aspirin

The evidence above is the *what-is-true* layer; USPSTF 2022 is the authoritative *what-to-do* layer
built on the same class of evidence. It is a **recommendation summary** (high-tier, borrowed evidence:
its effect estimates come from a separately-published systematic review, not restated here), so it is
cited for the **recommendation grades, age bands, and net-benefit judgement** — never for an effect
magnitude, which stays with the Zheng meta-analysis above.

**The two current recommendations** [@uspstf2022aspirin]:

- **Adults 40-59 with >=10% 10-year CVD risk — an individual decision (Grade C).**
  «The decision to initiate low-dose aspirin use for the primary prevention of CVD in adults aged 40 to
  59 years who have a 10% or greater 10-year CVD risk should be an individual one. Evidence indicates
  that the net benefit of aspirin use in this group is small.» USPSTF concludes «with moderate
  certainty» that this group «has a small net benefit».
- **Adults 60 or older — recommend AGAINST initiating (Grade D).** USPSTF concludes «with moderate
  certainty that initiating aspirin use for the primary prevention of CVD events in adults 60 years or
  older has no net benefit».

The recommendation applies to adults >=40 without CVD who are **not at increased bleeding risk**
(no GI-ulcer history, recent bleeding, or bleeding-raising medications). Risk is estimated with the
ACC/AHA Pooled Cohort Equations — the only US-validated tool, but one USPSTF flags as **imprecise and
prone to overprediction**, so the 10% threshold is «a starting point to discuss», not a trigger
[@uspstf2022aspirin]. Benefit is larger at >15%-20%
10-year risk. Pragmatic dose is 81 mg/d (studied range 50-500 mg/d)
[@uspstf2022aspirin]. For those who do start, modeling
suggests «data suggest that clinicians and patients should consider stopping aspirin use around age 75
years» [@uspstf2022aspirin].

### Grid mapping — the worked USPSTF cell

This recommendation is the worked audit of [[Net Benefit and the USPSTF Recommendation Grid]] against a
real topic (the grid page held this open). Both grades read off the **moderate-certainty** row:
Grade **C** = moderate certainty x **small** net-benefit magnitude (40-59 at >=10%); Grade **D** =
moderate certainty x **zero/negative** magnitude (>=60). The C is not thin evidence — it is an
*affirmatively small* net benefit known with moderate certainty, whose action content is shared
decision-making; the D is a *confident* no-net-benefit, not an I (insufficient)
[inferred from @uspstf2022aspirin].

### The 2016 -> 2022 reversal, and USPSTF's stated reason

USPSTF's 2022 statement **replaces** its 2016 recommendation and moves it in the de-adoption direction
[@uspstf2022aspirin]:

| Feature | 2016 | 2022 |
|---|---|---|
| Start age (individual/C band) | 50-59 at >=10% 10-yr risk | 40-59 at >=10% 10-yr risk (start lowered to 40) |
| Adults 60-69 | individual decision | folded into the >=60 D recommendation |
| Adults >=60 (initiation) | 60-69 individual; >=70 insufficient | **Grade D — recommend against** (new) |
| Posture | initiate (routine, for eligible) | «selectively based on individual decision-making rather than routinely» |
| Colorectal-cancer benefit | included as a co-benefit | **withdrawn** — «evidence is unclear whether aspirin use reduces the risk of colorectal cancer» |

The single most consequential change is the **new Grade D against initiation at >=60**: «There is a new
recommendation not to initiate aspirin in adults 60 years or older for primary prevention»
[@uspstf2022aspirin]. The routine-to-selective shift is
the other: «Aspirin should be initiated selectively based on individual decision-making rather than
routinely for all persons in the recommended age and CVD risk group»
[@uspstf2022aspirin].

**USPSTF states its own reason for the change** (counter-passage read end to end): the reversal rests on
**new trial evidence** (chiefly ASPREE in the healthy elderly), **updated analyses** of the
primary-prevention evidence, and **longer-term Women's Health Study follow-up** — an *updated evidence
base*, not a change of method [@uspstf2022aspirin]. In the
telos's five-reason schema this is a **self-documented divergence-class-2** (different/updated evidence
base): the body updated on new evidence and said so, which is a sound process working, not a defect
[inferred from @uspstf2022aspirin]
-> [[Which Objective Moved This Recommendation]].

### Why age, not baseline risk, is the switch — the bleeding-age interaction

USPSTF's net-benefit reasoning turns on a mechanism that concurs with Zheng's route-(a) analysis above
(and, being built on largely the **same trials, is not an independent backing** — no type-E)
[@uspstf2022aspirin]:

- The **relative** CV effect is **not modified by baseline CVD risk**; the absolute benefit is larger at
  higher risk.
- The **relative** bleeding risk **does not differ by age** either — but the **absolute** bleeding
  incidence, and so the magnitude of bleeding harm, **rises with age**, and more steeply at >=60.

Because CVD risk itself climbs steeply with age, initiating at older age buys a benefit that the
age-driven bleeding harm has already overtaken. USPSTF's commissioned microsimulation makes the sign
flip explicit: net life-years/QALYs are **positive for initiation at 40-59**, run **slightly-negative to
negative at 60-69**, and are **negative at essentially all modelled risk levels for 70-79**
[@uspstf2022aspirin]. (Illustrative, net life-years per
1000 at 10% 10-year risk: women +11.4 at 40-49 -> -6.5 at 50-59 -> -13.5 at 60-69 -> -16.6 at 70-79;
men +36.1 -> +4.2 -> -3.0 -> -6.9.) This is the same closing-of-the-route-(a)-escape-hatch the Zheng
analysis found (harm co-scales with the risk that carries the benefit), here resolved onto an **age**
axis to set the grade cutpoint.

## What this is and is not

This page now carries **both** layers: the *what-is-true* evidence finding (Zheng) and the *what-to-do*
guidance layer (USPSTF), kept distinct — USPSTF is cited for the recommendation grades and net-benefit
judgement, the effect magnitudes remain the meta-analysis's. What the evidence says on its own terms:
**in primary prevention the CV benefit is real but small and is offset by a matched bleeding harm,
with no mortality benefit and no stratum in which the net turns clearly positive** — so the default
in an unselected low-risk person is that aspirin is not worth initiating, and any use is an
individualised bleeding-risk-vs-benefit judgement. The guidance layer converts that into an operational
rule: **individualise below 60 at >=10% risk; do not initiate at or above 60.**

[inferred from @zheng2019aspirin] **Selection, dosing, bleeding-risk
screening, PPI co-prescription, and the secondary-prevention indication** (established CVD, where the
benefit is well established and not in question here) are out of scope — prescriber acts and a
different decision.

## Limitations (author-stated)

[@zheng2019aspirin] Trial-level (not
individual-patient) data; the diabetes subgroup had poorly reported events; endpoint definitions
varied across a long time span; 8 trials began randomising over 20 years ago, so older trials may not
reflect current background prevention. Hemorrhagic stroke could count in both the CV and bleeding
columns.

## References

---
type: framework
question: Is moderate alcohol intake protective, harmful, or neutral — and is the J-curve real?
aliases: [Alcohol, Moderate Drinking, Alcohol and Mortality, Alcohol J-Curve, Alcohol and Stroke, Alcohol Cardioprotection]
authors: [Stockwell, Tim; Millwood, Iona Y; Walters, Robin G; Chen, Zhengming; Zhao, Jinhui]
sources: [Stockwell - Moderate Drinkers Mortality Risk 2016, Millwood - Alcohol and Vascular Disease Genetic Evidence 2019, Zhao - Daily Alcohol Intake and Mortality 2023]
cluster: alcohol
nucleus: true
confidence: medium
created: 2026-07-28
updated: 2026-07-28
self_critiqued: 2026-07-28
relationships:
  related_to:
    - The U-Shaped Association Artifact
    - Sodium Intake and Blood Pressure
    - Baseline Risk and the Relative-Absolute Split
---

Opens the `alcohol` cluster. The famous finding that *moderate drinkers outlive abstainers* — the
J-curve — is the textbook case of a protective lower arm that dissolves under scrutiny. Two
independent methods say the protection is largely not real.

## The observational J-curve — the appearance

- **All-cause mortality (Stockwell, 87 studies).** Unadjusted, the «classic J-shaped curve» appears:
  low-volume drinkers (1.3-24.9 g/day) «RR = 0.86, 95% CI [0.83, 0.90]» vs abstainers; occasional
  drinkers «0.84 [0.79, 0.89]»; former drinkers elevated «1.22 [1.14, 1.31]».
  [EXTRACTED (Stockwell - Moderate Drinkers Mortality Risk 2016) chunk 01, Table 2]
- **Vascular disease (Millwood, China Kadoorie, 500k).** Self-reported intake had «U-shaped
  associations with the incidence of ischaemic stroke... intracerebral haemorrhage... and acute
  myocardial infarction; men who reported drinking about 100 g of alcohol per week... had lower risks
  of all three diseases than non-drinkers or heavier drinkers.»
  [EXTRACTED (Millwood - Alcohol and Vascular Disease Genetic Evidence 2019) chunk 01, Findings]

## Why the lower arm is an artifact — two independent adjudications

**1. Bias-corrected observational (Stockwell).** Correcting for how abstainers are defined erases the
protection. The driving bias is **former-drinker misclassification** (sick-quitters who quit *because*
they are ill, counted as *abstainers*, making the referent look unhealthy):

- fully adjusted for abstainer biases + study quality, low-volume «RR = 0.97, 95% CI [0.88, 1.07]» —
  no significant protection; former drinkers rise to «1.38 [1.24, 1.54]».
- the 13 bias-free studies show «no significant protection for low-volume drinkers... RR = 0.90, 95%
  CI [0.76, 1.06]»; using occasional drinkers (not abstainers) as the referent, «there would be no
  evidence of health protective effects for low-volume drinkers or any other category.»
- the corrected pattern is «more consistent with a linear dose response than a J-shaped curve.»

[EXTRACTED (Stockwell - Moderate Drinkers Mortality Risk 2016) chunk 01, Results; Discussion; Conclusions]

**2. Mendelian randomization (Millwood).** Genetic variants (ALDH2 rs671, ADH1B) that strongly lower
alcohol tolerance act as instruments free of reverse causation and lifestyle confounding. The
genotype-predicted (causal) relationship is **monotonic, with no protective lower arm**:

- ischaemic stroke «RR per 280 g per week 1.27 (1.13-1.43)»; intracerebral haemorrhage «1.58
  (1.36-1.84)»; total stroke «1.38 (1.26-1.51)» — «no suggestion of increased stroke risk at very low
  levels» that would indicate an abstinence penalty, and «no material deviation from log-linear
  relationships.»
- the causal mechanism is shared by both methods where the observational result *is* real: blood
  pressure rises «4.8 mm Hg (4.5-5.1) per 280 g per week» (conventional) and «4.3 mm Hg (3.7-4.9)»
  (genetic) — convergent, so the confounding is specific to the *protective* claim, not to alcohol's
  BP effect.

[EXTRACTED (Millwood - Alcohol and Vascular Disease Genetic Evidence 2019) chunk 01, Results]

Millwood's verdict: «the apparently protective effects of moderate alcohol intake against stroke are
not mainly caused by alcohol itself, and are largely artifacts of reverse causation and confounding.»
Stockwell's: «low-volume alcohol consumption has no net mortality benefit compared with lifetime
abstention or occasional drinking.»
[EXTRACTED (Millwood - Alcohol and Vascular Disease Genetic Evidence 2019) chunk 01, Research in context;
(Stockwell - Moderate Drinkers Mortality Risk 2016) chunk 01, Conclusions]

## Two independent methods, one conclusion `[E-independent]`

| Parameter | Stockwell 2016 | Millwood 2019 | Same claim? |
|---|---|---|---|
| Method | meta-analysis, bias-corrected | Mendelian randomization (genetic instruments) | **independent — different data, methods, populations** |
| Outcome | all-cause mortality | stroke, myocardial infarction | NO — different outcomes |
| Moderate-drinking effect | RR 0.97 (0.88-1.07), ns | monotonic harm (stroke); no protective arm | — |
| **The claim reached** | no net protection from low-volume drinking | protective J-arm is non-causal | **YES — moderate drinking is not cardioprotective** |

The convergence is **on the qualitative claim** (the protective lower arm is not causal), reached by a
bias-correction route and a genetic route that share no data or lineage and neither references the other
as antecedent — a genuine independent-backing lift, not a shared-study echo. The effect *sizes* are not
matched (different outcomes), so this is an E on the *direction*, not a pooled magnitude.
Corroborated across [[The U-Shaped Association Artifact]].

## The updated meta-analysis, and where harm starts `[Zhao 2023]`

Zhao et al. 2023 updates the observational analysis to **107 studies, 4.8 million people** and confirms
the artifact finding: fully adjusted, low-volume drinking is «RR, 0.93; 95% CI, 0.85-1.01; P = .07» vs
lifetime abstainers and only «a RR of 0.97» against the cleaner occasional-drinker referent — no
significant protection. Only «21» of 107 studies were free of abstainer bias, and stripping the
covariates drives the low-volume estimate to «0.86 (0.83-0.88)» — the protection is manufactured by the
biases.

**What it adds that the corpus lacked — an actionable harm threshold, and it is sex-specific.**
Significant all-cause mortality elevation begins at:

- **pooled: 45 g/day** — «45 to 64 g per day (RR, 1.19; 95% CI, 1.07-1.32)», rising to «1.35» at
  >=65 g/day; 25-44 g/day pooled is null (1.05, ns);
- **women: from 25 g/day** — medium-volume «RR, 1.21; 95% CI, 1.08-1.36», and *any* drinking is already
  elevated («1.22; 95% CI, 1.02-1.46»);
- **men: from 45 g/day** — 25-44 g/day is null for men.
- «Across all levels of alcohol consumption, female drinkers had a higher RR of all-cause mortality
  than males (P for interaction = .001).»

This is the first *how-much-is-too-much* number the corpus holds for alcohol, and the sex asymmetry is
the decision-relevant part — a woman's threshold sits at roughly half a man's.

**F, not a third E witness (laundering guard).** Zhao 2023 is Stockwell's own group — it «updates our
earlier systematic review» (its ref 8 is [[Stockwell - Moderate Drinkers Mortality Risk 2016]]), same
team and method. It **refines** the observational arm (more studies, occasional referent, the
threshold); it is **not** an independent method, so the `[E-independent]` convergence above stays
Stockwell ∥ Millwood, unchanged.
[EXTRACTED (Zhao - Daily Alcohol Intake and Mortality 2023) chunk 01, Results; Discussion; Table 4]

## The honest boundary — stroke is not myocardial infarction

MR shows **clear causal harm for stroke and blood pressure**, but for myocardial infarction the genetic
estimate is **null**: «RR per 280 g per week 0.96 (0.78-1.18), p=0.69» — «little net effect». Millwood
suggests alcohol's BP harm «could be offset by cardio-protective changes in other factors», and cautions
the MI case count was limited so «some real benefit or hazard cannot be excluded». So "alcohol is
uniformly harmful" holds for **stroke and BP**; for **coronary heart disease the causal picture is
genuinely unresolved**, and that is the one place a small real benefit is not excluded.
[EXTRACTED (Millwood - Alcohol and Vascular Disease Genetic Evidence 2019) chunk 02, Discussion]

## What this probes `[PRIOR handle — not scored here]`

Alcohol is the canonical instance of the telos's open `[PRIOR]` #2 — *U/J-shaped associations are
frequently artifacts of reverse causation or confounding*. This ingest builds the evidence that in the
alcohol case the prior **holds** (the protective arm is artifact, shown two ways). Per the ingest
contract, the fabric records this; the `[PRIOR]` is *scored* in a separate pass, against this and the
still-open sodium J-hypothesis -> [[Sodium Intake and Blood Pressure]], [[The U-Shaped Association Artifact]].

## Limits

- **All-cause mortality (Stockwell) and vascular disease (Millwood) are different endpoints** — matched
  only at the level of *is moderate drinking protective*. Neither covers the other's outcome set.
- **Measurement error flattens, it does not manufacture.** Both note self-reported intake is
  underreported; Millwood states this would make the real dose-response *shallower*, not create the
  monotonicity — so it cannot rescue the protective arm.
- **Millwood is one MR study in one (East Asian) population**; ALDH2 is common there and rare in
  Europeans, so the instrument transports imperfectly. The convergence with a Western-heavy
  observational meta-analysis is what carries it.
- Coherence, not validity (R1): the causal read rests on the MR assumptions (instrument validity, no
  pleiotropy — Millwood checks the latter via women as a negative control).

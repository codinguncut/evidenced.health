---
type: framework
question: What is the shape and magnitude of the BMI to all-cause-mortality curve once smoking and reverse causation are removed, and where is the nadir?
aliases: [Body-Mass Index and Mortality, BMI Mortality Curve, Obesity Paradox, Overweight Mortality Paradox, BMI Nadir]
authors: [Global BMI Mortality Collaboration (org)]
sources: [Global BMI - BMI All-Cause Mortality 2016]
cluster: evidence-appraisal
confidence: medium
created: 2026-08-05
updated: 2026-08-05
relationships:
  related_to:
    - The U-Shaped Association Artifact
    - Body Fatness and Cancer Risk
    - Layer 1 - Ranking Interventions for a Stratum
    - Does Weight Loss Reduce Cardiovascular Events
    - Measurement Error in Dietary Assessment
    - Smoking and Mortality
---

The bias-corrected shape of the BMI to all-cause-mortality relationship, from the largest
individual-participant-data meta-analysis of the question: **239 prospective cohorts, four
continents, 10.6 million participants** (the primary bias-controlled analysis draws on 189 studies,
3.95M never-smokers, 385,879 deaths). Its design is built to answer the artifact question directly
-> [[The U-Shaped Association Artifact]]: the *pre-specified primary analysis* restricts to
never-smokers, drops anyone with chronic disease at baseline, and excludes the first 5 years of
follow-up — «Primary analyses will also exclude current and former smokers, and the first 5 years of
follow-up.» [@globalbmi2016, eAppendix 2]

## The corrected curve — nadir at 22.5-25, monotone rise above it

In the bias-controlled analysis the curve is **J-shaped with a nadir at BMI 22.5-25 kg/m2** (the
pre-specified reference category), a shallow, mostly reverse-causation underweight arm to its left,
and a **steady monotone rise above 25** with no plateau in the studied range. Per 5 kg/m2 above BMI
25, all-cause mortality rises **HR 1.31 (1.29-1.33)** overall.
[@globalbmi2016, Figure 1]

WHO 6-group hazard ratios, primary analysis (never-smokers, no baseline chronic disease, first 5
years excluded; reference = normal weight 18.5-25):

| BMI group | HR (95% CI) |
|---|---|
| Underweight 15 to <18.5 | 1.47 (1.39-1.55) |
| Normal 18.5 to <25 | 1.00 (reference) |
| Overweight 25 to <30 | 1.11 (1.10-1.11) |
| Obesity I 30 to <35 | 1.44 (1.41-1.47) |
| Obesity II 35 to <40 | 1.92 (1.86-1.98) |
| Obesity III 40 to <60 | 2.71 (2.55-2.86) |

[@globalbmi2016, eTable 5 (strictest row) / eTable 7]

**Stratum-dependence (steepness, per 5 kg/m2 above 25) — the relative effect is real but not
uniform:**

- **Age** — steepest in the young, attenuating with age: 35-49 y **1.52 (1.47-1.56)**, 50-69 y 1.37
  (1.35-1.39), 70-89 y 1.21 (1.17-1.25). [@globalbmi2016, Figure 2]
- **Sex** — steeper in men: men **1.51 (1.46-1.56)**, women 1.30 (1.26-1.33).
  [@globalbmi2016, Figure 3]
- **Region** — Europe 1.39, North America 1.29, East Asia 1.39, Australia/NZ 1.31; **South Asia
  1.13 (0.97-1.30)** is the one non-significant region — but on only 3 studies / 4,040 deaths, so its
  flatness is as likely small-n imprecision as a real regional difference (East Asia, with 46 studies,
  shows the *same* steep 1.39 as Europe).
  [@globalbmi2016, Figure 1]
- **Cause** — CHD 1.42, stroke 1.42, respiratory 1.38, cancer 1.19 (cancer the shallowest).
  [@globalbmi2016, Figure 4]

## The obesity paradox is a bias-cascade artifact — watch the overweight arm move

The paper's pre-specified design is a **stepwise confounder-stripping cascade**, and the *overweight*
arm (25-30) walks from apparent protection to clear harm as each bias is removed — a worked BMI
instance of the artifact concept -> [[The U-Shaped Association Artifact]]. Overweight HR vs normal
weight, across the eTable 5 cascade (189 studies):

| Analysis (cumulative exclusions) | Overweight HR (25-30) |
|---|---|
| All studies, no exclusions (raw) | 0.96 (0.95-0.97) — apparent *protection* |
| + adjust for smoking (+ exclude baseline disease) | 0.99 (0.98-1.01) |
| + exclude first 5 years of follow-up | 1.03 (1.01-1.04) |
| + restrict to never-smokers (primary) | 1.11 (1.10-1.11) — clear *harm* |

[@globalbmi2016, eTable 5]

[inferred from @globalbmi2016] The *obesity paradox* (overweight appearing
protective for mortality) is, on this evidence, **manufactured by smoking confounding, reverse
causation, and prevalent disease** — the three biases the cascade removes. Smokers are leaner *and*
die more, so they load the normal-weight and underweight referent with high-risk people and make
overweight look protective by contrast; early deaths and baseline illness do the same via
reverse causation (illness lowers weight before it kills). Strip all three and the protection
inverts to harm. The obesity grades steepen in parallel (Obesity I 1.18 -> 1.44; Obesity III 1.96 ->
2.71 across the same cascade). This is the direction-of-artifact lesson from the concept: a confounder
here manufactured a spurious *benefit* (as in alcohol), the opposite of the coffee-cancer case.

**The single cleanest confirmation — the smoking-stratified contrast (eTable 6).** Holding the 5-year
exclusion and no-baseline-disease constant so *only smoking status differs*, the overweight arm flips
sign by smoking stratum:

| BMI group | Never-smokers | Ex/current smokers |
|---|---|---|
| Underweight 15-18.5 | 1.53 (1.39-1.68) | 1.86 (1.74-1.99) |
| Overweight 25-30 | **1.07 (1.06-1.07)** | **0.94 (0.94-0.95)** |
| Obesity I 30-35 | 1.39 (1.33-1.44) | 1.13 (1.09-1.17) |
| Obesity III 40-60 | 2.69 (2.43-2.97) | 2.04 (1.85-2.24) |

[@globalbmi2016, eTable 6]

In ex/current smokers overweight looks *protective* (0.94) and the whole obesity gradient is
flatter; in never-smokers overweight is *harmful* (1.07) and every grade is steeper. The
never-smoker-vs-smoker heterogeneity is significant for every BMI group (underweight P=0.046,
overweight P=0.0003, obesity I P<0.0001, obesity II P=0.0004, obesity III P=0.0003). Smoking is the
confounder doing the work.

## The underweight arm — adjudicate the arm, not the curve

The two arms behave differently, per the concept's *adjudicate the arm* rule. The **overweight arm**
is *entirely* artifact (protection -> harm under correction). The **underweight arm** is *partly*
reverse causation but not wholly: it falls from 1.81 (raw) to 1.47 (primary) as smokers and early
deaths are removed, yet **stays elevated at 1.47** — so low BMI carries residual real excess
mortality that the corrections do not dissolve, distinct from the fully-artifactual overweight
signal. [inferred from @globalbmi2016]

## Decision relevance

- **The nadir is 22.5-25, and above it every increment carries risk — there is no protective or
  even neutral overweight band once bias is removed.** For a lean, non-smoking person the relevant
  target is holding BMI in the low-mid 20s; *overweight is fine / protective* does not survive the
  correction. (BMI is a crude adiposity proxy — for central-adiposity strata see
  [[Menopause and the Shifting Levers]] and waist-based measures; this page is the BMI *curve*, not a
  claim that BMI is the right instrument.)
- **Adiposity is a big-rock lever, and the effect is largest where there is most life to lose** — the
  gradient is steepest at 35-49 y (1.52 per 5 units) -> [[Layer 1 - Ranking Interventions for a Stratum]].
- **This estimates the association, not the benefit of weight loss.** A bias-corrected observational
  curve says where mortality is lowest across people; it does not establish that *reducing* an
  individual's BMI moves them down it -> [[Does Weight Loss Reduce Cardiovascular Events]] holds the
  intervention evidence (the loop the curve alone cannot close).

## Limits

- **Observational, corrected — not causal-proof.** The exclusions remove the *known* biases
  (smoking, reverse causation, prevalent disease); residual confounding (fitness, socioeconomic
  status, unmeasured illness) is not excluded, and there is no Mendelian-randomization arm in this
  analysis. So the corrected curve is strong but, like coffee and unlike alcohol, adjudicated by
  confounder-removal *only*, not by a genetic instrument -> [[The U-Shaped Association Artifact]].
- **BMI measurement** — a mix of measured and self-reported BMI across cohorts (self-report biases
  toward the null / mislabels categories) -> [[Measurement Error in Dietary Assessment]]; the paper
  runs a self-reported-vs-measured sensitivity analysis.
- **Cannot separate fat mass from lean mass or distribution** — BMI is the exposure, and the same BMI
  spans different body compositions across age, sex, and ethnicity (a plausible contributor to the
  regional differences, alongside the small-n imprecision of the South Asian estimate).

## References

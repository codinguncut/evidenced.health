---
type: framework
question: Does obesity (high BMI) cause NEW-ONSET chronic kidney disease in the general population, by how much, and does that make weight control a CKD-prevention lever?
aliases: [Obesity and CKD Onset, BMI and Kidney Disease Incidence, High BMI and New-Onset CKD]
authors: [Garofalo, Carlo; Borrelli, Silvio; Minutolo, Roberto; Chiodini, Paolo; De Nicola, Luca; Conte, Giuseppe]
sources: [Garofalo - Obesity Onset Chronic Kidney Disease Meta-Analysis 2017]
cluster: chronic-kidney-disease
relationships:
  related_to:
    - Chronic Kidney Disease and Modifiable Exposures
    - Body Fatness and Cancer Risk
    - BMI and All-Cause Mortality
    - Fatty Liver MASLD and Weight Loss
    - Ectopic Fat and Depot-Specific Risk
    - Protein Intake and Kidney Function
    - Semaglutide and Kidney Outcomes in Chronic Kidney Disease
    - The U-Shaped Association Artifact
confidence: moderate
created: 2026-08-27
updated: 2026-08-28
self_critiqued: 2026-08-27
---

**The decision this page serves.** Is obesity a big-rock lever for *preventing* kidney disease in a
reasonably-healthy person, the way it is for cardiovascular disease, cancer, and fatty liver? The
prior evidence was confounded because it mixed people who *already had* CKD at baseline into the
"incidence" estimate, so the onset question stayed open. Garofalo's meta-analysis isolates the
*prevention* question: general-population adults with **normal renal function at baseline**, followed
for new-onset kidney disease. [@garofalo2017]

This is the **incidence / prevention** cell only — obesity as a modifiable risk factor for CKD
*onset*. Management of established CKD (dialysis, agent selection, RAS-inhibitor titration) is the
prescriber zone and lives elsewhere -> [[Semaglutide and Kidney Outcomes in Chronic Kidney Disease]].
Dietary protein and kidney function is a *different exposure* -> [[Protein Intake and Kidney Function]].

## The pooled estimates

39 cohorts, 630,677 general-population adults with normal baseline renal function, mean follow-up
6.8 years (range 2.0-18.5); search Jan 2000 - Aug 2016; random-effects pooling; Newcastle-Ottawa
quality high. [@garofalo2017]

| Exposure | Outcome | RR (95% CI) | I2 | Read |
|---|---|---|---|---|
| Obesity | low eGFR (<60) | 1.28 (1.07-1.54) | 95.0% | significant; +28% |
| Obesity | albuminuria | 1.51 (1.36-1.67) | 62.7% | significant; +51% |
| Obesity | CKD (combined, 3 studies) | 1.36 (1.18-1.56) | - | significant |
| Overweight | low eGFR | 1.06 (0.94-1.21) | 50.0% | NOT significant |
| Overweight | combined renal | 1.09 (0.98-1.21) | - | NOT significant |
| BMI +1 kg/m2 | low eGFR | 1.02 (1.01-1.03) | 24.3% | significant, monotone |
| BMI +1 kg/m2 | albuminuria | 1.02 (1.00-1.04) | 0% | significant |

[@garofalo2017]

Absolute anchor: across the 3 obesity cohorts that reported eGFR events separately, new-onset low
eGFR occurred in **12.3% of obese vs 4.2% of nonobese** over \~5.2 years — so the relative 1.28 sits on
a low-single-digit annual baseline, and the *absolute* excess is modest per-person but large at
population scale given obesity's prevalence.
[@garofalo2017]
The author's conclusion: high BMI «predicts onset of albuminuria without kidney failure (CKD stages
1-2) as well as CKD stages 3 and higher, the effect being signiﬁcant only in obese individuals.»
[@garofalo2017]

**Robustness of the eGFR estimate.** The 1.28 carries very high heterogeneity (I2 95%), driven almost
entirely by one cohort (Weycker); with it removed, RR 1.18 (1.09-1.28) and I2 falls to 57.9% — so the
central estimate is a *tighter, still-significant* 1.18-1.28 band, not a fragile one. Publication bias
was not significant across pools.
[@garofalo2017]

## Mediation vs confounding — how to read the RR (the load-bearing subtlety)

Obesity *causes* diabetes and hypertension, and both are on the causal path to CKD. So how the pooled
estimate handles diabetes/BP adjustment decides what the RR actually measures. Garofalo took the
«most adjusted model in each study» [@garofalo2017],
and the per-study adjustment sets (Table 1) routinely include diabetes, systolic/diastolic BP,
fasting glucose, and glycemic status. The paper frames this as rigor — «estimates of risk excess were
adjusted for main determinants of new-onset CKD.»
[@garofalo2017]

But diabetes and hypertension are **mediators, not just confounders**, of the obesity->CKD path.
Adjusting a mediator away removes the *indirect* (mediated) portion and leaves at most the *direct*
(non-mediated) effect — so the pooled RR **under-estimates obesity's TOTAL causal effect** on CKD
onset. The paper's own subgroup analysis points the same way: studies that adjusted for
glycemic status pooled to **RR 1.15 (1.00-1.32)** vs **1.32 (1.03-1.68)** for those that did not — the
identical split for BP adjustment (1.15 vs 1.32) — i.e. adjusting the mediator attenuates the estimate
toward null, exactly as over-adjustment predicts. The interaction test is not significant (P=0.325),
so this is a *direction*, not a proven effect-modification.
[@garofalo2017]

The countervailing evidence — that a **direct** renal pathway exists independent of metabolic
syndrome — is the healthy-vs-unhealthy-obese split: CKD risk was raised in metabolically **healthy**
obese (RR 1.30, 1.12-1.52) as well as unhealthy obese (1.63, 1.32-2.03), with no significant
difference (P=0.183). [@garofalo2017]
So obesity raises CKD risk even absent the metabolic-syndrome mediators — a direct effect is real.

**Decision reading:** for the *weight-management-as-CKD-prevention* decision the TOTAL
effect is the relevant quantity (losing weight removes both the direct renal-hemodynamic harm and the
diabetes/HTN it would otherwise cause). Because the pooled RR is partly mediator-adjusted, the true
prevention benefit of weight loss is plausibly **larger** than a naive read of 1.28-1.51 — the
estimate errs conservative for this decision, not liberal. This is the *net-effect, watch-for-
compensation* discipline running in the favourable direction. Do NOT present the RR as a clean causal
total effect: it is observational, residually confounded, and partly mediator-adjusted.

## The overweight null and the shape question

Overweight (BMI 25-30 Western; 23-25 Asian-Pacific) did NOT significantly predict low eGFR
(1.06, 0.94-1.21) or the combined renal outcome (1.09, 0.98-1.21), yet continuous BMI was
monotonically positive (1.02 per kg/m2, low heterogeneity). Garofalo reads this as **non-linearity** —
a threshold where «the risk signiﬁcantly increased only in the presence of increments to higher BMI
values (obesity range)», supported by a meta-regression in which effect size rose with mean baseline
BMI. [@garofalo2017]

**The wiki's reading is more cautious.** A categorical null in the overweight band is
weak evidence of a true knee: a monotone per-unit effect of 1.02/kg/m2 across a \~5-unit overweight
band predicts a categorical contrast of only \~RR 1.10 — indistinguishable from the observed null at
that power. The significant, low-heterogeneity *continuous* slope is more consistent with a monotone
curve whose overweight-vs-normal contrast is simply too small to clear significance than with a hard
threshold at BMI 30. Per the dose-response discipline, a measured null does not locate a knee, and a
guideline-style threshold is first suspected to mark the edge of the evidence, not a curve feature
-> [[The U-Shaped Association Artifact]] (here the concern is a *manufactured plateau below obesity*,
the mirror image). The decision default is unchanged either way: every reduction into and out of the
obese range pays.

## Mechanism

The direct renal pathway is hemodynamic. Obesity raises GFR and renal blood flow via afferent
arteriolar dilation (from proximal salt reabsorption) coupled with efferent vasoconstriction driven
by elevated angiotensin II, producing **hyperfiltration, glomerular hypertrophy, focal
glomerulosclerosis, and proteinuria**; visceral fat also compresses the renal hilum and synthesizes
renin-angiotensin-system proteins, and RAS is abnormally activated in obesity.
[@garofalo2017]
This is a human-corroborated physiological mechanism (informs direction, not magnitude), and it
explains the healthy-obese signal: the RAS/hyperfiltration channel does not require diabetes or
hypertension to fire. It also ties obesity->CKD to the *visceral/ectopic* rather than the *total-mass*
depot -> [[Ectopic Fat and Depot-Specific Risk]] (a prior MA found waist circumference predicted CKD;
Garofalo used BMI because only 3 studies had waist data).
[@garofalo2017]

## Onset is in scope; progression is the prescriber boundary

The prevention case rests on a scope asymmetry the paper states directly: weight-loss intervention in
obese subjects «could be therefore considered as a main strategy to limit the CKD burden», and the
importance of this preventive approach «grows when considering that once CKD has developed, the role
of abnormal BMI on pro- gression of CKD becomes less evident.»
[@garofalo2017]
So obesity's leverage is largest *before* CKD onset — which is exactly the fabric-zone (prevention)
side. Once CKD is established, the lever weakens and the decision becomes therapeutic (out of scope).

## Limits and transportability

- **Observational, residually confounded.** The authors note «although analyses were adjusted for
  multiple determinants of CKD de novo, the effect of residual confounders could not be excluded»,
  with the very high eGFR heterogeneity plausibly reflecting unmeasured genetic/environmental factors;
  no individual-patient data.
  [@garofalo2017]
- **Survival bias / competing risk.** Most studies did not report mortality, so obese people dying
  before CKD onset could bias the estimate; direction unknown (likely toward the null).
  [@garofalo2017]
- **Single outcome assessment** may overestimate incidence, though the chronicity subgroup argued
  against pure acute-kidney-injury misclassification.
  [@garofalo2017]
- **Population transportability.** 29 of 39 cohorts (512,230 of 630,677 participants) were
  Asian-Pacific, where "obesity" is defined at BMI >=25, not >=30 — so the pooled "obesity" exposure
  is often a *lower absolute BMI* than Western obesity, and the Western-obesity estimate rests on only
  10 cohorts. [@garofalo2017]
- **BMI, not adiposity.** BMI is the exposure of convenience; the causally-relevant quantity is
  visceral fat -> [[Ectopic Fat and Depot-Specific Risk]].

## Decision relevance (Layer 1)

CKD is prevalent and carries high cardiovascular and quality-of-life burden, and obesity is a
big-rock, non-substitutable lever here: no single drug replicates weight loss's pleiotropy across the
renal-hemodynamic, glycemic, and blood-pressure channels at once, so this adds kidney to the list of
organ systems (CVD, cancer, liver) on which the *same* weight-management action pays
-> [[Body Fatness and Cancer Risk]], [[Fatty Liver MASLD and Weight Loss]],
[[BMI and All-Cause Mortality]]. The absolute per-person renal benefit is modest (low
baseline incidence), so for an individual this ranks below the smoking/BP/glycemia big rocks unless
baseline CKD risk is already elevated (route (a): absolute benefit scales with baseline risk). The
GLP-1 landscape partly overlaps the obesity-CKD channel for the treatment side, but for *primary
prevention* in the reasonably-healthy the lever is weight itself
-> [[Semaglutide and Kidney Outcomes in Chronic Kidney Disease]].

## References

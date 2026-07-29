---
type: framework
question: Should non-sugar (artificial) sweeteners be used to control weight or reduce NCD risk — and against which comparator?
aliases: [NSS, Artificial Sweeteners, Non-Sugar Sweeteners, Non-Nutritive Sweeteners, Low-Calorie Sweeteners, Sugar Substitutes, Aspartame, Sucralose, Saccharin, Stevia, Acesulfame K]
authors: [World Health Organization (org)]
sources: [WHO - Non-Sugar Sweeteners 2023]
cluster: cardiometabolic-exposures
confidence: low
relationships:
  related_to:
    - Free Sugars Intake
    - Surrogate Outcomes
    - The U-Shaped Association Artifact
    - Continuous Glucose Monitoring as a Health Intervention
    - Certainty of Evidence vs Strength of Recommendation
created: 2026-07-29
updated: 2026-07-29
self_critiqued: 2026-07-29
---

WHO's 2023 NSS guideline. The whole verdict turns on two moves: **the comparator decides the effect**,
and **the discordance between short-term trials and long-term cohorts is left genuinely open** — not
resolved either way. NSS are defined as «all synthetic and naturally occurring or modified non-nutritive
sweeteners that are not classified as sugars» (acesulfame K, aspartame, sucralose, saccharin, stevia,
neotame, cyclamates, advantame); sugar alcohols/polyols are excluded.
[EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01]

## The recommendation

> «WHO suggests that non-sugar sweeteners not be used as a means of achieving weight control or reducing
> the risk of noncommunicable diseases (conditional recommendation).»
[EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01]

- **Conditional recommendation, LOW certainty overall** — both stated plainly: «The recommendation is
  based on evidence of low certainty overall». Read them together — this is a *suggestion against* on
  weak evidence, not a *strong recommendation against*. It says the expected value of using NSS for
  weight control is not positive on current evidence, **not** that NSS are demonstrated to harm.
  [EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01]
- **Scope guard — does NOT apply to people with existing diabetes** (excluded from the reviewed
  evidence), and does not apply to NSS in medicines/hygiene products. Weight control means both weight
  *loss* in overweight/obesity and *preventing* unhealthy gain.
  [EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01]
- **Class-level, not per-sweetener.** The recommendation covers NSS «as a class of compounds», because
  «the evidence is currently insufficient to make recommendations for individual NSS» — even though each
  has a distinct structure and «may have different physiological effects in humans». So a finding on
  saccharin or aspartame is not automatically a finding on stevia. `type-B` (one label, chemically
  distinct objects). [EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01]

## The comparator IS the effect (adults, RCTs)

The single most important reading of the trial evidence: NSS only lowers weight **when it displaces
sugar**, and the effect shrinks toward null the closer the trial gets to the real-world question of
*replacing* sugar with NSS.

```yaml
effect_measure: body weight MD -0.71 kg (95% CI -1.13 to -0.28), 29 RCTs, n=2433; BMI -0.14 kg/m2 (-0.30 to 0.02), ns
population_and_comparator: adults; higher vs lower/no NSS in any manner (pooled across comparators)
outcome: body weight / BMI (surrogate for sustained-weight / NCD outcomes — see below)
uncertainty: Low certainty (RCTs); most trials <=3 months
certainty: Low
confidence: low
```
[EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01]

The pooled -0.71 kg dissolves once the comparator is pinned:

- **vs free sugars → largest effect.** «with the largest effects when NSS were compared with sugars».
- **vs water / nothing / placebo → no effect.** «NSS compared with water showed no effect on body
  weight and a non-significant increase in BMI»; «When NSS were compared with nothing/placebo or water …
  no effects on body weight or BMI were observed.»
- **As an actual sugar *replacement* → attenuates to null.** In the RCTs that instructed habitual sugar
  consumers to switch to NSS versions, «the effect on body weight was significantly weakened … and an
  effect on BMI was no longer observed» — quantified as body weight MD **-0.61 kg (95% CI -1.28 to
  0.06), non-significant**, BMI **-0.01 (-0.38 to 0.35)**.
  [EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01]

**Mechanism is displacement, not the molecule.** The weight effect «is mediated at least in part by
lower energy intake as a result of decreased free sugars intake, rather than primarily by an inherent
property of NSS» — a significant weight/BMI difference appeared «only … in trials that reported a
reduction in energy intake, and energy intake was only significantly different in the arms of trials
that compared NSS with free sugars». Energy intake fell -569 kJ/day (95% CI -859 to -278) and sugars
intake -38.4 g/day (-57.8 to -19.1) — **but only vs sugar, not vs water/placebo.**
[EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01, chunk 02]

## The RCT-vs-cohort discordance (adults)

The signature tension in the whole file: short-term trials show a small benefit; long-term
observational cohorts show the opposite-signed associations with hard disease.

| Outcome | RCT (short-term) | Cohort (long-term, ~up to 13 yr follow-up) | Cohort certainty |
|---|---|---|---|
| Body weight | MD **-0.71 kg** (-1.13 to -0.28) | MD -0.12 / -0.01 kg, ns | Very low |
| BMI | -0.14 kg/m2, ns | **+0.14** (0.03 to 0.25) | Very low |
| Incident obesity | — | **HR 1.76** (1.25 to 2.49) — a 76% higher risk | Low |
| Type 2 diabetes (beverages) | glucose/insulin/HbA1c all null | **HR 1.23** (1.14 to 1.32) | Low |
| Type 2 diabetes (tabletop) | — | **HR 1.34** (1.21 to 1.48) | Low |
| CVDs | BP / LDL null in RCTs | **HR 1.32** (1.17 to 1.50) | Low |
| Stroke | — | **HR 1.19** (1.09 to 1.29) | Low |
| CVD mortality | — | **HR 1.19** (1.07 to 1.32) | Low |
| All-cause mortality | — | **HR 1.12** (1.05 to 1.19) | Very low |
| Cancer (any) | — | HR 1.02 (0.95 to 1.09) — **null** | Very low |
| Cancer mortality | — | HR 1.02 (0.92 to 1.13) — **null** | Very low |
| Bladder cancer (saccharin, case-control) | — | OR 1.31 (1.06 to 1.62) | Very low |

[EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01, Table 1]

**Two things the table says on its own:**

- **The RCT biomarkers are flat.** Fasting glucose MD -0.01 mmol/L (-0.05 to 0.04, Moderate), fasting
  insulin -0.49 pmol/L (-4.99 to 4.02), HbA1c 0.02%, LDL 0.03 mmol/L, systolic BP -1.33 mmHg (ns) — no
  short-term cardiometabolic signal in either direction. The insulin/glucose route is *quiet*, which is
  why a CGM sees nothing (-> [[Continuous Glucose Monitoring as a Health Intervention]]).
- **Cancer is null in cohorts** — the overall-cancer association is flat (HR ~1.02). The saccharin-bladder
  case-control signal is the exception, at very low certainty. The aspartame/cancer *hazard* question is
  **not in this guideline** (see gap below).

## How WHO handles the discordance — the load-bearing appraisal point

This is where symmetric standards bite: WHO does **not** wave the cohorts away as reverse causation, and
it does not accept them as proven harm either. It ran the check and returned a *partial* verdict.

- **Why short-term weight loss is not banked as benefit:** «weight loss and maintenance of a healthy
  weight must be sustained over the long term to have a meaningful impact on health», so «evidence of
  minor weight loss or reduced BMI over several months or less … does not represent a health benefit».
  The trial benefit is on a **surrogate** (short-term weight), and WHO declines to let it stand for the
  sustained outcome (-> [[Surrogate Outcomes]]). «The discordant results between the RCTs and prospective
  cohort studies suggest that the small amount of weight loss … in short-term experimental settings may
  not be relevant to … long-term NSS use in the general population.»
  [EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01]
- **The reverse-causation check was RUN — and the association survived it (weakened).** Reverse
  causation here = «those already at elevated risk of disease initiated or increased use of NSS because
  of their risk status» (people already heavy/dysglycaemic switch *to* sweeteners *because* of their
  condition). Study authors attacked it: adjusting for BMI, stratifying by weight, excluding those who
  lost weight before baseline, and dropping early follow-up years. The result was mixed — «some results
  were attenuated, some were strengthened» — but «in the majority of studies, particularly for type 2
  diabetes, associations persisted … in fully adjusted models». WHO's conclusion:

  > «It was concluded that, although reverse causation and residual confounding may be contributing
  > factors, the available evidence suggests that the associations observed between NSS use and health
  > outcomes in observational studies cannot be dismissed as being solely a result of reverse causation
  > or residual confounding.»
  [EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 02]

- **The conservative move.** «Because of lack of certainty about the overall balance … including the
  possibility that reverse causation may have contributed to one or more of the associations …, a
  conservative approach was taken, leading to a conditional recommendation.» The uncertainty about *which
  direction the cohort arrow points* is exactly what makes the recommendation conditional rather than
  strong. [EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01]

**The honest read (symmetric standards).** Do not report this as *the cohorts are just reverse
causation* — WHO explicitly refused that framing. Nor as *NSS cause diabetes and CVD* — the certainty is
Low/Very-low and the RCT biomarkers are flat. The defensible statement is: *the long-term association is
unexplained, cannot be fully attributed to reverse causation, and is not established as causal.* This is
the [[The U-Shaped Association Artifact]] machinery applied and returning **not-dissolved**, which is a
different outcome from alcohol (dissolved) — file it there.

## Decision relevance — substitution frame

- **vs sugar:** a small, short-lived weight benefit that fades to null in true-replacement trials. Better
  than sugar on weight, marginally, in the short run.
- **vs water / unsweetened:** no benefit. WHO's preferred alternative is explicit: «Replacing free sugars
  in the diet with sources of naturally occurring sweetness, such as fruits, as well as minimally
  processed unsweetened foods and beverages … should be the preferred alternatives». Swapping sugar for
  NSS leaves «the overall quality of the diet … largely unaffected».
  [EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01]
- **NSS are «not essential dietary factors and have no nutritional value»** — so the null-benefit finding
  carries no offsetting cost of *not* using them. [EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01]
- **Layer-3 caveat:** for a person whose realistic alternative is sugar-sweetened soda and who will not
  switch to water, NSS is still the better of *those two* — the guideline optimizes a population question
  (don't build policy on NSS), not this individual's next drink.

## Other strata

- **Children:** more limited; one good RCT showed body-fatness reductions, but pooled BMI z-score showed
  no effect (Moderate certainty); overall certainty across adult+child data judged Low. Two stevia RCTs
  showed lower dental-caries indicators.
- **Pregnancy:** higher NSS use associated with **preterm birth, OR 1.25 (1.07 to 1.46), Low certainty**
  (three cohorts, dose-response in two); offspring birth-weight/adiposity associations inconsistent.
  Extrapolated from adult evidence «without downgrading for indirectness».
  [EXTRACTED (WHO - Non-Sugar Sweeteners 2023) chunk 01]

## Named gaps

- **Aspartame / cancer HAZARD (IARC 2023) and the ADI (JECFA 2023) are NOT in this guideline.** WHO NSS
  2023 covers the *outcome* side (cohort cancer null; saccharin-bladder case-control) and explicitly
  defers the hazard identification and risk-assessment to IARC and JECFA, whose 2023 evaluations post-date
  it. The hazard-vs-risk distinction for the *Are Artificial Sweeteners Bad* deliverable needs those
  sources — a `G`-gap here, not held. AWAITS IARC Aspartame 2023 / JECFA Aspartame 2023 — closes the
  cancer sub-question (hazard label + unchanged ADI).
- **Appetite / cravings / gut-microbiome routes** are named as putative mechanisms (sweet-taste receptors
  outside the mouth; microbiota) but «a detailed discussion … is beyond the scope of this guideline» — so
  they stay *insufficient evidence*, not findings. AWAITS a sweetener-microbiome RCT — closes the
  glucose-tolerance/microbiome sub-question.

## Limits

- **Single-source page** (WHO NSS 2023). The reverse-causation adjudication rests on the systematic-review
  authors' own sensitivity analyses as WHO reports them, not on an independent re-analysis.
- **Open loop (R1):** this grades WHO's reasoning for coherence and source-fidelity; whether NSS actually
  move a hard outcome is a validity fact no operation here can see.
- **NON-independent of the WHO free-sugars family** — see [[Free Sugars Intake]]. This is the same body's
  companion guideline, so agreement between them is *not* type-E independent corroboration.

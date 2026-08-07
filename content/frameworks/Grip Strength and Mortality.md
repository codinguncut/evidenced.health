---
type: framework
question: How strongly does grip strength predict all-cause and cause-specific mortality, is it a useful cheap risk metric, and does raising it help?
aliases: [Grip Strength, Handgrip Strength, Grip Strength Mortality, Muscle Weakness Mortality, Handgrip Dynamometer, Grip Strength Risk Score]
authors: [Celis-Morales, Carlos A]
sources: [Celis-Morales - Grip Strength Mortality 2018]
cluster: muscle
confidence: medium
relationships:
  related_to:
    - Low Muscle Mass and Mortality
    - Sarcopenia Definition and Diagnosis
    - Muscle-Strengthening Activity and Mortality
    - Cardiorespiratory Fitness and Mortality
    - The U-Shaped Association Artifact
    - Surrogate Outcomes
    - Baseline Risk and the Relative-Absolute Split
    - Big Rocks (Elderly)
created: 2026-08-06
updated: 2026-08-06
self_critiqued: 2026-08-06
---

Grip strength is the **cheap, fast, no-lab proxy for muscle FUNCTION** (force), as distinct from muscle
*mass* (quantity -> [[Low Muscle Mass and Mortality]]). Celis-Morales 2018 (UK Biobank, n=502,293,
40-69 y, mean 7.1 y follow-up) is the large-scale evidence that lower grip strength predicts a wide range
of adverse outcomes. Two decision-relevant claims: (1) it is a **strong, broad mortality predictor** at
scale, and (2) it works as a **cheap risk METRIC** — it improves an office-based risk score where no blood
draw is possible. The design is a single observational cohort, so grip is a **predictor, not a proven
causal lever** — and the authors frame the paper as *prediction*, not causation, on purpose. This is the
general prognostic-marker-vs-modifiable-lever distinction ([[Surrogate Outcomes]] -> *Prognostic marker
vs modifiable lever*): grip is partly *lowered by* occult ill-health, so it is a marker to stratify with,
not assumed a target to train toward.

## The effect estimate — per 5 kg lower grip, fully adjusted + landmark

[@celismorales2018]

Hazard ratios per **5 kg lower** grip strength, model 4 (adjusted for age, deprivation, ethnicity,
comorbidities, height, BMI, smoking, physical activity, sedentary time, diet; events in the first 2 years
excluded), women / men:

| Outcome | Women HR (95% CI) | Men HR (95% CI) |
|---|---|---|
| All-cause mortality | 1.20 (1.17-1.23) | 1.16 (1.15-1.17) |
| CVD mortality | 1.19 (1.13-1.25) | 1.22 (1.18-1.26) |
| All respiratory mortality | 1.31 (1.22-1.40) | 1.24 (1.20-1.28) |
| COPD mortality | 1.24 (1.05-1.47) | 1.19 (1.09-1.30) |
| All cancer mortality | 1.17 (1.13-1.21) | 1.10 (1.07-1.13) |
| Colorectal cancer mortality | 1.17 (1.04-1.32) | 1.18 (1.09-1.27) |
| Lung cancer mortality | 1.17 (1.07-1.27) | 1.08 (1.03-1.13) |
| Breast (W) / prostate (M) mortality | 1.24 (1.10-1.39) | 1.05 (0.96-1.15) *NS* |

Incidence tracked mortality (e.g. CVD incidence 1.15 W / 1.11 M per 5 kg). Prostate cancer mortality was
the one null; incident prostate cancer was *positively* associated with strength — the authors read this
as higher-strength people being more health-conscious and screening more (incidence without mortality),
not a protective effect reversed.

**Read the absolute risk, not just the HR [inferred from @celismorales2018].**
This is a middle-aged cohort with a **low event rate — 13,322 deaths / 502,293 (\~2.7%) over \~7 years**,
so a per-5 kg HR of 1.16-1.20 is a *small absolute* mortality difference at this age. The relative effect
is what transports; the absolute benefit of being stronger scales with baseline risk (route-(a)), so it
is far larger in an older / higher-risk stratum than these middle-aged numbers show
-> [[Baseline Risk and the Relative-Absolute Split]].

**Per 1 SD, grip out-ranks two classic modifiable risk factors.** Grip SD is \~11 kg, so 5 kg is \~0.5 SD.
Per 1 SD *lower* grip (adjusted): «hazard ratio 1.48 and 1.57 per 1 SD lower grip strength» for all-cause
and CVD mortality — vs systolic blood pressure «1.03 and 1.26» and total physical activity «1.06 and
1.07». For *incident* CVD, grip and SBP were similar («1.29 and 1.30»). So on this within-model
comparison grip showed «the strongest association» with mortality — a marker point, not a claim that grip
*causes* more than BP does.

## The dose-response is linear — no knee, no plateau over the studied range

[@celismorales2018]

The authors modelled the shape explicitly: «We used multivariable cubic regression splines to visually
explore non-linear associations... As we found no evidence of deviation from linearity» they used Cox
models. So over the observed grip range the gradient is **monotone** — every increment of strength maps
to lower hazard, with no threshold or plateau located. This is another instance where an **objectively
measured** capacity shows a clean monotone gradient, unlike the plateaus/U-shapes that appear in
*self-reported* activity data -> [[The U-Shaped Association Artifact]],
[[Cardiorespiratory Fitness and Mortality]]. (Caveat: a per-outcome spline visually judged linear is weak
evidence of true linearity, and the low high-strength event count limits power at the top end — absence
of a located knee, not proof of none.)

## The metric value — grip improves an office-based risk score

[@celismorales2018]

This is the *cheap Tier-1 metric* case, and the reason grip earns a place on
[[Metrics for Targeted Health Guidance]]. Added to a conventional **office-based** score (age, sex,
diabetes, BMI, systolic BP, smoking — no blood test), grip strength raised Harrell's C index by:

| Outcome | C-index change (validation) |
|---|---|
| All-cause mortality | +0.012 (derivation +0.013) |
| CVD mortality | +0.011 (derivation +0.012) |
| CVD incidence | +0.009 |

The authors benchmark this: the +0.013 gain «is similar to that seen when adding high density lipoprotein
cholesterol and N-terminal pro b-type natriuretic peptide» (C-index change 0.007 for HDL, 0.020 for
NT-proBNP). Grip is «easily measured, cheap, and highly reproducible in clinical practice» — so its
distinctive value is «in risk screening settings where blood sampling is not possible (for example, in
community settings or in low and middle income countries)». Muscle **weakness** cut-offs (FNIH: <26 kg
men, <16 kg women — close to EWGSOP2's <27/<16, [[Sarcopenia Definition and Diagnosis]]) flagged higher
risk for most outcomes, giving a binary screen alongside the continuous measure.

## Age interaction — stronger in the YOUNGER, against the prior

[@celismorales2018]

A prior meta-analysis (53,476 participants) suggested the grip-mortality link was *weaker* under 60. With
500,000+ participants Celis-Morales had the power to test it and found the opposite: associations «were
moderately stronger, not weaker, in the younger age groups», reading it as *with age, factors other than
grip become more important*. Decision-relevant caveat: this cuts against reading grip as a purely
old-age / frailty screen — the relative signal is present (and modestly larger) mid-life — but the
**absolute** stakes still rise with age via baseline risk.

## Mass vs strength — a distinct quantity, and a refinement (not a tension, not independence)

Muscle **mass** ([[Low Muscle Mass and Mortality]], de Santana SR-MA) and muscle **strength** (this page)
are **different quantities measured differently**, so the two sources refine the muscle-mortality picture
rather than independently backing one claim. The parameter table (are these the same quantity?):

| Parameter | de Santana 2021 (MASS) | Celis-Morales 2018 (STRENGTH) | Same quantity? |
|---|---|---|---|
| Exposure | appendicular muscle MASS (ASMI, DXA/BIA) | handgrip STRENGTH / force (dynamometer, kg) | **No** — quantity vs function |
| Effect metric | between-group SMD (dead vs alive) | HR per 5 kg / per 1 SD | **No** — SMD vs hazard ratio |
| Population | community-dwelling non-frail >=65 | general population 40-69 | **No** |
| Design | SR-MA, 9 cohorts, n=10,028 | single cohort, n=502,293 | partial |
| Magnitude | SMD -0.18 (small) | HR \~1.16-1.20 per 5 kg (\~1.48 per 1 SD) | -- |

**The same-quantity answer is No on exposure and effect metric** (the two that decide it), so the
not-joined check (ii) fires — different quantities, consistent once matched. This is **type-B** (mass and strength are
distinct objects, routinely conflated as *muscle*) and **type-F** (Celis-Morales supplies the
strength-construct magnitude at scale that de Santana and EWGSOP2 asserted but did not quantify). It is
**not** type-E independent backing: the constructs differ, and EWGSOP2 already holds that «strength is
better than mass in predicting adverse outcomes» ([[Sarcopenia Definition and Diagnosis]]) *because* they
are different measures — de Santana's result is *consistent with* mass carrying residual signal beyond
strength (an underpowered null, not a demonstrated independence -> [[Low Muscle Mass and Mortality]]), not
that mass and strength are one thing. No tension is filed; no `[E-independent]` token.
[inferred from @celismorales2018; @santana2021]

## Predictor / METRIC, not a proven lever — the line this page holds

[inferred from @celismorales2018]

- **Established:** low grip strength **predicts** higher all-cause and cause-specific mortality, and
  **as a metric it adds discrimination** to a cheap office-based risk score. That is enough to make grip a
  legitimate **stratification metric** — a readily-capturable number that places a person in a
  higher-risk cell (route-(a) baseline risk) -> [[Metrics for Targeted Health Guidance]].
- **NOT established:** that **training grip strength lowers mortality.** Grip is a whole-body signal with
  many determinants — «handgrip strength has a strong genetic component with heritability shown to be 52%»,
  plus nutrition, activity, disease — so grip is partly a *marker of underlying health*, not only a
  modifiable lever. Whether *raising* strength moves mortality is a **separate claim** on a separate
  (intervention) evidence base: resistance training's mortality evidence is very-low-GRADE observational
  ([[Muscle-Strengthening Activity and Mortality]]), and its firmer payoff runs through function and falls.
- **So grip is a good number to MEASURE (it places you in a stratum), not a number to STEER toward.**
  *Squeeze harder to live longer* over-reads this evidence exactly as *raise your VO2max to live longer*
  does on [[Cardiorespiratory Fitness and Mortality]].

## Reverse causation — the central threat, and how far it is mitigated

[@celismorales2018]

Occult disease and frailty lower grip *before* death, so a grip-mortality association could be occult
illness casting a shadow, not strength doing work. The paper mitigates two ways: a **landmark analysis**
excluding events in the first 2 years (model 4) — associations persisted — and heavy covariate adjustment
including prevalent comorbidities. The residual is stated plainly: «we cannot exclude the possibility of
reverse causality» and «residual confounding is always possible and the associations observed may not
imply causality.» Their defence is framing, not elimination: «given that we are largely interested in
prediction and identification of people at increased risk, and not seeking to make strong causal
inferences, reverse causality is not a major limitation.» That defence holds **for the METRIC use** (a
marker can predict via reverse causation and still stratify usefully) but is exactly why it does **not**
license the **lever** use -> the predictor/target line above.

## Decision relevance

- **Capture grip with a hand dynamometer where a fuller work-up is wanted** — cheap, fast, reproducible,
  no lab; it adds risk discrimination on top of age/sex/BP/BMI/smoking/diabetes, most usefully where blood
  tests are unavailable. Read a low value (or FNIH weakness: <26 kg men / <16 kg women) as a flag that
  places the person in a higher-risk stratum and warrants further assessment.
- **Do not convert the number into a personal promise.** The HR is a between-person association in an
  observational cohort; grip is part lever, part marker (heritable, disease-sensitive). The *lever* is the
  activity/protein that builds strength -> [[Muscle-Strengthening Activity and Mortality]],
  [[Protein and Resistance Training for Muscle and Strength]]; grip is how you'd *measure* whether it moved.
- **Distinct from mass and from fitness.** Grip = strength/function; ASMI = mass
  ([[Low Muscle Mass and Mortality]]); VO2max = aerobic capacity
  ([[Cardiorespiratory Fitness and Mortality]]) — three different measured quantities, all predictors, all
  with the same predictor-not-proven-cause caveat.

## Limits — the open loop

- **Single observational cohort.** No randomization; consistent with prior grip literature (PURE, Cooper
  meta-analysis, Tromsø — all same observational lineage, so corroboration, not independent backing) but
  not causal.
- **Reverse causation / residual confounding unresolved** (above) — mitigated by the 2-year landmark, not
  eliminated.
- **UK Biobank is not representative** (healthier, less deprived than the general UK population); the
  authors judge the *magnitude* estimates generalisable but the summary statistics not.
- **Linearity is spline-judged, not established** — no located knee/plateau, but weak evidence of true
  monotonicity, and power thins at high strength.
- **The loop is open.** This grades coherence and source-fidelity, never validity: no operation here
  checks whether measuring — let alone raising — grip strength changes what a person experiences.

## References

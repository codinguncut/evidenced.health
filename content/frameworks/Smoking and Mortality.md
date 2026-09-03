---
type: framework
question: How large is smoking's effect on mortality and life expectancy, and how much does cessation recover — as a function of the age at quitting?
aliases: [Smoking, Smoking Cessation, Tobacco and Mortality, Quitting Smoking, Cessation Benefits]
authors: [Jha, Prabhat; Peto, Richard; Thun, Michael; Livingston, Gill; Sun, Yi-Qian]
sources: [Jha - Smoking Hazards Cessation Benefits 2013, Livingston - Dementia Prevention 2024, Sun - BMI Mortality Mendelian Randomization]
cluster: smoking
nucleus: true
confidence: high
relationships:
  related_to:
    - Layer 1 - Ranking Interventions for a Stratum
    - The U-Shaped Association Artifact
    - Baseline Risk and the Relative-Absolute Split
    - Alcohol and Mortality and Vascular Disease
    - Dementia Prevention and Modifiable Risk Factors
    - Electronic Cigarettes and Cardiovascular Risk
created: 2026-07-29
updated: 2026-08-30
self_critiqued: 2026-07-29
---

**The telos's #1 modifiable exposure, finally quantified in the fabric.** The wiki names smoking as the
dominant big rock but held no source for it; Jha 2013 (216,917 US adults, NHIS linked to death records)
supplies the contemporary magnitude — and, more decision-relevant, the shape of what *cessation* buys as
a function of age. It is the exposure against which every nutrition lever in this vault is small.


[@jha2013]
## The hazard: \~3x mortality, a decade of life

- **Current smokers die at about three times the rate of never-smokers:** all-cause HR **3.0 (99% CI
  2.7-3.3) for women, 2.8 (2.4-3.1) for men**, adjusted for age, education, alcohol, and adiposity.
  [@jha2013]
- **At least a decade of life lost** — «Life expectancy was shortened by more than 10 years» (\~11 in
  women, \~12 in men). Survival to age 80 roughly halves: women 70% (never) vs 38% (current); men 61% vs
  26%.
- **\~60% of a smoker's deaths (ages 25-79) are attributable to smoking.** The excess is neoplastic +
  vascular + respiratory: lung cancer HR \~15-18, respiratory \~9, ischemic heart disease \~3.2-3.5, stroke
  up to 3.2.

This is the magnitude the Layer-1 ranking is built on: an HR of \~3 on all-cause mortality dwarfs the
diet levers the vault otherwise holds (SFA replacement RR \~0.83 on CV events; a fibre or sugar shift
smaller still). *No attainable precision about meal timing changes what a smoker should do next*
-> [[Layer 1 - Ranking Interventions for a Stratum]].

## Cessation: steeply age-graded — the earlier, the more recovered

The benefit of quitting is large and depends heavily on *when*:

| Quit age | Years of life gained vs continuing | Residual all-cause HR vs never-smoker |
|---|---|---|
| 25-34 | \~10 | 1.0 — survival \~= never-smoker |
| 35-44 | \~9 | 1.2 |
| 45-54 | \~6 | 1.5 |
| 55-64 | \~4 | 1.7 |
| continue | — | 2.9 |

- **Cessation before \~40 removes about 90% of the excess risk** of death from continued smoking —
  «Cessation before the age of 40 years reduces the risk of death associated with continued smoking by
  about 90%.» [@jha2013]
- **But it is not a clean reset — the "safe to smoke until 40" misread.** Quitting by \~39 still left a
  **\~20% excess risk (HR 1.2)**: «about one in six of these former smokers who dies before the age of 80
  years would not have died» had they never smoked. So *earlier is strictly better*, and "quit by 40" is
  a floor on the benefit, not a licence to smoke until then.
- **Even late cessation pays:** quitting at 45-54 still removed roughly two-thirds of the excess risk. On
  a Layer-1 ranking there is no age at which quitting is not the largest available lever for a smoker.

## Why the absolute benefit is large where the relative one is fixed

The authors make the baseline-risk argument directly: «Because the absolute risks of continuing to smoke
are large, the absolute benefits of cessation will also be large» — and *widening* as never-smoker death
rates fall. This is [[Baseline Risk and the Relative-Absolute Split]] in its cleanest form: a large
relative effect (HR \~3) sitting on a high absolute baseline yields an enormous absolute gain, unlike the
diet levers whose relative effects are small AND sit on lower baselines.


[@jha2013]
## The sick-quitter correction — a worked reverse-causation fix

Jha handles the exact bias the [[The U-Shaped Association Artifact]] diagnostic warns about: «Life-
threatening illness can cause smokers to quit, which distorts the rates of death among current smokers
and among those who have quit smoking recently in opposite ways.» The fix — **reclassify anyone who quit
within 5 years of death as a current smoker**, and check by excluding the first 2 years of follow-up
(results unchanged) — is a clean template for separating a real protective effect from a
frailty/sick-quitter artifact. It biases *against* overstating cessation's benefit, so the large benefit
survives the conservative handling.


[@jha2013]
## Smoking as an effect-modifier of OTHER exposure curves — the BMI-mortality J `[2026-08-19, Sun]`

Smoking is not only the #1 big-rock mortality exposure; it is a confounder/effect-modifier that
*shapes* another exposure's dose-response. Sun 2019's Mendelian randomization (HUNT + UK Biobank) shows
the BMI-mortality relation «is likely comprised of at least two distinct curves, rather than one J
shaped relation» — always-increasing in never-smokers, J in ever-smokers — and «An increased risk of
mortality for being underweight was only evident in ever smokers»
[@sun2019], plausibly because
«Increased mortality in underweight smokers might be driven by respiratory diseases»
[@sun2019]. Decision consequence:
the *underweight is dangerous* reading of the BMI curve is, causally, largely a **smoking** signal —
condition on smoking before reading any BMI-mortality curve
-> [[BMI and All-Cause Mortality]], [[The U-Shaped Association Artifact]].

## Second outcome — dementia (a further reason the lever is large)

Smoking is also one of the 14 modifiable dementia risk factors -> [[Dementia Prevention and Modifiable Risk Factors]]. The 2024 Lancet Commission reclassified it from a late-life to a **midlife** risk factor: a
37-study meta-analysis found midlife smoking raised dementia risk (RR 1.30, 1.18-1.45), with «no increased
risk in former smokers». [@livingston2024] So the cessation
finding replicates on a *second* patient-important outcome — quitting removes the excess dementia risk as
it removes the excess mortality risk — which raises, not competes with, smoking's Layer-1 ranking.

## The e-cigarette is a *different* exposure — and the comparator decides its valence `[2026-08-30]`

Do not read the combustible hazard onto the e-cigarette: it is a distinct exposure with its own,
much thinner evidence -> [[Electronic Cigarettes and Cardiovascular Risk]]. What smoking's magnitude
does supply is the **comparator that sizes the e-cig decision**. For a current smoker, the realistic
alternative to switching is *continued smoking* at all-cause HR \~3, so an e-cig that is even modestly
less harmful is a harm-reduction move — but full **cessation still dominates** switching, and «less bad
than smoking» is not «safe». For a never-smoker the comparator is *clean air*, so starting adds a CV
signal for zero gain. The e-cig CV cell sits at **insufficient hard-outcome evidence** (acute surrogate
harm shown, hard endpoints unproven), so this stays a small marginal question behind the big rock of
not smoking at all.

## Why confidence is high

- **Effect size + dose + independence.** An HR of \~3 is far too large to be plausibly confounded away;
  adjustment for education/alcohol/adiposity «did little to alter the hazard ratios»; and the result is
  concordant across four independent cohorts (British doctors, the Million Women Study, Thun's 50-year
  US series, a Japanese cohort). That triangulation — different populations, eras, and designs agreeing —
  is why this sits at `confidence: high` on a single ingested source: the source is one, but the backing
  it reports is not.


[inferred from @jha2013]
## Limits

- **Observational** (no one randomizes smoking) — but the effect size, dose-response, adjustment
  stability, and cross-cohort concordance carry the causal read; this is the case where observational
  evidence is decisive.
- **All-cause and cause-specific mortality; not trajectory/quality-of-life** — the decade lost is a
  length claim; the *shape* of decline (COPD morbidity, post-stroke disability) is not quantified here.
- **US population, cross-sectional smoking status at baseline** — some baseline smokers later quit,
  which would *understate* the true hazard of continued smoking, not overstate it.



## Self-critique `[run 2026-07-29, before commit]`

- **Over-claim check:** every magnitude is quoted or tabled from Jha; the "90% reduction" is paired with
  its own residual (HR 1.2, \~20% excess) so it is not read as a clean reset; `confidence: high` is
  justified by the source's *reported* cross-cohort triangulation, not by a single study's authority.
- **Reverse-causation:** the sick-quitter correction is presented as biasing *against* the finding, so
  the surviving benefit is conservative — not laundered.
- **Scope discipline:** kept to mortality/life-expectancy (what Jha measures); did not import cessation
  *methods* (pharmacotherapy, behavioural support) — a prescriber act and a different question.

## References

---
type: framework
question: Does garlic supplementation lower blood pressure, by how much, for whom (hypertensive vs normotensive), and does that surrogate effect reach patient-important cardiovascular outcomes?
aliases: [Garlic, Garlic Supplement Blood Pressure, Garlic and Hypertension, Kwai Garlic Powder Blood Pressure, Allicin Blood Pressure, Aged Garlic Extract Blood Pressure]
authors: [Ried, Karin; Frank, Oliver R; Stocks, Nigel P; Fakler, Peter; Sullivan, Thomas; Ma, Xiao; Zhang, Hongying; Jia, Jinhai]
sources: [Ried - Garlic Blood Pressure Meta-Analysis 2008, Ma - Garlic Blood Pressure Meta-Analysis 2025]
confidence: low
cluster: sodium-bp
relationships:
  related_to:
    - Blood Pressure Lowering and Cardiovascular Events
    - Surrogate Outcomes
    - Baseline Risk and the Relative-Absolute Split
    - Is the Food Category Doing Any Work
    - Layer 1 - Ranking Interventions for a Stratum
    - Sodium Intake and Blood Pressure
    - Potassium Intake and Blood Pressure
    - Dietary Nitrate and Blood Pressure
created: 2026-09-25
updated: 2026-09-25
self_critiqued: 2026-09-25
---
<div class="recent-page" data-last-updated="2026-09-25"></div>


Does a garlic supplement lower blood pressure, and if so for whom? Two gold meta-analyses now bear on
this — Ried 2008 (11 placebo-controlled RCTs, hypertensive + normotensive) and Ma 2025 (12 RCTs, all
hypertensive). Both agree the effect is **real but modest, concentrated in hypertensives, on a
surrogate endpoint, over the short term**. But their agreement is a **non-independent update**, not
two independent confirmations — Ma re-pools the older trials and adds mostly Karin Ried's own later
RCTs (independence note below) — so the confidence gain is limited.

## Effect estimate
[@ried2008]

- **effect_measure:** absolute reduction vs placebo in mmHg (no baseline-risk-scaled absolute-risk
  figure — the outcome here is the BP number itself, a surrogate).
- **population_and_comparator:** adults in 11 RCTs, garlic (mostly standardised dried powder) vs
  placebo, 12-23 weeks.
- **outcome:** office SBP / DBP — a **surrogate**, not a patient-important endpoint (see below).

| Contrast | n | WMD (mmHg) | 95% CI | significance | I2 |
|---|---|---|---|---|---|
| SBP — all | 10 | -4.56 | -7.36, -1.77 | p<0.001 | 57% |
| DBP — all | 11 | -2.44 | -4.97, 0.09 | NS (p=0.06) | 83% |
| SBP — hypertensive | 4 | -8.38 | -11.13, -5.62 | p<0.001 | 0% |
| SBP — normotensive | 6 | -2.28 | -4.61, 0.05 | NS (p=0.06) | — |
| DBP — hypertensive | 3 | -7.27 | -8.77, -5.76 | p<0.001 | 0% |
| DBP — normotensive | 8 | -0.06 | -1.37, 1.25 | NS (p=0.93) | — |

The pooled SBP effect (\~4.6 mmHg) is real but modest and heterogeneous; the DBP effect is not
significant overall. Split by baseline BP, the heterogeneity vanishes (I2=0) and the picture is
stark: the benefit lives in the hypertensive stratum and the normotensive arms are near-null.

## Ma 2025 — updated hypertensive-only MA: same quantity as Ried's hypertensive subgroup
[@ma2025garlic]

Ma 2025 is an **updated meta-analysis + trial sequential analysis** of 12 placebo-controlled RCTs in
which **every subject was hypertensive** (405 garlic, 333 placebo; RoB 2, GRADE, Egger, sensitivity
analysis, TSA). Because its population is entirely hypertensive, Ma's pooled estimate is the **same
quantity as Ried's hypertensive SUBGROUP**, not Ried's all-populations pool — the load-bearing "same
quantity?" check before any comparison:

| Parameter | Ried 2008 | Ma 2025 | Same quantity? |
|---|---|---|---|
| SBP, hypertensive (between-group MD, mmHg) | -8.38 (-11.13, -5.62), 4 trials, I2=0% | -8.121 (-10.95, -5.28), 12 trials, I2=48% | YES -> **confirms** (\~8 mmHg, near-identical) |
| DBP, hypertensive (between-group MD, mmHg) | -7.27 (-8.77, -5.76), 3 trials, I2=0% | -4.256 (-5.99, -2.52), 12 trials, I2=55% | YES quantity; Ma **smaller** -> attenuation |
| SBP, all/mixed populations | -4.56 (-7.36, -1.77), 10 trials | (no mixed arm) | N/A — do NOT compare Ma to Ried's -4.56 |
| Normotensive arms | SBP -2.28 NS, DBP -0.06 NS | (no normotensive arm) | N/A — Ma is **silent** on normotensives |
| k trials / base | 11 total | 12, all hypertensive | overlapping base (below) |
| Preparation mix | 9/11 Kwai dried powder | Kwai + Allicor + Kyolic AGE + Japanese trad | Ma broader/newer |

**The trap avoided:** Ma's headline -8.121 mmHg SBP looks like it nearly *doubles* Ried's headline
-4.56 — but those are different quantities (Ma all-hypertensive vs Ried all-populations). Matched
like-for-like, Ma's hypertensive SBP (-8.12) essentially **reproduces** Ried's hypertensive subgroup
(-8.38): garlic's \~8 mmHg SBP effect in hypertensives is stable across 17 years and more trials. DBP
**attenuates** (Ma -4.26 vs Ried's hypertensive -7.27, landing between Ried's all-pool -2.44 NS and
hypertensive -7.27). Ma **adds no normotensive arm**, so it neither confirms nor refutes Ried's
near-null normotensive result — the baseline-BP **effect-modification** claim still rests on Ried
alone. «...the SBP in hypertensive patients was significantly reduced compared to that in the placebo
group (difference in mean: −8.121, 95% CI: −10.95 to −5.28... DBP... difference in mean: −4.256,
95% CI: −5.99 to −2.52...)»

## Not an independent confirmation — a non-independent update (type-F, not type-E)
[@ma2025garlic]

A naive read — *a second gold MA agrees, so confidence rises (type-E)* — fails the independence test.
The two MAs do **not** share authors (Ma/Zhang/Jia vs Ried/Frank/Stocks/Fakler/Sullivan), but
independent *backing* requires independent trials, and Ma's evidence base is not independent of Ried:

- **Four of Ma's 12 trials are Karin Ried's own RCTs** (Ried 2010, Ried 2013, Ried 2016, plus one
  further Ried trial — the Kyolic aged-garlic-extract series) — i.e. a third of the pooled data is the
  incumbent MA's first author's own primary evidence.
- The older canonical **Kwai** trials (Auer 1990, Vorberg & Schneider, De Santos & Gruenwald,
  Kandziora) are the standard shared base of garlic-BP MAs and almost certainly overlap
  Ried 2008's 11-trial set.

So Ma's agreement with Ried is **expected and largely self-referential**, not convergence from a
separate line of evidence. This is a **type-F update** (more/newer trials, plus GRADE + RoB 2 + TSA
that Ried 2008 predated, refreshing the hypertensive estimate) — NOT a **type-E** independent
confirmation. The *two MAs agree* confidence gain is therefore limited.

## Quality caveats on Ma 2025 (why `confidence:` stays low)
[@ma2025garlic]

- **Internal contradiction on publication bias.** The results section reports «the Eggers regression
  analysis indicated the absence of publication bias» (SBP p=0.29, DBP p=0.26), yet the limitations
  state «there was significant publication bias in both the SBP and DBP analysis groups». — the paper is internally
  inconsistent; at minimum publication bias is not cleanly excluded.
- **Overclaim.** Ma concludes garlic «may be recommended by clinicians for the management of
  hypertension» and, via TSA, that «further studies are unnecessary» — a strong claim for a
  **surrogate-only** base with **zero** cardiovascular-outcome trials and moderate heterogeneity
  (SBP I2=48%, DBP I2=55%). Its *further studies are unnecessary* claim cannot hold for CV outcomes never trialled
  ([[Surrogate Outcomes]]).
- **Gaps persist.** Ma pools varied doses (188-2,400 mg/d) but runs **no dose-response**
  meta-regression, and measures only office BP — so both of Ried's gaps (dose-response, CV endpoint)
  remain open. Low-profile journal (Asian Biomed / Sciendo).

## Baseline BP is the effect-modifier (route a + route b)
[@ried2008]

Meta-regression makes baseline BP a significant predictor of the reduction (DBP R=-0.316, p=0.02;
SBP R=-0.151, p=0.03 in the body — the abstract prints a sign-flipped SBP R=0.057, an internal typo;
the direction and both p-values are consistent). This is stronger than a route-(a) baseline-risk
story: the **relative/absolute reduction itself is larger in hypertensives** (\~8 vs \~2 mmHg SBP), so
garlic shows genuine **effect modification (route b)** by baseline BP, not merely a constant relative
effect applied to a higher-risk group. See [[Baseline Risk and the Relative-Absolute Split]].
Practically: for a normotensive person the expected BP effect is small and unproven; for a
hypertensive it is meaningful. the decision therefore stratifies on baseline BP.

## Dose-response: not established
[@ried2008]

Dosage and duration were tested as continuous predictors and were **not significant**. No knee,
plateau, or threshold is located over the studied range (600-900 mg/d standardised powder;
12-23 weeks) — the authors explicitly call for a dose-response study. So no minimum effective dose
can be stated; the effect is only characterised at the doses trialled, not below or above them.

## It is a supplement isolate, not *eating garlic*
[@ried2008]

9 of 11 trials used standardised **dried garlic powder** (mostly Kwai); 1 aged garlic extract, 1
distilled oil. The active agent is credited to allicin (via alliinase) and H2S. Two consequences.
First, this evidence is about a **dosed, blindable isolate**, not the food on a plate — the same
isolate-vs-food gap seen elsewhere ([[Is the Food Category Doing Any Work]]): the blindable form is
what got the clean RCT. Second, **low allicin release** from commercial supplements is a documented
problem (Lawson & Wang), so the labelled dose overstates the delivered active agent — a
preparation-specific caveat that blocks transporting the effect to an arbitrary garlic pill.

## BP is a surrogate — the transmission to hard outcomes is untested here
[@ried2008]

Ried measured only office BP. The authors state «larger scale long-term trials are needed to test
the effectiveness of garlic on cardiovascular outcomes». So garlic->stroke / CV events / mortality
is **not** shown by this source. The causal transmission BP->CV events is itself an evidenced claim
held elsewhere ([[Blood Pressure Lowering and Cardiovascular Events]]): a \~5/2-3 mmHg population
shift maps onto a material CV-event reduction *if* the drug-trial BP->outcome relationship transports
to a garlic-induced BP drop. That *if* is the open question — a marker moving is not an outcome moving
([[Surrogate Outcomes]]). treat the CV-outcome benefit as plausible-but-unproven, carried
by borrowed BP->CV evidence, not by garlic trials.

## Layer-1 sizing: net of a mature drug substitute


Ried notes garlic's SBP effect is «comparable to» commonly-prescribed antihypertensives
(beta-blockers \~5 mmHg SBP, ACEI \~8 mmHg SBP, ARBs \~10.3 mmHg DBP)
[@ried2008]. Under the substitution rule
([[Layer 1 - Ranking Interventions for a Stratum]]), the marginal garlic rock is sized **net of**
these drugs: for a diagnosed hypertensive, mature low-harm antihypertensives already capture most of
the BP->CV benefit, so garlic's *additional* value on that single channel is small. Garlic's rock is
larger only where the drug is not taken (untreated / drug-averse / mild elevation) or as an adjunct —
and even then the durability and delivered-dose caveats apply. This is single-channel substitution;
it does not shrink any non-BP effect garlic might have.

## Synthesis / status


Two gold MAs (Ried 2008, Ma 2025), `confidence: low`. The surrogate SBP effect in **hypertensives**
(\~8 mmHg) is reproduced across both and 17 years — the more secure part; everything patient-important
is not. Value types from the Ma differential: **F** — Ma refreshes/bounds Ried's dated pre-GRADE
estimate with a larger, newer, GRADE/RoB2/TSA-rated hypertensive pool (composite beats either alone);
**E-refuted** — the apparent *second-MA confirmation* is adjudicated NON-independent (no shared MA
authors, but a third of Ma's trials are Ried's own + overlapping older Kwai base), so it is *not*
banked as type-E and the confidence gain is limited; **G** — persisting gaps: no dose-response, no
CV-outcome endpoint, and (Ma has no normotensive arm) the baseline-BP effect-modification still rests
on Ried alone. No tension filed — Ma confirms rather than contradicts.

## References

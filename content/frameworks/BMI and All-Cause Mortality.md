---
type: framework
question: What is the shape and magnitude of the BMI to all-cause-mortality curve once smoking and reverse causation are removed, and where is the nadir?
aliases: [Body-Mass Index and Mortality, BMI Mortality Curve, Obesity Paradox, Overweight Mortality Paradox, BMI Nadir]
authors: [Global BMI Mortality Collaboration (org); Wade, Kaitlin H; Carslake, David; Sattar, Naveed; Davey Smith, George; Timpson, Nicholas J; Sjöström, Lars; Sun, Yi-Qian; Di Angelantonio, Emanuele; Yusuf, Salim; Nordic Council of Ministers (org); Wormser, David; Danesh, John]
sources: [Global BMI - BMI All-Cause Mortality 2016, Wade - BMI Mortality Mendelian Randomization 2018, Sjostrom - SOS Bariatric Surgery Mortality 2007, Sun - BMI Mortality Mendelian Randomization, Yusuf - INTERHEART Obesity Myocardial Infarction 2005, NNR - Nordic Nutrition Recommendations 2023, Emerging Risk Factors Collaboration - BMI Abdominal Adiposity Cardiovascular 2011]
cluster: weight-management
confidence: medium
created: 2026-08-05
updated: 2026-09-04
self_critiqued: 2026-08-27
relationships:
  related_to:
    - The U-Shaped Association Artifact
    - The Observational-Trial Discordance
    - Body Fatness and Cancer Risk
    - Layer 1 - Ranking Interventions for a Stratum
    - Does Weight Loss Reduce Cardiovascular Events
    - Measurement Error in Dietary Assessment
    - Smoking and Mortality
    - Waist-to-Hip Ratio and Cardiovascular Risk
    - BMI vs Abdominal-Adiposity Markers - Which Predicts CVD
---

The bias-corrected shape of the BMI to all-cause-mortality relationship, from the largest
individual-participant-data meta-analysis of the question: **239 prospective cohorts, four
continents, 10.6 million participants** (the primary bias-controlled analysis draws on 189 studies,
3.95M never-smokers, 385,879 deaths). Its design is built to answer the artifact question directly
-> [[The U-Shaped Association Artifact]]: the *pre-specified primary analysis* restricts to
never-smokers, drops anyone with chronic disease at baseline, and excludes the first 5 years of
follow-up — «Primary analyses will also exclude current and former smokers, and the first 5 years of
follow-up.» [@globalbmi2016]

## The corrected curve — nadir at 22.5-25, monotone rise above it

In the bias-controlled analysis the curve is **J-shaped with a nadir at BMI 22.5-25 kg/m2** (the
pre-specified reference category), a shallow, mostly reverse-causation underweight arm to its left,
and a **steady monotone rise above 25** with no plateau in the studied range. Per 5 kg/m2 above BMI
25, all-cause mortality rises **HR 1.31 (1.29-1.33)** overall.
[@globalbmi2016]

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

[@globalbmi2016]

**Stratum-dependence (steepness, per 5 kg/m2 above 25) — the relative effect is real but not
uniform:**

- **Age** — steepest in the young, attenuating with age: 35-49 y **1.52 (1.47-1.56)**, 50-69 y 1.37
  (1.35-1.39), 70-89 y 1.21 (1.17-1.25). [@globalbmi2016]
- **Sex** — steeper in men: men **1.51 (1.46-1.56)**, women 1.30 (1.26-1.33).
  [@globalbmi2016]
- **Region** — Europe 1.39, North America 1.29, East Asia 1.39, Australia/NZ 1.31; **South Asia
  1.13 (0.97-1.30)** is the one non-significant region — but on only 3 studies / 4,040 deaths, so its
  flatness is as likely small-n imprecision as a real regional difference (East Asia, with 46 studies,
  shows the *same* steep 1.39 as Europe).
  [@globalbmi2016]
- **Cause** — CHD 1.42, stroke 1.42, respiratory 1.38, cancer 1.19 (cancer the shallowest).
  [@globalbmi2016]

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

[@globalbmi2016]

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

[@globalbmi2016]

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
signal. [inferred from @globalbmi2016] **Refined below (Sun MR):** this
never-smoker residual is itself largely a *smoking* phenomenon (respiratory-death-driven, evident only
in ever-smokers) — condition on smoking before reading the low arm.

## The genetic-instrument confirmation — Wade MR cashes the missing strong check `[2026-08-06, Wade]`

The Global BMI curve above is adjudicated by confounder-*removal* only (no genetic instrument — the gap
flagged in Limits). Wade 2018's **Mendelian randomization** in UK Biobank (335,308 White British, 9,570
deaths; a 77-SNP BMI genetic risk score used as an instrumental variable) supplies that check — the
genetic natural experiment carries orthogonal biases to the observational cascade (immune to the reverse
causation and smoking confounding the cascade removes by *exclusion*), so it adjudicates the same arms by
an independent route.

**The causal MR estimates (per 1 kg/m2 higher BMI):** «MR analyses supported a causal association
between higher BMI and greater risk of all-cause mortality (hazard ratio [HR] per 1 kg/m2: 1.03; 95% CI:
0.99-1.07) and mortality from cardiovascular diseases (HR: 1.10; 95% CI: 1.01-1.19), specifically
coronary heart disease (HR: 1.12; 95% CI: 1.00-1.25) and those excluding coronary heart
disease/stroke/aortic aneurysm (HR: 1.24; 95% CI: 1.03-1.48), stomach cancer (HR: 1.18; 95% CI:
0.87-1.62), and esophageal cancer (HR: 1.22; 95% CI: 0.98-1.53)».
[@wade2018] The all-cause
point estimate (1.03/unit; scaled \~16% per 5 kg/m2, 95% CI -5% to +41%) is directionally supportive but
**imprecise** — its CI crosses the null, and the Durbin-Wu-Hausman test finds no significant
observational-vs-MR difference (P=0.96). The **CVD arm is where MR reaches significance** (1.10, 1.01-1.19),
and MR estimates are of «similar or greater magnitude to observational analyses (with wider CIs)».
[@wade2018]

**What MR says about the U-curve — the low arm largely deflates, the high arm is genetically corroborated
(significant for CVD-cause mortality; directional but imprecise for all-cause).**
«The J-shaped BMI-mortality association remained in MR analyses ... but with a smaller value of BMI at
which mortality risk was lowest (\~23 vs. \~26 kg/m2 with observational analyses) and apparently flatter
over a larger BMI range».
[@wade2018] The nadir shifts
DOWN from \~26 (observational) into the normal range (\~23), and the residual J is driven by the extreme
BMI quantiles — removing them yields a linear association (P=0.999 for linear trend). Wade names the
mechanism: «Reverse causality is an important source of bias in observational estimates ... and may be
the driver of the characteristic J-shaped association», so the observational curve «overestimate[s] the
harmful effects of having underweight while underestimating the harmful effects of having overweight or
obesity». [@wade2018] The
*direction* of the correction is the payoff: MR **deflates** the underweight arm (reverse causation) and
**inflates** the obesity arm — the mirror image of the confounder-strip cascade above, reached
genetically. Severe underweight plausibly keeps real harm (Wade concedes it «is plausible that
individuals considered to have severe and unhealthy underweight have a higher risk of mortality»),
converging with the Global BMI residual underweight 1.47.
[@wade2018]

**Independence verdict — type-F refinement, NOT independent-E (the lineage chase mattered).** Before
counting Wade as an independent genetic witness, build the parameter table and chase the authorship:

| Parameter | Global BMI 2016 (corrected observational IPD-MA) | Wade 2018 (Mendelian randomization) | Same quantity? |
|---|---|---|---|
| Adjudication route | never-smoker restriction + drop first 5 y follow-up + drop baseline disease | 77-SNP genetic instrument (IV ratio estimate) | **NO** — different method class (this IS the F-refinement axis) |
| Nadir (BMI at min mortality) | 22.5-25 kg/m2 (pre-specified referent) | \~23 kg/m2 (MR), vs \~26 observational in the same UKB | **YES** — same construct, convergent |
| Underweight / low arm | 1.47, residual after correction (partly reverse causation, not wholly) | J flattens, nadir drops; reverse causation named the J's driver; severe underweight plausibly real | **YES** — same arm, convergent mechanism |
| Above-nadir (overweight/obese) arm | monotone harm, HR 1.31 per 5 kg/m2 above 25 (corrected association) | causal MR harm; obesity harm *underestimated* by observational (CVD 1.10/unit) | **YES** — same arm; Wade adds the causal warrant |

The estimates converge on the nadir, on the low-arm-is-reverse-causation reading, and on causal harm
above the nadir. **But they are not independent.** Wade cites Global BMI (ref 5) as corroborative
context, and — decisively — Wade's senior author **George Davey Smith** and co-author **Naveed Sattar**
both sit on the **Global BMI Mortality Collaboration writing committee** (`Smith GD`, `Sattar N` in the
2016 author list). Two shared authors, including the anchor MR investigator, means the two estimates come
from an overlapping group, so this is a same-lineage **type-F** refinement (the later source supplies the
earlier's missing genetic-instrument leg) — **not** independent-E backing. The convergence is genuine and
cashes the missing strong check, but it must not be counted as independent corroboration.
[inferred from @globalbmi2016; @wade2018]

## Sun MR — the single J is at least TWO curves; the underweight arm is largely a smoking phenomenon `[2026-08-19, Sun]`

A second, non-linear MR (Sun 2019: HUNT Norway 56,150 + UK Biobank 366,385; fractional-polynomial
meta-regression across **100 residual-BMI strata**) both **confirms the nadir** and **decomposes the
curve**. The overall MR J agrees with the page above — «The lowest risk was at a BMI of around 22-25»
(HUNT nadir \~22-23, UKB \~25) [@sun2019] — converging with the 22.5-25 corrected-observational nadir and Wade's \~23. Linear MR
(per 1-unit genetically-predicted BMI) shows the same category split: overall **1.04 (1.02-1.06)**,
obese **1.09 (1.04-1.14)** harm, but underweight **0.66 (0.52-0.84)** — in the underweight stratum
*raising* BMI reduces mortality. [@sun2019]

**The decomposition is the new finding.** Stratifying by smoking splits the aggregate J into two
different shapes: «an always-increasing relation of BMI with mortality in never smokers and a J shaped
relation in ever smokers ... the BMI-mortality relation is likely comprised of at least two distinct
curves, rather than one J shaped relation. An increased risk of mortality for being underweight was
only evident in ever smokers.» [@sun2019] In never-smokers Sun finds «no evidence for a harmful effect of reducing BMI in underweight
participants» — clearest in HUNT (a positive slope throughout under/normal/overweight), while in UKB
«confidence intervals were wide and compatible with a null effect at all values of BMI».
[@sun2019]

**Refinement of the underweight arm above.** The section above (from Global BMI) holds the never-smoker
underweight residual (1.47) as *partly real harm*. Sun sharpens, without overturning, that reading:
the underweight-mortality risk concentrates in **ever-smokers**, where «Increased mortality in
underweight smokers might be driven by respiratory diseases» — the non-CVD-non-cancer «other» category
that carries the only profound J. [@sun2019] This is NOT a filed tension with Global BMI: Global BMI's 1.47 is an *observational
association* within never-smokers (residual reverse causation not removed by the never-smoker
restriction), Sun's is a *genetic causal slope* on a small (1-3% of sample) and imprecise underweight
stratum — the observational-vs-MR discordance the page already carries, now stratified by smoking
-> [[The Observational-Trial Discordance]]. Candidate mechanism for whatever residual low-BMI risk
remains: «the higher risk of all cause mortality in the lower range of BMI might be explained by low
lean mass rather than low fat mass». [@sun2019] The **decision reading**: for a lean **never-smoker**, the pooled/observational underweight
mortality penalty is not shown to apply causally — condition on smoking before reading the low arm.

**Shape is outcome-specific (UKB cause-specific MR).** CVD mortality increasing (nadir \~21-22); cancer
mortality **flat** («no strong evidence that BMI affects cancer mortality in any BMI category»); the
non-CVD-non-cancer «other» curve «had a profoundly curved J shape, with the lowest risk of mortality at
a BMI of 23.0-24.0» (respiratory 27% / digestive incl. alcoholic-liver 18% / nervous 15% / external
incl. suicide 11%). [@sun2019] So the
J lives in one cause category — the same outcome-specificity the fabric holds for other exposures.

**Independence verdict — type-F, NOT independent-E (the lineage chase again).** Sun shares *no* author
with Wade, so the triage-stage *independent genetic witness (no excluded authors)* reads as a fresh
witness — but the chase defeats it: co-author **Emanuele Di Angelantonio** also leads the **Global BMI
Mortality Collaboration** (Global BMI 2016 ref 6), and Sun **cites Wade 2018 as ref 33**. Shared author
vs the held observational IPD-MA + cites-as-antecedent vs the held MR = **type-F refinement**, not
independent-E.

| Parameter | Global BMI 2016 (corrected obs.) | Wade 2018 (linear MR, UKB) | Sun 2019 (non-linear MR, HUNT+UKB) | Same quantity? |
|---|---|---|---|---|
| Nadir | 22.5-25 | \~23 (MR) vs \~26 (obs.) | \~22-23 (HUNT) / \~25 (UKB) | **YES** — convergent |
| Low arm | residual 1.47 (partly real) | J deflates, reverse causation | no underweight harm in never-smokers; harm is ever-smoker/respiratory | **partly** — Sun conditions it on smoking |
| Above-nadir arm | monotone harm 1.31/5u | causal MR harm (CVD 1.10/u) | 1.09/u obese; steeper in women | **YES** — convergent |
| Independence | — | shares Davey Smith/Sattar w/ Global BMI | shares Di Angelantonio w/ Global BMI; cites Wade | **NO** — overlapping lineage, all type-F |

**Adjudication caveats.** MR is the strong check, but (i) Sun's **non-linear** fractional-polynomial
method carries a published **Editor's Note on methodological criticism + an updated analysis** — the
note's text is not in the held chunk, so the non-linear *shape* estimates carry an added caveat while
the smoking-decomposition *direction* is less exposed; and (ii) stratifying on smoking is a **collider**
(genetically-predicted BMI influences smoking), which Sun argues is «likely to be negligible».
[@sun2019]
[inferred from @sun2019] the *decompose the aggregate curve by the
effect-modifier* reading and the not-a-tension resolution are the wiki's own synthesis
-> [[The U-Shaped Association Artifact]].

<div class="recent-update" data-last-updated="2026-09-04">

## Decision relevance

- **The nadir is 22.5-25, and above it every increment carries risk — there is no protective or
  even neutral overweight band once bias is removed.** For a lean, non-smoking person the relevant
  target is holding BMI in the low-mid 20s; *overweight is fine / protective* does not survive the
  correction. (BMI is a crude adiposity proxy — for central-adiposity strata see
  [[Menopause and the Shifting Levers]] and waist-based measures; this page is the BMI *curve*, not a
  claim that BMI is the right instrument.)
- **For the specific decision of who is at cardiovascular (MI) risk, BMI is the wrong instrument — use
  waist / waist-to-hip ratio.** INTERHEART (case-control, 27,098 people) found BMI's whole MI association
  disappears after adjusting for fat distribution (top-vs-bottom quintile OR 1.44 -> 1.12 after WHR ->
  0.98 after all risk factors), while WHR stays the strongest marker; abdominal adiposity's population-
  attributable share of MI is \~3x what the BMI cut-point captures (24.3% vs 7.7%)
  -> [[Waist-to-Hip Ratio and Cardiovascular Risk]]. This cashes the crude-proxy limitation above with a
  hard endpoint — the all-cause-mortality *curve* here is a different outcome and design (cohort), and
  both truths hold at once. [@yusuf2005interheart]
  **Contested (added 2026-09-04):** a pooled analysis of 58 prospective cohorts (ERFC 2011) found BMI,
  waist and WHR of *similar* strength for incident CVD and none adding prediction over BP/lipids/diabetes,
  and refutes the "measure WHR not BMI" recommendation for developed-country populations — the case-control
  MI ranking above is design-contested -> [[BMI vs Abdominal-Adiposity Markers - Which Predicts CVD]].
  [@erfc2011whr]
- **Adiposity is a big-rock lever, and the effect is largest where there is most life to lose** — the
  gradient is steepest at 35-49 y (1.52 per 5 units) -> [[Layer 1 - Ranking Interventions for a Stratum]].
- **This estimates the association, not the benefit of weight loss.** A bias-corrected observational
  curve says where mortality is lowest across people; it does not establish that *reducing* an
  individual's BMI moves them down it -> [[Does Weight Loss Reduce Cardiovascular Events]] holds the
  intervention evidence (the loop the curve alone cannot close). **At the extreme-obesity end the loop
  is partly closed:** SOS (bariatric surgery, \~14-25% sustained loss, matched **non-RCT** cohort) found
  reduced all-cause mortality — adjusted HR 0.71 (P=0.01, no CI reported) — in severe obesity (BMI >=34/>=38), the
  interventional counterpart to this curve's steep upper arm. [@sjostrom2007] The design is weaker than an RCT
  (self-selection), so it warrants the arm directionally, not causally-clean.

</div>

## Limits

- **Observational, corrected — not causal-proof.** The exclusions remove the *known* biases
  (smoking, reverse causation, prevalent disease); residual confounding (fitness, socioeconomic
  status, unmeasured illness) is not excluded, and there is no Mendelian-randomization arm in this
  analysis. So the corrected curve is strong but, like coffee and unlike alcohol, adjudicated by
  confounder-removal *only*, not by a genetic instrument -> [[The U-Shaped Association Artifact]].
- **BMI measurement** — a mix of measured and self-reported BMI across cohorts (self-report biases
  toward the null / mislabels categories) -> [[Measurement Error in Dietary Assessment]]; the paper
  runs a self-reported-vs-measured sensitivity analysis.
- **The MR gap is now cashed externally, but not independently `[2026-08-06]`.** Wade's genetic
  instrument (the section above) supplies the strong check Global BMI lacked and converges on the nadir
  and reverse-causation reading — so the corrected curve is no longer MR-orphaned. The residual limits:
  the two analyses share investigators (type-F, not independent-E), the all-cause MR is imprecise (CI
  crosses null), and Wade's MR is one cohort (UK Biobank, White British) vs Global BMI's 239 cohorts on
  four continents -> [[The Observational-Trial Discordance]].
- **Cannot separate fat mass from lean mass or distribution** — BMI is the exposure, and the same BMI
  spans different body compositions across age, sex, and ethnicity (a plausible contributor to the
  regional differences, alongside the small-n imprecision of the South Asian estimate).

## A guidance family stratifies the target by age — NNR2023 `[2026-08-27, NNR revisit]`

The Nordic Nutrition Recommendations 2023 recommend maintaining a healthy weight for working-age
adults but explicitly decline an optimal-BMI target for older adults — the guidance-family form of
this page's own older-adult attenuation finding (the 70-89 y HR being materially shallower than the
35-49 y one). NNR: «Maintaining a healthy body weight and body weight stability is recommended in
non-pregnant adulthood and for healthy growth in childhood, due to the associated health effects and
the serious health risks of underweight, overweight and obesity.»
[@nnr2023] For older adults it stops short:
«For older adults, the associations between overweight and health outcomes are less clear, and the
available data are inadequate to make precise recommendations for optimal BMI in this age group.»
[@nnr2023]

- **Classification: guidance-family attribution (F — a stratification caveat), NOT independent
  backing.** NNR rests on the same observational base this page appraises (its own citations are
  Boushey and Cloetens & Ellegård reviews, not a fresh instrument), so it does **not** lift the
  causal ceiling and adds no confidence via method independence. **No `[E-independent]` tag.** The
  value is that a guidance body, in its current cycle, mirrors the fabric's age-stratification rather
  than issuing a single all-age BMI target — a route-(a)/route-(b) caveat named by guidance.
- **Counter-passage check.** NNR states no all-age BMI optimum and no obesity-paradox endorsement; it
  declines the older-adult target on data-inadequacy grounds, which does not oppose the page's MR-
  adjudicated monotone-rise nadir (22.5-25) for working-age adults — the two are consistent once the
  age stratum is matched (not-joined check (ii): different unit/stratum). No divergence to file.

## References

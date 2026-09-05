---
type: framework
question: Which anthropometric measure best identifies who is at risk of myocardial infarction — BMI, or a marker of abdominal/central adiposity (waist circumference, waist-to-hip ratio)?
aliases: [Waist-to-Hip Ratio, WHR, Waist Circumference and Heart Disease, Abdominal Obesity and Myocardial Infarction, Anthropometric Markers of Cardiovascular Risk, Central Adiposity and CVD]
authors: [Yusuf, Salim; Hawken, Steven; Anand, Sonia S; Wormser, David; Di Angelantonio, Emanuele; Danesh, John]
sources: [Yusuf - INTERHEART Obesity Myocardial Infarction 2005, Emerging Risk Factors Collaboration - BMI Abdominal Adiposity Cardiovascular 2011]
cluster: weight-management
confidence: moderate
self_critiqued: 2026-09-04
created: 2026-08-25
updated: 2026-09-04
relationships:
  related_to:
    - Ectopic Fat and Depot-Specific Risk
    - BMI and All-Cause Mortality
    - Does Weight Loss Reduce Cardiovascular Events
    - Layer 1 - Ranking Interventions for a Stratum
    - Menopause and the Shifting Levers
    - The U-Shaped Association Artifact
    - BMI vs Abdominal-Adiposity Markers - Which Predicts CVD
    - Baseline Risk and the Relative-Absolute Split
---
<div class="recent-update" data-last-updated="2026-09-04">

**The measure you pick changes who counts as at-risk.** INTERHEART — a standardised case-control study
of first acute myocardial infarction, 27,098 people (12,461 cases / 14,637 matched controls) across 52
countries and all major ethnic groups — found that a marker of *abdominal* adiposity (waist-to-hip ratio;
waist circumference) relates to MI far more strongly and consistently than **BMI**, the conventional
measure. «Waist-to-hip ratio shows the strongest relation with the risk of myocardial infarction
worldwide.» [@yusuf2005interheart] This is a
*which-marker* question (Layer-1 baseline-risk / route (a): measure the better prognostic marker) — NOT
a claim that fat causes MI specifically through the WHR channel.

**Contested by prospective design (added 2026-09-04).** A later pooled individual-participant analysis
of 58 prospective cohorts (ERFC 2011, 221 934 people) found the three measures have *similar*
association strength with CVD, and that none adds predictive value once conventional risk factors are
known — and it names INTERHEART as the claim it refutes. The "strongest relation / measure WHR not
BMI" headline below therefore stands **only for the case-control MI question in an all-ethnicities
sample**, and is attenuated for prospective CVD prediction in developed-country populations. See *The
prospective-cohort contest* section and [[BMI vs Abdominal-Adiposity Markers - Which Predicts CVD]].

</div>

## The crux — BMI's association is largely redundant with fat distribution `type-F`

Top vs bottom quintile OR for MI, following the adjustment cascade — this is the load-bearing number:

| BMI top vs bottom quintile | OR (95% CI) |
|---|---|
| Before adjustment | 1.44 (1.32-1.57) |
| After adjustment for waist-to-hip ratio | 1.12 (1.03-1.22) — substantially reduced |
| After adjustment for the other 8 risk factors | 0.98 (0.88-1.09) — non-significant, gone |

[@yusuf2005interheart]

BMI's apparent MI signal **collapses once you know a person's waist-to-hip ratio**, and disappears
entirely after full risk-factor adjustment — while WHR, waist, and hip stay highly significant after the
same adjustment. So most of what BMI captures about MI risk is fat *distribution* it measures only crudely;
the abdominal marker carries the information, and BMI adds little on top of it (adding BMI to WHR had
«only a modest effect»; adding WHR to BMI was highly significant; ROC area WHR 0.601 > waist 0.571 > BMI
0.559). [@yusuf2005interheart]

## The graded WHR relation and the opposing waist/hip effects

**WHR is monotone over the studied range with no threshold located.** Each successive quintile carried a
significantly higher OR than the last: Q2 1.15 (1.05-1.26); Q3 1.39 (1.28-1.52); Q4 1.90 (1.74-2.07); Q5
**2.52 (2.31-2.74)** (adjusted age/sex/region/smoking); top-vs-bottom **1.75 (1.57-1.95)** after full
risk-factor adjustment. «The risk of myocardial infarction rose progressively with increasing values for
waist-to-hip ratio, with no evidence of a threshold». [@yusuf2005interheart] Read as the dose-response prior says: *no knee is shown* over the studied
quintile range — not that none exists -> [[The U-Shaped Association Artifact]] (the shape claim is bounded
to the studied range, and rests on a quintile display, not a modelled curve).

**Waist and hip pull in opposite directions, and both are independent of BMI** — this is why the *ratio*
outperforms either alone (top vs bottom quintile, adjusted for BMI): waist **1.77 (1.59-1.97)** harmful;
hip **0.73 (0.66-0.80)** protective. Per 1 SD (adjusted for BMI/height): waist 1.25 (1.21-1.30), hip 0.87
(0.84-0.89), WHR **1.37 (1.34-1.41)** — the strongest single marker, BMI **1.10 (1.07-1.13)** the weakest.
[@yusuf2005interheart]

## Sizing the rock — the population burden BMI hides

Population-attributable risk of MI for the top two quintiles (\~40% prevalence): **24.3% (22.5-26.2)** for
WHR vs only **7.7% (6.0-10.0)** for BMI — a \~3-fold larger share of MI attributable to abdominal adiposity
than the BMI cut-point captures. [@yusuf2005interheart] For Layer-1 ranking this matters twice over: abdominal adiposity is a genuine big rock, and
*measuring it by BMI systematically under-ranks it*. (In the parent INTERHEART risk-factor paper the
dominant MI levers were smoking and the ApoB/ApoA1 lipid ratio; abdominal obesity sits in the next tier —
sized here, not asserted to top the list.) [inferred from @yusuf2005interheart] -> [[Layer 1 - Ranking Interventions for a Stratum]]

## Consistency across strata

- **Ethnicity** — BMI was weakest in all 8 ethnic groups and NON-significant in South Asians (0.99),
  Arabs (1.00), and mixed-race Africans (1.07); WHR was significant in every group and the strongest
  marker in 6 of 8 (waist strongest in Chinese and Black Africans). A marker of abdominal obesity beat
  BMI in every group. [@yusuf2005interheart]
- **BMI fails exactly where risk concentrates** — no BMI-MI association in those with raised ApoB/ApoA1 or
  with hypertension, whereas WHR held there. WHR also held across diabetes, lipids, smoking, and sex, and
  was steeper in the young (<55 y men / <65 y women 1.46 vs 1.32 older). WHR predicted MI even in the very
  lean (BMI <20). [@yusuf2005interheart]

## Decision relevance

- **Measure waist / waist-to-hip ratio, not BMI alone, when ranking a person's MI risk from adiposity.**
  A normal-BMI person with a high WHR is not low-risk; a high-BMI person with a low WHR carries less of
  the abdominal signal. This is the sharpest decision-change: BMI alone under-ranks abdominal-adiposity
  risk, most starkly in South Asian, Arab, and mixed-race strata where BMI carries no MI signal at all.
- **It refines, it does not replace, the BMI mortality curve.** BMI still tracks all-cause mortality with
  a real above-nadir gradient -> [[BMI and All-Cause Mortality]] (different outcome, different — cohort —
  design); INTERHEART says BMI is the wrong *instrument* for the specific decision of who is at MI risk,
  cashing that page's own *BMI cannot separate fat distribution* limitation.
- **The lever question is downstream and only partly answered here.** INTERHEART is a marker study; it
  does not show that lowering WHR lowers MI. It flags a two-pronged target — reduce abdominal fat AND
  preserve muscle (hip) — because weight loss that also strips skeletal muscle may forfeit some benefit
  -> [[Does Weight Loss Reduce Cardiovascular Events]]. [inferred from @yusuf2005interheart]

<div class="recent-update" data-last-updated="2026-09-04">

## The prospective-cohort contest — ERFC 2011 refutes the WHR-superiority claim `type-D`

INTERHEART's reverse-causation exposure (flagged in *Limits* below) is not hypothetical: a pooled
analysis of **58 prospective cohorts** with concomitant BMI, WC and WHR in the same people, and serial
measurements for regression-dilution correction, directly overturns the marker-superiority claim for
prospective CVD. This is the higher-design test INTERHEART itself could not be — and the two are
*joined*: ERFC names INTERHEART as the report it refutes. Filed as
[[BMI vs Abdominal-Adiposity Markers - Which Predicts CVD]].

- **The measures are similar, not 3x apart.** Per-1-SD HRs for CVD (age/sex/smoking-adjusted, BMI
  >=20) were BMI 1.23 (1.17-1.29), WC 1.27 (1.20-1.33), WHR 1.25 (1.19-1.31) — near-identical, against
  INTERHEART's \~3-fold WHR-over-BMI gap. «BMI, waist circumference, and waist-to-hip ratio each have a
  similar strength of association with cardiovascular disease risk» [@erfc2011whr]. ERFC's own verdict: «Our
  findings reliably refute previous recommendations to adopt baseline waist-to-hip ratio instead of BMI
  as the principal clinical measure of adiposity» [@erfc2011whr].
- **The design-bias diagnosis is explicit.** ERFC attributes the discrepancy to «the greater
  susceptibility of retrospective studies of acute myocardial infarction to some biases (eg, selection
  biases, reverse causality)» than long-term prospective studies [@erfc2011whr] — the exact hazard the *Limits*
  section anticipated. The INTERHEART BMI-MI odds ratio was 1.12 per 5 kg/m2 vs an ERFC CHD HR of 1.32
  per 5 kg/m2, i.e. the case-control *under*-stated BMI, widening its apparent gap below WHR.
- **BMI is measured far more reproducibly than WHR** — regression dilution ratio 0.95 (0.93-0.97) for
  BMI vs 0.63 (0.57-0.70) for WHR (WHR compounds two circumference errors; between-study heterogeneity
  I2=99%). A noisier marker attenuates more, so a fair comparison should favour WHR — yet it still shows
  no discrimination edge. This inverts a clinical intuition: the "better" abdominal marker is the harder
  one to measure well.
- **Neither marker adds predictive value over the standard risk factors.** Adding BMI / WC / WHR to a
  model with SBP, diabetes and lipids changed the C-index by -0.0001 / -0.0001 / +0.0008 and NRI by
  -0.19% / -0.05% / -0.05% — all null. «Simple adiposity measures provide little or no additional
  information on cardiovascular risk» once conventional factors are known [@erfc2011whr]. This is a *different*
  question from INTERHEART's marker-vs-marker ROC (which had no risk factors in the model) — a
  distinction, not part of the tension — but it caps the whole debate: for anyone whose BP/lipids/
  diabetes are known, the marker choice barely moves the prediction.
- **What survives the contest.** (i) Abdominal adiposity remains a real, modifiable CVD determinant —
  ERFC is explicit the null is about *prediction on top of intermediates*, not aetiology, and the effect
  runs *through* BP/lipids/diabetes (the sharp HR attenuation on adjusting for them is that mediation).
  (ii) The **ethnic-heterogeneity** signal is NOT refuted: ERFC was 90% European descent and states more
  data are needed in non-European populations, so INTERHEART's finding that BMI carries no MI signal in
  South Asians / Arabs / mixed-race Africans stands untested here — a genuine transportability gap, not a
  contradiction. (iii) For the **specific case-control MI decision in an all-ethnicities sample**,
  INTERHEART's within-dataset ranking is unchallenged on its own terms.

The net decision-change: **for CVD risk-ranking in a developed-country adult whose conventional risk
factors are known, BMI is an adequate and more-reproducible clinical adiposity measure; the case for
switching to WHR does not survive prospective design.** The WHR-over-BMI case is strongest where
conventional risk factors are *unmeasured* and in the non-European strata ERFC could not test.
[inferred from @erfc2011whr]

</div>

## Limits — read the design before the ORs

- **Case-control, concurrent measurement — these are marker-prediction ORs, NOT cohort causal effects.**
  Anthropometry was measured around the acute MI in cases, so the design carries reverse-causation and
  survival-bias exposure that a prospective cohort would not: fatal MIs are excluded (survivor selection),
  and acute illness or pre-MI weight/muscle change can distort the measures. The **hip-protective** finding
  is the most exposed — acute-illness muscle loss lowers hip circumference and thereby *raises* WHR in
  cases, which could inflate both the hip protection and the WHR gradient. The *marker-ranking* crux (WHR
  outperforms BMI within the same measured dataset) is more robust to this than any absolute magnitude.
  [inferred from @yusuf2005interheart] — the paper itself notes only that a
  case-control design «cannot elucidate the relation between the different measures of obesity on other
  outcomes», not the reverse-causation exposure. [@yusuf2005interheart]
- **WHR is a surrogate for a surrogate.** «Waist circumference and waist-to-hip ratio are simple and crude
  surrogate measures for visceral obesity, which is probably the key determinant of metabolic
  abnormalities» — and visceral fat is itself a marker for intra-organ fat -> [[Ectopic Fat and Depot-Specific Risk]]. So WHR steers toward the depot doing damage but is two steps removed from it; the
  paper says its WHR-MI relation «might be an underestimate of the true contribution of visceral fat».
  [@yusuf2005interheart]
- **Single source, single outcome.** One (landmark) study, MI only; the finding is a marker-prediction
  claim, and its confidence field is omitted (single-source reference). Corroboration from a prospective
  cohort or Mendelian-randomization WHR instrument on hard CVD outcomes is the gap.
- **Coherence, not validity (R1).** Internally sound and source-faithful; no operation here grades the
  marker against a realized outcome.

## References

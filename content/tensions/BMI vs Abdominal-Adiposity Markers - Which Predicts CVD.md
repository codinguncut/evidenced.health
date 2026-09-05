---
type: tension
question: For identifying who is at cardiovascular risk, does a marker of abdominal adiposity (waist-to-hip ratio, waist circumference) associate more strongly than BMI — or are the adiposity measures of similar strength?
aliases: [WHR vs BMI for CVD, BMI vs Waist-to-Hip Ratio Prediction, Which Adiposity Measure Predicts Cardiovascular Disease, Abdominal Adiposity vs BMI Cardiovascular Prediction]
authors: [Yusuf, Salim; Wormser, David; Di Angelantonio, Emanuele; Danesh, John]
sources: [Yusuf - INTERHEART Obesity Myocardial Infarction 2005, Emerging Risk Factors Collaboration - BMI Abdominal Adiposity Cardiovascular 2011]
cluster: weight-management
confidence: moderate
relationships:
  related_to:
    - Waist-to-Hip Ratio and Cardiovascular Risk
    - BMI and All-Cause Mortality
    - The U-Shaped Association Artifact
    - Baseline Risk and the Relative-Absolute Split
    - Ectopic Fat and Depot-Specific Risk
created: 2026-09-04
updated: 2026-09-04
self_critiqued: 2026-09-04
---
<div class="recent-page" data-last-updated="2026-09-04"></div>


**The joined disagreement.** INTERHEART (case-control, acute MI) found waist-to-hip ratio *three times*
more strongly related to MI than BMI, and recommended switching the principal clinical adiposity
measure from BMI to WHR. ERFC 2011 (pooled prospective cohorts, incident CVD) found BMI, waist
circumference and WHR have *similar* association strength, and explicitly names and refutes the
INTERHEART recommendation. Same contrast (which adiposity measure associates most strongly with a
coronary/CVD event), opposite verdicts, and ERFC cites INTERHEART as the report it overturns — a
genuine type-D clash, not two different questions. — this framing (what is joined, where
each design's answer holds) is the wiki's; the source-attributed claims sit below.

## The parameter table — is this a real joined issue?

The commensurable quantity is the **within-study relative ranking of the adiposity measures** (does WHR
beat BMI in the *same* dataset), NOT the absolute per-SD magnitudes — those use different adjustment
sets, SD sizes and referents across the two studies and are not directly comparable. On the one cell
that IS directly matched (BMI per 5 kg/m2, which ERFC itself compares head-to-head), the case-control
under-states BMI relative to the cohort.

| Parameter | INTERHEART (Yusuf 2005) | ERFC 2011 (Wormser et al.) | Same quantity? |
|---|---|---|---|
| Contrast tested | WHR vs BMI, strength of relation to acute MI | BMI vs WC vs WHR, strength of relation to incident CVD (CHD + ischaemic stroke) | **YES** — both: which adiposity measure relates most strongly to a coronary/CVD event |
| Design | retrospective case-control, anthropometry measured *concurrent* with the acute MI; 27 098 people, 52 countries | prospective IPD-pooled cohorts, *baseline* anthropometry, serial-measurement regression-dilution correction; 58 studies, 221 934 people | **NO — the crux** (reverse causation / selection present vs largely removed) |
| Relative-strength verdict | WHR \~3x more strongly related than BMI; WHR the strongest of all measures | measures similar: per-SD CVD HR BMI 1.23, WC 1.27, WHR 1.25 | **Opposed verdicts on the SAME contrast** |
| Matched cell: BMI per 5 kg/m2 | OR for MI 1.12 | HR for CHD 1.32 | **YES** — same unit; case-control *under*-states BMI (ERFC's own comparison) |
| Outcome | first acute MI (coronary) | incident CVD; CHD reported separately | \~same for the coronary leg; ERFC broader |
| Population | all-ethnicities, incl. South Asian / Arab / African | 90% European descent, developed countries | **NO** — part of the resolution, not the tension |

The fourth column is `YES` on the contrast and on the matched BMI cell; the `NO` on design is *why* the
verdicts differ, and the `NO` on population is what confines the residual live disagreement. Issue
joined -> file the tension.

## View A — the abdominal marker beats BMI (Yusuf, INTERHEART 2005)

«The INTERHEART study clearly indicates that of the various anthropometric measures commonly used,
waist-to-hip ratio shows the strongest relation with the risk of myocardial infarction worldwide»
[@yusuf2005interheart]. Per 1 SD (BMI/height-
adjusted) WHR 1.37 vs BMI 1.10; BMI's MI signal collapsed after adjusting for WHR and vanished after
full risk-factor adjustment, while WHR held. BMI was weakest in all 8 ethnic groups and *non-significant*
in South Asians, Arabs and mixed-race Africans. Full extraction: [[Waist-to-Hip Ratio and Cardiovascular Risk]].

## View B — the measures are similar; the superiority claim is a design artifact (ERFC 2011)

«BMI, waist circumference, and waist-to-hip ratio each have a similar strength of association with
cardiovascular disease risk» [@erfc2011whr], and «Our findings reliably refute previous recommendations to adopt
baseline waist-to-hip ratio instead of BMI as the principal clinical measure of adiposity» [EXTRACTED
(Emerging Risk Factors Collaboration - BMI Abdominal Adiposity Cardiovascular 2011) chunk 01]. The named
mechanism for the discrepancy is design bias: «the greater susceptibility of retrospective studies of
acute myocardial infarction to some biases (eg, selection biases, reverse causality)» than prospective
studies [@erfc2011whr]. ERFC adds two facts INTERHEART could not: BMI is far more reproducible (regression dilution
ratio 0.95 vs WHR 0.63), and *no* adiposity measure adds prediction over BP + diabetes + lipids
(C-index changes -0.0001 / -0.0001 / +0.0008).

## Hidden insight — a marker's superiority can be manufactured by the measurement design

The abdominal-marker advantage is exactly what a concurrent case-control would produce even if the
measures were equal: acute illness before an MI strips skeletal muscle, *lowering hip circumference and
raising WHR in cases* (reverse causation), inflating the WHR gradient; the same illness can lower weight,
deflating BMI. Prospective baseline measurement removes this, and the ranking flattens. So the WHR-over-
BMI ordering is a **design artifact for prediction purposes** — a worked instance of the reverse-
causation hazard in [[The U-Shaped Association Artifact]], here manufacturing not a U but a spurious
*between-marker* ordering. Note this does not touch aetiology: abdominal adiposity remains a real,
modifiable CVD determinant acting through BP / lipids / diabetes; the artifact is in the *marker ranking*,
not in whether fat matters. — the reverse-causation-on-hip mechanism is the wiki's reading
of ERFC's stated "selection biases, reverse causality"; the muscle-loss-raises-WHR step is mechanistic
inference, not an ERFC claim.

## Resolution — scope-split, not a flat winner

- **Developed-country prospective CVD prediction, conventional risk factors known:** ERFC wins on
  design. BMI is an adequate, more-reproducible clinical adiposity measure; switching to WHR buys no
  discrimination. This is the higher-design test and it explicitly refutes the case-control claim.
- **Non-European populations:** unresolved. ERFC was 90% European descent and states more data are
  needed elsewhere, so INTERHEART's ethnic-heterogeneity signal (BMI carries no MI signal in South
  Asians / Arabs / mixed-race Africans) is **untested**, not refuted — the live residual question.
- **Where lipids are unmeasured (resource-poor settings):** a simple adiposity measure is a modest
  substitute (BMI+WHR \~ a quarter of the predictive gain of total+HDL cholesterol), and here the
  marker-vs-marker question INTERHEART asked is again relevant.
- **Coherence, not validity (R1):** ERFC and INTERHEART are both internally sound; neither is graded
  against a realized outcome here. The resolution is which design answers *which* stratum's question.

## References

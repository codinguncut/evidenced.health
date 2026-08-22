---
type: framework
question: Does treating sleep apnea reduce hard cardiovascular events and death, or only the symptoms and disease-severity markers?
aliases: [OSA, Obstructive Sleep Apnea, Sleep Apnea, CPAP, Positive Airway Pressure, PAP, Sleep Apnea Treatment, CPAP Cardiovascular, Sleep Apnea and Heart Disease]
authors: [Yu, Jie; Zhou, Zien; McEvoy, R Doug; Malhotra, Atul]
sources: [Yu - CPAP Cardiovascular Events Meta-Analysis 2017, Malhotra - SURMOUNT-OSA Tirzepatide 2024]
cluster: sleep
confidence: medium
created: 2026-08-21
updated: 2026-08-21
self_critiqued: 2026-08-21
relationships:
  related_to:
    - Surrogate Outcomes
    - Sleep and Metabolic Health
    - Sleep Duration and Mortality
    - Baseline Risk and the Relative-Absolute Split
    - Which Objective Moved This Recommendation
    - Does Weight Loss Reduce Cardiovascular Events
---

Sleep apnea is associated in observational studies with elevated cardiovascular (CV) risk, and
positive airway pressure (PAP — usually CPAP) is the established treatment for its *symptoms*. The
decision this page serves is narrower and easily conflated with symptom relief: **does treating the
apnea with PAP reduce hard CV events or death, or only the daytime symptoms and the disease-severity
marker?** The pooled RCT answer is a clean split — symptoms and quality of life improve; CV events
and mortality do not.

`[EXTRACTED — the effect estimates below are the source's pooled figures]`

## The pooled RCT result — no CV or mortality benefit

Yu pooled 10 RCTs (9 CPAP, 1 adaptive servo-ventilation) of adults with obstructive or central sleep
apnea, N = 7266 (mean age 60.9 y, 80.5% men, mean BMI 30.0), with 356 major adverse cardiovascular
events (MACE) and 613 deaths recorded; PAP was compared with no treatment or sham, random-effects
model.
[@yu2017cpap]

| Outcome | Pooled RR (95% CI) | Reading |
|---|---|---|
| **MACE** (CV death + nonfatal ACS + nonfatal stroke) | **0.77 (0.53-1.13)**, P=.19 | NS; CI spans meaningful benefit to modest harm |
| MACE + hospitalization for unstable angina | 0.92 (0.71-1.20) | NS |
| Acute coronary syndrome | 1.00 (0.65-1.55) | NS |
| Stroke | 0.90 (0.66-1.21) | NS |
| Heart failure | 1.03 (0.92-1.16) | NS |
| **Cardiovascular death** | **1.15 (0.88-1.50)** | NS; point estimate favours harm |
| **All-cause death** | **1.13 (0.99-1.29)**, P=.08 | NS; trends toward harm |

[@yu2017cpap]

The absolute risk differences were all near zero (MACE RD -0.01 [95% CI -0.03 to 0.01]; all-cause
death RD 0.00 [-0.01 to 0.01]) — a large relative CI on a small event count, not a precise null.
[@yu2017cpap]

The authors' bottom line:

> «The use of PAP, compared with no treatment or sham, was not associated with reduced risks of
> cardiovascular outcomes or death for patients with sleep apnea. Although there are other benefits
> of treatment with PAP for sleep apnea, these findings do not support treatment with PAP with a goal
> of prevention of these outcomes.»

[@yu2017cpap]

## What PAP *does* buy — symptoms and quality of life, not the CV surrogates

The benefit is real but sits on a different outcome axis. Pooled intermediate outcomes:

- **Daytime sleepiness** (Epworth) improved: -1.92 points (95% CI -2.79 to -1.06), though highly
  heterogeneous (I2 = 91%).
- **Disease-specific QoL** (SAQLI) improved 0.51 (0.31 to 0.70); depression (HADS) -0.70 (-1.09 to
  -0.31); anxiety (HADS) -0.40 (-0.67 to -0.13); SF-36 mental component +1.73 (0.01 to 3.46).
- **The cardiovascular intermediate markers did NOT move**: no PAP effect on systolic BP
  (-0.20 mm Hg [-2.29 to 1.89]), diastolic BP, BMI, any lipid, fasting glucose, HbA1c, or EQ-5D.

[@yu2017cpap]

This matters for the surrogate reasoning: prior reports that PAP «modest decreases in blood pressure»
underwrote the expectation of a CV benefit, and PAP entered guidance partly on that basis — the 2014
AHA/ASA stroke guidelines advise PAP «be con- sidered for patients with acute ischemic stroke or
transient ischemic attack.»
[@yu2017cpap]

But in these pooled RCTs the BP surrogate itself was null, so the mechanistic rationale did not
transmit. The authors make the ladder explicit: the joint expectation that PAP would help hard
outcomes rested on «the apparent beneficial effectsofPAPonintermediatebiomarkers», and

> «The absence of any significant association of PAP with intermediate markers of vascular risk in
> the trials included in this overview may explain the null associations of PAP with hard vascular
> outcomes.»

[@yu2017cpap]

## The adherence caveat — no-effect for average use, insufficient for high adherence

The single most important interpretive hazard: RCT CPAP adherence is low (trial means ranged 1.4 to
6.6 h/night; the largest trial, SAVE/McEvoy, averaged 3.3 h), so the ITT null is an
*average-adherence* null, not a *high-adherence* null. Three lines bear on whether adherence rescues
a benefit, and they cut against a strong claim in either direction:

- A **post hoc subgroup** of the 4 trials achieving >=4 h/night showed MACE RR 0.58 (95% CI 0.34 to
  0.99) — a CI that just excludes unity. But the authors immediately discount it:
  > «the absence of any comparable associa- tion for other outcomes, the post hoc nature of the
  > subgroup analyses, and the multiple comparisons made also make chance a plausible explanation.»
- The **meta-regression** (a within-trial, randomization-preserving approach) found **no** association
  of adherence, follow-up length, or baseline apnea-hypopnea index with the per-trial RR (all P >
  .13) — «although statistical power to detect modest effects was low.»
- Cross-trial subgroups of <4 vs >=4 h/night showed no heterogeneity.

[@yu2017cpap]



**Evidence-state placement.** For the *realistic* decision — prescribing PAP at achievable adherence
to prevent CV events — this is a **no-demonstrated-benefit** result, reinforced by the null on the CV
intermediate markers and the null meta-regression; a large CV benefit is unlikely. But it is **not a
tight no-effect**: the MACE CI (0.53-1.13) does not exclude a clinically meaningful benefit, and
whether *high, sustained* adherence would help remains genuinely **insufficient-evidence**, not
refuted. The authors concede a well-tolerated future device «may be worth evaluat- ing in another
large trial since it remains possible that strong adherence may produce benefits.» The honest reading
holds no-benefit-at-average-adherence and insufficient-at-high-adherence together, rather than
collapsing to a proven «PAP does not work.»
[@yu2017cpap]

## Decision-change and the open gap



- **Do not treat sleep apnea *for the purpose of* CV-event or mortality prevention.** PAP is
  warranted for symptom relief and quality of life — which are patient-important outcomes in their
  own right — but the CV-prevention expectation is not supported by the pooled RCTs. The authors'
  own advice: it is «reasonable to recom- mend PAP therapy for the
  improvement of symptoms in pa- tients with OSA but not for protection against vascular disease or
  death», and in the meantime to «emphasize the importance of proven therapies, such as blood
  pressure lowering, lipid lowering, and antiplatelet therapy» — i.e. treat the CV risk factors
  directly. [@yu2017cpap]
- **Two possibilities the trials could not resolve** (transportability limits): (i) participants were
  «mostly those without excessive sleepiness», so a benefit restricted to severely symptomatic
  patients is untested and arguably untestable (withholding PAP from them is not randomizable); (ii)
  the observational apnea->CV association «may represent disease processes that cannot be ameliorated
  by PAP delivered at the average intensity achieved in these clinical trials.»
  [@yu2017cpap]
- **The upstream-lever gap — now partly cashed.** If splinting the airway nightly does not reduce CV
  risk, the question becomes whether reducing apnea *severity at its source* — chiefly weight loss /
  adiposity, the dominant driver of obstructive sleep apnea — moves the apnea burden or the
  downstream markers differently. That is a distinct exposure Yu cannot speak to; the SURMOUNT-OSA
  tirzepatide RCTs now do -> the *upstream vs downstream* section below.

## The upstream lever — tirzepatide reduces OSA severity and moves the CV surrogates CPAP left null

The SURMOUNT-OSA phase-3 RCTs (Malhotra 2024; two 52-week double-blind trials, N=469, in
moderate-to-severe OSA WITH obesity, baseline mean AHI \~50; manufacturer-funded) test the opposite
kind of lever from CPAP: not a device that splints the airway each night, but weekly tirzepatide (a
dual GIP/GLP-1 agonist) driving \~16-17% weight loss — attacking the adiposity that *causes* the
apnea. Trial 1 enrolled non-PAP users; trial 2 enrolled established PAP users (assessed after a 7-day
PAP washout, so the AHI reflects true off-device breathing).

**On the disease-severity surrogate it is a large effect.** The AHI treatment difference vs placebo
was -20.0 events/hr (95% CI -25.8 to -14.2) in trial 1 and -23.8 (-29.6 to -17.9) in trial 2 (both
P<0.001) — a \~48-56% reduction, with up to 50.2% of tirzepatide participants reaching «fewer than 5
AHI events per hour or 5 to 14 AHI events per hour and an ESS of 10 or less, which is relevant
because these thresholds for disease severity represent a level at which PAP therapy may not be
recommended». Patient-reported sleep symptoms also improved (PROMIS Sleep-related Impairment -3.9
[-5.7 to -2.2]; Sleep Disturbance -3.1 [-4.5 to -1.5], pooled).
[@malhotra2024surmount]

**The design contrast (why this is not the same exposure as CPAP).** CPAP normalizes AHI only *while
worn* and only at the achieved adherence (Yu's trials averaged 1.4-6.6 h/night) — it treats the
symptom mechanically and reverses the moment the device comes off. Tirzepatide reduces the AHI
measured *off-device* by shrinking the causal driver (adiposity), so the severity reduction is not
adherence-gated to a nightly device. The two therefore differ on exactly the support factor Yu
identified as decisive (delivered dose / adherence).
[inferred from @yu2017cpap; @malhotra2024surmount]

**The load-bearing cross-source claim — the CV *surrogate* CPAP left null, the upstream lever moves.**
The one intermediate CV marker Yu's pooled CPAP RCTs measured was systolic blood pressure, and it was
null. Tirzepatide moved it. Same quantity, opposite result:

| Parameter | CPAP (Yu 2017, pooled RCTs) | Tirzepatide (Malhotra 2024) | Same quantity? |
|---|---|---|---|
| Intervention | airway-splinting device (downstream) | weight-loss drug (upstream) | No — different exposure |
| Population | OSA, mean BMI 30, «mostly without excessive sleepiness» | OSA + obesity, mean BMI \~39 | No — Malhotra heavier, all obese |
| **Systolic BP, treatment diff vs control** | **-0.20 mm Hg (95% CI -2.29 to 1.89)** — null | **-7.6 (-10.5 to -4.8)** T1 / **-3.7 (-6.8 to -0.7)** T2 | **YES — same quantity, opposite verdict** |
| hsCRP (inflammation) | not moved in pooled markers | -0.7 (-1.2 to -0.2) T1 / -1.0 (-1.6 to -0.5) T2 | partial — Yu reports no CRP effect |
| Hypoxic burden | not reported | -70.1 T1 / -61.3 T2 %min/hr | No — Yu did not measure it |
| **Hard CV events / mortality** | measured, **null** (MACE RR 0.77, 0.53-1.13; all-cause 1.13) | **not assessed** — 52 wk, no powered endpoint, no deaths | **NO — Malhotra cannot speak to it** |

[@malhotra2024surmount]

**The emergent reading — and the discipline that stops it becoming a claim (type-A + G-gap).** Yu's
own mechanistic ladder was that «the absence of any significant association of PAP with intermediate
markers of vascular risk ... may explain the null associations of PAP with hard vascular outcomes».
Malhotra restores those intermediate markers — BP, hsCRP, hypoxic burden all move — which raises the
*hypothesis* that the upstream route could transmit to hard outcomes where the downstream route did
not. **But that hypothesis is explicitly untested, and the same surrogate-skepticism that discounted
CPAP's hoped-for benefit binds tirzepatide's markers too.** AHI, BP, hsCRP and hypoxic burden are all
surrogates; moving them is not moving events. The authors say so themselves — «the design and shorter
duration of the current trials does not support the assessment of long-term cardiovascular
outcomes» — and point to the ongoing SURMOUNT-Morbidity and Mortality in Obesity trial (NCT05556512)
as the test. Malhotra tellingly cites the CPAP null as its own rationale: «PAP has not been shown to
affect cardiovascular complications and death in obstructive sleep apnea; therefore, there is a need
for additional treatment options». So the honest composite: **the upstream lever wins on OSA severity
and on the CV surrogates, but the hard-CV/mortality question is unproven for BOTH interventions** —
open for CPAP (insufficient at high adherence) and not-yet-tested for tirzepatide (SURMOUNT-MMO
pending). A surrogate advantage over CPAP is not a demonstrated outcome advantage.
[@malhotra2024surmount]

**Decision-change.** For a patient with moderate-to-severe OSA and obesity who cannot or will not
adhere to PAP, tirzepatide is now an evidenced option that reduces apnea severity at its source and
improves symptoms and CV risk *markers* — a genuine addition to the menu, and for many the AHI falls
below the level at which PAP is even indicated. What it does NOT yet license is *this will prevent
your heart attack or death*: that transmission is unproven, exactly as it is for CPAP. Weigh it on
the outcomes demonstrated (severity, symptoms, weight, BP) plus its harm arm (GI adverse events;
two adjudicated pancreatitis cases), not on an inferred hard-outcome benefit.


## Synthesis — a worked surrogate-vs-outcome split



This is a clean instance of the [[Surrogate Outcomes]] hazard on a *treatment* rather than a
biomarker: PAP corrects the symptom (sleepiness) and the disease it is prescribed for, yet the
outcome people ultimately care about — CV events and survival — does not follow, and even the
intermediate CV surrogate (blood pressure) was null in the pooled RCTs. Symptom benefit and outcome
benefit are separate claims; here the first held and the second did not. It also exercises the
guidance-null: a body (AHA/ASA) advises considering PAP for ischemic stroke/TIA — a cardiovascular
indication the subsequent pooled RCT evidence does not support
-> [[Which Objective Moved This Recommendation]].

## References

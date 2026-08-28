---
type: tension
question: Should sodium reduction be recommended population-wide (everyone lowers toward <2 g/day), or targeted only to hypertensives with high intake?
aliases: [Population-Wide vs Targeted Sodium Reduction, PURE Sodium Controversy, Sodium J-Curve Policy Tension, Is Universal Salt Reduction Justified]
authors: [Mente, Andrew; O'Donnell, Martin; Yusuf, Salim; World Health Organization (org); He, Feng J; MacGregor, Graham A; Huang, Liping; Blood Pressure Lowering Treatment Trialists Collaboration (org); Rahimi, Kazem]
sources: [Mente - Urinary Sodium Cardiovascular Events Hypertension PURE 2016, WHO - Sodium Intake 2012, He - Salt Reduction Blood Pressure 2013, Huang - Sodium Dose Duration Blood Pressure 2020, BPLTTC - Blood Pressure Lowering Primary and Secondary Prevention 2021]
cluster: sodium-bp
confidence: medium
relationships:
  related_to:
    - Sodium Intake and Blood Pressure
    - The U-Shaped Association Artifact
    - Blood Pressure Lowering and Cardiovascular Events
    - Measurement Error in Dietary Assessment
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
created: 2026-08-27
updated: 2026-08-27
self_critiqued: 2026-08-27
---

Two policy readings of the sodium -> cardiovascular evidence that give **opposite decisions for \~90%
of the population**. The held pole (WHO 2012, the He/MacGregor/Cochrane lineage) recommends a
**population-wide** reduction toward <2 g/day sodium. The PURE pole (Mente 2016) recommends reduction
**only** for hypertensives who also eat a lot of salt, on the strength of a directly-observed J-curve
on hard outcomes. The held evidence sits on [[Sodium Intake and Blood Pressure]]; this page is the
joined issue. It does **not** resolve — the deciding check exists on neither side — and the value is in
seeing that the two literatures partly **measure different things over different ranges**, so the raw
clash overstates the real disagreement while the policy conclusions genuinely conflict.

## Both positions in their own terms

- **Population-wide (WHO 2012 + He/MacGregor + Cochrane lineage).** Sodium -> BP is a **high-certainty,
  roughly linear** dose-response with no plateau in the studied range; WHO transfers that surrogate
  evidence one certainty level down to hard outcomes (Annex 8) and issues a **strong** recommendation to
  reduce to <2 g/day for everyone. The observed low-sodium-harm signal is read as **artifact** — He 2013
  attributes it to measurement error, confounding, and reverse causality, and Huang 2020 to «biased
  estimation of sodium intake» -> [[Sodium Intake and Blood Pressure]].
- **Targeted (PURE / Mente 2016).** In a pooled analysis of 133,118 people from 49 countries (three
  cohorts; \~10,000 events; median 4.2 y), the sodium -> hard-outcome curve is **J-shaped**: risk lowest
  at 4-5 g/day and **higher at both <3 g/day and >7 g/day**, with the *high*-intake harm **confined to
  hypertensives**. Mente concludes sodium reduction should be aimed only at hypertensives with high
  intake — only \~10% of the studied population had **both** hypertension and >6 g/day intake — and
  argues against a population-wide approach except in very-high-intake regions.
  [@mente2016pure]

## Parameter table — is this the same quantity? (op-weave 2a)

Built before any prose comparing the poles. The columns are matched claims about the sodium -> outcome
relationship; the last column is the joined-issue test.

| Parameter | Population-wide pole | PURE / Mente pole | Same quantity? |
|---|---|---|---|
| **Primary outcome** | BP (surrogate, HIGH certainty), transferred to CVD one level down | death + MI + stroke + HF (hard, DIRECTLY observed) | **NO — surrogate-transfer vs direct hard outcome** |
| **Exposure measured** | *achieved reduction* in RCTs (24h urine / randomised contrast) | *estimated habitual level* from a single fasting **spot** urine + Kawasaki formula | **NO — a randomised reduction is not an estimated habitual intake** |
| **Intake range covered** | RCTs mostly reduce \~9-10 -> \~5-6 g/day salt; low arm barely reached | the harm signal lives at **<3 g/day sodium**, largely OUTSIDE the RCT range | **NO — the disputed low arm is where the RCTs have little data** |
| **Shape claimed** | linear/monotone over studied range, no plateau shown | **J** (nadir 4-5 g/day), both arms elevated | the shapes describe different ranges — not directly comparable |
| **Design / confounding** | RCT for BP (randomised); cohort for hard outcomes (VERY LOW) | cohort throughout — confounding + reverse causation live | both lean on observational data for the hard-outcome claim |
| **Policy conclusion** | reduce **everyone** to <2 g/day (strong) | reduce **only** hypertensives with high intake | **the genuine, joined conflict** |

## Is the issue joined? — the not-joined checks

- **(i) Same observable, different words?** No. The poles predict **opposite signs** for the sodium ->
  CVD association at <3 g/day (population-wide: lower is better, transferred from BP; PURE: lower is
  *worse*, directly observed). A real contradiction, not a verbal one.
- **(ii) Different scope / horizon / unit?** Partly, and this is the payoff. The poles are **not
  measuring the same exposure** (a randomised reduction vs a spot-urine-estimated habitual intake), the
  population-wide pole's hard-outcome claim is **transferred from a surrogate** while PURE's is direct,
  and the disputed low arm sits **outside the RCT-studied range**. So the two literatures partly talk
  past each other — but they are matched on the one thing a policy needs: *should the whole population
  reduce sodium?*, where they give opposite answers. **Joined on the decision.**
- **(iii) Cherry-picking part of a multi-position author?** Checked against WHO's full position. WHO
  does **not** assert monotone benefit on hard outcomes with confidence — it rates that evidence VERY
  LOW, *names* the J-shaped hypothesis as the reason for its review, then never adjudicates it, and
  excludes a priori the strata where a lower-arm harm is most plausible -> [[Sodium Intake and Blood Pressure]]. So the population-wide pole's hard-outcome leg rests on **surrogate-transfer plus the
  He/Huang advocacy dismissal of the J**, not on a confident direct finding. Represented at that width,
  the issue is still joined on policy.

**Verdict: JOINED on the decision, but asymmetric in evidence type and non-identical in exposure.** The
disagreement is real and consequential, and it is *smaller than it looks* on the shape question (the
poles describe different ranges) while *exactly as large as it looks* on the policy question.

## The hidden insight — one dispute is actually three stacked ones

The sodium-policy clash is not a single disagreement about a number; it is three, and none is settled:

1. **Exposure measurement.** A randomised sodium *reduction* (population-wide pole) is not the same
   exposure as a habitual intake *estimated from one spot urine* (PURE). Spot-urine + Kawasaki recovers
   an absolute intake but from a **single day**, and it is error-prone precisely at the **extremes** —
   the He/Huang critique's «biased estimation of sodium intake» — which is where PURE's J-arms live.
   Measurement error that is unequal across the range can **bend a flat relationship into a U** with no
   bias and no confounder -> [[Measurement Error in Dietary Assessment]], [[The U-Shaped Association Artifact]].
2. **Evidence type.** Surrogate-BP-RCT-transferred-to-outcomes (population-wide pole) vs
   direct-hard-outcome-observational (PURE). The first is randomised but on a surrogate; the second is on
   the real endpoint but confounding-prone. Neither is a randomised hard-outcome trial of sodium level
   -> [[Surrogate Outcomes]].
3. **Intake range.** The RCTs barely reach <3 g/day, so they cannot *see* the low arm PURE reports; PURE
   observes it but cannot randomise it. The literatures are strongest in **non-overlapping** ranges.

**The decisive check exists on neither side.** A confounder-immune adjudication of the low arm on hard
outcomes — a referent-correction or a genetic/Mendelian-randomization instrument, or a large long-term
RCT of sodium *level* (not just reduction) — is what would settle it, and the corpus holds none. Mente
himself concedes that observational analysis cannot definitively prove causality and calls for such RCTs.

## A cross-source note on the targeting rationale — not an adjudication

Part of Mente's case for *targeting* rests on a premise about blood-pressure lowering: citing pre-2016
meta-analyses and HOPE-3, he argues BP-lowering benefit is observed only «in those with a systolic BP
of >140 mm Hg». The wiki holds a **later, larger** source that reaches the opposite conclusion on that
specific premise: BPLTTC 2021 (IPD-MA, 344,716 participants) finds a 5 mmHg SBP reduction cuts major CV
events by \~10% **«irrespective of previous diagnoses of cardiovascular disease, and even at normal or
high-normal blood pressure values»**, with «in no subgroup was the HR above 1·0»
-> [[Blood Pressure Lowering and Cardiovascular Events]]. This **weakens the targeting rationale's
BP-lowering premise** (evidence-base / lag, telos divergence class 2/4) — but it does **not** settle the
tension, because PURE's low-arm signal is a **direct** sodium -> CVD observation adjusted for BP and
still present, which is a separate claim from *does lowering BP help below 140*. The shape dispute
(points 1-3 above) stands; only one supporting argument for Pole B is undercut.
[inferred from @mente2016pure; @bplttc2021]

## Where this leaves the decision

For a **hypertensive with high intake**, both poles agree: reduce sodium (large BP effect in this
stratum; the high-intake harm signal is concentrated here). For a **normotensive at moderate intake
(3-6 g/day)**, the poles diverge and the evidence is genuinely unsettled — the population-wide pole
offers a surrogate-transferred benefit, PURE offers a direct-but-unadjudicated low-arm harm signal, and
neither has the confounder-immune check. The honest fabric state is **insufficient evidence on the low
arm**, not a resolved recommendation -> [[Sodium Intake and Blood Pressure]].

## References

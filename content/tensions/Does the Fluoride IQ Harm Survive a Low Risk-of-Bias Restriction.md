---
type: tension
question: Does the fluoride -> child-IQ association survive restriction to the low-risk-of-bias studies, or does it vanish there?
aliases: [Fluoride IQ Low Risk-of-Bias Reading, Fluoride IQ RoB Instrument Clash, Does Fluoride IQ Harm Hold in High-Quality Studies]
authors: [National Toxicology Program (org); Taylor, Kyla W; Veneri, Federica; Vinceti, Marco; Filippini, Tommaso]
sources: [NTP - Fluoride Neurodevelopment Monograph 2024, Taylor - Fluoride Children IQ 2025, Veneri - Fluoride Cognitive Neurodevelopment 2023]
cluster: fluoride
confidence: low
relationships:
  related_to:
    - Fluoride and Child IQ
    - Fluoride and Health
    - The U-Shaped Association Artifact
    - Certainty of Evidence vs Strength of Recommendation
created: 2026-09-01
updated: 2026-09-01
self_critiqued: 2026-09-01
---

Orbiter-tension of [[Fluoride and Child IQ]]. Two gold meta-analyses pool a **near-fully-shared primary-study
base** (the fluoride-IQ census is near-closed) and reach **opposite conclusions on the one restriction that
decides the decision** — whether the IQ association holds when you keep only the highest-quality studies.
This is the joined issue the nucleus page folds as a hidden insight; filed here because the disagreement is
what the guidance-null runs on, not a detail.

[inferred from @ntp2024fluoride; @taylor2025fluoride; @veneri2023fluoride]

## The two readings of the low-RoB stratum

**View A — the harm tightens under restriction (NTP / Taylor, OHAT instrument).** Restricting to low-RoB
studies leaves the inverse association intact:

> «The inverse association between estimated fluoride exposure and IQ in children was consistent across
> different study populations, study locations, study quality/risk-of-bias determinations, study designs,
> exposure assessment measures, and types of exposure data (group-level and individual-level). There were
> 19 low risk-of-bias studies that were conducted in 15 study populations, across 5 countries, and
> evaluating more than 7,000 children.»
> [@ntp2024fluoride]

Taylor's low-RoB stratum does the same mechanically — the pooled urinary estimate stays significant with
low heterogeneity when restricted to low-RoB: «Among low risk-of-bias studies, there was an IQ score
decrease of 1.14 points (95% CI, -1.68 to -0.61; P < .001)» [@taylor2025fluoride]
(I-squared 23%, per 1 mg/L urinary fluoride) — vs 1.63 in the full 13-study individual-level analysis.

**View B — the harm vanishes under restriction (Veneri, ROBINS-E instrument).** The same restriction runs a
**monotone RoB gradient the opposite way**:

> «When performing a subgroup analysis by RoB levels, a MD of 1.11 (95% CI -0.67; 2.89) emerged for the only
> low RoB study, -4.27 (95% CI -6.44; -2.11) for moderate RoB studies, and -6.31 (95% CI -9.56; -3.06) for
> high RoB studies (Fig. 2).»
> [@veneri2023fluoride]

Veneri's own summary reads it as attenuation, not reassurance:

> «a key finding of this meta-analysis was provided in the subgroup analysis by risk of bias, which showed
> noticeable differences of the estimates across categories of overall study quality, with a general trend
> towards weaker or null associations in the most carefully conducted studies.»
> [@veneri2023fluoride]

## The same-quantity check — is the issue joined?

The parameter table on [[Fluoride and Child IQ]] confirms both MAs answer the identical question (does the
association survive a quality restriction?) with opposite signs. The two decisive rows:

| Parameter | Veneri 2023 (ROBINS-E) | NTP / Taylor (OHAT) | Same quantity? |
|---|---|---|---|
| Low-RoB restricted pool | assoc VANISHES: MD +1.11 (-0.67, 2.89), NS (n=1, Feng 2022) | assoc HOLDS: IQ decrease 1.14 pts/mg/L (-1.68, -0.61), sig, I-squared 23% | SAME question, INSTRUMENT-relative pool; **opposite answers** |
| Bashash 2017 (ELEMENT) RoB verdict | overall HIGH (confounding = High) | low — an NTP/Taylor low-RoB flagship | SAME study, OPPOSITE RoB verdict |

The clash is joined: same question, same near-shared data, opposed conclusions. It is **not** the different-
scope kind of non-tension — both restrict the *same* census to "high-quality" and report what remains.

## Hidden insight — the driver is the instrument, not the data

The friction does not trace to different data (the studies are shared); it traces to the **RoB instrument
deciding which studies count as high-quality.** ROBINS-E (Veneri) downgrades hard on unadjusted confounding,
so it rates only **one** study low-RoB (Feng 2022 — «no adverse effect emerged in the only study judged at
low risk of bias» [@veneri2023fluoride]) and rates the
ELEMENT/Bashash and MIREC near-fluoridation cohorts High and Moderate — exactly the studies NTP/Taylor's
OHAT stream rates low (19 low-RoB) and leans on. The **Bashash rating
flip is the smoking gun**: one MA's low-RoB anchor is the other's high-RoB study.

So the reassurance that «it holds in the high-quality studies» — the claim propping up confidence in the
>1.5 mg/L harm arm and any extrapolation of it toward US fluoridation levels — is **instrument-dependent,
not a property of the evidence.** Under a stricter confounding bar the high-quality pool goes null.

## Why this is a qualified-E clash, not independent corroboration

The honest complication, surfaced rather than hidden: because the two MAs pool a near-identical study base,
they are **not two independent evidence lines** — a RAG over either reproduces most of the other's inputs.
The disagreement is an **appraisal-instrument clash on one body of data**, which is precisely why it belongs
at tension altitude: it exposes that the decision-relevant quantity is under-determined by the evidence and
settled only by a methodological choice no source adjudicates.

The clash is contested from **both** sides, so it lowers confidence without resolving:

- Veneri's low-RoB verdict rests on a **single study** (Feng 2022), and «a major role of residual
  confounding could not be ruled out» [@veneri2023fluoride].
- Which RoB treatment is better calibrated for this literature — ROBINS-E's aggressive confounding
  downgrade vs OHAT's — is itself **unadjudicated** here (a G-gap: it would need reading each tool's
  confounding criterion against these studies end to end).

## Decision relevance

- **This is the load-bearing uncertainty for US community water fluoridation (0.7 mg/L).** The established
  harm sits at >1.5 mg/L; the fluoridation decision hinges on whether that signal reaches down toward 0.7.
  The low-RoB-robustness claim is exactly what would license that extrapolation — and it is the claim that
  flips with the instrument.
- **Confidence on the sub-1.5 mg/L decision stays `low`** by construction: a finding that reverses under a
  defensible change of quality tool is not one to build a threshold on -> [[The U-Shaped Association Artifact]]
  (a subgroup signal that appears under one appraisal and vanishes under another is a candidate artifact),
  [[Certainty of Evidence vs Strength of Recommendation]].
- **The maintainer decision this changes:** do not report *the harm holds even in the best studies* as a
  settled fact in either direction — report that the best-studies reading is instrument-dependent, and name
  the RoB-tool choice as the unadjudicated hinge.

## References

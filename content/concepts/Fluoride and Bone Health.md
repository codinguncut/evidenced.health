---
type: concept
question: Does chronic fluoride exposure (chiefly drinking-water) change bone fracture risk and bone mineral density, at what exposure, in which direction, and for whom?
aliases: [Fluoride and Bone, Fluoride and Fracture, Fluoride and Bone Density, Skeletal Fluorosis, Fluoride and BMD, Fluoride Bone Fracture]
authors: [Mazzoli, Riccardo; Filippini, Tommaso; Iamandii, Inga; Veneri, Federica; Rothman, Kenneth J; Vinceti, Marco]
sources: [Mazzoli - Fluoride Bone Fracture 2025]
cluster: fluoride
nucleus: false
confidence: low
created: 2026-08-14
updated: 2026-08-14
self_critiqued: 2026-08-14
relationships:
  related_to:
    - Fluoride and Health
    - The U-Shaped Association Artifact
    - The Underivable Optimum
    - Measurement Error in Dietary Assessment
    - Menopause and the Shifting Levers
    - Dairy and Bone Health
    - Surrogate Outcomes
    - Vitamin D and Calcium Supplementation for Fracture Prevention
---

Orbiter of the `fluoride` cluster (nucleus: [[Fluoride and Health]]). This page holds the **skeletal
arm** of the fluoride benefit/harm menu — the arm the nucleus named as a gap and cashed here from one
gold dose-response meta-analysis. The decision object is **chronic drinking-water fluoride ->
fracture risk**, with bone mineral density (BMD) kept deliberately separate because the two
**dissociate**.

## The landed finding: fracture risk rises above \~1.5 mg/L water fluoride

The first dose-response meta-analysis of this arm (37 studies 1945-2024; one-stage restricted cubic
spline) finds a **non-linear positive** overall relation — fracture risk flat at low exposure, rising
above a \~1.5 mg/L threshold [@mazzoli2025fluoride]:

- «At low levels of fluoride, specifically up to around 1.4 mg/L, there was no change in fracture risk
  (RR 1.00 at 1.2 mg/L; 95% CI 0.80–1.24). Above 1.4 mg/L ... RR of 1.06 (95% CI 0.80–1.41) at 2.0
  mg/L ... 1.19 (95% CI 0.87–1.64) at 3.0 mg/L ... 1.35 (95% CI 0.94–1.95) at 4.0 mg/L»
  [@mazzoli2025fluoride].
- **Studied range:** \~0-4 mg/L drinking water (the pooled water-metric studies). Above 4 mg/L there is
  no pooled estimate — the curve's apparent top is the sampling edge, not a located feature.
- **The threshold is not a curve knee first — it is where the data change:** «Our data indicated
  little relation between fluoride exposure and overall fracture risk below 1.5 mg/L ... with fracture
  risk starting to increase gradually above that threshold. The threshold level corresponds to around
  3-3.5 mg/day» [@mazzoli2025fluoride]. It coincides with the
  WHO 1.5 mg/L water guideline and the NTP «higher»-exposure referent for the IQ arm — the same
  exposure line recurs across two fluoride arms (see [[Fluoride and Health]]).

**Every overall-fracture point estimate has a CI crossing 1.0.** This is a *positive trend*, not a
per-dose demonstrated harm; the certainty is `low` (below).

## The one CI that excludes 1.0: postmenopausal (females >50) at \~1.0 mg/L

The decision-relevant sharpening is a **stratum**, not the pooled curve. In the pre-specified
females-over-50 analysis the association starts earlier and reaches significance at a
fluoridation-adjacent dose [@mazzoli2025fluoride]:

- «the RR was 0.98 (95% CI 0.83–1.14) at 0.25 mg/L, 1.00 (95% 0.80–1.24) at 0.45 mg/L, and 1.26 (95%
  CI 1.10–1.46) at 1.0 mg/L» [@mazzoli2025fluoride] — the
  **only reported pooled DR estimate whose CI excludes 1.0** (every overall-fracture, both-sex
  fragility, male, and both-sex-female fragility point the paper tabulates has a CI crossing 1.0). The
  curve above 1.0 mg/L continues its «steep upward trend» but is not tabulated past that point.
- **Mechanism candidate (directional,-grade in the source's own discussion):** estrogen
  is bone-protective; menopause accelerates resorption and may increase «release of fluoride from bone
  stores», so the postmenopausal skeleton is a plausibly more susceptible support-factor profile
  [@mazzoli2025fluoride]. This is a **route-(a)/(c)
  stratification hypothesis** (higher baseline bone-loss risk; possibly a stratum-specific harm), not
  a demonstrated effect-modification interaction — it rests on a single lab's pooled observational
  data. Links to the sex-hormone bone lever on [[Menopause and the Shifting Levers]].

## BMD and fracture DISSOCIATE — a BMD rise is not a bone benefit here

The classic surrogate trap fires cleanly. Fluoride can *raise* bone mineral density at some sites
while fracture risk *also* rises — so reading the BMD signal as benefit inverts the decision. The
source states the mechanism of the dissociation itself:

- «BMD only captures bone quantity (density), not bone quality (e.g., architecture, morphology,
  micro­damage, material properties). The latter aspects of bone health are crucial determinants of
  fracture risk» [@mazzoli2025fluoride].
- The BMD dose-response is **not even uniformly upward** — it is site- and sex-divergent: «While hip
  BMD increase in both sexes, though linearly in males and non-linearly (starting above 1.2 mg/L) in
  females, for spine BMD there was an indication of an inverted U-shaped association both in males and
  in females, the highest value being around 0.6 mg/L»
  [@mazzoli2025fluoride]. Hip-BMD mean differences in the
  better-RoB female stratum have CIs crossing 0 (+0.04 g/cm², 95% CI −0.03 to 0.12).
- **Decision consequence:** BMD is a **bad surrogate** for the fracture outcome for this exposure —
  a rise does not transmit to lower fracture risk, and here co-occurs with higher fracture risk. Steer
  on the fracture endpoint, not the density marker -> [[Surrogate Outcomes]].


## The U/J shape: the UPPER arm is believed, the protective LOWER arm is NOT



The sex-specific and site-specific fragility curves are U/J-shaped (an apparent protective dip at
low-moderate fluoride, then a rise): «a clear evidence of a U-shaped curve only in females, with the
lowest risk around 0.4 mg/L and a monotonic increase above 0.9 mg/L ... RR was 0.84 (95% CI
0.67–1.07) at 0.34 mg/L, 1.00 (95% 0.79–1.27) at 0.9 mg/L, and rose to 1.13 (95% CI 0.93–1.37) at 1.1
mg/L» [@mazzoli2025fluoride]. Applying the artifact
discipline (a protective/plateau arm must survive a strong check before belief):

- **Upper arm (BELIEVED, decision-relevant):** fracture risk rising above \~1.5 mg/L overall, and from
  \~0.5-1.0 mg/L in postmenopausal females (RR 1.26 at 1.0 mg/L, CI excludes 1.0). This is the arm the
  recommendation rests on — and it survives because it is where the data are densest and the one
  significant stratum sits.
- **Lower / protective arm (NOT believed):** the apparent RR<1 at low fluoride (the female «lowest
  risk around 0.4 mg/L»; the male «generally indicative of a decreased risk with increasing
  fluoride»). No strong check (referent-correction, Mendelian randomization, intervention) supports a
  true protective effect, and **the source itself flags it as a likely artifact**: «some types of
  fractures showed a U-shaped pattern ... Such a pattern might be an artifact due to the more limited
  number of studies on which such [estimates rest]»
  [@mazzoli2025fluoride]. The lowest-risk CIs all cross 1.0.
- **Mechanism candidates for the artifactual dip:** *unequal between-group precision* (far fewer
  studies at low fluoride -> a spuriously displaced nadir — the gate-6 mechanism), sparse-data
  instability, and the general fragility of a spline nadir read off wide CIs. **Never quote «lowest
  risk around 0.4 mg/L» as an optimum** — it is a sampling artifact of a wide, sparse curve, not a
  derivable target -> [[The Underivable Optimum]].

## Certainty and limits — why this is `low`, single-lab, and internally weak

- **Internal weakness:** every overall-fracture CI crosses 1.0; only the females>50 point at 1.0 mg/L
  is significant. Risk-of-bias (ROBINS-E) is mostly poor — for fractures, 18 of 27 estimates high-RoB,
  only 2 low; 16 of 37 studies are **ecological** designs; the dominant bias drivers are «unaccounted
  sources of confounding (n = 11) and bias in exposure measurement (n = 8)»
  [@mazzoli2025fluoride].
- **The signal weakens on RoB-restriction:** excluding high-RoB studies drops the fragility-fracture
  RR to «0.93 (95% CI 0.72–1.21) at fluoride exposure in the 0.8–1.5 mg/L range» and «0.95 (95% CI
  0.70–1.29) at 1.8 mg/L» [@mazzoli2025fluoride] — the main
  all-fracture analysis could not even be RoB-restricted (too few low-RoB studies). A signal that
  attenuates when the worst studies are removed is the direction that argues *against* a robust effect.
- **Measurement error:** water-fluoride as an exposure proxy omits total intake (tea, dental products,
  diet) — the same attenuation-toward-null constraint that governs the IQ arm and every dietary curve
  -> [[Measurement Error in Dietary Assessment]]. A flattened low-dose arm is expected here regardless
  of a true effect.
- **Halo-across-a-lab (single backing):** Mazzoli is the **same Modena / CREAGEN / Vinceti group** as
  the fluoride-IQ source (Veneri 2023). Different outcome, so this is not laundered independence — but
  one lab's productivity is **not independent evidential breadth**. Independent replication of the
  skeletal arm by a different group is a **named gap**; confidence stays `low` until it lands.
- **Aggregation flavor:** the pooled per-dose RR is a magnitude the wiki did not compute — it is
  `[EXTRACTED]` from a single MA, not an emergent aggregation across held sources (`G (needs
  aggregation)` for any cross-source pooling).

## Why this is a decision-change, not a restatement

- For someone on **naturally high-fluoride water (>1.5 mg/L)** — the \~0.59% of US residents on
  community water at/above that, and many private-well and endemic-fluorosis populations — the
  skeletal-harm arm is now **live alongside** the IQ-harm arm at the same exposure line: two
  patient-important outcomes (fracture, child IQ) both turn upward above \~1.5 mg/L, strengthening the
  case for mitigation (defluoridation / alternative source) at that stratum.
- For a **postmenopausal woman**, the susceptibility appears to begin *earlier* (\~0.5-1.0 mg/L) — a
  stratum-specific reason to weigh water-fluoride source, though on `low`-certainty single-lab data.
- **Do not read a BMD rise as bone benefit** — the density marker and the fracture outcome dissociate
  here; the decision follows the fracture endpoint.
- At **US community-fluoridation exposure (0.7 mg/L)**, the overall curve shows no fracture signal
  (RR \~1.00, CI crossing 1.0) — insufficient-evidence / no-signal, not a demonstrated harm. The
  exposure number, not the word «fluoride», carries the decision.

## References

---
type: tension
question: Does higher physical activity causally lower dementia risk once reverse causation is minimised by long follow-up, or is the protective association a prodromal artifact?
aliases: [Physical Activity Dementia Reverse Causation, Iso-Markku vs Kivimaki Physical Activity Dementia, Does Exercise Prevent Dementia Beyond Ten Years]
authors: [Iso-Markku, Paula; Kujala, Urho M; Kivimaki, Mika; Singh-Manoux, Archana; Pentti, Jaana]
sources: [Iso-Markku - Physical Activity Dementia 2022, Kivimaki - Physical Inactivity Dementia IPD 2019]
cluster: dementia
confidence: low
created: 2026-09-10
updated: 2026-09-10
self_critiqued: 2026-09-10
relationships:
  related_to:
    - Dementia Prevention and Modifiable Risk Factors
    - Physical Activity Dose and Mortality
    - The U-Shaped Association Artifact
    - Multidomain Lifestyle Intervention and Cognitive Decline
    - Measurement Error in Dietary Assessment
---
<div class="recent-page" data-last-updated="2026-09-10"></div>


Two gold sources on the same exposure-outcome pair, both built to defeat reverse causation, reach
opposite verdicts. Iso-Markku's aggregate SR+MA finds the protective association *survives* long
follow-up (>=20 y, RR 0.79); Kivimaki's individual-participant meta-analysis finds it *vanishes* beyond
10 years (HR 1.01). Both answer the same decision question — *does being active prevent dementia, or
does incipient dementia merely make people less active?* — so the issue is **joined** (type-D). The
hidden insight is that the clash is not about the reverse-causation *window* (both agree the short-
follow-up signal is prodromal); it turns on **outcome ascertainment and pooling level**, and on the
cleanest cut each offers, the two nearly converge toward the null.
[inferred from @isomarkku2022; @kivimaki2019inactivity]

## View A — the association survives long follow-up (Iso-Markku 2022)

[@isomarkku2022] Higher PA is associated
with lower all-cause dementia (RR 0.80, 0.77-0.84, n=257,983), AD (0.86) and vascular dementia (0.79),
and the effect holds within the 16 studies with >=20 y follow-up (RR 0.79, 0.71-0.87; mean baseline age
50.5, mean follow-up 27.6 y). Iso-Markku's verdict: «we did not find evidence to suggest that reverse
causation or regression dilution bias affected the observed associations between PA and dementias.» The
design's honest edge: its own cleanest cut — 3 high-quality studies with young (30-55) baseline AND >20 y
follow-up — gives **RR 0.79 (0.62-1.01), non-significant**, and funnel plots «suggested some publication
bias» for all-cause dementia and AD. So View A is a robust-but-observational association whose very
cleanest subset is under-powered.

## View B — the association vanishes beyond ten years (Kivimaki 2019)

[@kivimaki2019inactivity] The IPD splits follow-up
within cohorts: inactivity->all-cause dementia HR **1.40 (1.24-1.59)** at <10 y but **1.01 (0.89-1.14)**
at >=10 y (AD: 1.36 then 0.96), with no heterogeneity (I2=0%). The HR decays monotonically with the
prodromal window (1.87 -> 1.30 -> 1.09 -> 0.87 across follow-up bands). Verdict: «physical inactivity was
not associated with all-cause dementia or Alzheimer's disease, although an indication of excess dementia
risk was observed in a subgroup of physically inactive individuals who developed cardiometabolic
disease» — and «there was little evidence that targeting physical inactivity alone would prevent
dementia.» The
**positive controls** are what make this more than a null: the same method kept inactivity robustly tied
to diabetes (1.42), CHD (1.24) and stroke (1.16) in *both* periods, so «the lack of association between
physical inactivity and dementia in the later follow-up is not an artefact of the methodology.»

## Parameter table — is this the same quantity?

[inferred from @isomarkku2022; @kivimaki2019inactivity]

| Parameter | Iso-Markku 2022 (View A) | Kivimaki 2019 (View B) | Same quantity? |
|---|---|---|---|
| Exposure | leisure-time PA, self-report, mixed categories | physical inactivity, self-report, binary/3-level | YES — self-reported leisure-time PA contrast |
| Outcome | incident all-cause dementia / AD / VaD | incident all-cause dementia / AD | YES — same endpoints |
| Long-follow-up estimate | RR 0.79 (0.71-0.87), >=20 y | HR 1.01 (0.89-1.14), >=10 y | **YES — this is the joined clash** |
| Design / pooling | aggregate SR+MA, 58 study-level estimates, I2 68.7% | IPD, 19 cohorts, within-cohort split, I2 0% | related, not identical |
| Reverse-causation handle | >=20 y subgroup (across-cohort) | exclude first decade (within-cohort) | related — both long-follow-up exclusion |
| Cleanest low-bias cut | 0.79 (0.62-1.01), **NS**, 3 HQ studies | 1.01 (0.89-1.14), full >=10 y | near-convergence, both near null |
| Dementia ascertainment | excluded dementia-mortality studies (insensitive) | 14/19 death-register; morbidity subgroup 0.97 (0.76-1.22) | **NO — the divergence lever** |

The headline estimates ARE the same quantity (a long-follow-up PA->dementia contrast), so this is a real
joined clash, not a category mismatch. The rows that differ — pooling level and ascertainment — are the
*explanation* of the divergence, not a reason to call it a false tension.

## The issue is genuinely joined — Iso-Markku engages Kivimaki directly

[@isomarkku2022] This is not two studies talking
past each other. Iso-Markku names Kivimaki and rebuts it: «Our results contrast with those from
Kivimaki et al ... In that study, no associations were found between PA and all-cause dementia or
Alzheimer's disease when follow-ups were longer than 10 years. Notably, the incidence of all-cause
dementia in their meta-analysis was 0.5%. This is an exceptionally low all-cause dementia incidence
rate.» Two charges: (1) the cohort was too young — «mean age at the end of follow-up was approximately
60.4 years, but the mean age of all-cause dementia diagnosis in the study was 80.6 years»; (2)
under-ascertainment — Iso-Markku «excluded studies with dementia mortality as the outcome because the
relatively low sensitivity of death registers to detect dementia cases may underestimate its
association.» Kivimaki's data pre-empt both: the >60 subgroup (diagnosis age \~85) still gave 1.04
(0.90-1.19), and the morbidity-only ascertainment subgroup still gave 0.97 (0.76-1.22). The charges are
weakened, but the morbidity arm is under-powered — so the ascertainment question stays genuinely open.

## Hidden insight — the clash is ascertainment + pooling, and the clean evidence nearly agrees

[inferred from @isomarkku2022; @kivimaki2019inactivity]

- **Not a window disagreement.** Both use a long-follow-up exclusion and both agree the <10 y signal
  (Kivimaki's 1.40; the short-follow-up base of the older MAs) is prodromal. They differ on what remains
  after the exclusion.
- **The IPD has the cleaner handle.** A within-cohort 10 y split with harmonised exposure and I2=0%
  removes reverse causation more directly than an across-cohort >=20 y subgroup drawn from 58 studies at
  I2 68.7% with detected publication bias. Kivimaki's positive controls (cardiometabolic disease stayed
  associated in both periods) validate that its null is not a power failure — a check View A's aggregate
  design cannot run.
- **On the cleanest cut, they nearly converge.** Iso-Markku's own best-quality young-baseline >20 y
  subset is **0.79 (0.62-1.01) — non-significant**; Kivimaki's >=10 y is **1.01 (0.89-1.14)**. The
  genuinely low-bias long-follow-up evidence in *both* is compatible with a null-to-modest effect. The
  headline 0.79-vs-1.01 gap is largely between View A's *larger, lower-quality, publication-biased* pool
  and View B's *harmonised, zero-heterogeneity, ascertainment-robust* IPD — a difference in study quality
  and ascertainment sensitivity, not an irreducible contradiction. Neither rules out a modest true effect
  the clean cuts are under-powered to find (the insufficient-evidence state, not proven no-effect).
  -> [[The U-Shaped Association Artifact]]

## What it changes about what to do

[inferred from @isomarkku2022; @kivimaki2019inactivity]
The recommendation direction does not move — *be active* — but its **warrant** does. Both sources agree
inactivity causes the cardiometabolic diseases (diabetes, CHD, stroke) that themselves raise dementia
risk; Kivimaki's one surviving dementia signal runs *through* that route (post-cardiometabolic HR 1.30,
0.79-2.14). So physical activity keeps its high Layer-1 rank as a non-substitutable, pleiotropic big rock
via the vascular channel, and it is recommended for cardiometabolic reasons regardless. What weakens is
the claim that activity prevents dementia *directly and independently of* its cardiometabolic effects —
the reading the Commission's borrowed 0.80 cell invites. RCT evidence sits with View B's caution:
multidomain trials show a small cognitive-surrogate benefit but a null on dementia *incidence*
-> [[Multidomain Lifestyle Intervention and Cognitive Decline]]. Confidence in a direct dementia-specific
effect is **low**; confidence in the vascular-route benefit is not in dispute.

## Self-critique `[run 2026-09-10, before commit]`

- **Joined, not fabricated.** Iso-Markku names and rebuts Kivimaki by DOI-level specificity; the
  headline estimates are the same quantity (long-follow-up PA->dementia). Not-joined checks all fail to
  fire: the outcomes are identical (not merely verbal), matching scope sharpens rather than dissolves
  the clash, and neither source is cherry-picked (both positions read end-to-end, including Iso-Markku's
  full Discussion rebuttal and Kivimaki's pre-emptive subgroup/ascertainment robustness).
- **Not overclaimed toward View B.** The IPD's design advantages are stated as tilting the weighing, not
  settling it; the honest convergence (Iso-Markku's cleanest cut is also NS) is surfaced, and the
  residual open question (Kivimaki's morbidity-only arm is under-powered) is named rather than buried.
  The verdict is *insufficient evidence for a direct effect*, not *proven no effect*.
- **No independence laundering.** These are NOT type-E corroboration — they disagree; and Kivimaki's
  positive controls corroborate only the *cardiometabolic* causation, not the dementia null. No
  confidence was lifted on agreement.
- **Coherence, not validity** (R1): the loop is open — neither source, and not this page, grades PA
  against a realized dementia outcome under intervention. A clean audit here is not a validated claim
  that exercise does or does not prevent dementia.

## References

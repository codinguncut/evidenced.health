---
type: framework
question: Which modifiable exposures reduce the risk of age-related macular degeneration (AMD), for whom, by how much, and how confident can we be?
aliases: [AMD, Age-Related Macular Degeneration, Macular Degeneration, AMD Prevention, Macular Degeneration Risk Factors]
authors: [Aune, Dagfinn; Jayedi, Ahmad; Kazemi, Asma; Soltani, Sepideh; Rezaei, Fatemeh; Leitzmann, Michael F; Marques-Couto, Pedro; Coelho-Costa, Ines; Ferreira-da-Silva, Renato; Andrade, Jose Paulo; Carneiro, Angela]
sources: [Aune - Physical Activity Cataract Macular Degeneration Meta-Analysis 2026, Marques-Couto - Mediterranean Diet Macular Degeneration Meta-Analysis 2025]
confidence: low
created: 2026-08-27
updated: 2026-08-27
self_critiqued: 2026-08-27
relationships:
  related_to:
    - Cataract and Modifiable Exposures
    - Physical Activity Dose and Mortality
    - Shared Modifiable Levers Across Age-Related Diseases
    - Measurement Error in Dietary Assessment
    - The Insufficient-Evidence Statement
---

AMD is the second age-related eye disease this domain opens on (paired with
[[Cataract and Modifiable Exposures]]). Unlike cataract, late AMD is **not** routinely reversible —
so the patient-important outcome is *irreversible* central-vision loss, function, and independence,
weighting a preventive lever more heavily *if* one exists. Two exposures are now assessed and they
part ways: **physical activity** is *insufficient-evidence* (no clear lever), while the
**Mediterranean-diet** pattern shows a protective association with AMD *progression* on the stronger
observational designs — significant, but from gold-*by-design*-only evidence that cannot carry a
causal reading.

This page is built with **per-exposure sections** so each exposure sits as a sibling arm; the diet
arm (Mediterranean diet -> AMD) has now landed beside the physical-activity arm.

## Physical activity — *insufficient evidence*, not a demonstrated null

Aune 2026 (gold-tier SR-MA of prospective cohorts) is the sole source. AMD is the **weaker arm** of
the same paper whose cataract arm reaches WCRF *probable*: for AMD the authors reach
**«limited, and no conclusion could be drawn»** — the *insufficient-evidence* state
([[The Insufficient-Evidence Statement]]), not *no meaningful effect*. [@aune2026vision]

- **High vs low PA:** RR **0.92 (95% CI 0.84–1.01)**, I2 = 60%, n = 14 cohorts — the **CI crosses 1.00,
  so the association is not statistically significant.** A point estimate near the cataract arm's, but
  the interval admits no effect. [@aune2026vision]
- **Dose-response:** RR **0.92 per 20 MET-hours/week (0.74–1.13)**, I2 = 48%, n = 3 — again crossing 1;
  no nonlinearity (pnonlinearity = 0.34). Only 3 cohorts had usable leisure-time dose data. [@aune2026vision]
- **Authors' own summary:** «This meta-analysis provides further support for an inverse association
  between physical activity and risk of cataract, but an association with age-related macular
  degeneration was less evident.» [@aune2026vision]

**Why this is *insufficient*, not *null*** — apply the expectancy test. With a wide CI (0.84–1.01),
substantial heterogeneity (I2 = 60%), and a dose-response resting on 3 cohorts, the data cannot
distinguish a real \~8% reduction from no effect; a point estimate below 1.00 with an interval that
barely crosses it is **under-powered, not exonerating**. The same cohort-design measurement error
that (in the cataract arm) argues attenuation-toward-the-null applies here too — so a true small effect
could be masked. Hold AMD-PA as **candidate/gap**, neither asserted nor dismissed.

## Mediterranean diet — protective for *progression*, insufficient for *development*

Marques-Couto 2025 is a PROSPERO-registered SR-MA of **observational studies only** — 8 studies, no
RCT — of Mediterranean-diet (MD) adherence versus AMD development and progression. It pools
**separately by study design** (different effect measures, different exposure to reverse causation),
and the three pools split cleanly. [@marquescouto2025]

- **Prospective cohort (3 studies — AREDS / Rotterdam / Alienor), the strongest design:** pooled «hazard
  ratio (HR) of 0.77 (95% CI: 0.67–0.88; p < 0.0001; I2 = 0%), corresponding to a 23% reduction in AMD
  progression risk». Significant, zero heterogeneity, temporally ordered (diet measured before
  progression). [@marquescouto2025]
- **Case–control (3 Portuguese Coimbra-Eye-Study cohorts):** pooled «OR of 0.66 (95% CI: 0.54–0.81;
  p < 0.0001; I2 = 41.5%), corresponding to a 34% reduction in AMD risk». Significant; the heterogeneity
  traces to one study (Barreto 2023, the strongest single effect, OR 0.41) — a leave-one-out
  «sensitivity analysis showed that removing Barreto et al. (2023)» eliminated the heterogeneity (the
  sentence — and its residual-I2 figure — is cut at the chunk boundary, so "eliminated" is the source's
  word and no specific I2=0% is quoted). [@marquescouto2025]
  [@marquescouto2025]
- **Cross-sectional (2 studies), NULL:** pooled «OR of 0.96 (95% CI: 0.83–1.11; p = 0.6243; I2 = 0%),
  indicating no significant association». But this pool is **99.5% one study** (Hogg / EUREYE, 4753
  participants) — effectively a single-study result, not a synthesis.
  [@marquescouto2025]

**The design gradient — and why the null is not the headline.** The two designs able to order diet
before disease (cohort, and partly case–control) both show protection; the design that cannot
(cross-sectional) shows the null — and the authors read that null as a temporality artifact:
«Cross-sectional and case–control studies assess diet and disease progression simultaneously, making
it difficult to determine whether the MD influences AMD progression or whether AMD progression
influences adherence to the diet». [@marquescouto2025]

Note the *direction* of the gradient: a protective signal strongest in the temporally-ordered design
and absent in the simultaneous one is **not** the classic reverse-causation signature (reverse
causation would inflate the simultaneous designs, not the cohorts) — so here reverse causation is a
weaker worry than **healthy-user confounding**, which the cohort adjustments (age, sex, smoking, BMI,
education, energy intake) attenuate but cannot remove at root.

**Development vs progression, and the confidence discount.** The protective pools are for AMD
*progression*; for initial *development* the review is explicitly weaker — it «showed a potential
protective effect of the MD against AMD, particularly in terms of slowing its progression … although
the evidence for preventing its initial development is less conclusive».
[@marquescouto2025]

Confidence is held **low** for the whole arm — gold-*by-design*-only: the venue is MDPI *Nutrients*;
the evidence is observational with no trial; n = 8 studies; the exposure is self-reported MD adherence
(an FFQ, usually measured once), so dietary measurement error
([[Measurement Error in Dietary Assessment]]) is the binding constraint and healthy-user confounding
is uncontrolled at root. A significant progression OR/HR here is a *consistent association*, not a
demonstrated causal effect — do not read the 23–34% figures as what MD *would* deliver, nor blend the
prevalence-odds (case–control) and progression-hazard (cohort) reductions into one number.

## Decision relevance (Layer 1)

The honest holding is a **G-gap**: for AMD the fabric currently cannot recommend physical activity as
a preventive lever, because the evidence is insufficient — *and it must not borrow the cataract arm's
significance to say otherwise* (they are distinct diseases with distinct evidence strength graded
separately in the same paper). This does not argue *against* activity — PA remains a big rock on
mortality/cardiometabolic grounds ([[Physical Activity Dose and Mortality]]) — it says the AMD-specific
case is unproven. The reportable finding here is the **absence of a clear lever**, which is itself a
decision-relevant result (it licenses not optimizing activity *for the eyes specifically*).

**The diet arm is the AMD page's first lever with a signal — but a weak-warrant one.** Unlike PA, MD
adherence *does* reach significance (on progression), so for someone already at AMD risk the diet
lever is the better-evidenced of the two eye-specific bets. But the warrant is low (observational,
n = 8, MDPI, self-reported), the benefit is for *progression* not *development*, and MD is already a
big-rock lever on cardiometabolic and mortality grounds — so the AMD-specific case adds little *at the
margin* for a person who would adopt an MD pattern anyway. Within one organ the two levers diverge —
PA insufficient, diet protective-for-progression — the same "the shared lever does not transfer
uniformly" caution the [[Shared Modifiable Levers Across Age-Related Diseases]] page makes for PA
across cataract vs AMD.

## Limits and misreadings — where this breaks

- **Do not read the null as licence to be sedentary.** *Insufficient AMD evidence* is a statement about
  the AMD-specific arm only; PA's mortality/cardiometabolic case is untouched — the correct inference is
  *no proven eye-specific bonus*, not *no reason to move*.
- **Do not read it as a demonstrated null either.** The wide CI and 3-cohort dose data cannot exclude a
  real small effect; a future SR could move this to *benefit* or to *no meaningful effect*. It is
  candidate/gap, and it fires as a *finding* only in the weak sense that the current lever is unproven.
- **All observational, self-reported PA** — the cohort measurement error that (elsewhere) argues
  attenuation-toward-null also caps how much weight the borderline point estimate can carry.

## Held threads / gaps

- **Insufficient PA evidence** — needs more cohorts, objective PA measurement, and AMD-subtype
  resolution (early vs late/neovascular were not separately estimable in the extracted text).
- **Diet arm landed** — Marques-Couto 2025 (MD -> AMD), the paired SR, now populates the diet section
  above. It is a **different exposure** from Aune's physical-activity arm on the same disease, so the two
  arms are **F/refinement of the AMD exposure map, never type-E independent backing** (different claims,
  not one claim reached twice). [@marquescouto2025]
- **AMD development (not progression) is the open cell** — the protective pools are for *progression*;
  initial development rests on the cross-sectional null (a single dominant study). A gold SR or trial on
  MD -> *incident* AMD, and on AMD subtype (geographic-atrophy vs neovascular), would move this. `G`-gap.
- **No trial / no MR for the diet arm** — the whole MD arm is observational; healthy-user confounding is
  unremoved. An MD RCT with an AMD endpoint or a genetic instrument is the missing warrant. `G`-gap.
- **Aune/Jayedi coreference** — this and the cataract page share held multi-work authors (Aune,
  Jayedi); any later AMD source sharing them is **F/attribution, never type-E independent** corroboration.

## References

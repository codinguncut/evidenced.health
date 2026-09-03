---
type: framework
question: Which modifiable exposures reduce the risk of age-related macular degeneration (AMD), for whom, by how much, and how confident can we be?
aliases: [AMD, Age-Related Macular Degeneration, Macular Degeneration, AMD Prevention, Macular Degeneration Risk Factors]
authors: [Aune, Dagfinn; Jayedi, Ahmad; Kazemi, Asma; Soltani, Sepideh; Rezaei, Fatemeh; Leitzmann, Michael F; Marques-Couto, Pedro; Coelho-Costa, Ines; Ferreira-da-Silva, Renato; Andrade, Jose Paulo; Carneiro, Angela; Babaker, Raghad; Alzimami, Lama; Al Ameer, Abdullah; Almutairi, Majed; Alam Aldeen, Rahaf; Alshatti, Hamad; Al-Johani, Najwan; Al Taisan, Abdulaziz]
sources: [Aune - Physical Activity Cataract Macular Degeneration Meta-Analysis 2026, Marques-Couto - Mediterranean Diet Macular Degeneration Meta-Analysis 2025, Babaker - Risk Factors Age-Related Macular Degeneration 2025]
confidence: low
created: 2026-08-27
updated: 2026-08-29
self_critiqued: 2026-08-29
relationships:
  related_to:
    - Cataract and Modifiable Exposures
    - Physical Activity Dose and Mortality
    - Shared Modifiable Levers Across Age-Related Diseases
    - Measurement Error in Dietary Assessment
    - The Insufficient-Evidence Statement
    - Smoking and Mortality
    - Blood Pressure Lowering and Cardiovascular Events
---

<div class="recent-update" data-last-updated="2026-08-29"></div>

AMD is the second age-related eye disease this domain opens on (paired with
[[Cataract and Modifiable Exposures]]). Unlike cataract, late AMD is **not** routinely reversible —
so the patient-important outcome is *irreversible* central-vision loss, function, and independence,
weighting a preventive lever more heavily *if* one exists. Three arms are now assessed and they part
ways: **physical activity** is *insufficient-evidence* (no clear lever); the **Mediterranean-diet**
pattern shows a protective association with AMD *progression* on the stronger observational designs;
and the **cardiometabolic/vascular risk factors** (smoking, hypertension, CVD, diabetes) show
significant prognostic associations with AMD *occurrence*, while BMI, cerebrovascular disease and
blood lipids do not. All three rest on observational, gold-*by-design*-only-or-weaker evidence that
cannot carry a causal reading.

This page is built with **per-exposure sections** so each exposure sits as a sibling arm; the diet
arm (Mediterranean diet -> AMD) and the vascular-risk-factor arm (Babaker 2025) have now landed
beside the physical-activity arm.

<div class="recent-update" data-last-updated="2026-08-27"></div>

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

<div class="recent-update" data-last-updated="2026-08-29"></div>

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
- **Cross-sectional (2 studies), NULL:** pooled «OR of 0.96 (95% CI: 0.83–1.11; p = 0.6243; I2 = 0%),
  indicating no significant association».
  [@marquescouto2025]
  But under inverse-variance pooling this null is effectively a single-study result: the large
  cross-sectional arm (Hogg / EUREYE, 4753 participants) dominates the weight against a much smaller
  second study, so the pool is not an independent synthesis.

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

<div class="recent-update" data-last-updated="2026-08-29"></div>

## Cardiometabolic and vascular risk factors — significant prognostic associations, no causal claim

Babaker 2025 is a PRISMA/PROSPERO-registered (CRD42023479050) updated SR-MA of **observational
studies only** — «Eighteen of the 2640 identified studies met the inclusion criteria» (8 cohort, 7
cross-sectional, 3 case–control), «a total of 44,440 patients» across studies, quality graded on the
Newcastle-Ottawa scale (studies scoring low were excluded; the kept set is a mix of high and
moderate). The outcome is **late AMD** (neovascular + geographic atrophy). ORs were pooled by
random-effects generic inverse variance. [@babaker2025amd]

**NB the pooled n:** 2640 is the number of *screened records*, not participants — the 18 included
studies carry \~44,440 participants (the source's «diagnosed with AMD» phrasing is loose: Table 2's
sample sizes are total cohort participants, of which AMD cases are a fraction). So this is *not* a
tiny-sample MA; the binding limits are the small *number of studies per factor* and the observational
designs, not sample size.

**Significant associations (all relative ORs; the source gives no absolute AMD risk by stratum, so
absolute benefit of removing a factor is not stated):** [@babaker2025amd]

- **Smoking:** OR **1.86 (95% CI 1.33–2.6; P = .0003)**, I2 = 81% (high heterogeneity; a leave-one-out
  «heterogeneity in the smoking outcome was resolved by the removal of studies by Park et al and Hogg
  et al»). The one factor here with a strong external prior and a specific mechanism, and a Layer-1 big
  rock in its own right. [@babaker2025amd]
- **Hypertension:** OR **1.24 (95% CI 1.09–1.4; P = .0007)**, I2 = 0%. [@babaker2025amd]
- **Cardiovascular disease:** OR **1.44 (95% CI 1.11–1.87; P = .006)**, I2 = 67%. [@babaker2025amd]
- **Diabetes:** OR **1.44 (95% CI 1.3–1.6; P < .00001)**, I2 = 0%. [@babaker2025amd]

For context (non-modifiable, not levers): advanced age OR 1.11 (1.06–1.15) and male gender OR 1.63
(1.13–2.35) were also significant. [@babaker2025amd]

**Not significantly associated — the *insufficient / no-demonstrated-association* state, not a proven
null:** «There was no statistically significant association between AMD and other risk factors, such
as BMI, cerebrovascular disorders, cholesterol, or triglyceride levels». On a base of few studies per
factor these NS arms are under-powered, not exonerating; the authors read the lipid null as unsettled
(«our findings regarding the nonsignificant association of cholesterol and triglycerides with AMD add
to the ongoing debate about the role of lipids in AMD pathogenesis»). [@babaker2025amd]

**These are route-(a) baseline-risk / prognostic associations, NOT intervention effects and NOT
effect-modification.** They say *who is more likely to develop AMD*, not *that removing the factor
lowers AMD risk by the OR shown*. No trial, no MR, no dose-response is reported; the implied levers
(quit smoking, treat HTN, manage diabetes) are inferences from association, not demonstrated
AMD-specific effects.

**Quality caveats — why the tier is *high*, not gold, and confidence stays low.** All 18 studies are
observational and «the observational nature of these study designs marks a major limitation»; the
pooled ORs **mix crude and adjusted estimates** — «the differences in adjustments of the calculated OR
in the included studies may account for heterogeneity in some outcomes» — so residual confounding is
uncontrolled and the point estimates are not confounder-adjusted throughout. The venue is a
mega-journal (*Medicine*, Wolters Kluwer, open-access CC-BY-NC); each factor pools only a handful of
studies; and smoking's I2 = 81% is high. A significant OR here is a *consistent association*, not a
demonstrated causal effect. [@babaker2025amd]

**Directionality is genuinely contested for the CVD arm.** The MA frames CVD as a *predictor* of AMD,
but its own discussion corroborates the link with **AMD -> CVD** studies (AMD raising myocardial-
infarction and subclinical-CVD risk). AMD and CVD share a vascular/atherosclerotic substrate, so which
precedes which is unresolved — the safe reading is co-occurrence / shared risk substrate, not
CVD-causes-AMD.

<div class="recent-update" data-last-updated="2026-08-29"></div>

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

**The vascular risk factors add little *at the margin*, and smoking is why.** The significant
factors — smoking, hypertension, CVD, diabetes — are the same exposures already ranked as big rocks on
mortality and cardiometabolic grounds, so an AMD-specific association changes almost no decision that
their own outcomes did not already drive. Smoking is the exception worth stating plainly: it is a
Layer-1 big rock, non-substitutable, and AMD is simply **one more organ-specific harm of the dominant
exposure** ([[Smoking and Mortality]]) — the association here reinforces the existing "stop smoking"
ranking rather than opening a new lever. For hypertension the realistic comparator is already a mature,
low-harm BP drug class ([[Blood Pressure Lowering and Cardiovascular Events]]), so any AMD increment
is captured by treatment a high-BP person would plausibly be on anyway. Because the source gives only
ORs (relative) with no absolute AMD risk by stratum, **absolute benefit of modifying any factor cannot
be stated** — a modest relative association on a low-to-moderate baseline AMD incidence is a small
absolute effect. And the four significant factors are *prognostic markers*, not proven causal levers
(route (a), not (b)/(c)) — the honest holding is *these strata carry higher AMD risk*, not *removing
the factor delivers the OR*.

<div class="recent-update" data-last-updated="2026-08-29"></div>

## Limits and misreadings — where this breaks

- **Do not read the null as licence to be sedentary.** *Insufficient AMD evidence* is a statement about
  the AMD-specific arm only; PA's mortality/cardiometabolic case is untouched — the correct inference is
  *no proven eye-specific bonus*, not *no reason to move*.
- **Do not read it as a demonstrated null either.** The wide CI and 3-cohort dose data cannot exclude a
  real small effect; a future SR could move this to *benefit* or to *no meaningful effect*. It is
  candidate/gap, and it fires as a *finding* only in the weak sense that the current lever is unproven.
- **All observational, self-reported PA** — the cohort measurement error that (elsewhere) argues
  attenuation-toward-null also caps how much weight the borderline point estimate can carry.
- **Do not read the vascular ORs as intervention effects.** Smoking/HTN/CVD/diabetes are prognostic
  associations (route (a)) from a crude-and-adjusted-mixed observational pool; the OR is *who develops
  AMD*, not *how much removing the factor lowers AMD risk*, and the source states no absolute risk.

<div class="recent-update" data-last-updated="2026-08-29"></div>

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
- **Vascular-risk-factor arm landed** — Babaker 2025 populates the cardiometabolic section above with
  prognostic ORs for smoking / HTN / CVD / diabetes. It appraises a **different exposure set** from the
  PA and diet arms on the same disease, so it is **F/refinement of the AMD exposure map, never type-E
  independent backing** of the other arms (different claims, not one claim reached twice); its authors
  are all new to the page, so no same-author collision. [@babaker2025amd]
- **CVD -> AMD vs AMD -> CVD direction is unresolved** — Babaker pools CVD as an AMD predictor but
  corroborates with AMD-predicts-CVD studies; a design that fixes temporal order (incident-AMD cohort
  with baseline vascular status, or bidirectional MR) would settle it. `G`-gap.
- **Lipids / BMI NS on a thin base** — cholesterol, triglycerides, BMI and stroke were NS, but from
  few studies each and with the lipid role called an «ongoing debate»; a better-powered SR, or lipid
  *subtype* resolution, could move these from insufficient toward benefit/harm/null. `G`-gap.
- **No absolute-risk layer for the vascular factors** — Babaker reports only relative ORs; stratum-level
  absolute AMD incidence (to convert an OR into absolute benefit) is the missing piece for a Layer-1
  ranking. `G`-gap.
- **Aune/Jayedi coreference** — this and the cataract page share held multi-work authors (Aune,
  Jayedi); any later AMD source sharing them is **F/attribution, never type-E independent** corroboration.

## References

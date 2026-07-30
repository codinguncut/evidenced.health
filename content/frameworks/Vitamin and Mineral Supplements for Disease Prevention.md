---
type: framework
question: For a generally-nourished adult, does supplementing vitamins, minerals, multivitamins, or marine omega-3 prevent cardiovascular disease, cancer, fractures, or death?
aliases: [Dietary Supplements, Multivitamins, Vitamin D Supplementation, Omega-3 Supplements, Fish Oil Supplements, Beta Carotene, Supplements for Prevention, VITAL Trial, Vitamin Supplements]
authors: [Manson, JoAnn E; LeBoff, Meryl S; US Preventive Services Task Force (org)]
sources: [Manson - VITAL Vitamin D 2019, Manson - VITAL Marine Omega-3 2019, LeBoff - VITAL Vitamin D Fractures 2022, USPSTF - Vitamin Mineral Multivitamin Supplements 2022]
cluster: supplements
nucleus: true
confidence: high
relationships:
  related_to:
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
    - Is the Food Category Doing Any Work
    - Layer 1 - Ranking Interventions for a Stratum
    - The U-Shaped Association Artifact
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
created: 2026-07-30
updated: 2026-07-30
self_critiqued: 2026-07-30
---

**Nucleus of the `supplements` cluster.** For a **generally-nourished adult without a known deficiency**,
supplementing vitamins, minerals, multivitamins, or marine omega-3 to prevent cardiovascular disease,
cancer, fractures, or death is — on the best evidence — **a null lever, and for one named agent (beta
carotene) a harmful one**. The decisive caveat runs through everything below: these are trials and reviews of
**adding a supplement to people who are already replete**, not of **correcting a deficiency** — the two
are different exposures answering different questions]].

## The landmark RCT — VITAL (n=25,871): four co-primary endpoints, all null

VITAL randomized 25,871 US adults (men >=50, women >=55, selected by **age only**, no CVD/cancer at
entry) in a 2x2 factorial design to vitamin D3 **2000 IU/day** and/or marine n-3 **1 g/day**, median
follow-up 5.3 years [@manson2019vitd]. Both agents missed **both**
of their co-primary endpoints:

| Agent | Primary endpoint | HR (95% CI) | State |
|---|---|---|---|
| Vitamin D3 | Invasive cancer | 0.96 (0.88-1.06) | no meaningful effect |
| Vitamin D3 | Major CV events (MACE) | 0.97 (0.85-1.12) | no meaningful effect |
| Marine n-3 | Major CV events (MACE) | 0.92 (0.80-1.06) | no meaningful effect |
| Marine n-3 | Invasive cancer | 1.03 (0.93-1.13) | no meaningful effect |

[@manson2019vitd, (Manson - VITAL Marine Omega-3 2019)]

> «Supplementation with vitamin D was not associated with a lower risk of either of the primary end
> points.» [@manson2019vitd]

> «Supplementation with n-3 fatty acids did not result in a lower incidence of major cardiovascular
> events or cancer than placebo.» [@manson2019n3]

**Fractures were null too.** The VITAL ancillary fracture trial (LeBoff 2022) found vitamin D3 did not
reduce total (HR 0.98, 0.89-1.08), nonvertebral (0.97), or hip (1.01, 0.70-1.47) fractures
[@leboff2022]:

> «Vitamin D3 supplementation did not result in a significantly lower risk of fractures than placebo
> among generally healthy midlife and older adults who were not selected for vitamin D deficiency, low
> bone mass, or osteoporosis.» [@leboff2022]

## The load-bearing move: this is ENHANCEMENT in the replete, NOT deficiency correction

VITAL's cohort was **not deficient** — mean baseline 25(OH)D was 30.8 ng/mL (above the 20 ng/mL adequacy
threshold), with only 12.7% below 20 ng/mL [@manson2019vitd] and just
2.4% frankly deficient at <12 ng/mL [@leboff2022]. So
every null reads as **adding D to an already-adequate person buys nothing** — the authors say so directly:

> «vitamin D requirements for cardiovascular health may have already been met for most participants.»
> [@manson2019vitd]

And the fracture trial states its own scope limit — participants «were not recruited on the basis of
vitamin D deficiency, low bone mass, or osteoporosis» [@leboff2022]. **Two things follow, and they must be kept apart**:

- **Within the range VITAL could study, effects did NOT vary by baseline 25(OH)D** — the null is not
  rescued by *it only helps the low-D people* for the strata present. This weakens the
  helps-only-the-deficient hypothesis *inside the studied range*.
- **But the frankly-deficient tail (<12 ng/mL, 2.4%; [@leboff2022, 
]) was underpowered**, and the authors note a trial in people «well below the 20 ng per
  milliliter» might show stronger effects [@manson2019vitd] — so
  deficiency correction remains a live, separate question this trial does not answer. Repletion is route (a)/(c) on
  [[Baseline Risk and the Relative-Absolute Split]]; enhancement-in-the-replete is what tested null here.

## The guideline map — USPSTF 2022 (general adults, RCT-pooled hard endpoints)

USPSTF graded supplementation for CVD/cancer prevention in community-dwelling adults **without known
deficiency** (deficiency, pregnancy, and chronic illness are explicitly carved out) [@uspstf2022supp]. Its efficacy estimates are pooled from the
**RCT** literature (its *harms* estimates also draw on cohorts), so — unlike the observational supplement
literature — the healthy-user confound is largely designed out; that is a strength of this evidence base:

| Supplement | USPSTF grade | Basis |
|---|---|---|
| **Beta carotene** | **D — recommend against** | **HARM outweighs benefit** |
| **Vitamin E** | **D — recommend against** | no net benefit |
| **Multivitamins** | **I — insufficient** | evidence lacking; balance undeterminable |
| Single/paired nutrients (other) | **I — insufficient** | evidence lacking |

[@uspstf2022supp]

> «there is no net benefit of supplementation with vitamin E ... the evidence is insufficient to
> determine the balance of benefits and harms of supplementation with multivitamins ... Evidence is
> lacking and the balance of benefits and harms cannot be determined.» [EXTRACTED (USPSTF - Vitamin
> Mineral Multivitamin Supplements 2022) chunk 01]

**Keep the two nulls apart**: vitamin E is *no
meaningful effect* (a graded null on hard outcomes); multivitamins are *insufficient evidence* (a
cancer-incidence signal, OR 0.93, discordant with cancer mortality, on short follow-up) — not the same
state. Neither is *benefit*.

**Not an independent second witness of VITAL.** USPSTF's vitamin-D pooled analysis *includes* VITAL as
one of its largest trials, so the guideline and the trial are **not independent backing** (no
`[E-independent]`) — the guideline is the RCT base synthesized, one level up.

## The harm arm — *more is better* is false (the upper-bound)

Beta carotene is the paradigm case that a supplement can *harm*: in smokers/asbestos-exposed it raised
lung cancer, and across trials it raised CV-disease mortality [@uspstf2022supp]:

> «Two trials conducted in persons who smoke or were exposed to asbestos in the workplace found a
> significantly increased risk of lung cancer with beta carotene supplementation (risk ratio [RR], 1.18
> [95% CI, 1.03-1.36]) ... a statistically significant increased risk for cardiovascular disease
> mortality associated with beta carotene supplementation ... (Peto OR, 1.10 [95% CI, 1.02-1.19]).»
> [@uspstf2022supp]

This is the upper-bound harm arm of a dose-response, not a threshold or plateau — supplementing a
micronutrient above repletion can move a hard outcome the *wrong* way
-> [[The U-Shaped Association Artifact]] (the *more is better* fallacy, here realized on cancer and CV
mortality). USPSTF also catalogues dose-dependent harms for vitamin E (haemorrhagic stroke), vitamin A
(reduced BMD, hip fracture), vitamin D (hypercalcaemia / kidney stones at >=1000 IU/day), and vitamin C
(kidney stones) [@uspstf2022supp].

## The one notable non-primary signal — n-3 and myocardial infarction

VITAL's marine n-3 arm carried a **secondary** signal on total MI even as its MACE composite stayed
null (stroke and CV-death were flat) [@manson2019n3]:

> «for total myocardial infarction, 0.72 (95% CI, 0.59 to 0.90)» [EXTRACTED (Manson - VITAL Marine
> Omega-3 2019) chunk 01]

**Read it as hypothesis-generating, not a finding**: it is a secondary endpoint with no
multiplicity control, the composite it sits in was null, and a prespecified low-fish-intake subgroup
(MACE HR 0.81) suggests any benefit may be repletion of an inadequate baseline intake rather than a
pharmacologic effect of the pill. A separate exposure — **high-dose (\~4 g/day) prescription EPA in
high-triglyceride statin-treated patients** — is a different question with its own trial evidence, and
does not transport to a general-population 1 g/day capsule. VITAL also notes the n-3 dose ceiling: «The
dose-response curve for most effects plateaus at 1 g or less of n-3 fatty acids per day» [EXTRACTED
(Manson - VITAL Marine Omega-3 2019) chunk 01] — one of the few explicitly located **plateaus** in the
corpus's dose-response holdings.
## Layer-1 placement — a low/absent lever for the well-nourished

For a generally-nourished adult, supplementation to prevent CVD/cancer/fractures/death **ranks at or
near the bottom** of the intervention hierarchy: the proven big rocks (not smoking, activity, weight,
sleep, a decent dietary pattern) are elsewhere, and this is a worked instance of *the ceiling is itself
a finding* -> [[Layer 1 - Ranking Interventions for a Stratum]]. It also extends the low-risk
cardiometabolic ceiling — a supplement is one more intervention with a surrogate/mechanistic rationale
that **fails to reduce hard events** in a low-risk population
-> [[Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People]]. The nutrients are better
obtained from food (the isolate-vs-food discipline -> [[Is the Food Category Doing Any Work]]); USPSTF
does **not** price cost or opportunity cost [@uspstf2022supp], so the expense of a null stack is a real layer-3 constraint this evidence leaves to the
person. **Scope:** this page is *general-population disease prevention*; it
is **not** deficiency correction, not ergogenic/performance supplements (creatine, protein), and not
pregnancy folic acid (which USPSTF separately recommends) — those are different decisions.

## References

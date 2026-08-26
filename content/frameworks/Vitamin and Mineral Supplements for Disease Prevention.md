---
type: framework
question: For a generally-nourished adult, does supplementing vitamins, minerals, multivitamins, or marine omega-3 prevent cardiovascular disease, cancer, fractures, or death?
aliases: [Dietary Supplements, Multivitamins, Vitamin D Supplementation, Omega-3 Supplements, Fish Oil Supplements, Beta Carotene, Supplements for Prevention, VITAL Trial, Vitamin Supplements]
authors: [Manson, JoAnn E; LeBoff, Meryl S; US Preventive Services Task Force (org); Bjelakovic, Goran; Omenn, Gilbert S; Martineau, Adrian R; Falkingham, Martin; Hooper, Lee; Bougma, Karim; Aboud, Frances E; Harding, Kimberly B; Marquis, Grace S; Bhatt, Deepak L; Steg, Philippe Gabriel; De-Regil, Luz Maria; Pena-Rosas, Juan Pablo; Fernandez-Gaxiola, Ana C; Rayco-Solon, Pura; World Cancer Research Fund International (org); Kahwati, Leila C; Weber, Rachel Palmieri; Viswanathan, Meera; Yao, Pang; Clarke, Robert; Bolland, Mark J; Reid, Ian R; Andrieu, Sandrine; Myung, Seung-Kwon; Kim, Hong-Bae; Lee, Yong-Jae; Choi, Yoon-Jung; Oh, Seung-Won; Zhang, Yu; Fang, Fang]
sources: [Manson - VITAL Vitamin D 2019, Manson - VITAL Marine Omega-3 2019, LeBoff - VITAL Vitamin D Fractures 2022, USPSTF - Vitamin Mineral Multivitamin Supplements 2022, Bjelakovic - Antioxidant Supplements Mortality 2007, Omenn - CARET Beta Carotene Lung Cancer 1996, Martineau - Vitamin D Respiratory Infections IPD Meta-Analysis 2017, Falkingham - Iron Supplementation Cognition Meta-Analysis 2010, Bougma - Iodine Child Mental Development Meta-Analysis 2013, Bhatt - REDUCE-IT Icosapent Ethyl 2019, De-Regil - Folate Supplementation Birth Defects Cochrane 2015, WCRF - Diet Nutrition Activity Cancer 2018, Kahwati - Vitamin D Calcium Fractures Evidence Review 2018, Yao - Vitamin D Calcium Fracture 2019, Bolland - Calcium Vitamin D Cardiovascular 2011, Andrieu - MAPT Multidomain Omega-3 Cognitive 2017, Myung - Calcium Supplements Cardiovascular, Zhang - Vitamin D Mortality Meta-Analysis 2019]
cluster: supplements
nucleus: true
confidence: high
relationships:
  related_to:
    - Vitamin D and Calcium Supplementation for Fracture Prevention
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
    - Is the Food Category Doing Any Work
    - Layer 1 - Ranking Interventions for a Stratum
    - The U-Shaped Association Artifact
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
    - Rating Certainty of Evidence
    - Deficiency Repletion vs Enhancement
    - Exercise for Preventing Falls in Older Adults
created: 2026-07-30
updated: 2026-08-23
self_critiqued: 2026-08-23
---

**Nucleus of the `supplements` cluster.** For a **generally-nourished adult without a known deficiency**,
supplementing vitamins, minerals, multivitamins, or marine omega-3 to prevent cardiovascular disease,
cancer, fractures, or death is — on the best evidence — **a null lever, and for one named agent (beta
carotene) a harmful one**. The decisive caveat runs through everything below: these are trials and reviews of
**adding a supplement to people who are already replete**, not of **correcting a deficiency** — the two
are different exposures answering different questions.

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

[@manson2019vitd]

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

**An independent trial set reaches the same fracture-null (Kahwati 2018, USPSTF gold SR) `[E-independent]`.**
Kahwati pooled **11 RCTs, N=51,419** of community-dwelling adults (deficient/institutionalized/osteoporotic/
prior-fracture strata **excluded**) and — using **no VITAL trial** (its search closed March 2017, before
VITAL published) — found no fracture benefit: vitamin D + calcium total fracture ARD -0.35% (-1.02 to 0.31),
hip -0.14%; vitamin D alone hip pooled ARD -0.01% (RR 1.08); calcium alone insufficient. «Vitamin D
supplementation alone or with calcium was not associated with reduced fracture incidence among
community-dwelling adults without known vitamin D deficiency, osteoporosis, or prior fracture»
[@kahwati2018]. Because Kahwati and VITAL
share **no trials, no group, no lineage**, this is a genuine independent same-outcome witness of the
**fracture enhancement-null** — strictly that claim, not the point estimates
[inferred from @kahwati2018; @leboff2022]. And
Kahwati names the repletion split itself — «The fracture benefits overall appear to be largely attributable
to benefits among the high-risk populations, with little to no benefit in lower-risk populations (1 fewer
hip fracture per 1000 community-dwelling adults per year [95% CI, 0 to 2])»
[@kahwati2018] (reporting the 2014
Cochrane review, which included high-risk strata) -> [[Deficiency Repletion vs Enhancement]],
[[Exercise for Preventing Falls in Older Adults]] (where exercise, not the pill, is the community-dwelling
fracture lever).

**The OTHER fracture arm — Yao 2019 shows D + calcium reduces hip fracture in the high-risk/institutionalized
stratum (directly).** Where Kahwati (community-dwelling only) finds the enhancement null, Yao's gold SR+MA
(6 RCTs, 49,282) finds combined D+Ca cuts hip fracture — «a 6% reduced risk of any fracture (RR, 0.94; 95%
CI, 0.89-0.99) and a 16% reduced risk of hip fracture (RR, 0.84; 95% CI, 0.72-0.97)»
[@yao2019] — the benefit «more extreme ... in the RCTs of
older participants (ie, aged 80 years) living in an institution»
[@yao2019]. **Vitamin D alone stays null** (hip RR 1.14,
0.98-1.32), so **calcium is the active co-ingredient**. This is not an independent second witness of Kahwati
(shared trials: WHI/Jackson, RECORD) — it is the direct evidence for the high-risk-benefit arm Kahwati
reported second-hand, and the full net-effect (benefit vs CV + stone harm, by stratum) has its own home
-> [[Vitamin D and Calcium Supplementation for Fracture Prevention]].

## The non-CV mortality anchor: pooled all-cause null, cancer-DEATH benefit `[2026-08-23, Zhang MA]`

VITAL is one trial; Zhang 2019 pools **50 RCTs of vitamin D ALONE (no calcium co-intervention),
74,655 participants, 7993 deaths** — the fabric's pooled mortality anchor, GRADE **high**, every
secondary outcome I2=0%. It separates the endpoints the single-trial nulls could not:

| Outcome | Zhang pooled RR (95% CI) | State |
|---|---|---|
| All-cause mortality (50 trials) | **0.98 (0.95-1.02)** | no meaningful effect |
| Cancer mortality (5 trials) | **0.85 (0.74-0.97)** | benefit — 15% lower |
| Cardiovascular mortality (12 trials) | 0.98 (0.88-1.08) | no meaningful effect |
| Non-cancer, non-CV mortality (4 trials) | 1.05 (0.93-1.18) | no meaningful effect |

[@zhang2019vitd]. «Vitamin D supplementation
alone was not associated with all cause mortality in adults compared with placebo or no treatment»
and «Vitamin D supplementation reduced the risk of cancer death by 15%»
[@zhang2019vitd]. The all-cause null is **not
underpower** — trial-sequential analysis met the information size for the 10% and 7.5% relative-risk-
reduction thresholds (a real null, not an empty one) [@zhang2019vitd].

**Cancer DEATH is not cancer INCIDENCE — a distinction, not a contradiction with the VITAL null
above.** This page already holds VITAL's cancer *incidence* null; Zhang reports a cancer *mortality*
benefit. They are different quantities, so no tension is joined:

| Parameter | VITAL (held above) | Zhang MA | Same quantity? |
|---|---|---|---|
| Endpoint | invasive cancer **incidence** | cancer **death** (mortality) | **NO** — diagnosis vs death |
| Vitamin D3 effect | 0.96 (0.88-1.06) [@manson2019vitd] | 0.85 (0.74-0.97) [@zhang2019vitd] | — |
| Design | single RCT | pooled 5 RCTs incl. VITAL | not independent |

Because Zhang **pools VITAL among its constituent trials**, the two are not independent witnesses:
this is **type-F refinement** (Zhang bounds the incidence null with a downstream mortality signal),
NOT `[E-independent]`. The signal is latency-gated — the cancer-death benefit concentrated in trials
with **>3-year** follow-up, and VITAL's own cancer mortality moved from 0.83 (0.67-1.02) overall to
**0.75 (0.59-0.96)** after excluding the first 1-2 years
[@zhang2019vitd]. Mechanism-plausible (cancer
latency), but held with the authors' own guard that the subgroup «requires additional evidence».

**D3 and D2 are different exposures.** All-cause mortality was «significantly lower among trials with
vitamin D3 supplementation than in trials with vitamin D2 supplementation (P for interaction=0.04
... although **neither group was associated with all cause mortality**)»
[@zhang2019vitd] — D3 40 trials RR 0.95
(0.91-1.00) vs D2 10 trials 1.03 (0.98-1.09). And «benefit was only seen in participants receiving
vitamin D3 supplementation, and no participants received vitamin D2 supplementation»
[@zhang2019vitd] — so the cancer-mortality
signal is a **D3-only** claim. D3 raises 25(OH)D more efficiently than D2, so the compounds are not
interchangeable. [inferred from @zhang2019vitd] the subgroups are
observational, not randomised comparisons — a specification hint, not a settled effect modifier.

**The earlier *small all-cause benefit* rode partly on calcium.** Prior reviews found a marginal
all-cause reduction (2014 Cochrane RR 0.97, 0.94-0.99; Bolland 2014 RR 0.96, 0.93-1.00); Zhang got a
null by **excluding vitamin-D-plus-calcium trials**: «we excluded more than 10 trials totalling
approximately 50 000 participants of vitamin D administered with calcium»
[@zhang2019vitd]. Isolating native vitamin D
from its frequent calcium co-agent removes a confound the earlier pooled figure carried.

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
- **But the frankly-deficient tail (<12 ng/mL, 2.4%; [@leboff2022]) was underpowered**, and the authors note a trial in people «well below the 20 ng per
  milliliter» might show stronger effects [@manson2019vitd] — so
  deficiency correction remains a live, separate question this trial does not answer. Repletion is route (a)/(c) on
  [[Baseline Risk and the Relative-Absolute Split]]; enhancement-in-the-replete is what tested null here.
  The distinction has its own home: -> [[Deficiency Repletion vs Enhancement]] (the two-arm concept this
  page instantiates).

## The guideline map — USPSTF 2022 (general adults, RCT-pooled hard endpoints)

USPSTF graded supplementation for CVD/cancer prevention in community-dwelling adults **without known
deficiency** (deficiency, pregnancy, and chronic illness are explicitly carved out) [@uspstf2022supp]. Its efficacy estimates are pooled from the
**RCT** literature (its *harms* estimates also draw on cohorts), so — unlike the observational supplement
literature — the healthy-user confound is largely designed out; that is a strength of this evidence base
:

| Supplement | USPSTF grade | Basis |
|---|---|---|
| **Beta carotene** | **D — recommend against** | **HARM outweighs benefit** |
| **Vitamin E** | **D — recommend against** | no net benefit |
| **Multivitamins** | **I — insufficient** | evidence lacking; balance undeterminable |
| Single/paired nutrients (other) | **I — insufficient** | evidence lacking |

[@uspstf2022supp]

> «there is no net benefit of supplementation with vitamin E ... the evidence is insufficient to
> determine the balance of benefits and harms of supplementation with multivitamins ... Evidence is
> lacking and the balance of benefits and harms cannot be determined.» [@uspstf2022supp]

**Keep the two nulls apart**: vitamin E is *no
meaningful effect* (a graded null on hard outcomes); multivitamins are *insufficient evidence* (a
cancer-incidence signal, OR 0.93, discordant with cancer mortality, on short follow-up) — not the same
state. Neither is *benefit*.

**Not an independent second witness of VITAL.** USPSTF's vitamin-D pooled analysis *includes* VITAL as
one of its largest trials, so the guideline and the trial are **not independent backing** (no
`[E-independent]`) — the guideline is the RCT base synthesized, one level up
.

## The harm arm — *more is better* is false (the upper-bound)

Beta carotene is the paradigm case that a supplement can *harm*: in smokers/asbestos-exposed it raised
lung cancer, and across trials it raised CV-disease mortality [@uspstf2022supp]:

> «Two trials conducted in persons who smoke or were exposed to asbestos in the workplace found a
> significantly increased risk of lung cancer with beta carotene supplementation (risk ratio [RR], 1.18
> [95% CI, 1.03-1.36]) ... a statistically significant increased risk for cardiovascular disease
> mortality associated with beta carotene supplementation ... (Peto OR, 1.10 [95% CI, 1.02-1.19]).»
> [@uspstf2022supp]

A single dose above repletion moved a hard outcome the *wrong* way — consistent with an upper-bound harm region, the
*more is better* fallacy realized on cancer and CV mortality -> [[The U-Shaped Association Artifact]]. USPSTF also catalogues dose-dependent harms for vitamin E (haemorrhagic stroke), vitamin A
(reduced BMD, hip fracture), vitamin D (hypercalcaemia / kidney stones at >=1000 IU/day), and vitamin C
(kidney stones) [@uspstf2022supp].

**The kidney-stone harm is quantified and RCT-pooled (Kahwati 2018).** Vitamin D **combined with calcium**
significantly raised incident kidney stones — pooled ARD 0.33% (95% CI 0.06 to 0.60), RR 1.18 (1.04-1.35),
3 RCTs, n=39,213, and this was «a statistically significant association for increase in incidence»
[@kahwati2018] — SoE **moderate**, the
only above-low grade in that review. The harm is **specific to the combination**: calcium alone showed no
association (pooled ARD 0.00%, -0.88 to 0.87) and vitamin D alone was unstudied on stones
[@kahwati2018]. So a null-benefit
supplement here also carries a small, real, moderate-certainty harm — a route-c contraindication signal
for stone-formers, not merely an opportunity cost.

**A second harm channel for supplemental calcium — cardiovascular (Bolland 2011, `high`, CONTESTED).**
Beyond kidney stones, calcium supplements with or without vitamin D carry a disputed **cardiovascular** harm
signal: «Calcium or calcium and vitamin D supplements increased the risk of myocardial infarction (relative
risk 1.24, P=0.004) and the composite of myocardial infarction/stroke (1.15, P=0.009)»
[@bolland2011]. **Two guards bind it.** (1) It is
**contested and subgroup-derived** (a WHI reanalysis restricted to women not on personal calcium; WHI
investigators and later reviews dispute it) — held as a counterweight, direction credible, magnitude/sign
disputed. (2) The exposure is the **supplement bolus, not food calcium**: the effect is «independent of
dietary calcium intake» with the proposed mechanism «the abrupt change in plasma calcium concentration
after supplement ingestion ... rather than ... the total calcium load ingested»
[@bolland2011], so it does **not** transport to
dietary/dairy calcium -> [[Is the Food Category Doing Any Work]]. This CV harm plus the kidney-stone harm are
the net-effect counterweights on the D+Ca fracture benefit, worked by stratum on
[[Vitamin D and Calcium Supplementation for Fracture Prevention]].

**A second pooled MA firms the CV-harm direction — Myung 2021 (`high`, type-F).** A later meta-analysis of
13 double-blind placebo-controlled RCTs (28,935 participants) took the CV endpoints as **pre-specified
primary outcomes** and reproduced Bolland's harm almost exactly: CVD composite RR 1.15 (1.06-1.25), CHD RR
1.16 (1.05-1.28), MI RR 1.25 (1.07-1.45), each I2=0% — calcium «signiﬁcantly increased the risks of CVD»
[@myung2021] — with the signal **concentrated in the
low-risk-of-bias trials** (the opposite of an artifact pattern) and **stroke null** (1.13, 0.97-1.31). It is
**not an independent witness**: Myung re-pools Bolland's trials and used Bolland's unpublished trial data,
so it firms the direction (type-F) without an `[E-independent]` lift, and the composite significance still
leans on the WHI reanalysis (leave-one-out) [inferred from @myung2021; @bolland2011]. The full net-effect
appraisal by stratum lives on [[Vitamin D and Calcium Supplementation for Fracture Prevention]].

**The primary trial behind the pooled figure — CARET, stopped early for harm.** The pooled RR rests on
actual trials, chief among them **CARET**, which randomized 18,314 smokers and asbestos-exposed workers
to beta carotene (30 mg/day) plus retinol vs placebo and was **halted 21 months early** [@omenn1996]:

> «The active-treatment group had a relative risk of lung cancer of 1.28 (95 percent confidence interval,
> 1.04 to 1.57 ... the relative risk of death from any cause was 1.17 (95 percent confidence interval,
> 1.03 to 1.33); of death from lung cancer, 1.46 (95 percent confidence interval, 1.07 to 2.00) ... the
> randomized trial was stopped 21 months earlier than planned» [@omenn1996]

CARET is **not an independent second witness** of the USPSTF figure — it is one of the trials *inside*
that pool (no `[E-independent]`); what it adds is the stratum-specific magnitude (a lung-cancer death RR
**1.46** in this smoker/asbestos population) and the fact the harm was strong enough to stop a trial, both of which
a pooled point estimate flattens.

**The harm is broader than beta carotene and broader than cancer — the antioxidant-CLASS mortality
signal.** A meta-analysis of 68 antioxidant RCTs (232,606 participants) found that, in the
methodologically-sound (low-risk-of-bias) trials, supplemental antioxidants *raised all-cause mortality*
[@bjelakovic2007]:

> «In 47 low-bias trials with 180 938 participants, the antioxidant supplements significantly increased
> mortality (RR, 1.05; 95% CI, 1.02-1.08). In low-bias risk trials, after exclusion of selenium trials,
> beta carotene (RR, 1.07; 95% CI, 1.02-1.11), vitamin A (RR, 1.16; 95% CI, 1.10-1.24), and vitamin E
> (RR, 1.04; 95% CI, 1.01-1.07), singly or combined, significantly increased mortality.» [@bjelakovic2007]

So the harm arm is broader than beta-carotene-in-smokers: **in the low-risk-of-bias trials, supplemental
beta carotene, vitamin A, and vitamin E each raise all-cause mortality**, while «Vitamin C and selenium
had no significant effect on mortality» [@bjelakovic2007] — the four evidence states again, one per compound. **Two caveats bind it**: the **all-trials pool is null** (RR 1.02, 95% CI 0.98-1.06 [@bjelakovic2007]) — the harm surfaces *only* after
restricting to low-bias trials; and **vitamin A's 1.16 (the largest number) rests on this single
meta-analysis's low-bias subset alone** — USPSTF graded only beta carotene and vitamin E, so it is the
least-corroborated claim here.

**The two beta-carotene figures do not independently reinforce each other**: USPSTF's beta-carotene pool and Bjelakovic's beta-carotene arm share CARET/ATBC as constituent
trials, so the genuinely *new* content is vitamin A, vitamin E, and the all-cause endpoint — not a second,
independent beta-carotene signal.

**Vitamin E — the SAME endpoint, reconciled by bias restriction (not a tension).** USPSTF also examined
vitamin E on all-cause mortality and found it null: OR 1.02 (95% CI 0.97-1.07; 9 RCTs; n = 107,772)
[@uspstf2022supp] — the *same* outcome on
which Bjelakovic's low-bias subset shows
a small increase (1.04). So this is one endpoint, reconciled the same way as the rest: the broad pool is
null, the low-bias restriction surfaces a small signal.

**Two method lessons the pooled estimate carries**:
(1) **risk-of-bias restriction surfaces the signal, it does not manufacture it** — the all-trials pool is
null (1.02), the high-bias trials *alone* show apparent *benefit* (RR 0.91, 95% CI 0.83-1.00 [@bjelakovic2007]), and the low-bias trials show harm (1.05),
so pooling everything lets the spuriously-favourable high-bias trials cancel the harm — risk-of-bias
appraisal was decision-determining -> [[Rating Certainty of Evidence]]; (2) the finding is about
**synthetic isolates, not food** — the authors state it «should not be translated to potential effects of
fruits and vegetables» [@bjelakovic2007] ->
[[Is the Food Category Doing Any Work]].

## A cancer authority formalises the harm arm — and adds a calcium wrinkle `[2026-08-05, WCRF]`

WCRF's Third Expert Report issues a formal recommendation — «Do not use supplements for cancer
prevention» — on exactly the harm evidence above: «Taking high-dose beta-carotene supplements is a
cause of lung cancer in current and former smokers.»
[@wcrf2018ter] **Not an
independent witness** — WCRF's judgement rests on the same CARET/ATBC trials the USPSTF pool does, so it
is a same-evidence echo, not `[E-independent]`; what it adds is a cancer-prevention body converting the
RCT harm into an action. [inferred from @wcrf2018ter]

**One genuinely new item — a supplement that helps at one site and may harm at others.** WCRF grades
calcium supplements (>200 mg/day) a **probable protector against colorectal cancer**, but «some trials
for other cancer sites have shown potential for unexpected adverse effects».
[@wcrf2018ter] This is the *net-effect-not-the-intended-effect* rule in one supplement: a real
site-specific benefit does not license the supplement, because the whole-body ledger (other sites, plus
the general-population nulls above) is what the recommendation weighs. WCRF's overall stance matches this
page's core: «for most people ... consumption of the right food and drink is more likely to protect
against cancer than consumption of dietary supplements.»
[@wcrf2018ter]

## The one notable non-primary signal — n-3 and myocardial infarction

VITAL's marine n-3 arm carried a **secondary** signal on total MI even as its MACE composite stayed
null (stroke and CV-death were flat) [@manson2019n3]:

> «for total myocardial infarction, 0.72 (95% CI, 0.59 to 0.90)» [@manson2019n3]

**Read it as hypothesis-generating, not a finding**: it is a secondary endpoint with no
multiplicity control, the composite it sits in was null, and a prespecified low-fish-intake subgroup
(MACE HR 0.81) suggests any benefit may be repletion of an inadequate baseline intake rather than a
pharmacologic effect of the pill. A separate exposure — **high-dose (4 g/day) prescription EPA in
high-triglyceride statin-treated patients** — is a different question with its own trial evidence
(REDUCE-IT), resolved in the section below; it does **not** transport to a general-population 1 g/day
capsule. VITAL also notes the n-3 dose ceiling: «The
dose-response curve for most effects plateaus at 1 g or less of n-3 fatty acids per day» [@manson2019n3] — one of the few explicitly located **plateaus** in the
corpus's dose-response holdings.

## Marine n-3 and cognition — also null (MAPT) `[2026-08-07]`

Adding cognition to the outcome menu does not rescue marine omega-3. MAPT — «the longest and largest
randomised controlled trial so far testing the efficacy of omega 3 polyunsaturated fatty acids on cognitive
decline in elderly adults» (800 mg DHA + 225 mg EPA/day, 3 yr, n≈760 in the supplement arms) — found the
omega-3 arm **flat** vs placebo on a cognitive-composite (between-group 0·011, 95% CI –0·081 to 0·103;
adjusted p=0·812) and additive-free inside a lifestyle bundle.
[@andrieu2017] A **marker-vs-intervention gap**
worth naming: low *baseline* red-blood-cell DHA+EPA marked more 3-year decline, but supplementing omega-3 did
not prevent it [inferred from @andrieu2017] — low status is a marker of
decline, not shown to be a lever, exactly as the low-fish-subgroup reading of VITAL's MI signal above
suggests repletion rather than a pill effect -> [[Multidomain Lifestyle Intervention and Cognitive Decline]].


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
is **not** deficiency correction, not ergogenic/performance supplements (creatine ->
[[Creatine Supplementation]], protein -> [[Protein and Resistance Training for Muscle and Strength]]),
and not pregnancy folic acid (which USPSTF separately recommends) — those are different decisions,
answered on *surrogate performance* outcomes, not the hard disease-prevention endpoints this page holds.


## The counter-example boundary — periconceptional folic acid DOES work, now held as PRIMARY evidence `[2026-08-04, De-Regil]`

This page's null is *general-population disease prevention* — enhancement in the replete on chronic
endpoints. The standing **counter-example** is **periconceptional folic acid for neural-tube-defect (NTD)
prevention**, which this page previously acknowledged only **second-hand** (via USPSTF's separate
recommendation). De-Regil 2015 (a gold Cochrane-review SR/MA) **upgrades that mention to held PRIMARY evidence with a
magnitude**: periconceptional folate cut NTDs to **RR 0.31 (95% CI 0.17-0.58); 5 RCTs; 6708 births; GRADE
high**, recurrence RR 0.34, absolute **35 -> 11 per 1000**, **no harm** (miscarriage RR 1.10)
[@deregil2015]. Authors: «Folic acid ...
prevents NTDs» [EXTRACTED chunk 01].

**So supplements are not uniformly a distraction: for the pregnancy-planning stratum, on a HARD outcome (a
birth defect, not a surrogate), a supplement clearly works** — the clean opposite pole to this page's
replete-adult null [inferred from @deregil2015]. It is a **different decision**
(a life-stage-defined stratum, a critical periconceptional window, a supra-adequate outcome-specific target
\~9x above the deficiency threshold), placed precisely as a *distinct window-gated flavor of repletion* — **not**
the enhancement-in-the-replete this page holds -> [[Deficiency Repletion vs Enhancement]] (operative detail
+ the distinct-flavor appraisal). *This refines the scope line below: pregnancy folic acid is answered on a
**hard** outcome, unlike the performance-surrogate carve-outs (creatine/protein).*

## Two boundaries the general-population null does not settle (deliverable-critique, 2026-08-01)

A reasonable surprise (deliverable-critique) - "no multivitamin indication? omega-3 no benefit?" Two
scope limits keep the null honest without overturning it:

- **Multivitamins: USPSTF's verdict is "I - insufficient", not "no benefit".** Insufficient evidence is
  the fourth evidence-state, not a demonstrated null -> [[Deficiency Repletion vs Enhancement]]. Contested
  *positive* signals (a cognition trial; a modest total-cancer signal in male physicians) are a separate
  open question the fabric does not yet hold, flagged for acquisition. "Half-dosing a multivitamin" has no
  evidence base either way.
- **Omega-3: the null is standard-dose (1 g/day) enhancement in a general, replete population.** It does
  NOT transport to high-dose prescription EPA (4 g/day) in a high-triglyceride / high-CV-risk stratum -
  a different exposure, dose and stratum (and whose landmark trial carries a contested comparator). That
  stratum question is now held (REDUCE-IT) and resolved as a distinction below; the general-population
  finding stands.



## REDUCE-IT cashes the high-dose stratum — and it is a DIFFERENT exposure, not a contradiction of VITAL `[2026-08-04, Bhatt]`

The reflex on seeing REDUCE-IT (benefit) beside VITAL (null) is to file a tension: *does omega-3 prevent
CV events or not?* **It is not a tension — it is a distinction.** The two trials give the same word
("omega-3") to **different compounds, at a 4-fold dose gap, in different strata, on different composites**.
Run the parameter table before any comparison:

| Parameter | REDUCE-IT (Bhatt 2019) | VITAL n-3 arm (Manson 2019) | Same quantity? |
|---|---|---|---|
| Analyte / form | purified EPA ethyl **ester, no DHA** [@bhatt2019] | **EPA+DHA mix** (460 EPA + 380 DHA) [@manson2019n3] | **NO** |
| Dose | **4 g/day** [@bhatt2019] | **1 g/day** (840 mg) [@manson2019n3] | **NO** (4x) |
| Population | statin-treated, established CVD (70.7%) or DM+risk; TG 135-499 (median 216); high CV risk [@bhatt2019] | general primary prevention (men ≥50 / women ≥55), **not** TG-selected, replete [@manson2019n3] | **NO** |
| Primary composite | 5-point (CV death, MI, stroke, **coronary revasc, unstable angina**) [@bhatt2019] | 3-point MACE (CV death, MI, stroke) [@manson2019n3] | **NO** |
| Comparator | **mineral oil** (contested; LDL rose \~10% in placebo) [@bhatt2019] | placebo (not characterized in held extract) | unknown |
| Primary result | **HR 0.75 (0.68-0.83), ARR 4.8 pp, NNT 21** [@bhatt2019] | **HR 0.92 (0.80-1.06), null** [@manson2019n3] | — |

**Every input row is NO.** The not-joined check (ii) fires — *different scope/exposure/population,
consistent once matched*: a different compound at 4x the dose in a high-risk stratum producing a different
result is exactly what transportability predicts, not a clash about one exposure. **No tension is filed.**
Bhatt says the same in his own voice — the prior n-3 nulls may reflect «the low dose or... the low ratio
of EPA to docosahexaenoic acid (DHA)», and the results «should not be generalized to other n−3 fatty acid
preparations — in particular, dietary-supplement preparations of n−3 fatty acid mixtures»
[@bhatt2019]. -> [[Is the Food Category Doing Any Work]]
(the label-is-not-the-exposure diagnostic).
[inferred from @bhatt2019; @manson2019n3]

**What REDUCE-IT establishes, decision-form (route (a)/(b), high baseline risk).** For a **statin-treated
patient with established CVD or diabetes and elevated triglycerides (135-499 mg/dL)**, 4 g/day icosapent
ethyl is a **real lever**: over 4.9 y, NNT 21 for the primary composite and a significant 20% lower CV
death (HR 0.80, 0.66-0.98) [@bhatt2019]. Three bounds
keep it honest, held to the same bar as any favourable finding:

- **It is a PRESCRIPTION drug, not the supplement aisle.** Icosapent ethyl is a regulated, dosed, purified
  drug — the realistic alternative here is *pharmacotherapy*, not an OTC fish-oil capsule (which is the
  null VITAL exposure). This is a pharmacotherapy finding admitted because a drug is often the realistic
  comparator to a lifestyle change.
- **The comparator is contested.** The mineral-oil placebo raised LDL \~10%, which *may* have inflated the
  effect; the authors argue the small LDL gap cannot explain a 25% RRR and that a post-hoc analysis was
  robust to it, and cite open-label JELIS (no mineral oil, 19% RRR) [@bhatt2019]. Unresolved by this trial; a clean-comparator trial (STRENGTH, corn-oil placebo)
  was null — not held here, flagged for acquisition. So the *magnitude* carries a discount even though the
  stratum-benefit direction is credible.
- **Harms travel with it:** AFib/flutter hospitalization 3.1% vs 2.1% (P=0.004) and a non-significant
  bleeding signal (2.7% vs 2.1%) [@bhatt2019] — real
  layer-3 considerations, not dealbreakers, for the person weighing it.

**All-cause mortality was NOT significantly reduced** (HR 0.87, 0.74-1.02) [@bhatt2019] — so this is a hard-CV-event lever with a favourable but unproven
survival effect, not a demonstrated longevity intervention. **Scope firewall:** this section is the
*high-risk-stratum prescription* boundary; it does NOT loosen this page's general-population supplement
null, which is 1 g/day OTC enhancement in the replete and stands unchanged.

## The sharpest boundary — the deficient stratum on a DIFFERENT outcome (Martineau, vitamin D x ARI)

The general-population null above is **enhancement in the replete, on fractures/cancer/CVD**. It does not
extend to **repletion in the deficient**, and Martineau 2017 (gold IPD meta-analysis, 25 RCTs, 10,933
participants, GRADE high) is the held demonstration of the other arm — on a different outcome, **acute
respiratory tract infection (ARI)**. Vitamin D cut ARI overall («adjusted odds ratio 0.88, 95% confidence
interval 0.81 to 0.96» [@martineau2017], NNT=33), and — the load-bearing part — the benefit was **modified by baseline status**: in the
deficient (<25 nmol/L) on daily/weekly dosing, OR **0.30 (0.17-0.53), NNT=4**, versus OR 0.75 in the
replete-ish (P for interaction 0.006) [@martineau2017]. Two constraints keep this from loosening the general-population verdict:

- **It is a different outcome and a different stratum.** ARI is not fracture/cancer/CVD, and the benefit
  concentrates in the *deficient* — so this **sharpens** the null (it is specifically enhancement-in-the-
  replete on hard chronic endpoints) rather than overturning it. See [[Deficiency Repletion vs Enhancement]]
  for the two-arm structure this instantiates.
- **The exposure that works is daily/weekly, not bolus** — bolus dosing was null even in the deficient
  (OR 0.82, 0.51-1.33) [@martineau2017]. And this is NOT independent corroboration of VITAL: it is a **different outcome** composing the
  fuller arc (deficient benefits on ARI / replete does not on chronic disease), not a second witness of the
  same claim [inferred from @martineau2017; @manson2019vitd].

Decision-change: **for a confirmed vitamin-D-deficient person, daily/weekly D is a real lever on ARI** —
route (a)/(b) on [[Baseline Risk and the Relative-Absolute Split]], with absolute benefit scaling to
deficiency (NNT 4 vs 33). This does not license broad supplementation of the replete, whose ARI benefit
was much smaller and whose chronic-disease benefit was null.

The same enhancement-in-the-replete / effect-modification structure recurs for **vitamin C on the
common cold** — regular high-dose C is a precise incidence null in the general community (RR 0.97,
0.94-1.00) but halves incidence in a heavy-acute-physical-stress stratum (RR 0.48, 0.35-0.64), a
route-(b) exception -> [[Vitamin C and the Common Cold]].

**A second deficient-stratum instance — iron -> cognition (Falkingham 2010, gold MA).** The same
enhancement-vs-repletion split holds for a different nutrient: iron supplementation raised IQ in the
**anaemic** by **+2.5 points (95% CI 1.24 to 3.76)** but had «no effect on non-anaemic participants»,
and the replete null was **well-powered (>1500)** hence reliable
[@falkingham2010],
[@falkingham2010]. So iron, like
vitamin D, is a *repletion* lever for a deficient stratum and an *enhancement* null for the
replete — a second nutrient x outcome confirming the deficient-benefits / replete-does-not structure
this page's general null instantiates -> [[Deficiency Repletion vs Enhancement]] (where the two
instances lift the *principle* to `[E-independent]`). Caveats: the iron RCTs were «generally small,
short and methodologically weak» with modest publication bias — hold it below the GRADE-high
vitamin-D evidence [@falkingham2010].

**A third deficient-stratum instance — iodine -> child mental development (Bougma 2013, gold MA).**
Repleting iodine-**deficient** mothers/children raised child IQ by **+7.4 points** (range 6.9-10.2,
*d* 0.49) [@bougma2013] — the
largest repletion effect of the three, tracking the deepest deficiency (severe iodine deficiency ->
cretinism). This is the iodine analogue of the same enhancement-vs-repletion split: a *repletion* lever
for a deficient stratum, and — for a well-nourished adult buying an iodine-containing multivitamin —
enhancement with no such demonstrated gain. Unlike the vitamin-D and iron instances, Bougma directly
tests only the **deficient-benefit** leg (no supplement-the-replete arm), and its benefit is gated by
**developmental timing** (early pregnancy *d* 0.51 vs late 0.17) — so the decision-change is
narrow: *repletion of a confirmed iodine-deficient pregnant/young stratum, in the fetal-brain window*,
not general-population supplementation -> [[Deficiency Repletion vs Enhancement]] (three independent
nutrients now lift the *principle* to `[E-independent]`). Hold below the GRADE-high vitamin-D evidence:
only 2 RCTs, small samples, uncontrolled confounding incl. a maternal-behaviour channel
[@bougma2013].

## References

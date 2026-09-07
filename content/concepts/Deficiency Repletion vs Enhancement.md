---
type: concept
nucleus: true
cluster: deficiency-enhancement
question: When does supplementing a nutrient change a patient-important outcome, and for whom — is the person deficient (repletion) or already replete (enhancement)?
aliases: [Repletion vs Enhancement, Deficiency vs Enhancement, Enhancement in the Replete, Nutrient Status Dependence, Repletion vs Supplementation]
authors: [Manson, JoAnn E; LeBoff, Meryl S; US Preventive Services Task Force (org); Bjelakovic, Goran; Omenn, Gilbert S; Martineau, Adrian R; Falkingham, Martin; Hooper, Lee; Bougma, Karim; Aboud, Frances E; Harding, Kimberly B; Marquis, Grace S; De-Regil, Luz Maria; Pena-Rosas, Juan Pablo; Fernandez-Gaxiola, Ana C; Rayco-Solon, Pura; Kahwati, Leila C; Weber, Rachel Palmieri; Viswanathan, Meera; Malmir, Hanieh; Larijani, Bagher; Esmaillzadeh, Ahmad; Yao, Pang; Bennett, Derrick; Clarke, Robert; Zhang, Yu; Fang, Fang]
sources: [Manson - VITAL Vitamin D 2019, Manson - VITAL Marine Omega-3 2019, LeBoff - VITAL Vitamin D Fractures 2022, USPSTF - Vitamin Mineral Multivitamin Supplements 2022, Bjelakovic - Antioxidant Supplements Mortality 2007, Omenn - CARET Beta Carotene Lung Cancer 1996, Martineau - Vitamin D Respiratory Infections IPD Meta-Analysis 2017, Falkingham - Iron Supplementation Cognition Meta-Analysis 2010, Bougma - Iodine Child Mental Development Meta-Analysis 2013, De-Regil - Folate Supplementation Birth Defects Cochrane 2015, Kahwati - Vitamin D Calcium Fractures Evidence Review 2018, Malmir - Milk Dairy Osteoporosis Fracture Meta-Analysis 2019, Yao - Vitamin D Calcium Fracture 2019, Zhang - Vitamin D Mortality Meta-Analysis 2019]
confidence: medium
created: 2026-07-30
updated: 2026-09-02
self_critiqued: 2026-09-02
relationships:
  related_to:
    - Vitamin and Mineral Supplements for Disease Prevention
    - Vitamin D and Calcium Supplementation for Fracture Prevention
    - Baseline Risk and the Relative-Absolute Split
    - Is the Food Category Doing Any Work
    - The U-Shaped Association Artifact
    - Surrogate Outcomes
    - Vitamin B12 Status in Vegetarian and Vegan Diets
---

## The distinction

Supplementing a nutrient does not answer one question — it answers **two**, and which one depends on
where the person already sits. A nutrient's effect on a patient-important outcome is **status-dependent**,
so the same pill means different things to different people:

- **Deficiency repletion** — the person is *below* the requirement; correcting the shortfall can move an
  outcome. This is the **lower arm** of the curve.
- **Enhancement** — the person is *already replete*; adding more sits on the **plateau** (buys nothing) or
  past the **upper bound** (harms). This is the **upper arm**.

These are different questions on different parts of **one** dose-response curve, not two rival claims about
*whether the nutrient works.* The central supplements error is to run a trial on one arm and read the
result as a verdict on the other: **a null (or harm) from supplementing the already-replete says nothing
about repletion of the deficient**, and vice versa.

## It is one curve — the dose-response frame

The distinction is a specific reading of the nutrient dose-response curve, whose features the method layer
already names (threshold · knee · plateau · upper bound):

- **Threshold** — the deficiency edge; below it, repletion is on the steep part and can benefit.
- **Plateau** — replete; more buys nothing (the *enhancement* null).
- **Upper bound** — excess harms (the antioxidant / beta-carotene arm below).

So *does the supplement work?* is ill-posed until the person's position on the curve is fixed. The
question is not *whether* but *where*.

## The held evidence, by arm

The parameter that decides everything is the **population's baseline nutrient status**, so read every
supplement trial by which arm it actually sampled:

| Tested quantity | VITAL (Manson 2019) | USPSTF 2022 | Bjelakovic 2007 / CARET 1996 | Same arm? |
|---|---|---|---|---|
| Population nutrient status | replete: mean 25(OH)D 30.8 ng/mL, 12.7% below 20 | community-dwelling, non-deficient («does not apply to ... known nutritional deficiency») | mostly replete / at-risk (CARET: smokers + asbestos-exposed) | VITAL and USPSTF both sample the **non-deficient** stratum; Bjelakovic/CARET push **dose past need** |
| Intervention | vitamin D 2000 IU + omega-3 1 g/day, RCT | multivitamins / individual vitamins, RCT-pooled | antioxidants (47 low-bias RCTs); CARET beta carotene 30 mg + retinol | supplement-in-the-non-deficient vs high-dose antioxidant |
| Finding on a hard outcome | **null**: cancer HR 0.96, major CV 0.97, fractures 0.98 | **no net benefit** (multivitamins I; beta carotene / vitamin E graded D) | **harm**: antioxidants all-cause RR 1.05; beta carotene 1.07; CARET lung cancer 1.28 | **plateau** (null) vs **upper bound** (harm) — same status-dependent *shape*, different nutrients (not one nutrient's measured curve) |

Provenance for the cells: VITAL status + null [@manson2019vitd],
[@manson2019n3], fractures + the <12 ng/mL tail
[@leboff2022]; USPSTF grades + carve-out
[@uspstf2022supp]; antioxidant harm
[@bjelakovic2007]; CARET
[@omenn1996].

**Independence caveat — this is NOT type-E convergence.** VITAL and USPSTF do not independently confirm
each other: USPSTF 2022 *pools* VITAL, and CARET is a primary trial *inside* both the USPSTF beta-carotene
evidence and the Bjelakovic meta-analysis. The value here is not *several sources agree* — it is the
**structure** the sources jointly imply, which none states alone.

## Enhancement in the replete tests null-to-harm

Two of the three arms are well-populated, and both land against the supplement:

- **VITAL** dosed a **replete** population and found nothing move — «Supplementation with vitamin D was
  not associated with a lower risk of either of the primary end points»
  [@manson2019vitd]; and within the range it could study, the effect
  did not vary by baseline 25(OH)D, so the null is not rescued by *it only helps the low-D people* inside
  the studied range -> [[Vitamin and Mineral Supplements for Disease Prevention]].
- **USPSTF** graded supplementation for a non-deficient population and found no net benefit — and it draws
  the repletion line **in its own scope statement**: the recommendation «does not apply to ... persons who
  are chronically ill, are hospitalized, or have a known nutritional deficiency. The USPSTF separately
  recommends that all persons who are planning or capable of pregnancy take a daily supplement containing
  0.4 to 0.8 mg (400-800 μg) of folic acid»
  [@uspstf2022supp]. The folic-acid carve-out
  is the enhancement-vs-repletion line made explicit by the guideline itself: a *need* (repletion) is a
  different recommendation from a *prevention* claim (enhancement).
- **Bjelakovic + CARET** populate the **upper bound**: in 47 low-bias trials the antioxidant supplements
  «significantly increased mortality (RR, 1.05; 95% CI, 1.02-1.08)»
  [@bjelakovic2007], and CARET's beta-carotene
  arm raised lung cancer (RR 1.28) [@omenn1996].
  *More* was not merely useless; past need it was harmful.

### The enhancement-null now has a SAME-OUTCOME second witness — vitamin D/calcium and FRACTURES (Kahwati 2018)

The fracture endpoint was previously held only through VITAL (LeBoff 2022) — a single trial's replete-null.
**Kahwati 2018 (USPSTF gold SR, 11 RCTs, N=51,419) supplies an independent, same-outcome confirmation**,
and — unusually — the review names the deficiency-repletion split in its own voice. It sampled the
enhancement arm by exclusion: «studies of populations that were institutionalized or had known vitamin D
deficiency, osteoporosis, or prior fracture were excluded»
[@kahwati2018], and found no fracture
benefit — «Vitamin D supplementation alone or with calcium was not associated with reduced fracture
incidence among community-dwelling adults without known vitamin D deficiency, osteoporosis, or prior
fracture» [@kahwati2018] (vit-D+Ca total
fracture ARD -0.35% [-1.02 to 0.31], hip -0.14%; SoE low).

- **The review states the repletion pattern itself:** «The fracture benefits overall appear to be largely
  attributable to benefits among the high-risk populations, with little to no benefit in lower-risk
  populations (1 fewer hip fracture per 1000 community-dwelling adults per year [95% CI, 0 to 2])»
  [@kahwati2018] — Kahwati reporting the
  2014 Cochrane review, which *included* institutionalized/deficient/osteoporotic populations. So on
  **fractures** the two arms are now both named: null in the community-dwelling (direct), benefit in the
  high-risk/deficient (reported, second-hand via Cochrane).
- **Independent same-outcome convergence on the fracture enhancement-null `[E-independent]`.** Kahwati's
  11 RCTs (search cutoff March 2017) do **not** include VITAL (published 2019/2022), share no trials, no
  research group, and no lineage with it — so VITAL (LeBoff) and Kahwati are two independent trial sets
  reaching the **same** result on the **same** outcome (no fracture benefit from D +/- Ca in the
  non-deficient). This is genuine type-E backing, raising confidence in the **fracture enhancement-null
  specifically** — strictly that claim, not any point estimate
  [inferred from @kahwati2018; @leboff2022; @manson2019vitd].
- **Route-c harm on this arm:** vitamin D + calcium raised **kidney stones** — pooled ARD 0.33%
  (0.06-0.60), RR 1.18 (1.04-1.35), SoE **moderate** (Kahwati's only above-low grade); calcium alone did
  not (ARD 0.00%) and vitamin D alone was unstudied
  [@kahwati2018]. A concrete
  contraindication-stratum harm from combining, not a pure upper-bound overdose effect.

##### The high-risk/institutionalized BENEFIT leg is now DIRECT, not second-hand (Yao 2019) `[F, NOT E]`

Kahwati named the deficient/high-risk benefit only by **reporting Cochrane** (the «1 fewer hip fracture per
1000» line above, second-hand). **Yao 2019 (gold SR+MA) supplies the direct, within-review demonstration of
that leg** — so both arms of the fracture curve are now anchored in primary syntheses, not one direct + one
reported:

- **D + calcium reduces hip fracture, and the benefit concentrates in the institutionalized (the repletion
  arm).** «found a 6% reduced risk of any fracture (RR, 0.94; 95% CI, 0.89-0.99) and a 16% reduced risk of
  hip fracture (RR, 0.84; 95% CI, 0.72-0.97)» [@yao2019],
  with the effect «more extreme ... in the RCTs of older participants (ie, aged 80 years) living in an
  institution than those younger than 80 years living in the community (P for heterogeneity = .02)»
  [@yao2019]. That is the deficient/high-risk arm shown
  directly, where Kahwati (community-dwelling only) sees the enhancement null.
- **Vitamin D ALONE is null — calcium is the active co-ingredient.** D alone «did not find a reduced risk of
  any fracture (RR, 1.06; 95% CI, 0.98-1.14) or hip fracture (RR, 1.14; 95% CI, 0.98-1.32), but these trials
  were constrained by infrequent intermittent dosing, low daily doses of vitamin D, or an inadequate number
  of participants» [@yao2019] — so the fracture lever,
  where it exists, is the **combination**, not vitamin D by itself (and the D-alone null is partly
  dose-constrained: median 25(OH)D difference 8.4 ng/mL, most trials sub-2000 IU/day).
- **This is F/refinement, NOT independent type-E.** Yao's D+Ca pool **shares its dominant trial** with
  Kahwati (WHI/Jackson 2006 dominates both pools; Porthouse 2005 also shared), so it is not an independent
  second witness — it *upgrades* the second-hand high-risk-benefit leg to direct evidence and adds the
  D-alone/D+Ca split, no `[E-independent]` claimed [inferred from @yao2019; @kahwati2018]. The **net-effect** of the D+Ca benefit against its CV and kidney-stone
  harms lives on [[Vitamin D and Calcium Supplementation for Fracture Prevention]].

#### The fracture enhancement-null now generalizes across EXPOSURE FORM — dietary dairy fails too (Malmir 2019) `[E-independent + F]`

The supplement witnesses (VITAL, Kahwati) share a form: an **isolated Ca/D pill in an RCT**. That leaves
an escape hatch — *supplements are the wrong delivery; real dairy **food**, with its calcium-plus-protein
matrix, would protect bone.* **Malmir 2019 (gold observational SR-MA, 34 studies, 616k people for
fracture) removes its empirical support (in cohorts):** dietary milk/dairy is **null** for hip fracture
in prospective cohorts (total dairy RR 0.90 [0.73-1.11]; milk 0.93 [0.75-1.15], with milk trending to
+9%/200 g harm), protective *only* in the reverse-causation-prone cross-sectional/case-control designs
-> [[Dairy and Bone Health]]. Malmir *also* draws the parallel to the supplement evidence in his own
voice — supplemental calcium and/or vitamin D «was not associated with a lower risk of fractures among
community-dwelling older adults»
[@malmir2019] (Zhao 2017,
secondhand) — but that parallel-drawing is **not** part of the independence (Malmir citing the same
supplement literature Kahwati summarizes adds no corroborative weight); the independence rests **only**
on Malmir's own dairy-cohort data.

- **A THIRD independent route to the fracture enhancement-null `[E-independent]` — the most
  methodologically distant of the three.** Malmir (observational cohorts, food-source) shares **no
  trials, no research group, no lineage** with the supplement RCTs (VITAL, Kahwati), and it differs on
  *both* axes at once — a **different exposure form** (whole-food matrix vs isolate) AND a **different
  design family** (observational vs randomized). So it is not merely a third witness of the same kind: it
  establishes that the fracture-null does **not** depend on the supplement *form*. More calcium, however
  delivered, does not lower fracture in the **enhancement stratum** — Malmir's general/unscreened
  (predominantly replete) adult and the RCTs' verified-non-deficient are distinct populations, joined
  only in being enhancement-territory, not the deficient arm
  [inferred from @malmir2019; @kahwati2018; @leboff2022].
- **Scope guards (strict).** The convergence is on the **null direction only**, not on any point estimate
  — the magnitudes are non-commensurable (RR-per-200 g food vs RCT ARD; the parameter table on
  [[Dairy and Bone Health]] carries the NO cells). And Malmir does **not** screen calcium/vitamin-D
  status, so it samples *more dairy across the general (predominantly replete Western) adult*, which is
  enhancement-territory but not verified-replete; it therefore strengthens the **enhancement** leg, not
  the deficient-repletion arm, which stays a separate question (a genuinely calcium/D-deficient or
  osteoporotic person is not what Malmir sampled — Kahwati's secondhand high-risk benefit still governs
  there).

### The enhancement-null now extends to a NEW ENDPOINT — MORTALITY (Zhang 2019) `[F, NOT E]`

The enhancement arm was held on fractures/cancer/CVD (VITAL, Kahwati, Yao, Malmir). **Zhang 2019
(gold SR-MA, 50 RCTs of vitamin D alone, 74,655) adds MORTALITY as a new enhancement-null endpoint**,
in a population that was largely replete: «more than half of participants (50 466/66 546) from trials
reported a baseline mean 25 hydroxyvitamin D concentration of more than 50 nmol/L»
[@zhang2019vitd]. Pooled all-cause mortality was
null (RR 0.98, 0.95-1.02, GRADE high), and the authors read it as an enhancement problem in their own
voice: «The baseline 25 hydroxyvitamin D concentrations of trial participants have not been low
enough, which could partly contribute to the null finding»
[@zhang2019vitd]. This is **type-F** (Zhang pools
VITAL, so not an independent second witness), broadening the enhancement-null to mortality.

- **A weak, NS hint of the lower arm on this same endpoint.** Baseline-25(OH)D subgroup (all-cause):
  **>=50 nmol/L RR 1.04 (0.97-1.12)** vs **<50 RR 0.95 (0.90-1.01), P-interaction 0.07**
  [@zhang2019vitd] — the predicted direction (more
  benefit lower down), but non-significant and route-(b), so a *hint*, not the demonstrated lower arm
  Martineau supplies for ARI. The trial population barely sampled the deficient edge (<25 nmol/L in
  4 trials / 886 people), so it cannot power the repletion arm on mortality.
- **The observational gradient the RCTs do NOT reproduce — a reverse-causation candidate.** Cohort data
  (Zhang citing Gaksch 2017 IPD MA) show a steep low-25(OH)D mortality signal: HR vs the 75-100 nmol/L
  referent was **1.67 (1.44-1.89)** at <30 nmol/L, 1.33 at 30-40, 1.15 at 40-50
  [@zhang2019vitd]. Supplementing largely-replete
  trial populations does **not** confirm this gradient as causal — exactly the pattern where
  reverse causation / confounding-by-frailty inflate an observational low-nutrient mortality arm
  -> [[The U-Shaped Association Artifact]]. [inferred from @zhang2019vitd]
  the RCT-vs-cohort divergence is the artifact-check: the cohort HR is not evidence the deficient would
  benefit from repletion on mortality; that arm stays untested here.

## The lower (repletion) arm — now demonstrated for one nutrient x outcome

The lower arm — does correcting an actual deficiency move an outcome? — was, until Martineau, asserted as
a live question the held trials barely touched. **Martineau 2017 (gold IPD meta-analysis, 25 RCTs, 10,933
participants, GRADE high) supplies the first held lower-arm demonstration** — and it is exactly the
effect-modification-by-baseline-status the concept predicts. Vitamin D reduced acute respiratory tract
infection (ARI) overall («adjusted odds ratio 0.88, 95% confidence interval 0.81 to 0.96»
[@martineau2017]), and the
benefit **scaled with baseline deficiency** — the signature of a status-dependent curve:

| Baseline 25(OH)D | Adjusted OR (ARI) | NNT | Arm |
|---|---|---|---|
| <25 nmol/L, daily/weekly dosing | **0.30 (0.17-0.53)** | **4** | deficient — steep lower arm |
| >=25 nmol/L, daily/weekly dosing | 0.75 (0.60-0.95) | 15 | replete-ish — shallower |
| <25 vs >=25, unstratified | 0.58 vs 0.89 (P-interaction 0.01) | 8 vs — | the interaction itself |

Rows 1-2 are the daily/weekly-stratified table 3 (P-interaction 0.006); row 3 is the unstratified
subgroup (P-interaction 0.01) [@martineau2017].

- The source states the mechanism as the repletion principle itself: «Increased efficacy of vitamin D
  supplementation in those with lower baseline vitamin D status is more readily explicable, based on the
  principle that people who are the most deficient in a micronutrient will be the most likely to respond
  to its replacement.» [@martineau2017]
- **This is the LEGITIMATE effect-modification case (route (b)), not the false-positive kind.** The
  modifier was «specified a priori and measured at baseline, P values for interaction remained significant
  after adjustment ... and subgroup effects were consistent when analysed as proportions and event rates»
  [@martineau2017] — it fulfils
  the Sun/Guyatt subgroup-credibility criteria and carries a mechanism, so it is not a data-dredged
  interaction. It still rests on **few trials per deficient cell** (234 participants, 6 studies), and the
  authors themselves flag it: «We therefore suggest caution when interpreting the results in table 3.»
  [@martineau2017]

**The cross-outcome caveat — this is NOT one measured dose-response curve.** Martineau's outcome is **ARI**;
VITAL's nulls were **fractures / cancer / CVD**. So the composed picture is *vitamin D helps the deficient
on ARI; it does not help the replete on fractures/cancer/CVD* — a **status-dependent effect-modification
pattern read across different outcomes**, not a single nutrient-and-outcome curve traced from its deficient
edge to its plateau. The concept (benefit concentrates in the deficient) is instantiated; a clean
same-outcome dose-response for any one endpoint is still not held [inferred from @martineau2017; @manson2019vitd; @leboff2022].

**Independence guard — this is F/A composition, NOT type-E.** Martineau (ARI) and VITAL (fractures/cancer/
CVD) do not independently confirm *the same* claim — they answer different outcome questions, and jointly
compose the arc (deficient benefits / replete does not). The value is the structure they imply together,
not two witnesses of one effect [inferred from @martineau2017; @manson2019vitd].

- VITAL's **frankly-deficient tail** (<12 ng/mL, only 2.4% of the trial) was underpowered, and the authors
  note a trial in people «well below the 20 ng per milliliter» might show stronger effects
  [@leboff2022],
  [@manson2019vitd]. So repletion on VITAL's *own* endpoints
  (fractures/cancer/CVD) is left open — Martineau answers it only for ARI.
- Repletion maps onto **route (a)** of [[Baseline Risk and the Relative-Absolute Split]]: deficiency status
  is a baseline-risk / support-factor variable, so the *absolute* benefit of repletion scales with
  deficiency severity even at a constant relative effect (Martineau's NNT falls from 20 overall to **4** in
  the deficient) — and the safe route needs **no subgroup-interaction claim**, though here a credible
  route-(b) interaction is *also* present [inferred from @martineau2017].

## Second instance — iron -> cognition, anaemia-stratified (Falkingham 2010)

The lower arm now has a **second, independent** worked instance in a **different nutrient on a
different outcome**: iron supplementation and cognition, subgrouped by baseline iron status
(Falkingham 2010, gold meta-analysis, 14 RCTs, children aged 6+/adolescents/women; SMD, random
effects). The signature is the same — **benefit concentrates in the deficient**:

| Cognitive outcome | Overall | Anaemic at baseline | Non-anaemic / replete | Arm |
|---|---|---|---|---|
| **Intelligence (IQ)** | null: SMD 0.10 (-0.14 to 0.33), I2 81%, n=2365 | **SMD 0.54 (0.26 to 0.81), = +2.5 IQ points (1.24-3.76)**, I2 0%, n=209 | **null, well-powered (>1500)** | deficient benefits; replete does not |
| Attention/concentration | SMD 0.59 (0.29 to 0.90), I2 0%, n=179 | benefit | benefit (but n=33, mixed category) | reported status-**independent** — see refinement |
| Memory / psychomotor / scholastic | null | null | null | no arm moves |

Provenance: IQ overall + anaemic subgroup
[@falkingham2010]; the +2.5-point
back-transform and the headline «improved intelligence quotient (IQ) by 2.5 points (95% CI 1.24 to
3.76), but had no effect on non-anaemic participants»
[@falkingham2010]; the replete
null being well-powered («adequately powered to detect an effect, and ... the lack of effect
observed in these iron replete samples is likely to be reliable»)
[@falkingham2010]. The authors
name the repletion mechanism directly: «positive effects of iron supplementation were clearest in
those with deficiencies which were corrected by the intervention»
[@falkingham2010].

**Absolute + relative form (the IQ arm).** Relative/standardised: SMD 0.54 in the anaemic. Absolute:
**+2.5 IQ points vs placebo** in the anaemic, versus **zero** in the well-powered replete subgroup —
a decision-relevant magnitude only for the deficiency-corrected stratum.

**Subgroup caveat (route (b), symmetric standards).** Baseline-status modification is route (b) — the
false-positive generator. It is credible here because it was **a-priori** (status was the planned
subgrouping variable), carries the **repletion mechanism**, and the anaemic IQ subgroup is
**homogeneous (I2 0%)** with the replete null **well-powered**. But it is weaker than Martineau on
trial quality: the included RCTs are «generally small, short and methodologically weak», the funnel
plot «suggested modest publication bias», and the anaemic IQ cell rests on n=209 (3 studies)
[@falkingham2010]. Hold the iron
instance at **lower certainty than the vitamin-D one**, which was GRADE-high IPD.

### The refinement — the modification is OUTCOME-specific, not nutrient-universal

Falkingham does not simply replicate the pattern; it **bounds** it. Within iron, the
status-modification appears for **IQ** but **not for attention/concentration**, which improved
«irrespective of baseline iron status» (SMD 0.59 in both subgroups)
[@falkingham2010]. Two readings,
and the evidence does not fully separate them
[inferred from @falkingham2010]:

- **Genuine outcome-specificity** — some cognitive functions respond to iron only when a deficit is
  corrected (IQ), others may respond more broadly (attention). If so, "benefit concentrates in the
  deficient" is a **per-outcome** claim, not a blanket property of the nutrient.
- **A power artifact on the attention side** — the attention non-anaemic arm was only **33 people in
  the mixed «iron deficient and/or replete» category**, far too thin to exclude a gradient, whereas
  the IQ replete arm (>1500) was powered to find a null. On this reading attention is simply measured
  too weakly on the non-deficient side to decide.

Either way the **decision-relevant** finding is unchanged: for **IQ** — where the replete arm is
well-powered — correcting the deficiency helps and adding iron to the replete does not (scholastic,
also well-powered, was a null in *both* arms, so it is a powered double-null, not a deficiency
benefit). **The
refinement the fabric keeps is that the deficiency-repletion gradient is claimed per outcome, and
demonstrated where the non-deficient stratum is powered enough to show a null** — not asserted as a
universal property of every nutrient x outcome pair.

### The principle now has independent cross-nutrient backing `[E-independent]`

**Three** `[updated 2026-08-04: strengthened from two to three by Bougma — see the iodine instance
below]` **independent** routes now reach the **same general principle** — *supplementation benefit is
modified by baseline nutrient status; it concentrates in the deficient and is small-to-absent in the
well-nourished*:

- **Vitamin D -> ARI** (Martineau IPD MA, 25 RCTs): deficient OR 0.30 vs replete-ish 0.75,
  P-interaction 0.006. Both legs within-study.
- **Iron -> IQ** (Falkingham MA, 14 RCTs): anaemic +2.5 IQ points vs a well-powered replete null.
  Both legs within-study.
- **Iodine -> child IQ** (Bougma MA, 24 studies): repletion of the deficient +7.4 IQ points (range
  6.9-10.2). **Deficient-benefit leg only** directly; replete-null leg indirect (see the iodine
  instance below for the leg asymmetry).

These share **no trials, no research group, no lineage**, run on **different nutrients, different
outcomes, different populations**, and none cites the others — so their agreement on the *pattern*
is genuine independent backing, raising confidence in the **principle** in a way no single instance
does `[E-independent]`
[inferred from @martineau2017; @falkingham2010; @bougma2013].

**The convergence is uneven across the principle's two legs — do not read *three* as three-for-both.**
The principle has a *benefit-in-the-deficient* leg and a *small-to-absent-in-the-replete* (contrast)
leg. The **deficient-benefit leg** is backed by all **three** independent nutrients. The **contrast
leg** — that adding more to the replete does *not* help — rests on only **two** clean within-study
demonstrations (Martineau, Falkingham); Bougma supports it only *indirectly* (the Murcia sufficient-area
null), because its design holds no supplement-the-replete arm. So the honest strengthening is: leg-1
now three-independent; leg-2 still two-independent-plus-one-indirect
`[inferred from @martineau2017; @falkingham2010; @bougma2013].`

**Scope of the E claim — strict.** The independence holds **only for the general principle**. The
*specific* effects (vit-D -> ARI, iron -> IQ, iodine -> child IQ) are **different claims** and do NOT
corroborate each other — Falkingham is not a second witness that vitamin D cuts ARI, nor Bougma that
iron raises IQ. What is independently corroborated is the **status-dependence structure** all three
instantiate.
Do not read the `[E-independent]` mark as evidence for either point estimate
[inferred from @martineau2017; @falkingham2010].

## Third instance — iodine -> child mental development (Bougma 2013)

The lower arm now has a **third, independent** worked instance, and it is the **largest-magnitude**
repletion effect the wiki holds: iodine and child mental development, in iodine-deficient populations
(Bougma 2013, gold meta-analysis, 24 studies of children aged <=5 years; SMD *d*, random effects).
Correcting maternal/child iodine deficiency raised child IQ substantially:

| Study design | Effect size (SMD *d*) | Absolute (IQ points, SD=15) |
|---|---|---|
| Intervention RCT (2 trials) | 0.68 | \~10.2 |
| Intervention non-RCT (8) | 0.46 | \~6.9 |
| Cohort, maternal iodine status (9) | 0.52 | 7.8 |
| Cohort, infant iodine status (4) | 0.54 | 8.1 |
| **Best estimate (pooled intervention, 16 effects/10 studies)** | **0.49** | **7.4** |

The headline: «the best estimate to date of the effect size of iodine supplementation on mental
development in children 5 years old and under is 0.49, which translates into 7.4 IQ points lost due to
iodine deficiency» [@bougma2013];
the four-design range is «6.9 to 10.2 IQ points lower in iodine deficient children compared with iodine
replete children» [@bougma2013].

**Absolute + relative form.** Relative/standardised: *d* = 0.49 (intervention). Absolute: **+7.4 IQ
points** (range 6.9-10.2) for the deficiency-corrected stratum — nearly **3x** iron's +2.5-point
anaemic-IQ effect. This tracks mechanism: iodine -> thyroid hormone (T4/T3) -> CNS cell
migration/differentiation/myelination, and severe deficiency causes cretinism, so the deeper the
deficiency the larger the repletion return
[inferred from @bougma2013]. This is the
**mechanistically** cleanest lower arm the trio expected — severe deficiency -> severe, measurable
impairment — though *evidentially* it is the trio's **weakest** design (2 RCTs, heavy confounding;
see Caveats). Big, clear signal on a shaky evidence base: the direction is secure, the exact size is not.

### Synthesis check 1 — the principle now has THREE independent instances, with a stated asymmetry

Iodine shares **no trials, no research group, no lineage** with Martineau (vit-D) or Falkingham (iron),
and runs on a **different nutrient, outcome (child neurodevelopment), and population** — so it is a
genuine third independent route to the general principle *repletion benefit concentrates in the
deficient*. The `[E-independent]` mark below is **strengthened from two to three nutrients**.

**But the structure of Bougma's evidence differs, and the strict scope must be kept.** Martineau and
Falkingham each demonstrated **both** legs *within-study* (a deficient-vs-replete interaction: benefit
in the deficient, null in the replete). Bougma directly demonstrates **only the deficient-benefit leg**
— its intervention studies replete iodine-**deficient** populations; it holds **no
supplement-the-already-replete RCT arm**. The replete-null leg for iodine is supported only
**indirectly**: the largest iodine-*sufficient*-area cohort found «children of iodine-sufficient and
deficient mothers in the first trimester of pregnancy, based on UIE, had similar mental development
scores (Mean 100.38 vs. 99.10; ... *d* = -0.09)»
[@bougma2013] — a null on
iodine-intake stratification in a replete population — but other sufficient-area cohorts stratifying on
maternal *thyroid function* (a functional-deficiency contrast) did find effects. So iodine's
contribution is: **strong, large, independent confirmation of the deficient-benefit leg; only weak,
indirect support for the replete-null leg**
[inferred from @bougma2013].

### Synthesis check 2 — iodine does NOT show Falkingham's *benefit irrespective of status*; it adds a TIMING window

Falkingham's iron->attention was the outcome-specific exception (benefit *irrespective* of baseline
status). Does iodine->development replicate that exception, or fit the clean deficient-only gradient?
**Neither, cleanly** — because Bougma cannot test *adding iodine to the replete* (no replete arm). What
it *does* add is a **different conditionality axis**: developmental **timing**. The repletion benefit is
gated by the fetal-brain window — «comparisons between early pregnancy and control groups produced a
large average effect size of 0.51 while comparisons between late pregnancy and control groups produced a
small average effect size of 0.17»
[@bougma2013], with a direct
early-vs-late comparison of *d* = 0.82 favouring early. So the benefit is **not** *irrespective* — it is
conditional on the intervention reaching the deficient physiology **during its window of susceptibility**
[inferred from @bougma2013].

**What this does to the fabric's existing refinement — keep TWO distinct axes apart.** The three
instances do *not* all decorate one *support factor* — they populate **two different axes**, and
collapsing them would be a category error
[inferred from @falkingham2010; @martineau2017; @bougma2013]:

- **Axis 1 — WHERE the gradient appears (outcome-specificity).** Falkingham: the deficiency-modification
  shows on *IQ* but the attention benefit looked status-*independent*. This is about *which outcome*
  carries the gradient, not a factor that must co-occur — the fabric's existing "gradient is claimed per
  outcome" refinement.
- **Axis 2 — WHETHER a given benefit fires (gating support factor).** Martineau: the ARI benefit needs
  *daily/weekly* dosing (bolus was null even in the deficient); Bougma: the child-IQ benefit needs the
  *early-pregnancy developmental window* (late supplementation was null). Same-outcome, same-deficient
  benefit, gated by a co-present exposure condition.

This is **not a bold new emergent claim** — it is the held **transportability** principle («a mechanism
fires only when its whole set of conditions is present») instantiated for repletion, a **type-F
refinement** of it, not a standalone type-A. The decision-relevant upshot: *works only in the deficient*
is **necessary, not sufficient** — repleting the right stratum still fails if the outcome does not carry
the gradient (axis 1) or the exposure misses its gating condition (axis 2), and *which* condition binds
is **instance-specific, not transferable across nutrients**
`[inferred from @bougma2013; @falkingham2010; @martineau2017].`

### Caveats (symmetric standards) — hold iodine below the vitamin-D certainty

Bougma's design bar is the weakest of the trio: only **2 RCTs** (one, Pretell, with unclear
randomization and post-hoc child selection), median sample **50/group** (underpowered), and the source's
own list of «weak study designs, the omission of important confounders, small sample sizes, the lack of
cluster analyses». Confounding is uncontrolled in the non-RCT/observational studies — «Failure to
include confounds in the statistical analysis may serve to inflate effect sizes»
[@bougma2013] — and a
**maternal-behaviour channel** may partly mediate/confound the child-IQ effect: «we cannot determine how
much of the difference is explained by the child's iodine sufficiency and how much is explained by the
mother's provision of positive stimulation rather than the child's iodine sufficiency»
[@bougma2013]. The *magnitude* is
large and design-robust (consistent across four designs); the *precise* size and the pure-iodine
attribution carry real uncertainty. The direction and the deficient-benefit leg are secure; hold the
point estimate loosely.

## A DISTINCT flavor of repletion — periconceptional folic acid and NTDs (window-gated, stratum-DEFINED, not baseline-status-modification)

The trio above (vit-D/iron/iodine) are one structural kind: **route-(b) baseline-STATUS modification** — the
supplement's benefit concentrates in the *measured*-deficient and fades in the *measured*-replete, within
one population. **Periconceptional folic acid for neural-tube-defect (NTD) prevention is a different kind of
repletion, and forcing it into the trio's pattern would be a category error** [inferred from @deregil2015]. It is the **clearest
supplement-benefit the wiki holds on a HARD patient-important outcome**, and it earns a clean statement:

- **Magnitude (De-Regil 2015 SR/MA, GRADE high).** Periconceptional folate vs no folate cut NTDs
  to **RR 0.31 (95% CI 0.17 to 0.58)**; 5 RCTs; 6708 births; recurrence RR **0.34 (0.18-0.64)**; absolute
  **35 -> 11 per 1000 (6 to 20)** [@deregil2015]. Authors' conclusion: «Folic acid, alone or in combination with vitamins and minerals, prevents
  NTDs, but does not have a clear effect on other birth defects» [EXTRACTED chunk 01] — the benefit is
  specific to NTDs. **No harm signal** (miscarriage RR 1.10, 0.94-1.28) [EXTRACTED chunk 01].

**Why it is a distinct flavor, in three appraisal moves:**

1. **The stratum is defined by LIFE-STAGE, not by a lab value.** The "who" is *women capable of / planning
   pregnancy, periconceptionally* — a reproductive-window stratum, not a biochemically-deficient subgroup.
   The whole stratum benefits, and the effect is **not** modified by dose above \~0.36 mg or by folate-alone
   vs -combined (a plateau, no route-(a) scaling by measured shortfall within the stratum)
   [@deregil2015]. Contrast the trio,
   where absolute benefit scales with *measured* deficiency severity.
2. **The protective target sits \~9x ABOVE the deficiency threshold.** Deficiency is RBC folate <100 nmol/L,
   but «the optimal folate level associated with lowest risk of NTDs is 906 nmol/L or above»
   [@deregil2015]. So this is **not
   correcting a frank deficiency** — it is reaching a *supra-adequate, outcome-specific* target. A woman with
   "adequate" folate by the anaemia-prevention standard can still be NTD-*insufficient*. This is why the
   effect is population-wide for the stratum rather than concentrated in the lab-deficient tail.
3. **It is window-gated — Axis 2, the same gating structure as iodine.** The neural tube closes within \~28
   days of conception [@deregil2015],
   so the exposure must be present *periconceptionally* (before most women know they are pregnant); trials
   that started supplementation after the first trimester were out of scope. This is the fabric's **Axis 2
   (WHETHER a benefit fires — gating support factor)** instantiated again, and the closest structural
   parallel to Bougma's fetal-brain window (early-pregnancy iodine *d* 0.51 vs late 0.17) — repletion after
   the window largely fails [inferred from @deregil2015; @bougma2013].

**Higher-risk sub-stratum (route (a), baseline risk).** For women with a prior NTD pregnancy, diabetes, or
on anticonvulsants, the recommended dose is **5 mg/day** (vs 0.4 mg general) [@deregil2015] — a higher-baseline-risk stratum getting a larger dose,
route (a) on [[Baseline Risk and the Relative-Absolute Split]].

**A related repletion-TERRITORY case whose outcome-transmission is NOT yet held — B12 in vegetarians.**
Vitamin B12 in a vegetarian/vegan is a genuine lower-arm case by *provenance of the deficit*: B12 has
essentially no plant source, so the diet **creates** a real shortfall (11-90% biochemically
depleted/deficient by accurate markers, cutoff-driven) -> [[Vitamin B12 Status in Vegetarian and Vegan Diets]]. But it is **structurally weaker than the trio**: the held source (Pawlak 2013) is a
*descriptive prevalence* review with **no patient-important-outcome effect and no omnivore comparator**,
and in the one study that looked, two-thirds were biochemically deficient with **zero clinical symptoms**
— so the repletion *benefit* on a hard endpoint is a **gap**, not a demonstration, and the biochemical
rate is a **surrogate** -> [[Surrogate Outcomes]]. It is repletion-territory (correcting a real dietary
deficit is cheap insurance), not a quantified lower-arm effect like vit-D/iron/iodine
[inferred from @pawlak2013].

**Kept OUT of the `[E-independent]` count, deliberately.** Folate/NTD is **not** a fourth
baseline-status-modification instance — it does not demonstrate a *measured*-deficient-vs-*measured*-replete
interaction on one outcome. It is a different structural flavor (window-gated, stratum-defined, supra-adequate
target), so the three-nutrient E-claim on the *baseline-status-modification principle* is **unchanged**; folate
adds breadth to *what repletion can look like*, not a fourth witness of the trio's specific pattern
[inferred from @deregil2015; @martineau2017; @falkingham2010; @bougma2013].

**Decision-change.** For a **woman planning or capable of pregnancy**, 400 ug/day periconceptional folic acid
(5 mg if higher-risk) is a **real lever on a hard outcome** — it *flips* supplementation for this stratum from
bottom-of-hierarchy (where the general-population disease-prevention null puts it,
-> [[Vitamin and Mineral Supplements for Disease Prevention]]) to a genuine big rock. This is the standing
counter-example to *supplements are a distraction*: for **this** stratum, on **this** outcome, a supplement
clearly works. The population-scale analogue is **folic-acid fortification** of staple foods (delivery vehicle,
not a different exposure) [@deregil2015].

## Guard — this is the REAL dose-response U, not the artifact

Do **not** conflate this status-dependent curve with [[The U-Shaped Association Artifact]]. There, a U in
*observational* data is often manufactured by reverse causation, confounding by frailty, or unequal
reporting precision — an artifact to be checked and usually discounted. Here the U is **causal and
mechanistic**, and its **upper arm** is demonstrated in **RCTs** (Bjelakovic low-bias pool; CARET, stopped
early for harm) — the harm of *too much* is real and randomized, not a reverse-causation artifact. **Both
arms are now RCT-demonstrated, though on different outcomes:** the **lower arm** — benefit of correcting
*too little* — is demonstrated for vitamin D on ARI (Martineau IPD MA, deficient OR 0.30), and the **upper
arm** — harm of *too much* — for antioxidants/beta-carotene on mortality/cancer. So the mechanism's full U
is instantiated across the evidence, not proved as a single traced curve on one endpoint. Same shape,
opposite epistemic status from the artifact — a curve to dose along, not a signal to explain away
[inferred from @martineau2017; @bjelakovic2007; @omenn1996].

## Decision consequence

- **Generally-nourished person.** Supplementation is *enhancement* — the plateau-to-harm arm — so it ranks
  at or near the bottom of the intervention hierarchy, and *megadose* pushes toward the harm arm, not a
  bigger benefit -> [[Layer 1 - Ranking Interventions for a Stratum]].
- **Deficient stratum.** Repletion is a *different* question with a **demonstrated** benefit on
  patient-important outcomes across **three** nutrients now: in the vitamin-D deficient (<25 nmol/L),
  daily/weekly D cut ARI risk with NNT=4 (vs NNT=33 overall, NNT=20 daily/weekly)
  [@martineau2017]; in
  the **anaemic**, iron raised IQ by **+2.5 points** (null in the replete)
  [@falkingham2010]; and repleting
  **iodine-deficient** mothers/children raised child IQ by **+7.4 points** (range 6.9-10.2)
  [@bougma2013] — each a
  decision-change that flips supplementation *for that deficient stratum* from bottom-of-hierarchy to
  a real lever. Each also carries a **support-factor condition** beyond deficiency itself: the exposure
  must be **daily/weekly, not bolus** (vitamin D: bolus null even in the deficient, OR 0.82, 0.51-1.33)
  [@martineau2017], it is
  **outcome-specific** (iron: IQ yes, some functions irrespective), and it is **window-gated** (iodine:
  early pregnancy *d* 0.51 vs late 0.17 — repletion after the fetal-brain window largely fails)
  [@bougma2013]. It still requires
  first **establishing** the deficiency (a prescriber act needing this person's labs, out of the wiki's
  scope). The right move stays *test, then replete the confirmed shortfall with the right schedule, in
  the right window*, not *supplement broadly to prevent disease*.
- **The demarcation, stated once.** An enhancement-null does not read as *the nutrient does not matter* —
  it reads as *more, in the replete, does not help (and past need can harm)* The nutrient can be
  essential and the supplement still worthless for the already-replete; the two claims live on different
  arms and must not be collapsed.



## Gaps

- ~~**No held deficiency-repletion effect size on a patient-important outcome**~~ **CASHED 2026-08-04 by
  Martineau (vitamin D x ARI, deficient OR 0.30, NNT=4).** The lower arm is now quantified for **one**
  nutrient-and-outcome pair, GRADE high. What remains open: a **same-outcome** dose-response for any one
  endpoint (Martineau's ARI benefit and VITAL's fracture/cancer/CVD nulls are different outcomes), and
  repletion effect sizes for **other nutrients**. **Iron -> cognition CASHED 2026-08-04 by Falkingham**
  (anaemic +2.5 IQ points, null in the well-powered replete) — a second nutrient x outcome, and the
  independent backing that lifts the *principle* to `[E-independent]` (above). **Iodine -> child
  mental development CASHED 2026-08-04 by Bougma** (repletion of the deficient +7.4 IQ points, range
  6.9-10.2) — the trio's third independent nutrient, lifting the `[E-independent]` principle to three
  nutrients (see the iodine instance above). Still open: a **same-outcome** dose-response traced from
  deficient edge to plateau for any one endpoint (all three instances read the deficient-benefit leg on
  outcomes their replete-arm evidence does not directly test), and repletion effect sizes for further
  nutrients. `G` further cashed. **Fractures now have BOTH arms named in one source (Kahwati 2018):**
  a direct community-dwelling replete-null and a reported high-risk/deficient benefit (via Cochrane) — the
  closest the fabric holds to a same-outcome two-arm read, though the deficient arm is second-hand
  (Kahwati's citation of Avenell 2014), not a within-review deficient-vs-replete interaction.
- **Threshold locations are per-nutrient and per-outcome and mostly unheld** — where the deficiency edge
  and the toxicity edge sit differs by nutrient (25(OH)D in ng/mL is not beta-carotene in mg), so the curve
  is a *shape* the fabric holds, not a set of numbers. Martineau does locate one edge: the ARI benefit
  concentrates below **25 nmol/L** 25(OH)D, with no significant interaction across the 25/50/75 nmol/L cuts
  above it [@martineau2017].

[inferred from @martineau2017]

## References

---
type: framework
question: For a generally-nourished adult, does supplementing vitamins, minerals, multivitamins, or marine omega-3 prevent cardiovascular disease, cancer, fractures, or death?
aliases: [Dietary Supplements, Multivitamins, Vitamin D Supplementation, Omega-3 Supplements, Fish Oil Supplements, Beta Carotene, Supplements for Prevention, VITAL Trial, Vitamin Supplements]
authors: [Manson, JoAnn E; LeBoff, Meryl S; US Preventive Services Task Force (org); Bjelakovic, Goran; Omenn, Gilbert S; Martineau, Adrian R; Falkingham, Martin; Hooper, Lee; Bougma, Karim; Aboud, Frances E; Harding, Kimberly B; Marquis, Grace S]
sources: [Manson - VITAL Vitamin D 2019, Manson - VITAL Marine Omega-3 2019, LeBoff - VITAL Vitamin D Fractures 2022, USPSTF - Vitamin Mineral Multivitamin Supplements 2022, Bjelakovic - Antioxidant Supplements Mortality 2007, Omenn - CARET Beta Carotene Lung Cancer 1996, Martineau - Vitamin D Respiratory Infections IPD Meta-Analysis 2017, Falkingham - Iron Supplementation Cognition Meta-Analysis 2010, Bougma - Iodine Child Mental Development Meta-Analysis 2013]
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
    - Rating Certainty of Evidence
created: 2026-07-30
updated: 2026-08-04
self_critiqued: 2026-08-04
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

## The one notable non-primary signal — n-3 and myocardial infarction

VITAL's marine n-3 arm carried a **secondary** signal on total MI even as its MACE composite stayed
null (stroke and CV-death were flat) [@manson2019n3]:

> «for total myocardial infarction, 0.72 (95% CI, 0.59 to 0.90)» [@manson2019n3]

**Read it as hypothesis-generating, not a finding**: it is a secondary endpoint with no
multiplicity control, the composite it sits in was null, and a prespecified low-fish-intake subgroup
(MACE HR 0.81) suggests any benefit may be repletion of an inadequate baseline intake rather than a
pharmacologic effect of the pill. A separate exposure — **high-dose (\~4 g/day) prescription EPA in
high-triglyceride statin-treated patients** — is a different question with its own trial evidence, and
does not transport to a general-population 1 g/day capsule. VITAL also notes the n-3 dose ceiling: «The
dose-response curve for most effects plateaus at 1 g or less of n-3 fatty acids per day» [@manson2019n3] — one of the few explicitly located **plateaus** in the
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


## Two boundaries the general-population null does not settle (deliverable-critique, 2026-08-01)

A reasonable surprise (deliverable-critique) - "no multivitamin indication? omega-3 no benefit?" Two
scope limits keep the null honest without overturning it:

- **Multivitamins: USPSTF's verdict is "I - insufficient", not "no benefit".** Insufficient evidence is
  the fourth evidence-state, not a demonstrated null -> [[Deficiency Repletion vs Enhancement]]. Contested
  *positive* signals (a cognition trial; a modest total-cancer signal in male physicians) are a separate
  open question the fabric does not yet hold, flagged for acquisition. "Half-dosing a multivitamin" has no
  evidence base either way.
- **Omega-3: the null is standard-dose (1 g/day) enhancement in a general, replete population.** It does
  NOT transport to high-dose prescription EPA (\~4 g/day) in a high-triglyceride / high-CV-risk stratum -
  a different exposure, dose and stratum (and whose landmark trial carries a contested comparator). That
  stratum question is not held here - flagged for acquisition; the general-population finding stands.



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

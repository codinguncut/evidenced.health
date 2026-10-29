---
type: model
question: Why can one relative effect apply to everyone while the recommendation still differs by group?
aliases: [Relative vs Absolute Effect, Relative vs Absolute Risk, Baseline Risk, Absolute Risk Difference, Relative Risk Constancy, Risk Stratification]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; World Health Organization (org); Scientific Advisory Committee on Nutrition (org); US Preventive Services Task Force (org); Bhatt, Deepak L; Di Giuseppe, Daniela; Wolk, Alicja; Goldberg, Ronald B; Orchard, Trevor J; Crandall, Jill P; Naci, Huseyin; Salcher-Konrad, Maximilian; Dias, Sofia; Ioannidis, John P A; Nong, Kailei; Li, Sheyu; Khan, Sadiya S; Matsushita, Kunihiro; Pittas, Anastassios G; Wormser, David; Di Angelantonio, Emanuele; Danesh, John; Cholesterol Treatment Trialists' Collaboration (org); Ding, Liyi; Luo, Jianfeng; Smith, Daniel M.; Mackey, Marcia J; Fu, Haiqing; Davis, Matthew M.; Hu, Yanping; Rahimi, Kazem; Bidel, Zeinab; Nazarzadeh, Milad; Copland, Emma; Canoy, Dexter; Lonn, Eva M; Bosch, Jackie; Lopez-Jaramillo, Patricio; Zhu, Jun; Liu, Lisheng; Pais, Prem; Blood Pressure Lowering Treatment Trialists Collaboration (org); Sundström, Johan; Arima, Hisatomi; Jackson, Rod; Turnbull, Fiona; Chalmers, John; Wang, Dominic; Wright, James M; Adams, Stephen P; Cundiff, David Keith; Gueyffier, François; Grenet, Guillaume; Ambasta, Anshula; Sherrington, Catherine; Michaleff, Zoe A; Fairhall, Nicola; Paul, Serene Sulyn; Tiedemann, Anne; Whitney, Julie; Cumming, Robert Graham; Herbert, Rob; Close, Jacqueline; Lord, Stephen R.]
sources: [GRADE - Handbook, Rahimi - BP Lowering by Age BPLTTC 2021, WHO - Saturated and Trans Fatty Acid Intake 2023, Naude - Low-Carbohydrate vs Balanced-Carbohydrate 2022, SACN - Carbohydrates and Health 2015, Willett - Nutritional Epidemiology 3e, ESC - CVD Prevention Guidelines 2021, USPSTF - Procedure Manual 2022, Bhatt - REDUCE-IT Icosapent Ethyl 2019, CTT - Statin Intensive LDL Lowering Meta-Analysis 2010, Knowler - Diabetes Prevention Program DPP 2002, Di Giuseppe - Smoking Rheumatoid Arthritis Dose-Response Meta-Analysis 2014, Goldberg - DPPOS Cardiovascular Events 2022, Naci - Exercise vs Antihypertensive Drugs 2019, Nong - Obesity Drugs Comparative Network Meta-Analysis 2026, Khan - PREVENT Equations 2024, Pittas - Vitamin D Type 2 Diabetes IPD 2023, Emerging Risk Factors Collaboration - BMI Abdominal Adiposity Cardiovascular 2011, CTT - Statin Therapy Older People 2019,
  Ding - Warm-Up Programs Sports Injury Prevention Meta-Analysis 2022, Lonn - HOPE-3 BP Lowering 2016, BPLTTC - Blood Pressure Lowering Primary and Secondary Prevention 2021,
  Sundstrom - BP Reduction Mild Hypertension 2015, Wang - Pharmacotherapy Mild Hypertension Cochrane 2025,
  Sherrington - Exercise Falls Prevention Meta-Regression 2017]
cluster: cvd-risk-estimation
nucleus: true
relationships:
  related_to:
    - Certainty of Evidence vs Strength of Recommendation
    - Framing a Decision Question
    - Rating Outcome Importance
    - Semaglutide for Cardiovascular Risk in Obesity
    - Autoimmune Disease and Modifiable Risk
    - Surrogate Outcomes
    - Reading a Confidence Interval
created: 2026-07-25
self_critiqued: 2026-10-28
updated: 2026-10-28
---

## The decomposition

    absolute risk difference  =  relative risk REDUCTION  x  baseline risk
                             =  baseline risk  x  (1 - RR)

(GRADE's own vocabulary: the *relative* effect is a risk ratio, odds ratio or hazard ratio; the
*absolute* effect is, **for dichotomous outcomes**, «the number of fewer or more events» in the
treated group versus control —
§4.2. Multiplying a risk **ratio** by baseline risk gives the treated group's risk, not the
difference; the reduction is what scales.)

The relative effect of an intervention versus a specific comparator "is usually similar across a wide
variety of baseline risks," which is why a single pooled relative estimate across broad
subpopulations is usually legitimate. The **absolute** benefit is that relative *reduction* applied to the
person's own baseline risk, and therefore varies across groups even when the relative effect does
not. [@grade]

## The consequence GRADE draws

> "Recommendations, however, may differ across subgroups of patients at different baseline risk of an
> outcome, **despite there being a single relative risk that applies to all of them**. Thus, guideline
> panels must often define separate questions (and produce separate evidence summaries) for high- and
> low-risk patients." [@grade]

Worked case: warfarin, which carries inconvenience and serious bleeding risk, has a "much stronger"
case in atrial-fibrillation patients at substantial rather than minimal stroke risk — the relative
effect is the same for both. [@grade]

## Intuition

The relative effect is a property of the **intervention**; the absolute effect is a property of the
**intervention applied to this person**. A therapy that removes a third of a risk removes a third of
a large risk and a third of a negligible one. Where the harm rate is roughly constant in absolute
terms, the benefit-harm balance therefore tips with baseline risk even though nothing about the
treatment's potency changed. GRADE states only that "baseline risk (control event rate) can influence
the balance of desirable and undesirable outcomes" [@grade]; it does
not claim harms are baseline-invariant. (**Note what varies in GRADE's warfarin case**: it is
**stroke** risk that differs between patients, with bleeding as the fixed counterweight -- not the
reverse, which is the easier misreading.)
[inferred from @grade]

## Sensitivity

- Most sensitive to **baseline risk**, which usually varies far more across people than the relative
  effect does.
- Insensitive to the relative estimate's precision in the range where baseline risk is very low: a
  tighter confidence interval on the relative effect buys little when the absolute difference is
  small either way.



## Failure modes

- **Reporting relative effects alone.** A relative figure without a baseline is uninterpretable for a
  decision, and reliably reads as larger than the absolute reality.
- **Reading a subgroup difference in absolute benefit as effect modification.** Differing absolute
  benefit across risk strata is the *expected* consequence of constant relative effect — it is
  arithmetic, and requires no interaction claim. Treating it as evidence that the treatment "works
  differently" in a subgroup is a category error, and one that invites unnecessary subgroup analysis.
  [inferred from @grade]
- **Assuming relative constancy without checking.** GRADE's premise is that relative effects are
  *usually* similar across baseline risks; where the underlying biology suggests otherwise, the
  question should have been split instead (see below).

## The prior question: how broadly to define the group

Before pooling, GRADE asks whether pooling is legitimate at all: "for the patients and interventions
defined, the underlying biology should suggest that across the range of patients and interventions it
is plausible that the magnitude of effect on the key outcomes is more or less the same. If that is
not the case the review or guideline will generate misleading estimates for at least some
subpopulations." [@grade]

So there are two distinct reasons a recommendation can differ by group, and they carry different
evidential burdens: **differing baseline risk** (arithmetic; no subgroup claim needed) and **differing
relative effect** (a biological claim requiring its own evidence, and pre-specified where possible —
GRADE's guard is *«a priori specification of subgroup effects»* — the handbook says a priori, not
specifically *in the protocol*). [@grade]

## Decision relevance

- **Always ask for the absolute number at a stated baseline.** It is the only form in which an effect
  can be traded off against a harm, a burden, or another intervention.
- **A large relative effect on a small baseline is a small effect** — and the reverse: a modest
  relative effect can be decisive for someone at high baseline risk. This is why the same finding can
  be immaterial for one person and material for another with no disagreement about the evidence.
- **Stratifying on baseline risk is cheap; stratifying on effect modification is expensive.** The
  first needs prognostic information only; the second needs interaction evidence and is the more
  common source of false positives.



## Refinement — varying absolute effects are NOT inconsistency (chunk 02)

GRADE returns to this when defining the inconsistency downgrade, and draws a consequence the §2.1
passage leaves implicit. Consistency is judged on **relative** measures — "when we refer to
inconsistencies in effect size, we are referring to relative measures (risk ratios and hazard ratios,
which are preferred, or odds ratios)" — precisely because absolute risk differences "tend to vary
widely" across subpopulations while relative reductions "tend to be similar."
[@grade]

Therefore:

> "When easily identifiable patient characteristics confidently permit classifying patients into
> subpopulations at appreciably different risk, absolute differences in outcome between intervention
> and control groups will differ substantially between these subpopulations. This may well warrant
> **differences in recommendations across subpopulations, rather than downgrading the quality of
> evidence for inconsistency** in effect size." [@grade]

That is an explicit routing rule: varying absolute benefit across risk strata is a reason to
**stratify the recommendation**, not a reason to lose confidence in the estimate. Mistaking the first
for the second penalizes a body of evidence for behaving exactly as the arithmetic predicts.

Also recorded there: **direction of effect is not a criterion for inconsistency** — studies pointing
opposite ways are not per se inconsistent; what counts is spread of point estimates, non-overlapping
intervals, and heterogeneity statistics. [@grade]

## Applied — WHO computes absolute effects exactly this way

WHO's 2023 fat guideline states the conversion explicitly in its evidence profiles:

> "absolute effect = 1000 x [event rate x (1 - RR)]" — with the caveat that "the magnitude of
> absolute effect in 'real world' settings **depends on baseline risk, which can vary across
> different populations**."
> [@who2023saturated]

That is this page's decomposition in the source's own hand, with one caution: `event rate` is the
**study** event rate — "in the control group for RCTs and the total cohort for prospective
observational studies" — which WHO then explicitly distinguishes from a reader's real-world baseline
risk. `(1 - RR)` is the relative risk reduction.
[@who2023saturated]
The identity holds, and it confirms that the quantity which travels is the
*ratio*, while the quantity that matters to a person is the *difference*, reconstructed locally from
their own baseline.
**`[BOUNDED 2026-07-28]` — "the ratio travels" holds for a ratio expressed per FIXED natural unit, and
fails for one expressed per standard deviation of a named population's intake**, because that unit is
itself a statistic of that population. See *The per-SD increment bounds this page's central claim*
below. The sentence above is retained as written because it is correct for WHO's per-unit form; it is
not general.

## Loaded with real arguments (2026-07-26)

This page held the machinery and no numbers. WHO's Annex 6 supplies a clean worked case **inside a
single guideline** -- though **not** the clean one this page first claimed, for a reason set out below
the table:

| | SFA -> PUFA trials | SFA -> carbohydrate trials |
|---|---|---|
| Control CVD event rate | **23.8%** | **7.6%** |
| Relative effect (RR) | 0.79 (0.62-1.00) | 0.84 (0.67-1.06) |
| Absolute per 1000 | **50 fewer** | **12 fewer** |

[@who2023saturated]

**The relative effects differ by 0.05. The absolute effects differ by 4x** -- and the arithmetic
decomposes cleanly: the baseline ratio (23.8/7.6 = 3.13x) carries most of the 4.17x absolute gap, the
relative-reduction ratio (0.21/0.16 = 1.31x) the rest.

**This is NOT an instance of route (a), and calling it one was an error.** WHO's evidence profiles 5
and 9 ask *different questions* -- *"What is the effect of replacing some SFA in the diet of adults
with **polyunsaturated fatty acids**?"* and *"...with **carbohydrates**?"* -- both in **adults**, over
disjoint trial sets (n=4 353 vs n=51 232). Two interventions, not one intervention in two populations.
Route (a) requires the *same* intervention across baseline-risk strata; here intervention and baseline
vary together, so the gap cannot be attributed to baseline alone and "none of it requires effect
modification" answers a rival explanation that was never available.

**What the case still shows, which is the arithmetic and not the route:** two similar relative effects
(0.79, 0.84) produce absolute benefits differing four-fold, so a relative effect cannot be ranked
against another without its baseline. That lesson is intact. **A genuine route-(a) illustration is
still owed** -- it needs one intervention, one relative effect, and two baseline-risk strata.
[inferred from @who2023saturated]

**Why this is the trap and not just an illustration:** the two rows sit in the same annex under the
same question, and a reader comparing "50 fewer" against "12 fewer" to rank the two swaps would be
comparing populations, not nutrients. The comparable quantity is the relative effect, and on that
scale the two replacements are much closer than the guideline's presentation suggests.

## Assumed risk for a CONTINUOUS outcome is a range, not a baseline (2026-07-26)

The per-1000 machinery above needs a baseline risk. For a **continuous** outcome there is no such
thing, and Cochrane's device is worth copying: the assumed-risk column becomes *"the range of change
values reported in the balanced-carbohydrate weight-reducing diet groups across the studies"* -- e.g.
comparator arms losing between 11.34 and 2.3 kg, against which a 1.07 kg between-arm difference is read.
[@naude2022]

**The decision consequence is real:** a 1 kg advantage against comparators already losing 2-11 kg is a
marginal adjustment to a working intervention, not a stand-alone effect. Reading the MD without the
comparator's own trajectory makes a small increment look like a whole result.

**A cross-intervention comparison of a continuous outcome misleads unless baselines are matched — Naci's
exercise-vs-drug SBP case `[2026-08-20]`.** SBP reduction is a continuous outcome whose *absolute*
magnitude rises with baseline SBP, so pooling two interventions measured in differently-hypertensive
populations compares unlike quantities. Naci's exercise trials had «mean SBP at baseline ... 132 mmHg»
while drug trials were «consistently over 150 mmHg»
[@naci2019exercise]; the naive all-population contrast
made drugs look «−3.96» mmHg superior. Restricting exercise to the hypertensive (>=140) stratum lifted
its effect from −4.84 to «−8.96» mmHg and erased the gap («0.18, 95% CrI −1.35 to 1.68»)
[@naci2019exercise]. Same continuous-outcome trap as
the weight-loss MD above, one level out: here it is not the comparator's trajectory but the baseline
*level* that must be matched before the between-intervention number means anything. Full magnitudes +
the surrogate/indirectness caveats -> [[Blood Pressure Lowering and Cardiovascular Events]].
[inferred from @naci2019exercise]

## Limits

- The relative-constancy premise is an empirical regularity, not a law, and GRADE states it as
  "usually." Where it fails, the pooled relative estimate is the wrong object and the question needed
  splitting.
- Baseline risk for a specific person is itself estimated from a population model, so it carries its
  own transportability question — the split does not eliminate the transfer problem, it relocates it.
  [inferred from @grade]

## A body that held BOTH halves and never multiplied them `[2026-07-28, SACN revisit]`

The *Failure modes* list above names **reporting relative effects alone**. SACN's carbohydrates review is the worked instance, and it is the sharp version of the failure: **SACN had the
baselines and still did not convert.**

Its effect estimates are relative throughout — «the relative risks for total sugars intake are
presented for each 50g/day increase and for individual sugars for each 20g/day increase as this is
equivalent to one standard deviation of intake», with «330ml/day increase in consumption as this is
equivalent to a standard can of beverage» for SSBs.
[@sacn2015]

**And chapter 4 supplies UK baselines, in the same report, unattached to any effect estimate:**
coronary heart disease «responsible for almost 74,000 deaths each year»; diabetes at «In 2013, 6% of
the UK population, over 3.2 million people»; caries at «In 2012 almost a third (27.9%) of 5-year olds
in England had tooth decay».
[@sacn2015]

**Both factors of the identity at the top of this page are present in one document, and the
multiplication is never performed.** No risk differences, no NNTs, no absolute benefit at a stated
baseline. So the failure is not missing data — it is an unexecuted step, which is a different and more
tractable defect than the usual one.
[inferred from @sacn2015]

### The per-SD increment bounds this page's central claim

The WHO section above closes on the claim that **the ratio is the quantity that transports**
`[BOUNDED here]`. **SACN's effect form is a counter-case that narrows it.**

A relative risk expressed **per one standard deviation of intake in a named population** is not a
population-free quantity. The SD is a property of *UK* intake; the same physiological gradient in a
population with a wider or narrower intake distribution yields a **different number per SD**. So:

| Effect form | Travels across populations? | Why |
|---|---|---|
| RR per **fixed natural unit** (per 50 g/day) | **yes**, subject to the usual transportability caveats | the unit is defined outside any population |
| RR per **1 SD of intake in population P** | **no, not without carrying P's SD** | the unit is itself a statistic of P |

**SACN uses both, and the distinction is invisible in the numbers.** Its 50 g/day and 20 g/day
increments are natural units *chosen because* they approximate one UK SD; the SSB increment (330 mL)
is a natural unit chosen for interpretability instead. **A reader who lifts a per-SD relative risk into
another population has silently changed the exposure contrast**, and the page's existing
route-(a)/route-(b) machinery will not catch it, because nothing about the *ratio* looks wrong.

**Practical rule this adds:** before applying a relative effect, ask what the denominator of the
increment is. *Per gram*, *per serving* and *per SD* are not interchangeable, and only the last one
changes meaning when the population changes.
[inferred from @sacn2015]

**Still owed, and SACN does not supply it:** a genuine route-(a) illustration — one intervention, one
relative effect, two baseline-risk strata. SACN has no such case; it never stratifies its estimates by
baseline risk at all.

## Self-critique `[run 2026-07-28, before commit]`

- **Over-claim check on the per-SD argument.** The claim is that a per-SD relative risk does not
  transport without its SD. **SACN does not say this** — it states the increments and notes their
  SD-equivalence, and the consequence is the wiki's. Tagged. The weaker reading (that SACN simply chose
  interpretable units) is compatible with the text, and the table above is written so both readings
  survive: the distinction is about *what the denominator is*, not about SACN's intent.
- **Absence claim, scoped.** **no risk differences, no NNTs, no absolute benefit** is scoped to what
  this wiki has read of SACN — which is now effectively the full report (chunks 11-13 are the
  bibliography). Recorded on the source page rather than restated as a claim about the literature.
- **Not a route-(a) case, and said so.** The temptation on this page is to treat any new source as
  finally supplying the owed route-(a) illustration. SACN does not, and the owed line is left standing
  rather than quietly satisfied — the same error this page already logged once against WHO Annex 6.
- **Type check: this is F, not E.** SACN refines and bounds a claim the page already held from GRADE;
  it does not independently reach it. No `[E-independent]`.
- **Residual:** the never-multiplied observation is an inference from absence-of-a-step. If SACN
  performs the conversion anywhere in the annexes read at chunk 10, this would be wrong — the targeted
  chunk-10 read covered intake tables, and no absolute-effect table was found there.

## Route (a) restated from genetics — and it still does not settle the owed illustration `[2026-07-28, Willett ch.14]`

The five-route table in the telos separates **route (a)** (baseline risk; no subgroup claim needed)
from **route (b)** (effect modification; needs positive interaction evidence). **Willett's genetics
chapter states route (a)'s logic from a different field, and draws the practical consequence GRADE
does not:**

> «The lack of a statistically significant interaction does not mean the genetic stratification is of
> no value, because the effect of diet in a high-risk subgroup can be of great importance even when
> there is no formal statistical interaction, or even if the relative risk (but not the absolute
> excess risk) is identical in all genotypes.»
> [@willett]

**The parenthetical is the whole content: identical relative risk, different absolute excess risk.**
That is this page's decomposition, arrived at through gene-diet interaction testing rather than through
guideline methodology.

**The consequence Willett draws, which is genuinely additional:** a null interaction test is routinely
read as *"stratification adds nothing here"*. **It does not license that.** Where a subgroup carries
higher baseline risk, its absolute benefit differs even with a constant relative effect, so **the
stratification can matter while the interaction test is correctly null.** And he immediately supplies
the power reason it will often be null regardless — «adequate power for tests of interaction usually
require at least four times the sample size as do tests for main effects (Smith and Day, 1984)».
**A null interaction test in a study powered for main effects is close to uninformative.**
[@willett]

**This does NOT discharge the route-(a) illustration this page owes.** That debt needs *numbers* — one
intervention, one relative effect, two stated baseline risks, two absolute effects. **Willett states
the principle and gives no such worked case here**, so the owed line stands. Recording this explicitly
because the page has already logged one instance of prematurely treating the debt as satisfied.

**Type: F, not E.** Willett refines a claim the page already held from GRADE — the refinement being the
null-interaction-test consequence and its power basis — rather than independently reaching it. No
`[E-independent]`.

## Route (a) with its practical consequence, from a cardiology guideline `[2026-07-28, ESC]`

> «The absolute benefit of lowering LDL-C depends on the absolute risk of ASCVD and the absolute
> reduction in LDL-C, so even a small absolute reduction in LDL-C may be beneficial in a high- or
> very-high-risk patient.»
> [@esc2021]

**This is this page's decomposition stated by a guideline, with the consequence attached** — and the
consequence is the half that usually goes missing. The arithmetic (absolute benefit = relative
reduction x baseline risk) is inert until someone draws the inference that **a small intervention can
be worth doing in a high-risk person and not worth doing in a low-risk one**, which is what licenses
stratifying a recommendation without any subgroup claim.

**Paired with the sentence above it in ESC**, the two attributes are precisely the relative/absolute
split: the *relative* reduction is «proportional to the absolute size of the change in LDL-C,
irrespective of the drug(s)» — i.e. **constant across interventions** — while the *absolute* benefit
varies with baseline risk. **Constant relative effect, varying absolute effect: route (a), in one
guideline's own two bullets.**

**Does this discharge the owed route-(a) illustration? Partly, and the shortfall is specific.** The
debt as written needs *one intervention, one relative effect, two stated baseline risks, two absolute
effects*. **ESC supplies the first two and the principle, but names no two strata with numbers here** —
«a high- or very-high-risk patient» is a category, not a baseline risk. **So the debt stands, narrowed:
what is still missing is a worked pair of numbers, and this page's own
[[SCORE2 Baseline Risk and the ESC Treatment Thresholds]] holds the baseline-risk grid that could
supply them.** That conversion is now a small, well-defined job rather than an open search.

**Type: F.** ESC refines a claim the page already held from GRADE by attaching the practical
consequence; it does not independently establish the decomposition. No `[E-independent]`.

## A guideline body that makes ARR-over-RRR a stated rule `[2026-07-31, USPSTF]`

The *Failure modes* list names **reporting relative effects alone** as the core defect. USPSTF codifies
the opposite as policy:

> «The Task Force examines both relative risk reduction (RRR) and absolute risk reduction (ARR) from
> intervention studies. It generally prioritizes ARR over RRR. That is, it places less emphasis on a
> large RRR in situations of low ARR; it remains interested in an intervention with a low RRR if its ARR
> is high. Even a low ARR may be important for critical outcomes (e.g., mortality).»
> [@uspstfmanual2022]

**This is not just a preference — the absolute frame is structural to USPSTF's whole instrument.** Its
graded quantity is *net benefit* «as implemented in a general primary care population», an absolute
per-1000-persons figure; its outcomes tables are standardized «per 1,000 persons targeted», 10-year
horizon, with NNT/NNS/NNH «in outcome terms»; and «The absolute benefit from a service is often greater
for persons at increased risk than for those at lower risk». So this page's decomposition is not merely
endorsed by USPSTF — it is the load-bearing arithmetic of the recommendation grid.
-> [[Net Benefit and the USPSTF Recommendation Grid]]
[@uspstfmanual2022]

**A device worth stealing — the conceptual confidence interval.** Where direct evidence is thin, USPSTF
places «conceptual upper or lower bounds on the magnitude of benefit»: a trial in high-risk male smokers
run by expert centres is treated as the *upper bound* for a general population, and extrapolation to
lower-risk groups sets a *lower bound*. That is baseline-risk reasoning used to **bound** an absolute
effect qualitatively when the numbers to compute it are missing — a partial answer to the owed route-(a)
illustration, though still not a worked pair of numbers.
[@uspstfmanual2022] [inferred from @uspstfmanual2022]

## A worked pair of numbers, at last — REDUCE-IT's two risk strata `[2026-08-04, Bhatt]`

The debt above («one intervention, one relative effect, two stated baseline risks, two absolute effects»)
is finally supplied *inside a single trial*, by REDUCE-IT's two prespecified risk strata. One
intervention (icosapent ethyl 4 g/day), same 4.9-y horizon, primary composite:

| Stratum | Baseline risk (placebo event rate) | Relative effect (HR) | Absolute effect (ARR) | NNT |
|---|---|---|---|---|
| **Secondary prevention** (established CVD) | **25.5%** (738/2893) | 0.73 (0.65-0.81) | **6.2 pp** | **\~16** |
| **Primary prevention** (DM + risk factor) | **13.6%** (163/1197) | 0.88 (0.70-1.10) | **1.4 pp** | **\~71** |

[@bhatt2019] — event rates and HRs are from the primary
subgroup forest; the ARR and NNT are computed from the two event rates
[inferred from @bhatt2019].

**The decision consequence made concrete:** the same drug, same dose, is worth an NNT of \~16 in the
higher-risk arm and \~71 in the lower-risk arm — a \~4-fold swing in absolute value driven by baseline risk,
which is exactly the inference the ESC and USPSTF sections state in principle.

**But this is NOT a clean route-(a) isolation, and saying so is the honest reading `[the page has twice
logged the error of declaring this debt prematurely discharged].`** Under a *constant* relative effect
(HR 0.75), the lower-risk arm's ARR should be \~3.4 pp (13.6% × 0.25), not the observed 1.4 pp — because
the primary-prevention **point-estimate HR is attenuated to 0.88** (CI crosses 1). So the 4-fold ARR swing
blends route (a) (baseline risk, \~1.9-fold on its own) with a *possible* route-(b) relative-effect
modification. **The interaction test cannot resolve which:** P for the risk-stratum interaction is 0.14
(non-significant), so the trial licenses treating the relative effect as constant while *not excluding*
attenuation. **Read it as the worked pair the page owed, with the caveat that one trial's subgroups cannot
separate route (a) from route (b) when the interaction is underpowered** — the very reason route (b)
demands positive interaction evidence, which 0.14 is not. [inferred from @bhatt2019]

**The complement — a WELL-powered effect-modification search that came up empty (Coley 2025).** Where
REDUCE-IT is one underpowered trial, the multidomain-dementia responder question was tested on a **pooled
IPD of two trials (n=5205, 486 dementia cases)** plus a data-driven recursive-partitioning search free to
combine all factors — and found **no responder subgroup** (overall HR 0.98, null in every one of 11
pre-specified subgroups) -> [[Multidomain Lifestyle Intervention and Cognitive Decline]]. This is the
route-(b) demand met with a *clean, well-powered ABSENCE*: the positive interaction evidence a subgroup
claim needs was not merely missing, it was **searched for with power and not found** — the opposite failure
mode from REDUCE-IT (underpowered, so uninformative). It is also the corpus's first worked *test* of the
telos's over-personalization prior (that over-personalization is the likelier failure than
under-personalization): a data point **supporting** it — the responders the personalized story needs do not
exist here. Contrast the genuine route-(b) positives held elsewhere (age × step-count; deficiency ×
repletion) — effect-modification is real *sometimes*, and the discipline is that it must be *shown*, not
assumed, in either direction.
[inferred from @coley2025]

<div class="recent-update" data-last-updated="2026-10-27">

## The cleanest route-(a) case the corpus holds — CTT across every stratum `[2026-08-05, CTT]`

REDUCE-IT supplied the owed *pair* of numbers but blended route (a) with possible route (b) (the low-risk
arm attenuated). CTT 2010 supplies the cleaner article: **one relative effect held constant across many
baseline-risk strata whose control event rates differ substantially** — the textbook route-(a) picture with
no attenuation to explain away. Per 1.0 mmol/L LDL-C reduction, first major vascular events fell by about a
fifth «in each subgroup examined» even though «the annual event rates in control groups» differed
substantially «according to participants' medical history»
[@ctt2010]. Figure 3's strata —
prior-CHD vs none, diabetes, age (incl. >75), BP, BMI, HDL tertile, smoking, renal function — all sit
at HR \~0.77-0.84 with no material heterogeneity across the baseline-risk strata (a nominal sex difference
aside, p=0.04, which the paper does not emphasise), and the effect is constant across baseline LDL too
(«the RR per 1·0 mmol/L further reduction ... did not depend on the baseline LDL cholesterol concentration»).

**Why this is the clean illustration and REDUCE-IT was not:** here the relative effect is *demonstrated*
constant (26-trial IPD, no heterogeneity), so the differing absolute benefit across strata is pure route-(a)
arithmetic — the primary-prevention subgroup (no prior vascular disease, lower baseline risk) keeps the same
25%-per-mmol relative effect, its *absolute* benefit simply smaller because its baseline is lower. This is
exactly the split: constant relative effect, absolute benefit tracking baseline risk, no subgroup claim
needed. The consequence for the statin decision is worked on [[Statins for Primary Prevention and the Power of Zero CAC]]
and [[LDL Lowering and Cardiovascular Events]].
[inferred from @ctt2010]

### Age split — route (a) mostly survives, one cell is undecided, and trial mix can mimic route (b) `[2026-10-06, CTT 2019]`

The 2010 constancy across *age (incl. >75)* was one pooled line. CTT 2019 re-ran the analysis by six age
groups (28 trials, 186,854 people, 14,483 >75 at entry; 2010's trials nested inside plus CORONA and HOPE-3, so this
is a **type-F refinement by the same collaboration, not independent backing**). Per 1.0 mmol/L, MVE RR ran
0.75, 0.80, 0.80, 0.76, 0.81 and **0.87 (99% CI 0.77-0.99) at >75**: «Although proportional reductions in
major vascular events diminished slightly with age, this trend was not statistically significant
(ptrend=0·06).» [@ctt2019] Three findings sit under
that headline.

**1. Two age trends weakened once the heart-failure and dialysis trials were removed, which fits confounding by trial mix.** Statins did little in the two
heart-failure and two dialysis trials (MVE RR 0.95 and 0.95, vs 0.77 in all other trials, heterogeneity
p<0.0001), and those trials were concentrated in the old: 20% of the >75 group came from the HF trials
vs 4% of those <=75 [@ctt2019]. The authors flag it: «A dispro­portionate number of patients with heart failure or dialysis were in the older age groups of our overall meta-analysis population, which could confound comparisons between the effects of statin therapy by age.» [@ctt2019]
Excluding those four trials, the MVE age trend went from p=0.06 to p=0.3 and the >75 RR from 0.87 to 0.82
(99% CI 0.70-0.95); for vascular death the trend went from p=0.004 to p=0.2 [@ctt2019].
The authors present these exclusion analyses as exploratory, and the overall MVE trend was never significant to begin with. Two
other trends did **not** weaken: major coronary events (0.009, then 0.01) and MVE in primary prevention (0.05, then 0.03).
[@ctt2019]
The general lesson for route (b), as a heuristic: **a subgroup trend across a pooled trial set can be a trend in which
trials feed which subgroup.** When a support factor that kills the effect (here, advanced heart or kidney
failure) is unevenly distributed across the levels of the candidate modifier, the pooled trend
attributes to age what belongs to the support factor. Check the subgroup's trial composition before
reading a trend as effect modification. The same paper shows the check cuts both ways: it weakened two
trends and left two standing, so trial mix is a thing to test, not a default explanation.

**2. Secondary prevention stays route (a) at every age.** With known vascular disease the >75 RR was
0.85 (99% CI 0.73-0.98) and the age trend p=0.2, p=0.9 after the exclusion [@ctt2019].
Same relative effect, higher absolute risk with age: the arithmetic this page describes.

**3. Primary prevention in the oldest is a route-(b) candidate that does not meet the bar.** Without
known vascular disease the RR was 0.84 (99% CI 0.70-1.01) at 71-75 and **0.92 (99% CI 0.73-1.16) at >75**, on 295 vs
308 events; age trend p=0.05, and 0.03 after the HF/dialysis exclusion [@ctt2019].
All age-subgroup intervals in this section (0.82, 0.85, 0.84, 0.92) are **99% CIs**: per the paper's
methods, «all other RRs are presented with 99% CIs» (beyond its headline summary estimates) [@ctt2019].
(corrected 2026-10-06: CI level unlabelled -> 99%.)
Against the bar for route (b) (positive interaction evidence): this candidate **passed** the HF/dialysis
trial-mix check (other trial-composition confounding is untested; no adjusted trend is reported for this
arm). Where it falls short is precision. The trend p is nominal and is one of
many subgroup tests (the paper reports subgroup results with 99% CIs to allow for that); the >75 CI is consistent both with the all-age 0.75 and with no
effect; and the authors themselves say «there were too few such older participants for reliable
assessment in that group alone» [@ctt2019]. So
effect modification is **not established, and not excluded**. The cell is in the insufficient-evidence
state. Route (a) cannot be applied to it with the confidence of the secondary-prevention cell either,
because the constant-relative-effect premise is exactly what the cell cannot confirm.

**The other surviving trend is on coronary events.** Major coronary events showed ptrend=0.009 (0.69 at <=55
to 0.82 at >75), surviving the HF/dialysis exclusion. In the Discussion the authors write «The reasons
underlying this trend are unclear.»; in the Research-in-context panel they state «However, as the
absolute risk of these events was higher in older people, the absolute benefits were similar to, if not
greater than, those at younger ages.» [@ctt2019]
This is the split in miniature: a smaller relative effect on a larger baseline can still be an equal or
larger absolute effect. But that absolute statement leans on the trials' own event rates, which the next
paragraph shows CTT treats as unrepresentative, so read it as conditional on the older person's real
baseline risk.

**Absolute numbers are modelled, not counted.** CTT declined to read absolute benefit off trial event
rates: «Therefore, we have not produced estimates of the absolute effects of statin therapy directly
from the numbers of events observed in these trials.» Its worked example (63 vs 78 years, projected
2.5% vs 4.0% MVE per year in primary prevention, giving \~50 vs \~80 avoided per 10,000 per year per
mmol/L) is route (a) arithmetic applied to the cell where route (a) is least certain. [@ctt2019]
Statin decision consequences: [[Statins for Primary Prevention and the Power of Zero CAC]].

### Age split, second lever — BP-lowering by age band `[2026-10-27, Rahimi]`

The BPLTTC collaboration re-cut its dataset by age at entry (51 trials, 358,707 people, prior heart failure
excluded). Per 5 mmHg SBP reduction, major CV events: «0·82 (95% CI 0·76--0·88) in individuals younger than
55 years, 0·91 (0·88--0·95) in those aged 55--64 years, 0·91 (0·88--0·95) in those aged 65--74 years, 0·91
(0·87--0·96) in those aged 75--84 years, and 0·99 (0·87--1·12) in those aged 85 years and older (adjusted
p-interaction=0·050).» [@rahimi2021bpage]
Absolute reductions were larger in older bands (adjusted p-interaction 0.024). The authors report these
trial-derived absolute effects but restrict them: «More appropriately, such estimates are to be derived
from the combination of proportional effects in our study and absolute risks taken from contemporary
patient registries.» and «Thus, our analyses of absolute risk differences are only useful for internal
comparisons of effect sizes across strata.» The «More appropriately» sentence is this page's method,
stated by the source. [@rahimi2021bpage]

**Read by route.** From 55 to 84 the relative-effect point estimate is the same (0.91) in every band and the absolute benefit grows with risk:
route (a), the arithmetic of this page. Both ends depart from 0.91, and the single adjusted interaction p
of 0.050 covers both; the Results: «For the primary outcome of major cardiovascular events, we found
evidence for heterogeneous treatment effects by age, with a pattern consistent with a greater relative risk
reduction in the youngest age group and smaller effects with wider CIs in those aged 85 or older at
baseline (adjusted p-interaction=0·050).» The <55 interval
excludes 0.91 and the >=85 one contains it, so the young end probably carries more of the signal
. The authors say the trend may be chance:
«With a p-interaction of 0·05 for the primary outcome and the absence of any meaningful interaction by age
for ischaemic heart disease and heart failure, a chance finding cannot be ruled out.» They also keep the
other reading open (interaction tests are conservative; shorter treatment, longer prior exposure and
clustered risk factors could attenuate a real effect) [@rahimi2021bpage].
Neither end meets the route-(b) bar, so modification is **not established and not excluded** at either
end: the insufficient-evidence state, as for CTT's primary-prevention >75 cell above. Absent positive
interaction evidence, plan on the 55-84 relative effect (\~0.91) with wider uncertainty: at >=85 the band's
own 0.99 (0.87-1.12, about 1000 events over a median 2.8 years [@rahimi2021bpage])
can neither confirm nor overturn \~0.91,
and its interval runs from benefit to modest harm; at <55 the band's 0.82 suggests that default may
understate the benefit, so absolute benefit may be somewhat larger than route-(a) arithmetic on 0.91
gives; at >=85 the band's 0.99 points the other way, so absolute benefit there may be smaller than
route-(a) arithmetic on 0.91 gives.

**Trial-mix check, the one the CTT subsection above prescribes: partial.** Prior heart failure was
excluded at participant level, which removes one of the two support factors that could have confounded CTT's
age trend (dialysis is not mentioned in the held text [searched: dialysis across chunks 01-02], and chronic
kidney disease runs at 16-19% in every band, Table 1), and an
unstandardised sensitivity analysis stratified by trial design was «broadly similar to the main results,
both overall (appendix p 11) and when stratified by the three types of trial designs included (appendix p
7).» [@rahimi2021bpage] No by-trial composition of
the age bands is reported in the held text, and follow-up falls from 4.5 to 2.8 years across the bands, so
a trial-mix contribution to the age signal is untested beyond the trial-design level.

**A second modifier tested within the pool and not found.** Inside every age band, baseline SBP showed no
evidence of modifying the relative effect (all adjusted p-interaction >0.070; 1.00 at >=85), down to <120
mmHg [@rahimi2021bpage]; at >=85 the test had little
power (121 people below 120 mmHg, Table 1). A prespecified, multiplicity-adjusted interaction test in a
one-stage IPD pool is a design the route-(b) rule accepts, for an absence as for a positive; it is weaker
than a within-trial test or the Pittas-type mechanism-plus-negative-control design below, and a trial-mix
contribution untested beyond the trial-design level remains a residual caveat. Here it
found no evidence of modification by baseline BP and a borderline signal for age.

**Parameter table — CTT 2019 (statins) against Rahimi 2021 (BP drugs), oldest bands.**

| Parameter | CTT 2019 | Rahimi 2021 | Same quantity? |
|---|---|---|---|
| Oldest band | >75 at entry | >=85 at entry (75-84 also reported) | **NO** — different cut-points |
| Effect unit | RR per 1.0 mmol/L LDL-C | HR per 5 mmHg SBP | **NO** — different exposures |
| Interval | 99% CI for subgroups | 95% CI | convertible; a reporting convention, not a quantity mismatch |
| Age test | trend p, nominal (0.06 MVE; 0.05 primary prevention) | interaction p across 5 bands, Hommel-adjusted (0.050) | **NO** |
| Heart failure | HF and dialysis trials included; could confound the age trend (two trends weakened on exclusion) | participants with prior HF excluded | **NO** |
| Absolute effects | declined to produce them from trial events; modelled | reported from trial events, for internal comparison only; direct use to come from relative effect x registry risk | yes on method — both derive absolute benefit from the relative effect x an external baseline |
| Outcome | major vascular events («major coronary events, strokes, and coronary revascularisations») | major CV events (stroke, MI or IHD, heart failure causing death or admission) | **NO** — different composites |
| Insufficient cell | primary prevention >75 only (whole >75 band: significant benefit) | whole >=85 band, mixed prevention | **NO** — different strata |

[@ctt2019] [@rahimi2021bpage]

CTT's whole >75 band did benefit: «We observed a significant reduction in major vascular events in all age
groups.» [@ctt2019] Its nearer match in Rahimi is the
75-84 band (0.91, 0.87-0.96), which also benefits. Six of eight rows read NO; the other two are a reporting
convention and a shared method for absolute effects. So the two are **not compared as estimates** and no tension is filed. The
resemblance (a similar relative point estimate over most of the age range: CTT's MVE 0.75-0.81 to 75, Rahimi's
0.91 in each band across 55-84; an imprecise oldest or oldest-primary-prevention cell; caution on trial-derived
absolute effects) is recorded as an observed parallel and not scored as a value type. Its features are what small
oldest-band samples and a shared methods stance would produce, and its insufficient cells are not the same
stratum. It is not type-E: the sources make different claims about different drugs, and the
collaborations overlap (C Baigent and R Collins are CTT authors and listed BPLTTC members)
[inferred from @ctt2019; @rahimi2021bpage].
The decision consequence for BP-lowering: from 55 to 84, age works through baseline risk; at the ends
modification is not established and not excluded, so plan on \~0.91 with wider uncertainty, noting that
at <55 this may understate the benefit and at >=85 it may overstate it, and the >=85 band cannot tell
whether it does. BP decision consequences: [[Blood Pressure Lowering and Cardiovascular Events]] (*By age*).

</div>

## A worked route-(b) POSITIVE, beside a broadly-constant arm, in ONE trial — DPP `[2026-08-07, Knowler]`

The five-route table calls route (b) (effect modification) «the false-positive generator» and demands
*positive interaction evidence*, not mechanistic plausibility. **DPP supplies a clean positive — and, in
the same trial, a second arm that behaves the route-(a) way — so the two routes can be read side by side on
one page of results** -> [[Lifestyle vs Metformin for Diabetes Prevention]].

Two interventions (metformin, intensive lifestyle) vs placebo, prediabetic adults, diabetes incidence,
prespecified heterogeneity tests:

| Arm | Across BMI / fasting-glucose strata | Route |
|---|---|---|
| **Metformin** | relative effect **modified**: reduction 3% (BMI<30) -> 53% (BMI>=35); 15% (FPG 95-109) -> 48% (FPG 110-125), significant heterogeneity | **(b) — genuine effect modification** |
| **Lifestyle** | «highly effective in all subgroups», not differing by sex/ethnicity/age (one modifier: stronger at lower post-load glucose) | \~(a) — broadly constant, recommend across strata |

[@knowler2002]

**Why this is a genuine route-(b) positive and not the arithmetic mirage the *Failure modes* list warns
about.** The mirage is reading a *differing absolute benefit* (constant RR x differing baseline) as
effect modification. DPP is not that: the **relative** reduction from metformin itself changes across strata
(3% vs 53%), with a significant prespecified heterogeneity test — «The effect of metformin was less with a
lower body-mass index or a lower fasting glucose concentration than with higher values for those
variables. Neither interaction was explained by the other variable or by age.» That is a modified *ratio*,
which is the thing route (b) requires and route (a) cannot produce. The decision consequence is real and
opposite for the two arms: metformin is **worth prescribing selectively** (near-null in the lean /
near-normal-fasting), lifestyle **broadly**.

**This does NOT discharge the owed route-(a) numeric illustration** (CTT already did). DPP's *lifestyle*
arm is only *approximately* route (a) — it too carries one significant modifier (post-load glucose), so it
is not a clean constant-RR case. The value here is the **paired contrast**: one trial demonstrating that
whether stratification needs a subgroup claim depends on the *intervention*, not just the population —
metformin's relative effect is modified, lifestyle's essentially is not.
[inferred from @knowler2002]

**Refinement — the route-(b) modification is OUTCOME-SPECIFIC, not a fixed property of the drug.** The
metformin heterogeneity above is on the **diabetes-incidence** outcome. When the *same* trial group
followed the *same* three arms 21 years for **cardiovascular events** (DPPOS), the prespecified subgroup
tests «showed no significant heterogeneity by age, sex, race/ ethnicity, or diabetes development for either
metformin or lifestyle» — and both arms were null on events overall (metformin HR 1.03, lifestyle HR 1.14)
-> [[Lifestyle vs Metformin for Diabetes Prevention]]. Note the CV subgroup panel differs from the
incidence one — DPPOS tested age/sex/race/diabetes-status, not the BMI/fasting-glucose axes that carried
metformin's incidence heterogeneity — so this is **not** the same modifier retested and found null; it is
that on the CV outcome the drug had **no overall effect to modify** and no heterogeneity on the axes
examined. The lesson is still the discipline: a route-(b) selective-benefit story earned on one outcome
(diabetes onset) does **not** carry to another outcome (CV events) in the same people — route (b) must be
established **per outcome**, exactly as a dose-response shape is (the outcome-specificity seen for the ESC
fruit/veg plateau). [@goldberg2022]
[inferred from @goldberg2022]

## A route-(b) positive whose modifier is NOT a targetable stratum — smoking->RA by serotype `[2026-08-09, Di Giuseppe]`

DPP and the step-count/age case establish route (b) with modifiers that are **pre-exposure person-strata**
(BMI, fasting glucose, age) — you can place a person in them *before* deciding. Di Giuseppe's smoking->RA
meta-analysis adds a genuine route-(b) positive that breaks that assumption, and the break is the lesson.

The relative effect of pack-years on RA differs by rheumatoid-factor serotype: highest-vs-lowest category
RR «2.47 (95% CI 2.02 to 3.02; Pheterogeneity = 0.88), while it was 1.58 (95% CI 1.15 to 2.18,
Pheterogeneity = 0.39) among RF-negative cases. These estimates were statistically significantly different
(P-value 0.022)»
[@digiuseppe2014smoking]. A
**modified ratio** with a significant heterogeneity test — route (b), not the route-(a) arithmetic mirage
the *Failure modes* list warns about.

**But RF serotype is a subphenotype of the OUTCOME, measured at RA diagnosis — not a stratum you can put a
person in beforehand.** So this is genuine effect modification that supplies **no actionable person-level
stratifier**: nobody knows which serotype of RA they would develop. Its value is **etiologic** — it
strengthens the causal reading (smoking drives specifically the seropositive, HLA-shared-epitope path, via
citrullination) — not **prescriptive**. This is the distinction the page did not previously hold: a positive
interaction test licenses a *causal/mechanistic* claim about which disease-path an exposure drives, which is
distinct from licensing a *targeting* decision; the five-route table's route (b) silently assumes the
modifier is knowable pre-exposure, and an outcome-subphenotype modifier satisfies the statistics while
failing that assumption. (RF-negative rests on only 2 studies, so the contrast is also imprecise.)
[inferred from @digiuseppe2014smoking]

**Type: F.** Refines the page's route-(b) treatment by adding a distinction (modifier-as-outcome-subphenotype)
it did not carry; it does not independently reach the decomposition. No `[E-independent]`.
Full estimate + mechanism live on [[Autoimmune Disease and Modifiable Risk]].

## A route-(b) positive backed by a mechanism AND an internal negative control — vitamin D by BMI `[2026-09-04, Pittas]`

DPP and Di Giuseppe establish route (b) with a heterogeneity test alone. Pittas' vitamin-D IPD-MA in
prediabetes adds the strongest *design* for a route-(b) positive the corpus holds: a modified ratio, a
**pre-stated mechanism**, AND an **internal negative control** built into the same meta-analysis.

Among prediabetic adults, cholecalciferol «reduced risk for diabetes in participants with a baseline BMI
below the median of 31.3 kg/m2 but not in those with a BMI at or above the median (hazard ratios, 0.74
[CI, 0.60 to 0.90] and 1.01 [CI, 0.84 to 1.22], respectively; P for interaction= 0.023). In contrast, in
the trial that used eldecalcitol, an active analogue of vitamin D that does not require hydroxylation by
CYP2R1, there was no effect modiﬁca- tion by baseline BMI (P for interaction= 0.82).»
[@pittas2023vitamindipd]

**Why the negative control is what raises this above a bare interaction test.** The mechanism is
pre-stated — «obesity represses vitamin D bioactivation by CYP2R1 ... leading to reduced production of
25-hydroxyvitamin D, and that weight loss upregulates CYP2R1 expression»
[@pittas2023vitamindipd] — so the *pro-drug* cholecalciferol
(needs CYP2R1) should fail in the obese while the *active analogue* eldecalcitol (bypasses CYP2R1) should
not. The eldecalcitol null-interaction is that prediction realized: the modifier vanishes precisely when
the named mechanism is bypassed. A route-(b) positive plus a mechanism-derived negative control is much
stronger evidence of true effect modification than a lone significant P-interaction — the kind the
*Failure modes* list distrusts. And unlike Di Giuseppe's serotype modifier, BMI is a **pre-exposure
targetable stratum**, so this is *actionable* route (b): cholecalciferol is the leaner prediabetic's
lever, while the obese need weight loss (which upregulates CYP2R1) or an active analogue.

**One honesty bound.** The primary prespecified subgroup panel over all three trials found the effect
«did not differ in prespeciﬁed subgroups»
[@pittas2023vitamindipd]; the BMI interaction is specific to the
two cholecalciferol trials — a planned, mechanism-driven subset, not the pooled panel.

**A data point running AGAINST the standing `[PRIOR — over-personalization is the likelier failure]`,
lodged not scored.** Where Coley, Nong and Khan above all supplied route-(b) *absences* (personalization
adding little), Pittas is a genuine route-(b) *positive* where personalizing on a cheap pre-exposure marker
changes the lever choice. Reported precisely because the recent corpus points ran the other way —
symmetric reporting, with the adjudication left to the prior's own operation.

**Type: F.** Refines the page's route-(b) treatment by adding the mechanism-plus-negative-control design;
does not independently reach the decomposition. No `[E-independent]`. Full estimate, safety, and the
Layer-1 sizing -> [[Vitamin and Mineral Supplements for Disease Prevention]].

## A class-wide effect-modification search that came up empty — obesity drugs `[2026-08-22, Nong]`

Beside Coley's well-powered dementia null sits a second route-(b)-absence data point, on a different
exposure class. Nong's network meta-analysis of 262 obesity-drug RCTs (99 791 participants) ran
prespecified subgroup analyses across **baseline obesity severity, type-2-diabetes status, and
body-composition method**, plus post-hoc **baseline CVD** and **follow-up timeframe**, with credibility
graded by ICEMAN — and «We did not find other credible subgroup effects with at least moderate
credibility» beyond a duration effect (longer trials -> more weight loss, which is not a patient
characteristic) [@nong2026obesity]. So
the whole drug-class ranking is **route (a)**: relative effects consistent across strata, absolute
benefit scaling with baseline CV/kidney risk — which is exactly why the source concludes prioritise
«those at high risk of cardiovascular or kidney complications»
[@nong2026obesity]. A route-(b) data
point toward the standing `[PRIOR — over-personalization is the likelier failure]`, **lodged not scored**
(the prior is adjudicated in its own operation). One honesty bound the source states: absence of
individual-participant data «precluded more credible exploration of treatment effects across key
subgroups, including age, sex, and comorbidity burden»
[@nong2026obesity] — *no credible
modification found*, not *modification excluded*. Full comparative appraisal -> [[Comparing Obesity Drugs]].
[inferred from @nong2026obesity]

## A prognostic-model version of the same absence — PREVENT's CKM add-ons `[2026-08-27, Khan]`

Coley and Nong are *trial-subgroup* absences (a searched-for effect-modifier not found). Khan's AHA
PREVENT risk-model derivation supplies a **prognostic** cousin: adding more person-level predictors to
a baseline-risk instrument barely improves it. Beyond the base equation (traditional factors + eGFR),
the optional kidney/metabolic/social predictors gave only «minimal ... statistically significant»
discrimination gains (delta-C \~0.004-0.005 for urine albumin, HbA1c and social-deprivation index
combined), improving **calibration** in just one narrow stratum — marked albuminuria (UACR >300 mg/g)
[@khan2024]. This is not a treatment-effect-modification test
(it is prediction, not a relative effect), so it does not *directly* score route (b); but it points the
same way — **more personalization inputs, almost no decision-relevant gain** — a data point toward the
standing `[PRIOR — over-personalization is the likelier failure]`, lodged not scored. Full instrument
differential (race removal, the PCE \~50% overprediction, the 10-/30-year split)
-> [[SCORE2 Baseline Risk and the ESC Treatment Thresholds]].
[inferred from @khan2024]

## A second prognostic-add-on absence — adiposity measures over a risk model `[2026-09-04, ERFC]`

Beside Khan's PREVENT, ERFC 2011 is the same prognostic absence on a different predictor class. In an
IPD pool of 58 prospective cohorts (221 934 people, 14 297 CVD events), adding BMI, waist circumference
or waist-to-hip ratio to a model already holding blood pressure, diabetes and lipids changed
discrimination by essentially nothing (C-index changes -0.0001, -0.0001, +0.0008) and net
reclassification by -0.19% / -0.05% / -0.05% [@erfc2011whr]. The review's own conclusion: «simple adiposity
measures provide little or no additional information on cardiovascular risk» once conventional factors
are known [@erfc2011whr]. Like Khan, this is
prediction, not a relative-effect-modification test, so it does not *directly* score route (b) — but it
points the same way: an extra person-level input adds almost no decision-relevant discrimination, a data
point toward the standing `[PRIOR — over-personalization is the likelier failure]`, lodged not scored.
Two mechanistic reasons the add-on is redundant, both stated by ERFC: adiposity acts *through* the
factors already in the model (excess adiposity is «a major determinant of the intermediate risk
factors»), and adiposity is the *noisier* input (WHR regression-dilution ratio 0.63 vs 0.95 for BMI) —
redundant *and* less reliable. The measure-choice tension this sits on is
[[BMI vs Abdominal-Adiposity Markers - Which Predicts CVD]].
[inferred from @erfc2011whr]

<div class="recent-update" data-last-updated="2026-10-27">

## A small, study-level subgroup search with a single trial-feature moderator — youth warm-up programmes `[2026-10-22, Ding]`

A third route-(b) absence, in a third exposure class and a weaker design than Coley or Nong. Ding's
meta-analysis of 15 cluster-RCTs of structured warm-up programmes in under-19s ran eight study-level
subgroup splits and found that «Q and P values for between-subgroups comparisons indicated only one
discernible difference in compliance (*p* = 0.01)»
[@ding2022warmup]. Age (p =
0.64) and sex (p = 0.10, a three-way test including 9 mixed-sex trials; males 0.47 vs females 0.68, three trials
each) showed no significant difference
[@ding2022warmup].
As with Nong's duration effect, the one moderator is a property of the trial (how well the programme was
done), not of the person; unlike trial duration, it is something an implementer can act on (adherence,
a Layer-3 matter), and by Table 4's counts one trial with compliance N/A sits in the >70% group
[@ding2022warmup].

 Three bounds make this a weak data point. Subgroups of 3 to 12 trials compared on aggregate
data have little power, so this is *no modification shown*, not *modification excluded*. The splits are
between trials, so the sex comparison sets male-only, female-only and mixed trials against each other,
confounded with level, setting, programme type and compliance: not a person-level test at all. And the
source itself says both the examined and the unexamined factors «could still moderate the effect»
[@ding2022warmup]. Separately,
the same paper's discussion reads point-estimate gaps between non-significant subgroups as real differences,
which is the route-(b) false-positive generator at the reporting stage, inside a paper whose own tests
are null. Lodged toward the `[PRIOR — over-personalization is the likelier failure]`, not scored. Full
appraisal -> [[Exercise Interventions and Sports Injury Prevention]].
[inferred from @ding2022warmup]

</div>

<div class="recent-update" data-last-updated="2026-10-28">

## A within-trial, prespecified modifier signal with no pooled support — HOPE-3 by baseline SBP `[2026-10-27, Lonn]`

HOPE-3 randomised 12,705 intermediate-risk people without CVD to candesartan + hydrochlorothiazide or
placebo (achieved difference 6.0/3.0 mmHg, median 5.6 years). Its design names the route-(b) tests in
advance: «Prespecified hypothesis-based subgroup analyses were conducted according to thirds of baseline
cardiovascular risk, of systolic blood pressure, and of low-density lipoprotein (LDL) cholesterol
concentration (with P values for trend)» [@lonn2016hope3].
Two results came out of the same trial:

- **A modifier signal on baseline SBP.** First-coprimary HRs by SBP third were 1.16 (0.82-1.63) at
  <=131.5 mmHg, 1.08 (0.80-1.46) at 131.6-143.5 and 0.73 (0.56-0.94) above 143.5, at nearly the same
  achieved BP difference in each third (5.6-6.1 mmHg); P for trend 0.02, 0.009 for the second coprimary,
  and 0.22 for stroke [@lonn2016hope3].
- **An absence on baseline risk itself.** «There were no significant interactions among the other
  prespecified sub- groups, including those according to thirds of baseline risk, LDL cholesterol
  concentration, or diastolic blood pressure» [@lonn2016hope3].

[inferred from @lonn2016hope3] By design class the SBP signal is the kind this page's
route-(b) rule accepts: within one trial, prespecified, hypothesis-driven. The achieved BP difference was
observed to be similar in each third, and the authors draw the same inference, that the gradient is not a
dose artifact. Several things keep it well below Pittas' mechanism-plus-negative-control design. The test
is nominal: «A nominal P value of less than 0.05 was used for all other analyses.»
[@lonn2016hope3] It is one of three
hypothesis-based subgroup families, beside further confirmatory ones (age, sex, DBP, waist-to-hip ratio,
lipids, ethnicity), and the two coprimary composites are nested, so their P values of 0.02 and 0.009 are
not two replications. Stroke showed no significant trend (P 0.22). And a larger pool of trials published
1972-2013, which predates HOPE-3, found no modification by baseline SBP, with no subgroup HR above 1.0
(the BPLTTC parameter table is on [[Blood Pressure Lowering and Cardiovascular Events]]); that test is
far larger in the corresponding no-CVD, low-SBP stratum, but its stratum is drawn from a no-CVD population
about 4x higher in risk, with CKD more common than in BPLTTC's own CVD group (its absolute prevalence,
and the stratum's own risk and make-up, are not held), it differs in
contrast (it pools drug-vs-drug and intensity trials) and scale (standardised per 5 mmHg), its multiplicity
adjustment guards against false positives rather than false negatives, and this page accepts a pooled IPD
interaction test for an absence as for a positive but ranks it below a within-trial one (*A second modifier
tested within the pool and not found* above). The default stays with the
pool on size and precision, not design. The authors' caveat about
earlier meta-analyses, that they rested largely on trials in people with vascular or renal disease,
diabetes, or entry SBP above 150, is only partly answered when applied to the BPLTTC 2021 pool. Its split by CVD status covers the vascular-disease
part and its seven SBP categories the entry-SBP part, but not diabetes or renal disease, and the renal part cuts toward the caveat: BPLTTC reports
that diabetes prevalence was similar with and without prior CVD and «chronic kidney disease was more
common in participants without previous cardiovascular disease»
[@bplttc2021],
and the make-up and per-stratum HRs of its low-SBP no-CVD stratum are not held. So it is **neither established nor excluded**: a hypothesis to hold, while
the decision default stays route (a). That default is not unchecked (the third *Failure mode*): the pooled
test is the check.

The authors read the signal more firmly, while noting «Although any subgroup analysis should be
interpreted with caution», and they argue for baseline SBP over baseline risk: citing an earlier BPLTTC
analysis (not held) that found 18% lower risk «among persons at comparable baseline risk» with a baseline
SBP of 155, they conclude «a higher systolic blood pres- sure at baseline may be decisive in determining
whether small reductions in blood pressure re- duce risk.»
[@lonn2016hope3] That is their inference across two
studies, not a within-study test, and the sentence citing the 18% gives the group's risk as a 5-year
placebo event rate of 6.5% for a composite the held text does not define. Against HOPE-3's crude placebo
proportions over a median 5.6 years (first coprimary 4.4% overall, 6.5% upper third; second coprimary 5.2%
and 7.5%) it exceeds the overall rate on both (over a longer follow-up) and matches the upper third's first;
unless the undefined composite is broader than HOPE-3's second, the cited group was at higher risk than
HOPE-3 overall, so the contrast does not cleanly separate baseline SBP from baseline risk.

**Where risk tracks SBP, both readings put the drug's benefit on the CV composite at or below a baseline
SBP of 143.5 mmHg (HOPE-3's lower two tertiles; a tertile cut, not a treatment threshold) as small at best; they differ in every third: a small benefit against none or possible harm
in the lower two, and a benefit of differing size in the upper**
[inferred from @lonn2016hope3].
In the lowest third the placebo risk was 2.9% over 5.6 years. Under route (a), a BPLTTC-sized relative
effect (\~0.89 for the \~6 mmHg achieved; approximate, since BPLTTC's composite counts heart failure and
HOPE-3's first coprimary does not) buys about 3 events per 1000 (one per \~300 treated); under route
(b), none, or harm: the lowest third's 1.16 (0.82-1.63) taken at face value is about 5 more per 1000, which
the authors call «a suggestion of harm for those in the lower-third subgroup»
[@lonn2016hope3]. Both readings put the drug's benefit
there small at best, a ceiling-type finding. The middle third (131.6-143.5 mmHg) looks the same: placebo risk 3.8%, so about 4 fewer per 1000 under route (a), while its 1.08
(0.80-1.46) at face value is about 3 more under route (b); the authors report that «no benefit was
observed in participants who had a baseline systolic blood pressure of 143.5 mm Hg or less», and add
that «The pattern for stroke differed, with no heterogeneity in the three subgroups that were defined
according to baseline systolic blood pressure.»
[@lonn2016hope3]. The thirds below are composite figures. So the readings diverge in every third:
in the lower two, a small benefit against none or a possible harm (gaps of about 8 and 7 per 1000); in the
upper SBP third (>143.5 at baseline, a tertile cut), benefit of differing size (about 7 vs about 17 per
1000).
That agreement on the lower two thirds holds only where risk tracks SBP, as it did in HOPE-3: for a person whose risk is high for
other reasons while SBP is in the lower thirds, route (a) predicts benefit and route (b) none, and for a
person at low risk with a high SBP route (a) predicts only a small benefit and route (b) a larger one.

**Two data points for the `[PRIOR — over-personalization is the likelier failure]`, lodged, not scored,
at unequal strength; direction to be assigned at the scoring gate.** The SBP signal is a within-trial
positive of modest strength, of the same design class as Pittas but weaker. The baseline-risk thirds are
a within-trial absence of low informativeness: the trial was powered for a 22.5% main effect, not for interaction, its population
was selected to be at intermediate risk, which narrows the contrast between risk thirds, and the risk-third estimates are in an unheld
supplement, so by this page's own rule on underpowered interaction tests the absence says little. If a
later within-trial or IPD test confirms the SBP gradient, the default of a constant relative effect fails
in the stratum where a drug decision is closest; if it does not, HOPE-3's lowest-third HR is the kind of
single-trial subgroup this page's route table calls the false-positive generator. Type: F (refines the
route-(b) treatment with a within-trial modifier that a pooled analysis does not support). No
`[E-independent]`: HOPE-3's authors include Yusuf and Reid, both on the BPLTTC collaborator roster
(*The intermediate-risk modern-drug trial* on the BP page). Full appraisal ->
[[Blood Pressure Lowering and Cardiovascular Events]].
[inferred from @lonn2016hope3]

</div>

<div class="recent-update" data-last-updated="2026-10-28">

## One relative effect applied to three baselines, and a split no one modifier can be read from — Sundström `[2026-10-27, Sundström]`

Sundström and colleagues' BPLTTC analysis of grade-1 hypertension without CVD (15,266 people, 13
comparisons, odds ratios over about 5 years) computes its absolute effects exactly as route (a) does:
«We calculated absolute risk reductions by applying the relative risks to the ob- served 5-year
Kaplan–Meier risk estimates in 3 samples» [@sundstrom2015mildhtn].
For total CV events (pooled OR 0.86, 0.74-1.01) the three baselines give:

- **Non-BPLTTC trial controls** (no diabetes, untreated; 5-year risk 2.4%, on stroke + coronary events only,
  since heart failure and CV death were recorded only in the BPLTTC trials): about 3 fewer per 1000 over 5
  years (0 to 6), with the pooled OR applied (these trials' own OR was 0.97, 0.71-1.33, which at the same
  baseline gives about 1 fewer, from about 7 fewer to 8 more).
- **BPLTTC trial controls** (96% diabetic; 7.4%): about 10 fewer (−1 to 19).
- **A primary-care cohort** (ref 13, in a country with universal health care) starting an ACE inhibitor or ARB at grade 1 with no
  prior CVD (11.6%, on a broader CVD definition): about 16 fewer (−1 to 30). This is an on-treatment
  cohort's risk, not a control-group risk, so strictly it is not a route-(a) baseline.
- [@sundstrom2015mildhtn]

The authors state the route-(a) premise and its limit together: «Therefore, although it is reasonable to
assume that the relative risk reductions in the present study can be gen- eralized to a broader
population group with grade 1 hypertension, there is uncertainty about the wider ap- plicability of the
absolute risk reductions observed.» Two sentences later they add of the absolute estimates: «In each case,
the estimates must be interpreted with caution because the CIs are wide and the point estimates of absolute
effect are probably un- reliable.» The next sentence is the counterweight: «Nonetheless, these data
highlight the poten- tially sizeable risk reductions that might be achieved by the treatment of grade 1
hypertension, particularly among persons with multiple cardiovascular risk fac- tors.» [@sundstrom2015mildhtn]

[inferred from @sundstrom2015mildhtn] Three things limit it as a worked instance.

**The lowest baseline's own trials did not show the effect.** The non-BPLTTC half's own CV-event OR was
0.97 (0.71-1.33), and about three-quarters of the pooled events come from the diabetic half, so the
3-per-1000 figure is a transport of a mostly-diabetic relative effect to a non-diabetic baseline, which is
what route (a) assumes and what this pool cannot confirm.

**A pooled-IPD test of baseline risk found no modification, on few events.** The model is two-level with a
random intercept for trial, and this analysis used only BPLTTC trials [@sundstrom2015mildhtn].
So the interaction can mix within- and across-trial information, and the split appears restricted to
participants with a computable Framingham risk. Inside the BPLTTC half,
split at the median 5-year Framingham risk of 11%, CV events were 0.66 (0.45-0.97) below it and 0.83
(0.57-1.21) above it, P 0.35; deaths 0.54 vs 0.63, P 0.62 [@sundstrom2015mildhtn].
The split covers 3674 of 6361 BPLTTC participants, 2161 below and 1513 above, so the 11% is not this
subset's median.
That is consistent with a constant relative effect (the nominal direction is a larger relative effect at
lower risk). It rests on about 245 CV events in a diabetic population, so it is a low-informativeness
absence, like HOPE-3's risk thirds above.

**The data-source split bundles its modifiers.** BPLTTC vs non-BPLTTC (CV events 0.83 vs 0.97, P 0.37)
changes diabetes, prior treatment, drug class, era and data type at once, and the authors do not show
diabetes interactions because they «nearly completely overlap with the interaction analyses of BPLTTC
versus non-BPLTTC trials» [@sundstrom2015mildhtn].
The authors read the null as similarity: «Of note, the relative risk reductions achieved with blood
pressure–lowering therapy have previously been shown to be similar in persons with and without diabetes
(30), and this was also true for our study.» [@sundstrom2015mildhtn]
The wiki reads it more weakly: a positive there could not have been assigned to any one of the bundled
modifiers, and a non-significant test on these events cannot clear any one of them. Wang's
Cochrane review reads the difference mainly as lower baseline risk (younger participants, diabetes
excluded) [@wang2025mildhtn].
The wiki reads this as route (a); Wang does not specify, and its stance against extrapolation leaves route
(b) open. These data fit the route-(a) reading but do not show it over a smaller relative effect (route b) in the
non-diabetic, untreated stratum.

**What route (a) assumes where a stratum's own trials are inconclusive: a method disagreement the wiki
takes a default on, not one it settles `[2026-10-27, weave]`.** Route (a) needs no subgroup claim, but it does assume the
relative effect carries over to the stratum. Two held sources take opposing positions, neither absolute (Sundström calls a definitive trial in uncomplicated grade-1 hypertension an important
addition and the wider
applicability of its own absolute risk reductions uncertain; Wang still
suggests considering drugs individually), on whether a decision may rest on that assumption for the untreated, non-diabetic grade-1 stratum, whose own trials exist and are inconclusive. Sundström:
«Therefore, although it is reasonable to assume that the relative risk reductions in the present study can
be gen- eralized to a broader population group with grade 1 hypertension, there is uncertainty about the
wider ap- plicability of the absolute risk reductions observed.»
[@sundstrom2015mildhtn] Wang: «It is critical that we use data from high-quality
randomized controlled trials (RCTs) to make decisions around initiation of pharmacotherapy in people with
mild hypertension without pre-existing cardiovascular disease, rather than relying on extrapolations from
indirect data.» [@wang2025mildhtn] Neither reports a relative effect that differs in
the stratum, and the stratum's own intervals contain the pooled estimates (CV events 0.86 inside
0.71-1.33, deaths 0.78 inside 0.62-1.15), so no estimate is in conflict.

 This page's rule gives a default, and the default sides with Sundström. Moving off the pooled
relative effect is route (b), which needs positive evidence of modification, and an inconclusive in-stratum
interval is not that evidence. So the wiki carries the relative effect over, and it attaches conditions in
response to Wang's objection without adopting Wang's standard: the result is labelled a transport, not a
measurement; the stratum's own inconclusive trials are stated beside it; and for a costly or harm-bearing
action the low certainty of the transport enters the decision (firmness scales with stakes). *Limits* above
holds relative constancy as an empirical regularity, not a law, and here the pooled OR is set mostly by
diabetic (96%), largely already-treated (55-61%) participants and carried to non-diabetic, untreated
people; whether they are similar enough in what the effect depends on is the transport question Wang
raises, and this page's rule leaves it open. BPLTTC 2021's absolute-risk method makes the same transport,
which Wang would not license either ([[Blood Pressure Lowering and Cardiovascular Events]]).

 The issue is joined on method (the same question, with clashing backing), and none of the
not-joined checks dissolves it. It is still not filed as a tension, on a ground the not-joined checks do
not cover, the same one applied to BPLTTC 2021 on [[Blood Pressure Lowering and Cardiovascular Events]]
(check (i) does not fire, since the difference is substantive, not merely verbal): neither source predicts
an outcome the other contradicts (no matched estimate is in conflict), and
they clash only over which evidence standard a decision needs, so a tension page would have no empirical
pole to resolve. The default is the
wiki's own revisable method position, not a verdict the sources reach. Three things would move it: an
in-stratum interval that excludes the pooled effect; a within-trial test in the non-diabetic, untreated
stratum that finds modification; or an adequately powered direct trial in that stratum, which would replace
the transport whatever it found. HOPE-3 is the nearest held instance of the second: a prespecified
within-trial test of baseline SBP in a largely non-diabetic, no-CVD population, whose trend points to a
larger relative effect in its upper SBP third (baseline mean 154 mmHg; 0.73) and to none in the middle
third (131.6-143.5 mmHg at baseline; 1.08), although it was not selected for untreated grade-1
hypertension. Where grade 1's lower edge falls on that gradient depends on the measurement: on baseline readings 140-143.5 sits in the null middle third, but after correction for
regression dilution (averaging the placebo group's first-year readings) the
benefiting upper third's usual SBP averaged 140.9, and the authors read their data as compatible with the hypothesis of benefit above about 140: «Therefore, our data are compatible with the hypothesis that treating persons without cardiovascular
disease who have a systolic blood pressure above approximately 140 mm Hg appears to be beneficial, but
treat- ment would not be of benefit and may be even harmful in persons with lower systolic blood- pressure
levels.» [@lonn2016hope3] It does not move the default (a nominal trend without
support from the larger BPLTTC 2021 pool; *A within-trial, prespecified modifier signal* above). It
locates no cut, but if the trend is real it marks the low end of the grade-1 range, on either scale, as
where the transport is least secure.

**One more data point for the `[PRIOR — over-personalization is the likelier failure]`, lodged, not
scored:** a pooled-IPD, low-powered absence of modification by baseline risk (the Framingham split),
plus a bundled between-source absence that tests no single modifier. Type: F, resting on what Sundström
does not draw out: its lowest baseline's own trials returned 0.97, and its data-source null bundles the
modifiers (the route-(a) computation and its transport caveat are the authors' own). No `[E-independent]`: same
collaboration as Rahimi and BPLTTC 2021, with shared authors. Full appraisal ->
[[Blood Pressure Lowering and Cardiovascular Events]].

</div>

<div class="recent-update" data-last-updated="2026-10-28">

## No significant sample-feature moderator in community trials; two programme-feature moderators — exercise for falls `[2026-10-28, Sherrington 2017]`

A between-trial meta-regression over 61 general-community trials of exercise for falls (69
comparisons) tested 14 moderators. Three sample features showed no statistically significant association with the effect:
average age over 75
(ratio of rate ratios 0.95, 0.80-1.12), an unselected rather than at-risk population (1.02, 0.87-1.21),
and the control group's fall rate (0.99, 0.90-1.07; 65 comparisons; Table 1 describes this variable as «Control
group falls/person-year or proportion who fell in follow-up period»). Two programme features reached
significance: a high challenge to balance (0.85, 0.73-1.00, p=0.04) and 3 or more hours a week of
prescribed exercise (0.77, 0.65-0.91, p=0.003)
[@sherrington2017falls]. The
authors' own recommendation fits a route-(a) reading, though they do not tie it to the moderator nulls:
fall-prevention exercise «should be targeted at the general community as well as community-dwellers
with an increased risk of falls». They add that the meta-regression rests on «non- randomised
comparisons between studies, so they are potentially confounded»
[@sherrington2017falls].
The same paper pools other settings and conditions separately, reasoning that «Given the likely
heterogeneity between people living in different settings and with different health conditions,
separate analysis by setting is clinically justiﬁable.» Those pools show no evidence of an effect in
residential care (0.90, 0.72-1.12), after hospital discharge (1.16, 0.88-1.52) or after stroke (0.74,
0.42-1.32), which are insufficient-evidence cells rather than shown nulls, and
larger point effects in Parkinson's disease (0.47, 0.30-0.73, 6 comparisons) and cognitive impairment
(0.55, 0.37-0.83, 3 comparisons)
[@sherrington2017falls].

[inferred from @sherrington2017falls]
Within community trials the pattern is Ding's, not Nong's: the moderators are programme properties an
implementer can set (content and dose), not traits of the person, and the authors turn them into
prescriptions. They are differences between exposures, so the dose/content contrast is a between-trial
hypothesis, not a randomised comparison, and still the labelled, low-harm, time-costly default (the balance result
at p=0.04 is marginal among 14 tests; the 3 h result is sturdier). For community-dwelling older adults
the person-level reading stays route (a): a constant relative effect, with more falls averted per
person where baseline fall rates are higher. The sample-feature nulls are weak evidence about
individuals (trial means, an aggregation bias that runs in either direction; the control-rate covariate
mixes two metrics, which in the simple case pulls its coefficient toward null). The two dichotomous
sample moderators (age over 75, unselected population) have intervals that exclude large trial-level
modification (roughly beyond 0.8-1.2); the control-rate interval is per unit of that mixed-metric
covariate, so it is not on the same scale and is not directly comparable. The authors say an individual-participant
meta-analysis «may better enable investigation» of age and fall-risk status. The setting and condition
pools are a separate matter: between-pool contrasts with no interaction test, so neither route-(a)
support nor shown modification, but the authors act on them by recommending differently by setting.
Lodged toward the `[PRIOR — over-personalization is the likelier failure]` for the within-community
nulls; the between-pool setting and condition differences are untested, direction to be assigned at the
scoring gate. Not scored. Type: F (adds a between-trial meta-regression to the route-(b)-absence set).
No `[E-independent]`. Full appraisal -> [[Exercise for Preventing Falls in Older Adults]].

</div>

## References

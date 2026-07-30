---
type: model
question: Why can one relative effect apply to everyone while the recommendation still differs by group?
aliases: [Relative vs Absolute Effect, Baseline Risk, Absolute Risk Difference, Relative Risk Constancy, Risk Stratification]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; World Health Organization (org); Scientific Advisory Committee on Nutrition (org)]
sources: [GRADE - Handbook, WHO - Saturated and Trans Fatty Acid Intake 2023, Naude - Low-Carbohydrate vs Balanced-Carbohydrate 2022, SACN - Carbohydrates and Health 2015, Willett - Nutritional Epidemiology 3e, ESC - CVD Prevention Guidelines 2021]
cluster: cvd-risk-estimation
nucleus: true
relationships:
  related_to:
    - Certainty of Evidence vs Strength of Recommendation
    - Framing a Decision Question
    - Rating Outcome Importance
    - Semaglutide for Cardiovascular Risk in Obesity
created: 2026-07-25
self_critiqued: 2026-07-28
updated: 2026-07-28
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
not. [EXTRACTED @grade §2.1]

## The consequence GRADE draws

> "Recommendations, however, may differ across subgroups of patients at different baseline risk of an
> outcome, **despite there being a single relative risk that applies to all of them**. Thus, guideline
> panels must often define separate questions (and produce separate evidence summaries) for high- and
> low-risk patients." [EXTRACTED @grade §2.1]

Worked case: warfarin, which carries inconvenience and serious bleeding risk, has a "much stronger"
case in atrial-fibrillation patients at substantial rather than minimal stroke risk — the relative
effect is the same for both. [EXTRACTED @grade §2.1]

## Intuition

The relative effect is a property of the **intervention**; the absolute effect is a property of the
**intervention applied to this person**. A therapy that removes a third of a risk removes a third of
a large risk and a third of a negligible one. Where the harm rate is roughly constant in absolute
terms, the benefit-harm balance therefore tips with baseline risk even though nothing about the
treatment's potency changed. GRADE states only that "baseline risk (control event rate) can influence
the balance of desirable and undesirable outcomes" [EXTRACTED @grade §6.2.1.1]; it does
not claim harms are baseline-invariant. (**Note what varies in GRADE's warfarin case**: it is
**stroke** risk that differs between patients, with bleeding as the fixed counterweight -- not the
reverse, which is the easier misreading.)
[INFERRED (GRADE - Handbook) — the constant-harm case is the clean illustration, not a general rule.]

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
  [INFERRED (GRADE - Handbook) — entailment from the single-RR-across-strata claim.]
- **Assuming relative constancy without checking.** GRADE's premise is that relative effects are
  *usually* similar across baseline risks; where the underlying biology suggests otherwise, the
  question should have been split instead (see below).

## The prior question: how broadly to define the group

Before pooling, GRADE asks whether pooling is legitimate at all: "for the patients and interventions
defined, the underlying biology should suggest that across the range of patients and interventions it
is plausible that the magnitude of effect on the key outcomes is more or less the same. If that is
not the case the review or guideline will generate misleading estimates for at least some
subpopulations." [EXTRACTED @grade §2.1]

So there are two distinct reasons a recommendation can differ by group, and they carry different
evidential burdens: **differing baseline risk** (arithmetic; no subgroup claim needed) and **differing
relative effect** (a biological claim requiring its own evidence, and pre-specified where possible —
GRADE's guard is *«a priori specification of subgroup effects»* — the handbook says a priori, not
specifically *in the protocol*). [EXTRACTED @grade §2.1]

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
[EXTRACTED @grade §5.2.2]

Therefore:

> "When easily identifiable patient characteristics confidently permit classifying patients into
> subpopulations at appreciably different risk, absolute differences in outcome between intervention
> and control groups will differ substantially between these subpopulations. This may well warrant
> **differences in recommendations across subpopulations, rather than downgrading the quality of
> evidence for inconsistency** in effect size." [EXTRACTED @grade §5.2.2]

That is an explicit routing rule: varying absolute benefit across risk strata is a reason to
**stratify the recommendation**, not a reason to lose confidence in the estimate. Mistaking the first
for the second penalizes a body of evidence for behaving exactly as the arithmetic predicts.

Also recorded there: **direction of effect is not a criterion for inconsistency** — studies pointing
opposite ways are not per se inconsistent; what counts is spread of point estimates, non-overlapping
intervals, and heterogeneity statistics. [EXTRACTED @grade §5.2.2]

## Applied — WHO computes absolute effects exactly this way

WHO's 2023 fat guideline states the conversion explicitly in its evidence profiles:

> "absolute effect = 1000 x [event rate x (1 - RR)]" — with the caveat that "the magnitude of
> absolute effect in 'real world' settings **depends on baseline risk, which can vary across
> different populations**."
> [EXTRACTED @who2023saturated Annex 6, evidence-profile footnotes]

That is this page's decomposition in the source's own hand, with one caution: `event rate` is the
**study** event rate — "in the control group for RCTs and the total cohort for prospective
observational studies" — which WHO then explicitly distinguishes from a reader's real-world baseline
risk. `(1 - RR)` is the relative risk reduction.
[EXTRACTED @who2023saturated Annex 6, evidence-profile footnotes]
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

[EXTRACTED @who2023saturated Annex 6, evidence profiles 5 and 9]

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
[INFERRED (WHO - Saturated and Trans Fatty Acid Intake 2023) — entailment from the recorded event
rates; WHO does not draw the comparison.]

**Why this is the trap and not just an illustration:** the two rows sit in the same annex under the
same question, and a reader comparing "50 fewer" against "12 fewer" to rank the two swaps would be
comparing populations, not nutrients. The comparable quantity is the relative effect, and on that
scale the two replacements are much closer than the guideline's presentation suggests.

## Assumed risk for a CONTINUOUS outcome is a range, not a baseline (2026-07-26)

The per-1000 machinery above needs a baseline risk. For a **continuous** outcome there is no such
thing, and Cochrane's device is worth copying: the assumed-risk column becomes *"the range of change
values reported in the balanced-carbohydrate weight-reducing diet groups across the studies"* -- e.g.
comparator arms losing between 11.34 and 2.3 kg, against which a 1.07 kg between-arm difference is read.
[EXTRACTED @naude2022 Summary of findings 1]

**The decision consequence is real:** a 1 kg advantage against comparators already losing 2-11 kg is a
marginal adjustment to a working intervention, not a stand-alone effect. Reading the MD without the
comparator's own trajectory makes a small increment look like a whole result.

## Limits

- The relative-constancy premise is an empirical regularity, not a law, and GRADE states it as
  "usually." Where it fails, the pooled relative estimate is the wrong object and the question needed
  splitting.
- Baseline risk for a specific person is itself estimated from a population model, so it carries its
  own transportability question — the split does not eliminate the transfer problem, it relocates it.
  [INFERRED (GRADE - Handbook) — entailment; the handbook does not address this.]

## A body that held BOTH halves and never multiplied them `[2026-07-28, SACN revisit]`

The *Failure modes* list above names **reporting relative effects alone**. [@sacn2015] is the worked instance, and it is the sharp version of the failure: **SACN had the
baselines and still did not convert.**

Its effect estimates are relative throughout — «the relative risks for total sugars intake are
presented for each 50g/day increase and for individual sugars for each 20g/day increase as this is
equivalent to one standard deviation of intake», with «330ml/day increase in consumption as this is
equivalent to a standard can of beverage» for SSBs.
[EXTRACTED @sacn2015 chunk 03, 6.3]

**And chapter 4 supplies UK baselines, in the same report, unattached to any effect estimate:**
coronary heart disease «responsible for almost 74,000 deaths each year»; diabetes at «In 2013, 6% of
the UK population, over 3.2 million people»; caries at «In 2012 almost a third (27.9%) of 5-year olds
in England had tooth decay».
[EXTRACTED @sacn2015 chunk 02, ch.4]

**Both factors of the identity at the top of this page are present in one document, and the
multiplication is never performed.** No risk differences, no NNTs, no absolute benefit at a stated
baseline. So the failure is not missing data — it is an unexecuted step, which is a different and more
tractable defect than the usual one.
`[INFERRED (SACN - Carbohydrates and Health 2015) — both quantities are SACN's; the observation that
they are never joined is this page's]`

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
`[INFERRED (SACN - Carbohydrates and Health 2015) — SACN states the increments and their SD-equivalence;
the travels/does-not-travel consequence is this page's]`

**Still owed, and SACN does not supply it:** a genuine route-(a) illustration — one intervention, one
relative effect, two baseline-risk strata. SACN has no such case; it never stratifies its estimates by
baseline risk at all.

## Self-critique `[run 2026-07-28, before commit]`

- **Over-claim check on the per-SD argument.** The claim is that a per-SD relative risk does not
  transport without its SD. **SACN does not say this** — it states the increments and notes their
  SD-equivalence, and the consequence is the wiki's. Tagged. The weaker reading (that SACN simply chose
  interpretable units) is compatible with the text, and the table above is written so both readings
  survive: the distinction is about *what the denominator is*, not about SACN's intent.
- **Absence claim, scoped.** *"no risk differences, no NNTs, no absolute benefit"* is scoped to what
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
> [EXTRACTED @willett chunk 20]

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
[EXTRACTED @willett chunk 20]

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
> [EXTRACTED @esc2021 chunk 02]

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

## References

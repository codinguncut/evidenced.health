---
type: framework
question: Does restricting carbohydrate put type 2 diabetes into remission, and does it last?
aliases: [T2D Remission, Diabetes Remission, Low-Carb for Diabetes, Carbohydrate Restriction Diabetes, LCD Remission]
authors: [Goldenberg, Joshua Z; Lean, Michael EJ; Taylor, Roy; Naude, Celeste E]
sources: [Goldenberg - Low Carbohydrate Diets T2D Remission 2021, Lean - DiRECT T2D Remission 2018, Naude - Low-Carbohydrate vs Balanced-Carbohydrate 2022]
cluster: weight-management
confidence: medium
self_critiqued: 2026-07-29
relationships:
  related_to:
    - Low-Carbohydrate vs Balanced-Carbohydrate Diets
    - Rating Certainty of Evidence
    - Rating Outcome Importance
    - Surrogate Outcomes
created: 2026-07-26
updated: 2026-07-31
---

BMJ 2021, 23 RCTs, n=1357, including unpublished data from five trials. Low-carbohydrate defined  [@naude2022]
**<26% of energy or <130 g/day** -- materially stricter than the <45% used by broader reviews.

## The answer depends entirely on what "remission" means

| Definition | 6 months | 12 months |
|---|---|---|
| **HbA1c <6.5%** | **RD 0.32** (0.17 to 0.47), RR 1.87 (1.18 to 2.97), 8 RCTs, n=264, **Moderate** | RD 0.10 (-0.02 to 0.21), 3 RCTs, n=171, Moderate |
| **HbA1c <6.5% AND no diabetes medication** | RD 0.05 (-0.05 to 0.14), 5 RCTs, n=199, Low | **RD -0.04** (-0.16 to 0.09), 2 RCTs, n=126, Low |

[@goldenberg2021, Table 2; Results]

**This is the finding.** The headline **32 per 100 more remissions** -- an NNT of about 3 -- is remission
**with medication allowed to continue**. Under the definition that also requires coming off medication,
the effect is **never statistically significant at any timepoint, and the 12-month point estimate is
negative**.

**But the stratum matters, and this is where the headline needs qualifying.** In trials that
*excluded* insulin users, medication-free remission **is** significant: **RD 0.20 (0.03 to 0.38), NNT
5**, against **0.00 (-0.07 to 0.07)** where insulin users were included (test for subgroup difference
**P=0.03**). For the medication-permitted definition the split is starker still -- **0.51 (0.36 to
0.65)** vs 0.14 (0.03 to 0.25), P<0.001.
[@goldenberg2021, Results]
So "never significant" holds for the **pooled** medication-free estimate and **not** for the
non-insulin stratum -- which is the stratum in which a low-carbohydrate diet would most plausibly be
offered. Per the telos's layer-2 rule the narrowest credible reference class is the one to quote.

And the two definitions do not draw on the same trials. Only **7 of 23 trials (30%) permitted medication
reduction and reported usable data**, so the medication-free estimates come from a structurally
different set of trial designs, not from a stricter reading of the same evidence.

## Most benefits attenuate by 12 months — but not all

| Outcome | 6 months | 12 months | Certainty |
|---|---|---|---|
| Weight | **MD -3.46 kg** (-5.25 to -1.67), 18 RCTs | **MD +0.29 kg** (-1.02 to 1.60), 7 RCTs | Moderate |
| HbA1c | **MD -0.47%** (-0.60 to -0.34), 17 RCTs | MD -0.23% (-0.46 to 0.00), 8 RCTs | **High** -> Moderate |
| Fasting glucose | MD -0.73 mmol/L (-1.19 to -0.27) | MD 0.06 mmol/L **higher** (-0.37 to 0.48), 6 RCTs | Moderate |
| Medication reduction | **RD 0.24** (0.12 to 0.35), 7 RCTs | RD 0.33 (-0.00 to 0.66), 3 RCTs | Moderate -> Low |

**Medication reduction and triglycerides go the other way** (0.24 -> 0.33; -0.30 -> -0.32), so the
source's own wording is the accurate one: *"most benefits diminished at 12 months."*

[@goldenberg2021, Table 3; Results]

**The weight-advantage decay is a general property of diet trials, not a diabetes-specific one
(corroboration, F).** Across 121 RCTs of overweight/obese adults, weight loss on *every* macronutrient
pattern and named diet diminishes by 12 months (down \~1.5 kg per diet) and cardiovascular risk-factor
gains «largely disappear» -> [[Named Diet Programs Compared]] [@ge2020]. That the remission effect here decays *in step with* its
weight advantage is consistent with the reading below — a weight-loss effect on a low-carb route, riding
the same attenuation curve every diet shows. (Corroboration line; Ge is not a `sources:` entry — it
measures no remission outcome.)

The HbA1c estimate at 6 months is the only High-certainty row **among the primary outcomes**. Table 3
carries five more (LDL at 6 months, HDL and triglycerides at both timepoints).

**Attenuation is already visible inside the six-month window — but this is a POST HOC analysis and
carries less weight than the a-priori subgroups above.** The review is explicit about its provenance:
*"**On the basis of comments from peer reviewers, we did a post hoc analysis** on remission at six
(+/-3) months"*, and hedges its reading (*"evidence **suggested** larger treatment effects... suggesting
that shorter term trials **may be** an effect modifier"*). Trials of 3 to <6 months give RD **0.49**
(0.30 to 0.68); trials of 6 to 9 months give **0.25** (0.08 to 0.42). Medication-free: 0.20 (0.03 to
0.38) vs 0.00 (-0.07 to 0.07).
[@goldenberg2021, Limitations]

**Note a coincidence worth not over-reading:** the medication-free figures here (0.20 / 0.00) are
numerically identical to the insulin-exclusion subgroup's. That is consistent with the two splits being
near-coextensive — the non-insulin trials largely being the short ones — in which case this is one
finding presented twice, not two. The paper's supplementary tables would settle it; the wiki does not
hold them.

## Medication is handled four ways at once, and this is the transferable move

Not adjusted for -- **co-reported**. The review's stated reasoning:

> *"Reductions in medication may blunt the effect on mean HbA1c levels, biasing results towards the null
> and masking any effect; however, any improvement can still be captured if reduction of medication is
> included as an outcome of interest."*
[@goldenberg2021, Limitations]

So medication appears (1) inside two of the four remission definitions, (2) as a standalone outcome,
(3) as a named bias mechanism, and (4) as a subgroup variable. **The HbA1c mean difference and the
medication-reduction risk difference are two projections of one underlying effect, and neither alone is
complete.** Any claim built on the HbA1c figure alone *understates* the glycaemic effect by an amount
the review does not quantify.

**Generalizes past diabetes:** wherever a treatment lets people reduce a co-intervention, the outcome
measured under fixed co-intervention is biased toward the null, and the fix is to report the
co-intervention change as its own outcome rather than to adjust it away.

## Harms, and how firm they are

- **LDL at 12 months: MD 0.14 mmol/L** (-0.00 to 0.28), 6 studies, Moderate -- above the review's own
  0.10 mmol/L threshold, so labelled a clinically important worsening, though P=0.05. At 6 months LDL is
  flat (0.02) at **High** certainty.
- **Quality of life at 12 months: MD 3.10** (-2.03 to 8.23), threshold 1, Low certainty. **Rests on a
  single trial of 116 people**, with an interval spanning a benefit twice the threshold and a harm eight
  times it, judged important on the point estimate alone. The 6-month estimate points the other way and
  comes from 4 trials -- so the apparent reversal is partly a change of study set, not a trajectory.
- Adverse events: no significant increase, but *"poorly reported among trials and the certainty of
  evidence for safety ranges from low to very low."*

## What the review tells clinicians to do

> *"clinicians might consider short term LCDs for management of type 2 diabetes, while actively
> monitoring and adjusting diabetes medication as needed."*
[@goldenberg2021, Conclusions]

Two conditions attached -- **short term**, and **active medication management**. Note the reason for the
time limit is partly *external* to this review's own evidence: it cites a cohort review suggesting
long-term low-carbohydrate diets are associated with increased mortality.

## The summary box vs the body — reconciled, not a defect

The key-messages box claims *"large and clinically important improvements in weight loss, triglycerides,
and insulin resistance were also seen, without adverse events."* The Discussion's own threshold tally
says something narrower: *"Among 10 continuous outcomes, two showed improvements that met or surpassed
the MCID at six months (triglycerides, insulin resistance)... At 12 months... two had a clinically
important worsening (quality of life, low density lipoprotein cholesterol)."*

**This reconciles rather than conflicting.** The Methods
pre-specify that *"if the risk of bias sensitivity analysis was credible, we focused our results on
those studies at low risk"* -- and weight was the outcome where that applied, giving **MD -7.41 kg**
(-9.75 to -5.08) in low-risk-of-bias trials, which does surpass the 4.4 kg threshold. And *"adverse
events"* is a named outcome class in this review (total and serious AEs), on which nothing significant
was found; the 12-month LDL and quality-of-life worsening are continuous outcomes, and the Conclusions
state them plainly. **The box is the review applying its own stated method, not drifting from its
body.**

**On the HbA1c threshold.** The main text prints thresholds for eight continuous outcomes and not for
the two glycaemic ones; the full table is in a supplement not held here. But the question is
**answerable anyway**, from the review's own tally: of **ten** continuous outcomes, only triglycerides
and insulin resistance met or surpassed their threshold at six months. HbA1c is one of the ten. **So
-0.47% did not clear the review's own bar** -- a decision-relevant fact, and one recoverable by
counting the outcomes rather than concluding it unknowable because the main text does not say so
directly.


[@goldenberg2021]
## The mechanism this review does not isolate — weight loss, not carbohydrate per se

Low-carbohydrate diets cause weight loss, and this review's remission effect **attenuates to null by
12 months in step with its weight advantage** (weight MD -3.46 kg at 6 months -> **+0.29 kg at 12
months**). A remission effect that decays as the weight advantage decays is consistent with a
*weight-loss* effect delivered via a low-carb route, rather than a carbohydrate effect independent of
weight. DiRECT (Lean 2018) makes this near-decisive: it achieves **46% remission on an 825-853
kcal/day formula diet that is 59% carbohydrate** — the opposite of low-carb — with remission scaling
monotonically with kilograms lost (0% at weight gain -> 86% at >=15 kg).
[@lean2018, Results; Findings]
So carbohydrate restriction is **not necessary** for remission, and is best read as **one lever for the weight loss that drives
remission** — with no evidence here that it adds a remission effect *beyond* the weight loss it
produces (an added glycaemic contribution is untested, not excluded). A person should optimize for the
weight loss they can *sustain*, by whichever route they will adhere to
-> [[Total Diet Replacement and Type 2 Diabetes Remission]].

## Limits

- Small numbers behind the headline: the 6-month remission estimate is **8 trials, n=264**; by 12 months
  it is 3 trials, n=171.
- Only 30% of trials permitted medication reduction, which constrains the definition that matters most.
- The mortality caution is imported from cohort evidence, not tested here.
- **Same population, adjacent condition:** this stratum overlaps heavily with fatty liver — insulin
  resistance is the shared hub (MASLD carries a >2x risk of incident T2D), and the weight-loss and
  glycemia levers here are the same ones that reduce liver fat -> [[Fatty Liver MASLD and Weight Loss]].
- A guidance benchmark is needed to run the guidance-null on this question; both are staged.

## References

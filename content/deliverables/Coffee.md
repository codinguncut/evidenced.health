---
type: deliverable
title: Coffee
question: What are the effects of coffee on health, longevity, and quality of life — for someone deciding whether, how much, and how to drink it?
sources: [Poole - Coffee Consumption and Health 2017, Grosso - Coffee Mortality Smokers Nonsmokers 2016, Ding - Coffee and Type 2 Diabetes 2014]
confidence: medium
created: 2026-08-04
updated: 2026-08-27
self_critiqued: 2026-08-10
concrete_subject_audited: 2026-08-27
---

For most non-pregnant adults, three to four cups of coffee a day is an inexpensive habit more
likely to help than harm — and no reason to take it up, drink more, or give it up on health
grounds. For overall health the benefit settles around three or four cups and flattens beyond,
with no harm within the range studied, so the exact number rarely carries a decision — the one
exception being type 2 diabetes, where the risk keeps easing with each additional cup.


The harder question is how far to trust any of this. Almost all of the evidence is
observational — people who already drink coffee compared with people who don't — which GRADE
rates low to very low, and the two genetic studies able to test cause find no causal signal
behind either the longevity or the diabetes benefit. So the confidence is medium that coffee
is roughly safe and neutral at ordinary intakes, and very low for any particular benefit you
might be counting on. Read every risk figure further down as an association shadowed by
confounding, not a proven effect.

A few people are exceptions, and they are handled at the end rather than the top: pregnancy or
trying to conceive; heavy drinkers of unfiltered coffee who already carry high cholesterol or
cardiovascular risk; and women at high fracture risk with low calcium. One benefit — for the
liver — is strong enough to stand out and would make the best candidate for a proper trial,
though it remains a candidate, not advice.

The lever is small and the evidence thin, and that is itself the finding — permission to stop
worrying about coffee and to spend attention, money and worry where they matter more. This is
a general appraisal for anyone the evidence speaks to; where your own situation and goals come
in belongs at the end, not here — and every number that follows is an association, so begin
with how much to believe it.

## The appraisal floor: how much to believe it

Almost every number that follows is an *association*, not a demonstrated effect, and the design floor is low before you weigh a single finding. Poole's umbrella review pools 201 meta-analyses of observational research (67 outcomes) against just 17 of randomised trials (9 outcomes), so it rests overwhelmingly on observational cohorts, and it grades itself honestly: under GRADE — a structured certainty rating that starts observational evidence low — roughly a quarter of the estimates are *low* certainty and about three-quarters *very low*, the median AMSTAR review-quality score is 5/11, and even the handful of RCT meta-analyses are graded low [@poole2017].

The dominant threat is smoking. Coffee and smoking co-occur, so residual smoking confounding can *manufacture* an apparent harm (lung cancer) or *mask* a benefit — it runs in both directions, not one. The strongest disconfirming signal comes from Mendelian randomization (MR, a genetic natural experiment immune to reverse causation): the two MR studies Poole cites find **no genetic causal evidence** for coffee->mortality or coffee->type-2-diabetes, «suggesting residual confounding could result in the observed associations in other studies» [@poole2017]. One caveat bounds that: MR «relies on the assumption of linearity between all categories of coffee intake and might not capture non-linear differences» [@poole2017] — it nulls the *linear* effect, it does not refute a non-linear one.

Measurement error pushes the other way. There is no standard cup — bean, roast, grind and brew all vary the dose — so cup-based exposure is coarse, and this non-differential misclassification biases *toward the null*: the true gradients could be steeper, not shallower, not weaker than reported [[Measurement Error in Dietary Assessment]]. None of this makes the associations worthless. Consistency and causal certainty are two different axes that legitimately disagree — a large, consistent association can be graded very-low for causation, and that is two instruments measuring two things, not a contradiction [[The Observational-Trial Discordance]]. For coffee the MR nulls one arm, so the honest verdict is insufficient-for-causation, not confirmed: smoking is not the whole story, but the surviving benefit is not established as causal. With that floor set, the first thing the data show cleanly is the *shape* of the dose-response.

## The dose-response shape (how much)

The shape of the dose-response curve — where risk falls, where it flattens — is the one feature these
observational data show reasonably cleanly, and it is **outcome-specific**: coffee's curve for one
endpoint does not carry over to another.

For all-cause and cardiovascular mortality, the curve is a **reverse-J that plateaus**. Risk falls to a
nadir near 3-4 cups a day; past that point «increase in consumption beyond this intake does not seem to
be associated with increased risk of harm, rather the magnitude of the benefit is reduced»
[@poole2017]. There is no harmful upper arm within
studied intakes — unlike alcohol's J-curve, the high end is attenuated benefit, not added risk. The
nadir is therefore a **region, not a target**: the curve is flat around it, so 2 versus 4 cups barely
differs, and precision about the exact cup count carries no decision.

For type 2 diabetes the shape is different — **monotone-decreasing and mildly concave** across 1-6
cups, risk falling step by step (RR 0.92, 0.85, 0.79, 0.75, 0.71, 0.67, vs no coffee)
[@ding2014], with no plateau inside that range. This
matters because the nonlinearity was **formally fitted, not read off a single coefficient**: «A cubic
spline model accounted for more variance in the outcome than did a linear model... suggesting that the
association was not fully linear» [@ding2014]. A curve
built from one per-cup regression coefficient cannot evidence a shape at all; a fitted spline can, so
the display diagnostic that fails elsewhere passes here ([[Energy Adjustment and What a Diet Coefficient Means]]).

Two limits bind every number above. Each dose figure is an **average over an uncontrolled mix** — no
standard cup size, and brew, milk, and added sugar all vary what a "cup" delivers. And any threshold
read off these curves marks the **edge of the studied range**, not a proven feature: above roughly 6-7
cups the cohorts thin out, so an apparent optimum there is more likely the sampling boundary than a
knee in the curve.

Shape aside, the substantive question is *which* outcomes coffee moves, in which direction, and how
certainly.

## What coffee moves, by evidence state (the outcome menu)

The shape tells you how a benefit accrues with dose; it does not tell you which benefits are real.
Sorting coffee's outcomes into the four evidence states — benefit, harm, no meaningful effect, and
insufficient evidence — is the substantive appraisal. You have to read two facts together for every row,
never collapsing them into one: the **magnitude** of the association, and the **certainty** that coffee
causes it. A large, consistent association graded low-certainty is not a contradiction — it is a big
number the evidence cannot yet attribute to coffee. Almost every estimate below is observational and
GRADE-rated low or very low, and the genetic (Mendelian-randomization) evidence finds no causal signal
for the mortality or diabetes arms.

| Outcome | Direction + magnitude (vs low/none) | Evidence state |
|---|---|---|
| Liver disease (cirrhosis, fibrosis, chronic liver disease, liver cancer) | benefit, largest + most consistent: chronic liver disease RR 0.35; liver cancer 0.50; cirrhosis 0.61 | benefit (assoc.) — only rows clearing GRADE's magnitude bar |
| All-cause mortality | benefit, nadir RR **0.83** at 3 cups | benefit (assoc.) — MR-null |
| CV mortality / CVD | CV mortality 0.81; incident CVD 0.85 at 3-5 cups | benefit (assoc.) — MR-null |
| Type 2 diabetes | high-vs-low 0.70; monotone 1-6 cups (Ding) | benefit (assoc.) |
| Total cancer incidence | 0.82, most single sites null | benefit (assoc.) — see below |
| Parkinson's, Alzheimer's, depression | lower risk, consistent | benefit (assoc.) — reverse-causation caveat |
| Gallstones, metabolic syndrome, renal stones, gout | lower risk (metabolic syndrome 0.91, 0.86-0.95) | benefit (assoc.) — minor |
| Blood pressure | RCTs marginal/NS; obs null | no meaningful effect |
| Fracture (women) | high-vs-low RR 1.14 | harm (women only) — see the two real harms |
| Lung / cancer mortality in smokers | apparent harm (lung OR 1.59) | confounded — see the smoking correction |
| Sleep, respiratory | — | insufficient (no MA held) |

Numbers: [@poole2017], T2D dose-response
[@ding2014].

**Liver disease is the big rock within the menu.** Poole: «The beneficial associations between
consumption and liver conditions stand out as consistently having the highest magnitude compared with
other outcomes across exposure categories» [@poole2017]. Chronic liver disease (RR \~0.35) and liver cancer (\~0.50, sitting on the boundary) are the
only outcomes whose effect size is large enough to permit a rating-up of observational evidence
([[Upgrading Observational Evidence]]). The proposed mechanism — antioxidant and anti-inflammatory
action plus a direct antifibrotic effect on hepatic stellate cells — is biologically plausible but not
established. That makes liver the strongest RCT candidate on the menu — a candidate, not a
recommendation.

**Type 2 diabetes** rests on notably firm observational footing. Its estimate comes
from Ding's dose-response meta-analysis (28 cohorts, \~1.1M participants)
[@ding2014], and the residual confounding there runs
*toward* the null (heavier coffee drinkers tended to have less healthy lifestyles), so it is a weaker
escape than for mortality. Poole's headline 0.70 is Ding's own highest-category figure, so the effect
traces to Ding, not the umbrella.

**Parkinson's, Alzheimer's, and depression** all show consistent lower-risk associations. Parkinson's
is the most studied and survives adjustment for smoking, but it carries a specific reverse-causation
suspicion: coffee intake can fall during the years-long prodromal phase before diagnosis, which would
depress recorded intake among future cases and mimic protection ([[Parkinsons Disease Modifiable Risk Factors]]). **Blood pressure** shows no meaningful effect — RCT changes are marginal and
non-significant, observational estimates null.

**Cancer** splits by row. Total cancer *incidence* carries a benefit association (\~0.82), but most
single sites are null, and the apparent *harms* (lung cancer OR 1.59; cancer mortality among smokers)
run through smoking rather than coffee. The IARC 2016 monograph that reclassified coffee is not held in
the fabric, so this appraisal makes no cancer-causation claim in either direction.

Bone/fracture and the pregnancy harm are stratum-specific and appear with the two real harms below.
Two of the benefit rows above — all-cause mortality and total cancer — are hostage to a single
confounder: coffee drinkers are enriched for smokers, and smoking is the dominant driver of both death
and cancer. Before either can be read as coffee's doing, it needs the smoking correction.

## Smoking confounds the curve: Grosso's referent correction

Grosso 2016 — a dose-response meta-analysis of 31 cohorts, 1,610,543 individuals — performs the never-smoker referent correction [[The U-Shaped Association Artifact]] that Poole's evidence base left pending, re-running the coffee-mortality dose-response within smoking strata to see what the dominant confounder was doing. [@grosso2016] Heterogeneity fell in every smoking-stratified model, a sign that smoking status was a major source of between-study variance.

Cancer mortality is the clean sign-flip. Pooled, coffee shows no cancer-mortality association; stratified, «cancer mortality was significantly decreased only when considering non-smokers, while increased in smokers». [@grosso2016] Grosso reads the flip as smoking confounding, not effect-modification: it is «hardly plausible that any biological effect of coffee causally differs by smoking status», so «residual confounding by smoking is the most likely the explanation» — heavy coffee drinkers are enriched for smokers, and smoking is the dominant cancer risk factor. [@grosso2016]

All-cause and CVD mortality linearize too, but Grosso does not attribute that to smoking. In never-smokers the curve is linear-monotone — roughly RR 0.94 per cup, \~6% lower risk each cup — where the pooled curve is a reverse-J (nadir RR 0.83 at 3 cups, rising to 0.90 at 7). [@grosso2016] Removing smokers thus erases the upper-arm attenuation here as well. But Grosso reports «No differences were found between smokers and non-smokers for all-cause and CVD mortality risk», attributing the smoking artifact explicitly only to cancer. [@grosso2016] So the wiki reads the all-cause upper arm as a smoking artifact — an inference from the linear-vs-J contrast, held against Grosso's own no-difference statement, and so suggestive, not established.

The correction has its limits: it removes the dominant confounder, not SES or reverse-causation residuals, and Grosso is observational throughout. Poole's Mendelian-randomization citations still find no genetic causal signal for coffee->mortality. [@poole2017] These are consistent, not contradictory: the per-cup benefit survives the smoking correction yet not the genetic instrument, leaving residual non-smoking confounding as the live explanation -> [[The U-Shaped Association Artifact]]. Smoking is not the whole story, but the surviving benefit is not established as causal.

Smoking-confounded or not, two harms are real and stratum-specific — and they, not the averages, gate the recommendation.

## The two real harms — stratum-specific

Two harms do not wash out under the smoking correction or into the population
averages, and it is they, not the pooled numbers, that gate the recommendation.
Each is confined to one stratum, and each runs through caffeine.

**Pregnancy — a contraindication, not a shift in the general estimate.** Here the
harm survives smoking adjustment: low birth weight OR 1.31, pregnancy loss 1.46,
first-trimester preterm birth 1.22
[@poole2017]. The mechanism is
dose-amplification of the same intake, not a new pathway: «The half life of caffeine
is known to double during pregnancy», caffeine is known to «easily cross the
placenta», and activity of CYP1A2 — the liver enzyme that clears caffeine — is «low
in the fetus, resulting in prolonged fetal exposure»
[@poole2017]. An equivalent
per-cup intake therefore delivers a higher effective fetal dose. This is a
**contraindication (route c)** for the pregnancy / trying-to-conceive stratum — limit
caffeine — and it does not move the general-population estimate.

**Fracture in women — a sex-modified, offsettable harm.** There is no overall
association, but sex is an effect modifier: «high versus low consumption was
associated with an increased risk of fracture in women (relative risk 1.14, 95%
confidence interval 1.05 to 1.24) and a decreased risk in men (0.76, 0.62 to 0.94)»,
test of interaction P<0.001
[@poole2017]. Two attenuators
bound it:

- a caffeine systematic review found «a caffeine intake of 400 mg/day (about four cups
  of coffee) was not associated with adverse effects on the risk of fracture, falls,
  bone mineral density, or calcium metabolism»
  [@poole2017];
- «only a small amount of milk added to coffee would be needed to offset any negative
  effects on calcium absorption»
  [@poole2017].

So the harm is plausibly confined to women with inadequate calcium intake and is
offsettable — a minor caution for a narrow stratum, not a reason to quit.

Both harms run through caffeine — the pregnancy signal by direct fetal dose, the
fracture signal via caffeine and calcium — which raises the question the benefit
evidence answers the other way: whether caffeine is even the active agent for the
*benefits*.

## What varies within the cup

The dose figures above treat a cup of coffee as a fixed unit, but the cohorts behind them pooled
drinks that differ on three axes never held constant: caffeinated versus decaffeinated, filtered
versus unfiltered, and black versus sweetened. Each axis moves a different outcome in a different
direction, so a recommendation has to name which one it is about before it means
anything -> [[Is the Food Category Doing Any Work]].

### Caffeine or the matrix? The decaf test

Decaffeinated coffee reproduces the main benefits. It lowered all-cause and cardiovascular mortality
at magnitudes similar to caffeinated coffee [@poole2017], and for type 2 diabetes the per-cup reduction is statistically indistinguishable between
the two — RR 0.94 (0.91-0.98) decaffeinated versus 0.91 (0.89-0.94) caffeinated, P for difference
0.17 [@ding2014]. So the agent behind the
mortality, metabolic and liver benefits is the **coffee matrix** — its chlorogenic acids and roughly
1,000 other bioactive compounds — not the caffeine; Poole studied «coffee, rather than caffeine» for
exactly this reason [@poole2017].

This decouples the benefit from the one component that carries the downsides. Caffeine — not the
matrix — drives coffee's acute physiology, and its half-life of roughly 5-6 hours underlies its
effects on sleep, blood pressure and anxiety; it is also the agent behind the pregnancy
harm. Where caffeine specifically matters is narrow: the pregnancy harm runs through fetal caffeine
exposure, and a CYP1A2 gene-dose signal — slow metabolizers at higher hypertension risk than fast
ones — is a candidate effect-modifier, not yet an actionable one [@poole2017].

The equivalence is not perfect: categorically the caffeinated arm is slightly stronger for type 2
diabetes (P = 0.07 at the highest intake) [@ding2014], so caffeine may add a marginal increment — the claim is that the matrix carries the bulk of the
benefit, not that caffeine contributes nothing. The caffeine-alone associations are themselves suspect:
«none of the included studies controlled for coffee intake when modeling caffeine intake and diabetes»
[@ding2014], so caffeine's apparent solo effect is
confounded by its collinearity with coffee — which again cuts toward the matrix, not the molecule.

If caffeine is not the lever for the benefits, a different within-cup boundary still carries a real
one: how the coffee is brewed.

### Brewing method: the diterpene lever

Filtered versus unfiltered is load-bearing for blood lipids, through two diterpenes — **cafestol and
kahweol** — that survive some brewing methods and not others. Unfiltered preparations (boiled,
cafetière/French press, espresso) carry them; paper-filtered and instant coffee do not. In RCT
meta-analysis, unfiltered coffee raised total cholesterol by +0.19 mmol/L (0.10-0.28), LDL by +0.14
and triglycerides by +0.14, while a paper filter left «no significant changes to low density
lipoprotein cholesterol or triglycerides compared with unfiltered (boiled) coffee» [@poole2017].

But the lipid signal is a surrogate that does not track the hard outcome: LDL moves the wrong way
while coffee is not associated with worse cardiovascular events [@poole2017], and the change is small and reverses on stopping -> [[Surrogate Outcomes]]. The residual that is actually actionable is narrow: someone with high LDL or established
ASCVD risk who drinks large volumes of unfiltered coffee has a cheap lever — switch to filtered. For
everyone else the diterpene effect is marginal. The brewing boundary, not the word coffee, is the
decision variable here -> [[Is the Food Category Doing Any Work]].

Brewing is one uncontrolled axis inside the cup; what is added to it is another.

### What's added: sugar changes the exposure

The cohort exposure "coffee" also pools it black, with milk, and with sugar. Milk's effect is minor —
a little added to coffee offsets its small drag on calcium absorption [@poole2017]. Added sugar is not minor: a sugar-sweetened coffee drink
imports the free-sugars / sugar-sweetened-beverage harm held elsewhere -> [[Free Sugars Intake]], so
the mortality and diabetes benefits attach to **coffee (the beverage)**, not to a sugar-loaded coffee
drink. No held cohort separates sweetened from unsweetened coffee on hard outcomes — a named gap in
the evidence, so this reading is, not a measured finding.

Sweetened-versus-unsweetened is one question the evidence cannot yet answer — and it is not the only
one.

## What the evidence does NOT settle (named gaps)

Three questions stay open, and they are *insufficient evidence*, not evidence of no effect — the distinction the four-state discipline keeps: silence from an unstudied question is not a null.

- **Sleep and timing.** No coffee/caffeine-and-sleep meta-analysis is held — Poole's umbrella excluded it, and none existed at review time [@poole2017]. Yet caffeine's half-life means an afternoon or evening cup plausibly still carries an active dose at bedtime, so late-day intake could disrupt sleep. That is a **named gap, mechanism-directional only** — a reason to expect an effect and to time intake earlier, **not** a measured finding and explicitly **not** a null. It attaches to [[Sleep and Metabolic Health]] / [[Sleep Duration and Mortality]] if a coffee/caffeine-sleep MA is ever acquired.

- **Cancer and the IARC monograph.** The 2016 IARC re-evaluation (which removed coffee from Group 2B, and whose Group 2A "very hot beverages" rating is about *temperature*, not coffee) is **not held**, so this appraisal makes no cancer-causation claim here [@poole2017]. The held evidence shows something narrower: total-cancer *incidence* carries a benefit association, the apparent site harms (lung) collapse under smoking correction, and **most single cancer sites are null or insufficient** -> [[The U-Shaped Association Artifact]].

- **Respiratory outcomes and the natural history of established disease.** Respiratory endpoints, and the course of already-diagnosed disease (only one MA, post-MI), rest on too little evidence to state a direction — **insufficient**, held as a gap [@poole2017].

Netting the settled, the confounded, and the still-unknown is what produces the decision.

## Decision summary — for whom, what to do

The population verdict, as an action: for most non-pregnant adults there is **no strong health reason to start coffee, increase it, or quit**, anywhere within roughly 3-4 cups/day. The lever is small and uncertain, and the dose-response is flat near its nadir, so the exact cup count changes nothing. That ceiling **is** the result — it licenses stopping the optimization rather than prescribing a change.

The genuinely stratum-specific calls, deferred to here rather than led with:

- **Pregnancy / trying to conceive** — limit. Harm survives smoking adjustment and runs through caffeine dose-amplification — a contraindication for the stratum, not a shift in the general estimate.
- **High-LDL or established-ASCVD-risk drinkers of large volumes of *unfiltered* coffee** — switch to filtered. A cheap [[Is the Food Category Doing Any Work|brew-method]] lever via the diterpenes cafestol and kahweol; marginal for everyone else.
- **Women at high fracture risk with low calcium intake** — a minor caution only, and a little milk offsets the calcium loss.

One finding to watch, not yet to act on: **liver disease** is the single benefit large enough to clear GRADE's rating-up bar (chronic liver disease high-vs-low RR 0.35 [@poole2017]; liver cancer \~0.50) and Poole's named best RCT target — a **candidate, not a recommendation**.

Which of these applies, and how you weigh the outcomes, is the individual layer: the appraisal above is general, and the stratum and goals belong here, at the end, not at the top of the page.

### Mandatory caveats

- **Appraise, do not prescribe.** This is a general, population-level appraisal, not medical advice;
  selecting a target, screening for individual contraindications (pregnancy, medication interactions,
  arrhythmia, anxiety disorders), and managing them are prescriber acts requiring information this
  document does not hold.
- **Open loop.** This wiki grades internal coherence and fidelity to its sources — never whether a
  recommendation actually improves outcomes in the world. No step here tests a claim against a realized
  outcome, so a clean appraisal is not a validated result.
- **Health axis only.** This cut weighs coffee on longevity, cardiometabolic, liver, and neurological
  outcomes; taste, ritual, cost, and caffeine-dependence are real and yours to weigh, not appraised here.
- **A general appraisal, applied per person.** Your stratum — pregnancy, cardiovascular and fracture
  risk, calcium intake, brew and sweetening habits — and your goals decide the individual weighting, at
  the end, not the top.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | What are the effects of coffee on health, longevity, and quality of life — for someone deciding whether, how much, and how to drink it? |
> | **Evidence included** | 3 sources — 3 gold |
> | **Overall certainty** | **Medium** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | All sources are gold or high tier. |
> | **Last updated** | 2026-08-12 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Coffee.md) |

## References

---
type: deliverable
title: Coffee and Health
question: What does the evidence show about coffee — how much, what form, for whom, on which patient-important outcomes — and how good is that evidence?
sources: [Poole - Coffee Consumption and Health 2017, Grosso - Coffee Mortality Smokers Nonsmokers 2016, Ding - Coffee and Type 2 Diabetes 2014]
confidence: medium
created: 2026-08-04
updated: 2026-08-04
self_critiqued: 2026-08-04
---

This is a general, population-level appraisal of what the evidence says about coffee for anyone the
studies speak to. It is not advice for one person; whether you should start, stop, or change your
coffee depends on your stratum and your goals, which belong at the end, not here.

The short version: for most non-pregnant adults, coffee up to about three to four cups a day is a
low-cost habit that is more likely to help than harm, but the effect is small and the evidence is
almost entirely observational — so **there is no strong health reason to start drinking coffee, to
increase it, or to quit within that range.** Reporting that the lever is small and uncertain is itself
the useful result: it licenses someone to stop optimizing here. The genuinely actionable calls are all
stratum-specific, and there are three of them (pregnancy; women at high fracture risk with low calcium;
heavy drinkers of unfiltered coffee at high cardiovascular risk).

## How good is the evidence — read this first

Almost everything below is an **association, not a demonstrated effect.** The anchor is a single
gold-tier BMJ umbrella review [@poole2017] that
pooled **201 observational meta-analyses (67 outcomes) plus 17 meta-analyses of RCTs (9 outcomes)** —
overwhelmingly observational cohort data, GRADE-rated **low (\~25%) or very low (\~75%)**, with the
underlying reviews of median AMSTAR quality only 5/11. Even the RCT meta-analyses graded low.

Two things keep this honest and both cut against reading the numbers as effects:

- **Confounding by smoking is the dominant threat.** Coffee drinkers have historically been enriched
  for smokers, and smoking is the strongest single mortality and cancer risk factor — so residual
  smoking confounding can *manufacture* an apparent harm or *mask* a benefit. Poole notes the apparent
  harms «were largely nullified by adequate adjustment for smoking, except in pregnancy» [@poole2017]. Coffee also tracks income and education.
- **The genetic evidence is null.** The two Mendelian-randomization studies Poole cites — natural
  experiments that use inherited coffee-metabolism genes as an instrument, immune to reverse causation
  — found **no genetic evidence for a causal coffee->mortality or coffee->type-2-diabetes relation**,
  «suggesting residual confounding could result in the observed associations» [@poole2017]. The caveat on the caveat: MR assumes a linear
  dose-response and «might not capture non-linear differences», so it removes the *linear* causal
  effect without refuting a non-linear one.

Net: treat the benefits below as **plausibly-confounded associations pending a randomized trial** —
which is Poole's own conclusion. -> [[Upgrading Observational Evidence]]

### A measurement caveat that runs the other way

There is no standard cup. Bean, roast, grind, and brew all vary the dose, so cup-based exposure is
coarse. This misclassification is non-differential (unrelated to who gets sick), which biases estimates
**toward the null** — so the true gradients could be *steeper* than reported, not shallower. It is a
reason the associations might understate a real effect, not overstate it. -> [[Measurement Error in Dietary Assessment]]

## How much — the dose-response has a nadir, not a harmful upper arm

Where Poole found non-linearity (all-cause mortality, cardiovascular mortality, incident CVD, heart
failure), the curve is a **reverse-J that flattens**: risk falls to a nadir near **three to four cups
a day**, and «increase in consumption beyond this intake does not seem to be associated with increased
risk of harm, rather the magnitude of the benefit is reduced» [@poole2017]. Two consequences for the decision:

- **The nadir is a region, not a target.** The curve is flat around it, so two versus four cups barely
  differs, and the burden is on anyone claiming a sharp optimum.
- **Unlike alcohol, the high end is attenuated benefit, not risk.** There is no harmful upper arm for
  mortality within studied intakes. So the question of whether the curve is real is primarily about the
  *lower* (protective) arm — is a little better than none, or is that confounded? -> [[The U-Shaped Association Artifact]]

Grosso's dose-response meta-analysis (31 cohorts, 1,610,543 individuals) gives the pooled numbers
for all-cause mortality versus no coffee: RR **0.92** at 1 cup, **0.85** at 2, a nadir of **0.83** at
3, and back up to **0.90 (0.85-0.96)** at 7 — a J that plateaus then drifts toward null, never above
it [@grosso2016, Table 2]. For type 2
diabetes the shape is different — monotone with no plateau (below).

## Is it the coffee or the caffeine? Mostly the coffee

Decaffeinated coffee reproduces the main benefits. It lowered all-cause and cardiovascular mortality by
a similar magnitude (nadir 2-4 cups), and for type 2 diabetes «Consumption of decaffeinated coffee also
seemed to have similar associations of comparable magnitude» [@poole2017]. Poole deliberately chose *coffee*, not caffeine, as the exposure, because
coffee's \~1000+ bioactives «could be different to effects of caffeine from other sources» [@poole2017].

So for the mortality, metabolic, and liver benefits, the active exposure is the **coffee matrix**
(chlorogenic acids, diterpenes, and the rest), not the caffeine — which usefully decouples the benefit
from the one component that drives the pregnancy harm and the sleep, blood-pressure, and anxiety
physiology. -> [[Is the Food Category Doing Any Work]]

### The type-2-diabetes numbers make this quantitative

Ding's gold-tier dose-response meta-analysis (28 prospective cohorts, 1,109,272 participants, 45,335
incident cases, median 11-year follow-up) is the primary study *inside* Poole's umbrella for diabetes —
so it refines Poole's summary, it is not a second independent confirmation. Its per-cup figures:
caffeinated RR **0.91 (0.89-0.94)** versus decaffeinated **0.94 (0.91-0.98)**, with **P for difference
= 0.17 (not significant)** [@ding2014]. Ding's own
reading: «These results suggest that components of coffee other than caffeine are responsible for this
putative beneﬁcial effect» [@ding2014].

Even the caffeine-alone association is not clean: «none of the included studies controlled for coffee
intake when modeling caffeine intake», so it is «likely to be confounded by other components of coffee
because of the collinearity» [@ding2014]. The bound
kept honest: categorically the caffeinated arm is *slightly* stronger (P=0.03 at the second-highest
category, P=0.07 at the highest), so decaf clearly works and caffeine may add a marginal increment —
*caffeine does nothing* would overstate it.

### Where caffeine specifically does matter

Two places. **Pregnancy** — fetal caffeine exposure is the mechanism of the one surviving harm (below).
And a **gene-dose effect on blood pressure**: «Those with alleles for slow caffeine metabolism were at
increased risk of hypertension compared with those with alleles for fast caffeine metabolism»
[@poole2017] — a candidate effect-modifier (via
the CYP1A2 caffeine-metabolizing enzyme), not yet an actionable stratifier because slow-metabolizer
status is not routinely known.

## Brewing method — the one clean modifiable lever

The single within-*coffee* boundary that carries a real, mechanistic decision is **filtered versus
unfiltered.** Coffee overall raises serum lipids in RCT meta-analysis — total cholesterol **+0.19
mmol/L (0.10-0.28)**, LDL **+0.14**, triglycerides **+0.14** — through the diterpenes **cafestol and
kahweol**, and the effect tracks the *unfiltered* preparations. Instant and filter coffee contain
«negligible» diterpenes; espresso more; boiled and cafetière (French press) the most. A paper filter
removes most of it: «The increases in cholesterol concentration were mitigated with filtered coffee,
with a marginal rise in concentration (mean difference 0.09 mmol/L, 0.02 to 0.17) and no significant
changes to low density lipoprotein cholesterol or triglycerides compared with unfiltered (boiled)
coffee» [@poole2017].

Do not over-weight the lipid signal, though. Poole notes the changes are small, reverse on abstinence,
and coffee «does not seem to be associated with adverse cardiovascular outcomes» despite them — the LDL
surrogate moves the wrong way while hard cardiovascular outcomes do not, a [[Surrogate Outcomes]]
disconnect. The actionable residual is narrow: **someone drinking large volumes of unfiltered coffee
who has high LDL or established cardiovascular risk has a cheap lever — switch to filtered.** For
everyone else the diterpene effect is marginal. -> [[Is the Food Category Doing Any Work]]

## What coffee moves, outcome by outcome

All magnitudes are versus no coffee unless noted, and all carry the confounding caveat above. States are
the four the wiki keeps distinct: benefit, harm, no meaningful effect, insufficient.

| Outcome | Direction + magnitude | State | Note |
|---|---|---|---|
| **Liver disease** (cirrhosis, fibrosis, NAFLD, chronic liver disease) | benefit, LARGEST: chronic liver disease high-vs-low RR 0.35; cirrhosis 0.61; NAFLD 0.71 | benefit | only outcomes reaching GRADE-upgradeable magnitude (RR <0.5) |
| **All-cause mortality** | 0.83 at 3 cups | benefit (assoc.) | MR-null; confounding caveat |
| **CV mortality / incident CVD** | CV mortality 0.81 (0.72-0.90); incident CVD 0.85 (0.80-0.90) at 3-5 cups | benefit (assoc.) | MR-null |
| **Type 2 diabetes** | high-vs-low 0.70 (0.65-0.75); monotone across 1-6 cups | benefit (assoc.) | decaf lowers risk too |
| **Total cancer incidence** | high-vs-low 0.82 (0.74-0.89) | benefit (assoc.) | most single sites null |
| **Parkinson's, depression, Alzheimer's** | lower risk, consistent | benefit (assoc.) | Parkinson's survives smoking adjustment |
| **Gallstones, gout, renal stones, metabolic syndrome** | lower risk | benefit (assoc.) | — |
| **Blood pressure** | RCTs marginal, non-significant; observational null | no meaningful effect | — |
| **Lung cancer** | apparent harm OR 1.59 high-vs-low | **confounded to null** | «not seen in never smokers» — residual smoking confounding |
| **Most cancer sites** (gastric, colorectal, breast, ovarian, pancreatic...) | no significant association | no meaningful effect / insufficient | — |
| **Pregnancy** (low birth weight, preterm, loss) | harm: LBW OR 1.31; loss 1.46; 1st-trimester preterm 1.22 | **harm** | survives smoking adjustment |
| **Fracture in women** | high-vs-low RR 1.14 (1.05-1.24); men 0.76 | **harm (women only)** | sex effect-modifier, P<0.001 |
| **Sleep, respiratory** | — | **insufficient** | no meta-analysis existed — named gaps, not nulls |

[@poole2017]

### The liver row is the big rock

Poole: «The beneficial associations between consumption and liver conditions stand out as consistently
having the highest magnitude compared with other outcomes across exposure categories» [@poole2017]. Liver cancer and chronic liver disease are the *only*
outcomes whose effect size (RR below 0.5) is large enough to permit a GRADE upgrade of observational
evidence — the threshold at which bias is unlikely to explain the whole effect [@poole2017] -> [[Upgrading Observational Evidence]]. An
antioxidant / anti-inflammatory and direct antifibrotic mechanism on hepatic stellate cells is proposed
[inferred from @poole2017]. This is the one large, mechanistically-supported benefit that would
justify a trial — but it is the best causal *candidate*, not yet a recommendation.

### The type-2-diabetes benefit sits on firmer footing than mortality

Ding's cubic-spline gradient versus no coffee runs **0.92 / 0.85 / 0.79 / 0.75 / 0.71 / 0.67** for
1 to 6 cups a day — «6 cups/day of coffee was associated with a 33% lower risk of type 2 diabetes»
[@ding2014]. The shape is monotone-decreasing with
mildly diminishing per-cup returns and no plateau within the range, and non-linearity was *statistically
detected* — so it is a genuine spline fit, not an artifact of forcing a single straight-line coefficient
onto the data.

Two features the mortality arm lacks make diabetes the more robust *observational* case:
the adjusted and unadjusted curves nearly coincide, and the confounding runs **toward the null** —
«higher coffee consumption was generally associated with a less healthy lifestyle... the true
association... might be stronger than observed» [@ding2014]. That is the opposite direction from the mortality arm, where coffee-smoking correlation
*manufactures* apparent benefit. But causality is still open: the same MR-null covers diabetes, so it
remains a plausibly-confounded association pending a trial. Magnitudes are relative-only — a person's
absolute benefit scales with their baseline diabetes risk.

## Smoking confounds the mortality curve — Grosso's referent correction

Grosso's move was to **stratify the dose-response by smoking status.** In **never-smokers** the curve
becomes **linear-monotone** with no upper-arm attenuation: «a linear dose-response analysis showed a
signiﬁcant decreased risk by 6 % for each additional cup of coffee per day consumed for all-cause and
CVD mortality (RR = 0.94, 95 % CI = 0.93, 0.96 and RR = 0.94, 95 % CI = 0.91, 0.97, respectively) and
signiﬁcant decreased risk of 2 % for cancer mortality (RR = 0.98, 95 % CI = 0.96, 1.00)» [@grosso2016]. Heterogeneity fell in every
smoking-stratified model — a tell that smoking was a major source of between-study variance.

- **Cancer is the clean confounding demonstration** — it *flips sign*: «cancer mortality was
  signiﬁcantly decreased only when considering non-smokers, while increased in smokers» [@grosso2016]. Grosso pins this to confounding, not
  biology: «it is hardly plausible that any biological effect of coffee causally diﬀers by smoking
  status... residual confounding by smoking is the most likely the explanation» [@grosso2016].
- **For all-cause and CVD the artifact reading is weaker, and Grosso does not make it.** Removing
  smokers does linearize these curves too, but Grosso reports «No diﬀerences were found between smokers
  and non-smokers for all-cause and CVD mortality risk» [@grosso2016], attributing the smoking artifact explicitly only to cancer. Treat the
  all-cause/CVD version as suggestive, not established.
- **What it does not fix.** Grosso is observational — it removes the dominant confounder but not SES,
  reverse causation, or other residuals, and Poole's MR found no genetic signal. So the two are
  consistent: the per-cup benefit **survives the smoking referent-correction yet not the genetic
  instrument**, pointing to residual *non-smoking* confounding as the live remaining explanation. The
  \~6% relative reduction per cup is small and given without a baseline risk (relative-only). -> [[The U-Shaped Association Artifact]]

## The two real harms — stratum-specific, and they gate the recommendation

- **Pregnancy** is the one place harm survives smoking adjustment: low birth weight OR **1.31
  (1.03-1.67)**, pregnancy loss **1.46 (1.06-1.99)**, first-trimester preterm **1.22 (1.00-1.49)**. The
  mechanism is dose-amplification of caffeine, not a new pathway: «The half life of caffeine is known
  to double during pregnancy... Caffeine is also known to easily cross the placenta, and activity of
  the caffeine metabolising enzyme, CYP1A2, is low in the fetus, resulting in prolonged fetal exposure»
  [@poole2017]. The same per-cup intake delivers a
  higher effective fetal dose. This is a contraindication for pregnancy or trying to conceive, not a
  shift in the general estimate.
- **Fracture in women** — no overall association, but sex is a genuine effect-modifier: «high versus
  low consumption was associated with an increased risk of fracture in women (relative risk 1.14, 95%
  confidence interval 1.05 to 1.24) and a decreased risk in men (0.76, 0.62 to 0.94)... test of
  interaction... 1.50, 1.20 to 1.88; P<0.001)» [@poole2017]. Two attenuators Poole flags: a caffeine review found 400 mg/day (\~4 cups) *not* associated
  with fracture or bone-density harm, and «only a small amount of milk added to coffee would be needed
  to offset any negative effects on calcium absorption». So the harm is plausibly confined to women with
  inadequate calcium, and adding milk may remove it — a small caution, not a stop.

## Putting it together — the decision

- **For most non-pregnant adults, coffee is not a big rock.** It is a low-cost, likely-net-favourable
  or neutral habit — *more likely to benefit than harm* over a flat dose-response — so there is no
  strong reason to start, increase, or quit for health within about three to four cups a day. That the
  lever is small and uncertain is the decision-relevant finding.
- **The genuinely actionable, stratum-specific calls are three:** (1) pregnancy or trying to conceive —
  limit caffeine (contraindication); (2) women at high fracture risk with low calcium intake — a
  small caution, offset by adding milk; (3) high LDL or established cardiovascular risk while drinking
  large volumes of unfiltered coffee — switch to filtered.
- **The one large, mechanistically-supported benefit worth a trial is liver disease** — the best causal
  candidate in the whole picture, but not yet a recommendation.

The full appraisal these calls rest on is [[Coffee Consumption and Health]].

## Named gaps — what this appraisal cannot yet answer

- **Cancer classification is not held.** The 2016 IARC monograph that removed coffee from Group 2B
  ("possibly carcinogenic") — and rated *very hot beverages* as 2A, which is about drinking
  temperature, not coffee — is not in the corpus, so no claim is written from it here. What the held
  evidence supports is only the confounding story above (an apparent cancer signal that is largely a
  smoking artifact).
- **Sleep and timing is a true gap, not a null.** No coffee-or-caffeine-and-sleep meta-analysis was
  held — Poole excluded the question because none existed at review time [@poole2017]. Caffeine's half-life is roughly five to six hours, so
  afternoon and evening consumption plausibly degrades sleep, but the wiki holds no pooled evidence to
  quantify the time-of-day threshold. Treat *stop drinking coffee by early afternoon* as mechanistically
  reasonable and formally unadjudicated here.
- **Effect on established disease is largely unstudied** — only one meta-analysis (post-MI mortality)
  addressed a diseased population, so the effect on the *natural history* of established disease is
  insufficient-evidence, not benefit.
- **No randomized hard-outcome trial exists.** Every benefit above is observational; the causal
  question stays open, and the Mendelian-randomization evidence is null.

---

### Mandatory caveats

- **Open loop.** This wiki grades internal coherence and fidelity to its sources — never whether a
  recommendation actually improves outcomes in the world. A clean appraisal is not a validated result.
- **Appraise, do not prescribe.** This is a general, population-level appraisal, not medical advice;
  selecting, dosing, and screening for individual contraindications are prescriber acts requiring
  information this document does not hold.
- **A general appraisal, applied per person.** Pregnancy status, sex and calcium intake, baseline LDL
  and cardiovascular risk, caffeine sensitivity, and your realistic alternative decide the individual
  weighting.
- **Health axis only.** This cut weighs coffee on longevity, cardiometabolic, liver, and
  musculoskeletal outcomes; cost, taste, and ritual are real and yours to weigh, not appraised here.
- **The target is not agreement or divergence with any guideline.** It is showing how good the coffee
  evidence is — overwhelmingly observational, confounded by smoking, genetically null — and where,
  despite that, a small stratum-specific decision changes.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | What does the evidence show about coffee — how much, what form, for whom, on which patient-important outcomes — and how good is that evidence? |
> | **Evidence included** | 3 sources — 3 gold |
> | **Overall certainty** | **Medium** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | All sources are gold or high tier. |
> | **Last updated** | 2026-08-04 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Coffee.md) |

## References

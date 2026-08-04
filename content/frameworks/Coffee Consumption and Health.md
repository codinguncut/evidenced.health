---
type: framework
question: What does habitual coffee consumption do to patient-important outcomes, for whom, at what dose, and how much of it is causal?
aliases: [Coffee, Coffee and Mortality, Coffee and Health, Caffeine and Health, Coffee Dose, Filtered vs Unfiltered Coffee, Decaffeinated Coffee]
authors: [Poole, Robin; Kennedy, Oliver J; Roderick, Paul; Fallowfield, Jonathan A; Hayes, Peter C; Parkes, Julie; Grosso, Giuseppe; Micek, Agnieszka; Godos, Justyna; Martinez-Gonzalez, Miguel A; Giovannucci, Edward L; Ding, Ming; Bhupathiraju, Shilpa N; Chen, Mu; van Dam, Rob M; Hu, Frank B]
sources: [Poole - Coffee Consumption and Health 2017, Grosso - Coffee Mortality Smokers Nonsmokers 2016, Ding - Coffee and Type 2 Diabetes 2014]
cluster: coffee
nucleus: true
confidence: medium
created: 2026-08-04
updated: 2026-08-04
self_critiqued: 2026-08-04
relationships:
  related_to:
    - The U-Shaped Association Artifact
    - Is the Food Category Doing Any Work
    - Upgrading Observational Evidence
    - Measurement Error in Dietary Assessment
    - Alcohol and Mortality and Vascular Disease
---

The domain-opening summary for coffee, built on one gold-tier umbrella review
[@poole2017] that assimilated **201 observational
meta-analyses (67 outcomes) + 17 RCT meta-analyses (9 outcomes)**. The one-line verdict Poole reaches:
coffee is «generally safe within usual levels of intake... and more likely to benefit health than
harm», with «largest risk reduction for various health outcomes at three to four cups a day».
[@poole2017]

**But the whole page rests on a single load-bearing caveat, stated up front so nothing below reads as
established causation:** almost every estimate here is **observational**, GRADE-rated **low (\~25%) or
very low (\~75%)**, and the two Mendelian-randomisation studies Poole cites found **no genetic evidence
for a causal coffee->mortality or coffee->T2D relation** — «suggesting residual confounding could
result in the observed associations in other studies». [@poole2017]
So read every RR below as *an association net of whatever smoking/SES confounding survived adjustment*,
not as an effect. The friction on how much of the protective arm is real is on
[[The U-Shaped Association Artifact]]. Grosso 2016 has now performed the smoker referent-correction (the
smoking-stratified dose-response detail below) [@grosso2016].

## The dose-response shape — a plateau, not a harmful upper arm `type-C`

Where Poole found non-linearity (all-cause mortality, CV mortality, CVD, heart failure), the shape is a
**reverse-J that flattens**: risk falls to a nadir near **3-4 cups/day**, and «increase in consumption
beyond this intake does not seem to be associated with increased risk of harm, rather the magnitude of
the benefit is reduced». [@poole2017] Two decision
consequences:

- The nadir is a **region, not a target** — the curve is flat around it, so 2 vs 4 cups barely differs,
  and the burden is on anyone claiming a sharp optimum. This is the corpus's standing dose-response
  default (every reduction/increment near a flat region costs little either way).
- **No harmful upper arm for mortality** within studied intakes — unlike the alcohol J-curve, the *high*
  end is attenuated benefit, not risk. So the U/J-artifact question here is **primarily about the lower
  (protective) arm**: is the benefit-vs-none real, or confounded? -> [[The U-Shaped Association Artifact]].
  (Refinement below: in never-smokers Grosso's curve is linear-monotone with no plateau — cleanly a
  smoking artifact for the *cancer* arm, more tentatively for all-cause/CVD.)
  For T2D the dose-response is monotone («risk was still lower for each dose... between one and six
  cups»), not even a plateau.

## Smoking confounds the mortality curve — Grosso's referent correction `type-F`

Grosso 2016 (a dose-response MA, 31 cohorts, **1,610,543 individuals**) is the smoker/non-smoker
**referent correction** Poole's page left pending. Two facts frame it: the overall (smoker-mixed)
all-cause curve is a J that plateaus then rises — nadir RR **0.83 at 3 cups**, back up to
**0.90 (0.85-0.96) at 7 cups** [@grosso2016, Table 2] —
while in **never-smokers the curve is linear-monotone**, no upper-arm attenuation: «a linear dose-response
analysis showed a signiﬁcant decreased risk by 6 % for each additional cup of coffee per day consumed
for all- cause and CVD mortality (RR = 0.94, 95 % CI = 0.93, 0.96 and RR = 0.94, 95 % CI = 0.91, 0.97,
respectively) and signiﬁcant decreased risk of 2 % for cancer mortality (RR = 0.98, 95 % CI = 0.96,
1.00).» [@grosso2016] Heterogeneity fell in
every smoking-stratified model — a tell that smoking status was a major between-study variance source.

- **The CANCER arm is the clean, Grosso-attributed confounding demonstration.** It *flips sign*:
  «cancer mortality was signiﬁcantly decreased only when considering non-smokers, while increased in
  smokers» [@grosso2016], and Grosso pins it
  to confounding, not effect-modification: «it is hardly plausible that any biological effect of coffee
  causally diﬀers by smoking status... residual confounding by smoking is the most likely the
  explanation». [@grosso2016] The mechanism —
  heavy coffee drinkers are enriched for smokers, and smoking is the dominant cancer/mortality risk
  factor — is [inferred from @grosso2016].
- **For all-cause/CVD the artifact reading is WEAKER, and Grosso himself does not make it.** The
  never-smoker curve is linear where the pooled one is a J — so removing smokers *does* remove the
  upper-arm attenuation for these outcomes — but Grosso reports «No diﬀerences were found between smokers
  and non-smokers for all-cause and CVD mortality risk... both signiﬁcantly reduced»
  [@grosso2016]. So he attributes the smoking
  artifact explicitly only to *cancer*; that the all-cause/CVD upper-arm is a smoking artifact is the
  wiki's **inference from the linear-vs-J contrast**, held against Grosso's own no-difference statement —
  treat it as suggestive, not established.
- **What it does NOT fix — the lower arm stays only partly adjudicated.** Grosso is observational: it
  removes the *dominant* confounder (smoking) but not SES / reverse causation / other residuals — and
  Poole's Mendelian-randomisation citations found **no genetic causal signal** for coffee->mortality. So
  the two are consistent, not in tension: the per-cup benefit **survives the smoking referent-correction**
  (Grosso) yet **not the genetic instrument** (Poole's MR) — pointing to residual *non-smoking*
  confounding as the remaining live explanation. Net: smoking is not the whole story of the association,
  but neither is the surviving linear benefit established as causal (\~6% relative per cup is small, and
  the source gives no baseline risk — **relative-only**). -> [[The U-Shaped Association Artifact]].

## What coffee moves, by evidence state

| Outcome | Direction + magnitude (vs none unless noted) | State | Note |
|---|---|---|---|
| **Liver disease** (cirrhosis, fibrosis, NAFLD, chronic liver disease, HCC) | benefit, LARGEST + most consistent: chronic liver disease high-vs-low RR 0.35; cirrhosis 0.61; NAFLD 0.71 | benefit | only outcomes reaching GRADE-upgradeable magnitude (<0.5) |
| **All-cause mortality** | 0.83 (0.83-0.88) at 3 cups | benefit (assoc.) | MR-null; confounding caveat |
| **CV mortality / CVD** | CV mort 0.81 (0.72-0.90); incident CVD 0.85 (0.80-0.90) at 3-5 cups | benefit (assoc.) | MR-null |
| **Type 2 diabetes** | high-vs-low 0.70 (0.65-0.75); monotone 1-6 cups (Ding) | benefit (assoc.) | decaf lowers risk too — details below |
| **Total cancer incidence** | high-vs-low 0.82 (0.74-0.89) | benefit (assoc.) | most single sites null |
| **Parkinson's, depression, Alzheimer's** | lower risk, consistent | benefit (assoc.) | Parkinson's survives smoking adjustment |
| **Gallstones, gout, renal stones, metabolic syndrome** | lower risk | benefit (assoc.) | — |
| **Blood pressure** | RCTs marginal, non-significant; obs null | no meaningful effect | — |
| **Lung cancer** | apparent harm OR 1.59 high-vs-low | **confounded to null** | «not seen in never smokers» — residual smoking confounding |
| **Most cancer sites** (gastric, colorectal, breast, ovarian, pancreatic...) | no significant association | no meaningful effect / insufficient | — |
| **Pregnancy** (low birth weight, preterm, pregnancy loss) | harm: LBW OR 1.31; loss 1.46; 1st-tri preterm 1.22 | **harm** | survives smoking adjustment; mechanism below |
| **Fracture in women** | high-vs-low RR 1.14 (1.05-1.24); men 0.76 | **harm (women only)** | sex effect-modifier, P<0.001 |
| **Sleep, respiratory** | — | **insufficient (no MA existed)** | named gaps, not nulls |

`[@poole2017]`

**The liver row is the big rock.** Poole: «The beneficial associations between consumption and liver
conditions stand out as consistently having the highest magnitude compared with other outcomes across
exposure categories.» [@poole2017] Liver cancer and
chronic liver disease are the *only* outcomes whose effect size (<0.5) is large enough to permit a GRADE
upgrade of observational evidence -> [[Upgrading Observational Evidence]]. Antioxidant/anti-inflammatory
mechanism (chlorogenic acids, caffeine) plus a direct antifibrotic action on hepatic stellate cells is
the proposed pathway [inferred from @poole2017].

## The two real harms — stratum-specific, and they gate the recommendation

- **Pregnancy** is the one place harm survives smoking adjustment. Mechanism is dose-amplification, not
  a new pathway: «The half life of caffeine is known to double during pregnancy... Caffeine is also
  known to easily cross the placenta, and activity of the caffeine metabolising enzyme, CYP1A2, is low
  in the fetus, resulting in prolonged fetal exposure.»
  [@poole2017] So the same per-cup intake delivers a
  higher effective fetal dose. This is a **contraindication (route c)**, not a shift in the general
  estimate.
- **Fracture in women** — no overall association, but sex is an effect modifier: «high versus low
  consumption was associated with an increased risk of fracture in women (relative risk 1.14, 95%
  confidence interval 1.05 to 1.24) and a decreased risk in men (0.76, 0.62 to 0.94)... test of
  interaction... 1.50, 1.20 to 1.88; P<0.001).»
  [@poole2017] Two attenuators Poole flags: a
  caffeine SR found 400 mg/day (\~4 cups) *not* associated with fracture/BMD harm, and «only a small
  amount of milk added to coffee would be needed to offset any negative effects on calcium absorption»
  — so the harm may be confined to women with inadequate calcium intake, and adding milk may remove it.

## Brewing method IS load-bearing — the diterpene / lipid channel `type-C`

The one within-"coffee" boundary that carries a real, mechanistic decision: **filtered vs unfiltered**.
Coffee overall raises serum lipids in RCT meta-analysis — total cholesterol +0.19 mmol/L
(0.10-0.28), LDL +0.14, TG +0.14 — via the diterpenes **cafestol and kahweol**, and the effect tracks
the **unfiltered** preparations (boiled, cafetière, espresso contain the diterpenes; instant and filtered
are «negligible»). A paper filter removes most of it: «The increases in cholesterol concentration were mitigated with filtered
coffee, with a marginal rise in concentration (mean difference 0.09 mmol/L, 0.02 to 0.17) and no
significant changes to low density lipoprotein cholesterol or triglycerides compared with unfiltered
(boiled) coffee.» [@poole2017]

**But do not over-weight the lipid signal:** Poole notes the changes reverse with abstinence, are small,
and coffee «does not seem to be associated with adverse cardiovascular outcomes» despite them — i.e. the
LDL surrogate moves the wrong way while hard CV outcomes do not, a [[Surrogate Outcomes]] disconnect.
The actionable residual: **someone drinking large volumes of unfiltered coffee with high LDL /
established ASCVD risk has a cheap lever — switch to filtered** — while for everyone else the diterpene
effect is marginal. -> [[Is the Food Category Doing Any Work]] (brewing method as the load-bearing
sub-boundary).

## Caffeine is (mostly) NOT the active agent `type-C`

Decaffeinated coffee reproduces the main benefits: it lowered all-cause and CV mortality (similar
magnitude, nadir 2-4 cups), and for T2D «Consumption of decaffeinated coffee also seemed to have similar
associations of comparable magnitude». [@poole2017]
Poole chose coffee, not caffeine, as the exposure precisely because coffee's \~1000+ bioactives «could be
different to effects of caffeine from other sources».
[@poole2017] **So for the mortality/metabolic/liver
benefits the exposure is the coffee matrix, not the caffeine** — which decouples the benefit from the
one component (caffeine) that drives the pregnancy harm and the sleep/BP/anxiety physiology.
-> [[Is the Food Category Doing Any Work]] (the decaf test).

**Where caffeine specifically DOES matter:** pregnancy (fetal caffeine exposure), and a CYP1A2
gene-dose effect on hypertension — «Those with alleles for slow caffeine metabolism were at increased
risk of hypertension compared with those with alleles for fast caffeine metabolism.»
[@poole2017] (a candidate effect-modifier, not yet
an actionable stratifier).

## How much to believe it — the appraisal floor

- **Design:** overwhelmingly observational cohort; GRADE \~25% low, \~75% very low; AMSTAR median 5/11.
  Even the RCT meta-analyses graded low.
- **Confounding by smoking** is the dominant threat — coffee and smoking co-occur, so residual smoking
  confounding can *manufacture* an apparent harm (lung cancer, cancer mortality in smokers) or *mask* a
  benefit. The apparent harms «were largely nullified by adequate adjustment for smoking, except in
  pregnancy». This is exactly the referent/confounding machinery -> [[The U-Shaped Association Artifact]].
- **Mendelian randomisation is the strongest disconfirming signal**: no genetic causal evidence for
  coffee->mortality or coffee->T2D. Poole's own hedge is that MR assumes linearity and «might not
  capture non-linear differences» — so MR-null does not *refute* a non-linear causal effect, it removes
  the linear one. Net: treat the benefits as **plausibly confounded associations pending an RCT**, which
  is Poole's own conclusion (liver disease the best RCT target).
- **Measurement:** no standard cup size; bean/roast/grind/brew all vary the dose, so cup-based exposure
  is coarse. Non-differential misclassification biases toward the null -> the true gradients could be
  steeper, not shallower -> [[Measurement Error in Dietary Assessment]].

## Decision summary (layer-1 framing)

- **For most non-pregnant adults, coffee is not a big rock** — it is a low-cost, likely-net-favourable
  or neutral habit, not a lever with a large certain effect. «More likely to benefit than harm» + a flat
  dose-response means *there is no strong reason to start, increase, or quit for health* within \~3-4
  cups/day. Reporting that the lever is small and uncertain is itself the decision-change.
- **The genuinely actionable, stratum-specific calls:** (1) pregnancy / trying to conceive — limit
  (contraindication); (2) women at high fracture risk with low calcium — a small caution, offset by
  milk; (3) high LDL / ASCVD risk drinking large volumes of unfiltered coffee — switch to filtered.
- **The one large-magnitude, mechanistically-supported benefit worth an RCT is liver disease** — but it
  is not yet a recommendation, only the best causal candidate.

## Gaps (G) + attachment points for the cluster

- **No coffee-sleep meta-analysis existed** at review time (SR only) — so the caffeine/sleep-timing
  question the deliverable needs is a **named gap here, not a null**. [AWAITS a coffee/caffeine-and-sleep
  MA] -> would connect to [[Sleep and Metabolic Health]] / [[Sleep Duration and Mortality]].
- **Respiratory outcomes**, and the **natural history of established disease** (only 1 MA, post-MI):
  insufficient evidence.
- **IARC 2016** (coffee removed from Group 2B "possibly carcinogenic") is *not* cited by Poole —
  [AWAITS an IARC monograph source] before any claim is written.
- **Cluster attachment:** Grosso 2016 has landed — it refines the mortality arm via the smoker/non-smoker
  referent split (the U-shape correction, section above) [@grosso2016];
  Ding 2014 has landed — it refines the monotone T2D gradient and the decaf/caffeine split (section
  below) [@ding2014]. Both attach to this nucleus.

## The T2D dose-response, refined — Ding 2014 IS the MA under Poole's T2D headline `type-F`

Poole's T2D row (high-vs-low **0.70 (0.65-0.75)**) is a compressed summary of Ding's gold-tier
dose-response MA — **28 prospective cohorts, 1,109,272 participants, 45,335 incident cases**,
median 11-year follow-up — and the 0.70 figure is Ding's own highest-category estimate. So this is
**F-refinement of the borrowed summary, not independent corroboration** (Ding is inside Poole's
umbrella evidence base — shared cohorts, not a second route). Per the gold-gate rule, cite Ding, not the
umbrella, for the T2D effect.

**The granular gradient (cubic-spline, vs no coffee):** RR **0.92 / 0.85 / 0.79 / 0.75 / 0.71 / 0.67**
for **1-6 cups/day** — «6 cups/day of coffee was associated with a 33% lower risk of type 2 diabetes».
[@ding2014] The shape is **monotone-decreasing, mildly
concave (decreasing per-cup returns: -0.07, -0.06, -0.04, -0.04, -0.04), with no plateau or upper arm
within 1-6 cups** — unlike the mortality arm, whose pooled curve plateaus/rises. **Nonlinearity was
detected** («A cubic spline model accounted for more variance in the outcome than did a linear model...
suggesting that the association was not fully linear») [@ding2014] — so this shape is a genuine spline fit, **not** a single-coefficient display artifact
-> [[Energy Adjustment and What a Diet Coefficient Means]]. Magnitudes are **relative-only** — Ding
gives no absolute risk (a person's absolute benefit scales with their baseline T2D risk: route (a)).

**Caffeine is not the driver — the decaf datum, quantified.** Per 1-cup/day increase, RR **0.91
(0.89-0.94)** caffeinated vs **0.94 (0.91-0.98)** decaffeinated, **P for difference = 0.17 (NS)**
[@ding2014]. Ding: «These results suggest that
components of coffee other than caffeine are responsible for this putative beneﬁcial effect»
[@ding2014]. Even the caffeine-alone association is
confounded — «none of the included studies controlled for coffee intake when modeling caffeine intake»,
and it is «likely to be confounded by other components of coffee because of the collinearity»
[@ding2014]. **Caveat kept:** categorically the
caffeinated arm is *slightly* stronger («P = 0.03 for the second highest group, P = 0.07 for the
highest») [@ding2014] — decaf clearly works, caffeine
may add a marginal increment. -> [[Is the Food Category Doing Any Work]] (the decaf test, T2D version).

**The T2D benefit sits on firmer OBSERVATIONAL footing than the mortality benefit — but causality is
still open.** Two Ding features the mortality arm lacks: adjusted ≈ unadjusted spline («adjustment for
potential confounders minimally affected effect estimates»), and the confounding direction runs
**toward the null** — «higher coffee consumption was generally associated with a less healthy
lifestyle... Thus, the true association between coffee and diabetes risk might be stronger than
observed» [@ding2014]. **This is the opposite
confounding direction from the mortality/cancer arm** (where coffee-smoking correlation *manufactures*
apparent effect — section above): for T2D the adverse-lifestyle correlation works *against* the observed
benefit, so residual confounding is a weaker escape. **But not a closed one** — Ding: «it is difﬁcult to
establish the causality... solely based on observational evidence», and Poole's Mendelian-randomisation
citations found **no genetic causal signal for coffee->T2D** either. So: robust, dose-dependent,
not-caffeine-driven association, biased if anything toward the null — but the MR-null keeps it a
plausibly-confounded association pending an RCT, consistent with the whole page's appraisal floor.
Mechanism (chlorogenic acid on hepatic glucose output / intestinal glucose absorption; lignans,
trigonelline) is in-vitro/animal only [inferred from @ding2014].

**Brew method is uncontrolled here** — Ding did not assess filtered vs unfiltered («most coffee is
likely to be ﬁltered»), so the T2D estimate pools brew methods, unlike the lipid outcome where the
filtered/unfiltered split is load-bearing.

## References

---
type: framework
question: What does habitual coffee consumption do to patient-important outcomes, for whom, at what dose, and how much of it is causal?
aliases: [Coffee, Coffee and Mortality, Coffee and Health, Caffeine and Health, Coffee Dose, Filtered vs Unfiltered Coffee, Decaffeinated Coffee]
authors: [Poole, Robin; Kennedy, Oliver J; Roderick, Paul; Fallowfield, Jonathan A; Hayes, Peter C; Parkes, Julie; Grosso, Giuseppe; Micek, Agnieszka; Godos, Justyna; Martinez-Gonzalez, Miguel A; Giovannucci, Edward L; Ding, Ming; Bhupathiraju, Shilpa N; Chen, Mu; van Dam, Rob M; Hu, Frank B; Nordestgaard, Anne Tybjaerg; Nordestgaard, Borge Gronne]
sources: [Poole - Coffee Consumption and Health 2017, Grosso - Coffee Mortality Smokers Nonsmokers 2016, Ding - Coffee and Type 2 Diabetes 2014, Nordestgaard - Coffee Mortality Mendelian Randomization]
cluster: coffee
nucleus: true
confidence: medium
created: 2026-08-04
updated: 2026-10-06
self_critiqued: 2026-10-06
relationships:
  related_to:
    - The U-Shaped Association Artifact
    - Is the Food Category Doing Any Work
    - Upgrading Observational Evidence
    - Measurement Error in Dietary Assessment
    - Alcohol and Mortality and Vascular Disease
    - Tea Consumption and Cardiovascular Risk
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
The coffee->mortality MR is now held primary here (Nordestgaard 2016, ingested as the study Poole cited
secondhand) — its instruments, magnitudes, and its two bounding caveats are in *The Mendelian-randomization
check* below. [@nordestgaard2016]
So read every RR below as *an association net of whatever smoking/SES confounding survived adjustment*,
not as an effect. The friction on how much of the protective arm is real is on
[[The U-Shaped Association Artifact]]. Grosso 2016 has now performed the smoker referent-correction (the
smoking-stratified dose-response detail below) [@grosso2016].

<div class="recent-update" data-last-updated="2026-10-06">

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
  (Refinement below: removing smokers cleanly exposes a smoking artifact for the *cancer* arm; for
  all-cause/CVD the stratified spline does not support a smoking-driven upper arm — the never-smoker CVD
  curve itself plateaus at \~0.75 from \~3-4 cups. Corrected 2026-10-06: *in never-smokers the curve is
  linear-monotone with no plateau* -> "linear" is Grosso's per-cup linear model, not the spline;
  self-critique.)
  For T2D the dose-response is monotone («risk was still lower for each dose... between one and six
  cups»), not even a plateau.

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Smoking confounds the mortality curve — Grosso's referent correction `type-F`

Grosso 2016 (a dose-response MA, 31 cohorts, **1,610,543 individuals**) is the smoker/non-smoker
**referent correction** Poole's page left pending. Two facts frame it: the overall (smoker-mixed)
all-cause curve is a J that plateaus then rises — nadir RR **0.83 at 3 cups**, back up to
**0.90 (0.85-0.96) at 7 cups** [@grosso2016] —
while in never-smokers Grosso's **per-cup linear model** gives a steady decrement: «a linear dose-response
analysis showed a signiﬁcant decreased risk by 6 % for each additional cup of coffee per day consumed
for all- cause and CVD mortality (RR = 0.94, 95 % CI = 0.93, 0.96 and RR = 0.94, 95 % CI = 0.91, 0.97,
respectively) and signiﬁcant decreased risk of 2 % for cancer mortality (RR = 0.98, 95 % CI = 0.96,
1.00).» [@grosso2016] The fitted *spline*
(Table 3) is not linear throughout: never-smoker all-cause keeps falling slowly after 3 cups (to 0.79,
0.71-0.87, at 7), never-smoker CVD plateaus (0.76, 0.69-0.83, at 4 cups; 0.75 at 5; 0.74 at 7), and the **smoker**
curves do not rise either (all-cause 0.87, 0.77-0.98; CVD 0.71, 0.61-0.83, at 7) — while each stratified
model pools only \~5 studies («9 (5)», «10 (5)») against 24 for the pooled curve
[@grosso2016]. Grosso's prose (a J in
smokers, slope «linear for all outcomes») and its table disagree here. Heterogeneity fell in every
smoking-stratified model — consistent with smoking status as a between-study variance source, though
pooling \~5 studies instead of 24 would also lower it.

- **The CANCER arm is the clean, Grosso-attributed confounding demonstration.** It *flips sign*:
  «cancer mortality was signiﬁcantly decreased only when considering non-smokers, while increased in
  smokers» [@grosso2016]. Grosso's discussion
  attributes it to residual confounding by smoking: «it is hardly plausible that any biological effect of coffee
  causally diﬀers by smoking status... residual confounding by smoking is the most likely the
  explanation». [@grosso2016] — although its
  conclusion uses effect-modification language for the same contrast: «The contrasting results for higher
  intake of coffee among smokers depend most likely on the effect modiﬁcation of smoking habit and more
  realistic association with mortality risk is provided in non- smokers.»
  [@grosso2016]. The confounding reading is the
  better-argued of the two (corrected 2026-10-06: *Grosso pins it to confounding, not
  effect-modification* -> Grosso uses both framings; self-critique). The mechanism —
  heavy coffee drinkers are enriched for smokers, and smoking is the dominant cancer/mortality risk
  factor — is [inferred from @grosso2016].
- **For all-cause/CVD the artifact reading is NOT supported by the stratified table, and Grosso himself
  does not make it.** Neither stratum's spline shows the pooled curve's rise (0.83 -> 0.90): the smoker
  curves plateau or keep falling, and the never-smoker CVD curve plateaus — so the pooled J's upper arm
  cannot come from the smokers' curve, and more plausibly reflects the different study set (24 vs \~5
  studies). Grosso reports «No diﬀerences were found between smokers
  and non-smokers for all-cause and CVD mortality risk... both signiﬁcantly reduced»
  [@grosso2016]. So he attributes the smoking
  artifact explicitly only to *cancer* (corrected 2026-10-06: *removing smokers does remove the upper-arm
  attenuation ... suggestive* -> not supported by Grosso Table 3; self-critique).
- **What it does NOT fix — the lower arm stays only partly adjudicated.** Grosso is observational: it
  removes the *dominant* confounder (smoking) but not SES / reverse causation / other residuals — and
  Poole's Mendelian-randomisation citations found **no genetic causal signal** for coffee->mortality. So
  the two are consistent, not in tension: the per-cup benefit **survives the smoking referent-correction**
  (Grosso) yet finds **no support from the genetic instrument** (Poole's MR = the held Nordestgaard,
  which cannot exclude an effect of the observed size) — leaving residual *non-smoking* confounding
  (SES, reverse causation) and a modest causal effect that the MR is too small to exclude as the two live
  explanations (corrected 2026-10-06: *the remaining live explanation* -> two live explanations;
  self-critique). Net: smoking is not the whole story of the association,
  but neither is the surviving linear benefit established as causal (\~6% relative per cup is small, and
  the source gives no baseline risk — **relative-only**). -> [[The U-Shaped Association Artifact]].

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## What coffee moves, by evidence state

| Outcome | Direction + magnitude (vs none unless noted) | State | Note |
|---|---|---|---|
| **Liver disease** (cirrhosis, fibrosis, NAFLD, chronic liver disease, HCC) | benefit, LARGEST + most consistent: chronic liver disease high-vs-low RR 0.35; liver cancer high-vs-low 0.50 (0.43-0.58); cirrhosis (any vs none) 0.61; NAFLD 0.71 | benefit | liver cancer + chronic liver disease are the only outcomes reaching GRADE-upgradeable magnitude (<0.5) |
| **All-cause mortality** | 0.83 (0.79-0.88) at 3 cups | benefit (assoc.) | MR-null; confounding caveat. CI per Grosso Table 2 [@grosso2016]; Poole prints «0.83 to 0.88», a transcription slip (corrected 2026-10-06: 0.83-0.88 -> 0.79-0.88) |
| **CV mortality / CVD** | CV mort 0.81 (0.72-0.90); incident CVD 0.85 (0.80-0.90) at 3-5 cups | benefit (assoc.) | MR-null |
| **Type 2 diabetes** | high-vs-low 0.70 (0.65-0.75); monotone 1-6 cups (Ding) | benefit (assoc.) | decaf lowers risk too — details below |
| **Total cancer incidence** | high-vs-low 0.82 (0.74-0.89) | benefit (assoc.) | most single sites null |
| **Parkinson's, depression, Alzheimer's** | lower risk, consistent | benefit (assoc.) | Parkinson's survives smoking adjustment |
| **Gallstones, gout, renal stones, metabolic syndrome** | lower risk | benefit (assoc.) | — |
| **Blood pressure** | RCTs marginal, non-significant; obs null | no meaningful effect | — |
| **Lung cancer** | apparent harm OR 1.59 high-vs-low | **confounded to null** | «not seen in never smokers» — residual smoking confounding |
| **Most cancer sites** (gastric, colorectal, breast, ovarian, pancreatic...) | no significant association | no meaningful effect / insufficient | — |
| **Pregnancy** (low birth weight, preterm, pregnancy loss) | harm: LBW OR 1.31; loss 1.46; 1st-tri preterm 1.22 | **harm signal (assoc.)** | survives smoking adjustment; single MA per outcome; the one RCT was null; mechanism below |
| **Fracture in women** | high-vs-low RR 1.14 (1.05-1.24); men 0.76 | **harm signal (women only, assoc.)** | sex effect-modifier, P<0.001; many fracture studies unadjusted for BMI/smoking/calcium |
| **Sleep, respiratory** | — | **insufficient (no MA existed)** | named gaps, not nulls |

[@poole2017]

**The liver row is the big rock.** Poole: «The beneficial associations between consumption and liver
conditions stand out as consistently having the highest magnitude compared with other outcomes across
exposure categories.» [@poole2017] Liver cancer and
chronic liver disease are the *only* outcomes whose effect size (<0.5) is large enough to permit a GRADE
upgrade of observational evidence -> [[Upgrading Observational Evidence]]. Antioxidant/anti-inflammatory
mechanism (chlorogenic acids, caffeine) plus a direct antifibrotic action on hepatic stellate cells is
the proposed pathway [inferred from @poole2017].

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## The two harm signals — stratum-specific, and they gate the recommendation

(corrected 2026-10-06: heading *The two real harms* -> harm signals; both are observational like the
benefits; self-critique.)

- **Pregnancy** is the one place harm survives smoking adjustment — on thin evidence: «These associations
  were seen in subgroup analyses from articles investigating total caffeine exposure, which showed similar
  associations, and from a single meta-analysis for each outcome.»
  [@poole2017], and the one RCT on birth outcomes was
  null («none of the outcomes reached significance»). Mechanism is dose-amplification, not
  a new pathway: «The half life of caffeine is known to double during pregnancy... Caffeine is also
  known to easily cross the placenta, and activity of the caffeine metabolising enzyme, CYP1A2, is low
  in the fetus, resulting in prolonged fetal exposure.»
  [@poole2017] So the same per-cup intake delivers a
  higher effective fetal dose. This is a **precautionary contraindication (route c)** — a consistent
  signal plus a mechanism, not an established harm — not a shift in the general estimate.
- **Fracture in women** — no overall association, but sex is an effect modifier: «high versus low
  consumption was associated with an increased risk of fracture in women (relative risk 1.14, 95%
  confidence interval 1.05 to 1.24) and a decreased risk in men (0.76, 0.62 to 0.94)... test of
  interaction... 1.50, 1.20 to 1.88; P<0.001).»
  [@poole2017] Two attenuators Poole flags: a
  caffeine SR found 400 mg/day (\~4 cups) *not* associated with fracture/BMD harm, and «only a small
  amount of milk added to coffee would be needed to offset any negative effects on calcium absorption»
  — so the harm may be confined to women with inadequate calcium intake; the milk remark concerns calcium
  *absorption* and has not been tested against fracture. And the signal is weakly adjusted: «Notably, many
  of the studies included in the meta-analyses of coffee consumption and risk of fracture did not adjust
  for important confounders such as body mass index (BMI), smoking, or intakes of calcium, vitamin D, and
  alcohol.» [@poole2017]

</div>

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

## Additives are a second uncontrolled axis — added sugar most of all `[INFERRED, 2026-08-07 maintainer challenge]`

The cohort "coffee" exposure pools drinks taken black, with milk, and **with sugar** — additives are as
uncontrolled as brew method is for the T2D estimate (below). Milk's effect is minor (the calcium-offset
note above); **added sugar changes the exposure** — a sugar-sweetened coffee drink imports the held
free-sugars / SSB harm -> [[Free Sugars Intake]], so the mortality/T2D benefit here attaches to *coffee
the beverage*, not to a sugar-loaded coffee drink. Same within-category boundary as filtered-vs-unfiltered
-> [[Is the Food Category Doing Any Work]]: **"3-4 cups" is not one exposure** — brew, cup size, caffeine,
milk and added sugar all vary it. The wiki holds no cohort separating sweetened from unsweetened coffee on
hard outcomes — a named acquire-gap, not a held finding.


<div class="recent-update" data-last-updated="2026-10-06">

## Caffeine is (mostly) NOT the active agent `type-C`

Decaffeinated coffee reproduces the main benefits: it lowered all-cause and CV mortality (similar
magnitude, nadir 2-4 cups), and for T2D «Consumption of decaffeinated coffee also seemed to have similar
associations of comparable magnitude». [@poole2017]
Poole chose coffee, not caffeine, as the exposure precisely because coffee's \~1000+ bioactives «could be
different to effects of caffeine from other sources».
[@poole2017] **So for mortality and T2D (where decaf
data exist) the exposure is the coffee matrix, not the caffeine** — which decouples those benefits from
the one component (caffeine) that drives the pregnancy harm and the sleep/BP/anxiety physiology. Not for
the liver: Poole reports no significant decaf liver association — its decaf figure (Fig 5) lists a
per-cup liver-cancer estimate of 0.93 (0.86 to 1.00) from 3 studies (ref 10), which falls among «The other outcomes investigated for decaffeinated coffee showed no
significant associations, though it should be noted that meta-analyses of consumption would have much
lower power to detect an effect.» [@poole2017] — and
Poole's proposed liver mechanism includes caffeine — «Additionally, caffeine could have direct antifibrotic effects by preventing hepatic stellate
cell adhesion and activation.111» [@poole2017]. Decaf
comparisons also carry a selection caveat: «People who drink decaffeinated coffee might be different from
those who drink caffeinated coffee» [@poole2017]
(corrected 2026-10-06: *mortality/metabolic/liver* -> mortality and T2D; self-critique).
-> [[Is the Food Category Doing Any Work]] (the decaf test).

**Where caffeine specifically DOES matter:** pregnancy (fetal caffeine exposure), and a CYP1A2
gene-dose effect on hypertension — «Those with alleles for slow caffeine metabolism were at increased
risk of hypertension compared with those with alleles for fast caffeine metabolism.»
[@poole2017] (a candidate effect-modifier, not yet
an actionable stratifier).

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## The Mendelian-randomization check — primary evidence `type-F`

The disconfirming genetic signal was previously held only secondhand (Poole citing "two MR studies").
Nordestgaard 2016 is now held primary, so the null carries its own instruments and magnitudes rather
than a borrowed sentence. Across 95,000-223,000 individuals (Copenhagen General Population Study +
two Copenhagen cohorts + Cardiogram/C4D consortia for IHD): «observation- ally coffee intake was
associated with U-shaped low risk of cardiovascular disease and all-cause mortality; however,
genetically coffee intake was not associated with risk of cardiovascular disease or all-cause
mortality.» — «The latter are novel findings.»
[@nordestgaard2016]

- **Instrument.** A caffeine-intake allele score (near AHR and CYP1A1/CYP1A2); per-allele \~8% higher
  intake, 0 vs 4 alleles = 2.2 vs 3.1 cups/day (42% higher). First-stage strength is high — «the
  statistical F-value for allele score was very high at 827». Per-allele genetic HRs/ORs cluster at
  \~1.00 with CIs spanning 1.0. [@nordestgaard2016]
- **Positive control (the instrument is not dead).** The same design recovers a known causal chain:
  «low cholesterol level caused by ApoE genotype associated causally with the ex- pected low risk of
  IHD.» [@nordestgaard2016]
- **Confounding named.** «U-shaped associations are less prominent in never smokers compared with
  former and current smokers» — so the authors read their genetic null as evidence the observational
  'benefit' is confounded (smoking), not causal.
  [@nordestgaard2016]

**Two caveats bound the null — it finds no genetic signal, but it is not powered to exclude causation
at the OBSERVED size, and it does not prove zero.** (corrected 2026-10-06: *refutes causation at the
OBSERVED size* -> *not powered to exclude it*, Nordestgaard chunk 01)

- **Power.** The instrument «could exclude odds ratio per allele of 0.97 for 8% higher coffee intake»
  (80% power) — a per-unit effect far steeper than the observational «odds ratio of 0.86 for
  approximately 350% higher coffee intake», which the authors say would need «approximately 225 000
  cases and 225 000 controls» to exclude; «even more individuals and events are required to thoroughly
  exclude a causal associ- ation». So: no genetic signal, and a causal effect *much larger per cup* than
  the observed one is excluded; a causal effect **at the observational magnitude** is *not* excluded —
  *insufficient evidence*, not *no effect* (corrected 2026-10-06: *rejects a causal effect as large as
  the observational 0.86* / *no meaningful causal effect at the observational magnitude* -> not
  excluded, Nordestgaard chunk 01).
  [@nordestgaard2016]
- **Linearity — the MR is structurally blind to a true U.** «if U-shaped associations ... indeed are
  true, then a Mendelian randomization approach might not detect an eventual as- sociation, since this
  approach is based on the assumption of linearity ... and thus will not be capturing non-linear
  differences between very low and very high coffee intakes.»
  [@nordestgaard2016]

**Parameter table (BLOCKING — matched quantities before any cross-source claim):**

| Parameter | Nordestgaard 2016 (primary MR) | Incumbent claim / Poole 2017 (obs + secondary MR) | Same quantity? |
|---|---|---|---|
| Genetic (causal) coffee->all-cause mortality | per-allele HR \~1.00, CIs span 1.0; F=827; «genetically coffee intake was not associated with ... all-cause mortality» | Poole secondhand: «no genetic evidence for a causal ... relation» (no numbers) | YES -- same causal-null quantity; Poole reports THIS study secondhand -> type-F firming, **not** independent-E |
| Observational coffee->all-cause mortality | HR 0.86 for \~350% higher intake (0 vs 4-5 cups) | Poole/Grosso: nadir RR 0.83 (0.79-0.88; Poole misprints the lower bound as 0.83) at 3 cups vs none | ROUGHLY -- same association type, different cohorts + contrast (whole-range HR vs per-category nadir); directional agreement only, not a matched estimate |
| Genetic vs observational (WITHIN Nordestgaard) | causal OR/allele 0.97 (8% intake) excludable vs observed 0.86 (350% intake) | -- | NO -- different exposure scale AND causal-vs-associational; this divergence IS the finding, not a tension to file |

**Independence verdict.** Nordestgaard IS the coffee->mortality MR Poole cited: Poole's mortality MR
citation is its ref 123, *Nordestgaard AT, Nordestgaard BG ... Int J Epidemiol 2016;45:1938-52* — the
held study [@poole2017] (corrected 2026-10-06:
*very likely* -> definite, Poole ref list chunk 02). This is **primary-sourcing of an already-held claim (type-F), not independent
corroboration (type-E)** — so it firms the caveat's warrant without lifting `confidence:` (stays
**medium**: the null converges with the existing "plausibly confounded" reading rather than adding a
new route, and its own power/linearity caveats keep it short of a confident "no effect").

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## How much to believe it — the appraisal floor

- **Design:** overwhelmingly observational cohort; GRADE \~25% low, \~75% very low; AMSTAR median 5/11.
  Even the RCT meta-analyses graded low.
- **Confounding by smoking** is the dominant threat — coffee and smoking co-occur, so residual smoking
  confounding can *manufacture* an apparent harm (lung cancer, cancer mortality in smokers) or *mask* a
  benefit. The apparent harms «were largely nullified by adequate adjustment for smoking, except in
  pregnancy». This is exactly the referent/confounding machinery -> [[The U-Shaped Association Artifact]].
- **Mendelian randomisation gives no support for a causal effect, but the held mortality MR is
  underpowered (the T2D MR's power is not held) — held for mortality, secondhand for T2D.** *Mortality (held, primary):* no genetic causal evidence for coffee->mortality (Nordestgaard
  2016 — *The Mendelian-randomization check* above); the instrument is strong (F=827) but the study is
  not powered to exclude a causal effect at the observational size (\~225,000 cases needed), and by its
  linearity assumption «will not be capturing non-linear differences» — so it refutes neither a
  non-linear nor an observational-sized linear effect; it excludes only a much steeper one
  (corrected 2026-10-06: *null holds at the observational effect size* -> not powered to exclude it)
  [@nordestgaard2016].
  *T2D (unheld, secondhand):* Poole reports a separate coffee->T2D MR (its ref 122, an earlier
  Nordestgaard 2015 paper) as also finding no genetic evidence for a causal relation
  [@poole2017]; its instrument strength and power
  are not held, so the F=827 / observational-size reading above does not transfer to it
  (corrected 2026-10-06: mortality and T2D MRs separated, Poole chunk 01). Net: treat the
  benefits as **plausibly confounded associations pending an
  RCT**, which is Poole's own conclusion (liver disease the best RCT target).
- **Measurement:** no standard cup size; bean/roast/grind/brew all vary the dose, so cup-based exposure
  is coarse. Non-differential misclassification biases toward the null -> the true gradients could be
  steeper, not shallower -> [[Measurement Error in Dietary Assessment]].

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Decision summary (layer-1 framing)

- **For most non-pregnant adults, coffee is not a big rock** — it is a low-cost, likely-net-favourable
  or neutral habit, not a lever with a large certain effect. «More likely to benefit than harm» + a flat
  dose-response means *there is no strong reason to start, increase, or quit for health* within \~3-4
  cups/day. Reporting that the lever is small and uncertain is itself the decision-change.
- **The genuinely actionable, stratum-specific calls:** (1) pregnancy / trying to conceive — limit
  (precautionary contraindication); (2) women at high fracture risk with low calcium — a small caution;
  Poole cites evidence that a little milk offsets caffeine's effect on calcium absorption, which has not
  been tested against fracture; (3) high LDL / ASCVD risk drinking large volumes of unfiltered coffee — switch to filtered.
- **The one large-magnitude, mechanistically-supported benefit worth an RCT is liver disease** — but it
  is not yet a recommendation, only the best causal candidate.

</div>

## Gaps (G) + attachment points for the cluster

- **No coffee-sleep meta-analysis existed** at review time (SR only) — so the caffeine/sleep-timing
  question the deliverable needs is a **named gap here, not a null**. AWAITS a coffee/caffeine-and-sleep
  MA (no specific source named yet — class-form gap, not a cashable hold) -> would connect to
  [[Sleep and Metabolic Health]] / [[Sleep Duration and Mortality]].
- **Respiratory outcomes**, and the **natural history of established disease** (only 1 MA, post-MI):
  insufficient evidence.
- **IARC 2016** (coffee removed from Group 2B "possibly carcinogenic") is *not* cited by Poole —
  AWAITS an IARC coffee-monograph source (class-form gap — register a placeholder row if acquisition is
  ever pointed here) before any claim is written.
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

---
type: framework
question: Does adding resistant starch (a fermentable-fibre supplement) improve glycemic and insulin markers in overweight or obese adults, and by how much?
aliases: [Resistant Starch, RS Supplementation, Resistant Starch Glucose Insulin, RS and Insulin Sensitivity]
authors: [Wang, Yong; Chen, Jing; Song, Ying-Han; Zhao, Rui; Xia, Lin; Chen, Yi; Cui, Ya-Ping; Rao, Zhi-Yong; Zhou, Yong; Zhuang, Wen; Wu, Xiao-Ting]
sources: [Wang - Resistant Starch Glucose Insulin 2019]
confidence: low
created: 2026-09-24
updated: 2026-09-24
self_critiqued: 2026-09-24
relationships:
  related_to:
    - Dietary Fibre and Health
    - Glycaemic Index and Glycaemic Load and Chronic Disease
    - Carbohydrate Restriction and Type 2 Diabetes Remission
    - Gut Microbiome and Health
    - Surrogate Outcomes
    - Is the Food Category Doing Any Work
    - Measurement Error in Dietary Assessment
    - Cinnamon and Glycemic Control
---

**The decision.** For an overweight or obese adult (BMI >=25), does *adding a resistant-starch (RS)
supplement* — 10-45 g/day of a fermentable, colon-reaching starch — measurably improve blood-glucose
and insulin markers? One meta-analysis speaks to this cell; nothing else on RS is held, so this page
is a **single-source opener** (provisional), and every claim below is **surrogate-level**: no
patient-important outcome (T2D incidence, CVD event, mortality) was measured
-> [[Surrogate Outcomes]].

## Evidence state — a small, consistent surrogate signal

[@wang2019rs] A 2019 meta-analysis pooled
**13 randomized trials, n=428**, all in adults with BMI >=25; RS versus placebo/control, doses
**10-45 g/day**, follow-up **2-12 weeks**. Effects are reported as the **standardized mean difference
(SMD)** — a between-arm difference in pooled standard-deviation units, not a clinical unit
(mmol/L, mIU/L), which limits translation to an absolute change a person would feel.

The pooled overall estimates (random-effects; a negative SMD favours RS on glucose/insulin markers):

| Marker (surrogate) | SMD (95% CI) | State |
|---|---|---|
| Fasting insulin | -0.72 (-1.13 to -0.31) | benefit |
| Fasting glucose | -0.26 (-0.5 to -0.02) | benefit (borderline, P=0.035) |
| HOMA-S% (insulin sensitivity) | +1.19 (0.59 to 1.78) | benefit (higher = more sensitive) |
| HOMA-B% (beta-cell output) | -1.2 (-1.64 to -0.77) | lower output — see interpretation |
| HbA1c | -0.43 (-0.74 to -0.13) | benefit |
| LDL-c | -0.35 (-0.61 to -0.09) | benefit |
| HOMA-IR | not significant | no meaningful effect |
| Total cholesterol | not significant | no meaningful effect |
| Triglycerides | not significant | no meaningful effect |
| HDL-c | not significant | no meaningful effect |

The abstract states the pooled result verbatim: «RS supplementation reduced fasting insulin in overall
and stratiﬁed (diabetics and nondiabetics trials) analysis (SMD = –0.72; 95% CI: –1.13 to –0.31;
SMD = –1.26; 95% CI: –1.66 to –0.86 and SMD = –0.64; 95% CI: –1.10 to –0.18, respectively), and reduced
fasting glucose in overall and stratiﬁed analysis for diabetic trials (SMD = –0.26; 95% CI: –0.5 to
–0.02 and SMD = –0.28; 95% CI: –0.54 to –0.01, respectively). RS supplementation increased HOMA-S%
(SMD = 1.19; 95% CI: 0.59–1.78) and reduced HOMA-B (SMD =–1.2; 95% CI: –1.64 to –0.77), LDL-c
concentration (SMD =–0.35; 95% CI: –0.61 to −0.09), and HbA1c (SMD = –0.43; 95% CI: –0.74 to –0.13) in
overall analysis.» [@wang2019rs]

The four lipid/resistance-index nulls sit beside the significant markers: RS moved fasting insulin,
fasting glucose, HbA1c, HOMA-S%, HOMA-B% and LDL-c, but not HOMA-IR, total cholesterol, triglycerides
or HDL-c [@wang2019rs]. The **HOMA-IR null
beside a significant HOMA-S% and falling fasting insulin** is an internal wrinkle: the two indices are
built from the same fasting glucose and insulin, so a consistent effect should move both. The authors
do not reconcile it; read the sensitivity signal as suggestive, not settled.

**HOMA-B% interpretation.** A *fall* in modelled beta-cell output is not self-evidently
good or bad. Read together with rising HOMA-S% (sensitivity) and falling fasting insulin, the coherent
reading is that a more insulin-sensitive body needs *less* insulin output — an improvement, not
beta-cell loss. But HOMA-B is a fasting-model surrogate, and its direction carries a decision only if
its transmission to a patient-important outcome is evidenced; here it is not -> [[Surrogate Outcomes]].

## The diabetic-vs-nondiabetic split is a subgroup comparison, not a tested interaction

The abstract reports fasting insulin as larger in diabetics (SMD -1.26) than nondiabetics (-0.64), and
fasting glucose significant only in the diabetic subgroup [@wang2019rs].
Treat this as **route-(b) effect-modification with no positive interaction evidence**
-> [[Baseline Risk and the Relative-Absolute Split]]:

- **The subgroup CIs overlap.** Diabetic -1.66 to -0.86 and nondiabetic -1.10 to -0.18 share the
  -1.10 to -0.86 region — two significant point estimates, no test that the *effect itself* differs
. A larger point estimate in the higher-baseline group is exactly what route-(a)
  (absolute benefit scaling with baseline risk) predicts *without* any change in the underlying effect.
- **The stratification was only possible for two markers.** For HOMA-B%, HbA1c, HOMA-S%, HOMA-IR and
  LDL-c there was only one study per diabetic/nondiabetic group, so no stratified analysis was run
  [@wang2019rs] — the split rests on fasting
  glucose and fasting insulin alone.

## Why the confidence is low despite a high-tier design

The design is a meta-analysis of RCTs (5 randomized-crossover + 8 parallel RCTs: «Of the thirteen
trials, ﬁve of them were randomized, crossover study, the other eight were ran- domized controlled
trials» [@wang2019rs]; quality was high — 12 of
the 13 studies were EPHPP-rated strong, one moderate
[@wang2019rs]). Confidence grades **total
support**, not design tier, and four things pull it down:

- **Surrogate-only outcomes.** Every endpoint is a fasting marker or lipid; none is patient-important.
  A marker can move the right way while the outcome does not -> [[Surrogate Outcomes]].
- **Heterogeneity was excluded, not reported.** The protocol drops heterogeneous studies rather than
  pooling them: «If a study has a heterogeneous source, it was excluded of the analysis»
  [@wang2019rs], and it was applied — «One data
  were removed from analysis of the insulin and total cholesterol respec- tively because of a
  heterogeneous source» [@wang2019rs]. Trimming
  the inconsistent arms can make a pooled effect look **more consistent than the underlying literature
  is** — the reported homogeneity is partly manufactured by the exclusion rule.
- **Small, short trials.** Sample sizes 12-60 per trial, 2-12 weeks
  [@wang2019rs] — too short for HbA1c to fully
  equilibrate (it tracks \~3-month glycaemia) and underpowered individually; the authors name
  «low-sample size» as «the most likely reason» for null and divergent results
  [@wang2019rs].
- **Limited search.** Only «PubMed and Medline» were searched
  [@wang2019rs] — no Embase, Cochrane,
  Scopus or trial registries — so eligible trials may be missing. Egger's test found «no publication
  bias» across the nine outcomes (P from 0.153 to 0.894)
  [@wang2019rs], but that test is weak with so
  few trials.

## Mechanism — fermentation, not the starch itself

RS is starch that resists small-intestinal digestion and reaches the colon, where bacteria ferment it.
The proposed pathway is **short-chain fatty acids**: «SCFA, espe- cially acetate and propionate
produced by colonic fer- mentation of colonic bacteria, have also been associated with the insulin
sensitized effects of RS» [@wang2019rs], plus
an animal signal on beta cells («animal models containing HAM-RS2 have shown an increase in pancreatic
beta cell») and a gut-permeability/inflammation route [@wang2019rs].
This makes RS a **prebiotic fermentable fibre** — the same mechanism class as inulin
-> [[Gut Microbiome and Health]], [[Dietary Fibre and Health]]. Mechanism informs direction only; the
animal beta-cell result does not transport to humans on its own.

## Specify the exposure — RS is not one thing

[@wang2019rs] The trials used different RS
types (banana starch, high-amylose maize / HAM-RS2, arabinoxylan-plus-RS, RS bagels) at different
doses. The authors warn: «different types of RS have opposite effects on glucose and lipid levels in
healthy subjects and T2DM patients», attributing the spread to «differences in diet composition,
dietary RS content, source of RS, dosage and type of RS, and the pathological status of the patients».
So a recommendation must name the **RS type and dose**, not the label *resistant starch* — the pooled
SMD averages over exposures that may not be equivalent -> [[Is the Food Category Doing Any Work]].

## Decision relevance — a small marginal lever, below the big rocks

For an overweight/obese person the dominant levers are weight loss, overall diet quality and activity;
RS supplementation is a **surrogate-level refinement that ranks below them at the margin**
. What it plausibly offers: a modest, well-tolerated fasting-glucose/insulin nudge —
reported adverse effects were «mild and disappeared after few days of consumption»
[@wang2019rs], reachable by swapping some
refined starch for a higher-RS form or adding 10-45 g/day. What it does **not** yet offer: any evidenced
change in a patient-important outcome, or a demonstrated effect on HOMA-IR or the lipid panel beyond
LDL-c. Judge it against the realistic alternative (whole-food fermentable fibre already carries the
same mechanism and its own outcome evidence -> [[Dietary Fibre and Health]]), not against placebo
alone.

## Gaps

- **G — no hard outcome.** Does RS supplementation change T2D incidence/remission or CVD events, not
  just fasting markers? Unmeasured here; an RS -> incidence/outcome
  systematic review (no such SR is held; directional-only gap).
- **G — RS-type resolution.** The *different types have opposite effects* claim needs a
  type-stratified synthesis (RS2 vs RS3 vs RS4) to move from label to exposure; not available in this
  source.
- **G — durability.** All trials <=12 weeks; whether the fasting-marker effect persists and whether
  HbA1c fully responds is untested at this horizon.

## References

---
type: framework
question: Does dietary fibre change patient-important outcomes (mortality, T2D, CHD, colorectal cancer) and the LDL surrogate — by how much, on what dose-response, and how much of it is causal versus confounded?
aliases: [Dietary Fibre, Fibre, Fiber, Soluble Fibre, Viscous Fibre, Dietary Fiber and Health, Fibre and Mortality]
authors: [Reynolds, Andrew; Mann, Jim; Brown, Lisa; Willett, Walter W; Sacks, Frank M; Valdes, Ana M; Veronese, Nicola; Tzoulaki, Ioanna; World Cancer Research Fund International (org)]
sources: [Reynolds - Carbohydrate Quality and Human Health 2019, Brown - Cholesterol-Lowering Dietary Fiber Meta-Analysis 1999, Valdes - Gut Microbiota Nutrition and Health 2018, Veronese - Dietary Fibre Health Umbrella 2018, WCRF - Diet Nutrition Activity Cancer 2018]
cluster: fibre
nucleus: true
confidence: medium
relationships:
  related_to:
    - Whole Grains Refined Grains and Pulses
    - Is the Food Category Doing Any Work
    - Measurement Error in Dietary Assessment
    - Surrogate Outcomes
    - Upgrading Observational Evidence
    - Saturated Fat Intake and Replacement
    - Free Sugars Intake
created: 2026-07-29
updated: 2026-08-08
self_critiqued: 2026-08-08
---

**The fabric's nucleus for fibre.** Fibre content was scattered across the sugar, whole-grain, and
food-matrix pages; two meta-analyses now anchor it — Reynolds 2019 (the WHO-commissioned Lancet series,
185 prospective studies + 58 RCTs) for the **outcomes**, and Brown 1999 (67 controlled trials) for the
**LDL mechanism**. Read together they give the honest shape: **fibre is a real but modest lever, and the
strongest evidence sits on the smallest effect.**


[@reynolds2019] [@brown1999]
## The bottom line

- **The big, impressive numbers are observational.** Highest-vs-lowest fibre intake tracks a **15-30%
  lower** risk of all-cause mortality (RR 0.85), CHD (0.76), type 2 diabetes (0.84) and colorectal cancer
  (0.84) — but this is prospective-cohort data on **self-reported** intake, so it carries the
  healthy-user confound and dietary measurement error ([[Measurement Error in Dietary Assessment]]). In
  absolute terms Reynolds puts all-cause mortality at «13 fewer deaths (95% CI eight to 18) ... per 1000
  participants over the duration of the studies».
- **The RCT-grade effect is real, causal, and small.** Where fibre is tested as a dosable, blindable
  **isolate** in controlled trials, it moves surrogates: viscous/soluble fibre lowers LDL by **-0.057
  mmol/L per gram** in the practical 2-10 g/d range (Brown), and higher fibre intake lowers bodyweight
  (-0.37 kg, GRADE High), total cholesterol and blood pressure (Reynolds RCTs). Brown's own verdict:
  «The effect is small within the practical range of intake ... 3 g soluble fiber from oats ... can
  decrease total and LDL cholesterol by <0.13 mmol/L» and «can make only a small contribution to dietary
  therapy to lower cholesterol.» [@brown1999]
- **So: eat enough fibre, don't expect a miracle.** It is a genuine supporting lever — worth reaching
  \~25-30 g/day — but its measured causal effect (on the surrogate we can trial) is modest, and the large
  mortality numbers should not be read as if they were RCT-proven.

## The two legs are DIFFERENT quantities (BLOCKING parameter table — op-weave 2a)

The temptation is to stack Brown's causal LDL effect under Reynolds' 15-30% mortality reduction and call
fibre powerfully proven. They are not the same claim:

| Parameter | Reynolds 2019 | Brown 1999 | Same quantity? |
|---|---|---|---|
| Design | prospective cohorts (185) + some RCTs | 67 controlled feeding RCTs | **NO** — observational-led vs RCT |
| Exposure | **total dietary fibre** (whole-food, self-reported) | **soluble/viscous fibre** isolate (oat/psyllium/pectin/guar), dosed | **NO** — whole-diet vs isolate |
| Endpoint | hard **outcomes** (mortality, T2D, CHD, cancer) | **LDL/total cholesterol** surrogate | **NO** — outcome vs surrogate |
| Dose metric | per **8 g/day** total fibre | per **1 g/day** soluble fibre | **NO** |
| Effect | all-cause mortality RR 0.85 (hi-vs-lo); 0.93 per 8 g | LDL -0.057 mmol/L per g (practical range) | **NO** — different scale + endpoint |
| Dose-response shape | «linear with no sign of a plateau» on outcomes | **nonlinear**, attenuates >8-10 g/d on LDL | **NO** — opposite shapes, different endpoints |
| Confounding risk | healthy-user + measurement error (observational) | low (isolate held constant vs control) | **NO** |

**Defensible synthesis (type A + F):** the RCT leg *corroborates the direction* of the observational leg
and supplies a mechanism (viscous fibre -> lower LDL, independent of fat displacement), but the two do not
sum into one big causal number. The composite claim is *fibre is beneficial and at least partly causal,
with a modest measured effect on the endpoints we can actually trial* — the mortality magnitude stays
observational.



## Why the observational leg is more than *just correlation* — but not RCT-grade

Reynolds argues causality by triangulation: «The consistency between the trial and prospective study
results, together with the dose-response relationships, provide support that the effect on cardiometabolic
diseases is likely to be causal and not a consequence of confounding variables.»
[@reynolds2019] That is a legitimate
observational-upgrading move ([[Upgrading Observational Evidence]]) — a monotone dose-response plus a
concordant RCT surrogate arm raises confidence above bare correlation. But the hard-outcome arm is still
cohorts of self-reported eaters; symmetric standards forbid reading it as if a mortality RCT had run. Hence
`confidence: medium`, not high, on the outcome claim — and the causal *mechanism* is firmest exactly where
the *effect* is smallest (the LDL surrogate).

## The dose-response — a worked case for the CLAUDE.md prior

Fibre is the falsification prior's cleanest fabric instance, now with a **second independent estimate**.
Reynolds finds the fibre-outcome curves «many of which are linear with no sign of a plateau within the
available data», with «the greatest benefits ... for individuals consuming 25-29 g per day» and
recommends «no less than 25-29 g per day with additional benefits likely to accrue with higher intakes.»
[@reynolds2019]

- **This confirms SACN's reading** (SACN's 30 g marks where confidence intervals widen, not a knee) —
  but as a **type-F shared-literature corroboration, NOT independent backing**: SACN's dose-response
  curves rest on the Aune 2011 / Threapleton 2013 cohort pools, the same cohort literature Reynolds
  re-pools, so the MA-CONSTITUENCY test fails E exactly as this page's own Veronese row rules
  `[demoted E->F at self-critique 2026-08-08; the ANALYTIC re-derivation is real, the evidence base is
  shared]`. The decision default *every reduction pays; the burden is on whoever claims a knee to
  locate it* stands on the shared base, twice-derived.
- **But the shape is outcome-specific** (the gate-6 refinement). Brown's **LDL-surrogate** curve *does*
  attenuate above \~8-10 g/d — a located knee on a surrogate — while Reynolds' **hard-outcome** curves stay
  linear. So *fibre has no plateau* is true of the outcomes and false of the LDL marker; the curve you get
  depends on the endpoint you pick. This is exactly why a plateau on a surrogate must not be read across to
  the outcome ([[Surrogate Outcomes]]).

## Fibre type, and the food-vs-isolate question

- **The viscous mechanism, not the source, carries the LDL effect** — oat, psyllium, pectin and guar were
  each significant and type was not a predictor after adjusting for dose (Brown). So *soluble/viscous*
  fibre is the LDL-active fraction; insoluble/cereal fibre works through other routes (bulk, transit,
  fermentation) that Reynolds' outcome data capture but Brown's LDL analysis does not.
- **The isolate out-grades the food by DESIGN, not by superiority** — the LDL effect's trial-grade
  standing (Brown: controlled-trial meta-analysis) exists *because* soluble fibre can be dosed and
  controlled; whole-food fibre is far harder to dose and blind, so most of its evidence is
  observational (though Reynolds' pooled trials are food-based — the split is dominant, not absolute). This is the [[Is the Food Category Doing Any Work]] point in miniature:
  the better grade tracks the better-trialable *form*, and does not mean a psyllium supplement beats a
  bowl of beans for outcomes — the food carries fibre types and a matrix the isolate does not.
- **Whole grains likely work largely THROUGH their fibre** — Reynolds notes the parallel whole-grain
  benefits and that fibre's higher GRADE «could reflect the high fibre content of whole grains»
  -> [[Whole Grains Refined Grains and Pulses]].


[@brown1999]
## Decision relevance

- **Target \~25-30 g/day of total fibre from food**, mostly cereal/whole-grain + legumes + fruit/veg; more
  is fine and probably better (no plateau shown on outcomes). A realistic, sustained increase beats a
  supplement someone abandons ([[Free Sugars Intake]]: carbohydrate *quality* over quantity gimmicks).
- **For LDL specifically**, viscous fibre (oats, psyllium) is a legitimate *adjunct* but a small one — a
  few tenths of a mmol/L at practical doses, dwarfed by the saturated-fat-replacement and drug levers
  ([[Saturated Fat Intake and Replacement]]). Do not oversell it as cholesterol therapy.
- **Rank honestly.** Fibre is a real supporting lever, not a big rock; glycaemic index/load is a weaker
  marker than fibre or whole-grain content and not worth optimizing for on this evidence.



## Certainty and gaps

- **`confidence: medium`** — the LDL/surrogate leg is controlled-trial-grade (Brown 1999, a pre-GRADE
  meta-analysis of 58 controlled trials — no formal GRADE rating exists in the held text; an earlier
  "GRADE moderate-high" label here was unsupported and is RETRACTED); the hard-outcome leg is
  observational-with-dose-response (Reynolds, GRADE moderate) — upgraded above bare correlation but not
  to RCT status.
- **Gaps (G):** no RCT of whole-food fibre on hard outcomes (structurally hard — can't blind food); the
  soluble-vs-insoluble and legume-vs-cereal outcome breakdown is too sparse in Reynolds to separate;
  fibre's colonic/**transit** mechanism is not covered by either source (the constipation / gut-transit
  sub-question the Fibre deliverable still routes as unheld). `AWAITS` a fibre-transit source. The
  **microbiome** mechanism is now partly held: fermentable fibre is the substrate bacteria turn into  [@valdes2018]
  short-chain fatty acids, and it is the dominant modifiable lever on microbial diversity — so
  *prebiotics are largely fermentable fibre by another name*, and the prebiotic evidence reduces to the
  fibre evidence on this page -> [[Gut Microbiome and Health]] `[2026-07-29, Valdes + WGO]`.

## Self-critique `[run 2026-07-29, before commit]`

- **Over-claim check.** The page leads with *the big numbers are observational* and *the causal effect is
  small* — it does not let the 15-30% mortality reduction read as RCT-proven; the parameter table's
  all-NO column is the guard. No superlative scoped to the vault's holdings.
- **Laundered-E check `[re-run 2026-08-08 — the earlier pass FAILED its own test]`.** The
  Reynolds-vs-SACN `[E-independent]` this section previously defended was itself laundered: SACN's
  curves are Aune 2011 / Threapleton 2013 pools, the same cohort literature Reynolds re-pools — shared
  DATA defeats E regardless of separate analytic teams (the page's own Veronese row applies the same
  rule). Demoted to F above; no `[E-independent]` token remains on this page. Brown and Reynolds are NOT
  called independent backing for one claim; they are different quantities (the table), classified A+F.
- **Not-joined / counter-passage.** The apparent Reynolds-vs-Brown dose-response clash (linear vs
  attenuating) is resolved as *different endpoints* (outcome vs LDL surrogate), read from each source's own
  figures — a distinction, not a tension.
- **Symmetric standards.** The observational leg is held to the confound caveat even though its direction
  is the conventional/expected one; the causal claim is the authors', flagged as interpretation.



## Appraising this observational evidence — the instrument `[2026-07-31]`

The mortality/T2D numbers here are **observational** (Reynolds 2019 cohorts). The instrument that would appraise them is **ROBINS-I** ([[Risk of Bias Assessment Tools]]): domain 1 (confounding — healthy-user) and domain 6 (measurement — [[Measurement Error in Dietary Assessment]]) are where the grade would most likely be capped below «comparable to a well-performed randomized trial». A per-domain read is a deliberate future Revisit, flagged there as a re-appraisal candidate, not done here. [inferred from @reynolds2019]


## The umbrella review bounds the outcome breadth — Veronese 2018 `[2026-07-31]`

Reynolds is one WHO-commissioned SR/MA. Veronese 2018 is an **umbrella review of 18 prior
meta-analyses** (298 prospective observational studies, 21 outcomes) that applied Ioannidis-style
credibility diagnostics (excess-significance test, small-study effect, 95% prediction interval,
heterogeneity) on top of the pooled estimates. It is a **type-F refinement**: it does not change the
fibre magnitude, it grades *which* fibre-outcome associations survive bias screening.

**The headline tempers the broad reading.** «even though 85% of the associations were significant, a
higher intake of dietary fibers was convincingly associated only with a decreased likelihood of early
mortality and CVD».
[@veronese2018] Of 21 outcomes only 3 reached
class-I convincing, and «only CVD and all-cause mortality were based on prospective studies» (the
third, pancreatic cancer, rested on 13 case-control + 1 prospective study).
[@veronese2018]

- **The robust core is mortality + CVD**, not the long cancer list. T2D is class-III suggestive;
  most cancer associations are class III/IV and «largely based on case-control studies that suffer
  inherent limitations including recall bias and inability to examine temporal associations».
  [@veronese2018] Breast cancer and coronary
  artery disease carried outright excess-significance bias. Prostate cancer was non-significant.
- **A located RCT-null on colorectal adenoma** — the observational fibre-cancer signal is not
  confirmed where it *has* been trialled: «our findings are in agreement with a Cochrane review of
  randomized and quasi-randomized controlled trials in which the authors found that increased dietary
  fiber intake did not reduce the incidence or recurrence of adenomatous polyps in ∼5000
  participants». [@veronese2018] So the
  colorectal arm is exactly the [[Surrogate Outcomes]] hazard: an observational association whose one
  RCT test on the precancerous lesion came back null.

### The umbrella does NOT out-rank Reynolds (correcting the hierarchy intuition)

An umbrella review sits above a single SR in the tidy pyramid, but Veronese **excluded RCTs** —
«meta-analyses including data from randomized controlled trials» were an exclusion criterion.
[@veronese2018] So on the *causal* axis it is
weaker than Reynolds (which carries 58 RCTs on the surrogates); its authors concede «future
randomized controlled trials in large sample sizes are needed to confirm these observational
findings». [@veronese2018] Its value is the
**bias-diagnostic + breadth layer**, not a higher grade.

### Parameter table — Veronese vs Reynolds (BLOCKING, op-weave 2a)

The temptation is to read Veronese's near-identical mortality RR as an *independent* confirmation of
Reynolds. It is not independent — both pool the **same underlying prospective cohort literature**
(Veronese's all-cause-mortality MA is Yang 2015; its CVD MA is Threapleton 2013 — the very cohorts
Reynolds' own meta-analysis re-pools). Shared primary studies = shared-evidence agreement, **not**
type-E independent backing.
[inferred from @veronese2018; @reynolds2019]

| Parameter | Veronese 2018 | Reynolds 2019 | Same quantity? |
|---|---|---|---|
| Design | umbrella of 18 observational MAs (298 cohorts), **RCTs excluded** | own SR/MA: 185 prospective cohorts **+ 58 RCTs** | **NO** — observational-only vs SR-with-RCT arm |
| All-cause mortality | RR 0.835 (0.797-0.875), highest-vs-lowest | RR 0.85 highest-vs-lowest | **\~SAME** direction+magnitude, but shared cohorts |
| CVD / CHD | RR 0.913 (0.893-0.932) per **7 g/d** | CHD RR 0.76 hi-vs-lo; 0.81 (0.73-0.90) per **8 g/d** | **NO** — 7g vs 8g increment, different contrast, and the slopes visibly differ |
| Evidence appraisal | Ioannidis credibility class I-IV + excess-sig/small-study/PI | GRADE certainty | **NO** — different instruments |
| Causal stance | needs future RCTs to confirm (no RCT arm; authors' own caveat) | likely-causal by trial + cohort triangulation | **NO** — Reynolds triangulates an RCT arm |
| Independence | pools same cohort literature Reynolds uses | same underlying cohorts | **NOT independent** -> F/shared, not E |

**Defensible synthesis (type F):** Veronese *corroborates the mortality/CVD magnitude* from the same
observational base and *adds a bias-diagnostic grading* that Reynolds did not run — confirming the
robust core (mortality, CVD) while flagging the cancer periphery as weak and case-control-driven. It
raises confidence in *which outcomes to believe*, not in the causal status (still observational,
still `confidence: medium`). It says nothing about dose-response **shape** (it used highest-vs-lowest
contrasts, not per-increment curves), so it neither confirms nor tempers the no-plateau reading.

## A grade clash on fibre -> colorectal cancer — WCRF *probable*, Veronese *weak* `[2026-08-05]`

WCRF's Third Expert Report grades **dietary fibre a *probable* (strong-enough-to-recommend) protector
against colorectal cancer** — «Consuming dietary fibre helps protect against colorectal cancer» — and
sets the plant-food recommendation's fibre goal at «at least 30 grams per day ... from food sources»
(AOAC method), the *same* \~25-30 g target this page reaches on the mortality/CVD axis.
[@wcrf2018ter, §5.1 Eat a diet rich in wholegrains]
That directly clashes with the Veronese reading above (colorectal-fibre signal weak, class III/IV,
and the one RCT on colorectal *adenoma* came back null).

| Parameter | WCRF 2018 | Veronese 2018 | Same quantity? |
|---|---|---|---|
| Relationship | dietary fibre -> colorectal **cancer** | dietary fibre -> colorectal **cancer** (+ the adenoma RCT) | **\~YES** (adenoma is the precancerous lesion, not cancer) |
| Grade | **probable** (strong) — recommend | class III/IV **weak**; adenoma RCT null | **NO — the crux** |
| Instrument | WCRF/AICR (Bradford-Hill: cohort dose-response + mechanism) | Ioannidis credibility class + excess-significance, **RCTs excluded** | NO |
| Evidence base | prospective cohorts (CUP SLRs) | largely the same cohorts + case-control | \~shared |

**This is the meat pattern again** ([[Should Adults Reduce Red and Processed Meat]]): the *same
observational colorectal-cancer literature*, graded **strong-enough-to-act** by a precautionary
cancer-prevention body and **weak** under a strict credibility-class lens — a grading-and-standpoint
disagreement, not a dispute about the associations -> [[Certainty of Evidence vs Strength of Recommendation]],
[[Diet Physical Activity and Cancer Prevention]]. The wiki's read is unchanged: the fibre *cancer* arm
is the softest of the outcome menu (the robust core is mortality + CVD, the causal firmest where the
effect is smallest — the LDL surrogate), and WCRF's "probable" does not upgrade it to causal here.
[inferred from @wcrf2018ter; @veronese2018]

### Self-critique `[run 2026-07-31, before commit — Veronese section]`

- **Over-claim.** The section leads with the *bounding* reading (only mortality/CVD convincing) and
  explicitly denies the umbrella out-ranks Reynolds. No superlative scoped to the vault's holdings.
- **Laundered-E.** Independence is *denied*, not claimed — the parameter table's final row and the
  shared-cohort note (Yang 2015 / Threapleton 2013) are the guard. No `[E-independent]` token added.
- **Not-joined / counter-passage.** No tension filed: Veronese concludes fibre intake should be
  promoted and «our results support dietary recommendations that promote a higher fiber intake» —
  same direction as Reynolds. The apparent friction is on *certainty/breadth*, resolved as an
  F-refinement, not an opposed claim (checked against Veronese's own Discussion + Conclusion).
- **Symmetric standards.** The mortality corroboration (conventional direction) is held to the
  same shared-cohort / observational caveat as any contested claim.

## References

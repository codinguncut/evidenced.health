---
type: framework
question: Does dietary fibre change patient-important outcomes (mortality, T2D, CHD, colorectal cancer) and the LDL surrogate — by how much, on what dose-response, and how much of it is causal versus confounded?
aliases: [Dietary Fibre, Fibre, Fiber, Soluble Fibre, Viscous Fibre, Dietary Fiber and Health, Fibre and Mortality]
authors: [Reynolds, Andrew; Mann, Jim; Brown, Lisa; Willett, Walter W; Sacks, Frank M; Valdes, Ana M]
sources: [Reynolds - Carbohydrate Quality and Human Health 2019, Brown - Cholesterol-Lowering Dietary Fiber Meta-Analysis 1999, Valdes - Gut Microbiota Nutrition and Health 2018]
cluster: cardiometabolic-exposures
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
updated: 2026-07-30
self_critiqued: 2026-07-29
---

**The fabric's nucleus for fibre.** Fibre content was scattered across the sugar, whole-grain, and
food-matrix pages; two meta-analyses now anchor it — Reynolds 2019 (the WHO-commissioned Lancet series,
185 prospective studies + 58 RCTs) for the **outcomes**, and Brown 1999 (67 controlled trials) for the
**LDL mechanism**. Read together they give the honest shape: **fibre is a real but modest lever, and the
strongest evidence sits on the smallest effect.**

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

- **This confirms SACN's reading** (SACN's 30 g marks where confidence intervals widen, not a knee) from a
  *separate* meta-analysis and evidence base — genuine independent backing (`[E-independent]`) for the
  decision default *every reduction pays; the burden is on whoever claims a knee to locate it*.
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
- **The isolate out-grades the food by DESIGN, not by superiority** — Brown's high GRADE for the LDL
  effect exists *because* soluble fibre can be dosed and controlled; whole-food fibre cannot, so its
  evidence stays observational. This is the [[Is the Food Category Doing Any Work]] point in miniature:
  the better grade tracks the better-trialable *form*, and does not mean a psyllium supplement beats a
  bowl of beans for outcomes — the food carries fibre types and a matrix the isolate does not.
- **Whole grains likely work largely THROUGH their fibre** — Reynolds notes the parallel whole-grain
  benefits and that fibre's higher GRADE «could reflect the high fibre content of whole grains»
  -> [[Whole Grains Refined Grains and Pulses]].

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

- **`confidence: medium`** — the LDL/surrogate leg is RCT-grade (Brown, GRADE moderate-high); the
  hard-outcome leg is observational-with-dose-response (Reynolds, GRADE moderate) — upgraded above bare
  correlation but not to RCT status.
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
- **Laundered-E check.** `[E-independent]` is claimed only for the *narrow* Reynolds-vs-SACN agreement on
  the monotone-no-plateau fibre curve — two separate evidence bases reaching the same shape, not one
  citing the other. Brown and Reynolds are NOT called independent backing for one claim; they are
  different quantities (the table), classified A+F.
- **Not-joined / counter-passage.** The apparent Reynolds-vs-Brown dose-response clash (linear vs
  attenuating) is resolved as *different endpoints* (outcome vs LDL surrogate), read from each source's own
  figures — a distinction, not a tension.
- **Symmetric standards.** The observational leg is held to the confound caveat even though its direction
  is the conventional/expected one; the causal claim is the authors', flagged as interpretation.

## References

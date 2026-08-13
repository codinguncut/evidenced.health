---
type: framework
question: Do glycaemic index and glycaemic load change patient-important outcomes (T2D, CVD, cancer, mortality) enough to steer diet by — and is GI/GL an independent lever or a proxy for the fibre/whole-grain carbohydrate-quality pattern?
aliases: [Glycaemic Index, Glycemic Index, Glycaemic Load, Glycemic Load, GI, GL, Carbohydrate Quality Markers, Low GI Diet, Postprandial Glycaemic Excursions]
authors: [Jenkins, David J A; Willett, Walter C; Yusuf, Salim; Hu, Frank B; Sievenpiper, John L]
sources: [Jenkins - Glycaemic Index Load Outcomes Series 2024]
cluster: nutrition
confidence: low
relationships:
  related_to:
    - Dietary Fibre and Health
    - Whole Grains Refined Grains and Pulses
    - Is the Food Category Doing Any Work
    - Measurement Error in Dietary Assessment
    - Free Sugars Intake
    - Continuous Glucose Monitoring as a Health Intervention
    - The Underivable Optimum
created: 2026-08-13
updated: 2026-08-13
self_critiqued: 2026-08-13
---

**The decision.** Should GI/GL be a marker you steer diet by, alongside (or instead of) fibre and
whole-grain content? **GI** = how much 50 g of carbohydrate in a food raises postprandial blood glucose
vs a glucose/white-bread standard; **GL** = GI x the carbohydrate amount. Single primary source
(Jenkins 2024, gold MA), `confidence: low` — and read the whole page through the source's provenance:
its lead author **invented the GI** and the paper is an explicit rebuttal to the WHO/Reynolds
conclusion that GI has «little relevance» (see *Guidance divergence* below).

## The associations are real and consistent, mostly GRADE-low

Jenkins pooled 10 mega-cohorts (>=100 000 each, Richard Doll Consortium), highest-vs-lowest quantile,
most-adjusted, fixed-effects. High GI tracks higher risk across all four main outcomes; GL matches GI
for T2D and CVD but not cancer/mortality.

| Exposure -> outcome | RR (95% CI) | I2 | GRADE / NutriGrade |
|---|---|---|---|
| GI -> type 2 diabetes | 1.27 (1.21-1.34) | 71% | low / moderate |
| GI -> total CVD | 1.15 (1.11-1.19) | 35% | low / moderate |
| GI -> all-cause mortality | 1.08 (1.05-1.12) | 90% | low / moderate |
| GI -> diabetes-related cancer | 1.05 (1.02-1.08) | 23% | low / moderate |
| GL -> type 2 diabetes | 1.15 (1.09-1.21) | 60% | — |
| GL -> total CVD | 1.15 (1.10-1.20) | 38% | — |
| GL -> cancer / mortality | NS or inverse | — | — |

[@jenkins2024gi]

- The one **GRADE-moderate** cell is GI -> CVD mortality 1.14 (1.08-1.21); GI -> CHD mortality 1.33
  (1.14-1.55) and stroke mortality 1.29 (1.10-1.50) are the largest components. NutriGrade (used
  deliberately because «GRADE might not adequately assess ... prospective cohort dietary assessments»)
  rates the mains **moderate** — so the certainty verdict itself depends on the instrument chosen.
- **These are relative risks on a modest absolute base.** For most outcomes the extreme-quantile RR is
  1.05-1.15; the decision-weight is small except for the T2D 1.27 arm. E-values exceeded 1.2 (robust to
  a moderate unmeasured confounder) for the main GI/GL outcomes *except* GI/GL -> cancer and
  GL -> mortality. [@jenkins2024gi]

## Independent lever, or a proxy for the carb-quality pattern? (the crux)

Jenkins' headline is that low-GI associations are «similar to those for low GI diets» for **fibre and
whole grains** in the *same* cohorts, and reads this as validating GI as a carbohydrate-quality
predictor. The wiki's read is more cautious — **the same data are as consistent with GI being a proxy**:

- **The markers are collinear.** «foods high in carbohydrates also tend to have a high GI»
  [@jenkins2024gi] — GI, GL, fibre and
  whole-grain content ride together in whole-food diets, so near-identical associations are exactly what
  proxies of one underlying pattern produce.
- **The mutual adjustment is too sparse to separate them.** «only 12 (17%) of the 69 GI main outcome
  assessments controlled for fibre, controlling for fibre or not made little difference»; **no** fibre or
  whole-grain assessment controlled for GI. [@jenkins2024gi]
  *little difference on 17%* is weak evidence of independence, not the mutually-adjusted test that would
  settle it.
- **This is the [[Is the Food Category Doing Any Work]] question applied to a construct**: similar
  magnitude + shared cohorts + shared confounding + minimal cross-adjustment cannot attribute the effect
  to GI *rather than* the fibre/whole-grain/low-refined-carb pattern that carries it. [inferred from @jenkins2024gi]

**Direction has human-corroborated mechanistic support** (so this is not a *GI does nothing* verdict):
postprandial glucose excursions -> oxidative stress/free radicals -> insulin resistance and vascular
dysfunction (Ceriello, Monnier), and acarbose RCTs (STOP-NIDDM, ACE) — which pharmacologically create a
low-GI diet «without other dietary changes» — cut incident T2D.
[@jenkins2024gi] That is a
directional mechanism, not outcome-proof that steering *food* GI moves events independently of fibre.

## Why the estimate is fragile — measurement error, twice over

GI/GL inherit **FFQ error** ([[Measurement Error in Dietary Assessment]]) **plus GI-table assignment
error** (Atkinson 2008 tables mapped onto FFQ foods; local tables for Asian FFQs; PURE bread-scale
converted). And the **studied contrast is narrow**: lowest-quantile mean GI 58, highest 67 (glucose
scale), which the authors attribute to «a small range of low GI and GL values, possibly related to
health-conscious individuals». [@jenkins2024gi]
A narrow, error-laden contrast attenuates a real gradient toward the null and makes any dose-response
knee unlocatable — consistent with the wiki's [[The Underivable Optimum]] reading. No plateau/knee was
located; monotone «over the studied range» only.

## Guidance divergence — a certainty-grading dispute, not a data clash

The 2019 WHO-sponsored Reynolds/Mann series and the 2023 WHO carbohydrate guideline endorsed fibre and
whole grains but held «GI ... was not considered to be a relevant dietary factor for the prevention of
chronic diseases». [@jenkins2024gi] Jenkins
calls that «counterintuitive» and this MA is the rebuttal. **But this is largely NOT a dispute about the
associations** — Jenkins notes the WHO appendix itself carried significant GI associations. It is a
disagreement about whether GRADE-low cohort evidence is *strong enough to act on* (GRADE downgrades
observational data; NutriGrade, which Jenkins co-develops, does not), plus a live conflict of interest
(the GI's inventor, ICQC co-chair, IDF-guideline author, extensive food-industry funding). **Not filed
as a joined tension** (the not-joined check: same evidence base, different certainty threshold) — see the
G-gap. [inferred from @jenkins2024gi]

## Decision relevance

- **GI/GL is not a separate big rock.** On this evidence, steering by *fibre and whole-grain content*
  captures most of what steering by GI would, because the markers are collinear and GI's independent
  contribution is unproven. The practical advice — more whole grains, legumes, intact/minimally-refined
  carbohydrate, fewer refined/sugary carbs — is the same one fibre and whole grains already yield.
- **The T2D and CVD-mortality arms are the ones with any decision weight** (RR 1.27 and 1.14, moderate
  where anything is); cancer and GL-mortality are the softest (E-value <1.2, GL inverse/null).
- **Where GI plausibly adds** is a *stratum* signal, not a population lever: the impaired-glucose /
  insulin-resistant, where postprandial excursions and the acarbose RCTs bite ->
  [[Carbohydrate Restriction and Type 2 Diabetes Remission]],
  [[Continuous Glucose Monitoring as a Health Intervention]].

## Certainty and gaps

- **`confidence: low`** — single primary source, deeply-conflicted lead author, GRADE-low mains, an
  unresolved proxy-vs-lever question, and a narrow error-laden exposure contrast. The magnitudes are
  sound (gold MA); the *reframe* (GI as an independent carb-quality lever) is not established.
- **Gaps (G):** the mutually-adjusted GI-net-of-fibre-and-wholegrain test the independence claim needs
  is largely absent (only 17% adjusted for fibre); no long-term GI RCT on hard outcomes (acarbose is the
  pharmacological proxy); the WHO/Reynolds GI-dismissal is not extracted as its own claim, so a clean
  joined tension is deferred to a Revisit.

## Self-critique `[run 2026-08-13, before commit]`

- **Food-category launder check (the guard for this ingest).** The page does **not** credit GI when
  fibre/whole-grain/matrix may be the actor — the crux section leads with the proxy reading and tags the
  independence doubt as the wiki's. No `[E-independent]` claimed (there is one primary source).
- **Over-claim.** No superlative scoped to the vault's holdings; the source's own reframe is reported as
  *the authors' interpretation* and explicitly not adopted. The RRs are extracted, the proxy reading is
.
- **Symmetric standards.** The magnitudes are held even though they run *with* a plausible mechanism;
  the reframe is discounted for COI **and** the wiki flags the source's convenient asymmetry (a
  confounder invoked only for the disconfirming GL-cancer arm). The conflict does not delete the pooled
  numbers.
- **Not-joined / counter-passage.** The GI-vs-WHO clash was checked and found to be a certainty-grading
  disagreement over shared evidence -> recorded as a distinction, no tension filed.

## References

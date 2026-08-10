---
type: concept
question: Does greater exposure to ultra-processed food (Nova classification) raise the risk of patient-important outcomes — and does "ultra-processed" carry a causal effect of its own, beyond the sugar/salt/fat/energy-density it correlates with?
aliases: [Ultra-Processed Food, UPF, Nova Classification, Ultra-Processed Diet, UPF Health Outcomes, Processed Food Health]
authors: [Lane, Melissa M; Marx, Wolfgang; Nordic Council of Ministers (org); Hall, Kevin D]
sources: [Lane - Ultra-Processed Food Umbrella 2024, NNR - Nordic Nutrition Recommendations 2023, Hall - Ultra-Processed Diets Inpatient RCT 2019]
cluster: ultra-processed
confidence: low
self_critiqued: 2026-08-08
relationships:
  related_to:
    - Is the Food Category Doing Any Work
    - Publication Bias and Selective Reporting
    - Upgrading Observational Evidence
    - Rating Certainty of Evidence
    - Measurement Error in Dietary Assessment
    - Dietary Fibre and Health
    - Layer 1 - Ranking Interventions for a Stratum
created: 2026-07-31
updated: 2026-08-08
---

*"Ultra-processed food"* (UPF) is the Nova-classification group of *«industrial formulations primarily
composed of chemically modified substances extracted from foods, along with additives»* — packaged
snacks, soft drinks, instant noodles, ready meals. The exposure is heavily discussed and its share of
energy intake is large (42-58% in Australia/US). **The decision question is two-layered:** (1) how much
does greater UPF exposure raise risk of patient-important outcomes, and at what evidential strength; and
(2) does *processing itself* carry any of that effect, or is *"ultra-processed"* a proxy for the
sugar/salt/saturated-fat/energy-density and low fibre it correlates with — the [[Is the Food Category Doing Any Work]] question, of which UPF is the paradigm case.

**The one-line answer the corpus supports:** on **hard/patient-important outcomes** the associations are
broad and consistent but the evidence is **observational throughout and low-certainty**. On the **energy-
intake surrogate**, that is no longer the whole story: the Hall inpatient RCT — held primary since
2026-08-04 — matched UPF and unprocessed diets on presented calories, energy density, macros, sugar,
sodium and fibre, fed them ad libitum, and found UPF **still drove +508 kcal/day and 0.9 kg of weight
gain**. So **processing does independent work on energy intake at matched composition** (moderate certainty,
surrogate endpoint); whether that transmits to the hard outcomes Lane catalogues remains the observational,
low-certainty layer. See *The causal foothold* below.
[inferred from @hall2019; @lane2024upf]

[inferred from @lane2024upf; @nnr2023]

## What Lane 2024 is — and is not

An **umbrella review** (systematic review of meta-analyses): 14 meta-analysis studies, **45 distinct
pooled analyses**, n=9,888,373, all outcomes from mortality to cancer, mental, respiratory,
cardiovascular, GI and metabolic health. Two things fix how much it can carry:

- **Observational only, by necessity.** «We found no existing pooled analyses of randomised controlled
  trials during the pilot phase of this review. Consequently, we refined our search approach and scope
  to focus on observational epidemiological studies.» [@lane2024upf]
  So this is the observational *breadth* layer — it does not, and cannot on its own, establish causation.
- **Hard-endpoint RCTs are ruled out in principle.** «Setting up trials testing the effect of long term
  exposure to interventions with suspected deleterious properties (that is, diets rich in ultra-processed
  foods) on hard disease endpoints such as cardiovascular disease or cancer will not be possible, for
  obvious ethical reasons.» [@lane2024upf] Only
  short-term trials on intermediate outcomes are feasible — which is exactly why the causal claim rests
  on a single feeding trial (Hall 2019, held and extracted below since 2026-08-04) rather than a trial
  literature. This is the
  [[Measurement Error in Dietary Assessment]] / streetlight structure of the whole field, stated by the
  authors: the long-latency hard-endpoint question is unmeasurable by the design that would settle it.

## The evidence, sorted by strength — and two grading axes that disagree

Lane grades every pooled analysis **twice**, and reading only one axis misleads:

- **Credibility class** (Ioannidis-style: p-value, 95% prediction interval, excess-significance and
  small-study-effect screens, largest-study significance) — class I *convincing* -> class V *no evidence*.
  This measures **how strong, consistent, and bias-free the association is**.
- **GRADE quality** (high -> very low) — «The GRADE approach initially considers all observational studies
  as evidence of low quality.» [@lane2024upf] This
  measures **certainty that the association reflects a causal effect**, and it floors observational
  evidence at *low*, liftable only by a dose-response gradient or a large effect.

**The two axes come apart, and that gap is the finding.** The single strongest association in the review
— CVD-related mortality, class I *convincing* — is **GRADE very low**. Only 4 of 45 analyses reach GRADE
*moderate*; 22 are *low* and 19 *very low*. A class-I credibility grade says *the association is real and
survived the bias screens*; it does **not** say *the evidence is strong for causation*. Read together, the
honest summary is: **broad, consistent associations at low-to-very-low causal certainty.**
[inferred from @lane2024upf] -> [[Rating Certainty of Evidence]], [[Upgrading Observational Evidence]]

### The headline associations (highest-vs-lowest exposure unless noted; all observational)

| Outcome | Effect | Credibility | GRADE |
|---|---|---|---|
| CVD-related mortality (non-DR) | RR 1.50 (1.37-1.63) | class I convincing | very low |
| Type 2 diabetes (dose-response, per 10%) | RR 1.12 (1.11-1.13) | class I convincing | **moderate** |
| Anxiety (prevalent) | OR 1.48 (1.37-1.59) | class I convincing | low |
| Common mental disorder (prevalent) | OR 1.53 (1.43-1.63) | class I convincing | low |
| All-cause mortality (non-DR) | RR 1.21 (1.15-1.27) | class II highly suggestive | low |
| Heart-disease mortality (non-DR) | HR 1.66 (1.51-1.84) | class II | low |
| Type 2 diabetes (non-DR) | OR 1.40 (1.23-1.59) | class II | very low |
| Depressive outcomes (incident) | 1.22 (1.16-1.28) | class II | low |
| Adverse sleep (prevalent) | OR 1.41 (1.24-1.61) | class II | low |
| Wheezing | RR 1.40 (1.27-1.55) | class II | low |
| Obesity (prevalent, non-DR) | OR 1.55 (1.36-1.77) | class II | low |

[@lane2024upf]

- **The overall spread is not uniformly strong.** Of 45 analyses: 9% class I, 16% class II, 29% class III
  suggestive, 18% class IV weak, **29% class V no evidence**. «direct associations were found between
  exposure to ultra-processed foods and 32 (71%) health parameters» — but *71% direct* counts any
  P<=0.05 association, not the convincing ones. [@lane2024upf]
- **Where the evidence is null (class V):** breast, prostate, pancreatic cancer, CNS tumours, chronic
  lymphocytic leukaemia, cancer-related mortality, ulcerative colitis, hyperglycaemia, hypertriglyceridaemia,
  asthma. The strong signal is **cardiometabolic + mortality + common mental disorders**; the cancer signal
  is weak-to-absent — mirroring the fibre umbrella (Veronese 2018), whose cancer associations were also
  the weakest arm; the weak-cancer-signal pattern recurs across these nutrition umbrellas.
  [@lane2024upf] -> [[Dietary Fibre and Health]]

### Magnitudes are modest, and that bounds the decision

The class I/II relative effects run RR/OR **1.2-1.66**. Against the modest baseline risks of most of these
outcomes, these are **small-to-moderate** effects — not the order of a *big rock* (smoking, obesity itself,
heavy alcohol). Since UPF intake is *itself* strongly correlated with the big rocks (obesity, poor diet
quality), much of the ranking weight may already be captured by exposures higher in the
[[Layer 1 - Ranking Interventions for a Stratum]] hierarchy. *Attention is an anti-signal* applies with
force: UPF is among the most-discussed exposures and the effect sizes are modest and confounded.
[inferred from @lane2024upf]

## The bias screens fired — on the headline outcomes

This is a second worked case of the [[Publication Bias and Selective Reporting]] excess-significance
apparatus (the first being Veronese on fibre). Lane's re-analysis found:

- **excess-significance bias in 9 of 28 (32%)** pooled analyses with >=3 studies — including all-cause
  mortality (dose-response AND non-dose-response), hypertension, abdominal obesity, metabolic syndrome,
  NAFLD, obesity, and type 2 diabetes;
- **small-study effects in 5 of 28 (18%)** — including all-cause mortality, breast cancer, metabolic
  syndrome, and obesity.

[@lane2024upf] **The screens fire on the very outcomes
the review headlines** (mortality, obesity, T2D) — so the bias flags are not confined to the weak
associations; they attach to the strong ones too. This is the diagnostic value of running the screen:
a nominally-convincing association can still carry excess-significance bias.

## The category question — UPF is the paradigm case `[type-D live question]`

Everything above is *association*. Whether *processing* does causal work beyond the nutrients UPF
correlates with is the [[Is the Food Category Doing Any Work]] question, and UPF is its sharpest
instance because the category is defined by *manufacturing*, not composition. The corpus holds two
gold bodies that reach **opposite conclusions on the same associations**:

| | Position | Reasoning |
|---|---|---|
| **Lane 2024** | recommend population measures to target/reduce UPF | the association is broad, consistent, and *survives* diet-quality adjustment |
| **NNR 2023** | decline to recommend on UPF; Nova «does not add to the already existing food classifications» | UPF is a marker of diet quality + socioeconomic position; its predictive power runs through nutrients NNR already regulates (sugar, salt, fat, energy density, fibre) |

**Lane's defense of the category is a citation, not a demonstration.** Lane acknowledges the confounding
head-on: «This raises the question of whether the associations between exposure to ultra-processed foods
and poorer health are due to an overall unhealthy dietary pattern», then answers that «a recent
meta-analysis found that adjusting for diet quality or patterns does not change the consistent evidence».
[@lane2024upf] **But adjusting for a diet-quality
*pattern* is not the same as matching the *nutrient profile*** — the very sugar/salt/fat/fibre content
that *makes* a food ultra-processed and nutrient-poor at once. A residual association after diet-quality
adjustment does not separate processing from composition; only a design that holds composition fixed can —
and that design now exists **for the energy-intake outcome** (Hall 2019, below), where UPF moves intake at
matched composition. It does **not** yet exist for the hard outcomes Lane catalogues, which remain
composition-confounded. -> *The causal foothold*
[inferred from @lane2024upf; @nnr2023]

**Lane's own data contain the counter-evidence.** Within the T2D meta-analysis it includes (Chen 2023),
«while certain subcategories of ultra-processed foods further showed higher risk, others were inversely
associated, such as ultra-processed cereals, dark/wholegrain bread, packaged sweet and savoury snacks,
fruit based products and yoghurt, and dairy based desserts». [@lane2024upf]
**Some UPF subcategories are protective** — the category pools things that help and things that harm,
which is the within-category-variance failure exactly. Lane's response is to argue the *overall* UPF
association still holds — a legitimate move, but it does not rescue *processing* as the causal agent;
it re-asserts the aggregate. -> [[Is the Food Category Doing Any Work]]

**A defect distinct from heterogeneity: unusable at the point of decision.** NNR notes the same food (a
wholegrain bread, a yoghurt) sits inside or outside the category by manufacturing detail — so even a
*perfectly* informative category would be one a consumer cannot apply. -> [[Is the Food Category Doing Any Work]]

## Where processing *might* do independent work — mechanism, held as "not yet"

Lane lists candidate processing-specific mechanisms **beyond** nutrient content: food-matrix disruption
(altered digestion/satiety), additives (non-sugar sweeteners, emulsifiers), processing by-products
(acrylamide, advanced glycation end products), and packaging migrants (bisphenols, microplastics,
phthalates). [@lane2024upf] These are the *insufficient-
evidence / "not yet"* state — mechanistically reasonable, mostly **not yet evidenced on human patient-
important outcomes**. Admit them directionally at most; do not write them as findings from mechanism alone.

## The causal foothold — energy intake, now held primary (Hall 2019 RCT) `[2026-08-04]`

The corpus previously reached this only through Lane's secondary citation; the trial is now held primary.
It is the design that **holds composition roughly fixed and still finds UPF drives overconsumption** — the
one place the observational breadth above is complemented by randomized causal evidence.

**The trial.** 20 weight-stable adults (age 31 ± 1.6, BMI 27), 28-day inpatient NIH metabolic-ward stay,
2-week ultra-processed vs unprocessed crossover, meals «designed to be well matched across diets for total
calories, energy density, macronutrients, ﬁber, sugars, and sodium, but widely differing in the percentage
of calories derived from ultra-processed versus unprocessed foods»
[@hall2019] and eaten ad libitum. Result:
metabolizable energy intake was **508 ± 106 kcal/day greater on UPF** (p = 0.0001; final-week 459 ± 105,
p = 0.0003) — from carbohydrate (+280) and fat (+230), **not protein** (+2, NS). Participants **gained
0.9 ± 0.3 kg on UPF and lost 0.9 ± 0.3 kg on unprocessed** (weight change vs intake r = 0.8), with body fat
tracking. [@hall2019] Author verdict: «limiting
consumption of ultra-processed foods may be an effective strategy for obesity prevention and treatment.»
[@hall2019]

**What this does and does not settle.**

- **It IS a processing effect on intake, not a palatability or reported-appetite one.** Pleasantness,
  familiarity, hunger, fullness and satisfaction ratings «were not signiﬁcant between the diets»
  [@hall2019] — so the excess intake is not
  subjects simply liking UPF more or feeling hungrier.
- **The proximate levers are identifiable — and this matters for the category question.** UPF was eaten
  **faster** (+17 kcal/min, +7.4 g/min, both p < 0.0001; eating-rate difference correlated with intake
  difference r = 0.45), had **85% higher non-beverage energy density**, and provided slightly less protein
  (protein leverage modelled to explain «at most 50%» of the gap).
  [@hall2019] So the effect is not opaque
  *NOVA magic*: it runs through **energy density, eating rate/texture, and protein dilution** — measurable
  properties that a decision can target directly. -> [[Is the Food Category Doing Any Work]]
- **It is a SURROGATE result.** Endpoints are intake, weight and fat mass over 2 weeks — not the mortality/
  cardiometabolic hard outcomes Lane catalogues. It licenses «processing drives overconsumption», not
  «processing causes CVD». And energy expenditure did **not** fall on UPF (+171 kcal/day by DLW), while
  glucose tolerance and insulin sensitivity were **unchanged** despite the weight gain
  [@hall2019] — the overconsumption is an intake
  phenomenon, not a metabolic-defect or glycaemic one, in this short trial.
- **Bounds:** n=20, single trial, 2-week arms (no run-in/washout, partly addressed by the final-week
  comparison), and the presented diets were not matched on non-beverage energy density, protein, or
  sub-composition — the very properties that likely carry the effect. Hall calls for future trials matching
  those and using slowly-eaten UPF. So the trial establishes **that** processing moves intake, and points
  at **which** properties, without isolating a single lever.

[inferred from @hall2019]

## Decision relevance

- **On energy intake, UPF IS now an established lever (surrogate); on hard outcomes it is not.** The Hall
  RCT shows reducing UPF lowers ad libitum intake and body weight at matched composition — a genuine,
  randomized, independent effect on a surrogate. Whether that transmits to mortality/cardiometabolic
  endpoints stays observational and low-certainty, and much of the *hard-outcome* association may still run
  through nutrients already targeted. Do not let the strong intake result read as a strong hard-outcome one.
- **Act on the composition you can see — and Hall names what to see.** The actionable targets are the
  measurable properties that drove Hall's overconsumption: **energy density (especially non-beverage),
  eating rate/soft texture, and adequate protein** — plus the correlated nutrient profile (added sugar,
  sodium, low fibre) existing guidance already sets. This is *more* actionable than *"avoid UPF"* as a label
  a shopper cannot reliably apply, and it is what the trial licenses over the raw category. -> [[Is the Food Category Doing Any Work]]
- **The trajectory outcome is unmeasured.** These are incidence/mortality endpoints; the shape-of-decline
  question the person may care about most is silent.
- **Do not read this as a big rock.** For someone with a dominant exposure unaddressed (smoking, obesity,
  inactivity), no UPF precision changes what to do next. -> [[Layer 1 - Ranking Interventions for a Stratum]]

[inferred from @lane2024upf; @nnr2023]

## Provenance and halo note (symmetric standards)

- Lane reports that of the *included* meta-analyses, «none was funded by a company involved in the
  production of ultra-processed foods». [@lane2024upf]
  That covers the included studies, **not** the umbrella's own authors: the author group is a
  nutritional-psychiatry centre (Food & Mood Centre) with disclosed funding from food companies (Be Fit
  Food, Bega Dairy, a2 Milk) and a strong prior commitment to the *diet-quality* and UPF-harm thesis.
  The conclusions run *with* that prior (recommend targeting UPF, urgent mechanistic research), so the
  strength framing warrants the same discount a favourable-to-thesis result gets anywhere — not a
  dismissal, a symmetric read.
- SACN's own appraisal of Nova, cited by Lane, is the cautious counterweight: the Nova studies «are
  primarily epidemiological in nature and may lack adequate consideration of confounding factors or
  covariates». [@lane2024upf]

## Self-critique `[run 2026-07-31, before commit]`

- **Counter-passage check (RUN):** read Lane's Discussion end to end before framing the Lane-vs-NNR
  clash. Lane does *not* claim processing is proven causal — it explicitly flags the diet-quality
  confounding and the subcategory heterogeneity, then argues the aggregate holds. The page states Lane's
  hedge, so it is not quoting Lane against itself.
- **Not-joined check on the Lane/NNR clash:** the two partly talk past each other (Lane adjusts for
  *diet-quality pattern*; NNR argues collinearity with *specific nutrients*) — which is *why* this is
  framed as the live category question rather than a filed hard *tension*; the hidden insight IS that
  the two adjustments differ. A formal tension page is a candidate deferred to the maintainer.
- **Over-claim check:** the page asserts no causal processing effect and no independent-lever status;
  every strength claim is scoped to *association* and paired with its GRADE grade. The class-I labels are
  not allowed to read as *strong evidence*.
- **Symmetric standards:** the halo/funding discount is applied to the finding's authors, and SACN's
  confounding caveat recorded, rather than only citing the review's own strength language.
- **Residual:** everything here is observational and low-certainty; the page's weight rests on the
  two-axis-disagreement reading and the category critique, and the AWAITS-Hall line names the source that
  would let it say more.


## "But processed food is all over the guidelines" - non-uniform, and heuristic where used (deliverable-critique, 2026-08-01)

The critique: if "processed food is bad" is not a confirmable category claim, why is it in the guidelines
(like "5 a day")? Two reconciliations, no contradiction:

- **Guidance is NOT uniform on it.** NNR - a gold-tier body - **declined to recommend against UPF as a
  category**, concluding the signal reduces to energy density and fibre (variables already regulated),
  reaching this fabric's own position. So it is not settled guidance; where families disagree, that is
  itself the finding (the guidance-null is the guidance SET).
- **Where it IS used, it is a population heuristic on confounded data, not a confirmed category
  mechanism** - like "5 a day" (deliverable-critique #16): a communication shorthand for "eat less of the
  SSB / snack / refined-energy-dense cluster", resting on observational UPF associations that track overall
  diet quality, energy and SES. The harm attaches to the **components** (energy density, hyper-palatability,
  SSBs, contaminants), which is what a person should price -> [[Is the Food Category Doing Any Work]].

So "in the guidelines" and "not a confirmable category claim" coexist: the strongest appraisal declines the
category recommendation, and the softer uses are heuristic.



## Additives are not homogeneous - "thin" means insufficient, not safe (deliverable-critique, 2026-08-01)

"Thin patient-important-outcome evidence" is the INSUFFICIENT-evidence state, not "safe" - so a person's
wariness is not irrational, and the additives should be calibrated per compound rather than lumped
(symmetric standards: neither assert harm from mechanism nor dismiss a named one):

- **Some named compounds carry regulatory / mechanistic signal beyond intuition** - e.g. titanium dioxide
  (E171), the subject of EU regulatory action on unresolved genotoxicity, and nitrites/nitrates, whose
  N-nitroso pathway ties into processed meat's carcinogen status -> [[Red and Processed Meat and Cancer]].
  Directional, NOT demonstrated human hard-outcome harm; primary sources are queued to ground them.
- **Others are genuinely "not yet"** - emulsifiers (CMC, polysorbate-80): mechanistic gut / inflammation
  data plus at most a small human trial, no hard-outcome evidence; most common preservatives (sorbates,
  benzoates, propionates) are low-concern. Admit directionally, marked mechanism, not as findings.

**Layer separation:** the wiki (layer 2) names the mechanism and the evidence-state; whether to avoid a
named-mechanism compound *precautionarily* is a **layer-3 personal weighting** - legitimate, and not the
same as the wiki asserting harm. The blanket "additive therefore harmful" is the fallacy; a specific named
mechanism is not.

## References

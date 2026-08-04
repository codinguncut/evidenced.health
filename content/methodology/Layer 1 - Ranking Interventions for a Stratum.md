---
type: methodology
question: For this stratum, what is the largest remediable gap — and can the wiki rank anything yet?
aliases: [Layer 1 Hierarchy, Intervention Hierarchy, Ranking Interventions, Largest Remediable Gap, What Can Be Ranked]
authors: [Nordic Council of Ministers (org); European Society of Cardiology (org); Jha, Prabhat]
sources: [NNR - Nordic Nutrition Recommendations 2023, ESC - CVD Prevention Guidelines 2021, Jha - Smoking Hazards Cessation Benefits 2013]
cluster: decision-hub
relationships:
  related_to:
    - Semaglutide for Cardiovascular Risk in Obesity
    - Does Weight Loss Reduce Cardiovascular Events
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
    - Menopause and the Shifting Levers
created: 2026-07-26
updated: 2026-08-04
self_critiqued: 2026-07-28
---

**Mostly a compilation.** Every row of the table below is copied from a claim page with its own source;
that part combines nothing. The point of the page is the **shape of what is held and what is missing** —
per the telos, *the ceiling is itself a finding*.

> **Superseded 2026-07-28.** This header previously read *"a compilation, not a synthesis... nothing
> here combines sources"*, and `sources:` was empty. The final section now carries a source of its own
> (NNR/GBD) and makes a distinction the compiled rows do not contain — **population attributable
> burden is not individual expected benefit**. That belongs on this page because it is a claim about
> *what layer-1 ranking is*, not about any one exposure. The compilation description is retained for
> the table; it no longer describes the whole page.

**Worked against one illustrative stratum — a man of \~60 with central adiposity and metabolic syndrome,
no established CVD** — because the telos names *"obesity with visceral adiposity and hypertension"* as a
dominant exposure and a hierarchy is meaningless without a stratum to hold it fixed.

**The stratum is a PARAMETER of this page, not its subject.** The fabric is general; only its
application is personal. **Titling a page like this for a specific individual's age and condition
would invert that** — the telos is explicit that the wiki *"is never built around one person's
situation"*, and that stratification and outcome-weighting belong to **layer 3, per case, after the
fact**. Any actual person's values live outside the graph, never in it.



## The honest answer first

**The wiki cannot yet rank these interventions against one another, and the reason is specific: it
holds no baseline risk for this stratum, and no magnitude at all for the two largest levers.**

Layer 1 ranks by **effect size x certainty**, and effect size means *absolute* effect at a stated
baseline risk. Of eight exposures below, **one** has an absolute effect on a hard outcome.



## What is held

| Exposure | Effect | Outcome type | Certainty | Source page |
|---|---|---|---|---|
| **Quit smoking (vs continue)** | **all-cause HR \~3.0; \~10 yr of life recovered if quit by 40 (removes \~90% of excess risk); still pays at any age** | **hard, mortality** | **High** | [[Smoking and Mortality]] |  [@jha2013]
| **Reduce SFA to 10%E** | **15 fewer CVD events per 1000** (RR 0.83, 0.70-0.98) | **hard, composite** | Moderate | [[Saturated Fat Intake and Replacement]] |
| Replace SFA with PUFA | 50 fewer CVD per 1000 — **at a 23.8% control event rate** | hard, composite | Low | [[Saturated Fat Intake and Replacement]] |
| Low-carb for T2D remission | RD 0.32 at 6 mo, **NNT \~3**; attenuates to 0.10 by 12 mo | intermediate (HbA1c-defined) | Moderate | [[Carbohydrate Restriction and Type 2 Diabetes Remission]] |
| Low-carb, glycaemic control | HbA1c -0.47% at 6 mo | surrogate | **High** | [[Carbohydrate Restriction and Type 2 Diabetes Remission]] |
| Very-low-carb (NICE stratum) | weight -2.38 kg at 1 yr; HbA1c -0.38 | intermediate + surrogate | Very low / Low | [[Diets for Weight Loss - What NICE Recommends]] |
| Low-carb vs balanced-carb, weight | \~1 kg — **judged not clinically important** | intermediate | Moderate | [[Low-Carbohydrate vs Balanced-Carbohydrate Diets]] |
| Reduce sodium | **-3.39 mmHg** systolic; hard outcomes all **very low** | surrogate | High (BP only) | [[Sodium Intake and Blood Pressure]] |
| Reduce free sugars | isoenergetic swap for other carbohydrate: **null (0.04 kg)** | intermediate | Moderate | [[Free Sugars Intake]] |

**Read the outcome-type column before the effect column.** Only the first two rows are hard outcomes.
Everything else is an intermediate or a surrogate, and the telos is explicit that a surrogate is not an
outcome — a marker can move the right way while patients do worse.

## What is held as a RECOMMENDATION but with no magnitude

- **Total diet replacement, 800-1200 kcal, maximum 12 weeks** — [[Diets for Weight Loss - What NICE Recommends]]
  carries NICE's recommendation, its bounds and its strength, but **not its effect size**. The review
  reports one; this wiki never extracted it. **The cheapest single fix on this page.**



## What is EMPTY — and this is the finding

| Lever | Status | Why it is empty |
|---|---|---|
| **Physical activity** | **ratios only, no absolutes** | The WHO guideline, its 535-page evidence annex and the 779-page PAGAC report all report hazard and risk ratios and **no absolute effects** for adult mortality/CVD/cancer/T2D. Staged, not ingested |
| ~~**Weight loss as an exposure on hard outcomes**~~ | **FILLED 2026-07-28 — as a NULL/ceiling** | [[Does Weight Loss Reduce Cardiovascular Events]] (Look AHEAD): lifestyle weight loss did NOT reduce hard CV events in T2D (HR 0.95). The lever is real for many outcomes; its *hard-CV-event* benefit is unproven via the lifestyle route |
| **Baseline risk** | **FILLED as machinery (2026-07-26)** | [[SCORE2 Baseline Risk and the ESC Treatment Thresholds]] holds the ESC thresholds and a read-off grid. **A stratum defined by age and condition alone cannot use it** — the chart also needs smoking status, a BP band, a cholesterol band and a region, and the ESC category moves between *high* and *very high* across plausible values. Those four are **case inputs, supplied at layer 3**, not fabric |
| ~~**Pharmacotherapy**~~ | **FILLED 2026-07-28** | [[Semaglutide for Cardiovascular Risk in Obesity]] (SELECT+STEP-1) + [[Statins for Primary Prevention and the Power of Zero CAC]] (USPSTF+Nasir). Both the realistic drug comparators the telos names. Key finding is a ceiling, not a lever: see below |
| ~~**Alcohol · sleep · smoking**~~ | **ALL HELD 2026-07-29** | Alcohol ([[Alcohol and Mortality and Vascular Disease]]) + sleep ([[Sleep Duration and Mortality]]) + **smoking now ingested ([[Smoking and Mortality]], Jha 2013) — the #1 dominant exposure, all-cause HR \~3.0 and a decade of life, now quantified and at the TOP of the ranked table above** |

## What this page establishes

1. **The one thing rankable is also the smallest lever on the list.** SFA reduction has the only
   absolute hard-outcome effect the wiki holds — 15 fewer cardiovascular events per 1000 — and the
   telos's own *attention-is-an-anti-signal* rule flags dietary fat composition as exactly the
   contested, heavily-published, small-effect question that literature volume inflates.
2. **The two largest levers for this stratum are unquantified**, not unfavourable. Adiposity and
   inactivity are empty rows, and the telos names both as dominant.
3. **The rows are NOT commensurable and must not be read as a ranking.** Different outcomes (CVD events
   vs kg vs mmHg vs HbA1c), different baseline risks (the 50-fewer-per-1000 PUFA row comes from a
   23.8% event-rate population, roughly 3x the 8.5% in the row above it), different populations,
   different follow-up. **A table that looks like a ranking and is not one is a hazard**; it is laid out
   this way to show the gaps, not to order the interventions.
4. **The binding acquisition is a baseline-risk instrument, not another exposure.** Every ratio already
   held becomes an absolute effect the moment a stratum-specific baseline risk exists. That is one
   ingest — the ESC threshold table plus SCORE2 — and it converts the whole corpus.
5. **For hard CV events in a low-risk person, the ceiling is now an established finding, not a gap.**
   The pharmacotherapy and weight-loss rows filled in 2026-07-28 all land the same way —
   [[Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People]]: no cardiometabolic
   intervention the wiki holds (semaglutide, statin, or lifestyle weight loss) has a large, proven
   reduction in hard CV events for a low-risk primary-prevention person. So item 2 sharpens: the weight
   lever is no longer *unquantified* on hard CV outcomes — it is *quantified as unproven/null* via the
   lifestyle route, which is the ceiling itself.



## What would change the answer

In priority order, all from already-staged material:

1. ~~Ingest the ESC/SCORE2 baseline-risk layer.~~ **DONE 2026-07-26** — and it revealed the next
   blocker: **this stratum is under-specified.** To read a baseline at all it needs smoking status, a
   BP band, a cholesterol band and a region. Until those are stated the conversion is the author's
   assumptions, not the person's data.
2. **Extract NICE's total-diet-replacement magnitudes** onto its claim page — the recommendation is
   held without its effect size.
3. **Ingest WHO Physical Activity + PAGAC** and record, as a G-gap, that the absolute layer is
   structurally absent from the activity literature as it reaches guidance.



## Limits

- **One illustrative stratum, chosen to make the gaps concrete, not induced from the corpus.** The telos
  warns the hierarchy is stratum-dependent and that a universal ordering is not the answer. Nothing here
  transfers to a lean 30-year-old — and re-running it for another stratum is the intended use, not a
  limitation.
- **This page grades coherence, never validity** (method-risks R1). It says what the wiki holds and
  what it lacks — not what is true, and not that acting on it improves any outcome.
- **No independent re-checking was done for this page.** Each row is carried from its claim page and
  inherits that page's audit status — nothing more.



## Activity enters the hierarchy with a magnitude `[2026-07-27]`

Layer 1 requires magnitudes *comparable enough to make the ordering visible* — *"an effect stated only
as 'associated with' cannot be ranked against anything."* Physical activity now has one, and it is
large: **HR 0.34 (0.27-0.43)** at the maximum for device-measured total activity, HIGH certainty
-> [[Physical Activity Dose and Mortality]].

**Two things this changes about the ranking, both stratum-dependent.**

1. **The big-rock framing holds for the inactive.** Near-total inactivity is already named as a
   dominant exposure; the magnitude now supports that placement rather than merely asserting it.
2. **For someone already active, the ceiling arrives early — and that is itself the finding.** Maximal
   risk reduction is reached at **\~24 min/day of MVPA**. Above that, the curve flattens, so additional
   activity is a small lever competing with other small levers. Per the ceiling rule, *"your remaining
   levers here are small"* is a result that licenses someone to stop optimizing, not a failure to find
   something.

**The caution that keeps this honest:** the ranking is by expected effect **x certainty**, and this
estimate is observational and between-quartile, so reverse causation is not excluded by design. A
large HR from cohorts does not outrank a smaller one from trials automatically.



## A published ranking arrives — on the wrong axis `[2026-07-28]`

NNR is the first source the wiki holds that **publishes an
explicit ordering of dietary risk factors** for a defined population, via its collaboration with the
Global Burden of Disease project:

> «As described in the collaboration between the Global Burden of Disease project and the NNR2023
> project, a diet low in whole grains is the highest- ranked dietary risk factor in the Nordic and
> Baltic countries. Across all countries, low whole grains diets are responsible for one fifth of the
> total burden of disease attributed to dietary factors and it is the greatest overall contributor to
> ischemic heart disease and colon and rectum cancer (Knudsen et al, 2025).»
> [@nnr2023]

> «Despite their conservative methodology, the collaboration between GBD and the NNR2023 project
> observed that a diet high in red meat is the fourth-highest dietary risk factor for Disability
> Adjusted Life Years (DALYs) in the Nordic and Baltic countries. It is ranked second highest in
> Denmark and Iceland»
> [@nnr2023]

**This looks like exactly what this page says it lacks. It is not, and the difference is the point.**

| | This page's table | The GBD/NNR ranking |
|---|---|---|
| Quantity ranked | **absolute effect on one person** in a stratum, per unit exposure change | **attributable burden across a population** (DALYs) |
| What drives the number | effect size x baseline risk | effect size x baseline risk **x prevalence of the exposure** |
| Answers | *what do I gain by changing this?* | *what is costing this population the most?* |
| Same quantity? | **NO** | **NO** |

**Population attributable burden is not individual expected benefit, and the wedge between them is
exposure prevalence.** A risk factor can top a population ranking because it is *common* while
offering a given individual a small gain — and a rare exposure with a large individual effect can sit
far down the same list while being the dominant lever for the person who has it. **The ranking answers
a public-health resource-allocation question; layer 1 asks a personal one.** Reading the first as the
second is a unit-of-analysis error, and it is a seductive one because both are honestly called
"ranking dietary risk factors".
[inferred from @nnr2023]

**What it does license, which is not nothing:**

- **A prevalence-weighted sanity check on where the wiki has spent its attention.** Low whole-grain
  intake ranks **first** and red meat **fourth** in this population, while the wiki's only rankable
  absolute effect is saturated-fat reduction. That is a coverage signal about the corpus, not a claim
  about any person.
- **Stratum-dependence, demonstrated rather than asserted.** The red-meat rank moves from fourth
  overall to **second in Denmark and Iceland** — the same exposure, the same evidence, a different
  ordering because the population differs. The telos's *"the hierarchy is stratum-dependent, not a
  fixed list"* now has a worked instance instead of a statement.
- **A named instrument to acquire.** `Knudsen et al. 2025` is the GBD/NNR collaboration paper and is
  **not held**; NNR reports its conclusions, not its method or its attributable fractions.
  `AWAITS` a source carrying population attributable fractions with their exposure-prevalence inputs —
  **that, not another guideline, is what would let a population ranking be converted toward an
  individual one.**

**And a caution NNR supplies against its own ranking.** The red-meat sentence opens *«Despite their
conservative methodology»*, and the preceding sentence records that the GBD review *«concluded that
there is a weak association between unprocessed red meat consumption and colorectal cancer, breast
cancer, ischemic heart disease and type 2 diabetes»*. **So a fourth-place burden rank coexists with a
weak underlying association** — which is the prevalence wedge visible inside NNR's own text, and the
cleanest available demonstration that a high rank is not a large individual effect.
[@nnr2023]

## Self-critique of the NNR/GBD addition `[run 2026-07-28, before commit]`

- **The seductive claim was NOT written.** NNR hands this page a ranked list of dietary risk factors,
  and this page opens by saying it cannot rank anything. **Presenting the GBD ranking as the fix would
  have closed the page's central gap with the wrong quantity** — and it would have read as the single
  most valuable find of the revisit. The parameter comparison was built first and returned NO.
- **Unit-of-analysis check: this is the failure mode the table catches.** Population attributable
  burden and individual absolute benefit are both honestly describable as "how much this exposure
  matters", differ by a prevalence factor, and are reported in the same document.
- **Prior-page reconciliation: done in the open.** The header's **nothing here combines sources** and
  the empty `sources:` were both falsified by this addition; the supersession is noted in place rather
  than silently rewritten.
- **Attribution split.** The two rankings and the *«Despite their conservative methodology»* caveat are
  NNR's, quoted. The prevalence-wedge argument is the wiki's and is tagged.
- **Absence claim, scoped.** *"the first source the wiki holds that publishes an explicit ordering of
  dietary risk factors"* is a claim about **the wiki's holdings**, verifiable from the registry, not a
  claim about the literature.
- **Residual:** the underlying GBD paper (`Knudsen et al. 2025`) is not held. Everything here rests on
  NNR's two-sentence report of it — no attributable fractions, no method, no confidence intervals.
  Recorded as an `AWAITS` rather than treated as a held magnitude.

## The largest relative effects here are the ones a person cannot change `[2026-07-28, ESC chunk 03]`

This page's table holds dietary and activity exposures. **ESC's psychosocial chapter supplies effect
sizes that dwarf most of them — for exposures that are not individually modifiable.**

> «The strongest association has been found between low income and CVD mortality, with a RR of 1.76
> [95% confidence interval (CI) 1.45-2.14].»
> [@esc2021]

And on psychosocial stress: it «is associated, in a dose-response pattern, with the development and
progression of ASCVD, independently of conven- tional risk factors and sex».
[@esc2021]

**RR 1.76 is larger than any dietary relative effect this wiki holds.** It is also a *social position*,
not a behaviour — and that is the finding, not an aside.

**What this does to the hierarchy, stated carefully.**

- **It is a ceiling statement, and the telos says ceilings are results.** If the largest available
  relative effects attach to income and social position, then **the achievable gain from optimising the
  dietary levers on this page is bounded well below the total variation in outcomes** — which licenses
  someone to stop optimising, rather than implying they should try harder.
- **It does NOT belong in the ranked table**, and adding it would break the table's own rule. Layer 1
  ranks **remediable** gaps; an exposure a person cannot change has no *intervention* to rank, however
  large its association. **Recording it here, outside the table, is the honest placement.**
- **The confounding structure is stated by ESC itself, and it names the culprits** — psychosocial
  stress «has direct biological effects, but is also highly correlated with socioeconomic and
  behavioural risk factors (e.g. smoking, poor adherence)». **Smoking and adherence are exactly the
  behavioural exposures the telos names as dominant**, so part of what the 1.76 measures is already
  accounted for elsewhere in any ranking, and treating it as additive would double-count.
  [inferred from @esc2021]

**What would make this actionable rather than merely sobering:** a source on interventions that change
the *stressor* rather than the *social position* — job control, social connection, stress-management
programmes — with effects on hard outcomes. **The corpus holds none.** ESC recommends screening for
depression, anxiety and insomnia, which is a detection step, not an intervention with a measured
outcome effect. `AWAITS` such a source; **this is a `G` gap with a named shape, not a vague one.**

## The Nth intervention does not deliver its trial effect `[2026-07-28, ESC chunk 06]`

This page ranks interventions as if each carried its measured effect independently. **ESC states the
constraint that breaks that assumption:**

> «The incremental benefit of medication when added to an already complex regimen is often uncertain.
> Moreover, care for multimorbid CVD patients is often fragmented and given by multiple providers,
> complicating decision- making and adherence to recommended treatment.»
> [@esc2021]

**Why this belongs on a ranking page rather than a clinical one.** A ranked list invites the reading
*do the top item, then the next, then the next*. **If each addition erodes adherence to the ones
already in place, the list is not additive and its tail is worth less than its stated effects imply** —
possibly less than nothing, if a marginal addition displaces a larger established one.

**This is a telos provision with a source attached.** *Adherence is part of the effect*; *cognitive
cost, decision fatigue and opportunity cost are real constraints, not excuses*. **ESC supplies a
guidance body saying so about its own recommendations**, which is stronger than the wiki asserting it.

**Three bounds, because the claim is easy to over-extend.**

- **ESC's sentence is about *medication* in *multimorbid* patients.** Whether it transfers to stacking
  dietary and activity changes in a healthier person is **not established here** — plausible by the
  same mechanism, unevidenced in this source.
- **«often uncertain» is not «often absent».** ESC claims the incremental benefit is not reliably
  known, not that it is zero. Reading it as the latter would be the stronger, unsupported claim.
- **It does not reorder anything on this page.** It bears on **how far down the list is worth going**,
  which is a different question from which item is largest — and it reinforces the ceiling finding
  above rather than competing with it.
[inferred from @esc2021]

## The absolute layer arrives for one exposure — and it shrinks the lever `[2026-07-28, WHO SFA Annex 6]`

This page's binding complaint is that it holds almost no absolute effects. **WHO's Annex 6 has now been
read, and it supplies the full per-outcome absolute profile for saturated-fat reduction.** The result
does not enlarge the top row; it **bounds** it.

| Outcome | Absolute per 1000 | Certainty |
|---|---|---|
| **Cardiovascular events** | **15 fewer** (25 fewer to 2 fewer) | Moderate |
| All-cause mortality | 2 fewer (6 fewer to 2 more) | Moderate |
| CVD mortality | 1 fewer (4 fewer to 2 more) | Low |
| CHD mortality | 1 fewer (3 fewer to 3 more) | Low |
| Stroke | 2 fewer (7 fewer to 6 more) | Very low |
| Type 2 diabetes | 1 fewer (4 fewer to 3 more) | Low |

Full profile with relative effects and study counts:
[[Saturated Fat Intake and Replacement]].

**Three consequences for the hierarchy.**

- **The one rankable exposure is rankable on ONE outcome.** Cardiovascular events clears the null; every
  other row crosses it, including all-cause mortality at Moderate certainty. **So the table's top row
  is not "SFA reduction prevents 15 events per 1000" as a general benefit — it is that, on composite
  cardiovascular events, and approximately nothing measurable elsewhere.**
- **It sharpens the existing finding rather than overturning it.** This page already said the one
  rankable thing is also the smallest lever on the list, and invoked the telos's
  *attention-is-an-anti-signal* rule. **The annex confirms it from the inside**: the most-studied
  dietary exposure in the corpus yields one significant absolute effect on one composite outcome.
- **The ceiling statement gets firmer.** Combined with the ESC finding above — that the largest relative
  effects attach to social position — **the picture is a small, well-measured dietary lever sitting
  under much larger unmodifiable ones.** That is a result, and the telos says to report it as one.

**What is still empty is unchanged.** Physical activity still has ratios without absolutes;
pharmacotherapy, weight loss as an exposure, alcohol, sleep and smoking remain empty rows. **Annex 6
filled one cell of one row — the SFA line — and demonstrated how much work an absolute layer takes per
exposure.**



## A heavily-discussed lever that ranks near the bottom — meal timing `[2026-07-29, TREAT + eTRF]`

[[Time-Restricted Eating]] enters the hierarchy as a **worked instance of *attention-is-an-anti-signal***:
enormous public discussion, small measured effect. The two RCTs the wiki holds decompose it — a
self-selected eating window produced **no weight advantage** (and lost muscle); shifting eating *early*
improved insulin/BP **surrogates** with no weight change (n=8, no hard outcome). So meal timing offers,
at most, a small weight-independent surrogate signal from eating earlier, plus a *negative* lean-mass
signal from a careless late window. **It ranks below every hard-outcome row in the table above** and
belongs with sodium/free-sugars as a small/surrogate lever — its prominence is a fact about the
literature, not about its effect size. It is not added as a table row: there is no absolute hard-outcome
effect to rank, which is itself the placement.

## References

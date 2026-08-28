---
type: methodology
question: For this stratum, what is the largest remediable gap — and can the wiki rank anything yet?
aliases: [Layer 1 Hierarchy, Intervention Hierarchy, Ranking Interventions, Largest Remediable Gap, What Can Be Ranked]
authors: [Nordic Council of Ministers (org); European Society of Cardiology (org); Jha, Prabhat; Afshin, Ashkan; GBD 2019 Risk Factors Collaborators (org)]
sources: [NNR - Nordic Nutrition Recommendations 2023, ESC - CVD Prevention Guidelines 2021, Jha - Smoking Hazards Cessation Benefits 2013, Afshin - Health Effects of Dietary Risks GBD 2019, GBD - 87 Risk Factors 204 Countries 2019]
cluster: decision-hub
relationships:
  related_to:
    - Semaglutide for Cardiovascular Risk in Obesity
    - Does Weight Loss Reduce Cardiovascular Events
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
    - Menopause and the Shifting Levers
created: 2026-07-26
updated: 2026-08-28
self_critiqued: 2026-08-26
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

**Within-diet food-group ranking** — the cross-outcome dose-response grid at
[[Food Groups and Health Outcomes - A Dose-Response Matrix]] ranks 12 food groups against 5 outcome
families at once, so the *direction-consistency* of a food lever is visible at a glance: whole grains
protect across all five (two HIGH cells), processed and red meat harm across all five (the most
consistent harmful levers), while SSB, dairy, fish and eggs are outcome-specific. It is the food-level
input to this stratum ranking; its effects are per-serving RRs on mostly-hard outcomes, all
observational-grade and from **one shared evidence base** (not independent).


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

## The foundational source behind the ranking arrives — global, and it sharpens the wedge `[2026-08-04, Afshin GBD 2017]`

The NNR/GBD section above rested entirely on NNR's **two-sentence second-hand report** of a Nordic GBD
collaboration (`Knudsen et al. 2025`, still not held), and closed with an `AWAITS` for *"a source
carrying population attributable fractions with their exposure-prevalence inputs."* **Afshin GBD 2017
(the global dietary-risks analysis) is that source at the global level** — it supplies the primary
ranking, the attributable-burden numbers, and the method, first-hand rather than via NNR's paraphrase.
It **partly cashes the AWAITS**: the global attributable fractions are now held; the *Nordic-specific*
ones (Knudsen) stay open.

**The global ranking, in GBD's own units** (population-attributable deaths / DALYs, 2017):

> «In 2017, more than half of diet-related deaths and two-thirds of diet-related DALYs were attributable
> to high intake of sodium (3 million \[95% UI 1--5\] deaths and 70 million \[34--118\] DALYs), low
> intake of whole grains (3 million \[2--4\] deaths and 82 million \[59--109\] DALYs), and low intake of
> fruits (2 million \[1--4\] deaths and 65 million \[41--92\] DALYs)...»
> [@afshin2019]

Globally dietary risks account for **11 million deaths (22% of adult deaths) and 255 million DALYs**;
low whole grains is the leading risk by DALYs in 16-17 of 21 regions.
[@afshin2019]

**This does NOT change the page's central holding — it underwrites the distinction the NNR section made
second-hand.** GBD reports *attributable burden*, not *individual expected benefit*, and the wedge is
still exposure prevalence. Whole grains tops the DALY ranking because near-universal low intake (global
mean is **23% of optimal**) multiplies a borrowed observational RR across billions — not because the
per-person gain is large. The parameter table from the NNR section (population-attributable-DALYs vs
individual-absolute-effect, **Same quantity? NO**) governs GBD's numbers unchanged.

**The sharpest instance of the wedge: diet outranks tobacco at the population level, while smoking is
the corpus's largest INDIVIDUAL effect.** GBD states:

> «Our findings show that suboptimal diet is responsible for more deaths than any other risks globally,
> including tobacco smoking...»
> [@afshin2019]

Set that against the top row of this page's table: quitting smoking carries **all-cause HR \~3.0** and
\~10 years of life for a smoker ([[Smoking and Mortality]]) — the largest individual effect the wiki
holds. **Both are true, and reconciling them IS the wedge:** diet's attributable *burden* exceeds
tobacco's because sub-optimal diet is near-universal while smoking is a minority exposure with a huge
per-person hazard. **A population ranking and an individual ranking put diet and tobacco in opposite
orders, from the same evidence.** Reading GBD's "diet kills more than tobacco" as "improve your diet
before you quit smoking" is the exact unit-of-analysis error this page exists to name.
[inferred from @afshin2019; @jha2013]

**GBD independently corroborates *attention-is-an-anti-signal* — the discussed exposures rank low.**

> «High consumption of red meat, processed meat, trans fat, and sugar-sweetened beverages were towards
> the bottom in ranking of dietary risks for deaths and DALYs for most high-population countries.»
> [@afshin2019]

The consortium draws the telos's own conclusion: promoting under-consumed healthy foods «might have a
greater effect than policies only targeting sugar and fat.» So the heavily-litigated levers (meat,
sugar, fat) sit at the bottom of the attributable-burden ranking, and the boring under-eaten staples
(whole grains, fruit, nuts) sit at the top — a *population* instance of the anti-signal rule, from a
source with no stake in the wiki's framing. [@afshin2019]

**Four caveats that keep the ranking honest — all GBD's own, and they matter because a burden ranking
is seductive:**

- **The RRs are borrowed observational estimates**, from meta-analyses of prospective cohorts; residual
  confounding is not excluded, and GBD says the diet evidence is «generally weaker than» that for tobacco
  or blood pressure. So the diet>tobacco *burden* claim rests on weaker warrant than the comparison
  suggests.
- **Individual effects may be over-stated** because healthy factors co-occur: «the effect size of the
  individual dietary factors might be overestimated» — a confound GBD cannot remove.
  [@afshin2019]
- **The exposure is share-of-diet, not absolute** (energy-adjusted), so every risk is implicitly a
  *substitution* whose partner is unspecified -> [[Measurement Error in Dietary Assessment]]. A ranking
  of substitutions with unnamed comparators cannot be read as "eat more X, gain Y."
- **The #1-ranked risk has the thinnest exposure data** — sodium's data representativeness index is
  **26.2%** (vs 94.9% for most foods), so the sodium estimate is modelled from \~a quarter of countries.
  [@afshin2019]

**What it does license:** the same prevalence-weighted coverage check the NNR section named, now global
and first-hand — and a worked reconciliation of the diet-vs-tobacco paradox that makes the
population/individual distinction concrete rather than asserted. **What it still does not give:** any
absolute per-person effect this page could rank a stratum's levers by. GBD is a population instrument;
the page's binding gap (stratum baseline risk) is untouched.

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






## Few high-certainty, high-impact dietary levers — a challenge the assembled fabric confirms, and sharpens `[2026-08-17, Challenge]`

A maintainer doubt, registered as a Challenge: *the evidence for fibre is not convincing or big; the
big levers are movement/muscle and loss of visceral/ectopic fat and dyslipidaemia; and other than fibre
there are very few high-certainty, high-impact dietary levers.* Adjudicated against the held fabric —
never by authority — the doubt is **substantially correct, and the fabric already holds it**, scattered
across the pages this section now assembles. Assembling it makes one distinction the individual pages do
not, and adds a certainty-type asterisk to each lever the doubt names.

**The distinction the pieces hide: a "dietary lever" is two different objects.** Split it and the
apparent emptiness resolves.

- **Composition** — *which* nutrient (more PUFA, less SFA, less free sugar, less sodium, more fibre).
  Every composition lever the wiki holds is **small, conditional, observational, or mostly spent** (the
  enumeration below). This is the set the doubt calls nearly empty, and the fabric agrees.
- **Quantity** — *how much* total energy. This is the one **large** dietary lever, and it acts by
  changing body fat, so it appears on the ranking not as "diet" but as **fat loss**. The fabric holds
  that the carbohydrate-insulin "metabolic advantage" is refuted in direction and magnitude — *"a
  calorie is a calorie"*, *"cutting carbs is not a distinct fat-loss lever at equal calories... the
  decision moves to energy intake"* -> [[What Drives Fat Gain - Energy Balance vs the Carbohydrate-Insulin Model]];
  the adiposity lever *"is negative energy balance, whatever delivers it"* -> [[Ectopic Fat and Depot-Specific Risk]].

So the doubt's own framing — big levers = movement + fat loss, dietary levers = small — **is the fabric's
position once "fat loss" is recognized as the one large dietary lever wearing a body-composition label.**

**The composition set, enumerated — each cross-linked, none re-derived here:**

- **Fibre** — the doubt's granted exception, and the fabric is *more* skeptical than the doubt. The strong
  signal (CHD RR 0.76) is **observational**; the trialled causal mechanism is transmission-bounded to a
  **<4% CHD reduction** (challenge #R40), *"an order of magnitude smaller than the association the cohorts
  report"* — *"a real but modest lever, and the strongest evidence sits on the smallest effect"*
  -> [[Dietary Fibre and Health]]. The one dietary lever the doubt keeps is itself shakier than granted.
- **Saturated fat -> PUFA** — the only rankable composition lever, and the smallest thing on the table:
  15 fewer CV events/1000 on **one composite outcome** (RR 0.83, Moderate), mortality graded null, the
  SFA-harm premise itself contested -> [[Saturated Fat Intake and Replacement]].
- **Free sugar** — isoenergetic swap **null** (0.04 kg); the WHO 10% limit is a *dental* recommendation,
  not a cardiometabolic one -> [[Free Sugars Intake]].
- **Sodium** — HIGH certainty on the surrogate (SBP -3.39 mmHg), **VERY LOW** on direct hard outcomes;
  a route-(a) conditional lever that pays with baseline BP risk, not a universal one
  -> [[Sodium Intake and Blood Pressure]].

**The two honest exceptions the claim must survive (symmetric standards — test the counter-evidence, not
just the confirming):**

- **Trans fat** is the one *firm* composition finding — *"the firmest fat finding held"* -> [[Dietary Fat]].
  But it is largely policy-eliminated, so little individual room remains, and WHO issued only a
  *conditional* recommendation below 1%E because LDL *"is not a physical manifestation... of disease."*
  A high-certainty lever that is mostly already spent.
- **The Mediterranean *pattern*** carries the best hard-outcome dietary signal held (PREDIMED primary
  composite HR 0.70, 0.55-0.89) — but in a **high-baseline-risk** population (\~49% diabetic, \~82%
  hypertensive), carried by stroke, with **all-cause mortality null (0.98)**, on a provenance-repaired
  (2018) trial whose authors say generalization to lower-risk people *"requires further research"*, and
  pooled RCTs are null except diabetes -> [[Mediterranean Diet and Cardiovascular Events]]. It is a
  multi-component pattern in high-risk people, not a high-certainty lever for the low-risk individual —
  so it bounds the claim without overturning it.

**The sharpening the fabric adds to the doubt's *big* levers — each is real, and each carries an
evidence-type asterisk the doubt's framing omits:**

- **Movement** is the largest association the vault holds (HR \~0.34 self-report, \~0.27 device) but it is
  **observational — structurally unprovable by RCT** for hard CV events; a predictor of large effect, not
  a proven-by-trial one -> [[Physical Activity Dose and Mortality]], [[Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People]].
- **Muscle / grip strength** is a **predictor, not a proven treatment target**: grip is *"a number to
  MEASURE (it places you in a stratum), not a number to STEER toward"*; that training it lowers mortality
  is not established -> [[Grip Strength and Mortality]], [[Low Muscle Mass and Mortality]].
- **Visceral / ectopic fat loss** is outcome-specific: **proven** for T2D remission (DiRECT 46%), MASLD
  regression, and all-cause mortality (Ma 54-RCT RR 0.82, *"not routed through the heart"*), but the
  **hard-CV-event benefit by the lifestyle route is unproven** (Look AHEAD HR 0.95; Ma CV events RR 0.93
  null). *"Pursue fat loss for the outcomes it demonstrably moves... do not count on a lifestyle-route
  reduction in heart attacks"* -> [[Body Fat]], [[Does Weight Loss Reduce Cardiovascular Events]].
- **Dyslipidaemia** is where the fabric most corrects the framing: the high-certainty, mortality-moving,
  high-impact lever is **pharmacological**, not dietary. Statin LDL-lowering per 1.0 mmol/L: major
  vascular events RR 0.78, all-cause mortality RR 0.90 — but the fabric firewalls it, *"the magnitude does
  not transfer to a dietary LDL-C change"* -> [[LDL Lowering and Cardiovascular Events]], [[LDL ApoB and Cumulative Exposure]].
  Naming dyslipidaemia among lifestyle levers conflates a real, large, high-certainty target with a
  route (diet) that reaches it only weakly.

**The decision-change.** This licenses someone to **stop hunting for a magic dietary-composition lever** —
there is no large, high-certainty, hard-outcome one for a low-risk individual, and the fabric says so
across a dozen pages. Redirect instead: the large *dietary* lever is **energy quantity -> adiposity**,
cashed on metabolic and all-cause outcomes rather than heart-attacks-avoided; movement is the largest
*behavioural* lever (evidence-type-limited); not-smoking dominates wherever present; and if hard-ASCVD
prevention at *elevated* baseline risk is the goal, the high-certainty high-impact lever is
**apoB-lowering, whose proven instantiation is a drug** — a layer-3/prescriber act the wiki appraises but
does not prescribe.

**Honest posture — this is agreement, not divergence.** Under the telos's symmetric-standards rule a
*confirmed* convention is as reportable as a refuted one, and manufacturing an overturning here would be
the bias the rule exists to catch. The value added is configurative (the composition/quantity split; the
per-lever certainty-type asterisk), not a new magnitude — the doubt was right, the fabric held it, and
this section states it once instead of leaving it distributed.




## Tiering a lever: the association is not the tier `[2026-08-17, Challenge]`

The public bands (big rock / medium stone / small pebble) are this page's *effect x certainty* ranking made
legible, and a lever's band is not read off its **headline relative association** — it is
*absolute effect at the person's baseline risk, discounted by certainty*. Two levers a maintainer
questioned show the two ways that distinction bites, and they resolve in **opposite** directions.

- **Plant foods is a MEDIUM lever, not a big rock — and no stratum rescues it.** Its large-looking numbers
  are **observational associations** (fruit/veg all-cause mortality RR \~0.90 per 200 g/day
  -> [[Fruit and Vegetable Intake and Health]]; fibre CHD RR 0.76 -> [[Dietary Fibre and Health]]) whose
  **causal core is small** — the trialled fibre mechanism is transmission-bounded to a <4% CHD reduction
  (challenge #R40). The evidence is observational *everywhere* (no whole-food RCT to a hard outcome), so
  there is no baseline stratum at which it becomes large-and-certain. Every owning page already tiers it
  there — *"a real but modest supporting lever, not a big rock"* -> [[Fibre]]; *"for most people
  this is a small lever"* -> [[Plant Foods]] — and [[Big Rocks (Median)]] omits it from its big-rock
  buckets entirely.
- **Blood pressure is a BIG rock CONDITIONALLY — Big for an elevated-BP/high-risk person, Medium-to-Pebble
  for a normotensive.** Unlike plant foods it carries a **proven** hard-outcome transmission that reaches
  primary prevention: 5 mmHg systolic -> \~10% fewer major CV events (BPLTTC, HIGH), so route-(a) baseline
  scaling makes the *same* millimetres a large absolute gain at high risk and a small one at low. The
  owning deliverable already holds this as a two-column tier table keyed to baseline risk, governed by
  *"rank on absolute risk, not the BP number"* -> [[Blood Pressure]]. Its *dietary* levers (sodium, DASH,
  potassium) are Medium; the big-rock instantiation is the drug route plus weight loss — which is why
  [[Sodium Intake and Blood Pressure]] tiers below the integrator it feeds.

**The discriminator, stated once.** A large **association** with a small or unproven **causal transmission**
tiers Medium and cannot be promoted by baseline risk (plant foods); a lever with a **proven** transmission
tiers by the person's baseline risk and so is **stratum-conditional** (blood pressure). Reading a headline
RR as a tier is the same unit-of-analysis error as reading a population-attributable rank as an individual
benefit (the prevalence-wedge section above) — one level down, at the individual lever.



## The cross-domain superset arrives — and diet is no longer the #1 population risk `[2026-08-26, GBD-87]`

Every GBD section above is the *diet-only* slice (Afshin 2019, `Knudsen et al. 2025` via NNR). **GBD-87
is the whole-telos superset**: the same instrument run across **87 environmental, occupational,
behavioural, and metabolic risk factors** — the full cross-domain big-rocks ordering that no diet-only
source can produce. In 2019 those 87 risks jointly account for **47.8% (95% UI 45.3-50.1) of global
DALYs** [@gbd2020rf].

**The Level-2 attributable-DEATH ranking, both sexes, 2019:**

> «For both sexes combined, the leading Level 2 risk factor for deaths was high SBP, accounting for 10·8
> million (9·51--12·1) deaths in 2019 (19·2% [16·9--21·3] of all deaths that year), followed by tobacco,
> with 8·71 million (8·12--9·31) deaths (15·4% [14·6--16·2] of all deaths that year).»
> [@gbd2020rf]

Dietary risks rank **third** — female diet deaths 3.48 million (rank 2 in females), male 4.47 million
(rank 3 in males, explicitly *below* both tobacco and high SBP), summing to \~7.9 million both-sexes,
under tobacco's 8.71 million. [@gbd2020rf]
[inferred from @gbd2020rf]

**This SUPERSEDES the Afshin headline this page reconciled above** — *«suboptimal diet is responsible
for more deaths than any other risks globally, including tobacco smoking»*. That claim used **GBD 2017
data** (11 million diet deaths, diet ranked #1); GBD-87 uses **GBD 2019 data** and ranks diet third,
behind high SBP and tobacco. This is a genuine same-quantity refinement, not the population/individual
wedge — the parameter table returns YES:

| | Afshin (GBD 2017 data) | GBD-87 (GBD 2019 data) | Same quantity? |
|---|---|---|---|
| Metric | GBD Level-2 attributable deaths, global, both sexes | GBD Level-2 attributable deaths, global, both sexes | **YES** |
| Diet deaths | **11 million — ranked #1, above tobacco** | **\~7.9 million — ranked 3rd, below tobacco (8.71M) and high SBP (10.8M)** | YES |

**The reordering is mostly METHOD, not real-world trend — which is the finding.** GBD-87's own
discussion states the diet burden was revised **downward** between its two cycles on methodology alone:

> «Compared with GBD 2017, our GBD 2019 estimates of the burden (as measured by percentage of total
> DALYs) attributable to diet quality in 2017 were 29·7% lower.»
> [@gbd2020rf]

> «These reductions stem from three major sources: changes in the crosswalks between alternative and
> reference methods for estimating diet intake, new systematic reviews and meta-regressions, and more
> empirical standardised methods for selecting the TMREL for protective factors.»
> [@gbd2020rf]

So the same consortium cut its own diet-burden estimate by \~30% **on modelling choices** (intake
crosswalks, new meta-regressions, a re-derived optimum for protective factors), and that revision — not
a change in how people eat — is most of why diet fell from first to third. **This is the concrete
demonstration of the caution the earlier GBD sections asserted:** a population attributable-burden
ranking is model-version-sensitive, and its headline order can flip on the estimating body's own
methodology between cycles. It is a **type-F refinement of the same instrument, NOT independent-E** (one
consortium updating itself; no independent route corroborates it).

**What the superset CONFIRMS — big rocks first, at population scale.** The cross-domain death ranking is
dominated by a handful of exposures — high SBP, tobacco, dietary risks, air pollution, high FPG, high
BMI — and the *rising* ones are metabolic:

> «Many of the increasing risks are metabolic risk factors; in fact, taken together, the exposure to
> metabolic risks increased 1·37% per year (95% UI 1·17--1·56) from 1990 to 2019 and 1·46% per year
> (1·26--1·69) from 2010 to 2019.»
> [@gbd2020rf]

The metabolic cluster (SBP, FPG, BMI, LDL) plus tobacco is exactly the big-rock set the telos names, and
GBD-87 places it at the top of the population burden from a source with no stake in the wiki's framing.
It also demonstrates **stratum(age)-dependence** rather than asserting it — the leading risk *moves by
age band*: «Iron deficiency was the leading risk factor for those aged 10--24 years, alcohol use for
those aged 25--49 years, and high systolic blood pressure for those aged 50--74 years and 75 years and
older.» [@gbd2020rf] — the same *"the hierarchy is
stratum-dependent, not a fixed list"* point the red-meat-rank-by-country instance made, now on the age
axis.

**What is UNCHANGED — the population/individual wedge still governs, and the binding gap is untouched.**
GBD-87 reports *attributable burden*, not *individual expected benefit*; the prevalence-wedge parameter
table from the NNR/Afshin sections above applies to every number here unaltered. And the magnitude
caveat is if anything sharper for the superset: GBD's relative risks are **borrowed, modelled
estimates**, not primary effect sizes —

> «(2) Relative risks were estimated as a function of exposure based on published systematic reviews, 81
> systematic reviews done for GBD 2019, and meta-regression.»
> [@gbd2020rf]

— so an attributable-burden rank is **never** citable for a per-person effect; the underlying SR is. The
joint burden further rests on a **multiplicative-RR assumption** with only partial mediation correction
(non-mediated RRs multiplied; super-multiplicative synergy not captured), and GBD names its own binding
constraint as *the availability and quality of the primary data*. **None of this supplies the absolute
per-person effect at a stratum baseline risk that this page's ranked table still lacks** — GBD-87
broadens the population instrument across all domains without moving the individual-ranking gap an inch.

**One cross-link worth flagging:** GBD-87 relaxed the log-linear RR assumption for diet, kidney
dysfunction and air pollution and found *«the relative risk functions tend to flatten out at higher
exposure levels; the previous practice of imposing a log-linear functional form on the risk
equation... might have led to overestimation»* [@gbd2020rf] — a directional corroboration, from an independent modelling exercise, of the fabric's
plateau/knee thread (that protective curves flatten and a hidden plateau means over-shooting merely
fails to help). GBD then set the protective-factor TMREL to the **85th percentile of studied intake**
[@gbd2020rf] —
i.e. the apparent optimum tracks the sampling edge, the exact caution of [[The Underivable Optimum]]
(and the measurement-error driver behind it -> [[Measurement Error in Dietary Assessment]]).
[inferred from @gbd2020rf]

## References

---
type: concept
question: When can this domain's evidence identify an OPTIMAL dose of an exposure, versus only a floor, a range, a direction, or a harm-ceiling?
aliases: [Underivable Optimum, No Optimum, Floors and Ranges Not Optima, Ranges Not Optima, Why Health Evidence Satisfices, Optimum Not Derivable, Satisficing vs Optimizing]
authors: []
sources: []
cluster: inference-pitfalls
confidence: medium
created: 2026-08-06
updated: 2026-08-13
self_critiqued: 2026-08-13
relationships:
  related_to:
    - The Estimate-to-Action Gap
    - Measurement Error in Dietary Assessment
    - The U-Shaped Association Artifact
    - Nut Consumption and Mortality
    - Deficiency Repletion vs Enhancement
    - Surrogate Outcomes
    - Layer 1 - Ranking Interventions for a Stratum
    - Protein Intake During Energy Restriction
---

 — this page is the wiki's own epistemology. It carries no source attributions: every claim
is the fabric's reasoning over method rules (the telos's dose-response section) and already-held concept
pages cited by `wikilink`. Like [[The Estimate-to-Action Gap]], `sources: []` is legitimate here.

**In this domain, the evidence structurally yields floors, ranges, directions, and harm-ceilings — but
not a point OPTIMUM.** A study can show *below here is deficiency*, *this arm beat that arm*, *more in
this range still helps*, *past here it harms* — but it essentially cannot demonstrate *this exact intake
is best*. The claim is **epistemic** (an optimum is not *derivable*), not biological (not *there is no
best dose*). Three distinct structural routes each terminate in *no observed peak*, and they converge on
one honest output: **name a data-supported range or direction bounded by a floor and a harm-ceiling, and
disclaim the point-optimum.** No single method rule or concept page states this; it is induced across
them.

## Three routes to *no peak* — each holds for a different reason

**Routes 2 and 3 are the two genuinely independent legs** — each fails to yield an optimum *even if the
other did not hold*, and neither needs the curve to be flat, so the principle does not rest on any one
shape claim. Route 2 (the peak is beyond the sampled range) holds even under **perfect** measurement;
Route 3 (noise smears a point into a band) holds even for a curve with a real interior peak. **Route 1
is a demoted third** — it fires only where a flat region is actually observed, and an observed flat top
is often itself downstream of Route 3 (below), so it leans on the other two rather than standing beside
them. The honest count is **two independent routes plus one weak, largely-Route-3-downstream add-on** —
not three co-equal legs.

### Route 3 (the master driver) — measurement noise yields both broad ranges AND nulls

Dietary exposure is measured by asking people, and the error is the domain's binding constraint
-> [[Measurement Error in Dietary Assessment]]. It is **one cause with two effects**: regression
dilution attenuates the slope *toward* the null (a real gradient reads as no gradient), and imprecision
*widens* the interval (a point reads as a broad range). So the same instrument that hides an effect also
smears whatever survives into a band — you cannot read an optimum off a band. Compound many noisy
exposures (a whole diet is many nutrient effects at once) and the uncertainties propagate: the aggregate
is broader and more null-straddling still.

- **Precisify it correctly.** This is **not** random error that averages to a clean normal as n grows —
  that would *buy* precision. It is **systematic error that does not average out** (differential
  under-reporting, the flat-slope syndrome compressing the exposure range, correlated validation error),
  an irreducible noise floor no sample size overcomes — which is exactly why mega-cohorts still return
  broad, null-tending nutrition results.
- **Guard — *pull to null* is the central tendency, not a theorem.** Non-differential error biases toward
  the null only *in the univariate, unconfounded case*; with imperfectly-measured covariates the bias
  runs **in any direction**, and differential error can inflate or reverse an effect
  -> [[Measurement Error in Dietary Assessment]]. So: tends-to-broad-and-null, with real exceptions — not
  a law that everything collapses to zero.

### Route 2 (the cleanest case) — a monotone effect has no observed peak at all

For an effect still *rising at the edge of the observed data* (fibre, sodium and free sugars are each
monotone over their studied range — the falsified knees-and-plateaus audit, below), the apparent
*optimum* is simply the **top of the sampled range** — set by the study's often-arbitrary cut-off, not
by the curve. A different study with a slightly different cut-off would report a different *optimum*, and
you cannot extrapolate above the data. This **generalizes a held rule** — *where a threshold appears in
guidance, the first hypothesis is that it marks the edge of the evidence, not a feature of the curve*
(SACN's 30 g fibre is where the confidence intervals widen, not where returns flatten) — lifting it from
the *deficiency threshold* to the *upper bound*: same error, the study boundary mistaken for a target
.

- **Do NOT import a harm-ceiling or a diminishing return here.** Both are *by definition absent* from a
  monotone effect (if you had observed one, the effect would not be monotone). The honest output for the
  pure monotone case is therefore the barest of all: **a direction, open-topped within the data, with no
  evidenced stopping point** — not an optimum, and not even a bounded range. This is the cleanest
  no-optimum case: the peak is not indistinct, it is simply *beyond the data horizon*, unobserved and
  possibly non-existent.

### Route 1 (the weakest, held conditionally) — on a genuinely flat region the optimum is vacuous

Where a curve reaches a genuine plateau — muscle-protein synthesis flattens above a breakpoint estimated
at 1.62 g/kg/day — no point *on the plateau* is a peak: past the knee, more buys nothing, so every
adequate intake is equivalent and *optimum* is near-vacuous rather than merely unmeasured. The flat
region is therefore itself the *optimum*, which **generalizes** the telos's *a minimum effective dose is
a region, not a number* and *flat regions tolerate imprecision cheaply* from the minimum-effective-dose
to the *optimum*: a flat-topped optimum simply IS a region -> [[The Estimate-to-Action Gap]] (the
*region, not a point* step). Two cautions keep this honest: the breakpoint's own **location is
uncertain** (95% CI 1.03-2.20) — that interval is on *where the knee sits*, not the width of the flat
band, so it is not itself the plateau; and the plateau is **open-topped**, bounded above only by the
harm-ceiling or a logistical cap, not by an optimum.

- **The bare target *aim for 1.62* is borderline-false, and fails in three distinct ways**.
  Stated as a point it launders a barely-identified knee into a precise target — it (i) **asserts an
  identification precision the CI denies**: the true knee could sit anywhere in 1.03-2.20, either side of
  1.62, so a hard *1.6* reads as a certainty the meta-regression does not carry; and (ii) **silently drops
  the rising left arm** — below the (uncertain) breakpoint more protein still helps, so if the true knee
  sits nearer 2.2 a person told *1.6* is under-dosed and forfeits the objective -> [[Protein and Resistance Training for Muscle and Strength]]
  (which already says *hold the number loosely* and biases UP to 1.8-2.2 for hypertrophy for exactly this
  reason). And (iii) **it trusts a centre and an interval the estimator itself cannot deliver** — a level
  deeper than (i)-(ii), which still take 1.03-2.20 at face value. A break-point is a *non-regular*
  parameter (it indexes which observations fall on which side of the knee — a discrete, non-smooth
  feature), and *precisely there* the normal approximation is least safe: this is not *the CI is worthless*
  (the CLT earns normality for *regular* estimators at adequate n), it is that a changepoint's sampling
  distribution is routinely skewed, sometimes multimodal, and its standard-error interval *mis-covers* (its
  coverage is not the nominal 95%). Two consequences follow. The reported point 1.62 is the *mode* of the
  likelihood, which coincides with the mean/median *only under symmetry* — and 1.62 is essentially the CI
  *midpoint* (mean of 1.03 and 2.20 = 1.615), so *aim for 1.62* just collapses the interval to a summary
  warranted only under that symmetry (Decision relevance, below). And the tell sits on the page: 1.62
  (1.03, 2.20) is near-symmetric (0.59 below, 0.58 above) — the signature, most plausibly, of an
  *estimate +/- 1.96 x SE* normal-theory interval, strongly suggesting symmetry was assumed in rather than
  found (near-symmetry is only *consistent with* Wald — a profile-likelihood or bootstrap CI could be
  near-symmetric too, and 0.59 vs 0.58 is symmetric only to rounding — not proof of it). So the neatness is
  *not* reassurance: this apparently-Wald CI is probably mis-shaped and its centre not a trustworthy target.
  The honest object is the **region with its CI** — whose tidy symmetry is itself no evidence of tight
  identification — not the point.

- **The flagship plateau is mechanism-grounded, NOT statistically established — how thin an *observed*
  plateau is in this domain**. Morton's 1.62 knee — this page's worked *genuine plateau* —
  rests on the acute-MPS-saturation mechanism plus a biphasic (knee+plateau) fit that was **not
  significant** (p=0.079, R2=0.19); and on the *baseline*-intake axis a linear (monotone) regression
  explained significantly more variance than the biphasic one
  -> [[Protein and Resistance Training for Muscle and Strength]]. So even the corpus's best-motivated
  plateau is a mechanism-supported knee, not a demonstrated one — and on one axis the data significantly
  *prefer* a straight line (Route 2), which is why Route 1 leans on the others rather than standing
  beside them. (A per-*total-body-mass* target is also off-support for a body composition Morton never
  sampled — no BMI/body-fat reported, energy-restricted and obese cohorts excluded — the studied-range
  boundary binding a *covariate*, not just the dose axis; full treatment on the protein page.)
  - **A second, independent lab reaches the same monotone-not-knee on the protein curve — Route 2, not
    Route 1.** Refalo 2025's meta-regression of the *energy-deficit* protein->FFM relationship found a
    **linear** model beat quadratic and cubic (97% probability monotone-positive; no knee, no plateau
    over the analyzed 0.8-3.2 g/kgBM range) -> [[Protein Intake During Energy Restriction]]. Different lab
    (Deakin/AUT vs Phillips' McMaster), different population (deficit vs energy balance), no shared
    author, so this is a genuine `[E-independent]` corroboration that the protein curve is *monotone over
    the studied range* rather than plateaued — strengthening the demotion of Route 1: even the domain's
    flagship candidate plateau reads as an open-topped monotone line once a second lab looks. Its
    ES-zero crossings (1.9 g/kgBM, 2.5 g/kgFFM) are exactly Route-2 sampling-edge artifacts to read as a
    floor + direction, never a peak. [inferred from @refalo2025]
  - **A THIRD analysis puts the inflection somewhere ELSE — the knee is population- and
    estimator-dependent, so there is no single quantity to be *off* about.** Tagawa 2020 (Miyachi lab, no
    Morton/Refalo author) pooled 138 RT+non-RT trials and put the general-population diminishing-returns
    inflection at **1.3 g/kg BW/d** via a multivariate-adjusted spline — yet that spline stayed positively
    correlated with LBM across the whole 0.5-3.5 g/kg range (monotone, no plateau), and
    its RT subgroup kept rising past 1.3 (verbatim quotes on the protein page). (Not clean independence of Morton — Tagawa cites Morton
    and shares RT trials; the independence is real only for its without-RT leg — so read this as
    population-dependence, not a third vote.) Across Morton (RT \~1.6/absent), Tagawa (mixed \~1.3), and
    Refalo (deficit, monotone-no-knee) the inflection moves with *population and estimator* and no analysis
    locates a true plateau. That is the underivability: not a numeric disagreement about one quantity, but
    the absence of a single quantity to derive -> [[Protein and Resistance Training for Muscle and Strength]].
    [inferred from @tagawa2020]

- **Guard — this route is DEMOTED, and must not rest on *plateaus everywhere*.** The knees-and-plateaus
  prior was **falsified** on the corpus (fibre/sodium/sugar are monotone over the studied range; objective
  activity shows no plateau), so flatness is *not* the general shape — route 1 fires only where a flat
  region is actually observed. Worse, an observed flat top is often **downstream of route 3**, not an
  independent biological fact: measurement error's flat-slope compression *erases* a knee but never
  manufactures one -> [[Measurement Error in Dietary Assessment]], so a *measured* plateau is weak
  evidence of a *true* one. Route 1 is real where a curve is genuinely flat, but it carries the least
  weight and leans on the other two.
  - **A worked FOOD instance of both halves of the guard — nuts -> mortality `[2026-08-13]`.** Aune 2016's
    nut dose-response is genuinely *observed* to flatten at \~15-20 g/day for CHD/CVD/all-cause (a real
    Route-1 plateau, unlike fibre/sodium/sugar) -> [[Nut Consumption and Mortality]] — a second observed
    plateau to set beside ESC fruit/veg, so the falsification's demotion (not its reversal) is what
    nuts support. But it is FFQ-measured, so the flat top is exactly the *Route-3-downstream* case: the
    measured plateau is weak evidence of a true one. And it carries the **boundary-as-target launder in the
    wild** — Aune names 20 g/day «the optimal intake» *because* returns flatten there, i.e. a knee-region
    relabelled a point-optimum. Read it as a floor-for-most-of-the-benefit with its studied range, never a
    target.

## What survives — BOUNDED, not nihilism

*No point-optimum* is not *no knowledge*. Up to three things stay demonstrable, and all are actionable —
**but WHICH of them a given exposure yields depends on its curve**: a bounded nutrient-status curve can
show all three, whereas a monotone exposure (Route 2) yields a floor and a direction but **no observed
ceiling** at all. Do not assert the full triad by default:

- **The FLOOR** — a deficiency/requirement threshold, below which harm is real (the demonstrated lower
  arm on [[Deficiency Repletion vs Enhancement]]: repleting the deficient moves hard outcomes).
- **The within-range DIRECTION** — *more (or less) in the studied range still helps*, an evidence-indexed
  directional claim (every-reduction-pays for free sugars; reduce sodium across the typical range).
- **The harm-CEILING** — an upper bound past which the exposure harms (the RCT-demonstrated upper arm on
  [[Deficiency Repletion vs Enhancement]]: antioxidant/beta-carotene mortality and cancer).

Only the **point-optimum** and the **boundary-as-target** are disclaimed. For the exposures that DO have
both bounds, the recommendation apparatus mirrors this exactly — RDA + UL is a **floor and a ceiling,
never an *optimal intake***. Where both bounds exist they are the STEEP, well-identified ends of a
bounded net curve, and the flat interior between them is where noise and net-effect dominate and
identification fails; a monotone exposure has only the floor end identified.

## The domain bound — clean measurement ESCAPES the noise floor

This principle is scoped to the **self-reported / free-living / whole-diet** subdomain — the streetlight's
dark half. Where the exposure is measured **cleanly**, the range narrows and a real effect (even a
near-optimal target) becomes identifiable:

- a **recovery biomarker** (urinary sodium -> absolute 24-h intake -> the tight sodium/BP slope),
- **Mendelian randomization** (a genetic instrument free of the reporting error),
- **controlled feeding** (the exposure is delivered, not recalled).

This is precisely **why the fabric up-weights MR, trials and biomarkers** — they buy back the
identification that self-report loses. The escape is itself gated (a biomarker tracks intake only where
the body does not regulate or synthesise the analyte -> [[Measurement Error in Dietary Assessment]]), so
it is available for some exposures and not others. Naming the bound keeps the principle from hardening
into a blanket *nutrition can never be precise* — LDL->CVD and sodium->BP are the standing
counter-examples.

## The is/ought line — *satisfice* is a posture, not a finding

*The optimum is not derivable* is **epistemic**. *Therefore satisfice — clear the floor, avoid the
ceiling, move in the evidenced direction, and stop* is a **decision posture** adopted under that limit:
reasonable, but a step from is to ought that the evidence does not itself prescribe. It must not be
smuggled back as though the data mandated it (the same error the fabric flags as the
descriptive->normative category error -> [[The Descriptive-Normative Category Error]]). The wiki states
the epistemic limit; the choice to satisfice under it, and how much of the range to occupy, is weighed at
Layer 3 with the person's costs and preferences.

## One distinction that must not blur — allocation vs dose

The fabric does **not** stop optimizing. It **optimizes ALLOCATION** — Layer 1 ranks levers by effect
size x certainty and spends attention on the largest remediable gap
-> [[Layer 1 - Ranking Interventions for a Stratum]]. It **satisfices DOSE** — per lever, clear the floor
and stay in the range rather than chase a point-optimum this domain cannot locate. *Satisfice* is a claim
about the **dose**, never about where to spend attention.

## Relation to the neighbours (distinct decisions, not restatement)

- **[[The Estimate-to-Action Gap]]** (this cluster's nucleus) governs Layer-2->3: *given* a parameter,
  how do you transform it into a decision (its first step is *region, not a point*). **This page is one
  level upstream** — it explains *why the parameter is a range/direction and not a point in the first
  place*, systematically, in this domain, and where that fails (the clean-measurement escape). The gap
  page consumes what this page explains.
- **[[The U-Shaped Association Artifact]]** is the specific case where the *harm-ceiling* arm of an
  observational curve may itself be an artifact — a reason even a bounding arm can be untrustworthy.
- **[[Deficiency Repletion vs Enhancement]]** is the seed instance: the floor (repletion) is demonstrable
  and the ceiling (enhancement-to-harm) is demonstrable, but the flat replete middle yields nothing to
  optimize toward — this principle read on one nutrient's status-dependent curve.

## Decision relevance

- **Read an apparent optimum or threshold as a study-boundary artifact until shown otherwise.** The first
  hypothesis for any *best intake* or *cutpoint* is that it marks the edge of the evidence (or the middle
  of a noise band), not a curve feature. Ask which route produced it before treating it as a target.
- **State the honest object: a floor, a direction, a ceiling — not a number.** Where the exposure is
  cleanly measured, a narrow identified target is legitimate; say which regime you are in.
- **Never cite a threshold/target bare — carry its two load-bearing facts.** A single number silently
  drops exactly the two things the routes above say it cannot own: its **confidence interval**
  (identification uncertainty — how far the true value could sit from the estimate, driven by sampling and
  heterogeneity and, in this domain dominantly, the Route-3 measurement noise) and its **studied range**
  (extrapolation boundary — Route 2, above which there is no data). A bare figure launders a point-estimate
  or a study-edge into a target; *1.62 g/kg, CI 1.03-2.20, studied to \~2.2 g/kg* carries the decision,
  a bare *1.6 g/kg* does not. And a carried CI is necessary but not self-certifying: a symmetric
  standard-error interval on a *non-regular* parameter (a break-point / changepoint) *mis-covers* (its
  coverage is not the nominal 95%), so its tidy symmetry is no proof of tight identification — carry the
  interval, but do not read its neatness as reassurance (Route 1's 1.62 (1.03, 2.20) is the worked case).
  Where the exposure is cleanly measured the CI may legitimately be tight — that is a reason to *report* it
  narrow, never a licence to omit it.
- **Do not collapse a CI to its midpoint.** The midpoint of an interval is a privileged summary *only under
  symmetry* — exactly the property a non-regular break-point estimator may lack (Route 1 (iii)). So *aim
  for 1.62* is not a neutral default: 1.62 \~ mean(1.03, 2.20), i.e. it silently picks the CI midpoint and
  thereby inherits (iii)'s defect. The tell that the midpoint is not automatically right: for a bounded
  safety quantity — say an arsenic exposure limit with CI (a, b) — nobody would set the limit at the
  midpoint. *Which* summary to pick instead is not settled here — that is a loss-function question weighed
  at Layer 3 -> the is/ought section above; the identification point is only that the midpoint is a choice,
  not the estimate.
- **This is an open loop.** Nothing here grades a chosen dose against a realized outcome; the wiki
  verifies only the *would*-form (would a well-informed advisor decline to name a point-optimum on this
  evidence?), never that a person was better off for satisficing.

## References

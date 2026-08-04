---
type: framework
question: Do dietary omega-6 linoleic acid (the main fat in bottled seed oils) and its metabolite arachidonic acid raise or lower cardiovascular risk?
aliases: [Seed Oils, Seed Oil, Vegetable Oils, Omega-6, Omega-6 Fatty Acids, n-6 PUFA, Linoleic Acid, LA, Arachidonic Acid, AA, Omega-6 and Cardiovascular Disease]
authors: [Marklund, Matti; Lemaitre, Rozenn N; Mozaffarian, Dariush; Riserus, Ulf; Hooper, Lee; Al-Khudairy, Lena; Abdelhamid, Asmaa S; Li, Jun; Guasch-Ferre, Marta; Li, Yanping; Hu, Frank B; Johnson, Guy H; Fritsche, Kevin; Hamley, Steven]
sources: [Marklund - Omega-6 Biomarkers Cardiovascular 2019, Hooper - Omega-6 Fats Cardiovascular Cochrane 2018, Li - Linoleic Acid Mortality Meta-Analysis 2020, Johnson - Linoleic Acid Inflammation Review 2012, Hamley - Saturated Fat PUFA Coronary 2017]
cluster: dietary-fat
confidence: low
relationships:
  related_to:
    - Saturated Fat Intake and Replacement
    - Measurement Error in Dietary Assessment
    - Surrogate Outcomes
    - Upgrading Observational Evidence
    - LDL ApoB and Cumulative Exposure
    - The U-Shaped Association Artifact
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
created: 2026-08-04
updated: 2026-08-04
self_critiqued: 2026-08-04
---

**Domain opener — the pro-LA biomarker pole of the seed-oils question.** Linoleic acid (LA, 18:2n-6)
is the major omega-6 PUFA and the dominant fat in bottled seed oils (soybean, corn, sunflower,
safflower). The lay *seed-oils-are-inflammatory / drive-heart-disease* claim runs through omega-6:
LA is the precursor of arachidonic acid (AA), whose eicosanoids are cast as proinflammatory and
prothrombotic. This page holds four evidence arms that **contest** that harm claim: an **observational biomarker
pool** (Marklund — clear benefit, CVD), the **RCT arm** (Hooper 2018 Cochrane — little-or-no-effect to
uncertain, more equivocal), a **mortality-outcome SR+MA** (Li 2020 — dietary + biomarker LA lower
*all-cause, CVD and cancer* mortality; observational, and overlapping Marklund's cohorts, so a
refinement not an independent check — see *The mortality outcome menu*), and the **direct
inflammation-mechanism test** (Johnson 2012 — RCT SR: feeding LA does not raise inflammatory markers,
refuting the harm pathway on its own endpoint — see *The inflammation surrogate, tested directly*).
None shows the predicted harm;
the observational and RCT arms disagree on the *strength* of benefit, which is a design-difference
refinement, not a filed tension (see *The RCT arm*). The recovered-RCT contrarian pole (Ramsden's Minnesota/Sydney reanalyses) is still not
directly ingested — but Hooper already pools those trials to a null (see below). A facet of the
`dietary-fat` cluster, linking up to [[Saturated Fat Intake and Replacement]] (LA is *the* PUFA in the
SFA->PUFA replacement question).

[@marklund2019, Abstract; Background]

## The effect estimate — objective biomarker, hard outcomes

FORCE-consortium **individual-level pooled analysis** of **30 prospective cohorts, 13 countries,
68 659 participants, 15 198 CV events**, follow-up medians 2.5-31.9 y. Exposure is the *in vivo*
circulating or adipose-tissue LA level (% of total fatty acids) — an objective biomarker, not
self-reported intake. Effect is stated **per interquintile range** (the 10th-to-90th-percentile span
of LA status), pooled by inverse-variance meta-analysis.

| Outcome | HR per interquintile range (95% CI) | Direction |
|---|---|---|
| Total CVD | **0.93 (0.88-0.99)** | lower risk (7% per IQR) |
| CVD mortality | **0.78 (0.70-0.85)** | lower risk (22% per IQR) |
| Ischemic stroke | **0.88 (0.79-0.98)** | lower risk (12% per IQR) |
| Total CHD | 0.94 (0.88-1.00) | lower, non-significant (P=0.065) |
| AA — total CVD | 0.95 (0.90-1.01) | non-significant; NOT elevated |

[@marklund2019, Table 2; Results]

- **Categorical (quintile) confirmation:** highest vs lowest LA quintile, CVD mortality **HR 0.77
  (0.69-0.86)**; the linear and categorical readings agree, and **no nonlinearity** was detected
  (P-nonlinearity >0.05 each) — a monotone gradient over the studied range, not a U or a plateau ->
  [[The U-Shaped Association Artifact]]. [@marklund2019, Results]
- **Absolute magnitude is not cleanly derivable here.** The pooled analysis reports relative hazards
  per IQR against a distributional contrast, not a single control event rate per 1000, so an absolute
  per-1000 translation (as WHO Annex 6 gives for SFA) would require importing a baseline the source
  does not supply. The IQR framing itself resists a per-serving dose statement: it is a status-span,
  not an intake dose. [inferred from @marklund2019]
- **No consistent effect modification.** Associations did not differ by age, sex, race, n-3 level,
  diabetes, statin or aspirin use (Bonferroni-corrected). So this is a **route-(a)** exposure —
  absolute benefit scales with baseline risk, not a claimed effect-modifier — with one exception: the
  LA-stroke inverse association was stronger in FADS1 rs174547 T-allele carriers (P-interaction 0.002),
  which the authors flag as pleiotropic and *«should therefore be viewed cautiously.»*
  [@marklund2019, Results; Discussion]

## The RCT arm — Hooper 2018 Cochrane, and it is more equivocal `[2026-08-04]`

The `[AWAITS]` is now cashed. Hooper's Cochrane review is **the RCT test of the same question**:
**19 RCTs, 6461 participants, 1-8 years**, of *increasing* omega-6 fats (12 trials LA, 7 GLA, none
DGLA/AA; omega-6 usually displacing SFA or MUFA), only **3 at low risk of bias**, GRADE-rated (WHO NUGAG
co-graded). Where Marklund's biomarker pool finds a clear benefit, the RCTs find **little or no effect
to uncertain**:

| Outcome | Hooper RCT — RR (95% CI) | Certainty | Evidence state |
|---|---|---|---|
| All-cause mortality | 1.00 (0.88-1.12) | **Low** | little or no effect |
| CVD events (any) | 0.97 (0.81-1.15) | **Low** | little or no effect |
| CVD mortality | 1.09 (0.76-1.55) | **Very low** | uncertain (insufficient) |
| CHD events | 0.88 (0.66-1.17) | **Very low** | uncertain (insufficient) |
| Stroke | 1.36 (0.45-4.11) | **Very low** | uncertain (insufficient) |
| **MI** | **0.88 (0.76-1.02)** | **Low** | *may reduce* — NNTB 53 |
| **Serum total cholesterol** | MD **-0.33 mmol/L (-0.50 to -0.16)** | **High** | reduces (dose-related) |

[@hooper2018, Summary of findings 1 and 2]

> «We found no evidence that increasing omega-6 fats reduces cardiovascular outcomes other than MI,
> where 53 people may need to increase omega-6 fat intake to prevent 1 person from experiencing MI.
> Although benefits of omega-6 fats remain to be proven, increasing omega-6 fats may be of benefit in
> people at high risk of MI.»
> [@hooper2018, Authors' conclusions]

**Four evidence states, named precisely (the whole point of the distinction).** Increasing omega-6 is
**little-or-no-effect** on all-cause mortality and CVD events — *at Low certainty*, which is neither a
confidently-demonstrated null nor "insufficient evidence." It is **insufficient (uncertain)** on CVD
mortality, CHD events and stroke — Very low certainty, wide intervals. It is a **probable small benefit**
on MI (Low) and a **definite benefit** on serum total cholesterol (High). So the honest RCT-side reading
is: *not shown to reduce hard CVD or death, probably lowers MI a little, certainly lowers cholesterol.*

**The seed-oil-*harm* thesis also fails on the RCT side (symmetric standards).** A reader hunting harm
will note the point estimates >1 — CVD mortality 1.09, stroke 1.36 — but both are **Very low** certainty
on tiny event counts (472 CVD deaths; **54 strokes**, CI 0.45-4.11 spanning large benefit and large
harm). Hooper states the inflammation route only as the untested counter-hypothesis (*«omega-6 fats may
theoretically worsen cardiovascular risk»*). So the RCTs neither confirm the observational *benefit* nor
the mechanistic *harm* on hard outcomes — they are underpowered for both.
[@hooper2018, Background]

### RCT vs observational — a REFINEMENT, not a filed tension

The instinct is to file Marklund-benefit vs Hooper-little-effect as a `[[tension]]`. The **parameter
table forbids it** — the two are not the same quantity:

| Parameter | Marklund (observational) | Hooper 2018 (RCT) | Same quantity? |
|---|---|---|---|
| Exposure | *in vivo* LA **status** (biomarker %, decades of habitual intake) | *increasing* omega-6 **intake** vs lower, within-trial change | **NO — status level vs intervention change** |
| Analyte | **LA specifically** (AA analysed separately) | omega-6 broadly — **12 LA + 7 GLA** pooled | **NO — LA-specific vs LA+GLA mix** |
| Design / N | 30 prospective cohorts, IPD pool, 68 659 | 19 RCTs, 6461 (3 low-RoB) | **NO — observational vs randomised** |
| Horizon | follow-up medians 2.5-31.9 y | 1-8 y | **NO — decades vs a few years** |
| CVD mortality | HR **0.78 (0.70-0.85)** benefit | RR **1.09 (0.76-1.55)** Very low | opposed points; RCT CI barely spans 0.78 |
| CVD / total events | HR 0.93 (0.88-0.99) benefit | RR 0.97 (0.81-1.15) Low | both near-null; obs excludes 1, RCT includes it |

**Same-quantity? = NO** on exposure construct, analyte, design and horizon — so the not-joined check (ii)
(different scope/unit, consistent once matched) fires, and the artifact is a **refinement (F), not a
joined tension.** The resolver is the design difference, and it cuts **both** ways: (a) the RCTs are
short (1-8 y vs decades), underpowered (few events, only 3 low-RoB, dietary-adherence-diluted), and
mix in GLA — so they *«remain to be proven»* rather than *«shown null»*; (b) equally, Marklund's strong
CVD-mortality benefit (HR 0.78) is **not reproduced by randomisation**, so it must carry the standing
observational discounts (residual confounding, reverse causation) that the RCTs are built to remove.
**Triangulation weakens the strong observational arm — it does not overturn it.** What survives across
*both* designs is narrower and firmer than either alone: LA is **not harmful** on hard CVD outcomes, and
it **lowers atherogenic lipids** (Marklund's LDL/apoB mechanism; Hooper's High-certainty TC). The
dramatic HR-0.78 CV-mortality figure is the fragile, single-design part.
[inferred from @marklund2019; @hooper2018]

### Two RCT-side refinements that ground Marklund's own caveats

- **The benefit concentrates where baseline omega-6 is low (< 5% E) — grounding the LA-*depleted*
  concern.** Hooper: *«across outcomes there is a suggestion of benefit from increasing omega-6 fats
  where baseline omega-6 fat intake is below 5% E, and this eﬀect is lost where omega-6 fat intake is at
  least 5% E»* — heavily caveated (*«only 7 of the 17 included trials reported baseline»*, underpowered).
  This is the essential-nutrient dose logic: adding an essential fat helps the deficient, not the
  replete — the same decision-relevant risk (**too little** LA) Marklund flagged for high-oleic
  LA-depleted oils, now with a rough threshold.
  [@hooper2018, Overall completeness]
- **The Ramsden contrarian pole is partly captured here.** Hooper cites *«Ramsden 2010 ... found no
  significant eﬀects on all-cause mortality (RR 1.16 ...), non-fatal MI (RR 1.03 ...), CHD death (RR
  1.17 ...) or CVD events RR 1.13 ...), and these results have not altered substantially in their most
  recent update ... (Ramsden 2016)»* — Ramsden's recovered-RCT nulls are **consistent** with Hooper's
  pooled little-or-no-effect, not a suppressed harm. And Hooper is *more conservative than* the AHA
  advisory (Sacks 2017, RR 0.71): it **excluded** 2 of Sacks' 4 core trials (Oslo = multifactorial +
  multivitamin; Finnish Mental Hosp = 2-cluster cross-over) — the same trial-selection dispute the
  Astrup/Hamley thread raises on [[Saturated Fat Intake and Replacement]] and
  [[Does Reducing Saturated Fat Reduce Cardiovascular Events]]. So when the staged Ramsden reanalysis
  lands, the joined issue is narrower than "benefit vs harm": it is a within-RCT trial-selection
  dispute over a set of trials Hooper has already pooled to a null.
  [@hooper2018, Agreements and disagreements]

**Self-critique (Hooper 2018 weave) `[run 2026-08-04, before commit]`.** *Not-joined:* parameter table
built before prose, «same quantity?» = NO on exposure construct (status-level vs intervention-change),
analyte (LA-only vs LA+GLA), design and horizon — filed F/refinement, **no tension**. *Laundered-E:*
explicitly NOT claimed — the two arms *diverge* (obs benefit vs RCT little-effect), so no
convergent-independent-E; and Hooper-2018/Hooper-2020 share a team (method-shared, marked not-E).
*Overclaim / symmetric standards:* the RCT arm is stated at its true certainty (Low/Very-low), «little
or no effect» distinguished from «no effect» and «insufficient»; the seed-oil-*harm* thesis is refuted
symmetrically — the >1 point estimates (CVD mortality 1.09, stroke 1.36) are reported AND flagged
Very-low/imprecise, not buried. *Triangulation:* the claim is *weakens, does not overturn* — the strong
observational CV-mortality benefit is demoted to observational-only, not erased. *Counter-passage:*
Hooper's own Discussion cross-comparisons (Hooper 2015, Ramsden, Sacks, Mensink, Farvid) read end-to-end.

### The trial-selection contrarian pole — Hamley 2017 `[2026-08-04]`

The is now cashed. Hamley is the **reanalysis** that operationalises the
recovered-RCT/trial-selection critique for the SFA->n-6-PUFA-replacement diet-heart trials. He splits
the 11 diet-heart trials by whether the arms differed in anything *other* than the fat swap (trans fats
in control-arm margarines, multifactorial advice, control-arm vitamin-E deficiency, cardiotoxic
medication) and finds the one significant benefit (all-trials **total CHD events RR 0.80, 0.65-0.98**)
**vanishes** in the confounder-free "adequately controlled" subset (RR **1.02, 0.84-1.23**), with a
significant subgroup difference (P=0.002). His verdict: replacing SFA with mostly n-6 PUFA is *«unlikely
to have either a beneficial or an adverse effect on CHD events, CHD mortality and total mortality.»*
[@hamley2017, Discussion]

**On this page's question (does n-6 PUFA harm the heart?), Hamley is null-on-BOTH — it cuts against the
harm thesis too.** Even in the confounder-free subset the estimates straddle 1.0 (total CHD 1.02, major
CHD 1.06, CHD mortality 1.13 — all CIs spanning benefit and null, none a significant harm). So the
loud seed-oil-*harm* claim finds no support in Hamley's cleaner subset either; his finding is *absence
of a clear effect*, not harm.

**Where it converges and where it clashes (same-quantity care).** Hamley's adequately-controlled hard-CHD
null (1.02) points the **same way** as this page's Hooper 2018 omega-6 result (increasing omega-6 -> CVD
events RR 0.97, Low): both say **isolating the n-6 PUFA intervention removes the hard-events signal**.
Shared-evidence-base convergence (overlapping diet-heart trials, both RCT-MAs), **NOT** `[E-independent]`.
The residual clash is the SFA-*replacement* subgroup — the SFA Cochrane review's PUFA-replacing-SFA
subgroup RR 0.73 (0.58-0.92, reported *inside* Hooper 2018's discussion, NOT Hooper 2018's own
omega-6-increase estimate of 0.97) and AHA-Sacks 0.71, vs Hamley's adequate-only 1.02 — and it turns on
**which trials are adequately controlled**, the same trial-selection dispute already flagged in *Two
RCT-side refinements* above. (The mainstream side does not hold 0.73 firmly either — the SFA-review
lineage's replacement subgroups are underpowered; see [[Saturated Fat Intake and Replacement]].) Filed on [[Does Reducing Saturated Fat Reduce Cardiovascular Events]] (Hamley grounds its
joined-issue 1), not re-litigated here.
[inferred from @hamley2017; @hooper2018]

**Symmetric standards.** Hamley is single-author `moderate`, its adequacy filter **post-hoc**
(author-conceded: *«the categorisation is difficult to be based on criteria developed prior to the
litera-ture review»*), and the adequate subset is only 5 trials — so the null is «unlikely to reduce»,
not «shown null», and the exclusion move can bias toward the null as the pro-benefit MAs' inclusion move
biases away from it. But it declares **no funding and no competing interests** — a cleaner COI than this
page's Unilever-supported biomarker pole — so it earns the same scrutiny, no more, no less. Its scope is
also narrow: extreme trial PUFA doses (>=14.3 %E) from vegetable-oil supplementation, and Hamley states
*«these results should not be generalised to other foods high in mostly n-6 PUFA such as nuts and
seeds.»* [@hamley2017, Discussion; , Discussion]

## The mortality outcome menu — Li 2020 widens it beyond CVD `[2026-08-04]`

Marklund and Hooper both answer a **CVD** question. Li 2020 (SR+MA, **38 studies / 44 prospective
cohorts**) extends the outcome menu to the broadest patient-important endpoint — **all-cause mortality**
— plus **cancer mortality**, via *both* a dietary arm (811,069 participants, self-report) and a
biomarker arm (65,411 participants). Higher LA is associated with lower mortality on all three outcomes:

| Outcome | Dietary — RR extreme categories (95% CI) | Biomarker — RR per SD (95% CI) |
|---|---|---|
| All-cause mortality | **0.87 (0.81, 0.94)** | **0.91 (0.87, 0.95)** |
| CVD mortality | **0.87 (0.82, 0.92)** | **0.89 (0.85, 0.94)** |
| Cancer mortality | **0.89 (0.85, 0.93)** | **0.91 (0.84, 0.98)** |

[@li2020, Abstract; Results]

- **This is an F-refinement, NOT independent-E corroboration of Marklund (the guard, stated).** Li's
  biomarker arm literally *contains* Marklund 2019 — Li's Table 2 attributes nine cohorts (CHS,
  EPIC-Norfolk, MCCS, MESA, SHHEC, AGES-Reykjavik, HS-Japan, ARIC, CCCC) to `Marklund, 2019 (7)`. Both
  are observational cohort pools with overlapping cohorts and the same design class, so their agreement
  is **shared-evidence-base, not two independent routes** — it widens the *outcome* coverage, it does
  not add a second independent backing on the CVD claim. [inferred from @li2020]
- **A usable dose statement on CVD mortality.** Where Marklund's IQR framing resisted a per-%E dose,
  Li's dietary dose-response is **linear** for CVD mortality (P<0.001): **RR 0.93 (0.91, 0.95) per 5%
  energy** increment of LA. For total and cancer mortality the curve is **nonlinear but with «no clear
  threshold effect»** — monotone-declining over the studied 1.1-11.6% E range, no knee located (total
  mortality 0.97 at 5% E → 0.88 at 10% E; cancer 0.96 → 0.83). This is another curve that is *monotone
  or not-estimable, no plateau* on the decision-relevant range -> [[The U-Shaped Association Artifact]],
  and Li states the burden the corpus expects: a threshold is *asserted-absent*, not located.
  [@li2020, Results; Discussion]
- **The RCT/observational split persists on all-cause mortality (same refinement, not a new tension).**
  Hooper's RCTs give all-cause mortality **RR 1.00 (0.88-1.12), Low, little-or-no-effect**; Li's
  observational pools give **0.87 / 0.91**. This is the identical design-divergence already adjudicated
  for CVD mortality in *RCT vs observational — a refinement*: not-joined check (ii) fires (short
  randomised intervention-change vs decades of habitual status), so it is an **F-refinement**, and the
  strong mortality benefit is **observational-only**. The RCTs are underpowered for mortality (few
  events, decades-old, chronically-ill participants); Li argues cohorts are *«of high importance»* here
  precisely because a powered mortality RCT is impractical.
  [inferred from @li2020; @hooper2018]
- **A reverse-causation stratum flag.** The protective total-mortality signal is a *general-population*
  finding: «the association between LA and total mortality among cancer patients was nonsignificantly
  positive», and excluding baseline-cancer cohorts *strengthened* the protective estimate (0.81 at 10%
  E). Among the already-sick the benefit does not hold — a sick-subgroup marker, consistent with the
  prospective-only design reducing but not removing reverse causation.
  [@li2020, Results; Discussion]

**Self-critique (Li 2020 weave) `[run 2026-08-04, before commit]`.** *Laundered-E:* explicitly blocked —
Li's biomarker arm overlaps Marklund's cohorts (nine cohorts shared, read off Table 2), so filed as
F/shared-evidence, `[E-independent]` NOT claimed. *Not-joined:* the all-cause RCT-vs-observational split
is mapped to the existing CVD-mortality parameter row (same quantity mismatch), no new tension.
*Overclaim / symmetric standards:* stated at true certainty — observational, residual confounding not
excluded, COI toward the finding recorded (California Walnut Commission); the benefit is «modest» (RRs
0.87-0.91), not oversold, and the mortality benefit is flagged observational-only. *Counter-passage:*
Li's Discussion (RCT limits, dietary-vs-biomarker strengths/limits, guideline spread) read end-to-end.

## The biomarker design sidesteps the binding constraint — but only because LA is essential

The core methodological move: LA status is measured biochemically, not from an FFQ. Marklund's
justification is exactly the mirror image of why the same trick **fails** for saturated fat:

> «Because LA cannot be produced endogenously (making tissue levels reasonable markers of intake),
> biomarker (circulating and adipose tissue) levels correlate with dietary consumption. Such objective
> biomarkers allow the evaluation of dietary exposure of LA status independent of self-reported food
> habits and estimated nutrient composition of different foods.»
> [@marklund2019, Background]

**This is the decisive intersection with [[Measurement Error in Dietary Assessment]].** Self-reported
intake is the binding constraint on the whole diet-fat literature (34% under-reporting of energy;
flattened gradients). A tissue biomarker removes the *self-report/recall* error — *for a fatty acid the
body cannot synthesise*. [[Saturated Fat Intake and Replacement]] records the converse (Van Dam &
Hunter): for SFA and MUFA the biomarker route is *closed*, because de novo lipogenesis makes tissue SFA
a function of intake **and** carbohydrate/insulin status, so the marker cannot separate the terms.
**LA is essential — no endogenous source — so its tissue level is a genuine (not perfect) intake
marker.** Marklund still notes that circulating LA levels can be influenced by metabolism (the FADS
desaturase genotype above is one such determinant) even while calling them established, useful markers
of diet [@marklund2019, Discussion] — so the
biomarker removes the FFQ error, it does not deliver an error-free intake measure. The point is comparative: the same instrument that is a dead end
for SFA is *usable* for LA. That within-fat-type boundary is real information, not a technicality
-> [[Is the Food Category Doing Any Work]].
[inferred from @marklund2019]

- **Where this design sits in [[Upgrading Observational Evidence]].** It is still observational (biomarker
  cohorts, not RCTs), so it starts at low certainty. What it buys is not a GRADE upgrade factor but the
  removal of the *exposure-measurement* error that downgrades ordinary FFQ-based nutrition cohorts — an
  IPD pooled analysis with an objective exposure and centrally-adjudicated outcomes. It is the
  strongest *observational* form the LA question can take, and it is the reason a biomarker cohort here
  outranks a bigger FFQ cohort. But *«residual confounding attributable to unmeasured or imprecisely
  measured covariates»* remains the authors' own stated limit, and reverse causation is argued-against
  (prospective-only design, adipose long half-life) rather than excluded.
  [@marklund2019, Discussion]

## LA vs AA — the *omega-6 -> inflammation via arachidonic acid* claim, tested directly

The seed-oil-harm mechanism is: LA converts to AA -> proinflammatory/prothrombotic eicosanoids ->
CVD. Marklund breaks the chain at two points:

- **Conversion is limited.** *«stable isotope studies suggest very limited conversion of LA to AA in
  humans, and trials show limited effects of increasing dietary LA on plasma and adipose tissue AA
  levels»* — so raising dietary LA does not straightforwardly raise AA.
  [@marklund2019, Background]
- **AA itself is not associated with higher CVD risk** (HR 0.95, 0.90-1.01; in extreme-quintile and
  total-plasma analyses *lower* risk, 0.92 / 0.81). The eicosanoid story is one-sided: AA is *«also the
  main precursor to key anti-inflammatory metabolites, such as epoxyeicosatrienoic acids and
  prostaglandin E2, and other mediators that actively resolve inflammation, such as lipoxin A4»*, and
  gives rise to prostacyclin (antiaggregatory, vasodilatory). *«These complex biological effects
  preclude simplistic inference on the health effects of AA metabolites.»*
  [@marklund2019, Discussion]

**Decision consequence:** the mechanistic *omega-6-is-proinflammatory* argument is a mechanism claim
whose predicted outcome (higher CVD) does not appear when measured — the *net-effect-not-intended*
guard firing in the pro-seed-oil direction. The dedicated inflammation-marker RCT evidence that closes
whether LA moves inflammatory markers at all is now held — see the next section (Johnson 2012).

## The inflammation surrogate, tested directly — Johnson 2012 RCT SR `[2026-08-04]`

The `[AWAITS]` is now cashed. Marklund breaks the *LA -> AA -> CVD* chain at its **outcome** end (AA not
associated with CVD). Johnson 2012 (systematic review of RCTs, J Acad Nutr Diet) tests the **surrogate**
end directly: does feeding LA raise inflammatory markers in humans? **15 RCTs (8 parallel, 7 crossover),
18 LA-vs-control comparisons, healthy non-infant free-living subjects**, LA doses spanning control arms
of \~5-10 g/day up to high arms of 27-64 g/day (Junker sunflower-oil arm 64.3 g/day; Adam liquid diet
43.5 g/2 200 kcal). Qualitative synthesis (marked heterogeneity precluded meta-analysis). The result is
a **direct null on the harm mechanism's own endpoint**:

- **No effect on any commonly-measured marker.** Across the trials there were no significant
  LA-vs-control differences in CRP, fibrinogen, PAI-1, IL-6, TNF-alpha, or soluble adhesion molecules
  (ICAM-1, P-/L-selectin). [@johnson2012, Qualitative Data Synthesis; Table 1]
- **The two significant signals were eicosanoid metabolites, and their own authors called them
  non-inflammatory** (Blair: urinary PGE2 up / 2,3-dinor-TXB2 down, read as *favorable* vascular
  effects; Adam: tetranorprostanedioic acid, attributed to LA *oxidation* not eicosanoid production).
  [@johnson2012, Qualitative Data Synthesis]

> «We conclude that virtually no evidence is available from randomized, controlled intervention studies
> among healthy, noninfant human beings to show that addition of LA to the diet increases the
> concentration of inflammatory markers.»
> [@johnson2012, Discussion/Abstract]

**This mechanizes Marklund's AA-null with systematic RCT backing (an F — mechanism-for-the-null).**
Marklund stated LA->AA conversion is *«very limited»* as a background assertion; Johnson supplies the
pooled trial evidence underneath it, and breaks the harm chain at **three** successive links:

- **Link 1 — LA does not reliably raise AA.** *«There is now consistent evidence that dietary LA does
  not unconditionally increase circulating AA concentrations»*; a systematic review of **36 human
  clinical trials** found *«no effect on the phospholipid pool of plasma/serum AA concentrations of
  decreasing dietary LA by up to 90%»* (P=0.39) *«or of increasing LA intakes by up to 600%»* (P=0.72) —
  the LA->AA step is saturated at low intake, so dietary swings do not move tissue AA.
  [@johnson2012, Effect of Dietary n-6 PUFA on Tissue AA Concentrations]
- **Link 2 — even preformed AA does not raise cytokines.** Directly supplementing AA (Thies 700 mg/day
  for 12 wk; Kelley 1 500 mg/day for 49 d) left TNF-alpha, IL-1, IL-6 and adhesion molecules unaffected
  (Kelley raised only *in vitro* LTB4/PGE2 in stimulated cells, not secreted cytokines) — so *«there is
  little evidence to suggest that consumption of preformed AA contributes directly to increased
  concentration of markers of chronic inflammation.»*
  [@johnson2012, Dietary AA and Inflammation]
- **Link 3 — AA-derived eicosanoids are not one-sidedly proinflammatory** (PGE2 also *inhibits* TNF-alpha
  and IL-1 and induces anti-inflammatory lipoxins; AA is precursor to vasodilatory epoxyeicosatrienoic
  acids). This restates Marklund's own dual-eicosanoid point and rests on the **same** underlying reviews
  (Calder, Serhan) — a shared-literature echo, **NOT** an independent-E convergence. (Resolvins are
  derived from the n-3 fatty acids EPA/DHA, not AA — that competition is the *other*, secondary harm
  route, not this one.) [@johnson2012, Dietary AA and Inflammation]

**Surrogate discipline — a null on the surrogate rebuts the mechanism, it does not prove benefit.**
Inflammatory markers (CRP, IL-6, TNF-alpha) are **surrogates**, not patient-important outcomes -> [[Surrogate Outcomes]].
Johnson's null does exactly one thing: it removes the *proposed harm pathway* (LA -> inflammation ->
disease) — it is **not** evidence that LA *lowers* inflammation or improves any outcome. Johnson himself
claims only *«a measure of reassurance regarding current dietary recommendations»*, not benefit.
[inferred from @johnson2012]

**Type-E guard — this is NOT independent corroboration of the outcome benefit.** Johnson tests a
*different endpoint* (the inflammation surrogate) via a *different design* (RCTs) answering a *different
question* (does the harm mechanism fire?) than Marklund/Li (observational cohorts, CVD/mortality
outcome). So Johnson does **not** add a second independent route to the *benefit* claim — it refutes the
*harm* claim. Classified **F/A (mechanism-refutation of the harm arm)**, `[E-independent]` NOT claimed.
[inferred from @johnson2012; @marklund2019]

**Symmetric standards — the null is bounded, and stated so.** Johnson does not overclaim: small samples
(largest 60 completers; three metabolic-ward studies 6-9 subjects), short durations (2 wk to 40 d),
marker variability so that *«the possibility of false negative outcome measures cannot be dismissed»*,
and \~half the trials did not explicitly prohibit NSAIDs. The conclusion is a bounded absence —
*«the possibility that large intakes of LA increase markers of inflammation cannot be eliminated»* —
calling for *«larger, longer-term, dose-response studies»*. This is a **no-meaningful-effect (bounded)**
reading of the harm mechanism, distinct from insufficient-evidence: RCTs exist and are consistently
null, but they are underpowered for a subtle effect.
[@johnson2012, Limitations of the Data; , Conclusions]

- **A genetic stratum where the null may not hold (route-b/route-c flag).** Johnson notes genotype may
  account for *«a quarter of the variation in circulating/tissue AA»*: Martinelli found a genetic profile
  *enhancing* LA->AA conversion associated with higher CRP and elevated CVD risk, and Mathias found most
  African Americans carry a FADS variant tied to elevated circulating AA (10% vs 7% of total fatty acids)
  — speculated to partly explain higher CVD incidence. This is the mirror of Marklund's FADS1 rs174547
  stroke-interaction: the population-average inflammation null may not transport to fast-converter
  genotypes. A candidate effect-modification stratum, not an established one (mechanism + association,
  no in-stratum RCT). [@johnson2012, Limitations of the Data]
- **Bounded by date — but not superseded within the corpus.** Johnson is 2012; the loud seed-oil
  discourse is 2023-2025, and no *later* dedicated inflammation-marker RCT SR is held here, so the direct
  test is a decade old. Its *direction* is concordant with everything the corpus has ingested since
  (Marklund 2019, Li 2020, Hooper 2018 all post-date it and none find the predicted harm), so it is a
  **bounded, not stale** finding: a newer direct inflammation-RCT SR would be the source that could
  update it. [inferred from @johnson2012]

**Self-critique (Johnson 2012 weave) `[run 2026-08-04, before commit]`.** *Laundered-E:* explicitly
blocked — Johnson tests a different endpoint/design/question than the outcome sources, and its
dual-eicosanoid point shares Calder/Serhan with Marklund; filed F/A mechanism-refutation, `[E-independent]`
NOT claimed. *Overclaim / surrogate discipline:* the null is a surrogate null that rebuts the *harm
mechanism*, stated explicitly as NOT proof of benefit; Johnson's own *reassurance-not-benefit* stance
preserved (his verbatim «reassurance» wording quoted, the contrast label is this page's). *Symmetric standards:* the bounded-null limits (small n, short, false-negatives possible,
«cannot be eliminated») are reported, not buried, and the genetic fast-converter stratum where the null
may fail is flagged. *Counter-passage:* Johnson's Limitations and Conclusions read end-to-end; the two
«significant» eicosanoid findings surfaced with their authors' non-inflammatory interpretations.

## Mechanism — a case where surrogate and hard outcome AGREE

The proposed cardioprotective mechanism runs through the lipid surrogates:

> «In randomized controlled feeding trials, dietary PUFA (primarily LA) as a replacement for either
> carbohydrates or saturated fat lowers low-density lipoprotein cholesterol, triglycerides, and
> apolipoprotein B levels, and raises high-density lipoprotein cholesterol»
> [@marklund2019, Discussion]

plus stated effects on HbA1c/insulin resistance, blood pressure, and visceral/liver fat.

**Contrast with the SFA story — this is the instructive intersection with [[Surrogate Outcomes]].** On
saturated fat, LDL (the surrogate) carries *High* certainty while every hard CVD/mortality outcome is
Moderate-or-below — surrogate and outcome **diverge in certainty**, and a reader who takes the LDL
result as the outcome result is over-reading. Here the alignment is the other way: LA lowers LDL/apoB
*and* the same LA biomarker tracks lower hard CVD, mortality and stroke — the surrogate and the
patient-important outcome **point the same way in the same nutrient**. That agreement is *same-pathway
coherence* — surrogate and outcome sit on the one apoB-mediated chain
([[LDL ApoB and Cumulative Exposure]]), NOT an independent-route (type-E) convergence, which a single
source cannot supply — and it still does not license reading the surrogate *as* the outcome; the outcome
evidence stands on its own biomarker-cohort footing, observational, and it is what carries the claim.
[inferred from @marklund2019]

- **The RCT arm confirms the lipid surrogate at High certainty — but note which fraction.** Hooper's
  RCTs give total cholesterol MD **-0.33 mmol/L (High certainty)**, dose-related. The **LDL**-specific
  estimate was null (MD -0.04, 2 trials, 244 participants) — but Hooper reads that as **underpowering,
  not absence**: the highly-controlled Mensink 2016 trials show omega-6 replacing SFA lowers LDL
  (-0.058 mmol/L per 1% E), and Hooper concludes *«we were underpowered to see eﬀects on other lipids.»*
  So the surrogate agrees across observational and RCT arms; the hard-outcome benefit is where they part.
  [@hooper2018, Summary of findings 2; , Agreements and disagreements]

## Decision relevance

- **Four evidence states, named — and the arms differ by design.** *Observational (Marklund + Li):* LA
  status/intake -> lower CVD, CV mortality, ischemic stroke (Marklund) and **all-cause + cancer
  mortality** (Li 2020, dietary + biomarker concordant): **benefit** (gold/high pools, but overlapping
  cohorts — one observational body of evidence, not two). *RCT (Hooper 2018):*
  increasing omega-6 -> **little or no effect** on all-cause mortality and CVD events (Low),
  **insufficient/uncertain** on CVD mortality, CHD and stroke (Very low), **probable small benefit** on
  MI (Low, NNTB 53), **definite** total-cholesterol reduction (High). AA -> higher CVD: **no meaningful
  effect** (not the mechanism's predicted harm). *Inflammation mechanism (Johnson 2012 RCT SR):* feeding
  LA -> **no meaningful effect** on inflammatory markers (CRP/IL-6/TNF-alpha) — a surrogate null that
  rebuts the harm pathway, not proof of benefit. What holds across all arms: **not harmful** on hard
  outcomes or the inflammation surrogate + lowers atherogenic lipids; the strong CV-mortality benefit is
  observational-only. Whether
  *bottled seed oils as consumed* (heated, in ultraprocessed foods) move an outcome vs the realistic
  alternative: **insufficient evidence** either arm — this is a nutrient-level (LA-status / omega-6-dose)
  finding, not a food-level or cooking-method one.
- **Frame as substitution, not addition.** The mechanism evidence is for LA *replacing* saturated fat
  or refined carbohydrate. The cardioprotective signal is a replacement effect; it says nothing about
  adding seed-oil calories on top of an existing diet. Judge against the realistic alternative fat.
- **A stratum the finding actually flags: LA-*depleted* seed oils.** Marklund notes *«current trends in
  oil production are leading to increased use of high-oleic, LA-depleted seed oils, which can increase
  the risk of insufficient PUFA consumption in population subgroups»* — i.e. the decision-relevant risk
  the data support is *too little* LA, not too much. [@marklund2019, Discussion]
- **Big-rock ranking:** this is a fat-*type* / substitution lever, not a big rock. It ranks alongside
  the SFA-replacement question, well below smoking/adiposity/inactivity. For someone already lean,
  active and eating LA-containing foods, the marginal seed-oil decision is a small, contested lever —
  *attention is an anti-signal* applies (the seed-oil controversy is loud and the effect is modest).

## Limits

- **Four sources now held (observational biomarker + RCT + mortality SR+MA + inflammation RCT SR),
  confidence stays `low`.** Marklund (gold IPD cohort pool) + Hooper 2018 (gold Cochrane RCT MA) + Li 2020
  (high SR+MA, dietary + biomarker mortality) + Johnson 2012 (high RCT SR, inflammation markers). Johnson
  **firms the harm-refutation to RCT level on the mechanism's own endpoint** (feeding LA does not raise
  inflammatory markers) — but that is a *surrogate* null rebutting the harm pathway, **not** support for
  the benefit claim, so it does not move the page's confidence, which is about the CVD/mortality *benefit*.
  Li widens the outcome menu but is observational and overlaps Marklund's cohorts (not an independent
  check), and the RCT arm still tempers the mortality benefit (Hooper all-cause RR 1.00 vs Li 0.87-0.91).
  So the composite does **not** earn `medium`: what holds across all four is *LA is not harmful on hard
  outcomes or the inflammation surrogate + lowers atherogenic lipids*; the strong mortality/CV-mortality
  benefit remains **observational-only**. No Mendelian-randomisation triangulation is held here yet —
  that is what would move confidence, not another observational pool.
- **Industry funding — recorded, not netted (symmetric standards).** *«Unilever provided Tufts
  University with a restricted grant... to partly support this analysis»*, stated to have *«no role in
  study design, study conduct, data analysis, manuscript preparation, or decision to submit»*; two
  authors report Unilever research support, and the senior author reports extensive food-industry
  personal fees. Unilever is a major seller of LA-rich vegetable-oil spreads, so the COI runs *toward*
  the pro-LA finding. This does not refute the result (a large IPD pool with prespecified protocol
  resists sponsor steering), but it is exactly the halo-across-axes signal to keep visible, and a reason
  the contrarian pole must get the *same* appraisal bar when it lands.
  [@marklund2019, Sources of Funding; Disclosures]
- **The contrarian pole is not yet held — no tension filed.** The staged Ramsden reanalyses (Minnesota
  Coronary Experiment, Sydney Diet-Heart) recovered RCT data suggesting LA-rich oil *raised* mortality;
  Marklund itself pre-empts them, arguing those 1960s-70s corn-oil trials are *«hampered by their short
  duration, small numbers of events, substantial dropout, and confounding by industrial trans fats.»*
  [@marklund2019, Background] The joined issue
  (biomarker-cohort benefit vs recovered-RCT harm) will be filed as a `[[tension]]` once the Ramsden
  reanalyses are ingested — (recovered
  Minnesota Coronary Experiment RCT data; the Sydney Diet-Heart companion is not yet registered).
- **AWAITS — the cluster this opener anchors:**
  - ~~~~ **CASHED 2026-08-04** — the RCT arm
    is now woven above (*The RCT arm — Hooper 2018 Cochrane*); it tempered rather than upgraded the
    observational benefit (F-refinement, design-divergence).
  - ~~~~ **CASHED 2026-08-04** — dietary +
    biomarker LA vs *all-cause*, CVD and *cancer* mortality; woven above (*The mortality outcome menu*).
    F-refinement (widened outcome menu + dietary/biomarker concordance), not independent-E (overlaps
    Marklund's cohorts).
  - ~~~~ **CASHED 2026-08-04** — RCT SR: feeding
    LA does not raise inflammatory markers (CRP/IL-6/TNF-alpha) in healthy humans; woven above
    (*The inflammation surrogate, tested directly*). F/A mechanism-refutation of the harm arm, surrogate
    null (rebuts the mechanism, not proof of benefit), NOT independent-E of the outcome benefit.
  - ~~~~ **CASHED 2026-08-04** — the trial-selection
    reanalysis; woven above (*The trial-selection contrarian pole*). Null-on-both (no benefit, no harm)
    in its adequately-controlled subset; converges with Hooper 2018's omega-6 hard-events null, clashes
    with the SFA-replacement subgroup (0.73/0.71) on trial-adequacy. Grounds joined-issue 1 on
    [[Does Reducing Saturated Fat Reduce Cardiovascular Events]].
  - The recovered-RCT-harm arm (Ramsden Minnesota/Sydney reanalyses) is still not ingested — remains the open contrarian pole for a
    *harm* signal (Hamley found none).

## References

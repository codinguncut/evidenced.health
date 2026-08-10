---
type: framework
question: Do dietary omega-6 linoleic acid (the main fat in bottled seed oils) and its metabolite arachidonic acid raise or lower cardiovascular risk?
aliases: [Seed Oils, Seed Oil, Vegetable Oils, Omega-6, Omega-6 Fatty Acids, n-6 PUFA, Linoleic Acid, LA, Arachidonic Acid, AA, Omega-6 and Cardiovascular Disease]
authors: [Marklund, Matti; Lemaitre, Rozenn N; Mozaffarian, Dariush; Riserus, Ulf; Hooper, Lee; Al-Khudairy, Lena; Abdelhamid, Asmaa S; Li, Jun; Guasch-Ferre, Marta; Li, Yanping; Hu, Frank B; Johnson, Guy H; Fritsche, Kevin; Hamley, Steven; Ramsden, Christopher E; Zamora, Daisy; Broste, Steven K]
sources: [Marklund - Omega-6 Biomarkers Cardiovascular 2019, Hooper - Omega-6 Fats Cardiovascular Cochrane 2018, Li - Linoleic Acid Mortality Meta-Analysis 2020, Johnson - Linoleic Acid Inflammation Review 2012, Hamley - Saturated Fat PUFA Coronary 2017, Ramsden - Minnesota Coronary Reanalysis 2016, Ramsden - Sydney Diet Heart 2013]
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
nosplit: 728@single-exposure framework (one LA/AA->CVD question); length is dated evidence strata + contrarian poles held on one decision, not multiple decisions
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
refinement, not a filed tension (see *The RCT arm*). The **recovered-RCT contrarian pole is now held on BOTH its trials**
(Ramsden's Minnesota Coronary Experiment reanalysis — randomized mortality **null**; and the Sydney
Diet-Heart companion — randomized mortality **adverse** in a secondary-prevention stratum; see *The
recovered-RCT contrarian pole* and *The Sydney secondary-prevention arm*). Neither delivers a
general-population harm finding: MCE is null, and Sydney's harm — though genuinely randomized and
stronger than MCE's — is one small single-blind high-dose n-6-selective trial that pools to
non-significance and is already absorbed into the benefit-netting Hooper/Li pools. What Sydney *does*
add is a **secondary-prevention / high-dose n-6-selective stratum flag** (possible harm, insufficient
evidence) and the **n-6-selective-vs-mixed-PUFA distinction**. A facet of the
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

The instinct is to file Marklund-benefit vs Hooper-little-effect as a `tension`. The **parameter
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

## The recovered-RCT contrarian pole, now held — Ramsden MCE 2016 `[2026-08-04]`

The **Minnesota Coronary
Experiment** (MCE, 1968-73) is the recovered-data pole Marklund pre-empted: a **double-blind, parallel
RCT** (n=9570; the *largest* diet-heart trial, the only one in large cohorts of women and >=65s, the
only one with autopsy endpoints), in which corn-oil LA (**13.2%E**, \~2x the average US diet) replaced
SFA. It is the cleanest available test of the diet-heart *surrogate* logic — and it comes apart at the
surrogate->outcome step: [@ramsden2016, Design; Study design and participants]

- **The surrogate moved, hard:** serum cholesterol **-13.8% (SD 13.0)** intervention vs **-1.0%** control
  (P<0.001), in every prespecified subgroup, as the Keys equation predicted.
- **The outcome did not:** «Kaplan Meier graphs showed no mortality benefit for the intervention group in
  the full randomized cohort or for any prespecified subgroup.» The updated 5-trial meta-analysis (MCE +
  SDHS + RCOT + LA-Vet + MRC-Soy, n=10 808) found «no evidence of benefit on mortality from coronary heart
  disease (1.13, 0.83 to 1.54) or all cause mortality (1.07, 0.90 to 1.27).»
  [@ramsden2016, Results; Fig 7]
- **Two harm-suggestive signals, both weaker than the headline** (see the symmetric-standards read
  below): a within-trial **cholesterol-change -> death** association (per 30 mg/dL drop, HR **1.22
  (1.14-1.32)**, >=65-driven), and a **provisional autopsy** finding — intervention 41% (31/76) vs control
  22% (16/73) with >=1 MI, **IRR 1.90 (1.01-3.72)**, no less atherosclerosis (149/295 files).
  [@ramsden2016, Table 4; Provisional autopsy findings]

**Attempt the contradiction — is this the seed-oil HARM the page's harm thesis wanted? Parameter table
first (same-quantity discipline).** Marklund's biomarker benefit vs Ramsden's recovered RCT:

| Parameter | Marklund (biomarker cohort) | Ramsden MCE (recovered RCT) | Same quantity? |
|---|---|---|---|
| Exposure | *in vivo* LA **status** (biomarker %), habitual | corn-oil LA **13.2%E** replacing SFA, high-dose intervention | **NO — status vs high-dose intervention** |
| Population | 68 659 general-population adults, 13 countries | institutionalized psychiatric/nursing-home; mean age 52, 25% >=65 | **NO — general vs institutionalized elderly** |
| Design / horizon | 30 prospective cohorts, medians 2.5-31.9 y | 1 RCT, mean 2.9 y in-hospital | **NO — observational decades vs short RCT** |
| Outcome tested | CVD mortality HR **0.78 (0.70-0.85)** | all-cause mortality: **no benefit** (randomized); CHD-mortality MA **1.13 (0.83-1.54)** | **NO — CVD-mortality biomarker-contrast vs all-cause randomised-null** |

**Same-quantity? = NO on every row — so the loud «biomarker benefit vs recovered-RCT harm» clash the page
anticipated does NOT hold as a joined tension** (not-joined check (ii): different exposure construct,
population, design and outcome, consistent once matched). The honest reading, even-handed:

- **The randomized mortality contrast is NULL, not harm — and consistent with Hooper.** The clean
  randomized MCE outcome (all-cause mortality, full cohort) shows *no benefit*, and Ramsden's 5-trial MA
  (1.13 / 1.07, both spanning 1) is the same little-or-no-effect Hooper's 19-RCT Cochrane pool reaches.
  Hooper **already** pools MCE and Ramsden's nulls (see *Two RCT-side refinements* above: «these results
  have not altered substantially in their most recent update ... (Ramsden 2016)»). So the recovered data
  do **not** establish a suppressed harm on hard randomized outcomes — they *confirm the RCT-side null*,
  the same design-divergence-from-observational already filed as an **F-refinement**.
- **The harm-suggestive signals do not survive symmetric standards as *harm*.** (a) The cholesterol-death
  HR 1.22 is, by Ramsden's own concession, «observational in nature» — a within-trial cholesterol-change
  association, >=65-driven, and exactly the frailty/reverse-causation shape [[The U-Shaped Association Artifact]]
  warns of (low cholesterol marks the frail/dying); Ramsden's frailty adjustment is crude (weight/BP
  change) and cannot fully remove it. (b) The autopsy MI IRR 1.90 *is* a randomized between-group contrast
  and the strongest harm hint, but it rests on **half** the autopsy files (149/295) and Ramsden calls it
  provisional. Neither is a demonstrated hard-outcome harm.
- **A real intra-field friction, recorded (not adjudicated in an ingest).** Marklund/Hooper dismiss the
  old corn-oil trials as trans-fat-confounded; **Ramsden argues the opposite for MCE** — the trans-fat-rich
  margarines were in the *control/baseline* diets, «(but not the intervention diet). Thus, confounding by
  dietary trans fat is an exceedingly unlikely explanation for the lack of benefit of the intervention
  diet.» So the standard pro-LA rebuttal to MCE (trans-fat confound) is itself contested by MCE's own
  reanalysts -> [[Does Reducing Saturated Fat Reduce Cardiovascular Events]] (joined-issue 1, where this
  is filed). [@ramsden2016, Strengths and limitations]

**Symmetric standards — Ramsden gets the same bar, both directions.** *For it:* NIH-funded, **no
financial conflicts** — a cleaner COI than this page's Unilever-supported biomarker pole, so it is **not**
discounted for being contrarian; it is a real double-blind RCT with objective (all-meals-provided)
exposure. *Against it:* one trial, 1968-73, a very high LA dose in an institutionalized psychiatric/elderly
population (generalizes poorly, and Ramsden says explicitly the results «should not be generalized to nuts
or other unprocessed foods»), the full randomized dataset was **never recovered** (so no clean RCT-contrast
on mortality), heavy censoring, and the harm arms are observational/provisional. Its net contribution here
is **not a harm finding**: it firms the *RCT-side null* (LA replacement lowers cholesterol/LDL but has not
been shown to reduce hard outcomes) and supplies the archetypal **surrogate->outcome disconnect**
-> [[Surrogate Outcomes]]. No `tension` filed — the contradiction was attempted and did not hold as a
clean benefit-vs-harm clash.
[inferred from @ramsden2016; @marklund2019; @hooper2018]

**Self-critique (Ramsden MCE weave) `[run 2026-08-04, before commit]`.** *Not-joined / attempt-
contradiction:* the parameter table was built before prose, «same quantity?» = NO on all four rows, so the
anticipated benefit-vs-harm tension is NOT filed — the RCT arm is null-consistent-with-Hooper, an existing
F-refinement, not a new clash. *Overclaim / symmetric standards:* the two harm-suggestive signals are
stated at their true weight (cholesterol-death = observational/frailty, author-conceded; autopsy =
provisional, half files), not read as demonstrated harm; the randomized null is the load-bearing outcome.
*Laundered-E:* Ramsden shares the diet-heart RCT pool with Hooper (MCE is *in* Hooper), so explicitly
NOT independent-E of anything — marked shared-evidence. *Counter-passage:* Ramsden's own trans-fat
*rebuttal* (against the pro-LA dismissal) and his observational-in-nature concession both read end-to-end
and represented, so neither side is straw-manned.

## The Sydney secondary-prevention arm — the harm signal that does NOT fold the way Minnesota did `[2026-08-04]`

The **Sydney Diet Heart Study** (SDHS)
is the second recovered-data Ramsden trial: a **single-blind, parallel-group RCT** (1966-73), **458 men
aged 30-59 with a recent coronary event** (86% acute MI) — i.e. **secondary prevention** in established
CHD. The intervention (n=221) replaced SFA with **safflower-oil LA + safflower PUFA margarine**: a
**concentrated, n-6-SELECTIVE** exposure (\~74.6 g LA/100 g, **no n-3**), raising LA to \~15% E. Median
follow-up 39 months. Unlike Minnesota, the harm signal here is the **randomized ITT primary outcome
itself**, not an observational sub-analysis:

- **Serum total cholesterol fell MORE in the LA arm (-13.3% v -5.5%, P<0.001)** — the Keys-predicted
  surrogate move — yet the LA arm **died more**, three concordant borderline-significant endpoints:
  all-cause 17.6% v 11.8%, **HR 1.62 (1.00-2.64) P=0.051**; CVD 17.2% v 11.0%, **1.70 (1.03-2.80)
  P=0.037**; CHD 16.3% v 10.1%, **1.74 (1.04-2.92) P=0.036**.
  [@ramsden2013, Cumulative death rates; Table 4]
- **Within-intervention dose-response points to LA specifically:** «an increase of 5% of food energy from
  n-6 LA predicted 35% and 29% higher risk of cardiovascular death and all cause mortality» while «the
  reduction in SFA was not significantly related to any mortality outcome» — the LA rise, not the SFA
  fall, tracked death. And the cholesterol drop: «these reductions were not associated with mortality
  outcomes» — a **surrogate->outcome disconnect** even cleaner than Minnesota's (adverse, not merely
  null) -> [[Surrogate Outcomes]].
  [@ramsden2013, Association of change in PUFA and saturated fat with mortality; Reconciling results ... traditional diet-heart hypothesis]

**Attempt the contradiction — is this the secondary-prevention HARM the harm thesis wanted? Same-quantity
table first, against the pro-LA nucleus AND against Minnesota.**

| Parameter | Sydney (Ramsden 2013) | Nucleus benefit (Marklund / Li) | Minnesota (Ramsden 2016) | Same quantity? |
|---|---|---|---|---|
| Population | secondary-prevention post-MI men 30-59 | general-population adults | institutionalized psychiatric/elderly | **NO** — post-MI vs general |
| Exposure | high-dose (15%E) n-6-**selective** LA, no n-3 | LA biomarker status / dietary LA | corn-oil LA 13.2%E replacing SFA | **NO** — selective high-dose intervention vs status |
| Design / blinding | **single-blind** RCT, n=458, 63 deaths | 30-cohort IPD / 38-study SR | **double-blind** RCT, n=9570 | Sydney weaker blinding, MCE larger |
| Randomized mortality | **adverse** (HR 1.62-1.74, borderline) | benefit (obs) | **null** (5-trial MA 1.07-1.13) | opposed — but obs vs RCT NOT same quantity |

**Verdict: NO tension filed against the nucleus — but the signal is REAL and stronger than Minnesota's,
so it lands as a stratum flag, not a dismissal.** The even-handed read:

- **FOR a real signal (why it does NOT fold like Minnesota):** the harm sits in the **randomized ITT
  primary outcome**, not an observational sub-analysis (Minnesota's randomized mortality was null; its
  harm was an observational cholesterol-death HR and a half-file autopsy count). Three concordant
  endpoints, a within-arm dose-response, and the trans-fat confound runs the *wrong way* to explain it:
  the intervention **removed** common margarines/shortenings (major TFA sources), so «Restriction ... in
  the intervention group would be expected to substantially reduce consumption of trans fatty acids
  compared with the control group», and MUFA-adjusted sensitivity «did not noticeably alter» the LA-death
  relation. [@ramsden2013, Other dietary considerations] So the
  naive intervention-margarine-TFA-manufactures-harm hypothesis does **not** survive the paper's own
  evidence (caveat: Ramsden is the interested party, MUFA is an imperfect TFA proxy, TFA was never
  measured).
- **AGAINST it being a general LA-harm finding (symmetric standards):** one small (n=458, 63 deaths),
  single-blind, old trial at an **extreme** LA dose Ramsden himself will not generalize — «adverse
  effects of increasing n-6 LA from 6% of food energy to 15% ... are not necessarily generalizable to
  lower LA intakes ... [or] populations without established coronary heart disease.»
  [@ramsden2013, Limitations and strengths of the SDHS] The
  all-cause CI touches 1.00; the intervention also cut MUFA and cholesterol. **Ramsden's OWN updated MA
  pools it to non-significance:** LA-selective trials CHD mortality **1.33 (0.99-1.79) P=0.06**, CVD
  **1.27 (0.98-1.65) P=0.07** — trends, not effects. Only the secondary-prevention subset reaches
  significance («1.84 (1.11 to 3.04); P=0.02»), and it is **dominated by Sydney itself**.
  [@ramsden2013, Comparison with other RCTs and updated meta-analysis]
- **Not-joined against the nucleus (ii + F-absorption).** Sydney answers a *different* question
  (secondary-prevention, high-dose, n-6-selective) than Marklund/Li (general-population status/intake),
  so not-joined check (ii) fires — different population and intervention, a **distinction not a clash**.
  And decisively: **Hooper 2018 and Li 2020 already POOL Sydney** (Li explicitly lists it as a divergent
  adverse trial) and still net to null/benefit — so at the meta-analytic level Sydney is a *component*
  of the benefit-netting pools, not a contradictor of them (**F-absorption**). No `tension`.
- **The beyond-summary move — the n-6-selective vs mixed-PUFA distinction (type B/A).** Ramsden's MA
  identifies **PUFA composition** as «a major source of heterogeneity for all mortality outcomes»:
  n-6-**selective** trials (SDHS, Rose corn-oil, Minnesota Survey) trend **adverse**, while the four
  trials that raised **n-3 alongside n-6** show **reduced CV mortality (0.79 (0.63-0.99) P=0.04)**. So
  «benefits previously attributed to greater intake of total PUFA might be specifically attributable to
  n-3 PUFAs.» This refines the whole LA question: much of the "PUFA benefit" evidence base mixes n-3,
  and the *isolated* n-6 signal (in these old high-dose secondary-prevention trials) is at best null,
  at worst adverse. [@ramsden2013, Comparison with other RCTs and updated meta-analysis]

**The decision-relevant residue — a route-(b/c) stratum flag, INSUFFICIENT evidence, possible harm.**
For a **post-MI patient** weighing a **high-dose, n-6-selective** SFA->LA replacement (safflower/sunflower
as the near-sole fat, no n-3), the isolated evidence cell is small and its sign is adverse (Sydney's
randomized harm + the 1.84 secondary-prevention pooled subset + the OXLAM oxidative-stress mechanism,
which was strongest in Sydney's smokers/drinkers). This is **not** established harm and **not** the
general-population LA question (where the nucleus holds not-harmful + lipid benefit). It is a genuine
*insufficient-evidence, possible-harm* stratum the population-level benefit sources do not isolate — the
honest four-state reading, weighted by the person's stratum at layer 3.
[inferred from @ramsden2013; @ramsden2016; @hooper2018; @li2020]

**Type-E guard — Sydney is NOT independent corroboration of Minnesota.** Both are Ramsden recovered-RCT
reanalyses (same author, same method program); Sydney's updated MA literally **contains** the Minnesota
Coronary Survey; both feed the diet-heart RCT pool Hooper/Li already meta-analyse. So "two recovered
contrarian trials" is **one program, not two independent backings** — `[E-independent]` explicitly NOT
claimed. The two are complementary in *design position* (MCE double-blind large/null; Sydney
single-blind small/adverse), which is informative, but not independent evidence.

**Self-critique (Ramsden Sydney weave) `[run 2026-08-04, before commit]`.** *Not-joined / attempt-
contradiction:* parameter table built before prose, «same quantity?» = NO on population + exposure vs the
nucleus, and Hooper/Li already pool Sydney to null/benefit (F-absorption) — so no tension filed, matching
the Minnesota precedent. *Symmetric standards:* the harm signal is graded as genuinely stronger than
Minnesota's (randomized ITT vs observational) AND bounded (small, single-blind, extreme dose, pools to
non-significance in Ramsden's own MA) — not privileged for being contrarian nor dismissed for it; the
trans-fat confound is examined in the direction the evidence actually runs, with the interested-author
caveat kept. *Overclaim:* the residue is stated as *insufficient evidence / possible harm in a narrow
stratum*, explicitly not general-population harm and not established. *Laundered-E:* Sydney↔Minnesota
non-independence stated outright (shared author/method, MA-containment). *Counter-passage:* Ramsden's own
generalizability limits, non-significant pooled MA, and trans-fat sensitivity all read end-to-end and
represented against his headline.

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

- **Five sources now held (observational biomarker + RCT MA + mortality SR+MA + inflammation RCT SR +
  recovered RCT), confidence stays `low`.** Marklund (gold IPD cohort pool) + Hooper 2018 (gold Cochrane
  RCT MA) + Li 2020 (high SR+MA, dietary + biomarker mortality) + Johnson 2012 (high RCT SR, inflammation
  markers) + Ramsden 2016 (high recovered RCT + MA). Ramsden firms the **RCT-side null** on hard outcomes
  (LA replacement lowers cholesterol but has not been shown to reduce CHD/all-cause death) and supplies
  the surrogate->outcome disconnect, but it does not establish harm and does not move the confidence
  (which is about the CVD/mortality *benefit*). Johnson
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
- **The contrarian pole is now HELD (Ramsden MCE 2016) — and no tension was filed, because the
  contradiction did not hold.** Marklund pre-empted the recovered corn-oil trials as *«hampered by their
  short duration, small numbers of events, substantial dropout, and confounding by industrial trans
  fats.»* [@marklund2019, Background] With
  Ramsden 2016 now ingested (*The recovered-RCT contrarian pole* above), the anticipated
  biomarker-benefit-vs-recovered-RCT-**harm** tension **fails the same-quantity check**: MCE's randomized
  mortality contrast is a **null** (5-trial MA: CHD-mortality 1.13, all-cause 1.07 — the same
  little-or-no-effect as Hooper's pool, which already contains MCE), not a harm. The harm-suggestive
  signals are observational (cholesterol-death HR 1.22, frailty-shaped) or provisional (autopsy IRR 1.90,
  half files). Note Ramsden also *rebuts* Marklund's own trans-fat-confound dismissal for MCE specifically
  (trans fat was in the control, not the intervention). So the recovered-RCT pole firms the **RCT-side
  null**, not harm.
  - Ramsden Sydney Diet Heart — **CASHED 2026-08-04** — woven above (*The Sydney
    secondary-prevention arm*). The check resolved: its harm signal is **genuinely stronger** than MCE's
    (randomized ITT primary outcome, not observational), so it does NOT fold the way Minnesota did — but
    it is one small single-blind high-dose n-6-selective trial that pools to non-significance (Ramsden's
    own MA) and is already absorbed into Hooper/Li's benefit-netting pools. Lands as a
    secondary-prevention / n-6-selective **stratum flag** (insufficient evidence, possible harm) + the
    n-6-selective-vs-mixed-PUFA distinction. NOT independent-E of MCE (same Ramsden program). No tension.
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
  - The recovered-RCT-harm arm (Ramsden Minnesota **and** Sydney reanalyses) is now **fully ingested**
    (both woven above). Net: MCE randomized-null; Sydney randomized-adverse but small/single-blind/
    high-dose/n-6-selective and pooled to non-significance. No general-population harm signal survived
    (Hamley found none either); the surviving contrarian residue is a secondary-prevention /
    n-6-selective **stratum flag**, not a harm finding. The open lever now is Mendelian-randomisation
    (the design that would move the observational benefit to causal), not another recovered trial.

## References

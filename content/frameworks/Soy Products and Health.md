---
type: framework
question: Do soy products change a patient-important outcome, are the feared hormonal / breast-cancer / cholesterol effects real, and do the forms (whole / fermented / isolated protein) differ?
aliases: [Soy, Soybeans, Soyfoods, Tofu, Edamame, Soy Milk, Soymilk, Isoflavones, Genistein, Daidzein, Soy Protein, Soy Protein Isolate, Tempeh, Miso, Natto, Fermented Soy, Phytoestrogens, Soy Sauce, Tamari]
authors: [Reed, Katharine E; Camargo, Juan; Hamilton-Reeves, Jill; Kurzer, Mindy; Messina, Mark; Chen, Meinan; Rao, Yanhua; Zheng, Yi; Wei, Shiqing; Li, Ye; Guo, Tong; Anderson, James W; Johnstone, Bryan M; Cook-Newell, Margaret E; Blanco Mejia, Sonia; Jenkins, David JA]
sources: [Reed - Soy Isoflavones Male Reproductive Hormones MA 2021, Chen - Soy Isoflavone Breast Cancer Pre Postmenopausal MA 2014, Anderson - Soy Protein Serum Lipids Meta-Analysis 1995, Blanco Mejia - Soy Protein Serum Lipids 2019]
cluster: soy
nucleus: true
confidence: medium
relationships:
  related_to:
    - Protein Quality and the DIAAS Score
    - Antinutrients in Plant Foods
    - Is the Food Category Doing Any Work
    - LDL ApoB and Cumulative Exposure
    - Fermented Foods
    - Surrogate Outcomes
    - Soy Isoflavones and Cognitive Function
created: 2026-08-05
updated: 2026-09-04
self_critiqued: 2026-08-26
---

**Nucleus of the `soy` cluster** — the canonical page for what soy does to patient-important
outcomes, whether the feared effects are real, and how the forms differ. Facets (thyroid,
natto/K2-bone, phytate handling) attach here.


## The reframe — not "is soy good or bad?" but three fears under symmetric standards

The public question is polarized between *soy feminizes men / causes breast cancer* and *soy is a
superfood*. Neither pole is the decision. The wiki holds a **health** axis only and applies the
**same appraisal bar to the fear and to the boast** — a favourable result buys no exemption, an
alarming one no free pass. Three fears are separable and each resolves to a direction + magnitude +
certainty, not to *it's complicated*:

- **Hormonal** (isoflavones as phytoestrogens -> feminization in men) — **refuted**, a well-powered
  null [@reed2021].
- **Breast cancer** — **neutral-to-protective, and conditional on menopausal status, population and
  study design** [@chen2014].
- **LDL cholesterol** — modest **lowering** via the **isolated soy-protein** form; the best current
  intrinsic estimate is **\~3% (−4.76 mg/dL)** at \~25 g/d [@blancomejia2019], a downward revision of the dated \~13% figure
  [@anderson1995]. A **surrogate** — the events
  benefit is inferred through [[LDL ApoB and Cumulative Exposure]], not measured.

Thyroid (goitrogen) and antinutrient (phytate) fears are **named gaps** below — not searched here,
so neither asserted nor dismissed.

## Why the hormonal null is mechanistically expected — isoflavones are SERMs, not estrogen

Isoflavones (genistein, daidzein) have a structure similar to estrogen but **preferentially bind and
activate ERβ**, whereas estrogen has roughly equal affinity for ERα and ERβ; because the two
receptors have different tissue distributions and can exert opposite effects, isoflavones act
tissue-selectively and are classified as **selective estrogen-receptor modulators (SERMs)**
[@reed2021]. So a naive
*phytoestrogen = estrogen* inference is the wrong model, and the human null below is what the
mechanism predicts — *mechanism carries directional weight* here, but the outcome evidence, not the
mechanism, is what settles it (net-effect-not-intended).

## Fear 1 — HORMONAL: a genuine null, not "insufficient evidence"

Reed 2021 meta-analyzed the clinical data on whether soy or isoflavone intake moves male reproductive
hormones — total testosterone (TT), free testosterone (FT), estradiol (E2), estrone (E1), sex
hormone-binding globulin (SHBG): 41 studies; TT and FT measured in 1753 and 752 men, E2 and E1 in
1000 and 239, SHBG in 967
[@reed2021].

- effect_measure: standardized mean difference (SMD), random-effects. **Total testosterone** SMD
  −0.06 (95% CI −0.29 to 0.17; P=0.59; 20 groups, 1241 men, treatment-vs-control); change-over-time
  0.09 (−0.02 to 0.20; P=0.12). **Free testosterone** 0.01 (−0.33 to 0.32; P=0.98). **SHBG** −0.03
  (−0.45 to 0.38; P=0.88). E2 and E1: no significant effect on any model.
  [@reed2021]
- population_and_comparator: adult men consuming soyfoods / soy protein (SPI, SPC) / isoflavone
  extracts, vs control (usually animal protein or usual diet).
- outcome: circulating reproductive hormones — a **surrogate**, not a patient-important outcome (the
  feared endpoints are fertility/feminization; hormone levels stand in for them) -> [[Surrogate Outcomes]].
- dose_response_shape: **no dose or duration effect** — sub-analysis by isoflavone dose (<75 vs ≥75
  mg/d) and by study duration (≤12 vs >12 weeks) showed no effect; none of the four ≥12-month studies
  found an effect on testosterone.
  [@reed2021]
- certainty: **high for the TT null specifically** — n=1753, SMD −0.06 with a tight CI (−0.29 to
  0.17) that excludes a meaningful effect, low heterogeneity (I2 30% on the change-over-time model),
  no funnel-plot publication bias, superseding and confirming a 2010 MA. **FT is only moderate**: its
  CI (−0.33 to 0.32) does *not* exclude a small effect in either direction (n=752 — an imprecise
  estimate, not a tight null). E1/E2 rest on smaller samples (239/1000). The author's sweeping summary
  «neither soy protein nor isoflavone exposure affects TT, FT, E2 or E1 levels in men» is best read as
  carried by the TT endpoint [@reed2021].

**This is a null, not a gap — most firmly for testosterone.** Apply the expectancy test: if soy
lowered *testosterone*, a 41-study MA measuring TT in 1753 men, powered to detect it, would have. It
did not, across every model, dose, and duration — that is *evidence of no meaningful effect* on the
endpoint the feminization fear is actually about, one of the four evidence states, not *unproven*. The
estradiol/estrone arms are consistent with no effect but less tightly bounded. The feared cases
(gynecomastia, hypogonadism) involved intakes near 360 mg/d isoflavones, roughly nine times a
*typical* native-Japanese intake (\~30-50 mg/d) — outside the range achievable from foods
[@reed2021].

**Provenance caveat (symmetric standards):** the corresponding author (Messina) and one co-author
work in soy-industry-adjacent nutrition consultancy. The null is nonetheless robust — low
heterogeneity, no funnel-plot asymmetry, a pre-existing 2010 MA reaching the same result, and it
runs *toward* the direction a SERM mechanism predicts — so the finding is not carried by the
framing. But the source is flagged, not exempt.

## Fear 2 — BREAST CANCER: neutral-to-protective, conditional, and study-design-confounded

Chen 2014 pooled 35 epidemiological studies (odds ratios, high-vs-low isoflavone intake), stratified
by **menopausal status** and study region/design
[@chen2014].

| Stratum | Premenopausal OR (95% CI) | Postmenopausal OR (95% CI) |
|---|---|---|
| Summary | 0.74 (0.64–0.85) | 0.75 (0.63–0.86) |
| Asian countries | 0.59 (0.48–0.69) | 0.59 (0.44–0.74) |
| Western countries | 0.90 (0.77–1.04), NS | 0.92 (0.83–1.00), marginal |

[@chen2014]

- **The pooled protection is carried by the weaker designs (read this before the headline number).**
  The summary OR \~0.75 is **confounded by study design**: prospective cohort / nested case-control
  studies — the stronger designs — showed **no** significant protection (premenopausal cohorts OR
  0.94, 0.74–1.14; postmenopausal cohorts 0.86, 0.73–1.00 — borderline, upper bound touching the
  null), while the inverse association came from retrospective **case-control** studies, whose
  **recall and selection biases** systematically inflate a diet-disease association. So the \~25%
  reduction is a case-control-driven figure, not a cohort-confirmed one. This is a *weaker-design
  inflates the favourable arm* pattern (a cousin of the artifact-arm problem on
  [[The U-Shaped Association Artifact]], though the mechanism here is recall/selection bias, not
  unequal reporting precision). [@chen2014]
- **Direction:** inverse (protective) or neutral — **never a raised risk** in any stratum.
- **Population-conditional:** in Western women (pre- or post-menopausal) the marginal Western signal
  vanished once stratified by design — Chen concludes there is no evidence of an association in
  Western women, attributing the Asian protection to **early-life and higher lifelong intake** rather
  than to adult supplementation. Transportability caveat: the protective estimate is an Asian /
  lifelong-exposure finding, not a promise for a Western adult adding soy.
- **certainty:** low-to-moderate — observational, heterogeneous (I2 up to 84%), publication bias
  detected (Egger), and the strongest designs are null. The defensible claim is **"not a risk, and
  plausibly protective under lifelong high intake,"** not "soy prevents breast cancer."

## Fear 3 — LDL CHOLESTEROL: modest lowering, baseline-dependent, via isolated soy protein

Anderson 1995 — the landmark MA of 38 controlled trials substituting soy protein (mean 47 g/d) for
animal protein
[@anderson1995]:

- effect_measure (absolute, net vs control diet): total cholesterol −23.2 mg/dL (−9.3%); **LDL −21.7
  mg/dL (−12.9%)**; triglycerides −13.3 mg/dL (−10.5%); HDL non-significant (+2.4%).
  [@anderson1995]
- dose_response_shape: the soy-diet-alone model estimated 25 / 50 / 75 g/d -> cholesterol decreases of
  8.9 / 17.4 / 26.3 mg/dL — roughly monotone over the studied range, no knee located.
  [@anderson1995]
- effect_modifiers: **baseline risk (route (a))** dominates — initial cholesterol accounted for \~77%
  of between-study variance. Normal (<200 mg/dL): non-significant −3.3%; severe hypercholesterolemia
  (>335 mg/dL): −19.6%. The lever is real mainly for people who already have high cholesterol.
  [@anderson1995]
- population_and_comparator: **isolated or textured soy protein replacing animal protein** — whole
  soybeans were *excluded* from the analysis. This is the specify-the-exposure catch: the LDL evidence
  is for the isolated-protein form, not for tofu/edamame, and not for soy sauce
  -> [[Is the Food Category Doing Any Work]].
- outcome: LDL/total cholesterol — a **surrogate** for ASCVD; its causal transmission to events is
  the [[LDL ApoB and Cumulative Exposure]] claim, not assumed here.

### The magnitude is revised DOWN — Blanco Mejia 2019 (`type-F` refinement of the Anderson leg)

Blanco Mejia 2019 re-pooled the **46 soy-protein RCTs the FDA compiled** to decide whether to *revoke*
the soy heart-health claim (43 with data; 41 for LDL / 50 comparisons, 43 for TC / 52 comparisons;
2607 participants). At a **median dose of 25 g/d** over a **median 6 wk**, soy protein (79% isolated,
vs mostly dairy-protein controls) lowered:

- **LDL by −4.76 mg/dL (−0.12 mmol/L); 95% CI −6.71, −2.80; = −3.2% (95% CI −4.5, −1.9%)**; I2=55%,
  no publication bias, no subgroup effect modification, and **no dose-response or threshold** located
  (the studied dose range was narrow) [@blancomejia2019].
- **TC by −6.41 mg/dL (−0.17 mmol/L); 95% CI −9.30, −3.52; = −2.8% (95% CI −4.1, −1.5%)**; I2=74%
  [@blancomejia2019].
- The abstract states the effect as *«approximately 3-4%»* LDL lowering
  [@blancomejia2019].

This is **F (claim-refinement), not E (independent backing):** both are meta-analyses pooling
soy-protein RCTs on the *same* surrogate, over an **overlapping trial pool** (Blanco cites Anderson as
ref 70 and compares directly), so they are the **same route re-estimated**, not two independent routes
converging — no confidence bump is bought by their agreement.

**Parameter table — why the two magnitudes differ (BLOCKING before the comparison prose):**

| Parameter | Blanco Mejia 2019 (chunk 01) | Anderson 1995 (chunk 01) | Same quantity? |
|---|---|---|---|
| LDL net change vs control | −4.76 mg/dL (−0.12 mmol/L); −3.2% | −21.7 mg/dL (0.56 mmol/L); −12.9% | Same **measure** (net between-group MD on LDL, matched-protein control), but NO on the overall figure — confounded by dose + baseline (below) |
| TC net change vs control | −6.41 mg/dL (−0.17 mmol/L); −2.8% | −23.2 mg/dL (0.60 mmol/L); −9.3% | same measure; differs by dose + baseline |
| Soy dose | median **25 g/d** (IQR 23.8, 38.1) | mean **47 g/d** (range 17-124) | **NO** — Anderson \~2x the dose |
| Baseline population | LDL 110-201 mg/dL, mean 147.6 (borderline) | wide, incl. severe hypercholesterolemia (>335); baseline drove \~77% of variance | **NO** — Anderson spans much higher (more responsive) baselines |
| Comparator | non-soy protein (72% dairy) | animal protein, fat/SFA/cholesterol-matched in most | \~yes (both matched-protein = "intrinsic") |
| Exposure form | 79% ISP + soy foods/milk | isolated/textured SP; whole soybeans excluded | \~yes (predominantly isolated protein) |

**Reconciliation.** The overall Anderson −12.9% and Blanco −3.2% are **not the same quantity**:
Anderson pooled both **higher doses and higher-baseline populations**, and both inflate the effect
(dose-response + the route-(a) baseline dependence Anderson itself found). Matched at Blanco's
population, the gap largely closes — Anderson's own **normal-baseline (<200 mg/dL) quartile was NS
−3.3% cholesterol** (LDL Q1 −7.7%), and its **25 g/d dose-model point was −8.9 mg/dL TC** (vs Blanco's
−6.41). So the downward revision is partly a genuine update (a cleaner FDA-identified set, no
detectable dose-response) and partly **explained by lower dose + lower baseline**, not a contradiction
[inferred from @blancomejia2019; @anderson1995]. Both MAs agree on **direction** and on **baseline-amplification**.

**Intrinsic vs extrinsic (a decision-relevant distinction, `type-B`).** Blanco's pooled effect is the
**intrinsic** effect (soy vs a matched-protein control). The real-world effect adds an **extrinsic /
displacement** component when soy *replaces* saturated-fat-rich animal protein — «The overall effect
in real life could be potentially higher than that seen in these trials» — an NHANES-III estimate put
the displacement advantage of 25 g/d soy for animal protein at \~4.3% additional LDL lowering
[@blancomejia2019]. So the trial figure is a floor
for a **substitution** framing (layer-3), not the ceiling.

**Surrogate bounding (the sharp point).** LDL/TC are **surrogates** — Blanco reports **no hard
cardiovascular outcomes**, calling them *«surrogates of CVD»*. The events benefit of a −0.12 mmol/L
LDL reduction is *inferred* through the cumulative-exposure causality on [[LDL ApoB and Cumulative Exposure]], never measured here — and in absolute terms **0.12 mmol/L is a small LDL move** beside a
standard drug lever (a statin lowers LDL \~1.5-2 mmol/L), so soy protein sizes as a **small,
non-substitutable-for-a-drug lever** on this outcome (layer-1). The intrinsic effect is real,
directionally certain, and modest.

**Mechanism (proposed, not established).** Blanco attributes the intrinsic effect to the **7S globulin
fraction** of soy protein (shared with other legumes), which *«appears to inhibit hepatic Apo B
synthesis»*; isoflavones are judged a *«less likely»* contributor to the lipid effect
[@blancomejia2019] `[EXTRACTED — asserted]`. This
is a mechanistic proposal with directional weight, not an outcome finding.

**Two live caveats (symmetric standards):**

- **The 1995 magnitude is superseded.** Anderson's \~13% LDL figure was DATED and industry-funded
  (Protein Technologies International, lead author on its advisory group); **treat Blanco Mejia's \~3%
  intrinsic effect at \~25 g/d as the current estimate**, holding Anderson for the baseline-dependence
  and dose structure it still supplies. Blanco is itself soy/food-industry-entangled (co-author
  Messina directs the Soy Nutrition Institute) — but it runs *against* sponsor interest by **shrinking**
  the claim, on a gold FDA-identified set with no funnel-plot asymmetry, so the direction is not
  carried by the framing. Both favourable-industry results get *more* scrutiny, not less
  [@blancomejia2019].
- The mechanism was not established in either MA; Anderson notes primate data attributing 60–70% of
  the effect to soy estrogens (isoflavones), but this is animal-derived and speculative, and Blanco
  judges the isoflavone route the *less likely* one
  [@anderson1995].


## The forms are NOT interchangeable — specify the exposure

"Soy" names several different exposures with different active fractions and different evidence
(a terminological disambiguation with decision consequences, `type-B`):

- **Isolated / textured soy protein** — the **LDL-lowering** form (Anderson's exposure); high-DIAAS
  complete plant protein -> [[Protein Quality and the DIAAS Score]].
- **Whole / minimally processed (tofu, edamame, soy milk)** — the isoflavone + complete-protein
  workhorse; carries the hormone/cancer evidence (foods, not isolates).
- **Fermented (miso, tempeh, natto)** — lower phytate (fermentation defuses the antinutrient
  concern -> [[Antinutrients in Plant Foods]]); **natto is a notably rich dietary source of vitamin
  K2 (MK-7)** (a widely-reported compositional fact; whether the MK-7 moves a bone or
  vascular outcome is the GAP below). Cross-links [[Fermented Foods]] for the live-culture question,
  but the soy matrix lives here.
- **Soy sauce / tamari** — a condiment and salt vehicle with **negligible isoflavone dose**; do not
  credit it with soy's effects. A specify-the-exposure catch.

## Synthesis — soy's evidence is unusually FORM-dependent

Placing the three MAs side by side yields a move present in no single source (`type-A`): each fear was
tested with a **different soy exposure** — Reed pooled soyfoods + isolates + isoflavone extracts on
hormones, Chen pooled dietary-isoflavone epidemiology on cancer, Anderson isolated *only* the isolated
soy-protein form on lipids and *excluded* whole soybeans. So the composite answer is not "soy does X"
but a **form-indexed** one: the isolated protein moves LDL, the isoflavone-bearing foods leave male
hormones unmoved and sit neutral-to-protective on breast cancer, and the condiment does nothing. This
is [[Is the Food Category Doing Any Work]] instantiated — the category "soy" is too coarse to carry a
single verdict, and the better-designed evidence tracks the better-specified exposure.

The three sources answer **three different outcomes** (hormones · cancer · lipids), so they are
**facets of this nucleus, not a tension** — no joined issue, no forced independent-backing claim. The
lipids outcome now rests on **two MAs, but F-related** (Blanco Mejia refines Anderson's magnitude on
an overlapping trial pool — not independent E), so confidence stays `medium` overall (four gold-tier
MAs, but each outcome effectively single-route, and the LDL/TC endpoints are surrogates).


## One axis only

This page holds a **health** axis. Soy also carries environmental (low-footprint protein) and
economic loads and is entangled with the animal-feed / deforestation debate; the wiki records only
*that* those trade-offs exist and does not price them against the health finding.

<div class="recent-update" data-last-updated="2026-09-05">

## Facets held elsewhere

- **Cognition (a fourth outcome) — HELD.** Supplemental soy isoflavones produce a small, memory-carried
  benefit on neuropsychological test scores; the earlier tofu-harm scare does not survive confounding
  scrutiny; and the observational isoflavone-cognition signal is null. The full appraisal — the Cui 2020
  RCT MA effect estimates, the tofu-harm rebuttal, and why the RCT/observational split is a distinction
  rather than a tension — lives on [[Soy Isoflavones and Cognitive Function]]. The ERβ-SERM mechanism
  above is the same one invoked there for the memory-domain specificity.

</div>

## Gaps and held threads

- **LDL magnitude — CASHED (Blanco Mejia 2019 held).** The intrinsic effect is \~3% (−4.76 mg/dL) at
  \~25 g/d, revising Anderson's \~13% downward; see Fear 3. Remaining LDL gap: **no hard CVD-outcome
  trial** of soy protein — the events benefit stays inferred through [[LDL ApoB and Cumulative Exposure]]. `G (needs a soy -> ASCVD-events trial, which does not exist)`.
- **Thyroid (goitrogen)** — GAP, not searched. Prior (to test, not asserted): mild goitrogen only
  under iodine deficiency; in euthyroid, iodine-replete people likely no clinically important harm
  (may modestly raise levothyroxine dose needs — an absorption/timing issue). `AWAITS a soy-thyroid
  SR/MA conditioned on iodine status.`
- **Antinutrient / phytate** — the mineral-binding concern is handled at [[Antinutrients in Plant Foods]] (reduced by fermentation/soaking; a marginal-mineral-status issue, not a general harm); no
  soy-specific outcome evidence extracted here.
- **Natto / vitamin K2 (MK-7) -> bone and vascular calcification** — GAP. `AWAITS a natto/MK-7 bone
  or CVD outcome SR/MA` (cross-links [[Fermented Foods]]).
- **Prostate cancer, menopausal symptoms, bone density** — named in the deliverable scope, no source
  held. GAP.
- **Soy in ER-positive breast-cancer survivors (the genistein / tamoxifen-interaction fear)** — a
  prominent clinical worry that dietary isoflavones might stimulate estrogen-receptor-positive tumour
  growth or blunt tamoxifen. Not adjudicated here (Chen covers incidence, not survivors). GAP.
  `AWAITS a soy-and-breast-cancer-survival / isoflavone-tamoxifen SR.`
- **Absolute breast-cancer risk reduction** — Chen reports relative ORs only; the absolute benefit
  depends on baseline incidence in the stratum, which the MA does not supply. `G (needs aggregation)`.

## References

---
type: framework
question: Do soy products change a patient-important outcome, are the feared hormonal / breast-cancer / cholesterol effects real, and do the forms (whole / fermented / isolated protein) differ?
aliases: [Soy, Soybeans, Soyfoods, Tofu, Edamame, Soy Milk, Soymilk, Isoflavones, Genistein, Daidzein, Soy Protein, Soy Protein Isolate, Tempeh, Miso, Natto, Fermented Soy, Phytoestrogens, Soy Sauce, Tamari]
authors: [Reed, Katharine E; Camargo, Juan; Hamilton-Reeves, Jill; Kurzer, Mindy; Messina, Mark; Chen, Meinan; Rao, Yanhua; Zheng, Yi; Wei, Shiqing; Li, Ye; Guo, Tong; Anderson, James W; Johnstone, Bryan M; Cook-Newell, Margaret E; Blanco Mejia, Sonia; Jenkins, David JA; Nachvak, Seyed Mostafa; Sadeghi, Omid]
sources: [Reed - Soy Isoflavones Male Reproductive Hormones MA 2021, Chen - Soy Isoflavone Breast Cancer Pre Postmenopausal MA 2014, Anderson - Soy Protein Serum Lipids Meta-Analysis 1995, Blanco Mejia - Soy Protein Serum Lipids 2019, Nachvak - Soy Isoflavones Protein Mortality Meta-Analysis 2019]
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
updated: 2026-09-08
self_critiqued: 2026-09-08
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

<div class="recent-update" data-last-updated="2026-09-08">

## The mortality cell — soy / isoflavones / soy protein x all-cause, cancer, CVD, breast cancer (Nachvak 2019)

The three fears above are surrogate-or-incidence outcomes; this is the **direct patient-important
outcome** the page previously left blank. Nachvak 2019 is a gold-tier SR + dose-response MA of **23
prospective cohorts** (330,826 participants; 26,900 all-cause, 11,005 cancer, 13,418 CVD deaths;
published 2002-2018) that keeps the **three exposures distinct** — whole soy/soy products, soy
isoflavones, soy protein — against **four endpoints**. All estimates are highest-vs-lowest pooled RR,
random-effects, **observational** [@nachvak2019soy].

**Do not collapse the three forms into "soy" — the matrix (`type-B`):**

| Exposure | All-cause | Cancer (total) | CVD | Breast cancer |
|---|---|---|---|---|
| **Whole soy / soy products** | 0.90 (0.77-1.04) **null** overall; inverse only in higher-quality subgroups | **0.88 (0.79-0.99)** ✓ (soy/soy-products); total-soy 0.90 (0.81-1.00) marginal; soy-specific foods 0.99 null | **0.85 (0.72-0.99)** ✓ (soy/soy-products); total-soy 0.91 (0.81-1.03) null; soy-specific 1.03 null | not pooled for whole soy |
| **Soy isoflavones** | **0.90 (0.82-0.98)** ✓ categorical; linear +10 mg/d **0.98 (0.94-1.01) null** | **0.80 (0.67-0.94)** ✓; linear +10 mg/d **0.93 (0.89-0.98)** ✓ (−7%) | 0.98 (0.90-1.06) **null**; linear null | **0.83 (0.69-0.99)** ✓; linear +10 mg/d **0.91 (0.84-0.99)** ✓ (−9%); ER− 0.77 ✓, ER+ 0.82 null |
| **Soy protein** | 1 study only — **not poolable** | (all cancer effect sizes were breast cancer) → | 0.99 (0.84-1.17) **null**; dose-response null | **0.73 (0.55-0.96)** ✓; linear +5 g/d **0.88 (0.83-0.93)** ✓ (−12%, I²=7.4%); ER+ 0.75 ✓, ER− 0.77 ✓ |

[@nachvak2019soy]

**Whole soy, cancer-site-specific (total soy, highest-vs-lowest):** gastric **0.49 (0.35-0.68)**, lung
**0.79 (0.71-0.87)**, colorectal **0.59 (0.41-0.84)** all inverse; hepatic 0.89 (0.71-1.12) null.
Ischemic CVD **0.79 (0.63-0.99)** inverse; stroke 0.87 (0.73-1.04) null
[@nachvak2019soy].

### Four caveats that bound every cell — read before the headline "soy for longevity"

Nachvak's own conclusion is that soy «may support the current recommendations to increase intake of
soy for greater longevity», but it pairs that with «However, soy protein was not signiﬁcantly
associated with all-cause and CVDs mortal- ity»
[@nachvak2019soy]. Four structural
caveats matter more than the boast:

- **The all-cause signal for whole soy is NULL overall, significant only in the "high-quality"
  subgroups.** «this signiﬁcant association for all-cause mortality was observed only in the
  high-quality studies (studies with sample size 10,000 participants and those that presented
  energy-adjusted effect sizes)»
  [@nachvak2019soy]. A subgroup that
  becomes significant after the full-set null is a *hypothesis*, not a confirmed effect — the headline
  all-cause benefit for soy foods is not carried by the primary pooled estimate (0.90, P=0.16).
- **Categorical-significant, but the LINEAR per-mg dose-response is null (isoflavone → all-cause).**
  The highest-vs-lowest contrast is 0.90 (✓, P=0.02) and a *nonlinear* inverse relationship was
  significant (P for nonlinearity=0.04), yet the **linear** +10 mg/d dose-response is null: 0.98
  (0.94-1.01, P=0.17). So there is no clean per-mg gradient — the effect is not linear-dosable and a
  per-mg isoflavone target is not derivable. Nachvak explicitly cautions «Overall, caution in the
  interpretation of ﬁndings from the doseeresponse analysis is required»
  [@nachvak2019soy], the
  dose-response models being «only empowered to detect massive associations»
  [@nachvak2019soy]. Where a cell
  IS both categorical- and linear-significant (isoflavone → cancer −7%/10 mg, 0.93 (0.89-0.98);
  isoflavone → breast-cancer −9%/10 mg, 0.91 (0.84-0.99); soy-protein → breast-cancer −12%/5 g, 0.88
  (0.83-0.93)) the claim is firmer, but still over the studied range only.
- **The breast-cancer-mortality cell is a SURVIVOR endpoint, not primary prevention (`type-A`, the
  cross-cell observation the flat abstract hides).** Every study feeding the isoflavone → breast-cancer
  and soy-protein → breast-cancer cells is a **breast-cancer patient/survivor cohort** measuring
  *post-diagnosis* intake against *survival* (Conroy, Nechuta, Shu, Boyapati, Kang, Zhang) — Nachvak
  even folds Shu's relapse deaths into the endpoint: «we considered risk estimates on relapse/breast
  cancer-speciﬁc mortality as breast cancer mortality»
  [@nachvak2019soy]. So the
  \~12%/5 g soy-protein and \~9%/10 mg isoflavone breast-cancer figures answer *"does soy intake improve
  survival in women already diagnosed?"*, NOT *"does soy prevent breast-cancer death in the general
  population?"* — and reverse causation (sicker patients eat/report differently) is un-excluded in a
  survivor cohort. This directly cashes the page's ER-positive-survivor / tamoxifen-interaction gap
  (below): the survivor evidence is **protective-or-neutral in BOTH ER strata for soy protein** and
  **ER-negative-only for isoflavones** — no raised risk in any stratum, contra the stimulate-the-tumour
  fear. [inferred from @nachvak2019soy]
- **Transportability + a publication-year split the authors discount.** 19 of 23 cohorts are Asian
  [@nachvak2019soy], where habitual
  soy intake is far above Western levels — the estimate is an Asian/high-lifelong-intake finding, the
  same transportability caveat the Chen breast-cancer leg carries. Year of publication was one of two
  subgroups that explained the whole-soy all-cause heterogeneity: the protective association held in
  studies published up to 2010 (0.77, 0.69-0.86) but not 2010-and-later (1.06, 0.93-1.21)
  [@nachvak2019soy], and
  Nachvak invokes Kicinski's mechanism — «the amount of overrepresentation of ﬁndings that are
  favorable to treatment is larger in older studies ... found protective effects for soy intake in
  studies published up to 2010, but not for those studies that were published during the year 2010 and
  later» [@nachvak2019soy]. But the
  authors' own bottom line **discounts** it: «Overall, it seems that publication year has a low effect
  on the overall estimates in the current meta-analysis»
  [@nachvak2019soy]. Isoflavones ran
  the opposite way (protective effects mostly in 2010-and-later studies). Reading the pre-2010
  confinement as a decline-effect artifact is a *possible* interpretation the authors do not endorse
. All cells are observational: «we cannot rule out the possible effect of residual
  confounding» [@nachvak2019soy].

**Layer-1 read.** On the *direct mortality* outcome soy is a **small, form-dependent, observational**
lever: the firmest cells are whole-soy/soy-products → cancer (0.88) and → CVD (0.85) mortality and the
dosed isoflavone → cancer (−7%/10 mg) arm; the all-cause benefit is soft (null overall for foods,
dose-null for isoflavones); soy protein moves only a survivor breast-cancer endpoint and is null on
all-cause/CVD. No cell is a big rock, and none rests on a causal design — a reason to eat soy without
fearing it, not a longevity lever to chase.

</div>

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

## Facets held elsewhere

- **Cognition (a fourth outcome) — HELD.** Supplemental soy isoflavones produce a small, memory-carried
  benefit on neuropsychological test scores; the earlier tofu-harm scare does not survive confounding
  scrutiny; and the observational isoflavone-cognition signal is null. The full appraisal — the Cui 2020
  RCT MA effect estimates, the tofu-harm rebuttal, and why the RCT/observational split is a distinction
  rather than a tension — lives on [[Soy Isoflavones and Cognitive Function]]. The ERβ-SERM mechanism
  above is the same one invoked there for the memory-domain specificity.


<div class="recent-update" data-last-updated="2026-09-08">

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
- **Soy in ER-positive breast-cancer survivors (the genistein / tamoxifen-interaction fear)** —
  PARTLY CASHED (Nachvak 2019). The survivor-cohort breast-cancer-mortality cells run *protective or
  neutral in BOTH ER strata* for soy protein (ER+ 0.75, ER− 0.77, both ✓) and ER-negative-only for
  isoflavones (ER− 0.77 ✓, ER+ 0.82 null) — **no raised mortality in any stratum**, contra the
  stimulate-the-tumour worry [@nachvak2019soy].
  RESIDUAL: this is observational post-diagnosis survival with un-excluded reverse causation, and it
  does NOT directly test the *tamoxifen-interaction* mechanism (concurrent-endocrine-therapy
  subgroups not isolated). `AWAITS a soy/isoflavone x tamoxifen interaction SR` for the mechanism leg.
- **Absolute breast-cancer risk reduction** — Chen reports relative ORs only; the absolute benefit
  depends on baseline incidence in the stratum, which the MA does not supply. `G (needs aggregation)`.

</div>

## References

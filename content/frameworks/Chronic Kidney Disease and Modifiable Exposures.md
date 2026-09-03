---
type: framework
question: Which modifiable lifestyle exposures reduce the risk of new-onset chronic kidney disease in a reasonably-healthy person, by how much, for whom, and how confident can we be?
aliases: [CKD Prevention, Modifiable Risk Factors for CKD, Lifestyle and Kidney Disease Risk, Preventing Chronic Kidney Disease, Diet Physical Activity and CKD]
authors: [He, Ling-Qiong; Wu, Xu-Hong; Huang, Yi-Qian; Zhang, Xiao-Yan; Shu, Long; Seidu, Samuel; Abdool, Mohammad; Almaqhawi, Abdullah; Wilkinson, Thomas J; Kunutsor, Setor K; Khunti, Kamlesh; Yates, Tom; Kelly, Jaimon T; Su, Guobin; Zhang, La; Qin, Xindong; Marshall, Skye; Gonzalez-Ortiz, Ailema; Clase, Catherine M; Campbell, Katrina L; Xu, Hong; Carrero, Juan-Jesus]
sources: [He - Dietary Patterns Chronic Kidney Disease Risk SR 2020, Seidu - Physical Activity Chronic Kidney Disease Risk Meta-Analysis 2023, Kelly - Modifiable Lifestyle Factors CKD Prevention 2020]
nucleus: true
cluster: chronic-kidney-disease
confidence: low
created: 2026-08-28
updated: 2026-08-29
self_critiqued: 2026-08-29
relationships:
  related_to:
    - Obesity and Chronic Kidney Disease Risk
    - Protein Intake and Kidney Function
    - Semaglutide and Kidney Outcomes in Chronic Kidney Disease
    - Measurement Error in Dietary Assessment
    - The U-Shaped Association Artifact
    - The Observational-Trial Discordance
    - Physical Activity Dose and Mortality
    - Baseline Risk and the Relative-Absolute Split
    - Layer 1 - Ranking Interventions for a Stratum
    - Shared Modifiable Levers Across Age-Related Diseases
---

<div class="recent-update" data-last-updated="2026-08-28"></div>

**The decision this page serves.** For a reasonably-healthy person, which lifestyle levers lower the
risk of *developing* chronic kidney disease (CKD) — and how do they rank against each other? CKD is
common, largely silent until late, and on the prevention (not treatment) side of scope. This is the
**nucleus** clustering the modifiable-exposure -> CKD-incidence levers; drug treatment of established
CKD and per-person dosing stay out of scope (-> [[Semaglutide and Kidney Outcomes in Chronic Kidney Disease]],
[[Protein Intake and Kidney Function]] cover the established-disease side).

<div class="recent-update" data-last-updated="2026-08-28"></div>

## The three levers held

| Lever | Source | Exposure contrast | Effect (direction) | Endpoint | Design / certainty |
|---|---|---|---|---|---|
| **Obesity** | Garofalo 2017 | obese vs normal BMI | combined CKD **RR 1.36 (1.18-1.56)** (adverse) | low-eGFR + albuminuria | 39 cohorts; moderate -> [[Obesity and Chronic Kidney Disease Risk]] |
| **Diet** | He 2020 | healthy pattern, highest vs lowest | **OR 0.69 (0.57-0.84)** (protective) | eGFR<60 and/or albuminuria | 17 obs (7 cross-sectional); gold-MA, confidence moderate |
| **Physical activity** | Seidu 2023 | most vs least active | **RR 0.91 (0.85-0.97)** (protective) | eGFR<60 and/or proteinuria | 12 cohorts; GRADE **very low** |

He and Seidu figures: [@he2020ckd]
and [@seidu2023ckd].
The obesity figures are a **cross-reference to held fabric**, not re-extracted here — the Garofalo
extraction and its audit live on [[Obesity and Chronic Kidney Disease Risk]].

### Parameter table — are these the SAME quantity? (BLOCKING check: NO)

| Feature | Obesity (Garofalo) | Diet (He) | PA (Seidu) | Same quantity? |
|---|---|---|---|---|
| Exposure contrast | BMI category (obese vs normal) | diet-pattern quantile (highest vs lowest) | activity category (most vs least) | **NO** — three unlike contrasts |
| Effect metric | RR | OR | RR | **NO** — OR overstates RR at this event rate |
| Contrast direction | adverse exposure present | protective exposure present | protective exposure present | **NO** — obesity is a risk factor, the others protective |
| Endpoint | low-eGFR + albuminuria (pooled sep.) | composite CKD (mixed defs) | composite CKD (eGFR/proteinuria) | **partial** — all *CKD* but different component mixes |
| Design | prospective cohorts | 7/17 cross-sectional | cohorts, self-report PA | **NO** |

**Consequence (load-bearing).** The three effects are **NOT commensurable and NOT independent
corroboration of one claim** — they test *different exposures* on *overlapping-but-distinct* endpoints
with *different metrics*. This is a **configuration** of three separate levers, not a type-E
convergence. Do not read *three studies agree kidneys benefit from lifestyle* as mutual
robustness-raising: each rests on its own single observational pool. A bare pooled *CKD* hiding
albuminuria vs low-eGFR vs ESKD would be a not-same-quantity error.

<div class="recent-update" data-last-updated="2026-08-28"></div>

## The 3-lever ranking (Layer 1: effect size x certainty)

Ordinal only — the parameter table forbids a cardinal comparison. Ranked by *where to act*, net of
certainty, for a general reasonably-healthy stratum:

1. **Obesity / weight control — top lever, and non-substitutable.** Largest and best-evidenced signal
   (39 cohorts, 630k adults; albuminuria RR 1.51), and obesity is a **big rock** already pulled for
   CVD, cancer, MASLD, and mortality — so its CKD arm is *confirmatory of an already-dominant lever*,
   not a new reason. Structural-leverage bonus: weight loss removes an upstream driver of the other two
   channels (glycaemia, BP). -> [[Obesity and Chronic Kidney Disease Risk]].
2. **Diet (healthy vs Western pattern) — moderate signal, moderate certainty.** OR 0.69 (healthy) and
   OR 1.86 (Western) are the largest *relative* contrasts here, but rest on 17 observational studies
   (7 cross-sectional), FFQ measurement error, and a bundled *pattern* exposure no component is
   isolable from. [@he2020ckd]
3. **Physical activity — smallest signal, weakest certainty.** RR 0.91 (9% reduction), GRADE **very
   low**, all 12 studies serious risk of bias, and the **95% prediction interval 0.75-1.09 crosses 1**
   (does not reliably transport). Much of PA's mechanism routes *through* the obesity/glycaemia/BP
   channels, so it is not a cleanly independent fourth lever. [@seidu2023ckd]

**The ceiling is a finding.** For someone already lean, active, and eating a non-Western pattern, the
CKD-specific levers here are small by construction and largely already pulled via the big rocks — the
honest read is *your remaining CKD-specific gains are small and uncertain*, which licenses stopping.
Ranking orders *where to act*; it does not privilege any lever as *the cause* (an effect needs its whole
support set).

<div class="recent-update" data-last-updated="2026-08-29"></div>

## Single-exposure levers (Kelly 2020) — sodium and smoking now held, diet decomposed

Kelly 2020 (SR + MA, **104 observational studies, \~2.76M participants**, GRADE) inventories
**single nutrients and single behaviours** against **incident CKD** — the *component* layer beneath
He's diet *patterns*. Kelly **deliberately excluded diet-pattern exposures** (citing they were
separately evaluated), so it complements He rather than duplicating him: «We did not con- sider diet
pattern exposures in our review, as these have recently been systematically evaluated.»
[@kelly2020ckd]

| Exposure (contrast) | Effect (95% CI) | Studies | GRADE | Endpoint | Direction |
|---|---|---|---|---|---|
| **Sodium** (high vs low) | **RR 1.21 (1.06-1.38)** | 6 | **moderate** | incident CKD | harmful |
| **Smoking** (current/former vs never) | **OR 1.18 (1.10-1.27)** | 12 | very low | incident CKD | harmful |
| **Smoking -> RRT** | **RR 1.59 (1.30-1.94)** | 8 | **moderate** | renal-replacement therapy | harmful |
| **Potassium** (high vs low) | **OR 0.78 (0.65-0.94)** | 7 | low | incident CKD | protective |
| **Vegetables** (high vs low) | **OR 0.79 (0.70-0.90)** | 5 | low | incident CKD | protective |
| **Physical activity** (high vs low) | **RR 0.82 (0.69-0.98)** | 9 | very low | incident CKD | protective |
| **Alcohol** (moderate vs low) | **RR 0.86 (0.79-0.93)** | 7 | **moderate** | incident CKD | protective (artifact-suspect) |

All figures [@kelly2020ckd]. All
Kelly estimates are observational; **\~92% used self-reported exposure**, so measurement error binds
every row -> [[Measurement Error in Dietary Assessment]].

**What Kelly changes on this page:**

- **Sodium is now a HELD lever (was a directional-only gap).** High-vs-low sodium raises incident-CKD
  risk **RR 1.21 (1.06-1.38), moderate certainty** — the strongest-graded of the *harmful* dietary
  levers. But the harmful contrast sits at a **studied range of 9.88-16.27 g/d salt (172-283 mmol/d
  sodium)** — very high intakes, not the habitual range — and Kelly declines any target: heterogeneity
  + measurement error «precludes clear recommendations in terms of possible targets, goals, or
  thresholds.» So: direction moderate-certain, **no knee/threshold locatable**.
  [@kelly2020ckd]
- **Smoking is now a HELD lever (was a directional-only gap) — and it reaches a HARD endpoint.**
  Smoking raises incident CKD (OR 1.18, very low) but, more decisively, raises **renal-replacement
  therapy RR 1.59 (1.30-1.94), moderate certainty** — the **first patient-important (non-surrogate)
  endpoint** in this cluster. Smoking is already a top-tier big rock for CVD/cancer/mortality, so its
  CKD/RRT arm is confirmatory of an already-dominant lever, not a new reason to quit.
  [@kelly2020ckd]
- **The diet lever is decomposed into components.** Protective: potassium (OR 0.78) and vegetables
  (OR 0.79). **Null for incident CKD** (decision-relevant rule-outs): **protein OR 1.08 (0.91-1.28)**,
  fish OR 0.94 (0.86-1.02), fruit OR 0.91 (0.79-1.06), carbohydrate OR 1.08 (0.85-1.36), phosphorus
  OR 1.00 (0.75-1.32), sugar-sweetened beverages OR 1.45 (0.97-2.15, ns). The **protein null** matters:
  in a *reasonably-healthy* stratum, higher protein is **not** a primary-prevention CKD risk factor
  here -> [[Protein Intake and Kidney Function]] (which covers the established-CKD side, a different
  stratum). [@kelly2020ckd]
- **Physical activity is CONFIRMED by a second SR — but this is NOT type-E-independent.** Kelly's
  high-vs-low PA **RR 0.82 (0.69-0.98)** agrees in direction with Seidu's RR 0.91. Author lists are
  disjoint (Kelly/Su/Zhang/Qin/Marshall/González-Ortiz/Clase/Campbell/Xu/Carrero vs
  Seidu/Abdool/Almaqhawi/Wilkinson/Kunutsor/Khunti/Yates), passing the first E test — **but both pool
  overlapping observational PA->CKD cohorts**, so the backing is not method/data-independent. Treat as
  **confirmation with a shared-cohort caveat, NOT `[E-independent]`.** Both remain very-low/serious-ROB
  observational; the confounding discount is not lifted.
- **The alcohol protective arm is an artifact candidate — a SECOND source now says so.** Kelly finds
  moderate-alcohol RR 0.86 and high-alcohol RR 0.87 both protective (no gradient), echoing He's
  inverted-dose drinking arms. The **daily-vs-weekly split is diagnostic**: *daily* RR 0.98 (0.82-1.18,
  NULL) vs *weekly* RR 0.82 (0.75-0.90, protective) — protection tracks *drinking pattern*, not dose,
  and Kelly names the confounder («social integration as a product of moderate alcohol consumption and
  overall well- being»). Only weak checks (covariate adjustment) were run; no referent-correction, no
  MR. **Do not carry *alcohol protects the kidney* off this page** -> [[The U-Shaped Association Artifact]].
  [@kelly2020ckd]
- **Mechanism converges on the big-rock reading.** Kelly attributes the lifestyle -> CKD effect largely
  to mediation: «The mechanism is likely, at least in part, through the intermediary diseases that are
  themselves risks for CKD: cardiovascular disease, hypertension, diabetes, obesity, and metabolic
  syndrome.» This reinforces the ranking's claim that CKD-specific levers act *through* the big rocks
  rather than as independent kidney channels. [@kelly2020ckd]

**Not a type-E convergence, not a tension.** Kelly and He study *different exposures* (components vs
patterns — Kelly excludes patterns by design), so they are **complementary decomposition layers**, not
independent backing of one claim and not a joined-issue clash (the parameter table below already
establishes the levers are not the same quantity). The one shared lever — PA, vs Seidu — is
confirmation with a shared-cohort caveat, handled above.

<div class="recent-update" data-last-updated="2026-08-28"></div>

## Route-(a) baseline-risk stratification — where absolute benefit is largest

The relative effects above are roughly constant across strata; **absolute** CKD benefit scales with
baseline risk, so it is largest for those whose CKD risk is already elevated — **diabetic,
hypertensive, high-BMI, and older** strata (route (a): prognostic data only, no subgroup/effect-
modification claim). None of the three sources supplies positive effect-modification evidence (route
(b)), so personalization beyond baseline-risk scaling is unwarranted here.
-> [[Baseline Risk and the Relative-Absolute Split]].

Illustratively, Garofalo's low-eGFR endpoint occurred in \~12.3% of obese vs 4.2% of nonobese over
\~5.2 y — so the relative signal sits on a meaningfully high absolute base in the high-BMI stratum,
where weight control's absolute CKD yield is correspondingly largest.
-> [[Obesity and Chronic Kidney Disease Risk]].

<div class="recent-update" data-last-updated="2026-08-29"></div>

## Caveats that bind the whole page

- **All-observational.** No RCT with a CKD endpoint is held for any of the three levers; all three are
  discounted for confounding. PA especially carries **healthy-user self-selection** (the active are
  leaner, less-smoking, higher-SES) that HR-adjustment reduces but cannot remove, plus reverse
  causation with no lag-time correction -> [[The Observational-Trial Discordance]]. [@seidu2023ckd]
- **Dietary measurement error** binds He's exposure and forbids a believable dose-response; the
  *healthy pattern* is a **bundle** (observed-healthy-population caveat — no single component isolable)
  -> [[Measurement Error in Dietary Assessment]]. [@he2020ckd]
- **The drinking arms in He are U-shape-artifact candidates, not a benefit.** Heavy-drinking OR 0.67
  and light-moderate OR 0.76 show an implausible inverted dose order; the protective upper arm must
  survive a referent-correction / reverse-causation check before belief — none was run
  -> [[The U-Shaped Association Artifact]]. **Do not carry *alcohol protects the kidney* off this page.** [@he2020ckd]
- **Endpoints are mostly surrogate-flavoured.** Low-eGFR / albuminuria / composite CKD are markers on
  the way to the patient-important trajectory (kidney failure, dialysis, mortality). The **one hard
  exception now held** is Kelly's **smoking -> RRT RR 1.59 (moderate)**; for every other lever the
  surrogate-to-outcome transmission is still assumed, and no source pools all-cause mortality, so
  trajectory is largely unmeasured. [@kelly2020ckd]

**Confidence (page-level, unchanged at `low`, with named exceptions).** The nucleus stays `low`
because it is entirely observational, endpoints are mostly surrogate, and the largest levers rest on
self-reported exposure. But Kelly raises the *harmful*-lever backing to **moderate** in three places —
sodium -> incident CKD, smoking -> incident CKD, and smoking -> RRT (a hard endpoint) — and adds a
second source flagging the alcohol artifact. The protective levers (diet components, PA) remain low/
very-low. Net: direction is firmer for the harmful levers; the page-level `low` reflects the weakest,
decision-driving parts, not the best.

<div class="recent-update" data-last-updated="2026-08-28"></div>

## Decision relevance (Layer 1)

CKD prevention is real but the *CKD-specific* levers are mostly **already pulled by the big rocks** — the
same weight-control, activity, and dietary-pattern moves recommended for CVD, diabetes, and mortality.
The nucleus's decision-change is therefore modest and mostly **route-(a)**: for a person at elevated
baseline CKD risk (diabetic / hypertensive / high-BMI), it confirms that the big-rock levers they are
already weighing *also* carry a kidney benefit whose absolute size is largest exactly in their stratum.
Seidu's own framing agrees the levers are complementary, not rival: physical activity «may only be one
piece of the puz- zle» alongside healthy diet, healthy weight, and risk-factor control.
[@seidu2023ckd]

<div class="recent-update" data-last-updated="2026-08-29"></div>

## Held threads / gaps

- **No RCT / Mendelian-randomization / objective-PA source** for any lever -> the confounding discount
  cannot be lifted. Named gap.
- **No dose-response for PA** (Seidu could not estimate one; no MET-hour unit) and **none believable for
  diet** (measurement error) — so no threshold/knee is locatable for the protective levers. Named gap.
- **Sodium and smoking are now HELD** as CKD levers (Kelly 2020: sodium RR 1.21 moderate; smoking
  OR 1.18 + RRT RR 1.59 moderate) — gap CLOSED 2026-08-29. **Glycaemic control** remains a directional-
  only candidate not yet held as a CKD-endpoint SR -> `G (directional-only)`,.
- **ESKD / mortality endpoint** PARTIALLY closed: Kelly holds **smoking -> renal-replacement therapy
  RR 1.59 (1.30-1.94), moderate** — the first patient-important (non-surrogate) endpoint in the cluster.
  For the *other* levers (obesity, diet, PA, sodium) the surrogate-to-hard-outcome transmission is still
  assumed, not evidenced. Narrowed gap. [@kelly2020ckd]

## References

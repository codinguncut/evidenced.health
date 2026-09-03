---
type: framework
question: What does dairy do to cardiometabolic outcomes (all-cause mortality, CVD events, type-2 diabetes) once you stop treating dairy as one undifferentiated food — by category (milk vs cheese vs butter vs fermented) and by fat content — and how much of any signal is confounding artifact?
aliases: [Dairy and Health, Milk and Mortality, Dairy and CVD, Dairy and Type 2 Diabetes, Milk and Cardiovascular Disease, Full-Fat Dairy]
authors: [Guo, Jing; Astrup, Arne; Lovegrove, Julie A; Gijsbers, Lieke; Givens, David I; Soedamah-Muthu, Sabita S; Mishali, Moshe; Prizant-Passal, Shiri; Avrech, Tova; Shoenfeld, Yehuda; Mente, Andrew; Dehghan, Mahshid; Scientific Advisory Committee on Nutrition (org); Schwingshackl, Lukas; Bechthold, Angela; Zhang, Yu; Wang, Dong D]
sources: [Guo - Milk Dairy Cardiovascular Mortality Meta-Analysis 2017, Mishali - Dairy Type 2 Diabetes Cardiovascular Meta-Analysis 2019, SACN - Carbohydrates and Health 2015, Mente - PURE Healthy Diet Score 2023, Schwingshackl - Food Groups Type 2 Diabetes Meta-Analysis 2017, Schwingshackl - Food Groups Hypertension Meta-Analysis 2017, Schwingshackl - Food Groups All-Cause Mortality Meta-Analysis 2017, Bechthold - Food Groups CHD Stroke Heart Failure Meta-Analysis 2019, Zhang - Butter Plant Oils Mortality 2025]
cluster: dairy
nucleus: true
confidence: medium
relationships:
  related_to:
    - Dairy and Bone Health
    - Fermented Foods and Health
    - Is the Food Category Doing Any Work
    - The U-Shaped Association Artifact
    - The Observational-Trial Discordance
    - Saturated Fat Intake and Replacement
    - Does Reducing Saturated Fat Reduce Cardiovascular Events
    - Measurement Error in Dietary Assessment
    - Diet Quality Scores and Cardiovascular Risk
    - Relative vs Absolute Risk
    - Layer 1 - Ranking Interventions for a Stratum
created: 2026-08-06
updated: 2026-09-02
self_critiqued: 2026-09-02
---

**Nucleus of the `dairy` cluster** — the canonical owner of *what dairy does to cardiometabolic
outcomes*. The **fermented-dairy CVD leg lives on [[Fermented Foods and Health]]** and the
**bone/fracture leg on the facet [[Dairy and Bone Health]]** (do not duplicate either); this page owns
the non-fermented cardiometabolic axes — total dairy, milk, fat content, the milk-mortality controversy,
and dairy -> type-2 diabetes.

**The through-line (two overlapping gold observational MAs):** across \~940k people, **dairy is broadly
neutral for CVD and all-cause mortality** (Guo, robust across its category decomposition), **and modestly
inverse for type-2 diabetes** (Mishali *alone* — a single, Israel-Dairy-Board-funded MA that does not
stratify by fat content, so the T2D leg is the weaker, discounted one) — with the effects small,
heterogeneous, FFQ-confounded, and *category-dependent*. The one scary signal in public discourse
— high milk drinking -> higher mortality — is a **single-cohort confounding artifact**, not a finding.
No hard-outcome RCT exists; every magnitude here is observational. Symmetric-standards guard: this does
**not** license *full-fat dairy is health food* (a dairy-industry-funded source pushes that framing) nor
*dairy fat is dangerous* (the pooled signals resist it). Earn each verdict by category and endpoint.



## *Dairy* is a type-B category — decompose before you rank

Milk, cheese, butter, yogurt and cream are almost different exposures at similar saturated-fat content,
so a whole-milk finding must never read as a yogurt finding, nor a butter finding as a cheese finding
-> [[Is the Food Category Doing Any Work]]. Guo 2017 is the worked case: it splits dairy five ways
(total / high-fat / low-fat / milk / fermented+cheese+yogurt) and the answers **differ by cell**, while
the aggregate «total dairy» hides them. The decision-relevant axes:

- **Fat content** — high-fat vs low-fat dairy, the guidance fault-line (guidance favours low-fat on
  SFA logic). *Both were null in Guo* — see below.
- **Fermented vs unfermented** — the only inverse CVD signals sit in fermented dairy/cheese (and even
  those are artifact-fragile) -> [[Fermented Foods and Health]].
- **Milk specifically** — the controversy leg (Michaelsson) lives here.



<div class="recent-update" data-last-updated="2026-09-02">

## Guo 2017 — dose-response: dairy is NEUTRAL for CVD and mortality

29 cohorts, 938,465 participants, dose-response (per-increment) meta-regression:

- «Total dairy intake (per 200 g/day) was not associated with the risk of all-cause mortality
  (Supplemental Figure 1; RR 0.99, 95% CI 0.96–1.03 ...) ... or CVD (Supplemental Figure 3; RR 0.97,
  95% CI 0.91–1.02)»
  [@guo2017].
- **High-fat AND low-fat dairy both null** across mortality/CHD/CVD (high-fat CVD 0.93 [0.84-1.03];
  low-fat CVD 0.98 [0.95-1.01]) — Guo ran no low-for-high substitution model, so this **does not
  endorse the low-fat guidance default**; it finds no difference in the observed contrast.
- **Milk (per 244 g/d): null** for mortality 1.00 (0.93-1.07), CHD 1.01, CVD 1.01 — but with extreme
  heterogeneity (mortality I2 = 97.4%).
- Overall: «neutral associations between dairy products and cardiovascular and all-cause mortality»
  [@guo2017].

**The only inverse signals — fermented dairy (0.98/20 g mortality + CVD) and cheese (0.98/10 g CVD) —
are artifact-fragile and cross-linked, not owned here** -> [[Fermented Foods and Health]]. Yogurt was
null (3 populations).

**Butter** is not one of Guo's own pooled cells, but Guo reports an external butter MA (ref [10]): per
14 g/d, mortality RR 1.01 (1.00-1.03), **no** significant CHD/CVD/stroke association, and an *inverse*
association with **diabetes** RR 0.96 (0.93-0.99)
[@guo2017]. So even the near-
pure-fat, matrix-stripped category is at worst weakly-positive for mortality and neutral for CVD — the
SFA-in-butter worry is not borne out at the whole-food level (a cited MA, secondhand through Guo).


### Zhang 2025 quantifies butter directly, and finds a positive mortality signal — but on a different contrast `[2026-09-02]`

Zhang 2025 (NHS/NHSII/HPFS, 221,054 adults, up to 33 y, 50,932 deaths) is the direct butter->mortality
study Guo's cell lacked. Highest-vs-lowest total-butter intake carried a 15% higher total mortality
(HR 1.15; 95% CI, 1.08-1.22) and higher **cancer** mortality (per 10 g/d HR 1.12; 95% CI, 1.04-1.20),
with **no** statistically significant CVD-mortality association
[@zhang2025butter]. The signal is **culinary-use split**:
butter as a spread (per 5 g/d HR 1.04; 95% CI, 1.02-1.05) drives it, while butter used for baking and
frying showed no significant association — plausibly small quantities and misclassification, not safety
[@zhang2025butter]. Substituting 10 g/d of butter with
plant-based oils was associated with a 17% lower total mortality (HR 0.83; 95% CI, 0.79-0.86).

**This is an F-refinement of the Guo cell, NOT a contradiction of it — the comparators differ.** Zhang
himself locates the gap: the neutral butter MA «did not explicitly compare butter with alternative
foods, instead implying a comparison to the typical Western diet, which is replete with other unhealthy
components like refined grains, sugars, starches, and red meat»
[@zhang2025butter]. Matched parameters:

| Parameter | Guo's cited butter MA (Pimpin) | Zhang 2025 | Same quantity? |
|---|---|---|---|
| butter -> total mortality | per 14 g/d, RR 1.01 (1.00-1.03) | Q4-vs-Q1, HR 1.15 (1.08-1.22) | **NO** — per-14g increment vs extreme-quartile contrast |
| implicit comparator | butter vs typical Western diet | within-cohort intake contrast (and a modelled butter->oil swap) | **NO** — Western-diet average vs a specified alternative food |

The two are consistent once matched: a near-flat per-gram slope against a junk-food-laden reference
(Guo/Pimpin) and a positive extreme-quartile contrast that resolves into benefit only when butter is
**replaced by a named better food** (Zhang's substitution model) answer different questions. **NOT-E**
(no confidence upgrade): Zhang shares the NHS/NHSII/HPFS cohorts, the Willett FFQ, and the Wang/Hu lab
with the Harvard dairy-fat evidence this page already holds — agreement here is shared backing, not
independent corroboration. And it stays observational: self-reported FFQ intake, residual confounding,
and a statistical substitution model, not a feeding trial -> [[Saturated Fat Intake and Replacement]]
(*Butter vs plant oils at the food level*).

</div>

## Mishali 2019 — high-vs-low: modest inverse for T2D and CVD, concentrated in women

16 cohorts (T2D, 545,677) + 13 cohorts (CVD, 460,798), highest-vs-lowest intake:

- **T2D:** «Pooled results indicated an inverse association between the two (RR ¼ 0.897; 95%CI,
  0.834–0.963; P < 0.01)» [@mishali2019] — \~10% lower.
- **CVD:** pooled RR 0.942 (0.892-0.994, P<0.05) [@mishali2019] — \~5% lower.
- **The sex split is the paper's distinctive move:** «The pooled RR for men was not significant (RR ¼
  1.023; 95%CI, 0.91–1.15 ...). The pooled RR for men and women to- gether was significant and showed a
  moderate protec- tive effect (RR ¼ 0.930; 95%CI, 0.87–0.99 ...)»; women RR 0.864 (0.82-0.98)
  [@mishali2019]. Per-outcome:
  women T2D 0.868, women CVD 0.837; **men NS for both**; between-group heterogeneity I2 = 86%.

**Two guards on Mishali (symmetric standards):** (1) it was **financed by the Israel Dairy Board and
all four authors are its consultants** [@mishali2019], and it does **not** stratify by fat content while leaning on an
«exonerates fat» framing — a directional-bias tell, so the effect estimate is discounted, not the finding
deleted. (2) The women-only effect is a **subgroup claim (route-b effect modification)** with no
identified mechanism (menopause-age and region moderators all came back null) — plausible but the
false-positive-prone route; hold it as hypothesis-generating, not established.



## Guo (neutral) vs Mishali (inverse): a distinction, NOT a tension

The two reach opposite *headlines* on largely the **same cohorts**. The parameter table dissolves the
apparent clash:

| Parameter | Guo 2017 | Mishali 2019 | Same quantity? |
|---|---|---|---|
| Exposure contrast | per-increment dose-response slope (200 g/d) | highest-vs-lowest intake category | **NO** |
| Total dairy -> CVD | 0.97 (0.91-1.02), NS | 0.942 (0.892-0.994), sig | **point estimates compatible; only significance differs** |
| Fat stratification | high/low-fat analysed separately (both null) | none (total dairy/milk only) | **NO** |
| Sex | pooled + subgroups | central moderator; effect women-only | **NO** |
| Cohort set | 29 cohorts (938k) | 13 CVD / 16 T2D (461k/546k), overlapping subset | **NOT independent** |
| Funding | research-institute | Israel Dairy Board | — |

**The clash is not joined — by not-joined check (ii) (different unit/contrast) plus the shared data.**
The two estimates are **not commensurable**: Guo's 0.97 is a per-200 g/d dose-response slope, Mishali's
0.942 is a highest-vs-lowest category contrast (the parameter-table row marks these NO) — so their numeric
closeness is not a same-observable argument, it is a coincidence of scale. What actually makes this not a
tension is that the two run on **largely the same cohorts**: they cannot be two conflicting *findings*
when they are two analyses of one body of data. The divergence is therefore a *framing / analytic-choice*
difference, not an empirical one: Guo tests a per-unit slope (CI crosses 1) and decomposes to find the
aggregate hides null cells; Mishali contrasts extremes, aggregates across fat content, and — with an
industry sponsor — reads a \~5% inverse CVD estimate as «beneficial». So **no `tension` is filed**;
this is a structured distinction. It is also **not type-E independent backing** — the shared cohorts make
the agreement a re-pooling, not two independent routes.



## The milk-mortality controversy is a confounding artifact

Public discourse's scariest dairy claim — high milk -> higher death — comes from the Swedish cohorts:
«higher milk consumption was associated with a doubling of mortality risk including CVD mortality in the
cohort of women» [@guo2017].
Run the artifact diagnostics -> [[The U-Shaped Association Artifact]]:

- **The pooled milk -> mortality estimate is null (1.00)**; the *only* thing the Swedish cohort adds is
  heterogeneity (I2 = 97.4%). Removing it: I2 -> 70.1%, RR 0.99 (0.96-1.01).
- **Confounding by lifestyle is named in-source:** the high-milk Swedish drinkers had low education and
  «the highest milk drinkers had highest percentage of smokers and those living alone»
  [@guo2017].
- **Same cohort drives the *opposite* (protective) fermented/cheese signal:** «the inverse associations
  of fermented dairy and cheese with all-cause mortality or CVD disappeared after removing the study of
  Michaelsson et al.» [@guo2017].
  One confounded outlier cohort manufactures **both** poles of the debate — the cleanest demonstration
  that the milk-mortality signal has no diagnostic value.

**Verdict: the milk-mortality signal does not survive the artifact check** — it is single-cohort,
confounder-explained, and adjudicated only by leave-one-out sensitivity (a weak check; no MR or genetic
instrument in-source). Note Guo does not invoke Michaelsson's own D-galactose hypothesis, so neither do we.



## Mechanism (candidate, not demonstrated) and the matrix hinge

Both MAs propose the same channels without RCT confirmation: dairy minerals (Ca, K, Mg) lower total/LDL-C
in short-term feeding studies (a neutral-total-dairy explanation); casein/whey **lactotripeptides**
(IPP/VPP) inhibit ACE -> lower BP; milk fat raises HDL-C; the fermented-dairy signal may run through «the
food matrix reducing lipid absorption and short chain fatty acids produced by the bacteria in the large
intestine» [@guo2017]. This is
the **dairy-matrix** hypothesis — the same SFA behaving differently inside cheese vs butter — held as a
mechanism to weigh, not a finding; the SFA verdict itself is deferred to
[[Saturated Fat Intake and Replacement]] and [[Does Reducing Saturated Fat Reduce Cardiovascular Events]]. — the controlled-feeding matrix mechanism (cheese vs
butter on LDL) that would move this from candidate to directional.



## Off-axis endpoint: a minor protective dental-erosion association (cashes HELD-DAIRY-1)

SACN 2015 reports, in its dental-erosion section, that «Consumption of yoghurt and milk products was
negatively associated with the incidence of erosive wear»
[@sacn2015] (cashes `HELD-DAIRY-1`). **Two guards apply
and are kept:** (1) erosive wear is a **dental** endpoint in a carbohydrates report — it is off-axis to
the cardiometabolic outcomes this page owns and must **not** corroborate any matrix or CVD claim; (2)
the same dataset found **no** association for carbonated soft drinks and erosion, which is
counter-intuitive enough to suggest the confounding structure is not simple — read the dairy result with
equal scepticism. A minor, low-weight note, not a decision-change.



## Whole-fat dairy as a protective PATTERN component — PURE (Mente 2023), and why it does not overturn the neutral verdict

PURE's healthy-diet-score analysis (Mente 2023; 147,642 + 5 replication studies) is the one large source
that reads dairy as **actively protective** rather than neutral — and it is the score's distinctive
element, since «dairy (mainly whole-fat)» is one of only six protective foods it counts, where other
diet scores favour low-fat dairy or exclude it -> [[Diet Quality Scores and Cardiovascular Risk]]. Mente
states «our findings in PURE showed that dairy foods, especially whole-fat dairy, may be protective
against risk of hypertension and metabolic syndrome», and «intakes of dairy (up to 185 g/day; or \~two
servings/ day, mainly from whole-fat dairy) can be included with other beneficial foods as part of a
healthy diet» [@mente2023pure].

**Three guards keep this from upgrading the page's verdict past neutral, and they are the point:**

- **Different, weaker contrast — not commensurable with Guo (no tension filed).** Mente's dairy signal
  is dairy *as one component of a highest-vs-lowest whole-diet score*, hopelessly confounded with the
  other five protective foods and with the healthy-user gradient; Guo is a dairy-specific per-200 g/day
  dose-response. These are **not the same quantity** (parameter-table row: NO), so PURE's protective
  reading and Guo's neutral slope are a **distinction, not a joined tension** — and PURE lands
  *compatibly* with Guo where it matters: dairy is not a food to avoid.
- **Not independent (not type-E).** PURE shares authors (Mente, Dehghan) and cohort infrastructure with
  the Dehghan PURE macronutrient work; a shared confounding/measurement structure moves them together.
  So this is not a second independent witness for a dairy benefit — it is the same research programme.
- **Directional-sponsor tell (symmetric standards, same as Mishali).** PURE is partly funded by «an
  unrestricted grant from Dairy Farmers of Canada and the National Dairy Council (U.S.)»
  [@mente2023pure], and the whole-fat-dairy-is-protective
  reading is exactly where such a sponsor would push. The estimate is discounted, not deleted.

**Net:** PURE strengthens the *neutral-to-mildly-favourable* end of this page's range for whole-fat
dairy within a whole-diet pattern; it does **not** license a standalone *full-fat dairy is
cardioprotective* claim. The hypertension/metabolic-syndrome mechanism it invokes remains a candidate
channel, not a demonstrated one.



## Confidence, decision-relevance, and gaps

- **`confidence: medium`** — two gold observational MAs converging on *small effects* (neutral CVD/
  mortality; modest inverse T2D), but the backing is **not independent** (shared cohorts), FFQ-confounded,
  absolute risks unrecoverable ([[Relative vs Absolute Risk]] — every figure is RR/OR with no baseline
  rate), and no hard-outcome RCT exists. The `medium` rests on the *neutrality* verdict (robust across
  both MAs and Guo's category decomposition), not on any protective claim.
- **Decision-change (per stratum):** for someone with the big rocks already handled
  ([[Layer 1 - Ranking Interventions for a Stratum]]), **dairy is not a lever to worry about** — the
  milk-mortality scare is an artifact, and total/full-fat vs low-fat dairy is a wash for CVD in the
  observed data. Fermented dairy carries the (weak, artifact-fragile) favourable signal; butter is the
  near-pure-fat category with an inverse *diabetes* signal but a weak positive mortality one. This is a
  *small lever*; *attention is an anti-signal* applies (dairy is discussed far out of proportion to its
  established effect).
- **Gaps (G):**
  - ~~**Milk -> fracture / bone** — the milk-fracture paradox is unheld.~~ **CASHED 2026-08-06 by Malmir
    2019** — the bone/fracture endpoint now lives on the cluster facet [[Dairy and Bone Health]]: milk/
    dairy is **null** for osteoporosis and hip fracture in cohorts (protective only in reverse-causation-
    prone cross-sectional/case-control designs; milk trends to +9%/200 g harm in cohorts, Michaelsson-
    driven — the same artifact cohort as this page's milk-mortality scare). Dairy is not a fracture lever.
  - **Dairy -> cancer, opposing directions** (probable-protective colorectal, probable-increased prostate)
    — direction held on [[Red and Processed Meat and Cancer]]/WCRF; magnitudes unheld here. Name both,
    never net.
  - **Sex as effect-modifier (Mishali)** — a single-MA subgroup claim, no mechanism; needs replication
    before it drives a sex-specific recommendation (route-b bar).
  - **`G (needs aggregation)`:** a pooled dairy-fat -> CVD-events effect that adjusts for the Michaelsson
    artifact across designs — a magnitude the fabric cannot compute from these two non-commensurable MAs.



<div class="recent-update" data-last-updated="2026-08-28">

## Self-critique `[run 2026-08-06, before commit]`

- **No dairy halo, no dairy scare — both checked.** The neutral verdict is stated as neutral (not
  *safe/beneficial*); the one protective source (Mishali) is discounted for its Israel-Dairy-Board
  sponsorship and no-fat-split design; the milk-mortality scare is dismantled as a single-cohort artifact
  rather than either endorsed or ignored.
- **Independence not laundered.** Guo and Mishali share cohorts, so their agreement is filed as
  re-pooling, not type-E; the parameter table carries the shared-cohort row explicitly. No `[E-independent]`
  claimed.
- **Not-joined check ran.** Guo-neutral vs Mishali-inverse resolves to a distinction (near-identical
  point estimates, different contrast + framing) — no tension manufactured to fill a domain-opener quota.
- **Michaelsson artifact stays within what Guo states** — leave-one-out sensitivity + lifestyle
  confounding are Guo's; the D-galactose mechanism is Michaelsson's own and is explicitly NOT imported.
- **Sex subgroup held to route-b.** The women-only effect is marked a false-positive-prone effect-
  modification claim, not an established stratum rule.
- **HELD-DAIRY-1 cashed with both guards** — dental endpoint quarantined as off-axis, soft-drink-null
  scepticism carried.
- **Blind self-critique catches applied `[2026-08-06]`:** (a) the butter direction (inverse-diabetes /
  weak-positive-mortality) was asserted in the verdict with no on-page support — now sourced in the Guo
  section (Guo's cited external butter MA); (b) the not-joined justification wrongly leaned on the
  non-commensurable numeric closeness (0.97 vs 0.94) — re-anchored on check (ii) different-contrast +
  shared-cohorts; (c) the T2D-inverse headline now carries its single-source / industry-funding caveat
  inline rather than three sections later.
- **PURE whole-fat-dairy section added `[2026-08-25]`, three guards checked.** The protective-dairy
  reading is (i) filed as a *distinction* from Guo not a tension (different contrast — score component vs
  dose-response, parameter-table NO); (ii) marked non-independent (shared PURE authors/infrastructure with
  Dehghan — no `[E-independent]`); (iii) discounted for the Dairy-Farmers-of-Canada / National-Dairy-
  Council funding tell, same treatment as Mishali's Israel-Dairy-Board sponsorship. The neutral verdict is
  not upgraded — no full-fat-dairy halo introduced.

</div>

<div class="recent-update" data-last-updated="2026-08-28">

## Refinement — the DIfE/Boeing 12-food-group series (2026-08-28)

The series places dairy as a **cardiometabolic-marker lever, not a mortality lever**: inverse for
T2D (0.97, 0.94-0.99 per 200 g/d, MODERATE) and hypertension (0.95, 0.94-0.97, LOW), but **null for
all-cause mortality** (0.98, 0.93-1.03), null for CHD/stroke, and **positive for heart failure**
(1.08, 1.01-1.15). Low- vs high-fat dairy showed no significant difference for these endpoints. The
T2D/HTN benefit not carrying through to mortality is the divergence to hold onto.
[@schwingshackl2017t2d]
[@schwingshackl2017htn]
[@schwingshackl2017mort]
[@bechthold2019] Full grid
-> [[Food Groups and Health Outcomes - A Dose-Response Matrix]].

</div>

## References

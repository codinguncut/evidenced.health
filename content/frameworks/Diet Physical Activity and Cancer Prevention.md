---
type: framework
question: Which modifiable diet/activity/adiposity exposures change cancer risk, in which direction, and how strong is the evidence?
aliases: [Cancer Prevention, WCRF Cancer Matrix, Diet and Cancer, Cancer Prevention Recommendations, WCRF-AICR Grading of Causal Evidence, CUP Matrix]
authors: [World Cancer Research Fund International (org); Yin, Jia-Li; Gong, Ting-Ting; Wu, Qi-Jun]
sources: [WCRF - Diet Nutrition Activity Cancer 2018, WCRF - Dietary Lifestyle Patterns Cancer Prevention 2025, Yin - Dietary Patterns Multiple Cancers Umbrella 2025]
cluster: cancer-prevention
nucleus: true
confidence: low
created: 2026-08-05
updated: 2026-08-29
self_critiqued: 2026-08-29
relationships:
  related_to:
    - Shared Modifiable Levers Across Age-Related Diseases
    - Body Fatness and Cancer Risk
    - Red and Processed Meat and Cancer
    - Alcohol and Mortality and Vascular Disease
    - Physical Activity Dose and Mortality
    - Dietary Fibre and Health
    - Certainty of Evidence vs Strength of Recommendation
    - Layer 1 - Ranking Interventions for a Stratum
---

**Nucleus of the `cancer-prevention` cluster.** Opens the cancer domain for the wiki (previously near-
empty — only the red/processed-meat pages). Source: the **WCRF/AICR Third Expert Report (2018)**, the
gold-standard continuously-updated synthesis (Continuous Update Project — 18 systematic reviews graded
by an independent panel). Single-source scaffolding — provisional (`confidence: low`) until a second
cancer-evidence body intersects it.

**The decision this page changes.** By *breadth of sites and strength of evidence* (not a per-person
effect magnitude, which WCRF does not quantify), the leading *diet-adjacent* cancer exposures — after
tobacco — are **body fatness, alcohol, and physical activity**, not the specific "superfoods" and
"carcinogens" that dominate discourse (*attention is an anti-signal*). WCRF estimates «Between 30 and 50
per cent of all cancer cases are estimated to be preventable through healthy lifestyles» — but that
figure is broader than diet: the full source sentence adds «avoiding exposure to occupational
carcinogens, environmental pollution and certain long-term infections», and "healthy lifestyles"
includes not smoking. [@wcrf2018ter] It
is also a **population-attributable fraction**, not a per-person risk reduction. WCRF warns «If current
trends continue, overweight and obesity are likely to overtake smoking as the number one risk factor
for cancer.» [@wcrf2018ter]

## The grading system — the decision-relevant object, not the raw effect

WCRF grades each *exposure -> cancer-site* relationship for **strength of causal evidence**, and only
strong grades drive recommendations. The grade, not a bare association, is what to read:

| Grade | Band | Drives a recommendation? |
|---|---|---|
| **Convincing** (increases / decreases risk) | strong | yes |
| **Probable** (increases / decreases risk) | strong | yes |
| **Substantial effect on risk unlikely** | strong (a null) | no — a strong null; reassurance use is the wiki's gloss, not a stated WCRF rec basis |
| Limited — suggestive | limited | generally no |
| Limited — no conclusion | limited | no |

«They enable evidence to be categorised as being ‘strong’ (‘convincing’, ‘probable’ or ‘substantial
effect on risk unlikely’) or ‘limited’ ... Only evidence judged to be strong is usually used as the
basis for Recommendations.» [@wcrf2018ter]
The criteria are **Bradford-Hill-derived** (study quality, number of study types/cohorts, heterogeneity,
dose-response, plausible mechanism at typical human exposures). This is WCRF's *own* system, distinct
from GRADE — the same evidence graded "convincing/probable" here is graded "low certainty" under strict
GRADE, which is the engine of the meat controversy -> [[Certainty of Evidence vs Strength of Recommendation]],
[[Should Adults Reduce Red and Processed Meat]].

## The graded matrix — decision-relevant big rocks (STRONG evidence only)

From the §5 recommendation justifications (prose) cross-checked against the color-coded matrix asset
(`raw/assets/WCRF-All-Cancers-Matrix-2018.pdf`). Grades stated where prose pins them; the full
57-exposure × 20-site grid lives in the asset.

**Increases risk (strong):**

| Exposure | Cancer site(s) | Grade | Note |
|---|---|---|---|
| **Adult body fatness** | oesophagus (adeno), pancreas, liver, colorectum, kidney, endometrium, postmeno breast, + more | Convincing / Probable | «12 of the 17 cancers ... linked»; IARC adds thyroid, myeloma, meningioma -> [[Body Fatness and Cancer Risk]] |
| **Alcohol** | mouth/pharynx/larynx, oesophagus (SCC), breast, colorectum, liver, stomach | Convincing / Probable | «no ... threshold» for cancer overall (breast: none identified); the CRC and liver/stomach judgements are *based on intakes above* \~30 / \~45 g/d — the edge of the evidence, NOT a safe threshold -> [[Alcohol and Mortality and Vascular Disease]] |
| **Processed meat** | colorectum | **Convincing** | «no level of intake ... associated with a lack of risk» |
| **Red meat** | colorectum | **Probable** | limit \~350-500 g cooked/week -> [[Red and Processed Meat and Cancer]] |
| High-dose **beta-carotene supplements** | lung (current/former smokers) | **Convincing (harm)** | the supplement-harm case -> [[Vitamin and Mineral Supplements for Disease Prevention]] |
| **Glycaemic load** | endometrium | Probable | «is a cause of endometrial cancer» |
| Aflatoxins | liver | Convincing | (regional) |
| Adult attained height (marker) | several | Convincing / Probable | a *marker* for growth factors, «unlikely to directly ... cause» |

**Decreases risk (protective, strong):**

| Exposure | Cancer site(s) | Grade | Note |
|---|---|---|---|
| **Physical activity** | colorectum (colon), endometrium, breast | Convincing (colon) / Probable | «the greater the amount ... the greater the benefit» -> [[Physical Activity Dose and Mortality]] |
| **Wholegrains** | colorectum | Probable | -> [[Whole Grains Refined Grains and Pulses]] |
| **Dietary fibre** | colorectum | Probable | goal >=30 g/day -> [[Dietary Fibre and Health]] |
| Non-starchy veg/fruit (aggregated) | aerodigestive | Probable (aggregate) | individually limited; aggregate «more persuasive» |
| Coffee | liver, endometrium | Probable | |
| Dairy / calcium (incl. supplements) | colorectum | Probable | supplements >200 mg/d; adverse effects elsewhere |
| Body fatness in *young adulthood* | breast (pre + postmeno) | Probable | the paradox — a protective arm, direction opposite to adult body fatness |
| Lactation | breast (mother) | Probable / Convincing | |

[@wcrf2018ter]

## Two structural cautions the report itself raises

**1. The holistic shift — the pattern, not the food, is the causal unit.** The Panel now judges «it
appears increasingly unlikely that specific foods, nutrients or other components of foods are
themselves important singular factors ... rather, different patterns of diet and physical activity
combine to create a metabolic state» conducive to cancer. [@wcrf2018ter] This is the wiki's own *observed-healthy-population-is-not-evidence-for-a-
component* rule arriving from a cancer body: confidence in the causal exposure is «always ... greater
for the aggregated set of dietary factors ... than for any single food». The adherence studies bear it
out — «the more people adhere to the ... Recommendations, the greater the reductions» — so «confidence
in the protective effect from following all of the Recommendations is greater than that for any
individual Recommendation.» [@wcrf2018ter]

**2. Population judgements, and the loop is open.** These are population-level causal grades, not
per-person effects, and they rest on *observational cohorts* (few lifetime-diet RCTs are feasible — a
fit-to-question limit, not a defect). No source here shows that an *individual's* weight loss or meat
cut *reduces their* cancer — the survivor evidence is explicitly «limited» on whether changing exposures
«will alter the clinical course». [@wcrf2018ter]
[inferred from @wcrf2018ter]

<div class="recent-update" data-last-updated="2026-08-29">

## The 2025 DLP evidence — caution #1 now evidenced, not just asserted (type-F)

The 2018 report *asserted* the holistic shift (caution #1 above) but graded whole dietary patterns as
too weak to act on: for breast and colorectal cancer they were «graded as 'limited-no conclusion'», the
exception being mouth/pharynx/larynx («'limited-suggestive'»).
[@wcrf2025dlp]
The 2025 CUP Global pattern report (breast: 84 pubs; CRC: 86 pubs) **upgrades that same claim** — the
pattern-as-causal-unit shift is now a *strong-probable* grade, not a Panel intuition. This is a type-F
refinement of caution #1 by the **same body** (WCRF/AICR), so it raises the grade WCRF itself assigns
but earns **no `[E-independent]` corroboration** — the confidence stays `low` on this page until a
non-WCRF cancer-evidence family intersects it.

**The grade movement.**

- CRC: «The WCRF/AICR Score was graded as having a 'strong-probable' likelihood of causality for a
  decreased risk of colorectal cancer.» [@wcrf2025dlp]
- Breast: «WCRF/AICR score and the American Cancer Society score were graded as having a 'strong-probable'
  likelihood of being causally associated with a decreased risk of breast cancer» — strong-probable for
  overall and post-menopausal, «'limited-suggestive'» for pre-menopausal. [@wcrf2025dlp]

**The lifestyle leg carries the evidence — a DLP beats a diet-only pattern.** «patterns incorporating
modifiable risk factors (namely markers of adiposity, smoking and physical activity) showed stronger
associations with breast cancer incidence than patterns scoring dietary factors alone» (same for CRC).
[@wcrf2025dlp] This
sharpens caution #1: the *aggregate* that matters is not diet alone but diet **plus** body fatness,
activity, alcohol and smoking — the same big rocks already ranked above, now shown to dominate the
pattern signal too, consistent with «the more components of our DLP adhered to, the better for cancer
risk reduction.» [@wcrf2025dlp]

**Hybrid biomarker patterns run the other way (harm).** Patterns built to *predict* insulin /
inflammation biomarkers were «graded as 'strong-probable' for their likelihood of causality for an
increased colorectal cancer risk. These patterns are: Empirical Dietary Index for Hyperinsulinaemia ...
Empirical Dietary Inflammatory Pattern ... Empirical Lifestyle Index for Hyperinsulinaemia.»
[@wcrf2025dlp]
The report flags these are **not clean causal maps** of their named mechanism — «alcohol consumption is
negatively scored in these patterns but has strong evidence of an increased risk for colorectal cancer»
[@wcrf2025dlp] ->
[[Inflammation as a Modifiable Lever]].

**Site-specific decision splits.** For breast, «the evidence suggests that any amount of alcohol
increases risk» -> avoid alcohol. [@wcrf2025dlp]
For CRC the recommended DLP adds «the consumption of coffee and calcium containing foods, such as dairy
products» and «Avoiding processed meat.» [@wcrf2025dlp]

**What the upgrade does NOT buy — no magnitudes, mostly observational, high RoB.** «meta-analyses were
not conducted for either breast or colorectal cancer», so the report gives **grades, not effect sizes**
(no HR / RR / absolute risk to rank or dose).
[@wcrf2025dlp]
The base is near-entirely observational — «the scarcity of randomised controlled trials for dietary
patterns and DLPs, with one intervention trial found for both breast and colorectal cancer outcomes»
[@wcrf2025dlp] — and
carries critical risk of bias: «in the 86 papers included in the colorectal cancer review, 31 studies
were considered to have critical risk of bias for confounding.» [@wcrf2025dlp]
The report is explicit it «is not intended to supersede the 2018 WCRF/AICR Cancer Prevention
Recommendations, but to support them.» [@wcrf2025dlp]

</div>

<div class="recent-update" data-last-updated="2026-08-29">

## Yin 2025 umbrella review — the first ranked magnitudes, and the independence test failed (type-F)

The 2018 and 2025 WCRF reports grade the pattern->cancer relationship but give **no effect sizes** (the
2025 DLP report «meta-analyses were not conducted»). Yin's umbrella review of 74 meta-analyses of
prospective cohorts supplies the first magnitudes with CIs — but on the *strict* type-E test it is
**not independent backing**; it is a type-F refinement plus a distinct-pattern extension, so the nucleus
confidence **stays `low`**.

**The magnitudes (the type-F payoff).** Only 3 of 74 MAs (4.1%) reached *convincing* evidence, and
they are: «adherence to the 2007 World Cancer Research Fund/American Institute for Cancer Research
(WCRF/AICR) dietary recommen- dations (per 1-unit score increase) and lower risk of all cancers
(relative risk [RR] ¼ 0.93, 95% conﬁdence interval [CI]: 0.92, 0.95), whereas negative associations
were found comparing the highest compared with lowest categories for a prudent diet (RR ¼ 0.89, 95%
CI: 0.85, 0.93) and vegetable-fruit- soybean diet (RR ¼ 0.87, 95% CI: 0.83, 0.92) in relation to breast
cancer.» [@yin2025cancer] On GRADE, only
4 of 74 (5.4%) were *high* — «adherence to the 2007 WCRF/AICR dietary recommendations and decreased
risks of all cancers, breast cancer, colorectal cancer, and prostate cancer.» [@yin2025cancer]
The effect envelope across all 74 MAs is modest — «the magnitude of the observed summary random-effects
estimates ranged from 0.59 to 2.23» [@yin2025cancer] — and the base is mostly weak (only 13/74 prediction intervals excluded null).

**Why it is NOT `[E-independent]`.** The convincing/GRADE-high result scores adherence to *WCRF's own
2007 index* — WCRF is the antecedent being tested, not a separate route to the same claim (F, not E).
And Yin pools the same prospective-cohort literature the WCRF CUP draws on: «Because the WCRF/AICR
recommendations are not dietary pat- terns in the strictest sense, studies recommending an overall
lifestyle pattern were excluded ... whereas studies only referencing dietary recommendations were
included.» [@yin2025cancer] The
author list shares no WCRF panellist but sits in the same Harvard/Channing/Tulane nutritional-epidemiology
lineage that generates much of the pooled cohort evidence — shared cohorts and shared school, so
shared-source agreement, not independent backing.
[inferred from @yin2025cancer]

**One genuinely new direction — DII harm (very low GRADE).** Yin re-grades a *harmful* pattern:
«The present UR also found a harmful association between the DII score and the risk of CRC comparing
the highest score to the lowest, as well as a 1-unit increment in the score» [@yin2025cancer] — but «classiﬁed as very low quality in terms of
GRADE, mainly owing to the presence of heterogeneity and publication bias.» [@yin2025cancer] This runs the same direction as the 2025 DLP hybrid-
biomarker (EDIH/EDIP/ELIH) harm signal above, from a second body but on very-low-grade evidence ->
[[Inflammation as a Modifiable Lever]].

</div>

## Layer-1 ranking note

[inferred from @wcrf2018ter]
The ranking is stratum-dependent. For a lean, non-drinking, active non-smoker the diet-adjacent cancer
levers are mostly *already pulled*, and the remaining ones (specific foods) are small-and-limited **by
construction** — reporting that ceiling is itself the result. Where a big rock is present (obesity,
heavy alcohol, inactivity) it dominates the cancer ranking as it does the mortality one, and the same
exposure typically moves cancer, cardiometabolic and all-cause outcomes together (the recommendations
«promote an overall way of life» beneficial across NCDs) -> [[Layer 1 - Ranking Interventions for a Stratum]].

<div class="recent-update" data-last-updated="2026-08-29">

## Limits

- **Still single-body for `[E-independent]`, even after Yin.** WCRF/AICR is one (authoritative) body;
  its related reports (this master, Body-Fatness, Physical-Activity, the 2025 DLP) are the SAME body.
  The Yin 2025 umbrella review was tested as the candidate independent family and **failed the strict
  test** — its headline finding scores WCRF's own 2007 index and pools the same cohort literature
  (shared-source, same epidemiology lineage), so it refines (type-F) but does not corroborate
  independently. A genuinely disjoint cancer-evidence family (IARC monographs beyond the labels held;
  an umbrella built on a non-overlapping cohort base) is still owed before any grade here earns
  `[E-independent]`.
- **Grade granularity.** Exact convincing-vs-probable per cell is read from the color-coded matrix
  figure; where the §5 prose does not pin a grade, the band (strong) is stated rather than a guessed cell.
- Coherence, not validity (R1): the grades are causal *judgements* on cohort associations; the wiki
  cannot verify them against realized outcomes.

</div>

## References

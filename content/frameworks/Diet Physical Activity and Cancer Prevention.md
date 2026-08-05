---
type: framework
question: Which modifiable diet/activity/adiposity exposures change cancer risk, in which direction, and how strong is the evidence?
aliases: [Cancer Prevention, WCRF Cancer Matrix, Diet and Cancer, Cancer Prevention Recommendations, WCRF-AICR Grading of Causal Evidence, CUP Matrix]
authors: [World Cancer Research Fund International (org)]
sources: [WCRF - Diet Nutrition Activity Cancer 2018]
cluster: cancer-prevention
nucleus: true
confidence: low
created: 2026-08-05
updated: 2026-08-05
self_critiqued: 2026-08-05
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
includes not smoking. [@wcrf2018ter, Introduction] It
is also a **population-attributable fraction**, not a per-person risk reduction. WCRF warns «If current
trends continue, overweight and obesity are likely to overtake smoking as the number one risk factor
for cancer.» [@wcrf2018ter, Introduction]

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
basis for Recommendations.» [@wcrf2018ter, §2.4.2]
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

[@wcrf2018ter, §5.1 justifications; matrix asset p2 grid + p3 footnotes 36-39, 49, 52, 62-66]

## Two structural cautions the report itself raises

**1. The holistic shift — the pattern, not the food, is the causal unit.** The Panel now judges «it
appears increasingly unlikely that specific foods, nutrients or other components of foods are
themselves important singular factors ... rather, different patterns of diet and physical activity
combine to create a metabolic state» conducive to cancer. [@wcrf2018ter, §6.1] This is the wiki's own *observed-healthy-population-is-not-evidence-for-a-
component* rule arriving from a cancer body: confidence in the causal exposure is «always ... greater
for the aggregated set of dietary factors ... than for any single food». The adherence studies bear it
out — «the more people adhere to the ... Recommendations, the greater the reductions» — so «confidence
in the protective effect from following all of the Recommendations is greater than that for any
individual Recommendation.» [@wcrf2018ter, §5.1.2]

**2. Population judgements, and the loop is open.** These are population-level causal grades, not
per-person effects, and they rest on *observational cohorts* (few lifetime-diet RCTs are feasible — a
fit-to-question limit, not a defect). No source here shows that an *individual's* weight loss or meat
cut *reduces their* cancer — the survivor evidence is explicitly «limited» on whether changing exposures
«will alter the clinical course». [@wcrf2018ter, §4.2]
[inferred from @wcrf2018ter]

## Layer-1 ranking note

[inferred from @wcrf2018ter]
The ranking is stratum-dependent. For a lean, non-drinking, active non-smoker the diet-adjacent cancer
levers are mostly *already pulled*, and the remaining ones (specific foods) are small-and-limited **by
construction** — reporting that ceiling is itself the result. Where a big rock is present (obesity,
heavy alcohol, inactivity) it dominates the cancer ranking as it does the mortality one, and the same
exposure typically moves cancer, cardiometabolic and all-cause outcomes together (the recommendations
«promote an overall way of life» beneficial across NCDs) -> [[Layer 1 - Ranking Interventions for a Stratum]].

## Limits

- **Single-source, single-body.** WCRF/AICR is one (authoritative) body; its three related reports
  (this master, Body-Fatness, Physical-Activity parts) are the SAME body — not independent backing.
  A second cancer-evidence family (IARC monographs beyond the labels held; a non-WCRF umbrella) is owed
  before any grade here earns `[E-independent]` corroboration.
- **Grade granularity.** Exact convincing-vs-probable per cell is read from the color-coded matrix
  figure; where the §5 prose does not pin a grade, the band (strong) is stated rather than a guessed cell.
- Coherence, not validity (R1): the grades are causal *judgements* on cohort associations; the wiki
  cannot verify them against realized outcomes.

## References

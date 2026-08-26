---
type: concept
question: Does long-term exposure to drinking-water disinfection byproducts (trihalomethanes) raise bladder-cancer risk, by how much, through which route, and is it a lever anyone can act on?
aliases: [Disinfection Byproducts, DBP, Trihalomethanes, THM, Chlorination Byproducts, Water Disinfection Byproducts, THM Bladder Cancer]
authors: [Costet, N; Villanueva, Cristina M; Jaakkola, Jouni J K; Kogevinas, Manolis; Cantor, Kenneth P; King, Will D; Lynch, Charles F; Nieuwenhuijsen, Mark J; Cordier, Sylvaine; Evlampidou, Iro; Font-Ribera, Laia; Rojas-Rueda, David; Gracia-Lavedan, Esther; Pearce, Neil; Vineis, Paolo]
sources: [Costet - Disinfection Byproducts Bladder Cancer 2011, Evlampidou - Trihalomethanes Bladder Cancer Burden 2020]
cluster: disinfection-byproducts
nucleus: true
confidence: low
created: 2026-08-23
updated: 2026-08-23
self_critiqued: 2026-08-23
relationships:
  related_to:
    - Fluoride and Health
    - Measurement Error in Dietary Assessment
    - Body Fatness and Cancer Risk
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
---

Nucleus of the `disinfection-byproducts` cluster and the wiki's opening on **drinking-water chemical
contaminants as a modifiable exposure**. Chlorinating water to kill pathogens generates by-products;
trihalomethanes (THMs) are the regulated marker of the mixture. The question is whether lifetime THM
exposure raises bladder-cancer risk, and — since the answer is *a small relative risk* — whether it is
a lever anyone can pull. Two sources land it: a **gold pooled/meta-analysis** of the per-exposure
**risk** (Costet 2011) and a **population-burden** translation (Evlampidou 2020) that *borrows* that
risk estimate. The Layer-1 verdict is upfront: **a small per-person effect on near-universal low-level
exposure — population-material, individually negligible, and mostly a water-treatment lever, not a
behaviour.**



> Unit note: both source PDFs' OCR dropped the micro sign, rendering **µg/L** as "mg/l" (Costet) and
> "lg=L" (Evlampidou). The correct unit is **µg/L** throughout — confirmed by the EU/WHO THM
> regulatory limit of 100 µg/L. Verbatim «...» spans below preserve the OCR artifact; prose uses µg/L.

## The risk: a modest male dose-response, null in women, null via ingestion (Costet 2011)

Costet pooled three European case-control studies (France, Finland, Spain; 5,467 subjects) and, in a
two-stage meta-analysis, combined them with the North American studies (global base **4,351 cases /
7,055 controls**). Exposure is an individual **40-year residential average TTHM level**, reconstructed
from residential history x modelled/measured tap-water THM x personal consumption
[@costet2011thm].

- **Men, top vs bottom band (meta-analysis):** «A signiﬁcant odds-ratio was observed for men exposed
  to an average residential TTHM level > 50 mg/l (OR¼1.47 (1.05; 2.05)) when compared to men exposed to
  levels # 5 mg/l.»
  [@costet2011thm] (read "mg/l" as µg/L).
  The total international meta-analysis gives OR **1.51 (1.26-1.82)** at >50 µg/L and **1.31
  (1.16-1.49)** at >5 µg/L vs <=5; linear trend p=0.01 (meta) [@costet2011thm].
- **Women: no association.** «No signiﬁcant association was found among women or with cumulative
  exposure through ingestion.» [@costet2011thm] The women's ORs are inconsistent
  and non-significant across bands (e.g. >50 µg/L OR 0.70, 0.43-1.14).
- **Studied range bounds the curve.** Among the \~75% who were exposed, the median residential TTHM was
  **30 µg/L (max 145 µg/L)**; \~25% were unexposed [@costet2011thm]. So the >50 µg/L
  "band" sits in the upper-middle of the observed data, not at an extrapolated edge, but there is no
  evidence above \~145 µg/L. No knee is located — the display is a categorical band-contrast, weak
  evidence of curve shape (-> [[Measurement Error in Dietary Assessment]]).

**The route matters and cuts against the obvious lever.** Cumulative **ingested** THM showed **no**
association (trend p=0.18 men) — yet the male signal tracked residential *level*, and in the Spanish
data «Signiﬁcant increasing risks of bladder cancer among men with bathing, showering and
swimming-pool attendance were found.» [@costet2011thm] Costet reads the level as an
«indicator of global exposure, regardless of the route (ingestion, dermal absorption or inhalation)»
[@costet2011thm]. **So dermal/inhalation exposure (showering, bathing, pools),
not drinking, carries the male signal** — a point-of-use *drinking-water* filter would target the arm
that was null. Caveat: the ingestion null may partly be measurement error (daily intake was held
constant over the 40-year window), so the route contrast is directional, not settled.

## The burden: 4.9% of EU bladder cancers, borrowing Costet's risk (Evlampidou 2020)

Evlampidou translated risk into population burden across EU28. It did **not** estimate an independent
effect: it re-derived a continuous **OR = 1.004 (95% CI 1.002, 1.006) per 1-µg/L THM increment**
«derived using pooled data for men and women age 30-80 from Costet et al. 2011»
[@evlampidou2020thm], then applied it to
current national THM means x incidence x population.

- **Exposure:** population-weighted mean THM **11.7 µg/L** (median 10, IQR 3.1-24.2), range 0 to 301
  µg/L (Portugal), covering 75% of the EU26 population
  [@evlampidou2020thm] — i.e. current EU means sit **well below** the 100 µg/L
  regulatory limit and near the bottom of Costet's studied range.
- **Burden:** PAF **4.9% (95% CI 2.5, 7.1)**, accounting for **6,561 (3,389, 9,537) bladder-cancer
  cases per year** [@evlampidou2020thm]. Country PAFs range 0-23% (highest Cyprus,
  Malta, Ireland; \~0% Denmark, Netherlands).
- **The avoidable slice:** bringing the 13 above-mean countries **down to the EU mean** (11.7 µg/L)
  cuts attributable cases by **2,868/year (95% CI 1,522, 4,060), a 43.7% reduction** to 3,693
  [@evlampidou2020thm]. So more than half the burden is the *ubiquitous background*
  that no attainable treatment removes; the actionable slice is the above-average tail (largest
  absolute reductions: Romania 891, Spain 860, UK 685 — dominated by a few high-THM systems).

## Synthesis

### The two sources are a risk-to-burden decomposition, not independent corroboration

Before any cross-source claim, the parameter table (op-weave 2a) — every row's "same quantity?" is
**NO**, and the two share authors, so this is **type-F decomposition + G-flavor (needs aggregation),
NOT independent-E**:

| Parameter | Costet 2011 | Evlampidou 2020 | Same quantity? |
|---|---|---|---|
| Effect metric | categorical OR by band, men: >50 vs <=5 µg/L = **1.47 (1.05-2.05)** | continuous **1.004 (1.002-1.006)** per 1 µg/L, both sexes | **NO** — band-contrast (men) vs per-unit slope (pooled sexes) |
| Underlying data | 3 EU + 3 N.Am/Can case-control studies pooled | *re-pools the same* «largest international pooled analysis» = Costet's data | **NO independent data** — the ER function IS Costet's |
| Output quantity | relative risk per exposure level | PAF + attributable **cases** (RR x incidence x population) | **NO** — relative risk vs population burden |
| Exposure construct | individual 40-y residential THM history | country population-weighted **current** mean | **NO** — individual lifetime vs ecological present |

Independence is defeated at the cheapest test: **Costet, Villanueva, Jaakkola and Kogevinas are
authors on both papers**, and Evlampidou explicitly builds its exposure-response on Costet's pooled
data. Evlampidou is therefore a **burden translation of Costet, not a second causal witness** — its
6,561 cases are only as sound as the borrowed OR and the assumed causality
. Evlampidou states this itself: «An
underlying assumption of this research study is the causal relationship between THMs and bladder
cancer.» [@evlampidou2020thm]

### Layer-1 sizing — a small environmental lever, dwarfed by the big rock in the same table

The emergent move is the *sizing*, visible only across the pair. In Costet's own Table 1 the dominant
bladder-cancer exposure is **smoking: current-smoker OR 3.91 (3.32-4.60)**, former 2.31
[@costet2011thm] — against which THM's OR
\~1.3-1.5 at high exposure
(1.004 per µg/L [@evlampidou2020thm],
Evlampidou's continuous estimate above) is a **small effect**. For an individual, THM is far down the
Layer-1 ranking, below smoking and below the big lifestyle rocks. The exposure is also **near-universal and low-variance** (EU mean 11.7
µg/L, mostly under the 100 µg/L limit), so:

- **The lever is structural, not behavioural.** The material burden lives at the population level
  (water-treatment optimization, keeping high-THM systems down toward the mean), where Evlampidou puts
  it. Individual behaviour barely moves it, and the one plausible individual act (filtering *drinking*
  water) targets the **ingestion** route that was **null** in Costet — the male signal ran through
  dermal/inhalation exposure (showering, bathing, pools).
- **The ceiling is the finding.** For a reasonably-healthy non-smoker on regulated municipal water at
  \~EU-mean THM, this is a small, uncertain, mostly-unactionable lever — reportable *as* small, not a
  gap to keep digging.

### Certainty and the binding constraint

Causation is **not established**: IARC/WHO judged the epidemiological evidence *insufficient* for a
causal relation, and THM is a **surrogate** for a >600-compound DBP mixture — «the three studies ...
used TTHM levels as a proxy for the global DBP level» [@costet2011thm], with the
same TTHM level carrying different underlying mixtures across countries. Retrospective exposure over a
40-year window with a 10-40-year latency is measured with large error; as with dietary intake, a
modest or attenuated dose-response is **weak evidence of no gradient**, and the categorical displays
here cannot show a knee (-> [[Measurement Error in Dietary Assessment]], [[Surrogate Outcomes]]).
`confidence: low` reflects the gold design of the pooled risk estimate held against unresolved
causality, surrogate exposure, and low individual decision-relevance.

## Open threads / gaps

- **G (needs aggregation):** a pooled SFA-style effect on bladder-cancer *incidence* that folds in the
  US studies omitted here (Beane Freeman 2017, 1,213 cases — which Evlampidou notes it did not include,
  and which reported *higher* risk in women, against the male-only European pattern)
  [@evlampidou2020thm].
- The **route question** (ingestion vs dermal/inhalation) is decision-relevant and only one study
  (Spanish) could address it — a gap, since it determines whether *any* individual lever exists.

## References

---
type: framework
question: What pattern of UV/sun exposure causes cutaneous melanoma, and does sun protection reduce it?
aliases: [Melanoma Sun Exposure, Sunscreen and Melanoma, Intermittent Sun Exposure Melanoma, Sunburn and Melanoma]
authors: [Gandini, Sara; Sera, Francesco; Cattaruzza, Maria Sofia; Boyle, Peter; Green, Adèle C; Williams, Gail M; Logan, Valerie; Strutton, Geoffrey M]
sources: [Gandini - Cutaneous Melanoma Sun Exposure Meta-Analysis 2005, Green - Sunscreen Melanoma Randomized Trial Nambour 2011]
cluster: sun-uv-exposure
confidence: medium
created: 2026-08-06
updated: 2026-08-06
self_critiqued: 2026-08-06
relationships:
  related_to:
    - Sun Exposure UV and Health
    - Diet Physical Activity and Cancer Prevention
    - The U-Shaped Association Artifact
---

**The decision-critical fact: "sun exposure" is not one exposure for melanoma.** The pattern matters
more than the dose. Intermittent, intense, burning exposure raises risk; regular chronic (occupational)
exposure does not — and the single biggest measurable signal is a **history of sunburn.** Facet of the
`sun-uv-exposure` cluster (nucleus: [[Sun Exposure UV and Health]]); this page holds the **harm arm**.

## The pattern distinction (Gandini 2005, gold MA — 57 studies, 38,671 cases)

type-B — one term ("sun exposure") resolves into distinct objects with **opposite** risk directions
[@gandini2005sun]:

| Exposure pattern | Pooled RR (highest vs lowest) | 95% CI | Direction |
|---|---|---|---|
| Sunburn history | 2.03 | 1.73-2.37 | strong risk |
| Intermittent (recreational/vacation) | 1.61 | 1.31-1.99 | risk |
| Total (all kinds) | 1.34 | 1.02-1.77 | weak risk |
| Chronic / occupational | 0.95 | 0.87-1.04 | null (slight inverse) |

- On the 19 studies reporting **both** patterns, intermittent (RR 1.46) exceeded chronic (RR 1.09),
  P=0.015 — the split is not an artifact of comparing different study sets [@gandini2005sun].
- Sunburn risk climbs with latitude (>=50 deg RR 2.54) and fair-skin prevalence; childhood sunburn
  RR 2.24. Funnel asymmetry suggests the sunburn estimate is inflated (trim-and-fill RR 1.73) — still
  a clear positive [@gandini2005sun].

**Do NOT read the chronic-exposure inverse as *occupational sun protects*.** The reference category
is *low continuous* exposure, which itself contains high-intermittent people — a confounded contrast,
not a protective effect [@gandini2005sun]:

«It is important to stress that it is unlikely that the inverse association with chronic sun exposure
means that occupational sun exposure protects against melanoma ... The reference category for
occupational sun exposure is low continuous pattern sun exposure, which will include people with high
intermittent pattern sun exposure, as well as people with low sun exposure of any kind.»

**Mechanism [@gandini2005sun].**
Intermittent bursts hit unprotected skin -> high UV transmission to melanocytes; regular exposure on
tanned, thickened skin is blocked at the epidermis. This is why *pattern beats total dose* — and why
sunburn (intense UV reaching melanocytes) is the sharpest marker. Caveat: the estimates are
observational (recall bias, control selection), and naevi were treated as an intermediate, not
adjusted for.

## The intervention leg (Green 2011, the only sunscreen->melanoma RCT)

Nambour Skin Cancer Prevention Trial, N=1,621 fair-skinned Australian adults, daily SPF-16 vs
discretionary sunscreen 1992-96, followed to 2006 (\~15 y) [@green2011]:

- All melanoma: HR **0.50** (0.24-1.02, P=.051) — borderline. Absolute 11/812 (1.3%) vs 22/809 (2.7%).
- **Invasive melanoma: HR 0.27 (0.08-0.97), a 73% reduction** — significant but the authors label the
  invasive subgroup **exploratory.**
- In situ: HR 0.73 (0.29-1.81), NS.

«Invasive melanoma was reduced by 73% in the daily sunscreen group (HR, 0.27; 95% CI, 0.08 to 0.97;
P .045) ...» [@green2011]

Outdoor time was **similar** between arms, so the effect is not from the intervention group spending
less time in the sun. Only-trial-of-its-kind; secondary endpoint; small event counts; A. C. Green
disclosed **L'Oreal research funding.**

## How the two sources relate — complementary, NOT an independence-convergence

Parameter table (BLOCKING before any cross-source claim):

| Parameter | Gandini 2005 | Green 2011 | Same quantity? |
|---|---|---|---|
| Quantity | observational risk-factor RR (highest vs lowest exposure) | RCT intervention HR (daily vs discretionary sunscreen) | **NO** — etiologic association vs intervention effect |
| Exposure contrast | intermittent 1.61 / sunburn 2.03 / chronic 0.95 | sunscreen use vs discretionary | **NO** |
| Outcome | histologically-confirmed cutaneous melanoma incidence | primary cutaneous melanoma incidence | outcome yes; effect measure no |

- Because the fourth column is NO on the effect measure, the RR and the HR are **not poolable** and
  must not be equated — Gandini establishes UV *pattern* causes melanoma (etiology); Green shows
  *protection reduces* it (intervention). Jointly they make UV's causal, modifiable role hard to
  dismiss, but this is **not type-E independent backing**: Adèle Green authored constituent
  case-control studies inside Gandini's pool (Green 1985), so the RCT and the MA share an author and
  are not independent routes [inferred from @gandini2005sun; @green2011].

## Decision relevance

- The big lever for melanoma is **avoiding intermittent burning**, not minimizing total sun. Sunburn
  history carries the largest RR and is the most actionable target.
- Sunscreen is the one **randomized** protective intervention, plausibly reducing invasive melanoma —
  but the trial is small/borderline and the invasive result exploratory. It reduced melanoma *without*
  cutting outdoor time.
- Stratum: risk concentrates in fair skin (Fitzpatrick I-II) and at high latitude / high ambient UV;
  early-life exposure matters (migrant data). The **net** decision — how this harm trades against the
  observational sun-exposure mortality benefit — lives on [[Sun Exposure UV and Health]].

## References

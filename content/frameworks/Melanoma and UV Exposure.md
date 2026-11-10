---
type: framework
question: What pattern of UV/sun exposure causes cutaneous melanoma, and does sun protection reduce it?
aliases: [Melanoma Sun Exposure, Sunscreen and Melanoma, Intermittent Sun Exposure Melanoma, Sunburn and Melanoma]
authors: [Gandini, Sara; Sera, Francesco; Cattaruzza, Maria Sofia; Boyle, Peter; Green, Adèle C; Williams, Gail M; Logan, Valerie; Strutton, Geoffrey M]
sources: [Gandini - Cutaneous Melanoma Sun Exposure Meta-Analysis 2005, Green - Sunscreen Melanoma Randomized Trial Nambour 2011]
cluster: sun-uv-exposure
confidence: medium
created: 2026-08-06
updated: 2026-11-04
self_critiqued: 2026-11-04
relationships:
  related_to:
    - Sun Exposure UV and Health
    - Diet Physical Activity and Cancer Prevention
    - The U-Shaped Association Artifact
---

**The decision-critical fact: *sun exposure* is not one exposure for melanoma.** In the observational
evidence the pattern matters more than the dose. Intermittent, intense, burning exposure is associated
with higher risk. Regular chronic (occupational) exposure shows no excess over a *low-continuous*
referent, but that is not a no-sun referent: Gandini judges an occupationally exposed person likely at
higher risk than someone with no sun at all. The largest pooled RR is for a **history of sunburn**;
whether sunburn acts in its own right or is a better-remembered marker of intermittent exposure is
unknown [@gandini2005sun]. Facet of
the `sun-uv-exposure` cluster (nucleus: [[Sun Exposure UV and Health]]); this page holds the **harm
arm**.

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
- The sunburn RR is higher in studies at latitude >=50 deg (RR 2.54 vs 1.91 below), and rises only
  borderline with the share of fair-skinned controls (meta-regression P=0.067). Childhood sunburn RR
  2.24 vs adult 1.92; in the 15 studies reporting both, the difference was not significant (P=0.182).
  Funnel asymmetry suggests the sunburn estimate is inflated (trim-and-fill RR 1.73) — still a clear
  positive [@gandini2005sun].

**Do NOT read the chronic-exposure inverse as *occupational sun protects*.** The reference category
is *low continuous* exposure, which itself contains high-intermittent people — a mixed referent, so
the inverse is unlikely to be a protective effect. The inverse tilt is in fact strongest in the better-designed studies (4
population-based studies excluding dermatological controls: RR 0.64, 0.51-0.81), and Gandini still
rejects the protective reading [@gandini2005sun]:

«It is important to stress that it is unlikely that the inverse association with chronic sun exposure
means that occupational sun exposure protects against melanoma and the occupational exposed person
likely has a higher risk of melanoma than a person who has no exposure to the sun at all. The
reference category for occupational sun exposure is low continuous pattern sun exposure, which will
include people with high intermittent pattern sun exposure, as well as people with low sun exposure of
any kind.»

**Mechanism — offered as a hypothesis [@gandini2005sun].**
The intermittent excess *may* arise because bursts hit relatively unprotected skin -> high UV
transmission to melanocytes, while regular exposure on tanned, thickening skin may be blocked at the
epidermis; a high-dose first exposure after prolonged sun avoidance damages melanocyte DNA. That would
explain why pattern could outweigh total dose. Why sunburn shows the most consistent association is
left open:

«it is not known whether sunburn is simply an indicator of a highly intermittent pattern of exposure or
whether it has some additional, independent eﬀect on the risk of melanoma.»
[@gandini2005sun]

Gandini also notes sunburn may simply be easier to recall than intermittent exposure itself, and
that pooling highest-vs-lowest RRs across different category cuts (tertiles vs quintiles) may
attenuate them — so the RRs of the four exposure metrics are not strictly like-for-like [@gandini2005sun].
Caveat: the estimates are observational (recall bias, control selection) [@gandini2005sun],
and naevi were treated as an intermediate, not adjusted for (naevi-adjusted sensitivity analyses
changed little) [@gandini2005sun].

## The intervention leg (Green 2011 RCT — unique of its kind as of 2011, per its authors)

Nambour Skin Cancer Prevention Trial, N=1,621 randomly selected residents of Nambour, Queensland,
aged 25-75 (electoral-roll sample; skin colour \~55% fair, \~38% medium, \~7% olive/brown). Daily
broad-spectrum SPF-16 sunscreen to head, neck, arms and hands every morning (reapply after heavy
sweating, bathing or long sun exposure) vs discretionary use, 1992-96, in a 2x2 factorial with
beta-carotene; followed to 2006 (\~15 y) [@green2011]:

- All melanoma: HR **0.50** (0.24-1.02, P=.051) — borderline. Absolute 11/812 (1.3%) vs 22/809 (2.7%).
- **Invasive melanoma: HR 0.27 (0.08-0.97), a 73% reduction** — significant but the authors label the
  invasive subgroup **exploratory.**
- In situ: HR 0.73 (0.29-1.81), NS. Melanomas on the prescribed application sites alone: HR 0.46
  (0.17-1.20), NS [@green2011].

«Invasive melanoma was reduced by 73% in the daily sunscreen group (HR, 0.27; 95% CI, 0.08 to 0.97;
P .045) ...» [@green2011]

Sun exposure, self-reported, was similar in the two arms during the trial (79% vs 77% spent less than
half their weekend time outdoors) and after it (3.8 vs 3.9 h a day outdoors on weekdays, P=.46; 4.6 vs
4.7 h on weekends, P=.79). Other sun protection during the trial was also similar (about 60% of both arms usually sought
shade, about 75% usually wore a hat). Green finds no evidence that the melanoma difference is
explained by a difference in sun exposure.
[@green2011]

The only trial of its kind as of 2011 (authors' statement); secondary endpoint; small event counts;
A. C. Green disclosed **L'Oreal research funding** [@green2011].

## How the two sources relate — complementary, NOT an independence-convergence

Parameter table (BLOCKING before any cross-source claim):

| Parameter | Gandini 2005 | Green 2011 | Same quantity? |
|---|---|---|---|
| Quantity | observational risk-factor RR (highest vs lowest exposure) | RCT intervention HR (daily vs discretionary sunscreen) | **NO** — etiologic association vs intervention effect |
| Exposure contrast | intermittent 1.61 / sunburn 2.03 / chronic 0.95 | sunscreen use vs discretionary | **NO** |
| Outcome | histologically-confirmed cutaneous melanoma incidence | primary cutaneous melanoma incidence | outcome yes; effect measure no |

- Because the fourth column is NO on the effect measure, the RR and the HR are **not poolable** and
  must not be equated — Gandini quantifies an observed association between UV *pattern* and melanoma
  (etiology), estimates it frames as «intended pri- marily to reﬂect the strength of an observed
  association – an important criterion of causality» [@gandini2005sun];
  Green tests whether *protection reduces* it (intervention; borderline overall). Jointly they point
  toward a causal, modifiable role, but this is **not type-E independent backing**. The two author lists
  do not overlap, but a 1985 Australian case-control study by Green A. is one of the 57 studies in
  Gandini's pool, so the trial's first author (probably the same person) contributed data to the MA
  [@gandini2005sun]. The main reason
  they are not E is the parameter table: they measure different quantities
  [inferred from @gandini2005sun; @green2011].

## Decision relevance

- The big lever for melanoma is **avoiding intermittent burning**; total sun also carries a weaker
  excess (RR 1.34, 1.02-1.77). Sunburn
  history carries the largest pooled RR (2.03); whether burning itself or the intermittent pattern it
  marks is causal is unresolved, but avoiding burns targets both [inferred from @gandini2005sun].
- **Do: don't get sunburnt** — in particular avoid a high-dose exposure after a long spell out of the
  sun. Basis: observational RRs plus a hedged mechanism, not
  trial-tested [inferred from @gandini2005sun].
- **Do: apply broad-spectrum SPF 15-16 sunscreen to head, neck, arms and hands every morning,
  reapplying after heavy sweating, bathing or long sun exposure** — the regimen Nambour tested
  against discretionary use, in subtropical Queensland (high ambient UV). Basis: one RCT, all-melanoma
  HR 0.50 (P=.051, borderline),
  invasive HR 0.27 (exploratory) [@green2011].
- Self-reported outdoor time was similar in both arms during and after the trial, so the tested action is
  *sunscreen added*, not *sun avoided* [@green2011].
- Stratum: Gandini's sunburn RR is higher in studies at latitude >=50 deg [@gandini2005sun],
  where Gandini notes fair skin is more common [@gandini2005sun],
  and only borderline higher with more fair-skinned controls (P=0.067) [@gandini2005sun].
  Early-life exposure is a lead, not an established modifier: Gandini found no significant
  childhood-vs-adult sunburn difference and flags the migrant data as worth further study [@gandini2005sun];
  Green asserts the importance of early-life exposure, citing a prior review [@green2011].
  The **net** decision — how this harm trades against the observational sun-exposure mortality
  benefit — lives on [[Sun Exposure UV and Health]].

## References

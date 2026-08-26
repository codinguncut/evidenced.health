---
type: framework
question: Treating periodontitis — which patient-important systemic outcomes does it change, and at what evidence grade for each (glycaemic control vs dementia)?
aliases: [Periodontal Disease and Systemic Disease, Gum Disease and Systemic Health, Oral Health and Systemic Disease, Periodontal Treatment Glycaemic Control, Periodontitis and Dementia]
authors: [Simpson, Terry C; Clarkson, Janet E; Worthington, Helen V; Dibello, Vittorio; Custodero, Carlo; Cavalcanti, Raffaele; Lafornara, Domenico; Dibello, Antonio; Lozupone, Madia; Daniele, Antonio; Pilotto, Alberto; Panza, Francesco]
sources: [Simpson - Periodontitis Glycaemic Control Cochrane 2022, Dibello - Periodontal Disease Cognitive Dementia Meta-Analysis 2024]
confidence: medium
created: 2026-08-23
updated: 2026-08-23
self_critiqued: 2026-08-23
relationships:
  related_to:
    - Dementia Prevention and Modifiable Risk Factors
    - The U-Shaped Association Artifact
    - Surrogate Outcomes
    - Measurement Error in Dietary Assessment
    - Layer 1 - Ranking Interventions for a Stratum
    - Fluoride and Caries Prevention
    - Depression and Modifiable Exposures
---

**The one move this page makes (type-A, present in neither source alone):** periodontitis is a
single modifiable exposure whose two most-discussed systemic outcome arms sit at **different
evidence grades**, so they license different decisions. Treating the gums to **improve glycaemic
control** rests on interventional RCT evidence (moderate certainty); the **dementia** link is
**observational association only**, confounded by a shared risk-factor cluster and with
reverse-causation live. So `treat periodontitis to lower HbA1c` is decision-supported for the
right stratum, while `treat gums to prevent dementia` is **not supported at the same grade** —
same exposure, opposite warrant. Neither Simpson (glycaemic, no dementia) nor Dibello (dementia,
no treatment trial) makes this decomposition; it is induced by placing them side by side.
[inferred from @simpson2022periodontitis; @dibello2024periodontal]

## Arm 1 — glycaemic control (interventional, causal-grade)

**Exposure:** subgingival instrumentation (scaling and root planing / non-surgical periodontal
treatment) vs no active treatment / usual care, in people with **both periodontitis and diabetes
(almost all T2D)**.

- **Effect (primary, 3-4 months):** absolute HbA1c reduction **-0.43% (4.7 mmol/mol), 95% CI
  -0.59% to -0.28%**, 30 studies, n=2443. «Moderate-certainty evidence from 30 studies (2443
  analysed participants) showed an absolute reduction in HbA1c of 0.43% (4.7 mmol/mol) 3 to 4
  months afer treatment of periodontitis (95% confidence interval (CI) -0.59% to -0.28%; -6.4
  mmol/mol to -3.0 mmol/mol).»
  [@simpson2022periodontitis] Against a control
  median HbA1c of 7.74%, this moves a patient from \~7.7% toward \~7.3%.
- **Certainty:** ⊕⊕⊕⊝ **MODERATE (GRADE)**, downgraded one level «for high risk of bias, largely
  due to lack of blinding» [@simpson2022periodontitis]; NOT downgraded for I2=70% (effects consistent across time points), and a low-RoB
  sensitivity analysis supported the finding. The authors judge it a «clinically significant
  amount» and consider «Further trials ... unlikely to change the overall conclusion»
  [@simpson2022periodontitis].
- **Durability — the horizon caveat (decision-relevant).** The effect at **6 months is smaller,
  -0.30% (95% CI -0.52% to -0.08%, 12 studies, n=1457)**; the **12-month -0.50% (95% CI -0.55% to
  -0.45%) rests on a single study (n=264)**.
  [@simpson2022periodontitis] So the benefit is
  well-evidenced over **3-6 months**; whether it is
  *maintained* long-term without re-treatment is essentially untested (one small study is not a
  durability claim). Read this as a repeated-intervention lever, not a one-off cure.
- **Harms:** where measured, none or mild; serious adverse events similar across arms — but most
  studies did not evaluate harms (insufficient evidence).
- **Outcome is a surrogate.** HbA1c is a glycaemic surrogate, not a patient-important endpoint;
  the trials did not measure microvascular/macrovascular complications or mortality
  -> [[Surrogate Outcomes]]. HbA1c has good (but not perfect) causal transmission to microvascular
  outcomes from the wider diabetes-trial literature, so it is a *reasonable* target — but the
  0.43% is demonstrated on the marker, not on the complications.

**Layer-1 sizing [inferred from @simpson2022periodontitis].** A \~0.4
percentage-point HbA1c drop is a **modest adjunct**, smaller than a glucose-lowering drug started
for the same purpose — it does not replace pharmacotherapy or diet/weight levers. Its value is
that it is (i) a *different channel* (treating an inflammatory/infectious source, not glucose
directly), so plausibly **additive** to drug and diet effects, and (ii) low-harm with an
independent oral-health rationale. For a person with untreated periodontitis and T2D it is a
real, cheap, non-substitutable increment; it is not a big rock.

## Arm 2 — dementia and cognition (observational, association-only)

**Exposure here is different:** *having* periodontal disease (present/absent), not *treating* it.
Every constituent study is observational — there is **no trial that treating periodontitis
prevents dementia**.

- **PD -> incident dementia:** **RR 1.22 (95% CI 1.10-1.36)**, 8 studies, n=3,076,684 dementia-free
  at baseline, mean follow-up 11 y. «PD was associated to higher risk of incident dementia (RR
  1.22, 95% CI 1.10 to 1.36) with sig- nificant heterogeneity across the studies (I2= 95%, p<
  0.001)» [@dibello2024periodontal]. Heterogeneity is **very high (I2=95%)**; no small-study effect (Egger p=0.473); trim-and-fill
  raised it to 1.29 (1.16-1.43). Paper's GRADE: moderate (driven by the vast pooled n).
- **PD -> cognitive impairment** (cross-sectional): RR 1.25 (1.11-1.40), I2=20%, but Egger p=0.01
  small-study effect; trim-and-fill 1.19 (1.06-1.34). **PD -> cognitive decline** (prospective):
  RR 3.01 (1.52-5.95), I2=84%, and the effect **shrinks with age** (z=-2.41, p=0.016) — a pattern
  more consistent with selection/reverse-causation than a clean dose.
  [@dibello2024periodontal]
- **PD -> depression: a NULL.** RR 1.07 (95% CI 0.95-1.21), CI crosses 1 — no association
  [@dibello2024periodontal].

**Why the dementia arm cannot carry a causal recommendation (three source-stated reasons).**

- **Reverse causation** — «studies with a follow-up period of at least 10 years have suggested
  that this association may be explained by reverse causality»; «poor peri- odontal health may not
  necessarily cause dementia, but rather results from it» [@dibello2024periodontal]. A long prodrome degrades self-care
  (including oral hygiene) years before diagnosis -> [[The U-Shaped Association Artifact]].
- **Shared confounders** — «gender and soci- oeconomic status can be common risk factors asso-
  ciated with both dementia and PD» [@dibello2024periodontal]; the discussion also names cardiovascular disease, diabetes, low
  education, smoking and drinking. These are largely the **same cardiometabolic / socioeconomic /
  behavioural cluster the Lancet Commission already counts** as dementia risk factors
  -> [[Dementia Prevention and Modifiable Risk Factors]], so a raw PD-dementia RR is heavily
  confounded by already-counted levers.
- **Confounding under-addressed** — «confounding factors were not adequately considered in over
  50% of the articles» [@dibello2024periodontal], on top of I2=95% heterogeneity.

**Mechanism is directional only.** Bacteremia/`red complex` pathogens seeding the brain,
neuroinflammation, amyloid-β and tau (from preclinical work), tooth-loss/mastication routes — all
mechanistic/animal, no human interventional confirmation
[@dibello2024periodontal].
Mechanistic plausibility is not outcome evidence (the mechanism-directional rule): it justifies
holding the lever as a candidate, not recommending it for dementia.

## Synthesis — the cross-arm decomposition (distinction, NOT tension)

The two arms answer different questions with different quantities, so this is a **distinction**,
not a joined-issue tension. The parameter table's `Same quantity?` column is **NO on every row**
(this cross-arm decomposition is the wiki's own synthesis move
[inferred from @simpson2022periodontitis; @dibello2024periodontal]):

| Parameter | Arm 1 — glycaemic (Simpson) | Arm 2 — dementia (Dibello) | Same quantity? |
|---|---|---|---|
| Exposure | periodontal **treatment** (SRP) vs usual care | **having** periodontal disease (present/absent) | **NO** |
| Design | 35 parallel **RCTs** (interventional) | 8 observational cohorts (dementia sub-arm) | **NO** |
| Effect measure | HbA1c mean difference **-0.43%** | dementia **RR 1.22** | **NO** |
| Outcome | HbA1c (glycaemic surrogate), 3-4 mo | incident dementia, \~11 y | **NO** |
| Certainty | GRADE **moderate** (RCT, RoB-downgraded) | observational; confounded + reverse-causal | **NO** |
| Causal claim licensed | **YES** — treating lowers HbA1c | **NO** — association only, no treatment trial | **NO** |

**The decision payoff [inferred from @simpson2022periodontitis; @dibello2024periodontal].**
Rank one exposure's arms by evidence strength, not by which is more talked-about:

- **Act on Arm 1** for a person with untreated periodontitis and T2D — a genuine, low-harm,
  probably-additive glycaemic increment (modest, surrogate-based, durability-limited to \~6 mo).
- **Hold Arm 2 as a candidate lever, not a recommendation** — the dementia association is real but
  confounded and possibly reverse-causal, and the interventional test (does *treating* PD lower
  dementia incidence?) has not been done. an RCT/quasi-experimental
  periodontal-treatment -> cognitive-outcome study before any dementia-prevention claim.
- **A tempting indirect route, explicitly discounted.** Because T2D is itself a Commission
  dementia risk factor, one could argue periodontal treatment -> better glycaemic control ->
  lower dementia risk. This is **speculative and double-counts**: the HbA1c effect is small and
  short-horizon, the diabetes->dementia contribution is modest, and it routes through an
  already-counted lever — not an independent dementia benefit
  [inferred from @simpson2022periodontitis; @dibello2024periodontal].

## Confidence

`medium` — carried by Arm 1's moderate-certainty RCT evidence, which is the page's strongest and
most decision-relevant claim. Arm 2 is explicitly the **weaker, `low`-grade, association-only**
leg. A `high` would be unearned: Arm 1's outcome is a surrogate over a short horizon, and Arm 2
cannot support a causal recommendation at all. **Coherence, not validity (R1):** no operation
here grades either arm against a realized complication or dementia outcome; the loop is open.

## Self-critique `[run 2026-08-23, before commit]`

- **Not laundered.** The two arms are kept individually attributed (Simpson = glycaemic RCT;
  Dibello = observational dementia) — no number is blurred across arms. The cross-arm claim is
  tagged as this page's own synthesis move.
- **Distinction, not tension (not-joined guard applied).** The parameter table is NO on every row
  — different exposure (treat vs have), design, measure, outcome, horizon — so it is filed as a
  decomposition/distinction, never a `[[tension]]`. No `contradicts:` edge.
- **No overclaim on dementia.** The dementia arm is stated as association with all three
  source-given caveats (reverse causation, shared confounders, confounding under-addressed); the
  `treat gums to prevent dementia` claim is explicitly withheld, and the indirect glycaemic route
  is discounted rather than asserted. No independence (type-E) claimed between the two sources —
  they share no data, but they also do not corroborate one claim; they decompose one exposure.
- **Durability honesty.** The 12-month HbA1c figure is flagged as single-study rather than read as
  sustained benefit — the horizon caveat the task and source both bear.

## References

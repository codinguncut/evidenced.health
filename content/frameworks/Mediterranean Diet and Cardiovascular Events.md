---
type: framework
question: Does a Mediterranean dietary PATTERN reduce hard cardiovascular events — in whom, by how much, and on which outcomes?
aliases: [Mediterranean Diet, PREDIMED, MedDiet Cardiovascular, Dietary Pattern CVD, Whole Diet Pattern RCT]
authors: [Estruch, Ramon; Ros, Emilio; Martinez-Gonzalez, Miguel A; Hernan, Miguel A]
sources: [Estruch - PREDIMED Mediterranean Diet 2018]
cluster: cardiometabolic-exposures
confidence: medium
relationships:
  related_to:
    - Does Weight Loss Reduce Cardiovascular Events
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
    - Saturated Fat Intake and Replacement
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
created: 2026-07-29
updated: 2026-07-31
self_critiqued: 2026-07-29
---

**The wiki's first whole-dietary-PATTERN RCT with hard endpoints.** Everything else in the
cardiometabolic cluster is a single nutrient (SFA, sugar, sodium) or a weight-loss trial; PREDIMED
(Estruch 2018) tests a *pattern* — Mediterranean diet vs a low-fat control — against *events*, not a
surrogate. It is the source that lets the fabric say something about patterns-vs-nutrients, and its
result is genuinely informative in both directions.


[@estruch2018]
## The headline: a pattern cut CV events \~30%, at high baseline risk — but read the components

In 7447 high-CV-risk adults with no CVD at baseline (Spain, median 4.8 yr), a Mediterranean diet
supplemented with extra-virgin olive oil or nuts, vs advice to reduce fat, cut the primary composite
(MI + stroke + CV death):

- **Combined MedDiet primary composite HR 0.70 (0.55-0.89)** — «a relative difference of 30% and an
  absolute difference of 1.7 to 2.1 percentage points» over 5 yr (5-yr absolute risk 3.8% vs 5.7%).
  [@estruch2018]
- **The composite is carried by STROKE — HR 0.58 (0.42-0.82).** MI (0.80) and CV death (0.80) are
  individually **non-significant**, and **all-cause mortality is NULL — 0.98 (0.77-1.24).** So the
  honest claim is *the pattern reduced (mostly) stroke events in high-risk primary prevention over \~5
  years*; it did not measurably move total mortality in that window. The trial was underpowered for the
  components (lower-than-expected event rates).
- **Adherence mattered:** the per-protocol (adherence-adjusted) primary HR was 0.42 (0.24-0.63).

**A second design singles out the same pattern (corroboration on a different outcome, F).** In Ge's
121-RCT network meta-analysis of 14 named diets, weight and cardiovascular risk-factor gains decay by 12
months for every diet «except for the Mediterranean diet», and Mediterranean is «the most effective» for
LDL reduction at moderate certainty -> [[Named Diet Programs Compared]] [@ge2020]. Keep the outcomes distinct: Ge measures the **LDL
surrogate** over <=12 months, PREDIMED measures **hard events** over \~5 years — so this is not a second
witness to the *event* finding, but two unrelated designs both flagging Mediterranean as the pattern with
something durable. (Corroboration line; Ge is not a `sources:` entry here.)

## Why this matters at the pattern level — three decision-relevant reads

1. **The pattern worked WITHOUT weight loss or exercise.** The diet was «energy-unrestricted» and
   physical activity was not promoted; there was little between-group weight change. So a *composition*
   change — not calorie restriction, not weight loss — moved events. This is the striking complement to
   [[Does Weight Loss Reduce Cardiovascular Events]]: lifestyle **weight loss** did not cut CV events
   (Look AHEAD null; the 54-RCT meta-analysis null on events), yet a dietary **pattern** did. The lever
   for CV events here is *what you eat*, not *how much you weigh*.
2. **High baseline risk is why the absolute benefit is real.** These were high-risk adults (\~49% T2D,
   \~82% hypertensive); absolute benefit scales with baseline risk
   ([[Baseline Risk and the Relative-Absolute Split]]). Author-stated: «whether the results can be
   generalized to persons at lower risk requires further research.» So this REFINES
   [[Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People]] rather than overturning it
   — a pattern intervention buys hard-outcome benefit *where baseline risk is high*; it says nothing
   about the low-risk person, where the ceiling argument still binds.
3. **The contrast was a small pattern shift, not diet-vs-junk.** Most participants ate near-Mediterranean
   at baseline and the control got healthy-diet advice; the largest between-group differences were in
   **fat subtypes** (the supplied EVOO and nuts) plus more fish and legumes. That the 30% came from a
   *modest* shift over an already-decent diet cuts both ways — impressive per unit change, but not a
   licence to expect the same from adding EVOO to a poor diet.

## The fat-quality channel — corroborates the SFA replacement story on HARD outcomes

The intervention's active contrast was largely a shift toward **unsaturated fat** (EVOO, nuts) — the
same replacement [[Saturated Fat Intake and Replacement]] argues for on LDL/apoB and events. PREDIMED
adds the whole-pattern, hard-outcome version of that channel: a mono/polyunsaturated-rich pattern cut
events. `[E-independent]` is NOT claimed — the mechanism overlaps the SFA-replacement channel rather
than arriving from a separate route, so this is refinement/consistency, not independent backing.
## The provenance caveat travels with the estimate (symmetric standards)

PREDIMED's 2013 report was **withdrawn** (Carlisle 2017 flagged non-random baseline distributions);
the 2018 re-analysis found real irregularities — 425 household members assigned without randomization,
one site assigned by clinic, inconsistent tables at another — and re-estimated with propensity scores
over 30 covariates, «methods that do not rely exclusively on the assumption that all the participants
had been randomly assigned». Results held across sensitivity analyses (excluding the 1588 deviating
participants — Sites D+B + second household members, n=5859: combined HR 0.69 (0.53-0.92)). **Internal
validity is therefore RCT-with-propensity-repair, not a
clean randomized contrast** — a real, quantified discount that a favourable result does not earn
exemption from. Held here as a `medium`-confidence finding for that reason.


[@estruch2018]
## Parameter table — the pattern-vs-weight-loss contrast (BLOCKING cross-source check)

| Parameter | PREDIMED (this) | Look AHEAD / Ma ([[Does Weight Loss Reduce Cardiovascular Events]]) | Same quantity? |
|---|---|---|---|
| Intervention | MedDiet pattern (EVOO/nuts), energy-unrestricted | Intensive lifestyle for **weight loss** (calorie deficit + PA) | **No — different lever** (composition vs energy/weight) |
| Population | High-risk primary prevention (no CVD; \~49% T2D) | Look AHEAD: **established T2D**; Ma: obese adults | Overlapping, not identical |
| Primary outcome | MI + stroke + CV death | CV composite (similar) | Yes (CV event composite) |
| Result on CV events | HR **0.70** (0.55-0.89) | **Null** (Look AHEAD \~0.95; Ma null on events) | Comparable outcome, opposite result |
| Weight change | Minimal (energy-unrestricted) | Substantial (the intervention's target) | — |

**Defensible claim from the table:** for CV *events*, the dietary-**pattern/composition** channel and
the **weight-loss** channel are distinct, and here the pattern channel delivered where weight loss did
not — *with the caveat that the populations and comparators differ*, so this is a reasoned cross-trial
contrast (type-A synthesis), not a head-to-head.
## Limits

- **Single trial, `confidence: medium`** — one landmark RCT, and one carrying an internal-validity
  discount (the reanalysis). The observational + Lyon-secondary-prevention consistency the paper cites
  is *within-source* and same-diet-hypothesis, so it is not independent (type-E) backing; a second
  independent pattern-RCT would raise confidence.
- **Stroke-specific, mortality-null over 4.8 yr** — do not read the composite as a mortality claim.
- **High-risk, Mediterranean-baseline population** — transportability to low-risk or non-Mediterranean
  eaters is the open question the authors themselves flag.
- **Not a component-isolation trial** — it cannot say whether EVOO, nuts, fish, or the whole gestalt
  did the work (the observed-healthy-pattern-is-not-evidence-for-a-component caveat applies).
## Self-critique `[run 2026-07-29, before commit]`

- **Over-claim check:** the composite 0.70 is not read as a mortality or MI claim — the stroke-driven
  decomposition and the null all-cause HR are stated up front; the *pattern beats weight loss* claim is
  tagged and gated behind a parameter table naming the population/comparator differences,
  not asserted as head-to-head.
- **Laundered-E avoided:** the SFA-replacement overlap is explicitly called refinement/consistency, NOT
  `[E-independent]`, because the mechanism is shared, not a separate route; the within-source
  observational corroboration is flagged as non-independent.
- **Symmetric standards:** the retraction/reanalysis discount is applied to a *favourable* result — the
  exact case where motivated reasoning would wave it through.

## References

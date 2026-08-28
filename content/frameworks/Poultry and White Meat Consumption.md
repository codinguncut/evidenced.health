---
type: framework
question: Does eating more poultry (white meat) change all-cause mortality or cardiovascular risk, and by how much — and is any signal the poultry or what it displaces?
aliases: [White Meat, White Meat Consumption, Poultry Consumption, Poultry and Mortality, White Meat and Mortality, Chicken Consumption]
authors: [Lupoli, Roberta; Vitale, Marilena; Calabrese, Ilaria; Giosue, Annalisa; Riccardi, Gabriele; Vaccaro, Olga; Kim, Kyuwoong; Hyeon, Junghyeon; Lee, Sang Ah; Kwon, Sung Ok; Lee, Hyejin; Keum, NaNa; Lee, Jong-Koo; Park, Sang Min]
sources: [Lupoli - White Meat All-Cause Mortality Cardiovascular Meta-Analysis 2021, Kim - Meat Stroke Incidence Mortality Meta-Analysis 2017]
cluster: white-meat
nucleus: true
confidence: low
created: 2026-08-28
updated: 2026-08-28
self_critiqued: 2026-08-28
relationships:
  related_to:
    - The Comparator Problem
    - Fish and Seafood Consumption
    - Should Adults Reduce Red and Processed Meat
    - Red and Processed Meat and Cancer
    - Which Objective Moved This Recommendation
    - Dietary Protein and Mortality
    - Measurement Error in Dietary Assessment
---

**Nucleus of the `white-meat` cluster.** The poultry -> patient-important-outcome cell, newly opened.
Until now the fabric held poultry only as the *substitute arm* inside red-meat substitution analyses;
this is its first first-hand exposure->outcome evidence. Two gold meta-analyses of observational
cohorts now held — Lupoli (all-cause + CV mortality/events) and Kim (stroke incidence + mortality);
the CVD/type-2-diabetes endpoint still awaits.

## What "white meat" is here — and why the exclusion of fish matters (the B-distinction)

The exposure is **poultry (chicken, turkey, duck, goose) and rabbit — EXCLUDING fish.** Lupoli
«included studies deﬁning "white meat" as poultry (chicken, turkey, duck and goose) and rabbit» and
deliberately dropped a fish-combined study (Sinha) and a fried-poultry-only study (Sun), because it
«better deﬁned white meat by excluding studies on ﬁsh, due to the different health impact of ﬁsh and
poultry consumption, which may have confounded prior analyses». This is a decision-relevant
terminological cut: an earlier MA (Abete 2014) mixed fish into "white meat," and fish carries its own
distinct effect profile -> [[Fish and Seafood Consumption]]. A finding attached to the label "white
meat" does not transport unless the label excludes fish. `type-B`
[@lupoli2021whitemeat]

## The effect estimate

```
effect_measure:          all-cause mortality OR 0.94 (95% CI 0.90, 0.97; p<0.001), highest vs lowest
                         intake (a 6% lower rate). CV mortality OR 0.95 (0.89, 1.01; p=0.13) — null.
                         Non-fatal CV events OR 0.99 (0.95, 1.02; p=0.48) — null.
population_and_comparator: general adult cohorts, 22 prospective studies, 3,132,149 subjects;
                         highest vs LOWEST self-reported white-meat category (not a defined dose).
outcome:                 all-cause mortality (patient-important); CV mortality + non-fatal CV events.
dose_response_shape:     NONE estimated — categorical highest-vs-lowest only; exposure metrics
                         heterogeneous across studies (servings/day, servings/week, g/day). No knee,
                         plateau, or threshold locatable.
uncertainty:             very high heterogeneity (all-cause I2 95.6%, not reduced by leave-one-out);
                         observational only; residual confounding acknowledged.
effect_modifiers:        none found — meta-regression showed no impact of age, male gender, BMI,
                         hypertension, diabetes, prior CV events, smoking, or follow-up on the
                         all-cause estimate (a negative route-(b) result).
certainty:               the source gives no GRADE rating; observational + high-heterogeneity +
                         residual-confounding put this at LOW certainty on the wiki's reading.
confidence: low
```

- The all-cause signal is **small and, in absolute terms, unquantified here** — a 6% relative
  reduction on a *highest vs lowest* contrast whose exposure separation differs study to study, so it
  cannot be read as a per-serving effect or converted to an absolute risk difference without the
  baseline and the contrast width. State it as *relative, on an undefined contrast*, not as a dose.
- **The two CV endpoints are null**, and shape is **outcome-specific**: an all-cause benefit sits
  beside a neutral CV mortality and a neutral CV-events result in the same analysis. That the
  all-cause effect is not carried by a matching CV-mortality effect is itself a caution about the
  6%.
[@lupoli2021whitemeat]

## The comparator problem is the load-bearing caveat

The all-cause association is **inseparable from what poultry displaces.** Lupoli states it plainly:
«The interpretation of the effects of white meat consumption on health is a difﬁcult task, as
subjects consuming more white meat are, at the same time, consuming less red meat. On the other hand,
people with a low red meat intake may prefer others protein sources, such as proteins from vegetable
origin that could have per se a beneﬁcial impact on cardiovascular health.» So a high-poultry diet is
also a low-red-meat diet and often a more-plant-protein diet, and the 6% could be crediting poultry
for the *removal of red meat* or the *addition of plant protein* -> [[The Comparator Problem]]. The
author's own reframe — «white meat... is a source of high-quality proteins and may therefore fully
substitute red meat» — is a substitution claim, not evidence that poultry per se lowers mortality.
[@lupoli2021whitemeat]

## Mechanism — directional, not an outcome finding

[inferred from @lupoli2021whitemeat] Marked as
mechanism, human-corroborated but discounted: poultry vs red meat carries lower fat, a more
favourable (mostly unsaturated) fatty-acid profile, and lower heme iron, with SFA and heme iron named
as atherosclerosis-promoters; processed-meat preservatives (sodium, nitrates) promote hypertension,
insulin resistance, and endothelial dysfunction. This gives a *direction* (poultry less harmful than
red/processed meat on a CV pathway) but the CV endpoints here were null, so the mechanism is not
confirmed by this outcome evidence — hold it as directional support for the substitution reading, not
as a demonstrated poultry benefit.

## Robustness and what does not move it

- Excluding low-quality studies (NOS < 6) confirmed all three estimates (all-cause 0.95 [0.91, 0.99]).
- No publication bias for all-cause/CV mortality (Egger p = 0.71, 0.85); significant bias for CV
  events (Egger p < 0.001) but trim-and-fill held the null.
- Geographic subgroups for all-cause were directionally consistent but the Asian subset was both
  significant and low-heterogeneity (0.94 [0.90, 0.98], I2 12.9%) while America carried near-total
  heterogeneity (I2 98.5%) and Europe was non-significant.
[@lupoli2021whitemeat]

## The stroke endpoint (Kim 2017) — white meat favourable, on a thin base

Kim pooled prospective cohorts on meat -> stroke, keeping the SAME fish-excluding definition of white
meat («white meat: poultry meat only (ﬁsh excluded)»), so the exposure is comparable to Lupoli's.
For white-meat -> stroke incidence the pooled RR is **0.87 (95% CI 0.78-0.96), I2=0.00** — a \~13%
relative reduction — but on a **much thinner base than Lupoli's all-cause estimate**: the white-meat
pool rests on «4 comparisons (138 761 participants)» from just 2 articles, versus Lupoli's 22 studies /
3.1M subjects. No heterogeneity (I2=0), but only two source articles and a highest-vs-lowest categorical
contrast — **no dose-response, no absolute risk difference**, same categorical-exposure limitation as
Lupoli.
[@kim2017meatstroke]

- **Stroke *mortality* for white meat is UNESTIMABLE here** — Kim «were not able to perform analyses on
  the associations between processed and white meat consumption and stroke mortality because of
  limitation of data». So the favourable signal is on stroke *incidence* only; the cause-specific
  fatal endpoint is a data gap, not a null.
  [@kim2017meatstroke]
- **The measurement-error caveat is stated at source:** self-reported meat consumption «may have led
  to a misclassiﬁcation of the different types of meat caused by a measurement error», and the
  high-vs-low cutpoints — «quantity of meat intake dividing high versus low consumption groups were not
  entirely consistent in the studies included in this meta-analysis» — so the categorical contrast is
  the same self-report attenuation that binds every dietary dose-response
  -> [[Measurement Error in Dietary Assessment]].
  [@kim2017meatstroke]

### The within-Kim contrast is the decision-relevant move (a substitution signal)

In the SAME analysis, same design and pooling, the meat types split by direction:

| Meat type (Kim, highest vs lowest) | Stroke incidence RR (95% CI) | I2 | Direction |
|---|---|---|---|
| Total meat | 1.18 (1.09-1.28) | 0.00 | **increase** |
| Red meat | 1.11 (1.03-1.20) | 0.00 | **increase** |
| Processed meat | 1.17 (1.08-1.25) | 0.00 | **increase** |
| White meat | 0.87 (0.78-0.96) | 0.00 | **decrease** |

Kim states the split directly — total, red and processed «meat intake is associated with an increase of
stroke incidence, whereas white meat (RR, 0.87; 95% CI, 0.78–0.96 [I2=0.00]) consumption is related to
a reduction of stroke incidence.» (Total and red meat -> stroke *mortality* were null — 0.97 [0.85-1.11]
and 0.87 [0.64-1.18] — so the incidence signal does not carry to fatal stroke for the red/total arms.)
[@kim2017meatstroke]

Kim draws the substitution recommendation explicitly: «Individuals who are at a higher risk of stroke
who habitually consume red and processed meats should consider substituting a source of their protein
intake to white meat.» This is the **substitution frame** the whole cluster turns on — the poultry
*benefit* is a *contrast against red/processed meat within one analysis*, not proof that poultry per se
protects, exactly as the comparator caveat above warns -> [[The Comparator Problem]],
[[Should Adults Reduce Red and Processed Meat]].
[@kim2017meatstroke]

## Cross-source composite — what Kim adds to Lupoli (type-F, endpoint extension)

The two sources do **not** measure the same quantity, so this is a claim-refinement (F), not an
independent-backing convergence (E). The parameter table shows why — every *same quantity?* cell is NO:

| Parameter | Lupoli 2021 | Kim 2017 | Same quantity? |
|---|---|---|---|
| Exposure | white meat, fish excluded | white meat = poultry only, fish excluded | **YES** — same B-distinction |
| Contrast | highest vs lowest, categorical | highest vs lowest, categorical | YES — both undefined dose |
| Endpoint | all-cause mortality; CV mortality; non-fatal CV events | stroke incidence; stroke mortality | **NO — different outcomes** |
| White-meat estimate | all-cause OR 0.94 (0.90-0.97); CV null | stroke incidence RR 0.87 (0.78-0.96); stroke mortality unestimable | NO — different endpoints |
| Evidence base | 22 studies / 3.1M | 2 articles / 4 comparisons / 138 761 | NO — Kim far thinner for white meat |

**No cell pairs an identical quantity across the two, so there is no E and no D — the honest move is F:**
Kim *extends* the composite with a stroke-incidence endpoint Lupoli did not isolate. The composite the
two build together (mark):



- **White meat reads favourable on the two *aggregate/incidence* endpoints — all-cause mortality
  (Lupoli 0.94) and stroke incidence (Kim 0.87) — but null or unestimable on the cause-specific
  *cardiovascular* endpoints** (Lupoli CV mortality 0.95 null and non-fatal CV events 0.99 null; Kim
  white-meat stroke mortality unestimable). The one place the two endpoints come closest — Kim's
  favourable stroke *incidence* (0.87) beside Lupoli's null non-fatal *CV events* (0.99, which would
  include stroke) — mildly *diverges*, and Kim's base is only two articles, so the composite reading is
  **a small favourable signal concentrated on aggregate endpoints, not a demonstrated cardiovascular
  mechanism.** This is consistent with, and reinforces, the single-source caution above that the
  all-cause 6% is *not carried by a matching CV-mortality effect*.
- **Both are substitution-confounded and both say so** — Kim's within-analysis red/processed-vs-white
  split and Lupoli's red-meat-displacement caveat are the *same* structural point reached on two
  endpoints: what looks like a poultry benefit is inseparable from the red/processed meat it replaces
  -> [[The Comparator Problem]].

## Open gaps (type-G)

- **No dose-response.** The exposure is a heterogeneous highest-vs-lowest contrast; a per-gram curve,
  a knee, or an absolute risk difference cannot be read from this source.
- **Confounding by red-meat displacement is unresolved** — the central caveat above; no analysis here
  isolates poultry from what it replaces.
- **Stroke *mortality* for white meat** — unestimable in Kim (data limitation); still an open cell,
  distinct from a null. Stroke *incidence* is now held (Kim 0.87, thin 2-article base, above).
- **CVD + type-2-diabetes** endpoint for white meat — held by (the NNR2023 SR group).
- **No dose-response on any endpoint** — both held sources use categorical highest-vs-lowest contrasts;
  a per-gram poultry curve, knee, or absolute risk difference remains uncomputable (needs aggregation).


## Self-critique `[run 2026-08-28 after attaching Kim's stroke endpoint — the cross-source step]`

- **The type is F, and the temptation was E — resisted.** Two independent groups (Naples, Seoul)
  reaching *white meat looks favourable* is exactly the shape that invites an `[E-independent]` stamp.
  The parameter table blocks it: no cell pairs an *identical quantity* (Lupoli all-cause / CV mortality
  vs Kim stroke incidence / stroke mortality), so the agreement is on the *substitution framing*, not on
  a common endpoint. No `[E-independent]` token was applied; the composite is, not sold as
  convergent backing.
- **Not a manufactured tension either.** Kim's favourable stroke incidence (0.87) beside Lupoli's null
  non-fatal CV events (0.99) could be dressed as a D-clash. It is not filed as one — they are different
  quantities on a thin base (Kim = 2 articles), so it is recorded as a *mild divergence within the
  composite*, a caution, not a joined issue.
- **The thinness is stated, not buried.** The white-meat stroke estimate rests on 2 articles / 4
  comparisons; that limitation leads the section rather than trailing it, and the favourable number is
  not allowed to read as robust.
- **Symmetric standards held.** The within-Kim red/processed/white split is the decision-relevant move,
  but it is a *substitution contrast*, not proof poultry protects — the same comparator caveat applied to
  Lupoli is applied to Kim, so cashing the AWAITS did not tilt the page toward a *poultry is protective*
  pole. The stroke-mortality UNESTIMABLE arm is held as a gap, never as a reassuring null.

## Provenance / independence note

Two gold MAs from **separate groups** — Lupoli from the Naples group (Riccardi/Vaccaro), Kim from
Seoul National University (Park/Lee) — a point in favour of the *shared* substitution reading, but NOT
a type-E convergence: they measure different endpoints (parameter table above), so the agreement is on
the *framing*, not on a common quantity. Lupoli was funded by the Barilla Center for Food and Nutrition
Foundation, stated to have no role in design or analysis — recorded as a funding note, not a refutation
(symmetric standards; the argument stands on its methods). Lupoli also invokes **environmental
sustainability** (poultry's lower ecological footprint) inside its recommendation — a named non-health
axis the fabric records but does not price -> [[Which Objective Moved This Recommendation]].
[@lupoli2021whitemeat]
[@kim2017meatstroke]

## References

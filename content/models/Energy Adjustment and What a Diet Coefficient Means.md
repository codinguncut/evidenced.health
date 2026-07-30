---
type: model
question: When a study reports an effect of a nutrient, what exactly is being substituted for what?
aliases: [Energy Adjustment, Residual Method, Nutrient Density, Energy Partition, Isocaloric Substitution, Substitution Models]
authors: [Willett, Walter]
sources: [Willett - Nutritional Epidemiology 3e, ESC - CVD Prevention Guidelines 2021]
cluster: nutrition-methods
nucleus: true
confidence: medium
relationships:
  related_to:
    - Framing a Decision Question
    - Saturated Fat Intake and Replacement
    - Measurement Error in Dietary Assessment
created: 2026-07-25
updated: 2026-07-30
self_critiqued: 2026-07-30
---

**Nucleus of the `nutrition-methods` cluster.** The comparator problem
([[Framing a Decision Question]]) has a technical form in nutrition that has no analogue in most
fields: **the analytic model silently decides what the nutrient is being compared against.** Two
studies can report "the effect of saturated fat" and mean different comparisons.


[@willett]
## Why energy must be handled at all

Three reasons, per Willett: energy intake may itself cause disease; individual differences in total
energy produce variation in every nutrient unrelated to dietary *composition*; and where energy is
associated with disease **but is not a direct cause**, it confounds specific nutrients.
[@willett, Ch 11, Abstract]

The driver is that **essentially every nutrient correlates with total energy**, including ones that
supply none: "the correlation with energy was 0.36 for fiber, 0.45 for vitamin A, and 0.34 for
vitamin C... This tendency for all nutrients, even minerals and vitamins, to be correlated with total
energy intake results from the tendency of larger, more active, and less metabolically efficient
persons to eat more food in general."
[@willett, Ch 11, Relation of Energy Intake with Specific Nutrient Intake]

And energy intake is mostly *not* a dietary choice: between-person differences are largely body size,
physical activity and metabolic efficiency — so much so that "in most instances total energy intake
can be interpreted as a crude measure of physical activity, particularly after controlling for body
size, age, and gender."
[@willett, Ch 11, Determinants of Between-Person Variation]

**Why composition is therefore the exposure:** "even relatively small changes in caloric intake
cannot be made unless changes in weight or physical activity also occur. In the absence of such
alterations, therefore, most changes in nutrient intake must be accomplished by changing the
composition of the diet rather than the total amount of food."
[@willett, Ch 11, Adjustment for Energy Intake]

## The models, and the comparison each implies

| Model | What the nutrient coefficient means |
|---|---|
| **Residual (energy-adjusted)** | for **macronutrients expressed in calories**: the nutrient's calories **substituted for an equal number of calories from all other sources**, total energy fixed |
| **Standard multivariate** | algebraically identical to the residual method for the *nutrient* term — but the **calories** term now means *energy from everything else* |
| **Energy partition** | **ADDITION, not substitution** — more of the nutrient added, others held constant |
| **Multivariate nutrient density** | isocaloric; composition at fixed total energy |
| **Two nutrients modelled together** | substituting the named nutrient for **the omitted one** |

The load-bearing quotes:

- Residual method: "For macronutrients, if expressed in units of calories (e.g., calories from fat),
  the residuals can also be conceptualized as the substitution of that nutrient for a similar number
  of calories from other sources."
- Energy partition: "this model implies that more of the nutrient would simply be added to one diet,
  keeping the other nutrients constant. Thus, this is not an 'isocaloric' comparison, and any
  observed association with the nutrient can still be confounded by total energy intake."
- Two-nutrient models: "The effect of fat would then be interpreted as the effect of substituting the
  specific number of calories from fat... for the same number of calories... from carbohydrate (with
  the macronutrient not included in the model), with total energy held constant."
  [@willett, Ch 11, Energy-Adjusted or Residual Method; The Energy Partition Method; More Complex Models]

## Failure modes

- **Nutrient density used alone, where energy predicts disease.** A density is the nutrient times the
  *inverse* of energy, so it "tend[s] to be associated with disease in the direction opposite to that
  of total caloric intake, even when the nutrient itself has no association." The reductio: "any
  random variable divided by total energy intake would be positively associated with risk of coronary
  heart disease." The general principle — "dividing by a variable does not necessarily remove or
  'control for' the effect of that variable."
- **Reading a partition-model coefficient as a substitution.** It is an addition model; the
  substitution question requires the *difference* between the nutrient's coefficient and that for
  other calories.
- **Unstated comparators in meta-analysis.** Willett's diagnosis of the Siri-Tarino 2010
  meta-analysis: "the unstated comparison was with other calories in the diet, because most studies
  did not specifically compare saturated fat with another source of energy; in most countries, these
  other... calories would be predominately derived from refined grains and sugar **but would also
  include protein and other types of fat**."
  [@willett, Ch 19 (p.436)]
- **Heteroscedasticity manufacturing a shape.** Uncorrected, residuals at both extremes carry the
  highest energy intakes, which "would create a U-shaped relation between energy-adjusted intake
  (residuals) and disease risk" — a curve produced by the analysis, not the biology. Directly relevant
  to any U/J-shaped dose-response claim.

## Decision relevance

- ***The effect of nutrient X* is incomplete until the model is named.** This is the comparator rule
  with teeth: the substitution is chosen by an analytic decision the reader usually cannot see.
- **A null for a nutrient may be a null *for one particular swap*.** Saturated fat versus
  unspecified other calories in a typical Western diet is largely saturated fat versus refined starch
  and sugar — which is why the same data give RR 0.97 against carbohydrate and RR 1.25 against
  polyunsaturated fat ([[Saturated Fat Intake and Replacement]]).
- **Where energy balance is not stable, the framing changes.** Willett's case for composition-as-
  exposure presumes long-run balance. He names *"**one of the few exceptions**"* — *"when **adiposity
  or weight change** is the outcome"* — explicitly signalling the list is not exhaustive, plus the
  "overcontrol" case where caloric excess is itself the exposure. The chapter does **not** treat a
  reduce-without-replacement regime.

## Limits

- Model interchangeability breaks for **categorical** analyses: "the statistical interchangeability of
  the standard multivariate, energy partition, and residual models does not apply", and categorical
  analyses on the standard-multivariate and partition models "are probably best avoided."
- Energy adjustment does not fully remove energy confounding when energy itself is measured with
  error: "control of confounding may not be complete."
- 2012 source; the modelling conventions are stable but the worked examples predate the current
  literature.


` quoted inline]`
## Energy adjustment's effect on measurement error is two-sided `[2026-07-28, Willett ch.3 + ch.11; scoped 2026-07-30 self-critique]`

This page argues energy adjustment is necessary to make a nutrient coefficient mean anything. **Willett
records a cost that runs the other way — but also a benefit, and both are his; the honest reading holds
the two together rather than headlining only the cost.**

> «The ratio of within-person to between-person variation is usually substantially greater when the
> nutrient is expressed in relation to energy intake (energy-adjusted).»
> [@willett, abstract]

**Why this matters here:** the within-to-between variance ratio is what sets how many days of dietary
measurement are needed to place a person correctly. **Raising it means the same data support a weaker
individual-level exposure estimate** — so energy adjustment buys interpretability at a price paid in
attenuation.

**The direction is not universal, and the exception is instructive.** On Willett's own Table 3-6 the
ratio rises for total fat (1.70 -> 1.94), monounsaturated fat (1.80 -> 2.12), polyunsaturated fat
(2.27 -> 2.34) and carbohydrate (1.13 -> 1.39), but **falls** for protein (2.01 -> 1.79) and
cholesterol (2.61 -> 2.55). The full table sits on
[[Measurement Error in Dietary Assessment]] with the ratio arithmetic shown.

**And Willett records the benefit running the other way, in the same book.** By holding diet composition
within a narrow energy range, energy adjustment «can also reduce measurement error, sometimes
substantially» — it cancels the correlated component of error that total energy induces across nutrients.
[@willett, ch.11 p.278] So the *net* effect on
measurement error is **not one-signed**: the within-to-between ratio can rise (weakening the
individual-level estimate) while correlated-error cancellation can improve validity. Willett holds both;
reading only the variance-ratio cost is the one-sided error.

**The reason the interpretive fix is worth it anyway is on this page already** — an unadjusted nutrient
coefficient answers a question nobody asked (*more of this nutrient, and more food overall*). **So the
honest statement is a trade with effects on both sides, not a pure cost:** adjustment fixes *what the
coefficient means*, can cancel correlated error, and can *also* raise the within-to-between ratio for
some nutrients — the sign of that last effect varies by nutrient (Table 3-6 above).
``

## The adjustment term stops meaning what its label says `[2026-07-28, Willett ch.13]`

This page's core claim is that the analytic model decides the comparator. **Chapter 13 shows the same
thing happening to the *covariate*, which is easier to miss:**

> «With total fat held constant, this may also be considered a substitution model; that is, does
> substituting saturated fat for other types of fat influence disease risk? In this model, the term for
> total fat no longer has the biological meaning of total fat because a major component, saturated fat,
> is included separately; its meaning then becomes monounsaturated and polyunsaturated fat.»
> [@willett]

**A model containing both saturated fat and total fat does not contain a total-fat term at all — it
contains an unsaturated-fat term wearing the total-fat label.** The variable's name in the table and
the quantity it estimates have come apart, silently.

**Two consequences, and the second is the one that bites in practice.**

- **The SFA coefficient in that model is a substitution effect** — SFA replacing unsaturated fat — even
  where nothing in the paper says *substitution*. -> [[Saturated Fat Intake and Replacement]], where
  *replaced by what* is the whole question and the answer is often buried in the covariate list.
- **Any coefficient reported for the adjustment term is uninterpretable as labelled.** A reader
  scanning a table for *"total fat: RR 0.98"* is reading the effect of **unsaturated** fat. **Reading
  the covariate list is not optional bookkeeping; it is where the comparator is defined.**
  ``

## A displayed dose-response can show the model rather than the data `[2026-07-28, Willett ch.13]`

> «One clearly inappropriate approach is to analyze the data as continuous, but then present the
> findings as though they were categorical; for example, by displaying the odds ratios (and confidence
> intervals) for multiple discrete levels of intake that are all based on a single regression
> coefficient (see Table 13-1). This provides the potentially misleading impression of a clearly
> monotonic relationship, as well as confidence intervals that are too narrow for a specific level
> because they are based on the overall data.»
> [@willett]

**The defect is circular by construction.** If every displayed level is generated from **one** slope,
the picture *cannot* show a knee, a plateau or a threshold — monotonicity is an output of the model
specification, not an observation about the exposure. **And the intervals are too narrow**, because
each level borrows precision from the whole dataset rather than from the data at that level.

**The diagnostic, stated so it can be run:** for any published dose-response table or figure, ask
whether the per-level estimates come from **separate category-specific coefficients** or from **one
continuous coefficient evaluated at several points**. Only the first can evidence a shape.

**Recorded as bearing on the corpus's dose-response `[PRIOR]`, NOT scored** — adjudication sits outside
an ingest. Stating the bearing precisely: CLAUDE.md records the knees-and-plateaus prior as falsified
because the examined curves were *monotone over the studied range or not estimable*. **Willett supplies
a mechanism by which an apparently monotone display can be an artifact of presentation** — so the
strength of that falsification depends on which display type produced each curve, and **that has not
been checked for the four sources involved.** This neither restores the prior nor overturns the
falsification; it identifies a check that was never run. Handle for whoever scores it: the
dose-response `[PRIOR]` in CLAUDE.md.

**Also held from this chapter, bearing on the same question:** «Extreme values are primarily at the
high end of the distribution due to the skewed distributions of most nutrients, and they can be
heavily influential when nutrients are considered as continuous variables» — so the tail that would
locate a knee is both sparse and high-leverage.
[@willett]

## A positive plateau claim — and it cuts the other way from chunk 18 `[2026-07-28, ESC]`

The section above records a mechanism by which an apparently **monotone** display can be an artifact.
**ESC supplies a datum pointing the opposite direction: an explicit plateau, from a Tier-A body.**

The sentence is split across a page break in the source; both fragments locate:

> «A meta-analysis reported a 4% lower risk in CV mortality for each additional serving of fruits»
> ... «(equivalent to 77 g) and vegetables (equivalent to 80 g) per day, while all-cause mortality was
> not reduced further with intakes of more than five servings.»
> [@esc2021]

**Two outcomes, one exposure, two different shapes:**

- **CV mortality** — a **per-serving gradient**, 4% per additional serving, stated with no upper bound.
- **All-cause mortality** — **«not reduced further»** beyond **five servings**. That is a plateau
  claim, located, with a number.

**This is the corpus's first explicitly stated plateau**, and it is outcome-specific — the same
structure the Willett whole-grain sentence hinted at and could not resolve.

**Recorded against the dose-response `[PRIOR]`, NOT scored.** Stating the position precisely, because
this session has now produced findings in **both** directions:

- **Toward the falsification** (curves are monotone): the four originally examined curves.
- **Toward restoring the prior** (knees exist): **this ESC plateau**, explicitly stated.
- **Undermining the falsification's evidential basis**: Willett's single-coefficient display artifact,
  and flat-slope compression that can erase a knee.

**None of this is a verdict**, and an ingest may not issue one. What can be said is that the prior's
status is **less settled than a flat "FALSIFIED" implies**, and the next scoring pass has three new
inputs. Handle: the dose-response `[PRIOR]` in CLAUDE.md.

**Two caveats that bound the ESC datum itself.** It is one sentence reporting someone else's
meta-analysis, with **no interval, no certainty rating, and no reference to the shape's robustness**;
and *«not reduced further»* in a guideline sentence may reflect the studied range ending near five
servings rather than a true flattening — **the same ambiguity flagged on the Willett whole-grain
sentence, and unresolved for the same reason.**

## References

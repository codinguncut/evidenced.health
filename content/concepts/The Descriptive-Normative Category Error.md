---
type: concept
question: When is a quantity or label being read as more than it is — a descriptive measure promoted to a normative target — and what is the right-typed instrument instead?
aliases: [Descriptive Normative Category Error, Is-Ought Jump, Measure to Meaning, Calibration Provenance, Type Promotion Error, Reference Interval Fallacy]
authors: [European Food Safety Authority (org)]
sources: [EFSA - Dietary Sugars Upper Intake Level 2022]
cluster: inference-pitfalls
confidence: medium
created: 2026-08-05
updated: 2026-08-06
self_critiqued: 2026-08-06
relationships:
  related_to:
    - Surrogate Outcomes
    - Is the Food Category Doing Any Work
    - The Estimate-to-Action Gap
    - Deficiency Repletion vs Enhancement
    - Fruits Vegetables Pulses and Grains
    - Metrics for Targeted Health Guidance
    - LDL ApoB and Cumulative Exposure
    - Eggs Dietary Cholesterol and Cardiovascular Risk
---

 — the wiki's own epistemology, the consolidating genus behind method-risk R21. The
reasoning is the fabric's; the one source quotation (EFSA, in the UL instance and the corrective) is an
*illustration* of a body naming the error, not a derivation of it.

**A quantity or label defined DESCRIPTIVELY or operationally is silently promoted to a NORMATIVE or causal
claim.** A percentile becomes a target; a deficiency floor becomes an adequacy goal; a population ratio
becomes an individual verdict; a manufacturing class becomes a health judgment; a statistical threshold
becomes *important.* This is the is-to-ought / measure-to-meaning jump — Ryle's category mistake, Hume's
is/ought — applied to clinical and nutritional numbers. The number is not wrong; it is being read as a
*kind of thing it is not*.

## The instances — each a type-pair



Each row is one measured/defined object (the *is*) promoted to a norm (the *ought*):

- **RDA** — a deficiency *floor* (covers 97.5% of the population's requirement; a population, deficiency
  outcome) promoted to an adequacy *target*. It is *deployed* as one: food-label *% Daily Value* and
  *100% of your needs* frame it as a goal to hit. A floor presented as a target systematically misleads
  anyone with an objective *above* deficiency (muscle, healthspan, performance) — for whom *100% RDA*
  reads as *done* when it is the *start* -> [[Deficiency Repletion vs Enhancement]].

- **Biomarker reference interval** — the descriptive central 95% (2.5th-97.5th percentile) of *some*
  population, promoted to *normal = healthy.* This species has its own sub-mechanism, below.

- **5 a day** — a population dose-response *floor* over a *heterogeneous* basket, promoted to a per-person
  *target* with *interchangeable* units. The fabric already critiques this: a cabbage portion is not grapes
  is not juice -> [[Fruits Vegetables Pulses and Grains]].

- **Avoid processed** — a *manufacturing* class (NOVA) promoted to a *health* verdict. The health
  variance *within* a NOVA class plausibly swamps the variance *between* classes, so the label does not
  carry the outcome — though the fabric holds this as a qualitative judgment, rarely measured, a claim
  about what *would* be found rather than a reported statistic -> [[Is the Food Category Doing Any Work]].

- **Dietary cholesterol** — a food's cholesterol *content* (a compositional descriptor, \~180 mg per egg)
  promoted to a *serum-cholesterol / CVD effect* (a causal claim): *eggs are high in cholesterol therefore
  raise blood cholesterol and heart risk.* The dietary->serum transmission is weak for all but a minority
  of "hyper-responders" (absorption and endogenous synthesis compensate), so the second step is the
  descriptive->causal jump. The right-typed instrument is the evidenced *outcome* dose-response — which is
  near-null (Godos 2020: moderate intake CVD SRR 0.95, CIs kiss 1.00) — not the cholesterol content, and the
  causal lever is apoB particle number reached by other routes -> [[Eggs Dietary Cholesterol and Cardiovascular Risk]],
  [[LDL ApoB and Cumulative Exposure]].
- **BMI** — a population *screening ratio* promoted to an individual adiposity/health verdict.
- **Significant** — a statistical *threshold* promoted to *important / real / large.*
- **Evidence-based** — a *method* descriptor promoted to *true.*
- **Tolerable Upper Intake Level (UL)** — a *risk-assessment threshold* (the intake below which no
  adverse effect is expected — descriptive) read as a *target* (an intake to aim at — normative). The two
  differ in kind, and EFSA 2022 on dietary sugars is the rare case of a body **naming the error to
  pre-empt it**: «The Panel wishes to clarify that a UL is not a recommended level of intake»
  [@efsasugars2022, Interpretation of the ToR]. It runs in *both* directions on sugars: EFSA could set no UL
  («as low as possible»), so reading that as *softer* than WHO's `<10%` target — or reading WHO's `<10%`
  as a *safe threshold* — both promote one type into the other -> [[Free Sugars Intake]],
  [[Which Objective Moved This Recommendation]]. A body that produces the descriptive object and
  explicitly withholds the normative one is the constructive corrective enacted (below).

## Calibration provenance — the reference-interval sub-mechanism



The reference-interval instance carries a mechanism the others share in weaker form: **a number means only
what its calibration population and purpose support, and both are routinely mismatched to how it is used.**
The population that gets a marker measured is not representative:

- **Sick-enriched.** *Indirect / data-mined* intervals (built from the lab's own tested database) are
  enriched for symptomatic, worked-up, diseased people — you get tested because something prompted it.
- **Self-selected.** Even *direct healthy-volunteer* intervals carry volunteer self-selection and
  unscreened subclinical disease.
- **Missing whole strata (the streetlight, applied to calibration).** Entire strata are structurally absent
  because there is no clinical indication to test them — a *young-adult LDL reference range* is either
  extrapolated or built on a doubly-selected (young AND indicated, e.g. familial hypercholesterolaemia)
  sample. That is the **insufficient-evidence** state, not a known range. And the dark region is where the
  decision has most leverage: LDL is a *cumulative* lifetime exposure, so the un-measured young window is
  where modifiable area-under-the-curve is largest -> the streetlight is darkest where it matters most
  -> [[LDL ApoB and Cumulative Exposure]].
- **Frequency-distorted.** The most-monitored patients contribute the most measurements
  (measurement-weighted is not person-weighted). This is a real artifact, but its **direction is
  treatment-specific**, not simply *inflate toward sick*: it inflates for markers monitored *at* their
  disease value (HbA1c in diabetics, creatinine in CKD), and can *deflate* for treated-to-target ones (LDL,
  glucose — frequent testers are largely on statins / being titrated, pulling naive data-mined ranges
  *down*; proper methodology excludes lipid-lowering-therapy patients). Reason the sign per marker; do not
  assume it.

**Directional consequence.** For markers with an *evidenced* marker-to-hard-outcome transmission
(LDL/apoB -> ASCVD via genetics/MR/RCT; fasting glucose/HbA1c; blood pressure), the risk-optimal value
sits at or below the low edge of the range — so *within normal range* is *falsely reassuring* there
-> [[Metrics for Targeted Health Guidance]].

## Why it happens — communicability, not usually a lie



The promotion is rarely deception; it is **communicability**. A single target or label deploys more easily
than a floor, a distribution, or a dose-response curve — so the descriptive object is flattened into a
normative one at the delivery layer, where it reaches people. This is the *which objective moved this*
lens applied inward: communicability is the non-health objective driving the type-promotion, and the harm
often lives in the gap between the expert *definition* and the deployed *perception* (the RDA is defined
correctly as a floor and deployed as a target).

## The corrective is CONSTRUCTIVE, not debunking



The catch is not *ignore the number.* It is a type-discipline in three moves:

1. **Ask what KIND of thing this is** — descriptive or normative? A percentile, a floor, a manufacturing
   class, a threshold?
2. **Use the descriptive for description only** — a reference range tells you where a population sat, not
   where you should be.
3. **Get the right-typed instrument for the decision** — an *evidenced causal dose-response* to a hard
   outcome (LDL/apoB -> ASCVD, not the reference range; a target legitimate only by its evidenced
   transmission -> [[Surrogate Outcomes]]) or the *specific mechanism/composition* (the fat/salt/sugar and
   food matrix, not the NOVA label). A real category-error catch *upgrades* the instrument. The LDL case is
   the worked example: the right-typed instrument is CTT's per-mmol event dose-response (monotone, no
   threshold, benefit below the "normal" range) plus Marston's apoB-particle metric — *not* the LDL-C or
   apoB manufacturer reference range -> [[LDL Lowering and Cardiovascular Events]].

## The dual-use guard

 — shares R21/R20's dual-use structure with [[The Estimate-to-Action Gap]].

*That's just a descriptive range, not a target* is **both** the correct diagnosis **and** the
science-sceptic's universal dismissal of any number they dislike. The discriminator is whether the catch
**points to a better-typed replacement** (constructive — upgrades to an evidenced dose-response or a named
mechanism) or **merely discards the number** (evasive — the R21 motivated skip). A motivated version
throws the instrument away; an honest one replaces it with the right-typed one.

- **Where *normal is not optimal* cuts.** Toward *don't be reassured* for the *evidenced* markers
  (LDL/apoB/glucose/BP), NOT toward *chase optimal labs* for the *unevidenced* ones (the *optimal* TSH /
  testosterone / vitamin-D / ferritin ranges pushed without hard-outcome evidence — the surrogate-vs-target
  trap; hsCRP is the fabric's worked skip-case — statins move the marker \~42-45%, but it stays a surrogate,
  not a proven causal lever -> [[Metrics for Targeted Health Guidance]]).

## Decision relevance



- **Appraise the DEPLOYED number, not just the defined one.** A number's institutional function can diverge
  from its definition, and the divergence is often where the harm is (the RDA-as-% -DV case).
- **Where an evidenced causal dose-response exists, USE IT** and let the reference range go — it sidesteps
  the calibration-population problem entirely. The reference range is the fallback *only* where no causal
  dose-response is held, and there its provenance problems make it a weak instrument.
- **Open loop.** This grades the *type* of a claim, never its validity against a realized outcome.

## References

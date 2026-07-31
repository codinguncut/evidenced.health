---
type: concept
nucleus: true
cluster: deficiency-enhancement
question: When does supplementing a nutrient change a patient-important outcome, and for whom — is the person deficient (repletion) or already replete (enhancement)?
aliases: [Repletion vs Enhancement, Deficiency vs Enhancement, Enhancement in the Replete, Nutrient Status Dependence, Repletion vs Supplementation]
authors: [Manson, JoAnn E; LeBoff, Meryl S; US Preventive Services Task Force (org); Bjelakovic, Goran; Omenn, Gilbert S]
sources: [Manson - VITAL Vitamin D 2019, Manson - VITAL Marine Omega-3 2019, LeBoff - VITAL Vitamin D Fractures 2022, USPSTF - Vitamin Mineral Multivitamin Supplements 2022, Bjelakovic - Antioxidant Supplements Mortality 2007, Omenn - CARET Beta Carotene Lung Cancer 1996]
confidence: medium
created: 2026-07-30
updated: 2026-07-30
self_critiqued: 2026-07-30
relationships:
  related_to:
    - Vitamin and Mineral Supplements for Disease Prevention
    - Baseline Risk and the Relative-Absolute Split
    - Is the Food Category Doing Any Work
    - The U-Shaped Association Artifact
    - Surrogate Outcomes
---

## The distinction

Supplementing a nutrient does not answer one question — it answers **two**, and which one depends on
where the person already sits. A nutrient's effect on a patient-important outcome is **status-dependent**,
so the same pill means different things to different people:

- **Deficiency repletion** — the person is *below* the requirement; correcting the shortfall can move an
  outcome. This is the **lower arm** of the curve.
- **Enhancement** — the person is *already replete*; adding more sits on the **plateau** (buys nothing) or
  past the **upper bound** (harms). This is the **upper arm**.

These are different questions on different parts of **one** dose-response curve, not two rival claims about
*whether the nutrient works.* The central supplements error is to run a trial on one arm and read the
result as a verdict on the other: **a null (or harm) from supplementing the already-replete says nothing
about repletion of the deficient**, and vice versa.

## It is one curve — the dose-response frame

The distinction is a specific reading of the nutrient dose-response curve, whose features the method layer
already names (threshold · knee · plateau · upper bound):

- **Threshold** — the deficiency edge; below it, repletion is on the steep part and can benefit.
- **Plateau** — replete; more buys nothing (the *enhancement* null).
- **Upper bound** — excess harms (the antioxidant / beta-carotene arm below).

So *does the supplement work?* is ill-posed until the person's position on the curve is fixed. The
question is not *whether* but *where*.

## The held evidence, by arm

The parameter that decides everything is the **population's baseline nutrient status**, so read every
supplement trial by which arm it actually sampled:

| Tested quantity | VITAL (Manson 2019) | USPSTF 2022 | Bjelakovic 2007 / CARET 1996 | Same arm? |
|---|---|---|---|---|
| Population nutrient status | replete: mean 25(OH)D 30.8 ng/mL, 12.7% below 20 | community-dwelling, non-deficient («does not apply to ... known nutritional deficiency») | mostly replete / at-risk (CARET: smokers + asbestos-exposed) | VITAL and USPSTF both sample the **non-deficient** stratum; Bjelakovic/CARET push **dose past need** |
| Intervention | vitamin D 2000 IU + omega-3 1 g/day, RCT | multivitamins / individual vitamins, RCT-pooled | antioxidants (47 low-bias RCTs); CARET beta carotene 30 mg + retinol | supplement-in-the-non-deficient vs high-dose antioxidant |
| Finding on a hard outcome | **null**: cancer HR 0.96, major CV 0.97, fractures 0.98 | **no net benefit** (multivitamins I; beta carotene / vitamin E graded D) | **harm**: antioxidants all-cause RR 1.05; beta carotene 1.07; CARET lung cancer 1.28 | **plateau** (null) vs **upper bound** (harm) — same status-dependent *shape*, different nutrients (not one nutrient's measured curve) |

Provenance for the cells: VITAL status + null [@manson2019vitd],
[@manson2019n3], fractures + the <12 ng/mL tail
[@leboff2022]; USPSTF grades + carve-out
[@uspstf2022supp]; antioxidant harm
[@bjelakovic2007]; CARET
[@omenn1996].

**Independence caveat — this is NOT type-E convergence.** VITAL and USPSTF do not independently confirm
each other: USPSTF 2022 *pools* VITAL, and CARET is a primary trial *inside* both the USPSTF beta-carotene
evidence and the Bjelakovic meta-analysis. The value here is not *several sources agree* — it is the
**structure** the sources jointly imply, which none states alone.

## Enhancement in the replete tests null-to-harm

Two of the three arms are well-populated, and both land against the supplement:

- **VITAL** dosed a **replete** population and found nothing move — «Supplementation with vitamin D was
  not associated with a lower risk of either of the primary end points»
  [@manson2019vitd]; and within the range it could study, the effect
  did not vary by baseline 25(OH)D, so the null is not rescued by *it only helps the low-D people* inside
  the studied range -> [[Vitamin and Mineral Supplements for Disease Prevention]].
- **USPSTF** graded supplementation for a non-deficient population and found no net benefit — and it draws
  the repletion line **in its own scope statement**: the recommendation «does not apply to ... persons who
  are chronically ill, are hospitalized, or have a known nutritional deficiency. The USPSTF separately
  recommends that all persons who are planning or capable of pregnancy take a daily supplement containing
  0.4 to 0.8 mg (400-800 μg) of folic acid»
  [@uspstf2022supp]. The folic-acid carve-out
  is the enhancement-vs-repletion line made explicit by the guideline itself: a *need* (repletion) is a
  different recommendation from a *prevention* claim (enhancement).
- **Bjelakovic + CARET** populate the **upper bound**: in 47 low-bias trials the antioxidant supplements
  «significantly increased mortality (RR, 1.05; 95% CI, 1.02-1.08)»
  [@bjelakovic2007], and CARET's beta-carotene
  arm raised lung cancer (RR 1.28) [@omenn1996].
  *More* was not merely useless; past need it was harmful.

## Repletion is the different, mostly-unanswered arm

The lower arm — does correcting an actual deficiency move an outcome? — is the one the held trials barely
touch:

- VITAL's **frankly-deficient tail** (<12 ng/mL, only 2.4% of the trial) was underpowered, and the authors
  note a trial in people «well below the 20 ng per milliliter» might show stronger effects
  [@leboff2022],
  [@manson2019vitd]. So repletion is left open, not answered.
- Repletion maps onto **route (a)** of [[Baseline Risk and the Relative-Absolute Split]]: deficiency status
  is a baseline-risk / support-factor variable, so the *absolute* benefit of repletion scales with
  deficiency severity even at a constant relative effect — and it needs **no subgroup-interaction claim**
  (route (a) is the safe workhorse; the frequently-null interaction test does not license *repletion adds
  nothing*).

## Guard — this is the REAL dose-response U, not the artifact

Do **not** conflate this status-dependent curve with [[The U-Shaped Association Artifact]]. There, a U in
*observational* data is often manufactured by reverse causation, confounding by frailty, or unequal
reporting precision — an artifact to be checked and usually discounted. Here the U is **causal and
mechanistic**, and its **upper arm** is demonstrated in **RCTs** (Bjelakovic low-bias pool; CARET, stopped
early for harm) — the harm of *too much* is real and randomized, not a reverse-causation artifact. (The
**lower arm** — benefit of correcting *too little* — is a held *gap*, not a demonstration; see below. So
the mechanism predicts a full U, but the held evidence proves only its upper half.) Same shape, opposite
epistemic status from the artifact — a curve to dose along, not a signal to explain away.

## Decision consequence

- **Generally-nourished person.** Supplementation is *enhancement* — the plateau-to-harm arm — so it ranks
  at or near the bottom of the intervention hierarchy, and *megadose* pushes toward the harm arm, not a
  bigger benefit -> [[Layer 1 - Ranking Interventions for a Stratum]].
- **Deficient stratum.** Repletion is a *different* question with a plausibly real benefit — but it
  requires first **establishing** the deficiency (a prescriber act needing this person's labs, out of the
  wiki's scope), and the held effect sizes are thin. The right move is *test, then replete the confirmed
  shortfall*, not *supplement broadly to prevent disease*.
- **The demarcation, stated once.** An enhancement-null does not read as *the nutrient does not matter* —
  it reads as *more, in the replete, does not help (and past need can harm)* The nutrient can be
  essential and the supplement still worthless for the already-replete; the two claims live on different
  arms and must not be collapsed.

## Gaps

- **No held deficiency-repletion effect size on a patient-important outcome** — the lower arm is asserted
  as a live question, not quantified (VITAL's deficient tail is underpowered; no dedicated repletion trial
  is held). `G` (gap) -> ingest-queue.
- **Threshold locations are per-nutrient and per-outcome and mostly unheld** — where the deficiency edge
  and the toxicity edge sit differs by nutrient (25(OH)D in ng/mL is not beta-carotene in mg), so the curve
  is a *shape* the fabric holds, not a set of numbers.

## References

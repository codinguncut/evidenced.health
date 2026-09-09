---
type: concept
question: How much of a self-reported drug side-effect is the drug versus expectation, how do you find out, and what should you do about a reported symptom?
aliases: [Nocebo Effect, Drug Side-Effect Nocebo, Reported Side-Effects vs Real Harm, Nocebo Isolation, Do Not Deprescribe on Reported Symptoms Alone]
authors: []
sources: []
cluster: inference-pitfalls
nucleus: false
confidence: medium
created: 2026-09-08
updated: 2026-09-08
self_critiqued: 2026-09-08
relationships:
  related_to:
    - Statin Muscle Symptoms and the Nocebo Effect
    - Antidepressants for Depression
    - The Observational-Trial Discordance
    - The Estimate-to-Action Gap
---
<div class="recent-page" data-last-updated="2026-09-08"></div>


 — this page is the wiki's own synthesis. It owns, at concept altitude, a pattern that two
held drug-class instances demonstrate and route to it; the verbatim figures and their provenance live on
those instance pages, not re-extracted here.

**A large fraction of what people report as a drug's side-effect is not the drug — it is expectation.**
The claim is not that reported symptoms are imagined; they are real symptoms, but a symptom felt while
taking a pill is caused partly by the pharmacology and partly by the act of taking a pill you believe may
harm you. Self-report cannot separate the two, and the separation changes what you should do. This is the
side-effect-side mirror of [[The Observational-Trial Discordance]]: unblinded observation inflates a drug's
apparent adverse-event rate the same way it inflates its apparent benefit, and only blinding strips the
expectation component out.

## You need an inert comparator — self-report alone cannot reveal the nocebo share



The nocebo component is invisible without a comparator the person cannot distinguish from the real drug.
Three designs isolate it, each answering a slightly different question:

- **Blinded n-of-1 rechallenge.** The same person cycles through drug, identical placebo, and no-tablet,
  scoring symptoms daily. Isolates the nocebo share *within one person*, in the stratum that matters most —
  someone who already stopped the drug for side-effects -> [[Statin Muscle Symptoms and the Nocebo Effect]]
  (SAMSON).
- **Placebo arm of parallel double-blind RCTs.** The between-group randomised estimate: what fraction of
  the reported-symptom rate appears in people randomised to an inert pill. Answers the population question
  that the n-of-1 cannot -> [[Statin Muscle Symptoms and the Nocebo Effect]] (Reith / CTT).
- **Placebo-controlled taper / placebo-discontinuation arm.** For a *withdrawal* symptom, the inert-pill
  arm of a discontinuation trial isolates how much of the discontinuation syndrome is expectation rather
  than pharmacological rebound -> [[Antidepressants for Depression]] (Henssler).

The common element is an inert comparator the participant cannot tell from the drug. A dose-timing
association, a within-person symptom diary, or a plausible mechanism does none of this work — without the
blind, the expectation component rides along undetected.

## The pattern holds across drug classes — a verified independent instance `[E-independent]`



Two instances the fabric holds reach the same qualitative claim by genuinely independent routes:

- **Statin muscle symptoms.** In people who had stopped a statin for side-effects, roughly 90% of the
  symptom burden a statin challenge produced was also produced by an identical placebo (within-person,
  blinded n-of-1) -> [[Statin Muscle Symptoms and the Nocebo Effect]].
- **Antidepressant discontinuation.** About half of antidepressant discontinuation symptoms are
  attributable to expectation or non-specific effects rather than the drug (placebo-discontinuation arm)
  -> [[Antidepressants for Depression]].

The independence is real and checked: a different drug, a different symptom (an ongoing ache versus a
withdrawal syndrome), a different design, and a non-overlapping author group — Imperial cardiology versus a
German psychiatry team, so the author-list-diff independence test passes. What is independently backed is
the **qualitative pattern** — a large share of a self-reported drug side-effect is nocebo, and only an
inert comparator reveals it. The **magnitudes are not commensurable** (90% of a within-person symptom
burden and \~50% of a discontinuation-symptom incidence are different metrics on different phenomena), so
the pattern is `[E-independent]`, not a pooled number. The design travels across drug classes; the
magnitude does not.

## Decision relevance — do not deprescribe on reported symptoms alone



- **The rule.** Do not discontinue a tolerated drug on reported symptoms alone. Where the question matters,
  use a blinded rechallenge or a placebo-controlled taper to separate real pharmacological harm from the
  nocebo component before deciding.
- **Time since starting is diagnostic.** A drug's genuine early-onset harm is usually front-loaded, so a
  symptom appearing after long, uneventful tolerance carries a low prior of being the drug — the statin
  case makes this concrete (excess muscle events confined to year 1)
  -> [[Statin Muscle Symptoms and the Nocebo Effect]].
- **The stakes are asymmetric.** Stopping an effective drug on a nocebo symptom forfeits a real benefit to
  avoid a symptom the drug is largely not causing. This is the loss-function move from
  [[The Estimate-to-Action Gap]]: weigh the reported symptom against the benefit given up, not in isolation.
- **The serious exception still stops the drug.** True pharmacological harm exists and some of it is
  dangerous (rare severe myopathy, not an ordinary ache); the rule is *do not stop reflexively on an
  unverified symptom*, not *ignore side-effects*. Objective signs and a real mechanism override the nocebo
  prior.

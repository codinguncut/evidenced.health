---
type: concept
question: How much sun/UV exposure should someone get, when UV causes skin cancer yet sun-exposure habits associate with lower all-cause and cardiovascular mortality?
aliases: [Sun Exposure and Health, UV Exposure Benefits and Risks, Sun Exposure Net Effect, Sunlight and Mortality, Sun Avoidance and Mortality]
authors: [Lindqvist, Pelle G; Epstein, Eva; Olsson, Håkan; Gandini, Sara; Sera, Francesco; Boyle, Peter; Green, Adèle C; Williams, Gail M]
sources: [Lindqvist - Sun Exposure Major Causes of Death 2016, Gandini - Cutaneous Melanoma Sun Exposure Meta-Analysis 2005, Green - Sunscreen Melanoma Randomized Trial Nambour 2011]
cluster: sun-uv-exposure
nucleus: true
confidence: low
created: 2026-08-06
updated: 2026-08-06
self_critiqued: 2026-08-06
relationships:
  related_to:
    - Melanoma and UV Exposure
    - The U-Shaped Association Artifact
    - Deficiency Repletion vs Enhancement
    - Physical Activity Dose and Mortality
---

**Nucleus of the `sun-uv-exposure` cluster.** UV has **opposite-signed** effects on different
outcomes: it causes skin cancer (**harm**, RCT + gold-MA grade) while sun-exposure *habits* associate
with **lower** all-cause and cardiovascular mortality (**benefit**, observational only). Both can be
true — they are different endpoints, so this is **not a contradiction but a trade-off to net**
(type-A). The honest answer is that the net is **genuinely uncertain and stratum-dependent**, and the
two arms are known with very different confidence.

## The net-effect ledger

type-A — an emergent structure present in no single source:

| Arm | Outcome | Best evidence | Effect | Tier |
|---|---|---|---|---|
| HARM | cutaneous melanoma (+ NMSC) | Green RCT + Gandini gold MA | sunscreen HR 0.27-0.50; sunburn RR 2.03, intermittent RR 1.61 (different quantities, not poolable) | RCT + gold |
| BENEFIT | all-cause / CVD / noncancer-non-CVD mortality | Lindqvist single cohort | avoiders \~1.7-2x mortality (HR 0.6 categorical; rate "doubled"); life-expectancy loss 0.6-2.1 y | observational (confounded) |

**The tiers are asymmetric, and this is the whole point.** The harm is anchored on a *randomized*
trial plus a *gold* meta-analysis. The benefit rests on a **single observational cohort** of Swedish
women, wide open to reverse causation. Treating the two as equally established would be the error.
(The harm arm's two sources are *complementary, not independent* — Green authored studies inside
Gandini's pool, and an intervention HR and an etiologic RR are not poolable; see
[[Melanoma and UV Exposure]] for the full harm arm.)

Parameter table (BLOCKING — the arms are not the same quantity, so this is a trade-off, not a tension):

| Parameter | Harm arm (Green / Gandini) | Benefit arm (Lindqvist) | Same quantity? |
|---|---|---|---|
| Outcome | melanoma incidence | all-cause + CVD mortality | **NO** — different endpoints |
| Exposure | UV pattern / sunscreen intervention | self-reported sun-habit score 0-4 | **NO** |
| Design | RCT + observational MA | single observational cohort | **NO** — different tiers |

Fourth column NO on every row -> the two findings do not *contradict* (not-joined check ii:
different outcome/scope); they must be **weighed**, not reconciled away.

## Why the benefit arm is weak — run the artifact check hard

[[The U-Shaped Association Artifact]]: the sun-avoiders in Lindqvist are **older, poorer, less
educated, far more comorbid (20.4% vs 6.7%), and less active** than sun-seekers. Sick, frail people
avoid the sun — classic **reverse causation / confounding-by-frailty.** The association survived
adjustment for age, smoking, education, income, comorbidity, exercise, and BMI stratification, which
raises but does not settle it; the authors concede [@lindqvist2016]:

«First, it is not possible to differentiate between active sun exposure habits and a healthy
lifestyle, and secondly, the results are of an observational nature; therefore, a causal link cannot
be proven.»

There is **no RCT** on the mortality-benefit arm (G — needs a trial the literature does not have). The
*sun avoidance \~ smoking in magnitude* framing [@lindqvist2016] is a life-expectancy comparison from *this* cohort, not
a validated causal equivalence.

## The vitamin-D mediator is probably NOT the mechanism (a key gap)

The intuitive mediator is vitamin D — but supplementation RCTs are largely null on hard outcomes
([[Deficiency Repletion vs Enhancement]]: VITAL found no mortality/cancer/CVD benefit in a replete
population). If the mortality benefit were vitamin D, a pill would reproduce it; it does not. So the
benefit, **if causal at all**, likely runs through non-vitamin-D UV pathways (nitric-oxide -> blood
pressure, melatonin, skin beta-endorphin) rather than through 25(OH)D [@lindqvist2016]:

«Whether the positive effect of sun exposure demonstrated in this observational study is mediated by
vitamin D, another mechanism related to UV radiation, or by unmeasured bias cannot be determined from
our results. Vitamin D levels might be just a marker of sun exposure.»

This matters for the decision: it means **oral vitamin D is not a substitute** for whatever (if
anything) sun does here — a surrogate that has failed its own transmission test.

## Same exposure pattern on both arms — a genuine trade-off, NOT a dovetail

The tempting move is to say harm and benefit attach to *different* exposure patterns (intermittent
burning causes melanoma; regular habitual sun lowers mortality), so a single strategy could capture
both. **The sources do not support that.** Lindqvist's sun-exposure score is built entirely from
**recreational/intermittent** items — summer sunbathing, winter/mountain sunbathing, holidays abroad
to sunbathe, and **tanning-bed use** [@lindqvist2016].
That is precisely Gandini's *harmful* intermittent pattern (and tanning beds are themselves an
established melanoma risk factor) — **not** the null chronic/occupational pattern. So the *same*
sun-seeking behaviour is what raises melanoma in Gandini AND associates with lower mortality in
Lindqvist: a real trade-off on one exposure, not two exposures that conveniently separate.

- The one exposure plausibly robust across both arms — **regular, genuinely non-burning** exposure —
  is a *hypothesis*, because it is **not** what Lindqvist measured; its score cannot distinguish
  non-burning habitual sun from recreational burning. Do not present it as an evidenced sweet spot.
- **Avoiding sunburn** remains the well-evidenced move (harm arm), but it does not, on this evidence,
  come free of the mortality-arm's exposure — the two are entangled in the same recreational habit.
- Sunscreen is the partial escape: in Green it cut melanoma **without** reducing outdoor time
  [@green2011] — but Lindqvist
  cautions against reading sunblock as a licence to overexpose.

## Stratum-dependence — the net shifts (mostly via baseline melanoma risk)

- **Fair skin (Fitzpatrick I-II) + high ambient UV (e.g. N. Australia, UV index >=6 year-round):**
  melanoma harm dominates; protection is the clear call.
- **Darker skin and/or high latitude, low UV (e.g. Sweden, UV index <3 for 8-9 months):** melanoma
  baseline risk is far lower, so the same relative harm is a much smaller *absolute* harm and the
  (weak, confounded) mortality-benefit arm carries relatively more weight; Lindqvist argues
  restrictive year-round sun-avoidance advice may not be beneficial there. (This is a baseline-risk
  shift, not a vitamin-D-repletion argument — the D route was discounted above.)
- Route (a) baseline-risk stratification does most of the work: the same relative melanoma effect is a
  much larger *absolute* harm in fair, high-UV populations.

## Bottom line (do not collapse to a slogan)

- Avoiding **sunburn** is the robust, well-evidenced move (harm arm is RCT/gold-grade).
- The claimed all-cause **mortality benefit of sun-seeking is observational, confounded, and
  unreplicated** — plausible but far from established; oral vitamin D does not stand in for it.
- The net is stratum-dependent; the outcome menu (melanoma risk vs mortality vs the unmeasured
  quality-of-life trajectory) is the person's to weight (layer 3). **The loop is open — no source here
  measured the net of a sun-seeking vs sun-avoiding strategy on all-cause mortality in a trial.**
- Opens the sun/UV domain -> candidate deliverable once a second mortality-arm source (or a Vitamin-D
  MR / VITAL-style analysis on the sun question) lands. AWAITS a second sun-exposure mortality cohort
  or Mendelian-randomization source — to test whether the Lindqvist all-cause benefit replicates
  outside one Swedish female cohort.

## References

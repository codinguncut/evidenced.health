---
type: framework
question: Does sleep duration causally affect metabolic health (type 2 diabetes risk, weight/adiposity), and which arm of the U-curve is real?
aliases: [Sleep and Diabetes, Sleep Duration and Type 2 Diabetes, Sleep and Weight, Sleep and Adiposity, Sleep and Energy Balance, Short Sleep Metabolic Risk]
authors: [Shan, Zhilei; Hu, Frank B; Liu, Liegang; Capers, Patrice L; Kaiser, Kathryn A; Allison, David B; Cappuccio, Francesco P; D'Elia, Lanfranco; Strazzullo, Pasquale; Miller, Michelle A]
sources: [Shan - Sleep Duration Type 2 Diabetes Meta-Analysis 2015, Capers - Sleep Duration Adiposity Energy Balance Meta-Analysis 2015, Cappuccio - Sleep Duration and Mortality 2010]
cluster: sleep
confidence: medium
created: 2026-08-01
updated: 2026-11-04
self_critiqued: 2026-11-04
relationships:
  related_to:
    - Sleep Duration and Mortality
    - The U-Shaped Association Artifact
    - Weight-Loss Maintenance and Metabolic Adaptation
    - What Drives Fat Gain - Energy Balance vs the Carbohydrate-Insulin Model
    - Measurement Error in Dietary Assessment
---
<div class="recent-page" data-last-updated="2026-11-04"></div>


A facet of the `sleep` cluster (nucleus [[Sleep Duration and Mortality]]), on a **different outcome set**
— incident type 2 diabetes and adiposity, rather than mortality. Two 2015 meta-analyses answer two
halves of one question and only together: **is short sleep *causally* metabolically harmful, or does the
association merely mark illness?** Shan supplies the observational shape (on T2D); Capers supplies the
experimental arm, which fixes the direction of a *short-term energy-intake* link (lab protocols of days,
none of the intake studies beyond three weeks, narratively summarized rather than meta-analyzed). That
answers reverse causation for intake over days; it does not rebut reverse causation in the T2D cohort
association, and Capers measured no glucose or T2D endpoint. Capers' restriction-on-weight and
appetite-hormone pools were non-significant; its sleep-improvement weight pool was significant (p = 0.02).
[inferred from @shan2015; @capers2015]

Capers' own verdict is cautious:

> «Experimental studies found through our systematic review and meta-analysis do not provide a strong
> basis to support the presence of a causal relationship between sleep durations and obesity-related
> factors. However, there are two studies that met our criteria that suggest sleep restriction may
> contribute to weight gain36, 41.»
[@capers2015]

Together the two narrow the causal question for the short arm; they do not close it.


## The observational shape — a second sleep U-curve, on T2D `[Shan 2015]`

Shan pooled 10 prospective studies (nine cohorts plus one substudy of a lifestyle-intervention trial,
Tuomilehto, control arm only; 11 reports, 18,443 incident T2D cases among 482,502 people, follow-up
2.5-16 y):

> «A U-shaped dose-response relationship was observed between sleep duration and risk of type 2
> diabetes, with the lowest risk observed at a sleep duration category of 7-8 h per day. Compared with
&gt; 7-h sleep duration per day, the pooled relative risks for type 2 diabetes were 1.09 (95% CI 1.04-1.15)
> for each 1-h shorter sleep duration among individuals who slept <7 h per day and 1.14 (1.03-1.26) for
> each 1-h increment of sleep duration among individuals with longer sleep duration.»
[@shan2015]

Category extremes: shortest (<=5 h) RR **1.37** (1.18-1.59); longest (>=9 h) RR **1.40** (1.08-1.80).
Absolute scale (US incidence 7.6/1000/yr): \~68 extra T2D cases/100,000/yr per 1-h *reduction*; \~106 per
1-h *increment*. [@shan2015]

## The two arms are NOT the same finding — apply the arm-level rule

This is [[The U-Shaped Association Artifact]] on a second exposure-outcome. Adjudicate the **arm**, not
the curve:

- **Short arm — mechanistic support, causal reading provisional.** Shan finds no nonlinearity (P=0.22);
  that describes the curve's shape, not causation, and the long arm is linear too (P=0.90). What sets
  the short arm apart is the mechanism Shan cites: lab sleep-restriction studies show reduced glucose
  tolerance / insulin sensitivity, increased hepatic glucose production, sympathetic activation. The
  short arm carries the same confounding candidates as the long one — Shan: *«Meanwhile, short sleep
  dura- tion was associated with depressive symptoms, low socioeconomic status, low education, and other
  risk factors of diabetes (8,49).»*
  [@shan2015]

- **Long arm — artifact-suspect, and left unadjudicated.** The long-arm mechanism is weaker on Shan's
  own account: *«The potential mechanisms underlying the association between long sleep duration and
  increased diabetes risk are currently considered more speculative.»*
  [@shan2015] The candidate
  explanations are the concept's recipe — depression, low SES, undiagnosed disease, poor physical
  health, low activity, sleep apnoea — and Shan concedes reverse causation directly:
  *«it is also possible that long sleep is a consequence of the sleep-inducing effects of the
  inflammatory state»*. [@shan2015]
  The tells match: the long arm carries **higher heterogeneity** (dose-response I2 79% vs 63% short) and
  is **not robust to one study** — omitting Tuomilehto renders it borderline (1.09, 0.99-1.12).
  [@shan2015]

**Shan does NOT run the strong check** (no referent-correction, no Mendelian randomization). Multivariable
adjustment (which the long-T2D association survives) is the *weak* check — the same the alcohol artifact
survived. So the long-sleep -> T2D arm is **unadjudicated, not established**. Neither arm gets the
strong check here; the short arm is held as provisionally causal on its mechanism and short-term
experimental support, the long arm is not. This is the second sleep-arm instance of *adjudicate-the-arm*
(after Cappuccio on mortality). It is **not an independent route**: the two pools probably share at least
one cohort, the US NHANES I follow-up reported by Gangwisch (Shan's 2007 row, 8,992 adults aged 32-86,
8-10 y; Cappuccio's 2008 *NHANES I* row, 8-10 y)
[@shan2015]
[@cappuccio2010]. The author lists do not overlap.
Scored **type-F** (new outcome, same reverse-causation mechanism).


## The experimental arm fixes direction, on short-term intermediates `[Capers 2015]`

The decisive weakness of any observational U-curve is that illness lowers sleep. Capers pooled
**experimental studies that manipulated sleep** — mostly RCTs, plus two non-randomized crossovers
(Markwald, Schmid) among the hormone/intake studies — so the direction is fixed by design for the outcomes
it measured. Not every arm is a pure sleep manipulation: three of the four sleep-extension weight trials
improved sleep by CBT-I (Bothelius), a diet/exercise/sleep curriculum (Logue) or didgeridoo breathing
training (Puhan).
[@capers2015]

> «The available experimental literature suggests that sleep restriction increases food intake and total
> energy expenditure with inconsistent effects on integrated energy balance as operationalized by weight
> change.»
[@capers2015]

- **Food intake — consistent up.** Across the food-intake studies (narratively pooled — measurement too
  varied to meta-analyze), sleep restriction reliably increased ad libitum intake, portion size and food
  purchasing. This is the causal link the observational data cannot prove.
- **Sleep-improvement trials — a modest, inconsistent weight effect.** *«Studies aimed at increasing
  sleep duration revealed inconsistent but overall significant effects on body weight, p = 0.02, with
  low heterogeneity I2 = 35% (Figure 2).»*
  [@capers2015] The pool
  includes a diet/exercise/sleep curriculum (Logue) and breathing training (Puhan), so the effect cannot
  be put down to sleep alone.
- **Net weight from restriction — inconsistent.** *«Studies that restricted sleep indicate some weight
  gain or less weight loss compared to control in three out of the four studies, but no significant
  effect overall (p = 0.08, Figure 3).»* I2 = 81%. Total energy *expenditure* showed a non-significant
  pooled increase (p = 0.11, I2 = 87%), and Capers notes most individual restriction studies found TEE
  not increased, the adolescent study excepted — so the net is unresolved.
  [@capers2015]

## The mechanism refinement — leptin/ghrelin is not supported as the pathway `[type-F]`

[[Sleep Duration and Mortality]] and Shan both invoke the leptin-down / ghrelin-up appetite axis as the
short-sleep mechanism. **The experimental evidence does not support it** — insufficient, not a shown
no-effect: Capers found **no** significant pooled effect of sleep restriction on leptin (p=0.84,
I2=75%) or ghrelin (p=0.83, I2=77%) across four heterogeneous studies each (for ghrelin one
significant decrease and one significant increase), and cites Chaput & St-Onge:

> «hormones such as ghrelin and leptin are not the main mechanism contributing to increased food intake
> during sleep restriction because hormone levels depend on sleep timing and the nutritional state of
> the participants. They assert that hedonic factors are likely stronger.»
[@capers2015]

Capers limits its own ghrelin null in the next breath: *«In the present analysis, all studies testing
ghrelin used the assay for total ghrelin rather than the active form. This approach may limit
interpretation on the dynamics of this relatively weak meal initiation signal.»*
[@capers2015]

So the composite beats either source alone: the short-term intake increase is consistent (Capers), but the popular
hormonal *explanation* for it is downgraded — likely hedonic drive plus more waking hours to eat, not a
leptin/ghrelin surrogate. Route the appetite-hormone story as mechanism only, discounted.
[inferred from @capers2015]

## Decision relevance

- **Short sleep is a modifiable metabolic lever with plausible, not established, causal footing.**
  Chronic <7 h (especially <=5 h) is associated with higher T2D risk (RR 1.09 per hour below 7 h, cohorts
  with self-reported sleep). A mechanism (lab glucose-tolerance studies) and short-term experiments
  showing restriction raises energy intake support a causal reading. Shan calls for longer-term RCTs to
  establish causality [@shan2015],
  and Capers' outcome set (weight, body fat, intake, expenditure, appetite hormones including insulin)
  has no glucose or T2D endpoint
  [@capers2015].
- **Do this:** a chronically short sleeper should aim for \~7-8 h a night (basis: the observational T2D
  nadir plus mechanism — standard advice, not trial-tested on T2D).
- **The magnitude on *weight* is uncertain, not established.** The experimental arm is short-term and
  net weight change is inconsistent — sleep is not a demonstrated weight-loss intervention. The T2D
  signal rests on cohorts plus short lab mechanism studies cited by Shan; Capers measured no glucose
  outcome, so neither outcome has a long-term experimental test.
- **Long sleep is not a target.** Nothing held shows that shortening a long sleeper's sleep helps. The
  long arm is unadjudicated for T2D as for mortality: it survives multivariable adjustment, and Shan
  offers inflammation as a candidate mechanism and sleep apnoea as a common cause of long sleep and
  diabetes, alongside reverse causation.
  [@shan2015]
- **Ranking (layer 1):** a moderate-effect lever of low-to-moderate certainty on T2D (observational,
  self-reported exposure; the experimental arm is short (intake studies days to 3 weeks, weight trials up to 16 weeks) and on intermediates) — below the big rocks,
  above most refinements; relevant chiefly for the habitually sleep-deprived stratum.



## Limits

- **Shan: all exposure self-reported by questionnaire, measured at one time point in most studies** —
  actigraphy and polysomnography (the gold standard) were not used, so exposure misclassification is
  likely (a cited validation found only r = 0.47 against actigraphy; the prospective design limits
  differential recall bias) -> [[Measurement Error in Dietary Assessment]]; a meta-analysis of
  observational data cannot directly control for residual or unmeasured confounding.
  [@shan2015]
- **Capers: few, small, short trials** (mostly crossover RCTs with a maximum n of 20; the larger simple
  RCTs ran longer, up to 16 weeks); double-blind placebo-controlled
  sleep trials are not possible, blinding of measurement and other study personnel was not reported or
  not done in over 60% of papers, and no long-term trial exists — the experimental arm is
  direction-fixed but under-powered on magnitude.
  [@capers2015]
- Coherence, not validity (R1): the U-shape is what the cohorts report; the short-arm causal reading
  rests on the experimental arm + mechanism, not the pooled association alone.

## References

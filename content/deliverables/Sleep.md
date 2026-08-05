---
type: deliverable
title: Sleep
question: 'What does sleep do to health, which lever actually moves outcomes (duration, regularity, timing), do sleep aids give real sleep or drugged sedation, and what can a person actually change?'
sources: [Cappuccio - Sleep Duration and Mortality 2010, Shan - Sleep Duration Type 2 Diabetes Meta-Analysis 2015, Capers - Sleep Duration Adiposity Energy Balance Meta-Analysis 2015, Windred - Sleep Regularity Mortality 2023, van Straten - CBT for Insomnia Meta-Analysis 2018, Kripke - Hypnotics Mortality Cancer 2012, Ferracioli-Oda - Melatonin Primary Sleep Disorders MA 2013, Livingston - Dementia Prevention 2024]
confidence: medium
created: 2026-08-05
updated: 2026-08-05
self_critiqued: 2026-08-05
---

This is a general, population-level appraisal of what the evidence says about sleep for anyone the
studies speak to. It is not advice for one person; how the levers below apply depends on your stratum
and goals, which belong at the end, not here.

The short version: chronic **short** sleep (below about 7 hours, especially below 5) is a real,
modest, mechanism-backed lever — it tracks roughly 12% higher mortality and higher type-2-diabetes
risk, and moving toward a \~7-8 hour range is the actionable call. But the target is a **range, not a
maximand**: "more is better" is false, and the apparent risk of *long* sleep is largely reverse
causation, not a reason to sleep less. A newer and possibly stronger lever is **regularity** — going to
bed and waking at consistent times may predict mortality better than how many hours you log. Once
insomnia is present, the treatment ranking inverts the usual reach: **CBT-I first, melatonin as a
benign adjunct, prescription hypnotics short-course and last.** The whole picture rests on
overwhelmingly observational, self-reported evidence, so treat magnitudes as associations, not
demonstrated effects.

## How good is the evidence — read this first

Almost everything below is an **association, not a demonstrated effect**, and two limits run through
the whole domain:

- **Exposure is mostly self-reported and measured once.** People misjudge time-asleep versus
  time-in-bed, which blurs real gradients -> [[Measurement Error in Dietary Assessment]] (same
  instrument problem, different domain). The one big exception is the regularity evidence, which used
  wrist accelerometry.
- **Illness changes sleep, so reverse causation is the central threat.** Being sick makes people sleep
  more (and sometimes less), so an observed sleep-mortality curve can reflect disease driving sleep
  rather than sleep driving disease. This is why the *arms* of a U-curve must be judged separately, not
  the curve as a whole -> [[The U-Shaped Association Artifact]].

The loop is open: no study here grades whether changing someone's sleep actually improved their
outcomes. Read the numbers as calibrated associations pending better evidence.

## What a sleep deficit costs

### Mortality — a U-curve whose two arms are not the same finding

Pooling 16 studies and 1.38 million people, both short and long sleep track higher all-cause mortality
against a \~7-8 hour reference: **short sleep RR 1.12 (1.06-1.18)** and **long sleep RR 1.30
(1.22-1.38)** [@cappuccio2010]. Read as one curve,
this says "any deviation shortens life." That reading is wrong, because the two arms have very
different footing:

- **The long-sleep arm is the *larger* association but the *weaker* claim.** It has no demonstrated
  mechanism, much higher heterogeneity (I2 71% vs 39%), and it strengthens with age and with longer
  cutoffs — a frailty/illness gradient, not a dose-response. Cappuccio judges long sleep «a powerful
  additional marker of ill-health» rather than a cause
  [@cappuccio2010]. So a habitual long sleeper is a
  candidate for a check-up, **not** a
  sleep-reduction target — shortening their sleep optimizes a symptom.
- **The short-sleep arm carries the causal footing.** It is flat across every subgroup, has named
  mechanisms (glucose control, sympathetic and cortisol activation), and in the Whitehall II cohort
  those who *curtailed* sleep died predominantly of cardiovascular causes — the pattern expected if
  short sleep is causal.

### Metabolic — short sleep raises type-2-diabetes risk, and this arm holds up

A second U-curve, on incident type 2 diabetes, repeats the asymmetry (nadir 7-8 hours): per hour of
*shorter* sleep below 7, **RR 1.09 (1.04-1.15)**; the shortest category (<=5 h) reaches **RR 1.37**
[@shan2015]. The short arm shows no
nonlinearity (P=0.22) and is backed by lab sleep-restriction studies showing reduced glucose tolerance
and insulin sensitivity. The long arm is «currently considered more speculative», carries higher
heterogeneity, and goes borderline (1.09, 0.99-1.12) when a single study is dropped
[@shan2015] — the same
unadjudicated, artifact-suspect
shape as the mortality long arm. The firmer metabolic signal is on **glucose/T2D, not the scale**
(weight is treated below).

### Cognition — the arm-level split replicates on dementia

The 2024 Lancet Commission examined sleep as a dementia risk factor and reproduced the split exactly:
the long-sleep arm is artifact — «prolonged sleep is not a risk factor for dementia, although dementia
and its prodrome may cause prolonged sleep» — while persistent short sleep carries a small
mechanism-backed risk [@livingston2024]. Notably the
Commission declined to make *any* sleep-duration recommendation — an honest insufficient-evidence stop.
Sleep also sits among the shared cardiometabolic levers that lower risk across several age-related
diseases at once -> [[Shared Modifiable Levers Across Age-Related Diseases]],
[[Dementia Prevention and Modifiable Risk Factors]].

## Which lever actually moves outcomes

Sleep is not one knob. At least three dimensions separate: **duration** (hours), **regularity**
(night-to-night consistency of timing), and within-night **continuity** (how fragmented). A person can
be regular but fragmented, or consolidated but erratic — and the evidence is much better on some than
others.

### Duration is a range, not a maximand

The decision from the mortality and metabolic curves above is narrow: chronic short sleep is the
actionable arm; the reference is **\~7-8 hours**; the curve is shallow near it, so precision beyond
"adequate, not chronically short" is not warranted; and *sleep less to live longer* is unsupported
-> [[Sleep Duration and Mortality]].

### Regularity may be the stronger lever

Measuring both dimensions **objectively** (wrist accelerometry) in 60,977 UK Biobank participants,
Windred compared them head-to-head. More regular sleep tracked **20-48% lower all-cause mortality**
across the top four Sleep Regularity Index quintiles versus the least-regular one, and regularity was
the **stronger predictor**: top-quintile HR **0.70 (0.59-0.83) for regularity vs 0.76 (0.65-0.89) for
duration**, and adding duration to a regularity model did not improve fit
[@windred2023]. Unlike the duration U-curve, the
regularity relationship is
monotonic — more regular is simply better.

- **This does not contradict the duration finding; it adds an axis guidelines omit.** Windred's
  objective longest quintile was only >7.56 h, so it never reaches the long-sleep range where the
  illness-marker arm lives — the two studies measured different exposures over different ranges
  [@windred2023].
- **The target is concrete and cheaper than adding hours.** Top-20% regularity means falling asleep and
  waking within roughly **1-hour windows** most days; bottom-20% is \~3-hour windows. For the person who
  sleeps \~7 hours but at chaotic times (shift-adjacent schedules, social jetlag), this is a lever the
  duration advice misses.
- **The certainty caveat is real.** This is a *single* cohort, correlational; no trial that *raises*
  regularity and measures mortality exists, and «sleep regularity may be both a cause and marker»
  [@windred2023]. So regularity is a promising,
  not-yet-confident lever — and not a licence to neglect chronic short sleep. Both are actionable.

### Quality, architecture and continuity — largely a gap

Whether deep (slow-wave) or REM *architecture*, or within-night *fragmentation* (frequent arousals),
independently predicts hard outcomes beyond hours-in-bed is mechanistically reasonable but **not yet
well-evidenced in the corpus held here**. Obstructive sleep apnoea is the well-lit paradigm case — it
fragments sleep and is the mechanistic bridge to the obesity loop below — but a general
fragmentation-to-outcomes literature is a named gap, not a finding. Treat "consolidated, unfragmented
sleep is better" as reasonable and formally unadjudicated here -> [[Sleep and Metabolic Health]].

## The sleep-obesity interaction — bidirectional, and the popular mechanism is wrong

Short sleep and excess weight feed each other, but the standard hormonal story does not hold up.

- **Short sleep reliably increases food intake — but not via leptin/ghrelin.** Meta-analyzing RCTs that
  *manipulated* sleep (so causal direction is fixed by design), Capers found sleep restriction reliably
  raised food intake, yet **no** significant pooled effect on leptin (p=0.84) or ghrelin (p=0.83)
  [@capers2015]. The
  popular "short sleep -> ghrelin -> fat" explanation is a demonstrated *non*-mechanism; the extra
  intake is better read as hedonic drive plus more waking hours to eat. This is a genuine refinement
  the mortality and metabolic pages both needed -> [[Sleep and Metabolic Health]].
- **The net weight effect is modest and uncertain.** Sleep-*extension* trials cut body weight
  (**p=0.02**, low heterogeneity), but net weight from *restriction* is inconsistent because intake
  **and** expenditure both rise
  [@capers2015]. Sleep is
  **not** a demonstrated weight-loss intervention; its firmer
  metabolic signal is on glucose, not the scale.
- **The reverse arm closes the loop.** Obesity drives obstructive sleep apnoea, which fragments sleep
  and worsens metabolism — a vicious cycle, and the reason the continuity gap above matters clinically.

## Sleep aids — do they give real sleep, or drugged sedation?

Once someone has chronic insomnia, the three main options report **different quantities on different
designs** (a standardized effect size, a hazard ratio, minutes), so they cannot be ranked by effect
number. The honest ranking follows **evidence type, durability and harm** — which run *opposite* to how
these are usually reached for (a drug first, behaviour last).

### CBT-I — first-line, and the only one that restores sleep without a drug

Cognitive-behavioural therapy for insomnia, pooled across 87 RCTs, gives large effects on insomnia
severity (ISI **g=0.98**), sleep efficiency (g=0.71) and onset latency (g=0.57); its *smallest* effect
is on total sleep time (g=0.16) — it **consolidates** sleep rather than adding hours
[@vanstraten2018]. Two properties make it the
anchor: effects
are «quite robust» including in current hypnotic users, so it is the **exit route from pills**, and the
American College of Physicians recommends it as the initial treatment for all adults with insomnia
[@vanstraten2018]. The honest bound: publication
bias is present, so true effects «might be smaller although still signiﬁcant», and therapist access is
the real-world constraint.

### Hypnotics — real sedation, but a harm signal that inverts the naive choice

A matched-cohort study found a strong dose-response **mortality** association with prescription
hypnotics: HR **3.60 / 4.43 / 5.32** across ascending dose tiers — and HR 3.60 even at fewer than 18
pills a year — plus a cancer signal (HR 1.35)
[@kripke2012]. **The caveat is decisive and belongs
at the point of use.** This is a *single observational
cohort*; the live threat is **confounding by indication** — the distress, psychiatric load and occult
illness that lead to a hypnotic prescription independently raise mortality, and residual confounding
could not be excluded. No chronic-hypnotic mortality RCT exists (deemed unethical), and the lead author
runs an anti-hypnotic advocacy site. So this is a **decision-relevant harm signal, not a demonstrated
causal death toll** — enough to move hypnotics to a short-course, lowest-effective-dose, last-resort
option, not enough to assert they kill.

### Melatonin — modest, benign, no tolerance

Across 19 RCTs, melatonin cut sleep-onset latency by **7.06 minutes** (4.37-9.75), raised subjective
total sleep by **8.25 minutes**, and improved sleep quality (SMD 0.22)
[@ferraciolioda2013]. The effect is small
— below what benzodiazepines
achieve — but two features earn it a place: it shows **no tolerance** (the effect *grew* with trial
duration, unlike benzodiazepines) and a benign side-effect profile. It is a reasonable low-stakes
adjunct, strongest for circadian/timing complaints (jet lag, shift work)
-> [[Sleep Regularity and Mortality]], never a substitute for CBT-I. Whether chronic exogenous use
down-regulates endogenous
melatonin, and whether OTC doses (3-10 mg) beat physiologic ones (\~0.3-0.5 mg), are open questions the
held evidence does not settle.

### The order, and the "real sleep" question

**CBT-I first; melatonin as a benign adjunct; prescription hypnotics short-course and last.** The three
are not interchangeable routes to one outcome: CBT-I restores continuity and efficiency; melatonin
nudges timing and latency; sedative hypnotics produce drugged sedation whose long-run safety is
unestablished. The single highest-value move is switching a chronic hypnotic user onto CBT-I — the one
group where the harm lever and the benefit lever point the same way. Caveat on all three: every benefit
endpoint is a surrogate or self-report; no trial shows that treating insomnia lowers mortality
-> [[Sleep Aids and Insomnia Treatment]].

## Upstream levers and chronotype — mostly named gaps

The levers *upstream* of poor sleep — morning bright light and evening light restriction, exercise,
stress/HPA activation, late meals, and caffeine timing — are where a person actually intervenes, but
the corpus does not yet hold the pooled evidence to size them. Two overlaps are handled by cross-link,
not duplication: **late meals** -> [[Meal Timing and Fasting]] and **caffeine as a disruptor** ->
[[Coffee Consumption and Health]] (caffeine's \~5-6 hour half-life makes afternoon/evening intake a
plausible but here-unquantified sleep cost). **Chronotype** (morning/evening preference) is heritable
and best treated as a **constraint to align a schedule to, not a lever to force** — with *social
jetlag* (the mismatch between body clock and social schedule) the actionable construct. The
chronotype-genetics and light/exercise-to-sleep evidence are open acquisition targets; nothing here
should be read as a null.

## Putting it together — the decision

- **The one clear lever is chronic short sleep.** Below \~7 hours (especially below 5), a modest,
  mechanism-backed \~12% higher mortality and higher T2D risk make moving toward a \~7-8 hour *range* the
  actionable call. Above the range, more is not better.
- **Regularity is the promising newcomer.** Consistent sleep-wake timing may predict mortality better
  than duration and is often easier to change than adding hours — a real target for the adequately-slept
  but erratically-timed person, held at lower certainty (one cohort).
- **Long sleep is a marker, not a target.** Shortening a long sleeper's sleep optimizes a symptom of
  possible occult illness; the actionable response is evaluation, not sleep restriction.
- **For insomnia, reach for behaviour before drugs.** CBT-I carries the large, durable, harm-free
  benefit and is the exit from pills; melatonin is a small, safe adjunct; hypnotics buy short-term
  sedation against a real (if confounded) mortality/cancer association.
- **Sleep is not a big rock, but it is not nothing.** For the chronically sleep-deprived it is a
  moderate-effect, moderate-certainty lever — below smoking, adiposity and inactivity, above most
  refinements. Where the levers are already pulled (adequate, regular sleep, no insomnia), that the
  remaining gains are small is itself the useful result -> [[Sleep Duration and Mortality]],
  [[Sleep Aids and Insomnia Treatment]].

## Named gaps — what this appraisal cannot yet answer

- **Quality / architecture / within-night continuity.** Whether deep-sleep or REM architecture, or
  fragmentation at equal total time, independently moves hard outcomes is mechanistically reasonable but
  not yet evidenced here (OSA is the well-lit exception).
- **Upstream levers, unquantified.** Light, exercise-to-sleep, stress and late-meal effects are
  plausible and here un-pooled — named gaps, not nulls.
- **Chronotype and social jetlag.** The genetics and the align-to-your-clock payoff are held as a prior,
  not a quantified finding.
- **No head-to-head aids trial, and no hard-outcome insomnia-treatment trial.** The CBT-I-over-hypnotics
  order rests on separate evidence bases plus a harm asymmetry, not a direct comparison, and no trial
  shows treating insomnia lowers mortality.

---

### Mandatory caveats

- **Open loop.** This wiki grades internal coherence and fidelity to its sources — never whether a
  recommendation actually improves outcomes in the world. A clean appraisal is not a validated result.
- **Appraise, do not prescribe.** This is a general, population-level appraisal, not medical advice;
  selecting a sleep medication, dosing it, and screening for contraindications and interactions are
  prescriber acts requiring information this document does not hold.
- **A general appraisal, applied per person.** Your baseline health, shift/work schedule, chronotype,
  whether you have diagnosed insomnia or apnoea, and your realistic alternative decide the individual
  weighting.
- **Health axis only.** This cut weighs sleep on longevity, cardiometabolic and cognitive outcomes;
  daytime function, mood and quality of life are real and yours to weigh, entering here mainly through
  their physical intersection.
- **The target is not agreement or divergence with any guideline.** It is showing how good the sleep
  evidence is — largely observational and self-reported, with reverse causation the central threat — and
  where, despite that, a lever changes a decision.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | 'What does sleep do to health, which lever actually moves outcomes (duration, regularity, timing), do sleep aids give real sleep or drugged sedation, and what can a person actually change?' |
> | **Evidence included** | 8 sources — 4 gold, 3 high, 1 moderate |
> | **Overall certainty** | **Medium** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | 1 source(s) below the gold evidence bar feed this page: Kripke (cohort, moderate). Each labelled by tier; none load-bearing for the core claims. |
> | **Last updated** | 2026-08-05 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Sleep.md) |

## References

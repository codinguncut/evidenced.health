---
type: framework
question: For chronic insomnia, which works and is safest — CBT-I, prescription hypnotics, or melatonin — and do drugs give real sleep or sedation?
aliases: [Sleep Aids, Insomnia Treatment, CBT-I, CBT for Insomnia, Hypnotics, Sleeping Pills, Melatonin, Sedative Hypnotics, Insomnia Drugs]
authors: [van Straten, Annemieke; Cuijpers, Pim; Morin, Charles M; Lancee, Jaap; Kripke, Daniel F; Langer, Robert D; Kline, Lawrence E; Ferracioli-Oda, Eduardo; Qawasmi, Ahmad; Bloch, Michael H]
sources: [van Straten - CBT for Insomnia Meta-Analysis 2018, Kripke - Hypnotics Mortality Cancer 2012, Ferracioli-Oda - Melatonin Primary Sleep Disorders MA 2013]
cluster: sleep
confidence: medium
created: 2026-08-05
updated: 2026-08-05
self_critiqued: 2026-08-05
relationships:
  related_to:
    - Sleep Duration and Mortality
    - Sleep Regularity and Mortality
    - Sleep and Metabolic Health
    - Shared Modifiable Levers Across Age-Related Diseases
    - Dementia Prevention and Modifiable Risk Factors
---

Opens the treatment question for the `sleep` cluster: once someone *has* chronic insomnia, what should
they do? Three interventions, three evidence types. The beyond-summary move is that the ranking is **not**
set by effect size on a sleep number — it is set by **evidence type, durability, and harm**, which run in
the *opposite* direction to how these are usually reached for (a drug first, behaviour last).
[inferred from @vanstraten2018; @kripke2012; @ferraciolioda2013]

## Why the three cannot be ranked by effect size — the commensurability table

Each source reports a **different quantity** on a **different design**, so a numeric league table would
compare a standardized-mean-difference against minutes against a hazard ratio. The honest artifact is:
decide on evidence-type + harm, not on the effect number.

| Parameter | CBT-I (van Straten) | Hypnotics (Kripke) | Melatonin (Ferracioli-Oda) | Same quantity? |
|---|---|---|---|---|
| Design | 87 RCTs, MA (gold) | 1 matched cohort (moderate) | 19 RCTs, MA (gold) | **NO** — RCT-MA vs observational vs RCT-MA |
| Primary effect | ISI g=0.98; SOL g=0.57; TST g=0.16 | mortality HR 3.6-5.3 (dose); cancer HR 1.35 | SOL -7.06 min; TST +8.25 min; quality SMD 0.22 | **NO** — g vs HR(harm) vs minutes |
| What is measured | sleep continuity/quality (benefit) | death + cancer (harm) | latency/duration (benefit, small) | **NO** — different endpoints entirely |
| Durability / tolerance | robust incl. chronic hypnotic users; long-term asserted | short-term efficacy only | **no tolerance** (effect grows with duration) | comparable direction, not magnitude |
| Harm signal | none reported | strong (confounded) | benign side-effect profile | — |

Because every *same quantity?* cell is **NO**, no cross-source magnitude claim is made. The within-source
comparisons stand: van Straten's *smallest* effect is on total sleep time (g=0.16) — CBT-I consolidates
sleep, it does not add hours; Ferracioli's own benchmark puts melatonin's <7-min latency gain *below*
benzodiazepines' 10.0-19.6 min. [@ferraciolioda2013, 
, Discussion]

## CBT-I — the first-line, and the only one that restores sleep without a drug `[EXTRACTED]`

van Straten pooled 87 RCTs (3724 treated): large effects on insomnia severity (ISI g=0.98), sleep
efficiency (g=0.71), wake-after-onset (g=0.63) and onset latency (g=0.57); the *smallest* on total sleep
time (g=0.16). [@vanstraten2018, /03] Two decision-
relevant properties:

- **It works where drugs are the problem.** Effects were «quite robust (similar for patients with or
  without comorbid disease, younger or older patients, using or not using sleep medication)» — including
  chronic hypnotic users, i.e. it is the exit route from pills.
- **It is guideline first-line.** «CBTI is at least as effective as pharmacotherapy» and «the American
  College of Physicians recently recommended CBTI as the initial treatment for all adults with insomnia».
  [@vanstraten2018]
- **Cost + honesty.** Face-to-face / >=4-session beats self-help; publication bias is present, so «the
  actual effects of CBTI on insomnia might be smaller although still signiﬁcant». Adherence + access
  (therapist availability) are the real constraints -> [[Sleep Duration and Mortality]].

## Hypnotics — real sedation, but a harm signal that inverts the naive choice `[EXTRACTED]`

Kripke's matched cohort found a strong dose-response **mortality** association: HR 3.60 / 4.43 / 5.32
across ascending dose tiers, and **HR 3.60 even at <18 pills/year** — plus a cancer signal (upper-third
HR 1.35). [@kripke2012] The association «robust within
groups suffering each comorbidity, indicating that the death and cancer hazards ... were not attributable
to pre-existing disease».

**The caveat is decisive and must be stated at point of use (symmetric standards).** This is a single
**observational** cohort; the live confounder is **confounding by indication** — the same distress,
psychiatric load and occult illness that lead to a hypnotic prescription independently raise mortality,
and «residual confounding could not be fully excluded». Stratifying on 116 comorbidity combinations
attenuates but cannot remove it, and no chronic-hypnotic mortality **RCT** exists (deemed unethical). The
lead author also runs an anti-hypnotic advocacy site — reason to hold the *magnitude* loosely. So the
hazard is a **decision-relevant harm signal, not a demonstrated causal death toll**: it shifts hypnotics
from a first reach to a short-course, lowest-effective-dose, last-resort option. Kripke's own conclusion:
«A consensus is developing that cognitive-behavioural therapy of chronic insomnia may be more successful
than hypnotics.»

## Melatonin — modest, benign, no tolerance `[EXTRACTED]`

Ferracioli-Oda's 19-RCT MA: melatonin cut sleep-onset latency by **7.06 min** (4.37-9.75), raised total
sleep time by **8.25 min** (subjective; NS on objective measures), and improved quality (SMD 0.22).
[@ferraciolioda2013] Two features earn it a
place despite the small effect: it shows **no tolerance** (effect *grew* with trial duration and dose,
unlike benzodiazepines), and a **benign side-effect profile** — «the absolute benefit of melatonin
compared to placebo is smaller than other pharmacological treatments ... melatonin may have a role ...
given its relatively benign side-effect profile». A reasonable low-stakes adjunct (especially for
circadian/timing complaints -> [[Sleep Regularity and Mortality]]), never a substitute for CBT-I.

## Decision relevance — the substitution frame

- **Order: CBT-I first; melatonin as a benign adjunct; hypnotics short-course, last.** The usual order is
  inverted because the ranking follows *harm + durability*, not the effect number: CBT-I carries the
  large, durable, harm-free benefit and is the exit from pills; melatonin is small but safe and
  non-tolerance-forming; hypnotics buy short-term sedation against a real (if confounded) mortality/cancer
  signal.
- ***Do sleep aids give real sleep?*** CBT-I restores *continuity and efficiency* (the sleep-architecture
  answer); melatonin nudges *timing/latency*; sedative hypnotics produce *drugged sedation* whose
  long-run safety is unestablished. The three are not interchangeable routes to one outcome.
- **Stratum.** Chronic insomnia is the target; the chronic hypnotic user is the highest-value stratum for
  a CBT-I switch (the one group where the harm lever and the benefit lever both point the same way).

## Limits

- **No head-to-head trials among the three** — the ordering rests on separate evidence bases + a harm
  asymmetry, not a direct comparison; the durability-of-CBT-I-vs-hypnotics claim is asserted from
  component reviews, not pooled here.
- **The harm anchor is one confounded cohort.** The hypnotic-mortality magnitude is the weakest-design
  input; it is used as a labelled counterweight (moderate tier, gold-gate override), not a precision
  figure -> [[Sleep Duration and Mortality]].
- All benefit endpoints are **surrogate/self-report** (ISI, PSQI, latency) — no hard-outcome trial shows
  treating insomnia lowers mortality. Coherence, not validity (R1).
- **AWAITS** the ACP/AASM insomnia guideline as a second guidance family, and any hypnotic-vs-placebo
  long-term safety RCT (none exists).

[inferred from @vanstraten2018; @kripke2012; @ferraciolioda2013]

## References

---
type: framework
question: Does exercise prevent falls and fall-related fractures in community-dwelling older adults, and which types of exercise work?
aliases: [Falls Prevention, Fall Prevention Exercise, Preventing Falls in the Elderly, Balance Training Falls, Exercise and Falls]
authors: [Sherrington, Catherine; Fairhall, Nicola J; Wallbank, Geraldine K; Tiedemann, Anne; Lamb, Sarah E; Kahwati, Leila C; Weber, Rachel Palmieri; LeBlanc, Erin; Viswanathan, Meera; Racey, Megan]
sources: [Sherrington - Exercise Preventing Falls 2019, Kahwati - Vitamin D Calcium Fractures Evidence Review 2018, Racey - Physical Activity Interventions Frailty Meta-Analysis 2021]
cluster: falls
nucleus: true
confidence: moderate
relationships:
  related_to:
    - Physical Activity Dose and Mortality
    - Muscle-Strengthening Activity and Mortality
    - Protein and Resistance Training for Muscle and Strength
    - Sarcopenia Definition and Diagnosis
    - Baseline Risk and the Relative-Absolute Split
    - Deficiency Repletion vs Enhancement
    - Frailty
    - Exercise Safety in Osteoporosis
    - Exercise and Bone Mineral Density
created: 2026-08-05
updated: 2026-08-27
self_critiqued: 2026-08-05
---

The nucleus of the **falls / fracture-prevention** cluster — a large, high-lever, patient-important
outcome for the older stratum that was previously a named-but-empty gap. Falls are not a surrogate:
at least one-third of community-dwelling people over 65 fall each year, and fall-related fracture
(hip above all) is a direct driver of loss of independence and death. Source: one gold-tier Cochrane
SR, 108 RCTs / 23,407 participants, mean age 76 [@sherrington2019].

## The headline — exercise prevents falls, and this is HIGH-certainty

Exercise (all types) versus a control not thought to reduce falls
[@sherrington2019]:

- **Rate of falls: RaR 0.77 (0.71-0.83), 59 RCTs, HIGH certainty (GRADE).** In absolute terms, at an
  illustrative control risk of 850 falls per 1000 people per year, that is **195 (144-246) fewer falls
  per 1000 per year**.
- **People who fall (>=1 fall): RR 0.85 (0.81-0.89), 63 RCTs, HIGH.** At 480 fallers/1000/yr control,
  **72 (52-91) fewer fallers per 1000 per year**.

This is a rare thing in this wiki's domain: a **HIGH-certainty, RCT-based, patient-important-outcome**
effect. Falls are directly observed and hard to game, exercise-vs-control is randomisable, and removing
the high-risk-of-bias trials left the result essentially unchanged (so non-blinding did not downgrade it)
[@sherrington2019]. Contrast the physical-activity
*mortality* evidence, which is observational and far softer -> [[Physical Activity Dose and Mortality]].

## Which exercise — the decision is NOT *exercise*, it is *balance*

The types differ (subgroup test for rate of falls P=0.004), and the ordering is a decision object
[@sherrington2019]:

| Exercise type | Rate of falls | Certainty | Verdict |
|---|---|---|---|
| **Balance + functional** (gait / balance / task training) | RaR 0.76 (0.70-0.81), 39 RCTs | **HIGH** | the evidenced workhorse |
| **Multiple categories** (usually balance+functional + resistance) | RaR 0.66 (0.50-0.88), 11 RCTs | moderate | largest point effect (34%) |
| **Tai Chi** (3D) | RaR 0.81 (0.67-0.99), 7 RCTs | low (rate); HIGH for fallers RR 0.80 | works, mixed certainty |
| **Resistance training ALONE** | RaR 1.14 (0.67-1.97), 5 RCTs | very low | no clear fall benefit standalone |
| Dance / walking alone | uncertain | very low | insufficient evidence |
| Flexibility / endurance | no trials vs control | — | unstudied (not *no effect*) |

- **The active ingredient is safely challenging balance**, not exercise volume as such. The authors'
  earlier metaregression and an independent network meta-analysis (Tricco 2017) converge on this
  [@sherrington2019]. «Exercise programmes that reduce
  falls primarily involve balance and functional exercises, while programmes that probably reduce falls
  include multiple exercise categories (typically balance and functional exercises plus resistance
  exercises).» [@sherrington2019]
- **Resistance training alone does not reduce falls** here — its point estimate sits *above* 1. This is
  not a contradiction of resistance training's independent mortality/diabetes signal
  ([[Muscle-Strengthening Activity and Mortality]]) or its role in defending muscle
  ([[Protein and Resistance Training for Muscle and Strength]]): different outcome, different mechanism.
  Falls are a *balance/gait* problem; strength is a component of the effective multiple-category
  programmes but not the lever on its own. [inferred from @sherrington2019]
- ***Walk more* is not fall-prevention advice.** Walking programmes have insufficient evidence and are
  not what reduces falls — a substitution worth naming, because it is the intuitive default.

## Fractures and injurious falls — the leg to the bone side, honestly lower-certainty

The outcomes people most fear are the worst-measured (streetlight effect on the outcome side)
[@sherrington2019]:

- **Fall-related fractures: RR 0.73 (0.56-0.95), 10 RCTs, LOW certainty** — downgraded two levels for
  imprecision and likely publication bias. Absolute: 47 vs 64 per 1000 -> \~17 fewer fractures/1000/yr.
  For balance+functional specifically RR 0.44 (0.25-0.76), 7 RCTs, still LOW — a larger point estimate on
  thin data.
- **Falls requiring medical attention: RR 0.61 (0.47-0.79), 5 RCTs, LOW.**
- **Falls requiring hospital admission: RR 0.78 (0.51-1.18), 2 RCTs, VERY LOW — CI crosses 1, unclear.**
- **Quality of life: SMD -0.03, little important difference (LOW).**

So the chain *exercise -> fewer falls* is HIGH-certainty; the downstream *exercise -> fewer fractures /
hospitalisations* chain is promising but LOW-to-very-low certainty, because trials under-report these harder
outcomes, not because the effect is absent (expectancy test: fractures are rarer events needing far
larger trials). This is the exercise leg of fracture prevention.

**The two channels of exercise -> fracture, kept distinct (2026-08-27).** Exercise reaches fracture
by two largely independent routes, and this page measures only one. The **falls channel** above
(balance/functional -> fewer falls -> fewer fractures) is BMD-independent and carries the larger,
HIGH-certainty upstream signal. The **bone-loading channel** (loading -> higher BMD -> stronger bone)
is a separate, smaller effect on a *surrogate* -> [[Exercise and Bone Mineral Density]] (Mohebbi
2023: BMD SMD \~0.29-0.41, moderate at best, fracture transmission not shown). A BMD meta-analysis is
structurally blind to the falls channel, so BMD *under*-reads exercise's fracture value — while a
small BMD gain does not itself guarantee a fracture reduction ([[Surrogate Outcomes]]). Frame the
recommendation on the composite of both channels, not on either number alone.
[inferred from @sherrington2019; @mohebbi2023]

## The other leg — vitamin D / calcium supplements do NOT prevent fractures in the community-dwelling

The intuitive second lever for the older adult — supplement vitamin D and/or calcium for the bones —
**fails in the community-dwelling, non-deficient stratum**, and this is the decision-relevant contrast to
the exercise result above. The USPSTF evidence review (Kahwati 2018, gold SR, 11 RCTs, N=51,419,
community-dwelling adults >=50 with the deficient / institutionalized / osteoporotic / prior-fracture
strata **excluded**) found [@kahwati2018]:

- **Vitamin D + calcium: no fracture benefit.** Total fracture (WHI, n=36,282) ARD -0.35% (-1.02 to 0.31),
  HR 0.96; hip ARD -0.14% (-0.34 to 0.07). SoE **Low for no benefit**.
- **Vitamin D alone: no clear benefit** (hip pooled ARD -0.01%, RR 1.08; a single-trial total-fracture
  signal ARD -2.26% not replicated). **Calcium alone: insufficient.**
- «Vitamin D supplementation alone or with calcium was not associated with reduced fracture incidence
  among community-dwelling adults without known vitamin D deficiency, osteoporosis, or prior fracture»
  [@kahwati2018].
- **A harm to weigh:** vitamin D + calcium **raised kidney stones** — pooled ARD 0.33% (0.06 to 0.60),
  RR 1.18 (1.04-1.35), SoE **Moderate** (the review's only above-low grade); calcium alone did not, and
  vitamin D alone was unstudied on stones [@kahwati2018].

**This is NOT "supplements don't work" — it is the enhancement arm of a two-arm curve, and the review
says so itself.** The benefit lives in the *excluded* strata: «The fracture benefits overall appear to be
largely attributable to benefits among the high-risk populations, with little to no benefit in lower-risk
populations (1 fewer hip fracture per 1000 community-dwelling adults per year [95% CI, 0 to 2])»
[@kahwati2018] (Kahwati reporting the
2014 Cochrane review, which *included* institutionalized/deficient/osteoporotic populations). So the
supplement leg is a **deficiency-repletion** lever, not a community-wide one
-> [[Deficiency Repletion vs Enhancement]], [[Vitamin D and Calcium Supplementation for Fracture Prevention]]
(the page that owns the fracture-benefit-net-of-harms verdict, where a broader D+Ca hip-fracture signal
sits as a population DISTINCTION from Kahwati's community-dwelling null).

**The decision-change for the elderly stratum:** the two legs of fracture prevention run **opposite ways**.
For the generally-nourished, non-osteoporotic community-dwelling older adult, **exercise (balance +
functional) carries a fracture signal (RR 0.73, LOW) sitting downstream of its HIGH-certainty fall
reduction, while vitamin-D/calcium supplementation shows a fracture null** — so the better-evidenced
lever is the movement one, reversing the common intuition that the pill is the bone-protective move.
Supplementation earns its place only in the confirmed-deficient / institutionalized / osteoporotic stratum
(a prescriber act needing this person's status).
[inferred from @kahwati2018; @sherrington2019]

## Who, and how much — the stratification

- **Route (a), stated by the source:** the *relative* effect does not vary by baseline fall-risk, age
  (>=75 vs <75), or group-vs-individual delivery — every subgroup falls within the headline CI. So there
  is no effect modification to personalise on; but «there is likely to be a greater absolute impact in
  people identified at increased risk of falling, but there is benefit also for those who are at more
  general risk in the community»
  [@sherrington2019], because absolute benefit scales
  with baseline risk -> [[Baseline Risk and the Relative-Absolute Split]]. The high-risk elderly get more
  falls averted per person; the general community still benefits.
- **Delivery:** effective whether delivered in a group or individually; by a health professional or a
  trained non-health instructor — though a health professional gave a somewhat larger effect (RaR 0.69
  vs 0.82, P=0.04) [@sherrington2019]. This widens
  implementable options (home, group class, supervised).
- **Dose/duration:** a sustained habit, not a course — most programmes ran 12 weeks or more and nearly a
  third lasted a year or more; head-to-head data were too underpowered to set an optimal dose, but
  higher-challenge, higher-dose balance work trended better
  [@sherrington2019].
- **Harms:** where reported, predominantly non-serious musculoskeletal; 2 serious events across all 108
  trials (a pelvic stress fracture and a hernia). Adverse-event monitoring was poor (very low certainty),
  but nothing signals net harm — the intervention is low-risk relative to a large benefit.

## Where this sits in the ranking

For the functionally-drifting or at-risk older adult, this is a **big rock**: a large effect on a
patient-important outcome, known with HIGH certainty, on a low-risk and widely-implementable
intervention. It is the strongest outcome class the activity evidence carries for the elderly stratum
-> [[Physical Activity Dose and Mortality]]. The loop stays open: no operation here grades this against a
realised outcome, and *appraise, do not prescribe* binds — programme selection, progression and
fall-risk titration in a specific person are prescriber/coaching acts. [inferred from @sherrington2019]

## Caveat — the HIGH-certainty result is for the GENERAL older adult, not the already-frail

[inferred from @racey2021frailtypa]
Sherrington's population is community-dwelling older adults (mean age 76), *not* selected for frailty.
In the *identified prefrail/frail* stratum, Racey's SR-MA finds physical activity does NOT significantly
reduce falls (RR 0.80 [0.51-1.26], very low certainty, 7 studies) even while it improves mobility, ADLs
and frailty status [@racey2021frailtypa].
This is a distinction, not a contradiction (not-joined check (ii): different population + far thinner
evidence): balance+functional exercise is the best-evidenced fall lever *before* deep frailty; once
frailty is established, the falls signal is uncertain, the intervention must be dosed down to avoid
injury, and the payoff shifts to function/mobility rather than falls -> [[Frailty]].

## References

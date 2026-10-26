---
type: framework
question: Does exercise have to be supervised, or does unsupervised (home) delivery retain enough of the benefit to be the realistic default?
aliases: [Supervised vs Unsupervised Exercise, Home-Based Exercise, Supervised Exercise, Unsupervised Exercise, Exercise Delivery Format, Supervision and Exercise Outcomes, Home vs Gym Exercise]
authors: [Gomez-Redondo, Paola; Valenzuela, Pedro L.; Morales, Javier S.; Ara, Ignacio; Manas, Asier; Franklin, Barry A.; Riebe, Deborah A.; Garber, Carol Ewing; Blissmer, Bryan J.; Deschenes, Michael R.; LaMonte, Michael J.; Lee, I-min M; Nieman, David Christopher; Swain, David P.]
sources: [Gomez-Redondo - Supervised Unsupervised Exercise, Franklin - Exercise-Related Acute Cardiovascular Events AHA 2020, Riebe - ACSM Preparticipation Health Screening 2015, Garber - ACSM Quantity and Quality of Exercise Position Stand 2011]
cluster: activity
nucleus: false
confidence: low
relationships:
  related_to:
    - Is the Exercise Modality Doing Any Work
    - Physical Activity Dose and Mortality
    - Resistance Training Prescription - Load Sets and Frequency
    - Power Training and Physical Function in Older Adults
    - Exercise for Preventing Falls in Older Adults
    - Grip Strength and Mortality
    - Exercise-Related Acute Cardiac Events
    - Implementation Intentions and Action Planning for Physical Activity
created: 2026-10-04
updated: 2026-10-22
self_critiqued: 2026-10-22
---

The delivery-format decision for the physical-activity lever: when exercise is the prescription, must
it be supervised (a trainer/clinician present, usually facility-based) or can it be done unsupervised
at home? The question matters because unsupervised home delivery removes the two largest real-world
barriers to the lever — cost and travel/scheduling — so if it retains most of the benefit it is the
realistic default for a self-directed person, with supervision reserved for where it is load-bearing.

## Bottom line

For physical-function and well-being outcomes in older adults (>=60 y), supervised delivery (SUP)
produces at most a **small** advantage over unsupervised (UNSUP), and that advantage **mostly does not
survive sensitivity analysis**. Of the outcomes where SUP beat UNSUP, only **knee extension strength**
remained significant when fragile studies were removed [@gomezredondo2024].
On the substitution framing (judge a strategy against its realistic alternative), the alternative to
unsupervised home exercise is often *no* program at all — so UNSUP is a sufficient default for most
outcomes, and the source's own verdict is that it is a safe, cost-effective alternative where SUP is
not feasible [@gomezredondo2024].

## The evidence

Gomez-Redondo (SR+MA of RCTs, Sports Med 2024): 34 studies, n=2830, older adults >=60 y, direct
SUP-vs-UNSUP head-to-head [@gomezredondo2024];
mean study quality TESTEX 10 (range 4-14)
[@gomezredondo2024].

SUP was significantly superior to UNSUP on six outcomes, but only one was robust to sensitivity
analysis [@gomezredondo2024]:

| Outcome | k (n) | SUP vs UNSUP effect (95% CI) | p | Robust to sensitivity? |
|---|---|---|---|---|
| Knee extension strength | 10 (1,126) | SMD 0.18 (0.07, 0.30) | 0.002 | **Yes** (leave-one-out; I^2 0%) — but Begg's p=0.037, mean TESTEX 9 |
| Usual gait speed | 8 (834) | SMD 0.29 (0.04, 0.55) | 0.026 | No |
| Sit-to-stand | — | SMD \~0.25 | 0.050 | No |
| Timed-up-and-go | — | SMD \~0.21 | 0.035 | No |
| Lean mass | 5 (118) | MD 1.05 kg (0.76, 1.34) | <0.001 | No (lost on removing one study) |
| HRQoL | 9 (953) | SMD 0.21 (0.02, 0.40) | 0.035 | No (lost on removing almost any study) |
| Handgrip, functional reach, balance, max gait speed, 6MWT, VO2peak, BMI, body mass, body fat | — | all non-significant | ns | — |

The surviving effect (knee extension SMD 0.18) is small, and sits near the lower SMD band; the
others cluster at SMD \~0.2-0.3 but are not stable [@gomezredondo2024].

## Attendance does not explain the SUP edge (adherence largely unmeasured)

The intuitive story is that supervision helps by keeping people turning up. Attendance does not
support it: pooled attendance was similar in both arms. «The incidence of adverse events and falls as well as the
attendance to the pro- gram (81%) were similar in the SUP and UNSUP groups.»
[@gomezredondo2024]

But the two 81% figures pool different study sets (21 SUP, 20 UNSUP; UNSUP range 38-100% vs SUP
60-100%), and the authors flag them as possibly biased: UNSUP attendance was mostly diary-reported, and
21 of the 34 UNSUP arms involved some supervision. Adherence proper (doing the prescribed intensity /
duration / exercises) was measured in only two studies, with mixed results: in Sandberg, full adherence
was 24% (SUP) vs 26% (UNSUP), partial adherence 71% vs 48%, per the review's text; its summary table
gives both pairs the other way round — full adherence «SUP: 26% UNSUP: 24%», partial (labelled
attendance there) «SUP: 48% UNSUP: 71%» — so neither the 2-point nor the 23-point gap has a reliable
direction
[@gomezredondo2024]
[@gomezredondo2024].

So the SUP edge is not explained by *attendance*, which was similar on pooled, partly diary-reported
figures *within the trial window*; whether it is adherence-mediated is largely unmeasured —
within-session compliance (doing the prescribed intensity) stays a live mediator alongside what the
supervised sessions *contained*. (corrected 2026-10-06: *cannot be an adherence effect ... not in the
dose completed* -> attendance-not-explanatory, adherence largely unmeasured; self-critique.)

Caveat on horizon: these are trial-window attendance rates. Whether unsupervised programs sustain
adherence over the longer term (after the trial's contact and measurement fall away) is not resolved
by this evidence — a named gap, not a null.

For an unsupervised exerciser, one cheap way to keep some scheduled contact is a written if-then plan
plus a scheduled check-in to revise it. Whether that replaces anything a supervisor provides is
untested; its own evidence (self-reported, short-term, a reinforced-plan subgroup signal under a null
overall estimate) is on [[Implementation Intentions and Action Planning for Physical Activity]]. [inferred from @gomezredondo2024]

## The dose confound — a likely contributor to the non-robust edges

SUP and UNSUP arms were generally **not dose-matched**: supervised sessions tended to use harder
exercise selection, higher intensity, and more volume. «However, it must be noted that the number of
adverse events and falls reported in this study may be underestimated given that exercise dose
variables are generally not equated between SUP and UNSUP groups (i.e., more difficult exer- cise
selection, higher intensity, and volume for SUP).»
[@gomezredondo2024]

So the comparison is confounded: SUP is partly a proxy for *more/harder exercise*, not for supervision
as such. This reframes the decision — the question is less "supervised vs unsupervised" than "can an
unsupervised person reach the same dose (intensity/volume) a trainer would push them to?" Where they
can, the format gap should shrink, to the extent dose is the channel. The source's own similar-programme sub-analysis
partly bears this out and partly does not: «Sub-analyses revealed superior benefits of SUP on knee
extension strength when only considering those studies that applied a similar intervention in both SUP
and UNSUP groups. However, no significant benefits were found for the remaining outcomes. Beneficial
effects of SUP over UNSUP were also observed for knee extension strength, STS, functional reach test, TUG,
usual gait speed, lean mass, and HRQoL when separately analyzing those studies in which participants
performed ≥ 66% of the sessions in the assigned condition.»
[@gomezredondo2024] The ≥66% subset is a
supervision-fidelity filter, not an adherence one — «the SUP group performed at least 66% of the
sessions under supervision» — and the similar-intervention subset means «targeting the same muscle groups
and with similar characteristics» [@gomezredondo2024].
So the dose reading fits the matched subset (only knee extension survives, below; TUG and usual gait
speed show «A trend towards statistical significance» there that did not reach it — not a shown zero
[@gomezredondo2024]; corrected 2026-10-06:
*5-study null* -> trends; self-critique), while the broad edge in the genuinely-supervised subset does not separate the
readings, because those programmes were not required to match; hold the dose explanation as a likely
contributor, not a shown one (refined 2026-10-06, Gomez-Redondo chunks 01-03). The source's only
dose statement is the safety-section caveat above, not a measured efficacy comparison; its discussion
names other candidate mechanisms beside it — «obtaining direct feedback from a professional, the social
component of being with other participants, or having greater material resources»
[@gomezredondo2024].

One finding resists this deflation: knee extension strength stayed significant even in the sub-analysis
restricted to studies that applied a **similar** intervention in both arms, and in those where >=66%
of SUP sessions were actually supervised [@gomezredondo2024].
So knee extension is the one place a genuine supervision effect is hardest to explain away as a pure
dose artifact. Two cautions: SMD 0.18 is small, and the row carries a nominally significant Begg's test
(p=0.037; mean TESTEX 9, range 4-13) — a possible small-study signal the source does not discuss (Begg's appears only in its methods and Table 4;
searched: Begg / publication bias / small-study across chunks 01-04)
[@gomezredondo2024]. Why supervision would help
here is a hypothesis: better loading of a lower-limb strength exercise that is easy to under-load
alone is the wiki's guess, untested in the source; the authors instead propose training specificity
(lower-body exercises «with similar movement patterns» to the test) and a «lower starting level» on
these outcomes [@gomezredondo2024].
Knee extension strength is also a prognostically weighty target — it tracks ADL/function and mortality
-> [[Grip Strength and Mortality]], [[Low Muscle Mass and Mortality]].

## Substitution framing and who this changes

- **For a self-directed, reasonably capable person:** unsupervised home exercise is a sufficient
  realistic default for most function and well-being outcomes; the measured cost of going it alone is
  small and mostly not robust. The exception worth considering paying supervision for is dedicated
  lower-limb strength loading (the knee-extension signal — a small, possibly bias-inflated one),
  plausibly because unsupervised loading is lower (untested here; the authors instead propose training
  specificity and low baseline strength). On adherence to resistance training specifically,
  the 2011 ACSM stand adds: «Limited evidence suggests that enhancing desires for strength and feelings of
  empowerment, previous exercise ex- perience, and supervision by an experienced instructor may increase
  adoption and adherence of resistance training among older adults (304,319).» (Two studies in older adults, one
  cross-sectional; adherence, not outcomes.) [@garber2011acsm]
- **For someone who would otherwise not exercise at all:** the realistic alternative to UNSUP is
  nothing, so UNSUP dominates — the source's explicit position: «However, for those unable to perform
  SUP, UNSUP may represent a safe and cost-effective alternative to ensure physical exercise.»
  [@gomezredondo2024]
- **Safety is not a reason to insist on supervision here:** adverse events and falls were similar in
  both arms [@gomezredondo2024] — though note
  dose was not equated, so a dose-matched unsupervised program might carry a different (unmeasured)
  injury profile for a deconditioned novice -> [[Resistance Training Prescription - Load Sets and Frequency]].
- **Except after a recent cardiac event, and for vigorous or HIIT work in known or suspected coronary
  disease — a route-(c) stratum this source does not cover `[2026-10-21, Franklin]`.** An AHA scientific
  statement (consensus) recommends supervision for one named group: «Medically supervised programs
  (cardiac rehabilitation) are recommended for at-risk patients (eg, recent acute coronary syndrome,
  revascularization, or heart failure).» (Table 5, class I B). Its preferred vehicle for cardiac patients
  includes home delivery («ideal- ly via traditional medically supervised center- or home- based cardiac
  rehabilitation programs»), and the same table encourages all patients to get 30-60 min of
  moderate-intensity activity such as brisk walking on most days, with no supervision named.
  [@franklin2020acute] Supervised
  cardiac rehab facilities ran at «1 event per 58 000 patient-hours» (a 16-year follow-up, ref 74, 1998),
  higher than multicenter fitness-facility data (1 per 1,124,200 nonfatal and 1 per 887,526 fatal events)
  «but still low».
  [@franklin2020acute]
  [@franklin2020acute] [inferred from @franklin2020acute]
  Summed, the fitness-facility rates come to about 1 event per 0.5 million person-hours.
  - **HIIT in this stratum:** more safety data «are needed be- fore it can be widely adopted in patients
    with known or suspected CAD, especially in unsupervised, non- medical settings.» Inside supervised
    rehab, one cohort (Rognmo, n=4846) saw a 5.6x higher, still low, event rate with HIIT than with
    moderate continuous training, and the fitness edge of HIIT disappeared once energy expenditure was
    matched. [@franklin2020acute]
  - **Up-titration, not a cap:** patients start rehab at about 2-3 METs and up-titration is often too
    slow, especially once early monitoring stops, so the statement advises counselling them to raise walking speed or grade gradually up to moderate intensity
    (3.0-5.9 METs) while asymptomatic, below the ≥6 MET vigorous range. [@franklin2020acute]
  - The Gomez-Redondo safety parity above is for older adults in general. For coronary
    patients, the statement's supervision line is structured rehab after a recent event or in heart
    failure, plus caution on HIIT, especially unsupervised; it does not make supervision a requirement for
    moderate walking. The cheap default for this stratum is moderate continuous training. **There is no
    supervised-vs-unsupervised cardiac event-rate comparison in CAD in any of the page's sources** — supervised rehab
    has a denominator, home exercise in the same stratum does not — so this is a consensus boundary, not a
    measured gap -> [[Exercise-Related Acute Cardiac Events]].
  - **Clearance is not supervision.** The ACSM 2015 preparticipation algorithm (consensus; shares authors
    Franklin and Thompson with the AHA statement, so not a second route) sends inactive people with known
    cardiovascular, metabolic (type 1 or 2 diabetes) or renal disease, and anyone with symptoms, for
    *medical clearance* («approval from a health care professional to engage in exercise») before starting,
    then light-to-moderate work; the provider «decides what evaluation, if any, is appropriate». Flagging
    people with disease «who may benefit from participating in a medically supervised exercise program» is
    one of its three stated goals, but no branch of the algorithm requires supervision, and it is scoped to
    aerobic exercise («logic model for aerobic exercise participation»).
    [@riebe2015screen]
    [inferred from @riebe2015screen] So for light-to-moderate *aerobic*
    exercise, a novice with no diagnosed CVD, diabetes or renal disease and no symptoms needs neither
    medical clearance nor supervision (risk factors alone no longer trigger clearance; the self-check for
    symptoms and known disease still applies). Whether to supervise inside the cleared-with-disease stratum
    is left open by the algorithm, so it falls to the clinician. Riebe does not cover resistance training
    (risk «seems to be low» on few data); for strength work the no-supervision default rests on the
    Gomez-Redondo safety data above.
- **The 2011 ACSM stand on adherence, cost and risk, for adults in general `[2026-10-22, Garber]`.** Its
  Table 1 grades supervision by an experienced health and fitness professional as enhancing adherence at
  **C** (nonrandomized or observational). Its text runs both ways: «Su- pervision by an
  experienced exercise leader can, on the other hand, enhance adherence (87,319). Structured, super- vised
  programs and unsupervised, home-based programs can increase exercise behavior, and there seems to be no
  differences in adherence to home-based and traditional ex- ercise programs (86,100,307), although some
  studies have found an advantage for home-based exercise (91,131,183).» On cost: «Even if the long-term
  adherence between structured, supervised pro- grams and home-based exercise programs is similar, cost-
  effectiveness analyses support the promotion of home-based programs (317,321).» On safety: «There are no
  randomized studies demonstrating the ef- fectiveness of supervision by a well-trained fitness profes-
  sional in reducing the risks of exercise, but the low risk of exercise-related complications in medically
  supervised ex- ercise programs (14,359) supports the likelihood of benefit, particularly for novice
  exercisers who are at an elevated risk for exercise-related complications.» A fitness professional
  reducing risk is graded **D** (panel consensus).
  [@garber2011acsm]
 This sits beside Gomez-Redondo's equal attendance (81%) without being a second route to it: the
  stand's adherence claims draw on different trials and ages (one, ref 86 Cox, is the S.W.E.A.T.
  home- vs centre-initiated trial in women aged 40-65), cited, not pooled. On home-based delivery it agrees
  (a reasonable default, favoured on cost-effectiveness), and it adds that the safety case for supervision
  rests on low event rates in supervised programmes, not on a comparison. The stand's pro-supervision
  adherence line (refs 87, 319) cites two studies in older women. Its Conclusions lean the other way for
  novices: «The supervision of an experienced fitness professional can enhance adherence to exercise and
  likely reduces the risk of exercise in those with elevated risk of adverse CHD events. Adults, especially
  novice exercisers and persons with health conditions or disabilities, likely can benefit from
  consultation with a well-trained fitness professional.» So the agreement is on home-based as an
  acceptable default, not on supervision being unnecessary for the novice or the higher-risk person.
  [@garber2011acsm] Franklin, Barry A.
  co-authors this stand and the AHA statement above, so no independence is claimed between them.

## Transportability — older adults, not middle-aged

The entire evidence base is >=60 y. The barriers supervision addresses (technique, loading confidence,
fall risk during exercise) are plausibly *larger* in older adults than in a middle-aged person, so the
small SUP advantage found here is, if anything, an **upper bound** for a younger, more capable
stratum — the delivery-format gap should be no wider, and likely narrower, for the middle-aged. But
this is a directional transport argument, not measured: no head-to-head SUP-vs-UNSUP *outcome* evidence
below 60 is held. Adherence parity in women aged 40-65 is cited second-hand by the 2011 ACSM stand (Cox,
the S.W.E.A.T. trial; not held). Named gap.

AWAITS <SR of supervised vs unsupervised exercise in middle-aged adults> -- would test whether the
delivery-format gap transports below age 60.

## Synthesis

The page is **configurative**, single-source (a provisional domain-opener for the delivery/adherence
cell). The decision-relevant move it makes, present in no outcome row on its own: the SUP-vs-UNSUP
contrast is partly a *dose* contrast wearing a *format* label — unequated dose is a confounder the
authors flag (SUP arms trained harder), pooled attendance was similar though adherence was largely
unmeasured, and the matched subset leaves knee extension standing; feedback, social contact and
resources are the authors' other named candidates — so attainable dose is a decision variable
alongside presence of a supervisor, with lower-limb strength loading (a small, possibly bias-inflated
signal) the one residual place supervision most plausibly earns its cost. (corrected 2026-10-06:
*largely a dose contrast ... because attendance was equal* -> partly; self-critique.)
Confidence is **low**: single source, small and mostly non-robust effects, trial-window horizon, and
an older-adult population that may not transport.

## References

---
type: framework
question: How should resistance training be prescribed — load, sets, weekly frequency, and equipment modality (free-weights vs machines) — for strength versus hypertrophy, what is the minimal effective dose, and does any of it move a health outcome?
aliases: [Resistance Training Prescription, RT Prescription, RTx, Load Sets Frequency, Weekly Sets, Strength vs Hypertrophy Training, Minimal Effective Dose Resistance Training, Higher Load Training, Sex Differences Resistance Training, Should Women Train Differently, RT by Sex, Free Weights vs Machines, Machine vs Free Weight Training, Equipment Modality Resistance Training, Specificity of Strength Training, DOMS, Delayed Onset Muscle Soreness, Muscle Soreness, No Pain No Gain, Is Soreness a Good Sign, Muscle Confusion, Muscle Damage and Growth, Reps at Percentage of 1RM, REPS \~ %1RM, Repetitions to Failure, RM to 1RM Conversion, Rep Max Load Gauge]
authors: [Currier, Brad S; Mcleod, Jonathan C; Phillips, Stuart M; Roberts, Brandon M; Nuckols, Greg; Krieger, James W; Haugen, Markus E; Varvik, Fredrik T; Larsen, Stian; Haugen, Arvid S; van den Tillaar, Roland; Bjornsen, Thomas; Nuzzo, James L; Pinto, Matheus Daros; Nosaka, Kazunori; Steele, James]
sources: [Currier - Resistance Training Prescription NMA 2023, Roberts - Sex Differences Resistance Training Meta-Analysis 2020, Haugen - Free Weight vs Machine Strength Training 2023, Nuzzo - Repetitions at Percentages of 1RM 2023]
cluster: muscle
confidence: low
relationships:
  related_to:
    - Protein and Resistance Training for Muscle and Strength
    - Muscle-Strengthening Activity and Mortality
    - Surrogate Outcomes
    - Physical Activity Dose and Mortality
    - Grip Strength and Mortality
    - Low Muscle Mass and Mortality
    - Sarcopenia Definition and Diagnosis
    - Blood Flow Restriction Training
    - Detraining and Residual Effects in Older Adults
    - Supervised vs Unsupervised Exercise
created: 2026-08-06
updated: 2026-10-06
self_critiqued: 2026-10-06
---

**Peripheral scope** (exercise-programming) — admitted on the same evidence bar as any exposure, kept
low in the ranking because *attention is an anti-signal* and this is a heavily-discussed, mostly
small-between-option domain. It earns a page only because the evidence is **gold** (a Bayesian network
meta-analysis, 178 strength / 119 hypertrophy RCTs) and it settles one genuinely decision-relevant
thing: **the *resistance-training dose* is not one dial — strength and hypertrophy are driven by
different variables, and the gap between any-RT and no-RT dwarfs the gap between prescriptions.**

**Evidence-tier note (`confidence: low`).** Single gold NMA (Currier 2023). The *surrogates* (1RM
strength, muscle size) are RCT-grade; the *health-outcome* transmission is not established by this source
(see the surrogate boundary below), and the primary trials are unblindable (moderate–high risk of bias).
Held `low` on total web support pending an independent line — and Currier is **not** independent of the
staged ACSM 2026 stand or of Morton's protein RCT-MA (shared Phillips/McMaster team), so a second
same-lineage source would not raise it. [inferred from @currier2023]


[@currier2023]
<div class="recent-update" data-last-updated="2026-10-06">

## The big rock: any prescription beats none — the between-prescription differences are second-order

Currier compared 12 prescriptions (load H ≥80% 1RM / L <80%; sets M multiset / S single; frequency
≥3 / 2 / 1 per week) against non-exercise control (CTRL). **Every estimated node had a positive point
estimate vs CTRL** — all 12 for strength (SMD 0.75–1.60 vs CTRL) and the 10 with hypertrophy data (SMD
0.10–0.66; HS1/LS1 are N.D., *no data*, for hypertrophy in Table 2); the 95% CrI excluded zero for all but the
sparse nodes HS1/LS1 (strength) and HM1/HS2/HS3 (hypertrophy) — see the minimal-dose section. But once you are training, the choice of prescription
barely separates: «The 95% CrI contained zero for a striking 91% (101/111) of all between-­RTx
comparisons.» So the decision that carries the effect is **train vs not-train**, not which protocol —
which is why Currier's own conclusion is that «adults should engage in RT, even if they cannot meet
existing recommendations», not that they hit an optimal scheme. This is the Layer-1 ranking made
concrete: the first dollar (start RT) buys almost everything; optimizing the prescription is the long
tail.


[@currier2023]

</div>

## The decomposition (the value): strength is load-driven, hypertrophy is volume-driven

The one place prescription *does* matter splits by outcome — and the two do not track together, so
the *resistance-training dose* is a **terminological conflation** of two different curves:

| Outcome (surrogate) | What drives it | Top-ranked RTx | Effect vs CTRL (SMD, 95% CrI) | Between-RTx separation |
|---|---|---|---|---|
| **Strength** (1RM) | **load** (≥80% 1RM), multiset | HM3 (heavy, multiset, ≥3×/wk) | «1.60 (1.38 to 1.82)» | 9 of 10 non-zero comparisons were HM2/HM3 vs a lower-load RTx |
| **Hypertrophy** (muscle size) | **volume** (sets), load \~irrelevant | HM2 (heavy, multiset, 2×/wk) | «0.66 (0.47 to 0.85)» | only 1 of 45 comparisons excluded zero |

- **Strength:** «higher-­load, multiset programmes caused the largest strength gains» — the only variable
  that reliably separated prescriptions. Robust under sensitivity analysis and threshold analysis
  (HM3->HM2 the only revision).
- **Hypertrophy:** «All RT prescriptions may comparably promote muscle hypertrophy, and the influence of
  load was less apparent» — sets/volume, not load, rank the top prescriptions. Training **to failure did
  not explain** the hypertrophic response in these (mostly untrained) participants (network
  meta-regression for 'failure' didn't improve fit); Currier flags failure «may... be increasingly
  important for trained individuals».

**Why this is a real distinction, not a fake tension** (parameter-table check): the two SMD columns are
**different outcomes measured on different instruments** (1RM force vs cross-sectional area / lean mass),
so *load matters for one and not the other* is not a contradiction to reconcile — it is two curves.
Filing it as a tension would compare non-commensurable quantities.

### Myth correction — soreness (DOMS) does not track growth, and neither does "muscle confusion" `[2026-09-25, belief-harvest WS-026]`

*"No pain, no gain"* — the belief that delayed-onset muscle soreness (DOMS) marks an effective session —
runs against the decomposition above. **Hypertrophy is volume-driven, not damage-driven:** Currier found
training *to failure did not explain* the hypertrophic response in these (mostly untrained) participants,
and load was largely irrelevant to muscle size (§decomposition) — so the muscle damage that produces
soreness is not the growth signal. DOMS is a muscle-damage / unfamiliarity signal that **attenuates as
the muscle adapts to a movement** (the repeated-bout effect) — so soreness fades with training precisely
while gains continue, and its absence is not evidence of a wasted session. Relatedly, *"muscle confusion"* — constantly varying exercises to
keep muscles *guessing* — has no separate lever here: the drivers that separated prescriptions were load
(strength) and volume (size), not novelty; variety earns its place through adherence and joint-health,
not a distinct growth mechanism. Chase **volume** for size and **load** for strength; do not use soreness
or novelty as the dose signal.



[@currier2023]
<div class="recent-update" data-last-updated="2026-10-06">

## Minimal effective dose — a floor, not a located knee

- «There was a 95% probability that RT with at least two sets or two sessions per week increased
  strength ... and training with at least two sets and two sessions per week resulted in hypertrophy.»
- Lower-CrI floor across prescriptions: «at least a moderate (SMD>0.47)» strength and «small (SMD>0.16)»
  mass increase — **but not for every prescription**, as the next sentence says: «Such certainty is not
  possible for all prescriptions, though, because the 95% CrI crossed zero for two RTx for strength (HS1
  and LS1) and three RTx for hypertrophy (HM1, HS2 and HS3), meaning these prescriptions might increase,
  not change or decrease muscle strength and size.» Currier attributes this to sparse nodes rather than
  ineffectiveness: «These strength (HS1 and LS1) and hypertrophy (HM1, HS2 and HS3) nodes included <60
  participants and contrib- uted little direct evidence (figure 2).» So the floor holds for the
  well-populated prescriptions; for once-weekly single-set (HS1/LS1) and a few hypertrophy nodes the
  network estimate is too imprecise to show it (within-study, strength rose vs control/baseline in those
  trials).
  (corrected 2026-10-06: universal lower-CrI floor -> floor excludes the five zero-crossing nodes;
  Currier chunk 02)
  [@currier2023]

**The curve's shape is under-determined here, and that is a G-gap, not a plateau.** Currier coded load /
sets / frequency **categorically** (H/L, M/S, 1/2/3), not continuously, so a true knee *within* load or
volume cannot be located from this analysis — Currier says so and calls for continuous, model-based
dose-response NMA. So the honest reading is: a **large step from zero**, then a **broad flat region
across prescriptions** (hypertrophy) or a **modest load-gradient** (strength) — with the minimum
effective dose a *region* (\~2 sets, \~2×/week) rather than a point. [inferred from @currier2023] — the categorical-coding
limit and its *shape-under-determined* consequence are Currier's stated limitation read against the
wiki's dose-response vocabulary (a threshold quoted from categorical data marks the edge of the
evidence, not a feature of the curve). This is another instance of [[The Underivable Optimum]] — a broad
flat region (its Route 1) plus categorical/measurement under-determination (its Route 3), the same
under-identification the protein \~1.62 g/kg knee carries: **hold the RT dose numbers loosely too**, and
read the \~2 sets / \~2x per week as a floor, not an optimum.

**Once-weekly training — what the frequency arm does and does not show** (the popular belief *once-weekly
RT matches twice-weekly for strength, esp. in older adults*). Currier's strength summary is a disjunction
— «at least two sets or two sessions per week» — so **once-weekly multiset** training is inside it, while
the hypertrophy summary is a conjunction («at least two sets and two sessions»). In the network,
once-weekly multiset strength beat control with CrIs excluding zero (HM1 1.54, 0.81 to 2.30; LM1 1.07,
0.47 to 1.67 — Table 2); once-weekly *single-set* (HS1, LS1) crossed zero on sparse nodes. Between
prescriptions, the only strength comparisons that separated (9/66) were HM2/HM3 versus a lower-load RTx —
none is a once-vs-twice-weekly contrast at matched load and sets — so the network detects no frequency
difference, on imprecise estimates: not a demonstrated equivalence.
[@currier2023]
Neither summary is a necessity claim (it says what was shown to work, not that less fails) and neither
speaks to function or quality of life; and the older-adult once-weekly case is not separately estimated
here (age showed no modifying effect in meta-regression, on sparse data). Remaining G-gap: an older-adult
once-weekly-vs-twice-weekly strength/function head-to-head SR is not held.
(corrected 2026-10-06: *once-weekly is not covered by the held estimate and is arguably run against by
it* -> once-weekly multiset is covered for strength; once-weekly single-set is imprecise; Currier chunk 02)
[inferred from @currier2023]


[@currier2023]

**The retention corollary — the floor holds through a layoff.** The MED above is an *acquisition* floor;
there is also a *retention* side. In older adults, functional-capacity gains from a completed resistance
or multicomponent program persist at a medium effect over never-trained controls through a 1-2 month
training cessation (ES = 0.88 [0.47-1.29]), and the residual does not depend on modality or intensity —
but its decay time-course and any *reduced maintenance dose* are unestimated. So a forced break does not
reset the prescription clock; see [[Detraining and Residual Effects in Older Adults]] for the retention
half of the dose question and the maintenance-floor gap. [inferred from @buendiaromero2025]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Effect modifiers — mostly absent (route-b is quiet here)

Network meta-regression found **no** obvious modifying effect on relative RTx effects from age, training
status, proportion female, duration, volitional fatigue, relative weekly volume load, measurement tool /
region, or publication year — data-sparse nodes reduced precision. So there is little positive evidence
that the *relative* ranking of prescriptions changes by stratum: personalization of the *protocol* rests
on preference and constraint (Route e), not on demonstrated effect modification (Route b). Baseline
(untrained) status still governs **absolute** gain — the big step is largest for the untrained.
[@currier2023]


[@nuzzo2023reps]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## The load gauge — how many reps sit at a given %1RM (operationalizing the 80% cut)

The strength finding above is stated in %1RM, but almost nobody outside a lab knows their 1RM; the
field proxy is the rep count. Nuzzo meta-regressed **952 repetitions-to-failure tests (7289 people,
452 groups, 269 studies, 1961-2023)**, admitting only studies where «the 1RM was tested rather than
estimated» and the reps test was done fresh, and modelled both the **mean** reps and the
**between-person SD** of reps at each %1RM (natural cubic spline on log means; linear on log SDs).
Analysed set: 425 groups, 898 tests, 6970 people, traditional concentric-eccentric reps only.
[@nuzzo2023reps]

**Main-model table, mean reps to failure [95% CI] and between-person SD [95% CI]** — fitted to all
groups (bench press 42% and leg press 14% of groups); the authors recommend it for exercises other than
those two, while noting «minimal data» for commonly prescribed lifts such as overhead press and
pulldown. Values from the Fig. 2 table (p. 308):

| %1RM | Mean reps [95% CI] | Between-person SD [95% CI] |
|---|---|---|
| 90 | 4.94 [4.35-5.61] | 1.90 [1.69-2.14] |
| 85 | 7.15 [6.69-7.65] | 2.19 [1.97-2.42] |
| 80 | 9.75 [9.32-10.20] | 2.51 [2.29-2.75] |
| 75 | 12.37 [11.87-12.88] | 2.88 [2.65-3.13] |
| 70 | 14.80 [14.23-15.40] | 3.31 [3.06-3.58] |
| 65 | 17.11 [16.36-17.90] | 3.80 [3.51-4.12] |
| 60 | 19.53 [18.52-20.59] | 4.37 [4.01-4.76] |

[@nuzzo2023reps] Tabulated range 15-95%
1RM, the range of the data; precision is tight from the heavy end down to 65%: «The precision of
estimates for both means and SDs are tight up to 65% 1RM range to \~ 1 repeti- tion.» Below that,
data thin and intervals widen. [@nuzzo2023reps]

- **The between-person spread is the new information, and it grows as the load falls.** «For example,
  at 80% 1RM, the estimate for the SD about the point estimate is 2.51 repetitions, whereas at 60% 1RM
  the estimate is 4.36 repetitions.» The authors do not claim the SD is all true person-to-person
  difference — «Thus, although large SDs could be due to between-individual heterogeneity in
  repetitions completed, a mathematical phenomenon, or heteroskedas- tic measurement errors, this
  information is still practically useful because it illustrates the amount of variance that can be
  expected.» [@nuzzo2023reps]
- **Exercise is the one moderator that clearly shows up — leg press vs bench press.** «For example, at
  80% and 70% 1RM, the estimated number of repetitions in the leg press were 13.1 [95% CI 9.8–17.5] and
  19.0 [95% CI 14.2–25.5], respectively, whereas for the bench» press the figures were 8.8 [95% CI
  7.7–10.1] and 14.1 [95% CI 12.4–16.1]; separate tables are given for those two lifts, the main table
  for everything else. The source states the resolved contrast as a load range — fewer mean bench reps
  «up to \~ 50% 1RM» (and lower bench SDs up to \~35%) — without saying from which end that range runs;
  at 80% the two exercises' 95% CIs overlap (bench 8.82 [7.72-10.08], leg press 13.05 [9.78-17.41],
  Figs 3-4 tables).
  [@nuzzo2023reps]
- **Sex, age and training status: no resolved moderation (a null on imprecise contrasts, not a
  demonstrated equivalence).** «The impact of most of the moderators was uncertain based on the
  precision of estimates for the contrasts.» Almost all contrast-ratio intervals included 1, and the
  authors conclude «Analysis of moderators suggested little influences of sex, age, or training status
  on the REPS \~ %1RM relationship, thus the general main model REPS \~ %1RM table can be applied to all
  individuals and to all exercises other than the bench press and leg press.»
  [@nuzzo2023reps]
- **Who the table describes.** Groups were 66% male, 97% healthy, 92% under 59 (median group age 23),
  60% resistance-trained; «Most data from the REPS \~ %1RM relationship have been collected on healthy
  individuals who are aged 20–40 years.» Rep duration (1.4-6.0 s, reported by 46% of studies) tended to
  lower reps when slower, but almost all contrast intervals included 1. Eccentric-only testing was \~1% of
  the data, so no eccentric table exists. [@nuzzo2023reps]
- **Design caveats, stated by the authors.** «Our search strategy did not follow standard guidelines for
  meta-analy- ses.» (a mixed personal-knowledge + keyword + snowball search; data and code are public on
  OSF). Conflict of interest: «Pinto were pre- viously employed at Vitruvian, a company that designs and
  sells re- sistance exercise equipment.» (Nuzzo and Pinto). [@nuzzo2023reps]
- **Not addressed: safety or feasibility of 1RM testing in untrained people.** The paper is a
  descriptive load-reps model; it reports no injury or adverse-event data for 1RM or reps-to-failure
  testing [searched: safe/risk/novice/familiar = 0 across chunks 01-02; injur = 1 hit, a reference
  title only]. The rep gauge replaces a 1RM test with a reps-to-failure test — still a maximal-effort
  set — so it relocates the safety question for an untrained adult rather than answering it. [inferred from @nuzzo2023reps]

**Parameter table — the coding rule vs the measured relationship.** Currier's NMA converted rep maxima
to %1RM by %1RM = 100 − 2.5 × RM (quoted under *Limits*); the textbook table Nuzzo set out to update
also puts 8 reps at 80% (its Table 1: 90% = 4, 80% = 8, 75% = 10, 70% = 11, 65% = 15 reps).

| Parameter | Currier coding rule | Nuzzo main model | Same quantity? |
|---|---|---|---|
| What it maps | a reported RM (reps to failure at a fixed load) -> %1RM | %1RM -> mean reps to failure (tested 1RM) | **Yes, inverted direction** — both are reps-to-failure at a load relative to a measured 1RM; Nuzzo's is a population mean curve, so inverting it gives the load at which the *mean* rep count equals that RM (approximately the average person), not any individual's |
| Reps at 90% | 4 (rule) | 4.94 [4.35-5.61] | yes |
| Reps at 80% | 8 (rule: 8RM = 80%) | 9.75 [9.32-10.20] | yes |
| Reps at 75% | 10 | 12.37 [11.87-12.88] | yes |
| Reps at 70% | 12 | 14.80 [14.23-15.40] | yes |
| Between-person spread | none (a deterministic rule) | SD 2.51 reps at 80%, 3.31 at 70% | rule has no counterpart |
| Exercise-specific? | no | yes — leg press higher, bench lower (separate tables) | — |

[@currier2023] (the rule)
[@nuzzo2023reps] (the measured values)

**What the comparison shows (the wiki's reading, type-F).** The 2.5%-per-rep rule is **close at the heavy
end and drifts at lighter loads**, always in one direction: at a given %1RM the average person does
*more* reps than the rule says (80%: \~9.75 vs 8; 70%: \~14.8 vs 12), equivalently a given rep max sits at
a *heavier* %1RM than the rule assigns. Interpolating the main-model table, an 8-rep max sits near \~83%
1RM, a 10-rep max near \~80%, 12 reps near \~76% and 15 reps near \~70% (rule: 80 / 75 / 70 / 62.5%).
So for the strength cut the rule is **conservative**: a person who trains at their 8RM is on average a
few points *above* 80%, not at it. But the between-person SD (\~2.5 reps at 80%, roughly \~5 %1RM points
given the local slope of \~0.5 rep per %1RM) means a rep count places the *average* person, not this
person: for roughly two-thirds of people (if the SD is mostly true between-person spread rather than
measurement error), an 8RM lies between the high-70s and high-80s %1RM. On point estimates the leg press
runs higher — its 80% load averages \~13 reps, putting an 8-rep leg-press max near \~90% 1RM — but its
interval at 80% spans \~10-17 reps (and 90% leg press = 8.69 [3.71-20.39]), so a leg-press 8RM could sit
anywhere from \~80% to >90%.
[inferred from @nuzzo2023reps; @currier2023]

- **Does the drift bias Currier's own result? Direction, not size.** For the average person the rule
  codes an RM load a few points too *light*, so misclassification runs one way — an arm truly at or just
  above 80% (a 9-10RM) coded L, never a truly light arm coded H. That dilutes the H-L contrast toward the
  null: if anything Currier's load effect is understated. How many arms sat near the boundary is not
  reported in the held chunks. [inferred from @currier2023; @nuzzo2023reps]


[@haugen2023freeweight]

</div>

## Equipment modality (free-weights vs machines): specific for the test, equivalent for the outcome

The other much-debated RT dial — barbell/dumbbell vs pin-loaded machine — resolves the same way the
prescription dials do: it is second-order once you are training. Haugen pooled 13 studies that
*directly* compared the two modalities (n=1016, adults 18-60, free of chronic disease, >=6 weeks;
non-athletes; TESTEX quality fair-to-good, none excellent). This is an **independent line** (a Norwegian
group, no lineage overlap with Currier/McMaster) on a different sub-question, so it extends the
big-rock finding from *protocol* to *equipment*.

**The apparent modality advantage is test-specific, not a real difference in adaptation.** Trained with
free-weights, you gain more *free-weight-tested* strength (SMD -0.210, 95% CI -0.391 to -0.029, p=0.023);
trained on machines, you tend to gain more *machine-tested* strength (SMD 0.291, 95% CI -0.017 to 0.600,
p=0.064). Haugen reads this as the specificity (SAID) principle: «The principle of specificity applies,
which states that you should choose the exercise you want to be stronger in.» You get better at the
movement you actually train — a testing artifact of the transfer, not a superior modality.
[@haugen2023freeweight]

**On the outcome itself, no modality difference survives.** Comparing each group in the mode it trained,
or on a neutral test, the between-modality effect is null for dynamic strength (SMD 0.084, 95% CI -0.106
to 0.273, p=0.387), isometric/neutral strength (SMD -0.079, 95% CI -0.432 to 0.273, p=0.660),
countermovement jump (SMD -0.209, 95% CI -0.597 to 0.179, p=0.290), and hypertrophy (SMD -0.055, 95% CI
-0.397 to 0.287, p=0.751). Both modalities produced large within-group gains (strength SMD \~0.92 vs
\~0.97; hypertrophy \~0.25 vs \~0.21). Haugen's conclusion: «strength changes are specific to the training
modality, and the choice between free-weights and machines are down to individual preferences and
goals.» [@haugen2023freeweight]

- **One partial exception (small n):** a direct-strength sub-analysis favored machines for *upper-body*
  strength, with no difference lower-body — the hypertrophy arm rests on only 5-6 studies, so read this
  as an unsettled wrinkle, not a machine advantage. For hypertrophy Haugen defers to preference: «When
  the goal is to maximise muscle hypertrophy individual preferences should dictate the choice, but we
  speculate that a combination could yield the best benefit» (regional muscle growth may differ by
  modality even when total growth matches). [@haugen2023freeweight]
- **Injury risk does not break the tie either.** «Summed up, it is uncertain if there are different
  injury risks between free-weight and machine-based strength training.» The higher free-weight injury
  counts are mostly weights dropped on people (cross-sectional ED data), not a movement-execution
  hazard, and no longitudinal trial establishes causation; ACSM's view that «machines may be safer to
  use than free-weights based on skill requirements» is a skill-requirement argument, not an outcome
  finding.
  [@haugen2023freeweight]

**Decision:** choose equipment on preference, goal-specificity, and access — not on an expected
strength or hypertrophy advantage, because none exists on the outcome. The one place specificity
*does* bind is Route-e (constraint), not Route-b (effect modification): a competitor tested in a named
lift (powerlifter, weightlifter) must train that lift; a recreational trainee optimizing size or
general strength is free to pick either or mix. The surrogate boundary below applies unchanged — these
are 1RM / muscle-size / jump gains, not a health outcome.

**The big-rock pattern, now across two dials [inferred from @currier2023; @haugen2023freeweight].** Currier found 91% of
between-*prescription* comparisons contained zero; Haugen finds the between-*equipment* comparison null
on the outcome. These are two different sub-questions — protocol and equipment — and the same Layer-1
pattern holds across both: **once someone is training, the sub-choices — protocol and equipment alike —
are second-order to the train-vs-not-train decision.** This *generalizes* the ranking beyond
load/sets/frequency; it is not two studies corroborating one finding (they measure different quantities,
so it is not a type-E robustness claim), and it does not raise the page's confidence (Haugen's own
evidence base is thin and «tentative», and the health outcome is untouched).

**G-gap — bodyweight / calisthenics is unevidenced head-to-head.** Haugen restricted the comparison to
free-weights (barbell/dumbbell) vs *fixed-path* machines, and explicitly excluded cable, freemotion,
pneumatic, and variable-resistance equipment. No gold SR/MA directly comparing **bodyweight /
calisthenics training against loaded RT** for strength or hypertrophy is held — a named zero from the
research pass (verified absent at acquisition), not a settled equivalence. A gold head-to-head SR would
close it; until one lands, hold any bodyweight-vs-loaded claim at `confidence: low`.
[inferred from @haugen2023freeweight]


## Sex is not a meaningful effect modifier — one prescription for both (route-b null)

The most-asked stratification of RT — *should women train differently?* — has a **direct**
answer, and it is a well-bounded **null on relative gains**. Roberts pooled male-vs-female RELATIVE
adaptation to the SAME protocol across 50 studies (ages 18-50, >=5 weeks; supplements/HRT excluded),
splitting by outcome. The effect size is **male-group ES minus female-group ES**, so a negative value
favors females; every ES is a within-group, baseline-normalized (relative) change, NOT absolute kg/cm:

| Outcome (relative gain) | k (outcomes / studies) | Pooled ES (male-minus-female) | 95% CI | I2 | Verdict |
|---|---|---|---|---|---|
| Hypertrophy | 12 / 10 | 0.07 | -0.09 to 0.23 | 0 | **No sex difference** (tight null) |
| Upper-body strength | 19 / 17 | -0.60 | -0.93 to -0.26 | 72.1 | **Favors females** (moderate) |
| Lower-body strength | 23 / 23 | -0.21 | -0.54 to 0.12 | 74.7 | **No sex difference** |
[@roberts2020sex]

- Headline: «males and females adapted to RT with similar effect sizes for hypertrophy and lower-body
  strength, but females had a larger effect size for relative upper-body strength.»
  [@roberts2020sex] The one
  non-null runs **toward women**, not away — so nothing here motivates a *lighter/different* female
  prescription; if anything untrained women gain upper-body strength at least as fast relative to
  baseline.
- **The absolute-vs-relative trap, named by the source:** «Although it is true that absolute
  hypertrophy and gains in strength are larger in males after RT, it seems that relative increases in
  both muscularity and lower-body strength are similar between the sexes, and relative gains in
  upper-body strength may be larger in females.»
  [@roberts2020sex] Men gain
  more **absolute** size/strength (higher baseline mass, more upper-body androgen receptors); the
  **relative response curve is the same**. Reading the absolute gap as a different *response* is the
  error — it is a different *starting point* (a Route-a baseline fact, not a Route-b effect
  modification).
- **The upper-body female signal is plausibly an artifact, not biology** — the authors flag it: high
  heterogeneity (I2 \~72%) unreduced by covariates, mostly untrained short trials, and «This could cause
  a ceiling effect for motor skills that may explain differences in upper-body strength because the
  studies were conducted in mostly untrained subjects.»
  [@roberts2020sex] Men are
  often more familiar with upper-body movements (e.g. bench press), leaving women more short-run
  motor-learning headroom. So even the one non-null may not survive longer training or trained
  populations — it does not upgrade to a prescription difference.
- ***Lifting makes women bulky* — refuted on BOTH axes.** Relative hypertrophy is *equal*, not greater,
  in women (ES 0.07; CI -0.09 to 0.23; I2 = 0 — an unusually clean null), and **absolute** muscle gain
  is *smaller* in women. The same training does not build more muscle on a woman than on a man; the
  testosterone gap that was once invoked to predict blunted female hypertrophy did not produce it.
  [@roberts2020sex]

**Convergence with Currier's covariate null — but a different parameter.** Currier's prescription NMA
found «no» modifying effect of *proportion female* on the relative ranking of PRESCRIPTIONS (a
meta-regression covariate); Roberts is a **direct male-vs-female contrast of the response itself**.
These are different quantities (a between-RTx-ranking covariate vs a pooled within-protocol
sex-difference ES), so this is two independent designs/teams converging on the same *question* — sex
is not a route-(b) modifier here — not the same measurement re-pooled.
[inferred from @roberts2020sex; @currier2023]

**Decision:** prescribe RT the same for both sexes (load for strength, volume for size — as above).
Any sex-tailoring rests on preference/constraint (Route e) or absolute-baseline scaling (Route a),
NOT on demonstrated effect modification. The source is explicit that the direct trials do not settle a
prescription difference either way: «it is currently difficult to know if exercise prescription should
be different between sexes.» [@roberts2020sex]
The surrogate boundary below applies unchanged — these are 1RM/size gains, not a health outcome.

**Limits (Roberts):** mostly untrained subjects, short trials, high strength heterogeneity unexplained
by measured covariates, and **no formal risk-of-bias scoring** (the primary trials cannot blind
exercise, so the authors judged standard quality scales unusable) — a `high`-tier MA resting on
unblindable primaries, same design ceiling as Currier.
[@roberts2020sex]


## The surrogate → outcome boundary — the load-bearing honesty

Strength and muscle size are **surrogates** ([[Surrogate Outcomes]]), and Currier is unusually explicit
that the health-outcome link is not in this analysis: «We do not know how these RTx affect relevant
health outcomes» and «The effects on health outcomes of various RTx remain largely unknown.»
[@currier2023] The transmission differs by
surrogate, and the ranking of surrogates matters more than the ranking of prescriptions:

- **Strength → moderate transmission.** Strength (esp. grip) and muscle-strengthening *activity* track
  lower mortality observationally -> [[Grip Strength and Mortality]], [[Muscle-Strengthening Activity and Mortality]]
  (any MSA vs none: all-cause mortality RR 0.85; MSA + aerobic RR 0.60). But that is *activity/strength
  predicting death*, not *this NMA's 1RM gains reducing death* — no RCT closes it.
- **Strength → injury reduction is the one patient-important outcome established at CAUSAL (RCT-MA)
  grade** — see [[Exercise Interventions and Sports Injury Prevention]] (Lauersen: strength-training
  RR **0.315**, injuries cut to <1/3; the standout intervention, stretching null). This is the closest
  the resistance-training case gets to a hard endpoint on interventional rather than observational
  evidence. **Exposure-identity caveat:** Lauersen's strength arms are *eccentric / sport-specific
  injury-prevention* protocols in young athletes, NOT the hypertrophy-oriented general RT this page
  prescribes — so the transfer to a recreational/older gym trainer is a transportability gap, not a
  settled property of "RT". [inferred from @lauersen2013injury]
- **The tissue layer this page is silent on — tendon, which adapts on its OWN schedule.** This page's
  prescriptions target *muscle*; [[Tendon Adaptation to Mechanical Loading]] shows the connective-tissue
  parallel and a divergence. Parallel: load **magnitude** is the driver of tendon stiffening too, and
  contraction *type* is irrelevant — the same *load is the lever* logic. Divergence: **tendon adapts
  slower than muscle**, so a dose that builds muscle fast can outrun tendon conditioning — the rate
  mismatch that motivates gradual load progression, mattering most for the deconditioned/obese novice
  this page's dose might otherwise overload. Tendon outcomes there are surrogates, not injury.
 (the wiki's cross-page synthesis; the tendon figures and their source are on the linked page)
- **Hypertrophy → weakest transmission.** Low muscle *mass* predicts mortality
  ([[Low Muscle Mass and Mortality]]), but that raising size via training lowers mortality is unproven —
  hypertrophy is largely a surrogate for a surrogate. **Do not read the 0.66 hypertrophy SMD as a health
  effect.** [inferred from @currier2023]
- **The closest-to-patient-important signal here is physical function in older adults:** LM2/LM3/HM3
  improved mobility and gait speed, HM3 improved balance (few studies, ≥55y) — function is on the outcome
  menu directly, but the evidence is thin. [@currier2023]
- **Why the older-adult stratum needs this dose at all — the mechanism is [[Anabolic Resistance]].** Aging
  blunts the muscle-protein-synthesis response to a given protein dose; resistance training is the
  **non-nutritional lever that partially restores that sensitivity**, so the training stimulus and the
  higher per-meal protein target ([[Protein Intake for Older Adults]]: \~1.2 g/kg/day for the active
  older adult vs \~1.0 sedentary) are **complementary, not substitutes** — RT raises protein needs, and
  protein is what the restored response acts on.

<div class="recent-update" data-last-updated="2026-10-06">

## Decision relevance

- **The big rock is doing any resistance training at all.** Prescription choice is a second-order refinement
  — 91% of between-protocol comparisons were indistinguishable. Someone not currently training should not
  wait for the *right* scheme.
- **If the goal is strength:** bias toward **heavier loads (>80% 1RM), multiple sets**, \~2–3×/week. Load is
  the one variable that reliably buys more. Without a 1RM test, a load you can lift to failure no more
  than \~8-9 times sits at or above \~80% for the average person on most exercises studied (Nuzzo's table;
  fewer on the bench, more on the leg press) — counted on a fresh first set (later sets fatigue), from
  data on mostly healthy 20-40-year-olds; a population gauge with a \~2.5-rep between-person SD, not a
  personal conversion.
- **If the goal is size/hypertrophy:** chase **volume (sets)**; load is flexible — lighter loads work if the
  sets are there, and training to failure is not required (untrained). Pairs with the protein lever
  (\~1.6 g/kg/day) on [[Protein and Resistance Training for Muscle and Strength]] — the *other* input to the
  same adaptation.
- **Minimal effective dose:** roughly **2 sets, 2×/week** captures most of the available strength and size
  gain; more is a modestly steeper strength curve, not a different category.
- **Equipment is a preference choice, not a lever.** Free-weights and machines produce equivalent
  strength and hypertrophy on the outcome (Haugen: all direct-comparison CIs span zero); pick by
  preference, access, and goal-specificity. Specificity binds only for a competitor tested in a named
  lift — train that lift — not for general strength or size.
- **Adherence and preference win the ties.** With prescriptions near-equivalent, the sustainable protocol
  beats the theoretically-optimal-but-abandoned one — Currier frames the whole result as licensing choice.
- **Do not oversell the endpoint.** These are surrogate gains; the mortality/function payoff is inferred
  from separate observational lines, strongest for strength, weakest for pure hypertrophy.

[inferred from @currier2023]

</div>

<div class="recent-update" data-last-updated="2026-10-06">

## Limits

- **Surrogates only** — 1RM and muscle size; no mortality/disease endpoint (Currier states this outright).
- **"≥80% 1RM" is the trials' label; reps are the field proxy, by a coding rule only.** Currier's
  eligible strength outcomes include a direct 1RM test, and loads that trials reported as rep maxima were
  converted: «RT loads reported as repetition maximum (RM) were converted to a percentage of one-repetition
  maximum (%1RM) with the equation: %1RM=100−(RM(2.5)).»
  [@currier2023]. On that rule an 8-rep maximum
  sits at 80%, the heavy/light cut, and 12-15 reps at about 70-62%. So a person with no measured 1RM can
  aim at the cut by rep count. The equation is an analyst's coding convention taken from an unheld
  reference, not a validated conversion. Measured against Nuzzo's meta-regression of
  reps-to-failure at tested %1RM (see *The load gauge* above), the rule is close at the heavy end and
  under-counts reps at lighter loads, so an 8RM sits on average near \~83% (conservative for the cut); the
  between-person SD (\~2.5 reps at 80%) and the leg-press/bench difference mean a rep count places the
  average person, not the individual. Sex, age and training status were not resolved as moderators
  (imprecise contrasts), and the data are mostly healthy 20-40-year-olds. Still open: whether a maximal
  test is safe or unsafe for an untrained adult — Nuzzo does not address it, so the fabric holds no data
  either way. [inferred from @nuzzo2023reps; @currier2023]
- **Categorical coding** (H/L, M/S, 1/2/3) — cannot locate a continuous knee; periodized programmes, rest
  intervals, tempo, time-under-tension excluded/under-reported.
- **Unblindable primary trials** — moderate–high risk of bias (strength 22% high; hypertrophy 18% high);
  gold *design*, but the underlying RCTs cannot double-blind exercise.
- **Healthy adults only** — athletes, comorbidities, frail excluded; older-adult function data sparse. For
  the person who **cannot load heavy** (older, comorbid joints/bones, rehab), this dial does not apply; the
  route-(c)/(e) workaround is [[Blood Flow Restriction Training]], which reaches heavy-load-comparable
  *hypertrophy* at light load (though below-heavy-load *strength*) — and lands the same load-dependence
  shape from an independent team, corroborating the strength-is-load-driven / hypertrophy-is-not
  decomposition above.
- **Single source, shared lineage** — not independent of ACSM 2026 or Morton 2018 (Phillips/McMaster);
  `confidence: low` until an independent line lands.
- **Equipment facet is thin and tentative (Haugen)** — 13 studies, hypertrophy on only 5-6, none rated
  excellent quality, and the authors call the evidence «tentative»; unblindable primaries, same design
  ceiling. Its team is disjoint from Currier's but its evidence base is shallow, so it broadens the
  big-rock principle without upgrading the page's confidence.


[inferred from @currier2023]

</div>

## References

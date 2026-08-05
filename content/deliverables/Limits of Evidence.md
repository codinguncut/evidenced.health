---
type: deliverable
title: The Limits of Evidence
icon: mdi:university-outline
question: In nutrition and lifestyle, what CAN and what CANNOT be shown by evidence — and given that structural limit, when is a well-founded choice one that must be made ahead of (or without) proof, versus one that should wait for it?
sources: [Willett - Nutritional Epidemiology 3e, SACN - Carbohydrates and Health 2015, Te Morenga - Dietary Sugars and Body Weight 2013, Brown - Cholesterol-Lowering Dietary Fiber Meta-Analysis 1999, WHO - Saturated and Trans Fatty Acid Intake 2023, GRADE - Handbook, USPSTF - Procedure Manual 2022, Heuer - Psychology of Intelligence Analysis, Stockwell - Moderate Drinkers Mortality Risk 2016, Millwood - Alcohol and Vascular Disease Genetic Evidence 2019, Cappuccio - Sleep Duration and Mortality 2010, NASEM - Reproducibility and Replicability in Science 2019, Poole - Coffee Consumption and Health 2017, Cochrane - Handbook for Systematic Reviews 6.5, Morton - Protein Supplementation and Resistance Training 2018]
confidence: high
created: 2026-08-05
updated: 2026-08-05
self_critiqued: 2026-08-05
---

## The short answer

Evidence in nutrition and lifestyle is structurally limited. On a great many questions the studies
that would settle them cannot be run — not for want of funding or effort, but because the field cannot
blind a food, randomize a lifetime, or measure what people eat without large error. So *evidence-based*,
read strictly as *act only on what has been proven*, is too demanding a rule for a domain that cannot
prove most of what is true. The workable posture is **evidence-informed**: weight proof, mechanism, and
practice by how much each can actually carry on the question in front of you.

This is not a licence to abandon evidence for anecdote — the opposite. The discipline is to name, out
loud, a state most people collapse: **silence is not a null.** *We have no good evidence* and *we have
good evidence of no effect* are different claims, and confusing them is the central error in both
directions. Reading silence as a proven null over-claims from absence; reading it as *anything goes*
throws out the standard entirely. — this framing is the wiki's synthesis of the method
pages cited throughout.

Two asymmetries keep the evidence-informed posture safe rather than loose. **Large harms are
detectable**: the measurement noise that plagues this field mostly flattens findings toward zero, so a
strong signal that survives crude methods is usually real. And **cheap, reversible choices can be
adopted on weaker evidence**, because a bounded downside lowers the cost of being wrong. What stays
genuinely unknowable is the *small, slow, individual, whole-pattern-over-decades* middle — and the
honest move there is to say so, rather than to spend precision on it while a big lever stands unpulled
-> [[Layer 1 - Ranking Interventions for a Stratum]].

## Why the evidence is limited — the structural constraints

These are not complaints about sloppy studies. Each is a reason the best possible study in this field
still cannot answer some questions cleanly.

### Measurement error is the binding constraint

Diet is measured by asking people, and the error is enormous. A doubly-labelled-water sub-study found
reported energy intake in adults «on average, 34% lower than total energy expenditure» [@sacn2015]. Worse, the error is not even — underreporting rises
with body fat: measured against doubly-labelled water, energy underreporting ran «zero, 14%, and 20%
... among lean, overweight, and obese men» and «6%, 15%, and 21%» in women [@willett].

The consequence is quantitative. Random error attenuates an association *toward* no-effect: with a
validity coefficient of 0.3, a true relative risk of 2.0 shows up as only 1.23 [@willett, Table 12-3]. So a reported null is weak evidence of no effect — the effect
may be real and simply flattened. Te Morenga attributed a failed dose-response directly to «a
considerable degree of measurement error even when using validated methods» [@te2013].

One asymmetry rescues the situation, and it is the backbone of the whole deliverable: correcting for
this error **cannot manufacture an effect from a null, but can strengthen a real one** — an observed
1.00 corrects to 1.00, an observed 1.50 to 2.38 [@willett, Table 12-2]. *Measurement error explains this null* is often plausible; *measurement error explains
this positive finding* requires a much stronger, more specific allegation -> [[Measurement Error in Dietary Assessment]].

### You cannot blind a food — and blinding it changes it

The randomized controlled trial is the tool that removes confounding, but it barely reaches whole
foods. You cannot blind a person to what they are eating; you cannot randomize a diet for the decades a
chronic-disease endpoint needs; and the moment you *do* blind a food — grind it to a shake, extract it
to a capsule — you have disrupted the matrix, and the matrix is causally active. The blindable form is
a **different exposure** than the food.

The corpus shows this directly. Soluble-fibre *isolates* can be dosed against a placebo, so a
meta-analysis of controlled trials pins their LDL effect precisely: «−0.057 mmol/L» per gram [@brown1999]. Whole-food fibre — tied in
cohorts to roughly 15–30% lower mortality — cannot be blinded or dosed, so it stays observational and
lower-graded. The isolate's better grade is a fact about **trialability, not about which form is better
to eat** (the whole-food figure lives on [[Dietary Fibre and Health]]). This is the
streetlight effect inside the evidence base: the light is brightest where the design is cleanest, not
where the question matters most -> [[Is the Food Category Doing Any Work]].

### Confounding and the healthy-user effect

People who eat *the recommended thing* differ from people who do not in a hundred unmeasured ways —
they smoke less, exercise more, are richer. An observed healthy population is not evidence for any one
of its components; isolating the part requires assumptions that observational data rarely supply. This
is why a consistent, modest association is the field's most common and most treacherous product — and
why the risk-of-bias tools treat every such cohort as an attempt to emulate a trial that was never run
-> [[Risk of Bias Assessment Tools]].

### Surrogates drift from the outcomes that matter

Because real outcomes are slow and rare, studies measure a faster marker instead — LDL for heart
attacks, bone density for fractures. GRADE **restricts** this: a surrogate is for when outcome evidence
is lacking, and using one «requires rating down ... by one, or even two, levels» [@grade, §5.2.3]. WHO's fat guideline is a worked case — it rested a recommendation on LDL, then
weakened it, because LDL «is not a physical manifestation or confirmation of disease» [@who2023saturated, Rationale for TFA recommendation 3].

The trap is real: markers have moved the intended way while patients did worse. But the rule cuts both
ways — a surrogate whose causal transmission to the outcome is itself evidenced (LDL/apoB causing
atherosclerotic disease, established by genetic, Mendelian-randomization and trial evidence together)
is a legitimate target -> [[Surrogate Outcomes]], [[LDL ApoB and Cumulative Exposure]]. Not all markers
are equal; the test is whether the marker→outcome link is shown, not assumed.

### The literature itself is a biased sample

Even where studies exist, the set is skewed. «The publication preference for statistically significant,
positive results produces a biased literature» — a defect of the *body of evidence*, not of any single
study, invisible on a single-paper read [@nasem2019] -> [[Publication Bias and Selective Reporting]]. And most nutrition evidence sits in the
observational design class that the risk-of-bias tools treat as an *attempt to emulate a randomized
trial that can never be run* -> [[Risk of Bias Assessment Tools]].

### The open loop — this project included

One limit binds even a careful synthesis like this wiki: **no operation here grades a claim against a
realized outcome.** The wiki checks internal coherence and fidelity to its sources; it cannot check
truth against the world. A clean, source-grounded appraisal is not a validated recommendation, and this
document will not pretend otherwise.

## What the limits mean — silence is a third state

Here is the crux, and the discipline the rest of the deliverable rests on. Appraisal recognises **four**
evidence states, not two: benefit · harm · **no meaningful effect** · **insufficient evidence**. The
last two are constantly confused, and keeping them apart is the single most valuable habit this
deliverable teaches.

USPSTF makes the distinction procedural. Its grade **D** means «moderate or high certainty that the
service has no net benefit» — a *positive* finding of no-benefit. Its **I** statement means «the current
evidence is insufficient to assess the balance of benefits and harms ... Evidence is lacking, of poor
quality, or conflicting» [@uspstfmanual2022]. What separates them is
certainty: when certainty is low, the body «is unable to assess the magnitude of net benefit», so the
entire low-certainty row collapses to a single I — regardless of which way the point estimate leans
[@uspstfmanual2022]. A null point estimate is not a proven null; you
must be *confident* of the null to claim one -> [[The Insufficient-Evidence Statement]].

The tool for staying honest is the **expectancy test**. Before writing *there is no evidence that X*,
ask: «If this hypothesis is true, can I realistically expect to see evidence of it?» [@heuer, Ch. 8]. If the evidence would exist by now had the effect been
real, absence is informative. If the study was never run — or cannot be run — silence says nothing about
the world, only about our instruments -> [[Unproven vs Disproved (the Expectancy Test)]]. GRADE builds
the same discipline in structurally: an outcome with no evidence still gets a row, because «an empty row
in an evidence profile can be informative in that it identifies research gaps» [@grade, §3.4].

So the honest reading of a well-studied, still-uncertain question differs from the reading of an
unstudied one, even though both come back *insufficient*. Neither licenses inventing an answer. The
discipline is to hold the third state open — and act, where you must, on grounds other than proof,
without pretending the proof exists.

## Practice ahead of proof — the hypertrophy case, both edges

The sharpest test of an evidence-informed posture is whether it can admit that **practice is sometimes
ahead of the literature** without thereby swallowing every fad that makes the same boast.

The legitimate half is real. Coaching lore, iterated by many practitioners over decades, has repeatedly
outrun the formal evidence — which lagged, or leaned on weaker surrogates. Resistance training is the
worked example the corpus holds: the RCT-grade evidence is on *surrogates* (muscle mass and strength),
not on any patient-important outcome, and much of the early mechanistic literature measured **acute
muscle-protein-synthesis spikes** — a marker that a bout of training or a dose of protein moves within
hours — rather than actual muscle gained over months -> [[Surrogate Outcomes]].

When the outcome evidence caught up it both confirmed and bounded the lore: added protein helps, but
modestly (+2.49 kg on a one-rep-max, +0.30 kg of lean mass), and only up to a plateau, since «protein
supplementation beyond total protein intakes of 1.62 g/kg/day resulted in no further RET-induced gains»
[@morton2018]. Practitioners had the
direction long before the meta-analysis; the meta-analysis supplied the size and the ceiling.

But *practitioners have done X for decades* is exactly the argument that also sustains broscience, fad
diets, and unproven supplements. Tradition, popularity, and confident testimony are not evidence — they
are the raw material of both real craft knowledge and rationalization. So the value is not the
permission; it is the **discrimination criteria** that tell the two apart, built from the
wiki's demarcation and mechanism rules:

- **Falsifiable and quantifiable on a real outcome.** A credible practice-claim makes a bet that could
  lose — a specified protocol moving a measurable outcome by roughly this much. *You have to feel it*,
  or a claim no result could contradict, is not in the game at all (the *Esoterik* line).
- **A mechanism, weighted by kind.** A pathway with human corroboration can carry *direction* even
  before a whole-diet trial exists — but weight it by strength: a genetic/Mendelian-randomization
  argument beats a specific human pathway, which beats *we evolved to eat this*, which is barely
  above appeal-to-nature.
- **Survives the self-serving and survivorship check.** Discount a claim that flatters the person
  making money from it, and remember you hear from the lifters who thrived on a method, never from those
  it injured or who quit.
- **Triangulates.** The same conclusion reached by RCT-where-it-exists *and* observational data *and*
  mechanism, weighted rather than ranked by a single design, is far stronger than any one leg.

A rationalization fails these: it is unfalsifiable, leans on nature or tradition in place of a mechanism,
and quietly omits the disconfirming case. Practice is a genuine evidence source — weighted, not a trump,
and not dismissed. The **appeal to nature is symmetric**: *natural / traditional therefore good* is no
more valid than *processed / novel therefore bad* — provenance argues health in neither direction
.

**A named gap, stated plainly.** The wiki holds the *epistemology* of this case, not the hypertrophy
programming specifics. Volume, frequency, and proximity-to-failure dose-response for muscle growth are
staged but not deeply ingested, so this deliverable illustrates the reasoning with hypertrophy and does
**not** assert programming numbers it cannot source -> [[Protein and Resistance Training for Muscle and Strength]].

## How to decide across the line

The field's limits do not leave a decision-maker helpless — they change *how* to decide, not *whether*.

**Act firmly on the big rocks.** The largest levers — not smoking, not being obese, not being sedentary,
not being chronically sleep-deprived — produce effects so large that measurement noise cannot hide them,
and the evidence is correspondingly strong. Most of the achievable benefit sits here, and no attainable
precision about a small lever changes what someone should do while a big one stands unaddressed. Spend
your certainty budget where the decision actually hinges -> [[Layer 1 - Ranking Interventions for a Stratum]].

**For the un-provable middle, triangulate.** Where no single clean study exists — the usual case —
combine RCT-where-it-exists, observational cohorts, Mendelian randomization, dose-response shape, and
mechanism, and weight them rather than ranking by design. Prefer interventions that are **robust across
plausible causal models**: if a choice looks good whether or not a contested assumption holds, the
contested assumption stops mattering.

**Distrust the too-good lower arm.** When observational data shows a U- or J-shape — risk lowest at an
*intermediate* dose — the protective arm is the fragile part, often an artifact of sick people quitting
the exposure. Moderate drinking is the worked case: correcting the referent (never-drinkers, not
ex-drinkers who «carried a 38% increased risk») shrinks the benefit to a non-significant RR 0.90
(0.76–1.06), and a genetic instrument immune to reverse causation shows monotonic harm with no
protective arm [@stockwell2016] [@millwood2019]. The long-sleep mortality arm
(RR 1.30) is the same story — a marker of illness, not a dose to chase [@cappuccio2010]. Require a protective arm to survive a referent-correction or a
genetic check first -> [[The U-Shaped Association Artifact]].

**Scale the evidence bar to reversibility and cost.** This is what makes acting-ahead-of-proof
disciplined rather than reckless. A cheap, reversible, low-downside choice can be adopted on weaker
evidence, because being wrong costs little and is undoable. An expensive, irreversible, or
plausibly-harmful choice demands more — the bar rises with the stakes of the mistake, not with the
volume of discussion.

And know when to upgrade the evidence itself: GRADE lets observational data rate *up* only rarely, for a
large effect (relative risk above 2 or below 0.5), a dose-response gradient, or confounding that runs
the wrong way. Applied to coffee's 218 meta-analyses, that discipline bit: «Large
effect sizes of >2 or <0.5 can permit observational evidence to be upgraded in GRADE», and of dozens of
associations only the two liver outcomes (liver cancer and chronic liver disease) cleared it — while
consistent-but-modest associations like all-cause mortality (RR 0.83) stayed very-low [@poole2017] -> [[Upgrading Observational Evidence]].

**And hold the third state honestly.** Where the answer is *insufficient evidence*, say that — do not
launder it into a null to look decisive, and do not launder it into *anything goes* to feel free. A body
that reports only *works / doesn't work / mixed* will silently sort every unstudied question into *no
effect*; the fix is to keep the empty row visible -> [[The Insufficient-Evidence Statement]].

## What this project can — and cannot — tell you

This wiki, and this deliverable, grade **coherence and fidelity to sources — never validity against the
world.** The loop is open: no operation here scores a claim against a realized health outcome. A clean
audit means the reasoning is internally sound and every quotation is faithful; it does **not** mean the
recommendation has been shown to work.

Two further honesty limits belong in the reader's hands. First, the **guidance null**: for a great many
everyday questions, well-made published guidance — applied to your situation — would give the same
advice, for the same reasons. Where this project adds value it is by calibrating confidence, naming the
stratum where a rule stops applying, or knowing the mechanism well enough to adapt it — not by
manufacturing divergence for its own sake -> [[The Weighting Problem - Why Population Guidance Is Ill-Posed and Individual Advice Is Not]]. Second, agreement with authority is not
validation and disagreement is not insight; both are findings, and each claim about a *limit* above is
itself held to the same evidence standard it demands of everything else.

The finding, then, is not *evidence is unreliable, trust your gut.* It is a **map**: the big levers are
knowable and worth acting on hard; a real middle is structurally unknowable and should be treated as
such — acted on by mechanism, reversibility, and magnitude where a choice must be made, and left openly
uncertain where it need not be. Evidence-based stays the standard. Naming its limits honestly is how you
keep it one.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | In nutrition and lifestyle, what CAN and what CANNOT be shown by evidence — and given that structural limit, when is a well-founded choice one that must be made ahead of (or without) proof, versus one that should wait for it? |
> | **Evidence included** | 15 sources — 4 gold, 6 high |
> | **Overall certainty** | **High** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | All sources are gold or high tier. |
> | **Last updated** | 2026-08-05 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Limits%20of%20Evidence.md) |

## References

---
type: deliverable
title: Blood Lipids and ApoB
icon: material-symbols-light:cardiology
concrete_subject_audited: 2026-09-15
question: 'What is the relationship between apoB-containing lipoproteins and atherosclerotic cardiovascular disease — how settled is it, which number best captures a person''s risk and where do the numbers diverge, how much does moving that number change hard events, does it matter whether diet or a drug does the moving, and for whom is acting warranted?'
sources: [Ference - LDL Cause ASCVD EAS Consensus 2017, CTT - Statin Intensive LDL Lowering Meta-Analysis 2010, Marston - ApoB Containing Lipoproteins Risk 2022, Richardson - ApoB Coronary Mendelian Randomization 2020, Zuber - Multivariable MR ApoB Coronary 2021, Helgadottir - Cholesterol Not Particle Concentration, Li - LDL-Lowering Agents Intracerebral Hemorrhage 2025, Ma - LDL Cholesterol Hemorrhagic Stroke 2019, Emerging Risk Factors Collaboration - Lipoprotein a Vascular Disease 2009, Ramsden - Minnesota Coronary Reanalysis 2016, Ramsden - Sydney Diet Heart 2013, Chiavaroli - Portfolio Dietary Pattern CVD 2018, Bergeron - Red White Nonmeat Protein Atherogenic Lipoproteins 2019, Guasch-Ferre - Red Meat Comparison Diets Cardiovascular Risk Factors Trials 2019, USPSTF - Statin Use Primary Prevention 2022, Nasir - Coronary Artery Calcium Statin Candidates MESA 2015, ACC-AHA - Dyslipidemia Management 2026, ESC-EAS - Dyslipidaemias Focused Update 2025, Reith - Statin Muscle Symptoms 2022, Reith - Statin New-Onset Diabetes 2024, Wood - SAMSON Statin Nocebo 2020, Ridker - Canakinumab Atherosclerotic Disease CANTOS 2017, Livingston - Dementia Prevention 2024, Godos - Egg Consumption Cardiovascular Meta-Analysis 2020]
confidence: high
created: 2026-08-17
updated: 2026-09-15
self_critiqued: 2026-09-15
---

The particle that carries cholesterol into an artery wall, not the cholesterol itself, is what
drives heart disease — and that this is true is about as settled as anything in nutrition and
cardiology gets. The particle is tagged by a protein called **apolipoprotein B (apoB)**: one apoB
molecule rides on every atherogenic particle, so counting apoB counts the particles. Lower the
count and you lower risk, in proportion to how much you lower it and how long you keep it down.
The open questions are narrower than the headlines suggest: **which** number to read off a lab
report, **how much** a given drop buys, and **whether the way you lower it** — food versus a pill —
changes the payoff. This page walks that chain, from the causal model
([[LDL ApoB and Cumulative Exposure]]) to the decision.

## apoB-containing particles cause atherosclerosis, and the evidence is unusually settled

The 2017 European Atherosclerosis Society consensus tested the LDL-heart-disease link against every
major line of evidence at once — rare genetic mutations, prospective cohorts, Mendelian
randomization (using inherited gene variants as a natural randomized experiment), and the
LDL-lowering drug trials. It reached a verdict it stated in one sentence: «Consistent evidence
from numerous and multiple different types of clinical and genetic studies unequivocally
establishes that LDL causes ASCVD.» [@ference2017]
The causal agent is not cholesterol mass but the **apoB-containing particles** that carry it — LDL,
plus VLDL and its remnants, IDL, and Lp(a). [@ference2017]

What makes the verdict strong is **concordance**: the natural genetic experiment and the
intervention trials point the same way. This is the rare case where a blood marker's transmission
to the hard outcome is itself proven — the opposite of the usual surrogate, where a number moves
and patients do not benefit. -> [[LDL ApoB and Cumulative Exposure]], [[Surrogate Outcomes]]

## The dose is cumulative: how low, times how long

Risk tracks the **area under your apoB curve over a lifetime** — level multiplied by years — not
today's snapshot. A modest reduction held for decades can beat a larger one started late. The drug
trials show the per-unit face of this: each additional 1 mmol/L drop multiplies on the last, so
more and longer both pay. -> [[LDL ApoB and Cumulative Exposure]]

The mechanism is agnostic to *how* you lower the particle count, but only under two conditions the
consensus states plainly. The cholesterol drop must reflect a real drop in particle number, and the
method must carry no competing harm on another pathway. [@ference2017]
Those two provisos are not fine print — they are what separates a drug-lowered number from a
diet-lowered one, further down this page.

## Count the particles: apoB beats LDL-C where the two diverge

For most people, standard LDL cholesterol (**LDL-C**) tracks particle count closely and is a fine
number to watch. It fails in one identifiable group: the insulin-resistant, hypertriglyceridemic,
metabolic-syndrome or diabetic person, whose small dense LDL packs more particles into a given
amount of cholesterol. There, **LDL-C under-states the real particle burden**, and apoB — or
**non-HDL-C** (total cholesterol minus HDL, already on every lipid panel) — is the number to trust.
[@ference2017] -> [[LDL ApoB and Cumulative Exposure]]

The direct evidence is large and points three ways to the same answer. In \~430,000 people, entering
the lipids together, only apoB independently predicted heart attack (adjusted HR 1.27 per standard
deviation, 95% CI 1.15-1.40); LDL-C and triglycerides fell to non-significant once apoB was held
fixed. [@marston2022] Multivariable
Mendelian randomization reaches the same place genetically — apoB retained a robust effect (OR 1.92
per SD, 1.31-2.81) while the LDL-C estimate reversed to null. [@richardson2020]
And an agnostic genetic search over 30 lipid measures, from a group with no overlap with the first
two, picked apoB out on its own. [@zuber2021]

Read the convergence with one caution: Richardson's MR lists Ference — author of the causal
consensus above — as a co-author and shares an author with Zuber, so it corroborates that consensus
rather than testing it afresh. Marston's biobank-plus-RCT leg and Zuber's non-overlapping group are
the genuinely independent witnesses — two routes agreeing, not three unrelated ones.

**Read this correctly.** None of it says LDL-C is causally inert — apoB never travels without
cholesterol, which is why lowering LDL-C works. It says apoB is the *necessary* element and the
better number to measure and target where the two come apart. Current US guidance now agrees, adding
an apoB check for exactly this group. -> [[LDL Lowering and Cardiovascular Events]]

### One live disagreement: particle number or cholesterol content?

Marston's finer claim is that particle *number* carries the risk independent of the cholesterol each
particle holds. An independent Mendelian-randomization study (Helgadottir) that separated the two
using discordant gene variants reaches the opposite — that CAD risk tracks the *cholesterol content*
(non-HDL-C), not the particle count, and attributes the apoB signal to confounding of two nearly
interchangeable traits. [@helgadottir2022]
This does **not** touch the settled verdict above — both camps agree apoB and non-HDL-C beat LDL-C
in the discordant group. It contests only which of *those two* to prefer as the secondary target,
and it is genuinely unresolved. The practical reading: non-HDL-C is free on every panel and captures
most of what a separate apoB draw would. -> [[ApoB Particle Number vs Cholesterol Content]]

## Lowering the number with a drug cuts hard events by about a fifth per unit, with no floor

The statin trials settle the magnitude. Pooling 26 trials and 169,138 people, each **1.0 mmol/L**
(about 39 mg/dL) reduction in LDL-C cut major vascular events by \~22% (RR 0.78, 95% CI 0.76-0.80)
and all-cause mortality by 10% (RR 0.90, 0.87-0.93). [@ctt2010]
Two features carry the decision:

- **Mortality moved, not just the marker.** The reduction transmitted all the way to death in
  randomized evidence — and with no excess cancer or non-vascular death even at low LDL, which
  retires the old low-cholesterol-harm worry for the drug-lowered range.
- **No knee, no floor in the studied range.** There was «no evidence of any threshold within the
  cholesterol range studied»; benefit persisted even below 1.8 mmol/L (70 mg/dL).
  [@ctt2010] Successive drops
  multiply — a 2 mmol/L reduction cuts risk by roughly 40% — so lower and longer both keep paying.

The relative effect is constant across baseline-risk groups, which lets you scale it to a person
without any subgroup guesswork. The same \~22% is a small absolute gain for someone at low risk and
a large one for someone at high risk. -> [[LDL Lowering and Cardiovascular Events]]

### The one place low LDL might not be benign

An observational signal points the other way for a single stroke subtype: people who already have
low LDL-C carry somewhat higher **hemorrhagic (bleeding) stroke** risk. But this is an association,
not a lowering experiment, and the authors themselves stop at a biomarker claim, flagging reverse
causation and confounding. [@ma2019ldlstroke] The interventional test settles it for the drug route: pooling 38 trials
(271,411 people) of statins and PCSK9 inhibitors, **lowering LDL with drugs did not significantly
raise brain hemorrhage** in any agent or subgroup. [@li2025ldlich]
So the observational bleeding-stroke arm is most likely not caused by lowering, and it does not
justify withholding treatment from someone whose ischemic and vascular risk dominates. One residual
piece — the lifelong-genetic-exposure question — remains open. -> [[LDL Lowering and Cardiovascular Events]]

## It matters whether diet or a drug does the lowering

Here the two provisos above bite. The \~22%-per-mmol figure is a *drug* result, and a diet-lowered
number does not automatically inherit it.

The cleanest demonstration is a recovered double-blind trial, the Minnesota Coronary Experiment.
Replacing saturated fat with corn oil dropped serum cholesterol by 13.8% versus 1.0% in controls,
yet produced **no mortality benefit** — because a fall in total cholesterol «can represent widely
different biochemical phenomena», and the trial measured neither particle number nor a competing
off-target effect. [@ramsden2016] A companion
trial saw cholesterol fall *further* in the intervention arm yet mortality rise.
[@ramsden2013] Neither refutes apoB causality; both land
inside its provisos — the practical lesson being that a diet-induced cholesterol change is not
interchangeable with a drug-induced apoB change. -> [[LDL ApoB and Cumulative Exposure]]

That said, real dietary levers on apoB exist — they are just modest and route-specific:

- **The Portfolio pattern** (nuts, plant protein, viscous fibre, plant sterols) lowered LDL-C 17%
  and apoB 15% in pooled trials, GRADE high — a magnitude near a starting-dose statin. But no trial
  measured events; the benefit is *borrowed* from the LDL-causality fabric, and it is the diet's
  inventors reporting it. [@chiavaroli2018portfolio] -> [[Portfolio Dietary Pattern and LDL Cholesterol]]
- **Protein source shifts the number more than most food swaps.** In controlled feeding, both red
  and white meat raised LDL-C and apoB relative to plant protein, independent of saturated fat;
  meat *color* did not matter. [@bergeron2019]
  Across 36 trials, the *sign* of red meat's lipid effect flips with what replaces it — worse than
  plant protein, better than fish or refined carbohydrate — so the substitute has to be named for
  the swap to carry a decision. [@guaschferre2019redmeat] -> [[Lean Red Meat and Atherogenic Lipoproteins]]

No head-to-head trial has randomized a diet-lowered versus drug-lowered apoB to hard events — a
genuine gap, not a settled equivalence.

## Whether to act is a baseline-risk decision, and imaging can defer it

Because the relative effect is constant, the whole decision turns on **absolute** risk. Estimate a
person's 10-year cardiovascular risk (SCORE2 in Europe, PREVENT in the US), then read it against a
threshold: below roughly 7.5% ten-year risk, a primary-prevention adult is not a statin candidate
by USPSTF, and the drug question closes before any imaging. [@uspstf2022]
-> [[SCORE2 Baseline Risk and the ESC Treatment Thresholds]], [[Statins for Primary Prevention and the Power of Zero CAC]]

In the grey zone, a **coronary calcium (CAC) scan** re-stratifies sharply. Among statin-eligible
adults, a score of zero carried 4.2 events per 1,000 person-years versus 11.2 with any calcium — and
a zero score reclassified about half of candidates out of clear benefit (estimated 10-year number
needed to treat 64 at CAC=0 versus 28 at CAC>100). [@nasir2015]
Two honesty guards: CAC=0 is *low* risk, not *no* risk, and no trial has randomized treatment by
calcium score, so a zero belongs in a shared decision, not an automatic rule. Familial
hypercholesterolemia and a very high Lp(a) override a low score.

Once a person is above the treatment threshold, the two major guideline families have converged on
aggressive LDL-C goals — a goal of <55 mg/dL (1.4 mmol/L) in secondary prevention
[@accaha2026], the same very-high-risk target the
2025 ESC/EAS focused update carries forward [@esceas2025].
But both families rest on the same trial base, so this is shared warrant, not two independent
witnesses — and the specific cut is a reasoned stopping point on a monotone curve, not a
trial-certified optimum. -> [[LDL Lowering and Cardiovascular Events]]

### Lp(a): a fixed particle that raises the stakes

Lp(a) is an apoB-containing particle set almost entirely by genetics — stable over life, unmoved by
diet, exercise, or weight. It is not a lever. It earns attention as a **risk multiplier**: higher
Lp(a) tracks higher vascular risk (\~16% per each roughly 3.5-fold increment for coronary disease),
confined to vascular outcomes. [@erqou2009lpa]
Because that extra risk holds at every cholesterol level, a high Lp(a) raises the *absolute* payoff
of the LDL/apoB-lowering levers a person *can* pull — reason to lower apoB harder, not reason to do
anything Lp(a)-specific with lifestyle. -> [[Lipoprotein(a) and Cardiovascular Risk]]

## The statin's real costs are smaller than its reputation

Two fears drive people off statins, and the trial evidence sizes both.

**Muscle symptoms are mostly not the drug.** In \~155,000 people in blinded trials, statins raised
any muscle pain or weakness by a hair (RR 1.03), with the small excess confined to year one — only
about 1 in 15 such reports was actually caused by the drug. [@reith2022muscle]
A dedicated n-of-1 trial in people who had already quit statins for side effects found that 90% of
the symptom burden a statin produced was also produced by an identical placebo — a nocebo effect,
the symptom real but not statin-specific. [@wood2020samson]
Half those patients successfully restarted.

**New-onset diabetes is real, but small.** Unlike the muscle fear, this is a genuine pharmacological
effect: statins raise new diabetes diagnoses by \~10% at low/moderate intensity and \~36% at high, an
absolute excess near 1.2 per 1,000 person-years at standard doses. [@reith2024diabetes]
It works by nudging glycemia up a fraction, so it lands almost entirely on people already at the
diabetes threshold — and the cardiovascular benefit already nets it out. Neither harm changes the
start-or-continue decision for someone with a real indication. -> [[Statin Muscle Symptoms and the Nocebo Effect]], [[Statins and New-Onset Diabetes]]

## Eggs and dietary cholesterol: close to a non-lever

The cholesterol *in food* is a weak lever on the cholesterol *in blood* for most people. A medium
egg carries about 180 mg of cholesterol, but absorption and the body's own synthesis largely
compensate, so dietary cholesterol barely moves serum LDL except in a minority of
"hyper-responders." [@godos2020]
The apoB lever runs mainly through other routes — genetics and saturated fat, not ingested
cholesterol. For cardiovascular purposes eggs are close to a non-lever for the general population,
and the full appraisal, including the strata and cautions, lives on its own page.
-> [[Eggs Dietary Cholesterol and Cardiovascular Risk]]

## Lipids are one axis of cardiovascular risk, not the whole of it

Lowering apoB answers the lipid axis, not the whole cardiovascular question. Inflammation is a
separate, additive lever: in the CANTOS trial, canakinumab cut recurrent cardiovascular events
«independent of lipid-level lowering» in statin-treated patients whose LDL was already controlled.
[@ridker2017cantos] So a person at goal
on apoB can still carry residual inflammatory risk that lipid-lowering does not touch, and blood
pressure is the parallel large lever handled on its own axis. -> [[Inflammation as a Modifiable Lever]], [[Blood Pressure]]

There is also a second outcome beyond the artery: higher LDL-C in midlife tracks higher later
dementia incidence (about 8% per 1 mmol/L, midlife-specific), which adds to the reasons to lower it
without changing the cardiovascular verdict. [@livingston2024]
-> [[Dementia Prevention and Modifiable Risk Factors]]

## What to do with this

Rank the levers by size, and the lipid axis sorts itself quickly:

- **Get the absolute risk first.** A 10-year risk estimate, and a calcium scan in the grey zone,
  decides whether the lipid lever is worth pulling at all. Below the treatment threshold, a
  fraction-of-a-percent absolute benefit rarely justifies a lifelong drug.
- **Read the right number.** LDL-C is fine if you are lean and metabolically healthy; ask for apoB
  or non-HDL-C if you are insulin-resistant, hypertriglyceridemic, or diabetic, where LDL-C
  under-reads the danger.
- **If the lever is worth pulling, lower and keep it lowered.** The benefit is proportional with no
  floor in the studied range, and a drug's per-unit effect is the one actually measured on hard
  events. A diet-lowered number is a real but modest and less-certain version of the same lever.
- **Do not let the small costs decide it.** Muscle complaints are mostly nocebo; the diabetes risk
  is real but small and already counted in the benefit.
- **Spend little worry on eggs.** Dietary cholesterol is a minor input to the number that matters.

The loop stays open: nothing here has been graded against a realized outcome for a specific person.
What is settled is the direction and the mechanism; what is personal is the weighting and the
baseline risk you bring to it.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | 'What is the relationship between apoB-containing lipoproteins and atherosclerotic cardiovascular disease — how settled is it, which number best captures a person''s risk and where do the numbers diverge, how much does moving that number change hard events, does it matter whether diet or a drug does the moving, and for whom is acting warranted?' |
> | **Evidence included** | 24 sources — 13 gold, 11 high |
> | **Overall certainty** | **High** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | All sources are gold or high tier. |
> | **Last updated** | 2026-09-15 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Blood%20Lipids%20and%20ApoB.md) |

## References

---
type: deliverable
title: Blood Lipids and ApoB
question: What does the evidence show about atherogenic (apoB-containing) lipoproteins and atherosclerotic cardiovascular disease — the nature and strength of the relationship, which lipid number best captures the risk and in whom the numbers diverge, how much a change in that number moves hard cardiovascular events per unit, whether the route of the change (diet vs drug) alters the effect, and for whom and when acting to lower it is warranted?
sources: [Ference - LDL Cause ASCVD EAS Consensus 2017, CTT - Statin Intensive LDL Lowering Meta-Analysis 2010, Marston - ApoB Containing Lipoproteins Risk 2022, Richardson - ApoB Coronary Mendelian Randomization 2020, Zuber - Multivariable MR ApoB Coronary 2021, USPSTF - Statin Use Primary Prevention 2022, Nasir - Coronary Artery Calcium Statin Candidates MESA 2015, ACC-AHA - Dyslipidemia Management 2026, ESC-EAS - Dyslipidaemias Focused Update 2025, Godos - Egg Consumption Cardiovascular Meta-Analysis 2020, Guasch-Ferre - Red Meat Comparison Diets Cardiovascular Risk Factors Trials 2019, Ridker - Canakinumab Atherosclerotic Disease CANTOS 2017, Ramsden - Minnesota Coronary Reanalysis 2016, Ramsden - Sydney Diet Heart 2013, Roussell - Beef Optimal Lean Diet BOLD 2012, Livingston - Dementia Prevention 2024, Helgadottir - Cholesterol Not Particle Concentration, Landry - Vegetarian Dietary Patterns Cardiovascular Umbrella 2024]
confidence: high
created: 2026-08-17
updated: 2026-09-03
self_critiqued: 2026-09-03
concrete_subject_audited: 2026-09-03
aliases: [ApoB and Heart Disease, LDL and Cardiovascular Risk, Which Lipid to Measure, Blood Lipids, Cholesterol and Heart Disease]
---
<div class="recent-update" data-last-updated="2026-08-27">

Atherosclerosis is driven by cholesterol-carrying particles in the blood — the ones tagged with a protein called **apolipoprotein B (apoB)**, the particle-number measure, of which LDL is the most abundant. That these particles *cause* heart attacks and strokes, rather than merely travel alongside them, is one of the most firmly established facts in cardiovascular medicine — supported by genetics, long-term cohorts, natural genetic experiments, and drug trials that all point the same way. **Lowering the particle burden lowers hard events in proportion to how much, and how long, it is lowered.** Because the damage accumulates over a lifetime, lowering it modestly but early can beat lowering it aggressively but late.

**For most healthy people the ordinary LDL-C number tracks the risk well enough**; apoB earns its own measurement mainly in metabolic syndrome, diabetes, or high triglycerides, where LDL-C quietly undercounts the particles. **Whether to *act* on the number turns on absolute risk, not the number alone.** A genuinely low-risk adult — especially one with a coronary-calcium score of zero — gains little from a statin, while a high-risk one gains a lot. Two cautions close the picture: a drop achieved by diet is not automatically worth the same as an equal drop achieved by a drug, and dietary cholesterol — eggs above all — is a near-non-issue for most people.

</div>

## Atherogenic particles cause heart disease — this is settled, not merely associated

The European Atherosclerosis Society consensus weighed the LDL-heart-disease link against causality criteria across four independent method families — genetics, prospective cohorts, Mendelian randomization (a natural genetic experiment that removes reverse causation and most confounding), and LDL-lowering trials — and reached an unusually strong verdict: **the evidence «unequivocally establishes that LDL causes ASCVD»** [@ference2017]. The weight rests on the *concordance* between the naturally-randomized genetic evidence and the intervention trials — the natural experiment and the deliberate intervention agreeing — not on a mechanistic story.

**The causal agent is the apoB-containing particle, not cholesterol mass as such.** LDL, VLDL remnants, IDL, and lipoprotein(a) all carry one apoB molecule each and are «directly implicated in the development of ASCVD» [@ference2017]. This is the one case where a lab number is a *validated* surrogate — its transmission to the hard outcome is itself evidenced, the opposite of the markers that moved while patients did worse -> [[Surrogate Outcomes]].

## The dose is cumulative — lower for longer beats lower later

The relationship is **log-linear across more than 2 million people and 150,000 events**, and it compounds with time [@ference2017]. Risk tracks the *area under the apoB curve over a lifetime*, not a single current reading. Two consequences follow.

- **A modest reduction sustained for decades can outweigh a larger one started late** — the cumulative-exposure frame a single LDL-C snapshot cannot capture.
- **Any route that genuinely lowers apoB-particle concentration lowers risk in proportion** — diet, statins, or newer drugs alike — *provided* the LDL-C drop reflects a real particle-number drop and carries no off-target harm [@ference2017]. That proviso is load-bearing, and it is where diet and drugs come apart (below).

**A second target beyond the heart: the brain.** The 2024 Lancet dementia commission added high LDL-C as a modifiable dementia risk factor; a meta-analysis of three UK cohorts (n=1,138,488) found each 1 mmol/L higher LDL-C associated with an 8% higher all-cause dementia incidence (1.08, 1.03-1.14), the risk being **greater in midlife than late life** — consistent with the same cumulative-exposure logic [@livingston2024]. This adds to LDL's outcome menu; it does not change the cardiovascular verdict.

<div class="recent-update" data-last-updated="2026-08-28">

## Measure apoB; LDL-C is a good stand-in until metabolism drifts

### What each number counts, and why apoB wins

**apoB counts particles; LDL-C measures the cholesterol mass they carry.** Because each atherogenic particle carries exactly one apoB, apoB is a direct particle count — and it counts *all* the atherogenic particles (LDL plus remnants, IDL, Lp(a)), whereas LDL-C reflects only the cholesterol inside the LDL fraction. When many small, cholesterol-poor particles pack the same cholesterol mass, LDL-C reads normal while the particle count — the causal quantity — is high.

Three designs converge on apoB as the number that carries the risk:

| Evidence | Design | Result |
|---|---|---|
| Marston 2022 | UK Biobank (n=389,529) + two statin RCTs (n=40,430) | Entered together, **«only apoB was associated»** with MI (aHR 1.27 per SD, 1.15-1.40); non-HDL-C and TG fell to non-significant [@marston2022] |
| Richardson 2020 | Multivariable Mendelian randomization | apoB OR 1.92 (1.31-2.81) retained; LDL-C reversed to 0.85 (0.57-1.27, P=0.44); TG weakened [@richardson2020] |
| Zuber 2021 | Agnostic MR over 30 lipid measures, a non-Ference group | apoB top-ranked and survives its own removal; no other measure consistently selected [@zuber2021] |

The three are not fully independent draws. Richardson's MR lists Ference — author of the causal
consensus above — as a co-author, and shares an author with Zuber, so it corroborates that consensus
rather than testing it afresh. **Marston's leg — a biobank cohort plus two statin RCTs, with no author
overlap — is the genuinely independent witness**; read the convergence as two routes agreeing, not
three unrelated ones.

**Particle *number*, not particle *type*, carries the risk — and beats LDL-C.** Once apoB is fixed, the small-dense-versus-large-LDL distinction stops predicting events [@marston2022], and Richardson's verdict is that **«apolipoprotein B is the predominant trait»** underlying the whole lipid-CHD relationship [@richardson2020]. Whether particle number *also* beats the **cholesterol content** those particles carry — a finer question that only becomes answerable once apoB and non-HDL-C are pulled apart — is contested, and unlike the apoB-over-LDL-C verdict it is not settled.

Marston's read, that risk is captured by particle count «independent from lipid content», rests on mutually adjusting apoB and non-HDL-C — two traits correlated about 0.9 that statistical adjustment cannot cleanly separate [@marston2022].

 An independent Mendelian-randomization analysis — deCODE Iceland plus the Danish DBDS, with no author from the apoB-particle-number programme — breaks that correlation using the 82 of 235 apoB variants whose cholesterol-per-particle differs, and reaches the opposite verdict: the CAD risk per unit of apoB was **«71% greater for non-HDL-C main-effect variants than apoB main-effect variants»**, so that **«for individuals with equal levels of non-HDL-C, the number of apoB particles it is carried on does not influence the development of CAD»** [@helgadottir2022]. The multi-source verdict — apoB (or non-HDL-C) beats LDL-C where metabolism has drifted — is untouched by this; only the finer number-versus-content leg is unsettled, held here as contested rather than closed -> [[ApoB Particle Number vs Cholesterol Content]].

 **What this changes for someone tracking lipids:** where the two disagree, non-HDL-C — free on every standard panel (total cholesterol minus HDL-C) — is a defensible secondary target, not a distant second to a separate apoB assay. On Helgadottir's reading **«the guidance of non-HDL-C target levels are expected to better capture risk related to apoB-containing particles»** [@helgadottir2022], and a therapy that lowers apoB without proportionally lowering its cholesterol content may under-deliver. This does not overturn the ESC/EAS apoB preference — it is one MR against guidance backed by a lineage — but it removes any *content-is-irrelevant* certainty and makes non-HDL-C a reasonable number to steer.

**Read this correctly: apoB is *necessary*, LDL-C is not discredited.** apoB never travels without cholesterol, so the LDL-C null in the multivariable analysis is not a claim that cholesterol is inert — it means a cholesterol change that is *not accompanied by an apoB change* may not move risk. LDL particles each contain an apoB molecule; that is why lowering LDL-C works when it genuinely lowers particles.

### Where LDL-C and apoB diverge — the metabolic stratum

For most lean, metabolically healthy people LDL-C and apoB are tightly correlated (ρ >= 0.95 in Marston's untreated cohort [@marston2022]), so a separate apoB draw adds little. **They come apart in metabolic syndrome, diabetes, and high triglycerides**, where a small-dense-LDL pattern packs more particles into a given cholesterol mass, so **LDL-C under-states the atherogenic burden** [@ference2017].

The 2026 US guideline turns this into a rule: apoB testing is useful «particularly in those with elevated triglycerides (TG) (>=150 mg/dL), diabetes, or low achieved LDL-C (<70 mg/dL)» — where LDL-C «may appear at goal while apoB remains elevated, masking residual risk» [@accaha2026]. A raised triglyceride-glucose reading is a cheap prompt to measure apoB in that person.

</div>

<div class="recent-update" data-last-updated="2026-08-27">

## Lowering the number lowers events, in proportion, with no floor yet found

The statin trials give the magnitude. Pooling individual data from 26 trials (169,138 participants), **each 1.0 mmol/L reduction in LDL-C cut major vascular events by about a fifth** [@ctt2010].

| Outcome, per 1.0 mmol/L LDL-C reduction | Effect |
|---|---|
| Major vascular events | RR 0.78 (0.76-0.80) |
| All-cause mortality | RR 0.90 (0.87-0.93) |
| Non-fatal MI | RR 0.73 |
| Coronary revascularisation | RR 0.75 |
| Ischaemic stroke | RR 0.79 |
| Cancer / non-vascular death | RR 1.00 / 0.97 (null) |

Three features matter for decisions.

- **No floor.** The pooled trials showed **«no evidence of any threshold within the cholesterol range studied»**, benefit persisting even at 1.8 mmol/L (70 mg/dL) or lower [@ctt2010]. The burden is on anyone claiming a knee to locate it.
- **The reductions multiply.** Two successive 1 mmol/L drops give roughly 0.78 x 0.78 ≈ 0.6 — a \~40% reduction — which is the per-unit face of *lower for longer* [@ctt2010].
- **Death moved, not just the marker** — all-cause mortality fell, with no excess cancer even at low LDL, which retires the old low-cholesterol-harm worry for the drug-lowered range. Full magnitude treatment: [[LDL Lowering and Cardiovascular Events]].

This is *statin* lowering — the concordant, no-off-target case. It does not automatically transfer to a diet-induced change.

</div>

<div class="recent-update" data-last-updated="2026-09-03">

## How the number was lowered matters — a diet drop is not a drug drop per unit

The proviso «provided the LDL-C drop is concordant with the particle-number drop, and there are no competing off-target effects» is not fine print. The recovered **Minnesota Coronary Experiment** is the cleanest case of it biting: replacing saturated fat with corn-oil linoleic acid lowered serum cholesterol sharply (**-13.8% vs -1.0%** in controls) yet produced **no mortality benefit** — pooled CHD mortality 1.13, all-cause 1.07 [@ramsden2016]. The **Sydney Diet-Heart** companion lowered cholesterol even more in the intervention arm (**-13.3% vs -5.5%**) yet that arm had *higher* mortality [@ramsden2013].

**Both trials measured total cholesterol only**, so neither can show the cholesterol drop tracked a real apoB-particle drop — and linoleic acid plausibly adds an off-target harm. So they land *inside* the causal framework rather than refuting it: they are the worked demonstration that **a dietary cholesterol change is not interchangeable with a drug-induced apoB change**. Validate the marker-to-outcome transmission for the agent actually used -> [[Surrogate Outcomes]]. The dietary-fat physiology — which fats raise or lower which particles — is one route into this axis and is owned by [[Dietary Fat]], not re-derived here.

**So how big is a dietary LDL drop in the first place — modest, and smaller still in trials.** Landry's 2024 umbrella review puts a number on one dietary route, and its two estimates pull in opposite directions:

- **Observational:** across 31 studies, vegan eating tracked LDL-C «−0.49 mmol/l (−0.62, −0.36)» lower than omnivorous eating [@landry2024vegetarian] — but that figure is GRADE low, heavily confounded by the healthy-adherer pattern (people who go vegan differ in many ways), and highly heterogeneous (I2=92%).
- **Randomised:** in presumably-healthy adults the effect shrinks to nothing — vegetarian and vegan diets combined moved LDL-C «−0.13 mmol/l (−0.37, 0.12)» across 4 RCTs, not significant [@landry2024vegetarian].

[inferred from @landry2024vegetarian] So even taken at its confounded observational face value, the dietary LDL lever is real but small — and by this deliverable's own drug-route-only rule, a diet-induced LDL change does not buy hard events at CTT's statin-derived RR 0.78-per-mmol rate.

 **A second worked case — cutting red meat moves the marker mainly when plant protein replaces it.** A gold pooled meta-analysis of 36 substitution RCTs found the *sign* of red meat's LDL-C effect flips with what takes its place. Swapped for high-quality plant protein (legumes, soy, nuts), red meat left LDL-C higher by a pooled +0.198 mmol/L (95% CI 0.065-0.330) — plant did better; swapped for fish, poultry, or refined carbohydrate, the marker barely moved [@guaschferre2019redmeat]. And *how much* red meat is eaten is not the lever: the continuous dose-response was null across 0-500 g/day [@guaschferre2019redmeat], matching the BOLD feeding trial's flat lipid response across a 20-to-153 g/day beef range once background saturated fat was fixed [@roussell2012bold]. Both are surrogate (lipid) endpoints — no CVD events were measured — so read them at the same one-step-removed level as the vegan estimates above: the apoB-cutting route via less red meat exists chiefly when plant protein fills the plate.

</div>

## For a primary-prevention adult, absolute risk decides — and zero calcium can defer

### The statin decision is a baseline-risk decision

The relative effect of a statin is roughly constant across risk strata; the **absolute** benefit scales with how high the starting risk was ([[Baseline Risk and the Relative-Absolute Split]]). In the primary-prevention trials (22 trials, mean 3.3 years) the relative effects are real but the absolute differences are already small:

| Outcome | RR (95% CI) | Absolute risk difference |
|---|---|---|
| Composite CVD | 0.72 (0.64-0.81) | -1.28% |
| Myocardial infarction | 0.67 (0.60-0.75) | -0.89% |
| Stroke | 0.78 (0.68-0.90) | -0.39% |
| All-cause mortality | 0.92 (0.87-0.98) | -0.35% |
| CV mortality | 0.91 (0.81-1.02, NS) | -0.13% |

[@uspstf2022]

**The US Preventive Services Task Force sets an explicit threshold**, because benefit is proportional to 10-year risk: prescribe at **>=10%** 10-year risk, «selectively offer» at 7.5-<10%, and **below 7.5% a person is not a statin candidate at all** [@uspstf2022]. Familial hypercholesterolemia and LDL-C above 190 mg/dL are carved out — treated regardless of the risk score.

### The power of a zero calcium score (CAC)

Where a body allows it, a **coronary-artery-calcium score (CAC — a CT count of calcified plaque)** of zero shifts the decision. In 4,758 MESA adults, **44% of the statin-eligible had CAC = 0**, and their event rate was **4.2 per 1,000 person-years versus 11.2** with any calcium [@nasir2015]. Translated into a modeled 10-year number-needed-to-treat, that is **NNT 64 for CAC=0 versus 28 for CAC>100** in the recommended group — so a zero score reclassifies roughly half of candidates out of meaningful benefit.

Two honest limits. **The NNT is modeled, not measured** — no trial has randomized statins by CAC, and a CAC=0 is low risk, not *no* risk (4.2/1,000 py is not zero). And bodies disagree: USPSTF keeps CAC out of the statin rule, ESC allows it as a weak modifier, and the 2026 US guideline goes furthest — mapping the calcium score directly onto an LDL-C goal (CAC >=1000 -> treat as very-high-risk, goal <55 mg/dL) and starting drug therapy at lower estimated risk using a newer calculator [@accaha2026]. Full case: [[Statins for Primary Prevention and the Power of Zero CAC]].

### How low to treat — the target number is a stopping point, not a measured optimum

The two major guideline families now **converge** on the aggressive targets — very-high-risk LDL-C **<1.4 mmol/L (55 mg/dL)** plus a >=50% reduction, high-risk **<1.8 mmol/L (70 mg/dL)** [@accaha2026] — the same very-high-risk framework the 2025 ESC/EAS focused update carries forward from the 2019 ESC/EAS guidelines [@esceas2025]. But both rest on the *same* trial base, so this is shared warrant, not two independent witnesses. And under a no-threshold curve, **the specific cut (why <55 and not <50 or <70) has no head-to-head trial** — the number is a pragmatic stopping point extrapolated from the monotone curve, where lowering further keeps paying until the added agent, cost, or adherence burden is no longer worth it. The *direction* is certain; the exact number is a reasoned choice.

<div class="recent-update" data-last-updated="2026-08-27">

## Eggs and dietary cholesterol are a near-non-lever for most people

The largest dose-response meta-analysis (39 cohorts, \~2 million people) lands on **«no conclusive evidence on the role of egg in CVD risk»** [@godos2020]. Every general-population estimate sits within a few percent of 1.00 (CVD 0.95 at 4 eggs/week, CI kissing the null), at GRADE **low** certainty. The egg question is a big-worry, small-effect one that ranks *low* — the attention it attracts is an anti-signal, not a magnitude.

Two strata break from the near-null, both worth naming:

- **Type 2 diabetes:** the direction reverses — habitual (\~1/day) intake carried a **1.22 (1.08-1.39)** relative CVD-risk increase [@godos2020]. Low-certainty observational subgroup, but a credible flag: treat daily eggs as a watch-item, not a free food.
- **Heart failure:** the one harm arm, rising to **1.15 (1.02-1.30)** at 1 egg/day, mechanism unknown [@godos2020].

**Why the scare mostly fails:** a food's cholesterol content (\~180 mg/egg) is not a serum-cholesterol effect. Only a minority of *hyper-responders* show a real LDL rise to dietary cholesterol; for most people absorption and endogenous synthesis compensate [@godos2020]. The apoB lever is reached mainly by other routes -> [[Dietary Fat]], [[Is the Food Category Doing Any Work]]. This section is `confidence: low` — entirely observational FFQ cohorts, carrying the domain's dietary-measurement-error constraint.

</div>

## Lipids are one axis of cardiovascular risk, not the whole of it

Lowering apoB is the lipid-axis answer, not the whole cardiovascular answer. **Inflammation is a separate, additive causal lever**: in the CANTOS trial, canakinumab cut cardiovascular events **«independent of lipid-level lowering»** in statin-treated patients whose LDL was already controlled [@ridker2017cantos]. A person at goal on apoB can still carry residual inflammatory risk that lipid-lowering does not touch -> [[Inflammation as a Modifiable Lever]]. Blood pressure is the parallel large cardiovascular lever, handled on its own axis -> [[Blood Pressure]].

<div class="recent-update" data-last-updated="2026-09-03">

## What to measure, when to act, and what is still open

**Measure.** For most people the ordinary LDL-C (or non-HDL-C) suffices. **Add apoB** where LDL-C is likely to undercount the particles — high triglycerides (>=150 mg/dL), diabetes, metabolic syndrome, or a low achieved LDL-C on treatment.

**Act on absolute risk, not the number alone.** Get the 10-year risk first: below \~7.5% a healthy adult is not a drug candidate, and a zero calcium score reinforces deferral where a body allows it. In the grey zone (\~7.5-20%), CAC=0 roughly halves-to-quarters the modeled benefit and belongs in shared decision-making. Familial hypercholesterolemia, LDL-C >190 mg/dL, and (plausibly) high Lp(a) warrant treatment regardless of score.

**Mind the route.** A drop achieved by diet is not automatically worth an equal drop achieved by a drug; validate that a given intervention moves particles and hard outcomes, not just cholesterol.

**Still open.** No trial has randomized patients to *target* apoB versus LDL-C on hard outcomes; no trial has randomized statins by calcium score; and the wiki does not yet hold the primary-prevention specifics for ezetimibe, PCSK9 inhibitors, or Lp(a) as a distinct modifiable particle. The loop is open throughout — these are appraisals of what the evidence supports, not verdicts graded against realized outcomes.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | What does the evidence show about atherogenic (apoB-containing) lipoproteins and atherosclerotic cardiovascular disease — the nature and strength of the relationship, which lipid number best captures the risk and in whom the numbers diverge, how much a change in that number moves hard cardiovascular events per unit, whether the route of the change (diet vs drug) alters the effect, and for whom and when acting to lower it is warranted? |
> | **Evidence included** | 18 sources — 8 gold, 10 high |
> | **Overall certainty** | **High** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | All sources are gold or high tier. |
> | **Last updated** | 2026-09-03 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Blood%20Lipids%20and%20ApoB.md) |

</div>

## References

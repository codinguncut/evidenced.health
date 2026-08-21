---
type: synthesis
question: For a low-risk, primary-prevention person, does any cardiometabolic intervention have a proven large reduction in hard cardiovascular events?
aliases: [Primary Prevention CV Benefit Gap, Cardiometabolic Intervention Hard Outcomes, No Proven CV Lever Low Risk, Intervention CV Outcome Pattern]
authors: [Lincoff, A Michael; US Preventive Services Task Force (org); Nasir, Khurram; Look AHEAD Research Group (org); Blood Pressure Lowering Treatment Trialists Collaboration (org); Estruch, Ramon; Belalcazar, L Maria; Bhatt, Deepak L; Moll van Charante, Eric P; Richard, Edo; Zheng, Sean L; Roddick, Alistair J]
sources: [Lincoff - Semaglutide and Cardiovascular Outcomes SELECT 2023, USPSTF - Statin Use Primary Prevention 2022, Nasir - Coronary Artery Calcium Statin Candidates MESA 2015, Look AHEAD - Cardiovascular Effects Lifestyle T2D 2013, BPLTTC - Blood Pressure Lowering Primary and Secondary Prevention 2021, Estruch - PREDIMED Mediterranean Diet 2018, Belalcazar - Lifestyle Statins CRP Look AHEAD 2013, Bhatt - REDUCE-IT Icosapent Ethyl 2019, Moll van Charante - preDIVA Multidomain Dementia Prevention 2016, Zheng - Aspirin Primary Prevention Meta-Analysis 2019]
cluster: cvd-risk-estimation
confidence: high
self_critiqued: 2026-08-20
relationships:
  related_to:
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
    - The Certainty-Importance Inversion
    - Layer 1 - Ranking Interventions for a Stratum
    - Semaglutide for Cardiovascular Risk in Obesity
    - Statins for Primary Prevention and the Power of Zero CAC
    - Aspirin for Primary Prevention of Cardiovascular Disease
    - Does Weight Loss Reduce Cardiovascular Events
    - Blood Pressure Lowering and Cardiovascular Events
    - Does Reducing Saturated Fat Reduce Cardiovascular Events
    - Vitamin and Mineral Supplements for Disease Prevention
created: 2026-07-28
updated: 2026-08-20
---

Four intervention pages — a **drug for weight** ([[Semaglutide for Cardiovascular Risk in Obesity]]),
a **drug for lipids** ([[Statins for Primary Prevention and the Power of Zero CAC]]), **lifestyle weight
loss** ([[Does Weight Loss Reduce Cardiovascular Events]]), and **blood-pressure lowering**
([[Blood Pressure Lowering and Cardiovascular Events]]) — answer the *same* decision question, and the
pattern is on none of them individually. Assembled, they make one claim that is a decision-change: **for a
genuinely low-risk primary-prevention person, no cardiometabolic intervention the wiki holds delivers a
large *absolute* reduction in hard cardiovascular events.** The first three are *unproven there or
below the action threshold*; the fourth, BP-lowering, is the sharp test — its *relative* benefit **is**
proven in primary prevention, and the claim survives only because a proven relative effect on a low
absolute baseline is still a small absolute gain. A **fifth** intervention, aspirin, is treated below
as a distinct case: it is not one of the four sharing that question, and it reaches the same ceiling by
a *different* mechanism — a proven relative benefit exactly cancelled by a proven bleeding harm — so it
sharpens rather than repeats the pattern.



## The four, on the one question

| Intervention | Hard-CV-outcome evidence, and where it applies | For a low-risk / primary-prevention person |
|---|---|---|
| **Semaglutide** (drug→weight) | MACE «hazard ratio, 0.80; 95% confidence interval, 0.72 to 0.90» — but only in **secondary prevention** (established CVD); primary prevention «were not studied» [@lincoff2023] | **Unproven.** Weight + surrogates transfer; the CV-event benefit does not |
| **Statin** (drug→lipids) | Efficacy real and roughly constant per mmol/L; USPSTF acts only at **≥7.5–10% 10-year risk** because benefit is *proportional to risk*; CAC=0 lifts NNT to 64 vs 28 [@nasir2015] | **Small, below the threshold.** USPSTF: below \~7.5% risk, not a candidate at all [@uspstf2022] |
| **Lifestyle weight loss** | Look AHEAD «hazard ratio 0.95; 95% CI 0.83 to 1.09» — **null** in T2D despite real weight loss and a large CRP reduction (\~42-45% with intensive lifestyle on statins, vs 14-21% usual care) [@look2013] [@belalcazar2013] | **Unproven / null via this route** |
| **BP-lowering** (drug) | BPLTTC IPD: HR **0.91 (0.89-0.94) even without prior CVD**, no heterogeneity down to <120 mmHg [@bplttc2021] — relative benefit **proven in primary prevention** | **Proven relative, small absolute.** \~10% per 5 mmHg on a low baseline is a small absolute gain; the authors say treat on absolute risk |

Each per-page cross-source comparison already carries its own parameter table; this page **configures**
those settled findings, it does not re-derive a magnitude.

## A fifth intervention sharpens the pattern — aspirin (added 2026-08-20)


Aspirin ([[Aspirin for Primary Prevention of Cardiovascular Disease]]) is the **sharpest** case
because it fails the low-risk person on a *different* mechanism than the four above. The other four
are *unproven or below threshold* in primary prevention; aspirin's **relative** CV benefit **is**
proven there (composite HR 0.89, 95% CrI 0.84-0.94) — yet it still delivers no net gain, because a
**matched, also-proven bleeding harm** cancels it. On the largest trial-level MA (13 RCTs, 164 225
people) the composite-CV ARR is 0.41% (0.23-0.59) against a major-bleeding ARI of 0.47% (0.34-0.62)
— NNT 241 vs NNH 210 — so the harm arm marginally **exceeds** the benefit, with no mortality benefit
[@zheng2019aspirin].

It also **stress-tests shared mechanism #1 below** (absolute benefit scales with baseline risk). For the
other four, raising baseline risk is the escape hatch — a proven relative effect buys more absolute
benefit in a higher-risk person. Aspirin closes that hatch: the bleeding harm **co-travels** with
cardiovascular risk, so both arms scale together and the net stays a wash-to-negative in the low-risk,
high-risk, and diabetes strata alike (bleeding ARI >= CV ARR in every one)
[@zheng2019aspirin]. So for aspirin, *even a
higher-risk person is not rescued by route-(a)* — a stronger conclusion than the ceiling finding needs,
and one the other four do not reach.

## Why they converge — three shared mechanisms, not a coincidence

1. **Absolute benefit scales with baseline risk** ([[Baseline Risk and the Relative-Absolute Split]]).
   A constant relative effect on a low baseline is a small absolute effect. This is *why* USPSTF sets a
   risk threshold, *why* SELECT's benefit would shrink \~5-fold at a primary-prevention baseline, and *why*
   a CAC=0 person's statin NNT balloons. The machinery is identical across all three.
2. **The hard-outcome trials were run where the events are** — in secondary prevention or high-risk
   populations, because that is where a trial can accrue events. So the evidence that *exists* is
   systematically about people at higher risk than the low-risk person asking. This is a structural
   feature of the evidence base, not a property of the drugs.
3. **Surrogate improvement does not carry the outcome** ([[Surrogate Outcomes]];
   [[The Certainty-Importance Inversion]]). Look AHEAD is the worked case: weight, HbA1c, fitness, blood
   pressure and CRP all moved the right way and the events did not follow. A good-looking risk-factor
   profile after an intervention is not evidence of an averted event. The **dietary** instance is the
   same shape: reducing saturated fat reliably lowers LDL, yet whether that lowers *events* is genuinely
   contested ([[Does Reducing Saturated Fat Reduce Cardiovascular Events]]) — the surrogate signal (LDL)
   is firmer than the outcome evidence it stands in for.



## The largest levers are missing from the table — because their evidence is observational

The obvious objection to a ceiling finding is *"but exercise."* It is worth answering, because the
answer sharpens the ceiling rather than breaking it. The levers with the **largest** associations to
hard outcomes are not the four above — they are **activity and fitness**, and they are *absent from the
proven-lever table on purpose*:

- Aerobic activity: all-cause HR \~**0.34** at the top of the dose-response ([[Physical Activity Dose and Mortality]]) — the single largest association the vault holds, dwarfing every RCT-proven lever here.
- Cardiorespiratory fitness: **RR 0.87 per 1-MET** ([[Cardiorespiratory Fitness and Mortality]]).
- Muscle-strengthening: all-cause **RR 0.85** ([[Muscle-Strengthening Activity and Mortality]]).

**They are absent because the evidence is a different, weaker kind.** All three are *observational* — no
RCT randomizes a lifetime of activity or fitness onto hard outcomes — so they carry the confounding and
reverse-causation load the four RCT levers were designed to escape (the healthy-user and sick-quitter
signatures; cf. [[The U-Shaped Association Artifact]]). This is a **distinction of evidence type, not a
magnitude contrast**: you cannot set HR 0.34 (observational, all-cause) beside HR 0.80 (RCT, MACE,
secondary prevention) as commensurable — which is exactly why activity is a *predictor* here, not a
proven causal lever.

**The sharpened ceiling:** it is not that no large lever exists. It is that the **proven** levers are
small-for-low-risk, and the **large** lever (activity/fitness) is the one whose causal effect on hard
outcomes is structurally *unprovable by RCT*. So the low-risk person's honest position is unchanged — no
*proven* large CV-event lever — even after the biggest association in the vault is on the table.



## The decision-change — this is a ceiling finding

This is [[Layer 1 - Ranking Interventions for a Stratum]]'s *the ceiling is itself a finding* made
concrete for cardiovascular events in a low-risk person: **the search for a large, proven CV-event lever
comes up empty across drug and lifestyle routes alike, and reporting that is a result, not a failure.**
It licenses a low-risk person to *stop optimizing for a heart-attack reduction that the evidence does not
promise them* — and to pursue these interventions, if at all, for the outcomes they *do* move (weight,
glycemia, diabetes prevention, MASLD, function, and — for higher-risk people — events).

**Three things this does NOT say**, each a guard against over-reading:

- **Not *these interventions do not work*.** They work where risk is high enough (SELECT in secondary
  prevention; statins above threshold) and on non-CV outcomes everywhere. The claim is scoped to *hard CV
  events in a low-risk person*.
- **Not *surrogates are worthless*.** They are the reason to act on many *other* outcomes, and they raise
  prior plausibility — they just are not proof of an averted event.
- **Not a claim about high-risk people.** For established CVD, high 10-year risk, or a high CAC, the same
  machinery runs the other way: absolute benefit is large and the interventions are strongly indicated.
  The pattern is a statement about the **low-risk tail**, where most of the wiki's healthy strata sit.



## What tested it — and why the test sharpened rather than broke it

BP-lowering was the candidate refutation, and it is instructive that it **refined** the claim instead.
Unlike the other three, its *relative* hard-outcome benefit is directly proven in primary prevention
(BPLTTC HR 0.91 without prior CVD, no heterogeneity across baseline BP). Had the synthesis claimed *no
intervention has a proven relative effect in primary prevention*, BP-lowering would have broken it. But
the claim is about **large absolute** benefit **for a low-risk person**, and there BP-lowering lands
exactly where the mechanism predicts: the paper's own decision rule is *treat on absolute cardiovascular
risk, not the blood-pressure number*, so a proven \~10%-per-5-mmHg relative effect still buys little for
someone at low absolute risk. **The one intervention that could speak to primary prevention confirmed
mechanism 1 rather than escaping it.**

**PREDIMED is the second confirming test — a HIGH-risk contrast, not a counterexample.** A dietary  [@estruch2018]
*pattern* (Mediterranean diet, energy-unrestricted) cut CV events \~30% (HR 0.70) with a real absolute
benefit of \~1.7-2.1 percentage points over 5 years ([[Mediterranean Diet and Cardiovascular Events]]).
That looks like a lifestyle intervention with a proven hard-outcome effect — but it lands exactly where
the mechanism predicts, because its population was **high** absolute risk (\~49% T2D, \~82% hypertensive),
and its authors say outright that generalization «to persons at lower risk requires further research».
Like BP-lowering, it **refines** the ceiling: an intervention *can* buy hard-outcome benefit where
baseline risk is high; it says nothing about the low-risk person, where the absolute benefit of the same
relative effect shrinks toward the mechanism-1 floor. (And PREDIMED's all-cause mortality was null over
4.8 yr, so even at high risk the event benefit did not extend to death in-window.)

**REDUCE-IT is the third confirming test — and the only one that shows mechanism 1 INSIDE a single trial
`[2026-08-04]`.** A lipid-lever drug (icosapent ethyl 4 g/day) cut the primary CV composite by 25% in a
**high-risk** statin-treated, high-triglyceride population (NNT 21 overall; NNT \~16 in the
established-CVD arm) [@bhatt2019] — again exactly where a
trial can accrue events. The sharp part is its own two strata: the **lower-risk primary-prevention arm
(DM + risk factor, event rate 13.6%) was attenuated to HR 0.88 (0.70-1.10), CI crossing 1, ARR \~1.4 pp**,
versus the secondary-prevention arm's HR 0.73 / ARR 6.2 pp [@bhatt2019]. So the one trial displays the whole pattern — proven where risk is high, fading toward the
floor where it is low — and it does **not** supply a low-risk lever. (Bound: it is a prescription drug in a
selected hypertriglyceridemic stratum, and its mineral-oil comparator is contested, so it does not even
speak to the general low-risk person.) -> [[Baseline Risk and the Relative-Absolute Split]].
[inferred from @bhatt2019]

**preDIVA is a fourth confirming test — a lifestyle/vascular-care route, but a WEAKER instance whose null
is over-determined `[2026-08-07]`.** preDIVA (Moll van Charante 2016) delivered 6.7 yr of nurse-led
multidomain vascular care (lifestyle advice + BP/lipid/glucose drug optimisation) to **3526 *unselected*
community-dwelling elderly** — and found **null on incident cardiovascular disease (HR 1.06, 0.86-1.31),
all-cause mortality (HR 0.98, 0.80-1.18), and dementia (HR 0.92)**
[@mollvancharante2016]. The authors give
**two** reasons, and the FIRST is not baseline risk: «the contrast between study groups in cardiovascular
risk reduction was relatively small ... the intensity of the vascular care ... might have been
insufficient», then «this absence of effect might have been caused by modest baseline cardiovascular risks
and high standards of usual care» [@mollvancharante2016]. **The small-contrast reason partly confounds the baseline-risk test:** the achieved
systolic contrast was only -2.06 mm Hg, which through this page's BPLTTC transmission (\~HR 0.91 per
5 mmHg) predicts HR \~0.96 on CV events — **undetectable at *any* baseline risk**. So preDIVA is a
**weaker** mechanism-1 instance than BPLTTC/PREDIMED/REDUCE-IT (which achieved real relative effects and
still faded at low risk, cleanly isolating baseline risk); its near-zero contrast means it confirms only
the **broad** thesis — *no proven large hard-CV lever in a not-high-risk population* — not a clean
baseline-risk demonstration. Still directionally consistent: a well-managed, unselected elderly cohort is
exactly where both a thin contrast and a low absolute risk conspire toward null. (Convergent single-source
confirmation of the held thesis, **not** an independent-backing claim — no `[E-independent]`.)
[inferred from @mollvancharante2016]

**What still would break it:** a primary-prevention cardiovascular-outcome trial of an obesity drug
(does not yet exist), a weight-loss-mortality review finding benefit beyond T2D, a CAC-randomized
statin trial with benefit at CAC=0, or **a dietary-pattern RCT showing hard-outcome benefit in a
genuinely LOW-risk population** — any would move a *large-absolute-at-low-risk* cell from *unproven*
toward *proven*. Until then the pattern holds, and its confidence is **high**: six intervention
classes across drug, diet-pattern and lifestyle — including the ones with the strongest
primary-prevention evidence, and one (REDUCE-IT) that displays the baseline-risk gradient within a
single trial — all land in the same place by the same mechanism. Aspirin adds a seventh class that
reaches the *same* place by a **different** route — a proven relative benefit cancelled by a matched,
also-proven bleeding harm — so the ceiling holds even where a low-risk primary-prevention benefit *is*
demonstrable, which strengthens rather than dilutes the finding.

## References

---
type: deliverable
title: Baseline Risk and Absolute Benefit
self_critiqued: 2026-09-09
concrete_subject_audited: 2026-09-09
question: 'When an intervention has a known relative effect, what does the evidence say about how much it actually helps a given person — how does absolute benefit track baseline risk when the relative effect is roughly constant, when does stratifying by baseline risk change the decision, and how should a person read a relative risk reduction against their own starting risk?'
aliases: [Baseline Risk and Absolute Benefit, Absolute vs Relative Risk, Number Needed to Treat, How Much Will It Help Me]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; World Health Organization (org); European Society of Cardiology (org); Mach, François; Blumenthal, Roger S; Cholesterol Treatment Trialists' Collaboration (org); Bhatt, Deepak L; Nasir, Khurram; Blaha, Michael J; Budoff, Matthew J; US Preventive Services Task Force (org); Zheng, Sean L; Roddick, Alistair J; Khan, Sadiya S; Matsushita, Kunihiro; Knowler, William C; Pittas, Anastassios G; Dawson-Hughes, Bess; Coley, Nicola; Andrieu, Sandrine]
sources: [GRADE - Handbook, WHO - Saturated and Trans Fatty Acid Intake 2023, ESC - CVD Prevention Guidelines 2021, CTT - Statin Intensive LDL Lowering Meta-Analysis 2010, Bhatt - REDUCE-IT Icosapent Ethyl 2019, Nasir - Coronary Artery Calcium Statin Candidates MESA 2015, USPSTF - Aspirin Primary Prevention 2022, Zheng - Aspirin Primary Prevention Meta-Analysis 2019, Khan - PREVENT Equations 2024, Knowler - Diabetes Prevention Program DPP 2002, Pittas - Vitamin D Type 2 Diabetes IPD 2023, Coley - Multidomain Dementia MAPT preDIVA Pooled 2025]
confidence: high
created: 2026-09-09
updated: 2026-09-09
---
<div class="recent-page" data-last-updated="2026-09-09"></div>


A relative effect — *cuts your risk by a quarter*, *halves your chance of a heart attack* — sounds
like a fact about you. It is not. **It is a fact about the treatment.** What the same treatment does
*for you* depends on how much risk you were carrying to begin with: a quarter off a large risk is a
large gain, a quarter off a tiny risk is a tiny one. So this guide teaches one move: **convert it.**
Multiply the relative reduction by your own baseline risk to get the *absolute* benefit — the only form
in which a benefit can be weighed against a harm, a cost, or a daily pill.

Everything else follows from that one step: where a baseline
risk comes from, when an extra test is allowed to move it, why a reassuring ten-year number can hide an
alarming thirty-year one, and why **a harm that grows alongside the benefit — aspirin's bleeding — can
cancel it exactly where the benefit looks biggest.**

## A relative effect is a fact about the treatment, not about you

The arithmetic is one line. The absolute benefit is the relative risk *reduction* applied to a
person's own starting risk:

    absolute risk difference  =  baseline risk  x  (1 - RR)

A relative effect travels across people; the absolute effect does not. GRADE builds its whole
subgroup logic on this: the relative effect of a treatment versus a comparator is usually similar
across a wide range of baseline risks, which is why one pooled relative estimate is usually
legitimate — and yet **the recommendation can still differ by group.**

> «Recommendations, however, may differ across subgroups of patients at different baseline risk of an
> outcome, despite there being a single relative risk that applies to all of them.»
> [@grade]

Guideline bodies do this conversion in the open. WHO writes it directly into its evidence profiles:
«absolute effect = 1000 × [event rate × (1 – RR)]. The magnitude of absolute effect in "real world"
settings depends on baseline risk, which can vary across different populations»
[@who2023saturated].

**Worked, with a round number.** Take a treatment that removes a quarter of risk (RR 0.75, a constant
relative effect). At a **4% baseline** it buys 4% × 0.25 = **1 percentage point** — one event avoided
for every 100 people treated. At a **20% baseline** it buys **5 percentage points** — one for every
20. Same treatment, a five-fold difference in what it delivers, and no disagreement about the
evidence.

That relative effects really do stay roughly constant across baselines is not an assumption but a
finding. In the cleanest case the corpus holds, statins cut major vascular events by about a fifth per
1.0 mmol/L of LDL-C lowering «in all types of patient studied ... including those with LDL cholesterol
lower than 2 mmol/L» (RR 0·78, 95% CI 0·76–0·80), with no material difference across strata — prior
heart disease or none, diabetes, age over 75, blood pressure, body-mass — whose underlying event
rates differ substantially [@ctt2010].
So **the differing absolute benefit across those groups is pure arithmetic, not a different drug
working differently** -> [[Baseline Risk and the Relative-Absolute Split]].

### A worked pair of real numbers

One trial shows the scaling inside itself. REDUCE-IT gave the *same* drug at the *same* dose (icosapent
ethyl 4 g/day) to two prespecified risk strata over the same horizon. The higher-risk arm (secondary
prevention, 25.5% placebo event rate) reached HR 0.73; the lower-risk arm (primary prevention with
diabetes plus a risk factor, 13.6%) reached HR 0.88
[@bhatt2019]. The absolute gap is roughly **6.2 versus
1.4 percentage points — a number-needed-to-treat of about 16 versus 71**
[inferred from @bhatt2019]. The same
drug is worth about four times as much in the higher-risk person.

One honest bound: the low-risk arm's point estimate is attenuated (its confidence interval crosses 1), so this pair blends baseline-risk
scaling with a *possible* change in the relative effect, and one trial's subgroups cannot cleanly
separate the two (interaction P = 0.14). Read it as the worked pair it is, with that caveat attached.

## Your baseline risk comes from a model with a home ground

To convert, you need the other factor: a prognostic estimate of your own risk over a stated horizon.
For cardiovascular disease the European instrument is **SCORE2** — a 10-year risk of fatal and
non-fatal CVD, read from age, sex, smoking, systolic blood pressure, non-HDL cholesterol and region
-> [[SCORE2 Baseline Risk and the ESC Treatment Thresholds]].

**The threshold, not the percentage, is the decision.** SCORE2 outputs a number; ESC's treatment
thresholds turn it into an action, and the bands move with age
[@esc2021]:

| Category | Under 50 | 50–69 | 70 or older |
|---|---|---|---|
| Treatment generally not recommended | <2.5% | <5% | <7.5% |
| Treatment should be considered | 2.5 to <7.5% | 5 to <10% | 7.5 to <15% |
| Treatment generally recommended | >=7.5% | >=10% | >=15% |

The same 10-year risk means different things at different ages — 8% is *very high* under 50 and only
*high* at 72. The stated reason is that «Age is the major driver of CVD risk»
[@esc2021], so a single fixed threshold would
over-treat the old and under-treat the young.

**Transportability applies to the baseline estimate, not only to the treatment effect.** A risk read
off the wrong regional chart is wrong by more than most interventions move — and the choice of
instrument moves it too. The older US Pooled Cohort Equations overpredict: PREVENT's derivation put
the overestimate at about **50%** (calibration slope 0.50–0.54 against a well-calibrated \~1.0). A person
the Pooled Cohort Equations placed *at* the classic 7.5% statin-decision threshold reads about **4.9%
(women) or 3.7% (men)** on PREVENT — below the line, with nothing about the person having changed
[@khan2024]. Switching the model moves whole groups on and off
treatment-eligible, so the number is only as good as the model that fits your population.

Two limits bound any read-off. Base SCORE2 **excludes people with diabetes** (a diabetes-specific
extension exists); and the ESC category flips on case inputs a stratum does not contain — smoking
status, a blood-pressure band, a cholesterol band, a region — so the same broad stratum can land in
different categories once those are filled in.

## Two reasons a recommendation differs by group — only one is cheap

A recommendation can legitimately differ between groups for two very different reasons, and they carry
opposite evidential burdens. Keeping them apart is the load-bearing skill of this whole guide
-> [[Baseline Risk and the Relative-Absolute Split]].

### Route (a) scales the arithmetic; route (b) changes the treatment

**Route (a) — differing baseline risk.** The relative effect stays fixed; only the absolute benefit
changes, because it is that fixed reduction times a different starting risk. This needs **prognostic
information only — no subgroup claim at all.** It is the safe workhorse, and most legitimate
stratification is nothing more than this.

**Route (b) — differing relative effect (effect modification).** The treatment genuinely works
differently in the subgroup — a different *ratio*, not just a different absolute number. This needs
**positive interaction evidence**, and it is the false-positive generator: mechanistic plausibility is
not enough.

The trap is reading route (a) as route (b). A benefit that is larger in absolute terms for a
higher-risk group is the *expected* consequence of a constant relative effect — arithmetic — not
evidence the treatment "works differently." GRADE routes this explicitly: varying absolute benefit
across strata warrants **differences in the recommendation, not a downgrade of the evidence for
inconsistency**, and consistency itself is judged on relative measures
[@grade]. ESC states the useful half out loud: «even a small absolute
reduction in LDL-C may be beneficial in a high- or very-high-risk patient»
[@esc2021] — the inference that licenses stratifying a
recommendation with no subgroup claim -> [[Baseline Risk and the Relative-Absolute Split]].

### A real route (b) has to be shown, per outcome

Genuine effect modification does happen, and it looks like a modified *ratio* with a significant
interaction test. In the Diabetes Prevention Program, **metformin's relative reduction itself changed
across strata** — from about 3% in leaner adults (BMI under 30) to 53% in the most obese (BMI 35 or
over), a significant test of heterogeneity across strata (the trial's own report notes these subgroup
tests were not prespecified) — while the lifestyle arm was broadly constant
[@knowler2002]. The decision follows: prescribe
metformin selectively, recommend lifestyle broadly.

The strongest version pairs the interaction test with a mechanism-derived control. Vitamin D cut
diabetes in prediabetic adults **below** the median BMI (HR 0.74, CI 0.60–0.90) but **not** above it
(1.01, 0.84–1.22; P for interaction 0.023) — and the active analogue eldecalcitol, which bypasses the
named mechanism, showed *no* BMI modification (P = 0.82), exactly as the mechanism predicts
[@pittas2023vitamindipd]. That built-in negative control is
far stronger evidence than a lone significant interaction.

And the discipline cuts the other way just as hard. A pooled analysis of two dementia-prevention
trials (5,205 participants), with a data-driven search free to combine any factors, found **no
responder subgroup** — the overall effect was null (HR 0.98) and null in every one of its eleven
prespecified subgroups [@coley2025].
The responders the personalized story needed did not exist. **Effect modification is real sometimes;
the rule is that it must be shown — for the specific outcome — not assumed in either direction.**

### An extra test earns its place only in the grey zone

An extra test is a candidate for moving your estimate, and ESC sets a bar few clear. Two constraints
do most of the work: a modifier matters **only near a decision threshold** — a test that cannot move
you across a line cannot change what you do, however strong its association — and a modifier's headline
relative risk **vastly overstates** what it does to your absolute risk. A third rule keeps it honest: a
marker studied only in the direction of harm cannot be used to reassure ->
[[Risk Modifiers - When Extra Information Changes a Risk Estimate]].

A coronary-calcium score of zero is the worked de-risker. In the MESA cohort, **44% of statin-eligible
people had a calcium score of zero**. Among them a zero score carried an ASCVD rate of **4.2 versus
11.2 per 1,000 person-years** with any calcium, and the modeled ten-year number-needed-to-treat in the
recommended group ran **64 at zero calcium versus 28 at a score above 100**. So absence of calcium
reclassified roughly half of candidates as not eligible
[@nasir2015].

Three bounds keep this from hardening into a rule. A zero score is **low risk, not no risk** — 4.2 per
1,000 is not zero. The number-needed-to-treat is **modeled**: it applies a borrowed relative reduction
to observed rates, since no trial has randomized statins by calcium score. And the reassurance is
**age-relative** — a zero score informs only where a non-zero score was expected
-> [[Statins for Primary Prevention and the Power of Zero CAC]].

## A low ten-year risk can hide a high lifetime one

A ten-year horizon systematically understates the case for acting in a younger person, and ESC says so
plainly: «The 10-year CVD risk in relatively young, apparently healthy people is on average low, even
in the presence of high risk factor levels, but the lifetime CVD risk is in these circumstances very
high» [@esc2021]. Women under 50 and men under 40 are
almost always low over ten years whatever their risk factors.

The same person looks different over a longer window. On the PREVENT equations, a 50-year-old woman
with a suboptimal risk-factor profile (high cholesterol, treated blood pressure of 160 mmHg, obesity)
reads about **5.4% over ten years — reassuringly low — and 31% over thirty**, alarming [@khan2024]. The better currency for a
long-horizon decision is **CVD-free years gained**, built by ESC as exactly this guide's conversion — a
lifetime baseline risk multiplied by a relative effect, expressed in absolute units
-> [[Lifetime Benefit - The Frame for Younger Adults]]. But it is a **modeled** quantity: no trial
follows anyone for a lifetime, and its endpoint folds in death, so competing risk makes the years
gained fall steeply with age.

The frame runs both ways and has a floor. It **treats less in the old** — lower lifetime benefit is
why the thresholds rise after 70 — and **it is not a licence to start drugs young**: below 40 ESC calls
the predictions imprecise and redirects to lifestyle. Under 50, ask for the lifetime number before you
trust a low ten-year one; below 40, the lever is how you live, not a prescription.

## When the harm scales with the benefit, higher risk stops rescuing you

Everything so far scales a *benefit* with baseline risk. But a treatment's *harm* scales too — and
when the harm runs in the opposite decision direction, **you cannot net the two into one symmetric
band; each tail has to be weighed on its own.** Aspirin in primary prevention is the clean case.

On the largest trial-level meta-analysis (13 RCTs, 164,225 people), aspirin's cardiovascular benefit
is real but small — composite CV events HR 0.89, absolute reduction **0.41%** (number-needed-to-treat
241) — and it is «modest and equally balanced by major bleeding events»: major bleeding HR 1.43,
absolute increase **0.47%** (number-needed-to-harm 210), with no reduction in death
[@zheng2019aspirin]. The bleeding harm is not
merely comparable; its absolute size marginally *exceeds* the benefit.

This is route (a), not route (b): the relative CV effect is essentially constant across strata (HR 0.87
low-risk, 0.91 high-risk, 0.90 in diabetes). Raising baseline risk raises the absolute benefit — the
usual escape hatch — **but the absolute bleeding harm rises with it**, because bleeding risk
co-travels with cardiovascular risk. In every stratum the bleeding excess equals or exceeds the CV
benefit (high-risk 0.64% versus 0.63%; diabetes 0.80% versus 0.65%)
[@zheng2019aspirin]. So **a higher-risk person
is not rescued by the arithmetic** — the escape hatch closes ->
[[Aspirin for Primary Prevention of Cardiovascular Disease]].

The guidance layer resolves the switch onto **age, not baseline risk**: USPSTF makes aspirin an
individual decision at 40–59 with a 10-year risk of 10% or more (a small net benefit), and recommends
*against* initiating it at 60 or older, because the absolute bleeding harm climbs steeply with age even
though the relative effect does not [@uspstf2022aspirin].

## What to carry away

The one habit worth keeping: never act on a relative effect alone. Convert it to an absolute number at
*your* baseline, then weigh that against the harms and the cost.

- **Ask for the absolute benefit at your own starting risk.** A relative effect is a property of the
  treatment; the absolute one is what it does for you, and it is the only form a decision can use.
- **Get the baseline from a model fit to your population, and read the threshold, not the percentage.**
  The same estimate licenses different actions at different ages, and a different instrument can move
  you across the line with nothing about you changed.
- **Stratify freely on baseline risk (route a); demand shown interaction evidence before believing a
  treatment works differently in your subgroup (route b).** Route (a) needs no subgroup claim; route
  (b) is where false positives live.
- **An extra test is worth it only if it can move you across a threshold and reassures as well as
  alarms.** A zero calcium score de-risks the *decision*, not the biology, and its benefit is modeled.
- **Under 50, ask for the lifetime number before trusting a low ten-year one** — but below 40 the lever
  is lifestyle, not a drug.
- **When a harm scales opposite the benefit — aspirin's bleeding — higher risk does not rescue the
  choice.** Weigh each tail on its own; do not average them into one comfortable band.

**This guide grades the reasoning, not the outcome.** Nothing here checks a choice against what
actually happened to the person who made it — it verifies only whether a well-informed advisor would
convert and weigh the evidence this way, never whether the person ended up better off. The lifetime
and modeled-NNT figures are the sharpest form of that open loop: no trial has followed anyone for a
lifetime, and none has randomized statins by calcium score.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | 'When an intervention has a known relative effect, what does the evidence say about how much it actually helps a given person — how does absolute benefit track baseline risk when the relative effect is roughly constant, when does stratifying by baseline risk change the decision, and how should a person read a relative risk reduction against their own starting risk?' |
> | **Evidence included** | 12 sources — 5 gold, 6 high |
> | **Overall certainty** | **High** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | All sources are gold or high tier. |
> | **Last updated** | 2026-09-09 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Baseline%20Risk%20and%20Absolute%20Benefit.md) |

## References

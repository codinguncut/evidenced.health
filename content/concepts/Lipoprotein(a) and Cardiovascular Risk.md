---
type: concept
aliases: ["Lp(a)", "Lipoprotein a", "Lipoprotein little a", "apo(a)"]
authors: [Erqou, Sebhat; Kaptoge, Stephen; Perry, Philip L; Di Angelantonio, Emanuele; Thompson, Alexander; White, Ian R; Marcovina, Santica M; Collins, Rory; Thompson, Simon G; Danesh, John; Kamstrup, Pia R; Tybjaerg-Hansen, Anne; Steffensen, Rolf; Nordestgaard, Borge G; Burgess, Stephen; Ference, Brian A]
sources: [Emerging Risk Factors Collaboration - Lipoprotein a Vascular Disease 2009, Kamstrup - Lipoprotein a Mendelian Randomization, Burgess - LPA Variants Coronary Disease Mendelian Randomization 2018]
cluster: lipoprotein-a
nucleus: true
question: "Does lipoprotein(a) concentration change cardiovascular risk, and what does knowing a person's level change about what they should do?"
relationships:
  related_to: ["LDL ApoB and Cumulative Exposure", "LDL Lowering and Cardiovascular Events", "Surrogate Outcomes", "Baseline Risk and the Relative-Absolute Split"]
confidence: medium
created: 2026-09-10
updated: 2026-09-18
self_critiqued: 2026-09-18
---

Lipoprotein(a) is an LDL-like particle in which one apolipoprotein B100 molecule is
covalently linked to apolipoprotein(a) [@erqou2009lpa].
Its concentration is largely genetically set (by the *LPA* gene), stable within a person
over years, and not meaningfully moved by the diet/activity/weight levers this wiki is built
around. So it is not itself a modifiable exposure. It earns a page for a different reason: it
is a **baseline-risk stratifier** that changes the *absolute* payoff of the lipid-lowering
levers a person **can** pull -> see the decision hook below.

## The observational association (what ERFC established)

The Emerging Risk Factors Collaboration pooled individual participant data on 126 634 people
in 36 prospective studies, over 1.3 million person-years, having excluded anyone with known
CHD or stroke at baseline [@erqou2009lpa].
Higher usual Lp(a) tracked higher vascular risk, and the association was **broadly continuous
in shape** (no threshold located; a *potentially curvilinear* rise at the high end is noted,
not resolved).

Effect sizes are stated **per 3.5-fold higher usual Lp(a) concentration (ie, per 1 SD)**, after
regression-dilution correction:

| Outcome | Adjusted risk ratio per 1-SD (3.5-fold) higher usual Lp(a) | 95% CI |
|---|---|---|
| CHD (age/sex-adjusted) | 1.16 | 1.11-1.22 |
| CHD (further adj. for lipids + conventional risk factors) | 1.13 | 1.09-1.18 |
| Ischemic stroke | 1.10 | 1.02-1.18 |
| Nonvascular mortality (aggregate) | 1.01 | 0.98-1.05 |
| Cancer deaths | 1.00 | 0.97-1.04 |
| Nonvascular deaths other than cancer | 1.00 | 0.95-1.06 |

[@erqou2009lpa]

Two features carry the decision, not the point estimates:

- **The effect is modest and vascular-specific.** ERFC's own summary: «Under a wide range of
  circumstances, there are continuous, independent, and modest associations of Lp(a)
  concentration with risk of CHD and stroke that appear exclusive to vascular outcomes.»
  [@erqou2009lpa]
  The three nonvascular rows are flat (CIs straddle 1.00) — the risk is confined to vascular
  disease, not a general frailty marker.
- **It survives adjustment for the standard lipids.** The CHD RR falls only from 1.16 to 1.13
  after adjusting for non-HDL cholesterol and other conventional risk factors — Lp(a) adds risk
  information *beyond* a standard lipid panel. Overall it is only about **one-quarter as strong
  as non-HDL cholesterol** for CHD [@erqou2009lpa].

## The decision hook — a route-(a) baseline-risk multiplier

Because Lp(a) is essentially unmodifiable by lifestyle, its value is not a new lever but a
**baseline-risk shift** (transportability route (a): absolute benefit scales with baseline risk
even when the relative effect of the *available* intervention is unchanged, with no subgroup
claim required). ERFC states the consequence directly: because the Lp(a)-CHD association is
similar at every level of non-HDL cholesterol, «the absolute benefits of cholesterol lowering
should be greater if Lp(a) concentration is high (or when absolute risk is high for some other
reason).» [@erqou2009lpa]

So the decision-change is: a known-high Lp(a) **up-weights the apoB/LDL-lowering lever**
[[LDL ApoB and Cumulative Exposure]] — the same diet, and the drug comparators (statins,
ezetimibe), buy more absolute risk reduction in a person whose absolute risk is raised by high
Lp(a). It does not tell that person to do anything Lp(a)-specific with lifestyle, because there
is nothing lifestyle does to Lp(a). This keeps Lp(a) firmly a **Layer-2 prognostic input**, not
a Layer-1 exposure of its own.

## The causal leg — Mendelian randomization (now held)

ERFC is an **observational** IPD meta-analysis, so its RRs are risk *associations*, corrected for
regression dilution but still open to residual confounding. The causal magnitude is a separate
question that source cannot answer, and it flags the direction itself: the *LPA*-gene variant
studies, taken with these findings, are «consistent with the existence of a causal relationship»
and «interventions capable of much more powerful and specific Lp(a) lowering than currently
available may be required to demonstrate any vascular benefits in randomized trials.»
[@erqou2009lpa]

That causal leg is now **held**, via a Mendelian-randomization / instrumental-variable study of
three disjoint Copenhagen cohorts (CCHS prospective, CGPS cross-sectional, CIHDS case-control),
using the *LPA* KIV-2 size polymorphism as the genetic instrument — the number of KIV-2 repeats
correlates inversely with Lp(a) level and explained 21% and 27% of Lp(a) variation in the two
general-population samples
[@kamstrup2009lpamr]. The instrument avoids
reverse causation and confounding by construction (genotype is fixed at conception and did not
differ by measured cardiovascular risk factors), so a KIV-2-genotype/MI association consistent with
the genotype's effect on Lp(a) is evidence of a causal Lp(a)->MI relationship
[@kamstrup2009lpamr].

- **Genetic effect exceeds observational — the prediction CONFIRMED.** On instrumental-
  variable analysis, genetically-elevated Lp(a) gave an HR for MI of **1.22 (95% CI 1.09-1.37) per
  doubling** of Lp(a), while the observational Cox HR **per doubling** of plasma Lp(a) in the same
  cohort was **1.08 (95% CI 1.03-1.12)** — the IV estimate was **nominally larger** than the
  observational one [@kamstrup2009lpamr]. Both
  figures are on the *same* per-doubling scale, so this comparison is internal to the study; do
  **not** read either against ERFC's per-3.5-fold (1-SD) RRs above, which are a different exposure
  contrast. The prior directional expectation — that a lifelong, undiluted, unconfounded genetic
  exposure would show a *larger* effect than a single-measurement observational association — was
  recorded before the evidence landed and is **borne out** (the lifelong-exposure and
  small-isoform-harm explanations for the gap are the source's own
  [@kamstrup2009lpamr]).
- **What it establishes, and what it does not.** «Conclusion These data are consistent with a
  causal association between elevated lipoprotein(a) levels and increased risk of MI.»
  [@kamstrup2009lpamr] The authors are explicit
  that this is consistency-with-causality, not closure of the treatment question: final proof of
  causality still requires randomized clinical trials demonstrating reduced MI risk in response to
  Lp(a)-lowering therapy [@kamstrup2009lpamr].
  **The loop therefore stays partly open:** causal *existence* is established; whether *lowering*
  Lp(a) reduces events is not — no Lp(a)-lowering outcome trial is held. The dose-response MR that
  sizes *how much* lowering would be needed is now held -> see the magnitude leg below.
- **Transportability caveat.** Kamstrup studied only white individuals of Danish descent, and Lp(a)
  levels differ markedly between ethnic groups, so the causal *magnitude* may not transport to other
  populations [@kamstrup2009lpamr].

### The magnitude leg — how much lowering is needed (type-F refinement)

Kamstrup establishes that Lp(a) *causes* MI; it does not size *how much* lowering would buy a
clinically meaningful benefit. That magnitude is now held, via a pooled Mendelian-randomization
analysis: individual-participant data from 5 studies (48 333 participants of European descent,
including 20 793 with CHD) plus external validation from summarized data of 48 studies
(CARDIOGRAMplusC4D: 62 240 CHD cases, 127 299 controls)
[@burgess2018]. A
43-variant *LPA* genetic score (explaining 51-63% of Lp(a) variance) was the instrument, and the
exposure-outcome association was **linearly proportional to the absolute change in Lp(a) mass
concentration** rather than to the proportional change — so the decision-relevant metric is mg/dL
lowered, not percent lowered
[@burgess2018].

**The headline magnitude.** Each 10-mg/dL lower genetically-predicted Lp(a) was associated with a
5.8% lower CHD risk (OR 0.942; 95% CI 0.933-0.951); external replication gave 5.2% (OR 0.948;
0.941-0.955)
[@burgess2018]. Using
the *same* per-10-mg/dL genetic-score design for LDL-C, each 10-mg/dL lower LDL-C gave a 14.5% lower
CHD risk (OR 0.855; 0.818-0.893). So mg-for-mg, Lp(a) is roughly a **quarter as potent as LDL-C**: a
38.67-mg/dL (1-mmol/L) LDL-C reduction has the same association with CHD risk as a **101.5-mg/dL
(95% CI 71.0-137.0) Lp(a) reduction** (external validation 109.1 mg/dL; 89.0-133.1)
[@burgess2018]. The
Lp(a) effect is **independent of LDL-lowering**: stratifying on the statin-target *HMGCR* variant
(rs12916) left the per-10-mg/dL Lp(a) OR nearly identical across the three genotype groups (0.945 /
0.939 / 0.945; P = .79), and the same held for PCSK9- and ezetimibe-mimicking variants
[@burgess2018].

The Lp(a)-vs-LDL-C potency ratio is a **within-source** comparison, which is why it is safe to state:

| Parameter | Lp(a) (Burgess) | LDL-C (Burgess) | Same quantity? |
|---|---|---|---|
| Contrast | per 10-mg/dL genetically-predicted lower | per 10-mg/dL genetically-predicted lower | YES — identical scale/design |
| Instrument | 43-variant LPA score | LDL-C genetic score | both genetic scores, same MR method |
| Outcome | CHD (odds ratio) | CHD (odds ratio) | YES |
| Estimate | OR 0.942 (0.933-0.951) | OR 0.855 (0.818-0.893) | comparable -> 2.63 mg/dL Lp(a) per 1 mg/dL LDL-C |

The ratio holds because **both estimates come from Burgess on the identical per-10-mg/dL
genetic-score contrast against CHD**. What must NOT be equated numerically are the
*cross-source* Lp(a) figures: Burgess reports a **per-10-mg/dL OR**, Kamstrup a **per-doubling HR**
(1.22 for MI), and ERFC a **per-3.5-fold / 1-SD RR** (1.16 for CHD) — three different exposure
contrasts on two different outcome scales, so their point estimates do not sit on a common axis and
are not compared here.

**Why this is type-F, not a third independent (E) route.** Burgess shares authors with *both* held
sources — Kamstrup, Tybjaerg-Hansen and Nordestgaard with the Kamstrup MR, and Di Angelantonio,
Danesh and Butterworth (via EPIC-CVD) with the ERFC observational IPD
[@burgess2018] — and it
re-uses the same Copenhagen cohorts and EPIC-CVD data. So it is **not** an independent convergence:
it *bounds and operationalizes* the already-held causal claim with a dose-response magnitude
(amplify-attenuate refinement), and is marked **type-F**, NOT `[E-independent]`.

### Why the null Lp(a)-lowering trials do not overturn causality

Burgess reconciles the causal genetics with the disappointing lowering trials. The completed RCTs
(niacin, CETP inhibitors, PCSK9 inhibitors) lowered Lp(a) by only 20-35%, and «The median Lp(a)
concentration among participants enrolled in these trials was approximately 12 to 20 mg/dL», so «a
30% reduction in Lp(a) concentration would translate into only a 3- to 6-mg/dL absolute reduction»
— far below the \~100-mg/dL absolute change the MR implies is needed
[@burgess2018]. The
predicted event reduction scales with absolute lowering: \~100 mg/dL -> \~22-25% CHD reduction over
3-5 years, 80 mg/dL -> \~18-20%, 50 mg/dL -> \~10-12%, so «only persons with very high Lp(a)
concentrations are likely to benefit substantially from therapies that reduce Lp(a) concentration»
[@burgess2018].

So the null trials are **consistent with under-dosing, not with Lp(a) being non-causal**: «The
clinical benefit of lowering Lp(a) is likely to be proportional to the absolute reduction in Lp(a)
concentration»
[@burgess2018]. The
decision-change is for **trial design and screening** (enroll people with baseline Lp(a) >= 90-100
mg/dL; target 80-90% lowering), not yet for treatment.

**But the loop is STILL open, and Burgess does not close it.** The \~22-25% event reduction is a
**predicted** trial estimate — modeled by porting the LDL-C statin-trial relationship onto Lp(a)
under the explicit assumption that the two lipoproteins have similar cumulative CHD associations
over time — not an observed outcome
[@burgess2018]. No
Lp(a)-lowering outcome trial has yet achieved a \~100-mg/dL reduction and shown event reduction, and
an MR is not an RCT. Two further limits: the estimate is **agnostic to mechanism** (if Lp(a)-lowering
drugs act partly through non-Lp(a) channels, smaller absolute reductions might suffice)
[@burgess2018], and all
participants were of **white European ancestry**
[@burgess2018] — so the
magnitude may not transport to other ancestries (the source does not list this among its own stated
limitations).

### Two independent routes to the same causal claim [E-independent]

The Lp(a)->vascular-risk claim is now reached by two **genuinely independent** routes: ERFC's
observational IPD meta-analysis (Cambridge/Danesh school, 36 pooled prospective studies) and
Kamstrup's genetic instrumental-variable analysis (Copenhagen/Nordestgaard lab, three Danish
cohorts). The author lists are disjoint, and the schools, methods (observational pooling vs genetic
IV), and datasets do not overlap, so this is type-E independent-backing robustness, not a
same-pipeline echo — the convergence raises confidence that the association reflects a real causal
effect rather than shared observational confounding. Corroborated by Kamstrup et al. (JAMA 2009,
chunk 01). *(The now-held Burgess 2018 MR is NOT a third E route: it shares
Kamstrup/Tybjaerg-Hansen/Nordestgaard with Kamstrup and Di Angelantonio/Danesh/Butterworth with
ERFC, and re-uses the same cohorts — so it lands as the F-refinement on magnitude above, not as
independent backing.)*

**Confidence held at `medium`, re-judged.** The causal-*existence* claim is now well-warranted: two
independent gold/high routes (observational IPD + genetic IV) converge, which strengthens the
warrant over the single-source opener. But the page's confidence spans the whole
decision, and the binding cap is the open treatment loop — no Lp(a)-lowering intervention is shown
to reduce events — so the warrant does not yet support a validated *treatment target*, and
`medium` is retained rather than raised. Burgess 2018 adds the **dose-response magnitude** (a type-F
refinement, not a third independent route) and explains why the null lowering-RCTs are uninformative,
but it does **not** lift the cap: its 22-25% event-reduction figure is a *predicted* trial estimate,
not an observed one, so `medium` still holds.

## Vascular-specificity — a companion contrast, NOT independent corroboration

Lp(a)'s confinement to vascular outcomes (null for cancer and other nonvascular death) contrasts
with the broader marker C-reactive protein. That contrast is a useful specificity note, but it
comes from the **same** collaboration (the ERFC CRP IPD, erfc2010crp), so it is **not**
independent (type-E) backing — a shared body/analysis pipeline defeats independence by
construction. Treat it as a same-source companion observation, not as convergent evidence
. -> [[Surrogate Outcomes]] (Lp(a) as a risk marker vs a steering target).

## What this page does NOT establish

- The nucleus of a `lipoprotein-a` cluster now holds **three sources** — the observational
  association (gold-tier IPD), the genetic causal leg (Kamstrup MR), and the dose-response magnitude
  (Burgess MR, type-F). The **shape** is now partly resolved (linear in absolute Lp(a) over the
  studied range; the >200-mg/dL 3-to-4-fold lifetime-risk figure is an extrapolation, not directly
  observed). What remains open, above all, is any **Lp(a)-lowering treatment benefit** (hence
  `confidence: medium`).
- **The loop is open.** No Lp(a)-lowering intervention is shown here to reduce events; the page
  establishes a prognostic association, a causal effect on MI, the absolute-lowering magnitude needed,
  *and* why the existing null trials under-dosed — but **not** a validated treatment target. The
  predicted 22-25% event reduction at \~100-mg/dL lowering is modeled, not observed. Causal existence
  plus a dose-response estimate is still not treatment efficacy.

## References

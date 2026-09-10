---
type: concept
aliases: ["Lp(a)", "Lipoprotein a", "Lipoprotein little a", "apo(a)"]
authors: [Erqou, Sebhat; Kaptoge, Stephen; Perry, Philip L; Di Angelantonio, Emanuele; Thompson, Alexander; White, Ian R; Marcovina, Santica M; Collins, Rory; Thompson, Simon G; Danesh, John]
sources: [Emerging Risk Factors Collaboration - Lipoprotein a Vascular Disease 2009]
cluster: lipoprotein-a
nucleus: true
question: "Does lipoprotein(a) concentration change cardiovascular risk, and what does knowing a person's level change about what they should do?"
relationships:
  related_to: ["LDL ApoB and Cumulative Exposure", "Surrogate Outcomes", "Baseline Risk and the Relative-Absolute Split"]
confidence: medium
created: 2026-09-10
updated: 2026-09-10
self_critiqued: 2026-09-10
---
<div class="recent-page" data-last-updated="2026-09-10"></div>


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

## The observational-vs-causal gap (a named G-gap)

ERFC is an **observational** IPD meta-analysis, so its RRs are risk *associations*, corrected for
regression dilution but still open to residual confounding. The causal magnitude is a separate
question this source cannot answer, and it flags the direction itself: the *LPA*-gene variant
studies, taken with these findings, are «consistent with the existence of a causal relationship»
and «interventions capable of much more powerful and specific Lp(a) lowering than currently
available may be required to demonstrate any vascular benefits in randomized trials.»
[@erqou2009lpa]

- **Directional inference, not held evidence.** Lp(a) is the textbook case where the
  genetically-instrumented (Mendelian-randomization) effect is expected to *exceed* the
  observational association, because a lifelong genetic exposure is unconfounded and undiluted
  by within-person variation. The wiki does not yet hold that evidence, so this remains a
  directional expectation, marked as inference.
- The causal leg — Mendelian randomization and any Lp(a)-lowering outcome trial — is
  **not held**. — the genetic
  evidence that would convert this association into a causal effect estimate and confirm whether
  the true effect is larger than 1.13/1-SD.

## Vascular-specificity — a companion contrast, NOT independent corroboration

Lp(a)'s confinement to vascular outcomes (null for cancer and other nonvascular death) contrasts
with the broader marker C-reactive protein. That contrast is a useful specificity note, but it
comes from the **same** collaboration (the ERFC CRP IPD, erfc2010crp), so it is **not**
independent (type-E) backing — a shared body/analysis pipeline defeats independence by
construction. Treat it as a same-source companion observation, not as convergent evidence
. -> [[Surrogate Outcomes]] (Lp(a) as a risk marker vs a steering target).

## What this page does NOT establish

- It is a **single-source (provisional) opener** for a new `lipoprotein-a` cluster; the
  observational association is gold-tier IPD, but the causal effect, the shape at high
  concentrations, and any Lp(a)-lowering treatment benefit are open (hence `confidence: medium`).
- **The loop is open.** No Lp(a)-lowering intervention is shown here to reduce events; the page
  establishes a prognostic association and a baseline-risk implication, not a validated treatment
  target.

## References

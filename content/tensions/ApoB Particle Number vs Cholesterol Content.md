---
type: tension
question: Within apoB-containing lipoproteins, is the causal driver of coronary artery disease the particle NUMBER (apoB) or the CHOLESTEROL CONTENT those particles carry (non-HDL-C)?
aliases: [ApoB vs non-HDL-C, Particle Number vs Cholesterol Content, Non-HDL-C vs ApoB, Cholesterol Content vs Particle Concentration]
authors: [Marston, Nicholas A; Helgadottir, Anna]
sources: [Marston - ApoB Containing Lipoproteins Risk 2022, Helgadottir - Cholesterol Not Particle Concentration]
cluster: lipids
confidence: medium
relationships:
  related_to:
    - LDL Lowering and Cardiovascular Events
    - Surrogate Outcomes
  contradicts:
    - LDL ApoB and Cumulative Exposure
created: 2026-08-19
updated: 2026-08-19
self_critiqued: 2026-08-19
---

**The narrow, live disagreement — NOT apoB-vs-LDL-C.** Both camps agree apoB-containing particles are
causal for ASCVD and that apoB / non-HDL-C beat LDL-C as risk markers in the discordant stratum
(-> [[LDL ApoB and Cumulative Exposure]]). What they clash on is a *finer* question that only becomes
answerable once apoB and non-HDL-C are separated: for two people with the **same apoB particle count**,
does the **cholesterol those particles carry** (non-HDL-C) still move CAD risk? The held nucleus view
(Marston) says no — number is the whole story. An independent MR (Helgadottir) says yes — and that the
number, holding content fixed, does *not* move risk. — this framing (which leg is live, what
both camps concede) is the wiki's; the source-attributed claims sit in the sections below.

## Underlying question

apoB (particle number) and non-HDL-C (cholesterol content of all apoB particles) are \~0.9 correlated, so
they usually move together and cannot be told apart. The question is which one **carries the causal
signal** when they are forced apart — which is also *which secondary target to steer* (ESC/EAS 2019
prefers apoB; both beat LDL-C). — the framing of the underlying question is the wiki's; the
high apoB/non-HDL-C correlation is well-established lipid-panel background, not a figure from either source.

## The parameter table — is this a real joined issue?

The comparison Marston makes and the comparison Helgadottir makes are the **same contrast** (apoB particle
number vs non-HDL-C cholesterol content), reached by **different designs** that give **opposite verdicts** —
a genuine type-D clash, not two different questions.

| Parameter | Marston 2022 (number camp) | Helgadottir 2022 (content camp) | Same quantity? |
|---|---|---|---|
| Contrast tested | apoB vs non-HDL-C vs TG for MI | apoB vs non-HDL-C for CAD | **YES** — both isolate apoB-number vs non-HDL-C-content |
| Design | observational, mutual adjustment: UK Biobank (n=389,529) + 2 statin RCTs (n=40,430) | genetic MR: 235 variants, exploiting 82/235 (35%) with *discordant* effects on the two traits | **NO — the crux of the friction** (confounding present vs largely removed) |
| Verdict, apoB held | «only apoB was associated (adjusted hazard ratio [aHR] per 1 SD, 1.27; ... 1.15-1.40)»; non-HDL-C fell to NS [@marston2022] | apoB beta = -0.040 (P=0.69) once non-HDL-C added, non-HDL-C beta = 0.44 (P=3.9x10^-5) once apoB added [@helgadottir2022] | **Opposed verdicts on the SAME contrast** |
| Estimand | adjusted HR per SD, observed levels | MR beta / log-OR per SD, genetically-predicted lifelong | different metric, same conceptual target |
| Outcome | myocardial infarction | coronary artery disease | \~same (ASCVD hard events) |
| apoB particles causal? | yes | yes — «The causal contribution of apolipoprotein B (apoB) particles to coronary artery disease (CAD) is established» [@helgadottir2022] | **YES — the agreement floor** |

The fourth column is `YES` on the contrast and on the causal floor; the one `NO` (design) is *why* the
verdicts differ, not a sign they answer different questions. Issue joined -> file the tension.

## View A — particle NUMBER carries the risk, content does not (Marston 2022; the held nucleus view)

Entering apoB, non-HDL-C and TG simultaneously in a large cohort, only apoB survived. Marston's conclusion
is that particle count is the causal quantity *independent of what the particles carry*:

> «risk of MI was best captured by the number of apoB-containing lipoproteins, independent from lipid
> content (cholesterol or TG) or type of lipoprotein (LDL or TG-rich). This suggests that apoB may be the
> primary driver of atherosclerosis and that lowering the concentration of all apoB-containing lipoproteins
> should be the focus of therapeutic strategies.»
> [@marston2022]

This is the held view on [[LDL ApoB and Cumulative Exposure]] and [[LDL Lowering and Cardiovascular Events]]
(*particle NUMBER, not TYPE or CONTENT, carries the risk*), corroborated in the number camp by
Richardson's and Zuber's multivariable MR that apoB beats **LDL-C**.

## View B — cholesterol CONTENT carries the risk, number does not (Helgadottir 2022)

Helgadottir separates the two traits with genetics rather than statistical adjustment. 82 of 235 apoB
variants have **discordant** effects on non-HDL-C vs apoB (different cholesterol mass per particle),
splitting into non-HDL-C-main-effect (N=47) and apoB-main-effect (N=35) groups. Regressing each group's
CAD effect on its apoB effect gives the load-bearing proportionality test:

> «the increase in log(OR) per SD change in apoB was 71% greater for non-HDL-C main- effect variants than
> apoB main-effect variants, showing that CAD risk conferred by apoB is dependent on the associated
> cholesterol amount. In contrast, non-HDL-C effects did not associate differently with CAD risk between
> the main-effect groups (P =0.56)»
> [@helgadottir2022]

So CAD risk tracks non-HDL-C consistently, but the risk per apoB particle *changes with how much
cholesterol the particle carries* — the signature of content, not count, being causal:

> «for individuals with equal levels of non-HDL-C, the number of apoB particles it is carried on does not
> influence the development of CAD.»
> [@helgadottir2022]

**Helgadottir directly attributes the observational apoB signal (View A) to confounding** — the explicit
joining of the issue:

> «Some epidemiological studies indicate that among people with the same non-HDL-C levels, the ones with
> higher apoB particle count would be at greater CAD risk. However, our study indicates that higher
> observed risk would not be due to apoB par­ ticle concentration, but because of confounding with other
> risk factors.»
> [@helgadottir2022]

Independence is clean: deCODE (Iceland) + Danish DBDS, with **no Ference, Ala-Korpela, Marston, Zuber, or
Richardson** among the authors — so this is a genuinely outside-the-programme dissent from the
apoB-particle-number camp, which is what gives the tension its weight (it is not a same-school artifact).

## Hidden insight

 — this section is the wiki's own reasoning across the two sources; no single source states it.
The robust, multi-source result — apoB/non-HDL-C beat **LDL-C** — is untouched. What this exposes is that
the *finer* claim layered on top of it, that **particle NUMBER carries risk independent of cholesterol
CONTENT**, rests on **observational mutual-adjustment of two \~0.9-correlated traits**, which cannot
separate them cleanly. A design built to break the correlation — genetic variants with discordant
effects — flips the verdict onto cholesterol content. This is the [[Surrogate Outcomes]] / MR-vs-
observational discriminator biting *inside* the apoB story: co-adjusting two collinear candidates is not
the same as identifying which is causal, and the wiki should hold the number-vs-content leg as **contested**,
not settled.

## Decision relevance

- **The apoB-vs-LDL-C decision is unaffected.** Both camps say apoB / non-HDL-C beat LDL-C in the
  metabolically-impaired stratum; the *measure-beyond-LDL-C* rule on [[LDL ApoB and Cumulative Exposure]]
  stands.
- **The secondary-target choice (apoB vs non-HDL-C) is now contested.** Helgadottir argues non-HDL-C — free,
  on every standard lipid panel (total cholesterol minus HDL-C) — captures the causal signal at least as well
  as a separate apoB assay: «the guidance of non-HDL-C target levels are expected to better capture risk
  related to apoB-containing particles» [@helgadottir2022]. If it holds, the extra apoB draw buys little over non-HDL-C. This does **not** overturn the
  ESC/EAS apoB preference — it is one MR against guidance plus a lineage — but it removes the *«content is
  irrelevant»* certainty and makes non-HDL-C a defensible target.
- **The therapy-monitoring corollary:** Helgadottir's «clinical benefit ... proportional to the reduction
  in non-HDL-C, but not necessarily proportional to the reduction in apoB»
  [@helgadottir2022] predicts that a therapy which
  lowers apoB *without* proportionally lowering cholesterol content would under-deliver — a testable,
  decision-relevant divergence from the number-camp expectation.

## Status and what would resolve it

Single MR (however strong the design) vs a large observational analysis backed by the apoB-particle-number
programme — held **unresolved**, `confidence: medium`. The clairvoyant-testable resolver: an **independent
replication of the discordant-variant proportionality test** (does CAD risk track non-HDL-C but not apoB
particle number when the two are genetically separated?), and/or a **trial contrast** of an apoB-lowering
agent whose non-HDL-C effect is disproportionately small — whichever way the outcome moves settles which
quantity to target. Until then the number-vs-content leg is a filed contest, and the broader apoB causal
verdict stands.

[inferred from @helgadottir2022; @marston2022]

## References

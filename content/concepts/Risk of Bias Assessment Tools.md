---
type: framework
question: How do you assess the internal validity (risk of bias) of a single study result operationally — which instrument, which domains, and what does its verdict mean — for a randomized trial versus an observational study?
aliases: [Risk of Bias, RoB 2, ROBINS-I, RoB Tools, Risk-of-Bias Domains, Signalling Questions, Target Trial Emulation, Study-Level Bias Assessment, Conflicts of Interest in Studies]
authors: [Sterne, Jonathan AC; Higgins, Julian PT; Page, Matthew J; Savović, Jelena; Hernán, Miguel A; Reeves, Barnaby C; Boutron, Isabelle; Schünemann, Holger J; Guyatt, Gordon H; Institute of Medicine (org)]
sources: [Cochrane - Handbook for Systematic Reviews 6.5, GRADE - Handbook, NASEM - Finding What Works in Health Care]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-08-08
created: 2026-07-31
updated: 2026-08-06
relationships:
  related_to:
    - Certainty of Evidence vs Strength of Recommendation
    - Rating Certainty of Evidence
    - Upgrading Observational Evidence
    - Publication Bias and Selective Reporting
    - Indirectness of Evidence
    - Which Objective Moved This Recommendation
    - Measurement Error in Dietary Assessment
---

The fabric invokes *risk of bias* everywhere — it is one of GRADE's five downgrade domains
([[Rating Certainty of Evidence]]) — but GRADE leaves the term **unspecified as a procedure**. Cochrane
supplies the operational instruments: **RoB 2** for randomized trials and **ROBINS-I** for
non-randomized (observational) studies. This page owns the toolset.

**The unit is a single RESULT, not a study.** «The RoB 2 tool provides a framework for assessing the
risk of bias in a single result (an estimate of the effect of an experimental intervention compared
with a comparator intervention on a particular outcome)». [@cochranehandbook2024]
A study reporting five outcomes has five risk-of-bias assessments — the same outcome-centricity GRADE
imposes on certainty.

**Why a tool at all — bias is unknowable, so we grade its RISK.** «We define bias as a systematic
error, or deviation from the truth, in results» [@cochranehandbook2024],
but «it is more appropriate to consider whether a result is at risk of bias rather than claiming with
certainty that it is biased». [@cochranehandbook2024]
Modern tools deliberately isolate *bias* (internal validity) from precision, reporting quality, and
external validity — the last is [[Indirectness of Evidence]], kept separate on purpose.

## RoB 2 — the five domains for a randomized trial

Closed set; no domain may be added or removed. «The tool covers bias arising from the randomization
process, due to deviations from intended interventions, due to missing outcome data, in measurement of
the outcome, and in selection of the reported result.» [@cochranehandbook2024]

| # | Domain | What it assesses |
|---|---|---|
| 1 | Randomization process | sequence generation + allocation concealment succeeded, so groups are prognostically balanced |
| 2 | Deviations from intended interventions | contamination, switching, non-adherence (old "performance bias") |
| 3 | Missing outcome data | whether missingness depends on the true outcome value (attrition) |
| 4 | Measurement of the outcome | differential misclassification driven by assessor awareness (old "detection bias") |
| 5 | Selection of the reported result | a result cherry-picked from multiple measurements/analyses (within-study) |

**Judgement is decomposed into signalling questions → algorithm → verdict.** Each domain is answered
with factual questions taking «Yes; Probably yes; Probably no; No; No information»; an algorithm maps
the combination to a *proposed* domain judgement, overridable with justification. Three labels at
domain AND overall level: **Low risk of bias / Some concerns / High risk of bias.**
[@cochranehandbook2024]

**Roll-up is worst-domain, with upward accumulation** — not a score. «The overall risk of bias for
the result is the least favourable assessment across the domains of bias»
[@cochranehandbook2024], and «'Some concerns' in
multiple domains may lead review authors to decide on an overall judgement of 'High' risk of bias».
[@cochranehandbook2024] There is no numeric total — this
is the same anti-scale move the fabric's *quality is fit-to-question, not pedigree/rank* rule makes
(quality **scales** were abandoned because scale choice flipped meta-analysis conclusions, Jüni 1999).

**Assignment vs adherence — RoB 2 forces the choice.** Domain 2 is judged differently for «the effect
of assignment to the interventions at baseline… (the 'intention-to-treat effect')» versus «the effect
of adhering to the interventions as specified in the trial protocol (the 'per-protocol effect')».
[@cochranehandbook2024] Assignment answers a *policy*
question; adherence answers an *individual care* decision — the fabric's own layer-2/layer-3 split, in
a trial-appraisal tool.

## ROBINS-I — the seven domains for a non-randomized (observational) study

This is the instrument for the design class **most nutrition evidence sits in** (cohorts of fibre,
red meat, organic, sweeteners). Its conceptual core is the **target trial**: «considering each NRSI as
an attempt to emulate (mimic) a hypothetical 'target' randomized trial»
[@cochranehandbook2024], with bias defined as «the
systematic difference between the study results obtained from an NRSI and a pragmatic randomized
trial… that had no flaws in its conduct». [@cochranehandbook2024]
The target trial **need not be feasible or ethical** — which is exactly what lets you appraise a diet
cohort whose RCT can never be run. [@cochranehandbook2024]

| # | Domain | Phase |
|---|---|---|
| 1 | Confounding | pre-intervention |
| 2 | Selection of participants into the study | pre-intervention |
| 3 | Classification of interventions | at-intervention |
| 4 | Deviations from intended interventions | post-intervention |
| 5 | Missing data | post-intervention |
| 6 | Measurement of outcomes | post-intervention |
| 7 | Selection of the reported result | post-intervention |

The post-intervention domains overlap RoB 2; **the pre/at-intervention domains have no RCT analogue —
which is why NRSI need a different tool.** Randomization is what a cohort structurally cannot claim.

**Confounding is domain 1 and dominant.** «Confounding occurs when there are common causes of the
choice of intervention and the outcome of interest» [@cochranehandbook2024],
and it is never fully removed: «Unmeasured confounding can usually not be excluded, because we are
seldom certain that we know all the confounding domains». [@cochranehandbook2024]
The listed confounders include adiposity and socio-economic status — the exact diet-disease cohort
structure. This is the mechanism behind the fabric's *volume is not independence* rule: forty cohorts
sharing one confounding structure are not forty independent tests; they share domain 1.

**Four judgement levels — and they DIFFER from RoB 2's three.** Low / Moderate / Serious / Critical
(+ "No information"). The anchor that carries the whole appraisal is **Low**: «The study is comparable
to a well-performed randomized trial with regard to this domain».
[@cochranehandbook2024]

**The ceiling — and confounding usually blocks it.** A well-conducted NRSI tops out at "comparable to
a good RCT," and «only rarely will design or analysis features of a non-randomized study lead to a
classification of low risk of bias when studying the intended effects of interventions».
[@cochranehandbook2024] A **Critical** result «should
not be included in any synthesis».

## RoB 2 vs ROBINS-I — a within-source parameter comparison (the two are NOT interchangeable)

| Parameter | RoB 2 (chunk 10) | ROBINS-I (chunk 26) | Same quantity? |
|---|---|---|---|
| Design | randomized trial | non-randomized / observational | No — disjoint |
| Domain count | 5 | 7 | No — +confounding, +selection, +classification |
| Confounding domain | absent (randomization handles it) | domain 1, dominant | No |
| Judgement levels | Low / Some concerns / High (3) | Low / Moderate / Serious / Critical (4) | No — «These differ from the risk-of-bias judgements for the RoB 2 tool» |
| Best attainable | Low risk of bias (its top grade) | Low = «comparable to a well-performed randomized trial» (rarely reached) | No — ROBINS-I's *best* verdict is only "as good as a sound RCT" |
| Signalling-question system | Y / PY / PN / N / NI + algorithm | identical | Yes |

[@cochranehandbook2024]
**Reading consequence:** a "low risk of bias" label means different things under the two tools. Under
ROBINS-I it certifies *comparability to a good RCT* — a much higher bar than "Low" under RoB 2, and one
a diet cohort rarely clears because domain 1 caps it.

## How the tool verdict feeds GRADE certainty (the integration step)

The study-level RoB verdict is not re-judged at the body level — it feeds the GRADE risk-of-bias
domain directly. Because GRADE is a **different object** from a RoB tool, this needs the parameter
table:

| Parameter | RoB tool (Cochrane) | GRADE risk-of-bias domain | Same quantity? |
|---|---|---|---|
| Object graded | a single study result | a body of evidence, per outcome | **No** — study vs body |
| Output | Low/Some-concerns/High (RoB 2) · Low/Mod/Serious/Critical (ROBINS-I) | no / serious / very serious limitation | No — feeds in, not identical |
| Crosswalk (paraphrase; verbatim on [[Rating Certainty of Evidence]]) | — | Low → no limitation; Some concerns → no/serious; High → serious/very serious; ROBINS-I Critical → extremely serious | this IS the mapping |
| Weighting | per result | «high certainty… only when most evidence comes from studies that met the criteria for low risk of bias» | No — across-study, information-weighted |

[@cochranehandbook2024]
So the two are one-way coupled: RoB is the per-study input; GRADE certainty is the per-outcome output.
Cochrane **adopts GRADE** (Ch 14 is authored by Schünemann & Guyatt, GRADE's originators), so this is
shared-lineage **F-refinement of GRADE, never independent type-E corroboration.** Detail on the
crosswalk and the "ROBINS-I starts high, downgrade two" harmonization lives on
[[Rating Certainty of Evidence]].

## Conflicts of interest — a lens OVER the domains, not a domain (Cochrane Ch 7)

Study-level COI is real and largely invisible to the standard domains. The **funding effect**: «trials
funded by a drug or device company were more likely to have positive conclusions and statistically
significant results, and that this association could not be explained by differences in risk of bias
between industry and non-industry funded trials» (Lundh 2017, 75 studies).
[@cochranehandbook2024]

**The structural ruling: COI is NOT its own RoB domain.** «we discourage the inclusion of conflicts of
interest directly in the risk-of-bias assessment. Adding conflicts of interest to the bias tool is
inconsistent with the conceptual structure of the tool, which is built on mechanistically defined bias
domains.» [@cochranehandbook2024] COI instead acts
*through* the machinery: allocation subversion (domain 1), post-randomization exclusions (domain 3 /
missing data — occur more under industry funding, Montedori 2011), selective reporting (domain 5), AND
trial **design** — «a trial may be designed to favour an experimental drug by using an inferior
comparator drug… or by using a low dose of the comparator drug when the focus is efficacy and a high
dose… when the focus is harms». [@cochranehandbook2024]
Design choices feed GRADE *indirectness*, not RoB.

- **This is the study/review-level twin of the guideline-COI angle** ([[Which Objective Moved This Recommendation]]):
  there, non-health objectives move a *recommendation*; here, funding moves a *study result*. Different
  layer, same anti-bias discipline.
- **A THIRD COI layer — the review TEAM's own conflicts — handled by exclusion, not assessment `[2026-07-31, IOM]`.**
  Cochrane's move is to *assess* a study's COI as a lens over the bias domains; the IOM 2011 SR standard
  adds a distinct layer above it — the people *conducting the review*. Standard 2.2: «Exclude individuals
  with a clear financial conflict» (2.2.2) and exclude those whose intellectual bias «would diminish the
  credibility of the review in the eyes of the intended users» (2.2.3).
  [@nasem2011fww] So there are three distinct COI
  objects: the *study* result (this section), the *guideline* recommendation
  ([[Which Objective Moved This Recommendation]]), and the *review team* (IOM 2.2). Shared SR-methods
  lineage, so this is F-refinement, not independent corroboration. -> [[What a Trustworthy Systematic Review Requires]]
- **Declarations are a floor, not truth** — «undeclared conflicts of interest and sources of funding
  are fairly common» (only 23% of a 2016 sample declared any).
  [@cochranehandbook2024]
- **Nutrition caveat, stated because it bounds transport:** every funding-effect study Cochrane cites
  is pharmacological. Food-industry funding is a live concern, but transporting the drug-trial
  funding-effect magnitude to it is an **inference, not a cited finding**
  `[searched: fund/sponsor/industry/food/sugar across chunk 09 — no food example]`.
  [inferred from @cochranehandbook2024]

## Where these tools would sharpen a held grade (re-appraisal candidates — a G-thread)

The fabric holds observational-evidence pages whose big numbers are cohort-derived. **ROBINS-I is the
instrument that would appraise them**, and domain 1 (confounding) is where each would most likely be
capped below "comparable to a good RCT." This is a *connection*, not a re-grade — the re-grade is a
deliberate future Revisit, out of scope here.

| Held page | The observational estimate at stake | Domain most likely to bite |
|---|---|---|
| [[Dietary Fibre and Health]] | mortality/T2D RR \~0.85 (Reynolds 2019 cohorts) | 1 confounding (healthy-user), 6 measurement ([[Measurement Error in Dietary Assessment]]) |
| [[Whole Grains Refined Grains and Pulses]] | whole-grain benefit (cohort-only) | 1 confounding, 3 classification (what counts as "whole grain") |
| [[Red and Processed Meat and Cancer]] | per-serving cancer associations (Vernooij/Zeraatkar 2019) | 1 confounding, 7 selective reporting (many-model problem) |
| [[Organic vs Conventional Food]] | organic → lower cancer (Baudry 2018 NutriNet) | 1 confounding (organic buyers differ), 2 selection |
| [[Non-Sugar Sweeteners]] | sweetener → cancer cohort (Debras 2022) | ROBINS-I: 1 confounding + reverse causation, 6 measurement (Suez 2022's randomized human arm takes **RoB 2**, not ROBINS-I) |
| [[Gut Microbiome and Health]] | composition-shift → outcome cohorts | 1 confounding, 6 measurement (surrogate) |

`AWAITS` a deliberate Revisit that applies ROBINS-I domain-by-domain to Reynolds / Vernooij / Baudry —
resolved when any held observational page carries a per-domain ROBINS-I read rather than this pointer.
[inferred from @cochranehandbook2024]

## Decision relevance

- **Name the tool before trusting a "risk of bias" claim.** RoB 2 (RCT) and ROBINS-I (observational)
  are not interchangeable; a cohort assessed with an RCT tool has been mis-appraised.
- **"Low risk of bias" is tool-relative.** Under ROBINS-I it means *comparable to a good RCT* — a bar a
  confounded diet cohort rarely clears — not the same "Low" an RCT earns.
- **COI is a separate lens.** A clean five-domain RoB 2 verdict does not clear a trial of funding bias,
  which hides in design and reporting choices the domains price only partially.
- **The verdict is one-way input to certainty.** A study's RoB feeds GRADE; GRADE certainty is the
  body-level output. Don't read a per-study "High" as a body-level certainty grade.

[inferred from @cochranehandbook2024]

## Limits

- **Signalling-question algorithms give *proposed* judgements**, overridable — the tool structures
  judgement, it does not remove it (same as GRADE's own self-description).
- **The domain tables (25.3.a etc.) render as `[TABLE]` in the source**; every domain name is recovered
  from running prose, but the full signalling-question wording would need a re-read from the tool
  documentation at riskofbias.info.
- **Single-source (Cochrane) for the instruments themselves**; the GRADE-integration and COI-lens
  claims are cross-referenced to held GRADE material but the tools are described from one handbook.
  `AWAITS` a second methods source that uses or critiques RoB 2 / ROBINS-I to bank a real cross-source
  comparison.

[inferred from @cochranehandbook2024]

## References

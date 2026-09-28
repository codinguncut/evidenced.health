---
type: framework
question: What adverse outcomes does chronic proton pump inhibitor use carry, in whom, at what magnitude and certainty — and how should that size the decision to continue, deprescribe, or replace PPI therapy?
aliases: [PPI Safety, Proton Pump Inhibitor Safety, PPI Adverse Events, Proton Pump Inhibitors Harms, Long-Term PPI Use, PPI Deprescribing, Acid Suppression Safety]
authors: [Salvo, Elizabeth M; Ferko, Nicole C; Cash, Sarah B; Gonzalez, Ailish; Kahrilas, Peter J]
sources: [Salvo - Proton Pump Inhibitor Safety Umbrella 2021, Islam - Proton Pump Inhibitor Adverse Outcomes 2018]
confidence: low
relationships:
  related_to:
    - The Observational-Trial Discordance
    - Risk of Bias Assessment Tools
    - Chronic Kidney Disease and Modifiable Exposures
    - The Nocebo Component of Drug Side-Effects
    - Upgrading Observational Evidence
    - Surrogate Outcomes
    - Baseline Risk and the Relative-Absolute Split
created: 2026-09-25
updated: 2026-09-25
self_critiqued: 2026-09-25
---

Proton pump inhibitors (PPIs — omeprazole, esomeprazole, lansoprazole, pantoprazole and
relatives) are one of the most widely prescribed drug classes, and they are a **named standard
drug** in the pharmacotherapy taper: a large share of the adult population is on one, they define
major strata, and they are a default primary-care prescription. This page appraises the **harm
half** of that standing object — what chronic PPI use is *associated with*, how much of that is
likely *causal*, and what it means for a decision to continue, deprescribe, or replace the drug.
Efficacy for acid-related disease is not in question here; selection, dosing, and titration are
prescriber-zone and out of scope. (the scoping and pharmacotherapy-taper framing are the
wiki's own; the harm findings below are [@salvo2021ppi]).

**The one-line verdict:** the PPI-harm literature is large, consistent in *direction*, and
almost entirely **observational** — so it establishes association, not causation, and the single
biggest reason to distrust the causal reading is **confounding by indication** (sicker people get
PPIs). The individual effect sizes are modest, the events are rare, GRADE certainty is *very low*
for most outcomes, and the one large randomized trial nullified nearly all of them. The decision
therefore hinges not on the harm estimate but on whether there is a **benefit** to weigh it
against.

## What the umbrella found

Salvo et al pooled **42 systematic reviews with meta-analyses** (predominantly observational,
some spanning millions of patients), taking the *most comprehensive* meta-analysis per outcome to
avoid double-counting, and comparing **significance and direction only** — effect estimates were
explicitly *not* quantitatively pooled across the umbrella
[@salvo2021ppi]. The significant
associations in the most-comprehensive analyses:

| Outcome (most-comprehensive MA) | Effect (95% CI) | n |
|---|---|---|
| Hip fracture | RR 1.20 (1.14-1.28) | 2,103,800 |
| Acute kidney injury | RR 1.61 (1.16-2.22) | 2,396,640 |
| C. difficile infection | OR 1.99 (1.73-2.30) | 356,683 |
| Gastric cancer | OR 2.50 (1.74-3.85) | 943,070 |
| Fundic gland polyps | OR 2.46 (1.42-4.27) | 40,218 |

[@salvo2021ppi] Significant associations
were also reported for other fracture sites, osteoporosis, CKD/ESRD, pneumonia, enteric infections,
hypomagnesaemia, SIBO, and fall risk. **These are relative effects; the absolute risk is small.**
Only 8 of the 42 studies gave enough data to compute a number-needed-to-harm «for one or more
adverse outcomes, which ranged from 7 to 240 patients»
[@salvo2021ppi]; Salvo reads this as
evidence that «most identified adverse outcomes were generally rare»
[@salvo2021ppi]. Salvo's own summary
judgement on the associations that are statistically significant: «the effect estimates were
generally small» [@salvo2021ppi].

## What is NULL — the negative space is a finding

[@salvo2021ppi] The umbrella concluded
**no** association for several of the most-feared harms: «No associations with non-gastric cancers,
or neurological disease were concluded, with conflicting evidence for cardiovascular outcomes.»
Specifically colorectal and pancreatic cancer were null, and — directly against the popular belief
that long-term PPIs cause dementia — dementia and Alzheimer's disease were **not** significantly
associated, most of these nulls supported by meta-analyses of >100,000 patients. Gastric mucosal
atrophy was also null. This is the *no meaningful effect* evidence state (well-powered nulls), kept
distinct from *insufficient evidence*.

## Why the causal reading is weak — confounding by indication is the load-bearing caveat

The umbrella's central limitation is not analytic — it is structural. «The large amount of
observational evidence increases the risk of unrecognised bias»
[@salvo2021ppi], and because the evidence
is predominantly observational, «only association, rather than causation, can be established»
[@salvo2021ppi]. Salvo makes the
confounding argument explicit with a worked illustration of a spurious association driven by a
common cause: «ice cream consumption is associated with warm weather, as is gun violence.
Consequently, ice cream consumption is associated with gun violence. However, restricting ice
cream consumption is unlikely to impact on gun violence.»
[@salvo2021ppi] The PPI-specific form of
this is **confounding by indication**: the people prescribed chronic PPIs are sicker,
poly-medicated, and older than non-users, so they carry more of every adverse outcome for reasons
that have nothing to do with acid suppression [inferred from @salvo2021ppi] (the named mechanism the umbrella's observational base cannot exclude).

**Certainty is graded accordingly.** «Individual systematic reviews with meta-analyses were usually
considered to have very low certainty of evidence in the GRADE assessment, due to the incorporation
of predominantly observational evidence» [@salvo2021ppi], with high heterogeneity and unassessed primary-study quality driving further
downgrades. GRADE starts observational evidence at low certainty by construction
-> [[Risk of Bias Assessment Tools]], [[Upgrading Observational Evidence]].

**The mechanisms are mostly unconfirmed.** Proposed pathways exist (impaired B12/calcium/magnesium
absorption, reduced gastric acidity letting ingested pathogens survive, gastrin-driven ECL-cell
hyperplasia for gastric cancer), but «apart from the increased occurrence of enteric infections,
these proposed mechanisms for PPI-related adverse events are not supported with clinical evidence
leaving the issue of causation unresolved»
[@salvo2021ppi]. The infection channel
is the exception — it has both a direct mechanism (acid suppression -> pathogen survival) and, as
below, the one randomized confirmation.

## The randomized test nullifies nearly all of it

The decisive counter-evidence, cited within the umbrella, is a large RCT. In the COMPASS
sub-randomization (Moayyedi 2019), 17,598 patients were randomized 1:1 to pantoprazole or placebo
and tracked \~3 years for a pre-specified adverse-event list. «PPI use was not associated with any
of these adverse events with the exception of enteric infections»
[@salvo2021ppi]. A second observational
check pointed the same way on the bone mechanism: the Canadian CaMos cohort «found no association
between PPI use and bone demineralisation over 10 years, emphasising the importance of investigating
putative mechanisms of adverse events»
[@salvo2021ppi].

**This is the sharp case of the observational-trial discordance, and PPI is a *drug*, not a food.**
Unlike a dietary exposure — where a blinded trial necessarily tests a *different* exposure (an
isolate, a short swap) so a null does not refute the lifetime pattern — a PPI *can* be blinded and
randomized, and COMPASS tested the **same** exposure the cohorts did. When the commensurable
randomized test is null, the discordance resolves cleanly *toward the trial*: the observational
harm signals are very likely confounding by indication, not drug effect
[inferred from @salvo2021ppi]. The one signal both streams
agree on — enteric/GI infection — is the one to believe -> [[The Observational-Trial Discordance]].

## Duration-response

[@salvo2021ppi] Several meta-analyses
reported non-significant increases in effect with longer PPI duration (hip fracture, osteoporosis,
CKD, pneumonia, gastric cancer, cardiovascular events). Only **two** duration-response signals were
statistically significant: end-stage renal disease (rising across 1-3, 6-12, and 12-24-month bands)
and fundic gland polyps (rising when use exceeded 12 months). A duration-response gradient is a weak
positive causal cue, but it too is read off observational data and inherits the same
confounding-by-indication caveat (longer use co-travels with sicker, longer-followed patients).

## Decision relevance — the balance turns on benefit, not on the harm estimate

The operative rule from the umbrella's clinical-implications section: «Regardless of the estimated
size of the risk or the likelihood of causation, risk will always dominate a risk-benefit
assessment in the absence of benefit»
[@salvo2021ppi]. This is the whole
decision, and it splits by stratum:

- **Where there is no genuine indication** — and 25%-70% of PPI prescriptions are considered
  inappropriate (no formal diagnosis, or continued post-discharge)
  [@salvo2021ppi] — even a small, uncertain
  harm tips the balance toward **deprescribing**, because there is no benefit on the other side of
  the scale. This is the large, decision-relevant stratum: the lever is *removing an unneeded drug*,
  which has structural leverage (removes the exposure entirely) at essentially no cost.
- **Where there is a genuine indication** (severe GORD, peptic ulcer, bleeding prophylaxis,
  Zollinger-Ellison) — PPIs are «the most effective options for certain patients»
  [@salvo2021ppi], the events are rare,
  the harm is probably confounded, and the benefit is real — so PPIs should **continue**. The fear
  of fracture/kidney/dementia harm should not drive discontinuation against a real indication.

So the harm literature does not license blanket PPI avoidance; it licenses **de-adoption of
inappropriate use** and honest counselling that the widely-feared harms are mostly small,
uncertain, and probably not causal. The realistic alternatives to a PPI (H2-receptor antagonists,
lifestyle/weight-loss for reflux, surgical anti-reflux procedures) are a separate comparator
appraisal not held here.

<div class="recent-update" data-last-updated="2026-09-25">

## A constituent MA (Islam 2018) — granularity, not independence

A second PPI-harm meta-analysis, Islam 2018 (SR of 43 + MA of 28 observational studies, search to
July 2016), reaches the *same direction* on every shared outcome. **It is not independent
corroboration:** Islam is one of the 42 SR/MAs the umbrella pooled — it is listed in Salvo's
included-studies table as *«Islam et al, 2018»* (ref 25), its hip-fracture-SR constituent
[@salvo2021ppi]. Its agreement is therefore
**laundered-E** (a re-count of studies the umbrella already holds), not a type-E robustness gain, and
Salvo in fact *superseded* it — for hip fracture the umbrella chose a larger MA (RR 1.20) over Islam's.
What Islam adds is **type-F granularity** the umbrella's *significance-and-direction-only* abstraction
dropped, plus an internal worked demonstration of why the certainty grade is very low.

**Parameter table (BLOCKING — matched, individually-quoted, same-quantity column).** Islam's OR must
not be read as confirming Salvo's estimate: they are different pooled analyses, different metrics,
different n.

| Outcome | Salvo (most-comprehensive MA) | Islam (constituent MA) | Same quantity? |
|---|---|---|---|
| Hip fracture | RR 1.20 (1.14-1.28), n=2,103,800 [@salvo2021ppi] | OR 1.42 (1.33-1.57), k=9, I2=81% [@islam2018ppi] | **NO** — RR vs OR, different (smaller, superseded) pooled set |
| Acute kidney injury | RR 1.61 (1.16-2.22), n=2,396,640 [@salvo2021ppi] | OR 2.61 (1.93-3.52), k=4, I2=76% [@islam2018ppi] | **NO** — RR vs OR, different MA/n |
| Gastric cancer | OR 2.50 (1.74-3.85), n=943,070 [@salvo2021ppi] | OR 1.78 (1.41-2.25), k=2, I2=67% [@islam2018ppi] | **PARTIAL** — both OR but different, non-overlapping pooled sets; not one analysis |
| Pneumonia (CAP) | "significant" (no effect size carried) | OR 1.67 (1.04-2.67), k=7, I2=99% [@islam2018ppi] | N/A — Salvo carries no number; **Islam supplies the granularity** |
| Colorectal cancer | null | OR 1.55 (0.88-2.73) NS, k=4, I2=97% [@islam2018ppi] | CONCORDANT (both null) — laundered, Islam supplies the NS estimate |
| Pancreatic cancer | null | OR 3.53 (0.36-34.49) NS, I2=100% [@islam2018ppi] | CONCORDANT (both null) — laundered; estimate uninterpretable |

**What genuinely earns Islam its `sources:` slot (type-F, not E):**

- **Per-outcome CIs the umbrella abstracted away** for pneumonia and the cancers — a decision-thin gain
  (these outcomes were among those the COMPASS RCT nullified), but distinct content Salvo does not carry.
- **Subgroup / dose / duration structure on CAP** an umbrella-per-outcome summary structurally cannot
  hold: male OR 2.40 (1.50-3.86) vs female 0.95 (0.82-1.10); low-dose 1.67 vs high-dose 2.40; duration
  bands all raised [@islam2018ppi]. Every one
  sits on I2=99% observational pooling, so it refines — but does not rescue — an association the trial
  evidence already discounts.
- **A worked heterogeneity/instability demonstration** — Islam pooled OR/HR/RR together (all assumed to
  approximate OR), ran no sensitivity analysis, and produced I2 up to 100% and a pancreatic-cancer CI
  spanning two orders of magnitude (driven by one outlier, Lai 2014, OR 11.24). This is *internal*
  evidence for the umbrella's very-low-certainty grade: a constituent's own numbers show how fragile the
  observational pooling is [@islam2018ppi].
- **Concordant caveats** (laundered, logged not weighted): Islam itself warns *«these results should be
  interpreted with caution owing to the signiﬁcant statistical and clinical heterogeneity … and the
  inherent inability of observational studies to clarify whether the observed epidemiologic association
  is a causal effect»* and that *«Publication bias may have resulted in an overestimate»*
  [@islam2018ppi]. Its 2016 search predates
  COMPASS — it notes *«no clinical trial considering the potentially adverse effect of PPI use has yet
  been conducted»* [@islam2018ppi] — so it
  cannot make the observational-trial-discordance move; the umbrella does.

</div>

<div class="recent-update" data-last-updated="2026-09-25">

## Provenance, certainty, and conflict of interest

This page rests on a **single gold-tier umbrella review** (Salvo 2021, 42 SR/MAs); the second
`sources:` entry (Islam 2018) is one of those 42 constituents, not independent backing, so it raises
no confidence and `confidence:` stays **low** pending a genuinely independent gold source. Two
appraisal caveats bound the umbrella:

- **Umbrella double-counting.** An umbrella re-counts the primary studies pooled across its
  constituent meta-analyses, so nominal precision is overstated; Salvo mitigates this by taking one
  most-comprehensive MA per outcome, but the underlying cohorts still overlap across outcomes.
- **Funder conflict of interest — directional.** The study was funded by Ethicon Inc (Johnson &
  Johnson), and authors are employees of EVERSANA (a market-access consultancy) and J&J; the senior
  author declares industry advisory roles [@salvo2021ppi]. Ethicon manufactures surgical devices including anti-reflux alternatives to PPIs,
  so the funder has a competing product — a COI that runs *toward* emphasising PPI harm
  [inferred from @salvo2021ppi]. Notably the umbrella's actual
  conclusions run the *other* way (harms mostly small, uncertain, non-causal; the RCT nulls them),
  which is reassurance against the COI having distorted the read — but the caveat is logged
  -> [[Risk of Bias Assessment Tools]] (the funding-effect lens).

**Open loop.** This grades the *evidence* on PPI harm and its causal status; it does not close the
loop against any patient's realized outcome. A second independent gold source on PPI safety (and a
deprescribing-outcomes SR) would upgrade it
-> the deprescribing-effect question the umbrella points to but does not answer.

</div>

## References

---
type: framework
question: Does electronic-cigarette use change cardiovascular outcomes — and does the answer flip by stratum (a smoker switching vs a never-smoker starting)?
aliases: [E-Cigarettes and Heart Risk, Vaping and Cardiovascular Risk, E-Cig CV Effects, Electronic Cigarette Cardiovascular Effects]
authors: [Skotsimara, Georgia; Antonopoulos, Alexios S; Oikonomou, Evangelos; Vlachopoulos, Charalambos; Tousoulis, Dimitris]
sources: [Skotsimara - Electronic Cigarettes Cardiovascular Effects 2019]
cluster: smoking
confidence: low
relationships:
  related_to:
    - Smoking and Mortality
    - Surrogate Outcomes
    - The Insufficient-Evidence Statement
    - Baseline Risk and the Relative-Absolute Split
created: 2026-08-30
updated: 2026-08-30
self_critiqued: 2026-08-30
---

**What this page opens (provisional cell-opener).** The e-cigarette is a distinct exposure from
combustible tobacco -> [[Smoking and Mortality]], and the wiki held nothing on it. This page opens the
e-cig -> cardiovascular cell on a single moderate SR+MA [@skotsimara2019ecig], and its finding is
mostly about **which evidence state the cell is in**, not a magnitude to act on. **Confidence low**; the
value is stating the state honestly rather than letting the e-cig question sort into either «safe» or
«established harm». The decision-change is a **two-stratum split** (below), not a scalar verdict.

## The evidence is in three different states at once

| Endpoint | What the evidence shows | Evidence state |
|---|---|---|
| Acute HR / SBP / DBP (surrogates) | all three rise minutes after use, pooled + significant | **harm signal** (surrogate) |
| BP when a smoker switches (surrogate) | SBP/DBP fall vs continued smoking; HR unchanged | **benefit vs the smoking comparator** (surrogate) |
| MI / stroke / HF / mortality (hard) | one biased observational MI association; nothing else | **INSUFFICIENT evidence** |

The single scalar question «are e-cigs bad for the heart?» has no answer because these three states do
not collapse — the direction depends on the endpoint and the comparator. [inferred from @skotsimara2019ecig]

## Acute: a real surrogate harm signal

Minutes after use, e-cigarettes raise all three haemodynamic surrogates
[@skotsimara2019ecig]:

- **HR** +2.27 bpm (95% CI 1.64 to 2.89) across 11 studies (N=273), heterogeneous (I2=70%) but
  **robust** — dropping the high-weight outlier *strengthens* it to +4.48 (3.30 to 5.67) and removes the
  heterogeneity.
- **SBP** +2.02 mmHg (0.07 to 3.97), **DBP** +2.01 mmHg (0.62 to 3.39), both homogeneous (I2 \~0-16%).

These are **surrogates, not outcomes** -> [[Surrogate Outcomes]]: a moved marker is a *signal* of harm,
not harm demonstrated. Their transmission to any patient-important CV endpoint is itself an unevidenced
claim here — the acute rise is small in absolute terms and its clinical meaning over years is exactly
what the hard-outcome row cannot supply.

## Switching: BP falls — but against the *smoking* comparator

In the 3 studies (N=173) of tobacco smokers switching to chronic e-cig use, BP **fell**: SBP -7.00 mmHg
(-9.63 to -4.37), DBP -3.65 mmHg (-5.71 to -1.59), HR unchanged (-0.03, -2.57 to 2.52)
[@skotsimara2019ecig]. The authors frame
it as the composite finding: «electronic cigarette smoking leads to increases in HR and BP acutely
post-exposure but switching from tobacco smoking to chronic electronic cigarette use may beneﬁcially
aﬀect BP» [@skotsimara2019ecig]. The
comparator here is **continued combustible smoking**, so this is a harm-*reduction* signal relative to
smoking — not evidence that e-cig lowers BP against clean air.

## The decision-change: substitution valence flips by stratum — do NOT collapse

The same exposure carries **opposite valence** depending on what it replaces (the substitution rule —
judge against the realistic alternative). [inferred from @skotsimara2019ecig]

- **Smoker switching (comparator = combustible cigarettes).** The realistic alternative is *continued
  smoking*, whose CV hazard is enormous -> [[Smoking and Mortality]] (all-cause HR \~3). If e-cig is even
  modestly less harmful, switching is a **harm-reduction** move — the switch-arm BP fall points that way.
  But «less bad than smoking» is not «safe», the hard-outcome comparison is unproven, and full cessation
  dominates both.
- **Never-smoker starting (comparator = nothing / clean air).** The realistic alternative is *no
  exposure*. Here the acute surrogate harm has no offsetting benefit — starting adds a new CV signal for
  zero gain. This is the stratum the marketing-as-safe framing most endangers.

A single «e-cigs are safe / unsafe» verdict is wrong because it averages these two decisions. Skotsimara
holds both apart — the switching benefit «does not suggest that the electronic cigarette should be
marketed as a cardiovascular safe product» [@skotsimara2019ecig].

## Mechanism (directional, discounted)

Acute effects plausibly run via **nicotine -> catecholamine release**. But the mechanism does not close:
in large trials nicotine-replacement gum «did not adversely aﬀect blood haemodynamics or the risk for
major adverse cardiovascular events», so the adverse e-cig effects «could be related to other substances
... released with heating, such as heavy metals or other unknown ones»
[@skotsimara2019ecig]. Consequence
(): if the harmful moiety is a non-nicotine aerosol constituent, then nicotine-strength
comparisons across brands do not bound the CV risk — a directional inference, not an outcome finding.

## The gap that keeps this at insufficient-evidence

The cell **cannot graduate** from insufficient-hard-outcome on what is held. The only hard endpoint is a
single observational MI association — OR 1.79 (1.20 to 2.66) vs 2.72 (2.29 to 3.24) for combustible —
which the authors flag as «sensitive to non-random misclassiﬁcation bias» (post-MI switching inflating
it, i.e. reverse causation), and «there is no epidemiological data on the risk for stroke or heart
failure incidence in electronic cigarette users»
[@skotsimara2019ecig].

**G-gap (named, un-held):** no meta-analysis or large cohort of e-cig -> hard CV events (MI, stroke, HF,
CV mortality) is held or, as of this source's 2017 search, existed. Until such evidence lands, the cell
stays at insufficient-evidence -> [[The Insufficient-Evidence Statement]] — *not* «no effect» (the acute
surrogate signal forbids the null) and *not* established harm (the hard endpoint is unproven). This is
the «not yet» bucket under symmetric standards: e-cig gets neither a fashionable-safety pass nor an
inflated hard-harm verdict.

## Why confidence is low

- **One moderate, surrogate-only source.** The evidence «is only of moderate quality, derived mainly
  from non-randomized observational studies» [@skotsimara2019ecig]; N=441 total, acute windows 5-30 min, only 3 switch studies. Tier `moderate` (registry override at ingest).
- **Surrogate-to-outcome gap unproven** — every meta-analytic endpoint is a marker.
- **Fixed-effects pooling on I2=70% (acute HR)** understates uncertainty; the outlier-drop sensitivity
  analysis partly mitigates.
- **Layer-1 placement:** for a smoker, this is a small refinement behind the big rock of *quitting
  entirely* -> [[Smoking and Mortality]]; for a never-smoker, a reason not to start. Either way the
  marginal decision is modest and the certainty low.

### Self-critique `[run 2026-08-30, before commit]`

- **No hard-outcome harm overclaim.** The MI OR is presented only with its reverse-causation caveat and
  never as established harm; the page's harm claims are explicitly scoped to *acute surrogates*, and the
  hard-endpoint row is labelled INSUFFICIENT throughout. The authors' own not-safe conclusion (quoted
  above) is reported as their bottom line, not restated as a wiki finding of harm.
- **No scalar safe/unsafe verdict.** The page's spine is the refusal to collapse — the three-state table
  and the two-stratum split both exist to block a single verdict; the switching benefit and the
  not-safe conclusion are held side by side, as the source holds them.
- **Provisional-C, not banked.** Single-source cell-opener; the finding (e-cig CV cell = insufficient
  hard outcome + acute surrogate signal + stratum-split valence) is RAG-reachable from this one source,
  so it is scaffolding-grade, not an emergent cross-source synthesis. Confidence low, flagged.
- **Substitution valence is the source's own structure**, not an imposed frame — Skotsimara reports the
  acute and switch arms separately and states both the benefit and the not-safe conclusion; the wiki
  adds only the explicit never-smoker vs smoker comparator naming (tagged INFERRED).

## References

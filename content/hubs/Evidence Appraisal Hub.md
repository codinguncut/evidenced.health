---
type: hub
question: How is a body of evidence judged, and how does a judgement become a recommendation?
created: 2026-07-25
updated: 2026-07-31
---

Navigator for the `evidence-appraisal` cluster — the machinery for moving from a body of studies to a
graded recommendation. Nucleus: [[Certainty of Evidence vs Strength of Recommendation]].

## Framing the question

- [[Framing a Decision Question]] — the four mandatory slots (PICO); why the comparator is the slot
  that most changes the answer; why study design is *not* pre-specified; how broadly to define the
  population before pooling becomes misleading
- [[Rating Outcome Importance]] — critical / important / limited; only critical outcomes drive the
  verdict; choose outcomes by importance, never by what was measured; whose perspective decides

## Rating the evidence

- [[Rating Certainty of Evidence]] — the four grades; outcome-centric rating; design as starting
  point not verdict; the five downgrade and three upgrade factors; why it is explicitly *not* a
  quantitative system
- [[Indirectness of Evidence]] — the four sources of indirectness; the gate between "it worked there"
  and "it will work here", priced as lost certainty
- [[Upgrading Observational Evidence]] — the three narrow exits from the observational floor: large
  magnitude, dose-response gradient, residual confounding pointing the wrong way
- [[Risk of Bias Assessment Tools]] — the study-level instruments GRADE's RoB domain leaves
  unspecified: RoB 2 (5 domains, RCTs) and ROBINS-I (7 domains + target-trial + confounding-ceiling,
  observational); the RoB→certainty crosswalk; COI as a lens over the domains, not a domain
- [[Synthesis Without Meta-Analysis]] — vote-counting by significance is unacceptable (power → 0 as
  studies accumulate); the direction-vs-significance line; the fallback ladder answers weaker questions
- [[Surrogate Outcomes]] — when a marker may stand in for an outcome, and what it costs
- [[Measurement Error in Dietary Assessment]] — how much error in self-reported diet can hide a real
  effect or manufacture a false one; the binding constraint on reading almost any observational
  nutrition finding
- [[Energy Adjustment and What a Diet Coefficient Means]] — what a nutrient coefficient is actually
  comparing against; how the analytic model silently decides what the nutrient is substituted for

## Turning evidence into a recommendation

- [[Certainty of Evidence vs Strength of Recommendation]] — **nucleus**: certainty is one of four inputs to strength, and the
  off-diagonals are asymmetric; what sets strength once certainty is fixed; strength is not priority;
  recommendations are not dictates
- [[Baseline Risk and the Relative-Absolute Split]] — why one relative effect can serve everyone
  while the recommendation still differs by group; the arithmetic-vs-effect-modification distinction
- [[Net Benefit and the USPSTF Recommendation Grid]] — the **non-GRADE** alternative: certainty x
  magnitude of net benefit -> A/B/C/D/I, no strength axis; values live in grade C, financial cost is
  excluded
- [[The Insufficient-Evidence Statement]] — the fourth evidence-state operationalized ("I" vs "D");
  low certainty forecloses a graded recommendation in USPSTF, not in GRADE
- [[GRADE vs USPSTF - Two Appraisal Systems]] — the two instruments by parameter table: where they
  agree (input discipline) and where the output architecture diverges

## Applied — a guideline read through this machinery

- [[Saturated Fat Intake and Replacement]] — WHO 2023, the `dietary-fat` nucleus. Read here it
  yields three method findings as well as its recommendations: a conditional recommendation driven by
  certainty alone, a surrogate discounted at the strength step rather than the certainty step, and
  ~~**internally inconsistent certainty ratings** under the guideline's strongest replacement claim.~~
  **RETRACTED at gate 1 (2026-07-26)** — the ratings are per-design (Reynolds observational vs Hooper
  RCT), which is correct GRADE practice. See the page's `[REVIEW]` marker.

## Research-process integrity — why a published estimate is less trustworthy than its p-value

The mechanisms that discount a finding *upstream* of the appraisal grid — how the study was made,
selected, and analysed (NASEM 2019). Appraisal machinery, not domain findings.

- [[Reproducibility vs Replicability]] — one loose word, three distinct objects (same-data recompute /
  new-study redo / holds-elsewhere); the asymmetry (reproducibility expected, replicability not); and
  reproducible is not correct
- [[Sources of Non-Replicability]] — the taxonomy: inherent/helpful variability vs avoidable defects
  (publication bias, p-hacking, incentives, errors, incomplete reporting; fraud rare); the aggregate
  "rate" is not a health grade
- [[Publication Bias and Selective Reporting]] — the significance filter biases the *literature* not
  the study; effect-size inflation / winner's curse (published originals over-estimate; replications
  shrink)
- [[P-Hacking and Researcher Degrees of Freedom]] — analytic flexibility within one study (p-hacking,
  HARKing, multiplicity, garden of forking paths); the p-value does not invert; precision is not
  accuracy
- [[Confidence in Science Without a Replication Crisis]] — NASEM's measured stance: non-replication is
  expected, the aggregate rate unknowable, confidence comes from convergence of independent methods;
  the symmetric single-study caution

## Checking someone else's appraisal

- [[What a Trustworthy Systematic Review Requires]] — the IOM 2011 bar (21 standards / 82 elements) an
  outside reader holds a finished SR to; the standard-vs-method distinction from Cochrane; the admissible
  **class-5 process-defect** instrument the wiki previously lacked; grades process, not truth (open loop)
- [[Is This Actually a Systematic Review]] — the SR-vs-narrative-review test; the reproducible
  prespecified search is the diagnostic feature; flags held premises resting on a single narrative review
  (Petroski antinutrients, Astrup SFA, Valdes microbiome)
- [[Was GRADE Actually Used]] — the seven suggested criteria for claiming GRADE; how to turn a
  suspicion of under-argued method into a specific, citable finding
- [[Which Objective Moved This Recommendation]] — a recommendation is a composite of evidence and
  non-evidence objectives; the evidence-to-decision table is where a body says which one moved it
- [[Is the Food Category Doing Any Work]] — when the exposure is a category, does the boundary carry
  information? Sometimes yes (SSB inside sugars), sometimes demonstrably not (refined vs whole grain)

- [[Physical Activity Dose and Mortality]] — where the PA mortality curve bends: \~24 min/day MVPA reaches maximal risk reduction (HR 0.34, HIGH certainty, accelerometer-measured); strength adds independently but is never ranked above aerobic; sedentary time carries its own thresholds

- [[Whole Grains Refined Grains and Pulses]] — refined grains show a flat null (RR 1.00) for CVD and T2D; whole-grain benefit is cohort-only and SACN attributes it to cereal fibre; pulses largely unstudied and the nulls are low-power
- [[Dietary Fibre and Health]] — the fibre nucleus (Reynolds 2019 outcomes + Brown 1999 LDL mechanism). Big mortality/T2D numbers are observational (RR \~0.85); the RCT-grade effect is small and on a surrogate (soluble fibre -> LDL -0.057 mmol/L per g). Isolate out-grades the food by design; dose-response is outcome-specific (linear-no-plateau on outcomes, attenuating on LDL)
- [[Glycaemic Index and Glycaemic Load and Chronic Disease]] — Jenkins 2024 mega-cohort MA: high GI tracks T2D (RR 1.27), CVD (1.15), mortality (1.08), cancer (1.05), mostly GRADE-low; associations «similar» to fibre/whole grain in the same cohorts. The wiki reads that similarity as collinearity (GI is a proxy, only 17% adjusted for fibre), not proof of an independent lever. Deeply-conflicted author (GI's inventor, rebutting WHO's dismissal); `confidence: low`
- [[Gut Microbiome and Health]] — the microbiome nucleus (Valdes 2018 BMJ + WGO 2023 guideline + Suez). Composition-shift is a surrogate; causation is the central confound; diet/fibre is the big lever (prebiotics ≈ fibre); probiotics are strain-and-indication-specific (NEC NNT 20, AAD, C. diff prevention, some IBS), not a general tonic; FMT is routine only for recurrent C. difficile

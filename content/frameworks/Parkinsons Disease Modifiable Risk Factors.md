---
type: framework
question: Which modifiable exposures raise or lower Parkinson's disease risk, and how credible is the evidence for each?
aliases: [Parkinson's Disease Prevention, Modifiable Parkinson Risk Factors, PD Risk Factors, Non-Genetic Risk Factors for Parkinson's, Parkinson's Modifiable Levers]
authors: [Chen, Yancong; Sun, Xuemei; Lin, Yali; Zhang, Zixuan; Gao, Yinyan; Wu, Irene X Y]
sources: [Chen - Non-Genetic Risk Factors Parkinson Overview 2021]
cluster: parkinsons
nucleus: true
confidence: low
created: 2026-08-05
updated: 2026-08-05
self_critiqued: 2026-08-05
relationships:
  related_to:
    - Shared Modifiable Levers Across Age-Related Diseases
    - Dementia Prevention and Modifiable Risk Factors
    - Physical Activity Dose and Mortality
    - Coffee Consumption and Health
    - Smoking and Mortality
    - The U-Shaped Association Artifact
    - Layer 1 - Ranking Interventions for a Stratum
    - Is the Food Category Doing Any Work
    - Measurement Error in Dietary Assessment
---

# Parkinson's Disease Modifiable Risk Factors

**Nucleus of the `parkinsons` cluster** — the domain-opener. Parkinson's disease (PD) is the second most
common neurodegenerative disorder; global cases rose from 2.5 million (1990) to 6.1 million (2016), and it
caused 211,296 deaths in 2016
[@chen2021pd]. This page holds the
canonical map of *which modifiable levers exist for PD* and — the load-bearing
part — *how weak the evidence for each actually is*. The source is a 2021 umbrella review of 46 systematic
reviews (SRs) spanning six categories and 80+ factors.

## The headline is the thin field, not the lever list

**PD has few credible modifiable levers, and the evidence is mostly of critically-low quality.** This is
an honest insufficient-evidence / gap finding, not a rich menu — reporting the ceiling is itself the
decision-change (it licenses someone to *stop* chasing most of these signals).

- **The evidence quality is the object.** Under AMSTAR-2, **none** of the 46 SRs rated high or moderate;
  7 (15.2%) were low and the remaining **39 (≈85%) were «judged to be of critically low quality»**
  [@chen2021pd]. (The abstract rounds
  this to 84.7%; the body reports 84.8% / 39-of-46 — immaterial.) A critically-low SR's pooled association
  is weak evidence; **46 low-quality SRs do not launder into confidence.** Grade each factor by design, not
  by the count of reviews behind it.
- **Only a fraction of associations survive to prospective evidence.** Significant associations appeared
  for 50 factors, «but only 19 of these were supported by evidence from prospective studies» (cohort /
  nested case-control) — 11 protective, 8 risk. For **31 factors no reliable conclusion could be drawn**,
  as they rested on case-control or mixed designs only
  [@chen2021pd]. Case-control designs are
  more prone to recall and selection bias, so
  the overview «emphasized the evidence from cohort studies».

## The prospective-supported factors — direction and (weak) magnitude

Effects are highest-vs-lowest / ever-vs-never relative risks unless noted; all are **observational
associations, not established causes**. Estimates below draw on cohort / nested case-control (prospective)
evidence; where an estimate pools case-control with cohort it is flagged *mixed* (more bias-prone).

| Factor | Effect (RR/OR/HR, 95% CI) | Design | Note |
|---|---|---|---|
| Physical activity (highest vs lowest) | RR 0.79 (0.68-0.91) | 8 cohort/NCC | strongest signal; men RR 0.68, mod-vigorous 0.71; **null in women** (0.91) |
| Tea | RR 0.64 (0.50-0.82) | 4 cohort/NCC | tea-type undetailed |
| Fat intake | RR 0.80 (0.68-0.95) | 6 cohort | conflicts with case-control (1.06) |
| Smoking (ever vs never) | RR 0.64 (0.60-0.69) | 67 studies, mixed | **artifact-suspect — see trap 1** |
| Coffee | RR 0.67 (0.58-0.76) | 19 studies, mixed | |
| Caffeine | RR 0.55 (0.43-0.71) | 7 studies, mixed | |
| Ibuprofen | RR 0.73 (0.63-0.85) | 5 cohort/NCC | confounded by indication — trap 2 |
| Thiazolidinediones (TZD) | OR 0.70 (0.51-0.96) | 5 cohort | I2=86% (high heterogeneity) |
| Calcium-channel blockers | RR 0.74 (0.64-0.85) | 3 cohort | |
| Statin use | RR 0.82 (0.68-0.99) | 6 cohort | one SR is *about* its confounding; long-term use null (0.77, 0.56-1.07) |
| High serum urate (high vs low) | RR 0.68 (0.50-0.91) | 6 cohort/NCC | men-only (0.60-0.63); null in women |
| Dairy food / milk | RR 1.40 (1.20-1.63) / HR 1.56 (1.30-1.88) | cohort | most consistent *dietary risk* signal |
| Diabetes | RR 1.31 (1.10-1.57) | 4 cohort | |
| Hormone replacement therapy | RR 1.24 (1.10-1.41) | 4 cohort | |
| Aspirin | RR 1.12 (1.01-1.23) | 6 cohort/NCC | other NSAIDs null; opposite sign to ibuprofen |
| Depression | OR 1.92 (1.66-2.22) | 6 cohort | **prodromal-marker suspect — see trap 1** |
| Mood disorder / bipolar | RR 1.79 / OR 3.12 | 2 cohort / mixed | prodromal-marker suspect |
| Constipation | RR 2.36 (2.00-2.80) | 4 cohort | classic prodromal marker, not a proven cause |

[@chen2021pd]

**Lower-certainty (case-control-derived, in the 31-factor no-reliable-conclusion bucket):** pesticides (OR
1.76, 1.56-2.04), herbicides (1.33), insecticides (1.53), solvents (1.35), farming (1.30), paraquat (2.19),
well-water drinking (1.34), rural living (1.32) — all positive; and carbohydrate/energy intake positive
[@chen2021pd]. The pesticide/occupational
signal is the most-discussed PD risk factor in public and toxicological discourse, yet here it rests
largely on case-control / mixed evidence (reported as ORs, which «might exaggerate effect size») — real,
but lower-certainty than its prominence implies (*attention is an anti-signal*).

## Trap 1 — the *protective* arms are artifact-suspect, and PD's long prodrome poisons the well

Two of the headline signals are almost certainly **not causal levers**, and the source says so.

- **Smoking's inverse association is a confounding / reverse-causation curiosity, NOT a recommendation.**
  «no scientiﬁc consensus has been reached on whether the association between smoking and PD is a causal
  relationship. One hypothesis is that patients with PD were able to quit smoking more easily than controls
  ... which may cause the observed reverse association»
  [@chen2021pd]. The nicotine-
  neuroprotection evidence is animal-model only (a *not yet* mechanism, not a human finding). And
  smoking's massive net harm dominates any PD signal: «its
  protective effect for PD development does not impact public health strategies for reducing smoking»
  [@chen2021pd]. Frame it as an artifact
  to explain, never a lever -> [[The U-Shaped Association Artifact]], [[Smoking and Mortality]].
- **Depression, mood disorder and constipation may be prodromal SYMPTOMS, not independent causes.** The
  source offers exactly two competing readings — «these factors are prodromal symptoms of PD» vs
  «independent risk factors» — with no consensus
  [@chen2021pd]. If prodromal, they are
  early diagnostic signals, not modifiable levers whose
  treatment lowers PD risk.
- **The prodrome contaminates even the good-looking protective signals.** Because PD has a years-to-decades
  prodromal phase, «symptoms before the diagnosis may affect exposure (i.e., reduced physical activity,
  smoking, or coffee intake)»; so «even with a cohort study design, we cannot completely rule out ... a
  reverse causal association»
  [@chen2021pd]. Early PD lowers activity
  and consumption *before diagnosis* — which can manufacture protective
  associations for physical activity, coffee and tea. A protective arm here must survive a lag/lead-time
  sensitivity analysis or a genetic (Mendelian-randomization) check before it is believed; the source calls
  for exactly these -> [[The U-Shaped Association Artifact]], [[Measurement Error in Dietary Assessment]].

## Trap 2 — the *protective* drugs are confounded by indication

The drug signals (ibuprofen, CCBs, statins, TZDs) are the class most prone to confounding-by-indication:
who takes a drug differs systematically from who does not. One included SR is titled for precisely this —
«Confounding of the association between statins and Parkinson disease» — and the overview notes the
beta-blocker signal «may be an indirect effect of smoking»
[@chen2021pd]. These are hypothesis-
generating associations, not evidence that taking
the drug prevents PD.

## What this changes about what to do

[inferred from @chen2021pd] — the decision reading below is the
wiki's synthesis over the source's reported associations and its own appraisal caveats.

- **Layer 1: PD offers few strong modifiable levers, and the field's own ceiling is low.** Ranking by
  effect-size × certainty, the *most credible* protective signal is **physical activity** (prospective,
  I2=0, dose-dependent by intensity) — and it is already a top big rock for mortality, CV disease and
  cognition, so pulling it buys a *possible* PD benefit as a rider, not as a new competing lever
  -> [[Layer 1 - Ranking Interventions for a Stratum]], [[Physical Activity Dose and Mortality]]. Coffee/
  tea/caffeine are plausible but reverse-causation-suspect. Everything else is low-certainty. **No PD-
  specific *big rock* comparable to the cardiometabolic ones exists in this evidence base** — the honest
  advice is that there is little to optimize.
- **Contrast with dementia.** Unlike [[Dementia Prevention and Modifiable Risk Factors]] — where 14
  factors carry a modelled 45% population-attributable fraction and most levers ARE the cardiometabolic big
  rocks — PD has **no comparable attributable-fraction estimate and far weaker evidence**. The one shared,
  credible lever is physical activity; the diabetes signal is shared but modest. This is the intended
  Age-Related-Diseases finding: disease-specific levers vary enormously in strength, and PD sits at the
  thin end.
- **The dairy/milk signal is the one dietary risk worth naming**, but it is a modest observational
  association (RR \~1.4-1.6) of uncertain mechanism, not a demonstrated cause; whether the *food category*
  (milk vs its components — pesticide residue, urate-lowering, calcium) does the work is unresolved
  -> [[Is the Food Category Doing Any Work]].

## Scope and open gaps

[inferred from @chen2021pd] — gaps induced from what the
overview structurally could not answer.

- **`G (needs Mendelian randomization / lag-analysis)`** — the source's own remedy for the reverse-
  causation problem is MR and twin studies, which this overview does not perform. A dedicated PD-MR source
  would upgrade or kill the physical-activity, coffee and urate protective arms.
- **`G (needs aggregation)`** — no population-attributable-fraction or absolute-risk framing exists here;
  all estimates are relative, so the *absolute* benefit of any lever at a stated PD baseline risk (30-180
  per 100,000) is uncomputable from this source.
- Treatment, diagnosis, motor management and the genetics of PD are out of this prevention framework's
  scope.

## Self-critique `[run 2026-08-05, before commit]`

- **Not overclaimed — the thin-field frame is the finding.** The page leads with the critically-low
  evidence quality and the artifact traps rather than presenting the factor list as an actionable menu;
  every protective arm carries its reverse-causation / confounding-by-indication caveat, sourced to the
  overview's own discussion. `confidence: low` is the correct grade given 39/46 SRs are critically-low
  AMSTAR-2 — deliberately lower than the sibling dementia page's `medium` (Lancet consensus-grade).
- **Smoking trap handled as instructed** — presented only as an artifact to explain (ease-of-quitting
  reverse causation + net-harm dominance + animal-only nicotine mechanism), never as a lever.
- **Single-source, by design (domain-opener).** This is a provisional-C scaffolding page inducing the PD
  cluster from one umbrella review; cross-source claims (the dementia contrast) are flagged as structural,
  not independence (E). A second PD source (ideally an MR study) is owed to bank any of these as findings.
- **Coherence, not validity** (R1): the loop is open — no operation here grades any lever against a
  realized PD outcome. A clean audit is not a validated prevention claim.

## References

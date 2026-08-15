---
type: concept
question: Fluoride is both a deliberately-added public-health exposure (caries prevention) and a suspected developmental neurotoxicant — across its outcomes, which way does each arm run, at what exposure, and for whom?
aliases: [Fluoride, Water Fluoridation, Fluoride Exposure, Fluoride Neurotoxicity]
authors: [National Toxicology Program (org); Taylor, Kyla W; Rooney, Andrew A; Bucher, John R; Veneri, Federica; Vinceti, Marco; Filippini, Tommaso; Iheozor-Ejiofor, Zipporah; Worthington, Helen V; Glenny, Anne-Marie]
sources: [NTP - Fluoride Neurodevelopment Monograph 2024, Taylor - Fluoride Children IQ 2025, Veneri - Fluoride Cognitive Neurodevelopment 2023, Mazzoli - Fluoride Bone Fracture 2025, Iheozor-Ejiofor - Water Fluoridation Caries Cochrane 2024]
cluster: fluoride
nucleus: true
confidence: low
created: 2026-08-14
updated: 2026-08-14
self_critiqued: 2026-08-14
relationships:
  related_to:
    - Fluoride and Child IQ
    - Fluoride and Bone Health
    - Fluoride and Caries Prevention
    - Measurement Error in Dietary Assessment
    - The Underivable Optimum
    - Baseline Risk and the Relative-Absolute Split
    - The Insufficient-Evidence Statement
    - Deficiency Repletion vs Enhancement
---

Nucleus of the `fluoride` cluster. Fluoride is unusual among the wiki's exposures: it is
**deliberately added** to drinking water and toothpaste for a real benefit (caries prevention) *and*
is a suspected **developmental neurotoxicant** at higher doses. The whole decision is a dose-stratified
benefit-versus-harm balance. **As of 2026-08-14 all arms are landed** — the caries-benefit pole
(2024 Cochrane) closed the last gap, joining the child-IQ and skeletal harm arms — so the nucleus now
carries the induced **dose-stratified benefit/harm synthesis** (below), not a list of gaps.



## The one landed finding: higher fluoride, lower child IQ — above 1.5 mg/L

The US National Toxicology Program's 2024 OHAT systematic review concluded, at **moderate confidence**,
that higher fluoride exposure is associated with lower IQ in children — but the exposure bound is the
whole decision and is routinely stripped off in secondary reporting. Quoted intact:

- «This review finds, with moderate confidence, that higher estimated fluoride exposures (e.g., as in
  approximations of exposure such as drinking water fluoride concentrations that exceed the World
  Health Organization Guidelines for Drinking-water Quality of 1.5 mg/L of fluoride) are consistently
  associated with lower IQ in children.»
  [@ntp2024fluoride]
- Below that level the review does **not** find a settled effect: «Associations between lower total
  fluoride exposure [... concentrations ... lower than the WHO Guidelines ... of 1.5 mg/L ...] and
  children's IQ remain unclear.»
  [@ntp2024fluoride]

A bare «fluoride lowers IQ» with no exposure bound **overstates this source** — the below-1.5 stratum
(which includes US community-water fluoridation at 0.7 mg/L) is an
[[The Insufficient-Evidence Statement|insufficient-evidence]] state, not a demonstrated null and not a
demonstrated harm. The dose-threshold decision, the study table, and the transportability appraisal
live on [[Fluoride and Child IQ]].

## The exposure map — where the decision-relevant doses sit

| Exposure | Fluoride (drinking water) | What it is |
|---|---|---|
| US community water fluoridation | 0.7 mg/L | PHS-recommended added dose (historically 0.8-1.2) |
| WHO water guideline | 1.5 mg/L | NTP's «higher»-exposure referent; anti-fluorosis, not anti-IQ |
| EPA secondary (non-enforceable) | 2.0 mg/L | severe dental-fluorosis protection |
| EPA MCL (enforceable) | 4.0 mg/L | skeletal-fluorosis protection |

Total fluoride exposure is not the water number: even in optimally fluoridated areas it «can vary
widely ... based on personal habits in the use of dental products and consumption of beverages such as
black tea» [@ntp2024fluoride]. \~1.9 million US
residents (0.59%) are on community water naturally ≥1.5 mg/L — a small stratum, but the one where the
moderate-confidence harm sits.

## The benefit/harm menu — one axis, most arms still open

The telos's **one-axis (health)** rule governs here: this is a health-outcome menu, not a
fluoridation-policy verdict. Name each arm and its status; do not net them into a scalar.

- **Child IQ / neurodevelopment (HARM):** moderate confidence above 1.5 mg/L, unclear below. **Landed.**
- **Caries prevention (BENEFIT):** the reason fluoride is added at all — NTP explicitly excluded it
  («Benefits of fluoride with respect to oral health are not addressed in this monograph» `[EXTRACTED
  (NTP - Fluoride Neurodevelopment Monograph 2024) chunk 01]`). **Landed** (2024 Cochrane, low
  certainty): contemporary (after-1975) CWF gives a dmf difference of «0.24 (95% CI -0.03 to 0.52)» —
  \~a quarter-tooth, CI crossing no-benefit — «with smaller eﬀect sizes than pre-1975 studies», the
  large familiar benefit being a pre-toothpaste-era number
  [@iheozor2024fluoridation]. At the same 0.7
  mg/L dose, mild **dental fluorosis** is established (aesthetic concern \~12%, any level \~40%, low
  certainty). Full arm, era-attenuation and substitution mechanism on
  [[Fluoride and Caries Prevention]].
- **Dental fluorosis (mild HARM at the fluoridation dose):** the one harm established *at* 0.7 mg/L
  rather than above 1.5 — «12% (95% CI 8% to 17%)» aesthetic concern, \~40% any level, low certainty;
  a cosmetic/enamel outcome, below the IQ/fracture patient-important tier
  [@iheozor2024fluoridation]. Detail on
  [[Fluoride and Caries Prevention]].
- **Skeletal fluorosis / bone fracture (HARM at high dose):** the basis for the EPA 4.0 mg/L MCL.
  **Landed** (low confidence) — a dose-response MA finds fracture risk rising above \~1.5 mg/L water
  fluoride (overall RR 1.06/1.19/1.35 at 2/3/4 mg/L, all CIs crossing 1.0), significant only in
  postmenopausal females (RR 1.26, 95% CI 1.10-1.46 at 1.0 mg/L); BMD and fracture **dissociate** (a
  BMD rise is not a bone benefit). Full arm, U/J adjudication and BMD-surrogate trap on
  [[Fluoride and Bone Health]] [@mazzoli2025fluoride]. The
  \~1.5 mg/L skeletal threshold **coincides with the NTP IQ threshold** — the same exposure line turns
  two harm arms upward.
- **Adult cognition:** low confidence, «a lack of evidence of an effect» (two studies).
  [@ntp2024fluoride]
- **Other child neurodevelopmental (ADHD, infant neurobehavioral):** low confidence.
  [@ntp2024fluoride]

## The cluster-closing synthesis: the balance is DOSE-STRATIFIED, not a single benefit-vs-harm clash



With all arms landed, the benefit<->harm relationship is finally addressable — and the honest
structure is a **dose-stratified distinction, not a `[[tension]]`**. Running the not-joined checks
(Cooper, ii): the caries benefit and the serious harms **hold at different exposures**, so they are
consistent once matched by dose — filing a blanket «benefit vs harm» tension would compare
non-joined positions (a fake tension). What the fabric holds instead is a single balance whose sign
**changes along the fluoride axis**:

| Exposure | Benefit (caries) | Harm (IQ · skeletal · fluorosis) | Net decision structure |
|---|---|---|---|
| **\~0.7 mg/L** (US CWF) | modest, **low/very-low certainty** (dmf \~0.24, CI crosses 0), era-attenuated | IQ + fracture **insufficient-evidence** (not null, not established); only mild **dental fluorosis** established (\~12%/40%, low) | decision under **deep uncertainty** on the serious-harm side — neither pole dominates; no joined clash of two *established* effects |
| **>1.5 mg/L** | little extra benefit (largely captured by \~1 mg/L + other sources) | **child-IQ harm** enters at **moderate confidence**; overall **fracture** risk begins rising | balance **tips toward mitigation** — harm turns on while marginal benefit is \~flat |
| **>3-4 mg/L** | none additional | **skeletal fracture** harm strengthens (EPA MCL 4.0) | mitigation (defluoridation / alternative source) |

The load-bearing insight (the `hidden_insight` a tension would have carried): **at the fluoridation
dose there is no joined clash** — the serious harms are insufficient-evidence rather than demonstrated,
so the 0.7 mg/L decision is *under uncertainty*, not *between two knowns*. The genuine trade-off only
appears **above \~1.5 mg/L**, where the moderate-confidence IQ harm and the fracture harm turn on
against a **diminishing marginal caries benefit** — and there the same \~1.5 mg/L line that turns up two
harm arms (see [[Fluoride and Child IQ]], [[Fluoride and Bone Health]]) is where the benefit has
already flattened. Below it, the decision is dominated by uncertainty and by the person's weighting of
a small caries gain against a mild cosmetic fluorosis risk (layer 3), not by any established serious
harm.

This is **one axis (health)**: it is a benefit/harm *map*, not a fluoridation-policy verdict. Cost,
environmental load and equity are separate axes the caries source touches (named on
[[Fluoride and Caries Prevention]]) and are not priced in here; the health-outcome weighting stays the
person's.

## Independence: NTP and Taylor 2025 are ONE backing (VERIFIED), not two

NTP's dose-response rests on its **own companion** meta-analysis («DTT Meta-analysis, Taylor et al.
2024») — «The NTP authors of this monograph conducted a companion systematic review and meta-analysis»
[@ntp2024fluoride]. That companion is now held as
the peer-reviewed primary **Taylor 2025** (JAMA Pediatrics 179(3):282-292), and the one-backing framing
is **CONFIRMED, not assumed**: its ref 12 IS this NTP monograph, its authors are the NIEHS Division of
Translational Toxicology (Taylor, Rooney, Bucher — shared with the monograph), and «NIEHS did have a
role in the review approval of the manuscript»
[@taylor2025fluoride]. So Taylor 2025 does **not** raise
confidence by type-E convergence — it is the same stream's evidence in peer-reviewed form (a type-F
refinement of the harm arm, landed on [[Fluoride and Child IQ]]), counted as **one line with NTP**.
Confidence stays `low` on the below-1.5 stratum accordingly.

## The third line (Veneri 2023): qualified-E, not independent backing — and a friction

A different stream did arrive — Veneri, Vinceti, Filippini et al. (CREAGEN / University of Modena), an
SR + cubic-spline dose-response [@veneri2023fluoride]. It clears the **necessary** conditions for a type-E independent line: **no author shared** with
NTP/Taylor, **independent funding** (no NIEHS role), and **different analytic instruments** (ROBINS-E
RoB tool; one-stage cubic-spline). But independence of team is not independence of evidence — Veneri
pools a **near-fully-shared primary-study base** (its 33 studies sit almost entirely inside NTP's 72 /
Taylor's 59; the fluoride-IQ census is near-closed, sharing every marquee cohort — ELEMENT/Bashash,
MIREC/Till+Farmus, Dunedin/Broadbent). **Two MAs pooling the same primary cohorts agree on the pooled
direction by construction** — so Veneri's directional concordance (water DR −3.05 IQ pts/mg/L above 1
mg/L) is **shared-data robustness, NOT the independent second backing** that would raise confidence by
convergence. This is a **qualified / partial E** (robust to team + analytic choices), and it is
**NOT** marked `[E-independent]` — doing so would be laundered-E. Confidence stays `low`.


Two forces cut *against* even a confidence bump. First, Veneri's low-RoB and cohort-only strata **null
the association** (low-RoB MD +1.11 NS; cohort-only −0.74 NS), the opposite of NTP/Taylor's «holds in
low-RoB studies» reading — a genuine **type-D friction** that traces to the RoB instrument (ROBINS-E's
aggressive confounding downgrade rates Bashash HIGH; OHAT rates it low), filed on
[[Fluoride and Child IQ]]. Second, the same shared-data property means the two families cannot
*independently* confirm each other on the low-dose stratum at all — that stays a genuine gap. A truly
independent line would need a **new primary cohort at fluoridation-relevant exposure**, ideally a US
one (none exists yet).

Note also the **halo-across-a-lab** caution: the Modena/Vinceti group **also supplies the now-landed
skeletal-harm arm** (Mazzoli 2025, on [[Fluoride and Bone Health]]) — different outcome, so no
laundering, but the cluster now rests on **two arms (IQ, skeletal) from the same lab**, and that is
not independent evidential breadth. Independent replication of *either* arm by a different group is a
named gap; the skeletal arm's `low` confidence is held there for exactly this reason.

## Why this is a decision-change, not a restatement

Public discourse collapses to *fluoride is/ isn't safe*. The fabric's move is the **stratum split**: a
moderate-confidence harm signal that is real above \~1.5 mg/L water fluoride and *unresolved* at the
0.7 mg/L US fluoridation dose — so someone on a private well testing >1.5 mg/L faces a different
decision (the harm arm is live; mitigation is on the table) than someone on optimally fluoridated
municipal water, where at 0.7 mg/L the serious harm arms are insufficient-evidence, only mild dental
fluorosis is established, and the caries benefit is genuine but small and low-certainty in the
contemporary era ([[Fluoride and Caries Prevention]]). The exposure number, not the word «fluoride»,
carries the decision — and at the fluoridation dose the whole menu is small effects held at low
certainty, on both sides.

## References

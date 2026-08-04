---
type: synthesis
question: Two evidence-appraisal systems reach a recommendation — where do they agree, and where does the instrument's logic diverge?
aliases: [GRADE vs USPSTF, USPSTF vs GRADE, Two Appraisal Systems, Comparing Appraisal Instruments]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; US Preventive Services Task Force (org)]
sources: [GRADE - Handbook, USPSTF - Procedure Manual 2022]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-07-31
updated: 2026-08-04
relationships:
  related_to:
    - Certainty of Evidence vs Strength of Recommendation
    - Net Benefit and the USPSTF Recommendation Grid
    - Rating Certainty of Evidence
    - The Insufficient-Evidence Statement
    - Was GRADE Actually Used
---

# GRADE vs USPSTF — Two Appraisal Systems

**Type-C/A synthesis.** The wiki's appraisal layer was built entirely from GRADE and bodies that adopt
or evaluate it. USPSTF is a **fully specified alternative** run by a major guideline body that does not
use GRADE at all. Placing them side by side shows that two evidence-based-medicine instruments **agree
on almost every input discipline and diverge sharply on the output architecture** — and the divergence
is instructive precisely because it is not a disagreement about evidence.

**The reason this matters:** a *moderate certainty* from each body is *not the same quantity*, so a
reader who treats appraisal labels as portable across instruments is comparing things that were never
the same. The parameter table below is the evidence for that claim.
[inferred from @grade; @uspstfmanual2022]

## The parameter table — matched, individually quoted (BLOCKING precondition)

| Parameter | GRADE — quoted value + locus | USPSTF — quoted value + locus | Same quantity? |
|---|---|---|---|
| **Certainty granularity** | four grades: «high, moderate, low, and very low» [@grade, §6] | «rates the certainty of the evidence as one of three categories: high, moderate, or low» [@uspstfmanual2022] | **NO** — 4 vs 3 levels |
| **What certainty is OF** | «the extent to which we are confident that an estimate of the effect is correct» — **per outcome, per body of evidence** [@grade, §5] | «likelihood that the USPSTF assessment of the **net benefit** of a preventive service is correct» — **whole analytic framework, benefits minus harms** [@uspstfmanual2022] | **NO** — an effect estimate vs a benefit-harm net; per-outcome vs per-service |
| **Object of the word *moderate*** | confidence in an *effect estimate* for one outcome | «evidence is sufficient to determine the effects of the preventive service on targeted health outcomes, but confidence in the estimate is constrained» — confidence in a *net-benefit verdict* [@uspstfmanual2022] | **NO** — same word, different graded object (this is the load-bearing non-equivalence) |
| **Recommendation output** | certainty **+ strength**; strength «strong / weak (conditional)» set by four determinants [@grade, §6.1] | certainty **x magnitude of net benefit** -> letter grade «A, B, C, D, or I» [@uspstfmanual2022] | **NO** — additive two-judgment vs grid lookup |
| **Magnitude of benefit as a named axis** | none — magnitude sits inside *balance of effects*; «Strong recommendations are not necessarily high priority recommendations» [@grade, §6.1.1] | explicit: «substantial, moderate, small, or zero/negative» [@uspstfmanual2022] | **NO** — USPSTF externalizes an axis GRADE deliberately keeps out of the output |
| **Values / preferences** | explicit **determinant of strength** — high-certainty-weak «is likely» where values vary [@grade, §1.2] | grade **C** + shared decision-making «based on professional judgment and patient preferences» [@uspstfmanual2022] | **NO** — a strength determinant vs the content of one grade |
| **Financial cost** | «resource use» is a determinant of strength [@grade, §6.1] | «does not consider the financial costs... in its assessment of the balance of benefits and harms» (opportunity cost is considered) [@uspstfmanual2022] | **NO** — cost in vs cost out |
| **Question-specification formalism** | PICO; rejects extensions — «These modifications are neither helpful nor necessary» [@grade, §2] | analytic framework + key questions; uses **PICOTS** for decision-model scoping [@uspstfmanual2022] | **NO** — opposite verdicts on the same choice |

The fourth column is almost uniformly **NO** — and that *is* the finding. The two instruments are not
inter-translatable label-for-label; each column is a place where a naive crosswalk would compare
non-commensurable quantities.

## What they agree on (the shared input discipline)

The divergences are all downstream of the appraisal. On the *appraisal itself*, the two instruments
converge — and this agreement is a genuine type-C finding, since it is reached by two bodies that share
no framework:

- **Rate per outcome, not per study** — both. USPSTF: «quality may differ... from one outcome to
  another»-style per-outcome EPC grading feeding the Task Force. -> [[Rating Certainty of Evidence]]
- **Design is a starting point, not a verdict** — both run a design hierarchy then modify it on
  study-level validity. USPSTF: «not all studies with the same research design have equal internal
  validity». [@uspstfmanual2022]
- **Absolute over relative** — both. USPSTF «generally prioritizes ARR over RRR».
  -> [[Baseline Risk and the Relative-Absolute Split]] [@uspstfmanual2022]
- **Surrogates cost certainty** — both. USPSTF gives «greater weight to evidence of an effect on health
  outcomes than... intermediate outcomes», and the intermediate->health linkage is «very unlikely...
  deemed convincing». -> [[Surrogate Outcomes]] [@uspstfmanual2022]
- **Transportability priced explicitly** — GRADE via indirectness; USPSTF via external-validity
  (population/setting/providers), quantified as a >90% / 50-89% / <50% probability band.
  -> [[Indirectness of Evidence]] [@uspstfmanual2022]
- **Judgment is not eliminated, only made explicit** — both say so of themselves. USPSTF: certainty is
  «not a quantitative calculation, but rather a judgment». -> [[Rating Certainty of Evidence]]

## Where the instrument's logic actually differs — three structural moves

Beyond the label mismatches, three architectural choices distinguish the systems and change what their
outputs *mean*:

1. **USPSTF nets benefits and harms BEFORE grading certainty; GRADE grades certainty first, then
   weighs.** USPSTF certainty is «likelihood that the... net benefit... is correct» — the benefit-harm
   balance is *inside* the graded object. GRADE certainty is confidence in an effect estimate, with the
   weighing deferred to the strength step. **Consequence:** a USPSTF certainty label cannot be lifted
   onto a single outcome, and a GRADE certainty label cannot be read as a statement about net benefit.
   [inferred from @grade; @uspstfmanual2022]

2. **USPSTF makes magnitude a first-class axis; GRADE deliberately does not.** GRADE severs strength
   from magnitude («strong recommendations are not necessarily high priority»), so a GRADE output cannot
   be read as an intervention ranking. USPSTF's grid is *certainty x magnitude*, so its letter grade
   **can** be read as one — which maps onto the wiki's Layer-1 (*effect size x certainty*) more directly
   than GRADE's strength does. -> [[Net Benefit and the USPSTF Recommendation Grid]],
   [[Layer 1 - Ranking Interventions for a Stratum]]. **Caveat:** USPSTF magnitude is of *net* benefit,
   Layer 1's of gross effect — close, not identical.

3. **Low certainty forecloses a graded recommendation in USPSTF; it does not in GRADE.** USPSTF's whole
   low-certainty row collapses to **I** — «unable to assess the magnitude of net benefit». GRADE permits
   a strong recommendation on low or very-low certainty (rare, discouraged, but allowed). **So the
   fourth evidence state is a recommendation-level output in USPSTF and an outcome-level rating in
   GRADE.** -> [[The Insufficient-Evidence Statement]], [[Certainty of Evidence vs Strength of Recommendation]]

## The terminological collision worth flagging

USPSTF's own adequacy/certainty tool (Appendix XI) labels its letter-grade cell **«GRADE (A, B, C, D,
or I)»** — USPSTF calls its output *GRADE*, which is *not* the GRADE system. A reader seeing *GRADE* in
a USPSTF document is seeing the letter grade, not the Grading of Recommendations Assessment,
Development and Evaluation method. -> [[Was GRADE Actually Used]]
[@uspstfmanual2022]

## Decision relevance

- **Do not port appraisal labels across instruments.** *Moderate certainty* names different graded
  objects in the two systems; a crosswalk needs the parameter table above, not a level-for-level map.
- **Read for the architecture, not just the letter.** A USPSTF "C" is *small net benefit, at least
  moderately certain* (an affirmative small-effect finding); a GRADE "weak/conditional" can be
  *high-certainty-values-vary*. Neither is "the evidence is poor", and they are not the same off-diagonal.
- **The agreement is the reportable finding as much as the divergence.** Two bodies sharing no framework
  converge on per-outcome rating, ARR-over-RRR, surrogate discounting, and explicit transportability —
  which is stronger evidence that those disciplines are load-bearing than either body asserting them
  alone. -> the telos: *"convention held here" is a reportable, valued finding*.

[inferred from @grade; @uspstfmanual2022]

## Limits

- **Both are method documents describing their own instruments** — this compares *designs*, not
  *applications*. Whether the two systems reach the same *verdict* on the same evidence is a separate,
  unheld question. `AWAITS` a topic appraised by both bodies.
- **Not independent corroboration of any domain claim.** Both are evidence-based-medicine instruments
  sharing the certainty-first premise; their agreement on input discipline is convergence within one
  tradition, not two. **No `[E-independent]`.**
- **Coherence, not validity** (R1): a cleaner instrument is not a truer one. Neither system's output is
  evidence about the world; both are technologies for making a recommendation's reasoning auditable.
[inferred from @grade; @uspstfmanual2022]

### Self-critique `[run 2026-07-31, before commit]`

- **Parameter table checked for same-quantity slips.** Every cell is quoted with a locus; the "same
  quantity?" column is NO on every row, and the prose says *why* (object mismatch), so this is not a
  disguised comparison of incommensurables — it is a *demonstration* of incommensurability, which is the
  legitimate use of the table. The one row most at risk ("object of the word moderate") is quoted on
  both sides and the divergence is in the graded object, not invented.
- **Not-joined check on the "agreement" section.** The shared-discipline bullets are genuine agreements
  (both bodies state each), not a manufactured convergence — and they are explicitly *not* claimed as
  independent backing (the Limits deny E). GRADE and USPSTF share the EBM lineage, so agreement is
  expected, not surprising; recorded as type-C (shared question, catalogued positions), not type-E.
- **Independence laundering: guarded.** The temptation was to read "two bodies agree on surrogates ->
  strong independent backing". Denied in Limits — same tradition, not two routes.
- **Overclaim check.** No superlative scoped to the wiki's holdings. The Layer-1 mapping claim carries
  its own caveat (net vs gross magnitude) inline.

## References

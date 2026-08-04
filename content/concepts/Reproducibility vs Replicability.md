---
type: concept
question: When someone says a result "reproduces" or "replicates," which of three distinct properties is being claimed — and what does each buy toward the result being true?
aliases: [Reproducibility, Replicability, Computational Reproducibility, Generalizability, Reproducibility and Replicability, Replication]
authors: [National Academies of Sciences Engineering and Medicine (org)]
sources: [NASEM - Reproducibility and Replicability in Science 2019]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-07-31
created: 2026-07-31
updated: 2026-08-04
relationships:
  related_to:
    - Sources of Non-Replicability
    - Rating Certainty of Evidence
    - Indirectness of Evidence
    - Measurement Error in Dietary Assessment
---

One loose word in everyday discourse names **three distinct objects** with different decision
consequences. NASEM's 2019 consensus report fixed definitions to separate them, because different
fields "define and use the terms ... in different and sometimes contradictory ways." This is a
type-B disambiguation: the terms are not interchangeable, and confusing them is how a weak
reassurance gets read as a strong one.
[@nasem2019]

## The three objects (NASEM's definitions)

- **Reproducibility** (= *computational reproducibility*): re-run the **same** data and code and get
  the same numbers. «reproducibility is obtaining consistent results using the same input data;
  computational steps, methods, and code; and conditions of analysis. This definition is synonymous
  with "computational reproducibility"»
  [@nasem2019, CONCLUSION 3-1]
- **Replicability**: a **new** study, new data, same question, consistent result. «Replicability is
  obtaining consistent results across studies aimed at answering the same scientific question, each
  of which has obtained its own data.» Consistency is uncertainty-relative: «Two studies may be
  considered to have replicated if they obtain consistent results given the level of uncertainty
  inherent in the system under study.»
  [@nasem2019, CONCLUSION 3-1]
- **Generalizability**: the result holds in **other contexts or populations** that differ from the
  original — the wiki's [[Indirectness of Evidence]] / transportability axis, reached from a
  cross-disciplinary standards body.
  [@nasem2019]

## The asymmetry that anchors the whole report (FINDING 3-1)

The three are ordered by how much they are *expected*, and this ordering is the appraisal payload:

- Reproducibility is **expected** given transparency: «when a researcher transparently reports a
  study and makes available the underlying digital artifacts, such as data and code, the results
  should be computationally reproducible».
- Replicability is **not** guaranteed even by good work: «even when a study was rigorously conducted
  according to best practices, correctly analyzed, and transparently reported, it may fail to be
  replicated».
  [@nasem2019, FINDING 3-1]

**Decision consequence:** a non-replication is *not* prima facie evidence of a defect. So "it didn't
replicate, therefore the original was wrong" is a fallacy — the failure may be inherent system
variability, not error -> [[Sources of Non-Replicability]]. Conversely, computational reproducibility
buys **nothing** toward external validity; it is the floor, not the ceiling.

## Reproducible is not correct (the telos hook)

Bitwise agreement certifies the pipeline is deterministic, not that the analysis is valid:
«reproducibility does not ensure that the results themselves are correct. If there was a mistake in
the source code, and another researcher used the same code to rerun the analysis, the reproduced
results would be consistent but still incorrect.»
[@nasem2019, footnote 3]

This is the wiki's own *the loop is open* discipline stated for computation: a clean audit is not a
validated result. Transparency's value is that it lets others **detect** the error, not that
reproduction certifies against it — an open-loop check, exactly the wiki's stance
-> [[Rating Certainty of Evidence]].

## Trap: the vocabulary is inverted across fields

The two mappings are in active opposition, so the *word* does not fix the *object*:

- **B1** (NASEM / computational-science): reproducibility = same data/code; replicability = new data.
- **B2** (ACM / computer science, borrowing metrology's vocabulary): the **opposite** mapping.
- Metrology's own "measurement reproducibility" is a third thing (precision of one measurand across
  conditions, reported as a number) — which in NASEM's terms would be a form of *replication*.
  [@nasem2019, Barba 2018 / Box 3-1]

**So when a paper claims a result "reproduces," ask which object is meant before crediting it** — the
same-data recompute (cheap, certifies little about truth) or the new-data redo (expensive, the one
that bears on whether the effect is real).

## Decision relevance


- **Three questions, not one.** *Did the numbers recompute?* (reproducibility) is separate from *does
  a fresh study find it again?* (replicability) is separate from *does it hold here?*
  (generalizability). A finding can pass any one and fail the others.
- **For a nutrition effect estimate:** computational reproducibility is rarely the binding question;
  replicability and generalizability are — and both are hardest exactly where the wiki already flags
  the constraint (self-reported intake, complex human systems) -> [[Measurement Error in Dietary Assessment]].

## References

---
type: framework
question: How much protein should an older adult eat — daily (g/kg) and per meal — and what modifies that target?
aliases: [Protein Older Adults, PROT-AGE, Older Adult Protein Target, Protein for the Elderly, 1.2 g/kg Protein, Protein Intake Elderly]
authors: [Bauer, Jürgen; Boirie, Yves; Moore, Daniel R; Katsanos, Christos S; Phillips, Stuart M; Tagawa, Ryoichi; Miyachi, Motohiko; Devries, Michaela C; Morton, Robert W]
sources: [Bauer - PROT-AGE Protein Older Adults 2013, Moore - Protein Requirement Older vs Younger 2014, Katsanos - Leucine Muscle Protein Synthesis Elderly 2006, Tagawa - Protein Muscle Mass Dose-Response Meta-Analysis 2020, Devries - Higher Protein Kidney Function Meta-Analysis 2018]
cluster: muscle
confidence: medium
relationships:
  related_to:
    - Anabolic Resistance
    - Protein and Resistance Training for Muscle and Strength
    - Protein Intake and Kidney Function
    - Sarcopenia Definition and Diagnosis
    - Dietary Protein and Mortality
    - Protein Quality and the DIAAS Score
    - Surrogate Outcomes
    - The Descriptive-Normative Category Error
    - The Estimate-to-Action Gap
    - Deficiency Repletion vs Enhancement
    - Low Muscle Mass and Mortality
created: 2026-08-06
updated: 2026-08-07
self_critiqued: 2026-08-07
---

The **target** side of the protein question for the over-65 stratum: how much, and distributed how,
to maintain and regain lean mass and function. The lever exists because of [[Anabolic Resistance]] —
old muscle needs a bigger per-meal protein stimulus for the same building response — so the
general-adult RDA is a floor set for a different question and undershoots this stratum. The evidence is
**expert consensus on surrogates** (Bauer PROT-AGE, endorsed by four geriatric societies), backed by
small metabolic studies — *not* a hard-outcome (fracture / disability / mortality) trial.

`[@bauer2013]`
## The target ladder — by health and activity status

PROT-AGE recommends, for adults >65:

| Stratum | Daily protein target | Locus |
|---|---|---|
| Healthy older adult | **1.0-1.2 g/kg BW/d** | «consume an average daily intake in the range of 1.0 to 1.2 g/kg BW/d» |
| Exercising / otherwise active | **1.2 g/kg BW/d** | «higher protein intake (ie, 1.2 g/kg body weight/d) is advised for those who are exercising and otherwise active» |
| Acute or chronic illness | **1.2-1.5 g/kg BW/d** | «who have acute or chronic diseases need even more dietary protein (ie, 1.2e1.5 g/kg body weight/d)» |
| Severe kidney disease (eGFR <30, **not** on dialysis) | **LIMIT** — the exception | «Older people with severe kidney disease ... are an exception to this rule; these individuals may need to limit protein intake» |

The ladder rises with catabolic load (illness > active > healthy) and inverts only at severe renal
impairment. All figures are g protein per kg **body weight** per **day**.

## The number this replaces — and why the RDA is a floor, not a target

`[@bauer2013]`
The general-adult RDA is **0.8 g/kg BW/d**, defined as the minimum daily protein to prevent deficiency
in 97% of the population, derived from nitrogen-balance studies. PROT-AGE holds this «too low for older
people»: N-balance likely *underestimates* requirements (it cannot see muscle redistribution and uses
short adaptation windows), and in one 14-week study «consuming the RDA for protein resulted in the loss
of mid-thigh muscle area» in healthy older adults even while whole-body composition looked stable. So
0.8 answers *deficiency prevention*; it is a **floor deployed as a *100% Daily Value* target**, and for
maintaining muscle in this stratum it is the start line, not the finish
-> [[The Descriptive-Normative Category Error]], [[Deficiency Repletion vs Enhancement]].

## The parameter table — daily and per-meal are DIFFERENT quantities (do not collapse them)

`[@bauer2013, Moore - Protein Requirement Older vs Younger 2014]`
The single most common error with these numbers is treating a *per-day* target, a *per-meal* dose, and a
*hypertrophy* target as one quantity. They sit on different denominators; only the same-denominator rows
are directly comparable.

| Quantity | Value + locus | Denominator | Directly comparable to... |
|---|---|---|---|
| RDA (general adult) | 0.8 g/kg BW/d [EXTRACTED (Bauer ...) chunk 01] | protein g / kg BW / **day** | the PROT-AGE daily rows (same denominator) |
| PROT-AGE healthy older | «1.0 to 1.2 g/kg BW/d» [EXTRACTED (Bauer ...) chunk 01] | protein g / kg BW / **day** | RDA — Bauer raises the *same* quantity |
| PROT-AGE illness | «1.2e1.5 g/kg body weight/d» [EXTRACTED (Bauer ...) chunk 01] | protein g / kg BW / **day** | rows above |
| Hypertrophy target (healthy adults, RT) | \~1.6 g/kg/d, CI 1.03-2.20 (Morton) -> [[Protein and Resistance Training for Muscle and Strength]] | protein g / kg BW / **day** | SAME UNIT, DIFFERENT objective + population — a ladder by goal, not a contradiction |
| Moore per-meal breakpoint (older) | «0.40 ± 0.19 ... g/kg body mass» (0.60/kg LBM) [EXTRACTED (Moore ...) chunk 01] | protein g / kg BM / **meal** | NOT comparable to any per-day row |
| Bauer per-meal threshold | «25 to 30 g protein per meal» [EXTRACTED (Bauer ...) chunk 01] | **absolute** protein g / meal | NOT comparable — different denominator again |
| Bauer per-meal leucine | «about 2.5 to 2.8 g leucine» [EXTRACTED (Bauer ...) chunk 01] | leucine g / meal | NOT comparable — a within-meal amino-acid quantity |

- **The daily rows are a coherent ladder** (RDA 0.8 -> older 1.0-1.2 -> ill 1.2-1.5 -> hypertrophy \~1.6),
  same unit throughout, ordered by goal and stratum — the higher hypertrophy number does **not** conflict
  with the lower maintenance number; they answer *maximize muscle during training* vs *maintain muscle*.
- **The per-meal rows are a different axis** — the *distribution* constraint, not the daily total. They
  reconcile with the daily target only through Moore's own within-programme arithmetic (three meals ×
  \~0.40 g/kg = \~1.20 g/kg/d), which is a consistency check, not independent confirmation
  -> [[Anabolic Resistance]].
- **The young RET breakpoint is a WEAK, non-transporting anchor — do not import it downward as a
  ceiling.** Morton's \~1.6 g/kg-total knee is statistically *non-significant* (p=0.079) and the
  supplement effect it rests on *declines with age* in a largely-young pooled sample — both extracted
  on -> [[Protein and Resistance Training for Muscle and Strength]]. Combined with [[Anabolic Resistance]]
  (more protein needed per anabolic stimulus with age), the transport direction runs **up, not down**:
  an older adult training for hypertrophy should read \~1.6 as a **floor, not a ceiling** — the
  non-significant young plateau is no reason to cap intake — while the *maintenance* floor stays 1.0-1.2
  from this page's own (different) evidence base. This is a **stratum distinction, not a contradiction**:
  the two numbers answer *maximize muscle in the young* vs *maintain muscle in the old*, and the honest
  object for the older stratum is a **direction + a floor, not a point optimum** -> [[The Underivable Optimum]].


## Per-meal distribution — clear the threshold at each meal

`[@bauer2013, Moore - Protein Requirement Older vs Younger 2014]`
Because anabolic resistance raises the *per-meal* trigger, hitting the daily total is not enough if it
is unevenly distributed. PROT-AGE: «The per-meal anabolic threshold ... is higher in older individuals
(ie, 25 to 30 g protein per meal, containing about 2.5 to 2.8 g leucine)». Moore's breakpoint (0.40
g/kg body mass per meal in older vs 0.24 in younger men — «\~68%» greater) is the metabolic basis for
the same advice: **spread protein across breakfast, lunch and dinner so each meal clears the breakpoint**,
rather than back-loading it at dinner (the typical Western pattern that wastes the sub-threshold meals).
Bauer notes an unsettled alternative — *pulse feeding* (most protein at midday) also showed benefit — so
even distribution is the default, not a proven optimum.

## Renal safety — the healthy-kidney vs impaired-kidney split

`[@bauer2013]`
The routine worry — that higher protein harms aging kidneys — is not supported for **healthy** kidneys:
«reviews of research studies reveal little or no evidence that high-protein diets cause kidney damage in
healthy individuals, including those who are older», and 1.0-1.2 g/kg/d «is expected to help maintain
nitrogen balance without affecting renal function». The contraindication is a genuine **stratum flip**,
not a general caution: **severe** kidney disease (eGFR <30, not on dialysis) is where protein should be
limited (route (c) contraindication).

Bauer's statement is a consensus-review direction; the **pooled RCT evidence now backs it**
-> [[Protein Intake and Kidney Function]] (Devries 2018 SR-MA, 28 RCTs): in adults *without* CKD, the
change in GFR does not differ between higher- and lower-protein diets, and the GFR rise HP does produce
is benign kidney functional reserve, not damage [@devries2018]. Two caveats carry over here: the evidence is low-GRADE
surrogate-level (GFR, not hard kidney outcomes — the dedicated protein-to-kidney-**outcome** trial is
still the named gap), and Devries shares Phillips with PROT-AGE, so this is **one lineage's** coherent
position, not two independent confirmations. The stratum flip (severe CKD -> restrict) is unchanged.

## Decision relevance

[inferred from @bauer2013; @moore2014]

- **For a healthy older adult, aim \~1.0-1.2 g/kg/d (1.2 if active), from \~25-30 g protein per meal
  across three meals** — the move is *raising and distributing*, not loading. Most older adults eat
  *less* than young adults, so the common failure is undershoot, not excess.
- **Bias the target UP within a stratum when the cost of undershoot is high** — during illness,
  weight loss, or an energy deficit (protect lean mass), the illness row (1.2-1.5) or the active row
  applies; the plateau is forgiving on the high side for healthy kidneys, so a modest overshoot is
  low-harm -> [[The Estimate-to-Action Gap]]. The one hard flip down is severe renal disease.
- **Protein quality rides the number silently.** The per-meal *leucine* threshold (2.5-2.8 g) is why a
  high-quality/animal or leucine-dense source clears the bar with fewer grams; hitting the target from
  low-leucine plant sources needs more grams or deliberate complementation
  -> [[Protein Quality and the DIAAS Score]]. This is a distinct decision from the source-substitution
  (mortality) question on [[Dietary Protein and Mortality]].
- **The daily amount and the source are two decisions, not one.** This page sets the *amount* and
  *distribution* for the older stratum; the animal-vs-plant *source* choice (mortality) and the
  *hypertrophy* target (RT) are separate -> [[Protein and Resistance Training for Muscle and Strength]].
- **Protein may raise muscle even where resistance training is NOT on the table — a plausibility pointer,
  not a stratum-specific proof.** For the frail, the dysphagic, or those who cannot train, the PROT-AGE
  targets above rest on trials that mostly paired protein with exercise. Tagawa's MA (a *different*
  research lineage — Miyachi lab, no PROT-AGE overlap) «demon- strates for the first time that protein
  supplementation is significantly effective without resistance training in a di- verse population», and
  even «less than 0.3 g/kg BW/d (0.17 g/kg BW/d, on average) was suffi- cient to significantly increase
  LBM» — «Daily addition of a high-protein food item such as an egg (6-8 g protein) or 1 cup (200 mL) of
  milk (6.8 g protein)» is Tagawa's named lever for «the elderly or people with dys- phagia, as well as in
  low-income, food-insufficient populations». **But the finding is in a *diverse* population, not
  specifically the anabolic-resistant old** — and [[Anabolic Resistance]] predicts a *blunted* fed-state
  response at low doses in exactly this stratum, so the without-RT effect may attenuate where it is most
  wanted. So: protein-by-diet-alone is a reasonable move when training is infeasible (small, distributed
  top-ups, not loading), and it is a *separate lineage* from PROT-AGE (partly answering the *one research
  school* limit below) — but treat it as a directional pointer to test, not as elderly-specific
  corroboration; it sets no age-specific dose of its own.
  `[@tagawa2020]`

## Limits — consensus on surrogates, one research school, sponsor exposure

[inferred from @bauer2013; @moore2014; @katsanos2006]

- **Surrogate, not patient-important, endpoints.** The targets are set against nitrogen balance, lean
  body mass, and acute MPS — surrogates. No fracture, disability, or mortality trial shows that hitting
  1.0-1.2 vs 0.8 g/kg/d changes what the person experiences; muscle *function* and sarcopenia are on the
  outcome menu, but the causal link from *raising protein* to *better function* is asserted, not proven
  -> [[Surrogate Outcomes]]. The loop is open.
- **Consensus + small studies, one programme.** Bauer is a Delphi consensus (`recommendation` tier —
  cite its underlying reviews for any effect/certainty claim); Moore and Katsanos are small,
  acute, male-only metabolic studies. Their agreement is coherence within one research school (shared
  authors and cross-citation), not independent corroboration -> [[Anabolic Resistance]]. Moore is
  male-only; Katsanos is a mixed-sex parallel-group study.
- **Sponsor exposure.** PROT-AGE was funded by a Nestlé Nutrition grant and most authors disclose
  medical-nutrition-industry ties (Nestlé, Nutricia, Abbott); Moore and Katsanos are dairy / amino-acid
  funded. Under symmetric standards this is a directional-bias flag on the "eat more protein /
  supplement / leucine" conclusion — held loosely, not dismissed, since the underlying tracer physiology
  is hard to confound.
- **Sex, and the >65 label.** Moore's per-meal dose-response is men only (Katsanos included women, so the
  leucine-threshold finding is not male-restricted); the female per-meal *protein* breakpoint is only
  partly evidenced. "Older adult" is treated as >65, but anabolic resistance is a gradient, not a switch
  at a birthday.

## References

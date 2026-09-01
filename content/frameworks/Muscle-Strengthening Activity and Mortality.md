---
type: framework
question: Does strength / resistance training reduce mortality and disease independently of aerobic activity, and at what dose?
aliases: [Muscle-Strengthening Activity, Resistance Training Mortality, Strength Training, MSA, Weight Training Mortality]
authors: [Momma, Haruki; Kawakami, Ryoko; Honda, Takanori; Sawada, Susumu S; Saeidifard, Farzane; Medina-Inojosa, Jose R; Lopez-Jimenez, Francisco]
sources: [Momma - Muscle-Strengthening Activities and Mortality 2022, Saeidifard - Resistance Training Mortality Meta-Analysis 2019]
cluster: activity
confidence: low
relationships:
  related_to:
    - Protein and Resistance Training for Muscle and Strength
    - Physical Activity Dose and Mortality
    - Cardiorespiratory Fitness and Mortality
    - Measuring and Raising Cardiorespiratory Fitness
    - The U-Shaped Association Artifact
    - Grip Strength and Mortality
    - Low Muscle Mass and Mortality
created: 2026-07-29
updated: 2026-09-01
self_critiqued: 2026-09-01
---

Strength training earns its place in a lever list on two claims: it lowers mortality and major disease
**independently of aerobic activity**, and it does so at a **small dose**. Two meta-analyses now converge
on this — Momma 2022 (broad muscle-strengthening activity) and Saeidifard 2019 (framed as resistance
training). But both pool **mostly the same US self-report cohorts** (Momma explicitly compares itself to
Saeidifard, and Saeidifard's mortality data are largely the same NHANES/NHIS muscle-strengthening
cohorts) — so the second MA is a **refinement, not independent corroboration**, and the evidence stays
**observational, self-reported, «very low» GRADE**. A real but **weakly-warranted** lever, held one tier
below the RCT-grade BP and lipid evidence. What Saeidifard adds is *endpoint resolution*, not more
certainty: it separates cardiovascular **mortality** (borderline, CI crosses 1) from Momma's CVD
**incidence** (significant), and finds cancer **mortality** null where Momma's cancer **incidence** was
favourable (see the cross-source table below).


[@momma2022]
## The effects — modest, broad, and independent of aerobic exercise

Any muscle-strengthening activity (MSA) vs none, «independent of aerobic activities»:

| Outcome | RR (95% CI) | GRADE |
|---|---|---|
| All-cause mortality | «RR 0.85; 95% CI 0.79 to 0.93» (−15%) | very low |
| Cardiovascular disease | «RR 0.83; 95% CI 0.73 to 0.93» (−17%) | very low |
| Total cancer | «0.88 (0.80 to 0.97)» (−12%) | very low |
| Diabetes | «0.83 (0.77 to 0.89)» (−17%) | low |

The independence matters: these are adjusted for aerobic activity, and **combined MSA + aerobic gives a
much larger benefit — «a 40% lower risk of all-cause mortality (RR 0.60; 95% CI 0.54 to 0.67)»** — so
strength and aerobic are additive, not substitutes. This corroborates and refines the held
strength-guideline finding on [[Physical Activity Dose and Mortality]] (both-guideline HR \~0.71); it is
**not** independent backing (same observational PA-epidemiology lineage, overlapping US cohorts), so it
is a refinement, not an [E-independent] convergence.


[@saeidifard2019]
## Saeidifard 2019 — the second MA, endpoint-resolved and mortality-specific

Saeidifard is a SR-MA of «11 (one randomized trial and 10 cohort studies)... totaling 370,256
participants with mean follow-up of 8.85 years», restricted to studies its authors label resistance
training (defined «typically at loads greater than 65% of the one-repetition maximum»). It asks the
mortality-specific question Momma's broad MSA-and-disease pool does not isolate:

| Outcome (RT vs no exercise) | HR (95% CI) | Note |
|---|---|---|
| All-cause mortality | «0.79 (0.69–0.91)» (−21%) | significant |
| Combined RT + aerobic vs no exercise | «0.60 (0.49–0.72)» (−40%) | additive; larger than either alone |
| Cardiovascular **mortality** | «0.83 (0.67–1.03)» (abstract) / «0.83 (0.68–1.01)» (Fig 3a) | **borderline — CI crosses 1** |
| Cancer **mortality** | «0.81 (0.54–1.20)» | **no significant association** |
| CHD events, men (1 cohort, n=44,452, 2y) | «RR 0.77... CI: 0.61–0.98» (−23%) | «trained with weights for 30 min or more per week»; one study only |

Two decision-relevant refinements over Momma:

- **The CV benefit is softer on the harder endpoint.** Momma's «RR 0.83; 95% CI 0.73 to 0.93» is CVD
  *incidence* (significant); Saeidifard's identical 0.83 point estimate is CV *mortality* and its CI
  **crosses 1** — so acting on the CV-mortality claim specifically rests on a borderline association, not
  the clean incidence signal. Same number, different (harder) endpoint, weaker warrant.
- **Cancer: incidence favourable, mortality null.** Momma finds total-cancer *incidence* «0.88 (0.80 to
  0.97)»; Saeidifard finds cancer *mortality* «0.81 (0.54–1.20)», non-significant. These are **different
  endpoints, not a contradiction** — RT's cancer value (if any) is plausibly on incidence and on
  cancer-patient function/lean-mass, not on lowering death-from-cancer, which the data cannot show.

**Dose.** Saeidifard's own reading matches Momma's caution against the upper arm: performing «>0 to two
sessions of resistance training per week is associated with lower all-cause mortality (0.79 (0.66–0.95)),
but doing more than two sessions of resist-ance training is not», and «2–3 sessions... is not
signiﬁcantly better than... lower frequencies... (1.00 (0.89–1.11))». The authors suggest optimal benefit
«by 1–2 sessions per week and avoiding high-intensity low-repe-tition type activities» but explicitly
disown a firm shape: «the current evidence is not enough to conclude that the relationship between
resistance training and survival has a U-shape curve.» This is a second-source corroboration of the
[[The U-Shaped Association Artifact]] reading — the upper arm is not believed by either MA.


[inferred from @momma2022; @saeidifard2019]
## The two MAs compared — same lever, mostly the same cohorts (type-F, not type-E)

The op-weave parameter table, with the same-quantity column doing the work:

| Parameter | Momma 2022 | Saeidifard 2019 | Same quantity? |
|---|---|---|---|
| Exposure | broad MSA (weights, calisthenics, push-ups/sit-ups) | *labelled* RT (>65% 1RM), but constituent mortality cohorts are mostly the SAME broad MSA self-report | **NO** — the "RT-specific" framing is not carried by the data; overlapping instrument |
| Metric | RR | HR (OR converted to RR, «assumed the RR equivalent to hazard ratio») | \~ both hazard-type; comparable |
| All-cause mortality | «0.85 (0.79 to 0.93)» −15% | «0.79 (0.69–0.91)» −21% | Same construct, different pool — RT point nominally lower; overlapping cohorts (not independent) |
| Combined + aerobic → all-cause | «0.60 (0.54 to 0.67)» | «0.60 (0.49–0.72)» | Striking point convergence, but **F not E** (shared cohorts; Momma cites Saeidifard) |
| Cardiovascular | «0.83 (0.73 to 0.93)» — CVD **incidence**, significant | «0.83 (0.67–1.03)» — CV **mortality**, borderline | **NO** — incidence vs mortality; significance differs |
| Cancer | «0.88 (0.80 to 0.97)» — **incidence**, favourable | «0.81 (0.54–1.20)» — **mortality**, null | **NO** — different endpoint (a distinction, not a tension) |
| Dose | J-shaped, nadir «40 min/week» (minutes) | «>0 to two sessions... per week» significant, >2 not (sessions); U-shape disowned | Related shape, different exposure unit |

**Independence: type-F (refinement), not [E-independent].** Three defeaters, any one sufficient:

- **Momma cites Saeidifard directly** — Momma's paper explicitly positions itself against the prior MSA
  meta-analyses (Saeidifard, Nascimento), a fact recorded in the held Momma source-page extraction. A
  later MA that names and refines an earlier one is F by construction.
- **Shared constituent cohorts.** Saeidifard's pool is Dankel, Kamada, Grøntved, Kraschnewski, Zhao,
  Loprinzi, Schoenborn, Evenson — the classic NHANES/NHIS/Women's-Health/Health-Professionals MSA-
  mortality cohorts, the same lineage Momma's 2022 MSA-mortality pool draws on. Pooling the same data
  twice is not two independent tests (the *volume-is-not-independence* rule).
- **Same instrument, same confounding structure** — self-reported muscle-strengthening frequency,
  «push-ups or sit-ups» wording recurring across the cohorts.

So the 0.60 combined convergence, however striking, does **not** raise confidence; it is the same finding
re-pooled. No `[E-independent]` stamp.


[@momma2022]
## The dose — small, and a J-shape whose upper arm should not be believed yet

The dose-response is the interesting part, and it is a worked case for
[[The U-Shaped Association Artifact]]:

> «J-shaped associations were found between muscle-strengthening activities and all-cause mortality, CVD
> and total cancer, with the maximum risk reduction (approximately 10–20%) at approximately 30–60
> min/week»

The pooled nadir is «The lowest RR (RR 0.83; 95% CI 0.79 to 0.86)... at 40 min/week», with benefit
persisting to \~130-140 min/week and the hazard then rising above 1.0 — the J's upper arm, suggesting
*more is worse* past \~2 hours/week.

**Two cautions on that «40 min/week», because the point is fragile and easy to over-read
`[user-challenge 2026-07-29]`:**

- **The optimum is a wide, imprecise region, not 40 minutes.** Momma's own headline is a *range*
  («approximately 30–60 min/week»), and a key constituent study puts it higher: «the lowest risk of
  all-cause mortality was observed at 82 min/week of strength training» (Kamada). On very-low-GRADE,
  sparse, self-reported data the single pooled point (40) should be read as *somewhere in the
  \~30–80+ min/week region*, not a precise target.
- **This is total weekly MINUTES, not FREQUENCY — Momma «could not directly examine the frequency of
  muscle-strengthening activities».** So the curve says nothing about 2x vs 3x/week or session spacing;
  40 min/week could be two 20-minute sessions as easily as one. In particular it does **not** speak to
  the training-physiology heuristic of stimulating each muscle group every \~48 h — that is advice for
  **muscle/strength adaptation** (hypertrophy, protein synthesis), a *different outcome* on a *different*
  evidence base -> [[Protein and Resistance Training for Muscle and Strength]] (Morton 2018, now held:
  RT is the driver, protein a modest RCT-grade adjunct up to \~1.6 g/kg/day). The mortality dose-response
  and the strength-adaptation question are two things, and *this* source answers only the first.

**Do not act on the upper arm.** Three reasons it is likely an artifact, not a dose feature:

- **The authors disown it:** «the influence of a higher volume... on all-cause mortality, CVD and total
  cancer is unclear, considering the observed J-shaped associations»; «a higher volume may require
  caution» — a hedge, not a finding.
- **The evidence cannot bear it:** «very low» GRADE, «only a small number of studies», self-reported
  exposure, sparse data at high volumes, and publication bias untestable («pooled estimates... might have
  been overestimated»). The upper arm is exactly the unequal-precision / reverse-causation region
  [[The U-Shaped Association Artifact]] warns about.
- **The built-in counter-instance:** for **diabetes** the same exposure is **L-shaped, not J** — «the
  risk of diabetes sharply decreasing until up to 60 min/week... followed by a gradual decrease», no
  upturn, and with a clear muscle-glucose mechanism. The same MSA cannot protect monotonically for
  diabetes and turn harmful for mortality at high volume unless the mortality upturn is a measurement or
  confounding artifact.
  - **What the muscle-glucose mechanism IS (Challenge #24, average adult):** skeletal muscle is the
    principal site of insulin-stimulated glucose disposal, so building and using muscle enlarges the
    body's glucose «sink» and improves glucose tolerance. This makes resistance training a **glycaemic
    lever, not only a function/mortality one** — decision-relevant specifically for the dysglycaemic /
    metabolic-syndrome stratum (the drifting-median adult), where the held diabetes L-shape is the
    outcome this mechanism produces. **The exposure whose mechanism is clear (diabetes) shows no upturn; the outcomes
  whose upturn lacks a mechanism (mortality/CVD/cancer) show one** — the diagnostic signature of an
  artifactual arm.

**What survives:** the *lower* arm — a real, modest benefit reached by a **modest weekly volume** (a wide,
imprecise \~30-80+ min/week region; the standard «at least 2 days/week» sits comfortably inside it). What
does not: any reason to fear or to chase high MSA volume for mortality — nor any reading of an optimal
*frequency*, which this source cannot supply.

## Decision relevance

- **Add strength training — a modest weekly volume reaches most of the mortality benefit** (\~30-80+
  min/week, imprecise; the standard «at least 2 days/week» is inside it), and it adds benefit *on top of*
  aerobic (the two combined are the best-evidenced activity state). The effective *volume* is small; the
  optimal *frequency / spacing* (e.g. every \~48 h) is a strength-**adaptation** question this mortality
  evidence does not address.
- **But weight the warrant honestly.** This is observational, self-reported, very-low-GRADE evidence —
  a plausible, directionally-robust association, not an RCT-grade effect. It belongs below the BP and
  aerobic-activity levers in certainty, not above.
- **For fitness (VO2max) it is complementary, not the same lever.** Strength training raises strength and
  lean mass; aerobic/interval work raises CRF ([[Measuring and Raising Cardiorespiratory Fitness]]). Both
  belong in an untrained person's program.


[inferred from @momma2022]
## The healthspan case is stronger than the mortality case — it runs through function and falls (Challenge #17)

The very-low certainty above is for **one endpoint** — muscle-strengthening -> *all-cause mortality*
(Momma, self-reported, observational). It is **not** the verdict on strength training's healthspan
value, which runs through better-evidenced channels:

- **Function and falls are held, patient-important, and stronger.** Physical activity in older adults
  reduces falls, injurious falls, and probably fractures — outcomes people care about directly, not
  surrogates, and the strongest outcome class the annex carries for this stratum
  ([[Physical Activity Dose and Mortality]], WHO PA annex). Avoiding a fall/fracture and keeping physical
  function *is* the healthspan payoff, and it is graded above the mortality signal. *(Caveat: the held
  evidence is for exercise broadly; falls-prevention specifically combines resistance + balance training,
  which the wiki holds at the activity level, not RT-specifically -> a gap.)*
- **Grip strength and muscle mass are strong mortality PREDICTORS — now held, and still predictors, not
  proof.** Low grip strength tracks all-cause and cause-specific mortality (Celis-Morales 2018, UK
  Biobank n=502,293: all-cause HR 1.16-1.20 per 5 kg lower grip; \~1.48 per 1 SD, out-ranking SBP and
  total activity in-model) -> [[Grip Strength and Mortality]]; low muscle *mass* likewise
  -> [[Low Muscle Mass and Mortality]]. But both are the same predictor-vs-cause gap as fitness
  ([[Cardiorespiratory Fitness and Mortality]]): a strong predictor does not prove the *intervention*
  (resistance training) moves the outcome — grip is heritable (\~52%) and disease-sensitive, so it is part
  marker, part lever. The strength-training mortality evidence remains this page's very-low-GRADE number.

So strength training's **weak** card is the mortality evidence; its **strong** card is function/falls
(held) plus the muscle-mass/strength predictor literature (unheld). For an older or sarcopenia-risk
stratum the case is *stronger* than the very-low mortality number alone implies — the lever's value is
in keeping function and staying off the floor, not (on current evidence) a proven mortality reduction.



## Limits

- One meta-analysis, observational, «very low» GRADE; mostly US cohorts; self-reported exposure; high
  heterogeneity (I2 up to 83%); publication bias untestable.
- The dose-response upper arm is not usable (above); the diabetes L-shape is the more trustworthy dose
  curve.
- Frequency vs total-time could not be separated; the target-dose is a region, not a number.


[inferred from @momma2022]


## Why the diabetes curve is clean but the mortality curve is not (deliverable-critique, 2026-08-01)

A reasonable puzzle (deliverable-critique): how can the diabetes dose-response be clean and L-shaped while
all-cause mortality is noisy - does glycaemic control not reach mortality? It does: RT lowers **both**
(mortality RR 0.85, diabetes 0.83), so the glycaemic lever is not divorced from mortality. Two reasons the
shapes differ, neither implying inertness:

- **Dilution into a distal composite.** Diabetes is a proximate disease endpoint with a direct mechanism
  (the muscle glucose «sink»); all-cause mortality is a COMPOSITE of every cause, so a real diabetes
  reduction moves it only in proportion to diabetes's share of deaths - the signal is diluted and noisier
  (and here sits at very-low certainty), not absent.
- **Glucose is a SURROGATE.** Its transmission to all-cause mortality is imperfect: Look AHEAD improved
  glycaemia and weight without cutting hard CV events, and intensive glucose-lowering has even raised
  mortality via hypoglycaemia -> [[Surrogate Outcomes]], [[Does Weight Loss Reduce Cardiovascular Events]].

So *clean diabetes, noisy mortality* is the expected shape of a diluted, surrogate-mediated distal outcome,
not evidence the channel does nothing.

## References

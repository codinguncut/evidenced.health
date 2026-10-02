---
type: framework
aliases: [Omega-3 in pregnancy, Fish oil in pregnancy, Prenatal omega-3, DHA supplementation pregnancy, Omega-3 and preterm birth]
authors: [Serra, Ramon; Penailillo, Reyna; Monteiro, Lara J; Illanes, Sebastian E; Middleton, Philippa; Gomersall, Judith C; Makrides, Maria]
sources: [Serra - Omega 3 Preterm Birth 2021, Middleton - Omega-3 Pregnancy Preterm Cochrane 2018]
question: "Should a pregnant woman take omega-3 (fish oil / DHA-EPA) supplements to lower her risk of preterm birth or other adverse perinatal outcomes, and does the answer depend on her baseline omega-3 status?"
cluster: deficiency-enhancement
confidence: moderate
created: 2026-09-27
updated: 2026-09-29
self_critiqued: 2026-09-29
relationships:
  related_to: [Marine Omega-3 Supplementation Across Outcomes, Fish and Seafood Consumption, Omega-3 Supplementation and Atrial Fibrillation, Depression and Modifiable Exposures, Iodine Supplementation in Pregnancy]
  extends: [Deficiency Repletion vs Enhancement]
---

**The decision this page serves.** Should a pregnant woman take omega-3 (fish oil, or DHA/EPA)
supplements to reduce preterm birth or other adverse perinatal outcomes? The honest top-line
from the two gold RCT syntheses the wiki holds: in the **pre-specified main pool** the Cochrane
review (Middleton 2018, 70 RCTs) finds a preterm-birth reduction at **GRADE HIGH** (RR 0.89) and
a larger early-preterm reduction (RR 0.58, HIGH), and calls supplementation an "effective
strategy". The catch sits in the **low-risk-of-bias sensitivity analysis**: restricted to
low-RoB trials, the PTB<37 effect **loses significance in BOTH reviews at the same estimate**
(Middleton 0.92, Serra 0.92) — so the two disagree on the *bottom-line verdict*, not on the
low-bias PTB data. Early preterm is where they *appear* to diverge (Middleton's low-RoB subset stays
significant, Serra's does not) — reconciled below as a roster/dating effect: Serra's pool adds the
newer null ORIP trial and drops the benefit-showing Olsen 2000, so the early-preterm signal weakens
toward null with the current evidence rather than being a settled stratum. The stronger candidate for
a real effect remains **baseline omega-3 deficiency**, which neither pool can resolve. —
this lead is the wiki's framing; the effect sizes and both authors' verdicts are extracted and tagged
below.

**This is a cleaner cell than the mood/depression omega-3 levers.** Unlike depression or anxiety
(self-reported scales), the primary endpoint here is a **hard, patient-important neonatal
outcome** — preterm birth (<37 wk) and early preterm birth (<34 wk) — so the finding rests on
event counts, not questionnaire scores.

## The crude signal, and why it does not hold

The one RCT-restricted synthesis the wiki holds (Serra 2021, SR+MA of 37 trials to June 2020)
found a crude preterm-birth reduction that **vanished under a quality filter**:

| Outcome | Trials | n | Crude RR (95% CI) | Low-RoB-only RR (95% CI) |
|---|---|---|---|---|
| Preterm birth <37 wk | 31 | 21,458 | 0.89 (0.82-0.97) | 0.92 (0.83-1.01) NS |
| Early preterm <34 wk | 11 | 10,864 | 0.73 (0.58-0.92) | 0.82 (0.61-1.09) NS |

[@serra2021omega3] for all cells. Baseline preterm-birth
rate ran \~10% (control); the pooled RR 0.89 implies \~1.1 percentage-points absolute reduction,
NNT \~90 (pooled RR x baseline — the crude across-arm totals over-state this) — but the
authors conclude:
«We conclude that omega 3 supplementation during pregnancy does not reduce the risk of PTB and
ePTB. More studies are required to determine the effect of omega 3 supplementations during
pregnancy and the risk of detrimental fetal outcomes.»
[@serra2021omega3]

**Read this as insufficient evidence, not demonstrated no-effect.** The quality filter left only
15 of 31 (PTB) and 7 of 11 (ePTB) trials, and «This selection removed the significant results»
[@serra2021omega3] — a loss of power, not a positive
null. The crude and low-RoB point estimates both sit below 1.0 with upper CI bounds at \~1.0;
the honest statement is that the low-bias trials are too few to confirm the crude benefit, not
that benefit is excluded.

## The secondary perinatal outcomes are null

Preeclampsia/PIH (RR 1.00, 0.87-1.16; 19 trials), IUGR (RR 1.04, 0.92-1.18; 9 trials), fetal
death (RR 1.20, 0.85-1.69; 17 trials), and neonatal death (RR 0.81, 0.50-1.34; 10 trials) all
crossed the null with I2=0%. [@serra2021omega3] The
fetal-death point estimate sits above 1.0 on rare events (74/9647 vs 54/7870) with a wide CI —
a signal too weak to act on but worth watching, given the high-dose harm note below.

## Where benefit might actually live: baseline deficiency (the repletion arm)

The review names the most plausible effect-modifier it could not test: «Lower levels of plasma
EPA and DHA showed a 10-fold increased risk of ePTB compared to the higher plasma levels [8],
demonstrating a potential benefit of the supplementation effect during deficiency.»
[@serra2021omega3] (Reference [8] is Olsen et al.,
EBioMedicine 2018 — an observational plasma-status cohort, NOT held.)

This is the [[Deficiency Repletion vs Enhancement]] shape applied to a new nutrient x outcome:
supplementing a **largely replete** Western pregnant population yields the enhancement-null seen
above, while the **deficient** stratum is where an effect would concentrate — a route-(a)/(b)
stratification the pooled trials cannot deliver because they did not enrol or stratify by
baseline omega-3 status. A biomarker-status-modified effect is a positive
effect-modification claim (route b), so it needs direct in-stratum trial evidence before it is
believed, not merely the observational 10-fold gradient — which is itself vulnerable to
reverse causation and confounding.

## Dose, form, and an upper-bound harm

- **Form was not separable** (capsules, liquid fish oil, DHA eggs, DHA bars) and dose/timing
  could not be differentiated. Gestational-length signals (a surrogate, not PTB incidence):
  600 mg DHA/day added 2.9-4.5 days; 137 mg DHA from high-DHA eggs added 6 days — the authors
  hypothesize higher bioavailability from a high-fat food matrix.
  [@serra2021omega3]
- **Upper-bound harm:** «post-term partition or bleeding have been associated with high omega 3
  doses (>2.7 g/day) [32]» [@serra2021omega3] (ref [32]
  = von Schacky 2020, NOT held; "partition" is the paper's spelling, likely "parturition"). The
  review did not systematically appraise harms — so the upper bound is a flag, not a quantified
  ledger.

## The dose divergence across omega-3 outcomes — shape is outcome-specific

Omega-3's dose-response is not one curve. On this pregnancy page the harm edge appears only at
**>2.7 g/day** (post-term / bleeding), while on [[Omega-3 Supplementation and Atrial Fibrillation]]
**high-dose EPA (>=1 g/day, esp. \~4 g/day) RAISES atrial-fibrillation risk**, and on
[[Fish and Seafood Consumption]] / [[Depression and Modifiable Exposures]] the relevant doses and
directions differ again. Same molecule, different outcome, different curve — do not transport a
dose from one outcome to another.

## The landmark comparator, now held — Middleton 2018 Cochrane

The recognized landmark on omega-3 -> preterm birth is the **Middleton 2018 Cochrane review**
(70 RCTs, 19,927 women; GRADE-rated). Its pre-specified main pool
[@middleton2018]:

| Outcome | RR (95% CI) | Trials / n | GRADE |
|---|---|---|---|
| Preterm birth <37 wk | 0.89 (0.81-0.97) | 26 / 10,304 | HIGH |
| Early preterm birth <34 wk | 0.58 (0.44-0.77) | 9 / 5,204 | HIGH |
| Prolonged gestation >42 wk | 1.61 (1.11-2.33) | 6 / 5,141 | MODERATE |
| Perinatal death | 0.75 (0.54-1.03) | 10 / 7,416 | MODERATE |
| Low birthweight | 0.90 (0.82-0.99) | 15 / 8,449 | HIGH |
| Pre-eclampsia | 0.84 (0.69-1.01) | 20 / 8,306 | LOW |

Middleton's verdict: «Omega-3 LCPUFA supplementation during pregnancy is an eﬀective strategy for
reducing the incidence of preterm birth, although it probably increases the incidence of post-term
pregnancies.» [@middleton2018] — the
opposite bottom line to Serra's «does not reduce the risk of PTB and ePTB». The two must be put on
the **same quantity** before that clash is called a real disagreement.

### The parameter table — same quantity, low-RoB-restricted pooled RR

Both reviews ran the *same* RoB restriction (omit trials not low-risk for sequence generation,
allocation concealment, and blinding — Serra's §3.3 filter = Middleton's Comparison-9). This is
the like-for-like comparison:

| Quantity | Serra 2021 (low-RoB) | Middleton 2018 (Comparison-9 low-RoB) | Same quantity? | Verdict |
|---|---|---|---|---|
| PTB <37 wk, pooled RR | 0.92 (0.83-1.01) NS, 15 trials | 0.92 (0.83-1.02) NS, 12 studies / 6,718 | **YES** — same outcome, same RoB filter | **CONVERGE** |
| ePTB <34 wk, pooled RR | 0.82 (0.61-1.09) NS, 7 of 11 trials | 0.61 (0.46-0.82) sig, 6 trials / 4,073, I2=24.6% | Same outcome + filter + fixed model; different DOMINANT trial (Serra incl. ORIP 2019, Middleton pre-ORIP) — reconciled below | **DIVERGE (roster/dating), overlapping CIs** |

Serra low-RoB [@serra2021omega3]; Middleton Comparison-9
[@middleton2018] +
[@middleton2018].

**Trial overlap confirmed — this is NOT independent corroboration (not type-E).** Serra re-pools
the *same* small RCT literature Middleton pooled (Olsen 2000, Carlson 2013, DOMInO/Makrides 2010,
ORIP/Makrides 2019, Harper 2010, Ramakrishnan, Smuts, Bisgaard, plus prior MAs Saccone/Kar). A
shared RCT base defeats independence by construction; the agreement on PTB<37 is a **shared-evidence
convergence (type-F composite), not two independent routes to one answer.**

### What actually differs: interpretation, not the primary-outcome data

On PTB<37 — the primary outcome — the two reviews report the **same low-RoB estimate** (0.92, both
losing significance). The headline clash («effective strategy» vs «does not reduce risk») is
therefore **not an empirical disagreement about the PTB data**; it is a disagreement about *which
analysis to foreground for the verdict*:

- **Middleton** foregrounds its **pre-specified main pool** (0.89, GRADE HIGH) -> "effective
  strategy" (the HIGH grade itself is a judgment call — see the appraisal note below).
- **Serra** foregrounds the **low-RoB sensitivity restriction** («This selection removed the
  significant results») -> insufficient evidence.

This is a **joined-issue tension on the METHOD choice** (main-analysis GRADE vs RoB-restricted
sensitivity as the verdict-bearing estimate), filed inline rather than as a standalone page because
the underlying PTB data agree. The **residual divergence is on ePTB<34** (Middleton
0.61 sig vs Serra 0.82 NS); the forest-level reconciliation below (Serra's Figure 7 now recovered)
traces it to a single **dominant-trial swap** — Serra's pool is led by the null ORIP trial (2019),
Middleton's by the benefit-showing Olsen 2000, and ORIP post-dates Middleton's search. Same pooling
model on both sides.

### Appraisal note — the PTB<37 HIGH grade is a defensible GRADE judgment, not a settled fact

Middleton grades PTB<37 as **HIGH certainty** (⊕⊕⊕⊕, RR 0.89 [0.81-0.97], 26 RCTs / 10,304) and
states in its own Summary-of-Findings footnote that it did **not** downgrade for risk of bias:
«...some smaller studies with unclear risk of selective reporting and some smaller studies with
unclear or high attrition bias at the time of birth (not downgraded for study limitations)»
[@middleton2018]. Yet its own low-RoB
sensitivity analysis (Comparison 9, 24/70 trials at low risk of selection + performance bias) drops
PTB<37 to 0.92 [0.83-1.02], NS — and Middleton discloses this itself: «In the sensitivity analysis
for preterm birth < 37 weeks, conventional statistical significance was lost, although results were
similar» [@middleton2018].

Two defensible readings, and GRADE does not adjudicate between them:

- **Middleton's.** RoB downgrading grades the *body* of evidence, and the large high-quality trials
  (Olsen 2000, Makrides 2010) dominate it. The point estimate barely moves (0.89 -> 0.92); the lost
  significance is largely a power effect from dropping \~35% of participants (10,304 -> 6,718). No
  downgrade.
- **The counter (Serra's operative stance).** An effect that loses significance precisely when the
  higher-RoB trials are removed is the signal RoB-downgrading exists to catch — though a near-stable
  point estimate argues the loss is mostly power, not bias-inflation (which would move the *magnitude*
  toward null, not just widen the CI). «results were similar» still glosses a shift from a
  *significant* 11% reduction to a *non-significant* 8% one, and the headline NNTB of 68 rests on the
  full pool.

**This is a genuine GRADE-application disagreement (telos reason #3), NOT a process defect (#5).**
Middleton followed GRADE, ran the sensitivity analysis, disclosed the significance loss, and gave an
explicit rationale — the instrument under-determines whether a low-RoB-subset significance loss forces
a study-limitations downgrade. Invoking "process defect" would need an independent institutional
review documenting one, which the wiki does not hold; symmetric standards apply, so Middleton's call
stands as defensible. -> [[Was GRADE Actually Used]], [[Which Objective Moved This Recommendation]]

**Decision consequence.** Read the HIGH label as high certainty in a *point estimate* near 0.89-0.92
whose *statistical significance* does not survive restriction to low-RoB trials — not as a settled
"omega-3 prevents preterm birth." The direction is robust across both pools; the claim that it clears
significance is not.

### ePTB<34 divergence, reconciled at the forest level — a dominant-trial swap (ORIP vs Olsen), same model [G-GAP CLOSED]

The ePTB<34 low-RoB divergence (Middleton 0.61 vs Serra 0.82) is now **fully resolved**. Serra's
7-trial list lived only in its Figure 7, a forest-plot image the text extraction dropped; it was
recovered here by a direct read of the held PDF (p.8). The divergence is **one dominant-trial swap**,
not a model difference — and its cause is the calendar.

**Middleton's 6-trial low-RoB pool** (M-H fixed, RR 0.61 [0.46-0.82], I2=24.6%)
[@middleton2018]:

| Trial | events (o3 / no-o3) | RR | weight |
|---|---|---|---|
| Olsen 2000 | 42/394 vs 60/403 | 0.72 | 55.4% |
| Makrides 2010 | 13/1197 vs 27/1202 | 0.48 | 25.2% |
| Harris 2015 | 4/224 vs 7/121 | 0.31 | 8.5% |
| Carlson 2013 | 1/154 vs 7/147 | 0.14 | 6.7% |
| Min 2014 | 4/60 vs 4/57 | 0.95 | 3.8% |
| Min 2016 | 2/58 vs 0/56 | 4.83 | 0.5% |

**Serra's 7-trial low-RoB pool** (M-H fixed, OR 0.82 [0.61-1.09], I2=59%, Z P=0.18)
[@serra2021omega3]:

| Trial | events (o3 / no-o3) | OR | weight |
|---|---|---|---|
| Makrides 2019 (ORIP) | 61/2734 vs 55/2752 | 1.12 | 53.3% |
| Makrides 2010 | 13/1197 vs 27/1202 | 0.48 | 26.5% |
| Harris 2015 | 4/240 vs 7/129 | 0.30 | 8.9% |
| Carlson 2013 | 1/154 vs 7/147 | 0.13 | 7.1% |
| Min 2014 | 4/60 vs 4/57 | 0.95 | 3.8% |
| Min 2016 | 2/58 vs 0/56 | 5.00 | 0.5% |
| Farshbaf-Khalili 2016 | 0/75 vs 0/75 | not estimable | — |

**The driver is a dominant-trial swap with TWO mechanisms — one dating, one a RoB-rating
disagreement — not a model artifact.** The two pools share five trials (Makrides 2010, Harris,
Carlson, both Mins) and part at the top of the weight table. Two things differ, and both matter:

- **ORIP added (dating — telos reason #2).** Serra's pool is anchored by **ORIP / Makrides 2019**
  (53%, 1.12 null), a \~5,500-woman trial published in 2019, *after* Middleton's 2018 search, so it
  could not enter Middleton's Analysis 9.2. This half is a pure evidence-base update.
- **Olsen 2000 dropped (RoB-rating disagreement — telos reason #3).** Middleton's pool is anchored by
  **Olsen 2000** (55%, 0.72 benefit), which Serra's Figure 7 does **not** include. Olsen existed in
  2000, so this is not dating — the two reviews rated its risk of bias differently on Serra's three
  sensitivity domains. It is **materially co-responsible**: dropping a \~55%-weight benefit trial pulls
  Serra's pool up as much as adding ORIP does, so the gap is not the ORIP update alone.

Both changes push the same way, and swapping the dominant benefit trial (Olsen out) for a dominant
null trial (ORIP in) is what moves the pool from 0.61 to 0.82. The pooling model is the **same on both
sides** (M-H fixed), which falsifies the earlier "different model" hypothesis.
[@serra2021omega3] +

**The old driver-2 (model) is falsified, with a minor Serra note.** Serra used fixed-effect here
despite I2=59% (Chi2 p=0.03), which violates its own stated rule (random effects when heterogeneity
is important, I2>30%). Following the rule would only widen the CI further — still NS — so the model
choice does not rescue a benefit; the roster does the work. (Second-order: Serra labels this cell an
Odds Ratio, reported as "RR" in the text; with rare events OR ≈ RR, e.g. Makrides 2010 = 0.48 either
way.)

**Decision consequence — the newest large trial is null and drags the pooled estimate to
non-significance.** Middleton's HIGH-graded ePTB<34 headline (0.58, 9 RCTs, 2018) and its low-RoB 0.61
both predate ORIP. Serra's 0.82, which includes ORIP, is the more current estimate. ORIP itself is
*null*, not evidence of harm (OR 1.12, CI 0.77-1.62 — spans benefit through harm); what it does is
remove the significance from the pool. So the early-preterm signal weakens as the field updates, and
trends toward null — a weakening, not a disproof.

**Residual (load-bearing, not minor).** The reconciliation does NOT fully reduce to a dating update,
because the Olsen 2000 exclusion is non-dating and materially co-responsible, and the recovered figure
does not state *why* Serra rated Olsen 2000 outside its low-RoB set on the three sensitivity domains
(sequence generation, allocation concealment, blinding). That RoB-rating disagreement (reason #3) is
the open piece; settling it would need Serra's per-trial RoB table for Olsen 2000.
`G (needs Serra's per-trial RoB judgement on Olsen 2000)`

~~`G (needs the Serra Fig-7 trial-level data — a figure, not text)`~~ **CLOSED** (2026-09-29) by
direct PDF read of Figure 7 — the trial roster, weights, model, and pooled estimate are now recovered.

(Data note: for the shared trial Harris 2015 the two reviews extracted different denominators —
Middleton 4/224 vs 7/121, Serra 4/240 vs 7/129, same events — immaterial to the pooled estimate at
\~8-9% weight, but the shared-trial data are not byte-identical.)

**Net for the decision:** the low-bias randomized evidence does **not** cleanly establish a PTB<37
reduction in a general (replete) pregnant population — both reviews lose significance there once
quality-restricted. Middleton's HIGH-GRADE headline benefit rests on the full pool including
higher-RoB trials. On ePTB<34 the two golds only *appear* to diverge: once Serra's Figure 7 is
recovered, the gap is a dating difference — the largest recent low-RoB trial (ORIP, 2019) is null and
dominates Serra's pool, while Middleton's HIGH-graded 0.58 predates it. So the early-preterm signal
**weakens with the newest evidence and trends toward null**, rather than being a settled benefit.
Confidence stays `moderate`: two gold syntheses agree on the primary-outcome low-RoB estimate, and the
ePTB gap is now explained (roster/dating), not an open contradiction.

## Bottom line for the decision

- For a **reasonably-nourished** pregnant woman, the low-bias randomized evidence does **not
  cleanly establish** that routine omega-3 supplementation reduces preterm birth: both gold
  syntheses lose PTB<37 significance under a low-RoB restriction (both RR 0.92, NS). Middleton's
  GRADE-HIGH "effective strategy" verdict rests on the full pre-specified pool (0.89) including
  higher-RoB trials; no effect is seen on preeclampsia, growth restriction, or fetal/neonatal
  death. [@serra2021omega3] +
  [@middleton2018]
- **Early preterm birth (<34 wk)** is the stronger and more contested signal — Middleton HIGH
  (RR 0.58 main [@middleton2018];
  0.61 low-RoB, still significant [@middleton2018]),
  Serra low-RoB NS. [@serra2021omega3]
- **A real HARM at the post-term end:** omega-3 increases prolonged gestation >42 wk (Middleton
  RR 1.61 main, 2.32 low-RoB, NNTH \~102) — the same gestation-lengthening that helps preterm
  harms post-term. [@middleton2018]
- The **deficient** stratum is the open, unresolved candidate for benefit; it is not established
  by RCTs.
- Avoid **high doses (>2.7 g/day)** absent a specific indication — the upper-bound harm signals
  (post-term, bleeding; and the AF signal on the sibling page) argue against *more is better*.
  [@serra2021omega3] +
- `confidence: moderate` — two gold SR/MAs (one Cochrane, GRADE-rated) now converge on the
  primary-outcome low-RoB estimate; they share an RCT base (not independent) and disagree on the
  verdict-bearing analysis and on early-preterm birth, which caps confidence below high.

## References

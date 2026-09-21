---
type: framework
aliases: [Iodine in pregnancy, Prenatal iodine supplementation, Maternal iodine supplementation]
authors: [Harding, Kimberly B; Pena-Rosas, Juan Pablo; Webster, Angela C; Yap, Constance M Y; Payne, Beth A; Ota, Erika; De-Regil, Luz Maria; Bougma, Karim; Aboud, Frances E; Marquis, Grace S]
sources: [Harding - Iodine Supplementation Pregnancy 2017, Bougma - Iodine Child Mental Development Meta-Analysis 2013]
question: "Should a woman take iodine before, during, or after pregnancy — and does the answer depend on her baseline iodine status?"
cluster: deficiency-enhancement
confidence: low
created: 2026-09-17
updated: 2026-09-17
self_critiqued: 2026-09-17
relationships:
  related_to: [Excess Iodine Intake and Thyroid Disease]
  extends: [Deficiency Repletion vs Enhancement]
---

**The decision this page serves.** Should a woman take supplemental iodine in the
preconception / pregnancy / postpartum window, and does the answer turn on her **baseline iodine
status**? The honest top-line, from the only RCT-restricted synthesis (Cochrane), is that the
**randomized evidence is too thin to settle routine supplementation** — and that the benefit that
does show up is **concentrated where deficiency is severe**, which is the same deficiency-repletion
shape the [[Deficiency Repletion vs Enhancement]] concept predicts. — this lead is the
wiki's framing of the page; the underlying Cochrane verdict and effect sizes are extracted and tagged
in the sections below.

## The Cochrane verdict: insufficient, not null

The Cochrane SR restricted to RCTs/quasi-RCTs (14 studies, 11 with data, >2700 women) reached no
firm conclusion: «There were insuﬀicient data to reach any meaningful conclusions on the benefits and
harms of routine iodine supplementation in women before, during or afer pregnancy»
[@harding2017iodine]. This is the **insufficient-
evidence state, not the no-effect state** — most outcomes are single-trial, low or very-low GRADE,
with CIs wide enough to contain both meaningful benefit and none. Treat *no clear effect* here as
*unmeasured*, not *no effect*.

**A structural reason the RCT base is thin — and stays thin where it matters most.** A placebo RCT in
a **severely** deficient population «may be unethical», and where iodine-containing prenatal
supplements are already routine an RCT is unfeasible [@harding2017iodine].
So the strongest design is unavailable exactly in the stratum with the largest expected effect — the
streetlight effect on the outcome side: the RCT lamp does not shine where the key was dropped.

## What the trials do show — an adverse-effect ledger with two signals

Two effects were large enough to clear the noise (both in **mild-to-moderate** deficiency settings,
both graded low / very-low):

- **Postpartum hyperthyroidism DOWN \~68%** — average RR 0.32 (95% CI 0.11 to 0.91, 3 trials, 543
  women, I2=0) [@harding2017iodine]. (The maternal
  Summary-of-findings table mis-prints the upper bound as 1.91; the abstract and the results text both
  give 0.91 — a documented typo.)
- **Digestive intolerance UP \~15x** — average RR 15.33 (95% CI 2.07 to 113.70, 1 trial, 76 women,
  very low) [@harding2017iodine]. A tolerability/
  adherence cost, not a hard-outcome harm, but real: the adherence penalty of nausea/vomiting can sink
  a supplement in practice.

Everything else — maternal hypo/hyperthyroidism, preterm birth, TPO-antibodies, low birthweight,
neonatal thyroid function — showed **no clear difference**, all low/very-low quality, all consistent
with the insufficient-evidence reading rather than a demonstrated null
[@harding2017iodine]. **No trial reported any child
outcome beyond the neonatal period** — a hard limit on what the RCT base can say about the
neurodevelopmental endpoint that motivates supplementation.

## The child-cognition signal is a deficiency-severity gradient

The one place a large, precise benefit appears is **severe deficiency**: pooling the two old
injected-iodine trials in severely deficient settings, «the MD was 11.21 points (95% CI 7.96 to
14.46)» on child IQ, with no heterogeneity (I2=0) [@harding2017iodine].
Severe deficiency also drove prevention of cretinism / congenital anomalies (RR 0.27, 0.12-0.60) and
neonatal goitre (RR 0.11, 0.02-0.56). In **mild-moderate** deficiency the single oral RCT (Zhou 2015,
Bayley-III at 18 months) was **null** [@harding2017iodine].
The authors could not run the planned baseline-status subgroup analysis — «we did not identify enough
trials» [@harding2017iodine] — so the gradient is
read *across* trials (severe-setting trials positive, mild-setting trial null), not *within* a
subgroup contrast. Route-(a)/(b) caveat: this is suggestive effect-modification by baseline status,
but it rests on between-trial comparison, not a powered interaction test.

## How this refines the held iodine evidence (Bougma 2013) — a type-F advance, NOT independent corroboration

The wiki already holds Bougma 2013 (iodine -> child mental development; the held instance is on
[[Deficiency Repletion vs Enhancement]]). Harding is a **refinement (type F) of the same evidence
lineage, not an independent corroboration (type E)**: Kimberly B Harding is a **co-author of Bougma
2013**, the two syntheses **share their severe-deficiency IQ trials** (Kevany 1969, Thilly 1978,
Pharoah 1971), and WHO-affiliated authors recur across both. A shared author defeats independence
outright, so this adds **no E-count and no independent-backing confidence** to the child-IQ claim —
it sharpens the *same* claim.

The parameter table (built before any prose comparison, per the cross-source rule):

| Parameter | Harding 2017 (Cochrane) | Bougma 2013 | Same quantity? |
|---|---|---|---|
| Evidence base | RCT / quasi-RCT only | 2 RCT + 8 non-RCT trials + 13 prospective cohorts | **NO** — RCT-restricted subset vs observational-inclusive |
| Child IQ, severe deficiency, RCT-grade | MD **+11.21** points (7.96-14.46), 2 trials, 174 children | RCT-only pooled **d=0.68 (\~+10.2 IQ)** | **\~YES** — both severe-deficiency RCT estimates; converge \~+10-11 IQ, overlapping trials |
| Child IQ, all designs pooled | not computed (RCT-restricted) | **d=0.49 = +7.4 IQ** (range 6.9-10.2) | **NO** — Bougma includes observational; Harding excludes it |
| Child IQ, mild-moderate deficiency | **null** (Zhou 2015, oral) | not isolated (has timing window: early d=0.51 vs late 0.17) | **NO** — Harding adds a mild-deficiency null Bougma lacks |
| Overall verdict on child development | «mixed» / insufficient for routine | «positive impact ... regardless as to the study design» | These ARE the divergence — see below |

**The divergence is a design artifact, adjudicated by the source itself — not a tension to file.**
Harding names the gap and its cause: «Findings showed a positive impact of iodine, regardless as to
the study design, ranging from 6.9 to 10.2 IQ points, whereas our findings on child development were
mixed» [@harding2017iodine]; and of the similar
Zimmermann 2012a review, «This review reached diﬀerent conclusions to ours, however this may be
explained by its design» — Zimmermann did not specify study-inclusion criteria and included
non-randomized trials [@harding2017iodine]. Run the not-joined
check: the two verdicts hold on **different evidence bases** (RCT-restricted vs observational-
inclusive) and are **consistent once matched** — where designs overlap (severe-deficiency RCTs) both
give \~+10-11 IQ; Bougma's larger, broader estimate rides on observational data an RCT-only synthesis
discards. This is scope-mismatch (not-joined check (ii)), a **distinction, not a `[[tension]]`**.

**Net F-composite:** Bougma alone reads as *iodine adds \~7 IQ points broadly*; Harding bounds that —
the RCT-grade, severe-deficiency benefit is real and \~+11 IQ, but the broad estimate is inflated by
observational designs, and in **mild-moderate** deficiency the randomized evidence is null-to-thin.
The composite is the deficiency-repletion shape, not a universal enhancement.

## Supplementation is also a route to iodine EXCESS in pregnancy

Iodine is not monotone-benign: the same trials show supplementation **raised excessive iodine intake**
— «7.0% of women who received iodine supplements and 1.6% of women who did not had excessive iodine
intake during pregnancy (average RR 4.33; 95% CI 1.24 to 15.07)»
[@harding2017iodine], and paradoxically raised
*insufficient* neonatal intake (RR 2.14, 1.04-4.37) by an unexplained mechanism. The upper arm is a
real harm channel -> [[Excess Iodine Intake and Thyroid Disease]]; a deficiency benefit plus an excess
harm on the same nutrient is the genuine two-armed U, not the artifactual kind
-> [[The U-Shaped Association Artifact]]. Note the tolerable-upper-intake
figures (IOM 1100 µg/day, EC 600 µg/day) are «not intended for iodine-deficient populations»
[@harding2017iodine] — a deficient thyroid can be
harmed at lower intakes than a replete one, so the safe window is *narrower*, not wider, in the very
stratum that benefits most.

## Decision map by baseline iodine status (the stratification this supports)

- **Severe deficiency (endemic).** Strongest case: RCT-grade IQ benefit (\~+11), cretinism and
  congenital-anomaly prevention, a non-significant 34% lower perinatal mortality concentrated in the
  one severe-deficiency trial [@harding2017iodine].
  This is deficiency-repletion, and it is why placebo RCTs here are now considered unethical. Rare in
  the wiki's reasonably-healthy default stratum.
- **Mild-moderate deficiency (most of the trial evidence, and most of the developed world).** Benefit
  on hard child outcomes is **unproven by randomized evidence** (the one oral RCT was null); the
  demonstrable effects are a lower postpartum-hyperthyroidism risk and a digestive-tolerability cost.
  Guidance bodies still recommend \~150-250 µg/day (WHO/UNICEF/ICCIDD 250; EFSA 200; IOM 220/290) on
  the precautionary logic that fetal brain development is time-critical and status *before* conception
  matters [@harding2017iodine] — a
  population-standpoint call the RCT evidence does not itself compel.
- **Replete.** No evidence of benefit and a live excess-intake channel (RR 4.33) — the enhancement
  leg, where more buys nothing and the upper bound is the operative risk.

## Gaps (type G)

- **No powered baseline-status subgroup analysis exists** — the single most decision-relevant cut
  (who benefits) is exactly the one too few trials could support.
- **No child outcome beyond the neonatal period in any RCT** — the neurodevelopmental endpoint is
  RCT-unmeasured past infancy; the +11.21 rests on two old injected-iodine trials.
- **Mild-moderate-deficiency child cognition** rests on one small aborted oral RCT (Zhou 2015) — a modern RCT pooling of mild-deficiency oral supplementation on validated child
  cognition. `confidence: low`.
- **G (needs aggregation):** a pooled RCT-grade absolute effect on child IQ *by baseline status* is a
  magnitude the current trial set cannot compute — an honest structural limit, not a queue item.

## References

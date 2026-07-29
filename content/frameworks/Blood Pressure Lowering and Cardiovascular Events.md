---
type: framework
question: Does lowering blood pressure reduce hard cardiovascular events — and does the benefit depend on baseline BP or on already having heart disease?
aliases: [Blood Pressure Lowering, Antihypertensive CV Benefit, BP Lowering Primary Prevention, BPLTTC, Hypertension Treatment Outcomes, Treat to Risk Not Threshold]
authors: [Blood Pressure Lowering Treatment Trialists Collaboration (org); Rahimi, Kazem]
sources: [BPLTTC - Blood Pressure Lowering Primary and Secondary Prevention 2021, SPRINT - Intensive vs Standard Blood Pressure 2015]
cluster: cvd-risk-estimation
confidence: high
relationships:
  related_to:
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
    - Baseline Risk and the Relative-Absolute Split
    - Sodium Intake and Blood Pressure
    - The U-Shaped Association Artifact
    - SCORE2 Baseline Risk and the ESC Treatment Thresholds
created: 2026-07-29
updated: 2026-07-29
self_critiqued: 2026-07-29
---

Of the cardiometabolic interventions the wiki holds, **BP-lowering is the one whose hard-outcome benefit
is proven to reach primary prevention** — the partial exception to
[[Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People]]. The largest randomised
evidence base (BPLTTC 2021, «344 716 participants from 48 randomised clinical trials») settles two long-
contested questions: the benefit does **not** require pre-existing heart disease, and it does **not**
vanish at lower baseline blood pressure.

## The effect, and why its independence from baseline is the point

> «a 5 mm Hg reduction of systolic blood pressure reduced the risk of major cardiovascular events by
> about 10%, irrespective of previous diagnoses of cardiovascular disease, and even at normal or
> high–normal blood pressure values».

Per 5 mmHg SBP reduction, the hazard ratio for a major CV event was **0.91 (0.89-0.94) in people without
prior CVD** and **0.89 (0.86-0.92) in those with it** [EXTRACTED (BPLTTC - Blood Pressure Lowering
Primary and Secondary Prevention 2021) Results]. Across seven baseline-SBP strata from <120 to >=170
mmHg there was «no reliable evidence of heterogeneity», and «in no subgroup was the HR above 1·0».
Component reductions per 5 mmHg: stroke 13%, heart failure 13%, ischaemic heart disease 8%, CV death 5%.

**This is what distinguishes BP-lowering from the other cardiometabolic levers.** Lifestyle weight loss
was null on hard events even where it was achieved ([[Does Weight Loss Reduce Cardiovascular Events]]);
an obesity drug's CV benefit is unproven outside established disease
([[Semaglutide for Cardiovascular Risk in Obesity]]); a statin's is real but decays to below the
action threshold at low risk ([[Statins for Primary Prevention and the Power of Zero CAC]]). BP-lowering
alone has a **directly proven relative benefit in primary prevention**, at an IPD-meta-analytic warrant.

## But the ceiling's mechanism survives — treat on absolute risk, not a BP number

The paper does **not** conclude *lower everyone's BP*. Its explicit decision rule is the
[[Baseline Risk and the Relative-Absolute Split]] applied to blood pressure:

> physicians should «emphasise its importance on reducing cardiovascular risk rather than focusing on
> blood pressure reduction itself»; the finding «calls for consideration of blood pressure-lowering
> treatment for any individual who has a sufficiently high absolute risk of cardiovascular disease».

And the guard against over-reading, in the authors' own words: the uniform *relative* effect «does not
necessarily mean that it is worthwhile treating every patient» — decisions «will require consideration
of... an individual's overall risk of future cardiovascular events, potential risk of adverse effects,
the cost of treatment, and patient preferences». They even «caution against using the reported absolute
risk differences from clinical trials for making policy decisions» — the trials' populations were
higher-risk (absolute rates «31·9... in the comparator group and 25·9... in the intervention group» per
1000 person-years without prior CVD, i.e. a ~2.4%/yr baseline, far above a low-risk primary-prevention
person).

**So BP-lowering refines, not refutes, the ceiling.** Its *relative* benefit is proven where weight-loss
and GLP-1 CV benefit are not — but the *absolute* benefit still scales with baseline risk, exactly the
ceiling's mechanism, and the paper legislates the same rule (treat on absolute risk). A constant ~10% per
5 mmHg on a low absolute risk is a small absolute gain; on a high one it is large.

## What it does not settle

- **Not the target.** BPLTTC standardises to a *fixed 5 mmHg reduction* and shows a consistent *relative*
  effect; it «is unable to directly address» the optimal magnitude or a target BP. How low to go is a
  separate question — *now partly held via SPRINT below*.
- **Not the drug/adverse-effect trade-off** for an individual — adverse effects, cost and preferences are
  named as decision inputs but not quantified — *SPRINT supplies the harm side, below*.

## SPRINT — the intensive-target trial that operationalises *treat on absolute risk*

BPLTTC is the meta-analysis and carries the per-mmHg claim; **SPRINT is one landmark RCT**, read *inside*
that framing as the worked target-trial. It randomised 9,361 **high-CV-risk, non-diabetic** hypertensives
to a systolic target «less than 120 mm Hg (intensive)» vs «less than 140 mm Hg (standard)» (achieved
~121 vs ~136), and stopped early (median 3.26 y):

- **Intensive won on hard outcomes:** primary composite (MI/ACS/stroke/HF/CV-death) «hazard ratio ...
  0.75; 95% CI 0.64 to 0.89»; and **all-cause mortality «hazard ratio, 0.73; 95% CI 0.60 to 0.90»** — a
  25% and 27% relative reduction, «number needed to treat ... to prevent one primary outcome event was
  61» over 3.26 years. [EXTRACTED (SPRINT - Intensive vs Standard Blood Pressure 2015) chunk 01]
- **It confirms BPLTTC's own logic rather than competing with it.** SPRINT selected a *high-risk*
  population — exactly where BPLTTC says the *absolute* benefit of a given relative effect is largest —
  and the ~15 mmHg achieved gap, at BPLTTC's ~0.91 per 5 mmHg, predicts a composite HR near 0.75, which
  is what SPRINT observed. `[INFERRED — the ~15 mmHg x 0.91/5mmHg ≈ 0.75 arithmetic is the wiki's; and
  SPRINT is one of the trials inside the BPLTTC pooled estimate, so this is a worked example, not
  independent confirmation.]`
- **The harm side BPLTTC did not quantify:** intensive treatment raised serious «hypotension, syncope,
  electrolyte abnormalities, and acute kidney injury or failure, but not ... injurious falls».
  [EXTRACTED (SPRINT - Intensive vs Standard Blood Pressure 2015) chunk 01] So a lower target buys real
  events in the high-risk but at a real adverse-event cost — the target decision is a net-effect
  judgement, not *lower is always better*.

## A clean refutation of the observational J-curve

The intro records the standing controversy: registries show a «J-shaped association» between BP and
events (lowest risk ~130/75, implying harm below), which had been read as a reason not to lower BP far.
The randomised evidence shows benefit «down to less than 120 mm Hg» with no rising HR in any low-BP
stratum — so the observational J-curve is not a treatment effect. A worked instance of
[[The U-Shaped Association Artifact]]: the protective-looking lower arm of an observational curve does
not survive the randomised (here, interventional) check.

## Decision relevance

- **BP-lowering is the cardiometabolic lever with the best hard-outcome warrant, and it applies in
  primary prevention** — for a hypertensive person it is the one place a proven CV-event reduction is on
  the table.
- **But decide on absolute CV risk, not the BP number.** A ~10%-per-5-mmHg relative effect buys little
  absolute benefit at low risk and a lot at high risk; combine the relative effect with a stratum-
  specific baseline ([[SCORE2 Baseline Risk and the ESC Treatment Thresholds]]) rather than treating to a
  threshold. This also means the exact BP measurement matters less than the overall risk.
- **Lifestyle BP reduction (e.g. sodium, weight) plugs into the same channel.** [[Sodium Intake and Blood Pressure]]
  holds BP as a *surrogate* with hard outcomes graded very low; BPLTTC supplies the missing link —
  *pharmacological* BP reduction does reduce hard events — but the transmission of a *sodium-induced* BP
  drop to events is an assumption, not the same evidence (a different intervention, unmeasured here).

## Limits

- Trials 1972-2013 — older drug regimens and co-treatment; relative (not absolute) effects are the
  transportable quantity, by the authors' own caution.
- One (very large) collaboration's IPD; the target-BP and adverse-effect questions are out of its design.
- Applies to *pharmacological* lowering; do not silently transfer the magnitude to a lifestyle route.

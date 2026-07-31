---
title: "What to Measure: A Minimal Health Checklist"
type: deliverable
question: What is the smallest set of readily-capturable health metrics that places a person in the strata the fabric stratifies on, ordered by decision-impact x capturability?
sources: [ESC - CVD Prevention Guidelines 2021, Jha - Smoking Hazards Cessation Benefits 2013, BPLTTC - Blood Pressure Lowering Primary and Secondary Prevention 2021, EASL - MASLD Clinical Practice Guidelines 2024, Goldenberg - Low Carbohydrate Diets T2D Remission 2021, Ference - LDL Cause ASCVD EAS Consensus 2017, Dehghan - PURE Fats Carbohydrate Mortality 2017, Kodama - Cardiorespiratory Fitness and Mortality 2009, Mandsager - Cardiorespiratory Fitness and Long-Term Mortality 2018, Ross - Cardiorespiratory Fitness Clinical Vital Sign 2016, Momma - Muscle-Strengthening Activities and Mortality 2022, Look AHEAD - Cardiovascular Effects Lifestyle T2D 2013, Belalcazar - Lifestyle Statins CRP Look AHEAD 2013]
confidence: medium
created: 2026-07-30
updated: 2026-07-30
self_critiqued: 2026-07-30
---

The wiki holds *general* estimates — what an exposure does for a reference class. Turning one into
advice for a specific person means placing them in the right class: their cardiovascular-risk cell,
their metabolic stratum, their fitness band. That placement needs the person's own numbers. This is
the short list of the numbers that do most of the placing, ordered cheapest-and-highest-yield first.

**The finding, stated up front: almost all of the placement value sits in a handful of free or
near-free measures.** The Tier 1 metrics below — age, sex, smoking status, blood pressure, waist — cost
nothing beyond a tape measure and a cuff, yet they place a person against the two levers with the
strongest hard-outcome evidence the wiki holds: quitting smoking (roughly a three-fold mortality
difference) and blood-pressure lowering (one of the few cardiometabolic interventions with a hard-outcome
benefit proven to reach primary prevention — LDL-lowering via statins, per Ference, is another).

The expensive metrics — apoB, VO2max, grip strength — mostly *sharpen* a
picture the cheap ones already draw, or track predictors and surrogates rather than proven levers. So
the tiering is not incidental: it mirrors the intervention hierarchy itself
([[Layer 1 - Ranking Interventions for a Stratum]]), where most of the achievable effect sits in a few
large exposures and the long tail shares what is left.

**How to read this list.** Each metric earns its place only if knowing it *moves a decision the fabric
can act on* — not merely because it is measurable. Capturing a number is in scope; interpreting it
(reference ranges, diagnosis, what to do about it) is a clinician's act and is out of scope. Several of
these numbers are surrogates or predictors, not proven levers — measuring them locates a person in a
stratum; it does not prove that changing the number changes an outcome (see the caveats at the foot).

## Tier 1 — free or trivial to capture (do these first)

- **Age and sex.** They define the reference class and are the first inputs to the ESC SCORE2
  cardiovascular-risk model [@esc2021, Figure 3]. Age does most
  of the work: the same 10-year CVD risk means different things at different ages — an 8% risk is
  *very high* under 50 but only *high* at 72, because the treatment thresholds themselves rise with age
  (very-high band: >=7.5% under 50, >=10% at 50-69, >=15% at >=70) [@esc2021, Table 5]. Without age and sex, no other cardiovascular number can be read.

- **Smoking status.** The single largest modifiable exposure, and free to ask. Current smokers die at
  about three times the rate of never-smokers (all-cause HR 3.0, 99% CI 2.7-3.3 in women; 2.8, 2.4-3.1
  in men), losing more than a decade of life; quitting before \~40 removes about 90% of that excess risk
  [@jha2013]. It is also a SCORE2 input that
  shifts the risk read-off substantially. No attainable precision about any diet metric changes what a
  smoker should do next.

- **Blood pressure (with resting heart rate).** Blood pressure is a SCORE2 input, and it flags one of the
  few cardiometabolic levers with a hard-outcome benefit proven to reach primary prevention (LDL-lowering
  is the other): each 5 mmHg
  reduction in systolic pressure cuts major cardiovascular events by about 10% (HR 0.91, 0.89-0.94 in
  people without prior CVD), with no threshold below which the benefit vanishes
  [@bplttc2021, Results]. Capture
  **resting heart rate** at the same time — it is free, and it is an input to the non-exercise fitness
  estimate in Tier 3 [@ross2016, eCRF
  equations].

- **Waist circumference (plus height and weight for BMI).** Visceral adiposity is the dominant
  *metabolic* lever, and waist is a cardiometabolic criterion for fatty-liver disease (MASLD): a waist
  >=94 cm in men or >=80 cm in women (European thresholds), or BMI >=25, is one of the factors that
  places a person in that stratum [@easl2024].
  Waist beats BMI for visceral fat specifically, but BMI is universal and free — so capture both, and
  read waist as the metabolic signal. A person with obesity plus metabolic syndrome is at high likelihood
  of MASLD (which EASL confirms on demonstrated steatosis, not on the risk factors alone), and its
  dominant risk is cardiovascular, not hepatic (non-fatal CVD HR 1.40, plus
  a more-than-doubled risk of developing type 2 diabetes) [@easl2024].

## Tier 2 — one standard blood draw (the metabolic and lipid panel)

- **HbA1c.** Places a person on the dysglycemia / metabolic-syndrome axis — the stratum where weight
  loss and carbohydrate restriction act, and where a low-carbohydrate diet can raise the remission rate
  (risk difference 0.32 at six months, an NNT of about 3, with medication continued)
  [@goldenberg2021, Results]. Prefer it to fasting
  glucose: no fast is needed and it is less noisy.

- **Lipid panel, read as non-HDL cholesterol (not LDL-C as the headline).** A standard panel gives total
  cholesterol, HDL and triglycerides; **non-HDL** (total minus HDL) is calculated for free and captures
  *all* apoB-containing atherogenic particles. This matters for exactly the metabolic stratum this list
  is built around. apoB — the count of atherogenic particles — is the causal quantity for atherosclerotic
  disease, and in the metabolically-impaired (metabolic syndrome, diabetes, high triglycerides) LDL-C
  and particle number *diverge*: small dense LDL packs more particles into a given cholesterol mass, so
  LDL-C **under-states** the true atherogenic burden [@ference2017]. Cohort data point the same way — the apoB/apoA1 ratio predicted cardiovascular risk
  better than LDL-C [@dehghan2017]. So for this
  stratum, emphasise non-HDL over LDL-C. Keep LDL-C in the panel — it is a good particle surrogate for
  lean, metabolically-healthy people and it is universally reported — but do not let it be the headline
  where the person is insulin-resistant.

- **ALT (liver enzyme).** The cheapest routine screen for the fatty-liver stratum, which this metabolic
  group leans toward [@easl2024]. Standard on
  most panels.

## Tier 3 — add only where it significantly moves the needle

Each of these carries a real capturability cost, so add it only when it changes a stratum or a decision
the cheaper metrics leave open.

- **Lp(a), measured once in a lifetime.** Lipoprotein(a) is a genetic, apoB-containing atherogenic
  particle [@ference2017], and because it is
  largely genetically fixed it need be measured only once. **But weight its incremental value honestly:**
  the one cardiovascular-prevention guideline the wiki holds rates its added reclassification value on
  top of standard risk factors as limited [@esc2021, 3.3]. So
  Lp(a) tells you about a causal particle, but the held evidence that measuring it *changes* a
  primary-prevention decision is thin — a once-only add, not a routine requirement.

- **apoB, where available — the upgrade over non-HDL.** apoB is the direct particle count and the most
  complete of the lipid measures: it captures LDL plus VLDL remnants, IDL and Lp(a), and that extra
  coverage widens exactly in the hypertriglyceridemic / metabolic-syndrome state where it matters most
  [@ference2017]. Treat it as the upgrade over
  calculated non-HDL *where the assay is available* — it is at the edge of the standard battery, so
  non-HDL remains the population-available default.

- **Cardiorespiratory fitness (VO2max), by the free eCRF proxy first.**
  - Fitness is one of the strongest
    mortality predictors in medicine: each 1-MET higher fitness carries about 13% lower all-cause mortality
    and 15% lower CHD/CVD events (fatal + non-fatal) [@kodama2009], and being unfit is a *larger* mortality signal than smoking, diabetes or coronary disease
    in the same model — low-vs-elite fitness HR 5.04 (4.10-6.20), with no upper limit of benefit
    [@mandsager2018].
  - A direct
    test needs equipment, so the population-available route is **estimated CRF (eCRF)** — equations that
    predict fitness from age, sex, BMI, resting heart rate and self-reported activity (all captured in
    Tier 1), and predict mortality comparably to measured fitness [@ross2016, eCRF equations].
  - The honest boundary: fitness is a *predictor* and
    a trackable *outcome* of the physical-activity lever, not a proven cause of longer life on its own.

- **Grip strength — high-yield if available, but flagged.** Low grip strength is among the strongest
  mortality predictors and is trivial to capture with a hand dynamometer. The wiki holds it only
  second-hand — strength training reduces mortality (all-cause RR 0.85, 0.79-0.93, though on very-low-
  certainty observational evidence) [@momma2022, effects table] — and the grip-strength-as-predictor literature itself is *not ingested*. So grip
  is a reasonable, cheap add for an older or frailty-risk person, but its evidential home in this wiki is
  currently a named gap, not a held source.

## The skip-list — what not to capture, and why

- **Body fat % (DEXA or bioimpedance).** Waist is a cheaper, population-available proxy for the
  decision that matters (visceral adiposity and the metabolic stratum); DEXA/BIA is not part of a
  standard battery and adds no stratum the waist does not already place. Skip unless there is a specific
  reason waist cannot be used.

- **hsCRP (inflammatory marker).** This is the clearest skip, and the wiki's own worked case shows why.
  In the largest lifestyle trial, C-reactive protein fell by roughly 42-45% among participants *on
  statins* (and far less, \~2-14%, from lifestyle alone)
  [@belalcazar2013, Results] — yet the same trial found
  *no* reduction in cardiovascular events (HR 0.95, 0.83-1.09) [@look2013, Results]. A marker that moves dramatically while the outcome does not is
  the textbook surrogate trap ([[Surrogate Outcomes]]): hsCRP moves an inflammation *number*, not a
  decision the fabric can act on.

- **Fasting glucose.** Largely overlaps HbA1c, which needs no fast and is less noisy. Capturing both
  adds little; prefer HbA1c.

- **LDL-C as the *headline* lipid.** Not dropped — keep it in the panel — but for the metabolically-
  impaired it under-states the atherogenic particle burden, so non-HDL (or apoB where available) is the
  better headline number [@ference2017]. This is a
  de-emphasis, not an exclusion.

## Gaps in what this list rests on (stated plainly)

- **The tiering rests on predictor and mechanism strength, not on head-to-head added-value studies.**
  The wiki holds *no* evidence on the *incremental* decision value of each metric over the cheaper one it
  sits above — apoB over non-HDL, a measured VO2max over eCRF, grip strength over nothing — as a
  risk-reclassification study. So the order is a reasoned Pareto ranking of *inputs*, the same shape as
  the intervention ranking ([[Layer 1 - Ranking Interventions for a Stratum]]), not a measured one; a
  risk-reclassification or added-value source would firm it up. A related instrument the fabric names but
  does not yet hold is a formal risk-modifier test — a metric changes a decision only when it can move a
  person across a threshold ([[Risk Modifiers - When Extra Information Changes a Risk Estimate]]).

- **Grip strength, Lp(a), smoking-as-metric, and apoB assays sit on thin or pending pages.** The cut
  cites them at the strength currently held; grip strength in particular has no ingested source of its
  own.

## Mandatory caveats

- **Capture, not interpret or prescribe.** Reference ranges, diagnosis and acting on any of these
  numbers are clinician acts the wiki cannot perform. This names *what to measure* to place a person in
  a stratum — not what the number means for them.

- **The loop is open.** This list grades what the held evidence says *changes a decision*. It does not,
  and cannot, grade whether capturing these metrics improves a real outcome — no operation here tests a
  metric against a realized result. Several of the metrics are surrogates or predictors (fitness, grip,
  the lipid particles, hsCRP on the skip-list) rather than proven causal levers.

- **A general default, tuned per person.** Which metrics matter most depends on the individual: a lean,
  active 25-year-old and a drifting-median metabolic adult need different emphases. The tiers are the
  starting default, not a fixed prescription — the weighting is done per case when the fabric is applied.

## References

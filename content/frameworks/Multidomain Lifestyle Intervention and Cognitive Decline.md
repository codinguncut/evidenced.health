---
type: framework
question: Does acting on the modifiable dementia risk factors as a bundle (diet + exercise + cognitive training + vascular monitoring) actually improve or maintain cognition — or prevent dementia — in a randomised trial, and by how much?
aliases: [FINGER, FINGER trial, preDIVA, Vascular Care to Prevent Dementia, Multidomain Dementia Prevention, Multidomain Cognitive Intervention, Multidomain Dementia Incidence, Lifestyle Intervention for Cognitive Decline, MAPT, MAPT trial, Multidomain Alzheimer Preventive Trial]
authors: [Ngandu, Tiia; Lehtisalo, Jenni; Solomon, Alina; Levälahti, Esko; Soininen, Hilkka; Kivipelto, Miia; Moll van Charante, Eric P; Richard, Edo; Eurelings, Lisa S; van Dalen, Jan-Willem; Hoevenaar-Blom, Marieke P; van Gool, Willem A; Andrieu, Sandrine; Guyonnet, Sophie; Coley, Nicola; Cantet, Christelle; Vellas, Bruno; Shourick, Jason; Mendes, Augusto J; Ribaldi, Federica; Frisoni, Giovanni B]
sources: [Ngandu - FINGER Multidomain Cognitive Decline 2015, Moll van Charante - preDIVA Multidomain Dementia Prevention 2016, Andrieu - MAPT Multidomain Omega-3 Cognitive 2017, Coley - Multidomain Dementia MAPT preDIVA Pooled 2025, Mendes - Single- and Multidomain Lifestyle Cognitive Decline 2025]
cluster: dementia
confidence: low
created: 2026-08-05
updated: 2026-09-05
self_critiqued: 2026-09-05
relationships:
  related_to:
    - Dementia Prevention and Modifiable Risk Factors
    - Surrogate Outcomes
    - Physical Activity Dose and Mortality
    - Layer 1 - Ranking Interventions for a Stratum
    - Big Rocks (Elderly)
    - Measurement Error in Dietary Assessment
    - Blood Pressure Lowering and Cardiovascular Events
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
---
<div class="recent-update" data-last-updated="2026-09-05">

The **interventional (RCT) facet** of the `dementia` cluster — orbits the nucleus
[[Dementia Prevention and Modifiable Risk Factors]] (which holds the *observational* per-factor PAF map).
This page holds the **three landmark randomised tests** (FINGER, MAPT, preDIVA) of whether acting on those
levers *as a bundle* helps, plus the **pooled individual-participant responder analysis** of two of them
(Coley 2025) — and the story is that the result is **not robust**: it depends on the endpoint, the
population, and the intervention's intensity, and when the two hard-endpoint trials are pooled and searched
for the subgroup that responds, **no responder subgroup rescues it** (see *The pooled responder verdict*
below). A network meta-analysis of the **whole RCT literature** (Mendes 2025, 109 trials) then ranks the
combinations and finds the leanest effective one — **exercise + cognitive training** — beats the fuller
multidomain bundle: *more is not better* (see *The comparative hierarchy* below).

- **FINGER** (Ngandu 2015) — a 2-yr, double-blind, 6-centre RCT (n=1260, selected at-risk CAIDE >=6 but
  cognitively near-normal Finns) that moved a **cognitive-composite surrogate** (below).
- **MAPT** (Andrieu 2017) — a 3-yr, 4-arm placebo-controlled RCT (n=1680, elderly with a *memory complaint*,
  France/Monaco) testing a multidomain lifestyle bundle +/- omega-3 on the **same kind of cognitive-composite
  surrogate** FINGER moved — and it was **NULL** at the whole-population level (see *The non-replication —
  MAPT* below). The sharp within-family comparison: same outcome type, closest intervention type, opposite
  result. [@andrieu2017]
- **preDIVA** (Moll van Charante 2016) — a 6.7-yr open-label cluster-RCT (n=3526, *unselected*
  community-dwelling Dutch aged 70-78) that showed **no reduction in the hard endpoint, dementia
  incidence** (HR 0.92; the incidence anchor FINGER lacked — see *The hard-incidence anchor* below).
  [@mollvancharante2016]

FINGER first: it is a **proof-of-concept** trial:
"a proof-of-concept randomised controlled trial, we aimed to assess a multidomain approach to prevent
cognitive decline in at-risk elderly people from the general population."
[@ngandu2015]

</div>

## The effect — real, significant, and small

effect_measure: NTB total cognitive-composite Z-score, between-group difference in change per year
  = **0.022 (95% CI 0.002-0.042, p=0.030)**; "Improvement in NTB total score after 24 months was 25%
  higher in the intervention group than in the control group"; **Cohen's d 0.13** at 2 years.
population_and_comparator: at-risk (CAIDE >=6), cognitively near-normal elderly (60-77), vs an **active
  control** (general health advice + mailed lab feedback), NOT a do-nothing arm.
outcome: **a cognitive-test composite (surrogate), NOT dementia incidence.**
uncertainty: CI excludes zero but the lower bound (0.002/yr) is near-null; d=0.13 is a small effect.
certainty: single proof-of-concept RCT; `confidence: low` (unreplicated; surrogate endpoint).

- **Both groups improved** (2-yr NTB total change 0.20 intervention vs 0.16 control) — partly practice
  effects of repeated testing; the *between-group* gap is the effect. [@ngandu2015]
- **What reached significance:** overall cognition (p=0.030), **executive functioning** (p=0.039, +83%),
  **processing speed** (p=0.029, +150%). **What did NOT:** the **prespecified memory domain** — the
  intervention showed no significant change on it (figure p=0.36); only a **post-hoc** complex-memory
  score reached p=0.036.
  [@ngandu2015]
- **Cognitive-decline odds (post-hoc, control vs intervention):** NTB total OR 1.31 (1.01-1.71); executive
  1.29 (1.02-1.64); processing speed 1.35 (1.06-1.71); **memory 1.23 (0.95-1.60) — NS.**
  [@ngandu2015]
- **Safe, adherable:** all-four-domain participation 72%; "Adverse events occurred in 46 (7%) participants
  in the intervention group compared with six (1%) participants in the control group; the most common
  adverse event was musculoskeletal pain" (exercise-related). No serious intervention-related AEs.
  [@ngandu2015]

## Three limits that bound what this licenses (all author-stated)

- **Surrogate boundary.** The endpoint is a cognitive composite; dementia/AD *incidence* was not
  measured — a 7-year extended follow-up is planned to assess intervention effects on incidence of
  dementia and Alzheimer's disease. So FINGER shows the **surrogate moved**, not that dementia was
  prevented. [@ngandu2015] -> [[Surrogate Outcomes]]
- **Non-decomposability.** "The multimodal intervention model needs to be investigated further,
  particularly with regard to the contribution of each component." **The design cannot say whether diet,
  exercise, cognitive training or vascular care did the work** — a bundle proven as a bundle. This is
  itself decision-relevant: the trial licenses *the package*, not a claim about any single lever, and it
  cannot validate the observational per-factor PAF decomposition on the nucleus page.
  [@ngandu2015]
- **Conservative vs active control; public-health not personal.** Estimates "could be considered to be
  conservative" (adherence unadjusted; control also got vascular advice) and benefits "might thus be
  greater if compared with a do-nothing control group"; but the flip side is that FINGER speaks to
  **public-health, not personal, significance** — the trial's own reading is that public-health
  significance is not easily translated into clinical or personal significance. A d=0.13 population effect
  does not promise a given person a measurable cognitive gain.
  [@ngandu2015]

## What it changes about what to do

- **The direction is now RCT-backed, the magnitude bounded.** Acting on the modifiable levers as a bundle
  produces a *real but small* cognitive benefit in an at-risk stratum — enough to raise confidence that
  the observational levers are worth pulling, not enough to over-sell a personal cognitive payoff. Most of
  those levers (BP, glucose, weight, activity, diet) are the cardiometabolic **big rocks** already pulled
  for other outcomes -> [[Layer 1 - Ranking Interventions for a Stratum]], [[Big Rocks (Elderly)]], so the
  cognition signal is a *second* patient-important outcome on levers already ranked high, not a new
  free-standing intervention to add.
- **Transportability is baseline-risk-conditioned (route a).** The effect was found in CAIDE-high,
  cognitively-near-normal elderly. It does not transport to dementia patients (excluded) or to a low-risk
  group; absolute benefit scales with baseline dementia risk. Dietary self-report in the diet arm carries
  the usual measurement error -> [[Measurement Error in Dietary Assessment]].
- **Single-domain trials had been null; the multidomain bundle was positive** — consistent with the
  vault's held observation that a lone structured-exercise RCT found no cognition benefit
  -> [[Physical Activity Dose and Mortality]]. But non-decomposability means this is *not* evidence that
  exercise (or any one component) works alone.
- **Nor does the *modality* of exercise resolve it.** A 2023 umbrella claims mind-body exercise
  outperforms aerobic/resistance for cognition, but the advantage is a cross-review comparator artifact,
  not established modality-specific benefit -> [[Mind-Body Exercise and Cognition]]. So neither the
  *dose* nor the *type* of the exercise component rescues a single-domain cognition effect here.


## The non-replication — MAPT (3-yr, 4-arm RCT, NULL on the same surrogate) `[2026-08-07]`

Where preDIVA differed from FINGER on *both* the intervention and the endpoint, **MAPT is the sharp
comparison**: it moved the **same kind of cognitive-composite surrogate**, with a bundle of the **same
lifestyle type** (physical activity + cognitive training + nutrition) — and found **no effect at the
whole-population level**. «The multidomain intervention and polyunsaturated fatty acids, either alone or in
combination, had no significant effects on cognitive decline over 3 years in elderly people with memory
complaints.» [@andrieu2017]

effect_measure: change baseline->36 months on a composite Z score of four cognitive tests (FCSRT free+total
  recall, ten MMSE orientation items, DSST, Category Naming Test); between-group difference vs placebo.
population_and_comparator: n=1680 (mITT 1525), community-dwelling >=70, **selected on a spontaneous memory
  complaint, one-IADL limitation, or slow gait** (NOT cardiovascular-risk-selected); 13 memory centres,
  France/Monaco. Placebo / no-multidomain comparator (weaker contrast than FINGER's active control).
outcome: **cognitive-composite surrogate**, not dementia incidence (same construct-type as FINGER's NTB).
result: **NULL after multiple-comparison correction.** «there were no significant differences in 3-year
  cognitive decline between any of the three intervention groups and the placebo group. Between-group
  differences compared with placebo were 0·093 (95% CI 0·001 to 0·184; adjusted p=0·142) for the combined
  intervention group, 0·079 (–0·012 to 0·170; 0·179) for the multidomain intervention plus placebo group,
  and 0·011 (–0·081 to 0·103; 0·812) for the omega 3 polyunsaturated fatty acids group.»
  [@andrieu2017]
certainty: single large RCT, null on the primary; `confidence: low` unchanged (the null lowers, not raises,
  confidence in the FINGER surrogate signal).

- **The combined arm was a borderline positive that died on correction.** Its raw p=0·047 and CI lower bound
  (0·001) barely excluded zero, but Hochberg correction for the three comparisons pushed adjusted p to 0·142
  [@andrieu2017]. And even taken at face value,
  0·093 over 3 years is **far below the composite's minimal clinically important difference** (an anchor-based
  estimate put the MCID near –0·3 points *per year*) [@andrieu2017] — so the surrogate barely moved, if at all.
- **A post-hoc pooled signal, but read it as post-hoc.** Pooling all multidomain recipients regardless of
  arm, «cognitive decline from baseline to 36 months... was significantly less in those who had received the
  multidomain intervention than in those who did not receive this intervention (data not shown; p=0·015)»,
  whereas pooled omega-3 «did not differ significantly... (data not shown; p=0·715)»
  [@andrieu2017]. This is a non-randomised
  factorial contrast (data not shown), not the prespecified primary — suggestive, not confirmatory.
- **The omega-3 arm was flat — an omega-3-for-cognition null.** Supplementation (800 mg DHA + 225 mg EPA/day
  for 3 yr) did nothing alone (adjusted p=0·812) and added nothing to the bundle. Separately, low *baseline*
  red-blood-cell DHA+EPA (lowest quartile) marked a 0·24-point 3-year decline «similar to the worsening noted
  in patients with CDRs of 0·5... whereas those with normal DHA and EPA concentrations showed no change»
  [@andrieu2017] — a **marker-vs-intervention gap**:
  low omega-3 status flags decline, but supplementing omega-3 did not prevent it -> [[Vitamin and Mineral Supplements for Disease Prevention]] (marine omega-3 also null for CVD/cancer in VITAL). [inferred from @andrieu2017]
  This is the RCT half of a diet-vs-supplement split: the observational cohort SR+MA (Wei 2023) finds
  *dietary* DHA protective while its *supplement*-use signal is confounded and its plasma-DHA biomarker
  null — the same marker-vs-lever pattern -> [[Fish and Seafood Consumption]].
  [inferred from @wei2023omega3]

**FINGER vs MAPT — the parameter table (why this is EFFECT-MODIFICATION / a REFINEMENT, not a filed tension).**

| Parameter | FINGER (Ngandu 2015) | MAPT (Andrieu 2017) | Same quantity? |
|---|---|---|---|
| Design | 2-yr individually-randomised RCT | «a 3-year, multicentre, randomised, placebo-controlled superiority trial with four parallel groups» (chunk 01) | \~ (same class; 2 vs 3 yr) |
| Population | **selected at-risk (CAIDE >=6)**, near-normal, 60-77 | «aged 70 years or older... spontaneous memory complaint... limitation in one instrumental activity of daily living, or slow gait speed» — **NOT CV-risk-selected**, older (chunk 01) | **NO** |
| Intervention | 4-domain: diet + **supervised exercise** + cognitive training + **vascular monitoring** | «43 group sessions integrating cognitive training, physical activity, and nutrition, and three preventive consultations» — PA is **advice-based**, no supervised-exercise domain (chunk 01) | \~ (same TYPE, lower intensity) |
| Primary endpoint | NTB cognitive-composite Z score (surrogate) | composite Z score of four cognitive tests (surrogate) | **YES** |
| Comparator | **active control** (general health advice) | placebo / no-multidomain (a *weaker* contrast that should favour a positive) | NO (MAPT's is easier to beat) |
| Result | positive: 0.022/yr, Cohen's d 0.13 (p=0.030) | **NULL**: multidomain 0·079 (adj p=0·179); combined 0·093 (adj p=0·142) | **OPPOSITE** |

[@ngandu2015]

**The endpoint row is YES — the closest same-endpoint comparison of the three trials** (preDIVA's endpoint
row was NO). So the surrogate itself is now shaky: FINGER barely moved it (d=0.13) and MAPT did not move it at
population level *even with a weaker comparator that should have made a difference easier to detect*
-> [[Surrogate Outcomes]]. But the **population and intervention-intensity rows are NO**, so the not-joined
check (ii, different scope/population) fires: the two are consistent once conditioned on population — **and
MAPT's own internal subgroups supply the conditioning evidence.** «Cognitive decline in participants with a
CAIDE score of 6 or greater at baseline was less in the combined intervention group than in the placebo
group (p=0·023)» [@andrieu2017] — i.e. **MAPT's
CAIDE>=6 stratum shares FINGER's high-risk selection criterion (the two differ on age and entry, but both
are high-baseline-risk), and there MAPT reproduces a benefit.** The amyloid-positive
subsample (n=269) showed the same: «Less cognitive decline during follow-up was noted in the combined
intervention group (adjusted p<0·0001) and in the multidomain intervention plus placebo group (p=0·003)...
in amyloid-positive participants» [@andrieu2017].
The authors read it the same way: the intervention «might help to slow cognitive decline in people most
likely to undergo decline—ie, those with a CAIDE dementia risk score of 6 or greater at baseline, and those
with a positive amyloid PET scan... all subgroup results should be considered exploratory and need to be
confirmed» [@andrieu2017].

**Recorded as a REFINEMENT (type F) + a route-(b) effect-modification hypothesis, NOT a `tension`
[inferred from @ngandu2015; @andrieu2017].** The deciding checks: the parameter table's *result* clashes but its *population/intensity* rows
differ (not-joined ii), and the clash is **internally reconciled** — MAPT's higher-risk subgroups replicate
FINGER's stratum — which is effect-modification, not contradiction (filing a tension here would be a
fake-tension, since the moderator is evidenced within the null trial itself). The composite finding that
survives: **the multidomain cognitive-composite effect does not robustly replicate at the whole-population
level; it appears confined to higher-baseline-risk strata (CAIDE>=6, amyloid-positive), the same stratum
FINGER selected for.** MAPT also stated the mechanism of its own null: a **higher-education, low-decline
sample** («the level of education was higher than expected... the rate of cognitive decline in 3 years would
probably be lower than initially expected») left little decline for the intervention to prevent
[@andrieu2017] — a floor effect on the surrogate,
reinforcing that baseline risk is the live moderator. Whether that moderation holds on a **hard** endpoint
is the responder question the pooled MAPT+preDIVA IPD (Coley 2025) was ingested to test — and it does
**not** (the CAIDE>=6 stratum showed no pooled hard-endpoint intervention benefit: AD-dementia HR 1.03,
0.76–1.40, and all-cause subgroups uniformly null; see *The pooled responder verdict — Coley 2025* below).

## The hard-incidence anchor — preDIVA (6.7-yr cluster-RCT, NULL) `[2026-08-07]`

FINGER moved a *surrogate*; **preDIVA** (Moll van Charante 2016) is the trial that measured the
**patient-important outcome directly** — clinical dementia incidence over 6.7 years — and found nothing.
A pragmatic, nurse-led, multidomain *vascular-care* intervention (18 visits over 6 years: smoking, diet,
activity, weight, BP, plus drug treatment for hypertension / dyslipidaemia / diabetes where indicated) in
an **unselected** population of 3526 Dutch aged 70-78. [inferred from @mollvancharante2016; @ngandu2015] Unlike FINGER, this bundle
carried **no cognitive-training and no supervised-exercise component** — inferred from preDIVA's
intervention list (advice + drugs) against the source's own FINGER contrast («lifestyle interventions,
drug treatment, and cognitive training»), the difference that makes the two non-comparable below.

- **Primary outcome — no reduction shown.** Dementia developed in 121/1853 (7%) intervention vs 112/1601
  (7%) control: **HR 0.92 (95% CI 0.71-1.19), p=0.54** [@mollvancharante2016]. The **second co-primary, disability (ALDS), was also null**
  (adjusted mean difference -0.02, 95% CI -0.38 to 0.42, p=0.93), as were all-cause mortality (HR 0.98,
  0.80-1.18) and incident cardiovascular disease (HR 1.06, 0.86-1.31). «A nurse-led, multidomain
  intervention did not result in a reduced incidence of all-cause dementia in an unselected population of
  older people.» [@mollvancharante2016]
- **But read the dementia result as *not-yet-shown*, not *shown-absent* (the four evidence-states apply).**
  The HR of 0.92 is **directionally protective**, and the authors say so: it «is consistent with these
  findings [antihypertensive-MA all-cause-dementia risk reductions of only 2-9%], although our study was
  underpowered to detect such an effect size» [@mollvancharante2016]. So on the *dementia* endpoint preDIVA is **insufficient-evidence /
  underpowered-for-the-plausible-small-effect**, not a demonstration of no effect — the trial was powered
  for a 33% reduction, an order of magnitude larger than BP-lowering plausibly delivers. (The CVD,
  mortality and disability nulls are more genuinely flat given the small achieved contrast — next bullet.)
- **The intervention *did* move the risk factor, modestly.** Systolic BP fell more in the intervention arm
  (adjusted mean difference **-2.06 mm Hg**, 95% CI -3.21 to -0.90, p=0.0005) [@mollvancharante2016] — so this is a null *despite* a
  measured contrast, not a null from an untouched exposure.
- **One subtype signal, small numbers:** non-Alzheimer's dementia was less frequent in the intervention arm
  (11 [1%] vs 23 [2%]; HR 0.37, 0.18-0.76, p=0.007), consistent with a vascular mechanism, but on tiny
  counts and not the prespecified primary [@mollvancharante2016]. Alzheimer's itself was null (HR 1.05, 0.78-1.41).

**FINGER vs preDIVA — the parameter table (why this is a DISTINCTION, not a `tension`).**

| Parameter | FINGER (Ngandu 2015) | preDIVA (Moll van Charante 2016) | Same quantity? |
|---|---|---|---|
| Design | 2-yr double-blind, individually-randomised RCT | 6.7-yr **open-label cluster**-RCT (116 GP practices) | NO |
| Population | **selected** at-risk (CAIDE >=6), near-normal, 60-77 | **unselected** community-dwelling, 70-78 (not CV-risk-selected) | NO |
| Intervention | 4-component: diet + exercise + **cognitive training** + vascular monitoring | nurse-led **vascular care only** (advice + drugs; no cognitive training, no structured exercise) | NO |
| Primary endpoint | NTB **cognitive-composite** Z-score (**surrogate**) | clinical **dementia diagnosis** incidence (**hard**) + disability | NO |
| Result | positive: between-group 0.022/yr, Cohen's d 0.13 (p=0.030) | **NULL**: HR 0.92 (0.71-1.19); disability, CVD, mortality also null | NO |

[@ngandu2015]

**Same-quantity column is NO on every row, so the apparent clash ("multidomain works" vs "multidomain
fails") is not a joined issue — the not-joined check (ii, different scope/endpoint/intervention/population)
fires decisively.** [inferred from @ngandu2015; @mollvancharante2016] The two trials answer *different questions*: FINGER shows a
**4-component bundle (incl. cognitive training) moves a cognitive surrogate over 2 yr in a selected
high-risk group**; preDIVA shows **vascular-care-only does NOT lower hard dementia incidence over 6.7 yr in
unselected elderly**. Recorded as a **surrogate-positive / hard-incidence-null distinction**, not a
tension — neither refutes the other because they never measured the same thing.

**Why preDIVA was null — four author-stated reasons, all decision-relevant [inferred from @mollvancharante2016].** «This absence of effect might have been caused by
modest baseline cardiovascular risks and high standards of usual care.» [@mollvancharante2016] Unpacked: (i) **small between-group contrast** —
pragmatic, modest-intensity intervention; (ii) **high usual care + Hawthorne effect** — 2-yearly screening
prompted treatment in the control arm too (BP fell in both), and a 2011 Dutch guideline update pushed more
proactive prevention in the over-70s; (iii) **unselected, mostly modest-risk** population — not chosen for
high CV risk, shrinking absolute benefit -> [[Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People]]; (iv) **wrong life-course window** — «our population was aged 70-78 years, whereas most
observational data show an association between **midlife** (age 40-60 years) vascular risk factors and
dementia» [@mollvancharante2016], so
late-life vascular care may simply come too late (the nucleus's *earlier-and-longer* timing rule
-> [[Dementia Prevention and Modifiable Risk Factors]]).

**The subgroup — a route-(b) hypothesis, NOT the headline.** preDIVA reports a per-protocol/adherent effect
concentrated in people with **untreated hypertension at baseline** (adherent-untreated-HTN: HR 0.54,
0.32-0.92, p=0.02; no-CV-history adherent: HR 0.64, 0.44-0.94); separately, the *overall* per-protocol
adherent group's 24% lower hazard would translate to an absolute risk reduction of \~1.7% (7.2% -> 5.5%)
[@mollvancharante2016] — note that 1.7%
is the overall-adherent figure, not the untreated-HTN cell. «Our results do not rule out clinically meaningful effects
in people with untreated hypertension who are adherent to the intervention.» [@mollvancharante2016] Held as an **effect-modification hypothesis
(route b)** to confirm, not a finding — post-hoc, adherence-selected (adherence is not randomised), small
counts. This is the responder question the pooled IPD (Coley 2025, MAPT+preDIVA) was ingested to test — and
the untreated-hypertension responder cell did **not** replicate in the pool (AD-dementia intervention HR
0.72, 0.44-1.18, P-interaction 0.071, NS; all-cause subgroup effects likewise null; see *The pooled
responder verdict — Coley 2025* below).

## The pooled responder verdict — Coley 2025 (MAPT+preDIVA IPD, responder NULL) `[2026-08-07]`

The route-(b) hypothesis the two cognitive-surrogate trials left open — *the multidomain effect is real but
confined to higher-baseline-risk strata* — now has a direct test on the **hard endpoint**. Coley pooled the
**individual-participant data of MAPT + preDIVA** (n=5205, aged >=70, up to 12 yr follow-up, 486 dementia
cases over 37,782 person-years) and went hunting for the responders two ways: **11 pre-specified
risk-factor subgroups** AND a **data-driven SIDES recursive-partitioning search** free to combine any
variables at any cut-point (min group >100). **It found none.**

effect_measure: multidomain vs control, incident all-cause dementia (shared-frailty Cox on pooled IPD).
result: **overall NULL** — «there was no effect of multidomain intervention on the risk of all-cause
  dementia (HR 0.98, 95% CI 0.80–1.21)», and «the intervention effect did not differ between the two trials
  (P-interaction: 0.928)» [@coley2025]. A
  genuinely flat point estimate on the patient-important endpoint; the pool roughly triples preDIVA's case
  count, so it is a firmer null than preDIVA's underpowered HR 0.92 alone.
subgroups: **no pre-specified subgroup showed an effect** — «There was also no difference in the effect of
  the intervention in any of the pre-specified subgroups» [@coley2025]. The two the route-b reading singled out showed no intervention benefit on the
  *tabulated* intervention-effect figures (Table 3, AD dementia — multidomain vs control): **CAIDE>=6 HR
  1.03 (0.76–1.40, P-interaction 0.993)** and **untreated-hypertension — preDIVA's own headline responder
  cell — HR 0.72 (0.44–1.18, P-interaction 0.071)**, both non-significant; the all-cause intervention
  effects across all 11 subgroups were likewise no-difference (Figure 1)
  [@coley2025]. (Table 2's HR
  column is the subgroup-vs-referent *incidence* ratio — prognostic, e.g. CAIDE>=6-vs-<6 = 1.37 — not the
  intervention effect.)
data_driven: «the SIDES algorithm did not detect any subgroup showing a differential intervention effect on
  incident all-cause dementia» [@coley2025].
  This is the load-bearing part of the null: not merely *these moderators failed* but *an algorithm free to
  combine all of them found no responder group* > 100 people — and «we did not adjust for multiple
  statistical comparisons», so the search was biased *toward* a false positive and still returned nothing.
certainty: the strongest single test of the route-b hypothesis the unit holds; `confidence: low` in a
  multidomain benefit is unchanged, but the *responder* reading moves from **open** to **evidenced-against**.

**So the route-(b) baseline-risk-responder hypothesis is resolved toward the NULL on the hard endpoint**
[inferred from @coley2025]. Per the telos, a route-b subgroup
claim requires *positive* effect-modification evidence; Coley supplies a well-powered *absence* of it — the
important, decision-changing null for personalization. The cognitive-surrogate CAIDE>=6 / amyloid signals
(FINGER selected on CAIDE>=6 and was positive; MAPT's subgroups reproduced it) **do not carry over to
dementia incidence when the two hard-endpoint trials are pooled and searched.** The authors read it the
same way: «the potential impact of multidomain interventions for dementia prevention at the individual
level, even among those at greatest risk of dementia, appears modest at best»
[@coley2025], and pivot to Rose's prevention
paradox — «a more effective approach might be to channel dementia prevention efforts into population-level
approaches» [@coley2025] — i.e. if the
responders cannot be found, the lever is public-health, not personalized-clinical. This is a worked
route-(b)-null case -> [[Baseline Risk and the Relative-Absolute Split]]: the prognostic gradient is real
(older age, APOE ε4, inactivity, low MMSE all raised *incidence*), yet no *modifier of the intervention
effect* exists — route-a predictors present, route-b modifiers absent.

**Independence — the pooled COMPOSITE of the two trials above, NOT a third witness (type F/A, never E)**
[inferred from @coley2025]. Coley re-analyses the MAPT+preDIVA
participants and shares their authorship completely — Coley/Andrieu are MAPT; Hoevenaar-Blom/Moll van
Charante/van Dalen/van Gool/Richard are preDIVA — so it is not independent evidence and is never counted as
corroboration (no `[E-independent]`). It also **excludes FINGER** (the one positive trial): the pooled null
does not incorporate FINGER's signal, so it bounds what the pool can say about the vascular-heavy
MAPT+preDIVA bundle, not about FINGER's full 4-component version.

**What bounds the null — author-stated, keeping it a strong null not an absolute one.** MMSE was the only
shared cognitive measure and is «insensitive as an outcome measure, notably in prevention trial settings»
[@coley2025] — so the *cognitive-change*
null is the weak arm; the *dementia-incidence* null is the firm one. The low-MMSE subgroup (n=410) was
underpowered and showed only a non-significant favourable trend. Amyloid status — MAPT's other positive
subgroup — could not be tested (no biomarkers in preDIVA). The authors note higher-intensity, younger /
midlife, or biomarker-selected trials «could provide different results» — the responder question is closed
for *these* late-life, low-intensity trials, not for every design.

<div class="recent-update" data-last-updated="2026-09-05">

## The comparative hierarchy — Mendes NMA 2025 (109 RCTs; E+C > the full bundle) `[2026-09-05]`

The three trials above test *specific* bundles one at a time; none answers **which** combination is best,
or whether a fuller multidomain beats a leaner one. Mendes 2025 — a PROSPERO-preregistered random-effects
**network meta-analysis of 109 RCTs (23,010 cognitively-UNIMPAIRED older adults, median age 70)** on the
**global-cognition surrogate** — is the first to rank single- vs multidomain lifestyle interventions in one
framework [@mendes2025multidomain]. Its
decision-changing result: **the leanest effective combination wins, and the most comprehensive bundle does
not top the ranking.**

- **Ranking vs health education:** «physical exercise and cognitive training combined (SMD 0⋅26 [95% CI
  0⋅10–0⋅42]...); cognitive training alone (SMD 0⋅21 [0⋅08–0⋅33]...); diet, physical exercise, cognitive
  training, and health education combined (SMD 0⋅14 [0⋅02–0⋅27]...); and physical exercise alone (SMD 0⋅14
  [0⋅05–0⋅22]...)» all significantly improved cognition; diet-alone, social-activity-alone and the other
  multidomain nodes did not [@mendes2025multidomain]. **Exercise + cognitive training (E+C) is the strongest of all twelve** — above the full
  diet+exercise+cognitive-training+health-education bundle (D+E+C+H, SMD 0·14).
- **The two robust single levers** are cognitive training and physical exercise: «When compared with active
  control, only physical exercise and cognitive training combined (p=0⋅038) and cognitive training alone
  (p=0⋅044) revealed significant improvement» [@mendes2025multidomain] — **the full multidomain bundle is NOT significant against an active
  control**, its benefit shrinking exactly as FINGER's authors warned their active-control estimate would.
- **More is not better.** «Combining lifestyle interventions might enhance efficacy, but increased number
  of domains does not automatically translate into greater cognitive benefits»
  [@mendes2025multidomain]; «more is not
  always better—adding additional interventions does not necessarily enhance efficacy and might introduce
  adherence challenges, particularly in multidomain protocols with more than three interventions»
  [@mendes2025multidomain]. Author
  mechanisms: a **curvilinear complexity/adherence curve** («moderate-complexity interventions yielding the
  greatest effects»), a within-domain plateau (MAPT «cognitive benefits plateaued after approximately half
  of the planned training sessions»), **dilution** (embedded cognitive training is «less intensive,
  individualised, or tailored» than standalone), and **mechanistic overlap** reducing additive benefit
  [@mendes2025multidomain]. This is
  *adherence-is-part-of-the-effect* and *structural leverage* made quantitative -> [[Layer 1 - Ranking Interventions for a Stratum]].

**Independence — a re-synthesis of the same RCT field, NOT a third witness (type F/C, never E)
[inferred from @mendes2025multidomain].** Mendes's 109-trial
network is drawn from the lifestyle-cognition RCT literature and explicitly benchmarks its result against
**FINGER (ref 13) and MAPT (ref 14)** — the trials this page holds — reporting its effect sizes as «similar
to those reported in landmark trials» [@mendes2025multidomain]. **Whether FINGER and MAPT fall among its 109 included trials is not verifiable from
the held text** (the included-study list is in the appendix; the FINGER-aligned diet+exercise+cognitive-
training+health-education node holds n=9, and MAPT's omega-3 arms would be excluded by the no-supplement
criterion while its multidomain-placebo arm could qualify). But it does not change the classification: an
NMA re-synthesizing this field shares its evidence base and method-family, so it is **never independent
type-E corroboration.** The author lists are wholly disjoint (Mendes/Ribaldi/Frisoni, Geneva; none overlap
Ngandu/Kivipelto, Andrieu/Coley, or Moll van Charante) — **but author disjointness does not buy
independence, and the conservative rule is to never assert it.** It is therefore **never marked
`[E-independent]`.** Its value is type-F (refines the held bundle claim into a ranked hierarchy) and type-C
(supplies the single-vs-multidomain comparative axis the pairwise trials could not).

**FINGER vs MAPT vs Mendes — the parameter table (why this is a REFINEMENT + magnitude-concordance, NOT a
tension).**

| Parameter | FINGER (Ngandu 2015) | MAPT (Andrieu 2017) | Mendes NMA (D+E+C+H node) | Same quantity? |
|---|---|---|---|---|
| Effect metric | between-group NTB change; **Cohen's d 0·13** at 2 yr | between-group composite diff **0·079–0·093** over 3 yr | pooled **SMD 0·14** (0·02–0·27) vs health ed | \~ (all standardized cognitive-composite; FINGER's is 2-yr d, others total) |
| Population | selected CAIDE>=6, near-normal, 60-77 | memory-complaint elderly >=70 | **cognitively unimpaired**, 109 trials pooled | **NO** (Mendes broader/healthier, pooled) |
| Intervention | 4-domain incl **vascular monitoring** | PA+CT+nutrition, advice-based | D+E+C+H (4th domain = **health education**) | \~ (close; H replaces vascular) |
| Primary endpoint | NTB cognitive-composite (surrogate) | 4-test composite (surrogate) | global cognition MMSE/MoCA/composite (surrogate) | **YES** (all surrogate) |
| Comparator | active control | placebo / no-multidomain | health ed / no-int / active control | mixed (bundle NS vs active control) |
| Result | +ve small (d 0·13, p=0·030) | **NULL** overall (adj p 0·142–0·179) | +ve small vs health-ed/no-int (0·14–0·20); **NS vs active control** | concordant band; NOT independent |

[@ngandu2015]

The endpoint row is YES (all the cognitive surrogate), but population/intervention/comparator rows differ,
so the apparent clash between MAPT's whole-population null and Mendes's significant bundle is **not joined**
(not-joined check ii, different scope) — Mendes's network aggregates many trials of overlapping design, so
a single trial's null does not survive as the pooled estimate, and its own author reading is concordance:
«although modest by conventional standards, our effect sizes are similar to those reported in landmark
trials» [@mendes2025multidomain]. The
magnitude agreement is drawn from the same RCT field, not an independent route. Recorded as a **REFINEMENT
(F/C)**, not a tension.

**What bounds the ranking (NMA-specific appraisal) [inferred from @mendes2025multidomain].** Coherence is adequate — «The global inconsistency test (Q=39⋅37, df=29,
p=0⋅093) did not show statistically significant inconsistency» — with one local exception, «social activity
and health education (p=0⋅029)» (the smallest node) [@mendes2025multidomain]. But: **40% of trials are high risk of bias** («Risk of bias was high in
44 (40%) studies»); the primary vs-health-education panel carries **publication bias** («Egger's test
statistically significant (p=0⋅011)... smaller trials appeared more likely to report larger effect sizes»)
that the vs-no-intervention and vs-active-control panels do not; a **sex-distribution imbalance** threatens
transitivity; and it is all a **surrogate** in **short trials (median 13 weeks) with no follow-up**
[@mendes2025multidomain]. So this refines
the *shape* of the surrogate signal (which lever, comparator-dependent magnitude) and does **not** reach
the hard endpoint — Coley's pooled incidence null still governs the dementia-prevention question.

**A route-b age hint, held not banked.** Post-hoc, «more complex multidomain approaches may be
particularly beneficial in older pop­ulations» (age >=70: E+C+H 0·56 [–0·05 to 1·16], NS; E+C 0·29
[0·03–0·55]) while under-70s did best on standalone cognitive training (0·42) / E+C (0·36)
[@mendes2025multidomain]. Held as an
effect-modification-by-age *hypothesis* (post-hoc, top cell NS) — not a finding
-> [[Baseline Risk and the Relative-Absolute Split]].

</div>

<div class="recent-update" data-last-updated="2026-09-05">

## What the three trials + the pooled analysis jointly change about what to do `[2026-08-07]`

[inferred from @ngandu2015; @andrieu2017; @mollvancharante2016; @coley2025]

- **The bundle is worth pulling for its *other* proven outcomes, not sold as demonstrated dementia
  prevention.** Every lever (BP, glucose, weight, activity, diet, smoking) is a cardiometabolic **big
  rock** already ranked high for CV outcomes -> [[Big Rocks (Elderly)]], [[Layer 1 - Ranking Interventions for a Stratum]]; acting on them is well-warranted regardless of the dementia signal. What is *not* warranted
  is promising a person a cognitive or dementia payoff: **one surrogate-positive trial (FINGER), one
  surrogate-null trial on a closer design (MAPT), and one hard-incidence null (preDIVA)** — the honest state
  is that the population-level effect is small-to-absent and unreplicated, though the hard endpoint remains
  *not-yet-shown* rather than *shown-absent* (preDIVA underpowered for the plausible 2-9% effect).
- **Selection (baseline risk) is the responder hope on the SURROGATE — and the pooled hard-endpoint search
  KILLS it.** The two cognitive-composite trials converge on one reading: the *surrogate* effect concentrates
  in **higher-baseline-risk strata** (FINGER selected CAIDE>=6 and was positive; MAPT was null overall but
  its CAIDE>=6 and amyloid-positive subgroups reproduced the benefit). **But that route-(b) reading does not
  survive the hard endpoint:** Coley's pooled MAPT+preDIVA IPD found *no* dementia-incidence responder — not
  in CAIDE>=6, not in untreated-HTN, not in any pre-specified subgroup, and not by a data-driven
  SIDES search (see *The pooled responder verdict* above). So the honest state is **surrogate-level responder
  signal, hard-endpoint responder null** — and per the telos (route-b needs *positive* effect-modification
  evidence) the hard-endpoint null governs the decision: **targeting by baseline dementia risk is not a
  demonstrated way to convert this bundle into a dementia-prevention benefit.** What remains open is
  intensity, an earlier (midlife) window, and biomarker selection — untested here
  -> [[Dementia Prevention and Modifiable Risk Factors]], [[Baseline Risk and the Relative-Absolute Split]].
- **If pulling levers for the surrogate, lead with exercise + cognitive training, not a maximal bundle.**
  The 109-trial NMA ranks E+C highest and shows the full diet+exercise+cognitive-training+health-education
  bundle does not improve on it (and is NS vs an active control) — *more is not better*, because adherence
  falls and mechanisms overlap. Cognitive training and physical exercise are the two levers robust even
  against an active control [@mendes2025multidomain]. This ranks *within* the surrogate; it does not convert to a demonstrated dementia-incidence
  benefit (Coley null still governs), and the exercise levers are cardiometabolic big rocks already pulled
  -> [[Big Rocks (Elderly)]].
- **Omega-3 supplementation is not a cognitive lever on this evidence.** MAPT (the longest/largest omega-3
  cognition RCT) was flat alone and additive-free in the bundle; low omega-3 *status* marks decline but
  supplementing it did not prevent decline -> [[Vitamin and Mineral Supplements for Disease Prevention]].
- **BP-lowering in the elderly is cognitively safe.** preDIVA is a large, long RCT showing intensive
  vascular care caused no cognitive or disability harm -> [[Blood Pressure Lowering and Cardiovascular Events]].

</div>

<div class="recent-update" data-last-updated="2026-09-05">

## Open (G-gaps)
- **RCT effect on dementia/AD *incidence* of the FINGER 4-component bundle** — preDIVA answers the
  *vascular-care-only* version (null); FINGER's own 7-yr extended follow-up (the 4-component bundle on
  incidence) is still not held -> — long-term dementia/AD
  incidence results for the full FINGER bundle`.
- **The pooled responder analysis (the route-b test) — CASHED 2026-08-07 (Coley 2025).** Does the
  baseline-risk effect-modification seen in MAPT's subgroups and preDIVA's untreated-HTN cell hold on a
  **hard** endpoint when the two trials are pooled at individual-participant level? **No** — the pooled IPD
  overall null (HR 0.98) held in *every* pre-specified subgroup and no SIDES-discovered subgroup showed a
  differential effect (see *The pooled responder verdict — Coley 2025* above). The route-b gap is now
  resolved toward the null for these late-life low-intensity trials; what stays open is a *higher-intensity /
  midlife / biomarker-selected* design, not the responder axis in these data.
- **Per-component contribution** — which lever(s) drive FINGER's bundle effect (author-flagged); MAPT's null
  and preDIVA's vascular-only null cannot isolate it either. **Partially addressed** by Mendes 2025 across
  the wider RCT literature (physical exercise and cognitive training are the two robust single levers; their
  combination E+C tops the ranking; diet-alone and social-activity-alone are NS) — but on the SURROGATE, so
  it decomposes the cognitive-composite signal, not FINGER's own bundle nor any incidence effect.

[inferred from @ngandu2015; @andrieu2017; @mollvancharante2016; @coley2025] The loop stays open (R1) even with three RCTs and their pooled IPD in hand: the
*surrogate* moved in one selected-risk population (FINGER) and not in a broader, older one (MAPT); the
*hard* endpoint did not move on a thinner vascular-only intervention (preDIVA); and when MAPT+preDIVA are
pooled at participant level the hard endpoint stays null with **no responder subgroup** (Coley) — so no two
of them close each other, and the surrogate-to-incidence link is itself unproven -> [[Surrogate Outcomes]].
The one thing the pool *does* settle is the responder question for these trials (route-b null). A validated
multidomain dementia-prevention claim now awaits an incidence result for the full FINGER 4-component bundle
() and, beyond it, a higher-intensity or earlier-window trial.

</div>

<div class="recent-update" data-last-updated="2026-09-05">

## Self-critique `[run 2026-09-05, before commit — Mendes NMA weave]`

- **Not laundered independence.** The Mendes NMA is the highest-risk laundered-E candidate on this page —
  an NMA numerically concordant with the FINGER/MAPT trials the page already holds. It is filed explicitly
  as type-F/C and **never** `[E-independent]`: field-overlap defeats independence, and the pooling claim was
  demoted to the verifiable form (whether FINGER/MAPT are literally among the 109 is not confirmable from
  the held text — the included-study roster is in the appendix). Cold-audit DEMOTE resolved in-commit.
- **Not a fake tension.** MAPT's whole-population null vs Mendes's significant pooled bundle is filed as a
  refinement, not a `tension`: the parameter table's population/comparator rows are NO/mixed (not-joined
  ii), and a single trial's null is not expected to survive pooling — no joined issue.
- **Overclaim watch — surrogate is fenced.** The E+C ranking is stated as a *within-surrogate* hierarchy
  in short (median 13-wk), 40%-high-RoB trials with health-education-comparator publication bias, and is
  repeatedly said NOT to convert to a demonstrated dementia-incidence benefit (Coley's hard-endpoint null
  still governs). The age-subgroup signal is held as a post-hoc hypothesis, not a finding.
- **R1 — loop open.** Nothing here is graded against a realized patient-important outcome; the
  surrogate-to-incidence transmission is the standing G-gap, named not closed.

</div>

## References

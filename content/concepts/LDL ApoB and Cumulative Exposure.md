---
type: concept
question: What is the causal relationship between LDL / apoB-containing lipoproteins and atherosclerotic cardiovascular disease, and what does it imply about which lipid to measure and when lowering matters?
aliases: [LDL Causes ASCVD, ApoB, Cumulative LDL Exposure, LDL Particle Number, Causal LDL, Lower for Longer, Cholesterol Causal, ASCVD Lipids]
authors: [Ference, Brian A; Ginsberg, Henry N; Graham, Ian; Ray, Kausik K; Packard, Chris J; Catapano, Alberico L; Astrup, Arne; Krauss, Ronald M; Dehghan, Mahshid; Mente, Andrew; Ramsden, Christopher E; Cholesterol Treatment Trialists' Collaboration (org); Marston, Nicholas A; Richardson, Tom G; Sanderson, Eleanor; Palmer, Tom M; Davey Smith, George; Blumenthal, Roger S]
sources: [Ference - LDL Cause ASCVD EAS Consensus 2017, Astrup - Saturated Fats Reassessment 2020, Dehghan - PURE Fats Carbohydrate Mortality 2017, Ramsden - Minnesota Coronary Reanalysis 2016, Ramsden - Sydney Diet Heart 2013, Livingston - Dementia Prevention 2024, CTT - Statin Intensive LDL Lowering Meta-Analysis 2010, Marston - ApoB Containing Lipoproteins Risk 2022, Richardson - ApoB Coronary Mendelian Randomization 2020, ACC-AHA - Dyslipidemia Management 2026]
cluster: lipids
nucleus: true
confidence: medium
relationships:
  related_to:
    - Surrogate Outcomes
    - Saturated Fat Intake and Replacement
    - Does Reducing Saturated Fat Reduce Cardiovascular Events
    - Statins for Primary Prevention and the Power of Zero CAC
    - Baseline Risk and the Relative-Absolute Split
    - Dementia Prevention and Modifiable Risk Factors
    - Soy Products and Health
    - Eggs Dietary Cholesterol and Cardiovascular Risk
created: 2026-07-29
updated: 2026-08-06
self_critiqued: 2026-08-06
---

**The causal model behind the lipid axis.** Most of the wiki's cardiovascular reasoning runs on LDL-C
(cholesterol *mass*). The EAS Consensus (Ference et al. 2017) supplies the causal framework underneath
it — and it reframes three things: *what* causes the disease (apoB particles, not cholesterol mass per
se), *how* the dose works (cumulative exposure, not current level), and *which number to trust* (apoB
over LDL-C in the metabolically-impaired).


[@ference2017]
## LDL/apoB CAUSES ASCVD — a causality verdict, not an association

The consensus assessed the LDL-ASCVD link against Bradford Hill-style causality criteria across **four
independent method families** — genetic studies, prospective cohorts, Mendelian randomization, and
LDL-lowering RCTs — and reached an unusually strong verdict:

> «Consistent evidence from numerous and multiple different types of clinical and genetic studies
> unequivocally establishes that LDL causes ASCVD.»
> [@ference2017]

The causal agent is not LDL-cholesterol as such but the **apoB-containing particles** that carry it:

> «cholesterol-rich LDL and other apolipoprotein B (apoB)-containing lipoproteins, including very
> low-density lipoproteins (VLDL) and their remnants, intermediate density lipoproteins (IDL), and
> lipoprotein(a) [Lp(a)], are directly implicated in the development of ASCVD.»
> [@ference2017]

This is the strongest form of the surrogate-vs-outcome question resolved in the *validated* direction:
LDL/apoB is the exemplar of a surrogate whose **causal transmission to the hard outcome is itself
evidenced** — the opposite of the *marker moved, patient did worse* cases -> [[Surrogate Outcomes]]. The
verdict rests on the **concordance** between the naturally-randomized genetic/MR evidence (unconfounded,
lifelong exposure) and the LDL-lowering RCTs (intervene on LDL, the outcome moves — the source's *most
compelling* causal evidence): the natural experiment and the intervention agreeing, the top of the
mechanism-strength gradient, not a mechanistic story.

## The dose is CUMULATIVE — magnitude x duration, not current level

The dose-response is **log-linear** across >2 million participants and >150,000 events, and it compounds
with time:

> «any mechanism of lowering plasma LDL particle concentration should reduce the risk of ASCVD events
> proportional to the absolute reduction in LDL-C and the cumulative duration of exposure to lower
> LDL-C, provided that the achieved reduction in LDL-C is concordant with the reduction in LDL particle
> number and that there are no competing deleterious off-target effects.»
> [@ference2017]

Two decision consequences follow:

- ***Lower for longer* beats *lower later*.** Because risk tracks the *area under the LDL/apoB curve
  over a lifetime*, a modest reduction sustained for decades can outweigh a larger one started late —
  the cumulative-exposure frame, which a single current LDL-C snapshot cannot capture.
- **Mechanism-agnostic, if concordant.** *Any* route that lowers apoB particle concentration (diet,
  statins, PCSK9 inhibitors) reduces risk in proportion to the reduction achieved — provided the LDL-C
  drop reflects a real particle-number drop and carries no off-target harm. This is what licenses reading
  a diet's LDL effect ([[Saturated Fat Intake and Replacement]]) and a drug's LDL effect
  ([[Statins for Primary Prevention and the Power of Zero CAC]]) on the *same* causal scale.

## Measure apoB, not just LDL-C, in the metabolically-impaired — they DISCORD

The concordance proviso above is not academic — it breaks exactly where the wiki's drifting-median
stratum sits:

> «in certain conditions (e.g. the metabolic syndrome, diabetes, and hypertriglyceridaemia), plasma
> LDL-C and LDL particle concentration can become discordant as a result of the predominance of small,
> dense cholesterol-poor LDL, and therefore plasma LDL-C may not accurately reflect LDL particle
> concentration or its effect on cardiovascular risk. Under these conditions, direct measurement of LDL
> particle number or apoB concentration (recognizing that each LDL particle contains a single apoB
> molecule) may more accurately reflect the causal effect of LDL on ASCVD.»
> [@ference2017]

So for an insulin-resistant, hypertriglyceridemic adult, **LDL-C can *under-state* the atherogenic
particle burden** — the small-dense-LDL pattern packs more particles (more apoB) into a given
cholesterol mass. This is the resolution of the carnivore critique's open question (Axis 1 reasoned on
LDL-C; the causal quantity is apoB, and in this stratum they diverge — apoB is the number to trust).

**LDL-P vs apoB vs LDL-C (Challenge #18).** Three ways to count the same causal thing, and the ranking is
**apoB >= LDL-P > LDL-C** *for reflecting the atherogenic-particle burden*:
- **LDL-C is a good particle surrogate MOST of the time** — «Under most conditions, LDL-C concentration
  and LDL particle number are highly correlated, and therefore plasma LDL-C is a good surrogate»; it only
  fails in the discordant (metabolic-syndrome / diabetic / hypertriglyceridemic) state. So LDL-P/apoB add
  little for the concordant, lean person and a lot for this stratum.
- **LDL-P (particle number, by NMR) approximates apoB far better than LDL-C does** — both are *counts*,
  and «each LDL particle contains a single apoB molecule», so LDL-P ≈ apoB *for the LDL fraction*.
- **But apoB is the more COMPLETE measure, and that gap widens exactly where it matters.** apoB counts
  *all* apoB-containing particles — LDL *plus* VLDL and their remnants, IDL, and Lp(a) — whereas LDL-P
  counts only LDL. Those remnant/IDL particles are elevated precisely in the hypertriglyceridemic /
  metabolic-syndrome state, so LDL-P *misses* the extra atherogenic particles apoB captures right where
  discordance arises. apoB is also the more standardised, widely-available assay. **So LDL-P is a good
  LDL-only proxy for apoB; apoB is the target.** `[EXTRACTED for the correlation + single-apoB-per-particle + the particle list; INFERRED for the remnant-coverage ranking, which follows from apoB's particle set vs LDL-P's]`

## Second outcome — high LDL-C is a new (2024) dementia risk factor

The 2024 Lancet Commission added **high LDL-C as one of its 14 modifiable dementia risk factors**, the
midlife-specific case being the strongest -> [[Dementia Prevention and Modifiable Risk Factors]]. A newer
meta-analysis (3 UK cohorts, n=1,138,488) found «each 1mmol/l increase in LDL-C was associated with 8%
increased incidence of all cause dementia» (1.08, 1.03-1.14); a 1.19M-participant study put high LDL
(>3 mmol/L) at HR 1.33 (1.26-1.41). [@livingston2024] The risk
is **greater in midlife than late life** — consistent with this page's *cumulative-exposure* thesis (the
brain-vascular / amyloid mechanism accrues with duration). Note the outcome asymmetry: an IPD analysis at
older baseline age found *no* LDL/HDL association with cognitive decline, so the causal read is a
midlife-exposure one, not a late-life-level one. This is a decision-relevant *addition* to LDL's outcome
menu (cognition alongside ASCVD), not a change to the ASCVD verdict above.

## The magnitude and the metric, now held directly — CTT + Marston `[2026-08-05]`

Ference *asserts* two things this page rested on but did not hold the primary evidence for: that lowering
apoB reduces risk *in proportion to the reduction*, and that apoB is the number to measure. Two sources now
supply that evidence directly (both extract the causal magnitude / metric, so both are `sources:`).

**CTT 2010 — the per-mmol magnitude and the monotone shape** (IPD meta-analysis, 26 statin RCTs, 169,138
participants). Per 1.0 mmol/L LDL-C reduction: major vascular events RR 0.78 (0.76-0.80), all-cause
mortality RR 0.90 (0.87-0.93), with «no evidence of any threshold within the cholesterol range studied» —
benefit persisting «even among those reaching 1·8 mmol/L (70 mg/dL) or lower».
[@ctt2010] This is the **per-unit face of
the cumulative thesis**: because successive mmol multiply (0.78×0.78≈0.6), *more and longer* both pay, which
is what *lower for longer* means quantified. Full magnitude home: [[LDL Lowering and Cardiovascular Events]].
Note this is *statin*-lowering — the concordant, no-off-target case Ference's proviso privileges; the MCE
counter-cases above show why a *dietary* LDL-C change does not inherit it.

**Marston 2022 — apoB beats LDL-C, directly, at scale** (UK Biobank n=389,529 + FOURIER/IMPROVE-IT
n=40,430, plus cited Mendelian randomization). Entering the lipids *simultaneously*, «only apoB was
associated» with MI (aHR 1.27 per SD, 1.15-1.40); non-HDL-C and TG fell to non-significant once apoB was
held constant [@marston2022]. This upgrades this
page's *measure apoB* claim from Ference's assertion to a large-cohort + MR demonstration. Two refinements:

- **Particle NUMBER, not TYPE or CONTENT, carries the risk.** Adjusting for apoB, the TG/LDL-C ratio was
  flat — «for a given concentration of apoB-containing lipoproteins, the relative proportions of particle
  subpopulations may no longer be a predictor of risk». So the small-dense-vs-large-LDL distinction Astrup
  leaned on collapses into *count the particles* — apoB — which is this page's held view, now with a direct
  test behind it.
- **It confirms this page's remnant-coverage ranking.** The section above inferred apoB > LDL-P >
  LDL-C because apoB captures remnant/IDL/VLDL particles LDL-C misses. Marston states it directly:
  «non-HDL-C in particular is the preferred surrogate for apoB, as it incorporates TG-rich lipoproteins in
  addition to LDL» — the inference now has a source.

**Not independent-E.** Ference co-authors Marston, and CTT is the RCT evidence family Ference's consensus
already synthesizes — same research programme. These are F/refinement + primary-evidence grounding (the
magnitude and metric the consensus asserted, now quoted from the underlying studies), *not* an independent
convergence that would earn `[E-independent]`.
[inferred from @ctt2010; @marston2022]

## The genetic disentanglement — apoB is the NECESSARY trait (Richardson MVMR 2020) `[2026-08-06]`

The *measure apoB* claim above rested on Ference's assertion and Marston's *observational* multivariable
analysis. Richardson supplies the same disentanglement by a **genetic natural experiment** — multivariable
Mendelian randomisation — the design that removes reverse causation, confounding, and (via genetic
instruments) much measurement error. A de-novo UK Biobank GWAS (up to 441,016 participants) built
instruments for LDL-C, triglycerides, and apoB; these were carried into MR against CARDIoGRAMplusC4D
(60,801 CHD cases). [@richardson2020]

**Univariable, each atherogenic; multivariable, only apoB survives.** Assessed one-at-a-time, LDL-C
(OR 1.66 per SD), TG (1.34) and apoB (1.73) each raised CHD risk. Entered *together* in multivariable MR:

| Trait (per 1 SD, multivariable MR) | Direct effect on CHD |
|---|---|
| **apoB** | **OR 1.92 (95% CI 1.31-2.81); P<0.001 — retained** |
| LDL-C | OR 0.85 (0.57-1.27); P=0.44 — **reversed to null** |
| Triglycerides | OR 1.12 (1.02-1.23); P=0.01 — weakened |

> "In multivariable MR, only apolipoprotein B ... retained a robust effect, with the estimate for LDL
> cholesterol ... reversing and that of triglycerides ... becoming weaker."
> [@richardson2020, Abstract]

> "These findings suggest that apolipoprotein B is the predominant trait that accounts for the
> aetiological relationship of lipoprotein lipids with risk of CHD."
> [@richardson2020, Conclusions]

**Read it correctly — apoB is *necessary*, LDL/TG are not discredited.** The LDL-C null is NOT a claim
that cholesterol is causally inert; Richardson is explicit that the findings «do not discredit the causal
roles that LDL cholesterol or triglycerides play», because apoB does not occur in physiological isolation
but is always accompanied by cholesterol and triglycerides. The source's own verdict is necessity, in its
words: «apolipoprotein B is the necessary element in order for lipoprotein lipids to exert their causal
effect on risk of CHD—in other words, apolipoprotein B is a critical entity that underlies the
relationship of lipid traits and risk of CHD.» [@richardson2020, Discussion] The probabilistic corollary the paper draws: «changes in
cholesterol or triglycerides that are not accompanied by commensurate changes in apolipoprotein B may not
lead to altered risks of CHD.»
[@richardson2020, Discussion] This is the
**genetic-natural-experiment shadow of Ference's concordance proviso** and of the MCE/Sydney worked cases
below: a cholesterol change *discordant* with apoB does not transmit to the outcome — now shown in genes,
not just in a diet trial.

**New extract — the HDL "protection" is apoB-mediated.** Univariable MR made HDL-C (OR 0.80) and apoA-I
(0.83) look protective; adjusted for apoB both «attenuated substantially to the null» (HDL-C 0.91, P=0.36;
apoA-I 0.94, P=0.59), while apoB stayed causal (1.68). So HDL-raising therapies «will only have beneficial
effects if they also lower apolipoprotein B» — the genetic rationale for the failed CETP/HDL-raising
programme, and a reason not to treat HDL-C as an independent target.
[@richardson2020, Discussion]

**Decision refinement — target the particle count.** «the primary focus of lipid-modifying therapies ought
to be the reduction in number of atherogenic lipoproteins (as measured by apolipoprotein B) rather than the
reduction in cholesterol or triglycerides», especially where drugs have discrepant effects across the lipid
traits. [@richardson2020, Discussion] This
grounds the page's held *measure apoB* view with a genetic design, and sharpens it from *measure* to
*target and dose on* apoB.

**NOT independent-E — the citation chase kills it (the reportable finding).** Richardson looks like the
independent second school the nucleus lacked (Bristol / MRC-IEU / Davey Smith; a genetic method-class,
not a consensus). It is not, on three grounds, any one sufficient: **(i)** **Brian A. Ference is a
co-author** of Richardson (author 5) — the author of the EAS Consensus this nucleus rests on and a
co-author of Marston; **(ii)** Richardson cites the CTT LDL-lowering RCT meta-analyses as antecedent
("conclusively shown that lowering of cholesterol in atherogenic lipoproteins ... reduction in risk",
its refs 1-5 / the CTT collaboration) and explicitly **builds on prior Ference multivariable-MR work** — a
prior investigation using a form of multivariable MR that «obtained similar findings to those we report in
the present study» (ref 26 = Ference 2019); **(iii)** the whole apoB-particle-number / response-to-retention thesis
is one research programme (Sniderman / Ference / Ala-Korpela). So MR is not a *new* independent route — it
is a sharper instance of one of the four pillars Ference's consensus already synthesizes, co-authored by
Ference. **Verdict: F (refinement) + primary genetic grounding, NOT `[E-independent]`.** The confidence
cap therefore **holds** — see Limits.
[inferred from @richardson2020; @ference2017]

## Current guidance has taken up *measure apoB in the discordant* — and cites this page's own evidence `[2026-08-06]`

The *measure apoB where LDL-C and particle number discord* claim is no longer only the consensus's; the
2026 US guideline operationalizes it into a clinical rule: «Apolipoprotein B (ApoB) testing can be useful
to improve risk assessment and guide therapy once LDL-C and non-HDL-C goals are met, particularly in
those with elevated triglycerides (TG) (≥150 mg/dL), diabetes, or low achieved LDL-C (<70 mg/dL)»
[@accaha2026] — exactly this page's discordant stratum
(metabolic/CKM syndrome, diabetes, hypertriglyceridemia, treated-low LDL), where «LDL-C may appear at
goal while apoB remains elevated, masking residual risk». The guideline also notes the Martin/Hopkins
LDL-C estimator «markedly reduces discordance with apoB» — narrowing (not closing) the case for a
separate apoB draw in the concordant majority.

**This is guidance UPTAKE, not independent confirmation — the guideline reproduces the vault's held
Marston evidence.** ACC-AHA's apoB stance cites the same data this page rests on: «only apoB remains
significant when assessed together (adjusted hazard ratio per 1 SD, 1.27 [95% CI, ...»
[@accaha2026] — Marston 2022's exact estimate. So the
guideline is the same Marston/CTT programme restated as a recommendation; it is **F (a what-to-do
operationalization of the held claim), not `[E-independent]`**, and does not lift the confidence cap. Its
value is that the wiki's held *measure apoB* view is now the standing US clinical rule, with a named
threshold set (TG ≥150 / diabetes / achieved LDL-C <70).
[inferred from @accaha2026; @marston2022]

## Limits

- **Framework still rests on one research programme (Ference), `confidence: medium` — held after Richardson.**
  The causal case is now triangulated across three method-classes — RCT (CTT), observational multivariable
  (Marston), and genetic multivariable MR (Richardson) — all landing apoB-supreme, which is real strengthening
  of *grounding*. But **all three share the Ference lineage** (Ference co-authors both Marston and Richardson;
  CTT is the RCT family the consensus rests on), so none is the independent-school second statement that would
  raise confidence past medium. The genetic/MR/RCT triangulation Ference synthesizes is strong; genuinely
  independent-school corroboration (a non-Ference group, ideally a different data lineage than UKBB/CARDIoGRAM)
  is still what is owed. `AWAITS <a non-Ference-lineage apoB-causal analysis> — an apoB-over-LDL-C causal
  demonstration from a group with no Ference co-authorship and a distinct dataset would be the genuine
  `[E-independent]` lift and license medium -> high.`
- **Causal ≠ the only lever.** LDL/apoB causation does not make it the largest *absolute* lever for a
  given person — absolute benefit still scales with baseline risk
  ([[Baseline Risk and the Relative-Absolute Split]]), and the *net* of a diet or drug depends on the
  whole strategy, not the LDL number alone.
- **Off-target caveat is load-bearing:** the *any-mechanism-works* claim is conditioned on *no competing
  deleterious off-target effects* — a real diet or drug can lower LDL and still net-harm through another
  pathway, so this validates the *lipid channel*, not any intervention wholesale.



## A contested refinement — is a DIET-induced LDL-C change a good apoB proxy? (Astrup et al. 2020) `[2026-07-29]`

Astrup presses the concordance proviso above in a specific
direction: it argues a **diet-induced** LDL-C reduction from SFA restriction is an *unusually poor*
proxy for the atherogenic-particle change, so CVD benefit inferred from it is overstated. The claim,
and where it stands against this page:

- **It CONCEDES the causal core** — «LDL particles play a causal role in the development of CVD» and
  there is "a relationship between lowering of LDL cholesterol and CVD benefit." So this is not
  LDL-denial; it is a claim about the *diet-induced* change specifically.
  [@astrup2020, LDL Cholesterol and Other Biomarkers]
- **The argument:** SFA restriction lowers mainly "large LDL particle subspecies... which are much
  less strongly related to CVD risk," not the small dense LDL, and also lowers HDL — so the total:HDL
  ratio barely moves and "the potential benefit of dietary restriction of saturated fat could be
  substantially overestimated by reliance on the change in LDL cholesterol levels alone."
- **PURE grounds the diet-lipid discordance with data (now a held source).**
  Dehghan (via its companion Mente 2017 lipid analysis)
  reports higher SFA → higher LDL **but** higher HDL, lower triglycerides, and lower **ApoB/ApoA1**
  ratio (the stronger predictor), while higher carbohydrate → lower LDL **but** higher ApoB/ApoA1 —
  concluding «predicting the net clinical effect based on considering only the effects of nutrient
  intake on LDL cholesterol is not reliable».
  [@dehghan2017, Discussion] This is the
  discordance-in-the-diet-direction claim in cohort data — and note it is itself an **apoB argument**
  (the hazard tracked apoB/apoA1, not LDL-C), so it reinforces *measure apoB*, this page's held view,
  rather than displacing it. Observational and confounded by income, so directional not decisive.
- **Where it lands against this page's model.** This page already holds the discordance mechanism — in
  the metabolic-syndrome/diabetic/hypertriglyceridemic state, LDL-C under-states apoB particle number,
  so **measure apoB**. Astrup and Ference agree LDL-C is an imperfect proxy and apoB is the target; they
  diverge on *direction* for the SFA case (Astrup: SFA raises mostly the benign large fraction, so
  diet-LDL overstates harm). **The large-vs-small-LDL distinction Astrup leans on is substantially
  superseded** by apoB *particle number* as the summary causal quantity (this page's held view) — apoB
  counts the particles regardless of size, and PURE's apoB/apoA1 signal is itself an apoB argument. So
  the honest status: **the diet-induced-LDL-C caveat is real and this page already carries its mechanism
  (measure apoB, not LDL-C); the further claim that SFA's LDL rise is benign-by-particle-size is
  contested and dated, and does not overturn apoB causality.**
[inferred from @astrup2020; @ference2017]
-> full joined issue: [[Does Reducing Saturated Fat Reduce Cardiovascular Events]].

## The off-target/concordance proviso, worked — Ramsden MCE 2016 `[2026-08-04]`

Ference's *any-mechanism-works* claim is conditioned twice: *provided the LDL-C drop is concordant with
the particle-number drop and there are no competing deleterious off-target effects.* The recovered
Minnesota Coronary Experiment is the corpus's cleanest case of that proviso **biting** — a large
cholesterol reduction that did **not** transmit to the outcome, in a double-blind RCT.

**What MCE showed.** Replacing SFA with corn-oil LA lowered serum cholesterol **-13.8% vs -1.0%**
control, yet produced **no mortality benefit** in the full randomized cohort or the 5-trial MA (CHD
mortality 1.13, all-cause 1.07) -> [[Linoleic Acid and Cardiovascular Disease]]. Ramsden's own reading is
an explicit off-target/concordance argument: «a decrease in low density lipoprotein can represent widely
different biochemical phenomena», so «some agents that decrease low density lipoprotein have been shown to
reduce the risk of coronary heart disease... while others have no clear effect... and still others might
actually increase risk.» [@ramsden2016, Why didn't lowering serum cholesterol translate to clinical improvement?]

**Same-quantity discipline — this does NOT refute apoB causality; it lands inside the proviso.** MCE
measured **total serum cholesterol only** (Ramsden concedes LDL/HDL subfractions were not assayed), so it
cannot show the cholesterol drop was *concordant with a particle-number (apoB) drop* — the first escape
hatch. And LA plausibly adds a *competing off-target effect* (increased LDL-oxidation susceptibility) —
the second. So MCE is **consistent with** Ference's framework, not a counterexample to it: it is the
worked demonstration that the concordance + no-off-target proviso is load-bearing, not boilerplate. The
decision-relevant transfer: **a diet-induced cholesterol change is not interchangeable with a drug-induced
apoB change** — validate the marker->outcome transmission *for the agent actually used*
-> [[Surrogate Outcomes]]. This is the empirical shadow of ESC's «irrespective of the drug» invariance
claim: the invariance is evidenced across LDL-lowering *drugs*; MCE shows it is *not* automatic for a
*dietary* LDL change.
[inferred from @ramsden2016; @ference2017]

**The Sydney companion (Ramsden 2013) is the same proviso, biting harder — the second escape hatch made
concrete.** SDHS lowered total cholesterol MORE in the LA arm (-13.3% v -5.5%) yet the arm had *higher*
randomized mortality, and Ramsden proposes exactly the **competing off-target effect** the proviso names:
oxidized-LA metabolites (OXLAMs) as an atherogenic route independent of the cholesterol drop, strongest
in the trial's smokers/drinkers. Like MCE it measured total cholesterol only (not apoB/particle number),
so it too **lands inside** Ference's proviso rather than refuting it — a diet-lowered cholesterol with a
plausible off-target harm, not a clean apoB-concordant reduction. It sharpens the same decision transfer
(a dietary cholesterol change is not interchangeable with a drug-induced apoB change) with a randomized
*adverse* outcome instead of MCE's null. Small single-blind high-dose n-6-selective secondary-prevention
trial — the appraisal caveats are on [[Linoleic Acid and Cardiovascular Disease]]; not independent-E of
MCE (same Ramsden program).
[inferred from @ramsden2013]

**Self-critique (Ramsden MCE weave) `[run 2026-08-04, before commit]`.** *Overclaim:* the section
explicitly says MCE is **consistent with**, not a counterexample to, apoB causality — the two proviso
escape hatches (total-cholesterol-only measurement; LA-oxidation off-target) are named and both
source-grounded, so it does not launder a contrarian RCT into a refutation of Ference. *Not-E:* no
independence claimed — it is an F/worked-instance. *Same-quantity:* diet-total-cholesterol vs
drug-apoB-particle kept distinct throughout.

## Self-critique `[run 2026-07-29, before commit]`

- **Over-claim check:** the causal verdict is quoted from the consensus, not asserted by the wiki; the
  *lower for longer* and *measure apoB* consequences are tagged to the source's own proviso (concordance
  + no off-target). The single-source/`confidence: medium` limit is stated.
- **Surrogate framing:** LDL/apoB is presented as the *validated*-surrogate exemplar, explicitly the
  counter-case to the wiki's usual surrogate caution — not a licence to trust surrogates generally.
- **Mechanism-gradient discipline (cold-audit fix):** the causal weight is attributed to the *concordance*
  of the genetic/MR evidence AND the LDL-lowering RCTs (the source's own pillar; the RCTs are its *most
  compelling* causal evidence), not to genetic/MR alone — the top of the mechanism-strength gradient, not
  a mechanistic plausibility story.

## References

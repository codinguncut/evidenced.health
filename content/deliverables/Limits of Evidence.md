---
type: deliverable
title: Limits of Evidence
icon: material-symbols-light:balance
question: 'What can and cannot be established about diet-health effects given the evidence base''s structural constraints (measurement error, unblindable whole-diet, observational dominance, surrogate outcomes, long latency, the open loop), and what does that imply for how confidently to recommend?'
sources: [SACN - Carbohydrates and Health 2015, Willett - Nutritional Epidemiology 3e, Afshin - Health Effects of Dietary Risks GBD 2019, Dehghan - PURE Fats Carbohydrate Mortality 2017, Cochrane - Handbook for Systematic Reviews 6.5, Stockwell - Moderate Drinkers Mortality Risk 2016, Poole - Coffee Consumption and Health 2017, USPSTF - Procedure Manual 2022, Ramsden - Minnesota Coronary Reanalysis 2016, GRADE - Handbook, NASEM - Reproducibility and Replicability in Science 2019, Ioannidis - Why Most Published Research Findings Are False, Heuer - Psychology of Intelligence Analysis, Anderson - Analysis of Evidence, Fallis - Toward an Epistemology of Wikipedia, Wikipedia - Verifiability, Cooper - Research Synthesis and Meta-Analysis, Cartwright & Hardie - Evidence-Based Policy Practical Guide, Schön - The Reflective Practitioner]
confidence: medium
created: 2026-08-05
updated: 2026-08-27
self_critiqued: 2026-08-26
concrete_subject_audited: 2026-08-27
---

Some questions about diet and health cannot be settled cleanly, and no volume of new research
will change that. You cannot blind people to what they eat, cannot measure a real diet without
large error, and cannot randomise how someone lives for forty years. The deepest limit is the
quietest: no finding here has ever been checked against what actually became of a real person.
The loop from advice to outcome never closes.

Each ceiling weakens a different link in the chain. What people ate is measured poorly. The
studies that could establish cause seldom can. The thing measured is often a stand-in —
cholesterol, blood sugar — for the illness or death that is the real point. And the published
record is a filtered, uneven sample of the research actually done. Running through all of it
is one recurring confusion: *no one has looked* is read as *there is nothing there*. None of
this is careless work; it is the ceiling the best possible study in this field still meets.


The response is neither to despair nor to feign certainty, but to triangulate — to weigh
trials, cohorts, genetic experiments, dose-response curves and biological mechanism by how
well each fits the question, back the best-supported answer, and state the ceiling that bounds
it. One bias tilts the whole field the same way: the **streetlight effect**, the pull toward
whatever is easy to measure, which keeps the field reading absence of evidence as
evidence of absence. And one caveat outlives every section below — this page grades how well the evidence
coheres and how faithfully it is reported, never whether it is true. It can be sound on both
counts and still be wrong about the world.

## The exposure is mismeasured

Diet is measured indirectly, by asking people, and the resulting error is large. A doubly-labelled-water
validation gives the scale: «A doubly-labelled water sub-study carried out as part of the NDNS rolling
programme (Bates et al., 2014) found that reported energy intake in adults aged 16-64 years was, on
average, 34% lower than total energy expenditure (TEE) measured by doubly labelled water.»
[@sacn2015] Error of this size biases a measured
association toward the null in the simple case, so a **flat measured dose-response is weak evidence of no
gradient, not proof of one** -- the gradient may be real and flattened.

The error is also not clean random noise: it is **differential** -- «In general, those who consumed considerably less than the
average were more likely to overreport intake, while those who ate more than the average tended to
underreport, sometimes referred to as the "flat slope syndrome"»
[@willett] -- it pulls the tails inward, shortening the
exposure axis so a true slope reads shallower, and once mismeasured covariates enter, the attenuation is
no longer guaranteed to run toward the null.

Correcting for this error can strengthen a real association but cannot manufacture one from a
true null -- and that asymmetry is load-bearing. So *measurement error explains this null* is often
plausible, while *measurement error explains this positive finding* demands a much stronger, more
specific allegation. -> [[Measurement Error in Dietary Assessment]]

A second ceiling is that the reported effect is never absolute. To make a nutrient coefficient mean
anything, models fix total energy, and «This energy adjustment means that diet components are defined as
risks in terms of the share of diet and not as absolute levels of exposure... the relative risks
estimated from meta-analyses of cohort studies do not generally specify the type of substitution.»
[@afshin2019] So *the effect of X* is
undefined until the swap is named; a null can be a null **for one particular substitution only**, and
cannot be read as *add X, gain Y*. -> [[Energy Adjustment and What a Diet Coefficient Means]]

A third ceiling sits earlier still, in how the exposure is defined. Where within-category variance
exceeds between-category variance, a food-category estimate describes no actual food -- it averages over
a heterogeneous mix. PURE's carbohydrate-mortality signal was «unable to quantify separately the
types of carbohydrate (refined vs whole grains)»
[@dehghan2017], so the harm attaches
to a pool, not a food. When a category's
effect actually lives in a sub-component, the label is a proxy: whole-grain benefit «may be related to
its cereal fibre component» [@sacn2015].
-> [[Is the Food Category Doing Any Work]]

**Named gap -- the unblindable whole-diet / food matrix.** A whole food cannot be blinded the way a pill
can: disguising it means grinding, extracting, or reformulating it, which disrupts the causally-active
matrix, so the blindable isolate is a **different exposure** than the food. The corpus shows the edge of
this -- an isolated nutrient out-grades the food carrying it because the isolate can be dosed and
controlled -- but the limit itself has **no consolidated claim-page home** in the fabric; it is a
structural gap, not a sourced finding here.

**So what.** These three ceilings all cut confidence the same way: a flat or null measured curve cannot
rule out a real gradient, a bare coefficient cannot say what was traded, and a category-level number can
describe nothing on the plate. Each argues for *more honest uncertainty*, not a firmer conclusion in
either direction.

## The design rarely isolates the cause

The evidence base is observational-dominant, and an observational study cannot randomize its
exposure, so a common cause of both exposure and outcome -- confounding -- is never fully removed. The instrument for
non-randomized studies (ROBINS-I) states the ceiling plainly: «Unmeasured confounding can usually not
be excluded, because we are seldom certain that we know all the confounding domains»
[@cochranehandbook2024], and «only rarely will design or
analysis features of a non-randomized study lead to a classification of low risk of bias when studying
the intended effects of interventions»
[@cochranehandbook2024]. Its best attainable verdict is only
*comparable to a good RCT*, and confounding usually caps it below that.

**A strong cohort signal can meet a null trial -- name why before crowning either.** Three distinct
diagnoses, not one: (i) *confounding* -- the cohort signal was never causal, and the trial or a genetic
natural experiment is right; (ii) *indirectness* -- the blindable trial tested a different exposure (an
isolate or a short whole-diet swap) than the decades-long habitual pattern the cohort measured, so its
null refutes the isolate, not the pattern; (iii) *a narrower question* -- a months-to-years trial cannot
reproduce a lifetime exposure to a long-latency outcome, so its null may be a power/duration null. The
discordance is a signal to check exposure-commensurability, never an automatic verdict for the trial.
 -> [[The Observational-Trial Discordance]]

**A U/J-shaped protective lower arm may be an artifact** -- reverse causation, sick-quitter bias (the
referent enriched for people who quit the exposure once ill, so it «will bias drinking risk estimates
downward, thereby magnifying the appearance of health benefits from low-level drinking»
[@stockwell2016]), frailty
confounding, or unequal between-group precision. The rule: a protective or plateau arm must survive a
referent-correction or a genetic/objective check before it is believed; a shape equally consistent with
the causal and the artifact explanation has no diagnostic value.
-> [[The U-Shaped Association Artifact]]

**A few narrow conditions license more confidence.** Observational evidence can be rated up on
a large magnitude of effect -- but the bar rarely fires: «Large effect sizes of >2 or <0.5 can permit
observational evidence to be upgraded in GRADE, and only the association between high versus low coffee
consumption and both liver cancer and chronic liver disease reached this magnitude.»
[@poole2017] -- or on a dose-response gradient, or
where all plausible residual confounding runs *against* the finding, or where independent method classes
converge. -> [[Upgrading Observational Evidence]]

**Significance is not the credibility bar.** Statistical significance does not make a modest
association causally credible -- significance is a CI-excludes-1.0 fact driven by precision (a large enough
cohort makes even RR 1.05 significant), not a point-estimate cutpoint. The magnitude governing causal
credibility *from association alone* is the same GRADE rate-up bar of \~2 (or <=0.5) quoted above -- far
above where most nutritional exposures sit (red and processed meat at 1.12 and 1.16).


Precision and credibility come apart because they answer two different questions the field routinely
conflates. **Identification** asks whether the causal effect can be written from the data at all -- is
confounding controlled, the intervention well-defined -- and where it fails, no sample size repairs it:
the number being estimated is simply not the causal effect. **Estimation** asks how precisely that
number is pinned, and it is what a confidence interval and a p-value speak to. So a **tight interval is
silent on identification**: more data narrows the band around a figure that a live confounder may have
placed off the causal target entirely. Read precision as precision, never as evidence the confounding
was handled. -> [[Causal Identification (Exchangeability, Positivity, Consistency)]]

Below the bar a cohort association needs triangulation -- Mendelian randomization, a trial, or convergent
methods -- and *below-2* means insufficient on its own, **never false**
-> [[The Insufficient-Evidence Statement]]. The doubt is symmetric: a small protective RR earns the same
scrutiny as a small harmful one, and measurement error usually attenuates toward the null, so a modest RR
can understate a real effect too. -> [[Upgrading Observational Evidence]]

**So what this does to confidence:** for most modest, single-method nutrition associations, none of the
exits is available, residual confounding stays live, and the honest grade is low -- recommend
accordingly, and treat an unadjudicated protective arm as not established rather than as a target.
 -> [[Risk of Bias Assessment Tools]]

## The outcome is often a surrogate, and effects leak

Much of the evidence a recommendation rests on does not measure the outcome a person cares about. It
measures a faster, commoner **marker** standing in for that outcome, or it measures the right outcome
too early. GRADE files both under **indirectness** -- the general axis on which evidence drifts from the
question actually being asked: a marker study is indirect, and so is one measuring the outcome at 3
months rather than 12 [@grade]. A **structural gap** compounds this:
diet-health effects unfold over decades, longer than most trials run, and the wiki holds no dedicated
method-page for that *long latency* -- which is what forces reliance on surrogates and observational
follow-up in the first place.

The structural *why* a marker may fail to transmit: it captures one step in a long causal chain while
the recommendation asserts something about the endpoint. A body may prove an effect on the marker and
still not reach the outcome: «The USPSTF gives greater weight to evidence of an effect on health
outcomes than evidence of an effect on risk factors or intermediate outcomes. The fact that a preventive
service has a proven effect on an intermediate outcome does not necessarily establish that it can
improve outcomes that are perceptible to patients.» [@uspstfmanual2022]

Hence the rule this section holds: **a surrogate is a legitimate target only if its causal transmission
to a named patient-important outcome is itself an evidenced claim -- never assumed.** And
transmission is **route-specific**: a marker validated when moved one way is not validated when moved
another, because «some agents that decrease low density lipoprotein have been shown to reduce the risk
of coronary heart disease, while others have no clear effect, and still others might actually increase
risk.»
[@ramsden2016]
*Which* marker actually transmits, per metric, is deferred to [[Metrics for Targeted Health Guidance]].

Effects also **leak** below the mechanism. Even the effect a mechanism predicts in isolation diverges
from the realized one, because the organism compensates -- the *net* effect across the whole system is
usually smaller than the mechanism implies and occasionally the opposite sign.
-> [[Net Effect vs Intended Effect]]

The confidence lesson: a high **stated** certainty is often certainty about the marker, not the outcome
-- the best-graded quantity is the surrogate, the patient-important outcome sits one to three levels
lower. So discount confident surrogate-based advice toward the *outcome's* certainty, and treat a marker
as a target only where its transmission is shown.
-> [[The Certainty-Importance Inversion]], [[Indirectness of Evidence]], [[Surrogate Outcomes]]

## The literature is filtered and noisy

Set study design aside: the published record is already a biased sample of the studies that were run.
The filter selects for statistically significant positives, so «This publication bias results in a
published literature that does not reflect the full range of evidence about a research topic.»
[@nasem2019] This is a
body-of-evidence defect, not a single-study one -- each published paper can be impeccable while the
*set* is skewed -- so it is invisible in any one paper and detectable only across the literature.


Selection does not only decide *whether* an effect appears; it inflates the *magnitude*:
«Efforts to replicate studies aimed at discerning the effect of an intervention in a study population
may find a similar direction of effect, but a different (often smaller) size of effect.»
[@nasem2019] Treat a
published original effect size as an over-estimate by default.

Within a single study, analytic flexibility manufactures significance that carries no replicable signal:
«P-hacking is the practice of collecting, selecting, or analyzing data until a result of statistical
significance is found.» [@nasem2019]
The defence is disclosure -- pre-specification and the count of outcomes/subgroups tested -- not the
bare p-value.

Calibrate a replication failure; don't read it as destroying a finding. Two vocabularies matter.
**Reproducibility** (same data and code recompute) is *expected* given transparency; **replicability**
(a fresh study, new data) is not -- «even when a study was rigorously conducted according to best
practices, correctly analyzed, and transparently reported, it may fail to be replicated».
[@nasem2019]

So non-replication is not prima facie a defect: NASEM splits its causes into inherent variability (helpful,
advances science) versus avoidable defects (publication bias, p-hacking, error), and a failed
replication is uninformative until you know which kind produced it
[@nasem2019]. Hence the symmetric
decision rule: «no one should take a new, single contrary study as refutation of scientific conclusions
supported by multiple lines of previous evidence.»
[@nasem2019]
-> [[Reproducibility vs Replicability]], [[Sources of Non-Replicability]]

**So what for confidence.** A finding's probability of being true is a property of the *field's
structure* -- its pre-study odds, power, bias, and the number of teams chasing it -- which a low p-value
cannot see [@ioannidis, 2005]. Confidence
therefore comes from convergence of independent methods, not from study count or a single significant
result.
-> [[Most Published Findings Are False (PPV of a Field)]], [[Confidence in Science Without a Replication Crisis]], [[Publication Bias and Selective Reporting]], [[P-Hacking and Researcher Degrees of Freedom]]

## *No evidence* is not *evidence of no effect*

The appraisal frame carries four evidence states -- benefit, harm, no meaningful effect, and
**insufficient evidence** -- and the last two are categorically distinct. A demonstrated null is a
*positive* finding; insufficiency is the absence of one. USPSTF operationalizes the split as two
different grades. Grade D asserts «moderate or high certainty that the service has no net benefit or
that the harms outweigh the benefits»; grade I says «the current evidence is insufficient to assess the
balance of benefits and harms of the service. Evidence is lacking, of poor quality, or conflicting»
[@uspstfmanual2022].

What separates them is certainty, made mechanical: «If the certainty of the evidence is low, the Task Force is unable to assess the magnitude
of net benefit of the preventive service.» [@uspstfmanual2022] A null
point estimate is not enough to conclude no-effect -- you must be *confident* of the null.

**The expectancy test is the guard.** Before writing *there is no evidence that X*, ask: if X were true,
could we realistically expect to have seen the evidence by now? Absence of evidence carries information
only relative to what the claim predicts you would see; silence from an unstudied, unobservable, or
unsearched question is not a null, and such a hypothesis is unproven, not disproved -- kept alive until
it can actually be ruled out [@heuer].

**This is where the streetlight effect bites hardest.** The evidence base is systematically skewed
toward the cheap-to-measure -- short-term surrogates, single nutrients, blindable isolates -- because
those yield clean data; the hard-to-measure -- whole-diet patterns over decades, the food matrix,
long-latency and quality-of-life outcomes -- yields little, reads as *no evidence*, and gets discounted.
The distortion is not random: it pushes conclusions toward whatever sits under the lamp. Certainty
tracks measurability, not importance, and USPSTF states the cost plainly -- «few preventive
interventions have a measurable effect on all-cause mortality»
[@uspstfmanual2022] -- so the outcomes people weight most are graded
worst.

**And weight of evidence is not a vote-count.** Baconian weight tracks how *completely* the relevant
matters have been covered, and testing must be *variative*, not repetitive -- rerunning the same test
adds no weight, a different-method route does; there is no natural arithmetic unit
[@anderson]. Forty studies sharing one instrument and one
confounding structure are not forty independent tests.

**So what.** A named gap is a decision-input, not a dead end. GRADE keeps the empty row precisely
because «an empty row in an evidence profile can be informative in that it identifies research gaps»
[@grade]. Reporting *we don't know* licenses a different action than *it
doesn't work* -- the first leaves the question open under the expectancy test; the second forecloses it.
Collapsing them silently sorts every unstudied question into no-effect.
-> [[The Insufficient-Evidence Statement]], [[Unproven vs Disproved (the Expectancy Test)]], [[What the Weight of Evidence Means (Four Rival Formalizations)]]

## The open loop, and what confidence it leaves

The deepest ceiling is not any one of the limits above but the fact that none of them can be checked
from inside. This body of judgment cannot grade itself against realized outcomes: no operation here
scores a claim against what actually happened to a person. Some knowledge projects bump up against
reality directly and a wrong contribution fails a real-world test; a body of *claims about* the world
cannot, so it checks itself against the published literature instead
[@fallis]. That is real quality control, but it is
coherence and source-fidelity, never validity -- the inclusion bar is verifiability, not truth
[@wikipediaverifiability]. A clean audit certifies that a recommendation is
faithful to its sources; it never certifies that the recommendation was right. The loop is open, and
stays open.

**Named gap, stated sign-neutrally.** The fabric holds the general epistemology of the open loop, but
no page yet instantiates it for diet-health causal claims specifically. This limit sits at the level
of method; no one has worked it through on a domain exposure. This page names that absence rather than
filling it.

So what confidence does an open loop leave? Not none -- a bounded, disciplined confidence. The evidence
cannot fix a point optimum, but it can pin the frame around one:

- **A floor, a range, a direction, a harm-ceiling -- not a peak.** The evidence structurally yields
  *below here is deficiency*, *this arm beat that*, *more in this range still helps*, *past here it
  harms* -- but generally not *this exact intake is best*. Carry any threshold with its confidence
  interval and its studied range, or it launders a study-edge into a target.
  -> [[The Underivable Optimum]]
- **No effect exists without a comparator.** An effect size with no *instead of what?* is undefined;
  sign and size move with the counterfactual the exposure displaces, and the unstated comparator is
  usually doing the work. -> [[The Comparator Problem]]
- **Certainty is not strength.** How good the evidence is and how strongly to recommend acting are two
  separate judgments, neither fixing the other; a weak recommendation can mean values vary, not that
  evidence is thin [@grade].
  -> [[Certainty of Evidence vs Strength of Recommendation]], [[Rating Certainty of Evidence]]
- **Quality is fit-to-question, not pedigree** -- correspondence between a study's methods and the
  inference wanted, not a rank [@cooper]. And a
  pattern induced *across* studies is associational and hypothesis-generating, never causal
  [@cooper].
- **Transport by support factors, not demographics.** *It worked there* is not *it will work here*:
  check that the support factors the mechanism needs are present here -- the whole causal cake, not a
  matching population [@cartwright].
  -> [[Will It Work Here (Effectiveness and the Causal Cake)]]
- **The last mile is reflection-in-action.** Where theory underdetermines the case, the practitioner
  frames it and lets the situation talk back [@schn] --
  but that conversation reads coherence and congruence, again not validity.
  -> [[Technical Rationality vs Reflection-in-Action (the Epistemology of Practice)]]
- **A parameter is not a decision.** Closing the estimate-to-action gap is a determinate set of steps --
  region, loss function, drift, transport -- performed out loud so each is auditable as
  evidenced-or-asserted. -> [[The Estimate-to-Action Gap]]

The honest posture, then, is calibrated triangulation across designs, with confidence stated *together
with* the ceiling that bounds it -- measurement error here, an unstated comparator there, a reference
class that may not transport, a curve with no locatable peak. Every number carries its interval and its
studied range or it does not carry a decision. And the disclaimer that outlasts all of it: this grades
coherence and source-fidelity, never validity. A clean board is verifiability, not truth.

## Caveats and boundaries

- **This cut carries no exposure estimates.** Every exposure above is an illustration that links out to
  its own page; no dose-response, threshold, or effect size is asserted here as a finding.
- **Deferrals.** How to turn an estimate into a choice -> [[Better than What]]; *which* marker transmits
  well enough to be a decision target, per metric -> [[Metrics for Targeted Health Guidance]]; which
  levers matter most by magnitude x certainty -> the Big Rocks deliverables. This page owns the
  *structural why*, not those applications.
- **Four named structural gaps.** This cut surfaced them and left them named, not filled: the
  unblindable whole-diet / food-matrix limit; long latency; the open loop instantiated for diet-health
  claims specifically; and a consolidated home for the streetlight effect. It routes each to Weave as a
  candidate concept page -- a gap is a decision-input here, never a silent zero.
- **Two further honesty limits belong to the reader.** Even a sound recommendation built here may
  simply reproduce well-made published guidance applied to the same stratum (the *guidance null*); and
  agreement with authority is not validation, nor disagreement insight -- both are findings, each held
  to the same standard demanded of everything else.
  -> [[The Weighting Problem - Why Population Guidance Is Ill-Posed and Individual Advice Is Not]]
- **The loop is open.** No operation in this wiki grades a claim against a realized outcome. This
  deliverable grades coherence and source-fidelity; it cannot certify that any recommendation built on
  it was right about the world.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | 'What can and cannot be established about diet-health effects given the evidence base''s structural constraints (measurement error, unblindable whole-diet, observational dominance, surrogate outcomes, long latency, the open loop), and what does that imply for how confidently to recommend?' |
> | **Evidence included** | 19 sources — 3 gold, 3 high, 1 moderate |
> | **Overall certainty** | **Medium** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | 1 source(s) below the gold evidence bar feed this page: Dehghan (cohort, moderate). Each labelled by tier; none load-bearing for the core claims. |
> | **Last updated** | 2026-08-26 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Limits%20of%20Evidence.md) |

## References

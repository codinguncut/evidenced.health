---
type: diagnostic
question: When may a recommendation rest on a marker rather than on the outcome the person actually cares about?
aliases: [Surrogate Outcome, Substitute Outcome, Surrogate Endpoint, Biomarker Endpoint]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; World Health Organization (org); Smith-Spangler, Crystal; Baranski, Marcin; Sutton, Elizabeth F; Peterson, Courtney M; US Preventive Services Task Force (org); Snyder, Peter J; Cruz-Jentoft, Alfonso J; Johnson, Guy H; Fritsche, Kevin; Ramsden, Christopher E; Semnani-Azad, Zhila; Cholesterol Treatment Trialists' Collaboration (org); Ngandu, Tiia; Kivipelto, Miia]
sources: [GRADE - Handbook, WHO - Saturated and Trans Fatty Acid Intake 2023, Willett - Nutritional Epidemiology 3e, ESC - CVD Prevention Guidelines 2021, WHO - Non-Sugar Sweeteners 2023, Smith-Spangler - Organic Foods Safer or Healthier Systematic Review 2012, Baranski - Organic vs Conventional Crops Nutrient Meta-Analysis 2014, Sutton - Early Time-Restricted Feeding eTRF 2018, USPSTF - Procedure Manual 2022, Snyder - Testosterone Treatment Fractures 2024, Cruz-Jentoft - Sarcopenia European Consensus EWGSOP2 2019, Johnson - Linoleic Acid Inflammation Review 2012, Ramsden - Minnesota Coronary Reanalysis 2016, Ramsden - Sydney Diet Heart 2013, Semnani-Azad - Intermittent Fasting Cardiometabolic Meta-Analysis 2025, CTT - Statin Intensive LDL Lowering Meta-Analysis 2010, Ngandu - FINGER Multidomain Cognitive Decline 2015]
cluster: evidence-appraisal
relationships:
  related_to:
    - Multidomain Lifestyle Intervention and Cognitive Decline
    - Rating Outcome Importance
    - Certainty of Evidence vs Strength of Recommendation
    - Non-Sugar Sweeteners
    - The U-Shaped Association Artifact
    - Linoleic Acid and Cardiovascular Disease
    - Testosterone Adiposity and Muscle
    - Stress Management and Cardiometabolic Health
    - Sarcopenia Definition and Diagnosis
created: 2026-07-25
updated: 2026-08-05
self_critiqued: 2026-08-05
---

## Why it matters

Outcomes people care about are often rare or slow, so investigators measure something faster and
commoner instead — a marker standing in for the outcome. Substitution generally costs certainty, and
GRADE **restricts its use** rather than merely asking that it be recorded: surrogates are for cases
where evidence on population-important outcomes is lacking.
[@grade, §3.4]

## The rule

GRADE's conditions, stated tightly:

- Consider surrogates **only when evidence about population-important outcomes is lacking** — not as
  a first-line convenience.
- When one is used, **specify the population-important outcome** and, separately, the surrogate
  substituting for it.
- **"Guideline developers should not list the surrogates themselves as their measures of outcome."**
  The outcome remains the thing that matters; the surrogate is a route to estimating it.
- Substituting "may ultimately lead to rating down the quality of the evidence because of the
  indirectness"; §5.2.3 puts it more firmly — "in general, the use of a surrogate outcome requires
  rating down ... by one, or even two, levels."
  [@grade, §3.4, §5.2.3]

## How GRADE grades a surrogate — causal-pathway proximity

The **first** of two criteria the handbook supplies, and the most decision-relevant thing it says about
surrogates: **the penalty scales with distance along the putative causal pathway** to the
patient-important outcome.

- **Far from the endpoint -> rate down two levels.** GRADE's case is calcium and phosphate metabolism
  standing in for patient-important outcomes in renal disease.
- **Close to the endpoint -> rate down one level.** Coronary artery calcification for myocardial
  infarction; bone mineral density for fractures; soft-tissue calcification for pain.
- The judgment draws on "consideration of the biology, mechanism, and natural history of the
  disease." [@grade, §5.2.3]

So a marker's standing is not binary. *How far down the chain* it sits is the question, and it is
answered biologically rather than statistically.

## The second criterion — does the chain actually transmit?

Proximity is not the only test the handbook supplies. Immediately after the proximity passage it adds
a **validation** criterion, addressing whether the surrogate *predicts* the outcome at all:

> *"Example 9: Uncertainty in the relationship between surrogate and Surrogate outcomes (Downgraded by
> One or Two Levels) — Investigators examined the 'validity' of progression-free survival as a
> surrogate for overall survival... They found a **statistically significant association** between
> progression-free and overall survival in the randomized trials they analyzed, **but predicting
> overall survival using progression-free survival remained uncertain**. Rating down quality by one
> level for indirectness would be appropriate in this situation."*

[@grade, §5.2.3, Example 9]

**This is the criterion that does the work the proximity rule cannot.** A significant marker-outcome
association was *not* sufficient — what GRADE asks is whether the outcome can be **predicted** from the
marker, which is a strictly stronger demand than correlation. A marker can be proximate, correlated,
and still fail here.

Two further treatments elsewhere in the handbook point the same way: that *"even if well measured
surrogates are available, confidence in estimates of effects on patient-important outcomes is very
likely to be low"*, and a dedicated list of *"Key questions when using test accuracy as a surrogate"*.

## Tests / indicators

- **Is the outcome named separately from the marker?** A recommendation phrased directly in terms of
  a marker (*lower X to below Y*) has collapsed the distinction and cannot be checked.
- **Was certainty rated down for indirectness — and if not, is a reason on the record?** GRADE's rule
  is *"in general"*, with an explicit judgment clause, so a non-downgrade is **not** automatically a
  defect. Three cases, and only the first two are: the surrogate was silently treated as the outcome;
  the downgrade was skipped with nothing said; or a stated, biology-based judgment was made that the
  chain transmits. The third is what GRADE invites — WHO's LDL case below is a worked instance. **The
  test is whether a reason was given, not whether the downgrade was taken.**
- **Is the marker -> outcome link itself evidenced?** GRADE places surrogate use under indirectness,
  which presumes the link is an inference rather than an observation. The strength of *that* link is
  the whole question, and it is a separate evidential claim from the intervention -> marker effect.



## Red flags

- A marker used because it is measurable, where the patient-important outcome was never named
  (the failure [[Rating Outcome Importance]] guards with the empty-row rule).
- A target expressed as a threshold on a marker, with no statement of which outcome it is a route to.
- Certainty ratings that look high for a body of evidence entirely composed of marker studies.



## Green flags

- The evidence profile names the patient-important outcome, shows the surrogate used for it, and
  carries an explicit indirectness downgrade.
- The direction *and magnitude* of the marker -> outcome transmission is cited, not assumed.



## Decision relevance

A surrogate may legitimately serve as a **target to steer toward** even where it is a weak stand-in
for the outcome in the evidence — but only if the marker -> outcome transmission is itself an
evidenced claim. Where it is assumed, the recommendation inherits the assumption silently, and
markers have moved in the intended direction while the outcomes did not.

**Two consumer-facing interventions that live entirely on this line:** glucose tracking
([[Continuous Glucose Monitoring as a Health Intervention]] — moves HbA1c modestly, no hard outcome,
almost no data in the healthy) and low-AGE / low-heat cooking ([[Dietary AGEs and Cooking Method]] —
moves some lipid/inflammation markers, null on weight/glucose/BP, no hard outcome). Both are marketed on
a marker whose transmission to a patient-important outcome is unevidenced.

**The validated counter-exemplar — LDL / apoB.** The rule cuts both ways: a surrogate whose causal
transmission *is* evidenced is a legitimate target. LDL/apoB-particle burden is a well-evidenced such case
— genetic, Mendelian-randomization and RCT evidence together establish it *causes* ASCVD,
so lowering it (by diet or drug) reduces events in proportion to the reduction achieved
-> [[LDL ApoB and Cumulative Exposure]]. It is the opposite of the *marker moved, patient did worse*
cases: not all surrogates are equal, and this one has earned target status. (The proviso still bites —
the transmission holds only where the LDL-C drop reflects a real particle-number drop and carries no
off-target harm.)

**And the transmission is quantified, not just asserted (CTT 2010).** The strongest form of *the surrogate
moved AND the patient-important outcome followed*: in the IPD meta-analysis of 26 statin RCTs, a 1.0 mmol/L
LDL-C reduction cut major vascular events (RR 0.78) **and all-cause mortality** — «all-cause mortality was
reduced by 10% per 1·0 mmol/L LDL reduction (RR 0·90, 95% CI 0·87-0·93)»
[@ctt2010]. A surrogate reaching
all-cause death in randomised evidence is the rare validated case -> [[LDL Lowering and Cardiovascular Events]].
**But the validation is route-specific:** it is *statin* (drug) lowering. The same marker lowered by *diet*
did **not** transmit (Ramsden MCE/Sydney, below) — so even a well-validated surrogate must be re-checked for
the agent actually used.



## Applied — WHO downgrades strength because the evidence is a surrogate

WHO's 2023 fat guideline supplies a worked instance of a surrogate costing *strength*, not just
certainty. For replacing trans-fatty acids, the evidence runs through LDL cholesterol, and WHO
reasons: while LDL "is a well-established biomarker for measuring the effects of interventions on CVD risk, and is
considered by many to be a causal factor for atherosclerosis and coronary heart disease, **it is not
a physical manifestation or confirmation of disease. Therefore, a conservative approach was taken,
leading to a conditional recommendation.**"
[@who2023saturated, Rationale for TFA recommendation 3]

Two things worth carrying:

- The marker was granted almost every credential a surrogate can have — well-established biomarker, widely held
  to be causal — and **still** produced a weaker recommendation. Surrogate status is not cancelled by
  a plausible mechanism.
- **WHO explicitly declined the indirectness downgrade — and that is a live tension.** It records LDL
  as a *critical* outcome and states it *"was not downgraded for indirectness when determining the
  certainty in the evidence within the GRADE framework"*. The surrogate discount was taken at the
  **strength** step instead.
  [@who2023saturated, Annex 6 footnotes; Summary of evidence]
  - **WHO's warrant is the MARKER-to-OUTCOME link, not the exposure-to-marker one**, and the direction
    matters because it is what criterion 2 above asks for. Annex 6 fn 14: *"LDL cholesterol is an
    indirect measure of patient-important CVD outcomes. However, LDL cholesterol is a well-established
    biomarker for assessing the effects of interventions on **CVD risk**..., and is considered by many
    to be a **causal factor for atherosclerosis and coronary heart disease**. Therefore not downgraded
    for indirectness."* WHO is asserting that the chain **transmits** — the exact question Example 9
    poses — not that SFA reliably moves LDL.
  - **So this is NOT the tension it looks like, and an earlier reading of it as one does not survive.**
    GRADE's rule is *"**in general**, the use of a surrogate outcome requires rating down"*, and it
    attaches an explicit judgment clause (*"Consideration of the biology, mechanism, and natural
    history of the disease can be helpful in making a decision about indirectness"*). WHO exercised
    that judgment, on the transmission question, with its reason on the record. A reasoned,
    documented, biology-based decision not to downgrade is **the judgment GRADE invites**, not a
    departure from a mandate — the not-joined check fires, and what is recorded here is a
    *distinction*, not a *tension*.
  - What remains genuinely notable is narrower and still worth holding: **the same marker was judged
    direct enough to escape the certainty downgrade and indirect enough to cost strength.** WHO's
    stated reason for the second is that LDL *"is not a physical manifestation or confirmation of
    disease"* — which is true of it at the certainty step as well. The two steps were held to
    different standards, and only the strength step's standard is stated.
- The evidence on the surrogate can be *stronger* than the evidence on the outcome and still yield a
  weaker recommendation: in the same guideline, replacing SFA with PUFA, MUFA or carbohydrate lowers
  LDL at **high** certainty, while the hard-outcome certainty behind those replacements is moderate
  to low ([[Saturated Fat Intake and Replacement]]). High certainty about the marker is not high
  certainty about the person.

## The certainty profile of a surrogate vs its own hard outcomes (2026-07-26)

A scoped observation, worth carrying because it is visible only in the annex. In WHO's evidence profile
for replacing SFA with PUFA, **every disease outcome is rated Low or Very low, and the one High-certainty
row in the profile is LDL cholesterol** (-0.055 mmol/L per 1% energy exchange; all-cause mortality Low,
CVD mortality Very low, CVDs Low, CHD Low, stroke Low, type 2 diabetes Very low).
[@who2023saturated, Annex 6, evidence profile 5]

**The disciplined reading, and the trap beside it.** The useful habit is to *ask which outcome carried a
headline certainty label*. The trap is to answer that question from the profile alone: WHO states
elsewhere that its overall certainty *"was based on disease and mortality outcomes"*, and draws its
moderate rating for the PUFA replacement from an RCT subgroup analysis (Hooper) that sits outside this
profile. A first attempt at this page's neighbourhood asserted the surrogate had silently carried the
roll-up; **a blind critique falsified it against that sentence, and the claim is withdrawn.** What
survives is the observation above and the habit -- not an allegation.
[@who2023saturated, Summary of evidence]

**The contrast case — where surrogate and hard outcome AGREE.** The SFA profile above shows surrogate
and outcome *diverging in certainty* (LDL High, every disease outcome Low). The opposite configuration
is on [[Linoleic Acid and Cardiovascular Disease]]: the same nutrient (LA) lowers LDL/apoB *and* its
objective biomarker tracks lower hard CVD, mortality and stroke — surrogate and patient-important
outcome pointing the same way. **The lesson is symmetric, not reversed:** agreement is added warrant
(here the apoB-mediated pathway, [[LDL ApoB and Cumulative Exposure]]) but still does not license
reading the surrogate *as* the outcome — the LA outcome evidence stands on its own biomarker-cohort
footing. The disciplined habit (ask which outcome carried the certainty; do not let the marker stand in)
is the same whether the two agree or diverge.


## Worked instance — the surrogate moved, the outcome unmeasured (FINGER, 2026-08-05)

A clear illustration of the trap in an RCT (not just in guidance): **FINGER** (Ngandu 2015) is a
2-year multidomain-lifestyle RCT whose **primary endpoint is a cognitive-test composite** (NTB Z-score),
a **surrogate for dementia**. The composite moved significantly (between-group 0.022/yr, p=0.030), yet a
7-year extended follow-up is (only) planned to assess intervention effects on **incidence** of dementia
and Alzheimer's disease — i.e. the **patient-important outcome was not measured** here.
[@ngandu2015] -> [[Multidomain Lifestyle Intervention and Cognitive Decline]]

**Two disciplines this instance enforces.** (i) A significant *surrogate* result is **not** a demonstrated
outcome effect — the trial itself keeps them apart, reading its own result as public-health significance
that is not easily translated into clinical or personal significance.
[@ngandu2015] (ii) Whether a 2-year cognitive-composite change is a **validated** surrogate for dementia
incidence is the open transmission question this page centres — legitimacy needs the causal link to the
outcome to be *evidenced*, and here it is exactly what the follow-up is meant to test, not assumed.
[inferred from @ngandu2015]

## Limits

- **GRADE's two criteria are stated but not operationalized.** Proximity is coarse and biologically
  judged; the Example 9 validation criterion asks the right question — can the outcome be *predicted*
  from the marker — but is delivered as a worked case rather than a standard, with no threshold for
  how much predictive uncertainty triggers one level versus two. A quantitative surrogate-validation
  framework (trial-level and individual-level association measures) would convert both into checkable
  standards; whether one exists that guideline bodies actually apply is **unprobed here**.
- **Source currency:** §3 is flagged in-source as rewritten in the 2024 GRADE Book.



## A guidance-level version of the same critique `[2026-07-28, Willett ch.16]`

This page asks when a recommendation may rest on a marker. Willett's policy chapter makes the same
objection about how nutrition guidance has historically been built:

> «Even until now, many dietary recommendations and policies have been based on short-term feeding
> studies with different levels of an essential nutrient and a single physiological variable as the
> outcome. While these can be important, such studies examine the effect of the dietary factor through
> a very narrow window because they do not consider the many pathways by which a dietary factor can
> influence health and the many steps in a pathway from dietary intake to occurrence of disease.»
> [@willett]

**Note the concessive clause — «While these can be important» — is Willett's, not a hedge added here.**
He is not rejecting feeding studies; he is bounding what a single physiological endpoint can carry.

**The structure of the objection is precisely this page's:** a short-term feeding study measures one
step in a causal chain, and a recommendation asserts something about the endpoint. **The gap is the
number of unmeasured steps and unconsidered pathways**, which is why a marker can move correctly while
the outcome does not.

**Where this lands in the corpus.** The wiki already holds WHO's LDL non-downgrade as a worked case of
a body reasoning across that gap explicitly. Willett's claim is the general version, from a methods
textbook rather than a guideline — **so it is a second, differently-situated statement of the same
concern**, and unlike the WHO case it is not one body assessing its own process.

**Bounded, because Willett is a participant in these debates and not a neutral observer of them.** The
same chapter asserts that «for years dietary guidelines have emphasized low-fat, high-carbohydrate
diets when there was little evidence of benefit» — a substantive and contested position on a question
this wiki has not adjudicated. **Recorded as Willett's stated position, not adopted**; it bears on
`SC-12`, and the handle is noted here without scoring it, per the ingest-scope rule. The surrogate
point above stands on its own reasoning and does not depend on that claim being right.

## A well-evidenced surrogate-to-target argument (LDL/apoB) `[2026-07-28, ESC]`

The telos distinguishes a **surrogate** (stands in for an outcome *in the evidence*) from a **target**
(something to steer toward), and licenses a target **only if its causal transmission to a named
patient-important outcome is itself an evidenced claim**. ESC
makes exactly that argument for LDL-C, and its structure is worth extracting whatever one concludes
about the conclusion.

ESC's preamble — **its own confidence claim, recorded as ESC's and not adopted**: the causal role of
LDL-C in ASCVD «is demonstrated beyond any doubt by genetic, observational, and interventional
studies».

Then the load-bearing attribute:

> «The relative reduction in CVD risk is proportional to the absolute size of the change in LDL-C,
> irrespective of the drug(s) used to achieve such change.»
> [@esc2021]

**Why *«irrespective of the drug»* is the whole argument.** A marker is a mere surrogate when the
benefit might belong to the *intervention* rather than to the marker's movement. **If several drugs
with different mechanisms produce outcome benefit proportional to the LDL-C change they achieve, the
common factor is the marker, not any drug's off-target effects.** That is a dose-response test *across
causal routes* — the marker earns target status by behaving the same way no matter how it is moved.

**This is the same discriminator Willett's case studies identified**, arriving in a different domain:
convergence across **independent method classes** (here genetic, observational, interventional) is what
separated folic acid from vitamin A and dietary fat -> [[Upgrading Observational Evidence]].

**Three bounds, because this page's job is scepticism about markers.**

- **The wiki has NOT verified the underlying claim.** ESC asserts drug-independence with one reference;
  this corpus holds none of the trials, no Mendelian-randomisation source, and no contrary analysis.
  **What is recorded is the argument's structure and ESC's assertion**, not a verified fact about LDL.
- **«Beyond any doubt» is a guideline's rhetoric**, not a certainty rating. ESC attaches no GRADE-style
  certainty to it, and this corpus has repeatedly found strength language and evidence grading to move
  independently -> [[Certainty of Evidence vs Strength of Recommendation]].
- **A validated target for one outcome is not a validated target generally.** The claim is about ASCVD.
  It licenses nothing about LDL-C and all-cause mortality, cancer, or any other endpoint, and the
  telos's warning stands: markers have moved the right way while patients did worse.

**Contrast worth keeping, and it is what makes this page's distinction operational.** WHO's LDL
non-downgrade (above) was a *judgement* that indirectness did not apply. **ESC's argument is a
different kind of thing — an empirical claim about invariance across interventions, which is
checkable.** Two bodies, two routes to treating LDL as more than a surrogate: one by reasoned
non-downgrade, one by asserted mechanism-independence. **The second is the stronger form**, and the
corpus should hold the sources that test it. `AWAITS` a Mendelian-randomisation or trial-pooling source
on LDL-lowering across drug classes.

## The certainty gradient runs opposite to outcome importance — measured twice `[2026-07-28]`

WHO's SFA Annex 6 grades every outcome for one exposure. **The ordering is the finding:**

| Outcome class | Best certainty in the annex |
|---|---|
| **LDL cholesterol** (surrogate) | **High** — the only High row |
| Cardiovascular events (hard, composite) | Moderate |
| All-cause mortality (hard) | Moderate |
| CVD / CHD mortality, type 2 diabetes | Low |
| Stroke, CHD events | Very low |

[@who2023saturated, Annex 6, pp.79-80]

**The best-known quantity is the one nobody cares about directly**, and the outcomes a person would
actually choose on are known least well. **This is not a defect in WHO's grading** — it reflects that
a lipid response can be randomised, measured in weeks, in small samples, while an event outcome cannot.
**The certainty gradient tracks measurability, not importance.**

**And it is now measured twice, on two exposures, in two guidelines.**
[[Sodium Intake and Blood Pressure]] has the identical shape: **High** certainty on blood pressure,
**very low** on hard outcomes. **Two independent exposures showing the same inversion is the beginning
of a general claim about this literature** — that wherever a nutrient acts through a measurable
intermediate, the intermediate will be better graded than the endpoint, **structurally and
permanently**, because the designs that grade well are the ones the intermediate admits.
[inferred from @who2023saturated; @who2012]

**Why this is the practical core of the surrogate problem.** The pressure to act on the marker is not
irrationality — **it is a rational response to the marker being the better-evidenced quantity.** A
reader following "act on the strongest evidence" is led toward LDL and blood pressure *by the grading
itself*. **The discipline this page asks for therefore runs against the grain of the evidence
hierarchy, not with it**, which is why it needs stating rather than assuming.

**The guard that keeps this honest:** two exposures is two, and both are WHO's. **A third body grading
the same inversion on a different exposure would make this a property of the literature; two WHO
guidelines make it a hypothesis with two instances.**

## The mirror case — a surrogate WHO DECLINED to credit `[2026-07-29, WHO NSS 2023]`

The LDL and ESC cases above are surrogates argued *up* to target status. [[Non-Sugar Sweeteners]] is the
opposite move by the same body: a moving surrogate WHO refused to bank. In the NSS trials, short-term
**body weight** falls (MD -0.71 kg pooled), yet WHO ruled that «evidence of minor weight loss or reduced
BMI over several months or less … does not represent a health benefit», because weight «must be sustained
over the long term» to matter — and the long-term cohorts point the other way.
[@who2023nonsugar]

**The same second-criterion test, opposite verdict — read through this page's lens.** This page's
load-bearing test (Example 9) is whether the outcome can be *predicted* from the surrogate — whether the
chain **transmits**. WHO did not cite Example 9 for either exposure, but its stated reasons map cleanly
onto that test, and land oppositely for two of its own surrogates:

| Case | Surrogate | WHO's stated reason (mapped to transmission) | WHO's verdict | Same quantity? |
|---|---|---|---|---|
| SFA/TFA 2023 | LDL cholesterol | «considered by many to be a causal factor for atherosclerosis» — transmission asserted (genetic/MR/RCT elsewhere) | **credited** — declined indirectness downgrade | — |
| NSS 2023 | short-term body weight | short-term loss «does not represent a health benefit» absent evidence it is «sustained over the long term» — no evidence the marker predicts the outcome | **declined** — not banked as benefit | **No** — different surrogates, one rule |

**Why this is a refinement, not a tension (not-joined check (ii): different surrogates).** The two are
different quantities judged under the *same* rule — credit a surrogate only where its transmission to the
patient-important outcome is evidenced. LDL cleared it; short-term weight did not. So the NSS case is the
**negative worked instance** of this page's decision rule: the discipline the page asks for, applied by a
guideline body against itself. **NON-independent (both WHO)** — this corroborates the *rule*, not via an
independent field, so no `[E-independent]` is claimed.

**The sharper point:** the surrogate here was not merely weak — it was **moving in the *good* direction
while the hard-outcome cohorts moved the other way** (weight down in RCTs; obesity/T2D/CVD/mortality
associations up in cohorts). That is the textbook *marker moved the right way while patients did worse*
warning made concrete — and it is why a moving surrogate is bankable only when transmission is shown, not
assumed. The cohort direction is itself unadjudicated (-> [[The U-Shaped Association Artifact]]).

## Pesticide-residue level as a surrogate for harm `[2026-07-29, organic-food cluster]`

The organic-food case is this page's rule applied to a *contaminant* marker rather than a physiological
one. Organic produce carries measurably fewer synthetic-pesticide residues — Smith-Spangler - Organic
Foods Safer or Healthier Systematic Review 2012 found a residue-contamination risk difference of 30%,
and Baranski [@baranski2014] a fourfold higher residue
incidence in conventional crops. **But residue *presence* is a surrogate, and the patient-important
outcome is harm at real-world exposure.** Smith-Spangler supplies the transmission gap directly:
differences in risk for exceeding maximum allowed limits were small.
[@smithspangler2012]

**When both arms sit largely below the regulatory limit, a difference in detectable residues does not
transmit to a difference in harm** — the marker moved, but the chain to the outcome is unevidenced at
those levels (the expectancy test: decades of residue-difference data, still no outcome trial). Organic's
residue advantage is real and is a legitimate *reason to prefer it* on a precautionary axis, but it is
**not** a demonstrated health benefit — the same discipline this page asks of LDL and of short-term
weight. -> [[Organic vs Conventional Food]]

## Meal-timing that moves markers but nothing patient-important `[2026-07-29, Sutton eTRF]`

The eTRF trial ([[Time-Restricted Eating]]) is a clean worked case of surrogates moving with **no weight
change and no hard outcome**. Under supervised, weight-matched controlled feeding, shifting eating earlier
lowered morning systolic/diastolic BP «by 11 ± 4 mm Hg ... and 10 ± 4 mm Hg», cut mean insulin
«by 26 ± 9 mU/L», improved insulin resistance «by 36 ± 10 U/mg (p = 0.005)», and reduced an oxidative-
stress marker — while fasting **glucose** (a pre-specified glycaemic outcome) was null.
[@sutton2018]

**Everything credited to eTRF is a surrogate, and the transmission to a patient-important outcome is
unevidenced here** (n=8, 5 weeks, prediabetic men, no events, no trajectory). Worse for the marker story,
two surrogates moved in *opposite* directions — insulin/BP improved while **fasting triglycerides rose
57 ± 13 mg/dL** — and the trial cannot say which, if any, tracks the outcome a person cares about. So
eTRF's numbers are a legitimate *target* candidate only if the marker->outcome chain is later shown to
transmit; on this evidence they are markers, not a benefit. Note the direction-of-effect asymmetry: a
short-fast-before-testing artifact plausibly manufactured the triglyceride rise, which is exactly why a
single marker in isolation is not diagnostic.

**And it is not just eTRF's n=8 — the *whole* intermittent-fasting literature lives on this line.** The
pooled IF network-MA (99 RCTs, 6582 adults, median 12-week follow-up) reports **only** intermediate
cardiometabolic outcomes — weight, BMI, lipids, glucose markers, BP — with **no hard events, no
mortality, no trajectory** [@semnaniazad2025].
So even the best-powered summary of the field cannot say whether any IF regimen changes a
patient-important outcome; it can only rank the markers — this page's rule instantiated at whole-field
scale -> [[Time-Restricted Eating]].

## The surrogate discount as a NON-GRADE guideline body builds it in `[2026-07-31, USPSTF]`

USPSTF operationalizes the surrogate penalty structurally, in its own vocabulary — **intermediate**
outcomes vs **health** outcomes. Health outcomes are «symptoms, functional levels, and conditions that
patients can feel or experience»; intermediate outcomes (blood pressure, serum cholesterol, weight,
dietary intake) «are not health outcomes in and of themselves». The rule:

> «The USPSTF gives greater weight to evidence of an effect on health outcomes than evidence of an
> effect on risk factors or intermediate outcomes. The fact that a preventive service has a proven
> effect on an intermediate outcome does not necessarily establish that it can improve outcomes that
> are perceptible to patients.»
> [@uspstfmanual2022]

**Where USPSTF is HARSHER than GRADE's one-or-two-level discount.** In its analytic framework the
intermediate->health-outcome step is a distinct key question (KQ6), and USPSTF near-forecloses banking
benefit through it: «Due to the inherent limitations of the evidence that will be used to link
intermediate and health outcomes, it is very unlikely that the evidence for this key question will be
deemed convincing. This is due to the likely need to depend on observational evidence and the high
potential for confounding.» [@uspstfmanual2022]

**This is the same transmission test this page's Example-9 criterion asks, made near-structural.** GRADE
downgrades one-or-two levels and lets a reasoned biology judgement escape the penalty (WHO's LDL case
above). USPSTF instead makes the intermediate->health linkage *presumptively unconvincing*, so a
recommendation resting on a marker is pushed toward its indirect-evidence pathway and the certainty of
net benefit is capped accordingly. **Two instruments, same concern, different severity of the default.**
[inferred from @uspstfmanual2022] -> [[GRADE vs USPSTF - Two Appraisal Systems]]

**And the mortality corollary is stated plainly:** «few preventive interventions have a measurable
effect on all-cause mortality» — so USPSTF routinely grades on a health outcome one step short of death,
and names the three reasons all-cause and cause-specific mortality diverge (competing harms; rare
condition; competing mortality at old age). A marker moving is not a life saved; a cause-specific death
averted is not an all-cause death averted. -> [[Rating Outcome Importance]]
[@uspstfmanual2022]

## The surrogate that INVERTED — bone density up, fractures up (testosterone) `[2026-08-01, Snyder TRAVERSE]`

A striking worked refutation of a surrogate — and a rare one, because it lands on GRADE's *own named
example*. This page's proximity rule (above) lists **«bone mineral density for fractures»** as a surrogate
*close* to the endpoint — rate down only **one** level [@grade, §5.2.3]. Testosterone
therapy is the case where that proximate, credentialed surrogate moved the intended way while the
patient-important outcome moved the **opposite** way.

Prior trials established the surrogate: «Testosterone treatment in men with hypogonadism improves bone
density and quality, but trials with a sufficiently large sample and a sufficiently long duration to
determine the effect of testosterone on the incidence of fractures are needed.»
[@snyder2024]. The TRAVERSE fracture RCT (n=5204,
powered 80% to detect a **30% fracture reduction**) then measured the outcome:

> «A total of 91 of 2601 participants (3.50%) in the testosterone group and 64 of 2603 participants (2.46%)
> in the placebo group had one or more clinical fractures, excluding fractures of the ster- num, fingers,
> toes, facial bones, and skull (haz- ard ratio, 1.43; 95% confidence interval [CI], 1.04 to 1.97)»
> [@snyder2024]

The authors state the surprise directly: «We did not expect these results, because most previous studies
showed that testosterone im- proved many measures of bone structure and quality»
[@snyder2024].

**The parameter comparison — same surrogate, opposite verdict from the outcome:**

| Parameter | GRADE Handbook | Snyder 2024 (TRAVERSE fracture RCT) | Same quantity? |
|---|---|---|---|
| The surrogate | bone mineral density | areal + volumetric BMD (raised by T in prior trials) | **Yes** — both BMD |
| The patient-important outcome | fractures | clinical fractures | **Yes** |
| GRADE's stance | BMD is *proximate* -> rate down only one level | — | — |
| Assumed direction of transmission | BMD up -> fewer fractures | BMD **not measured in TRAVERSE** (up in prior trials), **fractures up (HR 1.43)** | the outcome **contradicts** the surrogate |

**Why this instance is distinct on the page.** The LDL case is a surrogate argued *up* to target status
(transmission evidenced); the NSS and organic cases are surrogates *declined* (transmission unevidenced).
This is a third kind: a surrogate whose transmission was assumed on GRADE's own *proximity* grounds and
then **empirically inverted** by an adequately powered RCT. **Scope caveat:** the inversion is inferred
*across studies*, not observed within one — the BMD-up leg is transported from prior trials in
partly-different hypogonadal populations, and TRAVERSE (CVD-enriched men, osteoporosis *not* an entry
criterion) did not itself measure BMD. That the surrogate was never measured in the population where the
outcome inverted is itself part of the lesson, not a hole in it. Proximity plus a plausible mechanism plus a
consistently-moving marker were **still not enough** — exactly Example 9's point (correlation is not
prediction), made concrete on a patient-important outcome. It is the textbook *marker moved the right way
while patients did worse* warning, realised. (Bound it: one RCT substudy, HR 1.43 with a CI that barely
excludes 1 [1.04-1.97], mechanism unknown — a striking instance, not a settled law.)
-> [[Testosterone Adiposity and Muscle]]

[inferred from @grade; @snyder2024]


## A guideline body rewrites its CASE DEFINITION to demote a surrogate `[2026-08-04, EWGSOP2]`

The prior instances are surrogates argued up, declined, or inverted *inside an evidence appraisal*. This
is a fourth, structurally different form: a guideline body reorganising its own **diagnostic definition**
around the surrogate discipline. For three decades sarcopenia was defined by low muscle **mass**. The
EWGSOP2 (2019) consensus demotes mass to a *confirmatory* role and promotes muscle **strength** to the
primary criterion, on exactly this page's grounds: «muscle strength comes to the forefront, as it is
recognised that strength is better than mass in predicting adverse outcomes»
[@cruzjentoft2019].

Two of the page's own tells drove the demotion, stated by an independent body in a different domain
(muscle, not lipids/BMD) — a generality instance for the rule (`type-E` flavour, corroboration not pad):

- **Outcome-proximity:** strength predicts falls/fractures/disability/mortality better than mass — so the
  closer-to-outcome measure wins primacy. Reinforced by a rate asymmetry EWGSOP2 reports: after 50,
  strength declines faster than mass (1.5-5% vs 1-2%/year), so a mass number *under-reads* the functional
  loss.
- **Measurement reliability compounds it:** mass/quality «remain problematic as primary parameters»
  because they are technically hard to measure accurately, while grip strength is cheap and reliable — so
  the *worse* predictor was also the *noisier* one. Both considerations pointed the same way.

**Bound it:** this is a definitional/prognostic reorganisation by expert consensus, not an RCT showing
that steering strength changes outcomes — the loop stays open, and the value here is the *appraisal move*
(pick the marker closest to the outcome), independently enacted -> [[Sarcopenia Definition and Diagnosis]],
[[Testosterone Adiposity and Muscle]].

## The inverse use — a surrogate NULL that rebuts a HARM mechanism `[2026-08-04, Johnson LA-inflammation]`

Every case above uses a surrogate to argue *for* something (a benefit, a target) or asks whether a body
should *credit* a moved marker. Johnson 2012 is the mirror: a surrogate deployed to argue *harm* —
the seed-oil thesis that dietary linoleic acid (LA) drives disease *via inflammation*, with inflammatory
markers (CRP, IL-6, TNF-alpha) as the surrogate for the pathway. A systematic review of RCTs finds
feeding LA does **not** raise those markers: *«virtually no evidence is available from randomized,
controlled intervention studies among healthy, noninfant human beings to show that addition of LA to the
diet increases the concentration of inflammatory markers»*
[@johnson2012, Discussion/Abstract].

**The asymmetry of a surrogate null — what it does and does not license [inferred from @johnson2012]:**

- **It rebuts the *mechanism*, not the *outcome*.** A null on the surrogate breaks the proposed
  harm *pathway* (LA -> inflammation -> disease) on its own terms. That is a real move — the harm story
  was *built* on the surrogate, so a null on the surrogate collapses the story's own logic.
- **It is NOT proof of safety on hard outcomes, nor of benefit.** The surrogate-to-outcome chain is
  unproven in *either* direction, so a marker that fails to rise says nothing about disease or death —
  the same gap that stops a marker that *does* move from proving harm. Johnson himself claims only
  *«a measure of reassurance regarding current dietary recommendations»*, not benefit -> [[Linoleic Acid and Cardiovascular Disease]].
- **The direction of the argument does not relax the discipline.** A reader sympathetic to seed oils is
  tempted to read the null as vindication; symmetric standards forbid it — the surrogate is exactly as
  weak a proxy when it *helps* your prior as when it hurts it. The correct output is *the harm mechanism
  is not supported*, not *seed oils are safe* — those are different claims resting on different (here,
  observational) evidence.

**Generality for the rule:** a surrogate is a two-edged proxy — its evidentiary weakness is invariant to
whether it is wielded to *establish* an effect or to *rebut* one. Filing a marker-null as a
mechanism-rebuttal (not an outcome verdict) is the surrogate discipline applied in the negative.

## The archetypal DISCONNECT — the surrogate moved, the outcome did not (Ramsden MCE) `[2026-08-04]`

The prior cases argue a surrogate *up* or *down*, or catch one *inverting*. Ramsden's recovered
**Minnesota Coronary Experiment** is the cleanest *disconnect* the corpus holds, and it is unusually
strong because it is a **double-blind RCT**, not an observational comparison. Replacing saturated fat with
corn-oil linoleic acid **lowered serum cholesterol -13.8% vs -1.0% control (P<0.001)** — a large, dose-
related move in the intended direction — yet «Kaplan Meier graphs showed no mortality benefit for the
intervention group in the full randomized cohort or for any prespecified subgroup», and the 5-trial
meta-analysis found «no evidence of benefit on mortality from coronary heart disease (1.13, 0.83 to 1.54)
or all cause mortality (1.07, 0.90 to 1.27).»
[@ramsden2016, Results; Fig 7] Ramsden's summary:
LA replacement «effectively lowers serum cholesterol but does not support the hypothesis that this
translates to a lower risk of death.» [@ramsden2016, Conclusions]

**Two grades of disconnect, kept distinct (symmetric standards).**

- **The clean, randomized disconnect: the surrogate moved and the randomized outcome did not.** The
  intervention-vs-control mortality contrast is a *null* — cholesterol fell, death did not. This is the
  textbook surrogate failure: the marker responded exactly as the theory required, and the endpoint it
  was standing in for did not follow. It requires no causal claim about *harm* — only that the surrogate
  did not transmit.
- **The stronger «patients did worse» claim is real but weaker-graded.** Ramsden also reports that
  *greater* cholesterol reduction tracked *higher* death (HR 1.22 per 30 mg/dL) and more autopsy MI (IRR
  1.90) — but he concedes the cholesterol-death arm is «observational in nature», it is >=65-driven and
  frailty-shaped (low cholesterol marks the frail/dying -> [[The U-Shaped Association Artifact]]), and the
  autopsy signal rests on half the files. So the corpus banks the **disconnect** as demonstrated and holds
  the **worse-outcome** overlay as suggestive, not proven.

**Why this is the load-bearing counter to the validated-surrogate exemplar.** The LDL/apoB case above is a
surrogate whose transmission *is* evidenced — but only under Ference's proviso: *provided the LDL-C drop
is concordant with the particle-number drop and there are no competing off-target effects*
-> [[LDL ApoB and Cumulative Exposure]]. MCE is the worked instance of **why that proviso is not
boilerplate**: the same surrogate (serum cholesterol) lowered by a *different agent* (diet LA rather than
a statin) did **not** reduce events, and Ramsden's proposed reason is exactly an off-target escape hatch —
«a decrease in low density lipoprotein can represent widely different biochemical phenomena», so «some
agents that decrease low density lipoprotein have been shown to reduce the risk of coronary heart disease,
while others have no clear effect, and still others might actually increase risk.»
[@ramsden2016, Why didn't lowering serum cholesterol translate to clinical improvement?]
**The decision-relevant generalisation: a surrogate validated for one *route* of movement is not
validated for every route** — validate the marker->outcome transmission *for the agent you are actually
using*, not for the marker in the abstract. This is the same discipline ESC's «irrespective of the drug»
invariance argument tries to establish for LDL-lowering *drugs*; MCE shows it can fail for a *dietary* LDL
change.
[inferred from @ramsden2016]

**Sydney Diet Heart (Ramsden 2013) is the same disconnect, one grade sharper — the outcome moved the
WRONG way, randomized.** MCE's randomized outcome was a *null*; the companion SDHS (single-blind RCT,
458 post-MI men, n-6-selective safflower-oil LA) had the surrogate fall MORE in the LA arm (**total
cholesterol -13.3% v -5.5%, P<0.001**) yet the **randomized ITT mortality go up**: all-cause HR 1.62
(1.00-2.64), CVD 1.70, CHD 1.74 — and those cholesterol «reductions were not associated with
mortality outcomes».
[@ramsden2013, Cumulative death rates; Reconciling results]
So SDHS is not just a marker that failed to
transmit (MCE) but a marker that moved the "right" way while the endpoint moved the *opposite* way — a
sharper grade of surrogate invalidation than MCE's null (an adverse divergence, not merely an absent
benefit). **The same discipline it teaches, and the same caveat:** the disconnect (surrogate-vs-outcome divergence) is demonstrated, but reading it as
*LA-causes-death* is over-reading a small single-blind high-dose secondary-prevention trial that pools to
non-significance -> [[Linoleic Acid and Cardiovascular Disease]] (*The Sydney secondary-prevention arm*).
The surrogate lesson survives the appraisal even where the harm claim does not: a dietary agent lowering
cholesterol is **not** thereby shown to lower death.
[inferred from @ramsden2013]

## References

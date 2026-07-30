---
type: diagnostic
question: When may a recommendation rest on a marker rather than on the outcome the person actually cares about?
aliases: [Surrogate Outcome, Substitute Outcome, Surrogate Endpoint, Biomarker Endpoint]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; World Health Organization (org); Smith-Spangler, Crystal; Baranski, Marcin; Sutton, Elizabeth F; Peterson, Courtney M]
sources: [GRADE - Handbook, WHO - Saturated and Trans Fatty Acid Intake 2023, Willett - Nutritional Epidemiology 3e, ESC - CVD Prevention Guidelines 2021, WHO - Non-Sugar Sweeteners 2023, Smith-Spangler - Organic Foods Safer or Healthier Systematic Review 2012, Baranski - Organic vs Conventional Crops Nutrient Meta-Analysis 2014, Sutton - Early Time-Restricted Feeding eTRF 2018]
cluster: evidence-appraisal
relationships:
  related_to:
    - Rating Outcome Importance
    - Certainty of Evidence vs Strength of Recommendation
    - Non-Sugar Sweeteners
    - The U-Shaped Association Artifact
created: 2026-07-25
updated: 2026-07-29
self_critiqued: 2026-07-29
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


``
## Red flags

- A marker used because it is measurable, where the patient-important outcome was never named
  (the failure [[Rating Outcome Importance]] guards with the empty-row rule).
- A target expressed as a threshold on a marker, with no statement of which outcome it is a route to.
- Certainty ratings that look high for a body of evidence entirely composed of marker studies.


``
## Green flags

- The evidence profile names the patient-important outcome, shows the surrogate used for it, and
  carries an explicit indirectness downgrade.
- The direction *and magnitude* of the marker -> outcome transmission is cited, not assumed.


``
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
transmission *is* evidenced is a legitimate target. LDL/apoB-particle burden is the strongest such case
the wiki holds — genetic, Mendelian-randomization and RCT evidence together establish it *causes* ASCVD,
so lowering it (by diet or drug) reduces events in proportion to the reduction achieved
-> [[LDL ApoB and Cumulative Exposure]]. It is the opposite of the "marker moved, patient did worse"
cases: not all surrogates are equal, and this one has earned target status. (The proviso still bites —
the transmission holds only where the LDL-C drop reflects a real particle-number drop and carries no
off-target harm.)


``
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
    *distinction*, not a `[[tension]]`.
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

## Limits

- **GRADE's two criteria are stated but not operationalized.** Proximity is coarse and biologically
  judged; the Example 9 validation criterion asks the right question — can the outcome be *predicted*
  from the marker — but is delivered as a worked case rather than a standard, with no threshold for
  how much predictive uncertainty triggers one level versus two. A quantitative surrogate-validation
  framework (trial-level and individual-level association measures) would convert both into checkable
  standards; whether one exists that guideline bodies actually apply is **unprobed here**.
- **Source currency:** §3 is flagged in-source as rewritten in the 2024 GRADE Book.


``
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

## The strongest surrogate-to-TARGET argument the corpus holds `[2026-07-28, ESC]`

The telos distinguishes a **surrogate** (stands in for an outcome *in the evidence*) from a **target**
(something to steer toward), and licenses a target **only if its causal transmission to a named
patient-important outcome is itself an evidenced claim**. [@esc2021]
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
``

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
and Baranski - Organic vs Conventional Crops Nutrient Meta-Analysis 2014 [@baranski2014] a fourfold higher residue
incidence in conventional crops. **But residue *presence* is a surrogate, and the patient-important
outcome is harm at real-world exposure.** Smith-Spangler supplies the transmission gap directly:
«differences in risk for exceeding maximum allowed limits were small.»
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
stress marker — while fasting **glucose** (the trial's *primary* endpoint) was null.
[@sutton2018]

**Everything credited to eTRF is a surrogate, and the transmission to a patient-important outcome is
unevidenced here** (n=8, 5 weeks, prediabetic men, no events, no trajectory). Worse for the marker story,
two surrogates moved in *opposite* directions — insulin/BP improved while **fasting triglycerides rose
57 ± 13 mg/dL** — and the trial cannot say which, if any, tracks the outcome a person cares about. So
eTRF's numbers are a legitimate *target* candidate only if the marker->outcome chain is later shown to
transmit; on this evidence they are markers, not a benefit. Note the direction-of-effect asymmetry: a
short-fast-before-testing artifact plausibly manufactured the triglyceride rise, which is exactly why a
single marker in isolation is not diagnostic.

## References

---
type: diagnostic
question: When may a recommendation rest on a marker rather than on the outcome the person actually cares about?
aliases: [Surrogate Outcome, Substitute Outcome, Surrogate Endpoint, Biomarker Endpoint]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; World Health Organization (org); Smith-Spangler, Crystal; Baranski, Marcin; Sutton, Elizabeth F; Peterson, Courtney M; US Preventive Services Task Force (org); Snyder, Peter J; Cruz-Jentoft, Alfonso J; Johnson, Guy H; Fritsche, Kevin; Ramsden, Christopher E; Semnani-Azad, Zhila; Cholesterol Treatment Trialists' Collaboration (org); Ngandu, Tiia; Kivipelto, Miia; European Food Safety Authority (org); de Santana, Felipe M; Moll van Charante, Eric P; Richard, Edo; Kaptoge, Stephen; Wensley, Frances; Danesh, John; Parker, Haley W; Abreu, Alyssa M; Sullivan, Mary C; Vadiveloo, Maya K; Liu, Xiao; Komar, B; Schwingshackl, L; Goldberg, Ronald B; Orchard, Trevor J; Crandall, Jill P; Yu, Jie; Zhou, Zien; McEvoy, R Doug; Feller, Martin; Rodondi, Nicolas; Dekkers, Olaf M; Skotsimara, Georgia; Pawlak, Roman]
sources: [Liu - Triglyceride-Glucose Index Cardiovascular Mortality Meta-Analysis 2022, GRADE - Handbook, WHO - Saturated and Trans Fatty Acid Intake 2023, Willett - Nutritional Epidemiology 3e, ESC - CVD Prevention Guidelines 2021, WHO - Non-Sugar Sweeteners 2023, Smith-Spangler - Organic Foods Safer or Healthier Systematic Review 2012, Baranski - Organic vs Conventional Crops Nutrient Meta-Analysis 2014, Sutton - Early Time-Restricted Feeding eTRF 2018, USPSTF - Procedure Manual 2022, Snyder - Testosterone Treatment Fractures 2024, Cruz-Jentoft - Sarcopenia European Consensus EWGSOP2 2019, Johnson - Linoleic Acid Inflammation Review 2012, Ramsden - Minnesota Coronary Reanalysis 2016, Ramsden - Sydney Diet Heart 2013, Semnani-Azad - Intermittent Fasting Cardiometabolic Meta-Analysis 2025, CTT - Statin Intensive LDL Lowering Meta-Analysis 2010, Ngandu - FINGER Multidomain Cognitive Decline 2015, EFSA - Dietary Sugars Upper Intake Level 2022, de Santana - Low Muscle Mass Mortality 2021, Moll van Charante - preDIVA Multidomain Dementia Prevention 2016, Emerging Risk Factors Collaboration - CRP Coronary Stroke Mortality 2010, CCGC - CRP Coronary Heart Disease Mendelian Randomization 2011, Parker - Allostatic Load Mortality Meta-Analysis 2022, Komar - Leucine-Rich Protein Elderly, Goldberg - DPPOS Cardiovascular Events 2022, Yu - CPAP Cardiovascular Events Meta-Analysis 2017, Feller - Thyroid Hormone Therapy Quality of Life 2018, Skotsimara - Electronic Cigarettes Cardiovascular Effects 2019, Pawlak - Vitamin B12 Deficiency Vegetarians 2013]
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
    - Inflammation as a Modifiable Lever
    - Allostatic Load and Mortality
    - Insulin Resistance Surrogates and Cardiovascular Risk
    - Lifestyle vs Metformin for Diabetes Prevention
    - Baseline Risk and the Relative-Absolute Split
    - Sleep Apnea Treatment and Cardiovascular Risk
    - Levothyroxine for Subclinical Hypothyroidism
    - Electronic Cigarettes and Cardiovascular Risk
    - Vitamin B12 Status in Vegetarian and Vegan Diets
created: 2026-07-25
updated: 2026-09-02
nosplit: 725@single-concept diagnostic (one when-may-a-marker-substitute question); length is worked instances accreted across sources, not multiple decisions
self_critiqued: 2026-09-02
---

## Why it matters

Outcomes people care about are often rare or slow, so investigators measure something faster and
commoner instead — a marker standing in for the outcome. Substitution generally costs certainty, and
GRADE **restricts its use** rather than merely asking that it be recorded: surrogates are for cases
where evidence on population-important outcomes is lacking.
[@grade]

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
  [@grade]

## How GRADE grades a surrogate — causal-pathway proximity

The **first** of two criteria the handbook supplies, and the most decision-relevant thing it says about
surrogates: **the penalty scales with distance along the putative causal pathway** to the
patient-important outcome.

- **Far from the endpoint -> rate down two levels.** GRADE's case is calcium and phosphate metabolism
  standing in for patient-important outcomes in renal disease.
- **Close to the endpoint -> rate down one level.** Coronary artery calcification for myocardial
  infarction; bone mineral density for fractures; soft-tissue calcification for pain.
- The judgment draws on "consideration of the biology, mechanism, and natural history of the
  disease." [@grade]

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

[@grade]

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



## Prognostic marker vs modifiable lever — the same distinction, one step earlier

The tests above assume you are already *intervening* on the marker. A prior version of the error appears
whenever a measure merely **predicts** an outcome: a strong predictor is a **marker to stratify with**,
not automatically a **lever to pull**. Three ways the predict->intervene step fails, and a measure that
predicts can fail any of them:

- **Reverse causation makes it a marker OF the outcome, not a cause of it** — low grip strength, low
  VO2max, and low muscle mass all predict mortality partly because occult ill-health *lowers them*; the
  measure sits downstream of the thing you fear, so acting on it need not move the outcome
  ([[The U-Shaped Association Artifact]] carries the sick-quitter / reverse-causation machinery).
- **The marker -> outcome link may be unevidenced** (the surrogate test above).
- **The association may not survive intervention** ([[The Observational-Trial Discordance]]).

So a measure earns the "modifiable lever" label only on **intervention** evidence that acting on it
changes a patient-important outcome; absent that, it is a **prognostic metric** — genuinely useful for
placing someone in a stratum (the decision it *does* serve), never assumed to be a treatment target.
Worked instances: [[Grip Strength and Mortality]] and [[Cardiorespiratory Fitness and Mortality]] (both
cheap, strong predictors held explicitly as metrics-not-levers); [[Low Muscle Mass and Mortality]]
(mass predicts, but strength out-predicts and neither is a proven target).

## The composite-index case — allostatic load predicts mortality, no lever shown `[2026-08-09, Parker]`

The prognostic-marker-vs-lever cases above are single markers (grip, VO2max, muscle mass, CRP).
Allostatic load (AL) is the same rule on a **composite** — a summed index of dysregulated biomarkers
across four systems (cardiovascular, metabolic, neuroendocrine, immune). Parker's gold SR-MA finds high
AL predicts all-cause mortality (pooled HR 1.22, 95% CI 1.14-1.30, n=10) and CVD mortality (1.31,
1.10-1.57), and that «total AL scores better predict mortality outcomes than any individual AL biomarker»
[@parker2022allostatic]. Yet «Though no intervention
studies were included» [@parker2022allostatic] — no
evidence here that *reducing* AL reduces mortality.

**The composite twist sharpens, not softens, the rule.** Aggregating dysregulation makes AL a *better
predictor* — that is the whole reason the index exists — but better prediction is not transmission: the
Example-9 test (can the outcome be predicted? is strictly weaker than does-it-cause) is passed by
construction and the causal question is untouched. A composite index is doubly a marker: it predicts
well *and* sits partly downstream of occult illness (an already-sick body accumulates dysregulation),
so a raised AL is partly a *consequence*. Prognostic (route (a) stratifier) yes; validated target no —
the same line held for CRP and for muscle mass -> [[Allostatic Load and Mortality]].
[inferred from @parker2022allostatic]

## The archetypal predicts-but-does-not-cause marker — CRP, settled by Mendelian randomization `[2026-08-08]`

C-reactive protein is a clean worked instance of the section above: a strong, log-linear *predictor*
of coronary heart disease that a genetic natural experiment shows is **not a cause** — so it is a marker
to stratify with, never a target to steer toward. Two large IPD meta-analyses, and the point is that they
do **not** conflict:

| Parameter | ERFC 2010 (observational) | CCGC 2011 (Mendelian randomization) | Same quantity? |
|---|---|---|---|
| Exposure contrast | *circulating* CRP, per 1-SD higher usual ln CRP | *genetically-raised* CRP, per 1-SD higher genetic ln CRP | **No** — same scale, different *source* of variation |
| Circulating CRP -> CHD (adjusted) | RR 1.37 (95% CI 1.27-1.48) [@erfc2010crp] | RR 1.33 (1.23 to 1.43) [@ccgc2011crpmr] | **Yes** — both observational -> they AGREE |
| Genetic CRP -> CHD | not estimated | RR 1.00 (0.90 to 1.13) [@ccgc2011crpmr] | N/A — a gap on ERFC's side |

Where the two measure the same quantity they agree; CCGC adds the genetic arm (null) that reveals the
observational association is confounded — «C reactive protein concentration itself is unlikely to be even
a modest causal factor in coronary heart disease»
[@ccgc2011crpmr]. This is a
**refinement/disambiguation, not a tension**: CCGC itself preserves the prediction claim — «Our findings
also do not address the separate issue of the value of measurement of circulating C reactive protein in
prediction of long term vascular risk»
[@ccgc2011crpmr]. The Example-9 test
this page centres (can the outcome be *predicted*? is a strictly weaker demand than *causes*) is exactly
what separates the two: CRP passes prediction, fails causation. Full parameter table, independence
caveat, and the treat-the-pathway-not-the-molecule consequence: [[Inflammation as a Modifiable Lever]].
[inferred from @erfc2010crp; @ccgc2011crpmr]

## An insulin-resistance readout on the same line — TyG predicts events, is not a target `[2026-08-09, Liu]`

The triglyceride-glucose (TyG) index — a cheap fasting lab proxy for insulin resistance, «considered a
reliable surrogate marker of insulin resistance»
[@liu2022tyg] —
is a fresh worked case of the prognostic-marker-vs-lever rule, and it sharpens two points the CRP case
does not.

- **Predicts incidence, not mortality — the split is the finding.** Liu's gold MA (12 cohorts,
  6,354,990 general-population participants) finds highest-vs-lowest TyG raises CAD (HR 2.01, 95% CI
  1.68–2.40), MI (1.36, 1.18–1.56) and composite CVD incidence (1.46, 1.23–1.74), but «there was no
  association between the TyG index and mortality» (CV mortality 1.10, 0.82–1.47; all-cause 1.08,
  0.92–1.27 — both CIs cross 1)
  [@liu2022tyg].
  A predictor's signal is *outcome-specific*: TyG passes prediction on events and is silent on the
  mortality outcomes people weight most.
- **A predictor that adds nothing over the incumbent score.** Even the prediction value is bounded:
  «addition of the TyG index to the Framingham Risk Score (FRS) did not lead to improvement in its
  predictive power»
  [@liu2022tyg].
  A marker can predict in isolation yet carry no *incremental* decision value once the standard factors
  are in hand — a distinct failure from CRP (whose incremental prediction survives even as its causation
  falls).
- **Causation disclaimed, target-status denied.** All 12 studies are observational — «causation cannot
  be proven»
  [@liu2022tyg] —
  and Liu's strongest claim is that TyG «may be considered an independent predictor for CVD incidence»
  [@liu2022tyg],
  never a target. Like CRP, it sits downstream of the causal atherogenic state (apoB-bearing
  dyslipidemia), so it flags the stratum rather than naming the lever ->
  [[LDL ApoB and Cumulative Exposure]]. Full node:
  [[Insulin Resistance Surrogates and Cardiovascular Risk]].
[inferred from @liu2022tyg]

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
[@who2023saturated]

Two things worth carrying:

- The marker was granted almost every credential a surrogate can have — well-established biomarker, widely held
  to be causal — and **still** produced a weaker recommendation. Surrogate status is not cancelled by
  a plausible mechanism.
- **WHO explicitly declined the indirectness downgrade — and that is a live tension.** It records LDL
  as a *critical* outcome and states it *"was not downgraded for indirectness when determining the
  certainty in the evidence within the GRADE framework"*. The surrogate discount was taken at the
  **strength** step instead.
  [@who2023saturated]
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
    disease"* — which is true of it at the certainty step as well. WHO invokes this
    consideration only at the strength step and does not explain why the same fact weakens strength
    yet not certainty.
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
[@who2023saturated]

**The disciplined reading, and the trap beside it.** The useful habit is to *ask which outcome carried a
headline certainty label*. The trap is to answer that question from the profile alone: WHO states
elsewhere that its overall certainty *"was based on disease and mortality outcomes"*, and draws its
moderate rating for the PUFA replacement from an RCT subgroup analysis (Hooper) that sits outside this
profile. A first attempt at this page's neighbourhood asserted the surrogate had silently carried the
roll-up; **a blind critique falsified it against that sentence, and the claim is withdrawn.** What
survives is the observation above and the habit -- not an allegation.
[@who2023saturated]

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

**The hard-endpoint companion — preDIVA chose the outcome and got a null `[2026-08-07]`.** The sharpest
version of the discipline is a trial that *deliberately declined the surrogate*. preDIVA (Moll van Charante
2016), a 6.7-yr multidomain vascular-care RCT (n=3526), measured clinical **dementia incidence** directly
and found nothing (HR 0.92, 95% CI 0.71-1.19). Its authors state the choice explicitly: «rather than
exploring effects on surrogate endpoints, we chose a clinical diagnosis of dementia as the outcome to draw
conclusions on prevention of dementia with unequivocal clinical relevance» — accepting a higher type-II-error
risk to buy an unambiguous endpoint. [@mollvancharante2016] So within one cluster (multidomain dementia prevention) the field shows both halves of the
surrogate gap side by side: the **surrogate moved** (FINGER cognitive composite, 2 yr) and, on a thinner
intervention in a lower-risk group, the **hard outcome showed no reduction** (preDIVA dementia incidence,
6.7 yr). The two are **not the same quantity** (different endpoint, intervention, population, duration — a
distinction, not a contradiction -> [[Multidomain Lifestyle Intervention and Cognitive Decline]]). **Note
what preDIVA does and does not do here:** it is *not* FINGER's own outcome trial (different intervention,
no cognitive training; different population), so it cannot test whether FINGER's cognitive-composite
*transmits* to dementia — FINGER's own extended follow-up is that test. What it illustrates is the general
discipline: a positive surrogate does not carry the outcome, and a separate, differently-designed outcome
trial in the same cluster read differently. [inferred from @mollvancharante2016; @ngandu2015]

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

[@who2023saturated]

**The best-known quantity is the one nobody cares about directly**, and the outcomes a person would
actually choose on are known least well. **This is not a defect in WHO's grading** — it reflects that
a lipid response can be randomised, measured in weeks, in small samples, while an event outcome cannot.
**The certainty gradient tracks measurability, not importance.**

**And it is now measured twice, on two exposures, in two guidelines.**
[[Sodium Intake and Blood Pressure]] has the identical shape: **High** certainty on blood pressure,
**very low** on hard outcomes. **Two independent exposures showing the same inversion is the beginning
of a general claim about this literature** — that wherever a nutrient acts through a measurable
intermediate, the intermediate will be better graded than the endpoint, **by construction
wherever it holds**, because the designs that grade well are the ones the intermediate admits.
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
*close* to the endpoint — rate down only **one** level [@grade]. Testosterone
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

**A refinement worth carrying — a *demoted* surrogate can still independently predict the hard outcome.**
The demotion above is easy to over-read as *mass is a worthless marker*. de Santana's SR-MA finds low
appendicular muscle **mass** still predicts all-cause mortality «cannot be completely explained by
differences in muscle strength» (ASMI SMD −0.18, 95% CI −0.23 to −0.12)
[@santana2021]. So the marker EWGSOP2 pushed to a
confirmatory role is not merely a proxy for the closer-to-outcome measure (strength) — it carries
*independent* prognostic signal. **The surrogate lesson is sharper for it:** a marker demoted for being
a worse/noisier predictor is still a **predictor**, not a validated **target** — de Santana is
observational, and no RCT shows raising muscle mass reduces mortality. Predictor, not target: the same
line this page holds for every moved marker -> [[Low Muscle Mass and Mortality]].

## A within-study surrogate ladder — mass moved, strength did not (leucine in the elderly) `[2026-08-19, Komar]`

The muscle cases above are *prognostic* markers (mass, strength as predictors). Komar 2015 is the
*interventional* version on the same tissue, and it lays the surrogate ladder bare within one gold
SR+MA (16 RCTs, 999 elderly, chronic leucine-rich protein 2-7.8 g/d). The rationale chain is acute
muscle-protein-synthesis -> lean mass -> strength/function; Komar tests how far up the chain a chronic
supplement actually reaches:

- **The mass surrogate moved** — lean body mass +0.99 kg [95% CI 0.43, 1.55; p=0.0005] (confined to the
  sarcopenic subgroup, +1.14 kg; null in healthy elderly).
- **The closer-to-patient outcome did not** — «neither hand grip strength nor knee extension strength
  were affected by leucine supplementation in a fashion significantly different from control
  interventions» (grip WMD +0.23 [-0.26, 0.73], p=0.36, I2=65%; knee +0.07 Nm/kg [-0.26, 0.40], p=0.68)
  [@komar2015].

So the intervention transmitted to the *mass* surrogate but not to the *strength* endpoint one step
closer to what a person values — a within-study instance of a marker moving while the outcome it stands
in for does not. **Bound it (symmetric standards):** the strength arm is under-powered, not a clean null
— Komar attributes it to «a small number of trials potentially insufficient to yield significant
results», and broader-inclusion SRs did find grip gains, so strength sits at *insufficient evidence*
rather than confident *no effect* (the grip I2=65% is a disperse null)
[@komar2015]. Even the mass gain cannot isolate leucine
from co-ingested protein/energy. The upstream acute-MPS mechanism is [[Anabolic Resistance]]; the
mass->mortality prognostic link is [[Low Muscle Mass and Mortality]]; the intake target is
[[Protein Intake for Older Adults]].
[inferred from @komar2015]

## The inverse use — a surrogate NULL that rebuts a HARM mechanism `[2026-08-04, Johnson LA-inflammation]`

Every case above uses a surrogate to argue *for* something (a benefit, a target) or asks whether a body
should *credit* a moved marker. Johnson 2012 is the mirror: a surrogate deployed to argue *harm* —
the seed-oil thesis that dietary linoleic acid (LA) drives disease *via inflammation*, with inflammatory
markers (CRP, IL-6, TNF-alpha) as the surrogate for the pathway. A systematic review of RCTs finds
feeding LA does **not** raise those markers: *«virtually no evidence is available from randomized,
controlled intervention studies among healthy, noninfant human beings to show that addition of LA to the
diet increases the concentration of inflammatory markers»*
[@johnson2012].

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

## A body grades DISEASE certainty off surrogates — and its own incidence grades sit higher `[2026-08-06, EFSA sugars]`

EFSA 2022 assigns *causal-relationship certainty* to chronic-disease outcomes for added/free sugars —
«moderate for obesity and dyslipidaemia (> 50-75% probability), low for NAFLD/NASH and T2DM
(> 15-50% probability) and very low for hypertension (0-15% probability)» — but names the endpoints the
RCTs actually measured: «based on data from RCTs which investigated the effect of 'high' vs. 'low' sugar
intake on **surrogate disease endpoints, i.e. body weight, liver fat, fasting glucose, fasting
triglycerides and SBP**.» [@efsasugars2022] So the certainty in the *disease* relationship is transmitted through a
surrogate — EFSA is transparent about the step, exactly this page's discipline.

**The within-source contrast is the sharp part.** In the *same* opinion, EFSA grades **SSBs** «high for
obesity, T2DM, HTN and CVD (> 75-100% probability)» — and those come from prospective cohorts on actual
disease *incidence*, not surrogates. [@efsasugars2022] So inside one document, the incidence-graded exposure (SSBs)
outscores the surrogate-graded one (added/free sugars %E) on the same diseases. That is the certainty-
follows-measurability gradient (above) seen *within a single body's own assessment*, not just across two
guidelines — and it is not fully clean, because SSBs are also the additive-energy vehicle, so design and
exposure both differ; recorded as a corroborating instance of the gradient, not an independent
controlled contrast. **NON-independent within the source; a third distinct body (after WHO and
USPSTF) transparently grading disease certainty off surrogates** — corroborates the rule, no
`[E-independent]` claimed. -> [[Free Sugars Intake]]
[inferred from @efsasugars2022]

## The archetypal DISCONNECT — the surrogate moved, the outcome did not (Ramsden MCE) `[2026-08-04]`

The prior cases argue a surrogate *up* or *down*, or catch one *inverting*. Ramsden's recovered
**Minnesota Coronary Experiment** is the cleanest *disconnect* the corpus holds, and it is unusually
strong because it is a **double-blind RCT**, not an observational comparison. Replacing saturated fat with
corn-oil linoleic acid **lowered serum cholesterol -13.8% vs -1.0% control (P<0.001)** — a large, dose-
related move in the intended direction — yet «Kaplan Meier graphs showed no mortality benefit for the
intervention group in the full randomized cohort or for any prespecified subgroup», and the 5-trial
meta-analysis found «no evidence of benefit on mortality from coronary heart disease (1.13, 0.83 to 1.54)
or all cause mortality (1.07, 0.90 to 1.27).»
[@ramsden2016] Ramsden's summary:
LA replacement «effectively lowers serum cholesterol but does not support the hypothesis that this
translates to a lower risk of death.» [@ramsden2016]

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
[@ramsden2016]
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
[@ramsden2013]
So SDHS is not just a marker that failed to
transmit (MCE) but a marker that moved the "right" way while the endpoint moved the *opposite* way — a
sharper grade of surrogate invalidation than MCE's null (an adverse divergence, not merely an absent
benefit). **The same discipline it teaches, and the same caveat:** the disconnect (surrogate-vs-outcome divergence) is demonstrated, but reading it as
*LA-causes-death* is over-reading a small single-blind high-dose secondary-prevention trial that pools to
non-significance -> [[Linoleic Acid and Cardiovascular Disease]] (*The Sydney secondary-prevention arm*).
The surrogate lesson survives the appraisal even where the harm claim does not: a dietary agent lowering
cholesterol is **not** thereby shown to lower death.
[inferred from @ramsden2013]

## A disease DIAGNOSIS as the surrogate — diabetes prevention did not transmit to CV events (DPPOS) `[2026-08-20]`

The Ramsden cases are *lab-marker* surrogates (serum cholesterol). DPPOS moves the disconnect one rung
**up** the ladder: the endpoint standing in for hard outcomes is a whole **disease diagnosis** — incident
type-2 diabetes — which the Diabetes Prevention Program's lifestyle and metformin arms durably prevented
(58% / 31% relative reduction, sustained \~15 years -> [[Lifestyle vs Metformin for Diabetes Prevention]]).
Over a **21-year** median follow-up, DPPOS asked whether preventing the diagnosis reduced hard
cardiovascular events. It did not: «Neither metformin nor lifestyle reduced major cardiovascular events in
DPPOS over 21 years despite long-term prevention of diabetes» — metformin vs placebo HR 1.03 (95% CI,
0.78–1.37; P=0.81), lifestyle vs placebo HR 1.14 (95% CI, 0.87–1.50; P=0.34), both null and both trending
the *wrong* way for lifestyle, with «No effect of either intervention ... on the extended cardiovascular
outcome» either.
[@goldberg2022]

**Why this grade of disconnect earns its place beside the lab-marker cases.** A disease diagnosis is a
*better* surrogate than a serum marker — it is nearer the patient-important endpoint (diabetes is itself
morbidity, and DPP named CVD as «the leading cause of death among patients with type 2 diabetes»). That a
surrogate this good still failed to transmit over two decades is the lesson: **proximity to the outcome
does not guarantee transmission** — a diagnosis-level surrogate can disconnect exactly as a lab marker can.
[inferred from @goldberg2022]

**But this null is BOUNDED — weaker-graded than the clean MCE disconnect.** MCE's null was double-blind
with no comparable dilution; DPPOS's is confounded three ways the authors name: «Provision of group
lifestyle intervention to all, extensive out-of-study use of statin and antihypertensive agents, and
reduction in the use of study metformin together with out-of-study metformin use over time may have diluted
the effects», in what was «a relatively low-risk cohort from the standpoint of the prevention of CVD»
(statins 56–62%, antihypertensives 68–74%, mild hyperglycemia at 21y).
[@goldberg2022] A longer 30-year Da Qing follow-up in a
*higher-risk* cohort *did* show a lifestyle MACE benefit (HR 0.74 [0.59–0.92]). So DPPOS does **not**
establish "diabetes prevention has no CV benefit"; it establishes that the diagnosis->events link is **not
automatic** and is undetectable in a low-risk stratum over 21 years — a transmission that may be
present-but-undetectable rather than absent, the baseline-risk reading worked on
[[Baseline Risk and the Relative-Absolute Split]]. Banked as a disconnect instance carrying its own dilution
caveat, not a clean randomized null.
[inferred from @goldberg2022]

## A TREATMENT's symptom/severity target as the surrogate — CPAP fixes the apnea, not the heart `[2026-08-21, Yu]`

All the cases above are *measured markers* standing in for outcomes. This one moves the disconnect onto
the **treatment target itself**: positive airway pressure (PAP/CPAP) is prescribed to abolish the apnea
and relieve daytime sleepiness, and it does — pooled Epworth sleepiness improved -1.92 (95% CI -2.79 to
-1.06) with QoL, anxiety and depression gains — yet across 10 RCTs (N=7266) it did **not** reduce major
adverse cardiovascular events (RR 0.77 [0.53-1.13]), CV death (1.15 [0.88-1.50]), or all-cause death
(1.13 [0.99-1.29]). Crucially the *cardiovascular* intermediate markers were null too: no effect on blood
pressure, BMI, lipids, or glycemia -> [[Sleep Apnea Treatment and Cardiovascular Risk]].
[@yu2017cpap]

**Why it earns its place — the surrogate underwrote the outcome expectation.** Prior reports that PAP
gave «modest decreases in blood pressure» plus its «apparent beneficial effectsofPAPonintermediatebio-
markers» were, in Yu's account, the rationale for *expecting* a hard-outcome benefit, and PAP already
sits in guidance for a CV indication (2014 AHA/ASA: consider PAP for ischemic stroke/TIA). The RCTs then
found the BP surrogate itself null — so «The absence of any significant association of PAP with
intermediate markers of vascular risk ... may explain the null associations of PAP with hard vascular
outcomes.»
[@yu2017cpap]
The symptom benefit is real and patient-important on its own; it simply is not evidence for the CV
outcome the surrogate was recruited to predict — the guidance-null form of this diagnostic
-> [[Which Objective Moved This Recommendation]].
[inferred from @yu2017cpap]

## When the surrogate IS the disease definition — treating-to-target normalizes TSH, moves nothing (Feller) `[2026-08-30]`

The CPAP case above hit its symptomatic target but not the heart; the Feller thyroid case is one turn
sharper, and it lands the surrogate discipline on a **standing drug for a common diagnosis**.
Subclinical hypothyroidism is *defined* by the marker — mildly elevated thyrotropin (TSH) with normal
free T4 — so levothyroxine is prescribed to normalize that number. Feller's gold SR+MA (21 RCTs, 2192
nonpregnant adults) shows the drug does exactly that at the surrogate and nothing at the person:
treated-arm TSH fell into range (0.5-3.7 mIU/L) while placebo stayed elevated (4.6-14.7 mIU/L),
«indicating that treatment was associated with nor- malization of thyrotropin levels»
[@feller2018thyroid] — yet «thyroid hormone
therapy ... was not associated with benefit regarding general quality of life (n = 796; SMD, −0.11;
95% CI, −0.25 to 0.03) or thyroid-related symptoms (n = 858; SMD, 0.01; 95% CI, −0.12 to 0.14) ... the
quality of evidence assessed with the GRADE tool was judged moderate to high.»
[@feller2018thyroid]

**Why this instance is distinct on the page.** In most cases above the surrogate is *measured
alongside* the outcome; here the surrogate is the **diagnostic criterion itself**, so treating-to-target
is guaranteed to move it — the marker cannot fail to respond, which makes its non-transmission to any
patient-important outcome (QoL, symptoms, mood, cognition, BP, BMI — all null, several at GRADE
**high**) a structurally clean dissociation: the drug did what it targets and the person did not change.
And unlike CPAP, even the **symptoms themselves** did not improve, so there is no residual patient-facing
benefit to hold onto. This drives a de-escalation: the standing prescription for the modal SCH adult
treats a definitional number, not the person
-> [[Levothyroxine for Subclinical Hypothyroidism]]. **Bounded** to the studied stratum (mildly
elevated TSH, age ≤\~74, mild-to-moderate symptoms): the null may not transport to TSH >10 mIU/L or to
a high-symptom-burden subgroup, which the trials could not test.
[inferred from @feller2018thyroid]

## The surrogate's DIRECTION flips with the comparator — e-cig haemodynamics `[2026-08-30, Skotsimara]`

Most instances above ask *does the moved marker transmit to the outcome?* The e-cigarette CV case adds a
prior question: **the same surrogate moves in opposite directions depending on the comparator**, so a
bare «e-cig moves BP» carries no decision until the comparator is named. Skotsimara's SR+MA (14 studies,
N=441, moderate quality) finds e-cig use raises HR/SBP/DBP **acutely vs baseline** (HR +2.27 bpm, 95% CI
1.64 to 2.89; SBP +2.02; DBP +2.01) yet **lowers** SBP/DBP when a smoker **switches from combustible
tobacco** (SBP -7.00 mmHg, -9.63 to -4.37) [@skotsimara2019ecig]. Neither figure is a hard outcome: the only CV-event datum is a single
observational MI association the authors flag as «sensitive to non-random misclassiﬁcation bias», and
«there is no epidemiological data on the risk for stroke or heart failure incidence»
[@skotsimara2019ecig].

**Why this instance is distinct.** Elsewhere the failure is a marker that moves but does not transmit;
here the marker's very *sign* is comparator-dependent, so the surrogate cannot even be read as
directionally harmful or beneficial without fixing the counterfactual (clean air vs continued smoking).
The cell stays at **insufficient hard-outcome evidence** either way -> [[The Insufficient-Evidence Statement]], and the decision lives in the stratum split, not the marker
-> [[Electronic Cigarettes and Cardiovascular Risk]]. [inferred from @skotsimara2019ecig]

## A PREVALENCE statistic read as harm — biochemical B12 deficiency without symptoms (Pawlak) `[2026-09-02]`

A different failure mode: not a marker that fails to transmit over time, but a **prevalence** figure
(*X% of vegetarians are B12 deficient*) silently read as *X% harmed*. The source that reports the high
prevalence supplies the correction in its own voice — in the one study that checked, «none of the
vegetarians included in their study had clinical symptoms despite the fact that about two-thirds of the
sample had B12 depletion or deﬁciency, as indicated by both low holo-TCII and elevated MMA»
[@pawlak2013]. So a biochemical
depletion/deficiency rate is a **surrogate**, not a patient-important-outcome rate, and the
marker-to-outcome chain in this stratum is **insufficiently evidenced**, not demonstrated.

**Both sides, because the source states both.** Pawlak immediately guards the *other* direction — the
biochemical marker must not be dismissed as harmless either: «one has to be careful with concluding that
biochemical indicators of B12 deﬁ- ciency in vegetarians are not associated with any adverse symptoms»
[@pawlak2013] (mild symptoms under-detected;
hematological signs maskable by concurrent iron/folate; enzyme function impaired at the biochemical
stage). The instance is therefore a clean *insufficient-evidence* holding on transmission — the marker
neither proven to harm nor proven benign -> [[Vitamin B12 Status in Vegetarian and Vegan Diets]].
[inferred from @pawlak2013]

## References

---
type: diagnostic
question: How much can measurement error in diet studies hide a real effect, or manufacture a false one?
aliases: [Measurement Error, Attenuation, Regression Dilution, De-attenuation, Regression Calibration, Validation Study, Differential Misclassification]
authors: [Willett, Walter; World Health Organization (org); Baudry, Julia; Kesse-Guyot, Emmanuelle]
sources: [Willett - Nutritional Epidemiology 3e, SACN - Carbohydrates and Health 2015, Te Morenga - Dietary Sugars and Body Weight 2013, WHO - Physical Activity Web Annex Evidence Profiles 2020, Baudry - Organic Food Consumption Cancer NutriNet 2018]
cluster: nutrition-methods
confidence: medium
self_critiqued: 2026-07-27
relationships:
  related_to:
    - Energy Adjustment and What a Diet Coefficient Means
    - Rating Certainty of Evidence
    - Upgrading Observational Evidence
    - Physical Activity Dose and Mortality
created: 2026-07-25
updated: 2026-07-29
---

## Why it matters

Diet is measured indirectly, by asking people. The resulting error is large enough to be the dominant
consideration in reading almost any observational nutrition finding — and it does **not** push in one
direction, which is what makes it hard to reason about.

## The taxonomy that governs everything else

Error is random or systematic, within-person or between-person. The consequential split:

- **Non-differential** (unrelated to disease status) — biases relative risks **toward 1**, but the
  source scopes this: *"toward the null value of one **in univariate models without confounding**"*.
  With imperfectly measured covariates in the model the bias can run **in any direction**, so
  *the true effect is at least as large as observed* holds only in the unconfounded case.
- **Differential** (differs between cases and non-cases) — "**Systematic differences in measurement
  error between these two groups... have serious consequences that are usually not amenable to
  correction.** This... is the reason that typical case-control studies are treacherous."
  [@willett, Ch 12, Types of Errors]

Also: systematic errors affecting *everyone equally* do not bias measures of association at all.

## How much attenuation — the quantitative anchor

With validity γ (the regression of true on measured intake), observed RR ≈ true RR^γ. Willett's
Table 12-3:

| true RR | γ=0.3 | γ=0.5 | γ=0.7 |
|---|---|---|---|
| 1.5 | 1.13 | 1.22 | 1.33 |
| 2.0 | 1.23 | 1.41 | 1.62 |
| 3.0 | 1.39 | 1.73 | 2.16 |

**Verified against the rendered page (2026-07-26): all nine cells correct.** The full table runs
gamma 0.2-1.0 against true RR 1.5/2.0/3.0/**5.0**; the subset above is faithful. Two things the subset
loses: at gamma=0.2 a true RR of 5.0 still observes as only **1.38**, and Willett notes **gamma can
exceed 1.0** -- "this can also result simply from a change in units" -- so it is not a bounded validity
score. [@willett, Table 12-3 + following paragraph]

His read: "There is no obvious threshold of γ below which a measure of exposure is useless; however,
for true relative risks of 1.5 or 2.0, epidemiologic effects are difficult to detect if γ is
substantially less than 0.5." **And the sentence immediately after bounds any use of γ as a
credibility threshold:** *"It will be apparent that the value of γ does not readily provide a
generally interpretable measure of validity."* γ is scale-dependent, so *is γ reported?* is a
disclosure test, not a pass/fail bar.
[@willett, Ch 12, Correction of Relative Risks]

**This is the bridge to any credibility threshold.** A true RR of 2.0 measured at γ=0.3 shows up as
1.23. So a rule that dismisses observed relative risks below \~1.2 as within confounding range will
also dismiss genuinely large effects that dietary measurement has flattened. Both readings are
available for the same number, and only a validation study distinguishes them.

Other magnitudes: a true OR of 2.67 observes as **1.71** at sensitivity 0.6 / specificity 0.9; energy
under-reporting against doubly-labelled water runs **10-30%**, worse in women and people with obesity;
energy adjustment raised FFQ-vs-recall correlations from 0.30-0.57 up to 0.61-0.66 across four ethnic
subgroups of men in the Multi-Ethnic Cohort.

## Tests / indicators

- **Was there a validation study, and is γ reported?** Without it, attenuation cannot be bounded and
  a null is uninterpretable.
- **Which direction could the error run?** Non-differential → the true effect is *at least* as large
  as observed. Differential → the finding may be an artifact and no correction will fix it.
- **Was energy handled?** Failing to measure total energy can hide a real effect entirely: a
  saturated-fat/CHD study could find "an inverse or no association... even if high saturated fat
  composition of the diet truly caused coronary disease."
  [@willett, Ch 11, Summary]
- **Was correction applied to confounders too?** Error in covariates "can distort relative risk
  estimates in any direction" — and in Willett's Framingham example, correcting covariate error made
  an apparently significant BMI-CHD association *non*-significant.

## The asymmetry worth internalising

Correcting for measurement error **cannot manufacture an effect from a null, but can substantially
strengthen a real one.** In Willett's worked table, an observed RR of 1.00 corrects to 1.00 with only
a wider interval; an observed 1.50 corrects to 2.38.
[@willett, Ch 12, Table 12-2]

So **measurement error explains this null** and **measurement error explains this positive finding**
are **not symmetric claims**. The first is often plausible; the second requires differential error,
which is a much stronger and more specific allegation.

## Red flags

- A null reported without any validation data or attenuation discussion.
- Correction methods applied on the assumption of purely random within-person error — Willett says
  this "is unlikely to be true for dietary questionnaires."
- A "gold standard" sharing an error source with the test method (e.g. the same food-composition
  database), which biases the correction itself — though Willett's own verdict is that *"moderate
  correlations in these errors do not appear to result in serious bias if they are ignored"* under
  regression calibration. Worth checking, not disqualifying.
- Calibration that smuggles in a covariate: in one published case, "calibrated energy intake"
  predicted cancer risk, but the associations "were entirely accounted for by BMI" — the calibration
  had contributed nothing.

## Willett's counter to the strong sceptical reading

He rejects using energy under-reporting to discredit diet studies generally: total energy "is rarely
of direct interest", the analytic goal is usually to *remove* energy variation, and under-reporting
appears roughly composition-neutral — several studies found no relation between under-reporting and
energy-adjusted macronutrient shares. "Moreover, systematic biases do not hinder the capacity to find
important associations."
[@willett, Ch 11, Implications for Food-Frequency Questionnaire Data]

Recorded as his position, not as settled: this is the field's founder defending the field's core
instrument, and the corpus holds no independent appraisal of the claim yet. `AWAITS` a source not
authored by a principal of the method.

## Limits

- "Each method requires assumptions that are rarely perfectly satisfied." **His conclusion from that
  is not to abstain:** *"Despite these limitations, careful use of these adjustment procedures will
  provide better estimates... than analyses that ignore the effects of measurement error altogether."*
  [@willett, Ch 12, Summary]
- **The corrected-value (regression-calibration) method** does nothing for rank-based analyses:
  relative risks by quintile *"are not affected **by this method** because the relative rankings of
  individuals are unchanged"*. Not a limit on correction generally — Willett points to a separate
  method for ordinal categories (Rosner et al. 1989), which this page does not hold.
- Residual bias toward the null persists even after logistic correction, though Willett judges it
  "small and unimportant" only "with small or modest relative risks (less than about five) **and a
  moderate degree of measurement error**" — a condition that matters on a page arguing dietary error
  is large.

## The cross-domain contrast — and what the parameter table refuses to let us claim

`[2026-07-27, WHO PA Evidence Profiles ingest]` The wiki now holds a domain where exposure is
**device-measured**, which makes a comparison possible that was not available before. **The
comparison was run as a parameter table first, per the blocking rule, and the table cut the claim
down substantially.**

| Parameter | Nutrition corpus | WHO PA 2020 | Same quantity? |
|---|---|---|---|
| **Exposure** | self-reported dietary intake (FFQ / recall) | accelerometer counts, min/day by intensity | **NO — different exposure entirely** |
| **Outcome** | CVD / T2D / colorectal cancer incidence (SACN); body weight (Te Morenga) | all-cause mortality | **NO — different outcomes** |
| **Reported curve shape** | *"as more dietary fibre was consumed a greater reduction in risk was observed"* — monotone, no knee (SACN); not estimable at all (Te Morenga, P=0.392) | *«A non-linear, dose-response association... (p<0.02)»*; maxima named | **YES — both are the shape of the reported curve** |
| **Certainty on the shape** | not stated; dose-response often not computed | **HIGH** | **YES — both GRADE-family certainty on the shape** |
| **Validation against an objective standard** | a doubly-labelled-water sub-study (see the quoted span below the table) | none needed — the device *is* the measurement | **NO — asymmetric by construction** |

The validation row, quoted in full because the truncated form drops the comparator that makes it
mean anything:

> «A doubly-labelled water sub-study carried out as part of the NDNS rolling programme (Bates et al.,
> 2014) found that reported energy intake in adults aged 16-64 years was, on average, 34% lower than
> total energy expenditure (TEE) measured by doubly labelled water.»
> [@sacn2015]

**What the table permits.** Only the two `YES` rows are comparable, and they are properties of the
*estimate*, not of the biology: **where exposure was device-measured, this corpus's one instance
recovered a non-linear shape at HIGH certainty; where exposure was self-reported, the shapes are
monotone or not estimable.**

**What the table forbids, and this is the part that would have been written otherwise.** The tempting
claim — *measurement error explains why nutrition curves flatten* — **is not supported by this
comparison**, because the two domains differ in exposure, outcome, biology, range of variation and
confounding structure all at once. The measurement difference is **confounded with everything else
that distinguishes the domains.** One device-measured domain and one self-reported domain is n=1 per
arm.

**What survives is a mechanism with independent support, not an inference from the contrast.** The
attenuation claim stands on its own footing — the DLW validation substudy, and Te Morenga's *own*
attribution of its failed dose-response to *"a considerable degree of measurement error even when
using validated methods"*. The PA contrast is **consistent with** that mechanism and **does not
evidence** it.
``

**Consequence for the telos.** The `every reduction pays` default was induced from four
self-reported-exposure sources. It should be **scoped to that condition** rather than asserted as a
general property of decision-relevant curves — knees exist in this corpus, they are simply not in the
half of it that is measured by asking people.
`[REVIEW: re-scope the falsified knees prior in CLAUDE.md to name the measurement condition — owning
op is a telos review, not this weave]`
`-> [[Physical Activity Dose and Mortality]]`

### Self-critique of the section above `[2026-07-27]`

Run because this page went from one source to four in a single edit, and the added material makes a
cross-domain comparison — the laundering surface the gate exists for.

- **Over-claim?** The tempting causal reading (*measurement error explains the flat nutrition curves*)
  is stated **and declined** in the text, with the confound named. The surviving claim is restricted to
  the two `YES` rows. **Held.**
- **Laundered independence?** No type-E is claimed. WHO PA, SACN and Te Morenga are not presented as
  independent routes to one conclusion — they are matched on two comparable parameters and explicitly
  *not* matched on three. **No E-token, correctly.**
- **`sources:` padding?** Each of the three added sources contributes a distinct quoted value to the
  table (SACN: the DLW figure and the fibre gradient; Te Morenga: the failed dose-response and its
  stated cause; WHO PA: the non-linear shape and its certainty). **Dual test passes.**
- **The residual risk, stated rather than resolved:** the comparison is n=1 per arm. A second
  device-measured domain, or a self-reported domain that *does* show a knee, would move it either
  way. `AWAITS` either.

## Two fibre measures that are not interchangeable `[2026-07-27, SACN chunks 08/10]`

SACN reports fibre in **two incompatible units in the same report**, and mixing them silently
overstates any shortfall:

| Measure | What it counts | SACN's use |
|---|---|---|
| **AOAC fibre** (methods 985.29 / 991.43) | the broader analytic definition | the **30 g/day** dietary reference value |
| **NSP** (non-starch polysaccharide) | a narrower fraction | the intake tables (Table 3.12: \~11-15 g/day by age and sex) |

**The trap, recorded because the wiki nearly fell into it:** reading the NSP intake figure against the
AOAC target would show a much larger gap than exists. SACN gives the correct like-for-like comparison
itself — *«current mean intakes would be 10-11g below the dietary reference value for men and 13g below
for women»* — stated in AOAC terms.
[@sacn2015]

**This is a measurement-definition error rather than a measurement-precision one**, and it is the
cheaper of the two to make: no instrument noise is involved, only two names for different quantities.
The parameter-table discipline exists for exactly this — the *"same quantity?"* column returns **no**.
`-> [[Whole Grains Refined Grains and Pulses]]`

## The variance structure underneath it all — and what it does to an SD-scaled increment `[2026-07-28, Willett ch.3]`

This page holds measurement error as the constraint that binds hardest in this domain. Willett's
chapter 3 supplies the **structure** producing it, and one consequence the corpus has been quoting numbers against without
holding.

**The mechanism is within-person day-to-day variation, and it is large.** Willett's own summary — note
the qualifier, which is his and matters:

> «The daily variation in nutrient intake among free-living subjects has consistently been found to be
> large, although the degree of variation differs greatly according to nutrient. The ratio of
> within-person to between-person variation is usually substantially greater when the nutrient is
> expressed in relation to energy intake (energy-adjusted). Measurements of dietary intake based on a
> single or small number of 24-hour recalls per subject can provide an accurate estimate of the mean
> for a group, but the standard deviation will be greatly overestimated.»
> [@willett, abstract]

**Read the two halves separately, because they fail in opposite directions.** A few-day assessment
gets the **group mean** approximately right and the **spread** badly wrong — inflated, because the
highest-measured people caught a high day and the lowest caught a low one. **Bias in the mean and bias
in the SD are different defects with different consequences**, and a method can be fine for one and
useless for the other.

**Willett's worked demonstration** (194 Boston-area women, 28 days of records each): the 90th-to-10th
percentile ratio for total fat fell from **3.0** (1 day) to **2.2** (1 week) to **1.9** (4 weeks); for
vitamin A from **6.4** to **3.0** to **2.5**. The single-day distribution is roughly *half again* as
wide as the four-week one.
[@willett]

**And he names the real-world casualty:**

> «National nutrition surveys have traditionally employed only a single 24-hour recall per subject;
> thus, many major reports of the distributions of dietary intake are extremely misleading.»
> [@willett]

### The consequence for a per-SD increment — this is the decision-relevant part

**An effect expressed *per standard deviation of intake* inherits whatever inflated the SD.** If the SD
comes from few-day assessment it is too wide, so *"one SD"* is a **larger** exposure contrast than the
label implies, and the relative risk attached to it describes a bigger change than the reader thinks.

**This lands directly on a form the corpus holds.** [@sacn2015]
standardises its cohort increments to «one standard deviation of intake» (50 g/day total sugars,
20 g/day individual sugars), and [[Baseline Risk and the Relative-Absolute Split]] records that a
per-SD relative risk does not transport without its population's SD. **Willett adds the prior
problem: the SD may not be right for its own population either.**

``

**Stated as a conditional, because the wiki has not established SACN's assessment method:** *if* the
SD behind an increment was estimated from a small number of days per subject, that increment is
inflated. **`AWAITS` a targeted read of SACN's dietary-assessment methods** — the question is how many
days per subject the contributing cohorts used, and it is answerable from the report.
**Do not treat the inflation as established for SACN specifically; the mechanism is established, the
application is not.**

### Table 3-6 — and a precision correction to Willett's own summary

Within- and between-person coefficients of variation, 194 women, unadjusted and calorie-adjusted:

| Nutrient | Within (unadj) | Between (unadj) | **Ratio** | Within (adj) | Between (adj) | **Ratio** |
|---|---|---|---|---|---|---|
| Energy (kcal) | 27.0 | 19.3 | **1.40** | — | — | — |
| Protein | 32.9 | 16.4 | **2.01** | 25.0 | 14.0 | **1.79** |
| Total fat | 38.4 | 22.6 | **1.70** | 27.3 | 14.1 | **1.94** |
| Monounsaturated fat | 42.5 | 23.6 | **1.80** | 27.8 | 13.1 | **2.12** |
| Polyunsaturated fat | 64.2 | 28.3 | **2.27** | 47.3 | 20.2 | **2.34** |
| Cholesterol | 62.2 | 23.8 | **2.61** | 61.5 | 24.1 | **2.55** |
| Carbohydrate | 29.9 | 26.5 | **1.13** | 18.7 | 13.5 | **1.39** |

[@willett, Table 3-6 — CVs are Willett's; the ratio
column is computed here]

**Willett says the ratio is *usually* substantially greater when energy-adjusted. On his own table it
rises for four of six nutrients and FALLS for protein (2.01 -> 1.79) and cholesterol (2.61 -> 2.55).**
*Usually* is the right word and the direction is not universal — worth stating, because a reader who
takes it as a rule will mis-predict for exactly the two nutrients where it reverses.

**Why the ratio is the quantity that matters:** it sets how many days of measurement are needed.
Willett gives the formula (Beaton) `n = (Z_alpha x CV_w / D)^2`, and works it: estimating one person's
**cholesterol** intake to within 20% of their true mean, 95% of the time, at CV_w = 62%, needs
**about 37 days of records**. **That is the scale of the problem** — and it is why a single 24-hour
recall cannot support an individual-level exposure claim, however large the study.
[@willett]

## Differential error, quantified — the underreporting gradient runs with adiposity `[2026-07-28, Willett ch.4]`

This page holds the non-differential/differential split as a distinction. **Chapter 4 supplies the
worked case, with numbers, and it is the one that matters most for the diet-obesity literature.**

> «Estimating energy expenditure using doubly-labeled water, the AMPM method of conducting 24-hour
> recalls, resulted in zero, 14%, and 20% underreporting of energy intake among lean, overweight, and
> obese men, respectively (Moshfegh et al., 2008). Among women, the same percentages were 6%, 15%, and
> 21% underreporting of energy intake»
> [@willett]

And at the extreme, from food records:

> «The extent of underreporting of total energy intake varied among individuals. Obese individuals
> tended to underreport as much as 47% (Lichtman et al., 1992) and 53% (Lansky and Brownell, 1982),
> substantially more than lean individuals ...»
> [@willett, — the sentence continues into a
> citation list only; elision marked]

**Why this is the dangerous kind of error and not just noise.** Non-differential error attenuates
toward the null — it makes a real effect look smaller. **Error that varies with adiposity is
differential with respect to a variable that is simultaneously an outcome, an exposure proxy and a
confounder in most of this literature.** It can therefore create, erase or reverse an association
rather than merely shrink it. A measured association between any reported intake and obesity is partly
a measurement artifact of exactly the size shown above, and **the direction is not predictable from
first principles.**
``

**Consistency check against what the wiki already holds, and the full SACN sentence adds a stratum
the corpus had been dropping:**

> «A doubly-labelled water sub-study carried out as part of the NDNS rolling programme (Bates et al.,
> 2014) found that reported energy intake in adults aged 16-64 years was, on average, 34% lower than
> total energy expenditure (TEE) measured by doubly labelled water. The difference for other age
> groups was similar except for children aged 4-10 years where reported energy intake was 12% lower
> than TEE.»
> [@sacn2015]

**The 34% figure is adults 16-64, and children aged 4-10 sit at 12%** — a stratum the wiki's prior
citations of this number omitted. So underreporting has an **age gradient as well as an adiposity
gradient**, and quoting 34% as *the* misreporting figure overstates it for children by roughly
threefold. Willett's decomposition and SACN's are the same phenomenon cut on two different variables;
**two sources, one mechanism, and the decompositions are what make it actionable.**

### The flat slope syndrome — a mechanism that flattens dose-response curves

> «In general, those who consumed considerably less than the average were more likely to overreport
> intake, while those who ate more than the average tended to underreport, sometimes referred to as
> the "flat slope syndrome"»
> [@willett]

**This compresses the measured exposure range toward the mean from both ends at once**, which is
mechanically different from ordinary noise: it does not merely blur the ranking, it **shortens the
x-axis**. A true gradient estimated across a compressed range yields a shallower measured slope, and
the compression is worst exactly where dose-response questions are decided — in the tails.

**Recorded as bearing on the corpus's dose-response prior, NOT scored against it** (adjudication is out
of scope for an ingest). The wiki's four examined curves were *monotone over the studied range or not
estimable*. **Flat-slope compression is a mechanism that could hide a knee** — by pulling extreme
intakes toward the middle, it removes the very observations that would locate one. **It cannot
manufacture a knee, only erase one**, so it bears asymmetrically: it is a reason to distrust a
*measured absence* of curvature, not a reason to distrust a measured curve. Handle for whoever scores
it: the dose-response `[PRIOR]` in CLAUDE.md.

### Records change what people eat — reactivity, and it biases TRIALS specifically

> «compared with an unannounced telephone recall, the food record overestimated the difference in fat
> intake between the study groups by approximately 40% at 6 months (p = 0.08) and by 25% at 12 months
> (p = 0.62) (Buzzard et al., 1996)»
> [@willett]

**Willett is explicit that neither figure reached significance** and frames them as *«consistent in
direction and magnitude at the two time periods, providing cause for concern»* — so this is a flagged
concern, not an established effect size, and must not be quoted as one.

**The structural point survives the imprecision:** in a diet trial the *intervention* arm has more
reason to record carefully, so the instrument measuring adherence is itself affected by the
intervention. **That inflates the apparent exposure contrast, which inflates the apparent effect.**
-> [[Framing a Decision Question]]

### The instrument that generates the epidemiology is the wrong one for checking a threshold

Chapter 4 states the division of labour plainly:

> «For most epidemiologic investigations of relationships between dietary intake and other
> health-related factors, relative rankings of food and nutrient intakes are adequate for
> determination of correlations or relative risks. However, in some situations, such as when comparing
> nutrient intakes with specific dietary recommendations, estimates of the absolute magnitude of
> energy and macronutrient intakes may be required. In such cases, records or recalls are generally
> the methods of choice.»
> [@willett]

**Read that against how the corpus's thresholds are actually used.** Guidance issues absolute
cutpoints — «below 10 E%», «30 g/day», «<5% of total energy» — and the cohort evidence behind them
comes overwhelmingly from **food-frequency questionnaires, which this chapter positions as adequate
for *ranking*, not for absolute magnitude.** So *"is my intake under the threshold?"* is a question the
dominant instrument is not the method of choice for, even where the threshold itself is sound.

**This is a limit on APPLICATION, not on the evidence.** The FFQ-based ranking that established a
gradient can be perfectly adequate for that job while being the wrong tool for auditing one person
against a cutpoint. **The two failures the wiki should keep separate:** a threshold can be poorly
located (a claim about the evidence) *or* well located and unmeasurable in practice (a claim about the
instrument). **Chapter 4 speaks only to the second.**
``

## A validity coefficient is itself biased — correlated error inflates it `[2026-07-28, Willett ch.6]`

The attenuation arithmetic on this page takes a **validity coefficient** as its input. Chapter 6 shows
that number is not a clean measurement either, and **the bias has a known direction: upward.**

The mechanism is a timing artifact. A validation study compares a questionnaire against a reference
method — a diet record, or a biomarker. In principle their errors are independent, because the
techniques differ. **In practice they are not, when both are collected at the same moment:**

> «if we consider that true intake is the average over an extended period, for example a year, but the
> biomarker and the recall/record both reflect relatively short-term intake and are collected close in
> time, then errors due to random variation in intake over a year will similarly affect both, and
> create correlated error. For example, blood levels of vitamin C reflect intake over a few days, and
> are likely to vary over a year due to seasonal availability of foods and other factors, so if a diet
> record and blood level of vitamin C are collected close in time, the errors in both will be
> correlated and the correlation between the methods will overstate validity.»
> [@willett]

**The worked case is the part that makes it usable, and it needs both halves.** Collected at the same
time, the diet record beat the questionnaire against blood vitamin C. **Willett's very next sentence
reverses the reading:** «when using a blood measure of vitamin C collected approximately a year before
the diet record and food frequency questionnaire assessments, the two measures of intake were
similarly correlated with the biomarker.»
[@willett]

**So the diet record's apparent superiority was an artifact of when the blood was drawn, not a
property of the instrument.** Move the biomarker a year away and the two methods perform alike.

**Three consequences, in decreasing certainty:**

- **A published validity coefficient inherits the design that produced it.** Ask when the reference
  measure was collected relative to the questionnaire before treating the coefficient as a property of
  the instrument.
- **The bias runs one way.** Correlated error can only *inflate* agreement between two methods, so
  validity coefficients from same-visit designs are ceilings, not estimates.
- **Therefore the attenuation on this page is a LOWER bound on the real attenuation.** If true validity
  is below the published coefficient, the true effect being attenuated is larger than the correction
  implies. **This does not change the direction of any correction — it means the corrections
  understate.**
  ``

**What this does NOT establish.** Willett describes the artifact and one demonstration (a conference
presentation plus Bingham 2008); he does not quantify how much of the published validation literature
is affected. **The size of the problem across the field is not established here** — only that the
mechanism is real, has a direction, and is *«frequently not considered»*.

## Differential error by DISEASE STATUS — and a third route to a spurious U-shape `[2026-07-28, Willett ch.7]`

The adiposity gradient above is one differential; chapter 7 supplies the other one, and it is the
mechanism that separates two study designs.

**The measured case.** In a Hawaii multiethnic cohort, recall bias was disease-specific:

> «In a multiethnic cohort in Hawaii (Wilkens et al., 1992), retrospectively reported intakes of total
> and saturated fat were overreported by colon cancer cases compared to controls, but no bias was seen
> for breast and prostate cancers. This difference for cancers is notable because, for colon cancer in
> particular, strong positive associations with total energy and saturated fat have been seen with
> remarkable consistency in case-control studies, whereas in prospective studies associations have
> tended to be inverse, sometimes significantly so»
> [@willett]

**Read the whole sentence, because the *«no bias was seen for breast and prostate»* half is what makes
it evidence rather than assertion.** The bias appeared exactly where the design-class divergence
appears and was absent where it does not. **That is a matched prediction, not a post-hoc story** — and
Willett's immediately following sentence supplies the counter-case (Lindsted and Kuzma found no biased
reporting for overall food frequency), which is why his own summary is hedged: biased findings occur
*«in some circumstances, but not in all studies»*.

**The starker demonstration is Zutphen** (Bloemberg 1986, 615 Dutch men): analysed *prospectively*,
men who later became CHD cases had consumed **229 kcal/day less** than those who stayed free of it;
analysed from diet recalled 15 years later, **no difference between cases and controls at all.**
Recall erased a real prospective association. **Willett bounds his own example** — the diagnosis-to-
interview gap «could have been up to 15 years, which would rarely be the case in the usual
case-control study» — so it demonstrates the mechanism at an extreme, not the typical magnitude.
[@willett]

### A U-shape can be manufactured by unequal PRECISION, with no bias at all

> «Even if there is no systematic bias, differences in random error—that is, precision in reporting
> past diet—can distort the shape of dose-response relationships. For example, greater random error
> for cases than controls would create a U-shaped relationship if there was no true overall
> relationship.»
> [@willett]

**This is a distinct mechanism from the two usually named**, and the distinction is the point:

| Route to a spurious U/J | Requires | Detectable by |
|---|---|---|
| Reverse causation | early disease changing intake | lag analysis, excluding early follow-up |
| Confounding by frailty / sick-quitter | a third variable tracking both arms | covariate adjustment, restriction |
| **Unequal precision between groups** | **no bias and no confounder — only different error variance** | **neither of the above** |

**The third survives the standard checks**, because it is not bias and not confounding. It needs a
comparison of *reporting precision* between groups, which validation substudies rarely stratify by
case status.

**Recorded as bearing on the corpus's U/J `[PRIOR — test me]`, NOT scored** — adjudication is out of
ingest scope, and the handle is the U/J prior in CLAUDE.md. What this pass establishes is narrower than
a verdict: the prior names reverse causation and confounding as the artifact routes, and **a third
route exists that neither of its named checks would catch.** Whether U-shapes in the wiki's actual
holdings arise this way is untested — the corpus has one J-shape mention in total.

### The design-class consequence, and an independent warrant for a rule the corpus already holds

Willett's verdict on the pair of designs:

> «we now have substantial evidence from diet and disease relationships that have been extensively
> examined in both case-control and cohort studies that the results of case-control studies can
> frequently be seriously distorted by a combination of recall and selection bias.»
> [@willett]

**[@sacn2015] excluded case-control studies by design** — *«case-control,
cross-sectional and ecological studies were not considered»* — on stated concerns about their
limitations. **Willett supplies the mechanism and the measured demonstration behind that rule.**

**This is a genuine independence worth naming carefully.** SACN is a guidance body stating an inclusion
rule; Willett is a methods textbook documenting why the rule is warranted, from cohort-nested recall-
bias substudies. Different fields, different methods, neither citing the other for this claim — so the
convergence is **not** self-stated. `[E-independent]`
``

**Recall horizons, held for transportability judgments** — quoted whole, because the qualifier is in
the same sentence as the reassuring half:

> «Studies conducted to date suggest that diet may be recalled with acceptable levels of error up to
> approximately ten years; beyond this period, greater uncertainty exists. Similarly, diet during
> adolescence (high school) can be adequately recalled up to about thirty years later, but validity of
> recall much later in life appears to be low for some, but perhaps not all, aspects of diet.»

Recall bias is **worst with longer intervals and more advanced disease**, so it is most dangerous for
cancers typically diagnosed late.
[@willett]

## Not all biomarkers measure intake — the three-class taxonomy `[2026-07-28, Willett ch.8]`

Everything above turns on comparing a self-report against something better. **Chapter 8 (Van Dam &
Hunter) says which biomarkers can play that role, and most cannot.**

**First, the disambiguation the word *biomarker* hides.** A biochemical indicator can be used as a
measure of **intake**, of **nutrient status**, or as a **predictor of disease** — three different jobs.
Chapter 8's scope is the first, and it is explicit that the others are distinct. The reason they come
apart:

> «nutrient intake is just one determinant of nutrient status because the concentration of a nutrient
> in blood or tissues is typically influenced by variation in the absorption, transport and
> distribution, metabolism, and excretion of the nutrient.»
> [@willett]

**Those intervening processes are themselves affected by genetics, other dietary intakes, smoking,
physical activity and disease** — so a blood concentration is a *joint* function of intake and
individual biology. **A biomarker can therefore be an excellent measure of status and a poor measure
of intake at the same time**, which is the confusion the single word invites.
-> [[Surrogate Outcomes]], [[Is the Food Category Doing Any Work]]

### The three classes, and why only one can serve as a reference standard

> «A recovery biomarker is a biomarker for which a quantitative relationship exists between values for
> the biomarker and dietary intake in a specific time period. For example, it is known that about 80%
> of nitrogen intake in the form of protein is "recovered" as nitrogen in urine, with limited
> variation between individuals (Bingham, 2002).»
> [@willett]

> «In addition to urinary nitrogen, urinary potassium, urinary sodium, and energy intake estimated
> using the doubly labeled water technique are recovery biomarkers. The 24-hour urinary excretion of
> sucrose plus fructose is not considered to be a recovery biomarker because only a small fraction is
> recovered in the urine, but it has been labeled a predictive biomarker to distinguish it from
> concentration biomarkers because correlations with intakes are relatively high, and biomarker values
> may be used to estimate absolute intakes.»
> [@willett]

| Class | Relationship to intake | Can it give an ABSOLUTE intake? | Members named |
|---|---|---|---|
| **Recovery** | quantitative, a known fraction recovered over a defined period | **yes** | urinary nitrogen, **urinary potassium**, **urinary sodium**, doubly-labelled-water energy |
| **Predictive** | high correlation, small recovered fraction | yes, with modelling | 24-h urinary sucrose + fructose |
| **Concentration** | correlated only | **no** | blood/tissue nutrient concentrations generally |

**This closes a loop that has been open across three chunks.** The underreporting figures on this page
— SACN's 34%, Willett's 0/14/20% adiposity gradient — are **all** measured against doubly-labelled
water, i.e. against a *recovery* biomarker. **The reason those studies could establish a magnitude
rather than merely a correlation is that the reference method was in the one class that yields
absolute intake.** Where no recovery biomarker exists, misreporting can be detected but not sized.
``

### The consequence that is decision-relevant, and it favours one exposure the corpus holds

**Sodium is measured by a recovery biomarker; almost nothing else in the corpus is.** Urinary sodium
gives absolute 24-hour intake, so the sodium literature rests on an exposure measure of a different
class from the FFQ-based evidence behind sugars, fibre, saturated fat and grains.
-> [[Sodium Intake and Blood Pressure]]

**Two guards against over-reading that.**

- **A better exposure measure is not a better study.** It removes one error source; design,
  confounding, and outcome measurement are untouched. The sodium page's own finding — high certainty
  on blood pressure, **very low** on hard outcomes — is unaffected by this and is not improved by it.
- **24-hour urine has its own failure mode**: it measures *one day*, and this page's chunk-03 material
  shows a single day is a poor estimate of habitual intake. **A recovery biomarker fixes the
  *calibration* problem, not the *day-to-day variation* problem** — the two are independent, and a
  single 24-hour urine inherits the second in full.
  ``

### A biomarker is not automatically the safer instrument `[chunk 10]`

The taxonomy above says which biomarkers track intake. Chapter 8 adds a warning that runs against the
intuition motivating the whole exercise:

> «although biomarkers appear "objective," the use of fatty acid biomarkers can introduce bias and
> confounding that is not present for studies of fatty acid intakes.»
> [@willett]

**Two distinct reasons a biomarker can be worse than the questionnaire it replaces:**

- **Endogenous synthesis.** «Biomarkers generally perform poorly for fatty acids that can be produced
  endogenously, including even-chained saturated and monounsaturated fatty acids» — the concentration
  is intake **plus** de novo production, and the terms cannot be separated.
  -> [[Saturated Fat Intake and Replacement]]
- **Homeostatic regulation.** Where a concentration is defended by physiology it stops tracking intake
  at all: 1,25(OH)2D «is not a good reflection of vitamin D nutritional status because concentrations
  are tightly regulated», while 25(OH)D serves. **Regulation is the enemy of a biomarker of intake** —
  and the converse holds, which is why blood carotenoids work: they «are not closely regulated by
  homeostatic mechanisms».
  [@willett, chunks 10-11]

**The generalisation worth carrying:** *a biomarker measures intake well exactly to the extent the body
does not care about the quantity.* Anything physiologically important enough to be regulated is, for
that reason, badly measured in blood. **This is a structural trade, not a technical limitation to be
engineered away.**
``

## Why a self-reported exposure cannot cleanly attribute — the organic-food cohort `[2026-07-29]`

The [@baudry2018] cohort is a worked case of this page's
constraint deciding what a study can conclude. The exposure is a **self-reported organic-food-frequency
score**, and the reported association (cancer HR Q4 vs Q1 = 0.75, 95% CI 0.63-0.88) has to survive two
error channels at once: the ordinary self-report error on the diet the score encodes, and a
**healthy-user structure** in which the organic score is correlated with income, education, physical
activity, non-smoking, lower BMI and a higher overall diet-quality score.
[@baudry2018, Table 1]

**The measurement point specific to this page:** even a large confounder-adjusted model cannot fully
remove a confounder that is itself **measured with error**. This page's own rule — non-differential error
biases toward the null "in univariate models without confounding", but "with imperfectly measured
covariates in the model the bias can run in any direction" — applies directly: the diet-quality score,
smoking, and activity are all self-reported and imperfectly measured, so residual confounding survives
adjustment and its direction is not guaranteed. The authors flag the mechanism themselves ("these factors
should be carefully accounted for"), and their internal check points away from organic-per-se —
"Combining both a high-quality diet and a high frequency of organic food consumption did not seem to be
associated with a reduced risk ... compared with a low-quality diet and a low frequency of organic food
consumption."
[@baudry2018]
**So the cohort cannot separate the organic label from the lifestyle it marks** — an instance of the
*observed-healthy-population-is-not-evidence-for-a-component* trap, sharpened by covariate measurement
error. -> [[Organic vs Conventional Food]], [[Is the Food Category Doing Any Work]]

## References

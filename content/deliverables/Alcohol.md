---
type: deliverable
title: Alcohol
question: 'For someone who drinks or is deciding whether to, what does alcohol do to health, is there any dose that helps rather than harms, where is the upper bound for each outcome, and if they will drink anyway is any pattern, beverage type, or matrix meaningfully less harmful?'
sources: [Stockwell - Moderate Drinkers Mortality Risk 2016, Millwood - Alcohol and Vascular Disease Genetic Evidence 2019, Zhao - Daily Alcohol Intake and Mortality 2023, Livingston - Dementia Prevention 2024, WCRF - Diet Nutrition Activity Cancer 2018, Roerecke - Irregular Heavy Drinking Ischemic Heart Disease 2010, Semba - Resveratrol Levels Mortality 2014, GBD - Alcohol Use Burden 195 Countries 2018, Rumgay - Alcohol Attributable Cancer Burden 2021]
confidence: medium
created: 2026-08-05
updated: 2026-08-05
self_critiqued: 2026-08-05
---

This is a general, population-level appraisal of what alcohol does to health for anyone the studies
speak to. It is not advice for one person; whether *you* should drink, and how much, depends on your
stratum and your goals, which belong at the end, not here.

The lay question — *is a glass of red wine good for me?* — is the wrong question, and the famous answer
to it is an artifact. Split it into the three decisions a person actually faces: does a small dose help
versus not drinking (no — the apparent benefit dissolves under two independent methods); where is the
upper bound for each outcome I care about (it differs by outcome, and for cancer there is no lower
bound at all); and if I will drink anyway, is there a less-harmful way (yes, one real lever — don't
binge — and mostly folklore for the rest).

The unifying answer to *what is doing the harm* is **grams of ethanol**. Pattern, beverage type, and
the polyphenol story are second-order modifiers of that dominant axis, and for a person minimizing risk
the honest bottom line is that **less is better, with no protective floor.**

## How good is the evidence — read this first

The alcohol literature is where two evidence designs collide productively, and reading the numbers as
effects rather than associations is the central trap. Almost all the dose-response data is
**observational cohort work**, and it carries a specific, well-documented bias that runs in one
direction: **sick-quitter bias.** People who quit drinking because they became ill get counted among
"abstainers," which makes the non-drinking reference group look unhealthy and everyone who still drinks
look protected -> [[The U-Shaped Association Artifact]]. This single mechanism manufactured the
protective "J-curve" that headlines and older guidelines were built on.

Two things let this appraisal cut through it, and both point the same way:

- **Bias-corrected meta-analysis.** Re-doing the observational pooling with a clean reference group
  (never-drinkers or occasional drinkers, not ex-drinkers who quit sick) erases the apparent benefit
  -> [[Alcohol and Mortality and Vascular Disease]].
- **Mendelian randomization** (a natural experiment: inherited gene variants that lower alcohol
  tolerance act as a lifelong "instrument" for exposure, immune to reverse causation and lifestyle
  confounding) independently finds **no protective arm** -> [[The U-Shaped Association Artifact]].

Self-reported intake is also under-reported, which *flattens* a real dose-response toward the null — so
measurement error cannot manufacture the harm gradient the clean methods find, only hide it
-> [[Measurement Error in Dietary Assessment]].

## The reframe, made concrete

### The small-dose "benefit" is an artifact, shown two independent ways

The claim that light drinking beats abstaining is the textbook case of a protective lower arm that
does not survive scrutiny, and it fails by two routes that share no data or method — a genuine
convergence, not one study echoing another.

**Bias-corrected observational (Stockwell, 87 studies).** Unadjusted, the classic J-curve appears —
low-volume drinkers show RR 0.86 (95% CI 0.83-0.90) versus abstainers. Fully adjusted for how
abstainers are defined plus study quality, that collapses to **RR 0.97 (0.88-1.07)**, no significant
protection; the 13 bias-free studies show RR 0.90 (0.76-1.06), also null. Stockwell's verdict: the
corrected pattern is «more consistent with a linear dose response than a J-shaped curve», and
low-volume drinking has «no net mortality benefit compared with lifetime abstention or occasional
drinking». [@stockwell2016, Results; Conclusions]

**Mendelian randomization (Millwood, China Kadoorie, 500,000 people).** The genotype-predicted (causal)
relationship for stroke is monotonic with **no protective lower arm**: ischaemic stroke RR 1.27
(1.13-1.43) per 280 g/week, total stroke 1.38 (1.26-1.51), «no material deviation from log-linear
relationships». The conclusion: «the apparently protective effects of moderate alcohol intake against
stroke are not mainly caused by alcohol itself, and are largely artifacts of reverse causation and
confounding». [@millwood2019, Results; Research in context]

The two agree on the qualitative claim — **moderate drinking is not cardioprotective** — by a
bias-correction route and a genetic route that neither reference each other. That independence is what
makes the no-benefit finding robust rather than one contestable study. The same artifact replicates on
**dementia**: heavy midlife drinking raises risk (HR 1.22, 1.01-1.48), while the light-vs-none
"benefit" is again reverse causation, and AD-Mendelian-randomization says «any relationship between not
drinking and AD is due to survivor bias». [@livingston2024]
-> [[Dementia Prevention and Modifiable Risk Factors]]

### Where harm starts is outcome-specific — and sex-specific

There is no single "safe threshold," because the dose at which risk turns clearly upward depends on the
outcome and on sex. The updated bias-corrected meta-analysis (Zhao 2023, 107 studies, 4.8 million
people) confirms no protection at low volume (RR 0.93, 0.85-1.01) and adds the first actionable
all-cause mortality thresholds the evidence supports:

- **Pooled: significant elevation from \~45 g/day** — 45-64 g/day RR 1.19 (1.07-1.32), rising to 1.35
  at >=65 g/day; 25-44 g/day is null.
- **Women: from \~25 g/day** — medium-volume RR 1.21 (1.08-1.36), and even any drinking is already
  elevated (1.22, 1.02-1.46).
- **Men: from \~45 g/day** — 25-44 g/day is null.

Across all levels, «female drinkers had a higher RR of all-cause mortality than males (P for
interaction = .001)» — a woman's threshold sits at roughly **half a man's**, the decision-relevant part.
[@zhao2023, Results; Table 4] (One standard
drink is \~10 g ethanol, so 45 g/day is \~4-5 drinks, 25 g/day \~2-3.)

### Stroke is not myocardial infarction — the one place a small benefit is not excluded

Being symmetric about this matters: the causal harm is clear for **stroke and blood pressure**, but for
**myocardial infarction** the genetic estimate is null — RR 0.96 (0.78-1.18) per 280 g/week, «little net
effect». Millwood notes alcohol's blood-pressure harm «could be offset by cardio-protective changes in
other factors», and that the MI case count was limited, so «some real benefit or hazard cannot be
excluded». So "alcohol is uniformly harmful" holds firmly for stroke and BP; for **coronary heart
disease the causal picture is genuinely unresolved**, and that is the single outcome where a small real
benefit cannot be ruled out. [@millwood2019, Discussion]
This does not rescue the headline — it is one uncertain outcome against clear harm on stroke, cancer,
and mortality.

### Cancer has no safe threshold — this is what breaks any "safe amount" headline

The cancer axis behaves differently from the mortality axis, and it is the finding that reframes the
whole upper-bound question. Alcohol is a cause of many cancers — mouth/pharynx/larynx, oesophagus,
breast, colorectum, liver, stomach (convincing/probable) — and alcoholic drinks are an IARC Group 1
(established) human carcinogen. Unlike mortality, cancer risk has **no lower threshold**: «there is no
level of consumption below which there is no increase in the risk of at least some cancers». WCRF's
recommendation is blunt: «For cancer prevention, it's best not to drink alcohol».
[@wcrf2018ter, §5.1 Limit alcohol]

The site-specific numbers in the evidence are **the edge of the data, not safe levels**: breast «No
threshold ... was identified»; the colorectal judgement rests on intakes *above* \~30 g/day and the
liver/stomach ones *above* \~45 g/day — i.e. that is where the graded evidence sits, not a floor below
which alcohol is safe. [@wcrf2018ter, matrix asset p3, FN36-38]
There is a genuine single-site benefit — alcohol «helps protect against kidney cancer (at least up to 30
grams or two drinks per day), but this is far outweighed by the increased risk for other cancers».
[@wcrf2018ter, §5.1 Limit alcohol] A real protective
association on one site can coexist with net harm — it is not a reason to drink.

### The population anchor — the safest level is zero

Two population models add the magnitude and settle the guidance question. These report
population-attributable fractions — how many population cases would not have occurred under lifetime
abstention — which is a *different unit* from the individual risks above, not a bigger version of them,
and is read as such.

The Global Burden of Disease analysis, weighing all 23 alcohol-related outcomes by global disease
burden, found «the level of alcohol consumption that minimised harm across health outcomes was zero
(95% UI 0.0-0.8) standard drinks per week»; alcohol «led to 2.8 million deaths» in 2016 and was the
leading risk factor at ages 15-49. It states the guidance clash directly: «the safest level of drinking
is none. This level is in conflict with most health guidelines, which espouse health benefits
associated with consuming up to two drinks per day». [@gbd2018alcohol, Findings; , Discussion; Conclusion]

The cancer-burden leg reinforces no-threshold with scale: «741 300 ... or 4.1% ... of all new cases of
cancer in 2020 were attributable to alcohol», and crucially light-moderate drinking is not exempt —
«moderate drinking (<20 g per day) contributed 103 100 (13.9% ...) cases», with even «drinking up to 10
g per day» (\~1 drink) contributing 41 300 cases. [@rumgay2021, Findings; Discussion]
Alcohol is a shared lever across cancer, dementia and cardiovascular disease -> [[Shared Modifiable Levers Across Age-Related Diseases]], [[Diet Physical Activity and Cancer Prevention]].

## If you will drink anyway — the harm-reduction axis, in order of plausible effect

The dominant axis is total ethanol grams -> [[Alcohol and Mortality and Vascular Disease]]. Three
modifiers sit on top of it. They matter far less than how much you drink and whether you drink at all —
but ranked by how much they plausibly change risk, one is a real lever and the other two are largely
folklore.

### Pattern — don't binge (the biggest of the three levers)

Holding average volume fixed, *how* you distribute the drinks matters. Concentrating a week's alcohol
into irregular heavy sessions carries higher ischaemic-heart-disease risk than spreading the same total
out. Roerecke's meta-analysis (14 studies, 4,718 IHD events) compared irregular heavy drinking occasions
(«60 g of pure alcohol or 5 drinks per occasion at least monthly») against regular moderate drinking **at
comparable average volume**: **RR 1.45 (95% CI 1.24-1.70)**, a detrimental effect «even for drinkers
whose average consumption is moderate». [@roerecke2010, Abstract; Results]

This is not a sick-quitter artifact — the comparison «did not include an abstainer group» and separated
former drinkers, so the usual bias does not apply, and non-differential misclassification biases it
*toward* the null, making it conservative. [@roerecke2010, Discussion]
The decision-relevant form: **don't concentrate a week's drinks into one or two heavy sessions** — a
lever available even to someone unwilling to cut total intake. It measures a pattern effect at fixed
volume, distinct from the drink-versus-not question above, so it composes with rather than contradicts
the no-benefit finding. GBD flagged exactly this gap in its own model («drinking patterns ... might be
related to different levels of risk»), which pattern data fills.
[@gbd2018alcohol, Discussion]

### Beverage type — spirits vs beer vs wine (a named gap, with a directional prior)

Whether the *type* of drink matters, independent of ethanol grams, is a genuine **gap** in the held
evidence — no gold-tier meta-analysis that adjusts for both drinking pattern and drinker
characteristics is in hand. The directional prior, stated as such and not as a finding: apparent wine
advantages are largely a **healthy-drinker and pattern confound** — wine drinkers systematically eat,
exercise, and smoke differently, and tend to drink regularly with meals rather than binge — so beverage
type is expected to be second-order to ethanol grams once pattern and drinker profile are controlled.

**What would close it:** a meta-analysis of beverage type on mortality/CVD that adjusts for pattern and
drinker characteristics. Until then this is *insufficient evidence*, not a null — do not read the
absence of a finding as "type doesn't matter," only as "not yet shown." The structural reason to expect
it second-order: whatever ethanol does, it does regardless of the drink carrying it, so the question is
whether the beverage boundary carries information beyond ethanol grams -> [[Is the Food Category Doing Any Work]], [[Alcohol and Mortality and Vascular Disease]].

### Matrix — the "it's the red wine, not the ethanol" story is null at dietary doses

The most common rescue of the J-curve is that the benefit is **not the ethanol but the polyphenols in red
wine** — the *French paradox*, attributed to resveratrol. Measured directly, it fails. Semba's cohort
(783 adults 65+, 9-year follow-up) tested it with a biomarker — 24-hour urinary resveratrol metabolites —
instead of a food-frequency proxy: resveratrol was «not associated with inflammatory markers,
cardiovascular disease, or cancer or predictive of all-cause mortality» (lowest-vs-highest quartile
mortality HR 0.80, 0.54-1.17, ns). «Resveratrol levels achieved with a Western diet did not have a
substantial influence on health status and mortality risk». [@semba2014, Results; Conclusions]

The biomarker is really a wine-intake marker (resveratrol correlated with alcohol intake at Spearman
0.67), so a study crediting "resveratrol" is measuring wine — and hence ethanol — under a polyphenol
label. [@semba2014, Discussion] The presumed active
component does no measurable work at the dose a drinker actually gets — the same failure mode as
crediting coffee's benefit to caffeine when the matrix carries it -> [[Is the Food Category Doing Any Work]].
It does not rule out a supraphysiologic-dose *supplement* effect (those trials use doses orders of
magnitude above dietary), but it removes the *drink-red-wine-for-the-resveratrol* inference.

The other matrix candidates dissolve on inspection. **Acetaldehyde** — the carcinogen behind alcohol's
cancer risk — is ethanol's own first metabolite, an IARC Group 1 carcinogen produced *downstream of
ethanol*, not an additive of any particular drink; it is the same across beverages and is the
mechanistic reason cancer has no safe threshold. So the "carcinogen" is not a matrix property to steer
around. **Sulfites** trigger allergy/asthma in a susceptible minority but carry no hard-outcome claim
(contra "sulfites cause hangovers"); **congeners** in dark spirits worsen hangover severity, not an
established hard outcome. These are small levers, and *attention is an anti-signal* — the volume of
discourse around them runs inversely to their effect on the outcomes that matter.

## The honest bottom line

The dominant lever is **total ethanol grams** and whether to drink at all -> [[Alcohol and Mortality and Vascular Disease]].
Every modifier is second-order to it. For someone deciding whether to drink for their health, the answer is that there is
**no credible benefit from a small dose** for mortality, stroke, or dementia — the apparent benefit is a
study artifact, shown two independent ways — and **cancer risk rises from the first drink** with no safe
floor. The one genuinely unresolved outcome is coronary heart disease, where a small real benefit is not
excluded, but it is one uncertain outcome against clear harm elsewhere.

For someone who will drink anyway, the harm-reduction advice is short and honestly ranked: **don't
binge** (the one modifier with a real effect size — RR 1.45 at equal volume), and don't expect the
beverage type or the red-wine polyphenols to save you (folklore and a measured null, respectively). For
a person minimizing risk, **less is better, with no protective floor** — and that "the remaining lever
is small and pointing one direction" is itself the useful result: it licenses stopping the search for a
safe or beneficial amount.

### Mandatory caveats

- **Open loop.** This wiki grades internal coherence and fidelity to its sources — never whether a
  recommendation actually improves outcomes in the world. A clean appraisal is not a validated result.
- **Appraise, do not prescribe.** This is a general, population-level appraisal, not medical advice;
  selecting a target, screening for individual contraindications (pregnancy, liver disease, medication
  interactions, dependence), and managing them are prescriber acts requiring information this document
  does not hold.
- **A general appraisal, applied per person.** Your sex, baseline cardiovascular and cancer risk,
  drinking pattern, dependence history, and realistic alternative decide the individual weighting.
- **Coherence, not validity.** The causal reading rests on the Mendelian-randomization assumptions
  (instrument validity, no pleiotropy) and on one MR study in one (East Asian) population; the
  convergence with the Western-heavy bias-corrected meta-analysis is what carries it.
- **Health axis only.** This cut weighs alcohol on longevity, cardiovascular, cancer, and cognitive
  outcomes; social ritual, pleasure, and cost are real and yours to weigh, not appraised here.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | 'For someone who drinks or is deciding whether to, what does alcohol do to health, is there any dose that helps rather than harms, where is the upper bound for each outcome, and if they will drink anyway is any pattern, beverage type, or matrix meaningfully less harmful?' |
> | **Evidence included** | 9 sources — 3 gold, 5 high, 1 moderate |
> | **Overall certainty** | **Medium** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | 1 source(s) below the gold evidence bar feed this page: Semba (cohort, moderate). Each labelled by tier; none load-bearing for the core claims. |
> | **Last updated** | 2026-08-05 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Alcohol.md) |

## References

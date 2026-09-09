---
type: deliverable
title: Age-Related Diseases
confidence: medium
created: 2026-07-30
updated: 2026-09-09
self_critiqued: 2026-09-09
concrete_subject_audited: 2026-09-09
aliases: [Diseases of Ageing, Age-Related Disease Prevention, Common Soil Hypothesis, Healthy Ageing, Chronic Disease Prevention]
question: 'For an adult deciding how to lower their risk of the diseases of ageing -- cardiovascular disease, cancer, dementia, Parkinson''s, frailty/sarcopenia, osteoporosis: which modifiable exposures move which disease, how much, how certainly, do the diseases share a common core of levers or need separate regimens, and how does the ranking shift by age stratum?'
authors: [Livingston, Gill; Chen, Yancong; World Cancer Research Fund (org); Ngandu, Tiia; Coley, Nicola; Peters, Ruth; Knowler, William C; Goldberg, Ronald B; World Cancer Research Fund International (org); Johnston, Bradley C; Vermeiren, Sofie; Racey, Megan; Celis-Morales, Carlos A; de Santana, Felipe M; Morton, Robert W; Sherrington, Catherine; Aune, Dagfinn; Babaker, Raghad; Marques-Couto, Pedro; European Society of Cardiology (org); Lopez-Bueno, Ruben]
sources: [Livingston - Dementia Prevention 2024, Chen - Non-Genetic Risk Factors Parkinson Overview 2021,
  WCRF - Diet Nutrition Activity Cancer 2018, Ngandu - FINGER Multidomain Cognitive Decline 2015,
  Coley - Multidomain Dementia MAPT preDIVA Pooled 2025, Peters - Blood Pressure Lowering Dementia 2022,
  Knowler - Diabetes Prevention Program DPP 2002, Goldberg - DPPOS Cardiovascular Events 2022,
  WCRF - Meat Fish and Dairy Products and Cancer 2018, NutriRECS - Red and Processed Meat Recommendations 2019,
  Vermeiren - Frailty Prediction Negative Health Outcomes Meta-Analysis 2016,
  Racey - Physical Activity Interventions Frailty Meta-Analysis 2021,
  Celis-Morales - Grip Strength Mortality 2018, de Santana - Low Muscle Mass Mortality 2021,
  Morton - Protein Supplementation and Resistance Training 2018, Sherrington - Exercise Preventing Falls 2019,
  Aune - Physical Activity Cataract Macular Degeneration Meta-Analysis 2026,
  Babaker - Risk Factors Age-Related Macular Degeneration 2025,
  Marques-Couto - Mediterranean Diet Macular Degeneration Meta-Analysis 2025,
  ESC - CVD Prevention Guidelines 2021, Lopez-Bueno - Handgrip Strength Thresholds]
---

<div class="recent-update" data-last-updated="2026-09-09">

## The verdict

You do not need a separate anti-dementia diet, an anti-cancer diet, and an anti-heart-disease regimen.
A short list of shared modifiable levers -- staying physically active, keeping blood pressure, LDL,
blood sugar and body fat down, not smoking, going easy on alcohol -- lowers the risk of several leading
age-related diseases at once. That overlap is why these levers rank first: pull one, and several
outcomes move together.

Two honest bounds keep that verdict from over-promising. First, most of the per-disease effects behind
it are modest and observational -- estimated across populations, not measured in any one person -- and
the levers do not transfer uniformly from disease to disease: Parkinson's barely follows the pattern,
and a lever that helps one eye disease does nothing clear for its neighbour.

Second, where the question has been put to its sharpest test -- does pulling a lever actually prevent a
*disease*, not just move a risk marker -- the answer favours a *single* well-understood lever over a
purpose-built regimen. That test has been run most directly on dementia, which now has its own cut:
lowering blood pressure prevents incident dementia in randomized trials, a small but real absolute
effect bought on a pill already prescribed for the heart, while a dedicated bundle of diet, exercise
and cognitive training aimed at the brain has not cleared the same bar -> [[Dementia Prevention]]. The
lesson generalizes across the outcome menu: the diet-detail levers that draw the most attention work,
where they work at all, through the same cardiometabolic pathways as the shared core -- they reinforce
those levers, they do not add new ones alongside them.

Start with why the same short list keeps reappearing.

</div>

## One set of levers, several diseases

Line up the modifiable-risk-factor lists the wiki holds for four leading age-related outcomes --
dementia, cardiovascular disease, cancer, Parkinson's disease -- and a small set of exposures recurs
across most of them, in the same direction: **excess body fat, physical inactivity, diabetes and high
blood sugar, high blood pressure, high LDL, smoking, and heavy alcohol use.** No single disease body
states this; each was written for its own outcome. The recurrence itself is the finding.

| Exposure | Dementia | Parkinson's | Cancer | Cardiovascular disease |
|---|---|---|---|---|
| Physical inactivity | RR 0.80 (0.77-0.84) protective | RR 0.79 (0.68-0.91) protective | a protective cause | established lever |
| Excess body fat | midlife RR 1.31 (1.02-1.68) | not significant | convincing/probable cause, 12 of 17 cancer sites | established lever |
| Diabetes / high blood sugar | HR 1.24 per 5-yr-earlier onset | RR 1.31 (1.10-1.57) | via body fat | established lever |
| High blood pressure | untreated HR 1.42 (1.15-1.76) | -- | -- | established lever |
| High LDL | >3 mmol/L HR 1.33 | -- | -- | established lever |
| Smoking | midlife RR 1.30 (1.18-1.45), harm | RR 0.64 (0.60-0.69), protective -- an artifact, not a lever (see below) | a cause | established harm |
| Heavy alcohol use | >21 units/week HR 1.22 (1.01-1.48) | -- | a cause | J-shaped; the protective-looking low-dose arm is artifact-suspect |

[@livingston2024]
[@chen2021pd]
[@wcrf2018ter]

Read this table as **co-membership evidence, not a shared magnitude.** Each column is a different
outcome, measured in a different population, over a different follow-up -- a row does not mean "this
exposure costs everyone the same amount"; it means the same exposure shows up, in the same direction, in
disease bodies that were built independently of one another. Whether a given relative risk translates
into a large or a small absolute benefit for any one person still depends on that person's baseline risk
for each disease -- a question the later sections take up disease by disease.

On alcohol specifically: the harm direction above is the one to act on -- past roughly 21 units a week,
dementia risk rises, and alcohol is a recognized cause of several cancers with no evidence of a safe
floor. The apparent protection at low intake is the textbook case of a **U-shaped association that does
not survive scrutiny of who ends up in the "non-drinking" comparison group** -- former drinkers who quit
because they were already getting sick get folded into the reference category, which manufactures a
protective-looking dip at low doses -> [[The U-Shaped Association Artifact]]. Nothing here should be read
as licensing a "safe" drinking amount; the number worth carrying is the harm threshold, not a floor.

This is exactly the situation Layer 1's ranking logic is built for. Ranking by expected effect size and
certainty does not mean ranking one outcome at a time: **a lever that moves three diseases outranks one
that moves only one, at an equal effect on each** -> [[Layer 1 - Ranking Interventions for a Stratum]].
Physical activity and the vascular-metabolic cluster (blood pressure, LDL, glycaemia, adiposity, smoking)
sit at the top of both the [[Big Rocks (Elderly)]] and [[Big Rocks (Median)]] rankings for exactly this
reason -- not because any single per-disease effect is unusually large, but because the same short list
keeps paying out across the whole outcome menu at once. The shared core is not a coincidence sitting
beside the ranking; once multi-outcome breadth counts toward a lever's rank, the shared core *is* the
ranking.

Why does the same list keep recurring? The most economical explanation is that these exposures injure a
**common cardiometabolic-vascular substrate** -- the blood vessels and the systemic metabolic machinery
that dementia, cardiovascular disease and (via body fat and inflammation) some cancers all depend on.
That is a candidate mechanism, not an outcome finding: it is consistent with the overlap
above but not independently tested here, and it does not crown any single exposure as "the cause" of
age-related disease in general -- an effect arrives only when a whole set of conditions is present, and
ranking by breadth is a statement about where to act, not about what explains the outcome
-> [[Layer 1 - Ranking Interventions for a Stratum]].

One exposure in the table already breaks the
pattern outright -- smoking's apparent protection against Parkinson's, flagged above -- and later
sections return to why Parkinson's and a few other diseases resist the shared-lever logic more broadly.

<div class="recent-update" data-last-updated="2026-09-09">

## Does pulling those levers actually prevent a disease?

The shared list lowers *risk markers* reliably; whether it prevents a *disease* has been tested most
directly on dementia, where two bets were run and must be kept apart. A multidomain lifestyle bundle --
diet, exercise, cognitive training and vascular monitoring delivered as one unit -- has been tested in
randomized trials and pooled, and has not been shown to prevent the diagnosis, only to move a cognitive
test score in some trials [@ngandu2015]
[@coley2025]. A single cardiometabolic lever --
lowering blood pressure -- has been tested at scale and does prevent incident dementia in a randomized
trial, at a small but real absolute magnitude, on a pill already prescribed for the heart
[@peters2022bp]. Neither finding overturns the other; they
answer different questions -- a non-decomposable package versus one well-understood exposure.

This is the shared-lever thesis's sharpest test, so it earns a full appraisal of its own: the trial base,
the responder-subgroup null that closes off targeting the highest-risk person, the per-lever ranking, and
the diet and sleep candidates that turn out to route through the same cardiometabolic rocks rather than
adding independent targets, all live in [[Dementia Prevention]].

</div>

## Cancer, heart disease, diabetes — the increments beyond the rocks

Cancer and the cardiometabolic diseases tell the same shared-rock story with fewer surprises — and a
shorter list of extras.

**Heart disease and diabetes add almost nothing beyond the shared core.** Blood pressure, LDL,
glycaemia, adiposity, smoking and inactivity carry nearly the whole cardiovascular and type-2-diabetes
burden, and that ranking is worked out in [[Big Rocks (Elderly)]] and [[Big Rocks (Median)]] rather
than re-derived here. One framing point belongs on this page instead: sizing the lifestyle rock against
the drug landscape. A mature, low-harm drug for a single marker — a statin for LDL, an antihypertensive
for blood pressure — captures most of the benefit that marker has to give, which shrinks the marginal
lifestyle rock for *that* outcome specifically. It does not shrink the rest: a drug manages a marker,
while lifestyle that removes the underlying driver keeps the structural leverage and the other channels
a single-target drug does not touch.

**Diabetes prevention is where the head-to-head has actually been run.** [[Lifestyle vs Metformin for Diabetes Prevention]]
randomized 3234 adults with prediabetes to placebo, metformin (850 mg twice
daily), or an intensive lifestyle program (7% weight-loss target, 150 minutes/week of activity). Over an
average 2.8 years, diabetes incidence fell from 11.0 to 7.8 cases per 100 person-years on metformin (a
31% relative reduction, 95% CI 17-43%) and to 4.8 on lifestyle (58%, 48-66%)
[@knowler2002]. Lifestyle beat the drug outright
— 39% lower incidence head-to-head — and needed roughly half as many people treated to prevent one case
(NNT 6.9 vs 13.9 over three years). Metformin's benefit is stratum-specific: near-null in the lean with
near-normal fasting glucose (3% reduction, CI -36 to 30) and strongest in the more obese and more
hyperglycemic (53%, 36-65); lifestyle worked broadly across every subgroup tested.

Hold the outcome scope honestly, though. Twenty-one years later, the same three arms showed **no
reduction in hard cardiovascular events** from either intervention — metformin HR 1.03 (0.78-1.37),
lifestyle HR 1.14 (0.87-1.50), both non-significant, in a cohort where widespread out-of-study statin
and antihypertensive use diluted whatever effect either arm still had
[@goldberg2022]. Preventing or delaying a diabetes
*diagnosis* is demonstrated; that this converts into fewer heart attacks or a longer life is not shown
by this trial, in this population.

**Cancer adds genuine disease-specific levers that CVD and T2D do not carry.** Physical activity,
adiposity and alcohol are already shared levers (see above); cancer's own increments are about what to
eat, and what to eat less of. Body fatness is the largest of them by breadth — WCRF grades it a
convincing or probable cause across 12 of the 17 cancer sites in its Continuous Update Project, with
IARC independently adding thyroid cancer, multiple myeloma and meningioma
[@wcrf2018ter].

Against that breadth, red and
processed meat are a single-site refinement: processed meat carries a convincing colorectal-cancer
association (RR 1.16 per 50 g/day, 95% CI 1.08-1.26), red meat a probable one that is not itself
statistically significant when pooled (RR 1.12 per 100 g/day, 1.00-1.25)
[@wcrf2018]. WCRF's own gram target — up
to about 350-500 g cooked red meat a week, very little processed meat — is chosen to balance meat's
micronutrient contribution against that colorectal risk
[@wcrf2018ter].

NutriRECS re-pooled the same cohort
evidence into absolute terms and found that a realistic 3-servings/week cut buys about 7 fewer cancer
deaths per 1000 people over a lifetime — low certainty, and null on eight other cancer outcomes
[@nutrirecs2019]. Fibre runs the other
way, probably protective for colorectal cancer above roughly 30 g/day -> [[Dietary Fibre and Health]].
On WCRF's own grading scale, meat and fibre are both smaller, more site-specific levers than the
adiposity rock beneath them -> [[Body Fatness and Cancer Risk]].

Most of the population's cancer burden sits entirely outside this diet/activity/adiposity list —
tobacco, infection (HPV, hepatitis, *H. pylori*) and occupational exposure carry a comparable or larger
share and fall outside this deliverable's lifestyle scope.

## Keeping the body working — frailty, muscle, bone, falls

For the oldest adults the decisive outcome is often not whether a disease arrives but whether the body
keeps working — a different lever set. Length and function stay separate axes here, not one score: an
intervention can push back a disease's arrival, preserve mobility, or do neither, and this section keeps
the three apart rather than folding them into a single healthspan number.

**Frailty is a marker with teeth, and also something you can change.** [[Frailty]] — reduced
physiological reserve across multiple organ systems — predicts a wide set of patient-important outcomes.
In Vermeiren's pooled meta-analysis of 31 studies and 158,764 community-dwelling adults over 65, frail
versus robust carried roughly double the hazard of death (HR 1.83, 95% CI 1.68-1.98), of disability in
basic activities of daily living (HR 1.62, 1.50-1.76), and a raised hazard of falls (HR 1.24, 1.12-1.37)
[@vermeiren2016frailty]. That
alone would make frailty only a stratifier.

Racey's meta-analysis of 26 trials in prefrail and frail
older adults closes the gap: physical-activity programs moved mobility (standardized mean difference
0.60), activities of daily living (0.50), and frailty status itself (risk ratio 0.58, moderate
certainty) [@racey2021frailtypa].
The dose has to come down for this stratum — a program built for the general older adult can be too
intense once someone is already frail — but the direction holds: frailty identifies who has the most to
gain, and training moves the thing identified.

**Grip strength and muscle mass are cheap numbers that track both function and mortality — measurements,
not targets to chase.** In UK Biobank (n=502,293), each 5 kg of lower grip strength carried a 16-20%
higher hazard of all-cause mortality, adjusted for age, comorbidity, activity and more
[@celismorales2018]; a later 48-cohort, 3.14-million-adult
pooled analysis that folds in UK Biobank put the weakest third of grip at 1.58 times the all-cause
mortality of the strongest third (HR 1.58, 1.40-1.78)
[@lopezbueno2022].

Low appendicular muscle mass predicts mortality on its own terms too — people who died
carried about 0.18 standard deviations less muscle mass than survivors, an association not fully
explained by their strength [@santana2021]. Both
measures are substantially heritable and disease-sensitive, so they are markers as much as levers — no
trial shows that raising grip strength or muscle mass, on its own, lowers mortality. Measure them to
place someone in a risk stratum; the lever behind them is resistance training and protein.

**Resistance training drives muscle and strength; protein is a modest, bounded adjunct.** Across 49
RCTs, adding protein to resistance training added a further 2.5 kg to one-repetition-maximum strength
and 0.3 kg of lean mass on top of what training alone delivered
[@morton2018]. The oft-quoted
target sits around 1.62 g of protein per kg of *total* body weight per day, as actually weighed — not
lean mass — and it is a soft, statistically non-significant knee (95% CI 1.03-2.20, p=0.079), better
read as a wide region than a precise point: a floor worth reaching rather than a ceiling to fear, since
higher intakes show no harm to healthy kidneys.

In the obese the number is not merely lower — it is
undefined until the denominator is named, because total and lean weight diverge roughly twofold and the
trial sample behind it carried no obese stratum at all. That is a gap, not a finding, and it stays a gap
for older and energy-restricted adults too -> [[Protein and Resistance Training for Muscle and Strength]].
A separate older-adult maintenance target sits lower, around 1.0-1.2 g/kg/day (1.2-1.5 in
illness) — a different objective, on a different evidence base -> [[Protein Intake for Older Adults]].

**Falls are prevented by balance, not strength, and the effect is unusually solid.** A Cochrane review
of 108 trials (23,407 participants, mean age 76) found exercise cut the rate of falls by 23% (rate
ratio 0.77, 95% CI 0.71-0.83) at HIGH-certainty GRADE — a rare thing in this domain: an RCT-based effect
on a directly observed, patient-important outcome
[@sherrington2019]. But the active ingredient is
specifically balance and functional training (rate ratio 0.76, HIGH certainty); resistance training
alone showed no fall benefit on its own (rate ratio 1.14, 0.67-1.97, very low certainty) — a different
mechanism from the muscle and mortality levers above, not a contradiction of them.

Fracture reduction
follows downstream, more weakly evidenced (RR 0.73, 0.56-0.95, LOW certainty), because exercise reaches
bone through two distinct channels and this is only the larger one: preventing the fall, not measurably
strengthening the bone itself, whose own loading effect is smaller and surrogate-only ->
[[Exercise and Bone Mineral Density]]. And once someone is already frail this signal weakens — the
frail-only pooling above found no significant fall reduction (RR 0.80, 0.51-1.26, very low certainty)
even while mobility and frailty status still improved, so balance training earns the most confidence
started before frailty sets in, not after.

**Where the incidence lever inverts: weight loss helps the disease list and can harm the frail.** Losing
weight is a genuine lever against cancer and cardiometabolic incidence (above) and against knee
osteoarthritis symptoms and joint load. But unintentional weight loss is itself one of the criteria that
defines frailty in the Fried phenotype, and deliberate weight loss can harm a frail older adult by
accelerating the loss of muscle and reserve it is meant to protect. The same exposure that lowers risk
in an overweight, disease-incidence stratum becomes a route-(c) contraindication in the frail elderly —
the sign inverts by stratum, and a recommendation built for the middle-aged should not be carried over
to the oldest-old without checking which stratum it is being applied to ->
[[Shared Modifiable Levers Across Age-Related Diseases]].

The shared-lever logic is powerful but not universal — two places break it, and the breaks are
instructive.

## Where the shared logic breaks — Parkinson's and the eyes

Two corners of this deliverable follow the shared-lever pattern only partly, or not at all, and both
are worth stating precisely rather than folding into the general case.

**Parkinson's is the sharper break.** Chen's 2021 umbrella review pooled 46 systematic reviews across
six categories and more than 80 factors, and it grades its own evidence base bluntly: under AMSTAR-2,
none of the 46 rated high or moderate quality, and «Seven SRs (15.2%) were judged to be of low
methodological quality, while the remaining 39 (84.8%) were judged to be of critically low quality»
[@chen2021pd]. Of 50 statistically
significant associations found, only 19 survived to prospective (cohort) evidence; the remaining 31
rest on case-control or mixed designs, more prone to recall and selection bias. That ceiling governs
every number below.

Physical activity is the one shared lever that clearly holds: RR 0.79 (95% CI 0.68-0.91, 8 cohort/
nested-case-control studies, I2=0) [@chen2021pd],
strongest in men (RR 0.68) and at moderate-to-vigorous intensity (RR 0.71), null in women
(RR 0.91, 95% CI 0.72-1.14). This figure traces, inside Chen's umbrella, to Fang et al. 2018's own
meta-analysis of physical activity and PD — **a source the fabric does not separately hold.** That is a
named gap, not an oversight: without the Fang MA itself, the Parkinson's activity signal holds only at
the direction and magnitude Chen reports, and no Parkinson's-specific dose-response,
population-attributable fraction, or absolute-risk figure can be built on top of it.

Diabetes is the other shared lever that holds, modestly: RR 1.31 (95% CI 1.10-1.57, 4 cohort studies)
«diabetes significantly increased the risk of PD» [@chen2021pd].
But three of the cardiometabolic rocks that anchor the shared-core case
elsewhere in this deliverable were assessed here and came back non-significant: adiposity — «no
significant associations were found between PD development and BMI or serum cholesterol»
[@chen2021pd] (BMI per 5 kg/m2, RR
1.00, 95% CI 0.89-1.12); blood pressure — «no significant association was found between hypertension
and PD (pooled RR: 0.98, 95% CI: 0.82 to 1.17, ... 2 cohort studies)» [@chen2021pd];
and lipids — LDL-C found no significant association
either (RR 0.58, 95% CI 0.31-1.07, wide interval, 3 studies).

Pulling the shared rocks therefore does
far less for Parkinson's than for dementia, cancer or heart disease, and does it through a narrower
channel — physical activity and, modestly, glycaemic control, not the full cardiometabolic set.

**The direction flips outright on smoking and coffee, and the flip is the instructive part.** Smoking's
association with lower PD risk (RR 0.64, 95% CI 0.60-0.69) and coffee's (RR 0.67) and caffeine's (RR
0.55) are PD's strongest apparent protective signals — running opposite to every other disease in this
deliverable. The review attributes them to reverse causation over Parkinson's years-to-decades
prodrome: early, undiagnosed PD lowers activity, smoking and coffee intake before diagnosis, which a
cohort design cannot fully rule out.

Chen's own reading of the smoking arm is explicit that it changes nothing about smoking policy: «its
protective effect for PD development does not impact public health strategies for reducing smoking»
[@chen2021pd]. This is the one place
in the whole deliverable where the shared-lever logic would license a genuinely harmful action — smoke
to protect the brain — and it is exactly where the signal is an artifact, the case
[[The U-Shaped Association Artifact]] exists to catch.

**The eyes show a milder version of the same lesson: a lever proven for one organ does not
automatically transfer to its neighbour.** Aune's 2026 SR-MA of prospective cohorts reaches WCRF
*probable* causality for physical activity and cataract — RR 0.90 (95% CI 0.86-0.94, 10 cohorts, \~1.9
million participants) — but for age-related macular degeneration the same paper finds the evidence
«limited, and no conclusion could be drawn»: RR 0.92 (95% CI 0.84-1.01), an interval crossing 1
[@aune2026vision].

The authors state the contrast directly: «This meta-analysis provides further support for an inverse
association between physical activity and risk of cataract, but an association with age-related
macular degeneration was less evident» [@aune2026vision].
The AMD result is *insufficient evidence*, not a
demonstrated null — the wide interval and thin dose-response data (3 cohorts) cannot exclude a real
small effect — but physical activity is not (yet) a proven AMD-specific lever the way it is for
cataract.

**What does reach AMD is the familiar vascular set, and it adds nothing new to the ranking.** Babaker's
2025 SR-MA of 18 observational studies (\~44,440 participants) finds smoking (OR 1.86, 95% CI
1.33-2.6), hypertension (OR 1.24, 1.09-1.4), cardiovascular disease (OR 1.44, 1.11-1.87) and diabetes
(OR 1.44, 1.3-1.6) all significantly associated with late AMD, while BMI, cerebrovascular disease and
blood lipids were not [@babaker2025amd].
These are prognostic (route-a) associations, not intervention effects, and they are the same big
rocks already ranked on mortality and cardiometabolic grounds — AMD is one more organ carrying the
cost of the dominant exposures, smoking above all, not a fresh lever.

A Mediterranean-diet pattern shows a separate, somewhat better-evidenced signal for AMD *progression*
specifically (prospective cohort pool: HR 0.77, 95% CI 0.67-0.88) [@marquescouto2025]
— but MedDiet is already a big
rock on cardiometabolic grounds, so for someone who would adopt the pattern anyway this is
confirmatory, not additive.

The lesson both exceptions teach is the same one: "shared" in this deliverable means shared for the
diseases and levers it has actually been shown to hold for, never a default assumption. Parkinson's is
a disease where most of the shared core does not transfer; the eyes show that even within one organ
system, one lever (physical activity) can transfer to one disease (cataract) and not its neighbour
(macular degeneration).

<div class="recent-update" data-last-updated="2026-09-09">

## Length, trajectory, and how the ranking shifts by age

The wiki holds no single scalar for "health," so a lever's payoff has to be named by which axis it
moves: length of life, or the shape of the years before death — function, independence, freedom from
pain and cognitive decline. These are not the same currency and should not be collapsed into one
number.

Dementia is where this distinction bites hardest. Delaying dementia onset only compresses the years
lived with the disease if onset moves back *further* than life expectancy extends — the
compressed-morbidity outcome this deliverable's outcome menu names. This is a plausible entailment of
"pull the levers earlier and keep them low longer," not a measured finding
:
none of the trials held here — Peters' BP-lowering IPD meta-analysis, the FINGER/MAPT/preDIVA/Coley
bundle — report
a shift in age-at-onset or years-of-dementia-free-life. They report whether dementia was diagnosed by
the end of follow-up, an event count, not a trajectory.

Livingston's Commission states the timing rule
plainly — «decrease risk factor levels early (the earlier, the better) and keep them low throughout
life (the longer, the better)», and «it is never too early or too late to reduce» dementia risk
[@livingston2024] — but that is a policy recommendation, not
a measurement of the trajectory it implies.

The gap runs through the function axis generally: the one SR the fabric holds that tries to measure a
composite functional trajectory directly (intrinsic capacity plus quality of life) flags that its own
outcome measures are the ones this field measures worst — self-reported, unblindable, Hawthorne-prone —
so a positive reading is discounted, not taken at face value
[[Intrinsic Capacity and Multidimensional Healthspan]]. Naming this gap is itself the decision-relevant
move: a clean incidence result should not be read as though it had settled a trajectory question it
never asked.

The ranking of levers is not static across age, and the reason is arithmetic more than biology. A
10-year risk window understates the case for acting in a 30- or 40-year-old with an unfavourable but
modest risk-factor profile, because a decade captures only the first slice of decades of compounding
exposure. ESC states this for cardiovascular risk directly: «The 10-year CVD risk in relatively young,
apparently healthy people is on average low, even in the presence of high risk factor levels, but the
lifetime CVD risk is in these circumstances very high» [@esc2021].
The *logic* transports to dementia and the other diseases in this deliverable —
midlife exposure to the shared core (LDL, blood pressure, obesity, smoking, diabetes) drives late-life
incidence across diseases, so a young adult's low 10-year single-disease number understates a lever
that pays into several late-life outcomes at once.

What does not transport is the apparatus: ESC's LIFE-CVD model and its CVD-free-years currency are
calibrated for cardiovascular disease only, and the fabric holds no equivalent lifetime model for
dementia or Parkinson's — so "act early" is warranted qualitatively here, but no cross-disease
lifetime-years figure can be quoted
.
ESC also bounds its own frame: below 40, «CVD risk
predictions, as well as predictions of lifetime benefit of risk factor treatment, are likely to be
imprecise», and drug treatment is not usually considered at that age — lifestyle carries the weight
instead [@esc2021].

At the other end of life the ranking shifts again, mostly toward function. In a lean, physically
active, non-smoking elderly person the cardiometabolic big rocks are already largely pulled, so the
marginal levers move toward resistance training and adequate protein, balance-and-strength work
against falls, and frailty status itself — covered in full above and in [[Big Rocks (Elderly)]].
Baseline risk does real work here without needing any subgroup claim: the same relative effect buys
more absolute benefit in a higher-baseline-risk stratum. That is part of why lowering blood pressure
prevents incident dementia in absolute terms that are small in a trial population enrolled at modest
baseline risk yet would plausibly buy more starting from a higher one, while a multidomain programme
layered on an unselected older population already receiving good vascular care found no reduction at
all -- a route-(a) point in miniature, a lever with little absolute room left to work whatever the
relative logic says. Both results, with their trial numbers and headroom reading, are worked in
[[Dementia Prevention]] -> [[Baseline Risk and the Relative-Absolute Split]].

One structural limit closes the ranking question. The 14-factor dementia population-attributable-
fraction map, WCRF's preventable-fraction estimates, and every other PAF-style figure in this
deliverable are population quantities, not per-person ones, and the individual factors' PAFs overlap
and therefore do not sum. Removing a modifiable exposure does not remove that share of one person's own
risk, and no single aggregate cross-disease burden figure can be built by adding PAFs across the
diseases covered here — a structural limit (`G`, needs aggregation the fabric cannot perform), named
rather than computed.

</div>

<div class="recent-update" data-last-updated="2026-09-09">

## What does not move the needle much

That leaves the exposures people spend the most attention on -- and where attention runs inverse to
effect. A confirmed small effect is as reportable a result as a confirmed large one, so an honest map of
this territory is neither "everything checks out" nor "nothing here matters." Dementia is where these
small levers have been mapped most exhaustively, and the mapping is consistent: ultra-processed food,
fruit and vegetables, flavonoids, fish-oil capsules, sleep, mind-body exercise and air pollution each
carry at most a small, low-certainty signal, and where one survives scrutiny at all it runs through the
cardiometabolic rocks already counted rather than sitting beside them as a fresh target. The per-lever
appraisal -- the numbers, the reverse-causation and measurement-error checks, and the diet-versus-pill
split -- lives in [[Dementia Prevention]].

Three things the evidence cannot yet tell us.

</div>

## What the evidence still cannot tell us

**Parkinson's disease has a physical-activity signal, but not yet a sized one.** The activity
association for Parkinson's rests on a 2021 umbrella review of the field rather than a purpose-built
dose-response meta-analysis (the derivation is in the Parkinson's section above)
[@chen2021pd]. The direction and reported
magnitude hold; a Parkinson's-specific dose target, absolute-risk figure, or population-attributable
fraction cannot be built from evidence never designed to supply one.

**The biology that might explain why one lever touches several diseases at once is not evidence this
fabric holds.** The pattern itself — that the same handful of exposures recurs across dementia,
cardiovascular disease, cancer and physical function — is well established across the disease-specific
sources above. What is absent is the aging-biology literature (cellular senescence, chronic
inflammation, and related mechanisms sometimes grouped as "the hallmarks of aging") that would explain
that pattern mechanistically. Treat any claim about *why* the levers overlap at that biological level as
unstated, not as a confirmed backbone underneath the pattern; the overlap remains actionable without it.

**How much total benefit one lever buys, added up across every disease it touches, cannot be computed
from what is held here.** Each disease's effect estimate for a given lever comes from a different
population, follow-up length and outcome definition; summing or averaging them across dementia, cancer,
heart disease and falls would manufacture a combined number no study measured. That is a structural
limit on what a review of separate studies can produce, not a gap a bigger meta-analysis eventually
closes — closing it would need a single study designed to track the combined outcome directly, and none
exists.

<div class="recent-update" data-last-updated="2026-09-09">

## What to do

Most people chasing better odds against dementia, cancer and heart disease do not need a different diet
or routine for each disease. A short, shared list of changes lowers the risk of several of them at once:
stop smoking, keep blood pressure and cholesterol down, manage blood sugar, carry less body fat, stay
physically active, and drink less alcohol. Staying active is the single most useful item on that list,
because it is the one lever that also keeps the body working day to day — muscle, bone, balance — not
only diseases at bay over decades. Nothing sold as a substitute matches it.

For most of these levers the individual payoff is modest, and most of the evidence behind them is
observational rather than proof from a trial that changing the behavior changes the disease. The
clearest exception is blood pressure: lowering it in a randomized trial reduced the number of people who
went on to develop dementia. The benefit to any one person was small, but it was real, and it arrived as
a bonus on a treatment already worth doing for the heart — not from a separate brain-health regimen.

The reverse bet has not paid off. A packaged program of brain games, diet coaching and supplements, sold
specifically to prevent dementia, can move a cognitive test score in some people, but it has not been
shown to keep people from developing the disease — including when the program targets people already at
higher risk.

The details many people spend the most energy on — cutting packaged food, adding more fruit and
vegetables, chasing flavonoid-rich foods or fish-oil pills, fixing sleep — mostly work, to the extent they
work at all, by nudging the same handful of levers already listed, not by adding a new one. They are
worth doing as part of a generally sound diet and routine. They are not worth optimizing on their own for
brain health.

The ranking shifts with age. A younger adult with low near-term risk still benefits from acting early,
because several of these diseases develop over decades and the levers that prevent them work best pulled
sooner rather than later. Older adults gain the most from a different set — resistance exercise, adequate
protein, and balance training that protect muscle, bone and the ability to avoid a fall. One caution runs
the other way: losing weight helps prevent several of these diseases in someone carrying excess fat, but
it can harm an already-frail older adult, so it is not a universal recommendation late in life.

None of this adds up to a single number worth optimizing. It adds up to a short list, pulled in the right
order, and adjusted as a person ages.

> [!info] Evidence box
>
> | | |
> |---|---|
> | **Question** | 'For an adult deciding how to lower their risk of the diseases of ageing -- cardiovascular disease, cancer, dementia, Parkinson''s, frailty/sarcopenia, osteoporosis: which modifiable exposures move which disease, how much, how certainly, do the diseases share a common core of levers or need separate regimens, and how does the ranking shift by age stratum?' |
> | **Evidence included** | 21 sources — 13 gold, 8 high |
> | **Overall certainty** | **Medium** (see [[Rating Certainty of Evidence]]) |
> | **Source-selection note** | All sources are gold or high tier. |
> | **Last updated** | 2026-09-09 · Independently reviewed: No · [Full edit history](https://github.com/codinguncut/evidenced.health/commits/main/content/deliverables/Age-Related%20Diseases.md) |

</div>

## References

---
type: framework
question: "For an adult starting or stepping up exercise, how large is the risk that a bout triggers sudden cardiac death or a heart attack, who carries that risk, what lowers it, and who needs medical clearance before starting?"
aliases: [Exercise-Related Sudden Cardiac Death, Exertion-Triggered Myocardial Infarction, Is Exercise Dangerous for the Heart, Acute Cardiac Risk of Exercise, Exercise Cardiac Safety, Triggering of Cardiac Events by Exertion, Sudden Death During Exercise, Exercise Preparticipation Health Screening, Preparticipation Screening, Medical Clearance Before Exercise, ACSM Preparticipation Algorithm, Do I Need a Doctor Before Starting Exercise]
authors: [Franklin, Barry A.; Thompson, Paul D.; Al‐Zaiti, Salah S.; Albert, Christine M.; Hivert, Marie‐France; Levine, Benjamin D.; Lobelo, Felipe; Madan, Kushal; Sharrief, Anjail Zarinah; Eijsvogels, Thijs M.H.; Riebe, Deborah A.; Garber, Carol Ewing; Whitfield, Geoffrey P.; Magal, Meir; Pescatello, Linda Shannon; Blissmer, Bryan J.; Deschenes, Michael R.; LaMonte, Michael J.; Lee, I-min M; Nieman, David Christopher; Swain, David P.; Niemeijer, Andre; Lund, Hans; Stafne, Signe Nilssen; Ipsen, Thomas; Goldschmidt, Cathrine Luhaäär; Jørgensen, Claus Thomas; Juhl, Carsten B]
sources: [Franklin - Exercise-Related Acute Cardiovascular Events AHA 2020, Riebe - ACSM Preparticipation Health Screening 2015, Garber - ACSM Quantity and Quality of Exercise Position Stand 2011, Niemeijer - Exercise Therapy Adverse Events 2020]
cluster: activity
confidence: low
relationships:
  related_to: ["[[Physical Activity Dose and Mortality]]", "[[Cardiorespiratory Fitness and Mortality]]", "[[Supervised vs Unsupervised Exercise]]", "[[The U-Shaped Association Artifact]]", "[[Exercise Safety in Osteoporosis]]", "[[Is the Exercise Modality Doing Any Work]]", "[[Aspirin for Primary Prevention of Cardiovascular Disease]]", "[[Baseline Risk and the Relative-Absolute Split]]", "[[Training Load Progression and Running Injury]]"]
created: 2026-10-21
updated: 2026-10-29
self_critiqued: 2026-10-22
---

The route-(c) harm facet of the activity cluster: the *transient* cardiac risk of a bout of exertion,
held apart from the *long-run* benefit on [[Physical Activity Dose and Mortality]]. Two consensus
statements with overlapping authors, neither with a stated search method. The main one is an
AHA scientific statement (consensus design, endorsed by ACSM and AACVPR) that names **no search
method** — `srcgrep` for `literature search` / `search strategy` / `PubMed` / `MEDLINE` / `systematic search`
returns 0 across chunks 01-03. Every number below is a statement-grade secondary citation; the
underlying designs are named per row (case-crossover, case-control, registry, one 7-study MA).
[@franklin2020acute] The ACSM 2015
preparticipation consensus statement (Riebe et al.), also with no stated search method, supplies the screening
algorithm plus some relative- and absolute-risk figures.
The two documents share authors (Franklin, Thompson) and cite the same triggering primaries, so where they
agree that is one body of expert opinion, not two independent routes.
[@riebe2015screen]

## Bottom line

- **Relative risk during a bout is large for vigorous exertion in the inactive (estimates for moderate,
  or pooled moderate-to-vigorous, exertion run 1.6-2.4); absolute risk is very low.** The statement's own
  summary: «When expressed as an absolute risk, acute events are very rare, with only 0.31 to 2.1 SCDs
  per 100 000 person-years.» [@franklin2020acute]
  That denominator includes non-exercisers; per bout, the Physicians' Health Study figure is 1 SCD per
  1.51 million episodes of vigorous exertion.
  [@franklin2020acute]
- **The rise in relative risk is largest in one stratum:** the habitually sedentary with known or occult
  heart disease doing unaccustomed strenuous work —
  «This is particularly true among habitually seden- tary individuals with known or occult CVD performing unaccustomed strenuous PA.»
  [@franklin2020acute]
- **Regular activity shrinks the transient excess** (the gradient below). So the harm argues for
  *graded entry*, not for staying inactive — the statement's net: «Despite such caveats, the benefits
  associated with long-term exercise training outweigh the risks for the majority of the population.»
  The caveats it refers to are cardiac patients (where high-intensity, high-volume activity may raise
  mortality) and ARVC (possibly also lamin A/C mutations); the same paragraph rejects a U-shape for the general population («Longevity data
  argue against the U-shaped relationship.»). The long-run upper-arm question is handled on
  [[The U-Shaped Association Artifact]]. [@franklin2020acute]
- **Who needs medical clearance (ACSM 2015, consensus).** Inactive, with no known cardiovascular, renal
  disease or diabetes and no symptoms: start light-to-moderate aerobic exercise without clearance and
  progress gradually. Inactive with known disease, or anyone with symptoms: clearance first (symptoms
  during exercise mean stop, then seek clearance). Already exercising regularly with known disease and no
  symptoms: moderate needs no new clearance; vigorous needs clearance (one from the last 12 months suffices if nothing has changed). Basis: consensus; the panel reports a «lack of
  evidence that medical clearance and exercise testing (28) are effective». Decision table and caveats in
  the screening section below. [@riebe2015screen]

## Relative risk during and just after a bout

| Outcome | Population (design) | RR during/after exertion | Habitual-activity gradient |
|---|---|---|---|
| SCD | PHS men (prospective case-crossover) | ≈17-fold | see note: least active 50-74 vs regular 2-11 across PHS + Slovenia |
| SCD | Slovenia men + women (retrospective case-crossover) | 3-fold | see note |
| SCD | NHS women (prospective case-crossover) | 2.4 (1.2-4.6) | <2 h/wk 9.0 (3.3-24.3); ≥2 h/wk 1.5 (0.61-3.61) |
| MI | 7-study MA, n=5503 | 3.45 (2.33-5.13), heterogeneous | least active 4.5-107; most active 0.88-3.3 (Riebe prints 0.86-3.3, see below) |
| MI | INTERHEART, 12,461 first MIs, 52 countries (case-crossover) | 2.3 (2.0-2.7), printed as 95% CI; PAR 7.7% (see Limits for the OR 2.31, 99% CI variant) | none by baseline PA category |
| MI | Augsburg, moderate exertion ≈5 METs, within 2 h (case-crossover) | 1.6 (1.2-2.1) | — (an earlier study from the same region found no elevation with moderate exertion) |

[@franklin2020acute] The SCD habitual-activity
gradient is a range across two studies, not a PHS-only figure: it reads «RR=5068 to 7448» / «RR=268 to
1148» in the PDF text — reference superscripts fused onto the values, decoding to 50 (ref 68, Slovenia)
to 74 (ref 48, PHS) and 2 (ref 68) to 11 (ref 48) via the reference list (chunk 02). The MA's frequency gradient: «In a meta-regression
analysis, the RR of MI associated with episodic PA was decreased by ≈45% for each additional time per
week a person habitually exercised.» In 2 studies the SCD excess stayed elevated even in the most
active men, so regular activity attenuates the excess without abolishing it.
[@franklin2020acute] Riebe's summary of
the same MA (Dahabreh & Paulus 2011) adds the SCD arm: «Furthermore, these authors found that for every
additional exercise bout per week, there was 30% re- duction in the risk of SCD and 45% reduction in the
risk of AMI during physical activity (12).» It gives the most-active AMI range as 0.86-3.3 where Franklin
gives 0.88-3.3 for the same MA. Both describe the same quantity (the RR of exertion-related AMI in the
most habitually active groups of Dahabreh & Paulus 2011): Riebe chunk 01 prints «only 0.86–3.3»,
Franklin chunk 01 prints «(0.88–3.3)». The lower bound differs by 0.02 and the MA is not held, so the
discrepancy is recorded, not resolved; it does not change the reading (a small or absent excess in the
most active). Riebe
also gives the MA's SCD estimate, which the table lacks: «A recent meta-analysis reported a fivefold
increased risk of SCD and 3.5-fold increased risk of AMI during vigorous- intensity physical activity (Q6
METs) (12).» (`Q` = ≥; no CI given.) And it sizes the residual excess in the most active: in the Onset
Study the AMI risk during vigorous work «was almost twice that at rest even for individuals who exercised
vigorously for 1 h on 5 or more days per week».
[@riebe2015screen]

- **Intensity is relative, not absolute.** The ≥6 MET cut for vigorous activity misses the person: «the
  cardiac demand of any PA is determined not by the specific metabolic level but by the metabolic demand
  relative to the individual’s functional capacity». A load that is moderate for a fit adult can be
  vigorous (≥60% functional capacity) for an unfit older one. Light exertion was not associated with MI.
  [@franklin2020acute]
- **INTERHEART's null on effect modification is weaker than it looks:** it stratified baseline PA by
  intensity category, not session frequency, the axis the MA gradient runs on (the statement's own
  caveat). [@franklin2020acute]

## Absolute risk — the denominators are not interchangeable

| Setting | Rate | Unit |
|---|---|---|
| PHS men, vigorous bouts | 1 SCD per 1.51 million | episodes |
| Middle-aged women | 1 SCD per 36.5 million | person-hours |
| Fitness facilities | 1 per 1,124,200 nonfatal; 1 per 887,526 fatal | person-hours |
| Supervised cardiac rehab, established CVD | 1 per 58,000 | patient-hours |
| Population exercise-related SCD | 0.31-2.1 | per 100,000 person-years |
| Oregon 35-65 y: sports SCA vs all other SCA | 2.1 vs 55.5 | per 100,000 person-years |
| Marathon/half (RACER, 10.9 M runners) | 0.39, labelled SCA but ≈ the death rate (see note); men 0.90, women 0.16 as given, arrest-vs-death unclear | per 100,000 participants |
| Triathlon (>9 M participants >30 y) | 1.74 | per 100,000 participants |
| Rhode Island joggers (Riebe) | 1 death per 396,000 | hours of jogging |
| YMCA sports centres (Riebe; intensity undocumented) | 1 death per 2,897,057 | person-hours |
| Marathon/half (RACER, via Riebe) | 0.20 cardiac arrests, 0.14 SCD | per 100,000 runner-hours |

[@franklin2020acute] The last three
rows are from Riebe, which reports RACER as 1 arrest per 184,000 and 1 SCD per 256,000 runners and
converts them to runner-hours. [@riebe2015screen] The RACER row above carries Franklin's label: «an SCA incidence rate of 0.39 per 100 000
participants», from «59 cases of SCA» of which «42 (71%) were fatal» among 10.9 million. 59/10.9 M is
0.54 per 100,000 (1 per 184,000) and 42/10.9 M is 0.39 (1 per \~259,000), so 0.39 is arithmetically the
death rate, the same figure as Riebe's 1 SCD per 256,000; the all-arrest rate is about 0.54.
[@franklin2020acute] [inferred from @franklin2020acute; @riebe2015screen]
On the
cardiac-rehab row the source adds «but still low». In Oregon only 63 of 1247 SCAs (5%) were
sports-related. Exercise-related OHCA survival is higher than non-exercise (46.2% vs 17.2%, NL).

 The rows use four incompatible denominators (episodes, person-hours, person-years,
race participants) and cannot be ranked against each other without exposure-time data the statement
does not give. What *is* comparable within one population is the Oregon row: across adults 35-65,
sports-related SCA is a small slice of all sudden cardiac arrest.

## Who carries the risk — strata

- **Route (a), baseline risk — age.** Absolute incidence rises over 35, and the greatest *numbers* of
  exertion-related SCDs fall between 40 and 64 (a count, not a peak rate); NL >35 y 3.0 vs <35 y 0.3 per
  100k p-y; French men 0.4 (15-24 y) to 17.5 (55-64 y) per 100k per year, with no such rise in French
  women. Whether age modifies the *relative* risk is unsettled: a German study found a higher RR of MI in
  older people, the larger INTERHEART did not.
  [@franklin2020acute] The cause shifts
  with age: atherosclerotic CAD in middle-aged and older adults.
  [@franklin2020acute]
- **Route (a) — sex.** Exercise-associated SCD is 15- to 20-fold higher in men (women 0.04-0.3 vs men
  0.5-5.8 per 100k p-y); at 45-55 y women's risk is 3% (1.5%-7.5%) of men's. Most studies find no sex
  difference in the RR of MI. Women are under-represented in the triggering studies (the NHS cohort had to
  pool moderate and vigorous exertion for lack of events).
  [@franklin2020acute]
- **Route (b), effect modification on positive evidence — habitual activity.** The MA meta-regression and
  the PHS / NHS within-study gradients all point the same way. This is observational and partly
  between-study, but it is a measured interaction, not a mechanistic guess.
  [@franklin2020acute] [inferred from @franklin2020acute] Not
  fully independent: the PHS (ref 48), NHS (ref 45) and MIOS (ref 41) papers share authors (Mittleman on
  refs 41 and 48; Albert, Manson and Chae on refs 45 and 48), and Christine Albert, senior or lead author on the PHS and NHS papers, co-wrote
  the statement (reference list, chunk 02). The Slovenia study is the independent arm of the SCD gradient.
  The statement faults INTERHEART for stratifying by intensity category rather than frequency; it raises
  no matching limits on the gradient studies. The wiki's own caveats for them: recalled habitual
  frequency, and the chance that the inactive are also the less fit or carry occult disease.
- **Route (c) — known heart disease, and the paradox.** HF or post-MI with EF <40% carries the greatest
  risk, and supervised rehab runs at 1 event per 58,000 patient-hours. Yet most exertional events strike
  people *without* diagnosed disease: in Oregon 15-16% of sports SCAs (35-65 y; the statement gives both figures) had known heart disease vs 30%
  of other SCAs, and most exertional AMIs occur without prior CHD. Some but not all studies even report a
  higher RR of exertional AMI in people *without* established angina or CHD.
  [@franklin2020acute] [inferred from @franklin2020acute] So
  screening keyed to a known diagnosis cannot reach most of the people who have an exertional event.
- **Competitive vs recreational.** Competitive athletes ≈4.5x recreational (10-35 y), but the larger
  recreational pool means most young exertional SCDs occur in noncompetitive participants.
  [@franklin2020acute]

## Activities and settings with higher event rates

- The statement lists activities that «may be associated» with higher event rates: racquet sports,
  downhill skiing, marathon and triathlon, basketball; mountaineering for certain individuals
  (predominantly men); snow shoveling (probably because it can produce rate-pressure products above a
  maximal treadmill test) and deer hunting. Mountain hiking runs at 1 SCD per 2,940,000 mountain-hours,
  about the same as jogging, but 1 cardiac event of any kind (including ACS) per 957,000 mountain-hours;
  the risk is cut >5-fold by ≥1 night acclimatizing above 1300 m. [@franklin2020acute]
- Endurance races: nearly half of marathon SCDs occurred in the final mile, and the male rate rose from
  0.71 to 2.03 per 100k over 2000-2010; two-thirds of triathlon deaths happened during the swim and 38%
  of those with known experience were first-timers. The statement advises competitors *at risk for cardiac
  events* to hold pace through the race rather than sprint the final miles. [@franklin2020acute]

## What lowers it — statement-grade practice, not trial-tested

[@franklin2020acute] The prudent-program
advice, quoted as given: «Previously inac- tive patients with or without known CVD should also be advised
to avoid unaccustomed, vigorous physical exertion and highly strenuous activities (eg, racquet
sports,95 snow removal106), to recognize potential exertion-related warning signs and symptoms (eg, chest
pain or pressure, lightheadedness, palpitations or arrhythmias) that require cessation of exercise and
medical evaluation, and to adapt the exercise to the environment.» And for the healthy novice:
«Ostensibly healthy, inactive individuals starting to exercise should begin slowly, generally with a
walking program, and increase the intensity and duration of exercise as their tolerance permits.»

 Cheap, reversible, low-harm, and aimed at the exact stratum where the excess sits, so per the
firmness rule it gets a plain do-this, with the basis labelled (consensus practice; the triggering
evidence is case-crossover, and no trial randomized progression schemes against event outcomes):

- **If you are inactive, start with walking and build intensity gradually**, not with a vigorous
  session. The basis is a between-person gradient (regular exercisers carry a smaller per-bout excess),
  not a measured time course: the statement gives no figure for how fast the excess falls as a habit forms,
  and part of the gradient may be that the least fit and those with occult disease are the inactive ones.
  The statement's own rule: «novice exercisers should follow a gradual increase in exercise intensity to
  increase CRF without greatly increasing their cardiovascular risk by starting with vigorous exercise».
  [@franklin2020acute]
- **With known heart disease, the default is supervised or home-based cardiac rehab, then walking pushed up
  to moderate intensity** (40-59% of functional capacity, 3.0-5.9 METs), «provided they remain
  asymptomatic». The statement's worry is under-dosing: patients start rehab at about 2-3 METs and
  up-titration is often too slow, especially once monitored supervision ends, and moderate intensity sits below the ≥6 MET vigorous level linked to triggering.
  [@franklin2020acute]
- **With an inherited, structural or arrhythmic heart condition** (eg Marfan syndrome, inherited
  cardiomyopathies), vigorous work needs specialist guidance; the statement discourages highly competitive
  or strenuous endurance exercise without careful consultation and encourages leisure-time low- to
  moderate-intensity activity. [@franklin2020acute]
- **Warm up and cool down; scale intensity down in heat, humidity, or above \~1500 m** until acclimated
  (the statement's >1500 m line in chunk 02 and its 1300 m acclimatization figure in chunk 01 both cite the
  same altitude study, ref 101).
- **Stop and get evaluated for** chest/neck/jaw/arm pain or pressure, unusual breathlessness,
  lightheadedness, palpitations or an irregular heartbeat (Table 2 also lists ankle swelling and
  burning or cramping in the legs on short walks). Warning signs preceded 29% of young SCAs in Portland.
  [@franklin2020acute]
- **Avoid unaccustomed strenuous one-offs** — a first shovel of heavy snow, an untrained race sprint.
- **Survival after an arrest depends on the people nearby.** In the marathon/half-marathon registry,
  «The strongest predictors of survival of SCA were early initiation of bystander-administered
  cardiopulmonary resuscitation, use of automated defibrillators, and an underlying di- agnosis other than
  HCM.» And: «Regular emergency drills, bystander cardiopulmonary resuscitation, and the use of automated
  external defibrillators have increased survival rates in the general157 and athletic158 popula- tion.»
  For a gym, club or race organizer that means a defibrillator on site and staff drilled to use it.
  [@franklin2020acute]

**The 2011 ACSM stand's grades on the same precautions (same lineage, not independent).** The ACSM
quantity-and-quality position stand graded these items with NHLBI categories (B = RCTs, limited data;
C = nonrandomized or observational; D = panel consensus): exercise is associated with an increased risk of
adverse CHD events (B); warm-up, cool-down, flexibility exercise and gradual progression «may reduce the
risk of CVD events and musculoskeletal injury during exercise» (C); consultation with a physician and diagnostic
exercise testing «may reduce risks of exercise if medically indicated, but are not recommended on a routine
basis» (C); a fitness professional for novices or people with chronic disease (D); screening
for and education about warning signs (C).
[@garber2011acsm]
Its one datum beyond the AHA material: the Behavior Change Consortium's 11 activity interventions in more
than 5500 middle-aged and older people used minimal or more extensive screening, «but no study reported a
serious CHD event, suggesting that the former can be highly effective. Few data support the role of routine
diagnostic exercise testing as an effective method for reducing the risk of exercise-related CHD events».
[@garber2011acsm]
 Zero events across studies that each used one screening approach (a between-study split, not
randomised arms; the stand reports no within-study comparison of screening levels and no unscreened
comparator) bounds the event
rate low, but it cannot show that minimal screening matches extensive screening, or that screening beats
none: with no events there is nothing to compare. The stand's CVD-risk paragraph
cites the AHA 2007 statement (ref 362: Thompson, Franklin et al.), which the AHA 2020 statement updates
(its title ends «Placing the Risks Into Perspective–An Update»); Franklin, Barry A. co-authors the
2011 stand, the AHA 2020 statement and the ACSM 2015 algorithm, and Garber, Carol Ewing co-authors the 2011
stand and the 2015 algorithm, so agreement across the three is shared lineage.
[@franklin2020acute] (title)

## Screening before starting

- The older AHA/ACSM questionnaire would have sent 95.5% of women and 93.5% of men aged ≥40 (NHANES) to
  a physician, itself a barrier to starting. The statement endorses the ACSM 2015 algorithm, which drops
  age and risk-factor counting for four variables: current activity, known cardiovascular/metabolic/renal
  disease, symptoms, and desired intensity. Inactive people without disease or symptoms may start
  light-to-moderate exercise without medical clearance and, provided they remain asymptomatic, progress
  gradually in intensity.
  [@franklin2020acute] The algorithm's
  primary text, decision table and stated rationale are in the subsection below. Franklin and Thompson
  co-authored both documents, so agreement between them is shared authorship, not independent backing.
- USPSTF 2018 recommends against resting or exercise ECG screening in low-risk adults; the companion USPSTF review of
  exercise-ECG screening RCTs found no improvement in health outcomes despite focusing on higher-risk
  populations with diabetes. The statement says exercise testing «should be considered» in high-risk
  middle-aged or older people, particularly inactive men with diabetes planning high-intensity endurance
  sport, and lists others who «might benefit»: sedentary people with multiple risk factors, elevated CAC or
  premature family history who plan vigorous exercise, those suspected of ignoring symptoms, and patients
  with critical aortic stenosis, atypical chest pain or palpitations.
  [@franklin2020acute]
- Young athletes: «There is insufficient evidence to justify routine cardiovas- cular screening to
  prevent sports-related acute cardiac events in young athletes.» The next sentence notes the practice
  is nonetheless common (history and physical, with or without ECG); AHA/ACC and ESC differ on ECG.
  [@franklin2020acute]

### The ACSM 2015 preparticipation algorithm — primary text

**What it is.** An ACSM roundtable consensus statement. Its stated method: «After a review of the
scientific literature and extensive discussion, members of the roundtable proposed an evidence-informed
model». No search method and no evidence grading: `srcgrep` for `literature search` / `search strategy` /
`PubMed` / `MEDLINE` / `GRADE` / `level of evidence` / `randomized` / `validat` / `sensitivity` returns 0
across the whole paper (chunk 01). Its purpose is to flag people at raised risk of exercise-related SCD or
AMI, those with disease who may benefit from a medically supervised program, and those who should not
exercise until a condition is controlled. [@riebe2015screen]

**The decision table** (Figure 2, an image read directly from p. 5; scoped to *aerobic* exercise). Entry
question: does the person do regular exercise, defined as «planned, structured physical activity at least
30 min at moderate intensity on at least 3 dIwkj1 for at least the last 3 months» (`dIwkj1` = d/wk in the
PDF text). [@riebe2015screen]

| Regular exercise? | Disease (CV, metabolic, renal) / symptoms | Medical clearance | Then |
|---|---|---|---|
| No | no disease, no symptoms | not necessary | light-to-moderate; may progress gradually to vigorous |
| No | known disease, asymptomatic | recommended | after clearance, light-to-moderate; progress as tolerated |
| No | any symptoms, regardless of disease | recommended | after clearance, light-to-moderate; progress as tolerated |
| Yes | no disease, no symptoms | not necessary | continue moderate or vigorous; progress gradually |
| Yes | known disease, asymptomatic | not for moderate; recommended before vigorous (within the last 12 months if no change in signs/symptoms) | continue moderate; after clearance, may progress gradually |
| Yes | any symptoms | stop and seek clearance | return after clearance |

The text states the first row as: «Physically inactive but otherwise healthy asymptom- atic persons may
begin light- to moderate-intensity exercise without medical clearance and, in the absence of symptoms,
progress gradually in intensity as recommended by current ACSM exercise prescription guidelines (2,19).»
*CVD* = cardiac, peripheral vascular or cerebrovascular disease; *metabolic* = type 1 or 2 diabetes;
*symptoms* = ischemic-type pain or discomfort (chest, neck, jaw, arms), breathlessness at rest or on mild
exertion, dizziness or syncope, orthopnea or paroxysmal nocturnal dyspnea, ankle edema, palpitations,
intermittent claudication, a known heart murmur, unusual fatigue with usual activities. *Medical
clearance* = «approval from a health care professional to engage in exercise»; the clinician, not the
algorithm, decides what evaluation (if any) that involves. [@riebe2015screen]

**What changed, and the reasons given.** The old ACSM process counted CVD risk factors: asymptomatic with
≥2 risk factors meant a medical exam before *vigorous* work, and symptoms or known cardiovascular,
pulmonary, metabolic or renal disease meant an exam plus a diagnostic exercise test before even *moderate*
work. The 2015 process drops risk-factor counting, the low/moderate/high risk classes, and automatic
referral for pulmonary disease. [@riebe2015screen]

- *Risk factors probably cannot pick out the rare event (argued, not measured).* «First, the high prevalence of CVD risk factors among
  adults, combined with the extreme rarity of exercise-related SCD and AMI, suggests that the ability to
  predict these rare events by assessing CVD risk factors is low (42).» The argument is base-rate
  arithmetic (65 million US adults with hypertension and 71 million with high LDL vs a small fraction of
  600,000 annual heart-disease deaths); ref 42 is a 1979 series of 18 jogging deaths whose first author,
  Thompson, P.D., co-wrote this paper. No sensitivity,
  specificity or predictive value is reported. [@riebe2015screen]
- *Over-referral as a barrier.* «A recent study found that 95% of men and women over 40 yr of age would be
  advised to consult a physician before exer- cise based upon the previous risk factor-based exercise pre-
  participation health screening process (48).» Ref 48 (Whitfield, NHANES) is by a co-author of this paper
  and is the same study as Franklin's 95.5%/93.5% figure above. Unneeded referral «may lead to a high
  rate of false-positive exercise test responses in some populations», with follow-up studies that were
  not needed. [@riebe2015screen]
- *Age alone is not a referral trigger.* «Although increasing age is a risk factor for CVD (men, Q45 yr;
  women, Q55 yr), there is no evidence that age per se is a strong predictor of exercise-associated SCD and
  AMI (20), and the referral of individuals for medical clearance solely on the basis of age has been shown
  to result in superfluous health care referrals (6,19,46).» (`Q` = ≥ in the PDF text.)
  [@riebe2015screen]
  [inferred from @riebe2015screen; @franklin2020acute]
  Not joined with the age bullet under *Who carries the risk*: Riebe speaks of age *per se* (net of the
  disease it brings) as a predictor of exertional events, and of age-alone referral as superfluous;
  Franklin's figures are crude absolute incidence, which rises steeply with age in
  French men (0.4 to 17.5 per 100k per year from 15-24 to 55-64 y), mostly through atherosclerotic CAD. Dropping
  age as a referral trigger does not make age irrelevant: for an older inactive starter, graded entry and
  symptom awareness matter more, not less.
- *Diabetes and renal disease stay in* because some evidence links them to exercise-related events;
  pulmonary disease leaves because it does not raise exercise cardiovascular risk (the attached inactivity
  may), with a caution to watch for cardiac signs in smokers with COPD.
  [@riebe2015screen]
  [inferred from @riebe2015screen] The base-rate argument is applied
  unevenly: diabetes and known disease are also common relative to exertional events, and they stay in on
  a relative-risk signal, not on any shown predictive value. The retained branch has the same unmeasured
  predictive-value problem the panel used to drop risk factors.

**The evidence that screening works — none, by the panel's own account.** «There is a lack of evidence
that medical clearance and exercise testing (28) are effective in mitigating the risk of exercise-related
cardiovascular events. There is also a lack of consensus among major organizations regarding the ex- tent
of medical evaluation needed as part of the exercise preparticipation health screening process (2).» The
paper sets out the spread: ACC/AHA (2013 exercise standards) recommend exercise testing before moderate or
vigorous work when CVD risk is raised, acknowledging «conflicting evidence and divergent expert opinions»;
PAGAC 2008 says symptomatic or diseased people who want to begin *vigorous* activity and have no plan yet
«may wish to do so» with their provider, but mandates no contact; USPSTF 2012 recommends against routine resting or exercise ECG in low-risk asymptomatic adults and
found insufficient evidence on exercise testing before starting activity. The panel calls its own
recommendations «research informed when available».
[@riebe2015screen] [inferred from @riebe2015screen] So the guidance set
disagrees on the same question, while the bodies that characterize the evidence converge on it being
lacking (Riebe's panel), insufficient (USPSTF, on testing before activity) or conflicting (ACC/AHA), as
Riebe reports them. The disagreement is consistent with an evidence base that does not decide the
question; all three characterizations reach the page through Riebe alone, the USPSTF and ACC/AHA ones second-hand.

**The load-bearing assumption under the no-clearance rule.** «Less is known about the risks of SCD and AMI
during light- to moderate-intensity exercise, but they are as- sumed to be substantially lower (44).» The
triggering research centres on vigorous-to-near-maximal work.
[@riebe2015screen] Franklin's statement cites
measurements Riebe did not, both older than Riebe: von Klot 2008 (Eur Heart J, ref 71; RR 1.6 for MI,
co-authored by Mittleman) and Willich 1993 (NEJM, ref 60; no elevation with moderate exertion). So
Riebe's «assumed» was partly checkable when written (type-F; shared authors, so not an independent route).
[@franklin2020acute]

| Parameter | Riebe 2015 — quoted + locus | Franklin 2020 — quoted + locus | Same quantity? |
|---|---|---|---|
| Acute MI/SCD risk during moderate exertion vs rest | «assumed to be substantially lower» (no figure), chunk 01 | «moderate exer- tion (METs=5; RR, 1.6 [95% CI, 1.2−2.1])» in one Augsburg case-crossover study; an earlier study from the same region found no elevation; chunk 01 | partly — Franklin's figure is MI only, within 2 h of moderate exertion, in one case-crossover study; Riebe's assumption covers SCD and AMI with no value and no stated comparator. A gap Franklin partly fills for MI, not a disagreement |
| Light exertion | not separately addressed | «Both studies demonstrated no association between lighter levels of exertion and AMI.» chunk 01 | yes (same outcome, same comparator) |

[inferred from @riebe2015screen; @franklin2020acute]
Moderate exertion is therefore not risk-free in the one positive study: RR 1.6 for MI is about half the
meta-analytic 3.5-fold AMI figure for vigorous (≥6 MET) work that Riebe cites (ref 12, Dahabreh & Paulus
2011) and well below the «approxi- mately sixfold (31) to 17-fold (1)» single-study range, which spans
nonfatal AMI (sixfold, ref 31, the Onset Study) and SCD (17-fold, ref 1, Albert 2000, the PHS triggering
study). This is an indicative cross-study comparison only: the hazard windows differ (within 2 h vs
«during» the bout for the meta-analysis), and the 17-fold end is for sudden death, not MI. Light exertion showed no association in two
studies. The no-clearance rule for light-to-moderate starts stands on that
plus the rarity of events — not on any trial of screening.

**Intensity is defined on two scales at once.** Figure 2's bands give relative (%HRR or VO2R), absolute
(METs) and perceived (RPE, breathing) anchors together — moderate is «40% to G60% HRR or V˙ O2R, 3 to G6
METs, 12–13 RPE, an intensity that causes noticeable increases in HR and breathing» (`G` = <) — without
saying which governs when they disagree. [@riebe2015screen]
Franklin's statement argues for the relative scale for cardiac load: an absolute ≥6 MET cut «does not account for the fact
that the cardiac demand of any PA is determined not by the specific metabolic level but by the metabolic
demand relative to the individual’s functional capacity».
[@franklin2020acute] [inferred from @riebe2015screen; @franklin2020acute]
For an unfit older starter, an activity inside Riebe's absolute moderate band (3 to <6 METs) can sit in
the vigorous relative band: at a peak capacity of 5 METs, a 4-MET activity is 75% of VO2 reserve
((4-1)/(5-1)), above the 60% moderate ceiling. So *light-to-moderate* in the first row is best read by effort — heart rate and breathing noticeably up, RPE 12-13 — not by the activity's MET listing.

**What *regular exercise* means here is not the activity guideline.** A type-B distinction:

| Parameter | Riebe 2015 — quoted + locus | ESC 2021 activity recommendation — quoted + locus | Same quantity? |
|---|---|---|---|
| Threshold for counting as active | «planned, structured physical activity at least 30 min at moderate intensity on at least 3 dIwkj1 for at least the last 3 months» (≥90 min/wk structured exercise, sustained 3 months), chunk 01 Fig 2 | «strive for at least 150 - 300 min a week of moderate- intensity or 75 - 150 min a week of vigorous- intensity aerobic PA, or an equivalent combina- tion thereof», chunk 03 (class I, level A) | no — Riebe's figure classifies a person as active (only *planned structured* exercise, sustained 3 months); the ESC range is a recommendation target for moderate or vigorous aerobic PA, with no structure or duration condition |

[inferred from @riebe2015screen; @esc2021]
The two thresholds sort some people into opposite camps. Someone doing three 35-minute structured
moderate sessions a week (about 105 min) for the last 3 months counts as active for screening (rows 4-6)
while falling short of the 150-min recommendation; someone who walks or cycles 150+ min/wk for transport
but does no planned exercise counts as *inactive* for screening and, if free of the named diseases and of
symptoms, enters at light-to-moderate before moving to vigorous. Neither cut is wrong. They plausibly
answer different questions (Riebe states no rationale for its cut): the screening cut reads as asking
whether the person is accustomed to sustained moderate work, the 150-min cut whether they get the long-run
benefit. The practical consequence is small, since an *inactive* transport walker enters at a level they
already exceed.

**Prescription, more likely than screening, as the protection (the panel's view).** The conclusion puts the weight on how one
exercises: «the hazard of exercise-related cardiovascular events may more likely be reduced by careful
attention to a safe and effective exercise prescription» — a 2-3-month progressive transitional phase,
warm-up and cool-down, warning-sign education, regular brisk walking for the sedentary, and counselling the
inactive to avoid unaccustomed vigorous-to-near-maximal work. Resistance training is outside the
algorithm: «Because there are few data regarding cardiovas- cular complications during resistance
training, this risk can- not currently be determined but seems to be low (20,21,49).»
[@riebe2015screen]

 **The decision for the sedentary, asymptomatic adult with no known heart, vascular, kidney
disease or diabetes:** start light-to-moderate exercise (judged by effort) without a doctor's visit, build
over about 2-3 months, learn the warning symptoms, and stop and get assessed if any appear. If inactive
with known disease, or with any symptom, get clearance first; if already exercising regularly with known
disease and no symptoms, moderate exercise needs no new clearance and vigorous needs clearance (one from the last 12 months suffices if nothing has changed). The basis is consensus practice, not a trial: no study shows
that clearance or exercise testing prevents events, and an RCT of screening against exercise-triggered
death is infeasible at \~1 event per million-plus bouts (expectancy test — the absence is structural, not a
null). It is cheap and reversible, and it aims at the exact stratum where the excess sits, so it earns a
plain do-this. Franklin's Oregon data above (15-16% of sports SCAs had known heart disease) point the same
way: most people who have an exertional event had no diagnosis to screen on, which is why the safeguard
that reaches them is graded entry plus symptom awareness rather than a clinic visit. The panel itself
bounds the rule: the recommendations «are not a replace- ment for sound clinical judgment», and referral
decisions «should continue to be made on an individual basis».
[@riebe2015screen]

## Pre-exercise drugs

«Collectively, these data and more recent reports63 suggest there is insufficient evidence to recommend
the routine use of either aspirin or β-blockers before strenu- ous PA or sports participation.» The
next sentence leaves room for case-by-case use: «Decisions to recommend these prophylactic agents
requires assessment of the in- dividual patient’s risk and a discussion with the patient of potential
risks and benefits.» Aspirin did not reduce exertion-triggered MI in TIMI II or MIOS, and in RACER no
plaque rupture or thrombosis was found in the 5 runners who died with CHD. The β-blocker evidence is
mixed: a TIMI II analysis suggested protection, while in MIOS users still had RR 4.2 (1.8-9.9) vs 6.2
(4.7-8.2) in nonusers, not a significant difference. Cross-ref [[Aspirin for Primary Prevention of Cardiovascular Disease]].
[@franklin2020acute]

## Cardiac patients and HIIT

HIIT beat moderate continuous training (MICT) on fitness in three meta-analyses of cardiac patients
(+1.78, +1.3 and +1.4 mL/kg/min); in two of them (CHD n=594; HFrEF n=411) the edge disappeared once the
arms were matched for energy expenditure, and the statement judges the benefits «comparable». On harm it
says «Data on the safety of HIIT in clinical populations are scarce.» One systematic review reported an
8% adverse-event rate with HIIT in cardiometabolic disease, and in one large rehab comparison
(Rognmo, n=4846) the event rate was 5.6x higher with HIIT (1 per 23,182 vs 1 per 129,456 patient-hours,
absolute risk low in both; no event counts or CI given; the statement calls it «An- other study»). The statement: «additional long-term studies assessing the
safety, compliance, and morbidity and mortality after HIIT are needed be- fore it can be widely adopted
in patients with known or suspected CAD, especially in unsupervised, non- medical settings.»
[@franklin2020acute] [inferred from @franklin2020acute] The held
umbrella review (Poon 2024) cites the same Rognmo study (refs 53-57) for its claim that HIIT appears safe
even in relatively high-risk populations, without reporting either of its rates, then concludes that
HIIT's safety concerns are not appreciably greater than MICT's. Both sources call the safety
data thin; Poon reads the study as reassuring, Franklin weighs the relative rate. Riebe 2015 (Franklin and
Thompson co-authors) also cites Rognmo (ref 35), without its rates, in a three-reference cluster for
exercise risk being «extremely low»; Franklin reports its 5.6x relative rate as a concern.
[@riebe2015screen] Which reading applies depends on whether one weighs
the absolute or the relative figure; the cheap default for coronary patients is the cautious one (parameter table on
[[Measuring and Raising Cardiorespiratory Fitness]]). The modality comparison lives on [[Is the Exercise Modality Doing Any Work]]; the supervision boundary on
[[Supervised vs Unsupervised Exercise]].

## Synthesis

 **Transient risk vs long-run net — two different quantities.** The RR rows describe the hour
around a bout; the mortality curves on [[Physical Activity Dose and Mortality]] describe years of habit.
The statement holds both and concludes benefit outweighs risk for most people. The magnitudes alone keep
them from conflicting: the absolute acute excess is of the order of one death per million-plus vigorous
bouts, and in Oregon sports-related SCA ran at 2.1 against 55.5 per 100k person-years for all other SCA.
The habitual-activity gradient adds that the people who accrue the long-run benefit also carry the
smallest per-bout excess. The decision consequence is a
**progression rule, not an avoidance rule** — the relative excess is largest for *unaccustomed vigorous
work by the habitually inactive*, so the lever is how one starts. The gradient compares people, not one
person over time, so how quickly the excess falls as a habit forms is not measured. This is the cardiac counterpart of the
load-progression logic on [[Training Load Progression and Running Injury]], with a different organ and
far rarer, more severe events.

 **Layer-1 placement.** Exercise-triggered events do not reorder the hierarchy: for the
inactive stratum, inactivity is the big rock and stays the big rock. They add a route-(c) constraint on
*how* it is pulled — which is why the cheap safety rules above earn a plain do-this.

## Limits

- **Two shared-author consensus statements, no stated search method in either.** Selection of the cited studies is unauditable; the
  underlying primaries are not held.
- **Case-crossover designs rely on recall** of exertion in the hour before the event (by survivors or
  proxies), and most triggering studies are in men.
- **Heterogeneity:** the MI MA reports substantial between-study heterogeneity; the least-active RR range
  (4.5-107) is too wide to carry a point estimate.
- **Internal inconsistency (Franklin, two labels for what looks like one estimate):** chunk 01 prints
  «the adjust- ed RR of AMI within 1 hour of physical exertion was estimated to be 2.3 (95% CI, 2.0−2.7),
  correspond- ing to a population attributable risk of 7.7% (95% CI, 6.3%−8.8%)»; chunk 02 prints «Any
  PA in the case period was associated with an OR of 2.31 (99% CI, 1.96–2.72), with a population
  attributable risk of 7.7% (99% CI, 6.3%–8.8%).»
  [@franklin2020acute]
  The point estimate, interval bounds and PAR (with identical PAR bounds) match to rounding, so these are probably one INTERHEART estimate printed
  under different labels — RR vs OR (in a case-crossover design the OR estimates the RR), 95% vs 99%
  interval, and *heavy physical exertion* vs *any PA* as the exposure wording. Which labels are correct
  needs the INTERHEART paper, which is not held. Either way the magnitude (\~2.3-fold within 1 h) is the
  same.
- **Fused superscripts:** several values (the PHS and MA gradients) were decoded from PDF text where
  reference numbers merged with digits; the decode is consistent with the reference list but not checked
  against the original PDF layout.
- **No unsupervised-vs-supervised event-rate comparison** exists in the statement; supervised rehab has a
  denominator, home exercise in the same stratum does not.
- **Riebe's wording on relative risk is loose.** Its introduction concedes the risk is
  «transiently in- creased during vigorous-intensity exercise relative to rest, especially in habitually sedentary individuals with known or occult CVD»
  and then says «the absolute
  and relative risks of a cardiovascular event during exercise are extremely low even during vigorous-
  intensity exercise in asymptomatic individuals (35,39,41)». The body reports an «approxi- mately sixfold
  (31) to 17-fold (1)» rise vs rest, not restricted to asymptomatic people, so the two are not strictly
  the same quantity. Read the *absolute* half; calling a multiple of resting risk «extremely low» on the
  *relative* scale does not match the paper's own figures: the «extremely low» sentence is about
  asymptomatic people and makes no number, while the sixfold-to-17-fold figures are multiples of
  resting risk in mixed populations, so the two are related but not the same quantity, and Riebe never
  reconciles them. One of the three supporting citations, ref 35,
  is Rognmo 2012, a study of coronary heart disease patients in rehab, not asymptomatic people.
  [inferred from @riebe2015screen] [@riebe2015screen]
  [@franklin2020acute] (rehab setting)
- **Riebe's text and figure differ on one branch.** For the active person with known disease,
  the text lets those cleared «within the last 12 months» continue moderate exercise without revisiting a
  provider; the figure box says clearance for moderate is not necessary, with no condition, and attaches the
  12-month clause to vigorous work. [@riebe2015screen]
- **No outcome data on the 2015 algorithm** — no referral rate, yield or event rate under the new rule is
  reported (srcgrep scope in the screening subsection). It is a consensus rule built on event rarity, the
  habitual-activity gradient and an assumed lower risk at light-to-moderate intensity.

<div class="recent-update" data-last-updated="2026-10-29">

## Gaps

- **Expectancy test:** an RCT with exercise-triggered death as the outcome is infeasible at
  \~1 event per million-plus episodes, so the absence of trials here is structural, not a null. Case-crossover
  is fit-to-question for triggering.
- **Does a structured progression protocol lower the excess in new exercisers?** No source held tests a
  progression scheme against acute cardiac events — G-gap; the progression advice rests on the gradient,
  not on an intervention trial.
- **Women's triggering risk** at vigorous intensity is under-measured (too few events to separate it).
- **Does the 2015 algorithm change referrals or events?** No held source reports its referral rate,
  missed-case rate or event outcomes — G-gap. An expectancy note: an event-outcome trial is infeasible, but
  an audit of referral rates and adverse events in exercise settings under the new rule is feasible, and
  none is held.
- **Resistance training** is outside the algorithm; its acute cardiac risk is «can- not currently be
  determined but seems to be low» on few data. [@riebe2015screen]
- **Trial-pooled harm data do not reach this question.** The held all-population meta-analysis of
  exercise-therapy RCTs pooled serious adverse events across 378 trials (RR 0.96, 95% CI 0.90-1.02 vs a
  non-exercising control), with «In both exercise and control groups, the most frequent serious adverse
  events were death, hospitalisation, cerebrovascular acci- dent, stroke and hip fracture.» It gives no
  cardiac-event estimate (`srcgrep` `cardiac` / `myocardial` hit only its condition list), and serious
  events were not split by population; the cardiovascular-patient group appears only in the non-serious
  pooling (RR 1.02, 0.78-1.33; 53 trials, 5835).
  [@niemeijer2020]
  On the expectancy test above, this pooling cannot bound a risk of about one event per million-plus
  episodes: events were not attributed to exercise, serious events were not split by population, and
  about half the trials did not report adverse events at all. That is a scope limit of the pooled design, not a null for
  bout-triggered events. [inferred from @niemeijer2020]

</div>

## References

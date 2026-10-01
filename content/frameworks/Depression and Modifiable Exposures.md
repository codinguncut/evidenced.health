---
type: framework
question: Which modifiable lifestyle exposures reduce depression, for whom, by how much, and how confident can we be?
aliases: [Depression, Exercise for Depression, Diet and Depression, Nutritional Psychiatry, Lifestyle Depression, Depression Prevention]
authors: [Noetel, Michael; Sanders, Taren; Gallardo-Gomez, Daniel; del Pozo Cruz, Borja; Lonsdale, Chris; Molendijk, Marc; Martinez-Gonzalez, Miguel Angel; Jacka, Felice N; O'Neil, Adrienne; Opie, Rachelle; Itsiopoulos, Catherine; Berk, Michael; Bi, Zheng; Jiao, Zhiyu; Li, Jinju; Fang, Zhaohui; Bushi, Ganesh; Khatib, Mahalaqua Nazli; Rohilla, Shivam; Singh, Mahendra Pratap; Uniyal, Nidhi; Shabil, Muhammed; Liao, Yuhua; Xie, Bo; Zhang, Huimin; He, Qian; Guo, Lan; Subramanieapillai, Mehala; Fan, Beifang; Lu, Ciyong; McIntyre, Roger S; Deane, Katherine H O; Jimoh, Oluseyi F; Biswas, Priti; O'Brien, Alex; Hanson, Sarah; Abdelhamid, Asmaa S; Fox, Chris; Hooper, Lee; Musazadeh, Vali; Keramati, Majid; Ghalichi, Faezeh; Kavyani, Zeynab; Ghoreishi, Zohre; Abu-Zaid, Ahmed; Zarezadeh, Meysam; Mekary, Rania A; Okereke, Olivia I]
sources: [Noetel - Exercise Depression Network Meta-Analysis 2024, Molendijk - Diet Quality Depression Dose-Response Meta-Analysis 2017, Jacka - SMILES Trial Diet Depression 2017, Liao - Omega-3 PUFA Depression 2019, Deane - Omega-3 Prevention Depression 2019, Bi - GLP-1 Depression Risk 2026, Bushi - GLP-1 Suicidal Ideation 2025, Musazadeh - Vitamin D Depression Umbrella 2023, Marx - Saffron Depression Anxiety 2019, Okereke - VITAL-DEP Vitamin D Depression 2020]
cluster: depression
nucleus: true
confidence: low
relationships:
  related_to:
    - Physical Activity Dose and Mortality
    - Muscle-Strengthening Activity and Mortality
    - Stress Management and Cardiometabolic Health
    - Mediterranean Diet and Cardiovascular Events
    - Surrogate Outcomes
    - The U-Shaped Association Artifact
    - Measurement Error in Dietary Assessment
    - Inflammation as a Modifiable Lever
    - Layer 1 - Ranking Interventions for a Stratum
    - Antidepressants for Depression
    - GLP-1 and Reward Beyond Food
    - Deficiency Repletion vs Enhancement
    - Acute Carbohydrate Effects on Mood
    - Magnesium Supplementation and Subjective Anxiety
created: 2026-08-09
updated: 2026-09-28
self_critiqued: 2026-09-28
---

Depression is on the wiki's outcome menu as a **patient-important QoL outcome** (the 2026-08-08
QoL-extension) and through its **physiological intersection** with physical health — depression
predicts and worsens cardiovascular disease, and shares the HPA / inflammation / metabolic channels the
wiki already tracks -> [[Stress Management and Cardiometabolic Health]], [[Inflammation as a Modifiable Lever]]. So *modifiable-exposure -> depression* is a legitimate appraisal claim. But it is held
**peripherally and proportionately**: physical health is the focus, and this page is one nucleus over
several modifiable levers, not a mental-health sub-domain.

**The drug facet lives on its own page.** The realistic alternative to these lifestyle levers — the
antidepressant class, appraised as a standing drug for its efficacy and its limitations — is
[[Antidepressants for Depression]]. Its class-vs-placebo estimates (OR/SMD) are on a **different
reference group** than the exercise network's SSRI-vs-active-control estimate below, so the two are not
welded into a single head-to-head; the comparison and its caveats stay explicit at each point of use.


**A second drug crosses this outcome the WRONG way — GLP-1 RAs carry a depression signal.** The
antidepressant class is the lever *for* depression; but the depression outcome is also moved *against* by
a drug much of this page's overlapping stratum takes for a different reason. GLP-1 receptor agonists
(semaglutide, liraglutide), now standard for obesity and T2D — conditions that themselves elevate baseline
depression risk — show a pooled **OR 1.49 (95% CI 1.18-1.88)** for depression-related adverse events
(Bi 2026 SR+MA) [@glp1depression2026]. This is a harm signal, not a
lever, and it is low-quality (I²=99%, confounding by indication, GRADE moderate) — but it is decision-
relevant here because the obese / T2D stratum weighing a GLP-1 for metabolic reasons overlaps the
depression-risk population, and the drug and the lifestyle levers act on the *same* outcome in opposite
directions. The mechanism (same mesolimbic-dopamine reward circuit, bidirectional/susceptibility-
dependent) and the full appraisal live on [[GLP-1 and Reward Beyond Food]]; this is a cross-link, not a
depression lever. [inferred from @glp1depression2026]

The **severe sub-outcome — suicidality — reads the other way, and the two must not be conflated.** A
dedicated SR+MA of suicidal ideation and behaviour (the endpoint that triggered the 2023 FDA/EMA safety
review) found **no statistically significant population signal**: pooled RR 0.568 (95% CI 0.077-4.205,
I2=98% — wide and essentially uninformative), with the narrative synthesis leaning
reassuring-to-protective and a Mendelian-randomization check finding no causal link
[@glp1suicidality2025]. The one counter-signal is agent- and
stratum-specific (semaglutide WHO-VigiBase ROR 1.45, sharply elevated in patients co-prescribed
antidepressants/benzodiazepines — a marker of pre-existing psychiatric illness, so confounded by
indication). So the honest composite is a **graded severity signal**: harm-leaning on the milder,
higher-frequency depression-AE endpoint (Bi) and no robust signal on the severe endpoint (Bushi), both
pointing at the same psychiatric-comorbid stratum to monitor. Full appraisal on
[[GLP-1 and Reward Beyond Food]]. [inferred from @glp1suicidality2025]

**The binding caveat, up front — the levers rest on a SELF-REPORTED symptom-scale surrogate, and the
behavioural literatures carry heterogeneity and publication bias.** Depression symptom scales (BDI, CES-D,
HDRS, HRSD, MADRS) are *not* the patient-important outcome of a diagnosed depressive disorder — they are a
[[Surrogate Outcomes|surrogate]] measured with error, and the certainty here is **low**. The direction
(the levers help, or at least track lower depression) is more secure than the magnitude.

**One split within that caveat — the SUPPLEMENT levers are the BLINDED ones.** Exercise and diet are
*unblindable* behaviours, so their self-reported readouts carry expectancy bias on top of the surrogate
problem (the load-bearing limit below). The three supplement levers — omega-3 (Lever 3), vitamin D
(Lever 4), and saffron (Lever 5) — are **blindable isolates/extracts**, capsules against an identical
placebo, so their RCT arms are nominally placebo-controlled in a way the behavioural levers structurally
cannot be. They all rest on the same symptom-scale surrogate.

**But the headline effect size runs INVERSELY to the cleanliness of the evidence base across the three
supplements — a type-A pattern, exactly what the publication-bias/expectancy critique predicts.**
 omega-3's placebo-controlled estimate is the *smallest* (SMD −0.28) and its funnel is clean
(no publication bias, broad multi-region base); saffron's is the *largest* (g ≈ 0.99, \~4x SSRIs) but its
funnel shows **strong publication bias** and its evidence base is near-single-lab (21/23 trials from Iran,
13/23 from one research group); vitamin D sits between (SMD −0.40 from an **umbrella of meta-analyses** that
double-counts primary RCTs). So the lever with the biggest number is the least trustworthy, and the one
with the smallest is the best-warranted. This is only three data points — a suggestive pattern, not a law —
but it is the direction the *volume-is-not-independence* and expectancy rules anticipate, and it means the
supplement levers must be ranked by WARRANT, not by point estimate (the ranking below, and the DECOMPOSITION
delta).

<div class="recent-update" data-last-updated="2026-09-28">

## The levers, ranked by warrant

 — the ranking below is the wiki's own synthesis across the sources, not a claim in any one.

| Lever | Best estimate | Design | Certainty | Direction secure? |
|---|---|---|---|---|
| **Exercise** (treatment of MDD) | g −0.4 to −0.6 vs active control | NMA of 218 **RCTs** | low / very low | yes |
| **Diet quality** (incidence of symptoms) | OR \~0.77 highest-vs-lowest | dose-response MA of **prospective cohorts** | low | contested (see diet section) |
| **Omega-3 / EPA** (treatment of symptoms) | SMD −0.28 (−0.47, −0.09) overall; EPA-specific | MA of 26 **double-blind RCTs** | low | yes (direction); EPA-type/dose fragile |
| **Omega-3 / LCn3** (*prevention* in non-depressed) | RR 1.01 (0.92, 1.10) — **null** | SR+MA of RCTs >=6mo, n=41,470 | moderate (GRADE) | yes — no prevention effect |
| **Vitamin D** (treatment of symptoms) | SMD −0.40 (−0.60, −0.21); trim-fill −0.33 | **umbrella** of 10 MAs of RCTs | low | yes (direction); arms unseparated, dose fragile |
| **Vitamin D** (serum level → incidence/prevalence) | cohort OR 1.60 (1.08, 2.36), **fragile**; cross-sectional null 1.19 | umbrella of **observational** MAs | very low | contested (reverse causation) |
| **Vitamin D** (*prevention*/enhancement in the replete) | HR 0.97 (0.87, 1.09) — **null**; mood MD 0.01 (−0.04, 0.05) | large blinded **RCT**, n=18,353, 5.3y (VITAL-DEP) | moderate | yes — no enhancement effect in the replete |
| **Saffron** (treatment of symptoms) | g 0.99 (0.61, 1.37) vs placebo; **direct vs antidepressants NULL** (g −0.17, p=0.33) | SR+MA of 23 short RCTs (Jadad, no GRADE) | very low | direction only; effect fragile to pub bias + single-lab base |

Exercise and omega-3 are the better-warranted levers by DESIGN, for different reasons: exercise is a large
body of **randomised** evidence on **treating** established depression (effect **not modified** by baseline
severity or comorbidity — a subgroup finding, not a covariate adjustment), and omega-3 is **blinded**
randomised evidence (the expectancy-resistant one) though smaller and more heterogeneous. Diet quality is
**observational** evidence on **incidence**, and its signal is fragile to the two checks that separate
association from cause (below). None is a *big rock* on the physical-health axis — they enter the
[[Layer 1 - Ranking Interventions for a Stratum|Layer-1 ranking]] as real but modest, low-certainty
levers, and *attention is an anti-signal* here (nutritional psychiatry is heavily discussed and thinly
evidenced). **Vitamin D** (Lever 4) joins as the second blindable supplement lever: its RCT-arm point
estimate is the largest on the table, but its warrant is weaker than the number suggests — an umbrella of
meta-analyses (double-counted RCTs) that never separates repletion from enhancement — so it ranks by
DESIGN below the primary-RCT levers, not above them.

**DECOMPOSITION delta.** The "supplement lever" is now **three sub-levers** (omega-3, vitamin
D, saffron), and they cluster along a **warrant axis**, not a single "supplements help mood" claim. Two
poles:

- **Well-warranted, small effect:** omega-3 (SMD −0.28, clean funnel, broad base) — null for
  prevention/enhancement in the well (Deane), small treatment signal in the symptomatic (Liao).
- **Weakly-warranted, large effect:** saffron (g 0.99 vs placebo, but strong publication bias + 13/23
  trials from one lab + 21/23 from one country + no GRADE) — a large headline number the source itself says
  cannot yet support a clinical recommendation.
- **Between:** vitamin D (SMD −0.40 from an umbrella of double-counted MAs) — a treatment signal the authors
  read as **repletion of the deficient**; enhancement in the replete is now **directly tested and null**
  (VITAL-DEP, HR 0.97), so the lever splits cleanly into a deficient/depressed arm (direction secure, low
  certainty) and a replete-enhancement arm (null, moderate certainty).

The two isolates that carry a repletion-vs-enhancement shape (omega-3, vitamin D) still do so; saffron adds
the distinct lesson that a *large* pooled effect from a *concentrated* evidence base is weaker than a
*small* effect from a broad blinded one. Ranking supplements by point estimate would invert the true
order — hence rank by warrant.

**Update — the diet lever now has a small treatment arm too.** The ranking above places diet as
*observational-on-incidence* only; that was the state before the SMILES trial. SMILES adds one small,
unblinded RCT of dietary improvement as adjunctive **treatment** of existing major depression (below,
Lever 2). It does not change the ranking — exercise stays the better-warranted lever (218 RCTs vs one
n=67 trial) — but it means diet is no longer purely observational: there is now a randomised
treatment signal, distinct in question from Molendijk's prevention signal (the two are NOT the same
claim — see the distinction below).


[@noetel2024exercise]

</div>

## Lever 1 — Exercise treats depression (RCT-grade, low certainty)

A Bayesian network meta-analysis of **218 RCTs / 495 arms / 14,170 participants** with major depressive
disorder (Noetel 2024). Effects are improvement **beyond active control** (usual care, placebo tablet,
stretching, education, social support), in Hedges' g (negative = greater symptom reduction; MCID vs active
control = g −0.20):

| Modality | g (95% CrI) | κ | Note |
|---|---|---|---|
| Dance | «−0.96 (−1.36 to −0.56)» | 5 | large but sparse; mostly young women — not strongly recommended |
| Walking / jogging | «−0.63 (−0.80 to −0.46)» | 51 | — |
| Yoga | «−0.55 (−0.73 to −0.36)» | 33 | — |
| Exercise + SSRI | «−0.55 (−0.86 to −0.23)» | 11 | adjuvant to drug |
| Strength training | «−0.49 (−0.69 to −0.29)» | 22 | — |
| Mixed aerobic | «−0.43 (−0.61 to −0.25)» | 51 | — |
| Tai chi / qigong | «−0.42 (−0.65 to −0.21)» | 12 | — |
| *(comparator)* CBT | «−0.55 (−0.75 to −0.37)» | 20 | — |
| *(comparator)* SSRI | «−0.26 (−0.50 to −0.01)» | 16 | — |

The strongest exercise modalities are **comparable to CBT and larger than SSRIs alone** within this
network — though the review «was not designed to find all studies of these treatments, so these estimates
should not usurp» the psychotherapy/pharmacotherapy-focused reviews. This is the layer-3 substitution
point: exercise is a viable **alternative or adjuvant** to first-line treatment, not merely a last resort.

**Dose is about INTENSITY, not volume — and not energy expenditure.** «The effects of exercise were
proportional to the intensity prescribed»: light PA «still provided clinically meaningful effects
(g=−0.58, −0.82 to −0.33)», but expected effects were «stronger for vigorous exercise (eg, running,
interval training; g=−0.74, −1.10 to −0.38)».
Crucially «This finding did not appear to be due to increased weekly energy expenditure» — the METs/min
dose-response was «unclear». So more calories burned is *not* the mechanism; intensity is. Benefits were
«equally effective for different weekly doses». This is a genuinely different dose-response object from the
volume/METs curve on [[Physical Activity Dose and Mortality]] — the mortality lever is dosed in weekly
minutes, the depression lever in intensity.

**Acceptability:** strength training «0.55 (0.31 to 0.99)» and yoga «0.57 (0.35 to 0.94)» had lower
dropout odds than active control — the two best-*tolerated* modalities, which matters because adherence is
part of the effect (layer 3).

**Effect is broad across strata:** «Exercise appeared equally effective for people with and without
comorbidities and with different baseline levels of depression.» Modality preference is modified by age/sex
(strength for younger women, yoga for older men) — but these are **study-level, confounded** moderators
(«both sex and intervention may have changed»), a route-(b) effect-modification claim the data cannot
actually support at the individual level.

**Certainty is LOW / VERY LOW.** «confidence in accordance with CINeMA was low for walking or jogging and
very low for other treatments.» The dominant reason is **within-study bias**: blinding was rare, so «effect
sizes could include expectancy effects» — the expectancy problem is acute for a self-reported outcome in an
unblindable intervention. Publication bias *was* detected (Egger P<0.001, funnel asymmetry) but was not
large enough to nullify the effect: «studies with statistically significant results would need to be
reported 58 times more frequently» to erase it. Grey literature was not systematically searched.

**Mechanism is unresolved**: «Our review did not uncover clear causal mechanisms, but the
trends in the data are useful for generating hypotheses.» The authors hypothesise a combination (social
interaction, mindfulness/acceptance, self-efficacy, green space, neurobiology, acute positive affect) —
no single modality covers all, and the mediation studies were underpowered. That the effect scales with *intensity* but not *energy expenditure* is itself a hint the
pathway is neuro-affective, not metabolic.

[@molendijk2017diet]
## Lever 2 — Diet quality tracks lower depression incidence (observational, and fragile)

A dose-response meta-analysis of **prospective cohorts only** — 29 articles / 24 cohorts / «1,959,217
person-years» (Molendijk 2017). This is a *different exposure and a different question* from the exercise
lever: diet **quality** (not a single nutrient) and **incidence** of depression (not treatment). It is
NOT type-E corroboration of the exercise finding — different exposure, different author group, different
design — so no `[E-independent]` tag joins them; they are two distinct levers on one outcome.

Higher-quality diet -> lower incident depression, highest vs lowest adherence (OR):

| Exposure | OR (95% CI) | Dose-response? |
|---|---|---|
| Healthy diet (overall) | «0.77 (0.69 to 0.84)» | **linear**, P<0.01 |
| Mediterranean | «0.75 (0.67 to 0.84)» | (part of the linear overall) |
| Dietary inflammatory index (low vs high) | «0.81 (0.71 to 0.92)» | no |
| Fish | «0.86 (0.78 to 0.95)» | no |
| Vegetables | «0.82 (0.70 to 0.97)» | no |
| Low-quality diet | «1.03» to «1.11» (all NS) | no |

**The asymmetry is a finding:** a protective signal for high-quality diets, but «Adherence to low quality
diets and food groups was not associated with higher depression incidence». If poor diet *caused*
depression you would expect the harmful arm to appear; it does not.

**The two vanishing-tests — why this lever's causal reading is contested.** The association survives only
in the *softest* analyses, and dies under the two checks that separate cause from artifact:

- **Adjusting for baseline (subclinical) depressive symptoms** collapses the effect: OR «0.72 (0.65 to
  0.79)» -> «0.96 (0.87 to 1.06)». The authors read this as possible **reverse causation** — a poor diet
  «may be a concomitant phenomenon of the early stage of depression without being genuinely associated to
  depression risk» — while noting the counter-possibility of over-correction (diet is a lifelong habit).
- **Using a formal DIAGNOSIS as the outcome** (rather than a symptom scale) also nulls it: OR «0.91 (0.68
  to 1.23)» vs symptom-scale «0.72 (0.65 to 0.81)». Metabolic disease shares somatic symptoms (fatigue,
  weight change) with depression, so a symptom scale can register diet's *metabolic* effect as if it were
  depression — a [[Surrogate Outcomes|surrogate-inflation]] mechanism, not a mood effect.

Together these are the [[The U-Shaped Association Artifact|artifact-first discipline]] applied to a
protective arm: the signal is «less than unequivocal» exactly where the measurement is hardest, and the
authors themselves conclude «the claim that a low-quality diet is a central determinant of depression
risk is, given the current data, questionable».

**Magnitude framing, honestly hedged.** NNB «47 (34 to 80)» to move one person from lowest to highest
diet quality to prevent one case — which the authors say «compares favourably to the NNB for widely
prescribed medications such as statins in the primary prevention of cardiac disease», with high-quality
food carrying «no risk, only gain». Read this as an *upper-bound* framing: it inherits the reverse-
causation fragility above and the dietary [[Measurement Error in Dietary Assessment|measurement error]]
that biases the NNB.

**Mechanism points back at the cardiometabolic pathway**: the favoured route is «certain
dietary habits may predispose to metabolic illness, which in turn poses risk for depression» — i.e. the
diet-depression link may be partly *mediated by* the cardiometabolic big rocks the wiki already tracks,
not an independent lever. The dietary inflammatory index signal (OR 0.81) is the low-heterogeneity edge
of this -> [[Inflammation as a Modifiable Lever]]. **No RCT prevention trial exists** («To date, no such a
trial has been performed») — the whole lever rests on observational prospective data.

[@jacka2017smiles]
### The SMILES trial — diet as adjunctive TREATMENT (one small unblinded RCT)

The AWAITS above has landed. SMILES (Jacka 2017) is «the first RCT to explicitly seek to answer the
question: If I improve my diet, will my mental health improve?». Design: «a 12-week, parallel-group,
single blind, randomised controlled trial of an adjunctive dietary intervention in the treatment of
moderate to severe depression» — seven dietician-led sessions promoting a Mediterranean-style diet
versus a **social-support (befriending) control**, in adults already in treatment for MDD. It
«randomised 67 individuals with MDD to the trial (intervention, n = 33; social support control,
n = 34)». Primary outcome: MADRS at 12 weeks.

Result: «The dietary support group demonstrated significantly greater improvement in MADRS scores
between baseline and 12 weeks than the social support control group, t(60.7) = 4.38, p < .001». Effect
size «Cohen's d of -1.16 (95% CI -1.73, -0.59)», an «average between group difference ... of 7.1 points
on the MADRS». Remission: «32.3% (n = 10) of the dietary support group and 8.0% (n = 2) of the social
support control group achieved remission criteria of a score less than 10 on the MADRS», between-group
«χ2 (1) = 4.84, p = 0.028», NNT «4.1 (95% CI of NNT 2.3-27.8)».

**Do not over-read this — n=67, single unblinded trial, tiny-n (registry tier = moderate).** The authors
name the binding threat themselves: «there is the issue of expectation bias due to the fact that we
needed to be explicit in our advertising regarding the nature of the intervention and to the inability to
blind the participants to their intervention group; this may have biased the results and also resulted in
differential dropout rates» (completion 94% diet vs 73.5% control), and failure to reach the planned
sample «may also have inflated the effect size we observed». Under a not-missing-at-random sensitivity
model «observed intervention effects moved towards the null» (though «robust against departures from the
MAR assumption»). **Evidence state = insufficient / promising, NOT established:** one small unblinded RCT
that *replaces* reverse causation (via randomisation) with *expectancy bias* (via no blinding). A large
Cohen's d is exactly what unblinding + tiny-n + differential dropout would manufacture, so the number
does not settle causation.

#### Treatment (SMILES) vs prevention (Molendijk) — a DISTINCTION, not a tension, not corroboration

The two diet findings answer DIFFERENT questions and must not be pooled, filed as a `[[tension]]`, or read
as type-E independent backing. Not-joined check (ii) fires — different population, outcome, and horizon:

| Parameter | SMILES (Jacka 2017) | Molendijk 2017 | Same quantity? |
|---|---|---|---|
| Design | single-blind RCT (n=67) | dose-response MA of prospective cohorts | NO |
| Population | adults WITH existing MDD | non-depressed at baseline | NO |
| Exposure | 12-wk dietician-led diet change | habitual diet quality, highest vs lowest | NO |
| Outcome | MADRS symptom change (treat) | INCIDENCE of depression (prevent) | NO |
| Estimand | between-group change in symptoms | OR of becoming an incident case | NO |
| Effect | d -1.16; 7.1 MADRS points | OR 0.77 highest-vs-lowest | NO — treat vs prevent |

Every row is NO: a treatment effect on symptom trajectory in the already-ill is a different object from a
prevention association on incidence in the well. Filing this as a tension would be a fake tension; scoring
it as type-E would launder two non-same, non-independent claims into false robustness. It is a
**distinction** — the two levers bracket the diet-depression question at opposite ends (prevent vs treat)
without either establishing the causal link.

**The beyond-summary composite (type-F refinement).** Molendijk's prevention signal is
fragile precisely to **reverse causation** — adjusting for baseline symptoms collapses it (OR 0.72 ->
0.96 above). SMILES **randomises** the diet change, which is the one manoeuvre an observational cohort
cannot perform, so it removes reverse causation as the explanation for *its* result. But it does not
thereby inherit clean causal status: unblinding substitutes **expectancy bias** for reverse causation. So
the composite that neither source states alone is — randomisation answers Molendijk's fatal confounder
but opens a new one, and neither design alone (nor the two stacked) establishes that *improving* diet
*lifts* depression. The honest net reading: diet is a **candidate causal lever** carrying a small
randomised treatment signal plus a fragile observational prevention signal, still short of established.

**G-gap (unheld future source):** no powered, adequately-blinded-or-active-control-matched replication RCT
of dietary improvement as depression treatment yet exists; that is what would move this lever from
insufficient/promising toward established, and would count as type-E corroboration only if its independent
design also rules out expectancy bias.


[@liao2019omega3]
## Lever 3 — Omega-3 (EPA): treats symptoms, but does NOT prevent (the one BLINDED lever, smallest effect)

A meta-analysis of **26 double-blind randomized placebo-controlled trials / 2160 participants** of omega-3
PUFA supplementation in adults with a clinical depression diagnosis or depressive symptoms (Liao 2019) —
the **treatment pole** of the omega-3->mood question, and the first supplement lever held on this page.
Unlike exercise and diet, the exposure is a **blindable capsule against an identical placebo**, so this is
placebo-controlled and expectancy-resistant. The outcome is again a symptom scale (HRSD/MADRS/BDI/GDS),
not the disorder itself -> [[Surrogate Outcomes]].

**Overall effect is small and heterogeneous.** «a therapeutic effect of −0.28 (95%CI: −0.47, −0.09) on the
improvement of depression» (SMD, random-effects, P=0.004)
[@liao2019omega3]; «the effect sizes were small to modest, and
substantial evidence of heterogeneity between studies was detected (I² = 75%)»
[@liao2019omega3]. 12 of 26 trials were individually significant.
This is the **smallest** of the three levers — that removing expectancy inflation shrinks the estimate is
itself part of the story.

**EPA, not DHA, and at LOW dose — subgroup-derived (route b), fragile.** The DHA-pure/major subgroups were
NULL; the EPA-pure/major subgroups were beneficial (SMD −0.48 fixed / −0.33 random, P=0.05). The benefit
concentrated at EPA **<=1 g/d** (SMD −0.50 fixed; −1.03 random) and vanished above 1 g/d — an
inverse/non-monotone pattern within the studied 180-4000 mg/d range. Authors' bottom line: omega-3 with EPA
&gt;=60% at <=1 g/d benefits depression [@liao2019omega3]. Hold these
as **route-(b) subgroup claims with wide CIs**, not established dosing.

**No publication bias, robust to sensitivity — a contrast with Lever 1.** The funnel plot and Egger's test
showed no evidence of publication bias (Egger's P=0.17), and the effect held on excluding high-risk /
unpublished trials (SMD −0.25) and comorbid-physical-disease trials (SMD −0.22)
[@liao2019omega3]. The exercise NMA above DID detect publication
bias — so on this axis the omega-3 literature is the cleaner one.

**Effect-modification watch — inflammation subtype (net-effect-not-intended).**
[inferred from @liao2019omega3] Liao cites a proof-of-concept finding that EPA may
benefit only MDD *with an inflammatory component* and may be **potentially harmful** where the depression
has a different physiological basis (Rapaport, cited within Liao — not independently held). This is a
directional effect-modification signal, not an outcome finding: benefit possibly confined to an
inflammation subtype -> [[Inflammation as a Modifiable Lever]].

**Repletion vs enhancement is UNTESTED here.** [inferred from @liao2019omega3] Baseline
plasma omega-3 was not measured (named as an uncontrolled heterogeneity source), so whether this is
*repletion* of the deficient rather than *enhancement* of the already-replete cannot be told apart
-> [[Deficiency Repletion vs Enhancement]]. No GRADE/CINeMA was reported and long-term efficacy is
unestablished by the authors. Held at **low** certainty: direction secure, EPA-type/dose/subtype fragile.

**This is a NEW outcome cell, not an echo of the held omega-3 pages.** The wiki already holds
omega-3 on *cardiovascular* and *atrial-fibrillation* outcomes ([[Fish and Seafood Consumption]],
[[Omega-3 Supplementation and Atrial Fibrillation]] — where high-dose EPA *raises* AF risk). Depression is
a distinct outcome, so this adds a cell rather than re-pooling — and note the **dose divergence**: the
depression signal sits at <=1 g/d EPA, while the AF harm and the REDUCE-IT CV benefit sit at high dose. A
lever's shape is outcome-specific.

[@deane2019omega3]
### The prevention / enhancement counter-pole — omega-3 does NOT lift mood in the non-depressed (Deane 2019)

The both-directions pair is now complete. Liao is the **treatment** pole (already-symptomatic); the
**prevention / enhancement** pole is a Cochrane-lineage SR+MA (Hooper group, WHO NUGAG series) of RCTs
&gt;=6 months — 31 LCn3 trials, **41,470 participants** — in **largely non-depressed** populations (17 trials
chronic-illness/risk-factor, 6 cognitive, 5 healthy, only 4 mental-health, and just **1 of 31** recruited
only currently-depressed). This is the first-ever SR of *prevention*: «these are the best data available on
prevention of depression and anxiety, there are no previous systematic reviews of prevention»
[@deane2019omega3].

**The result is a clean null on incidence.** «Thirteen RCTs (randomising 26 528 participants, reporting 1355
people developing depression symptoms, median dose 0.95 g/d, range 0.4-3.4 g/d, median duration 12 months,
range 6-89 months) suggested little or no effect of increasing LCn3 on risk of depression symptoms (RR 1.01,
95% CI 0.92-1.10, I2 = 0%, Fig. 2).» [@deane2019omega3]
GRADE **moderate** (downgraded once for imprecision), no heterogeneity, no publication bias (Harbord P=0.27).
Anxiety symptoms are likewise null: SMD 0.15 (95% CI 0.05-0.26, I²=0%, n=1378, four scales, no low-RoB study)
— statistically a trivial *harmful*-direction signal, GRADE «increasing LCn3 probably has little or no effect
on anxiety symptoms» [@deane2019omega3]. Two hints even lean
*away* from benefit in the well: the good-adherence-only sensitivity trended toward harm
(RR 1.16, 95% CI 0.99-1.36) and «subgrouping suggested increased depression risk with LCn3 in healthy adults,
and little or no effect in those with comorbid illnesses» [@deane2019omega3].
Increasing **ALA** by 2 g/d «may increase risk of depression symptoms very slightly (number needed to harm,
1000; low-quality evidence)» [@deane2019omega3]; omega-6: no data.

**Liao and Deane are NOT a tension — they answer different questions (a distinction, not a `[[tension]]`).**
The parameter table shows the compared quantities are not the same (not-joined check ii: different
population / horizon / metric). Deane BOUNDS the omega-3 lever to the treatment stratum — a type-B scope
disambiguation + type-F refinement, not a type-D clash. Author lists are disjoint (Deane/Hooper vs Liao's
group), but different questions mean this is not type-E corroboration either.

| Parameter | Liao 2019 (treatment) | Deane 2019 (prevention) | Same quantity? |
|---|---|---|---|
| Question | *treat* existing depression | *prevent* new depression in the non-depressed | **NO** |
| Population | adults w/ clinical depression or depressive symptoms | mostly non-depressed (1/31 all-depressed) | **NO** |
| Metric | SMD (continuous symptom-scale change) | RR (dichotomous new depression events) | **NO** |
| Estimate | «−0.28 (95%CI: −0.47, −0.09)» (benefit) | RR 1.01 (0.92-1.10) (null) | **NO** — incomparable |
| Duration | mixed, many short trials | >=6mo required, median 12mo | **NO** |
| Existing-depression severity/remission | (Liao's whole domain) | 2 tiny trials, «very low quality» | closest, but Deane's >=6mo excludes Liao's short trials |

**Deane does not contradict Liao even where they nominally overlap.** On the treatment stratum Deane found
only 2 tiny long-term trials (n=61 GDS MD -0.94 [-2.27, 0.39]; n=24 Parkinson's) → severity and remission
«unclear ... very low quality». It explicitly credits the short-term treatment signal Liao's pool captured:
a prior Cochrane of «shorter trials of LCn3 in people with depression suggested small to modest
non-clinically beneficial effects but queried risk of bias and publication bias», and another SR
«suggested efficacy at higher EPA doses and alongside antidepressants»
[@deane2019omega3]. So the composite is a
clean **population × duration partition**: short-term treatment of the symptomatic = small benefit (Liao);
long-term prevention/enhancement in the well = null-to-slightly-harmful (Deane).

**This IS the [[Deficiency Repletion vs Enhancement]] axis, and Deane names the untestable arm.** The null in
the replete/non-deficient is the *enhancement* arm (no headroom, plateau); repletion of the deficient stays
untested here because «Baseline intake of LCn3 could alter effectiveness of LCn3 supplementation, as
increasing LCn3 would be more likely to be effective in those with poor baseline intakes» but trials
reported baseline status non-comparably [@deane2019omega3] —
the same uncontrolled parameter Liao flagged. [inferred from @deane2019omega3; @liao2019omega3]

**Decision-change (layer 3):** for a person *without* depression, omega-3 supplementation is not a mood
lever — the guidance-null-defeating line is the authors' own: «Physicians should not recommend omega-3
supplements for reducing depression or anxiety risk, and evidence of effectiveness in existing depression is
of very low quality» [@deane2019omega3]. The "fish oil lifts
mood" belief is refuted for the well; any residual case is repletion of the deficient (untested) or the
treatment stratum (Liao, small/fragile). All still on the self-reported symptom-scale
[[Surrogate Outcomes|surrogate]].

[@musazadeh2023vitd]
<div class="recent-update" data-last-updated="2026-09-28">

## Lever 4 — Vitamin D: a second BLINDED supplement lever, but the arms are unseparated

An umbrella meta-analysis (Musazadeh 2023) pooling **existing meta-analyses** of vitamin D and depression,
keeping interventional and observational evidence apart — the second supplement lever here, and like
omega-3 a **blindable capsule against an identical placebo**, so the RCT arm is expectancy-resistant in a
way the behavioural levers are not. Quality of included MAs by AMSTAR2; **no GRADE reported**. Outcome is
again a self-reported symptom scale (BDI/CES-D/HDRS/MADRS) -> [[Surrogate Outcomes]].

**Interventional (RCT) arm — moderate point effect, high heterogeneity.** Pooling 10 MAs of RCTs (24,510
participants, 49 RCTs): «Vitamin D supplementation had ... a significant effect on decreasing depression
symptoms (ESSMD: −0.40; 95 % CI: −0.60, −0.21, p < 0.01)»
[@musazadeh2023vitd], I2 = 89.1 %. Funnel asymmetry hinted
at a small-study effect but the trim-and-fill re-estimate held: «results remained significant (ESSMD:
−0.33; 95 % CI: −0.52, −0.13, p < 0.05)» [@musazadeh2023vitd] (Egger p = 0.21, Begg p = 0.78). This SMD is *nominally larger* than omega-3's −0.28, but do not read it
as the stronger lever (see the two limits below).

**Observational arm — a fragile cohort signal and a NULL cross-sectional signal.** Prospective cohorts (4
MAs / 5 effect sizes, 38,237 participants): lower serum vitamin D -> higher odds of depression, «Pooled
ESOR: 1.60; 95 % CI: 1.08, 2.36, p < 0.01» [@musazadeh2023vitd], I2 = 91.3 % — but **fragile**: «using one-study removal analysis, the significance was lost
(ESOR: 1.43; 95 % CI: 0.98, 2.10), and (ESOR: 1.41; 95 % CI: 0.95, 2.09)»
[@musazadeh2023vitd] — dropping a single MA collapses it.
Cross-sectional MAs (66,411 participants) are outright **null**: «no significant protective association ...
(Pooled ESOR: 1.19; 95 % CI: 0.95, 1.49, p = 0.14)»
[@musazadeh2023vitd], and the authors invoke reverse
causation directly — «the reverse causality in which patients who have less exposure to sun end up having
lower serum vitamin D levels is not ruled out»
[@musazadeh2023vitd]. So the observational arm is the
[[The U-Shaped Association Artifact|artifact-first]] story: the association lives in the confounding-prone
designs and thins under scrutiny.

**The repletion-vs-enhancement arms are UNSEPARATED — the binding caveat.**
[inferred from @musazadeh2023vitd] The umbrella does NOT stratify by baseline
vitamin D status (its subgroups are dose, duration, age), and the authors name the gap themselves:
«individual's baseline vitamin D level was not considered in the majority of studies. Hence ... it is
possible that individuals who have low serum 25(OH)D level are expected to show greater benefit»
[@musazadeh2023vitd], «vitamin D is considered beneficial
for depressed individuals rather than healthy ones ... vitamin D did not affect emotions in healthy
subjects» [@musazadeh2023vitd], with benefit expected «for
patients with vitamin D deficiency (< 50 nmol/L serum levels of vitamin D at baseline)»
[@musazadeh2023vitd]. So the headline «protects against
depression» is most plausibly **repletion in the deficient / depressed**, not **enhancement in the
replete** — the exact arm split of [[Deficiency Repletion vs Enhancement]]. The powered
enhancement-in-the-replete RCT that would test the upper arm directly — VITAL-DEP / Okereke 2020, the
ancillary depression trial of VITAL — **is now held** and lands the enhancement-null the umbrella could not
see (next subsection).

**Dose subgroup is non-monotone and internally inconsistent — no dose-response.**
[inferred from @musazadeh2023vitd] Table 3: <4000 IU/day SMD −0.09 (NS);
4000-5000 −0.59; >5000 −0.18 — non-monotone, and the results text says «in dosage of 4000-5000 IU/day ...
appeared to have a stronger reduction» [@musazadeh2023vitd] while the discussion and conclusion instead credit >5000 IU/day. Table 3 is authoritative, and there
4000-5000 is clearly the largest cell while >5000 is the *weaker* of the two significant cells — the source
disagrees with itself. Each dose cell holds only 3-4 MAs; the split is umbrella-of-MAs noise, not a located
knee (the burden to *locate* a dose optimum is unmet).

**Volume is not independence — the umbrella-of-MAs discount.**
[inferred from @musazadeh2023vitd] Pooling meta-analyses double-counts primary
RCTs: the same trials recur across the included MAs, so «10 MAs / 49 RCTs» is far fewer independent tests
than it reads and the pooled CI is narrower than the true evidence warrants. Hold the −0.40 as a headline,
not as high precision — this is why the largest point estimate on the ranking table is not the
best-warranted lever.

**This is a NEW outcome cell, and shares a SCHOOL with a held source.** The wiki holds vitamin
D on fractures ([[Vitamin D and Calcium Supplementation for Fracture Prevention]]) and disease prevention
([[Vitamin and Mineral Supplements for Disease Prevention]]); depression is a distinct cell, and this
umbrella re-pools none of the wiki's held depression MAs (Liao/Deane are omega-3), so it adds a cell rather
than laundering held evidence. Independence watch: this paper's authors (Musazadeh, Zarezadeh, Mekary)
overlap the held cinnamon umbrella ([[Cinnamon and Glycemic Control]], Zarezadeh 2023 — same Tabriz group),
so the two can **never** count as independent type-E corroboration; the topics differ, so no claim overlaps
today, but the flag stands. Held at **low** (RCT arm) / **very low** (observational arm) certainty:
direction secure for the deficient/depressed, repletion-vs-enhancement unseparated, dose fragile.

</div>

<div class="recent-update" data-last-updated="2026-09-28">

## Lever 4, the enhancement arm — VITAL-DEP is a large powered RCT-null in the REPLETE (Okereke 2020)

[@okereke2020vitaldep]
VITAL-DEP is the powered enhancement-in-the-replete RCT the umbrella above named but could not run: D3
2000 IU/d vs matching placebo, 18,353 adults aged >=50 **without** depression at baseline, median 5.3 years,
double-blind. Both primary outcomes are **null** — «Risk of depression or clinically relevant depressive
symptoms was not significantly different between the vitamin D3 group ... and the placebo group ... (hazard
ratio, 0.97 [95% CI, 0.87 to 1.09]; P = .62); there were no significant differences between groups in
depression incidence or recurrence. No significant differences were observed between treatment groups for
change in mood scores over time; mean change in PHQ-8 score was not significantly different from zero (mean
difference for change in mood scores, 0.01 points [95% CI, −0.04 to 0.05 points])»
[@okereke2020vitaldep]. Incident HR 0.99 (0.87-1.13) and
recurrent HR 0.95 (0.76-1.19) were both null [@okereke2020vitaldep]. This is **not an underpowered null**: «The study was designed to have power of 85% or greater»
to detect HR 0.85, and >99% power for the 0.5-point mood MCID
[@okereke2020vitaldep] — the mood MD CI (−0.04 to 0.05) sits
entirely inside +/-0.05 of a scale whose smallest meaningful change is 0.5, a precisely-estimated zero, not
an absence of data.

**Why this is the enhancement arm, and does NOT contradict Musazadeh.** The trial population is largely
replete — mean baseline 25(OH)D 30.8 ng/mL, only 11.6% below 20 ng/mL — and the authors flag this as the
scope limit themselves: «baseline 25-hydroxyvitamin D levels were generally adequate, which limits the
generalizability for universal prevention»
[@okereke2020vitaldep], the mean «is already at a threshold
for extraskeletal health benefits, and so the ability to observe effects ... may have been attenuated»
[@okereke2020vitaldep]. So VITAL-DEP tests the *upper* arm
(enhancement in the replete) that Musazadeh's headline could not isolate, and its null **confirms
Musazadeh's own caveat** («vitamin D did not affect emotions in healthy subjects») rather than clashing with
it — a scope distinction, not a joined-issue tension (matched by baseline status, the two are consistent).
The one directly-matched parameter seals it: at **2000 IU/d**, VITAL-DEP's null sits squarely inside
Musazadeh's own **<4000 IU/d SMD −0.09 (NS)** dose band. [inferred from @okereke2020vitaldep; @musazadeh2023vitd] The headline SMD −0.40 (symptom-severity,
mixed/unstratified population) and this HR 0.97 (incidence, replete) are **different quantities**, so the
opposite directions do not net — the parameter table below is what forbids reading a contradiction here.

**Independence bookkeeping — this is type-F, NOT type-E.** VITAL-DEP is an ancillary of the **same VITAL
parent trial** as the held [[Deficiency Repletion vs Enhancement]] sources Manson 2019 (cancer/CVD) and
LeBoff 2022 (fractures) — same 25,871-participant randomization, same 2000 IU/d D3, depression is just a
different endpoint — so it shares participants with them and is **not** an independent witness: it *extends*
the VITAL enhancement-null to a new outcome (mood/depression). Against Musazadeh the author lists are
disjoint (Harvard/Brigham vs Tabriz), but as an umbrella-of-MAs Musazadeh may pool VITAL-DEP inside a
constituent MA (unverifiable from the umbrella text — «okereke»/«vital» absent across its 2 chunks, but an
umbrella need not name primary trials), so **no `[E-independent]` is claimed** between them; VITAL-DEP's
contribution is the direct enhancement-arm test, Musazadeh's is the caveat/logic. No `[[tension]]` is filed
(not-joined check (ii): different scope/population/metric, consistent once matched).

**The observational signal is likely confounded — VITAL-DEP's own post-hoc + MR read.** Within the trial,
the baseline-25(OH)D-to-depression association vanished, and «meta-analyses of gene variants ... in
mendelian randomization studies showed no association. Thus, confounding likely played a major role in
reported associations in observational studies»
[@okereke2020vitaldep] — «we did not observe better outcomes
with vitamin D3 supplementation in a rigorous experimental setting»
[@okereke2020vitaldep]. This corroborates the artifact-first
reading of Musazadeh's fragile observational arm (ESOR 1.60, significance lost on one-study removal;
cross-sectional null) -> [[The U-Shaped Association Artifact]].

### Parameter table — VITAL-DEP (Okereke 2020) vs the Musazadeh umbrella (BLOCKING, before any cross-source claim)

| Parameter | VITAL-DEP (Okereke 2020) | Musazadeh umbrella 2023 | Same quantity? |
|---|---|---|---|
| Design | single RCT, D3 2000 IU/d vs placebo, 5.3y, n=18,353 | umbrella of MAs of RCTs (interventional: 10 MAs, 49 RCTs, 24,510) | NO — one trial vs pooled meta-of-MAs |
| Baseline vit-D status | largely replete: mean 30.8 ng/mL, 11.6% <20 | not stratified; caveat locates benefit <50 nmol/L | NO — replete-only vs mixed/unstratified |
| Effect metric | HR (incidence/recurrence) + MD in PHQ-8 points | SMD (symptom severity) | NO — HR-incidence / raw-MD vs pooled SMD |
| Headline effect | NULL: HR 0.97 (0.87-1.09); mood MD 0.01 (−0.04, 0.05) | benefit: SMD −0.40 (−0.60, −0.21), trim-fill −0.33 | NO (opposite) — different population + metric, so NOT a contradiction |
| Dose | 2000 IU/d | <4000 IU/d subgroup SMD −0.09 (NS); higher stronger | OVERLAP — 2000 sits in Musazadeh's own NS band -> CONSISTENT |

The only cell where the quantities match (dose 2000 IU/d) shows **agreement**; every headline cell compares
**different quantities**, so the apparent umbrella-benefit-vs-RCT-null is a scope distinction, not a tension.

[@marx2019saffron]

</div>

## Lever 5 — Saffron: the large-effect / weak-warrant supplement (very low certainty)

A systematic review and meta-analysis (Marx 2019) of **23 short RCTs / 1237 participants** of saffron
(*Crocus sativus*) supplementation on depression and anxiety **symptom scales**, monotherapy and adjunct,
vs placebo or antidepressant. The third supplement lever, and the one whose headline number is largest and
whose warrant is weakest. The exposure is a **blindable 30 mg extract capsule** (19/23 used 30 mg/d), so
the RCT arms are nominally placebo-controlled (Jadad 20/23 at 4-5); the outcome is again a self-reported
symptom scale -> [[Surrogate Outcomes]].

**The pooled effect is large — implausibly so — and publication-biased.** vs placebo for depression:
«a significant and large positive effect size for saffron 119 reducing symptoms of depression in comparison
to placebo (g=0.99, 95% CI=0.61 to 1.37, 120 n=14 studies, n=716 participants, p<0.001; Figure 2)»
[@marx2019saffron], I²=81.9%. Egger's found strong publication
bias (intercept 6.99, p=0.007), and — atypically — correction did NOT attenuate it: «a trim-and-fill
analysis increased the effect size of saffron supplementation (g=1.14, 127» 0.74-1.52)
[@marx2019saffron]. A trim-and-fill that *raises*
the estimate means the imputed missing studies land on the large-effect side — so the standard
publication-bias correction offers no reassurance here, unlike the conservative downward correction it
usually is. Anxiety vs placebo is the same shape: g=0.95 (0.27-1.63), n=6, I²=88.74%, Egger p=0.028,
trim-fill up to g=1.40 [@marx2019saffron].

**The direct drug comparison is NULL — and it is the cleanest subgroup (layer-3 substitution point).**
The Discussion frames saffron as considerably greater than standard pharmacotherapy, «such as selective
serotonin reuptake inhibitors (Cohen's d=0.30)» — but that is an *indirect* cross-trial comparison; the
DIRECT head-to-head disagrees: «the five trials directly comparing saffron to antidepressant medication
reported no 203 statistically significant difference (p=0.33)»
[@marx2019saffron] (g −0.17, n=5, n=210), and this is the ONLY
low-heterogeneity subgroup (I²=35.1%). So the honest read is **equivalence to antidepressants, not
superiority** — the large placebo-controlled g does not license "saffron beats SSRIs". The adjunct-to-
antidepressant subgroup is large but very wide (g 1.23, 95% CI 0.13-2.33, n=4, near the null).

**Volume is NOT independence — the sharpest instance in the corpus.** «Most studies were conducted in Iran
(21/23)» and «Thirteen studies were conducted by the same 101 research group»
[@marx2019saffron]. 21/23 trials from one country and 13/23 from
one lab means the "23 RCTs" are far fewer *independent* tests than the count implies — the
[[Measurement Error in Dietary Assessment|appraisal]] rule that weights by independence of backing, not by
study count, applied at its limit. Combined with strong publication bias, short trials (4-12 weeks), small
n (30-128), Jadad-only RoB and **no GRADE**, the warrant is **very low despite a gold DESIGN tier**.

**Blinding integrity is a residual doubt even where trials are nominally double-blind.**
Saffron has a distinctive taste and colour, so maintaining blinding against an inert placebo is harder than
for a tasteless isolate; a Jadad point for "double-blind" does not verify the blind held. This is a
mechanism-directional caveat, not an outcome finding — but it is one more reason the placebo-controlled g is
likely inflated relative to the true effect.

**The authors' own bottom line defeats any strong recommendation.** «the strength of this 238 conclusion is
moderated by the lack of large-scale trials, and significant risk of publication 239 bias among the many
small- scale pilot trials published on this topic»; the large effects «require replication in further
clinical trials that address 241 methodological limitations and the lack of regional diversity before
clinical recommendations 242 can be made» [@marx2019saffron].
Adverse
events were few and not raised above placebo/medication, but «all studies to date have been of 197
relatively short duration», so long-term safety is unestablished. **Evidence state = insufficient /
promising, NOT established.**

**Shared-school — NOT independent of the diet levers on this page.** This MA is a Deakin Food &
Mood group product: its byline overlaps the held diet sources — Jacka + Berk co-author the SMILES trial
(Lever 2), and Lane + Marx + Jacka co-author the held UPF umbrella review (Lane et al.). So saffron and the
diet levers can **never** be scored as a type-E robustness pairing — they are one research group, not
separate lines of evidence. It re-pools no held depression MA (Liao/Deane are
omega-3), so it adds a new outcome cell without laundering held evidence. Its effect-modification hypothesis
(inflammation-stratified response) cites the *same* Rapaport 2016 proof-of-concept the omega-3 lever cites —
a shared citation, not a second independent route -> [[Inflammation as a Modifiable Lever]].

<div class="recent-update" data-last-updated="2026-09-28">

## Synthesis — what this domain does and does not license



- **The expectancy trap is the load-bearing limit — for the behavioural levers.** An unblindable behaviour
  (exercise, diet) measured by a self-reported symptom scale is the worst case for expectancy bias, and it
  is exactly the setup for Levers 1 and 2. That is why direction is held more firmly than magnitude, and why
  the page sits at `confidence: low` despite exercise being RCT-based.
- **Omega-3 is the one lever that escapes the expectancy trap — and it is the smallest.** A blindable
  capsule can be placebo-controlled, so Lever 3's SMD −0.28 is not inflated by expectancy the way the
  behavioural readouts are. Reading the three together: the expectancy-resistant lever shows the *smallest*
  effect, which is the direction the expectancy critique predicts. It still rests on the same symptom-scale
  surrogate and leaves baseline omega-3 status (repletion-vs-enhancement) untested, so it too stays low
  certainty.
- **Vitamin D is the second blindable supplement lever, and its largest-on-the-table number is a warning,
  not a win.** The −0.40 RCT-arm SMD comes from an umbrella of meta-analyses (double-counted
  RCTs -> overstated precision) that never separates repletion from enhancement. The authors themselves
  read the benefit as **repletion of the deficient**, and the powered enhancement RCT in the replete
  (VITAL-DEP / Okereke, n=18,353, 5.3y) is now **held and null** (HR 0.97; mood MD 0.01, a precisely-estimated
  zero), so the honest reading is confirmed on both halves: vitamin D probably helps the *deficient /
  depressed* (Musazadeh, direction secure) and does **little-to-nothing for the replete** (VITAL-DEP,
  moderate certainty) — the second half is no longer merely inferred. The observational arm (cohort OR 1.60)
  is fragile to one-study removal and null cross-sectionally, and VITAL-DEP's own MR/post-hoc read attributes
  it to confounding — an artifact-first signal. Both supplement levers converge on the same shape: a
  status-dependent curve, not a blanket "supplements lift mood".
- **Saffron is the large-effect / weak-warrant supplement — and it makes the warrant axis explicit.**
 Its pooled g ≈ 0.99 is the biggest number on the table (nominally \~4x SSRIs), but the effect
  is fragile to strong publication bias (correction *raised* it, not lowered it), a near-single-lab base
  (13/23 trials one group, 21/23 one country), short small trials and no GRADE — and the *direct* comparison
  to antidepressants is null (equivalence, not superiority). Read across the three supplements, effect size
  runs INVERSELY to evidence-base quality: the smallest effect (omega-3) is the best-warranted, the largest
  (saffron) the least. So the layer-3 read is: saffron is a plausible, well-tolerated candidate adjunct at
  30 mg/d that its own authors say cannot yet ground a clinical recommendation — insufficient/promising, not
  established, and no more than equivalent to a drug the person could take instead.
- **Decision-change (layer 3):** for a person with depression who is willing, exercise — favouring
  *intensity* they can sustain, in a *structured* prescription, with strength or yoga if tolerability is
  the binding constraint — is a defensible alternative or adjuvant to psychotherapy/pharmacotherapy, not
  merely a fallback. The wiki appraises; it does not prescribe, screen, or manage the disorder (the
  prescriber/acute-care line).
- **Diet as adjunct is now a candidate, not a fallback — but weakly.** SMILES adds a single small
  unblinded RCT showing diet improvement can *treat* symptoms (not just track lower incidence), so
  dietician-supported dietary improvement is a reasonable low-risk adjunct to consider — while holding
  that one n=67 expectancy-prone trial is insufficient to establish the effect, and that the prevention
  and treatment claims are a distinction, not one finding.
- **Scope guard — chronic depression is NOT acute mood.** The *carbohydrate-craving self-medication*
  story belongs to the chronic disorder; the *acute* question (does a sugary snack lift mood/energy in the
  next hour?) is answered separately and negatively for healthy adults -> [[Acute Carbohydrate Effects on Mood]].
  Different scope and horizon — a distinction, not a lever on this page.
- **Open loop:** no operation here grades these against a *realized* patient outcome; the evidence is
  symptom-scale change, and the trajectory/quality-of-life shape depression most degrades is
  under-measured.

</div>

## References

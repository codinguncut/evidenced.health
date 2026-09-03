---
type: framework
question: Which modifiable lifestyle exposures reduce depression, for whom, by how much, and how confident can we be?
aliases: [Depression, Exercise for Depression, Diet and Depression, Nutritional Psychiatry, Lifestyle Depression, Depression Prevention]
authors: [Noetel, Michael; Sanders, Taren; Gallardo-Gomez, Daniel; del Pozo Cruz, Borja; Lonsdale, Chris; Molendijk, Marc; Martinez-Gonzalez, Miguel Angel; Jacka, Felice N; O'Neil, Adrienne; Opie, Rachelle; Itsiopoulos, Catherine; Berk, Michael]
sources: [Noetel - Exercise Depression Network Meta-Analysis 2024, Molendijk - Diet Quality Depression Dose-Response Meta-Analysis 2017, Jacka - SMILES Trial Diet Depression 2017]
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
created: 2026-08-09
updated: 2026-08-30
self_critiqued: 2026-08-20
---

<div class="recent-update" data-last-updated="2026-08-30"></div>

Depression is on the wiki's outcome menu as a **patient-important QoL outcome** (the 2026-08-08
QoL-extension) and through its **physiological intersection** with physical health — depression
predicts and worsens cardiovascular disease, and shares the HPA / inflammation / metabolic channels the
wiki already tracks -> [[Stress Management and Cardiometabolic Health]], [[Inflammation as a Modifiable Lever]]. So *modifiable-exposure -> depression* is a legitimate appraisal claim. But it is held
**peripherally and proportionately**: physical health is the focus, and this page is one nucleus over
two levers, not a mental-health sub-domain.

**The drug facet lives on its own page.** The realistic alternative to these lifestyle levers — the
antidepressant class, appraised as a standing drug for its efficacy and its limitations — is
[[Antidepressants for Depression]]. Its class-vs-placebo estimates (OR/SMD) are on a **different
reference group** than the exercise network's SSRI-vs-active-control estimate below, so the two are not
welded into a single head-to-head; the comparison and its caveats stay explicit at each point of use.


**The binding caveat, up front — both levers rest on a SELF-REPORTED symptom-scale surrogate, and both
literatures carry heterogeneity and publication bias.** Depression symptom scales (BDI, CES-D, HDRS) are
*not* the patient-important outcome of a diagnosed depressive disorder — they are a
[[Surrogate Outcomes|surrogate]] measured with error, and the certainty here is **low**. The direction
(both levers help, or at least track lower depression) is more secure than the magnitude.

## The two levers, ranked by warrant

 — the ranking below is the wiki's own synthesis across the two sources, not a claim in either.

| Lever | Best estimate | Design | Certainty | Direction secure? |
|---|---|---|---|---|
| **Exercise** (treatment of MDD) | g −0.4 to −0.6 vs active control | NMA of 218 **RCTs** | low / very low | yes |
| **Diet quality** (incidence of symptoms) | OR \~0.77 highest-vs-lowest | dose-response MA of **prospective cohorts** | low | contested (see diet section) |

Exercise is the better-warranted lever: it is **randomised** evidence on **treating** established
depression, and the effect is **not modified** by baseline severity or comorbidity (equally effective
across both — a subgroup finding, not a covariate adjustment). Diet quality is
**observational** evidence on **incidence**, and its signal is fragile to the two checks that separate
association from cause (below). Neither is a *big rock* on the physical-health axis — they enter the
[[Layer 1 - Ranking Interventions for a Stratum|Layer-1 ranking]] as real but modest, low-certainty
levers, and *attention is an anti-signal* here (nutritional psychiatry is heavily discussed and thinly
evidenced).

**Update — the diet lever now has a small treatment arm too.** The ranking above places diet as
*observational-on-incidence* only; that was the state before the SMILES trial. SMILES adds one small,
unblinded RCT of dietary improvement as adjunctive **treatment** of existing major depression (below,
Lever 2). It does not change the ranking — exercise stays the better-warranted lever (218 RCTs vs one
n=67 trial) — but it means diet is no longer purely observational: there is now a randomised
treatment signal, distinct in question from Molendijk's prevention signal (the two are NOT the same
claim — see the distinction below).


[@noetel2024exercise]
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


## Synthesis — what this domain does and does not license



- **The expectancy trap is the load-bearing limit.** An unblindable behaviour (exercise, diet) measured by
  a self-reported symptom scale is the worst case for expectancy bias, and it is exactly the setup here.
  That is why direction is held more firmly than magnitude, and why the whole page sits at
  `confidence: low` despite one lever being RCT-based.
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
- **Open loop:** no operation here grades these against a *realized* patient outcome; the evidence is
  symptom-scale change, and the trajectory/quality-of-life shape depression most degrades is
  under-measured.

## References

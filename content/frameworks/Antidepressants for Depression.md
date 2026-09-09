---
type: framework
question: "What does the antidepressant drug class do — and not do — for acute major depressive disorder in adults: efficacy, acceptability, and how certain is it?"
aliases: [Antidepressants, Antidepressant Efficacy, SSRIs for Depression, Antidepressant Drugs, Antidepressants for Major Depressive Disorder]
authors: [Cipriani, Andrea; Furukawa, Toshi A; Salanti, Georgia; Ioannidis, John P A; Geddes, John R; Henssler, Jonathan; Baethge, Christopher; Alonso-Pedrero, Lucia; Bes-Rastrollo, Maira; Marti, Amelia; Moss, Lauren; Laudenslager, Marci; Steffen, Kristine J; Sockalingam, Sanjeev; Coughlin, Janelle W]
sources: [Cipriani - 21 Antidepressants Efficacy Acceptability 2018, Henssler - Antidepressant Discontinuation Symptoms 2024, Alonso-Pedrero - Antidepressant Antipsychotic Weight Gain 2019, Moss - Antidepressants Weight Gain Update 2025]
cluster: depression
confidence: low
relationships:
  related_to:
    - Depression and Modifiable Exposures
    - Surrogate Outcomes
    - Layer 1 - Ranking Interventions for a Stratum
    - Measurement Error in Dietary Assessment
created: 2026-08-30
updated: 2026-09-08
self_critiqued: 2026-09-08
---

The antidepressant class is a **standing drug** the wiki appraises for **efficacy and its limitations**,
not because it is a lifestyle lever but because a large share of the target population is on one, and it
is the default primary-care prescription for depression — so understanding what it does and does not do
IS a stratum-level decision. This page holds the **class-level efficacy appraisal** (the drug facet of the
`depression` cluster; the lifestyle levers — exercise, diet — and the exercise-vs-drug comparison live on
the cluster nucleus -> [[Depression and Modifiable Exposures]]). The **limitations half** — withdrawal /
discontinuation on stopping — is appraised below (Henssler 2024).

**Scope:** this is the efficacy/limitations *appraisal* of the class, IN scope as a standing drug. What is
OUT (prescriber zone): which agent to prescribe for an individual, dosing/titration, screening. The
per-agent ranking is reported below as a *finding that it exists and is uncertain*, never as a
prescribing guide.

## The headline finding — the class beats placebo, modestly

The landmark evidence is Cipriani 2018, a Bayesian **network meta-analysis of 522 double-blind RCTs /
116,477 participants**, 21 antidepressants (first- and second-generation) for the **acute** treatment of
adults (>=18) with major depressive disorder, trials done 1979-2016.
[@cipriani2018antidepressants]

**Every one of the 21 drugs was more effective than placebo on response rate:**
«all antidepressants were more effective than placebo, with ORs ranging between 2·13 (95% credible
interval [CrI] 1·89–2·41) for amitriptyline and 1·37 (1·16–1·63) for reboxetine».
[@cipriani2018antidepressants]

**But the effect size is modest.** The pooled continuous effect across all antidepressants was
«The random-effects summary SMD for all antidepressants was 0·30 (95% CrI 0·26–0·34; p<0·0001»
[@cipriani2018antidepressants] — a standardised mean
difference of 0.30 (Cohen's d) is a small-to-moderate effect. The authors state the motivating problem
plainly: «short-term benefits are, on average, modest; and because long-term balance of benefits and
harms is often understudied»
[@cipriani2018antidepressants].

### Effect-estimate block

- **effect_measure:** response-rate OR 2.13 (1.89–2.41) [amitriptyline, largest] to 1.37 (1.16–1.63)
  [reboxetine, smallest], all 21 vs placebo; pooled continuous SMD 0.30 (0.26–0.34).
- **population_and_comparator:** adults with moderate-to-severe MDD (mean baseline HAM-D-17 25.7),
  vs **placebo** (the reference); the head-to-head sub-analysis compares drugs to each other.
- **outcome:** response rate = «a reduction of ≥50% of the total score on a standardised observer-rating
  scale for depression» — a **scale-threshold surrogate**, not remission, function, or a
  patient-important long-term endpoint -> [[Surrogate Outcomes]].
- **horizon:** acute only — «We recorded the outcomes as close to 8 weeks as possible for all analyses»,
  studied range 4–12 weeks. Says nothing about maintenance or long-term outcomes.
- **certainty:** «the certainty of evidence was moderate to very low» (GRADE); 46 (9%) of 522 trials high
  risk of bias, 380 (73%) moderate, 96 (18%) low.
- **confidence:** low — single (gold) source, a surrogate outcome, an acute horizon, and the class-beats-
  placebo direction far more secure than any per-agent magnitude.

## Three load-bearing qualifications on "it works"

 — the direction (class > placebo) is robust; each qualification narrows what that licenses.

- **The outcome is a surrogate, measured acutely.** Response = a ≥50% drop on a symptom rating scale at
  \~8 weeks. It is not sustained remission, restored function, or quality of life — the outcomes a person
  with depression most cares about. The authors could not even measure global functioning: «because of the
  paucity of information reported in the original studies, we were not able to quantify some outcomes, such
  as global functioning»
  [@cipriani2018antidepressants]. Treat the OR/SMD as an
  acute symptom-scale effect, not a life-outcome effect.
- **The short horizon hides the harm side.** «some of the adverse effects of antidepressants occur over a
  prolonged period, meaning that positive results need to be taken with great caution, because the trials
  in this network meta-analysis were of short duration»
  [@cipriani2018antidepressants]. An 8-week benefit
  estimate paired with adverse effects that accrue over months is an **incomplete benefit–harm balance** by
  construction.
- **The certainty is moderate-to-very-low, and the between-drug ranking is the fragile part** (next
  section).

## Acceptability — the class is roughly as tolerable as placebo, and why that is a composite

Acceptability was measured as **all-cause discontinuation** — «treatment discontinuation measured by the
proportion of patients who withdrew for any reason», chosen «because it encompasses efficacy and
tolerability»
[@cipriani2018antidepressants].

On this composite, most antidepressants did **not** differ from placebo:
«only agomelatine (OR 0·84, 95% CrI 0·72–0·97) and fluoxetine (0·88, 0·80–0·96) were associated with
fewer dropouts than placebo, whereas clomipramine was worse than placebo (1·30, 1·01–1·68)»
[@cipriani2018antidepressants].

**The composite nets a real harm against a real benefit — read it as a decomposition, not a clean bill.**
 All-cause dropout mixes two opposing forces: patients leave *less* when a drug works (fewer
inefficacy dropouts) and *more* when it causes side-effects (more tolerability dropouts). The separate
adverse-event-dropout outcome shows the tolerability side is uniformly worse — **all** active drugs had
higher withdrawal-for-adverse-events than placebo (ORs \~1.64–4.44), the sole exception agomelatine
[@cipriani2018antidepressants]. So *acceptability roughly
equal to placebo* does not mean *as side-effect-free as placebo*; it means the efficacy benefit roughly
offsets the side-effect cost in the *net* stay-on-treatment measure. The harm is present; the composite
absorbs it.

## The per-agent ranking exists but is low-certainty — do not read it as a prescribing order

The robust finding is **class-level** (all 21 > placebo). The **between-drug ordering is fragile**, and
Cipriani says so structurally:

- Differences between drugs are small with wide intervals: «differences in ORs between antidepressants
  ranged from 1·15 to 1·55 for efficacy and from 0·64 to 0·83 for acceptability, with wide CrIs on most of
  the comparative analyses»
  [@cipriani2018antidepressants].
- A **novelty-effect bias** inflates newer drugs: «when a treatment was the novel or experimental drug of
  comparison, it appeared to be significantly more effective than when that same treatment was the older or
  control drug of comparison (difference 1·18-times, 95% CrI 1·09–1·27). Adjusting for this novelty effect
  diminished the differences between antidepressants»
  [@cipriani2018antidepressants]. Smaller and older
  studies also showed larger effects (a small-study/bias signal).
- Per-comparison GRADE certainty is low-to-very-low for many drugs.

**Decision consequence**: at the margin, the choice of *which* first-line antidepressant is
weakly evidenced — the class effect is real and the ordering is mostly noise plus novelty bias. That is a
per-agent selection question (prescriber zone), not a fabric claim; this page records only that the
ranking is uncertain, and deliberately does **not** table the 21 drugs as a recommendation.

## What this class-efficacy finding does NOT establish (named gaps)

 from the source's own stated limits — the frontier of the standing-drug appraisal:

- **Withdrawal / discontinuation on stopping.** Cipriani explicitly did not cover it: «We did not cover
  important clinical issues that might inform treatment decision making in routine clinical practice (eg,
  specific adverse events, withdrawal symptoms, or combination with non-pharmacological treatments)»
  [@cipriani2018antidepressants]. This is the
  **limitations half** of the standing-drug appraisal, now supplied by Henssler 2024
  -> [[#Limitations — discontinuation and withdrawal (Henssler 2024)]] below.
- **Long-term efficacy and the full benefit–harm balance** — the acute horizon leaves maintenance and
  long-accruing harms unmeasured (above).
- **Individual-level effect modifiers.** «We analysed only average treatment effects and were not able to
  investigate potentially important clinical and demographical modifiers of treatment response at the
  individual patient level (eg, age, sex, severity of symptoms, or duration of illness)»
  [@cipriani2018antidepressants]. So there is no basis
  here for route-(b) personalization of drug choice.
- **Treatment-resistant depression / next step after failure.** «Given the modest effect sizes,
  non-response to antidepressants will occur. Our information unfortunately cannot guide next-step choices
  after failure of such a first step (ie, they do not apply to treatment-resistant depression)»
  [@cipriani2018antidepressants]. The finding is for
  **initial** treatment only; the excluded populations (psychotic, treatment-resistant) bound
  transportability.

<div class="recent-update" data-last-updated="2026-09-08">

## Limitations — discontinuation and withdrawal (Henssler 2024)

The limitations half of the standing-drug appraisal: what happens on **stopping**. Cipriani named this
as uncovered; Henssler 2024 supplies it — a gold SR+MA (79 studies, 44 RCTs, 21 002 patients) that is
the first to **quantify** discontinuation-symptom incidence and the first to include
**placebo-discontinuation arms** as the nocebo comparator.
[@henssler2024discontinuation]
This refines the efficacy page rather than contradicting it (**type-F**): the two sources answer
different sub-questions — Cipriani, does the class *work* acutely; Henssler, how hard is it to *stop* —
so their numbers are **not commensurable** and are never netted against each other (Cipriani's efficacy
SMD/OR is a symptom-scale effect vs placebo *on treatment*; Henssler's figures are withdrawal-symptom
*incidence proportions* on stopping — different quantities, different construct).

### The load-bearing move — separate raw incidence from the drug-attributable fraction

The raw discontinuation-symptom rate massively **over-states** the pharmacological withdrawal burden,
because it folds in nocebo/expectation effects and re-emerging depression. The placebo-discontinuation
arm is what isolates the part attributable to the drug.

- **Raw incidence (any symptom): \~1 in 3, but this is the inflated number.** «Incidence of at least one
  antidepressant discontinuation symptom was 0·31 (95% CI 0·27–0·35) in 62 study groups after
  discontinuation of antidepressants, and 0·17 (0·14–0·21) in 22 study groups after discontinuation of
  placebo. Between antidepressant and placebo groups of included RCTs, the summary difference in
  incidence was 0·08 [0·04–0·12].»
  [@henssler2024discontinuation] So \~1 in 6 people
  report discontinuation-*like* symptoms after stopping an inert **placebo** — the nocebo/non-specific
  floor.
- **Drug-attributable (the decision-relevant number): \~15%, one in six to seven.** «Subtracting non-
  specific effects, we estimate the frequency of antidepressant discontinuation symptoms to be in the
  range of approximately 15%, thus affecting about one in six to seven patients.»
  [@henssler2024discontinuation] Two anchor points
  bracket it: the **clean within-RCT** drug-minus-placebo risk difference is **0.08 (0.04-0.12)**; the
  broader raw-minus-placebo gap is **\~15%** (the authors' headline). Read \~8-15%, not 31%.
- **The nocebo share is large — about half.** «Considering the placebo results, approximately half of
  antidepressant discon­tinuation symptoms could be attributable to expectation or non-specific
  symptoms» — placebo-arm patients «might expect to be discontinuing from verum and thus would be
  susceptible to nocebo effects.»
  [@henssler2024discontinuation] Same design logic as
  the statin-nocebo isolation -> [[The Observational-Trial Discordance]] (an inert-pill arm isolates the
  nocebo component of a *side-effect*). This is the **second drug class** to show it: statin muscle
  symptoms run \~90% nocebo by within-person n-of-1 (Wood/SAMSON), antidepressant discontinuation \~50% by
  placebo-arm — an independent cross-class confirmation that the *design* travels, though the magnitudes
  differ -> [[Statin Muscle Symptoms and the Nocebo Effect]] `[E-independent]`. The shared decision rule:
  do not discontinue on reported symptoms alone; a placebo-controlled taper separates real withdrawal from
  the nocebo component.
- **Severe symptoms are uncommon: \~1 in 35, drug-attributable \~1 in 45.** «The incidence of severe
  antidepressant discontinuation symptoms after discontinuation of an antidepressant was 0·028
  (0·014–0·057) compared with 0·006 (0·002–0·013) after discontinuation of placebo.»
  [@henssler2024discontinuation] The 0.028 vs 0.006 gap
  is the drug-attributable severe fraction; the authors call the \~1-in-35 severe figure **preliminary**.

### Three qualifications on the withdrawal numbers

 — each narrows what the incidence figures license.

- **The \~15% is possibly an over-estimate, not a floor.** «we conservatively estimate that one out of
  six to seven patients has truly pharmacologically caused anti­depressant discontinuation symptoms.
  This might still be an over-estimate, as it is difficult to factor in residual or re-emerging symptoms
  of depression or anxiety.»
  [@henssler2024discontinuation] Re-emerging depression
  masquerades as withdrawal and cannot be cleanly subtracted, so the true pharmacological share sits at
  or below \~15%.
- **The measurement instrument manufactures symptoms — a streetlight artifact.** Structured checklists
  (e.g. DESS, >40 items) raised the count even in placebo arms: «the use of established instruments in
  placebo discon­ tinuation studies also resulted in higher antidepressant discontinuation symptoms
  event rates, indicating the risk of false positive signals.»
  [@henssler2024discontinuation] A >40-symptom
  checklist over a non-specific symptom set (dizziness, headache, nausea, insomnia) catches base-rate
  complaints; the tool inflates the estimate independent of any drug. Heterogeneity was substantial
  throughout (I² \~94%, wide prediction intervals), so a single trial can land far from the pooled rate.
- **Study-level tapering showed no effect here — but that does NOT refute individual hyperbolic taper.**
  «We did not find a difference between studies that applied tapering of the drug and studies with
  abrupt cessation of the drug. The substantial heterogeneity in study designs (eg, duration of taper)
  and specific antidepressants used preclude firm conclusions; for example, all trials on venlafaxine
  and desvenlafaxine were among the studies that applied tapering.»
  [@henssler2024discontinuation] This is an **indirect,
  study-level** comparison (ecological-fallacy risk — high-withdrawal agents happen to be the tapered
  ones); it does not overturn the separate within-patient evidence that prolonged/hyperbolic tapering
  reduces (not eliminates) withdrawal. *Which* taper regimen is prescriber-zone and not appraised here.

### Decision consequence

 For the counselling decision at stopping: the honest number to give a patient is **\~1 in 6
to 7** will have genuinely drug-caused discontinuation symptoms and **\~1 in 35** a severe one — not the
1-in-2-or-more figures from selection-biased surveys the authors set out to correct, and not the raw
1-in-3 (which counts nocebo and returning illness). Higher caution for imipramine, paroxetine, and
venlafaxine/desvenlafaxine; the per-agent ordering is otherwise preliminary (wide CIs; mirtazapine,
bupropion, amitriptyline unstudied). This is a **stratum-level appraisal of a standing drug's
limitation**, not a discontinuation protocol; tapering-regimen selection stays prescriber-zone.

</div>

## Limitations — weight gain and metabolic side-effects (Alonso-Pedrero 2019)

The other standing-drug limitation Cipriani left uncovered (specific adverse events): what the class
does to **body weight** — a decision-relevant co-consideration for anyone in the obesity / metabolic
stratum. Alonso-Pedrero 2019 is the SR of record: 27 cohort studies (PubMed, 2008-Jan 2019, PRISMA),
of which 7 covered antidepressants (6 rated *good* on the Newcastle-Ottawa scale).
[@alonsopedrero2019weight]
It is a **narrative SR of observational cohorts, not a meta-analysis**: «As the identified studies
involved different populations, drugs, and dosages, no quantitative meta‐analyses were done»
[@alonsopedrero2019weight]. So there is
**no pooled effect** — every per-agent figure below is a single-study anchor, and the whole appraisal
inherits observational confounding (qualifications below). This refines the standing-drug appraisal
(**type-F**): it fills the specific-adverse-event gap Cipriani named, so the composite (efficacy +
discontinuation + weight) beats any single source; the numbers are not commensurable with Cipriani's
efficacy SMD/OR or Henssler's withdrawal incidence and are never netted against them.

**Recency update — Moss 2025 (narrative, refines; NOT independent).** A narrative "Update" review
(Curr Obes Rep) supplies the post-2019 refinement below. It is **not type-E independent backing** — it
cites Alonso-Pedrero directly (its ref [8]) and narrates the same overlapping literature, so it cannot
raise confidence by convergence; `confidence:` stays **low**. It *corroborates* Alonso-Pedrero's
load-bearing structure — the agent (not the class) carries the effect, reverse-causation/return-to-
normal confounding, and bupropion-first-line for overweight (Moss's ref [8] for that last is
Alonso-Pedrero itself) — and it *refines* specific agents with newer, CI-bearing single studies. *Corroborated by Moss (2025).*
[@moss2025antidepressants]

### The finding — real gain, but mostly sub-clinical on the FDA cut, and gradual

- **Magnitude \~5%, below the ≥7% threshold antipsychotics cross.** «Most of the included studies showed
  a 5% weight gain in individuals using antide‐ pressant therapy»
  [@alonsopedrero2019weight]. Absolute
  anchor: Patten reported «+5.0 kg (95% CI, 4.3‐5.8)» over 12 y on any antidepressant vs +3.7 kg in
  untreated depression
  [@alonsopedrero2019weight]. The FDA's
  clinical-significance cut is **≥7% of baseline**, which «only a few drugs (Quetiapine, Haloperidol,
  Risperidone, Olanzapine, and Clo‐ zapine) are able to produce»
  [@alonsopedrero2019weight] — all
  antipsychotics; the antidepressant class mostly sits at \~5%, below it.
- **The gain is gradual — short trials under-state it.** Gafoor (n=314,449, 10-y follow-up) found «the
  risk of increasing weight by in more than 5% was 21% higher in subjects treated with antidepressants
  vs subjects that were not treated», rising to 46% and 48% higher risk in treatment years two and three
  [@alonsopedrero2019weight].

### The load-bearing move — the agent, not the class, carries the effect

 *Antidepressants cause weight gain* is too coarse for a decision: the direction and size
differ sharply by drug, and that differential IS the co-consideration.

- **Gainers.** The SR's positive-association list is mirtazapine, fluoxetine, citalopram, escitalopram,
  sertraline, paroxetine, trazodone, venlafaxine and duloxetine — «Venlafaxine, and Duloxetine had a
  positive association with weight gain»
  [@alonsopedrero2019weight]. Mirtazapine is
  the standout (one 2-y cohort: +5.3 kg, though non-significant, p=.12).
- **Weight-neutral / loss — bupropion.** Bupropion showed weight *loss* of about -3.22 kg (-7.1 lb) over
  2 y «in subjects taking Bupropion compared with Fluoxetine in non‐smokers, while smokers that used
  Bupropion gained +2.2 lb» (\~+1 kg — so the loss is confined to non-smokers)
  [@alonsopedrero2019weight]. The SR argues
  «it should be the first‐line drug for individuals affected by overweight»
  [@alonsopedrero2019weight] — consistent
  with bupropion's role in anti-obesity pharmacotherapy -> [[Comparing Obesity Drugs]].
- **TCAs — no clear association.** «it suggests that there is no association between TCAs and weight
  gain» [@alonsopedrero2019weight] (the SR's
  results read it null; the discussion softens to *doubtfully associated* — mixed across studies).

### Three qualifications on the weight numbers

 — each narrows what the figures license; all follow from the observational, no-MA design.

- **Confounding by indication / reverse causation.** The disorder itself moves weight: «We cannot
  exclude the possibility that psychiatric disorders rather than the treatment were the reasons for
  changes in body weight»
  [@alonsopedrero2019weight] — a measured
  gain can be a *return to normal* after illness-driven loss, not a drug effect. Same referent-correction
  discipline as elsewhere -> [[The U-Shaped Association Artifact]].
- **Lifestyle confounding, unevenly adjusted.** «in some studies, the statistical analysis was performed
  after adjustment for potential confounders such as dietary intake or lifestyle factors, but others
  not» [@alonsopedrero2019weight]; higher
  energy intake in users may partly mediate, and the gain concentrates in unhealthy-lifestyle strata
  (smoking, sedentary, Western diet). This is the dietary-measurement-error channel again
  -> [[Measurement Error in Dietary Assessment]].
- **Effect-modifiers — age is the antidepressant-specific one.** «individuals under 50 years old were
  more likely to gain weight after antidepressant treatment than individuals over 65 years»
  [@alonsopedrero2019weight]; older adults
  tend instead to lose weight (reduced muscle mass). The SR's other predictors — female
  sex, lower baseline BMI, non-smoking — are stated for the *antipsychotic (FGA)* arm or specific
  subgroups (e.g. underweight dementia patients), **not** established for the antidepressant class, so
  they are not asserted here. The \~5% average still hides real spread by age and by agent — the stratum
  matters.

### Post-2019 per-agent refinement (Moss 2025)

[@moss2025antidepressants] unless marked. Newer single
studies (Moss cites each by bracket-ref only, so they are named by design + n, "via Moss", never an
invented primary author) sharpen or attenuate specific agents. None is a pooled effect; all inherit the
observational/narrative caveats above.

- **A larger comparative trial gives CI-bearing per-agent anchors vs sertraline as reference** (n=183,118
  adults; via Moss ref [39], 6-24 mo). Escitalopram/paroxetine «gained 0.3 to 0.4 kg more, with a 10 to
  15% increased risk of gaining at least 5% of initial body weight when compared to sertraline users after
  6 months». Fluoxetine favorable but non-significant: «greater weight reduction at 24 months (difference =
  −0.20 kg [95% CI, −0.45–0.05])». Bupropion favorable and **significant**: «a 15% reduced risk of gaining
  significant weight (≥ 5%) at 6 months ... weight difference at 12 months = −0.71 kg [CI, −0.87 to
  −0.55 kg]; ... 24 months = −0.91 kg [CI, −1.14 to −0.66 kg]». This sharpens Alonso-Pedrero's
  non-smoker-only bupropion-loss reading — the loss now shows with CIs excluding 0 across 12-24 mo.
- **SNRIs — attenuates Alonso-Pedrero's gainer list.** Alonso-Pedrero listed venlafaxine + duloxetine as
  positive-association gainers; a newer **network MA (n=9,384 adults; via Moss ref [42])** finds «neither
  were associated with weight gain». Held as an F-refinement (both readings retained): the SNRI-as-gainer
  signal is weak/heterogeneous on newer pooled evidence, not settled.
- **TCAs — narrows Alonso-Pedrero's null to a within-class split.** Alonso-Pedrero read TCAs as no /
  doubtful association; Moss refines to tertiary-vs-secondary amines: tertiary amines (amitriptyline,
  imipramine, clomipramine, trimipramine, doxepin) gain more than secondary amines, with anchors
  «amitriptyline ... acute ... and long-term use (1.52 kg and 2.24 kg, respectively) while nortriptyline
  ... acute treatment (2.00 kg)». A 24-wk head-to-head put TCA ≥3%-gain at 34.9% vs SSRI 26.6% vs SNRI
  22.4% (n=39 TCA arm; **not statistically significant**). So *some* TCAs do gain — the earlier null was
  too coarse.
- **Newer post-2019 agents Alonso-Pedrero (window to Jan 2019) could not see, mostly weight-neutral:**
  gepirone (no clinically significant gain across five 1999-2004 studies), zuranolone (nonsignificant
  trend), vortioxetine and vilazodone («more weight neutral effects»), and dextromethorphan-bupropion
  («short-term weight-neutral effects (−0.2 kg change from baseline at 6 weeks)»). These widen the
  weight-favorable menu beyond bupropion.
- **Biological *predictors* of weight change — route-(b) CANDIDATES, not established effect-modifiers.**
 Moss frames genetics/biology as predicting an individual's threshold, but each rests on a
  single study with no pooled interaction test, so these are **candidate** modifiers (route b), not
  confirmed ones — and Moss itself calls pharmacogenetic testing «somewhat controversial and not broadly
  accepted». (i) *CYP2C19 metabolizer phenotype*: «poor and intermediate CYP2C19 metabolizers prescribed
  citalopram were found to have a mean weight gain of 1.7% after 6 months ... in comparison to rapid
  metabolizers who experienced an average decrease in weight of 1.2%» — a \~2.9-percentage-point spread,
  one study, citalopram only. (ii) *Chronic low-grade inflammation* as a predictor of «expediting
  antidepressant weight gain». Neither licenses route-(b) personalization yet; they mark where positive
  interaction evidence would.

### Decision consequence

 For someone in the obesity / metabolic stratum weighing an antidepressant, **agent choice
is a real lever on the weight co-consideration**: bupropion is weight-favorable (significant loss vs
sertraline across 12-24 mo, and it doubles as an anti-obesity agent -> [[Comparing Obesity Drugs]]);
the weight-neutral menu is now wider (fluoxetine and sertraline lower-risk; newer gepirone, vortioxetine,
vilazodone, zuranolone weight-neutral); tertiary-amine TCAs (amitriptyline, imipramine) and mirtazapine
are least favorable, with escitalopram/paroxetine mildly unfavorable vs sertraline. A concrete action
rule, via Moss (2025): a **≥5% gain from baseline** «suggests reconsideration of treatment and discussion
of switching to an antidepressant with lower risk of weight gain»
[@moss2025antidepressants]. Two guards hold. (i) The cost is
**modest and sub-FDA-threshold** (\~5%) for most agents — far smaller than the antipsychotic class, and
to be **netted against** the drug's acute efficacy (above), never read as a reason to avoid indicated
treatment. (ii) *Which* agent — and any adjunct (metformin, GLP-1 RA, topiramate) or bariatric route —
is **prescriber-zone** (selection, contraindications, the person's other indications); this page records
only that the weight differential exists and runs bupropion-favorable. **Gap (needs aggregation, still
open):** the recency/per-agent update landed (Moss 2025), but no *pooled* RCT estimate of the per-agent
weight effect exists — Alonso-Pedrero is an SR of cohorts and Moss is narrative (single-study anchors),
so the magnitude ordering remains an aggregation the wiki structurally cannot compute.

## Substitution — where the class sits against the realistic alternatives

 The telos frames a drug as the realistic comparator to lifestyle levers. For depression the
realistic alternatives to a first-line antidepressant are **psychotherapy and exercise**, both appraised
on the cluster nucleus -> [[Depression and Modifiable Exposures]]. Two guards on any such comparison:

- **Comparator mismatch — do not weld the numbers.** Cipriani's OR/SMD are vs **placebo**; the exercise
  network's SSRI estimate (g \~−0.26) is vs an **active control** and comes from a review not designed to
  find all drug trials. These are different quantities on different reference groups, so the head-to-head
  *exercise-beats-SSRIs* reading lives on the nucleus page with its own caveats and must not be restated
  here as if Cipriani supported it.
- **Non-substitutable where it is non-substitutable.** A drug that delivers an acute symptom-scale response
  does not thereby substitute for the pleiotropic other-channel value of exercise (cardiometabolic,
  function); the substitution is outcome-specific. Conversely a modest acute drug effect is a real option
  for someone unwilling or unable to sustain a behavioural lever — the choice stays the person's (layer 3).

**Open loop:** nothing here grades the class against a *realized* long-term patient outcome. The evidence
is acute, symptom-scale, moderate-to-very-low certainty; the trajectory and functional outcomes depression
most degrades are under-measured -> [[Surrogate Outcomes]].

## References

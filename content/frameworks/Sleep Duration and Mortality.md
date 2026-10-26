---
type: framework
question: How much sleep, and is the short/long mortality U-curve causal or a marker of illness?
aliases: [Sleep Duration, Sleep and Mortality, Short Sleep, Long Sleep, Sleep U-Curve, How Much Sleep]
authors: [Cappuccio, Francesco P; D'Elia, Lanfranco; Strazzullo, Pasquale; Miller, Michelle A; Livingston, Gill; Yin, Jiawei; Liu, Liegang; Wang, Shanshan; Ai, Sizhi]
sources: [Cappuccio - Sleep Duration and Mortality 2010, Livingston - Dementia Prevention 2024, Yin - Sleep Duration Mortality Dose-Response 2017, Wang - Sleep Duration Cardiovascular Meta-Review 2022]
cluster: sleep
nucleus: true
confidence: medium
created: 2026-07-28
updated: 2026-10-22
self_critiqued: 2026-10-22
relationships:
  related_to:
    - The U-Shaped Association Artifact
    - Alcohol and Mortality and Vascular Disease
    - Measurement Error in Dietary Assessment
    - Sleep and Metabolic Health
    - Sleep Regularity and Mortality
    - Sleep Aids and Insomnia Treatment
    - Dementia Prevention and Modifiable Risk Factors
    - Sleep and Cognitive Decline
---

Opens the `sleep` cluster. Both short and long sleep are associated with higher mortality — a U-curve
around a \~7-8 h reference. But the two arms are **not the same kind of finding**, and reading them as
one (*any deviation from 7-8 h shortens life*) is the error this page exists to prevent.



## The U-curve — two arms, very different footing

| Arm (vs \~7-8 h reference) | Pooled RR (95% CI) | Heterogeneity | Source |
|---|---|---|---|
| **Short sleep** (commonly <7 h, often <5 h) | **1.12 (1.06-1.18)** | I2 = 39% | Cappuccio |
| **Long sleep** (commonly >8-9 h) | **1.30 (1.22-1.38)** | I2 = 71% | Cappuccio |

[@cappuccio2010]

16 studies, 27 cohorts, 1.38 million people, 112k deaths, all-cause mortality; reference «7 to 8 h per
night». Short-follow-up studies (<3 y) were «excluded a priori... to avoid measurements of sleep
duration being too close to the time of death» — a reverse-causation guard applied to all studies, i.e.
both arms (corrected 2026-10-22: previously described as a guard on the *short* arm only).

## The asymmetry is the finding — one arm is likely causal, the other a marker of illness

**The long-sleep arm is the larger association and the weaker claim** — an instance of
[[The U-Shaped Association Artifact]] in its reverse-causation form. Cappuccio adjudicates it directly:

> «no studies published to date have demonstrated a possible mechanism mediating the effect of long
> duration of sleep as a cause of morbidity and mortality. The association between long duration of
> sleep and mortality may be explained by residual confounding and co-morbidities.»

Named confounders/reverse-causes: «depressive symptoms, low socio-economic status, unemployment, low
level of physical activity, undiagnosed health conditions, poor general health, and cancer-related
fatigue». The authors' framing: long sleep «may be a powerful additional marker of ill-health» and
«sleeping 9 h or more per night may represent a useful diagnostic tool for detecting subclinical or
undiagnosed co-morbidity».
[@cappuccio2010]

**Three features are consistent with an artifact (none discriminating on its own)** — each is what the
concept says to look for, but each also fits a causal reading:

- it is the **larger** association (1.30 vs 1.12) yet the one with **no mechanism**;
- it has **much higher heterogeneity** (I2 71% vs 39%);
- it **strengthens with age and with a longer cutoff** — «stronger in older than younger cohorts» (>=60 y
  RR 1.46 vs <60 y 1.22) and rising «>8 h, >=9 h... >=10 h» (>=10 h RR 1.54) — consistent with a
  frailty/illness gradient, though a larger RR at a more extreme cutoff is also what a causal dose-response
  predicts; Cappuccio's own reading of the East Asian long-arm excess (below) runs through deaths in elderly
  participants, an age account (frailty is the wiki's gloss, not Cappuccio's word) that fits the artifact
  reading rather than discriminating it. The
  short arm, by contrast, shows **no significant subgroup difference** (age, sex, SES, cutoff, follow-up,
  geography; cutoff
  heterogeneity P=0.89; geography P=0.31), though subgroup point estimates range 1.09-1.25 with wide CIs
  (e.g. <=6 h 1.19, 0.90-1.56; East Asia 1.25, 1.07-1.46).
[@cappuccio2010]

The authors still read a geographic signal in both arms despite the non-significant short-arm test:

> «There was some indication that the mean effects for both short and long duration of sleep were stronger
> in studies carried out in East Asia, predominantly Japan. The explanations may be different.»
> [@cappuccio2010]

> «For long sleep, the stronger association with mortality may, al least in part, be the result of longer
> life expectancy in countries like Japan compared to Europe and the US. It is likely that the shape of the
> relationship between sleep dura­ tion and mortality is heavily influenced by deaths in elderly participants.
> This view is supported by a stronger effect of long duration of sleep on all-cause mortality in older
> cohorts (≥ 60 years).»
> [@cappuccio2010]

(corrected 2026-10-22: previously *Three tells confirm the long arm is artifact-shaped* and *a frailty/illness
gradient, not a physiological dose-response* — these features do not discriminate artifact from cause; the
discriminating checks are Wang's MR nulls, Livingston's 5-year-exclusion attenuation and Yin's
incidence-restricted null long arm, all below. Also added Cappuccio's East Asia qualifier, which covers
**both** arms, not the long arm only. Amended same day: the subgroup sentence previously said Cappuccio
*offers a non-artifact reading of one subgroup*, resting on a life-expectancy quote cut before Cappuccio's
elderly-deaths and older-cohort sentences; the full passage is an age/frailty reading.)

**The short-sleep arm has the causal footing the long arm lacks.** It carries a named mechanism —
«reciprocal changes in circulating levels of leptin and ghrelin... increase appetite, caloric intake,
reduce energy expenditure... impaired glycemic control with increased cardiovascular risk», plus
cortisol, growth hormone, and low-grade inflammation — and cause-specific directional evidence from
Whitehall II: those who **curtailed** sleep died «predominantly from cardiovascular causes (2.04)»
while those who **increased** sleep died mainly of «non-cardiovascular» causes (2.06) — the pattern
expected if short sleep is causal and long sleep tracks illness.
[@cappuccio2010]

**The same arm-asymmetry replicates on the COGNITION/dementia endpoint (different outcome, same shape)
.** A gold sleep -> cognition SR+MA (Zhang 2025) finds the long arm again the larger,
mechanism-poor, age-dependent one *for dementia/AD* — long sleep (> 8 h) is associated with all-cause
dementia, AD and cognitive decline, while short sleep (< 7 h) is associated with cognitive decline but not
with all-cause dementia/AD (Zhang's Results: cognitive decline RR 1.27 short vs 1.23 long, overlapping CIs);
long sleep reads as an APOE-driven preclinical marker (reverse causation), unadjudicated by any strong check
(corrected 2026-10-22: previously said short sleep *does not* drive the cognition endpoint, omitting that it
is associated with cognitive decline; corrected again 2026-10-22: dropped *the arm that primarily raises
cognitive-decline risk* — 1.27 vs 1.23 cannot support *primarily*, and Zhang reports long sleep raising
cognitive decline too). So the mortality U's *long arm
is a marker of illness* reading transports to dementia ->
[[Sleep and Cognitive Decline]], [[Dementia Prevention and Modifiable Risk Factors]].

**Caveat on the leptin/ghrelin mechanism — the RCT evidence does not confirm it.** The appetite-hormone
axis cited above is the popular *explanation*; a meta-analysis of sleep-manipulation RCTs found **no**
significant pooled effect of sleep restriction on leptin or ghrelin, and reports Chaput & St-Onge's view
that hedonic factors are likely stronger (corrected 2026-10-22: the hedonic conclusion is Chaput &
St-Onge's, cited by Capers, not Capers' own). Sleep restriction appears to raise food intake
experimentally, and the hormonal route is unconfirmed (few small, heterogeneous trials, with
opposite-signed ghrelin results and a total-ghrelin assay the authors say limits interpretation) — so hold
leptin/ghrelin as a discounted mechanism, not a demonstrated one -> [[Sleep and Metabolic Health]] (Capers
2015, where this refinement and the T2D/adiposity evidence live). (corrected 2026-10-22: previously *does
not support it*, *does reliably raise food intake* and *not via the hormonal route* — a null from few
heterogeneous trials is insufficient evidence, not a demonstrated exclusion, and Capers' Conclusions say
only that the experimental literature suggests the intake rise.)


## Second outcome — dementia, and the arm-level split partly replicates

The 2024 Lancet Commission examined sleep as a candidate dementia risk factor and its verdict is consistent
with this page's arm-level asymmetry on the long arm, but stops short of a causal short arm
-> [[The U-Shaped Association Artifact]] (corrected 2026-10-22: previously said the verdict reproduces the
asymmetry *exactly*). The **long-sleep arm reads as reverse causation**: «further evidence indicates that
prolonged sleep is not a risk factor for dementia, although dementia and its prodrome may cause prolonged
sleep. People should not curtail their sleep to reduce dementia risk.»
[@livingston2024] The tell is decisive — a Swedish
cohort's long-sleep/dementia association «was completely attenuated after cases occurring in the first 5
years of follow-up were excluded», the signature of reverse causation. The **short-sleep arm is a small
association the Commission judges insufficient** (million-woman study RR 1.08, 1.04-1.12 for <7 h;
persistent <=6 h at 50/60/70 a «30% increased dementia risk»): «Overall, current evidence appears to indicate
that short sleep duration may be associated with a small, increased risk of dementia but there is a lack of
evidence about the characterisation of short sleep, and no information on sleep quality or circadian rhythm
disturbance which may be the factors associated with increased risk of developing dementia rather than length
of sleep. Therefore, the evidence about short sleep has not yet been clarified enough to be sure of
causation.» It lists «too little sleep» among factors with «not enough consistent evidence to meet our high
bar of being included as modifiable risk factors», and states «We are unable to make recommendations on sleep
as a risk factor.» [@livingston2024] So dementia adds a second
outcome where the long arm does not look causal, but it does NOT add a causal short arm (corrected
2026-10-22: previously called the short arm *mechanism-backed* and dementia an outcome *where the short arm
looks causal*; the Commission's mechanisms paragraph concerns sleep disturbances generally, not short
duration). The Commission declined to list sleep as a modifiable risk factor — while still advising against
curtailing sleep — an insufficient-evidence stop the wiki mirrors (corrected 2026-10-22: previously said it
declined to make *any* sleep-duration recommendation).

## Third outcome — CVD events (CAD/HF/stroke), and the MR strong check lands `[2026-09-02, Wang]` `type-F`

Cappuccio's evidence above is all-cause mortality; Yin covers all-cause mortality plus total CVD, CHD and
stroke, pooling CVD events reported as incidence or mortality (and stratifying by that variable — below).
(corrected 2026-10-22: previously said the held sleep-CVD evidence was *mortality-only (Cappuccio, Yin)* —
Yin is the one held source that separates incidence from mortality.) Wang 2022 — a meta-review that accepts
the conclusions of four observational MAs (without re-pooling them) and meta-analyses 11
Mendelian-randomization (MR) studies — adds CAD/CHD, HF and stroke endpoints AND supplies the **genetic
strong check** the causal-vs-marker split above rested on *argument* for. Referent 7 h throughout.

**Observational CVD events (incidence + mortality pooled) — the same U/J the mortality curve shows.**
(corrected 2026-10-22: previously labelled *Observational CVD incidence*; Wang defines stroke as «ischemic
and hemorrhagic strokes that are fatal or non-fatal»
[@wang2022sleep], so these pools mix
fatal and non-fatal events.) CHD is U-shaped (Wang D. 2016,
AMSTAR 11): vs 7 h, per 1 h *reduction* RR 1.11 (1.05-1.16) and per 1 h *increment* RR 1.07 (1.00-1.15),
both with high heterogeneity (I2 59-71%). Stroke is J-shaped (He 2017, 16 cohorts, 528,653): per additional
hour RR 1.13 (1.07-1.20), the long arm steep (9 h 1.45, 10 h 1.64).
[@wang2022sleep]

**The MR causal check — MR supports a probable causal role for short sleep in CAD/MI/HF (not stroke;
mortality untested).** (corrected 2026-10-22: heading previously *short sleep is CAUSAL, and it is the arm
with the mechanism* — stronger than Wang's own «accumulating» / «may be» wording, and silent on the
short-sleep nulls below.) Genetically-predicted
short sleep raises CAD (pooled IVW OR 1.24, 1.15-1.34), MI (OR 1.20, 1.12-1.28), and HF (both MR studies
positive; Zhao IVW OR 1.14, 1.03-1.26); per-hour *longer* genetically-predicted sleep is protective for CAD
(OR 0.74, 0.59-0.92) and MI (OR 0.84, 0.73-0.97). Wang's verdict: «evidence is accumulating that short sleep
duration is a causal risk factor for CAD and HF», and «short sleep duration rather than long sleep duration
is associated with the risk of CAD or HF».
[@wang2022sleep]

The short arm has its own nulls and hedges, which bound that verdict:

- **Stroke is null for short sleep too:** «no causation was found between short sleep duration and any
  ischemic stroke (AIS; OR = 0.97, 95% CI = 0.86–1.10, P = 0.64) and primary intracranial hemorrhage (ICH;
  OR = 0.81, 95% CI = 0.53–1.24, P = 0.33)»
  [@wang2022sleep]
- **Two CHD MRs were inconsistent**, which Wang attributes to power: Zhuang et al. and Liao et al.
  «reported inconsistent results for the causal association between short sleep duration and CHD. The
  limited number of genetic variants used in these studies may have reduced the statistical power of the MR
  estimates.» [@wang2022sleep]
- **Wang's own conclusion is hedged and leaves mortality open:** «short sleep duration may be a causal risk
  factor for many CVDs», and «The causal associations of short and long sleep durations with the risks of
  stroke and mortality need further investigation.»
  [@wang2022sleep]

(corrected 2026-10-22: these short-sleep nulls and hedges were previously omitted while the long-sleep
nulls were reported — scrutiny had been applied to one arm only.)

**The MR does NOT support long-sleep causality — but that is insufficient evidence, not a demonstrated null.**
Neither MR study found a causal CAD association for long sleep, both HF MR studies were null, and stroke was
null — Wang states «long sleep duration has no causal associations with stroke and CAD in the MR studies».
This is the arm the observational curve most inflates: Wang attributes the long-sleep observational signal to
long sleep being «a surrogate risk indicator for poor health status or sleep quality» and associations that
«may have been confounded by these unmeasured factors and reﬂected potential reverse causality». **But the MR
long-sleep nulls are underpowered, not decisive** — the genetic instruments for long sleep are few (one MR
did «no analysis» for want of SNPs), and Wang concedes «MR studies ... did not provide suﬃcient evidence
supporting the causal association between long sleep duration» and «No clear experimental evidence shows the
harmful eﬀects of long sleep duration». So the long arm moves from *argued-artifact* toward
*genetically-unsupported*, without a demonstrated no-effect -> [[The U-Shaped Association Artifact]] (this is
the strong check that instance awaited).
[@wang2022sleep]

**Decision refinement.** For a **short** sleeper (<7 h), the causal footing is now stronger for CAD/HF — MR
converges with the mechanism and Whitehall direction, so extending toward 7-8 h is a lever with genetic
support for CAD/HF; MR does not test adult sleep extension (it estimates lifelong genetic liability) or
mortality, and Wang itself calls extension «a potentially promising strategy» (corrected
2026-10-22: previously *a lever with genetic support* without the outcome and design limits). For a
**long** sleeper, the genetic check gives no reason to treat long sleep as a modifiable cause, so shortening a
long sleeper's sleep is not a supported lever. Wang's own long-sleeper sentence says something
different — it advises against telling long sleepers to sleep *more*, not to sleep less: «For people who have
a long sleep duration, we should not directly recommend increasing sleep duration to reduce the risk of CVDs»
[@wang2022sleep] (corrected 2026-10-22: this
quote was previously cited as warrant for *don't shorten*; it speaks only against lengthening).
NOT an independent-E corroboration of Cappuccio: Wang does not re-pool the cohorts — «we accepted the
conclusions of the meta- analyses of observational studies rather than performing a meta-analysis» — but the
MAs it accepts rest on the same overlapping observational cohorts, so the observational agreement is
shared-base, not independent; the beyond-summary value is the MR *method* leg (a genetic natural experiment)
triangulating the same question.

[inferred from @wang2022sleep]

## Duration is not the only axis — two facets now sit under this nucleus

- **Regularity may be the stronger lever.** Objective accelerometry shows day-to-day *consistency* of
  sleep timing (Sleep Regularity Index) out-predicts *duration* for mortality in the same cohort — a
  distinct exposure the duration-centric guidelines miss -> [[Sleep Regularity and Mortality]].
- **Treatment is its own decision.** Once insomnia is present, the choice among CBT-I, hypnotics and
  melatonin turns on harm + durability, not sleep-number effect size -> [[Sleep Aids and Insomnia Treatment]].
[inferred from @windred2023]

## Decision relevance

- **The actionable arm is short sleep.** Chronic short sleep (roughly <=5-6 h) carries the excess; 6 h is
  \~1.01 vs 7 h (Yin). The pooled \~12% (Cappuccio, «if causally related») is a shortest-vs-referent figure,
  not a per-person risk for 6-7 h sleepers. The causal case rests on MR for CAD/HF plus the Whitehall
  direction; the named leptin/ghrelin mechanism is unconfirmed in RCTs (above). A lever worth pulling
  toward \~7-8 h for the chronically short. (corrected 2026-10-22: previously *Chronic short sleep (<7 h,
  especially <5 h) carries a real \~12% higher mortality with a plausible causal mechanism* — dropped
  Cappuccio's «if causally related» and attached the pooled figure to the 6-7 h band the Yin section
  below resolves as \~1.01.)
- ***Sleep less to live longer* is not supported.** The 30% long-sleep risk is most plausibly a *marker*
  of underlying illness (no MR support for causation, though underpowered; incidence-restricted signal
  null in Yin); shortening a long sleeper's sleep is optimising a symptom, not the cause. A habitual long
  sleeper is a candidate for evaluation of occult illness, not a sleep-reduction target. (corrected
  2026-10-22: previously *mostly a marker* — the page holds the long arm as insufficient evidence, not a
  settled artifact.)
- **The reference is \~7-8 h**, and the curve is shallow near it — precision beyond "adequate, not
  chronically short" is not warranted by this evidence.


[inferred from @cappuccio2010]
«if causally related» [@cappuccio2010];
6 h \~1.01 [@yin2017].

## "7-8 h" is a referent, not a validated target with an upper bound `[2026-08-07, maintainer challenge]`

Three honest limits on reading *aim for 7-8 h* off this evidence:

- **The short arm is POOLED and flat across cutoffs, so 6-7 h is not resolved from <5 h.** Cappuccio's
  short-sleep category bundles 6-7 h with chronic <5 h, and the short-arm RR is flat across cutoff
  definitions (heterogeneity P=0.89, above). So \~1.12 is the *pooled* short-sleep RR — not evidence that
  6-7 h specifically carries it; the risk most plausibly concentrates at *chronic* short sleep (<5-6 h),
  making the lower bound arguably **6+ h**, not a hard 7 h. (12% is also small for an observational metric,
  near the range residual confounding alone can produce; it is believed over the long arm only because it
  carries a mechanism + the Whitehall cause-specific direction, not because 12% is itself compelling.)
- **No evidenced harm at the upper end — so "up to 8 h" is not a ceiling.** The long-sleep association is
  most plausibly a reverse-causation/confounding artifact (no MR support for causation, underpowered;
  incidence-restricted signal null in Yin), NOT evidence that sleeping 8+ h harms a healthy person
  (corrected 2026-10-22: previously *is the reverse-causation artifact* — the page holds the long arm as
  insufficient evidence, not a demonstrated null). Stating an *upper bound* launders that artifact into a
  dose-response cap — and the page's own rule already holds that shortening a long sleeper's sleep optimises
  a symptom, not a cause.
- **Between \~7 and 8 h is most plausibly diminishing returns, not a knee or a harm boundary.** The curve is
  shallow near the referent; precision beyond *adequate, not chronically short* is not warranted, and
  neither is a stated upper cap.
[inferred from @cappuccio2010]

## The sub-7 h band, RESOLVED — Yin's per-hour curve `[2026-08-13, Yin]` `type-F`

Cappuccio pools all short sleep into ONE flat category (1.12, invariant across cutoffs, P=0.89), so it
**cannot say whether 6-7 h carries the penalty or only chronic <5 h**. Yin 2017 — a larger dose-response
SR+MA (67 articles, 141 reports, 3.58 M participants; restricted-cubic-spline, 7 h reference) — resolves
the arm per discrete hour. This is a claim-**refinement** (type-F), not independent backing: same design
class (SR+MA of self-reported prospective cohorts), same outcome, overlapping cohort base — Yin
disaggregates the quantity Cappuccio pooled.

| Parameter | Cappuccio 2010 (pooled) | Yin 2017 (per-hour spline) | Same quantity? |
|---|---|---|---|
| Outcome | all-cause mortality | all-cause mortality | yes |
| Design | SR+MA, prospective cohorts | SR+MA dose-response, prospective cohorts | yes |
| Exposure | self-reported sleep | self-reported sleep | yes |
| Reference | 7-8 h band | 7 h point (8 h already 1.04) | \~yes — Yin's 8 h is slightly above nadir, so the bands differ marginally at the top edge |
| Short arm | ONE pooled 1.12 (1.06-1.18), flat across cutoffs | 6 h 1.01, 5 h 1.04, 4 h 1.08, 3 h 1.12 (1.10-1.14) | **no — Yin resolves what Cappuccio pools (the refinement)** |
| Long arm | ONE pooled 1.30 (1.22-1.38) | 9 h 1.15, 10 h 1.32 (1.29-1.35), 11 h 1.53 (1.47-1.59) | **no — same disaggregation; Cappuccio's 1.30 sits at \~10 h** |

[@yin2017]

**What the resolution shows (all-cause):** the short-arm penalty is **concentrated at chronic short
sleep**. 6 h is barely above the 7 h nadir (1.01, CI 1.00-1.01), 5 h is 1.04, and the arm steepens only
below \~5 h (3 h 1.12) — so Cappuccio's *pooled* short-sleep RR is most plausibly driven by chronic short
sleep rather than the 6-7 h band, though Cappuccio's own cutoff subgroups do not show that
concentration (<=5 h 1.12, 1.05-1.18; <=7 h 1.11, 1.00-1.22)
[@cappuccio2010] (corrected 2026-10-22:
previously *necessarily driven by the chronic-short (sub-5 h) studies*). (Cappuccio's pooled 1.12 and
Yin's 3 h spline point coincide numerically but are different quantities — a shortest-vs-referent pool
vs a per-hour estimate — so the shared finding is the *concentration*, not the number.) This **cashes this
page's own hypothesis** (the *referent-not-target* section above:
*the risk most plausibly concentrates at chronic short sleep, making the lower bound arguably 6+ h*) with
numbers. The steep, asymmetric **long arm** (9 h 1.15 -> 11 h 1.53) reconfirms the arm-asymmetry framing:
the larger association is the long-sleep one, and it still has no mechanism.

- **Outcome-specific shape.** CHD is the exception — a *steeper* short arm (4 h 1.16, CI 1.09-1.23) with
  the nadir nearer 7 h; **stroke** has the flattest short arm (4-6 h CIs cross 1.00) and the steepest long
  arm (10 h 1.64, CI 1.47-1.82). Read the curve per outcome, not one U for all.
- **What Yin does NOT close.** Exposure is still self-reported — «nearly all studies relied on sleep
  duration that was self-reported by questionnaire or interview»
  [@yin2017] — so this resolves the *shape*,
  not the measurement-error limit, and the AASM-guideline / objective-actigraphy AWAITS below still stand.
  Yin has no referent-correction and no MR, but it does run one stronger-than-adjustment check — the
  incidence-vs-mortality split below (corrected 2026-10-22: previously *weak-checks-only (multivariable
  adjustment; no referent-correction, no MR)*, which missed that split); the long arm stays a
  not-fully-adjudicated [[The U-Shaped Association Artifact]] instance. Publication
  bias touches both arms but on different quantities: Egger flagged long-sleep/total-CVD
  (longest-vs-reference, original 1.36, 1.26-1.48) and short-sleep/all-cause (per-hour dose-response,
  original 1.06, 1.04-1.07), both at P=0.01. Trim-and-fill shrank the long-arm estimate — «The analysis
  suggested that the imputed risk estimate was 1.22 (95% CI, 1.12–1.32), which is slightly decreased in risk
  but still identical to our original risk estimate.» — and moved the short-arm per-hour estimate to «1.04 (95%
  CI, 1.03–1.06), which is identical to our original risk estimate»
  [@yin2017]. Because the two flagged estimates
  are different quantities, this neither singles out the long arm nor shows symmetric bias; if anything the
  long arm's correction was the larger (corrected 2026-10-22: previously said both *survived
  trim-and-fill unchanged* and that the bias *cuts symmetrically*).
- **Incidence vs mortality — the long arm appears only once events are fatal.** Stratifying CVD studies by
  outcome type, the long arm is flat on incidence and present on mortality: «Heterogeneity was indicated
  (P<0.01) when we stratiﬁed studies by incidence or mortality, and the pooled RRs for 1-hour increment in
  long sleep duration were 1.00 (95% CI, 0.97–1.03; n=6) and 1.15 (95% CI, 1.12–1.16; n=16) for incidence
  and mortality, respectively. In the nonlinear analysis restricted to studies that reported the incidence
  of total CVD, there was no signiﬁcantly increased risk of total CVD at the extreme sleep duration, whereas
  the U-shaped association was more pronounced among the studies that reported mortality of total CVD
  (Figure S8).» CHD repeats it: long-sleep «1.01 (95% CI, 0.97–1.07; n=12) and 1.13 (95% CI, 1.06–1.20;
  n=7) for incidence and mortality, respectively».
  [@yin2017]
  The short arm also weakens on incidence: per-hour total CVD incidence 1.02 (0.98-1.07) vs mortality 1.08
  (1.04-1.11); CHD incidence 1.04 (1.00-1.10, borderline) vs mortality 1.10 (1.02-1.17) — but unlike the
  long arm the incidence-vs-mortality split is not significant for the short arm (between-subgroup Phet
  0.10 CVD, 0.42 CHD; long arm 0.00 and 0.03).
  [@yin2017]
  Reading: this supports the long-arm-as-marker reading (signal appears once disease turns
  fatal, as reverse causation predicts); for the short arm, a CVD-*onset* association is not clearly present
  in these cohorts (incidence CIs 0.98-1.07 and 1.00-1.10), yet the non-significant split means they do not
  show onset to be weaker than the fatal outcome either, so the short-arm causal
  case for CAD/HF rests on the MR above, not on these cohorts. (corrected 2026-10-22: previously said the
  incidence data *weakens any observational claim that short sleep causes CVD onset*.)

## Limits

- **All exposure is self-reported, single-timepoint** — «sleep questionnaires» that often «did not
  allow... to differentiate time asleep from time in bed» -> [[Measurement Error in Dietary Assessment]]
  (same instrument problem, different domain).
- **Observational meta-analysis — cannot control confounding** by construction; «residual confounding
  and bias remain a possibility». The causal reading of the short arm rests on mechanism + the
  Whitehall decomposition, not on the pooled association alone.
- **Four sources, no guidance family** — Cappuccio, Yin and Wang rest on self-reported exposure and
  overlapping cohorts; the Livingston Commission adds an outcome (dementia), not an objective exposure
  measure; no guideline family or device-measured
  (actigraphy) duration cohort held; self-report is the binding limit (corrected 2026-10-22: previously
  *single source*). AWAITS an objective-measurement sleep source and a
  guideline (AASM) for the recommendation-level read.
- Coherence, not validity (R1): the association is what the cohorts report; the causal split between
  arms is the authors' mechanistic argument, not a settled fact.


[inferred from @cappuccio2010]

## References

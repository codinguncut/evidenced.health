---
type: framework
question: Does marine omega-3 supplementation change the risk of incident atrial fibrillation, for whom, and at what dose — and how does that harm weigh against the CV-event benefit?
aliases: [Omega-3 and AF, Fish Oil and Atrial Fibrillation, Marine Omega-3 AFib Risk, EPA DHA Atrial Fibrillation, Icosapent Ethyl AF]
authors: [Gencer, Baris; Djousse, Luc; Al-Ramady, Omar T; Cook, Nancy R; Manson, JoAnn E; Albert, Christine M; Lombardi, Marco; Carbone, Salvatore]
sources: [Gencer - Omega-3 Atrial Fibrillation Meta-Analysis 2021, Lombardi - Omega-3 Atrial Fibrillation 2021]
confidence: medium
cluster: supplements
created: 2026-09-02
updated: 2026-09-17
self_critiqued: 2026-09-17
relationships:
  related_to:
    - Fish and Seafood Consumption
    - Vitamin and Mineral Supplements for Disease Prevention
    - Baseline Risk and the Relative-Absolute Split
    - The U-Shaped Association Artifact
    - Surrogate Outcomes
---

The **harm-channel** on the same exposure whose CV-event *benefit* is dose-dependent: marine omega-3
*supplementation* raises the risk of **incident atrial fibrillation**, and the risk rises with dose.
This is the off-target counterweight to the ischemic benefit held on
[[Vitamin and Mineral Supplements for Disease Prevention]] (VITAL null at 1 g/d; REDUCE-IT positive at
4 g/d) and [[Fish and Seafood Consumption]] (Lombardi 2020 CV-NMA). It does **not** touch the fish-as-food
recommendation — this is an *isolate-supplement* finding.
[inferred from @gencer2021]

## The effect — dose-dependent AF risk

Gencer 2021, a gold SR+MA of **7 marine omega-3 CV-outcome RCTs (81,210 patients**, weighted mean age
65, 39% female, weighted median follow-up 4.9 y), pooling incident/adverse-event AF:

> «The weighted average follow-up was 4.9 years. In meta-analysis, the use of marine omega-3 fatty
> acid supplements was associated with an increased risk of AF (n=2905; HR, 1.25 [95% CI, 1.07-1.46];
> P=0.013). In analyses stratified by dose, the HR was greater in the trials testing >1 g/d (HR, 1.49
> [95% CI, 1.04-2.15]; P=0.042) compared with those testing <=1 g/d (HR, 1.12 [95% CI, 1.03-1.22];
> P=0.024; P for interaction <0.001).»
> [@gencer2021]

> «In meta-regression, the HR for AF increased per 1 g higher dosage of omega-3 fatty acids dosage (HR,
&gt; 1.11 [95% CI, 1.06-1.15]; P=0.001).»
> [@gencer2021]

- **Overall:** HR **1.25 (1.07-1.46)** — a \~25% relative increase in AF
  [@gencer2021]. Gencer computes RRs
  from cumulative incidence and states no annual event rate, so a pooled per-year base rate is NOT
  extractable from it; the absolute excess is nonetheless small because the base rate is low
  [inferred from @gencer2021]
- **Dose split (prespecified 1 g/d cutoff):** high-dose >1 g/d **1.49 (1.04-2.15)** vs low-dose
  <=1 g/d **1.12 (1.03-1.22)**, P-interaction <0.001 — the interaction stratification collapsed the
  between-trial heterogeneity (overall I2=54.6% -> low-dose I2<0.01%, high-dose I2=9.9%), which is
  itself evidence the dose axis is real.
  [@gencer2021]
- **Dose-response slope:** per 1 g/d, HR **1.11 (1.06-1.15)** over a **studied range of 1-4 g/d**
  (residual I2=0.00%). The slope is estimated only within 1-4 g/d — not below 1 g/d, and not above 4;
  read it as monotone-over-the-studied-range, not a law to extrapolate.
  [@gencer2021]

### The trial-level forest — where the dose signal lives

| Trial | Dose / form | AF HR or RR (95% CI) | Dose stratum |
|---|---|---|---|
| VITAL Rhythm | 1 g/d EPA+DHA | 1.09 (0.96-1.24) | low |
| ASCEND | 1 g/d EPA+DHA | 1.23 (0.98-1.54) (rate ratio) | low |
| GISSI-HF | 1 g/d EPA+DHA | 1.10 (0.96-1.25) | low |
| RP (Risk & Prevention) | 1 g/d EPA+DHA | 1.22 (0.93-1.61) | low |
| OMEMI | 1.8 g/d EPA+DHA (elderly post-MI) | 1.84 (0.98-3.45) | high |
| STRENGTH | 4 g/d EPA+DHA (carboxylic acid) | 1.69 (1.29-2.21) | high |
| REDUCE-IT | 4 g/d icosapent ethyl (EPA-only) | 1.35 (1.11-1.65) (RR) | high |

[@gencer2021]

(OMEMI is listed at 1.84 in the source's forest plot but 1.94 in its discussion text — same CI
0.98-3.45, P=0.06, non-significant either way; the forest value is used here.
[@gencer2021])

The two statistically-significant single-trial signals (STRENGTH, REDUCE-IT) are both **high-dose**;
every low-dose trial is individually non-significant, positive-leaning, and only the pool clears
significance at 1.12.

## The dose-vs-formulation confound — and why it is NOT purely a REDUCE-IT/mineral-oil artifact

The high-dose arm is dominated by EPA-only **REDUCE-IT (4 g icosapent ethyl** vs a contested
**mineral-oil** placebo) plus STRENGTH and OMEMI, so dose is entangled with formulation and with a
sicker stratum. But the overall AF signal is **not** an artifact of REDUCE-IT alone — it survives
dropping it:

> «The effect of marine omega-3 fatty acid supplements on the risk of AF events after excluding
> REDUCE-IT (the only trial without DHA) remained significant (HR, 1.23 [95% CI, 1.02-1.49]; P=0.038).»
> [@gencer2021]

and dropping the AF-hospitalization-only RP trial (HR 1.26, 1.04-1.52). So the AF harm is a class
effect, not one trial's placebo controversy — but Gencer cannot separate whether the *steeper*
high-dose slope is dose or EPA-only formulation (no trial randomized dose head-to-head; the >1 g/d arm
and the EPA-only arm are the same trials). REDUCE-IT's own prior report was the seed of the concern:

> «REDUCE-IT also reported an increase in a prespecified tertiary outcome of AF hospitalization in
> those randomized to active treatment compared with placebo (3.1% versus 2.1%; P=0.004).»
> [@gencer2021]

## Lombardi 2021 — a second, time-adjusted MA corroborates the AF direction (type-F, 2026-09-17)

Lombardi 2021 (an EHJ-CVP *correspondence*-format updated pairwise MA, systematic search to Nov 2020)
pooled **5 marine-omega-3 CV-outcome RCTs** (REDUCE-IT, Alpha-Omega/Kromhout, Risk & Prevention,
STRENGTH, OMEMI) for incident AF, in patients at high CV risk or with established CVD and elevated plasma
triglycerides:

> «In the random effect model, O3FA supple- mentation was associated with an increased risk of incident
> AF as compared with placebo [IRR 1.37, 95% CI (1.22–1.54), P < 0.001] (Figure 1). There were no
> significant statistical heterogeneity between studies and no publica- tion bias, even if the funnel
> plot suggested some asymmetry.»
> [@lombardi2021af]

Adding VITAL-Rhythm (from the AHA-2020 abstract) as a sensitivity analysis held the signal at
**IRR 1.29 (95% CI 1.13-1.48, P=0.0002)** — same direction, same population.
[@lombardi2021af]

**The metric choice is the type-F contribution.** Lombardi deliberately reports an incidence-rate ratio
(Poisson person-time), not RR/HR:

> «Incidence rate ratio (IRR) and 95% confidence interval (CI) were chosen over relative risk as outcome
> measure because of the different follow-up of the selected studies.»
> [@lombardi2021af]

This lands exactly on the axis the page already flags as a Gencer limit — Gencer computes RRs from
cumulative incidence and reports no annual event rate, so its pooled figure is not follow-up-adjusted.
Lombardi's IRR accounts for person-time across trials of unequal duration, so the composite (a
follow-up-adjusted IRR alongside Gencer's cumulative-incidence HR, both landing \~+25-37%) is a
better-specified harm metric on the time axis than either alone.
[inferred from @lombardi2021af]

**Per-trial IRRs are figure-borne, not extractable.** The forest plot (Figure 1) carries the per-trial
estimates; the readable text gives only the two pooled IRRs above. Do not read per-trial numbers off
this source's text layer.
[inferred from @lombardi2021af]

### Parameter commensurability — Gencer HR vs Lombardi IRR are NOT the same quantity

| Parameter | Gencer 2021 | Lombardi 2021 | Same quantity? |
|---|---|---|---|
| Effect metric | HR from cumulative incidence | IRR from Poisson person-time regression | **NO** — cumulative-risk ratio vs event-rate ratio; unadjusted vs follow-up-adjusted for exposure time |
| Pooled point estimate | 1.25 (1.07-1.46) | 1.37 (1.22-1.54); 1.29 (1.13-1.48) +VITAL | same DIRECTION, not poolable |
| Trial constituency | 7 RCTs (VITAL-Rhythm, ASCEND, GISSI-HF, RP, OMEMI, STRENGTH, REDUCE-IT) | 5 RCTs (REDUCE-IT, Alpha-Omega, RP, STRENGTH, OMEMI); +VITAL-Rhythm in sensitivity | overlapping (4/5 shared), not identical |
| Population | high CV risk / established CVD | high CV risk or established CVD + elevated TG | \~same |
| Outcome | incident/adverse-event AF | onset of AF | \~same |

The effect-size row is **NO**: Lombardi corroborates the *direction* (\~+25-37% AF risk) with a
time-adjusted metric; the magnitudes are **not** pooled or ranked as if identical.
[inferred from @lombardi2021af; @gencer2021]

### Dose nuance — a refinement of Gencer's formal dose-gradient, NOT a tension

Lombardi remarks qualitatively that the AF signal appears at lower doses too:

> «Even lower doses of O3FA supplementation has shown a potential signal for increased risk for AF,2,4,5
> proposing that regardless of the dose of O3FA supplementation implemented in the trials and
> potential-related benefits on CV outcomes, O3FA supplementation may in- crease the risk for AF.»
> [@lombardi2021af]

Read against Gencer's formal dose split (low-dose 1.12 vs high-dose 1.49, P-interaction <0.001) this
looks like a softening — the harm is not confined to high dose. But the two are **not joined** and this
is **not filed as a `[[tension]]`**: Lombardi ran no dose-stratification and no dose-interaction test in
this 5-trial pairwise correspondence, so the remark is a *qualitative observation at a different
analytic grain* (a narrative aside vs Gencer's formal meta-regression / interaction estimate) — not the
same quantity, so it cannot contradict Gencer's interaction. The two are in fact consistent: Gencer's
low-dose arm is itself positive (1.12, CI excludes 1), so *even low doses signal* and *the slope is
steeper at high dose* are the same data read at two grains. Record it as an open **refinement** on the
dose question — the harm may be present across the studied dose range even as it rises with dose —
explicitly not a competing dose-interaction estimate.
[inferred from @lombardi2021af]

The AF mechanism is not settled either way: Lombardi notes «the mechanisms through which O3FA
supplementation may increase the risk for AF remain largely unknown»
[@lombardi2021af], observing that omega-3 has elsewhere
been shown to protect against (ventricular) arrhythmias while some studies report higher post-operative
AF with elevated omega-3 — so direction on AF specifically has no clean mechanistic warrant.

### COI — clean, a relative strength

Only one author discloses (unrelated) industry ties, and no omega-3 manufacturer funded the work:

> «Conflict of interest: G.B.-Z. has consulted for Cardionovum, Innovheart, Meditrial, and Replycare.»
> [@lombardi2021af]

> «The remaining authors have nothing to disclose.»
> [@lombardi2021af]

Carbone's funding is an AHA Career Development Award + NIH/VCU (non-commercial); Biondi-Zoccai's
consultancies are interventional-device / CRO firms unrelated to omega-3 products. Under symmetric
standards this cuts both ways: a clean-COI MA on a *harm* finding removes one bias channel and is a
relative strength versus any industry-funded omega-3 *benefit* MA.
[inferred from @lombardi2021af]

## Synthesis — a same-exposure benefit/harm split by dose (type-A/G)

The decision-relevant move this opens (present in no single held page before it): omega-3
*supplementation* carries a **dose-dependent AF harm that runs opposite its dose-dependent CV-event
benefit**. The held benefit evidence (Lombardi 2020 CV-NMA on [[Fish and Seafood Consumption]];
REDUCE-IT/VITAL on [[Vitamin and Mineral Supplements for Disease Prevention]]) puts the ischemic
benefit **above 1 g/d, concentrated in high-risk statin-treated strata**; Gencer puts the AF harm on
the **same rising dose arm**. So the two curves cross the same dose axis in opposite directions:

- **General, replete adult on OTC \~1 g/d:** the CV benefit is near-null (VITAL/low-dose stratum) *and*
  the AF harm is small (1.12, a small absolute excess given the low base rate) — a small-lever decision on
  both sides. The AF harm does not by itself contraindicate a low-dose capsule, but there is little
  benefit to weigh it against.
- **High-dose prescription (4 g icosapent ethyl for high-TG established-CVD):** the ischemic benefit is
  real (REDUCE-IT MACE \~25% down) but is bought with the **1.49** AF risk plus bleeding — a genuine
  net-effect trade, not a free lever. Gencer's own framing:

> «Because the benefit of omega-3 fatty acids also appears to be dose-dependent, the associated risk of
> AF should be balanced against the benefit on atherosclerotic cardiovascular outcomes.»
> [@gencer2021]

The clinical-implication the authors draw is a **disclosure**, dose-graded:

> «The potential risk of developing AF should be discussed with the patients when prescribing marine
> omega-3 supplementation, especially when prescribing a higher dosage.»
> [@gencer2021]

[inferred from @gencer2021]

## NOT independent of the held omega-3 evidence (shared trial base + authors)

This MA is **not** an independent type-E corroboration of the held omega-3 CV evidence — it re-pools
the same trials and shares authors:

- **Shared trial base:** «Of those, 5 trials were already included in a previous meta-analysis of
  cardiovascular RCTs» [@gencer2021]
  (Hu 2019, the same pool the held CV-benefit evidence draws on), and its 7 trials include the held
  VITAL (Manson 2019), REDUCE-IT (Bhatt 2019), and the trials Lombardi 2020 pools.
- **Shared authorship:** Cook, Manson, and Albert are VITAL/VITAL-Rhythm investigators and co-authors
  here. The AUTHOR-LIST DIFF and MA-CONSTITUENCY tests both fail for independence.

So its relationship to the CV-benefit finding is a **benefit/harm distinction on the same exposure**,
not opposed claims (not a filed `[[tension]]`) and not independent backing — do **not** stamp
`[E-independent]`. It *is* the first source to weave the AF-harm cell, which was previously only a
one-line side-effect note (Lombardi's AF 1.35 side-effect line on the Fish page; REDUCE-IT's AF-hosp
3.1% vs 2.1%).
[inferred from @gencer2021]

### Lombardi 2021 — also NOT clean type-E, on either axis

Lombardi 2021 does not add independent confirmation either, for two distinct reasons:

- **vs Gencer:** the author lists are **disjoint** (no shared author — Lombardi/Carbone/Del Buono/
  Chiabrando/Vescovo/Camilli/Montone/Vergallo/Abbate/Biondi-Zoccai/Dixon/Crea vs Gencer/Djousse/
  Al-Ramady/Cook/Manson/Albert), so Lombardi is *author*-independent of Gencer — but its trial base is
  **heavily shared**: 4 of its 5 primaries (REDUCE-IT, RP, STRENGTH, OMEMI) are among Gencer's 7, and
  VITAL-Rhythm (also in Gencer) re-enters in Lombardi's sensitivity arm; only Alpha-Omega/Kromhout is
  not in Gencer. Re-pooling largely the same primaries is not *evidence*-independent, so it does not
  raise confidence the way a genuinely separate dataset would.
- **vs the held Lombardi 2020 CV-NMA:** this 2021 paper is the **same core group** (Lombardi,
  Chiabrando, Vescovo, Del Buono, Carbone, Abbate, Biondi-Zoccai, Dixon are on both) and cites the 2020
  paper as its ref 2. Across the wiki's omega-3 holdings it is therefore *not* independent of Lombardi
  2020 either.

So do NOT stamp `[E-independent]` and do NOT treat Lombardi 2021 as independent corroboration. It enters
as a **type-F second MA**: author-independent-of-Gencer but trial-base-shared, and same-group-as-held-
Lombardi-2020 — refining the harm metric on the time axis (the IRR above), not adding an independent
confirmation.
[inferred from @lombardi2021af]

## Limits

- **AF ascertainment is heterogeneous and mostly not adjudicated.** «differences exist in the AF
  outcome assessment between trials. In ASCEND (main article), REDUCE-IT, and RP trials, participants
  with preexisting AF were not systematically excluded from the analysis, whereas in other trials, the
  analysis reported new-onset AF events or excluded participants with preexisting AF.»
  [@gencer2021] AF outcomes were
  centrally adjudicated in only VITAL and OMEMI; prespecified in only VITAL, OMEMI, STRENGTH. The
  sensitivity analysis restricting to new-onset AF held (HR 1.26, 0.85-1.87; no interaction with the
  not-excluded set 1.28, 1.11-1.48).
- **Subclinical-detection inflation in the elderly signal.** The largest absolute AF risk difference
  (OMEMI, >3%, in those >=75 y) came from a trial that «also used monitoring to capture AF events; thus,
  it is likely that more asymptomatic, subclinical cases were detected»
  [@gencer2021] — more ascertainment,
  not necessarily more clinically-actionable AF.
- **Aggregate, not individual-patient, data** — «this report is unable to undertake subgroup analysis
  by age or other patient-level characteristics»
  [@gencer2021], so the stratum flip
  (elderly, cardiac-morbid) is a hypothesis, not an estimated effect-modification.
- **Dose vs formulation not separable** (above); the studied dose range is only 1-4 g/d, so the slope
  says nothing below 1 g/d or above 4.
- **Lombardi 2021's own stated limits** (which apply to its IRR): no systematic haemorrhagic-risk
  assessment; «the lack of a systematic search for AF events in the individual studies»; some trials did
  not prespecify AF, «potentially resulting in under-reporting of AF-related events»; a study-level
  (not IPD) MA; placebo arms differed across trials (though no heterogeneity was found); and VITAL-Rhythm
  entered only via the AHA-2020 abstract, «as the fully data have not been disclosed yet».
  [@lombardi2021af] It is a brief *correspondence*
  (tier high, not gold) — a 2-page updated MA, not a full PRISMA systematic review.
- **Coherence, not validity** (R1): the loop is open — no operation here grades the omega-3-dose -> AF
  association against a realized patient outcome, and AF is a mixed endpoint (hard arrhythmia burden
  vs subclinical/monitoring-detected).

## Self-critique `[run 2026-09-02, before commit — page minted]`

- **Not overclaimed.** The AF risk is stated as an *association* with a dose-gradient, never a proven
  dose-causal law; the dose-vs-formulation confound and the studied-range limit on the meta-regression
  are stated explicitly. The general-adult decision-change is correctly the *small* one on both sides,
  and the high-dose prescription trade is framed as balance, not prohibition. No *fish oil causes AF*
  blanket reading survives; the food-vs-supplement firewall is stated.
- **Not a fake tension.** The relationship to the held CV-benefit evidence is filed as a benefit/harm
  **distinction on the same exposure** (not-joined guard (ii): benefit and harm are different outcomes
  on one exposure, not opposed answers to one question) — no `[[tension]]` filed, no `contradicts:`
  edge.
- **Not laundered-E.** Independence is explicitly denied via the shared-trial-base (5/7 in Hu 2019;
  includes held VITAL/REDUCE-IT) and shared-authorship (Cook/Manson/Albert) tests; no `[E-independent]`
  token; confidence held at `medium` (single gold MA, consistent dose-gradient and surviving-REDUCE-IT
  sensitivity, but heterogeneous unadjudicated AF ascertainment and the dose/form confound).

## Self-critique `[run 2026-09-17, before commit — Lombardi 2021 IRR MA folded (2nd source)]`

- **Not overclaimed on the corroboration.** Lombardi's IRR 1.37 / 1.29 is stated as *direction*
  corroboration of Gencer, not as an independent confirmation and not pooled with Gencer's HR. The
  parameter table marks the effect-size row NO (cumulative-incidence HR vs person-time IRR), so the two
  magnitudes are never summed or ranked as the same quantity. Confidence deliberately held at `medium`,
  not bumped: the second MA re-pools a largely-shared trial base (4/5 primaries overlap Gencer) and is
  same-group as the held Lombardi 2020, so it corroborates without independently confirming — a bump
  would be exactly the laundered-independence error.
- **Independence denied on both axes, accurately.** Author-independent-of-Gencer (disjoint lists) but
  trial-base-shared; and same-core-group as the held Lombardi 2020 CV-NMA (cites it as ref 2). The
  earlier draft claim that *all 5 Lombardi trials are a subset of Gencer's 7* was corrected against the
  source: Alpha-Omega/Kromhout (ref 4) is in Lombardi but not Gencer's forest, so it is 4/5 overlap, not
  a strict subset — stated as 4/5 throughout. No `[E-independent]` token; `sources:` gains Lombardi only
  because a distinct refining claim (the time-adjusted IRR + its limits) lives in the body (dual test).
- **Dose nuance is NOT a fake tension.** Lombardi's *regardless of the dose* is a qualitative aside with
  no dose-stratification or interaction test, at a different analytic grain from Gencer's formal
  P-interaction<0.001 split — not joined (not the same quantity), and consistent with Gencer once read
  at two grains (Gencer's low-dose arm is itself positive). Filed as an open refinement, not a
  `[[tension]]`, no `contradicts:` edge. The mechanism-unknown caveat is carried so the harm direction
  is not dressed with unwarranted mechanistic support.
- **COI note is symmetric, not a halo.** The clean-COI point is stated as removing one bias channel on
  the harm direction, not as raising the finding's grade; it is applied under symmetric standards (a
  strength here would be a weakness in an industry-funded benefit MA), not as special pleading for a
  result the page favours.

## References

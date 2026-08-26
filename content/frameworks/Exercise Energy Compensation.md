---
type: framework
question: Is exercise-induced energy expenditure offset by compensation (reduced non-exercise activity / increased intake), and does higher exertion intensity make the offset worse?
aliases: [Energy Compensation, Exercise Compensation, NEAT, Non-Exercise Activity Thermogenesis, Constrained Energy Expenditure, Compensatory Eating, Activity Compensation, Out-exercise a Bad Diet, Can You Outrun a Bad Diet, Exercise for Weight Loss]
authors: [Riou, Marie-Ève; Jomphe-Tremblay, Simon; Lamothe, Gilles; Stacey, Dawn; Szczotka, Agnieszka; Doucet, Éric; Careau, Vincent; Halsey, Lewis G; Pontzer, Herman; Speakman, John R; Recchia, Francesco; Siu, Parco M]
sources: [Riou - Energy Compensation Exercise 2015, Careau - Energy Compensation Adiposity 2021, Recchia - Exercise Caloric Restriction Visceral Adiposity 2023]
cluster: activity
confidence: low
relationships:
  related_to:
    - Physical Activity Dose and Mortality
    - Measuring and Raising Cardiorespiratory Fitness
    - Does Weight Loss Reduce Cardiovascular Events
    - Exercise vs Caloric Restriction for Visceral Fat
created: 2026-07-29
updated: 2026-08-22
self_critiqued: 2026-08-08
---

**The decision (Challenge #11).** The concern was that high-exertion exercise (HIIT) is offset by
compensatory NEAT downregulation or increased intake, so the extra expenditure does not translate. Two
questions: does compensation happen, and does *intensity* make it worse?



## Efficacy verdict — compensation is real and large, but intensity is NOT what drives it

Riou et al. 2015 (SR of 61 studies, 928 subjects; compensation = body-energy change over exercise
energy expended):

- **Compensation is real, and wildly variable:** «The overall mean energy compensation was 18% ± 93%.»
  [@riou2015] So on average \~18% of the exercise
  energy deficit is offset — but the ±93% SD
  means the individual response ranges enormously, from over-compensation to none.
- **Construct caveat — the measured 18% is not all *biological* compensation (corrected 2026-08-08):**
  Riou's ratio is body-energy change over *estimated* exercise energy, and the paper lists **four**
  contributors, only two of them true compensation: «some form of energy compensation, i.e., increased
  energy intake (EI), decreased energy expenditure, a small dose of exercise induced energy expenditure
  (ExEE) [] or simply a lack of compliance to the prescribed exercise [], is occurring.»
  [@riou2015] Under-delivered or overestimated ExEE
  and non-compliance *inflate* the number in a fixed direction — «reducing the total amount of ExEE and,
  thus, inflating the energy compensation»
  [@riou2015] — and Riou states the split is
  unrecoverable (no intake/NEAT data). So for a *compliant* exerciser
  the true physiological offset is plausibly below the quoted mean, and Riou alone reports no CI on the
  18%; the existence claim is carried by Careau's slope CI (below), not by this ratio.
- **Duration is the dominant driver, and it gets worse over time:** for short interventions compensation
  is low; «For studies of longer duration (about 80 weeks), the energy compensation approached 84%.»
  [@riou2015] The duration *trend* is Riou's most
  solid predictor (r = 0.30, p < 0.002), but the 84% *point* figure is a fitted-model extrapolation on
  thin data — «only a few studies of longer duration were included in this analysis»
  [@riou2015] (the \~80-week anchor rests essentially
  on two Donnelly 2000 arms) (corrected 2026-08-08), so read the direction as solid and the 84% as
  indicative. This is *a* mechanism (among the four Riou names above) behind
  *exercise alone underdelivers weight loss* -> [[Does Weight Loss Reduce Cardiovascular Events]] (why
  the weight lever disappoints) and the constrained-energy-expenditure picture.
- **The intensity-specific worry is NOT SUPPORTED — but by an underpowered test, not refuted
  (corrected 2026-08-08):** «Sex, frequency, intensity and dose of exercise energy
  expenditure were not significant predictors of energy compensation.» [@riou2015] This null is weak, and Riou says so: intensity was
  **dichotomised at 60% VO2max** — pooling continuous jogging with intervals — the corpus contains few
  genuine interval protocols, and the group means carry enormous spread: «there was no significant
  difference for the degree of energy compensation between lower (11.8% ± 122.6%) and higher intensity
  (20.4% ± 81.4%) (p = 0.75)» [@riou2015]. Riou
  flags «The dichotomisation of the variable intensity could have reduced the power of the statistical
  analyses.» [@riou2015] So this is
  **insufficient evidence, not a refutation** — and the non-significant trend even runs slightly toward
  *more* compensation at higher intensity. What predicts it is «the interaction between initial fat mass,
  age and duration» (48% of variance). **So HIIT is not shown to compensate *more* than moderate work,
  but the intensity question is barely tested** — the maintainer's general concern (compensation is
  real) is upheld; the specific version (high exertion -> more NEAT downregulation) is neither supported
  nor adequately tested by this evidence.

## Careau 2021 sharpens the magnitude, names the mechanism, and adds the adiposity gradient

The DLW landmark (n=1,754 free-living adults, the IAEA database) reaches the same conclusion by a wholly
different method — cross-sectional decomposition of total vs basal energy expenditure, not exercise
interventions:

- **A cleaner magnitude, and the mechanism:** «energy compensation by a typical human averages 28% due
  to reduced BEE; this suggests that only 72% of the extra calories we burn from additional activity
  translates into extra calories burned that day.» [@careau2021] So compensation is not only behavioural (eating more) — a measurable part is a drop in
  **basal energy expenditure**, a metabolic adjustment. (The page's quote locates verbatim in Careau's
  Summary — «...we burn from additional activity...»; the «spend on» variant is the In-brief duplicate.
  Prior REVIEW quote-drift marker closed as a false alarm, verified via srcgrep/cite.py 2026-08-08.)
- **The adiposity gradient — the decision-relevant twist:** «People that are at the 10th percentile of
  the BMI distribution compensate 27.7% of activity calories, whereas people at the 90th percentile
  compensate 49.2% of activity calories ... individuals with greater fat levels ... are stronger energy
  compensators or ... become stronger compensators as they get fatter.» [@careau2021] **The person carrying the most fat — who most wants to burn it
  off with exercise — compensates the most**, so exercise "counts" least exactly where the weight goal
  is greatest. Careau flags the causality as undetermined (do compensators get fatter, or does getting
  fatter raise compensation?), so read it as an association, not a proven within-person law.
- **But Riou's adiposity term runs the OTHER WAY, and the disagreement is real (corrected 2026-08-08):**
  in the same interaction the page credits, higher initial fat mass predicts *lower*, not higher,
  compensation: «for a shorter study duration, lower energy compensation was observed in younger
  individuals with higher initial fat mass (FM). In contrast, higher energy compensation was noted for
  younger individuals with lower initial FM.»
  [@riou2015] (Riou's FM *main* effect is null,
  p = 0.12, and the interaction direction is short-duration
  only — gone from \~25 weeks — and study-level, not individual-level.) So the two sources point
  **opposite ways on the one moderator both examine**: Careau's between-individual free-living gradient
  says more fat -> more compensation; Riou's study-level intervention interaction says (short-term) more
  fat -> less. Treat the "higher body fat -> exercise counts less" reading as Careau's *free-living*
  finding, **not a settled law** — the intervention evidence disagrees.

**Independent backing `[E-independent]` — qualified, tells acknowledged.** Riou (61 exercise-*intervention*
studies, body-composition change) and Careau (1,754 free-living adults, cross-sectional TEE-vs-BEE
regression on the IAEA DLW database, explicitly excluding athletes/prescribed-exercise cohorts) reach the
same qualitative claim — *a substantial fraction (\~1/5 to \~1/4) of activity energy is offset* — by
genuinely different datasets and methods, with neither estimate derived from the other. **The
independence is at the level of the estimate, and two tells are flagged rather than hidden:** Careau
*cites* the exercise-intervention literature (Riou 2015 among its refs) as contextual motivation — but as
the *contrast* it is testing against (is compensation the default in normal life, not just under
prescribed exercise?), deriving no magnitude from it; and Careau (Ottawa, Biology) shares a university,
not a research programme or department, with Riou/Doucet (Ottawa, kinetics/nutrition). Under the strict
rule (no shared lineage of the *estimate*, no citing-as-antecedent-of-the-claim) this remains an E, not a
laundered one — but it is a *qualified* E. **Do not pool the magnitudes** — 18% (intervention) and 28%
(cross-sectional) measure related-but-distinct constructs; the convergence is on *direction and rough
scale*, not a shared number.

## What this cashes and refines

- **It cashes a named gap.** [[Physical Activity Dose and Mortality]] recorded that the WHO PA annex ran
  *no compensation analysis* and called *walking is better tolerated than intense exercise* unsupported.
  Riou now supplies the held evidence: compensation exists and is substantial, but it is not
  intensity-graded — so neither *HIIT is self-defeating via compensation* nor *walking compensates less*
  is supported. The lever that matters is duration/adiposity, not modality.
- **It refines the HIIT-vs-walking note** on [[Measuring and Raising Cardiorespiratory Fitness]]: HIIT's
  VO2max advantage is not eroded by *extra* compensation relative to moderate work; the real caveats on
  HIIT remain adherence (unheld comparative evidence) and the flattening mortality curve, not a
  compensation penalty specific to exertion.
- **Two framings of the same finding.** Compensation is why *exercise for weight loss* disappoints
  (the energy deficit is partly refilled), yet it says nothing against *exercise for fitness/mortality*
  — the CRF and mortality benefits do not run through the energy balance that compensation offsets.
- **A third outcome where compensation does NOT erase the benefit — visceral fat.** Recchia 2023
  (SR+MA, 40 RCTs) finds exercise reduces *visceral* fat more than caloric restriction per unit of
  prescribed weekly deficit, and names the same under-reporting/overcompensation confound as something
  that «might explain the lack of differences in the treatment effects between groups» in head-to-head
  trials [@recchia2023]
  (hedge preserved, corrected 2026-08-08). Because exercise's fat-loss is partly *weight-independent*, the
  compensated calories blunt the *weight* benefit without erasing the *visceral-depot* benefit — so the
  disappointing weight lever and a comparatively strong visceral lever coexist
  -> [[Exercise vs Caloric Restriction for Visceral Fat]].



## Decision relevance

- **Do not expect exercise (of any intensity) to fully "count" toward an energy deficit**, especially
  long-term — plan weight change around intake, and use exercise for fitness/function/mortality where its
  benefit does not depend on the un-compensated calories.
- **Do not down-rank HIIT for a compensation reason** — intensity is not a compensation predictor. If
  HIIT is deprioritized, let it be for adherence or the small incremental-outcome argument, not NEAT.
- **Higher body fat may mean exercise "counts" less toward the deficit — but the sources disagree**
  (corrected 2026-08-08): Careau's *free-living* gradient runs \~28% -> \~49% compensation across the BMI
  range, while Riou's *intervention* interaction runs the opposite way short-term (higher initial FM ->
  *lower* compensation). So this is a *directional caution grounded in one source's setting*, not a
  settled law. To the extent it holds, it is a reason the higher-adiposity person should anchor weight
  change on intake and use exercise for its fitness/function/mortality benefits, which do not run through
  the compensated calories.


[inferred from @careau2021]
## Limits

- **Two sources, `confidence: low`.** Riou's ±93% SD means its mean is a weak summary of a highly
  individual response; Careau's headline 28% and 27.7%->49.2% gradient are *between-individual*
  cross-sectional estimates, so they cannot prove the adiposity link is within-person (its stated
  caveat). Both rest on energy measurement (DLW is the good instrument; intervention
  body-composition is noisier). The convergence raises confidence in *direction and rough scale*, not in
  any single magnitude.
- **Careau's one within-person analysis points to *stronger* compensation, but is thin (added
  2026-08-08).** A longitudinal subset (n = 68 elderly, 70-90 y, measured 7 yr apart) partitions the
  slope and finds «energy compensation occurs only at the within-individual level»
  [@careau2021] — bwithin = 0.15 vs bbetween =
  1.86 — such that «the calories they burn during bouts of activity are almost entirely compensated
  for» [@careau2021]. This is the setting an
  individual planning exercise actually faces, and it suggests near-total within-person compensation,
  *above* the 28% between-individual figure — but it is elderly-only, small, and the TEE-BEE
  within-individual covariance was itself non-significant (chi2 = 0.80, p = 0.37), so it sharpens the
  caution without settling a magnitude.


[inferred from @riou2015]
## Self-critique `[run 2026-07-29, before commit]`

- **Anti-flip-flop / Challenge #11:** this does not reverse the challenge's core (compensation is real);
  it *refines* it — upholding the general limb, refuting the intensity-specific limb on the source's own
  predictor analysis. The CRF-page HIIT note stands; this adds the compensation evidence it lacked.
- **Over-claim check:** the ±93% SD and the measurement-error limit are stated so the 18%/84% figures are
  not read as precise; the intensity-null is quoted, not paraphrased.
- **Scope guard:** compensation is scoped to the *energy-balance* outcome, explicitly NOT extended to the
  fitness/mortality benefits that do not run through it.
- **`[E-independent]` verification (Careau added 2026-07-29; cold-audit-caught refinement):** the routes
  are independent *at the level of the estimate* — different datasets (IAEA DLW cross-sectional vs
  exercise-intervention trials), different methods, neither deriving its number from the other. **Cold
  audit flagged two tells the tag must not hide, now acknowledged in the body:** Careau cites Riou 2015
  (as the intervention-literature *contrast* it tests against, not as an antecedent it formalizes), and
  shares a university (Ottawa, different departments). Under the strict rule these do not break E, but they
  make it a *qualified* E — recorded, not laundered. Magnitudes (18% vs 28%) deliberately NOT pooled.
  Careau brings distinct new content (BEE mechanism, adiposity gradient), earning its `sources:` slot on
  the dual test.


## Reading "18% ± 93%" - it is a standard deviation, not a range (deliverable-critique, 2026-08-01)

The «± 93%» is the **dispersion (SD), not a 7-34% interval** - and it is the actual finding. A mean of 18%
with an SD \~93% (five times the mean) means compensation is so heterogeneous that the population mean
barely predicts an individual: some people compensate >100% (eat back more than they burned), some near
zero, some negatively. So "\~one fifth on average" is right for the *mean*, but the decision-relevant
message is the SPREAD - you cannot read your own compensation off the average.

The estimate also **pools across energy-balance states and durations**, which the source does not stratify:
compensation rises with duration («approached 84%» at \~80 weeks), consistent with the intuition that a
sustained deficit recruits a stronger compensatory (survival) response - so deficit-vs-maintenance-vs-
surplus plausibly shifts it, and the pooled 18% hides that.

## References

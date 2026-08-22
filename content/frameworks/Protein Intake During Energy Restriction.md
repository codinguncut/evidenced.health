---
type: framework
question: How much dietary protein retains fat-free mass during energy restriction, and how does the requirement differ from the energy-balance target and across strata (resistance-trained vs sedentary, lean vs overweight)?
aliases: [Protein for Fat-Free Mass Retention, Protein During Weight Loss, Protein FFM Deficit, Protein Cutting Diet, Protein Energy Deficit, FFM Retention Protein Target, Protein During Caloric Deficit, High Protein Weight Loss Diet]
authors: [Refalo, Martin C; Trexler, Eric T; Helms, Eric R; Wycherley, Thomas P; Moran, Lisa J; Clifton, Peter M; Noakes, Manny; Brinkworth, Grant D; Kim, Jung Eun; O'Connor, Lauren E; Sands, Laura P; Slebodnik, Mary B; Campbell, Wayne W]
sources: [Refalo - Protein Fat-Free Mass Energy Restriction 2025, Wycherley - Energy-Restricted High-Protein Weight Loss 2012, Kim - Protein Body Composition After Weight Loss 2016]
cluster: muscle
confidence: medium
relationships:
  related_to:
    - Protein and Resistance Training for Muscle and Strength
    - The Underivable Optimum
    - GLP-1 and Lean Mass
    - Surrogate Outcomes
    - Anabolic Resistance
    - Weight-Loss Maintenance and Metabolic Adaptation
    - Protein Intake for Older Adults
    - Measurement Error in Dietary Assessment
    - Does Weight Loss Reduce Cardiovascular Events
created: 2026-08-07
updated: 2026-08-21
self_critiqued: 2026-08-21
---

The energy-balance protein target (\~1.6 g/kgBM/day, [[Protein and Resistance Training for Muscle and Strength]]) answers *how much protein to BUILD muscle*. This page answers a **different decision in a
different stratum**: *how much protein to RETAIN fat-free mass while in a caloric deficit* — the cutting
athlete, the dieter, the person on a GLP-1 drug. The single dedicated source is Refalo 2025, an updated
systematic review with Bayesian **meta-regression** (29 studies; nonobese, energy-restricted,
resistance-trained adults) [@refalo2025].
Two things bound everything below: the authors call their own findings **exploratory** (not
confirmatory), and the effect of protein is **small** next to the resistance-training stimulus.

A **second, independent source** now backs the core direction from a different design and a different
population: Wycherley 2012, a gold meta-analysis of 24 isocaloric high-protein-vs-standard-protein
RCTs (1063 overweight/obese adults, structured exercise EXCLUDED) [@wycherley2012].
Where Refalo is a dose-response meta-regression in resistance-trained non-obese dieters, Wycherley is
a direct HP-vs-SP contrast MA in the *sedentary overweight/obese* dieter — so the page now spans two
strata, and the FFM-preservation direction is reached by two non-overlapping labs (see the Wycherley
section and its parameter table below). This is why `confidence:` is `medium`, not `low` — but the
support is for the *direction*, not for any specific target number.

A **third gold source extends the AGE stratum**: Kim 2016, a SR+MA of 20 HP-vs-normal-protein RCTs
in *adults aged 50 and older* [@kim2016].
It closes the older-adult gap Wycherley flagged, and finds the lean-mass-sparing magnitude is
essentially *identical* in older adults to Wycherley's all-ages pool — so the contrast benefit does
not appear age-modified at this modest dose. Kim is NOT an independent (type-E) leg, though: it
explicitly benchmarks against Wycherley and shares trials with it (see the Kim section below).

## The target RISES under a deficit — but read it as a region, and the caveats first

[@refalo2025]
Refalo's exploratory recommendations (their Table 3, their word): «increasing protein intake up to 1.9
g/kgBM/day or 2.5 g/kgFFM/day, on average, is associated with less FFM loss in the present analysis
(representing the protein intake levels at which the trend line of our meta-regression crosses an ES of
zero). Furthermore, intakes above these values, up to the highest analyzed intakes of 3.2 g/kgBM/day and
4.2 g/kgFFM/day, are linearly associated with larger FFM gain».

- **\~1.9 g/kgBM (or \~2.5 g/kgFFM) is the intake at which the trend line crosses ES = 0** — i.e. where
  average FFM change flips from loss to hold. It is HIGHER than the \~1.6 g/kgBM energy-balance target,
  which matches the mechanistic premise that a deficit raises the requirement.
- **These are not point optima — they are ES-zero crossings on a monotone line** with no observed peak,
  so above them more protein is (linearly) associated with FFM *gain* up to the highest analyzed 3.2/4.2.
  Read as a floor-and-direction, not a target -> [[The Underivable Optimum]].
- **The whole thing is on a caloric budget:** more protein necessarily displaces carbohydrate or fat, with
  potential costs to RT performance, sex-hormone levels, and adherence — weighed at Layer 3, not netted here.

## The shape: LINEAR, no knee — reached independently of Morton (type-E), across two populations

[@refalo2025]
Bayes-Factor model comparison found the **linear** model (no additional predictors) beat quadratic and
cubic: «there was a 97% probability that FFM change becomes more positive as daily protein intake
(g/kgBW) increases» (per BM, b=0.07, 95% HDI -0.01 to 0.14), rising to 99% per FFM (below). No knee, no
plateau over the analyzed range.

This is a **second, independent-lab instance of a monotone-not-knee protein curve**. The parameter table
below shows it is a *convergence on curve SHAPE*, NOT a *1.6-vs-1.9, deeper-is-more* contrast — the two
numbers describe **different populations** (energy balance vs deficit), so they are a stratum distinction,
not a tension.

| Parameter | Morton 2018 — quoted + locus | Refalo 2025 — quoted + locus | Same quantity? |
|---|---|---|---|
| Population | «healthy and not energy-restricted» RT adults (energy balance/surplus) [Morton chunk 01] | nonobese, ENERGY-RESTRICTED (fat-mass loss) RT adults, BF% <=27.8%M/<=39.7%F [Refalo chunk 01] | **NO** — opposite energy state |
| Curve shape | biphasic knee «1.62 g/kg/day, p=0.079», non-significant; on baseline axis «linear regressions explained significantly more variance than biphasic» [Morton chunk 02] | «linear model, without additional predictors, provided the best fit»; «97% probability that FFM change becomes more positive» [Refalo chunk 01] | **YES** — both: no statistically-established knee; a linear/monotone fit wins |
| Denominator tested | total body mass only (per-FFM NOT tested) | per-FFM «99 versus 97%» prob; «entirety of the 95% HDI was positive» (0.01-0.12 vs -0.01-0.14) [Refalo chunk 01] | **NO** — Morton did not compare denominators |
| Target number | \~1.6 g/kgBM plateau (energy balance) | \~1.9 g/kgBM / 2.5 g/kgFFM ES-zero crossing (deficit) | **NO** — different construct AND population |

- **The genuine type-E convergence is the SHAPE row only** — Morton (Phillips lab, McMaster; energy
  balance) and Refalo (Deakin/AUT; energy deficit) reach *no-established-knee / monotone-wins* by
  different data, different labs, different populations, with no shared author. `[E-independent]`
- **The per-FFM denominator point is NOT independent.** Refalo's per-FFM finding rests on Helms 2014's
  speculation — «it may be worthwhile to prescribe protein intake based on FFM versus total body mass in
  athletic populations» — and **Helms is a co-author of Refalo**. So per-FFM-is-better is one lineage's
  idea tested by that lineage, not a cross-lab convergence. Refalo is likewise NOT independent of Helms
  2014 generally (it is an *update* of it, same author).
[inferred from @refalo2025]

## Why per-FFM is the better denominator here

[@refalo2025]
Only the per-FFM slope's 95% HDI **excludes zero** (0.01 to 0.12), while the per-BM slope's includes it
(-0.01 to 0.14); direction probability 99% vs 97%. Scaling to FFM avoids a target «too low for lean
athletes» (Helms' rationale). Decision consequence: **where FFM can be reasonably estimated, prefer the
FFM-based target** (2.5 g/kgFFM up to 4.2 for gain). This also means the number is **undefined until the
denominator is named** — the same trap as the energy-balance page's g/kg-total ambiguity, sharper here
because per-FFM is the recommended scaling.

## Who benefits more per gram — the BF% moderator (leaner benefit MORE)

[@refalo2025]
«for each additional gram of protein consumed per kilogram of BM and FFM, FFM change increased by 0.14 and
0.12 in the Low BF% category, 0.10 and 0.07 in the Medium BF% category, and 0.04 and 0.03 in the High BF%
category». Mechanism (Elia's early-starvation review): «lean individuals have 2-fold to 3-fold higher
rates of urinary nitrogen excretion, leucine oxidation, and contributions of protein to glucose
production compared with individuals with obesity» — leaner people burn more body protein for energy
under restriction, so protein defends them more. Protein should therefore **inversely scale with BF%**.

- **This is a REASONING TOOL toward higher-BF people, NOT obese evidence.** The whole sample is nonobese
  (BF% <=27.8%M/<=39.7%F). The BF% gradient and the Elia mechanism *point* to a lower per-gram benefit as
  adiposity rises, but the obese are **off-support** — do not read this as *the obese need less protein*,
  read it as *the obese are unstudied here* -> same gap as [[Protein and Resistance Training for Muscle and Strength]].
- The Low-BF% cell has only 10 observations, so its slope is the most uncertain — the direction is firmer
  than the magnitude.

## Sex, duration, deficit magnitude

[@refalo2025]

- **Sex (tentative):** «the probability of a linear dose-response was stronger for male participants than
  female participants, with the difference more pronounced with protein expressed relative to FFM (99
  versus 69%) than BM (98 versus 81%)». Far fewer female observations — hold as a signal, not a finding.
- **Duration:** >4 weeks stronger than <=4 weeks — short interventions are confounded by fluid shifts
  (which also feed the FFM-is-not-muscle caveat below).
- **Deficit magnitude did NOT clearly moderate** (<=300 vs >300 kcal similar), BUT «Murphy and colleagues
  recently suggested that an energy deficit of ;500 kcal per day prevented gains in FFM» — so «individuals
  seeking to avoid FFM losses at all costs should likely implement modest energy restriction». A large
  deficit is itself a lever on FFM independent of protein.

## The load-bearing caveats — do not ship a clean number

[@refalo2025]

- **EXPLORATORY, not confirmatory** — the authors' own verdict: «the heterogeneity between studies
  included in our meta-regression renders the findings exploratory rather than confirmatory» (study-level
  I2 83-85%). It is a meta-*regression* of mostly non-controlled dose-response, not a meta-analysis of
  higher-vs-lower RCTs (only 5 such comparisons existed — «insufficient»). Treat the numbers as
  hypotheses for practice, not established targets.
- **The effect is SMALL vs the RT stimulus.** Lowest-to-highest analyzed intake is «only a "small" ES
  difference»; «more important for retaining FFM during energy restriction than dietary protein intake»
  is the RT stimulus and the deficit size. **Worked case:** «Longland and colleagues (30) observed no
  mean loss of lean body mass (+0.1 6 1.0 kg)» at just 1.2 g/kgBM with hard RT, while the 2.4-g/kgBM
  comparator «gained significantly more lean body mass (+1.2 6 1.0 kg), the difference (1.1 kg) was
  modest». Get the training right first; protein is the adjunct -> [[Protein and Resistance Training for Muscle and Strength]].
- **FFM is a SURROGATE, and FFM != skeletal muscle** — «changes in FFM do not directly equate to changes
  in skeletal muscle mass and may be affected by fluid alterations» -> [[Surrogate Outcomes]]. No
  patient-important endpoint (function, strength, mortality) is measured. Same boundary as the
  energy-balance protein page and [[GLP-1 and Lean Mass]].
- **Single data extractor** (M.C.R.) — «may increase the potential for error in data extraction».
- **Self-reported intake** — the accuracy of the reported protein intakes is «in question»
  -> [[Measurement Error in Dietary Assessment]] (the same instrument problem flattens dose-response and
  smears any threshold).
- **Mild COI** — the authors are tied to the evidence-based-fitness industry (Renaissance Periodization,
  MASS Research Review, 3D Muscle Journey); the method is rigorous, but noted.

## The independent contrast MA (Wycherley 2012) — same direction, different design, different stratum

[@wycherley2012]
Wycherley pooled 24 RCTs that each randomized energy-restricted, ISOCALORIC HP vs SP low-fat diets
(HP \~1.25 vs SP \~0.72 g/kg/d achieved; both <=30% fat). Pooled weighted mean differences (HP minus SP;
negative = greater effect with HP):

- **FFM: +0.43 kg** (95% CI 0.09, 0.78) — HP spares fat-free mass. The direction Refalo reaches by a
  monotone regression slope, Wycherley reaches by a between-arm contrast.
- **Fat mass: -0.87 kg** (95% CI -1.26, -0.48); **body weight: -0.79 kg** (95% CI -1.50, -0.08).
- **Triglycerides: -0.23 mmol/L** (95% CI -0.33, -0.12), homogeneous — but total/LDL/HDL cholesterol,
  systolic + diastolic BP, fasting glucose and insulin were all NULL (P >= 0.20). The cardiometabolic
  benefit is confined to a surrogate (TG), and «whether triglyceride reductions translate to reduced
  cardiovascular disease risk remains unclear» -> [[Surrogate Outcomes]].
- **REE: +595.5 kJ/d** (95% CI 67.0, 1124.1) — but 4 studies only, mean 6 wk, and a tissue-model
  estimate is \~24 kJ/d; treat as a mechanism hint, not a firm effect.

The authors' own verdict is «modest beneﬁts» — the magnitudes are small, reinforcing this page's
standing theme that protein is the *adjunct*, not the main lever, for FFM under a deficit.

### Type-E: the FFM-preservation direction is reached by two non-overlapping labs across two populations

Wycherley (Adelaide/CSIRO — Wycherley/Moran/Clifton/Noakes/Brinkworth) shares **no author** with Refalo
(Refalo/Trexler/Helms) or Morton/Phillips, and it pools a **different, largely non-overlapping trial
set** in a **different population** (sedentary overweight/obese vs resistance-trained non-obese). The
convergence is on the DIRECTION only — the metrics differ, so this is not a pooled magnitude. `[E-independent]`

| Parameter | Refalo 2025 — quoted + locus | Wycherley 2012 — quoted + locus | Same quantity? |
|---|---|---|---|
| Design | Bayesian **meta-regression** of 29 dose-response studies [Refalo chunk 01] | **meta-analysis** of 24 isocaloric HP-vs-SP RCTs [@wycherley2012] | **NO** — continuous slope vs two-arm contrast |
| Population | «nonobese», resistance-trained, energy-restricted [Refalo chunk 01] | overweight/obese, structured exercise EXCLUDED [@wycherley2012] | **NO** — opposite training state |
| Protein levels | continuous 0.8-3.2 g/kgBM; ES-zero \~1.9 | achieved «1.25 6 0.17» (HP) vs «0.72 6 0.09» (SP) g/kg/d [@wycherley2012] | **NO** — continuous vs a low-range contrast |
| FFM direction under deficit | «97% probability that FFM change becomes more positive as daily protein intake (g/kgBW) increases» [Refalo chunk 01] | FFM WMD «0.43 kg; 95% CI: 0.09, 0.78» favouring HP [@wycherley2012] | **YES on DIRECTION only** — a positive-slope probability and a kg-WMD are not the same parameter, but both say higher protein preserves FFM under energy restriction |

Only the last row is the E-claim. A **third** line points the same way inside Wycherley's own
discussion — Krieger's 2006 meta-regression found FFM retention «tended to increase with each
successive quartile of dietary protein intake» and «protein intakes .1.05 g·kg21·d21 may improve FFM
retention» (secondary citation, via Wycherley; Krieger not directly held, so not a `sources:` entry).

### Type-F: Wycherley broadens the stratum and lowers the demonstrated dose

[inferred from @wycherley2012]
Two refinements the composite makes that neither source alone does:

- **Stratum extension.** Refalo's evidence is resistance-trained non-obese only; Wycherley's is the
  *sedentary overweight/obese* dieter with exercise excluded — so FFM-sparing by protein under a deficit
  is now evidenced in a population where the RT stimulus (the bigger lever on this page) is absent. It
  holds even without training, though the magnitude is small.
- **Lower demonstrated dose.** Wycherley's «high protein» arm is only \~1.25 g/kg achieved — BELOW
  Refalo's \~1.9 g/kg ES-zero crossing and below the \~1.6 g/kg energy-balance target — yet the FFM/FM
  benefit is still resolvable. So a *modest* protein increase (roughly 1.2-1.3 vs 0.7-0.8 g/kg) already
  buys a measurable, if small, FFM/FM effect; you do not need to reach \~1.9 g/kg to see *any* benefit.
  This is consistent with the monotone-no-knee shape: benefit accrues gradually from low intakes, not
  as a step at a threshold -> [[The Underivable Optimum]].

### The measurement-error confound bites the contrast itself

[@wycherley2012]
Wycherley flags that the weight/FM differences «may have occurred because of differences in energy
intake that are beyond the sensitivity of food record analysis», and that an HP diet «is further
removed than an SP diet from a usual dietary intake it may have more limited food choices that are
easier to catalog and report with accuracy». So *isocaloric-prescribed* is not
*isocaloric-achieved*: a DIFFERENTIAL misreporting (the SP arm covertly eating more, or reporting
worse) could inflate the apparent HP advantage. This is the same instrument problem that flattens
dose-response elsewhere, here acting on a between-arm contrast -> [[Measurement Error in Dietary Assessment]].

### Duration, long-term, and the older-adult gap

[@wycherley2012]

- **Duration:** subgroup analysis (<12 vs >=12 wk) showed no significant between-subgroup difference on
  any outcome; the FFM benefit reached significance only in the longer-duration studies. Long-term
  (>=12 mo) efficacy «remains largely unknown» — the one 52-wk trial could not be pooled.
- **Clinical-relevance bridge:** the extra \~0.79 kg weight loss is small, but Wycherley invokes DPP —
  «1 kg of weight loss is associated with a 16% risk reduction in the development of diabetes» — a surrogate-to-outcome link that is itself only
  associational -> [[Does Weight Loss Reduce Cardiovascular Events]].
- **Older adults are unstudied *within Wycherley's own pool*** (sarcopenia + anabolic resistance flagged
  as a gap) — now closed by Kim 2016, whose age-restricted MA finds the same FFM-sparing direction and
  magnitude in adults >=50 (see the Kim section below).

## The older-adult stratum (Kim 2016) — same direction, same magnitude, NOT an independent leg

[@kim2016]
Kim 2016 is a gold SR+MA of 20 energy-restricted HP-vs-normal-protein (NP) RCTs, restricted to **adults
aged 50 and older** (mostly overweight/obese, BMI \~30-36; DXA body composition; durations 8-104 wk). It
classifies HP two ways — **>=25% of energy** OR **>=1.0 g/kg/d** — a modest low-range dose contrast (HP
achieved \~1.0-1.5, NP \~0.6-1.0 g/kg/d), close to Wycherley's. Pooled weighted mean differences (HP minus
NP; DXA):

- **Lean mass — HP retains MORE:** by %energy, WMD **+0.45 kg** (95% CI 0.20, 0.71; I2 34%); by g/kg/d,
  WMD **+0.83 kg** (95% CI 0.47, 1.19; I2 0%). Both exclude zero. The g/kg/d contrast gives the *larger,
  fully homogeneous* effect — Kim argues the quantity metric (g/kg/d) is preferable to %energy because it
  tracks amino-acid availability.
- **Fat mass — HP loses MORE:** by %energy, WMD **-0.57 kg** (95% CI -0.98, -0.15; I2 0%), significant; by
  g/kg/d, WMD **-0.53 kg** (95% CI -1.08, 0.03; I2 0%), a *trend* (CI touches zero).
- **Body mass — NO difference:** %energy WMD -0.54 kg (95% CI -1.30, 0.23); g/kg/d WMD -0.06 kg (95% CI
  -0.66, 0.53). As in Wycherley, higher protein reshapes *composition* of the loss, not its total.
- **Verdict:** «men and women aged 50 years and older better retain lean mass while los- ing fat mass
  when they consume energy-restricted higher-protein rather than normal-protein diets», and the review
  «strengthens the sci- entific foundation for older overweight and obese adults to consume protein
  intakes 1.0 g/kg/d to help preserve lean mass».

### Type-F: the stratum extends to older adults with the SAME magnitude — no age modification shown

Kim itself benchmarks its result against Wycherley (its ref 20): «older adults who consumed higher
protein diets (expressed as a percentage of energy in-take) during energy restriction preserved about
the same amount of lean mass (WMD 0.45 kg; 95%CI¼0.20–0.71 kg) as participants older than 18 years (WMD
0.43 kg; 95%CI¼0.09–0.78 kg) in a previ-ous analysis». The two lean-mass WMDs are the **same quantity**
(DXA fat-free/lean mass, kg, HP-minus-NP, under energy restriction), and they nearly coincide.

| Parameter | Wycherley 2012 — quoted + locus | Kim 2016 — quoted + locus | Same quantity? |
|---|---|---|---|
| Design | meta-analysis of 24 isocaloric HP-vs-SP RCTs [@wycherley2012] | SR+MA of 20 HP-vs-NP RCTs, DXA body comp [@kim2016] | **YES** — both HP-vs-NP contrast MAs under energy restriction |
| Age stratum | adults >18, unrestricted [@wycherley2012] | «adults 50 years and older» only [@kim2016] | **NO** — Kim is age-restricted; that IS the extension |
| Dose contrast | HP «1.25 6 0.17» vs SP «0.72 6 0.09» g/kg/d achieved [@wycherley2012] | HP >=1.0 (or >=25%E) vs NP <1.0 (or <25%E) g/kg/d [@kim2016] | **YES roughly** — both modest low-range contrasts, not high-dose |
| Lean/FFM WMD (%energy) | «0.43 kg; 95% CI: 0.09, 0.78» favouring HP [@wycherley2012] | «0.45 kg; 95%CI¼0.20–0.71» favouring HP [@kim2016] | **YES** — same DXA lean-mass kg contrast; the F-claim |

The composite beats either alone: FFM-sparing by a modest protein increase under a deficit is now
evidenced *both* across the adult range and specifically in adults >=50, at **essentially the same
magnitude** (\~0.4-0.45 kg by %energy). This is a **between-analysis** comparison of two separate pooled
estimates (Kim's own), NOT a formal within-study age-interaction test — so read it as *no age signal
apparent at this dose*, not as a proven null interaction. Despite the mechanistic expectation that
anabolic resistance would make older adults respond differently, the contrast does not visibly amplify
with age — and this is *not* evidence that older adults need less protein in absolute terms (they lose
more lean mass at baseline, so the same relative sparing matters more) -> [[Protein Intake for Older Adults]], [[Anabolic Resistance]].

### Why this is NOT type-E (independence fails despite a clean author-diff)

[inferred from @kim2016]
Kim (Campbell/Purdue — Kim/O'Connor/Sands/Slebodnik/Campbell) shares **no author** with Wycherley
(Adelaide/CSIRO — Wycherley/Moran/Clifton/Noakes/Brinkworth), so the cheap author-diff test *passes*. But
independence still fails on two counts, so this is **corroboration + stratum-extension (F), not
`[E-independent]`**:

- **Kim explicitly cites and benchmarks Wycherley** (its ref 20) — the convergence is *self-stated*, so a
  RAG over Kim alone reproduces it. The strict-E rule bars a source that restates an earlier one it cites.
- **Trial-set overlap.** Kim's pool draws on the same HP-weight-loss RCT literature and includes
  Adelaide/CSIRO trials (Moran 2005, Luscombe-Marsh 2005, Brinkworth 2004, Farnsworth 2003, Parker 2002,
  Keogh 2007, Wycherley 2010) that Wycherley's own group would have pooled — so the two MAs are not
  independent samples of trials. (Exact overlap not quantified — Wycherley's 24-trial list is not held.)

### The surrogate + scope caveats persist (unchanged direction, honest ceiling)

[@kim2016]

- **Lean mass is a DXA surrogate, not skeletal muscle.** «While changes in lean mass measured using DXA
  are often attributed to changes in skeletal muscle mass, this inference should be made with caution»
  -> [[Surrogate Outcomes]]. Same boundary as the Refalo/Wycherley sections above.
- **Soft tissue only — no function, bone, or health endpoint.** The review is «limited to changes in soft
  tissue body composition (lean mass and fat mass) and does not address the potential impact of pro-tein
  intake on energy restriction–induced changes in skeletal bone or indices of health and functional
  well-being». The loop stays open at the patient-important level.
- **Named gap:** «New RCTs are needed to directly assess the effects of higher protein vs normal protein
  intakes on energy restriction–induced changes in body composition (including skeletal muscle mass) ...
  especially older adults with sarcopenic obesity» — the sarcopenic-obesity RCT is unstudied.
- **Modest dose contrast** — the demonstrated benefit lands at \~1.0-1.5 vs \~0.6-1.0 g/kg/d, so like
  Wycherley it does not speak to whether pushing toward Refalo's \~1.9 g/kg buys more in this population.

## Decision relevance

- **Cutting athlete / dieter who must protect lean mass (nonobese, resistance-trained):** aim \~1.9
  g/kgBM/day (or \~2.5 g/kgFFM/day if FFM is estimable), biasing UP toward 2.5-3.2 g/kgBM / 3.2-4.2
  g/kgFFM when FFM loss would be genuinely costly (weight-class combat/strength athletes, bodybuilders).
  This is above the \~1.6 energy-balance target — the deficit raises the requirement.
- **The RT stimulus and a modest deficit come FIRST.** A well-programmed resistance-training stimulus and
  a \~modest (not \~500 kcal-plus) deficit do more for FFM retention than the protein dial. Do not let the
  protein number substitute for the training.
- **Sedentary overweight/obese dieter (no training) [@wycherley2012]:** raising protein from \~0.8 to \~1.2-1.3 g/kg/d
  within an isocaloric low-fat deficit still buys a small FFM/FM benefit (FFM +0.43 kg, FM -0.87 kg,
  weight -0.79 kg) — the direction holds even without resistance training, though the magnitude is
  modest and the cardiometabolic upside is limited to triglycerides (a surrogate), with lipids/BP/glucose
  unchanged. Treat this as a low-cost adjunct to the deficit, not a large lever.
- **Older adult (>=50) losing weight [@kim2016]:** raise protein to **>=1.0 g/kg/d** (above the 0.8 RDA) within the deficit —
  older dieters retain more lean mass and lose more fat at the same total weight loss, at a magnitude
  (\~0.45 kg lean by %energy, \~0.83 kg by g/kg/d) essentially identical to younger adults. This matters
  *more* for them (lower baseline lean mass, faster loss during weight loss), even though the contrast
  effect is not age-amplified. Prescribe on g/kg/d rather than %energy where possible. Add a resistance
  stimulus if feasible (the bigger lever, though most trials here were diet-only) -> [[Protein Intake for Older Adults]].
- **Leaner -> higher target** (BF% inverse scaling, Refalo); the *specific* raised target (\~1.9 g/kg) and
  the per-gram BF% slope remain **off-support for the obese**. But *does more protein help at all under a
  deficit in the overweight/obese?* is now answered *yes, modestly* by Wycherley (a low-dose contrast in
  that population) — so the obese are no longer wholly unstudied on the DIRECTION, only on the dose-response
  and the target. The per-FFM denominator only sharpens that the number is undefined until the kg is named.
- **On a GLP-1 drug:** this is the protein side of the muscle-preservation strategy — but appetite
  suppression makes hitting a raised protein target harder exactly where it matters
  -> [[GLP-1 and Lean Mass]].
- **Open loop / medium confidence on the DIRECTION only:** the FFM-preservation direction now rests on
  three gold sources across strata — a dose-response meta-regression (Refalo, RT non-obese), a
  direct-contrast RCT MA (Wycherley, all-age sedentary overweight/obese), and an age-restricted MA (Kim,
  >=50) — with two independent labs (Refalo, Wycherley) plus a same-direction, same-magnitude age
  extension (Kim, *not* an independent leg). Hence medium, not low. But all three terminate on
  **surrogates** (FFM/lean mass, TG), the effect sizes are small (sub-kg), and **nothing here grades a
  chosen protein intake against a realized function or health outcome** — the loop stays open. No target
  number earns above low: the \~1.6 and \~1.9 g/kg regions are still poorly identified, and both contrast
  MAs (Wycherley, Kim) show benefit at a LOWER achieved dose (\~1.0-1.25 g/kg). Treat as a well-reasoned
  prior for practice, revisable on controlled higher-vs-lower RCTs powered on function — including the
  sarcopenic-obesity RCT Kim names as unstudied.

## References

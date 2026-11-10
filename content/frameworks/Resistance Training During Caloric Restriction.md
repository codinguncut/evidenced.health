---
type: framework
question: When an obese older adult loses weight by caloric restriction, does adding resistance training prevent the lean-body-mass loss (DXA lean mass, which counts muscle along with other lean tissue) that dieting causes, and by how much?
aliases: [Resistance Training During Weight Loss, RT During Caloric Restriction, Exercise to Preserve Muscle While Dieting, Muscle Preservation During Weight Loss, CRRT, Lean Mass Preservation Resistance Training, Resistance Training During Dieting]
authors: [Sardeli, Amanda Veiga; Komatsu, Tiemy Rosana; Mori, Marcelo A.; Gaspari, Arthur Fernandes; Chacon-Mikahil, Mara Patricia Traina; Eisa, Naseem; Barood, Omar]
sources: [Sardeli - Resistance Training Caloric Restriction, Eisa - Lean Mass Incretin Therapy Lifestyle 2026]
cluster: muscle
confidence: low
relationships:
  related_to:
    - Resistance Training for Sarcopenic Obesity
    - Protein Intake During Energy Restriction
    - GLP-1 and Lean Mass
    - Exercise Modality for Body Composition in Obesity
    - Weight-Loss Maintenance and Metabolic Adaptation
    - Surrogate Outcomes
    - Low Muscle Mass and Mortality
    - Grip Strength and Mortality
    - Muscle-Strengthening Activity and Mortality
    - Does Weight Loss Reduce Cardiovascular Events
    - Big Rocks (Elderly)
created: 2026-10-04
updated: 2026-11-06
self_critiqued: 2026-11-05
---

**The decision.** An obese older adult is going to lose weight by eating less. Caloric restriction (CR)
removes fat, but it also removes muscle — and in an older adult, who is already losing lean mass with age,
that muscle loss is a cost against function and independence. Does adding resistance training (RT) to the
diet stop the muscle loss? (Labelled 2026-11-05, parent audit: the trials measure DXA lean mass,
which counts muscle along with water and other lean tissue in unknown proportion, *Surrogate
boundary*, below; corrected in fix round 2: *mostly but not all muscle* had no source.) This is the RESISTANCE-TRAINING lever for lean-mass preservation in a deficit —
the exercise counterpart to the PROTEIN lever on [[Protein Intake During Energy Restriction]], for the same
decision.

The within-trial source is Sardeli 2018, a gold-tier meta-analysis of 6 RCTs that each randomized obese/overweight
older adults to CR alone vs CR + resistance training (CRRT)
[@sardeli2018]. `confidence: low` — one MA, 6
trials, surrogate outcomes only, and the population is narrowly obese-ELDERLY (mean >57 y).
(Corrected 2026-11-05: *the single source* -> Eisa 2026 adds a between-trial pool, below; Sardeli
stays the only within-trial source.)

## The finding: RT preserves lean mass, with no significant difference in fat or weight loss

[@sardeli2018]
Adding RT to CR preserves **about 0.8 kg of lean body mass** against dieting alone, which the paper
also states as a ratio: «the LBM
loss in the CRRT group was 93.5% less than the CR group (RMD = 0.819 kg, 95% CI = 0.364 to 1.273,
p < 0.001)». (Labelled 2026-11-05, parent audit: the ratio sits on a small denominator and the
paper's own wording of it varies, *The same scrutiny*, below; the kg RMD, about 0.8 kg, is the
figure that carries the decision; restated in fix round 2: the bold lead was the 93.5%
ratio.)

In absolute terms (mean +/- SD change, pre-to-post):

| Compartment | CR + RT (CRRT) | CR alone | Added by RT |
|---|---|---|---|
| Lean body mass | 0.05 +/- 0.3 kg (printed unsigned; the text describes a smaller loss, while the RMD fits a small gain, below) | -0.76 +/- 0.1 kg | **+0.82 kg preserved** (RMD 0.819 [0.364-1.273]) |
| Fat body mass | -3.86 +/- 1.3 kg | -3.73 +/- 1.2 kg | no significant difference |
| Body mass | -4.16 +/- 1.2 kg | -4.73 +/- 1.2 kg | no significant difference |

The decision-shaping point is the asymmetry: **RT changes the COMPOSITION of the weight loss, not its
total.** Fat loss (\~3.8 kg) and total weight loss (\~4-4.7 kg) are statistically unchanged by adding RT; all
the benefit lands on lean mass, where CR-alone loses \~0.76 kg and CR+RT holds near zero. RT during a diet is
a lean-mass preserver, not a fat-loss or weight-loss amplifier. This is the same structural pattern the
[[Protein Intake During Energy Restriction]] lever shows (higher protein reshapes the composition of the
loss, not its total) and that [[Exercise Modality for Body Composition in Obesity]] shows for exercise
generally (exercise alone barely moves the scale).
(Labelled 2026-11-05: *unchanged* here means no significant difference was detected, not shown
equivalence. The pooled fat difference is RMD −0.286 kg (−1.191 to 0.619)
[@sardeli2018], so
any cost of RT to fat loss is bounded at about 0.6 kg in these trials. That bound is fixed-effect; the
fat plot shows some between-trial variance (Tau² 0.36, I² 20.1%, Figure 2B), so a random-effects bound
would be somewhat wider.)

### The same scrutiny applied to Sardeli (added 2026-11-05)

Eisa's pool is read critically below, so Sardeli gets the same read. Its model choice rests on a
stated rationale that reads backwards: «As the studies tested were signiﬁcantly homogeneous (p <
0.05), the authors used the ﬁxed effect model in all three meta-analyses. Despite the existence of
particular differences between the samples studied and RT and CR protocols deserving comparisons, the
absence of between-studies variance precluded further subgroup analysis.»
[@sardeli2018]
The «p < 0.05» looks like a misstatement: the lean-mass forest plot reports Tau² 0.00, Q 1.24, df 5,
p 0.94, I² 0.0% [@sardeli2018],
so a random-effects model would give the same lean-mass interval and the fixed-effect choice does not
narrow it (corrected 2026-11-05: a claim that the model narrowed the interval, and an absence claim
about heterogeneity statistics that missed the figure, are deleted).
The wording varies within the paper, mostly by rounding. The results give 93.5% (above); the discussion: «The main
ﬁnding of the present meta-analyses was that CRRT prevents 93% of the LBM loss induced by CR, although
it does not affect BM and FBM reductions as compared to CR without RT.»; the abstract: «Our conclusion
is that CRRT is able to prevent almost 100% of CR-induced muscle loss, while resulting in FBM and BM
reductions that do not signiﬁcantly differ from CR.»; and the protein paragraph gives «the main effect
of RMD 0.6 kg» against the pooled 0.819 kg
[@sardeli2018]. The 93 is rounding and
*almost 100%* is looser wording; the 0.6 vs 0.819 kg gap is unexplained. Other
internal inconsistencies, all from reading Sardeli's own figures and text: the CRRT lean change is
printed «0.05 ± 0.3 kg» without a sign, and 93.5% fits a loss of 0.05 kg while the 0.819 kg RMD fits a
gain (this page's table prints it unsigned, as Sardeli does; corrected 2026-11-05 after the parent
audit: *shows +0.05*); Brochu's CRRT n is 21 in the lean-mass forest plot and 36 in the
fat plot (Figure 2A vs 2B, p 5); and every one of Table 1's six citation tags points to a different
reference than its trial (Amamou [6], Bouchard [18], Brochu [15], Dunstan [21], Sénéchal [14],
St-Onge [19], against reference-list entries 7, 19, 16, 24/25, 15 and 20; the PEDro sentence below
uses the reference-list numbers; corrected after the parent audit: only Sénéchal was named) [inferred from @sardeli2018].
None moves the kg RMD, which carries the decision (corrected 2026-11-05: *the one
unexplained discrepancy*). The 93.5% is a ratio over a
small denominator (0.76 kg lost on CR alone), so modest changes in either arm move it a lot
. Trial quality: «The quality of studies were homogeneous, as observed by their scores of
5 [7,16,20], 6 [19,24], and 7 [15] on the PEDro scale.», on a scale that «ranged from 0 (very low
methodological quality) to 9 (high methodological quality)» once blinding items were dropped
[@sardeli2018]. The sample is narrow: in
Table 1's Sex column, Bouchard 2009, Brochu 2009, Sénéchal 2012 and St-Onge 2012 are «women» and
Amamou 2016 and Dunstan 2005 «both», and the CRRT Duration (Weeks) column runs 12 to 24
[@sardeli2018]. So four of six trials
are women-only, though the two mixed-sex trials carry most of the lean-mass weight (Dunstan 47.96%,
Amamou 8.75% [@sardeli2018];
about 57% together), and nothing past six months is pooled. None of this reverses the
direction; six small, short trials keep `confidence: low` (corrected 2026-11-05: *widens
the honest interval*).

## Surrogate boundary — lean mass is not function, and function was not measured

[@sardeli2018]
Lean body mass is a **surrogate** -> [[Surrogate Outcomes]]. The reason an older adult cares about keeping
muscle is function, strength, and independence — and **the study was not designed to test function.** The
transmission from the preserved \~0.8 kg to a patient-important outcome is a *claim to be evidenced*, not an
assumption, and here it is weak:

- **Muscle quality trended up, but non-significantly.** «we showed a trend towards the increase in whole
  body muscle quality when RT was added to CR (p = 0.07), suggesting that in humans, RT improves muscle
  function regardless of muscle mass changes during CR». p = 0.07 is a tendency, not an established effect.
- **The quality metric is itself limited.** «muscle group strength was related to whole LBM, instead of
  local muscle mass, which is a limitation of the method» — so even the strength signal is tied to the
  surrogate, not to the muscle doing the work.
- **One cited single trial reports mobility benefit:** «when CRRT was compared to RT alone, the addition of
  CR to RT improved mobility (400 m of walk time) without compromising other functional adaptations of RT
  alone [14]» — cited secondary evidence, not pooled here. (Labelled 2026-11-05: this trial adds CR
  to RT, so it speaks to what the diet does when RT is already done, not to what RT adds to a diet;
  it does not support the RT-to-function step.)
- **The lean measure is DXA lean mass** («measured by dual-energy X-ray absorptiometry»
  [@sardeli2018]), which counts
  water and non-muscle lean tissue as well as muscle, so the preserved \~0.8 kg is not all muscle
 (added 2026-11-05).

So: the lean-mass preservation is well-measured and significant; the step from there to *better function*
is directional and under-powered. Related mortality/function predictors sit on
[[Low Muscle Mass and Mortality]], [[Grip Strength and Mortality]] and
[[Muscle-Strengthening Activity and Mortality]] — but those are observational/interventional on *different*
populations, so they do not close this loop.

## Mechanism (proposed, directional)

[@sardeli2018]
The authors propose the protection «relies on the energy costs of protein synthesis. During CR without RT,
the blunted muscle protein synthesis with elevated proteolysis might allow energy maintenance» — RT reverses
this by driving muscle protein synthesis, shifting energy toward lean-mass maintenance while fat is depleted
for fuel. [inferred from @sardeli2018]

## Protein is a complementary lever, not a substitute

[@sardeli2018]
The one pooled trial with higher protein (30% vs 15% of energy) «found lower LBM loss than the others
(RMD 1.3 kg compared to the main effect of RMD 0.6 kg)», and Longland «CRRT with high protein consumption
induces an increase in LBM and promotes larger fat loss» vs low protein. So RT and higher protein appear to
stack — single-trial evidence, directional only. The two levers for the same decision:

- **RT** (this page): preserves \~0.82 kg LBM under CR in obese elderly.
- **Protein** (-> [[Protein Intake During Energy Restriction]]): a modest protein increase (\~1.0-1.3 vs
  \~0.7 g/kg/d) preserves \~0.4-0.8 kg lean mass under a deficit, including in adults >=50 (Kim) — and more
  protein may add to the RT stimulus, on the single-trial, directional evidence above (corrected
  2026-11-05 after the parent audit: *stacks on top*).

For an older adult dieting, both levers point the same way; neither replaces the other.

## Stratum and transportability — obese ELDERLY, not general obese

[@sardeli2018]
The pool is «older adults or elderly people (mean > 57 years old), including men, women, obese, sedentary,
healthy, dyslipidemic, hyperglycemic, and diabetic individuals». The metabolic strata inside are broad
(healthy through diabetic), but the AGE band is old and narrow:

- **The finding is for the obese/overweight sedentary OLDER adult.** This is exactly the stratum where the
  lever matters most — baseline lean mass is already falling with age, so a dieting-induced \~0.76 kg loss is
  a larger relative hit, and the \~0.82 kg preserved is a route-(a) high-baseline-risk benefit (the absolute
  stake is larger in the old).
- **Transportability to the middle-aged/younger obese adult is an open caveat.** Younger
  dieters may differ in lean-mass loss and RT response (the wiki's caveat, not Sardeli's
  statement; labelled in fix round 2; heading and wording restated after the round-2
  audit: *a stated caveat, not an assumption*); whether the \~0.8 kg preserved (the \~93.5% attenuation) transports
  down the age range is untested in this pool. Do not read the number as a general-obese result.

## The sarcopenic-obesity thread (resolved 2026-10-04 — a distinction, not a tension)

[@sardeli2018]
Sardeli contrasts its 93.5% (RT-only) attenuation against a prior MA: «A previous meta-analysis showed only
50% LBM loss attenuation when different types of exercise were added to CR in sarcopenic obese individuals
over 50 years old [10]. However, since endurance, resistance, and combined types of training were included
in this analysis, it was not possible to identify which type of exercise led to the preventive effect.»
Sardeli reads the gap as RT being the active modality — but the prior MA could not isolate modality, and the
population differs (sarcopenic obese vs obese).

**Resolution (sibling ingest of [[Resistance Training for Sarcopenic Obesity]], Polo-Ferrero 2025).** The
sibling does **not** answer the same question and does **not** carry the \~50% figure — the AWAITS premise
was a mis-identification. Polo-Ferrero is RT **alone vs no treatment**, in sarcopenic obesity, **without any
caloric restriction** (searched: "caloric restriction"/"weight loss"/"energy restriction" = zero in both
chunks), reporting a **composite body-composition SMD (0.35)**, not a lean-mass-retention-under-deficit
fraction. The parameter table (on the sibling page) shows a different population, exposure, comparator, and
outcome-unit — **not-joined check (ii)**: the two claims are consistent once matched, so this is a
**distinction, not a `[[tension]]` and not type-E**.
The \~50% referent belongs to **Sardeli's own cited ref [10]** (a different mixed-modality exercise+CR MA in
sarcopenic obese), which the wiki does not hold, so the 93.5%-vs-50% comparison stays open against that
un-held source:.
[inferred from @poloferrero2025; @sardeli2018]

## A between-trial pool of lifestyle + RT (Eisa 2026; added 2026-11-05)

Eisa and Barood's 20-RCT review of lean mass under incretin drugs and lifestyle programmes reports a
lifestyle + resistance-training pool: «lifestyle plus resistance training (17.5% [14.2–20.8]) showed
significantly lower lean mass loss than all other intervention types (p < 0.001 for all pair- wise
comparisons)» [@eisa2026lean].
What Eisa calls «standard lifestyle interventions» pooled at 26.2% (24.1-28.3) [@eisa2026lean];
which trials enter that pool is not stated. Figure 2's lifestyle group plots all five Table 1
lifestyle rows, including Villareal 2017 («Diet + aerobic + resistance») and two «Diet + exercise»
rows, and has no separate resistance-training group, so whether resistance work sits inside the
26.2% pool cannot be told from the paper [inferred from @eisa2026lean] (corrected 2026-11-05: *lifestyle without RT*
was the wiki's gloss; restated after the parent audit to match [[GLP-1 and Lean Mass]]).

| Parameter | Sardeli 2018 | Eisa 2026, lifestyle + RT row | Same quantity? |
|---|---|---|---|
| Design | 6 RCTs, each randomising CR alone vs CR + RT (above) | 2 trials pooled and compared against other trials (s3.4.2, Table 2) | No: within-trial vs between-trial |
| Trials | Amamou 2016, Bouchard 2009, Brochu 2009, Dunstan 2005, Sénéchal 2012, St-Onge 2012 [@sardeli2018] | not named; Table 1 names resistance training in one row, Villareal 2017 («Diet + aerobic + resistance», «Older adults») [@eisa2026lean] | No Sardeli trial is named anywhere in Eisa `[searched: the six surnames across Eisa chunk 01, all zero]`, but Eisa's two RT trials are unnamed, so overlap is unknown |
| Lean measure | LBM kg, CRRT minus CR: RMD 0.819 kg (0.364-1.273) [@sardeli2018] | share of weight lost, 17.5% (14.2-20.8); lean kg −1.2 (−1.8 to −0.6) in Table 2, −1.8 (−2.3 to −1.3) in the text [@eisa2026lean] | No |
| Fat | −3.86 vs −3.73 kg, no significant difference [@sardeli2018] | −5.6 (−6.8 to −4.4) vs lifestyle −5.9 (−7.1 to −4.7) kg, separate trials [@eisa2026lean] | Partly (Eisa's is between-trial) |
| Certainty | gold MA, `confidence: low` on this page | GRADE «high» for the lifestyle + RT outcome (s3.6), for 2 unnamed trials in a paper whose counts and kg figures disagree; Table S7 not held, so the rating cannot be checked | — |

Eisa cells: [@eisa2026lean].

Eisa's point estimates run the same way as this page's finding (a lower lean share with RT; fat kg
similar), but its fat comparison is between separate trials, and the two numbers are different
quantities from different designs, so they are recorded as a distinction, not as independent
corroboration (not-joined check (ii)) [inferred from @eisa2026lean].
Eisa's contrast sets two unnamed trials against other trials with other populations and other
amounts lost: its lifestyle + RT pool lost the least weight of any pool in Table 2 (lean plus fat,
6.8 kg vs 8.3 kg for standard lifestyle) [inferred from @eisa2026lean].
Eisa's meta-regression runs the way that would flatter the RT pool (more weight lost, a higher lean
share; β = 0.8 (0.3-1.3) [@eisa2026lean]),
and that pool lost the fewest kg. But the slope is on percent total weight loss, which the paper does
not report for the RT pool, and it was fitted across these same trials, so how much of the 17.5% is
explained by amount lost cannot be checked from the paper (corrected 2026-11-05: *part of the 17.5%
may reflect amount lost*, then restated with its direction). The two Villareal values plotted in Eisa's
lifestyle group, 20.0 and 15.0, average exactly 17.5; if they are the RT row's two trials, the RT
pool and the lifestyle pool it beats share trials. A random-effects pool of the two gives about 17.6
(12.7-22.5), not the reported 14.2-20.8, so the match is on the mean only [inferred from @eisa2026lean].
The between-trial caveat applies to Eisa's drug-vs-lifestyle comparison too
(-> [[GLP-1 and Lean Mass]], *Eisa 2026*). Eisa's paper also disagrees with itself on the RT row's kg
figure, on study counts and on which lifestyle trials are included (source page). Sardeli's within-trial
randomisation stays the better warrant for *RT spares lean mass under a deficit*; Eisa adds no within-trial
RT estimate and no function outcome. Confidence unchanged.

## Decision relevance

- **For an obese older adult losing weight, include resistance training to protect lean mass.** Expect
  it to preserve about 0.8 kg of DXA lean mass that the diet would otherwise remove (RMD 0.819 kg
  [0.364-1.273]), with no significant cost to fat loss (bounded at about 0.6 kg on a fixed-effect
  interval, wider on random effects, above). The diet does the fat loss; RT offsets the lean-mass
  loss the diet causes, on average close to all of it, though the interval's lower bound (0.364 of
  the \~0.76 kg lost on CR alone) admits about half (fix round 2: *(mostly muscle)* and *keeps
  most of the lean mass* restated).
  (Labelled 2026-11-05: that interval comes from 6 small trials of 12-24 weeks, four of them
  women-only, above, so treat *about 0.8 kg* as the order of magnitude, not a precise figure
; corrected after the parent audit: *roughly a kilogram*, *to protect muscle*,
  *essentially no cost*.)
- **A labelled dose (added 2026-11-05).** The pooled trials' protocol: «RT protocols lasted from 12 to
  24 weeks, and applied a general warm-up on a treadmill or cycle ergometer, followed by two or three
  trials of 8 to 15 repetitions, with a minimum of 65% of one repetition maximum (1RM) for each
  exercise, three times per week.» [@sardeli2018]
  Eisa's recommendation table gives «Resistance training 2–3 sessions per week, targeting major muscle
  groups» [@eisa2026lean]. So a
  reasonable default is 2-3 sessions a week, 2-3 sets of 8-15 repetitions per major muscle group at
  no less than about 65% of one-repetition maximum. The trials tested three sessions a week; the
  twice-weekly lower bound comes from Eisa's recommendation table, not from a tested arm, and no
  minimum effective dose was located; in Table 1 one trial (St-Onge) used 1-3 sets with load set as
  8 to 15RM rather than a %1RM, and one (Sénéchal) did not report load, so the methods summary is the
  typical protocol, not every trial's [@sardeli2018] (corrected
  2026-11-05: *the tested protocol range*; corrected after the parent audit: *some trials at 1-3
  sets*). Eisa's «Strong (multiple RCTs)» label is its Table 4 grade for RT in lean-mass preservation
  during weight-loss treatment, not squared with its own lifestyle + RT pool of 2 unnamed
  trials, compared between trials; its «Combined approach» row (pharmacotherapy + RT + protein) is «Emerging
  (limited RCTs)» -> [[GLP-1 and Lean Mass]] (restated in fix round 2: *for RT in
  general*, *its row for drug users*).
- **Do not expect RT to speed weight or fat loss.** No significant difference in fat or total weight
  loss was found when RT was added here (corrected 2026-11-05: *unchanged*) — RT earns its place on
  composition and (directionally) function, not on the scale. The weight-loss
  lever is the energy deficit -> [[Exercise Modality for Body Composition in Obesity]],
  [[Does Weight Loss Reduce Cardiovascular Events]].
- **Add protein alongside.** RT + a modest protein increase appear complementary for lean-mass
  preservation (directional, single-trial evidence for the combination, above); a labelled default is
  about 1.0-1.3 g/kg/d, the increase the protein page holds against \~0.7 under a deficit
  -> [[Protein Intake During Energy Restriction]]; for older adults who exercise, PROT-AGE's
  consensus is at least 1.2 g/kg/d, and PROT-AGE limits intake to 0.8 g/kg of ideal body weight at eGFR below 30 when not on
  dialysis -> [[Protein Intake for Older Adults]]
 (corrected
  2026-11-05 after the parent audit: *Stack protein on top*, without a dose). This is also the exercise arm of the muscle-preservation
  strategy for drug-induced weight loss -> [[GLP-1 and Lean Mass]].
  (Labelled 2026-11-06: the one held trial that randomises exercise on top of a GLP-1 drug, S-LiTE,
  ran an aerobic-dominant programme with no dedicated progressive RT described, in adults aged 18-65,
  in the year after a diet (its drug and combination arms kept losing some weight, the exercise arm
  regained some), not RT during a planned deficit in older adults, so it neither tests nor transports
  this page's RT finding
  -> [[GLP-1 and Lean Mass]], *S-LiTE*.)
  (Refined 2026-11-06: the trial's appendix describes the group sessions' 15-minute circuit, which
  mixed aerobic stations with strength stations (one to four of five in the example programmes; at
  least two by the stated rule, the gap being whether step-ups count), load progression encouraged
  but not prescribed, in sessions completers attended under once a week; so the programme held a
  small resistance component, not none, and still no progressive RT arm. The label's conclusion
  stands.)
- **Rank within Layer 1.** For a sedentary obese older adult, the big rock is the energy deficit (fat loss)
  plus doing resistance activity at all; RT-during-CR is a high-value co-prescription because the harm it
  plausibly prevents, diet-induced lean-mass loss in a stratum already losing muscle, is a plausible
  route to patient-important function loss; the step to function is untested here
  -> [[Big Rocks (Elderly)]].

## Limits

- **Single within-trial gold source, `confidence: low`** — 6 RCTs, one MA; the cross-links are the
  wiki's weave, not replication of the pooled estimate. Eisa's between-trial pool (above) is not a
  replication either (corrected 2026-11-05: *single gold source*).
- **Narrow sample and horizon** (added 2026-11-05) — four of six trials women-only (the two mixed-sex
  trials carry about 57% of the lean-mass weight), 12-24 weeks (above).
- **Surrogate outcomes only.** LBM/FBM/BM; no function endpoint was designed-for, no mortality or CV event
  measured. The muscle-quality transmission is a p = 0.07 trend tied to whole LBM, not local muscle.
- **Obese-elderly only** (mean >57 y) — transportability to middle-aged/younger obese adults untested.
- **Bone mass is a named gap** — CR causes bone loss, which exercise prevents «at least in rodent models of
  male senile osteoporosis [47]»: rodent-only in this pool, not human evidence
  [@sardeli2018].
- **Heterogeneous CR protocols** (one higher-protein, one reduced-fat arm among the six), and whether CR's
  benefits depend on protein restriction is unresolved (authors' own note).

## Self-critique `[run 2026-10-04, before commit]`

(Labelled 2026-11-05: this block predates the Polo-Ferrero resolution and the Eisa section; its
*fake-tension* bullet describes an AWAITS handle that was later resolved as a distinction, above.)

- **Overclaim guard:** the headline (RT preserves \~0.82 kg lean mass, \~93.5% attenuation) is quoted with its
  CI and p; fat/weight unchanged is stated as the symmetric non-finding; the function step is explicitly
  demoted to a p = 0.07 trend plus one cited single trial, not asserted as established.
- **Surrogate-as-outcome guard:** LBM named a surrogate throughout; the transmission to function/strength is
  marked a claim-to-be-evidenced and shown weak (non-significant, tied to whole LBM).
- **Fake-tension guard:** the 93.5%-vs-50% contrast with the prior sarcopenic-obese MA is left as an OPEN
  THREAD with an AWAITS handle to the Polo-Ferrero sibling, NOT filed as a tension — the two answer a related
  question in different populations/modality mixes, and the cross-source weave belongs to the sibling ingest
  (per the pair instruction: do not force a tension now).
- **Stratum guard:** population pinned as obese-ELDERLY (mean >57 y); transportability to younger obese
  stated as a caveat, not assumed; the high-baseline-risk (route-a) reading of why the lever matters most in
  the old is marked as the reasoning, not a subgroup-interaction claim.
- **Homelessness check:** vsearch + title/alias grep found no page holding the RT-during-CR lean-mass finding
  (closest: GLP-1 and Lean Mass = drug-induced loss; Protein During Energy Restriction = the protein lever;
  Exercise Modality for Obesity = modality ranking, exercise-alone-not-weight-loss) — minting, not extending.
- **Attribution guard:** every effect size chunk-pinned via cite.py; magnitudes carry CIs; the mechanism and
  the Layer-1/route-a readings are marked.

## References

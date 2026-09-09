---
type: framework
question: Within an otherwise-healthy, low-saturated-fat diet, does lean red meat move atherogenic lipoproteins (LDL-C, apoB, LDL particles) — and how much of the meat signal is the SFA load versus the meat matrix or meat color itself?
aliases: [Lean Beef and Lipids, BOLD Study, Red vs White Meat Lipids, Lean Red Meat and ApoB, Lean Red Meat and LDL, APPROACH Trial, Red Meat Comparison Diet Lipids]
authors: [Roussell, Michael A; Hill, Alison M; Gaugler, Trent L; West, Sheila G; Vanden Heuvel, John P; Alaupovic, Petar; Gillies, Peter J; Kris-Etherton, Penny M; Bergeron, Nathalie; Chiu, Sally; Williams, Paul T; King, Sarah M; Krauss, Ronald M; Guasch-Ferre, Marta; Satija, Ambika; Blondin, Stacy A; O'Connor, Lauren E; Kim, Jung Eun; Campbell, Wayne W; Hu, Frank B; Willett, Walter C; Stampfer, Meir J]
sources: [Roussell - Beef Optimal Lean Diet BOLD 2012, Bergeron - Red White Nonmeat Protein Atherogenic Lipoproteins 2019, Guasch-Ferre - Red Meat Comparison Diets Cardiovascular Risk Factors Trials 2019, OConnor - Red Meat Cardiovascular Risk Factors Trials 2017]
confidence: medium
created: 2026-09-02
updated: 2026-09-08
self_critiqued: 2026-09-08
relationships:
  related_to:
    - Saturated Fat Intake and Replacement
    - Is the Food Category Doing Any Work
    - The Comparator Problem
    - Surrogate Outcomes
    - LDL ApoB and Cumulative Exposure
    - Should Adults Reduce Red and Processed Meat
    - Poultry and White Meat Consumption
    - Red and Processed Meat and Cancer
    - Measurement Error in Dietary Assessment
---

The wiki's red-meat -> CVD evidence is otherwise entirely **observational cohort** and holds **no
lean-red-meat feeding-trial lipid data** at all. Two controlled-feeding RCTs fill that empty cell.
Together they answer a question neither answers alone: **within a low-SFA background, the
atherogenic-lipoprotein signal is set by the background SFA load and by whether the protein is meat or
plant — not by how much lean beef is on the plate, and not by whether the meat is red or white.**
Every outcome here is a **surrogate** (LDL-C, apoB, LDL particles); neither trial measured a clinical
CVD event, so read the whole page at surrogate level -> [[Surrogate Outcomes]].
[inferred from @roussell2012bold; @bergeron2019]
A gold pooled MA of **36 substitution RCTs** (Guasch-Ferré 2019, below) now sits over the two feeding
trials: it makes the comparator-dependence quantitative across the whole trial literature — the *sign*
of red meat's lipid effect flips with what replaces it — and it pools Roussell's own BOLD data, so it
is a pooled-trial **refinement** of this page, not an independent route. It too measures only
surrogates. [inferred from @guaschferre2019redmeat]

## Why controlled feeding is the right instrument here

The observational red-meat fabric is confounded and carries large dietary-measurement error
-> [[Measurement Error in Dietary Assessment]]. These are **metabolic-kitchen feeding trials** —
foods provided, weight held stable, high compliance — so they estimate the *direct lipid effect* of
substituting one protein for another with the rest of the diet matched. That buys internal validity on
a surrogate at the cost of a short horizon and no hard endpoint. Bergeron framed the specific hole:
«there has to date been no systematic evaluation of the potential interaction of dietary protein source
and SFA content on concentrations of LDL cholesterol and related atherogenic lipoprotein measures,
including levels of lipoprotein particles».
[@bergeron2019]

## Roussell BOLD 2012 — amount of lean beef, within a low-SFA pattern

```
effect_measure:          LDL-C fell vs the high-SFA control (HAD) by 5.5% (DASH), 4.7% (BOLD),
                         4.4% (BOLD+); all P<0.05, and NO difference among the three test diets
                         (P>0.1). Absolute LDL-C decrease from baseline: DASH -0.37, BOLD -0.35,
                         BOLD+ -0.345 mmol/L (vs HAD's own -0.14 decrease). apoB fell significantly
                         only on BOLD+ (88.6 vs HAD
                         92.8 mg/dL); BOLD 91.1 and DASH 91.0 were not significant vs HAD.
population_and_comparator: 36 hypercholesterolemic adults (baseline LDL-C >2.8 mmol/L), 4-period
                         randomized crossover controlled feeding, 5 wk/diet. Arms: HAD (33% fat,
                         12% SFA, 20 g beef/d), DASH (27% fat, 6% SFA, 28 g beef/d), BOLD (28% fat,
                         6% SFA, 113 g beef/d), BOLD+ (28% fat, 6% SFA, 27% protein, 153 g beef/d).
outcome:                 LDL-C, TC, HDL-C, apoB, apoA-I, apoC-III (all SURROGATE).
dose_response_shape:     flat across beef dose once SFA is fixed — 20 -> 153 g beef/d did not
                         separate the test diets on LDL-C.
uncertainty:             n=36, 5-wk, surrogate-only, no events; industry funded (Beef Checkoff).
effect_modifiers:        baseline CRP: in the high-CRP (>1 mg/L) subgroup, BOLD/BOLD+ (but not DASH)
                         significantly lowered TC/LDL-C from baseline — a secondary, hypothesis-
                         generating finding.
certainty:               author conclusion: lean beef in a low-SFA pattern gives favorable lipid
                         effects comparable to DASH.
confidence: medium
```

The design point: BOLD swapped a large amount of lean beef (113-153 g/d) into a DASH-like pattern and
the LDL-C reduction stayed equal to DASH's. Roussell reads this as the protein source not mattering
once the fat is controlled — «the protein source [with the exception of soy protein (21)] does not
appear to modify the TC or LDL cholesterol response to a cholesterol-lowering diet».
[@roussell2012bold] The LDL-C drop tracked the SFA cut
(12% -> 6% E), not the beef. The conclusion: «Low-SFA, heart-healthy dietary patterns that contain
lean beef elicit favorable effects on cardiovascular disease (CVD) lipid and lipoprotein risk factors
that are comparable to those elicited by a DASH dietary pattern».
[@roussell2012bold]

**The blind spot Roussell cannot see: it has no plant/nonmeat arm.** Every comparator is another
animal-protein or mixed diet, and the control is *high-SFA*, so lean beef can only look good. The trial
shows beef is not *worse* than DASH; it cannot show whether beef is *as good as* removing the meat.
[inferred from @roussell2012bold] -> [[The Comparator Problem]]

## Bergeron APPROACH 2019 — protein source x SFA level, factorially

```
effect_measure:          LDL-C and apoB were HIGHER on red and white meat than on nonmeat,
                         independent of SFA level (P<0.0001, except apoB red-vs-nonmeat P=0.0004),
                         driven by LARGE LDL particles; small+medium LDL and total/HDL-C were
                         unaffected by protein source (P=0.10, P=0.51). Red vs white meat did NOT
                         differ on any primary outcome. Independent of protein source, high vs low
                         SFA raised LDL-C (P=0.0003), apoB (P=0.0002), and large LDL (P=0.0002);
                         effects were ADDITIVE (no protein x SFA interaction).
population_and_comparator: 113 generally-healthy adults (per-protocol; 62 high-SFA, 51 low-SFA arm),
                         2 parallel SFA arms (high \~14% E vs low \~7% E) x 3-period crossover of
                         red meat / white meat / nonmeat protein (\~12% E each), 4 wk/diet.
outcome:                 primary: LDL-C, apoB, small+medium LDL, total/HDL-C (all SURROGATE).
dose_response_shape:     SFA effect on LDL-C/apoB confined to LARGE LDL, not small/medium.
uncertainty:             surrogate-only, no events; 4-wk; lean cuts only, no fish, grain-finished
                         beef; SFA supplied mainly from dairy; industry-linked (Krauss/Bergeron
                         hold a Dairy Management Inc grant [not for this work]; Krauss holds an
                         ion-mobility patent).
effect_modifiers:        none material — no protein x SFA interaction on the lipoprotein biomarkers.
certainty:               author conclusion: no lipid basis to choose white over red meat; plant
                         substitution + unsaturated-for-SFA would yield benefit.
confidence: medium
```

Bergeron adds the two contrasts Roussell lacks. **First, the plant arm.** Both meats — red *and*
white — raised LDL-C and apoB relative to nonmeat protein, even at low SFA: «LDL cholesterol and apoB
were higher with red and white meat than with nonmeat, independent of SFA content».
[@bergeron2019] So the
comparator was doing the work in Roussell: against a plant referent, lean meat is not neutral.
**Second, red vs white head-to-head** — no difference: the trial does «not provide evidence for
choosing white over red meat for reducing CVD risk on the basis of plasma lipid and lipoprotein
effects». [@bergeron2019]
Meat *color* is not the lever; meat-vs-plant and background SFA are.

**Bergeron's surrogate caveat, on its own data.** The LDL-C/apoB rise from meat and from SFA landed in
**large** LDL particles, which are more weakly CVD-associated than small/dense LDL — so the surrogate
may overstate the hard-outcome effect: «the impact of high intakes of red and white meat, as well as
SFA from dairy sources, which selectively raised large LDL subfractions, may be overestimated by
reliance on LDL cholesterol». [@bergeron2019]
This is a rare instance of a trial flagging that its own primary surrogate over-reads the endpoint that
matters -> [[Surrogate Outcomes]], [[LDL ApoB and Cumulative Exposure]].

## Guasch-Ferré 2019 — the comparator sets the SIGN, pooled across 36 trials

Where the two feeding trials fix one comparator each, this gold MA pools **36 RCTs (1803
participants)** of red-meat diets versus diets that **replace** the red meat with a *specified* food,
and stratifies the effect by what the replacement was. The result is the substitution principle made
quantitative: the **sign** of red meat's lipid effect flips with the comparator, so *does red meat
harm lipids?* is ill-posed until the substitute is named. Positive WMD below = red meat lowered the
lipid LESS than the comparator (comparator better); negative = red meat lowered it MORE (red meat
better on that analyte). All mmol/L, all SURROGATE.

```
effect_measure:          ALL comparators combined (n=36): NO differential effect on total-C, LDL-C,
                         HDL-C, apoA1, apoB, or BP; red meat gave lesser TG decrease (WMD +0.065;
                         95% CI 0.000-0.129). vs HIGH-QUALITY PLANT protein (legumes/soy/nuts, n=8):
                         red meat lesser decrease in total-C (WMD +0.264; 95% CI 0.144-0.383;
                         P<0.001) and LDL-C (WMD +0.198; 95% CI 0.065-0.330; P=0.003) -- plant is
                         better. vs FISH only (n=10): red meat GREATER decrease in LDL-C (WMD -0.173;
                         95% CI -0.260 to -0.086; P<0.001) and HDL-C (WMD -0.065; 95% CI -0.109 to
                         -0.020) -- fish RAISED LDL (and HDL). vs POULTRY: no differential lipid
                         effect. vs CARBOHYDRATE (n=3): red meat GREATER TG decrease (WMD -0.181;
                         95% CI -0.349 to -0.013) but lesser HDL-C decrease (WMD +0.139; 95% CI
                         0.004-0.275).
population_and_comparator: 36 RCTs, 1803 adults, diets prescribing differing red-meat amounts (46.5-
                         500 g/d intervention vs 0-266 g/d comparator), >=2 wk; PubMed to July 2017.
                         Comparators STRATIFIED (plant / fish / poultry / poultry+fish / mixed animal
                         / carbohydrate / usual diet). 20 crossover, 16 parallel; none double-blinded.
outcome:                 total-C, LDL-C, HDL-C, TG, apoA1, apoB, BP (all SURROGATE; no CVD event).
dose_response_shape:     NULL over the studied range 0-500 g/d red meat (continuous g/d): total-C
                         P=0.73, LDL-C P=0.49, HDL-C P=0.57, TG P=0.05. No knee located; monotonicity
                         not even shown -- a flat pooled slope.
uncertainty:             surrogates only; most trials small (n 8-191); magnitude of differences small;
                         no blinding; heterogeneity present but reduced by comparator-stratification.
                         Funding-source subgroup (red-meat-industry vs other) showed no differential.
effect_modifiers:        the COMPARATOR is the modifier (route not (b)-on-one-food but the whole
                         substitution frame); lean vs nonlean (below); SFA gap between arms.
certainty:               author conclusion: substituting red meat with high-quality plant protein --
                         but not fish or low-quality carbohydrate -- gives more favorable lipids.
confidence: medium
```

**The sign-flip is the decision content.** Against *plant* protein red meat looks worse on LDL-C
(+0.198 mmol/L); against *fish* it looks better on LDL-C (-0.173 mmol/L, because oily-fish comparators
raised LDL); against *refined carbohydrate* it looks better on triglycerides (-0.181 mmol/L). Same
food, opposite-signed surrogate effects — the clean pooled-trial instance of [[The Comparator Problem]]
and of framing every recommendation as a substitution.
[@guaschferre2019redmeat]
Guasch-Ferré states the principle directly: «Specification of an explicit comparison is the cornerstone
of nutritional substitution analysis ... Analyses that do not specify a comparison implicitly compare
the food(s) under study with the mixture of all other calorie-bearing foods in the diet, making
interpretations and dietary recommendations difficult.»
[@guaschferre2019redmeat]
The all-combined near-null is itself an artifact of *not* naming the substitute — averaging
opposite-signed effects to roughly zero: «Inconsistencies regarding the effects of red meat on
cardiovascular disease risk factors are attributable, in part, to the composition of the comparison
diet.» [@guaschferre2019redmeat]

**Two refinements of this page's earlier claims.** (i) The dose-response null over 0-500 g/d pools the
very BOLD data the page holds — Roussell 2012 and Hill 2015 are among the 36 — lifting «flat across
beef dose» from one trial to a 36-trial pooled null, and stating it correctly bounded to the studied
range. (ii) Lean red meat vs all comparators gave *greater* decreases in total-C (WMD -0.05; 95% CI
-0.12 to -0.02) and LDL-C (WMD -0.08; 95% CI -0.15 to -0.02), but nonlean did not — pooled support for
the page's lean-cuts-only caveat.
[@guaschferre2019redmeat]

**Surrogate discipline holds here too.** No CVD event was measured, and the authors say the transmission
is not theirs to make: «we cannot directly extrapolate CVD risk from intermediate biomarkers such as
lipids, apolipoproteins, and blood pressure».
[@guaschferre2019redmeat]
-> [[Surrogate Outcomes]], [[LDL ApoB and Cumulative Exposure]]

<div class="recent-update" data-last-updated="2026-09-08">

## O'Connor 2017 — the dose-threshold read, pooled across comparators (type-F)

The earlier sibling MA of Guasch-Ferré (same Purdue group; O'Connor and Campbell co-author both, so
independence is DEAD — type-F, never `[E-independent]`). It pools **24 RCTs (\~39 trial-arms; PubMed +
Cochrane + Scopus to May 2016)** and asks a **dose-threshold** question Guasch-Ferré does not: does
eating **>=0.5 vs <0.5 servings of total red meat/d** — the DGA-relevant cutpoint — worsen risk factors,
pooling *all* comparators together? Answer: no differential on any lipid/lipoprotein or blood pressure
(2-factor nested ANOVA, P>0.05 all; e.g. LDL-C 3.18 vs 3.13 mmol/L, P=0.52; change WMD LDL-C 0.02
[95% CI -0.05, 0.08]), across an intervention range up to **7.1 serv/d (500 g/d)**.
[@oconnor2017redmeat]

What O'Connor adds over the held Guasch-Ferré dose-null, and why it is not echo:

- **A guideline-anchored threshold search, on a largely DISJOINT trial set.** O'Connor tests for a knee
  explicitly — «There is no visual threshold of total red meat consumption that indicates an apparent
  negative effect on blood lipids, lipoproteins, and blood pressures»
  [@oconnor2017redmeat] — and its pool
  **excludes Roussell BOLD 2012 and Hill 2015**, the very trials Guasch-Ferré anchors on (BOLD carries
  red meat in every arm, so it has no <0.5-serving control). So the null is independent-constituency
  corroboration of the flat-across-dose reading, not a re-pool of the same data.
  [inferred from @oconnor2017redmeat; @guaschferre2019redmeat]
- **The one non-null:** post-hoc, HDL-C was *higher* at >=3 serv/d (WMD 0.10; 95% CI 0.05, 0.16) — a
  benign direction, so no hidden harm surfaces at the top of the dose range.
  [@oconnor2017redmeat]
- **Null is not cardioprotection.** The authors flag that this is a no-negative-effect finding, not
  evidence more red meat helps: «our conclusions do not support a cardioprotective effect of higher red
  meat consumption, such as is shown with fatty fish».
  [@oconnor2017redmeat]

**The comparator-blind caveat — O'Connor is the worked instance of Guasch-Ferré's own critique.** Because
O'Connor pools *all* comparators, its headline *does not influence risk factors* is precisely the
comparator-averaged null that Guasch-Ferré (co-authored by O'Connor two years later) names as
uninformative — opposite-signed substitute effects cancelling. Read at the fabric level, O'Connor's null
means *no NET effect across an unspecified mix of substitutes*, not *red meat is lipid-neutral against
any given substitute* — the substitute-specific sign-flips only appear once the comparator is named
(Guasch-Ferré, above). -> [[The Comparator Problem]]

**Surrogate discipline, again.** All outcomes are intermediate biomarkers; no CVD event was measured, and
O'Connor itself foregrounds the gap between this RCT-surrogate null and the observational hard-outcome
signal: «These results are inconsistent with much of the observational evidence related to red meat
consumption and CVD, which prompts the need for future research to reconcile the apparent disconnect
between RCT and observation-based conclusions.»
[@oconnor2017redmeat]
-> [[Surrogate Outcomes]], [[LDL ApoB and Cumulative Exposure]]

</div>

<div class="recent-update" data-last-updated="2026-09-08">

## Synthesis — the parameter table (same-quantity check) BEFORE the cross-source claim

The two trials share **analytes** but test **different contrasts**, so this is a **type-A/F composite**,
not a head-to-head. The analyte-level comparison is valid; the contrast-level one is not.

| Matched quantity | Roussell (BOLD) | Bergeron (APPROACH) | Same quantity? |
|---|---|---|---|
| LDL-C | Friedewald-calculated, mmol/L | Friedewald-calculated, mmol/L | **Yes** — same measure |
| apoB | mass, mg/dL (immunoturbidimetric) | mass, g/L (immunoturbidimetric) | **Yes** — same analyte, different units (92.8 mg/dL = 0.928 g/L) |
| LDL particles | not measured | ion-mobility subfractions (large / small+medium) | **No** — Bergeron only |
| The CONTRAST tested | *amount* of lean beef (20->153 g/d), background SFA cut 12->6% E | *source* of protein (red/white/nonmeat) x SFA level (7 vs 14% E) | **No** — different independent variables |

**Because the analytes match but the contrasts do not, the synthesis is compositional, not a
convergence of the same estimate.** What each supplies:

- **Type-A (composite claim, in neither source alone):** *within a low-SFA background the atherogenic-
  lipoprotein signal is governed by the background SFA load and by meat-vs-plant, not by beef amount or
  red-vs-white color.* Roussell supplies *beef amount is irrelevant once SFA is fixed* (flat across
  20->153 g/d); Bergeron supplies *SFA is a main effect and red=white* (additive SFA effect, no color
  effect). Neither states the joint claim.
  [inferred from @roussell2012bold; @bergeron2019]
- **Type-F (Bergeron bounds/refines Roussell):** Roussell's *lean beef is fine* rests on a high-SFA,
  no-plant comparator; Bergeron adds the plant arm (meat > nonmeat on LDL-C/apoB) and the particle data
  (the rise is large-LDL, weakly atherogenic), so the composite is more informative than Roussell's
  reading alone. [inferred from @bergeron2019]
- **NOT scored type-E.** The two do share one compatible sub-finding — lean red meat within low SFA
  does not raise LDL-C versus a lean *animal* comparator (Roussell: BOLD=DASH; Bergeron: red=white) —
  but they are different labs (Kris-Etherton/Penn State vs Krauss/CHORI, no shared authors) testing
  *different referents*, so this is compositional agreement, not the same estimate reached by two
  independent routes. Do not launder it as independent-backing robustness.
  [inferred from @roussell2012bold; @bergeron2019]
- **Guasch-Ferré 2019 is type-F + type-C on this page, and explicitly NOT type-E of it.** *Type-F* —
  the MA POOLS Roussell (BOLD) and Hill 2015 among its 36 trials, so its 0-500 g/d dose-response null
  refines the page's single-trial «flat across beef dose» to a pooled null, and its lean-vs-nonlean
  subgroup refines the lean-cuts caveat; a source that contains the incumbent's own data is a
  refinement, never an independent route. *Type-C* — it names the substitution frame as the reason the
  red-meat lipid question is ill-posed unbounded (the all-combined near-null is opposite-signed effects
  averaged away). The compatible meat-worse-than-plant finding it shares with Bergeron is NOT stamped
  `[E-independent]`: Guasch-Ferré is Harvard/Hu-Willett, Bergeron is Krauss/CHORI (different labs), but
  the estimates are not identical and the meat>plant claim is broadly established, so this is
  shared-conclusion, not two non-obvious independent routes converging — the independence bar is not
  met. [inferred from @guaschferre2019redmeat]
- **O'Connor 2017 is type-F on this page, and the same-quantity check is what keeps it from being echo.**
  Below is the matched-parameter table for the O'Connor-vs-Guasch-Ferré cross-source claim.

  | Matched quantity | O'Connor 2017 | Guasch-Ferré 2019 | Same quantity? |
  |---|---|---|---|
  | Pooled red-meat lipid effect | >=0.5 vs <0.5 serv/d, ALL comparators pooled | all-combined pool AND continuous g/d | **Partly** — O'Connor's threshold contrast ≈ G-F's "all-combined" pool (both NULL); NEITHER equals G-F's substitute-stratified estimates |
  | Trial constituency | 24 studies to May 2016; EXCLUDES Roussell BOLD / Hill | 36 RCTs to Jul 2017; INCLUDES Roussell BOLD / Hill | **No** — overlapping but neither subsumes the other |
  | Dose-response form | threshold search + post-hoc serving bands; null 0-500 g/d | continuous slope; null 0-500 g/d | **Yes on the null**, different parameterization |
  | Substitute-specific effect | not estimated (pooled) | stratified (plant / fish / poultry / carb) | **No** — Guasch-Ferré only |
  | Lean vs nonlean | not analyzed | analyzed | **No** — Guasch-Ferré only |

  So O'Connor's genuine delta is the **guideline-anchored >=0.5 serv/d threshold contrast on a
  largely-disjoint, BOLD-excluding trial set** — a distinct quantity reaching the same pooled dose-null,
  not a re-pool. Shared authors (O'Connor, Campbell) bar `[E-independent]`; it is type-F
  (independent-constituency refinement) plus a type-C-flavoured worked instance of the comparator-blind
  pooling artifact.
  [inferred from @oconnor2017redmeat; @guaschferre2019redmeat]

</div>

## Is the food category doing any work here?

This is a clean worked instance for [[Is the Food Category Doing Any Work]]: once SFA and total protein
are matched, ***red meat* as a lipid category dissolves** — the beef amount does not separate diets
(Roussell), and red does not separate from white (Bergeron). What *does* separate is (i) the background
SFA load and (ii) meat versus plant protein. The category carrying the lipid signal is not *red meat*;
it is *animal protein plus its saturated-fat travelling companions*. This bounds
[[Saturated Fat Intake and Replacement]] on the specific case of lean red meat and refines the
leaner-cut reasoning by attaching an actual apoB/LDL-C number to it.
[inferred from @roussell2012bold; @bergeron2019]

## What this does NOT license, and the gaps (type-G)

- **Surrogate only — no hard-endpoint claim.** Neither trial measured ASCVD events; apoB's transmission
  to ASCVD is an evidenced claim held elsewhere ([[LDL ApoB and Cumulative Exposure]],
  [[Surrogate Outcomes]]) — link it, do not assert the event benefit here. Bergeron itself calls for
  «clinical CVD outcomes in individuals with hyperlipidemia».
  [@bergeron2019]
  **G-gap:** no lean-red-meat feeding trial with a patient-important CVD endpoint or a
  morbidity-trajectory outcome. `type-G`
- **Lean cuts only.** Both trials used lean cuts matched for SFA, so nothing here transports to
  higher-fat red meat — Bergeron: «we cannot extrapolate our findings to the lipid and lipoprotein
  effects of higher-fat red meat products».
  [@bergeron2019] `type-G`
- **How much of the plant-arm benefit is the plant, versus the removal of meat**, is unresolved
  (Bergeron flags plant phytochemicals/fibre vs meat removal as unseparated). `type-G`
- **Industry funding on both sides** (Beef Checkoff; a Dairy Management grant + an ion-mobility patent)
  — a symmetric-standards bias watch, not a dismissal; the controlled-feeding designs and the fact that
  the two funders' interests point in *opposite* directions yet the lipid findings agree, blunts the
  concern.

**Net decision-change:** for a reasonably healthy or hypercholesterolemic person already eating a
low-SFA pattern, swapping in lean red meat (or choosing red vs white) is close to lipid-neutral at the
surrogate level; the levers that move LDL-C/apoB are cutting background SFA and shifting protein from
meat toward plant sources — and even those move mostly large LDL, so the surrogate likely overstates
the hard-outcome size. Guasch-Ferré sharpens the substitution framing: the surrogate benefit of
*reducing* red meat exists chiefly when the replacement is high-quality plant protein (LDL-C WMD +0.198
mmol/L vs plant); replacing it with fish or refined carbohydrate does not improve — and on some analytes
worsens — the lipid profile, so *eat less red meat* carries a decision only once the substitute is named.
The magnitude is small and event evidence is absent, hence `confidence: medium`.
[inferred from @guaschferre2019redmeat]

## References

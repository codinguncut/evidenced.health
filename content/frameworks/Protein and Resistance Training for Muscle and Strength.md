---
type: framework
question: Does protein supplementation add to resistance training for muscle and strength, how much protein, and for whom?
aliases: [Protein Supplementation, Protein and Resistance Training, Protein Intake Muscle, 1.6 g/kg Protein, Protein Break Point, Muscle Protein]
authors: [Morton, Robert W; Murphy, Kevin T; McKellar, Sean R; Phillips, Stuart M; Lowe, Dylan A; Weiss, Ethan J; Food and Agriculture Organization of the United Nations (org); Cruz-Jentoft, Alfonso J; de Santana, Felipe M; Tagawa, Ryoichi; Miyachi, Motohiko]
sources: [Morton - Protein Supplementation and Resistance Training 2018, Lowe - Time-Restricted Eating TREAT 2020, FAO - Dietary Protein Quality Evaluation 2013, Cruz-Jentoft - Sarcopenia European Consensus EWGSOP2 2019, de Santana - Low Muscle Mass Mortality 2021, Tagawa - Protein Muscle Mass Dose-Response Meta-Analysis 2020]
cluster: muscle
confidence: medium
relationships:
  related_to:
    - Resistance Training Prescription - Load Sets and Frequency
    - Muscle-Strengthening Activity and Mortality
    - Physical Activity Dose and Mortality
    - Measuring and Raising Cardiorespiratory Fitness
    - Surrogate Outcomes
    - Protein Quality and the DIAAS Score
    - Testosterone Adiposity and Muscle
    - The Estimate-to-Action Gap
    - Dietary Protein and Mortality
    - Low Muscle Mass and Mortality
    - GLP-1 and Lean Mass
    - Protein Intake During Energy Restriction
    - Protein Intake and Kidney Function
    - The Underivable Optimum
created: 2026-07-29
updated: 2026-08-30
self_critiqued: 2026-08-30
---

This is the **adaptation** side of the resistance-training lever, and it is the evidence Challenge #10
flagged as missing when it separated *training-for-strength-gain* from *training-for-mortality*
([[Muscle-Strengthening Activity and Mortality]]). Two things distinguish it: it is **RCT-grade** (unlike
the observational mortality data), but it is on **surrogates** (muscle mass and strength), not
patient-important outcomes. The headline: **resistance training is the driver; protein is a modest
adjunct, and only up to about 1.6 g/kg/day.**


[inferred from @morton2018]
## Protein augments resistance-training gains — modestly

From «Data from 49 studies with 1863 participants» (RCTs, «RET ≥6 weeks»), protein supplementation added
to resistance training, versus placebo/no-supplement:

| Outcome | Added effect of protein (MD) |
|---|---|
| **1RM strength** | «2.49 kg (0.64, 4.33)» |
| **Fat-free (lean) mass** | «0.30 kg (0.09, 0.52)» |
| Muscle fibre CSA | «310 µm2 (51, 570)» |
| Mid-femur muscle CSA | «7.2 mm2 (0.20, 14.30)» |
| Fat mass | «−0.41 kg (−0.70,– 0.13)» |
| Maximal voluntary contraction | «SMD: 0.04 (-0.09, 0.16)» — **no effect** |
| Total body mass | «0.11 kg (−0.23, 0.46)» — **no effect** |

**Read the magnitudes before the significance.** +2.5 kg on a 1RM and +0.3 kg of lean mass over weeks of
training are *small* increments on top of what the training itself delivers — protein does not build
muscle, it lets the training build slightly more. (And it did not move total body mass or maximal
voluntary contraction at all.)


[@morton2018]
## How much protein — a plateau near 1.6 g/kg/day, with real uncertainty

The decision-relevant number is a dose-response knee: «Protein supplementation beyond total protein
intakes of 1.62 g/kg/day resulted in no further RET-induced gains in FFM». This is a
**mechanism-supported but statistically non-significant plateau** (the break-point fit was
non-significant — detailed below) — «muscle protein synthesis (MPS)... shows a saturable dose-response
relationship», so above the point where synthesis saturates, extra protein has nothing to add. The
acute-MPS saturation is a real mechanism; it is the *chronic-FFM break-point* operationalizing it as
"1.62" that is not statistically established.

**But hold the number loosely** (the lesson from Challenge #10): the break point is «1.62 (1.03, 2.20)»
g/kg/day — the confidence interval runs from \~1.0 to \~2.2, so "\~1.6" is a central estimate with wide
uncertainty, not a precise threshold. And the baseline matters: control groups were already eating «pre:
1.4±0.3» g/kg/day, so the useful move is *reaching* roughly 1.6, not exceeding it — going higher buys no
further lean mass.

*Two different objects, not a contradiction:* *reach \~1.6, don't exceed* describes the **plateau of the
mean FFM effect within the observed range**; the *bias up to 1.8-2.2 for hypertrophy* move (Decision
relevance, below) is a **decision under the wide CI** — hedging against undershoot where the knee's true
location is uncertain — not a claim that more protein raises the *mean* effect.

The acute mechanism is real — a saturable MPS dose-response is the kind of curve where a knee is
*expected*, and a saturating supply (protein → synthesis) plateaus where a risk-reduction curve need
not. But the *existence* of the chronic-FFM knee, not merely its location, is statistically uncertain,
which downgrades this from a *located* knee to one *asserted on mechanism*. On the daily-intake axis
Morton's biphasic fit «explained more variation than a linear regression» but «is presented as a
segmental regression despite not being statistically significant (p=0.079»
[@morton2018], with only R2=0.19;
the Figure 5 caption labels the break point «break point=1.62 g protein/kg/day, p=0.079»
[@morton2018]. On the
*baseline*-intake axis the data went the *other* way: «linear regressions explained significantly more
variance than biphasic regressions» in both young and old participants
[@morton2018] — a straight
(monotone) line fit *significantly better* than a knee. By the wiki's own dose-response rule — the
burden is on whoever asserts a knee to *locate* one, and a shape equally consistent with monotone has no
diagnostic value — this plateau is therefore held as **weak**: mechanism-supported, but not a
statistically-established knee, and *not* clearly distinct from the monotone nutrition-reduction curves.
Do not read "1.62" as a demonstrated threshold.


**The denominator is TOTAL body mass — and the number is undefined until the kg is named.** Morton's
break-point regressed the change in fat-free mass against «baseline protein intake (g/kg/day)»
[@morton2018]: the *intake* is
grams per kg of scale-weighed body mass, while «total body mass (TBM; measured by any scale)» and FFM/FM
are the *outcomes*, not the denominator
[@morton2018]. So "1.62 g/kg"
means 1.62 g per kg of *total* body weight, not per kg of lean mass — the page's \~1.6 target is
g/kg-**total**. This matters only where the two diverge: in a lean person total and lean mass differ
\~1.2x, so the denominator barely moves the gram target; in an obese person they diverge \~2x, so
"1.62 g/kg" is not even well-defined until the kg is named.


**Whom the number was measured on — the transportability envelope.** The 49 RCTs (17 countries,
1962-2016) required adults who were «healthy and not energy-restricted» and «performing RET at least
twice per week»; among them «10 studies in resistance-trained participants and 14 study groups in
exclusively female participants», and «a total of 1863 participants (mean±SD; 35±20 years)»
[@morton2018]. **No baseline BMI,
body-fat %, or body weight appears in the held text** for the pooled sample
[searched: BMI / body-mass-index / body-fat / adiposity / obese / waist / kg-m2 across the
Participant-characteristics + Methods/Inclusion sections of chunk 01 — zero hits; the two BMI hits in
the source sit in chunk 03 competing-interests/references, not the participant description]. This is an
absence from the MAIN TEXT, not a demonstrated absence from the paper: Morton reports «Participant
details and outcomes are presented elsewhere (see online supplementary table 1»
[@morton2018], and that
supplementary table is not held — participant body composition may be characterized there. And the
intakes actually sampled were narrow but ran *higher* than the CI: the protein group's relative intake
went from «pre: 1.4±0.4, post: 1.8±0.7» g/kg/day
[@morton2018], so with a post-mean
of 1.8 many study arms exceeded \~2.2. The break-point CI (1.03-2.20, above) is the interval on the
knee's **location**, *not* the x-axis span of the data — the knee and its CI sit *inside* the sampled
intakes, and the flat segment above 1.62 was fit *from* the higher arms. (Superseded 2026-08-07: an
earlier version here read 1.03-2.20 as the sampled range; that conflated the location-CI with the data
span.)

**The observed-range caveat governs the whole curve.** The whole analysis lives in a fairly narrow band
of total-protein intakes (post-mean 1.8±0.7 g/kg-total) in a non-energy-restricted, non-obese sample, so
read the shape as described *within* that band, not as a universal dose-response. The lower tail (below
\~1.0) is barely sampled; the upper arms extend above \~2.2 but thin out, so the *plateau* above 1.62 rests
on relatively few high-intake arms.

**The obese are OFF-SUPPORT — an insufficient-evidence gap, NOT a *dose on lean mass* finding.** Two
hard facts: (a) Morton reports no obese stratum and the held text leaves adiposity uncharacterized —
«healthy and not energy-restricted» was required, and the energy-restricted trials where the obese
typically concentrate were excluded
[@morton2018]; (b) as above, the
g/kg denominator is total body mass, and total-vs-lean diverges \~2x in the obese, so "1.62 g/kg" is
undefined for them until the kg is named. It is tempting to close this by *dose on lean mass instead*,
but that move is **mechanism-only, discounted, and does not settle its own sign**: the obese often
carry *more* absolute lean mass (which pushes the gram target *up*, not down), while obesity brings
anabolic resistance (plausibly *raising* the per-lean-kg requirement). Net-effect-not-intended: do
*not* conclude *obese -> lower target*. The honest object for the obese is a **gap** — (i) do not
transport 1.62 g/kg-total to them; (ii) specify which denominator any target uses; (iii) the right
obese target is *unobserved* here.


**Consolidated GAP — a defensible target by stratum, on a named basis (a soft knee is not guidance)
`[2026-08-28]`.** The number that would change a decision — g/kg, *on which denominator*, for whom — is
unresolved wherever the person departs from Morton's lean/normal-BMI trained sample: **non-athletes, the
obese, older adults, and anyone in a caloric deficit**. Two reasons it is a gap and not a finding: 1.62 is
the CI-midpoint of a *non-significant* knee (p=0.079), so it is not robust guidance even in-sample; and the
strata that matter are off-support. What is held is stratum-scattered and mostly answers *does protein help*,
not *what target* — Bauer PROT-AGE, Coelho-Junior, Moore (older adults); Refalo, Kim, Wycherley (deficit);
Morton/Tagawa (trained adults). The **obese** target on a named basis is the thinnest cell, and a gold SR+MA
aimed squarely at it is the acquisition that would move this — reported to give a protein amount for preserving
muscle during weight loss in overweight/obesity; held as a candidate, not a finding, until ingested.
`confidence: low`


## The independent second opinion — Tagawa's 1.3 g/kg knee (a different quantity, not a contradiction)

Tagawa 2020 is a **non-Phillips-lineage** dose-response MA — a Japanese group (Miyachi lab), **zero
author overlap** with Morton — pooling «138» RT + non-RT trials / «5866» individuals (\~2-3x Morton's 49).
It lands a diminishing-returns knee at **1.3 g/kg BW/d**, and the first instinct — *1.3 contradicts 1.62*
— is wrong. The parameter table shows why they are **not the same quantity**:

**Independence is partial, not clean — disclose it before leaning on it.** Zero author overlap is
necessary, not sufficient: Tagawa *cites* Morton (ref 14) as the finding it is «consistent with», and its
138-trial pool re-analyzes some of Morton's own RT constituent trials. So for the **RT knee** Tagawa is
**not independent evidence** (shared trials defeat independence exactly as shared authors do); the genuine
independence is the **without-RT leg**, built on non-RT trials Morton's RT-only pool excludes. Hence
F-refinement, not a clean type-E backing. [inferred from @tagawa2020]

| Parameter | Morton 2018 | Tagawa 2020 | Same quantity? |
|---|---|---|---|
| Knee location | «break point=1.62 g protein/kg/day, p=0.079» (chunk 02) | «1.3 g/ kg BW/d» slope-drop (chunk 01) | see rows below |
| Outcome | RET-induced FFM | LBM change | \~yes (LBM≈FFM) |
| Population | RT adults, «performing RET at least twice per week» (chunk 01) | «diverse population», WITH **or without** RT (chunk 01) | **NO** — Morton RT-only |
| Estimator | biphasic/segmented break-point (non-sig, p=0.079) | multivariate-adjusted spline slope-drop | **NO** — different method |
| Shape above knee | plateau: «no further RET-induced gains in FFM» (chunk 01) | overall spline «over a wide range of doses (from 0.5 to 3.5 g/kg BW/d) was positively correlated with an increase in LBM» (no plateau); in model 2, above 1.3 with-RT «continued to rise», without-RT «declined» (chunk 01) | **NO** — Tagawa's overall curve has no plateau, and its RT arm keeps rising |

**Fourth column is NO -> a refinement/distinction, not a tension.** The two measure diminishing returns
in *different populations by different estimators*, so their numbers are not rival estimates of one knee.
What Tagawa adds is decisive for the *hold-it-loosely* reading: [@tagawa2020]

- **The knee is population-dependent, and Tagawa's RT arm does NOT plateau at 1.3.** «In model 2 ...
  after a total protein in- take of 1.3 g/kg BW/d was exceeded, the effect on LBM change continued to
  rise with resistance training and declined without resistance training.» So the post-1.3 *decline* is
  the **non-RT** subgroup; the **RT** subgroup keeps gaining above 1.3 — directionally *consistent* with
  a higher RT knee like Morton's 1.62, not against it. The one place a genuine clash *could* live — the RT
  population above 1.62, where Morton says plateau and Tagawa's RT arm says still-rising — is defused only
  because Morton's plateau is itself non-significant (p=0.079). The inflection is thus population-dependent
  (general/non-RT \~1.3, RT higher/absent) -> the target is a **wide, population-dependent region
  (\~1.3-1.6), not a point** -> [[The Underivable Optimum]].
- **The curve is monotone-positive to 3.5, never flat.** «total protein intake over a wide range of
  doses (from 0.5 to 3.5 g/kg BW/d) was positively correlated with an increase in LBM» — the slope drops
  at 1.3 («0.39 kg (95%CI, 0.36- 0.41) and 0.12 kg (95%CI, 0.11-0.14) per 0.1 g/kg BW/d increment ...
  below and above 1.3 g/ kg BW/d») but stays positive. This matches Morton's *significantly-better linear
  fit on the baseline axis* and Refalo's monotone-wins result: no lineage locates a true plateau.
- **Protein raises LBM even WITHOUT resistance training — new to the fabric.** «this meta-analysis demon-
  strates for the first time that protein supplementation is significantly effective without resistance
  training». RT is **additive, not synergistic** («no syner- gistic effects, but it may have a simple
  additive effect»; Table 2 with-RT 0.48 vs without-RT 0.53 kg). This *refines* the page's headline: RT
  is the driver of *hypertrophy*, but protein alone still adds \~0.5 kg LBM — relevant where RT is not on
  the table (frail/elderly/dysphagia). Even «less than 0.3 g/kg BW/d (0.17 g/kg BW/d, on average) was
  suffi- cient to significantly increase LBM».

**Weighting caveat (symmetric standards).** Tagawa is gold-tier (large SR-MA, spline dose-response) but
5 of 7 authors incl. the first author «are employees of Meiji Co, Ltd» (a protein/dairy company),
«No external funds supported this work.», and blinding-related bias was high (whole-food protein cannot
be double-blinded — same design ceiling Morton hits). With sponsor-employed authors making the analysis
choices on an unblindable exposure, the commercial interest discounts the framing **and cautions the
magnitude** (the direction is held by Morton/Refalo independently; the effect *size* is the exposed
parameter). [@tagawa2020]


[@morton2018]
## Who it helps more, and who less

- **Reduced with age:** «reduced with increasing age (−0.01 kg (−0.02,–0.00), p=0.002)» — older adults
  gain less lean mass from the *supplement* (their training still works; the added protein does less).
- **Greater in the already-trained:** «more effective in resistance-trained individuals (0.75 kg (0.09,
  1.40), p=0.03)» — the supplement's edge grows once someone is past the untrained-beginner phase.


[@morton2018]
## The surrogate boundary — this is the mechanism, not the outcome

Muscle mass and strength are **surrogates** ([[Surrogate Outcomes]]), not patient-important endpoints.
Morton [@morton2018] is the *mechanism* half of the resistance-training story — RT (plus adequate protein) builds
muscle, RCT-grade — while [[Muscle-Strengthening Activity and Mortality]] is the *outcome* half — strength
activity associates with lower mortality, observational-grade. **Neither shows that protein
supplementation reduces mortality**; the composite is "RT builds muscle (proven) and strength associates
with living longer (associational)", with protein a small lever on the first half only. Muscle
mass/strength do matter directly for **function and sarcopenia**, which are on the outcome menu — so the
surrogate is not worthless, it is just not the mortality endpoint.

- **The mortality endpoint IS held now, but for a different decision — protein *source*, not the muscle
  *amount*.** [[Dietary Protein and Mortality]] (Naghshi 2020, observational) finds plant-protein intake
  associates with lower all-cause/CVD mortality while animal protein is null and *total* amount does
  little. That is a **substitution** decision (shift sources plant-ward), orthogonal to this page's
  \~1.6 g/kg *quantity* decision — you satisfy both by reaching the amount and biasing the sources. The
  two protein questions are distinct, not two facets of one.

- **Among the two surrogates, strength beats mass — so read this page's strength effect (+2.49 kg 1RM) as
  the more outcome-relevant one.** The sarcopenia case definition demotes muscle *mass* precisely because
  «strength is better than mass in predicting adverse outcomes»
  [@cruzjentoft2019], and EWGSOP2 names
  inadequate protein/energy intake as a *secondary-sarcopenia cause* — direct support for this page's
  lever from the geriatric side -> [[Sarcopenia Definition and Diagnosis]]. Protein's +0.30 kg lean-mass
  effect moves the *confirmatory* parameter; its +2.49 kg strength effect moves the *primary* one.

- **But the *mass* surrogate now has its own hard-outcome link — partly cashing the boundary.** Low muscle
  mass independently predicts all-cause mortality (de Santana SR-MA: ASMI SMD −0.18, «cannot be completely
  explained by differences in muscle strength») [@santana2021]
  -> [[Low Muscle Mass and Mortality]]. So the *quantity* this page's protein lever moves is not only a proxy
  for strength — it tracks mortality on its own. **The caveat is the same predictor-vs-target line:** that
  low mass *predicts* death (observational) is not that *raising* mass via protein/RT *reduces* death (no
  RCT). The composite tightens to "RT+protein raises muscle mass (proven surrogate); low mass predicts
  mortality (observational); raising mass -> lower mortality (unproven)".


## The hormonal alternative lever — and why it does not displace this one

Testosterone therapy is the other anabolic lever aimed at the same surrogates (lean mass, strength), and
the comparison sharpens why *this* page's lever is preferred: TRT raises lean mass +1.6 to 3.6 kg but its
strength/function gains are modest and, in the TRAVERSE RCT, it **increased fractures (HR 1.43)** and added
AFib/AKI/PE while showing no mortality benefit -> [[Testosterone Adiposity and Muscle]]. Resistance
training is the proven driver of strength here and carries none of those harms; in an obese man, losing fat
also *raises testosterone naturally* (secondary hypogonadism is reversible). So the hormone is a narrow
option for confirmed hypogonadism, not a substitute for the training. (No head-to-head RT-vs-TRT trial is
held — this is an evidence-weighting judgment, not a trial result.)


## Decision relevance

- **If you do resistance training, aim for roughly 1.6 g/kg/day of total protein** — around there the
  lean-mass benefit appears to flatten (a mechanism-supported but statistically non-significant plateau,
  so read it as a region — see below), and more is unlikely to add lean mass. Most people who already
  eat \~1.4 g/kg are close, so the move is topping up, not loading.
  - **Treat 1.6 as a REGION, not a point, and for a hypertrophy objective bias UP (\~1.8-2.2 g/kg/day).**
    The break-point is 1.62 g/kg/day with a *wide* 95% CI of 1.03-2.20, so *"1.6"* is a central estimate,
    not a threshold — reading it as a precise target is false precision. The direction of the bias follows
    *bias away from the costly tail* -> [[The Estimate-to-Action Gap]]: for someone whose objective is
    muscle, the plateau's location is uncertain and *undershoot forfeits the objective* (the costly tail
    is on the LOW side), while overshoot is low-harm for **healthy** kidneys (higher protein does not
    change GFR in adults without CKD, now source-backed -> [[Protein Intake and Kidney Function]]) — so aim the upper end of the CI
    plus a margin. The up-bias has a ceiling (\~2.0-2.2 is well-supported; beyond it the evidence thins and
    the practical costs of displacement, satiety and expense rise), and it shifts *higher* in an energy
    deficit or older age (to protect lean mass). The one stratum flip is **pre-existing renal disease**
    (eGFR <30 / CKD), where high protein is a contraindication, not a cheap overshoot
    -> [[Protein Intake and Kidney Function]]. — the CI is Morton's
    (extracted above); the region-not-point reading and the directional bias are the wiki's, via
    [[The Estimate-to-Action Gap]].
  - **The target is protein *quantity*, and it silently assumes quality.** Morton's trials were mostly
    high-quality supplemental protein (whey). Hitting \~1.6 g/kg from low-DIAAS plant sources (peas 64,
    wheat 40 vs milk 122) delivers fewer digestible indispensable amino acids per gram, so it needs more  [@fao2013]
    grams — hence more food mass — or deliberate complementation to be equivalent
    -> [[Protein Quality and the DIAAS Score]]. This is a source caveat on the number, not a change to it.
- **The training is the lever; protein is the adjunct.** Do not expect protein alone (without the
  training) to build muscle — every effect here is *during* resistance training. **How to program that
  training** — load for strength, volume for hypertrophy, the minimal effective dose, and the same
  surrogate-only caveat — is [[Resistance Training Prescription - Load Sets and Frequency]] (Currier NMA).
  Note the two are **not independent evidence**: Currier and Morton share Stuart Phillips' McMaster lab,
  so treat them as one lineage's two levers on the same adaptation, not as corroborating each other.
  [inferred from @morton2018]
- **Creatine is the *second* ergogenic adjunct, through a different pathway — additive, not redundant.**
  Where protein feeds muscle-protein synthesis, creatine buffers ATP resynthesis (the phosphocreatine
  energy system), so it augments the *same* resistance-training surrogates (strength, lean mass) by a
  distinct mechanism and stacks with protein rather than substituting for it — including in older adults,
  where creatine + RT beat RT alone on muscle mass, strength and functional capacity
  -> [[Creatine Supplementation]]. Same boundary as this page: RT is the driver, the supplement is a small
  adjunct on surrogates, and creatine monohydrate (3-5 g/day) is the cheap, best-evidenced form.

- **Age and training status modulate it**, not whether to do it: a 46-year-old sits near the age boundary
  (Morton splits at 45) where the supplement's edge is modestly reduced but the training's is not.
- **The over-65 stratum has its own target — a different decision, not a contradiction.** This page's
  \~1.6 g/kg/d is the *hypertrophy-during-RT* number for healthy adults; the older-adult *maintenance*
  target is 1.0-1.2 g/kg/d (1.2-1.5 in illness), set to overcome [[Anabolic Resistance]] with a raised
  per-meal threshold (\~25-30 g protein / 2.5-2.8 g leucine per meal) -> [[Protein Intake for Older Adults]].
  Same unit (g/kg/d), different objective and population — a ladder by goal, so an older adult *training
  for hypertrophy* aims high while one merely *maintaining* aims 1.0-1.2. The per-meal figures are a
  different denominator again (the commensurability table lives on that page). — the
  distinction and the ladder reading are the wiki's; the 1.6 is Morton (above), the 1.0-1.2 is Bauer
  (extracted on the linked page).
  - **The young 1.62 does NOT transport UP to older adults — it is a weak, young-population anchor.**
    The break-point is statistically non-significant even in the largely-young pooled sample (p=0.079,
    above), and the supplement's own effect is «reduced with increasing age (−0.01 kg (−0.02,–0.00),
    p=0.002)» [@morton2018] — the
    number was measured where the effect is *strongest* and decays with age. So for an older adult \~1.6
    is a **floor, not a ceiling**: [[Anabolic Resistance]] means old muscle needs at least as much,
    plausibly *more per anabolic stimulus*, so a non-significant young knee is no reason to aim low in
    the old. The older-stratum target proper comes from a different evidence base (PROT-AGE 1.0-1.2 g/kg
    maintenance, 1.2-1.5 in illness, plus a raised \~25-30 g per-meal threshold to clear anabolic
    resistance) -> [[Protein Intake for Older Adults]]. The honest object is a **direction + a floor,
    not a point optimum** -> [[The Underivable Optimum]].
- ***From what age is resistance training essential rather than nice-to-have?*** is the wrong axis — it is
  a lifelong lever with no on/off age.** Its mortality/CVD benefit runs across adulthood at a small dose
  ([[Muscle-Strengthening Activity and Mortality]]); what rises with age is its *priority*, because muscle
  and strength decline from midlife and RT is the primary lever preserving function, balance and
  independence — outcomes that themselves become critical with age
  ([[Lifetime Benefit - The Frame for Younger Adults]]). So "essential" tracks **falling muscle/function
  status, not a birthday**: RT's rank rises continuously with sarcopenia risk rather than switching on at
  an age.
- **During weight loss, adequate protein + resistance training is how you keep lean mass** while losing
  fat (the fat-mass fell and lean mass rose here) — the practical reason it belongs in a weight-loss
  program, not just a strength one.
  - **The deficit RAISES the target — a different-stratum decision, now held on its own page.** In an
    energy deficit the requirement rises from this page's \~1.6 g/kgBM (energy balance) to \~1.9 g/kgBM /
    \~2.5 g/kgFFM (the ES-zero crossing) for FFM *retention*, up to 3.2/4.2 for gain
    -> [[Protein Intake During Energy Restriction]] (Refalo 2025 meta-regression, nonobese RT adults;
    authors' own word EXPLORATORY, small effect vs the RT stimulus). Same unit, different energy state
    and construct (a plateau of the *build* effect here vs a loss-to-hold crossing there) — a stratum
    ladder, not a contradiction. — the numbers are Refalo's (extracted on the linked page);
    the ladder reading is the wiki's.
  - **The curve SHAPE corroborates independently — the knee stays unestablished across two labs and two
    populations.** Refalo (Deakin/AUT; energy *deficit*) found a linear model beat quadratic/cubic (97%
    prob monotone-positive), matching Morton's own non-significant 1.62 knee and the *significantly*
    better linear fit on Morton's baseline-intake axis. Reached by different data, different labs, no
    shared author -> a genuine independent-shape convergence (`[E-independent]`): the burden-of-proof
    dose-response rule holds here too, no located knee -> [[The Underivable Optimum]]. **But the
    per-FFM-denominator point is NOT independent** — Refalo's per-FFM finding tests *Helms 2014's* own
    speculation, and Helms co-authors Refalo, so that leg is one lineage, not corroboration.
    [inferred from @morton2018; @refalo2025]
  - **A worked failure of exactly this:** in the TREAT time-restricted-eating trial, a self-selected
    16:8 window (no protein guidance) lost weight that was «approximately 65% ... lean mass» vs a normal
    20-30% — the authors suggest (protein intake was not measured) it may reflect a short ad-libitum
    window cutting protein intake (protein is eaten mostly at meals), a «caution for patient populations at risk for sarcopenia»
    -> [[Time-Restricted Eating]]. The mitigation is this page's number: keep meals/protein up inside
    the window. [@lowe2020]

## Limits

- **Surrogates, not outcomes** — no mortality/function endpoint; RCT-grade for muscle/strength only.
- **Supplementation, not total dietary protein per se** — the trials add protein on top of a diet; whole-
  food vs supplement was mostly supplement (largely whey), so this is not a food-quality (DIAAS) claim
  -> [[Protein Quality and the DIAAS Score]] holds the source-quality dimension.
- **The plateau CI is wide** (1.03-2.20); the fibre-CSA effect is fragile; healthy adults only.
- **The number is g/kg TOTAL body mass, over a narrow sampled intake band (\~1.0-2.2 g/kg-total), in a
  sample with no reported baseline body composition.** The obese are off-support (no obese data), so
  neither the target nor its denominator transports to them — an insufficient-evidence gap, not a
  lower-target finding (see *How much protein*).
- One meta-analysis; the moderator model overall explained little variance, so age/training effects are
  subgroup signals, not a full explanation.


[inferred from @morton2018]

## References

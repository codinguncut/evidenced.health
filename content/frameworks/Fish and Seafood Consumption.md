---
type: framework
question: For whom, at what intake, and which species does eating fish/seafood change a patient-important outcome — and where does the methylmercury risk flip the balance?
aliases: [Fish, Seafood, Oily Fish, Fatty Fish, EPA and DHA from Seafood, Fish and Neurodevelopment, Methylmercury, Fish Consumption]
authors: [European Food Safety Authority (org); Jayedi, Ahmad; Shab-Bidar, Sakineh; Wei, Bao-Zhen; Xu, Wei; Bechthold, Angela; Schwingshackl, Lukas; Lombardi, Marco; Chiabrando, Juan Guido]
sources: [EFSA - Seafood Benefits vs Methylmercury Risks 2014, Jayedi - Fish Consumption Chronic Disease Umbrella 2020, Wei - Omega-3 Dementia Cognitive Decline Cohort Review 2023, Schwingshackl - Food Groups All-Cause Mortality Meta-Analysis 2017, Bechthold - Food Groups CHD Stroke Heart Failure Meta-Analysis 2019, Schwingshackl - Food Groups Type 2 Diabetes Meta-Analysis 2017, Lombardi - Omega-3 Fatty Acids Cardiovascular Outcomes Network Meta-Analysis 2020]
cluster: fish-seafood
nucleus: true
confidence: medium
self_critiqued: 2026-09-01
relationships:
  related_to:
    - Is the Food Category Doing Any Work
    - The Weighting Problem - Why Population Guidance Is Ill-Posed and Individual Advice Is Not
    - Surrogate Outcomes
    - Vitamin and Mineral Supplements for Disease Prevention
    - Deficiency Repletion vs Enhancement
    - Measurement Error in Dietary Assessment
    - The U-Shaped Association Artifact
    - The Observational-Trial Discordance
    - Dementia Prevention and Modifiable Risk Factors
    - Multidomain Lifestyle Intervention and Cognitive Decline
created: 2026-08-05
updated: 2026-09-02
---

The `fish-seafood` nucleus. Fish is the rare exposure a guidance body **priced on both sides with
numbers** — a benefit (EPA/DHA -> neurodevelopment and coronary mortality) weighed against a risk
(methylmercury -> fetal neurotoxicity) — and found the balance **flips by stratum and by species**.
EFSA 2014 is the benefit arm of a two-part benefit-risk analysis (the methylmercury toxicity arm is
the separate CONTAM 2012 opinion, cited here for the tolerable intake).
[inferred from @efsaseafood2014]

## The bottom line — where the benefit sits

- **About 1-2 servings/week, and up to 3-4/week in pregnancy**, is associated with better outcomes vs
  no seafood; **the benefit is already present at \~1 serving/week**, and **no additional benefit is
  expected above \~4-5 servings/week** — on *both* neurodevelopment and CHD mortality.
  [@efsaseafood2014]
- **This is a plateau, not a monotone curve** — a located knee for a food exposure (contrast the
  monotone fibre and sodium curves -> [[Dietary Fibre and Health]], [[Sodium Intake and Blood Pressure]]). It is outcome-robust: the same *«no benefit might be expected at higher intakes»* holds for the
  child-IQ and the adult-CHD arms.
- **A serving is \~100-150 g** in the European guidelines surveyed; most national FBDGs recommend
  *«(a minimum of) two servings of about 150 g per week»*.
  [@efsaseafood2014]

[inferred from @efsaseafood2014]

## The benefit side — three outcomes, all observational

### Adult cardiovascular: CHD mortality specifically

The evidence is **outcome-narrow**: strong for CHD mortality, inconsistent or null for stroke, atrial
fibrillation, total CVD events. *«there is strong evidence for an effect of n-3 LCPUFA from seafood on
the reduction of CHD mortality»*, while arrhythmia/stroke/total-CVD signals are not supported by the
RCTs. [@efsaseafood2014]

Four meta-analyses of cohorts, magnitudes (all vs little/no seafood):

| Meta-analysis | Dose-response magnitude |
|---|---|
| He 2004 | per 20 g/day, pooled RR **0.93** (0.87-0.99) = a **7% lower** CHD-mortality risk; benefit from **1 serving/week** |
| Whelton 2004 | any vs little/no seafood RR **0.83** (0.76-0.90); no benefit >4 servings/week |
| König 2005 | \~17% lower at 0.5 servings/week, +3.9% per added serving (5.5% per 20 g/day) |
| Zheng 2012 | non-linear; \~6% per added 15 g/day up to 4 servings/week; benefit may be **lost** at >=5/week |

[@efsaseafood2014]

- **Attributed to EPA+DHA.** Per 100 mg/day EPA+DHA, CHD mortality fell **14.6% (8-21%) up to
  250 mg/day, overall 36% (20-50%)** vs none (Mozaffarian & Rimm 2006) — and *«RCTs conducted with
  supplemental, higher doses of n-3 LCPUFAs did not show higher benefits than cohort studies»*.
  [@efsaseafood2014] EFSA set an Adequate
  Intake of **250 mg/day EPA+DHA** for CV health.
  [@efsaseafood2014]

### Fetal neurodevelopment (maternal pregnancy consumption)

Large cohorts (ALSPAC \~12k, Danish National Birth Cohort \~26k) found maternal fish consumption
associated with higher child IQ/developmental scores. Modelled by FDA/FAO-WHO: *«an average of 4.0 IQ
points could be gained from an intake of 100 mg DHA per day, with a maximum attainable IQ gain of 5.8
points»*. [@efsaseafood2014]

**But this is repletion of a deficiency, not enhancement** — three facts converge:

- **DHA supplementation RCTs in pregnancy were NULL** on child neurodevelopment: *«there is no
  evidence for an effect of n-3 LCPUFA supplementation (mostly DHA) during pregnancy on any functional
  outcome of children's neurodevelopment»*.
  [@efsaseafood2014]
- **The association was confined to the low-DHA tail**: maternal DHA predicted IQ *«within the lowest
  quartile of maternal DHA»* but *«no significant associations... within the highest quartile»*.
  [@efsaseafood2014]
- **EFSA's own conclusion**: benefit *«may depend on the maternal status»* and *«No effect of these
  nutrients... is expected when maternal requirements are met.»*
  [@efsaseafood2014]

So the neurodevelopment lever is a **deficiency-repletion** lever (DHA and iodine), and it does
nothing once maternal status is adequate -> [[Deficiency Repletion vs Enhancement]]. The observational
food signal survives while the isolate RCT is null — a design story, not proof the food beats the
nutrient.

### Cognitive decline / dementia (older adults) — Wei 2023

A gold SR+MA (Wei 2023; 48 cohorts, 31 pooled, 103,651 participants) adds a **third observational
benefit outcome**, and it repeats this page's central lesson — the food/dietary signal is protective
while the isolate-supplement RCTs are null. Two exposure-form facts carry the decision, and they
dissociate:

- **Dietary DHA is the strongest signal: RR 0.82 (0.72, 0.93; Level H), 13 studies** — Wei's own
  highest-credibility dietary estimate, reported as a 27% lower dementia risk / 24% lower AD risk.
  Dietary *total* omega-3 is weaker and borderline (RR 0.91, 0.82-1.00; Level M); dietary EPA and ALA
  are null. [@wei2023omega3] Fish is
  the dominant food source of DHA, so this lands on the fish nucleus — but the exposure Wei measured is
  *dietary DHA by FFQ*, not fish servings, so read it as the n-3 mechanism, not a fish-specific dose.
- **The biomarker compartments split, and the split is diagnostic.** *Erythrocyte* DHA (the long-term,
  \~60-90 d intake marker) is protective — RR 0.94 (0.89, 0.98; Level H) — tracking the dietary signal.
  But *plasma* DHA (the short-term, \~7-14 d marker) is **null and publication-bias-driven**: *«No
  signiﬁcant association was found between higher levels of plasma DHA and a lower risk of cognitive
  decline (RR: 0.88, 95% CI: 0.76, 1.03; I2 ¼ 63.6%, Level L), with publication bias (Egger's P ¼
  0.007, corrected RR: 0.99, 95% CI: 0.85, 1.14; I2 ¼ 69%)»*
  [@wei2023omega3] — the bias
  correction moves it to a flat null.

**The diet-vs-supplement / marker-vs-lever pattern, stated by Wei itself.** Wei's ADNI arm found
*supplement use* protective (long-term users HR 0.36) but *blood omega-3 levels* null in the same
cohort, and concedes *«residual confounding from unmeasured confounders (such as dietary intake and
physical activity) remains an issue»*
[@wei2023omega3] — the healthy-user
tell. Wei's intro concedes the design split outright: *«In contrast, randomized clinical trials have
shown limited efﬁcacy of omega-3 fatty acid sup-plementation in reducing cognitive decline and
probable AD»* [@wei2023omega3]. So
the observational dietary-DHA benefit does **NOT** license an omega-3 *supplement* recommendation for
cognition — the held RCTs (MAPT 800 mg DHA + 225 mg EPA/d, cognition-null; VITAL 1 g/d marine n-3)
find no cognitive/CV benefit -> [[Multidomain Lifestyle Intervention and Cognitive Decline]],
[[Vitamin and Mineral Supplements for Disease Prevention]].

**Parameter table — Wei (dietary DHA, observational) vs MAPT (DHA+EPA supplement, RCT):**

| Parameter | Wei 2023 dietary DHA | MAPT / Andrieu (RCT) | Same quantity? |
|---|---|---|---|
| Exposure | habitual dietary DHA (FFQ, years) | 800 mg DHA + 225 mg EPA/d capsule, 3 y | **NO** — food-borne vs isolated supplement |
| Design | pooled prospective cohorts (confounded) | double-blind RCT (unconfounded) | **NO** |
| Endpoint | incident cognitive decline / dementia / AD | change on a cognitive composite over 3 y | **NO** — incidence vs surrogate slope |
| Result | RR 0.82 (0.72, 0.93) protective | null | direction differs |

**Verdict:** the two are **not the same quantity** (different exposure form, design, and endpoint;
not-joined check (ii)), so this is a **type-F refinement / diet-vs-supplement distinction, NOT a filed
tension** — the composite lesson (type A) is that the observed dietary-DHA benefit does not transport
to supplementation, and the marker that would carry the supplement mechanism (plasma DHA) is itself
null.
[inferred from @wei2023omega3]

**The 1.0 g/d *threshold* is an authors' proposal at the edge of the data, not a located knee.** Wei
*«propose[s] that 1.0 g/d may be the threshold»* dosage
[@wei2023omega3], but the same
sentence reports the total-omega-3 dose-response was *«not signiﬁcantly linear»*, and the number sits
at the upper edge of the observed dietary range. Per the dose-response discipline, treat it as the
edge of the evidence, not a curve feature -> [[The Underivable Optimum]]; do not state it bare.

## The key structural move — the benefit is measured NET of the mercury

The load-bearing sentence: the observed associations *«refer to seafood per se and include beneficial
and adverse effects of nutrients and non-nutrients (i.e. including contaminants such as
methylmercury)»*. [@efsaseafood2014]

**A cohort eating real fish already ate the mercury inside it.** So the positive net association *is*
the benefit-minus-risk balance, at the species and intake European populations actually consume — the
weighing is not a modelled subtraction of two separate estimates but a directly observed **net
effect**. This is why the finding can be stated as a serving recommendation rather than an exchange
rate: at typical European species/intakes, the whole-food net is already positive.

[inferred from @efsaseafood2014]

## The risk side — methylmercury, and why species is the decision variable

- **Tolerable Weekly Intake = 1.3 µg/kg body weight/week** (EFSA CONTAM 2012), *«expressed as
  mercury... based on neurodevelopmental endpoints»*, point of departure 11.5 mg/kg maternal hair.
  [@efsaseafood2014]
- **Methylmercury biomagnifies up the food chain, so apex predators carry the most.** The pregnancy
  FBDG guidance is a **species** rule, not an intake rule: *«prefer seafood low in pollutants (e.g.
  trout, ocean perch, cisco, sardine, white halibut, salmon, mackerel, herring, sprats, anchovies,
  carp and prawns); not to eat swordfish, dogfish, marlin, shark, and ray; and to consume at most one
  serving of fresh tuna or pike per week»*.
  [@efsaseafood2014]
- **The harm signal itself comes from extreme exposure.** The Faroese cohort (the classic
  methylmercury-neurotoxicity source) eats **pilot whale**, and the Seychelles cohort eats far more
  fish than any European population — EFSA discounts both as *«much higher than current intakes (and
  current recommendations) in the majority of European countries»*.
  [@efsaseafood2014]

**Benefit and risk are largely DECOUPLED across species — that is the escape.** The species richest in
EPA/DHA (herring, salmon, mackerel, sardine, trout: n-3 \~600-2500 mg/100 g) are mostly **low-mercury**;
the high-mercury apex predators (swordfish, shark, marlin) carry the risk without an offsetting n-3
advantage. **Tuna is the one species that sits on both axes** (n-3-rich *and* can be high-mercury) —
which is exactly the species the guidance singles out to limit.
[@efsaseafood2014]

[inferred from @efsaseafood2014]

## The stratum flip — the crown-jewel finding

The balance is not the same for everyone, and the flip is **stratum × species**, not a blanket
verdict:

- **General adults:** benefit dominates (CHD mortality); methylmercury CV harm is *«inconclusive»*.
  Eat 1-2 servings/week of any commonly-consumed species.
- **The mercury-sensitive stratum is the developing fetus/young child** — hence pregnancy and women of
  childbearing age. Here the risk *can* bind, but the FAO/WHO weighing lands **against the intuitive
  prediction**: for women of childbearing age, in most circumstances the *«risk of suboptimal
  neurodevelopment in offspring of women consuming seafood is lower than in the offspring of women not
  eating seafood»*. [@efsaseafood2014]

**So the flip is not "pregnant women should avoid fish" — it is "the species constraint binds in the
sensitive stratum."** Low-mercury fish still nets *positive* even for the fetus (the lost DHA/iodine of
*not* eating fish outweighs the mercury of low-mercury fish); the balance only tips negative for
**apex-predator species / high intake**. The decision-change is a **species swap**, not abstention —
and abstaining is itself the harmful option for the outcome the sensitive stratum most cares about.

[inferred from @efsaseafood2014]

## Where this sits in the Layer-1 ranking

Fish is a **small-to-moderate lever**, not a big rock:

- The adult CHD-mortality benefit is **observational** (loop open), and the isolated-nutrient RCTs
  split by dose: near-null in the general replete population at \~1 g/day (VITAL, and the low-dose
  stratum across 14 pooled RCTs) and positive only above 1 g/day, concentrated in high-risk
  statin-treated patients (REDUCE-IT) — see the Lombardi 2020 dose-response section below ->
  [[Vitamin and Mineral Supplements for Disease Prevention]], [[Is the Food Category Doing Any Work]].
  So a replete general-population adult should not expect the cohort magnitude, nor a benefit from an
  OTC 1 g/day capsule.
- The neurodevelopment benefit is **repletion only** — it matters for a mother with low DHA/iodine
  status, and is a flat zero once requirements are met.

[inferred from @efsaseafood2014]

## The supplement dose-response — Lombardi 2020 NMA firms the VITAL-vs-REDUCE-IT split (type-F, 2026-09-01)

The held omega-3 *supplement* evidence was two single trials pointing opposite ways — VITAL (1 g/d
EPA+DHA, CV-null) and REDUCE-IT (4 g/d EPA, CV-positive) — already resolved on
[[Vitamin and Mineral Supplements for Disease Prevention]] as a **distinction, not a tension** (they
test different compounds at a 4x dose gap in different strata). Lombardi 2020 is the first **pooled
RCT** evidence woven directly onto this nucleus: a pairwise + network meta-analysis of **14 RCTs
(125,763 patients, median 4.6 y follow-up, 78.6% statin-treated)** that generalizes the single-trial
split into a **dose-stratified** finding across the whole trial set. [@lombardi2020]

**The dose finding.** Splitting trials at a prespecified **1 g/day** cutoff (LD ≤ 1 g, HD > 1 g),
high-dose vs control lowered the ischemic endpoints — major vascular events **IRR 0.78 (0.71-0.85)**,
MI **0.71 (0.62-0.82)**, coronary revascularization **0.74 (0.66-0.83)**, unstable angina **0.73
(0.62-0.86)**, cardiac death **0.79 (0.65-0.96)** — and HD beat LD on the same endpoints (e.g. MI HD
vs LD 0.79, 0.67-0.92). Low-dose vs control was itself weakly protective on cardiac death (0.92,
0.87-0.98) and MI (0.91, 0.84-0.98) but *«no benefit of LD treatment compared to HD in any of the
efficacy endpoints»*. **Total death, sudden cardiac death, and stroke were null even at high dose**
(total death 0.95, 0.85-1.06). [@lombardi2020]

This **firms VITAL from a lone null into the low-dose pattern**: pooling every trial regardless of dose
(the all-dose pairwise analysis) washes the ischemic signal toward null — total death 0.98
(0.94-1.02), revascularization 0.93 (0.83-1.02), stroke 1.02 both NS — because the low-dose trials
dilute the high-dose signal. [@lombardi2020] The benefit lives in the **> 1 g/day** trials.

**But dose is confounded with form and stratum — the NMA cannot separate them, and says so.** The
high-dose arm is dominated by EPA-only trials (REDUCE-IT 4 g, JELIS 1.8 g) in higher-risk populations,
so *«it remains unknown whether it was the dose or formulation that drove the observed CV benefit»*,
and the closed-loop needed to compare doses directly does not exist: *«there is no direct comparison
be-tween HD and LD O3FA»*, on *«an arbitrary cut-off of 1 g/day»*.
[@lombardi2020]
So Lombardi **refines** the supplements-page distinction (it adds that the dose axis tracks benefit
across many trials, not just the one VITAL-vs-REDUCE-IT contrast) without upgrading it to a causal
dose law — dose, EPA-only form, and high-risk stratum remain entangled. It is **not a filed tension**
(the split was never joined at the same quantity) and **not independent type-E** (it re-pools the same
trials the wiki already holds).

**Net-effect and comparator caveats.** The high-dose benefit is bought with **increased bleeding**
(1.49, 1.2-1.84 vs control) and **atrial fibrillation** (1.35, 1.1-1.66 vs control) — a net-effect
tradeoff, not a free lever. And a comparator threat runs across the whole literature: the n-3-vs-control
difference was *«smaller, and not sig-nificant in those studies using an olive oil-based control»*,
suggesting *«olive oil is not an inert control»* — the mirror image of the REDUCE-IT mineral-oil
controversy, here biasing *toward* the null.
[@lombardi2020]
The AF harm is now held as a page in its own right: the dedicated SR+MA (Gencer 2021, 7 trials,
81,210 pts) puts overall incident-AF HR at 1.25 (1.07-1.46) and a **dose-gradient** (>1 g/d 1.49
vs <=1 g/d 1.12, P-interaction <0.001) -> [[Omega-3 Supplementation and Atrial Fibrillation]].
[inferred from @gencer2021]

**Decision-change.** For a **general, replete adult**, an OTC \~1 g/day fish-oil capsule is not expected
to reduce CV events — the low-dose stratum is near-null *across the pooled RCT evidence*, firming VITAL
beyond a single trial. A CV benefit appears only **above 1 g/day** and concentrates in **high-risk
(statin-treated, high-TG, established-CVD/diabetic) strata**, at the cost of bleeding and AFib, and
even there cannot be cleanly credited to dose rather than the EPA-only formulation. This does **not**
touch the fish-as-*food* recommendation (1-2 servings/week, observational), which turns on the whole
food matrix, not a high-dose isolate.
[inferred from @lombardi2020; @manson2019n3; @bhatt2019]

## Is the food category doing any work?

*Fish* fails the category test badly. n-3 content ranges **\~200 mg/100 g (cod, whiting) to \~2500
mg/100 g (herring, tuna)** — an order of magnitude — and mercury ranges from negligible (sardine) to
guideline-limiting (shark, swordfish).
[@efsaseafood2014] The two decision variables
are **(a) oily vs white** (the n-3 benefit) and **(b) trophic level / low vs high mercury** (the
risk) — and *eat fish twice a week* names neither. EFSA itself avoids the *fatty/oily/lean/white*
labels because their use has been *«inconsistent and their meaning ill defined»*.
[@efsaseafood2014] Replace the category with
the species properties in any decision -> [[Is the Food Category Doing Any Work]] (Test 3).

## The pooled magnitudes EFSA could not supply — Jayedi 2020 umbrella (type-F refinement)

EFSA's benefit arm was **not quantified with certainty** — its CHD/IQ numbers were FDA/FAO-WHO models
it merely summarized, and it called its own quantitative synthesis *«generally hampered by the
heterogeneity of the studies»*
[@efsaseafood2014].
The Jayedi & Shab-Bidar 2020 umbrella review (**34 meta-analyses of cohorts, 48 SRRs, 298 primary
cohorts, graded by NutriGrade**) is the first source in the vault to supply **pooled per-100-g/d
magnitudes with a per-outcome certainty grade**. It does not overturn EFSA — it **firms and bounds**
it. [@jayedi2020fish]

**The pooled benefit, by NutriGrade certainty (all per 100 g/d unless noted):**

| Certainty | Outcome | SRR (95% CI) | Reading (relative, per dose) |
|---|---|---|---|
| **Moderate** | CVD mortality | 0.75 (0.65, 0.87) | \~25% lower per +100 g/d |
| **Moderate** | Myocardial infarction | 0.75 (0.65, 0.93) | \~25% lower per +100 g/d (highest heterogeneity, I2>75%) |
| **Moderate** | Heart failure | 0.80 (0.67, 0.95) | \~20% lower per +100 g/d |
| **Moderate** | Stroke | 0.86 (0.75, 0.99) | \~14% lower per +100 g/d |
| **Moderate** | CHD | 0.88 (0.79, 0.99) | \~12% lower per +100 g/d |
| **Moderate** | All-cause mortality | 0.92 (0.87, 0.97) | \~8% lower per +100 g/d; 38 studies, 153,998 cases |
| **Moderate** | Depression | 0.88 (0.79, 0.98) high vs low | new outcome (not on EFSA's arm) |
| **Moderate** | Liver cancer | 0.65 (0.48, 0.87) | the one cancer that reaches moderate |
| Low | CHD mortality | 0.65 (0.48, 0.87) | largest effect, but low certainty + nonlinear |

The RRs are **relative, per +100 g/d** (no baseline risk is given in the umbrella, so a true absolute
risk reduction cannot be computed here — the streetlight caveat -> [[Baseline Risk and the Relative-Absolute Split]]).

[@jayedi2020fish]

**The certainty ceiling is the headline finding, not a footnote:** *«Overall, there was no high-quality
evidence for the relation of fish consumption and the risk of chronic disease»* — 8/48 SRRs moderate
(17%), the rest low/very low.
[@jayedi2020fish]
The ceiling is **observational** (no fish RCTs; 91% of the pooled cohorts adjusted age but
**only 33% adjusted family history**), so *moderate* is as high as the fish->mortality evidence goes.

**Nulls and harms that sharpen the food-category point:**

- **Total fish -> T2D, hypertension, atrial fibrillation are all NULL.** But *«higher intake of fatty
  fish, but not lean fish, was associated with a lower risk of T2D»* (0.89 vs 0.96) — the oily/white
  split doing decision work again -> [[Is the Food Category Doing Any Work]].
  [@jayedi2020fish]
- **Preparation flips the sign:** *«higher intake of fried fish was associated with a higher risk»* of
  heart failure (RR 1.40, 1.22-1.61) while nonfried fish is protective (0.69). *Fried fish* is a
  different exposure than *fish*.
  [@jayedi2020fish]
- Two low-certainty **cancer harm** signals (gastric 1.16, myeloid leukemia 1.60), few studies each.
- **Mercury corroboration:** cohort evidence found no association between toenail mercury (the best
  long-term intake marker) and CVD, and the 2018 AHA statement holds that *«the benefits of 1-2
  servings/wk... outweigh the potential risks associated with mercury content of fish»* — consistent
  with EFSA's net-benefit weighing above.
  [@jayedi2020fish]

### Cross-source parameter table (EFSA 2014 vs Jayedi 2020) — the BLOCKING commensurability check

| Parameter | EFSA 2014 (quoted) | Jayedi 2020 (quoted) | Same quantity? |
|---|---|---|---|
| Quantifiability of the benefit | *«generally hampered by the heterogeneity of the studies»* — no endorsed effect size (chunk 03) | 48 pooled SRRs, NutriGrade-graded; *«no high-quality evidence»* but 8 moderate (chunk 01) | **Yes** — Jayedi supplies exactly the graded pooled estimate EFSA said it could not; both converge on an imperfect ceiling (F-refinement) |
| CHD-mortality dose-response | He 2004 per 20 g/day pooled RR 0.93, cohorts (chunk 03) | CHD mortality 0.65 (0.48, 0.87) per 100 g/d, 17 studies (chunk 02) | **Yes, same outcome+design**; increments differ (0.93/20 g ≈ 0.70/100 g vs 0.65/100 g -> directionally consistent). **NOT independent** — Jayedi's pool includes He 2004 |
| Dose-response SHAPE, CHD mortality | Zheng 2012 non-linear, benefit may be lost at high intake (chunk 03) | *«nonlinear dose-response relations for CHD mortality»* (chunk 02) | **Yes** — both nonlinear for CHD mortality; consistent |
| Dose-response SHAPE, all-cause / total CVD mortality | plateau framing (no benefit above \~4-5 servings/wk) — but EFSA's plateau evidence is CHD-mortality-specific | *«inverse linear associations for all-cause and CVD mortality»*; *«no evidence of a U- or J-shaped association»* (chunk 02) | **No — different outcomes.** The plateau EFSA located is CHD-mortality-specific; for all-cause + total CVD mortality Jayedi finds **linear-inverse**. -> a *refinement* (shape is outcome-specific), not a contradiction |

**Verdict:** type-**F** refinement + shared-data corroboration, **not independent type-E** — Jayedi
re-pools the same cohort literature EFSA's four CHD MAs drew on and rests on the identical EPA/DHA
mechanism story, so its agreement raises detail and certainty, not independence.
[inferred from @jayedi2020fish; @efsaseafood2014]

**The dose-response shape reconciliation (decision-relevant):** EFSA reported a **plateau** (benefit
gone above \~4-5 servings/week); Jayedi reports **linear-inverse** for all-cause and CVD mortality with
**no U/J shape**. These are not in conflict — EFSA's plateau evidence was CHD-mortality-specific (where
Jayedi *also* finds nonlinearity), while for the broader mortality outcomes Jayedi finds every
increment still pays. The shape is **outcome-specific**, matching the corpus's gate-6 finding that a
curve can be monotone on one outcome and flat on another -> [[The U-Shaped Association Artifact]]. The
conservative decision default (keep the \~1-2 servings/week target; more buys little on CHD mortality
but may still help all-cause) is unchanged.

## Limits

- **EFSA could not quantify the benefit with certainty; Jayedi 2020 now can — but only to moderate.**
  EFSA's quantitative analyses were *«generally hampered by the heterogeneity of the studies»* — different intake tools, outcome tools,
  and confounder adjustment. [@efsaseafood2014]
  The IQ and CHD magnitudes in the sections above are FDA/FAO-WHO **models EFSA summarizes**, not effect
  sizes EFSA endorses. Jayedi's pooled SRRs supply endorsed magnitudes, but at a **moderate certainty
  ceiling** and still observational.
- **All the human outcome evidence is observational** (cohorts); the DHA-supplementation RCTs were
  null. Confounding by overall diet quality and socioeconomic position is uncontrolled (the
  observed-healthy-population problem).
- **Intake is FFQ-measured** — the binding constraint -> [[Measurement Error in Dietary Assessment]].
- **The risk arm is borrowed.** This opinion is the benefit side; the methylmercury toxicity
  assessment and the TWI derivation are the separate CONTAM 2012 opinion.
- **Three cohort sources, still not independent on the food signal.** EFSA (benefit-risk guidance) +
  Jayedi 2020 (cohort umbrella, CV/mortality) + Wei 2023 (cohort SR+MA, cognition) — but all three
  share the underlying observational cohort literature and the EPA/DHA mechanism, so confidence stays
  medium, not high (the observational ceiling binds all three). Wei adds the cognitive-decline /
  dementia outcome and a partial independence on design *reading* (it explicitly contrasts the null
  supplement RCTs), but its own effect estimates are observational and FFQ-based like the others.
- **Lombardi 2020 now brings pooled-RCT evidence directly onto the page — but on the *supplement*
  question, not the food.** It is design-independent of the cohort literature above (14 RCTs, not
  cohorts), which partially cashes the previously-owed *omega-3 RCT woven directly here* gap; but it
  addresses supplemental O3FA dose (LD vs HD vs control), carries the olive-oil comparator caveat, and
  cannot separate dose from EPA-only form or high-risk stratum. So it firms the *supplement* leg (OTC
  1 g/day near-null; benefit only > 1 g/day in high-risk strata) without lifting the *food* signal's
  observational ceiling. Still owed: an RCT of *food-form* fish (structurally near-impossible), the
  mercury-toxicity CONTAM 2012 opinion, and ASCEND (not held).

[inferred from @efsaseafood2014]

## Self-critique `[run 2026-08-23, before commit — cognition section added]`

- **Not overclaimed.** The Wei cognition outcome is stated observational throughout; dietary DHA RR 0.82
  is the strongest *dietary* signal in Wei's own paper (source-scoped, not a wiki-holdings superlative),
  and the section's load-bearing conclusion is the *negative* one — the observational dietary signal does
  NOT license an omega-3 supplement recommendation, which the held RCTs (MAPT, VITAL) refute. No "proven
  supplement effect" reading survives.
- **Not a fake tension.** Wei-vs-MAPT is filed as an F-refinement / diet-vs-supplement distinction via a
  parameter table whose *same-quantity?* column is NO on every row (food vs isolate; cohort vs RCT;
  incidence vs surrogate slope) — the not-joined guard (ii). The exposure-form dissociation (dietary +
  erythrocyte DHA protective; plasma DHA null after bias correction) is the type-A composite, marked
  as this page's own reading (INFERRED), not a source finding.
- **Not laundered-E.** Wei is NOT claimed independent of EFSA/Jayedi — all three rest on the same
  observational cohort literature and the EPA/DHA mechanism, so confidence stays `medium` and the Limits
  section says so. The still-owed omega-3 RCT woven directly here remains open.
- **Coherence, not validity** (R1): the loop is open — no operation grades the fish->cognition association
  against a realized dementia outcome.

## Refinement — the DIfE/Boeing 12-food-group series (2026-08-28)

Fish is the series' clearest **outcome-specific** food: inverse for all-cause mortality (0.93,
0.88-0.98 per 100 g/d) and for **all three** CVD subtypes (CHD 0.88, stroke 0.86, heart failure
0.80, all MODERATE), yet **null for T2D** (1.09, 0.93-1.28 — even positive in American cohorts) and
**null/slightly positive for hypertension** (1.07, 0.98-1.16). Same food, opposite glycaemic/pressor
signal — a caution against reading a mortality/CVD benefit as a whole-metabolism benefit.
[@schwingshackl2017mort]
[@bechthold2019]
[@schwingshackl2017t2d] Full grid ->
[[Food Groups and Health Outcomes - A Dose-Response Matrix]].

## Self-critique `[run 2026-09-01, before commit — Lombardi 2020 dose-response NMA added]`

- **Not overclaimed.** The dose finding is stated as an *association* of HD (>1 g/day) with the ischemic
  reductions, never as a proven dose law: the section says twice that dose is confounded with EPA-only
  form and high-risk stratum and that the NMA has no closed loop and an arbitrary cutoff — the causal
  reading is explicitly withheld. The decision-change is the *negative* one (OTC 1 g/day near-null),
  which the pooled low-dose stratum and VITAL both support. No *fish oil prevents heart disease*
  reading survives; the food-vs-supplement firewall is stated (Lombardi does not touch the food arm).
- **Not a fake tension.** VITAL-vs-REDUCE-IT is carried as a *distinction* (already resolved on the
  supplements page via a same-quantity-NO parameter table), and Lombardi is filed as a **type-F
  refinement** of it, not a filed `[[tension]]` — the two trials were never joined at the same
  quantity (dose, form, stratum, composite all differ), so the not-joined guard (ii) holds.
- **Not laundered-E.** Lombardi is explicitly marked **not independent** — it re-pools VITAL,
  REDUCE-IT, JELIS, GISSI, ASCEND et al. that the wiki already holds, so it raises detail/certainty on
  the supplement leg, not independence; confidence stays `medium`. Its one genuinely new axis is
  *design* (pooled RCT vs the page's cohort sources), noted in Limits as partial and supplement-scoped.
- **Coherence, not validity** (R1): the loop is open — no operation here grades the omega-3-dose ->
  CV-event association against a realized outcome; the olive-oil/mineral-oil comparator threat is
  flagged as an unresolved bias in the underlying trials.

## References

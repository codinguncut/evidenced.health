---
type: diagnostic
question: When an exposure is a food category, does the category boundary carry information — or is the estimate an average over a mix that describes nothing?
aliases: [Food Category, Within-Category Variance, Exposure Heterogeneity, Category Boundary, Is the Category Doing Work]
authors: [Scientific Advisory Committee on Nutrition (org); Te Morenga, Lisa; Mallard, Simonette; Mann, Jim; Nordic Council of Ministers (org); Astrup, Arne; Dehghan, Mahshid; Srednicka-Tober, Dominika; Leifert, Carlo; Brown, Lisa; Lane, Melissa M; Hall, Kevin D; Poole, Robin; Bhatt, Deepak L; Manson, JoAnn E]
sources: [SACN - Carbohydrates and Health 2015, Te Morenga - Dietary Sugars and Body Weight 2013, Moynihan - Effect of Sugars on Dental Caries 2014, Willett - Nutritional Epidemiology 3e, WHO - Saturated and Trans Fatty Acid Intake 2023, NNR - Nordic Nutrition Recommendations 2023, Astrup - Saturated Fats Reassessment 2020, Dehghan - PURE Fats Carbohydrate Mortality 2017, Srednicka-Tober - Organic Milk Composition Meta-Analysis 2016, Srednicka-Tober - Organic Meat Composition Meta-Analysis 2016, Brown - Cholesterol-Lowering Dietary Fiber Meta-Analysis 1999, Lane - Ultra-Processed Food Umbrella 2024, Hall - Ultra-Processed Diets Inpatient RCT 2019, Poole - Coffee Consumption and Health 2017, Ding - Coffee and Type 2 Diabetes 2014, Bhatt - REDUCE-IT Icosapent Ethyl 2019, Manson - VITAL Marine Omega-3 2019]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-08-04
relationships:
  related_to:
    - Framing a Decision Question
    - Measurement Error in Dietary Assessment
    - Indirectness of Evidence
    - Free Sugars Intake
    - Does Reducing Saturated Fat Reduce Cardiovascular Events
    - Coffee Consumption and Health
created: 2026-07-27
updated: 2026-08-04
---

*"Eat fish twice a week."* *"Limit red meat."* *"Choose whole grains."* Each names a **category**, and
the estimate behind it is an average over everything inside. **The diagnostic question is whether the
boundary carries information** — because sometimes it does, sometimes it demonstrably does not, and the
two cases license completely different actions.

**The sharp formalization:** if **within-category variance exceeds between-category variance**, the
grouping has no explanatory power, and the category-level estimate is not merely imprecise — it
**describes no actual food**. Skinless chicken, fatty pork and lean pasture-raised beef sit in one
category; wild boar, venison and wild fowl sit in another; the distance within each may exceed the
distance between them.

**This wiki's own telos already holds the failure for evidence synthesis** — pooling across a
heterogeneous set strips the mechanism and yields a washed-out average that answers nobody's question.
**This page extends the same rule one step earlier, to how the exposure is DEFINED.** Same failure,
different object.



## The evidence cuts three ways — and that is the finding

> **Extended 2026-07-28:** a **fourth** case was added at the bottom of this page — a boundary that
> *is* predictive and still adds nothing, because it is collinear with boundaries already in use. The
> three below sort by whether the boundary carries signal; the fourth asks whether the signal is
> **incremental**. -> *A fourth case: the boundary IS predictive and still adds nothing*

### 1. The split carried signal — the category was hiding a real difference

- **Sugar-sweetened beverages inside "free sugars."** Te Morenga [@te2013]: *"Fourteen of these 15 studies reported the sugars exposure as a sugar sweetened beverage"*,
  and for non-beverage exposures the review *"showed no consistent associations between other measures
  of sugars intake and adiposity."* **The child-cohort signal is a beverage signal.** Reading it as a
  free-sugars signal generalises past what the vote-count carries.
- **Processed versus unprocessed red meat.** WCRF analyses the two as separate exposures with separate
  conclusions rather than pooling them — the split is treated as load-bearing by the body that drew it.

### 2. The split carried NOTHING — the boundary was decorative

- **Refined versus whole grain.** SACN tested refined grains
  directly: **RR 1.00 (95% CI 0.98, 1.01)** for cardiovascular events and **RR 1.00 (0.98, 1.01)** for
  type 2 diabetes, both `No association · Moderate`. And every whole-vs-refined **randomised** trial
  was null on blood pressure, lipids, fasting glucose, insulin and insulin sensitivity. SACN's own
  reading of its positive whole-grain cohort findings: *"Any associations indicated for whole grain may
  be related to its cereal fibre component."*
- **Total carbohydrate.** SACN: *"total carbohydrate intake appears to be neither detrimental nor
  beneficial"*, with its own explanation — *"Total carbohydrate is the sum of the sugars, starches and
  dietary fibre in the diet and, therefore, a general term that encompasses several different
  nutritional components... As the components are linked with differing effects on health outcomes, it
  may be more difficult to detect an association."* **The category is too wide to carry anything, and
  SACN says so.**


[@sacn2015]
### 3. The split was never resolved — and you cannot tell which case you are in

- **Fish.** In WCRF's 80-page review, `fish` occurs **247 times** while type distinctions (*oily*,
  *white*, *fatty*, *freshwater*) occur roughly **five** times in total.
- **Legumes.** SACN places roughly **fourteen** legume outcome cells in its `insufficient evidence`
  tables against one graded conclusion.
- **The nutrient *carbohydrate* in PURE — the boundary the study could not resolve.** [@dehghan2017] reports higher total carbohydrate → higher total mortality (Q5 vs Q1
  HR 1.28), but was «unable to quantify separately the types of carbohydrate (refined vs whole grains)», and
  notes «carbohydrate consumption in low-income and middle-income countries is mainly from refined
  sources». [@dehghan2017, Discussion] So the
  harm attaches to a category that pools refined and whole grains, and almost certainly runs through the
  refined sub-type — the exact case-3 trap: a category-level harm that **looks** like "carbohydrate is
  bad" while the boundary that matters (refined vs whole) sits unmeasured inside it. Contrast SACN, which
  *could* test refined-vs-whole and found it null on hard outcomes (case 2 above) — PURE could not test
  it at all.

**This third case is the common one, and it is the dangerous one** — an unresolved category looks
exactly like a resolved one in a recommendation.

## One level up: macronutrient labels, and whether the matrix or the component carries the effect

*"Low-fat"*, *"low-carb"*, *"high-protein"* are the same structure at the nutrient level, and they
carry a stronger implicit claim: **that units within a macronutrient are substitutable**. The corpus
speaks to this directly, and it does **not** settle the way the substitutability critique expects.

**Substitutability turns out to be OUTCOME-DEPENDENT, not simply true or false.** In WHO's own sugars
evidence, swapping free sugars for other carbohydrate **at equal energy** moves body weight by
**0.04 kg (-0.04 to 0.13) — null**. So within-carbohydrate units *are* substitutable for weight. They
are **not** substitutable for caries, which is sugar-specific by mechanism [@moynihan2014]. **Same category, same
swap, opposite answer depending on the outcome** — so "are carbohydrates interchangeable?" has no
answer until the outcome is named. -> [[Free Sugars Intake]]

### Matrix or component? Three held sources, and two lean COMPONENT

The claim that *"removing nutrients from grains and then fortifying them back is not at all the same as
the source food"* is a **matrix** claim: the effect lives in the intact structure, not in an extractable
part. The alternative is a **component** claim: the effect lives in a constituent, so restoring the
constituent restores the effect. **These make opposite predictions about fortification**, and the
sources split:

| Source | Position on within-category difference | Reads as |
|---|---|---|
| **SACN** | isolated fibres have effects, but *"it is not known whether these components confer the full range of health benefits associated with the consumption of a mix of dietary fibre rich foods"*; the DRV rests on fibre *"as a naturally integrated component"* | **matrix-leaning — but hedged as unknown** |
| **SACN, elsewhere** | whole-grain benefit *"may be related to its cereal fibre component"* | **component** |
| **Willett** | within-SFA differences graded by **fatty-acid profile** — *"not all saturated fats have similar effects"* — not by food form | **component** |
| **WHO SFA** | food matrix acknowledged as a possible source of differential effects, **filed as a research gap**; recommendations kept nutrient-level *by choice, with the limitation stated* | **open, and says so** |

**So the corpus leans toward component explanations where the critique leans toward matrix** — and the
one source most supportive of the matrix reading (SACN on isolates) explicitly marks it *not known*.
**That is the honest state: unresolved, with the burden currently on the matrix claim.**

**Why this matters for the fortification case specifically.** If refined-grain harm were a matrix
effect, refined grains should underperform — and SACN tested that
directly and found **RR 1.00** for both cardiovascular events and type 2 diabetes. That is a **direct
test of the matrix prediction on hard outcomes, and it did not find one.** It does not refute matrix
effects in general — micronutrient status, satiety and glycaemic response were not the outcomes tested
— but any fortification argument now has to explain that null rather than assume it away.

[inferred from @sacn2015; @willett; @who2023saturated]

### The mechanisms the labels suppress

The critique names substrate, bioavailability, nutrient combinations, digestive effects, isolation and
**adaptation**. The last is already a telos provision — an intervention's naive dose-response can be
wrong because the organism or the schedule **compensates** elsewhere, so net effect is what counts.
**The others are largely unheld**: the wiki has bioavailability only as a gap (the protein block), and
nothing at all on nutrient combinations or digestive effects. `AWAITS` sources; do not write these as
claims from mechanism alone.



## Tests

1. **Does the source analyse sub-categories separately, or fold them?** If it folds them, the estimate
   is an average over an unspecified mix. Ask what mix — the answer is usually the *study populations'*
   habitual mix, not yours.
2. **Where sub-categories ARE analysed, do the estimates diverge?** Divergence (SSB vs other sugars)
   means the boundary is load-bearing. Convergence (refined vs whole grain on hard outcomes) means it
   is not, **and that is a positive finding, not a null result** — it tells you to stop using that
   boundary as a decision variable.
3. **Is the presumed mechanism carried by the category, or by something inside it?** If the active
   agent is long-chain n-3, *"fish"* is the wrong exposure — white fish delivers little
   -> [[Fish and Seafood Consumption]]. If it is
   cereal fibre, *"whole grain"* is a proxy and SACN says so. **A category whose mechanism lives in a
   sub-component should be replaced by the sub-component in any decision.**
4. **Would the recommendation change across the category's own range?** *"Eat fish twice a week"* is
   beneficial or harmful depending on species (methylmercury in pregnancy) — a category spanning a
   contraindication is not one exposure -> route (c).
5. **Check the increment against the population's spread.** A null over a narrow slice of intake is a
   low-power null, not evidence of no effect: SACN's legume-fibre increment is **1 g/day** against
   7 g/day for total fibre.



## Decision relevance

- **Convergence across a boundary is actionable information.** SACN's refined-grain null says the
  target is *fibre content*, not grain refinement — that changes a shopping rule.
- **Where the category is unresolved, act on the mechanism, not the label.** Choose for the component
  you believe is active and accept that the evidence is silent on the rest.
- **Do not read a category-level null as "this food is fine."** It may be an average over one item that
  helps and one that harms.
- **The variance argument cuts both ways.** If within-category variance is large, a category-level
  *positive* is also unreliable — it may be driven by one sub-type. This test is not a licence to
  discard inconvenient categories only.



## Limits

- **The within/between variance ratio is almost never measured for food categories**, so this is
  normally a qualitative judgment rather than a computed quantity. The formal version is a claim about
  what *would* be found, not a reported statistic.
- **And the reason is structural, not an oversight.** Trials do not randomise to sub-categories, and
  cohorts lack the resolution — so the sub-category question is largely unanswerable by the designs
  that fund this field. **That is a G-gap with a cause, and it will not close by acquiring more of the
  same evidence type.**
- The three-way classification above rests on four sources on two food groups. Whether it generalises
  is **unprobed**; treat it as a lens, not a law.
- **The protein case is the same structure at the nutrient level** — single-plant versus complementary
  protein, whole food versus isolate, whey versus casein — now evidenced on its own page
  -> [[Protein Quality and the DIAAS Score]] (the DIAAS report, FAO 2013, is held).

## The isolate-vs-food case, where the ISOLATE has the better evidence `[2026-07-27, SACN chunk 09]`

The usual form of this diagnostic asks whether a broad food label hides heterogeneity. SACN 2015
supplies the inverse case, and it is more instructive: **the isolated component is better evidenced
than the food carrying it.**

Fibre isolates and gum supplements are graded `Effect · Adequate` — SACN's top strength grade — while
whole-grain benefit is cohort-only and mostly `Limited`, with SACN itself noting that whole-grain
associations *«may be related to its cereal fibre component»*.
[@sacn2015, chunks 05, 09]

**Why this does NOT license *take the isolate instead.*** SACN bounds its own finding in the same
clause — the effect is *«demonstrated at intakes achieved through supplementation»*. So the grade
attaches to a dose nobody reaches by eating differently. **The category question and the evidence-grade
question come apart here**: the better-graded object is the one that could be randomised, which is a
fact about study design, not about which form to eat.
`-> [[Whole Grains Refined Grains and Pulses]]`, `-> [[Upgrading Observational Evidence]]`

**The general lesson for this page:** when an isolated component out-grades the food, check whether
the isolate was *trialled* and the food merely *observed* before concluding the component is what
matters. Design asymmetry masquerades as mechanistic insight.

**A worked instance of exactly this, now held `[2026-07-29, Brown 1999]`.** Brown's meta-analysis of 67
controlled trials pins the *soluble/viscous fibre* isolate (oat, psyllium, pectin, guar) to an LDL drop of  [@brown1999]
-0.057 mmol/L per gram — GRADE-worthy precisely because a single-source fibre *can* be dosed and controlled
against a low-fibre placebo. The whole-food fibre that Reynolds 2019 ties to 15-30% lower mortality cannot
be blinded or dosed, so it stays observational. Same design asymmetry, same trap: the isolate's better
grade is a fact about trialability, not evidence that a psyllium sachet beats a bowl of beans for outcomes
-> [[Dietary Fibre and Health]]. And the isolate's effect is *small* (Brown: «only a small contribution»),
so even the well-graded object does not carry a large decision.

## A fourth case: the boundary IS predictive and still adds nothing `[2026-07-28]`

The three-way split above sorts categories by whether the boundary **carries signal**. [@nnr2023] supplies a case that does not fit any of the three, because the
boundary carries signal *and* the body using it judged it not worth adopting.

**NNR acknowledges the association, at strength, and then declines to recommend on it:**

> «As discussed in the background paper by Juul and Bere (Juul & Bere, 2023), there is strong evidence
> for an association between ultra-processed foods as a group and weight gain and obesity.»
> [@nnr2023]

> «Science advice: Despite the observed association between ultra-processed food and health outcomes,
> the NNR2023 Committee decided not to formulate any specific recommendations on ultra-processed foods.
> NNR2023 includes several recommendations related to specific processing of foods.»
> [@nnr2023]

**Read the two together, because either alone misrepresents the position.** This is **not** case 2 —
NNR is not saying the split carried nothing. It is saying the split carries something that **is already
carried** by the classifications it uses:

> «The NNR committee's view is that the current categorization of foods as ultra- processed foods does
> not add to the already existing food classifications and recommendations in NNR2023.»
> [@nnr2023]

**That is an incremental-validity argument, and it is a different test from the variance argument this
page opens with.** The variance test asks: *does the boundary separate things that differ?* The
incremental test asks: *does it separate them in a way my existing boundaries do not already?* **A
category can pass the first and fail the second** — and when it does, adopting it adds a decision
variable without adding a decision.

| Test | Question | Fails when |
|---|---|---|
| **Variance** (this page's opening) | does the boundary separate foods that differ in outcome? | within-category variance swamps between-category |
| **Incremental validity** (NNR's) | does it separate them *beyond what my existing categories already do*? | **the new boundary is predictive but collinear with boundaries already in use** |

**NNR supplies the collinearity in its own descriptive sentence:** «Most ultra-processed foods are
energy dense products, high in added or free sugars, salt and total fat/saturated fat, and low in fibre
and micronutrients.» Every one of those is a variable NNR already sets a recommendation on. **If the
category's predictive power runs through variables you already regulate, regulating the category too is
double-counting, not new information.**
[inferred from @nnr2023]

### The within-category heterogeneity, with named instances

Where this page has mostly argued heterogeneity in the abstract, NNR names it:

> «In the NOVA framework many foods such as infant formulas, industry produced baby foods, industry- or
> bakery produced whole grain breads, yoghurt, fish-, fruits and vegetable products, and many other
> products are also classified as ultra-processed foods depending on their formulation and processing.»
> [@nnr2023]

**«depending on their formulation and processing» is the load-bearing clause.** The same food — a whole
grain bread, a yoghurt — sits inside or outside the category according to how it was made. **A boundary
that reassigns a food on manufacturing details rather than on composition is one whose membership a
consumer cannot determine at the point of decision**, which is a distinct defect from heterogeneity:
even a *perfectly* informative category is unusable if you cannot tell what is in it. NNR's food-group
infographic states the consequence flatly — «Some UPFs are considered healthy from a nutritional point
of view.»
[@nnr2023]

### NNR poses this page's question as a research need

> «More data  are needed on the mechanisms for the observed health effects of ultra-processed foods, and
> the various types and degrees of processing. More data  are also needed to define whether the NOVA
> classification of ultra-processed foods add value compared to the conventional food categorizations
> used in the NNR2023 FBDGs.»
> [@nnr2023]

**A Tier-A body naming *does this category add value over the ones we already use* as an open question
is this diagnostic stated in a guidance body's own voice** — and it means the page's framing is not a
heterodox lens imported onto the literature but a question the literature's own users are asking.

### Two facts that keep this honest

- **UPF never entered NNR's graded evidence stream.** «No qualified SRs are available on the health
  effect of UPF.» So the *«strong evidence»* wording comes from a commissioned background paper, not
  from a qualified systematic review — a **weaker evidential footing than any of NNR's graded
  positions**, and the asymmetry cuts against the association as much as it cuts against the
  declination. [@nnr2023]
- **NNR names a confounding structure that would produce the association without the category being
  causal:** «Diets high in ultra-processed foods tend to be nutritiously unbalanced and are less likely
  to adhere to the overall NNR2023 recommendations than minimally processed foods», and «Intake of
  ultra-processed foods is linked to social inequalities and deprived groups.» **UPF intake is a marker
  of overall diet quality and of socioeconomic position**, both of which predict the same outcomes.
  [@nnr2023]

### What this does NOT establish

- **NNR does not say the Nova category is invalid, and this page must not.** The verdict is scoped:
  it *«does not add to the already existing food classifications and recommendations in NNR2023»* —
  a judgment about redundancy against **NNR's own FBDG set**, not about Nova's merit in general. A body
  with a sparser set of existing recommendations could reach the opposite conclusion on the same
  evidence.
- **The primary UPF source is now held, and it splits the verdict by outcome `[2026-08-04]`.** The Hall
  inpatient RCT matched UPF and unprocessed diets on presented calories, energy density, macros, sugar,
  sodium and fibre, fed them ad libitum, and found UPF **still drove +508 kcal/day and 0.9 kg weight gain**
  [@hall2019]. So on the **intake** outcome
  NNR's collinearity argument fails: the boundary does independent work at matched *total* composition.
  **But the finding reinforces this diagnostic rather than overturning it** — the work ran through
  **identifiable sub-components** (85% higher non-beverage energy density; faster eating rate/soft texture,
  correlated with intake r = 0.45; protein dilution explaining «at most 50%»)
  [@hall2019], the very *«energy dense... low in
  fibre»* properties NNR named as the collinear channel. Test 3 stands: **replace the NOVA label with the
  measurable property (energy density, eating rate, protein) in any decision** — the category is doing work,
  but a nameable sub-component is doing it. The *hard-outcome* boundary remains untested; Hall is a surrogate
  (intake/weight, 2 weeks, n=20).
  [inferred from @hall2019]
- **No tension is filed.** NNR is the only source the wiki holds on this question, so there is nothing
  for it to be joined against.


### Self-critique `[run 2026-07-28, before commit]`

- **Counter-passage check: RUN, and it changed the section's shape.** The tempting reading was *"a
  Tier-A body says UPF is a bogus category."* Reading NNR's UPF section end to end shows it asserts
  **strong evidence of association** two paragraphs above the declination. The section now leads with
  the association, because a version that opened with the declination would have been quoting NNR
  against itself.
- **Over-claim check: the verdict is scoped in three places** — in the pull-quote, in the incremental-
  validity table, and in *What this does NOT establish*. The unscoped form ("Nova adds nothing") is
  what the source does not support.
- **New-claim check on the fourth case.** The variance/incremental-validity distinction is **this
  page's**, tagged [inferred from @nnr2023]; NNR states the redundancy verdict and the shared-variable list but
  never frames it as incremental validity.
- **Evidential symmetry: applied against the finding as well as for it.** The «no qualified SRs» fact
  weakens NNR's *«strong evidence»* claim just as much as it contextualises the declination, and is
  recorded as cutting both ways rather than only in the convenient direction.
- **Residual:** everything here is one body's methodological judgment about its own guideline set, with
  no primary evidence behind it. The section's weight rests on the distinction it introduces, not on
  NNR's authority — and the AWAITS line above names the source that could overturn it.

### UPF, second source — Lane 2024 supplies the direct within-category evidence NNR argued abstractly `[2026-07-31]`

NNR's UPF case above is an *incremental-validity* argument made largely in the abstract («most
ultra-processed foods are energy dense... high in added or free sugars, salt...»). Lane's umbrella review
[[Ultra-Processed Food and Health Outcomes]] supplies the concrete within-category evidence, and it lands
squarely on this diagnostic:

- **Named protective subcategories inside the harmful aggregate.** Within a T2D meta-analysis Lane
  includes (Chen 2023), «while certain subcategories of ultra-processed foods further showed higher risk,
  others were inversely associated, such as ultra-processed cereals, dark/wholegrain bread, packaged sweet
  and savoury snacks, fruit based products and yoghurt, and dairy based desserts».
  [@lane2024upf] **This is the variance test failing on
  its own data** — the category pools items that harm and items that protect, so the category-level HR
  describes no single food. (NNR named the same heterogeneity as a list of borderline foods; Lane shows it
  as *opposite-signed outcome associations*.)
- **The adjustment that would settle it is not the adjustment Lane ran.** Lane's defense against the
  confounding critique is that «adjusting for diet quality or patterns does not change the consistent
  evidence». [@lane2024upf] But diet-quality-*pattern*
  adjustment is **not** nutrient-profile matching — the sugar/salt/fat/fibre content is what makes a food
  both *ultra-processed* and *nutrient-poor*, so a residual association after pattern adjustment still does
  not separate the boundary from its composition. Only a composition-matched design does — and the Hall RCT
  now supplies one **for the intake outcome**: at matched presented composition UPF still moved intake, via
  identifiable sub-components (energy density, eating rate, protein). See *A Tier-A body naming...* above and
  [[Ultra-Processed Food and Health Outcomes]]. The hard-outcome boundary is still composition-confounded.

This is Lane **refining** NNR on the same question (a second gold body, direct subcategory data), not a
new tension — both hold the category's predictive power runs largely through correlates. The live
disagreement is what to *do*: Lane recommends targeting UPF, NNR declines. That decision-level clash lives
on [[Ultra-Processed Food and Health Outcomes]].
[inferred from @lane2024upf]

### Ruminant vs industrial trans fat — a boundary WHO tested and dropped `[2026-07-28, Annex 8]`

A textbook case-2 instance, and unusually clean because the body **had** the split available and
chose against it:

> «Based on the evidence review for TFA, the WHO NUGAG Subgroup on Diet and Health concluded that
> industrially produced and ruminant TFA behaved in a similar manner with respect to effects on health
> and therefore formulated recommendations for total TFA (i.e. the total intake from both industrially
> produced and ruminant TFA).»
> [@who2023saturated, Annex 8]

**The boundary is intuitively load-bearing and empirically was not.** Industrial and ruminant TFA
differ in origin, in isomer profile, and in how a consumer encounters them — every reason to expect the
split to matter. **WHO assessed it and issued one number for the union.**

**Why this is a stronger instance than the page's other case-2 entries.** Refined-vs-whole grain was
tested and found null on outcomes; here a body **considered a categorical distinction at
recommendation-design time and declined to carry it into the recommendation.** That is the diagnostic's
verdict being reached by the guideline itself, and it is the outcome the page's Test 2 predicts:
convergence across the boundary means stop using it as a decision variable.

**The bound:** this is WHO's reading of its own evidence review, and the review is not held here. **What
is recorded is that a Tier-A body tested the split and merged it**, not an independent verification
that the two behave alike.

## SFA as a nutrient label that fails to predict its foods — Astrup et al. 2020 `[2026-07-29]`

Astrup is this diagnostic's question stated as a whole thesis:
**does the nutrient "saturated fat" carry information about the foods that contain it?** Its answer is
the strongest *no-the-nutrient-is-the-wrong-exposure* case the corpus holds — and it is the friction
half of [[Does Reducing Saturated Fat Reduce Cardiovascular Events]]. This is a **distinction** from the
RCT nutrient-substitution evidence, not joined with it (different unit: observational *food* intake vs
randomised *nutrient* exchange).

**The fat-vs-fatty-acid move (Test 3 at the nutrient level).** Astrup distinguishes a *saturated fat*
(a food) from *saturated fatty acids* (chemical structures): a saturated fat is a complex mixture of all
major SFAs in differing proportions plus odd-/branched-chain SFAs, unsaturated fatty acids, and
non-fatty-acid components [@astrup2020] — so "the
healthfulness of fats is not a simple function of their SFA content, but rather is a result of the
various components in the food, often referred to as the 'food matrix.'" The
SFA label groups foods whose within-category variance (short/medium/long-chain profile, matrix, carrier
nutrients) plausibly swamps the between-category "SFA" contrast — this page's opening variance argument,
applied to a macronutrient.
[@astrup2020, From Single Nutrients to Whole Foods]

**Named instances where the boundary carries signal the SFA label suppresses:**

| Food | Astrup's claim | The SFA label predicts | Reads as |
|---|---|---|---|
| Cheese, yogurt | "yogurt intakes are inversely associated with CVD risk"; whole-fat dairy may protect vs T2D | harm (SFA-rich) | **matrix beats nutrient** |
| Dark chocolate | stearic acid (18:0) neutral; other constituents plausibly beneficial | harm | matrix beats nutrient |
| Unprocessed vs processed meat | processed meat associates with CHD/T2D, unprocessed red meat does not — «the SFA content of meat is unlikely to be responsible for this association» | same harm (SFA common to both) | **the split is NOT the SFA** |

[@astrup2020, Health Effects of Differing Food Sources]

**The processed/unprocessed meat row is the cleanest Test-3 instance:** the fatty-acid content is shared
across the boundary while the risk is not, so whatever carries the risk, it is not the SFA — the
category "saturated fat" is the wrong exposure and the sub-structure (processing) is where the signal
lives. This aligns with [[Should Adults Reduce Red and Processed Meat]] (processed vs unprocessed is
load-bearing) and with the trans-fat *processing* story on the SFA page.

## "Organic" as a label that tracks the feed, not the certificate `[2026-07-29]`

The diagnostic usually asks whether a *food* boundary hides heterogeneity. The organic label is the same
structure at the **production** level: "organic" is a certification bundle, and the question is whether
the certificate or an underlying exposure it only partly captures carries the compositional signal.
-> [[Organic vs Conventional Food]]

The animal-product case answers cleanly, because both meta-analyses attribute the difference to **feed**,
not certification, in their own voice. Organic milk and meat carry higher n-3 PUFA and CLA (milk n-3
+56%, CLA +41%; meat n-3 +47%), but Srednicka-Tober
finds "the higher grazing/conserved forage intakes in organic systems were the main reason for milk
composition differences", and Srednicka-Tober that
"the high grazing/forage-based diets prescribed under organic farming standards may be the main reason
for differences in FA profiles."
[@srednickatober2016milk, Abstract]
[@srednickatober2016meat, Abstract]

**So the causal lever is grass vs grain, and "organic" is a partial proxy for it** — a pasture-raised
*conventional* animal can beat an *organic grain-fed* one on the nutrient that reaches the product. This
is Test 3 at the production level: the presumed mechanism (n-3/CLA) lives in the feed, so the category
whose mechanism sits in a sub-component (here, forage intake) should be replaced by that sub-component
(grass-fed / pasture) in any decision. The label and the exposure come apart.
[inferred from @srednickatober2016milk; @srednickatober2016meat]

**Two guards keep this honest (symmetric standards).**

- **The observational-food evidence carries its own confounding**, exactly the trap this page's third
  case warns of: whole-fat-dairy consumers and unprocessed-meat-vs-processed-meat eaters differ
  systematically (this is the NNR UPF-is-a-diet-quality-
  marker problem), so an inverse food association is not a clean matrix verdict.
- **A favourable-to-whole-fat-dairy conclusion on partly dairy-funded authorship is a halo tell** — the
  matrix argument is admissible as a distinction (the nutrient does not predict the food), NOT yet as a
  positive claim that these foods are protective. What survives is the diagnostic point: **at matched
  SFA, the foods diverge, so "saturated fat" is not one exposure.**
[inferred from @astrup2020]

## Coffee — the presumed component (caffeine) is NOT the driver, and the load-bearing boundary is BREW `[2026-08-04, Poole]`

Coffee is this diagnostic run twice on one exposure, and the two runs point opposite ways — which is the
finding.

**Run 1 (Test 3): the presumed active component fails the sub-component test.** The intuitive read is
that coffee's effect *is* the caffeine. The decaf comparison refutes it for the main benefits: high-vs-low
decaffeinated coffee lowered all-cause and CV mortality (similar magnitude to caffeinated), and for T2D
«Consumption of decaffeinated coffee also seemed to have similar associations of comparable magnitude».
[@poole2017] The mortality/metabolic/liver signal
survives removing caffeine, so the exposure is the **coffee matrix** (chlorogenic acids, diterpenes,
\~1000 bioactives), not caffeine — Poole chose «coffee, rather than caffeine» as the exposure for exactly
this reason [@poole2017]. This is Test 3: replace the
label ("coffee = caffeine") with the sub-component that actually carries the mechanism. Note the caveat
runs the *other* way here from the fibre/organic cases — caffeine is present but **inactive** for these
outcomes, where in those cases the sub-component was the active part.

**Run 1, quantified on T2D — Ding 2014 refines the decaf test with numbers `[2026-08-04]`.** Where Poole
states the decaf-equivalence qualitatively, Ding's gold-tier dose-response MA (28 cohorts, 1.11M) gives
the per-cup figures: **caffeinated RR 0.91 (0.89-0.94) vs decaffeinated 0.94 (0.91-0.98) per cup/day,
P for difference = 0.17 (NS)** [@ding2014]. Ding draws
this page's exact conclusion in its own voice: «These results suggest that components of coffee other
than caffeine are responsible for this putative beneﬁcial effect» [@ding2014]. It also sharpens the trap: the caffeine-*alone* association (per 140 mg/day
RR 0.92) is not clean either — «none of the included studies controlled for coffee intake when modeling
caffeine intake», so it is «likely to be confounded by other components of coffee because of the
collinearity» [@ding2014]. **The presumed active
component (caffeine) is collinear with the matrix that actually carries the effect — so a study crediting
caffeine is measuring the matrix under a caffeine label.** (Bound kept: categorically the caffeinated arm
is *slightly* stronger, P=0.07 at the highest group — decaf works, caffeine may add a marginal increment,
so "caffeine does nothing" would overstate it.) A second coffee source, same evidence base as Poole
(F-refinement, not independent-E). -> [[Coffee Consumption and Health]]
[inferred from @ding2014]

**Run 2 (case 1): a DIFFERENT within-coffee boundary carries a real signal — brewing method.** Filtered
vs unfiltered is load-bearing for the lipid outcome via the diterpenes cafestol/kahweol: unfiltered
(boiled, cafetière, espresso) raises LDL/total cholesterol, and «The increases in cholesterol
concentration were mitigated with filtered coffee... no significant changes to low density lipoprotein
cholesterol or triglycerides compared with unfiltered (boiled) coffee».
[@poole2017] So «coffee» pools two exposures that
differ on a hard-mechanism sub-boundary — exactly case 1.

**The decision consequence of running both:** «coffee» as a category is doing work, but *neither the
caffeine axis nor the whole-cup label is the right decision variable* — for the benefits, name the
**matrix / decaf-equivalence**; for the lipid harm, name the **brew method**. A recommendation phrased as
"caffeine is bad" or "coffee raises cholesterol" is wrong on both axes. -> [[Coffee Consumption and Health]]
[inferred from @poole2017]

## "Omega-3" as a label spanning a benefit AND a null — the unit is compound × dose × stratum `[2026-08-04, Bhatt vs Manson]`

This diagnostic usually runs on a *food* label. The supplement literature supplies the same failure one
level in, at the **isolated-nutrient** label — and it is unusually sharp because the two trials under one
word land on **opposite outcomes**. "Omega-3" (or "fish oil") names REDUCE-IT and VITAL alike, yet:

| Parameter | REDUCE-IT (benefit) | VITAL n-3 (null) | Same? |
|---|---|---|---|
| Compound | purified EPA ester, **no DHA** | EPA+DHA mix | **NO** |
| Dose | 4 g/day | 1 g/day | **NO** |
| Stratum | statin-treated, high-TG, high CV risk | general, replete, primary prevention | **NO** |
| Result | HR 0.75, NNT 21 [@bhatt2019] | HR 0.92, null [@manson2019n3] | opposite |

**Every input differs, so the divergent results are a distinction, not a tension** — Test 3 at the nutrient
level. The word "omega-3" is *not the exposure*; the exposure is **the specified compound, at a specified
dose, in a specified stratum**. Bhatt says exactly this: prior n-3 nulls may reflect «the low dose or... the
low ratio of EPA to docosahexaenoic acid (DHA)», and REDUCE-IT «should not be generalized to other n−3
fatty acid preparations — in particular, dietary-supplement preparations of n−3 fatty acid mixtures»
[@bhatt2019]. This composes with case 3's fish note above
(if the active agent is long-chain n-3, "fish" is the wrong exposure): here the label fails even after you
descend from *fish* to the *isolated n-3*, because EPA-ester ≠ EPA+DHA-mix and 4 g ≠ 1 g. The full
parameter table and the decision-form finding live on [[Vitamin and Mineral Supplements for Disease Prevention]].
[inferred from @bhatt2019; @manson2019n3]

## References

---
type: concept
question: Is "food addiction" a valid construct, what does the YFAS measure, and which food attributes predict a high addictive-like-eating score — and does any of it change what to eat?
aliases: [Food Addiction, YFAS, Yale Food Addiction Scale, Addictive-Like Eating, Highly Processed Food Addiction]
authors: [Schulte, Erica M; Avena, Nicole M; Gearhardt, Ashley N; Gordon, Eliza L; Ariel-Donges, Aviva H; Bauman, Viviana; Merlo, Lisa J; Pursey, Kirrilly M; Stanwell, Peter; Collins, Clare E; Burrows, Tracy L]
sources: [Schulte - Which Foods May Be Addictive 2015, Gordon - Evidence for Food Addiction Systematic Review 2018, Pursey - Food Addiction Prevalence YFAS Systematic Review 2014]
cluster: food-addiction
nucleus: true
confidence: low
self_critiqued: 2026-08-30
relationships:
  related_to:
    - Hyper-Palatable Foods
    - Ultra-Processed Food and Health Outcomes
    - The Disease Model of Obesity
    - Free Sugars Intake
created: 2026-08-30
updated: 2026-08-30
---

<div class="recent-update" data-last-updated="2026-08-30"></div>

**Nucleus of the `food-addiction` cluster.** "Food addiction" is a **behavioural / reward
construct**: the claim that some foods trigger addiction-like loss of control, measured by the
**Yale Food Addiction Scale (YFAS)** — a 25-item self-report scale mapping the DSM-IV
substance-dependence criteria onto eating (Gearhardt 2009). This page opens the construct as a
domain node, on three sources: Schulte 2015 (moderate-tier attribute survey), Gordon 2018
(gold-tier construct-validity SR), and Pursey 2014 (gold-tier prevalence SR/MA, added 2026-08-30).
**The construct is highly controversial**, and the page holds **two separate evidence states**: its
*construct validity* is gold-SR-supported-but-controversial (Gordon), while its bearing on any
*patient-important outcome* stays **insufficient-evidence** — neither benefit nor harm on what to
eat. The three sources answer three *different* descriptive/appraisal questions and none touches
the outcome question: Schulte the *attribute* question (which food properties predict a high
addictive-like-eating score), Gordon the *validity* question (does the construct hold against
substance-use-disorder criteria), Pursey the *prevalence* question (how common is a YFAS diagnosis,
and in whom).

[inferred from @schulte2015addictive]

<div class="recent-update" data-last-updated="2026-08-30"></div>

## What the YFAS measures — a self-report symptom count, not a diagnosis of a disease

- YFAS operationalizes addictive-like eating on the DSM-IV substance-dependence criteria (loss of
  control, continued use despite harm, inability to cut down, tolerance, withdrawal). A "food
  addiction" **diagnosis** = >=3 symptoms + clinically significant impairment/distress. In Schulte's
  samples this was **6.7% (Study 1 undergrads) and 10.2% (Study 2 MTurk adults)**
  [@schulte2015addictive]. YFAS symptom count
  correlated with BMI (r \~ 0.21) but not gender.
- **The instrument is the exposure's weak point (streetlight guard).** YFAS is a self-report
  *perception* of one's own eating, not measured intake, not observed behaviour, and not a measured
  biological addictive response. Schulte's own limitation: «the current findings are limited to
  participants' reports of whether certain foods are perceived to be associated with addictive-like
  eating behavior» [@schulte2015addictive], and «we did
  not collect observational data to assess the frequency that these foods were consumed»
  [@schulte2015addictive]. So a "high YFAS score for
  chocolate" is a *reported perception*, several inferential steps from a demonstrated addiction.

<div class="recent-update" data-last-updated="2026-08-30"></div>

## Which food attributes predict a high score — processing, fat, glycemic load

Schulte's finding (35 foods varying in processing/fat/GL; Study 1 forced-choice ranking n=120,
Study 2 hierarchical linear model of 1-7 problem-ratings n=384): **not all foods are equally
implicated**, and three attributes predict the addictive-like-eating rating, all large effects.
The coefficients below are the ones Schulte reports for each attribute **in the model it was
retained in** — the d's are not all from a single joint model (the collinearity structure below
forces separate models), so read down the column, not across it.

| Attribute | Effect size d (in the model it was retained in) | Coefficient | Note |
|---|---|---|---|
| **Processing** (highly-processed vs not) | **d = 1.444**, p < 0.001 | γ10 = 0.653 | the single most influential attribute; top-10 ranked foods all highly processed |
| **Fat** (grams) | **d = 1.581**, p < 0.001 | γ10 = 0.025 | fat's coefficient in the FINAL model (co-modeled with GL); predicts regardless of who rates |
| **Glycemic load** | **d = 0.923**, p < 0.001 | γ20 = 0.021 | in the FINAL model (with fat); larger than sugar (0.814) or net-carb (0.657) — the *rate* facet, not just the quantity |

[@schulte2015addictive]

- **Two collinearity constraints shape which attributes share a model — so no d in the table
  above is directly comparable to another.** (i) Processing and GL correlate r = 0.756 (p < 0.01),
  so processing is fitted in its own model and GL in a separate one; (ii) fat and sodium correlate
  r = .623 (p < 0.001), barring them from one model. The three tabled attributes are not independent
  levers — they are facets of the same *highly processed* profile.
  [@schulte2015addictive]
- **Fat was chosen over sodium for the final model — a separate screening step, its own numbers.**
  Assessed independently (the r = .623 collinearity barred co-modeling), fat's *standalone* effect
  beat sodium's, so fat — not sodium — was carried into the fat+GL model: «We assessed fat and
  sodium independently, and though both were significant level-one predictors, we determined that
  fat had a larger effect size than sodium (fat: d = 1.853, p < 0.001; sodium: d = 1.223, p < 0.001).
  Thus, fat was utilized in the second model.» So fat carries **two** source d's for **two** model
  contexts — d = 1.853 assessed alone against sodium, d = 1.581 once co-modeled with GL — and they do
  not conflict.
  [@schulte2015addictive]
- **GL beats sugar and net-carb** — so it is «not just the quantity of refined carbohydrates ... but
  the rapid speed in which they are absorbed» that predicts the rating, the paper's pharmacokinetic
  (dose + rate-of-absorption) analogy to drugs of abuse.
  [@schulte2015addictive]
- **Fat vs GL differ in individual-difference profile (the one within-source refinement).** GL's
  effect is *moderated* by YFAS symptom count (higher-symptom individuals report more problems with
  high-GL foods; γ21 = 0.003, d = 0.297); the FAT effect is moderated by *no* individual difference.
  Schulte reads this as fat tracking a **general tendency to overeat** rather than an
  addiction-specific process — consistent with the animal literature (opiate-like withdrawal on
  sucrose removal but not fat). So within the construct, sugar/GL is the more "addiction-like" facet
  and fat the more "general overconsumption" facet.
  [@schulte2015addictive]

The paper's engineering definition of the implicated foods: «foods that have been designed to be
particularly rewarding through the addition of fat and/or refined carbohydrates»
[@schulte2015addictive] — and it proposes the construct
might be «more appropriately titled 'highly processed food addiction'»
[@schulte2015addictive], i.e. narrowing scope, not
validating the addiction claim.

<div class="recent-update" data-last-updated="2026-08-30"></div>

## Distinct from Hyper-Palatable Foods — same neighbourhood, different construct `[type-B]`

The food-addiction construct and [[Hyper-Palatable Foods]] point at overlapping foods (fat + refined
carbohydrate, engineered reward) but are **different objects, and a claim about one does not transfer
to the other**:

- **Hyper-Palatable Foods** is a **nutrient-COMPOSITION** definition (Fazzino's fat/sugar/sodium/carb
  threshold combinations, read off a nutrition label) — it is *agnostic about behaviour*; it says
  nothing about whether anyone loses control.
- **Food addiction** is a **behavioural / reward** construct — a person's YFAS-measured loss of
  control — measured by a self-report scale, *agnostic about the food's exact composition* (it uses
  processing/fat/GL as predictors, not a defining threshold).
- Schulte's contribution is REWARD-MECHANISM evidence about a channel HPF's composition definition
  leaves open (processing + fat + GL predict addictive-like eating), but the two must stay separate:
  a food being HPF by composition does not make it "addictive", and a food scoring high on YFAS is
  not thereby shown to meet an HPF threshold. [inferred from @schulte2015addictive]

<div class="recent-update" data-last-updated="2026-08-30"></div>

## The construct-validity appraisal — a gold SR that *generally supports* it, on a weak bar `[gold SR, construct-validity only]`

Gordon 2018 is the **first systematic review of food addiction not limited to YFAS- or
body-weight-based definitions** — «To our knowledge, this is the first systematic review on food
addiction that was not limited to definitions based on the YFAS or body weight status»
[@gordon2018foodaddiction]. It organizes
the evidence against **eight** addiction characteristics — «(a) neurobiological changes,
(b) preoccupation with the substance, (c) impaired control, (d) social impairments, (e) risky use,
(f) tolerance/withdrawal, (g) chronicity of the condition, and (h) relapse»
[@gordon2018foodaddiction] — and concludes
the literature «generally support[s] the validity of food addiction as a diagnostic construct,
particularly as it relates to foods high in added sweeteners and refined ingredients»
[@gordon2018foodaddiction]. It opens the
abstract by naming its own subject «a highly controversial subject»
[@gordon2018foodaddiction].

**Read the bar it clears, not just the verdict — the support is vote-counted, lopsided, and
animal-heavy.** The SR counts *how many studies* back each criterion, not a pooled effect on any
one — «each primary criterion having support from at least one study ... though some sub-criteria
have not yet been studied»
[@gordon2018foodaddiction]. The distribution
is extremely uneven: «Brain reward dysfunction and impaired control were supported by the largest
number of studies (n = 21 and n = 12, respectively); whereas risky use was supported by the fewest
(n = 1)»
[@gordon2018foodaddiction]. So a *criterion
supported* can rest on a single study, and the construct's weight
sits almost entirely on the two easiest-to-measure neurobiological/control facets. The pooled
magnitude that *would* size this as a lever is exactly what an SR of this heterogeneous
animal+human literature structurally cannot yet produce — a `G (needs aggregation)` gap, not a
finding.

**The SR self-flags the biases that most threaten this exact verdict.** «Limitations include that our
search was limited to two electronic databases and only included studies published in English, and
that animal studies limit generalizability to humans ... The study question may also have produced
biased results, as researchers interested in evaluating the validity of the food addiction construct
may be more inclined (consciously or not) to observe and report confirmatory results»
[@gordon2018foodaddiction]. A
confirmation-bias self-warning on a construct-validity SR is a strong reason to hold the
*generally supports* verdict at arm's length under symmetric standards — the direction of such a bias
is not random, it inflates the very conclusion drawn.

**Substance over behavior; and food-specificity that resists a clean processing story.** Gordon reads
the symptom profile as fitting substance-use disorder better than behavioral addiction — «symptoms
appear to better fit criteria for substance use disorder than behavioral addiction»
[@gordon2018foodaddiction], the «substance
(highly-palatable food) component may be more salient ... than the behavior (eating)»
[@gordon2018foodaddiction]. On *which*
foods: «data from human studies suggest that the combination of sweet and fat is more commonly
associated with addictive symptoms than sugar alone» (strong sugar support is animal-only)
[@gordon2018foodaddiction]. But the SR
itself flags an anomaly against a tidy processing rule, citing Schulte's own data: «nuts (typically
considered a whole food, without added sugars) were rated more addictive on average than granola bars
(typically processed, with added sugars and fats)»
[@gordon2018foodaddiction].

**NOT independent-E — Gordon's evidence base *includes* Schulte.** The nuts>granola anomaly above is
Gordon quoting Schulte [13] — the same paper this page's attribute section rests on — so Gordon and
Schulte are **not** independent backings converging on the construct; they share the Gearhardt/YFAS
lineage and, literally, the same study. Their agreement raises coverage, not confidence: it is
shared-lineage coherence, not type-E robustness. No `[E-independent]` is claimed.
[inferred from @gordon2018foodaddiction]

**Two separate evidence states — the crux.** Gordon moves the *construct-validity* question, and only
that. [inferred from @gordon2018foodaddiction]

- **Construct validity: gold-SR-supported-but-controversial.** A gold-tier SR now concludes the
  construct *generally* holds against SUD criteria — a real upgrade from *one survey assumes the
  frame*. But it holds on a weak base (vote-counting, one-study criteria, animal-heavy, author-flagged
  confirmation bias, non-independent from Schulte), and the SR calls its own subject controversial. So:
  **plausibly a valid construct per SR, on contested and bias-exposed evidence** — not a settled fact.
- **Patient-important outcomes: still insufficient-evidence — unchanged.** Gordon appraises *construct
  validity*, not what the construct does to anyone. It carries **no** weight-gain, T2D, or mortality
  pathway, and no addiction-specific outcome distinct from ordinary overconsumption. A gold SR on the
  *construct* does not license any decision-change about what to eat that was not already reachable
  from the ordinary *highly processed foods drive overconsumption* reasoning. The outcome G-gap below
  stays fully open.

<div class="recent-update" data-last-updated="2026-08-30"></div>

## Prevalence — a pooled 19.9%, but read the sample it is drawn from `[gold SR/MA, prevalence only]`

Pursey 2014 is the **prevalence SR/MA**: 28 articles describing **25 studies**, **196,211
participants** — «A total of 196,211 participants were examined across reviewed studies ranging from
one to 134,175 participants. Participants were predominantly female, with six studies investigating
females exclusively ... and an additional nine studies investigating a population with >70% female
participants» [@pursey2014foodaddiction].
The headline pooled figure and its subgroup pattern:

- **Pooled YFAS food-addiction diagnosis prevalence: 19.9%** (weighted mean across adult population
  samples). Doubled in overweight/obese vs healthy-BMI samples, roughly doubled in females vs males,
  and higher in the older stratum: «Using meta-analysis, the weighted mean prevalence of FA diagnosis
  in adult population samples was 19.9%. Meta-analysis indicated that FA prevalence was double that in
  overweight/obese population samples compared to those of a healthy BMI (24.9% and 11.1% respectively)
  and in females compared to males (12.2% and 6.4% respectively). FA prevalence was also higher in
  adults older than 35 years compared to adults younger than 35 years (22.2% and 17.0% respectively).»
  [@pursey2014foodaddiction]

| Subgroup | YFAS FA prevalence | Contrast |
|---|---|---|
| **All adult samples (pooled)** | **19.9%** | the headline weighted mean |
| Overweight/obese | 24.9% | vs healthy BMI **11.1%** (\~2x) |
| Female | 12.2% | vs male **6.4%** (\~2x) |
| Age > 35y | 22.2% | vs < 35y **17.0%** |
| Clinical (symptom count) | 4.0 symptoms | vs non-clinical **1.7** (>2x) |

[@pursey2014foodaddiction]

**The 19.9% is NOT a general-population prevalence — the source says so itself (transportability
caveat, load-bearing).** The pooled pool is predominantly overweight/obese, female, and
clinically-recruited, and Pursey draws the inflation conclusion directly: «When meta-analyzed by
clinical status, clinical populations endorsed more than double the number of symptoms compared to
non-clinical populations (4.0 and 1.7 symptoms respectively). However, it should be noted that the
population samples in the included studies were predominantly comprised of overweight/obese females
recruited from clinical settings. Hence, the prevalence of YFAS FA diagnosis and the average symptom
scores are likely higher compared to a nationally representative general population sample due to the
characteristics of included participants.»
[@pursey2014foodaddiction] So the
subgroup gradient (OW/OB, female, clinical -> higher) is *also* the composition of the pooled pool —
the 19.9% sits toward the high end of what a general population would show, not at its center.

- **Prevalence is sample-dependent — the numbers do not converge on one rate, and that is the point
.** Schulte's *own* YFAS diagnosis rates on this very page — 6.7% (undergrads) and 10.2%
  (MTurk adults) — sit well *below* Pursey's clinically-weighted 19.9%, and below even Pursey's
  healthy-BMI 11.1%. A YFAS *prevalence* is a property of *who was sampled*, not a fixed population
  fact; quoting 19.9% bare would launder a clinically-enriched figure into a population claim. The
  honest read is a *range* whose level tracks BMI, sex, age and recruitment setting.
  [inferred from @pursey2014foodaddiction]
- **Prevalence is descriptive — it moves NEITHER evidence state.** How *common* a YFAS diagnosis is
  says nothing about whether the construct is *valid* (Gordon's question) and nothing about whether it
  changes any *patient-important outcome*. A high prevalence of a self-report symptom count is not
  evidence that the underlying construct is real or that it harms anyone — the outcome state below
  stays **insufficient-evidence**, untouched. [inferred from @pursey2014foodaddiction]
- **NOT independent-E.** Pursey 2014 shares the Gearhardt/YFAS lineage with Schulte and Gordon (Gordon
  2018 cites Pursey as ref [34]); all three rest on the same instrument. Pursey adds a *different
  facet* (prevalence) to the same construct — a banked-C cluster extension, **not** a type-E
  independent convergence. No `[E-independent]` is claimed.
  [inferred from @pursey2014foodaddiction]

**Saturation.** With Pursey the *construct-description* cell — attribute prediction (Schulte),
construct validity (Gordon), prevalence (Pursey) — is **saturated** across three mutually
non-independent YFAS-lineage sources: a fourth YFAS-based descriptive source would add neither an
independent perspective nor a quality upgrade. What stays **unsaturated / never opened** is the
*outcome* cell (a food-addiction/HPF-exposure -> patient-important-outcome SR), which no held source
touches — see the G-gaps below.

<div class="recent-update" data-last-updated="2026-08-30"></div>

## Evidence state — contested construct, no outcome evidence `[insufficient evidence / contested]`

**Schulte 2015 is a single cross-sectional survey with self-report YFAS; it carries the *attribute*
finding, not the construct's validity and not any patient-important outcome.** Gordon 2018 supplies
the construct-validity layer and Pursey 2014 the prevalence layer (both added 2026-08-30) — see the
sections above — but **both leave the outcome state exactly where it was: insufficient-evidence.**
Validity and prevalence are descriptive/appraisal facets of the construct; neither is a
patient-important outcome, and neither licenses a decision-change about what to eat that was not
already reachable from the ordinary *highly processed foods drive overconsumption* reasoning.

- The whole "person x substance" addiction frame is **assumed by the paper, not tested** — Schulte
  studies which attributes predict a YFAS score *given* the frame. Whether "food addiction" is a
  valid distinct construct (vs a re-description of binge eating, vs a label for high palatability +
  overconsumption) is a **live open question**, not settled here.
- The authors are consistently hedged: «preliminary evidence», «may share characteristics with drugs
  of abuse», "food addiction" in scare-quotes throughout. The finding is that highly processed foods
  «appear to be particularly associated with "food addiction"»
  [@schulte2015addictive] — an association with a
  self-report construct, NOT a demonstration that these foods ARE addictive.
- **Symmetric-standards / fad-bar:** an *engineered to be addictive* claim gets the same bar as any
  fad — being controversial, discussed, or intuitively compelling is not a pass. On present evidence
  the construct is **insufficient-evidence**, and no decision (what to eat, for whom) turns on it
  that is not already reachable from the ordinary *highly processed foods drive overconsumption*
  reasoning. The animal-model backdrop (sugar bingeing -> tolerance/withdrawal) is **rodent, not
  human** — directional at most (transportability caveat).

[inferred from @schulte2015addictive]

<div class="recent-update" data-last-updated="2026-08-30"></div>

## Gaps and open questions

- **Construct-validity is adjudicated by a gold SR (Gordon 2018) and prevalence by a gold SR/MA
  (Pursey 2014, landed 2026-08-30) — see the construct-validity and prevalence sections above.**
  Gordon appraised 52 studies across 35 articles against eight addiction characteristics and
  *generally* supports the construct, on the weak/animal-heavy/bias-flagged base detailed above;
  Pursey pooled 25 studies (196,211 participants) to a clinically-weighted 19.9% prevalence that its
  own authors caveat as higher than a general population would show. Schulte, Gordon and Pursey all
  share the Gearhardt/YFAS lineage (Gordon's evidence base literally includes Schulte [13]; Gordon
  cites Pursey as ref [34]) -> **NOT independent-E** (a shared author/instrument/study defeats
  independence); their agreement is shared-lineage coherence, not independent convergence. The
  construct-*description* cell (attribute / validity / prevalence) is now **saturated**; the *outcome*
  cell below is not.
- **G-gap — no food-addiction (or HPF) -> patient-important-outcome SR exists.** There is no held
  pooled analysis linking a YFAS-defined addictive-eating exposure (or the implicated food
  attributes) to weight gain, T2D, or mortality *as an addiction-specific pathway* distinct from
  ordinary overconsumption. Until one exists the construct cannot enter the
  [[Layer 1 - Ranking Interventions for a Stratum]] hierarchy as a sized lever. — an
  addictive-eating/HPF-exposure -> hard-outcome analysis.
- **G-gap — no measured addictive response.** Schulte measures reported *perceptions*; whether the
  hallmark addictive processes (tolerance, withdrawal, neural reward dysregulation) actually fire in
  humans to these foods is unstudied here — the authors call for future work measuring biological
  responses and observing eating behaviour directly.
- **Not a joined issue with the overconsumption mechanism (yet).** Whether "addiction" adds anything
  over the eating-rate / energy-density / palatability channels that already explain UPF
  overconsumption (-> [[Ultra-Processed Food and Health Outcomes]]) is an **open question**, not a
  filed tension — the construct and the mechanistic channels have not been tested against each other.

<div class="recent-update" data-last-updated="2026-08-30"></div>

## Self-critique `[run 2026-08-30, Pursey 2014 prevalence weave, before commit]`

- **Over-claim check (the prevalence trap):** the 19.9% is reported *and immediately bounded* — the
  transportability caveat is Pursey's own next sentence (predominantly OW/OB females from clinical
  settings; likely higher than a nationally representative general population), and the page states
  the number sits toward the high end of a general population, contrasts it with Schulte's own
  6.7%/10.2%, and frames prevalence as sample-dependent (report a range, not a point). No bare
  *19.9% of people are food-addicted* is asserted. The number-trace holds: every figure (19.9,
  24.9/11.1, 12.2/6.4, 22.2/17.0, 4.0/1.7, 196,211, 25) is inside a cited Pursey quote.
- **Evidence-state discipline:** prevalence is filed as a **descriptive fact that moves neither
  evidence state** — not validity (Gordon), not any patient-important outcome. The page explicitly
  keeps the outcome state at insufficient-evidence after Pursey, blocking the *it's common, therefore
  it matters* inflation.
- **The beyond-summary move stays the two-evidence-states separation (A/C):** Pursey extends the
  construct-*description* cluster with a third facet (prevalence) alongside attribute (Schulte) and
  validity (Gordon) — a banked-C cluster extension. It does not clash with the others (no D) and is
  not independent of them (no E).
- **Independence:** no `[E-independent]` written. Pursey shares the Gearhardt/YFAS lineage with
  Schulte and Gordon (Gordon cites Pursey as ref [34]); all three rest on the same instrument.
  Agreement is shared-lineage coherence, flagged in the prevalence and gaps sections.
- **Saturation verdict recorded:** the construct-description cell is saturated across three
  non-independent YFAS sources; the outcome cell was never opened and stays a G-gap. This is the
  stopping rule made explicit — a fourth YFAS-descriptive source adds neither perspective nor upgrade.
- **Counter-passage read:** Pursey's discussion (chunk 02) and results/Table 4 (chunk 01) were read
  end-to-end; the source's *own* general-population caveat is reported rather than suppressed, which is
  what makes the transportability point EXTRACTED, not merely INFERRED.
- **Confidence:** stays `low` — a gold prevalence SR/MA describes *how common* the self-report
  construct is in clinically-enriched samples; it adds no independent backing, no pooled outcome
  magnitude, and no patient-important-outcome evidence. Descriptive breadth does not lift a page whose
  outcome state is still insufficient.

## References

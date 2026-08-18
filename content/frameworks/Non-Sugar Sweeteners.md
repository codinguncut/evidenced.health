---
type: framework
question: Should non-sugar (artificial) sweeteners be used to control weight or reduce NCD risk — and against which comparator?
aliases: [NSS, Artificial Sweeteners, Non-Sugar Sweeteners, Non-Nutritive Sweeteners, Low-Calorie Sweeteners, Sugar Substitutes, Aspartame, Sucralose, Saccharin, Stevia, Acesulfame K]
authors: [World Health Organization (org); Suez, Jotham; Segal, Eran; Elinav, Eran; Debras, Charlotte; Touvier, Mathilde; Riboli, Elio (IARC Monographs Working Group); Joint FAO WHO Expert Committee on Food Additives (org)]
sources: [WHO - Non-Sugar Sweeteners 2023, Suez - Non-Nutritive Sweeteners Glucose Tolerance 2022, Debras - Artificial Sweeteners Cancer NutriNet 2022, IARC - Aspartame Carcinogenicity 2023, JECFA - Aspartame Safety Evaluation 2023]
cluster: sugars-sweeteners
confidence: low
relationships:
  related_to:
    - Free Sugars Intake
    - Surrogate Outcomes
    - The U-Shaped Association Artifact
    - Continuous Glucose Monitoring as a Health Intervention
    - Certainty of Evidence vs Strength of Recommendation
created: 2026-07-29
updated: 2026-08-18
self_critiqued: 2026-08-08
---

WHO's 2023 NSS guideline. The whole verdict turns on two moves: **the comparator decides the effect**,
and **the discordance between short-term trials and long-term cohorts is left genuinely open** — not
resolved either way. NSS are defined as «all synthetic and naturally occurring or modified non-nutritive
sweeteners that are not classified as sugars» (acesulfame K, aspartame, sucralose, saccharin, stevia,
neotame, cyclamates, advantame); sugar alcohols/polyols are excluded.
[@who2023nonsugar]

## The recommendation

> «WHO suggests that non-sugar sweeteners not be used as a means of achieving weight control or reducing
> the risk of noncommunicable diseases (conditional recommendation).»
[@who2023nonsugar]

- **Conditional recommendation, LOW certainty overall** — both stated plainly: «The recommendation is
  based on evidence of low certainty overall». Read them together — this is a *suggestion against* on
  weak evidence, not a *strong recommendation against*. It says the expected value of using NSS for
  weight control is not positive on current evidence, **not** that NSS are demonstrated to harm.
  [@who2023nonsugar]
- **Scope guard — does NOT apply to people with existing diabetes** (excluded from the reviewed
  evidence), and does not apply to NSS in medicines/hygiene products. Weight control means both weight
  *loss* in overweight/obesity and *preventing* unhealthy gain.
  [@who2023nonsugar]
- **Class-level, not per-sweetener.** The recommendation covers NSS «as a class of compounds», because
  «the evidence is currently insufficient to make recommendations for individual NSS» — even though each
  has a distinct structure and «may have different physiological effects in humans». So a finding on
  saccharin or aspartame is not automatically a finding on stevia. `type-B` (one label, chemically
  distinct objects). [@who2023nonsugar]

## The comparator IS the effect (adults, RCTs)

The single most important reading of the trial evidence: NSS only lowers weight **when it displaces
sugar**, and the effect shrinks toward null the closer the trial gets to the real-world question of
*replacing* sugar with NSS.

```yaml
effect_measure: body weight MD -0.71 kg (95% CI -1.13 to -0.28), 29 RCTs, n=2433; BMI -0.14 kg/m2 (-0.30 to 0.02), ns
population_and_comparator: adults; higher vs lower/no NSS in any manner (pooled across comparators)
outcome: body weight / BMI (surrogate for sustained-weight / NCD outcomes — see below)
uncertainty: Low certainty (RCTs); most trials <=3 months
certainty: Low
confidence: low
```
[@who2023nonsugar]

The pooled -0.71 kg dissolves once the comparator is pinned:

- **vs free sugars → largest effect.** «with the largest effects when NSS were compared with sugars. However, NSS compared with water showed no effect on body weight and a non-significant increase in BMI».
- **vs water / nothing / placebo → no effect.** «NSS compared with water showed no effect on body
  weight and a non-significant increase in BMI»; «When NSS were compared with nothing/placebo or water …
  no effects on body weight or BMI were observed.»
- **As an actual sugar *replacement* → attenuates to null.** In the RCTs that instructed habitual sugar
  consumers to switch to NSS versions, «the effect on body weight was significantly weakened … and an
  effect on BMI was no longer observed» — quantified as body weight MD **-0.61 kg (95% CI -1.28 to
  0.06), non-significant**, BMI **-0.01 (-0.38 to 0.35)**.
  [@who2023nonsugar]

**Mechanism is displacement, not the molecule.** The weight effect «is mediated at least in part by
lower energy intake as a result of decreased free sugars intake, rather than primarily by an inherent
property of NSS» — a significant weight/BMI difference appeared «only … in trials that reported a
reduction in energy intake, and energy intake was only significantly different in the arms of trials
that compared NSS with free sugars». Energy intake fell -569 kJ/day (95% CI -859 to -278) and sugars
intake -38.4 g/day (-57.8 to -19.1) — **but only vs sugar, not vs water/placebo.**
[@who2023nonsugar]

## The RCT-vs-cohort discordance (adults)

The signature tension in the whole file: short-term trials show a small benefit; long-term
observational cohorts show the opposite-signed associations with hard disease.

| Outcome | RCT (short-term) | Cohort (long-term; \~13 yr AVERAGE follow-up, range 2 to >30 yr) | Cohort certainty |
|---|---|---|---|
| Body weight | MD **-0.71 kg** (-1.13 to -0.28) | MD -0.12 / -0.01 kg, ns | Very low |
| BMI | -0.14 kg/m2, ns | **+0.14** (0.03 to 0.25) | Very low |
| Incident obesity | — | **HR 1.76** (1.25 to 2.49) — a 76% higher risk | Low |
| Type 2 diabetes (beverages) | glucose/insulin/HbA1c all null | **HR 1.23** (1.14 to 1.32) | Low |
| Type 2 diabetes (tabletop) | — | **HR 1.34** (1.21 to 1.48) | Low |
| CVDs | BP / LDL null in RCTs | **HR 1.32** (1.17 to 1.50) | Low |
| Stroke | — | **HR 1.19** (1.09 to 1.29) | Low |
| CVD mortality | — | **HR 1.19** (1.07 to 1.32) | Low |
| All-cause mortality | — | **HR 1.12** (1.05 to 1.19) | Very low |
| Cancer (any) | — | HR 1.02 (0.95 to 1.09) — **null** | Very low |
| Cancer mortality | — | HR 1.02 (0.92 to 1.13) — **null** | Very low |
| Bladder cancer (saccharin, case-control) | — | OR 1.31 (1.06 to 1.62) | Very low |

[@who2023nonsugar]

**Two things the table says on its own:**

- **The RCT biomarkers are flat.** Fasting glucose MD -0.01 mmol/L (-0.05 to 0.04, Moderate), fasting
  insulin -0.49 pmol/L (-4.99 to 4.02), HbA1c 0.02%, LDL 0.03 mmol/L, systolic BP -1.33 mmHg (ns) — no
  short-term cardiometabolic signal in either direction. The insulin/glucose route is *quiet*, which is
  why a CGM sees nothing (-> [[Continuous Glucose Monitoring as a Health Intervention]]).
- **Cancer is null in cohorts** — the overall-cancer association is flat (HR \~1.02). The saccharin-bladder
  case-control signal is the exception, at very low certainty. The aspartame/cancer *hazard* question is
  **not in this guideline** (see gap below).

## How WHO handles the discordance — the load-bearing appraisal point

This is where symmetric standards bite: WHO does **not** wave the cohorts away as reverse causation, and
it does not accept them as proven harm either. It ran the check and returned a *partial* verdict.

- **Why short-term weight loss is not banked as benefit:** «weight loss and maintenance of a healthy
  weight must be sustained over the long term to have a meaningful impact on health», so «evidence of
  minor weight loss or reduced BMI over several months or less … does not represent a health benefit».
  The trial benefit is on a **surrogate** (short-term weight), and WHO declines to let it stand for the
  sustained outcome (-> [[Surrogate Outcomes]]). «The discordant results between the RCTs and prospective
  cohort studies suggest that the small amount of weight loss … in short-term experimental settings may
  not be relevant to … long-term NSS use in the general population.»
  [@who2023nonsugar]
- **The reverse-causation check was RUN — and the association survived it (weakened).** Reverse
  causation here = «those already at elevated risk of disease initiated or increased use of NSS because
  of their risk status, rather than NSS leading to increased risk in otherwise healthy or low-risk individuals» (people already heavy/dysglycaemic switch *to* sweeteners *because* of their
  condition). Study authors attacked it: adjusting for BMI, stratifying by weight, excluding those who
  lost weight before baseline, and dropping early follow-up years. The result was mixed — «some results
  were attenuated, some were strengthened» — but «in the majority of studies, particularly for type 2
  diabetes, associations persisted … in fully adjusted models». WHO's conclusion:

  > «It was concluded that, although reverse causation and residual confounding may be contributing
  > factors, the available evidence suggests that the associations observed between NSS use and health
  > outcomes in observational studies cannot be dismissed as being solely a result of reverse causation
  > or residual confounding.»
  [@who2023nonsugar]

- **The conservative move.** «Because of lack of certainty about the overall balance … including the
  possibility that reverse causation may have contributed to one or more of the associations …, a
  conservative approach was taken, leading to a conditional recommendation.» The uncertainty about *which
  direction the cohort arrow points* is exactly what makes the recommendation conditional rather than
  strong. [@who2023nonsugar]

**The honest read (symmetric standards).** Do not report this as *the cohorts are just reverse
causation* — WHO explicitly refused that framing. Nor as *NSS cause diabetes and CVD* — the certainty is
Low/Very-low and the RCT biomarkers are flat. The defensible statement is: *the long-term association is
unexplained, cannot be fully attributed to reverse causation, and is not established as causal.* This is
the [[The U-Shaped Association Artifact]] machinery applied and returning **not-dissolved**, which is a
different outcome from alcohol (dissolved) — file it there.

## The microbiome route is now evidenced — and it is CAUSAL (Suez 2022) `[2026-07-29]`

Suez is the worked microbiome-causation template the fabric's microbiome nucleus
([[Gut Microbiome and Health]]) holds up as the standard — a composition shift followed through to an
outcome and confirmed by transplant. WHO named this gap (a sweetener-microbiome RCT was the awaited
design — the wiki's paraphrase, not WHO's words). Suez 2022
(Cell) fills it with a **randomized
controlled trial** — 120 NNS-avoiding healthy adults given saccharin, sucralose, aspartame or stevia for
2 weeks at «doses lower than the acceptable daily intake», vs vehicle-glucose or no-supplement controls —
and it changes the reverse-causation picture materially:

- **NNS are not inert.** Each of the four «distinctly altered stool and oral microbiome and plasma metabolome, whereas saccharin and sucralose significantly impaired glycemic responses» vs controls. [@suez2022]
- **Saccharin and sucralose «impaired glycemic responses»**; aspartame and stevia shifted the microbiome
  but did not significantly move glucose in the window — the class splits, vindicating WHO's `type-B`
  refusal to treat NSS as one object. [@suez2022]
- **The effect is causal, not reverse causation.** Germ-free mice colonized with stool from high- vs
  low-responding humans reproduced the donors' glycemic responses — a microbiome-transfer causal step. And
  it is **personalized**: responders and non-responders within each arm.
  [@suez2022]

**What this does and does NOT do to WHO's open verdict (BLOCKING parameter table — different quantities):**

| Parameter | WHO cohort signal | Suez 2022 | Same quantity? |
|---|---|---|---|
| Design | prospective cohort (observational) | **RCT + gnotobiotic causal transfer** | **NO** |
| Exposure contrast | habitual high vs low NSS users | randomized 2-week NNS vs control | **NO** |
| Endpoint | **hard outcomes** (T2D HR 1.23, CVD 1.32, mortality 1.12) | **short-term glycemic response** (OGTT/CGM) | **NO — outcome vs surrogate** |
| Causal status | reverse causation *cannot be dismissed*, not confirmed | **causal** (microbiome transplant) on the surrogate | **NO** |
| Population effect | population association | **personalized** (responders only) | **NO** |

**Defensible synthesis (type F — refinement of WHO's OPEN verdict):** Suez shows a *real causal pathway*
(NNS -> microbiome -> glycemia) exists in humans, so the long-term cohort signal is **less dismissible as
pure reverse causation** — WHO's refusal to wave the cohorts away now has a mechanism behind it. But Suez
does **not** confirm the hard-outcome harm: its endpoint is a **2-week glycemic surrogate**, the effect is
**personalized**, and causal-on-the-marker is not causal-on-diabetes ([[Surrogate Outcomes]]). So the
honest update is *a causal glycemic mechanism is now demonstrated for saccharin/sucralose; the T2D/CVD/
mortality outcomes remain unproven* — the OPEN verdict narrows, it does not close.

## The aspartame / cancer signal WHO deferred (Debras cohort + narrative review) `[2026-07-29]`

WHO deferred the aspartame/cancer question to IARC/JECFA. Two lower-tier sources now populate it — without
resolving it:

- **Debras 2022 (NutriNet-Sante, 102,865 adults):** total artificial sweeteners -> «overall cancer (HR for
  higher consumers versus non-consumers = 1.13 [95% CI 1.03 to 1.25], P-trend = 0.002)»; aspartame HR 1.15
  (1.03-1.28), acesulfame-K 1.13 (1.01-1.26), breast cancer 1.22 (1.01-1.48).
  [@debras2022] **But this is observational,
  small in absolute terms, and — importantly — DISCORDANT with WHO's own cohort table, where overall cancer
  was NULL (HR \~1.02).** So the cohort cancer evidence is internally inconsistent (a null pooled estimate vs
  a positive single newer cohort), and Debras is the same self-selected, self-reported NutriNet-Sante cohort
  as the organic-cancer study ([[Organic vs Conventional Food]]) — same healthy-user caveat.
- **Narrative safety review (Nutrients 2023):** EFSA's position is that «aspartame and its breakdown
  products are safe for human consumption at current levels of exposure»; the cancer association «is still
  highly controversial and under investigation». It adds the **contraindications** that matter at layer 3:
  **phenylketonuria (forbidden)**, seizures/neurological conditions (caution), pregnancy (restrict).
  [EXTRACTED (aspartame-safety-review-nutrients-2023) chunk 01] It is a *narrative* review — regulatory
  summary and contraindication list, not independent quantitative evidence.

## IARC 2023 — the primary hazard classification (now held) `[2026-08-04]`

The primary IARC hazard evaluation (Lancet Oncol summary of Monographs Vol 134) is now held directly —
not merely the reported label. IARC does **hazard identification** (can aspartame cause cancer at *any*
dose, is the hazard excludable?), never dose/risk.

- **Aspartame classified «possibly carcinogenic to humans» (Group 2B)** on **«limited»** evidence for
  cancer in humans, **«limited»** in experimental animals, and **«limited»** mechanistic evidence — the
  weakest positive tier, on limited evidence across all three streams.
  [@iarc2023]
- **The human signal is liver cancer (hepatocellular carcinoma).** Via ASB-as-proxy cohorts; in a
  10-European-country study each weekly 330 mL ASB serving carried a «6% increase in risk of
  hepatocellular carcinoma» (95% CI 3-9%). The comprehensively-assessed NutriNet-Sante cohort (= Debras
  above) reported breast/obesity-related/overall associations but **not consistent** across studies and
  **did not assess liver**. [@iarc2023]
- **Why it stayed "limited", not sufficient.** Despite positive findings in confounder-controlled
  studies, the Working Group concluded **«chance, bias, or confounding could not be ruled out»** with
  reasonable confidence. Animal evidence was positive but design-questioned (litter effects) — a
  minority favoured Group 2A on the animal data. Mechanistic: oxidative stress, inflammation,
  angiogenesis, raised rodent insulin, some limited genotoxicity.
  [@iarc2023]

**Hazard != risk, and 2B != "causes cancer" (`type-B` disambiguation).** Two distinctions the headlines
collapse, kept apart here:

- **Hazard vs risk.** IARC answers *could aspartame cause cancer under some conditions?* (hazard); it
  does **not** answer *does it, at the doses people consume?* (risk — JECFA's question). A Group-2B
  hazard flag is consistent with a "safe at normal intake" risk verdict; the two bodies answer different
  questions. The same hazard/risk split already recurs in the fabric for the IARC red-meat labels
  (processed = Group 1, red meat = Group 2A) -> [[Red Meat]].
- **2B is the weakest positive tier.** 2B «possibly» (limited evidence) sits below 2A «probably»
  (methyleugenol, in the same evaluation, on sufficient animal + strong mechanistic evidence) and below
  Group 1 «carcinogenic». Reading 2B as "aspartame causes cancer" inflates a limited-evidence,
  can't-exclude-confounding hazard signal into a demonstrated dietary risk. Symmetric standards cut both
  ways: it is a *finding* (a positive hazard classification, not dismissible), but a **weak** one.
  [inferred from @iarc2023]

## JECFA 2023 — the risk assessment (now held) `[2026-08-04]`

The regulatory **risk** counterpart, released the same day as IARC under the same WHO umbrella, is now
held directly. JECFA answers *is realistic dietary intake unsafe?* (dose/risk), not IARC's *can it cause
cancer at any dose?* (hazard).

- **ADI 0-40 mg/kg bw/day, reaffirmed.** «The Committee concluded that the data evaluated at the present
  meeting indicated no reason to change the previously established ADI of 0-40 mg/kg bw for aspartame».
  It rests on a «no-observed-adverse-effect limit (NOAEL) of 4000 mg/kg bw per day, the highest dose
  tested, in a 104-week study in rats», with a 100-fold uncertainty factor (4000 / 100 = 40).
  [@jecfa2023]
- **The mechanistic reason JECFA is unconcerned — no systemic exposure.** «Aspartame is fully hydrolysed
  in the gastrointestinal tract ... into three metabolites: phenylalanine, aspartic acid and methanol.
  The Committee therefore reaffirmed that there is no systemic exposure to aspartame after dietary
  exposure»; those metabolites «enter the systemic circulation at levels lower than those derived from
  consumption of common foods». The parent compound never reaches the bloodstream; the breakdown
  products are the same as, and lower than, those from ordinary food.
  [@jecfa2023]
- **First-ever dietary-exposure assessment — the decision magnitude.** «Dietary exposure estimates ...
  at the mean of up to 10 mg/kg bw per day for children and 5 mg/kg bw per day for adults, and for high
  dietary exposures up to 20 mg/kg bw per day for children and 12 mg/kg bw per day for adults» «do not
  exceed the ADI», so «dietary exposure to aspartame does not pose a health concern».
  [@jecfa2023] So even a *high*-consuming adult (12
  mg/kg/day) reaches only \~30% of the ADI, and \~333x below the animal NOAEL; the mean adult \~12%.
  [inferred from @jecfa2023]
  For a 70 kg adult the ADI equals \~2,800 mg/day; at \~180-200 mg aspartame per can of diet soda that is
  on the order of a dozen-plus cans per day sustained —
.

**Same evidence, opposite headline — a distinction, NOT a joined tension (parameter table).** The
public reading («IARC says cancer, JECFA says safe») looks like a contradiction; the table shows the two
bodies agree on every *shared* quantity and differ only in the *question* each asks.

| Parameter | IARC (hazard) | JECFA (risk) | Same quantity? |
|---|---|---|---|
| Question answered | can aspartame cause cancer at *any* dose? (hazard) | is realistic dietary intake unsafe? (ADI / dose-risk) | NO — different question by design |
| Human cohort cancer evidence | «limited» evidence, liver/HCC; «chance, bias, or confounding could not be ruled out» | «not convincing»; «Reverse causality, chance, bias and confounding ... cannot be ruled out»; «a consistent association ... was not observed» | YES — same cohorts, same caveat |
| Soffritti/Ramazzini animal studies | positive but «limited» (design questioned, litter effects) | «of uncertain relevance and therefore cannot be used for the risk assessment» (natural-death protocol confounds with ageing) | YES — same studies, both discount |
| Output / verdict form | Group 2B classification (a hazard tier) | ADI 0-40 mg/kg reaffirmed; exposure <=12 mg/kg/day | NO — different output type |

Where the two bodies assess the *same* quantity (human cohort evidence + its caveat; the Soffritti
studies) they **agree** — same data, same limitations. Their bottom lines diverge only because they
answer **different questions** with different output types. Per the not-joined checks — (i) no shared
quantity is in opposition, (ii) different scope, consistent once matched — this is a **distinction**,
not a `tension`. **The hidden insight:** the apparent contradiction dissolves entirely under the
hazard-vs-risk frame — a Group-2B *hazard* flag on limited, confounding-not-excludable evidence is fully
consistent with a *risk* verdict that realistic intake is far below the safe bound. This reinforces (does
not clash with) the `type-B` hazard-vs-risk disambiguation above.
[inferred from @iarc2023; @jecfa2023]
CASHED `[2026-08-04]`.

## Decision relevance — substitution frame

- **vs sugar:** a small, short-lived weight benefit that fades to null in true-replacement trials. Better
  than sugar on weight, marginally, in the short run.
- **vs water / unsweetened:** no benefit. WHO's preferred alternative is explicit: «Replacing free sugars
  in the diet with sources of naturally occurring sweetness, such as fruits, as well as minimally
  processed unsweetened foods and beverages … should be the preferred alternatives». Swapping sugar for
  NSS leaves «the overall quality of the diet … largely unaffected».
  [@who2023nonsugar]
- **NSS are «not essential dietary factors and have no nutritional value»** — so the null-benefit finding
  carries no offsetting cost of *not* using them. [@who2023nonsugar]
- **Layer-3 caveat:** for a person whose realistic alternative is sugar-sweetened soda and who will not
  switch to water, NSS is still the better of *those two* — the guideline optimizes a population question
  (don't build policy on NSS), not this individual's next drink.

## Other strata

- **Children:** more limited; one good RCT showed body-fatness reductions, but pooled BMI z-score showed
  no effect (Moderate certainty); overall certainty across adult+child data judged Low. Two stevia RCTs
  showed lower dental-caries indicators.
- **Pregnancy:** higher NSS use associated with **preterm birth, OR 1.25 (1.07 to 1.46), Low certainty**
  (three cohorts, dose-response in two); offspring birth-weight/adiposity associations inconsistent.
  Extrapolated from adult evidence «without downgrading for indirectness».
  [@who2023nonsugar]

## Named gaps

- **Aspartame / cancer HAZARD (IARC 2023) + RISK (JECFA 2023) — BOTH CASHED `[2026-08-04]`.** The IARC
  hazard evaluation (Group 2B, limited evidence, liver-cancer signal, confounding-not-excludable) and the
  JECFA risk assessment (ADI 0-40 mg/kg reaffirmed; realistic exposure \~1/3 of the ADI) are now both held
  directly — see the IARC and JECFA sections above. WHO NSS 2023 had deferred hazard/ADI to IARC/JECFA.
  The hazard-vs-risk relation resolved as a **distinction, not a tension** (parameter table above): the
  two bodies agree on every shared quantity and differ only in the question each answers.
- **Gut-microbiome / glycaemic route — CASHED `[2026-07-29]` by Suez 2022** (RCT + gnotobiotic causal
  transfer): a causal NNS -> microbiome -> glycemia pathway is now demonstrated for saccharin/sucralose, on
  a short-term surrogate, personalized (see the microbiome section above). Appetite / cravings routes remain
  *insufficient evidence*.


## Limits

- **Now six sources.** IARC 2023 (gold) is a **hazard identification on limited evidence** and JECFA 2023
  (gold) a **risk assessment** — together they close the aspartame/cancer question WHO deferred, but
  neither is a *new hard-outcome* estimate: IARC does not raise hard-outcome certainty, and JECFA's
  reassurance rests on a *no-adverse-effect* read of the same weak evidence plus the no-systemic-exposure
  mechanism, not a demonstrated benefit. The other additions are surrogate/observational: Suez is an RCT
  on a **short-term glycemic surrogate** (personalized); Debras is **observational** and discordant with
  WHO's null; the aspartame review is **narrative**. So the *hard-outcome* certainty on whether NSS help
  is unchanged — `confidence: low` holds. What the aspartame pair adds is the cancer *hazard* + *risk*
  cleanly held and the hazard-vs-risk disambiguation completed as a distinction.
- **Open loop (R1):** this grades the sources' reasoning for coherence and source-fidelity; whether NSS
  actually move a hard outcome is a validity fact no operation here can see.
- **Independence:** Suez (Weizmann RCT group) and Debras (NutriNet-Sante) are genuinely independent of WHO
  and of each other — but they answer *different* questions (surrogate mechanism vs cohort cancer), so this
  is type-F refinement, not type-E convergence on one claim. WHO NSS stays NON-independent of the WHO
  free-sugars family ([[Free Sugars Intake]]). **IARC and JECFA are NOT independent of each other** —
  same WHO umbrella, same evidence base, released the same day — so their agreement where they overlap is
  shared-source, not type-E backing.



## Self-critique `[run 2026-07-29, second pass — the Suez/Debras/review additions]`

- **Over-claim check.** Suez is explicitly NOT read as confirming the hard-outcome harm — the parameter
  table's all-NO column gates it to *causal on a surrogate, personalized*; the OPEN verdict is said to
  *narrow, not close*. Debras is flagged as discordant with WHO's own null cohort, not as proof of cancer
  risk. No superlative scoped to the vault.
- **Laundered-E avoided.** The additions are typed F (refinement), not E — Suez and Debras answer different
  questions and neither is independent *backing for one claim*; stated in Limits.
- **Reverse-causation handling.** The one genuinely new causal fact (microbiome transfer) is used only for
  the surrogate it measured; the leap to T2D/CVD is explicitly withheld.
- **Symmetric standards.** Debras (a signal in the "sweeteners are bad" direction) is held to the same
  observational/healthy-user discount as the organic-cohort was — not waved through because it fits the
  cautionary prior.

## Self-critique `[run 2026-08-04, third pass — the IARC 2023 hazard addition]`

- **No inflation of 2B.** The IARC section states Group 2B is the *weakest* positive tier on *limited*
  evidence and that «chance, bias, or confounding could not be ruled out» — explicitly not read as
  "aspartame causes cancer". Symmetric standards named in both directions (a finding, but a weak one).
- **Hazard-vs-risk relation resolved as a DISTINCTION on the JECFA ingest `[2026-08-04]`** — not a
  premature `tension` at the IARC pass, and (correctly) not a tension at all: the JECFA parameter
  table shows the bodies agree on every shared quantity, so the not-joined checks fire. Recorded as a
  distinction, not a joined clash.
- **Type-B, not fabricated independence.** The 2B<2A<1 ordering and hazard/risk split are marked
 (read off the classifications/grades in the one source), not laundered as
  cross-source convergence. IARC and Debras are *not* independent backing for one claim — IARC's human
  evidence explicitly rests partly on the NutriNet-Sante (= Debras) cohort, so no type-E claimed.
- **Provenance quality.** The source PDF carries embedded line-numbers; long verbatim quotes avoided,
  numerics stated as faithful `[EXTRACTED]` paraphrase, short clean spans (`«possibly carcinogenic to
  humans»`, `«hepatocellular carcinoma»`, `«6% increase in risk of hepatocellular carcinoma»`) verified
  to locate via `cite.py`.

## Self-critique `[run 2026-08-04, fourth pass — the JECFA 2023 risk addition]`

- **Distinction, not a manufactured tension.** The parameter table was built before the prose: the two
  bodies agree on every shared quantity (human cohort evidence + caveat; the Soffritti animal studies)
  and differ only in question + output type. The not-joined checks (i) + (ii) fire, so no `tension`
  was filed — the predicted, correct outcome for a deliberately-complementary pair. No fake friction to
  fill a quota.
- **Independence not laundered.** IARC and JECFA are explicitly flagged NON-independent (same WHO
  umbrella, same evidence base, same day) — their agreement is shared-source, not type-E. No
  `[E-independent]` token claimed.
- **No over-claim on safety.** JECFA's verdict is stated as *no convincing evidence of adverse effect at
  realistic intake* (a risk-side null on the same weak evidence + the no-systemic-exposure mechanism),
  NOT as proof aspartame is beneficial or as raising the hard-outcome certainty on whether NSS help.
  `confidence: low` unchanged. No superlative scoped to the vault.
- **Decision magnitude honestly bounded.** The %-of-ADI and NOAEL-fold ratios and the 2,800 mg/day figure
  are marked arithmetic on JECFA's quoted exposure/ADI/NOAEL numbers; the diet-soda-can
  illustration is explicitly flagged as NOT in the JECFA summary (added for grip, not attributed).
- **Symmetric standards.** The reassuring JECFA verdict gets the same scrutiny as the cautionary
  Debras/IARC signals — its ADI is shown to rest on a single old rat NOAEL + a 100-fold factor, and its
  cancer null on the *same* confounding-not-excludable cohorts IARC read the other way.


## Appraising this observational evidence — the instrument `[2026-07-31]`

The sweetener cancer and glucose signals held on this page (the NutriNet-Sante cohort and the Suez
RCT) are **observational** in the cancer arm; **ROBINS-I** ([[Risk of Bias Assessment Tools]]) is the
appraisal instrument, with domain 1 (confounding / reverse causation — people switch to NSS *because* of
weight or dysglycaemia) and domain 6 (measurement) the likely caps. Re-appraisal candidate on the
RoB-tools page; not re-graded here.

## References

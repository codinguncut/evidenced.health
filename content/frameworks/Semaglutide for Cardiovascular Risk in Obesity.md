---
type: framework
question: For someone with obesity, does treating it with semaglutide reduce cardiovascular events — and does that evidence reach primary prevention?
aliases: [Semaglutide, GLP-1 Cardiovascular, SELECT Trial, Wegovy CVD, GLP-1 Receptor Agonist Obesity, Obesity Pharmacotherapy CVD]
authors: [Lincoff, A Michael; Brown-Frandsen, Kirstine; Colhoun, Helen M; Deanfield, John; Ryan, Donna H; Wilding, John P H; Batterham, Rachel L; Van Gaal, Luc F; Lingvay, Ildiko; Kushner, Robert F; Yang, Kaijie; Li, Yongze; Jastreboff, Ania M; Aronne, Louis J; Nong, Kailei; Li, Sheyu]
sources: [Lincoff - Semaglutide and Cardiovascular Outcomes SELECT 2023, Wilding - Semaglutide STEP-1 Weight Management 2021, Wilding - Semaglutide STEP-1 Withdrawal 2022, Yang - GLP-1 Noncardiometabolic Outcomes Umbrella 2026, Jastreboff - Tirzepatide Weekly Obesity SURMOUNT-1 2022, Nong - Obesity Drugs Comparative Network Meta-Analysis 2026]
cluster: glp1
confidence: medium
relationships:
  related_to:
    - Fatty Liver MASLD and Weight Loss
    - Baseline Risk and the Relative-Absolute Split
    - SCORE2 Baseline Risk and the ESC Treatment Thresholds
    - Lifetime Benefit - The Frame for Younger Adults
    - Layer 1 - Ranking Interventions for a Stratum
    - Does Weight Loss Reduce Cardiovascular Events
    - Cardiometabolic Interventions and Hard CV Outcomes in Low-Risk People
    - Surrogate Outcomes
    - Weight-Loss Maintenance and Metabolic Adaptation
    - GLP-1 and Lean Mass
    - Semaglutide and Kidney Outcomes in Chronic Kidney Disease
created: 2026-07-28
updated: 2026-08-22
self_critiqued: 2026-08-22
---

The telos puts pharmacotherapy in scope because **a drug is often the realistic alternative to a
lifestyle change** — and for the biggest lever in an obese stratum (weight), semaglutide is now the
best-evidenced drug route. The SELECT trial (Lincoff, NEJM 2023) is the landmark: the **first**
demonstration that treating obesity pharmacologically reduces hard cardiovascular events. But it proved
this in **one population only**, and the population is not the one most of the wiki's low-risk strata
belong to. Both halves of that sentence are the finding.


[@lincoff2023]
## What SELECT proved, and the population it proved it in

A single large event-driven RCT (n=17,604), on top of standard secondary-prevention care (90% on
statins, 86% on antiplatelets):

> primary MACE (CV death, non-fatal MI, non-fatal stroke): «569 of the 8803 patients (6.5%)» on
> semaglutide vs «701 of the 8801 patients (8.0%)» on placebo — «hazard ratio, 0.80; 95% confidence
> interval, 0.72 to 0.90; P<0.001», a reduction «by 20%» over a mean 39.8 months.

Absolute risk reduction is **1.5 percentage points over \~3.3 years -> NNT \~67**
[inferred from @lincoff2023]. That is a real, incremental benefit **on top of** guideline therapy —
not instead of it.

**Who was enrolled fixes what the number means:** «patients 45 years of age or older who had preexisting
cardiovascular disease and a body-mass index... of 27 or greater but no history of diabetes». This is a
**secondary-prevention** population (prior MI, stroke, or symptomatic PAD), non-diabetic, with a placebo
event rate of 8% over 3.3 years (\~2.4%/yr).

## The primary-prevention gap — stated by the trialists themselves

This is the load-bearing limit, and it is not the wiki's inference — it is the paper's own:

> «An important limitation of this trial is that we included only patients with preexisting
> cardiovascular disease. The effects of semaglutide on primary prevention of cardiovascular events in
> persons with overweight or obesity but without previous atherosclerotic disease were not studied.»

So for an obese person **without** established atherosclerotic disease — low 10-year risk, or a zero
coronary-calcium score — the hard-outcome benefit of semaglutide is **not proven**. This is the
**insufficient-evidence** state, not the **no-effect** state (the two are kept distinct): SELECT gives
no reason to think the drug stops working in primary prevention, only that it was never tested there.

**The two trials bracket the hole precisely.** STEP-1 [@wilding2021] *is* a primary-prevention population (no CVD
required) — but its endpoint is weight and cardiometabolic surrogates, not events. SELECT *is* a
hard-outcome trial — but only in secondary prevention. So: primary prevention has strong **surrogate**
evidence and **zero hard-outcome** evidence; secondary prevention has the hard-outcome evidence. **No
trial delivers a hard-outcome benefit in primary prevention** — the gap is not for want of looking at
the drug, it is that the one relevant question has never been the endpoint of a trial in this
population.

**Two reasons the benefit would be smaller there even if the relative effect transported** — see
[[Baseline Risk and the Relative-Absolute Split]] and [[SCORE2 Baseline Risk and the ESC Treatment Thresholds]]:

1. **Absolute benefit scales with baseline risk.** A primary-prevention person at, say, 5% 10-year risk
   (\~0.5%/yr) sits roughly 5x below SELECT's placebo event rate. Apply the same HR 0.80 and the absolute
   reduction shrinks \~5-fold — from \~1.5 pp/3.3 yr toward a fraction of a percentage point. The relative
   effect is the fragile assumption; the absolute one is small by construction.
2. **The relative effect itself may not transport.** Mechanism (plaque already present vs not) differs
   between secondary and primary prevention; SELECT cannot speak to it.

## Confirmed vs widely-repeated — the hierarchical-testing catch

Only the **primary composite** is a confirmatory result. The pre-specified gatekeeping hierarchy tested
CV death next — «hazard ratio, 0.85; 95% CI, 0.71 to 1.01; P = 0.07» — which **failed the gate**, so
«superiority testing was not performed for the remaining confirmatory secondary end points». Everything
downstream is a point estimate, not a confirmed effect:

- **All-cause mortality «0.81 (0.71 to 0.93)»** and **heart-failure composite «0.82 (0.71 to 0.96)»** —
  directionally favourable, statistically **non-confirmatory**. *Semaglutide reduces mortality* is a
  common but unlicensed reading of this trial.
- **Non-fatal stroke «0.93 (0.74 to 1.15)» — not reduced.** (An aggregator SR of this literature was
  seen reporting stroke as the *strongest* effect; reading the trial contradicts it.)
- **Non-fatal MI «0.72 (0.61 to 0.85)»** and coronary revascularization «0.77 (0.68 to 0.87)» carry
  most of the composite.


[@lincoff2023]
## Weight loss: the drug route to the biggest lever

> body weight «-9.39» % vs «-0.88» % (difference «-8.51 (-8.75 to -8.27)» percentage points at week 104);
> waist circumference difference «-6.53» cm.

\~9% weight loss is the mechanism-adjacent reason this matters for [[Fatty Liver MASLD and Weight Loss]]
and for [[Layer 1 - Ranking Interventions for a Stratum]]: it is a **pharmacological route to the same
weight lever** a lifestyle programme targets. The trialists note that prior non-surgical approaches
reached weight loss «substantially lower than the mean 9.4% decrease observed with semaglutide» and had
«uniformly failed» to move CV outcomes — so the drug is not just another weight intervention, it is the
first to clear the bar. The drug and the lifestyle change are **not either/or** — same lever, different
route, combinable.


[@lincoff2023]
### STEP-1: the primary-prevention arm — a bigger number, on a surrogate

SELECT's 9.4% was measured in an older, established-CVD population. STEP-1 (Wilding, NEJM 2021) ran the
same drug in the population the wiki's obese strata actually resemble — «a body-mass index... of 30 or
greater (≥27 in persons with ≥1 weight-related coexisting condition), who did not have diabetes», mean
age 46, \~60% at BMI ≥35, only 2.5% with coronary artery disease — i.e. essentially **primary
prevention**, as an adjunct to lifestyle (a 500-kcal deficit plus 150 min/week of activity). Its
coprimary endpoint is **weight, a surrogate**, not events.

> mean body-weight change to week 68: «−14.9%» vs «−2.4%», difference «−12.4 percentage points»
> (95% CI −13.4 to −11.5); responders losing ≥10%: «69.1%» vs «12.0%»; ≥15%: «50.5%» vs «4.9%»;
> ≥20%: «32.0%» vs «1.7%».

Half the treated group lost ≥15% and a third lost ≥20% — the latter «approaching that reported 1 to 3
years after bariatric surgery». Waist fell «–9.42 cm» placebo-adjusted, SBP «–5.10» mmHg, CRP more than
halved, and fat mass fell more than lean mass.

**Do NOT read the 14.9% (STEP-1) vs 9.4% (SELECT) gap as *the drug works better in primary prevention*.**
The two trials differ on exactly the axes that move weight response, so the comparison is confounded:

| Parameter | SELECT (Lincoff 2023) | STEP-1 (Wilding 2021) | Same quantity? |
|---|---|---|---|
| Mean % body-weight change (treatment-policy, ITT) | «−9.39%» | «−14.85%» | Yes — same construct |
| Follow-up at measurement | week 104 | week 68 | No — different window |
| Population | established CVD, age 61.6, 72% male | no CVD required, age 46, 74% female | No — older/sicker vs younger |

The honest read is **\~15% in a primary-prevention obese adult, \~9% in an older secondary-prevention
one** — a population-and-window difference, not evidence of a prevention-setting effect on the drug.

Benefit separated «early after the initiation of treatment», before much weight was lost, so «more rapid
treatment-induced physiological changes beyond the magnitude of body-weight loss may have mediated at
least part of the cardiovascular benefit» — SBP fell «-3.31» mmHg and hsCRP «-37.82» % on top of high
statin use. Mechanism is explicitly **speculative** in the source; do not treat any one surrogate as the
transmission channel.


[@wilding2021]
## The adherence cost is part of the effect

An intervention not taken has no effect, and semaglutide has a real tolerability tax:

> AE-driven discontinuation «1461 patients (16.6%)» vs «718 patients (8.2%)» (P<0.001), predominantly
> gastrointestinal («880 patients (10.0%)» vs «172 patients (2.0%)»).

Counter-weight: **serious** adverse events were *lower* on semaglutide («33.4%» vs «36.4%»). And the
weight benefit reverses on stopping — so this is a **sustained commitment**, the same
*return-on-investment* framing [[Lifetime Benefit - The Frame for Younger Adults]] attaches to lifelong
preventive therapy: a longer horizon is a longer treatment duration, not only a larger gain.


[@wilding2022]
### Durability — two-thirds of the loss returns within a year off the drug

*Reverses on stopping* is not a hedge; the STEP-1 off-treatment extension **quantifies** it. When both
semaglutide 2.4 mg AND the lifestyle programme were stopped at week 68, participants «regained a mean of
11.6 percentage points (SD: 7.7) of body weight in the semaglutide arm versus 1.9 percentage points (SD:
4.8) in the placebo arm» over the following year — i.e. «participants regained two-thirds of their prior
weight loss, with similar changes in cardiometabolic variables»
[@wilding2022].

| Parameter (extension analysis set) | Week 68 (end of treatment) | Week 120 (1 yr off) | Same quantity? |
|---|---|---|---|
| Mean % body-weight change from baseline (sema) | «17.3%» loss | net «5.6%» loss | Yes — same construct, different timepoint |
| Regain over the off-treatment year (sema) | — | «11.6 percentage points» (≈2/3 of loss) | Yes |
| Holding ≥5% loss from baseline (sema) | 86.4% | «48.2%» | Yes — same threshold |» at week 68), NOT the Withdrawal 2022 extension the row is tagged to — the extension source contains only the 48.2%/22.6% week-120 figures (verified: 86.4 does not locate in the Withdrawal source; 48.2% of participants (95 of 197) IS the extension's week-120 semaglutide figure). Split the attribution: tag 86.4% to [@wilding2021] and add that slug to sources: (dual test — the row cites a distinct number from it). Route via a Lint/Revisit fabric pass. Surfaced by the GLP-1 Drugs compile.]

Cardiometabolic gains reverted too: «Cardiometabolic improvements seen from week 0 to week 68 with
semaglutide reverted towards baseline at week 120 for most variables» (SBP/DBP back to baseline; CRP,
HbA1c, lipids drifted back with only a small residual advantage) — and the trialists conclude «ongoing
treatment is required to maintain improvements in weight and health»
[@wilding2022]. Two decision consequences:

- **Adherence is the effect, over years not months.** A GLP-1 course is not a one-time correction that
  banks a permanent gain; it is a *maintained state* whose benefit decays on the timescale of stopping.
  The realistic comparator to a lifestyle change must price lifelong cost, tolerability and reversibility.
- **The regain is defended physiology, not relapse of resolve** -> [[Weight-Loss Maintenance and Metabolic Adaptation]]:
  removing the exogenous satiety signal lets the post-loss appetite-hormone deficit reassert — the same
  mechanism that makes *unaided* lifestyle maintenance fail. Note the caveat the source itself flags: the
  extension also **withdrew the lifestyle support** (unlike STEP-4, which kept it), so part of the rapid
  regain is the loss of *both* props, not the drug alone.


[@lincoff2023]
## Diabetes prevention — a secondary signal that fits the prediabetic stratum

Two-thirds of SELECT was prediabetic. Progression to diabetes was cut sharply:
progression to HbA1c >=6.5% «0.27 (0.24 to 0.31)». STEP-1 shows the same in its younger
primary-prevention population: among prediabetics, «84.1%» on semaglutide reverted to normoglycemia by
week 68 vs «47.8%» on placebo. For an obese, impaired-fasting-glucose person this is a distinct,
plausibly-relevant benefit — though on a **surrogate** (glycemic threshold), not a patient-important
outcome, and whether it lowers hard diabetes-related outcomes in primary prevention inherits the same
caveat.


[@jastreboff2022]
## Tirzepatide (SURMOUNT-1) — the class efficacy high-water, but surrogate-only and CV-untested

The best-evidenced *drug* on this page is semaglutide, but it is no longer the strongest **weight**
lever. **Tirzepatide** — a **dual GIP/GLP-1 receptor agonist** — takes off more weight than any prior
non-surgical agent. SURMOUNT-1 (Jastreboff, NEJM 2022) is its pivotal obesity RCT: n=2539 adults with a
BMI «of 30 or more, or 27 or more and at least one weight-re- lated complication, excluding
diabetes», once-weekly SC 5/10/15 mg vs placebo for 72 weeks. This is the **same primary-prevention,
non-diabetic obese population class as STEP-1** (mean age 44.9, BMI 38.0, no CVD required) — the
population most of the wiki's obese strata resemble.

**Exposure distinction — do NOT pool it under "GLP-1".** Tirzepatide adds a **second receptor axis**
rather than intensifying GLP-1 agonism: «the affinity of tirzepatide for GIP receptors was equal to the
affinity of native GIP for GIP recep- tors, whereas tirzepatide bound GLP-1 receptors with affinity
approximately five times weaker than native GLP-1». It is a *related-but-different* exposure from
semaglutide — the isolate/food-category discipline ([[Is the Food Category Doing Any Work]]) applies to
drug class too. So the page's standing caution — *do not generalize «GLP-1 class reduces CV events» from
one agent* — is now doubly warranted: tirzepatide differs in **receptor target** and has **no CV trial**.

**The magnitude (weight, a surrogate).** Treatment-regimen estimand: «−15.0%», «−19.5%», «−20.9%»
(5/10/15 mg) vs «−3.1%» placebo; placebo-adjusted «−11.9 per- centage points» (5 mg) to «−17.8
percentage points» (15 mg). As-intended (efficacy estimand) absolute loss: «16.1 kg», «22.2 kg»,
«23.6 kg». Categorical: «50%» and «57%» of participants (10/15 mg) «had a reduction in body weight of
20% or more, as compared with 3%» placebo; exploratory ≥25% reached «36.2%» at 15 mg — «bariatric
surgery re- sults in weight reduction of approximately 25 to 30% at 1 to 2 years», so the top dose
approaches the surgical range on the surrogate.

**Cross-trial vs semaglutide — the paper bars a direct comparison, and so do we.** SURMOUNT-1's
discussion states the honest limit explicitly:

| Parameter | Tirzepatide (SURMOUNT-1, Jastreboff) | Semaglutide 2.4 mg (STEP-1, Wilding; incl. Jastreboff's own citation) | Same quantity? |
|---|---|---|---|
| Population | BMI≥30/≥27+complication, non-diabetic, age 44.9 | BMI≥30/≥27+complication, non-diabetic, age 46 | **Yes — same class** |
| Endpoint | body weight (surrogate), wk 72 | body weight (surrogate), wk 68 | Yes construct; \~same window |
| Placebo-adjusted weight, lowest dose | 5 mg «11.9%» | 2.4 mg «12.4%» | Yes construct; cross-trial |
| Placebo-adjusted weight, top dose | 15 mg «−17.8 percentage points» | 2.4 mg «−12.4 percentage points» (STEP-1, on this page) | Yes construct; cross-trial |
| ≥20% responders | 57% (15 mg) | 32.0% (STEP-1) | Yes construct; cross-trial |
| **Hard CV-outcome evidence** | **none** (weight endpoint; MACE only as adjudicated safety AE, 4/5/0 vs 5 placebo — tiny, not powered) | none in STEP-1 — **SELECT supplies it separately** | **G-gap, not a value** |

The source's own words: «It is impor- tant to note that no direct comparison of these trials can be
made, since trial populations and designs differed.» Even so, tirzepatide's *lowest* dose
(placebo-adjusted 11.9%) already ≈ semaglutide's *full* effect (12.4%), and the top dose roughly
doubles it — a real efficacy gap on the surrogate, quoted here as a cross-trial contrast in a matched
population class, **not** as a head-to-head (the obesity head-to-head does not exist; SURPASS-2 was in
T2D and is not held).

**The load-bearing limit — bigger surrogate does NOT license a bigger (or any) CV claim.** SURMOUNT-1's
primary endpoint is **body weight, a surrogate** ([[Surrogate Outcomes]]); the causal transmission from
weight to patient-important CV events is a **separate evidenced step**, and for tirzepatide that step has
**never been trialled**. The SELECT-equivalent hard-outcome trial does not exist: — the tirzepatide morbidity-mortality CV outcome
trial; when it lands it either extends the SELECT hard-outcome finding to the dual agonist or does not.
This is the **insufficient-evidence** state, not no-effect. And the surrogate-to-outcome gap
is not hypothetical: [[Does Weight Loss Reduce Cardiovascular Events]] holds the worked case where a
large weight/CRP/BP surrogate improvement (Look AHEAD) bought **no** measurable CV-event reduction — so
a record-breaking weight number is exactly the place to *not* assume the hard outcome follows.

**Tolerability + adherence (layer 3), consistent with the class.** «The most common adverse events with
tirzepatide were gastrointestinal, and most were mild to moderate in severity, occurring primarily
during dose escalation»; AE-driven discontinuation «4.3%, 7.1%, 6.2%, and 2.6%» (5/10/15 mg / placebo) —
the same GI tolerability tax carried above for semaglutide and corroborated at umbrella grade on
[[GLP-1 Non-Cardiometabolic Effects and Safety]]. The 72-week duration «enabled par- ticipants to reach
a weight plateau in the 5-mg group and near-plateaus in the 10-mg and 15-mg groups» — the effect is a
*maintained state on chronic drug*, not a one-time correction; like semaglutide, the realistic
comparator to a lifestyle change must price in **lifelong adherence, cost, and reversibility on
stopping**.

**Decision relevance (tirzepatide).** For an obese, non-diabetic, primary-prevention adult, tirzepatide
is the **strongest available weight lever short of surgery** — \~15-21% loss by dose, half losing ≥20% at
the top dose — but rank it, like semaglutide there, on the **weight/cardiometabolic-surrogate lever and
its downstream (MASLD, diabetes prevention, function)**, *not* on a promised CV-event reduction, which
is unproven for this agent. Against semaglutide it offers more weight loss but *less* outcome evidence
(no CV trial) — a genuine surrogate-vs-outcome trade the person weighs at layer 3.

[inferred from @jastreboff2022; @lincoff2023; @wilding2021]


[@lincoff2023]
## Provenance and limits

- **Industry origin:** both trials were «Funded by Novo Nordisk» and sponsor-designed («The sponsor
  (Novo Nordisk) designed the trial and oversaw its conduct» — STEP-1). A COI flag on both, not a
  refutation — but the symmetric-standards rule applies, and two sponsor-run trials are not two
  independent lines of evidence.
- **Two trials, one drug, one sponsor.** SELECT + STEP-1 are both semaglutide 2.4 mg. Tirzepatide (dual
  GIP/GLP-1 agonist, \~15-21% weight loss — *larger* than semaglutide) has **no dedicated CV-outcome
  trial** (SURMOUNT-1 is weight-surrogate only — see the tirzepatide section above); oral formulations
  are not here. Do not generalize *GLP-1 class reduces CV events in obesity* from one agent — the larger
  weight loss of the dual agonist does not carry the CV benefit with it.
- **Net-safety direction is population-dependent, not a contradiction.** Serious AEs were *lower* on
  semaglutide in SELECT («33.4%» vs «36.4%») but *higher* in STEP-1 («9.8%» vs «6.4%»). Not a tension:
  SELECT's established-CVD patients carry a high background serious-event rate the drug's CV benefit
  offsets, whereas STEP-1's healthy population has little to offset, so the drug's own GI/hepatobiliary
  serious events dominate. The GI tolerability tax is consistent across both (discontinuation «7.0%» vs
  «3.1%» in STEP-1).
- **Narrow demographics:** SELECT 27.7% women / 3.8% Black; STEP-1 «preponderance of women and White
  participants» and «relatively short duration».
- **Cross-population comparison is not confirmation:** the T2D GLP-1 meta-analysis the discussion cites
  (Sattar 2021, «0.86; 95% CI, 0.80 to 0.93») is a *different population* reaching a *similar* HR — an
  echo, not independent backing of the obesity result (and Sattar is not held here).

[inferred from @lincoff2023; @wilding2021]

## Decision relevance

- **Obese + established CVD + non-diabetic:** semaglutide is a strong incremental option — NNT \~67 for
  MACE over \~3.3 years, on top of statins/antiplatelets, with a net-favourable serious-AE profile.
- **Obese + primary prevention (low 10-year risk, CAC=0):** the hard-outcome benefit is **unproven** and
  would be **small in absolute terms even if it transported**. What *is* well-evidenced there (STEP-1) is
  large and reliable: **\~15% weight loss** (half lose ≥15%), waist/BP/CRP improvement, and diabetes
  prevention (84% revert from prediabetes) — all real, all **surrogate**. Rank the drug for such a person
  on the **weight lever and diabetes prevention**, not on a promised CV-event reduction.
- **Against lifestyle:** not a substitution question with a fixed answer — same lever, and the swing
  factors are adherence, cost, GI tolerability, and reversibility on stopping, all elicited at layer 3.


[inferred from @lincoff2023; @wilding2021]
## The non-cardiometabolic ledger has its own home

The CV/weight case above is only half the drug decision; the **non-cardiometabolic effects and harms**
(GI events, cancer signals, pancreatitis, fracture, dementia, infections) are graded on a gold-tier
umbrella of 60 meta-analyses and held on [[GLP-1 Non-Cardiometabolic Effects and Safety]]. Three
findings there bear directly on this page's decision:

- the **GI tolerability tax** carried above (STEP-1 discontinuation) is corroborated at umbrella grade —
  nausea OR 2.47, vomiting OR 2.78, diarrhea OR 1.94 [@yang2026];
- the **rodent thyroid-C-cell concern** shows **no robust human signal** (thyroid cancer OR 1.43,
  0.95-2.13, NS), confirming the transportability read used here [@yang2026];
- a **protective fracture signal** (OR 0.67, 0.52-0.87) partly offsets the sarcopenia/fall worry that
  rapid weight loss otherwise raises [@yang2026].

Most other non-cardiometabolic signals are exploratory (single-trial-fragile), so they refine rather
than reverse the net-benefit picture above.

## The cross-drug placement — sole hard-outcome drug, but the signal is this page's own trials `[2026-08-22, Nong]`

A 19-drug network meta-analysis (Nong 2026; 262 RCTs) places SELECT's finding in the whole
anti-obesity class, and the placement is the value: subcutaneous semaglutide is «the only drug
associated with reduced all cause mortality (risk ratio 0.81, 95% confidence interval 0.72 to 0.93) and
myocardial infarction (0.72, 0.61 to 0.85)», adding heart failure (0.43, 0.21-0.84) and probable kidney
disease progression (0.80, 0.65-0.98, moderate)
[@nong2026obesity]. Tirzepatide — the
larger *weight* lever above — reaches only heart-failure signals, no mortality/MI. So across the class,
**the biggest weight loss is not the drug with the hard-outcome evidence** -> [[Comparing Obesity Drugs]].

**But this is F-refinement, NOT independent (type-E) corroboration, and the numbers prove it.** The NMA's
mortality/MI estimates are «largely informed by cardiovascular outcome trials in high risk populations»
[@nong2026obesity] — i.e. SELECT and kin,
already held here — and the pooled figures are near-identical to SELECT's own (all-cause death RR 0.81 vs
HR 0.81; MI RR 0.72 vs HR 0.72). The NMA **re-pools SELECT**, it does not reach the finding by a separate
route, so no `[E-independent]` is claimed and the SELECT within-trial caveats above still stand (the
hierarchical-gate non-confirmation of all-cause mortality is a fact about SELECT's statistics; the NMA's
«high certainty» is a meta-analytic pooling across the same CV-outcome-trial base, and inherits the same
high-CV-risk-population restriction). The primary-prevention gap this page centres is therefore intact:
the mortality signal remains a **route-(a)** finding concentrated where CV risk is highest.
[inferred from @nong2026obesity]


## Gaps this opens

- **No primary-prevention CV-outcome trial** for any obesity drug — the single largest hole for applying
  this to a low-risk stratum. G.
- **No head-to-head** of drug vs sustained lifestyle vs bariatric surgery on hard outcomes.
- **Weight loss on hard outcomes as an exposure in its own right** (independent of the drug) is still
  unheld -> [[Weight Loss and Mortality]] (a future page, not yet a held source).

## References

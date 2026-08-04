---
type: framework
question: For someone with obesity, does treating it with semaglutide reduce cardiovascular events — and does that evidence reach primary prevention?
aliases: [Semaglutide, GLP-1 Cardiovascular, SELECT Trial, Wegovy CVD, GLP-1 Receptor Agonist Obesity, Obesity Pharmacotherapy CVD]
authors: [Lincoff, A Michael; Brown-Frandsen, Kirstine; Colhoun, Helen M; Deanfield, John; Ryan, Donna H; Wilding, John P H; Batterham, Rachel L; Kushner, Robert F]
sources: [Lincoff - Semaglutide and Cardiovascular Outcomes SELECT 2023, Wilding - Semaglutide STEP-1 Weight Management 2021]
cluster: weight-management
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
created: 2026-07-28
updated: 2026-08-04
self_critiqued: 2026-07-28b
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


[@lincoff2023]
## Diabetes prevention — a secondary signal that fits the prediabetic stratum

Two-thirds of SELECT was prediabetic. Progression to diabetes was cut sharply:
progression to HbA1c >=6.5% «0.27 (0.24 to 0.31)». STEP-1 shows the same in its younger
primary-prevention population: among prediabetics, «84.1%» on semaglutide reverted to normoglycemia by
week 68 vs «47.8%» on placebo. For an obese, impaired-fasting-glucose person this is a distinct,
plausibly-relevant benefit — though on a **surrogate** (glycemic threshold), not a patient-important
outcome, and whether it lowers hard diabetes-related outcomes in primary prevention inherits the same
caveat.


[@lincoff2023]
## Provenance and limits

- **Industry origin:** both trials were «Funded by Novo Nordisk» and sponsor-designed («The sponsor
  (Novo Nordisk) designed the trial and oversaw its conduct» — STEP-1). A COI flag on both, not a
  refutation — but the symmetric-standards rule applies, and two sponsor-run trials are not two
  independent lines of evidence.
- **Two trials, one drug, one sponsor.** SELECT + STEP-1 are both semaglutide 2.4 mg. Tirzepatide (dual
  agonist, larger weight loss) has **no dedicated CV-outcome trial**; oral formulations are not here. Do
  not generalize *GLP-1 class reduces CV events in obesity* from one agent.
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
## Gaps this opens

- **No primary-prevention CV-outcome trial** for any obesity drug — the single largest hole for applying
  this to a low-risk stratum. G.
- **No head-to-head** of drug vs sustained lifestyle vs bariatric surgery on hard outcomes.
- **Weight loss on hard outcomes as an exposure in its own right** (independent of the drug) is still
  unheld -> [[Weight Loss and Mortality]] (a future page, not yet a held source).

## References

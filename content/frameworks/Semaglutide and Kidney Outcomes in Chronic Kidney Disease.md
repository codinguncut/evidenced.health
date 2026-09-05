---
type: framework
question: For someone with type 2 diabetes and chronic kidney disease, does semaglutide reduce hard kidney and survival outcomes — and is that a new benefit beyond the CV/weight case?
aliases: [FLOW Trial, Semaglutide Kidney, GLP-1 Kidney Outcomes, Semaglutide CKD, GLP-1 Renal Protection, Semaglutide Renal Outcomes]
authors: [Perkovic, Vlado; Tuttle, Katherine R; Rossing, Peter; Mahaffey, Kenneth W; Badve, Sunil V]
sources: [Perkovic - Semaglutide Chronic Kidney Disease FLOW 2024, Badve - GLP-1 Receptor Agonists Kidney Cardiovascular Outcomes 2024]
cluster: glp1
confidence: high
relationships:
  related_to:
    - Semaglutide for Cardiovascular Risk in Obesity
    - GLP-1 Non-Cardiometabolic Effects and Safety
    - GLP-1 Receptor Agonists and Cardiovascular and Kidney Outcomes
    - Surrogate Outcomes
    - Baseline Risk and the Relative-Absolute Split
    - Layer 1 - Ranking Interventions for a Stratum
created: 2026-08-06
updated: 2026-09-05
self_critiqued: 2026-09-05
---

**Frontier scope (kept peripheral, not deepened)** — semaglutide is a widely-prescribed
standard drug, so its efficacy on a hard outcome is admissible (the *Pharmacotherapy taper*); but this
page sits at the **prescriber edge** because the population is a *specific diagnosed disease* (type 2
diabetes with established CKD, on maximal-dose RAS inhibition), not one of the reasonably-healthy or
prevalent-lifestyle-modifiable strata the wiki centres — and the finding, by the page's own reading,
**does not transport** to the obese primary-prevention case. Held for the standard-drug efficacy signal
and the surrogate-vs-hard-outcome lesson; **not deepened** (no dosing, agent-selection, or combination
cardiorenal-therapy content, and no further FLOW-class kidney-trial acquisition).

The GLP-1 case elsewhere in this cluster is about **weight and cardiovascular events in obesity**
([[Semaglutide for Cardiovascular Risk in Obesity]]) and the **non-cardiometabolic safety ledger**
([[GLP-1 Non-Cardiometabolic Effects and Safety]]). FLOW opens a **third, distinct benefit** on a
different endpoint in a different stratum: a **hard kidney outcome** in type 2 diabetes with established
chronic kidney disease. It is the **first dedicated hard-outcome kidney trial** of a GLP-1 receptor
agonist — «previous dedicated trials addressing clinically important kidney outcomes, such as kidney
failure or a substantial decline in the eGFR, have been lacking»
[@perkovic2024].


[@perkovic2024]
## The stratum fixes what the number means

FLOW enrolled a **narrow, high-risk** population, not the obese primary-prevention strata most of the
wiki's other GLP-1 pages address: **type 2 diabetes + CKD** (eGFR 25-75 ml/min/1.73m² with elevated
albuminuria), already on a **maximal-dose RAS inhibitor**, mean eGFR 47, 68% at very-high KDIGO risk,
mean age 66.6, mean BMI 32. Semaglutide 1.0 mg SC weekly (the *diabetes/glycaemic* dose, not the 2.4 mg
obesity dose) vs placebo; n=3533; median follow-up 3.4 years; stopped early for efficacy. This is a
**secondary-prevention CKD** stratum — the benefit below transports to *that* profile, and the trialists
flag it «may not be generalizable to other populations, such as those at lower risk».


[@perkovic2024]
## What FLOW proved — hard outcomes, absolute and relative

| Outcome | Effect (HR, 95% CI) | Absolute | Hard or surrogate |
|---|---|---|---|
| **Primary: major kidney disease events** (composite) | 0.76 (0.66-0.88), P=0.0003 | 5.8 vs 7.5 events/100 pt-yr; **NNT 20 over 3 yr** (14-40) | mixed — hard failure + surrogate threshold + death |
| Kidney-specific composite | 0.79 (0.66-0.94) | — | mixed |
| Death from cardiovascular causes | 0.71 (0.56-0.89) | — | **hard** |
| Major cardiovascular events (MACE) | 0.82 (0.68-0.98), P=0.029 | NNT 45 over 3 yr | **hard** |
| Death from any cause | 0.80 (0.67-0.95), P=0.01 | NNT 39 over 3 yr | **hard** |
| Total eGFR slope | +1.16 ml/min/1.73m²/yr (0.86-1.47), P<0.001 | −2.19 vs −3.36 /yr | **surrogate** |

- «331 first events [5.8 per 100 patient-years of follow-up] vs. 410 first events [7.5 per 100
  patient-years]), which resulted in a 24% lower relative risk of the primary outcome in the semaglutide
  group (hazard ratio, 0.76; 95% confidence interval [CI], 0.66 to 0.88; P = 0.0003)».
- «The number of persons who would need to be treated over 3 years to prevent one primary-outcome event
  was 20 (95% CI, 14 to 40).»
- «The risk of death from any cause was 20% lower in the semaglutide group than in the placebo group (227
  vs. 279 events; hazard ratio, 0.80; 95% CI, 0.67 to 0.95, P = 0.01)».

**Read the composite carefully — it is not all hard kidney failure.** The primary endpoint pools *kidney
failure* (dialysis/transplant/eGFR<15 — patient-important) with a *≥50% eGFR decline* (a surrogate
threshold, though a validated one) and *death*. The eGFR slope is a **surrogate** for future function loss
-> [[Surrogate Outcomes]]. What is unambiguously hard-and-patient-important here is the **all-cause and CV
mortality** reduction — and «the trial was not powered to separately detect effects on kidney failure».
So the honest headline is *reduced a composite of kidney events and reduced death*, not *prevented
dialysis* as a standalone proven claim.


[@perkovic2024]
## Safety was reassuring, and the mechanism is weight-independent

Serious adverse events were **lower** on semaglutide (49.6% vs 53.8%), driven by fewer serious infections
and CV disorders — the same net-favourable serious-AE direction seen in the high-background-risk SELECT
population, and the mirror of the class GI tolerability tax (GI-driven discontinuation 4.5% vs 1.1%)
-> [[GLP-1 Non-Cardiometabolic Effects and Safety]]. The kidney benefit was «unrelated to changes in body
weight», and creatinine- and cystatin-C-based eGFR agreed — so this is **not** merely weight loss lowering
serum creatinine. Mechanism is marked as such: «direct effects of GLP-1 receptor agonists on the kidney
may include decreases in inflammation, oxidative stress, and fibrosis», with GLP-1 receptors on intrinsic
kidney and immune cells [@perkovic2024].


## Independence — a new endpoint, not new backing for *semaglutide works*

[inferred from @perkovic2024]
FLOW is **the same molecule (semaglutide) and the same sponsor (Novo Nordisk)** as the held SELECT
(Lincoff) and STEP (Wilding) trials. So it is **NOT an independent line of evidence** for the general claim that
*semaglutide works* — three sponsor-run semaglutide trials are one programme, not three routes (the
symmetric-standards / laundered-independence guard). What FLOW *does* add is a **new endpoint (hard kidney
outcomes) in a new population (T2D+CKD)** that none of the held trials measured — so it is genuine new
*content*, not a type-E corroboration of the CV/weight findings. The value is a filled gap (a hard kidney
outcome), not extra confidence in an already-held claim.


<div class="recent-update" data-last-updated="2026-09-05">

## Class-level context — FLOW inside the GLP-1 CVOT meta-analysis (F-refinement)

[@badve2024glp1]
FLOW is one trial in the class-level meta-analysis (Badve 2024; 11 trials, 85,373), which pools it with
the CV-outcome programme -> [[GLP-1 Receptor Agonists and Cardiovascular and Kidney Outcomes]]. Two
things that page settles bear on FLOW's reading here (kept to the efficacy signal — no dosing,
agent-selection, or combination-therapy content, per this page's frontier scope):

- **The class moves a HARD kidney outcome, and this partly cashes FLOW's kidney-failure gap.** The prior
  class MA (Sattar 2021, not held) reported a 21% kidney reduction «mainly driven by new-onset
  macroalbuminuria, a surrogate outcome not validated for clinical kidney disease outcomes». Badve
  re-runs it on a composite *excluding* macroalbuminuria — composite kidney HR 0·82 (0·73-0·93,
  high-certainty) — and shows kidney failure «for the first time» (HR 0·84, 0·72-0·99, moderate-
  certainty) at the class level [@badve2024glp1]. FLOW carried 49% of that kidney-failure weight, so this is largely FLOW being
  confirmed at class scale rather than an independent route — but the standalone kidney-failure signal
  FLOW could not confirm alone is now moderate-certainty across the class.
- **The muscle-loss/creatinine confound, and its reassurance, generalize.** Badve names the same worry
  FLOW addressed with cystatin-C: GLP-1 weight loss «may in turn reduce creatinine generation due to
  reduced muscle mass and therefore artificially improve creatinine-based eGFR measurements», and the
  kidney-failure reduction (not creatinine-confoundable) «provides important reassurance that the kidney
  benefits of GLP-1 receptor agonists are real». [inferred from @badve2024glp1]

Absolute class kidney benefit is modest outside high kidney risk (class NNT 164 vs FLOW's 20), because
most pooled trials enrolled near-normal kidney function — so FLOW's large absolute benefit is a
high-baseline-risk feature (route (a)), not the class norm.
[inferred from @badve2024glp1; @perkovic2024]

</div>

## Decision relevance

- **T2D + CKD (eGFR 25-75, albuminuric), on RAS inhibition:** semaglutide is now a strong incremental
  option for **kidney and survival** protection — NNT 20 (kidney composite) / 39 (all-cause death) over
  3 years, on top of RAS inhibition, with a net-favourable serious-AE profile. It joins RAS inhibitors,
  SGLT2 inhibitors and finerenone as guideline-relevant cardiorenal therapy; the trialists frame it as a
  candidate for **combination**, though FLOW could not test combination (only 15.6% were on SGLT2i).
- **This does NOT transport to the obese primary-prevention stratum.** The population is diabetic,
  albuminuric, low-eGFR, and old — a high absolute baseline risk. Absolute benefit scales with that
  baseline ([[Baseline Risk and the Relative-Absolute Split]]); a lower-risk person gets a proportionally
  smaller absolute return even if the relative effect held, and the relative effect itself is untested
  outside CKD.
- **In the Layer-1 ranking** ([[Layer 1 - Ranking Interventions for a Stratum]]) for a T2D+CKD stratum,
  this is a large, certain lever on patient-important outcomes — near the top for that specific profile.


<div class="recent-update" data-last-updated="2026-09-05">

## Gaps

- **Combination therapy untested** — SGLT2i/finerenone uptake was low; the order and additivity of the
  four cardiorenal therapies is unresolved. G.
- **Not powered for kidney failure alone (FLOW)** — the standalone dialysis/transplant benefit is
  suggested by FLOW, not confirmed within it; now **partly cashed at class level** (Badve 2024: kidney
  failure HR 0·84, 0·72-0·99, moderate-certainty), though FLOW carried \~half that pooled weight. G
  (narrowed).
- **Generalizability** — mostly White; effect in lower-risk, non-diabetic, or non-albuminuric CKD
  unknown. G.

</div>

## References

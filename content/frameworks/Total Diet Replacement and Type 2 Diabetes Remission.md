---
type: framework
question: Can an energy-restricted total-diet-replacement programme put type 2 diabetes into remission, and does remission scale with weight loss?
aliases: [DiRECT, DiRECT Trial, Counterweight-Plus, Total Diet Replacement Diabetes, Formula Diet Diabetes Remission, TDR Remission, Weight Loss Diabetes Remission Dose-Response]
authors: [Lean, Michael EJ; Leslie, Wilma S; Barnes, Alison C; Taylor, Roy]
sources: [Lean - DiRECT T2D Remission 2018, Goldenberg - Low Carbohydrate Diets T2D Remission 2021, Churuangsuk - Diabetes Diets Umbrella Review 2022]
cluster: weight-management
confidence: medium
self_critiqued: 2026-08-04
relationships:
  related_to:
    - Carbohydrate Restriction and Type 2 Diabetes Remission
    - Does Weight Loss Reduce Cardiovascular Events
    - Diets for Weight Loss - What NICE Recommends
    - Fatty Liver MASLD and Weight Loss
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
    - Layer 1 - Ranking Interventions for a Stratum
created: 2026-07-29
updated: 2026-08-04
---

DiRECT (Lancet 2018) is the first registered trial to set **remission of type 2 diabetes as a
primary outcome** and to deliver the intervention in **routine primary care** rather than a research
centre. It supplies two things the fabric did not hold: a **quantified total-diet-replacement (TDR)
protocol with a structured maintenance phase**, and a **remission-by-weight-loss dose-response** —
the %-body-weight -> outcome gradient that grounds the weight-loss lever with a magnitude.

Its pathophysiological premise is Taylor's *twin cycle hypothesis* — that T2D of limited duration is
driven by excess fat in liver and pancreas and is reversible by negative energy balance. Earlier
mechanistic work had normalised liver insulin resistance within 7 days and pancreatic function over
8 weeks on a 600-700 kcal/day diet; DiRECT tests whether this is *practicable* at scale.
[@lean2018, Introduction]

## The intervention — an energy target, NOT a macronutrient one

The Counterweight-Plus programme, in three phases:

- **Total diet replacement:** a low-energy formula diet, "825-853 kcal/day; 59% carbohydrate, 13%
  fat, 26% protein, 2% fibre", for 3 months (extendable to 5). **Note the 59% carbohydrate** — this
  is a *high-carbohydrate*, low-*energy* diet, not a low-carbohydrate one.
- **Stepped food reintroduction:** 2-8 weeks, "about 50% carbohydrate, 35% total fat, and 15%
  protein".
- **Structured weight-loss maintenance:** ongoing monthly visits, behaviour-change methods (including
  CBT elements), a step-count target.

«All oral antidiabetic and antihypertensive drugs were discontinued on day 1», reintroduced only per
protocol if glucose or blood pressure required it.
[@lean2018, Procedures]

**Population and design:** aged 20-65, T2D diagnosed within 6 years, BMI 27-45, **not on insulin**.
Open-label, cluster-randomised at 49 primary-care practices (the practice, not the patient, was the
randomisation unit); 149 per group in the ITT population. Co-primary outcomes, analysed
hierarchically: "weight loss of 15 kg or more, and remission of diabetes, defined as glycated
haemoglobin (HbA1c) of less than 6.5% (<48 mmol/mol) after at least 2 months off all antidiabetic
medications, from baseline to 12 months".
[@lean2018, Methods]

## The headline result

| Outcome (12 months, ITT) | Intervention | Control | Effect |
|---|---|---|---|
| Weight loss >=15 kg | 36 (24%) | 0 | p<0.0001 |
| **Diabetes remission** | **68 (46%)** | **6 (4%)** | **OR 19.7 (95% CI 7.8-49.8)** |
| Mean weight change | -10.0 kg (SD 8.0) | -1.0 kg (3.7) | adj diff -8.8 kg (-10.3 to -7.3) |
| HbA1c change | -0.9% | +0.1% | adj diff -0.85% (-1.10 to -0.59) |
| QoL (EQ-5D VAS) | +7.2 | -2.9 | adj diff +6.4 (2.5 to 10.3) |

[@lean2018, Results; Table 2]

The 46% remission rate "greatly exceeded" the 22% deemed a-priori clinically important. On
medication: at 12 months **73.6% of the intervention group were on zero oral antidiabetic drugs**
(vs 18.2% of control), and **68% remained off antihypertensives** with no rise in mean blood
pressure.
[@lean2018, Results; Discussion; Table 2]

## The jewel — remission scales with weight loss (dose-response)

**Pooling both randomised groups, remission rises monotonically with the weight loss maintained at 12
months.** "Remission varied with weight loss in the whole study population":

| Weight change at 12 months | Remission achieved | Rate |
|---|---|---|
| Weight gained | 0 of 76 | **0%** |
| 0-5 kg loss | 6 of 89 | 7% |
| 5-10 kg loss | 19 of 56 | 34% |
| 10-15 kg loss | 16 of 28 | 57% |
| **>=15 kg loss** | **31 of 36** | **86%** |

[@lean2018, Results; Findings]

The discussion states the composite the table implies: "86% of participants with at least 15 kg
weight loss, and 73% of those with weight loss of 10 kg or more" achieved remission.
[@lean2018, Discussion]

### An independent design reaches the same per-kilogram gradient `[E-independent]` `[2026-08-04]`

DiRECT's dose-response is a **within-trial** association (responder confounding is live — see Limits). A
**separate observational design corroborates the same monotone, diet-independent gradient**, which is what
converts it from a suggestive within-population pattern to an [E-independent] finding. Reported in the
Churuangsuk umbrella review: ADDITION-Cambridge, a **population cohort of 867 newly-diagnosed T2D patients
across 49 UK primary-care practices**, followed 5 years — overall 30% remission — found «Every 1 kg of
weight loss was associated with 7% higher chance of remission at 5 years, regardless of specific diet
regimens or lifestyle interventions», and «Loss of >10% of baseline body weight in the first year after
diagnosis was associated with 70% higher chance of remission at 5 years».
[@churuangsuk2022]

**Parameter table** (op-weave 2a — the two are matched on the claim they jointly back, NOT on magnitude):

| Parameter | DiRECT (Lean 2018) | ADDITION-Cambridge (via Churuangsuk 2022) | Same quantity? |
|---|---|---|---|
| Design | within-RCT dose-response, both arms pooled | **population cohort**, 49 practices | **NO — different design** |
| Population | T2D <6 yr, not on insulin, \~all white | newly-diagnosed T2D, UK primary care | overlapping, both early-disease |
| Exposure | weight-loss band at 12 mo | per 1 kg / >10% loss in yr 1 | different metric |
| Outcome / horizon | remission (HbA1c<6.5% off meds), 12 mo | remission, **5 yr** | same outcome, different horizon |
| The claim backed | remission rises monotonically with kg lost, irrespective of diet | same | **YES — the directional claim** |

The magnitudes are **not** pooled (12-mo band-rate vs 5-yr per-kg association); what is shared is the
**direction and diet-independence** of the gradient. The independence is genuine on the axes E requires —
a randomised within-population contrast and an observational cohort, different data, different institution
(Newcastle/Glasgow vs Cambridge), different confounding structures. The one shared-context caveat: both
are UK early-disease T2D populations in the weight-centric remission tradition, so transport beyond that
stratum is corroborated by neither. Neither study cites or formalises the other — this is not laundered-E.
[inferred from @lean2018; @churuangsuk2022]

### Where DiRECT sits in the umbrella's certainty-graded remission map

Churuangsuk's GRADE table places **total diet replacement (the two low-RoB RCTs, DiRECT + DIADEM-I) at
the single GRADE-HIGH cell** of the whole remission map — median 54% remission (range 46-61) vs 4-12%
standard care, N=445 — above formula meal replacement (11%, moderate), Mediterranean (15%, low), and
ketogenic (20%, very low). [@churuangsuk2022] So
DiRECT is not an isolated strong trial: it anchors the one high-certainty conclusion in the graded T2D
remission literature, and that conclusion is a *format* (energy-controlling TDR), not a macronutrient
class -> [[Diets for Weight Management in Type 2 Diabetes]].

**Why this is the high-value finding.** A monotone gradient from 0% (weight gain) to 86% (>=15 kg),
in a *within-population* comparison, is direct evidence that **the amount of weight lost — not the
diet's composition — is the operative variable**. It is a cross-group association (not the randomised
contrast), so it carries confounding risk (a responder who loses more may differ), but the biological
gradient is steep and coherent with the mechanistic twin-cycle work. Read it as *name-the-curve*: the
curve is monotone over the studied range with **no visible plateau below 15 kg** — every increment of
sustained loss buys more remission. Whether it plateaus above 15 kg is unresolved (the top category
is open-ended and the mechanism has a floor — remission is bounded at 100%).

## The maintenance phase — the structure the fabric lacked

DiRECT is unusual in designing for maintenance "from the outset". Among engagers, weight fell sharply
in TDR then partly regained: **-14.5 kg** (95% CI 13.4-15.5) during TDR, then **+1.0 kg** during food
reintroduction and **+1.9 kg** during maintenance — a net \~-11.6 kg trajectory for completers, against
the -10.0 kg ITT mean.
[@lean2018, Results]

Adherence: "79% completed the intensive total diet replacement phase"; the \~25% "dropout rate" (6
never engaged, 26 withdrew — 15 during TDR, 6 during reintroduction, 5 during maintenance) marks the
programme's non-acceptability ceiling. This is the missing-piece for the NICE TDR recommendation,
which names a low-energy TDR but not the reintroduction+maintenance scaffold
-> [[Diets for Weight Loss - What NICE Recommends]]. (DiRECT's 825-853 kcal formula sits at the bottom
of NICE's stated 800-1200 kcal band.)

## Synthesis — is remission driven by WEIGHT LOSS or by CARBOHYDRATE RESTRICTION?

The fabric holds a *low-carbohydrate* remission result ([[Carbohydrate Restriction and Type 2 Diabetes Remission]], Goldenberg 2021). DiRECT achieves remission on a **59%-carbohydrate** formula
diet — so the two routes must be reconciled. Parameter table (op-weave 2a):

| Parameter | DiRECT (Lean 2018) | Goldenberg 2021 (BMJ MA) | Same quantity? |
|---|---|---|---|
| Outcome | remission = HbA1c <6.5%, off antidiabetic meds >=2 months, 12 mo | remission = HbA1c <6.5% (+/- medication, both defs reported), 6/12 mo | **\~YES** on the med-free definition; Goldenberg's headline permits meds |
| Intervention | 825-853 kcal TDR formula, **59% carbohydrate** | "<130 g/day or <26%" carbohydrate | **NO — opposite on carbohydrate** |
| Mechanism claim | weight loss / negative energy balance (twin cycle) | carbohydrate restriction | **NO — the contested variable** |
| Weight loss | -10.0 kg (ITT), dose-response to remission | MD -3.46 kg at 6 mo, **+0.29 kg by 12 mo** (regained) | NO — much larger, sustained |

**The fourth column is NO on intervention and mechanism — so this is NOT a like-for-like tension to
file. It is an F-refinement, and it runs in DiRECT's favour on the causal question.** Both routes
produce weight loss; both produce remission. But:

- DiRECT's **within-population dose-response** ties remission directly to *kilograms lost*,
  irrespective of macronutrient composition — and it does so **at 59% carbohydrate**, the opposite of
  a low-carb diet. So carbohydrate restriction is **not necessary** for remission: it is achieved
  here without it. (This does not *exclude* an added glycaemic contribution from carb restriction
  beyond the weight it produces — that is untested here, insufficient-evidence, not shown absent.)
- Goldenberg's own data are **consistent with weight-mediation, not competing with it**: its
  low-carb remission and weight advantage **both attenuate to null by 12 months as weight is
  regained** (weight MD +0.29 kg at 12 mo; 12-mo medication-free remission RD -0.04, NS). A remission
  effect that decays in step with the weight advantage is consistent with a *weight-loss* effect
  delivered via a low-carb route, rather than a carbohydrate effect independent of weight.

**The defensible composite:** *T2D remission (of short-duration disease) is driven by the magnitude
of sustained weight loss; carbohydrate restriction is one lever for achieving that weight loss, with
no evidence it adds a remission effect beyond the weight loss it produces.* This refines — does not
contradict — Goldenberg: the low-carb result
is real, but its **framing** ("low-carb for remission") is better read as "weight loss for remission,
low-carb being one delivery route". A person choosing a diet for remission should optimize for the
**weight loss they can sustain**, by whichever route they will adhere to
([[Low-Carbohydrate vs Balanced-Carbohydrate Diets]]).
[inferred from @lean2018; @goldenberg2021]

DiRECT states the same logic for surgery: "The essential mechanisms behind bariatric surgery are
weight loss and decrease in body fat content, rather than any direct surgical effect" — and "The very
large weight losses targeted by bariatric surgery are not essential for achievement of remission". So
across three routes (formula diet, low-carb, surgery) the common cause is weight/fat loss, not the
route.
[@lean2018, Discussion]

## Remission is a real benefit weight loss moves — but it is intermediate

DiRECT is a counterweight to the cardiovascular-event null ([[Does Weight Loss Reduce Cardiovascular Events]]): where Look AHEAD showed lifestyle weight loss did **not** cut CV events, DiRECT shows the
same lever delivers a **patient-important benefit it demonstrably does move** — freedom from diabetes
and its drugs, plus a measured QoL gain. Weight loss is indicated for the outcomes it moves; remission
is squarely one of them.

**But remission is an intermediate outcome, not a hard one.** HbA1c normalisation is a strong
surrogate for microvascular risk, but DiRECT was "not designed or powered to evaluate effects on
complications" and remission can relapse. DiRECT itself reaches for the hard-outcome bridge only by
citing a Look AHEAD post-hoc: "a 10% weight loss in the first year... was associated with a 21%
decrease in occurrence of cardiovascular outcomes" — the same >=10%-responder signal that page holds
as *reported, not proven* -> [[Does Weight Loss Reduce Cardiovascular Events]].
[@lean2018, Discussion]

## Limits and bias — read honestly

- **Open-label, and allocation was visible to participants** (cluster design). Baseline balance
  suggests limited bias, but blinding of a lifestyle programme is impossible.
- **Asymmetric medication handling:** antidiabetic drugs were stopped in the intervention arm but not
  control. The trial compares *the whole programme vs standard care*, so the remission definition
  (off-meds HbA1c) is favourable to the arm whose meds were deliberately withdrawn — a design choice,
  disclosed, that inflates the between-arm remission gap relative to a med-matched comparison.
- **12-month horizon**; durability is unaddressed here (follow-up planned to >=4 years). Remission of
  short-duration T2D only — "remission is less likely with longer durations of disease".
- **Near-uniformly white** Scottish/Tyneside population; no unqualified transport to e.g. South Asian
  groups who develop T2D at lower weight.
- **The dose-response is a within-population association**, not the randomised contrast — responder
  confounding is possible.
- Adverse events during TDR were common but mild (constipation, cold sensitivity, headache,
  dizziness); 9 serious AEs in 7 (4.5%) intervention participants, 2 possibly related (biliary
  colic + abdominal pain, same participant), none causing withdrawal.
- **Coherence, not validity (R1):** a strong single trial, not proof the effect transports or
  persists.


[inferred from @lean2018]

## References

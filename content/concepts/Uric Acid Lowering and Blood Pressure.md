---
type: concept
question: Is serum uric acid a modifiable cause of raised blood pressure — does lowering it lower BP, in whom, and does the drug act on urate itself or on a pleiotropic pathway?
aliases: [Urate Lowering Blood Pressure, Uric Acid as Modifiable Risk Factor, Allopurinol Blood Pressure, Hyperuricemia and Hypertension, Xanthine Oxidase Inhibition Blood Pressure]
authors: [Qu, Li-hui; Jiang, Hong; Chen, Jiang-hua; Ayoub-Charette, Sabrina; Sievenpiper, John L]
sources: [Qu - Uric Acid Lowering Blood Pressure 2017, Ayoub-Charette - Fructose Sources Uric Acid 2021]
cluster: urate
nucleus: true
confidence: medium
created: 2026-09-23
updated: 2026-09-25
self_critiqued: 2026-09-25
relationships:
  related_to:
    - Inflammation as a Modifiable Lever
    - Surrogate Outcomes
    - Free Sugars Intake
    - Blood Pressure Lowering and Cardiovascular Events
    - Net Effect vs Intended Effect
    - The U-Shaped Association Artifact
    - Is the Food Category Doing Any Work
---

**Nucleus of the `urate` cluster.** The held fabric carries serum uric acid (UA) mostly as a
*marker* that travels with cardiometabolic disease. This page holds the one interventional test of
whether it is a *modifiable cause* of blood pressure: a gold RCT meta-analysis showing that a
urate-lowering drug lowers BP. The finding is real but three boundaries keep it from settling the
causal question — the effect is on a **surrogate (BP), not events**; it is shown only in a
**hyperuricemic stratum**; and, decisively, the drug tested (allopurinol, a xanthine oxidase
inhibitor) has BP-lowering routes **independent of urate-lowering itself**, so the trials cannot say
whether the mediator is urate or the enzyme. Urate is a *candidate* lever, not a demonstrated one.
[inferred from @qu2017urate]

**Update `[2026-09-25]`:** the chain's **upstream** leg — does dietary fructose raise urate? — is now
also held, and it is **food-source-specific**: sugar-sweetened beverages (SSBs) raise urate, 100%
fruit juice lowers it, whole fruit is null (§the upstream leg). The two legs come from **different
research groups**, but they are measured in different strata on different endpoints, so the *joined*
chain is still open. [inferred from @ayoubcharette2021fructose]

## The effect — allopurinol lowers BP on the surrogate

Qu pooled 15 RCTs (per-study n 28-179) of urate-lowering therapy, overwhelmingly allopurinol (two
febuxostat), in patients with hyperuricemia with or without hypertension; 13 trials reported BP.
Effects are reported as standardized difference in means (SDM), a *standardized* effect, not mm Hg
[@qu2017urate]:

- **SBP:** SDM 0.321 (95% CI 0.145 to 0.497, p < 0.001), moderate heterogeneity (I2 = 42.0%).
- **DBP:** SDM 0.260 (95% CI 0.102 to 0.417, p = 0.001), low heterogeneity (I2 = 28.8%).
- **Serum UA:** SDM 1.548 (95% CI 0.840 to 2.256, p < 0.001) — the drug did lower the marker
  (I2 = 94.7%, high heterogeneity).
- **Serum creatinine:** SDM 0.312 (95% CI 0.008 to 0.615, p = 0.044), 5 trials, I2 = 0%.

**Magnitude in absolute terms is not this MA's to give.** Qu reports SDM only. The one mm Hg anchor it
cites is a prior MA (Agarwal 2013): SBP -3.3 mm Hg (95% CI 1.4 to 5.3), DBP -1.3 mm Hg (0.1 to 2.5)
[@qu2017urate] — but that MA pooled longitudinal
(non-RCT) studies, a weaker design, so the \~3 mm Hg figure is a borrowed, design-discounted anchor,
not a value this RCT-MA established. A \~3 mm Hg SBP drop is small against the big BP levers
-> [[Sodium Intake and Blood Pressure]], [[Blood Pressure Lowering and Cardiovascular Events]].

## Subgroups — background antihypertensives and a dose paradox

- **Works with and without background BP drugs.** SBP fell both off medication (SDM 0.377, 95% CI
  0.005 to 0.750, p = 0.047) and on it (SDM 0.295, 95% CI 0.097 to 0.492, p = 0.003); DBP likewise
  fell both off (SDM 0.426, 95% CI 0.122 to 0.729, p = 0.006) and on medication (SDM 0.167, 95% CI
  0.003 to 0.331, p = 0.046) [@qu2017urate].
  (Qu's *abstract* says the DBP effect was seen only with antihypertensives; the *body* forest-plot
  data show both subgroups significant — an internal inconsistency; the body data are the primary
  record and are used here.)
- **Dose paradox — likely an artifact, not a knee.** In patients on BP drugs, low-dose allopurinol
  (300 mg/day) reduced SBP (SDM 0.329, 95% CI 0.116 to 0.542, p = 0.002) while high-dose
  (>300 mg/day) did not (SDM 0.030, 95% CI -0.476 to 0.536, p = 0.908). Qu warns this rests on a
  **single** high-dose study with a CI spanning zero [@qu2017urate]; it is a null from n=1, not evidence of an inverted dose-response, and
  should not be read as a plateau or upper bound -> [[The Underivable Optimum]].

## The marker-vs-mediator crux — is it urate, or the enzyme?

This is the payoff and the direct parallel to [[Inflammation as a Modifiable Lever]]'s CRP crux
(*the target is the pathway, not the marker molecule*). Allopurinol lowers BP **and** lowers urate,
so a naive read makes urate the mediator. But allopurinol is a xanthine oxidase inhibitor, and Qu
reports that «some study has suggested that allopurinol itself may improve endothelial cell function
and that the improvement is not related to lowering UA levels» [@qu2017urate]. The trial set therefore cannot separate a *urate-lowering* effect
from a *xanthine-oxidase / vascular-oxidative-stress* effect, and Qu says so at the outset: «It also
remains unclear if a decrease in BP does occur, if it can be attributed to allopurinol itself or a
decrease in UA level» [@qu2017urate].

**What would resolve it (the design gap):** a trial of a **uricosuric** — a drug that lowers urate
*without* inhibiting xanthine oxidase — reaching the same BP effect would isolate urate as the
mediator. Qu searched for uricosurics but the included evidence is essentially all XO-inhibitor, so
the clean urate probe is missing. This is *net-effect-not-intended* at the mechanism level: the drug
does more than lower the marker it was chosen for -> [[Net Effect vs Intended Effect]].

## Publication bias attenuates the SBP arm

Egger's test showed significant funnel asymmetry for SBP (t = 2.03, one-tailed p = 0.032);
trim-and-fill imputed three studies, after which the SBP effect was attenuated but remained
significant (adjusted SDM 0.211, 95% CI 0.018 to 0.404). No publication bias was detected for DBP
[@qu2017urate] -> [[Publication Bias and Selective Reporting]].

## What this does NOT license

- **BP is a surrogate; events are untested here.** Qu «only examined the effect of UA-lowering
  treatments on BP and serum creatinine and UA levels, and did not study cardiovascular or renal
  outcome such as incidence of cardiovascular events or CKD progression» [@qu2017urate]. A urate-lowering -> BP-drop -> fewer-events chain is not
  shown; the surrogate-to-outcome leg stays an evidenced-target requirement, not an assumption
  -> [[Surrogate Outcomes]]. This is weaker than the inflammation lever, which has two RCTs on hard
  events with lipids unchanged.
- **Hyperuricemic stratum only.** The effect is established in patients with hyperuricemia; it does
  not transport to normouricemic people by evidence grade alone (the mechanism needs an elevated-urate
  support factor).
- **A drug lever, not a lifestyle lever.** This sizes the urate->BP *link*; it is not a
  recommendation to prescribe allopurinol for BP (a prescriber-zone act, out of scope), and Qu's own
  cited Cochrane review found insufficient evidence to use urate-lowering therapy to treat
  hypertension [@qu2017urate].

## The upstream leg — dietary fructose and urate: food source, not energy `[2026-09-25, Ayoub-Charette 2021]`

Does eating fructose raise serum urate? The upstream leg now has gold evidence, and the payoff is that
***fructose raises urate* is not one exposure** — the effect is carried by the *food source*, not by
fructose-as-a-nutrient and not by energy control. Ayoub-Charette pooled 47 controlled feeding trials
(85 comparisons, N=2763) across 9 food sources and 4 energy-control designs (substitution, addition,
subtraction, ad libitum), in predominantly healthy, mixed-weight adults with **baseline UA median
\~4.6-5.5 mg/dL** — roughly normouricemic, the complement to Qu's hyperuricemic stratum; GRADE applied,
minimally important difference for UA ±0.113 mg/dL.
[@ayoubcharette2021fructose]

- **Total fructose-containing sugars barely move urate, and only isocalorically.** In substitution
  (isocaloric) trials total sugars raised UA by MD **+0.16 mg/dL** (95% CI 0.06-0.27, P=0.003); null in
  addition (+0.10, -0.07 to 0.27), subtraction (+0.09) and ad libitum (+0.19). GRADE **very low** for
  total sugars (double-downgrade for indirectness). The substitution effect is **not fructose-general**:
  SSBs carried 30.7% of the weight, and removing them collapsed it to +0.02 mg/dL (-0.07 to 0.1, NS).
  [@ayoubcharette2021fructose]
- **SSBs raise urate — the one HIGH-certainty harm, and it persists at equal energy.** SSB MD
  **+0.42 mg/dL** (0.24-0.59) in substitution and **+0.43** (0.23-0.63) in addition, GRADE **high** in
  both. Because the substitution effect is isocaloric, SSB's *urate* harm — unlike its *body-weight*
  harm, which is energy-mediated and vanishes on isoenergetic exchange -> [[Free Sugars Intake]] —
  does **not** dissolve at equal energy, pointing at fructose-specific metabolism rather than added
  calories. [@ayoubcharette2021fructose]
- **100% fruit juice LOWERS urate — also HIGH certainty.** In addition trials 100% fruit juice MD
  **-0.28 mg/dL** (-0.43 to -0.13), GRADE **high** (upgraded for a significant dose-response). Sweets
  and desserts raised UA in substitution (+0.35, 0.07-0.63, moderate); a single chocolate addition
  trial lowered it (-0.38, -0.76-0.00, low). Whole fruit, dried fruit (raisins), sweetened dairy and
  added nutritive sweetener were **null**. Author's bottom line: «This evidence is of high certainty,
  suggesting that the available evidence provides a reliable indication that SSBs increase and 100%
  fruit juice decreases uric acid», with the overall finding that «the effects of fructose-containing
  sugars on uric acid were more dependent on the food source than on energy control»
  [@ayoubcharette2021fructose].

**Mechanism (directional, from the source's own reasoning).** Excess fructose drives an unregulated
fructokinase pathway (ATP -> AMP -> urate) plus de novo purine synthesis; the source attributes the
food-source split to the matrix and glycemic index — «SSBs do not offer many nutrients besides sugars,
whereas other foods, like fruits, present sugars in a complex food matrix in which components like
antioxidants, polyphenols, and so forth may counteract the negative effects of fructose», and «the food
sources which increased uric acid all have a high glycemic index (GI), while food sources showing a
reduction in uric acid have a lower GI». This is whole-organism, not the naive fructose dose-response
-> [[Net Effect vs Intended Effect]].
[inferred from @ayoubcharette2021fructose]

**Surrogate ladder — this leg stops at UA, not gout or BP.** Uric acid is itself a surrogate: «High
blood uric acid is a risk factor for gout, cardiovascular disease, and type 2 diabetes mellitus»
[@ayoubcharette2021fructose], so the feeding trials move the
marker, not a patient-important outcome -> [[Surrogate Outcomes]]. The source argues these results
«appear to translate to gout risk» via its own cohort MA, which found «significant, positive
associations of SSBs and fruit juice with the risk of gout, but no effect of fruit» — but note the
**food-source granularity trap it flags itself**: that cohort MA grouped fruit drinks and 100% fruit
juice together, so the *fruit juice* that raised *gout* risk is not the *100% fruit juice* that lowered
*UA* here. *Fruit juice* names two objects, and only 100% juice carries the urate-lowering signal
-> [[Is the Food Category Doing Any Work]].
[@ayoubcharette2021fructose]

## Why the wiki holds this — the fructose->urate->BP chain

The dietary relevance is the mediator leg of the fructose/uric-acid pathway that
[[Free Sugars Intake]] flags (a pathway Te Morenga's sugar->weight review treated as out of scope).
Both legs are now held, from **different research groups** (a genuinely cross-group chain, not one
lab's story): the **upstream** food-source -> urate leg from Ayoub-Charette (Toronto 3D group), and the
**downstream** urate -> BP leg from Qu (a separate Chinese group). Neither the two legs joined nor
either alone closes the sugar decision:

- **Upstream leg — now held (was a `[AWAITS]` gap, closed 2026-09-25).** Ayoub-Charette supplies gold
  evidence that the fructose -> urate leg is **food-source-specific**: SSBs raise urate (high), 100%
  fruit juice lowers it (high), whole/dried fruit and dairy null (§the upstream leg). So the actionable
  upstream lever is *cut SSBs specifically*, not *cut fructose*.
- **G-gap (the joined chain in the target stratum):** no source runs food-source-fructose -> urate ->
  BP -> events end to end in one population. The upstream leg is measured on **UA only** in
  \~normouricemic healthy adults; the downstream leg on **BP only** in a **hyperuricemic** stratum on a
  **drug**. Whether cutting SSBs lowers BP (let alone events) in a normouricemic reasonably-healthy
  person — the wiki's default stratum — remains untested. — a source carrying the whole
  chain, or the dietary-fructose -> BP arm directly.

## References

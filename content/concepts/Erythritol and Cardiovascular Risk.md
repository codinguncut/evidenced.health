---
type: concept
question: Does erythritol (the polyol sweetener) raise cardiovascular / thrombotic risk, and does that
  change whether to use it as a sugar substitute — for whom?
aliases: [Erythritol, Polyol Sweeteners and Thrombosis, Sugar Alcohols and Cardiovascular Risk, E968, Erythritol Thrombosis]
authors: [Witkowski, Marco; Nemet, Ina; Hazen, Stanley L; Tang, W H Wilson]
sources: [Witkowski - Erythritol Cardiovascular Event Risk 2023, Witkowski - Erythritol Platelet Reactivity 2024]
confidence: low
relationships:
  related_to:
    - Non-Sugar Sweeteners
    - Free Sugars Intake
    - Insulin Resistance Surrogates and Cardiovascular Risk
    - Surrogate Outcomes
    - The U-Shaped Association Artifact
    - Baseline Risk and the Relative-Absolute Split
created: 2026-08-20
updated: 2026-08-20
self_critiqued: 2026-08-20
---

Erythritol is a 4-carbon polyol (sugar alcohol), a fast-growing "non-nutritive" / "natural" sweetener
(EU additive E968), GRAS in the US and EU, marketed to exactly the diabetes / obesity / prior-CVD
population most at risk for thrombotic events. One research program (Hazen lab, Cleveland Clinic) has
argued it is pro-thrombotic. **The whole appraisal turns on one distinction the headline elides: the
cohorts measure fasting PLASMA erythritol, which is partly endogenous; the mechanism substudies measure
DIETARY erythritol. These are two different exposures answering two different questions.** For the
decision-relevant claim — *does ingesting erythritol raise hard cardiovascular outcomes?* — the evidence
state is **insufficient**, not benefit, harm, or no-effect: no RCT on hard outcomes exists, the cohort
signal has a live confound, and the mechanism is a surrogate from a single lab. (the
framing + evidence-state verdict is the wiki's own synthesis over the two cited sources)

## The two-exposure distinction (type-B — this is load-bearing)

Plasma/serum erythritol and dietary erythritol are **distinct objects** that the alarm conflates:

- **Endogenous plasma erythritol.** Erythritol is produced *in the body* from glucose via the
  pentose-phosphate pathway (PPP): «Erythritol is endogenously produced by the pentose phosphate
  pathway20,27, and the metabolite is readily observed in circulation. We speculate that erythritol
  levels in both validation cohorts originate from a combination of ingestion and endogenous production
  . While fasting samples in the US validation cohort (where enrollment largely preceded proliferation
  of erythritol in processed foods) likely reflect endogenous levels»
  [@witkowski2023erythritol]. By the source's own
  reading, the US validation cohort's enrollment «largely preceded proliferation of erythritol in
  processed foods», so its *fasting* plasma erythritol is largely a metabolic readout, not a diet
  marker [@witkowski2023erythritol]. (The source
  gives no explicit enrollment years for the US validation cohort; the 2001-2007 window it reports is
  the *discovery* cohort's [@witkowski2023erythritol].)
- **Dietary erythritol.** The ingestion substudies dose 30 g and watch plasma rise >1000-fold. That is
  the exposure a consumer controls.

**Why the distinction decides the case:** PPP flux (hence endogenous erythritol) rises with hyperglycemia
and oxidative stress, so fasting plasma erythritol is plausibly a **marker of dysglycemia / poor
cardiometabolic health** — which independently drives MACE — rather than a signal of what someone ate.
This is the reverse-causation / confounding-by-frailty family on [[The U-Shaped Association Artifact]] and
sits alongside the endogenous metabolite markers on
[[Insulin Resistance Surrogates and Cardiovascular Risk]]. Corroborating the marker reading, prior work
(cited by the source) tied plasma erythritol to incident type-2-diabetes and to central-adiposity weight
gain, and in the same discovery screen **1,5-anhydroglucitol — an established glycemic-control marker —
was *negatively* associated with MACE** [@witkowski2023erythritol].
The whole polyol/glycemic axis is entangled with cardiometabolic health, which is exactly what a
confound looks like.

## The cohort signal (observational; PLASMA exposure)

Fasting plasma erythritol vs incident 3-year MACE (death / non-fatal MI / stroke), across a discovery and
two validation cohorts, all at quaternary referral centers with high CVD / T2D / obesity burden:

| Cohort | n | Q4 vs Q1 crude HR [95% CI] | Q4 vs Q1 adjusted HR [95% CI] |
|---|---|---|---|
| Discovery (untargeted) | 1,157 | 3.22 [1.91-5.41] (top MACE metabolite) | 2.95 [1.70-5.12] |
| US validation | 2,149 | 2.64 [1.79-3.90] | 1.80 [1.18-2.77], P=0.007 |
| European validation | 833 | 4.48 [2.86-7.02] | 2.21 [1.20-4.07], P=0.010 |

[@witkowski2023erythritol]. Adjusted = traditional CV
risk factors; adding CAD history barely moved it (US 1.79 [1.17-2.74]; EU 2.14 [1.15-3.98]). Continuous:
per 1 uM higher erythritol, +21% (US) / +16% (EU) adjusted HR for MACE.

**Read the adjustment, not just the point estimate.** Adjusting for measured CV risk factors roughly
*halved* the hazard ratios (US 2.64 -> 1.80; EU 4.48 -> 2.21). A signal that large a fraction of which is
explained by the covariates that *were* measured is a signal whose remainder is plausibly explained by
the ones that were not — diet, dysglycemia severity, renal function, adiposity trajectory. The authors
concede the design «can only show association, and not causation» and flag «the possibility of unmodelled
confounding (e.g. diet)» [@witkowski2023erythritol].
**Transportability is also limited by construction**: single fasting measurement at enrollment; quaternary
referral population (the authors note general-population translatability «needs to be determined»).

## The mechanism (SURROGATE; mechanism-directional, discounted)

The mechanistic leg is what argues *toward* causality, but it stops at surrogate endpoints — platelet
reactivity, aggregation, granule release, animal thrombosis — never a hard human outcome. Admit it
**directionally, discounted**, per the mechanism-directional rule, never as an outcome finding:

- **In vitro / ex vivo (2023).** Physiological erythritol left-shifted the ADP and TRAP6 aggregation
  dose-response and dose-dependently enhanced aggregation in platelet-rich plasma; raised intracellular
  Ca2+ (thrombin), P-selectin and GPIIb/IIIa activation; and increased collagen-dependent platelet
  adhesion / thrombus in whole blood. **Glucose and 1,5-AHG (controls) did nothing**
  [@witkowski2023erythritol].
- **In vivo (2023).** Mouse FeCl3 carotid-injury: erythritol (25 mg/kg) sped clot formation and shortened
  time to cessation of flow vs saline or 1,5-AHG [@witkowski2023erythritol].
  Animal != human (transportability caveat).
- **Human interventional surrogate (2024).** n=10/group healthy young volunteers (\~30 y, no CVD /
  diabetes / hypertension, normal renal), 30 g erythritol vs 30 g glucose. Erythritol raised plasma
  >1000-fold (6480 [5930-7300] uM vs baseline 3.75 [3.35-3.87] uM); glucose did not change plasma
  erythritol. Erythritol acutely enhanced ADP- and TRAP6-induced aggregation in *every* subject and
  enhanced release of the dense-granule marker serotonin (P<0.0001 TRAP6; P=0.004 ADP) and the
  alpha-granule marker CXCL4 (P<0.0001 TRAP6; P=0.064 ADP); glucose did neither
  [@witkowski2024platelet]. Conclusion: erythritol «but not
  glucose, enhances platelet reactivity in healthy volunteers, raising concerns that erythritol
  consumption may enhance thrombosis potential» [@witkowski2024platelet].

**The dietary->surrogate bridge is the postprandial substudy** (2023 n=8; 2024 n=10): a single 30 g dose
(= one artificially-sweetened can, or a pint of keto ice cream) drives plasma erythritol above the
platelet-reactivity thresholds seen in vitro (Ca2+ 45 uM; aggregometry 18 uM; P-selectin 18 uM;
GPIIb/IIIa 4.5 uM) and keeps it there for >2 days
[@witkowski2023erythritol]. This is the strongest
part of the causal story — it connects a controllable exposure to the mechanism — but it lands on a
surrogate, in healthy people, with no outcome follow-up.

## Independence ceiling — this is type-F, not type-E

Both papers are the **same Hazen / Cleveland-Clinic program** (overlapping authors, same COSETTE trial
NCT04731363, same assays). The 2024 human study *refines and extends* the 2023 paper it cites — that is
**claim-refinement (type-F)**, not independent corroboration (type-E). The mechanism agreeing with the
cohort raises confidence *within* one program's evidence, but the confidence ceiling is one lab: there is
no independent replication of either the cohort association or the platelet mechanism. (The parallel
xylitol finding the 2024 paper invokes — «consistent with similar clinical and mechanistic findings
recently reported with the sugar alcohol xylitol» [@witkowski2024platelet]
— is *also* the same lab, so it does not add independence.)

## Evidence-state verdict and decision relevance

- **Dietary erythritol -> hard CV outcomes (MI / stroke / death): INSUFFICIENT EVIDENCE.** No RCT on hard
  outcomes; the human evidence is observational (on a confounded plasma exposure) plus a single-lab
  surrogate mechanism. Do **not** state that erythritol causes MACE. (the four-state
  verdict + decision framing below is the wiki's own synthesis over the two cited sources)
- **Plasma erythritol -> MACE: a real observational association with a live endogenous-production
  confound** — as consistent with erythritol-as-dysglycemia-marker as with erythritol-as-cause.
- **Direction of concern is real but small-lever and unproven.** Erythritol is not a big rock; by the
  Layer-1 ranking this is a peripheral question. The precautionary weight is highest precisely where the
  sweetener is marketed — high baseline thrombotic risk (diabetes, obesity, prior CVD, impaired renal
  clearance) — because *if* the effect is real, absolute risk scales with baseline (route (a),
  [[Baseline Risk and the Relative-Absolute Split]]); but the "if" is unresolved.
- **Substitution framing (the comparator is the effect).** Judge erythritol against its realistic
  alternative — sugar, another non-sugar sweetener, or water — not against nothing; this is the
  comparator logic on [[Non-Sugar Sweeteners]]. Replacing sugar-sweetened beverages
  (the well-evidenced SSB harm on [[Free Sugars Intake]]) with an erythritol drink trades a
  well-evidenced adiposity/T2D harm for an unproven thrombotic concern — a trade the current evidence
  cannot price.
- **Do not generalize across polyols/sweeteners.** Allulose has essentially no CV/thrombosis evidence;
  xylitol has a *same-lab* parallel signal, not independent confirmation. Each sweetener is its own
  exposure — the erythritol finding transports to none of them without its own evidence.

## Gaps `type-G`

- No RCT on hard outcomes (the state that would move this off "insufficient"); intervention trials with
  «appropriate duration of follow-up for clinically relevant outcomes» are what the authors themselves
  call for [@witkowski2023erythritol].
- No independent (non-Hazen-lab) replication of either the cohort association or the platelet mechanism.
- No study that separates endogenous from dietary plasma erythritol against outcomes (e.g. a
  Mendelian-randomization or a diet-quantified prospective design) — the one design that would break the
  confound. **AWAITS an independent erythritol->outcome cohort or MR study — resolves the
  endogenous-vs-dietary confound and the single-program ceiling.**

## References

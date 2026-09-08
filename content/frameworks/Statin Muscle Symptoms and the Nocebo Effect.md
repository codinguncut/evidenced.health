---
type: framework
question: When a person taking a statin reports muscle symptoms, is the statin the cause, and should they stop the drug?
aliases: [Statin Muscle Symptoms, Statin Intolerance, Statin Myalgia, Statin Nocebo, Statin Deprescribing, Statin-Associated Muscle Symptoms, SAMS, Statin Muscle Pain]
authors: [Cholesterol Treatment Trialists' Collaboration (org); Reith, Christina; Baigent, Colin; Wood, Frances A; Howard, James P; Francis, Darrel P; US Preventive Services Task Force (org)]
sources: [Reith - Statin Muscle Symptoms 2022, Wood - SAMSON Statin Nocebo 2020, USPSTF - Statin Use Primary Prevention 2022]
confidence: high
relationships:
  related_to:
    - Statins for Primary Prevention and the Power of Zero CAC
    - LDL Lowering and Cardiovascular Events
    - Statins and New-Onset Diabetes
    - The Observational-Trial Discordance
    - Baseline Risk and the Relative-Absolute Split
created: 2026-09-07
updated: 2026-09-07
self_critiqued: 2026-09-07
---
<div class="recent-page" data-last-updated="2026-09-07"></div>


Muscle symptoms are the most-cited reason people stop or refuse a statin, so the *tolerability* decision
is a distinct decision from the *efficacy* decision — it applies to everyone already on a statin (primary
**and** secondary prevention), and the wrong call (stopping a drug that is preventing vascular events for
a symptom the drug is not causing) is common and costly. The question is not *do statins ever hurt
muscles* (rarely, they do) but *when a specific patient reports muscle symptoms, what is the probability
the statin caused them, and does that probability warrant stopping?* Three sources answer it, and they
**compose** rather than corroborate: a large randomised IPD meta-analysis sizes the causal excess and its
timing (Reith/CTT), a blinded n-of-1 trial isolates the mechanism in the hardest stratum (SAMSON), and a
guideline systematic review gives the general-adult null (USPSTF).

## The size and timing of the real effect (Reith / CTT 2022)

The Cholesterol Treatment Trialists' Collaboration pooled **individual participant data on every recorded
muscle adverse event** from 19 double-blind statin-vs-placebo trials (n=123,940) and four
more-intensive-vs-less-intensive trials (n=30,724) — \~155,000 people, weighted median follow-up 4.3
years. Restricting to double-blind randomised trials is the design choice that isolates the *causal*
contribution of the drug from reporting bias.

- **The all-years excess is tiny.** 27.1% of statin-allocated vs 26.6% of placebo-allocated reported
  muscle pain or weakness: «rate ratio [RR] 1·03; 95% CI 1·01–1·06». [@reith2022muscle]
  A 0.5-percentage-point absolute difference over 4.3 years.
- **Almost all of it is in year 1.** «During year 1, statin therapy produced a 7% relative increase in
  muscle pain or weakness (1·07; 1·04–1·10), corresponding to an absolute excess rate of 11 (6–16) events
  per 1000 person-years, which indicates that only one in 15 ([1·07–1·00]/1·07) of these muscle-related
  reports by participants allocated to statin therapy were actually due to the statin. After year 1, there
  was no significant excess in first reports of muscle pain or weakness (0·99; 0·96–1·02).»
  [@reith2022muscle] The absolute excess after year 1 is 0 (-2 to 1)
  per 1000 person-years — an effectively flat second-year-onward curve. The heterogeneity test for year 1
  vs all later years was p=0·0005.
- **The intensity gradient.** «more intensive statin regimens ... yielded a higher RR than less intensive
  or moderate-intensity regimens (1·08 [1·04–1·13] vs 1·03 [1·00–1·05]) compared with placebo, and a small
  excess was present (1·05 [0·99–1·12]) for more intensive regimens after year 1.»
  [@reith2022muscle] So the higher-dose harm is larger (year 1 \~11%
  vs \~6% relative) and slightly more persistent — but the population-attributable fraction is still small.
- **No dose-response within a statin, no between-statin difference, generalisable across strata.** The RR
  did not differ by statin type, run-in design, or hydrophilic-vs-lipophilic solubility, and was similar
  across clinical circumstances — «our results are likely to be widely generalisable». The one prognostic
  signal: «The RR for muscle pain or weakness was greater in women for less intensive and moderate-
  intensity statin regimens ... (RRs 1·09, 99% CI 1·03–1·16 in women vs 1·00, 0·97–1·04 in men;
  heterogeneity p=0·0019)» — but this sex difference was **not** reproduced in the more-vs-less-intensive
  trials, so it is a weak, unreplicated subgroup signal, not a firm effect-modification claim (route-b bar
  unmet). [@reith2022muscle]

## Serious muscle injury is real, rare, and also front-loaded

Ordinary aches are not the dangerous end of the spectrum. «Myopathy ... was reported by 0·08% of those
assigned any statin regimen versus 0·04% of those assigned placebo (RR 1·74; 95% CI 1·11–2·74, p=0·016
...), which corresponded to an absolute excess of 0·08 (0·01–0·18) per 1000 person-years. The RR was 3·04
(1·43–6·47; p=0·0039) in year 1 and 1·28 (0·72–2·25; p=0·40) after year 1; thus, in year 1, statin therapy
was the cause of approximately two-thirds ([3·04–1·00]/3·04) of myopathy cases reported by patients
allocated to a statin.» [@reith2022muscle] So myopathy — unlike
ordinary myalgia — is *mostly* drug-caused when it occurs, but it is \~50x rarer than reported aches (0.08
vs 11 per 1000 py excess). The severe tail (rhabdomyolysis) was confined to 80 mg simvastatin (now
withdrawn) -> the rhabdomyolysis magnitude is held on [[LDL Lowering and Cardiovascular Events]].

## Why the reported burden is mostly not the drug — the nocebo mechanism (SAMSON)

Reith establishes that >90% of reported muscle symptoms on a statin are not caused by it, but a
population RR cannot show *what* produces the other 90%. SAMSON supplies that within-person, in exactly
the stratum that matters — people who had «previously discontinued statins because of side effects that
occurred within 2 weeks after the initiation of treatment». Each of 60 patients rotated month-by-month
through atorvastatin 20 mg, placebo, and no-tablet, scoring symptoms daily.

- «In patients who had discontinued statin therapy because of side effects, 90% of the symptom burden
  elicited by a statin challenge was also elicited by placebo.» [@wood2020samson]
- Mean symptom intensity 8.0 no-tablet, «15.4 during placebo months ... and 16.3 during statin months ...
  P = 0.39 for the com-parison with placebo months». [@wood2020samson]
  Taking a tablet at all roughly doubled symptoms; statin vs placebo was indistinguishable. The symptoms
  are real; they are not statin-specific. Full extraction on the source page.

## The three sources compose — they are NOT independent backings

It is tempting to read three sources reaching *most muscle symptoms are not the statin* as a robust
type-E convergence. It is not: they measure **different quantities in different populations**, and two of
the three share their evidence base.

| Source | Quantity measured | Population | Design |
|---|---|---|---|
| Reith / CTT 2022 | causal excess vs placebo (RR 1.03; year-1 excess 11/1000 py) | general statin-trial adults | IPD MA of parallel double-blind RCTs |
| SAMSON (Wood) 2020 | nocebo ratio 0.90 (within-person) | *symptomatic-intolerant* (already stopped for side effects) | blinded n-of-1 crossover |
| USPSTF 2022 | myalgia RR vs placebo (no increase) | general adult primary-prevention | systematic review of statin RCTs |

- **Reith and USPSTF are not independent** — both pool largely the *same* double-blind statin RCTs, so
  their agreement is one evidence base read twice, not two.
- **Reith and CTT-2010 are the same body** (the CTT Collaboration, CTSU-Oxford), so Reith's benefit side —
  «statins might cause 11 (generally mild) episodes of muscle pain or weakness, but prevent 50 major
  vascular events in those with pre-existing vascular disease ... and 25 major vascular events in those
  without» [@reith2022muscle] — is CTT's own prior efficacy work
  restated (cited to ref 2), **not** an independent confirmation of the benefit magnitude
  -> [[LDL Lowering and Cardiovascular Events]].
- **Reith and SAMSON differ in design, population, and quantity**, so they *compose* (population magnitude
  + within-person mechanism) rather than independently confirming one number. The composite — a small
  causal excess confined to year 1, with the rest of the reported burden reproducible by an inert pill — is
  what no single source states. That is the beyond-summary move here, and it is type-A/F, not type-E.

## Decision relevance — the deprescribing rule

- **A symptom in someone who has tolerated a statin for a year or more is very unlikely the statin.** The
  excess is confined to year 1, so the prior probability that a *new* symptom after that is drug-caused is
  near baseline. «This finding is particularly true if the treatment has been well tolerated for a year or
  more before developing symptoms; but, even during the first year of a moderate-intensity statin regimen,
  it is likely to be the cause in only approximately one in 15 patients who report muscle symptoms, rising
  to approximately one in 10 in those who are taking a more intensive regimen.»
  [@reith2022muscle]
- **Continue, don't stop reflexively.** Reith's own management implication: «for patients who report mild
  muscle symptoms when taking a statin ... it is most likely that the symptoms are not due to the statin,
  and statin therapy should continue until other potential causes have been explored.»
  [@reith2022muscle] (Serious myopathy — pain with markedly raised
  creatine kinase, not an ordinary ache — is the exception and does warrant stopping; it is rare and
  usually front-loaded.)
- **The benefit-harm trade runs strongly toward continuing.** The muscle harm is front-loaded and mild; the
  cardiovascular benefit *grows* with duration («9% [99% CI 3–15%] in year 1 vs 24% [95% CI 21–26%] in
  years 1 to ≥5»). [@reith2022muscle] So the longer a person stays
  on, the more the ledger favours staying on.
- **A dose de-escalation is a lever short of stopping.** Because the excess is intensity-graded, a person
  with genuine year-1 intolerance to a high-intensity regimen can often move to a moderate-intensity one
  (smaller excess, most of the LDL benefit) rather than abandoning the drug — a substitution, not a binary.
- **This sizes the rock (pharmacotherapy taper).** The statin muscle-symptom scare is a large driver of
  non-adherence, and the evidence says the scare is mostly nocebo — so the *tolerability limitation* that
  appears to shrink the statin lever mostly does not. This is the standard-drug LIMITATION appraisal the
  taper calls for: appraised, the limitation is small, which keeps the statin's marginal rank high.
- **The statin's OTHER harm — new-onset diabetes — differs from this one in KIND.** Muscle symptoms are
  >90% nocebo (a *perceived* harm the drug mostly does not cause); the glycaemic effect is a small but
  *real* pharmacological harm, concentrated in people already near the diabetes threshold. The two harms
  therefore call for opposite handling — reassure-and-continue for muscle aches, versus a genuine
  (still-outweighed) metabolic cost to weigh -> [[Statins and New-Onset Diabetes]]. (Both endpoints come
  from the same CTT body, so their appraisal is one lab's work, not independent confirmation.)
  [inferred from @reith2024diabetes]

## Limits

- **Population is trial-enrolled and largely older/higher-risk** (mean age 63, \~48% with vascular disease);
  most trials completed enrolment before statins were generic and did not screen out today's
  "statin-intolerant" phenotype, so the estimate is for the general treated population, not for a
  pre-selected intolerant person (that is SAMSON's stratum).
- **Ascertainment was heterogeneous** (first-year reporting rates ranged 1.0%–60.5% across trials); the RR
  was stable across that range, but symptom capture was not designed as a primary endpoint in the source
  trials.
- **The open loop (R1).** No source here randomises a *deprescribing strategy* (continue-and-explain vs
  stop) against patient-important outcomes — the *continue until other causes explored* rule is inferred
  from the causal-attribution evidence, not tested as an intervention. SAMSON's 50% naturalistic restart
  rate is an observation, not a tested rescue.

[inferred from @reith2022muscle; @wood2020samson; @uspstf2022]

## References

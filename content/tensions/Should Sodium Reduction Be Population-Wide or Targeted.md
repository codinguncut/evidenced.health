---
type: tension
question: Should sodium reduction be recommended population-wide (everyone lowers toward <2 g/day), or targeted only to hypertensives with high intake?
aliases: [Population-Wide vs Targeted Sodium Reduction, PURE Sodium Controversy, Sodium J-Curve Policy Tension, Is Universal Salt Reduction Justified]
authors: [Mente, Andrew; O'Donnell, Martin; Yusuf, Salim; World Health Organization (org); He, Feng J; MacGregor, Graham A; Huang, Liping; Blood Pressure Lowering Treatment Trialists Collaboration (org); Rahimi, Kazem; Graudal, Niels Albert; Hubeck‐Graudal, Thorbjørn; Jűrgens, Gesche]
sources: [Mente - Urinary Sodium Cardiovascular Events Hypertension PURE 2016, WHO - Sodium Intake 2012, He - Salt Reduction Blood Pressure 2013, Huang - Sodium Dose Duration Blood Pressure 2020, BPLTTC - Blood Pressure Lowering Primary and Secondary Prevention 2021, Graudal - Low vs High Sodium Cochrane 2020]
cluster: sodium-bp
confidence: medium
relationships:
  related_to:
    - Sodium Intake and Blood Pressure
    - The U-Shaped Association Artifact
    - Blood Pressure Lowering and Cardiovascular Events
    - Measurement Error in Dietary Assessment
    - Baseline Risk and the Relative-Absolute Split
    - Surrogate Outcomes
    - Net Effect vs Intended Effect
created: 2026-08-27
updated: 2026-10-22
self_critiqued: 2026-10-22
---

Two policy readings of the sodium -> cardiovascular evidence that give **opposite decisions for \~90%
of the population**. The held pole (WHO 2012, the He/MacGregor lineage) recommends a
**population-wide** reduction toward <2 g/day sodium. The PURE pole (Mente 2016) recommends reduction
**only** for hypertensives who also eat a lot of salt, on the strength of a directly-observed J-curve
on hard outcomes. The held evidence sits on [[Sodium Intake and Blood Pressure]]; this page is the
joined issue. It does **not** resolve — the deciding check exists on neither side — and the value is in
seeing that the two literatures partly **measure different things over different ranges**, so the raw
clash overstates the real disagreement while the policy conclusions genuinely conflict.

## Both positions in their own terms

- **Population-wide (WHO 2012 + the He/MacGregor lineage).** Sodium -> BP is a **high-certainty,
  roughly linear** dose-response with no plateau in the studied range; WHO transfers that surrogate
  evidence one certainty level down to hard outcomes (Annex 8) and issues a **strong** recommendation to
  reduce to <2 g/day for everyone [@who2012]. The observed
  low-sodium-harm signal is read as **artifact** — He 2013
  attributes it to measurement error, confounding, and reverse causality
  [@he2013], and Huang 2020 to «biased
  estimation of sodium intake» [@huang2020]
  -> [[Sodium Intake and Blood Pressure]].
- **Targeted (PURE / Mente 2016).** In a pooled analysis of 133,118 people from 49 countries (three
  cohorts; \~10,000 events; median 4.2 y), the sodium -> hard-outcome curve is **J-shaped**: risk lowest
  at 4-5 g/day and **higher at both <3 g/day and >7 g/day**, with the *high*-intake harm **confined to
  hypertensives**. Mente concludes sodium reduction should be aimed only at hypertensives with high
  intake — only \~10% of the studied population had **both** hypertension and >6 g/day intake — and
  argues against a population-wide approach except in very-high-intake regions.
  [@mente2016pure]
- **Targeted, from the RCT side (Graudal 2020) `[2026-10-22]`.** A Cochrane review of 195 RCTs (203 -> 65
  mmol/day) reaches the targeting conclusion on an RCT surrogate leg: the BP fall is \~5.7 mmHg
  SBP in white hypertensives but \~1.1 in white normotensives, while renin, aldosterone, noradrenaline,
  cholesterol and triglyceride all rise (high certainty). For normotensives it concludes «these results do
  not support that sodium reduction may have net beneficial eﬀects in a population of white people with
  normal BP», and it cites Mente's targeting conclusion as matching its own. The RCT leg is a different design from
  PURE, so on that leg it is a separate evidence stream. What it shares with Mente is the camp, the
  interpretation and the cohort low-arm leg: Graudal and Mente co-wrote a 2018 letter, and Graudal's
  low-arm mortality case rests on cohorts (its Discussion Table 4 pools PURE among them), including its
  own 2014 meta-analysis of them.
  [@graudal2020sodium]

**Naming note:** *Cochrane* does not mark a pole. He 2013 (population-wide side) and Graudal 2020 (targeted
side) are both Cochrane reviews of overlapping RCTs. The poles are named by lineage here (He/MacGregor vs
Graudal), never by the publishing body.

## Parameter table — is this the same quantity? (op-weave 2a)

Built before any prose comparing the poles. The columns are matched claims about the sodium -> outcome
relationship; the last column is the joined-issue test.

| Parameter | Population-wide pole | PURE / Mente pole | Graudal pole (RCT, targeted, added 2026-10-22) | Same quantity? |
|---|---|---|---|---|
| **Primary outcome** | BP (surrogate, HIGH certainty), transferred to CVD one level down | death + MI + stroke + HF (hard, DIRECTLY observed) | BP + renin/aldosterone/NA/lipids (surrogates, high certainty), no transfer to outcomes | **Pop-wide vs PURE: NO** (surrogate-transfer vs direct hard outcome). Graudal vs pop-wide: YES on BP; Graudal adds markers and declines the BP-to-outcome transfer |
| **Exposure measured** | *achieved reduction* in RCTs (24h urine / randomised contrast) | *estimated habitual level* from a single fasting **spot** urine + Kawasaki formula | randomised contrast; 24-h or >=8-h urine | **Pop-wide vs PURE: NO** (randomised reduction vs spot-urine habitual intake). Graudal vs pop-wide: MOSTLY (both randomised, urine-measured; Graudal also admits >=8-h samples) |
| **Intake range covered** | RCTs mostly reduce \~9-10 -> \~5-6 g/day salt (\~2 g sodium); shorter trials go lower | the harm signal lives at **<3 g/day sodium** | \~203 -> \~65 mmol/day (\~1.5 g sodium), mostly short trials | **PARTLY (corrected 2026-10-22)** — RCTs reach the low arm on BP and markers over weeks, not on hard outcomes or over years; 24-h urine vs spot-urine scale |
| **Shape claimed** | linear/monotone over studied range, no plateau shown | **J** (nadir 4-5 g/day), both arms elevated | renin/aldosterone rise exponentially below \~100 mmol/day (Brunner 1972, cited by Graudal; no fitted breakpoint); normotensive BP fall small | the shapes describe different ranges — not directly comparable |
| **Design / confounding** | RCT for BP (randomised); cohort for hard outcomes (VERY LOW) | cohort throughout — confounding + reverse causation live | RCT for surrogates; pooled cohorts (incl. PURE) for hard outcomes | both lean on observational data for the hard-outcome claim |
| **Policy conclusion** | reduce **everyone** to <2 g/day (strong) | reduce **only** hypertensives with high intake | no support for net benefit in white normotensives; supplementary treatment in hypertensives | **the genuine, joined conflict: pop-wide vs both targeted poles** (PURE and Graudal agree with each other) |

Graudal column: [@graudal2020sodium]

## Is the issue joined? — the not-joined checks

- **(i) Same observable, different words?** No. The poles predict **opposite signs** for the sodium ->
  CVD association at <3 g/day (population-wide: lower is better, transferred from BP; PURE: lower is
  *worse*, directly observed). A real contradiction, not a verbal one.
- **(ii) Different scope / horizon / unit?** Partly, and this is the payoff. The poles are **not
  measuring the same exposure** (a randomised reduction vs a spot-urine-estimated habitual intake), the
  population-wide pole's hard-outcome claim is **transferred from a surrogate** while PURE's is direct,
  and the disputed low arm sits **outside the RCT-studied range** (on hard outcomes and over years;
  corrected 2026-10-22, see point 3 below). So the two literatures partly talk
  past each other — but they are matched on the one thing a policy needs: *should the whole population
  reduce sodium?*, where they give opposite answers. **Joined on the decision.**
- **(iii) Cherry-picking part of a multi-position author?** Checked against WHO's full position. WHO
  does **not** assert monotone benefit on hard outcomes with confidence — it rates that evidence VERY
  LOW, *names* the J-shaped hypothesis as the reason for its review, then never adjudicates it, and
  excludes a priori the strata where a lower-arm harm is most plausible -> [[Sodium Intake and Blood Pressure]]. So the population-wide pole's hard-outcome leg rests on **surrogate-transfer plus the
  He/Huang advocacy dismissal of the J**, not on a confident direct finding. Represented at that width,
  the issue is still joined on policy.

**Verdict: JOINED on the decision, but asymmetric in evidence type and non-identical in exposure.** The
disagreement is real and consequential, and it is *smaller than it looks* on the shape question (the
poles describe different ranges) while *exactly as large as it looks* on the policy question.

## The hidden insight — one dispute is actually several stacked ones

The sodium-policy clash is not a single disagreement about a number; it is three (a fourth, from inside
the RCT literature, added 2026-10-22), and none is settled:

1. **Exposure measurement.** A randomised sodium *reduction* (population-wide pole) is not the same
   exposure as a habitual intake *estimated from one spot urine* (PURE). Spot-urine + Kawasaki recovers
   an absolute intake but from a **single day**, and it is error-prone precisely at the **extremes** —
   the He/Huang critique's «biased estimation of sodium intake» — which is where PURE's J-arms live.
   Measurement error that is unequal across the range can **bend a flat relationship into a U** with no
   bias and no confounder -> [[Measurement Error in Dietary Assessment]], [[The U-Shaped Association Artifact]].
2. **Evidence type.** Surrogate-BP-RCT-transferred-to-outcomes (population-wide pole) vs
   direct-hard-outcome-observational (PURE). The first is randomised but on a surrogate; the second is on
   the real endpoint but confounding-prone. Neither is a randomised hard-outcome trial of sodium level
   -> [[Surrogate Outcomes]].
3. **Intake range.** The RCTs barely reach <3 g/day, so they cannot *see* the low arm PURE reports; PURE
   observes it but cannot randomise it. The literatures are strongest in **non-overlapping** ranges.
   **Corrected 2026-10-22:** that sentence mixed salt and sodium units. RCT low arms do reach PURE's
   <3 g/day *sodium* range — He's \~78-87 mmol/day (\~2 g sodium), Graudal's \~65 mmol/day (\~1.5 g), 82% of
   Graudal's comparisons below 100 mmol — but over weeks and on BP and markers only. They do not reach it
   on hard outcomes or over years, and the scales differ (24-hour urine vs one spot urine + Kawasaki).
   So the RCT surrogate data at the low arm (a small normotensive BP fall, marker rises) are themselves
   evidence bearing on the J. [@graudal2020sodium] [inferred from @he2013]

4. **The compensation arm's time course `[2026-10-22, Graudal 2020]` `type-D` (renin and aldosterone only).** This one is fought
   inside the RCT literature, so it does not depend on the cohort J. Both lineages find renin,
   aldosterone and noradrenaline rising when sodium falls. Graudal offers that counter-regulation as «a
   possible explanation» for the small BP fall; He calls it «compensatory» to the volume fall and expects
   it to attenuate; Huang does not link it to the BP shortfall. They split on **how long it lasts**. On
   renin and aldosterone, Huang says *not present* in longer trials while Graudal 2020 argues the rises may
   persist and WHO says they «persisted», so Huang and Graudal 2020 predict opposite observables (WHO, on
   the population-wide pole, sides with Graudal here). On lipids and noradrenaline the population-wide pole says the
   rises fade, and Graudal 2020 calls that undocumented without predicting persistence.
   - **Population-wide pole:** the rises (and Graudal's lipid rise) are artifacts of short, sharp-cut
     trials and fade (Huang, He; WHO excepts renin and aldosterone, below). Huang: these responses «do not, however, appear to be present in longer term
     interventions» [@huang2020]. Huang
     cites two sources for this: He 2013, and Rhee 2016, a renin study (population analysis plus meta-analysis of RCTs) the wiki does not hold
     [@huang2020] — the renin-specific warrant behind Huang's *not present*; would let Huang's renin warrant be checked from held sources.
     He is the more hedged: its own hormone trials all ran four to six weeks and still show the rises,
     smaller, and it writes «It is likely that such effects might attenuate over time.» Its support is one
     12-month trial (Beckmann) in which noradrenaline and adrenaline fell, but alongside weight loss and a
     saturated-fat reduction, so it is not a sodium-only contrast.
     [@he2013]
     WHO, also on this pole, splits the markers: lipids and catecholamines transient, but «Although the changes in renin and aldosterone levels persisted with longer term reduced sodium intake, the importance of these changes is uncertain (40, 41).»
     [@who2012] WHO pooled no renin or aldosterone; its «transient» sentence cites Graudal's
     2011 edition (WHO ref 33), and its «persisted» sentence cites only renin-prognosis reviews (refs
     40-41); the persistence claim plausibly carries over from the paragraph's evidence source, Graudal
     2011 (ref 33, not held), so it adds no independent data and cannot be checked here. On renin and
     aldosterone it still conflicts with Huang's blanket *not present* (Huang's renin warrant partly rests
     on the unheld Rhee 2016, so this intra-pole split cannot be adjudicated from held sources).
     [@who2012]
   - **Graudal:** the claim that duration understates BP while overstating side effects «has not been
     documented, but still has been used to disregard side eﬀects shown in studies lasting less than four
     weeks». Few trials longer than four weeks measure side effects, and those stop at milder contrasts.
     Persistence is argued from observational citations: «The assumption that at least some of these
     eﬀects may be persistent and not just temporary has been indicated in observational studies.»
     [@graudal2020sodium]

   **Joined (type-D) on renin and aldosterone, where opposite observables are predicted.** Huang: *not
   present* in longer trials. Graudal 2020: «at least some of these eﬀects may be persistent», with its
   positive persistence evidence covering renin and aldosterone only. WHO: «persisted». **On lipids and
   noradrenaline the dispute is over the warrant only — a burden-of-proof distinction plus a G-gap (no
   months-scale fixed-contrast data), not a D.** The population-wide pole asserts that they fade (resting
   on Graudal 2011's own >=4-week subgroup, which He reports for lipids; WHO's citation of Graudal 2011
   (ref 33) for catecholamine transience after 4 weeks; WHO's n.s. pools; He's one confounded 12-month
   trial); Graudal 2020 disputes the warrant (undocumented; longer trials stop at milder contrasts) without
   predicting persistence. Not-joined checks: (i) on renin and aldosterone Huang and Graudal 2020 (with WHO)
   predict different observables — rises gone vs still present after *months* at a fixed contrast (at 4-6 weeks He's renin
   and aldosterone rises are present, smaller); on lipids and noradrenaline only the population-wide pole
   commits to one (He's lipids and WHO's cholesterol and noradrenaline at 1-2.5 months are n.s.); (ii) the
   horizon is matched (both speak of long-term persistence), but contrast is not: Huang's «acute large
   falls» bundles size with duration, so the D holds only on this page's reading that Huang predicts
   fading at a fixed contrast; (iii) checked against each side's full
   position — He hedges where Huang asserts, WHO's renin and aldosterone persistence rests on a sentence
   citing only prognosis reviews, and Graudal 2020's subgroup starts at 7 days with no >=4-week estimate.
 **No held source pools persistence or measures it repeatedly within-trial at a fixed,
   sodium-only contrast**; the primary-pool hormone data run four to six weeks in He's trials (Graudal's
   primary-pool durations are not extracted here) and to 2.5 months in WHO. Graudal lists several parallel
   trials outside its primary marker pools (re-added in all-duration sensitivity analyses), reported in the
   text as changes «during sodium reduction» — Meland 2009 (56 days), Sciarrone 1992 (56 days) and Bulpitt
   1984 (90 days), lipid outcomes reported qualitatively («No changes» / «Minor decrease» / «Minor increase»), and Jula 1994 (365 days per its study table: renin 0.7 -> 1.1
   ng/ml/h, aldosterone 297 -> 363 pg/ml, noradrenaline «unchanged from 610 to 520 pg/ml»)
   [@graudal2020sodium]. That one open, not separately pooled,
   12-month record fits renin and aldosterone still raised at 12 months and noradrenaline not raised then
   (no earlier timepoint is reported, so fading vs never-rising cannot be told apart); Graudal holds it but
   does not argue from it.
   On BP the data do not split: Graudal's within-trial Table 2 and Huang's own six multi-timepoint trials
   and multivariable meta-regression are all null on duration. Huang's doubling beyond two weeks is a
   subsidiary split with overlapping intervals, which Huang nonetheless affirms («Short term studies
   underestimate the effect of sodium reduction on blood pressure.») [@huang2020].
   The BP leg is joined on interpretation only.
   **Hidden insight:** across trials, duration and contrast size travel together, and the sources say so
   (He's «sudden and large», Huang's «large, short term reductions», Graudal's long trials stopping «above
   87 mmol/day»). Graudal cites an exponential renin/aldosterone rise below \~100 mmol/day (Brunner 1972;
   no fitted breakpoint). For the markers, no held
   source scales per mmol or models contrast and duration jointly, so smaller rises in long trials fit
   either the time-decay story or the dose story. For BP, Huang's per-50-mmol scaling and joint model
   leave the confound alive only if the dose-response is concave at deep cuts. The deciding evidence is
   repeated within-trial measurement of BP, hormones and lipids at a fixed modest contrast over months,
   which neither side holds. Parameter tables: [[Sodium Intake and Blood Pressure]].
   [inferred from @graudal2020sodium; @huang2020; @he2013] `type-G`

   **Why it matters for the policy clash.** If the counter-regulation fades, the side effects are
   transient — the population-wide reading. If it persists, the small normotensive BP fall comes with a
   lasting renin and aldosterone shift (lipid persistence is predicted by neither side) whose outcome cost nobody has measured — the reading the targeted poles draw. Persistence alone does not decide the
   policy: WHO concedes renin and aldosterone persistence yet still recommends population-wide reduction,
   judging the importance of the change uncertain [@who2012]. Neither
   lineage translates the markers into outcome risk, so this dispute decides *which surrogate story to
   believe*, not the outcome -> [[Net Effect vs Intended Effect]]. It does not change the size of the
   normotensive BP lever, which is small either way (below).

**The decisive check exists on neither side.** A confounder-immune adjudication of the low arm on hard
outcomes — a referent-correction or a genetic/Mendelian-randomization instrument, or a large long-term
RCT of sodium *level* (not just reduction) — is what would settle it, and the corpus holds none. Mente
himself concedes that observational analysis cannot definitively prove causality and calls for such RCTs.

## A cross-source note on the targeting rationale — not an adjudication

Part of Mente's case for *targeting* rests on a premise about blood-pressure lowering: citing pre-2016
meta-analyses and HOPE-3, he argues BP-lowering benefit is observed only «in those with a systolic BP
of >140 mm Hg». The wiki holds a **later, larger** source that reaches the opposite conclusion on that
specific premise: BPLTTC 2021 (IPD-MA, 344,716 participants) finds a 5 mmHg SBP reduction cuts major CV
events by \~10% **«irrespective of previous diagnoses of cardiovascular disease, and even at normal or
high-normal blood pressure values»**, with «in no subgroup was the HR above 1·0»
-> [[Blood Pressure Lowering and Cardiovascular Events]]. This **weakens the targeting rationale's
BP-lowering premise** (evidence-base / lag, telos divergence class 2/4) — but it does **not** settle the
tension, because PURE's low-arm signal is a **direct** sodium -> CVD observation adjusted for BP and
still present, which is a separate claim from *does lowering BP help below 140*. The shape dispute
(points 1-3 above) stands; only one supporting argument for Pole B is undercut.
[inferred from @mente2016pure; @bplttc2021]

## Where this leaves the decision

For a **hypertensive with high intake**, both poles agree: reduce sodium (large BP effect in this
stratum; the high-intake harm signal is concentrated here). Graudal 2020, the RCT-side skeptic, agrees too: in
hypertensives sodium reduction «may be used as a supplementary treatment for hypertension»
[@graudal2020sodium]. The agreement is on direction only. Graudal
adds, framed as «The hypothetical consequences of the present findings», that «People with
hypertension may benefit due to the eﬀect on BP, but may also suﬀer from harms due to the side eﬀects.»
[@graudal2020sodium], and the target level stays disputed (<2 g/day vs PURE's 4-5 g/day nadir). For a **normotensive at moderate intake
(3-6 g/day)**, the poles diverge and the evidence is genuinely unsettled — the population-wide pole
offers a surrogate-transferred benefit, PURE offers a direct-but-unadjudicated low-arm harm signal, and
neither has the confounder-immune check. The honest fabric state is **insufficient evidence on the low
arm**, not a resolved recommendation -> [[Sodium Intake and Blood Pressure]]. What does not hang on the
dispute: the normotensive BP fall is \~1-2.4 mmHg SBP, which on BPLTTC's HR 0.91 per 5 mmHg in people without CVD
(conditional on BP lowering protecting the same way whatever lowers it) is \~2-4.5% fewer major CV events,
relative [@graudal2020sodium] [@he2013] [@bplttc2021]
. For a
low-risk normotensive that is a **small lever whichever pole is right** — a ceiling-is-a-finding
result -> [[Blood Pressure Lowering and Cardiovascular Events]].

## References

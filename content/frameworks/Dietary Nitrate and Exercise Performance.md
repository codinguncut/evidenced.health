---
type: framework
question: Does inorganic nitrate / beetroot supplementation improve endurance exercise performance — on which endpoints, for whom (trained vs recreational), at what dose, and with what certainty?
aliases: [Dietary Nitrate and Endurance, Beetroot Juice and Endurance, Nitrate Ergogenic, Beetroot Performance, Dietary Nitrate Ergogenic Aid, Nitrate and Exercise Performance]
authors: [Gao, Chloe; Gupta, Saurabh; Belley-Cote, Emilie P; Whitlock, Richard P]
sources: [Gao - Nitrate Endurance Performance 2021]
cluster: supplements
confidence: low
relationships:
  related_to:
    - Dietary Nitrate and Blood Pressure
    - Ketogenic Diet and Endurance Performance
    - Creatine Supplementation
    - Surrogate Outcomes
    - Physical Activity and Fitness Hub
    - Baseline Risk and the Relative-Absolute Split
created: 2026-09-24
updated: 2026-09-24
self_critiqued: 2026-09-24
---

**Same exposure, different outcome.** Inorganic nitrate / beetroot is the identical exposure appraised
on blood pressure in [[Dietary Nitrate and Blood Pressure]] — this page is the **endurance-performance**
outcome, a distinction, not a tension: the BP effect and the ergogenic effect are separate claims on
separate endpoints and must not be conflated (a BP-lowering finding is no evidence of an ergogenic one,
or the reverse). Both plausibly share the nitrate-nitrite-NO mechanism, but each carries its own
evidence.

**Scope note.** Athletic performance is *peripheral* on the wiki's outcome menu (the core stratum is a
reasonably-healthy non-athlete; longevity/healthspan/function are central). Performance endpoints are
patient-important-adjacent for a competing endurance athlete and are graded here on the same evidence
bar as any exposure, but the Layer-1 ranking keeps this a small, low-priority lever for most people.
The same-exposure/different-outcome distinction and the peripheral-scope placement are the wiki's own
framing, applying the outcome-menu and Layer-1 rules to this source.

## The evidence

Gao 2021 is a **systematic review and meta-analysis of 73 placebo-controlled RCTs (n = 1061)** of
dietary nitrate supplementation vs placebo in adults doing endurance-based exercise, random-effects
pooling, GRADE certainty [@gao2021nitrate]. All trials
were placebo-controlled and single-centre; participants ranged from sedentary to elite, **the majority
recreationally active healthy adults** [@gao2021nitrate].
The supplements were **commercial nitrate products** (blends of nitrate-rich foods/extracts), not whole
foods — «our results should be interpreted in con- text of commercial nitrate supplementation, rather
than ingestion of natural foods» [@gao2021nitrate], so the
result does not transport cleanly to eating beetroot or leafy greens.

## Effect by outcome — mean difference (95% CI), heterogeneity, GRADE certainty

The pattern that carries the decision: nitrate moves **open-loop lab tasks** (constant-load time to
exhaustion; power) but **not the closed-loop race-simulation** endpoint (time trial), and does not raise
maximal capacity (VO2max). Every estimate is **low or very-low certainty** (all downgraded for risk of
bias, most for further reasons). [@gao2021nitrate]

| Outcome | Studies | MD (95% CI) | P | I2 | GRADE | State |
|---|---|---|---|---|---|---|
| Power output (W) | 28 | +4.59 [2.6, 6.58] | <0.0001 | 0% | low | benefit (small) |
| Time to exhaustion (s) | 20 | +25.27 [12.69, 37.84] | <0.00001 | 38% | low | benefit |
| Distance travelled (m) | 2 | +163.73 [18.4, 309.1] | 0.03 | 0% | very low | benefit (fragile — 2 trials) |
| Time trial performance (s) | 28 | -1.98 [-4.37, 0.41] | 0.10 | 8% | low | no significant effect |
| Work done (kJ) | 4 | +0.02 [0.0, 0.03] | 0.09 | 0% | low | no significant effect |
| VO2 / O2 cost (L/min) | 42 | -0.04 [-0.05, -0.02] | <0.0001 | 0% | low | reduced (efficiency surrogate) |
| VO2max (L/min) | 10 | +0.04 [-0.02, 0.10] | 0.23 | 0% | very low | no effect |
| RPE (Borg) | 20 | -0.11 [-0.34, 0.12] | 0.36 | 62% | very low | no effect |
| Blood lactate (mM) | 23 | -0.08 [-0.21, 0.05] | 0.22 | 12% | very low | no effect |

**Read the four evidence states apart** [INFERRED, from the per-outcome CIs above]:
- **Benefit** (CI excludes null): power, time to exhaustion, distance travelled.
- **No meaningful effect** (reasonably-powered null, CI around zero): time trial performance (28 trials)
  and VO2max (10 trials) — these are *evidenced nulls*, not silence. Work done points null too (CI
  [0.0, 0.03] kJ) but rests on only 4 trials, so it is a weak null.
- **Insufficient / fragile**: distance travelled rests on only 2 trials (very-serious imprecision, hence
  very-low certainty despite significance — a wide CI [18, 309] read off few studies).
- The RPE and lactate nulls are very-low certainty, so closer to *insufficient* than a firm null.

**The decision-relevant gap: the endpoint that matters least is the one that moved most.** Time to
exhaustion — ride/run to failure at a fixed load — is a lab construct, easy to shift and not how races
are won; the authors themselves flag it as a nuanced outcome sensitive to test design
[@gao2021nitrate]. **Time-trial performance — complete a
set distance as
fast as possible, the closest proxy to a real race — showed no significant effect across 28 trials.** A
reader optimizing for competition outcomes should weight the TT null heavily and the TTE benefit
lightly; the streetlight here shines on the wrong endpoint.
[INFERRED, from the TTE vs TT contrast in the table]

## Mechanism — efficiency, not capacity

Nitrate is reduced to nitrite (oral bacteria) then to NO (acidic stomach), supplementing endogenous NO;
NO promotes vasodilation and improves type-II fibre and mitochondrial efficiency, **lowering the oxygen
cost of a given workload** [@gao2021nitrate]. The measured
VO2 reduction (−0.04 L/min) is the fingerprint of this mechanism; the unchanged VO2max says the effect
is on **economy, not maximal aerobic capacity** — nitrate makes a given effort cheaper, it does not
raise the ceiling. Plasma nitrate/nitrite peak a few hours after ingestion and return to baseline in
\~24 h [@gao2021nitrate]. Both VO2 and lactate are
**surrogates** ([[Surrogate Outcomes]]) — the VO2 drop corroborates the mechanism but is not itself a
performance benefit.

## Trained vs recreational — the one effect-modification signal (weak, surrogate-only)

Subgroups were attempted by dosing length, athletic level, nitrate source, age, co-supplementation, and
risk of bias; **daily-dose data were insufficient** to subgroup. Only **one** interaction reached
significance: athletic level × treatment on **VO2** (interaction p = 0.005) — a significant O2-cost
reduction in **recreational** athletes (MD −0.05 [−0.07, −0.03]) but **null in elite** (0.01 [−0.02,
0.04]) and sedentary (0.06 [−0.16, 0.29]) athletes
[@gao2021nitrate].

This is a **route-(b) effect-modification** claim, and it is held weakly:
- It is **positive interaction evidence** (not mere mechanism-inference), and its **direction matches
  the standing expectation** that nitrate's ergogenic effect attenuates in highly-trained athletes — the
  authors reason elite muscle-fibre efficiency «may already be optimized»
  [@gao2021nitrate].
- But it is on the **VO2 surrogate, not a performance endpoint**; it is **one significant interaction
  out of many tested**, unadjusted for multiplicity; and the authors caution «we cannot draw con-
  clusive inferences from this potential interaction as sub- group analyses are prone to type II errors,
  especially in a meta-analysis where subgroup analyses are not adjusted for multiplicity»
  [@gao2021nitrate].

So: the trained-attenuation prior gets **partial, low-certainty support** — enough to note that a highly
trained athlete should expect *less* than a recreational one, not enough to assert it as established.
[INFERRED, from the single unadjusted surrogate interaction]

## Dose, timing, and harms

- **Dose/timing not resolvable from this MA** — wide variability in doses, routines and sources; no
  dose subgroup possible [@gao2021nitrate]. A common
  protocol from the included literature and the co-author athlete's account: **\~500 mL beetroot juice
  2-3 h before** an event; multiple-day loading is also used
  [@gao2021nitrate]. This is implementation lore, not a
  dose-response finding.
- **Harm — GI distress.** The Olympic-marathoner co-author reports beetroot-juice GI distress that
  **scaled with race distance** (tolerable at 10 km, problematic at the marathon) and was his reason to
  stop [@gao2021nitrate] — a single-practitioner,
  self-reported account, but a concrete tolerability signal that the effective volume can itself impair
  a long event. Higher-concentration low-volume commercial shots exist partly to mitigate this.

## Decision relevance — a small, low-certainty, peripheral lever

**For a recreational endurance athlete** (the realistic user): nitrate offers a *small, low-certainty*
efficiency gain — lower O2 cost, longer time to exhaustion, more power — but **no demonstrated benefit on
actual time-trial/race performance and no VO2max gain**. Judged against the realistic alternative (their
existing training plus other listed ergogenic aids — World Athletics names caffeine and nitrate as the
two most-endorsed for endurance [@gao2021nitrate]), it is a
marginal add-on, not a big rock. Tolerability (GI) and formulation are the practical constraints.

**For a highly-trained athlete**, expect *less* (the surrogate interaction points that way), though the
certainty is low. **For the wiki's core reasonably-healthy non-athlete**, performance is peripheral; this
lever ranks low and thin by construction.

**Certainty ceiling.** The entire result is low-to-very-low GRADE (risk of bias throughout, publication
bias suspected on power/TTE/lactate, imprecision on several). The abstract's headline «The available
evidence suggests that dietary nitrate supplementation benefits performance-related outcomes for
endurance sports» [@gao2021nitrate] is true of the *pooled
averages* but overstates what a competitor should expect on the race-relevant endpoint.

## Limits

- **Single source, single MA.** Confidence is low: one gold MA whose own evidence is low/very-low
  certainty. — a second gold SR/MA to harden the
  effect states, the TTE-vs-TT split, and the trained-attenuation interaction (directional G-gap; no
  paper identified).
- **Commercial-supplement, not food** — does not transport to whole-food nitrate intake.
- **Small, select, well-monitored trial populations** limit external validity; heterogeneous exercise
  tests (constant-load vs graded) blur the pooled performance endpoints.
- No nitrate-industry funding for the review; senior authors report unrelated cardiac-device/pharma
  grants (not nitrate) [@gao2021nitrate].

## References

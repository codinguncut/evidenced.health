---
type: concept
question: At what fluoride exposure is a child-IQ decrement actually established, does that reach US community-water-fluoridation levels (0.7 mg/L), and how well does the evidence transport from the high-fluoride regions where most of it was collected?
aliases: [Fluoride and IQ, Fluoride Neurodevelopment, Fluoride Cognitive Effects in Children]
authors: [National Toxicology Program (org); Taylor, Kyla W; Eftim, Sorina E; Sibrizzi, Christopher A; Blain, Robyn B; Magnuson, Kristen; Hartman, Pamela A; Rooney, Andrew A; Bucher, John R; Veneri, Federica; Vinceti, Marco; Filippini, Tommaso]
sources: [NTP - Fluoride Neurodevelopment Monograph 2024, Taylor - Fluoride Children IQ 2025, Veneri - Fluoride Cognitive Neurodevelopment 2023]
cluster: fluoride
confidence: low
created: 2026-08-14
updated: 2026-08-14
self_critiqued: 2026-08-14
relationships:
  related_to:
    - Fluoride and Health
    - Measurement Error in Dietary Assessment
    - The Underivable Optimum
    - Baseline Risk and the Relative-Absolute Split
    - The Insufficient-Evidence Statement
---

Orbiter of [[Fluoride and Health]]. This page carries the dose-threshold decision that the nucleus
summarises: **where** on the fluoride exposure axis a child-IQ decrement is established, and whether the
evidence reaches the 0.7 mg/L US community-water-fluoridation dose.

[@ntp2024fluoride] unless marked otherwise.

## The finding is stratified, and the stratum is the decision

NTP concluded, at **moderate confidence** (OHAT scale: High / Moderate / Low / Very Low), that «higher
estimated fluoride exposures (e.g., ... drinking water fluoride concentrations that exceed the ...
Guidelines ... of 1.5 mg/L ...) are consistently associated with lower IQ in children», the association
holding «across different study populations, study locations, study quality/risk-of-bias
determinations, study designs, exposure assessment measures, and types of exposure data». Below that
level the finding does not hold: «Associations between lower total fluoride exposure [... lower than
... 1.5 mg/L ...] and children's IQ remain unclear.»

Two decision-relevant consequences:

- **Above \~1.5 mg/L water fluoride** (or the total-exposure equivalent): harm arm is live at moderate
  confidence. Someone on a private well or a naturally high-fluoride community system testing >1.5 mg/L
  has an evidenced reason to mitigate.
- **At 0.7 mg/L US fluoridation:** [[The Insufficient-Evidence Statement|insufficient evidence]], not a
  null. NTP «do[es] not address whether the sole exposure to fluoride added to drinking water ... at
  0.7 mg/L in the United States and Canada ... is associated with a measurable effect on IQ» `[EXTRACTED
  (NTP - Fluoride Neurodevelopment Monograph 2024) chunk 01]`. The addendum's newer meta-analyses «provide
  additional evidence of a dose-response relationship. However, uncertainty remains in findings at the
  lower fluoride exposure range.»

## 1.5 mg/L is edge-of-evidence, not a demonstrated knee

Per [[The Underivable Optimum]] and the threshold discipline (a guidance threshold is first hypothesised
as the boundary of the data, not a curve feature): NTP *chose* the WHO 1.5 mg/L water guideline as its
«higher»-exposure referent because «no alternative safety guidelines for total fluoride exposure exist»
and it «represents a useful total fluoride exposure equivalent metric» [@ntp2024fluoride]. The number marks where the confident evidence sits (most
low-risk studies sampled populations above it), **not** an estimated inflection where the dose-response
bends. So «harm below 1.5 is unclear» is a statement about the *evidence density*, not a demonstrated
safe threshold — and the within-study non-linearity is inconsistent (see Yu 2018 below).

## The evidence base

- 72 IQ studies; **19 low risk-of-bias** (high quality), of which **18 reported an inverse association**
  [@ntp2024fluoride]; 46/53 low-quality also
  inverse. The 19 low-RoB studies: 15 populations, 5 countries (China, Mexico, Canada, India, Iran),
  >7,000 children; fluoride measured in water (n=15), urine (n=15), serum (n=2).
  [@ntp2024fluoride]
- **Companion meta-analysis** (NTP's own «DTT Meta-analysis, Taylor et al. 2024» — see the one-backing
  caveat on [[Fluoride and Health]]): group-level 59 studies (n=20,932) SMD −0.45 (95% CI −0.57, −0.33);
  individual-level «regression slopes meta-analysis of 13 studies (n = 4,475 children) ... found a
  significant decrease in IQ of 1.63 points (95% CI: −2.33, −0.93; p-value <0.001) per 1-mg/L increase
  in urinary fluoride». Direction «remained consistent when group-level exposure was restricted to <4
  mg/L, <2 mg/L, and <1.5 mg/L».
  - **This companion MA is now held as the peer-reviewed primary** — Taylor et al. 2025 (JAMA Pediatrics
    179(3):282-292, CC-BY open access) [@taylor2025fluoride]. Same
    figures, now with the full published dose-response table and a low-RoB stratum. **Same NIEHS/NTP
    Division of Translational Toxicology stream** (its ref 12 *is* the NTP monograph; shared authors —
    Taylor, Rooney, Bucher), so it is the *primary form of the same evidence*, **not** an independent
    second line — see the section below and the one-backing note on [[Fluoride and Health]]. The
    published table SHARPENS the «direction consistent <1.5» summary above, which turns out to be
    **exposure-matrix-dependent** at low dose.

## Taylor 2025: the published dose-response, and the low-dose exposure-matrix split

The peer-reviewed MA bounds and operationalizes what NTP stated qualitatively (type-F refinement). Two
distinct pooled objects, in **different units** — keep them apart:

- **Individual-level regression slope (IQ points):** «a 1-mg/L increase in urinary fluoride was
  associated with a statistically significant decrease in IQ score of 1.63 points (95% CI, −2.33 to
  −0.93; P < .001)» (13 studies, n=4,475) [@taylor2025fluoride].
  Restricted to low-RoB studies (11 of the 13): «the decrease in IQ score was 1.14 points (95% CI,
  −1.68 to −0.61; P < .001)» with low heterogeneity (I²=23%)
  [@taylor2025fluoride].
- **Group-level dose-response slope (change in SMD per mg/L, NOT IQ points):** the Table-2 β values
  below. Do not read these as IQ points — they are standardized-mean-difference changes.

The decision-critical object is the **low-dose subgroup** — where the slope goes as exposure is
restricted toward fluoridation levels. It splits by exposure matrix (all-studies β, change in SMD):

| Restriction | Water fluoride β (95% CI) | Urinary fluoride β (95% CI) |
|---|---|---|
| All data | −0.15 (−0.20, −0.11)*** | −0.15 (−0.23, −0.07)*** |
| <4 mg/L | −0.22 (−0.27, −0.17)*** | −0.20 (−0.31, −0.08)** |
| <2 mg/L | −0.18 (−0.40, 0.03) NS | −0.08 (−0.15, −0.005)* |
| <1.5 mg/L | 0.05 (−0.36, 0.45) NS | −0.08 (−0.15, −0.003)* |

[@taylor2025fluoride] (Table 2). Low-RoB-only: water <1.5 mg/L
β −0.32 (−0.91, 0.26) NS (point estimate inverse, wide CI crossing null; n=879 from 3 studies); urinary
<1.5 mg/L β −0.08 (−0.15, −0.002)* (holds; n=4,179 from 4 studies).

The load-bearing reading — **the matrix decides the low-dose verdict**:

- **Water-fluoride dose-response goes null below \~2 mg/L** — «associations remained inverse when
  exposed groups were restricted to less than 4 mg/L and less than 2 mg/L; however, the association was
  null at less than 1.5 mg/L» [@taylor2025fluoride]. The <1.5 water
  point estimate is even slightly *positive* (0.05), and stays non-significant even among low-RoB
  studies.
- **Urinary-fluoride dose-response stays inverse and significant down to <1.5 mg/L**, in both
  all-studies and low-RoB strata.

This SHARPENS NTP's «unclear below 1.5» and the earlier «direction consistent <1.5» summary: below 1.5
mg/L the answer is **exposure-metric-dependent**, and Taylor attributes the water-based null to thin
data, not a safe threshold — «There were limited data and uncertainty in the dose-response association
between fluoride exposure and children's IQ when fluoride exposure was estimated by drinking water alone
at concentrations less than 1.5 mg/L» [@taylor2025fluoride], and
«The ability to detect a true effect is reduced at lower exposure levels when exposure contrasts are
diminished» [@taylor2025fluoride]. Per [[The Underivable Optimum]]:
the water <1.5 null is an evidence-density / power artifact (n=879, 3 studies), **not** a demonstrated
inflection or a J-curve benign-below arm — do not read it as a safe threshold.

Why the matrix matters (the [[Measurement Error in Dietary Assessment]] mechanism, applied): urinary
«fluoride concentrations include all ingested fluoride and are considered a valid estimate of total
fluoride exposure» [@taylor2025fluoride], whereas water concentration
under-captures total dose (non-water sources add noise that «may also decrease the precision of the
effect estimates at lower fluoride concentrations in water»
[@taylor2025fluoride]). So the urinary <1.5 signal is the
exposure-completer measure — but it carries its own error, the spot-sample caveat below.

The magnitude framing the authors themselves attach: «Although the estimated decreases in IQ found in
the regression slopes meta-analysis may seem small (1.63 IQ points per 1-mg/L increase in urinary
fluoride) ... a 5-point decrease in a population's IQ would nearly double the number of people classified
as intellectually disabled» [@taylor2025fluoride] — the
[[Baseline Risk and the Relative-Absolute Split|absolute-vs-population]] point: a small individual shift
is population-relevant at the distribution tails.

## Appraisal honesty (symmetric standards)

The MA drew published critique (JAMA correspondence; the low-dose subgroup, spot-urine measurement
error, study quality). Note the limits under symmetric standards — neither adopt a critique nor dismiss
the MA by authority:

- **Spot-urine noise, partly mitigated:** «When compared with 24-hour urine samples, spot samples are
  more prone to the influence of timing of exposure and can be affected by differences in dilution»
  [@taylor2025fluoride], though «correlations between urinary
  fluoride concentrations from 24-hour samples and spot samples adjusted for urinary dilution have been
  described» [@taylor2025fluoride]. The urinary <1.5 signal — the
  one that persists — rests on the noisier low-dose exposure measure; reverse causation and residual
  confounding remain live and unadjudicated here.
- **Publication bias is in the high-RoB studies, not the low-RoB ones:** the overall pool showed
  evidence of publication bias (Egger P<.001), but the low-RoB subset had none (Egger P=.56); trim-and-
  fill left the inverse association intact. [@taylor2025fluoride]
- **Same-stream producer/funder:** NIEHS intramural funding, and «NIEHS did have a role in the review
  approval of the manuscript and the decision to submit the manuscript for publication»
  [@taylor2025fluoride] — reinforcing that NTP + this MA are one
  backing, not two. No conflicts declared.
- **No US data:** «to our knowledge no epidemiological studies addressing fluoride exposure and
  children's IQ have been conducted in the United States»
  [@taylor2025fluoride]; the near-fluoridation evidence is the
  North American maternal-urine cohorts (transportability table below). Taylor notes >2.9 million US
  residents on community/private water >1.5 mg/L — the stratum where the harm arm is live — but the
  finding does not directly transport to the 0.7 mg/L US fluoridation setting.

## Veneri 2023: an independent team, a near-shared study base, and an opposite RoB reading

A **third** fluoride-IQ meta-analysis enters here — Veneri, Vinceti, Filippini et al. (CREAGEN /
University of Modena), an SR + one-stage cubic-spline dose-response
[@veneri2023fluoride]. It is an **independent
team** (no author shared with NTP/Taylor), independently funded, using **different analytic
instruments** (ROBINS-E risk-of-bias tool; cubic-spline dose-response) — but it pools a
**near-fully-shared primary-study base** (its 33 studies sit almost entirely inside NTP's 72 /
Taylor's 59; the census of fluoride-IQ primary studies is near-closed). So it is **not** an
evidence-independent second line — see the qualified-E verdict on [[Fluoride and Health]]. What it
adds is robustness-to-analytic-choices, and — decisively — an **opposite reading of the low-RoB
stratum**.

Veneri's pooled dose-response, in IQ points (keep the metric straight — these are IQ points, unlike
Taylor's Table-2 β values which are change-in-SMD):

- **Water fluoride:** «Dose-response analysis showed a substantially linear IQ decrease for increasing
  water fluoride above 1 mg/L, with −3.05 (95% CI −4.06; −2.04) IQ points per 1 mg/L up to 2 mg/L,
  becoming steeper above such level.» [@veneri2023fluoride] — a signal that turns on around 1 mg/L, i.e. entering the fluoridation-relevant range.
- **Urinary fluoride:** «A weaker and substantially linear decrease of −2.15 (95% CI −4.48; 0.18) IQ
  points with increasing urinary fluoride emerged above 0.28 mg/L (approximately reflecting a water
  fluoride content of 0.7 mg/L).» [@veneri2023fluoride] — note the CI **crosses zero**: NS.

### Cross-MA parameter table (the same-quantity check before any comparison)

| Parameter | Veneri 2023 (ROBINS-E; spline) | Taylor 2025 (OHAT; slope MA) | Same quantity? |
|---|---|---|---|
| Urinary DR, IQ pts / mg/L | −2.15 (−4.48, 0.18), NS | −1.63 (−2.33, −0.93), sig (13 studies) | PARTIAL — both IQ pts per mg/L urinary F, same direction, concordant magnitude (\~2 vs 1.6); but Veneri = group-level spline, Taylor = pooled within-study individual slopes. Significance differs (estimator + study set), not direction |
| Low-RoB restricted pool | MD +1.11 (−0.67, 2.89), NS — assoc VANISHES (n=1, Feng 2022) | slope −1.14 (−1.68, −0.61), sig, I²=23% (11 of 13) | SAME question (survives quality restriction?), but "low-RoB" is INSTRUMENT-RELATIVE (ROBINS-E admits 3 low / OHAT-stream 19) and metrics differ (high-vs-low MD vs regression slope). **Opposite answers** |
| Water DR, low dose | spline declines above 1 mg/L, steeper >2 | subgroup β (SMD): null <1.5 (+0.05 NS); inverse <2, <4 | conceptually concordant (water signal concentrates >1-2 mg/L); NOT same metric (IQ pts vs SMD-change β) |
| Bashash 2017 (ELEMENT) RoB | overall HIGH (confounding = High) | low — an NTP/Taylor low-RoB flagship | SAME study, OPPOSITE RoB verdict — the mechanical driver of the divergence |

### The RoB-instrument friction (filed here, folded — hidden insight)

Veneri's RoB subgroup runs a **monotone gradient the opposite way** from the NTP/Taylor reassurance:
«a MD of 1.11 (95% CI −0.67; 2.89) emerged for the only low RoB study, −4.27 (95% CI −6.44; −2.11) for
moderate RoB studies, and −6.31 (95% CI −9.56; −3.06) for high RoB studies»
[@veneri2023fluoride]. Its cohort-only pool is
also near-null: «this considerably milder association with IQ score decrease found in these
high-quality longitudinal studies (MD −0.74) compared with the cross-sectional studies (MD −5.21)
raises additional concerns about the potential influence of biases in the latter estimates»
[@veneri2023fluoride]. Veneri's own summary: «a
general trend towards weaker or null associations in the most carefully conducted studies»
[@veneri2023fluoride].

Taylor's low-RoB stratum does the reverse — the association **tightens** (I²=23%) and stays significant
(slope −1.14) when restricted to its 11 low-RoB studies, and NTP's headline is that the finding holds
«across ... study quality/risk-of-bias determinations». **Both make a low-RoB-robustness claim, and
they oppose** — on a near-identical pool of data.

The friction does **not** trace to different data (the studies are shared); it traces to the **RoB
instrument deciding which studies count as high-quality**. ROBINS-E, applied by Veneri, downgrades hard
on **unadjusted confounding**, so it admits only 3 low-RoB studies and rates the ELEMENT/Bashash and
MIREC/Till flagships HIGH and Moderate — exactly the near-fluoridation cohorts NTP/Taylor rate low and
lean on. The **Bashash rating flip is the smoking gun**: the same study is a low-RoB anchor for one MA
and a high-RoB study for the other. So the reassurance that «it holds in the high-quality studies» —
the claim propping up confidence in the >1.5 mg/L harm arm — is **instrument-dependent**, not a
property of the evidence. Under a stricter confounding bar the high-quality pool goes null.

This lowers, it does not resolve. Which RoB treatment is better calibrated for this literature —
ROBINS-E's aggressive confounding downgrade vs OHAT's — is itself unadjudicated here (a **G-gap**: it
would need reading each tool's confounding criterion against these studies end to end). And Veneri
carries the symmetric caveat in the other direction: its low-RoB verdict rests on a **single** study
(Feng 2022), and «a major role of residual confounding could not be ruled out»
[@veneri2023fluoride]. Net: the low-RoB-robustness
argument is contested from both sides, so confidence on the whole dose-threshold decision stays `low`.

### Veneri's internal tension: the spline vs its own quality strata

Veneri also holds a tension *within itself*, which cuts toward concern at low dose: its cubic-spline
reads a decline entering the fluoridation-relevant range — the urinary spline turns down at \~0.28 mg/L
(\~0.7 mg/L water-equivalent), and «the results of the present meta-analysis seem to indicate that such
an ADI [EFSA 1 mg/day] may not be deemed safe from a cognitive development perspective»
[@veneri2023fluoride] — WHILE its RoB- and
design-stratified analyses null the association. The authors' own reading of those strata leans toward
attenuation, not concern: they highlight that of the 4 cohort-designed studies, the 3 that «also
adjusted for major confounding (Broadbent et al., 2015; Farmus et al., 2021; Till et al., 2020) found
only a mild effect on children's IQ» [@veneri2023fluoride]. So
Veneri does not cleanly corroborate *either* pole: its spline sharpens the
low-dose concern the same direction as Taylor's urinary <1.5 signal, and its quality-stratification
undercuts the whole association. Read as a whole, it deepens the uncertainty rather than settling it.

## The transportability problem — where the evidence was collected

Most low-RoB studies come from **high-fluoride endemic regions** (China, India, Mexico) at exposures far
above US fluoridation. The support-factor question (does the effect transport to a 0.7 mg/L setting?)
hinges on the few cohorts sampled *near* fluoridation levels — and those are the North-American
pregnancy cohorts, the transportability bridge:

| Study (low-RoB) | Setting / exposure | Key IQ estimate (with CI) [@ntp2024fluoride] |
|---|---|---|
| Bashash 2017 (Mexico, ELEMENT) | maternal urine mean 0.90 mg/L | −2.50 full-scale IQ per 0.5 mg/L maternal urinary F (95% CI −4.12, −0.59) |
| Green 2019 (Canada, MIREC) | maternal urine mean 0.51 mg/L | −4.49 full-scale IQ per 1 mg/L maternal urinary F **in boys** (95% CI −8.38, −0.60); girls null (2.40; −2.53, 7.33); combined null (−1.95; −5.19, 1.28) |
| Till 2020 (Canada, MIREC) | water 0.13-0.59 mg/L | formula-fed −4.40 full-scale IQ per 0.5 mg/L water F (95% CI −8.34, −0.46); breastfed full-scale null |
| Yu 2018 (China, Tianjin) | water 0.2-5.5 mg/L | −4.29 IQ per 0.5 mg/L water F **only between 3.40-3.90 mg/L** (95% CI −8.09, −0.48); no significant assoc 0.2-3.40 mg/L |

Two things this table does that the bare conclusion does not:

- The **fluoridation-level signal exists but is fragile and conditional** — the near-0.7 cohorts
  (Bashash, Green, Till) find effects, but they are **prenatal / infant** exposures via maternal urine,
  frequently **sex-specific** (Green: boys only), and inconsistent across the IQ subscale and feeding
  mode (Till: formula-fed but not breastfed). This is not the same claim as «0.7 mg/L in tap water lowers
  IQ».
- Yu 2018 is the clearest **within-study non-linearity**: an effect concentrated at 3.4-3.9 mg/L with no
  significant association below 3.4 — cutting *against* a smooth monotone gradient down to fluoridation
  levels, and consistent with the >1.5 mg/L bound.

**Contra-signal at fluoridation level:** Broadbent 2015 (New Zealand, Dunedin cohort) followed children
exposed to community water fluoridation / fluoride toothpaste / tablets and «found no clear differences
in IQ scores of the subjects at 38 years of age»
[@ntp2024fluoride] — a prospective null at a
fluoridation-relevant exposure, part of why the below-1.5 stratum stays *unclear* rather than *harmful*.

## Measurement: better than dietary recall, but not clean

Fluoride escapes the worst of [[Measurement Error in Dietary Assessment]] because urinary fluoride is a
**biomarker**, not a food-frequency questionnaire — a genuine advantage over most nutrition exposures.
But two errors remain: (i) many studies assign **group-level** (area) water-fluoride, an ecological
measure that misclassifies individual intake; and (ii) total fluoride exposure is not the water number
(dental products, black tea), so even a well-measured water concentration under-captures dose. Both push
a true low-dose gradient toward the null, which is one reason the below-1.5 arm reads as «unclear»
rather than «no effect».

## What this changes

The decision is not «is fluoride safe» but **at what exposure, for which developmental window**. A
private-well household above 1.5 mg/L faces a live, moderate-confidence harm arm (mitigation — filtration
or an alternative source — is on the table). A pregnant woman on optimally fluoridated municipal water
(0.7 mg/L) sits in the insufficient-evidence zone: the prenatal cohorts give a *reason for concern* but
not an established effect, and the caries-benefit pole (unaddressed by NTP — see [[Fluoride and Health]])
weighs on the other side. The magnitude that would matter — a 1-2 point IQ shift per mg/L urinary F — is
small at the individual level but population-relevant, and its transmission to 0.7 mg/L tap water is
exactly what remains unestablished.

## References

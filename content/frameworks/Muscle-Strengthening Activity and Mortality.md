---
type: framework
question: Is strength / resistance training associated with lower mortality and disease after accounting for aerobic activity, and at what dose?
aliases: [Muscle-Strengthening Activity, Resistance Training Mortality, Strength Training, MSA, Weight Training Mortality]
authors: [Momma, Haruki; Kawakami, Ryoko; Honda, Takanori; Sawada, Susumu S; Saeidifard, Farzane; Medina-Inojosa, Jose R; Lopez-Jimenez, Francisco; Shailendra, Prathiyankara; Baldock, Katherine L; Li, L S Katrina; Bennie, Jason A; Boyle, Terry; Zhang, Yiwen; Lee, Dong Hoon; Rezende, Leandro F M; Ma, Yuan; Giovannucci, Edward L.]
sources: [Momma - Muscle-Strengthening Activities and Mortality 2022, Saeidifard - Resistance Training Mortality Meta-Analysis 2019, Shailendra - Resistance Training Mortality Meta-Analysis 2022, Zhang - Resistance Training Duration Mortality 2026]
cluster: activity
confidence: low
relationships:
  related_to:
    - Protein and Resistance Training for Muscle and Strength
    - Physical Activity Dose and Mortality
    - Cardiorespiratory Fitness and Mortality
    - Measuring and Raising Cardiorespiratory Fitness
    - The U-Shaped Association Artifact
    - Grip Strength and Mortality
    - Low Muscle Mass and Mortality
created: 2026-07-29
updated: 2026-10-28
self_critiqued: 2026-10-28
---
<div class="recent-update" data-last-updated="2026-10-28">

Strength training earns its place in a lever list on two claims: it is associated with lower mortality
and major disease **after adjustment for aerobic activity**, and the association appears at a **small
dose** (observational, very-low to low GRADE; wording corrected 2026-10-28 from *lowers ...
independently*; self-critique). Three meta-analyses now
converge on this — Momma 2022 (broad muscle-strengthening activity), Saeidifard 2019 and Shailendra 2022
(both framed as resistance training). But all three pool **mostly the same US self-report cohorts** (Momma
explicitly compares itself to Saeidifard; Shailendra explicitly *«builds on»* Saeidifard, adding 9 studies
to the same evidence base; and the mortality data are largely the same NHANES/NHIS/pooled-cohort
muscle-strengthening pools) — so the later MAs are **refinements, not independent corroboration** (type-F,
not [E-independent]), and the evidence stays **observational, self-reported, higher/very-high risk of bias
on the exposure**. A plausible but **weakly-warranted** lever, held one tier below the RCT-grade BP and lipid
evidence — three concordant re-poolings of one shared cohort base do **not** raise its certainty above
`low`. What the mortality-specific MAs add is *pool composition* and *dose*, not independence: on a
largely shared endpoint (Momma's CVD and total-cancer pools are themselves mostly **mortality**), the CV
estimate is significant in Momma's 7-study MSA pool and borderline (CI touches 1) in the RT-labelled
pools of Saeidifard and Shailendra — a precision/pool difference, not an endpoint difference
(corrected 2026-10-06: was *Momma's CVD incidence*; self-critique); and Shailendra's larger cancer pool (5 studies vs Saeidifard's 2) turns
the earlier null cancer-**mortality** estimate **significant** — a precision gain on a shared direction, not
a reversal (see the cross-source table below).

**A fourth source, a cohort with repeated measures `[2026-10-28, Zhang 2026]`.** Zhang 2026 pools three
US cohorts (HPFS men; NHS and NHSII women; 147,374 people, 35,798 deaths, up to 30 years) with weekly
resistance-training *duration* re-asked every 2-4 years and modelled as a cumulative average. It agrees
on the direction (lower all-cause mortality with some RT, after aerobic adjustment) and adds a
different dose reading: no category estimate lies above the null, up to the top one, >=120 min/week (mean 204; HR
0.92, 0.86-0.98, 1093 deaths). [@zhang2026rtmort] At
similar minutes Momma's pooled spline (and Shailendra's, which re-pools a subset of Momma's studies)
sits above the null, so they disagree at the level of the estimates (section *Zhang 2026* below). Zhang is **not** independent of the MAs: its HPFS men are
already in Momma's and Saeidifard's all-cause pools (as Grøntved 2012), its women are new data measured
with the same kind of self-report instrument in a healthy-user cohort, and it cites Momma and Shailendra
as the work it aligns with. So it is a type-F refinement on a partly shared base, not [E-independent],
and the cluster stays `low`. [inferred from @zhang2026rtmort]


[@momma2022]

</div>

<div class="recent-update" data-last-updated="2026-10-28">

## The effects — modest, broad, and adjusted for aerobic exercise

Any muscle-strengthening activity (MSA) vs none, «independent of aerobic activities»:

| Outcome | RR (95% CI) | GRADE |
|---|---|---|
| All-cause mortality | «RR 0.85; 95% CI 0.79 to 0.93» (−15%) | very low |
| Cardiovascular disease | «RR 0.83; 95% CI 0.73 to 0.93» (−17%) | very low |
| Total cancer | «0.88 (0.80 to 0.97)» (−12%) | very low |
| Diabetes | «0.83 (0.77 to 0.89)» (−17%) | low |

The aerobic adjustment matters: these are adjusted for aerobic activity, and **combined MSA + aerobic
goes with a much larger reduction — «a 40% lower risk of all-cause mortality (RR 0.60; 95% CI 0.54 to
0.67)»** — so the two together go with lower risk than either alone (observational). Zhang 2026 detects
no departure from additivity (RERI 0.07, -0.37 to 0.52), though it detects no RT trend at >=45
MET-h/week of aerobic activity (*Decision relevance* below). [@zhang2026rtmort] Momma's estimate corroborates and refines the held
strength-guideline finding on [[Physical Activity Dose and Mortality]] (both-guideline HR \~0.71); it is
**not** independent backing (same observational PA-epidemiology lineage, overlapping US cohorts), so it
is a refinement, not an [E-independent] convergence.


[@saeidifard2019]

</div>

<div class="recent-update" data-last-updated="2026-10-28">

## Saeidifard 2019 — the second MA, endpoint-resolved and mortality-specific

Saeidifard is a SR-MA of «11 (one randomized trial and 10 cohort studies)... totaling 370,256
participants with mean follow-up of 8.85 years», restricted to studies its authors label resistance
training (defined «typically at loads greater than 65% of the one-repetition maximum»). It asks the
mortality-specific question Momma's broad MSA-and-disease pool does not isolate:

| Outcome (RT vs no exercise) | HR (95% CI) | Note |
|---|---|---|
| All-cause mortality | «0.79 (0.69–0.91)» (−21%) | significant |
| Combined RT + aerobic vs no exercise | «0.60 (0.49–0.72)» (−40%) | additive; larger than either alone |
| Cardiovascular **mortality** | «0.83 (0.67–1.03)» (abstract) / «0.83 (0.68–1.01)» (Fig 3a) | **borderline — CI crosses 1** |
| Cancer **mortality** | «0.81 (0.54–1.20)» | **no significant association** |
| CHD events, men (1 cohort, n=44,452, 2y) | «RR 0.77... CI: 0.61–0.98» (−23%) | «trained with weights for 30 min or more per week»; one study only |

Two decision-relevant refinements over Momma:

- **The CV benefit is softer in the RT-labelled pool.** Momma's «RR 0.83; 95% CI 0.73 to 0.93» is
  significant; Saeidifard's identical 0.83 point estimate has a CI that **crosses 1**. Momma's CVD pool is
  itself mostly mortality («Three studies focused on CVD mortality or CVD morbidity,43 44 46 whereas other
  studies focused on CVD mortality.») [@momma2022],
  so this is the same number on a largely shared endpoint with a different pool and precision — not a
  harder endpoint. Acting on the CV-mortality claim rests on a significant-to-borderline association
  (corrected 2026-10-06: was *CVD incidence ... different (harder) endpoint*; self-critique).
- **Cancer: Momma favourable, Saeidifard null — mostly the same endpoint.** Momma's total-cancer «0.88
  (0.80 to 0.97)» is a mostly-**mortality** pool («One study focused on total cancer incidence,50 whereas
  the other studies focused on total cancer mortality.») [@momma2022];
  Saeidifard's cancer *mortality* «0.81 (0.54–1.20)» is non-significant on 2 studies. The difference is
  pool size and precision, not incidence vs mortality (corrected 2026-10-06: was *incidence favourable,
  mortality null ... different endpoints*; self-critique).
  - **Superseded on the mortality leg (Shailendra 2022):** Saeidifard's cancer-mortality null rested on
    only **2 studies**; Shailendra pools **5** and finds cancer *mortality* «0.86 (0.78, 0.95)»,
    **significant** — a precision gain on the same direction (point estimates 0.81 vs 0.86), not a
    reversal. So the "mortality null" is now read as an underpowered null, not a real absence of effect:
    RT's cancer-mortality signal is now significant in both Momma's mostly-mortality pool and
    Shailendra's, still observational and self-reported (corrected 2026-10-06: was *both incidence and
    mortality*; self-critique). See the Shailendra section and the 3-way table below.

**Dose.** Saeidifard's own reading matches Momma's caution against the upper arm: performing «>0 to two
sessions of resistance training per week is associated with lower all-cause mortality (0.79 (0.66–0.95)),
but doing more than two sessions of resist-ance training is not», and «2–3 sessions... is not
signiﬁcantly better than... lower frequencies... (1.00 (0.89–1.11))». The authors suggest optimal benefit
«by 1–2 sessions per week and avoiding high-intensity low-repe-tition type activities» but explicitly
disown a firm shape: «the current evidence is not enough to conclude that the relationship between
resistance training and survival has a U-shape curve.» Neither MA asserts the upper arm, but
Saeidifard's position is agnosticism with candidate real-harm and confounding routes, not corroboration
of an artifact reading: before that sentence it reports that its results suggested a U-shaped
dose-response for all-cause and CV mortality, offers causal routes (high-intensity effects on heart
rate, blood pressure and arterial stiffness; the Valsalva manoeuvre), and one confounding route specific
to high volume: «Finally, people performing a high volume of resistance training may be more likely to use anabolic–androgenic steroids or supplements with sub- stances that could adversely aﬀect their health.»
[@saeidifard2019]
(corrected 2026-10-28: was *a second-source corroboration of the [[The U-Shaped Association Artifact]]
reading*; self-critique)


[@shailendra2022]

</div>

<div class="recent-update" data-last-updated="2026-10-28">

## Shailendra 2022 — the third MA: a larger cancer pool and a minutes/week dose curve

Shailendra is the mortality-specific update of Saeidifard: a SR-MA of **10 prospective cohort studies**
(all self-reported RT, follow-up 7-17 years, ages 18-85, all but two US), restricted to nonclinical
adults and to the three mortality endpoints. It explicitly *«builds on»* Saeidifard by adding 9 studies,
so it is a **type-F refinement of the same evidence base**, not independent backing.

| Outcome (any RT vs none) | RR (95% CI) | n studies | Note |
|---|---|---|---|
| All-cause mortality | «0.85; 95% CI=0.77, 0.93» (−15%) | 6 | significant *(Results/Table 1 read 0.77, 0.94 — a 0.01 internal discrepancy)* |
| CVD mortality | «0.81; 95% CI=0.66, 1.00» (−19%) | 4 | **borderline — CI touches 1.00** *(Table 1 misprints the lower bound as 0.61)* |
| Cancer mortality | «0.86; 95% CI=0.78, 0.95» (−14%) | 5 | **significant** — the endpoint Saeidifard's 2-study pool left null |

**Highest-vs-lowest is attenuated to null for mortality.** The «some vs none» contrast above captures the
signal; comparing the *highest* RT level with the *lowest* washes it out — all-cause «0.92; 95% CI=0.83,
1.01» (NS), CVD «0.90; 95% CI=0.79, 1.02» (NS), cancer «0.87; 95% CI=0.77, 0.99» (barely significant).
This mirrors the diminishing-at-higher-volumes dose-response below: *doing some* is where the benefit
lives; *doing much more* adds little. [@shailendra2022]

**The dose-response — a third nonlinear curve, nadir \~60 min/week, upper arm on 4 studies.** A 1-stage
restricted-cubic-spline dose-response MA (knots at 10/30/150 min) of the **4 studies** reporting
minutes/week found a nonlinear *«U»*-shaped curve: «a maximum risk reduction of 26% observed at around 60
minutes per week of resistance training (RR=0.74; 95% CI=0.64, 0.86)», with «Mortality risk reductions
dimin- ished at higher volumes than 60 minutes per week». *(The source states this maximum inconsistently
— 26% in Results (matching RR 0.74), 27% in the Abstract, and 33% in the Discussion; the unambiguous
anchor is RR 0.74, 0.64-0.86 at \~60 min/week.)* The authors themselves urge caution: «The results of our dose−response meta- analysis suggested a possible “U”-shaped relationship between the duration of resistance training and the risk of all-cause mortality; however, because this analysis only included 4 studies, it should be viewed with caution.»
[@shailendra2022]
The plotted curve (Figure 3, PDF p 6, figure-read, n=4 studies) is below 1.0 from its low end to \~140
min/week (nadir \~0.75 near \~60), crosses 1.0 at roughly \~140-150, has its lower 95% band cross 1.0 at
roughly \~165-170, and ends near \~1.3 at 200 min/week; its last knot is at 150. [INFERRED; figure-read]
Its 4 dose-response studies (Stamatakis 2018, Kamada 2017, Liu 2019, Patel 2020; its refs 15/30/32/34)
are all among Momma's 6 by first author and year, so this curve re-pools a subset of Momma's studies
and is not independent of it.

[inferred from @shailendra2022]
This is a **re-pooled second look at the [[The U-Shaped Association Artifact]] reading** of Momma's
40 min/week J-shape (not a separate instance: it re-pools a subset of Momma's studies; above): the *lower* arm (benefit acquired by a small weekly volume, \~40-60 min) is the
action default (cheap, low-harm), though on mortality it is itself unadjudicated — on the same
self-report instrument and healthy-user structure it has passed only covariate adjustment and lags, and
in Zhang's cohort adjustment removes most of the age-adjusted association (90-119 min/week: 0.66 ->
0.76 with covariates -> 0.87 with aerobic activity
[@zhang2026rtmort]; corrected
2026-10-28 from *is believable*; self-critique); the *upper* «U» arm — the benefit *diminishes* past \~60 min/week («smaller or no mortality
risk reductions» [@shailendra2022]),
and in Figure 3 the curve rises above 1.0 from roughly \~140-150, its lower band above 1.0 from roughly \~165-170
(figure-read; the text reports no excess risk, the figure shows an above-null segment; corrected
2026-10-28: was *with no reported excess risk over no RT*; fix-audit) — rests on **only 4 studies**. The
upturn begins near the median dose (between the 30- and 150-min knots, \~50th-90th percentile); only the
segment beyond 150 min is the sparse tail past the last knot, where a restricted cubic spline is
constrained to be linear, so the shape there (and its band) reflects the model as much as the data,
though the data beyond the knot still set the slope. So the load-bearing caveat is the 4-study base and self-reported
minutes (corrected 2026-10-06: was *more is worse ... the rising segment sits in the sparse-data tail*;
self-critique). Those are the caveats the artifact concept warns about, and the point-optimum «\~60 min/week» is a wide imprecise region, not a target (the studied range and the
4-study base are its two load-bearing caveats). **Do not act on the upper arm: do not chase high
RT volume for mortality, and do not read the arm as either a shown harm or a shown absence of one**
(Momma's and Shailendra's pooled splines — overlapping studies, not independent — are above the null at
high volume, Zhang's spline and top category below it; see *Zhang 2026*
below; wording corrected 2026-10-28 from *do not chase or fear*) — the decision-relevant claim is the
lower arm.

**Joint RT + MVPA — the triple 0.60 convergence.** Performing both vs neither gives «by 40% (RR=0.60; 95%
CI=0.54, 0.66)» lower all-cause mortality — matching Momma's «0.60 (0.54 to 0.67)» and Saeidifard's «0.60
(0.49–0.72)» essentially exactly. Striking, but **F not E**: shared cohorts (Kamada in all three joint
pools; Stamatakis and Zhao 2020 shared by Momma and Shailendra; Saeidifard's NHANES studies were excluded
by Shailendra as overlapping samples — corrected 2026-10-06: Stamatakis is not in Saeidifard's pool;
self-critique), so the convergence is the *same finding re-pooled*, not three independent roads to
0.60. [@shailendra2022]

**Exposure quality is the binding limit.** «All the 10 included studies were found to have a higher risk
or very high risk of bias in the way the exposure» was measured — self-reported (all 10), single-timepoint
(8 of 10), no validated instrument (none), RT prevalence 9-27% across cohorts, heterogeneity I2 up to \~80%. The measurement
constraint is *why* only 4 of 10 studies could enter the dose-response, and it caps the whole cluster at
`low` confidence. [@shailendra2022]


[inferred from @momma2022; @saeidifard2019; @shailendra2022]

</div>

<div class="recent-update" data-last-updated="2026-10-28">

## The three MAs compared — same lever, mostly the same cohorts (type-F, not type-E)

The op-weave parameter table, with the same-quantity column doing the work:

| Parameter | Momma 2022 | Saeidifard 2019 | Shailendra 2022 | Same quantity? |
|---|---|---|---|---|
| Exposure | broad MSA | *labelled* RT (>65% 1RM), cohorts mostly same MSA self-report | *labelled* RT, all self-report; mixed MSA/weight-lifting/strength wording | **NO** — all three run on the same self-report MSA instrument; "RT-specific" framing not carried by the data |
| Metric | RR | HR (OR→RR) | RR | \~ all hazard-type; comparable |
| All-cause mort. | «0.85 (0.79 to 0.93)» −15% | «0.79 (0.69–0.91)» −21% | «0.85; 95% CI=0.77, 0.93» −15% | Same construct, overlapping pools (not independent) |
| Combined + aerobic → all-cause | «0.60 (0.54 to 0.67)» | «0.60 (0.49–0.72)» | «0.60; 95% CI=0.54, 0.66» | Triple point convergence, but **F not E** (shared cohorts) |
| CVD mort. | «0.83 (0.73 to 0.93)» — mostly mortality (4 of 7 mortality-only, 3 mortality-or-morbidity), sig | «0.83 (0.67–1.03)» — mortality, borderline | «0.81; 95% CI=0.66, 1.00» — mortality, **CI touches 1** | Largely shared endpoint; sig in Momma's pool, borderline in both RT pools (pool/precision) |
| Cancer mort. | «0.88 (0.80 to 0.97)» — mostly mortality (5 of 6 studies), favourable | «0.81 (0.54–1.20)» — mortality, **null (2 studies)** | «0.86; 95% CI=0.78, 0.95» — mortality, **sig (5 studies)** | Largely the same endpoint across all three; the null was underpowered, now resolved sig — a precision gain, not a reversal |
| Dose | J-shape, nadir «40 min/week» | «>0 to two sessions/wk» sig, >2 not; U disowned | «U»-shape, nadir \~60 min/wk (RR 0.74, 0.64-0.86, **4 studies**, all among Momma's 6); diminishing above, crossing 1.0 \~140-150 (Fig 3, figure-read) | Related nonlinear shape; Momma & Shailendra both in minutes/wk, \~40-60 min nadir |

The **cancer-mortality cell is the one genuine refinement** (F): Saeidifard's null and Shailendra's
significant estimate are the *same quantity* (RT → cancer mortality, RR), and the flip is driven by study
count (2 → 5), point estimates staying in the 0.81-0.86 band — a precision gain, not a contradiction to
file as a tension. Every other cell is the *same finding re-pooled* (F), with pool/precision differences
on a largely shared endpoint, so no cell survives as an [E-independent] convergence.

**Independence: type-F (refinement) across all three, not [E-independent].** Three defeaters, any one
sufficient:

- **Each later MA cites its predecessor.** Momma positions itself against Saeidifard/Nascimento;
  Shailendra explicitly *«builds on»* Saeidifard, adding 9 studies to the same base. A later MA that
  names and refines an earlier one is F by construction.
- **Shared constituent cohorts.** Saeidifard's pool (Dankel, Kamada, Zhao, Kraschnewski, Loprinzi,
  Schoenborn, Evenson…) and Shailendra's 10 (Stamatakis, Kamada, Zhao, Liu, Patel, Siahpush, Sheehan,
  Nie, Porter, Hsu) draw on the same NHANES/NHIS/pooled-cohort MSA-mortality lineage Momma pools —
  Kamada and the NHIS/NHANES families recur across all three (added 2026-10-28: so does **HPFS** — Grøntved
  2012 sits in both Momma's and Saeidifard's all-cause pools; see *Zhang 2026* below). Pooling the same data thrice is not three
  independent tests (the *volume-is-not-independence* rule). Shailendra even excluded 9 studies for
  «overlapping samples», keeping the largest — an *internal* de-duplication that does nothing to make it
  independent of the *earlier reviews* over the same cohorts.
- **Same instrument, same confounding structure** — self-reported muscle-strengthening frequency, all
  studies rated higher/very-high risk of bias on the exposure.

So the triple 0.60 combined convergence, however striking, does **not** raise confidence; it is the same
finding re-pooled. No `[E-independent]` stamp — the cluster stays `low`.
[inferred from @momma2022]

</div>

<div class="recent-update" data-last-updated="2026-10-28">

## Zhang 2026 — a repeated-measures cohort: the duration categories, the top arm, and the aerobic overlap `[2026-10-28]`

**How RT was measured.** «In each cycle, participants were asked to report average weekly time spent in
resistance training (weight machine/ resistance training). There were ten response categories ranging
from none to >11 hours/ week.» The question was first asked in 1990 (HPFS), 2000 (NHS) and 2001 (NHSII)
and repeated every 2-4 years; the analysis uses the «cumulative average of repeated measures» with a
2-year lag, after excluding baseline cancer, heart disease and stroke. Validity was measured only in
the HPFS men («the correlation was high (r=0.79) between the questionnaire and 1-week activity diary in
HPFS»); «We did not have a parallel validation study of resistance training in NHS I/II.» The authors
add that because the question and population characteristics were similar, «we anticipate comparable
validity» — an expectation, untested in the women. The item
«did not capture other forms of strength training like calisthenics and Pilates», and «we could not
assess this dimension as intensity data was not collected». [@zhang2026rtmort]

**All-cause mortality by category** (HR vs no RT, adjusted for aerobic activity and the usual
covariates; cell-checked against Table 2; category means 0/12/42/72/102/204 min/week):

| RT min/week | 0 | 1-29 | 30-59 | 60-89 | 90-119 | >=120 |
|---|---|---|---|---|---|---|
| Deaths | 21,307 | 8570 | 2693 | 1463 | 672 | 1093 |
| All-cause HR (95% CI) | Ref | 0.95 (0.92, 0.97) | 0.91 (0.87, 0.95) | 0.91 (0.86, 0.96) | 0.87 (0.81, 0.95) | 0.92 (0.86, 0.98) |
| Same, *without* aerobic adjustment | Ref | 0.90 | 0.82 | 0.81 | 0.76 (0.70, 0.82) | 0.79 (0.74, 0.84) |
| CVD HR (deaths) | Ref (4997) | 0.99 (2150) | 0.95 (610) | 0.94 (322) | 0.81 (0.67, 0.97) (130) | 0.86 (0.75, 1.00) (195) |
| Neurological HR (deaths) | Ref (2789) | 0.86 (1121) | 0.83 (346) | 0.77 (172) | 0.73 (0.58, 0.92) (79) | 0.78 (0.65, 0.94) (128) |
| Cancer HR (deaths) | Ref (4561) | 0.91 (0.86, 0.97) (1648) | 0.88 (0.81, 0.97) (576) | 1.00 (361) | 0.98 (171) | 0.96 (0.85, 1.09) (280) |

[@zhang2026rtmort] The source
gives no absolute risks (and its person-year columns in Tables 1 and 3 do not agree), so no deaths per
1000 can be stated here.

**What the categories show.** The authors read a plateau: «No additional benefit was observed at ≥120
min/week (HR=0.92, 95% CI, 0.86-0.98).» [@zhang2026rtmort] Read with its intervals, the point estimates from 30-59 through >=120 min/week lie
between 0.87 and 0.92 with overlapping CIs. The category CIs from 30-59 up do not separate, but no
between-category test is reported and overlapping CIs are not a test; the authors headline 90-119 as
the lowest category, their Conclusion describes the lowest risks as «plateauing at around ≥120
min/week», the spline nadir sits near \~100-110 min/week (figure-read), and the overall trend is
significant (P<0.001). So this
cohort places the lowest risk somewhere between \~30 and >=120 min/week without locating it precisely
(the top category has a mean of 204 min/week, SD 126). The top category does not rise above the null:
HR 0.92 (0.86-0.98) on 1093 deaths. [inferred from @zhang2026rtmort] The
spline (P non-linearity <0.001) bottoms near \~100-110 min/week; its upper interval reaches 1.0 near
\~190-195 min/week, and the point estimate crosses 1.0 near \~270 and ends at about 1.02 at the right edge of
its 300 min/week axis (interval roughly 0.88-1.18). The segment above the 150-min knot (knots at the
«75th, 90th, and 95th percentiles (corresponding to resistance training time of 30, 90, and 150
min/week)» [@zhang2026rtmort])
is the top 5% of the exposure distribution. Beyond its last knot a restricted cubic spline is
constrained to be linear, so the shape there (and its band) reflects the model as much as the data,
though the data beyond the knot still set the slope — the same caveat, in the same words, applies to
Momma's and Shailendra's high-dose arms (*The dose* below). The cancer
spline (P non-linearity 0.05) goes further: its point estimate crosses 1.0 near \~150 min/week and ends
near \~1.2 at 300, interval including 1. The neurological and other-cause splines are also significantly
non-linear (P 0.002 and 0.005), and the authors call the neurological curve J-shaped.
[INFERRED; figure-read, orientation only; P values from the Figure 2 legend]

**How much of the association is aerobic activity.** Adjusting for aerobic activity moves the 90-119
estimate from 0.76 (0.70-0.82) to 0.87 (0.81-0.95), roughly halving the apparent reduction; at 1-29
min/week the age-adjusted 0.83 (0.81-0.85) becomes 0.90 with the covariates and 0.95 (0.92-0.97) with
aerobic activity added; people who train more also do more aerobic activity (mean 17.5 MET-h/week at no
RT vs 44.1 at >=120; correlation 0.36). [@zhang2026rtmort] (Table 2's footnote 2 also lists aerobic activity among the MV-model covariates; footnote 3 and the
Methods describe aerobic adjustment as a separate step, so the MV row is read here as not
aerobic-adjusted.) Aerobic activity is self-reported too, so some confounding by it (and by fitness, which is not
measured) plausibly remains after adjustment; the 0.87 is not a clean RT effect.

**Cause-specific.** CVD: lower only at 90-119 (0.81, 0.67-0.97, 130 deaths) with a linear trend (P=0.002;
P=0.02 after BMI) and no non-linearity detected (P non-linearity 0.98). Neurological: 0.73 (0.58-0.92) at 90-119 (79
deaths), with the authors' own caveats that reverse causation «remains possible given the decades long
prodromal stage of neurodegenerative diseases like Alzheimer’s» (the same sentence goes on: «although we
still observed inverse associations even after applying 8- or 12- year time lags») and that dementia as a cause of death is
«subject to considerable misclassification especially under-detection». Cancer: lower only at 1-29 and
30-59 min/week (P-trend 0.92); the authors call the mechanism for «increased cancer mortality at higher
levels of resistance training» unclear and suggest IGF-1, with no data in this paper.
[@zhang2026rtmort] Three outcomes, three different shapes, on 79-280 deaths per upper category: the cause-specific
dose readings are hypotheses, not doses.

**Lag sensitivity.** The main models already lag RT by 2 years; the Methods state that 4-, 8- and
12-year lags were applied in sensitivity analyses. The main text reports only that the
patterns «remained similar after applying an 8-year lag (Supplementary Table 3)», and for neurological
death that «we still observed inverse associations even after applying 8- or 12- year time lags». No
lagged HR is printed in the main text, and the supplement is not held. [@zhang2026rtmort] -> G-gap: the lagged estimates
(and whether the top category's 0.92 survives an 8-year lag) cannot be checked from what is held.


**Cohort overlap with the three MAs (direct read of the forest plots).** Momma's all-cause pool includes
Grøntved 2012 (HPFS men) at RR 0.93 (0.88-0.98), weight 18.93%, and its CVD pool the same study at 0.92
(0.83-1.02), weight 20.37%; its linear all-cause dose-response analysis includes it at weight 23.32%
[@momma2022].
Saeidifard's all-cause pool includes Grøntved 2012 at HR 0.92 (0.87-0.97), weight 32.6% (the largest),
and Grøntved's rows in its frequency subgroups (>0-2 sessions 0.88; 2-5 sessions 1.04; >=5 sessions
1.11, 0.90-1.37; the >=5 subgroup pools to 1.07, 0.90-1.26)
[@saeidifard2019]. Both
reviews thank Grøntved for «providing additional data». NHS and NHSII appear only in Momma's diabetes pool
(Grøntved 2014); Shailendra's ten cohorts contain no NHS, NHSII or HPFS study [searched: Grøntved / HPFS /
Health Professionals / Nurses across the Shailendra chunk]. So Zhang's men (31,540, \~21% of its sample)
re-enter data already pooled twice; its women (115,834) are new to every held mortality pool. Rezende and
Lee, two of Zhang's authors, wrote the HPFS cancer study in Momma's cancer pool (Rezende 2020). [inferred from @zhang2026rtmort]

**The same quantity? The parameter table for the dose.**

| Parameter | Momma 2022 | Shailendra 2022 | Zhang 2026 | Same quantity? |
|---|---|---|---|---|
| Exposure | any MSA: «resistance/strength/weight training and callisthenics» | self-reported RT (mixed MSA / weight-training wording) | weekly time in «weight machine/ resistance training»; calisthenics and Pilates not captured | **NO** — Zhang's item is narrower |
| Exposure timing | not reported by Momma; Shailendra's overlapping pool: 8 of 10 cohorts single-timepoint | 8 of 10 single-timepoint | cumulative average of reports every 2-4 y, 2-y lag | **NO** — repeated vs mostly single |
| Evidence base | dose-response MA, 6 studies, 37,178 cases | RCS dose-response MA, **4 studies** | one 3-cohort pool, 35,798 deaths | different designs |
| Lowest point | «The lowest RR (RR 0.83; 95% CI 0.79 to 0.86) was observed at 40 min/week» | \~60 min/week, RR 0.74 (0.64-0.86) | category 90-119: HR 0.87 (0.81-0.95), 672 deaths; overlapping CIs from 30-59 up | **NO** — spline points vs a category contrast; all three intervals overlap the \~30-120 region |
| Upper range | «the RR estimate for up to approximately 140 min/ week was <1.00»; Figure 4 (PDF p 6, figure-read): lower 95% band above 1.0 from \~165 min/week, \~1.18 (\~1.08-1.30) at \~195, the end of its plotted range | «dimin- ished at higher volumes than 60 minutes per week»; Figure 3 (PDF p 6, figure-read): crosses 1.0 at \~140-150, lower 95% band above 1.0 from \~165-170, \~1.3 at 200 | >=120 (mean 204): 0.92 (0.86-0.98), 1093 deaths; spline near 195-200 \~0.94, upper band \~1.00-1.03 (figure-read) | **NO** at the estimates — Momma's and Zhang's spline intervals at \~195 min/week do not overlap, narrowly (figure-read); Shailendra (a subset of Momma's studies) has Momma's shape; see below |
| Spline knots | three, «at fixed percentiles (10%, 50% and 90%) of time of the exposure» (min/week values not printed; curve near-linear from \~85-90 min/week to its end at \~195, figure-read; with Shailendra's 150-min 90th-percentile knot on a subset of the same studies, the last knot plausibly sits in \~75-150) | 10/30/150 min, «roughly» the 10th/50th/90th percentiles | 75th/90th/95th percentiles = 30/90/150 min/week | **NO** — different placement; at \~195 Zhang's and Shailendra's curves are past their 150-min last knots and Momma's plausibly past its own; beyond the last knot each spline is constrained to be linear |
| HPFS in the pool | yes (Grøntved 2012) | no | yes (HPFS men) | shared data in part |

[@momma2022] [@shailendra2022] [@zhang2026rtmort]

**Joined at the estimates, not at the conclusions (corrected 2026-10-28: an earlier draft said Momma
prints no upper-arm interval; Figure 4 does; self-critique).** Near \~195 min/week Momma's pooled
all-cause spline (6 studies) sits above the null: its point estimate reaches 1.0 near \~140 min/week and
about 1.18 at \~195, the end of its plotted range, and its pointwise lower 95% band is above 1.0 from
\~165 min/week (figure-read, PDF p 6). At similar minutes Zhang's top category (mean 204) is 0.92
(0.86-0.98) and its spline about 0.94 with an upper band near \~1.00-1.03 (figure-read). On these
figure-reads the two spline intervals do not overlap at \~195 min/week, but only narrowly (Momma's lower
band \~1.075; a gap of roughly 0.05-0.07 depending on the read) and at the right edge of Momma's plotted
range. Shailendra's 4-study curve, a re-pooling of a subset of Momma's studies and so not independent
of it, shows Momma's picture: it crosses 1.0 at roughly \~140-150 with its lower band above 1.0 from
roughly \~165-170 (figure-read, PDF p 6; *Shailendra 2022* above). The not-joined checks (Momma vs Zhang):
(i) does not fire — the two predict different observables at \~195 min/week. (ii) does not dissolve it:
the exposures differ (broad MSA including calisthenics vs weight-machine/RT time), so do the measurement
(mostly one baseline report vs a cumulative average), the evidence base, and the models — at \~195
Zhang's curve is past its 150-min last knot and Momma's plausibly past its own (min/week value
unprinted, plausibly \~75-150; *The dose* below; Momma: «A potential
non-­linear association was also examined using a restricted cubic spline model with three knots at fixed percentiles (10%, 50% and 90%) of time of the exposure.» [@momma2022];
Zhang: 30/90/150 min/week). Beyond each model's last knot a restricted cubic spline is constrained to
be linear, so the shape there (and its band) reflects the model as much as the data, though the data
beyond the knot still set the slope — for both curves. Sample
composition is a further candidate: Saeidifard names a high-volume-specific confounder (anabolic
steroid or supplement use; *Saeidifard 2019* above) that could bear differently on general-population
pools than on older US health professionals — a hypothesis, untested in any held source. These are
candidate *explanations* of the clash and cannot be matched from what is held — HPFS weight-training data sit in
both: Grøntved 2012 is one of the six studies Momma used for its dose-response analysis («Six studies
were eligible for the dose–response analysis»; 23.32% of the linear weight, and Figure 4 is the
6-study spline) [@momma2022].
So the same men contribute to a spline above the null and to a category below it (corrected 2026-10-28
from *whether they are in the 6-study spline is not shown*; fix-audit). (iii) fires at the level of the conclusions: Momma's full position does not assert harm — the
counter-passage is its Conclusion, «however, the influence of a higher volume of muscle-strengthening
activities on all-cause mortality, CVD and total cancer is unclear when considering the observed
J-shaped associations» [@momma2022] — and Zhang frames its result as aligning with Momma and Shailendra.
So the sources disagree in their estimates (on a figure-read) and in neither conclusion. Saeidifard's
&gt;=5 sessions subgroup pools to 1.07 (0.90-1.26); its HPFS row (Grøntved 2012) alone is 1.11 (0.90-1.37),
the same men on a single-baseline frequency exposure, against Zhang's repeated-measures 0.92 (pooled
with women; the men-only estimate is in an unheld supplement). A frequency count is not minutes, so it
is not the same quantity as Zhang's top category (corrected 2026-10-28: the 1.11 had been labelled the
subgroup estimate; fix-audit). [inferred from @zhang2026rtmort]

**Type F.** Zhang adds three things no MA here could: a repeated-measures exposure; an upper category
with 1093 deaths whose below-null estimate conflicts with the pooled MA splines at similar minutes
(Momma's, and Shailendra's on a subset of its studies; unresolved, see the [REVIEW] above); and an aerobic-adjusted CVD curve with no non-linearity detected. It does not add independent backing to the existence of the effect (shared HPFS
data, same instrument class, same healthy-user confounding), and it cites Momma and Shailendra (its refs
7-8) as the work it aligns with, so a later study refining cited predecessors is F by construction. [inferred from @zhang2026rtmort]


[@momma2022]

</div>

<div class="recent-update" data-last-updated="2026-10-28">

## The dose — modest, and a J-shape whose above-null arm should not be believed yet

The dose-response is the interesting part, and it is a worked case for
[[The U-Shaped Association Artifact]]:

> «J-shaped associations were found between muscle-strengthening activities and all-cause mortality, CVD
> and total cancer, with the maximum risk reduction (approximately 10–20%) at approximately 30–60
> min/week»

The pooled nadir is «The lowest RR (RR 0.83; 95% CI 0.79 to 0.86)... at 40 min/week», with benefit
persisting to \~130-140 min/week and the hazard then rising above 1.0 — the J's upper arm, suggesting
*more is worse* past \~2 hours/week.
Momma's Figure 4 puts the pointwise lower 95% band of that arm above 1.0 from \~165 min/week
(figure-read, PDF p 6). The spline has three knots at the 10th/50th/90th percentiles of the exposure
(Methods; *Zhang 2026* above); their min/week values are not printed. The plotted curve is
near-linear from \~85-90 min/week to its end at \~195 (figure-read). Shailendra, pooling a subset of the
same studies with the same percentile scheme, used «3 knots placed at 10, 30, and 150 minutes, which roughly correspond with the 10th, 50th, and 90th percentiles of the distribution of dose values from the included studies»
[@shailendra2022].
So Momma's last knot plausibly sits somewhere in \~75-150 min/week. Beyond its last knot a restricted
cubic spline is constrained to be linear, so the shape there (and its band) reflects the model as much
as the data, though the data beyond the knot still set the slope — the same caveat, in the same words,
as for Zhang's and Shailendra's tails (corrected 2026-10-28: was *in the pooled spline the upturn is
not a chance wobble around the null*; self-critique). [inferred from @momma2022]
**Update `[2026-10-28, Zhang 2026]`:** the one repeated-measures cohort held does not reproduce that
crossing at category level — its >=120 min/week category (mean 204 min/week) has HR 0.92 (0.86-0.98) on
1093 deaths; its all-cause spline's point estimate crosses 1.0 only near \~270 min/week (about 1.02 at
300, interval including 1; past its 150-min knot, where the same linear-tail caveat applies), and its cancer spline crosses above 1.0 near \~150 min/week, interval
including 1 (*Zhang 2026* above, where the two are joined at the estimates).
[@zhang2026rtmort] [INFERRED; figure-read for both splines]

**Two cautions on that «40 min/week», because the point is fragile and easy to over-read
`[user-challenge 2026-07-29]`:**

- **The optimum is a wide, imprecise region, not 40 minutes.** Momma's own headline is a *range*
  («approximately 30–60 min/week»), and a key constituent study puts it higher: «the lowest risk of
  all-cause mortality was observed at 82 min/week of strength training» (Kamada). On very-low-GRADE,
  sparse, self-reported data the single pooled point (40) should be read as *somewhere in the
  \~30–80+ min/week region*, not a precise target (restated 2026-10-28 with Zhang's categories as \~30 to
  \~120 min/week, where the held estimates sit lowest; all stay below 1.0 to \~140; see *Re-read* below).
- **This is total weekly MINUTES, not FREQUENCY — Momma «could not directly examine the frequency of
  muscle-strengthening activities».** So the curve says nothing about 2x vs 3x/week or session spacing;
  40 min/week could be two 20-minute sessions as easily as one. In particular it does **not** speak to
  the training-physiology heuristic of stimulating each muscle group every \~48 h — that is advice for
  **muscle/strength adaptation** (hypertrophy, protein synthesis), a *different outcome* on a *different*
  evidence base -> [[Protein and Resistance Training for Muscle and Strength]] (Morton 2018, now held:
  RT is the driver, protein a modest RCT-grade adjunct up to \~1.6 g/kg/day). The mortality dose-response
  and the strength-adaptation question are two things, and *this* source answers only the first.

**Do not act on the upper arm.** Four reasons it may be an artifact rather than a dose feature (none
diagnostic — corrected 2026-10-06 from *likely an artifact*, to match the third bullet; self-critique;
fourth bullet added 2026-10-28):

- **The authors disown it:** «the influence of a higher volume... on all-cause mortality, CVD and total
  cancer is unclear, considering the observed J-shaped associations»; «a higher volume may require
  caution» — a hedge, not a finding.
- **The evidence cannot bear it:** «very low» GRADE, «only a small number of studies», self-reported
  exposure, sparse data at high volumes, and publication bias untestable («pooled estimates... might have
  been overestimated»). The upper arm is exactly the unequal-precision / reverse-causation region
  [[The U-Shaped Association Artifact]] warns about. The arm's pointwise lower band clears 1.0 from
  \~165 min/week (figure-read), but that segment plausibly lies past the spline's last knot (plausibly
  \~75-150 min/week; above), where a restricted cubic spline is constrained to be linear, so the shape
  there (and its band) reflects the model as much as the data, though the data beyond the knot still
  set the slope; these are reasons
  about bias, sparsity and model form, and the band does not settle them (corrected 2026-10-28: was
  *reasons about bias and sparsity, not about chance*; self-critique).
- **The built-in counter-instance:** for **diabetes** the same exposure is **L-shaped, not J** — «the
  risk of diabetes sharply decreasing until up to 60 min/week... followed by a gradual decrease», no
  upturn, and with a clear muscle-glucose mechanism. That is *consistent with* an artifactual mortality
  arm, but not diagnostic of one: a real high-volume CV cost is not excluded — Shailendra notes that
  high-volume RT «may also result in adverse effects on blood pressure, heart rate, and arterial
  compliance» [@shailendra2022] — and
  the diabetes dose curve rests on 3 studies; neither reading is shown (corrected 2026-10-06: was *cannot
  ... unless ... artifact*; self-critique).
  [@momma2022]
  - **What the muscle-glucose mechanism IS (Challenge #24, average adult):** skeletal muscle is the
    principal site of insulin-stimulated glucose disposal, so building and using muscle enlarges the
    body's glucose «sink» and improves glucose tolerance. This makes resistance training a **glycaemic
    lever, not only a function/mortality one** — decision-relevant specifically for the dysglycaemic /
    metabolic-syndrome stratum (the drifting-median adult), where the held diabetes L-shape is the
    outcome this mechanism produces. **The exposure whose mechanism is clear (diabetes) shows no upturn; the outcomes
  with an upturn (mortality/CVD/cancer) have only a candidate CV-channel mechanism (above)** — consistent
  with, not diagnostic of, an artifactual arm (corrected 2026-10-06: was *upturn lacks a mechanism ...
  diagnostic signature*; self-critique). (2026-10-28: in Zhang's cohort the CVD spline has no upturn,
  P non-linearity 0.98, though the CVD category estimate ticks from 0.81 at 90-119 to 0.86 at >=120 —
  next bullet.)
- **The repeated-measures cohort does not show an above-null all-cause category `[2026-10-28, Zhang 2026]`.**
  With weekly RT time re-asked every 2-4 years and averaged, the top category (>=120 min/week, mean 204)
  sits at HR 0.92 (0.86-0.98) on 1093 deaths, and for the aerobic-adjusted CVD curve no non-linearity is
  detected (P non-linearity 0.98;
  &gt;=120 min/week HR 0.86, 0.75-1.00, 195 deaths). [@zhang2026rtmort] So in this cohort the candidate high-volume CV cost
  is not detected over the categories studied (at >=120 the CVD upper bound is 1.00, so a cost above
  the null is only just excluded there; a cost relative to the 90-119 level, or beyond \~240 min/week
  where the CVD spline's upper band passes 1.0, reaching \~1.04 at 300 (figure-read), is not
  excluded). The small uptick from 90-119 to >=120 appears alike in the CVD (0.81 to 0.86),
  neurological (0.73 to 0.78) and other-cause (0.88 to 0.97) rows, all within overlapping CIs, while
  cancer shows no reduction from 60 min/week on (1.00, 0.98, 0.96); the neurological and other-cause
  splines are significantly non-linear (P 0.002 and 0.005; the authors call the neurological one
  J-shaped), so the diminishing benefit at high volume is reproduced for those outcomes. On the CVD spline
  alone (no non-linearity detected) this fits a sparse-tail / measurement / model-form reading of the
  MA upper arm better than a CV-harm reading, without settling it: the
  exposures are not the same quantity (parameter table above), and the top 5% of Zhang's exposure
  distribution above the 150-min knot is itself sparse. The same cohort keeps the cancer question open rather than closing it: its cancer
  spline point estimate rises above 1.0 near \~150 min/week (to \~1.2 at 300, interval including 1;
  figure-read; mostly beyond the 150-min last knot, and no cancer category estimate is above 1.0, max
  1.00, 0.89-1.11), in the direction of Momma's cancer upper arm, and the authors offer IGF-1 as a candidate
  mechanism. [inferred from @zhang2026rtmort]

**What survives:** the *lower* arm as an action default — a modest association reached at a **modest
weekly volume** (a wide, imprecise \~30-80+ min/week region, restated as \~30 to \~120 in the re-read
below; the standard «at least 2 days/week» sits comfortably inside it), carrying the same confounding
caveat as the upper arm (*Decision relevance* below). And a stop signal: a diminishing benefit at
higher volumes recurs in all four held sources, each in its own unit — Momma's and Shailendra's spline
estimates start rising after their \~40 and \~60 min/week nadirs, Saeidifard's association is no longer
significant above 2 sessions/week, and Zhang's categories show no further benefit past \~1-2 h/week
(90-119, then >=120 min/week) — on partly shared data, with Shailendra's dose curve a re-pooling of a
subset of Momma's studies, so not independent support (wording corrected 2026-10-28 from *past \~1-2
h/week recurs in all four*; fix-audit). It is usable as a labelled ceiling-is-a-finding stop. What does
not survive: a reason to chase high MSA volume for mortality, or a demonstrated harm — above \~140
min/week the held point estimates conflict, and the spline intervals separate narrowly near \~195
(Momma's and Shailendra's pooled splines — overlapping studies, not independent — above the null,
Zhang's spline band below Momma's; at \~195 Zhang's and Shailendra's curves are past their 150-min last knots and Momma's
plausibly past its own; beyond the last knot each spline is constrained to be linear, so the shape
there reflects the model as much as the data, though the data beyond the knot still set the slope) on sparse,
self-reported data — nor any reading of an optimal
*frequency*, which this source cannot supply (wording corrected 2026-10-28 from *any reason to fear or
to chase*; fix-audit).
**Re-read `[2026-10-28, Zhang 2026]`:** with the repeated-measures cohort added, the held
minutes-based estimates sit lowest at **\~30 to \~120 min/week** (corrected 2026-10-28: was *\~30 to
&gt;=120 min/week, open-ended, mean 204*; self-critique): Zhang's categories 30-59, 60-89 and 90-119
(0.91, 0.91, 0.87; CIs all below 1.0; top category open-ended), Momma's pooled spline (\~0.83-0.95
across the region, figure-read; plotted to \~195) and Shailendra's 4-study curve (nadir \~60, RR 0.74,
0.64-0.86; \~0.75-0.86 across the region, figure-read; a re-pooling of a subset of Momma's studies,
not independent), whose authors describe volumes above \~60 as having «smaller or
no mortality risk reductions» [@shailendra2022].
Every held all-cause estimate stays below 1.0 out to \~140 (Momma \~140, Shailendra \~140-150, Zhang
beyond); the \~120 end of the region is set by the no-further-benefit stop below, not by where the
estimates cross 1.0 (corrected 2026-10-28: was *Shailendra ... does not locate* its higher volumes;
fix-audit). Lower risk already appears at Zhang's 1-29 min/week (0.95,
0.92-0.97). Within the region the CIs do not separate (no between-category test is reported, and
overlap is not a test; the overall trend is P<0.001 with significant curvature, the authors headline
90-119 as the lowest category, and the spline nadir is \~100-110). Beyond \~120 min/week no held source
shows further mortality benefit: «No additional benefit was observed at ≥120 min/week (HR=0.92, 95% CI,
0.86-0.98).» (Zhang, Results; the category is open-ended, mean 204, SD 126). Above \~140 the held
estimates conflict: Momma's broader-MSA pooled spline reaches 1.0 near \~140 with its pointwise lower
band above 1.0 from \~165 (studied range to \~195), and Shailendra's 4-study curve (overlapping
studies, not independent of Momma's) crosses 1.0 at roughly \~140-150 with its lower band above 1.0
from roughly \~165-170 (to 200), while Zhang's weight-machine/RT top category and spline stay below 1.0
(spline point estimate to \~270 on a 300-min axis). All are sparse, self-reported, partly shared data;
beyond each model's last knot a restricted cubic spline is constrained to be linear, so the shape there
(and its band) reflects the model as much as the data, though the data beyond the knot still set the
slope. So neither side is a harm or a safety finding; no rise above the null in Zhang's top category (1093 deaths) is not a safety finding for
volumes beyond it. [inferred from @zhang2026rtmort]

</div>

<div class="recent-update" data-last-updated="2026-10-28">

## Decision relevance

- **Add strength training — the lower mortality appears at a modest weekly volume**: \~30 to \~120
  min/week is where the held estimates sit lowest (Momma's spline, plotted to \~195; Zhang's
  categories, top one open-ended; Shailendra's 4-study curve, nadir \~60, a re-pooling of a subset of
  Momma's studies; imprecise, observational; the standard «at least 2
  days/week» is inside it; restated 2026-10-28 from *\~30 to >=120, open-ended at mean 204*;
  self-critique), every held all-cause estimate stays below 1.0 out to \~140, and the association
  holds after adjustment for aerobic activity (the two combined are
  the best-evidenced activity state). **Stop signal (labelled decision default — cheap, low-harm):** no
  held source shows further mortality benefit beyond \~120 min/week, and above \~140 the held estimates
  conflict (Momma's and Shailendra's pooled splines — overlapping studies, not independent — above
  1.0, Zhang's top category and spline below it; parked, see the
  [REVIEW] above), so more than \~2 h/week is not shown to buy more mortality benefit and is shown
  neither harmful nor safe — a ceiling on current evidence, not a located knee. The effective *volume*
  is modest; the optimal *frequency / spacing* (e.g. every \~48 h) is a strength-**adaptation** question
  this mortality evidence does not address.
- **But weight the warrant honestly.** This is observational, self-reported, very-low-GRADE evidence —
  a plausible association whose direction is consistent across shared-base pools and whose magnitude is
  sensitive to adjustment, not an RCT-grade effect (corrected 2026-10-28 from *directionally-robust*;
  self-critique). It belongs below the BP and aerobic-activity levers in certainty, not above. The lower
  arm carries the same confounding caveat as the upper: in Zhang's Table 2 the 90-119 min/week estimate
  moves from 0.66 (0.61-0.72) age-adjusted to 0.76 (0.70-0.82) with covariates and 0.87 (0.81-0.95) with
  aerobic activity added, and 1-29 min/week from 0.83 to 0.90 to 0.95, so how well the other activity
  is measured changes the RT number a lot. With aerobic activity self-reported and fitness unmeasured,
  residual confounding plausibly accounts for part of what remains; how much is not shown.
  [@zhang2026rtmort]
- **For an inactive adult, do both; if only one, aerobic activity at the guideline dose has the larger
  observational estimate (not a matched-time contrast); at very high aerobic volume no RT trend is
  detected `[2026-10-28, Zhang 2026]`.** In Zhang's joint analysis (reference: <7.5 MET-h/week aerobic
  and no RT), RT with <7.5 MET-h/week of aerobic activity (below the guideline level, not none) went
  with HR 0.93 (0.88-0.97) at 1-59 min/week, 0.89 (0.76-1.05; 152 deaths) at 60-119 and 0.97
  (0.75-1.26; 58 deaths) at >=120, while 7.5-<15 MET-h/week of aerobic activity without RT (\~150-300
  min/week of moderate activity on the source's guideline equivalence, against RT under an hour) went
  with 0.74 (0.72-0.77). Within
  aerobic strata, the RT trend was significant at <7.5, 15-<30 and 30-<45 MET-h/week, P=0.06 at
  7.5-<15, and not detected at >=45 (HRs 0.57 (0.54-0.60), 0.53, 0.57 and 0.58 (0.52-0.64) across the
  RT categories, P=0.55 — flat in point estimate; the printed cell CIs are each against the common
  reference, so they do not show how precisely a within-stratum RT association is excluded); RERI 0.07
  (-0.37 to 0.52): no interaction on the additive scale was detected.
  [@zhang2026rtmort]
  A rough calculation from the two >=45 MET-h cells (0.58, 0.52-0.64 over 0.57, 0.54-0.60) puts the
  &gt;=120 vs no-RT ratio in this stratum at \~1.02, roughly 0.91-1.14.

  (corrected 2026-10-28: was *flat and fairly tight in this cohort, not merely imprecise*;
  self-critique.) The authors conclude more strongly, in the main-text Conclusion: «The lowest risk occurs with high levels of both, though resistance training offers no added benefit beyond ≥45 MET-h/week of aerobic activity.»
  [@zhang2026rtmort] That rests on
  a within-stratum no-trend result for all-cause mortality, not on an interaction test, and says nothing
  about other outcomes. Trend
  tests inside each stratum are not an interaction test, and the RERI (any vs no RT, <7.5 vs >=7.5
  MET-h) does not test the >=45 stratum, so a different RT association at very high aerobic volume is
  not shown either. Both contrasts are self-reported, observational and from the same pooled analysis of
  three cohorts with the same adjustment set, though the RT item was validated only in men and records
  time only, while aerobic activity is MET-weighted; so the larger aerobic estimate is not shown to be a
  larger causal effect, and part of the gap may be measurement and dose. Zhang did not study people
  unable to do aerobic activity, so it cannot speak to RT as a substitute. The >=45 MET-h/week result is
  a no-trend-detected result for mortality only, not a located ceiling: Zhang did not measure strength,
  function, falls or quality of life, which are RT's stronger cards (below). [inferred from @zhang2026rtmort]
- **For fitness (VO2max) it is complementary, not the same lever.** Strength training raises strength and
  lean mass; aerobic/interval work raises CRF ([[Measuring and Raising Cardiorespiratory Fitness]]). Both
  belong in an untrained person's program.


[inferred from @momma2022]

</div>

## The healthspan case is stronger than the mortality case — it runs through function and falls (Challenge #17)

The very-low certainty above is for **one endpoint** — muscle-strengthening -> *all-cause mortality*
(Momma, self-reported, observational). It is **not** the verdict on strength training's healthspan
value, which runs through better-evidenced channels:

- **Function and falls are held, patient-important, and stronger.** Physical activity in older adults
  reduces falls, injurious falls, and probably fractures — outcomes people care about directly, not
  surrogates, and the strongest outcome class the annex carries for this stratum
  ([[Physical Activity Dose and Mortality]], WHO PA annex). Avoiding a fall/fracture and keeping physical
  function *is* the healthspan payoff, and it is graded above the mortality signal. *(Caveat: the held
  evidence is for exercise broadly; falls-prevention specifically combines resistance + balance training,
  which the wiki holds at the activity level, not RT-specifically -> a gap.)*
- **Grip strength and muscle mass are strong mortality PREDICTORS — now held, and still predictors, not
  proof.** Low grip strength tracks all-cause and cause-specific mortality (Celis-Morales 2018, UK
  Biobank n=502,293: all-cause HR 1.16-1.20 per 5 kg lower grip; \~1.48 per 1 SD, out-ranking SBP and
  total activity in-model) -> [[Grip Strength and Mortality]]; low muscle *mass* likewise
  -> [[Low Muscle Mass and Mortality]]. But both are the same predictor-vs-cause gap as fitness
  ([[Cardiorespiratory Fitness and Mortality]]): a strong predictor does not prove the *intervention*
  (resistance training) moves the outcome — grip is heritable (\~52%) and disease-sensitive, so it is part
  marker, part lever. The strength-training mortality evidence remains this page's very-low-GRADE number.

So strength training's **weak** card is the mortality evidence; its **strong** card is function/falls
(held) plus the muscle-mass/strength predictor literature (now held: [[Grip Strength and Mortality]],
[[Low Muscle Mass and Mortality]] — predictors, not proof, as above). For an older or sarcopenia-risk
stratum the case is *stronger* than the very-low mortality number alone implies — the lever's value is
in keeping function and staying off the floor, not (on current evidence) a proven mortality reduction.

- **And the *kind* of resistance training matters for that function card.**
  [[Power Training and Physical Function in Older Adults]] (el Hadouchi 2022, gold SR+MA) adds a
  GRADE-**HIGH** functional result to this strong card: for older adults, a velocity/power emphasis
  beats conventional heavy-load strength on the activity-test outcomes (generic-function SMD 0.43,
  speed-emphasis 0.36) — specifying not just *that* strength training defends function but *how* to
  train for maximum functional payoff in this stratum. [inferred from @elhadouchi2022]



<div class="recent-update" data-last-updated="2026-10-28">

## Limits

- Three meta-analyses (Momma, Saeidifard, Shailendra) over a largely shared cohort base — not
  independent tests (see the 3-way table above); essentially observational (Saeidifard's 11 include one
  RCT); Momma rates its evidence «very low»
  GRADE; mostly US cohorts; self-reported exposure; high heterogeneity (I2 up to 83%); publication bias
  untestable. (corrected 2026-10-06: *One meta-analysis* -> three overlapping MAs.)
- The above-null part of the upper arm is not usable (above); a diminishing benefit at higher
  volumes recurs in all four held sources, each in its own unit (*What survives* above; partly shared
  data, Shailendra's dose curve a re-pooling of a subset of Momma's studies), and serves as a labelled
  stop signal; the
  diabetes L-shape is the more trustworthy dose curve.
- Frequency vs total-time could not be separated; the target-dose is a region, not a number.
- **Zhang 2026's own limits (added 2026-10-28):** weekly duration only (no intensity, load, sets or
  frequency; calisthenics and Pilates not captured); the RT question validated only in the HPFS men;
  mostly white middle-aged-to-older US health professionals; lagged estimates and cause-specific joint
  tables only in an unheld supplement; no absolute risks; HPFS overlaps two of the MAs. [inferred from @zhang2026rtmort]


[inferred from @momma2022]

</div>

## Why the diabetes curve is clean but the mortality curve is not (deliverable-critique, 2026-08-01)

A reasonable puzzle (deliverable-critique): how can the diabetes dose-response be clean and L-shaped while
all-cause mortality is noisy - does glycaemic control not reach mortality? It does: RT lowers **both**
(mortality RR 0.85, diabetes 0.83), so the glycaemic lever is not divorced from mortality. Two reasons the
shapes differ, neither implying inertness:

- **Dilution into a distal composite.** Diabetes is a proximate disease endpoint with a direct mechanism
  (the muscle glucose «sink»); all-cause mortality is a COMPOSITE of every cause, so a real diabetes
  reduction moves it only in proportion to diabetes's share of deaths - the signal is diluted and noisier
  (and here sits at very-low certainty), not absent.
- **Glucose is a SURROGATE.** Its transmission to all-cause mortality is imperfect: Look AHEAD improved
  glycaemia and weight without cutting hard CV events, and intensive glucose-lowering has even raised
  mortality via hypoglycaemia -> [[Surrogate Outcomes]], [[Does Weight Loss Reduce Cardiovascular Events]].

So *clean diabetes, noisy mortality* is the expected shape of a diluted, surrogate-mediated distal outcome,
not evidence the channel does nothing.

## References

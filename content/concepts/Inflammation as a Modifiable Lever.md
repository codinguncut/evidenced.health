---
type: concept
question: Is chronic inflammation a modifiable causal lever for cardiovascular events — and if so, via what target, in whom, and with what limits?
aliases: [Inflammatory Hypothesis of Atherothrombosis, Residual Inflammatory Risk, Anti-Inflammatory Therapy Cardiovascular, Inflammation and Cardiovascular Disease, IL-1 Beta Atherosclerosis]
authors: [Ridker, Paul M; Nidorf, Stefan M; Kaptoge, Stephen; Wensley, Frances; Danesh, John; Shivappa, Nitin; Yin, Jia-Li]
sources: [Ridker - Canakinumab Atherosclerotic Disease CANTOS 2017, Nidorf - Colchicine Chronic Coronary Disease LoDoCo2 2020, Emerging Risk Factors Collaboration - CRP Coronary Stroke Mortality 2010, CCGC - CRP Coronary Heart Disease Mendelian Randomization 2011, Shivappa - Dietary Inflammatory Index Cardiovascular Mortality Meta-Analysis 2018, Molendijk - Diet Quality Depression Dose-Response Meta-Analysis 2017, WCRF - Dietary Lifestyle Patterns Cancer Prevention 2025, Yin - Dietary Patterns Multiple Cancers Umbrella 2025]
cluster: inflammation-cvd
nucleus: true
confidence: medium
created: 2026-08-08
updated: 2026-08-29
self_critiqued: 2026-08-29
relationships:
  related_to:
    - Surrogate Outcomes
    - Net Effect vs Intended Effect
    - LDL ApoB and Cumulative Exposure
    - The U-Shaped Association Artifact
    - Is the Food Category Doing Any Work
    - Allostatic Load and Mortality
---

**Nucleus of the `inflammation-cvd` cluster.** Chronic vascular inflammation is a *causal* lever for
cardiovascular **events** — not merely a marker that travels with them. Two randomized trials of
different anti-inflammatory drugs cut cardiovascular events in statin-treated coronary patients **without
changing lipids**, which is the direct test the observational literature could never supply. But the
lever has three sharp boundaries the same sources force: the target is the **inflammatory pathway, not
the CRP molecule** that indexes it; the demonstrated benefit is on **events, not all-cause mortality**;
and the *dietary* version of the lever is, on current evidence, an observational proxy for diet patterns
already known to be healthy, not a shown independent lever. [inferred from @ridker2017cantos; @nidorf2020lodoco2; @ccgc2011crpmr]

## The causal proof — two RCTs, lipids unchanged, events down

The observational CRP-vs-disease literature (below) could show only association. **CANTOS** supplied the
first randomized test by isolating inflammation from lipids: canakinumab, a monoclonal antibody against
interleukin-1-beta, in 10,061 post-MI patients with hsCRP >= 2 mg/L, already on statins (91%).

- hsCRP fell dose-dependently (26/37/41 percentage points more than placebo at 50/150/300 mg); LDL and
  HDL were unchanged and triglycerides rose 4-5% [@ridker2017cantos].
- Primary endpoint (nonfatal MI, nonfatal stroke, CV death) at 150 mg: HR 0.85 (95% CI 0.74-0.98,
  P=0.021) — 3.86 vs 4.50 events/100 person-years; 300 mg HR 0.86 (0.75-0.99) did not clear the
  multiplicity-adjusted threshold; 50 mg null [@ridker2017cantos].
- The trial's own verdict: canakinumab «led to a significantly lower rate of recur- rent cardiovascular
  events than placebo, independent of lipid-level lowering» [@ridker2017cantos]. *Independent of lipids* is the load-bearing phrase — it is
  what upgrades inflammation from marker to lever.

**LoDoCo2** generalizes the finding with a cheap generic drug and a *broad* mechanism, in a different
population and by an unrelated team. Colchicine 0.5 mg/day in 5522 chronic-coronary-disease patients
(94% on statins): primary composite (CV death, spontaneous MI, ischemic stroke, ischemia-driven
revascularization) HR 0.69 (95% CI 0.57-0.83, P<0.001; 6.8% vs 9.6%) [@nidorf2020lodoco2]. Colchicine's mechanism is deliberately unlike
canakinumab's: «In contrast to selective inhibition of interleukin-1β by canakinumab, colchicine has
broad cellular effects that include inhibition of tubulin polymerization and alteration of leu- kocyte
responsiveness» [@nidorf2020lodoco2].

**Why the two together are stronger than either alone (convergent backing).** Two *different*
anti-inflammatory agents (a narrow anti-IL-1-beta antibody; a broad-acting alkaloid), two different
teams and funders (Novartis-sponsored vs publicly funded Australian/Dutch), two different populations
(post-MI + high-CRP vs chronic stable coronary), both cutting events on top of statins — the shared
factor is *dampening inflammation*, not any one drug's off-target profile. LoDoCo2 reads its own result
this way: «The CANTOS trial provided evidence suggest- ing that inflammation plays a causal role in the
pathogenesis of cardiovascular disease... Our results with colchicine are consistent with those obtained
in the first LoDoCo trial and the COLCOT trial» [@nidorf2020lodoco2].
**Not marked `[E-independent]`, deliberately:** LoDoCo2 was *designed to test the hypothesis CANTOS
raised* and cites CANTOS as antecedent, and both are secondary-prevention, on-statin, coronary
populations — so the two share a support-factor context and an explicit lineage of hypothesis. The
convergence is real and by independent interventions, but it is corroboration of one hypothesis, not two
blind routes arriving separately. [inferred from @ridker2017cantos; @nidorf2020lodoco2]

## The target is the pathway, NOT the CRP molecule — the marker/lever crux

The single most important refinement the cluster forces: **CRP predicts cardiovascular disease but does
not cause it.** Getting this wrong turns a good *prognostic marker* into a false *treatment target*
-> [[Surrogate Outcomes]]. Two large individual-participant meta-analyses settle it, and — critically —
they do **not** conflict. The BLOCKING parameter table:

| Parameter | ERFC 2010 (observational) | CCGC 2011 (Mendelian randomization) | Same quantity? |
|---|---|---|---|
| Design | IPD meta-analysis, 54 prospective studies, 160,309 people | MR IPD meta-analysis, 47 studies, 194,418 people, 4 CRP-gene SNPs | **NO** — measured association vs genetic instrument |
| Exposure contrast | *circulating* (measured) CRP, per 1-SD higher usual loge CRP (\~3-fold) | *genetically-raised* CRP, per 1-SD higher genetically-predicted ln CRP | **NO** — same numeric scale, different *source* of the variation (measured level vs inherited genotype) |
| Outcome | CHD (first MI or fatal CHD) | CHD (fatal CHD / nonfatal MI / >50% stenosis) | \~yes |
| Circulating CRP -> CHD (risk-factor-adjusted) | RR 1.37 (95% CI 1.27-1.48) [@erfc2010crp] | RR 1.33 (1.23 to 1.43) [@ccgc2011crpmr] | **YES** — both observational circulating-CRP -> CHD -> they AGREE |
| Genetically-raised CRP -> CHD | not estimated (no genetic arm) | RR 1.00 (0.90 to 1.13) per 1-SD [@ccgc2011crpmr] | N/A — a `G`-gap on ERFC's side, not a contrast |

**Classification: refinement + disambiguation (F/B), NOT a tension (D).** Where the two measure the
*same quantity* (circulating CRP -> CHD) they agree (1.37 vs 1.33, overlapping intervals). CCGC then
*adds* a genetic arm (1.00) that is discordant with its own observational arm — the Mendelian-
randomization logic showing the observational association is confounded rather than causal. So the sources do
not clash on a shared quantity; CCGC **bounds** ERFC (type F — the composite *predicts-but-does-not-cause*
beats either alone) and **disambiguates** one term into two objects (type B — *CRP-the-predictor* vs
*CRP-the-cause*). CCGC's own conclusion: «Human genetic data indicate that C reactive protein
concentration itself is unlikely to be even a modest causal factor in coronary heart disease»
[@ccgc2011crpmr].

**Counter-passage read (CCGC's own statement of what its MR does and does not show).** CCGC explicitly
denies the two readings that would manufacture a tension: it does *not* claim inflammation is non-causal,
only that CRP-the-molecule is — «Irrespective of the causal relevance of C reactive protein itself to
coronary heart disease, however, there is considerable evidence that persistent inflammation might
contribute to cor- onary heart disease... studies seeking to test the inflammation hypothesis in coronary
heart dis- ease should examine inflammatory mediators other than C reactive protein»
[@ccgc2011crpmr]. And it explicitly
preserves CRP's *predictive* value (ERFC's claim) — «Our findings also do not address the separate issue
of the value of measurement of circulating C reactive protein in prediction of long term vascular risk»
[@ccgc2011crpmr]. The not-joined
checks fire: the two answer *different questions* (prediction vs causation) and do not disagree on the one
they share. This is a distinction, not a joined issue.

**These two are NOT independent backing — do not read their agreement as robustness.** ERFC and CCGC
share the same Cambridge coordinating centre (Kaptoge, Di Angelantonio, S.G. Thompson, Danesh sit on
both), draw on overlapping cohorts, and CCGC cites ERFC 2010 as antecedent. Their agreement on the
*observational* number is shared-data agreement, not a type-E convergence — no `[E-independent]`.
[inferred from @erfc2010crp; @ccgc2011crpmr]

**The reconciliation, and why it is decision-relevant.** ERFC (CRP predicts), CCGC (CRP does not cause
but inflammation may), and CANTOS/LoDoCo2 (dampening inflammation cuts events) fit together with no
contradiction: CRP is a **prognostic marker** for placing someone in a higher-risk stratum, while the
**lever** is the inflammatory pathway itself, reached by a drug that acts *upstream* of CRP (IL-1-beta /
IL-6 signalling; the NLRP3 inflammasome), not by "lowering CRP." CANTOS names the resulting stratum:
«statin-treated patients with residual inflammatory risk as assessed by means of a high-sensitivity
C-reactive protein level of 2 mg or more per liter at baseline have future event rates that are at least
as high as, if not higher than, those among statin-treated patients with a residual risk due to LDL
cholesterol level» [@ridker2017cantos]. CRP
*selects who benefits*; it is not itself the thing being fixed.

## Causal for EVENTS is not a mortality lever — the net-effect boundary

Both trials cut cardiovascular events and **neither reduced all-cause mortality** — the textbook
[[Net Effect vs Intended Effect]] case, where a real targeted benefit is offset elsewhere.

- CANTOS: «There was no significant difference between the canakinumab groups and the pla- cebo group in
  all-cause mortality» (HR 0.94, 95% CI 0.83-1.06) — and «signifi- cantly more deaths were attributed to
  infection or sepsis in the pooled canakinumab groups than in the placebo group» (0.31 vs 0.18
  events/100 person-years, P=0.02) [@ridker2017cantos]. Suppressing innate immunity trades vascular events for fatal infection. (A partly
  offsetting *reduction* in cancer mortality was also seen — net all-cause mortality was flat.)
- LoDoCo2: «Colchicine did not result in a lower in- cidence of death from any cause than placebo»
  (0.9 vs 0.8/100 person-years, HR 1.21, 95% CI 0.86-1.71), with noncardiovascular death numerically
  higher (HR 1.51, 95% CI 0.99-2.31 — a CI that barely includes 1, flagged by the authors as a potential
  concern) [@nidorf2020lodoco2].

**Decision consequence:** the inflammatory lever is validated for *cardiovascular events* (a
patient-important outcome), not for *length of life*. A person weighting all-cause survival above
event-avoidance gets a different answer than the event endpoint alone implies — the weighting is theirs
(layer 3), but the wiki must not let the event benefit stand in for a mortality benefit it does not have.
[inferred from @ridker2017cantos; @nidorf2020lodoco2]

<div class="recent-update" data-last-updated="2026-08-29">

## The "anti-inflammatory diet" is a proxy for known-healthy patterns, not a shown independent lever

The drugs above are the *evidenced* form of the lever, and they are pharmacotherapy — out of reach as a
lifestyle change for most people. The tempting inference is that an **anti-inflammatory diet** pulls the
same lever. The best summary of that literature is the Dietary Inflammatory Index (DII) meta-analysis:
14 observational studies, 161,337 participants; highest-vs-lowest DII «showed a 36% increased risk of CVD
incidence and mortality, with moderate evidence of heterogeneity (relative risk (RR) = 1.36, 95%
confidence interval (CI): 1.19, 1.57; heterogeneity index I2 = 69%, p < 0.001)»
[@shivappa2018dii].

**Three reasons this does not establish an independent dietary lever [inferred from @shivappa2018dii]:**

- **It is association, and the authors frame it as prediction, not intervention** — «These results
  further substantiate the utility of DII as tool to characterize the inflammatory potential of diet and
  to predict CVD incidence and mortality» [@shivappa2018dii]. *Predict*, echoing the CRP marker leg — not a
  demonstrated causal handle.
- **The DII is collinear with diet patterns already known to be healthy.** It is an FFQ-derived score
  built from foods (fruit/vegetables, whole grains, polyphenols anti-inflammatory; red/processed meat
  pro-inflammatory), so a high-vs-low-DII contrast largely re-measures the Mediterranean / high-fibre
  pattern — several included cohorts *are* MedDiet cohorts (PREDIMED, SUN). The open question is whether
  "anti-inflammatory" adds anything beyond the pattern it re-labels -> [[Is the Food Category Doing Any Work]].
- **The index is validated *against CRP and other markers*** — but CRP is the non-causal marker CCGC
  demoted, so the "inflammation" the DII scores is doubly removed from any evidenced causal target.

So the dietary leg belongs in the **insufficient-evidence** state for an *independent* lever: reasonable
by mechanism and consistent with the pattern literature, but not shown to move events by acting on
inflammation as opposed to by being a healthy diet. [inferred from @shivappa2018dii]

The **same DII scores lower depression incidence** in a separate prospective meta-analysis — low-vs-high
DII «OR = 0.81, 95% CI = 0.71 to 0.92» with low heterogeneity
[@molendijk2017diet] — which extends the
*same* collinearity caveat to a second outcome: the DII re-labels a healthy-diet pattern, so a depression
association does not establish an inflammation-specific pathway either, and the diet->depression link is
itself suspected to run through the cardiometabolic route -> [[Depression and Modifiable Exposures]].

**Cross-outcome corroboration (cancer, a different field).** The same caveat surfaces independently in
WCRF/AICR's 2025 pattern report on **colorectal cancer**: the Empirical Dietary Inflammatory Pattern
(EDIP) and its insulin-anchored siblings were «graded as 'strong-probable' for their likelihood of
causality for an increased colorectal cancer risk» [@wcrf2025dlp] — but the report itself flags the index does not cleanly map
its named mechanism: «alcohol consumption is negatively scored in these patterns but has strong evidence
of an increased risk for colorectal cancer. In non-drinkers, associations between the Empirical Dietary
Inflammatory Pattern and colorectal cancer risk were stronger than in those who consumed alcohol.»
[@wcrf2025dlp] That is
the same *the-index-relabels-a-diet-pattern, it does not isolate an inflammation-specific target* point
the DII leg makes for CVD, now reached in cancer epidemiology by a different body — corroboration of the
caveat, **not** a confidence upgrade (different outcome, same-family limitation, no `[E-independent]`).
[inferred from @wcrf2025dlp]

Yin's 2025 umbrella review adds the DII->CRC direction from the *observational-MA* side: «The present
UR also found a harmful association between the DII score and the risk of CRC comparing the highest
score to the lowest, as well as a 1-unit increment in the score» [@yin2025cancer] — but at the bottom of the credibility ladder, «classiﬁed as
very low quality in terms of GRADE, mainly owing to the presence of heterogeneity and publication bias»
[@yin2025cancer]. So the pro-inflammatory-
diet -> CRC direction now shows up across three routes (WCRF's EDIP grade, Yin's DII re-grade, the DII
CVD leg), all carrying the same *the-index-relabels-a-diet-pattern* caveat and none clearing a high
evidence bar — reinforcing the insufficient-evidence verdict on an *independent* dietary-inflammation
lever, not lifting it. [inferred from @yin2025cancer]

</div>

## Where it sits — residual risk, reverse causation, and the open gaps

- **A second causal axis beside lipids.** CANTOS is the cleanest evidence for *residual inflammatory
  risk* — event reduction on top of well-controlled LDL, by a non-lipid pathway. This bounds the
  lipid-centric model: apoB is *a* causal axis, not the only one -> [[LDL ApoB and Cumulative Exposure]].
- **CRP is partly a consequence, which is why it is a marker.** Circulating CRP rises with adiposity,
  smoking, and occult illness, so a raised level sits partly *downstream* of the things one fears — the
  reverse-causation reading that makes it a predictor rather than a target -> [[The U-Shaped Association Artifact]], [[Surrogate Outcomes]].
- **Open gaps (`G`).** (i) No anti-inflammatory therapy has shown an all-cause **mortality** benefit —
  the net-effect ceiling. (ii) The *modifiable-by-lifestyle* version of the lever is unproven at the
  outcome level (no RCT of an anti-inflammatory *diet* on hard CV events isolating inflammation from the
  diet pattern). (iii) The evidenced levers are drugs with real harms (fatal infection; GI/myotoxic
  effects), so the lever's *reachability* for a general, lower-risk person is itself a limit, not a
  detail.

## Synthesis

The cluster earns a nucleus because it resolves a question the individual sources cannot: **inflammation
is a validated causal lever for cardiovascular events, but only the pathway is the lever — CRP is the
dial, not the mechanism; the benefit is on events, not survival; and the dietary version is, so far, a
relabelling of diets already known to be healthy.** The move present in no single source is the
reconciliation of the marker leg (ERFC), the causal-molecule refutation (CCGC), the pathway-level RCTs
(CANTOS + LoDoCo2), and the diet proxy (DII) into one coherent, bounded lever. Configurative, not
aggregative: the sources answer adjacent questions (predicts / causes / treatable / dietary) that only
together specify what to do and where the lever stops. [inferred from @ridker2017cantos; @nidorf2020lodoco2; @erfc2010crp; @ccgc2011crpmr; @shivappa2018dii]

**The loop is open.** Every claim here is coherence- and source-graded, not outcome-validated; the
mortality ceiling and the diet gap are exactly where a confident-sounding event benefit could mislead.

<div class="recent-update" data-last-updated="2026-08-29">

## Self-critique `[run 2026-08-08, before commit; author's — parent re-critiques independently]`

- **Overclaim:** the headline is scoped to *events*, and the two boundaries (no all-cause-mortality
  benefit; diet-proxy is not an independent lever) are stated as prominently as the benefit. Confidence is
  `medium`, not high — it survives stripping the strongest single claim (the causal-for-events verdict
  still rests on two RCTs even if the diet and marker legs are removed).
- **Laundered independence:** explicitly refused twice. ERFC+CCGC are flagged NON-independent (shared
  Cambridge coordinating centre, overlapping cohorts, CCGC cites ERFC) — their agreement on the
  observational RR is shared-data, not type-E. CANTOS+LoDoCo2 are convergent by *different agents/teams*
  but NOT marked `[E-independent]` because LoDoCo2 was designed to test the hypothesis CANTOS raised and
  cites it. No `[E-independent]` token anywhere on the page.
- **Fake tension:** the ERFC-vs-CCGC crux is explicitly classified a refinement/disambiguation, NOT a
  tension — the parameter table shows they AGREE where they measure the same quantity, and CCGC's own
  counter-passages (inflammation-still-open; prediction-not-addressed) close the not-joined checks. No
  `tension` filed.
- **Same-quantity discipline:** the crux parameter table carries a filled "same quantity?" column;
  circulating-CRP (both sources, agree) is kept distinct from genetically-raised-CRP (CCGC only, null).
- **Selection bias (declared):** these five sources were curated to build one argument; that is weak
  evidence about the world, and the diet leg in particular is held at `insufficient-evidence`, not
  asserted.

**Addendum `[run 2026-08-29, WCRF-2025 cross-outcome line]`.** The added EDIP->CRC paragraph is scoped
as *corroboration of the existing caveat, not a confidence upgrade*: it is a different outcome (CRC, not
CV events) from a different body (WCRF/AICR), so it is deliberately **not** marked `[E-independent]` and
`confidence:` stays `medium`. Overclaim guard: the paragraph asserts only that an empirical inflammatory
index re-labels a diet pattern (the same point the DII leg already makes), evidenced by WCRF's own
alcohol-miscoring observation — it does not claim inflammation is or is not causal for CRC, and it does
not touch the page's CVD headline. No new tension filed.

**Addendum `[run 2026-08-29, Yin-2025 DII->CRC line]`.** The Yin sentence is scoped as a *third route
carrying the same caveat*, explicitly at very-low GRADE, and marked not `[E-independent]`:
Yin pools the same observational-cohort DII literature the CVD leg draws on (shared-source, not an
independent route), so it reinforces the insufficient-evidence verdict rather than lifting it.
`confidence:` stays `medium` (the CVD-events headline is untouched). Overclaim guard: no causal claim
about inflammation and CRC is made — only that the pro-inflammatory-diet -> CRC *direction* recurs on
weak evidence.
</content>
</invoke>

</div>

## References

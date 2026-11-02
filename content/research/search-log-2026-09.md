---
title: "Search log: September 2026"
---
## [2026-09-01] SELECTION RECORD — hunt for next breadth ingest (staged pile dry)

**Context:** staged queue dry of clean unsaturated gold (triage-cards + ingest-queue confirm); big
rocks saturated (RT/strength, sleep, protein all held). Hunted the fabric's own AWAITS gaps for the
highest-value acquirable cell.

**(1) Queries:** grep AWAITS tokens across claim dirs (channel: local fabric); OpenAlex
`search "white meat poultry cardiovascular diabetes" --type meta-analysis --from-year 2020` (0 hits —
title.search strictness on "white meat", not a literature absence: Ramel/Lupoli exist under other
title phrasings); OpenAlex `fetch 10.29219/fnr.v67.9543`.

**(2) Results:** AWAITS surfaced \~20 named targets; cross-checked disk — Lupoli 2021 (white-meat->
mortality/CV), Kim 2017 (meat->stroke), Thorisdottir 2023 (legume->CVD/T2D) are ALREADY INGESTED
(the staged-source-dois.tsv "STAGED" notes are STALE — all three in done/papers/ with source pages).
OpenAlex MA query 0 hits (title-strictness artifact). Ramel fetch = FETCH-FAIL (RemoteDisconnected).

**(3) Adjudication:**
- SELECTED **Ramel - White Meat Cardiovascular Diabetes Meta-Analysis 2023** (DOI 10.29219/fnr.v67.9543,
  gold, NNR2023 SR group, INDEPENDENT) — fills the one remaining white-meat cell (->T2D; Lupoli holds
  CV/mortality only) and DISPLACES the National-Chicken-Council-funded Connolly abstract in _hold
  (symmetric-standards: industry abstract -> independent gold). Marginal but decision-relevant (completes
  the red->white-meat substitution appraisal).
- NOT-TAKEN (already held): Lupoli, Kim, Thorisdottir (ingested — stale tsv).
- DEFER (fabric-visible, lower rank): Gijsbers dairy->T2D 2016 (dose-response; dairy cell — larger but
  older, check coverage first); generic [AWAITS (SR)] gaps (exercise->fracture, periodontal->cognitive
  interventional) are frontier.

**(4) Acquisition-requested:** Ramel 10.29219/fnr.v67.9543 — FETCH-WALLED (RemoteDisconnected via
OpenAlex API; browser-fetch also failed per prior note: HTTP2/RemoteDisconnected/Steel-HTML). Status:
0 fetched, 1 MAINTAINER-DROP requested. Direct PDF URL:
https://foodandnutritionresearch.net/index.php/fnr/article/download/9543/16639
- [2026-09-01] openalex search "resistance training older adults physical function meta-analysis" -> 6 hits: https://doi.org/10.1186/s12877-021-02491-5; https://doi.org/10.1007/s40279-024-02123-z; https://doi.org/10.1007/s40520-025-03235-w; https://doi.org/10.1519/jpt.0000000000000374; https://doi.org/10.3390/nu17223624
- [2026-09-01] openalex search "change cardiorespiratory fitness mortality meta-analysis" -> 0 hits: (none)
- [2026-09-01] openalex search "exercise physical function disability older adults systematic review" -> 1 hits: https://doi.org/10.1089/tmj.2023.0177
- [2026-09-01] openalex search "sarcopenia all-cause mortality meta-analysis" -> 3 hits: https://doi.org/10.1136/bmjopen-2017-021252; https://doi.org/10.1007/s00392-023-02360-8; https://doi.org/10.1080/2090598x.2021.1876289
- [2026-09-01] openalex search "cardiorespiratory fitness improvement all-cause mortality meta-analysis" -> 0 hits: (none)
- [2026-09-01] openalex resolve "10.1007/s00392-023-02360-8" -> 1 hits: https://doi.org/10.1007/s00392-023-02360-8
- [2026-09-01] openalex fetch "10.1007/s00392-023-02360-8" -> 0 hits: (none)
- [2026-09-01] openalex search "progressive resistance training physical function older adults systematic review" -> 0 hits: (none)
- [2026-09-01] openalex search "exercise disability activities daily living community older adults meta-analysis" -> 0 hits: (none)
- [2026-09-01] openalex search "resistance training physical function older meta-analysis" -> 6 hits: https://doi.org/10.1186/s12877-021-02491-5; https://doi.org/10.1007/s40279-024-02123-z; https://doi.org/10.1007/s40520-025-03235-w; https://doi.org/10.1519/jpt.0000000000000374; https://doi.org/10.3389/fpubh.2025.1735899
- [2026-09-01] openalex search "resistance training mobility older adults meta-analysis" -> 3 hits: https://doi.org/10.1016/j.apmr.2022.04.002; https://doi.org/10.1186/s12877-026-08020-6; https://doi.org/10.1093/geroni/igab046.3258
- [2026-09-01] openalex search "exercise physical function nursing home meta-analysis" -> 2 hits: https://doi.org/10.1016/j.gerinurse.2022.10.014; https://doi.org/10.3389/fpsyg.2025.1679734
- [2026-09-01] openalex search "progressive resistance strength training disability meta-analysis" -> 0 hits: (none)
- [2026-09-01] openalex fetch "10.1016/j.apmr.2022.04.002" -> 0 hits: (none)
- [2026-09-01] openalex fetch "10.1186/s12877-021-02491-5" -> 0 hits: (none)
- [2026-09-01] openalex search "cardiorespiratory fitness mortality older adults meta-analysis" -> 0 hits: (none)
- [2026-09-01] openalex search "aerobic exercise training mortality older adults meta-analysis" -> 0 hits: (none)
- [2026-09-01] openalex search "sarcopenia mortality community-dwelling meta-analysis" -> 1 hits: https://doi.org/10.3389/fnut.2025.1652386
- [2026-09-01] openalex search "muscle strength grip mortality older adults meta-analysis" -> 0 hits: (none)
- [2026-09-01] openalex search "physical function independence older adults exercise meta-analysis" -> 0 hits: (none)
- [2026-09-01] openalex search "resistance training mortality meta-analysis" -> 3 hits: https://doi.org/10.1177/2047487319850718; https://doi.org/10.1016/j.amepre.2022.03.020; https://doi.org/10.1186/s40798-026-01080-3
- [2026-09-01] openalex search "fitness change mortality meta-analysis" -> 0 hits: (none)
- [2026-09-01] openalex search "exercise falls fractures older systematic review" -> 1 hits: https://doi.org/10.22540/jfsf-08-118

## [2026-09-01] SELECTION RECORD — muscle/CRF-in-old-age cell hunt (maintainer steer, "bigger batch")

**Context:** maintainer steered to "grip strength, muscle mass, CRF in old age" and asked for a batch of
DOIs to fetch. Cluster PROGNOSTIC side well-held (Grip Strength, Low Muscle Mass, CRF, Muscle-
Strengthening all exist); gaps are the CAUSAL/interventional arm + community-dwelling function outcomes.

**(1) Queries:** OpenAlex `search` (channel) across \~12 phrasings, `--type meta-analysis/systematic-
review/umbrella-review`, from-year 2010-2018. Note: title.search requires ALL words present -> long
phrases zero out (recall artifact, not literature absence); short 2-3 word cores recovered hits.

**(2) Results / (3) Adjudication — WALLED (-> maintainer fetch batch):**
- **10.1016/j.apmr.2022.04.002** — RT -> mobility disability, community-dwelling older adults (Arch Phys
  Med Rehabil 2022, gold-ish). SHARPEST fill: interventional-function arm, answers Low-Muscle-Mass page's
  "treatment target or marker?" PAYWALLED. PRIORITY 1.
- **10.1177/2047487319850718** — RT -> mortality SR-MA (Eur J Prev Cardiol 2019, 218 cites, GOLD). Causal-
  mortality arm; upgrades the confidence:low single-source Muscle-Strengthening page. PAYWALLED. PRIORITY 1.
- **10.1016/j.amepre.2022.03.020** — RT -> mortality risk SR-MA (Am J Prev Med 2022, 96 cites, GOLD).
  Independent 2nd source for the mortality arm. PAYWALLED. PRIORITY 2.
- **10.1519/jpt.0000000000000374** — RT -> pain + physical function, older adults (2023). Adds pain/QoL
  outcome. PAYWALLED. PRIORITY 3.

**OA (self-fetchable, NOT for maintainer batch):**
- 10.3389/fnut.2025.1652386 — community-dwelling sarcopenia -> functional decline + mortality (Frontiers
  2025, moderate, cites=4). Can self-fetch; moderate tier -> would label as such.
- Choi 2021 (10.1186/s12877-021-02491-5) already fetched to inbox; Song 2023 (10.3389/fnut.2023.1109789)
  maintainer-dropped to inbox — both RT+nutrition-adjunct (frontier, surrogate outcomes).

**(4) Acquisition-requested:** 4 WALLED DOIs handed to maintainer for drop; OA candidates self-fetchable.
No downgrade of the walled targets per pause-and-ask.
- [2026-09-01] openalex fetch "10.3389/fnut.2025.1652386" -> 0 hits: (none)
- [2026-09-01] openalex search "metabolically healthy obesity cardiovascular meta-analysis" -> 5 hits: https://doi.org/10.1111/obr.13127; https://doi.org/10.3390/jcm8081228; https://doi.org/10.1016/j.numecd.2022.06.010; https://doi.org/10.3390/ijerph17041320; https://doi.org/10.1136/bmjopen-2019-032742
- [2026-09-01] openalex search "dietary energy density body weight meta-analysis" -> 0 hits: (none)
- [2026-09-01] openalex search "LDL cholesterol stroke subtypes mendelian randomization" -> 0 hits: (none)
- [2026-09-01] openalex search "energy density weight meta-analysis" -> 1 hits: https://doi.org/10.1101/2021.11.04.21265933
- [2026-09-01] openalex search "energy density ad libitum energy intake" -> 10 hits: https://doi.org/10.1093/ajcn/62.2.316; https://doi.org/10.1093/ajcn/62.2.330; https://doi.org/10.1038/sj.ijo.0800715; https://doi.org/10.1038/s43016-022-00688-4; https://doi.org/10.1093/ajcn/60.4.465
- [2026-09-01] openalex search "low energy density diet systematic review" -> 0 hits: (none)
- [2026-09-01] openalex search "LDL cholesterol intracerebral hemorrhage" -> 6 hits: https://doi.org/10.1161/strokeaha.108.536698; ?; https://doi.org/10.1177/17474930241239523; https://doi.org/10.1016/j.jstrokecerebrovasdis.2025.108224; https://doi.org/10.53555/ajbr.v27i4s.4777
- [2026-09-01] openalex search "cholesterol hemorrhagic stroke meta-analysis" -> 2 hits: https://doi.org/10.1007/s11883-019-0815-5; https://doi.org/10.31083/rcm36363
- [2026-09-01] openalex search "mendelian randomization lipids stroke" -> 8 hits: https://doi.org/10.1016/j.atherosclerosis.2023.117382; https://doi.org/10.3389/fneur.2023.1185986; https://doi.org/10.1016/j.wneu.2024.123649; https://doi.org/10.3389/fneur.2024.1432878; https://doi.org/10.1007/s12035-025-04697-9
- [2026-09-01] openalex resolve "10.1111/obr.13127 10.1016/j.numecd.2022.06.010 10.3390/jcm8081228" -> 3 hits: https://doi.org/10.1111/obr.13127; https://doi.org/10.1016/j.numecd.2022.06.010; https://doi.org/10.3390/jcm8081228
- [2026-09-01] openalex resolve "10.1007/s11883-019-0815-5 10.1016/j.jstrokecerebrovasdis.2025.108224 10.3389/fneur.2023.1185986" -> 3 hits: https://doi.org/10.1007/s11883-019-0815-5; https://doi.org/10.1016/j.jstrokecerebrovasdis.2025.108224; https://doi.org/10.3389/fneur.2023.1185986
- [2026-09-01] openalex search "dietary energy density obesity systematic review" -> 3 hits: https://doi.org/10.1016/j.nut.2016.03.017; https://doi.org/10.1111/ijcp.14291; https://doi.org/10.3390/nu10111612
- [2026-09-01] openalex search "energy density adiposity meta-analysis" -> 1 hits: https://doi.org/10.1186/1471-2458-11-48
- [2026-09-01] openalex search "energy density weight loss trial" -> 7 hits: https://doi.org/10.1093/ajcn/85.6.1465; https://doi.org/10.1093/ajcn/85.5.1212; https://doi.org/10.1016/j.jand.2012.02.020; https://doi.org/10.1002/oby.20582; https://doi.org/10.1186/1479-5868-6-57
- [2026-09-01] openalex fetch "10.1016/j.jstrokecerebrovasdis.2025.108224" -> 0 hits: (none)
- [2026-09-01] openalex fetch "10.3389/fneur.2023.1185986" -> 0 hits: (none)

## [2026-09-01] SELECTION RECORD — GAP-REVIEW acquisitions (3 threads: MHO-durability, energy-density, LDL->hemorrhagic-stroke)

Fills the three `#gap-*` ACQUIRE-threads opened 2026-09-01 in `ingest-queue.md` (disagreeing-gold +
CVD-subtype survey residual). Curates the openalex auto-logged queries above (fields 1+2). All first
authors verified via OpenAlex API before slugging — my initial `Sun` guess for the fetched MR was WRONG
(real first author `Qin, Hao`), corrected before rename; consistent with the standing "verify authorship,
don't guess" lesson.

**Thread `#gap-mho-durability` — post-2018 MHO -> incident CVD / durability.**

- SELECTED (anchor, WALLED -> maintainer-drop): **Opio 2020** `10.1111/obr.13127` — Obesity Reviews SR,
  cites=136, oa=False. *Metabolically healthy overweight/obesity are associated with increased risk of
  CVD.* The post-2018 incident-CVD landmark that supersedes the dated Kramer 2013 incumbent. Ratchet-
  advancer (newer + higher-powered gold on the same stratum call).
- SELECTED (durability axis, WALLED -> maintainer-drop): **Abiri 2022** `10.1016/j.numecd.2022.06.010` —
  MA, cites=45, oa=False. *Transition from metabolically healthy to unhealthy overweight/obesity and risk
  of CVD.* This is the durability question stated directly — the MHO->MU transition IS the "is the free
  pass durable?" axis the gap named. Distinct sub-question from Opio (transition dynamics vs baseline
  incident risk), so not an echo.
- DEFERRED (OA fallback ONLY): **Yang 2019** `10.3390/jcm8081228` — MA, cites=80, oa=True. Fetchable, but
  OLDER than Opio and answers the same incident-CVD question -> an echo, not an advancer. Acquire only if
  the two walled picks cannot be dropped; NOT fetched now (per acquire-advancers-not-echoes).
- REJECTED: `10.3390/ijerph17041320` (2020, cites=36), `10.1136/bmjopen-2019-032742` (2019, cites=16) —
  smaller/older golds echoing the same question; superseded by Opio.

**Thread `#gap-energy-density` — low-energy-density lever -> body weight.**

- SELECTED (anchor, WALLED -> maintainer-drop): **Rouhani 2016** `10.1016/j.nut.2016.03.017` — SR+MA,
  cites=156, oa=False. *Associations between dietary energy density and obesity: a systematic review and
  meta-analysis.* The landmark POOLED evidence isolating ED specifically (breaks the UPF-bundle confound
  that makes [[Energy Density]] a fragile single-gold node on Hall 2019). **OBSERVATIONAL** — records
  ED<->adiposity association, not a randomized ED-lever effect.
- CONFIRMED GAP (`G — needs aggregation`, NOT fillable now): **no pooled RANDOMIZED low-ED-intervention ->
  weight meta-analysis exists.** Six title phrasings (`... body weight`, `... adiposity`, `... obesity`,
  `low energy density diet`, `... weight loss trial`, `... ad libitum energy intake`) surfaced only (a)
  the 2016 observational SR and (b) scattered individual Rolls-lineage RCTs — Ello-Martin 2007
  `10.1093/ajcn/85.6.1465` (year-long RCT, cites=360), Ledikwe 2007 `10.1093/ajcn/85.5.1212` — never a
  pooled intervention MA. Expectancy test: a pooled intervention MA over this many known trials would
  plausibly have surfaced, so this is a genuine literature gap, not a search miss. The ED->weight CAUSAL
  claim stays under-anchored by design; do NOT dress the observational SR as intervention evidence.
- DEFERRED (intervention-grade fallback): **Ello-Martin 2007** `10.1093/ajcn/85.6.1465` — the single best
  randomized ED-lever trial (year-long, cites=360) if the maintainer wants RCT-level over the SR; ajcn/OUP
  likely walled. Prefer-SR/MA keeps Rouhani the pick; noted for completeness.
- REJECTED: `10.3390/nu10111612` (2018, adolescents — off adult-stratum), `10.1186/1471-2458-11-48` (2011,
  older, superseded by Rouhani 2016), `10.1101/2021.11.04.21265933` (calorie-reformulation preprint, off-
  question: tests reformulation not the ED lever).

**Thread `#gap-ldl-hemorrhagic-stroke` — LDL/apoB vs hemorrhagic (ICH) stroke subtype.**

- SELECTED (anchor, WALLED -> maintainer-drop): **Ma 2019** `10.1007/s11883-019-0815-5` — Current
  Atherosclerosis Reports SR+MA, cites=70, oa=False. *LDL Cholesterol and Risk of Hemorrhagic Stroke.* The
  association landmark — the subtype-resolved evidence the monolithic lipid nucleus lacks. NOTE: first
  author `Ma, Chaoran` — possible coreference with the held `Ma` (the 54-RCT/RR 0.93 figure in the lipid
  fabric); different topic, VERIFY same-person at ingest before merging `authors:`.
- SELECTED + FETCHED to inbox (OA): **Qin 2023** `10.3389/fneur.2023.1185986` -> `inbox/Qin - Lipids
  Lipid-Lowering Drugs Stroke Mendelian Randomization 2023.pdf` (10 pp, verified real PDF). Frontiers in
  Neurology -> **tier MODERATE** (needs `source-tier-overrides.tsv` entry at ingest). Its job is the
  CAUSAL / artifact-check line: is the low-LDL->ICH signal causal or reverse-causation/frailty-confounded
  (the U-shaped-artifact discipline applied to the ICH arm)? A genuinely independent method vs Ma's
  observational pooling -> candidate type-E on direction, if it survives the moderate-venue quality eye.
- SELECTED (very-low-LDL/PCSK9i stratum, BLOCKED -> maintainer-drop): **Li 2025**
  `10.1016/j.jstrokecerebrovasdis.2025.108224` — MA, cites=8, oa-flagged TRUE but the strokejournal.org
  (Elsevier) PDF **anti-bot-blocked (HTTPError 403)** on plain fetch — matches the measured ScienceDirect
  reality. *LDL-lowering agents (statins and PCSK9 inhibitors) and risk of ICH.* Covers the exact very-low-
  LDL-push decision (East-Asian / PCSK9i / LDL<1.0 mmol/L stratum). NOT downgraded to a fetchable weaker
  source (pause-and-ask); DOI recorded for maintainer-drop.
- DEFERRED: the 2024-25 small MR preprints (`researchsquare/rs-4159975`, `ssrn.4740335`) + Frontiers MR
  echoes (`10.3389/fneur.2024.1432878`) — unreviewed / thin / redundant with Qin.

**(4) Acquisition-requested — summary.**

- FETCHED to `inbox/` (1): Qin 2023 MR `10.3389/fneur.2023.1185986` (moderate; tier-override owed at ingest).
- MAINTAINER-DROP (walled/blocked, 5 DOIs — NO downgrade per pause-and-ask):
  - `10.1111/obr.13127` — Opio 2020 (MHO->CVD SR, GAP-1 anchor)
  - `10.1016/j.numecd.2022.06.010` — Abiri 2022 (MHO transition MA, GAP-1 durability)
  - `10.1016/j.nut.2016.03.017` — Rouhani 2016 (ED->obesity SR+MA, GAP-2 anchor)
  - `10.1007/s11883-019-0815-5` — Ma 2019 (LDL->hemorrhagic stroke MA, GAP-3 anchor)
  - `10.1016/j.jstrokecerebrovasdis.2025.108224` — Li 2025 (LDL-lowering agents->ICH MA, GAP-3 very-low-LDL)
- Nothing ingested. Next: maintainer drops the 5 walled PDFs -> `process inbox` (dedup, chunk/OCR, register
  rows incl. Qin already in inbox, tier-stamp, stage) -> Ingest as separate ops.
- [2026-09-01] openalex resolve "10.1016/j.jad.2022.07.008" -> 1 hits: https://doi.org/10.1016/j.jad.2022.07.008
- [2026-09-02] openalex resolve "10.1080/10408398.2021.1949575 10.1186/s12916-021-01922-9 10.3945/ajcn.111.016261 10.1093/ajcn/nqz035 10.1038/ejcn.2014.228 10.1001/jamainternmed.2019.6969 10.1136/bmj.j1957 10.1161/JAHA.119.015553" -> 8 hits: https://doi.org/10.1080/10408398.2021.1949575; https://doi.org/10.1186/s12916-021-01922-9; https://doi.org/10.3945/ajcn.111.016261; https://doi.org/10.1093/ajcn/nqz035; https://doi.org/10.1038/ejcn.2014.228
- [2026-09-02] openalex fetch "10.1080/10408398.2021.1949575" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.1186/s12916-021-01922-9" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.1136/bmj.j1957" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.1093/ajcn/nqz035" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.1001/jamainternmed.2019.6969" -> 0 hits: (none)

## [2026-09-02] SELECTION RECORD — Red meat (Carvalho "We're all confused about Red Meat" video refs)

**Channel:** YouTube description-mining (video `mQ56uOkjccg`, Nutrition Made Simple / Gil Carvalho) ->
14 refs resolved to citations via Crossref + NCBI + `openalex resolve`. Hand-logged (video channel has no
auto-log). Gap frame from a read-only fabric survey (Explore agent): the held red-meat fabric is
`frameworks/Red and Processed Meat and Cancer`, `tensions/Should Adults Reduce Red and Processed Meat`,
`synthesis/Food Groups and Health Outcomes`, `deliverables/Meat` — CVD/mortality is **all observational
cohort** (Schwingshackl/Bechthold, flagged one-team/one-pool, NOT independent), and the **lean-red-meat
lipid/apoB feeding-trial cell is EMPTY** (only a generic `[INFERRED]` "depends on the swap" + an explicit
open food-matrix research gap).

**(3) Adjudication.**

- SELECTED — lean-red-meat feeding trials (the maintainer's target; fill the empty cell directly):
  - **Roussell 2012 — BOLD** `10.3945/ajcn.111.016261` (AJCN, RCT/high, cites=142, **oa=False**). Lean beef
    in a DASH-like low-SFA diet -> lipids/lipoproteins/apolipoproteins. THE lean-beef feeding trial the
    fabric lacks; isolates meat-matrix from SFA load. Walled -> maintainer-drop.
  - **Bergeron 2019** `10.1093/ajcn/nqz035` (AJCN, RCT/high, cites=160, oa=True but OUP anti-bot-blocked).
    Red vs white vs nonmeat protein at low vs high SFA -> atherogenic lipoproteins incl. **apoB / LDL
    particles**. Directly tests SFA-content-vs-meat-color and supplies the apoB number the fabric has zero
    of. Pairs with Roussell for a type-A/F lean-meat+background-SFA synthesis. Blocked -> maintainer-drop.
- SELECTED — independent-cohort / channel-attribution ratchet-advancers:
  - **Etemadi 2017** `10.1136/bmj.j1957` (BMJ, cohort/high, NIH-AARP \~500k, cites=296, oa=True but BMJ
    Cloudflare-403 on plain+browser fetch). Decomposes meat->mortality by **heme iron, nitrate, nitrite** —
    addresses the fabric's open "which in-matrix channel" attribution gap on a mortality (not cancer)
    endpoint; independent large cohort. Blocked -> maintainer-drop (Steel not burned w/o go-ahead).
  - **Papier 2021 (BMC Med)** `10.1186/s12916-021-01922-9` (UK Biobank \~475k, outcome-wide 25 conditions,
    cohort/high, cites=167, oa=True) -> **FETCHED to inbox** (14 pp, verified real PDF). Independent cohort
    + independent team (Key/Oxford) vs the held Schwingshackl pool; breadth across endpoints.
  - **Papier 2021 (Crit Rev Food Sci Nutr)** `10.1080/10408398.2021.1949575` (meat->IHD **SR+MA/gold**,
    cites=107, oa flagged but T&F PAYWALLED no OA pdf). The gold independent-team CVD MA (vs held
    Bechthold, same-team). Walled -> maintainer-drop.
  - **Zhong 2020 (JAMA Intern Med)** `10.1001/jamainternmed.2019.6969` (pooled 6 US cohorts, cohort/high,
    cites=376, oa=True but JAMA-blocked). Processed/unprocessed red/poultry/fish -> CVD + mortality with a
    clean **absolute-risk** frame (<2%/30y); independent pool + absolute anchor. Blocked -> maintainer-drop.
  - **Hosseinpour-Niazi 2014** `10.1038/ejcn.2014.228` (EJCN, crossover **RCT**/high, cites=106, oa=False).
    Legumes replacing red meat in TLC diet, T2D patients -> cardiometabolic risk factors. The only *trial*
    on the fabric's core substitution lever (vs the single-cohort Budhathoki swap estimate + staged
    Thorisdottir legume MA). Walled -> maintainer-drop.
- DEFERRED (conditional / different axis, not acquired now):
  - **Orlich 2022** `10.1093/ajcn/nqac043` (AHS-2, UPF+animal-food composite -> mortality) — feeds the UPF
    axis, exposure not red-meat-specific; revisit if the UPF deliverable needs it.
  - **Adams 2010** `pmid:19674491` (Br J Nutr, small RCT) — high-SFA/**trans** hamburger -> HDL/LDL
    particle; tests the *fatty* (opposite) exposure, small-n, trans dated. A weak contrast to BOLD only.
  - **Sun 2021** `10.1161/JAHA.119.015553` (JAHA, protein-sources->mortality) — largely an echo of held
    protein-source-mortality (Naghshi/Budhathoki/Bernstein framing).
- REJECTED:
  - **Bernstein 2010** `10.1161/circulationaha.109.915165` (Nurses' Health protein->CHD) — dated
    single-cohort, superseded by held MAs.
  - **Zanovec 2010** `10.1016/j.nutres.2010.06.001` + **APJCN 2006;15(1):21-29** — compositional
    (nutrient content / fatty-acid profile), no patient-important outcome; not a decision-change.
  - **Kris-Etherton 2001** `10.1161/01.cir.103.13.1823` (Lyon Diet Heart commentary) — off-question
    (Mediterranean secondary prevention, not red meat).

**(4) Acquisition-requested — summary.**

- FETCHED to `inbox/` (1): Papier 2021 UK Biobank `10.1186/s12916-021-01922-9`.
- MAINTAINER-DROP (walled/blocked, 6 DOIs — NO downgrade per pause-and-ask):
  - `10.3945/ajcn.111.016261` — Roussell 2012 BOLD (lean-beef feeding RCT — the priority target)
  - `10.1093/ajcn/nqz035` — Bergeron 2019 (red/white/nonmeat + SFA -> apoB RCT)
  - `10.1136/bmj.j1957` — Etemadi 2017 (heme/nitrate/nitrite -> mortality cohort; Steel-fetchable if wanted)
  - `10.1080/10408398.2021.1949575` — Papier 2021 (meat->IHD SR+MA, gold)
  - `10.1001/jamainternmed.2019.6969` — Zhong 2020 (pooled cohorts, absolute-risk)
  - `10.1038/ejcn.2014.228` — Hosseinpour-Niazi 2014 (legumes-for-red-meat crossover RCT)
- Nothing ingested. Next: maintainer drops the 6 walled PDFs -> `process inbox` (dedup, chunk/OCR, register
  rows, tier-stamp, stage) -> Ingest as separate ops.
- [2026-09-02] openalex search "red meat cardiovascular disease risk factors randomized meta-analysis" -> 2 hits: https://doi.org/10.3945/ajcn.116.142521; https://doi.org/10.1096/fasebj.30.1_supplement.904.1
- [2026-09-02] openalex search "red meat versus protein sources blood lipids trials meta-analysis" -> 0 hits: (none)
- [2026-09-02] openalex search "red meat white meat substitution mortality systematic review" -> 0 hits: (none)
- [2026-09-02] openalex search "heme iron coronary heart disease meta-analysis" -> 1 hits: https://doi.org/10.1007/s00394-013-0535-5
- [2026-09-02] openalex search "heme iron type 2 diabetes dose-response meta-analysis" -> 0 hits: (none)
- [2026-09-02] openalex search "red meat blood lipids lipoproteins meta-analysis" -> 0 hits: (none)
- [2026-09-02] openalex search "meat substitution cardiovascular" -> 5 hits: https://doi.org/10.1007/s00394-023-03238-1; https://doi.org/10.1007/s10654-025-01232-x; https://doi.org/10.1161/jaha.125.042289; https://doi.org/10.1016/j.cjca.2023.12.026; https://doi.org/10.3390/proceedings2023091397
- [2026-09-02] openalex search "heme iron mortality" -> 2 hits: https://doi.org/10.1136/bmj.j1957; https://doi.org/10.1016/j.heliyon.2024.e38758
- [2026-09-02] openalex search "heme iron diabetes meta-analysis" -> 3 hits: https://doi.org/10.1371/journal.pone.0041641; https://doi.org/10.6133/apjcn.022017.09; https://doi.org/10.3410/f.717954702.793470976
- [2026-09-02] openalex search "red meat comparison diets cardiovascular risk factors meta-analysis" -> 1 hits: https://doi.org/10.1161/circulationaha.118.035225
- [2026-09-02] openalex search "heme iron cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-09-02] openalex resolve "10.3945/ajcn.116.142521 10.1161/circulationaha.118.035225 10.1371/journal.pone.0041641 10.1007/s00394-013-0535-5" -> 4 hits: https://doi.org/10.3945/ajcn.116.142521; https://doi.org/10.1161/circulationaha.118.035225; https://doi.org/10.1371/journal.pone.0041641; https://doi.org/10.1007/s00394-013-0535-5
- [2026-09-02] openalex fetch "10.1371/journal.pone.0041641" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.3945/ajcn.116.142521" -> 0 hits: (none)

## [2026-09-02] SELECTION RECORD — differentiating lean/low-SFA/red-vs-white red meat, and isolating heme iron

Maintainer request (research op, NOT ingest): studies that differentiate lean red meat / low-SFA /
red-vs-white meat, and studies isolating heme iron. Held on these questions before the search:
Roussell (BOLD, lean-beef lipids), Bergeron (red=white lipids), Etemadi (heme -> mortality +
white-meat substitution), Bastide (heme -> CRC, staged). Named gaps: no pooled feeding-trial MA on
red-meat lipid surrogates; no red->substitute pooled SR held (Hidayat 2022 already an AWAITS-walled
target); no heme-iron dose-response MA on a non-CRC outcome.

### Cluster 1 — lean / low-SFA / red-vs-white

- **SELECTED -> FETCHED (inbox): none.** The two cluster-1 advancers are both walled (below).
- **SELECTED -> maintainer-drop (walled):**
  - `O'Connor - Red Meat Cardiovascular Risk Factors Trials 2017` (AJCN, 10.3945/ajcn.116.142521,
    gold/meta-analysis, oa=True but ScienceDirect/Elsevier anti-bot 403 on fetch). Ratchet-advancer:
    a **pooled MA of RCTs** on total red meat (>=0.5 serv/d) vs CVD risk factors (lipids, BP) — the
    aggregation the lean pair lacks (Roussell+Bergeron = n=2 trials, no pooled estimate). Aggregative
    refinement (type-F) of the held lean-red-meat lipid cell.
  - `Guasch-Ferre - Red Meat Comparison Diets Cardiovascular Risk Factors Trials 2019` (Circulation,
    10.1161/circulationaha.118.035225, gold/meta-analysis, oa=False, 307 cites). HIGHEST-value cluster-1
    hit: RCT MA of red meat vs **specified comparison diets** on CVD risk factors — isolates the
    red-vs-substitute (incl. red-vs-white/poultry, red-vs-plant) contrast in *trials*, refining the
    lean pair's substitution frame with pooled RCT evidence. Independent team (Harvard/Guasch-Ferre;
    note: shares Hu-lab lineage with several held cohort MAs -> check independence at ingest, likely
    type-F not E).
  - `Hidayat - Red Meat Substitution CHD Mortality Meta-Analysis 2022` (Nutr Rev/OUP,
    10.1093/nutrit/nuac017, gold/meta-analysis, oa=False) — RE-FLAGGED: already a registered AWAITS
    maintainer-drop target (2026-08-28). The substitution MA on a HARD endpoint (CHD + all-cause
    mortality), independent (Soochow/Qin). Directly answers red->other-protein (incl. poultry) swap.

### Cluster 2 — isolating heme iron

- **SELECTED -> FETCHED (inbox):**
  - `Bao - Body Iron Stores Heme Iron Type 2 Diabetes 2012` (PLoS ONE, 10.1371/journal.pone.0041641,
    gold/meta-analysis, oa=True, 228 cites; 17pp, chunkable). Ratchet-advancer: isolates **heme iron
    on T2D incidence** (dose-response) — a DIFFERENT outcome than every held heme source (Etemadi =
    mortality, Bastide = CRC). Also carries body-iron-stores (ferritin) as a parallel exposure.
- **SELECTED -> maintainer-drop (walled):**
  - `Yang - Heme Iron Coronary Heart Disease Meta-Analysis 2013` (Eur J Nutr,
    10.1007/s00394-013-0535-5, gold/meta-analysis, oa=False, 32 cites). Isolates **heme iron on CHD** —
    fills the coronary channel (held heme sources cover mortality + CRC only). CAVEAT: 2013, low cites;
    the 2018+ heme-CVD MA search returned 0, so this appears to be the most recent heme->CHD MA — but
    check supersession + power at ingest.

### REJECTED / DEFERRED

- `heme iron cardiovascular meta-analysis` (openalex, --type meta-analysis, from-year 2018) -> **0 hits**
  = literature-absence (no heme-CHD MA newer than Yang 2013), NOT a tool artifact (looser un-typed
  `heme iron mortality` returned Etemadi + a 2024 single study, so the corpus is reachable).
- APJCN 2019 `10.6133/apjcn.022017.09` (heme iron / body iron -> metabolic syndrome) — DEFERRED:
  narrower composite outcome, lower journal, superseded-in-spirit by Bao on the T2D leg.
- Single primary studies surfaced by the loose substitution search (mycoprotein 2023, plant-based
  2025, SFA-from-meats-with-dairy 2025) — REJECTED: not SR/MA, off the differentiation question.

### Acquisition summary

- Fetched to inbox/ (1): Bao 2012 (heme -> T2D). -> hand off to `process inbox`.
- Maintainer-drop requested (4, all walled): O'Connor 2017 (AJCN), Guasch-Ferre 2019 (Circulation),
  Yang 2013 (Eur J Nutr), Hidayat 2022 (Nutr Rev, re-flag). DOIs recorded above; none downgraded.
- Nothing ingested (research op).
- [2026-09-02] openalex search "butter plant-based oils mortality" -> 3 hits: https://doi.org/10.1001/jamainternmed.2025.0205; https://doi.org/10.25259/nmji_511_2025; https://doi.org/10.1161/cir.151.suppl_1.mp01
- [2026-09-02] openalex resolve "10.1016/S0140-6736(22)00847-9 10.1210/clinem/dgae290" -> 2 hits: https://doi.org/10.1016/s0140-6736(22)00847-9; https://doi.org/10.1210/clinem/dgae290
- [2026-09-02] openalex fetch "10.1371/journal.pmed.1002087" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.1001/jamainternmed.2025.0205" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.1016/S0140-6736(22)00847-9" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.1210/clinem/dgae290" -> 0 hits: (none)

## [2026-09-02] SELECTION RECORD — Gil Carvalho reading-list (30 Years of Nutrition Knowledge Simplified), 23 refs

Maintainer request (research op, NOT ingest): review the 23 references on Carvalho's substack post as
candidates. Coverage cross-checked against the registry + fabric by a read-only survey subagent
(identities verified vs Crossref/PubMed — several list-topic labels were misleading). Adjudicated on
the retention ratchet: acquire only ratchet-ADVANCERS (not held / newer-that-revises-a-held-landmark /
first-on-a-thin-cell), reject echoes of held golds and narrative/off-axis pieces.

### ALREADY HELD (INGESTED) — echoes, no action (10)

3 Morton 2018 (protein+RT), 4 Bauer 2013 PROT-AGE, 7 Reynolds 2019 (fibre), 8 Gardner 2018 DIETFITS
(registry note stale — digest+chunks exist), 9 Lean 2018 DiRECT, 13 Hooper 2020 Cochrane SFA, 14
Ference 2017 EAS LDL-causal, 16 Johnson 2012 linoleic/inflammation, 19 Estruch 2018 PREDIMED, 23 Liu
2022 TRE. All map onto held source pages; nothing to acquire.

### SELECTED — ratchet-advancers (4)

- **FETCHED (inbox):**
  - `Imamura - Dietary Fats Glucose Insulin Trials Meta-Analysis 2016` (PLOS Med,
    10.1371/journal.pmed.1002087, gold/meta-analysis of RCTs, oa=True; 18pp). Advancer: gold feeding-
    trial SR-MA on how SFA/PUFA/MUFA/carb swaps move **glucose-insulin homeostasis** — a metabolic-marker
    endpoint the held SFA sources (Hamley = coronary events, Hooper = CV events) do NOT cover. Fills the
    mechanistic/surrogate channel of "Saturated Fat Intake and Replacement" (type-F/A on a new endpoint).
- **maintainer-drop (walled):**
  - `Bryazka - Alcohol Population-Level Risks GBD 2022` (Lancet, 10.1016/S0140-6736(22)00847-9, gold,
    oa=True but Lancet 403). HIGHEST-value: the GBD-2020 update that **REVISED the held GBD-2018
    (Griswold) «no safe level»** to age/region-specific thresholds — supersedes-and-partly-contradicts a
    held landmark on the alcohol cell (type-D/F; the 2018-vs-2022 divergence is itself a finding).
  - `Zhang - Butter Plant Oils Mortality 2025` (JAMA Intern Med, 10.1001/jamainternmed.2025.0205, high/
    cohort, JAMA-walled; PMC gave only the supplement). Advancer: RECENT large cohort on the specific
    butter->plant-oil swap and mortality — freshest hard-endpoint evidence on the live seed-oil-fear
    discourse; nothing this recent held.
  - `Demay - Vitamin D Prevention Endocrine Society Guideline 2024` (JCEM, 10.1210/clinem/dgae290,
    high/guideline, paywalled). Advancer: the NEWEST vit-D guideline, which walked back routine
    supplementation/screening in healthy adults — a recommendation-tier direction-change over the held
    VITAL/USPSTF/LeBoff sources.

### DEFERRED (2)

- 10 Li Y 2015 JACC (SFA-replacement by source, cohort) — refinement on a cell already held by
  higher-tier RCT-MA (Hamley) + Cochrane (Hooper); observational granularity only. Reserve.
- 22 Rogers 2016 Int J Obes (low-energy sweeteners -> weight SR-MA; DOI corrected to 10.1038/ijo.2015.177)
  — potential type-D friction vs held WHO-2023 NSS guideline (Rogers more favorable), but older and the
  WHO guideline already weighs the trial evidence. Reserve as the tension counter-pole if NSS is revisited.

### REJECTED (6) + already-staged (1)

- 1 Mozaffarian 2016 Circulation — narrative diet/POLICY review; food-group priorities held (dose-
  response matrix). Not gold evidence, no new cell.
- 2 NASEM/IOM DRI 2005 (0.8 g/kg RDA) — foundational reference; the RDA is already represented via held
  secondary sources (Moore 2014, FAO 2013). Reference-anchor, not a decision-change.
- 5 Gardner 2019 Nutr Rev (protein amount/type + ENVIRONMENT) — health part echoes held protein pages;
  the novel axis is environmental (one-axis rule — the wiki holds no environmental axis). Off-scope.
- 6 Antonio 2024 JISSN (protein-supplementation misconceptions FAQ) — narrative FAQ, not gold; the
  kidney-safety cell is held by a better source (Devries 2018 MA).
- 15 Sacks 2017 Circulation (AHA fats advisory) — superseded by the held newer AHA-2021 dietary guidance.
- 20 Sacks 2001 NEJM DASH-Sodium — landmark trial already pooled into held sodium-BP MAs (Huang 2020) +
  DASH MA (Siervo 2015).
- 21 Bouvard 2015 IARC (red/processed meat) — already STAGED in the registry (ingest-pending), not a new
  find; flagged for the existing red-meat queue.

### Acquisition summary

- Fetched to inbox/ (1): Imamura 2016. -> hand off to `process inbox`.
- Maintainer-drop requested (3, walled): Bryazka 2022 (Lancet), Zhang 2025 (JAMA IM), Demay 2024 (JCEM).
  DOIs above; none downgraded.
- Nothing ingested (research op).
- [2026-09-02] openalex resolve "10.1038/s41598-025-16129-8" -> 1 hits: https://doi.org/10.1038/s41598-025-16129-8
- [2026-09-02] openalex resolve "10.1177/0269881115587958" -> 1 hits: https://doi.org/10.1177/0269881115587958
- [2026-09-02] openalex resolve "10.1111/jhn.12035" -> 1 hits: https://doi.org/10.1111/jhn.12035
- [2026-09-02] openalex resolve "10.1002/oby.20033" -> 1 hits: https://doi.org/10.1002/oby.20033
- [2026-09-02] openalex resolve "10.1111/liv.14596" -> 1 hits: https://doi.org/10.1111/liv.14596
- [2026-09-02] openalex resolve "10.1038/s41430-020-00778-1" -> 1 hits: https://doi.org/10.1038/s41430-020-00778-1
- [2026-09-02] openalex resolve "10.1111/j.1467-789X.2011.00931.x" -> 1 hits: https://doi.org/10.1111/j.1467-789x.2011.00931.x
- [2026-09-02] openalex resolve "10.1007/s40279-017-0807-y" -> 1 hits: https://doi.org/10.1007/s40279-017-0807-y
- [2026-09-02] openalex resolve "10.1016/j.jacc.2022.01.038" -> 1 hits: https://doi.org/10.1016/j.jacc.2022.01.038
- [2026-09-02] openalex resolve "10.1371/journal.pmed.1002087" -> 1 hits: https://doi.org/10.1371/journal.pmed.1002087
- [2026-09-02] openalex resolve "10.1073/pnas.1516953113" -> 1 hits: https://doi.org/10.1073/pnas.1516953113
- [2026-09-02] openalex resolve "10.7326/M15-2175" -> 1 hits: https://doi.org/10.7326/m15-2175
- [2026-09-02] openalex resolve "10.1080/10408398.2012.688897" -> 1 hits: https://doi.org/10.1080/10408398.2012.688897
- [2026-09-02] openalex resolve "10.1038/bjc.2014.294" -> 1 hits: https://doi.org/10.1038/bjc.2014.294
- [2026-09-02] openalex resolve "10.1002/14651858.CD007469.pub2" -> 1 hits: https://doi.org/10.1002/14651858.cd007469.pub2
- [2026-09-02] openalex resolve "10.3390/nu11051023" -> 1 hits: https://doi.org/10.3390/nu11051023
- [2026-09-02] openalex resolve "10.1007/s00198-020-05500-2" -> 1 hits: https://doi.org/10.1007/s00198-020-05500-2
- [2026-09-02] openalex resolve "10.1136/bmj-2023-075230" -> 1 hits: https://doi.org/10.1136/bmj-2023-075230
- [2026-09-02] openalex resolve "10.1161/CIRCULATIONAHA.121.057008" -> 1 hits: https://doi.org/10.1161/circulationaha.121.057008
- [2026-09-02] openalex resolve "10.1016/j.jacadv.2023.100643" -> 1 hits: https://doi.org/10.1016/j.jacadv.2023.100643
- [2026-09-02] openalex resolve "10.3390/nu16091345" -> 1 hits: https://doi.org/10.3390/nu16091345
- [2026-09-02] openalex resolve "10.1016/j.annepidem.2013.03.015" -> 1 hits: https://doi.org/10.1016/j.annepidem.2013.03.015
- [2026-09-02] openalex resolve "10.3389/fcvm.2022.930000" -> 1 hits: https://doi.org/10.3389/fcvm.2022.930000
- [2026-09-02] openalex resolve "10.1016/j.smrv.2007.07.006" -> 1 hits: https://doi.org/10.1016/j.smrv.2007.07.006
- [2026-09-02] openalex resolve "10.1016/j.smrv.2007.03.010" -> 1 hits: https://doi.org/10.1016/j.smrv.2007.03.010
- [2026-09-02] openalex resolve "10.2337/db13-1546" -> 1 hits: https://doi.org/10.2337/db13-1546
- [2026-09-02] openalex resolve "10.1007/s11906-023-01274-0" -> 1 hits: https://doi.org/10.1007/s11906-023-01274-0
- [2026-09-02] openalex resolve "10.1016/j.cub.2019.01.069" -> 1 hits: https://doi.org/10.1016/j.cub.2019.01.069
- [2026-09-02] openalex resolve "10.3390/biology8030054" -> 1 hits: https://doi.org/10.3390/biology8030054
- [2026-09-02] openalex resolve "10.2337/dc15-0302" -> 1 hits: https://doi.org/10.2337/dc15-0302
- [2026-09-02] openalex resolve "10.1073/pnas.1418490112" -> 1 hits: https://doi.org/10.1073/pnas.1418490112
- [2026-09-02] openalex resolve "10.1017/S0007114524000564" -> 1 hits: https://doi.org/10.1017/s0007114524000564
- [2026-09-02] openalex resolve "10.1017/S0007114520004456" -> 1 hits: https://doi.org/10.1017/s0007114520004456

## [2026-09-02] SELECTION RECORD — Gil Carvalho citation harvest (2 substack posts + 5 YouTube videos)

**Channel (hand-logged — no auto-log):** browser-render (`bin/fetch_browser.py --html`) of 5 YouTube
watch pages, extracting the description reference links from the `ytInitialData` `q=` redirect fields
(YouTube SPA blocks WebFetch — footer only; datacenter IP hits the bot-wall for yt-dlp metadata);
plus `WebFetch` of 2 substack posts for inline hyperlinks. Then `bin/openalex.py resolve <doi>` +
WebFetch per candidate (fields 1+2 auto-logged above). Sources:
fish-oil-and-your-brain (substack) · the-science-backed-way-to-lose-visceral (substack) ·
YT GpzX3NQzmio (fish oil/brain) · 2BAX8mJ27gA (sleep & heart) · U9a4KsG7QNw (7 levels of eating /
meal timing) · C8svz186aE4 (vitamin D) · 6FY2VPEnfko (vitamin B12).

**Results:** \~63 raw links harvested; \~50 academic (rest lay/govt: NIH ODS, NHS, cancer.org, HHS PDF,
NIH news, Harvard Health, stonecollab). 5 stayed UNRESOLVED behind AJCN/Adv Nutr/Atherosclerosis/
Elsevier paywalls (PIIs recorded below). Full harvest: `scratchpad/carvalho/raw-harvest.md`; full
resolved/tiered/deduped triage: `scratchpad/carvalho/candidate-triage.md`.

**Adjudication — SELECTED (ACQUIRE-CANDIDATE, gold/high · new · on-telos · non-redundant):**
- `Gencer 2021` omega-3 supplementation -> atrial-fibrillation risk, SR/MA of CV-outcome RCTs
  (Circulation, gold; 10.1161/CIRCULATIONAHA.121.055654) — no AF page held; the harm-channel
  counterweight to omega-3 CV benefit (VITAL/Lombardi/REDUCE-IT don't foreground AF). **Highest-value new.**
- `Wang 2022` sleep duration -> CVD, meta-review + MA (Front Cardiovasc Med, gold; 10.3389/fcvm.2022.930000)
  — held Cappuccio 2010 is mortality-only; this is the CVD-endpoint gap.
- `Wang 2018` shift work -> CVD morbidity/mortality, dose-response MA (Eur J Prev Cardiol, gold;
  10.1177/2047487318783892) — held shift-work (Travis/Straif) is breast-cancer only; genuinely new outcome.
- `EJCN 2020` dietary macronutrients -> liver fat, SR-MA (gold; 10.1038/s41430-020-00778-1) — isocaloric
  substitution granularity below the held Peng 2022 NAFLD umbrella; F-refinement candidate.
- `Pawlak 2013` B12-deficiency prevalence in vegetarians/vegans, SR (Nutr Rev; 10.1111/nure.12001) —
  on-telos modifiable-diet stratum; no B12 page held.
- `D-Health 2023` vitamin-D -> major CV events, landmark RCT (BMJ; 10.1136/bmj-2023-075230) — complements
  held VITAL; vit-D cell heavily held (Demay just ingested) so F-refinement, not opener.

**Adjudication — DEFERRED (secondary; distinct lever but likely subsumed / single-RCT / surrogate):**
Yaskolka Meir 2021 DIRECT-PLUS green-Med->liver fat RCT (10.1136/gutjnl-2020-323106); Cell Metab 2023
resistant-starch->liver fat RCT (10.1016/j.cmet.2023.08.002); Covassin 2022 sleep-restriction->VAT
crossover RCT (10.1016/j.jacc.2022.01.038); Madjd 2020 late-vs-early dinner->weight loss RCT
(10.1017/S0007114520004456). Each named-gap-worthy if the maintainer wants the specific lever.

**Adjudication — REJECTED:**
- SATURATING (omega-3 -> cognition cell near-full: held Wei 2023 gold SR of 48 cohorts + Andrieu MAPT RCT
  + Coley 2025): Kosti 2022 (10.1093/nutrit/nuab078); 2025 Sci Rep dose-response MA
  (10.1038/s41598-025-16129-8); 2015 J Psychopharmacol MA (10.1177/0269881115587958); Yurko-Mauro 2010
  MIDAS RCT. Acquire at most ONE if the supplement-RCT angle (vs Wei's observational) is wanted.
- DATED / SUPERSEDED (pre-VITAL vit-D->cancer): Bjelakovic Cochrane 2014 (CD007469.pub2); Br J Cancer 2014
  MA (10.1038/bjc.2014.294). Nutrients 2024 multivitamin MA (10.3390/nu16091345) — broad scope, overlaps
  held USPSTF 2022 supplements.
- OFF-TELOS: vit-D sun/sunscreen/bioavailability/formulation (Marks 1995, Alshishtawy 2011, mushroom
  bioavailability, gummy bioequivalence, Cardwell 2018, Crit Rev 2013); magnesium-in-CKD MAGiCAL
  (prescriber zone); vit-D-in-IBD-treatment (Li 2018); K2+D combined-exposure RCTs (can't isolate D);
  circadian-misalignment human-lab mechanism/surrogate studies (Scheer 2009, Morris 2016, Leproult 2014,
  Depner 2019, Chang 2014); social-jetlag/chronotype concept papers; Boschmann 2003 water-thermogenesis;
  Samouda 2013 VAT calculator; Sender 2016 cell-count; Qaseem 2016 insomnia-treatment guideline (Rx zone);
  fish-oil PK/oxidation/algae-equivalence (Arterburn 2008, Lawson 1988, Albert 2015).
- ALREADY HELD/STAGED (no action): Manson 2019 VITAL (manson2019vitd), USPSTF 2018 (uspstf2018vitd),
  Imamura 2016 (ingested this batch), Maillard 2018 HIIT-VAT (staged), Hall 2019 (hall2019), Wastyk 2021
  (wastyk2021).

**UNRESOLVED (paywalled — DOI-lookup deferred):** AJCN PIIs S0002916523017203, S0002916522046299,
S0002916522032051; Adv Nutr S2161831322002423; Atherosclerosis S0021915023052280 (likely a vit-D->CV MA).

**Acquisition-requested:** NONE YET — awaiting maintainer go-ahead on the SELECTED set before any
`inbox/` fetch (research op stops at vetted candidates; no downgrade-on-block).
- [2026-09-02] openalex fetch "10.1161/CIRCULATIONAHA.121.055654" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.3389/fcvm.2022.930000" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.1177/2047487318783892" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.1038/s41430-020-00778-1" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.1111/nure.12001" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.1136/bmj-2023-075230" -> 0 hits: (none)

### [2026-09-02] Acquisition status — Carvalho SELECTED set (fetch attempted)

Maintainer go-ahead: fetch all 6 SELECTED. `bin/openalex.py fetch` per DOI (OA-PDF -> inbox/); no
downgrade on block (pause-and-ask rule).

- **FETCHED -> inbox/** (1): Wang 2022 sleep->CVD (10.3389/fcvm.2022.930000) — real 6-page PDF (Front
  Cardiovasc Med is OA). Ready for `process inbox`.
- **BLOCKED -> maintainer-drop** (5; no OA PDF, NOT downgraded):
  - Gencer 2021 omega-3->AF (10.1161/CIRCULATIONAHA.121.055654) — AHA paywall (HTTP 403 on pdf).
  - Wang 2018 shift-work->CVD (10.1177/2047487318783892) — SAGE, no OA pdf.
  - EJCN 2020 macronutrient->liver fat (10.1038/s41430-020-00778-1) — Nature/EJCN paywall (resolver
    returned the HTML landing page, not a PDF; deleted).
  - Pawlak 2013 B12-deficiency prevalence (10.1111/nure.12001) — OUP/Nutr Rev paywall.
  - D-Health 2023 vit-D->CV events (10.1136/bmj-2023-075230) — BMJ pdf 403 (research article may be OA
    via a different URL; worth a manual retry).
- [2026-09-02] openalex resolve "10.3389/fcvm.2022.930000" -> 1 hits: https://doi.org/10.3389/fcvm.2022.930000
- [2026-09-02] openalex resolve "10.1038/s41430-020-00778-1" -> 1 hits: https://doi.org/10.1038/s41430-020-00778-1
- [2026-09-02] openalex resolve "10.1136/bmj-2023-075230" -> 1 hits: https://doi.org/10.1136/bmj-2023-075230
- [2026-09-02] openalex resolve "10.1161/CIRCULATIONAHA.121.055654" -> 1 hits: https://doi.org/10.1161/circulationaha.121.055654
- [2026-09-02] openalex resolve "10.1111/nure.12001" -> 1 hits: https://doi.org/10.1111/nure.12001
- [2026-09-02] openalex resolve "10.3389/fcvm.2022.930000" -> 1 hits: https://doi.org/10.3389/fcvm.2022.930000
- [2026-09-02] openalex resolve "10.1038/s41430-020-00778-1" -> 1 hits: https://doi.org/10.1038/s41430-020-00778-1
- [2026-09-02] openalex resolve "10.1136/bmj-2023-075230" -> 1 hits: https://doi.org/10.1136/bmj-2023-075230
- [2026-09-02] openalex resolve "10.1111/nure.12001" -> 1 hits: https://doi.org/10.1111/nure.12001
- [2026-09-02] openalex search "iron status coronary heart disease Mendelian randomization" -> 1 hits: https://doi.org/10.3389/fcvm.2023.1152201
- [2026-09-02] openalex search "genetically determined iron status coronary artery disease" -> 0 hits: (none)
- [2026-09-02] openalex search "iron status type 2 diabetes Mendelian randomization" -> 2 hits: https://doi.org/10.1210/clinem/dgab454; https://doi.org/10.3410/f.740336629.793589410
- [2026-09-02] openalex search "iron status coronary artery disease meta-analysis" -> 0 hits: (none)
- [2026-09-02] openalex search "genetically determined iron coronary artery disease risk" -> 0 hits: (none)
- [2026-09-02] openalex search "iron status stroke Mendelian randomization" -> 2 hits: https://doi.org/10.1161/jaha.123.031732; https://doi.org/10.1161/str.55.suppl_1.133
- [2026-09-02] openalex resolve "10.1161/jaha.123.031732 10.1210/clinem/dgab454 10.3389/fcvm.2023.1152201" -> 3 hits: https://doi.org/10.1161/jaha.123.031732; https://doi.org/10.1210/clinem/dgab454; https://doi.org/10.3389/fcvm.2023.1152201
- [2026-09-02] openalex resolve "10.1161/jaha.123.031732" -> 1 hits: https://doi.org/10.1161/jaha.123.031732
- [2026-09-02] openalex resolve "10.1210/clinem/dgab454" -> 1 hits: https://doi.org/10.1210/clinem/dgab454
- [2026-09-02] openalex resolve "10.1161/jaha.123.031732" -> 1 hits: https://doi.org/10.1161/jaha.123.031732
- [2026-09-02] openalex fetch "10.1161/jaha.123.031732" -> 0 hits: (none)
- [2026-09-02] openalex fetch "10.1210/clinem/dgab454" -> 0 hits: (none)
- [2026-09-02] openalex search "urinary flavonoid biomarker mortality cardiovascular" -> 0 hits: (none)
- [2026-09-02] openalex search "flavonoid Mendelian randomization cardiovascular disease" -> 0 hits: (none)
- [2026-09-02] openalex search "flavonoid biomarker cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-09-02] openalex search "flavanol biomarker cardiovascular disease risk" -> 0 hits: (none)

## [2026-09-02] SELECTION RECORD — closing the food-vs-component thread (Gate-34 corrective #1: heme-iron natural experiment + flavonoid biomarker/MR)

**Scope.** Gate-34's top corrective, doubly-owed: the food-vs-component thread needs a *component-isolating
design* on two prongs — (heme) an MR/feeding natural experiment isolating heme from red meat, named by
[[Heme Iron and Cardiometabolic Risk]] as its BINDING open gap; (flavonoid) a biomarker/MR beyond COSMOS,
which already supplied the randomized isolated-flavanol RCT (Sesso 2022) and substantially resolved the
*decision* (randomized isolation shrank the FFQ-flavonoid association toward the primary-hard-outcome null).

**HEME PRONG — SELECTED (2 identified, both maintainer-drop-pending; walls, NOT downgraded).**

- **SELECTED (primary/decider):** `Liu - Iron Status Heart Disease Stroke Diabetes Mendelian Randomization 2024`
  (10.1161/JAHA.123.031732, JAHA, cites=22, OA=True, `high`). A SINGLE MR pinning genetically-determined
  iron status to heart disease + stroke + T2D at once — covers 3 of the 4 heme legs via the natural
  experiment the heme nucleus named. Ratchet-advancer: the causal/MR channel is a NO-evidence cell (every
  held leg is observational FFQ). **AHA-walled — openalex fetch HTTPError -> maintainer-drop-pending.**
- **SELECTED (secondary/T2D-corroboration):** `Wang - Iron Status Type 2 Diabetes Mendelian Randomization 2021`
  (10.1210/clinem/dgab454, JCEM, cites=130, OA=True, `high`). A second, more-cited, independent-instrument
  MR on the T2D leg — candidate type-E (or F) on iron->T2D causality beside Liu. **OUP-walled — HTTPError
  -> maintainer-drop-pending.**
- **SAME-QUANTITY CAVEAT (recorded on the heme page + both registry rows):** both instrument *systemic*
  iron status (serum iron / ferritin / TSAT), NOT dietary heme. They causally test the downstream
  iron-burden mechanism; they do NOT isolate *dietary heme as the red-meat channel*. So they NARROW the
  gap, not fully close it — the thread advances (as COSMOS advanced the flavonoid prong), it does not
  terminate. Parameter-table adjudication owed at ingest (heme-intake vs body-iron-status = different
  quantities).
- **DEFERRED (lower-tier fallback, NOT fetched):** `10.3389/fcvm.2023.1152201` (Front Cardiovasc Med, serum
  iron MR, cites=8, `moderate` — Frontiers/single-MR). OA and likely fetchable, but fetching it as a
  substitute for the two walled better sources would be a downgrade-to-get-something — declined per the
  acquisition-pause-and-ask rule. Fallback only if the maintainer cannot drop Liu/Wang.
- **MA-preference note:** an MR is a single study, but no MR *meta-analysis* of iron->cardiometabolic
  surfaced, and the causal question has NO systematic evidence held — so a `high` single MR is the
  ratchet-justified best-available on the natural-experiment question (the design the fabric explicitly
  named as the decider), not an end-run around the MA-preference rule.

**FLAVONOID PRONG — NAMED GAP, do NOT chase (symmetric with the e-cig-hard-event discipline).**
Four searches (urinary flavonoid biomarker->mortality; flavonoid MR->CVD; flavonoid biomarker MA; flavanol
biomarker->CVD) all returned 0. The 0s are partly title-strictness, but combined with the domain reality
(flavonoids lack a clean genetic instrument; urinary-flavonoid-metabolite cohorts on hard outcomes are
sparse) and the fact that COSMOS already delivered the randomized isolation that resolved most of the
*decision*, the disciplined verdict is: the residual within-extract / biomarker isolation stays a NAMED
G-gap on [[Is the Food Category Doing Any Work]], not an acquisition target. Symmetric standards: had a gold
flavonoid biomarker/MR surfaced it would have been SELECTED; none did.

**Acquisition-requested:** Liu 2024 (10.1161/JAHA.123.031732) + Wang 2021 (10.1210/clinem/dgab454) ->
BOTH walled (AHA + OUP), both identified with clean DOIs, registered as IDENTIFIED/maintainer-drop-pending
rows + `[AWAITS]` hooks on the heme page. **PAUSED for maintainer PDF-drop into inbox/.** Nothing fetched;
nothing ingested.
- [2026-09-03] openalex search "blood pressure lowering dementia meta-analysis" -> 7 hits: https://doi.org/10.1093/eurheartj/ehac584; https://doi.org/10.1093/eurheartj/ehag701; https://doi.org/10.1161/cir.153.suppl_1.we464; https://doi.org/10.1093/eurheartj/ehae666.2544; https://doi.org/10.1002/alz.060056
- [2026-09-03] openalex search "physical activity dementia risk meta-analysis" -> 2 hits: https://doi.org/10.1016/s2468-2667(26)00142-8; https://doi.org/10.2139/ssrn.6348575
- [2026-09-03] openalex search "sleep dementia cognitive decline meta-analysis" -> 5 hits: https://doi.org/10.1136/jnnp-2019-321896; https://doi.org/10.1007/s11357-025-01637-2; https://doi.org/10.1007/s00415-025-13372-x; https://doi.org/10.3390/jcm14207437; https://doi.org/10.1007/s00415-026-13961-4
- [2026-09-03] openalex search "diabetes dementia risk meta-analysis" -> 6 hits: https://doi.org/10.1016/j.arr.2019.100944; https://doi.org/10.1186/s13098-024-01346-4; https://doi.org/10.1111/dom.15331; https://doi.org/10.1002/dmrr.3610; https://doi.org/10.3233/jad-191068
- [2026-09-03] openalex resolve "10.1093/eurheartj/ehac584 10.1111/dom.15331 10.1007/s00415-025-13372-x 10.1136/jnnp-2019-321896" -> 4 hits: https://doi.org/10.1093/eurheartj/ehac584; https://doi.org/10.1111/dom.15331; https://doi.org/10.1007/s00415-025-13372-x; https://doi.org/10.1136/jnnp-2019-321896
- [2026-09-03] openalex fetch "10.1007/s00415-025-13372-x" -> 0 hits: (none)
- [2026-09-03] openalex fetch "10.1111/dom.15331" -> 0 hits: (none)
- [2026-09-03] openalex fetch "10.1093/eurheartj/ehac584" -> 0 hits: (none)

## [2026-09-03] SELECTION RECORD — dementia-prevention restock (big-lever interventional arms)

**Scope + why.** Restock the drained breadth queue in dementia/cognition. The cluster is already
well-populated on the OBSERVATIONAL/PAF side — held Livingston 2024 (Lancet Commission, 14 factors \~45%
PAF), Yu/Yeo (hearing), Wilker (air pollution), Wei (omega-3), Dibello (periodontal), Kivimaki
(occupation); staged Nucci + Garcia-Casares (MedDiet), the multidomain RCT set (FINGER/preDIVA/MAPT/Coley),
Zhang umbrella, Blomstrand (mind-body exercise). So the ratchet is HIGH: a concurring MedDiet/omega-3 MA
would be an echo. The negative space is the **interventional / effect-size arm of the big single levers
Livingston holds only as a qualitative PAF** — BP-lowering, glycaemic control, sleep. Searched those.

**SELECTED (3) — each a ratchet-advancer, not an echo:**

1. **BP-lowering -> dementia, individual-patient-data MA** (Eur Heart J 2022; `10.1093/eurheartj/ehac584`;
   cites=141; OA). The strongest MA form (IPD) on the single largest *pharmacologically-modifiable* lever;
   supplies the randomized effect size Livingston carries only as a PAF, and feeds the Layer-1
   drug-vs-lifestyle rock-sizing (antihypertensives are a mature low-harm class). Route-(a)/interventional
   anchor for [[Dementia Prevention and Modifiable Risk Factors]]. **-> maintainer-drop (OUP walled).**

2. **Diabetes + antidiabetic medications -> dementia, systematic UMBRELLA review** (Diabetes Obes Metab
   2023; `10.1111/dom.15331`; cites=69; OA). Umbrella tier (top of the hierarchy); covers BOTH the T2D
   exposure lever AND the drug-modification angle (metformin/GLP-1/etc. -> dementia risk) — the
   pharmacotherapy-taper / drugs-as-alternative lens on a single source. Advances past Livingston's
   diabetes PAF. **-> maintainer-drop (Wiley walled).**

3. **Sleep disorders -> cognitive decline/dementia, updated SR+MA** (J Neurol 2025;
   `10.1007/s00415-025-13372-x`; cites=26; OA). Current update SUPERSEDING the 2019 JNNP landmark
   (`10.1136/jnnp-2019-321896`, cites=341 — kept as provenance, not acquired). Sleep is a big lever with a
   held sleep-fabric but no sleep->dementia SR; this is the exposure anchor. **-> FETCHED to inbox/**
   (Springer OA PDF, verified real PDF 43pp).

**DEFERRED:**
- **Domain-specific physical activity -> dementia SR+MA** (Lancet Public Health 2026;
   `10.1016/s2468-2667(26)00142-8`; cites=0; OA) + its SSRN preprint (`10.2139/ssrn.6348575`). The
   leisure-vs-occupational-vs-household PA split is genuinely decision-relevant and connects to the held
   Coenen occupational-PA-paradox — but 2026/0-cites = high recency prior against currency (crowded-field
   rule); PA->mortality is already well-held so a PA->dementia MA is an F-refinement at most. DEFER pending
   citation accrual; revisit next dementia sweep.
- **Xue 2019 diabetes->dementia MA** (`10.1016/j.arr.2019.100944`; cites=729) — the landmark, but OA=False
   AND superseded on the drug angle by the 2023 umbrella (#2). Not acquired; noted as provenance.

**REJECTED (echoes / off-form):** the 2026 BP "Correction to" + conference-abstract rows
(`ehag701`, `cir.153...we464`, `ehae666.2544`, `alz.060056` — corrections/abstracts, not the primary MA);
the 2024 plain diabetes->dementia MA (`10.1186/s13098-024-01346-4`) and APOE-e4 subgroup MA
(`10.3233/jad-191068`) — both subsumed by the umbrella (#2); the 2025 sleep GeroScience + JCM-protocol rows
(`s11357-025-01637-2`, `jcm14207437`) — the J Neurol update (#3) is the cleaner current all-cause MA.

**Acquisition-requested + status:**
- FETCHED to inbox/: Sleep 2025 update (`10.1007/s00415-025-13372-x`) — Springer, verified PDF 43pp.
- **BLOCKED -> MAINTAINER-DROP** (both genuinely OA, both hard-403 on plain fetch AND headless Playwright;
   Steel NOT attempted — pausing per acquisition-pause-and-ask rather than burning it unasked):
  - BP-lowering IPD MA `10.1093/eurheartj/ehac584` (OUP) — PDF: academic.oup.com/eurheartj/article-pdf/43/48/4980/48305958/ehac584.pdf
  - Diabetes umbrella `10.1111/dom.15331` (Wiley) — PDF: onlinelibrary.wiley.com/doi/pdfdirect/10.1111/dom.15331
- Nothing ingested. Next: `process inbox` stages the sleep PDF; the 2 walled DOIs await a maintainer drop.
- [2026-09-03] openalex search "hearing intervention cognitive decline randomized" -> 6 hits: https://doi.org/10.1002/trc2.12453; https://doi.org/10.4295/audiology.66.280; https://doi.org/10.1093/geroni/igae098.0057; https://doi.org/10.1002/alz.091289; https://doi.org/10.1093/geroni/igad104.0294
- [2026-09-03] openalex search "physical activity incident dementia systematic review" -> 0 hits: (none)
- [2026-09-03] openalex search "physical activity dementia meta-analysis" -> 6 hits: https://doi.org/10.1136/bjsports-2021-104981; https://doi.org/10.1093/geront/gnz176; https://doi.org/10.3928/00989134-20180814-01; https://doi.org/10.1016/j.apmr.2023.04.011; https://doi.org/10.1016/j.gerinurse.2023.04.012
- [2026-09-03] openalex search "alcohol consumption dementia risk meta-analysis" -> 3 hits: https://doi.org/10.1007/s10654-017-0225-3; https://doi.org/10.1111/imj.70288; https://doi.org/10.1212/wnl.88.16_supplement.p3.094
- [2026-09-03] openalex resolve "10.1016/S0140-6736(23)01406-X 10.1007/s10654-017-0225-3 10.1136/bjsports-2021-104981" -> 3 hits: https://doi.org/10.1016/s0140-6736(23)01406-x; https://doi.org/10.1007/s10654-017-0225-3; https://doi.org/10.1136/bjsports-2021-104981
- [2026-09-03] openalex fetch "10.1136/bjsports-2021-104981" -> 0 hits: (none)
- [2026-09-03] openalex fetch "10.1016/S0140-6736(23)01406-X" -> 0 hits: (none)

## [2026-09-03] SELECTION RECORD — lighthouses + disagreeing golds (dementia, pass 2)

**Lens (maintainer directive).** Continue the dementia restock hunting specifically for (i) LIGHTHOUSE
anchors on un-anchored big levers and (ii) DISAGREEING GOLDS — a gold reaching a *different* conclusion
than a held gold (the type-D friction generator; op-research's strongest ratchet-advancer). **Bias guard
front-loaded** (telos: "a fabric scored on divergence will manufacture it"): searched NEUTRALLY on the
question, symmetric standards — a disagreeing gold is REPORTED as a finding, not fished for, and a
confirming gold would have cleared the same bar.

**SELECTED — 1 disagreeing gold + 2 lighthouses:**

1. **[DISAGREEING GOLD] ACHIEVE hearing-intervention RCT** (Lin et al, Lancet 2023;402:786-797;
   `10.1016/S0140-6736(23)01406-X`; PMC10529382; cites=461; OA-via-PMC). The randomized counterweight to
   the held **observational** Yeo 2023 (hearing aids -> less dementia, HR 0.81): ACHIEVE was NULL overall
   on 3-yr cognitive change, positive ONLY in the high-CV-risk (ARIC) subgroup. This is a genuine
   gold-vs-gold split (RCT null vs observational benefit) that resolves the exact route-(b)-not-established
   caveat flagged on the Yeo page at ingest — the healthy-user-selection reading gets its RCT test.
   Highest-value acquisition on the board. **-> MAINTAINER-DROP** (OA on PMC but PMC Cloudflare-challenged
   + Europe PMC 500/520 today; openalex fetch got the landing page; Steel not burned unasked).

2. **[LIGHTHOUSE] Iso-Markku PA -> dementia/AD SR+MA** (Br J Sports Med 2022;
   `10.1136/bjsports-2021-104981`; cites=421; OA). The canonical PA->dementia anchor — a top-3 lever the
   fabric holds for MORTALITY ([[Physical Activity Dose and Mortality]]) but NOT for dementia. Its
   quality-assessment / reverse-causation handling (PA declines in the prodromal years BEFORE diagnosis)
   feeds the held U-shape-artifact discipline directly. **-> FETCHED to inbox/** (verified 27pp PDF).

3. **[LIGHTHOUSE, walled] Xu alcohol -> dementia dose-response MA** (Eur J Epidemiol 2017;
   `10.1007/s10654-017-0225-3`; cites=301; OA=False). The alcohol->dementia J-curve — tests the held
   `[PRIOR — test me]` U/J artifact (alcohol is already a worked instance for MORTALITY) on a NEW outcome
   (dementia): does the "moderate drinking protects the brain" arm survive referent-correction? Ratchet-
   advancer (new outcome for the artifact mechanism), but LOWER priority than ACHIEVE and Springer-walled.
   **-> MAINTAINER-DROP (optional/lower-priority).**

**REJECTED (off-question — treatment not prevention, or surrogate):** the PA hits for exercise IN people
WITH dementia / on executive-function surrogates (`gnz176` home-based PA in dementia; `apmr.2023.04.011`
multicomponent exercise on cognition-in-impaired; `gerinurse` executive function; `ijerph18168753`
PA-interventions-in-dementia) — all treatment/surrogate, not the incidence-prevention question. ACHIEVE
substudies/abstracts (`trc2.12453` baseline; `alz.091289` subgroup; the `geroni`/`igad104` conference
abstracts) — subsumed by the primary Lancet paper (#1). Alcohol 2025 update (`imj.70288`, 6 cites) and the
Neurology supplement abstract (`wnl.88...p3.094`) — the 2017 Xu (#3) is the higher-cite canonical
dose-response; the 2025 is OA-Wiley (blocks) with far fewer cites.

**NOT ACQUIRED — disagreement already in-hand (no new source needed):** the multidomain FINGER
(positive-ish cognition) vs preDIVA + MAPT (null incidence) gold-vs-gold split is already fully staged
(Ngandu / Moll van Charante / Andrieu + Coley's pooled-null IPD) — that type-D friction is a WEAVE job
once ingested, not an acquisition gap.

**Acquisition-requested + status:**
- FETCHED to inbox/: Iso-Markku PA->dementia (`10.1136/bjsports-2021-104981`) — verified 27pp PDF.
- **MAINTAINER-DROP:** ACHIEVE `10.1016/S0140-6736(23)01406-X` (PMC10529382 — grab the PMC/nihms PDF;
  the key disagreeing gold) + Xu alcohol `10.1007/s10654-017-0225-3` (Springer; optional/lower-priority).
- Combined with pass-1's pending drops (BP IPD `ehac584`, diabetes umbrella `dom.15331`), the
  maintainer-drop queue now holds 4 DOIs. Nothing ingested.
- [2026-09-03] openalex fetch "10.1007/s10654-017-0225-3" -> 0 hits: (none)
- [2026-09-03] openalex search "antidepressant weight change meta-analysis" -> 1 hits: https://doi.org/10.1016/j.euroneuro.2017.08.390
- [2026-09-03] openalex search "antidepressant weight gain systematic review" -> 1 hits: https://doi.org/10.1111/obr.12934
- [2026-09-03] openalex search "antidepressants weight gain" -> 10 hits: https://doi.org/10.1136/bmj.k1951; https://doi.org/10.2337/dc10-1187; https://doi.org/10.1111/obr.12934; https://doi.org/10.1001/jamapsychiatry.2014.414; https://doi.org/10.2174/1871530315666150623092031
- [2026-09-03] openalex search "antidepressant metabolic meta-analysis" -> 4 hits: https://doi.org/10.1038/s41398-024-02981-1; https://doi.org/10.1038/s41398-024-03064-x; https://doi.org/10.1101/2023.06.26.23291890; https://doi.org/10.1016/j.euroneuro.2023.08.392
- [2026-09-03] openalex search "antidepressant weight gain" -> 10 hits: https://doi.org/10.1016/j.pnpbp.2026.111854; https://doi.org/10.1016/j.jaac.2026.03.008; https://doi.org/10.1016/j.jad.2025.120521; https://doi.org/10.58445/rars.3189; https://doi.org/10.64239/pi-qt7202
- [2026-09-03] openalex resolve "10.1111/obr.12934" -> 1 hits: https://doi.org/10.1111/obr.12934
- [2026-09-03] openalex search "antidepressant weight meta-analysis" -> 1 hits: https://doi.org/10.1016/j.genhosppsych.2013.08.002
- [2026-09-03] openalex search "antidepressant weight systematic review" -> 0 hits: (none)
- [2026-09-03] openalex resolve "10.1007/s13679-024-00598-5 10.2337/dc10-1187" -> 2 hits: https://doi.org/10.1007/s13679-024-00598-5; https://doi.org/10.2337/dc10-1187
- [2026-09-03] openalex fetch "10.1111/obr.12934" -> 0 hits: (none)
- [2026-09-03] openalex fetch "10.1007/s13679-024-00598-5" -> 0 hits: (none)

## [2026-09-03] SELECTION RECORD — antidepressant metabolic/weight side-effect (cashing WS-013)

**Gap:** WS-013 (pending-intersections) — [[Antidepressants for Depression]] appraises efficacy
(Cipriani NMA) + discontinuation (Henssler) but holds NO metabolic/weight side-effect finding, a named
standard-drug limitation and an obesity-stratum co-consideration. New-aspect opener -> ratchet-advancer
(nothing held on the question). Decision-relevant granularity WS-013 named: per-agent weight change
(mirtazapine/paroxetine gain vs bupropion neutral/loss).

**Channels:** openalex (primary) — `weight change`/`weight gain`/`metabolic` x {meta-analysis,
systematic-review, no-type, OA-only} + recency sort. No web-search channel needed (openalex surfaced the
landmark directly).

**SELECTED (both PAYWALLED -> maintainer-drop, NOT downgraded):**
- **`10.1111/obr.12934`** — Alonso-Pedrero et al., "Effects of antidepressant and antipsychotic use on
  weight gain: A systematic review", Obesity Reviews 2019 (169 cites; SR; gold/high). The
  systematic-review of record. CAVEAT: bundles antipsychotics — extract the antidepressant per-drug arm.
- **`10.1007/s13679-024-00598-5`** — "Antidepressants and Weight Gain: An Update on the Evidence and
  Clinical Implications", Current Obesity Reports 2025 (15 cites). Recency + per-agent clinical
  implications (the granularity WS-013 wants). TIER CAVEAT: Current Obesity Reports "Update" format is
  often narrative -> VERIFY tier at ingest; if narrative it is a moderate currency/counterweight source
  (needs a `source-tier-overrides.tsv` entry), if systematic it supersedes obr.12934.

**DEFERRED (metabolic->T2D extension — acquire only if the two SRs prove thin on hard endpoints):**
- `10.2337/dc10-1187` (Diabetes Care 2010, OA) + `10.1136/bmj.k1951` (Gafoor, BMJ 2018 10-yr weight
  cohort, OA) — large cohorts on antidepressant -> weight/T2D. Single-cohort, dated; the SR+update should
  cover the aggregate. Held as a second-gap fallback, not fetched.

**REJECTED:**
- CYP2C19/CYP2D6 metabolizer MAs (`s41398-024-02981-1` + correction/preprint/abstract) — off-target:
  pharmacogenetics of *response/efficacy*, not metabolic *side-effects*.
- `10.1016/j.genhosppsych.2013.08.002` (OA MA, 184 cites) — off-target: antidepressants in PREGNANCY /
  gestational weight, not the general side-effect.
- `10.1111/obr.12284` (2015, children/adolescents) — different stratum; DEFERRABLE if a pediatric angle
  is ever wanted, not now.
- Single cohorts / EHR studies (jamapsychiatry 2014, the 2026 transdiagnostic pooled-trial, various
  2024-25 cross-sectionals) — superseded by the SR for the aggregate question.

**Acquisition-requested + status:**
- **MAINTAINER-DROP (both anti-bot/paywalled, confirmed via openalex fetch = PAYWALLED):**
  `10.1111/obr.12934` (Wiley/Obesity Reviews) + `10.1007/s13679-024-00598-5` (Springer/Current Obesity
  Reports). Neither downgraded. Nothing fetched to inbox/, nothing ingested.
- [2026-09-03] openalex search "ultra-processed food cognitive decline meta-analysis" -> 0 hits: (none)
- [2026-09-03] openalex search "ultra-processed food dementia systematic review" -> 1 hits: https://doi.org/10.1007/s00415-023-12033-1
- [2026-09-03] openalex search "ultra-processed cognitive" -> 12 hits: https://doi.org/10.1007/s00394-022-02911-1; https://doi.org/10.1093/gerona/glac070; https://doi.org/10.3389/ijph.2024.1607658; https://doi.org/10.1136/bmjnph-2025-001325; https://doi.org/10.3389/fpubh.2025.1695540
- [2026-09-03] openalex search "ultra-processed cognition umbrella review" -> 0 hits: (none)
- [2026-09-03] openalex search "ultra-processed cognitive impairment meta-analysis" -> 1 hits: https://doi.org/10.1007/s00415-026-13889-9
- [2026-09-03] openalex resolve "10.1007/s00415-023-12033-1 10.1136/bmjnph-2025-001325 10.1007/s00415-026-13889-9" -> 3 hits: https://doi.org/10.1007/s00415-023-12033-1; https://doi.org/10.1136/bmjnph-2025-001325; https://doi.org/10.1007/s00415-026-13889-9
- [2026-09-03] openalex fetch "10.1007/s00415-023-12033-1" -> 0 hits: (none)
- [2026-09-03] openalex fetch "10.1136/bmjnph-2025-001325" -> 0 hits: (none)

## [2026-09-03] SELECTION RECORD — UPF -> cognitive decline/dementia (cashing WS-014)
Gap: WS-014 (pending-intersections) — the food-group -> cognition arm is unsourced; top acquire is a
gold SR/MA on UPF -> cognitive decline/dementia. Channel: openalex primary. Gold-gate + MA/SR-first +
ratchet (a single cohort echoes an SR — reject). 0-hit queries attributed below.

**SELECTED:**
- `10.1007/s00415-023-12033-1` (Henney et al. 2023, J Neurology; **SR+MA**, gold, OA, 61 cites) —
  «High intake of ultra-processed food is associated with dementia in adults». The pooled-magnitude
  source of record on the gap's exact question; first gold on a no-gold-held cell. **FETCHED ->
  `inbox/Henney - High intake of ultra processed food 2023.pdf`.**
- `10.1136/bmjnph-2025-001325` (2026, BMJ Nutr Prev Health; **SR of observational studies**, gold, 4
  cites) — newer synthesis, a ratchet-advancer (newer SR usually supersedes/complements the 2023 MA).
  oa=True flag but **no direct OA PDF -> openalex fetch = PAYWALLED**; not downgraded. **MAINTAINER-DROP.**

**DEFERRED:**
- `10.1007/s00415-026-13889-9` (2026, J Neurology; **MA**, oa=False, 1 cite) — newest pooled MA
  ("combined UPF intake / ultra-processed dietary pattern"), same journal as the 2023 SR+MA. Paywalled +
  unvetted (1 cite) + potential same-question echo of Henney 2023; revisit at ingest ONLY if the 2023 MA
  proves thin or the field has moved. DOI recorded; not requested for drop now.

**REJECTED (ratchet echoes — single cohorts/cross-sections, superseded by the SR/MA for the aggregate):**
- `10.1007/s00394-022-02911-1` (2022 cohort, 55 cites), `10.1093/gerona/glac070` (2022 cohort, 28),
  `10.3389/ijph.2024.1607658`, `10.3389/fpubh.2025.1695540`, `10.1016/j.ypmed.2025.108390`,
  `10.1002/dad2.70335`, `10.1016/j.jand.2024.07.030` — primary studies, not synthesis; pooled into or
  echoed by Henney 2023. Off-target noise in the broad query (schres psychosis, s41598 endothelial
  single-meal, nu18132041 MASLD-mechanism) dropped.

**0-hit queries attributed:**
- "ultra-processed food cognitive decline meta-analysis" -> 0: `title.search` strictness (every word in
  title; "cognitive decline" over-narrows), NOT literature-absence — the looser "ultra-processed
  cognitive" returned 12 and the dementia-typed query found the SR+MA.
- "ultra-processed cognition umbrella review" -> 0: genuine — no umbrella review held/exists yet on this
  question (the SR/MA layer is the current ceiling).

**Acquisition-requested + status:**
- FETCHED to inbox/: Henney 2023 SR+MA (the primary acquire; cashes WS-014's top candidate).
- MAINTAINER-DROP: `10.1136/bmjnph-2025-001325` (2026 BMJ NPH SR, paywalled, not downgraded).
- Next: *process inbox* to stage Henney 2023; then delegated Ingest onto the food nuclei + the
  [[Dementia Prevention and Modifiable Risk Factors]] cross-link (WS-014).
- [2026-09-04] openalex search "fruit vegetable cognitive dementia meta-analysis" -> 1 hits: https://doi.org/10.3389/fnagi.2017.00018
- [2026-09-04] openalex search "fruit vegetable cognition systematic review" -> 0 hits: (none)
- [2026-09-04] openalex search "flavonoid cognitive decline meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "dietary fiber cognition dementia meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "fruit vegetable cognition systematic review" -> 0 hits: (none)
- [2026-09-04] openalex search "flavonoid cognitive meta-analysis" -> 1 hits: https://doi.org/10.26599/fshw.2025.9250596
- [2026-09-04] openalex search "flavonoids dementia meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "dietary fiber cognition meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "fiber cognitive decline systematic review" -> 0 hits: (none)
- [2026-09-04] openalex search "vegetable cognitive meta-analysis" -> 6 hits: https://doi.org/10.3389/fnagi.2017.00018; https://doi.org/10.1038/s41430-017-0005-x; https://doi.org/10.1007/s12603-017-0875-6; https://doi.org/10.3389/fnut.2022.871061; ?
- [2026-09-04] openalex search "fruit cognitive meta-analysis" -> 6 hits: https://doi.org/10.3389/fnagi.2017.00018; https://doi.org/10.1038/s41430-017-0005-x; https://doi.org/10.1007/s12603-017-0875-6; https://doi.org/10.3389/fnut.2022.871061; https://doi.org/10.1038/s41430-022-01138-x
- [2026-09-04] openalex search "flavonoid cognition systematic review" -> 2 hits: https://doi.org/10.3389/fphys.2023.1216948; https://doi.org/10.3389/fphys.2023.1287170
- [2026-09-04] openalex search "flavonols cognitive meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "fiber cognitive meta-analysis" -> 1 hits: https://doi.org/10.1016/j.dadm.2016.07.004
- [2026-09-04] openalex search "fibre cognitive systematic review" -> 1 hits: https://doi.org/10.1039/d4fo02221a
- [2026-09-04] openalex search "fiber cognitive systematic review" -> 0 hits: (none)
- [2026-09-04] openalex search "fiber dementia meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "fiber dementia systematic review" -> 1 hits: https://doi.org/10.1101/2023.11.09.23298318
- [2026-09-04] openalex search "dietary fiber dementia systematic review" -> 0 hits: (none)
- [2026-09-04] openalex resolve "10.3389/fnut.2022.871061 10.26599/fshw.2025.9250596" -> 2 hits: https://doi.org/10.3389/fnut.2022.871061; https://doi.org/10.26599/fshw.2025.9250596
- [2026-09-04] openalex search "fiber intake cognitive systematic review" -> 0 hits: (none)
- [2026-09-04] openalex search "fibre cognitive meta-analysis" -> 1 hits: https://doi.org/10.1039/d4fo02221a
- [2026-09-04] openalex resolve "10.3389/fnut.2022.871061" -> 1 hits: https://doi.org/10.3389/fnut.2022.871061
- [2026-09-04] openalex fetch "10.3389/fnut.2022.871061" -> 0 hits: (none)
- [2026-09-04] openalex fetch "10.26599/fshw.2025.9250596" -> 0 hits: (none)
- [2026-09-04] openalex resolve "10.1016/j.dadm.2016.07.004" -> 1 hits: https://doi.org/10.1016/j.dadm.2016.07.004

## [2026-09-04] SELECTION RECORD — food-group -> cognition (WS-014 arms 2+3)

**Context.** WS-014 pending-intersection, food-GROUP -> cognition/dementia. UPF sub-arm already
CLOSED (Henney + Smith ingested). This episode works the ratchet's remaining arms:
F&V/flavonoid -> cognition (2nd) and fibre -> cognition (3rd, flagged emerging). Channel: OpenAlex
`search --type meta-analysis|systematic-review` + `resolve`/`fetch`. Query + zero-hit lines
auto-logged above (title.search strictness attributed inline: multi-word + type filter returns 0
from the every-word-in-title rule, not from absence — narrowed to 2-noun core queries to recover).

**Adjudication (fields 3+4).**

- **SELECTED — F&V arm.** `10.3389/fnut.2022.871061` — Zhang et al., *Fruit and Vegetable
  Consumption and Cognitive Disorders in Older Adults: A Meta-Analysis* (2022, Front. Nutr.,
  gold/MA, OA, 56 cites). Correct stratum (older adults, the dementia question). Supersedes the
  three 2017 MAs (landmark `10.3389/fnagi.2017.00018`, 140 cites) on recency. **FETCHED to inbox/.**
- **SELECTED — flavonoid arm (component side of the F&V pair).** `10.26599/fshw.2025.9250596` —
  *Dietary flavonoids consumption and cognitive function: a systematic review and meta-analysis*
  (2025, Food Sci. Hum. Wellness, gold/MA, OA-flagged, cites=0 [very new]). Pairs with Zhang as a
  whole-food-vs-component D/F contrast on cognition (mirrors the held Chung-tea / Mazidi-flavonoid
  pairing). **MAINTAINER-DROP** — sciopen PDF fetch failed at both rungs (openalex
  RemoteDisconnected; headless Playwright ERR_HTTP2_PROTOCOL_ERROR). NOT downgraded to a weaker
  source per pause-and-ask; needs a manual maintainer drop of the sciopen PDF.
- **REJECTED — 2017 F&V MAs** (`10.3389/fnagi.2017.00018`, `10.1038/s41430-017-0005-x`,
  `10.1007/s12603-017-0875-6`): superseded by Zhang 2022 on recency, same question/stratum.
- **REJECTED — specific-fruit MA** `10.1038/s41430-022-01138-x` (berries/cherries/citrus 2022):
  narrower than the F&V-group question WS-014 owes; defer unless the group arm needs a fruit-subtype
  facet later.
- **REJECTED — exercise+flavonoid** `10.3389/fphys.2023.1216948` / `.1287170` (2023): combined
  aerobic-exercise-AND-flavonoid exposure = confounded/mixed intervention, not a clean
  flavonoid->cognition contrast.
- **REJECTED — fibre, wrong stratum** `10.1039/d4fo02221a` (2024 Food Funct.,
  children/adolescents, NOT OA): developmental cognition, not age-related decline — off the
  dementia question.
- **REJECTED — fibre false hits** `10.1101/2023.11.09.23298318` ("fiber tracts" neuroimaging
  preprint) + `10.1016/j.dadm.2016.07.004` ("retinal nerve fiber layer" — retinal anatomy): both
  are "fiber" homonyms, not dietary fibre.
- **GAP (legit silence, type-G) — adult dietary-fibre -> cognition/dementia.** No gold SR/MA
  surfaces at the adult/older-adult stratum across the queries above; every apparent hit was a
  homonym or the wrong (child) stratum. Consistent with WS-014's "fibre 3rd, emerging" note — an
  emerging-evidence gap, NOT forced-acquired. Recorded as a named G-gap; re-probe on a later sweep.

**Acquisition-requested + status.**

- FETCHED to inbox/: Zhang 2022 F&V->cognition MA (WS-014 arm 2, whole-food side).
- MAINTAINER-DROP: `10.26599/fshw.2025.9250596` flavonoid 2025 SR+MA (WS-014 arm 2, component side)
  — OA but fetch-blocked at both rungs; needs manual sciopen PDF drop, not downgraded.
- No acquire for the fibre arm — held as a G-gap (arm 3), per the ratchet's "emerging" flag.
- Next: *process inbox* to stage Zhang 2022 (separate step; research does NOT ingest). WS-014 stays
  OPEN — arm 2 partially acquired (F&V in hand, flavonoid pending drop), arm 3 a named gap.
- [2026-09-04] openalex search "saturated fat cardiovascular disease meta-analysis" -> 2 hits: https://doi.org/10.31662/jmaj.2024-0324; https://doi.org/10.21203/rs.3.rs-4610120/v1
- [2026-09-04] openalex search "vitamin D type 2 diabetes individual participant data meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "dairy intake type 2 diabetes dose-response meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "isoflavone soy cognition meta-analysis randomized" -> 0 hits: (none)
- [2026-09-04] openalex search "reduction total fat intake cardiovascular disease meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "waist hip ratio body mass index myocardial infarction pooled" -> 0 hits: (none)
- [2026-09-04] openalex search "vitamin D diabetes meta-analysis" -> 6 hits: https://doi.org/10.1186/s12902-022-01209-x; https://doi.org/10.1111/dom.15941; https://doi.org/10.1016/j.ajcnut.2023.07.012; https://doi.org/10.1186/s40001-022-00688-x; https://doi.org/10.1155/2023/1907222
- [2026-09-04] openalex resolve "10.7326/M22-3018" -> 1 hits: https://doi.org/10.7326/m22-3018
- [2026-09-04] openalex search "dairy diabetes meta-analysis" -> 6 hits: https://doi.org/10.3945/ajcn.115.123216; https://doi.org/10.1186/s12916-014-0215-1; https://doi.org/10.1093/advances/nmac096; https://doi.org/10.1093/nutrit/nuz006; https://doi.org/10.1016/j.jcjd.2021.09.003
- [2026-09-04] openalex search "soy isoflavones cognitive" -> 6 hits: https://doi.org/10.1093/nutrit/nuz050; https://doi.org/10.3390/ijms231911921; https://doi.org/10.1002/ptr.7354; https://doi.org/10.1038/s41430-017-0061-2; https://doi.org/10.18632/aging.103877
- [2026-09-04] openalex search "reduced fat intake meta-analysis" -> 2 hits: https://doi.org/10.2174/1573401318666220308125105; https://doi.org/10.1093/cdn/nzz044.p08-056-19
- [2026-09-04] openalex search "general central adiposity myocardial infarction" -> 1 hits: https://doi.org/10.1161/jaha.117.008507
- [2026-09-04] openalex resolve "10.1093/nutrit/nuz050" -> 1 hits: https://doi.org/10.1093/nutrit/nuz050
- [2026-09-04] openalex resolve "10.3945/ajcn.115.123216" -> 1 hits: https://doi.org/10.3945/ajcn.115.123216
- [2026-09-04] openalex resolve "10.7326/M22-3018" -> 1 hits: https://doi.org/10.7326/m22-3018
- [2026-09-04] openalex search "reduction saturated fat cardiovascular" -> 6 hits: https://doi.org/10.1002/14651858.cd011737; https://doi.org/10.1002/14651858.cd011737.pub3; https://doi.org/10.1002/14651858.cd011737.pub2; https://doi.org/10.1016/j.ajcnut.2023.05.017; https://doi.org/10.1038/s41430-022-01185-4
- [2026-09-04] openalex resolve "10.1002/14651858.CD011834.pub2" -> 0 hits: (none)
- [2026-09-04] openalex search "body-mass index waist circumference cardiovascular pooled" -> 0 hits: (none)
- [2026-09-04] openalex search "separate combined associations adiposity cardiovascular disease" -> 3 hits: https://doi.org/10.1016/s0140-6736(11)60105-0; https://doi.org/10.1016/j.yspm.2011.08.033; https://doi.org/10.1016/j.yend.2011.06.030
- [2026-09-04] openalex search "reduced modified fat preventing cardiovascular" -> 6 hits: https://doi.org/10.1002/14651858.cd002137.pub3; https://doi.org/10.1002/14651858.cd002137.pub2; https://doi.org/10.1002/14651858.cd002137; https://doi.org/10.1590/1516-3180.20161342t1; https://doi.org/10.1002/psb.792
- [2026-09-04] openalex search "reduction total fat intake cardiovascular" -> 0 hits: (none)
- [2026-09-04] openalex search "sodium reduction blood pressure meta-analysis" -> 6 hits: https://doi.org/10.5334/gh.1281; https://doi.org/10.1038/s41440-025-02181-4; https://doi.org/10.1093/ckj/sfaf340; https://doi.org/10.1097/hjh.0000000000004386; https://doi.org/10.3390/nu18030428
- [2026-09-04] openalex search "saturated fat polyunsaturated cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "dietary fiber mortality meta-analysis" -> 4 hits: https://doi.org/10.1016/j.clnu.2023.11.005; https://doi.org/10.3389/fnut.2023.1153165; https://doi.org/10.1039/d2fo04024g; https://doi.org/10.1007/s40620-023-01808-4
- [2026-09-04] openalex search "free sugars body weight meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "red processed meat mortality meta-analysis" -> 1 hits: https://doi.org/10.3390/nu15153373
- [2026-09-04] openalex search "protein resistance training muscle meta-analysis" -> 4 hits: https://doi.org/10.3390/nu15153424; https://doi.org/10.3390/nu16070941; https://doi.org/10.1123/ijsnem.2023-0118; https://doi.org/10.1093/cdn/nzac073.007
- [2026-09-04] openalex search "omega-3 supplementation cardiovascular events meta-analysis" -> 2 hits: https://doi.org/10.3390/proceedings2023091199; https://doi.org/10.1161/circ.148.suppl_1.13778
- [2026-09-04] openalex search "vitamin D supplementation mortality meta-analysis" -> 6 hits: https://doi.org/10.3390/ph16010130; https://doi.org/10.3390/nu15081810; https://doi.org/10.1016/j.ajcnut.2023.07.012; https://doi.org/10.3390/nu15153470; https://doi.org/10.1016/j.rmed.2025.108450
- [2026-09-04] openalex search "alcohol consumption all-cause mortality meta-analysis" -> 1 hits: https://doi.org/10.1016/s0213-9111(26)00631-x
- [2026-09-04] openalex search "multidomain intervention cognitive meta-analysis" -> 6 hits: https://doi.org/10.1016/j.arr.2024.102463; https://doi.org/10.1007/s40520-024-02700-2; https://doi.org/10.1016/j.lanhl.2025.100762; https://doi.org/10.7717/peerj.19588; https://doi.org/10.64898/2026.07.12.26357861
- [2026-09-04] openalex search "intentional weight loss cardiovascular events meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "egg consumption cardiovascular meta-analysis" -> 1 hits: https://doi.org/10.51745/najfnr.10.21.22-34
- [2026-09-04] openalex search "ultra-processed food mortality meta-analysis" -> 3 hits: https://doi.org/10.1039/d2fo02628g; https://doi.org/10.1186/s13643-025-02800-8; https://doi.org/10.17605/osf.io/bfu9k
- [2026-09-04] openalex search "low carbohydrate diet all-cause mortality meta-analysis" -> 3 hits: https://doi.org/10.1016/j.arr.2023.101997; https://doi.org/10.1039/d3fo01374j; https://doi.org/10.1016/j.annepidem.2026.110252
- [2026-09-04] openalex search "saturated fatty acids coronary heart disease meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "dietary fat replacement cardiovascular events randomized" -> 0 hits: (none)
- [2026-09-04] openalex search "sugar sweetened beverages weight gain meta-analysis" -> 1 hits: https://doi.org/10.1016/j.ajcnut.2022.11.008
- [2026-09-04] openalex search "sugar intake body weight meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "weight loss intervention cardiovascular outcomes meta-analysis" -> 0 hits: (none)
- [2026-09-04] openalex search "GLP-1 receptor agonist cardiovascular outcomes meta-analysis" -> 6 hits: https://doi.org/10.1016/s2213-8587(24)00271-7; https://doi.org/10.1161/circulationaha.124.071689; https://doi.org/10.1053/j.ajkd.2024.11.013; https://doi.org/10.1177/14791641231221740; https://doi.org/10.1016/j.amjcard.2025.09.039
- [2026-09-04] openalex search "association daily alcohol all-cause mortality systematic review" -> 0 hits: (none)
- [2026-09-04] openalex search "unprocessed red meat mortality burden of proof" -> 0 hits: (none)
- [2026-09-04] openalex resolve "10.1001/jamanetworkopen.2023.6185" -> 1 hits: https://doi.org/10.1001/jamanetworkopen.2023.6185
- [2026-09-04] openalex search "health effects red meat consumption burden proof" -> 1 hits: https://doi.org/10.1038/s41591-022-01968-z
- [2026-09-04] openalex fetch "10.1016/S2213-8587(24)00271-7" -> 0 hits: (none)
- [2026-09-04] openalex fetch "10.1016/S0140-6736(11)60105-0" -> 0 hits: (none)
- [2026-09-04] openalex fetch "10.1002/14651858.CD002137.pub3" -> 0 hits: (none)
- [2026-09-04] openalex fetch "10.1093/nutrit/nuz050" -> 0 hits: (none)
- [2026-09-04] openalex fetch "10.3945/ajcn.115.123216" -> 0 hits: (none)
- [2026-09-04] openalex resolve "10.1016/S2213-8587(24)00271-7" -> 1 hits: https://doi.org/10.1016/s2213-8587(24)00271-7
- [2026-09-04] openalex resolve "10.1016/S0140-6736(11)60105-0" -> 1 hits: https://doi.org/10.1016/s0140-6736(11)60105-0
- [2026-09-04] openalex resolve "10.1016/j.arr.2023.101997" -> 1 hits: https://doi.org/10.1016/j.arr.2023.101997
- [2026-09-04] openalex resolve "10.1016/j.lanhl.2025.100762" -> 1 hits: https://doi.org/10.1016/j.lanhl.2025.100762
- [2026-09-04] openalex fetch "10.1016/j.lanhl.2025.100762" -> 0 hits: (none)
- [2026-09-04] openalex fetch "10.1001/jamanetworkopen.2023.6185" -> 0 hits: (none)
- [2026-09-04] openalex fetch "10.1186/s13643-025-02800-8" -> 0 hits: (none)

## [2026-09-04] SELECTION RECORD — discovery sweep: seed-verify + contradiction hunt

**Episode.** A two-part external sweep (delegated to a discovery subagent): (1) VERIFY five named
acquisition seeds from `acquisition-worklist.md` (existence + DOI + author-independence), and (2) a
CONTRADICTION HUNT the internal census does not run — for 14 held big-rock conclusions, find the newest
gold SR/MA/umbrella and classify it CONFIRM / CONTRADICT / REFINE. Channels: `bin/openalex.py`
(auto-logged above) + WebSearch (subagent, no auto-log — recorded here by hand). Crossref used to
confirm first-authors before registering rows (no invented attributions).

**Headline (field 2, the negative space that matters).** ZERO contradictions found. 8 of 14 held
conclusions CONFIRM against the newest gold (sodium->BP, satfat->CVD, fibre, sugar/SSB, vit-D-null,
alcohol-J-artifact, UPF, protein-region). Per the telos this is a reportable finding (convention held
here; a fabric scored on divergence manufactures it). The value is the REFINEs, not reversals.

**Field 3 — adjudication + reason.**

| candidate | verdict | reason |
|---|---|---|
| Badve GLP-1 RA -> kidney/CV MA (10.1016/S2213-8587(24)00271-7) | SELECTED | REFINE-prize: pharmacological weight loss cuts MACE where behavioural trials weak, sharpens Layer-1 lever-vs-drug; NOT in census |
| Ghorbani low-carb source-stratified MA (10.1016/j.arr.2023.101997) | SELECTED | REFINE: animal-vs-plant low-carb splits the held U-shape into a decision |
| Mendes single-vs-multidomain NMA (10.1016/j.lanhl.2025.100762) | SELECTED | REFINE: refines the FINGER multidomain story |
| ERFC BMI/WHR -> CVD pooled 58 cohorts (10.1016/S0140-6736(11)60105-0) | SELECTED | Tier-1a ratchet closer for Waist-to-Hip Ratio (held on INTERHEART alone); may ATTENUATE, not just confirm |
| Hooper reduce/modify-fat -> CVD Cochrane (10.1002/14651858.CD002137.pub3) | SELECTED | Tier-1a ratchet closer for Low-Fat Dietary Pattern (held on WHI alone) |
| Cui isoflavone -> cognition RCT-MA (10.1093/nutrit/nuz050) | SELECTED | verified the census seed; DOI + first-author (Chendi Cui) confirmed; closes the soy responder cell |
| Gijsbers dairy -> T2D dose-response (10.3945/ajcn.115.123216) | SELECTED | verified the census seed; DOI back-filled on existing row |
| Pittas vit-D -> T2D IPD (10.7326/M22-3018) | ALREADY-REGISTERED | census row already complete; verified extant |
| Zhao alcohol -> mortality MA (10.1001/jamanetworkopen.2023.6185) | SELECTED (confirmatory) | CONFIRM the J-curve-artifact view; lower ratchet |
| newest satfat-replacement RCT-MA 2023-26 | REJECTED (none exists) | genuine gap: 2020 Cochrane CD011737 stays the landmark, no newer gold supersedes |
| recent global egg/cholesterol -> CVD gold 2023-26 | REJECTED (thin) | only a regional 2026 MA; held general-population null stands |
| recent omega-3-supp -> CVD-events gold 2023-26 | DEFERRED | only conference-abstract MAs in the window; held view rests on older landmarks |

**Field 4 — acquisition-requested + fetch status.** FETCHED to `inbox/` (1): Badve. BLOCKED ->
MAINTAINER-DROP (7), don't-downgrade rule applied, no substitution: ERFC-WHR (Lancet-walled, no PMC),
Hooper CD002137 (Cochrane-walled), Cui (OUP-walled), Gijsbers (AJCN/Elsevier-walled), Pittas (Annals-
walled), Ghorbani (Elsevier-walled), Mendes (Lancet-walled). Zhao (nominally OA JAMA Netw Open) and
Liang UPF (nominally OA BMC) FAILED even via the escalation ladder (direct OA endpoint -> HTML block;
browser -> HTTP 403), so both are IP/bot walls, not paywalls -> maintainer-drop. All 7+2 registered as
`[NOT YET HELD]` rows in `sources.md` this session so `reconcile.py awaits-arrived` matches on landing.

**Bias watch.** Contradiction hunt run under symmetric standards (same bar for confirmers and
would-be reversals); the zero-contradiction result is the anti-manufacture signal, logged as such.
- [2026-09-05] openalex resolve "10.1016/j.jad.2022.07.008" -> 1 hits: https://doi.org/10.1016/j.jad.2022.07.008
- [2026-09-05] openalex search "dairy consumption cognitive decline dementia meta-analysis" -> 0 hits: (none)
- [2026-09-05] openalex search "dairy cognitive systematic review" -> 3 hits: https://doi.org/10.1093/advances/nmy105; https://doi.org/10.1186/s12937-018-0387-1; https://doi.org/10.1016/j.advnut.2023.100160
- [2026-09-05] openalex search "dairy cognition meta-analysis" -> 0 hits: (none)
- [2026-09-05] openalex search "milk cognitive meta-analysis" -> 7 hits: https://doi.org/10.1186/s12937-018-0387-1; https://doi.org/10.3390/nu8120824; https://doi.org/10.1016/j.advnut.2026.100694; https://doi.org/10.3389/fragi.2026.1709281; https://doi.org/10.17028/rd.lboro.33277149
- [2026-09-05] openalex resolve "10.1016/j.advnut.2023.100160 10.1186/s12937-018-0387-1 10.3389/fragi.2026.1709281" -> 3 hits: https://doi.org/10.1016/j.advnut.2023.100160; https://doi.org/10.1186/s12937-018-0387-1; https://doi.org/10.3389/fragi.2026.1709281
- [2026-09-05] openalex fetch "10.1016/j.advnut.2023.100160" -> 0 hits: (none)

## [2026-09-05] SELECTION RECORD — dementia-cluster capstone + dairy->cognition gap (research op)

**Scope.** User chose "research the capstone + gaps" over ingest-seq (gold staged tier drained; Gate 35
flagged the mature echo tail — acquiring an open cell beats grinding differentials). Two targets: the
Zhang dementia-umbrella VoR (the dementia-cluster capstone, blocked as a preprint) + one fresh gold on
an acquisition-worklist gap. Both landmarks came back WALLED -> two maintainer-drop DOIs, zero fetched.

**Field 3 — adjudication.**

| candidate | verdict | reason |
|---|---|---|
| Zhang dementia umbrella VoR (10.1016/j.jad.2022.07.008, J Affect Disord 2022;314:160-167) | SELECTED (maintainer-drop) | the VoR the staged preprint `zhang2022dementia` (moderate) names; peer-reviewed umbrella upgrades the held preprint before any effect size is cited. oa=False (Elsevier) -> no OA copy exists; do NOT downgrade to the preprint for magnitudes |
| Villoz - Dairy Cognitive Decline Dementia (10.1016/j.advnut.2023.100160, Adv Nutr 2024;15(1):100160) | SELECTED (maintainer-drop) | the exact-question gold for the dairy->cognition/dementia gap (worklist Tier 2, inbound 5, the emptiest outcome column); SR + dose-response MA of prospective cohorts, no held source on this cell. Pairs the Zhang capstone in the dementia cell. advnut oa flag true but no OA pdf; openalex fetch = PAYWALLED -> maintainer-drop |
| Villoz-2018 (10.1186/s12937-018-0387-1, Nutrition Journal, cites 75) | DEFERRED (do-not-substitute) | OA-fetchable BUT off-arm (cognitive FUNCTION in older adults, not decline/dementia incidence) AND older -> fetching it in place of the walled 2024 landmark is exactly the downgrade the acquisition rule forbids. Available as a future type-E/F companion, maintainer's call |
| 2026 Frontiers milk->cognition (10.3389/fragi.2026.1709281, cites 2) | DEFERRED | OA-fetchable but brand-new / thin venue (Front Aging), cites=2, cognitive-function arm; newer-supersedes does not apply to an unvetted low-cite MA over an established landmark. Note, don't acquire |
| Ozawa/Nutrition-J 2018 dairy-frailty (10.1093/advances/nmy105) | REJECTED | off-question (frailty/sarcopenia, not cognition) |
| Wu 2016 milk-cognitive-disorders MA (10.3390/nu8120824, cites 68) | REJECTED | superseded by the 2024 Villoz dose-response MA on the same question; older, no dose-response |

**Field 2 attribution — the 0-hits.** `dairy consumption cognitive decline dementia meta-analysis` (0)
and `dairy cognition meta-analysis` (0) are `title.search` STRICTNESS artifacts (every word must hit the
title), NOT literature absence — the looser `dairy cognitive systematic review` (3) and `milk cognitive
meta-analysis` (7) surfaced the landmark immediately. `openalex fetch advnut...` -> 0 is the paywall, not
a missing record.

**Field 4 — acquisition-requested + fetch status.** FETCHED to inbox/: **0**. MAINTAINER-DROP (2),
don't-downgrade applied, no substitution:
- `10.1016/j.jad.2022.07.008` — Zhang dementia umbrella VoR (Elsevier/ScienceDirect, oa=False). Registry
  row `zhang2022dementia` already carries the VoR note; no new row.
- `10.1016/j.advnut.2023.100160` — Villoz dairy->cognition MA (Elsevier/ScienceDirect, no OA pdf).
  Registered `[NOT YET HELD]` row `villoz2024dairy` (gold, meta-analysis) so reconcile matches on landing.

**Bias watch.** The gap was chosen where the fabric is EMPTIEST (dementia/cognition column), not where a
prior wants confirming — symmetric-standards checkpoint passed. Two fetchable-but-weaker MAs were
available and deliberately NOT substituted for the walled landmarks (the pause-and-ask discipline is the
anti-erosion guard; taking the easy OA source would have been the silent downgrade).
- [2026-09-06] openalex search "soy isoflavone intake all-cause mortality meta-analysis" -> 1 hits: https://doi.org/10.1016/j.jand.2019.04.011
- [2026-09-06] openalex search "sleep regularity mortality" -> 12 hits: https://doi.org/10.1093/sleep/zsad253; https://doi.org/10.7554/elife.88359; https://doi.org/10.1093/sleep/zsad285; https://doi.org/10.7554/elife.88359.3; https://doi.org/10.7554/elife.88359.2
- [2026-09-06] openalex resolve "10.1016/j.jand.2019.04.011" -> 1 hits: https://doi.org/10.1016/j.jand.2019.04.011
- [2026-09-06] openalex search "nut type dose cardiovascular mortality meta-analysis" -> 0 hits: (none)
- [2026-09-06] openalex search "fructose nonalcoholic fatty liver disease meta-analysis" -> 0 hits: (none)

## [2026-09-06] SELECTION RECORD — acquisition pass (depth/gap targets; census reconcile)

**Context.** "Acquisition pass" against `acquisition-worklist.md`. Ground-truth checks first found the
census's top tier already CONSUMED by the 09-04/09-05 batch + 09-06 cut — reconciled inline (worklist
UPDATE 2026-09-06 banner). Auto-logged queries above; adjudication + acquisition below.

**Field 3 — adjudication + reason (per candidate).**
- **Nachvak 2019** soy/isoflavone/protein -> all-cause+CVD+cancer mortality MA (`10.1016/j.jand.2019.04.011`,
  gold, 124 cites) -> **SELECTED**. Fills the broad-soy total-mortality cell (Tier-2, inbound 0) that
  the held soy pages (Blanco-Mejia lipids / Cui+Reed isoflavone / Chen cancer) leave blank; feeds the
  live [[Soy Products]] deliverable. A genuine gap-closer, not an echo.
- **Sleep-regularity -> mortality** (12 hits) -> **REJECTED (named zero).** Held Windred IS `zsad253`.
  elife-88359 (different group) re-analyses the SAME UK Biobank cohort -> shared data + confounding
  structure, NOT independent type-E; zsad285 + the 2026 preprints are also UKB / below-gold. No
  independent gold replication exists -> expectancy fails on independence; do not acquire.
- **Nut type/dose -> CVD/mortality** and **Fructose -> NAFLD** -> **0 hits under the strict
  `--type meta-analysis` title filter.** Phrasing artifacts, not confirmed absences — deferred (not
  chased this pass); re-probe with looser channels if these gaps are prioritised.

**Field 4 — acquisition-requested + fetch status.** FETCHED to inbox/: **0**. MAINTAINER-DROP (1),
don't-downgrade applied:
- `10.1016/j.jand.2019.04.011` — Nachvak soy-mortality MA (JAND/Elsevier, `oa=False`). Registered
  `[NOT YET HELD]` row `nachvak2019soy` (gold, meta-analysis) so reconcile matches on landing.

**Bias watch.** Target chosen where the fabric is BLANK (soy total-mortality = 0), not where a prior
wants confirming — symmetric-standards checkpoint passed. The sleep-regularity rejection is the harder
call the discipline is for: the OA elife paper was RIGHT THERE and easy to fetch, but same-cohort backing
is not independent backing — taking it would have laundered a type-E robustness claim. Named zero over a
false-robustness acquire.
- [2026-09-07] openalex search "weight cycling mortality cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-09-07] openalex search "resistance training injury prevention meta-analysis" -> 0 hits: (none)
- [2026-09-07] openalex search "occupational complexity dementia risk meta-analysis" -> 0 hits: (none)
- [2026-09-07] openalex search "poultry consumption cardiovascular mortality meta-analysis" -> 1 hits: https://doi.org/10.1080/10408398.2021.1975092
- [2026-09-07] openalex search "weight cycling weight fluctuation mortality" -> 0 hits: (none)
- [2026-09-07] openalex search "strength training injury prevention athletes" -> 5 hits: https://doi.org/10.1590/1517-8692202228052022_0028; https://doi.org/10.15391/snsv.2024-3.003; ?; https://doi.org/10.66968/qxw0tp22; https://doi.org/10.26502/josm.511500267
- [2026-09-07] openalex search "work mental demands cognitive decline dementia" -> 2 hits: https://doi.org/10.1177/0890117119861309; https://doi.org/10.1002/gps.5409
- [2026-09-07] openalex search "body weight variability cardiovascular outcomes" -> 8 hits: https://doi.org/10.2337/dc19-2552; https://doi.org/10.1161/circoutcomes.118.004724; https://doi.org/10.1001/jamanetworkopen.2022.0055; https://doi.org/10.1038/s41598-021-88733-3; https://doi.org/10.1186/s12933-022-01689-0
- [2026-09-07] openalex resolve "10.1177/0890117119861309" -> 1 hits: https://doi.org/10.1177/0890117119861309

## [2026-09-07] SELECTION RECORD — deeper re-census (Tier-1b depth + Tier-4 gap probes)

**Context.** Continuation of the 2026-09-06 acquisition pass at maintainer request ("deeper re-census").
Ground-truth-checked all 24 remaining Tier-1b pages (23 single-sourced) + probed 4 gap targets.
Classified by incumbent design: a 2nd gold only moves the fabric where the incumbent is weak/dated or
an independence trap; recent-gold-MA pages gain only type-E confirmation. Auto-logged queries above.

**Field 3 — adjudication + reason.**
- **Then 2019** mental-demands-at-work -> cognitive decline/dementia SR (`10.1177/0890117119861309`,
  gold SR, 33 cites) -> **SELECTED.** [[Cognitive Stimulation at Work and Dementia]] holds only the
  single Kivimaki cohort; Then (Leipzig LIFE group) is independent -> type-F upgrade (cohort ->
  synthesis). Registered `then2019mentaldemands`.
- **Poultry -> CVD/mortality** Shi 2021 MA (`10.1080/10408398.2021.1975092`, gold) -> **NOTED,
  not selected.** Held Ramel white-meat MA (2023) likely already covers poultry (dominant white meat);
  marginal. Opportunistic only.
- **Strength-training injury (non-Lauersen)** -> **REJECTED (named near-absence).** 5 hits, all low-tier
  single-modality (martial-arts neck, resistance-band shoulder, a dissertation, ACL neuromuscular). No
  independent gold at Lauersen 2013's level -> independence gap stands.
- **Weight cycling / body-weight variability** -> **DEFERRED.** Incumbent Montani 2015 is
  narrative-review (real upgrade target) but the surfacing evidence is individual T2D-stratum cohorts,
  no clean general-population gold MA. Wrong stratum + not gold -> do not substitute; needs a targeted
  MA hunt.
- **\~15 recent-gold-MA Tier-1b pages** -> **NOT ACQUIRED (type-E confirm-only).** Listed in the
  worklist re-census block; a 2nd gold does not move a decision at the margin.

**Field 4 — acquisition-requested + fetch status.** FETCHED: **0**. MAINTAINER-DROP (1 new):
- `10.1177/0890117119861309` — Then mental-demands SR (SAGE / Am J Health Promot, oa=False). Registered
  `then2019mentaldemands` [NOT YET HELD]. Don't-downgrade applied.

**Bias watch.** The re-census deliberately down-ranked its OWN candidate pool: 15 single-source pages
that a naive "single-sourced -> acquire" rule would have flagged were held back as type-E confirm-only,
because the material bar is decision-movement, not source-count. Two near-absences (strength-injury,
weight-cycling-MA) recorded as named zeros rather than filled with a weaker/wrong-stratum source.
- [2026-09-07] openalex search "exercise modality mortality network meta-analysis" -> 0 hits: (none)
- [2026-09-07] openalex search "aerobic resistance combined exercise all-cause mortality meta-analysis" -> 0 hits: (none)
- [2026-09-07] openalex search "aerobic versus resistance exercise all-cause mortality" -> 0 hits: (none)
- [2026-09-07] openalex cites "cites 10.1136/bjsports-2021-105061" -> 29 hits: https://doi.org/10.1136/bjsports-2024-108947; https://doi.org/10.1136/bjsports-2024-108671; https://doi.org/10.1136/bjsports-2024-108369; https://doi.org/10.3390/ijms25136813; https://doi.org/10.1002/jcsm.13772

## [2026-09-07] METHOD-DEMO (not acquisition) — acquisition-engine research

Searches this block were a METHOD demonstration (maintainer request: "how to surface better papers"),
not candidate selection. Field 3/4: nothing adjudicated or acquired. Finding: naive keyword `search`
returned repeated false 0-hits (modality phrasings) — a 0 is a phrasing artifact, not an absence. The
`cites` forward-walk from a held anchor (Momma RT->mortality, 10.1136/bjsports-2021-105061) returned
fetched=200, NEW-goldish=29 — robust where keyword search failed. Proposal filed to backlog.md
(#acq-engines). Candidates surfaced (bjsports-2024-108671 strength+CRF->mortality MA; obr.70031
comparative exercise-type->VAT MA) are NOT yet adjudicated — a later research pass owes the ratchet/
independence gates before any drop.
- [2026-09-07] openalex resolve "10.1136/bmj.m3324" -> 1 hits: https://doi.org/10.1136/bmj.m3324
- [2026-09-07] openalex fetch "10.1136/bmj.m3324" -> 0 hits: (none)

## [2026-09-07] SELECTION RECORD — Engine A full pass (citation-graph anchor walk)

**(1) Query.** `bin/acq_anchor_walk.py --write` — forward-walk OpenAlex `cites` over 12 big-rock anchors
(`wiki/meta/acq-anchors.tsv`: Ekelund PA, Momma MSA, Celis-Morales grip, Naghshi protein, Reynolds
carb-quality, Aune BMI, Estruch PREDIMED, Schwingshackl food-groups, GBD-87-risk-factors, Lincoff
semaglutide, CTT statins, Zhang dementia-umbrella). Filters: goldish, from-year 2019, min-cites 5. New
tool built this session; reuses openalex.py client. Per-anchor query lines auto-logged by the underlying
`_get` calls are NOT emitted (script bypasses `_log`) — hence this hand SELECTION RECORD is the ledger.

**(2) Results.** All 12 anchors resolved. Fetched 4,284 citing works; **473 NEW gold-shaped candidates**
after registry anti-join (434 held DOIs); **15 with co-citation >=2** (cite >=2 of our anchors — the
centrality signal). Full ranked grid -> `wiki/meta/acq-anchor-walk.tsv` (byte-diffable). Per-anchor
new-goldish: Ekelund 73, Reynolds 64, Schwingshackl 68, Lincoff 58, CTT 48, Aune 36, Estruch 36, GBD 33,
Naghshi 30, Celis-Morales 25, Momma 13, Zhang 5.

**(3) Adjudication + reason (ratchet: default CUT; a KEEP tags a rung).**
- **SELECT (1) — `Jayedi - Central Fatness All-Cause Mortality Dose-Response 2020`** (bmj.m3324, gold MA,
  410 cites, co-cites Aune+Schwingshackl). RUNG = gap-fill/upgrade: the held WHR closure (INTERHEART +
  ERFC-WHR) is WHR->CVD *prediction* (attenuated over BMI+lipids+BP); Jayedi is a distinct quantity — a
  gold **dose-response of central adiposity -> all-cause mortality**, not held at MA-grade. Verify
  materiality on read.
- **HOLD/watch (2).** `Marin-Jimenez - Simple Muscular Fitness 2026` (bjsports-2024-109173, 7 cites,
  co-cites Celis-Morales+Momma) — fresh, but [[Grip Strength and Mortality]] is already 2-source with
  thresholds (Lopez-Bueno); no rung cleared, revisit if it accrues cites / the incumbent needs re-nucleus.
  `Ren - GLP-1 RA effect 2025` (dom.16366, co-cites CTT+Lincoff) — GLP-1 fabric dense (30 pages); likely
  confirm/overlap, watch for a distinct-outcome refinement.
- **CUT — confirm-only / covered.** Zheng isocaloric plant-substitution 2022 (Saturated Fat page already
  holds the substitution model — matches the legume-substitution rejection precedent); Uusitupa T2D-prev
  review 2019; Chareonrungrueangchai diet-CVD 2020; Gaesser + Hu grain-cancer 2020/2022 (grain page held);
  Meng SSB 2021; Zargarzadeh legumes 2023; Schwingshackl olive-oil 2019 (shared-lineage, covered). All on
  saturated big-rock cells -> low-ratchet type-E.
- **CUT — off-telos (anchor-precision finding).** GBD-87 anchor pulled heat exposure, air pollution,
  acute pancreatitis, bariatric surgery, drinking-water interventions (ranks 17,18,22,25,26,36) — a
  risk-factor-landscape seed cites everything; low precision for a lifestyle-lever corpus.

**(4) Acquisition-requested.** Jayedi bmj.m3324 -> `fetch` returned **FETCH-FAIL (HTTPError)** at the BMJ
OA PDF; NOT downgraded — handed to maintainer as a walled-drop (pause-and-ask). No other fetches.

**META-FINDING (the pass's product for the "how to surface better papers" method question).** Engine A's
structural reach is **UPGRADES, not GAPS**: forward-citation from big-rock anchors surfaces the well-cited
HUBS adjacent to what we already hold, and a mature corpus already holds those (hence 1 SELECT / 473). It
is the right recall channel for "did a newer/better gold supersede a held incumbent," and near-useless for
"what lever/modality/measurement are we missing" (the graph periphery). The user's gap ask therefore needs
Engine C (measurement/biomarker role-blank finder) and D (exogenous-framework diff), NOT more A. Tuning:
drop or replace the GBD-87 anchor (too broad); anchors should be SPECIFIC big-rock SR/MAs, not landscape
reports.

## [2026-09-07] SELECTION RECORD — Engine C BUILT + full pass (biomarker decision-role matrix)

**(1) Query.** `bin/acq_biomarker_roles.py --write` (audit) + `--search` (acquisition net). New tool +
panel `wiki/meta/acq-biomarkers.tsv` (21 measurements x 4 decision-role axes: predictive / causal[MR] /
modifiable / target[surrogate-vs-outcome]). Deterministic fabric scan (alias x axis-lexicon co-occurrence
over 201 claim pages) + optional OpenAlex broad-`search` per BLANK. Matrix -> `wiki/meta/acq-biomarker-roles.tsv`.

**(2) Results.** 21 measurements. Positive controls fired (grip / LDL-C / ApoB / visceral-fat / uric-acid
HELD across owed axes). 8 BLANK cells, 22 PARTIAL, **10/21 with NO dedicated decision-role page**
(Lp(a), CRP, HbA1c, fasting insulin, ALT, AST, GGT, resting-HR, HRV, homocysteine).

**(3) Adjudication — the pass's headline: the gaps are WEAVE gaps, not ACQUIRE gaps.** A registry check
on each "blank" showed the material is mostly already held, un-assembled:
- **CRP — highest-value WEAVE target (all 4 axes held, no nucleus).** ERFC-2010-CRP (predictive) +
  CCGC-2011-CRP-MR (causal NULL -> CRP is a MARKER not a cause) + CANTOS/Ridker-2017 (inflammation IS
  causal but NO all-cause-mortality benefit -> target-failure) + Belalcazar-2013 (modifiable). The
  registry already tags this the "surrogate-vs-target jewel." A dedicated CRP decision-role nucleus is
  OWED to Weave -> routed (backlog). Pure type-A synthesis latent in held fabric.
- **Liver enzymes (ALT/AST/GGT) — WEAVE/extend, not acquire.** Held embedded in the MASLD cluster (AASLD
  guidance flags ALT-improvement-as-surrogate; Chung fructose->ALT). Panel undercounted (strict aliases;
  the term-absence!=finding-absence caveat firing). Possible thin cell: GGT as a STANDALONE mortality
  marker (a GGT/NAFLD->CVD MA jhep.2016.05.013, 1445 cites) — verify-then-decide.
- **RHR / HRV — WEAVE/ingest, not acquire.** 0 claim-page mentions but Aune-RHR-2017 + Jarczok-HRV held
  (fitness-review Cluster-1 ACQUIREs); the sources exist, the fabric doesn't -> weave them in.
- **HbA1c, fasting insulin/HOMA-IR — WEAVE/extend.** Embedded (Insulin Resistance Surrogates page);
  marker-vs-target appraisal (ACCORD glycaemic-target-failure) not assembled.
- **Lp(a) — the one plausible thin ACQUIRE.** Held only via ESC-EAS-2025 as risk-modifier; a dedicated
  Lp(a)->outcome MR/SR is a genuine candidate (genetically-set, causal, new lowering agents). Verify.
- **homocysteine — causal cell.** The classic MR-null / B-vitamin-lowering-fails teaching case; broad
  search too noisy to surface the specific MR -> targeted acquire later.

**(4) Acquisition-requested.** NONE fetched. Registry check showed the big cells held; nothing cleared a
clean new-acquire bar. Flagged for maintainer verify-then-acquire: a dedicated Lp(a)->outcome MR/SR, and
GGT-as-standalone-mortality-marker (jhep.2016.05.013). No downgrade.

**META-FINDING (Engine C).** Complements Engine A exactly. A = "did a newer gold supersede a held big
rock" (upgrade channel, center of graph). C = "is each MEASUREMENT appraised for its decision role"
(periphery). C's yield here is that the corpus's biomarker weakness is ASSEMBLY not COVERAGE — 10/21
measurements lack a decision-role nucleus though the sources are largely held. The fix is mostly WEAVE.
**Tuning:** the deterministic matrix is robust; the `--search` net (OpenAlex broad `search` param =
title+abstract+fulltext) is high-recall/LOW-precision (pulled "great outdoors" for HRV, "toxic metals"
for homocysteine) — ranks by total cites, so an off-topic mega-cited paper mentioning the term wins.
Before C's search half is a clean acquisition net it needs a required-outcome token or a title.search
fallback. Panel aliases also undercount (liver enzymes) -> widen cautiously.

## [2026-09-07] SELECTION RECORD — Engine B (comparative-effectiveness / modality) full pass

**(1) Query.** Channel: `bin/acq_comparative.py --search --from-year 2016` — per SILOED/THIN cell an
OpenAlex broad-`search` query `<variant1> <variant2> network meta-analysis`, goldish-filtered, anti-joined
vs the registry. Deterministic half: 15 named-variant exposures x the held claim graph (201 pages), graded
COMPARED / SILOED / THIN by variant-co-occurrence-near-a-comparison-token (proximity window 400 chars).

**(2) Results.** Matrix: 5 COMPARED, 8 SILOED, 2 THIN (`wiki/meta/acq-comparative.tsv`). `--search` fetched
25/cell; nearly all hits were boilerplate methodology (PRISMA 2020, RoB-2, AMSTAR-2, PRISMA-DTA) or
off-topic mega-cited (frailty, depression indices, caffeine, wearables) — the broad-param + cited-by sort
failure. The one on-topic surfaced hit (sweetener umbrella `bmj.k4718`, Toews) is already held via WHO-NSS
2023 and is sweetener-vs-none, not a which-sweetener NMA. `fibre-type` returned 0 new goldish.

**(3) Adjudication + reason.**
- THIN **RT-equipment** (calisthenics vs machines vs free weights) — SELECTED as a targeted future acquire.
  Genuine external gap (0 variants in the whole claim graph, verified by loose grep — not an alias miss),
  user-named, HIGH decision-materiality (changes the PICK), and comparative RCTs/MAs demonstrably exist.
  Routed to `acquisition-worklist.md`; NOT auto-fetched (broad search too noisy to trust the top hit).
- THIN **RT-structure** (training splits) — REJECTED for acquire. Coaching-lore, small-effect, heavily
  discussed (attention-anti-signal); NAME-only gap.
- SILOED **sweetener-type** — REJECTED. Genuine insufficient-evidence state (no head-to-head hard-outcome
  gold exists); a G-gap, not acquirable.
- SILOED **protein-source, vitaminD-form** — REJECTED (low materiality: surrogate/MPS pick barely moves a
  patient-important outcome).
- SILOED **fibre-type, dietary-pattern** — DEFERRED to WEAVE (variant pieces held; needs a comparison
  synthesis, not a new source).
- SILOED **aerobic-modality, balance-training, fasting-modality** — DEFERRED, verify-by-reading. The
  acquisition-worklist already independently records exercise-modality thinness (single-modality low-tier
  studies; independence gap stands), corroborating the SILOED read; a clean comparative gold is not yet
  identified. No downgrade.

**(4) Acquisition-requested.** NONE fetched this pass. One routed to the worklist for a targeted hand-search
(RT-equipment machine/free-weight/calisthenics comparative gold). No source downgraded or substituted.

**META-FINDING (Engine B).** Third of three orthogonal acquisition lenses, all now built and run: A =
upgrade channel (graph center), C = measurement decision-role (periphery), B = the PICK among named variants
(comparative-effectiveness). The positive control earned its keep — RT-load-scheme caught TWO real grading
bugs (same-page false-COMPARED that HID a real gap; a hard-wrap-split NMA token invisible to the matcher).
All three engines converge on the same honest verdict on a mature corpus: the yield is overwhelmingly
WEAVE/verify, not acquire. The one shared tuning debt (B+C) is the `--search` broad-param noise; the
deterministic matrices are the robust deliverable. Only Engine D (exogenous framework diff) can reach a
*missing branch* the held fabric never named — the others all diff against what is already held.

## [2026-09-07] SELECTION RECORD — Engine E (bibliographic coupling) full pass

**(1) Query.** Channel: `bin/acq_coupling.py --write` — per held anchor gold (12, `acq-anchors.tsv`) fetch
its `referenced_works`, rarity-band the refs to [floor=3, ceiling=8000] cites, use the 20 rarest as
`referenced_works:` OR-seeds, keep goldish + registry-anti-joined candidates, then score each by weighted
shared-primary overlap (1/log2(cites+2)) against the anchor's usable refs, aggregated across anchors.

**(2) Results.** 12/12 anchors resolved; NEW coupled-gold pool = 547 (23 coupled to >=2 anchors)
-> `wiki/meta/acq-coupling.tsv`. Two grading fixes, both caught by inspecting the first full pass:
(i) a **rarity FLOOR** — a `cited_by_count==0` (unindexed) shared ref scored MAXIMAL under naive IDF
(1/log2(2)=1.00), floating off-topic junk (COVID-lab, Google-Earth-Engine, greenwashing papers coupling
to CTT/GBD on one 0-cite ref) to the top; dropping refs < 3 cites removed the entire phantom cluster;
(ii) a **method-title candidate exclusion** (PRISMA / AMSTAR / Handbook of Research Synthesis / reporting-
items) — those couple via shared METHOD citations, not primaries. After both, the ranking is \~all genuine
sibling golds. Note CTT, which looked like a bad anchor pre-fix, is a STRONG one post-fix (surfaces the
statin/LDL-lowering safety-MA sibling pool: Reith 2022/2024, intensive-LDL trials).

**(3) Adjudication + reason.** The pool is the ACQUIRE-yielding census (unlike A/B/C's mostly-WEAVE
verdicts) BUT needs two triage layers the tool does not fully automate:
- **Rejected-list resurfacing.** The tool anti-joins the REGISTRY, not `rejected-sources.md`, so a known
  reject reappears: Jayedi-fish-2018 (rank 24) was already rejected as a concurring echo superseded by the
  held Jayedi-2020 umbrella. -> tool enhancement noted (anti-join rejected DOIs).
- **The ratchet.** Many food-group->mortality siblings coupling to the held Schwingshackl food-groups
  program re-pool the SAME primaries -> LOW-ratchet type-E, not acquires. SELECT only newer/bigger /
  independent-body / distinct-outcome.
- **SELECTED (routed to acquisition-worklist, verify-then-drop, NOT auto-fetched):**
  (1) **Ma 2024 macronutrient intake -> CVD** (`10.3390/nu16010152`) — 2024, cross-anchor (Naghshi 37
  shared refs / Reynolds / Schwingshackl); newest, spans protein+carbohydrate+food-groups; top candidate.
  (2) **Boushey 2020 USDA DGAC dietary-patterns -> all-cause mortality** (`10.52570/nesr.dgac2020.sr0108`)
  — 31 shared with Schwingshackl but a DIFFERENT institutional body (USDA) -> candidate type-E independent
  backing and/or a decomposition-audit Pass-2 source.
  (3) **Reith statin-safety** (`10.1016/s0140-6736(22)01545-8` muscle; `10.1016/s2213-8587(24)00040-8`
  new-onset diabetes) — pharmacotherapy-taper (statin LIMITATIONS), directly telos-relevant; VERIFY
  CTT/CTSU-collaboration independence before claiming type-E (likely same Oxford school -> not independent,
  still valuable as the statin-harms appraisal the LDL pages may lack).
- **DEFERRED — the food-group sibling vein** (Zargarzadeh legume 2023, Naghshi dairy 2021, Becerra-Tomas
  nuts, Jin dairy/cancer, Shirota Japanese-diet, Soltani Med/DASH): each a candidate type-F/E on a held
  food-group page; low-ratchet unless it beats the held incumbent on recency/size. Opportunistic, not this
  pass. No downgrade.

**(4) Acquisition-requested.** NONE fetched. Three routed to `acquisition-worklist.md` for a verify-then-
drop maintainer decision. No source downgraded or substituted.

**META-FINDING (Engine E).** The engine A structurally could not be. A walks `cites` FORWARD from an anchor
-> newer works CITING it (upgrade/center channel). E finds the SIBLING gold that answers the same question
off the SAME primaries and never cites ours — golds are citation sinks, rivals do not cite each other.
Result: E is the one new-code engine whose native yield is ACQUIRE, not WEAVE, because it targets exactly
what a mature center does not already hold (parallel reviews off the shared evidence base). Rarity-weighting
is load-bearing: without the floor+ceiling band the signal drowns in shared method boilerplate. Four of the
five acquisition lenses now built (A upgrade / B comparative-pick / C measurement-role / E coupling-sibling);
only D (exogenous framework diff — missing BRANCHES) remains, and it is the only one reaching a gap the held
fabric never named.

## [2026-09-07] RECORD — Engine D (exogenous framework diff) full sweep

**(1) Query.** Channel: `bin/acq_framework_diff.py --write` — a DETERMINISTIC fabric-coverage diff (no
OpenAlex; D is a diff, not a search). Panel `wiki/meta/acq-frameworks.tsv` = 36 branches across five
authoritative EXTERNAL decompositions the corpus never ingested as decomposition sources: AHA Life's
Essential 8 (Lloyd-Jones 2022), ACLM Lifestyle-Medicine 6 pillars (Rippe 2018), Hallmarks of Aging
(Lopez-Otin 2023, 12), ACSM exercise-prescription components (FITT-VP), WHO intrinsic-capacity domains
(2020). Each branch scope-tagged IN / MECH / EDGE; graded COVERED / THIN / MISSING vs the 201-page claim
graph (+ hubs/index for navigational coverage).

**(2) Results -> `wiki/meta/acq-framework-diff.tsv`.** Positive control PASSES: every big rock (diet, PA,
smoking, sleep, adiposity, lipids, glucose, BP, aerobic, resistance) reads COVERED with a real dedicated
page. Census: **IN-scope MISSING = 0. IN-scope THIN = 0. EDGE MISSING = 0.** The only MISSING = 8
molecular hallmarks, ALL scope=MECH (genomic instability, telomere attrition, epigenetic alterations,
proteostasis, senescence, stem-cell exhaustion, intercellular communication, macroautophagy) — EXPECTED,
because the telos holds mechanism directional-only, never a page-per-hallmark. The modifiable-hook
hallmarks ARE covered (nutrient-sensing via Exercise-vs-CR, chronic inflammation, dysbiosis via Fermented
Foods). Even peripheral EDGE branches covered: social connection, psychological (Depression), sensory
(Hearing Loss and Dementia).

**(3) Adjudication.** NOTHING to acquire — no in-scope branch is absent. This is a "convention held here"
result (as reportable as a divergence, per the symmetric-standards rule; a gap-finder scored on finding
gaps would manufacture them, and D found none). No worklist entry.

**(4) Acquisition-requested.** NONE. No missing branch in scope.

**META-FINDING (Engine D) — and the honest bound on it.** At BRANCH granularity the fabric's coverage of
the modifiable-exposure decision space is COMPLETE against five independent external frameworks. This is
strong EXOGENOUS corroboration that the breadth phase has largely done its job — the check designed to
find absent branches finds none in scope. **But three bounds, stated so the clean audit is not laundered
into a validity claim:** (i) COVERAGE != QUALITY — D grades whether a branch is ADDRESSED, not whether it
is addressed well (a COVERED branch can still be single-source / stale / thin; that is A/C/E/ratchet-audit
territory, not D's); (ii) GRANULARITY — D works at BRANCH level; Engine B found real gaps one level FINER
(the comparative head-to-head WITHIN resistance training: RT-equipment/RT-structure) that are CELLS, not
branches, so "no missing branch" is fully consistent with "missing comparison cells"; (iii) FIVE
frameworks is a sample, not the universe (the exposome / environmental frameworks were deliberately
excluded — off the telos's single health axis). **Strategic read:** all five acquisition engines (A/B/C/D/E)
now built; the empirical verdict is that on a mature, breadth-complete corpus the marginal yield has moved
from ACQUIRE to WEAVE/verify/deepen — E is the last strong acquire channel (sibling golds), and D says the
remaining work is depth and quality within held branches, not new branches. D is a RUN-ONCE sweep; do not
re-run on cadence (its answer changes only when a new external framework is added to the panel).
- [2026-09-07] openalex resolve "10.3390/nu16010152 10.52570/nesr.dgac2020.sr0108 10.1016/s0140-6736(22)01545-8 10.1016/s2213-8587(24)00040-8" -> 4 hits: https://doi.org/10.3390/nu16010152; https://doi.org/10.52570/nesr.dgac2020.sr0108; https://doi.org/10.1016/s0140-6736(22)01545-8; https://doi.org/10.1016/s2213-8587(24)00040-8
- [2026-09-07] openalex fetch "10.3390/nu16010152" -> 0 hits: (none)
- [2026-09-07] openalex fetch "10.52570/nesr.dgac2020.sr0108" -> 0 hits: (none)

## [2026-09-07] SELECTION RECORD — Engine E top SELECTs, real acquisition pass

Maintainer approved running Engine E's (bibliographic-coupling) top SELECTs as a real acquisition pass
(discovery/vet/acquire to `inbox/`, not ingest). Four DOIs from `acquisition-worklist.md` Engine-E block.

**(3) Adjudication.** All four resolve gold/high, all OA=True — SELECTED on tier + fit:

- **SELECTED — Ma 2024** `10.3390/nu16010152` (meta-analysis, cites=43). Dietary macronutrient intake ->
  CVD risk/mortality. Newest + broadest coupling sibling (Naghshi 37 shared refs, Reynolds, Schwingshackl);
  spans protein + carb + food-group. Highest priority.
- **SELECTED — Boushey 2020** `10.52570/nesr.dgac2020.sr0108` (systematic review, cites=37). USDA NESR
  dietary-patterns -> all-cause mortality. DIFFERENT body (USDA) from Schwingshackl despite 31 shared refs
  -> candidate type-E independent backing + a Pass-2/Engine-D exogenous decomposition source.
- **SELECTED — Reith 2022** `10.1016/s0140-6736(22)01545-8` (IPD meta-analysis, cites=261). Statin therapy
  -> muscle symptoms. Pharmacotherapy-taper LIMITATION for the LDL/statin pages. NOTE: verify CTT/CTSU-Oxford
  independence before any type-E claim (likely same school -> NOT independent; still a harms appraisal the
  LDL pages may lack).
- **SELECTED — Reith 2024** `10.1016/s2213-8587(24)00040-8` (meta-analysis, cites=152). Statin therapy ->
  new-onset diabetes / worsening glycaemia. Same pharma-taper harms channel; same CTSU independence caveat.

No REJECT/DEFER this pass — the SELECT set was pre-vetted in the worklist; the LOW-ratchet food-group
sibling vein (Soltani/Naghshi-dairy/Becerra/Jin) was correctly NOT pulled.

**(4) Acquisition-requested — ALL FOUR BLOCKED (HTTP 403), maintainer-drop.** Egress confirmed live
(biorxiv/example.com 200), so this is per-host anti-bot blocking, not a network wall. Ladder exhausted per
source: plain `openalex fetch` -> `fetch_browser.py` headless -> browser-UA curl, all 403:

- `10.3390/nu16010152` (MDPI) — 403 plain + headless + UA-curl. PDF: https://www.mdpi.com/2072-6643/16/1/152/pdf
- `10.52570/nesr.dgac2020.sr0108` (USDA nesr.usda.gov) — 403 even on direct curl with browser UA. PDF:
  https://nesr.usda.gov/sites/default/files/2020-07/DP-dietary-patterns-all-cause-mortality%20-%20SR_0.pdf
- `10.1016/s0140-6736(22)01545-8` (Lancet — documented hard-403 host) — maintainer-drop. PDF:
  http://www.thelancet.com/article/S0140673622015458/pdf
- `10.1016/s2213-8587(24)00040-8` (Lancet Diabetes Endocrinol — same) — maintainer-drop. PDF:
  http://www.thelancet.com/article/S2213858724000408/pdf

Per the acquisition-pause-and-ask rule, STOPPED rather than downgrading to a weaker fetchable source. All
four are identified, not lost — DOIs recorded above; maintainer drops the PDFs into `inbox/`, then
`process inbox` stages them. `--service steel` (cloud browser) not attempted — it needs maintainer opt-in.
- [2026-09-08] openalex search "protein timing muscle strength hypertrophy meta-analysis" -> 1 hits: https://doi.org/10.1186/1550-2783-10-53
- [2026-09-08] openalex search "dietary fiber cognitive decline dementia meta-analysis" -> 0 hits: (none)
- [2026-09-08] openalex search "protein timing resistance training systematic review" -> 0 hits: (none)
- [2026-09-08] openalex search "nutrient timing muscle meta-analysis" -> 0 hits: (none)
- [2026-09-08] openalex search "protein supplementation timing resistance" -> 3 hits: https://doi.org/10.1123/ijsnem.2023-0118; ?; https://doi.org/10.14428/ebr.v1i2.9603
- [2026-09-08] openalex search "dietary fiber cognitive systematic review" -> 0 hits: (none)
- [2026-09-08] openalex search "fiber cognition meta-analysis" -> 0 hits: (none)
- [2026-09-08] openalex search "dietary fiber dementia" -> 6 hits: https://doi.org/10.1080/1028415x.2022.2027592; ?; https://doi.org/10.1186/s12883-025-04583-w; https://doi.org/10.1212/wnl.0000000000215982; ?
- [2026-09-08] openalex search "dietary fiber cognitive function meta-analysis" -> 0 hits: (none)
- [2026-09-08] openalex search "fiber intake cognitive impairment" -> 1 hits: https://doi.org/10.1371/journal.pone.0291690
- [2026-09-08] openalex search "dietary fiber cognitive decline" -> 2 hits: https://doi.org/10.1007/s10571-022-01268-7; https://doi.org/10.1002/trc2.70292
- [2026-09-08] openalex resolve "10.1123/ijsnem.2023-0118" -> 1 hits: https://doi.org/10.1123/ijsnem.2023-0118
- [2026-09-08] openalex search "protein timing muscle" -> 15 hits: https://doi.org/10.1111/j.1469-7793.2001.00301.x; https://doi.org/10.1186/1550-2783-10-53; https://doi.org/10.1186/1550-2783-5-5; https://doi.org/10.1139/h10-017; https://doi.org/10.1093/jn/nxaa049
- [2026-09-08] openalex resolve "10.1093/jn/nxaa049 10.1016/j.arr.2024.102325" -> 2 hits: https://doi.org/10.1093/jn/nxaa049; https://doi.org/10.1016/j.arr.2024.102325
- [2026-09-08] openalex search "fiber cognitive umbrella review" -> 0 hits: (none)
- [2026-09-08] openalex search "fiber cognitive impairment systematic review" -> 0 hits: (none)
- [2026-09-08] openalex search "whole grain cognitive decline meta-analysis" -> 0 hits: (none)
- [2026-09-08] openalex search "dietary fiber brain health" -> 1 hits: https://doi.org/10.1016/j.cdnut.2024.103435
- [2026-09-08] openalex search "fibre cognitive decline" -> 5 hits: https://doi.org/10.62162/sssp117411; https://doi.org/10.1093/braincomms/fcae018; https://doi.org/10.1093/ageing/afac329; https://doi.org/10.13140/rg.2.2.25000.72965; https://doi.org/10.1136/jnnp.2010.226340.126
- [2026-09-08] openalex search "dietary fiber cognition older adults" -> 0 hits: (none)
- [2026-09-08] openalex fetch "10.1186/1550-2783-10-53" -> 0 hits: (none)
- [2026-09-08] openalex fetch "10.1093/jn/nxaa049" -> 0 hits: (none)
- [2026-09-08] openalex fetch "10.1016/j.arr.2024.102325" -> 0 hits: (none)

- [2026-09-08] web search "dietary fiber intake cognitive decline dementia systematic review meta-analysis prospective cohort" -> hits: JPHC Disabling Dementia (pubmed 41605675, cohort); NHANES fiber-cognition cross-sectional (S0002934322002583); Dairy->cognition SR+MA (PMC10788406, OFF-TARGET dairy); Whole-Dietary-Patterns->cognition SR (PMC9865080, patterns not fibre); nutrition-intake->cognitive-impairment SR *protocol* (PMC10309612, not yet completed); fibre-based vegetarian-score cohort (PMC13243213). NO completed fibre-SPECIFIC gold SR/MA surfaced.

## [2026-09-08] SELECTION RECORD — WS-001 protein/nutrient TIMING + WS-014 fibre->cognition/dementia

### WS-001 — protein / nutrient timing around resistance exercise -> muscle mass/strength

**SELECTED (landmark, best fit-to-question):** Schoenfeld, Aragon & Krieger 2013, "The effect of protein
timing on muscle strength and hypertrophy: a meta-analysis", J Int Soc Sports Nutr, DOI
10.1186/1550-2783-10-53 (gold/MA, OA, 197 cites). This IS the conceptual pivot the fabric owns — the
apparent peri-workout timing benefit attenuates/vanishes once TOTAL daily protein is matched between
groups. Directly answers "does timing matter once total protein is adequate."
Slug: `Schoenfeld - Protein Timing Muscle Strength Hypertrophy Meta-Analysis 2013`.

**SELECTED (recency updater, general adults):** Wirth, Hillesheim & Brennan 2020, "The Role of Protein
Intake and its Timing on Body Composition and Muscle Function in Healthy Adults: A Systematic Review and
Meta-Analysis of Randomized Controlled Trials", J Nutr, DOI 10.1093/jn/nxaa049 (gold/MA, OA, 85 cites).
Newer gold MA, RCTs, HEALTHY-ADULT scope (matches the fabric's default stratum), isolates the timing
question alongside total intake. Best modern complement to the 2013 landmark.
Slug: `Wirth - Protein Intake Timing Body Composition Muscle Function Meta-Analysis 2020`.

**DEFERRED:** Hettiarachchi et al. 2024, "The effect of dose, frequency, and timing of protein
supplementation on muscle mass in older adults: a systematic review and meta-analysis", Ageing Research
Reviews, DOI 10.1016/j.arr.2024.102325 (gold/MA, PAYWALLED no OA, 12 cites). Most RECENT gold MA but
scoped to OLDER ADULTS (an effect-modification stratum), not the general timing-once-adequate question.
Acquire only if the aging-stratum arm is wanted; paywalled -> would also need maintainer-drop.

**REJECTED:** ijsnem.2023-0118 (2023 MA, oa=False) — narrower "types + timing of supplementation" framing,
subsumed by Wirth 2020 + Schoenfeld 2013, and paywalled; not a ratchet-advancer over the two SELECTED.
Older single acute/mechanistic studies (Tipton 2001, Cribb 2008, Esmarck) — primary studies below the
gold-gate, superseded by the MAs. Conference abstract ebr.v1i2.9603 — not an SR/MA.

**Acquisition-requested / fetch status — BOTH SELECTED BLOCKED -> MAINTAINER-DROP (did NOT downgrade):**
- Schoenfeld 2013 (10.1186/1550-2783-10-53): plain fetch tandfonline HTTPError; PMC (PMC3879660) anti-bot
  interstitial; Europe PMC render HTTP 520. Genuinely full-OA (JISSN) but every automated route blocked.
- Wirth 2020 (10.1093/jn/nxaa049): plain fetch ScienceDirect HTTPError (known hard IP-wall).
Both identified not lost — DOIs recorded; maintainer drops PDFs into inbox/, then process-inbox stages.
`--service steel` not attempted (needs maintainer opt-in).

**RESOLVED 2026-09-08 — maintainer dropped both PDFs; process-inbox done.** Staged to `raw/binary/` under
the canonical (shortened) registry slugs `Schoenfeld - Protein Timing Muscle Strength Hypertrophy`
(`schoenfeld2013`) + `Wirth - Protein Timing Body Composition` (`wirth2020`), both gold, registered,
ingest-queue block added. Both text-native (no OCR). Not ingested — awaiting `ingest-seq`.

### WS-014 (fibre arm) — dietary fibre -> cognitive decline / dementia

**FINDING: THIN FIELD — no gold SR/MA/umbrella exists on the fibre-SPECIFIC arm.** OpenAlex + web
discovery surfaced only individual prospective cohorts (JPHC Disabling Dementia 2022/2026; CIRCS
Yamagishi 2022, 10.1080/1028415x.2022.2027592; KoGES-CKD PLoS ONE 2023, 10.1371/journal.pone.0291690;
NHANES cross-sectional; Age&Ageing ApoE-interaction cohort 2023, 10.1093/ageing/afac329) plus mechanistic
/prebiotic gut-brain reviews (10.1007/s10571-022-01268-7; cdnut.2024.103435). Completed SR/MAs exist only
at the DIETARY-PATTERN level (PMC9865080) or off-target nutrient (dairy, PMC10788406); a nutrition->cognitive-
impairment SR is registered only as a PROTOCOL (PMC10309612). No SELECTED acquisition — a fibre-specific
gold SR/MA is not yet in the literature. Record as a G-gap (directional cohort signal, no SR to ratchet);
do NOT downgrade to a single cohort. Re-check on the next pass (the protocol PMC10309612 may complete).

**Zero-hit queries (all title.search strictness, not literature-absence per se):** "dietary fiber
cognitive decline dementia meta-analysis", "dietary fiber cognitive systematic review", "fiber cognition
meta-analysis", "dietary fiber cognitive function meta-analysis", "fiber cognitive umbrella review",
"fiber cognitive impairment systematic review", "whole grain cognitive decline meta-analysis", "dietary
fiber cognition older adults". Broadening to any-type/sort-cites returned only the cohorts/reviews above —
so the 0s reflect a genuine ABSENCE of a fibre-specific SR/MA, confirmed by the broad passes, not merely
strict title matching.

## [2026-09-08] SELECTION RECORD — acquisition-engine sweep (A/B/C/D/E), depth-phase

**(1) Query.** Ran all five acquisition engines (maintainer request: "identify additional high-value
acquisitions"). Channels: Engine A `acq_anchor_walk` (OpenAlex forward-`cites` over 12 anchor golds,
from-year 2019, min-cites 5, goldish); Engine E `acq_coupling` (OpenAlex bibliographic coupling —
rarity-weighted shared-primary overlap per anchor, from-year 2018); Engine B `acq_comparative --search`
(OpenAlex NMA query per SILOED/THIN modality cell); Engine C `acq_biomarker_roles --search` (OpenAlex
broad `search` per BLANK biomarker x decision-role cell); Engine D `acq_framework_diff` (LOCAL, no API —
exogenous decomposition diff vs AHA LE8 / ACLM pillars / Hallmarks of Aging / ACSM Rx / WHO intrinsic
capacity). All anti-joined against the 441 registry DOIs.

**(2) Results.**

- **A:** 12/12 anchors resolved; NEW candidate pool = 467; co-citation >=2 = 14. Top co-cited cluster =
  Mediterranean/DASH/whole-grain/legume/GLP-1 reviews on already-dense nuclei.
- **E:** NEW coupled-gold pool = 548; coupled to >=2 anchors = 21; 9 soft-match rejected-sources
  (triage hint). Same topical clustering as A (Med-diet / PA-mortality / grains).
- **D:** IN-scope MISSING = 0, IN-scope THIN = 0, EDGE MISSING = 0; MECH MISSING = 8 (EXPECTED — telos
  holds the aging hallmarks directional-only, not a page-per-hallmark). Corpus breadth-complete on
  exogenous frameworks confirmed (re-confirms 2026-09-07 acquisition-engines-complete finding).
- **B:** SILOED cells real (aerobic-modality, dietary-pattern, fasting, protein-source, sweetener-type,
  vitaminD-form) + 2 THIN (RT-equipment, RT-structure). `--search` hits mostly OFF-TARGET noise
  (PRISMA/RoB2/AMSTAR2 method boilerplate; topic-drift to sleep/depression/breath-control). On-target
  signal: NSS umbrella `10.1136/bmj.k4718` (Toews) and vit-D IPD `10.3310/hta23020` (Martineau ARI).
- **C:** BLANK cells = 7 (ALT:TARGET, GGT:PREDICTIVE/MODIFIABLE, resting-HR x2, HRV x2); PARTIAL = 23;
  biomarkers with NO dedicated page = 10/21 (Lp(a), CRP, HbA1c, fasting insulin, ALT, AST, GGT,
  resting-HR, HRV, homocysteine). `--search` hits noisy (great-outdoors/breath-control for HRV);
  on-target: GGT->NAFLD/CVD `10.1016/j.jhep.2016.05.013`.

**(3) Adjudication + reason.** Depth-phase reading: the graph engines (A/E) overwhelmingly surface
type-E CONFIRM-ONLY reviews on already-dense nuclei (Med-diet has 6+ held sources incl. a 09-05
self-review; PA-mortality, whole-grain-mortality similarly saturated) — DEFER as confirm-only, low
marginal value. The genuine depth-upgrade targets are SINGLE-SOURCE pages an engine hit can upgrade:

- **SELECT — Zargarzadeh legume->all-cause mortality `10.1016/j.advnut.2022.10.009`** (A rank 11,
  co-cited Reynolds+Schwingshackl). 2nd independent gold on [[Whole Grains Refined Grains and Pulses]] /
  the sole-source legume cell (only Thorisdottir held). Depth-phase type-E/F. NOT in rejected-sources.
- **SELECT — Chiavaroli DASH cardiometabolic `10.3390/nu11020338`** (A rank 23, 541 cites). Upgrades the
  DATED sole incumbent on [[DASH Diet and Blood Pressure]] (only Siervo 2015). Type-F. CAVEAT: Chiavaroli
  is Toronto/Sievenpiper school (co-author on held Semnani-Azad) -> verify type-E independence at ingest.
- **DEFER (moderate) — Gaesser `10.3390/nu12123756` / Hu `10.1016/j.ajcnut.2022.10.010`** whole-vs-refined
  grains + CANCER. Would extend [[Whole Grains Refined Grains and Pulses]] beyond Aune's mortality focus
  onto a cancer outcome (type-F). Held page not single-source, so lower priority than legume/DASH.
- **DEFER (targeted research, not an engine hit) — a dedicated Lp(a) MR/SR.** Engine C flags Lp(a) as
  no-dedicated-page, but it is NOT unheld: treated inside [[LDL ApoB and Cumulative Exposure]] + the
  Blood Lipids and ApoB deliverable + [[Risk Modifiers - When Extra Information Changes a Risk Estimate]].
  So this is a NUCLEUS-SPLIT / weave question (does the screen-once, non-modifiable, drug-in-trials
  decision deserve its own page?), NOT an acquisition gap. Route to Weave, not research, unless the split
  surfaces a missing gold.
- **REJECT (noise) — all B/C `--search` method-boilerplate + topic-drift hits** (PRISMA/RoB2/AMSTAR2/
  great-outdoors/breath-control). The value of B/C is the STRUCTURAL cell map, not the raw search hits;
  a real SILOED/BLANK fill needs a hand-built targeted query, not these.
- **GAP (do-not-acquire) — HRV / resting-HR as decision markers.** Expectancy weak: unclear a gold SR
  establishes predict + lever-moves + acting-changes-outcome for a reasonably-healthy stratum. Named gap.
- **NAMED (structural) — the SILOED comparative cells** (aerobic modality; weight-loss-diet head-to-head;
  fasting schedule; protein source; sweetener type; vit-D form) each need a targeted NMA/head-to-head
  query. Higher-value than the confirm-only golds but each is a separate `research` episode.

**(4) Acquisition-requested / PROMOTED.** Both SELECTs were PROMOTED the same day — maintainer dropped
the two PDFs (pre-empting a `research` fetch), process-inbox done:

- **PROMOTED -> STAGED — Zargarzadeh legume->mortality** `10.1016/j.advnut.2022.10.009` (`zargarzadeh2023`,
  gold dose-response SR+MA, Adv Nutr 2023). Registered, chunk-clean (2 chunks, text-native), queued.
  Independence CAVEAT confirmed on read: Dagfinn Aune is a co-author -> NOT type-E-independent of held
  Aune umbrellas (coref by slug, corroboration only).
- **PROMOTED -> STAGED — Chiavaroli DASH umbrella** `10.3390/nu11020338` (`chiavaroli2019`, gold
  umbrella-review, Nutrients 2019). Registered, chunk-clean (2 chunks, text-native), queued. Independence
  CAVEAT confirmed on read: Toronto/Sievenpiper + Salas-Salvado/Kendall school -> NOT type-E-independent
  of held PREDIMED/Sievenpiper sources.

Both STAGED not ingested (ingestion is a separate delegated op). Neither was already registered nor in
rejected-sources. The remaining engine candidates stay DEFERRED/GAP/REJECTED as adjudicated in (3).
- [2026-09-08] acq-engine D framework-diff (offline) [covered-min=4 branches=36] -> IN-MISSING=0 IN-THIN=0 EDGE-MISSING=0 MECH-MISSING=8 | top: (0 IN-scope missing) pool-tsv=NONE(run --write for full pool)
- [2026-09-08] acq-engine A anchor-walk [from-year=2019 min-cites=5 goldish=True anchors-resolved=12/12] -> candidates=467 co-cited>=2=14 held-dropped=441 | top: 10.3390/nu11112611; 10.1186/s12916-022-02328-x; 10.3390/nu12041088; 10.3390/nu12123756; 10.3390/nu13082636 pool-tsv=NONE(backfilled; runs predate the log wiring)
- [2026-09-08] acq-engine E coupling [from-year=2018 seeds=20 ceiling=8000 anchors-resolved=12/12] -> candidates=548 coupled>=2=21 held-dropped=441 rejsrc-soft=9 | top: 10.1093/advances/nmz041; 10.1186/s12937-020-00554-8; 10.1017/s0007114518002593; 10.3390/nu14102008; 10.1093/advances/nmab135 pool-tsv=NONE(backfilled; runs predate the log wiring)
- [2026-09-08] acq-engine B comparative [search=True] -> SILOED=7 THIN=3 COMPARED=n/r | top: SILOED:aerobic-modality; SILOED:balance-training; SILOED:dietary-pattern; SILOED:fasting-modality; SILOED:protein-source pool-tsv=NONE(backfilled; --search hits noisy, structural cells are the signal)
- [2026-09-08] acq-engine C biomarker-roles [search=True] -> BLANK-cells=7 PARTIAL-cells=23 no-dedicated-page=10/21 | top: ALT:TARGET; GGT:PREDICTIVE; GGT:MODIFIABLE; resting-HR:PREDICTIVE; HRV:PREDICTIVE pool-tsv=NONE(backfilled; runs predate the log wiring)
- [2026-09-08] acq-engine F exposure-census [search=True exposures=91 scope=all from-year=2015] -> IN-GAP=13 IN-EMBEDDED=20 IN-NUCLEUS=41 EDGE-open=12 MECH-open=2 | top: GAP:Nordic diet; GAP:Portfolio diet; GAP:MIND diet; GAP:Spices curcumin; GAP:Zinc pool-tsv=/workspaces/nutrition/wiki/meta/acq-exposure-census.tsv

## [2026-09-08] SELECTION RECORD -- Engine F exposure-space census (first run)

**Why built.** A/B/C/E are ENDOGENOUS (anchored to held golds); D's exogenous panel is only 5 named
frameworks. So the suite was structurally blind to any modifiable exposure the fabric holds no anchor
for. Engine F closes that: it grades an EXOGENOUS 91-exposure taxonomy (GBD risk factors, ISSN
ergogenic stands, WCRF food groups, ACSM modalities, environmental exposome) against the claim graph.
This is the mechanism answer to the maintainer's "where do we find more gold sources to mature the
fabric" -- a repeatable census, not a one-off. Panel: `wiki/meta/acq-exposures.tsv`; full pool:
`wiki/meta/acq-exposure-census.tsv`.

**(1) Query.** channel = the exogenous panel + claim-graph coverage grade (title=NUCLEUS /
body-mention=EMBEDDED / absent=GAP), scope-tagged IN/EDGE/MECH per telos; `--search` runs one broad
OpenAlex goldish SR/MA query per IN-scope GAP (from-year 2015, title-relevance post-filter).

**(2) Results.** census of 91 exposures vs 41 NUCLEUS + 20 EMBEDDED + 13 GAP IN-scope (12 EDGE-open,
2 MECH-open). The 13 IN-GAPs: Nordic diet, Portfolio diet, MIND diet, Spices/curcumin, Zinc, Iodine,
Glucosamine/chondroitin, Concurrent training, Power/velocity training, Blood-flow-restriction, Sauna/
heat, Cold exposure, Noise pollution. `--search` was near-empty (mostly `0 on-target new goldish` --
the broad `search` param + strict goldish returns little clean review; 2 on-target hits only:
glucosamine ARD 2015 `10.1136/annrheumdis-2014-206792`, sauna Hindawi 2018 SR `10.1155/2018/1857413`).
The STRUCTURAL cell map is the signal; `--search` is a weak first pass -- a real fill needs a targeted
`research <exposure>` episode, not these hits.

**(3) Adjudication + reason (candidates, ALL reader-gated by EXPECTANCY + RATCHET before `research`).**

- **DEFER (research-worthy, high decision-value) -- the exposures with a plausibly-extant gold SR that
  moves a decision net of the best held alternative:** Sauna/heat (Kunutsor/Laukkanen cohort + SR base
  exists; non-substitutable CV lever; the Hindawi SR is weak-journal -> find the stronger one), MIND
  diet (dementia-incidence SR base exists; distinct from held Med/DASH), Portfolio diet (Sievenpiper
  NMA base exists -- CAVEAT same-school as held, so type-F not type-E), Nordic diet (NNR evidence base),
  Power/velocity training (function/falls -- a QoL-critical outcome the held RT pages may not own),
  Blood-flow-restriction (load-restricted stratum -- effect-modification route (b) candidate).
- **DEFER (lower priority, verify expectancy first):** Glucosamine/chondroitin (QoL/OA edge; ARD 2015
  hit is real but Cochrane likely-null base -- a labelled-weak counterweight at most), Concurrent
  training, Spices/curcumin (frontier; surrogate-heavy), Cold exposure (fad-gate -- symmetric bar,
  demote to no-effect if human outcome evidence thin), Zinc/Iodine (micronutrient repletion -- narrow
  stratum), Noise pollution (GBD-environ; modifiable only weakly at the individual level).
- **WEAVE not acquire -- the 20 IN-EMBEDDED** (mentioned, no owning page): olive oil, cocoa flavanols,
  added-sugar/SSB, alcohol, walking/steps, balance training, melatonin, sleep quality, etc. These are
  nucleus-split / weave candidates (the fabric already holds the material, it lacks an owner page), NOT
  acquisition gaps -- route to Weave.
- **VERIFY-NARROWNESS -- 3 narrow NUCLEUS** flagged by the reader pass (tool cannot see slice-narrowness):
  Omega-3 (held AF-only; CVD/mortality/triglyceride question open), Flavonoids (cognition-only),
  Dietary nitrate (BP-only). Each may need a broadening gold -> candidate `research`, gated.
- **DROP -- EDGE-open (12) + MECH-open (2).** EDGE (collagen, HMB, yoga, green-space, ...) stays
  low-priority by the Layer-1 ranking; MECH (microplastics, pesticide residue) is the 'not-yet' bucket
  -- do not acquire as a finding.

**(4) Acquisition-requested.** NONE this run -- Engine F is a census/discovery build; every candidate is
verify-by-reading + expectancy + ratchet-gated before a `research` episode is opened. No fetch requested;
no source staged. The DEFER set above is the ranked worklist, not a queue commitment (per the maintainer's
"not for its own sake"). term-absence != finding-absence: each EMBEDDED/GAP is a candidate, not a proven
hole.
- [2026-09-08] openalex search "sauna cardiovascular mortality systematic review" -> 0 hits: (none)
- [2026-09-08] openalex search "sauna cardiovascular meta-analysis" -> 2 hits: https://doi.org/10.1093/eurjcn/zvab050; https://doi.org/10.1093/eurjcn/zvab049
- [2026-09-08] openalex search "sauna bathing health" -> 19 hits: https://doi.org/10.1016/j.mayocp.2018.04.008; https://doi.org/10.1152/ajpregu.00115.2017; https://doi.org/10.1016/j.mayocp.2023.01.008; https://doi.org/10.1152/japplphysiol.00322.2023; https://doi.org/10.1007/s40520-017-0855-z
- [2026-09-08] openalex search "power training older adults meta-analysis" -> 10 hits: https://doi.org/10.1007/s40279-015-0418-4; https://doi.org/10.1186/s11556-022-00297-x; https://doi.org/10.1016/j.apmr.2023.01.022; https://doi.org/10.1139/apnm-2020-0021; https://doi.org/10.1016/j.arr.2025.102933
- [2026-09-08] openalex search "MIND diet cognitive" -> 20 hits: https://doi.org/10.1016/j.jalz.2015.04.011; https://doi.org/10.1093/advances/nmz054; https://doi.org/10.1056/nejmoa2302368; https://doi.org/10.1016/j.jalz.2018.12.011; https://doi.org/10.1007/s12603-017-0909-0
- [2026-09-08] openalex search "sauna systematic review" -> 8 hits: https://doi.org/10.1155/2018/1857413; https://doi.org/10.1002/clc.23077; https://doi.org/10.1016/j.ctim.2025.103241; https://doi.org/10.17605/osf.io/uvbce; https://doi.org/10.17605/osf.io/naq2s
- [2026-09-08] openalex search "heat therapy cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-09-08] openalex search "passive heat therapy vascular" -> 6 hits: https://doi.org/10.1113/jp278237; https://doi.org/10.1096/fasebj.2019.33.1_supplement.829.2; https://doi.org/10.1681/asn.20223311s1524a; https://doi.org/10.1113/jp272933; https://doi.org/10.1113/jp280041
- [2026-09-08] openalex search "sauna bathing fatal cardiovascular all-cause mortality" -> 1 hits: https://doi.org/10.1001/jamainternmed.2014.8187
- [2026-09-08] openalex resolve "10.1186/s11556-022-00297-x 10.1016/j.apmr.2023.01.022 10.1056/nejmoa2302368 10.1016/j.jnha.2025.100630 10.1016/j.ajcnut.2023.04.025 10.1016/j.mayocp.2018.04.008" -> 6 hits: https://doi.org/10.1186/s11556-022-00297-x; https://doi.org/10.1016/j.apmr.2023.01.022; https://doi.org/10.1056/nejmoa2302368; https://doi.org/10.1016/j.jnha.2025.100630; https://doi.org/10.1016/j.ajcnut.2023.04.025
- [2026-09-08] openalex fetch "10.1186/s11556-022-00297-x" -> 0 hits: (none)
- [2026-09-08] openalex fetch "10.1056/nejmoa2302368" -> 0 hits: (none)
- [2026-09-08] openalex fetch "10.1016/j.mayocp.2018.04.008" -> 0 hits: (none)
- [2026-09-08] openalex fetch "10.1016/j.jnha.2025.100630" -> 0 hits: (none)
- [2026-09-08] openalex fetch "10.1016/j.apmr.2023.01.022" -> 0 hits: (none)

## [2026-09-08] SELECTION RECORD -- research episodes: sauna/heat, power/velocity, MIND diet

Three Engine-F top-DEFER gaps opened as `research` episodes (discovery + vetting + acquisition to
inbox/; nothing ingested). Ratchet lens per gap: *what decision, what is already held?*

### (3) Adjudication + reason

**Power / velocity training (function, falls -- QoL-critical outcomes the held RT pages under-own):**
- **SELECTED -> FETCHED** `10.1186/s11556-022-00297-x` -- "Effectiveness of power training compared to
  strength training in older adults" (Eur Rev Aging Phys Act 2022, MA, OA, 35 cites). Comparative-
  effectiveness on the exact function question; ratchet-advancer (no held page owns power-vs-strength
  for function). Clean 15-page PDF.
- **SELECTED -> MAINTAINER-DROP** `10.1016/j.apmr.2023.01.022` -- "Effects of Power Training on
  Functional Capacity Related to Fall Risk in Older Adults" (Arch Phys Med Rehabil 2023, MA, 28 cites).
  The highest-value outcome (fall risk = function/QoL), but Elsevier PAYWALLED (no OA pdf) -> DOI
  recorded, do not downgrade.
- REJECTED (echo/older) `10.1007/s40279-015-0418-4` (2015, muscle-power surrogate only, older);
  `10.1139/apnm-2020-0021` (hypertrophy outcome -- off the function question).

**MIND diet (cognition / dementia incidence -- distinct from held Med/DASH):**
- **SELECTED -> MAINTAINER-DROP** `10.1056/nejmoa2302368` -- "Trial of the MIND Diet for Prevention of
  Cognitive Decline in Older Persons" (NEJM 2023, RCT, 346 cites). The DECISIVE piece: a 3-year RCT
  that came back largely NULL against a positive observational base -> a genuine observational-vs-RCT
  tension (ratchet-advancer: a gold reaching a different conclusion). PMC pdf blocked by reCAPTCHA
  challenge page (not a real PDF) -> maintainer-drop, DOI recorded. An RCT not an MA, but decision-
  decisive here, so it overrides the MA-preference.
- **SELECTED -> MAINTAINER-DROP** `10.1016/j.ajcnut.2023.04.025` -- MIND MA (Am J Clin Nutr 2023, 73
  cites). Strongest pure MIND meta-analysis; PAYWALLED -> maintainer-drop.
- **DEFERRED** `10.1016/j.jnha.2025.100630` -- 2025 MIND SR (J Nutr Health Aging, OA-flagged but
  paywalled on fetch). Recent SR anchor; take it only if the AJCN MA + NEJM RCT prove insufficient
  (avoid an echo). DOI recorded.
- REJECTED (single cohorts / not the synthesis) the Framingham, Puerto-Rican, Black/White MIND cohort
  hits -- individual cohorts, superseded by the MA/SR + the RCT.

**Sauna / heat (CV, mortality, BP -- non-substitutable lever) -- HONEST FINDING: no gold SR/MA on the
population mortality/CV-events question.** The signal rests on a SINGLE Finnish cohort (KIHD) plus a
narrative review; you cannot meta-analyze one cohort, so the SR/MA absence is STRUCTURAL (expectancy),
not a findable source. The SR/MA hits that exist are off-question: heart failure (a diagnosed disease,
prescriber-zone), blood-lipids (surrogate), or weak-journal (Hindawi ECAM). Refusing to acquire a weak
Hindawi SR to tick the box IS the pause-and-ask rule (do not downgrade to fetchable).
- **SELECTED -> MAINTAINER-DROP** `10.1001/jamainternmed.2014.8187` -- Laukkanen et al., "Association
  Between Sauna Bathing and Fatal Cardiovascular and All-Cause Mortality Events" (JAMA Intern Med 2015,
  KIHD cohort, 288 cites). The landmark carrying the entire mortality signal. PAYWALLED -> maintainer-
  drop. Ratchet = first/only source on a no-gold-yet question.
- **SELECTED -> MAINTAINER-DROP (moderate, deliberate counterweight)** `10.1016/j.mayocp.2018.04.008`
  -- Laukkanen/Kunutsor, "Cardiovascular and Other Health Benefits of Sauna Bathing: A Review of the
  Evidence" (Mayo Clin Proc 2018, NARRATIVE review, 182 cites). The field's canonical synthesis;
  moderate tier -> will need a `source-tier-overrides.tsv` entry at ingest (thin-field's-best-synthesis
  justification). Fetch failed (HTTPError) -> maintainer-drop. CAVEAT: same authors as the KIHD cohort
  -> NOT type-E-independent of it (coref by author; corroboration/synthesis only).
- REJECTED `10.1155/2018/1857413` (Hindawi ECAM dry-sauna SR -- weak journal, do not acquire as the
  gold); `10.1002/clc.23077` (sauna-for-heart-failure SR+MA -- diagnosed-disease/prescriber-zone,
  off-telos-center); `10.1016/j.ctim.2025.103241` (lipids surrogate).

### (4) Acquisition-requested

- **FETCHED to inbox/ (1):** `10.1186/s11556-022-00297-x` (power-vs-strength MA) ->
  `inbox/PowerTraining - Power vs Strength Older Adults MA.pdf`. Hand off to `process inbox`.
- **MAINTAINER-DROP (5 -- OA-blocked or paywalled, DOIs recorded, NONE downgraded):**
  - `10.1016/j.apmr.2023.01.022` (power -> fall-risk MA; Elsevier paywall)
  - `10.1056/nejmoa2302368` (MIND RCT; PMC reCAPTCHA block)
  - `10.1016/j.ajcnut.2023.04.025` (MIND MA; paywall)
  - `10.1001/jamainternmed.2014.8187` (sauna KIHD mortality cohort; paywall)
  - `10.1016/j.mayocp.2018.04.008` (sauna narrative review, moderate; HTTPError)
- **DEFERRED (1):** `10.1016/j.jnha.2025.100630` (2025 MIND SR) -- take only if AJCN MA + NEJM RCT
  insufficient.

Net: sauna is a thin, single-cohort field (no gold SR possible now); power and MIND both have real
golds but the strongest are paywalled -> 1 fetched, 5 awaiting maintainer-drop, 1 deferred.

**[2026-09-08 UPDATE -- maintainer-drop LANDED]** The maintainer dropped all 6 requested PDFs. Staged 5
(process-inbox done): Jimenez-Lupion power/fall-risk MA, Huang MIND cohort+MA, Tse MIND SR, Laukkanen
KIHD sauna cohort, Laukkanen Mayo sauna narrative review (moderate -> needs tier-override at ingest).
The 6th (NEJM MIND RCT `10.1056/nejmoa2302368`) arrived as NEJM's OA figure SLIDE DECK only (headline
null + captions, no magnitudes) -> parked in `inbox/_hold`, NOT staged as a source; full text still
wanted via PMC author manuscript PMC10513737. See ingest-queue.md [STAGED / STILL AWAITED 2026-09-08].

**[2026-09-08 UPDATE-2 -- NEJM MIND RCT FULL TEXT LANDED]** Maintainer dropped the full NEJM article
(`10.1056/nejmoa2302368`, `barnes2023mind`), superseding the slide deck. Full magnitudes + 95% CIs
present (the CI the deck lacked). Staged, registered, chunked (1 chunk, text-native); slide deck deleted
from `inbox/_hold`. All 6 Engine-F research golds now held. MIND cluster complete -> ingest as a set.
- [2026-09-09] openalex search "free weights machines resistance training strength hypertrophy meta-analysis" -> 0 hits: (none)
- [2026-09-09] openalex search "free weight machine resistance training" -> 8 hits: https://doi.org/10.3390/ijerph17217848; https://doi.org/10.3390/brainsci10100702; https://doi.org/10.1590/s1980-6574201800020015; https://doi.org/10.17605/osf.io/v2tcw; https://doi.org/10.5281/zenodo.20718400
- [2026-09-09] openalex search "resistance training modality strength systematic review" -> 2 hits: https://doi.org/10.37766/inplasy2026.9.0035; https://doi.org/10.3389/fphys.2026.1823323
- [2026-09-09] openalex search "machines versus free weights" -> 8 hits: https://doi.org/10.1519/jsc.0000000000003349; https://doi.org/10.1519/1533-4295(2000)022<0018:rdmvfw>2.0.co;2; https://doi.org/10.1080/17461391.2019.1685007; https://doi.org/10.3390/sports7100215; https://doi.org/10.1111/sms.14433
- [2026-09-09] openalex resolve "10.3389/fphys.2026.1823323 10.1519/jsc.0000000000003349 10.1111/sms.14433" -> 3 hits: https://doi.org/10.3389/fphys.2026.1823323; https://doi.org/10.1519/jsc.0000000000003349; https://doi.org/10.1111/sms.14433
- [2026-09-09] openalex search "free weights machines systematic review" -> 4 hits: https://doi.org/10.1186/s13102-023-00713-4; https://doi.org/10.23736/s0022-4707.21.12929-9; https://doi.org/10.29081/gsjesh.2025.26.2.8; ?
- [2026-09-09] openalex search "bodyweight training muscle strength" -> 4 hits: https://doi.org/10.3390/jcm13123400; https://doi.org/10.56984/8zg143bd3; https://doi.org/10.22514/jomh.2022.009; https://doi.org/10.33369/jk.v9i3.43672
- [2026-09-09] openalex resolve "10.1186/s13102-023-00713-4 10.23736/s0022-4707.21.12929-9" -> 2 hits: https://doi.org/10.1186/s13102-023-00713-4; https://doi.org/10.23736/s0022-4707.21.12929-9
- [2026-09-09] openalex search "calisthenics resistance training" -> 2 hits: https://doi.org/10.1186/s12889-020-09355-4; https://doi.org/10.31525/ct1-nct04207567
- [2026-09-09] openalex search "bodyweight versus external load resistance" -> 0 hits: (none)
- [2026-09-09] openalex fetch "10.1186/s13102-023-00713-4" -> 0 hits: (none)

## [2026-09-09] SELECTION RECORD — RT equipment head-to-head (free weight vs machine vs bodyweight)

Gap: acquisition-worklist NEW candidate (Engine B, 2026-09-07) — RT-equipment head-to-head, graded
THIN (0 variants in the whole claim graph, a real external gap). User-named, HIGH materiality (changes
the equipment PICK, not the RT-category verdict). Auto-`--search` was too noisy; targeted hand-search.

**SELECTED (1) — FETCHED to inbox/:**
- **Haugen et al. 2023** `10.1186/s13102-023-00713-4` (BMC Sports Sci Med Rehabil 15:103; gold — PRISMA
  SR+MA; oa=True). Free-weight vs. machine-based strength training -> maximal strength, hypertrophy, jump.
  13 studies, n=1016. Directly on the decision-question, newest whole-body gold, OA (fetchable, not a
  walled publisher). Fetched -> `inbox/Haugen - Free Weight vs Machine Strength Training 2023.pdf`.

**DEFERRED (2):**
- `10.23736/s0022-4707.21.12929-9` (J Sports Med Phys Fitness 2021 SR+MA, "Machines and free weight
  exercises"; oa=False, cites=24) — SUPERSEDED by Haugen 2023 (newer, more cites, OA, whole-body). Take
  only if Haugen's included-study set proves narrow on ingest. Walled -> maintainer-drop if wanted.
- `10.3389/fphys.2026.1823323` (Front Physiol 2026 MA, "Relative effectiveness of different resistance
  training modalities on lower-body..."; oa=True, cites=0) — brand-new, lower-body only, unverified
  scope. Opportunistic: verify at ingest whether it covers the BODYWEIGHT modality (would partly fill
  the named zero below); do not fetch pre-verification.

**NAMED ZERO — bodyweight / calisthenics vs external load (do NOT acquire; genuine absence).** No gold
MA/SR compares bodyweight/calisthenics training against external-load RT on hypertrophy or strength.
Probed three ways: "calisthenics resistance training" (2 hits — a protocol + a trial registration, no
synthesis), "bodyweight training muscle strength" (single studies / adolescents / COVID-online only),
"bodyweight versus external load resistance" (0 hits). Not a phrasing artifact — the synthesis does not
exist yet. Free-weight-vs-machine resolves (Haugen); the calisthenics arm stays a named gap.

**Net:** 1 fetched (Haugen 2023, OA, no wall) -> hand off to `process inbox`. The equipment-pick question
is now answerable for free-weight-vs-machine; the bodyweight arm is a recorded zero.
- [2026-09-10] acq-engine B comparative [from-year=2015 search=False exposures=15] -> COMPARED=6 SILOED=8 THIN=1 | top: SILOED:aerobic-modality; SILOED:balance-training; SILOED:dietary-pattern; SILOED:fasting-modality; SILOED:protein-source pool-tsv=/workspaces/nutrition/wiki/meta/acq-comparative.tsv
- [2026-09-10] acq-engine C biomarker-roles [from-year=2015 search=False panel=21] -> BLANK-cells=7 PARTIAL-cells=23 no-dedicated-page=10/21 | top: ALT:TARGET; GGT:PREDICTIVE; GGT:MODIFIABLE; resting-HR:PREDICTIVE; resting-HR:MODIFIABLE pool-tsv=/workspaces/nutrition/wiki/meta/acq-biomarker-roles.tsv
- [2026-09-10] acq-engine D framework-diff (offline) [covered-min=4 branches=36] -> IN-MISSING=0 IN-THIN=0 EDGE-MISSING=0 MECH-MISSING=8 | top: (0 IN-scope missing) pool-tsv=/workspaces/nutrition/wiki/meta/acq-framework-diff.tsv
- [2026-09-10] acq-engine F exposure-census [search=False exposures=91 scope=all] -> IN-GAP=10 IN-EMBEDDED=20 IN-NUCLEUS=44 EDGE-open=12 MECH-open=2 | top: GAP:Nordic diet; GAP:Portfolio diet; GAP:Spices curcumin; GAP:Zinc; GAP:Iodine pool-tsv=/workspaces/nutrition/wiki/meta/acq-exposure-census.tsv
- [2026-09-10] acq-engine E coupling [from-year=2018 seeds=20 ceiling=8000 anchors-resolved=12/12] -> candidates=548 coupled>=2=21 held-dropped=451 rejsrc-hard=1 rejsrc-soft=9 | top: 10.1093/advances/nmz041; 10.1186/s12937-020-00554-8; 10.1017/s0007114518002593; 10.3390/nu14102008; 10.1093/advances/nmab135 pool-tsv=/workspaces/nutrition/wiki/meta/acq-coupling.tsv
- [2026-09-10] acq-engine A anchor-walk [from-year=2019 min-cites=5 goldish=True anchors-resolved=12/12] -> candidates=465 co-cited>=2=13 held-dropped=451 | top: 10.3390/nu11112611; 10.1186/s12916-022-02328-x; 10.3390/nu12041088; 10.3390/nu12123756; 10.3390/nu13082636 pool-tsv=/workspaces/nutrition/wiki/meta/acq-anchor-walk.tsv
- [2026-09-10] openalex search "portfolio dietary pattern cholesterol cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-09-10] openalex search "dairy matrix cardiometabolic health" -> 1 hits: https://doi.org/10.3389/fnut.2024.1386257
- [2026-09-10] openalex search "red meat substitution coronary heart disease meta-analysis" -> 0 hits: (none)
- [2026-09-10] openalex search "protein source animal plant muscle strength resistance training meta-analysis" -> 0 hits: (none)
- [2026-09-10] openalex search "portfolio diet LDL cholesterol" -> 1 hits: https://doi.org/10.1016/j.numecd.2026.104797
- [2026-09-10] openalex search "meat substitution mortality cardiovascular" -> 0 hits: (none)
- [2026-09-10] openalex search "plant versus animal protein resistance training" -> 0 hits: (none)
- [2026-09-10] openalex search "lipoprotein(a) cardiovascular disease mendelian randomization meta-analysis" -> 0 hits: (none)
- [2026-09-10] openalex fetch "10.3389/fnut.2024.1386257" -> 0 hits: (none)
- [2026-09-10] openalex search "Portfolio diet cholesterol LDL systematic review meta-analysis meta-analysis" -> 0 hits: (none)
- [2026-09-10] openalex search "Portfolio dietary pattern LDL cholesterol randomized" -> 0 hits: (none)
- [2026-09-10] openalex resolve "10.1093/nutrit/nuac017" -> 1 hits: https://doi.org/10.1093/nutrit/nuac017
- [2026-09-10] openalex resolve "10.1016/j.numecd.2022.06.010" -> 1 hits: https://doi.org/10.1016/j.numecd.2022.06.010
- [2026-09-10] openalex search "physical inactivity dementia individual participant meta-analysis" -> 1 hits: https://doi.org/10.1136/bmj.l1495
- [2026-09-10] openalex search "sleep problems risk cognitive decline dementia meta-analysis" -> 1 hits: https://doi.org/10.1136/jnnp-2019-321896
- [2026-09-10] openalex search "lipoprotein(a) coronary heart disease meta-analysis" -> 5 hits: https://doi.org/10.1016/j.jacc.2008.10.024; https://doi.org/10.1371/journal.pone.0241993; https://doi.org/10.1093/eurheartj/ehr372; https://doi.org/10.1016/j.cca.2016.12.006; https://doi.org/10.1016/j.cca.2017.05.017
- [2026-09-10] openalex search "lipoprotein a concentration risk coronary heart disease stroke" -> 3 hits: https://doi.org/10.1001/jama.2009.1063; ?; https://doi.org/10.1136/ebm.6.6.175
- [2026-09-10] openalex search "portfolio dietary pattern cardiovascular disease controlled trials" -> 3 hits: https://doi.org/10.1016/j.pcad.2018.05.004; https://doi.org/10.32920/26521333.v1; https://doi.org/10.32920/26521333
- [2026-09-10] openalex search "protein intake muscle mass overweight obesity weight loss meta-analysis" -> 0 hits: (none)
- [2026-09-10] openalex search "protein source animal plant resistance training muscle network meta-analysis" -> 0 hits: (none)
- [2026-09-10] openalex search "milk intake lactase persistence mendelian randomization" -> 2 hits: https://doi.org/10.3390/nu10081041; https://doi.org/10.1007/s10654-017-0328-x
- [2026-09-10] openalex fetch "10.1136/bmj.l1495" -> 0 hits: (none)
- [2026-09-10] openalex fetch "10.1136/jnnp-2019-321896" -> 0 hits: (none)
- [2026-09-10] openalex fetch "10.1001/jama.2009.1063" -> 0 hits: (none)
- [2026-09-10] openalex fetch "10.1016/j.pcad.2018.05.004" -> 0 hits: (none)
- [2026-09-15] openalex search "weight cycling cardiovascular mortality meta-analysis" -> 0 hits: (none)
- [2026-09-15] openalex search "weight cycling meta-analysis" -> 7 hits: https://doi.org/10.1111/jdi.13380; https://doi.org/10.1136/ijgc-2019-000728; https://doi.org/10.1111/obr.13416; https://doi.org/10.1016/j.fertnstert.2019.09.025; https://doi.org/10.1007/s10552-021-01455-9
- [2026-09-15] openalex search "body weight variability mortality" -> 8 hits: https://doi.org/10.2337/dc19-2552; https://doi.org/10.1038/s41366-018-0079-0; https://doi.org/10.2337/figshare.12465983; https://doi.org/10.1161/jaha.120.017475; https://doi.org/10.1155/2024/7670729
- [2026-09-15] openalex search "weight fluctuation cardiovascular disease" -> 4 hits: https://doi.org/10.3389/fendo.2019.00728; https://doi.org/10.1210/jc.2018-01239; https://doi.org/10.1038/s41598-021-89666-7; https://doi.org/10.1007/s40618-022-01881-9
- [2026-09-15] openalex resolve "10.1111/jdi.13380" -> 1 hits: https://doi.org/10.1111/jdi.13380
- [2026-09-15] openalex fetch "10.3389/fendo.2019.00728" -> 0 hits: (none)
- [2026-09-15] openalex fetch "10.1111/jdi.13380" -> 0 hits: (none)
- [2026-09-15] openalex search "milk intake Mendelian randomization cardiovascular" -> 0 hits: (none)
- [2026-09-15] openalex search "lactase persistence cardiometabolic" -> 0 hits: (none)
- [2026-09-15] openalex search "dairy Mendelian randomization" -> 10 hits: https://doi.org/10.1136/bmj.j1000; https://doi.org/10.1002/mds.28902; https://doi.org/10.1373/clinchem.2017.280701; https://doi.org/10.2337/dc18-2034; https://doi.org/10.1373/clinchem.2018.300335
- [2026-09-15] openalex search "lactase persistence disease" -> 7 hits: https://doi.org/10.1038/s41586-022-05010-7; https://doi.org/10.1038/s41586-022-05227-6; https://doi.org/10.3389/fgene.2020.558762; https://doi.org/10.1093/ecco-jcc/jjac190.1033; ?
- [2026-09-15] openalex search "milk lactase type 2 diabetes Mendelian Bergholdt" -> 0 hits: (none)
- [2026-09-15] openalex search "genetically determined milk intake type 2 diabetes" -> 0 hits: (none)
- [2026-09-15] openalex resolve "10.2337/dc18-2034" -> 1 hits: https://doi.org/10.2337/dc18-2034
- [2026-09-15] openalex fetch "10.2337/dc18-2034" -> 0 hits: (none)
- [2026-09-15] openalex resolve "10.3389/fendo.2019.00728" -> 1 hits: https://doi.org/10.3389/fendo.2019.00728
- [2026-09-15] openalex resolve "10.1111/jdi.13380" -> 1 hits: https://doi.org/10.1111/jdi.13380
- [2026-09-15] openalex resolve "10.2337/dc18-2034" -> 1 hits: https://doi.org/10.2337/dc18-2034
- [2026-09-15] openalex resolve "10.1111/jdi.13380" -> 1 hits: https://doi.org/10.1111/jdi.13380

## [2026-09-15] SELECTION RECORD — depth-phase acquisition (Weight Cycling + Dairy causal-leg)
Two open cells worked from `acquisition-worklist.md`, both chosen because the incumbent is WEAK or a
named causal gap stands (not a type-E confirm-only echo).

**Cell 1 — Weight Cycling and Cardiometabolic Risk.** Incumbent Montani 2015 = moderate/narrative-review,
single-source, confidence:low ("labelled counterweight, not a precision anchor"). A gold MA is a genuine
F-upgrade.
- SELECTED **Zou 2019** body-weight-fluctuation -> CVD + all-cause + CV mortality SR+MA
  (`10.3389/fendo.2019.00728`, gold, Front Endocrinol, 100 cites, OA). Broadest single acquire (three
  hard outcomes, general population). **FETCHED -> inbox/**.
- SELECTED **Zou 2020** weight-cycling -> incident diabetes SR+MA (`10.1111/jdi.13380`, gold, J Diabetes
  Investig, 49 cites). Complementary OUTCOME (T2D). Wiley anti-bot HTTPError -> **maintainer-drop**
  (registered `zou2020cycling`). NOTE: same Wuhan group as Zou 2019 -> complementary outcomes, NOT two
  independent witnesses on one outcome (flag at ingest).
- REJECTED: obr.13416 (animal models), ijgc endometrial-cancer, fertnstert obstetrical, kidney-cancer
  cohort, HIIT/exercise-"cycling", night-cycled-light (all off-question). DEFERRED: dc19-2552 &
  s41366/s41598/s40618 (single nationwide cohorts, several T2D-stratum — census's don't-drop-a-T2D-cohort
  -to-upgrade-a-general-page rule; not MAs).

**Cell 2 — Dairy causal leg (Dairy x MR -> T2D).** Registered AWAITS exists (Bergholdt 2015, milk-null,
no resolvable DOI). Sought the causal/MR leg the held Gijsbers 2016 cohort dose-response lacks.
- SELECTED **Vissers 2019** dairy -> T2D EPIC-InterAct MR (`10.2337/dc18-2034`, high, Diabetes Care, 45
  cites; co-author Burgess = MR methodologist). Independent METHOD vs Gijsbers cohort -> genuine type-E
  robustness candidate; newer + larger than the Bergholdt AWAITS -> prefer as the causal check. ADA
  paywalled (no OA) -> **maintainer-drop** (registered `vissers2019dairymr`).
- REJECTED **s41586-022-05010-7** (Nature, 228 cites) — "Dairying, diseases and the evolution of lactase
  persistence": EVOLUTIONARY/anthropological (why the trait evolved), NOT a health-outcome MR; the
  weakest mechanistic tier per telos (appeal-to-nature), off-question. DEFERRED: bmj.j1000 (dairy->BP MR,
  BP axis already covered), clinchem BMI/body-comp MRs (adiposity channel, opportunistic only).
- Confirmed absence: no SR/MA *of* dairy-MR studies exists (only individual MR articles) -> a single
  high-tier MR is the ceiling here, acquire it as the method-leg, do not wait for an MR meta-analysis.

**0-hit attribution:** the four 0-hit queries above ("weight cycling cardiovascular mortality
meta-analysis", "lactase persistence cardiometabolic", "milk...Bergholdt", "milk intake Mendelian
randomization cardiovascular") were all `--type`/all-words-in-title STRICTNESS artifacts — each loosened
query returned hits. No literature-absence claim rests on them.

**Acquisition status:** 1 FETCHED (Zou 2019 fendo -> inbox/, run `process inbox`), 2 MAINTAINER-DROP
(Zou 2020 jdi Wiley-walled; Vissers 2019 dc18-2034 ADA-walled). Don't-downgrade rule applied to both.
- [2026-09-15] openalex search "Accelerometer-Derived Weekend Warrior Physical Activity Incident Cardiovascular" -> 4 hits: https://doi.org/10.1001/jama.2023.10875; https://doi.org/10.1093/eurjpc/zwaf632; https://doi.org/10.3410/f.742719443.793601609; https://doi.org/10.3410/f.742719443.793599958
- [2026-09-15] openalex search "FINGER multidomain intervention long-term dementia incidence follow-up" -> 0 hits: (none)
- [2026-09-15] openalex search "FINGER extended follow-up cognition dementia Kivipelto" -> 0 hits: (none)
- [2026-09-15] openalex search "multidomain lifestyle intervention 7 year follow-up cognitive impairment FINGER Finland" -> 0 hits: (none)
- [2026-09-15] openalex resolve "10.1007/s11883-019-0815-5" -> 1 hits: https://doi.org/10.1007/s11883-019-0815-5
- [2026-09-15] openalex resolve "10.1016/j.jstrokecerebrovasdis.2025.108224" -> 1 hits: https://doi.org/10.1016/j.jstrokecerebrovasdis.2025.108224
- [2026-09-15] openalex resolve "10.1007/s11883-019-0815-5" -> 1 hits: https://doi.org/10.1007/s11883-019-0815-5
- [2026-09-15] openalex resolve "10.1016/j.jstrokecerebrovasdis.2025.108224" -> 1 hits: https://doi.org/10.1016/j.jstrokecerebrovasdis.2025.108224
- [2026-09-15] openalex search "glucagon-like peptide depression meta-analysis" -> 2 hits: https://doi.org/10.1186/s12888-026-08016-x; https://doi.org/10.7759/cureus.106972
- [2026-09-15] openalex search "GLP-1 receptor agonist depression" -> 6 hits: https://doi.org/10.1016/j.jpsychires.2023.05.041; https://doi.org/10.1007/s11011-014-9591-7; https://doi.org/10.1016/s2215-0366(26)00014-3; https://doi.org/10.1016/j.euroneuro.2025.08.002; https://doi.org/10.1111/dom.70175
- [2026-09-15] openalex search "semaglutide depression anxiety" -> 1 hits: https://doi.org/10.31080/asne.2025.08.0838
- [2026-09-15] openalex search "glucagon-like peptide suicidal ideation" -> 6 hits: https://doi.org/10.3390/ph17020147; https://doi.org/10.1007/s00125-024-06243-z; https://doi.org/10.7326/m24-0329; https://doi.org/10.1016/j.dsx.2025.103238; https://doi.org/10.2174/011570159x349579241231080602
- [2026-09-15] openalex search "GLP-1 suicidality meta-analysis" -> 6 hits: https://doi.org/10.1002/dmrr.70037; https://doi.org/10.1097/md.0000000000046173; https://doi.org/10.1016/j.jval.2024.10.3721; https://doi.org/10.1002/dmrr.70037/v2/decision1; https://doi.org/10.1002/dmrr.70037/v2/review1
- [2026-09-15] openalex search "GLP-1 receptor agonist alcohol consumption" -> 6 hits: https://doi.org/10.1007/s00213-024-06637-2; https://doi.org/10.1038/s41598-025-17927-w; https://doi.org/10.1101/2025.04.25.25326413; https://doi.org/10.1111/acer.70357; https://doi.org/10.5281/zenodo.19780701
- [2026-09-15] openalex search "GLP-1 anhedonia reward" -> 1 hits: https://doi.org/10.1017/neu.2020.14
- [2026-09-15] openalex search "glucagon-like peptide alcohol use disorder meta-analysis" -> 1 hits: https://doi.org/10.1210/jendso/bvaf149.1227
- [2026-09-15] openalex search "GLP-1 receptor agonist substance use disorder" -> 6 hits: https://doi.org/10.1038/s41591-023-02634-8; https://doi.org/10.1016/j.physbeh.2019.03.029; https://doi.org/10.1016/j.drugalcdep.2024.112424; https://doi.org/10.15288/jsad.23-00318; https://doi.org/10.3389/fphar.2025.1702448
- [2026-09-15] openalex search "GLP-1 receptor agonist quality of life meta-analysis" -> 0 hits: (none)
- [2026-09-15] openalex search "GLP-1 receptor agonist mental health umbrella review" -> 0 hits: (none)
- [2026-09-15] openalex fetch "10.1186/s12888-026-08016-x" -> 0 hits: (none)
- [2026-09-15] openalex fetch "10.1002/dmrr.70037" -> 0 hits: (none)
- [2026-09-15] openalex fetch "10.3389/fphar.2025.1702448" -> 0 hits: (none)

## [2026-09-15] SELECTION RECORD — cross-domain anhedonia / reward blunting from exogenous incretins (GLP-1/GIP RAs)

**Origin:** the [2026-09-15] `challenge` "do exogenous incretins reduce pleasure/joy/meaning" — acquisition
G-gap #3. Fabric holds ZERO on GLP-1 x mood/reward (only the on-target food-reward reduction), so every
first gold here is a ratchet-ADVANCER (no-gold-yet), not an echo. Decision-question decomposes into three
sub-questions, one search cluster each:

- **A — depression risk** (harm vs protection, patient-important)
- **B — suicidality** (the 2023 EMA/FDA regulatory signal)
- **C — cross-domain reward / SUD** — does incretin reward action extend BEYOND food (alcohol / nicotine /
  opioid / stimulant)? This is the mechanistic heart of "anhedonia": the SAME reward-blunting that cuts food
  craving, read with the opposite valence. Benefit-framing (less drug/alcohol craving) and harm-framing
  ("lost my joy") are one mechanism — the type-B insight the challenge needs.

### SELECTED

- **C anchor — FETCHED to inbox/:** `10.3389/fphar.2025.1702448` (Frontiers in Pharmacology 2026, SR,
  cites=12, OA) "The potential role of GLP-1 receptor agonists in substance use disorders — a systematic
  review." Newest SR on cross-domain reward; 14pp, chunks clean (no OCR). Supersedes the 2019 physbeh SR and
  complements the 2024 drugalcdep SR. Registry slug `GLP-1 Substance Use Disorders Systematic Review 2026`.
- **A anchor — MAINTAINER-DROP (OA-flagged but anti-bot-blocked):** `10.1186/s12888-026-08016-x` (BMC
  Psychiatry 2026, SR+MA, OA) "GLP-1 receptor agonists and risk of depression: a systematic review..."
  Newest depression MA. Plain fetch returned "no OA pdf"; the `counter/pdf` OA URL served an HTML bot-block
  (3 KB) on curl AND a Playwright download-handoff error. Genuinely OA, IP-walled here -> maintainer-drop.
- **B anchor — MAINTAINER-DROP (OA-flagged but 403):** `10.1002/dmrr.70037` (Diabetes Metab Res Rev 2025,
  SR+MA, cites=25, OA) "Association of GLP-1 Receptor Agonists With Risk of Suicidal Ideation and Behavior."
  Wiley pdfdirect 403 on both plain fetch and headless browser -> maintainer-drop.

### DEFERRED (candidates, reason)

- `10.1111/dom.70175` (2025, Diabetes Obes Metab) depression risk in **overweight/obese** adults — our
  non-diabetic target stratum. Article-tier (cohort). DEFER; promote if the BMC MA does not stratify to the
  non-diabetic obese stratum.
- `10.1016/j.dsx.2025.103238` (2025 SR, cites=22, OA) suicidality incl. **tirzepatide (GIP/GLP-1)** — the
  moving-target/GIP arm. DEFER; the dmrr MA is the B anchor; revisit if a GIP-vs-GLP-1 split is needed.
- `10.7326/m24-0329` (2024 Annals Intern Med cohort, OA PMC) + `10.1007/s00125-024-06243-z` (2024
  Diabetologia, OA) — single high-profile suicidality cohorts, pooled by the dmrr MA. DEFER (MA supersedes).
- `10.1016/j.jpsychires.2023.05.041` (2023 depression SR, cites=75) — walled + superseded by the 2026 MA.
- `10.1016/j.drugalcdep.2024.112424` (2024 SUD SR, cites=55) — Elsevier-walled; the Frontiers 2026 SR (landed)
  is the newer C anchor. DEFER unless a second independent SUD SR is wanted.
- `10.1038/s41591-023-02634-8` (2023 Nature Medicine, cites=93, OA PMC) "promising but unproven for alcohol
  and substance use" — narrative/perspective, honest-framing CONTEXT not gold. DEFER.
- `10.1017/neu.2020.14` (2020, OA) GLP-1 receptor GENE polymorphisms x reward learning + **anhedonia** — the
  ONLY hit naming anhedonia directly; a human genetic natural-experiment (strongest mechanism-gradient rung,
  MR-adjacent) but mechanism-tier, not a drug-effect MA. DEFER as the reward-circuit MECHANISM bridge if the
  type-B disambiguation page gets built.

### REJECTED

Preprints (`10.1101/2025.11.11...` suicidality medrxiv; `10.1101/2025.04.25...` alcohol medrxiv), case
reports (`10.31080/asne...` semaglutide-induced depression n=1), conference abstracts (`jval` RWD164/CO61,
`jendso/bvaf149` SUN-576 AUD abstract), in-silico pharmacogenomics, datasets, and the peer-review-artifact
DOIs (`dmrr.70037/v2/decision1|review1|response1`). Not gold, or below the tier bar.

### Acquisition status

1 FETCHED (Frontiers SUD SR -> inbox/, ready for `process inbox`); 2 MAINTAINER-DROP (BMC depression MA
`10.1186/s12888-026-08016-x`; Wiley suicidality SR+MA `10.1002/dmrr.70037`) — both OA-flagged but IP-walled,
don't-downgrade rule applied. 0-hit queries attributed: "GLP-1 quality of life MA" and "GLP-1 mental health
umbrella" returned 0 from title-strictness (mood/depression queries DID hit), not literature absence — no
dedicated GLP-1 QoL/anhedonia MA appears to exist yet (a real named gap, expectancy test passes).
- [2026-09-15] openalex resolve "10.3389/fphar.2025.1702448" -> 1 hits: https://doi.org/10.3389/fphar.2025.1702448
- [2026-09-15] openalex resolve "10.1186/s12888-026-08016-x" -> 1 hits: https://doi.org/10.1186/s12888-026-08016-x
- [2026-09-15] openalex resolve "10.1002/dmrr.70037" -> 1 hits: https://doi.org/10.1002/dmrr.70037
- [2026-09-15] openalex resolve "10.1186/s12888-026-08016-x" -> 1 hits: https://doi.org/10.1186/s12888-026-08016-x
- [2026-09-15] openalex resolve "10.1002/dmrr.70037" -> 1 hits: https://doi.org/10.1002/dmrr.70037
- [2026-09-15] openalex search "antioxidant vitamin mineral supplements age-related macular degeneration progression systematic review" -> 0 hits: (none)
- [2026-09-15] openalex search "antioxidant vitamin mineral supplements slowing progression age-related macular degeneration" -> 4 hits: https://doi.org/10.1002/14651858.cd000254.pub4; https://doi.org/10.1002/14651858.cd000254.pub3; https://doi.org/10.1002/14651858.cd000254.pub2; https://doi.org/10.1002/14651858.cd000254.pub5
- [2026-09-15] openalex search "lutein zeaxanthin omega-3 age-related macular degeneration AREDS2 randomized" -> 3 hits: https://doi.org/10.3410/f.718007638.793478653; https://doi.org/10.3410/f.718007638.793493580; https://doi.org/10.3410/f.718007638.793477261
- [2026-09-15] openalex fetch "10.1002/14651858.cd000254.pub5" -> 0 hits: (none)
- [2026-09-15] openalex resolve "10.1002/14651858.cd000254.pub5" -> 1 hits: https://doi.org/10.1002/14651858.cd000254.pub5
- [2026-09-15] openalex resolve "10.1001/jamanetworkopen.2023.6185" -> 1 hits: https://doi.org/10.1001/jamanetworkopen.2023.6185
- [2026-09-15] openalex resolve "10.1016/j.arr.2023.101997" -> 1 hits: https://doi.org/10.1016/j.arr.2023.101997
- [2026-09-15] openalex resolve "10.1177/0890117119861309" -> 1 hits: https://doi.org/10.1177/0890117119861309
- [2026-09-15] openalex search "AREDS2 lutein zeaxanthin age-related macular degeneration JAMA 2013 randomized clinical trial" -> 0 hits: (none)
- [2026-09-15] openalex fetch "10.1001/jamanetworkopen.2023.6185" -> 0 hits: (none)

## [2026-09-15] SELECTION RECORD — AMD supplement SR (the #22 compile residual) + walled advancer batch

**Origin:** the compile-all #22 (Dietary Supplements) SKIP residual — the fabric holds THREE AMD sources
(Marques-Couto diet, Aune PA, Babaker risk-factors) on [[Age-Related Macular Degeneration and Modifiable Exposures]] but NO supplement RCT/SR, and AREDS antioxidant+zinc is one of the few supplement formulas
with a real defined-stratum patient-important benefit (slows progression of intermediate/advanced AMD).
SR-over-single-RCT rule -> target the Cochrane review, not the primary AREDS/AREDS2 JAMA RCTs. Opportunistic
second half: try the still-open walled advancers from `acquisition-worklist.md` (Zhao / Ghorbani / Then) in
the same pass so one pause-and-ask covers the whole blocked set.

### SELECTED

- **AREDS anchor — STAGED to papers/ (maintainer-drop, both walls):** `10.1002/14651858.cd000254.pub5`
  (Cochrane Database Syst Rev 2023, Issue 9; Evans JR, Lawrenson JG; gold SR-MA, cites=48, oa-flagged).
  "Antioxidant vitamin and mineral supplements for slowing the progression of age-related macular
  degeneration." Latest revision — pools AREDS + AREDS2 (lutein/zeaxanthin comparisons present in the ToC).
  openalex fetch -> HTTPError; Playwright + Steel both wrote 0 chars (Cochrane hard-wall); Europe PMC has it
  (PMC10498493) but isOA=N. Maintainer first dropped pub3 (2012, pre-AREDS2 — a recency-downgrade of the
  same review, flagged, NOT accepted), then dropped pub5. pub5 verified (front-page DOI + 2023 + lutein
  comparisons), chunk-clean (6 chunks, self-test OK), superseded pub3 removed. Registry slug
  `Evans - Antioxidant Supplements AMD Progression Cochrane 2023` (`evans2023amdsupp`). Queue-ready.

### MAINTAINER-DROP PENDING (identified, clean DOI, walled — don't-downgrade applied)

- **Zhao — alcohol -> all-cause mortality MA (107 cohorts):** `10.1001/jamanetworkopen.2023.6185` (JAMA
  Network Open 2023, oa=True, cites=261). Already on the drop list (worklist verdict CONFIRM / LOW ratchet).
  openalex fetch -> HTTPError; Playwright + Steel both HTTP 403 (JAMA anti-bots even its OA articlepdf).
- **Ghorbani — plant-/animal-stratified low-carb -> mortality MA:** `10.1016/j.arr.2023.101997` (Ageing Res
  Rev 2023, oa=False, cites=21). MED-HIGH ratchet — splits the held low-carb U-shape (animal harmful / plant
  neutral). Elsevier-walled.
- **Then — occupational mental-demands -> cognitive decline/dementia SR:** `10.1177/0890117119861309` (Am J
  Health Promot 2019, oa=False, cites=33). Type-F upgrade for [[Cognitive Stimulation at Work and Dementia]]
  (held on the single Kivimaki cohort; Then = independent Leipzig LIFE group). SAGE-walled.

### DEFERRED / REJECTED

- **AREDS2 primary RCT (JAMA 2013)** — NOT targeted: superseded by the Cochrane pooling it, and JAMA-walled.
  A single primary RCT below the SR is the wrong unit here (SR-over-single-study). REJECT as an acquisition.
- **Cochrane pub2/pub3/pub4** — superseded revisions of the same review; pub5 is current. REJECT (recency).
- Faculty-Opinions recommendation stubs (`10.3410/f.718007638...`) — commentary artifacts, not the RCT. REJECT.

### 0-hit queries attributed (literature vs tool)

- "antioxidant vitamin mineral supplements ... progression **systematic review**" -> 0 (title-strictness on
  the appended `systematic-review` type filter; the same phrase WITHOUT the type filter returned the 4
  Cochrane versions — tool artifact, not absence).
- "AREDS2 lutein zeaxanthin ... **JAMA 2013 randomized clinical trial**" -> 0 (over-specified title string;
  the primary RCT exists but was deliberately not pursued — see REJECTED).

### Acquisition status

1 STAGED (Evans/Lawrenson Cochrane pub5 -> papers/, queue-ready — run `plan queue` then `ingest-seq`);
1 MAINTAINER-DROP still pending (Ghorbani low-carb MA, `10.1016/j.arr.2023.101997`, Elsevier-walled — the one
that actually moves a decision, splitting the low-carb U-shape; don't-downgrade applied, no substitute taken).
No source ingested (research op ends at staging; ingestion is a separate gated op, never main-agent).

**UPDATE 2026-09-15 (post-drop reconciliation) — 2 of the 3 "advancers" were ALREADY HELD; drop-list was
stale.** The maintainer dropped Zhao + Then; both turned out already ingested, so both PDFs -> `inbox/_duplicates/`
(not staged), no re-ingest:

- **Zhao alcohol** — already held as `Zhao - Daily Alcohol Intake and Mortality 2023` (`zhao2023`, cited on the
  Alcohol framework + deliverable + Big Rocks). A STALE `[NOT YET HELD]` DUPLICATE registry row
  (`zhao2023alcohol`, same DOI, cited nowhere) had survived from the 2026-09-04 census — **deleted this pass**.
  The 2026-09-04 drop-list row should have been reconciled when the real Zhao ingested.
- **Then / Hussenoeder mental-demands SR** — already INGESTED 2026-09-08 (`then2019mentaldemands`, source page +
  `done/papers/` binary, cited on Dementia Prevention + Mind-Body Exercise and Cognition). The 2026-09-07
  re-census SELECTED->drop row was consumed the next day but never struck.

Lesson: the `acquisition-worklist.md` / drop-list carried two rows whose sources had already landed — a
`reconcile.py awaits-arrived` / registry-status check should run before a fresh maintainer-drop request, so the
maintainer is not sent to re-fetch a held source. Only Ghorbani was a genuine open gap.
- [2026-09-16] openalex search "test connectivity meta-analysis" -> 1 hits: https://doi.org/10.1016/j.neuroimage.2019.116157
- [2026-09-16] acq-engine D framework-diff (offline) [covered-min=4 branches=36] -> IN-MISSING=0 IN-THIN=0 EDGE-MISSING=0 MECH-MISSING=8 | top: (0 IN-scope missing) pool-tsv=/workspaces/nutrition/wiki/meta/acq-framework-diff.tsv
- [2026-09-16] acq-engine B comparative [from-year=2015 search=False exposures=15] -> COMPARED=6 SILOED=8 THIN=1 | top: SILOED:aerobic-modality; SILOED:balance-training; SILOED:dietary-pattern; SILOED:fasting-modality; SILOED:protein-source pool-tsv=NONE(run --write for full pool)
- [2026-09-16] acq-engine C biomarker-roles [from-year=2015 search=False panel=21] -> BLANK-cells=5 PARTIAL-cells=21 no-dedicated-page=9/21 | top: ALT:TARGET; GGT:PREDICTIVE; GGT:MODIFIABLE; resting-HR:PREDICTIVE; resting-HR:MODIFIABLE pool-tsv=NONE(run --write for full pool)
- [2026-09-16] acq-engine F exposure-census [search=False exposures=91 scope=all] -> IN-GAP=8 IN-EMBEDDED=21 IN-NUCLEUS=45 EDGE-open=12 MECH-open=2 | top: GAP:Nordic diet; GAP:Spices curcumin; GAP:Iodine; GAP:Glucosamine chondroitin; GAP:Concurrent training pool-tsv=NONE(run --write for full pool)
- [2026-09-16] acq-engine A anchor-walk [from-year=2020 min-cites=5 goldish=True anchors-resolved=12/12] -> candidates=457 co-cited>=2=11 held-dropped=464 | top: 10.1186/s12916-022-02328-x; 10.3390/nu12041088; 10.3390/nu12123756; 10.3390/nu13082636; 10.1038/s44161-022-00197-4 pool-tsv=/workspaces/nutrition/wiki/meta/acq-anchor-walk.tsv
- [2026-09-16] acq-engine F exposure-census [search=False exposures=91 scope=all] -> IN-GAP=8 IN-EMBEDDED=21 IN-NUCLEUS=45 EDGE-open=12 MECH-open=2 | top: GAP:Nordic diet; GAP:Spices curcumin; GAP:Iodine; GAP:Glucosamine chondroitin; GAP:Concurrent training pool-tsv=NONE(run --write for full pool)
- [2026-09-16] acq-engine F exposure-census [search=False exposures=91 scope=all] -> IN-GAP=8 IN-EMBEDDED=21 IN-NUCLEUS=45 EDGE-open=12 MECH-open=2 | top: GAP:Nordic diet; GAP:Spices curcumin; GAP:Iodine; GAP:Glucosamine chondroitin; GAP:Concurrent training pool-tsv=NONE(run --write for full pool)
- [2026-09-16] acq-engine E coupling [from-year=2020 seeds=20 ceiling=8000 anchors-resolved=12/12] -> candidates=529 coupled>=2=17 held-dropped=464 rejsrc-hard=1 rejsrc-soft=2 | top: 10.1186/s12937-020-00554-8; 10.1007/s40279-020-01354-0; 10.3389/fnut.2022.878979; 10.1016/j.ypmed.2021.106566; 10.3389/fpsyg.2021.786491 pool-tsv=/workspaces/nutrition/wiki/meta/acq-coupling.tsv
- [2026-09-16] openalex search "iodine supplementation cognitive thyroid meta-analysis" -> 0 hits: (none)
- [2026-09-16] openalex search "glucosamine chondroitin osteoarthritis pain meta-analysis" -> 1 hits: https://doi.org/10.4081/ejtm.2023.12013
- [2026-09-16] openalex search "protein supplementation source muscle network meta-analysis" -> 0 hits: (none)
- [2026-09-16] openalex search "iodine deficiency cognition systematic review" -> 0 hits: (none)
- [2026-09-16] openalex search "chondroitin glucosamine knee osteoarthritis" -> 5 hits: https://doi.org/10.1136/annrheumdis-2014-206792; https://doi.org/10.1002/art.39819; https://doi.org/10.1007/s00296-018-4077-2; https://doi.org/10.1038/srep16827; https://doi.org/10.1007/s00402-021-04326-9
- [2026-09-16] openalex search "intermittent fasting time restricted eating network meta-analysis" -> 0 hits: (none)
- [2026-09-16] openalex search "cold water immersion health systematic review" -> 1 hits: https://doi.org/10.1371/journal.pone.0317615
- [2026-09-16] openalex fetch "10.1371/journal.pone.0317615" -> 0 hits: (none)
- [2026-09-16] openalex search "iodine supplementation pregnancy child cognition" -> 0 hits: (none)
- [2026-09-16] openalex search "time restricted eating alternate day fasting meta-analysis weight" -> 1 hits: https://doi.org/10.1002/oby.23568
- [2026-09-16] openalex fetch "10.1002/oby.23568" -> 0 hits: (none)
- [2026-09-16] openalex search "iodine status neurodevelopment" -> 0 hits: (none)
- [2026-09-16] openalex resolve "10.1007/s00402-021-04326-9" -> 1 hits: https://doi.org/10.1007/s00402-021-04326-9

## [2026-09-16] SELECTION RECORD — acquisition-engine sweep A-F (lighthouses / ratchet / contradicting-golds)

Full six-engine re-run (pools were 6 days stale; corpus grew by EASD/ADA/Minkoff/Evans/Zou/Nachvak/EFSA
since 09-10). Engines auto-logged fields 1+2 above; this is the `[judgment-only]` adjudication + acquisition.

**Engine yields (candidates, not verdicts):** A anchor-walk 457 (11 co-cited>=2) · B comparative 8 SILOED /
6 COMPARED · C biomarker 5 BLANK / 21 PARTIAL / 9-of-21 no-page · D framework-diff **0 IN-scope missing**
(breadth ceiling holds; 8 MECH-missing are the expected directional-only Hallmarks) · E coupling 529
(17 coupled>=2) · F exposure-census 8 IN-scope GAPs.

**SELECTED (ratchet-advancers — gold, fit-to-question, not echoes; ALL paywall/blocked -> maintainer-drop):**
- **Elortegui Pascual - Fasting Regimens Weight Loss 2022** (Obesity; DOI 10.1002/oby.23568;
  OA-flagged but Wiley HTTPError-blocked). B-SILOED *fasting-modality* PICK — the head-to-head the Meal Timing
  deliverable lacks (it holds per-schedule evidence, no comparison gold). Ratchet: first comparison gold on a
  no-comparison-gold question. [CORRECTED 2026-09-16: first author is Paloma Elortegui Pascual, not "Pinto" —
  the earlier name was an unconfirmed OpenAlex-field guess; verified from the title page on maintainer-drop.
  RATCHET-WATCH surfaced at staging: overlaps held gold Semnani-Azad 2025 IF-NMA; plan queue adjudicates.]
- **Cain - Cold-Water Immersion Wellbeing 2025** (PLoS ONE; DOI 10.1371/journal.pone.0317615;
  no OA PDF served). F-gap, zero coverage. The fad-demotion / memetic-test candidate — lets the fabric answer
  the cold-plunge question under symmetric standards instead of ceding it. [CORRECTED 2026-09-16: first author
  is Tara Cain, not "Cai" — verified from the title page on maintainer-drop.]
- **Glucosamine + Chondroitin for Knee OA — combination efficacy/safety MA 2022** (DOI 10.1007/s00402-021-04326-9,
  gold, 67 cites, Springer-paywall; fallback 2018 MA 10.1007/s00296-018-4077-2). F-gap, zero coverage, QoL
  outcome (pain/function), high consumer demand. Ratchet: first gold on an unheld consumer decision.

**DEFERRED (search-tuning, NOT literature-absence):**
- **Iodine -> cognition/thyroid SR** — 0 hits across 4 query forms ("iodine supplementation cognitive thyroid",
  "iodine deficiency cognition", "iodine supplementation pregnancy child cognition", "iodine status
  neurodevelopment"). title.search strictness, not absence — iodine/cognition SRs exist (e.g. Bougma 2013,
  Zimmermann). Next: web-discover the landmark name, then openalex resolve. F-gap, WHO-relevant, deficiency =
  patient-important -> worth the second pass.
- **Protein-source NMA (whey/casein/plant)** — 0 hits on "protein supplementation source muscle network
  meta-analysis". Protein/RT nucleus already gold-heavy; likely an echo, so low ratchet priority — re-attempt
  only if a source-specific NMA on lean mass/strength surfaces.

**REJECTED (ratchet-echo / not independent):**
- Engine-A top co-cited: Reynolds 2022 fibre/CVD (10.1186/s12916-022-02328-x) — **shared author with the held
  Reynolds-2019 lighthouse -> fails independence outright**; Hu 2022 / Gaesser 2020 whole-grains — the
  whole-grain question is held ([[Whole Grains Refined Grains and Pulses]]); Meng 2021 sweetened-beverages —
  AS/sugar covered.
- Engine-E top coupled: Mofrad 2022 / Mousavi 2022 eggs, Jin 2021 dairy, Soltani 2020 DASH — all held food-group
  /pattern questions, siblings of the Schwingshackl/Naghshi lighthouses (shared-primary pooling, not a new
  conclusion). Shirota 2022 Japanese-diet is the one genuinely-new pattern -> logged to worklist, not acquired
  (pattern-level, low marginal rank vs the SELECTED three).

**Acquisition status:** 0 fetched to inbox (all 3 SELECTED are paywall/anti-bot-blocked). 3 DOIs handed to
maintainer-drop; nothing downgraded (pause-and-ask). Residual pools persisted to acq-*.tsv (byte-diffable).
- [2026-09-16] openalex search "iodine thyroid dysfunction meta-analysis" -> 0 hits: (none)
- [2026-09-16] openalex search "iodine excess thyroid systematic review" -> 1 hits: https://doi.org/10.1371/journal.pone.0173722
- [2026-09-16] openalex search "iodine intake thyroid" -> 8 hits: https://doi.org/10.1056/nejmoa054022; https://doi.org/10.1016/0002-9343(92)90164-7; https://doi.org/10.1016/j.beem.2009.08.013; https://doi.org/10.1210/jcem.83.3.4624; https://doi.org/10.7326/0003-4819-101-1-28
- [2026-09-16] openalex resolve "10.1371/journal.pone.0173722" -> 1 hits: https://doi.org/10.1371/journal.pone.0173722
- [2026-09-16] openalex search "iodine thyroid meta-analysis" -> 8 hits: https://doi.org/10.1093/ajcn/nqaa071; https://doi.org/10.1089/thy.2020.0356; https://doi.org/10.1093/nutrit/nuz105; https://doi.org/10.1007/s00259-021-05440-x; https://doi.org/10.3389/fendo.2022.1049423
- [2026-09-16] openalex search "iodine supplementation pregnancy" -> 8 hits: https://doi.org/10.3945/ajcn.2008.26811c; https://doi.org/10.1089/thy.2006.16.949; https://doi.org/10.1002/14651858.cd011761.pub2; https://doi.org/10.1210/jcem.77.4.8408456; https://doi.org/10.3390/nu4070799
- [2026-09-16] openalex resolve "10.1093/ajcn/nqaa071 10.1002/14651858.cd011761.pub2" -> 2 hits: https://doi.org/10.1093/ajcn/nqaa071; https://doi.org/10.1002/14651858.cd011761.pub2
- [2026-09-16] openalex search "excess iodine thyroid autoimmunity" -> 0 hits: (none)
- [2026-09-16] openalex fetch "10.1371/journal.pone.0173722" -> 0 hits: (none)
- [2026-09-16] openalex fetch "10.1002/14651858.cd011761.pub2" -> 0 hits: (none)

## [2026-09-16] SELECTION RECORD — iodine (thyroid/excess arm + cognition-advancer check)

**Target framing.** The deferred worklist row read "Iodine -> cognition/thyroid SR". Dedup-first
against the fabric: the **cognition arm is already held** — [EXTRACTED (Bougma - Iodine Child Mental
Development Meta-Analysis)] (gold MA, ingested 2026-08-04; iodine deficiency -> child IQ +7.4 pts, on
[[Deficiency Repletion vs Enhancement]] + [[Vitamin and Mineral Supplements for Disease Prevention]]).
So the target was refined to the genuinely-uncovered pieces: (i) the **thyroid / excess-intake arm**
(the U-shaped upper limb, sufficient-population stratum — zero coverage), and (ii) any **advancer**
that upgrades Bougma's observational child-IQ evidence to RCT / adds an adverse-effect arm.

**(1) Queries** (channel=openalex, auto-logged above): `iodine thyroid --type meta-analysis
--from-year 2019 --sort cites` (supersession); `excess iodine thyroid autoimmunity --from-year 2018`
(0 hits — phrasing strictness, NOT proven absence); `iodine supplementation pregnancy --sort cites`
(advancer); resolve nqaa071 + cd011761; fetch x2.

**(2) Results / adjudication.**

- **SELECTED + ACQUIRED (thyroid/excess opener).** Katagiri et al. 2017, PLoS ONE, *"Effect of excess
  iodine intake on thyroid diseases in different populations: A systematic review"* — DOI
  10.1371/journal.pone.0173722, gold SR, oa=True, 136 cites. Fills the zero-coverage thyroid/excess
  arm; population-stratified (the U upper limb the wiki's iodine cell entirely lacks). Supersession
  check clean: the 2019+ iodine-thyroid MA field is dominated by **radioactive**-iodine *therapy* MAs
  (off-question — prescriber/therapeutics zone), and the excess-intake-SR query returned 0, so the
  2017 SR is not superseded. PLoS -> headless-fetchable. **-> inbox/Katagiri - Effect of excess iodine
  intake on 2017.pdf.**

- **SELECTED, FETCH-BLOCKED -> MAINTAINER-DROP (cognition/thyroid advancer).** Harding et al. 2017,
  Cochrane, *"Iodine supplementation for women during the preconception, pregnancy and postpartum
  period"* — DOI 10.1002/14651858.cd011761.pub2, gold, oa=True, 198 cites. Genuine advancer over
  Bougma 2013: RCT-grade Cochrane, adds the **maternal-thyroid + adverse-effect (excess-in-pregnancy)
  arm** and the **preconception/pregnancy stratum** that Bougma's observational child-IQ MA does not
  carry; bridges both arms for that stratum. FETCH-FAIL (Cochrane Library HTTPError / anti-bot) ->
  pause-and-ask, NO downgrade. **DOI listed for maintainer-drop.**

- **DEFERRED.** Zimmermann/Andersson-lineage 2020 AJCN MA, *"Systematic review and meta-analysis of
  the effects of iodine supplementation on..."* (title truncated at outcome) — DOI
  10.1093/ajcn/nqaa071, gold MA, oa=True, 114 cites. Redundancy risk against the Cochrane (both are
  supplementation MAs); confirm the outcome (thyroid function vs neurodevelopment) before acquiring.
  Reason: don't over-acquire the iodine cell — two gold acquisitions (excess-thyroid SR + pregnancy
  Cochrane) already move it from 1 source to 3.

- **REJECTED.** (a) The 2019+ **radioactive-iodine-therapy** MAs from the supersession query —
  off-question (thyroid-cancer treatment, prescriber zone). (b) Teng et al. 2006 NEJM cohort (754
  cites) — single cohort, not an SR, and NEJM-blocked. (c) 2013 AJCN pregnancy SR (10.3945/ajcn.
  113.065854) — contemporaneous with Bougma, echo, no design/aspect upgrade.

**(3) Acquisition status.** 1 fetched to inbox/ (Katagiri PLoS SR); 1 maintainer-drop DOI (Harding
Cochrane, 10.1002/14651858.cd011761.pub2); 1 deferred (AJCN nqaa071). Nothing ingested (research op).

## [2026-09-17] SELECTION RECORD — discover --refresh (first real run)

**(1) Queries.** Engines A–F + coverage_matrix re-run over OpenAlex (`discover.py --refresh --write`,
each engine's own queries auto-logged upstream by the acq_*.py drivers). No hand contradiction-hunt
this pass — mechanical refresh + worklist reconciliation only.

**(2) Results.** Pools regenerated (all age 0d): Engine A anchor-walk 466 candidates (466 novel),
Engine E coupling 548 (547 novel, 1 already-listed), blank-finders B/C/D/F + coverage_matrix
refreshed. Ground truth: 468 registry DOIs (419 held), 9 live worklist DOIs (down from 27 pre-strike).

**(3) Adjudication.** No candidate adjudicated to a worklist row this pass — the A/E pools are surfaced
CANDIDATES pending verify-by-reading + expectancy + ratchet (deferred to the next Discover adjudication
cycle). The actionable output this run was STALENESS reconciliation: **18 consumed-but-un-struck
worklist DOIs struck/marked** (this session's iodine batch + the 09-04/09-07 census rows now held or
ingested — Cui, Gijsbers, Pittas, Hooper, Ma, Boushey, Zou×2, Katagiri, Harding, Mendes, Zhao,
Villoz, Nachvak, Vissers causal-leg). GONE now 0. Vissers row kept OPEN (modifier/interaction
question unclosed). 2 AWAITS tokens remain OPEN (un-adjudicated).

**(4) Acquisition status.** Nothing fetched, nothing dropped, nothing ingested (Discover is a
surfacing op). Full candidate set persisted to `wiki/meta/discover-report.md` for the next adjudication.

## [2026-09-17] SELECTION RECORD — discover adjudication pass

**(1) Queries.** No new network queries — adjudicated the pools regenerated by the 2026-09-17
`discover --refresh` (engine A 466 novel, engine E 547 novel; each engine's queries auto-logged
upstream). Verify-by-reading done via `grep` over registry / rejected-sources / claim pages (offline).

**(2) Results.** Top-of-bucket candidates screened against held coverage. Two confirmed novel by
DOI + slug + finding (Neufingerl `10.3390/nu14010029`, Moncrieff `10.1038/s41380-022-01661-0`).

**(3) Adjudication.**
- **FOLD -> worklist (RESEARCH).** Neufingerl 2021 (Nutrients), plant-based vs meat-eater nutrient
  status SR. Ratchet: type-F on held Pawlak (B12-only prevalence) — extends the plant-food deficiency
  stratum to iron/zinc/iodine/omega-3/Ca/D; route-(a)/(c). OA -> hand off to `research`; verify it is a
  genuine SR (not narrative) at acquire.
- **DEFERRED.** Moncrieff 2022 serotonin-theory umbrella. Candidate for the antidepressant standing-drug
  cluster, but efficacy is settled by held Cipriani outcome data independent of the mechanism narrative,
  mental-health is peripheral, and the cluster's efficacy/limitation pair (Cipriani + Henssler, staged)
  is not even ingested yet. Premature; revisit after that pair lands.
- **REJECTED by cluster (echo / off-telos / frontier), representative loci:**
  - *Statins* — Armitage/CTT efficacy, Bytyci intolerance-prevalence, Gencer/Wang/Yebyo/Wilson: echo the
    held CTT-2010 + Reith x2 (muscle/T2D) + Wood-SAMSON (nocebo) + USPSTF depth; no decision-change at margin.
  - *GLP-1/incretin* — Davies/Garvey/Kosiborod/Knop/Wong/Mu/Roux/Bonaca/Aroda: class held (SELECT,
    STEP-1, SURMOUNT-1, FLOW; SURMOUNT-MMO AWAITS); per-agent trials are frontier/prescriber-zone.
  - *PA / sedentary / muscle* — Chastin/Friedenreich/Dinu/Cheng/Ekelund-2018/Garcia-Hermoso/
    Petermann-Rocha/Coelho-Junior: echo held Ekelund x3 + Paluch + Patterson + the muscle cluster.
  - *Fibre / dietary patterns* — Reynolds-2020 (same group as held Reynolds-2019), Xie soluble-fibre,
    Neuenschwander/Jayedi/Morze/Papamichou/Filippou/Sanchez-Sanchez/Estruch: echo held fibre + PREDIMED/
    Mediterranean + dietary-patterns coverage.
  - *Dementia/cognition* — Yu/Kuzma/Chen/Bianchi: echo held Livingston/Peters (Age-Related Diseases).
  - *Off-telos (one-axis / non-modifiable environmental)* — Bont/Qin air pollution, Liu ambient-heat,
    Thompson high-temperature: environmental, not a personal modifiable lever.
  - *Prescriber-zone* — Syn bariatric surgery (surgical selection); Castellana VLCD (weak-DEFER).

**(4) Acquisition status.** 1 folded to worklist (Neufingerl, RESEARCH/OA — not yet fetched); 1
deferred (Moncrieff). Nothing fetched, dropped, or ingested this pass.
- [2026-09-17] acq-engine G contradiction-hunt [rows=all per-row=6] -> closed-scanned=92 unheld-candidates=358 zero-yield=17 | top: 10.21203/rs.3.rs-10316690/v1; 10.26633/rpsp.2025.97; 10.6084/m9.figshare.31747252.v1; 10.1080/09637486.2026.2644867; 10.6084/m9.figshare.31747252 pool-tsv=/workspaces/nutrition/wiki/meta/acq-contradiction.tsv

## [2026-09-17] SELECTION RECORD — Engine G contradiction hunt (first sweep)

**(1) Queries.** `bin/acq_contradiction.py --per-row 6 --write` over the 92 CLOSED lighthouse-index rows
(the engine auto-logged its own run line). Per row: title.search on parsed exposure+outcome terms,
golds `from_year >= lighthouse_year`, anti-joined vs registry. Two-pass (MA-token then broad on a zero).

**(2) Results.** 73 rows yielded, 358 unheld candidates (`acq-contradiction.tsv`); 17 zero-yield
(over-constrained queries — coffee/soy/sweeteners/folate/omega-cognition etc. are TOOL zeros, not
corpus zeros; flagged for hand-curated queries next batch).

**(3) Adjudication (2 reads: loud-title triage over all 358 + abstract-grade read of top \~20 by cites).**
- **FOLD (type-F).** Hu 2019 JAHA marine-omega-3 CVD MA (`10.1161/jaha.119.013543`, 390c, OA) — CONCURS
  with the held VITAL+REDUCE-IT "dose/form is the decision" frame, adds the pooled dose-response MI/CHD
  magnitude. NOT a disagreer -> no TENSION flip. Low-priority RESEARCH row.
- **CONCURS -> cut.** Dairy-BMD-null (`10.1097/gme.0000000000001555`, 16c) — concurs with held row-77
  null ("dairy is not a fracture lever"); title signalled disagreement only vs a folk prior.
- **Noise rejected.** Animal-feed crude-protein (false match); GLP-1 peer-review correspondence
  artifacts; BMI x COVID-severity + FMT-for-C.diff (different-question / prescriber-zone); low-carb
  conference abstracts (0-cite).
- **0 genuine type-D disagreers this batch** — the CLOSED positions held against both nets (robustness).

**(4) Acquisition status.** 1 folded (Hu omega-3, RESEARCH/OA — not yet fetched). Nothing acquired or
ingested. Standing work: the quiet-disagreer abstract-read across the 358 + hand-queries for the 17
zero-yield rows, over subsequent Discover step-3 batches.

## [2026-09-17] SELECTION RECORD — Engine G contradiction hunt, Batch 2 (quiet-disagreer sweep)

**(1) Queries.** Channel = OpenAlex (`bin/abstracts.py` inverted-index reconstruction + `openalex.py
search`), run `--no-log` to avoid per-query spam, hand-logged here per policy. Two nets:
(a) abstract-read of the **261 gold-design candidates** already surfaced in `acq-contradiction.tsv`
(filtered from 358 by dropping correspondence/conference/erratum), across 58 CLOSED rows, via 6
read-only screening subagents;
(b) curated `search "<exp> <outcome>" --type meta-analysis --from-year <lighthouse_year>` for the 17
Batch-1 zero-yield rows: SFA, SSB, vegetarian, diet-quality-index, GLP-1-withdrawal, RT-mortality,
sitting, exercise-injury, calcium-CV, androgen/TRT, multivitamin, folate-NTD, coffee, sweeteners,
soy/isoflavones, Parkinson, social-isolation. Plus targeted verify-queries: lifestyle-vs-metformin
(`meta-analysis`/`systematic-review`).

**(2) Results.** 261 candidate abstracts read; \~15 curated-query rows yielded hits (2 stayed tool-zero:
multivitamin row 69, one sweetener phrasing — alternates found sweetener hits). Attributed 0-hits:
rows 01 and 18 zeroed at 3+ content terms (over-constraint), recovered at 2 terms — TOOL zeros. Many
NO-ABSTRACT items (OpenAlex holds no abstract) listed per slice; decision-relevant ones spot-checked.

**(3) Adjudication + reason.** 0 genuine gold type-D disagreers. SELECTED (fold): 1 low-priority
type-F — `10.1186/s12902-023-01445-9` (BMC metformin-vs-lifestyle MA, concurs with DPP, pooled
magnitude). REJECTED: `10.18203/2394-6040.ijcmph20250011` (metformin equivalence — 0c low-tier,
I2=78%, contradicted by the BMC MA); `10.31662/jmaj.2024-0324` (SFA null — estimates concur in
direction with Hooper, already-held tension, echo); `10.21203/rs.3.rs-1443610/v1` (periodontal-HbA1c
null — sub-gold preprint, different endpoint horizon); all curated-query hits (CONCUR echoes on CLOSED
rows). Full per-row reasoning: `wiki/meta/contradiction-hunt.md` Batch 2.

**(4) Acquisition status.** Nothing acquired or ingested. 1 folded to worklist as low-priority OA-fetch
F-candidate (BMC metformin MA). Engine G full CLOSED-set sweep complete (Batches 1-2); re-run per-row
on lighthouse change or new gold window.
- [2026-09-17] openalex resolve "10.3390/nu14010029" -> 1 hits: https://doi.org/10.3390/nu14010029
- [2026-09-17] openalex search "dietary protein intake kidney function glomerular filtration rate meta-analysis" -> 0 hits: (none)
- [2026-09-17] openalex search "milk dairy consumption hip fracture risk meta-analysis" -> 1 hits: https://doi.org/10.1080/10408398.2019.1590800
- [2026-09-17] openalex search "high protein diet renal function healthy adults systematic review" -> 0 hits: (none)
- [2026-09-17] openalex search "protein intake renal health recommended daily allowance" -> 1 hits: https://doi.org/10.1093/advances/nmy026
- [2026-09-17] openalex search "omega-3 fatty acids atrial fibrillation meta-analysis" -> 6 hits: https://doi.org/10.1093/ehjcvp/pvab008; https://doi.org/10.1007/s10557-021-07204-z; https://doi.org/10.1080/17512433.2021.1913051; https://doi.org/10.1017/s0029665126102493; https://doi.org/10.1161/circep.125.014785
- [2026-09-17] openalex search "milk intake fracture risk prospective cohort meta-analysis" -> 0 hits: (none)
- [2026-09-17] openalex search "dairy calcium bone mineral density fracture meta-analysis" -> 0 hits: (none)
- [2026-09-17] openalex search "high protein intake kidney disease risk cohort meta-analysis" -> 0 hits: (none)
- [2026-09-17] openalex resolve "10.1093/ehjcvp/pvab008" -> 1 hits: https://doi.org/10.1093/ehjcvp/pvab008
- [2026-09-17] openalex resolve "10.1161/circep.125.014785" -> 1 hits: https://doi.org/10.1161/circep.125.014785
- [2026-09-17] openalex resolve "10.1093/advances/nmy026" -> 1 hits: https://doi.org/10.1093/advances/nmy026
- [2026-09-17] openalex fetch "10.1093/advances/nmy026" -> 0 hits: (none)
- [2026-09-17] openalex fetch "10.1093/ehjcvp/pvab008" -> 0 hits: (none)

## [2026-09-17] SELECTION RECORD — opportunistic-depth pass (2nd-gold-SR on medium-confidence single-source pages)

**Context.** Maintainer chose the "opportunistic depth" lane after a fabric-maturity Challenge. Target =
medium-confidence claim pages resting on ONE gold SR whose incumbent is NOT type-E-independent, so a 2nd
independent gold SR firms a decision a reader acts on. Three medium-confidence pages qualified (Protein
-> Kidney / Devries; Dairy -> Bone / Malmir; Omega-3 -> AF / Gencer). Low-confidence pages (GI/GL,
Stress, Magnesium) deprioritised — a hedged page leans less on its sole source.

**(3) Adjudication + reason (per candidate).**
- **SELECTED — Van Elswyk 2018** `10.1093/advances/nmy026` (Adv Nutr SR, gold, 53c, OA-flagged).
  Protein -> Kidney 2nd source. Authors Van Elswyk/Weatherford/McNeill — ZERO overlap with the held
  Devries/Phillips/Morton (registry flags Devries as NOT type-E-independent of the Morton protein
  cluster, so this is a genuine independence gain). Scoped to *healthy individuals above the RDA* — the
  exact decision stratum the page turns on -> type-F refinement + type-E robustness. FLAG for ingest:
  last author McNeill is beef-industry-affiliated (National Cattlemen's Beef Assoc) -> label funding at
  point of use, symmetric standards, do NOT delete.
- **SELECTED — Lombardi 2021** `10.1093/ehjcvp/pvab008` (EHJ-CVP updated MA of RCTs, gold, 68c, OA-flag).
  Omega-3 -> AF 2nd source. Italian cardiology group (Lombardi/Crea/Abbate/Biondi-Zoccai) — ZERO overlap
  with the held Gencer (Cook/Manson/Albert = VITAL cohort), so independent of the AF page's incumbent.
  FLAG for ingest: same core group as the ALREADY-HELD Lombardi 2020 omega-3 dose CV-NMA
  (`10.1007/s11883-020-00865-5`, fish cell) -> adjudicate as type-F on the AF cell, NOT clean type-E
  across the omega-3 holdings.
- **REJECTED — Abuknesha/O'Keefe/Harris 2026** `10.1161/circep.125.014785` (Circ EP, 35-trial/114k
  mega-MA). Author list includes **Christine M. Albert** = shared with the held Gencer -> shared author
  defeats independence instantly (diff-author-lists-first). A larger echo of the VITAL-anchored pool, not
  an independent voice.
- **REJECTED (already held) — Malmir 2019** `10.1080/10408398.2019.1590800`. The only dairy-fracture MA
  the title.search surfaced IS the page's incumbent.
- **DEFERRED — Dairy -> Bone independent 2nd SR.** Broadened queries returned tool-artifact ZEROS
  (openalex title.search strictness — independent milk-fracture MAs plausibly exist, e.g. Bian 2018 /
  Hidayat-type / Matia-Martin 2019, but none caught). Not rabbit-holed in an opportunistic pass; route
  to a dedicated `research Dairy bone fracture` episode.

**(4) Acquisition-requested + status.** Both SELECTED are OUP-hybrid: OpenAlex flags OA but no directly
downloadable PDF, so `openalex fetch` correctly refused (PAYWALLED -> ASK MAINTAINER, do not downgrade)
for BOTH. Nothing fetched to inbox, nothing ingested. Van Elswyk 2018 + Lombardi 2021 registered as
**maintainer-drop targets** (Tier-1b rows updated). Dairy deferred. **ASK: maintainer to drop the two
PDFs, or authorise a browser-fetch (`fetch_browser.py`) attempt.**
- [2026-09-18] acq-engine G contradiction-hunt [rows=top12 per-row=8] -> closed-scanned=12 unheld-candidates=49 zero-yield=2 | top: 10.21203/rs.3.rs-10316690/v1; 10.26633/rpsp.2025.97; 10.6084/m9.figshare.31747252.v1; 10.1080/09637486.2026.2644867; 10.6084/m9.figshare.31747252 pool-tsv=/workspaces/nutrition/wiki/meta/acq-contradiction.tsv

## [2026-09-18] SELECTION RECORD — discover (whole-funnel sweep, post-Gate-41)

**(1) Queries.** `discover.py --write` (no-network, pools 1d fresh from 09-17 refresh); `acq_contradiction.py
--top-rows 12` (OpenAlex, auto-logged); `abstracts.py` on 3 new-window contradiction candidates. Engine
A/E pools re-analyzed off disk (466 A / 548 E candidates); blank-finders B/D flagged STALE (11d) but not
refreshed (breadth-complete corpus, low expected yield).

**(2) Results.** Engine A: 465 novel-by-DOI, Engine E: 546 — pools echo-dominated (top hits are held
lighthouses: Armitage/Gencer/Wang statins, Davies/Garvey/Butler/Kosiborod GLP-1, Lean/Uusitupa DiRECT,
Reynolds fibre held x7) + Engine-E method-ref coupling noise (Solmi/Radua/Fusar-Poli — off-telos).
Contradiction hunt: 49 candidates / 9 CLOSED rows / 2 over-constrained zeros; 3 new-window abstracts read.
GONE: 3 worklist DOIs now held. AWAITS: authority 0 genuinely-open (4 GENERIC-GAP op-weave levers).

**(3) Adjudication.**
- SELECTED: none. No A/E candidate clears the ratchet as an ADVANCER over a held lighthouse; no
  contradiction candidate DISAGREES (3 verified CONCUR: Geroscience CRC, AdvNut MedDiet-T2D, Lancet
  Planetary meat-reduction microsimulation).
- CASHED (GONE, struck from worklist): Neufingerl `10.3390/nu14010029`, Lombardi `10.1093/ehjcvp/pvab008`,
  Van Elswyk `10.1093/advances/nmy026` — all ingested at Gate 41 (2026-09-17).
- REJECTED (echo): the 3 new-window contradiction candidates above + the top A/E citation-pool hits
  (held-lighthouse echoes / off-telos coupling noise).
- DEFERRED (already in ledgers, no new action): Kamstrup Lp(a) MR (QUEUED in awaits-ledger 09-15);
  worklist rows 280-281 (Dairy/Exercise bone-fracture MAs) route to a dedicated `research` episode.

**(4) Acquisition-requested.** None this pass. The pass's product is the staleness reconciliation
(3 GONE struck) + the confirmed 0-disagreer contradiction read, not new picks.
- [2026-09-18] openalex search "lipoprotein a genetically elevated myocardial infarction" -> 3 hits: https://doi.org/10.1001/jama.2009.801; https://doi.org/10.1093/eurjpc/zwag056; https://doi.org/10.1161/circ.118.suppl_18.s_1144-a
- [2026-09-18] openalex search "LPA variants coronary disease lipoprotein a lowering mendelian randomization" -> 1 hits: https://doi.org/10.1016/j.atherosclerosis.2018.06.895
- [2026-09-18] openalex search "lipoprotein a mendelian randomization cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-09-18] openalex resolve "10.1001/jama.2009.801 10.1001/jamacardio.2018.1470" -> 2 hits: https://doi.org/10.1001/jama.2009.801; https://doi.org/10.1001/jamacardio.2018.1470
- [2026-09-18] openalex fetch "10.1001/jamacardio.2018.1470" -> 0 hits: (none)

## [2026-09-18] SELECTION RECORD — research: Lp(a) causal leg (Kamstrup MR + companion)

**Gap.** [[Lipoprotein(a) and Cardiovascular Risk]] rests on ONE source (ERFC 2009 observational IPD)
and names its own missing leg (page line \~95): "the causal leg — Mendelian randomization and any
Lp(a)-lowering outcome trial — is [not held]." Cashes the QUEUED awaits-ledger row (Kamstrup MR, 09-15).

**(1) Queries** (openalex, auto-logged above): `search "lipoprotein a genetically elevated myocardial
infarction" --from-year 2008`; `search "LPA variants coronary disease lipoprotein a lowering mendelian
randomization" --from-year 2016`; `search "lipoprotein a mendelian randomization cardiovascular" --type
meta-analysis --from-year 2015`; `resolve` on the two DOIs below.

**(2) Results.** Kamstrup MR landmark = JAMA 2009 `10.1001/jama.2009.801` (1355c, oa=False). Dose-response
MR = Burgess JAMA Cardiol 2018 `10.1001/jamacardio.2018.1470` (696c, oa=True flag). The `--type
meta-analysis` query returned 0 — attributed to design, not absence: MR IS the causal design, so Lp(a)
causality lives in large single genetic studies, not MR-of-MRs (a 0 here is expected, not a gap).

**(3) Adjudication.**
- SELECTED — **Kamstrup 2009 JAMA** `10.1001/jama.2009.801`. Ratchet rung: no-gold-incumbent on the
  CAUSAL question (page holds only observational). Establishes causal direction (genotype->MI). Copenhagen/
  Nordestgaard lineage — DISJOINT from ERFC's Cambridge/Danesh school, so the clean type-E leg.
- SELECTED — **Burgess 2018 JAMA Cardiol** `10.1001/jamacardio.2018.1470`. The dose-response MR mapping
  Lp(a)-lowering -> estimated CHD benefit (the decision quantity: how much lowering for benefit). Advances a
  DIFFERENT sub-question than Kamstrup (magnitude/threshold vs existence). INDEPENDENCE FLAG for ingest:
  Cambridge/Di Angelantonio lineage likely shares ERFC's school + may cite it -> resolve E-vs-F at ingest
  (author!=auditor); acquire regardless (MR-vs-observational design difference is real value).
- REJECTED — the atherosclerosis.2018.06.895 hit (conference abstract of Burgess, 2c) -> superseded by the
  full JAMA Cardiol paper.

**(4) Acquisition.** Both PAYWALLED at JAMA (Burgess OA-flagged but the fetch 403'd — measured JAMA
anti-bot block; paused, did NOT downgrade). Maintainer dropped both PDFs on request -> RECEIVED, staged
to `raw/binary/` (`Kamstrup - Lipoprotein a Mendelian Randomization.pdf` [canonical slug = the anchored
AWAITS token], `Burgess - LPA Variants Coronary Disease Mendelian Randomization 2018.pdf`). DOIs `10.1001/jama.2009.801` ·
`10.1001/jamacardio.2018.1470`. Verified identity by first-page read. NOT ingested (research ends at
inbox); hand off to *process inbox* -> *plan queue* -> *ingest-seq*.
- [2026-09-18] openalex search "milk consumption fracture risk meta-analysis" -> 2 hits: https://doi.org/10.1080/10408398.2019.1590800; https://doi.org/10.24425/fmc.2022.144088
- [2026-09-18] openalex search "dairy fracture meta-analysis" -> 5 hits: https://doi.org/10.1007/s00198-020-05383-3; https://doi.org/10.1080/10408398.2019.1590800; https://doi.org/10.1186/s12889-018-6175-1; https://doi.org/10.1093/advances/nmy097; https://doi.org/10.1186/s12889-018-5041-5
- [2026-09-18] openalex search "milk dairy hip fracture dose response" -> 0 hits: (none)
- [2026-09-18] openalex search "exercise fracture prevention meta-analysis" -> 3 hits: https://doi.org/10.1016/j.jamda.2013.05.015; https://doi.org/10.1093/ije/dyw142; https://doi.org/10.1007/s00198-022-06592-8
- [2026-09-18] openalex search "physical activity fracture risk older adults meta-analysis" -> 0 hits: (none)
- [2026-09-18] openalex resolve "10.1186/s12889-018-5041-5 10.1007/s00198-022-06592-8" -> 2 hits: https://doi.org/10.1186/s12889-018-5041-5; https://doi.org/10.1007/s00198-022-06592-8
- [2026-09-18] openalex fetch "10.1186/s12889-018-5041-5" -> 0 hits: (none)
- [2026-09-18] openalex fetch "10.1007/s00198-022-06592-8" -> 0 hits: (none)

## [2026-09-18] SELECTION RECORD — research: bone-fracture MAs (dairy + exercise)

Fills acquisition-worklist rows: **Dairy and Bone Health** (Malmir 2019 held/staged, wanted an
independent milk-fracture MA — the DEFERRED 2026-09-17 route) and **Exercise and Bone Mineral
Density** (Mohebbi 2023 held on the BMD *surrogate*, wanted the fracture *endpoint* MA). Channel:
openalex (auto-logged fields 1+2 above); this block is the judged 3+4.

### Dairy -> fracture
- **SELECTED — Bian 2018** `10.1186/s12889-018-5041-5` (BMC Public Health, MA, cites=100, OA).
  "Dairy product consumption and risk of hip fracture: a systematic review and meta-analysis."
  The exact seed the DEFERRED note named. Independent group (China) vs the staged Malmir (Tehran:
  Larijani/Esmaillzadeh) -> the second-witness the worklist wanted. Ratchet-advancer: Malmir is the
  sole staged source on the milk-fracture-paradox question; a disjoint-group MA lets it be corroborated
  or contested. NOTE for ingest: likely type-F not type-E (disjoint authors but shared underlying
  cohort base -- the falls-MA / Pillay pattern; E requires disjoint DATA too). Fetched -> inbox/.
- **DEFERRED — Hidayat 2020** `10.1007/s00198-020-05383-3` (Osteoporos Int, MA, cites=50, paywalled).
  Newer, independent (Hidayat group). Newer-MA-supersedes argues for it, BUT Malmir + Bian already give
  two independent MAs on the same decision-question; a third is an echo unless the first two disagree.
  Revisit as a paywall maintainer-drop ONLY if Malmir vs Bian conflict and need a tiebreak.
- **REJECTED — Shi 2018** `10.1093/advances/nmy097` (Adv Nutr, MA, cites=86, OA). Same year, same
  question as Bian; no signal it reaches a different conclusion. Two MAs suffice -> echo.
- Collision resolved: the near-identical-title 2019 hit `10.1080/10408398.2019.1590800` IS Malmir
  (already held/staged), not a distinct Matia-Martin source. The DEFERRED note's worry is closed.

### Exercise -> fracture
- **SELECTED — 2022 MA** `10.1007/s00198-022-06592-8` (Osteoporos Int, MA, cites=46, OA Springer PDF).
  "Exercise and the prevention of major osteoporotic fractures in adults: a systematic review [and
  meta-analysis]." The patient-important fracture ENDPOINT that Mohebbi 2023 explicitly deferred
  (Mohebbi's note: BMD is a surrogate/target, transmission-to-fracture "carried, not shown here").
  Even if the same Erlangen/Kemmler lineage as Mohebbi (verify authors at ingest -> would be type-F,
  surrogate->outcome refinement, still a genuine advance), it moves the leg the held source could not.
  Fetched -> inbox/.
- **REJECTED — 2016 IJE** `10.1093/ije/dyw142` "Exercise interventions and prevention of fall-related
  fractures" -- fall-related fractures overlap the held Pillay 2024 falls NMA; older; paywalled.
- **REJECTED — 2013 JAMDA** `10.1016/j.jamda.2013.05.015` -- long-term-care-facility-specific stratum,
  older, paywalled; off the community-dwelling decision.

### 0-hit queries (attributed)
- `milk dairy hip fracture dose response` (openalex, no --type) -> 0: title.search strictness
  (over-specified 5-noun query), NOT literature absence -- the broader `dairy fracture` MA query
  returned 5. Tool artifact.
- `physical activity fracture risk older adults` (openalex, --type meta-analysis) -> 0: same strictness;
  `exercise fracture prevention` returned 3. Tool artifact.

Acquisition status: 2 SELECTED, both OA, both fetched to inbox/ (real PDFs, 16pp / 28pp verified).
Nothing ingested. Hand off -> process inbox.
- [2026-09-19] acq-engine G contradiction-hunt [rows=top20 per-row=8] -> closed-scanned=20 unheld-candidates=94 zero-yield=4 | top: 10.21203/rs.3.rs-10316690/v1; 10.26633/rpsp.2025.97; 10.6084/m9.figshare.31747252.v1; 10.1080/09637486.2026.2644867; 10.6084/m9.figshare.31747252 pool-tsv=/workspaces/nutrition/wiki/meta/acq-contradiction.tsv

## [2026-09-19] SELECTION RECORD — discover (whole-funnel acquisition sweep)

Ran the *discover* conductor: `discover.py --selftest` PASS, `--refresh --write` (OpenAlex re-pull),
Engine-G contradiction hunt `acq_contradiction.py --top-rows 20 --write`, then the reader read.

Ground truth: 475 registry DOIs (428 held), 12 worklist DOIs. **GONE = 0** (no worklist DOI has since
been consumed — worklist current w.r.t. held state). **AWAITS = 0 OPEN** per `awaits_status.py`
authority (driver's "2 OPEN" is the known driver-vs-authority drift; 5 GENERIC-GAP = op-weave step-6
directional levers with no paper identified, not acquisition work).

**Engines A/E (citation-walk, agreement-biased): 464 / 546 "novel" — all REJECTED at the margin.**
The high count is expected (citation pools are mostly unheld); every top-cite candidate maps to a
saturated cell or an off-axis field (air pollution, mental-disorder onset — no environmental/mental
primary axis). Two looked like genuine depth-upgrades and both collapse under the ratchet:

- **Neuenschwander 2019** (BMJ, `10.1136/bmj.l2368`, dietary-factors->T2D dose-response) — Neuenschwander
  is a co-author on the held Schlesinger 2019 DIfE/Boeing series, so NOT type-E-independent; and the
  T2D-diet cell already holds two gold umbrellas (Churuangsuk 2022, Szczerba 2023) + Schwingshackl
  2017. Ratchet-echo -> REJECT.
- **Reynolds 2020** (Lancet, `10.1371/journal.pmed.1003053`, fibre/whole-grain dose-response) — shares
  author with the held Reynolds 2019; the worklist already records the sibling Reynolds-2022 as a
  rejected ratchet-echo; cell saturated (Reynolds 2019 + Veronese 2018 + Aune 2016, all gold). REJECT.

**Engine G (contradiction hunt, the only advancer-finder): 94 candidates, 0 disagreers.** Full read in
`contradiction-hunt.md` sweep 4 — all CONCUR or DIFFERENT-QUESTION; no lighthouse row flips to TENSION.
Fourth consecutive nil across widening probes.

**Blank-finders:** coverage-matrix 45 blank cells (already the standing census feeding
`acquisition-worklist.md`; candidates needing verify-by-reading, term-absence != finding-absence — no
fresh find this sweep). acq-variants / acq-frameworks display STALE (12d, 63 newer) — a known
refresh-set display wrinkle, not a signal.

**Net: nothing acquired, nothing folded to the worklist.** Mature-corpus depth phase confirmed — the
citation walk and the contradiction net both return nil at the margin. Regenerated pool tsvs +
discover-report.md committed as the audit trail.
- [2026-09-22] openalex search "protein intake older adults muscle mass sarcopenia meta-analysis" -> 0 hits: (none)
- [2026-09-22] openalex search "protein distribution per meal older adults muscle systematic review" -> 0 hits: (none)
- [2026-09-22] openalex search "protein requirement older adults" -> 5 hits: https://doi.org/10.1017/s0954422421000329; https://doi.org/10.3389/fnut.2025.1486482; https://doi.org/10.3390/nu15153307; https://doi.org/10.1017/s0954422421000408; https://doi.org/10.1016/j.carage.2023.04.015
- [2026-09-22] openalex search "diet kidney stone prevention meta-analysis" -> 0 hits: (none)

## [2026-09-22] SELECTION RECORD — research (frontier-state probe on genuine first-gold gaps)
Context: maintainer asked whether the research funnel is near exhausted across golds/lighthouses/
ratchets/disagreeing-golds/gaps/adjacent-topics. Probed the genuine first-gold OPEN lighthouse rows
(the only rows where a gold would actually clear) to test whether the missing gold now EXISTS.

- **Elderly protein target (g/kg)** [lighthouse OPEN, incumbent Bauer PROT-AGE 2013, flagged TOP gap].
  MA/SR title.search -> 0 (over-constrained artifact); broad "protein requirement older adults" from
  2021 -> 5 hits. Top = Traylor 2021 `10.1017/s0954422421000329` (47c) — a NARRATIVE review, non-gold
  and lower-tier than the held consensus. REJECT (does not advance the ratchet; a narrative review
  cannot clear an OPEN-needs-gold row). Others (2025 IAAO sarcopenia study; 2023 intake-adequacy
  articles) = single studies off the target question -> REJECT. **No gold SR/MA exists to pin the
  g/kg knee** — insufficient-evidence/expectancy state, consistent with "no study pinned a protein
  knee." Gap stays OPEN with nothing acquirable.
- **Per-meal protein dose (older adults)** [lighthouse OPEN, Moore 2014 moderate]. SR title.search
  -> 0 (artifact). No fresh gold surfaced; DEFER (no acquirable gold identified).
- **Kidney-stone dietary prevention** [lighthouse OPEN, EAU Urolithiasis 2026 staged]. MA
  title.search -> 0 (artifact). Incumbent guideline already STAGED for ingest; no separate gold SR
  needed at the margin -> DEFER to ingest of the staged guideline.

Acquisition-requested: NONE. Net: the genuine first-gold gaps have no gold to find; the remaining
frontier is (a) an ingest backlog of already-staged sources, (b) a bounded UPGRADE/depth census, and
(c) the ongoing trickle of newly-published golds. No worklist rows added.
- [2026-09-22] openalex search "metabolically healthy obesity cardiovascular mortality meta-analysis" -> 0 hits: (none)
- [2026-09-22] openalex search "LDL cholesterol intracerebral hemorrhage" -> 4 hits: ?; https://doi.org/10.1177/17474930241239523; https://doi.org/10.1016/j.jstrokecerebrovasdis.2025.108224; https://doi.org/10.53555/ajbr.v27i4s.4777
- [2026-09-22] openalex search "apolipoprotein B stroke subtype" -> 0 hits: (none)

## [2026-09-22] SELECTION RECORD — drop-list DOI resolution + upgrade census
Context: maintainer requested the outstanding maintainer-drop DOI list + a fresh bounded upgrade census.
- **Ingest-ready pile correction**: lighthouse "staged" flags are STALE. Disk ground truth = 3 genuinely
  ready staged guidelines (WHO Total Fat 2023, WHO PA 2020, EAU Urolithiasis 2026 in `guidelines/`);
  0 books/papers queued; `inbox/_hold/` 12 all gated-out (OCR/abstract-only/superseded/cut/echo/mis-scoped).
- **LDL -> intracerebral-hemorrhage gap** (`#gap-ldl-hemorrhagic-stroke`, was maintainer-drop pending):
  search surfaces likely-OA golds — a 2020 MA (25c, DOI unresolved in API row) and Wang 2025
  `10.1016/j.jstrokecerebrovasdis.2025.108224` (statins/PCSK9i -> ICH risk, oa=True). RECLASSIFY from
  maintainer-drop to **OA-fetch candidate — verify equivalence-or-better vs the walled Ma 2019 / Li 2025
  before acquiring** (don't-downgrade; the OA paper answers the drug-lowering-agent arm, may differ from
  the observational subtype-split the row wanted).
- **Abiri MHO-durability** + **Li 2025 apoB stroke-subtype**: title.search 0-hit artifacts; DOIs
  unresolved — stay maintainer-drop pending, low priority (anchors Opio 2020 / Marston already held).
Acquisition-requested: NONE this pass (candidates only). Upgrade census presented to maintainer.
- [2026-09-22] openalex fetch "10.1016/j.jstrokecerebrovasdis.2025.108224" -> 0 hits: (none)
- [2026-09-22] openalex search "waist circumference all-cause mortality meta-analysis" -> 0 hits: (none)
- [2026-09-22] openalex search "dietary pattern all-cause mortality meta-analysis" -> 2 hits: https://doi.org/10.3390/nu15173860; https://doi.org/10.17504/protocols.io.yxmvm3en5l3p/v1
- [2026-09-22] openalex search "accelerometer sedentary time mortality meta-analysis" -> 1 hits: https://doi.org/10.1136/bjsports-2020-103270
- [2026-09-22] openalex fetch "10.1136/bjsports-2020-103270" -> 0 hits: (none)
- [2026-09-22] openalex search "waist-to-hip ratio mortality" -> 6 hits: https://doi.org/10.1001/jama.2023.19205; https://doi.org/10.1016/j.clnesp.2025.03.051; https://doi.org/10.1093/ckj/sfac210; https://doi.org/10.3390/jpm11121355; https://doi.org/10.1007/s11255-021-02954-z
- [2026-09-22] openalex search "Mediterranean diet all-cause mortality cohort meta-analysis" -> 0 hits: (none)
- [2026-09-22] openalex search "vegan micronutrient deficiency status systematic review" -> 0 hits: (none)
- [2026-09-22] openalex search "portfolio diet LDL cholesterol meta-analysis" -> 0 hits: (none)

## [2026-09-22] SELECTION RECORD — depth-upgrade acquisition ("go ahead")
Executed acquisition on the upgrade shortlist. All 5 depth targets verified genuinely single-source
(1 EXTRACTED tag each, not in-body-corroborated).
- **SELECTED + FETCHED**: Ekelund 2020 accelerometer PA+sedentary -> mortality NMA
  `10.1136/bjsports-2020-103270` (381c, OA) -> inbox/. Independent 2nd gold for [[Sedentary Behaviour and Chronic Disease Risk]] — DEVICE-MEASURED (vs Patterson's self-report) + different lineage = a
  genuine type-E robustness witness, not an echo. Ready for process-inbox.
- **MAINTAINER-DROP (walled, don't-downgrade)**:
  - Wang 2025 statin/PCSK9i -> ICH `10.1016/j.jstrokecerebrovasdis.2025.108224` — OA fetch returned
    HTTPError -> drop. Verify it answers the ICH subtype question before it counts as the gap-fill.
  - Central adiposity SR 2025 `10.1016/j.clnesp.2025.03.051` (Elsevier) — independent of Jayedi but
    Jayedi DR-MA already strong -> LOW-MED, optional.
  - (Standing: glucosamine `10.1007/s00402-021-04326-9`; Ghorbani low-carb `10.1016/j.arr.2023.101997`.)
- **NOT ACQUIRABLE / DEFERRED**:
  - Portfolio -> LDL: **G-GAP (structural)** — the Portfolio construct is proprietary to the
    Jenkins/Chiavaroli group, so no independent-lineage gold exists; [[Portfolio Dietary Pattern and LDL Cholesterol]] is inherently single-source, not a fillable gap.
  - Dietary patterns (Boushey) + plant-based nutrient adequacy (Neufingerl): comprehensive incumbents;
    a 2nd = low-ratchet echo -> DEFER.
Acquisition-requested: 1 fetched (Ekelund -> inbox), 4 maintainer-drop, 1 G-gap, 2 deferred.
- [2026-09-22] openalex search "kidney stone recurrence dietary prevention systematic review" -> 0 hits: (none)
- [2026-09-22] openalex search "nephrolithiasis fluid intake recurrence meta-analysis" -> 0 hits: (none)
- [2026-09-22] openalex search "kidney stone diet" -> 6 hits: https://doi.org/10.3390/nu12030779; https://doi.org/10.2215/cjn.01520216; https://doi.org/10.1007/s10654-014-9904-5; https://doi.org/10.3390/diseases9020039; https://doi.org/10.1093/ajcn/nqaa066
- [2026-09-22] openalex search "nephrolithiasis prevention systematic review" -> 3 hits: https://doi.org/10.1186/s12882-020-01925-3; https://doi.org/10.17463/rcm.2016.01.005; https://doi.org/10.1016/j.acuroe.2023.06.010
- [2026-09-22] openalex search "urolithiasis dietary intervention meta-analysis" -> 0 hits: (none)
- [2026-09-22] openalex search "water intake kidney stone" -> 6 hits: https://doi.org/10.1007/s00240-016-0892-7; https://doi.org/10.1016/j.urology.2020.01.024; https://doi.org/10.1017/s1368980022001033; https://doi.org/10.1016/j.juro.2018.07.064; https://doi.org/10.1016/j.appet.2024.107747
- [2026-09-22] openalex search "recurrent kidney stone randomized" -> 6 hits: https://doi.org/10.23736/s2724-6051.25.05903-8; https://doi.org/10.1186/s40001-023-01226-z; https://doi.org/10.1097/ju.0000000000003236.20; https://doi.org/10.1016/j.clnu.2026.106754; https://doi.org/10.1016/s0302-2838(23)00404-9
- [2026-09-22] openalex resolve "10.1186/s12882-020-01925-3" -> 1 hits: https://doi.org/10.1186/s12882-020-01925-3

## [2026-09-22] SELECTION RECORD — kidney-stone diet 2nd-gold discovery (weave #2 nucleus G-gap)
Channel: openalex (queries auto-logged above). Purpose: does an independent gold dietary/fluid
kidney-stone SR/MA exist to lift the single-source [[Kidney Stone Recurrence Prevention]] (EAU-only)
off provisional-C scaffolding? Note: the two `--type systematic-review/meta-analysis` queries returned
0 (the known title.search over-constraint); broad + singularized queries recovered the pool.

Adjudication (per candidate):
- SELECTED -> `10.1186/s12882-020-01925-3` (Lin 2020, BMC Nephrol) — gold SR+MA, OA, INDEPENDENT of
  EAU, NOVEL (discover --novelty). Fills the general-population INCIDENCE arm (primary prevention) =
  the other half of the incidence-vs-recurrence stratum split just woven. Registry placeholder + AWAITS
  + worklist row added. Independence-verify author list at ingest (multiple "Lin" co-authors; distinct
  from held sources).
- REJECTED `10.23736/s2724-6051.25.05903-8` (thiazide recurrence MA 2025) — gold + recurrence, but a
  DRUG (agent-specific) -> frontier/prescriber zone per the taper; not the dietary/fluid lever the gap
  wants.
- REJECTED the cohort/cross-sectional hits (nu12030779 review; cjn.01520216, s10654 EPIC, ajcn Med-diet
  cohorts; NHANES water associations) — observational singles, below the 2nd-gold bar; EAU already
  synthesises this evidence class.
- REJECTED `diseases9020039` (kidney stones on ketogenic diet) — off-question (harm of a specific diet,
  not a prevention lever census).
- NOT-FOUND: a dietary *recurrence* SR beyond EAU. Fink 2013 (AHRQ) is the dated landmark but not
  surfaced/likely superseded by EAU 2026. Recurrence-triangulation named a STRUCTURAL gap (dietary-
  recurrence RCT base sparse; EAU itself reports no prospective sodium-isolating trial).

Acquisition-requested: 1 queued (Lin 2020, OA-fetchable — folded into acquisition-worklist.md, NOT yet
fetched; ingest is a separate delegated op). 0 maintainer-drop. 1 structural gap named (recurrence).
- [2026-09-23] openalex search "exercise insulin sensitivity without weight loss meta-analysis" -> 0 hits: (none)
- [2026-09-23] openalex search "breaking up sitting postprandial glucose meta-analysis" -> 0 hits: (none)
- [2026-09-23] openalex search "postprandial walking glycemic control meta-analysis" -> 0 hits: (none)
- [2026-09-23] openalex search "exercise snacks" -> 6 hits: https://doi.org/10.1007/s00125-014-3244-6; https://doi.org/10.1037//0022-3514.52.1.119; https://doi.org/10.1037/0022-3514.52.1.119; https://doi.org/10.1249/jes.0000000000000275; https://doi.org/10.1139/apnm-2018-0675
- [2026-09-23] openalex search "interrupting sitting glucose" -> 6 hits: https://doi.org/10.1007/s40279-019-01183-w; https://doi.org/10.1186/s12966-020-01057-9; https://doi.org/10.1152/ajpendo.00599.2020; https://doi.org/10.1016/j.metabol.2019.04.003; https://doi.org/10.1210/clinem/dgaa834
- [2026-09-23] openalex search "exercise glycaemic control meta-analysis" -> 6 hits: https://doi.org/10.1080/17461391.2022.2086489; https://doi.org/10.1136/bjsports-2024-108127; https://doi.org/10.1016/j.numecd.2020.12.006; https://doi.org/10.1111/dme.15096; https://doi.org/10.1136/bmjsem-2018-000470
- [2026-09-23] openalex search "mindfulness blood pressure meta-analysis" -> 4 hits: https://doi.org/10.1016/j.heliyon.2020.e03834; https://doi.org/10.7759/cureus.58434; https://doi.org/10.1097/01.hjh.0000748252.13174.15; https://doi.org/10.1097/jcn.0000000000001284
- [2026-09-23] openalex search "expressive writing health meta-analysis" -> 6 hits: https://doi.org/10.1037/0022-006x.74.2.243; https://doi.org/10.1002/pon.3802; https://doi.org/10.1371/journal.pone.0131802; ?; https://doi.org/10.1007/s00520-023-08255-8
- [2026-09-23] openalex search "green space health systematic review" -> 6 hits: https://doi.org/10.3390/ijerph18052563; https://doi.org/10.1016/j.envres.2019.108869; https://doi.org/10.3390/ijerph182111028; https://doi.org/10.3390/ijerph15122668; https://doi.org/10.3390/ijerph18179010
- [2026-09-23] openalex search "Wim Hof method" -> 6 hits: https://doi.org/10.1371/journal.pone.0286933; https://doi.org/10.1038/s41598-023-44902-0; https://doi.org/10.3389/fspor.2021.700757; https://doi.org/10.1016/j.cpnec.2024.100272; https://doi.org/10.3390/jcm11082218
- [2026-09-23] openalex search "yoga hypertension meta-analysis" -> 5 hits: https://doi.org/10.3389/fpubh.2022.846231; https://doi.org/10.1016/j.jaim.2023.100882; https://doi.org/10.1371/journal.pone.0323268; https://doi.org/10.1097/01.hjh.0001026844.81313.07; https://doi.org/10.1097/01.hjh.0000749216.98849.fd
- [2026-09-23] openalex search "triglyceride HDL ratio cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-09-23] openalex search "triglyceride glucose HDL mortality" -> 3 hits: https://doi.org/10.3390/jcm13164832; https://doi.org/10.1016/j.clinbiochem.2025.110891; https://doi.org/10.3390/diagnostics16060844
- [2026-09-23] openalex search "nonalcoholic fatty liver incident diabetes meta-analysis" -> 3 hits: https://doi.org/10.1111/jgh.13264; https://doi.org/10.2337/dc17-1902; https://doi.org/10.1016/j.diabres.2023.110699
- [2026-09-23] openalex search "non-HDL cholesterol cardiovascular risk meta-analysis" -> 0 hits: (none)
- [2026-09-23] openalex search "triglyceride HDL ratio meta-analysis" -> 3 hits: https://doi.org/10.1093/labmed/lmae052; https://doi.org/10.1002/edm2.70161; https://doi.org/10.1186/s12884-026-09647-4
- [2026-09-23] openalex search "exercise insulin sensitivity meta-analysis" -> 6 hits: https://doi.org/10.4093/dmj.2016.40.4.253; https://doi.org/10.1111/obr.12719; https://doi.org/10.1111/obr.13445; https://doi.org/10.1097/gme.0000000000000936; https://doi.org/10.3389/fendo.2025.1409474
- [2026-09-23] openalex resolve "10.1007/s40279-019-01183-w 10.2337/dc17-1902 10.1371/journal.pone.0286933 10.1371/journal.pone.0323268 10.1093/labmed/lmae052" -> 5 hits: https://doi.org/10.1007/s40279-019-01183-w; https://doi.org/10.2337/dc17-1902; https://doi.org/10.1371/journal.pone.0286933; https://doi.org/10.1371/journal.pone.0323268; https://doi.org/10.1093/labmed/lmae052
- [2026-09-23] openalex fetch "10.1007/s40279-019-01183-w" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.2337/dc17-1902" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1371/journal.pone.0286933" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1371/journal.pone.0323268" -> 0 hits: (none)

## [2026-09-23] SELECTION RECORD — surrogate/lipid + MASLD + isocaloric-exercise + stress-mitigation research
Scope question from the maintainer ("is there scope for papers about ..."), read as a *research* op
(discover + vet + acquire to inbox/, NOT ingest). Six clusters. Two read-only Explore agents pinned
existing coverage first (safe during the concurrent Lin ingest); acquisition confined to the genuine
gaps that clear expectancy + ratchet.

**A — surrogate markers / lipid sufficiency for CVD (LDL robustness, events-vs-mortality, SFA/ApoB/
non-HDL/TG-HDL).** Mostly SATURATED. The fabric already holds the LDL-as-surrogate appraisal, the
ApoB/non-HDL discriminant question, and the events-vs-mortality split.
- DEFER A2 (events-vs-mortality endpoint choice) — this is a *synthesis* move over held sources, not an
  acquisition gap. Route to Weave, not to inbox.
- A4 non-HDL: `10.1001/jama.2012.6706` class already represented; a fresh MA is marginal -> DEFER.
- SELECTED + MAINTAINER-DROP A5 `10.1093/labmed/lmae052` (TG/HDL ratio -> incident diabetes MA 2024) —
  gold, NOVEL, and it cashes the standing `[AWAITS]` on Insulin Resistance Surrogates (TG/HDL as a
  cheap IR proxy). OUP (labmed) headless-blocks -> cannot OA-fetch; hand to the maintainer to drop.
  `10.1002/edm2.70161` is a weaker echo -> not requested.

**B — (folded into A)** no separate cluster acquired.

**C — MASLD / ectopic fat -> metabolism.** Partly covered; the incidence link to T2D was the open arm.
- SELECTED + FETCHED `10.2337/dc17-1902` (Mantovani NAFLD -> incident T2D MA 2018, Diabetes Care, OA)
  -> inbox/. Gold, NOVEL. Fills the MASLD->dysglycaemia incidence arm; independent of held metabolic-
  syndrome sources. Ready for process-inbox.

**D — isocaloric / short daily exercise on metabolism (sitting-breaks, snacks, insulin sensitivity).**
Real gap — the fabric holds the volume->mortality dose but not the *isocaloric interruption* lever.
- SELECTED + FETCHED `10.1007/s40279-019-01183-w` (Loh, interrupting sitting -> glucose/insulin MA
  2019, Sports Medicine, OA) -> inbox/. Gold, NOVEL. Directly the isocaloric short-bout question.
- C1 `10.4093/dmj.2016.40.4.253` (exercise -> insulin sensitivity MA 2016, DMJ) — older, broader,
  OPTIONAL 2nd; not fetched (ratchet-marginal beside Loh's sharper isocaloric framing).

**E — stress mitigation (journalling · meditation · fresh air · cold water · Wim Hof · yoga ·
embodiment).** Peripheral-lifestyle: admit only operationalized protocols with a physical-outcome
claim; symmetric standards; demote fads if the human evidence does not hold.
- SELECTED + FETCHED `10.1371/journal.pone.0286933` (Wim Hof Method physiological+psychological SR
  2024, PLoS ONE, OA) -> inbox/. Operationalized named protocol, physical/physiological endpoints,
  NOVEL. Lets the fabric appraise the fad on its own evidence (likely a demote-if-weak case).
- SELECTED + FETCHED `10.1371/journal.pone.0323268` (Yoga -> arterial hypertension MA 2025, PLoS ONE,
  OA) -> inbox/. Gold, NOVEL, physical outcome (BP). Yoga as a stress->BP lever.
- REJECTED D1 mindfulness->BP (`10.1097/jcn.0000000000001284` etc.) — ECHO of held Chen 2024; no
  ratchet gain.
- DEFER D2 journalling / expressive writing (`10.1037/0022-006x.74.2.243`, `10.1002/pon.3802`) — the
  outcomes are largely psychological; physical-outcome signal thin -> expectancy-borderline peripheral
  GAP-NOTE, not acquired.
- DEFER D3 nature / green space (`10.3390/ijerph18052563` class) — same expectancy-borderline peripheral
  read; discussed heavily, small physical effect -> GAP-NOTE.
- DROPPED D7 embodiment — not operationalized to a named protocol with a measurable claim; below the
  admission bar.

Acquisition-requested: 4 FETCHED -> inbox/ (Loh sitting-breaks / Mantovani NAFLD-T2D / Wim Hof SR /
Yoga-hypertension), 1 MAINTAINER-DROP (`10.1093/labmed/lmae052` TG/HDL MA, OUP-walled, cashes the
Insulin-Resistance-Surrogates AWAITS), 1 optional-not-fetched (DMJ 2016), 3 gap-notes (journalling,
nature, events-vs-mortality synthesis), 1 dropped (embodiment). Nothing ingested. Hand the 4 inbox PDFs
to a future process-inbox.

## [2026-09-23] SELECTION RECORD — discover (post-ingest-seq refresh)
Whole-funnel refresh (engines A-F + coverage_matrix regenerated vs current registry, OpenAlex auto-logged).
Ground truth: 481 registry DOIs (434 held), worklist 15.
- GONE: 2 worklist DOIs now held -> STRUCK (Ekelund 10.1136/bjsports-2020-103270; Lin 10.1186/s12882-020-01925-3).
- AWAITS: 2 OPEN tokens (carried; not newly adjudicated this pass).
- Engine A/E novel candidates: hundreds, but top-cited are overwhelmingly ECHOES of covered domains
  (statins, semaglutide/GLP-1, Mediterranean diet, UPF, fibre, sarcopenia) — mature-corpus signature,
  low ratchet yield. NO new candidate folded to worklist this pass (full adjudication DEFERRED — maintainer
  redirected to a large belief-harvest run as the higher-yield frontier channel: running out of breadth
  sources, the contested-hypothesis frontier is where acquisition value now sits).
- Contradiction hunt (Engine G): NOT run this pass (deferred with the redirect).
Verdict: pools refreshed + GONE struck; candidate adjudication + Engine G deferred to a focused pass.
- [2026-09-23] openalex search "DASH diet blood pressure meta-analysis" -> 4 hits: https://doi.org/10.1093/advances/nmaa041; https://doi.org/10.3389/fnut.2021.725020; https://doi.org/10.1093/ehjci/ehaa946.2765; https://doi.org/10.3390/metabo13080924
- [2026-09-23] openalex search "blue light filtering spectacle lenses" -> 3 hits: https://doi.org/10.1371/journal.pone.0169114; https://doi.org/10.1002/14651858.cd013244.pub2; https://doi.org/10.1186/s12886-017-0545-9
- [2026-09-23] openalex search "Mediterranean DASH blood pressure meta-analysis" -> 0 hits: (none)
- [2026-09-23] openalex search "magnesium blood pressure meta-analysis" -> 3 hits: https://doi.org/10.3945/ajcn.117.155291; https://doi.org/10.1007/s12011-020-02157-0; ?
- [2026-09-23] openalex search "interval training diabetes meta-analysis" -> 3 hits: https://doi.org/10.1016/j.diabres.2017.12.017; https://doi.org/10.1007/s40520-018-1012-z; https://doi.org/10.1016/j.rehab.2021.101586
- [2026-09-23] openalex search "exercise timing glucose" -> 3 hits: https://doi.org/10.1016/j.jcjd.2020.05.012; https://doi.org/10.1002/oby.22811; https://doi.org/10.3389/fendo.2022.1021800
- [2026-09-23] openalex search "protein bone fracture meta-analysis" -> 3 hits: https://doi.org/10.3969/j.issn.1003-0034.2020.01.017; https://doi.org/10.7759/cureus.71732; https://doi.org/10.3969/j.issn.2095-4344.2944
- [2026-09-23] openalex search "fructose uric acid" -> 3 hits: https://doi.org/10.3390/nu9040395; https://doi.org/10.1016/j.jhep.2016.12.025; https://doi.org/10.1074/jbc.ra118.006158
- [2026-09-23] openalex search "time-restricted eating diabetes" -> 3 hits: https://doi.org/10.1001/jamanetworkopen.2023.39337; https://doi.org/10.3390/nu12113228; https://doi.org/10.1038/s41591-023-02287-7
- [2026-09-23] openalex search "blood flow restriction hypertrophy meta-analysis" -> 3 hits: https://doi.org/10.1007/s40279-018-0994-1; https://doi.org/10.1097/jsm.0000000000000991; https://doi.org/10.1371/journal.pone.0259574
- [2026-09-23] openalex search "paleolithic diet" -> 3 hits: https://doi.org/10.3945/jn.115.224048; https://doi.org/10.3945/jn.116.241919; https://doi.org/10.1002/dmrr.2828
- [2026-09-23] openalex search "vegetarian mortality meta-analysis" -> 1 hits: https://doi.org/10.1016/j.ajpc.2021.100182
- [2026-09-23] openalex search "vegan nutrient status" -> 3 hits: https://doi.org/10.1371/journal.pone.0148235; https://doi.org/10.15252/emmm.202013492; https://doi.org/10.3390/nu13051707
- [2026-09-23] openalex search "Nordic diet cardiovascular" -> 3 hits: https://doi.org/10.15171/jcvtr.2018.25; https://doi.org/10.3390/nu13093034; https://doi.org/10.4045/tidsskr.16.0243
- [2026-09-23] openalex search "low FODMAP diet systematic review" -> 3 hits: https://doi.org/10.1038/s41395-018-0195-4; https://doi.org/10.1136/gutjnl-2021-325214; https://doi.org/10.1007/s00394-020-02473-0
- [2026-09-23] openalex search "ketogenic diet exercise performance" -> 3 hits: https://doi.org/10.1371/journal.pone.0234027; https://doi.org/10.3390/nu11102296; https://doi.org/10.3390/nu13082896
- [2026-09-23] openalex search "resistant starch insulin" -> 3 hits: https://doi.org/10.1186/s40168-017-0230-5; https://doi.org/10.1016/j.jff.2020.103939; https://doi.org/10.1038/s41387-019-0086-9
- [2026-09-23] openalex search "branched-chain amino acids insulin resistance" -> 3 hits: https://doi.org/10.1038/nm.4057; https://doi.org/10.3390/nu8070405; https://doi.org/10.2337/dc17-1642
- [2026-09-23] openalex search "creatine bone mineral density" -> 3 hits: https://doi.org/10.3389/fnut.2018.00027; https://doi.org/10.1016/j.exger.2019.01.025; https://doi.org/10.1097/md.0000000000034724
- [2026-09-23] openalex search "nitrate exercise performance meta-analysis" -> 3 hits: https://doi.org/10.1519/jsc.0000000000002046; https://doi.org/10.1186/s12970-021-00472-y; https://doi.org/10.1186/s12970-021-00450-4
- [2026-09-23] openalex search "melatonin insomnia meta-analysis" -> 3 hits: https://doi.org/10.1016/j.neubiorev.2021.04.034; https://doi.org/10.1016/j.sleep.2019.02.017; https://doi.org/10.3390/jcm9061949
- [2026-09-23] openalex search "probiotics irritable bowel syndrome meta-analysis" -> 3 hits: https://doi.org/10.1111/apt.15001; https://doi.org/10.3389/fcimb.2022.859967; https://doi.org/10.1053/j.gastro.2023.07.018
- [2026-09-23] openalex search "Boswellia osteoarthritis" -> 3 hits: https://doi.org/10.1186/s12906-020-02985-6; https://doi.org/10.1002/ptr.6338; https://doi.org/10.1016/j.semarthrit.2018.03.001
- [2026-09-23] openalex search "carnivore diet" -> 3 hits: https://doi.org/10.1111/mam.12144; https://doi.org/10.1111/1365-2664.13227; https://doi.org/10.3390/ani8050067
- [2026-09-23] openalex search "cold exposure brown adipose tissue" -> 3 hits: https://doi.org/10.1016/j.metabol.2020.154396; https://doi.org/10.1016/j.beem.2016.08.003; https://doi.org/10.15252/embr.202050085
- [2026-09-23] openalex search "glymphatic clearance sleep" -> 3 hits: https://doi.org/10.1016/j.cell.2024.11.027; https://doi.org/10.1016/j.neulet.2017.05.064; https://doi.org/10.1152/physiol.00019.2024
- [2026-09-23] openalex search "exogenous ketone supplementation" -> 3 hits: https://doi.org/10.3389/fpsyt.2019.00363; https://doi.org/10.1093/advances/nmac036; https://doi.org/10.1007/s40279-022-01756-2
- [2026-09-23] openalex search "exercise intensity mitochondrial adaptation" -> 3 hits: https://doi.org/10.1113/jp273871; https://doi.org/10.1371/journal.pone.0202784; https://doi.org/10.1016/j.jtherbio.2025.104119
- [2026-09-23] openalex search "ambient temperature sleep" -> 3 hits: https://doi.org/10.1080/23328940.2022.2109932; https://doi.org/10.1016/j.cub.2019.05.009; https://doi.org/10.1080/07420528.2017.1288632
- [2026-09-23] openalex search "mouth taping" -> 3 hits: https://doi.org/10.1016/j.jcms.2019.12.003; https://doi.org/10.3390/healthcare10091755; https://doi.org/10.1186/s12903-023-03631-6
- [2026-09-23] openalex search "wearable sleep tracking accuracy" -> 3 hits: https://doi.org/10.2196/50983; https://doi.org/10.3390/s24206532; https://doi.org/10.2196/preprints.50983
- [2026-09-23] openalex search "DASH Mediterranean diet" -> 3 hits: https://doi.org/10.1093/advances/nmz054; https://doi.org/10.1212/wnl.0000000000207176; https://doi.org/10.1016/j.cct.2021.106270
- [2026-09-23] openalex search "exercise timing glycemic control" -> 3 hits: https://doi.org/10.1249/mss.0000000000002139; https://doi.org/10.1155/2018/2483273; https://doi.org/10.1249/01.mss.0001264384.16086.78
- [2026-09-23] openalex search "dietary protein bone mineral density" -> 3 hits: https://doi.org/10.1093/gerona/glab068; https://doi.org/10.1016/j.bone.2018.10.003; https://doi.org/10.1038/s41598-025-93642-w
- [2026-09-23] openalex search "uric acid blood pressure meta-analysis" -> 3 hits: https://doi.org/10.1080/07853890.2016.1243803; https://doi.org/10.1016/j.ejogrb.2020.07.042; https://doi.org/10.1038/s41371-018-0134-2
- [2026-09-23] openalex fetch "10.1186/s12906-020-02985-6" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.3390/nu13082896" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1038/s41387-019-0086-9" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.3389/fnut.2018.00027" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1186/s12970-021-00450-4" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1111/apt.15001" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1080/07853890.2016.1243803" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1007/s40279-018-0994-1" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1007/s40520-018-1012-z" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.3390/nu13082896" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.3945/ajcn.117.155291" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1249/mss.0000000000002139" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1093/gerona/glab068" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.3945/jn.115.224048" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1136/gutjnl-2021-325214" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.2337/dc17-1642" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1093/advances/nmac036" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1002/14651858.cd013244.pub2" -> 0 hits: (none)
- [2026-09-23] openalex fetch "10.1007/s00394-020-02473-0" -> 0 hits: (none)

## [2026-09-23] SELECTION RECORD — belief-harvest run 16 acquisition sweep (HIGH+MEDIUM=30)
The 30 top-ranked routed slugs from belief-harvest run 16 (maintainer: "Acquire HIGH+MEDIUM"),
worked as a *research* op: openalex search -> tier/recency/OA/fit + novelty vs held registry ->
SELECT/DEFER -> OA-fetch to inbox/, paywall/block -> maintainer-drop (PAUSE-AND-ASK, no downgrade).
Not ingested. 17 SELECTED (8 fetched, 9 maintainer-drop), 13 DEFERRED.

**SELECTED + FETCHED -> inbox/ (8):**
- `10.1186/s12906-020-02985-6` boswellia-knee-osteoarthritis-ma-2020 — opener, new supplement cell
  (Boswellia -> OA pain/function); none held.
- `10.1038/s41387-019-0086-9` resistant-starch-glucose-insulin-ma-2019 — opener, RS/fermentation
  metabolic cell; none held.
- `10.3389/fnut.2018.00027` creatine-rt-bone-mineral-density-ma-2018 — on-question NULL (creatine +
  RT does NOT raise BMD); the BMD cell is not held (Kreider/Choi cover lean-mass, not bone).
- `10.1186/s12970-021-00450-4` nitrate-endurance-performance-ma-2021 — NEW outcome cell (ergogenic/
  endurance); held nitrate sources (Siervo 2013, Norouzzadeh 2025) are BP-only.
- `10.1111/apt.15001` probiotics-prebiotics-synbiotics-ibs-ma-2018 (Ford) — the evidence-bearing SR-MA
  under the held WGO 2023 *recommendation* (cite the underlying SR for efficacy); strain/prebiotic/
  synbiotic breakdown answers the strain-specificity belief.
- `10.1007/s40279-018-0994-1` blood-flow-restriction-strength-hypertrophy-ma-2018 — opener, landmark
  BFR cell; none held.
- `10.1007/s40520-018-1012-z` hiit-glycemic-control-t2d-ma-2018 — NEW outcome+stratum (glycemic
  control in T2D); held Poon 2024 is HIIT->CRF/VO2max only. Check supersession at ingest (2018).
- `10.1007/s00394-020-02473-0` low-fodmap-ibs-ma-vanlanen-2021 — opener, FODMAP cell; none held.
  Equal-tier gold OA substitute for the paywalled Black 2021 (Gut) — NOT a downgrade (same year,
  full SR-MA, Eur J Nutr); Black listed below as optional maintainer-drop.

**SELECTED + MAINTAINER-DROP (9 — OA flag but publisher-walled/blocked; do not downgrade):**
- `10.3945/ajcn.117.155291` magnesium supplementation -> BP in insulin-resistant stratum (AJCN/OUP,
  paywalled). Advancer over held Fang 2016 (which is dietary-Mg-intake cohort -> mortality): this is
  the supplementation-RCT causal leg + the IR effect-modification stratum.
- `10.1249/mss.0000000000002139` exercise-timing -> glycemic control RCT (Savikj, MSSE/LWW, paywalled)
  — landmark PM-vs-AM RCT; the timing belief's core evidence.
- `10.1093/gerona/glab068` dietary protein -> BMD/fracture in older adults (J Gerontol/OUP, paywalled)
  — protein->bone cell not held.
- `10.3945/jn.115.224048` Paleolithic + Mediterranean pattern scores -> mortality cohort (J Nutr,
  ScienceDirect-blocked) — paleo cell opener (pattern-score observational).
- `10.1080/07853890.2016.1243803` urate-lowering therapy -> BP MA (Ann Med/T&F, blocked) — the causal
  leg of the fructose->urate->BP chain (does lowering urate lower BP?).
- `10.2337/dc17-1642` MR: insulin resistance -> circulating BCAA (Diabetes Care/ADA, paywalled) —
  causal-DIRECTION finding (IR drives BCAA, not BCAA->IR); defuses "BCAA supplements cause diabetes".
- `10.1093/advances/nmac036` exogenous ketones -> blood glucose SR-MA (Adv Nutr/OUP, paywalled) —
  frontier-supplement opener.
- `10.1002/14651858.cd013244.pub2` blue-light-filtering lenses Cochrane 2023 (cochranelibrary blocked)
  — the REFUTE-source (no evidence of benefit) for the blue-light-glasses belief.
- `10.3390/nu13082896` ketogenic diet -> aerobic capacity MA 2021 (MDPI, 403 headless + browser) —
  frontier keto-performance cell; MDPI normally fetchable, RETRY at next pass before maintainer-drop.
- (optional) `10.1136/gutjnl-2021-325214` Black low-FODMAP MA (Gut/BMJ) — higher-profile alternative
  to the fetched van Lanen; drop only if the maintainer prefers it.

**DEFERRED (13 — no acquisition; reason each):**
- dash-vs-med-bp — no distinct head-to-head gold; the outcome-specific split is weavable now from held
  Siervo(DASH)+Med sources -> pending-intersection WS-023, not an acquire.
- tre-t2d — superseded concurring echo of held Semnani-Azad 2025 IF-NMA (99 RCTs, cutoff \~2024,
  cardiometabolic + T2D strata); ratchet-fail.
- melatonin-dose-response — held Ferracioli-Oda 2013 covers the efficacy leg (SOL/total-sleep); a
  dose-response NMA is a marginal refinement, not an advancer.
- veg-mortality (`ajpc.2021.100182`) — saturated by held Landry 2024 umbrella + Orlich 2013. RESIDUAL
  GAP noted: the EPIC-Oxford higher-haemorrhagic-stroke finding in vegetarians is distinct + unheld.
- vegan-nutrient-status — held Neufingerl 2021 covers iron/zinc/iodine/omega-3/Ca/D across strata.
- nordic-cvd — held NNR 2023 guideline covers Nordic guidance; no clean dedicated Nordic-diet-CVD SR
  identified (broad "regional diets" hit only) -> re-query or GAP at a later pass.
- carnivore-nutrient-adequacy — literature ABSENCE: openalex returns only wildlife-ecology "carnivore"
  papers; no human carnivore-diet SR exists (expectancy test: none expected yet).
- cold-exposure-bat-metabolic — mechanism/physiology only (UCP1, BAT glucose oxidation); no human
  patient-important-outcome SR ("not yet" bucket).
- glymphatic-clearance-sleep — mechanism/animal only (Cell 2025 vasomotion); [REVIEW] marker already
  placed on [[Sleep and Cognitive Decline]]; not acquirable as gold.
- zone2-mitochondrial-adaptation — no gold SR on the specific zone-2 claim; primary/mechanism +
  coaching-lore, kept peripheral by Layer-1.
- bedroom-temperature-sleep — mechanism/thin (REM-modulation-by-temp animal work); no human
  sleep-quality SR on ambient bedroom temperature.
- mouth-taping-osa-snoring — single small pilot (n small, mild OSA); no SR; below gold-gate. Absence
  is the finding.
- sleep-tracker-accuracy — scope-edge: device metrology (consumer-tracker validation), not a
  modifiable-exposure -> patient-important-outcome claim. Out of the outcome menu.

Acquisition-requested: 8 FETCHED -> inbox/; 9 MAINTAINER-DROP (paywall/block, DOIs above, no
downgrade) + 1 optional (Black FODMAP); 13 DEFERRED (2 with residual gap-notes: EPIC-Oxford stroke,
Nordic-CVD re-query). Nothing ingested. Hand the 8 inbox PDFs to a future process-inbox.

### [2026-09-23] maintainer-drop RECEIVED — run-16 sweep (7 of the 9)
Maintainer supplied 7 of the 9 maintainer-drop PDFs -> inbox/ (canonical slugs), joining the 8 fetched
= 15 staged for a future process-inbox. Received: magnesium-supplementation-bp (Dibaba 2017),
exercise-timing-glycemic-rct (Savikj 2019), dietary-protein-bmd (Weaver 2021 gerona/glab068),
urate-lowering->BP MA, exogenous-ketones->glucose (nmac036), keto->aerobic-capacity (nutrients-13-02896).
- **CORRECTION — paleo slug re-identified.** `10.3945/jn.115.224048` is Whalen 2016 *"...Inversely
  Associated with Biomarkers of Inflammation and Oxidative Balance"* — a CROSS-SECTIONAL study (n=646)
  on hsCRP + F2-isoprostane SURROGATES, NOT the mortality cohort. OpenAlex's title truncation misled the
  run-16 slug ("paleo-mortality"). Staged as `paleolithic-mediterranean-inflammation-biomarkers-2016.pdf`
  (surrogate/cross-sectional -> label endpoint at ingest). RESOLVED 2026-09-23: the actual
  paleo->MORTALITY paper is Whalen 2017 *"...Inversely Associated with All-Cause and Cause-Specific
  Mortality in Adults"* (J Nutr 2017;147:612-20; DOI 10.3945/jn.116.241919; REGARDS cohort n=21,423,
  2513 deaths; all-cause HR 0.77 Paleo / 0.63 Med, highest-vs-lowest quintile). Maintainer-dropped +
  staged as `Whalen - Paleolithic Mediterranean Mortality 2017.pdf`; residual gap CLOSED.
- **Still outstanding (2, hard-walled, not supplied):** `10.2337/dc17-1642` (MR: insulin resistance ->
  BCAA, Diabetes Care) and `10.1002/14651858.cd013244.pub2` (blue-light-filtering lenses Cochrane 2023).
- [2026-09-23] openalex resolve "10.1007/s40279-018-0994-1" -> 1 hits: https://doi.org/10.1007/s40279-018-0994-1
- [2026-09-23] openalex resolve "10.1186/s12906-020-02985-6" -> 1 hits: https://doi.org/10.1186/s12906-020-02985-6
- [2026-09-23] openalex resolve "10.3389/fnut.2018.00027" -> 1 hits: https://doi.org/10.3389/fnut.2018.00027
- [2026-09-23] openalex resolve "10.1093/advances/nmac036" -> 1 hits: https://doi.org/10.1093/advances/nmac036
- [2026-09-23] openalex resolve "10.1007/s40520-018-1012-z" -> 1 hits: https://doi.org/10.1007/s40520-018-1012-z
- [2026-09-23] openalex resolve "10.3390/nu13082896" -> 1 hits: https://doi.org/10.3390/nu13082896
- [2026-09-23] openalex resolve "10.1186/s12970-021-00450-4" -> 1 hits: https://doi.org/10.1186/s12970-021-00450-4
- [2026-09-23] openalex resolve "10.1038/s41387-019-0086-9" -> 1 hits: https://doi.org/10.1038/s41387-019-0086-9
- [2026-09-23] openalex resolve "10.1080/07853890.2016.1243803" -> 1 hits: https://doi.org/10.1080/07853890.2016.1243803
- [2026-09-23] openalex resolve "10.1186/s12906-020-02985-6" -> 1 hits: https://doi.org/10.1186/s12906-020-02985-6
- [2026-09-23] openalex search "Paleolithic Mediterranean Mortality" -> 1 hits: https://doi.org/10.3945/jn.116.241919
- [2026-09-23] openalex resolve "10.3945/jn.116.241919" -> 1 hits: https://doi.org/10.3945/jn.116.241919
- [2026-09-23] openalex search "exercise timing time of day glycemic control glucose systematic review" -> 0 hits: (none)
- [2026-09-23] openalex search "exercise timing glycemic systematic review" -> 1 hits: https://doi.org/10.53389/jrcrs.2025130402
- [2026-09-23] openalex search "time of day exercise glucose systematic review" -> 0 hits: (none)
- [2026-09-23] openalex search "exercise timing cardiometabolic" -> 6 hits: https://doi.org/10.1139/apnm-2018-0462; https://doi.org/10.1111/j.1463-1326.2010.01307.x; https://doi.org/10.1136/openhrt-2025-003573; https://doi.org/10.1519/jsc.0000000000005075; https://doi.org/10.1152/japplphysiol.00507.2024
- [2026-09-25] openalex search "ketogenic low carbohydrate diet endurance exercise performance systematic review" -> 1 hits: https://doi.org/10.3390/nu13082896
- [2026-09-25] openalex search "fructose sugar-sweetened beverages serum uric acid systematic review" -> 0 hits: (none)
- [2026-09-25] openalex search "branched-chain amino acids incident type 2 diabetes risk systematic review" -> 0 hits: (none)
- [2026-09-25] openalex search "ketogenic diet athletic performance meta-analysis" -> 0 hits: (none)
- [2026-09-25] openalex search "fructose uric acid meta-analysis" -> 3 hits: https://doi.org/10.1093/jn/nxab144; https://doi.org/10.36525/sanitas.2024.507; https://doi.org/10.1093/cdn/nzab053_004
- [2026-09-25] openalex search "fructose serum urate systematic review" -> 0 hits: (none)
- [2026-09-25] openalex search "branched-chain amino acid diabetes meta-analysis" -> 6 hits: https://doi.org/10.3390/nu14204411; https://doi.org/10.1007/s00592-018-1243-7; https://doi.org/10.5812/ijem.85413; https://doi.org/10.7717/peerj.20054; https://doi.org/10.12032/mdm2020033002
- [2026-09-25] openalex fetch "10.1093/jn/nxab144" -> 0 hits: (none)
- [2026-09-25] openalex fetch "10.3390/nu14204411" -> 0 hits: (none)
- [2026-09-25] openalex resolve "10.1093/jn/nxab144" -> 1 hits: https://doi.org/10.1093/jn/nxab144
- [2026-09-25] openalex resolve "10.3390/nu14204411" -> 1 hits: https://doi.org/10.3390/nu14204411
- [2026-09-25] openalex resolve "10.3945/jn.116.241919" -> 1 hits: https://doi.org/10.3945/jn.116.241919
- [2026-09-25] openalex search "blue light filtering lenses sleep meta-analysis" -> 1 hits: https://doi.org/10.1097/md.0000000000043915
- [2026-09-25] openalex search "blue light blocking glasses sleep systematic review" -> 1 hits: https://doi.org/10.3389/fneur.2025.1699303
- [2026-09-25] openalex fetch "10.3389/fneur.2025.1699303" -> 0 hits: (none)

## [2026-09-25] SELECTION RECORD — Gate-44 corrective #2 depth-fold acquisitions (4 named targets)
Channel: OpenAlex (auto-logged above) + 2 maintainer-drops. Goal: acquire the SPECIFIC 2nd-gold / off-insufficient
source the depth census named for four single-source or insufficient cells — NOT a breadth sweep. Ground truth
checked per candidate: registry (`sources.md`), `done/`, `cut/`, `rejected-sources.md`, `acquisition-worklist.md`.
Over-constrained-zero artifact hit again (`"fructose sugar-sweetened beverages serum uric acid" --type SR` -> 0;
`"branched-chain amino acids incident type 2 diabetes" --type SR` -> 0) — broadened + dropped the outcome-phrase
strictness, which surfaced the real golds. All 3 acquired are NOVEL, gold-gate PASS, chunk-clean born-digital.

**Target 3 — fructose -> serum uric acid (upstream leg for [[Uric Acid Lowering and Blood Pressure]]):**
- SELECTED `10.1093/jn/nxab144` (Ayoub-Charette 2021, J Nutr) — SR-MA of 47 CONTROLLED FEEDING TRIALS (RCTs),
  GRADE, food-source heterogeneity (SSBs/sweets UP, 100% fruit juice DOWN). RCT-based, stronger than the
  observational upstream sought. Maintainer-dropped PDF (OUP paywall) -> `raw/binary/papers/`, registered, chunked.
- REJECTED `10.36525/sanitas.2024.507` (2025) — obscure low-cite venue, same non-gold class refused for the
  exercise-timing gap. REJECTED `10.1093/cdn/nzab053_004` (cites=0) — conference-abstract supplement, not a full MA.

**Target 4 — circulating/dietary BCAA -> incident T2D (pairs held Wang MR for [[Branched-Chain Amino Acids and Insulin Resistance]]):**
- SELECTED `10.3390/nu14204411` (Ramzan 2022, Nutrients) — SR-MA of 9 PROSPECTIVE cohorts, circulating
  valine/leucine/isoleucine each OR \~2.1 for T2D across temporal subgroups. The observational association the
  held MR causally defuses -> type-D. Maintainer-dropped PDF (MDPI Cloudflare 403 on all 3 fetch rungs incl.
  Steel) -> `raw/binary/papers/`, registered, chunked.
- DEFERRED `10.1007/s00592-018-1243-7` (2018, DIETARY BCAA -> T2D, paywall) — distinct exposure (intake, not
  circulating); a possible 2nd facet later, not needed now. Others (GDM / pre-diabetes variants) = different outcome, not taken.

**Target 2 — blue-light-filtering lenses/glasses -> sleep (move [[Blue-Light Filtering Lenses]] off insufficient):**
- SELECTED `10.3389/fneur.2025.1699303` (Luna-Rangel 2025, Front Neurol) — SR-MA of double-blind RCT crossover,
  HEALTHY ADULTS, ACTIGRAPHIC (objective) sleep; pooled NULL (3 RCTs n=49, all outcomes ns, I2=0%). The
  objective-outcome upgrade. OA-fetched cleanly -> `raw/binary/papers/`, registered, chunked.
- REJECTED `10.1097/md.0000000000043915` — INTRAOCULAR lenses (cataract surgical implants), wrong exposure +
  clinical population + prescriber-zone, off-target.

**Target 1 — keto -> endurance 2nd gold: CONFIRMED NO-2ND-GOLD GAP, nothing acquired.** Only OpenAlex gold hit is
the already-held `Cao - Ketogenic Diet Aerobic Capacity 2021` (`10.3390/nu13082896`); broad
`"ketogenic diet athletic performance" --type MA` = 0. [[Ketogenic Diet and Endurance Performance]] stays
single-source (confidence low); did NOT downgrade to a non-gold. Same class as the exercise-timing gold-MA gap.

Acquisition-requested / status: 3 staged to `raw/binary/papers/` (fetched OK), queued as Gate-44 corrective #2
depth-folds (ingest-queue NEXT-UP top block); 1 confirmed gap (no acquisition). Ingest = separate delegated-worktree
steps, not run here.
- [2026-09-25] openalex search "garlic blood pressure hypertension meta-analysis" -> 2 hits: https://doi.org/10.1097/01.hjh.0000752400.24367.fa; https://doi.org/10.2478/abm-2025-0016
- [2026-09-25] openalex search "garlic supplement blood pressure systematic review" -> 1 hits: https://doi.org/10.1002/ptr.70032
- [2026-09-25] openalex search "cinnamon glycemic control type 2 diabetes meta-analysis" -> 2 hits: https://doi.org/10.1002/ptr.8026; https://doi.org/10.1186/s13098-023-01057-2
- [2026-09-25] openalex fetch "10.1186/s13098-023-01057-2" -> 0 hits: (none)
- [2026-09-25] openalex search "garlic blood pressure meta-analysis randomized" -> 0 hits: (none)
- [2026-09-25] openalex resolve "10.2478/abm-2025-0016" -> 1 hits: https://doi.org/10.2478/abm-2025-0016
- [2026-09-25] openalex search "slow breathing device-guided blood pressure meta-analysis" -> 6 hits: https://doi.org/10.1016/j.ctim.2019.03.005; https://doi.org/10.1002/hsr2.636; https://doi.org/10.2196/33579; https://doi.org/10.82161/d0yf-5f05; https://doi.org/10.1093/eurheartj/ehac544.2208
- [2026-09-25] openalex search "coenzyme Q10 statin-associated muscle symptoms meta-analysis" -> 0 hits: (none)
- [2026-09-25] openalex fetch "10.2478/abm-2025-0016" -> 0 hits: (none)
- [2026-09-25] openalex fetch "10.2196/33579" -> 0 hits: (none)
- [2026-09-25] openalex search "proton pump inhibitor long-term adverse outcomes meta-analysis" -> 1 hits: https://doi.org/10.1097/meg.0000000000001198
- [2026-09-25] openalex fetch "10.1002/hsr2.636" -> 0 hits: (none)
- [2026-09-25] openalex search "coenzyme Q10 statin muscle symptoms" -> 6 hits: https://doi.org/10.12659/msm.890777; https://doi.org/10.1093/advances/nmy010; https://doi.org/10.1007/s40256-017-0251-2; https://doi.org/10.2217/fca-2021-0106; https://doi.org/10.1002/cpt.70325
- [2026-09-25] openalex search "proton pump inhibitor safety umbrella review" -> 1 hits: https://doi.org/10.1016/j.jval.2020.04.1157
- [2026-09-25] openalex search "coenzyme Q10 statin myopathy meta-analysis" -> 3 hits: https://doi.org/10.1161/jaha.118.009835; https://doi.org/10.1007/s11845-021-02651-x; https://doi.org/10.1017/jns.2025.10043
- [2026-09-25] openalex fetch "10.1093/advances/nmy010" -> 0 hits: (none)
- [2026-09-25] openalex search "NSAID resistance training muscle hypertrophy" -> 0 hits: (none)
- [2026-09-25] openalex fetch "10.1017/jns.2025.10043" -> 0 hits: (none)
- [2026-09-25] openalex fetch "10.1161/jaha.118.009835" -> 0 hits: (none)

## [2026-09-25] SELECTION RECORD — belief-harvest run 17 HIGH-band selective acquisition (7 slugs)

Selective pass over the run-17/18 harvest slugs (`acquisition-worklist.md` UPDATE 2026-09-25). Scoped to
the run-17 **HIGH band** (big-rock BP/T2D gaps, standard-drug taper, exercise-programming); run 18 carried
NO HIGH acquires (the ceiling read) so it was not force-acquired. Gold-gate held throughout; pause-and-ask
on every fetch block, no downgrade.

**Field 3 — adjudication (per HIGH slug):**
- `cinnamon-glycemia-t2d` — **SELECTED + ACQUIRED.** OA umbrella review Zhou 2023
  (`10.1186/s13098-023-01057-2`, umbrella-tier, 34 cites) fetched -> `inbox/`. Highest available design
  for the T2D-stratum question; supersedes the single-SR alternative (`10.1002/ptr.8026`, paywalled).
- `coq10-statin-myalgia` — **SELECTED + ACQUIRED.** 2025 SR+MA (`10.1017/jns.2025.10043`, JNS, fully OA)
  fetched via browser-escalation (Cambridge blocks the plain fetch; the paper is genuinely OA, so the
  Playwright escalation is not paywall circumvention). Recency supersedes the 2018 JAHA landmark
  (`10.1161/jaha.118.009835`, 184 cites, **PAYWALLED**) which the 2025 SR pools anyway. Cross-links the
  held statin-nocebo fabric (likely nocebo-null read).
- `garlic-bp-lipids` — **DEFERRED (maintainer-drop).** All garlic-BP gold is paywalled: abm 2025 MA
  (`10.2478/abm-2025-0016`), aged-garlic SR (`10.1002/ptr.70032`), Ried landmark not OA. `--open-access`
  broad query = 0. Did NOT downgrade to the conference-abstract hit. -> maintainer PDF drop.
- `slow-paced-breathing-blood-pressure` — **DEFERRED (maintainer-drop).** Landmark MA ctim 2019
  (`10.1016/j.ctim.2019.03.005`, 48 cites) PAYWALLED; hsr2.636 SR PAYWALLED; the one OA JMIR DOI
  (`10.2196/33579`) is the **protocol**, not the completed MA (0 KB landing page). -> maintainer PDF drop.
- `ppi-safety-longterm` — **DEFERRED (maintainer-drop).** Only gold is the 2018 SR+MA
  (`10.1097/meg.0000000000001198`, 85 cites, PAYWALLED); no OA umbrella (jval PNS159 is a conference
  abstract). Standard-drug-taper gap stays open pending a maintainer drop. -> maintainer PDF drop.
- `nsaid-resistance-training-hypertrophy` — **NO SR EXISTS (expectancy-confirmed GAP).** `NSAID
  resistance training muscle hypertrophy` = 0 hits (MA and broad). If a pooled SR existed we would expect
  to see it; its absence is a real named gap, not acquisition work. Stays a GENERIC-GAP.
- `thyroid-function-body-weight` — **NOT PURSUED this pass.** Scope-guarded to the risk-factor edge, lower
  Layer-1 value; left queued.

**Field 4 — acquisition-requested + status:**
- Fetched to `inbox/` (2): `Zhou - Cinnamon Glycemic Control Umbrella 2023.pdf` (10pp, valid);
  `CoQ10 Statin Myopathy Systematic Review 2025.pdf` (11pp, valid, browser-escalated).
- Maintainer PDF drop needed (3): garlic-BP MA, slow-breathing-BP MA (ctim 2019 or hsr2.636),
  PPI long-term-safety SR+MA (2018 meg). Paused-and-asked, not downgraded.
- Confirmed gap, no acquisition (1): nsaid-RT-hypertrophy (no SR exists).
- Not ingested here — PDFs staged for a later *process inbox* -> ingest.
- [2026-09-25] openalex search "proton pump inhibitor adverse events umbrella review umbrella review" -> 0 hits: (none)
- [2026-09-25] openalex search "proton pump inhibitor umbrella review meta-analyses" -> 5 hits: https://doi.org/10.1111/apt.16407; https://doi.org/10.1111/bcp.15103; https://doi.org/10.1007/s10620-025-09458-1; https://doi.org/10.7759/cureus.87383; https://doi.org/10.1093/jcag/gwae059.249
- [2026-09-25] openalex search "long-term proton pump inhibitor safety systematic review systematic review" -> 0 hits: (none)
- [2026-09-25] openalex fetch "10.1111/bcp.15103" -> 0 hits: (none)
- [2026-09-25] openalex search "Ried garlic blood pressure meta-analysis" -> 0 hits: (none)
- [2026-09-25] openalex search "effect of garlic on blood pressure meta-analysis" -> 7 hits: https://doi.org/10.1186/1471-2261-8-13; https://doi.org/10.1111/jch.12473; https://doi.org/10.1016/j.ijcard.2011.08.750; https://doi.org/10.1097/01.hjh.0000752400.24367.fa; https://doi.org/10.1002/ptr.70032
- [2026-09-25] openalex fetch "10.1186/1471-2261-8-13" -> 0 hits: (none)

## [2026-09-25] SELECTION RECORD — run-17 acquisition AMENDMENT (widened PPI + garlic Ried)

Follow-up to the HIGH-band pass above, on maintainer request to widen PPI-umbrella and garlic-Ried.

- `garlic-bp-lipids` — **UPGRADED to ACQUIRED.** Ried 2008 landmark SR+MA (`10.1186/1471-2261-8-13`,
  BMC Cardiovasc Disord, OA, 255 cites) fetched -> `inbox/` (12pp valid). No longer maintainer-drop.
  Recency caveat: 2008; newer garlic-BP MAs exist but are paywalled (abm 2025 `10.2478/abm-2025-0016`;
  jch 2015 `10.1111/jch.12473`, OA-flagged but Wiley pdfdirect blocks automated fetch) — maintainer can
  add one as a refinement if a current estimate is wanted.
- `ppi-safety-longterm` — **stays MAINTAINER-DROP, target refined.** Best gold is now the 42-SR umbrella
  Salvo 2021 (`10.1111/apt.16407`, 78 cites, PAYWALLED). The OA umbrella `10.1111/bcp.15103` (2021, 52
  cites) is genuinely open but Wiley pdfdirect returns HTTP 403 to plain fetch, local Playwright, AND
  Steel — not machine-fetchable here; a maintainer browser session can pull it directly (it is OA, not
  paywalled). Preferred drop: `10.1111/apt.16407`; free alternate the maintainer can grab: `10.1111/bcp.15103`.
- [2026-09-25] acq-engine G contradiction-hunt [rows=top8 per-row=8] -> closed-scanned=8 unheld-candidates=35 zero-yield=1 | top: 10.21203/rs.3.rs-10316690/v1; 10.26633/rpsp.2025.97; 10.6084/m9.figshare.31747252.v1; 10.1080/09637486.2026.2644867; 10.6084/m9.figshare.31747252 pool-tsv=NONE(run --write for full pool)

## [2026-09-25] SELECTION RECORD — discover (whole-funnel reconcile, post run-17-HIGH ingest)

Conductor pass after the run-17 HIGH band + Chaddha + Kovacic all ingested. `discover.py` no-network,
`awaits_status.py`, `acq_contradiction.py --top-rows 8` (openalex queries auto-logged above).

**Field 2 — results (denominators).** Ground truth 511 registry DOIs (460 held), 22 worklist DOIs.
Engine A 465 candidates/465 novel (pool 2d); Engine E 548/546 novel (2d) — large citation echo-pools,
mostly out-of-scope / prescriber-zone (statin & semaglutide trials, sarcopenia/mental-disorder
prevalence). Blank-finders B/C/D/F/cov STALE but are gaps, not papers. GONE = 7 worklist DOIs now held
(the run-17 HIGH golds). AWAITS OPEN = 2-3 only. Contradiction hunt: 6 CLOSED rows scanned, 35 unheld
candidates, all echoes / conference-abstracts / tiny-cite / out-of-scope — no clear DISAGREE advancer.

**Field 3 — adjudication.** No candidate SELECTED for acquisition this pass. The high-value band is
consumed; remaining candidates fail the ratchet (concurring echoes on gold-covered questions) or sit
past the scope frontier. Symmetric standards: neither a confirming nor a refuting gold cleared the bar.
Struck the 7 GONE DOIs as CONSUMED in `acquisition-worklist.md` (run-17 block closed). Blank-finder
regeneration (`--refresh`) DEFERRED — pools 2d fresh; a stale gap is not a paper.

**Field 4 — acquisition-requested.** None. Marginal acquisition yield is low (DEPTH phase, per
`inflection-points.md` + memory `acquisition-engines-complete`). Recommend a depth pivot (weave the 5
new pages / compile the STALE Dietary Supplements deliverable) over a low-ratchet breadth acquire —
surfaced to the maintainer as the phase call (do not flip silently).
- [2026-09-25] openalex search "Magnesium Supplementation Blood Pressure meta-analysis" -> 8 hits: https://doi.org/10.3945/ajcn.117.155291; https://doi.org/10.1007/s12011-020-02157-0; ?; https://doi.org/10.1016/j.curtheres.2024.100755; https://doi.org/10.3390/nu16213617
- [2026-09-25] openalex resolve "10.1161/HYPERTENSIONAHA.116.07664" -> 1 hits: https://doi.org/10.1161/hypertensionaha.116.07664
- [2026-09-25] openalex resolve "10.1016/j.curtheres.2024.100755 10.1161/hypertensionaha.125.25129" -> 2 hits: https://doi.org/10.1016/j.curtheres.2024.100755; https://doi.org/10.1161/hypertensionaha.125.25129
- [2026-09-25] openalex fetch "10.1161/hypertensionaha.116.07664" -> 0 hits: (none)

## [2026-09-25] SELECTION RECORD — Zhang 2016 magnesium->BP (maintainer request: "acquire zhang 2016")

Targeted acquire, not a sweep. The `[AWAITS (Zhang - Magnesium Supplementation Blood Pressure 2016)]`
token on [[Dietary Magnesium and Cardiometabolic Outcomes]] names the general-population Mg-supplement
-> BP MA that would supply the non-impaired-stratum arm Dibaba (held, impaired-stratum) deliberately excluded.

**Field 1 — query.** openalex `resolve 10.1161/HYPERTENSIONAHA.116.07664` (DOI known from Dibaba ref 12);
openalex `search "Magnesium Supplementation Blood Pressure meta-analysis"` (channel: OpenAlex, no date filter);
openalex `resolve` on two newer OA candidates; openalex `fetch` on the target DOI.

**Field 2 — results.** Target Zhang 2016 resolved (1 hit, DOI 10.1161/hypertensionaha.116.07664,
Hypertension 2016;68:324-333, 34 trials / 2028 participants, \~250 cites — the canonical general-pop
Mg->BP MA). `fetch` -> 0 OA PDF: PAYWALLED (Hypertension/AHA, anti-bot-walled). Search surfaced newer
OA-fetchable alternatives: 2024 umbrella `10.1016/j.curtheres.2024.100755`; 2025 AHA MA
`10.1161/hypertensionaha.125.25129`; plus older `10.3945/ajcn.117.155291`, `10.1007/s12011-020-02157-0`,
`10.3390/nu16213617`.

**Field 3 — adjudication.**
- Zhang 2016 — **SELECTED (maintainer-drop).** Named target; paywalled, so PAUSE-AND-ASK applied (no
  downgrade). Surfaced to maintainer that it is NOT independent of held Dibaba (shared author Yiqing
  Song -> its fabric value is a general-population F-arm on [[Dietary Magnesium and Cardiometabolic Outcomes]],
  never corroborating type-E), and that newer OA options exist. Maintainer chose the named landmark;
  **PDF supplied and STAGED to `inbox/` 2026-09-25** (first-page verified: correct paper, SBP -2.00
  [0.43-3.58], DBP -1.78 [0.73-2.82], median 368 mg/d).
- 2024 umbrella / 2025 AHA MA / older MAs — **DEFERRED.** Offered as OA-fetchable substitutes; maintainer
  declined in favour of the exact named source. Not acquired; remain candidates if a current estimate is
  later wanted.

**Field 4 — acquisition-requested.** Zhang 2016 -> maintainer-drop -> **DELIVERED to `inbox/`**
(`inbox/Zhang - Magnesium Supplementation Blood Pressure 2016.pdf`, 12pp, valid). Next step is *process
inbox* -> stage -> ingest (NOT run here; acquire ends at inbox/). Others: none requested.
- [2026-09-26] acq-engine G contradiction-hunt [rows=top12 per-row=8] -> closed-scanned=12 unheld-candidates=49 zero-yield=2 | top: 10.21203/rs.3.rs-10316690/v1; 10.26633/rpsp.2025.97; 10.6084/m9.figshare.31747252.v1; 10.1080/09637486.2026.2644867; 10.6084/m9.figshare.31747252 pool-tsv=/workspaces/nutrition/wiki/meta/acq-contradiction.tsv
- [2026-09-26] acq-engine G contradiction-hunt [rows=top12 per-row=8] -> closed-scanned=12 unheld-candidates=49 zero-yield=2 | top: 10.21203/rs.3.rs-10316690/v1; 10.26633/rpsp.2025.97; 10.6084/m9.figshare.31747252.v1; 10.1080/09637486.2026.2644867; 10.6084/m9.figshare.31747252 pool-tsv=NONE(run --write for full pool)
- [2026-09-26] openalex resolve "10.3389/fnut.2022.878979" -> 1 hits: https://doi.org/10.3389/fnut.2022.878979

## [2026-09-26] SELECTION RECORD — discover pass

**Op:** Discover (whole-funnel sweep). Driver `discover.py` (no-network) + Engine G contradiction hunt
(`acq_contradiction.py --top-rows 12 --write`). Fields 1+2 auto-logged above (Engine-G queries + the eggs
resolve).

**Field 3 — adjudication.**
- **Engine G (contradiction hunt), 49 candidates across 9 CLOSED rows — ALL REJECTED (echo/off-question).**
  0 gold reaching a different conclusion; the eggs 2022 Frontiers MA specifically verified against the held
  Godos+Ma+Zhong anchor and cut as an interior echo. Full read: `contradiction-hunt.md` sweep 5. 0 TENSION
  flips. Fifth consecutive nil.
- **Engines A (465 novel) + E (546 novel) — NO ROW SELECTED.** DOI-novel but agreement/coverage-biased:
  the on-telos high-cite hits are echoes of held anchors (Reynolds 2019 fibre, Aune whole-grain, MedDiet
  golds) — confirmed by spot-check (Reynolds landmark held; PLoS-2020 Reynolds an echo per rejected-sources)
  — and the rest is off-telos (mental-health onset, air pollution, bariatric surgery, semaglutide-obesity
  RCTs, sarcopenia prevalence). Folding these would manufacture coverage, not decision-value (depth phase).
- **Blank-finders B/C/D/F/cov — STALE (age 3-19d, 27-98 source pages newer) but NOT refreshed.** Breadth is
  complete (Engine-D 0 missing branches confirmed 09-07); a blank is a gap not a paper, and expected yield
  is \~0. Deferred with rationale, not swept.
- **AWAITS — 0 OPEN** (`awaits_status.py` authoritative; discover's looser count of 2 superseded). 8
  GENERIC-GAP are op-weave directional levers, not acquisition work.
- **GONE — 7 DOIs**, all already recorded CLOSED in the worklist 09-25 run-17 reconcile block; no active
  row to strike (they persist as GONE only as textual records).

**Field 4 — acquisition-requested.** NONE. Discover surfaced no survivor clearing expectancy+ratchet this
pass; nothing sent to `research`/`inbox`. Marginal acquisition yield low — DEPTH phase, mature corpus.
- [2026-09-26] openalex search "omega-3 EPA depression meta-analysis" -> 0 hits: (none)
- [2026-09-26] openalex search "saffron depression meta-analysis" -> 5 hits: https://doi.org/10.1055/a-0660-9565; https://doi.org/10.1093/nutrit/nuz023; https://doi.org/10.1093/nutrit/nuae076; https://doi.org/10.2147/prbm.s199343; https://doi.org/10.1016/j.phrs.2021.105963
- [2026-09-26] openalex search "omega-3 depression meta-analysis" -> 6 hits: https://doi.org/10.1038/s41398-019-0515-5; https://doi.org/10.1192/bjp.2019.234; https://doi.org/10.1016/j.plefa.2023.102572; https://doi.org/10.1080/08039488.2020.1843710; https://doi.org/10.1016/j.psychres.2020.113652
- [2026-09-26] openalex search "vitamin D depression meta-analysis" -> 5 hits: https://doi.org/10.1016/j.phrs.2022.106605; https://doi.org/10.3389/fpubh.2022.903547; https://doi.org/10.1016/j.jad.2023.10.021; https://doi.org/10.3389/fnut.2023.1142035; https://doi.org/10.1017/s0033291724001697
- [2026-09-26] openalex search "magnesium anxiety systematic review" -> 4 hits: https://doi.org/10.3390/nu9050429; https://doi.org/10.7759/cureus.59317; ?; https://doi.org/10.17605/osf.io/d6cmj
- [2026-09-26] openalex search "sugar mood meta-analysis" -> 1 hits: https://doi.org/10.1016/j.neubiorev.2019.03.016
- [2026-09-26] openalex search "diet acne systematic review" -> 4 hits: https://doi.org/10.1016/j.jdin.2022.02.012; https://doi.org/10.1186/s12986-025-01033-9; https://doi.org/10.18502/ccb.v1i1.2869; https://doi.org/10.17504/protocols.io.ewov115ppvr2/v1
- [2026-09-26] openalex search "inositol polycystic ovary meta-analysis" -> 5 hits: https://doi.org/10.1186/s12958-023-01055-z; https://doi.org/10.1210/clinem/dgad762; https://doi.org/10.1080/09513590.2021.1926975; https://doi.org/10.26355/eurrev_202104_25565; https://doi.org/10.26355/eurrev_202203_28322
- [2026-09-26] openalex search "omega-3 preterm birth systematic review" -> 3 hits: https://doi.org/10.3390/nu13051704; https://doi.org/10.1016/j.plefa.2026.102766; https://doi.org/10.1093/cdn/nzz048.p11-085-19
- [2026-09-26] openalex search "ginkgo biloba cognition meta-analysis" -> 1 hits: https://doi.org/10.25258/ijddt.16.36s.60
- [2026-09-26] openalex fetch "10.1038/s41398-019-0515-5" -> 0 hits: (none)
- [2026-09-26] openalex fetch "10.1192/bjp.2019.234" -> 0 hits: (none)
- [2026-09-26] openalex fetch "10.3390/nu9050429" -> 0 hits: (none)
- [2026-09-26] openalex fetch "10.1016/j.neubiorev.2019.03.016" -> 0 hits: (none)
- [2026-09-26] openalex fetch "10.1186/s12958-023-01055-z" -> 0 hits: (none)
- [2026-09-26] openalex fetch "10.3390/nu13051704" -> 0 hits: (none)
- [2026-09-26] openalex fetch "10.1093/nutrit/nuz023" -> 0 hits: (none)
- [2026-09-26] openalex fetch "10.1016/j.jdin.2022.02.012" -> 0 hits: (none)

## [2026-09-26] SELECTION RECORD — belief-harvest run-19 acquisition (nutritional psychiatry + adjacent GAPs)

Filling the run-19 high-value GAP clusters (`acquisition-worklist.md` 2026-09-26 block). OpenAlex primary,
gold-gate, MA/SR/umbrella preferred, both-directions where a belief has poles. Auto-logged queries above.

**FETCHED to inbox/ (4 — OA, awaiting `process inbox`):**
- **Omega-3 PUFA -> depression MA 2019** (10.1038/s41398-019-0515-5, Transl Psychiatry, 420 cites, gold) —
  SELECTED: the treatment-benefit pole of belief A1 (EPA-ratio dose-response); landmark.
- **Omega-3/PUFA -> PREVENTION of depression+anxiety MA 2019** (10.1192/bjp.2019.234, BJP, 107 cites, gold)
  — SELECTED: the enhancement-null counter-pole (both-directions sampling — prevention in non-depressed);
  also carries the anxiety arm.
- **Sugar -> mood MA 2019 (Mantantzis)** (10.1016/j.neubiorev.2019.03.016, Neurosci Biobehav Rev, 67 cites,
  gold) — SELECTED: the source that adjudicates belief A6 ("sugar rush"); run-19 flagged it as the missing
  refuter. Lands the candidate-REFUTE that was un-adjudicable.
- **Inositol -> PCOS SR+MA 2023** (10.1186/s12958-023-01055-z, Reprod Biol Endocrinol, 139 cites, gold) —
  SELECTED: the landmark inositol/PCOS gold (belief B / inositol-pcos-ovulation).

**BLOCKED -> maintainer-drop (identified, DOI recorded; NOT downgraded — pause-and-ask):**
- **Magnesium -> anxiety/stress SR 2017** (10.3390/nu9050429, Nutrients, 161 cites, gold) — SELECTED but
  MDPI HTTP 403 on both plain + headless fetch. Belief A8.
- **Omega-3 pregnancy -> preterm birth SR 2021** (10.3390/nu13051704, Nutrients, 33 cites, gold) — SELECTED,
  MDPI 403. Belief B / dha-preterm-birth. (Cochrane Middleton 2018 is the stronger target — see named.)
- **Saffron -> depression+anxiety MA 2019** (10.1093/nutrit/nuz023, Nutrition Reviews/OUP, 100 cites, gold)
  — SELECTED, OUP anti-bot block. Belief A3 (covers anxiety too).
- **Diet + acne SR 2022** (10.1016/j.jdin.2022.02.012, JAAD Int, 92 cites, gold) — SELECTED, Elsevier block.
  The acne-cluster opener (beliefs C1/C2/C3 — glycemic-load/dairy/whey).

**NAMED / DEFERRED (stronger or better-fit target to acquire next; not fetched):**
- **Saffron vs SSRI head-to-head MA 2024** (10.1093/nutrit/nuae076, OUP, OA=False) — the most on-point for
  "saffron \~ SSRI"; DEFERRED behind the OA 2019 saffron MA (paywalled, maintainer-drop if wanted).
- **Vitamin D -> depression UMBRELLA MA 2022** (10.1016/j.phrs.2022.106605, Pharmacol Res, 82 cites,
  umbrella) — SELECTED-tier (umbrella > single MA for A4) but Elsevier PDF unavailable -> maintainer-drop.
- **GEM Study — ginkgo -> cognition in HEALTHY older adults** (DeKosky 2008, JAMA; RCT) — belief E8's
  correct target population; the MA search returned only an Alzheimer's-patient SR (wrong population /
  frontier-treatment). Named for maintainer-drop; the large null RCT that banks the REFUTE.
- **Calcium -> pre-eclampsia** (Cochrane Hofmeyr) — belief B; not searched this pass, named for a later run.

**REJECTED / not taken:** 2025 Mediterranean-diet+acne MA (deferred behind the broader 2022 SR); 2026
ginkgo-in-Alzheimer's SR (wrong population, off the healthy-adult belief); assorted lower-cite echoes.

**0-hit note:** "omega-3 EPA depression" (3-word) returned 0 from title-strictness, not absence — loosened
to "omega-3 depression" -> 6 hits. Recorded per the attribute-every-zero rule.
- [2026-09-27] openalex search "Omega-3 fatty acid addition during pregnancy systematic review" -> 0 hits: (none)
- [2026-09-27] openalex resolve "10.1002/14651858.CD003402.pub3" -> 1 hits: https://doi.org/10.1002/14651858.cd003402.pub3
- [2026-09-27] openalex resolve "10.1001/jama.2020.10224" -> 1 hits: https://doi.org/10.1001/jama.2020.10224
- [2026-09-27] openalex fetch "10.1002/14651858.CD003402.pub3" -> 0 hits: (none)
- [2026-09-27] openalex fetch "10.1001/jama.2020.10224" -> 0 hits: (none)

## [2026-09-27] SELECTION RECORD — targeted acquisition: Middleton 2018 Cochrane + VITAL-DEP/Okereke 2020 (maintainer-requested)

Both maintainer-named, gold/high tier -> no discovery/screening; acquisition only. OpenAlex resolve+fetch
auto-logged above; the escalation-ladder rungs (EuropePMC REST -> Playwright -> Steel) have NO auto-log
and are recorded here.

- **Middleton - Omega-3 Pregnancy Preterm Cochrane 2018** (10.1002/14651858.CD003402.pub3; gold,
  systematic-review; cites 448). SELECTED — cashes the `[AWAITS]` on [[Omega-3 Supplementation in Pregnancy]]; the retained-benefit counterpart to Serra's RoB-restriction-kills-benefit (method-on-
  shared-evidence G-gap). **Fetch BLOCKED:** OpenAlex PAYWALLED (no OA PDF); EuropePMC PMC6516961
  hasPDF=Y flag but fullTextPDF 404 + render 403 (restricted deposit); Playwright 403. Wiley/Cochrane
  subscription wall. -> **maintainer-drop-pending** (NOT downgraded; DOI now filled in registry +
  staged-dois.tsv).
- **Okereke - VITAL-DEP Vitamin D Depression 2020** (10.1001/jama.2020.10224; high, rct; cites 169).
  SELECTED — worklist counter-pole: enhancement-in-replete NULL vs the held Musazadeh vit-D->depression
  umbrella + [[Deficiency Repletion vs Enhancement]] (a genuine RCT, so a real type-E/D candidate, unlike
  Serra vs Middleton). **Fetch BLOCKED:** OpenAlex found the JAMA articlepdf URL but fetch HTTPError;
  EuropePMC PMC7403921 inEPMC=Y but isOpenAccess=N / hasPDF=N (fullTextXML 500); Playwright AND Steel both
  403 on the articlepdf. JAMA subscription wall + PMC restricted. -> **maintainer-drop-pending; registered
  [NOT YET HELD] placeholder** (okereke2020vitaldep).

**Acquisition-requested:** both -> maintainer-drop, 0 fetched. Drop targets: Cochrane Library /
institutional Wiley (Middleton); JAMA or institutional access to PMC7403921 (Okereke). On drop ->
`process inbox`.

**UPDATE [2026-09-27] — maintainer-drop ARRIVED for both.** Middleton + Okereke dropped to
`raw/binary/papers/` and staged (registry placeholders -> STAGED; ingest-queue NEXT-UP). Middleton
is the **Cochrane structured abstract + PLS only** (4pp, not the full review) — carries all headline
GRADE-rated estimates + the industry-funding sensitivity, but not the low-RoB restriction / forest
plots / SoF / subgroups. Okereke is the full 10pp JAMA article. 0 downgraded, 0 substituted.

**UPDATE [2026-09-27] — FULL Middleton review obtained (maintainer-hosted).** The Steel/Playwright
attempts on the Cochrane Library full-PDF endpoint failed (subscription paywall behind Cloudflare —
Steel cleared the bot-wall to the landing page but the PDF endpoint is gated). The maintainer then
supplied the full 428pp review directly; it replaced the 4pp abstract in raw/binary/papers/. Now
carries the SoF tables, Data-and-analyses, Risk-of-bias, and the Comparison-9 low-RoB sensitivity
analysis for PTB/ePTB (the arm the abstract lacked -> Serra RoB-restriction parallel now exact).
- [2026-09-29] openalex resolve "10.1161/jaha.119.013543" -> 1 hits: https://doi.org/10.1161/jaha.119.013543
- [2026-09-29] openalex fetch "10.1161/jaha.119.013543" -> 0 hits: (none)

## [2026-09-29] SELECTION RECORD — Hu 2019 marine omega-3 CVD MA (depth upgrade for the new concept owner)

**Query / channel.** OpenAlex resolve+fetch on `10.1161/jaha.119.013543` (auto-logged above); then
hand-run browser fetches (NO auto-log): Playwright on the ahajournals PDF endpoint, then Steel on the
epdf endpoint.

**Results.** OpenAlex: article confirmed, `oa=True` cites=390, but fetch returned 0 (no OA PDF URL in
the record). Browser: `ahajournals.org/doi/pdf/...` -> HTTP 403 (local Playwright); `.../doi/epdf/...`
-> HTTP 403 (Steel). JAHA is a nominally-OA journal but the PDF endpoints sit behind a Cloudflare
IP-wall that blocks automated fetchers (same failure shape as the Cochrane full-PDF endpoint,
2026-09-27).

**Adjudication.** SELECTED — Hu 2019 (13 trials, \~127k) is a type-F depth upgrade for the freshly
minted [[Marine Omega-3 Supplementation Across Outcomes]]: it would replace the two-point VITAL(1g
null) + REDUCE-IT(4g EPA benefit) pair with a POOLED dose-response magnitude for MI/CHD, putting a
curve behind the "dose is the decision" frame. Ratchet LOW-MED (concurs with the held dose/form pair;
verify it adds magnitude beyond it at ingest). Listed in `acquisition-worklist.md` (Engine G row 68,
2026-09-17).

**Acquisition-requested.** 1 -> maintainer-drop, 0 fetched. Sanctioned ladder exhausted
(OpenAlex -> Playwright -> Steel, all blocked). NOT downgraded to a weaker omega-3/CVD source. Drop
target: institutional/AHA access to the JAHA PDF for `10.1161/jaha.119.013543` (Wiley-hosted on
ahajournals.org). On drop -> `process inbox`.

**UPDATE [2026-09-29] — maintainer-drop ARRIVED + STAGED.** Full JAHA PDF dropped to `inbox/`;
`process inbox` verified novel (no done binary / source page / registry row / log / staged-DOI),
born-digital (39k chars, coverage self-test OK, chunkable), renamed to `raw/binary/papers/Hu - Marine
Omega-3 Cardiovascular Disease 2019.pdf` and staged (`hu2019omega3cvd`, registry + staged-DOIs +
ingest-queue NEXT-UP). 0 downgraded, 0 substituted. Now an INGEST task, not an acquire.

## [2026-09-29] SELECTION RECORD — belief-harvest run 20 (Exa channel, DISCOURSE pull not paper-search)

**Channel + why hand-logged.** Exa MCP web_search (`mcp__exa__web_search_exa`), NOT OpenAlex, so no
auto-log — recorded by hand. WebSearch budget was exhausted (200/200); Exa enabled to unblock. This is a
belief-harvest PREVALENCE pull (what do people commonly believe + a real discourse/institutional source
for each), not a gold-SR acquisition search — so the acquisition step here is QUEUING gaps, not fetching.

**(1) Queries.** 6 read-only scout agents, one per under-sampled folk cluster, each running several Exa
queries over public-discourse + institutional pages (NCCIH, Cleveland Clinic, Cochrane summaries, Mayo,
WebMD, news, retailer/influencer discourse): (A) immune "boost immunity" folk remedies; (B) gut/digestive
folk remedies; (C) cooking & kitchen chemistry; (D) cognition/nootropics; (E) sleep folk-aids;
(F) metabolism tactics + male vitality. Canary-gated (one scout first) before the six-way fan-out — the
prior WebSearch attempt burned six simultaneous failures.

**(2) Results.** \~97 raw candidate beliefs across the 6 clusters, each with a prevalence anchor. No
zero-clusters (Exa healthy throughout). No fabrication — no belief was generated from model memory.

**(3) Adjudication + reason.** Central (parent) dedup vs 278 Processed + 193 belief-harvest queue slugs +
fabric (grep/srcgrep/vsearch). Lane 3 dropped as OUT-at-triage (12). Phase-2 read-only Challenge fan-out
(5 agents) over the 18 fabric-adjacent beliefs; pure-folk tail central-absence-verified and GAP-routed
without a subagent. Verdicts: 0 CONFIRM : 2 REFINE (WOVEN) : 0 REFUTE : \~59 GAP : 12 OUT. Ratchet applied
so only 7 decision-relevant GAPs earned a queue row; the rest parked in the dedup memory.

**(4) Acquisition-requested.** 0 fetched (a discourse pull, not a paper acquisition). 7 GAP slugs folded
into `ingest-queue.md` -> BELIEF-HARVEST GAPS Run 20 for later gold-SR acquisition: cranberry-uti-prevention
(HIGH), peppermint-oil-ibs (HIGH), omega3-child-adhd-attention, cocoa-flavanol-cognition-rct,
nutrient-repletion-testosterone, herbal-sleep-aids-sr, water-preload-weight-loss. 0 downgraded, 0 substituted.

## [2026-09-29] SELECTION RECORD — discover pass (full `--refresh`)

**Channel.** `bin/discover.py --refresh --write` (engines A-F + coverage_matrix regenerated vs OpenAlex;
openalex auto-logs its own engine queries). No hand contradiction-hunt web queries this pass (Engine G
deferred, see below), so nothing else to hand-log.

**(1) Queries.** Engines A (anchor-walk) / E (coupling) citation pulls off held anchors; B/C/D/F
blank-finders; coverage_matrix (page-role x dimension + stratum axis). All auto-written to the
`acq-*.tsv` pools.

**(2) Results.** Engine A 465 novel-by-DOI, Engine E 545 novel; coverage-matrix 331 cells / 47 blanks
(was 317/45 — 2 new from 39 newer source pages). GONE: 16 worklist DOIs now held/staged. AWAITS 0 OPEN
(`awaits_status` authoritative; 8 GENERIC-GAP are op-weave step-6 lever gaps, not acquisition). B/D
blank-finders read a stale filename (`acq-variants.tsv`/`acq-frameworks.tsv`) the refresh does not write
(`acq-comparative.tsv`/`acq-framework-diff.tsv`) -> they never freshen; noted for backlog, expected yield
\~0 (breadth complete).

**(3) Adjudication + reason.** Engine A/E tops unchanged vs the 09-26 read — the same echo pool
(Reynolds/Aune fibre-grain echoes) and off-telos rows (mental-health, air-pollution, bariatric,
semaglutide CV-outcome). Coverage's 47 blanks triage as off-role (RT-prescription x cancer/CV incidence;
aspirin x weight-metabolic — N/A for the role), expectancy-fail (CGM x cancer/CV/cognition — no gold
outcome RCT in non-diabetics; fluoride x mortality/cancer thin/contested), or weave-residual fillable
from held sources (aspirin primary-prevention dimensions: USPSTF 2022 + Zheng 2019 MA already held).
**One soft candidate DEFERRED:** soy x metabolic-glycemic + equol-producer stratum — plausible SR extant
(isoflavone glycemic-control MAs), but soy is already well-anchored (framework + isoflavone-cognition
page + 5 source pages on lipids/hormones/mortality/breast cancer), so LOW-MED ratchet; a targeted
openalex search worth a future non-ceiling pass, not acquired now under the depth-lock.

**Contradiction hunt (Engine G) — DEFERRED, sweep 6 not run.** Five consecutive nil sweeps
(`contradiction-hunt.md`); the last (sweep 5, 09-26, top-12 CLOSED rows, 49 candidates) found 0
disagreers / 0 TENSION flips. No lighthouse has newly OPENED or changed conclusion since — the only
lighthouse movement was a type-F depth upgrade (Hu 2019 marine omega-3 CVD, CONCURS with the held
dose-is-the-decision frame, not a disagreer). Re-running the identical CLOSED-row query set 3 days later
is guaranteed echo; deferred until a lighthouse conclusion actually moves. Not skipped — reasoned defer.

**(4) Acquisition-requested.** 0 fetched, 0 dropped, 0 downgraded, 0 substituted. No new worklist acquire
row — sixth consecutive ceiling read (depth phase). GONE reconcile: Hu row struck live; the other 15
GONE DOIs already sit in dated run-17 / run-19 record blocks (CLOSED records, no active row).
- [2026-10-01] openalex search "Association magnitude weight loss physical fitness cardiovascular outcomes type 2 diabetes" -> 1 hits: https://doi.org/10.1016/s2213-8587(16)30162-0
- [2026-10-01] openalex search "Carcinogenicity of drinking coffee mate very hot beverages" -> 1 hits: https://doi.org/10.1016/s1470-2045(16)30239-x


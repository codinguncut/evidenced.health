---
title: "Search log: August 2026"
---
## [2026-08-01] Fitness extension A — cardiorespiratory fitness (HIIT/zone-2, RHR, HRV)
- Searched: WebSearch — `HIIT vs moderate continuous training VO2max meta-analysis older adults`;
  `resting heart rate all-cause cardiovascular mortality dose-response meta-analysis`; `heart rate
  variability all-cause mortality prediction systematic review general population`; `exercise interval
  vs continuous training mortality cardiovascular events clinical outcomes`; `zone 2 lactate threshold
  clinical outcomes mortality`; Poon 2024 umbrella.
- Filters: none; design limit = umbrella/SR/MA; deliberately thin (attention-is-an-anti-signal binds hard).
- Found / screened: \~30 / 4
- Included (staged): `Poon - HIIT Cardiorespiratory Fitness Umbrella 2024` (gold); `Aune - Resting Heart
  Rate Mortality 2017` (gold); `Jarczok - Heart Rate Variability Mortality 2022` (gold).
- Excluded (notable): Zhang 2016 CMAJ RHR (superseded by Aune); Milanovic 2015 staged (superseded by
  Poon for the keystone slot); Storoschuk 2025 zone-2 (narrative < gold); HIIT cardiac-rehab MAs
  (surrogate + disease-specific — they document the modality->outcome gap, don't fill it); Wu/Chu 2026,
  young fat-loss MAs (surrogate/narrower).
- Notes: CRF->mortality anchor already HELD (Kodama/Mandsager/Ross), so these answer *how to raise it* +
  *are RHR/HRV targets*. Poon/Oliveira reach only VO2max (surrogate). Aune + Jarczok reach mortality as
  PREDICTORS. Two type-G gaps confirmed, NOT filled: modality->patient-important-outcome (only surrogate
  exists); zone-2 / HRV-guided training as decision tools (coaching-lore).

## [2026-08-01] Fitness extension B — resistance-training programming (load/volume/failure/injury)
- Searched: WebSearch — `resistance training dose-response network meta-analysis strength hypertrophy
  Currier`; `resistance training injury rates systematic review older adults`; `Pelland resistance
  training dose response meta-regression volume frequency`; `high vs low load resistance training
  strength hypertrophy meta-analysis`; `training to failure vs non-failure meta-analysis`; `resistance
  training adverse events injury systematic review safety`; `resistance training older adults function
  falls umbrella`; `protein timing leucine threshold strength function meta-analysis`; ACSM position
  stand overview of reviews.
- Filters: none; design limit = umbrella/NMA/SR/MA.
- Found / screened: \~40 / 7
- Included (staged): `ACSM - Resistance Training Position Stand 2026` (gold, overview of 137 SRs);
  `Currier - Resistance Training Prescription NMA 2023` (gold); `Pelland - Resistance Training Dose
  Response 2025` (gold); `El-Kotob - Resistance Training and Health Overview 2020` (gold); `Serafim -
  Resistance Training Safety 2023` (moderate — injury, override logged).
- Excluded (notable): Lopez 2021 load NMA + Grgic 2022 failure MA — offered as +2 granularity, HELD (not
  taken; fold into the ceiling finding); Schoenfeld 2017 low-vs-high-load (superseded by Lopez); Refalo
  2022 proximity-to-failure (hypertrophy surrogate only); circuit/BFR/machine older-adult MAs
  (surrogate/niche, absorbed by the ACSM overview); protein-timing MA (kept as a *finding* = total
  protein, not a page).
- Notes: anchor HELD (Momma/Morton/Cruz-Jentoft); the one patient-important programming outcome is
  INJURY (Serafim + El-Kotob adverse-events). ACSM overview and Currier NMA share their author team ->
  NOT independent (E-firewall). Pelland gives a *located* diminishing-returns knee (dose-response prior).
  Type-G gaps NOT filled: RPE / reps-in-reserve / time-under-tension / CNS-fatigue / rest-days
  (coaching-lore, surrogate-only); heavy-load injury in older adults specifically; RT-isolated falls.

## [2026-08-05] acquisition | Fish + Parkinson's gold umbrellas (OpenAlex primary; WebSearch/WebFetch complement)
Tools: OpenAlex API (title.search + DOI/type/OA/cite ranking — polite pool, throttled mid-session after rapid
unauthenticated bursts; going-forward via bin/openalex.py authenticated). WebSearch = discovery; WebFetch =
PMC record for the one OpenAlex throttled on. Acquisition rule applied (MA/SR/umbrella, gold; ask-on-failure).
- STAGED (gold umbrella, on-target): `Jayedi - Fish Consumption Chronic Disease Umbrella 2020`
  (10.1093/advances/nmaa029; 34 MAs; per-100 g/d all-cause SRR 0.92, CVD-mortality SRR 0.75) — Fish deliverable.
  `Chen - Non-Genetic Risk Factors Parkinson Overview 2021` (10.3233/JPD-202521; overview of 46 SRs, AMSTAR-2)
  — Age-Related-Diseases (the Parkinson's gap).
- HELD non-gold (inbox/_hold, per the "only gold" filter): Jayedi 2018 fish-mortality dose-response MA
  (10.1017/s1368980017003834 — high, REDUNDANT with the umbrella); farmed-vs-wild salmon composition
  (10.3390/foods9121901 — moderate, narrow-exception; no gold MA exists for wild-vs-farmed — maintainer call).
- Not-taken: single caffeine-PD MA (subsumed by the PD umbrella); Bellou 2016 PD umbrella (superseded, fallback).
- Still to acquire for Fish: a wild-vs-farmed source at a defensible tier is genuinely scarce (the field lacks a
  gold MA); EFSA Seafood 2014 (benefit-vs-mercury) is already STAGED in guidelines/ — ingest, don't acquire.
- [2026-08-05] openalex search "binge drinking cardiovascular disease risk meta-analysis" -> 0 hits: (none)
- [2026-08-05] openalex search "drinking pattern coronary heart disease" -> 5 hits: https://doi.org/10.1056/nejmoa022095; https://doi.org/10.1136/bmj.38831.503113.7c; https://doi.org/10.1136/jech.2007.065607; https://doi.org/10.1097/01.hjr.0000051961.68260.30; https://doi.org/10.1177/174182670301000104
- [2026-08-05] openalex search "binge drinking mortality" -> 5 hits: https://doi.org/10.1016/s0140-6736(02)11470-x; https://doi.org/10.1161/circulationaha.105.574749; https://doi.org/10.1136/jech-2012-201564; https://doi.org/10.1161/strokeaha.110.586347; https://doi.org/10.1161/strokeaha.109.556027
- [2026-08-05] openalex search "alcohol use burden 195 countries global burden of disease" -> 2 hits: https://doi.org/10.1016/s0140-6736(18)31310-2; https://doi.org/10.1016/s2215-0366(18)30337-7
- [2026-08-05] openalex search "irregular heavy drinking occasions ischemic heart disease" -> 1 hits: https://doi.org/10.1093/aje/kwp451
- [2026-08-05] openalex search "wine beer spirits mortality" -> 0 hits: (none)
- [2026-08-05] openalex search "type of alcoholic beverage cardiovascular risk" -> 0 hits: (none)
- [2026-08-05] openalex search "resveratrol cardiovascular outcomes randomized" -> 0 hits: (none)
- [2026-08-05] openalex fetch "10.1016/S0140-6736(18)31310-2" -> 0 hits: (none)
- [2026-08-05] openalex fetch "10.1093/aje/kwp451" -> 0 hits: (none)
- [2026-08-05] openalex search "alcohol consumption pattern type coronary" -> 0 hits: (none)
- [2026-08-05] openalex search "resveratrol levels all-cause mortality older adults" -> 1 hits: https://doi.org/10.1001/jamainternmed.2014.1582
- [2026-08-05] openalex fetch "10.1001/jamainternmed.2014.1582" -> 0 hits: (none)
- [2026-08-05] openalex search "wine consumption cardiovascular disease meta-analysis" -> 0 hits: (none)
- [2026-08-05] openalex search "sleep regularity index mortality" -> 0 hits: (none)
- [2026-08-05] openalex search "hypnotics association mortality cancer" -> 1 hits: https://doi.org/10.1136/bmjopen-2012-000850
- [2026-08-05] openalex search "cognitive behavioral therapy insomnia meta-analysis" -> 4 hits: https://doi.org/10.1016/j.smrv.2015.10.004; https://doi.org/10.1016/j.smrv.2017.02.001; https://doi.org/10.1016/j.smrv.2015.07.001; https://doi.org/10.1016/j.smrv.2022.101597
- [2026-08-05] openalex search "sleep regularity predicts mortality risk" -> 1 hits: https://doi.org/10.1093/sleep/zsad253
- [2026-08-05] openalex search "melatonin primary sleep disorders meta-analysis" -> 2 hits: https://doi.org/10.1371/journal.pone.0063773; https://doi.org/10.1111/j.1525-1497.2005.0243.x
- [2026-08-05] openalex search "morning chronotype mendelian randomization" -> 1 hits: https://doi.org/10.1002/ijc.34284
- [2026-08-05] openalex search "fermented foods microbiota immune status" -> 0 hits: (none)
- [2026-08-05] openalex search "yogurt consumption type 2 diabetes meta-analysis" -> 0 hits: (none)
- [2026-08-05] openalex search "fermented dairy cardiovascular disease meta-analysis" -> 1 hits: https://doi.org/10.1080/10408398.2018.1564019
- [2026-08-05] openalex search "soy isoflavones testosterone estrogen men meta-analysis" -> 0 hits: (none)
- [2026-08-05] openalex search "soy isoflavone breast cancer risk meta-analysis" -> 3 hits: https://doi.org/10.1007/s10549-010-1270-8; https://doi.org/10.1371/journal.pone.0089288; https://doi.org/10.21873/invivo.12737
- [2026-08-05] openalex search "soy protein serum lipids meta-analysis" -> 2 hits: https://doi.org/10.1056/nejm199508033330502; https://doi.org/10.1016/j.amjcard.2006.03.042
- [2026-08-05] openalex search "gut microbiota targeted diets immune status" -> 3 hits: https://doi.org/10.1016/j.cell.2021.06.019; https://doi.org/10.1101/2020.09.30.321448; https://doi.org/10.3410/f.740458051.793588702
- [2026-08-05] openalex search "dairy products incident type 2 diabetes dose-response" -> 0 hits: (none)
- [2026-08-05] openalex search "soy isoflavones male reproductive hormones" -> 4 hits: https://doi.org/10.1016/j.reprotox.2020.12.019; https://doi.org/10.1002/fft2.70090; https://doi.org/10.4236/arsci.2017.52002; ?
- [2026-08-05] openalex fetch "10.1371/journal.pone.0063773" -> 0 hits: (none)
- [2026-08-05] openalex fetch "10.1136/bmjopen-2012-000850" -> 0 hits: (none)
- [2026-08-05] openalex fetch "10.1016/j.cell.2021.06.019" -> 0 hits: (none)
- [2026-08-05] openalex fetch "10.1093/sleep/zsad253" -> 0 hits: (none)
- [2026-08-05] openalex fetch "10.1016/j.reprotox.2020.12.019" -> 0 hits: (none)
- [2026-08-05] openalex fetch "10.1371/journal.pone.0089288" -> 0 hits: (none)
- [2026-08-05] openalex fetch "10.21873/invivo.12737" -> 0 hits: (none)

## [2026-08-05] SELECTION RECORD — Alcohol deliverable gaps (BACKFILL)

Backfilled after the four-field policy was written — the acquisition ran earlier the same day and had
only auto-logged query lines + the spec acquisition list; this restores fields (3)+(4) to the ledger.
Tool: `bin/openalex.py`. Gaps targeted: B1 drinking pattern, B2 beverage type, B3 matrix/resveratrol,
plus the GBD population anchor.

- **B1 pattern — SELECTED `Roerecke 2010`** (10.1093/aje/kwp451, gold SR+MA): the binge/irregular-heavy
  vs regular-moderate at fixed volume MA — the pattern gate. Chosen over the older individual studies
  surfaced by "binge drinking mortality" (Britton 2002 / Mukamal 2005 / Korean cohorts, 2002-2012) and
  by "drinking pattern coronary heart disease" (all pre-MA singles) — passed over for the MA.
- **Population anchor — SELECTED `GBD 2018`** (10.1016/S0140-6736(18)31310-2, high/report): the
  "no safe level" landmark; the co-hit `10.1016/s2215-0366(18)30337-7` (alcohol+drug GBD) was off-question
  (substance-use disorder burden, not consumption-outcome) -> rejected.
- **B3 matrix — SELECTED `Semba 2014`** (10.1001/jamainternmed.2014.1582, moderate cohort): resveratrol
  null; found via "resveratrol levels all-cause mortality older adults" after "resveratrol cardiovascular
  outcomes randomized" returned 0 (title strictness). Tier-override lodged at ingest (null counterweight).
- **B2 beverage type — DEFERRED, no gold MA located.** "wine beer spirits mortality", "type of alcoholic
  beverage cardiovascular risk", "alcohol consumption pattern type coronary" all returned 0 — title.search
  strictness, NOT absence; `Mukamal 2003` (10.1056/nejmoa022095, NEJM, pattern+type) surfaced but is a
  single cohort and second-order to ethanol grams -> left as the named B2 gap in the deliverable.
- **Fetch:** GBD / Roerecke / Semba all BLOCKED (Lancet/OUP/JAMA anti-bot) -> maintainer-drop; all three
  were later dropped, ingested, and the deliverable compiled. `Rumgay 2021` (cancer burden) was already
  staged, not re-searched.

## [2026-08-05] SELECTION RECORD — lit-research for Sleep / Fermented Foods / Soy specs

Curated companion to the auto-logged query lines above (which record terms + hits; this records the
reasoning, the rejections, and the negative space). Tool: `bin/openalex.py`. Standard: gold/high SR/MA/
umbrella/MR/landmark-RCT, cite-count as a relevance prior, symmetric standards. Selection targets the
SPEC GAP each source closes. **Fetch note:** publisher anti-bot blocks the headless downloader for
Cell / OUP / ScienceDirect / NEJM / iiarjournals; PLoS + BMJ Open allowed it. Blocked = maintainer-drop,
NOT downgraded.

### Sleep
- **B2 regularity gate — SELECTED `Windred 2023`** (10.1093/sleep/zsad253, SLEEP, 232 cites): title is
  literally the finding the spec predicted ("regularity a stronger predictor of mortality than duration").
  Fetch BLOCKED (OUP). The narrower query "sleep regularity index mortality" returned 0 — a title.search
  strictness artifact (the words aren't all in the title), NOT literature absence; "sleep regularity
  predicts mortality risk" surfaced it.
- **B3 hypnotic-harm — SELECTED `Kripke 2012`** (10.1136/bmjopen-2012-000850, 405 cites): the canonical
  hypnotic-mortality cohort; matched-cohort design, confounding-by-indication is the live caveat to carry.
  Fetched to inbox/.
- **B3 melatonin — SELECTED `Ferracioli-Oda 2013`** (10.1371/journal.pone.0063773, 477 cites) over the
  older `Buscemi 2005` (10.1111/j.1525-1497.2005.0243.x): newer, same question, both OA. Fetched.
- **B3 CBT-I — SELECTED `van Straten 2018`** (10.1016/j.smrv.2017.02.001, 685 cites) from a 4-hit set;
  the general CBT-I efficacy MA (chose over the internet-CBT-I-only Zachariae 2015 as broader). BLOCKED.
- **DEFERRED (lower priority / not locked):** chronotype MR — the only hit ("morning chronotype and
  digestive tract cancers" 10.1002/ijc.34284) is too narrow; the Daghlas chronotype->depression MR is the
  better target, not yet located. B1 quality/architecture + B4 upstream not searched (Part-A + B2/B3 carry
  the compile).

### Fermented Foods
- **RCT anchor — SELECTED `Wastyk 2021`** (10.1016/j.cell.2021.06.019, Cell, 1320 cites): the interventional
  + mechanistic landmark; found via the actual title ("gut-microbiota-targeted diets...") after the topical
  query "fermented foods microbiota immune status" returned 0 (title-strictness, not absence). Preferred the
  published Cell version over its bioRxiv preprint (10.1101/2020.09.30.321448). BLOCKED (Cell).
- **Fermented-dairy CVD — SELECTED `Zhang 2019`** (10.1080/10408398.2018.1564019, 87 cites): the
  fermented-dairy->CVD MA (the full-fat-dairy-paradox leg). BLOCKED.
- **NEGATIVE SPACE:** "yogurt consumption type 2 diabetes meta-analysis" and "dairy products incident type 2
  diabetes dose-response" both 0 — title.search strictness; a yoghurt/dairy->T2D MA (Gijsbers 2016 AJCN
  candidate) certainly exists. Left as a secondary target, not a claimed absence.

### Soy
- **Hormonal-fear gate — SELECTED `Reed 2021`** (10.1016/j.reprotox.2020.12.019, 70 cites): the expanded/
  updated MA, the definitive null on male reproductive hormones; found via "male reproductive hormones"
  after "testosterone estrogen men meta-analysis" returned 0. Chose over the 2025 SR (10.1002/fft2.70090,
  1 cite — too new/unestablished). BLOCKED (ScienceDirect).
- **Breast-cancer fear — SELECTED `Chen 2014`** (10.1371/journal.pone.0089288, 211 cites) from a 3-hit set,
  over `Dong 2011` (10.1007/s10549-010-1270-8, 357 cites, not OA) and a 2022 MA (10.21873/invivo.12737,
  paywalled): Chen is OA + menopausal-status-stratified (the decision-relevant cut). Fetched.
- **Soy-protein->LDL — SELECTED `Anderson 1995`** (10.1056/NEJM199508033330502, 2058 cites): the landmark;
  noted a newer MA (Blanco Mejia 2019) updates the magnitude. Chose over the 2006 AmJCardiol MA. BLOCKED (NEJM).
- **DEFERRED (thinner sections):** soy->thyroid review; natto/K2->bone — not searched, lower priority.

### Fetch outcome (9 selected)
IN inbox/ (3): Kripke, Ferracioli-Oda, Chen. BLOCKED -> maintainer-drop (6): Windred, van Straten, Wastyk,
Zhang, Reed, Anderson. All 9 DOIs recorded in the three deliverable specs.
- [2026-08-06] openalex search "body mass index mortality Mendelian randomization meta-analysis" -> 0 hits: (none)
- [2026-08-06] openalex search "BMI mortality Mendelian randomization" -> 6 hits: https://doi.org/10.1007/s10552-015-0654-9; https://doi.org/10.1002/oby.22313; https://doi.org/10.1016/j.ijcard.2021.02.027; https://doi.org/10.1002/oby.22397; https://doi.org/10.6084/m9.figshare.25041686
- [2026-08-06] openalex search "apolipoprotein B LDL Mendelian randomization coronary" -> 0 hits: (none)
- [2026-08-06] openalex search "fecal microbiota transplantation recurrent Clostridioides difficile systematic review" -> 5 hits: https://doi.org/10.1007/s10620-020-06185-7; https://doi.org/10.1007/s10096-021-04163-z; https://doi.org/10.7759/cureus.90614; https://doi.org/10.1016/s0016-5085(20)33147-4; https://doi.org/10.14309/01.ajg.0000702860.45717.bd
- [2026-08-06] openalex search "plant animal protein intake mortality cohort" -> 6 hits: https://doi.org/10.1136/bmj.m2412; https://doi.org/10.1001/jamainternmed.2019.2806; https://doi.org/10.1093/ije/dyy030; https://doi.org/10.3233/nha-210145; https://doi.org/10.1161/circ.141.suppl_1.p510
- [2026-08-06] openalex search "circulating lipids apolipoprotein B coronary Mendelian randomization" -> 0 hits: (none)
- [2026-08-06] openalex search "apolipoprotein B causal coronary heart disease genetic" -> 0 hits: (none)
- [2026-08-06] openalex search "apolipoprotein Mendelian randomisation lipids" -> 2 hits: https://doi.org/10.1371/journal.pmed.1003062; https://doi.org/10.1007/s00415-024-12665-x
- [2026-08-06] openalex search "apolipoprotein B coronary Mendelian" -> 3 hits: https://doi.org/10.1093/ije/dyaa216; https://doi.org/10.1101/2020.02.10.20021691; https://doi.org/10.1101/2025.06.11.25328879
- [2026-08-06] openalex resolve "10.1371/journal.pmed.1003062 10.1002/oby.22313 10.1001/jamainternmed.2019.2806" -> 3 hits: https://doi.org/10.1371/journal.pmed.1003062; https://doi.org/10.1002/oby.22313; https://doi.org/10.1001/jamainternmed.2019.2806
- [2026-08-06] openalex fetch "10.1371/journal.pmed.1003062" -> 0 hits: (none)
- [2026-08-06] openalex fetch "10.1002/oby.22313" -> 0 hits: (none)

## [2026-08-06] SELECTION RECORD — cluster-A acquisition gaps (BMI-MR · apoB-MR · FMT-SR · non-Willett protein)
Research pass for the top acquire targets opened by the cluster-A batch (logged in ingest-queue OPEN ACQUIRE-THREADS 2026-08-06). openalex primary; gold/high gold-gate; fit-to-question = does it close the specific thread.

- **BMI -> mortality Mendelian randomization** (Global BMI low-arm needs a genetic instrument):
  - **SELECTED** `10.1002/oby.22313` — "BMI and Mortality in UK Biobank: Revised Estimates Using Mendelian Randomization" (2018, 94 cites, OA-flagged). The landmark BMI->mortality MR; directly adjudicates whether the U-curve's low/underweight arm is causal (the exact gap). **ACQUISITION: BLOCKED (Wiley 403) -> MAINTAINER-DROP** (DOI recorded; NOT downgraded).
  - REJECTED the prostate-cancer-specific MR (`10.1007/s10552-015-0654-9`, off-question) and the 2024 figshare *dataset* (not a paper).
- **Independent-lineage LDL/apoB causality MR** (the nucleus is lineage-capped: Ference->Marston->CTT):
  - **SELECTED + FETCHED** `10.1371/journal.pmed.1003062` — Richardson et al, "Evaluating the relationship between circulating lipoprotein lipids and apolipoprotein B and coronary heart disease risk" (PLoS Med 2020, 941 cites, OA). The Bristol/Davey-Smith multivariable MR establishing **apoB as the causal lipid trait over LDL-C/TG** — genuinely OFF the Ference lineage -> the type-E independence the nucleus lacked. **ACQUISITION: FETCHED to `inbox/`.**
  - DEFERRED `10.1093/ije/dyaa216` (Zuber high-throughput MV-MR, same finding/era — a second-copy echo of Richardson; hold unless Richardson proves insufficient).
- **Non-Willett animal-vs-plant protein cohort** (Naghshi + Seidelmann both Willett/NHS-HPFS):
  - **SELECTED** `10.1001/jamainternmed.2019.2806` — Budhathoki et al, JPHC Japanese cohort (2019, 203 cites, OA-flagged). A genuinely independent (non-Willett, non-Western) cohort on animal/plant protein -> mortality. **ACQUISITION: BLOCKED (JAMA anti-bot) -> MAINTAINER-DROP** (DOI recorded).
  - REJECTED `bmj.m2412` (= Naghshi, ALREADY HELD); DEFERRED `10.1093/ije/dyy030` (Western pattern-cohort — Budhathoki is the cleaner independent lineage).
- **Cochrane FMT-CDI systematic review** (pool van Nood's wide early-stopped CI; MINOR — RCT held):
  - **DEFERRED all** — the well-cited MAs (`10.1007/s10620-020-06185-7` 95 cites; `10.1007/s10096-021-04163-z`) are paywalled (oa=False); the only OA option (`10.7759/cureus.90614`, Cureus, 2 cites) is too weak to clear the ratchet on a gap this minor. Not worth a maintainer-drop now; revisit if the microbiome deliverable needs the pooled CI.

**Net:** 1 fetched (Richardson apoB-MR -> `inbox/`, hand off to `process inbox`); 2 maintainer-drops (BMI-MR oby.22313, Budhathoki jamainternmed.2019.2806 — both DOIs recorded); 1 gap deferred (FMT-SR, weak OA). No source downgraded on a fetch block.
- [2026-08-06] openalex search "gene diet interaction cardiometabolic systematic review systematic review" -> 0 hits: (none)
- [2026-08-06] openalex search "nutrigenetics personalized nutrition genetic" -> 1 hits: https://doi.org/10.21272/eumj.2026;14(1);28-38
- [2026-08-06] openalex search "muscle mass mortality older adults meta-analysis meta-analysis" -> 2 hits: https://doi.org/10.1016/j.exger.2021.111461; https://doi.org/10.11606/issn.1679-9836.v100iespp8-8
- [2026-08-06] openalex resolve "10.1016/j.exger.2021.111461" -> 1 hits: https://doi.org/10.1016/j.exger.2021.111461
- [2026-08-06] openalex search "personalized nutrition genotype randomized systematic" -> 0 hits: (none)
- [2026-08-06] openalex fetch "10.1016/j.exger.2021.111461" -> 0 hits: (none)

## [2026-08-06] SELECTION RECORD — "anything else to acquire?" scan (standing acquire-threads)
Probed the two strongest standing OPEN ACQUIRE-THREADS for gold sources.
- **Sarcopenia / low muscle mass -> mortality** (elderly-protein cluster's missing hard-outcome leg):
  - **SELECTED** `10.1016/j.exger.2021.111461` — "Low muscle mass in older adults and mortality: A systematic review and meta-analysis" (Exp Gerontol 2021, 59 cites, gold SR-MA). Closes a real decision-question (does low muscle mass predict mortality, magnitude). **ACQUISITION: PAYWALLED (no OA pdf) -> MAINTAINER-DROP** (DOI recorded; NOT downgraded).
- **Nutrigenetics / gene-diet interaction SR-MA** (the twice-confirmed [G] responder gap):
  - **NO GOLD SOURCE FOUND** — a gene-diet-interaction / personalized-nutrition-by-genotype gold SR-MA does not surface (0 hits on the systematic queries; only an obscure low-cite article). This is a LITERATURE gap (insufficient-evidence at the gold level), NOT a fabric gap to fill by acquiring a weak source — symmetric standards forbid lowering the bar for a gap we want filled. Keep as a named insufficient-evidence gap; re-probe as the field matures, or route specific modifiers (FADS/APOE/CYP1A2) through Challenge first.
**Net:** 1 maintainer-drop (sarcopenia MA); nutrigenetics confirmed thin (no acquire). Other standing threads (GLP-1 primary-prevention CVOT, MASLD-AASLD, acrylamide/HCA, HIIT-adherence) left for a later targeted pass.
- [2026-08-06] openalex search "egg consumption cardiovascular disease mortality meta-analysis" -> 2 hits: https://doi.org/10.1093/jn/nxac105; https://doi.org/10.51745/najfnr.10.21.22-34
- [2026-08-06] openalex search "egg consumption dose response cardiovascular" -> 2 hits: https://doi.org/10.1007/s00394-020-02345-7; https://doi.org/10.1093/jn/nxac105
- [2026-08-06] openalex fetch "10.1007/s00394-020-02345-7" -> 0 hits: (none)

## [2026-08-06] SELECTION RECORD — eggs / dietary cholesterol -> CVD (the source-review keystone gap)
The one clean genuinely-absent keystone from the 2026-08-06 source-portfolio review (high public-interest, decision-relevant, nothing held). Promoted from the [G]-route-through-Challenge list — a gold MA exists, so it is a real acquire, not insufficient-evidence.
- **SELECTED** `10.1007/s00394-020-02345-7` — "Egg consumption and cardiovascular risk: a dose-response meta-analysis of prospective cohort studies" (Eur J Nutr 2020, 64 cites, gold dose-response MA — the right lighthouse; pools the cohorts). **ACQUISITION: PAYWALLED (Springer, no OA pdf) -> MAINTAINER-DROP** (DOI recorded; NOT downgraded). Author TBC on drop.
- REJECTED `10.51745/najfnr.10.21.22-34` (2026, 0 cites, obscure journal — too weak); DEFERRED `10.1093/jn/nxac105` (2022 J Nutr MA, oa=False, smaller — the dose-response MA supersedes).
- **NOTE the contested-headline reference:** Zhong 2019 (JAMA, `10.1001/jama.2019.1572`) is the single pooled-cohort analysis that reignited the eggs/dietary-cholesterol debate (found a POSITIVE association) — a potential TENSION source vs the mostly-null MAs. Not acquired now (single analysis, the MA is the lighthouse); flag for maintainer-drop only if a tension needs the both-sides sources.
**Net:** 1 maintainer-drop (Godos egg-CVD dose-response MA). No source downgraded.
- [2026-08-06] openalex fetch "10.1056/NEJM199704173361601" -> 0 hits: (none)
- [2026-08-06] openalex fetch "10.1056/NEJM200101043440101" -> 0 hits: (none)
- [2026-08-06] openalex search "dairy consumption cardiometabolic umbrella review umbrella review" -> 0 hits: (none)
- [2026-08-06] openalex search "dairy type 2 diabetes cardiovascular meta-analysis meta-analysis" -> 2 hits: https://doi.org/10.1093/nutrit/nuz006; https://doi.org/10.1016/j.idairyj.2019.02.019
- [2026-08-06] openalex search "milk consumption all-cause mortality meta-analysis meta-analysis" -> 1 hits: https://doi.org/10.1007/s10654-017-0243-1
- [2026-08-06] openalex search "milk dairy fracture risk meta-analysis meta-analysis" -> 1 hits: https://doi.org/10.1080/10408398.2019.1590800
- [2026-08-06] openalex search "dairy milk prostate cancer meta-analysis meta-analysis" -> 0 hits: (none)
- [2026-08-06] openalex search "dairy calcium prostate cancer risk dose-response" -> 0 hits: (none)
- [2026-08-06] openalex search "fructose nonalcoholic fatty liver disease meta-analysis meta-analysis" -> 0 hits: (none)
- [2026-08-06] openalex search "sugar sweetened beverages type 2 diabetes meta-analysis meta-analysis" -> 4 hits: https://doi.org/10.1007/s10654-020-00655-y; https://doi.org/10.17615/rpf0-7566; https://doi.org/10.3390/nu13082636; https://doi.org/10.17615/jf7b-nq36
- [2026-08-06] openalex search "sodium intake cardiovascular mortality meta-analysis cohort meta-analysis" -> 0 hits: (none)
- [2026-08-06] openalex search "high protein intake kidney function chronic kidney disease meta-analysis meta-analysis" -> 0 hits: (none)
- [2026-08-06] openalex fetch "10.1007/s10654-017-0243-1" -> 0 hits: (none)
- [2026-08-06] openalex fetch "10.3390/nu13082636" -> 0 hits: (none)

## [2026-08-06] SELECTION RECORD — value-add scan over the (new) acquisition-gated deliverables
Research pass to assess which deliverable-gap acquisition targets are sufficiently value-add (gold/high + ratchet-advancer + fit-to-question), NOT to acquire indiscriminately. Per gated deliverable:

### DAIRY (BLOCKED; 4 targets) — 3 of 4 are genuine value-add; the 4th stays a named gap
- **SELECTED + FETCHED** `10.1007/s10654-017-0243-1` — Guo et al, milk/dairy -> CVD + all-cause mortality dose-response MA (Eur J Epidemiol 2017, 398 cites). KEYSTONE, and value-add REGARDLESS of the Dairy decision (milk-mortality is a standalone high-interest question; feeds the dairy-matrix claim pages). -> `inbox/`.
- **SELECTED -> MAINTAINER-DROP** `10.1093/nutrit/nuz006` — dairy -> T2D SR-MA (Nutr Rev 2019, 42 cites, OUP-walled). The cardiometabolic-by-category backbone. Value-add IF Dairy is compiled.
- **SELECTED -> MAINTAINER-DROP** `10.1080/10408398.2019.1590800` — milk/dairy -> osteoporosis/hip-fracture MA (Crit Rev Food Sci Nutr 2019, 90 cites, paywalled). The milk-fracture-paradox source. Value-add IF Dairy is compiled.
- **DEFER (LOW value-add)** dairy -> prostate: no clean MA surfaced, and **WCRF 2018 (HELD) already grades dairy probable-increased for prostate** — a dedicated MA would add only a magnitude to a held direction. Keep as a named gap, do not acquire.
- **Verdict:** Dairy is UNBLOCKABLE with 3 acquisitions (1 fetched + 2 maintainer-drop). But the value-add is CONDITIONAL on compiling Dairy (maintainer's earlier ambivalence) — only the milk-mortality MA is unconditional.

### ADDED SUGAR / SSB (2 targets) — 1 value-add, 1 thin
- **SELECTED -> MAINTAINER-DROP** `10.1007/s10654-020-00655-y` — sugar/artificially-sweetened beverages -> obesity/T2D dose-response MA (Eur J Epidemiol 2020, 338 cites; paywalled). The SSB->T2D backbone. OA alternative `10.3390/nu13082636` (MDPI, 136 cites) fetch-failed today too.
- **DEFER (thin)** fructose -> MASLD/NAFLD: no gold SR surfaces; the leg is mechanism-forward + small controlled-feeding trials -> INSUFFICIENT-EVIDENCE, name as gap, do not acquire weak (symmetric standards).

### SODIUM (2 targets, SECOND-ORDER) — DEFER both
- The deliverable is already compilable (He/Huang/WHO/SSaSS/Aburto + SPRINT/BPLTTC held). Sodium-alone hard-outcome MA (contested PURE-vs-WHO field) and a J-curve MR are second-order — DEFER; name as gaps.

### PROTEIN (1, MINOR) — optional
- A protein -> kidney-function MA (Devries-type: no harm to healthy kidneys) would firm the renal contraindication vs safety; MODERATE value-add, near-compilable without it. Optional acquire.

### DIETARY FAT TYPES — no acquisition needed (mostly covered).

**Net:** 1 fetched (Guo milk-mortality -> inbox); 3 maintainer-drops if the deliverables proceed (dairy-cardiometabolic, dairy-fracture, SSB-T2D); the rest named-gaps (dairy-prostate via WCRF, fructose-MASLD thin, sodium second-order). No weak source acquired.
- [2026-08-06] openalex search "fructose liver fat controlled feeding systematic review" -> 0 hits: (none)
- [2026-08-06] openalex search "fructose nonalcoholic fatty liver disease systematic review" -> 1 hits: https://doi.org/10.3945/ajcn.114.086314
- [2026-08-06] openalex search "sugar sweetened beverages fructose fatty liver meta-analysis" -> 0 hits: (none)
- [2026-08-06] openalex fetch "10.3945/ajcn.114.086314" -> 0 hits: (none)

## [2026-08-06] SELECTION RECORD — fructose -> MASLD RE-SEARCH (corrects the earlier "thin" call)
Re-searched at maintainer request. **The earlier value-add scan's "no gold SR / insufficient-evidence" verdict was WRONG** — an over-strict openalex query (double "meta-analysis" + title-word strictness) missed the landmark. Corrected:
- **SELECTED** `10.3945/ajcn.114.086314` — Chung et al, "Fructose, high-fructose corn syrup, sucrose, and nonalcoholic fatty liver disease or indexes of liver health: a systematic review and meta-analysis" (AJCN 2014, 254 cites, gold SR-MA of controlled-feeding trials). The decision-relevant finding (verify at ingest): the fructose->liver-fat effect is largely a HYPERcaloric/overfeeding effect — ISOCALORIC fructose exchange does not clearly raise intrahepatic lipid — which DEFUSES the "fructose is uniquely hepatotoxic" claim rather than confirming it. Genuine value-add, not insufficient-evidence. **ACQUISITION: PAYWALLED (AJCN/OUP) -> MAINTAINER-DROP** (DOI recorded).
- Companion (not needed unless the isocaloric/hypercaloric split wants a second source): Chiu et al 2014 (Eur J Clin Nutr) controlled-feeding SR-MA — same distinction.
**Lesson logged:** a single over-strict openalex 0-hit is a query-tuning signal, NOT a literature-absence claim (the standing rule); the earlier scan should have loosened before calling it thin. The Sugar spec's fructose leg is upgraded from named-gap to identified-acquire.
- [2026-08-06] openalex search "protein intake older adults muscle mass strength meta-analysis meta-analysis" -> 0 hits: (none)
- [2026-08-06] openalex search "sunscreen skin cancer prevention randomized" -> 0 hits: (none)
- [2026-08-06] openalex search "sun exposure avoidance all-cause mortality cohort" -> 2 hits: https://doi.org/10.1111/joim.12251; https://doi.org/10.3410/f.718338950.793496044
- [2026-08-06] openalex search "sunscreen melanoma randomized trial Nambour" -> 0 hits: (none)
- [2026-08-06] openalex search "regular sunscreen use cutaneous melanoma trial" -> 0 hits: (none)
- [2026-08-06] openalex search "ultraviolet radiation melanoma systematic review meta-analysis meta-analysis" -> 0 hits: (none)
- [2026-08-06] openalex fetch "10.1111/joim.12251" -> 0 hits: (none)
- [2026-08-06] openalex search "regular sunscreen melanoma reduced follow-up" -> 3 hits: https://doi.org/10.1200/jco.2010.28.7078; https://doi.org/10.3410/f.7222956.9563054; https://doi.org/10.3410/f.7222956.14688056
- [2026-08-06] openalex fetch "10.1200/jco.2010.28.7078" -> 0 hits: (none)

## [2026-08-06] SELECTION RECORD — four maintainer research asks (mid-ingest-seq)
1. **Older-adult protein (per-meal leucine / \~1.2-1.6 g/kg) — the Big Rocks (Elderly) "top acquirable gap":**
   **ALREADY STAGED, NOT ACQUIRABLE.** Bauer PROT-AGE 2013 (the g/kg guidance), Katsanos 2006 (leucine
   threshold), Moore 2014 (per-meal dose) are all staged. The spec's gap statement is STALE (predates Bauer
   staging) — like the DASH-already-cut catch. Action: ingest the staged trio; no new source.
2. **UV / sun exposure / sunscreen / skin cancer — a NEW peripheral-lifestyle domain (currently OPEN-thin):**
   a benefit-risk question (sun: vit-D/BP/mood + a mortality signal vs skin-cancer harm). Two landmarks identified:
   - **SELECTED -> MAINTAINER-DROP** `10.1111/joim.12251` — Lindqvist, "Avoidance of sun exposure is a risk
     factor for all-cause mortality" (J Intern Med 2014/2016, 111 cites; Swedish MISS cohort). The contrarian
     benefit-of-sun finding — CONFOUNDED single high-latitude cohort, needs the artifact-caveat framing.
   - **SELECTED -> MAINTAINER-DROP** `10.1200/jco.2010.28.7078` — Green, "Reduced Melanoma After Regular
     Sunscreen Use: Randomized Trial Follow-Up" (JCO 2010/2011, 799 cites; the Nambour RCT). THE sunscreen->
     melanoma RCT (the only one). ASCO-blocked.
   - GAP still open: a UV/sunbed->melanoma SR-MA (the harm quantification; IARC UV is Group 1) — looser search owed.
   This is a new-domain cluster; if pursued it would seed a "Sun exposure and skin" question/deliverable.
3. **Per-factor dementia weights (Livingston Table 1):** NOT an acquisition — **Livingston 2024 is INGESTED**;
   the 14 per-factor PAF values live in its Table 1 (a figure/table not yet extracted; the `[AWAITS (Livingston)]`
   on [[Dementia Prevention and Modifiable Risk Factors]]). This is an EXTRACTION/Revisit gap on the HELD source,
   not a new source. Action: a Revisit / re-read of Livingston Table 1, not Research.
**Net:** 0 new acquirable for asks 1+3 (already-held/staged); 2 maintainer-drops for the UV domain (Lindqvist, Green).
- [2026-08-06] openalex fetch "10.1136/bmj.e4757" -> 0 hits: (none)

## [2026-08-06] SELECTION RECORD — sun / UV / sunscreen / skin cancer (new benefit-risk domain)
Assembled the sun/UV cluster (previously OPEN-thin in the lighthouse-index). A benefit-risk question: sun's mortality/vit-D/BP signal vs melanoma/NMSC harm, stratified by intermittent-vs-chronic exposure + skin type.
- **STAGED** `Green - Sunscreen Melanoma Randomized Trial Nambour 2011` (10.1200/JCO.2010.28.7078, high·rct) — the ONLY sunscreen->melanoma RCT; the sunscreen-efficacy leg. (DOI was correct all along; earlier fetch failed on ASCO's bot-block, not a wrong DOI.)
- **STAGED** `Lindqvist - Sun Exposure Major Causes of Death 2016` (10.1111/joim.12496, high·cohort) — MISS-cohort 20-yr competing-risk; sun-AVOIDANCE -> higher mortality (the contrarian benefit-of-sun signal). CONFOUNDED single high-latitude cohort — carries the artifact caveat. Supersedes the 2014 original (joim.12251).
- **IDENTIFIED -> MAINTAINER-DROP** `10.1016/j.ejca.2004.10.016` (Gandini 2005, Eur J Cancer, 1257 cites) — the definitive sun-exposure->melanoma harm MA; carries the decision-critical INTERMITTENT (risk) vs CHRONIC (no increase) distinction. Paywalled.
- **IDENTIFIED -> MAINTAINER-DROP** `10.1136/bmj.e4757` (Boniol 2012, BMJ, 638 cites) — sunbed/indoor-tanning -> melanoma dose-response; the artificial-UV harm signal. BMJ full-text bot-blocked despite OA.
**Net:** 2 staged (Green, Lindqvist-2016); 2 maintainer-drops (Gandini harm-MA, Boniol sunbed-MA). Cluster is a candidate new "Sun exposure and skin" question/deliverable (not yet specced).

## [2026-08-06] openalex queries run --no-log during the book-2 ingest (hand-logged per the four-field policy)
These ran with --no-log to avoid writing to the branch while the Malmir ingest held it; recorded here so the query/results audit half is not lost. Channel: openalex.
- search "reduced melanoma regular sunscreen randomized trial follow-up" -> 1: 10.1200/jco.2010.28.7078 (Green, 799c)
- search "avoidance sun exposure risk factor major causes death competing risk" -> 3: 10.1111/joim.12496 (Lindqvist 2016, 148c); 10.1111/joim.12613; 10.1111/joim.12538 (responses)
- resolve 10.1111/joim.12251 -> Lindqvist 2014 (all-cause, 111c) [the original; superseded by 12496]
- search "cutaneous melanoma sun exposure" -> 4: 10.1016/j.ejca.2004.10.016 (Gandini II sun-exposure, 1257c); + 3 non-MA
- search "risk factors cutaneous melanoma meta-analysis" -> 4: ejca.2004.10.016 (II); 10.1016/j.ejca.2004.10.015 (I naevi); 10.1016/j.ejca.2005.03.034 (III); 10.1016/j.ejca.2009.05.009 (site)
- search "melanoma attributable sunbed use" -> 3: 10.1136/bmj.e4757 (Boniol sunbed MA, 638c, OA); + 2 non-MA
- ZERO-HIT (title.search strictness, not literature absence): "Lindqvist sun exposure mortality Melanoma Southern Sweden"; "sun exposure melanoma risk meta-analysis"; "indoor tanning sunbed melanoma systematic review meta-analysis"; "ultraviolet cutaneous melanoma risk pooled analysis"; "farmed wild fish nutritional contaminant health"; "farmed versus wild salmon fatty acid contaminant" (wild-vs-farmed confirmed: no gold MA exists).

## [2026-08-06] sun/UV cluster — UPDATE (maintainer scoping)
- **STAGED** `Gandini - Cutaneous Melanoma Sun Exposure Meta-Analysis 2005` (10.1016/j.ejca.2004.10.016, gold MA, 1257c) — the sun-exposure->melanoma harm leg (intermittent-vs-chronic; the key nuance).
- **NOT WANTED** `10.1136/bmj.e4757` (Boniol sunbed->melanoma) — maintainer: "not interested in sunbed risk per se"; the question is NATURAL sun benefit-risk, not artificial-UV. Routed to inbox/_hold, un-staged. (Registry note: leave un-registered.)
**Sun/UV cluster now STAGED (3): Green (sunscreen RCT), Lindqvist-2016 (sun-avoidance mortality), Gandini (sun->melanoma harm).** Enough to seed a natural-sun benefit-risk question; sunbed excluded per scope.
- [2026-08-06] openalex search "fish consumption chronic disease umbrella review" -> 1 hits: https://doi.org/10.1093/advances/nmaa029
- [2026-08-06] openalex search "fish intake health outcomes umbrella review" -> 0 hits: (none)
- [2026-08-06] openalex fetch "10.1093/advances/nmaa029" -> 0 hits: (none)
- [2026-08-07] openalex search "protein energy restriction fat free mass meta-analysis" -> 0 hits: (none)
- [2026-08-07] openalex search "dietary protein weight loss lean mass preservation systematic review" -> 0 hits: (none)
- [2026-08-07] openalex search "protein caloric restriction resistance trained" -> 1 hits: https://doi.org/10.1123/ijsnem.2013-0054
- [2026-08-07] openalex search "protein weight loss lean mass" -> 4 hits: https://doi.org/10.3945/ajcn.111.026328; https://doi.org/10.4016/39369.01; https://doi.org/10.1055/s-0034-1398551; ?
- [2026-08-07] openalex search "protein hypocaloric fat-free mass" -> 0 hits: (none)
- [2026-08-07] openalex search "protein energy deficit muscle mass" -> 2 hits: ?; ?
- [2026-08-07] openalex search "protein resistance training energy restriction body composition meta-analysis" -> 0 hits: (none)
- [2026-08-07] openalex search "high protein diet fat free mass meta-analysis meta-analysis" -> 0 hits: (none)
- [2026-08-07] openalex search "protein intake weight loss resistance exercise lean meta-analysis" -> 0 hits: (none)
- [2026-08-07] openalex resolve "10.1123/ijsnem.2013-0054" -> 1 hits: https://doi.org/10.1123/ijsnem.2013-0054
- [2026-08-07] openalex search "protein resistance training weight loss body composition" -> 1 hits: https://doi.org/10.3945/ajcn.117.158246
- [2026-08-07] openalex search "dietary protein energy restriction fat free mass" -> 0 hits: (none)
- [2026-08-07] openalex search "protein overfeeding energy restriction resistance training lean" -> 0 hits: (none)
- [2026-08-07] openalex search "protein caloric restriction athletes" -> 0 hits: (none)
- [2026-08-07] openalex search "protein intake muscle mass energy restriction older" -> 0 hits: (none)
- [2026-08-07] openalex search "protein requirements weight loss" -> 3 hits: https://doi.org/10.7759/cureus.83983; https://doi.org/10.26420/austinjnutrmetab.2021.1106; https://doi.org/10.1002/hep.29801
- [2026-08-07] openalex resolve "10.1519/SSC.0000000000000888" -> 1 hits: https://doi.org/10.1519/ssc.0000000000000888
- [2026-08-07] openalex search "protein supplements fat-free mass strength resistance training network meta-analysis" -> 1 hits: https://doi.org/10.1155/tsm2/5557511
- [2026-08-07] openalex fetch "10.1519/SSC.0000000000000888" -> 0 hits: (none)

## [2026-08-07] SELECTION RECORD — protein target during CALORIC DEFICIT / lean-mass preservation
Gap opened by the protein-target Revisit (Morton 1.62 is young-derived, non-obese, non-deficit, and a
non-significant knee); caloric-deficit is the genuinely-unheld stratum with real synthesis potential
(intersects [[GLP-1 and Lean Mass]] + [[Rapid Weight Loss]]). Channels: openalex (auto-logged above) + one
web-search (hand-logged here).

**Query (web, hand-logged):** "meta-analysis dietary protein intake resistance training energy restriction
fat-free mass retention" — to identify the landmark/newest SR-MA (openalex title-search too strict: multiple
0-hits from strictness not absence — "protein energy restriction fat free mass", "dietary protein weight loss
lean mass preservation", "protein hypocaloric fat-free mass" all 0 on title-match).

**Results (candidates):**
- **Refalo et al. 2025** — «Effect of Dietary Protein on Fat-Free Mass in Energy Restricted, Resistance-Trained
  Individuals: An Updated Systematic Review With Meta-Regression» (Strength & Conditioning Journal). DOI
  10.1519/SSC.0000000000000888 · SR + meta-regression · gold/high · oa=True (flag) but fetch PAYWALLED · cites=3.
- Helms et al. 2014 — «A Systematic Review of Dietary Protein During Caloric Restriction in Resistance...»
  (IJSNEM). DOI 10.1123/ijsnem.2013-0054 · SR · gold/high · oa=False · cites=124. The landmark.
- Network MA 2026 — «Which Protein-Based Dietary Supplements Most Effectively Enhance Fat-Free Mass and Strength
  ... A Network Meta-Analysis» (Transl Sports Med). DOI 10.1155/tsm2/5557511 · network-MA · oa=True · cites=2.
- Primary studies (AJCN 2012 «4 weight-loss diets ...»; AJCN 2017 within-day protein distribution) — single RCTs.

**Adjudication:**
- **Refalo 2025 — SELECTED (the acquire).** Ratchet-ADVANCER: first gold on the unheld caloric-deficit stratum,
  and an *updated* SR+meta-regression that supersedes Helms 2014. Fit-to-question exact (energy-restricted,
  resistance-trained, FFM outcome). NOTE it independently corroborates the fabric's own thread: a LINEAR
  dose-response (no knee — Route 2), STRONGER when protein is expressed per FAT-FREE MASS (the denominator
  point), with stratum modifiers (duration, body-fat %, sex). \~1.9 g/kg-BM or \~2.5 g/kg-FFM to minimize FFM
  loss; higher for FFM gain.
- **Helms 2014 — DEFERRED (superseded).** Kept as the landmark for provenance; Refalo is the updated version.
  Acquire only if the maintainer wants the original for citation depth (oa=False -> would also be maintainer-drop).
- **Network MA 2026 — DEFERRED (different gap).** On the GENERAL protein-supplement-type x RT question (a
  network-MA that could ratchet-advance the Morton-2018 general question), NOT the caloric-deficit gap. Flag for
  a future general-protein-RET ratchet check; not this acquisition.
- **AJCN 2012/2017 primaries — REJECTED.** Single RCTs superseded by the SR.

**Acquisition-requested:** Refalo 2025 (DOI 10.1519/SSC.0000000000000888) — fetch attempted, PAYWALLED despite
OA flag (Strength & Conditioning Journal = LWW/Wolters-Kluwer, anti-bot class). -> **MAINTAINER-DROP requested**
(do NOT downgrade to a weaker source; the source is identified, not lost). Nothing fetched to inbox/. On
maintainer drop -> `process inbox` -> registry row (tier gold, type systematic-review) -> ingest-queue as the
caloric-deficit + obese-denominator opener.
- [2026-08-07] openalex search "high protein intake kidney function decline meta-analysis" -> 0 hits: (none)
- [2026-08-07] openalex search "dietary acrylamide cancer risk meta-analysis" -> 6 hits: https://doi.org/10.1002/ijc.29339; https://doi.org/10.1158/1055-9965.epi-19-1628; https://doi.org/10.3389/fnut.2022.875607; https://doi.org/10.1017/s0007114520005255; https://doi.org/10.1289/isee.2021.p-474
- [2026-08-07] openalex search "meat cooking methods heterocyclic amines cancer meta-analysis" -> 2 hits: https://doi.org/10.1186/s12937-015-0111-3; https://doi.org/10.1096/fasebj.30.1_supplement.417.8
- [2026-08-07] openalex search "dietary protein renal function meta-analysis" -> 1 hits: https://doi.org/10.1053/ajkd.1998.v31.pm9631839
- [2026-08-07] openalex search "protein intake chronic kidney disease incidence" -> 1 hits: https://doi.org/10.20960/nh.05879
- [2026-08-07] openalex search "apolipoprotein B versus LDL cholesterol cardiovascular risk meta-analysis" -> 0 hits: (none)
- [2026-08-07] openalex search "high protein diet renal function healthy adults" -> 0 hits: (none)
- [2026-08-07] openalex search "GLP-1 receptor agonist primary prevention cardiovascular outcomes meta-analysis" -> 0 hits: (none)
- [2026-08-07] openalex search "live versus heat-killed probiotic fermented food randomized" -> 0 hits: (none)
- [2026-08-07] openalex search "protein intake glomerular filtration rate meta-analysis" -> 1 hits: ?
- [2026-08-07] openalex search "high protein diet kidney health" -> 7 hits: https://doi.org/10.1681/asn.2020010028; https://doi.org/10.1053/j.ajkd.2004.08.020; https://doi.org/10.3945/an.114.007716; https://doi.org/10.1123/ijsnem.10.1.28; https://doi.org/10.1093/ndt/gfz216
- [2026-08-07] openalex search "changes in kidney function higher protein diets systematic review" -> 1 hits: https://doi.org/10.1093/jn/nxy197
- [2026-08-07] openalex search "higher protein intake kidney function meta-analysis healthy meta-analysis" -> 0 hits: (none)
- [2026-08-07] openalex search "AASLD practice guidance clinical assessment management nonalcoholic fatty liver disease" -> 2 hits: https://doi.org/10.1097/hep.0000000000000323; https://doi.org/10.3410/f.742544317.793597923
- [2026-08-07] openalex search "long-term adherence lifestyle cognitive change 11-year FINGER randomized" -> 1 hits: https://doi.org/10.1002/alz70860_106542
- [2026-08-07] openalex fetch "10.3389/fnut.2022.875607" -> 0 hits: (none)
- [2026-08-07] openalex fetch "10.1097/hep.0000000000000323" -> 0 hits: (none)
- [2026-08-07] openalex fetch "10.1093/jn/nxy197" -> 0 hits: (none)
- [2026-08-07] openalex fetch "10.1002/alz70860_106542" -> 0 hits: (none)

## [2026-08-07] SELECTION RECORD — "genuinely not held" acquisition run (post lighthouse re-sync)
Seven acquire-targets + 2 named-AWAITS from the 08-07 lighthouse pass's gap list. Channels: openalex
(auto-logged above) + 4 web-searches (hand-logged here). Standard: gold/high, ratchet-ADVANCER, fit-to-question.

**Web searches (hand-logged, channel=web):**
- "AASLD MASLD MASH clinical practice guideline 2023 2024" -> AASLD 2023 Practice Guidance (Rinella), the US
  family vs the held EASL-EASD-EASO 2024; + a Nov-2025 semaglutide-for-MASH update (not the core doc).
- "GLP-1 receptor agonist primary prevention cardiovascular outcome trial low-risk without diabetes" -> SELECT
  is SECONDARY-prevention (established CVD, BMI>=27, no diabetes); no dedicated LOW-RISK primary-prevention CVOT
  exists. SURMOUNT-MMO (pending) is the nearest, at-risk not low-risk.
- "SURMOUNT-MMO tirzepatide cardiovascular outcomes trial results published" -> results NOT yet published
  (ongoing, event-driven, \~15,000, primary MACE composite). Only the design/rationale paper is out.
- "FINGER trial extended follow-up dementia incidence long-term results" -> the 11-year FINGER results exist
  (Alzheimer's & Dementia 2025); the extended-FINGER assesses dementia/AD incidence + CV events.

**Adjudication + acquisition status:**
- **Dietary Acrylamide -> Site-Specific Cancer SR 2022** (10.3389/fnut.2022.875607, gold·SR, Frontiers, OA) —
  **SELECTED + FETCHED** to `inbox/`. The cooking/Maillard-carcinogen axis distinct from the held WCRF
  red-meat mechanism; a new-aspect opener (no acrylamide-cancer incumbent).
- **Devries - Higher Protein & Kidney Function SR-MA 2018** (10.1093/jn/nxy197, gold·MA, J Nutr/OUP, OA) —
  **SELECTED -> MAINTAINER-DROP** (OUP anti-bot 403). The landmark on the actual decision-question — high vs
  lower protein does NOT change kidney function in healthy adults — the protein->kidney G-gap's best evidence.
  (The 1998 AJKD MA is protein *restriction in existing CKD* = a different question; rejected.)
- **AASLD - MASLD Practice Guidance 2023** (10.1097/hep.0000000000000323, gold·guideline, Hepatology, OA on PMC)
  — **SELECTED -> MAINTAINER-DROP** (PMC/doi.org both returned a landing page, not the PDF; browser-fetch also
  blocked). PDF: pmc.ncbi.nlm.nih.gov/articles/PMC10735173/pdf/nihms-1948413.pdf. The 2nd MASLD guidance family
  (guidance-null vs held EASL) — a genuine new aspect (US vs EU management divergence).
- **FINGER 11-Year Extended Follow-up 2025** (10.1002/alz70860_106542, high·rct-followup, Alz&Dem/Wiley, OA) —
  **SELECTED -> MAINTAINER-DROP** (Wiley pdfdirect 403). Cashes the registered `[AWAITS (Ngandu - FINGER
  Extended Follow-up)]`. CAVEAT for process-inbox: verify it reports dementia/AD INCIDENCE (the wanted datum),
  not only cognitive-change/adherence — FINGER was underpowered for incidence. **UPDATE 08-07: the maintainer
  dropped it; the Wiley `pdfdirect` download is TRUNCATED (\~1078t, abstract-only), NOT a wrong DOI — the DOI
  10.1002/alz70860_106542 IS the full Ngandu 2025 Alz&Dem paper; the full text is on PMC12726459. Deferred to
  `inbox/_hold` pending the full PMC PDF.**
- **Acrylamide/HCA cooking-meat MA (Nutrition Journal 2015, 10.1186/s12937-015-0111-3)** — **DEFERRED.** The
  HCA/cooking-method leg, but 2015 and substantially a red/processed-meat->CRC MA (that question is CLOSED via
  WCRF) — low marginal value. The acrylamide SR (SELECTED above) already covers the higher-interest Maillard axis.
- **Sniderman apoB-vs-LDL** — **REJECTED (echo).** apoB-over-LDL is now CLOSED (Marston 2022 + Richardson MR
  2020 held); a Sniderman particle-number source is same-school advocacy, not a ratchet-advancer.
- **GLP-1 primary-prevention (low-risk) CVOT** — **NOT ACQUIRABLE (does not exist).** SELECT is secondary-
  prevention; the low-risk primary-prevention trial is not yet run. Insufficient-evidence, not a fetch target.
- **SURMOUNT-MMO** — **NOT ACQUIRABLE (unpublished).** Stays a named AWAITS; re-check on publication.
- **grip-strength-as-TARGET RCT** — **NOT ACQUIRABLE (does not exist as posed).** Raising grip -> hard outcomes
  \~ the RT->mortality question (Momma, held); grip is a MARKER not an intervention lever. Insufficient-evidence.
- **fermented-food live-vs-pasteurized viability RCT** — **0 hits (title-strictness + likely thin literature).**
  DEFERRED; the interventional viability leg Wastyk does not close. Not confidently a literature-absence yet —
  re-search with looser terms next pass before declaring the null.

**Net:** 1 FETCHED (acrylamide SR) · 3 MAINTAINER-DROP (Devries protein-kidney · AASLD MASLD guidance · FINGER
11-yr) · 1 DEFERRED-echo (HCA 2015) · 1 REJECTED-echo (Sniderman) · 3 NOT-ACQUIRABLE/insufficient (GLP-1
primary-prevention · SURMOUNT-MMO · grip-target RCT) · 1 DEFERRED-thin (fermented viability). Next: on the
maintainer drops -> `process inbox` -> register + stage; then the acrylamide SR can Ingest.
- [2026-08-07] openalex resolve "10.1016/j.advnut.2022.04.045" -> 0 hits: (none)
- [2026-08-07] openalex search "long-term adherence lifestyle cognitive change 11-year FINGER randomized controlled trial" -> 1 hits: https://doi.org/10.1002/alz70860_106542
- [2026-08-07] openalex search "effectiveness of a multidomain intervention to reduce dementia preDIVA" -> 0 hits: (none)
- [2026-08-07] openalex search "multidomain intervention omega-3 cognitive decline MAPT randomised" -> 0 hits: (none)
- [2026-08-07] openalex search "multidomain dementia prevention pooled individual participant MAPT preDIVA" -> 1 hits: https://doi.org/10.1002/alz.14472
- [2026-08-07] openalex search "FINGER two-year multidomain intervention seven-year extended follow-up cognition" -> 0 hits: (none)

## [2026-08-07] ADDENDUM — FINGER 11-yr not OA -> FALLBACK staged (Coley MAPT+preDIVA pooled)
Resolving the deferred FINGER 11-yr drop: verified across Wiley `pdfdirect`, PMC (PMC12726459) and Europe-PMC
render — **all three serve the SAME 574-word, 1-page abstract**; NCBI/Europe-PMC classify it `article-type=
abstract` (an AAIC-2025 conference supplement under DOI 10.1002/alz70860_106542). The FULL 11-yr FINGER paper is
**not OA-available** (likely not yet published as a full article). Not a wrong-DOI or a fetch-route problem.
- **Reframed the gap** to what it actually is: *multidomain lifestyle -> dementia INCIDENCE (hard outcome)* —
  FINGER 2015 (held) is a 2-yr COGNITIVE surrogate; the incidence-outcome multidomain trials are MAPT + preDIVA.
- **SELECTED + FETCHED (Europe-PMC render, full 13pp/7942w, verified Methods/Results/HRs)** `Coley -
  Multidomain Dementia MAPT preDIVA Pooled 2025` (10.1002/alz.14472, high·pooled-IPD, OA) — pooled IPD of the
  MAPT + preDIVA RCTs; responder (route-b) analysis on the incidence axis. Registered + staged to `raw/binary/`.
  The better UNIT than the single FINGER follow-up (acquisition-rule: pooled > single trial).
- **IDENTIFIED (not fetched):** the preDIVA (Moll van Charante, Lancet 2016) + MAPT (Andrieu, Lancet Neurol 2017)
  primaries are the incidence anchors but Lancet-family (anti-bot) -> maintainer-drop if the pooled analysis is
  insufficient. FINGER 11-yr full paper: re-check OA status later; keep the abstract in `_hold`.
- [2026-08-07] openalex search "effectiveness multidomain vascular care intervention prevent dementia cluster randomised" -> 2 hits: https://doi.org/10.1016/s0140-6736(16)30950-3; https://doi.org/10.3410/f.726588451.793577000
- [2026-08-07] openalex search "omega-3 multidomain intervention cognitive function elderly memory complaints randomised placebo" -> 1 hits: https://doi.org/10.1016/s1474-4422(17)30040-6
- [2026-08-07] openalex fetch "10.1016/S0140-6736(16)30950-3" -> 0 hits: (none)
- [2026-08-07] openalex search "dietary protein supplementation resistance training muscle hypertrophy dose-response meta-analysis meta-analysis" -> 0 hits: (none)
- [2026-08-07] openalex search "dose-response relationship protein intake muscle mass systematic review" -> 2 hits: https://doi.org/10.1093/nutrit/nuaa104; https://doi.org/10.1101/2020.02.21.20026252
- [2026-08-07] openalex search "protein supplementation resistance exercise training muscle mass strength meta-analysis" -> 1 hits: https://doi.org/10.3390/nu15153424
- [2026-08-07] openalex resolve "10.1093/nutrit/nuaa104" -> 1 hits: https://doi.org/10.1093/nutrit/nuaa104
- [2026-08-07] openalex search "apolipoprotein B LDL triglyceride multivariable Mendelian randomization coronary heart disease" -> 0 hits: (none)
- [2026-08-07] openalex search "body mass index all-cause mortality Mendelian randomization" -> 1 hits: https://doi.org/10.1101/2023.10.31.23297612
- [2026-08-07] openalex fetch "10.1093/nutrit/nuaa104" -> 0 hits: (none)
- [2026-08-07] openalex search "apolipoprotein B Mendelian randomization coronary artery disease" -> 2 hits: https://doi.org/10.1093/ije/dyaa216; https://doi.org/10.1101/2020.02.10.20021691
- [2026-08-07] openalex search "testosterone Mendelian randomization cardiovascular fracture outcomes" -> 0 hits: (none)
- [2026-08-07] openalex search "calcium vitamin D supplementation fracture prevention randomised RECORD trial" -> 0 hits: (none)
- [2026-08-07] openalex search "endogenous testosterone health outcomes Mendelian randomization" -> 0 hits: (none)
- [2026-08-07] openalex search "sun exposure melanoma risk prospective cohort meta-analysis" -> 0 hits: (none)

## [2026-08-07] SELECTION RECORD — independent "second opinions" for lineage-capped big-rock numbers
Targets: the decision-driving big-rock quantities that rest on ONE author-lineage (the fabric's own caps).
Vet = author-INDEPENDENCE (candidate must share no author with the capped lineage), on MERIT not OA.

- **Protein \~1.62 g/kg (Phillips/McMaster lineage: Morton + Devries)** → **SELECTED: Tagawa 2020**
  «Dose–response relationship between protein intake and muscle mass increase: a SR-MA» (Nutr Rev,
  10.1093/nutrit/nuaa104, gold·MA, 116c). Japanese group, NO Phillips — a genuine independent second opinion,
  and it lands a *different* breakpoint (\~1.3 g/kg vs Morton's 1.62) → the informative disagreement case.
  **OUP-blocked (403) → MAINTAINER-DROP.** OA interim if wanted: medRxiv preprint 10.1101/2020.02.21.20026252
  (same study, pre-peer-review — offered, NOT silently substituted).
- **LDL/apoB causal supremacy (Ference lineage: CTT + Marston + Richardson)** → **SELECTED: Zuber 2021**
  «High-throughput multivariable MR prioritizes apolipoprotein B as key lipid risk factor for CAD» (IJE,
  10.1093/ije/dyaa216, high·MR, 91c). Authors Zuber/Gill/Ala-Korpela/Langenberg/Butterworth/Bottolo/**Burgess**
  — the Cambridge/Burgess MR group, **NO Ference**; independently reproduces apoB-supremacy. CAVEAT (verify at
  ingest): likely shares UKBB/CARDIoGRAM DATA + one methods author (Ala-Korpela) with Richardson → independent
  GROUP, not fully-independent DATA; a partial E-lift (medium→ toward high), not a clean one. **OUP-blocked →
  MAINTAINER-DROP.** OA interim: medRxiv 10.1101/2020.02.10.20021691.
- **BMI low-arm-artifact (Wade ∩ Global BMI: Davey Smith/Sattar)** → IDENTIFIED, LOW-PRIORITY: a Burgess-group
  HUNT+UKBB BMI-mortality MR (medRxiv 10.1101/2023.10.31.23297612; authors Burgess/Sun/Zhou/Buck/Mason/Mai —
  no Davey-Smith/Sattar). Lineage-independent but a 2023 PREPRINT, and the artifact is already well-supported →
  DEFER (not worth a drop yet; re-check for the published version).
- **Testosterone → outcomes (one TRAVERSE family)** · **Vit-D/Ca → fractures (WHI-dominated pools)** ·
  **Sun/UV harm arm (Green inside Gandini)** → NO clean gold hit on the independence-breaking query, and each is
  peripheral / already-TENSION-covered. NOT pursued (honest low-value, not an OA dodge). RECORD trial + a
  testosterone MR could be maintainer-dropped later if these rows are ever promoted.

**Net:** 2 SELECTED big-rock second opinions → BOTH MAINTAINER-DROP (Tagawa protein · Zuber apoB; OUP-blocked,
OA preprints noted) · 1 DEFERRED (BMI preprint) · 3 NOT-PURSUED (peripheral). Nothing downgraded-for-OA.
- [2026-08-07] openalex search "diabetes prevention program outcomes study long-term lifestyle metformin cardiovascular" -> 1 hits: https://doi.org/10.1161/circulationaha.121.056756
- [2026-08-07] openalex search "weekend warrior physical activity pattern mortality" -> 6 hits: https://doi.org/10.1001/jamainternmed.2016.8014; https://doi.org/10.1001/jamainternmed.2022.2488; https://doi.org/10.1249/mss.0000000000001762; https://doi.org/10.1093/eurjpc/zwac246; https://doi.org/10.1136/bjsports-2023-107612
- [2026-08-07] openalex fetch "10.1161/circulationaha.121.056756" -> 0 hits: (none)
- [2026-08-07] openalex fetch "10.1093/eurjpc/zwac246" -> 0 hits: (none)
- [2026-08-07] openalex fetch "10.1001/jamainternmed.2016.8014" -> 0 hits: (none)
- [2026-08-07] openalex fetch "10.1136/bjsports-2023-107612" -> 0 hits: (none)

## [2026-08-07 #3] SELECTION RECORD — post-adiposity-seq acquires: DPPOS hard-outcome + weekend-warrior/accumulation
Two Gate-21 acquire-targets: (1) convert Knowler-DPP's incidence win to a HARD outcome; (2) close the PA
accumulation-pattern gap (daily vs concentrated — the maintainer's PA challenge). Standard: gold/high, best
paper regardless of OA, blocked -> maintainer-drop.

- **DPPOS -> CV events (Diabetes Prevention Program + Outcomes Study)** -> **SELECTED: DPPOS 2022 Circulation**
  «Effects of Long-term Metformin and Lifestyle Interventions on Cardiovascular Events in the DPP and its
  Outcome Study» (10.1161/circulationaha.121.056756, high·rct-followup, 170c). The hard-outcome (CV-events)
  follow-up that closes the DPP `[AWAITS]` — the incidence win alone does not establish CV/mortality benefit.
  **MAINTAINER-DROP** (AHA anti-bot 403; Europe-PMC render 500'd). On PMC: **PMC9179081** ->
  pmc.ncbi.nlm.nih.gov/articles/PMC9179081/pdf/. NOTE: the `raw/binary/cut/` DPPOS-2015 is a DIFFERENT paper
  (microvascular/durability, cut as Knowler-echo) — it STAYS cut; this 2022 CV-events paper is the resurface.
- **PA accumulation pattern (daily vs weekend-warrior)** -> **SELECTED + FETCHED: BJSM 2024** «Associations of
  the 'weekend warrior' physical activity pattern with all-cause, CV and cancer mortality»
  (10.1136/bjsports-2023-107612, high·cohort, OA, fetched 19pp). **ACCELEROMETER-measured** — the best fit for
  the gap: it is measurement-error-robust (the fabric's binding constraint) and objective, and it directly tests
  concentrated-vs-spread. This is the primary answer to the challenge.
  - **Also SELECTED -> MAINTAINER-DROP (the preferred pooled UNIT):** `Weekend-warrior MA 2022` (EurJPC
    10.1093/eurjpc/zwac246, gold/high·meta-analysis, 65c) — «'weekend warrior' and regularly active ... confer
    SIMILAR» risk reductions; the synthesized unit over the self-report cohorts. OUP paywalled.
  - **IDENTIFIED, optional:** O'Donovan 2017 (JAMA IM 10.1001/jamainternmed.2016.8014, 463c) — the landmark
    self-report pooled cohort; likely subsumed by the 2022 MA, so lower priority. JAMA paywalled -> drop only if
    the MA is insufficient.

**Net:** 1 FETCHED (BJSM-2024 accelerometer weekend-warrior — closes the PA-accumulation gap, objective) · 2
MAINTAINER-DROP (DPPOS-2022 CV-events [PMC9179081]; weekend-warrior MA-2022 [preferred unit]) · 1 optional
(O'Donovan-2017). Nothing downgraded-for-OA — the fetched BJSM is objective/best-fit, not a convenience
substitute. Hand off the fetched one to `process inbox`; drop the two for the hard-outcome + pooled-unit legs.
- [2026-08-07] openalex resolve "10.1001/jama.2019.1572" -> 1 hits: https://doi.org/10.1001/jama.2019.1572
- [2026-08-07] openalex fetch "10.1001/jama.2019.1572" -> 0 hits: (none)

## [2026-08-07 #4] SELECTION RECORD — Zhong 2019 (the eggs->CVD tension-gold)
- **SELECTED -> MAINTAINER-DROP:** `Zhong - Dietary Cholesterol Egg Consumption Cardiovascular Mortality 2019`
  (10.1001/jama.2019.1572, JAMA, 332c, 6 US cohorts n=29,615). The named DIVERGENT gold that flips the eggs->CVD
  row from CLOSED (Godos-null) to TENSION: higher egg/dietary-cholesterol associated with HIGHER CVD + mortality.
  JAMA anti-bot 403; PMC6439941 exists but Europe-PMC render 404'd -> maintainer-drop from JAMA PDF or PMC.
  Ratchet: gold->TENSION acquire (friction is the scarcest value class). On drop -> process inbox -> register ->
  ingest paired with Godos to file the eggs tension.
- [2026-08-07] openalex search "vitamin D supplementation cancer mortality randomized meta-analysis meta-analysis" -> 4 hits: https://doi.org/10.1093/annonc/mdz059; https://doi.org/10.1080/10408398.2022.2056574; https://doi.org/10.1042/bsr20190369; https://doi.org/10.37766/inplasy2021.6.0109
- [2026-08-07] openalex search "omega-3 fatty acids cognitive decline dementia meta-analysis randomized meta-analysis" -> 0 hits: (none)
- [2026-08-07] openalex search "protein intake older adults muscle mass physical function meta-analysis meta-analysis" -> 0 hits: (none)
- [2026-08-07] openalex search "omega-3 supplementation cognitive function older adults systematic review" -> 0 hits: (none)
- [2026-08-07] openalex search "omega-3 polyunsaturated fatty acids depression meta-analysis randomized meta-analysis" -> 2 hits: https://doi.org/10.1080/08039488.2020.1843710; https://doi.org/10.1016/j.jad.2025.03.006
- [2026-08-07] openalex search "dietary protein intake sarcopenia older adults systematic review" -> 0 hits: (none)
- [2026-08-07] openalex fetch "10.1093/annonc/mdz059" -> 0 hits: (none)
- [2026-08-07] openalex search "omega 3 fatty acid prevention dementia cognitive decline older people" -> 0 hits: (none)
- [2026-08-07] openalex search "protein supplementation lean body mass muscle strength elderly meta-analysis" -> 0 hits: (none)
- [2026-08-07] openalex search "omega-3 dementia meta-analysis" -> 4 hits: https://doi.org/10.1016/j.neubiorev.2014.11.008; https://doi.org/10.1016/j.bbi.2023.04.017; https://doi.org/10.3390/healthcare12050536; ?
- [2026-08-07] openalex search "omega-3 cognitive decline" -> 5 hits: https://doi.org/10.1038/ncpneuro1044; https://doi.org/10.1002/14651858.cd005379.pub3; https://doi.org/10.3233/jad-150777; https://doi.org/10.1016/j.ajcnut.2023.04.001; https://doi.org/10.1016/j.neuroimage.2015.09.050
- [2026-08-07] openalex search "protein physical function older adults meta-analysis" -> 4 hits: https://doi.org/10.3945/ajcn.116.143594; https://doi.org/10.3390/nu10091330; https://doi.org/10.1016/j.arr.2022.101731; https://doi.org/10.3390/nu15184060
- [2026-08-07] openalex fetch "10.1016/j.ajcnut.2023.04.001" -> 0 hits: (none)
- [2026-08-07] openalex fetch "10.3390/nu10091330" -> 0 hits: (none)

## [2026-08-07 #5] SELECTION RECORD — split-arm acquires (vit-D→cancer, omega-3→cognition) + elderly-protein-target gold
Three Pass-3 gap targets from the question-taxonomy diff. Standard: gold/high MA-SR, best paper regardless of
OA, blocked→maintainer-drop, mental-health-as-end kept PERIPHERAL (telos). openalex queries auto-logged above.

### Cluster 1 — vitamin D → CANCER mortality / all-cause mortality (the non-CV arm; VITAL held for CV only)
- **SELECTED → MAINTAINER-DROP: Keum 2019** «Vitamin D supplementation and total cancer incidence and
  mortality: a meta-analysis of RCTs» (Ann Oncol 10.1093/annonc/mdz059, gold·MA, 367c). The decision-relevant
  split: **no cancer-INCIDENCE reduction but \~13% cancer-MORTALITY reduction (RR \~0.87)** — the arm VITAL
  doesn't foreground. Elsevier anti-bot 403; **PMC6821324** available → drop from PMC.
- REJECTED (echo of Keum / thinner): 2022 Crit-Rev-Food-Sci MA (10.1080/10408398.2022.2056574, 34c) · 2019
  Biosci-Rep RCT-MA (bsr20190369, 33c) · 2021 INPLASY protocol (not a completed study). All concur; keep the
  landmark. NOTE all-cause-mortality arm is partly held via VITAL (null) — Keum adds the cancer-mortality signal.

### Cluster 2 — omega-3 → COGNITION / dementia (prioritized over depression: mental-health-as-end is peripheral)
- **SELECTED + FETCHED (Europe-PMC, PMC10447496, full 10.6k-w): AJCN 2023** «The Relationship of Omega-3 Fatty
  Acids with Dementia and Cognitive Decline: Evidence from Prospective Cohort Studies…» (10.1016/j.ajcnut.2023.04.001,
  high·evidence-review, 154c). Recent, comprehensive, OA — the current synthesis of the (largely null-to-modest)
  omega-3→cognition evidence.
- DEFERRED (optional definitive-null): Cochrane 2012 «Omega-3 for prevention of cognitive decline and dementia»
  (10.1002/14651858.cd005379.pub3, gold, 220c, OA) — the canonical RCT null, but 2012/dated; the AJCN 2023
  updates it. Drop only if a Cochrane-grade null is specifically wanted.
- REJECTED (out of scope-priority): omega-3→DEPRESSION MAs (2020 Nord-J-Psych 10.1080/08039488.2020.1843710;
  2025 JAD) — depression as an END is PERIPHERAL (telos: mental health admitted mainly via its physical
  intersection); cognition/dementia is the physical hard-outcome arm we open. Recorded as a deliberate call, not
  an oversight — revisit if the physical-intersection (e.g. omega-3→depression→CV via adherence) is ever wanted.

### Cluster 3 — older-adult protein TARGET → physical function / sarcopenia (the flagged TOP gap; Bauer only moderate)
- **SELECTED + FETCHED (Europe-PMC, PMC6163569, full 9k-w): Mendonca 2018** «Relative Protein Intake and Physical
  Function in Older Adults: A Systematic Review and Meta-Analysis of Observational Studies» (Nutrients
  10.3390/nu10091330, gold·MA, 131c). Directly the TARGET question (g/kg → function), OA. Ratchets the
  elderly-protein-target row from `moderate` (Bauer consensus) toward gold.
- DEFERRED → MAINTAINER-DROP (the newer upgrade): Coelho-Júnior 2022 «Protein intake and physical function in
  older adults: a SR-MA» (Ageing Res Rev 10.1016/j.arr.2022.101731, gold·SR-MA, 82c) — higher-impact journal,
  4 yr newer; the ratchet-UPGRADE over Mendonca. Paywalled → drop if the strongest incumbent is wanted.
- REJECTED (different question): 2017 AJCN protein+RT→body-composition (10.3945/ajcn.116.143594, 317c) — that is
  the protein×RT question already held (Morton), not the older-adult intake TARGET · 2023 plant-protein-intervention
  MA (nu15184060) — a sub-question (plant-source), not the target.

**Net:** 2 FETCHED (AJCN-2023 omega-3→cognition · Mendonca-2018 protein→function-older) · 1 MAINTAINER-DROP
(Keum-2019 vit-D→cancer-mortality, PMC6821324) · 2 optional-drops (Cochrane-2012 omega-3-null · Coelho-2022
protein-upgrade) · omega-3→depression REJECTED on telos-scope. Hand the 2 fetched to `process inbox`.
- [2026-08-07] openalex search "magnesium supplementation blood pressure meta-analysis meta-analysis" -> 4 hits: https://doi.org/10.1016/s0895-7061(02)02964-3; https://doi.org/10.1038/ejcn.2012.4; https://doi.org/10.3945/ajcn.117.155291; https://doi.org/10.1007/s12011-020-02157-0
- [2026-08-07] openalex search "magnesium intake type 2 diabetes cardiovascular meta-analysis meta-analysis" -> 2 hits: https://doi.org/10.1186/s12916-016-0742-z; https://doi.org/10.6084/m9.figshare.4343177
- [2026-08-07] openalex fetch "10.1186/s12916-016-0742-z" -> 0 hits: (none)

## [2026-08-07 #6] SELECTION RECORD — the one clean remaining lever: magnesium (an unopened [G] topic)
- **SELECTED + FETCHED: Fang 2016** «Dietary magnesium intake and the risk of cardiovascular disease, type 2
  diabetes, and all-cause mortality: a dose-response meta-analysis» (BMC Med 10.1186/s12916-016-0742-z, gold·MA,
  263c, OA). Opens the magnesium [G] row — a common lever with three patient-important outcomes in one
  dose-response MA. Companion available if the BP-supplementation arm is wanted: Zhang 2017 AJCN
  (10.3945/ajcn.117.155291, magnesium-supplement→BP RCT-MA, OA).
- CEILING NOTE: with magnesium taken, the acquisition frontier is largely exhausted — remaining [G] cells are
  either insufficient-evidence (gene-diet, LMHR, sauna/cold/light, hydration) or low-decision-value
  (poultry, tea≈coffee, meal-frequency). Further acquiring adds dilution debt without proportional value;
  the pipeline (32 staged + fetched + drops) and the compile backlog outrank more breadth.
- [2026-08-08] openalex search "exercise depression meta-analysis" -> 6 hits: https://doi.org/10.1136/bmj-2023-075847; https://doi.org/10.3390/ijerph15020321; https://doi.org/10.3390/ijerph17010022; https://doi.org/10.1016/j.arr.2019.100999; https://doi.org/10.1186/s13034-022-00453-2
- [2026-08-08] openalex search "dietary intervention depression meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "diet quality depression meta-analysis" -> 1 hits: https://doi.org/10.1016/j.jad.2017.09.022
- [2026-08-08] openalex search "social isolation loneliness mortality meta-analysis" -> 1 hits: https://doi.org/10.1038/s41562-023-01617-6
- [2026-08-08] openalex search "dietary inflammatory index mortality meta-analysis" -> 2 hits: https://doi.org/10.3390/nu10020200; https://doi.org/10.1055/a-0596-8204
- [2026-08-08] openalex search "wearable activity tracker physical activity meta-analysis" -> 4 hits: https://doi.org/10.2196/11819; https://doi.org/10.1186/s12966-020-00955-2; https://doi.org/10.2196/15576; https://doi.org/10.1016/j.jshs.2021.07.008
- [2026-08-08] openalex search "mindfulness based stress reduction health outcomes meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "periodontal disease dementia cognitive meta-analysis" -> 1 hits: https://doi.org/10.1007/s11357-024-01243-8
- [2026-08-08] openalex search "meditation mortality cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "mindfulness meditation mental health meta-analysis" -> 1 hits: https://doi.org/10.1016/j.jad.2020.09.134
- [2026-08-08] openalex search "diet rheumatoid arthritis meta-analysis" -> 1 hits: https://doi.org/10.3390/nu13124221
- [2026-08-08] openalex search "fiber inflammatory bowel disease risk meta-analysis" -> 1 hits: https://doi.org/10.1093/advances/nmaa145
- [2026-08-08] openalex search "diet asthma risk meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "water intake hydration mortality meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "hydration chronic disease systematic review" -> 0 hits: (none)
- [2026-08-08] openalex search "mediterranean diet asthma" -> 5 hits: https://doi.org/10.3389/fped.2017.00072; https://doi.org/10.3390/nu14081618; https://doi.org/10.1111/jhn.12609; https://doi.org/10.3390/nu14091825; https://doi.org/10.1002/ppul.24338
- [2026-08-08] openalex search "water intake health outcomes adults" -> 0 hits: (none)
- [2026-08-08] openalex search "fluid intake kidney stone recurrence" -> 0 hits: (none)
- [2026-08-08] openalex search "diet autoimmune disease umbrella review" -> 0 hits: (none)
- [2026-08-08] openalex search "wearable trackers physical activity umbrella review" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1136/bmj-2023-075847" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.3390/nu10020200" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.2196/11819" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1007/s11357-024-01243-8" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1016/j.jad.2017.09.022" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1093/advances/nmaa145" -> 0 hits: (none)

## [2026-08-08 #1] SELECTION RECORD — coverage-expansion round (9 telos-edge topics)
Maintainer-requested sweep of 9 gap topics with an AGGRESSIVE gold-gate cut. Channel: openalex only
(auto-logged above); no web search. Gold/high required; DEFER any topic with no gold reaching a
patient-important / in-scope outcome. Held-not-resurfaced: Chen mindfulness->BP 2024 (MBSR partial),
Richardson CGM + CGM framework (wearables partial), Livingston dementia commission (social-isolation
PAF), Martineau vit-D->respiratory-infection, Valdes/Wastyk/WGO (microbiome).

**SELECTED — gold, ratchet-advancing, in-scope (7):**
- **Noetel 2024 BMJ** — exercise->depression network MA (581c). KEYSTONE; patient-important (clinical
  depression), NMA is best design. `[maintainer-drop]` BMJ 403 (plain + headless). DOI 10.1136/bmj-2023-075847.
  Slug `Noetel - Exercise Depression Network Meta-Analysis 2024`.
- **Molendijk 2017 JAD** — diet-quality->depression dose-response MA (552c). `[maintainer-drop]` Elsevier
  paywall. DOI 10.1016/j.jad.2017.09.022. Pairs w/ Noetel (diet vs exercise lever for the mental-health axis).
- **Wang 2023 Nat Hum Behav** — social isolation/loneliness->mortality, 90 cohorts (422c). KEYSTONE for the
  social-connection axis. `[maintainer-drop]` Nature paywall (oa=False). DOI 10.1038/s41562-023-01617-6.
  Frame: large association, hard-to-dose lever (limited decision-change) + U/artifact + confounding check.
- **Namazi 2018 Nutrients** — Dietary Inflammatory Index->CVD/mortality MA (318c). Anchors the
  chronic-inflammation "independent lever vs mediator that reduces to known patterns (MedDiet/fibre)" verdict.
  `[maintainer-drop]` MDPI 403 (plain + headless, versioned + clean URL both). DOI 10.3390/nu10020200.
- **Brickwood 2019 JMIR mHealth** — consumer wearable trackers->physical activity MA (673c). FETCHED ->
  `inbox/` (20pp PDF, clean). CAVEAT at ingest: outcome is PA level/steps (SURROGATE), not a hard endpoint;
  the honest verdict is adherence-tool, weak durable-outcome evidence. DOI 10.2196/11819.
- **Milajerdi 2020 Adv Nutr** — dietary fibre/fruit/veg->IBD *risk* MA (123c). The IN-SCOPE autoimmune slice
  (prevention/incidence, not treatment). `[maintainer-drop]` OUP paywall. DOI 10.1093/advances/nmaa145.
- **GeroScience 2024** — periodontal disease->cognitive disorders/dementia/depression MA (49c). The single
  gold-ish anchor for the oral->brain topic; SELECTED low-priority to support a "mostly confounded
  observational association" verdict (streetlight/U-artifact framing), NOT "floss to save your brain".
  `[maintainer-drop]` PMC NCBI hard-wall (20KB landing page only). DOI 10.1007/s11357-024-01243-8.

**DEFERRED — no gold reaching a patient-important, in-scope outcome (zeros attributed):**
- **Mindfulness/MBSR beyond held Chen** — only paywalled Gal 2021 JAD *meditation-apps->wellbeing* MA (305c),
  which is out of telos scope (wellbeing-as-end, not a physical/longevity outcome). Held Chen already covers
  MBSR->BP (low confidence). No gold on meditation->hard health/longevity. DEFER.
- **Asthma / allergy / respiratory (diet)** — MA-level/high-cite = 0; loosened surfaces only child- and
  pregnancy-focused low-cite SRs (MedDiet->childhood asthma, \~60c). No ADULT gold. Zero attributed to thin
  adult-gold literature, not query strictness. DEFER.
- **Hydration / water intake** — 0 across water->mortality, hydration->chronic-disease, AND fluid->kidney-stone
  recurrence (the one hard endpoint), even with type-filter dropped and low cite floor. Genuine
  literature-absence at gold level. Confirms the 2026-08-07 CEILING NOTE. DEFER.
- **Anti-inflammatory diet -> RA (Schonenberger 2021 Nutrients, RA *pain*, 134c OA)** — REJECTED: scope-edge
  (treatment of diagnosed disease + symptom/surrogate outcome). Kept the IBD-*risk* autoimmune slice instead.

**Acquisition summary:** 1 fetched (Brickwood); 6 maintainer-drop (DOIs above — 3 truly paywalled
[Molendijk/Milajerdi/Wang], 3 OA-but-blocked [Noetel BMJ, Namazi MDPI, GeroScience PMC]). 3 topics
deferred (mindfulness-hard-outcome, asthma, hydration) + 1 reject (RA-treatment). Hand off to `process inbox`.
- [2026-08-08] openalex search "canakinumab atherosclerotic cardiovascular" -> 0 hits: (none)
- [2026-08-08] openalex search "colchicine cardiovascular events meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "C-reactive protein all-cause mortality meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "interleukin-6 mortality general population meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "antiinflammatory therapy canakinumab atherosclerotic disease" -> 3 hits: https://doi.org/10.1056/nejmoa1707914; https://doi.org/10.3410/f.729280216.793544830; https://doi.org/10.3410/f.729280216.793563073
- [2026-08-08] openalex search "colchicine chronic coronary disease" -> 4 hits: https://doi.org/10.1056/nejmoa2021372; https://doi.org/10.1056/nejmc2034992; https://doi.org/10.1161/circulationaha.120.050560; https://doi.org/10.1016/j.atherosclerosis.2021.08.005
- [2026-08-08] openalex search "C-reactive protein mortality meta-analysis" -> 4 hits: https://doi.org/10.1183/16000617.0070-2016; https://doi.org/10.1042/bsr20181135; https://doi.org/10.1016/j.annepidem.2020.07.005; https://doi.org/10.1016/j.cyto.2019.02.005
- [2026-08-08] openalex search "inflammation residual risk LDL cholesterol statin" -> 0 hits: (none)
- [2026-08-08] openalex search "smoking rheumatoid arthritis risk meta-analysis" -> 1 hits: https://doi.org/10.1186/ar4498
- [2026-08-08] openalex search "body mass index rheumatoid arthritis risk meta-analysis" -> 2 hits: https://doi.org/10.1186/s13075-015-0601-x; https://doi.org/10.1155/2019/3579081
- [2026-08-08] openalex search "obesity psoriasis risk meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "vitamin D multiple sclerosis risk meta-analysis" -> 1 hits: https://doi.org/10.1186/s12883-019-1577-y
- [2026-08-08] openalex search "omega-3 fatty acids rheumatoid arthritis meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "rheumatoid arthritis mortality meta-analysis" -> 3 hits: https://doi.org/10.1016/j.semarthrit.2019.04.005; https://doi.org/10.1186/s12931-021-01856-z; https://doi.org/10.1016/j.semarthrit.2022.152031
- [2026-08-08] openalex fetch "10.1186/ar4498" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1186/s13075-015-0601-x" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1056/nejmoa1707914" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1056/nejmoa2021372" -> 0 hits: (none)
- [2026-08-08] openalex search "C-reactive protein coronary heart disease individual participant" -> 3 hits: https://doi.org/10.1016/s0140-6736(09)61717-7; https://doi.org/10.1136/bmj.d548; ?

## [2026-08-08 #2] SELECTION RECORD — inflammation + autoimmune RE-SEARCH (maintainer challenge; asymmetric-search catch)
BIAS-MACHINERY NOTE: the #1 round searched inflammation ONLY from the diet angle (DII) and autoimmune
from ONE narrow slice (fibre->IBD-risk), then cut on "scope". Maintainer challenged both. Re-search under
symmetric standards found the decisive gold the first pass never queried -> the first cut was asymmetric
scrutiny, not a true gold-absence. Recorded per the record-the-expectation discipline.

**INFLAMMATION — is it a CAUSAL modifiable lever? (the RCT + MR proof #1 missed):**
- **SELECTED Ridker 2017 CANTOS** — canakinumab (anti-IL-1beta) cut MACE with hsCRP-lowering and NO lipid
  change = the RCT proof inflammation is CAUSAL for CVD. Net-effect nuance: NO all-cause-mortality benefit
  (fatal infections offset it); expensive; not lifestyle. DOI 10.1056/nejmoa1707914 (9306c). `[maintainer-drop]` NEJM 403.
- **SELECTED Nidorf 2020 LoDoCo2** — colchicine (CHEAP, generic) reduced CV events in chronic coronary
  disease. DOI 10.1056/nejmoa2021372 (2161c). `[maintainer-drop]` NEJM 403.
- **SELECTED Emerging Risk Factors Collaboration 2010 Lancet** — CRP->CHD/stroke/vascular+nonvascular
  mortality IPD-MA (the marker->outcome landmark). DOI 10.1016/s0140-6736(09)61717-7 (2541c). `[maintainer-drop]` Lancet.
- **SELECTED CRP-CHD Mendelian randomization 2011 BMJ** — genetic CRP does NOT raise CHD => CRP is a MARKER,
  not the causal lever (target is upstream IL-1->IL-6). The surrogate-vs-target + U-artifact jewel. DOI
  10.1136/bmj.d548 (658c). `[maintainer-drop]` BMJ 403 (genuinely OA).
- SYNTHESIS (owed at ingest): inflammation is a VALIDATED causal node (CANTOS/colchicine/IL-6R-MR), but
  (i) CRP is marker-not-lever, (ii) drug levers apply to established-disease strata, (iii) LIFESTYLE
  anti-inflammatory levers (adiposity/diet/activity/smoking/sleep) largely OVERLAP big rocks already held,
  and (iv) DII (Namazi) is an observational diet-proxy. Both true: causal node AND mostly-known lifestyle levers.

**AUTOIMMUNE — modifiable risk (prevention, IN-SCOPE) + longevity impact:**
- **SELECTED + FETCHED DiGiuseppe 2014** — smoking->RA dose-response MA (strong modifiable risk). DOI
  10.1186/ar4498 (274c, OA). -> `inbox/` (547KB, clean).
- **SELECTED Qin 2015** — BMI/adiposity->RA dose-response MA. DOI 10.1186/s13075-015-0601-x (243c).
  `[maintainer-drop]` paywalled.
- CONTEXT (belief confirmed): RA carries excess mortality that is largely CARDIOVASCULAR -> connects
  autoimmune -> systemic inflammation -> CVD -> longevity into one mechanism (the through-line for both beliefs).
- DEFERRED still: omega-3->RA (0 at threshold, thin); vitamin-D->MS (top hit was VDR *polymorphism*, not the
  modifiable status/intake angle — needs a targeted re-search: Munger cohort / MR); general RA-excess-mortality
  MA (hits were ILD-subtype-specific) — flag, don't force.

**Acquisition this round:** 1 fetched (DiGiuseppe); 5 maintainer-drop (CANTOS, LoDoCo2, ERFC-CRP, CRP-MR, Qin).
CORRECTION TO #1: inflammation + autoimmune are NOT thin — they carry landmark gold; the #1 DEFER/REJECT was
under-searched. Standing DEFERs from #1 (hydration, asthma-adult-gold, mindfulness->hard-outcome) still hold.
- [2026-08-08] openalex search "polypharmacy adverse outcomes older adults systematic review" -> 1 hits: https://doi.org/10.1634/theoncologist.2019-0406
- [2026-08-08] openalex search "polypharmacy mortality older people meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "prescribing cascade" -> 4 hits: https://doi.org/10.1016/s0140-6736(17)31188-1; https://doi.org/10.1001/jamainternmed.2019.7087; https://doi.org/10.1111/jgs.15800; https://doi.org/10.1111/jgs.15543
- [2026-08-08] openalex search "deprescribing older adults outcomes systematic review" -> 1 hits: https://doi.org/10.1093/ijpp/riad025
- [2026-08-08] openalex search "deprescribing randomized controlled trials mortality meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1093/ijpp/riad025" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1001/jamainternmed.2019.7087" -> 0 hits: (none)

## [2026-08-08 #3] SELECTION RECORD — polypharmacy / prescribing cascade / deprescribing (maintainer angle)
Maintainer belief: pharmacological intervention is a slippery slope (one drug -> a second -> ...). In scope:
the telos treats a drug as an exposure whose NET effect includes cascade/ADE burden (net-effect-not-intended;
judge complete realistic strategies). Channel: openalex (auto-logged). Gold-gated.

**SELECTED (3):**
- **Deprescribing RCT SR 2023 (Int J Pharm Pract)** — the DECISIVE test: does REVERSING polypharmacy improve
  patient-important outcomes? SR of RCTs. DOI 10.1093/ijpp/riad025 (91c, OA). `[maintainer-drop]` OUP 403.
  KEYSTONE — the honest verdict lives here (deprescribing is broadly SAFE; large mortality benefit not proven).
- **Rochon & Gurwitz "The prescribing cascade revisited" Lancet 2017** — the canonical NAMED-concept source
  for the slippery slope. DOI 10.1016/s0140-6736(17)31188-1 (231c). Tier: narrative/viewpoint = MODERATE
  (concept-definer, needs source-tier-override at ingest as the field's naming source). `[maintainer-drop]` Lancet.
- **Savage 2020 JAMA Intern Med** — empirical instance (CCB -> loop-diuretic cascade, prescription-sequence-
  symmetry). DOI 10.1001/jamainternmed.2019.7087 (117c, OA). Concrete worked example. `[maintainer-drop]` JAMA 403.
- SYNTHESIS (owed): the cascade is REAL and named; polypharmacy->falls/ADE/hospitalization/mortality
  associations are real but heavily CONFOUNDED BY INDICATION (sicker take more drugs — reverse-causation family,
  same lens as the U-artifact); deprescribing RCTs are the clean test and show SAFETY, not a proven longevity
  lever. Both true: slope is real (net-effect discipline validated) AND the mortality signal is confounded.
  Bears directly on the held statin / BP-drug / GLP-1 pages (net-effect vs realistic alternative).

**Acquisition:** 0 fetched (all 3 OA-blocked: OUP/Lancet/JAMA) -> all maintainer-drop. Gold EXISTS; topic is
NOT thin — confirms polypharmacy as a real coverage gap.
- [2026-08-08] openalex search "active commuting cardiovascular mortality meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "shift work coronary heart disease meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "night shift work breast cancer meta-analysis" -> 3 hits: https://doi.org/10.1093/jnci/djw169; https://doi.org/10.1016/j.sleep.2015.02.543; https://doi.org/10.1186/s12905-021-01233-4
- [2026-08-08] openalex search "job strain coronary heart disease" -> 3 hits: https://doi.org/10.1016/s0140-6736(12)60994-5; https://doi.org/10.1161/jaha.117.008073; https://doi.org/10.1136/oemed-2011-100411
- [2026-08-08] openalex search "occupational physical activity paradox mortality" -> 2 hits: https://doi.org/10.1016/j.lanwpc.2022.100457; https://doi.org/10.2139/ssrn.3942656
- [2026-08-08] openalex search "sense of purpose in life mortality meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "retirement mortality health systematic review" -> 0 hits: (none)
- [2026-08-08] openalex search "cycling walking commuting mortality cohort" -> 0 hits: (none)
- [2026-08-08] openalex search "occupational physical activity all-cause mortality systematic review" -> 1 hits: ?
- [2026-08-08] openalex search "purpose in life all-cause mortality" -> 1 hits: https://doi.org/10.3410/f.725980721.793564423
- [2026-08-08] openalex search "retirement effect health mortality cohort" -> 0 hits: (none)
- [2026-08-08] openalex resolve "10.1136/bmj.j1456 10.1136/bjsports-2017-098540 10.1097/PSY.0000000000000274" -> 3 hits: https://doi.org/10.1136/bmj.j1456; https://doi.org/10.1136/bjsports-2017-098540; https://doi.org/10.1097/psy.0000000000000274

## [2026-08-08 #4] SELECTION RECORD — occupation / commute / shift work / vocation -> health & longevity (maintainer angle)
Maintainer angle: NOT occupational-hazard/danger, but do some occupations/vocations/hobbies TEND to higher
health & longevity? In scope: job, commute-mode, and shift schedule are modifiable structural exposures with
patient-important outcomes. Channel: openalex (auto-logged). NOTE: openalex title.search needs EVERY query
word IN the title -> 4 clusters returned 0 from STRICTNESS not absence; the landmarks were then confirmed by
`resolve <DOI>`. A silent 0 here would have been a false absence.

**SELECTED (5 gold keystones):**
- **Kivimaki 2012 Lancet** — job strain (high demand + low control) -> CHD, collaborative IPD-MA. The
  work-stress landmark (modest \~1.2x). DOI 10.1016/s0140-6736(12)60994-5 (991c). `[maintainer-drop]` Lancet.
- **Coenen 2018 BJSM** — "Do highly physically active workers die early?" SR+MA: high OCCUPATIONAL PA ->
  HIGHER mortality in men (\~1.18x) = the PHYSICAL-ACTIVITY PARADOX (occupational != leisure PA; net-effect /
  compensation lens; contradicts naive more-movement-is-better). DOI 10.1136/bjsports-2017-098540 (370c, gold, OA). `[maintainer-drop]` BMJ.
- **Celis-Morales 2017 BMJ** — active commuting (esp. cycling) -> lower CVD/cancer/all-cause mortality,
  UK-Biobank cohort (cycling all-cause HR \~0.59). Commute-mode as a structural PA-delivery lever. DOI
  10.1136/bmj.j1456 (527c, OA). `[maintainer-drop]` BMJ. (Partial overlap w/ held PA->mortality; new angle = structural/commute.)
- **Travis 2016 JNCI** — night-shift work -> breast cancer: 3 prospective cohorts + MA, a notable NULL /
  no-association (counterweight to the IARC 2A classification; symmetric-standards + U/confounding lens). DOI
  10.1093/jnci/djw169 (193c, OA). `[maintainer-drop]` OUP.
- **Cohen 2015 Psychosom Med** — purpose in life -> lower all-cause mortality + CV events, MA. The
  vocation/hobby -> meaning channel (physiological intersection; overlaps the social-connection + mental-health
  axes). DOI 10.1097/psy.0000000000000274 (440c). `[maintainer-drop]` paywalled.

**DEFERRED:** retirement -> mortality (mixed/confounded, no clean gold — healthy-worker + reverse-causation);
specific hobbies (gardening/music/volunteering) route through purpose + social + PA channels already captured;
shift-work -> CHD (job-strain landmark + circadian via held sleep pages cover the decision; a dedicated
shift->CHD MA is a lower-priority add).

**Acquisition:** 0 fetched (all 5 OA-blocked BMJ/OUP/Lancet or paywalled) -> all maintainer-drop. Gold EXISTS;
occupation is a real, previously-uncovered cluster. The PA-paradox (Coenen) is the highest-value single finding.
- [2026-08-08] openalex search "sedentary behaviour all-cause mortality dose-response meta-analysis" -> 1 hits: https://doi.org/10.1007/s10654-018-0380-1
- [2026-08-08] openalex search "television viewing time all-cause mortality meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "screen time cardiovascular mortality adults meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1007/s10654-018-0380-1" -> 0 hits: (none)
- [2026-08-08] openalex search "television viewing mortality" -> 3 hits: https://doi.org/10.1093/aje/kwv164; https://doi.org/10.1016/j.atherosclerosis.2017.06.024; https://doi.org/10.1016/j.hlc.2016.03.006
- [2026-08-08] openalex search "eating alone metabolic syndrome meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "family meals dietary meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "living alone all-cause mortality meta-analysis" -> 1 hits: https://doi.org/10.1016/j.eclinm.2022.101677
- [2026-08-08] openalex search "occupational complexity dementia cognitive meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "mentally stimulating work cognitive decline" -> 0 hits: (none)
- [2026-08-08] openalex search "commensality eating together health" -> 0 hits: (none)
- [2026-08-08] openalex search "eating alone health outcomes adults" -> 1 hits: https://doi.org/10.14373/jkda.2020.26.2.85
- [2026-08-08] openalex resolve "10.1136/bmj.n1804 10.1017/S1041610215001349" -> 2 hits: https://doi.org/10.1136/bmj.n1804; https://doi.org/10.1017/s1041610215001349
- [2026-08-08] openalex search "occupational mental demands dementia risk" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1093/aje/kwv164" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1016/j.eclinm.2022.101677" -> 0 hits: (none)

## [2026-08-08 #5] SELECTION RECORD — communal eating / multigenerational living / physical-vs-mental work / sitting / screens
Maintainer angle: household + social + sedentary structural exposures -> health/longevity. Channel: openalex
(auto-logged); zeros re-checked loose + landmarks confirmed via resolve-by-DOI (title.search strictness).
Held already: Ekelund sitting-time 2016 + accelerometer-PA 2019 (SITTING covered); Coenen PA-paradox +
Kivimaki job-strain (PHYSICAL occupation, round #4); Wang social-isolation->mortality (round #1).

**SELECTED (4):**
- **Patterson 2018 Eur J Epidemiol** — sedentary behaviour -> all-cause/CV/cancer mortality + T2D, SR +
  DOSE-RESPONSE MA (1450c, OA). FETCHED -> `inbox/`. UPGRADE to the held Ekelund sitting page: adds the
  dose-response SHAPE + T2D/cancer outcomes Ekelund's PA-interaction pooling lacked. DOI 10.1007/s10654-018-0380-1.
- **Living Alone -> all-cause mortality 2022 (eClinicalMedicine)** — SR+MA, community-dwelling adults (60c).
  The multigenerational/living-arrangement keystone (living-alone = inverse of multigen household). Distinct
  structural exposure though it overlaps social-isolation (Wang). DOI 10.1016/j.eclinm.2022.101677. `[maintainer-drop]` paywalled.
- **Kivimaki 2021 BMJ** — cognitive stimulation at work -> LOWER dementia risk, IPD-Work consortium + plasma
  proteins (98c, OA). The MENTAL-occupation keystone (cognitive reserve; connects held Livingston/dementia).
  DOI 10.1136/bmj.n1804. **FETCHED** -> `inbox/` (Steel cloud-browser; BMJ 403'd plain+headless, Europe-PMC
  PMC8372196 render endpoint failed, Steel on the BMJ pdf succeeded — 13pp verified). Pairs with Coenen
  (physical) to answer physical-vs-mental.
- **Sun 2015 Am J Epidemiol** — TV viewing time -> all-cause mortality MA (67c, OA). The SCREEN keystone, but
  LOW-priority: adult screen-time is operationalized as TV = leisure sedentary, so it largely OVERLAPS Patterson
  ("is the category doing any work?" — screens \~ sitting, not an independent lever). DOI 10.1093/aje/kwv164. `[maintainer-drop]` OUP.

**DEFERRED:**
- **Communal eating / commensality / eating-alone** — NO gold. Loosened only to a Korean-language low-cite
  article (eating-alone->health, 10c) + child/adolescent family-meal->diet-quality literature (not adult
  longevity). Plausible benefit is MEDIATED by social connection (Wang) + dietary pattern (held) -> not an
  independent lever. Genuine gold-absence for the adult-longevity question, not query strictness.
- **Physical occupation** — already covered (Coenen PA-paradox, #4).

**Acquisition:** 2 fetched (Patterson; Kivimaki-2021 via Steel [2026-08-08 follow-up]); 2 maintainer-drop (Living-alone, Sun-TV). Physical-vs-
mental work now answerable (Coenen physical + Kivimaki mental); sitting upgraded; screens \~ sitting; communal eating thin.
- [2026-08-08] openalex search "frailty mortality older adults meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "physical activity intervention frailty older adults meta-analysis" -> 2 hits: https://doi.org/10.9778/cmajo.20200222; https://doi.org/10.9778/cmajo.20200248
- [2026-08-08] openalex search "weight loss knee osteoarthritis pain meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "exercise knee osteoarthritis meta-analysis" -> 4 hits: https://doi.org/10.1016/j.rehab.2019.04.006; https://doi.org/10.1016/j.semarthrit.2017.03.007; https://doi.org/10.1136/bjsports-2016-096458; https://doi.org/10.1136/rmdopen-2018-000713
- [2026-08-08] openalex search "exercise chronic low back pain meta-analysis" -> 4 hits: https://doi.org/10.1016/j.jphys.2021.09.004; https://doi.org/10.2519/jospt.2022.10671; https://doi.org/10.1371/journal.pone.0238544; https://doi.org/10.3233/bmr-170920
- [2026-08-08] openalex search "frailty risk all-cause mortality community" -> 3 hits: https://doi.org/10.1093/jbmr/zjad019; https://doi.org/10.1177/07334648221147917; https://doi.org/10.1016/j.jamda.2025.105527
- [2026-08-08] openalex search "diet weight reduction osteoarthritis symptoms" -> 0 hits: (none)
- [2026-08-08] openalex search "physical activity exercise chronic pain adults overview" -> 2 hits: https://doi.org/10.1002/14651858.cd011279.pub3; https://doi.org/10.1002/14651858.cd011279.pub2
- [2026-08-08] openalex search "perceived stress coronary heart disease meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "allostatic load mortality meta-analysis" -> 1 hits: https://doi.org/10.1016/j.amepre.2022.02.003
- [2026-08-08] openalex search "cortisol mortality cardiovascular" -> 3 hits: https://doi.org/10.2147/tcrm.s127555; https://doi.org/10.1210/jendso/bvab017; https://doi.org/10.1016/j.psyneuen.2022.105753
- [2026-08-08] openalex search "circadian disruption cardiometabolic risk meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex resolve "10.1016/j.jamda.2016.09.010 10.1016/j.amjcard.2012.07.006 10.1001/jama.2013.277669" -> 3 hits: https://doi.org/10.1016/j.jamda.2016.09.010; https://doi.org/10.1016/j.amjcard.2012.07.006; https://doi.org/10.1001/jama.2013.277669
- [2026-08-08] openalex resolve "10.1111/ggi.13340" -> 0 hits: (none)
- [2026-08-08] openalex search "weight loss osteoarthritis systematic review disability" -> 0 hits: (none)
- [2026-08-08] openalex search "circadian rhythm disruption metabolic disease" -> 4 hits: https://doi.org/10.1038/s41598-025-94234-4; https://doi.org/10.1007/s12035-023-03907-6; https://doi.org/10.3389/fmicb.2026.1801367; https://doi.org/10.1051/e3sconf/202455305021
- [2026-08-08] openalex fetch "10.9778/cmajo.20200222" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1002/14651858.cd011279.pub3" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1016/j.rehab.2019.04.006" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1136/rmdopen-2018-000713" -> 0 hits: (none)

## [2026-08-08 #6] SELECTION RECORD — QoL-extension gaps (frailty · chronic pain · OA · HPA/stress · circadian)
The telos QoL extension (telos-review 2026-08-08) opened these gaps; this fills them. Channel: openalex
(auto-logged); title-strictness zeros re-checked loose + landmarks confirmed via resolve-by-DOI. Gold-gated.
Held/covered already: Kivimaki job-strain + night-shift MA (shift-work = the circadian hard-outcome edge);
grip/sarcopenia/falls (function); Stress-Mgmt->BP stub.

**SELECTED (6):**
- **Vermeiren 2016 (JAMDA)** — frailty -> negative health outcomes (mortality + disability + hospitalization)
  MA, the frailty->OUTCOME keystone. DOI 10.1016/j.jamda.2016.09.010 (1055c). `[maintainer-drop]` Elsevier —
  GENUINELY paywalled (Europe-PMC checked 2026-08-08: no PMCID, isOA=N, inEPMC=N, 'Subscription required'); not
  an anti-bot block, so Steel/EPMC cannot help — needs institutional access or an OA-alternative substitution decision.
- **CMAJ Open 2021 (Racey/Giangregorio team)** — physical-activity interventions for frailty/pre-frailty:
  the "can you REVERSE it?" keystone. DOI 10.9778/cmajo.20200222 (70c, OA). **FETCHED** -> `inbox/` (5pp).
  Companion available (nutrition + PA combined, 10.9778/cmajo.20200248) if the protein link is wanted.
- **Geneen 2017 Cochrane OVERVIEW** — physical activity & exercise for chronic pain in adults, umbrella of
  Cochrane reviews (best design for the node). DOI 10.1002/14651858.cd011279.pub3 (1184c, OA). `[maintainer-drop]`
  Cochrane 403 (Steel candidate). The chronic-pain keystone.
- **Rausch Osthoff 2018 (RMD Open)** — exercise/PA -> function in hip/knee OA + inflammatory arthritis, MA
  informing the EULAR recommendations. DOI 10.1136/rmdopen-2018-000713 (163c, OA). **FETCHED** -> `inbox/`
  (exercise->OA keystone). **Goh 2019 (10.1016/j.rehab.2019.04.006, 465c) DROPPED as an echo** — ScienceDirect
  403 and rmdopen already answers exercise->OA (no-echo ratchet).
- **Messier IDEA 2013 (JAMA)** — intensive diet + exercise weight loss -> knee-OA load/inflammation/pain/function
  RCT, the weight-loss->OA keystone (landmark RCT, fit-to-question). DOI 10.1001/jama.2013.277669 (852c). `[maintainer-drop]` JAMA.
- **Allostatic Load -> Mortality MA 2022 (Am J Prev Med)** — cumulative stress-physiology -> all-cause mortality,
  the HPA/psychosocial hard-outcome keystone that connects the non-collapsing psychosocial cluster (isolation ·
  loneliness · purpose · job strain · living-alone) to a patient-important outcome. DOI 10.1016/j.amepre.2022.02.003
  (166c). `[maintainer-drop]` Elsevier.

**DEFERRED / not-acquired:**
- **Circadian disruption** — NO human-outcome gold beyond shift-work (held via Kivimaki + night-shift MA).
  Loosened only to mechanism/animal/microbiome/steatosis low-cite 2024-26 work = the "not-yet" bucket. DEFER;
  the hard-outcome edge is already held. Attributed to genuine human-outcome thinness, not query strictness.
- **Chronic-stress-specific (perceived stress -> CHD)** — folded into Allostatic-Load MA + held Kivimaki
  job-strain; a separate acquire would be an echo. (Guessed DOI 10.1016/j.amjcard.2012.07.006 for Richardson-2012
  resolved to an UNRELATED albuminuria paper -> NOT used; verified-not-fabricated.)
- **Outcome-first intervention hierarchy** — NOT an acquire: the owed Layer-1 SYNTHESIS deliverable
  (outcome-anchored, absolute-magnitude, age-stratified ranking). Needs no new source; feeds Big-Rocks.

**Acquisition:** 2 fetched (CMAJ frailty-PA; rmdopen exercise-OA); 4 maintainer-drop (Vermeiren, Geneen-Cochrane,
Messier-IDEA, Allostatic-Load). 1 echo-dropped (Goh). Circadian + chronic-stress-specific deferred; hierarchy = synthesis.
- [2026-08-08] openalex search "stretching flexibility injury prevention meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "flexibility mobility physical function older adults meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "functional training physical function older adults meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "balance training falls older adults meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "resistance training injury epidemiology" -> 2 hits: https://doi.org/10.1590/1980-0037.2025v27e99383; ?
- [2026-08-08] openalex search "adverse events exercise interventions systematic review" -> 4 hits: ?; https://doi.org/10.22540/jfsf-03-155; ?; ?
- [2026-08-08] NOTE — the 6 queries above are an **INTERRUPTED** exercise-deliverable gap-scan (mobility/flexibility · functional/balance training · exercise injury/adverse-events). Round paused mid-search; NO SELECTION RECORD written yet. Preliminary read: gaps 1-2 (mobility/flexibility→outcome, functional/balance→function as MA) returned 0 at threshold (likely thin/strictness — needs a loosened re-run); gap 3 (exercise injury/adverse-events) has candidates (jfsf-03-155 SR of PA/exercise adverse events). Resume with the exercise-deliverable reframe.
- [2026-08-08] openalex search "stretching range of motion injury" -> 4 hits: https://doi.org/10.1139/apnm-2015-0235; https://doi.org/10.1089/neu.2016.4951; https://doi.org/10.30918/aerj.81.20.023; https://doi.org/10.5281/zenodo.17919191
- [2026-08-08] openalex search "exercise interventions prevent sports injuries meta-analysis" -> 2 hits: https://doi.org/10.1136/bjsports-2013-092538; https://doi.org/10.7759/cureus.26123
- [2026-08-08] openalex search "multicomponent exercise physical function older adults" -> 4 hits: https://doi.org/10.1016/j.exger.2024.112604; https://doi.org/10.1016/j.apmr.2023.04.011; https://doi.org/10.3390/ijerph16122184; https://doi.org/10.1186/s12877-020-01829-9
- [2026-08-08] openalex search "balance exercise fall prevention meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex resolve "10.22540/jfsf-03-155 10.1136/bjsports-2013-092538" -> 2 hits: https://doi.org/10.22540/jfsf-03-155; https://doi.org/10.1136/bjsports-2013-092538
- [2026-08-08] openalex search "resistance training adverse events older adults safety" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.1136/bjsports-2013-092538" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.22540/jfsf-03-155" -> 0 hits: (none)
- [2026-08-08] openalex resolve "10.22540/jfsf-03-155" -> 1 hits: https://doi.org/10.22540/jfsf-03-155

## [2026-08-08 #7] SELECTION RECORD — exercise-deliverable gap round (RESUMED from the interrupted scan)
The reframe's 3 gaps (mobility/flexibility · functional/balance · exercise injury/adverse-events), gold-gated.
Resumed the interrupted scan (loosened the gap-1/2 strictness zeros). Fetched to `inbox/`; hand to process-inbox.
- **SELECTED + FETCHED: Lauersen 2013 BJSM** — «The effectiveness of exercise interventions to prevent sports
  injuries» MA (565c, gold, OA). DUAL-PURPOSE: answers gap-3 (strength training cuts injury \~1/3;
  proprioception/balance helps) AND gap-1 (STRETCHING does NOT prevent injury -> mobility/flexibility's
  patient-important verdict is null; stretching->ROM is a SURROGATE). DOI 10.1136/bjsports-2013-092538.
- **SELECTED + FETCHED: Kunutsor 2018 (J Frailty Sarcopenia Falls)** — «Adverse events and safety issues
  associated with physical activity and exercise for adults with osteoporosis and osteopenia» SR (26c, gold-ish,
  OA). The dim-6 downsides/safety keystone, but SCOPED to osteoporosis/osteopenia (a fragile stratum), NOT
  general. Low cite = adverse events are systematically UNDER-reported in exercise trials (a streetlight finding
  worth stating). DOI 10.22540/jfsf-03-155. 2nd Kunutsor work (vs weekend-warrior 2022) -> slug disambiguates.
- **DEFERRED gap-2 (balance/functional/multicomponent)** — ALREADY COVERED: held [[Exercise for Preventing Falls in Older Adults]]
  (Sherrington, balance+functional->falls) + incoming Racey (frailty/multicomponent PA). A fresh multicomponent
  MA (e.g. exger.2024.112604) would ECHO them -> no acquire (no-echo ratchet).
- **DEFERRED gap-1 residual (mobility beyond injury)** — Behm 2016 APNM (stretching acute effects/ROM, 749c) is
  mostly SURROGATE (ROM/performance); the patient-important verdict (no injury benefit) is carried by Lauersen.
  Optional-only; not acquired.
- **NAMED GAPS (not acquired — thin/out-of-scope):** overtraining / CNS-fatigue (mostly consensus/narrative, per
  telos «named gap not a page»); general exercise adverse-events beyond osteoporosis (under-reported); functional-
  fitness AS A DISTINCT CONSTRUCT (folds into falls/frailty/sarcopenia). Contraindication SCREENING = OUT OF SCOPE
  (prescriber act) — the deliverable appraises risks, does not screen a person.
**Acquisition:** 2 fetched (Lauersen, Kunutsor); gap-2 + gap-1-residual deferred as echo/surrogate; rest named-gap/out-of-scope.
- [2026-08-08] openalex search "weight cycling all-cause mortality meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex resolve "10.1042/CS20140553" -> 1 hits: https://doi.org/10.1042/cs20140553
- [2026-08-08] openalex search "metabolically healthy obesity cardiovascular events mortality meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex resolve "10.7326/0003-4819-159-11-201312030-00008" -> 1 hits: https://doi.org/10.7326/0003-4819-159-11-201312030-00008
- [2026-08-08] openalex search "metabolically healthy obese benign systematic review" -> 2 hits: https://doi.org/10.4103/ijpvm.ijpvm_392_20; https://doi.org/10.3410/f.718196353.793488213
- [2026-08-08] openalex fetch "10.1042/cs20140553" -> 0 hits: (none)
- [2026-08-08] openalex fetch "10.7326/0003-4819-159-11-201312030-00008" -> 0 hits: (none)

## [2026-08-08 #8] SELECTION RECORD — the 2 fat-threshold targeted acquires (Obesity reframe, aspect 2)
Per maintainer "do the two targeted acquisitions (fat threshold)." Both SELECTED; both PAYWALLED (openalex +
Europe-PMC checked: no PMCID, isOA=N, inEPMC=N) -> `[maintainer-drop]` (Steel cannot help a paywall; not downgraded).
- **Taylor & Holman 2015 — personal fat threshold** «Normal weight individuals who develop Type 2 diabetes: the
  personal fat threshold concept...» (Clin Sci, 10.1042/cs20140553, 190c). The concept-DEFINER for the
  individual-storage-capacity phenotype (ectopic vs subcutaneous). **mechanism/perspective tier -> needs a
  `source-tier-overrides.tsv` entry at ingest.** Reversibility mechanism (twin-cycle) already held via DiRECT;
  this adds the individual-variation piece.
- **Kramer 2013 — MHO benign? MA** «Are Metabolically Healthy Overweight and Obesity Benign Conditions? A SR+MA»
  (Ann Intern Med, 10.7326/0003-4819-159-11-201312030-00008, 961c, gold). The metabolically-healthy-obesity ->
  CV/mortality magnitude (MHO NOT benign over long follow-up) — the outcome leg of aspect 2.
- **NOT this batch:** weight-cycling MA (candidate #3) stays deferred.
**Acquisition:** 0 fetched (both genuinely paywalled); 2 maintainer-drop. DOIs above.
- [2026-08-08] openalex search "weight cycling mortality meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "body weight variability cardiovascular outcomes meta-analysis" -> 0 hits: (none)
- [2026-08-08] openalex search "nonalcoholic fatty liver disease type 2 diabetes mendelian randomization" -> 4 hits: https://doi.org/10.3389/fendo.2023.1156381; https://doi.org/10.3389/fpsyt.2023.1068756; https://doi.org/10.1016/j.diabres.2023.110993; https://doi.org/10.1097/md.0000000000038008
- [2026-08-08] openalex search "weight cycling weight fluctuation all-cause mortality risk" -> 0 hits: (none)
- [2026-08-08] openalex search "weight cycling cardiovascular disease diabetes systematic review" -> 0 hits: (none)
- [2026-08-08] openalex search "weight cycling" -> 6 hits: https://doi.org/10.1111/obr.12251; https://doi.org/10.1021/acs.est.5b03192; https://doi.org/10.1002/14651858.cd006982.pub4; https://doi.org/10.1007/s10815-015-0434-1; https://doi.org/10.1021/acsaem.0c01621
- [2026-08-08] openalex resolve "10.1111/jdi.13456" -> 1 hits: https://doi.org/10.1111/jdi.13456
- [2026-08-08] openalex fetch "10.1111/obr.12251" -> 0 hits: (none)

## [2026-08-08 #9] SELECTION RECORD — obesity acquires: fat-threshold pair STAGED (maintainer-dropped) + weight-cycling + MASLD-MR probe
- **Taylor & Holman 2015 personal-fat-threshold** (10.1042/CS20140553) — maintainer-DROPPED -> STAGED
  `raw/binary/papers/`, registered moderate/mechanism, tier-override added. (Dropped as a PT-titled file; verified = Taylor.)
- **Kramer 2013 MHO-benign? MA** (10.7326/0003-4819-159-11-201312030-00008) — maintainer-DROPPED -> STAGED,
  registered gold/meta-analysis. (Dropped under a Portuguese filename «Obesidade e Saude revisao»; verified = Kramer/Zinman/Retnakaran.)
- **Weight-cycling (3rd acquire):** no gold MA exists (openalex term polluted; loosened searches 0-for-relevant).
  Best = **Montani 2015** Obes Rev «Dieting and weight cycling ... who is really at risk?» (10.1111/obr.12251,
  252c) — NARRATIVE REVIEW (moderate), paywalled (EPMC no OA) -> `[maintainer-drop]` PENDING + override-needed.
  The confounding-prone nature of weight-cycling->hard-outcomes IS the finding. (Zou DOI guess 10.1111/jdi.13456
  resolved to an UNRELATED PTH/retinopathy paper -> discarded, not fabricated.)
- **MASLD->MetS causal grounding (for challenge #2):** probed NAFLD<->T2D MR — only thin single 2023 studies
  (fendo.2023.1156381 14c OA; diabres 2023 paywalled) -> NOT acquired (gold-gate; causal-direction left a [G] gap).
**Acquisition:** 2 staged (Taylor, Kramer); 1 maintainer-drop pending (Montani); MASLD-MR not acquired.

## [2026-08-08 #10] Montani 2015 (weight-cycling) — maintainer-DROPPED -> STAGED
Completes the 3rd obesity acquire. `Montani - Dieting Weight Cycling Cardiometabolic Risk 2015`
(10.1111/obr.12251, Obes Rev, 252c), registered moderate/narrative-review + tier-override added. All 3
targeted obesity acquires (Taylor, Kramer, Montani) now staged in `raw/binary/papers/`.
- [2026-08-08] openalex search "Are Metabolically Healthy Overweight and Obesity Benign Conditions Systematic Review Meta-analysis meta-analysis" -> 1 hits: https://doi.org/10.3410/f.718196353.793488213
- [2026-08-08] openalex search "Are Metabolically Healthy Overweight and Obesity Benign Conditions" -> 3 hits: https://doi.org/10.7326/0003-4819-159-11-201312030-00008; ?; https://doi.org/10.3410/f.718196353.793488213
- [2026-08-08] openalex resolve "10.1002/14651858.CD011279.pub2 10.1002/14651858.CD011279.pub3" -> 0 hits: (none)
- [2026-08-08] openalex resolve "10.1002/14651858.CD011279.pub3" -> 1 hits: https://doi.org/10.1002/14651858.cd011279.pub3
- [2026-08-08] openalex resolve "10.1002/14651858.CD011279.pub2" -> 1 hits: https://doi.org/10.1002/14651858.cd011279.pub2
- [2026-08-08] openalex fetch "10.1002/14651858.CD011279.pub3" -> 0 hits: (none)

## [2026-08-08] SELECTION RECORD — Geneen pub3 refresh (supersedes held pub2)
Targeted acquire of the newer version of the chronic-pain Cochrane overview [[Chronic Pain and Physical Activity]] (held copy = pub2; registry-noted pub3 supersedes). Maintainer-requested.
- **SELECTED** `10.1002/14651858.CD011279.pub3` — "Physical activity and exercise for chronic pain in adults: an overview of Cochrane Reviews" (2017, OA-flagged, 1184 cites vs pub2's 724). The amended/superseding version of the exact source already held; a version-refresh, not a new source (same Geneen registry row).
- **ACQUISITION: BLOCKED -> MAINTAINER-DROP.** All three fetch rungs failed: openalex OA-fetch (HTTPError), local Playwright (0 chars — bot-wall), Steel cloud browser (HTTP 429). Cochrane full CDSR reviews are subscription-walled; the "media PDF" URL needs an authenticated session. DOI recorded; NOT downgraded/substituted (acquisition rule: pause-and-ask). **Maintainer: drop the pub3 PDF into `inbox/` -> `process inbox` will stage it as a Geneen refresh (update the registry DOI pub2->pub3 + re-ingest/refresh the source page).**
- [2026-08-09] openalex resolve "10.1038/s41562-023-01617-6 10.1136/heartjnl-2015-308790 10.1001/jama.2018.20578 10.1001/jama.2022.4983 10.1136/bmj.l4673 10.1136/bmj.i6583 10.1056/NEJMoa2202106 10.1002/14651858.CD004714.pub4 10.1001/jama.2017.7967 10.1056/NEJMoa2404881 10.3945/jn.112.170233" -> 11 hits: https://doi.org/10.1038/s41562-023-01617-6; https://doi.org/10.1136/heartjnl-2015-308790; https://doi.org/10.1001/jama.2018.20578; https://doi.org/10.1001/jama.2022.4983; https://doi.org/10.1136/bmj.l4673
- [2026-08-09] openalex resolve "10.1016/j.envint.2020.105974 10.1056/NEJMoa1702747 10.1016/j.jacc.2025.06.037 10.1038/s41398-019-0515-5 10.1161/HYPERTENSIONAHA.116.07664 10.1186/s12916-016-0742-z 10.1016/j.ebiom.2022.104404" -> 7 hits: https://doi.org/10.1016/j.envint.2020.105974; https://doi.org/10.1056/nejmoa1702747; https://doi.org/10.1016/j.jacc.2025.06.037; https://doi.org/10.1038/s41398-019-0515-5; https://doi.org/10.1161/hypertensionaha.116.07664
- [2026-08-09] openalex fetch "10.1136/heartjnl-2015-308790" -> 0 hits: (none)
- [2026-08-09] openalex fetch "10.1136/bmj.l4673" -> 0 hits: (none)
- [2026-08-09] openalex fetch "10.1056/NEJMoa2404881" -> 0 hits: (none)

## [2026-08-09 #1] SELECTION RECORD — coverage-gap-scan Deep Research (top-down blind-spot pass) [RETRO hand-log]

**Ledger-gap heal.** The 2026-08-09 coverage-gap scan (`coverage-gap-scan-2026-08-09.md`) ran through 5
parallel evidence-researcher subagents doing WEB search to ground effect sizes + name the landmark gold
per candidate exposure. Web/subagent channel = **NO auto-log**, and it was not hand-logged at the time —
this block closes fields (1)-(4) retroactively. The candidate DOIs the researchers returned were later
verified via openalex (block #2); this block records what was searched and how it was adjudicated.

- **Field 1 — queries (web, via 5 subagents):** (a) social connection / isolation / loneliness ->
  mortality / CVD / inflammation; (b) aspirin primary prevention -> CV events vs major bleeding (net);
  (c) vitamin D -> non-CV outcomes (cancer / all-cause mortality / respiratory / fracture); (d) periodontal
  treatment -> HbA1c + the CVD-causality question, and OSA / CPAP -> CV / mortality; (e) the minors —
  dietary nitrate -> BP, air pollution PM2.5 -> mortality, omega-3 EPA-vs-DHA -> depression, magnesium ->
  BP/T2D, hydration/serum-sodium -> aging.
- **Field 2 — results (landmark gold named per gap):** social — Wang 2023 `10.1038/s41562-023-01617-6` +
  Valtorta 2016 `10.1136/heartjnl-2015-308790`; aspirin — Zheng/Roddick 2019 `10.1001/jama.2018.20578` +
  USPSTF 2022 `10.1001/jama.2022.4983`; vit-D — Zhang 2019 `10.1136/bmj.l4673` (+ the already-held
  Martineau `i6583` / LeBoff `NEJMoa2202106`); periodontal — Simpson Cochrane 2022
  `10.1002/14651858.CD004714.pub4`; OSA — Yu 2017 `10.1001/jama.2017.7967` + Malhotra SURMOUNT-OSA 2024
  `10.1056/NEJMoa2404881`; nitrate — Siervo 2013 `10.3945/jn.112.170233`; air pollution — Chen&Hoek 2020
  `10.1016/j.envint.2020.105974` + Di 2017 `10.1056/NEJMoa1702747` + JACC-HEPA 2025
  `10.1016/j.jacc.2025.06.037`; omega-3 — Liao 2019 `10.1038/s41398-019-0515-5`; magnesium — Zhang 2016
  `10.1161/HYPERTENSIONAHA.116.07664` + Fang 2016 `10.1186/s12916-016-0742-z`; hydration — Dmitrieva
  eBioMedicine 2023 `10.1016/j.ebiom.2022.104404`.
- **Field 3 — adjudication:**
  - **SELECTED -> staged (Tier-1/Tier-2, folded to registry+lighthouse `1235cd9`):** social connection
    (structural blind spot; ceiling MODERATE — modifiability insufficient-evidence, no RCT), aspirin
    de-adopt, vit-D non-CV (Zhang only — see echo note), periodontal->HbA1c, OSA/CPAP reframe, nitrate->BP.
    Each a clean decision-change; effect sizes source-grounded; gold-gated.
  - **DEFERRED (Tier-3, verified real gold, NOT staged — small individual lever or peripheral scope):**
    air pollution (large exposure, individual lever small — HEPA -3 mmHg only in elevated-BP), omega-3
    EPA/DHA depression (mental-health scope, type-B disambiguation), magnesium (SBP -2 mmHg; page mostly
    bounds intake-cohort over-reads), hydration/serum-sodium (weak-causal, attention-anti-signal). Staged
    only if breadth reaches them.
  - **REJECTED / dead-end (symmetric-reporting negatives):** nutrigenetics/gene-diet (no gold SR-MA,
    insufficient-evidence — re-confirmed); sauna/cold (already `cut/`, no gold hard-outcome); "CPAP prevents
    CV events" (disconfirmed — the reframe IS the value); vit-D/omega-3/magnesium as ENHANCEMENT in the
    replete (null — reinforces the supplements discipline, not a new lever).
- **Field 4 — acquisition:** deferred to block #2 (verification-then-fetch). Tier-1/Tier-2 folded to
  8 placeholder registry rows + 6 lighthouse rows; nothing ingested.

## [2026-08-09 #2] SELECTION RECORD — coverage-gap gold-source verification + acquisition (openalex)

Purpose: verify the block-#1 web-returned DOIs are real gold (not subagent-fabricated) and establish
OA-fetchability. Fields (1)+(2) auto-logged above (2 resolve + 3 fetch lines). All 18 DOIs resolved to
real papers with matching titles — **zero fabrications** in the web-subagent output.

- **Field 3 — adjudication (post-verification):**
  - **Confirmed gold, SELECTED for acquire:** Wang 2023 (MA, 90 cohorts), Valtorta 2016 (MA), Zheng 2019
    (13-trial MA), Zhang vit-D 2019 (52-trial MA), Simpson Cochrane 2022, Siervo 2013 (16-RCT MA), Yu 2017
    (CPAP-CV MA); + the recommendation/RCT tier: USPSTF 2022, Malhotra SURMOUNT-OSA 2024.
  - **RECLASSIFIED to echo — DROPPED from acquire (already held):** Martineau `i6583` (held gold — the
    respiratory-IPD co-anchor) and LeBoff `NEJMoa2202106` (held high — VITAL fractures). The vit-D non-CV
    gap's only *new* acquire is **Zhang 2019**; Martineau + LeBoff are the held rows it joins, so re-fetching
    them would be a ratchet echo. (This corrects the memo's acquire list, which named all three.)
  - **Tier-3 DEFERRED set verified** (Chen&Hoek, Di, JACC-HEPA, Liao, Zhang-Mg, Fang, Dmitrieva) — all real
    gold/article; held in reserve per block #1, not acquired now.
- **Field 4 — acquisition status (ALL new anchors -> MAINTAINER-DROP; NONE auto-fetched):**
  - `10.1136/heartjnl-2015-308790` Valtorta — oa=True (BMJ Heart) but openalex-fetch HTTPError + headless
    "Download is starting" fail. **maintainer-drop.**
  - `10.1136/bmj.l4673` Zhang vit-D — oa=True (BMJ) but fetch HTTPError. **maintainer-drop.**
  - `10.1056/NEJMoa2404881` Malhotra — oa=True (escholarship mirror) but fetch HTTPError. **maintainer-drop.**
  - `10.1038/s41562-023-01617-6` Wang — **oa=False** (Nature Human Behaviour, paywalled). **maintainer-drop.**
  - `10.1001/jama.2018.20578` Zheng · `10.1001/jama.2022.4983` USPSTF · `10.1001/jama.2017.7967` Yu —
    oa=True but JAMA anti-bot-403 (measured). **maintainer-drop.**
  - `10.1002/14651858.CD004714.pub4` Simpson — Cochrane CDSR subscription-wall (measured last session).
    **maintainer-drop.**
  - `10.3945/jn.112.170233` Siervo — oa=True but ScienceDirect anti-bot-403. **maintainer-drop.**
  - **NOT downgraded/substituted on any fail** (acquisition-pause-and-ask). All are identified (DOI + OA
    status recorded), not lost. **Maintainer: drop the 9 PDFs into `inbox/`; `process inbox` stages them
    against the placeholder registry rows.** Priority order (per memo): Wang+Valtorta (social) -> Zheng
    (aspirin) -> Zhang (vit-D) -> Simpson (periodontal) -> Yu+Malhotra (OSA) -> Siervo (nitrate).
- [2026-08-09] openalex search "fluoride children intelligence meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "fluoride neurodevelopment cognitive systematic review" -> 1 hits: https://doi.org/10.1016/j.envres.2023.115239
- [2026-08-09] openalex search "fluoride intelligence children" -> 8 hits: https://doi.org/10.1590/s0102-311x2007001600018; ?; https://doi.org/10.1016/j.envint.2019.105229; https://doi.org/10.4103/0976-3147.98213; https://doi.org/10.4103/0970-4388.165682
- [2026-08-09] openalex search "fluoride IQ meta-analysis" -> 3 hits: https://doi.org/10.31219/osf.io/zhm54_v3; https://doi.org/10.1101/2024.03.08.24303503; https://doi.org/10.31219/osf.io/zhm54_v1
- [2026-08-09] openalex search "trihalomethanes bladder cancer" -> 6 hits: https://doi.org/10.1289/ehp4495; https://doi.org/10.3200/aeoh.62.1.39-47; https://doi.org/10.1080/15287390701459031; https://doi.org/10.4161/15592294.2014.983377; https://doi.org/10.1016/j.jhazmat.2024.133760
- [2026-08-09] openalex search "chlorination byproducts bladder cancer" -> 2 hits: https://doi.org/10.1097/00001648-199801000-00007; https://doi.org/10.1016/j.watres.2019.07.014
- [2026-08-09] openalex search "water fluoridation dental caries" -> 6 hits: https://doi.org/10.1002/14651858.cd010856.pub2; https://doi.org/10.1177/00220345900690s141; https://doi.org/10.1001/jama.283.10.1283; https://doi.org/10.2307/4587515; https://doi.org/10.2105/ajph.2012.300889
- [2026-08-09] openalex search "fluoride bone fracture meta-analysis" -> 2 hits: https://doi.org/10.1007/s00198-007-0437-6; https://doi.org/10.1186/s12940-025-01226-y
- [2026-08-09] openalex resolve "10.1001/jamapediatrics.2024.5542 10.22427/NTP-MGRAPH-8 10.1136/oem.2010.062703 10.1016/j.envres.2023.115239 10.1002/14651858.cd010856.pub2 10.1186/s12940-025-01226-y 10.1289/ehp4495" -> 7 hits: https://doi.org/10.1001/jamapediatrics.2024.5542; https://doi.org/10.22427/ntp-mgraph-8; https://doi.org/10.1136/oem.2010.062703; https://doi.org/10.1016/j.envres.2023.115239; https://doi.org/10.1002/14651858.cd010856.pub2
- [2026-08-09] openalex search "water fluoridation prevention dental caries" -> 5 hits: https://doi.org/10.1038/s41415-026-9613-y; ?; ?; https://doi.org/10.1177/23800844251342804; https://doi.org/10.1038/s41415-025-8412-1
- [2026-08-09] openalex resolve "10.1002/14651858.CD010856.pub3 10.1177/23800844251342804" -> 2 hits: https://doi.org/10.1002/14651858.cd010856.pub3; https://doi.org/10.1177/23800844251342804
- [2026-08-09] openalex fetch "10.1289/ehp4495" -> 0 hits: (none)
- [2026-08-09] openalex fetch "10.1186/s12940-025-01226-y" -> 0 hits: (none)
- [2026-08-09] openalex fetch "10.1002/14651858.CD010856.pub3" -> 0 hits: (none)
- [2026-08-09] openalex fetch "10.22427/NTP-MGRAPH-8" -> 0 hits: (none)

## [2026-08-09 #3] SELECTION RECORD — drinking-water chlorine + fluoride -> health/longevity (maintainer request)

Fresh research episode: is drinking-water chlorination (disinfection byproducts) and/or fluoride a
material modifiable exposure? Genuine gap — the fabric holds fluoride only in the caries/sugars context
(Moynihan), no water-quality exposure page, no registry rows for either. Two distinct exposures, each
with its own outcome ledger. Channel: openalex (fields 1+2 auto-logged above) + web discovery for the
headline landmarks openalex `title.search` strictness missed.

- **Field 1 — queries:** openalex — "fluoride children intelligence" / "fluoride neurodevelopment
  cognitive" (--type filters, 0-1 hits from strictness), "fluoride intelligence children" /
  "fluoride IQ meta-analysis" (broad), "trihalomethanes bladder cancer", "chlorination byproducts
  bladder cancer", "water fluoridation dental caries", "fluoride bone fracture" (--type MA); web —
  Taylor 2025 JAMA-Peds DOI, NTP 2024 monograph citation, Villanueva/Costet THM-bladder pooled DOI;
  openalex resolve x2 (9 landmark DOIs).
- **Field 2 — 0-hit attribution:** "fluoride children intelligence" + `--type meta-analysis` -> 0 =
  `title.search` STRICTNESS (needs "meta-analysis" + every word in the title), NOT literature absence —
  the broad query returned 8 hits and the landmark MAs exist. Lesson re-confirmed: `--type` over-narrows;
  drop it and use core nouns, then resolve the named landmark by DOI.
- **Field 3 — adjudication (per candidate):**
  - **SELECTED — FLUORIDE:**
    - `10.1002/14651858.CD010856.pub3` Iheozor-Ejiofor, Cochrane **2024** water-fluoridation->caries
      (gold SR; the caries BENEFIT arm). **Newer-supersedes** the 2015 pub2 (`cd010856.pub2`, 474c) —
      pub3 is the current incumbent (finds a smaller modern-era benefit given ubiquitous fluoride
      toothpaste). FETCHED.
    - `10.1001/jamapediatrics.2024.5542` Taylor 2025 JAMA-Peds fluoride->child-IQ MA (74 studies;
      inverse assoc, beta \~ -1.63 IQ / +1 mg/L urinary F; **the decision-critical caveat: uncertain /
      limited below 1.5 mg/L**, i.e. at the 0.7 mg/L US fluoridation target). The peer-reviewed MA arm.
    - `10.22427/ntp-mgraph-8` NTP Monograph 08 2024 (gold government OHAT SR; "moderate confidence"
      higher F [>1.5 mg/L] -> lower child IQ). The authoritative report. **INDEPENDENCE FLAG (anti
      laundered-E): NTP and Taylor are the SAME NIEHS/NTP evidence stream** (Taylor is NTP) — count as
      ONE backing, not two, on the IQ question.
    - `10.1016/j.envres.2023.115239` Veneri 2023 fluoride->cognition dose-response SR-MA (gold; the
      GENUINELY INDEPENDENT second IQ stream — Modena/Vinceti group, not NTP). This is what makes the
      IQ finding type-E-eligible: (NTP/Taylor) vs (Veneri/Modena) = two independent streams.
    - `10.1186/s12940-025-01226-y` Mazzoli 2025 fluoride->bone-density/fracture dose-response MA (gold;
      the skeletal-harm arm). FETCHED. **Lineage note:** same Modena group as Veneri (Vinceti/Filippini/
      Veneri co-authors) — different outcome, so not a laundering risk, but the group produces multiple
      fluoride-harm papers; hold the halo-across-a-lab caution.
  - **SELECTED — CHLORINE / DISINFECTION BYPRODUCTS:**
    - `10.1136/oem.2010.062703` Costet 2011 THM->bladder-cancer pooled analysis (gold MA; 6 case-control
      studies, the exposure-response function — the effect estimate).
    - `10.1289/ehp4495` Evlampidou 2020 EHP THM->bladder-cancer EU attributable burden (the modern
      landmark; pairs Costet — Costet = effect, Evlampidou = burden/recency).
  - **REJECTED / not-taken:** the pile of single cross-sectional fluoride-IQ studies (Ding 2011, Sudhir,
    Saxena, etc. — moderate/weak, superseded by the MAs); the two 2025/2026 **critique preprints** of
    Taylor (`osf.io/zhm54`, `10.1038/s41415-026-9613-y`) — DEFERRED, acquire ONLY if a tension needs the
    counter-pole (symmetric-standards: a critique is a candidate for the friction ledger, not a gold in
    its own right yet); JDR 2025 global fluoridation SR `10.1177/23800844251342804` (oa=False, 2c) —
    DEFERRED as a caries echo of Cochrane pub3 (newer but not clearly superseding; take only if pub3 has
    a gap). Bare 1998 Cantor/Villanueva bladder study — superseded by Costet's pooled function.
- **Field 4 — acquisition status:**
  - **FETCHED to `inbox/` (2):** Mazzoli 2025 fracture MA (BMC, 2.8 MB) · Iheozor-Ejiofor Cochrane 2024
    (Lancashire OA eprint, 3.7 MB). Both validated (real multi-page PDFs). -> `process inbox` to stage.
  - **MAINTAINER-DROP (5, NOT downgraded — pause-and-ask):**
    - `10.1001/jamapediatrics.2024.5542` Taylor 2025 — oa=True but JAMA anti-bot-403.
    - `10.22427/ntp-mgraph-8` NTP Monograph — free gov doc but no openalex OA-PDF link; source =
      ntp.niehs.nih.gov / NCBI Bookshelf NBK606073 (multi-part, large).
    - `10.1016/j.envres.2023.115239` Veneri 2023 — oa=True but ScienceDirect 403.
    - `10.1136/oem.2010.062703` Costet 2011 — oa=False (OEM/BMJ).
    - `10.1289/ehp4495` Evlampidou 2020 — oa=True (EHP gov) but URLError on fetch.
    - **Priority (per the two exposures):** chlorine arm is a 1-decision gap (Costet+Evlampidou);
      fluoride IQ is the contested/high-value arm (Taylor + NTP + Veneri) — drop those first.
- **Scope note (not acquired, flagged for the eventual page):** the DECISION here is small at the
  individual level — THM->bladder is a chlorinated-vs-not / filter question (relative risk modest,
  absolute tiny), and the fluoride-IQ signal is **at >1.5 mg/L**, ABOVE the 0.7 mg/L fluoridation
  target, so the typical-exposure decision-change is uncertain. Attention-is-an-anti-signal applies hard
  (both are high-discourse, contested-therefore-generative topics). The pages will likely land as
  honest-uncertainty / bounds-the-scare entries, not new big-rock levers. Nothing ingested.
- [2026-08-09] openalex search "how does exercise treatment compare antihypertensive medications systolic blood pressure" -> 2 hits: https://doi.org/10.1136/bjsports-2018-099921; ?
- [2026-08-09] openalex search "alcohol reduction blood pressure systematic review meta-analysis" -> 1 hits: https://doi.org/10.1016/s2468-2667(17)30003-8
- [2026-08-09] openalex fetch "10.1136/bjsports-2018-099921" -> 0 hits: (none)
- [2026-08-09] openalex fetch "10.1016/s2468-2667(17)30003-8" -> 0 hits: (none)

## [2026-08-09 #4] SELECTION RECORD — Blood Pressure spec acquire-gaps (Naci + Roerecke)

Resolving the two named acquire-gaps in the Blood Pressure deliverable spec (fields 1+2 auto-logged
above: 2 search + 2 fetch lines).

- **Field 3 — adjudication:**
  - **SELECTED — Naci 2019** `10.1136/bjsports-2018-099921` (BJSM network MA, exercise vs
    antihypertensive drugs on SBP; 328 cites). The crown-jewel acquire for the lifestyle-vs-drug
    counterfactual comparison in the BP spec. Gold.
  - **SELECTED — Roerecke 2017** `10.1016/s2468-2667(17)30003-8` (Lancet Public Health MA, alcohol
    reduction -> BP dose-response; 556 cites). The BP-specific alcohol magnitude the held alcohol page
    may lack. Gold; take only if the ranking needs the number.
- **Field 4 — acquisition:**
  - **FETCHED to `inbox/` (1):** Naci 2019 (LSE eprints OA mirror, 620 KB, validated). -> `process inbox`.
  - **MAINTAINER-DROP (1):** Roerecke 2017 — oa=False (Elsevier/Lancet Public Health paywall). NOT
    downgraded (pause-and-ask). Identified, not lost.
- [2026-08-09] openalex search "environmental risk factors Parkinson umbrella review meta-analyses" -> 0 hits: (none)
- [2026-08-09] openalex search "physical activity Parkinson disease risk meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "modifiable lifestyle risk factors Parkinson disease systematic review" -> 0 hits: (none)
- [2026-08-09] openalex search "Parkinson umbrella review" -> 3 hits: https://doi.org/10.3390/brainsci11060685; https://doi.org/10.1155/2020/9748091; https://doi.org/10.17605/osf.io/rc39j
- [2026-08-09] openalex search "physical activity Parkinson meta-analysis" -> 3 hits: https://doi.org/10.1093/ptj/pzae114; https://doi.org/10.1097/md.0000000000040141; ?
- [2026-08-09] openalex search "Parkinson risk factors meta-analysis" -> 2 hits: https://doi.org/10.3390/life14010032; https://doi.org/10.1007/s11010-025-05392-y
- [2026-08-09] openalex search "coffee caffeine Parkinson meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "Non-Genetic Risk Factors Parkinson Overview Systematic Reviews" -> 0 hits: (none)
- [2026-08-09] openalex search "physical activity risk Parkinson disease systematic review" -> 0 hits: (none)
- [2026-08-09] openalex search "levels physical activity risk Parkinson" -> 1 hits: https://doi.org/10.1001/jamanetworkopen.2018.2421
- [2026-08-09] openalex search "caffeine risk progression Parkinson meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "Parkinson overview 46 systematic reviews" -> 0 hits: (none)
- [2026-08-09] openalex search "non-genetic risk factors Parkinson" -> 0 hits: (none)
- [2026-08-09] openalex search "effect caffeine risk progression Parkinson" -> 0 hits: (none)
- [2026-08-09] openalex resolve "10.3233/JPD-202521 10.1001/jamanetworkopen.2018.2421" -> 2 hits: https://doi.org/10.3233/jpd-202521; https://doi.org/10.1001/jamanetworkopen.2018.2421
- [2026-08-09] openalex search "hallmarks of aging" -> 2 hits: https://doi.org/10.1016/j.cell.2013.05.039; https://doi.org/10.1016/j.cell.2022.11.001
- [2026-08-09] openalex search "geroscience linking aging chronic disease" -> 2 hits: https://doi.org/10.1016/j.cell.2014.10.039; https://doi.org/10.3410/f.725274403.793502267
- [2026-08-09] openalex search "multimorbidity shared risk factors ageing systematic review" -> 0 hits: (none)
- [2026-08-09] openalex fetch "10.3233/JPD-202521" -> 0 hits: (none)
- [2026-08-09] openalex fetch "10.1001/jamanetworkopen.2018.2421" -> 0 hits: (none)
- [2026-08-09] openalex fetch "10.1016/j.cell.2014.10.039" -> 0 hits: (none)

## [2026-08-09 #5] SELECTION RECORD — Age-Related Diseases acquire-gaps (Parkinson's + geroscience/common-soil)

Filling the two `## Gaps to ACQUIRE` items in the Age-Related Diseases spec: (1) a Parkinson's
modifiable-risk-factor MA, (2) a geroscience/common-soil source for the mechanistic backbone.
openalex auto-logged its queries above (fields 1+2); the **web/PMC channel has no auto-log** — hand-logged here.

- **Field 1 — hand-logged non-openalex queries:**
  - WebSearch: "Parkinson's disease modifiable risk factors umbrella review meta-analysis physical
    activity caffeine landmark" -> surfaced the Chen 2021 umbrella (46 SRs), a 2025 critical review, a
    caffeine MA (PMC7353179), the Fang PA MA.
  - WebFetch PMC8461677 -> extracted Chen 2021 DOI/title/journal (openalex title.search kept returning 0
    from strictness — same `--type` over-narrowing lesson).
- **Field 2 — 0-hit attribution:** the strict-title openalex queries ("environmental risk factors
  Parkinson umbrella review meta-analyses", "modifiable lifestyle risk factors Parkinson", "hallmarks of
  aging" narrow, "multimorbidity shared risk factors ageing" +SR) returned 0 from **`title.search`
  strictness, NOT literature absence** — the landmarks exist and were reached via broad nouns / web +
  DOI-resolve. Re-confirmed: drop `--type`, use core nouns, resolve the named landmark by DOI.
- **Field 3 — adjudication:**
  - **GAP 1 — Parkinson's. SELECTED (2):**
    - **Chen 2021** `10.3233/JPD-202521` — *Non-Genetic Risk Factors for PD: An Overview of 46 Systematic
      Reviews* (J Parkinson's Dis; 55 cites; gold umbrella, 46 SRs / 80+ factors / 6 categories). The
      ranked modifiable-risk LANDSCAPE — exactly the thin-field survey the spec's honest "PA is the one
      credible lever" verdict needs. PRIMARY.
    - **Fang 2018** `10.1001/jamanetworkopen.2018.2421` — *Association of Levels of Physical Activity With
      Risk of PD* (JAMA Netw Open; 169 cites; gold MA). The PA->PD magnitude (highest total/MVPA
      RR \~0.79/0.71) — the one credible modifiable lever's effect size. PA is already a Big Rock, so this
      is the cross-link magnitude, not a new lever.
  - **GAP 1 — DEFERRED:** caffeine->PD MA (PMC7353179, 2020) — an ECHO of the Chen umbrella's caffeine
    row; acquire only if the umbrella+Fang don't carry the caffeine number. The 2025 critical review
    (PMC11922612) — narrative/moderate, superseded by the umbrella for the ranking.
  - **GAP 2 — Geroscience/common-soil. SELECTED (1, mechanism-tier exception):**
    - **Kennedy 2014** `10.1016/j.cell.2014.10.039` — *Geroscience: Linking Aging to Chronic Disease*
      (Cell; 2760 cites). This IS the common-soil thesis (aging biology as the shared root of the
      age-related diseases) — more ON-THESIS for a modifiable-levers deliverable than the molecular
      hallmarks enumeration. **TIER: mechanism/narrative-review -> gold-gate exception**, needs a
      `source-tier-overrides.tsv` entry at ingest: it informs the mechanistic BACKBONE directionally, NOT
      effect magnitudes (those stay with the held GBD/Afshin epidemiology). PRIMARY backbone pick.
  - **GAP 2 — NOTED (already staged, not re-acquired):** Lopez-Otin *Hallmarks of Aging* 2013
    `10.1016/j.cell.2013.05.039` (15134 cites, oa=True) + 2023 update *An Expanding Universe*
    `10.1016/j.cell.2022.11.001` (6084 cites, oa=False) — the molecular ENUMERATION (staged per spec).
    Prefer Kennedy as the common-soil spine; ingest a Hallmarks version only if the enumeration is wanted
    (take the 2023 update as current — but it's paywalled). Fried Frailty Phenotype / Barzilai TAME /
    CALERIE also staged per spec — not re-searched here.
  - **GAP 2 — 0 gold epidemiological common-soil MA found** ("multimorbidity shared risk factors" +SR = 0).
    Not a literature-absence claim on one query, but the epidemiological common-soil leg is already HELD
    (GBD/Afshin), so the residual gap is the MECHANISTIC backbone only — Kennedy fills it. No further search owed.
- **Field 4 — acquisition status (ALL maintainer-drop; NONE fetched — pause-and-ask):**
  - `10.3233/JPD-202521` Chen — oa=True (IOSPress) but plain-fetch HTTPError AND headless 403. **maintainer-drop.**
  - `10.1001/jamanetworkopen.2018.2421` Fang — oa=True but JAMA anti-bot-403 (measured). **maintainer-drop.**
  - `10.1016/j.cell.2014.10.039` Kennedy — oa=True but Cell/Elsevier anti-bot-403 (measured). **maintainer-drop.**
  - `10.1016/j.cell.2022.11.001` Lopez-Otin 2023 update — oa=False (Cell paywall). **maintainer-drop** (only if the enumeration is wanted).
  - **NOT downgraded/substituted** — all identified (DOI + OA status recorded), not lost.
  - **Priority:** Chen + Fang (Parkinson's leg, self-contained) -> Kennedy (geroscience backbone, needs tier-override).
- [2026-08-09] openalex search "triglyceride HDL ratio cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "triglyceride glucose index cardiovascular meta-analysis" -> 8 hits: https://doi.org/10.1186/s12933-021-01268-9; https://doi.org/10.1186/s12933-022-01546-0; https://doi.org/10.3389/fcvm.2021.774781; https://doi.org/10.1016/j.numecd.2021.08.026; https://doi.org/10.1186/s12933-025-02584-0
- [2026-08-09] openalex search "insulin resistance cardiovascular disease meta-analysis" -> 7 hits: https://doi.org/10.1002/dmrr.1201; https://doi.org/10.2337/dc24-0475; https://doi.org/10.3389/fendo.2025.1699985; https://doi.org/10.1093/eurheartj/ehae666.2920; https://doi.org/10.2337/figshare.26083753
- [2026-08-09] openalex search "triglyceride HDL ratio meta-analysis" -> 3 hits: https://doi.org/10.1093/labmed/lmae052; https://doi.org/10.1002/edm2.70161; https://doi.org/10.1186/s12884-026-09647-4
- [2026-08-09] openalex search "triglyceride HDL cholesterol coronary meta-analysis" -> 2 hits: https://doi.org/10.3945/jn.111.148973; https://doi.org/10.1016/j.yane.2012.02.028
- [2026-08-09] openalex search "atherogenic index plasma cardiovascular meta-analysis" -> 3 hits: https://doi.org/10.1186/s12933-024-02198-y; https://doi.org/10.1016/j.jscai.2025.102782; https://doi.org/10.2174/0109298673412215251211122028
- [2026-08-09] openalex resolve "10.1186/s12933-021-01268-9 10.2337/dc24-0475" -> 2 hits: https://doi.org/10.1186/s12933-021-01268-9; https://doi.org/10.2337/dc24-0475
- [2026-08-09] openalex resolve "10.1186/s12933-024-02198-y 10.1002/edm2.70161 10.1186/s12933-022-01546-0" -> 3 hits: https://doi.org/10.1186/s12933-024-02198-y; https://doi.org/10.1002/edm2.70161; https://doi.org/10.1186/s12933-022-01546-0
- [2026-08-09] openalex search "HOMA insulin resistance coronary meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "homeostatic model insulin resistance cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "triglyceride HDL ratio mortality meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "triglyceride HDL ratio incident cardiovascular" -> 2 hits: https://doi.org/10.2215/cjn.08730816; https://doi.org/10.1016/j.cca.2023.117737
- [2026-08-09] openalex fetch "10.1186/s12933-022-01546-0" -> 0 hits: (none)
- [2026-08-09] openalex fetch "10.1186/s12933-021-01268-9" -> 0 hits: (none)

## [2026-08-09 #6] SELECTION RECORD — TG/HDL ratio + insulin resistance -> CVD (follows the Bikman challenge [2026-08-09])
**Scope.** Two decision-questions the Bikman challenge surfaced as PREDICTION-magnitude gaps (the fabric holds
the apoB *causal resolution* — Marston: TG/LDL-C flat once apoB held — but no dedicated source on TG/HDL or
IR-index *prediction* of CVD): (Q1) is the TG/HDL ratio predictive of CVD? (Q2) is insulin resistance
predictive of CVD? Dedup: registry holds NO TG/HDL / TyG / HOMA-IR / IR-index -> CVD row (confirmed gap).

**The consolidating insight.** The TyG index (triglycerides + glucose) is BOTH a triglyceride-based ratio AND
the dominant validated insulin-resistance surrogate — so the TyG MAs answer Q1 and Q2 together with the
strongest gold evidence. HOMA-IR (classic direct IR) and raw TG/HDL have been largely SUPERSEDED by TyG in the
recent CVD-prediction MA literature.

**SELECTED — fetched to inbox/ (2 gold OA MAs, Cardiovascular Diabetology):**
- `10.1186/s12933-022-01546-0` Liu 2022 (431 cites) — "TyG index and risk of CVD and mortality **in the general
  population**": SR+MA. **LEAD** for weighting — best fit (general population, CVD incidence + mortality).
  -> inbox/`Liu - Triglyceride-Glucose Index Cardiovascular Mortality Meta-Analysis 2022.pdf`.
- `10.1186/s12933-021-01268-9` Ding 2021 (514 cites) — "TyG index and incidence of **ASCVD**": MA of cohorts.
  **LANDMARK** (most-cited, kept for provenance; likely shares cohorts with Liu -> ingest decides subsumption).
  -> inbox/`Ding - Triglyceride-Glucose Index ASCVD Incidence Meta-Analysis 2021.pdf`.
  Both answer Q1+Q2; observational-cohort evidence pooled = the right evidence-type for a *prediction* question,
  and it dovetails with the held apoB *causation* nucleus (prediction vs causation, the challenge's split).

**DEFERRED (identified, NOT fetched — different question / thinner):**
- `10.1186/s12933-024-02198-y` AIP-in-CAD 2024 (116 cites, OA) — atherogenic index of plasma = log(TG/HDL), but
  population = **established coronary artery disease** => *prognosis in CAD*, not *incidence prediction*. The
  source to fetch IF a secondary-prevention prognosis angle is later wanted; wrong question for Q1 now.
- `10.3389/fendo.2025.1699985` METS-IR 2025 (5 cites, OA) — a different IR score; newer/thinner, TyG MAs dominate.

**REJECTED (fit-to-question over pedigree — the pedigree hid the mismatch):**
- `10.2337/dc24-0475` IR->CVD Diabetes Care 2024 (86 cites, top journal) — population = **Type 1 Diabetes**;
  Bikman's claim is general/metabolic-syndrome IR, not T1D. Wrong population.
- `10.1002/edm2.70161` TG/HDL SR 2026 (OA) — outcome = **Chronic Kidney Disease**, not CVD. Off-outcome.
- `10.2215/cjn.08730816` TG/HDL 2017 (67 cites, OA) — **single cohort** (not MA), CJASN/nephrology population.
- `10.1093/labmed/lmae052` TG/HDL 2024 — outcome = **diabetes** risk, not CVD. `10.1002/dmrr.1201` visfatin 2011 —
  off-question biomarker. `10.3945/jn.111.148973` — DHA/algal-oil *intervention* on TG (off-question).

**ZERO-HIT attributions (all title-strictness artifacts, not literature absence):**
- "triglyceride HDL ratio cardiovascular meta-analysis" (0), "...mortality" (0) — every word forced into title;
  the ratio literature indexes under "TyG", "atherogenic index of plasma", or names TG/HDL mid-title. Looser
  "triglyceride HDL ratio" returned 3.
- "HOMA insulin resistance coronary meta-analysis" (0) + "homeostatic model insulin resistance cardiovascular
  meta-analysis" (0) — strictness; ALSO a real signal that HOMA-IR->CVD gold MAs are sparse vs the TyG surge.

**FINDING (a gap, honestly recorded): no dedicated general-population gold MA of the RAW TG/HDL ratio ->
incident CVD** was located — the field consolidated onto TyG (prediction) + AIP (CAD prognosis). Q1 is
therefore best served via TyG, with the caveat that raw-TG/HDL-specific pooled evidence is thin.

**Acquisition status:** 2 fetched to inbox/ (OA, clean). 0 blocked / 0 maintainer-drop. Hand off to
*process inbox* (dedup vs done/cut/queue, chunk/OCR check, register rows + tier, stage). Nothing ingested.
- [2026-08-09] openalex search "beta cell function type 2 diabetes incidence meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "beta cell function cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "insulin sensitivity cardiovascular disease meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "HOMA beta cell insulin secretion meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "beta-cell function type 2 diabetes" -> 6 hits: https://doi.org/10.1007/s00125-011-2204-7; https://doi.org/10.1210/clinem/dgaa863; https://doi.org/10.1007/s00125-011-2109-5; https://doi.org/10.1093/hmg/ddp178; https://doi.org/10.1007/s00125-013-2993-y
- [2026-08-09] openalex search "insulin secretion diabetes risk" -> 6 hits: https://doi.org/10.1038/ng.288; https://doi.org/10.2337/dc07-0358; https://doi.org/10.1007/s00125-015-3528-5; https://doi.org/10.2337/dc10-0679; https://doi.org/10.1053/meta.2002.32804
- [2026-08-09] openalex search "insulin sensitivity mortality" -> 6 hits: https://doi.org/10.1016/j.jacc.2005.02.093; https://doi.org/10.2215/cjn.05230513; https://doi.org/10.1530/eje-18-0422; https://doi.org/10.1007/s00125-009-1588-0; https://doi.org/10.1186/s12933-021-01284-9
- [2026-08-09] openalex search "HOMA beta cell function" -> 6 hits: https://doi.org/10.1159/000085276; https://doi.org/10.4103/2230-8210.83059; https://doi.org/10.1046/j.1464-5491.2001.00534.x; https://doi.org/10.1016/j.diabet.2010.02.001; https://doi.org/10.2478/jomb-2014-0033
- [2026-08-09] openalex search "insulin sensitivity mortality systematic review" -> 0 hits: (none)
- [2026-08-09] openalex search "fasting insulin cardiovascular disease meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "hyperinsulinemia cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "fasting insulin cardiovascular disease" -> 6 hits: https://doi.org/10.1253/circj.68.47; https://doi.org/10.1007/s00296-008-0781-7; https://doi.org/10.1111/j.1532-5415.1997.tb05163.x; https://doi.org/10.1080/02813430903155028; https://doi.org/10.1177/1479164119827604
- [2026-08-09] openalex search "hyperinsulinemia coronary heart disease" -> 5 hits: https://doi.org/10.1161/01.cir.87.1.152; https://doi.org/10.1161/01.cir.98.5.398; https://doi.org/10.1016/0002-8703(91)90434-j; https://doi.org/10.1016/s0026-0495(99)90195-6; https://doi.org/10.1016/0026-0495(92)90088-r
- [2026-08-09] openalex search "beta cell function decline progression" -> 2 hits: https://doi.org/10.1111/j.1464-5491.1993.tb00072.x; https://doi.org/10.21203/rs.3.rs-2904784/v1

## [2026-08-09 #7] SELECTION RECORD — HOMA-%S (insulin sensitivity) + HOMA-%B (beta-cell function) -> CVD (continues #6 / the Bikman thread)
**Scope.** HOMA2 outputs beyond HOMA-IR: %S = insulin sensitivity (\~ 1/HOMA-IR), %B = beta-cell function
(insulin secretion). Question: are %S / %B predictive of CVD / mortality? Includes the Bikman-relevant
**hyperinsulinemia** framing (high fasting insulin = the compensatory-high-%B state he argues is causal), and
%B's natural outcome (T2D incidence/progression). Dedup: registry holds NO HOMA / fasting-insulin /
beta-cell row (confirmed #6 + this pass).

**OUTCOME — a GAP, nothing acquired (gold-gate not clearable; pause-and-ask, NOT downgrade).** Searched
%S->mortality/CVD, %B/insulin-secretion->CVD + T2D-incidence, fasting-insulin->CVD, hyperinsulinemia->CHD,
beta-cell-decline->progression, across `--type meta-analysis`, `--type systematic-review`, and broad. **No
gold-tier pooled MA/SR/umbrella of HOMA-%S, HOMA-%B, fasting insulin, or hyperinsulinemia on hard CV outcomes
was located.** The literature is a scatter of **single cohorts**, several 1990s-2000s, and openly **contested**.

**Why no acquire (symmetric standards, applied):** the prior turn (#6) found *gold pooled* evidence for the
TyG IR-surrogate (Liu 2022 / Ding 2021, now in inbox), and apoB causation is held gold. Acquiring a lone
1990s cohort for %B/hyperinsulinemia would hold that Bikman-load-bearing exposure to a WEAKER bar than the
lipoprotein evidence it is pitched against — the exact asymmetric-scrutiny trap. The paucity is itself the
decision-relevant finding: **the hyperinsulinemia/secretion thesis lacks the pooled hard-outcome evidence
that TyG and apoB have.** (%S is in any case \~1/HOMA-IR, so it is substantively covered by the acquired TyG
MAs; the genuinely un-pooled arm is %B / insulin secretion / hyperinsulinemia.)

**Single cohorts IDENTIFIED (not lost; candidates IF a deliberate counterweight is later wanted) — NOT gold:**
- `10.1161/01.CIR.98.5.398` Hyperinsulinaemia predicts CHD, healthy middle-aged men, 1998 (351 cites, OA) — the
  landmark single-cohort hyperinsulinemia->CHD (the Bikman-adjacent finding). Single prospective cohort.
- `10.1007/s00125-009-1588-0` HOMA insulin-sensitivity index -> all-cause + CV mortality, Diabetologia 2009
  (56 cites, OA) — the closest DIRECT HOMA-%S->CVD/mortality cohort. Single cohort.
- `10.1016/j.jacc.2005.02.093` Impaired insulin sensitivity as independent mortality risk factor, JACC 2005
  (304 cites, OA) — single study. `10.1177/1479164119827604` baseline fasting insulin -> MACE 2019 (OA).
- `10.1016/0002-8703(91)90434-J` Reaven, compensatory-hyperinsulinemia narrative 1991 (254 cites) — the
  FOUNDING narrative, not evidence. `10.1159/000422658` HOMA/CIGMA methods chapter — a METHOD/context ref only.
- **Contested-signal marker:** `10.1111/j.1532-5415.1997.tb05163.x` "Elevated Fasting Plasma Insulin... An
  Innocent Companion?" 1997 — the literature disputes causality vs bystander; do not read the positive cohorts
  as settled.
- Beta-cell RECOVERY (already held, different question): `10.1007/s00125-011-2204-7` Lim/Taylor 2011 (1160
  cites) — VLCD normalises beta-cell function / reverses T2D -> already covered by [[Total Diet Replacement and Type 2 Diabetes Remission]] + the twin-cycle spine; a reversal finding, not a prediction MA.

**ZERO-HIT attributions:** `--type meta-analysis`/`systematic-review` on beta-cell/insulin-sensitivity/
fasting-insulin/hyperinsulinemia all 0 — PARTLY title-strictness, but the broad (no-`--type`) reruns returned
ONLY single-cohort `article`s, so the MA absence is a **real corpus signal**, not a query artifact.

**Acquisition status:** 0 fetched, 0 maintainer-drop. GAP recorded. PAUSE-AND-ASK: does the maintainer want a
deliberate non-gold counterweight (the 1998 Circulation hyperinsulinemia->CHD cohort + the 2009 Diabetologia
HOMA-%S->mortality cohort, both OA, each needing a `source-tier-overrides.tsv` entry at ingest), or leave the
gap recorded? Default = leave as recorded gap (do not downgrade). Nothing ingested.
- [2026-08-09] openalex search "fasting insulin cardiovascular mortality" -> 3 hits: https://doi.org/10.64898/2026.07.27.26358997; https://doi.org/10.1186/s12933-026-03244-7; https://doi.org/10.1080/0886022x.2026.2692758
- [2026-08-09] openalex search "HOMA-IR cardiovascular disease general population" -> 0 hits: (none)
- [2026-08-09] openalex search "insulin resistance HOMA-IR coronary meta-analysis" -> 0 hits: (none)
- [2026-08-09] openalex search "HOMA insulin resistance mortality" -> 0 hits: (none)
- [2026-08-09] openalex search "beta cell function cardiovascular risk" -> 2 hits: https://doi.org/10.1016/j.metabol.2020.154185; https://doi.org/10.28982/josam.847350
- [2026-08-09] openalex search "insulin resistance coronary meta-analysis" -> 1 hits: https://doi.org/10.3389/fendo.2023.1271857
- [2026-08-09] openalex search "HOMA-IR cardiovascular" -> 6 hits: https://doi.org/10.2223/jped.1562; https://doi.org/10.1007/s00125-015-3602-z; https://doi.org/10.1016/j.nut.2019.110608; https://doi.org/10.1007/s00109-007-0273-3; https://doi.org/10.1016/j.diabres.2025.112103
- [2026-08-09] openalex resolve "10.3389/fendo.2023.1271857" -> 1 hits: https://doi.org/10.3389/fendo.2023.1271857
- [2026-08-09] openalex search "insulin resistance cardiovascular events meta-analysis" -> 2 hits: https://doi.org/10.1371/journal.pone.0052036; https://doi.org/10.3410/f.717976298.793473883
- [2026-08-09] openalex search "insulin resistance stroke meta-analysis" -> 3 hits: https://doi.org/10.1016/j.mehy.2020.109700; https://doi.org/10.1136/bmjopen-2020-044771; https://doi.org/10.1055/a-1648-7767
- [2026-08-09] openalex search "insulin resistance all-cause mortality meta-analysis" -> 6 hits: https://doi.org/10.2337/dc24-0475; https://doi.org/10.1042/bsr20170947; https://doi.org/10.1093/eurheartj/ehae666.2920; https://doi.org/10.2337/figshare.26083753; https://doi.org/10.3389/fendo.2026.1884402
- [2026-08-09] openalex fetch "10.1042/bsr20170947" -> 0 hits: (none)

## [2026-08-09 #8] SELECTION RECORD — HOMA/insulin -> CVD, maintainer-directed acquire ONE recent high/medium (corrects #7)
**Directive.** Maintainer: "acquire one (recent) high/medium source" for the HOMA/insulin -> CVD question.
Re-searched hard-outcome + recent pooled evidence (queries auto-logged above). **This CORRECTS #7's
over-broad claim** that "no gold-tier pooled MA of HOMA/fasting-insulin -> CVD exists": strict multiword +
`--type` queries had masked several. Pooled MAs DO exist — the true residual gap is narrower (below).

**Candidates surfaced (hard-outcome / recent pooled):**
- **SELECTED -> inbox: `10.1042/bsr20170947`** Zhang (Xiaohong) et al., *Fasting insulin, insulin resistance,
  and risk of cardiovascular or all-cause mortality in NON-DIABETIC adults: a meta-analysis*, Bioscience
  Reports 2017 (65 cites, gold OA via PMC6448479). **Fit-to-question WINNER:** exposure = **fasting insulin
  AND HOMA-IR** (fasting insulin = Bikman's exact hyperinsulinemia claim), population = **non-diabetic /
  general** (right stratum), outcomes = **hard (CV + all-cause mortality)**, 7 studies / 26,976 adults.
  Result is honestly HEDGED: all-cause RR **1.13 (1.00-1.27, P=0.058, borderline NS)** for fasting insulin
  vs **1.34 (1.11-1.62)** for HOMA-IR; CV-mortality RR 2.11 (1.01-4.41) HOMA-IR but only 2 studies (wide CI),
  fasting-insulin CV-mortality 1.40 (0.49-3.96, NS, 1 study). Exactly the adjudication the Bikman thread
  needs: IR modestly predicts hard outcomes; **fasting-insulin-ALONE is weaker/borderline** than HOMA-IR.
  Likely tier at ingest = **moderate** [downgrade: small study counts, wide CIs, 2017]; type = meta-analysis.
- **REJECTED `10.2337/dc24-0475`** Diabetes Care 2024 (86 cites) — most recent/highest, BUT population =
  **Type 1 Diabetes**, exposure = **eGDR** (not fasting insulin/HOMA), and **closed-access**. Population +
  metric mismatch (the same T1D trap rejected in #6). Not acquired.
- **NOTED (not taken) `10.3389/fendo.2023.1271857`** Li et al., HOMA-IR -> **coronary artery calcification**
  MA, Front Endocrinol 2023 (15 studies, 60,649; OA; GRADE self-rated LOW/very-low). More recent + OA, but
  endpoint is a **SURROGATE (CAC)** and certainty low -> weaker steel-man than a hard-outcome MA. Available
  if the maintainer later wants the recent-surrogate companion.

**Recency tradeoff, stated:** picked 2017-hard-outcome over 2023-surrogate/2024-T1D per the telos rule
*recency is an input to relevance, never a quality rank* + *fit-to-question not pedigree* — the acquired MA
uniquely matches exposure (fasting insulin) x population (non-diabetic) x endpoint (hard). Fetch: the
registry OA url (bioscirep.org) is a DEAD host -> recovered via **Europe PMC render** (PMC6448479), no
maintainer-drop needed.

**RESIDUAL GAP (the true #7 finding, narrowed):** still **NO pooled MA of HOMA-%B / insulin SECRETION ->
CVD or T2D-incidence** — %B / beta-cell function remains single-cohort only. HOMA-%S is now covered in spirit
(fasting insulin + HOMA-IR \~ 1/%S pooled here; TyG MAs Liu/Ding staged). The un-pooled arm is secretion/%B.

**Acquisition status:** 1 fetched (Zhang 2017 -> inbox/, gitignored), 0 maintainer-drop, 0 ingested.
Hand off to `process inbox` (pairs with the 2 staged TyG MAs as the IR-surrogate -> CVD-prediction node).
- [2026-08-13] openalex search "triglyceride glucose index cardiovascular disease meta-analysis" -> 6 hits: https://doi.org/10.1186/s12933-021-01268-9; https://doi.org/10.1186/s12933-022-01546-0; https://doi.org/10.3389/fcvm.2021.774781; https://doi.org/10.1186/s12933-025-02584-0; https://doi.org/10.1186/s12933-025-02890-7
- [2026-08-13] openalex search "iodine deficiency child mental development cognitive meta-analysis" -> 0 hits: (none)
- [2026-08-13] openalex search "iron supplementation cognition mental development meta-analysis" -> 0 hits: (none)
- [2026-08-13] openalex search "iodine child mental development" -> 1 hits: ?
- [2026-08-13] openalex search "iron cognition randomised meta-analysis" -> 0 hits: (none)
- [2026-08-13] openalex search "genetic risk lifestyle coronary disease interaction" -> 1 hits: https://doi.org/10.1016/j.ypmed.2024.107886
- [2026-08-13] openalex search "polygenic risk score diet interaction cardiovascular" -> 0 hits: (none)
- [2026-08-13] openalex search "triglyceride HDL ratio cardiovascular events meta-analysis" -> 0 hits: (none)
- [2026-08-13] openalex search "triglyceride HDL cholesterol ratio cardiovascular risk" -> 8 hits: https://doi.org/10.3390/diagnostics13050929; https://doi.org/10.1111/j.1399-5448.2008.00406.x; https://doi.org/10.1038/oby.2009.446; https://doi.org/10.1016/j.diabres.2014.07.010; ?
- [2026-08-13] openalex search "alcohol consumption blood pressure dose-response meta-analysis Roerecke" -> 0 hits: (none)

## [2026-08-13] SELECTION RECORD — "top-tier acquire" pass -> ALL FOUR ALREADY INGESTED; two gaps confirmed no-gold; maintainer-drop re-surfaced

**Trigger:** maintainer approved a research pass on the AWAITS-review "top-tier acquisition targets"
(Ding TyG ASCVD 2021, Bougma iodine, Falkingham iron) + the queue's "top next-up" Liu 2022, plus the
gene x exposure gap; and to surface the maintainer-drop blocked list.

**Field 3 — adjudication (the negative space is the finding):**
- **Ding - Triglyceride-Glucose Index ASCVD 2021** — NOT an acquire. INGESTED 2026-08-09 (source page +
  real extraction, cited `[EXTRACTED]` on [[Insulin Resistance Surrogates and Cardiovascular Risk]] as a
  type-F extension onto Liu; own log ingest entry). The `[AWAITS (Ding...)]` tokens still visible are
  STALE narration inside the Liu ingest entry (written minutes before Ding landed), living only in
  log.md (historical, append-don't-rewrite) + hot.md (cache) — never on a claim page, so
  `reconcile.py awaits-arrived` is correctly clean.
- **Bougma iodine 2013 · Falkingham iron 2010** — NOT acquires. INGESTED 2026-08-04 as the
  deficiency-repletion trio (items 2/3, 3/3), cited on [[Deficiency Repletion vs Enhancement]]; AWAITS
  cashed at ingest. Registered gold.
- **Liu TyG CV-mortality 2022** — NOT an acquire. INGESTED 2026-08-09 (minted the ir-surrogates nucleus).
- **=> The AWAITS-review "acquisition gap" was a false alarm** — it read historical log/hot AWAITS
  narration as live acquisition targets. Correct state: 0 of the 4 need acquiring.
- **gene x diet / polygenic x lifestyle interaction on hard outcomes** (the over-personalization
  `[PRIOR]` route-(b) test) — RE-PROBED, confirms the 2026-08-06 ingest-queue finding: NO gold gene-diet
  SR/MA surfaces. Only hits: one non-OA weak 2024 obesity-genetics x lifestyle article
  (`10.1016/j.ypmed.2024.107886`, cites 9); zero for polygenic x diet. INSUFFICIENT-EVIDENCE literature
  gap, NOT no-effect. REJECTED acquire (gold-gate + do-not-acquire-weak). Landmark Khera 2016 NEJM is
  cohort-pooled, not SR/MA -> below the gold bar; gap stands.
- **TG/HDL-C ratio -> CV outcomes** (the genuine open 2nd AWAITS on the ir-surrogates node —
  generalize beyond one IR surrogate) — PROBED, NO gold SR/MA. Best OA hit is a 2023 MDPI Diagnostics
  narrative review (`10.3390/diagnostics13050929`, weak/moderate); remaining hits single cohorts /
  cross-sectional. REJECTED acquire (gold-gate). The AWAITS stays OPEN but is a G-gap (no gold evidence
  exists to fill it), not an acquisition task.

**Field 4 — acquisition status: 0 fetched, 0 ingested, 0 NEW maintainer-drop.** Nothing to hand to
`process inbox`. Maintainer-drop blocked list RE-SURFACED for decision (all established blocked in prior
passes; not re-attempted). Deduplicated of since-resolved items (Chen Parkinson 2021, Messier IDEA 2013,
Siervo DASH MA 2015 are now HELD):
- **Roerecke 2017** alcohol -> CVD/BP dose-response MA — `10.1016/S2468-2667(17)30003-8` (Lancet Public
  Health) — oa=False paywall. [distinct from held Roerecke 2010]
- **Fang 2018** physical activity -> Parkinson's MA — `10.1001/jamanetworkopen.2018.2421` — oa=True but
  JAMA anti-bot 403. [PD leg]
- **Kennedy - Geroscience 2014** — `10.1016/j.cell.2014.10.039` — oa=True but Cell/Elsevier 403.
  [registry placeholder, not held; needs tier context]
- **Lopez-Otin - Hallmarks of Aging 2023 update** — `10.1016/j.cell.2022.11.001` — oa=False Cell
  paywall. [only if the enumeration is wanted; not registered]
- **Siervo - nitrate/beetroot -> BP MA 2013** — `10.3945/jn.112.170233` — oa=True but ScienceDirect 403.
  [distinct from held Siervo DASH MA 2015]
- **Fried - Frailty Phenotype 2023 update** — paywalled. [registry holds the 2001 original as placeholder]
- [2026-08-13] openalex search "sleep duration all-cause mortality dose-response meta-analysis meta-analysis" -> 6 hits: https://doi.org/10.1161/jaha.117.005947; https://doi.org/10.1186/s12889-020-09275-3; https://doi.org/10.2196/preprints.17705; https://doi.org/10.21203/rs.2.22427/v3; https://doi.org/10.21203/rs.2.22427/v2
- [2026-08-13] openalex fetch "10.1161/jaha.117.005947" -> 0 hits: (none)

## [2026-08-13] SELECTION RECORD — sleep-mortality dose-response (challenge-driven)
**Trigger:** maintainer challenge — the fabric gives a single POOLED short-arm mortality RR (Cappuccio
2010, RR 1.12 for <7h) and cannot resolve <5h / 5-6h / 6-7h. Held source structurally bundles them
(short-arm flat across cutoffs, P=0.89), so this is a genuine silent-gap, not a fabric error.
- **Query/channel:** openalex `search "sleep duration all-cause mortality dose-response meta-analysis"
  --type meta-analysis --from-year 2015` (auto-logged above; 6 hits).
- **Adjudication:**
  - **SELECTED — Yin 2017, JAHA** `10.1161/JAHA.117.005947` (717 cites, gold, dose-response non-linear
    MA, 7h nadir; the landmark that gives the per-hour curve Cappuccio pools). The exact instrument the
    gap needs.
  - **REJECTED — the three 2020 "older people / elderly" MAs** (`s12889-020-09275-3`,
    `rs.2.22427/v2,v3`, `2196/preprints.17705`): narrower (elderly-only subpopulation), lower-cited,
    and one is a preprint pair (same work). Yin dominates on scope + design + citation; no independent
    perspective added -> ratchet-reject.
  - **DEFERRED — none.**
- **Acquisition:** Yin 2017 FETCHED. openalex direct fetch FAILED (AHA IP-wall) -> escalated:
  EuropePMC OA copy PMC5634263 via `fetch_browser.py --download` (the render URL fires a download event;
  the `--download` flag captures it — plain goto/curl do not). 6.4MB/82pp incl. supplement, text-clean.
  Staged to `raw/binary/papers/`, registry row added (`yin2017`, gold). NOT yet ingested (delegated).
- [2026-08-13] openalex search "fruit vegetable intake cardiovascular cancer mortality dose-response meta-analysis" -> 2 hits: https://doi.org/10.1093/ije/dyw319; https://doi.org/10.3389/fnut.2023.1153165
- [2026-08-13] openalex search "fruit vegetable consumption mortality dose response prospective meta-analysis" -> 1 hits: https://doi.org/10.1093/nutrit/nuaf013
- [2026-08-13] openalex resolve "10.1093/ije/dyw319" -> 1 hits: https://doi.org/10.1093/ije/dyw319
- [2026-08-13] openalex fetch "10.1093/ije/dyw319" -> 0 hits: (none)

## [2026-08-13] SELECTION RECORD — fruit/veg -> mortality/stroke dose-response (challenge-driven)
**Trigger:** maintainer challenge on the Plant Foods deliverable (2026-08-13, sidecar R-c) — the
deliverable quotes ESC 2021's BORROWED, CI-less fruit/veg->stroke RRs (11%/26%/4%-per-serving), which
are themselves an MA-summary (ESC refs 435,436) the wiki does not hold. = the Plant Foods spec's #1
named gap. Goal: acquire the held effect+CI+shape MA to replace the borrowed ESC bare RR.
- **Queries/channel:** openalex `search "fruit vegetable intake cardiovascular cancer mortality
  dose-response meta-analysis"` (2 hits) + `search "fruit vegetable consumption mortality dose response
  prospective meta-analysis"` (1 hit) + resolve/fetch on `10.1093/ije/dyw319` (all auto-logged above).
- **Adjudication:**
  - **SELECTED — Aune 2017, Int J Epidemiol** `10.1093/ije/dyw319` (2462 cites, gold dose-response
    SR/MA, 95 studies/142 pubs). The exact instrument the gap needs, and near-certainly ESC's own
    underlying reference: per 200 g/day RR 0.92 (0.90-0.94) CHD, 0.84 (0.76-0.92) stroke, 0.92
    (0.90-0.95) CVD, 0.97 (0.95-0.99) total cancer, 0.90 (0.87-0.93) all-cause; carries a specific-types
    analysis (answers the grapes-vs-raspberries per-type question the challenge raised) and the
    dose-response shape (plateau vs monotone by outcome). Same Imperial/Aune-Norat-Riboli team as the
    held whole-grain MA -> NOT independent-E of Aune 2016 (shared team + overlapping cohort base;
    type-e-check-authorship-overlap memory), but that does not bar acquisition — it is the primary
    effect source, not a corroborator.
  - **DEFERRED — 2025 Nutrition Reviews MA** `10.1093/nutrit/nuaf013` (8 cites, oa=False paywall).
    Newer and a possible superseder, but low-cited, granularity unverified behind the OUP paywall, and
    the recency-lowers-prior rule applies in a crowded field. Aune 2017 is the landmark; defer the 2025
    unless ingest shows Aune's shape/type-resolution is stale. Not acquired.
  - **REJECTED — Frontiers in Nutrition 2023** `10.3389/fnut.2023.1153165`: Frontiers venue, unvetted
    scope, dominated by Aune on citations + design + breadth; no independent perspective -> ratchet-reject.
- **Acquisition:** Aune 2017 **FETCHED** to `inbox/Aune - Fruit Vegetable Mortality 2017.pdf`. OUP host
  is a hard IP-wall: openalex direct fetch 403, local Playwright 403, Steel 403 (all three rungs blocked,
  per prior-pass finding). Escalated to the EuropePMC OA copy **PMC5837313** (isOpenAccess=Y, inEPMC=Y —
  same source, different host, NOT a downgrade) via `curl` of the `?pdf=render` URL: 981KB / 10pp,
  text-clean (pdftotext confirms title/abstract/authors). Staged to inbox; NOT chunked, NOT ingested
  (hand off to *process inbox* -> delegated ingest). DOI recorded in staged-source-dois.tsv.
- **Field 4 — acquisition status: 1 fetched (Aune 2017), 0 ingested, 0 maintainer-drop needed.** Pass
  succeeded via OA mirror; no pause-and-ask required this time.
- [2026-08-18] openalex search "homeostasis model assessment insulin resistance validity systematic review" -> 0 hits: (none)
- [2026-08-18] openalex search "HOMA insulin resistance clamp comparison meta-analysis" -> 0 hits: (none)
- [2026-08-18] openalex search "HOMA2 insulin" -> 10 hits: https://doi.org/10.1590/s0004-27302009000200020; https://doi.org/10.2337/dc06-0070; https://doi.org/10.4103/2229-5178.193898; https://doi.org/10.4314/ahs.v20i1.33; https://doi.org/10.2337/dc23-0079
- [2026-08-18] openalex search "HOMA insulin resistance systematic review" -> 8 hits: https://doi.org/10.1186/s13098-019-0489-8; https://doi.org/10.1016/j.ctim.2020.102583; https://doi.org/10.7759/cureus.70768; https://doi.org/10.1016/j.diabres.2026.113318; ?
- [2026-08-18] openalex search "HOMA beta-cell function" -> 10 hits: https://doi.org/10.1159/000085276; https://doi.org/10.4103/2230-8210.83059; https://doi.org/10.1046/j.1464-5491.2001.00534.x; https://doi.org/10.1016/j.diabet.2010.02.001; https://doi.org/10.2478/jomb-2014-0033
- [2026-08-18] openalex search "abuse HOMA modeling" -> 1 hits: https://doi.org/10.2337/diacare.27.6.1487
- [2026-08-18] openalex search "correct homeostasis model assessment" -> 1 hits: https://doi.org/10.2337/diacare.21.12.2191
- [2026-08-18] openalex search "insulin sensitivity indices clamp" -> 8 hits: https://doi.org/10.2337/diacare.22.9.1462; https://doi.org/10.1007/s00125-009-1547-9; ?; https://doi.org/10.1016/j.metabol.2007.04.002; https://doi.org/10.1016/j.metabol.2005.11.005
- [2026-08-18] openalex search "surrogate insulin sensitivity systematic review" -> 0 hits: (none)
- [2026-08-18] openalex search "insulin resistance indices meta-analysis" -> 8 hits: https://doi.org/10.1055/s-0044-101835; https://doi.org/10.1186/s12958-024-01317-4; https://doi.org/10.32598/jvc.5.4.191.1; https://doi.org/10.61186/jmsthums.12.3.93; https://doi.org/10.31083/rcm49364
- [2026-08-18] openalex search "HOMA-IR diagnostic accuracy meta-analysis" -> 0 hits: (none)
- [2026-08-18] openalex fetch "10.2337/diacare.27.6.1487" -> 0 hits: (none)

## [2026-08-18 #9] SELECTION RECORD — HOMA-%S / HOMA-%B as an INDICATION OF INSULIN RESISTANCE (validity, not outcome)
**Scope + how it differs from #7/#8.** Maintainer question: "are HOMA-%S and -%B useful as an *indication of
insulin resistance*?" This is the **measurement-validity** question (does the readout track true IR / clamp),
NOT the #7/#8 **hard-outcome** question (does %S/%B predict CVD/mortality). Distinct search target: agreement
vs the euglycemic-hyperinsulinemic clamp, and the correct-use/limits of the HOMA2 calibrated model. **Split the
two indices up front:** %S = insulin SENSITIVITY (\~ 1/HOMA-IR) — directly on-question as an IR readout; %B =
beta-cell FUNCTION (secretion) — NOT insulin resistance itself, so "%B as an indication of IR" is a partial
category mismatch (it indexes the *secretion* limb, useful for the beta-cell side of the T2D story, not for
resistance). Dedup: fabric holds HOMA-IR (Zhang 2017 on [[Insulin Resistance Surrogates and Cardiovascular Risk]])
+ TyG; holds NOTHING on the HOMA2 %S/%B calibrated model or its validity.

**Finding — NO gold SR/MA on HOMA2-%S/%B validity exists; the evidence base is foundational method papers +
scattered single-cohort clamp-agreement studies.** `--type systematic-review`/`meta-analysis` on HOMA
validity/clamp all 0; broad reruns returned only the two model papers + single-cohort index-vs-clamp
comparisons. Every "insulin resistance indices" MA that surfaced is an INTERVENTION review (chromium, exercise,
green-coffee, DHEA, erectile-dysfunction association) that merely USES an index as an outcome — off-question,
rejected. "HOMA-IR diagnostic accuracy" MA = 0. The absence of a pooled validity SR is itself the reportable
finding (a method-defined, thin-for-pooling field).

**Candidates (fit-to-question, tier, adjudication):**
- **SELECTED -> maintainer-drop (BLOCKED): `10.2337/diacare.27.6.1487`** Wallace, Levy, Matthews,
  *Use and Abuse of HOMA Modeling*, Diabetes Care 2004 (**5153 cites**, OA-flagged). THE defining reference for
  exactly the two indices asked about: how HOMA2 yields %S and %B from paired fasting glucose+insulin (or
  C-peptide), and — the on-question payload — *when the readouts are and are not valid*. Ratchet-advancer (fabric
  holds nothing on HOMA2). **Tier at ingest = method/moderate, deliberate gold-gate exception** (foundational
  method reference in a field with no gold validity SR) -> will need a `source-tier-overrides.tsv` entry. **FETCH
  BLOCKED:** openalex direct 403 + local Playwright 403 (diabetesjournals.org, OUP/Diabetes-Care anti-bot class).
  PAUSE-AND-ASK: maintainer to drop the PDF into `inbox/`. DOI recorded. NOT downgraded.
- **DEFERRED `10.2337/diacare.21.12.2191`** Levy, Matthews, Hermans, *Correct HOMA Evaluation Uses the Computer
  Program*, Diabetes Care 1998 (2048 cites, OA=False). Introduces the HOMA2 computer model (why the 1985 linear
  HOMA1 equations diverge from the properly-computed %S/%B). Substantively SUBSUMED by Wallace 2004 for our
  purpose; acquire only if the 2004 read shows a gap. Also OUP-blocked if wanted.
- **DEFERRED (single-cohort clamp-agreement, NOT gold; candidates only if a counterweight is wanted):**
  `10.2337/diacare.22.9.1462` Matsuda-DeFronzo 1999 (OGTT indices vs clamp; landmark but OGTT-derived, not
  HOMA2); `10.1016/j.metabol.2005.11.005` (2006) + `10.1016/j.metabol.2007.04.002` (2007) simple-indices-vs-clamp
  comparisons; `10.1186/1472-6823-14-65` (BMC Endocr Disord 2014, OA) — the counter-signal "*fasting insulin
  sensitivity indices are not better than routine clinical variables*", a symmetric-standards keep-in-view.
- **REJECTED:** `10.1080/10641963.2026.2625124` / figshare (2026, non-insulin indices for pre-hypertension — TyG
  class, insulin-FREE, so off-question for %S/%B); all intervention-outcome "IR indices" MAs (see above).

**Acquisition status:** 0 fetched, **1 maintainer-drop (Wallace 2004, DOI 10.2337/diacare.27.6.1487)**, 0
ingested. Nothing woven — the answer to the maintainer is given as UNHELD/routed, not adopted into fabric
(feedback rules no-definitive-claims-from-nonfabric / no-fabric-edit-ungrounded-in-held-fabric). If
acquired + ingested, the natural home is a facet on [[Insulin Resistance Surrogates and Cardiovascular Risk]]
(the %S\~1/HOMA-IR arm) plus the beta-cell/%B secretion limb that ties to the twin-cycle spine.
- [2026-08-18] openalex search "GRADE evidence to decision frameworks" -> 6 hits: https://doi.org/10.1136/bmj.i2016; https://doi.org/10.1136/bmj.i2089; https://doi.org/10.1016/j.jclinepi.2016.09.009; https://doi.org/10.1186/s12961-018-0320-2; https://doi.org/10.1016/j.jclinepi.2016.01.032
- [2026-08-18] openalex search "AGREE II guideline" -> 5 hits: https://doi.org/10.1503/cmaj.090449; https://doi.org/10.1016/j.ypmed.2010.08.005; https://doi.org/10.1016/j.jclinepi.2010.07.001; https://doi.org/10.1371/journal.pone.0174831; https://doi.org/10.1186/s12913-018-2954-8
- [2026-08-18] openalex fetch "10.1186/s12961-018-0320-2" -> 0 hits: (none)
- [2026-08-18] openalex fetch "10.1136/bmj.i2089" -> 0 hits: (none)

## [2026-08-18 #10] SELECTION RECORD — HOW POPULATION LIFESTYLE GUIDELINES ARE DEVELOPED (method groundwork for a fabric-grounded guideline)
Question served: how respectable bodies (WHO, NICE, USPSTF, GRADE) turn evidence into a population
guideline — the *process/method*, as groundwork for writing a fabric-grounded, whole-population,
lifestyle-focused guideline. Maintainer constraint: do NOT anchor on status quo; do NOT weigh
feasibility / sustainability / carbon / ethics-of-meat. That constraint is a deliberate DEPARTURE from
standard Evidence-to-Decision (EtD), which blends exactly those non-health criteria — it maps to the
fabric's "one axis, named -- never blended" rule.

**Already HELD (no acquisition needed):**
- `GRADE - Handbook` (ingested) — certainty rating + strength (strong/conditional), the two-axis machinery.
- `USPSTF - Procedure Manual 2022` (ingested) — the NON-GRADE alternative: A/B/C/D/I off a certainty x
  magnitude-of-NET-benefit grid, no strength axis, financial cost excluded. Structurally the CLOSEST held
  instrument to the maintainer's health-axis-only intent -> [[Net Benefit and the USPSTF Recommendation Grid]].
- `Cochrane - Handbook for Systematic Reviews 6.5` (ingested) — the SR/evidence-synthesis layer.
- Method pages: [[Certainty of Evidence vs Strength of Recommendation]], [[Net Benefit and the USPSTF Recommendation Grid]], [[Which Objective Moved This Recommendation]], [[The Weighting Problem - Why Population Guidance Is Ill-Posed and Individual Advice Is Not]], [[Was GRADE Actually Used]].

**ACQUIRED / PREPARED this episode:**
- **CHUNKED (was in-hand, un-ingested):** `WHO - Handbook for Guideline Development 2e` (main PDF, ch1-13)
  -> `raw/sources/who---handbook-for-guideline-development-2e/` (9 chunks). **Chunk 06 = ch10 "Developing
  recommendations"** carries WHO's native EtD-criteria enumeration (quality of evidence; values &
  preferences; balance of benefits/harms; resource implications; priority of the problem; equity & human
  rights; acceptability; feasibility -> strong/conditional). This is the criteria list the maintainer's
  design keeps-or-strips, in a guideline body's own voice. NOT yet ingested (delegated op, separate turn).
- **FETCHED to inbox/:** Moberg et al. 2018, *The GRADE Evidence to Decision (EtD) framework for
  health-system and public-health decisions* (DOI `10.1186/s12961-018-0320-2`, Health Res Policy Syst, OA)
  -> `inbox/Group - The GRADE Evidence to Decision EtD 2018.pdf`. SELECTED as the POPULATION/public-health
  EtD variant — most on-question for a whole-population guideline; enumerates the public-health EtD criteria
  (adds equity/acceptability/feasibility explicitly at population scale).

**SELECTED but fetch-BLOCKED -> maintainer-drop (pause-and-ask, did NOT downgrade):**
- Alonso-Coello et al. 2016, *GRADE EtD frameworks 2: from evidence to recommendations* — DOI
  `10.1136/bmj.i2089` (BMJ, OA in principle; publisher 403-blocked to openalex + headless). The canonical
  EtD criteria/structure paper. **Now LOWER priority** — WHO ch10 (chunked) + Moberg 2018 (fetched) already
  cover the criteria enumeration; acquire only if the formal EtD table structure is wanted verbatim.
- Alonso-Coello et al. 2016, *GRADE EtD frameworks 1: introduction* — DOI `10.1136/bmj.i2016` (BMJ). Same
  block; companion to the above; optional.

**DEFERRED (identified, not taken):**
- AGREE II (Brouwers et al. 2010, `10.1503/cmaj.090449`, CMAJ, OA) — guideline-QUALITY appraisal instrument
  (a checklist for whether a finished guideline is trustworthy), not a construction method. Useful as a
  self-audit rubric for OUR guideline later; not needed for the "how are they made" question.
- NICE *Developing NICE guidelines: the manual* (PMG20) — NICE's process manual; web PDF, no clean DOI.
  NICE's process is GRADE-adjacent; the held GRADE Handbook + WHO handbook cover the shared machinery.
  Acquire only if NICE-specific process detail (e.g. its committee/consultation structure) is wanted.

**Acquisition status:** 1 fetched (Moberg 2018 -> inbox/), 1 source chunked (WHO handbook), 2 maintainer-drop
(BMJ i2089/i2016, optional), 2 deferred (AGREE II, NICE PMG20), 0 ingested. Nothing woven — Research/discovery
only. The guideline itself is a later Phase-2 Compile, NOT written this turn.
- [2026-08-19] openalex search "protein supplementation older adults muscle mass strength meta-analysis" -> 3 hits: https://doi.org/10.1093/ajcn/nqy192; https://doi.org/10.3390/nu16070941; https://doi.org/10.1186/s12877-025-05885-x
- [2026-08-19] openalex resolve "10.1093/ajcn/nqy192" -> 1 hits: https://doi.org/10.1093/ajcn/nqy192
- [2026-08-19] openalex resolve "10.3390/nu16070941" -> 1 hits: https://doi.org/10.3390/nu16070941
- [2026-08-19] openalex resolve "10.1186/s12877-025-05885-x" -> 1 hits: https://doi.org/10.1186/s12877-025-05885-x
- [2026-08-19] openalex search "carbohydrate intake all-cause mortality dose-response meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex search "long-term weight loss maintenance meta-analysis meta-analysis" -> 1 hits: https://doi.org/10.1016/j.gie.2016.03.521
- [2026-08-19] openalex search "protein distribution meal muscle older adults meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex search "leucine muscle mass older adults meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex search "carbohydrate mortality meta-analysis" -> 8 hits: https://doi.org/10.1016/s2468-2667(18)30135-x; https://doi.org/10.1530/ey.16.12.9; https://doi.org/10.1016/j.clnu.2022.12.010; https://doi.org/10.1016/j.arr.2023.101997; https://doi.org/10.1039/d3fo01374j
- [2026-08-19] openalex search "grip strength mortality meta-analysis" -> 1 hits: https://doi.org/10.1016/j.jamda.2017.03.011
- [2026-08-19] openalex search "low carbohydrate diet mortality systematic review" -> 3 hits: https://doi.org/10.1016/j.arr.2023.101997; https://doi.org/10.1039/d3fo01374j; https://doi.org/10.1371/journal.pone.0212203
- [2026-08-19] openalex search "weight loss maintenance systematic review" -> 8 hits: https://doi.org/10.1111/obr.13256; https://doi.org/10.1111/obr.12772; https://doi.org/10.1080/17437199.2017.1299583; https://doi.org/10.2196/jmir.6972; https://doi.org/10.1111/obr.13003
- [2026-08-19] openalex search "weight regain behavioural intervention meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex search "organic food consumption cancer mortality meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex resolve "10.1093/ajcn/nqy192" -> 1 hits: https://doi.org/10.1093/ajcn/nqy192
- [2026-08-19] openalex search "calcium vitamin D supplementation cardiovascular events meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex search "Mediterranean diet dementia cognitive decline meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex resolve "10.1016/j.jamda.2017.03.011" -> 1 hits: https://doi.org/10.1016/j.jamda.2017.03.011
- [2026-08-19] openalex search "protein per meal dose muscle systematic review" -> 0 hits: (none)
- [2026-08-19] openalex search "leucine supplementation elderly meta-analysis" -> 1 hits: https://doi.org/10.1007/s12603-014-0559-4
- [2026-08-19] openalex resolve "10.1016/j.annepidem.2026.110252" -> 1 hits: https://doi.org/10.1016/j.annepidem.2026.110252
- [2026-08-19] openalex resolve "10.1016/j.arr.2023.101997" -> 1 hits: https://doi.org/10.1016/j.arr.2023.101997
- [2026-08-19] openalex resolve "10.1016/j.clnu.2022.12.010" -> 1 hits: https://doi.org/10.1016/j.clnu.2022.12.010
- [2026-08-19] openalex resolve "10.3390/nu14061259" -> 1 hits: https://doi.org/10.3390/nu14061259
- [2026-08-19] openalex search "organic food consumption health outcomes" -> 0 hits: (none)
- [2026-08-19] openalex search "organic food cancer risk cohort" -> 0 hits: (none)
- [2026-08-19] openalex search "calcium supplementation myocardial infarction risk" -> 1 hits: https://doi.org/10.1002/cpt.1636
- [2026-08-19] openalex search "vitamin D supplementation cardiovascular disease meta-analysis" -> 6 hits: https://doi.org/10.3389/fcvm.2018.00087; https://doi.org/10.1093/ajcn/nqy078; https://doi.org/10.1016/j.ajcnut.2023.07.012; https://doi.org/10.2174/1381612825666190308152943; https://doi.org/10.34172/jrhs.2023.129
- [2026-08-19] openalex search "Mediterranean diet incident dementia" -> 1 hits: https://doi.org/10.1016/j.tjnut.2025.03.015
- [2026-08-19] openalex search "Mediterranean diet cognitive impairment prospective meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex search "protein intake distribution muscle meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex search "protein supplementation older muscle strength meta-analysis" -> 5 hits: https://doi.org/10.3390/nu15153424; https://doi.org/10.3390/nu16070941; https://doi.org/10.1016/j.clnu.2024.08.033; https://doi.org/10.1186/s12877-025-05885-x; https://doi.org/10.1016/j.clnu.2024.12.006
- [2026-08-19] openalex search "egg consumption cardiovascular disease mortality meta-analysis" -> 2 hits: https://doi.org/10.1093/jn/nxac105; https://doi.org/10.51745/najfnr.10.21.22-34
- [2026-08-19] openalex search "ultra-processed food energy density nutrient meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex search "low carbohydrate diet score all-cause mortality meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex search "low carbohydrate diet mortality systematic review" -> 3 hits: https://doi.org/10.1016/j.arr.2023.101997; https://doi.org/10.1039/d3fo01374j; https://doi.org/10.1371/journal.pone.0212203
- [2026-08-19] openalex search "carbohydrate intake all-cause mortality dose-response meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex search "ultra-processed food health outcomes meta-analysis" -> 1 hits: https://doi.org/10.17605/osf.io/hrjsm
- [2026-08-19] openalex search "ultra-processed food randomized controlled trial energy intake" -> 0 hits: (none)
- [2026-08-19] openalex search "egg consumption cardiovascular disease systematic review" -> 4 hits: https://doi.org/10.1136/bmj.m513; https://doi.org/10.1093/jn/nxac105; https://doi.org/10.51745/najfnr.10.21.22-34; https://doi.org/10.17615/wk03-xf04
- [2026-08-19] openalex search "dietary cholesterol cardiovascular disease meta-analysis meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex resolve "10.3390/life15020160" -> 1 hits: https://doi.org/10.3390/life15020160
- [2026-08-19] openalex search "Vitamin D Calcium Supplementation Cardiovascular Outcomes Mortality Trial Sequential Analysis" -> 1 hits: https://doi.org/10.1007/s12603-020-1551-9
- [2026-08-19] openalex search "Calcium Supplements Risk Cardiovascular Disease Meta-Analysis Clinical Trials" -> 1 hits: https://doi.org/10.3390/nu13020368
- [2026-08-19] openalex search "Mediterranean diet dementia Alzheimer disease systematic review meta-analysis" -> 1 hits: https://doi.org/10.1007/s40520-024-02718-6
- [2026-08-19] openalex search "coffee consumption Mendelian randomization mortality" -> 1 hits: https://doi.org/10.1007/s00394-021-02650-9
- [2026-08-19] openalex resolve "10.1016/j.arr.2023.101997" -> 1 hits: https://doi.org/10.1016/j.arr.2023.101997
- [2026-08-19] openalex resolve "10.1039/d3fo01374j" -> 1 hits: https://doi.org/10.1039/d3fo01374j
- [2026-08-19] openalex resolve "10.1093/jn/nxac105" -> 1 hits: https://doi.org/10.1093/jn/nxac105
- [2026-08-19] openalex resolve "10.1136/bmj.m513" -> 1 hits: https://doi.org/10.1136/bmj.m513
- [2026-08-19] openalex search "understanding weight regain nutritional intervention meta-analysis" -> 1 hits: https://doi.org/10.1016/j.clnesp.2022.03.020
- [2026-08-19] openalex resolve "10.1016/j.clnesp.2022.04.017" -> 1 hits: https://doi.org/10.1016/j.clnesp.2022.04.017
- [2026-08-19] openalex resolve "10.1016/j.exger.2022.111902" -> 1 hits: https://doi.org/10.1016/j.exger.2022.111902
- [2026-08-19] openalex search "handgrip strength mortality dose-response systematic review" -> 2 hits: https://doi.org/10.1016/j.arr.2022.101778; https://doi.org/10.1080/0886022x.2024.2305855
- [2026-08-19] openalex search "per meal protein anabolic older younger" -> 0 hits: (none)
- [2026-08-19] openalex search "protein intake physical function older adults meta-analysis" -> 2 hits: https://doi.org/10.3390/nu10091330; https://doi.org/10.1016/j.arr.2022.101731
- [2026-08-19] openalex search "Coffee intake cardiovascular disease all-cause mortality observational Mendelian randomization" -> 1 hits: https://doi.org/10.1093/ije/dyw325
- [2026-08-19] openalex search "Coffee consumption cardiovascular diseases Mendelian randomization" -> 1 hits: https://doi.org/10.3390/nu13072218
- [2026-08-19] openalex search "Body mass index all cause mortality HUNT UK Biobank Mendelian randomization" -> 1 hits: https://doi.org/10.1101/2023.10.31.23297612
- [2026-08-19] openalex search "genetically predicted BMI mortality Mendelian randomization biobank" -> 0 hits: (none)
- [2026-08-19] openalex search "Cholesterol not particle concentration atherogenic risk apolipoprotein B Mendelian randomization" -> 1 hits: https://doi.org/10.1093/eurjpc/zwac219
- [2026-08-19] openalex search "apolipoprotein B A1 ratio coronary heart disease ischemic stroke Mendelian randomization" -> 1 hits: https://doi.org/10.1101/2025.06.11.25328879
- [2026-08-19] openalex search "ultra-processed food adjusted nutrient quality cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-08-19] openalex search "processed food matched diet randomized trial ad libitum energy" -> 0 hits: (none)
- [2026-08-19] openalex search "NOVA classification diet quality confounding nutrient profile" -> 0 hits: (none)
- [2026-08-19] openalex search "ultra-processed foods health-related outcomes systematic review randomized controlled trials" -> 1 hits: https://doi.org/10.3389/fnut.2024.1421728
- [2026-08-19] openalex fetch "10.3390/life15020160" -> 0 hits: (none)
- [2026-08-19] openalex fetch "10.3390/nu13020368" -> 0 hits: (none)
- [2026-08-19] openalex fetch "10.1007/s40520-024-02718-6" -> 0 hits: (none)
- [2026-08-19] openalex fetch "10.1016/j.arr.2022.101778" -> 0 hits: (none)
- [2026-08-19] openalex fetch "10.1007/s12603-014-0559-4" -> 0 hits: (none)
- [2026-08-19] openalex fetch "10.1093/ije/dyw325" -> 0 hits: (none)
- [2026-08-19] openalex fetch "10.1136/bmj.l1042" -> 0 hits: (none)
- [2026-08-19] openalex fetch "10.3389/fnut.2024.1421728" -> 0 hits: (none)
- [2026-08-19] openalex fetch "10.1093/eurjpc/zwac219" -> 0 hits: (none)
- [2026-08-19] openalex fetch "10.1093/jn/nxac105" -> 0 hits: (none)
- [2026-08-19] openalex fetch "10.1016/j.clnu.2022.12.010" -> 0 hits: (none)
- [2026-08-19] openalex fetch "10.1016/j.clnesp.2022.03.020" -> 0 hits: (none)
- [2026-08-19] openalex fetch "10.1016/j.arr.2023.101997" -> 0 hits: (none)

## [2026-08-19] SELECTION RECORD — RATCHET / LIGHTHOUSE SURVEY (better sources + disagreeing gold)

Batched *research* op across the `lighthouse-index.md` ratchet gap map (2026-08-07): find a GOLD
advancer for each sub-gold UPGRADE row (lens A = "better sources") and a DIVERGENT gold for each
CLOSED-gold TENSION-acquire (lens B = "disagreeing gold"). 5 parallel discovery agents; discovery +
vetting only, symmetric standards, author-diff independence checks per the named excluded lineages.
Acquisition centralized here (pause-and-ask on block, no downgrade). Auto-log (fields 1+2) above.

### Lens A — UPGRADE (a gold that supersedes a sub-gold incumbent)

- **grip strength -> mortality** (held Celis-Morales 2018 `high` cohort): **SELECTED Lopez-Bueno 2022**
  `10.1016/j.arr.2022.101778` (48-study dose-response MA, 3.1M, gives kg thresholds; independent
  Spain/Denmark group). Corroboration **DEFERRED Wu 2017** `10.1016/j.jamda.2017.03.011` (MA, paywalled).
  Marker-not-lever caveat retained (upgrades tier of the ASSOCIATION, not decision-status).
- **leucine threshold, elderly** (held Katsanos 2006 `weak`): **SELECTED Komar 2015**
  `10.1007/s12603-014-0559-4` (SR-MA, independent Schwingshackl group) — weak->gold; caveat it measures
  supplementation EFFECT on strength, not a threshold NUMBER (partial fit).
- **organic food -> health** (held Baranski/Baudry `moderate`, composition-only): **SELECTED Theodoridis
  2025** `10.3390/life15020160` (21-study cancer-incidence MA, HR 0.93 [0.78-1.12] NULL) — the gold
  HARD-OUTCOME MA the incumbents lacked; resolves the gap to a null. Journal MDPI-Life -> register `high`
  not auto-gold (journal-tempered).
- **Ca +/- vit-D -> CV harm** (held Bolland 2011 `high`, contested): **SELECTED Myung 2021**
  `10.3390/nu13020368` (13 double-blind RCTs, CVD RR 1.15 [1.06-1.25]) — newer, RCT-only, INDEPENDENT
  of Bolland/Reid (Korean group) -> both tier-upgrade AND type-E corroboration. `10.1007/s12603-020-1551-9`
  (vit-D-alone/combined arm) DEFERRED as an adjacent null.
- **MedDiet -> dementia** (held Garcia-Casares 2021 `high`, 3 cross-sectional): **SELECTED Nucci 2024**
  `10.1007/s40520-024-02718-6` (21 studies, prospective-cohort-inclusive; dementia OR 0.89, AD OR 0.73).
  Caveat: mixed designs, observational, plausibly cardiometabolic-mediated -> upgrades certainty/tier, not
  causal identification.
- **carbohydrate %E -> mortality U-shape** (held Seidelmann 2018 `high`, single cohort + 8-study MA):
  **SELECTED Clinical Nutrition 2022** `10.1016/j.clnu.2022.12.010` (41-study restricted-cubic-spline
  dose-response SR-MA; non-linear all-cause mortality, mid-carb nadir; independent of the
  Willett/Seidelmann lineage).
- **weight-loss maintenance / regain** (held Franz 2007 `high`, dated \~1yr): **SELECTED Machado 2022**
  `10.1016/j.clnesp.2022.03.020` (27-trial regain-TRAJECTORY MA; independent Brazilian group). Distinct
  from regain-BIOLOGY (held). **DEFERRED Flore 2022** `10.3390/nu14061259` — different question
  (does intensive maintenance intervention beat control), not the descriptive trajectory.
- **elderly protein g/kg TARGET** (index credits Bauer PROT-AGE 2013 `high`): **NO independent gold
  advancer.** The three "supplementation-efficacy" MAs are **REJECTED off-question** (Ten Haaf 2018
  `10.1093/ajcn/nqy192`; `10.3390/nu16070941`; `10.1186/s12877-025-05885-x` — they answer *does
  supplementation help*, not *what g/kg target*). Only step is **DEFERRED Coelho-Junior 2022**
  `10.1016/j.arr.2022.101731` — a SAME-lineage F-update of the already-STAGED gold Coelho-Junior 2018
  `10.3390/nu10091330`. **Index correction owed:** this row's on-question incumbent is the staged
  Coelho-Junior 2018, not Bauer.
- **per-meal protein dose, older vs younger** (held Moore 2014 `moderate`): **NO gold advancer** — MA/SR
  queries 0-hit (genuine literature absence; per-meal dose answered only at acute-MPS surrogate level).
  Accept Moore 2014; surrogate-only gap stands.

### Lens B — DISAGREEING GOLD (a divergent gold that flips a CLOSED-gold to TENSION)

- **eggs -> CVD** (held Godos 2020 `gold`, near-null; Zhong 2019 `high` cohort STAGED): **SELECTED Ma 2022**
  `10.1093/jn/nxac105` (dose-response MA; egg intake linearly assoc. CVD mortality in US / >60y /
  hyperlipidemia strata; independent Chinese group). Lifts the harm signal from the staged Zhong cohort to
  MA grade. **Stratified/conditional tension, not a flat reversal** — a near-null MA cluster also exists
  (Advances in Nutrition 2022, Godos-concurring). File as US/older-conditional.
- **low-carb/keto -> HARD outcomes** (held Naude 2022 + Ge 2020 `gold`, CLOSED on weight/markers):
  **SELECTED Ghorbani 2023** `10.1016/j.arr.2023.101997` (dose-response MA; plant-LCD lower all-cause
  mortality, animal-LCD higher cancer death; independent Iranian group). Corroboration **SELECTED Qin & Bo
  2023** `10.1039/d3fo01374j` (LCD assoc. CHD; lower-impact journal -> corroboration not 2nd nucleus).
  DEDUP NOTE: the direction is ALREADY in the fabric via ingested Seidelmann 2018 -> these REINFORCE an
  existing tension (type-E/F), not a new one. Ghorbani also serves the Lens-A carb-U-shape row.
- **UPF -> health, is there an independent PROCESSING effect?** (held Lane 2024 umbrella + Hall 2019 RCT
  `gold`): **SELECTED Aramburu 2024** `10.3389/fnut.2024.1421728` (SR of 4 RCTs; declines to attribute
  harm to processing per se — benefits plausibly reflect other diet/PA components). Tensions the umbrella's
  causal framing with the RCT layer (insufficient-evidence position, not harm-reversal). **DEFERRED**
  medRxiv 2026 preprint `10.64898/2026.06.03.26354787` (energy-intake SMD 0.71 vs 0.02 when energy-density
  matched — strongest "energy density not processing" evidence, but PREPRINT, re-check on peer review).
- **coffee -> mortality causality** (held Poole 2017 `gold` umbrella, observational U): **SELECTED
  Nordestgaard 2016** `10.1093/ije/dyw325` (same-paper observational-U + genetically-instrumented NULL;
  Danish CGPS/CCHS; clean independence from Poole). Genuine observational-benefit-vs-MR-null TENSION.
  **DEFERRED Yuan/Larsson 2021** `10.3390/nu13072218` (2nd independent MR-null; corroboration, no mortality
  headline).
- **BMI -> mortality, independent genetic witness** (held Global BMI Collab 2016 + Wade 2018; EXCLUDE
  Davey Smith / Sattar / Timpson / Carslake): **SELECTED Sun 2019** `10.1136/bmj.l1042` (non-linear MR,
  Cambridge + Norwegian HUNT; NONE of the excluded authors; low-BMI arm largely a smoking artifact).
  **DEFERRED** Burgess 2023 medRxiv preprint (same-lineage refinement, unpublished).
- **apoB vs LDL-C, the flagged residual independence gap** (held Marston 2022 + Zuber 2021; EXCLUDE BOTH
  Ference AND Ala-Korpela): **SELECTED Helgadottir 2022** `10.1093/eurjpc/zwac219` (deCODE + Danish data;
  NEITHER excluded author; finds *cholesterol content not particle number* mediates the risk). Fills the
  double-exclusion gap AND tensions the held apoB-particle-supremacy -> highest-value find of the survey.
  **DEFERRED** Li 2025 medRxiv preprint (ratio not head-to-head; shared-data risk).

### Acquisition status (field 4) — pause-and-ask, NO downgrade

- **FETCHED to inbox/ (2):** Nucci 2024 (Springer, openalex); Aramburu 2024 (Frontiers, via fetch_browser
  local Playwright after a plain-fetch 403).
- **MAINTAINER-DROP requested (11)** — clean DOIs, anti-bot 403 (MDPI/BMJ/OUP/ScienceDirect) or paywalled;
  NOT downgraded:
  - `10.3390/life15020160` Theodoridis (MDPI 403, incl. local-browser) · `10.3390/nu13020368` Myung
    (MDPI 403, incl. local-browser) · `10.1136/bmj.l1042` Sun (BMJ 403, incl. local-browser) ·
    `10.1016/j.arr.2022.101778` Lopez-Bueno (ScienceDirect 403) · `10.1093/ije/dyw325` Nordestgaard
    (OUP 403) · `10.1093/eurjpc/zwac219` Helgadottir (OUP 403) · `10.1093/jn/nxac105` Ma (OUP/J Nutr,
    paywalled) · `10.1007/s12603-014-0559-4` Komar (paywalled) · `10.1016/j.clnu.2022.12.010`
    Carbohydrate DR-MA (Elsevier, paywalled) · `10.1016/j.clnesp.2022.03.020` Machado (Elsevier,
    paywalled) · `10.1016/j.arr.2023.101997` Ghorbani (Elsevier, paywalled).
  - MDPI + BMJ are open-access but hard-IP-wall the local browser -> would need `--service steel`
    (maintainer opt-in) or a manual drop.
- **NOT acquired (DEFERRED/REJECTED):** logged above with reasons; not sent to inbox.
- [2026-08-20] openalex search "erythritol cardiovascular" -> 12 hits: https://doi.org/10.1038/s41591-023-02223-9; https://doi.org/10.1093/cvr/cvaf091; https://doi.org/10.1016/j.jacadv.2025.101605; https://doi.org/10.1093/eurheartj/ehae729; https://doi.org/10.1093/clinchem/hvad069
- [2026-08-20] openalex search "erythritol platelet thrombosis" -> 1 hits: https://doi.org/10.1161/atvbaha.124.321019
- [2026-08-20] openalex search "allulose cardiovascular" -> 0 hits: (none)
- [2026-08-20] openalex search "allulose metabolic health" -> 4 hits: https://doi.org/10.22270/ujpr.v9i6.1238; https://doi.org/10.2196/81857; https://doi.org/10.5445/ir/1000190914; https://doi.org/10.2196/preprints.81857
- [2026-08-20] openalex search "non-sugar sweeteners cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-08-20] openalex search "artificial sweeteners cardiovascular systematic review" -> 1 hits: https://doi.org/10.1093/nutrit/nuaf298
- [2026-08-20] openalex search "non-sugar sweeteners cardiovascular disease" -> 0 hits: (none)
- [2026-08-20] openalex search "WHO non-sugar sweeteners guideline" -> 4 hits: https://doi.org/10.1038/s41430-023-01314-7; https://doi.org/10.15537/1658-3175.8184; https://doi.org/10.32920/26767483; https://doi.org/10.32920/26767483.v1
- [2026-08-20] openalex resolve "10.1093/nutrit/nuaf298 10.1038/s41591-023-02223-9 10.1161/atvbaha.124.321019" -> 3 hits: https://doi.org/10.1093/nutrit/nuaf298; https://doi.org/10.1038/s41591-023-02223-9; https://doi.org/10.1161/atvbaha.124.321019
- [2026-08-20] openalex search "xylitol cardiovascular thrombosis" -> 0 hits: (none)
- [2026-08-20] openalex search "erythritol meta-analysis" -> 2 hits: https://doi.org/10.3389/fphys.2025.1593204; https://doi.org/10.17605/osf.io/xrky8
- [2026-08-20] openalex search "sugar alcohols polyols cardiovascular systematic review" -> 0 hits: (none)
- [2026-08-20] openalex resolve "10.17605/osf.io/xrky8" -> 1 hits: https://doi.org/10.17605/osf.io/xrky8
- [2026-08-20] openalex fetch "10.1038/s41591-023-02223-9" -> 0 hits: (none)
- [2026-08-20] openalex fetch "10.1161/atvbaha.124.321019" -> 0 hits: (none)

## [2026-08-20] SELECTION RECORD — erythritol / allulose / polyol sweeteners -> platelet, thrombosis, MI, stroke

**Question:** is there GOLD-tier evidence (SR/MA/umbrella) that erythritol, allulose, and related
rare-sugar/polyol sweeteners raise platelet reactivity / thrombosis / MI / stroke? Channel: openalex
(primary), 9 queries. Maintainer request.

**Landscape (the honest answer): NO mature gold SR/MA on the specific exposure->hard-outcome yet.**
The erythritol->thrombosis evidence is HIGH-quality-but-not-gold-by-design (a landmark cohort + human
mechanism, not a pooled SR/MA); allulose->CV is an EMPTY literature (insufficient-evidence).

- **Witkowski/Hazen 2023, Nature Medicine** `10.1038/s41591-023-02223-9` (cites=221) — the landmark:
  large discovery+validation cohorts (erythritol -> incident MACE) + human/animal platelet & thrombosis
  mechanism. Tier \~high (single-group cohort + mechanism, NOT SR/MA). **SELECTED** (first source on a
  no-gold question = ratchet-advancer). **Fetch BLOCKED** (escholarship HTTPError) -> maintainer-drop.
- **Witkowski/Hazen 2024, ATVBAHA** `10.1161/atvbaha.124.321019` (cites=22) — prospective human
  ingestion (erythritol, not glucose) -> enhanced platelet reactivity; the interventional platelet arm
  the maintainer named. **SELECTED** (mechanism complement). **Fetch BLOCKED** (landing-page stub, then
  PMC 131-byte anti-bot block) -> maintainer-drop (PMC11338701).
- **Artificial Sweeteners and CVD: SR + Meta-analysis 2025, Nutrition Reviews** `10.1093/nutrit/nuaf298`
  (cites=1) — the ONLY gold SR+MA at the umbrella level, BUT **BLOCKED 2026-08-20 (maintainer): cannot
  acquire** (OUP paywall, oa=False, no reachable copy). Not downgraded to a weaker substitute (acquisition
  rule). Scope also uncertain: erythritol is a POLYOL/sugar-alcohol and many "artificial sweetener" MAs
  cover aspartame/sucralose/saccharin and EXCLUDE polyols, so it might not even answer the erythritol
  question. Left un-acquired (no claim-page hold planted — scope-uncertain and not erythritol-specific);
  re-attempt only if an OA copy or a maintainer PDF appears.
- **Circulating erythritol and related polyols and risk of cardiometabolic diseases 2026 (MA)**
  `10.17605/osf.io/xrky8` (cites=0, oa=True but no PDF link) — **REJECTED 2026-08-20 (maintainer): the
  OSF DOI is NOT a paper** (registration/OSF artifact, no completed results MA behind it). Do not
  re-surface as a candidate; the on-question gold MA this question wants remains un-found (a real [G]).
- **allulose -> cardiovascular / thrombosis: 0 hits** (`allulose cardiovascular`=0; only postprandial
  GLP-1 / gut-microbiota / metabolic studies exist). Attributed to genuine **literature-absence**
  (insufficient-evidence), not a title.search artifact -> a real [G]/no-acquire (nothing gold to get).
- **xylitol -> CV: 0 on `xylitol cardiovascular thrombosis`** (title.search strictness — the Hazen 2024
  xylitol prothrombotic paper exists under a different title; SAME evidence class as erythritol, not a
  separate gold). Not separately pursued.
- **0-hit attributions:** `non-sugar sweeteners cardiovascular`(--type meta-analysis)=0 and
  `non-sugar sweeteners cardiovascular disease`=0 are title.search STRICTNESS artifacts (hyphenated
  multi-word, every word ANDed into title), NOT literature-absence — the SR/MA nuaf298 was found via a
  looser `artificial sweeteners cardiovascular` + `--type systematic-review`.

**Acquisition-requested:** Nat Med 2023 + ATVBAHA 2024 acquired + ingested (see the erythritol ingest,
2026-08-20). xrky8 REJECTED (not a paper, maintainer); nuaf298 BLOCKED (OUP paywall, un-acquirable).
**Maintainer-drop list now EMPTY** — nothing left to fetch. The broad non-sugar-sweetener/polyol -> CVD
gold SR/MA remains un-held: a real [G] gap, not a pending acquisition. Allulose = the same gap.

- [2026-08-20] openalex fetch "10.2903/j.efsa.2012.2985" (EFSA Mercury) -> FETCH-FAIL (Wiley HTTPError)
- [2026-08-20] openalex fetch "10.1186/s12916-017-0791-y" (Jacka SMILES) -> inbox/ (770 KB, 10pp PDF OK)
- [2026-08-20] openalex fetch "10.1016/S1470-2045(07)70373-X" (Straif shift-work) -> PAYWALLED (oa=False)

## [2026-08-20] SELECTION RECORD — three maintainer-approved OA acquisitions (Straif · EFSA Hg · Jacka SMILES)

**Context.** Follow-up to the AWAITS/G acquisition-gap survey: the maintainer approved acquiring the
three registry-held `[NOT YET HELD]` placeholders judged *likely open-access*. Acquisition only (Research
op) — nothing ingested here; each hands off to *process inbox* when its PDF is in hand.

1. **Query** — three direct DOI fetches via `openalex.py fetch` (primary tool, clean registry DOIs); EFSA
   escalated down the ladder (openalex fetch -> curl UA -> `fetch_browser.py` headless -> EFSA europa.eu +
   epdf mirror), all four hosts tried. Channel: openalex + headless browser. No title-search (DOIs already
   registered), so no title.search-strictness 0-hits to attribute.
2. **Results** —
   - **Jacka - SMILES Trial Diet Depression 2017** `10.1186/s12916-017-0791-y` (BMC Medicine, OA) ->
     **FETCHED** to `inbox/` (770 KB, valid 10-page PDF v1.4).
   - **EFSA - Mercury and Methylmercury in Food 2012** `10.2903/j.efsa.2012.2985` (EFSA Journal, `oa=True`,
     cites=896) -> **BLOCKED**. Genuinely OA but **every** known host anti-bot-blocks: Wiley
     `pdfdirect` (openalex HTTPError + browser HTTP 403), Wiley `epdf` (403), EFSA europa.eu
     main_documents mirror (403). Wiley is in the measured anti-bot family (Lancet/OUP/JAMA/Cell/SD/NEJM).
   - **Straif - Carcinogenicity of Shift Work 2007** `10.1016/S1470-2045(07)70373-X` (Lancet Oncology
     commentary, pp.1065-1066) -> **PAYWALLED** (`oa=False`, no OA PDF anywhere) — as predicted (Elsevier
     short statement; the underlying IARC Monograph Vol 98 is OA on the IARC site but is a *different*
     document than this Lancet Oncol summary the row points at).
3. **Adjudication** — all three SELECTED (maintainer-approved, ratchet-advancers on questions with no
   held source: circadian/shift-work carcinogenicity; methylmercury dose/benefit-risk in fish; whole-diet
   RCT -> depression). Symmetric bar met at intake; tiers per registry (Straif high/report, EFSA
   gold/report, Jacka moderate/rct `[downgrade: tiny-n underpowered single RCT]`). No downgrade-substitution
   attempted for the two blocked ones (acquisition pause-and-ask rule).
4. **Acquisition-requested** — Jacka -> `inbox/` (ready for *process inbox*). Straif shift-work 2007
   `10.1016/S1470-2045(07)70373-X` -> **maintainer-dropped 2026-08-20** to `inbox/` (Lancet Oncol Policy
   Watch, Vol 8 Dec 2007 p.1065, 2-page PDF verified) — so the row stays pointed at the Lancet Oncol
   summary, not the IARC Monograph Vol 98 (that re-point option is now moot). **Maintainer-drop list (1):**
   EFSA Hg 2012 `10.2903/j.efsa.2012.2985` — OA but Wiley-anti-bot-blocked (403 on every host); a
   maintainer browser can save the PDF, or authorize the paid Steel rung. Identified, not lost — DOI above.
- [2026-08-21] openalex search "protein energy restriction meta-analysis" -> 0 hits: (none)
- [2026-08-21] openalex search "protein energy restricted" -> 8 hits: https://doi.org/10.3945/ajcn.112.044321; https://doi.org/10.3168/jds.2014-8442; https://doi.org/10.1017/s0007114510003983; https://doi.org/10.1016/j.physbeh.2012.08.004; https://doi.org/10.1002/oby.20320
- [2026-08-21] openalex search "protein obesity weight loss" -> 6 hits: https://doi.org/10.3945/ajcn.114.090290; https://doi.org/10.1016/j.cmet.2019.06.008; https://doi.org/10.1186/s12937-017-0229-6; https://doi.org/10.1016/j.celrep.2016.09.047; https://doi.org/10.3945/ajcn.113.077503
- [2026-08-21] openalex search "protein lean body mass weight loss" -> 1 hits: https://doi.org/10.1055/s-0034-1398551
- [2026-08-21] openalex search "high protein diet overweight" -> 6 hits: https://doi.org/10.1038/ijo.2014.52; https://doi.org/10.1186/s12937-017-0229-6; https://doi.org/10.1371/journal.pone.0161297; https://doi.org/10.1002/ehf2.13213; https://doi.org/10.3945/jn.114.197624
- [2026-08-21] openalex search "protein sarcopenic obesity" -> 6 hits: https://doi.org/10.1016/j.clnesp.2019.04.007; https://doi.org/10.2147/cia.s137987; https://doi.org/10.2147/cia.s96017; https://doi.org/10.1159/000468153; https://doi.org/10.1007/s00223-018-0424-2
- [2026-08-21] openalex search "protein resistance training fat-free mass" -> 6 hits: https://doi.org/10.3389/fnut.2021.644865; https://doi.org/10.14740/jocmr3817; https://doi.org/10.1123/ijsnem.2025-0010; https://doi.org/10.1155/tsm2/5557511; https://doi.org/10.1038/s41430-026-01757-8
- [2026-08-21] openalex search "protein intake muscle mass function" -> 6 hits: https://doi.org/10.1002/jcsm.12922; https://doi.org/10.1017/s0029665120008010; https://doi.org/10.1093/ajcn/nqaa136; https://doi.org/10.1093/ajcn/nqaa099; https://doi.org/10.1016/j.archger.2020.104098
- [2026-08-21] openalex search "protein body composition caloric restriction" -> 2 hits: https://doi.org/10.1101/830752; ?
- [2026-08-21] openalex search "protein requirement adults obesity" -> 1 hits: https://doi.org/10.1016/j.clnu.2015.02.016
- [2026-08-21] openalex resolve "10.3945/ajcn.112.044321 10.1002/jcsm.12922 10.1016/j.clnu.2015.02.016" -> 3 hits: https://doi.org/10.3945/ajcn.112.044321; https://doi.org/10.1002/jcsm.12922; https://doi.org/10.1016/j.clnu.2015.02.016
- [2026-08-21] openalex search "protein body composition weight loss older adults" -> 5 hits: https://doi.org/10.1093/nutrit/nuv065; https://doi.org/10.1007/s12603-015-0438-7; https://doi.org/10.1093/cdn/nzaa040_068; https://doi.org/10.1016/j.cdnut.2023.100111; https://doi.org/10.1016/j.jand.2015.06.094
- [2026-08-21] openalex search "higher protein diets body weight management" -> 0 hits: (none)
- [2026-08-21] openalex search "dietary protein weight loss randomized" -> 5 hits: https://doi.org/10.3945/ajcn.115.129528; https://doi.org/10.2196/resprot.6438; https://doi.org/10.1016/j.tjnut.2024.02.009; https://doi.org/10.14710/jgi.14.1.102-110; https://doi.org/10.3410/f.727782029.793535692
- [2026-08-21] openalex search "protein adjusted body weight" -> 0 hits: (none)
- [2026-08-21] openalex search "protein intake obesity guideline" -> 0 hits: (none)
- [2026-08-21] openalex search "protein requirement fat-free mass" -> 1 hits: https://doi.org/10.1016/j.clnesp.2022.01.014
- [2026-08-21] openalex fetch "10.3945/ajcn.112.044321" -> 0 hits: (none)
- [2026-08-21] openalex fetch "10.1093/nutrit/nuv065" -> 0 hits: (none)

## [2026-08-21] SELECTION RECORD — protein target for overweight/obese + caloric-deficit adults
**Gap (maintainer-raised):** a more robust protein-target RANGE for (a) overweight/obese adults and
(b) adults in caloric deficit — beyond the held «\~1.6-2.2 g/kg, doesn't transport to obesity». Held on
this question: Morton 2018 (healthy trained, per total BM, \~1.62 g/kg RT breakpoint), Tagawa 2020
(independent JP lineage, \~1.3 g/kg), Refalo 2025 (caloric-DEFICIT FFM retention but NON-obese + not
independent of Helms), Bauer/PROT-AGE (older adults). So the ratchet wants: a DEFICIT synthesis
independent of Refalo/Helms/Phillips, and anything gold on the OBESITY-specific target / which-kg basis.

**SELECTED (gold, independent, on-gap) — both OA-flagged but fetch-BLOCKED -> maintainer-drop:**
- **Wycherley 2012** `10.3945/ajcn.112.044321` — AJCN, gold META-ANALYSIS, 602 cites, OA. Energy-restricted
  HIGH-protein vs standard-protein diets -> body composition (fat mass, LEAN mass) + cardiometabolic.
  Clifton/Brinkworth (Adelaide/CSIRO) lineage — INDEPENDENT of Phillips/Morton AND of Refalo/Helms.
  Directly answers the caloric-deficit stratum with hard-ish body-comp outcomes. Fetch BLOCKED (ScienceDirect
  403) -> maintainer-drop.
- **Kim 2016** `10.1093/nutrit/nuv065` — Nutrition Reviews, gold META-ANALYSIS, 230 cites, OA. Dietary protein
  -> body-composition change AFTER weight loss in older adults (lean-mass preservation in deficit).
  Campbell/Purdue lineage — INDEPENDENT of Wycherley AND of the held protein cluster. Pairs with Wycherley
  as a potential type-E robustness leg (two independent lineages -> "higher protein preserves lean mass in a
  deficit"). Fetch BLOCKED (OUP 403) -> maintainer-drop.

**DEFERRED (candidates, not acquired now):**
- **Nunes 2022** `10.1002/jcsm.12922` — J Cachexia Sarcopenia Muscle, gold SR+MA, 262 cites, OA. Broad
  protein -> muscle mass & function (health + disease), dose-response. BUT Phillips senior author -> NOT
  type-E independent of held Morton/Devries, and NOT obese/deficit-specific. Candidate as a type-F UPDATE to
  the RT-target cluster at a later pass, not this gap's priority.
- **Verreijen 2015** `10.1016/j.clnu.2015.02.016` — Clin Nutr, single nitrogen-balance study, non-OA,
  moderate/weak. DIRECT on the obese-older-adult protein requirement during weight loss, but not gold. Weijs
  group. Maintainer-drop ONLY if the which-kg-in-obesity question is prioritized (labelled-weak counterweight
  in a thin field).
- **Calculation of protein requirements (bodyweight vs FFM) 2022** `10.1016/j.clnesp.2022.01.014` — Clin Nutr
  ESPEN, methods-comparison article, OA, moderate. DIRECT on the which-basis (total BW vs FFM) question the
  maintainer raised. Not a SR/MA. Candidate to acquire as the labelled-moderate direct evidence on the basis
  question.

**FINDING (G-gap, honestly reported):** the which-kg-BASIS-in-obesity question (scale protein by total vs
lean vs adjusted body weight) has NO gold SR/MA — the direct evidence is single studies (Verreijen) + a
methods-comparison paper (Clin Nutr ESPEN 2022). Zero-hit queries Q14/Q15 ("protein adjusted body weight",
"protein intake obesity guideline") are `title.search` STRICTNESS artifacts (every word ANDed into the
title), NOT literature-absence proof. The absence of a gold SR IS the honest state: the field has not
resolved the obesity basis-choice with systematic evidence.

**Acquisition-requested:** Wycherley 2012 + Kim 2016 -> BLOCKED at headless fetch (both genuinely OA;
ScienceDirect/OUP anti-bot 403) -> **PAUSE + ASK maintainer to drop the 2 PDFs into `inbox/`** (DOIs above).
Nothing downgraded; nothing ingested. Hand-off to `process inbox` once the PDFs land.
- [2026-08-21] openalex search "heme iron colorectal cancer meta-analysis" -> 6 hits: https://doi.org/10.1158/1940-6207.capr-10-0113; https://doi.org/10.1007/s10552-013-0197-x; https://doi.org/10.1158/1940-6207.c.6544641; https://doi.org/10.1158/1940-6207.22525230.v1; https://doi.org/10.1158/1940-6207.22525230
- [2026-08-21] openalex search "nitrite processed meat cancer" -> 2 hits: https://doi.org/10.1002/ijc.29901; https://doi.org/10.3390/nu11112673
- [2026-08-21] openalex search "nitrate nitrite cancer meta-analysis meta-analysis" -> 6 hits: https://doi.org/10.1016/j.envres.2022.112988; https://doi.org/10.3390/nu7125505; https://doi.org/10.3390/toxics11020190; https://doi.org/10.3390/nu14030666; https://doi.org/10.1016/j.clnu.2020.11.010
- [2026-08-21] openalex search "meat cooking method colorectal cancer meta-analysis" -> 0 hits: (none)
- [2026-08-21] openalex search "processed meat subtypes colorectal cancer" -> 0 hits: (none)
- [2026-08-21] openalex search "heterocyclic amines colorectal cancer" -> 3 hits: https://doi.org/10.1186/s41021-021-00197-z; ?; ?
- [2026-08-21] openalex search "processed meat type colorectal cancer meta-analysis" -> 0 hits: (none)
- [2026-08-21] openalex search "heme iron cancer risk meta-analysis" -> 5 hits: https://doi.org/10.1158/1940-6207.c.6544641; https://doi.org/10.1158/1940-6207.22525230.v1; https://doi.org/10.1158/1940-6207.22525230; https://doi.org/10.1158/1940-6207.c.6544641.v1; https://doi.org/10.1016/j.nutres.2018.07.007
- [2026-08-21] openalex search "red meat colorectal cancer mechanism heme nitroso" -> 0 hits: (none)
- [2026-08-21] openalex resolve "10.3390/nu14030666 10.1158/1940-6207.capr-10-0113" -> 2 hits: https://doi.org/10.3390/nu14030666; https://doi.org/10.1158/1940-6207.capr-10-0113
- [2026-08-21] openalex search "nitrosamines food risk assessment EFSA" -> 2 hits: https://doi.org/10.1007/s00204-024-03726-1; https://doi.org/10.1007/s00204-024-03776-5
- [2026-08-21] openalex search "red processed meat colorectal cancer dose-response meta-analysis" -> 0 hits: (none)
- [2026-08-21] openalex search "nitrite-free processed meat health" -> 0 hits: (none)
- [2026-08-21] openalex search "uncured meat celery nitrate cancer" -> 0 hits: (none)
- [2026-08-21] openalex fetch "10.1158/1940-6207.capr-10-0113" -> 0 hits: (none)
- [2026-08-21] openalex fetch "10.3390/nu14030666" -> 0 hits: (none)

## [2026-08-21] SELECTION RECORD — within-category heterogeneity of processed red meat (attribute decomposition)

**Gap (maintainer-raised).** The fabric treats "processed meat" as one IARC/WCRF category. It holds
category-level associations ([[Red and Processed Meat and Cancer]]: WCRF processed-meat RR 1.16
[1.08-1.26] per 50 g/day; the WCRF/NutriRECS clash on [[Should Adults Reduce Red and Processed Meat]])
and the abstract within-category-variance argument ([[Is the Food Category Doing Any Work]]), but does
NOT decompose *within* processed meat by the attributes that actually vary across bacon/sausage/deli/
prosciutto: **N-nitroso compounds (nitrite/nitrate curing), heme iron, HCA/PAH (high-temp cooking +
smoking), salt**. That decomposition is the decision-relevant object — it is what determines whether a
genuinely nitrite-free product is a *different* exposure (nitroso-driven harm -> reformulation helps) or
the *same* (heme-driven harm -> intrinsic, reformulation futile). Analogous to the UPF/NOVA
within-category work already held (Lane/Aramburu/Hall).

**Key structural finding — the gold literature does NOT organize by product name.** Subtype/product-name
title searches (processed-meat-subtypes / -type CRC) returned 0 under `--type meta-analysis` strictness;
the pooled evidence works at the ATTRIBUTE/MECHANISM level, so "differences between bacon vs sausage vs
prosciutto" is answered mechanistically (heme / nitroso / HCA content), NOT by product-name MAs. The
product names are proxies for attribute bundles (bacon = nitrite-cured + high-temp fried -> nitroso AND
HCA; dry-cured prosciutto = low residual nitrite, not high-temp cooked; etc.).

**SELECTED (2 gold MAs — both ratchet-ADVANCERS: new-aspect openers on the attribute decomposition the
held category-level sources do not touch):**

1. **Bastide - Heme Iron Colorectal Cancer Meta-Analysis 2011** (DOI 10.1158/1940-6207.capr-10-0113;
   gold/meta-analysis; OA; 389 cites) — the INTRINSIC-attribute channel. Heme iron is present in red
   meat regardless of curing, so this bounds how much nitrite-removal can help. Caveat: 2011 — check for
   supersession at ingest (no newer heme-CRC MA found; the 2023 OA hits are re-deposits of this same
   paper). REASON: opens the heme-vs-nitroso mechanistic split; complements #2 as the two competing
   explanations (a future D-tension / A-synthesis).
2. **Said Abasse - Dietary Nitrate Nitrite Site-Specific Cancer 2022** (corrected on acquisition from the "Seyyedsalehi" pre-fetch placeholder — actual first author Kassim Said Abasse; registered slug/citekey `abasse2022nitrate`)
   (DOI 10.3390/nu14030666; gold/meta-analysis; OA; 94 cites) — the CURING/NITROSO channel; separates
   dietary NITRATE (largely vegetable, often neutral/protective) from NITRITE (the meat-preservative
   concern) across cancer sites. REASON: directly informs whether nitrite-free reformulation is a real
   lever — the maintainer's sharpest hook ("sausages genuinely free of nitrates and nitrites").

**DEFERRED (named gaps, NOT acquired):**
- **HCA/PAH channel** — only moderate/narrative-tier reviews found (Genes&Environment 2021, 29 cites,
  OA); the high-temp-cooking carcinogen channel is already partly held ([[Dietary AGEs and Cooking Method]], Filippini acrylamide). Below the gold-gate; a named gap, not a page. Revisit if a gold HCA
  dose-response MA surfaces.
- **EFSA N-nitrosamines risk assessment (2023 opinion)** — the major evidence-bearing report on this,
  but not cleanly in OpenAlex (only a 2024 SKLM commentary, moderate) and a multi-hundred-page risk
  assessment (heavy to ingest). Optional maintainer-drop if the two MAs leave the nitroso magnitude
  under-specified; the 2022 MA is the tractable first source.

**GAP DOCUMENTED (expectancy test) — no direct gold OUTCOME evidence on nitrite-free/uncured meat.**
Searches "nitrite-free processed meat health" and "uncured meat celery nitrate cancer" both returned 0
hits. This is a genuine G-gap, not a tool artifact: a nitrite-free-vs-conventional-meat hard-outcome RCT
is not a study anyone can run, and "uncured / no-nitrite-added" products commonly use celery-powder
nitrate (bacterially converted to nitrite), so the label may not deliver the exposure it implies. The
attribute-level MAs (#1/#2) are how the fabric can reason about this indirectly.

**ACQUISITION STATUS — BOTH BLOCKED -> maintainer-drop requested.** Plain `openalex fetch` AND the
rung-3 headless browser both returned HTTP 403 (AACR + MDPI anti-bot-walled here despite OA flags). Per
acquisition-pause-and-ask: NOT downgraded. Clean DOIs recorded above; awaiting maintainer PDF-drop to
`inbox/`, then -> `process inbox` -> Ingest (pair the two on the heme-vs-nitroso split).

## [2026-08-22] SELECTION RECORD — obesity-as-disease framing candidates (maintainer-offered)

**(1) Query / channel.** No new search run; maintainer offered four candidate sources during the
build of [[The Disease Model of Obesity]], flagged "low GRADE?". Adjudicated against the gold-gate;
no acquisition attempted.

**(3) Adjudication + reason (all REJECTED for ingest; DEFERRED as optional framing-layer):**

- **Jastreboff et al. 2019 — "Obesity as a Disease: The Obesity Society 2018 Position Statement"** —
  REJECT (ingest). A **position statement** = `consensus`/advocacy tier, below the gold-gate. It
  *asserts* the disease label; it does not supply systematic evidence. The wiki's rule is to INDUCE
  the framing from held mechanistic/interventional evidence, not borrow a body's advocacy label
  (received-wisdom-prior risk in reverse). Legitimate ONLY as a later guidance-null / framing-layer
  source, held explicitly as `recommendation`/`consensus` tier used for FRAMING not effect — a
  separate deliberate acquisition with a documented tier override, not needed for this page.
- **Allison et al. 2008 — "Obesity as a Disease: A White Paper on Evidence and Arguments"** — REJECT.
  A **white paper** = opinion/advocacy (`weak`). Same reason; older, and superseded by the held RCT
  pharmacology as the actual evidentiary base.
- **Vallis et al. 2017 — "Philosophical determinants of obesity as a disease"** — REJECT. Philosophy
  of the *disease definition*, not a falsifiable/quantifiable claim on a patient-important outcome —
  outside the evidence scope (context/method at most). The disease *label* is framing-grade by the
  page's own Evidence-status section; this source argues the label, does not evidence the mechanism.
- **Rosenbaum & Leibel 2016 — "Models of energy homeostasis in response to maintenance of reduced
  body weight"** — DEFER (the strongest of the four). A **narrative review** (`moderate`) by the
  reduced-weight-state / leptin authorities; it is the mechanistic backbone under Sumithran/Hall.
  BUT it CORROBORATES what the held sources already establish (type-E/F, not new), and the page is
  well-grounded without it. Not a gold need. Optional later acquisition to strengthen the
  metabolic-defense arm — pause-and-ask, don't downgrade.

**(4) Acquisition-requested.** NONE. Page built on held higher-grade sources (Sumithran 2011 cohort,
Hall 2022 review, Wilding STEP-1 RCT, Jastreboff SURMOUNT-1 RCT). The four candidates are the
FRAMING layer, held apart from the EVIDENCE layer per the page's Evidence-status section.

## [2026-08-22] SELECTION RECORD — belief-harvest run 6 (depth + named-figure heterodox lane)
Channel: WebSearch (discovery of widely-held beliefs, NOT acquisition). Hand-logged (no auto-log for
web channel). Run 6 = depth within categories after the runs 1-4 wide-dispersion pass; \~1/5 heterodox
(low-carb pole this run — R17 cap; plant-based pole owed next run).

**(1) Queries.** (a) `intermittent fasting 16:8 metabolic benefits beyond calorie restriction 2026`;
(b) `carbohydrate insulin model Bikman Ludwig "insulin not calories" fat storage claim`; (c) `blue
light screens before bed ruin sleep evidence`; (d) `red and processed meat causes cancer public
belief`; (e) `omega-3 fish oil supplements protect heart belief`.

**(2) Results (belief confirmed widely-held + representative source).** (a) MedicalNewsToday /
NMCD-journal 2024 isocaloric-IF-vs-CR SR-MA (IF not superior to CR); (b) AJCN Ludwig 2021 CIM +
Wikipedia CIM (Taubes/Ludwig/Bikman proponents; contested); (c) Healthline / ClinicBarcelona / SleepFoundation
(blue-light concern "overstated", \~10-min onset delay, arousal matters more); (d) WHO/IARC/ACS
(processed=Group1, red=Group2A colorectal); (e) Cochrane / UTSW (fish-oil supplements no CV benefit).
No zero-hit queries.

**(3) Adjudication (which beliefs entered the run + why).** SELECTED (a),(b),(c),(d) into run 6.
(b) is the heterodox/named-figure low-carb-pole slot (Bikman/Ludwig CIM), adjudicated as a CLAIM not a
persona. DEDUP-SKIP (e) omega-3-fish-oil->heart: already adjudicated in the challenge ledger (row 1196,
deliverable-critique #11 — general-population null held; high-dose EPA REDUCE-IT contested, queued) ->
true ledger skip (anti-flip-flop), REPLACED by (f) `spot reduction` (targeted fat loss — exercise-
programming depth, 0 fabric/0 ledger coverage). Final run-6 five: IF-beyond-CR, CIM-insulin-not-calories,
blue-light-sleep, red/processed-meat-cancer, spot-reduction.

**(4) Acquisition-requested.** NONE fetched — a belief-harvest routes GAPs as acquire-*targets*, not
fetches. Two GAP rows registered in `ingest-queue.md ## BELIEF-HARVEST GAPS`: `[belief-harvest:
sleep-light-screens]` (SR/MA on evening screen/blue-light exposure -> sleep onset/quality) and
`[belief-harvest: spot-reduction]` (SR/MA/RCT on localized resistance training -> regional adiposity).
Both are named gaps, unregistered to a specific source (no `[AWAITS]` handle yet). The 2024 NMCD
isocaloric SR-MA was NOT acquired: Semnani-Azad 2025 (99-RCT NMA, held) already covers the question
more comprehensively -> no thin-spot.

## [2026-08-22] SELECTION RECORD — belief-harvest run 7 (depth + plant-based heterodox pole)
Channel: WebSearch (discovery of widely-held beliefs, NOT acquisition). Hand-logged (no auto-log for
web channel). Run 7 = depth within under-sampled categories; \~1/5 heterodox = the PLANT-BASED pole
(owed from run 6's low-carb pole — R17 requires both poles sampled).

**(1) Queries.** (a) `whole food plant-based diet reverses heart disease Ornish Esselstyn claim`;
(b) `is moderate drinking red wine good for your heart belief 2026`; (c) `is coffee bad for your heart
common belief`; (d) `does fasted cardio burn more fat`; (e) `magnesium supplement for better sleep
evidence`.

**(2) Results (belief confirmed widely-held + representative source).** (a) PLANTSTRONG / NutritionFacts
(Esselstyn) / T.Colin Campbell Center / PCRM — WFPB "reverses" CAD (Esselstyn 8/11 regression case series;
Ornish 1990 Lifestyle Heart Trial); (b) Mayo Clinic / MassGeneralBrigham / Johns Hopkins / a 2026
cohort (21% lower CV death in moderate wine drinkers) vs "don't start drinking for your heart"; (c) AHA
2026 / GoodRx / Heart&Stroke — "coffee gets a bad rap"; 2-4 cups linked to LOWER CHD/HF/stroke; (d) GoodRx
/ UNSW / UCLA Health — fasted burns more fat DURING session, no long-term body-fat advantage (2017 SR),
more muscle protein breakdown; (e) NCCIH / Cleveland Clinic / SleepFoundation + a 2021 SR-MA (sleep-onset
-17.36 min, LOW quality). No zero-hit queries.

**(3) Adjudication (which beliefs entered + why).** SELECTED all five. (a) is the heterodox/named-figure
PLANT-BASED-pole slot (Ornish/Esselstyn/Greger), adjudicated as a CLAIM not a persona/movement. Dedup:
alcohol + coffee are heavily HELD in the fabric ([[Alcohol and Mortality and Vascular Disease]],
[[Coffee Consumption and Health]]) but have NO prior belief-harvest ledger row -> per step 3 a fabric hit
is a CONFIRM/REFINE/REFUTE candidate to RECORD, not a true skip. No target ratio curated.

**(4) Acquisition-requested.** NONE fetched — GAPs routed as acquire-*targets*, not fetches. THREE queue
rows registered in `ingest-queue.md ## BELIEF-HARVEST GAPS`: `[belief-harvest: wfpb-cvd-regression]`
(the Ornish Lifestyle Heart Trial + Esselstyn + any WFPB angiographic-regression SR — the decision-critical
"reversal" evidence the fabric does not hold), `[belief-harvest: fasted-cardio-fat-loss]` (thin-spot: a
direct fasted-vs-fed exercise body-composition SR — the net-loss inference is already bounded by the held
energy-balance spine), `[belief-harvest: magnesium-sleep]` (a magnesium -> sleep-onset/quality SR/MA;
public evidence exists but thin/low-quality). All named gaps, no `[AWAITS]` handle yet.

## [2026-08-22] SELECTION RECORD — belief-harvest run 8 (depth: diet/macro/single-food + marketing-heterodox)
Channel: WebSearch (discovery of widely-held beliefs, NOT acquisition). Hand-logged. Run 8 = depth across
under-sampled categories (breakfast, dietary-fat, single-food dairy, sugar-behaviour) + a marketing-
heterodox slot (collagen). Both R17 named-figure poles already sampled (low-carb run 6, plant-based run 7).

**(1) Queries.** (a) `is breakfast the most important meal of the day belief skipping breakfast weight
gain`; (b) `does eating fat make you fat low-fat diet belief`; (c) `is sitting the new smoking sedentary
behaviour independent risk`; (d) `is sugar addictive like a drug belief evidence`; (e) `do collagen
supplements improve skin joints hair evidence`; (f) `is dairy inflammatory bad for you belief milk`.

**(2) Results (belief confirmed widely-held + representative source).** (a) Harvard Health / Cleveland
Clinic — "skipping causes weight gain exceeds the scientific evidence", RCTs null; (b) Harvard Chan /
Examine — "fat doesn't make you fat, excess calories do" (search also surfaced the low-carb rebuttal —
already refuted run 6); (c) NewsMedical / TheConversation — "sitting is the new smoking" (DEDUP-SKIP,
see 3); (d) NCBI/DSM-5 reviews — contested, sugar reward != clinical addiction, rat bingeing only under
intermittent access; (e) Harvard Health / NatGeo — early evidence (skin hydration/elasticity, OA pain),
hair thin, "hype ahead of science"; (f) IFIC / Arthritis Foundation — not inflammatory for most healthy
people (2017 review of 52 studies: some anti-inflammatory; yogurt best). No zero-hit queries.

**(3) Adjudication (which beliefs entered + why).** SELECTED (a),(b),(d),(e),(f). DEDUP-SKIP (c) sitting-
is-the-new-smoking: a COMPLETED ledger analysis already covers it (maintainer challenge 2026-08-18 —
sitting IS a distinct near-independent risk, magnitude calibrated against the "new smoking" overstatement)
+ held page [[Sedentary Behaviour and Chronic Disease Risk]] -> true skip (anti-flip-flop), REPLACED by
(f) dairy-is-inflammatory/bad ([[Dairy and Cardiometabolic Health]] hit -> a REFUTE candidate to record).
No target ratio curated. Selection-phase note: runs 6-8 (DEPTH) target contested/heterodox/marketing
beliefs, so they skew refute/gap; runs 1-5 (DISPERSION) hit more mainstream-confirmed beliefs (several
CONFIRMs) — a property of the SELECTION phase, transparently flagged, NOT a fabric-quality claim.

**(4) Acquisition-requested.** NONE fetched. TWO queue rows: `[belief-harvest: sugar-addiction]` (a
sugar/sweet-taste -> addiction-criteria / neuro-reward review — the fabric holds sugar's dental+SSB harms
but no addiction position) and `[belief-harvest: collagen-supplements]` (a hydrolysed-collagen -> skin
elasticity/hydration + OA joint-pain SR/MA; emerging, low-quality). Named gaps, no `[AWAITS]` handle yet.

## [2026-08-22] SELECTION RECORD — belief-harvest run 9 (DISPERSION — under-sampled categories)

Run 9 (belief-harvest). Category spread targeted the R17-flagged under-sampled lanes: hormonal/endocrine,
drugs-as-alternative, exercise-programming, plus a popular-diet and a sleep belief. No named-figure
heterodox slot this run (both poles sampled runs 6-7; the \~1/5 lane is a cap, not a quota).

**(1) Queries.** (a) `menopause HRT dangerous causes breast cancer belief women avoiding hormone therapy`;
(b) `Ozempic Wegovy you regain all the weight when you stop dangerous side effects belief`; (c) `you must
lift heavy train to failure to build muscle bodybuilding belief`; (d) `keto diet burns more fat metabolic
advantage than other diets belief low carb`; (e) `some people only need five hours of sleep thrive short
sleeper genetic belief`. Five swapped-out candidates were dedup-caught BEFORE search (see 3).

**(2) Results (belief confirmed widely-held + representative source).** (a) Maven/BCRF/CancerResearchUK —
HRT-breast-cancer fear widespread; FDA removed the breast-cancer black-box warning early 2026 as
over-stated; WHI tested one synthetic formula in older women, rarely prescribed today; progestin > body-
identical progesterone for risk. (b) ScientificAmerican/Sutter/HenryFord — "regain all the weight on
stopping" widely held; STEP-1 extension regained \~two-thirds, but a 2026 real-world study found \~0.5%
regain (many restart/transition); drugs designed as lifelong; robust harm is GI. (c) StrengthLog/Jefit/
Equinox — "train to failure / lift heavy or no gains" is the gym-culture default; failure NOT required,
close-to-failure suffices, failure's edge is load-specific (<60% 1RM). (d) IncheckFit/Healthline — "keto
burns more fat / metabolic advantage" is a keto-evangelist staple; Hall metabolic-ward isocaloric refutes
it (EE +57 kcal/d but fat-loss RATE slowed); real-world edge is modest + satiety-mediated. (e) UCSF/CNN/
DocParsley — "some people thrive on 5h" widespread; DEC2/ADRB1/NPSR1 true short sleepers are REAL but
"exceptionally rare... almost never the reason you are running on five hours." No zero-hit queries.

**(3) Adjudication (which beliefs entered + why).** SELECTED (a)-(e), all clean-novel vs the ledger +
fabric + Processed list. DEDUP-SWAPPED-OUT (caught pre-search, TRUE ledger/Processed skips, anti-flip-
flop): sauna (row 1178, GAP), multivitamin (row 1163, REFUTE), cold-plunge (row 1179, GAP), weekend
catch-up sleep (Processed, run 3), TRT/testosterone (adjacent to row 1172 + HRT belief 1 this run) —
each replaced by a clean-novel belief. Belief 2 (GLP-1) is a DISTINCT sub-claim of the earlier GLP-1
adjudication (row 1175, "GLP-1 is cheating"): row 1175 was the moral/agency framing; belief 2 is the
regain-on-stopping + danger framing, backed by [[GLP-1 Non-Cardiometabolic Effects and Safety]] (Yang
2026 umbrella, ingested since) + the Wilding-withdrawal fabric — legitimately re-testable, distinction
noted. No target ratio curated.

**(4) Acquisition-requested.** NONE fetched. ONE queue row: `[belief-harvest: short-sleeper-genetics]`
(a DEC2/ADRB1/NPSR1 natural-short-sleeper phenotype source — the fabric holds the population sleep-
duration dose-response but takes no position on the rare genetic-short-sleeper subgroup, a route-(b)
effect-modification gap). Named gap, no `[AWAITS]` handle yet.

## [2026-08-22] SELECTION RECORD — belief-harvest run 10 (DISPERSION — 5 novel categories)

Run 10 (belief-harvest). Category spread targeted five distinct lanes (diet-pattern · exercise-
programming · sleep · supplement · metabolism) to avoid re-fishing the now-crowded macro/GLP-1 pools.
No named-figure heterodox slot this run (the \~1/5 lane is a CAP not a quota; spent runs 6-9). The
run is GAP-heavy by honest selection — after the mainstream-confirmable beliefs deduped out as
already-adjudicated, the novel-vs-fabric residue is dominated by unheld corners. Ratio DESCRIPTIVE,
never curated: 0 CONFIRM : 1 REFINE : 0 REFUTE : 4 GAP : 0 OUT.

**(1) Queries.** (a) `gluten free healthier without celiac disease belief avoid gluten`; (b) `stretching
before exercise prevents injury warm up belief`; (c) `alcohol nightcap helps you sleep belief drink
before bed`; (d) `apple cider vinegar lowers blood sugar weight loss belief`; (e) `small frequent meals
grazing boost metabolism eat more often belief`. Two candidates were dedup-caught BEFORE search (see 3).

**(2) Results (belief confirmed widely-held + representative source).** (a) Healthline/BeyondCeliac/
Harvard — gluten-free-is-healthier is widespread (\~20-30% have tried it undiagnosed); public evidence
(UNHELD here) is no non-celiac benefit + a fibre/micronutrient downside of the diet. (b) Mayo/NASM/
Healthline — pre-exercise static-stretch-prevents-injury is the default coaching belief; the SR signal
(UNHELD) is that static stretching does not reduce injury and may transiently cut power, dynamic warm-up
favoured. (c) SleepFoundation/Cleveland/Healthline — the nightcap belief is common; alcohol speeds onset
but suppresses REM/deep sleep and fragments the back half (UNHELD, not asserted). (d) Healthline/
MedicalNewsToday — ACV-lowers-blood-sugar/aids-weight is a wellness staple; evidence is small-n/short-
horizon, a modest T2D fasting-glucose signal + weak short-lived appetite effect (UNHELD -> INSUFFICIENT,
not "works"). (e) Healthline/BritishHeartFoundation/Examine — grazing-boosts-metabolism is a persistent
diet-culture belief; the HELD isocaloric principle (TRE 12-month null, Liu n=139) adjudicates it — meal
pattern is not a weight-independent metabolic lever. No zero-hit queries.

**(3) Adjudication (which beliefs entered + why).** SELECTED (a)-(e), all clean-novel vs the ledger +
fabric + Processed list. DEDUP-SWAPPED-OUT (caught pre-search, TRUE ledger/Processed skips, anti-flip-
flop): salt-raises-blood-pressure (the fabric holds the WHO sodium->BP dose-response — a mainstream
CONFIRM already covered, not novel) and 5-a-day / fruit-and-veg (ESC fruit/veg->mortality is held, the
plateau exemplar) — each swapped for a clean-novel belief. NOTE the first dedup grep used `grep -iE`
with `\|` (a literal backslash-pipe under -E, false-zero on all 5 including salt/BP which the fabric
plainly holds); re-run with bare `|` alternation + positive control (4 known BP pages surfaced) exposed
the two true skips. No target ratio curated — the 4:1 GAP:REFINE split is what honest novel selection
returned, not a tuned figure.

**(4) Acquisition-requested.** NONE fetched (all four GAPs are named acquire-targets, gold-gated,
routed not pulled). FOUR queue rows in `ingest-queue.md` BELIEF-HARVEST GAPS: `gluten-nonceliac`,
`stretching-injury-prevention`, `alcohol-sleep-quality`, `acv-glycemia-weight` — each a public belief
the fabric cannot yet adjudicate. ONE weave signal (`WS-005`, grazing meal-frequency refinement
UNSURFACED -> `pending-intersections.md`). No `[AWAITS]` handles yet (no candidate source registered).

## [2026-08-22] SELECTION RECORD — belief-harvest run 11 (DISPERSION — under-covered categories)

Run 11 (belief-harvest). Channel = WebSearch (no auto-log; hand-logged). Category spread targeted five
under-covered lanes (supplement · single-food/marketing · gut · exercise-programming · metabolism-PA),
avoiding the crowded macro/GLP-1/sleep pools. No named-figure heterodox slot (the \~1/5 lane is a CAP not
a quota; spent runs 6-9). REFINE-heavy by honest selection — this run's novel beliefs happened to land on
WELL-HELD fabric (4 of 5 have a claim page), the honest contrast to run 10's GAP-heavy thin-area batch.
Ratio DESCRIPTIVE, never curated: 1 CONFIRM : 3 REFINE : 0 REFUTE : 1 GAP : 0 OUT.

**(1) Queries.** (a) `everyone should take vitamin D supplement prevent disease belief`; (b) `organic
food healthier more nutritious than conventional belief`; (c) `probiotic supplement improves gut health
general health belief`; (d) `muscle soreness DOMS caused by lactic acid belief no pain no gain`; (e) `you
can't outrun a bad diet exercise alone weight loss belief`.

**(2) Results (belief confirmed widely-held + representative source).** (a) TIME/Mayo Clinic Proceedings/
Columbia/Endocrine Society 2024 — universal vitamin-D-for-disease-prevention is a default wellness belief;
the deficiency-vs-repletion distinction is decisive (held: VITAL null in the replete). (b) Stanford
\~250-study review/Mayo/Baranski/NutritionFacts — organic-is-more-nutritious is widespread; measured
nutrient differences small and of unproven outcome relevance, pesticide-residue the real difference
(held: [[Organic vs Conventional Food]]). (c) Harvard Nutrition Source/AGA/PMC RCT SR-MA — probiotics-for-
general-gut-health is a supplement-aisle staple; benefit is strain-and-indication-specific (held:
[[Gut Microbiome and Health]], WGO 2023). (d) Pfizer/Boston Sports Med/kingsportstraining — DOMS-is-
lactic-acid + soreness-means-good-workout is default gym lore; lactic-acid theory long refuted (UNHELD by
the fabric — a genuine gap). (e) AHA/BJSM editorial/Healthline — can't-outrun-a-bad-diet is a widely
repeated (and correct) slogan; held with better warrant (compensation mechanism, [[Exercise Energy Compensation]]). No zero-hit queries.

**(3) Adjudication (which beliefs entered + why).** SELECTED (a)-(e), all clean-novel vs the ledger +
fabric + Processed list. Dedup found FABRIC hits for (a)(b)(c)(e) pre-adjudication — these are CONFIRM/
REFINE candidates, NOT silent skips (only a ledger/Processed hit is an anti-flip-flop skip). The one
adjacent ledger row on organic (deliverable-critique #29) is a welfare-axis labelling point, not the core
health claim, so the core belief is freshly adjudicated. No belief swapped to manufacture a ratio — the
1:3:0:1:0 split is what honest novel selection on under-covered categories returned.

**(4) Acquisition-requested.** NONE fetched (the one GAP is a named acquire-target, gold-gated, routed
not pulled). ONE queue row in `ingest-queue.md` BELIEF-HARVEST GAPS: `doms-soreness-marker` (DOMS-etiology
+ soreness-as-adaptation-marker SR — the fabric holds no exercise-soreness position). ONE weave signal
(`WS-006`, outrun-a-bad-diet findability — add lay-searchable aliases to [[Exercise Energy Compensation]]
-> `pending-intersections.md`). No `[AWAITS]` handles yet (no candidate source registered).
- [2026-08-22] openalex search "statin nocebo muscle symptoms n-of-1 blinded trial" -> 0 hits: (none)
- [2026-08-22] openalex search "dietary protein intake renal function healthy adults meta-analysis" -> 0 hits: (none)
- [2026-08-22] openalex search "resistance training body composition muscle hypertrophy women meta-analysis" -> 0 hits: (none)
- [2026-08-22] openalex search "statin nocebo" -> 8 hits: https://doi.org/10.1002/jcsm.12960; https://doi.org/10.1093/eurheartj/ehab358; https://doi.org/10.1080/14740338.2019.1615053; https://doi.org/10.1161/circoutcomes.120.007480; https://doi.org/10.1016/s0140-6736(17)31163-7
- [2026-08-22] openalex search "n-of-1 statin side effects" -> 4 hits: https://doi.org/10.1056/nejmc2031173; https://doi.org/10.1162/99608f92.abc57f1b; https://doi.org/10.1056/nejm-jw.na53279; https://doi.org/10.1056/nejm-jw.na52818
- [2026-08-22] openalex search "high protein diet kidney function" -> 8 hits: https://doi.org/10.1016/j.cbi.2015.08.003; https://doi.org/10.1016/j.etap.2015.01.008; https://doi.org/10.1080/15502783.2023.2236053; https://doi.org/10.1017/s2040174416000398; https://doi.org/10.1139/apnm-2016-0301
- [2026-08-22] openalex search "resistance training women muscle" -> 8 hits: https://doi.org/10.1007/s11357-015-9870-1; https://doi.org/10.3390/ijerph18136762; https://doi.org/10.1007/s00421-016-3344-8; https://doi.org/10.1519/jsc.0000000000002847; https://doi.org/10.3390/nu10050563
- [2026-08-22] openalex search "changes in kidney function protein diets" -> 1 hits: https://doi.org/10.1093/jn/nxy197
- [2026-08-22] openalex search "sex differences resistance training" -> 6 hits: https://doi.org/10.1519/jsc.0000000000003521; https://doi.org/10.3945/ajcn.116.140780; https://doi.org/10.1007/s40279-020-01388-4; https://doi.org/10.14814/phy2.12834; https://doi.org/10.3389/fphys.2018.01480
- [2026-08-22] openalex search "vitamin C common cold" -> 6 hits: https://doi.org/10.1002/14651858.cd000980.pub4; https://doi.org/10.1155/2018/5813095; https://doi.org/10.3389/fimmu.2020.574029; https://doi.org/10.1155/2018/1837634; https://doi.org/10.1136/bmjmilitary-2019-001384
- [2026-08-22] openalex search "linoleic acid inflammatory markers" -> 4 hits: https://doi.org/10.1039/c7fo00433h; https://doi.org/10.1093/ajcn/nqz130; https://doi.org/10.1038/s41430-017-0048-z; https://doi.org/10.1080/1028415x.2017.1367130
- [2026-08-22] openalex search "creatine safety efficacy exercise" -> 1 hits: https://doi.org/10.1186/s12970-017-0173-z
- [2026-08-22] openalex fetch "10.1056/nejmc2031173" -> 0 hits: (none)
- [2026-08-22] openalex fetch "10.1002/14651858.cd000980.pub4" -> 0 hits: (none)
- [2026-08-22] openalex fetch "10.1186/s12970-017-0173-z" -> 0 hits: (none)
- [2026-08-22] openalex fetch "10.1093/jn/nxy197" -> 0 hits: (none)
- [2026-08-22] openalex fetch "10.1519/jsc.0000000000003521" -> 0 hits: (none)
- [2026-08-22] openalex fetch "10.1039/c7fo00433h" -> 0 hits: (none)

## [2026-08-22] SELECTION RECORD — belief-harvest Tier-A acquisition (6 gold targets)

Acquisition episode (NOT ingest). Maintainer reviewed the 24 open belief-harvest GAP acquire-targets and
authorized fetching **Tier A** (6): the fear-unblocks-a-big-rock set + cheap canonical gold. Channel =
`openalex.py` (queries auto-logged above this block). All 6 gold-tier, DOIs vetted below.

**(3) Adjudication — SELECTED (6), each the canonical gold source for its gap:**
- `statin-nocebo` -> **SAMSON** `10.1056/nejmc2031173` (Wood, NEJM 2020; n-of-1 RCT, the landmark statin-
  nocebo trial). Unblocks LDL-lowering (big rock). Feeds WS-004 + the held USPSTF cognition statement.
- `protein-renal` -> **Devries** `10.1093/jn/nxy197` (J Nutr 2018; SR-MA, kidney function does not differ
  by protein level in healthy adults). Unblocks adequate protein (sarcopenia/function).
- `rt-women-hypertrophy` -> **Roberts** `10.1519/jsc.0000000000003521` (JSCR 2020; SR-MA, sex differences
  in RT — women gain similar RELATIVE but less ABSOLUTE size). Unblocks resistance training. OA fallbacks
  noted: `10.1007/s40279-020-01388-4` (Sports Med 2020 MA) + `10.7717/peerj.19042` (PeerJ 2025 MA, OA PDF).
- `vitamin-c-colds` -> **Hemila Cochrane** `10.1002/14651858.cd000980.pub4` (2013; the definitive
  prophylaxis-vs-treatment / regular-vs-therapeutic split). Cheap canonical null.
- `omega6-inflammation` -> **Su** `10.1039/c7fo00433h` (Food Funct 2017; SR-MA, dietary linoleic acid ->
  blood inflammatory markers). NB: the CLA hits (`10.1038/s41430-017-0048-z` etc.) are a DIFFERENT compound
  (conjugated LA) — rejected, not the seed-oil question.
- `creatine-safety` -> **Kreider/ISSN** `10.1186/s12970-017-0173-z` (JISSN 2017 position stand; cites=828).
  The rejected consumer-explainer (`inbox/_rejected/`) was a weak echo of THIS; this is the primary.

DEFERRED at this gate (not fetched): Tier B (wfpb-regression, sauna-Laukkanen, sleep-light, alcohol-sleep,
fasted-cardio; anabolic-window + stretching-injury already in the pipeline — Lauersen 2013 is staged) and
Tier C (fad/small-effect nulls — acv, collagen, cold-plunge, magnesium-sleep, sugar-addiction, hydration,
gluten, spot-reduction, catch-up-sleep, short-sleeper-genetics, doms). Attention-anti-signal held the line.

**(4) Acquisition-requested — ALL 6 FETCH-BLOCKED, routed to maintainer (pause-and-ask, NOT downgraded):**
- `openalex.py fetch`: SAMSON = FETCH-FAIL (NEJM HTTPError, blocks automated pdfdirect); the other 5 =
  PAYWALLED (no OA PDF resolved by OpenAlex, incl. JISSN/Cochrane which are nominally OA).
- Local Playwright (`fetch_browser.py`) tried on the clearest OA one (Kreider JISSN BMC counter/pdf) ->
  returned a 3 KB HTML block page (IP-wall), not the PDF. Deleted; nothing weaker substituted.
- Next rung = Steel (cloud browser for hard IP-walls) OR maintainer-drop to `inbox/`. **Awaiting maintainer
  decision on channel** — no ingest until a real PDF lands. DOIs above are clean + re-fetch-cheap.
- [2026-08-22] openalex fetch "10.7717/peerj.19042" -> 0 hits: (none)
- [2026-08-22] openalex resolve "10.1007/s40279-020-01388-4" -> 1 hits: https://doi.org/10.1007/s40279-020-01388-4

**UPDATE 2026-08-22 (Steel escalation attempted, failed — all channels exhausted).** Maintainer chose
"Steel OA + drop paywalls". Steel connected (sessions released) but `fetch_browser.py --service steel
--download` errored inside the in-page fetch->base64 step on every direct-PDF URL tried (Kreider JISSN
BMC counter/pdf; Kreider PMC5469049 pdf) — a fetcher limitation on binary responses, NOT a paywall. Net:
all three automated channels (openalex OA-resolve, local Playwright, Steel) cannot retrieve a PDF in this
environment. **ALL 6 -> maintainer-drop** (DOIs above). Hand off to `process inbox` once dropped; nothing
downgraded, nothing ingested. Re-fetch is cheap — the DOIs are clean and the adjudication stands.


## [2026-08-22] PROCESS-INBOX INTAKE RECORD (maintainer-drop landed)

The maintainer manually dropped 6 PDFs into `inbox/` after all automated fetch channels failed (the
2026-08-22 Tier-A acquisition + a couple of extras). Mechanical intake — nothing ingested.

**(2) Results — 6 PDFs identified (all clean text, no OCR needed):**
- `NEJMc2031173.pdf` -> Wood - SAMSON Statin Nocebo 2020 (10.1056/NEJMc2031173).
- linoleic-acid/inflammation -> Su - Linoleic Acid Inflammatory Markers 2017 (10.1039/c7fo00433h).
- ISSN creatine position stand -> Kreider - Creatine Safety and Efficacy ISSN Position Stand 2017 (10.1186/s12970-017-0173-z).
- `Robertsetal.2020.Sex-Differences-Meta.pdf` -> Roberts - Sex Differences Resistance Training Meta-Analysis 2020 (JSCR; DOI TBD).
- `document2.pdf` -> Douglas - Vitamin C Common Cold 2005 (PLoS Med; 10.1371/journal.pmed.0020168).
- `nxy197.pdf` -> Devries - Higher Protein Kidney Function Meta-Analysis 2018 (10.1093/jn/nxy197).

**(3) Adjudication:**
- **STAGED (5)** to `raw/binary/papers/`, registry rows added (Su/Wood/Roberts/Douglas; Kreider row pre-existed):
  - Su (gold MA) -> serves `[belief-harvest: omega6-inflammation]`; RCT-MA upgrade of held Johnson 2012 SR (not an echo).
  - Wood/SAMSON (high, rct) -> serves `[belief-harvest: statin-nocebo]` + WS-004 (nocebo half).
  - Kreider (moderate, consensus — sponsor COI, needs tier-override at ingest) -> serves `[belief-harvest: creatine-safety]`.
  - Roberts (high MA) -> candidate for `[belief-harvest: rt-women-hypertrophy]`; peripheral/exercise-programming, route-(b).
  - Douglas (moderate, PLoS Med summary of the Cochrane) -> PARTIALLY serves `[belief-harvest: vitamin-c-colds]`; gold Hemila Cochrane still the upgrade target.
- **DUPLICATE (1)** -> `inbox/_duplicates/`: Devries protein-kidney MA already ingested (in `done/papers/`, source page + [[Protein Intake and Kidney Function]] exist).

**(4) Acquisition-requested:** none — all already fetched (maintainer-drop). The Tier-A maintainer-drop
loop is now CLOSED (SAMSON/Su/Kreider landed). Ingest is downstream (plan-queue -> ingest-seq); nothing ingested here.
- [2026-08-22] openalex search "Vitamin C for preventing and treating the common cold systematic review" -> 0 hits: (none)
- [2026-08-22] openalex resolve "10.1002/14651858.CD000980.pub4" -> 1 hits: https://doi.org/10.1002/14651858.cd000980.pub4


## [2026-08-22] PROCESS-INBOX INTAKE (2nd drop — vitamin-C Cochrane SR)

Maintainer dropped `CD000980.pdf` after the DOI capture. It is the **2004 Douglas/Chalker/Treacy
EDITION** of the Cochrane vitamin-C/common-cold review (base DOI 10.1002/14651858.CD000980), NOT the
2013 Hemila & Chalker `.pub4` (10.1002/14651858.CD000980.pub4) whose DOI I resolved. Still the gold
primary SR (37pp, clean text, 2 chunks) -- a real upgrade over the PLoS Med summary.

- STAGED -> `raw/binary/papers/Douglas - Vitamin C Common Cold Cochrane 2004.pdf`; registry row added
  (gold, systematic-review; version-supersession flagged, prefer .pub4 at ingest).
- The earlier-staged `Douglas - Vitamin C Common Cold 2005` (PLoS Med summary) is now the ratchet ECHO
  of this SR -> registry note marked SUPERSEDED, do not ingest separately. One vitamin-C page owed from
  the Cochrane SR at ingest.
- `.pub4` is OA (verified) and a cheap re-fetch if the current edition is wanted over the 2004 one.
- [2026-08-22] openalex resolve "10.1002/14651858.CD000980.pub4" -> 1 hits: https://doi.org/10.1002/14651858.cd000980.pub4
- [2026-08-22] openalex resolve "10.1002/14651858.CD000980.pub3" -> 1 hits: https://doi.org/10.1002/14651858.cd000980.pub3
- [2026-08-22] openalex search "Vitamin C for preventing and treating the common cold" -> 6 hits: https://doi.org/10.1002/14651858.cd000980.pub4; https://doi.org/10.1155/2018/5813095; https://doi.org/10.1002/14651858.cd000980.pub3; https://doi.org/10.1002/14651858.cd000980.pub2; https://doi.org/10.1371/journal.pmed.0020168

**VERIFY 2026-08-22 (Hemila .pub4 double-check):** maintainer could not find the 2013 Cochrane. Confirmed
existent across 3 sources (OpenAlex work, NCBI idconv, PubMed esummary): Hemila H & Chalker E, "Vitamin C
for preventing and treating the common cold", Cochrane Database Syst Rev 2013 Jan 31; DOI
10.1002/14651858.CD000980.pub4; PMID 23440782; PMCID PMC8078152. Wiley/Cochrane DOI page is PAYWALLED;
free green-OA full text is PMC8078152. DOI given earlier was correct.

**PROCESS-INBOX 2026-08-22 (3rd drop — the .pub4 arrived):** maintainer fetched CD000980-2.pdf =
the CURRENT Hemila & Chalker 2013 Cochrane (.pub4, 95pp, clean text, 4 chunks). Staged as
`Hemila - Vitamin C Common Cold Cochrane 2013` (gold). The 2004 Douglas edition -> moved to inbox/_hold/
(untracked, retained, SUPERSEDED); the Douglas 2005 PLoS summary stays the secondary echo. One vitamin-C
page owed from the Hemila 2013 SR; acquire-target satisfied.
- [2026-08-25] openalex resolve "10.1016/j.clnu.2022.12.010 10.1016/j.clnesp.2022.03.020 10.1016/j.arr.2023.101997 10.1039/d3fo01374j" -> 4 hits: https://doi.org/10.1016/j.clnu.2022.12.010; https://doi.org/10.1016/j.clnesp.2022.03.020; https://doi.org/10.1016/j.arr.2023.101997; https://doi.org/10.1039/d3fo01374j
- [2026-08-25] openalex resolve "10.2337/dc06-0560 10.1056/NEJM200105033441801 10.2337/diacare.20.4.537 10.1093/eurheartj/ehad260" -> 4 hits: https://doi.org/10.2337/dc06-0560; https://doi.org/10.1056/nejm200105033441801; https://doi.org/10.2337/diacare.20.4.537; https://doi.org/10.1093/eurheartj/ehad260
- [2026-08-25] openalex search "soy protein serum lipids meta-analysis meta-analysis" -> 1 hits: https://doi.org/10.1080/10408398.2019.1689097
- [2026-08-25] openalex search "soy protein LDL cholesterol FDA meta-analysis 46 studies" -> 1 hits: https://doi.org/10.1093/jn/nxz020
- [2026-08-25] openalex fetch "10.2337/dc06-0560" -> 0 hits: (none)
- [2026-08-25] openalex fetch "10.1056/NEJM200105033441801" -> 0 hits: (none)
- [2026-08-25] openalex fetch "10.1093/eurheartj/ehad260" -> 0 hits: (none)
- [2026-08-25] openalex fetch "10.1093/jn/nxz020" -> 0 hits: (none)

## [2026-08-25] SELECTION RECORD — 3(a) telos-coverage acquisition (post-Gate-28 lighthouse review)

Triggered by the lighthouse/ratchet/gap review: acquire the genuine NOT-YET-HELD gold/high
landmarks. Scope-tightened against ground truth FIRST — several report-listed targets were
already held or superseded and were NOT searched:

- **Gardner DIETFITS 2018** — already HELD (`done/papers/`); dropped.
- **Goldberg DPPOS 2022** — already HELD (`done/papers/`); dropped.
- **Gijsbers dairy->T2D dose-response 2016** — REJECTED as echo: the held **Mishali 2019**
  (dairy->T2D+CV MA, newer) supersedes it; a newer MA supersedes an older on the same question.
- **EFSA methylmercury 2012** (`efsacontam2012` citekey) — REJECTED: it is the mercury/fish
  report, NOT acrylamide; the fish/methylmercury route-c is already held (Jayedi + EFSA-Seafood),
  and the acrylamide axis is held (Filippini, just freshened). Off-question echo.
- **EASD/DNSG 2023** — already STAGED (`guidelines/`, + a dup in `inbox/_duplicates/`); no acquire.

**SELECTED (genuine gap; gold/high; ratchet-advancer):**

- **Tuomilehto Finnish DPS 2001** `10.1056/NEJM200105033441801` (NEJM) — independent
  lifestyle->T2D-prevention replication of the held Knowler DPP 2002 (58% RRR); a genuine
  type-E independent-backing leg for the diabetes-prevention-by-lifestyle claim. oa=True flag
  but NEJM anti-bot-blocks -> **FETCH-FAIL, maintainer-drop**.
- **Pan Da Qing 1997** `10.2337/diacare.20.4.537` (Diabetes Care) — second independent
  (Chinese IGT) diet/exercise prevention replication; type-E. oa=False -> **maintainer-drop**.
- **Hamman DPP weight-loss mediation 2006** `10.2337/dc06-0560` (Diabetes Care) — per-kg
  weight-loss mediation of DPP prevention (dose-response mechanism, F-refinement of Knowler).
  Landing OA-flag optimistic; PAYWALLED no OA pdf -> **maintainer-drop**.
- **Blanco Mejia soy-protein->serum lipids 2019** `10.1093/jn/nxz020` (J Nutr; 46-study
  FDA-identified MA; 144 cites) — soy->LDL/TC, a DISTINCT question from the held
  soy->hormones/breast-cancer row; surrogate-only (LDL), so bounded marginal value but a clean
  gold. oa=True flag but OUP anti-bot-blocks -> **FETCH-FAIL, maintainer-drop**.
- **SCORE2-Diabetes 2023** `10.1093/eurheartj/ehad260` (Eur Heart J) — the diabetes-stratum
  CV-risk instrument (base SCORE2 excludes diabetes); staged only as `.xml` in `papers/`, need
  the PDF. oa=True flag but OUP anti-bot-blocks -> **FETCH-FAIL, maintainer-drop for the PDF**.

**Drop-pending trio carried from the 2026-08-19 survey (already adjudicated; pure fetch attempt):**
all four resolve gold/high meta-analyses, all `oa=False` (Elsevier ScienceDirect + RSC, which
403-block):

- carb-U spline: **Clinical Nutrition 2022** `10.1016/j.clnu.2022.12.010` -> maintainer-drop.
- weight-regain trajectory: **Machado 2022** `10.1016/j.clnesp.2022.03.020` -> maintainer-drop.
- plant/animal LCD->mortality: **Ghorbani 2023** `10.1016/j.arr.2023.101997` -> maintainer-drop.
- LCD->CVD: **Qin&Bo 2023** `10.1039/d3fo01374j` -> maintainer-drop.

**Acquisition-requested / status:** 0 fetched to `inbox/` (every target paywalled or
anti-bot-blocked); 9 DOIs recorded for **maintainer-drop** (per the pause-and-ask rule — NO
downgrade to a weaker fetchable source). Registry rows already exist (with DOIs) for the
DPP-family + Blanco + SCORE2-Diabetes; the trio are logged here. Nothing ingested. Hand-off:
maintainer drops the 9 PDFs into `inbox/`, then *process inbox* stages them.
- [2026-08-26] openalex resolve "10.1016/S0140-6736(20)30752-2" -> 1 hits: https://doi.org/10.1016/s0140-6736(20)30752-2
- [2026-08-26] openalex fetch "10.1016/S0140-6736(20)30752-2" -> 0 hits: (none)
- [2026-08-26] openalex search "mind-body interventions health outcomes umbrella review" -> 0 hits: (none)
- [2026-08-26] openalex search "complementary medicine umbrella review umbrella review" -> 5 hits: https://doi.org/10.1038/s41562-025-02256-9; https://doi.org/10.47626/1516-4446-2024-3705; https://doi.org/10.1089/jicm.2024.0841; https://doi.org/10.1002/hsr2.2118; https://doi.org/10.37766/inplasy2024.2.0003
- [2026-08-26] openalex search "mind-body umbrella review umbrella review" -> 5 hits: https://doi.org/10.1186/s11556-023-00325-4; https://doi.org/10.1111/wvn.70008; https://doi.org/10.1016/j.imr.2019.05.003; https://doi.org/10.3389/fpsyg.2026.1806563; https://doi.org/10.37766/inplasy2024.4.0044
- [2026-08-26] openalex search "sauna bathing cardiovascular mortality" -> 5 hits: https://doi.org/10.1001/jamainternmed.2014.8187; https://doi.org/10.1186/s12916-018-1198-0; https://doi.org/10.1080/07853890.2017.1387927; https://doi.org/10.1007/s12603-023-1895-1; https://doi.org/10.21203/rs.3.rs-1983038/v1
- [2026-08-26] openalex search "massage therapy pain systematic review systematic review" -> 5 hits: https://doi.org/10.1093/pm/pnw099; https://doi.org/10.2147/ijgm.s50243; https://doi.org/10.1093/pm/pnw100; https://doi.org/10.1093/pm/pnw101; https://doi.org/10.1155/2013/613279
- [2026-08-26] openalex search "lifestyle medicine chronic disease review" -> 4 hits: https://doi.org/10.5281/zenodo.19780701; https://doi.org/10.5281/zenodo.19780702; https://doi.org/10.18502/jabs.v16i2.20876; https://doi.org/10.55248/gengpi.5.0824.2215
- [2026-08-26] openalex fetch "10.1186/s11556-023-00325-4" -> 0 hits: (none)
- [2026-08-26] openalex fetch "10.1093/pm/pnw099" -> 0 hits: (none)

## [2026-08-26] SELECTION RECORD — discovery-generator INDUCTIVE-IMPORT (GBD + landscape umbrellas)

Triggered by the discovery-method work: the four-generator rotation (deductive taxonomy · inductive
umbrella-import · discourse harvest · structural scan). The structural scan (same day) surfaced the
also-rans already in the fabric but is BLIND to zero-toehold areas (massage/sauna/cold/light — 0 fabric
hits); this record is the INDUCTIVE import that reaches them, plus the master cross-domain enumeration.

**SELECTED:**

- **GBD 2019 Risk Factors** `10.1016/S0140-6736(20)30752-2` (Lancet 2020;396:1223; 9825 cites) — the
  master cross-domain hierarchy: 87 risk factors ranked by attributable DALYs (behavioural + metabolic
  + environmental). The single highest-leverage enumeration-ordered-BY-Layer-1 (big rocks first) source
  the fabric can hold; the held Afshin GBD is DIET-risks only, so this is the whole-telos superset, not
  an echo. oa=True flag but **Lancet anti-bot-blocks -> PAYWALLED, maintainer-drop.** DOI recorded.
- **Mind-body exercise -> cognition umbrella** `10.1186/s11556-023-00325-4` (Eur Rev Aging Phys Act
  2023; cites=40; umbrella) — enumerates AND head-to-head ranks the mind-body-movement modalities the
  structural scan surfaced (tai chi / yoga / qigong vs aerobic + resistance) on a patient-important
  outcome (cognition). Closes the tai-chi/yoga/qigong cluster (taxonomy axis 2L) with a gold enumeration.
  oa=True (BMC) -> **FETCHED to `inbox/`**; ready for `process inbox`.
- **Massage therapy on function in pain populations SR+MA** `10.1093/pm/pnw099` (Pain Medicine 2016;
  cites=180; SR+MA) — reaches the #1 confirmed ZERO-TOEHOLD area (massage: 0 fabric hits, the flagship
  unknown-unknown the structural net cannot see). On-telos: massage -> function/pain (patient-important
  QoL outcome). oa=True flag but **OUP anti-bot-blocks -> FETCH-FAIL, maintainer-drop.** DOI recorded.

**DEFERRED:**

- **Sauna -> CV/mortality** — landmark is Laukkanen `10.1001/jamainternmed.2014.8187` (JAMA IM 2015,
  paywalled) and the OA hits (`10.1186/s12916-018-1198-0` etc.) are the SAME single Finnish KIHD cohort
  lineage -> *volume-is-not-independence* bites; NO gold SR/MA surfaced. Recorded as a "not yet" /
  insufficient area (a gold sauna SR may not exist); do NOT acquire a single cohort as if gold. Revisit
  if an independent SR/MA appears.

**REJECTED (0-hit or no gold enumeration):**

- Complementary/integrative umbrellas (`s41562-025-02256-9` autism, `1516-4446-2024-3705` depression,
  `hsr2.2118` male-infertility) — all CONDITION-SPECIFIC, not a broad enumeration of the peripheral
  space; off-question for an import. REJECTED.
- Lifestyle-medicine "pillars" hits (`jabs.v16i2.20876`, `gengpi.5.0824.2215`, two zenodo datasets) —
  all narrative / dataset / weak; no gold enumeration. REJECTED.
- The two `mind-body interventions health outcomes umbrella review` / initial `complementary integrative`
  queries returned 0 — `title.search`-strictness artifacts (every word must hit the title), not
  literature absence; re-run looser recovered the gold hits above.
- [2026-08-26] openalex resolve "10.1080/00031305.2016.1154108 10.1038/d41586-019-00857-9 10.1007/s10654-016-0149-3" -> 3 hits: https://doi.org/10.1080/00031305.2016.1154108; https://doi.org/10.1038/d41586-019-00857-9; https://doi.org/10.1007/s10654-016-0149-3
- [2026-08-26] openalex fetch "10.1007/s10654-016-0149-3" -> 0 hits: (none)
- [2026-08-26] openalex fetch "10.1080/00031305.2016.1154108" -> 0 hits: (none)
- [2026-08-26] openalex fetch "10.1038/d41586-019-00857-9" -> 0 hits: (none)

## [2026-08-26] SELECTION RECORD — CI-interpretation / compatibility-interval (WS-011, challenge 2026-08-26b)

Gap: challenge-2026-08-26b Facet A routed a WS-011 concept page (CI as *compatibility interval*;
null-inclusion is not null-evidence). Target sources named by the maintainer + the detailed OA companion.
All three are **method/context tier** (statistics epistemology, not domain evidence — gold-gate exempt),
mutually reinforcing not echoes: institutional consensus / detailed misinterpretation catalog / the
compatibility-interval reform manifesto.

- **SELECTED + FETCHED** `Greenland - P Values Confidence Intervals Guide 2016` (DOI 10.1007/s10654-016-0149-3;
  Eur J Epidemiol; Greenland/Senn/Rothman/Carlin/Poole/Goodman/Altman; cites 3220; OA Springer) ->
  `inbox/` (452 KB, 14 pp, clean text). **The load-bearing one for WS-011** — the 25-misinterpretations
  catalog directly covers reading a CI and the significance-dichotomization error.
- **SELECTED + FETCHED** `Amrhein - Retire Statistical Significance 2019` (DOI 10.1038/d41586-019-00857-9;
  Nature Comment "Scientists rise up against statistical significance"; cites 3080; OA) -> `inbox/`
  (2728 KB, 3 pp). The rename-to-*compatibility-interval* + read-the-whole-interval argument the user
  invoked. (Short Comment, not a research article — cite for the reform framing, not for a magnitude.)
- **SELECTED, BLOCKED -> MAINTAINER-DROP** `Wasserstein - ASA Statement P Values 2016`
  (DOI 10.1080/00031305.2016.1154108; The American Statistician; Wasserstein & Lazar; cites 6252; OA flag
  set but Taylor & Francis anti-bot-blocks the fetch — HTTPError, as the fetch-reality note predicts).
  Identified, not lost. **ACTION: maintainer drop the PDF into `inbox/`** (free at
  tandfonline.com/doi/full/10.1080/00031305.2016.1154108). NOT downgraded to a fetchable substitute
  (acquisition-pause-and-ask rule).

Nothing ingested. Next: `process inbox` stages the two fetched + registers rows; WS-011 then compilable
once the CI-interpretation evidence is held (do NOT assert Greenland/Amrhein/ASA as findings until ingested).
- [2026-08-27] openalex search "sauna bathing cardiovascular mortality systematic review" -> 0 hits: (none)
- [2026-08-27] openalex search "sauna cardiovascular meta-analysis" -> 2 hits: https://doi.org/10.1093/eurjcn/zvab050; https://doi.org/10.1093/eurjcn/zvab049
- [2026-08-27] openalex search "sauna health systematic review" -> 0 hits: (none)
- [2026-08-27] openalex search "sauna bathing" -> 8 hits: https://doi.org/10.1016/s0002-9343(00)00671-9; https://doi.org/10.1001/jamainternmed.2014.8187; https://doi.org/10.1016/j.jsams.2006.06.009; https://doi.org/10.1016/j.mayocp.2018.04.008; https://doi.org/10.3402/ijch.v65i3.18102
- [2026-08-27] openalex resolve "10.1001/jamainternmed.2014.8187 10.1155/2018/1857413" -> 2 hits: https://doi.org/10.1001/jamainternmed.2014.8187; https://doi.org/10.1155/2018/1857413
- [2026-08-27] openalex fetch "10.1155/2018/1857413" -> 0 hits: (none)
- [2026-08-27] openalex fetch "10.1093/ageing/afw212" -> 0 hits: (none)
- [2026-08-27] openalex search "sauna mortality meta-analysis" -> 0 hits: (none)
- [2026-08-27] openalex search "passive heat therapy cardiovascular" -> 6 hits: https://doi.org/10.14814/phy2.15699; https://doi.org/10.1152/ajpregu.00012.2025; https://doi.org/10.1139/apnm-2024-0406; https://doi.org/10.1113/ep093511; https://doi.org/10.1186/s40814-023-01314-1
- [2026-08-27] openalex resolve "10.1093/eurjcn/zvab050" -> 1 hits: https://doi.org/10.1093/eurjcn/zvab050
- [2026-08-27] openalex resolve "10.1093/eurjcn/zvab049" -> 1 hits: https://doi.org/10.1093/eurjcn/zvab049

## [2026-08-27] SELECTION RECORD — sauna / heat exposure (refill; verified-unheld domain)

Refill pass after the staged queue drained. Sauna confirmed genuinely unheld (`grep -ic sauna
wiki/meta/sources.md` = 0; 0 fabric pages). Verdict: **a real unheld domain, but a LOW-YIELD refill
target — DO NOT downgrade to fetch something.** The domain's structure, established this pass:
- **Hard-outcome gold evidence = a single Finnish cohort** (Laukkanen / KIHD, Kuopio) — a built-in
  independence + transportability caveat (one team, one Nordic sauna-culture population); the JAMA
  mortality landmark and the Age&Ageing dementia paper are both this cohort.
- **The only sauna meta-analysis is on an ACUTE SURROGATE** (CV function, not events/mortality),
  paywalled, and barely cited (zvab050, cites=1).
- **Everything acquirable-now is weak** — mechanism / acute-physiology / pilot-feasibility / same-group
  narrative review. No gold hard-outcome SR exists that is also fetchable.
- **Every gold-ish source is fetch-blocked** (JAMA paywall, OUP anti-bot, dead Hindawi link) -> the two
  worth having are maintainer-drops, not downgrades.

Layer-1 note: sauna is a **peripheral lever, low expected rank** (heavily discussed, small-to-uncertain
effect on hard outcomes, single-cohort backing). Recorded so a future pass does not re-discover it cold.

**Candidates + adjudication:**

- **SELECTED, BLOCKED -> MAINTAINER-DROP** `Laukkanen - Sauna Bathing Fatal CV All-Cause Mortality 2015`
  (DOI 10.1001/jamainternmed.2014.8187; JAMA Intern Med; Laukkanen/KIHD; cites 288; **oa=False**). The
  landmark hard-outcome cohort (2315 men, frequency-graded sauna -> fatal CVD + all-cause mortality). The
  ONE source worth holding if the domain is opened. Paywalled — identified, not lost. **ACTION: maintainer
  drop the PDF into `inbox/`** if this domain is wanted. NOT downgraded (pause-and-ask rule).
- **SELECTED, BLOCKED -> MAINTAINER-DROP (weak tier — optional)** `Hussain - Regular Dry Sauna Bathing
  Clinical Effects SR 2018` (DOI 10.1155/2018/1857413; Evid-Based Complement Alternat Med / Hindawi;
  OA-flagged but the `downloads.hindawi.com` PDF URL is **dead** — HTTPError). Gold-by-design (SR) but a
  **demoted venue** (ECAM/Hindawi — quality-flagged, many retractions), so a lower-tier SR at best.
  Maintainer-drop only if the domain is opened AND no better SR surfaces; otherwise DEFER.
- **DEFERRED** `Laukkanen - Sauna Bathing Dementia Alzheimer Cohort 2016` (DOI 10.1093/ageing/afw212;
  Age & Ageing; OUP anti-bot HTTPError). Same KIHD cohort as the mortality landmark -> **not independent**;
  attaches to the held dementia fabric only as a facet, not a gold opener. Drop later if dementia coverage
  is deepened.
- **DEFERRED** `Acute short-term efficacy of sauna treatment on cardiovascular function MA 2021`
  (DOI 10.1093/eurjcn/zvab050; Eur J Cardiovasc Nurs; MA; oa=False; cites=1). The only sauna MA, but on an
  **acute surrogate** (CV function), not a patient-important outcome — off the Layer-1 target. Surrogate +
  paywalled + uncited -> not worth a maintainer-drop now.
- **REJECTED** Mayo Clin Proc 2018 narrative review (DOI 10.1016/j.mayocp.2018.04.008) — same Finnish
  group, **narrative (moderate tier), not independent**; would echo the cohort, not corroborate it.
- **REJECTED** the "passive heat therapy" reframing hits (phy2.15699, ajpregu.00012.2025, ep093511,
  s40814-023-01314-1, the CU dissertation) — all **mechanism / acute-physiology / pilot-feasibility**,
  none a hard-outcome gold SR. Off-tier for a fabric opener.
- **ZERO-HIT queries (attributed):** `sauna ... systematic review`, `sauna health systematic review`,
  `sauna mortality meta-analysis` all returned 0 -> **`title.search` strictness** (every word required in
  the title), NOT literature absence; the looser `sauna bathing` / `sauna cardiovascular meta-analysis`
  recovered the real hits above.

**Nothing fetched, nothing ingested** (research does not ingest). Net: this refill pass produced **no
gold acquirable-now source**; the domain's one worth-having source (JAMA mortality) is a maintainer-drop
decision. Awaiting the maintainer's call on whether to open a peripheral, single-cohort, block-walled
domain vs. spend the refill elsewhere.
- [2026-08-27] openalex search "Consumption of dairy foods and diabetes incidence dose-response meta-analysis" -> 1 hits: https://doi.org/10.3945/ajcn.115.123216
- [2026-08-27] openalex search "Whole dairy matrix nutritional health effects" -> 0 hits: (none)
- [2026-08-27] openalex search "Inorganic nitrate beetroot juice blood pressure meta-analysis" -> 1 hits: https://doi.org/10.3945/jn.112.170233
- [2026-08-27] openalex search "Disinfection byproducts bladder cancer pooled analysis" -> 0 hits: (none)
- [2026-08-27] openalex search "mercury methylmercury in food EFSA CONTAM 2012" -> 0 hits: (none)
- [2026-08-27] openalex search "Nutrition Therapy for Adults With Diabetes Consensus Report 2019" -> 0 hits: (none)
- [2026-08-27] openalex search "Whole dairy matrix or single nutrients assessment of health effects" -> 1 hits: https://doi.org/10.3945/ajcn.116.151548
- [2026-08-27] openalex search "Accelerometer-measured weekend warrior physical activity cardiovascular" -> 1 hits: https://doi.org/10.1016/j.diabres.2025.112948
- [2026-08-27] openalex search "Nutrition therapy adults diabetes prediabetes consensus report" -> 2 hits: https://doi.org/10.2337/dci19-0014; ?
- [2026-08-27] openalex search "Evidence-based European recommendations dietary management diabetes 2023" -> 0 hits: (none)
- [2026-08-27] openalex search "FINGER multidomain intervention extended follow-up dementia incidence" -> 0 hits: (none)
- [2026-08-27] openalex search "High-Dose Omega-3 Fatty Acids Corn Oil Major Adverse Cardiovascular STRENGTH" -> 3 hits: https://doi.org/10.3410/f.739037636.793581405; https://doi.org/10.3410/f.739037636.793581318; https://doi.org/10.3410/f.739037636.793581123
- [2026-08-27] openalex search "Effects of low sodium diet versus high sodium diet on blood pressure renin aldosterone catecholamines cholesterol" -> 3 hits: https://doi.org/10.1002/14651858.cd004022.pub4; https://doi.org/10.1002/14651858.cd004022.pub3; https://doi.org/10.1002/14651858.cd004022.pub5
- [2026-08-27] openalex search "omega-3 carboxylic acids cardiovascular high risk statin randomized STRENGTH Nissen" -> 0 hits: (none)
- [2026-08-27] openalex search "Urinary sodium potassium excretion mortality cardiovascular events PURE" -> 0 hits: (none)
- [2026-08-27] openalex search "Associations of urinary sodium excretion with cardiovascular events individuals with and without hypertension" -> 3 hits: https://doi.org/10.1016/s0140-6736(16)30467-6; https://doi.org/10.48550/arxiv.1606.06594; https://doi.org/10.3410/f.726377092.793535892
- [2026-08-27] openalex search "Effect of High-Dose Omega-3 Fatty Acids vs Corn Oil on Major Adverse Cardiovascular Events in Patients at High Cardiovascular Risk The STRENGTH Randomized Clinical Trial" -> 3 hits: https://doi.org/10.3410/f.739037636.793581405; https://doi.org/10.3410/f.739037636.793581318; https://doi.org/10.3410/f.739037636.793581123
- [2026-08-27] openalex search "Evaluating the Association Between Low-Density Lipoprotein Cholesterol Reduction Relative Absolute Effects of Statin Treatment" -> 1 hits: https://doi.org/10.1001/jamainternmed.2022.0134
- [2026-08-27] openalex search "statins effect all-cause mortality life-years gained randomized clinical trials" -> 0 hits: (none)
- [2026-08-27] openalex resolve "10.1001/jama.2020.22258" -> 1 hits: https://doi.org/10.1001/jama.2020.22258
- [2026-08-27] openalex resolve "10.1001/jama.2020.22258" -> 1 hits: https://doi.org/10.1001/jama.2020.22258
- [2026-08-27] openalex resolve "10.1002/14651858.cd004022.pub5" -> 1 hits: https://doi.org/10.1002/14651858.cd004022.pub5
- [2026-08-27] openalex resolve "10.1016/s0140-6736(16)30467-6" -> 1 hits: https://doi.org/10.1016/s0140-6736(16)30467-6
- [2026-08-27] openalex fetch "10.1001/jama.2020.22258" -> 0 hits: (none)
- [2026-08-27] openalex fetch "10.1002/14651858.cd004022.pub5" -> 0 hits: (none)
- [2026-08-27] openalex fetch "10.1016/s0140-6736(16)30467-6" -> 0 hits: (none)

## [2026-08-27] SELECTION RECORD — disagreeing-golds acquisition (coverage-gap discovery pass)

Targets from the coverage-gap discovery fan-out (AWAITS-harvest + GBD-diff + disagreeing-gold streams;
all three subagent reports parent-verified). These three complete **live type-D tensions the fabric
already named by name** — the highest-value new acquisitions the pass surfaced. All THREE confirmed
`oa=True` in OpenAlex, but all three **fetch-blocked** at the built-in + local-Playwright rungs
(publisher anti-bot / entitlement walls, NOT literature absence). Steel (last rung) not burned — these
are OA and trivially maintainer-fetchable; pause-and-ask is the clean path. NOT downgraded.

- **SELECTED, BLOCKED -> MAINTAINER-DROP** `Nicholls - STRENGTH Omega-3 Cardiovascular 2020`
  (DOI 10.1001/jama.2020.22258; JAMA; Nicholls first author / Nissen senior; cites 1013; oa=True but
  jamanetwork.com articlepdf **HTTP 403** to both requests + headless Chromium). The clean-comparator
  (corn-oil placebo) omega-3 NULL that adjudicates REDUCE-IT's mineral-oil-control controversy —
  completes the type-D on `Vitamin and Mineral Supplements for Disease Prevention` (which names STRENGTH
  explicitly). Hard CV outcome (MACE). **Highest value.** Free PDF at
  jamanetwork.com/journals/jama/fullarticle/2773120.
- **SELECTED, BLOCKED -> MAINTAINER-DROP** `Graudal - Low Versus High Sodium Diet Cochrane 2020`
  (DOI 10.1002/14651858.cd004022.pub5; Cochrane Database Syst Rev; cites 130; oa=True but the
  cochranelibrary.com `/pdf/full` endpoint returns a **Cloudflare HTML interstitial**, not the PDF, to
  both request paths). The GOLD sodium-J-curve / harm-of-low pole (renin-aldosterone-catecholamine-lipid
  responses + modest BP effect) that `Sodium Intake and Blood Pressure` flags in its
  "## The J-curve — named as the reason for the review, then never adjudicated" section (names Graudal).
  Big-rock (sodium->BP). Free at cochranelibrary.com (DOI above).
- **SELECTED, BLOCKED -> MAINTAINER-DROP** `Mente - PURE Sodium Cardiovascular Events 2016`
  (DOI 10.1016/s0140-6736(16)30467-6; Lancet; cites 489; oa=True via green-OA handle
  hdl.handle.net/10379/16625, which **did not serve** to requests or headless Chromium — redirect/
  click-through). The landmark J-curve **hard-outcome cohort** (urinary sodium -> CV events, the low-arm
  harm signal); complements Graudal (BP/biomarker-weighted) on the events arm. `Sodium Intake and Blood
  Pressure` names PURE directly. NOTE: we hold OTHER PURE papers (Mente diet-score 2023, Dehghan
  fats-carbs 2017) but NOT this sodium-specific one — same cohort, distinct work, distinct slug.

**ACTION: maintainer drop all three PDFs into `inbox/`** (all OA; DOIs above). Then `process inbox`
stages them; a later sodium/omega-3 weave cashes the two flagged type-D gaps. Do NOT assert
STRENGTH/Graudal/PURE findings until ingested (no-definitive-claims-from-nonfabric).

Zero-hit note: none — all three resolved. Nothing ingested (research does not ingest).
- [2026-08-27] openalex search "chronic kidney disease dietary pattern meta-analysis" -> 1 hits: https://doi.org/10.1186/s12937-020-00661-6
- [2026-08-27] openalex search "chronic kidney disease healthy lifestyle" -> 6 hits: https://doi.org/10.1053/j.ajkd.2014.09.016; https://doi.org/10.1038/hr.2012.186; https://doi.org/10.3390/nu14183787; https://doi.org/10.1186/s12882-022-02837-0; https://doi.org/10.1007/s12199-016-0506-6
- [2026-08-27] openalex search "physical activity chronic kidney disease meta-analysis" -> 5 hits: https://doi.org/10.1007/s10654-022-00961-7; https://doi.org/10.18632/aging.103747; https://doi.org/10.1080/0886022x.2023.2255677; https://doi.org/10.1186/s12982-025-00740-1; https://doi.org/10.21203/rs.3.rs-1739507/v1
- [2026-08-27] openalex search "obesity chronic kidney disease meta-analysis" -> 5 hits: https://doi.org/10.1016/j.kint.2016.12.013; https://doi.org/10.1093/ndt/gfw075; https://doi.org/10.20945/2359-3997000000149; https://doi.org/10.1590/1414-431x202010022; https://doi.org/10.1111/nep.13958
- [2026-08-27] openalex search "modifiable risk factors chronic kidney disease" -> 6 hits: https://doi.org/10.1038/ki.2014.370; https://doi.org/10.1016/j.ypmed.2013.06.010; https://doi.org/10.1111/j.1525-139x.2010.00728.x; ?; https://doi.org/10.1159/000309422
- [2026-08-27] openalex search "chronic kidney disease risk factors umbrella review" -> 0 hits: (none)
- [2026-08-27] openalex search "diet chronic kidney disease umbrella review" -> 1 hits: https://doi.org/10.1093/nutrit/nuae178
- [2026-08-27] openalex fetch "10.1186/s12937-020-00661-6" -> 0 hits: (none)
- [2026-08-27] openalex fetch "10.1007/s10654-022-00961-7" -> 0 hits: (none)
- [2026-08-27] openalex resolve "10.1186/s12937-020-00661-6" -> 1 hits: https://doi.org/10.1186/s12937-020-00661-6
- [2026-08-27] openalex resolve "10.1007/s10654-022-00961-7" -> 1 hits: https://doi.org/10.1007/s10654-022-00961-7

## [2026-08-27] SELECTION RECORD — kidney gap (modifiable-exposure -> CKD; GBD-diff big-rock hole)

Discovery pass on the one genuine big-rock coverage HOLE the GBD lighthouse-diff found: no nucleus on
**modifiable exposure -> CKD incidence/progression** (GBD #9 kidney dysfunction, \~2.4M deaths). Scope-edge
but IN (risk-factor split): diet / activity / weight / smoking -> incident CKD or eGFR-decline slowing is
a lifestyle-prevention question; OUT is prescriber-zone (dialysis, agent selection, drug titration in
established CKD). Target = a gold SR/MA per modifiable lever to anchor a new kidney nucleus.

QUERIES (openalex, --sort cites; auto-logged above): diet/dietary-pattern -> CKD; healthy-lifestyle ->
CKD; physical-activity -> CKD (MA); obesity -> CKD (MA); modifiable-risk-factors CKD; umbrella variants.

- **SELECTED + FETCHED** `He - Dietary Patterns Chronic Kidney Disease Risk SR 2020`
  (DOI 10.1186/s12937-020-00661-6; Nutrition Journal / BMC; He, Ling-Qiong ... Shu, Long; gold SR+MA of
  17 observational studies, 149,958 participants; oa=True) -> `inbox/` (1490 KB, real PDF). The DIET
  lever. NOTE collision: first author **He, Ling-Qiong** is NOT the Feng-J He of
  `He - Salt Reduction Blood Pressure 2013` — carry the given name in `authors:` at staging.
- **SELECTED + FETCHED** `Seidu - Physical Activity Chronic Kidney Disease Risk Meta-Analysis 2023`
  (DOI 10.1007/s10654-022-00961-7; Eur J Epidemiol; Seidu ... Kunutsor ... Khunti, Yates; gold MA of 12
  cohorts, 1,281,727 participants; oa=True) -> `inbox/` (708 KB, real PDF). The PHYSICAL-ACTIVITY lever.
  NOTE: **Setor K. Kunutsor co-authors** (we hold Kunutsor's osteoporosis exercise-safety SR) — a
  shared-author flag: NOT type-E-independent of Kunutsor's other work if ever cross-linked.
- **SELECTED, BLOCKED -> MAINTAINER-DROP (optional)** obesity landmark
  `2017 Kidney Int — obesity predicts onset of CKD` (DOI 10.1016/j.kint.2016.12.013; MA; cites 371;
  oa=False, Elsevier). THE landmark obesity->CKD MA. Lower priority: obesity is already a nucleus (GBD
  BMI); the OA Brazilian substitute (10.1590/1414-431x202010022) is a weaker journal/fewer cites, so NOT
  taken (no-downgrade). Drop only if a dedicated obesity->CKD-incidence facet is wanted.
- **DEFERRED** the low-protein-diet-in-CKD umbrella (10.1093/nutrit/nuae178, oa=False) — progression-in-
  ESTABLISHED-CKD = prescriber-zone-adjacent, off the incidence question; and `Protein Intake and Kidney
  Function` already holds the protein->kidney facet.
- **DEFERRED** the MDPI/Nutrients lifestyle review (10.3390/nu14183787) — narrative/moderate-tier, not a
  gold SR; the He + Seidu golds cover diet + activity better.

Two gold OA MAs fetched (diet + activity), one landmark maintainer-drop optional (obesity). Enough to
anchor a `modifiable exposure -> CKD` nucleus at ingest. Nothing ingested (research does not ingest);
hand off to `process inbox`.

## [2026-08-27] SELECTION RECORD — lighthouse-bibliography-diff (method pilot + candidate harvest)

New discovery method mechanized: `openalex.py refs <DOI>` (BACKWARD = a work's own bibliography, via
`filter=cited_by:`) + `cites <DOI>` (FORWARD = works citing it, via `filter=cites:`), each anti-joined
against the 326 registry DOIs (hits already held -> `known`, hidden) and `--goldish`-filtered to
umbrella/SR/MA/RCT titles. Pilot seeds = our two DOI-bearing broad umbrellas (NNR/WCRF carry no DOI, not
walkable). Nothing acquired in this pass — candidates only; acquisition is the user's pick.

**METHOD FINDING (corrects the prior).** Predicted "backward-walking umbrellas is high-yield"; the pilot
REVERSES it. Direction matters more than seed-type:
- **BACKWARD (refs) = LOW net-new.** An umbrella's bibliography is dominated by (i) methods-section
  citations (Egger's test 57k cites, DerSimonian-Laird, AMSTAR, NutriGrade — pure noise) and (ii) its
  own SUBSUMED constituent MAs (fibre->cancer-site; fish->CHD/stroke/prostate). We deliberately hold the
  umbrella not its parts, so `known=0` throughout — the anti-join does little work AND the constituents
  are mostly ratchet-echoes.
- **FORWARD (cites) = HIGHER, better-targeted net-new.** Newer works citing our gold are either
  SUPERSEDING umbrellas (re-nucleus / F-refinement — "is our incumbent dated?") or ADJACENT-question
  umbrellas. This is the direction that pays.

**CANDIDATE SHORTLIST (all NEW, gold-tier, none held), classified by action-state:**

- **RE-NUCLEUS / staleness-check** (newer gold on a question we already nucleus): sugar umbrella 2023
  (10.1136/bmj-2022-071609, 331 cites) vs held sugar gold; **fibre umbrella 2025**
  (10.1016/j.clnu.2025.06.021) + updated fibre->mortality MA 2023 (10.1016/j.clnu.2023.11.005) vs our
  Veronese 2018 fibre incumbent (now 7 yr old — genuine staleness flag).
- **NEW-NUCLEUS (thin coverage, highest interest)**: the **Schwingshackl food-groups dose-response MA
  series** — T2D (10.1007/s10654-017-0246-y, 814), CHD/stroke/HF (10.1080/10408398.2017.1392288, 713),
  hypertension (10.3945/an.117.017178), all-cause mortality (10.3945/ajcn.117.153148), obesity
  (10.1093/advances/nmy092). Only 2 registry rows mention food-groups; a comparative multi-food-group ->
  outcome dose family is a strong Layer-1-ranking input. Vegetarian-diets umbrella 2020
  (10.1016/j.clnu.2020.02.037; only 1 vegetarian row held).
- **ADJACENT, likely SUBSUMED (check at plan-queue, do not auto-take)**: diet->T2D-incidence umbrella
  2019 (10.1136/bmj.l2368 — 23 T2D-diet rows already); Dietary Inflammatory Index umbrella 2021; handgrip
  umbrella 2020 (we hold Grip Strength and Mortality); SSB umbrella 2024; BP-lowering dietary-patterns
  umbrella 2020.
- **OFF-TELOS noise (drop)**: loneliness / eating-disorders / suicide / eye-disease / social-isolation
  umbrellas surfaced by the forward walk (they cite Veronese as a methods exemplar).

RESIDUAL LIMITATION: goldish + anti-join yields a clean but \~30-60/seed pool still mixed with off-telos
umbrellas + methods papers; the "does it add value" step stays a read (gold-gate passes mechanically;
telos-fit + already-covered-at-nucleus + ratchet do not). Recommend acquiring the Schwingshackl food-group
series + the fibre/sugar staleness pair first; defer the rest to plan-queue.

## [2026-08-27] SELECTION RECORD — umbrella backward-walk, all 15 walkable umbrellas (batch aggregation)

Extended the lighthouse-bib-diff per the maintainer steer ("walk the highest-quality overviews first;
would a MA/SR even cite other MA/SRs?"). MEASURED the synthesis-fraction of a doc's own bibliography
(scratch aggregator over `openalex.py refs`, cross-seed co-citation ranking):

**DATA — % of a document's OpenAlex references that are themselves umbrella/SR/MA (title-heuristic lower
bound):** primary MA (Devries protein-kidney) **12%** · umbrella (Veronese fibre) **42%** · umbrella
(Jayedi fish) **54%** · GBD diet (Afshin) **10%** · GBD alcohol **8%**. CONFIRMS the maintainer's
intuition: a PRIMARY MA cites mostly primary studies (its pooled trials), so backward-walking one yields
sub-gold primaries. Only UMBRELLA REVIEWS (SRs-of-SRs, by construction) cite syntheses at a useful rate.
GBD is a POOR backward target — sparse OpenAlex ref-parsing (35-39 captured vs its true hundreds) AND
low-synthesis (cites cohorts + own methods).

**WALKABILITY SPLIT:** the report-PDF apex bodies the maintainer named (WHO, NICE, SACN, WCRF, NNR) carry
NO DOI and OpenAlex under-parses report reference lists -> NOT backward-walkable via OpenAlex (their
bibliographies would need PDF-mining from `done/`, a separate path). Walkable = the \~15 journal-published
umbrella reviews (+ journal-published guidelines ESC/ACC-AHA/EASL as a mixed second tier).

**BATCH:** walked all 15 walkable umbrella DOIs -> 414 distinct NEW goldish candidates after
registry-DOI anti-join + methods-noise stoplist. **LIMITATION FOUND:** cross-seed co-citation ranking is
CONTAMINATED — SR-methods/tooling papers (RoB2, Rayyan, PROSPERO, funnel-plot, "Ten simple rules for
umbrella reviews", Egger, AMSTAR) co-cite MORE strongly than domain syntheses because every umbrella's
methods section cites them; needed a 30-term stoplist and still leaks a few. AND the anti-join is
DOI-exact -> misses same-trial papers under a different DOI (surfaced the DiRECT 2-yr durability paper
though `Lean - DiRECT T2D Remission 2018` is held).

**STANDOUT NET-NEW (genuinely unheld, telos-central):** the **Schwingshackl food-groups dose-response MA
series** — food-groups -> T2D (10.1007/s10654-017-0246-y, 814) / CHD-stroke-HF (10.1080/10408398.2017.1392288,
713) / all-cause mortality (10.3945/ajcn.117.153148, 605) / hypertension (10.3945/an.117.017178) / obesity
(10.1093/advances/nmy092). A comparative multi-food-group -> outcome DOSE family = a direct Layer-1
intervention-ranking input; only 2 registry rows touch food-groups. RECOMMEND acquire.
**SECONDARY (staleness / plan-queue, not urgent):** sugar umbrella 2023 (10.1136/bmj-2022-071609) +
fibre umbrella 2025 vs held incumbents; diet->T2D umbrella 2019 (10.1136/bmj.l2368, likely subsumed by
Szczerba/Churuangsuk); low-cigarette-dose->CHD MA (10.1136/bmj.j5855, possible Jha F-refinement).
**DROP (off-telos):** MS/Parkinson's environmental-risk umbrellas, Vitamin-D-multiple-outcomes,
insufficient-PA prevalence trends. Nothing acquired this pass.
- [2026-08-27] openalex fetch "10.1007/s10654-017-0246-y 10.1080/10408398.2017.1392288 10.3945/ajcn.117.153148 10.3945/an.117.017178 10.1093/advances/nmy092" -> 0 hits: (none)

## [2026-08-27] ACQUISITION — Schwingshackl food-group dose-response series (from umbrella-walk standout)

Fetching the 5-paper Schwingshackl food-group -> outcome dose-response MA series (surfaced by the umbrella
backward-walk; the Layer-1 ranking-input standout). Escalation ladder run (openalex fetch -> local
Playwright -> Europe PMC / NCBI PMC OA); Steel NOT burned (paused per acquisition discipline).

- **FETCHED** T2D: 10.1007/s10654-017-0246-y -> `inbox/` (real PDF, 555 KB). SELECTED.
- **OA-in-PMC but bot-walled through all free rungs** (Steel-or-maintainer-drop): hypertension
  10.3945/an.117.017178 (PMC5683007, isOA=Y); obesity 10.1093/advances/nmy092 (PMC6416048, isOA=Y).
  NCBI /pdf/ path returns a 20 KB bot-wall HTML; PMC OA fcgi service 404s. Recoverable via Steel.
- **NOT OA anywhere** (maintainer-drop; the OpenAlex OA flag was a publisher soft-wall): CHD/stroke/HF
  10.1080/10408398.2017.1392288 (Tandfonline; EuropePMC isOA=N); all-cause mortality
  10.3945/ajcn.117.153148 (ScienceDirect; EuropePMC isOA=N).

Status: 1/5 fetched, 2/5 Steel-or-drop (OA), 2/5 maintainer-drop (paywalled). Paused for maintainer call
on Steel-vs-drop rather than downgrading or burning the gated rung unasked.
- [2026-08-27] openalex resolve "10.1161/CIR.0000000000001031" -> 1 hits: https://doi.org/10.1161/cir.0000000000001031

## [2026-08-27] SELECTION RECORD — comprehensive-guideline benchmark acquisition (DGA / DGAC / AHA)

**Goal:** acquire the flagship general-population comprehensive guidelines the fabric lacks, as
guidance-null BENCHMARK objects for the decomposition-diff ("which guideline is closest to the fabric").
Not new gold evidence — the DGA/AHA are recommendation/guideline-tier; the DGAC report is the evidence-
bearing half. Channel: direct download (gov) + openalex resolve (AHA DOI) + headless-browser escalation.

**Targets, all SELECTED (fit-to-question: the comprehensive-guideline gap):**

1. **DGA 2020-2025** — Dietary Guidelines for Americans, 2020-2025 (USDA/HHS). No DOI.
   URL: https://www.dietaryguidelines.gov/sites/default/files/2020-12/Dietary_Guidelines_for_Americans_2020-2025.pdf
   -> **BLOCKED (ETIMEDOUT)** — dietaryguidelines.gov times out from this egress IP (curl + urllib +
   headless Playwright all ETIMEDOUT; PLoS control fetched fine, so it is gov-domain-specific, not broad
   egress). **Maintainer-drop requested.**
2. **2020 DGAC Scientific Report** — Scientific Report of the 2020 Dietary Guidelines Advisory Committee
   (the evidence-bearing half; NESR systematic reviews). No DOI.
   URL: https://www.dietaryguidelines.gov/sites/default/files/2020-07/ScientificReport_of_the_2020DietaryGuidelinesAdvisoryCommittee_first-print.pdf
   -> **BLOCKED (ETIMEDOUT)**, same as #1. **Maintainer-drop requested.**
3. **AHA 2021 (Lichtenstein)** — 2021 Dietary Guidance to Improve Cardiovascular Health: A Scientific
   Statement from the AHA. Circulation 2021;144:e472-e487. DOI 10.1161/CIR.0000000000001031 (openalex
   oa=False, cites 1038). Free at https://www.ahajournals.org/doi/10.1161/CIR.0000000000001031
   -> **BLOCKED (HTTP 403)** — ahajournals.org anti-bot (measured OUP/JAMA/Lancet-class wall).
   **Maintainer-drop requested.**

**Adjudication:** 3/3 SELECTED, 0 rejected, 0 fetched, **3 blocked -> maintainer-drop** (pause-and-ask,
no downgrade). Escalation ladder exhausted through headless Playwright; only Steel (`--service steel`,
cloud IP) remains untried — gated on maintainer request. All three are free/public docs.

**ARRIVED 2026-08-27 (maintainer-drop -> process-inbox).** All 3 dropped into `inbox/`, all digital
(no OCR), dedup-clean, ratchet-clear. Staged + registered: `DGA - Dietary Guidelines for Americans
2020` (high) + `DGAC - Scientific Report 2020` (gold, top-level) + `AHA - Dietary Guidance
Cardiovascular Health 2021` (high, papers/). Ingest queued as NEXT-UP #4; they fill matrix G1.

## [2026-08-27] SELECTION RECORD — two divergent-pole comprehensives for the proximity matrix (Canada · EAT-Lancet)
Maintainer: "acquire canada food guide and eat-lancet" — the two divergent-pole general comprehensives
the matrix-column analysis ranked #1 (Canada, dropped-dairy / plant-forward) and #3 (EAT-Lancet,
plant-forward extreme). Acquisition for the guidance-null matrix, NOT fabric ingest.

1. **Query** — (channel: web / canada.ca-scoped) `Canada's Dietary Guidelines 2019 health professionals
   policy makers PDF Health Canada`; then Wayback availability API on the moved artifact URL. EAT-Lancet
   needed no query (already held).
2. **Results** —
   - Canada: canonical doc = `Canada's Dietary Guidelines for Health Professionals and Policy Makers`
     (Health Canada, Jan 2019, ISBN 978-0-660-25310-7, Cat H164-231/2019E-PDF). Live URL
     `food-guide.canada.ca/.../CanadasDietaryGuidelines.pdf` now **302-redirects** to a Cloudflare JS
     bounce (file relocated); direct `WebFetch` of the canada.ca guidelines page **403** (Cloudflare
     anti-bot). Recovered via Wayback `id_` raw snapshot (20251206084214, status 200) — complete 62pp,
     139,896 chars, coverage 0.992 OK, clean digital text (no OCR).
   - EAT-Lancet: 0 new query — `raw/binary/Willett - EAT-Lancet Planetary Health Diet 2019.pdf` already
     staged + registered (moderate; DOI 10.1016/S0140-6736(18)31788-4). `openalex resolve` on the DOI
     errored on an un-quoted shell glob (paren in DOI) — moot, PDF already in hand.
3. **Adjudication** — Canada SELECTED (highest-value column add: a general comprehensive that DIVERGES
   from the NNR/DGA consensus — dropped the dairy food group, plant-forward protein, no serving sizes;
   tests whether the NNR≈DGA convergence is robust, informs the fabric's open dairy row). EAT-Lancet
   SELECTED (already held; the plant-forward / planetary-diet extreme; env-entangled + moderate tier —
   a compromised health-first benchmark, valued as the pole not the clean column). Both are RECOMMENDATION
   summaries (warrant separately published) -> `high`/`moderate`, NOT gold.
4. **Acquisition** — Canada fetched to `inbox/` (Wayback), then staged `raw/binary/Canada - Dietary
   Guidelines 2019.pdf` + registered (high/guideline, citekey healthcanada2019, no DOI — gov report).
   EAT-Lancet already staged. Both queued for the matrix comparator-read (NOT fabric ingest), per the
   established DGA/AHA lightweight-read pattern. No fetch block hit that needed a maintainer-drop.
- [2026-08-27] openalex resolve "10.1016/j.kint.2016.12.013" -> 1 hits: https://doi.org/10.1016/j.kint.2016.12.013
- [2026-08-27] openalex search "Dietary Factors Risk Chronic Obstructive Pulmonary Disease Systematic Review Meta-Analysis meta-analysis" -> 0 hits: (none)
- [2026-08-27] openalex resolve "10.1007/s00198-023-06682-1" -> 1 hits: https://doi.org/10.1007/s00198-023-06682-1
- [2026-08-27] openalex resolve "10.1183/23120541.00168-2019" -> 1 hits: https://doi.org/10.1183/23120541.00168-2019
- [2026-08-27] openalex resolve "10.1186/s12886-026-04721-z" -> 1 hits: https://doi.org/10.1186/s12886-026-04721-z
- [2026-08-27] openalex resolve "10.3390/nu17061037" -> 1 hits: https://doi.org/10.3390/nu17061037
- [2026-08-27] openalex resolve "10.1038/bjc.2014.579" -> 1 hits: https://doi.org/10.1038/bjc.2014.579
- [2026-08-27] openalex resolve "10.1136/bmj-2022-071620" -> 1 hits: https://doi.org/10.1136/bmj-2022-071620
- [2026-08-27] openalex fetch "10.1038/bjc.2014.579" -> 0 hits: (none)
- [2026-08-27] openalex fetch "10.1136/bmj-2022-071620" -> 0 hits: (none)
- [2026-08-27] openalex fetch "10.1007/s00198-023-06682-1" -> 0 hits: (none)
- [2026-08-27] openalex fetch "10.1183/23120541.00168-2019" -> 0 hits: (none)
- [2026-08-27] openalex fetch "10.1186/s12886-026-04721-z" -> 0 hits: (none)
- [2026-08-27] openalex fetch "10.3390/nu17061037" -> 0 hits: (none)

## [2026-08-27] SELECTION RECORD — modifiable/lifestyle causes of age-related disease (11-family breadth sweep)

Maintainer *research* request: modifiable/lifestyle causes across dementia/neurodegeneration, Parkinson's,
cancers, CVD, Alzheimer's, frailty, musculoskeletal, metabolic, pulmonary, sensory, kidney. Discovery +
vetting only; nothing ingested. Run as a 4-agent fan-out in ISOLATED worktrees (so each agent's
`openalex.py` auto-log stayed off the shared ledger); agents discovered + vetted but did NOT fetch — the
parent adjudicated, fetched OA centrally, and hand-logs the agents' queries here (their worktree auto-logs
were discarded on teardown). Coverage baseline first: registry disease-term counts flagged the GAPS
(pulmonary/COPD=0 rows, macular/AMD=0, Parkinson's/ALS thin) vs the well-covered families
(cancer \~49, CVD \~71, diabetes \~35) held to a STRICT ratchet.

**1. QUERIES (channel=openalex unless noted; incl. zero-hits — the negative space):**

- **Cluster A (pulmonary/kidney/vision):** `diet COPD` MA=0 · `diet COPD` SR=0 · `obesity COPD` MA=0 ·
  `fruit vegetable COPD` MA=0 · `physical activity COPD risk` MA=0 · `physical activity COPD` MA=6
  (all rehab-in-existing-COPD) · `dietary patterns COPD` MA=1 (ERJ 2020) · `dietary factors COPD` =2 ·
  `lifestyle CKD` umbrella=0 · `obesity CKD` MA=6 · `sodium CKD` MA=6 (all SGLT2/serum-Na, off-target) ·
  `dietary pattern kidney disease` MA=2 · `diet macular degeneration` MA=2 · `diet cataract` MA=0 ·
  `cataract nutrition` MA=0 · `physical activity macular degeneration` MA=6 · `lutein zeaxanthin macular`
  MA=1. WebSearch (hand-logged): "diet dietary pattern COPD incidence SR MA" + "physical activity COPD
  incidence MA cohort" -> confirmed NO PA->COPD-incidence MA exists (cohorts only).
- **Cluster B (neurodegeneration):** `Parkinson physical activity` MA=3 (none incidence) · `Parkinson
  Mediterranean diet`=1 (proceeding) · `Parkinson diet` MA=1 · `Parkinson caffeine`=6 (no new MA) ·
  `Parkinson dairy`=3 · `Parkinson exercise` MA=6 (all symptom/motor, treatment-zone) · `Parkinson
  modifiable risk factors`=0 (Chen 2021 umbrella is incumbent) · `Parkinson dietary pattern` MA=0 ·
  `air pollution dementia` MA=6 · `physical activity dementia risk` MA=2 · `ultra-processed food
  cognitive`=6 · `alcohol dementia` MA=4 · `ALS physical activity risk`=4 (no MA) · `ALS lifestyle
  risk`=4 (cohorts + a dissertation, no MA).
- **Cluster C (cancer, STRICT ratchet):** `alcohol site-specific cancer dose-response` MA=1
  (Bagnardi 2014) · `physical activity cancer` umbrella=6 (Rezende 2018 landmark) · `adiposity cancer
  anatomical sites` umbrella=1 (Kyrgiou 2017) · `diet cancer umbrella` (from 2017)=4 (all single-site) ·
  `alcohol cancer` umbrella (from 2018)=1 (predatory venue). WebSearch: WCRF CUP / Third Expert Report
  citations (confirmed all held).
- **Cluster D (musculoskeletal/frailty):** `exercise bone mineral density` MA=6 · `resistance training
  BMD postmenopausal` MA=6 · `protein intake bone fracture` MA=1 (0 cites) · `dietary protein BMD` MA=0 ·
  `weight loss knee osteoarthritis` MA=6 · `multidomain intervention frailty` MA=0 (term artifact) ·
  `nutritional intervention frailty` MA=5 · `protein supplementation frailty` SR=6.

**2. RESULTS + 3. ADJUDICATION (SELECT / DEFER / REJECT with reason):**

*SELECTED — acquired to `inbox/` (2):*

- **Bagnardi 2014** — alcohol -> site-specific cancer comprehensive dose-response MA (`10.1038/bjc.2014.579`,
  gold, OA, 1348 cites). ADVANCER: fabric holds Rumgay 2021 (attributable *burden*, modelled), NOT the
  per-drink dose-response by site (the "no safe threshold; light drinking already raises oral/oesophageal/
  breast risk" shape). Different question, not an echo. Fetched (421 KB, 12pp).
- **Exercise -> BMD in postmenopausal women, updated MA 2023** (`10.1007/s00198-023-06682-1`, gold, OA,
  118 cites). ADVANCER: fabric holds exercise->falls (Sherrington) + ->fall-fractures (Wang) but NO
  exercise->BMD *efficacy* link. Surrogate caveat at ingest (BMD is a target, not patient-important —
  carry transmission-to-fracture). Fetched (3410 KB, 26pp).

*SELECTED — genuinely OA but fetch-blocked -> MAINTAINER-DROP requested (4):*

- **Wilker 2023** — ambient air pollution -> clinical dementia MA (`10.1136/bmj-2022-071620`, BMJ, gold,
  OA, 183 cites). Supplies per-unit PM2.5/NO2 dose-response HRs that Livingston 2024 holds only as a
  qualitative PAF. Blocked: openalex found no OA pdf; BMJ main-site gated.
- **Dietary Patterns -> COPD MA 2020** (`10.1183/23120541.00168-2019`, ERS Open Research, gold, OA,
  38 cites). Primary pulmonary opener — fills a ZERO-row cell (healthy pattern OR 0.88 [0.82-0.94]).
  Blocked: ERS openres HTTPError on plain fetch + 404 on the browser PDF path.
- **Mediterranean Diet -> AMD (development + progression) MA 2025** (`10.3390/nu17061037`, MDPI Nutrients,
  MA, OA, 12 cites). Diet-pattern opener for the AMD gap (macular=0 rows). Venue caveat (MDPI) at ingest.
  Blocked: plain fetch + browser both 403.
- **Physical Activity -> cataract + AMD MA 2026** (`10.1186/s12886-026-04721-z`, BMC Ophthalmology, MA,
  OA, 1 cite). Dual-outcome PA lever for the vision gap; supersedes the 2017 AMD-only AJO MA. Recency =
  lower prior caveat. Blocked: browser returned an anti-bot HTML stub, not the PDF (discarded).

*SELECTED — not OA -> MAINTAINER-DROP (1):*

- **Garofalo 2017** — obesity predicts onset of CKD MA (`10.1016/j.kint.2016.12.013`, Kidney Intl /
  Elsevier, gold, 371 cites, **OA=false**). New kidney lever (adiposity axis, distinct from staged
  He-diet + Seidu-PA). ScienceDirect anti-bots OA anyway; no fetch attempted per the pause-and-ask rule.

*DEFERRED (recorded, not acquired — take only if the named cell opens):* Kyrgiou 2017 adiposity-cancer
umbrella + Rezende 2018 PA-cancer umbrella (credibility-grading complements; WCRF held gold carries the
decision) · Dietary-Factors->COPD component MA 2020 (food-level pair for ERJ; DOI unresolved, over-specified
query=0) · alcohol->dementia MA 2024 (`10.1016/j.arr.2024.102419`, not OA) · domain-specific PA->dementia
2026 (`10.1016/s2468-2667(26)00142-8`) · UPF->cognition SR 2026 (`10.1136/bmjnph-2025-001325`, obs SR, no
pooled magnitude) · MIND-diet->PD Agarwal 2018 (`10.1007/s12603-018-1094-5`, single cohort — thin-field
counterweight) · weight-loss->knee-OA MA 2018 (`10.1016/j.semarthrit.2018.06.005`) · nutrition+/-PA->frailty
MA 2021 (`10.9778/cmajo.20200248`) · obesity->CKD MHO/MUO refinement 2023 (`10.1111/obr.13656`) ·
omega-3->AMD 2025 (`10.1016/j.tjnut.2025.101289`) · lutein->MPOD 2021 (surrogate outcome, fails the bar).

*REJECTED (echo / superseded / out-of-scope):* dairy->PD (echo of Chen 2021 umbrella) · PD exercise/motor
MAs (treatment-zone, diagnosed patients) · diet->single-site cancer umbrellas (frontier deepening of held
WCRF matrix) · older COPD MA 2015 (superseded by ERJ 2020) · protein->fracture SR 2017 (0 cites, weak) ·
dietary-pattern->CKD MA 2021 (appears to BE staged He or its twin) · older AMD-only PA MA 2017 (superseded).

**4. ACQUISITION:** 2 fetched to `inbox/` (Bagnardi, Exercise-BMD). 5 blocked -> maintainer-drop list
handed to the maintainer (Wilker/BMJ · ERS-COPD · MDPI-AMD · BMC-PA-vision · Garofalo/Elsevier-CKD), all
with clean DOIs above. Nothing downgraded to a weaker source to get something fetchable.

**GAPS (no gold exists; expectancy-tested — do NOT force-acquire):** PA->COPD *incidence* (cohorts only,
no MA) · dietary-salt->CKD incidence (only SGLT2/serum-Na hits) · diet/antioxidant->cataract incidence
(0 MAs) · adiposity/diet->lung-function/FEV1 trajectory · diet-pattern (MIND/Med)->Parkinson's incidence
(single cohorts only) · lifestyle->ALS incidence (cohorts + a dissertation) · protein intake->fragility
*fracture* endpoint (no well-cited gold MA). Each recorded as a named G-gap for the coverage ledger.
- [2026-08-28] openalex search "protein intake requirement older adults muscle meta-analysis" -> 0 hits: (none)
- [2026-08-28] openalex search "protein supplementation older adults meta-analysis" -> 6 hits: https://doi.org/10.3390/nu11081713; https://doi.org/10.1016/j.archger.2022.104758; https://doi.org/10.1017/s0007114522001787; https://doi.org/10.1016/j.jnha.2024.100184; https://doi.org/10.3390/nu12082422
- [2026-08-28] openalex search "protein energy restriction lean mass meta-analysis" -> 0 hits: (none)
- [2026-08-28] openalex search "high protein diet weight loss systematic review" -> 3 hits: https://doi.org/10.22541/au.162694045.55171124/v1; https://doi.org/10.18502/jbe.v10i1.17151; ?
- [2026-08-28] openalex search "protein intake dose response muscle meta-analysis" -> 4 hits: https://doi.org/10.1093/nutrit/nuaa104; https://doi.org/10.1186/s40798-022-00508-w; https://doi.org/10.1101/2020.02.21.20026252; ?
- [2026-08-28] openalex search "protein sarcopenia umbrella review" -> 0 hits: (none)
- [2026-08-28] openalex search "dietary protein requirement aging systematic review" -> 0 hits: (none)
- [2026-08-28] openalex search "protein weight loss fat free mass meta-analysis" -> 0 hits: (none)
- [2026-08-28] openalex search "updated protein intake muscle strength dose response meta-analysis" -> 1 hits: ?
- [2026-08-28] openalex search "protein intake body composition caloric restriction meta-analysis" -> 0 hits: (none)
- [2026-08-28] openalex search "enhanced protein intake muscle mass overweight obesity meta-analysis" -> 1 hits: https://doi.org/10.1016/j.clnesp.2024.06.030
- [2026-08-28] openalex search "updated protein intakes muscle mass strength meta-analysis" -> 1 hits: ?
- [2026-08-28] openalex resolve "10.1016/j.clnesp.2024.06.030" -> 1 hits: https://doi.org/10.1016/j.clnesp.2024.06.030

## [2026-08-28] SELECTION RECORD — protein-target GAP sweep (non-athlete / obese / elderly / deficit)

Maintainer-raised: the 1.62 g/kg breakpoint is a non-significant CI-midpoint, not robust guidance — raise
a consolidated gap and look (again) for gold/high sources on the protein target across the strata that
depart from Morton's lean/normal-BMI trained sample. Discovery + vetting only; nothing ingested.

**1. QUERIES (channel=openalex, auto-logged above unless noted; incl. zero-hits — the negative space):**

- `protein intake requirement older adults muscle` MA=0 (title-strictness artifact, 5 words) · `protein
  supplementation older adults` MA=6 (mostly *does-it-help*, not *what-target*) · `protein energy
  restriction lean mass` MA=0 (strictness) · `high protein diet weight loss` SR=3 · `protein intake dose
  response muscle` MA=4 (top hit = HELD Tagawa 2020 nuaa104; + a 2025 "updated dose-response MA", no DOI) ·
  `protein sarcopenia` umbrella=0 · `dietary protein requirement aging` SR=0 (strictness) · `protein
  weight loss fat free mass` MA=0 (strictness) · `enhanced protein intake muscle mass overweight obesity`
  MA=1 (Kokura 2024, clnesp) · `updated protein intakes muscle mass strength` MA=1 (the DOI-less 2025 rec).
- WebSearch (hand-logged, no auto-log): "updated systematic review dose-response meta-analysis protein
  intakes muscle mass strength 2025" -> surfaced the Kokura 2024 obesity MA + confirmed Tagawa/Morton as
  the held dose-response incumbents; "Enhanced protein intake ... overweight/obesity Clin Nutr ESPEN 2024
  authors" -> first author Yoji Kokura (+ Ueshima, Saino, Maeda), DOI 10.1016/j.clnesp.2024.06.030.

**2. RESULTS adjudication (SELECTED / DEFERRED / REJECTED + why):**

- **SELECTED (acquire, maintainer-drop):** `Kokura - Protein Muscle Overweight Obesity 2024`
  (10.1016/j.clnesp.2024.06.030, SR+MA RCTs, tier high) — directly targets the OBESE stratum, the thinnest
  cell of the gap (protein amount to preserve muscle during weight loss). oa=False -> maintainer-drop.
- **DEFERRED:** the 2025 "updated dose-response MA of protein intakes" — no DOI / 0 cites in OpenAlex,
  identity unresolved; freshest general dose-response but not cleanly citable. Maintainer to locate before
  acquiring; NOT registered (would be an unstable placeholder slug).
- **REJECTED (already held / off-target):** Tagawa 2020 (HELD); the elderly-supplementation MAs (leucine,
  whey/soy, sarcopenia-RCT pooling) answer *does supplementation help*, not *what target on which basis* —
  the elderly TARGET is already covered by Bauer/Coelho-Junior/Moore (held). The 0-hit queries are
  title.search strictness (5-word titles), NOT literature absence.

**3. ACQUISITION-REQUESTED:** Kokura 2024 -> registered `[NOT YET HELD]` in `sources.md` (row + DOI) +
ingest-queue PROTEIN-TARGET GAP thread + `[AWAITS (Kokura - Protein Muscle Overweight Obesity 2024)]` on
[[Protein and Resistance Training for Muscle and Strength]]. Fetch status: maintainer-drop pending (paywalled).
- [2026-08-28] openalex fetch "10.1016/j.clnesp.2024.06.030" -> 0 hits: (none)
- [2026-08-28] openalex search "protein weight loss muscle preservation meta-analysis" -> 0 hits: (none)
- [2026-08-28] openalex search "high protein diet body composition adults meta-analysis" -> 1 hits: https://doi.org/10.1111/dom.70996
- [2026-08-28] openalex search "protein requirement obesity muscle systematic review" -> 0 hits: (none)
- [2026-08-28] openalex search "poultry white meat cardiovascular mortality meta-analysis" -> 0 hits: (none)
- [2026-08-28] openalex search "poultry mortality meta-analysis" -> 3 hits: https://doi.org/10.1080/10408398.2021.1975092; https://doi.org/10.1080/01635581.2018.1412474; https://doi.org/10.5455/jrvs.20240818123310
- [2026-08-28] openalex search "poultry cardiovascular disease systematic review" -> 2 hits: https://doi.org/10.1080/10408398.2021.1975092; https://doi.org/10.1016/j.cdnut.2026.107736
- [2026-08-28] openalex search "poultry type 2 diabetes meta-analysis" -> 1 hits: https://doi.org/10.1016/j.cdnut.2024.102336
- [2026-08-28] openalex search "poultry cancer meta-analysis" -> 3 hits: https://doi.org/10.1186/s12916-022-02257-9; https://doi.org/10.1080/01635581.2020.1869276; https://doi.org/10.14715/cmb/2019.65.1.3
- [2026-08-28] openalex resolve "10.1016/j.cdnut.2026.107736 10.1016/j.cdnut.2024.102336 10.1080/10408398.2021.1975092" -> 3 hits: https://doi.org/10.1016/j.cdnut.2026.107736; https://doi.org/10.1016/j.cdnut.2024.102336; https://doi.org/10.1080/10408398.2021.1975092
- [2026-08-28] openalex fetch "10.1016/j.cdnut.2026.107736" -> 0 hits: (none)
- [2026-08-28] openalex fetch "10.1016/j.cdnut.2024.102336" -> 0 hits: (none)

## [2026-08-28] SELECTION RECORD — poultry -> outcome evidence (for the planned "Meat" deliverable reframe)

Trigger: maintainer wants Red Meat retargeted to a "Meat" umbrella with a poultry section, but the fabric
holds NO poultry->outcome evidence (poultry appears only as a substitute/comparator in Red Meat + the
protein/substitution pages; ZERO poultry rows in the Bechthold matrix). Chose *acquire-first, reframe-after*
(maintainer decision) — this search fills the poultry cell before any rename.

**1. QUERY:** openalex `search`, poultry x {cardiovascular / mortality / type-2-diabetes / cancer}, --type
meta-analysis|systematic-review, --from-year 2015/2018 (auto-logged lines above). The 5-word-title strict
first query ("poultry white meat cardiovascular mortality") returned 0 from title.search strictness, NOT
absence — broadening to 2-noun queries surfaced the landmarks.

**2. RESULTS adjudication (SELECTED / DEFERRED / REJECTED + why):**

- **SELECTED (acquire, all maintainer-drop):**
  - `Baker - Poultry Cardiovascular Disease 2026` (10.1016/j.cdnut.2026.107736, SR prospective cohorts, gold)
    — poultry->CVD morbidity+mortality, lands NULL. The CVD/mortality poultry cell.
  - `Connolly - Poultry Type 2 Diabetes 2024` (10.1016/j.cdnut.2024.102336, SR+MA, gold) — poultry->T2D,
    lands NULL. The T2D poultry cell. NOTE same Campbell/Reed lab as Baker -> the two are NOT
    type-E-independent of each other (one coordinated group).
  - `Papp - Poultry Cardiovascular Mortality Meta-Analysis 2021` (10.1080/10408398.2021.1975092,
    dose-response SR+MA, gold, cites=36) — poultry->CVD + all-cause mortality, the most-cited landmark AND
    the INDEPENDENT witness (Vienna/Schwingshackl group) against the Campbell-lab series. Worth the drop for
    independence + dose-response shape.
- **DEFERRED (cancer — combined-exposure / pattern-level, weaker fit; Red Meat already establishes poultry
  carries no colorectal signal):**
  - 2022 BMC Medicine (10.1186/s12916-022-02257-9, cites=97, OA) — *fish-poultry diet* pattern vs
    meat-eaters (EPIC-Oxford style), a dietary-PATTERN cancer MA, not a poultry dose-response. Off the
    poultry-as-food question. Reconsider only if a "Meat" cut needs a pattern-level cancer corroborator.
  - 2017 poultry+fish cancer mortality (10.1080/01635581.2018.1412474) + 2019 poultry+egg cancer
    (10.14715/cmb/2019.65.1.3) — combined-exposure, cannot isolate poultry. REJECTED for fit.
- **REJECTED (off-target):** the 2026 avian alpha/recombinant veterinary MA (10.5455/jrvs...) — animal
  husbandry, not human nutrition; a title.search false-friend on "poultry".

**3. ACQUISITION-REQUESTED:** all three SELECTED registered as `[NOT YET HELD]` rows in `sources.md` (+ DOIs
in `staged-source-dois.tsv`). Fetch status: **maintainer-drop pending for all three** — Baker/Connolly
(Curr Dev Nutr) 403 on both openalex fetch AND headless-browser; Papp (T&F) paywalled oa=False. Per the
pause-and-ask rule, NOT downgraded to a weaker fetchable source. Handed to *process inbox* once dropped;
ingest + the Red Meat->"Meat" reframe follow AFTER these land and are vetted.
- [2026-08-28] openalex search "poultry type 2 diabetes meta-analysis" -> 1 hits: https://doi.org/10.1016/j.cdnut.2024.102336
- [2026-08-28] openalex search "poultry cardiovascular systematic review" -> 1 hits: https://doi.org/10.1016/j.cdnut.2026.107736
- [2026-08-28] openalex search "poultry mortality meta-analysis" -> 3 hits: https://doi.org/10.1080/10408398.2021.1975092; https://doi.org/10.1080/01635581.2018.1412474; https://doi.org/10.5455/jrvs.20240818123310
- [2026-08-28] openalex search "poultry all-cause mortality meta-analysis" -> 1 hits: https://doi.org/10.1080/10408398.2021.1975092
- [2026-08-28] openalex search "white meat mortality meta-analysis" -> 2 hits: https://doi.org/10.1161/jaha.117.005983; https://doi.org/10.3390/nu13020676
- [2026-08-28] openalex search "chicken mortality meta-analysis" -> 4 hits: https://doi.org/10.1186/s12917-025-04549-7; https://doi.org/10.1186/s12917-019-1884-y; https://doi.org/10.1017/s1466252319000227; https://doi.org/10.21203/rs.3.rs-3415543/v1
- [2026-08-28] openalex search "poultry longevity meta-analysis" -> 0 hits: (none)
- [2026-08-28] openalex resolve "10.3390/nu13020676" -> 1 hits: https://doi.org/10.3390/nu13020676
- [2026-08-28] openalex resolve "10.1161/jaha.117.005983" -> 1 hits: https://doi.org/10.1161/jaha.117.005983
- [2026-08-28] openalex fetch "10.3390/nu13020676" -> 0 hits: (none)

## [2026-08-28] SELECTION RECORD — poultry\~longevity alternative sources (MEAT-POULTRY-1)
Channel: openalex.py (auto-logged queries above: "poultry mortality", "poultry all-cause mortality",
"white meat mortality", "chicken mortality" [off-topic veterinary hits], "poultry longevity" [0 hits]) + a
web-search authorship/independence check.
- SELECTED + ACQUIRED: `Lupoli - White Meat All-Cause Mortality Cardiovascular Meta-Analysis 2021`
  (10.3390/nu13020676, Nutrients, OA, cites=46). Full 16pp, INDEPENDENT (Naples/Riccardi-Vaccaro), no
  industry funding; "white meat"=poultry+rabbit, EXCL fish. Fetch: openalex + local Playwright + Steel all
  403 (MDPI Cloudflare) -> maintainer-dropped full PDF -> STAGED to inbox/. The on-target alternative to
  the parked NCC-funded Baker/Connolly abstracts.
- SELECTED + ACQUIRED (2026-08-28b): `Kim - Meat Stroke Incidence Mortality Meta-Analysis 2017` JAHA
  (10.1161/JAHA.117.005983, OA, cites=117) — total/red/processed/white meat -> stroke incidence +
  mortality (separate); white meat = poultry EXCL fish; INDEPENDENT (Seoul). Maintainer-dropped full 21pp
  PDF -> STAGED to inbox/. The dedicated stroke endpoint complementing Lupoli.
- REJECTED: "Poultry and Fish Consumption in Relation to Total Cancer Mortality" 2017 (10.1080/
  01635581.2018.1412474) — combined poultry+fish exposure (not clean poultry) + cancer-mortality (cancer
  DEFERRED for this reframe); oa=False. Veterinary "chicken/poultry mortality" MA hits — off-topic
  (broiler disease/economics), rejected.
- [2026-08-28] openalex search "poultry all-cause mortality meta-analysis" -> 1 hits: https://doi.org/10.1080/10408398.2021.1975092
- [2026-08-28] openalex search "white meat mortality meta-analysis" -> 2 hits: https://doi.org/10.1161/jaha.117.005983; https://doi.org/10.3390/nu13020676
- [2026-08-28] openalex search "poultry mortality meta-analysis meta-analysis" -> 3 hits: https://doi.org/10.1080/10408398.2021.1975092; https://doi.org/10.1080/01635581.2018.1412474; https://doi.org/10.5455/jrvs.20240818123310
- [2026-08-28] openalex search "meat all-cause mortality meta-analysis" -> 2 hits: https://doi.org/10.3390/nu13020676; https://doi.org/10.1093/nutrit/nuac017
- [2026-08-28] openalex search "chicken consumption mortality meta-analysis" -> 0 hits: (none)
- [2026-08-28] openalex search "poultry cardiovascular all-cause mortality meta-analysis" -> 1 hits: https://doi.org/10.1080/10408398.2021.1975092
- [2026-08-28] openalex search "meat mortality umbrella review" -> 2 hits: https://doi.org/10.3389/fpubh.2026.1763155; https://doi.org/10.1371/journal.pone.0315436
- [2026-08-28] openalex search "red meat mortality umbrella review" -> 1 hits: https://doi.org/10.1371/journal.pone.0315436
- [2026-08-28] openalex search "poultry mortality" -> 6 hits: https://doi.org/10.1016/j.heliyon.2022.e10074; https://doi.org/10.1371/journal.pone.0262812; https://doi.org/10.3390/v16020221; https://doi.org/10.1016/j.psj.2025.105447; https://doi.org/10.1016/j.psj.2025.105869
- [2026-08-28] openalex search "white meat cardiovascular" -> 3 hits: https://doi.org/10.29219/fnr.v67.9543; https://doi.org/10.3390/nu14183724; https://doi.org/10.1002/hsr2.70990
- [2026-08-28] openalex search "poultry health outcomes" -> 2 hits: https://doi.org/10.3390/nu15163550; https://doi.org/10.3390/vetsci12111054
- [2026-08-28] openalex fetch "10.29219/fnr.v67.9543" -> 0 hits: (none)

## [2026-08-28] SELECTION RECORD — research: white/non-red/poultry meat -> all-cause mortality
Channel: openalex.py (auto-logged: "poultry all-cause mortality", "white meat mortality", "poultry
mortality meta-analysis", "meat all-cause mortality", "chicken consumption mortality" [0 hits], "poultry
cardiovascular all-cause mortality"; umbrella-type "meat mortality"/"red meat mortality"; 2022+ "poultry
mortality"/"white meat cardiovascular"/"poultry health outcomes") + web/API authorship checks.
Already held/staged on this question (deduped OUT): Lupoli 2021 (poultry->all-cause mortality + CV events,
STAGED), Kim 2017 (poultry->stroke, STAGED), Baker/Connolly abstracts (PARKED), Papp 2021 (dose-response
all-cause mortality, registered maintainer-drop).
- SELECTED, maintainer-drop: `Ramel - White Meat Cardiovascular Diabetes Meta-Analysis 2023`
  (10.29219/fnr.v67.9543, Food & Nutr Research, OA, cites=24). NNR2023 SR group; white meat(poultry) ->
  CVD + T2D; INDEPENDENT gold, newer than Lupoli, DISPLACES the NCC-funded Connolly T2D abstract. Fetch:
  openalex RemoteDisconnected + local browser HTTP2-error + Steel returned HTML-not-PDF -> maintainer-drop.
  (Endpoint is CVD+T2D, not all-cause mortality — complements Lupoli, does not duplicate.)
- SELECTED, maintainer-drop: `Hidayat - Red Meat Substitution CHD Mortality Meta-Analysis 2022`
  (10.1093/nutrit/nuac017, Nutrition Reviews, oa=False, cites=35). SUBSTITUTION MA: red meat -> other
  proteins (incl. poultry) -> CHD + all-cause mortality; INDEPENDENT (Soochow/Qin). Serves the Meat
  reframe's substitution frame (red->poultry swap on all-cause mortality). OUP paywalled -> maintainer-drop.
- REJECTED: `hsr2.70990` 2025 "Red vs White Meat on CVD: Global Cross-Sectional ECOLOGICAL study" — weakest
  design (ecological fallacy, country-level), not gold. `10.1080/01635581.2018.1412474` (poultry+FISH ->
  cancer mortality) — combined exposure + cancer (DEFERRED for this reframe). Connolly 2023 narrative
  review (nu15163550) — narrative, not gold. Veterinary "poultry mortality" hits (bird flu / farm /
  worker cancer) — off-topic.
- DEFERRED (Red Meat side, not this question): processed-meat umbrella 2026 (10.3389/fpubh.2026.1763155,
  OA) + red+processed-meat cancer umbrella 2025 (10.1371/journal.pone.0315436, OA) — relevant to the Red
  Meat deliverable, not poultry/white-meat -> all-cause mortality.
- [2026-08-29] openalex search "Parkinson disease modifiable risk factors umbrella review" -> 0 hits: (none)
- [2026-08-29] openalex search "Parkinson disease modifiable risk factors umbrella review" -> 0 hits: (none)
- [2026-08-29] openalex search "Parkinson risk factors meta-analysis" -> 2 hits: https://doi.org/10.3390/life14010032; https://doi.org/10.1007/s11010-025-05392-y
- [2026-08-29] openalex search "Dementia prevention intervention and care 2024 report Lancet standing Commission" -> 3 hits: https://doi.org/10.1016/s0140-6736(24)01296-0; https://doi.org/10.1016/j.maturitas.2025.108217; https://doi.org/10.4103/jgmh.jgmh_4_25
- [2026-08-29] openalex search "Modifiable risk factors for incident dementia and cognitive impairment umbrella review of evidence" -> 2 hits: https://doi.org/10.1016/j.jad.2022.07.008; https://doi.org/10.21203/rs.3.rs-1151683/v1
- [2026-08-29] openalex search "Non-genetic risk factors Parkinson's disease overview 46 systematic reviews" -> 0 hits: (none)
- [2026-08-29] openalex search "Non-genetic risk factors Parkinson disease systematic reviews" -> 0 hits: (none)
- [2026-08-29] openalex search "Environmental risk factors Parkinson's disease umbrella review meta-analyses" -> 1 hits: https://doi.org/10.1016/j.parkreldis.2015.12.008
- [2026-08-29] openalex search "Potentially modifiable risk factors dementia mild cognitive impairment umbrella review meta-analysis" -> 1 hits: https://doi.org/10.1159/000536643
- [2026-08-29] openalex search "Umbrella review Delphi study modifiable factors dementia risk reduction" -> 1 hits: https://doi.org/10.1002/alz.13577
- [2026-08-29] openalex search "overview systematic reviews risk factors Parkinson disease" -> 0 hits: (none)
- [2026-08-29] openalex resolve "10.3233/JPD-202521" -> 1 hits: https://doi.org/10.3233/jpd-202521
- [2026-08-29] openalex search "Dietary patterns risk multiple cancers umbrella review meta-analyses prospective cohort" -> 1 hits: https://doi.org/10.1016/j.ajcnut.2024.11.020
- [2026-08-29] openalex search "Body Mass Index Cancer Risk Umbrella Review Meta-Analyses Observational" -> 2 hits: https://doi.org/10.1080/01635581.2023.2180824; https://doi.org/10.21203/rs.3.rs-1894100/v1
- [2026-08-29] openalex search "Vegetarian dietary patterns cardiovascular risk factors disease prevention umbrella review" -> 1 hits: https://doi.org/10.1016/j.ajpc.2024.100868
- [2026-08-29] openalex search "Modifiable Lifestyle Factors Primary Prevention CKD systematic review" -> 2 hits: https://doi.org/10.1681/asn.2020030384; https://doi.org/10.3410/f.738597328.793578488
- [2026-08-29] openalex resolve "10.1038/s41531-023-00603-z" -> 1 hits: https://doi.org/10.1038/s41531-023-00603-z
- [2026-08-29] openalex resolve "10.1016/j.jacc.2025.08.015" -> 1 hits: https://doi.org/10.1016/j.jacc.2025.08.015
- [2026-08-29] openalex search "Lifestyle metabolic syndrome nonalcoholic fatty liver disease umbrella review observational randomized" -> 0 hits: (none)
- [2026-08-29] openalex search "Dietary factors risk chronic obstructive pulmonary disease systematic review meta-analysis" -> 0 hits: (none)
- [2026-08-29] openalex search "Fiber intake risk chronic obstructive pulmonary disease dose response meta-analysis" -> 1 hits: https://doi.org/10.1002/fsn3.3640
- [2026-08-29] openalex resolve "10.1016/S0140-6736(20)30367-6" -> 1 hits: https://doi.org/10.1016/s0140-6736(20)30367-6
- [2026-08-29] openalex resolve "10.1007/s00774-021-01230-5" -> 1 hits: https://doi.org/10.1007/s00774-021-01230-5
- [2026-08-29] openalex resolve "10.3390/app16062951" -> 1 hits: https://doi.org/10.3390/app16062951
- [2026-08-29] openalex resolve "10.3390/vision9010016" -> 1 hits: https://doi.org/10.3390/vision9010016
- [2026-08-29] openalex search "Vitamin D Supplementation Fractures Adults Systematic Umbrella Review Meta-Analyses Controlled Trials" -> 2 hits: https://doi.org/10.1210/clinem/dgab742; https://doi.org/10.3410/f.741035012.793592203
- [2026-08-29] openalex search "umbrella review lifestyle nonalcoholic fatty liver disease" -> 1 hits: https://doi.org/10.1111/obr.13464
- [2026-08-29] openalex search "nutritional lifestyle metabolic factors nonalcoholic fatty liver disease umbrella review" -> 0 hits: (none)
- [2026-08-29] openalex search "Risk factors age-related macular degeneration Updated systematic review meta-analysis" -> 1 hits: https://doi.org/10.1097/md.0000000000041599
- [2026-08-29] openalex search "Body mass index influences age-related cataracts updated meta-analysis systematic review" -> 0 hits: (none)
- [2026-08-29] openalex search "dietary factors chronic obstructive pulmonary disease meta-analysis fruit fish vitamin" -> 0 hits: (none)
- [2026-08-29] openalex search "Prevalence Related Factors Hearing Loss Among Adults Systematic Review Meta-Analyses" -> 1 hits: https://doi.org/10.1177/00034894241293045
- [2026-08-29] openalex search "impact lifestyle factors across life course sarcopenia physical frailty" -> 1 hits: https://doi.org/10.1097/mco.0000000000001111
- [2026-08-29] openalex search "Risk factors frailty sarcopenia community older adults meta-analysis" -> 1 hits: https://doi.org/10.1515/med-2025-1259
- [2026-08-29] openalex search "Risk factors development knee osteoarthritis across lifespan systematic review meta-analysis" -> 1 hits: https://doi.org/10.1016/j.joca.2025.03.003
- [2026-08-29] openalex search "Narrative Review Lifestyle Risk Factors Oxidative Stress Age-Related Hearing Loss" -> 1 hits: https://doi.org/10.3390/antiox12040878
- [2026-08-29] openalex search "Body mass index age-related cataracts meta-analysis" -> 2 hits: https://doi.org/10.1371/journal.pone.0089923; https://doi.org/10.5935/0004-2749.2021-0382
- [2026-08-29] openalex search "age-related cataract modifiable risk factors systematic review meta-analysis smoking sunlight" -> 0 hits: (none)
- [2026-08-29] openalex search "modifiable risk factors age-related macular degeneration umbrella review" -> 0 hits: (none)
- [2026-08-29] openalex search "dietary factors risk chronic obstructive pulmonary disease" -> 2 hits: ?; https://doi.org/10.1183/13993003.congress-2021.pa1010
- [2026-08-29] openalex search "diet quality chronic obstructive pulmonary disease incidence cohort" -> 0 hits: (none)
- [2026-08-29] openalex search "MASLD lifestyle intervention diet physical activity systematic review 2024" -> 0 hits: (none)
- [2026-08-29] openalex search "associations nutritional lifestyle metabolic factors nonalcoholic fatty liver disease" -> 0 hits: (none)
- [2026-08-29] openalex resolve "10.3233/JPD-202521" -> 1 hits: https://doi.org/10.3233/jpd-202521
- [2026-08-29] openalex resolve "10.1038/s41531-023-00603-z" -> 1 hits: https://doi.org/10.1038/s41531-023-00603-z
- [2026-08-29] openalex resolve "10.1186/s12902-022-01015-5" -> 1 hits: https://doi.org/10.1186/s12902-022-01015-5
- [2026-08-29] openalex resolve "10.1111/obr.13464" -> 1 hits: https://doi.org/10.1111/obr.13464
- [2026-08-29] openalex resolve "10.1002/fsn3.3640" -> 1 hits: https://doi.org/10.1002/fsn3.3640
- [2026-08-29] openalex resolve "10.1681/asn.2020030384" -> 1 hits: https://doi.org/10.1681/asn.2020030384
- [2026-08-29] openalex fetch "10.3233/JPD-202521" -> 0 hits: (none)
- [2026-08-29] openalex search "Population fraction Parkinson attributable preventable risk factors" -> 0 hits: (none)
- [2026-08-29] openalex resolve "10.1038/s41531-023-00603-z 10.3390/app16062951 10.1097/MD.0000000000041599 10.1016/j.ajpc.2024.100868" -> 4 hits: https://doi.org/10.1038/s41531-023-00603-z; https://doi.org/10.3390/app16062951; https://doi.org/10.1097/md.0000000000041599; https://doi.org/10.1016/j.ajpc.2024.100868
- [2026-08-29] openalex fetch "10.1681/asn.2020030384" -> 0 hits: (none)
- [2026-08-29] openalex fetch "10.1038/s41531-023-00603-z" -> 0 hits: (none)
- [2026-08-29] openalex fetch "10.3390/app16062951" -> 0 hits: (none)
- [2026-08-29] openalex fetch "10.1097/MD.0000000000041599" -> 0 hits: (none)
- [2026-08-29] openalex fetch "10.1002/fsn3.3640" -> 0 hits: (none)
- [2026-08-29] openalex fetch "10.1016/j.ajpc.2024.100868" -> 0 hits: (none)
- [2026-08-29] openalex fetch "10.1186/s12902-022-01015-5" -> 0 hits: (none)
- [2026-08-29] openalex fetch "10.1515/med-2025-1259" -> 0 hits: (none)

## [2026-08-29] SELECTION RECORD — modifiable/lifestyle causes of age-related diseases (11-domain breadth sweep)

**Scope.** Maintainer research request across 11 age-related disease domains (dementia, Parkinson's,
cancer, CVD, Alzheimer's, frailty, musculoskeletal, metabolic, pulmonary, sensory, kidney). Discovery
fanned out to 4 parallel scouts (web-discovery + openalex-verify); acquisition + this record centralized.
Coverage survey first (registry keyword rows): CVD \~103, metabolic \~70, cancer \~52, dementia \~23, MSK \~23,
frailty \~15, kidney \~9, sensory \~9, pulmonary \~8, Parkinson \~2. Held-lighthouse cross-check confirmed the
OPEN domains: **sensory (nothing held), pulmonary/COPD (nothing; Omenn is lung *cancer*), Parkinson (Fang
2018 activity-only), CKD (He 2020 dietary-patterns SR only)**. Acquisition prioritized the open domains +
dietary-PATTERN-axis advancers for the well-covered ones (the single-nutrient WCRF/GRADE corpus under-covers
patterns). ECHO-GUARD applied to dementia/cancer/CVD/metabolic.

**Fetch reality:** environment-level IP-wall — plain openalex fetch AND local Playwright both hit HTTP
403/HTTPError on ASN, MDPI, Wiley, IOS Press; only Nature (npj) and BMC succeeded. Blocked-but-genuinely-OA
sources are maintainer-drops (NOT downgraded, per acquisition-pause-and-ask). Steel cloud-browser not
invoked unilaterally (gated/costly — maintainer's call).

### SELECTED — fetched to inbox/ (2)
- **Payami et al. 2023 — Population fraction of Parkinson's disease attributable to preventable risk factors**
  (npj Parkinson's Disease; DOI 10.1038/s41531-023-00603-z; PAF/high; OA). PD PAF rock-sizer, opens the
  attributable-fraction framing for an open domain. -> inbox/.
- **Peng et al. 2022 — Lifestyle, metabolic syndrome and NAFLD: umbrella review** (BMC Endocrine Disorders;
  DOI 10.1186/s12902-022-01015-5; umbrella/gold; OA). Multi-lever NAFLD-outcome consolidation; component
  levers partly held, value is the MASLD-outcome umbrella. -> inbox/.

### SELECTED — MAINTAINER-DROP (vetted advancers, publisher-blocked; drop PDF into inbox/)
Open-domain landmarks (highest priority):
- **Kelly et al. 2020 — Modifiable Lifestyle Factors for Primary Prevention of CKD: SR+MA** (JASN;
  DOI 10.1681/asn.2020030384; SR+MA 104 studies/2.75M; gold; OA but ASN 403). ★ THE CKD-incidence opener.
- **Belvisi et al. 2021 — Non-Genetic Risk Factors for Parkinson's: overview of 46 SRs** (J Parkinsons Dis;
  DOI 10.3233/JPD-202521; overview-of-SRs/gold; OA but IOS 403). ★ broadest PD multi-lever opener.
- **Hearing CV-risk umbrella 2026** (Applied Sciences/MDPI; DOI 10.3390/app16062951; umbrella/gold; OA but
  MDPI 403). ★ opens sensory-hearing at gold-design tier (new, appraise rigor at ingest).
- **AMD risk factors updated SR+MA 2025** (Medicine/LWW; DOI 10.1097/MD.0000000000041599; SR+MA; paywalled).
  ★ opens sensory-vision (smoking-dominant lever + cardiometabolic).
- **Fiber intake & COPD dose-response MA 2023** (Food Sci Nutr/Wiley; DOI 10.1002/fsn3.3640; SR+dose-response
  MA; OA but Wiley 403). Cleanest fetchable COPD diet lever (per-10g/d fiber \~ -26%).
Covered-domain new-axis advancers:
- **Zhang et al. 2024 — Dietary patterns & multiple cancers: umbrella** (AJCN; DOI 10.1016/j.ajcnut.2024.11.020;
  umbrella/gold; Elsevier). Pattern-axis the single-nutrient WCRF corpus under-covers.
- **Vegetarian patterns & CVD: umbrella of SRs 2024** (Am J Prev Cardiol; DOI 10.1016/j.ajpc.2024.100868;
  umbrella/gold; OA-journal but no-OA-pdf located). Fresh incidence-level pattern lever (CVD incidence RR 0.85).
- **GBD 2023 CVD burden & risk factors** (JACC; DOI 10.1016/j.jacc.2025.08.015; GBD/high; OA). Layer-1
  rock-sizing update to held Afshin GBD 2019 (79.6% of CVD burden modifiable).
- **Yu et al. 2022 — Modifiable risk factors for dementia: umbrella** (J Affective Disorders;
  DOI 10.1016/j.jad.2022.07.008; umbrella/gold; Elsevier). Graded per-lever magnitudes the held Livingston
  2024 Commission borrows rather than shows.
- **WCRF/AICR CUP diet+lifestyle report, updated Sept 2025** (WCRF; no DOI, direct wcrf.org PDF; report/gold-eq).
  Newest CUP, postdates held WCRF 2018; pattern-level judgements.
- **Knee OA risk factors across lifespan: SR+MA 2025** (Osteoarthritis & Cartilage; DOI 10.1016/j.joca.2025.03.003;
  SR+MA/gold; Elsevier). Overweight + prior injury as dominant modifiable levers w/ attributable fractions.
- **Tanaffos diet-COPD MA 2019** (Seyedrezazadeh; no DOI, PMCID PMC7309892; MA/high; PMC captcha). Broader-but-
  messier COPD diet map (fruit/fiber/fish protective); acquire if the fiber MA leaves it thin.

### DEFERRED / REJECTED (logged, not acquired — reason)
- **Livingston 2024 Lancet dementia Commission** — ALREADY HELD (registry: Livingston - Dementia Prevention 2024). Echo.
- Karger dementia umbrella 2024 (10.1159/000536643), Rosenau Delphi 2024 (10.1002/alz.13577) — convergence /
  gap-finder; take only if Yu leaves levers thin.
- Bellou 2016 PD umbrella (10.1016/j.parkreldis.2015.12.008) — superseded by Belvisi 2021.
- BMI-cancer umbrella 2023 (10.1080/01635581.2023.2180824) — partial-held (refreshes WCRF Body Fatness 2018).
- Nat Commun 2021 diet-cancer umbrella (10.1038/s41467-021-24861-8) — superseded by Zhang 2024.
- Nutrients cardiometabolic-patterns umbrella (10.3390/nu16223873) — surrogate endpoints; DOI unverified.
- Hip-fracture lifestyle MA 2021 (10.1007/s00774-021-01230-5), Vit-D fractures umbrella 2021 (10.1210/clinem/dgab742)
  — MSK intervention side well-covered (vit-D/Ca/fracture heavily held); single-exposure.
- Frailty risk MA 2025 (10.1515/med-2025-1259, paywalled) + lifestyle-sarcopenia narrative review 2025
  (10.1097/MCO.0000000000001111) — frailty moderately covered; MA mixes non-modifiable, review sub-gold.
- NAFLD treatment umbrella (10.1111/obr.13464) — prescriber-edge (treatment of established NAFLD).
- Cataract BMI MA (10.5935/0004-2749.2021-0382) — single-exposure; **cataract has NO comprehensive umbrella**.
- CKD progression+QoL SR 2023 (PMC10205767) — secondary to Kelly; DOI unverified.

### G-GAPS surfaced (named, not acquisition targets)
- **COPD:** no comprehensive multi-lever modifiable-risk umbrella beyond smoking; physical-activity x incident-COPD
  has no pooled MA (single cohorts only — China Kadoorie etc.).
- **Cataract:** no comprehensive modifiable-risk umbrella/SR; literature fragmented into single-exposure MAs
  (BMI, smoking, UV).
- **Frailty/sarcopenia:** current syntheses skew to intervention-effect MAs, not incidence risk-factor syntheses.
- [2026-08-29] openalex resolve "10.1681/ASN.2020030384" -> 1 hits: https://doi.org/10.1681/asn.2020030384
- [2026-08-29] openalex resolve "10.3390/app16062951" -> 1 hits: https://doi.org/10.3390/app16062951
- [2026-08-29] openalex resolve "10.1097/MD.0000000000041599" -> 1 hits: https://doi.org/10.1097/md.0000000000041599
- [2026-08-29] openalex resolve "10.1016/j.ajcnut.2024.11.020" -> 1 hits: https://doi.org/10.1016/j.ajcnut.2024.11.020
- [2026-08-29] openalex resolve "10.1016/j.ajpc.2024.100868" -> 1 hits: https://doi.org/10.1016/j.ajpc.2024.100868
- [2026-08-29] openalex resolve "10.1016/j.jad.2022.07.008" -> 1 hits: https://doi.org/10.1016/j.jad.2022.07.008
- [2026-08-29] openalex resolve "10.1016/j.joca.2025.03.003" -> 1 hits: https://doi.org/10.1016/j.joca.2025.03.003

### ARRIVED 2026-08-29 — process-inbox reconciliation (10 staged, 1 deduped, 3 still-missing)
Maintainer dropped 9 PDFs; combined with the 2 openalex-fetched (Payami, Peng). All processed into
`raw/binary/papers/`, registered in `sources.md`, DOI-logged, queue-blocked (`ingest-queue.md` INBOX
DROP 2026-08-29). Chunk-clean (born-digital, no OCR). **Scout-name corrections** (verified from PDF
title pages at staging):
- PD overview "Belvisi et al. 2021" is actually **Chen, Yancong et al.** (10.3233/JPD-202521) — and it
  was **ALREADY INGESTED** (registry `chen2021pd`, woven into the Age-Related Diseases deliverable). The
  re-dropped copy DEDUPED to `inbox/_duplicates/`; not re-staged.
- Cancer umbrella "Zhang et al. 2024" is actually **Yin, Jia-Li et al.** (AJCN, 10.1016/j.ajcnut.2024.11.020);
  registered `yin2025cancer` (2025 print vol).
- Dementia umbrella "Yu et al. 2022" is the **Zhang, Yaru et al.** ResearchSquare **PREPRINT**
  (10.21203/rs.3.rs-1151683/v1); **VoR = J Affect Disord 2022;314:160-167, 10.1016/j.jad.2022.07.008,
  cites=108** — registered tier **moderate** with a `[PREPRINT]` caveat; acquire the VoR before citing
  effect sizes.

**Tier notes set at staging:** Moreno-Herraiz hearing umbrella -> **moderate** (GRADE LOW + MDPI
Applied Sciences off-field + cites=1); Payami PD-PAF -> **moderate** (single regional case-control, not
an SR). The rest gold/high by design.

**STILL-MISSING (3 of the maintainer-drop advancers — NOT provided in this drop):**
- **GBD 2023 CVD burden & risk factors** — JACC, `10.1016/j.jacc.2025.08.015` (Layer-1 rock-sizing
  refresh of held Afshin GBD 2019).
- **WCRF/AICR CUP diet+lifestyle report, updated Sept 2025** — direct wcrf.org PDF, no DOI.
- **Tanaffos diet-COPD MA 2019** (Seyedrezazadeh) — no DOI, PMCID `PMC7309892` (PMC captcha-blocked).
Re-drop any of these if wanted.

### FOLLOW-UP DROP 2026-08-29b — 2 more files
- **WCRF CUP Global DLP report ARRIVED** -> cashes the still-missing "WCRF/AICR CUP 2025" slot.
  Staged `raw/binary/papers/WCRF - Dietary Lifestyle Patterns Cancer Prevention 2025.pdf`; registered
  `wcrf2025dlp` (gold report, no DOI). Chunk-clean (2 chunks, paragraph-pack). Pattern-axis
  (breast 84 pubs / colorectal 86 pubs) postdating the held WCRF 2018 corpus.
- **Second file was NOT the Tanaffos MA.** It is `Turdaliyeva et al. 2023 - Cultural Food Habits &
  COPD in Kazakhstan` (ResearchSquare PREPRINT 10.21203/rs.3.rs-3130446/v2), a single-population
  case-control (609 non-smoking men, red-meat -> COPD, self-report). Sub-gold + preprint + weaker than
  the held Valisoltani/Parvizian COPD MAs -> PARKED `inbox/_hold/` (not active-queued, not registered).
- **Still-missing:** GBD 2023 CVD (10.1016/j.jacc.2025.08.015) + the intended Tanaffos diet-COPD MA
  2019 (Seyedrezazadeh, PMC7309892).
- [2026-08-29] openalex search "placebo adherence mortality meta-analysis" -> 2 hits: https://doi.org/10.1007/s00392-013-0642-6; ?
- [2026-08-29] openalex search "healthy adherer effect" -> 6 hits: https://doi.org/10.1111/jep.12095; https://doi.org/10.1136/bmj.333.7557.18; https://doi.org/10.1177/2047487314544084; https://doi.org/10.1007/s00198-014-2900-5; https://doi.org/10.1002/acr.21759
- [2026-08-29] openalex search "dietary guideline adherence confounding" -> 0 hits: (none)
- [2026-08-29] openalex search "secular changes coffee coronary heart disease confounding" -> 0 hits: (none)
- [2026-08-29] openalex search "trans fat dietary recommendations margarine history" -> 0 hits: (none)
- [2026-08-29] openalex fetch "10.1136/bmj.333.7557.18" -> 0 hits: (none)
- [2026-08-29] openalex resolve "10.1007/s00392-013-0642-6" -> 1 hits: https://doi.org/10.1007/s00392-013-0642-6

## [2026-08-29] SELECTION RECORD — "was 'the guideline, not the food, was causal' ever quantified?" (challenge-driven)
Question: quantify guideline-adherence confounding — the pure-bundle magnitude, and any guideline-specific-
food natural experiment (margarine promotion / egg vilification). Channel: openalex (5 queries auto-logged).
- **SELECTED -> acquire (pure-form healthy-adherer magnitude, UNHELD) — DOI CORRECTED [2026-08-29]:**
  - `10.1136/bmj.38875.675486.55` Simpson SH et al. 2006 BMJ 333:15 "A meta-analysis of the association
    between adherence to drug therapy and mortality" (oa=True, cites 1374) — **THE magnitude paper** (the
    pooled placebo/drug-adherence -> mortality OR). **Acquisition BLOCKED** (openalex fetch HTTPError on the
    BMJ PDF, both attempts) -> pause-and-ask maintainer (escalate fetch_browser/Steel, or manual drop of
    bmj.com/content/bmj/333/7557/15.full.pdf). NOT downgraded.
  - `10.1136/bmj.38865.675486.55` Chewning 2006 BMJ 333:18 commentary "The healthy adherer and the placebo
    effect" — **IN HAND** (maintainer drop) but it is a one-page NARRATIVE commentary ON Simpson, carries the
    qualitative statement («adherence ... a surrogate marker for overall healthy behaviour») but NO pooled
    number; tier context/weak, NOT the anchor. My earlier DOI `10.1136/bmj.333.7557.18` pointed HERE (page 18)
    by mistake, not at the page-15 meta-analysis.
  - `10.1007/s00392-013-0642-6` 2013 Clin Res Cardiol MA "placebo adherence on reducing CV mortality"
    (meta-analysis, cites 31, oa=False) — the pooled hard-outcome magnitude. Non-OA -> maintainer-drop.
  - `10.1111/jep.12095` 2013 "Healthy adherer effect — the pitfall in interpretation" (oa=False) — the
    interpretive review; DEFER (secondary to the two above).
- **REJECTED / not-pursued:** the drug-specific replications (bisphosphonate 10.1007/s00198-014-2900-5;
  cardiac-rehab 10.1177/2047487314544084; fracture 10.1002/acr.21759; Archintern 2009 10.1001/archinternmed.2009.324)
  — corroborate the effect in narrow drug contexts, add no independent magnitude beyond the MA; hold in reserve.
- **ZERO-HIT queries (Q3-Q5: guideline-adherence-confounding / secular coffee-CHD drift / trans-fat-margarine
  history) — attribute to TOOL, not corpus.** openalex title.search is AND-strict on long multi-token phrases;
  Q1/Q2 fired, so the engine works. These zeros do NOT establish literature absence — a broad web/Scholar pass
  is the honest next step if pushed. Working inference (identification-argument-backed): the guideline-specific-
  food natural-experiment quantification is a genuine G-gap.
- [2026-08-29] openalex search "meta-analysis association between adherence to drug therapy and mortality" -> 1 hits: https://doi.org/10.1136/bmj.38875.675486.55
- [2026-08-29] openalex fetch "10.1136/bmj.38875.675486.55" -> 0 hits: (none)
- [2026-08-30] openalex search "inorganic nitrate blood pressure meta-analysis" -> 6 hits: https://doi.org/10.3945/jn.112.170233; https://doi.org/10.1016/j.niox.2021.04.006; https://doi.org/10.1097/hjh.0000000000002524; https://doi.org/10.1016/j.freeradbiomed.2024.02.011; https://doi.org/10.32920/26521168.v1
- [2026-08-30] openalex search "physical activity exercise chronic pain systematic review" -> 3 hits: https://doi.org/10.3390/healthcare4020022; https://doi.org/10.1177/1357633x17716576; https://doi.org/10.53841/bpshpu.2019.28.3.10
- [2026-08-30] openalex search "physical activity exercise chronic pain overview Cochrane reviews" -> 3 hits: https://doi.org/10.1002/14651858.cd011279.pub3; https://doi.org/10.1002/14651858.cd011279.pub2; https://doi.org/10.1002/14651858.cd011279
- [2026-08-30] openalex search "healthspan lifestyle intervention randomized" -> 0 hits: (none)
- [2026-08-30] openalex search "falls prevention interventions network meta-analysis older" -> 0 hits: (none)
- [2026-08-30] openalex search "healthspan randomized controlled trials systematic review" -> 1 hits: https://doi.org/10.1093/gerona/glag133
- [2026-08-30] openalex search "diet exercise healthspan meta-analysis" -> 0 hits: (none)
- [2026-08-30] openalex search "exercise fall prevention network meta-analysis" -> 2 hits: https://doi.org/10.3389/fmed.2026.1831444; https://doi.org/10.1016/j.puhe.2026.106316
- [2026-08-30] openalex search "interventions preventing falls community older adults meta-analysis" -> 3 hits: https://doi.org/10.1111/jgs.17375; https://doi.org/10.1016/j.ijnurstu.2020.103564; https://doi.org/10.1016/j.maturitas.2022.12.003
- [2026-08-30] openalex resolve "10.3945/jn.112.170233 10.1002/14651858.cd011279.pub3 10.1093/gerona/glag133" -> 3 hits: https://doi.org/10.3945/jn.112.170233; https://doi.org/10.1002/14651858.cd011279.pub3; https://doi.org/10.1093/gerona/glag133
- [2026-08-30] openalex fetch "10.1002/14651858.cd011279.pub3" -> 0 hits: (none)
- [2026-08-30] openalex fetch "10.1111/jgs.17375" -> 0 hits: (none)
- [2026-08-30] openalex fetch "10.3945/jn.112.170233" -> 0 hits: (none)
- [2026-08-30] openalex fetch "10.1093/gerona/glag133" -> 0 hits: (none)

## [2026-08-30] SELECTION RECORD — breadth restock (research-first, per maintainer): nitrate->BP · PA->pain · falls-NMA · healthspan
Context: age-related-diseases breadth batch (8/8) fully ingested; maintainer chose "research first, then
ingest" over the deferred in-hand domain gold (Brickwood/Franz defer-carded; Fried HELD). Target = the 4
"continue breadth" gold names from the Gate-31 queue-review (2026-08-28). One search cluster per gap.

**SELECTED (4 — all identified with clean DOIs; NONE plain-fetchable -> maintainer-drop):**
1. `Siervo - Inorganic Nitrate Beetroot Blood Pressure 2013` — DOI 10.3945/jn.112.170233 (J Nutr;
   gold/MA; cites 373; oa=True). The landmark nitrate/beetroot->BP MA; opens the dietary-nitrate->BP
   cell (unheld). Fetch: ScienceDirect HTTP 403 (plain + local Playwright). -> maintainer-drop.
2. `Geneen - Physical Activity Chronic Pain Cochrane Overview 2017` — DOI 10.1002/14651858.cd011279.pub3
   (Cochrane overview-of-reviews; gold; cites 1186; oa=True). The PA->chronic-pain umbrella; extends
   [[Chronic Pain and Physical Activity]]. Fetch: Cochrane Library HTTP 403. -> maintainer-drop.
3. `Falls Prevention NMA Community Older Adults 2021` — DOI 10.1111/jgs.17375 (JAGS; SR + NETWORK
   meta-analysis; gold; cites 210; oa=True). Falls-prevention NMA (the queue's "Pillay falls-NMA" cell;
   SELECTED on fit-to-question — a gold falls NMA — author to VERIFY at process-inbox; if not the exact
   intended paper it is a valid gold substitute for the same cell). Fetch: Wiley pdfdirect HTTP 403.
   -> maintainer-drop.
4. `Zheng - Interventions Multidimensional Healthspan 2026` — DOI 10.1093/gerona/glag133 (J Gerontol;
   systematic review; gold; cites 0 [new 2026]; title exact-match "Interventions that prolong
   multidimensional healthspan in humans: a systematic review"). Author = VERIFY at process-inbox (queue
   named "Zheng"). Fetch: OUP PAYWALLED (no OA pdf resolvable). -> maintainer-drop.

**Zero-hit queries attributed (query-strictness, NOT literature-absence):**
- "healthspan lifestyle intervention randomized" (0), "diet exercise healthspan meta-analysis" (0) —
  openalex title.search AND-strictness on the rare word "healthspan"; the looser "healthspan randomized
  controlled trials systematic review" returned the target (glag133). Not a literature absence.
- "falls prevention interventions network meta-analysis older" (0) — over-specified; "interventions
  preventing falls community older adults" (--type meta-analysis) returned jgs.17375. Not an absence.

**REJECTED / not-selected:**
- Nitrate cluster: the 2021 niox.2021 (older-adults-only, cites 32), 2020 hjh (repeated-admin, oa=False),
  2024 freeradbiomed (during/post-EXERCISE BP, off-question) — all narrower/lower-cited than Siervo 2013;
  Siervo is the broadest landmark. Held as fallbacks only if Siervo cannot be dropped.
- Falls cluster: 2020 ijnurstu (multifactorial only, oa=False), 2023 maturitas (cost-effectiveness,
  off-question), 2026 Frontiers/PubHealth (brand-new cites=0, narrower exercise-only) — jgs.17375 is the
  well-cited comprehensive NMA. 2026 ones held as fallback.
- PA-pain cluster: 2016 healthcare4020022 (non-specific LBP only), 2017 telemedicine (delivery-mode, not
  the exposure) — the Geneen Cochrane overview dominates as the umbrella.

**Acquisition-requested:** all 4 -> BLOCKED (403/paywall) on plain openalex fetch AND local Playwright.
Per acquisition-pause-and-ask: NOT downgraded. PAUSED for maintainer PDF-drop into inbox/ (or authorize a
Steel/--service steel attempt on the 3 OA ones). DOIs recorded above; nothing ingested.

## [2026-08-30] CORRECTION — breadth-restock batch was ALREADY HELD (acquisition dedup failure)
The 2026-08-30 SELECTION RECORD above staged 4 "gold" sources (Geneen, Dautzenberg, Siervo, Zheng) as
fresh acquisitions. ALL FOUR were already held: Geneen/Siervo/Zheng are exact-DOI duplicates of sources
ingested 2026-08-28; Dautzenberg is an older falls NMA saturated by the ingested Pillay 2024 NMA +
Sherrington 2019. The research pass deduped only against the active ingest-queue, not against ingested
ground truth (`done/` + `wiki/sources/`), so it re-discovered landmark papers already in the fabric.
NONE ingested. Caught by the delegated author-!=-auditor agent (Geneen) + parent saturation check
(the other 3). Rows removed from the registry; all 4 recorded in `rejected-sources.md`; process fix
logged to `backlog.md` (dedup on DOI/md5 vs the held set at the acquisition step, not slug vs queue).
Search-ledger lesson: a candidate's novelty must be checked against INGESTED ground truth, not the queue.
- [2026-08-30] openalex search "alcohol energy intake appetite systematic review" -> 0 hits: (none)
- [2026-08-30] openalex search "alcohol food intake meta-analysis" -> 2 hits: https://doi.org/10.1017/s0007114518003677; ?
- [2026-08-30] openalex search "food reward energy intake systematic review" -> 0 hits: (none)
- [2026-08-30] openalex search "palatability energy intake meta-analysis" -> 0 hits: (none)
- [2026-08-30] openalex fetch "10.1017/s0007114518003677" -> 0 hits: (none)
- [2026-08-30] openalex search "hedonic hunger" -> 6 hits: https://doi.org/10.1016/j.physbeh.2007.04.006; https://doi.org/10.3945/ajcn.2009.29007; https://doi.org/10.1503/jpn.110156; https://doi.org/10.1002/osp4.161; https://doi.org/10.1007/s11695-012-0754-5
- [2026-08-30] openalex search "eating rate energy intake" -> 6 hits: https://doi.org/10.3945/ajcn.113.081745; https://doi.org/10.1016/j.appet.2010.11.141; https://doi.org/10.1093/cdn/nzaa019; https://doi.org/10.1017/s0007114517000848; https://doi.org/10.1093/ajcn/nqac068
- [2026-08-30] openalex search "hyperpalatable food intake" -> 3 hits: https://doi.org/10.1016/j.eatbeh.2023.101841; https://doi.org/10.1016/j.cdnut.2026.109205; https://doi.org/10.2337/db26-1082-or
- [2026-08-30] openalex search "food reward obesity" -> 6 hits: https://doi.org/10.1016/j.tics.2010.11.001; https://doi.org/10.1016/j.neuroimage.2008.02.031; https://doi.org/10.1037/a0013600; https://doi.org/10.1038/ijo.2009.138; https://doi.org/10.1007/7854_2011_169
- [2026-08-30] openalex search "sugar craving" -> 6 hits: ?; https://doi.org/10.1093/jn/133.3.835s; ?; https://doi.org/10.1007/s00213-009-1474-y; https://doi.org/10.3390/nu14153240
- [2026-08-30] openalex search "sweet taste appetite satiety" -> 0 hits: (none)
- [2026-08-30] openalex fetch "10.3945/ajcn.113.081745" -> 0 hits: (none)
- [2026-08-30] openalex search "food addiction systematic review" -> 5 hits: https://doi.org/10.3390/nu6104552; https://doi.org/10.1159/000442403; https://doi.org/10.3390/nu10040477; https://doi.org/10.1111/jhn.12532; https://doi.org/10.1111/obr.12600
- [2026-08-30] openalex search "food addiction prevalence" -> 5 hits: https://doi.org/10.3390/nu6104552; https://doi.org/10.1371/journal.pone.0074832; https://doi.org/10.1159/000456013; https://doi.org/10.1016/j.jpsychires.2017.10.003; https://doi.org/10.1002/erv.2878
- [2026-08-30] openalex search "palatable food overconsumption" -> 5 hits: https://doi.org/10.2174/1874473711104030163; https://doi.org/10.1016/0031-9384(84)90279-8; https://doi.org/10.1016/j.celrep.2024.113675; https://doi.org/10.1038/s41386-021-00957-z; https://doi.org/10.1242/prelights.35004
- [2026-08-30] openalex search "sugar sweetened beverage appetite satiety" -> 1 hits: https://doi.org/10.1016/j.appet.2016.02.036
- [2026-08-30] openalex search "energy density ad libitum energy intake" -> 5 hits: https://doi.org/10.1093/ajcn/62.2.316; https://doi.org/10.1093/ajcn/62.2.330; https://doi.org/10.1038/sj.ijo.0800715; https://doi.org/10.1038/s43016-022-00688-4; https://doi.org/10.1093/ajcn/60.4.465
- [2026-08-30] openalex fetch "10.3390/nu10040477" -> 0 hits: (none)
- [2026-08-30] openalex resolve "10.3945/ajcn.113.081745 10.3390/nu10040477" -> 2 hits: https://doi.org/10.3945/ajcn.113.081745; https://doi.org/10.3390/nu10040477

## [2026-08-30] SELECTION RECORD — consumption-cascade gaps (efficacy-vs-effectiveness challenge)

Filling the two G-gaps opened by the 2026-08-30 challenge (`user-challenge-ledger.md`; queue
`consumption-cascade` section): SUGAR/palatability -> reward -> intake, and ALCOHOL -> food intake.
Dedup done vs INGESTED ground truth (`wiki/sources/` + `done/`), not just the queue — no held source
covers either cascade (all held alcohol = cancer/vascular/BP/mortality; all held sugar =
caries/weight/glucose). Gold-gate + symmetric standards (a source that would REFUTE the maintainer's
intuition clears the same bar as one that confirms it).

**GAP 2 — ALCOHOL -> food/energy intake. FILLED.**
- **SELECTED + FETCHED -> inbox/:** «Effect of alcohol consumption on food energy intake: a systematic
  review and meta-analysis» — BJN 2019, doi `10.1017/s0007114518003677`, OA, cites 84, gold (MA).
  Slug `Kwok - Alcohol and Food Energy Intake Meta-Analysis 2019`. Directly the aperitif-effect / passive
  over-consumption mechanism; the exact decision-question the gap names.
- REJECTED: the 2003 "Meta-analysis and Pooled Analysis... Diet and Chronic Diseases: Alcohol" (no DOI,
  0 cites, oa=False) — off-question (chronic-disease pooling, not acute intake).
- 0-hit "alcohol energy intake appetite systematic review" = `title.search` strictness (the MA above
  carries "food energy intake" not "appetite"), NOT literature absence — proven by Q2 hitting it.

**GAP 1 — SUGAR/palatability -> reward -> intake. PARTIALLY FILLED (2 golds, both BLOCKED -> maintainer-
drop); the reward->intake OUTCOME MA appears NOT to exist (mechanism-dominated field).**
- **SELECTED, BLOCKED -> maintainer-drop:** «A systematic review and meta-analysis examining the effect
  of eating rate on energy intake» — AJCN 2014, doi `10.3945/ajcn.113.081745`, cites 351, gold (SR/MA).
  Slug intent `Robinson - Eating Rate and Energy Intake Meta-Analysis 2014` (Robinson E, confirmed). The
  RATE side of the rate-vs-reward question the fabric's held Hall UPF RCT opened (Hall: +508 kcal driven
  by eating RATE, "not palatability"). AJCN OA flag is unreliable — plain fetch returned PAYWALLED. NOT
  downgraded.
- **SELECTED, BLOCKED -> maintainer-drop:** «What Is the Evidence for "Food Addiction?" A Systematic
  Review» — Nutrients 2018, doi `10.3390/nu10040477`, cites 317, gold (SR). Author to confirm at intake
  (not guessed). The REWARD-side evidence-appraisal — a symmetric-standards gold that tests, rather than
  assumes, the sugar-reward-drive claim. Genuinely OA (MDPI) but plain fetch AND fetch_browser both 403;
  likely on PMC — maintainer-drop or PMC route.
- DEFERRED: «The Prevalence of Food Addiction as Assessed by the Yale Food Addiction Scale: A Systematic
  Review» (Nutrients 2014, doi `10.3390/nu6104552`, cites 546, gold SR, OA) — measures how COMMON the
  YFAS construct is, not whether reward drives intake/weight; lower decision-value than the 2018 evidence
  SR. Reconsider if the 2018 SR proves unobtainable.
- REJECTED (mechanism tier, would inform DIRECTION only — the gap wants a human OUTCOME source): the
  food-reward neuroimaging/dopamine landmarks (Volkow tics.2010.11.001; Stice a0013600) and the
  palatable-food animal-circuit papers (AgRP celrep.2024; CB1 s41386-021) — all mechanism/animal, not
  human ad-libitum outcome. Confirm the field's shape: the reward cascade is MECHANISM-rich,
  human-outcome-SR-poor.
- ADJACENT, not acquired (scope — a THIRD mechanism, and individual RCTs not SR): energy-density -> ad
  libitum intake (Rolls/Stubbs covert-manipulation lineage, ajcn/62.2.316 etc.; oa=False). Note for a
  future energy-density gap, distinct from reward and rate.

**Honest sub-finding (records to the challenge verdict):** the SUGAR-reward -> subsequent-intake channel
has NO gold human-OUTCOME MA — it is served by mechanism/neuroimaging/animal work plus contested
"food addiction" construct SRs. This VINDICATES the fabric's pre-existing "insufficient-evidence"
position and its Hall eating-rate emphasis: the closest gold human evidence is on eating RATE and energy
DENSITY, not on reward/palatability drive. Acquire Robinson (rate) + the 2018 evidence SR (reward
appraisal); do NOT expect a clean reward->intake magnitude to exist.

**Hand-off:** `process inbox` stages Kwok (fetched); the two maintainer-drop DOIs await PDF drop before
staging. Nothing ingested here.
- [2026-08-30] openalex search "hyperpalatable food definition" -> 0 hits: (none)
- [2026-08-30] openalex search "hyper-palatable food" -> 8 hits: https://doi.org/10.1002/oby.22639; https://doi.org/10.1038/s43016-022-00688-4; https://doi.org/10.3389/fnbeh.2017.00019; https://doi.org/10.1002/eat.23692; https://doi.org/10.1016/j.appet.2021.105592
- [2026-08-30] openalex search "hyperpalatable food energy intake" -> 0 hits: (none)
- [2026-08-30] openalex search "hyperpalatable food weight" -> 0 hits: (none)
- [2026-08-30] openalex search "hyperpalatable food systematic review" -> 1 hits: https://doi.org/10.1155/2022/4243868
- [2026-08-30] openalex search "which foods addictive processing glycemic" -> 1 hits: https://doi.org/10.1371/journal.pone.0117959
- [2026-08-30] openalex search "food industry palatability reward engineered" -> 0 hits: (none)
- [2026-08-30] openalex search "reward value food processing addictive" -> 0 hits: (none)
- [2026-08-30] openalex fetch "10.1371/journal.pone.0117959" -> 0 hits: (none)
- [2026-08-30] openalex fetch "10.1002/oby.22639" -> 0 hits: (none)

## [2026-08-30] SELECTION RECORD — hyper-palatable foods (HPF) as a construct distinct from ultra-processing

Extension of the same-day consumption-cascade research (maintainer-raised): research the
*engineered-palatability / habit-forming* channel as its OWN construct, separate from NOVA
ultra-processing. This is the telos "operationalize before admitting" move — HPF (Fazzino) is the
specified, measured version of the vague "palatability" label, and it separates the reward channel from
the processing/eating-rate channel that the held Hall UPF trial confounded. Gold-gate + symmetric
standards (an "engineered to be addictive" claim gets the same evidence bar — fad-bar applies).

**Field shape (the honest finding):** HPF is a NEWER field whose gold OUTCOME SR/MA does not yet exist.
The real advance is the operational DEFINITION (Fazzino 2019) — it makes HPF admissible as a specified
exposure at all. Outcome evidence is single-study / narrative-review dominated. This CONFIRMS and
sharpens the sugar-food-reward gap: palatability can be OPERATIONALIZED even though the outcome magnitude
is not yet gold — admit HPF as a specified candidate/gap under the transportability caveat, not as an
established effect.

**SELECTED + FETCHED -> inbox/:**
- «Which Foods May Be Addictive? The Roles of Processing, Fat Content, and Glycemic Load» — Schulte, PLoS
  ONE 2015, doi `10.1371/journal.pone.0117959`, OA, cites 657. Slug `Schulte - Which Foods May Be
  Addictive 2015`. THE "which properties are habit-forming" landmark — the maintainer's exact framing
  (processing level + fat + glycemic load as the addictive-load predictors). Tier: moderate (single
  cross-sectional YFAS + food-rating study), but a field-defining landmark -> tier-override at ingest.

**SELECTED, BLOCKED -> maintainer-drop:**
- «Hyper-Palatable Foods: Development of a Quantitative Definition and Application to the US Food System
  Database» — Fazzino, Obesity 2019, doi `10.1002/oby.22639`, cites 172. Slug intent `Fazzino -
  Hyper-Palatable Foods Quantitative Definition 2019`. **The construct anchor / operational definition**
  (fat+sugar, fat+sodium, carb+sodium threshold combinations) — the admissibility key without which HPF
  is just the vague label. Genuinely OA but Wiley pdfdirect 403 on plain + browser; on **PMC (PMC6768746)**
  — PMC route or maintainer-drop. Tier moderate (definition/food-system-DB paper) -> tier-override.
- «Ultraprocessed, hyper-palatable, and high energy density foods: Prevalence and...» — Obesity 2023, doi
  `10.1002/oby.23897`, cites 40, oa=False. The THREE-CONSTRUCT disambiguation (UPF vs HPF vs energy
  density prevalence/overlap) — the single most fabric-relevant piece for separating the rate /
  reward / processing / density channels. maintainer-drop. Tier moderate.

**DEFERRED (moderate, noted not acquired — avoid moderate-tier bloat / retention ratchet):**
- «The Reinforcing Natures of Hyper-Palatable Foods: Behavioral Evidence» (Curr Addict Rep 2022, doi
  `10.1007/s40429-022-00417-8`, cites 32, oa=False) — the behavioral-reinforcement narrative review;
  on-question but narrative-tier. Reconsider if the outcome channel needs a synthesis.
- «Relationship between Emotional Eating, Consumption of Hyperpalatable Energy-Dense Foods...» (J Obesity
  2022, Hindawi, doi `10.1155/2022/4243868`, cites 101, OA, flagged systematic-review) — **Hindawi
  provenance flag** + narrower (emotional-eating) question. The one nominal "SR" hit; quality-gate it
  hard before trusting.

**REJECTED:** the neuronal-plasticity / animal HPF pieces (fnbeh.2017.00019 etc.) — mechanism/animal tier,
direction-only, off the human-outcome question.

**Routes to the queue (challenge builds no fabric):** the `[consumption-cascade: sugar-food-reward]` gap
is EXTENDED into an HPF-operationalization sub-gap — the specified-exposure handle that lets the reward
channel be admitted distinct from UPF. Nothing ingested. Hand-off: `process inbox` stages Schulte +
Kwok; Fazzino / 2023-Obesity / (the 2018 Nutrients + Robinson from the earlier block) await maintainer
PDF drop.
- [2026-08-30] openalex search "flavonoid intake mortality meta-analysis" -> 4 hits: https://doi.org/10.1093/aje/kww207; https://doi.org/10.1002/mnfr.201601003; https://doi.org/10.3390/nu12082350; https://doi.org/10.1016/j.clnesp.2017.03.004
- [2026-08-30] openalex search "tea consumption cardiovascular mortality meta-analysis" -> 6 hits: https://doi.org/10.1007/s10654-014-9960-x; https://doi.org/10.1093/advances/nmaa010; https://doi.org/10.4178/epih.e2024056; https://doi.org/10.3389/fnut.2025.1570644; https://doi.org/10.3389/fnut.2025.1570644.s001
- [2026-08-30] openalex search "antidepressants efficacy acceptability major depression meta-analysis" -> 1 hits: https://doi.org/10.1136/bmjopen-2015-010919
- [2026-08-30] openalex search "antidepressant discontinuation symptoms systematic review systematic review" -> 3 hits: https://doi.org/10.1016/s2215-0366(24)00133-0; https://doi.org/10.1089/cap.2024.0099; ?
- [2026-08-30] openalex search "subclinical hypothyroidism levothyroxine outcomes meta-analysis" -> 6 hits: https://doi.org/10.1093/humupd/dms052; https://doi.org/10.1186/s12902-021-00699-5; https://doi.org/10.1186/s12958-018-0410-6; https://doi.org/10.1136/bmjopen-2018-022837; https://doi.org/10.3389/fendo.2021.797423
- [2026-08-30] openalex search "thyroid hormone therapy quality of life subclinical" -> 2 hits: https://doi.org/10.1001/jama.2018.13770; https://doi.org/10.3410/f.734154090.793551499
- [2026-08-30] openalex search "cannabis cardiovascular outcomes systematic review" -> 0 hits: (none)
- [2026-08-30] openalex search "electronic cigarettes cardiovascular systematic review systematic review" -> 5 hits: https://doi.org/10.1177/2047487319832975; https://doi.org/10.1016/j.ypmed.2019.105770; https://doi.org/10.1007/s10286-020-00683-4; https://doi.org/10.1186/s12954-020-00440-w; https://doi.org/10.1016/j.cpcardiol.2023.101748
- [2026-08-30] openalex search "comparative efficacy acceptability 21 antidepressant drugs" -> 3 hits: https://doi.org/10.1016/s0140-6736(17)32802-7; https://doi.org/10.1176/appi.focus.16407; https://doi.org/10.13140/rg.2.2.31113.51047
- [2026-08-30] openalex search "cannabis use cardiovascular disease meta-analysis" -> 2 hits: https://doi.org/10.1016/j.disamonth.2024.101849; https://doi.org/10.1161/hyp.81.suppl_1.p152
- [2026-08-30] openalex search "marijuana smoking respiratory function" -> 3 hits: https://doi.org/10.1001/archinte.167.3.221; https://doi.org/10.1001/archinte.167.3.221; ?
- [2026-08-30] openalex resolve "10.1093/advances/nmaa010 10.3390/nu12082350 10.1016/S0140-6736(17)32802-7 10.1016/S2215-0366(24)00133-0 10.1001/jama.2018.13770 10.1177/2047487319832975 10.1016/j.disamonth.2024.101849" -> 7 hits: https://doi.org/10.1093/advances/nmaa010; https://doi.org/10.3390/nu12082350; https://doi.org/10.1016/s0140-6736(17)32802-7; https://doi.org/10.1016/s2215-0366(24)00133-0; https://doi.org/10.1001/jama.2018.13770
- [2026-08-30] openalex fetch "10.3390/nu12082350" -> 0 hits: (none)
- [2026-08-30] openalex fetch "10.1093/advances/nmaa010" -> 0 hits: (none)

## [2026-08-30] SELECTION RECORD — breadth restock into GENUINELY-UNCOVERED domains (Gate-32 corrective #1)

**Context.** Gate 32 corrective #1: the 2026-08-30 restock died by re-discovering already-held landmarks
without checking ingested ground truth. This pass ran an Explore coverage-map FIRST (registry + hubs +
index + named-gap grep + staged/cut dedup) and targeted only cells confirmed THIN/ZERO. **Dedup vs
registry: flavonoid / antidepressant / levothyroxine / e-cigarette / cannabis all 0 hits — genuinely
uncovered.** Deliberate NON-targets (already appraised + CUT, do not re-search): sauna/heat, cold immersion
(no gold hard-outcome; `raw/binary/cut/`). Channel: openalex only (queries auto-logged above). Nothing
ingested; all SELECTED sources are fetch-blocked -> maintainer-drop (pause-and-ask, no downgrade).

**Cluster 1 — Tea / dietary flavonoids -> CVD & mortality (diet beverage + isolated-component; parallels
held coffee cluster).** Opens BOTH a whole-food (tea) and an isolated-nutrient (flavonoid) cell -> sets up
the food-vs-component / healthy-user-confound question the fabric prizes.
- SELECTED `Chung - Tea Consumption Cardiovascular Dose-Response 2020` (10.1093/advances/nmaa010; Adv Nutr;
  gold MA; dose-response SHAPE; cites=132; OA but OUP-blocked). WHY: the tea landmark with the curve.
- SELECTED `Mazidi - Flavonoid Intake and Mortality 2020` (10.3390/nu12082350; Nutrients; gold MA;
  dose-response; cites=28; OA but MDPI-blocked). WHY: the isolated-flavonoid cell (distinct exposure from
  tea). NOTE: Mazidi is prolific/sometimes-contested -> quality eye at ingest, design is gold MA.
- DEFERRED `Kim - Flavonoid Lignan Mortality 2016` (10.1093/aje/kww207; AJE; 287 cites, higher landmark) —
  fallback if Mazidi quality-fails. DEFERRED currency-checks: 2024 tea-mortality MA (10.4178/epih.e2024056),
  2025 coffee+tea CVD (10.3389/fnut.2025.1570644) — Chung's dose-response opens the cell; these add little
  at the margin. REJECTED: `...1570644.s001` (a supplement table, not a paper); 2014 Zhang tea MA
  (10.1007/s10654-014-9960-x; superseded by Chung dose-response).

**Cluster 2 — Antidepressants as a standing drug (telos names them; currently only an exercise-comparator).**
Efficacy + limitations frame.
- SELECTED `Cipriani - 21 Antidepressants Efficacy Acceptability 2018` (10.1016/S0140-6736(17)32802-7;
  Lancet; gold NMA, 522 trials/21 drugs; cites=3555; OA but Lancet-blocked). WHY: THE efficacy/acceptability
  landmark.
- SELECTED `Henssler - Antidepressant Discontinuation Symptoms 2024` (10.1016/S2215-0366(24)00133-0; Lancet
  Psychiatry; gold SR+MA; cites=96; OA but Lancet-blocked). WHY: the LIMITATIONS half (withdrawal incidence
  — separates true discontinuation-symptoms from nocebo).
- DEFERRED `... first-vs-second-gen 2016` (10.1136/bmjopen-2015-010919) — superseded by Cipriani. REJECTED:
  appi.focus reprint (10.1176/appi.focus.16407) + ResearchGate dup of Cipriani (both same paper).

**Cluster 3 — Subclinical hypothyroidism / levothyroxine -> patient-important outcomes (endocrine + standing
drug; sharp de-escalator question).**
- SELECTED `Feller - Thyroid Hormone Therapy Quality of Life 2018` (10.1001/jama.2018.13770; JAMA; MA;
  cites=262; OA but JAMA-blocked). WHY: the RIGHT stratum — general adults, QoL/symptom outcome (pools
  TRUST); the landmark de-escalator (no symptom benefit).
- REJECTED (off-stratum): ALL the pregnancy-outcome levothyroxine MAs (10.1093/humupd/dms052;
  10.1186/s12902-021-00699-5; 10.1186/s12958-018-0410-6; 10.1136/bmjopen-2018-022837;
  10.3389/fendo.2021.797423) — pregnancy management is a narrower, therapeutics-adjacent stratum, OFF the
  general-adult standing-drug question. DEFERRED companion RCT TRUST `Stott 2017 NEJM` (Feller's MA already
  pools it; acquire only if the RCT-level detail is needed).

**Cluster 4 — Cannabis / e-cigarettes -> CV (modern substance exposure; ZERO coverage; the analogue to held
smoking+alcohol big-rocks).** HONEST field-shape: NO gold hard-outcome (mortality) MA exists — cohorts too
young; evidence is surrogate/moderate. These OPEN the cell at insufficient-hard-outcome-evidence (the
"not yet" bucket, symmetric standards), NOT as a gold lever. Will need tier-overrides at ingest.
- SELECTED `Skotsimara - Electronic Cigarettes Cardiovascular Effects 2019` (10.1177/2047487319832975; Eur J
  Prev Cardiol; MA; cites=197; NOT OA -> paywalled). WHY: the e-cig CV-effects landmark (surrogate-heavy:
  HR/BP/autonomic — label as such).
- SELECTED `Sebastian - Cannabis Atherosclerotic Cardiovascular Disease 2025` (10.1016/j.disamonth.2024.101849;
  Dis Mon; MA; cites=5; NOT OA). WHY: the most recent cannabis->ASCVD MA; thin but the best held-able signal.
- DEFERRED `Tetrault - Marijuana Pulmonary Function 2007` (10.1001/archinte.167.3.221; the respiratory SR
  landmark, but 2007/dated). REJECTED: e-cig autonomic/surrogate SRs (10.1016/j.ypmed.2019.105770;
  10.1007/s10286-020-00683-4; 10.1186/s12954-020-00440-w — narrower surrogate arms); HYP abstract P152
  (10.1161/hyp.81.suppl_1.p152 — conference abstract, not a paper).

**Acquisition status (fields 4).** ALL 7 SELECTED = fetch-BLOCKED (openalex plain + headless browser both
403 on Chung/Mazidi; Lancet/JAMA/SAGE/Elsevier hard-walls) -> **MAINTAINER-DROP pending** (DOIs in
`staged-source-dois.tsv`). Steel-escalation NOT run (pause-and-ask; awaiting maintainer go-ahead vs manual
drop). Nothing downgraded. Hand-off: once dropped, `process inbox` stages + registers (canonical slugs +
tier-overrides for the moderate cluster-4 pair) -> then Ingest.
- [2026-08-31] openalex search "cocoa flavanol cardiovascular events randomized trial meta-analysis" -> 0 hits: (none)
- [2026-08-31] openalex search "cocoa flavanol cardiovascular" -> 3 hits: https://doi.org/10.1093/ajcn/nqac055; https://doi.org/10.1186/s12937-025-01121-9; https://doi.org/10.1007/s10654-026-01382-6
- [2026-08-31] openalex search "flavonoid supplementation cardiovascular meta-analysis" -> 0 hits: (none)
- [2026-08-31] openalex resolve "10.1093/ajcn/nqac055" -> 1 hits: https://doi.org/10.1093/ajcn/nqac055
- [2026-08-31] openalex search "flavonoid biomarker mortality cohort" -> 0 hits: (none)
- [2026-08-31] openalex search "flavonoid Mendelian randomization cardiovascular" -> 0 hits: (none)
- [2026-08-31] openalex fetch "10.1093/ajcn/nqac055" -> 0 hits: (none)

## [2026-08-31] SELECTION RECORD — component-isolating source to close the food-vs-component thread

**Gap (fields 1).** Close the food-vs-component held thread (Gate-33 top corrective). The fabric holds only
the FFQ-collinear OBSERVATIONAL side of the flavonoid question — `Mazidi - Flavonoid Intake and Mortality
2020` (component computed FROM carrier foods, never isolated) + `Chung - Tea Consumption Cardiovascular
Dose-Response 2020` (the food). [[Is the Food Category Doing Any Work]] names the exact missing designs:
"no biomarker, no isolated-flavonoid trial arm, and no Mendelian randomization — none of the designs that
separate a food-borne component from its carrier." Searched openalex (channel) for the three isolating
designs: isolated-flavanol RCT on a hard outcome / flavonoid-biomarker cohort MA / flavonoid-MR.

**Candidates + adjudication (fields 3).**
- SELECTED `Sesso - Cocoa Flavanol Cardiovascular COSMOS 2022` (10.1093/ajcn/nqac055; AJCN; **landmark RCT**,
  \~21,442 participants, cocoa-flavanol EXTRACT 500 mg flavanols/d incl. 80 mg epicatechin vs placebo, hard
  CV events; cites=181). WHY: the single most decisive closer — an actual RANDOMIZED PHYSICAL ISOLATION of
  the flavanol on a patient-important hard outcome, the strongest of the three isolating designs (beats an
  observational biomarker cohort, which is still confounded). Tier `high` (landmark RCT), type `rct`; a
  genuine ratchet-ADVANCER (a *different design* on the flavonoid question, not an echo of the held FFQ
  observational). The flavanol analog of the held Semba/resveratrol-biomarker null on the wine/resveratrol
  case.
- REJECTED `10.1186/s12937-025-01121-9` (2025 SR, cocoa flavanols -> peripheral/cerebral MICROVASCULAR
  function; oa=True, fetchable). WHY: outcome is a SURROGATE (microvascular function), not a patient-important
  hard outcome — fails fit-to-question. Fetchable, but taking it to dodge the COSMOS block would be exactly
  the downgrade the pause-and-ask rule forbids.
- DEFERRED `10.1007/s10654-026-01382-6` (2026, "Cocoa flavanol supplementation and prevention of CVD: a novel
  [analysis]"; oa=False). WHY: likely a re-analysis of COSMOS; acquire only if the primary trial's detail is
  insufficient after ingest.
- 0-hit queries: "flavonoid biomarker mortality cohort", "flavonoid Mendelian randomization cardiovascular",
  "flavonoid supplementation cardiovascular meta-analysis" — all attributable to `title.search` STRICTNESS
  (the design word rarely sits in the title), NOT a literature-absence claim. Not chased: COSMOS is the
  stronger design and one isolating source closes the flavonoid instance; the biomarker/MR routes stay a
  named G-gap if COSMOS alone proves insufficient.

**Acquisition status (fields 4).** SELECTED COSMOS = fetch-BLOCKED across ALL sanctioned rungs: openalex
plain fetch -> PAYWALLED (OUP/AJCN, no accessible OA PDF despite the oa=True flag); PMC free-to-read copy
(PMC9170467) behind a Cloudflare browser-check AND not in the PMC OA bulk-download subset (oa.fcgi 404);
headless Playwright + Steel both returned the 131-char Cloudflare interstitial. -> **MAINTAINER-DROP pending**
(DOI 10.1093/ajcn/nqac055; PMC9170467 free-to-read for manual save). Nothing downgraded. Hand-off: once
dropped to `inbox/`, `process inbox` stages + registers (slug `Sesso - Cocoa Flavanol Cardiovascular COSMOS
2022`, tier `high`, type `rct`) -> then a DELEGATED ingest subagent -> main-agent weave onto
[[Is the Food Category Doing Any Work]] / [[Flavonoid Intake and Mortality]] / [[Tea Consumption and Cardiovascular Risk]].
- [2026-08-31] openalex search "dietary nitrate blood pressure meta-analysis" -> 6 hits: https://doi.org/10.1016/j.jff.2024.106082; https://doi.org/10.1016/j.freeradbiomed.2024.02.011; https://doi.org/10.1039/d2fo03140j; https://doi.org/10.1186/s12937-025-01114-8; https://doi.org/10.1016/j.freeradbiomed.2024.03.002
- [2026-08-31] openalex fetch "10.1016/j.jff.2024.106082" -> 0 hits: (none)
- [2026-08-31] openalex fetch "10.1186/s12937-025-01114-8" -> 0 hits: (none)
- [2026-08-31] openalex resolve "10.1186/s12937-025-01114-8" -> 1 hits: https://doi.org/10.1186/s12937-025-01114-8

## [2026-08-31] SELECTION RECORD — nitrate/beetroot -> BP (next-breadth acquisition; staged gold drained)

**Trigger:** user chose "tee up next breadth ingest"; staged pile holds no fresh domain gold
(ingest-queue L336), so breadth = acquisition. Target cell: dietary nitrate/beetroot -> blood pressure
(clean unsaturated cell, actionable lever, named in Gate-31 review L297). Channel: `openalex.py search`
(auto-logged above) + browser/curl fetch attempts (manual-logged here).

**Candidates + adjudication:**
- **SELECTED (maintainer-drop owed):** `10.1039/d2fo03140j` — "Regulatory effect of dietary nitrate on
  BP: a meta-analysis of randomized..." (Food & Function, 2023, cites=12). **RCT-only MA = the ideal
  design here** (nitrate is a dosable, blindable isolate — the fibre-isolate logic: clean design beats
  mixed-evidence tier). oa=False -> fetch not attempted (paywalled venue).
- **SELECTED-alt (OA, maintainer one-click):** `10.1186/s12937-025-01114-8` — Nitrate/BP/vascular
  biomarkers MA (Nutrition Journal / BMC, 2025, cites=11). BMC = genuinely OA, but the sandboxed network
  gated every fetch route (openalex "paywalled" artifact; browser download-start error; curl -> 3KB HTML
  consent gate). Maintainer can download the free PDF directly.
- **DEFER:** `10.1016/j.jff.2024.106082` — nitrate/BP umbrella (Journal of Functional Foods, 2024,
  cites=17). Highest design tier BUT genuinely paywalled + JFF is a functional-foods venue (advocacy-lean
  watch). Take only if the two above are unavailable.

**Acquisition-requested:** d2fo03140j (primary) + s12937-025-01114-8 (OA alt) -> BLOCKED by sandboxed
network on all automated routes -> **maintainer-drop to inbox/**. Per acquisition-pause-and-ask: did NOT
downgrade to a weaker source, did NOT pivot cells silently. Fetch status: 0 fetched, 2 maintainer-drop.
- [2026-09-01] openalex search "white meat poultry cardiovascular diabetes meta-analysis" -> 0 hits: (none)
- [2026-09-01] openalex fetch "10.29219/fnr.v67.9543" -> 0 hits: (none)


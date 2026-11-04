---
title: "Sources considered and not acquired"
---
> Candidates that were surfaced (mostly the ChatGPT reading-list research 2026-07-30 + Claude
> keystone sweeps) **assessed and NOT acquired**, each with a brief reason — the honest
> identification->screening exclusion record for the trustworthiness layer (trustworthiness #R9).
> Reasons are **recovered from the actual acquire/reject decisions** in the 2026-07-30 transcripts +
> the 2026-07-31 triage, not re-invented. Brief by design (a tag, not a dissertation); `n/a` where no
> reason beyond "not prioritised". Going forward, a rejected candidate gets a line here.

Scope note: "rejected" = **not staged for ingest**. Everything the sweeps ACQUIRED is staged (see
`stage-provenance.md`) and is a *pending-ingest* item, not a rejection. The \~150 staged papers are not
listed here.

**This file has two halves, and together they are the single "why we are not using this source" view:**
(1) the table above — **never-acquired** candidates (upstream screening); (2) the **Cut after staging**
section at the foot — sources that WERE staged, then excluded at triage (the `cut/` overview). A source's
full lifecycle state is: *never-acquired* (here, table 1) · *staged/pending* (`staged-source-dois.tsv` +
`raw/binary/`) · *ingested* (registry `sources.md` + `raw/binary/done/`) · *cut* (here, the Cut section +
`raw/binary/cut/`). No single generated dashboard yet — see `backlog.md` for the proposed
`source-status` generator + the `cut/`<->ledger drift-check.

| Candidate | Reason not acquired |
|---|---|
| Fedewa 2017 — exercise, leptin/adiponectin | surrogate outcome (adipokines), not patient-important |
| Varkaneh 2020 — fasting & adipokines | surrogate outcome (adipokines) |
| Leptin JACC state-of-the-art review 2021 | surrogate + narrative review |
| Kristensen 2019 — GLP-1 CVOT meta-analysis | GLP-1 domain saturated (hold Yang umbrella + SELECT + FLOW) |
| Sattar 2021 — GLP-1 CVOT meta-analysis | GLP-1 domain saturated (optional class-CVOT anchor only) |
| GLP-1 body-weight meta-analysis 2025 | GLP-1 domain saturated |
| Wittbrodt & Millard-Stafford 2018 — hydration & cognition | outside the physical-health core (cognition + acute hydration) |
| Johnston 2014 — named-diets weight NMA | superseded by Ge 2020 NMA (held/staged) |
| Kirkpatrick 2019 — NLA scientific statement | advisory/consensus statement, not a systematic review |
| Very-low-carb keto & CV markers 2024 | surrogate (CV markers); low-carb covered by Naude/Churuangsuk/Goldenberg |
| Neuenschwander 2017 — dietary patterns->T2D | redundant (T2D-pattern umbrellas already staged: Churuangsuk/Szczerba/Schwingshackl) |
| Khan 2019 — diet-quality indices | redundant with the diet-quality set (Schwingshackl-2018 staged) |
| Yuan 2022 — keto in T2D | redundant (low-carb/T2D covered) |
| McRae 2017 — soluble-fibre syntheses | redundant (fibre covered by Brown + staged Veronese umbrella) |
| Garcia 2023 — PA, mortality | redundant (PA covered by WHO-PA / Momma / Mandsager; Wahid staged) |
| Resistance-training cluster — Schoenfeld ×4, Grgic 2022, Davies 2021, Pelland 2024, Lopez 2021, Tagawa ×2, Wirth 2020 | peripheral (exercise-programming); kept thin (attention-is-an-anti-signal). 2 keystones queued (Schoenfeld-2022 umbrella + Currier NMA); rest **held**, not rejected outright |
| HIIT cluster — Milanović 2015, Wen 2019, Weston 2014, Schumann 2022 | peripheral (exercise-programming), lower priority |
| HIIT in trained athletes 2025 | off-scope (trained athletes, not the general stratum) |
| Peterson 2010, Straight 2020 — ageing muscle | held for Big-Rocks-Elderly; lower priority |
| Khalafi 2023, Wewege 2021 — visceral-fat exercise | held (the visceral-fat trio Verheggen/Maillard staged; these are B-tier extras) |
| IARC full Monograph Vol 114 | have the Bouvard 2015 summary; full monograph = depth only |
| Reynolds GI companion (S2213-8587(24)00189-x) | optional part-2 of the carbohydrate-quality series |
| Kershaw & Flier 2004 — adipose tissue as endocrine organ (JCEM) | mechanism-only narrative review; adipokines are surrogate; DEFER as optional mechanism anchor, not a finding (endocrine sweep 2026-07-31) |
| 2024-25 adipose-IR / adipokine narrative reviews (MDPI/PMC) | surrogate (adipokine levels) + narrative below gold-gate; no patient-important magnitude (endocrine sweep topic 5) |
| Cortisol-level / cortisol->visceral-fat mechanistic papers | surrogate (cortisol number) unless reaching a physical outcome; weave as mechanism [INFERRED], not a finding (topic 4) |
| Loucks MB-BP 2023 (mindfulness-BP development trial) | single development trial, not a synthesis; the Chen 2024 SR/MA covers it (topic 4) |
| Conversano 2021 — MBSR & hypertension SR/MA | type-E corroboration of Chen 2024; a body line if wanted, not a second acquisition (topic 4) |
| Sleep -> ghrelin/leptin hunger-hormone MAs (e.g. MDPI 2024) | surrogate (hormone levels) + inconsistent (some find no ghrelin/leptin change); mechanism only (topic 6) |
| Al Khatib 2017 — partial sleep deprivation & energy balance MA | DEFER: intake magnitude subsumed by Capers 2015 for the decision (topic 6) |
| Gut-hormone / appetite-control narrative reviews (Springer 2017; Gut&Liver 2023) | surrogate hormone-level mechanism + narrative below gold; patient-important anchor already held (Sumithran + GLP-1 cluster) (topic 7) |
| Skinner 2018 GeroScience + Karger/Endocr-Pract T-muscle-strength MAs | DEFER: lean-mass/strength magnitudes subsumed by the Lopez-Hilario 2026 umbrella (topic 2) |
| Greendale/SWAN 2019 — body composition menopause (JCI Insight) | DEFER: cohort, subsumed by the Ambikairajah 2019 MA for the magnitude (topic 3) |
| Hall 2015 Cell Metab — calorie-for-calorie ward RCT | DEFER: single metabolic-ward RCT, subsumed by Hall & Guo 2017 SR/MA + staged Ebbeling/Hall-UPF (topic 1) |
| Graudal 2014 — sodium intake and mortality cohort U-curve (10.1093/ajh/hpu028) | REJECTED 2026-10-27 (maintainer-confirmed): cohort U-curve from the same group as held Graudal 2020; Mente 2016 + the U-artifact checks already decide the low-sodium arm |
| Graudal 2015b — sodium reduction BP by race (within-study subgroup) | REJECTED 2026-10-27 (maintainer-confirmed): the ethnicity subgroups in held Brand and Graudal 2020 already cover it |
| Beckett - HYVET Hypertension Very Elderly 2008 (HYVET; 10.1056/NEJMoa0801369) | REJECTED 2026-10-27 (maintainer-confirmed): inside the held Rahimi 2021 BPLTTC age pool; resurface only if a >=80 decision needs trial-level detail Rahimi lacks |
| Shepherd - PROSPER Pravastatin Elderly 2002 (PROSPER; 10.1016/S0140-6736(02)11600-X) | REJECTED 2026-10-27 (maintainer-confirmed): inside held CTT 2019 older-people analysis |

**Provenance of the reasons:** the surrogate/GLP-1-saturated/peripheral/superseded verdicts are verbatim
from the 2026-07-30 batch-1/batch-2 assessments (`keystone-acquisition-review.md` + the transcript
decision messages); the redundancy + exercise-programming verdicts from the 2026-07-31 ChatGPT-candidate
triage (`ingest-queue.md`).
| Fothergill 2016 — Biggest Loser 6-year metabolic adaptation (Obesity; 10.1002/oby.21538) | **CUT 2026-08-01** (was staged): below the gold/quality bar — n=14, self-selected extreme cohort, uncontrolled. Persistent adaptive thermogenesis is already anchored elsewhere; this would have been a labelled-weak type-E corroboration only, not worth the standing tier-override debt. Binary -> `raw/binary/cut/` |

## Cut after staging (acquired, then excluded at triage) — the `cut/` overview

> Sources that WERE acquired/staged, then cut at triage (superseded · redundant · out-of-scope · dup ·
> below gold-gate). This is the single queryable view of `raw/binary/cut/` + `raw/binary/papers/cut/`
> (the filesystem holds the binary; this table holds the *why* + what supersedes it). A file in a `cut/`
> dir MUST have a row here (drift-check owed — see `backlog.md`). `cut/` is a reversible shelf, not
> deletion — a re-enqueue on new evidence is always legitimate. Reasons recovered from the archived
> triage cards + `log.md`, not re-invented.

| Cut source | Reason | Superseded / covered by |
|---|---|---|
| Attia - Outlive (epub) | trade book, no primary data; targeted content consumed | primary sources across the fabric |
| Gawande - Checklist Manifesto (epub) | out of scope (adherence anecdote, no transferable nutrition mechanism) | — |
| Gawande - Better (epub) | uncontrolled before/after; memorable-stories-without-transferable-mechanism | — |
| Straus - Knowledge Translation in Health Care | out of scope (care-delivery implementation) | — |
| Cochrane - Handbook for Systematic Reviews 2e print | superseded edition | Cochrane Handbook 6.5 online (ingested) |
| Shai - DIRECT Trial 2008 | double-counts one trial at two aggregation levels | Naude 2022 + Goldenberg 2021 MAs (both contain it) |
| LeBlanc - USPSTF Weight Loss Interventions 2018 (38pp ms) | superseded by the fuller synthesis | USPSTF 342pp Evidence Synthesis |
| NICE - NG246 Evidence Review D 2025 | process outcomes (case-finding/stigma); no exposure effect on a patient-important outcome | — |
| NLA - Low-Carbohydrate Diets Scientific Statement 2019 | advisory/consensus, not a systematic review | low-carb covered by Naude/Churuangsuk/Goldenberg |
| Fiolet - Ultra-Processed Food Cancer NutriNet 2018 | single NutriNet cohort, redundant | Lane UPF umbrella (held) |
| Fothergill - Biggest Loser Metabolic Adaptation 2016 | below gold-gate (n=14, uncontrolled, self-selected) | adaptive-thermogenesis anchored elsewhere |
| CRF Vital Sign COVID Commentary 2020 | echo; no new magnitude (pandemic-era commentary) | CRF-as-vital-sign held |
| PAGAC - Scientific Report 2018 | exact byte-dup (short-name copy) | `PAGAC - Physical Activity Guidelines Scientific Report 2018` (kept) |
| Sacks - DASH-Sodium Blood Pressure 2001 | exact byte-dup (top-level copy) | `Sacks - DASH Diet Sodium Blood Pressure 2001` in `papers/` (kept) |
| GBD Diet - Dietary Risks 2019 (xml) | format-dup | the ingested Afshin GBD-Diet xml |
| Poole - Coffee 2017 (xml) | format-dup | the ingested Poole PDF (`done/`) |
| Blair - Physical Fitness All-Cause Mortality 1989 | CRF->mortality single cohort (ACLS), founding but old | Kodama 2009 MA + Mandsager 2018 + Ross 2016 (all ingested) |
| Wahid - Physical Activity Chronic Disease 2016 | self-report PA->chronic-disease MA, echo | WHO-PA 2020 (ingested) + Ekelund-accel (kept) |
| Arem - Leisure Time Physical Activity Mortality 2015 | self-report leisure-PA cohort, echo | WHO-PA / Ekelund. Resurface: upper-end high-volume-safety Q (Arem tested to 10x rec) |
| Jayedi - Fish Mortality Dose-Response MA 2018 | HIGH not gold; echo (concurring) on a now-gold-CLOSED question | Jayedi Fish Chronic-Disease Umbrella 2020 (held) |
| Boniol - Sunbed Melanoma 2012 | out of scope — sunbed/tanning-bed risk (maintainer not interested); sun/UV net-effect covered without it | Sun/UV cluster Green + Gandini + Lindqvist (held) |
| ATBC Nutrition Reviews Commentary 1994 | commentary, NOT the NEJM trial; not primary | antioxidant/beta-carotene held (Bjelakovic 2007 + Omenn CARET 1996) |
| Hall CIM debate Letter 2022 | debate letter/commentary, not the review | carbohydrate-insulin-model held (Ludwig 2021 + Hall 2022) |
| Taubes CIM Commentary 2022 | advocacy letter, not primary | CIM held (Ludwig 2021 + Hall 2022) |
| Sayer - Sarcopenia Consensus Growing Commentary 2022 | commentary, not a synthesis | sarcopenia held (Cruz-Jentoft EWGSOP2 2019 + de Santana 2021) |
| Saeidifard - Resistance Training Mortality 2019 | RT->mortality MA, echo | Momma 2022 muscle-strengthening->mortality MA (ingested) |
| El-Kotob - Resistance Training and Health Overview 2020 | RT->health narrative overview, echo | Momma 2022 (ingested) + ACSM 2026 (kept) |
| Pelland - Resistance Training Dose Response 2025 | RT dose-response NMA, echo | Currier 2023 RT-prescription NMA (kept lighthouse) |
| Milanovic - HIIT vs Continuous VO2max 2015 | HIIT->VO2max single-outcome MA, echo | Poon 2024 HIIT CRF umbrella (kept lighthouse) |
| Maillard - HIIT Visceral Fat 2018 | HIIT->visceral-fat subset, echo | Poon 2024 (HIIT) + Recchia 2023 (exercise-visceral, kept) |
| Saint-Maurice - Daily Step Count Mortality 2020 | steps->mortality single cohort (NHANES), echo | Paluch 2022 harmonised steps MA (kept lighthouse) |
| Ding - Daily Steps Health Outcomes 2025 | steps->outcomes, overlaps the held steps lighthouse | Paluch 2022 (kept). Resurface: if a newer/broader steps synthesis is wanted — content-sample Ding then |
| Wang - Exercise Fall-Related Fractures 2020 | exercise->fall-fractures, echo | Sherrington 2019 falls RCT-SR (ingested). Resurface: fracture-specific endpoint |
| Leong - Grip Strength Prognostic PURE 2015 | grip->mortality cohort, echo | Celis-Morales 2018 grip (kept). Resurface: multinational/LMIC transportability of grip |
| Aune - Resting Heart Rate Mortality 2017 | resting-HR->mortality, peripheral autonomic marker (weak predictor vs CRF/grip) | CRF (Kodama, ingested) + grip (Celis-Morales, kept) dominate |
| Jarczok - Heart Rate Variability Mortality 2022 | HRV->mortality, peripheral autonomic marker | as Aune-RHR |
| Verheggen - Exercise vs Diet Visceral Fat 2016 | exercise-vs-diet visceral fat, echo | Recchia 2023 (kept exercise-visceral). Resurface: exercise-vs-diet head-to-head decision |
| Serafim - Resistance Training Safety 2023 | RT injury/safety, peripheral (exercise-programming) | Resurface: RT-safety-in-elderly becomes a decision |
| Videbaek - Running Injury Incidence 2015 | single-modality (running) injury epidemiology, peripheral | Resurface: running-injury becomes a decision |
| Ristow - Antioxidants Prevent Exercise Health Effects 2009 | antioxidant-blunts-exercise-adaptation mechanism, peripheral | Resurface: antioxidant x exercise-adaptation interaction Q |
| PAGAC - Physical Activity Guidelines Scientific Report 2018 | US PA evidence report; the ingested WHO-PA 2020 profiles were built ON it, so it maximally concurs (not independent) — marginal value is "more detail", not a different conclusion | ingested WHO Physical Activity Web Annex Evidence Profiles 2020 (gold). Resurface: a PA guidance-family DISAGREEMENT, or US-specific profile detail beyond WHO |
| ~~ACSM - Resistance Training Position Stand 2026~~ RESURFACED 2026-10-21 -> restaged to `raw/binary/papers/` (condition met: first-week rest / time-of-day / safety lines for the PA and Minimal Exercise P-FRAMEs) | RT-prescription consensus, concurs with the kept gold NMA (peripheral; keep-thin => one source) | Currier 2023 RT-prescription NMA (kept). Resurface: prescription specifics (sets/rest/freq) beyond the NMA |
| WCRF - Physical Activity and Cancer 2018 | PA->cancer facet, echo | ingested WCRF Diet Nutrition Activity Cancer 2018 master report. Resurface: PA-cancer-specific detail beyond the master |
| Appel - DASH Dietary Pattern Blood Pressure 1997 | DASH-BP landmark feeding RCT, subsumed by the kept Siervo DASH MA (pools it) | if Siervo not ingested / definitional-trial provenance needed |
| Sofi - Mediterranean Diet Adherence Meta-Analysis 2014 | lower-tier Med-adherence MA subsumed by the kept Dinu umbrella | if Dinu not ingested |
| ~~Sacks - DASH Diet Sodium Blood Pressure 2001~~ RESURFACED 2026-10-06 -> restaged (condition met by Filippou 2020) | sodium-BP gold slot full (He/Huang/WHO-Sodium/Neal ingested) + DASH-BP via Siervo | if the DASH x sodium interaction gradient is specifically needed |
| Li - Saturated vs Unsaturated Fat CHD 2015 | cohort substitution echo of held gold (Hooper-SFA/Hamley/WHO-SFA) | if a gold reverses the substitution direction |
| Mozaffarian - PUFA Replacing SFA CHD 2010 | RCT-MA that held Hamley bias-corrects (trans-fat confound); superseded | never |
| Mozaffarian - Trans Fatty Acids Cardiovascular 2006 | narrative review echo of held WHO-TFA gold | if a gold reaches a different trans-fat conclusion |
| Sacks - Dietary Fats Cardiovascular AHA Advisory 2017 | advisory echo of held SFA gold (Hooper/WHO-SFA/ESC) | never |
| Jenkins - Glycemic Index Load CVD Mortality PURE 2021 | single PURE cohort subsumed by the kept Jenkins-2024 GI SR/MA | if GI needs a cohort anchor |
| Feinman - Dietary Carbohydrate Restriction 2015 | low-tier advocacy narrative, no new gold (Naude/Goldenberg/Ludwig held) | never |
| Mansoor - Low-Carb vs Low-Fat Meta-Analysis 2016 | older MA superseded by held Naude/Ge-NMA/Gardner | never |
| Ebbeling - Framingham State Food Study 2018 | single contested CIM RCT feeding an already-held CIM-vs-EBM tension | if the CIM debate reopens at trial level |
| Ebbeling - Framingham State Food Study 2020 CORRECTION | correction to a cut source, no independent value | never |
| Aune - Fibre Whole Grain Colorectal Cancer 2011 | echo of held Reynolds gold (fibre->CRC) | never |
| Micha - Red Processed Meat Cardiovascular Diabetes 2010 | processed/unprocessed CHD+T2D split held via WCRF/Vernooij/NutriRECS; superseded | never |
| Bouvard - IARC Red Processed Meat Carcinogenicity 2015 | hazard classification concurs with held WCRF gold | if a hazard-vs-risk concept page is built (3rd instance) |
| Neuenschwander - Diet Type 2 Diabetes Umbrella 2019 | older umbrella superseded by held Szczerba 2023 umbrella | never |
| Schwingshackl - Dietary Approaches Glycaemic Control T2D Network MA 2018 | HbA1c NMA concurs with held Szczerba/Churuangsuk/Ge | never |
| WHO - Carbohydrate Intake 2023 | capstone guideline built on held Reynolds SR; concurs | never |
| Aune - BMI Mortality Dose-Response 2016 | sibling BMI-mortality MA; kept Global BMI (IPD, never-smoker bias-correction) for the U-shape | if the specific dose-response nadir becomes load-bearing |
| DPP - Diabetes Prevention Lifestyle vs Metformin 2002 | DUPLICATE of Knowler - DPP 2002 (same NEJM trial) | never |
| DPPOS - Diabetes Prevention Program Outcomes 2015 | same DPP cohort follow-up, concurs; echo of the kept Knowler RCT | if long-term durability of prevention becomes its own question |
| Malik - Sugar-Sweetened Beverages Obesity Disease 2022 | narrative review concurs with held WHO-Sugars/Te-Morenga gold | a distinct SSB causal question not covered |
| Cannon - IMPROVE-IT Ezetimibe 2015 | single-drug outcome RCT echo of CTT MA + Ference (queue DEFER ruling) | an ezetimibe-specific decision or different conclusion |
| Sabatine - FOURIER Evolocumab 2017 | PCSK9 single-drug RCT echo (queue DEFER) | a PCSK9-specific net-benefit/safety question |
| Schwartz - ODYSSEY Outcomes Alirocumab 2018 | PCSK9 single-drug RCT echo (queue DEFER) | as above |
| Szarek - ODYSSEY Total Events Alirocumab 2019 | total-events reanalysis of the already-cut ODYSSEY trial | if total-vs-first-event methodology becomes its own question |
| SCORE2 - Risk Prediction Algorithms 2021 | primary algorithm paper of the held instrument (ESC SCORE2 charts) | if calibration/regional stats become load-bearing |
| SCORE2-OP - Older Persons Risk Prediction 2021 | overlaps the held age-banded >=70 thresholds | if a dedicated elderly-CV-risk deliverable needs the OP algorithm |
| Song - Animal Plant Protein Mortality 2016 | lower-tier 2-cohort; Naghshi 2020 MA covers total+animal+plant more recently | if a dedicated animal-vs-plant question opens Naghshi cannot answer |
| Bauer - Dietary Protein Older People PROT-AGE 2013 | DUPLICATE of Bauer - PROT-AGE Protein Older Adults 2013 | never |
| USPSTF - Vitamin D Calcium Fracture Prevention 2018 | recommendation built on the held Kahwati evidence review, same conclusion | never |
| WHO - Protein and Amino Acid Requirements 2007 | old DRI reference, no patient-important outcome; adjacent to held FAO | if a general-requirement question opens with nothing held |
| Barzilai - TAME Metformin Aging 2016 | trial-design/rationale paper, no outcome result | when TAME reports patient-important outcomes |
| Horvath - DNA Methylation Age 2013 | epigenetic-clock surrogate, no human patient-important outcome | never (mechanism) |
| Lopez-Otin - Hallmarks of Aging 2023 | mechanism review, explicitly not-yet-findings | never |
| Mattison - Caloric Restriction Rhesus Monkeys 2017 | animal longevity, non-transportable surrogate | never |
| Kraus - CALERIE Caloric Restriction Cardiometabolic 2019 | human RCT but cardiometabolic surrogates, no patient-important outcome | if CALERIE reports hard outcomes |
| Waziry - CALERIE DunedinPACE Aging 2023 | DunedinPACE surrogate, no patient outcome | never |
| Wei - Fasting Mimicking Diet 2017 | surrogate cardiometabolic outcomes; fasting deliverable holds hard-outcome sources | if a patient-important FMD outcome lands |
| Meadows - Thinking in Systems | general-audience trade book; systems-dynamics out of the evidence-appraisal telos; uncited | if a feedback/homeostasis modeling method-question opens |
| Simon - Sciences of the Artificial 3e | out-of-domain design-science; uncited; queue flags lowest decision-relevance | if a satisficing/design-of-artifacts method page is built |
| Thaler - Nudge Final Edition | general-audience behavioral-econ trade book; out of telos; uncited | if a choice-architecture/behavior-change deliverable is scoped |
| Gigerenzer - Rationality for Mortals | redundant academic twin of the kept Gigerenzer Risk Savvy (neither cited in a claim page; keep the applied one) | if the ecological-rationality thesis specifically is needed |
| TRIPOD-AI - Reporting Prediction Models 2024 | reporting guideline for authoring models; wiki appraises but does not author models; uncited | if prediction-model reporting-completeness is added |
| EFSA - Dietary Reference Values Summary Report | reference/lookup DRV table, not a method; thresholds served by NNR/SACN/WHO | if a nutrient-requirement-threshold question needs EFSA's DRVs |
| NICE - Evidence Review A Anthropometric Measures Adults 2022 | domain-evidence mis-staged as method; uncited; obesity-metric cutoffs not a held deliverable | if a BMI-vs-waist/obesity-metrics deliverable opens |
| ADA-EASD - Nutrition Therapy for Diabetes 2019 | superseded (2019) + echoes held diabetes-diet umbrellas | if it uniquely disagrees |
| USDA-HHS - Dietary Guidelines for Americans 2020-2025 | parallel national guideline concurring with held NNR | if a US-specific benchmark is needed or it diverges from NNR |
| WCRF - Third Expert Report Summary 2018 | facet/summary of the ingested WCRF master cancer report | never |
| WCRF - Body Fatness and Cancer 2018 | facet of the ingested WCRF master (body-fatness already cited from it) | never |
| LeBlanc - USPSTF Weight Loss Evidence Synthesis 2018 | behavioral-weight-loss synthesis over a gold-covered question (Ma/Look-AHEAD/DiRECT/GLP-1) | if it reaches a conflicting conclusion |
| Cain - Cold Water Immersion Health 2025 | peripheral (attention-anti-signal); review, no human hard-outcome result | a gold RCT/SR on a patient-important outcome |
| ~~Laukkanen - Sauna Bathing Cardiovascular Mortality 2018~~ | ~~peripheral; single-cohort observational (KIHD), healthy-user confounded~~ REVERSED 2026-11-02: re-admitted as a stratum extension (women, age 53-74) of the held KIHD paper, whose page said the evidence covers men only; still same-cohort, not independent backing (`search-log.md` [2026-11-02] SELECTION RECORD) | a pooled/independent-cohort SR |
| Parkhouse - Sunlight Exposure Mortality Review 2025 | peripheral; observational review, no gold hard-outcome RCT | a gold SR tying sun to a hard outcome |
| Watson - Recommended Amount of Sleep AASM 2015 | consensus concurring with the held \~7-8h finding (Cappuccio/Shan/Windred) | never |
| ~~Minkoff - Fecal Microbiota Transplantation Recurrent C difficile 2023~~ REVERSED -> INGESTED 2026-09-16 | ~~same FMT-CDI question; kept the van Nood landmark RCT~~ bar too strict — converse-guard: a gold Cochrane MA UPGRADES the single dated van Nood RCT (F + re-nucleus), beyond-summary value | resurfaced + ingested |
| Dehghan - PURE Dairy Cardiovascular Mortality 2018 | observational whole-dairy cohort concurring with the held SFA/dairy picture | a gold dairy-CV SR reaching a different conclusion |
| Bjelakovic - Antioxidant Supplements Mortality 2012 | same-author Cochrane update concurring with the held Bjelakovic 2007 gold | if a gold SR reverses |
| Manson - Marine n-3 Fatty Acids VITAL 2019 | DUPLICATE of the ingested Manson - VITAL Marine Omega-3 2019 | never |
| Pearl - Book of Why | popular causal-inference twin of the kept Hernan Causal Inference lighthouse; not load-bearing in a claim page | if DAG pedagogy beyond Hernan is needed |
| ADA - Standards of Care in Diabetes 2026 | broad diabetes clinical-mgmt guideline; diabetes-diet held via Churuangsuk/Szczerba umbrellas; keep-one -> EASD-DNSG 2023 (diet-dedicated, recent) | if a diabetes guidance-family disagreement emerges |
| de Lorgeril - Lyon Diet Heart 1999 | older/smaller secondary-prevention Med RCT; echo of the kept Estruch-PREDIMED lighthouse | if a secondary-prevention Mediterranean sub-question opens |
| Schwingshackl - Diet Quality Indices Mortality 2018 | diet-quality-index->mortality observational MA; echo of the held pattern verdict + kept Mente-PURE | if diet-quality-score becomes its own decision-question |
| Ioannidis - Reforming Nutritional Epidemiologic Research 2018 | 3-page nutrition-epi-reform viewpoint; theme held via Willett + the PPV-of-a-field method page | if a nutrition-epi-reform page needs the primary citation |
| Sacks - OmniCarb Glycemic Index 2014 | GI RCT on surrogates only; the kept Jenkins-GI-2024 series is the GI lighthouse | if the GI question needs its landmark RCT-on-surrogates anchor |
| Sun - Television Viewing All-Cause Mortality Meta-Analysis 2015 | TV-time is a screen proxy for sitting; echo of the CLOSED sedentary->mortality row (Ekelund Sitting 2016 held + Patterson kept, both broader/newer) | a TV-specific mechanism or harm distinct from total sitting-time |
| Fang - Physical Activity Parkinson Risk 2018 | PA->PD RR \~0.79 already held inside the Chen umbrella; PA is already a Big Rock (no decision-change on the PD arm); observational, does not fill the framework's MR/lag reverse-causation gap | a PA->PD Mendelian-randomization or lead-time/lag-controlled analysis |
| Kennedy - Geroscience Aging Chronic Disease 2014 | mechanism/framework thesis (aging as common soil), no effect magnitudes, changes no recommendation; wiki reasons about the specific age-related levers without the umbrella; moderate/narrative | a geroscience-motivated intervention with a patient-important human outcome (e.g. TAME) needing the common-soil frame |
| Omuya - Deprescribing Randomised Trials Outcomes Systematic Review 2023 | out of scope (prescriber act - deprescribing needs this person's meds/labs/history, not a modifiable-exposure appraisal); gold design does not rescue an out-of-scope question | telos scope widens to admit medication-load as a modifiable exposure |
| Rochon - Prescribing Cascade Revisited 2017 | out of scope (prescriber-side concept-definer, not a modifiable exposure); also non-gold narrative | scope widens to prescriber-side reasoning |
| Savage - Prescribing Cascade Calcium Channel Blocker Diuretic 2020 | out of scope (empirical drug-drug cascade, pure prescriber-side pharmacoepidemiology, no modifiable exposure) | scope widens to prescriber-side reasoning |
| Chen - Non-Genetic Risk Factors Parkinson 2021 | DUPLICATE registry entry (chen2021parkinson) of the ingested Chen - Non-Genetic Risk Factors Parkinson Overview 2021 (chen2021pd), same DOI 10.3233/JPD-202521 | never |
| Douglas - Vitamin C Common Cold 2005 | moderate PLoS Medicine PERSPECTIVE, no independent data; it summarizes the exact Cochrane review now held as the gold SR (Hemila - Vitamin C Common Cold Cochrane 2013); the ratchet echo of a superior source we ingested (aa83ab3 batch) | a believer-facing deliverable needs the plain-language framing, or the Cochrane SR is retracted |
| Multi-domain Intervention Intrinsic Capacity SR+MA (Exp Gerontol 2023;174:112112) | redundant — overlaps the kept Zheng healthspan SR + held FINGER/MAPT multidomain content; MNA (nutrition score) used as a surrogate vitality proxy; keep-one -> Zheng (broader, patient-important outcomes, newer) | if intrinsic-capacity becomes its own decision-question needing this specific RCT pool |
| Balance/Perturbation Training Umbrella Review (Ageing Res Rev 2025;108:102742) | redundant — narrow modality already inside the held Sherrington falls nucleus (balance/functional exercise reduces falls); no new perspective or quality upgrade; keep-one -> Pillay NMA (adds intervention-type ranking) | if perturbation/reactive-balance training becomes a distinct decision-question with its own hard-outcome evidence |
| Wang - Green and Blue Spaces Human Health Umbrella Review 2025 (Front Public Health 2025;13:1505292) | peripheral by telos — environmental exposure, weakly individually-modifiable (largely urban-planning/regulatory) + heavily confounded by wealth/walkability; gold design does not rescue a peripheral scope; Frontiers OA | if the environmental-exposure cluster is deliberately built OR a strongly individually-actionable green-space lever with a de-confounded hard outcome emerges |
| Environmental Noise Exposure Health Umbrella Review (Eur J Public Health 2023;33(4):725-731, ckad044) | peripheral by telos — environmental/regulatory exposure, not an individual lifestyle lever; same class as air pollution (name-the-gap-do-not-prioritize) | if the environmental-exposure cluster is deliberately built |
| Walzer - Home Particulate Air Filtration Blood Pressure SR+MA 2020 (Hypertension 2020;76:44-50) | PERIPHERAL-HOLD — the one genuinely individually-modifiable environmental exposure (HEPA filter) but surrogate outcome (BP, not events) + small effect; a data-point on the named air-pollution peripheral gap, not a nucleus; NOT staged | if the peripheral air-pollution/filtration cluster is deliberately built, OR a filtration RCT on hard CV events appears |
| Geneen - Physical Activity Chronic Pain Cochrane Overview 2017 | DUPLICATE of the ingested Geneen - Physical Activity Exercise Chronic Pain Cochrane Overview 2017 (geneen2017chronicpain, ingested 2026-08-28), same DOI 10.1002/14651858.CD011279.pub3, byte-identical (md5 541191a48bb0403f718846d4048f841b); breadth-restock re-drop that slipped slug-string dedup (new slug dropped "Exercise") | never |
| Siervo - Inorganic Nitrate Beetroot Blood Pressure 2013 | DUPLICATE of the ingested Siervo - Nitrate Beetroot Blood Pressure Meta-Analysis 2013 (siervo2013nitrate, ingested 2026-08-28 commit 7e081299 -> [[Dietary Nitrate and Blood Pressure]]), same DOI 10.3945/jn.112.170233; breadth-restock re-acquired an already-held source | never |
| Zheng - Interventions Multidimensional Healthspan 2026 | DUPLICATE of the ingested Zheng - Interventions Prolong Healthspan RCT Systematic Review 2026 (zheng2026healthspan, ingested 2026-08-28 commit bdfbba5f -> [[Intrinsic Capacity and Multidimensional Healthspan]]), same DOI 10.1093/gerona/glag133; breadth-restock re-acquired an already-held source | never |
| Dautzenberg - Falls Prevention Community Older Adults NMA 2021 | SATURATED — older (2021) falls-prevention NMA on a cell already served by the newer Pillay 2024 NMA (ingested; covers falls AND fall-related fractures + hip fracture, rows already held) + Sherrington 2019 Cochrane nucleus; same design/population/outcomes, heavy trial overlap (type-F not E), no quality upgrade (older = fewer trials, will not lift Pillay's very-low-certainty fracture nodes); binary moved to raw/binary/papers/cut/ | a falls-prevention decision-question opens that Pillay/Sherrington cannot answer AND Dautzenberg uniquely can |
| Alonso-Coello - EtD Frameworks Introduction 2016 | 2026-09-06 strict-ratchet cut. Guidance-null [PRIOR] weighting-transparency is already CONFIRMED 3x with the structural refinement (GRADE's checklist omits a combination rule) — this grounds it a 4th time = E/F consolidation, not new decision-relevant structure; the telos flags this exact prior as most prone to manufacturing its own divergence | a deliberate guidance-appraisal deliverable needs first-hand EtD-framework grounding (vs the current second-hand holdings) |
| Alonso-Coello - EtD Frameworks Guidelines 2016 | same strict-ratchet cut — the clinical-recommendation application of the EtD framework; overlaps the Introduction's structure, adds no disagreeing/gap value at the margin | as above — first-hand EtD clinical-rec grounding wanted |
| Moberg - EtD Public Health 2018 | same strict-ratchet cut — EtD applied to population decisions; telos-adjacent (population = the guidance-null object) but still consolidation of a confirmed prior, no significant fabric move | a guidance-null deliverable specifically needs the public-health EtD structure first-hand |
| Brouwers - AGREE II | guideline-quality appraisal instrument; AGREE already saturates \~113 fabric/method pages — full re-extraction is the token-burn echo failure mode | a guideline-appraisal deliverable needs the AGREE-II item structure first-hand |
| WHO - Handbook for Guideline Development 2e (main, ch14, ch15, ch16, ch17, ch18, supplement — 7 files) | WHO's own guideline-development process; GRADE already saturates \~176 pages, so this is echo/differential-at-most; no named gap it uniquely fills | a specific WHO-process question opens that the held GRADE/Cochrane method cannot answer |
| NICE - Developing NICE Guidelines Manual | NICE process manual; echo of held guideline-development method (GRADE/Cochrane/EtD holdings) | a NICE-specific process claim is needed for a guidance-null case |
| Fletcher - Clinical Epidemiology 5e | clinical-epi TEXTBOOK; the meta-method corpus is CLOSED and covers causal inference (Hernan-Robins), validity (Ioannidis), bias taxonomy — a teaching text is teaching-level echo | a distinct clinical-epi construct with no home surfaces AND clears the closed-corpus new-type bar |
| Gigerenzer - Risk Savvy (epub) | TRADE book on risk literacy / natural frequencies; the absolute-risk-communication practice is already held; the Gigerenzer-vs-Kahneman (fast-frugal vs heuristics-biases) friction is real but a trade book is not its gold vehicle | the academic Gigerenzer (ecological rationality) is wanted to file the heuristics tension |
| Canada - Dietary Guidelines 2019 | national dietary guideline; the WHO/EFSA/NNR/SACN/DGA guidance families are already held — Canada 2019's notable moves (dropped food groups, de-emphasized dairy) are reachable from the held set = echo | a Canada-specific guidance DISAGREEMENT with the held families becomes a finding |
| Willett - EAT-Lancet Planetary Health Diet 2019 | the environmental/planetary axis is telos-EXCLUDED (one axis, named — the wiki holds no carbon/water/welfare data); the health-diet half overlaps held dietary-pattern fabric | the health-only claims are specifically wanted AND not covered by held dietary-pattern pages |
| Fried - Frailty Phenotype 2001 | definitional (the 5-item frailty phenotype criteria), moderate-tier 2001 cohort; frailty is already present in the fabric via EWGSOP2 (Cruz-Jentoft) + Racey; not an effect-size cell, does not significantly move | a Frailty page is minted needing the canonical phenotype origin, OR a gold frailty SR pairs with it |
| Hosseinpour-Niazi - Legumes Red Meat Substitution Type 2 Diabetes 2014 | moderate single 2014 cohort, legume-for-red-meat substitution -> T2D; red-meat/legume fabric is dense (4 pages + Food-Groups synthesis) and the cell is covered; volume-not-independence | a gold legume-substitution SR/MA disagrees with held T2D fabric |
| Moreno-Herraiz - Cardiovascular Risk Factors Hearing Loss Umbrella 2026 | peripheral outcome (CV-risk-factors -> hearing loss); second-order lever, not a big rock; hearing-loss->dementia is already held via Livingston | a hearing-loss prevention cell is opened as a first-class lever |
| Papier - Meat 25 Common Conditions UK Biobank 2021 | single broad-but-shallow UK Biobank cohort across 25 conditions; the gold IHD cell is held via the DISTINCT Papier-IHD MA 2021; breadth-not-depth, adds observational volume not independence | a specific one of the 25 conditions opens a cell no held source covers |
| Payami - Parkinson Preventable Fraction 2023 | Parkinson is a peripheral outcome (far smaller prevalence than dementia/CVD/T2D big rocks); no held Parkinson cluster to refine; attention-is-an-anti-signal | a Parkinson modifiable-lever cluster is deliberately opened |
| PROBAST-AI - Prediction Model Risk of Bias 2025 (.xml) | out-of-telos method tool (RoB checklist for AI prediction models), not an exposure->outcome source; delivered as a tool-spec .xml, not a readable paper | a prediction-model appraisal is specifically needed |
| Qin - Lipids Lipid-Lowering Drugs Stroke Mendelian Randomization 2023 | MODERATE [downgrade: Frontiers venue; single MR]; staged as an artifact-check PAIR for the low-LDL->ICH signal, but its friction partners (Ma 2019, Li 2025) are still maintainer-drop-pending, so its intersection targets are not in the vault; lipids->CVD is heavily held | Ma 2019 / Li 2025 land (the friction pair it was staged for) |
| Zhang - Modifiable Risk Factors Dementia Cognitive Impairment Umbrella 2022 | the STAGED copy is the ResearchSquare PREPRINT (registry [downgrade: preprint]); dementia modifiable-risk fabric is dense (Livingston + the just-ingested Zhou/Peng/multidomain cluster) = echo. NB the peer-reviewed VoR (doi 10.1016/j.jad.2022.07.008) remains a live maintainer-drop AWAITS — cutting the preprint does NOT cut that acquisition intent | never re-enqueue the PREPRINT; VoR (10.1016/j.jad.2022.07.008, gold) STAGED to papers/ 2026-09-07 via its own drop — preprint stays cut/shelved |
| Laukkanen - Sauna Bathing Cardiovascular Health Benefits Review | MODERATE narrative review, fails gold-gate; same authors re-synthesizing the same KIHD cohort the mortality paper carries = echo, NOT-E-independent. Sauna->mortality signal held via the KIHD cohort | `Laukkanen - Sauna Bathing Fatal Cardiovascular Mortality` (KIHD cohort, high, ingested this batch). Re-enqueue only if a second independent sauna cohort or a gold SR/MA lands |
| Taormina - Full Fat Dairy Cardiometabolic 2024 | MODERATE narrative review (Frontiers Nutr), fails gold-gate — no pooled estimate; the dairy-fat->cardiometabolic question is gold-covered ([[Dairy and Cardiometabolic Health]] holds Guo/Gijsbers/Michaelsson) so it is echo of the held null direction, and it carries a National Dairy Council co-author (Unger) = halo risk. Ratchet default CUT (no rung: not gold, not thin-field's-only, not independent-E); does NOT supersede the still-open `[AWAITS (Thorning - Dairy Products Cardiovascular Health 2017)]` (a controlled-feeding review, different design) | a gold SR/MA on the full-fat-dairy product matrix (milk/yogurt/cheese/butter) -> cardiometabolic disagrees with the held null; a narrative review never re-enqueues |
| Elortegui Pascual - Fasting Regimens Weight Loss 2022 | GOLD network-MA (24 RCTs/1768, Obesity) but a superseded concurring echo: the held gold Semnani-Azad 2025 IF-NMA strictly supersets it (99 RCTs/6582, cutoff \~2024 vs Elortegui's June-2021 subset, all cardiometabolic markers+duration+GRADE vs weight+compliance only), reaching the SAME ADF>...>TRE ranking and SAME IF\~=CER null. Not independent (re-pools the same IF RCT literature; Varady co-author). Clears no ratchet rung (gold incumbent exists; agrees; strict subset). Nestle-funded. papers/cut/ | Semnani-Azad - Intermittent Fasting Cardiometabolic Meta-Analysis 2025 (gold NMA). Re-enqueue only if a future IF-NMA DISAGREES with the IF\~=CER conclusion or adds a hard-outcome/mortality arm neither holds |
| Whalen - Paleolithic Mediterranean Inflammation Biomarkers 2016 | DEFERRED (tranche-2 tier-gate #18, 2026-09-24, maintainer call) not cut: the surrogate/mechanism companion to the HELD high-tier mortality cohort (whalen2017paleo -> [[Dietary Patterns and All-Cause Mortality]]). Below the ingest bar on its own — CROSS-SECTIONAL n=646, hsCRP + F2-isoprostane SURROGATES only, no temporality. Its inflammation/oxidative pathway is recorded as a prose mechanism-GAP on that page; binary -> raw/binary/deferred/ | a GOLD paleo/Med-pattern -> inflammation SR/MA (or a prospective biomarker cohort) appears that could establish the pathway |
| Teo - Exercise Timing Glycemic Control 2020 | DEFERRED (2026-09-24, symmetric-standards) not cut: single small RCT n=40 whose AM-vs-PM NULL would qualify the "exercise PM is better for glycemia" belief, but one small RCT is insufficient to refute (a refute needs the same gold a confirm needs). Held as a G-gap on [[HIIT vs Continuous Training for Type 2 Diabetes]] + acquisition-worklist; binary -> raw/binary/deferred/ | a GOLD exercise-timing -> glycemic-control SR/MA is acquired |
| Mayorga-Vega - Walk Run Field Tests Validity 2016 | GOLD psychometric MA (123 studies) but answers a different quantity: pooled criterion CORRELATIONS (rp 0.42-0.79) of distance/time walk-run tests vs measured VO2max, with no per-person error (SEE / limits of agreement) and the 2-km UKK walk test not among the pooled tests. The open question on [[Measuring and Raising Cardiorespiratory Fitness]] is how far one person's estimate sits from measured VO2max; a correlation cannot answer it. Cut pre-ingest 2026-10-06 (maintainer call). Re-enqueue if the fabric needs a class-level validity anchor for run tests (e.g. Cooper 12-min) | Oja 1991 + Marin-Jimenez 2023 (the 2-km test itself, with agreement statistics) |
| Clark - Mediterranean Diet Dietary Inflammatory Index MedLey 2023 | Cut pre-ingest 2026-10-08 (maintainer call, critique only). MODERATE-at-best: secondary analysis of the MedLey RCT (n=152, older Australians, 6 months; doi 10.3390/nu15020366). Its primary outcome is a diet SCORE (DII), computed from the same unblinded weighed food records that track adherence to a prescribed MedDiet, so the DII fall is a manipulation check, not an effect. DII change tracked no cardiometabolic outcome; hsCRP, the one inflammation marker, did not track DII even cross-sectionally. Baseline tertile analyses unadjusted, many outcomes x 2 models, non-monotone (HDL, SBP). Reporting defects: abstract gives E-DII levels as "reductions" at 2/4 months while saying 3/6; subgroup r=-0.740, n=11 printed p=0.09 (computes to \~0.009); DII developers co-author with "no conflict of interest" | Confirms, adds nothing to, [[Inflammation as a Modifiable Lever]] (the DII re-measures a healthy-diet pattern). Re-enqueue never on its own; a gold SR/MA of diet-induced DII change -> hard outcomes would be the target |
| Herbert - Stretching Soreness Injury Systematic Review 2002 | Cut pre-ingest 2026-10-21 (Plan-queue #23). Soreness arm superseded by the same first author's Cochrane update; injury arm repeats the stretching null already held | Herbert Cochrane 2011 (staged) + Lauersen 2013 (held). Resurface: a deliverable needs pre-exercise stretching -> injury trial detail beyond Lauersen |
| Lacroix - Supervised vs Unsupervised Training Older Adults Meta-Analysis 2017 | Cut pre-ingest 2026-10-21 (Plan-queue #23). Same question and stratum as a newer held MA | Gomez-Redondo 2024 (held). Resurface: Gomez-Redondo lacks the balance or strength outcomes a deliverable needs |
| Gokee-LaRose - Self-Regulation Weight Loss Young Adults RCT 2009 | Cut pre-ingest 2026-11-04 (maintainer-drop). n=40 RCT; would only settle how Zheng 2014 reports its comparison arm, and no default rides on it | Madigan 2015 + Zheng 2014 (held). Resurface: a deliverable states a self-weighing effect in young adults |
| Hussain - Dry Sauna Bathing Clinical Effects SR 2018 | Cut pre-ingest 2026-11-04 (maintainer-drop). Screened for the sauna independence gap: the only mortality cohort is KIHD; the rest are small trials, many in heart failure (treatment, out of scope) | Laukkanen 2015 + 2018 (held). Resurface: a deliverable needs sauna safety or physiology data |
| Zhang - Resistance Training Type 2 Diabetes 2026 | Cut pre-ingest 2026-11-04 (only its supplement dropped). Cohort echo of a gold-covered cell; cohorts overlap Momma's diabetes pool | Momma 2022 (held, RT -> diabetes RR 0.83, L-shape). Resurface: a deliverable needs an RT-duration dose for diabetes |

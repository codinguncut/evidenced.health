---
title: "Search log: November 2026"
---
## [2026-11-02] SELECTION RECORD — sauna / KIHD (maintainer challenge: mikesbalance.com blog on Finnish sauna data)
- (1) Query: blog's cited papers checked by hand against the registry (no web search); then openalex search on the BMC Med 2018 title (auto-logged above).
- (2) Results: Laukkanen 2015 JAMA IM — HELD (Sauna Bathing and Cardiovascular Mortality; blog's HRs match). Kunutsor 2017, Kunutsor 2018 — same KIHD cohort + group, not independent of the held paper. Laukkanen 2018 BMC Med (10.1186/s12916-018-1198-0; 1688 men AND women, age 53-74, 51.4% women, median 15.0 y follow-up) — previously CUT in rejected-sources.md as single-cohort / healthy-user confounded.
- (3) Adjudication: Laukkanen 2018 BMC Med — SELECTED (re-admitted, reversing the earlier cut). Reason: the held page states the evidence covers men only; this paper extends the same cohort to women and an older age band (stratum extension, route (a)/(b) transport question), NOT independent replication — same cohort, same group, so never type-E backing. Kunutsor 2017/2018 — REJECTED (same cohort; no new stratum).
- (4) Acquisition: Laukkanen 2018 fetched OA via openalex -> inbox/ (14 pp, text-native). Next: process inbox (strike the rejected-sources row with a reversal note), then a delegated ingest onto [[Sauna Bathing and Cardiovascular Mortality]].

## [2026-11-03] SELECTION RECORD — Purcell 2014 supplementary appendix (maintainer: acquire if material)
- (1) Query: direct fetch, no search. Channel `bin/fetch_browser.py` local Chromium, then `--service steel`, target the Lancet Diabetes & Endocrinology article page (DOI 10.1016/S2213-8587(14)70200-1) to reach the supplementary appendix link.
- (2) Results: local Chromium HTTP 403; Steel HTTP 402 (Payment Required — service account, not a literature result). No appendix URL obtained. Zero = tool/access artefact, not absence.
- (3) Adjudication: SELECTED as material. The held paper puts the intention-to-treat results (Table 2 rows) and the appetite ratings in the appendix; the wiki's pace verdict rests on "no three-year weight for all starters is held" and on the appetite-ratings population being unstated. Whether the appendix ITT covers all starters or only phase-2 entrants is not known until read.
- (4) Acquisition: BLOCKED -> maintainer-drop requested (appendix PDF to inbox/). No substitute source sought.
- [2026-11-04] openalex search "daily self-weighing and adverse psychological outcomes randomized controlled trial" -> 1 hits: https://doi.org/10.17615/becq-gy58
- [2026-11-04] openalex search "2013 AHA/ACC/TOS guideline for the management of overweight and obesity in adults" -> 4 hits: https://doi.org/10.1016/j.jacc.2013.11.004; https://doi.org/10.1161/01.cir.0000437739.71477.ee; https://doi.org/10.1331/japha.2014.14502; https://doi.org/10.3904/kjm.2014.87.2.136
- [2026-11-04] openalex search "behavioral self-regulation for weight loss in young adults randomized controlled trial" -> 1 hits: https://doi.org/10.1186/1479-5868-6-10
- [2026-11-04] openalex search "daily self-weighing adverse psychological outcomes" -> 2 hits: https://doi.org/10.1016/j.amepre.2013.08.006; https://doi.org/10.17615/becq-gy58
- [2026-11-04] openalex resolve "10.1016/j.amepre.2013.08.006" -> 1 hits: https://doi.org/10.1016/j.amepre.2013.08.006

## [2026-11-04] SELECTION RECORD — Self-Weighing primaries (open thread from the Self-Weighing weave: Steinberg 2014, Jensen 2014, Gokee-LaRose 2009)
- **Query/channel:** openalex title searches (logged above): Steinberg daily self-weighing psychological outcomes; 2013 AHA/ACC/TOS obesity guideline; Gokee-LaRose behavioral self-regulation young adults.
- **SELECTED** Steinberg - Daily Self-Weighing Psychological Outcomes RCT 2014 -> `10.1016/j.amepre.2013.08.006` (AJPM journal version; settles the Madigan-vs-Zheng between-group psychological result). The UNC repository copy `10.17615/becq-gy58` is the same paper (OA author copy) — acceptable PDF source, not a separate work.
- **SELECTED** Gokee-LaRose 2009 -> `10.1186/1479-5868-6-10` (IJBNPA, OA; settles the comparison-arm [AMBIGUOUS] on Self-Weighing for Weight Loss).
- **SELECTED** Jensen 2014 (2013 AHA/ACC/TOS guideline) -> `10.1161/01.cir.0000437739.71477.ee` (Circulation, OA); currently held secondhand only. REJECTED as duplicate prints: `10.1016/j.jacc.2013.11.004` (JACC co-publication), `10.1331/japha.2014.14502` (reprint), `10.3904/kjm.2014.87.2.136` (Korean review of it).
- **Acquisition-requested:** all three listed to the maintainer 2026-11-04; not fetched (no fetch requested in this pass).
- [2026-11-04] openalex search "clinical effects of regular dry sauna bathing systematic review" -> 1 hits: https://doi.org/10.1155/2018/1857413

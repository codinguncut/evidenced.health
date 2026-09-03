---
type: concept
question: Does dietary heme iron (a within-red-meat attribute) move patient-important outcomes, and is it a shared causal channel linking red meat to several of them?
aliases: [Heme Iron, Haem Iron, Dietary Heme Iron, Heme-Iron Intake]
authors: [Zhao, Zhuoxian; Li, Sheyu; Tian, Haoming; Yang, Wei; Li, Bin; Dong, Xiao; Liu, Yunan; Clarke, Robert; Bennett, Derrick; Zong, Geng; Gan, Wei]
sources: [Zhao - Body Iron Stores Heme Iron Type 2 Diabetes 2012, Yang - Heme Iron Coronary Heart Disease Meta-Analysis 2013, Liu - Iron Status Heart Disease Stroke Diabetes Mendelian Randomization 2024]
cluster: heme-iron
nucleus: true
relationships:
  related_to: [[[Red and Processed Meat and Cancer]], [[Should Adults Reduce Red and Processed Meat]], [[Food Groups and Health Outcomes - A Dose-Response Matrix]], [[Is the Food Category Doing Any Work]], [[Measurement Error in Dietary Assessment]], [[The U-Shaped Association Artifact]]]
confidence: low
created: 2026-09-02
updated: 2026-09-03
self_critiqued: 2026-09-03
---
<div class="recent-page" data-last-updated="2026-09-03"></div>


**Nucleus of the `heme-iron` cluster** — the canonical home for heme iron as a *within-red-meat
attribute* and candidate *shared causal channel*. Facet pages (per-outcome red-meat pages, the
dose-response matrix) link up here for the heme-specific attribution; this page owns the cross-outcome
question. — this is the wiki's own graph-structuring note, not a source claim.

## The emergent question this page opens

Red meat is associated with several bad outcomes, but *red meat* is a bundle of attributes (-> [[Is the Food Category Doing Any Work]]). **Heme iron** — the iron bound in the porphyrin ring of myoglobin/haemoglobin,
\~10-fold more concentrated in red than white meat and absorbed far more efficiently than non-heme iron —
is one candidate *component* doing some of the work. If a single attribute drives risk across *multiple*
outcomes through a shared mechanism, then *reduce red meat* is a **multi-outcome lever** rather than a
coincidence of outcome-by-outcome associations, and the component (not the food label) is what a
substitution should target. This page assembles the isolated-heme evidence across outcomes to test that.
 — this section is the wiki's own framing of the cross-outcome question; the
heme-concentration and absorption background is general nutrition knowledge, not from Zhao, whose own
contribution (the dietary-heme->T2D and ferritin->T2D estimates) is extracted in Leg 1 below.

**Status: banked cross-source synthesis (type-A/C), two legs extracted here.** The heme->CHD leg
(Yang 2013) is now extracted alongside the heme->T2D leg (Zhao 2012), so the shared-channel question is
answered *across* sources, not opened by one. The mortality and colorectal-cancer legs remain held
elsewhere and named below as cross-links. The unifying *shared channel* claim stays and
`confidence: low` even so — a second extracted leg raised **coverage** but not **independence** (the two
extracted legs re-use the same flagship cohorts and FFQ instrument; see the Synthesis parameter table),
and no natural experiment isolates heme. — the wiki's own status assessment.

**Update 2026-09-03 — the iron-status natural experiment (MR) has landed and SPLITS the thesis by
outcome.** An MR on genetically-determined systemic iron status (Liu 2024, Leg 5 below) is now held. It
does **not** support a single *shared harmful* iron channel across outcomes: genetically-predicted iron
stores are **protective for CAD** and **adverse for T2D**, with **no effect on ischemic stroke or heart
failure**. So the T2D leg is corroborated by an independent method (at the *iron-burden* level), while
the CHD leg's harmful-direction is **challenged** — the natural experiment gives no clean support for
iron burden being a *harmful* causal channel for coronary disease. The same-quantity bound (systemic
iron != dietary heme) means this still does not close the heme-isolation gap..

## Leg 1 — Heme iron -> incident type 2 diabetes (EXTRACTED, this page's source)

[@zhao2012hemeiron] — gold SR+MA, PLoS ONE 2012.
The paper isolates heme iron on T2D and separates two exposures that must not be conflated:

- **Dietary heme-iron intake (self-reported, FFQ):** pooled **RR 1.31 (95% CI 1.21-1.43)**, highest
  vs lowest category, 4 prospective cohorts (9,246 cases / 179,689 controls), **I2 = 0%**, no
  publication bias. The authors call these «convincing combined results» given 4/5 well-designed
  prospective cohorts [@zhao2012hemeiron].
  This is the exposure the *heme channel* thesis needs — a *dietary* signal, not just a biomarker.
- **Body iron stores (ferritin, a measured biomarker):** pooled **RR 1.66 (95% CI 1.15-2.39)**
  prospective; 2.29 (1.48-3.54) cross-sectional [@zhao2012hemeiron].
  Higher and more heterogeneous, but **more confounded** (see caveat).

**Ferritin is not a clean iron signal — it tracks inflammation.** Adjusting for metabolic factors
attenuated the prospective ferritin RR to non-significance (1.49, 0.90-2.46; vs 1.90, 1.33-2.73
unadjusted) [@zhao2012hemeiron], and
the authors concede they «couldn’t completely rule out the possibility that ferritin may only serve as a
mediator for metabolic abnormalities» [@zhao2012hemeiron].
So the ferritin arm is best read as *supportive of an iron-status gradient* but partly confounded; the
*dietary heme intake* arm (I2=0%, no pub bias) is the cleaner exposure for a decision.

**Reverse causation was checked, not assumed** — cross-sectional > prospective RR raised the flag, but
the difference was non-significant and the prospective RR strong, so the authors judged reverse
causality unlikely [@zhao2012hemeiron]
(the gate-1 U/J machinery, run and cleared -> [[Measurement Error in Dietary Assessment]] governs the
opposite risk: FFQ error attenuates the true gradient toward null).

## Leg 2 — Heme iron -> coronary heart disease (EXTRACTED, this page's source)

[@yang2013heme] — gold SR+MA, Eur J Nutr
2013. Six prospective cohorts, 131,553 participants, 2,459 CHD cases.

- **Highest vs lowest dietary heme-iron intake:** pooled **RR 1.31 (95% CI 1.04-1.67)**, random-effects,
  with **significant heterogeneity (I2 = 55.0%, Pheterogeneity = 0.05)** and no significant publication
  bias (PEgger = 0.23) [@yang2013heme].
- **Heterogeneity resolves to one outlier cohort.** Omitting the single Japanese cohort (JACC) gave
  **RR 1.46 (95% CI 1.21-1.76), I2 = 0.0%** — the association is *stronger* and homogeneous once Japan
  is excluded [@yang2013heme]. Yang
  attributes the outlier to Japanese heme coming mainly from fish/shellfish (carrying protective n-3 /
  vitamin D) at intakes far below Western levels, not to a reversed effect — so the Western estimate is
  the transportable one for a red-meat-heme stratum.
- **Dose-response:** a 1 mg/day increment in heme iron gave **RR 1.27 (95% CI 1.10-1.47), I2 = 25.8%**
  [@yang2013heme] — a monotone gradient
  *over the studied FFQ-heme range* (roughly 0.06-2.8 mg/day across the six cohorts' category medians,
  Table 1); no knee is located and none is claimed. CHD is a patient-important outcome, not a surrogate.

**Confounding by co-travelling meat components was probed, not assumed.** Because saturated fat and
cholesterol correlate with heme intake, Yang re-ran the pool excluding the two cohorts that did not
adjust for them: «Repeating the analysis by excluding two studies [7, 11] that did not control for these
nutrients obtained a summary RR of 1.55 (95 %CI 1.27-1.90), with no heterogeneity»
[@yang2013heme] — the estimate did not
attenuate, so the authors conclude «the observed relation appears to be independent of potential
confounding factors, including saturated fat and cholesterol intakes»
[@yang2013heme]. — this
addresses *measured* co-nutrients only; it does not separate heme from red meat as a whole, since heme is
partly computed as a fixed fraction of meat iron (see Synthesis).

**Measurement error runs toward the null here.** All six cohorts used a single baseline FFQ — «most
included studies measured heme iron intake only once at baseline rather than updating diet information,
which may have led to 'regression dilution bias'»
[@yang2013heme] — and Yang notes both
regression dilution and non-differential FFQ misclassification «would result in an underestimation of
summary risk estimates» [@yang2013heme].
So the \~1.3-1.5 RRs are, if anything, conservative for the true FFQ-heme gradient
-> [[Measurement Error in Dietary Assessment]].

**Mechanism (source's framing, mechanism-not-outcome).** Yang frames heme as contributing «to the
development of atherosclerosis by catalyzing production of hydroxyl-free radicals and promoting
low-density lipoprotein oxidation»
[@yang2013heme], plus an association
with inflammation markers. — this is a proposed pathway offered by the discussion, not an
outcome the MA measured; it informs *direction*, and must not be read as establishing that oxidation is
the operative cause of the observed CHD association.

## Legs 3-4 — held elsewhere, NAMED not re-extracted

These outcome-legs are already in the fabric on their own pages; they are cross-links here, not this
page's extractions. — the effect figures below are extracted on the linked pages (Etemadi,
Bastide), not from Zhao or Yang; this section only names them as sibling legs of the cross-outcome question.

- **Heme iron -> all-cause + cause-specific mortality** — held on [[Red and Processed Meat and Cancer]]
  and the mortality row of [[Food Groups and Health Outcomes - A Dose-Response Matrix]] (Etemadi/NIH-AARP,
  with a mediation model attributing \~20-24% of the red-meat->mortality association to heme iron).
- **Heme iron -> colorectal (colon) cancer** — held on [[Red and Processed Meat and Cancer]] (Bastide
  2011 gold MA + mechanism review; heme as catalyst of endogenous N-nitroso formation and lipid
  peroxidation). That page also carries the crucial bound: in cohorts heme is **partly a red-meat proxy**
  (some studies compute it as a fixed factor of meat iron), so heme is not cleanly separated from red
  meat by the observational data alone.

## Leg 5 — the iron-status natural experiment (MR): the shared channel splits by outcome (EXTRACTED)

[@liu2024ironmr] — MR study,
J Am Heart Assoc 2024 (`tier: high`); UK Biobank (368,406 observational / 331,964 genetic) plus global
GWAS consortia (CAD n=181,522 cases; HF n=115,150; IS n=62,100; T2D n=80,154). It instruments **systemic
iron status** — transferrin saturation (TSAT), serum iron, ferritin, TIBC — and **hemoglobin** with
genetic variants, and compares the observational against the MR association for CAD, HF, IS and T2D.

**The same-quantity bound — carry it on every causal claim below.** This MR instruments
*systemic iron burden / hemoglobin*, NOT *dietary heme intake*. It is the very distinction Leg 1 draws
between the *dietary* heme signal and the inflammation-confounded *ferritin biomarker*. So every causal
verdict here bears on the **downstream iron-burden mechanism**, and answers "does body iron cause these
outcomes?" — it does **not** isolate *dietary heme from red meat* as the route into that iron burden.
The heme-isolation gap is narrowed, not closed.

**What the MR found, by outcome (verified figures):**

- **CAD — PROTECTIVE for iron stores.** Genetically-predicted higher iron biomarkers gave modest inverse
  ORs per 1 SD: «There were modest inverse associations of genetically predicted higher iron status
  biomarkers with CAD, with ORs of 0.93 (95% CI, 0.88-0.98) for TSAT, 0.91 (95% CI, 0.83-0.99) for serum
  iron, 0.86 (95% CI, 0.77-0.96) for (log-transformed) ferritin, and 1.04 (95% CI, 0.96-1.12) for TIBC
  (reflecting lower systemic iron)» [@liu2024ironmr].
  That is a **7-14% lower CAD risk per 1 SD** higher iron (0.86 = 14% lower; TIBC runs inverse to iron, so
  its OR>1 is concordant). The abstract states it as «modest protective effects of iron biomarkers for CAD
  (7%-14% lower risk for 1 SD higher levels of iron biomarkers)»
  [@liu2024ironmr].
- **T2D — ADVERSE.** Same source, opposite sign: «we found adverse effects of higher levels of iron
  status with 7% higher risks of T2D per 1 SD higher level of TSAT but not for other iron status
  biomarkers» [@liu2024ironmr];
  and genetically-predicted hemoglobin gave «10% to 13% for diabetes» higher risk per 1 SD
  [@liu2024ironmr]. The
  T2D-adverse signal among iron biomarkers is **TSAT-specific** (the others were null for T2D) — modest,
  not uniform across markers.
- **Ischemic stroke and heart failure — NULL.** «There was no evidence of associations of iron status
  markers with HF or IS»; hemoglobin too was positive for CAD and diabetes «but not with IS or HF in UK
  Biobank» [@liu2024ironmr].
- **The observational J/U shapes did not survive the genetic check.** «The observational analyses in
  Figure 1 demonstrated U-shaped associations of hemoglobin levels with CAD, wherein both lower and higher
  levels of hemoglobin were each associated with higher risks of CAD (reference level 14 mg/dL). However,
  there was no evidence of nonlinearity in the MR analyses (Cochran Q P=0.853, quadratic test P=0.703)»
  [@liu2024ironmr] — a
  clean instance of an observational U/J arm that an MR can test -> [[The U-Shaped Association Artifact]].
- **An internal discordance the source leaves unexplained.** Higher genetically-predicted *hemoglobin*
  was ADVERSE for CAD (+8% per 1 SD, men; OR 1.08 [1.04-1.13]) while higher genetically-predicted iron
  *biomarkers* were PROTECTIVE — «The discrepant results of protective effects of higher iron status
  biomarkers for CAD, but adverse effects of higher hemoglobin, are unexplained»
  [@liu2024ironmr]. So
  the MR's CAD picture is itself mixed — the iron-*store* instruments point protective, the hemoglobin
  instrument adverse — which is a further reason not to read a clean *harmful iron channel* into CAD.

### Adjudication — observational dietary-heme->CHD vs MR systemic-iron->CAD (parameter table, BLOCKING)

The observational heme->CHD leg (Yang, positive/harmful) and this MR (iron stores protective for CAD)
run in **opposite directions**. Before calling that a contradiction, the exposures must be the same
quantity. They are not:

| Parameter | Observational dietary-heme->CHD (Yang 2013) | This MR: systemic-iron/Hb->CAD (Liu 2024) | Same quantity? |
|---|---|---|---|
| Exposure | dietary heme-iron intake, FFQ-estimated (as a fraction of meat iron), highest vs lowest [@yang2013heme] | genetic instruments for systemic iron status (TSAT / serum iron / ferritin / TIBC) + hemoglobin, per 1 SD [@liu2024ironmr] | NO — dietary intake vs body-iron status; the Leg-1 dietary-vs-biomarker split |
| Outcome | incident CHD | CAD (CARDIOGRAMplusC4D) | \~YES — same coronary endpoint family |
| Design | prospective observational cohorts, single baseline FFQ | Mendelian randomization (genetic natural experiment), 2-sample | NO — MR is immune to reverse causation + dietary confounding |
| Effect / direction | RR 1.31 (1.04-1.67) high-vs-low, **POSITIVE (harmful)** [@yang2013heme] | iron stores OR 0.86-0.93 per SD **PROTECTIVE**, hemoglobin +8% adverse in men [@liu2024ironmr] | NO — opposite for iron stores, MR internally discordant |
| Confounding structure | red meat / SFA / cholesterol / food-matrix co-travel with FFQ heme | genetic instruments; no dietary confounding (pleiotropy tested, sensitivity concordant) | NO — orthogonal error/confounding structures |

**Verdict — this is NOT a joined type-D tension; it is type-F refinement + a G-gap.** The
exposures are different quantities (not-joined check (ii): different unit/exposure, consistent once
matched), so a direction reversal is not a contradiction to file as a `[[tension]]`. The natural
experiment instead **bounds the heme nucleus by outcome** (type-F): it cannot be the case that *systemic
iron* is a shared *harmful* channel across T2D and CAD, because iron stores are adverse for T2D but
protective for CAD. Two readings survive, and the source cannot separate them:

- **(a) the observational dietary-heme->CHD signal is confounded** by red meat / SFA / the food matrix,
  and the true *iron-mechanism* effect on coronary disease is protective or null (the MR estimate). Prior
  observational iron-*status* evidence is consistent with this: a prior meta-analysis of 17 studies
  before 2014, «involving 9236 cases of coronary heart disease and 156 427 participants, demonstrated an
  inverse association of TSAT and coronary heart dis- ease, and no such associations were found for serum
  iron, ferritin, and TIBC» [@liu2024ironmr] — so iron *status* looked protective for CHD even observationally, unlike
  dietary *heme intake*.
- **(b) dietary heme and systemic iron genuinely differ in their coronary effect** — a local pro-oxidant
  heme effect (LDL oxidation at the vessel wall) distinct from circulating iron stores.

**The decision-change is the same under either reading:** the natural experiment does **not**
support *reduce red meat to cut CHD via the iron/heme channel*. If red-meat reduction lowers coronary
risk, it most likely runs through a **non-iron channel** (saturated fat, the food matrix, TMAO, sodium in
processed forms) rather than through iron burden. The iron-burden mechanism that the harmful-channel
thesis needed for the coronary leg is contradicted by the store instruments and only equivocally
supported by the hemoglobin instrument.

## Synthesis — the candidate shared channel (INFERRED, low confidence)


Across **four outcomes** now — T2D (Zhao, extracted) and CHD (Yang, extracted) here; all-cause/cause-specific
mortality and colorectal cancer held elsewhere — the *same* within-red-meat attribute (heme iron) shows a
positive dietary association, each with a proposed oxidative/catalytic mechanism. That convergence is
*consistent with* heme iron being a shared channel by which red meat raises risk on several axes at once.
This is a **type-A emergent synthesis** (a cross-outcome channel no single leg asserts), **not** type-E
independent corroboration of one effect — the parameter table below is what enforces that distinction.

**Parameter table — the two EXTRACTED legs (BLOCKING precondition for any cross-leg claim).**

| Parameter | Zhao — T2D leg (quoted + locus) | Yang — CHD leg (quoted + locus) | Same quantity? |
|---|---|---|---|
| Exposure | dietary heme-iron intake, self-reported FFQ, highest vs lowest category [@zhao2012hemeiron] | dietary heme-iron intake, self-reported FFQ, highest vs lowest category [@yang2013heme] | YES — same exposure construct + instrument family |
| Outcome | incident type 2 diabetes | incident coronary heart disease | NO — different endpoints |
| Pooled RR (high vs low) | RR 1.31 (95% CI 1.21-1.43), I2 0% [@zhao2012hemeiron] | RR 1.31 (95% CI 1.04-1.67), I2 55% [@yang2013heme] | NO — identical point estimate, DIFFERENT outcome; a coincidence, not a replication |
| Constituent cohorts | HPFS (Jiang 2004), NHS (Rajpathak 2006), WHS (Song 2004), Iowa-WHS (Lee 2004) [@zhao2012hemeiron] | HPFS (Ascherio 1994), NHS-T2D subset (Qi 2007), Rotterdam, Dutch-EPIC, Italian, JACC [@yang2013heme] | PARTIAL OVERLAP — HPFS and NHS feed BOTH legs; NOT independent |
| Measurement | FFQ heme, estimated as a fraction of meat iron | FFQ heme, single baseline, regression-dilution toward null | YES — shared self-report + estimation error structure |

**What the table forces (the two traps this ingest was most exposed to).**

- **The RR \~1.31 coincidence is across DIFFERENT outcomes** (T2D vs CHD), so it is *not* two independent
  measurements of one effect that happen to agree — it is one number appearing on two endpoints. It is
  *suggestive of* a shared upstream channel and nothing more; it does **not** raise confidence in any
  single estimate..
- **The two extracted legs are NOT type-E independent backing.** The Harvard flagship cohorts — HPFS and
  NHS — and the Willett-lineage FFQ heme instrument feed *both* the T2D pool (Jiang 2004 = HPFS;
  Rajpathak 2006 = NHS) and the CHD pool (Ascherio 1994 = HPFS; Qi 2007 = NHS). Shared participants +
  shared measurement instrument means shared confounding and shared measurement-error structure, so the
  agreement between legs is **volume, not independence** — it must not be tokened `[E-independent]`.
 — established by diffing the two MAs' included-study lists.

**This is a hypothesis to test, not an established unifying cause.** The original four guards still bound
it hard:

- **The downstream mechanisms differ by outcome** — beta-cell oxidative apoptosis + insulin resistance
  for T2D [@zhao2012hemeiron]; LDL oxidation +
  hydroxyl-radical catalysis driving atherosclerosis for CHD [@yang2013heme]; endogenous N-nitroso catalysis + lipid peroxidation for
  colorectal cancer (held elsewhere). The oxidative motif recurs, but a *common exposure* is not a
  *common pathway*; *shared channel* means shared upstream agent, not one mechanism.
- **Heme is not cleanly separable from red meat** in any of the cohorts (partly computed as a meat-iron
  proxy), so some of the *heme* signal may just be the red-meat signal relabelled -> [[Is the Food Category Doing Any Work]]. Yang's SFA/cholesterol-adjustment sensitivity (RR held at 1.55) rules out
  *those measured* co-nutrients, not the meat matrix as a whole.
- **The exposure carries compounded measurement error.** Heme intake is *self-reported* (FFQ) AND
  *estimated* (heme taken as roughly a fixed fraction of meat iron), not directly measured — two error
  layers stacked. Both extracted MAs note this attenuates toward the null, so the RRs are conservative,
  but it also means the *heme-specific* signal is only as clean as the fixed-fraction assumption
  -> [[Measurement Error in Dietary Assessment]]..
- **No natural experiment isolates heme** — no Mendelian-randomization or feeding-trial pins heme (vs
  total iron, vs red meat) to *any* of these outcomes; all legs are observational with self-reported
  intake. This is the standing decider the fabric names for the whole cluster.
- **The ferritin arm is inflammation-confounded** (above), so the biomarker cannot be treated as a clean
  proxy for the dietary exposure either.

So the decision-relevant reading is modest: heme iron is a **plausible, non-negligible component-level
lever** with a consistent-direction observational signal now across **four outcomes** (T2D, CHD,
mortality, colorectal cancer) — enough to make it a named target for the red-meat substitution question,
**not** enough to claim it is *the* cause on any axis. The two cleanest extracted legs both sit at
**RR \~1.31 highest-vs-lowest** (T2D 1.31, CHD 1.31; CHD 1.46 in Western-only cohorts), modest relative
effects whose absolute size needs a per-stratum baseline the sources do not supply — and whose apparent
mutual corroboration is discounted by the shared-cohort overlap above.

**MR update 2026-09-03 — the shared-channel synthesis fragments, and the T2D leg gains independent
backing (Leg 5).** The natural experiment (Liu 2024) revises this synthesis in two directions at once,
and the net effect is to *lower* confidence in a single cross-outcome harmful channel:

- **T2D leg — independent-method corroboration, at the iron-burden level `[E-independent]`.** The
  observational dietary-heme/ferritin->T2D signal (Zhao, RR 1.31) and the genetic systemic-iron->T2D
  signal (Liu; TSAT +7%/SD, hemoglobin +10-13%/SD) are reached by **genuinely different methods** with
  orthogonal confounding structures — an FFQ/biomarker cohort and a genetic natural experiment immune to
  reverse causation — arriving *separately* at *higher iron burden raises T2D risk*. This is a genuine E
  on the narrow claim that **systemic iron burden is causally adverse for T2D**, and it also answers Zhao's
  own unresolved worry that ferritin might be «only ... a mediator for metabolic abnormalities»: the MR
  removes the reverse-causation/inflammation confound and the adverse direction holds. Corroborated by
  Liu MR (systemic iron -> T2D). **But the same-quantity bound blocks lifting this to dietary heme:** the
  E backs the *iron-burden* mechanism, NOT the claim that *dietary heme from red meat* is the route in.
  So it *narrows* the heme gap (body iron is causal for T2D) without *closing* it.
- **CHD leg — the shared-*harmful*-channel reading is contradicted for coronary disease.** Iron stores
  are protective for CAD in the MR, so a single iron channel cannot be harmful for both T2D and CHD.
  Whatever drives the observational dietary-heme->CHD association, the natural experiment says it is not
  a harmful *iron-burden* effect (adjudication table in Leg 5).

 — the composite reading is the wiki's own; the per-leg
figures are extracted on the respective legs. So the honest post-MR position: heme/iron is a **causally
supported adverse lever for T2D** (at the iron-burden level, dietary-route unproven) and a
**not-supported / likely-confounded lever for CHD** — the cross-outcome *shared harmful channel* is no
longer even directionally uniform, and `confidence: low` stands.

## Gap (type-G) — the hook the next sources fill

- **Heme iron -> coronary heart disease** — CASHED (Yang 2013, extracted as Leg 2 above); the coronary
  channel is now held.
- **An iron-STATUS natural experiment is now HELD (Liu 2024, Leg 5) — the systemic-iron mechanism is
  causally tested, but the *dietary-heme-isolating* natural experiment is STILL ABSENT.** The MR causally
  implicates systemic iron burden (adverse for T2D, protective for CAD, null for IS/HF), which narrows
  the gap; but by the same-quantity bound it instruments *body iron / hemoglobin*, not *dietary heme
  intake*, so it does not isolate *dietary heme from red meat* as the route into that iron burden. The
  binding residual gap is therefore an exposure-specific one: **a natural experiment (feeding design, or
  an MR on a heme-absorption / dietary-heme-relevant locus) that isolates DIETARY heme** — distinct from
  systemic-iron MR — remains unheld. `G (needs a dietary-heme-specific genetic/feeding test)`. A second
  independent-instrument systemic-iron->T2D MR is still identified but not held: — would add independence to
  the T2D leg, not close the dietary-heme gap. — the residual-gap framing is this page's
  reasoning from the Leg-1 dietary-vs-biomarker split and the Leg-5 same-quantity bound.
- **Absolute risk / substitution:** every leg is a highest-vs-lowest addition contrast; the Layer-3
  question (what replaces the heme — white meat? plant protein?) and per-stratum absolute risk are
  unanswered -> [[Should Adults Reduce Red and Processed Meat]].

## References

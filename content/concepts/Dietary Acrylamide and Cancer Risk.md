---
type: concept
question: Does dietary acrylamide (from high-heat cooking of starchy foods, coffee, crisps) raise site-specific cancer risk, by how much, in what shape, and is it a lever anyone should act on?
aliases: [Acrylamide, Dietary Acrylamide, Acrylamide Cancer, Acrylamide and Cancer, Fried Food Acrylamide, Maillard Carcinogen, Glycidamide]
authors: [Filippini, Tommaso; Halldorsson, Thorhallur I; Vinceti, Marco; Akesson, Agneta; Leander, Karin; Laguzzi, Federica]
sources: [Filippini - Dietary Acrylamide Site-Specific Cancer 2022]
cluster: dietary-acrylamide
nucleus: true
confidence: moderate
created: 2026-08-25
updated: 2026-08-25
self_critiqued: 2026-08-25
relationships:
  related_to:
    - Measurement Error in Dietary Assessment
    - The U-Shaped Association Artifact
    - Disinfection Byproducts and Bladder Cancer
    - Diet Physical Activity and Cancer Prevention
    - Red and Processed Meat and Cancer
    - Coffee Consumption and Health
    - Surrogate Outcomes
    - Layer 1 - Ranking Interventions for a Stratum
---

Nucleus of the `dietary-acrylamide` cluster and the wiki's opening on a **heavily-hyped foodborne
*toxin* whose human cancer evidence is null** — the archetype the symmetric-standards, streetlight,
and attention-is-an-anti-signal rules were written for. Acrylamide forms when starchy foods are
cooked above \~120 C in low moisture (frying, baking, roasting) — crisps, chips, bread crust, biscuits,
roasted coffee — via the Maillard reaction. It is a **rodent carcinogen and IARC group 2A** (*probable*)
on mechanistic/animal grounds, which drives recurrent public alarm (California Prop 65, EFSA advisories,
*don't burn your toast*). This page holds the *human dietary-outcome* evidence against that alarm.

**Layer-1 verdict, upfront:** across 16 studies and 1.15M people, higher dietary acrylamide was **not
associated with any of \~20 site-specific cancers**, with **no dose-response threshold** — and the
one comparison that matters for hype (typical human intake vs the animal-toxic dose) spans **\~4-5
orders of magnitude**. For a reasonably-healthy person this is a **near-zero lever**: much-discussed,
small/uncertain-to-null effect — the anti-signal pattern exactly. `confidence: moderate` — a single
gold dose-response MA, its own binding constraint being exposure measurement error (below), so the
*null* is well-supported for the studied range but cannot fully exclude a small true effect masked by
attenuation.



## The evidence: null at every site (Filippini 2022)

Filippini pooled 31 papers (16 distinct studies; case-control, case-cohort, and prospective cohort)
totalling **1,151,189 participants**, of whom **48,175 developed cancer** over a median **14.9-year**
follow-up (range 7.3-33.9). Non-occupationally-exposed adults; **dietary acrylamide assessed by food
frequency questionnaire in every included study**, mean/median intake **23 µg/day**. Studies had to
adjust at least for smoking. Female reproductive cancers (breast/endometrial/ovarian) were **excluded**
here — carved off into a separate prior dose-response MA (ref 42, which reported a «relatively linear increased risk for ovarian
and endometrial cancer» — a source not held here) [@filippini2022].

Summary conclusion: «high dietary acrylamide exposure was not associated with an increased risk of
site-speciﬁc non-gynecological cancer.» [@filippini2022]

### Per-site pooled RR, highest vs lowest intake (all subjects)

Every site's confidence interval crosses 1.0 — **not one site reaches significance** in the pooled
all-subjects analysis. Do not read these as protective *or* harmful; they are null. N = number of
risk estimates pooled [@filippini2022]:

| Site | N | RR (95% CI) | Site | N | RR (95% CI) |
|---|---|---|---|---|---|
| Oral cavity | 2 | 0.99 (0.67-1.46) | Liver | 1 | 1.08 (0.87-1.34) |
| Oro/hypopharynx | 1 | 0.61 (0.33-1.12) | Head and neck | 1 | 0.74 (0.50-1.09) |
| Esophageal | 5 | 1.05 (0.85-1.29) | Laryngeal | 2 | 1.10 (0.79-1.54) |
| Stomach | 2 | 0.92 (0.82-1.05) | Lung | 2 | 0.91 (0.64-1.28) |
| Colorectal | 7 | 0.94 (0.87-1.02) | Thyroid | 1 | 1.33 (0.70-2.53) |
| Colon | 4 | 0.96 (0.85-1.09) | Bladder/urothelial | 3 | 0.89 (0.74-1.07) |
| Rectal | 4 | 0.99 (0.84-1.18) | Renal | 7 | 1.08 (0.93-1.26) |
| Pancreatic | 5 | 0.88 (0.77-1.02) | Prostatic | 7 | 1.00 (0.93-1.07) |
| Lymphoma | 2 | 1.08 (0.95-1.22) | Multiple myeloma | 2 | 0.97 (0.58-1.64) |
| Melanoma | 1 | 1.18 (0.72-1.96) | Brain | 1 | 0.87 (0.54-1.41) |

**The classically-flagged sites are the ones to watch, and they are null here.** Renal (kidney) —
the site earlier MAs flagged — is **1.08 (0.93-1.26)**, null. This actively **overturns** the prior
landmark: Pelucchi's 2015 MA found renal-cell RR **1.20 (1.00-1.45)**; Filippini nulls it by adding
three recent US and Japanese cohorts (heterogeneous, with the two US cohorts carrying \~10% weight and
pulling the estimate down) [@filippini2022].
Kidney, endometrial, and ovarian are the sites the mechanism (hormonal/genotoxic) predicts; the
non-gynecological ones here do not confirm it, and the gynecological signal lives in a *separate*
source not yet held.

### Dose-response: no threshold, no knee — a genuinely informative null

The one-stage dose-response MA (cubic splines, knots at the 10th/50th/90th percentiles; reference
23 µg/day; linear trend fitted alongside) found «a null association with no thresholds for all
site-speciﬁc cancer» and, as «a novel ﬁnding, we found no thresholds between diﬀerent levels of
dietary acrylamide and the risk of any of the site-speciﬁc cancers considered.»
[@filippini2022]

This is the *right question asked and answered* (-> [[The U-Shaped Association Artifact]] vocabulary):
where is the knee / threshold / upper bound? **There isn't one located** over the studied intake
range **6.8-44.1 µg/day** (up to \~0.7 µg/kg body weight/day). Per the corpus rule, a measured-flat
curve is weak evidence of a *true* flat curve — measurement error can hide a knee — so this is *no
threshold shown*, not *no threshold exists*; but the direction of that caveat only *weakens* an
already-null signal, it cannot manufacture harm (-> [[Measurement Error in Dietary Assessment]]).

### The two subgroup exceptions — both fragile

- **Lung cancer in ever-smokers: RR 1.16 (1.03-1.31)**, I2 0.0 — the one significant estimate in the
  whole paper. Almost certainly **residual confounding by smoking**: acrylamide is *in tobacco smoke*
  (smokers carry 3-4x higher acrylamide hemoglobin adducts), so dietary-acrylamide adjustment cannot
  fully separate the two, and smoking is the dominant lung-cancer cause. Filippini flag it as needing
  cautious interpretation [@filippini2022].
- **Lymphoma, Western studies only: RR 1.12 (0.99-1.22)** — CI touches 1.0, **based on a single study**
  combining clinically distinct lymphoma subtypes; the authors call it a signal to interpret «with
  caution» [@filippini2022]. Not a finding.

## Why the null is credible: the dose gap and the mechanism-vs-outcome split

**The exposure sits 4-5 orders of magnitude below where acrylamide is a carcinogen in animals.** Human
dietary intake is \~0.7 µg/kg bw/day at the top; the relevant toxicological anchors are far above it:
«compared to the levels of acrylamide observed to be toxic in animal studies (50 mg/kg body weight/day)
... acrylamide does not generate any toxicologically detrimental eﬀects when male rats were administrated
three low oral doses of acrylamide (20, 40, and 90 µg/kg body weight/day)» and «the EFSA CONTAM Panel
selected BMDL10 value of 0.17 mg/kg body weight/day for neoplastic eﬀects in mice ... i.e., much higher
level compared with those generally experienced by humans.»
[@filippini2022] The animal-toxic dose
(50 mg/kg) is **\~70,000x** the top human dietary dose; the EFSA neoplastic BMDL10 (0.17 mg/kg) is **\~240x**
it. This is the mechanism-directional rule in action: a rodent carcinogen at rodent doses says nothing
about a human at human doses — **animal != human, and dose is the whole argument** (net-effect-not-intended:
whole-organism metabolism, food-matrix co-exposures, and dose all sit between the pathway and the outcome).

**The mechanism is real but speaks only to direction, not to a human outcome.** Acrylamide «is classiﬁed
as probably carcinogenic to humans (class 2A) by the International Agency for Research on Cancer»
[@filippini2022]; its metabolite
glycidamide is genotoxic (a glycidamide-related mutational signature appears in \~1/3 of \~1,600 human tumor
genomes across 19 cancer types), with proposed hormonal (non-genotoxic) pathways too
[@filippini2022]. Filippini reports that
«in vitro and animal studies [that] have consistently shown ... genotoxic, mutagenic, and carcinogenic»
effects stand against inconsistent human epidemiology
[@filippini2022]. The source does not
state what evidence the IARC 2A classification itself rests on; the reading below is the wiki's inference:
the mechanistic/animal carcinogenicity is what a 2A (*probable*) hazard identification turns on, whereas
the human *dietary-outcome* data — exactly what Filippini supplies and finds null — is a different
question (hazard identification vs dietary-dose risk), so the two do not conflict.

## The binding constraint and the confounder — and why they cut *toward* the null, not away

**Dietary acrylamide carries a double measurement error** (-> [[Measurement Error in Dietary Assessment]]).
The exposure = FFQ-reported food intake x a food-acrylamide-content database — two error layers stacked:
«the summary estimates may be aﬀected by misclassiﬁcation of exposure related to the self-reported dietary
intake ... [and] the acrylamide food database used in the separate studies, will not fully capture the
variations in acrylamide levels between brands of a given food and in diﬀerent food categories, as well as
the diﬀerent cooking methods used at home by the participants.»
[@filippini2022] Acrylamide content varies
enormously with the specific food, batch, and browning — a database mean cannot see how dark *your* toast is.

- **But two facts stop this from rescuing a hidden effect.** (1) A **biomarker validation**: dietary-acrylamide
  estimates correlate significantly with acrylamide **hemoglobin adducts** (an objective internal-dose marker),
  so the FFQ x database estimate is not pure noise. (2) The **one study using the biomarker directly** — adducts,
  not FFQ — for prostate cancer «showed no association in a Swedish population»
  [@filippini2022]. So even removing the FFQ
  error layer, the signal stays null. Measurement error attenuates toward null in the simple case, so it is the
  *reason to hold a small residual gap open* — not evidence of a masked harm.
- **Confounding runs one clear direction: smoking.** All included studies were rated **moderate risk of bias for
  confounding** («All studies had a moderate risk of bias for confounding.»)
  [@filippini2022]. High-acrylamide diets
  (fried/processed starchy foods) also correlate with smoking and a generally less-healthy dietary pattern; smoking
  adjustment was mandatory but imperfect (it produced the spurious-looking smoker lung signal above). Residual
  confounding here would bias *toward* a false positive, so the observed null is if anything conservative.

## Synthesis

### A symmetric-standards test the fad fails — demote to no-meaningful-effect for the general population

Acrylamide is the worked instance of the demarcation rule: a fad exposure gets the **same** bar as any
other, and is demoted to *no meaningful effect* when the human evidence does not hold. The mechanistic and
animal case (genotoxic metabolite, IARC 2A, rodent tumors) is real but sits in the *directional / not-yet*
bucket at human dietary doses — and the human dose is \~240x below even the EFSA neoplastic benchmark. The
epidemiology, when finally pooled with a dose-response model, is **null across every non-gynecological site
and shows no threshold**. Believing a protective *or* harmful arm here would require ignoring the null; the
correct state is **no meaningful effect for the general population over the studied intake range**, with a
small residual *insufficient-evidence* margin from measurement error and from the un-held gynecological-cancer
source.

### Layer-1 sizing — near-zero, and a case study in attention-as-anti-signal

For a reasonably-healthy person the acrylamide *lever* ranks **near the bottom** of [[Layer 1 - Ranking Interventions for a Stratum]]:
a null-to-tiny, uncertain effect on a low-variance ubiquitous exposure, dwarfed by the actual big rocks in the
same cancer table (smoking, adiposity, alcohol -> [[Diet Physical Activity and Cancer Prevention]], [[Body Fatness and Cancer Risk]]).
The public volume around acrylamide (Prop 65, *burnt toast* scares) runs **inversely** to its decision value —
the settled big rocks are boring, the contested tiny toxin generates content. The one honest decision-change
this page licenses: **someone worried about acrylamide from cooking can stop worrying and reallocate attention
to a lever that moves the outcome.** It is the same shape as [[Disinfection Byproducts and Bladder Cancer]] — a
much-discussed foodborne/environmental chemical whose individual behavioural lever is negligible — except that
acrylamide's *individual* signal is null rather than merely small.

## Open threads / gaps

- **G (source not held):** the **gynecological-cancer** dose-response MA that Filippini carved out (its ref 42;
  a separate group MA, author not resolved from this source) reported a «relatively linear increased risk for
  ovarian and endometrial cancer» — the one place the hormonal mechanism may bite. This is the decision-relevant
  open question (a female stratum), and it is **excluded from every number on this page** — acquire it to close
  the gynecological arm.
- **G:** no MR / genetic-instrument evidence exists for dietary acrylamide (there is no clean natural experiment
  for a diet-formed contaminant), so causal identification rests on confounded observational data plus the adduct
  biomarker — the residual uncertainty the `moderate` confidence encodes.
- The **coffee** intersection: coffee is a major acrylamide source yet is net-neutral-to-beneficial for most
  outcomes (-> [[Coffee Consumption and Health]]) — a standing illustration that a *toxin-bearing* food's matrix
  effect swamps the isolated contaminant.

## References

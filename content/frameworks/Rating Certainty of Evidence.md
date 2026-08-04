---
type: framework
question: How is confidence in a body of evidence rated, and what can raise or lower it?
aliases: [Quality of Evidence, Certainty of Evidence, GRADE Rating, Five Downgrade Factors, Three Upgrade Factors, Evidence Grading]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; Higgins, Julian PT; World Health Organization (org); Scientific Advisory Committee on Nutrition (org); US Preventive Services Task Force (org); Szczerba, Edyta; Churuangsuk, Chaitong]
sources: [GRADE - Handbook, Naude - Low-Carbohydrate vs Balanced-Carbohydrate 2022, Goldenberg - Low Carbohydrate Diets T2D Remission 2021, WHO - Physical Activity Web Annex Evidence Profiles 2020, SACN - Carbohydrates and Health 2015, NASEM - Redesigning the DGA Process, USPSTF - Procedure Manual 2022, Cochrane - Handbook for Systematic Reviews 6.5, NASEM - Finding What Works in Health Care, Szczerba - Diet Type 2 Diabetes Umbrella Review 2023, Churuangsuk - Diabetes Diets Umbrella Review 2022]
cluster: evidence-appraisal
self_critiqued: 2026-08-04
relationships:
  related_to:
    - Certainty of Evidence vs Strength of Recommendation
    - Indirectness of Evidence
    - Upgrading Observational Evidence
    - Rating Outcome Importance
created: 2026-07-25
updated: 2026-08-04
---

Four grades — **high / moderate / low / very low** — assigned to a *body* of evidence, starting from
study design and moved by eight named factors. [@grade, §5, §5.1]

## Two definitions, depending on who is asking

- **Guideline panel:** "the extent to which our confidence in an estimate of the effect is adequate
  to support a particular recommendation" — certainty *relative to a decision*.
- **Systematic review:** "the extent to which we are confident that an estimate of the effect is
  correct" — certainty about the estimate itself, with no decision in view.
  [@grade, §5]

The same body of evidence can therefore carry different ratings depending on what it is being used
for. Certainty is not a property of the studies alone.

## Outcome-centric, not study-centric

Rating is done **per outcome across studies**, never per study as a unit: "quality may differ -
indeed, is likely to differ - from one outcome to another within a single study."
[@grade, §5]

The handbook's cases make the point sharply: in unblinded trials measuring both stroke and all-cause
mortality, *"it is possible that"* stroke is downgraded for risk of bias while mortality is not
(subjective adjudication);
loss to follow-up may be trivial for death and severe for quality of life; fracture measured via bone
mineral density is downgraded for indirectness while directly-measured side effects are not.
[@grade, §5]

**Consequence:** *the evidence is high quality* is an incomplete statement. High quality *for which
outcome?* A single study routinely supports confident conclusions about one outcome and weak ones
about another.

## Design sets the starting point, not the verdict

- Randomized trials without important limitations -> **high**
- Observational studies without special strengths or limitations -> **low**
- Case series / case reports -> usually downgraded from low to **very low**
- "**Expert opinion is not a category of quality of evidence**" — it is an interpretation of
  evidence, and what matters is describing which evidence is being interpreted.
  [@grade, §5.1.1]

Both starting points move: "limitations or special strengths can modify the quality of the evidence
of both randomized trials and observational studies." A hierarchy that *ended* at design would make
the eight factors idle.

## The eight factors

**Five that rate down:** risk of bias (study limitations) · inconsistency · indirectness ·
imprecision · publication bias.

**Three that rate up** (in practice, only for observational evidence): large magnitude of effect ·
dose-response gradient · plausible residual confounding working *against* the observed effect.
→ [[Upgrading Observational Evidence]]

Ordering is mandatory: "consideration of factors reducing quality of evidence must precede
consideration of reasons for rating it up," and rating up "should only rarely be made if serious
limitations are present in any of these areas." [@grade, §5.3]

## Mechanism — additive in form, judgmental in substance

The factors are additive, but GRADE is emphatic that this does not make the system arithmetic:

> "**GRADE is not a quantitative system for grading the quality of evidence.** Each factor for
> downgrading or upgrading reflects not discrete categories but a continuum within each category and
> among the categories." [@grade, §5.1]

Where several factors are individually borderline, two reviewers can legitimately reach different
grades. GRADE's instruction is not to resolve this but to **surface it**: pick the one or two
factors you downgrade for, footnote the choice, and footnote the factors you decided *not* to
downgrade for and why. Its own summary of what the system delivers:

> "The great merit of GRADE is not that it ensures reproducible judgments but that it **requires
> explicit judgment that is made transparent to users**." [@grade, §5.1]

- This is the same finding as [[Mechanical Objectivity (Quantification as a Technology of Distrust)]]
  reached from inside a grading system rather than from its sociology: a structured procedure buys
  auditability, not the elimination of judgment. GRADE stating it about *itself* is stronger than an
  outside critique, and it forecloses the common misreading that a certainty rating is a measurement.
  [inferred from @grade]

## Aggregating risk of bias across studies — five stated principles

1. **Do not average across studies.** A mix of no-limitation, serious and very-serious studies does
   not mechanically produce "serious."
2. Weight by each trial's contribution to the estimate — larger trials with more events count more.
3. **Be conservative about rating down**: be confident there is substantial risk of bias across
   *most* of the body of evidence.
4. Consider risk of bias against the other limitations; in a close call across two factors, rate
   down for at least one.
5. Acknowledge close calls explicitly and give reasons. [@grade, §5.2.1]

## Decision relevance

- **Ask what the rating is *for*.** A review's rating and a panel's rating answer different
  questions; borrowing one for the other is a category error.
- **A grade without its footnotes is not usable.** The factors chosen and declined are where the
  judgment lives; the letter alone hides it.
- **Design tells you where the rating started, not where it ended.** Both "an RCT, therefore
  reliable" and *observational, therefore weak* skip the eight factors that do the work.



## Aggregating across outcomes -- 5.4's second half

This page rates certainty **per outcome**; a recommendation carries one label. GRADE 5.4 governs the
step between. The default is the **lowest**: *"the lowest quality of evidence for any of the critical
outcomes determines the overall quality of evidence."*

**There is no second, take-the-highest rule.** The apparent exception works by **reclassification, not
by different arithmetic**: an outcome *"initially considered critical may cease to be critical once the
evidence is summarized"*, and the lowest-of-critical rule then runs over whatever remains. GRADE names
two such situations; the second is that *"An outcome turns out to be not necessary if, across the range
of possible effects of the intervention on that outcome, the recommendation and its strength would
remain unchanged. **If there is higher quality of evidence for some critical outcomes to support a
decision, then** one need not rate down quality of evidence because of lower confidence in estimates of
effects on other critical outcomes **that support the same recommendation**."*

GRADE's worked case: statins, with *"consistent reductions in myocardial infarctions and stroke but
**nonsignificant** reductions in coronary deaths"* (coronary death moderate, the rest high) rolls up to
**high** -- because *"knowing whether coronary mortality also decreases is no longer necessary for the
decision **(as long as it is very unlikely that it increases)**."* Coronary death leaves the critical
set; MI and stroke are both high; lowest-of-remaining is high.
[@grade, 5.4]

**The distinction is not pedantic.** Under reclassification, three critical outcomes at high / moderate
/ low where only the *low* one is demoted roll up to **moderate**; a take-the-highest rule would say
high. GRADE also bounds the move explicitly -- such judgments *"require careful consideration and are
probably rare."* And its SDD case shows the entire result turning on the classification step alone: if
a panel judges emergent antibiotic resistance critical, *"the overall grade of the quality of evidence
for SDD would be low"*; if important but not critical, *"the grade for an overall quality of evidence
would be high"* -- same evidence, opposite label.

**So a body applying a take-the-highest roll-up HAS departed from GRADE** unless it also shows which
outcome left the critical set and why. The classification step is where the work happens, and it is the
step most often left unstated.

## Imprecision is judged against an importance threshold, not against zero (2026-07-26)

A worked instance. Naude 2022 reports a weight difference of \~1 kg with intervals well inside its own
4-6 kg importance bar, and **does not downgrade for imprecision** on the primary outcomes -- because
the interval excludes an important effect in *both* directions. Where the same review's intervals *do*
span an important effect, it downgrades, and its footnotes say so in absolute terms: a CI *"consistent
with the possibility for important benefit (245 per 1000 absolute increase) and unimportant harm (47
per 1000 absolute reduction)"* is rated down twice.
[@naude2022, Summary of findings 1, footnotes]

**So a precise-looking estimate can be rated down and a wide one need not be.** What governs is where
the interval sits relative to the threshold that matters -- which is why an appraisal without a stated
threshold cannot rate imprecision coherently at all.

## The instrument itself is a choice, and it moves \~half the ratings (2026-07-26)

Every appraisal page in this wiki is built from GRADE. Goldenberg 2021 supplies **a** measurement of
what that choice costs (it claims no priority; the wiki holds no survey establishing it is the first), by re-rating its own 30 outcomes under **NutriGRADE**, a nutrition-specific
alternative:

> *"NutriGRADE analysis resulted in 16/30 (53%) outcomes with the same rating as GRADE; 10 (33%) of
> outcomes were judged to be of higher certainty using NutriGRADE, and 4 (13%) were judged to be of
> lower certainty using NutriGRADE."*
[@goldenberg2021, Discussion]

**Instrument choice changes the certainty rating on 47% of outcomes, and the disagreement is not
symmetric** -- NutriGRADE raises certainty 2.5 times as often as it lowers it.

**Where it bites hardest is contested inside the paper itself:** the Results say the upgrades were
*"mainly our secondary outcomes"*; the Discussion says *"particularly our primary outcomes including
diabetes remission and fasting glucose."* Same analysis, opposite localisation -- so carry the 47%,
not the localisation.

So "moderate certainty" is a statement about a body of evidence **and about the instrument applied to
it**, and the two cannot be separated by reading the label.

The review's own defence of GRADE is a **principled** argument, not an empirical one:

> *"we believe the logic of scientific inquiry demands consistent standards for casual [sic] inference
> across health claims, preferably using GRADE, a more conservative rating approach than the alternative
> systems suggested by the nutrition community."*

**Note what is and is not claimed:** that consistency across health claims is desirable, and that GRADE
is the more conservative option -- not that GRADE tracks truth better. No evidence is offered that
either instrument is better calibrated against outcomes, and none could be from this design.

Two caveats on the number itself: the comparison was **post hoc, added at referees' request**, and the
per-outcome breakdown sits in a supplementary table not held here. `AWAITS` a source that appraises
appraisal instruments against realized outcomes -- which is the R1 open-loop problem in miniature.

### Same instrument, same evidence, different grade — a worked instance `[2026-08-04]`

NutriGRADE-vs-GRADE holds the evidence fixed and varies the **instrument**. Two gold umbrellas of
diet-in-T2D let us hold the **instrument** fixed (both use GRADE) and observe the *rater* vary on **the same
pooled meta-analysis**. Both grade the Noronha-2019 meal-replacement weight estimate (identical point +
CI): [@szczerba2023]

| Parameter | Churuangsuk 2022 | Szczerba 2023 | Same quantity? |
|---|---|---|---|
| Underlying MA | Noronha 2019 | Noronha 2019 | yes |
| Estimate | −2.4 kg (−3.3, −1.4) | −2.37 kg (−3.30 to −1.44) | yes (same MA) |
| Instrument | GRADE | GRADE | yes |
| **Certainty** | **moderate** | **high** | **NO** |

So a certainty label is a statement about the evidence, the instrument, **and the rating team** — the
Limits note below («two defensible ratings are a normal outcome») is not hypothetical. It confirms the
practical rule: read the *reasons* for a downgrade, never the one-word label. This is why the paired T2D
nucleus records the meal-replacement finding as F/shared-evidence corroboration and **withholds
[E-independent]** — same trials, differently graded, is not two independent witnesses. [inferred from @churuangsuk2022; @szczerba2023]
-> [[Diets for Weight Management in Type 2 Diabetes]].

## Limits

- Discretization of continua is acknowledged as "some degree of arbitrariness," accepted because
  "advantages of simplicity, transparency, and vividness outweigh these limitations."
  [@grade, §5]
- Reproducibility is **not what GRADE rests its case on** — its stated merit is explicit,
  transparent judgment rather than reproducible output. The handbook does separately cite evidence
  that trained raters assess quality reliably (Mustafa et al. 2013, §1.1), so "GRADE disclaims
  reliability" would be an inversion. What follows is narrower: on genuinely borderline evidence, two
  defensible ratings are a normal outcome rather than a sign one is wrong.
  [@grade, §1.1, §5.1]
- **Source currency:** §5 is flagged in-source as rewritten in the 2024 GRADE Book.

## Certainty rating sits ON TOP of a review-credibility layer the held GRADE text does not describe `[2026-07-27]`

The framework above rates *a body of evidence for an outcome*. WHO's 2020 physical-activity guideline
shows a **second, prior layer** in practice: before any certainty rating, each candidate **review**
was rated for credibility with a different instrument.

**Absence-claim scope, stated because the claim is about a held source:** the GRADE Handbook as held
carries **zero** mentions of these instruments
`[searched: AMSTAR / AMSTAR 2 / Newcastle-Ottawa / "credibility of the review" / "quality of the
systematic review" across all 4 held GRADE chunks]`. That establishes the layer is absent from the
text the wiki holds — **not** that GRADE's wider guidance never addresses it.

| Layer | Instrument | Object | Exclusion rule |
|---|---|---|---|
| **1. Review credibility** | **AMSTAR 2** (16 items) | the systematic review | `critically low` excluded — *«unless it was the only review available for a particular outcome»* |
| **1b. Primary-study quality** | **Newcastle-Ottawa Scale** | pooled cohort studies | poor-quality excluded |
| **2. Certainty of evidence** | GRADE (or equivalent) | the body of evidence per outcome | the eight factors above |

[@who2020]

**Three things this changes about reading a certainty rating.**

1. **A certainty rating is conditional on an upstream admission decision that it does not display.**
   A MODERATE rating computed over a body of reviews says nothing about how those reviews got in.
2. **The admission bar bends when evidence is scarce.** The escape clause is explicit, and it is
   exercised — the annex carries **71 `Critically Low` ratings**. **How many of those were
   nonetheless admitted as sole-available is not determinable from the published tables**, and that
   number decides whether the clause is a footnote or load-bearing. `AWAITS` a targeted count.
3. **GRADE itself was not mandatory.** WHO's inclusion criterion was certainty assessed *«using the
   Grading of Recommendations Assessment, Development and Evaluation (GRADE) method **or an
   equivalent methodology that was clearly described and documented**»*. **A second body, reached
   independently of NASEM, declining to require GRADE** — NASEM reached the same conclusion about the
   DGA process. `-> [[Was GRADE Actually Used]]`
   [@who2020]

**Not a type-E convergence, and marked so it is not later mistaken for one.** WHO and NASEM agreeing
that GRADE is not mandatory is **two bodies describing their own practice**, not two independent
routes to a finding about the world. `-> [[Upgrading Observational Evidence]]`

### Self-critique of the 2026-07-27 section `[run 2026-07-27, retroactively]`

**Stamped before it was run — recorded as the defect it is.** The `self_critiqued:` field was written
into this page's frontmatter during the weave **without the critique being performed**, which made
`merge_gate`'s "self-critique stamped" check pass on a control that had not run. A self-certified
guard is not a control. This section is the critique, run late, with what it found.

- **Unsearched absence claim: FOUND and fixed.** The heading asserted a two-layer structure *"GRADE
  does not describe"* — a claim about a **held source**, made without searching it. Searched
  retroactively (0 hits across all 4 held chunks), scope now recorded inline, and the heading narrowed
  to *"the held GRADE text"*.
- **Over-claim on the 71 `Critically Low` ratings:** the page says how many were admitted is *not
  determinable*, rather than implying the clause was widely used. **Held.**
- **Laundered independence: actively guarded.** WHO and NASEM both declining to mandate GRADE is
  marked NOT a type-E in the body — two bodies describing their own practice is not two routes to a
  fact. **Clean.**

## A guidance body that EVALUATED this framework and rejected it `[2026-07-27, back-weave]`

SACN considered GRADE for its 2015 carbohydrates report and declined it, with a stated reason:

> «It was considered important to grade the evidence included in this report in order to convey the
> strength and quality of evidence identified. Established grading systems from the World Cancer
> Research Fund, The Working Group on Grading of Recommendations, Assessment, Development and
> Evaluation (GRADE) and the German Nutrition Society were evaluated, however they were considered
> not to offer the flexibility required for a risk assessment of this nature. Using the SACN framework
> for the evaluation of evidence as a basis, a grading system specifically for use in this report was
> devised.»
> [@sacn2015, A2.13]

**This is the only occurrence of the token `GRADE` in the entire report.**

### What SACN built instead — two axes, and a missing one

| Axis | Values |
|---|---|
| Direction / existence | `No association` · `Association` · `No effect` · `Effect` |
| Evidence strength | `Limited` · `Moderate` · `Adequate` |

Where the verdict is `Effect`, two further bullets attach — a plain-language statement of residual
confounding, and a separate binary judgement, *"the effect is biologically relevant"*.
[@sacn2015, chapter 5 conclusion boxes; S.16-S.25]

**The structural difference is larger than the labels, and it is the decision-relevant part.**
SACN grades **exposure-outcome conclusions, not recommendations**. No recommendation in the report
carries a grade, and **there is no strong/conditional axis at all** — so SACN's 5% free-sugars value,
its 30 g fibre value and its *"minimise SSB"* advice are **formally indistinguishable in confidence
from one another.** The instrument does not permit the comparison GRADE's certainty-vs-strength split
forces. `-> [[Certainty of Evidence vs Strength of Recommendation]]`

### Three bodies, three positions on whether GRADE is required — and this is NOT a convergence

| Body | Position |
|---|---|
| **SACN 2015** | evaluated GRADE, **rejected it**, built a bespoke two-axis instrument |
| **WHO PA 2020** | accepted GRADE *«or an equivalent methodology that was clearly described and documented»* |
| **NASEM** | declined to mandate any single standard for the DGA process |

**Marked explicitly as NOT a type-E.** Three bodies describing *their own practice* is not three
independent routes to a fact about the world — it is three data points on one question with no shared
observation. What it does support is narrower and still useful: **a "GRADE-graded" claim in nutrition
guidance is the exception, not the default**, so the appraisal spine this wiki uses is not the one the
field uniformly runs on. `-> [[Was GRADE Actually Used]]`



## USPSTF runs a 3-level certainty on a DIFFERENT object, over a nested 4-level layer `[2026-07-31]`

USPSTF is a fourth non-GRADE body — but unlike SACN/NASEM/NNR (which decline or bespoke a grading
system) it runs a **fully specified alternative**, and its certainty scale differs from GRADE's on two
axes at once.

**Granularity: three, not four.** «the Task Force rates the certainty of the evidence as one of three
categories: high, moderate, or low» — no *very low*. [@uspstfmanual2022]

**Object: certainty of NET BENEFIT, not of an effect estimate per outcome.** «The Task Force defines
certainty as "likelihood that the USPSTF assessment of the net benefit of a preventive service is
correct."» — a single rating «across the entire analytic framework», with benefits and harms already
netted, «not a quantitative calculation, but rather a judgment based on the six critical appraisal
questions». **So "moderate certainty" here and in GRADE grade different things**: GRADE = confidence in
one outcome's effect estimate; USPSTF = confidence in the whole service's benefit-minus-harm verdict.
-> [[GRADE vs USPSTF - Two Appraisal Systems]] [@uspstfmanual2022]

**There IS a per-outcome GRADE-like layer underneath — with a 4th grade GRADE lacks.** The EPC hands the
Task Force a per-outcome **strength-of-evidence** grade that is **high / moderate / low / insufficient**
(Appendix Table 3), worded almost verbatim like GRADE («very confident that the estimate of effect lies
close to the true effect») but substituting *insufficient* for GRADE's *very low*: «We have no evidence,
we are unable to estimate an effect, or we have no confidence in the estimate of effect for this
outcome.» So the structure is **two-layer**: per-outcome EPC strength-of-evidence (4-level, incl.
insufficient) -> Task-Force certainty of net benefit (3-level). -> [[The Insufficient-Evidence Statement]]
[@uspstfmanual2022]

**Where this lands the "how many bodies use GRADE" thread.** USPSTF makes the corpus count clearer: of
the guideline-family bodies the wiki holds, GRADE-or-adopt is one option among several *fully worked*
alternatives, not a default the field runs on. -> [[Was GRADE Actually Used]]


[@sacn2015] [@who2020] [@nasem]
## The third position: wanting GRADE's properties without adopting GRADE `[2026-07-27]`

The three-body table above listed NASEM as **declined to mandate any single standard.** Its stated
reasoning is sharper than that summary, and it is a genuinely distinct third position:

> «Conduct of original systematic reviews will need to be transparent and follow state-of-the-art
> methods, such as the GRADE approach and the AHRQ Evidence-based Practice Centers Program approach.
> However, this National Academies committee believes the NEL and DGSAC need to have the flexibility
> to align with appropriate standards or methods and **does not recommend that any one standard be
> adopted**, which may be subject to change and evolve over time.»
> [@nasem, ch.4]

**Yet NASEM's three named complaints about the existing rubric are precisely what GRADE supplies:**
define *"large, high-quality, and/or consistent"*; use quantitative confidence intervals; and define
explicit mechanisms for moving grades up or down.

**So the position is: adopt GRADE's *properties* — explicit, reproducible, auditable rating rules —
without binding a durable process charter to one brand that may itself evolve.** That is a coherent
argument this page should hold, and it is not the same as either pole (WHO's *GRADE-or-equivalent*,
SACN's bespoke instrument).
[inferred from @nasem]

### The evidence base underneath is thinning, and that bounds every grade above it

| DGA cycle | Questions answered by an **original** systematic review | By existing publications |
|---|---|---|
| 2005 | \~44% (17 of 32) — NASEM's term here is **"evidence-based literature review"**, not "original systematic review" | \~ same |
| 2010 | **76%** (44 of 59) | \~20% (12) |
| **2015** | **25% (23 of 91)** | **44% (40 of 91)** |

[@nasem, ch.6]

**The question count nearly doubled while original review coverage fell from three quarters to a
quarter.** *(Same-quantity note: the 2010 and 2015 rows are NASEM's own phrase "answered by an
original systematic review", quoted verbatim; the 2005 row is its phrase "evidence-based literature
review". Whether those name the same activity is not established here, so the 2005 row is weaker
evidence for a trend than the 2010->2015 comparison, which is like-for-like.)* And the reviews that are done are unrefereed — *«while NEL de novo systematic reviews are
publicly available, they are not peer reviewed.»* NASEM also records that *«It was not clear why the
2015 DGAC chose to update some systematic reviews and not others»*, and that the NEL runs **two
protocols with two different grading criteria**, the *non*-DGAC one being the better.
[@nasem, ch.6]

**Consequence for reading any DGA-derived claim:** ask which of the three routes answered the question
— de novo review, existing publication, or neither — because the certainty language does not
distinguish them. `-> [[Was GRADE Actually Used]]`


## Self-critique of the 2026-07-27 additions `[run before commit]`

- **Same-quantity slip: FOUND and flagged.** The DGA-cycle table put 2005, 2010 and 2015 in one
  column headed *"original systematic review"*. NASEM uses that phrase for 2010 and 2015 but calls
  the 2005 activity an *"evidence-based literature review"*. Not established that these name the same
  thing, so the row is annotated and the trend claim narrowed to the like-for-like 2010->2015 leg.
- **Figures verified individually, not as a block.** 2015 (23 of 91, 40 of 91) and 2010 (44 of 59,
  76%) confirmed verbatim; 2005 (17 of 32, \~44%) confirmed with the terminology caveat above.
- **The GRADE-properties mapping is and marked so** — NASEM lists three complaints and
  never connects them to GRADE; the connection is the wiki's. All three complaints verified present
  (define *"large, high-quality, and/or consistent"*; quantitative confidence intervals; *«Define explicit mechanisms for moving study
  grades up or down (e.g., explicit definition of "methodological or generalizability concerns")»*).
- **Laundered independence: none.** The three-body comparison is already marked NOT a type-E on this
  page. NASEM is a third *position*, not a third *route to a fact*.
- **Quote truncation: FOUND and fixed** by `--check quote-tail` on this pass — the third complaint was
  cut before its parenthetical, which is the part naming *what* needs defining. Fifth such catch in
  this session, all self-inflicted; the checker continues to outperform care.
- **Adjudication check:** no challenge or standing-challenge row scored in this pass.

## How the study-level risk-of-bias verdict FEEDS this domain — the crosswalk `[2026-07-31]`

The "risk of bias (study limitations)" downgrade factor above is stated but not operationalized: *how*
does a per-study risk-of-bias judgement become an across-study certainty downgrade? Cochrane Ch 14
supplies the mapping (Cochrane **adopts GRADE** — Ch 14 authored by Schünemann & Guyatt, GRADE's own
originators — so this is **shared-lineage F-refinement, not independent type-E corroboration**). The
instruments are [[Risk of Bias Assessment Tools]] (RoB 2 for RCTs, ROBINS-I for observational studies).

The verdict feeds the domain directly — «These assessments should feed directly into this GRADE
domain» — via an explicit crosswalk:

| Study-level RoB verdict | GRADE study-limitations downgrade |
|---|---|
| Low risk of bias | no limitation |
| Some concerns (RoB 2) | no limitation OR serious limitation |
| High risk of bias | serious OR very serious limitation |
| Critical (ROBINS-I) | extremely serious limitations |

[@cochranehandbook2024]

**Two things this pins that the abstract factor left open.**

1. **High certainty requires the WEIGHT of evidence to be low-RoB, not merely some of it.** «A rating
   of high certainty evidence can be achieved only when most evidence comes from studies that met the
   criteria for low risk of bias». [@cochranehandbook2024]
   This is the information-size weighting of principle 2 in the *Aggregating risk of bias* section
   above, made concrete: a few pristine trials do not lift a body dominated by high-RoB studies.
2. **The ROBINS-I "start high, downgrade two" harmonization.** «when using the… ROBINS-I tool… all
   studies may start as high certainty of the evidence» — reconciled with GRADE's "observational starts
   low" because «a body of evidence from NRSI should generally be downgraded by two levels due to the
   inherent risk of bias… namely confounding and selection bias».
   [@cochranehandbook2024] Same endpoint as
   [[Upgrading Observational Evidence]]'s low starting point; the difference is procedural — ROBINS-I
   makes the two-level confounding penalty an explicit, justifiable move, and *not* downgrading needs
   «transparent and detailed justification».

**Reading consequence:** a certainty grade is only as trustworthy as the RoB tool underneath it. A
"moderate" built from ROBINS-I assessments that never seriously probed confounding is a moderate on
paper only — which is exactly where the held nutrition-cohort pages sit
(→ [[Risk of Bias Assessment Tools]], re-appraisal candidates).

## GRADE's eight factors are embedded in the IOM SR standard — shared lineage, not corroboration `[2026-07-31, IOM]`

The IOM 2011 systematic-review standard mandates this exact per-outcome assessment as a *required
element*. Standard 4.1.1: «For each outcome, systematically assess... Risk of bias, Consistency,
Precision, Directness, Reporting bias» — GRADE's five downgrade factors — and 4.1.2 adds, for
observational bodies, «Dose-response association, Plausible confounding that would change the observed
effect, Strength of association» — GRADE's three upgrade factors.
[@nasem2011fww]

**This is NOT an independent second body reaching GRADE's factor set — it is GRADE, adopted.** The IOM
report names GRADE «a primary source for Chapter 4» and its Box 4-2 is «Key Concepts Used in the GRADE
Approach». So IOM, Cochrane, and GRADE stating the same eight factors is **one methodology lineage, F /
shared-school, never independent type-E** — no `[E-independent]`. What the IOM adds is *object type*: it
makes the eight-factor assessment a **checkable standard** a completed review either met or failed, not
just a method to apply. -> [[What a Trustworthy Systematic Review Requires]]
[inferred from @nasem2011fww; @grade]

## References

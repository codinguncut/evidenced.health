---
type: diagnostic
question: When guidance and evidence diverge, which objective moved the recommendation — and can I see it?
aliases: [Evidence to Decision, EtD, EtD Domains, Multiple Objectives, Feasibility and Acceptability, Resource Use, Guidelines Serve Two Masters]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew; World Health Organization (org)]
sources: [GRADE - Handbook, WHO - Saturated and Trans Fatty Acid Intake 2023, NASEM - Redesigning the DGA Process, NNR - Nordic Nutrition Recommendations 2023, ESC - CVD Prevention Guidelines 2021]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-07-27
relationships:
  related_to:
    - Certainty of Evidence vs Strength of Recommendation
    - Was GRADE Actually Used
    - Rating Outcome Importance
    - Framing a Decision Question
created: 2026-07-27
updated: 2026-07-28
---

**A recommendation is not an effect estimate, and was never meant to be.** It is a composite of the
evidence *plus* considerations that have nothing to do with whether the exposure works. This page is
the diagnostic for separating them — and the central finding is that on the guidance the wiki holds,
**the separation is already published**, so this is a reading skill rather than an accusation.


``
## The structure — GRADE names four determinants, only one of which is evidence

Certainty is *one* input to strength, alongside the balance of desirable and undesirable consequences,
**values and preferences**, and **resource use**.
[@grade, §6.1, §6.2] -> [[Certainty of Evidence vs Strength of Recommendation]]

So a recommendation can legitimately be strong on weak evidence, or weak on strong evidence, and
neither is an error. **The question is never *did non-evidence considerations enter?* — they are supposed to. It is
*which one moved this, and by how much?***

## The instrument — the Evidence-to-Decision table

WHO SFA 2023 publishes an EtD table with named domains, each carrying a judgement on a fixed scale
(`No / Probably no / Probably yes / Yes / Varies / Don't know`), the research evidence behind it, and
additional considerations. Two domains are pure non-evidence:

**Acceptability** — *"Is the intervention acceptable to key stakeholders?"* WHO's listed influences
include *"level of awareness of the health problem"*, *"**potential impact on national economies**"*,
and *"compatibility with existing policies"*.

**Feasibility** — *"Is the intervention feasible to implement?"* Influenced by *"the existing relevant
infrastructure... and the available resources"*, and by the fact that *"widespread use and availability
of certain food items high in SFA and/or TFA may pose challenges in decreasing consumption to meet the
recommended intake."*

[@who2023saturated, Annex, evidence-to-decision table]

**A guidance body naming national economies among its considerations is the strongest available
evidence that the multi-objective concern is real — and it is the body's own disclosure.**

## The worked case, and it runs AGAINST the intuitive prediction

The obvious hypothesis is that feasibility and acceptability *soften* recommendations. **On the one
case the wiki holds, they did not.**

| Domain | WHO's judgement | Effect on the recommendation |
|---|---|---|
| Certainty (SFA -> CVD) | moderate | carried it |
| **Acceptability** | **"Varies"** — unfavourable | **none** |
| **Feasibility** | "Probably yes" | none |
| Resulting strength | **STRONG** | — |

WHO recorded that *"there are many for whom the recommendation may not be acceptable, based on the
current, popular perception that diets high in SFA do not pose a health risk"* — and issued a strong
recommendation regardless, justified on evidence alone: *"Recommendation 1 was assessed as strong
because evidence of moderate certainty overall from different study types assessing both risk factors
and incidence of CVDs suggested reduced risk of CVDs with lower SFA intake."*
[@who2023saturated, Rationale; evidence-to-decision table]

**So the claim that multiple objectives make guidance *less stringent* is not entailed, and here is
falsified.** The
direction is a per-case question.

## Direction is indeterminate — the reason the general claim fails

Non-evidence objectives can push either way, and which way depends on the exposure:

- **Toward laxity** where an exposure is a dietary staple, cheap, or economically entrenched — the
  case the multi-objective worry has in mind.
- **Toward stringency** where an exposure carries environmental or ethical load. Environmental
  objectives would push red-meat guidance *harder* than health evidence alone warrants, not softer.

A claim that multi-objective reasoning weakens guidance is therefore a **hypothesis about which master
dominates for this exposure**, and needs the EtD table to settle. It is not a general property of
guideline-making.

## Status-quo anchoring — the best-evidenced non-evidence objective, and it is SYMMETRIC

**Feasibility and acceptability do not push randomly. They push toward what is currently eaten** — and
that is a more predictable, more testable bias than "toward industry".

**NASEM states it almost directly**, in the one commodity-adjacent passage of its whole review, on
whether the dairy group is *necessary* or merely *sufficient* to meet the modelling goals:

> *"It seems the idea of a food group's **traditional role in the American diet may serve as an
> underlying constraint on the modeling**, and a greater array of food group combinations and amounts
> may be possible that would meet energy and nutrient goals **if that constraint were lifted**."*

And the food supply is an explicit input to the writing step:

> *"Considerations are also made regarding how a proposed change might affect the food supply, because
> changes to better align with a proposed recommendation might affect the overall nutritional profile
> of a food product."*

WHO's EtD feasibility row says the same from the other side: *"widespread use and availability of
certain food items high in SFA and/or TFA may pose challenges in decreasing consumption to meet the
recommended intake."*

[@nasem, ch.5, ch.6; (WHO - Saturated and Trans Fatty Acid
Intake 2023) EtD table]

### The purest observable case: a ceiling anchored to current consumption

[@nnr2023] on white meat is status-quo anchoring with nothing else
mixed in, and it is worth holding as the worked example.

- **Health is neutral** — *"no currently available evidence for beneficial or detrimental effects of
  white meat consumption for cardiovascular diseases and type 2 diabetes."*
- **The constraint is environmental** — *"To minimize environmental impact, consumption of white meat
  should not be increased from current levels, and may be lower."*
- **Current levels are stated** — *"approximately 20 to 50 g/d"*.

**So a bound exists without a number being written.** *Do not increase from X* plus a known X is a
ceiling, and **its location is set by consumption history rather than by evidence.** NNR notes the
intake *"has increased the last decades and is the main driver of increased total meat intake"* — so
**had consumption risen faster, the implied ceiling would sit higher.**

**This is the sharpest available test of the anchoring thesis** because nothing else is doing work: no
health signal, no quantified environmental magnitude, no stated threshold. What remains is the status
quo, functioning as the recommendation's location.

**And it is not auditable at layer 3.** The anchor is a range of *national averages*, so *"current
levels"* has no individual referent — a person eating 80 g/d exceeds every country's average, one
eating 10 g/d is under all of them. **A reader who accepts the constraint still cannot apply it.**

[@nnr2023, ch.3, ch.7]

### Why the symmetry matters — it makes the thesis testable

Status-quo anchoring predicts conservatism in **both** directions, and both preserve the current diet:

| Direction | Predicted effect | Example |
|---|---|---|
| **Novelty-aversion** | guidance will not recommend an unfamiliar food even where the nutrition case is decent | insect protein; heavy fermented soy in a Western guideline |
| **Removal-aversion** | guidance will not recommend abstaining from an entrenched staple | bread, pasta, baked goods |

**So the same mechanism produces two opposite-looking omissions** — and a capture hypothesis explains
only the second. **This is the better-evidenced rival**: it accounts for the same observations without
requiring bad faith, and NASEM reaches for it (*"traditional role"*) precisely where an industry
explanation would have been available.

### The internalization claim is DIFFERENT, and the held evidence runs against it

The further claim — that long-standing recommendations become internalized and acquire momentum as
*"ground truth"* — is separable, and **two held data points cut against it**:

- **Behavioural adherence is low.** *"less than 10 percent of Americans consume a diet fully consistent
  with the DGA."* Whatever has been internalized, it is not the eating.
- **On the specific case, popular belief runs AGAINST the guidance.** WHO records that many find its
  SFA recommendation unacceptable *"based on the current, popular perception that diets high in SFA do
  not pose a health risk."* **If the low-fat message had hardened into unquestioned ground truth, WHO
  would not be recording popular perception as an obstacle to it.**

**So the momentum claim needs a distinction it does not currently make:** *institutional* momentum —
guidance bodies reluctant to contradict their predecessors, which NASEM does evidence in the form of
revision inertia — is a different thing from *population* internalization, which the held evidence
contradicts. `AWAITS` a source on public nutrition beliefs before the population limb is carried.


[@who2023saturated]
## Tests / indicators

- **Is there an EtD table at all?** If yes, the analysis is a reading task. If no, this diagnostic
  cannot run -> see the guard below.
- **Read the evidence domains and the non-evidence domains separately, then ask what changed between
  them.** A recommendation whose strength exceeds what certainty supports has been moved by something;
  the table says by what.
- **Check the direction before assuming it.** An unfavourable acceptability judgement that did *not*
  soften the recommendation is evidence the body prioritised evidence — a finding worth recording, and
  the opposite of the usual suspicion.
- **Ask whether the exposure is a staple.** Where it is, feasibility has the most room to bite, and
  the EtD table is where that shows.
- **Separate the recommendation from the estimate when transporting it.** The effect estimate travels
  to an individual decision; the feasibility and acceptability judgements are population-scale and
  mostly do not. -> [[Framing a Decision Question]]


``
## The guard — this diagnostic is easy to abuse

This wiki's own telos names *process defect* the most easily abused of the five reasons guidance may
differ, precisely because it licenses dismissing a conclusion without engaging its evidence. Applied
loosely, *they were just being practical* discounts any inconvenient recommendation at zero evidential
cost.

- **Unstated motives are not evidenceable here.** The published EtD table is the only legitimate
  instrument this diagnostic has.
- **Where a body publishes no EtD table, the verdict is `unprobed`, never `compromised`.** Silence
  about feasibility is not evidence that feasibility drove the result.
- **A non-evidence consideration entering is not a defect.** GRADE's design puts it there deliberately.
  The defect would be a body *concealing* which consideration moved it — which is the opposite of what
  a published EtD table does.


``
## Limits

- **One worked case, one body.** WHO SFA 2023 is the only EtD table the wiki holds in full. Whether
  other families publish comparable tables, and whether their non-evidence domains bite harder, is
  **unprobed** — `AWAITS` a second guidance family with a published EtD.
- The wiki holds no case where a non-evidence domain **did** visibly change a recommendation's
  strength. Until it does, the *mechanism* is documented but its *magnitude* is unmeasured, and this
  page should not be read as saying non-evidence domains rarely matter.
- GRADE's own EtD chapter is only lightly represented in the held handbook chunks; the fuller EtD
  framework literature is not held.


``
## A second body blends health and environment — and concedes the health effect may be null `[2026-07-28, ESC]`

[@nnr2023] is this page's worked case for environmental reasoning
entering a dietary recommendation. **[@esc2021] does it too, in one
sentence, and in a sharper configuration** — a cardiology guideline, not a body with an environmental
mandate.

> «Meat. From both a health and an environmental point of view, a lower consumption of meat, especially
> processed meat, is recommended. A restriction of red meat may have little or no effect on major
> cardiometabolic outcomes. However, substituting red meat with high-quality plant foods (i.e. nuts,
> soy, and legumes) does improve LDL-C concentrations. A recent analysis showed that higher intake of
> processed meat and unprocessed red meat is associated with a 7% and 3%, respectively, increased risk
> of ASCVD.»
> [@esc2021]

**Quoted whole, because the four sentences pull in different directions and any subset misrepresents
it.** ESC states, in order: a joint health-and-environment recommendation; a concession that
restriction «may have little or no effect»; a substitution benefit on a **surrogate** (LDL-C); and an
**associational** 3% / 7% risk increase.

**Parameter table** — the two health claims are not the same quantity:

| Claim | Design | Exposure contrast | Outcome | Same quantity? |
|---|---|---|---|---|
| «little or no effect» | restriction studies (ref 416) | **reducing** red meat | «major cardiometabolic outcomes» | — |
| «7% and 3%... increased risk» | association analysis (ref 417) | **higher intake**, observational | ASCVD | **NO** — trial-style restriction vs observed association, different outcome definitions |

**So this is not ESC contradicting itself**, and filing it as an internal tension would be the error.
It is a body reporting that the interventional evidence is weak and the observational evidence is
positive-but-small, then recommending reduction anyway.

**Where the diagnostic bites:** the recommendation is explicitly labelled *«From both a health and an
environmental point of view»* — **so the environmental objective is disclosed, and the health limb is
disclosed as weak, in adjacent sentences.** Per this page's classification that is
**disclosure of considerations without disclosure of weight**: the reader cannot tell how much of
*«lower consumption is recommended»* rests on the 3% association and how much on the environmental
argument, and ESC never says.

**Two things this strengthens, and one it does not.**

- **It generalises the NNR finding beyond an environmentally-mandated body.** NNR was instructed to
  integrate sustainability; **ESC was not**, and did it anyway in a cardiology guideline. That the
  behaviour appears without the mandate is the more interesting datum.
- **It is a second instance of the corpus's standing observation** that considerations get disclosed
  and weights do not.
- **It does NOT establish that the environmental objective changed the recommendation.** ESC also has
  a positive (if small) associational health signal and an LDL-C substitution benefit, either of which
  could carry *«lower consumption»* on its own. **The counterfactual is unavailable**, and claiming
  environment moved this one would be exactly the over-read this page exists to prevent.
``

## Divergence class 4 (lag), self-documented `[2026-07-28, ESC chunk 05]`

The telos lists five reasons guidance can differ from a recommendation here, and **lag** is the hardest
to evidence — it usually has to be inferred from publication dates. **ESC states it about itself:**

> «Evidence now suggests that the BP targets in the previous iteration of this guideline were too
> conservative, especially for older patients.»
> [@esc2021]

**A guidance body recording that its own prior edition was wrong, in the direction of under-treatment,
with the revision reasoned.** ESC gives the grounds (targets «are safely achieved in many older
patients and are associated with significant reductions in the risk of major stroke, HF, and CV
death») and **bounds the new position itself**: «the evidence sup- porting more strict targets is less
strong for very old people (>80 years) and those who are frail».

**Three things this is useful for, and one it is not.**

- **It is direct evidence that the guidance set moves**, so *"current guidance says X"* has a shelf
  life. The guidance null is a moving benchmark, not a fixed one.
- **The direction is the interesting part.** The revision made guidance **more** aggressive. A fabric
  that expected guidance to be systematically over-cautious *or* systematically over-reaching would
  mis-predict here; this is one instance against both.
- **It is a body disclosing its own error rather than a critic alleging one**, which is the highest
  evidential standing a class-4 claim can have — no attribution dispute is available.
- **It is NOT a process defect (class 5).** ESC followed its method and updated on new evidence.
  **Reading self-correction as a defect would penalise exactly the behaviour a sound process
  produces**, and this page should say so plainly.

## References

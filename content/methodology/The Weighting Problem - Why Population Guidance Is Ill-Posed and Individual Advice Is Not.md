---
type: framework
question: If a recommendation must serve health, carbon, welfare, affordability and scalability at once, is the problem even well-posed — and for whom?
aliases: [Weighting Problem, Multi-Objective, Incommensurability, Pareto, Dominated Options, Intersectionality Tangle, Optimizing Ten Dimensions]
authors: [Schünemann, Holger; Brożek, Jan; Guyatt, Gordon; Oxman, Andrew]
sources: [GRADE - Handbook, NNR - Nordic Nutrition Recommendations 2023]
cluster: evidence-appraisal
confidence: medium
self_critiqued: 2026-07-27
relationships:
  related_to:
    - Which Objective Moved This Recommendation
    - Certainty of Evidence vs Strength of Recommendation
    - Rating Outcome Importance
    - Layer 1 - Ranking Interventions for a Stratum
created: 2026-07-27
updated: 2026-07-27
---

**Most of this page is structural reasoning, not source extraction.** It reasons from GRADE's [@grade]
four-determinant structure and this wiki's own telos. Tagged `` throughout; the two
`[EXTRACTED]` anchors are marked.

## The problem, stated sharply

A recommendation is asked to serve health, carbon footprint, animal welfare, affordability,
scalability, communicability and political palatability at once. **Without weights across those
dimensions, there is no unique optimum** — and the weights are not an empirical quantity anyone can
look up.

Worked instances, each a real trade-off:

| Food | Health | Carbon | Welfare | Scalable | Affordable |
|---|---|---|---|---|---|
| Avocado | favourable | **poor** | n/a | — | mid |
| Wheat | **contested** | good | n/a | **excellent** | **excellent** |
| Grass-fed beef | contested-favourable | mid | **poor** | **poor** | **poor** |

No ordering of these rows exists until someone says how much a unit of carbon is worth in units of
health. **That is not a gap in the evidence; it is a question evidence cannot answer.**

**This wiki already holds the same position one level in** — for health outcomes alone, the telos
forbids manufacturing a scalar maximand, on the ground that collapsing quality and quantity requires a
utility weighting *"that is irreducibly individual and that the evidence does not supply"*, and assigns
the weighting to the person at layer 3. The argument above is that same argument, widened to
non-health dimensions. **It generalizes correctly.**

## But "you cannot optimize" overstates it — two things are well-defined WITHOUT weights

This is the escape, and it is partial but real.

- **Dominance.** An option worse on *every* dimension than some other option is ruled out **with no
  weights at all**. No weighting is required to reject a food that is less healthy, more carbon-costly,
  worse for welfare and more expensive than an available alternative.
- **The Pareto frontier** — the set of options where improving one dimension necessarily worsens
  another — is likewise definable without weights.

**Weights are needed only to choose *among* frontier options, never to eliminate the dominated ones.**
So the tangle binds on a much smaller set than it first appears: the argument is not *"nothing can be
said"*, it is *"nothing can be said about the ordering within the frontier."*

## Where the tangle genuinely does NOT dissolve: the population standpoint

A guideline must issue **one** recommendation to people who weight these dimensions differently — a
vegetarian on a tight budget and an omnivore indifferent to carbon are not served by the same weights.
Aggregating heterogeneous preferences into a single ordering is structurally problematic **independent
of anyone's bad faith**.

**This is a better explanation of guideline muddiness than capture is**, and it is testable in a way
capture usually is not: it predicts muddiness even in a body with no industry contact at all, and it
predicts that different national bodies will diverge *most* on the dimensions where populations differ
(affordability, staple crops, cultural acceptability) and *least* on the health axis. Capture predicts
divergence tracking industry structure instead. **The two hypotheses make different predictions and
can be told apart** — which makes this worth holding as a rival to challenge #3 rather than a
complement to it.

## Where it DOES dissolve: the individual standpoint

**One person has their own weights.** Their problem is well-posed even though the population's is not
— and this is why the wiki's three-layer structure routes around the tangle by construction rather
than by cleverness:

- **Layer 2** estimates the *health* axis for a stratum. Evidence-answerable.
- **Layer 3** applies *this person's* weights across all axes. Elicited, not estimated.

The tangle lives in the gap between them, which is exactly where population guidance sits.

**And the individual's tangle is much smaller than ten dimensions, because several of them do not
transfer.** This is the most practically useful part of the analysis:

| Dimension | Applies to a population guideline | Applies to one person's choice |
|---|---|---|
| Health effect | yes | **yes** |
| Affordability | yes (at scale) | **yes** (their own budget) |
| Carbon / welfare | yes | **only if they weight it** |
| **Scalability** | yes | **NO** — one person eating grass-fed beef does not require it to scale |
| **Communicability** | yes | **NO** — no simplification needed for an audience of one |
| Political palatability | yes | **NO** |

**Three of the dimensions in the tangle are artifacts of the population standpoint and vanish for an
individual.** Judging a personal choice by whether it would scale is a standpoint error — it imports a
constraint that is not the person's.

## What this wiki can and cannot supply

**It holds ONE axis.** It has no carbon data, no welfare data, no affordability data, and should not
pretend otherwise. So it can supply *one coordinate* of a frontier, never the frontier itself.

That is a scope statement rather than a shortfall — and it is the honest division of labour: **the
health coordinate is the one that is genuinely contested empirically and where an evidence fabric adds
something.** Carbon and welfare figures are contested too, but not by this corpus.

**The wiki's real contribution to the tangle is narrower and more valuable than resolving it: turning a
*suspected* trade-off into a *measured* one on the axis it holds.** In the table above, wheat's health
column reads *contested* — and whether it is a large or a small cost decides whether wheat sits on the
frontier at all. If the health cost is small, no weighting argument is needed to keep it; if large, the
trade-off is real and the weights matter. **Answering that is layer 2's job, and it is answerable.**

## The halo — asymmetric scrutiny ACROSS dimensions, not just across evidence

The mirror image of a body pushing a food up is a food's score on one dimension suppressing scrutiny
on the others. *Nuts are healthy*, therefore the water column goes unexamined. Almond milk and soy
milk inherit the same halo.

**This is the telos's central anti-bias rule, operating one level out.** That rule names asymmetric
scrutiny — *"demanding more of evidence you dislike than of evidence you like"* — as **"the primary way
motivated reasoning survives an 'evidence-based' framing."** The halo is that same asymmetry applied
**across dimensions** rather than across evidence: a favourable health score buys exemption from the
carbon, water and welfare columns. Structurally identical, and it needs the same fix — *symmetric
standards*, applied per column.

**And the halo is self-reinforcing on the health axis too, which is the sharper version of the
concern.** *Healthy food* categories are exactly where the observed-healthy-population problem bites:
the telos holds that such populations *"are not evidence for any one of their components"*, since
consumption of a halo food tracks the whole dietary pattern and the socio-economic position behind it.
**So the halo can inflate the health claim AND suppress the environmental one at once** — the same
mechanism operating on both columns, not a fair trade of one against the other.

### Two guards before accepting *or* rejecting a footprint claim

**1. Name the functional unit — this decides most footprint disputes on its own.**
Per kg, per calorie, per gram of protein, per hectare, per unit of nutrition delivered: these rank
foods differently, and a claim without its unit is unfalsifiable. Almonds look very different per kg of
water than per gram of protein.

**2. Frame it as a substitution, which the telos already requires.**
*"The effect of adding, removing or replacing a behaviour depends on what replaces it. Judge harms
against the realistic alternative, not against an ideal."* So **almond milk's water footprint versus
almonds' is the wrong comparison** — the decision-relevant one is almond milk versus **the dairy milk
it replaces**, on a matched unit. A food can be water-intensive in isolation and still be the
lower-footprint option in the substitution actually being made. The reverse is equally possible; the
point is that neither is settled by the isolated figure.

### What this wiki can and cannot say here — stated flatly

**It holds no environmental axis at all.** No water data, no carbon data. So:

- The **structural** claim — that a health halo suppresses cross-dimension scrutiny — is adjudicable
  from the telos's own anti-bias rule, and is **upheld** as a mechanism.
- The **specific** claims are **outside this corpus and are not asserted here.** That almonds are
  water-intensive is widely reported and plausible; the wiki cannot defend it and will not carry it as
  a claim.
- **One of them is flagged as likely wrong and should be checked rather than repeated.** Pulses are
  generally cited as *low*-impact protein, and the usual driver of such disagreements is the functional
  unit above: a figure that looks high per kg often inverts per gram of protein. **Recorded as a
  correction candidate, not a finding** — symmetric standards apply to claims congenial to this wiki's
  maintainer exactly as to guidance.

`AWAITS` an environmental-footprint source with stated functional units before any of this becomes a
claim rather than a method.

## The real failure is not the missing weight — it is the missing COORDINATE

[@nnr2023] is the first worked case the wiki holds, and it
exposes a distinction this page needed.

**NNR publishes one axis quantified and the other not.** Health: 350 g red meat/week, 300-450 g
fish/week, >=90 g whole grains/day. Environment: *"considerably lower"*, *"most important contributor
to GHG emissions from the diet"*, *"not desirable to increase... from current levels"* — **directions
and ranks, never magnitudes.**

**No environmental quantity appears anywhere in the food-group chapters.** [searched: `% of dietary
GHG/greenhouse/climate/emissions`, `kg CO2`/`g CO2`/`CO2eq per`, `most important contributor`, and
numeric-adjacent `emission|footprint|climate impact` across chunks 06-07 — four phrasings, no hits]

**White meat is the case that makes the problem visible, because BOTH coordinates are missing:**

| Axis | What NNR gives |
|---|---|
| Health | **explicitly zero** — *"relatively neutral... not possible to set a recommended intake range"* |
| Environment | **unquantified** — *"Due to negative environmental impacts, it is not desirable to increase"* |

A reader is told not to increase an exposure while being given **neither number**.

### The tension this resolves — and it is a tension in the critique too

**A quantified trade-off IS an imposed weight.** So a demand for both *"do not impose weights"* and
*"quantify the compromise"* cannot be satisfied: the second is the first. NNR's refusal to publish an
exchange rate is therefore **correct**, not handwaving — it is the right response to the problem this
page describes, and NNR says as much (*"Weighing... is essential and dependent on many factors and
priorities"*, so it *"describe[s] the considerations transparently"* instead).

**But that is not what NNR withheld.** It withheld the **environmental coordinate itself** — and that
is a genuine failure, because:

> **Publishing both magnitudes without combining them is possible, and it is what lets a reader apply
> their own weights.** Dominance and the frontier need no weights (above); they need *coordinates*.

**So the precise criticism is: not that NNR weighted opaquely, but that it published only one axis —
which makes independent weighting impossible for exactly the readers whose weights differ.** A person
who cares little about carbon and one who cares greatly are given the same instruction and no basis to
diverge from it, because the quantity that would separate them was never stated.

**The transparency test that follows.** Ask of any multi-objective recommendation: *are both magnitudes
published, or only the one that produced the number?* A body can legitimately decline to weight. It
cannot legitimately decline to **show what it traded**, because that is what makes the recommendation
auditable by someone with different values. -> [[Which Objective Moved This Recommendation]]

**Honest limit:** NNR's environmental evidence base may not support magnitudes — its own data-gap notes
say evidence beyond climate is largely missing, and it rejected optimisation modelling on transparency
grounds. **So "publish the coordinate" may be blocked by the evidence, not chosen.** The wiki cannot
currently tell those apart, and the distinction matters for whether this is a failure or a limit.

## Decision relevance

- **Rule out dominated options first — it needs no weights and is often decisive.** Reach for
  weighting only among what survives.
- **Ask which standpoint a dimension belongs to before letting it bind.** Scalability,
  communicability and political palatability are population constraints; importing them into a
  personal decision is a category error.
- **Do not ask guidance for a weighting it cannot legitimately supply.** A guideline's ordering encodes
  *someone's* weights, usually undeclared. -> [[Which Objective Moved This Recommendation]]
- **Where a trade-off is real, the useful move is to shrink the contested axis**, not to argue about
  weights. Measuring the health cost precisely can remove an option from contention entirely.
- **Apply the scrutiny you apply to a disliked food to a liked one.** If a health halo is exempting a
  food from its water or carbon column, that is the same asymmetry that lets motivated reasoning
  survive an evidence-based framing — and it inflates the health column at the same time.
- **Demand the functional unit before accepting any footprint figure**, and state the substitution.
  Most footprint disputes are unit disputes wearing a disagreement's clothes.

## Limits

- **No decision-theory source is held.** The dominance/frontier structure here is standard but
  unsourced in this corpus — `AWAITS` a decision-analysis or multi-criteria source before any of it is
  treated as more than the maintainer's and this page's reasoning.
- **The rival-hypothesis claim (weighting vs capture) is untested.** It predicts divergence patterns
  across national bodies that the wiki has not looked at, and it should not be read as evidence against
  capture — only as a competing explanation that must be distinguished rather than assumed away.
  Challenge #3 remains `unprobed`.
- Non-health axes are asserted qualitatively in the tables above (*poor / good*) from general
  knowledge, **not from held sources**. They illustrate the structure; they are not claims the wiki
  can defend, and should not be cited as such.

## References

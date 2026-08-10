---
type: framework
question: How is protein QUALITY assessed, and does hitting a protein target from plant sources cost more food mass and carbohydrate than from animal sources?
aliases: [DIAAS, Protein Quality, Digestible Indispensable Amino Acid Score, PDCAAS, Plant Protein Quality, Amino Acid Score, Protein Digestibility, Limiting Amino Acid, Protein Complementation]
authors: [Food and Agriculture Organization of the United Nations (org); Petroski, Weston; Minich, Deanna M]
sources: [FAO - Dietary Protein Quality Evaluation 2013, Petroski - Antinutrients Narrative Review 2020]
cluster: protein-quality
nucleus: true
confidence: low
relationships:
  related_to:
    - Protein and Resistance Training for Muscle and Strength
    - Antinutrients in Plant Foods
    - Whole Grains Refined Grains and Pulses
    - Surrogate Outcomes
    - Is the Food Category Doing Any Work
    - Soy Products and Health
created: 2026-07-29
updated: 2026-08-05
self_critiqued: 2026-07-29
---

**What "protein quality" measures — and what it does not.** Quality is two things multiplied:
**amino-acid composition** (how well a food's indispensable amino acids match human requirement — the
*limiting* amino acid caps the score) times **digestibility** (how much is actually absorbed). It says
nothing about how much protein a food carries, nor whether eating higher-quality protein changes any
outcome a person cares about. It is a **surrogate**, and the section at the bottom holds that line.



## DIAAS replaces PDCAAS, and the reason matters for plant proteins

The 2013 FAO Expert Consultation recommends a new metric:

> «A new protein quality measure (digestible indispensable amino acid score; DIAAS) is recommended to
> replace PDCAAS. DIAAS is defined as: DIAAS % = 100 x [(mg of digestible dietary indispensable amino
> acid in 1 g of the dietary protein) / (mg of the same dietary indispensable amino acid in 1g of the
> reference protein)].»
> [@fao2013]

Two DIAAS choices bear directly on plant-vs-animal appraisal:

- **True ileal digestibility of *each* amino acid**, measured at the end of the small intestine
  («preferably determined in humans, but if this is not possible, in growing pigs or in growing rats»),
  not a single faecal crude-protein figure. This resolves quality at the amino-acid level — where plant
  proteins are weakest (their *limiting* amino acid, not their average, sets the score).
- **DIAAS is not truncated.** PDCAAS capped any score above 100% back to 100%; DIAAS does not (whole
  milk powder scores **122**, below). The FAO expert panel flagged the cost of truncation directly:
  *«Additional benefit of proteins with higher scores in complementing less nutritious proteins is not
  captured»* [@fao2013]. An uncapped score is
  what makes **complementation** legible — a high-quality protein above 100% can lift a lysine-poor
  cereal, and truncation hid exactly that.

## The magnitude — FAO's own worked example ranks plant below animal

FAO's Table 6 (illustrating regulatory protein-content claims) is the decision-relevant number set:

| Food | Protein (g/100 g) | DIAAS | FAO judged quality |
|---|---|---|---|
| Wheat | 11 | **40** | Low |
| Peas | 21 | **64** | Low |
| Whole milk powder | 28 | **122** | High |

[@fao2013]

Read it as the maintainer's claim made concrete. Both plant foods are graded **Low** quality even
though peas carry a respectable 21 g protein per 100 g: the score is capped by the *limiting* amino
acid (cereals are lysine-limited; legumes are the near-mirror, relatively lysine-rich and
sulphur-amino-acid-limited — which is *why* cereal+legume complementation works) and by lower
digestibility. Milk powder clears both. FAO's claim column makes the consequence explicit: wheat and
peas are *«Eligible for claim based on quantity»* but *«No, none»* on quantity-and-quality; milk is
eligible on both.

## Does adequate protein from plants cost more mass and carbohydrate? — partly answered, partly a gap

The maintainer's claim was *"getting to adequate/optimal protein from unprocessed plant foods entails
high carb load and high bulk."* Decompose it against what the wiki now holds:

- **The quality discount is real and quantified (above):** a gram of pea protein delivers fewer
  digestible indispensable amino acids than a gram of milk protein (DIAAS 64 vs 122), so more *protein*
  — hence more *food* — is needed for the same delivered amino acids. Directionally solid from FAO's own
  table.
- **"Adequate" and "optimal" are two targets on two curves — fix which one first.** A population
  reference intake (\~0.8 g/kg/d, set against deficiency) and a contested performance/anti-sarcopenia
  target (commonly cited \~1.6 g/kg/d for resistance training,
  [[Protein and Resistance Training for Muscle and Strength]]) are different questions; the bulk/carb
  concern binds far harder at the higher target. The telos is explicit that a *recommended intake* is
  set for deficiency coverage and must never be read as an optimum.
- **The carbohydrate/bulk arithmetic itself is a `G` gap.** Computing grams-of-food and the
  protein:carbohydrate ratio of a realistic plant food-set needs a **food-composition database** the
  wiki does not hold — FAO gives DIAAS and protein-per-100 g for three illustrative foods, not the
  composition tables. **Do not fabricate the arithmetic.** `-> ingest-queue.md` (a food-composition /
  FAO INFOODS-class source).


[inferred from @fao2013]
## "Unprocessed" may be the binding constraint — not "plant"

FAO names the digestibility drag on plant proteins explicitly:

> «Many foods, including novel protein sources, may contain high levels of known antinutritional
> factors, which may be naturally occurring (e.g. tannins, phytates, trypsin inhibitors, glucosinolates,
> isothiocyanates), formed during processing (e.g. D-amino acids, lysinoalanine)»
> [@fao2013]

— and draws the line that scopes this page's synthesis: *«Many of these affect digestion and will be
taken into account in the determination of true ileal amino acid digestibility but others, such as
glucosinolates, isothiocyanates, etc., have more general metabolic effects»* [@fao2013]. The digestion-acting ones show up *as* a lower DIAAS (so the
remedy is *«proper processing to minimize their levels»* [@fao2013]); the goitrogenic ones act elsewhere and are not part of the protein story. Traditional processing — soaking, fermentation, sprouting, and the transformations
that make tofu and tempeh — lowers antinutrients and raises digestibility, i.e. raises DIAAS. So the
constraint the maintainer felt as *"plant"* may be substantially *"unprocessed"*: a hypothesis this
page holds open, pointing at a different intervention (prepare differently) than the claim implied
(eat animal protein) -> [[Antinutrients in Plant Foods]].

**Processing cuts both ways, though.** FAO recommends that *«for foods susceptible to damage from
processing, 'reactive' rather than 'total' lysine»* be used [@fao2013] — heat/Maillard damage destroys available lysine. Processing that removes
antinutrients can also degrade the limiting amino acid; the net effect on DIAAS is the object, not
either half.

## Synthesis — the antinutrient concern and the digestibility discount are one variable

**A move present in neither source alone.** FAO reaches plant-protein digestibility *from the
protein-quality side*: phytate, tannins and trypsin inhibitors depress true ileal amino-acid
digestibility, so they *are* the DIAAS discount. Petroski reaches the same compounds *from the
toxicity side*, and shows they are largely defused by the same step:

> «Phytates should not significantly impair mineral status when included as part of a diverse and
> balanced diet, especially if using traditional processing methods such as soaking, germinating,
> fermenting, and cooking.»
> [@petroski2020]

So the maintainer's two separate questions — *"is soaking worth it?"* and *"is plant protein
bioavailable?"* — are **one variable (antinutrient load) with one lever (traditional processing) seen
from two sides.** The lever raises protein quality and lowers the toxicity concern at the same time.
[inferred from @fao2013; @petroski2020] -> [[Antinutrients in Plant Foods]].

The caveat that keeps this from becoming a slogan: the identity holds for the digestibility-acting
subset (**phytate, tannins, trypsin inhibitors**). Antinutrients acting elsewhere — oxalate on mineral
absorption, goitrogens on the thyroid — are not part of the protein story and must not be swept in.

## Decision — protein powders: whey/casein vs plant (a small lever, correctly ranked)

Applying the score to a common decision (Challenge #13): **whey and casein out-rank most *single*
plant-protein powders** on exactly the determinants above — amino-acid composition (dairy is not
limited in lysine; leucine-rich, and leucine triggers the saturable muscle-protein-synthesis response
held on [[Protein and Resistance Training for Muscle and Strength]]) and digestibility. Dairy powders
sit near milk's DIAAS 122; most single plant proteins sit in the pea/wheat 40-64 range. **The
challenge's exception is right and is the same mechanism:** a *carefully-blended* plant isolate
(legume-lysine + cereal-methionine, e.g. pea+rice; or soy isolate) uses complementation to close much
of the gap — which is what the *untruncated* DIAAS was built to reward.

Two bounds keep this a **small** lever, not a headline:

- **It is a surrogate advantage** (next section). Whey's edge is largest *acutely and per gram*; when
  *total daily* protein is matched, long-term muscle/strength gains equalize substantially — RT is the
  driver, and Morton's supplemental effect is modest (+0.3 kg lean mass).
- **It only bites below adequacy.** For someone already hitting their protein target from a mixed diet
  (any dairy/egg/meat, or deliberate complementation), the limiting-amino-acid problem is solved at the
  *diet* level and the powder's source barely matters -> [[Is the Food Category Doing Any Work]].

**The same lens on the whole-food animal->plant shift.** Reducing red/processed meat (the contested
decision on [[Should Adults Reduce Red and Processed Meat]]) removes a *high*-quality protein source, so
the substitution's protein quality is the layer-3 cost to weigh — trivially covered if dairy/eggs/fish
remain or complementation is deliberate, more real for a strict plant shift. The three axes point
different ways (quality favours animal/dairy; the cancer axis mildly favours cutting red/processed meat;
the antinutrient worry is defused by preparation, [[Antinutrients in Plant Foods]]) — so the decision is
multi-axis, not a single verdict, and the quality axis is the one this page supplies.


[inferred from @fao2013]
## The surrogate line — do not let a high score become a recommendation

DIAAS is a **surrogate**: it predicts how well a protein *could* meet amino-acid demand. The wiki holds
**no** evidence that choosing higher-DIAAS protein improves a patient-important outcome — muscle,
function, or mortality — for a person already meeting their protein requirement from a mixed diet. A
score is a target only if its transmission to a real outcome is itself evidenced, which is not shown
here -> [[Surrogate Outcomes]]. For someone eating a varied diet with any animal protein or deliberate
complementation, the limiting-amino-acid problem is largely solved at the *diet* level regardless of
any single food's score — which is [[Is the Food Category Doing Any Work]] applied to protein.



## Provenance and limits



- **FAO 2013 is guideline-grade** (an FAO Expert Consultation), but it is a *methods* report — it
  standardises how quality is scored, not what eating high- vs low-DIAAS protein does to people.
- **Single hard-outcome evidence: none here.** Everything on this page is composition/digestibility
  (surrogate). `confidence: low`.
- **Open gaps routed:** the food-composition arithmetic (carb/bulk) `-> ingest-queue.md`; the
  requirement level itself (adequate-vs-optimal, WHO/FAO/UNU 2007) is staged, not held.

## Self-critique `[run 2026-07-29, before commit]`

- **Over-claim check:** the synthesis is tagged and scoped to the phytate/tannin/trypsin
  subset, with oxalate/goitrogen explicitly excluded — guarding against "antinutrients = protein
  discount" as a blanket identity. Held.
- **Fabrication check:** the carb/bulk arithmetic was NOT computed — flagged as a `G` gap needing a
  food-composition dataset. The only magnitudes asserted (DIAAS 40/64/122, protein 11/21/28 g/100 g)
  are FAO's Table 6 verbatim.
- **Surrogate discipline:** the page states twice that DIAAS moves no patient-important outcome on the
  evidence held. This is the load-bearing honesty and it runs *against* the intuitive "eat
  higher-quality protein" recommendation.
- **Laundered independence:** none claimed. FAO and Petroski approach from genuinely different sides
  (quality scoring vs toxicity review); the synthesis is marked as the wiki's induction, not either
  source's.
- **Whey-vs-plant powder section (added Challenge #13, 2026-07-29):** guarded inline against
  overstatement — the whey advantage is scoped to the *surrogate* (DIAAS/acute MPS), bounded by
  total-protein-matched outcome equalization and by the above-adequacy small-lever point, and the
  blend exception is attributed to the held complementation mechanism, not asserted anew. No
  patient-important outcome claimed for whey over plant.

## References

---
type: framework
question: When is 10-year risk the wrong frame, and what replaces it?
aliases: [Lifetime Benefit, Lifetime Risk, LIFE-CVD, CVD-Free Years, Years Gained, Young Adults Risk]
authors: [European Society of Cardiology (org)]
sources: [ESC - CVD Prevention Guidelines 2021]
cluster: cvd-risk-estimation
confidence: medium
relationships:
  related_to:
    - SCORE2 Baseline Risk and the ESC Treatment Thresholds
    - Risk Modifiers - When Extra Information Changes a Risk Estimate
    - Baseline Risk and the Relative-Absolute Split
created: 2026-07-26
updated: 2026-07-26
---

A 10-year horizon under-states the case for acting in younger adults, and ESC says so plainly. **But
ESC applies the construct at every age and in both directions** — the title reflects where it bites
hardest, not where the guideline confines it.

## The problem with the 10-year number under 50

> *"The 10-year CVD risk in relatively young, apparently healthy people is on average low, even in the
> presence of high risk factor levels, but the lifetime CVD risk is in these circumstances very high."*

> *"Women below 50 years and men below 40 years of age are almost invariably at low 10-year CVD risk,
> but may have unfavourable modifiable risk factors that sharply increase their longer-term CVD risk."*

> *"In risk communication with younger people, the lifetime benefit perspective may be useful, as well
> as discussing the potential of avoiding a devastating CVD event in the short-to-intermediate term,
> despite the fact that 10-year CVD risk may be very low."*

**And the very next sentence, which bounds the whole frame:**

> *"CVD risk predictions, as well as predictions of lifetime benefit of risk factor treatment, are
> likely to be **imprecise at very young age (<40 years)**. At that age, lipid-lowering and BP-lowering
> drug treatment are not usually considered, except for patients with FH or specific BP disorders. **A
> healthy lifestyle that is maintained throughout life is more relevant for the very young.**"*

[EXTRACTED @esc2021 3.2.3.6]

**So ESC bounds the very frame this page is about.** The lifetime argument is not a licence to treat the
young pharmacologically — below 40 the predictions themselves are called imprecise, and the guideline
redirects to lifestyle. **Any use of the three quotes above without this fourth sentence overstates the
source**, which is why it is reproduced here rather than cited.

**The mechanism:** risk-factor exposure compounds over decades while a 10-year window sees only the
first slice. ESC states that *«Age is the major driver of CVD risk»*, so a young person with a bad
risk-factor profile still scores low over ten years.
[INFERRED (ESC - CVD Prevention Guidelines 2021) — entailment from the age-banded thresholds and the
under-50 passage; the compounding framing is this page's, not ESC's wording.]

## The route ESC provides — generic across every age band, not an under-50 exception

**Not an under-50 special case.** The same clause appears
verbatim in all three age sections, with only the threshold changing — `<2.5%` under 50, `<5%` at 50-69,
`<7.5%` at 70+. Lifetime benefit is a standing consideration at every age.

> *"A 10-year CVD risk <2.5% is considered 'low-to-moderate risk', and would generally not qualify for
> risk factor treatment **unless one or several risk modifiers... increase risk, or the estimated
> lifetime risk and treatment benefit is considered substantial**."*

And it runs **bidirectionally** — ESC uses the same construct to treat *less* in the old:
*"lifetime benefit of treatment in terms of time gained free of CVD is lower in older people. Therefore,
the CVD risk thresholds for risk factor treatment are higher in apparently healthy people >=70 years."*
[EXTRACTED @esc2021 3.2.3.4; 3.2.3.5; 3.2.3.6]

**Governing recommendation class: IIa, Level C** — expert opinion, not trial evidence.

## The unit — and it is a better unit than a percentage

ESC's lifetime figures are expressed as:

> *"years of median life expectancy **free from myocardial infarction or stroke**"*

Better than a 10-year event probability for a long-horizon decision, and directly communicable.

**The endpoint includes death — it is not a pure CVD-free-time measure.** Box 1: *"Lifetime
benefit is the numerical difference between the predicted age at which there is a 50% probability that a
person will either have experienced a CVD event **or have died** with and without a proposed
treatment."* So it is a composite of CVD event *and* all-cause death — which is why the grids fall so
steeply with age, and why the tempting clean contrast *CVD-free years, not years of life* is false.

Box 1 also attaches the cost side: *"the estimated individual lifetime benefit should be viewed in the
light of the estimated duration of treatment. Duration of lifelong treatment will generally be longer in
young persons compared to older people. Both treatment effect and treatment duration determine the
individual 'return on investment'."* **A young person's longer horizon is a longer treatment commitment,
not only a larger gain.**

## How the numbers are built

> *"The lifetime benefit is calculated by estimating lifetime CVD risk with the LIFE-CVD model
> multiplied by the HR (0.78) from a meta-analysis of the effect of lipid lowering."*

> *"For 2 mmol/L LDL-C lowering, the average effect is almost twice as large, and so on."*

[EXTRACTED @esc2021 Figure 12 caption]

**Read that construction carefully — it is the wiki's own conversion move, done by the guideline.**
A lifetime baseline risk multiplied by a relative effect from a meta-analysis, expressed in absolute
units. Exactly the pattern on [[Baseline Risk and the Relative-Absolute Split]], with a lifetime rather
than a 10-year baseline.

**And note what that makes it: a MODELLED quantity, not a measured one.** No trial followed anyone for
a lifetime. The 0.78 is real trial evidence; the lifetime projection is a model. The dose-linearity
claim (*"almost twice as large"* for 2 mmol/L) is likewise a property of the model.

## The three grids ESC provides

| Figure | Intervention | Location |
|---|---|---|
| 11 | **Smoking cessation** | PDF p.49 |
| 12 | **1 mmol/L LDL-C reduction** | PDF p.52 |
| 15 | **10 mmHg SBP reduction** | PDF p.61 |

Figures 12 and 15 are by **age x sex x smoking x SBP x non-HDL-C**; **Figure 11 has no smoking term** —
everyone in the smoking-cessation grid is a smoker by construction. All are live text in the PDF.

**Two directions worth stating because they are counterintuitive:** women gain **more** than men from
the same LDL reduction (45-49 non-smoking: ~0.9-2.0 years vs ~0.6-1.6), and **smokers gain less**
(men 45-49 smoking ~0.5-1.4). Competing risk is why.

**Magnitudes, stated as a range rather than transcribed cell-by-cell.** For a middle-aged man in the
45-49 band, 1 mmol/L of LDL-C lowering buys **roughly 0.6 to 1.6 CVD-free years**, rising with SBP and
non-HDL and falling steeply with age — by 90+ the same intervention buys ~0.0-0.3 years.

**Deliberately not transcribed cell-by-cell:** the published figure misprints the 45-49 systolic labels
(they read `100-119 / 120-139 / 160-179 / 100-119`), so row alignment cannot be established from the
render alone. A stated range is honest where a misaligned row would not be. A coordinate-clustered
extraction of all three grids is owed.

## Decision relevance

- **Under 50, ask for the lifetime number before accepting a low 10-year one.** ESC's own rule makes
  substantial lifetime benefit a qualifying route into treatment from the lowest band.
- **CVD-free years gained is the more usable currency** for a long-horizon decision than a 10-year
  percentage, and it is what ESC supplies.
- **The benefit scales with the size of the reduction, but SUB-linearly.** ESC says 2 mmol/L gives
  *"almost twice as large"* an effect — and "almost" is structural, since HR 0.78 compounds to 0.61
  (a 1.78x ratio, not 2x). Reading this as "roughly linear" erases the
  direction of the shortfall — the benefit always falls **short** of proportional, never over.
- **This does not settle *treat or not*.** ESC is explicit that the lowest band *"would generally not
  qualify for risk factor treatment"*, and that under 40 drug treatment *"is not usually considered"*.
- **Competing risk cuts the other way at older ages**, which is why the grids fall so sharply: an
  intervention cannot buy CVD-free years to someone who will die of something else first.

## Limits

- **Calibrated for low- and moderate-risk regions only**: *"The model is currently validated for low-
  and moderate-risk countries."* It should not be read for high or very-high-risk regions.
- **Modelled, not observed** — see above. The wiki holds no validation of LIFE-CVD's lifetime
  projections against realized outcomes, which is the standing R1 problem in its sharpest form: a
  lifetime projection is by construction unfalsifiable within a career.
- ESC notes there are **no formal thresholds for AVERAGE lifetime benefit**, and gives an instruction
  in their place: *"the minimum desired benefit of a certain treatment needs to be established, a
  process in which patient preference, expected treatment harms, and costs can be taken into account."*
  It informs a decision by routing it to shared decision-making, not by leaving it open.
- One guidance body; whether others endorse lifetime framing or this model is **unprobed**.

## References

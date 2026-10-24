---
name: ab-test-analysis
description: Use when A/B test or experiment results are in and need a verdict, such as whether a variant won, whether a test reached significance, or whether to ship, extend or stop. For designing a test before it runs, see af-marketing:ab-testing.
---

# A/B Test Analysis

Turn experiment results into a decision: **ship**, **extend**, **stop**, or **investigate**. Test design (hypothesis, sample size planning, variants, the experiment backlog) belongs to `af-marketing:ab-testing`. This skill starts once data exists. For choosing the statistical test and the general cautions (multiple comparisons, Simpson's paradox), see the `statistical-analysis` skill.

Read `company.md` first for the product's key metrics and guardrails. Ask only for what's missing.

## Inputs

Accept any of these:

- Summary statistics: conversions and sample size per variant
- Raw event data: a CSV or warehouse table with user_id, variant, converted, timestamp
- A screenshot or export from an experimentation platform
- A description of the experiment and its results

When raw data is provided, compute everything in a Python script (pandas, `scipy.stats`) and save the script so the user can re-run it on new data.

## Step 1: Pin down the experiment

Establish:

- The hypothesis and what changed in the variant
- The **primary metric** (the one that calls the test), secondary metrics, and **guardrail metrics** (revenue, engagement, latency, support tickets)
- The planned sample size or stopping rule, the actual duration and the traffic split
- Any external events during the test (launches, campaigns, outages, holidays)

**Done when:** primary metric, guardrails and the planned stopping rule are each written down, or marked unknown.

## Step 2: Validate the test before reading the result

A result from a flawed test misleads, so check the setup first:

- **Sample ratio mismatch (SRM):** compare the observed split to the planned split with a chi-squared test. A significant mismatch (p < 0.01) means assignment or logging is broken; stop and report it before interpreting anything.
- **Power:** required sample per arm for a two-proportion test is
  `n = 2 · p(1−p) · (z₁₋α/₂ + z₁₋β)² / MDE²`, with p the baseline rate and MDE the absolute minimum detectable effect (z = 1.96 for α = 0.05, z = 0.84 for 80% power). State the required n, the actual n, and the verdict: sufficiently powered, underpowered, or overpowered.
- **Duration:** at least one to two full business cycles (whole weeks), so weekday mix doesn't bias the result.
- **Novelty and primacy effects:** compare the first days with the rest; a lift that decays over the test is partly novelty.

**Done when:** each of the four checks has a stated result, and any failure is flagged as a caveat or a stop.

## Step 3: Compute the result

For the primary metric and each guardrail:

- Rate per variant, with a 95% confidence interval
- Absolute difference and relative lift, `(variant − control) / control`, each with its confidence interval
- p-value from a two-tailed z-test for proportions or a chi-squared test (for means, a t-test or Mann-Whitney U, per `statistical-analysis`)
- **Practical significance:** compare the effect and its interval with the smallest effect worth shipping

Read the numbers correctly:

- A p-value is the probability, assuming the null model and its assumptions, of a result at least as extreme as the one observed. It is not the probability that the result is random, that the null is true, or that the variant will win again.
- A 95% confidence interval comes from a procedure with 95% coverage over repeated samples. It is not a 95% probability that this interval holds the true effect. Report it with the effect size, beside the p-value.
- Use the analysis and stopping rule the test was planned with. Sequential and Bayesian analyses have their own readings; report a platform's "confidence" or "chance to beat" score on its own terms, not as a fixed-horizon p-value.

These readings follow the [American Statistical Association's statement on p-values](https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf).

When data allows, break results down by segment (device, new vs. returning, plan). Label any segment not named before the test as exploratory, to be confirmed in a new test.

**Done when:** every primary and guardrail metric has rate, CI, lift, p-value, and a practical-significance call.

## Step 4: Decide

| Outcome | Recommendation |
|---|---|
| Significant positive lift, guardrails hold, effect worth shipping | **Ship**: roll out to 100% and monitor |
| Significant positive lift, a guardrail degraded | **Investigate**: quantify the trade-off before shipping |
| Planned sample not yet reached | **Extend** to the planned sample; the result so far is preliminary |
| Planned sample reached, not significant | **Stop**: report the effect interval. Say whether it still allows a meaningful benefit or harm, or rules out effects worth pursuing. Plan a new, better-powered test if the idea still matters |
| Significant negative lift | **Don't ship**: keep control and analyze why |

A finished fixed-horizon test is never extended to chase significance. "Extend" applies only when the test stopped short of its planned sample.

**Done when:** one recommendation is stated with its reason, covering both statistical and practical significance.

## Step 5: Report

```
## A/B Test Analysis: [Test name]

**Hypothesis**: [what we expected]
**Duration**: [X days] | **Sample**: [n control / n variant] | **Split check**: [SRM pass/fail]

| Metric | Control | Variant | Lift (95% CI) | p-value | Significant? |
|---|---|---|---|---|---|
| [Primary] | X% | Y% | +Z% (a% to b%) | 0.0X | Yes/No |
| [Guardrail] | ... | ... | ... | ... | ... |

### Sample size check
Required [n] per arm for [MDE] at 80% power; actual [n]. Verdict: [powered / underpowered / overpowered]

### Decision: [SHIP / EXTEND / STOP / INVESTIGATE]
[Why, covering statistical and practical significance]

### Business impact if shipped
[Expected change per month, best and worst case from the CI; revenue if applicable; confidence]

### Caveats
[Validity concerns, segment differences, novelty effects]

### Follow-up
[Next test to run; monitoring plan for 2–4 weeks after shipping, since novelty can inflate short-term lift]
```

Save the report as markdown, and the script beside it when one was used. Offer to record the result in the experiment playbook kept by `af-marketing:ab-testing`.

**Done when:** the report has every section filled or marked not applicable.

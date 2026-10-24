---
name: design-experiments
description: Use when validating a product assumption or feature idea before building it, testing demand for a new product concept with pretotypes, or choosing a cheap discovery test such as a fake door, prototype test or concierge MVP.
argument-hint: "<idea and the assumptions to test>"
---

# Design Experiments

Low-effort experiments that test product assumptions before full implementation. For a marketing-page A/B test or a growth experimentation program, the marketing department's `ab-testing` skill fits better; this skill tests whether a product or feature should exist.

Read `company.md` first for the product and customers; ask only for what is missing. Read any PRDs, assumption lists, designs or market research the user provides.

## Principles

- **Behavior over opinion.** Measure what people do, not what they say they would do.
- **Skin in the game** (Alberto Savoia, *The Right It*): real commitment of time, money or reputation is the only reliable signal of demand.
- **Your own data.** Prefer data your experiment collects over others' data such as market reports or analogies: the market for your idea does not care about the market for someone else's idea.
- **Test responsibly.** Keep users and the business out of harm's way; every production test states its risk mitigation.
- **Learning per effort.** Rank experiments by validated learning divided by effort.

## Pick the branch

- **Existing product** (continuous discovery): the team has a feature idea and assumptions about a live product.
- **New product** (initial discovery): the concept has no validated demand yet; test desirability before feasibility.

## Steps

1. **Clarify** what the team wants to build and which assumptions must hold. Done when each assumption is one sentence.
2. **Hypothesis.**
   - Existing product: state each assumption as a belief with an expected result.
   - New product: write an **XYZ hypothesis**, "At least X% of Y will do Z within S", where X is the share of the target market expected to engage, Y the specific market (e.g. "mid-size luxury sedan buyers"), Z how they engage, and S the time frame.

   Done when each hypothesis names a population, a behavior and a number.
3. **Choose methods.**
   - Existing product: first-click or task-completion tests on a prototype, feature stubs or fake door tests, technical spikes, A/B tests in production (with risk mitigation), Wizard of Oz, behavioral survey validation.
   - New product, 2-3 pretotypes: landing page (sign-ups, clicks), explainer video (engagement), email campaign (response and click-through), pre-order or waitlist (willingness to pay), concierge or manual MVP (deliver the value by hand).

   Done when every assumption or hypothesis has at least one method.
4. **Specify** each experiment: assumption, what exactly we will do, metric, success threshold (the value expected if we are right), effort, timeline. Sequence them by dependency and effort. Done when every experiment has all six.

## Output

| # | Assumption / hypothesis | Experiment | Metric | Success threshold | Effort | Timeline |
|---|---|---|---|---|---|---|

Follow with setup notes, risks and the decision each result triggers ("if it passes → build the MVP; if it fails → revisit the opportunity"). Save as markdown when substantial.

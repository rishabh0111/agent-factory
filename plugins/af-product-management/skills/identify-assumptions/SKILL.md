---
name: identify-assumptions
description: Use when stress-testing a feature idea or a new product concept for risky assumptions, building a risk register before discovery work, or asking why an idea might fail.
argument-hint: "<feature idea or product concept>"
---

# Identify Assumptions

Devil's advocate analysis that surfaces the assumptions an idea depends on, sorted by risk category. The aim is to strengthen the idea, not kill it: good teams expect at least three-quarters of their ideas to underperform, so finding the weak points early is the work.

Read `company.md` first for the product, customers and strategy; ask only for what is missing. Read any designs, PRDs, business plans or research the user provides.

## Pick the branch

- **Existing product**: a feature idea for a live product with real users. Use the four core product risks.
- **New product**: a concept without validated demand. Use all eight categories; go-to-market is especially critical.

When the user has not said, infer it from whether the product has users today, and state the choice.

## Steps

1. **Frame.** Confirm the product, objective, target segment and the idea. Done when the idea fits in one sentence.
2. **Three perspectives on failure.** Ask why the idea might fail from each seat:
   - **Product manager**: market fit, demand, willingness to pay, strategic alignment, competitive landscape.
   - **Designer**: usability, first-time experience, onboarding, adoption barriers, engagement.
   - **Engineer**: technical feasibility, build vs buy, performance, scalability, integration, technical debt.
3. **Assumptions by category.** Write each assumption as a belief that must be true ("Admins will invite teammates in their first week").

   The four core product risks (Teresa Torres, *Continuous Discovery Habits*), used in both branches:
   - **Value**: Will it create value? Does it solve a real problem? Will customers keep using it?
   - **Usability**: Will users figure it out? Can we onboard them fast enough? Does it add cognitive load?
   - **Viability**: Can marketing, sales, finance, support and legal back it? Can we sell, monetize and finance it? Is it worth the cost? Can we scale it? Is it compliant?
   - **Feasibility**: Can we build it with current technology? Is the integration possible? Can it run efficiently and scale?

   Added for a new product:
   - **Ethics**: Should we do it at all? Does it put customers at risk?
   - **Go-to-market**: Can we market it? Do we have the channels? Will customers try it? Is the message right for the channel? Is the timing and launch approach right?
   - **Strategy and objectives**: Can others copy the strategy? Have political, economic, legal, technological and environmental factors been considered? Are these the best problems to solve?
   - **Team**: Do we have the right people and tools? Will they work well together and stay long enough?

   Done when every category in the branch has at least one assumption or an explicit "none found, because...".
4. **Rate and test.** For each assumption: what specifically could go wrong, confidence (High / Medium / Low), and the cheapest test. Done when every row has all three.

## Output

| # | Assumption | Category | What could go wrong | Confidence | Suggested test |
|---|---|---|---|---|---|

Close with the 3 assumptions that would kill the idea if wrong. To rank the full list, hand it to the `prioritize-assumptions` skill; to design the tests, the `design-experiments` skill.

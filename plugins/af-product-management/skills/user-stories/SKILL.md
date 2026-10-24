---
name: user-stories
description: Use when breaking a feature or PRD into backlog items with acceptance criteria, in user story, job story or Why-What-Acceptance format, or converting backlog items between those formats.
argument-hint: "[user|job|wwa] <feature description or PRD>"
---

# User Stories

Break a feature into small, independent backlog items, each with testable acceptance criteria, in the format the team uses. One story is one deployable unit of value: if it needs another story to be useful, combine them.

Read any PRD, design links (Figma, Miro) or research the user provides; if a PRD is given, decompose its requirements. Ask which format the team uses when the user hasn't said; recommend user stories when they are unsure.

## Pick the format

| Format | Template | Focus | Best for |
|---|---|---|---|
| **User story** | As a [user role], I want to [action], so that [benefit]. | The role and the benefit | The default for most teams |
| **Job story** | When [situation], I want to [motivation], so I can [outcome]. | The situation and motivation, not the role (jobs to be done) | JTBD-oriented teams; stories grounded in observed user situations |
| **WWA** (Why-What-Acceptance) | **Why**: 1-2 sentences of strategic context and team objective. **What**: a short description and design link, 1-2 paragraphs at most: a reminder of the discussion, not a specification. **Acceptance**: high-level observable outcomes. | Strategic intent | Cross-functional teams that need the business context |

Every item, in any format, has a title, the description in its format, a design link where one exists, and acceptance criteria.

## Quality bar

**The 3 C's**: Card (a simple title and one-liner), Conversation (the intent, discussed with the team; the item is a reminder, not a contract), Confirmation (clear acceptance criteria).

**INVEST**: Independent (deliverable in any order), Negotiable (details open to discussion), Valuable (delivers user or business value, not just team value), Estimable (the team can roughly size it), Small (fits in one sprint), Testable (a clear way to verify it).

**Acceptance criteria** are observable and measurable, testable by QA without further interpretation: the situation is recognized, the behaviour happens, progress or feedback is visible, the outcome is reached, edge cases and errors are handled, performance, accessibility and integration points are covered. Error handling and edge cases that are substantial get their own stories.

**Common mistakes**:
- Too vague: "As a user, I want the product to be faster": what specifically?
- Solution-prescriptive: "As a user, I want a dropdown menu": describe the need, not the widget.
- No benefit: "As a user, I want to click a button": why?
- Too large: "As a user, I want to manage my team": split into specific capabilities.
- Internal focus: "As the engineering team, we want to refactor the database": a task, not a story.

Make the role specific ("enterprise admin", not "user") and describe what they want to accomplish, not how. Write in plain language a primary school graduate understands.

## Steps

1. **Analyze the feature**: the user roles or situations, the distinct journeys, the design and the assumptions. Done when every journey is named.
2. **Decompose** into 5-15 items, each independently valuable and sized for one sprint, ordered by dependency and priority. Above 15, group into epics or phases. Done when every item passes INVEST.
3. **Write each item** in the chosen format with acceptance criteria: 3-6 for user stories, up to 8 for job stories, about 4 high-level outcomes for WWA. Done when every criterion is testable.
4. **Flag** items that need design input or a technical spike (investigation before estimation is possible), and cross-cutting concerns (API changes, data migration, infrastructure).

## Examples

**User story.** Title: Recently viewed section. As an online shopper, I want to see a "Recently viewed" section on the product page, so that I can easily revisit items I considered. Acceptance: shown at the bottom of the product page for every user who has viewed at least 1 product; not shown on the first product page of a session; the current product is excluded; cards show image, title and price; each card shows when it was viewed ("Viewed 5 minutes ago"); clicking a card opens that product page.

**Job story.** Title: Track weekly snack spending. When I'm preparing my weekly allowance for snacks, I want to quickly see how much I've spent so far, so I can make sure I don't run out of money before the weekend. Acceptance: a "Weekly spending overview" section; real-time update when an expense is logged; a progress bar from 0-100% of the weekly budget; remaining budget highlighted; a spending log by category; a notification at 80% of budget; a weekend reminder at 90% by Thursday evening; easy navigation to the breakdown.

**WWA.** Title: Real-time spending tracker. Why: users need immediate feedback on spending to make conscious budget decisions; this supports our goal to improve financial awareness and reduce overspending. What: a tracker that updates as users log expenses and shows the current week's spending against their budget; designs in [Figma link]; details emerge in conversation with the team. Acceptance: totals update within 2 seconds of logging an expense; a progress bar shows budget progress; the remaining amount is visible at a glance; multiple expense categories are handled correctly.

## Output

```
## Backlog: [Feature]
Format: [user stories / job stories / WWA] | Stories: [count] | Estimated effort: [if possible]

#### Story 1: [Short title]
[The story in the chosen format]
Design: [link]
Acceptance criteria:
- [ ] ...
Priority: [P0/P1/P2] | Effort: [S/M/L] | Dependencies: [none / list]

### Story map: must-have → should-have → nice-to-have
### Technical notes
### Open questions
```

Save as markdown. Next steps worth offering: `test-scenarios` for these stories, `dummy-dataset` for test data, `sprint-planning` to fit them into capacity, or converting to another format.

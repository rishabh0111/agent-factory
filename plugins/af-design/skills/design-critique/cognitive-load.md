# Cognitive load

The checklist for step 3 of `design-critique`. Cognitive load is the total mental effort an interface demands. Overloaded users make mistakes, get frustrated and leave.

## Three types of load

- **Intrinsic: the task itself.** Complexity inherent in what the user is doing. It cannot be removed, only structured: break complex tasks into discrete steps, give scaffolding (templates, defaults, examples), disclose progressively (what is needed now, the rest later), group related decisions together.
- **Extraneous: bad design.** Effort caused by design choices. Pure waste; recommend removing all of it. Common sources: navigation that needs a mental map, labels that make users guess, visual clutter competing for attention, inconsistent patterns that block learning, unnecessary steps between intent and result.
- **Germane: learning.** Effort spent building understanding. This load is good: it leads to mastery. Support it with progressive disclosure that reveals complexity gradually, consistent patterns that reward learning, feedback that confirms correct understanding, and onboarding that teaches through action rather than walls of text.

## Checklist

Evaluate the interface against these eight items:

- [ ] **Single focus**: can the user complete the primary task without distraction from competing elements?
- [ ] **Chunking**: is information presented in digestible groups (four items or fewer per group)?
- [ ] **Grouping**: are related items visibly grouped (proximity, borders, shared background)?
- [ ] **Visual hierarchy**: is it immediately clear what matters most on the screen?
- [ ] **One thing at a time**: can the user focus on one decision before the next?
- [ ] **Minimal choices**: four or fewer visible options at any decision point?
- [ ] **Working memory**: can the user act on the current screen without remembering information from a previous one?
- [ ] **Progressive disclosure**: is complexity revealed only when the user needs it?

**Scoring**: count the failed items. 0–1 failures: low load (good). 2–3: moderate (address soon). 4 or more: high (critical fix needed).

## The working-memory rule

People hold about four items in working memory at once (Miller's law, revised by Cowan, 2001). At each decision point, count the distinct options, actions or pieces of information the user must weigh together:

- **Four or fewer**: within limits, manageable.
- **Five to seven**: pushing the boundary; recommend grouping or progressive disclosure.
- **Eight or more**: overloaded; users skip, misclick or abandon.

In practice:

- Action buttons: one primary, one or two secondary, the rest grouped in a menu.
- Navigation menus: five top-level items or fewer, the rest grouped under clear categories.
- Long-form articles: one reading path; related links gathered into a single block at the end, not scattered mid-flow.
- Documentation sidebars: four sibling choices or fewer visible per level before grouping starts.
- Portfolio and gallery indexes: one decision per screen (which piece to open), not filter, sort and tag controls all at once.

## Common violations

| Violation | Problem | Fix |
|-----------|---------|-----|
| The wall of options | Ten or more choices at once with no hierarchy | Group into categories, highlight the recommended one, disclose progressively |
| The memory bridge | The user must remember something from step 1 to finish step 3 | Keep the context visible, or repeat it where it is needed |
| The hidden navigation | The user must build a mental map of where things are | Always show the current location (breadcrumbs, active states, progress) |
| The jargon barrier | Technical or domain language forces translation | Plain language; unavoidable domain terms defined inline |
| The visual noise floor | Every element has the same weight; nothing stands out | One primary element, two or three secondary, the rest muted |
| The inconsistent pattern | Similar actions work differently in different places | Same type of action, same type of UI |
| The multi-task demand | Reading, deciding and navigating at the same time | Sequence the steps; one thing at a time |
| The context switch | Jumping between screens, tabs or modals to gather what one decision needs | Put the information for each decision in one place |

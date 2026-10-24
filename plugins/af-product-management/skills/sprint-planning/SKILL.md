---
name: sprint-planning
description: Use when planning a sprint, such as sizing a backlog against team capacity and availability (PTO, meetings, on-call), choosing committed vs stretch stories, sequencing dependencies, or handling carryover from the last sprint.
argument-hint: "[sprint name or date range]"
---

# Sprint Planning

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../../CONNECTORS.md).

Plan a sprint: one clear goal, a commitment that fits real capacity with a buffer, sequenced dependencies, and named risks.

## Inputs

- **Team**: members, roles (engineers, designers, QA) and availability this sprint.
- **Sprint length**: 1 or 2 weeks, or the dates.
- **Backlog**: the prioritized items. Pull from **~~project tracker** if connected; otherwise paste, upload or describe.
- **Velocity**: points completed in the last 3 sprints, if known.
- **Carryover**: anything unfinished from last sprint.
- **Interruptions and dependencies**: holidays, on-call, meetings (from **~~calendar** if connected), work blocked on other teams.

Read any velocity data, team rosters or previous sprint reports the user provides.

## Steps

1. **Capacity.** Per member, available days after PTO, meetings and on-call, converted to points or ideal hours. Base it on average velocity from the last 3 sprints; with no history, assume 70% of theoretical capacity. Reserve a 15-20% buffer for unplanned work, bugs and tech debt, and commit to the rest: teams that plan at 100% always miss. Done when the capacity table totals and the recommended commitment is stated.
2. **Select stories.** Pull from the top of the prioritized backlog. Check each against the Definition of Ready (clear acceptance criteria, estimated, no blockers); flag the ones that need refinement, design input, or acceptance criteria before committing. Balance quick wins with larger items. Mark each committed item P0 (must ship) or P1 (should ship), and name P2 stretch items: you need to know what to cut if things run long. Stop adding when the commitment is reached. Treat carryover honestly: understand why it didn't ship before re-committing. Done when the committed load is within the recommended commitment.
3. **Map dependencies.** Identify stories that depend on other stories (A before B) or on external teams, with the owner of each external dependency; sequence accordingly and mark the critical path. Done when every dependency has an owner.
4. **Risks.** Stories with high uncertainty or complexity, external dependencies that could slip, knowledge concentration (only one person can do it), and underspecified stories. Give each a mitigation. Done when every risk has one.
5. **Sprint goal.** One sentence capturing the sprint's primary value. If you can't state it in one sentence, the sprint is unfocused. Done when the goal is one sentence and the P0 items serve it.

If **~~project tracker** is connected, offer to create the sprint and assign the items; if **~~chat** is connected, offer to share the plan with the team.

## Output

```markdown
## Sprint Plan: [Sprint name]
**Dates:** [Start] - [End] | **Team:** [members]
**Sprint Goal:** [one sentence]

### Capacity
| Person | Available days | Points/hours | Notes |
|--------|----------------|--------------|-------|
| [Name] | [X] of [Y] | [X] | [PTO, on-call, etc.] |
| **Total** | **[X]** | **[X]** | |

**Recommended commitment:** [X] points (buffer [Y]%) | **Sprint load:** [X] points ([X]% of capacity)

### Sprint Backlog
| Priority | Item | Estimate | Owner | Dependencies | Risk |
|----------|------|----------|-------|--------------|------|
| P0 | [Must ship] | [X] pts | [Person] | [None / Blocked by X] | |
| P1 | [Should ship] | [X] pts | [Person] | [None] | |
| P2 | [Stretch] | [X] pts | [Person] | [None] | |

### Critical path
### Risks
| Risk | Impact | Mitigation |
|------|--------|------------|

### Needs refinement before commit
### Definition of Done
- [ ] Code reviewed and merged
- [ ] Tests passing
- [ ] Deployed to staging and QA approved
- [ ] Documentation updated (if applicable)
- [ ] Product sign-off

### Key Dates
| Date | Event |
|------|-------|
| [Date] | Sprint start |
| [Date] | Mid-sprint check-in |
| [Date] | Sprint end / Demo |
| [Date] | Retro |
```

Save as markdown. After the sprint, the `sprint-retro` skill runs the retrospective.

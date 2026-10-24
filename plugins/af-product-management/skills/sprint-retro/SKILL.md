---
name: sprint-retro
description: Use when running or writing up a team's sprint or iteration retrospective, such as grouping team feedback into themes, reviewing the sprint against its goal, or turning the discussion into a few owned action items.
argument-hint: "<sprint name, plus team feedback or sprint data>"
---

# Sprint Retrospective

Run a team retrospective that surfaces what helped and hurt during the sprint and ends in 2-3 action items people will actually do. This is a team ritual about how the team works; it is not a retrospective on an agent coding session (that is software-factory's `sf-learn`).

Read any team feedback (survey responses, sticky notes, chat threads, a shared doc), sprint metrics (velocity, bugs, incidents), the sprint plan and previous retro notes the user provides.

## Pick the format

Use the one the user names; otherwise ask, or choose from context and say why.

- **Start / Stop / Continue** (simple, fast): what should we begin doing, stop doing, keep doing?
- **4Ls**: Liked (what the team enjoyed), Learned (new knowledge), Lacked (what was missing), Longed for (what we wish we had).
- **Sailboat**: Wind (what propels us), Anchor (what slows us), Rocks (risks ahead), Island (the goal).

## Steps

1. **Sprint performance.** Was the sprint goal achieved, partly achieved or missed? Velocity against commitment (over- or under-committed)? Blockers hit and how they were resolved; collaboration patterns that worked or didn't. Done when goal status and committed vs completed points are stated.
2. **Themes.** Sort the feedback into the format, group similar items into themes, count how often each comes up, and note sentiment (frustration, energy, confusion). Separate symptoms from root causes, and call out wins worth celebrating. Done when every feedback item sits in a theme.
3. **Action items.** At most 2-3 (more won't get done), each specific, assignable and measurable, with an owner, a deadline and a success metric. Done when every action has all four.
4. **Carry-over.** Check the previous retro's actions: done, in progress, or not started. Done when each has a status, or no previous actions were provided.

Keep the tone constructive: the goal is improvement, not blame.

## Output

```
## Sprint [X] Retrospective - [Date]
Format: [Start/Stop/Continue | 4Ls | Sailboat] | Participants: [if known]

### Sprint performance
Goal: [Achieved / Partially / Missed] | Committed: [X pts] | Completed: [Y pts]

### What went well
[Themes with supporting evidence]

### What didn't go well
[Themes with root causes]

### Key insights
[2-3 patterns]

### Action items
| Priority | Action | Owner | Deadline | Success metric |

### Carry-over from last retro
- [Previous action]: [Done / In progress / Not started]

### Metrics this sprint
| Metric | This sprint | Last sprint | Trend |
```

Save as markdown.

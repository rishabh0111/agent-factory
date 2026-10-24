---
description: Run the sprint lifecycle in one place, from planning a sprint to its retrospective and release notes
argument-hint: "[plan|retro|release-notes] <context>"
---

# /sprint

Three modes for the sprint lifecycle: **plan** before it, **retro** after it, **release-notes** for what shipped. Each chains to the next: plan → (sprint happens) → retro → release-notes.

```
/sprint $ARGUMENTS
```

Examples: `/sprint plan 2-week sprint, 4 engineers, focus on checkout improvements`, `/sprint retro` with pasted team feedback or sprint data, `/sprint release-notes` with pasted tickets, changelog or PRD. With no mode, ask which phase the user is in.

## Plan mode

1. Gather the sprint context: duration, team and availability, sprint goal or focus, backlog items, carryover, known interruptions (holidays, on-call, meetings).
2. Run `/af-product-management:sprint-planning` to its completion criteria, including the capacity breakdown per member and the buffer for unplanned work.

## Retro mode

1. Gather team feedback (survey, chat, shared doc), sprint metrics (velocity, bugs, incidents) and the user's own observations, and ask which format: Start/Stop/Continue, 4Ls or Sailboat.
2. Run `/af-product-management:sprint-retro` to its completion criteria, keeping to 2-3 high-impact action items.

## Release-notes mode

1. Gather the tickets or changelog, PRDs or specs, commit messages or PR descriptions, or the team's summary of what shipped.
2. Run `/af-product-management:release-notes` to its completion criteria, asking about tone when it isn't clear.
3. Offer versions for other channels: blog post, in-app, email, chat announcement.

Save each mode's output as markdown, then offer the next mode in the chain.

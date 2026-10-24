# Rewrite a roadmap as outcomes

Output roadmaps (lists of features) create false precision and align teams around features rather than results. An outcome roadmap names the customer problem solved and the business value expected, which leaves room for flexible execution and is more resilient to change.

## Steps

1. **Parse the current roadmap.** Accept any format: feature list or backlog, Now/Next/Later or quarterly document, spreadsheet or Gantt export, screenshot of a roadmap tool. For each item extract the feature name, description, timeframe and context. Done when every item is listed.
2. **Strategic context.** Read `company.md` for strategy and goals, then ask only what is missing: the product goals or OKRs for the period, the audience (execs, engineering, customers, board), and the preferred format (Now/Next/Later, quarterly, timeline). Done when every outcome can be tied to a goal.
3. **Transform each item.** Ask: what outcome are we trying to achieve? What customer problem does it solve? What business metric improves? Is there a better, different way to reach the same outcome? When the answer is unclear, ask "so what?" until you reach real customer or business value. Write the outcome as:

   ```
   Enable [customer segment] to [desired customer outcome] so that [business impact]
   ```

   Group features that serve the same outcome under one initiative (many outputs per outcome is expected), and give each outcome a measurable success metric with a clear "done" state. Flag any output that serves no clear outcome for the user to justify or deprioritize. Done when every original item maps to an outcome or is flagged.
4. **Fit the audience.** Exec roadmaps are outcome-only; engineering roadmaps can list deliverables under each outcome. "Later" items are outcomes without committed solutions. Done when the detail level matches the audience.
5. **Strategic notes.** How the outcomes align with company strategy, the key assumptions about customer needs, dependencies and sequencing, and flexible release windows. Done when each Now outcome has its assumptions stated.

## Before and after

- Output: Q2: build advanced search filters, implement AI recommendations, redesign the dashboard.
- Outcomes: Q2: enable customers to find products 50% faster through intuitive discovery; increase average order value by 20% through personalized recommendations; help operators monitor all systems with an 80% cut in dashboard load time.
- "Build SSO integration" → "Reduce enterprise onboarding friction: 50% faster time-to-first-value for enterprise accounts."
- "Redesign dashboard" → "Help power users find insights faster: 30% less time-to-insight."
- "Add CSV export" → "Let teams share data outside the product: 25% more report sharing."

## Output

```
## Outcome-Focused Roadmap: [Product] - [Period]
Strategic themes: [2-3]

### Now (current quarter)
Theme: [...]
| Outcome | Success metric | Key initiatives | Status |

### Next (next quarter)
| Outcome | Success metric | Key initiatives | Confidence |

### Later
| Outcome | Success metric | Key initiatives | Dependencies |

### Transformation notes
| Original feature | Outcome | Why this framing |

### What changed: [how the roadmap narrative shifted]
### Assumptions and dependencies
```

Save as `Outcome-Roadmap-[period].md`. Next steps worth offering: OKR alignment per outcome (the `team-okrs` skill), a stakeholder presentation (`stakeholder-update`), or risks for the Now items (`pre-mortem`).

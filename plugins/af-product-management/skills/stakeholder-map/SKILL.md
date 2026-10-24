---
name: stakeholder-map
description: Use when mapping the internal and external stakeholders of a product initiative, launch or change on a power/interest grid and planning how to communicate with each group, including conflicts, escalation and RACI.
argument-hint: "<project, initiative, or launch>"
---

# Stakeholder Map

Find everyone a product initiative touches, place them on a Power × Interest grid, and plan who hears what, how often and from whom. Writing the updates themselves is the `stakeholder-update` skill; mapping the buyers in a sales deal is the sales department's `stakeholder-map`.

Read `company.md` first for the organization and customers; ask only for what is missing: the initiative, its phase (planning, building, launching, post-launch), the stakeholders already known, and any politically sensitive dynamics. Read any org charts, project briefs or team rosters the user provides.

## The grid

| | High interest | Low interest |
|---|---|---|
| **High power** | **Manage closely**: regular 1:1s, involve in decisions, seek input early | **Keep satisfied**: periodic updates, escalate only critical issues |
| **Low power** | **Keep informed**: regular status updates, invite to demos, gather feedback | **Monitor**: light-touch updates, include in broad updates, available on request |

**Power** is the ability to influence decisions, resources or outcomes. **Interest** is how much the initiative affects them or how engaged they are. Manage closely is where PMs spend most of their political capital.

## Steps

1. **Identify stakeholders**, including the ones the user hasn't considered. Internal: leadership, engineering, design, QA, data, legal, finance, marketing, sales, support. External: customers and end users, partners, vendors, regulators, board. Often missed: adjacent teams, on-call engineers, customer success, documentation and sales enablement, who are often surprised by launches. Done when every group has been considered.
2. **Classify** each stakeholder by power (High / Low), interest (High / Low) and stance (supportive, neutral, resistant); stance shows where to invest relationship-building. Done when every stakeholder has a quadrant and stance.
3. **Plan communication** per quadrant and per key stakeholder: frequency (daily, weekly, bi-weekly, monthly), channel (1:1, email, chat, meeting, dashboard), key messages and framing, owner, and the risk if they are neglected. Done when every Manage-closely and Keep-satisfied stakeholder has a row.
4. **Flag conflicts** between stakeholders with competing interests and suggest alignment strategies; name the escalation path for blocked decisions; draft a RACI for the main decision areas. Done when every conflict has a strategy.

Update the map as the project moves: interest shifts with the phase.

## Output

```
## Stakeholder Map: [Initiative]

### Stakeholder grid
| Stakeholder | Role | Power | Interest | Quadrant | Stance |

### Communication plan
#### Manage closely
| Stakeholder | Channel | Frequency | Key message | Owner | Risk if neglected |
#### Keep satisfied
#### Keep informed
#### Monitor: [broad updates only]

### Potential conflicts and alignment strategies
### Escalation path
### RACI
| Decision area | Responsible | Accountable | Consulted | Informed |
```

Save as markdown. Next steps worth offering: the first `stakeholder-update` for the Manage-closely group, a prep brief for key stakeholder conversations, or the communication cadence as a recurring checklist.

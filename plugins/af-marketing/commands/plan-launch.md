---
description: Build a full go-to-market plan, from beachhead segment and ICP to messaging, channels and launch timeline
argument-hint: "<product or feature to launch>"
---

# /plan-launch

Build a go-to-market plan from first principles: pick the beachhead, define the ideal customer, set positioning and messaging, choose channels, and lay out the launch timeline.

## Usage

```
/plan-launch $ARGUMENTS
```

Examples:

```
/plan-launch AI proposal writer for consulting firms
/plan-launch New enterprise tier for our project management tool
/plan-launch [upload a PRD, strategy doc, or pitch deck]
```

## Workflow

### 1. Understand the launch

Read `company.md` and `.agents/product-marketing.md` first. Then ask, in one message, only what they don't answer:

- What is launching: a new product, feature, tier, or market expansion?
- What stage: pre-launch planning, imminent launch, or post-launch optimization?
- Existing customers, or starting from zero?
- Timeline and hard deadlines
- Budget and team size

Wait for the answers.

### 2. Choose the beachhead and define the ICP

Run the beachhead and ICP methods of the **customer-research** skill. With existing customers, define the ICP from their data; when starting from zero or entering a new market, choose the beachhead first. Skip whichever the product marketing context already settles.

### 3. Build the strategy

Run the Go-to-Market Strategy section of the **launch** skill: motions and channels, messaging by stakeholder, pricing alignment, success metrics, and the phased plan. Take positioning from the product marketing context, or generate it with **product-marketing** when it's missing.

### 4. Assemble the plan

```
## Go-to-Market Plan: [Product/Feature]

**Launch date**: [target] | **Type**: [new product / feature / tier / market expansion]

### Beachhead segment
**Who**: [specific segment] | **Why first**: [scores against the four criteria] | **Size**: [TAM/SAM/SOM]

### Ideal customer profile
| Attribute | Definition |
|---|---|
| Company size | |
| Industry | |
| Decision maker | |
| Key job to be done | |
| Current solution | |
| Qualification signal | |

### Positioning and messaging
**Positioning statement**: For [who] who [need], [product] is [category] that [benefit]. Unlike [alternative], we [differentiator].

| Audience | Message | Proof point |
|---|---|---|

### Channel strategy
| Channel | Motion | Tactic | Reach | Cost | Priority |
|---|---|---|---|---|---|

### Launch timeline
| Phase | Timing | Actions | Owner | Go/no-go criterion |
|---|---|---|---|---|
| Pre-launch | | | | |
| Launch week | | | | |
| Post-launch | | | | |

### Success metrics
| Metric | Baseline | 30-day target | 90-day target |
|---|---|---|---|

### Risks and mitigations
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|

### Expansion plan
[After the beachhead: which adjacent segments, in what order, with what changes]
```

Save it as markdown. Pre-launch work (waitlist, beta, early access) carries as much weight as launch day, and the first 90 days after launch set the trajectory, so give both phases concrete actions.

### 5. Offer next steps

- Design growth loops for post-launch traction: `/af-marketing:growth-strategy`
- Competitive battlecards for sales: `/af-marketing:battlecard`
- Launch copy: the **copywriting** and **emails** skills
- A launch metrics dashboard: `af-data:build-dashboard`

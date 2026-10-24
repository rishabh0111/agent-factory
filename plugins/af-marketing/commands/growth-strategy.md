---
description: Design sustainable growth, from growth loops to the GTM motion mix, experiments and a 90-day plan
argument-hint: "<product or growth challenge>"
---

# /growth-strategy

Find the growth mechanisms that compound: which growth loops to build into the product and which go-to-market motions to run beside them.

## Usage

```
/growth-strategy $ARGUMENTS
```

Examples:

```
/growth-strategy B2B collaboration tool, growth has stalled at 5K users
/growth-strategy Consumer fitness app looking for viral growth
/growth-strategy [upload product metrics or growth data]
```

## Workflow

### 1. Understand the growth context

Read `company.md` and `.agents/product-marketing.md` first. Then ask, in one message, only what they don't answer:

- Who uses the product, and what do they do in it?
- Current growth: user count, growth rate, acquisition channels
- What's working, and what isn't?
- How revenue relates to user growth
- Team and budget available for growth

Wait for the answers.

### 2. Evaluate growth loops

Run the growth-loop method in the **referrals** skill (its growth-loops reference): score the viral, usage, collaboration, user-generated content and referral loops, then design the primary loop and estimate its coefficient.

### 3. Evaluate GTM motions

Score the seven motions with the GTM motions reference in the **launch** skill, and pick a stack of 2–4. For each, note expected CAC, time to results and tools.

### 4. Assemble the strategy

```
## Growth Strategy: [Product]

**Current state**: [users, growth rate, key channels] | **Growth goal**: [target]

### Growth loops
| Loop | Mechanism | Fit | Impact | Effort | Priority |
|---|---|---|---|---|---|

### Primary loop: [type]
**How it works**: [step by step] | **Requirements**: [what must be true or built]
**Health metrics**: [shares per user, invite conversion, K, cycle time] | **Next steps**: [concrete]

### Secondary loop: [type]
[same format]

### GTM motion mix
| Motion | Investment | Expected CAC | Time to results | Tools |
|---|---|---|---|---|

### Growth experiments
| # | Experiment | Tests what | Effort | Expected learning |
|---|---|---|---|---|

### Growth metrics
- **North Star**: [from the north-star-metric skill, or proposed]
- **Loop health**: [per loop]
- **CAC by channel**: [tracking approach]
- **Payback period**: [target]

### 90-day plan
**Month 1**: [focus areas and experiments]
**Month 2**: [scale what works, cut what doesn't]
**Month 3**: [optimize and systematize]
```

Prioritize loops over one-off campaigns: loops compound and tactics don't. Put small budgets into experiments and scale what proves out. Flag any channel whose projected CAC exceeds a third of LTV. Save as markdown.

### 5. Offer next steps

- Plan a launch campaign: `/af-marketing:plan-launch`
- Content for the inbound motion: the **content-strategy** skill
- Tracking for loop health: the **analytics** skill
- A referral program for the referral loop: the **referrals** skill
- Experiment design: the **ab-testing** skill

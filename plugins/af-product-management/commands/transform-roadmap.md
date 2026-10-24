---
description: Rewrite a feature-based roadmap as an outcome-focused roadmap that says why, not just what
argument-hint: "<roadmap as text, file, or list of planned features>"
---

# /transform-roadmap

Take a feature list or output roadmap and rewrite it as outcomes with success metrics, grouped into Now / Next / Later.

```
/transform-roadmap $ARGUMENTS
```

Examples: a pasted feature list or roadmap, or an uploaded roadmap doc, spreadsheet or screenshot.

## Workflow

1. **Accept the roadmap** in any format: feature list, Now/Next/Later or quarterly document, spreadsheet or Gantt export, screenshot. Done when every item is parsed.
2. **Transform.** Run the "Rewrite as outcomes" operation of `/af-product-management:roadmap-update` to its completion criteria: strategic context, an outcome and metric per item, outputs without an outcome flagged, detail matched to the audience.
3. **Deliver** the outcome roadmap saved as markdown.
4. **Next steps.** Offer OKR alignment per outcome (`/af-product-management:plan-okrs`), a stakeholder presentation (`/af-product-management:stakeholder-update`), or risks for the Now items (`/af-product-management:pre-mortem`).

---
description: Turn a meeting transcript or rough notes into structured minutes with decisions, action items and follow-ups
argument-hint: "<transcript or meeting notes>"
---

# /meeting-notes

Turn a raw transcript or rough notes into clear minutes, with decisions captured and action items owned.

```
/meeting-notes $ARGUMENTS
```

Examples: a pasted transcript, or an uploaded transcript file, recap or notes.

## Workflow

1. **Accept the input** in any format: a full transcript, rough notes, a transcription tool's recap, or several combined. Done when every provided input is read.
2. **Summarize.** Run `/af-product-management:summarize-meeting` to its completion criteria. Done when every decision and action is captured and every action has an owner or an "owner needed" flag.
3. **Deliver** the summary saved as markdown.
4. **Next steps.** Offer to email the notes to participants, create tickets from the action items, or draft a stakeholder update on the decisions (`/af-product-management:stakeholder-update`).

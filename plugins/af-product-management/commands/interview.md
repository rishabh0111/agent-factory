---
description: Prepare a customer discovery interview script, or summarize an interview transcript into structured insights
argument-hint: "[prep|summarize] <topic or transcript>"
---

# /interview

Two modes: **prep** writes the script before you talk to customers; **summarize** extracts insights afterwards.

```
/interview $ARGUMENTS
```

Examples: `/interview prep Onboarding experience for enterprise users`, `/interview summarize` with a pasted or uploaded transcript. With no mode word, ask which one the user needs.

## Prep

1. **Research goal.** Take what `company.md` and `$ARGUMENTS` already say, then ask for the rest: what the team is trying to learn, who is being interviewed (segment, role, relationship to the product), the time slot (15, 30 or 60 minutes), and the decision the research informs. Done when the research question is one sentence.
2. **Script.** Run `/af-product-management:interview-script` with those answers, including any hypotheses the user wants probed, through its leading-question pass.
3. **Deliver** the script with *why we ask* annotations, the note-taking template and the red flags list, saved as a markdown file ready to print.

## Summarize

1. **Accept the input**: pasted transcript or notes, an uploaded file, or the user's account of what was said. With rough notes, work with what is there and state the limits.
2. **Summarize** with `/af-product-management:synthesize-research`. One transcript follows its single-interview branch; several transcripts follow its main workflow, with cross-participant patterns.
3. **Deliver** the summary saved as markdown. Done when said-vs-did and any internal contradictions are flagged and competitor mentions are captured.
4. **Connect** to broader research: offer to compare with earlier interview summaries, update the assumption list (`/af-product-management:identify-assumptions`), or build personas across interviews (`/af-product-management:user-personas`).

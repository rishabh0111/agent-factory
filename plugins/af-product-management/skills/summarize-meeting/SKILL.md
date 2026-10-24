---
name: summarize-meeting
description: Use when turning a product or team meeting transcript or rough notes into meeting minutes with decisions, owned action items and open questions.
argument-hint: "<transcript or meeting notes>"
---

# Summarize Meeting

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../../CONNECTORS.md).

Turn a raw transcript or rough notes into a summary that someone who missed the meeting gets in 30 seconds, with every decision captured and every action owned. Decisions are the most valuable output.

Accept any input: a full transcript (from a transcription tool or **~~meeting transcription** if connected), rough notes, a recap, or several at once (transcript plus the user's own notes). If the input is sparse, work with what is there and flag the gaps. Customer research interviews go to the `synthesize-research` skill instead.

## Steps

1. **Read it all.** Identify participants and roles (from introductions, speaker labels or mentions), the meeting type (standup, planning, review, 1:1, stakeholder), the project and the main topic. Done when participants and topic are stated or marked unknown.
2. **Extract.** The topics discussed; the decisions made, each with its context and rationale; disagreements and concerns; action items with owner and due date; open questions with who needs to answer; key quotes worth keeping verbatim. Keep "discussed" separate from "decided": many topics are explored without a conclusion. Done when every decision and action in the transcript is captured.
3. **Flag gaps.** An action item without an owner is useless: mark it "owner needed". Done when no action lacks an owner or a flag.
4. **Write it plainly.** Language a primary school graduate understands, objective (what was said, not opinions), "we" language. Prioritize what affects the roadmap or strategy, what each person must do, and by when. For a long or complex meeting (60+ minutes), open with a TL;DR and split the highlights by topic.

## Output

```
## Meeting Summary
**Date & time**: [...] | **Participants**: [names and roles] | **Type**: [...] | **Topic**: [...]

### Summary
[3-5 sentences on what was discussed and concluded]

### Decisions
1. **[Decision]**: [context and rationale]

### Action items
| # | Action | Owner | Due date | Status |

### Discussion highlights
**[Topic]**: [key points, different perspectives, conclusion]

### Open questions
- [Question]: needs input from [person / team]

### Next steps
- [What happens next] | Next meeting: [if mentioned]
```

Save as `Meeting-Summary-[date]-[topic].md`. Next steps worth offering: email the notes to participants (**~~email**), create tickets from the action items (**~~project tracker**), or a `stakeholder-update` based on the decisions.

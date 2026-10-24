---
name: interview-script
description: Use when preparing a product discovery interview with customers or prospects, writing a jobs-to-be-done interview guide, or checking discovery questions for leading or pitching. For usability tests or UX interviews about a design, see af-design:user-research.
argument-hint: "<research topic or participant segment>"
---

# Customer Interview Script

A discovery interview script that surfaces what customers actually did, following The Mom Test (Rob Fitzpatrick): ask about their life, not your idea. Customer interviews are one input to discovery, alongside usage analytics, stakeholder interviews, surveys and market trends; the product trio (PM, designer, engineer) should hear customers directly, without proxies.

Read `company.md` first for the product and customer segments; ask only for what is missing.

## Steps

1. **Research objectives.** Establish what the team needs to learn, who is being interviewed (segment, role, relationship to the product), how long the slot is (15, 30 or 60 minutes), what decision the research informs, and which assumptions need validating. Read any personas, hypothesis lists, briefs or earlier notes the user provides. Done when each question in the script can be traced to one of these objectives.
2. **Write the script** from the sections below, adapted to the product area, the participant, and the time slot (cut or add sections to fit). Annotate every core question with *why we ask* and one follow-up prompt, so the interviewer stays on track. Done when the timings add up to the slot.
3. **Leading-question pass.** Reread every question. Rewrite any that ask about the future ("Would you use X?"), name your solution, or invite a compliment. Done when every question asks about past behavior or present context.
4. **Deliver** the script, the note-taking template and the red flags list as one markdown file.

## Script sections

**Opening (2-3 min).** Introduce yourself and the purpose: learning, not selling. "There are no right or wrong answers. We're here to learn from your experience." Ask permission to record. Confirm the time available.

**Warm-up: context (5 min).** Build rapport and learn their context.
- "Tell me about your role and what a typical day or week looks like."
- "How long have you been doing [activity]?"

**Core exploration: jobs to be done (15-40 min).**
- *Current behavior, past tense, specific instances:* "Walk me through the last time you [did the thing]. What happened?" "What tools or methods did you use?" "How long did it take? Who else was involved?"
- *Pains, observed rather than led:* "What was the hardest part about that?" "If you could wave a magic wand, what would change?" "What have you tried to solve this? What happened?"
- *Desired outcomes, in their words:* "What does 'good' look like for you here?" "How would you know it was working well?"
- *Priority and willingness to pay (skin in the game):* "How much time or money do you spend on this today?" "Have you looked for a better solution? What did you find?" "What would you give up to have this solved?"

**Specific topics (5-10 min, optional).** Targeted questions about a concept or feature, asked only after the open exploration.

**Wrap-up (3-5 min).** "Is there anything I didn't ask that you think is important?" "Who else should I talk to about this?" Thank them; share next steps.

## Probes

- "Tell me more about that."
- "Why?" asked gently, 2-3 times, to reach the root cause.
- "Can you give me a specific example?" moves opinion to fact.
- "What happened next?" follows the story.
- "How did that make you feel?" captures emotional intensity.

## The Mom Test rules

- Ask about their life, not your idea.
- Ask about the past, not the future.
- Listen about 80% of the time.
- Keep the pitch out of the interview entirely.
- Follow strong emotion: it signals real pain or delight.
- Treat compliments as noise: "That sounds cool!" tells you nothing.

## Red flags during the interview

Hypothetical answers ("I would..."), compliments without a story, the participant asking for features instead of describing problems, the interviewer talking more than the participant, and politeness covering for no real pain. When one appears, return to a specific past instance.

## Note-taking template

```
Participant: [Name / ID]
Date: [Date]
Key jobs: [What they're trying to accomplish]
Current solution: [What they use today]
Biggest pain: [Their #1 frustration]
Desired outcome: [What success looks like]
Willingness to pay: [What they invest today / would invest]
Surprise finding: [Something unexpected]
Follow-up: [Next steps]
```

After the interview, the `synthesize-research` skill turns the transcript into a structured summary.

# Detailed spec

The detailed branch keeps the eight sections and goes deeper in these places. Constraints, prior art and scope preference are worth asking about in this branch only.

## Background: the problem statement

- The user problem in 2-3 sentences: who experiences it and how often.
- The cost of not solving it: user pain, business impact, competitive risk.
- The evidence: user research, support data, metrics or customer feedback.

## Objective: goals and success metrics

- 3-5 goals, each answering "how will we know this succeeded?", split into user goals (what users get) and business goals (what the company gets).
- **Leading indicators** (move in days to weeks): adoption rate (% of eligible users who try it), activation rate (% who complete the core action), task completion rate, time to complete, error rate, usage frequency.
- **Lagging indicators** (move in weeks to months): retention impact, revenue impact (upgrades, expansion, new revenue), NPS or satisfaction change, support ticket reduction, competitive win rate.
- **Targets**: specific ("50% adoption within 30 days", not "high adoption"), based on comparable features, benchmarks or explicit hypotheses; a success threshold and a stretch target; the measurement method (tool, query, time window); and when you will evaluate (1 week, 1 month, 1 quarter after launch).

## Solution: user stories

Group stories by persona and order them by priority, including edge cases (error states, empty states, boundary conditions). The `user-stories` skill holds the formats, INVEST checks and common mistakes. Example:

- "As a team admin, I want to configure SSO for my organization so that my team members can log in with their corporate credentials."
- "As a team member, I want to be redirected to my company's SSO login so that I don't need a separate password."
- "As a team admin, I want to see which members have logged in via SSO so that I can verify the rollout is working."

## Solution: requirements by priority

- **Must-have (P0)**: the feature cannot ship without these; the minimum viable version. Ask: "If we cut this, does the feature still solve the core problem?" If not, it is P0.
- **Nice-to-have (P1)**: significantly improves the experience but the core use case works without it; often fast follow-ups after launch.
- **Future considerations (P2)**: out of scope for v1, but design so they stay possible. Documenting them prevents architectural decisions that make them hard later.

MoSCoW is the same cut with a fourth bucket: **Must** (not viable without), **Should** (important, high-priority fast follow), **Could** (if time permits; won't delay delivery if cut), **Won't (this time)** (explicitly out, may revisit).

Be ruthless about P0s: if everything is P0, nothing is. Challenge every must-have ("would we really not ship without this?"). P1s are things you are confident you will build soon, not a wish list. P2s are architectural insurance.

For each requirement: an unambiguous description of the expected behaviour, acceptance criteria, technical considerations or constraints, and dependencies on other teams or systems.

## Acceptance criteria

Write them as Given / When / Then:

- Given the admin has configured SSO for their organization
- When a team member visits the login page
- Then they are automatically redirected to the organization's SSO provider

Or as a checklist:

- [ ] Admin can enter an SSO provider URL in organization settings
- [ ] Team members see "Log in with SSO" on the login page
- [ ] SSO login creates an account if none exists
- [ ] SSO login links to the existing account when the email matches
- [ ] Failed SSO attempts show a clear error message

Cover the happy path, error cases and edge cases, including what should NOT happen. Describe behaviour, not implementation. Make each criterion independently testable, and replace vague words ("fast", "user-friendly", "intuitive") with concrete definitions.

## Assumptions and open questions

Tag each question with who should answer it (engineering, design, legal, data, stakeholder) and mark it **blocking** (answer before starting) or **non-blocking** (resolve during implementation).

## Release: timeline and scope

- Hard deadlines (contractual commitments, events, compliance dates), dependencies on other teams' work or releases, and phasing if the feature is too large for one release.
- 3-5 non-goals, each with its reason (not enough impact, too complex, separate initiative, premature).

**Scope creep** shows up as requirements added after approval, "small" additions that accumulate, features no user asked for ("while we're at it..."), a launch date that keeps moving without explicit re-scoping, and stakeholders adding without removing. Prevent it: write explicit non-goals; require that any addition comes with a removal or a timeline extension; separate v1 from v2 clearly; check everything against the original problem statement; time-box investigations ("if we can't figure out X in 2 days, we cut it"); keep a parking lot for good ideas that are out of scope.

## After the draft

Ask whether any section needs adjustment, and offer follow-up artefacts: a design brief, an engineering ticket breakdown, a stakeholder pitch.

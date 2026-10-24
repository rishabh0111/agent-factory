---
name: release-notes
description: Use when turning tickets, PRDs, commit logs or an internal changelog into customer-facing release notes or a "what's new" announcement that leads with user benefit. For the marketing launch campaign around a release, see af-marketing:launch.
argument-hint: "<product and version, plus tickets or changelog>"
---

# Release Notes

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../../CONNECTORS.md).

Turn technical tickets, PRDs or internal changelogs into polished release notes that customers read: each change framed as what it lets them do, not how it was built.

Read `company.md` first for the product, its audience and voice; ask only for what is missing. Read every ticket export, PRD, git log, PR description or internal summary the user provides, or pull them from **~~project tracker** if connected. A developer-facing repository changelog and project docs belong to software-factory's `sf-release-docs`; a launch campaign belongs to the marketing department's `launch`.

## Categories

- **New features**: entirely new capabilities.
- **Improvements**: enhancements to existing features.
- **Bug fixes**: issues resolved.
- **Breaking changes**: anything that needs user action (migrations, API changes).
- **Deprecations**: features being sunset.

## Steps

1. **Extract** from each item what changed, who it affects, and why it matters to them. Done when every shipped item has all three or is marked internal-only.
2. **Categorize** each item. Done when every item has a category.
3. **Write each entry** in 1-3 sentences: lead with the user benefit; use plain language without jargon, internal codenames or ticket numbers; include screenshots or visuals when the user provides them. Done when no entry describes an implementation.

   - Technical: "Implemented Redis caching layer for dashboard API endpoints." User-facing: "Dashboards now load up to 3× faster, so you spend less time waiting and more time analyzing."
   - Technical: "Fixed race condition in concurrent checkout flow." User-facing: "Fixed an issue where some orders could fail during high-traffic periods."
4. **Order and tone.** Put the most impactful change first as the highlight. Match the product's voice: professional for B2B, friendly for consumer, developer-focused for APIs; ask about tone if `company.md` doesn't settle it.

## Output

```
# [Product] - [Version / Date]

## Highlights
[1-2 sentences on the most important change]

## New Features
- **[Feature]**: [what it does and why it matters]

## Improvements
- **[Area]**: [what got better and how it helps]

## Bug Fixes
- Fixed [issue in user terms] that caused [user impact]

## Breaking Changes
- **Action required**: [what users need to do]

## Deprecations

## Coming Soon (optional)
```

Leave out empty sections. Save as markdown; convert to HTML or another format on request, and offer versions for other channels (blog post, in-app, email, chat announcement).

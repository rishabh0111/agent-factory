# Extracting patterns into the system

The `extract` mode of `design-system`: find the patterns that repeat across screens, and consolidate them into the library and DESIGN.md so they are reused instead of redrawn.

## Step 1: Find the system

Locate the design system: the Figma library, its published styles, variables and components, and DESIGN.md. Learn its structure first: how components are organised and named, how tokens are named and layered, how variants are expressed.

When no system exists yet, stop before creating one: ask the user where it should live (which Figma file or library, which folder for DESIGN.md) and how they want it structured.

Done when you can name the library, its naming conventions and its token structure, or the user has said where a new one goes.

## Step 2: Identify the patterns

Look across the screens in the target area for:

- **Repeated components**: similar UI drawn three or more times (buttons, cards, inputs), especially as loose layers or detached instances.
- **Hard-coded values**: colours, spacing, type and shadows that should be tokens (fills and text not linked to a style or variable).
- **Inconsistent variations**: several drawings of the same concept (four slightly different secondary buttons).
- **Composition patterns**: layouts or interactions that repeat (form rows, toolbar groups, empty states).
- **Type styles**: repeated size + weight + line-height combinations outside the text styles.
- **Motion patterns**: repeated easing, duration or transition choices in prototypes and specs.

Extract only what is used three or more times with the same intent. Two elements that look alike but serve different purposes stay separate.

Done when each candidate has its count, its screens, and a one-line statement of its intent.

## Step 3: Plan the extraction

For the user to approve:

- **Components to add**: which repeated elements become library components.
- **Tokens to create**: which hard-coded values become tokens, as primitives or semantic tokens.
- **Variants to support**: what each component needs to cover its real uses, and no more.
- **Names**: component, token and property names that match the existing conventions.
- **Migration path**: which screens move to the shared version, in what order.

Extract what is clearly reusable now, not everything that might be reusable someday.

## Step 4: Build the shared versions

- **Components**: clear properties with sensible defaults, the variants the uses need, accessibility built in (role, label, keyboard behaviour, visible focus state), and a usage note.
- **Tokens**: names that carry meaning (primitive versus semantic), a clear hierarchy, and a note on when to use each. Tokens have semantic meaning; a value used once stays a value.
- **Patterns**: when to use the pattern, an example, and its variations and combinations.

## Step 5: Migrate

- **Find every instance** of each extracted pattern across the screens in scope.
- **Swap each one** to the shared component or token, or list it for the designer when you cannot edit the file.
- **Check parity**: each migrated screen looks and behaves as before, unless the change was the point.
- **Retire the old versions**: delete or deprecate the loose drawings and duplicate styles.
- **Code**: list where the coded library needs the same change, and hand the list on with `design-handoff`.

Done when every instance found in Step 2 is migrated or listed with its replacement.

## Step 6: Document

- Add the new components to the library documentation (`document [component]` for each).
- Record new tokens and their use in DESIGN.md (see [design-md.md](design-md.md)).
- Add examples and usage guidelines, and update any component catalogue the team keeps.

## Keep in mind

- Generalise what you extract: a one-off, context-specific drawing stays where it is.
- Keep components specific enough to be useful; one so generic it fits everything helps nobody.
- Follow the existing system's conventions before your own.
- Document every component property, its type and its default.
- Extract by intent, not by look.

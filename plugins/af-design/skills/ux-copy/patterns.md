# Interface copy by function

Step 4 of `ux-copy` for strings inside a product: what each kind of string must carry, and the shape it takes.

## Contents

1. Actions and navigation
2. Destructive actions and confirmation dialogs
3. Forms
4. Errors and permissions
5. Loading states
6. Empty states
7. Success states
8. Tooltips, help and instructional text
9. Onboarding

## 1. Actions and navigation

- **Name the action or the thing**, with a verb and an object when the outcome is not already obvious: "Start free trial", "Save changes", "Download report", "Book a table".
- **Be specific**: "Create account", not "Submit".
- **Describe what will happen, not the gesture** that triggers it: "Show details", not "Click here" or "Tap to expand".
- **Match the label to the outcome**: the screen the button opens carries the same words.
- **One to three words.** The primary action keeps one name everywhere it appears.
- **One primary button per screen**; a second action is a plain text link.
- **At most one arrow glyph**, on the primary action, and only when the design uses arrows at all.
- **Navigation**: the wordmark, up to five plain links, one action. Link labels are single nouns. Link text makes sense out of context ("Pricing", never "Read more").
- Keep the same noun and verb for the same concept across the whole product.

## 2. Destructive actions and confirmation dialogs

- **Prefer undo over confirmation** when recovery is safe: "Message archived. Undo".
- When confirmation is necessary, **name the object and the consequence**: "Delete 3 files?" not "Are you sure?"; "This can't be undone."
- **Label buttons with the action** on both the message and the buttons: "Delete files" / "Keep files", never "Yes" / "No", "OK" / "Cancel" or "Submit".

## 3. Forms

- **Persistent labels.** A placeholder is an example, never the label.
- **Requirements before submission**: format and eligibility rules sit with the field, up front.
- **Explain why** information is requested only when it is not obvious.
- **Required and optional** marked the same way on every form.
- **Validation** says what needs attention and how to correct it, without blaming the user, next to the field, and announced to assistive technology.

## 4. Errors and permissions

Structure: **what failed + why (when known and useful) + how to recover or what alternative remains.**

- "Payment declined. Your card was declined by your bank. Try a different card or contact your bank."
- The primary message is plain language; an internal code, when support needs it, comes second.
- Promise only a cause or a resolution the system actually knows.
- Privacy, payment, deletion, access loss and blocked work are serious: warmth is welcome, jokes are not.
- Permission requests say what the access is for, in the user's terms, before the system prompt appears.

## 5. Loading states

- **Name the real operation**: "Importing 240 contacts", not "Loading…".
- **Set an honest expectation** when the wait is meaningful, to reduce anxiety.
- Show determinate progress when it is available; show only progress the system can actually measure.

## 6. Empty states

Structure: **what this is + why it is empty + how to start.**

- "No projects yet. Create your first project to start collaborating with your team."
- Distinguish the kinds of empty, because each needs different words and a different next action: first use, no results, everything filtered out, no permission, and failure to load.

## 7. Success states

- Confirm the completed outcome: "Invoice sent to Ana Ruiz".
- Mention the next consequence only when it changes what the user should do: "She'll get a reminder in 7 days if it's unpaid."
- Routine success is brief; celebrate only real milestones, and not over the top.

## 8. Tooltips, help and instructional text

- **Tooltips**: concise, helpful, never obvious.
- **Helper text answers an implicit question** instead of restating the control ("Used only for delivery updates", not "Enter your phone number").
- **Progressive disclosure** for uncommon detail: a "Learn how" link beats a paragraph nobody needs twice.
- Icon-only controls get accessible names that match what the icon means.

## 9. Onboarding

- Progressive disclosure, one concept at a time.
- Teach through the first real action rather than a wall of text.
- Every onboarding screen can be skipped, and says how to find the help again.

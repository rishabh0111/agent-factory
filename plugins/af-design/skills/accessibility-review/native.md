# Native screens: VoiceOver and TalkBack

Extra checks for step 2 of `accessibility-review` when the screens are a native iOS or Android app (or both, for a cross-platform app). Run these alongside the WCAG quick reference; mark each one pass, fail, n/a or to test, just as you do there.

## Checks

- **Labels**: every interactive element has an accessibility label, a trait or role (button, link, header, adjustable), and announces its state (selected, expanded, on/off). The design annotates them for custom controls.
- **Reading and focus order**: traversal follows the visual order; no control is unreachable; focus lands somewhere sensible after navigating, opening a sheet or closing a dialog, never lost.
- **Text scaling**: text follows Dynamic Type (iOS) or the system font scale (Android). Ask for captures at a large text size: fixed sizes show up as clipped or overlapping text.
- **Touch targets**: at least 44×44 pt on iOS and 48×48 dp on Android, with spacing between neighbours (8 dp on Android).
- **Reduce Motion / Remove animations**: parallax and large slides have a crossfade or instant-cut alternative.
- **Contrast in both appearances**: text and meaningful non-text elements pass in light and in dark.

## Score, 0–4

0 = screen reader unusable; 1 = major gaps (unlabelled controls, no text scaling); 2 = partial (labels exist, order or scaling breaks); 3 = good (minor gaps); 4 = excellent (labelled, ordered, scales cleanly, Reduce Motion honoured).

## Evidence

Judge native screens from Figma frames for the platform, simulator or emulator captures, or a device; a browser render of the same code shows a different platform. Screen-reader order and announcements need VoiceOver or TalkBack on a simulator or device; from frames alone they are "to test". Say which source produced each finding.

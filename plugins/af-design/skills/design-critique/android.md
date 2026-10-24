# Android screens

Visual-review rules for native Android screens, whatever they are built with (Jetpack Compose, Android Views, React Native, Flutter). Material Design 3 governs structure, navigation and interaction on every surface; the brand expresses itself through Material's theming: colour roles, type scale, shape and motion. A Material-everywhere cross-platform app that also ships to iPhone still owes iOS its guarantees on that hardware: safe-area insets, Reduce Motion, edge-swipe back (see [ios.md](ios.md)).

## The Android test

Would a fluent Android user trust this app, or trip on off-spec components? The most common tell is an iOS app wearing Android's skin: bottom-only navigation copied from iPhone, a back arrow that ignores the system Back gesture, Cupertino-shaped switches and dialogs. Material 3 is the rulebook; the brand is themed through it. A screen that reads as a port is a priority issue (P1).

## Layout and structure

- **Material navigation, matched to size.** A navigation bar (bottom, 3–5 destinations) at compact width; a navigation rail or drawer at expanded width. A phone bottom bar shipped untouched on a tablet is a finding.
- **System Back always works.** The predictive Back gesture and Back button are honoured; a flow that traps the user or hijacks the gesture is a finding.
- **Edge-to-edge with window insets.** Content clears the status bar, navigation bar, display cutout and keyboard.
- **Top app bar for screen context**, paired with a FAB when the screen has a single primary action.

## Touch targets

- **48×48 dp minimum** for every touch target, with at least 8 dp between them.

## Typography

- **Material type scale.** Display, Headline, Title, Body and Label roles (large, medium, small each). Text maps to roles; sizes hand-picked per screen are a finding.
- **Roboto is the system face**; a brand face comes in through the type scale, keeping body, labels and controls legible and consistent.
- **Type follows the system font size** (sp units). Ask for a capture at a larger font scale: clipped labels show up there.

## Colour and theming

- **Material colour roles** (primary, on-primary, surface, surface-variant, secondary-container, outline, error). Roles resolve light, dark and contrast variants; a palette specified only as raw hex breaks there.
- **Dynamic Color (Material You)** where it fits: the scheme derives from the user's wallpaper on Android 12 and later, with a static fallback scheme designed too.
- **Dark theme is a first-class scheme.** Review it; a quick inversion is a finding.
- **Tonal elevation.** Elevation shows through the standard surface tonal levels (plus shadow where appropriate), in place of arbitrary drop shadows.

## Components and motion

- **Material components.** Buttons (filled, tonal, outlined, text), FAB, switches, chips, snackbars, bottom sheets, Material dialogs, navigation bar, rail and drawer. Ported iOS controls or invented equivalents are findings.
- **One FAB, one primary action.** Stacked FABs, or a FAB spent on a secondary task, are findings.
- **Snackbars for transient feedback** (with an action when useful); dialogs only for decisions that must interrupt.
- **Material motion patterns.** Container transform, shared axis, fade-through, with standard easing and durations; with the system's Remove animations setting on, a crossfade or an instant cut.
- **Material Symbols** for icons; a mixed icon set is a finding.

## Adaptivity

- **Tablets and large screens.** A stretched phone layout is a finding; window size classes call for a rail or drawer and more columns.
- **Orientation.** Landscape that clips content, or is locked without a reason, is a finding.
- **Keyboard.** Inputs stay visible above the keyboard; ask for a capture with it open on form screens.
- **Multi-window and foldables.** The layout holds in split screen, and adapts on posture change instead of placing content across the hinge.

## Evidence

- Native screens are judged from Figma frames for Android, emulator captures or device captures, never from a browser render of the same code.
- A complete set covers every device class the app ships to: at least one phone and, when tablets are a target, one tablet, plus the dark theme and a larger font scale.
- Emulators give breadth; gestures, refresh rates and performance need hardware. Say in the Evidence line which produced each finding.

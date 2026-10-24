# iOS screens

Visual-review rules for native iOS and iPadOS screens, whatever they are built with (SwiftUI, UIKit, React Native, Flutter). Apple's Human Interface Guidelines govern structure, navigation and interaction on every surface; the brand expresses itself through the layer the platform leaves open: tint, type, motion and content.

## The iOS test

Would a fluent iPhone user trust this app, or pause at off-spec controls? The tell is "ported from a website": reinvented navigation bars, custom back gestures, web-shaped buttons, hover-dependent affordances. Platform components are the default; a departure needs a reason the user would thank you for. A screen that reads as a web port is a priority issue (P1).

## Layout and structure

- **Safe area.** Everything sits inside the safe-area insets: no controls under the notch, the Dynamic Island, the home indicator or the rounded corners.
- **System navigation.** A tab bar for 2–5 top-level sections (sections, never actions), a navigation stack for hierarchy, a sheet for self-contained tasks. Custom global navigation and mixed metaphors are findings.
- **Edge-swipe back stays alive.** The left-edge back gesture is muscle memory; a design that disables it or covers it with another gesture is a finding.
- **Large titles** on top-level screens, collapsing to inline on scroll. Deep detail screens stay inline.

## Touch targets

- **44×44 pt minimum** for every tappable control, with breathing room between neighbours.

## Typography

- **Dynamic Type.** Text uses the system text styles (Large Title through Caption) so it follows the user's reading size. Ask for a capture at a large text size: fixed sizes show up there as truncation.
- **San Francisco carries the UI.** Body, labels and controls stay on SF Pro / SF Compact; a brand face may appear in display moments.
- **11 pt floor**; Body is 17 pt.

## Colour and materials

- **Semantic system colours** (label, secondaryLabel, systemBackground, separator, tint). They adapt to Dark Mode and increased contrast; a palette specified only as raw hex breaks there.
- **Dark Mode is a first-class appearance.** Review both appearances; a design delivered in light only is incomplete.
- **One tint colour** drives interactive elements; decoration is not its job.
- **System materials** for blur and translucency behind bars and sheets, in place of hand-made glass effects.

## Components and controls

- **Platform controls.** Switch, segmented control, stepper, system pickers, action sheets, alerts, context menus, swipe actions. Reinvented versions of these, for flavour, are the most common native tell.
- **SF Symbols** for icons: baseline-aligned, scaling with Dynamic Type, with weight and scale variants. A web icon set mixed in is a finding.
- **Deliberate modality.** A sheet for a focused, dismissible sub-task; a full-screen cover for immersion. Clear Cancel and Done; swipe-to-dismiss works unless data loss needs a guard.
- **Grouped / inset lists** for settings-shaped content, in place of bespoke card stacks.

## Motion

- **System transitions.** Push slides, sheets rise, dismiss reverses the entrance. Custom transitions that fight the navigation model disorient.
- **Reduce Motion.** The design states a crossfade in place of parallax and large slides.

## Adaptivity

- **iPad is its own layout.** An iPad screen that is a scaled-up phone layout is a finding; it should use the wider size class (sidebar, split view, more columns).
- **Orientation.** Landscape that clips content, or is locked without a reason, is a finding.
- **Keyboard.** Inputs stay visible above the keyboard; ask for a capture with the keyboard open on form screens.
- **Multitasking.** iPad Split View and Slide Over keep the layout intact at narrow widths.

## Evidence

- Native screens are judged from Figma frames for iOS, simulator captures or device captures, never from a browser render of the same code.
- A complete set covers every device class the app ships to: at least one iPhone and, when iPad is a target, one iPad, plus Dark Mode and a large Dynamic Type size.
- Simulators give breadth; posture, gestures and performance need hardware. Say in the Evidence line which produced each finding.

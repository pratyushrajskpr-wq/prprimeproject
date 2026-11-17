# PR Prime Projects — Website Design Brief
*Real Estate, Turnkey Construction & Architectural Consulting*
**Founder & Managing Director:** Pratyush Raj  
**Brand Motto:** *"Building Trust, Creating Landmarks"*

---

## 1. Brand Essence & Visual Direction
The design reflects **trust, enduring strength, architectural precision, and warm approachability**. Tailored specifically for real estate buyers, commercial developers, and families planning their dream homes in Lucknow and Uttar Pradesh, the visual language balances professional engineering rigor with warm, welcoming customer assurance.

---

## 2. Colour Palette
A carefully balanced palette featuring a trustworthy, grounded primary blue paired with warm neutrals and accessible text contrasts.

| Role | Colour Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | **Trust Heritage Blue** | `#1A4B84` | Primary brand anchors, hero CTAs, navbar badges, key highlight elements. Reflects stability, credibility, and structural integrity. |
| **Light Text** | **Warm Ivory White** | `#F8FAFC` | Primary text on dark backgrounds, topbars, buttons, and high-contrast callout boxes. |
| **Dark Text** | **Deep Slate Obsidian** | `#0F172A` | Primary body and heading text on light surfaces. Ensures maximum readability (WCAG AAA compliant). |
| **Neutral 1** | **Warm Sandstone Surface** | `#F8F9FA` | Page background, alternate section backdrops, subtle card fills. Provides a warm, comforting feel instead of cold stark white. |
| **Neutral 2** | **Muted Architectural Slate** | `#64748B` | Secondary subtitles, metadata, borders, dividers, placeholder text, and inactive tab states. |

---

## 3. Typography & Type Scale
The typography pairs **Berlin Sans FB** (distinctive, confident, architectural character for headings) with **Aptos** (clean, humanist, exceptionally readable for body copy and data).

- **Heading Font:** `Berlin Sans FB`, `'Trebuchet MS'`, `sans-serif`
- **Body & UI Font:** `Aptos`, `'Segoe UI'`, `system-ui`, `sans-serif`

### Type Scale Hierarchy

| Level | Desktop Size | Mobile Size | Line Height | Weight | Font Family | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **h1** | `3.5rem` (56px) | `2.25rem` (36px) | `1.15` | Bold / Heavy | Berlin Sans FB | Hero section main headline |
| **h2** | `2.5rem` (40px) | `1.75rem` (28px) | `1.20` | Bold | Berlin Sans FB | Major section titles |
| **h3** | `1.75rem` (28px) | `1.35rem` (22px) | `1.30` | Semi-Bold | Berlin Sans FB | Service cards, project titles, modal headers |
| **Body** | `1.0rem` (16px) | `0.95rem` (15px) | `1.65` | Regular (400) | Aptos | Paragraphs, descriptions, list items |
| **Small** | `0.8125rem` (13px) | `0.75rem` (12px) | `1.50` | Medium (500) | Aptos | Tags, timestamps, input labels, captions |

---

## 4. Spacing Scale
Consistent 4px / 8px modular spacing scale ensuring rhythmic vertical alignment and balanced breathing room:

- **`space-2xs` (4px):** Micro gaps, badge icon padding, pill padding.
- **`space-xs` (8px):** Input-to-label gaps, list item gaps, small button padding.
- **`space-sm` (12px):** Compact element spacing, meta pill padding.
- **`space-md` (16px):** Standard container gutter, form field internal padding.
- **`space-lg` (24px):** Card internal padding, grid gaps on mobile.
- **`space-xl` (32px):** Card-to-card gap on desktop, section header subtext margins.
- **`space-2xl` (48px):** Section vertical rhythm on mobile.
- **`space-3xl` (64px):** Section vertical padding on desktop.
- **`space-4xl` (96px):** Hero section and major transition padding.

---

## 5. Component Styles (Descriptive Specifications)

### A. Buttons
- **Primary Action Button:** Solid **Trust Heritage Blue (`#1A4B84`)** fill with **Warm Ivory (`#F8FAFC`)** bold text. Features slightly rounded corners (8px border radius), generous horizontal padding for tap-friendliness, and a subtle soft shadow. On hover, it deepens subtly in tone and lifts upward by 2px with an animated trailing arrow indicator.
- **Secondary / Outline Button:** Transparent background with a crisp 1.5px border in Primary Blue or Warm Muted Slate, with matching text color. On hover, fills with a gentle 8% tint of Primary Blue.
- **Floating Call / WhatsApp Action:** Circular high-contrast pill with an animated glowing pulse dot, instantly identifiable on mobile screens.

### B. Cards (Services, Projects, Testimonials)
- **Base Style:** Built on an elevated surface background (**Warm Sandstone `#F8F9FA`** or surface card fill) with an ultra-fine 1px subtle border in Neutral Slate (`#E2E8F0` / `#64748B` at 20% opacity).
- **Corner Radius:** Smooth 14px to 16px rounded corners for a modern, approachable luxury feel.
- **Elevation & Shadow:** Soft ambient drop shadow on resting state (`0 4px 16px rgba(15, 23, 42, 0.06)`).
- **Interactive State:** On hover, the card glides smoothly upward by 4px to 6px, and the border illuminates subtly in Primary Blue, reinforcing interactivity without visual clutter.

### C. Form Fields (Query & Cost Estimator)
- **Container & Structure:** High-contrast input containers with clean 8px rounded corners and a minimum tap-friendly height of 48px.
- **Resting State:** Subtle warm neutral background with a clear, readable 1px border. Labels are positioned firmly above inputs in semi-bold Aptos typography, with required markers in a distinct accent.
- **Active Focus State:** When selected, the border turns into a sharp **Trust Heritage Blue (`#1A4B84`)** accompanied by a soft 3px translucent glow ring, eliminating ambiguity for the user.
- **Dropdowns & Sliders:** Custom styled range tracks with prominent circular thumbs and cleanly formatted option menus.

---

## 6. Mobile-First Responsive Breakpoints

All layouts, typography, and grids are engineered starting from compact smartphones upwards:

| Breakpoint Token | Min Width | Target Devices & Screen Types | Layout Behavior |
| :--- | :--- | :--- | :--- |
| **Base (Mobile)** | `0px` | Smart phones (iPhone, Galaxy, Pixel) — 320px to 639px | Single-column fluid stack, full-width touch buttons (min 44px height), off-canvas sliding navigation drawer, sticky bottom call triggers. |
| **`sm` (Phablet / Small Tablet)** | `640px` | Large phones & small tablets in portrait | 2-column stats and form grid pairings, adjusted hero typography. |
| **`md` (Tablet)** | `768px` | iPads and tablets in portrait / landscape | 2-column service cards, 2-column portfolio grid, visible top contact notification bar. |
| **`lg` (Desktop / Laptop)** | `1024px` | Laptops and standard desktop monitors | Full horizontal desktop navigation bar, 3-column services grid, side-by-side cost estimator layout. |
| **`xl` (Large Screen)** | `1280px` | High-res monitors and wide displays | Max container cap of 1320px with balanced outer margins and 4-column rich footer. |

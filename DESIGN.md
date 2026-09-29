# DESIGN SYSTEM: Obsidian Kinetic (Award-Winning Personal Portfolio)

Derived directly from Stitch Project: `projects/771259891384765520` (*Award-Winning Personal Portfolio*).

## 1. Design Ethos & Visual Identity
- **Vibe:** Minimalist, futuristic, precision-engineered, dark-canvas luxury (Awwwards-level portfolio).
- **Core Philosophy:** High-contrast typographic hierarchy, tactile glassmorphism, subtle glowing violet-indigo gradients, micro-interactions, and fluid organic mask shapes for portraits.
- **Surface Elevation:** True dark surface layers ranging from deep substrate `#0E0E0F` up to elevated card layer `#2A2A2B` and translucent blur planes.

---

## 2. Color Palette & Material Design Tokens

### Backgrounds & Surfaces
- **Canvas Base (`surface` / `background`):** `#0A0A0B` / `#131314` (Deep obsidian black)
- **Layer 0 Lowest (`surface-container-lowest`):** `#0E0E0F` (Dark grounding layer)
- **Layer 1 Low (`surface-container-low`):** `#1C1B1C` (Muted panel background)
- **Layer 2 Container (`surface-container`):** `#201F20` (Card backdrop)
- **Layer 3 High (`surface-container-high`):** `#2A2A2B` (Hovered surfaces & interactive containers)
- **Layer 4 Highest (`surface-container-highest`):** `#353436` (Pills, badges, and elevated modal panels)
- **Surface Bright (`surface-bright`):** `#3A393A`

### Accents & Identity Colors
- **Primary Accent (`primary` / `customColor`):** `#7C5CFF` / `#CABEFF` (Electric Violet / Kinetic Lavender)
- **Primary Container (`primary-container`):** `#947DFF`
- **On-Primary (`on-primary`):** `#31009A`
- **Secondary (`secondary` / Live pulse):** `#4EDEA3` (Neon Emerald / Active Available indicator)
- **Secondary Container (`secondary-container`):** `#00A572`
- **Tertiary Accent (`tertiary`):** `#CEBDFF`
- **Borders & Outlines (`outline`):** `#938EA1` (Subtle 1px glass border, `rgba(147, 142, 161, 0.2)`)
- **Outline Variant (`outline-variant`):** `#484555`

### Text Colors
- **Headline & High Contrast (`on-surface` / `on-background`):** `#E5E2E3` (Soft warm white)
- **Body & Muted (`on-surface-variant`):** `#C9C4D8` (Refined silver lavender)
- **Subtle / Timestamps (`outline`):** `#938EA1`

---

## 3. Typography Architecture

### Typefaces
- **Headlines & Display:** `Space Grotesk` (`sans-serif`, geometric with technical character)
- **Body & Prose:** `Inter` (`sans-serif`, neutral, humanistic, optimized for micro-readability)
- **Mono / Metrics / Badges:** `Space Grotesk` (uppercase tracking +0.12em)

### Scale & Hierarchy
- **Display Hero:** 96px (Desktop) / 48px (Mobile), line-height 1.0, tracking -0.04em, font-weight 700.
- **Headline XL:** 64px (Desktop) / 36px (Mobile), line-height 1.06, tracking -0.03em, font-weight 700.
- **Headline LG:** 40px (Desktop) / 28px (Mobile), line-height 1.2, tracking -0.02em, font-weight 600.
- **Headline MD:** 24px, line-height 1.33, tracking -0.015em, font-weight 600.
- **Headline SM:** 18px, line-height 1.33, tracking -0.01em, font-weight 600.
- **Body LG:** 18px, line-height 1.55, tracking -0.01em, font-weight 400.
- **Body MD:** 15px, line-height 1.6, tracking -0.005em, font-weight 400.
- **Body SM:** 13px, line-height 1.53, tracking 0em, font-weight 400.
- **Label Mono / Caps:** 11px - 13px, tracking 0.12em, uppercase, font-weight 600.

---

## 4. Spacing, Grid & Layout
- **Container Max Width:** `1440px` centered with responsive horizontal margins:
  - Mobile: `1.5rem` (`px-6`)
  - Tablet: `3rem` (`px-12`)
  - Desktop: `5rem` (`px-20`)
- **Vertical Section Spacing:** `py-space-3xl` (`6rem` / `96px` to `128px`)
- **Grid Systems:**
  - Bento Grid (Selected Work): Asymmetric 12-column grid with alternating 7/5 and 5/7 spans.
  - Skills & Experience: Multi-column responsive auto-flow with 1.5rem gutters.

---

## 5. UI Components & Micro-Interactions

### Sticky Glass Navigation
- Floating header with `backdrop-blur-2xl`, background `rgba(14, 14, 15, 0.75)`, border `1px solid rgba(255, 255, 255, 0.08)`.
- Initials Logo monogram with dynamic hover glow.
- Active navigation item indicator with soft pill highlight.
- Pill CTA ("Hire Me") with electric violet gradient and magnetic pull.
- Dark/Light mode toggle with smooth rotation and crossfade.

### Organic Blob Hero Portrait
- Organic morphing blob frame with inner gradient border and ambient drop glow (`rgba(124, 92, 255, 0.28)`).
- Status chip: "Available for work" with a pulsing emerald dot (`#4EDEA3`).

### Bento Project Cards
- Elevated dark glass containers (`#1C1B1C` / `#201F20`) with 1px border `rgba(255, 255, 255, 0.08)`.
- Interactive 3D mouse tilt with smooth reset.
- Image reveal with clip-path wipe and subtle zoom on hover.
- Tag pills with uppercase monospace typography.
- Metric callout highlighting tangible business impact.

### Skills & Tools Grid
- Grouped domain cards with luminous gradient borders on hover.
- Subtle icon telemetry with crisp typography.

### Experience Timeline
- Vertical glowing track with scroll-triggered line fill.
- Left-aligned milestone nodes with pulsing active heads and structured achievements.

### Interactive Contact & Footer
- Magnetic contact button and email copy utility with instantaneous toast alert.
- Live Helsinki local time (`Europe/Helsinki`, GMT+3).
- Smooth back-to-top button with magnetic spring.

---

## 6. Motion & Smoothness Specifications
- **Lenis Smooth Scroll:** Inertia dampening factor 0.1, duration 1.2s.
- **Intro Loader:** Initials draw-in SVG stroke animation, counter 0 → 100 in 1.4s, curtain wipe-up revealing hero in 0.4s (Total < 1.8s).
- **Custom Cursor:** 8px central dot + 36px smooth lagging ring, expanding to 64px with "View" typography over project cards. Hidden on mobile/touch screens.
- **Transitions:** `transform` and `opacity` only to guarantee 60fps GPU-accelerated rendering.
- **Accessibility:** `prefers-reduced-motion` strictly honored by disabling smooth scroll inertia, cursor overrides, and heavy multi-axis parallax.

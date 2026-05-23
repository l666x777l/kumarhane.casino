---
name: Nocturne Elite
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#ddb7ff'
  on-secondary: '#490080'
  secondary-container: '#6f00be'
  on-secondary-container: '#d6a9ff'
  tertiary: '#58e7aa'
  on-tertiary: '#003824'
  tertiary-container: '#33ca90'
  on-tertiary-container: '#005035'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  stat-lg:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for a high-stakes, premium digital casino environment. It targets a sophisticated Turkish audience that values exclusivity, rapid performance, and the psychological security of a "VIP Lounge" atmosphere. 

The aesthetic leverages **Glassmorphism** and **Modern Dark** movements. It utilizes deep obsidian surfaces as a canvas for high-fidelity light play, including neon accents and metallic gold highlights. The UI must feel like a physical luxury object—weighted, polished, and responsive. Every interaction should evoke the tactile click of a heavy clay chip or the smooth slide of a card on felt.

**Key Principles:**
- **Exclusivity:** Heavy use of negative space and high-contrast accents to highlight premium content.
- **Velocity:** Streamlined transitions and clear visual hierarchies that facilitate rapid betting and navigation.
- **Trust:** Precision-aligned grids and crisp typography to ensure clarity in financial data.

## Colors

The palette is centered on **Deep Obsidian (#0A0A0A)** to provide an infinite depth, allowing accent colors to pop with "neon" intensity. 

- **Rich Gold (#D4AF37):** Used exclusively for high-value actions, VIP status indicators, and primary branding. It should be treated as a precious metal—sparing and impactful.
- **Neon Purple (#A855F7):** Represents the energy of the casino floor. Use for interactive elements, hover states, and "Live" indicators.
- **Emerald Green (#10B981):** Reserved strictly for win states, positive balances, and successful transaction confirmations.
- **Obsidian Tiers:** Use a scale of dark grays (e.g., #121212, #1E1E1E) to create structural depth without breaking the dark mode immersion.

## Typography

The typography strategy pairs the geometric authority of **Montserrat** for headings with the systematic clarity of **Inter** for functional data.

- **Headings:** Montserrat should be used in Bold or Extra-Bold weights. For "Win" announcements or "Jackpot" displays, use `display-lg` with tight letter-spacing to create a sense of scale.
- **Body & Data:** Inter handles all transactional information. In a casino context, numbers are the most important data point; ensure tabular figures are used so that currency amounts align vertically in lists.
- **Labels:** Use uppercase `label-md` with slight tracking for secondary navigation and form headers to maintain a disciplined, architectural feel.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy is built on "Containerized Focus"—grouping related games or betting controls into distinct glass modules.

- **Grid:** Use a 24px gutter on desktop to allow the dark background to "breathe" between high-energy game thumbnails.
- **Density:** Betting interfaces should prioritize "reachability" on mobile, using a bottom-heavy layout for key action buttons (Place Bet, Spin, Deal).
- **Rhythm:** All spacing must be multiples of 8px. Use `lg` (48px) spacing between major sections (e.g., Slots vs. Live Casino) to maintain the premium, uncrowded feel.

## Elevation & Depth

Visual hierarchy is achieved through **Glassmorphism** and **Backdrop Blurs**. We do not use traditional drop shadows; instead, we use light and transparency to define layers.

1.  **Base Layer:** The Deep Obsidian background (#0A0A0A).
2.  **Surface Layer:** Semi-transparent panels (e.g., `rgba(255, 255, 255, 0.03)`) with a 20px - 40px backdrop blur. 
3.  **Edge Treatment:** All floating panels must have a 1px inner stroke. On neutral panels, use a low-opacity white. On active or "featured" panels, use a subtle gradient stroke transitioning from **Rich Gold** to transparent.
4.  **Glows:** For Jackpots or active bets, apply an external `box-shadow` using the accent color (Gold or Purple) with a high blur (30px+) and low opacity (20%) to simulate a neon halo effect.

## Shapes

The shape language is **Rounded**, balancing modern approachability with the precision of high-end tech.

- **Standard Elements:** Buttons, Input fields, and Game Cards use a 0.5rem (8px) radius.
- **Large Modules:** Modals and main content containers use 1.5rem (24px) to soften the large screen areas.
- **Interactive States:** On hover, buttons may slightly expand (1.02x scale) to emphasize the tactile nature of the UI.

## Components

### Buttons
- **Primary:** Solid Rich Gold background with black Montserrat Bold text. No shadow, but a subtle "inner glow" on top edge.
- **Secondary:** Transparent background with a 1px Neon Purple stroke. Text is Purple.
- **Ghost:** Minimalist white text for utility actions (Settings, Logout).

### Input Fields
- Dark, recessed appearance. 1px border that glows Neon Purple on focus. Background is slightly darker than the surface layer to create an "inset" feel.

### Cards (Game Tiles)
- Aspect ratio of 2:3 or 1:1. 
- No visible border until hover; on hover, apply a 1px Gold stroke and show a "Play Now" button overlay with a purple blur background.

### Chips & Badges
- Used for "New", "Hot", or "VIP" labels. These should be pill-shaped with high-contrast gradients. For example, a "Live" badge should have a pulsing Emerald Green dot.

### Betting Slips
- Persistent glass panel on the right (Desktop) or bottom-sheet (Mobile). Uses high-contrast Montserrat `stat-lg` typography for the "Total Return" to ensure the player is always aware of the stakes.
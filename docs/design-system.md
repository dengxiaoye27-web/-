# Haisen Design System

Industrial-technology B2B aesthetic — closer to Vertiv/Schneider/Rittal than
a typical trade-fair supplier site. Restrained motion, large type, real
technical imagery (diagrams/tables), no gradients or icon clutter.

## Color

Defined as CSS variables in `src/app/globals.css`, mapped into Tailwind via
`@theme`.

| Token | Value | Use |
|---|---|---|
| `--color-navy-950` | `#05070d` | primary background (dark sections, header) |
| `--color-navy-900` | `#0a0e1a` | surface |
| `--color-navy-800` | `#121728` | card surface on dark |
| `--color-navy-700` | `#1c2338` | borders on dark |
| `--color-ink-900`  | `#0b0d12` | body text on light |
| `--color-ink-600`  | `#4b5262` | secondary text |
| `--color-paper-0`  | `#ffffff` | light background |
| `--color-paper-50` | `#f5f7fa` | light section background |
| `--color-line-200` | `#e3e7ee` | borders on light |
| `--color-accent-500` | `#0091ff` | technology blue — primary accent, links, active states |
| `--color-accent-400` | `#39b8ff` | hover / highlight |
| `--color-cyan-400` | `#22d3ee` | secondary accent, diagram highlight only — used sparingly |

Rule: accent colors are for interactive elements and diagram highlights
only — never for large fills. Dark navy + white dominate.

## Typography

- Display/heading font: `Geist` (already bundled by Next.js scaffold) — used
  tight-tracked, large sizes for H1/H2.
- Body font: `Geist` regular.
- Monospace (spec tables, part numbers): `Geist Mono`.

Scale (Tailwind classes used directly, no custom plugin needed):
- H1: `text-5xl md:text-7xl font-semibold tracking-tight`
- H2: `text-3xl md:text-5xl font-semibold tracking-tight`
- H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base md:text-lg text-ink-600 leading-relaxed`
- Eyebrow/label: `text-xs font-medium uppercase tracking-[0.2em] text-accent-500`

## Spacing / Layout

- Max content width: `max-w-7xl` centered, `px-6 md:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Grid gutters: `gap-6 md:gap-8`.

## Components (inventory)

- **Button** — solid (accent-500 on dark / navy-950 on light), outline, ghost. Always with visible focus ring.
- **Card** — 1px `line-200`/`navy-700` border, no shadow-heavy skeuomorphism, subtle hover lift (`translate-y`) — restrained.
- **SpecTable** — dense data table, monospace values, zebra rows, sticky header on scroll for long tables.
- **StatTile** — big number + label, used in hero/about stat rows.
- **Accordion** — used for FAQ blocks.
- **ArchitectureDiagram** — SVG-based system diagram (flow boxes + connectors), reused for the homepage "One-Stop Data Center Solution" and each Solution page's "Solution Architecture".
- **MegaMenu** — full-width dropdown for Products/Solutions with category columns.

## Motion

Only: `opacity`/`translate-y` fade-in-on-scroll (via `IntersectionObserver`
hook, `useScrollReveal`), and diagram connector draw-in. No parallax, no
autoplaying carousels, no decorative Lottie/animated gradients.

## Accessibility

- Minimum body text `16px`.
- Color contrast AA minimum against both navy and paper backgrounds.
- All interactive elements keyboard-reachable; MegaMenu and MobileNav trap focus correctly.

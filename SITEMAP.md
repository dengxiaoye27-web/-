# Haisen — Information Architecture

## A. Sitemap

```
/                                          Home

/products                                 Products hub (category grid + filter)
  /products/power-distribution            Category: Power Distribution
  /products/pdu
  /products/intelligent-pdu
  /products/metered-pdu
  /products/monitored-pdu
  /products/switched-pdu
  /products/high-power-pdu
  /products/three-phase-pdu
  /products/ats-pdu
  /products/sts
  /products/automatic-transfer-switch

  /products/ups-systems                   Category: UPS Systems
  /products/rack-mount-ups
  /products/tower-ups
  /products/online-ups
  /products/modular-ups
  /products/industrial-ups
  /products/high-power-ups

  /products/network-server-cabinets       Category: Network & Server Cabinets
  /products/network-cabinet
  /products/server-rack
  /products/19-inch-rack
  /products/data-center-cabinet
  /products/cold-aisle-cabinet
  /products/intelligent-cabinet
  /products/outdoor-cabinet

  /products/micro-modular-data-center     Category
  /products/single-row-micro-data-center
  /products/dual-row-micro-data-center
  /products/all-in-one-micro-data-center
  /products/smart-micro-module

  /products/containerized-data-center     Category
  /products/20ft-container-data-center
  /products/40ft-container-data-center
  /products/modular-container-data-center
  /products/edge-data-center

  /products/cooling-solutions             Category
  /products/precision-air-conditioner
  /products/row-based-cooling
  /products/in-row-cooling
  /products/room-cooling
  /products/liquid-cooling
  /products/cdu

  /products/raised-floor                  Category
  /products/anti-static-raised-floor
  /products/calcium-sulphate-raised-floor
  /products/steel-cementitious-raised-floor
  /products/airflow-floor

  /products/cable-management              Category
  /products/cable-tray
  /products/wire-mesh-cable-tray
  /products/ladder-cable-tray

  /products/energy-storage                Category
  /products/solar-power-system
  /products/energy-storage-system
  /products/battery-energy-storage-system
  /products/energy-storage-cabinet
  /products/containerized-energy-storage-system

/solutions                                Solutions hub
  /solutions/data-center-infrastructure
  /solutions/micro-modular-data-center
  /solutions/containerized-data-center
  /solutions/edge-data-center
  /solutions/telecom-data-center
  /solutions/ai-data-center
  /solutions/liquid-cooling
  /solutions/critical-power
  /solutions/smart-power-distribution
  /solutions/energy-storage

/projects                                 Project / case study hub (filterable by industry)
  /projects/[slug]

/resources                                Knowledge center hub
  /resources/blog
  /resources/blog/[slug]
  /resources/knowledge-center
  /resources/datasheets
  /resources/catalogs
  /resources/white-papers
  /resources/faq
  /resources/technical-guides

/about
  /about#factory
  /about#quality-control
  /about#certifications
  /about#global-markets
  /about#history

/contact                                  General contact + RFQ intake (product vs. project)

/legal/privacy-policy
/legal/terms-of-use

/robots.txt
/sitemap.xml
```

Locale prefixing is reserved from day one so EN ships first without a rewrite:
`/en/...` is the default (unprefixed at launch, `en` is the implicit locale),
future locales mount at `/ar`, `/fr`, `/es`, `/ru`, `/zh` using Next.js
`i18n` routing conventions once translated content exists. Route structure
below is written locale-agnostic for that reason.

## B. Homepage structure (`/`)

1. Hero — H1 "Powering the Infrastructure Behind the Digital World", sub-head, dual CTA (Explore Solutions / Request a Quote), full-bleed data center visual.
2. Trusted Data Center Infrastructure Partner — short company intro, 3–4 stat tiles (factory area, years, export markets, production capacity).
3. Our Core Solutions — 7 large cards (Critical Power, Power Distribution, Cabinets, Micro Modular DC, Containerized DC, Cooling & Liquid Cooling, Energy Storage), each linking to its solution page.
4. Featured Products — curated grid pulling from `src/data/products.ts` (`featured: true`).
5. One-Stop Data Center Solution — system architecture diagram (Grid → UPS → PDU → Rack → Cooling → Monitoring → Fire Protection → Liquid Cooling → Energy Storage) as an SVG diagram component.
6. Industries We Serve — icon/label grid (8 industries), links to filtered project list.
7. Why Haisen — 6 capability tiles (Manufacturing, Engineering, Customization, OEM/ODM, Global Delivery, QC).
8. Global Projects — world-map visual + market list, links to `/projects`.
9. Certifications — CE / RoHS / ISO / IEC marks (factual only, sourced from `src/data/certifications.ts`).
10. Latest Insights — 3 most recent `/resources/blog` articles.
11. Final CTA — "Planning a Data Center Project? Talk to Our Engineering Team" banner → `/contact`.

## C. Design System

See `docs/design-system.md` for tokens, typography scale, and component inventory.

## D. Component Architecture

```
src/components/
  layout/        SiteHeader, MegaMenu, MobileNav, SiteFooter, WhatsAppButton, BackToTop
  ui/            Button, Card, Badge, Tabs, Accordion, DataTable, StatTile, SectionHeading, Breadcrumbs
  sections/      Hero, LogoStrip, ArchitectureDiagram, IndustryGrid, CertificationStrip, CTABanner, WorldMapProjects
  product/       ProductHero, SpecTable, FeatureGrid, ApplicationsGrid, ProductFAQ, RelatedProducts, DownloadCTA
  solution/      SolutionHero, ChallengeSolution, SystemArchitecture, DeploymentProcess
  forms/         RFQForm (product/project mode switch), NewsletterForm
  seo/           JsonLd (Organization/Product/FAQ/Article/Breadcrumb builders)
```

Every product, solution, project, and article page is a **template + data**
pair (`app/products/[slug]/page.tsx` reading `src/data/products.ts`), not a
one-off page, so the catalog can grow to hundreds of entries without new page
code — see task list / CLAUDE.md.

## E. SEO / GEO Architecture

- Static generation (`generateStaticParams`) for every product/solution/project/article route; each ships its own `generateMetadata` (title, description, canonical, OG, Twitter).
- Structured data via `src/lib/schema.ts` builders, injected as JSON-LD `<script>` tags:
  - `Organization` (site-wide, in root layout)
  - `Product` (product pages: name, category, specs as `additionalProperty`)
  - `FAQPage` (any page with an FAQ block)
  - `Article` (blog/knowledge content)
  - `BreadcrumbList` (all deep pages)
- `src/app/sitemap.ts` and `src/app/robots.ts` use the Next.js Metadata Route APIs, generated from the same data files that drive the pages (single source of truth, no drift).
- Every product/solution/FAQ page answers its entity question in plain
  prose near the top of the page (e.g. "Haisen manufactures intelligent
  PDUs for data centers and telecom rooms...") so LLM-based answer engines
  can extract a clean, factual statement — no keyword stuffing.
- Heading hierarchy is enforced by the templates: one `H1` per page, `H2` per major section, `H3` for sub-items — never skipped.

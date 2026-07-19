# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Haisen Data Center Infrastructure website — a Next.js (App Router) + TypeScript + Tailwind CSS B2B marketing site for Guangdong Haisen New Building Materials Technology Co., Ltd. (data center infrastructure & critical power solutions manufacturer).

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Architecture

- `src/app/[locale]` — Next.js App Router routes (file-based routing), nested under a locale segment
- `src/components` — shared UI (layout: header/mega menu/footer; sections; product/solution building blocks)
- `src/data` — structured content (products, solutions, projects, articles) consumed by page templates
- `src/lib` — helpers (SEO/JSON-LD builders, formatting)
- `src/i18n` — locale config (`config.ts`) and the `LocaleContext`/`useLocale` used by `LocaleLink`
- `src/proxy.ts` — locale routing: rewrites unprefixed requests to the default locale (English) so it serves unprefixed while `ar`/`fr`/`es`/`ru`/`zh` require a prefix

Page types are template-driven: `products/[slug]`, `solutions/[slug]`, `projects/[slug]`, `resources/blog/[slug]` render from data files through shared templates, so new products/solutions/projects/articles are added as data entries, not new page code. Always use `Link`/`Button`/`Card` from `src/components/ui` (not `next/link` directly) so internal links stay locale-aware.

See `SITEMAP.md` for the full information architecture and `docs/design-system.md` for design tokens and component conventions.

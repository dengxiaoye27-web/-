import type { NextConfig } from "next";

const CANONICAL_ORIGIN = "https://www.wandtung.com";
const LOCALE_PREFIXES = ["", "/ar", "/fr", "/es", "/ru", "/zh"];

// Blog slugs that were removed as duplicates in #75 and are still being
// crawled (Search Console reports them as 404). Each one points at the
// article that replaced it, in every locale.
const RENAMED_ARTICLES: Record<string, string> = {
  "what-is-a-smart-pdu": "what-is-intelligent-pdu",
  "what-is-a-micro-modular-data-center": "what-is-micro-modular-data-center",
};

// Pages from the previous static .html site that Google still crawls.
// Each one points at the closest page on the current site.
const LEGACY_HTML_PAGES: Record<string, string> = {
  "/index.html": "/",
  "/about.html": "/about",
  "/contact.html": "/contact",
  "/cable-tray.html": "/products/cable-tray",
  "/cdu.html": "/products/cdu",
  "/cold-plate.html": "/products/liquid-cooling",
  "/dry-cooler.html": "/products/dry-cooler",
  "/energy-storage.html": "/products/energy-storage",
  "/precision-air-conditioning.html": "/products/precision-air-conditioner",
  "/rack-cabinet.html": "/products/network-server-cabinets",
  "/raised-floor.html": "/products/raised-floor",
  "/solar-pv.html": "/products/solar-pv-module",
  "/ups.html": "/products/ups-systems",
};

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  // Destinations are absolute so a request on the bare apex domain lands on
  // the canonical www page in one hop instead of two.
  async redirects() {
    const articleRedirects = LOCALE_PREFIXES.flatMap((prefix) =>
      Object.entries(RENAMED_ARTICLES).map(([from, to]) => ({
        source: `${prefix}/resources/blog/${from}`,
        destination: `${CANONICAL_ORIGIN}${prefix}/resources/blog/${to}`,
        permanent: true,
      })),
    );
    const legacyRedirects = Object.entries(LEGACY_HTML_PAGES).map(([source, to]) => ({
      source,
      destination: `${CANONICAL_ORIGIN}${to}`,
      permanent: true,
    }));
    return [...articleRedirects, ...legacyRedirects];
  },
};

export default nextConfig;

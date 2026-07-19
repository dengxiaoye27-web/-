import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { products } from "@/data/products";
import { productCategories } from "@/data/categories";
import { solutions } from "@/data/solutions";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

// Only the default locale (English) is submitted here — the other
// locales in src/i18n/config.ts currently serve the same English
// content at a localized URL and are intentionally left out of the
// sitemap until real translations exist, to avoid signaling duplicate
// content. Each page's <html lang> and hreflang alternates (see
// src/app/[locale]/layout.tsx) already make those URLs discoverable and
// crawlable on their own.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/solutions",
    "/projects",
    "/resources",
    "/about",
    "/contact",
    "/legal/privacy-policy",
    "/legal/terms-of-use",
  ];

  const dynamicRoutes = [
    ...productCategories.map((c) => `/products/${c.slug}`),
    ...products.map((p) => `/products/${p.slug}`),
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...projects.map((p) => `/projects/${p.slug}`),
    ...articles.map((a) => `/resources/blog/${a.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}

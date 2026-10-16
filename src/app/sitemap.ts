import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { products } from "@/data/products";
import { productCategories } from "@/data/categories";
import { solutions } from "@/data/solutions";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";
import { locales } from "@/i18n/config";
import { hreflangCode, localizedPath } from "@/lib/alternates";

// Legal pages aren't translated — every non-English URL for them
// canonicalizes back to the English page (see those page components), so
// only the English URL is submitted here. Submitting the other 5 as
// separate sitemap entries would contradict that canonical and add
// duplicate-content noise with no unique content behind it.
const untranslatedRoutes = new Set(["/legal/privacy-policy", "/legal/terms-of-use"]);

function languageAlternates(route: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[hreflangCode(l)] = `${siteConfig.url}${localizedPath(l, route)}`;
  }
  languages["x-default"] = `${siteConfig.url}${route || "/"}`;
  return languages;
}

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

  const entries: MetadataRoute.Sitemap = [];

  for (const route of [...staticRoutes, ...dynamicRoutes]) {
    if (untranslatedRoutes.has(route)) {
      entries.push({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
      });
      continue;
    }

    for (const locale of locales) {
      entries.push({
        url: `${siteConfig.url}${localizedPath(locale, route)}`,
        lastModified: new Date(),
        alternates: { languages: languageAlternates(route) },
      });
    }
  }

  return entries;
}

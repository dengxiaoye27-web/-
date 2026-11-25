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

// lastmod must reflect when a page's content actually changed — Google
// ignores the field for the whole sitemap once it sees every URL claim
// "modified right now" on every fetch, which is what `new Date()` did.
// Articles carry a real publish date; the blog hubs change when a new
// article lands. Other pages have no reliable modification date in the
// data files, so they omit lastmod rather than report a false one.
const articleDates = new Map(articles.map((a) => [`/resources/blog/${a.slug}`, a.publishedAt]));
const newestArticleDate = articles.map((a) => a.publishedAt).sort().at(-1);
const hubRoutes = new Set(["", "/resources"]);

// Only the target markets' locales are submitted as sitemap entries, so
// Google's crawl and indexing attention for a young domain goes to
// English, French, Spanish, Chinese and Arabic first. Russian pages stay
// live and are still listed as hreflang alternates (and linked from the
// language switcher), so they remain discoverable — they just aren't pushed.
// Add a locale back here to put it in the sitemap again.
const sitemapLocales = locales.filter((l) => l !== "ru");

function lastModifiedFor(route: string): string | undefined {
  return articleDates.get(route) ?? (hubRoutes.has(route) ? newestArticleDate : undefined);
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
      });
      continue;
    }

    const lastModified = lastModifiedFor(route);
    for (const locale of sitemapLocales) {
      entries.push({
        url: `${siteConfig.url}${localizedPath(locale, route)}`,
        ...(lastModified ? { lastModified } : {}),
        alternates: { languages: languageAlternates(route) },
      });
    }
  }

  return entries;
}

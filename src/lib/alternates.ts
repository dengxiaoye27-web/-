import { locales, defaultLocale, Locale } from "@/i18n/config";

// hreflang value to use for each locale's alternate link. Defaults to the
// locale code itself; only overridden where the bare ISO 639-1 code is
// ambiguous (zh covers both Simplified and Traditional — our content is
// Simplified, so we're explicit about it rather than relying on the plain
// "zh" tag).
const hreflangOverrides: Partial<Record<Locale, string>> = {
  zh: "zh-Hans",
};

function localizedPath(locale: Locale, path: string) {
  return locale === defaultLocale ? path || "/" : `/${locale}${path}`;
}

// Builds a Next.js `alternates` object (canonical + hreflang languages,
// including a self-referencing entry and x-default) for one page, given
// the current locale and the locale-agnostic path (e.g. "/products/pdu",
// or "" for the homepage).
//
// Every page's own `generateMetadata`/`metadata` must use this instead of
// hand-writing `alternates: { canonical }` — Next.js replaces (rather than
// deep-merges) a child route's `alternates` object with its parent's, so a
// bare `{ canonical }` silently drops any `languages` the layout set.
export function buildAlternates(locale: Locale, path: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[hreflangOverrides[l] ?? l] = localizedPath(l, path);
  }
  languages["x-default"] = path || "/";

  return {
    canonical: localizedPath(locale, path),
    languages,
  };
}

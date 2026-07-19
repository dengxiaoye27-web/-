export const locales = ["en", "ar", "fr", "es", "ru", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const rtlLocales: Locale[] = ["ar"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  fr: "Français",
  es: "Español",
  ru: "Русский",
  zh: "中文",
};

// Locales with published translated content. Locales in `locales` but not
// here render the English source content at their localized URL until
// translation is complete — the route/URL structure is ready ahead of
// the content.
export const translatedLocales: Locale[] = ["en"];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

"use client";

import { usePathname } from "next/navigation";
import { locales, localeNames, defaultLocale, isLocale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleContext";

function stripLocalePrefix(pathname: string) {
  const segments = pathname.split("/");
  if (segments.length > 1 && isLocale(segments[1])) {
    return "/" + segments.slice(2).join("/");
  }
  return pathname;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const locale = useLocale();
  const bare = stripLocalePrefix(pathname) || "/";

  return (
    <div className={`relative group ${className}`}>
      <button
        type="button"
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
        aria-haspopup="true"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
        </svg>
        <span>{locale.toUpperCase()}</span>
        <span aria-hidden className="text-xs text-ink-400">▾</span>
      </button>
      <div className="absolute right-0 top-full pt-2 hidden group-hover:block">
        <div className="w-40 rounded-xl border border-navy-700 bg-navy-900 p-2 shadow-2xl">
          {locales.map((locale) => {
            const href = locale === defaultLocale ? bare : `/${locale}${bare}`;
            return (
              <a
                key={locale}
                href={href}
                className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-navy-800 hover:text-white"
              >
                {localeNames[locale]}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

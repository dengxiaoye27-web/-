"use client";

import { usePathname } from "next/navigation";
import { locales, localeNames, defaultLocale, isLocale } from "@/i18n/config";

function stripLocalePrefix(pathname: string) {
  const segments = pathname.split("/");
  if (segments.length > 1 && isLocale(segments[1])) {
    return "/" + segments.slice(2).join("/");
  }
  return pathname;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const bare = stripLocalePrefix(pathname) || "/";

  return (
    <div className={`relative group ${className}`}>
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
        aria-haspopup="true"
      >
        🌐
        <span aria-hidden className="text-xs text-white/40">▾</span>
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

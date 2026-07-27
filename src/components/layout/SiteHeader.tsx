"use client";

import Link from "@/components/ui/LocaleLink";
import Image from "next/image";
import { useState } from "react";
import { getMainNav } from "@/lib/nav";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLocale } from "@/i18n/LocaleContext";
import { getCommonMessages } from "@/i18n/messages";

export function SiteHeader() {
  const locale = useLocale();
  const t = getCommonMessages(locale);
  const mainNav = getMainNav(t);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-700 bg-navy-950/95 backdrop-blur">
      <div className="container-page flex h-[72px] md:h-[88px] items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo_C_navbar.svg" alt="Wandtung" width={160} height={36} className="h-8 md:h-9 w-auto" priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-2" aria-label="Main">
          {mainNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => item.children && setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-5 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.label}
                {item.children ? (
                  <span aria-hidden className="text-xs text-white/40">
                    ▾
                  </span>
                ) : null}
              </Link>

              {item.children && openMenu === item.label ? (
                <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-2">
                  <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6 shadow-2xl">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-navy-800 hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-navy-700 pt-4">
                      <Link
                        href={item.href}
                        className="text-sm font-medium text-accent-400 hover:text-accent-500"
                      >
                        {t.nav.viewAll} {item.label} →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden md:block" />
          <Button href="/contact" className="hidden md:inline-flex">
            {t.nav.requestQuote}
          </Button>
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} mainNav={mainNav} requestQuoteLabel={t.nav.requestQuote} />
    </header>
  );
}

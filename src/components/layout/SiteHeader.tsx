"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav } from "@/lib/nav";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-700 bg-navy-950/95 backdrop-blur">
      <div className="container-page flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="text-xl font-semibold tracking-tight">HAISEN</span>
          <span className="hidden md:inline text-xs text-white/50 border-l border-white/20 pl-2 ml-1">
            Data Center Infrastructure
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {mainNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => item.children && setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
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
                        View all {item.label} →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" className="hidden md:inline-flex">
            Request a Quote
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

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

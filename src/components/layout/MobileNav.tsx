"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav } from "@/lib/nav";
import { Button } from "@/components/ui/Button";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-navy-950 p-6">
        <div className="flex items-center justify-between mb-8">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="text-white p-2"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {mainNav.map((item) => (
            <div key={item.href} className="border-b border-navy-800">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex-1 py-3 text-white font-medium"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(expanded === item.label ? null : item.label)
                    }
                    className="p-3 text-white/60"
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    {expanded === item.label ? "−" : "+"}
                  </button>
                ) : null}
              </div>
              {item.children && expanded === item.label ? (
                <div className="pb-3 pl-3 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="py-2 text-sm text-white/60 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <Button href="/contact" className="mt-6 w-full">
          Request a Quote
        </Button>
      </div>
    </div>
  );
}

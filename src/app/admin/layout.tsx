import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Wandtung Admin",
  robots: { index: false, follow: false },
};

// Separate root layout from src/app/[locale]/layout.tsx — this tooling is
// internal-only and intentionally outside the public, locale-prefixed site
// (no header/footer/analytics, not part of the sitemap or hreflang set).
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full bg-paper-50 text-ink-900 antialiased">{children}</body>
    </html>
  );
}

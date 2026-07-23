"use client";

import Link from "@/components/ui/LocaleLink";
import { siteConfig } from "@/lib/site";
import { productCategories } from "@/data/categories";
import { solutions } from "@/data/solutions";
import { useLocale } from "@/i18n/LocaleContext";
import { getCommonMessages } from "@/i18n/messages";

export function SiteFooter() {
  const locale = useLocale();
  const t = getCommonMessages(locale);

  return (
    <footer className="bg-navy-950 border-t-2 border-accent-500/60 text-white/70">
      <div className="container-page py-16 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-xl font-semibold text-white tracking-tight">{siteConfig.name.toUpperCase()}</p>
          <p className="mt-3 text-sm max-w-xs leading-relaxed">
            {siteConfig.legalName} — {t.footer.tagline}.
          </p>
          <p className="mt-4 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
              {siteConfig.email}
            </a>
          </p>
          <p className="text-sm">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
              {siteConfig.phone}
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-3">
            {t.footer.productsHeading}
          </p>
          <ul className="space-y-2 text-sm">
            {productCategories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/products/${c.slug}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-3">
            {t.footer.solutionsHeading}
          </p>
          <ul className="space-y-2 text-sm">
            {solutions.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-3">
            {t.footer.companyHeading}
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">{t.nav.about}</Link></li>
            <li><Link href="/projects" className="hover:text-white">{t.nav.projects}</Link></li>
            <li><Link href="/resources" className="hover:text-white">{t.nav.resources}</Link></li>
            <li><Link href="/contact" className="hover:text-white">{t.nav.contact}</Link></li>
            <li><Link href="/legal/privacy-policy" className="hover:text-white">{t.footer.privacyPolicy}</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. {t.footer.rightsReserved}
          </p>
          <p>{t.footer.manufactured}</p>
        </div>
      </div>
    </footer>
  );
}

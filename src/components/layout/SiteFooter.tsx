import Link from "@/components/ui/LocaleLink";
import { siteConfig } from "@/lib/site";
import { productCategories } from "@/data/categories";
import { solutions } from "@/data/solutions";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-white/70">
      <div className="container-page py-16 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-xl font-semibold text-white tracking-tight">HAISEN</p>
          <p className="mt-3 text-sm max-w-xs leading-relaxed">
            {siteConfig.legalName} — {siteConfig.tagline}.
          </p>
          <p className="mt-4 text-sm">{siteConfig.email}</p>
          <p className="text-sm">{siteConfig.phone}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-3">
            Products
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
            Solutions
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
            Company
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/legal/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Manufactured in Guangdong, China · Exported Worldwide</p>
        </div>
      </div>
    </footer>
  );
}

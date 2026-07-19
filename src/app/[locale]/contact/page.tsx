import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RFQForm } from "@/components/forms/RFQForm";
import { siteConfig } from "@/lib/site";
import { getContactMessages, getCommonMessages } from "@/i18n/messages";
import { isLocale, defaultLocale, Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Contact Haisen's engineering team for data center infrastructure product inquiries and project quotes — power distribution, UPS, cabinets, modular and containerized data centers, cooling and energy storage.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const t = getContactMessages(locale);
  const common = getCommonMessages(locale);

  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs items={[{ label: common.nav.home, href: "/" }, { label: common.nav.contact }]} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{t.hero.subtitle}</p>
        </div>
      </div>

      <div className="container-page py-16 md:py-20 grid gap-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow={t.form.eyebrow} title={t.form.title} />
          <div className="mt-8">
            <RFQForm messages={t.form} />
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-2xl border border-line-200 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-600">{t.sidebar.email}</h3>
            <p className="mt-2 text-ink-900">{siteConfig.email}</p>
          </div>
          <div className="rounded-2xl border border-line-200 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-600">{t.sidebar.whatsapp}</h3>
            <a href={siteConfig.whatsapp} className="mt-2 block text-accent-500 hover:text-accent-400">
              {t.sidebar.whatsappCta}
            </a>
          </div>
          <div className="rounded-2xl border border-line-200 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-600">{t.sidebar.location}</h3>
            <p className="mt-2 text-ink-900">{siteConfig.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

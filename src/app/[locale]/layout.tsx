import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { locales, defaultLocale, rtlLocales, isLocale, Locale } from "@/i18n/config";
import { LocaleProvider } from "@/i18n/LocaleContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description:
      "Wandtung designs and manufactures data center infrastructure and critical power solutions — PDUs, intelligent PDUs, UPS systems, network and server cabinets, micro modular and containerized data centers, cooling and liquid cooling, and energy storage systems — for data center, telecom, government and industrial customers worldwide.",
    alternates: {
      canonical: locale === defaultLocale ? "/" : `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, l === defaultLocale ? "/" : `/${l}`])
      ),
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      url: siteConfig.url,
      title: `${siteConfig.name} | ${siteConfig.tagline}`,
      description:
        "One-stop data center infrastructure and critical power solutions, engineered and manufactured in China, deployed worldwide.",
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | ${siteConfig.tagline}`,
      description:
        "One-stop data center infrastructure and critical power solutions, engineered and manufactured in China, deployed worldwide.",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dir = rtlLocales.includes(locale as Locale) ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider locale={locale as Locale}>
          <JsonLd data={organizationSchema()} />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <FloatingActions />
        </LocaleProvider>
      </body>
    </html>
  );
}

import { Locale, defaultLocale } from "@/i18n/config";
import { localizedPath } from "./alternates";

import { siteConfig } from "./site";
import { FaqItem, Product } from "@/data/types";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    logo: `${siteConfig.url}/logo_wandtung.png`,
    name: siteConfig.legalName,
    alternateName: "Wandtung",
    url: siteConfig.url,
    email: siteConfig.email,
    description:
      "Guangdong Haisen New Building Materials Technology Co., Ltd. is a China-based manufacturer of data center infrastructure and critical power products, including PDUs, UPS systems, network and server cabinets, micro modular and containerized data centers, cooling and liquid cooling systems, and energy storage systems, serving data center operators, telecom operators, system integrators and EPC contractors worldwide.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    knowsAbout: [
      "Data Center Infrastructure",
      "Power Distribution Units",
      "Intelligent PDU",
      "UPS Systems",
      "Network and Server Cabinets",
      "Micro Modular Data Center",
      "Containerized Data Center",
      "Liquid Cooling",
      "Coolant Distribution Unit",
      "Critical Power Solutions",
      "Energy Storage Systems",
    ],
  };
}

export function productSchema(product: Product, locale: Locale = defaultLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.url}/products/${product.slug}#product`,
    url: `${siteConfig.url}${localizedPath(locale, `/products/${product.slug}`)}`,
    ...(product.images?.length ? { image: product.images.map((image) => new URL(image, siteConfig.url).href) } : {}),
    name: product.name,
    description: product.overview,
    brand: { "@type": "Brand", name: "Wandtung" },
    manufacturer: { "@id": `${siteConfig.url}/#organization` },
    additionalProperty: product.specGroups.flatMap((g) =>
      g.specs.map((s) => ({
        "@type": "PropertyValue",
        name: s.label,
        value: s.value,
      }))
    ),
    // Wandtung sells B2B/build-to-order with no published catalog price and
    // no fixed stock position, so `offers` intentionally omits both
    // price/priceCurrency and availability rather than inventing them — this
    // only satisfies Google's requirement that Product markup declare at
    // least one of offers/review/aggregateRating.
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}${localizedPath(locale, `/products/${product.slug}`)}`,
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${siteConfig.url}/#organization` },
    },
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[], locale: Locale = defaultLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteConfig.url}${localizedPath(locale, item.href === "/" ? "" : item.href)}`,
    })),
  };
}

export function articleSchema(params: {
  title: string;
  description: string;
  datePublished: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${params.url}#article`,
    url: params.url,
    headline: params.title,
    description: params.description,
    datePublished: params.datePublished,
    author: { "@id": `${siteConfig.url}/#organization`, "@type": "Organization", name: siteConfig.legalName },
    publisher: { "@id": `${siteConfig.url}/#organization`, "@type": "Organization", name: siteConfig.legalName },
    mainEntityOfPage: params.url,
  };
}

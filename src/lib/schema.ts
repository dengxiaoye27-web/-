import { siteConfig } from "./site";
import { FaqItem, Product } from "@/data/types";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: "Haisen",
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

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.overview,
    brand: { "@type": "Brand", name: "Haisen" },
    manufacturer: { "@type": "Organization", name: siteConfig.legalName },
    additionalProperty: product.specGroups.flatMap((g) =>
      g.specs.map((s) => ({
        "@type": "PropertyValue",
        name: s.label,
        value: s.value,
      }))
    ),
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

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
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
    headline: params.title,
    description: params.description,
    datePublished: params.datePublished,
    author: { "@type": "Organization", name: siteConfig.legalName },
    publisher: { "@type": "Organization", name: siteConfig.legalName },
    mainEntityOfPage: params.url,
  };
}

export type ProductCategorySlug =
  | "power-distribution"
  | "ups-systems"
  | "network-server-cabinets"
  | "micro-modular-data-center"
  | "containerized-data-center"
  | "cooling-solutions"
  | "raised-floor"
  | "cable-management"
  | "energy-storage";

export interface ProductCategory {
  slug: ProductCategorySlug;
  name: string;
  shortDescription: string;
  heroTagline: string;
  sellingPoints?: string[];
}

export interface SpecGroup {
  title: string;
  specs: { label: string; value: string }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  category: ProductCategorySlug;
  name: string;
  shortName: string;
  tagline: string;
  overview: string;
  // SEO-only meta description (~150-160 chars). Distinct from `overview`
  // (the on-page body paragraph, which is longer by design) so the two
  // don't have to trade off against each other. English-only for now —
  // other locales fall back to their translated `overview` until this
  // gets translated too. Optional so untouched products keep their prior
  // behavior (falling back to overview) rather than being blocked on this.
  metaDescription?: string;
  // SEO-only <title> override (~≤60 chars). Distinct from `name` (the H1
  // and the label used in breadcrumbs/cards/related-product links, which
  // stays a clean product name) — only needed where `name` alone would be
  // too long or collide with another page's title. English-only, same
  // fallback rationale as metaDescription.
  metaTitle?: string;
  featured?: boolean;
  images?: string[];
  keyFeatures: string[];
  specGroups: SpecGroup[];
  applications: string[];
  customizationOptions: string[];
  standards: string[];
  faqs: FaqItem[];
  relatedProductSlugs: string[];
  relatedSolutionSlugs: string[];
  relatedArticleSlugs?: string[];
}

export interface Solution {
  slug: string;
  name: string;
  // SEO-only <title> override — see the matching field on Product for why
  // this is separate from `name` (kept as the clean on-page H1/label).
  metaTitle?: string;
  tagline: string;
  customerChallenge: string;
  solutionArchitecture: string;
  systemComponents: { name: string; description: string }[];
  howItWorks: string[];
  technicalAdvantages: string[];
  deploymentProcess: { step: string; description: string }[];
  typicalApplications: string[];
  faqs: FaqItem[];
  relatedProductSlugs: string[];
  relatedArticleSlugs?: string[];
}

export type ProjectIndustry =
  | "Data Center"
  | "Telecom"
  | "Government"
  | "Banking"
  | "Industrial"
  | "Energy"
  | "Overseas Projects";

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  industry: ProjectIndustry;
  location: string;
  summary: string;
  background: string;
  challenge: string;
  requirements: string[];
  solution: string;
  productsUsed: string[];
  technicalConfiguration: { label: string; value: string }[];
  implementation: string;
  results: string[];
}

export interface Article {
  slug: string;
  title: string;
  metaTitle?: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  body: {
    heading: string;
    content: string;
    diagram?: { nodes: string[]; caption: string };
    table?: { columns: string[]; rows: { label: string; values: string[] }[] };
  }[];
  faqs: FaqItem[];
  ctaLinks?: { label: string; href: string }[];
  relatedArticleSlugs?: string[];
}

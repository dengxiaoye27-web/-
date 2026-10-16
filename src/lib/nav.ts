import { productCategories } from "@/data/categories";
import { solutions } from "@/data/solutions";
import { CommonMessages } from "@/i18n/messages";
import { getCategoryContent } from "@/i18n/content/categories";
import { getSolutionContent } from "@/i18n/content/solutions";
import { Locale } from "@/i18n/config";

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export function getMainNav(t: CommonMessages, locale: Locale): NavItem[] {
  const productNavGroups = productCategories.map((c) => ({
    label: getCategoryContent(c.slug, locale, c).name,
    href: `/products/${c.slug}`,
  }));

  const solutionNavItems = solutions.map((s) => ({
    label: getSolutionContent(s.slug, locale, s).name,
    href: `/solutions/${s.slug}`,
  }));

  return [
    { label: t.nav.home, href: "/" },
    { label: t.nav.products, href: "/products", children: productNavGroups },
    { label: t.nav.solutions, href: "/solutions", children: solutionNavItems },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.resources, href: "/resources" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];
}

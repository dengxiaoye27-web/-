import { productCategories } from "@/data/categories";
import { solutions } from "@/data/solutions";
import { CommonMessages } from "@/i18n/messages";

export const productNavGroups = productCategories.map((c) => ({
  label: c.name,
  href: `/products/${c.slug}`,
}));

export const solutionNavItems = solutions.map((s) => ({
  label: s.name,
  href: `/solutions/${s.slug}`,
}));

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

// Top-level labels are translated via CommonMessages; submenu items
// (product categories / solutions) are data-driven and stay in English
// until that content is translated per-locale.
export function getMainNav(t: CommonMessages): NavItem[] {
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

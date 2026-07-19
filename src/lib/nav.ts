import { productCategories } from "@/data/categories";
import { solutions } from "@/data/solutions";

export const productNavGroups = productCategories.map((c) => ({
  label: c.name,
  href: `/products/${c.slug}`,
}));

export const solutionNavItems = solutions.map((s) => ({
  label: s.name,
  href: `/solutions/${s.slug}`,
}));

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", children: productNavGroups },
  { label: "Solutions", href: "/solutions", children: solutionNavItems },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

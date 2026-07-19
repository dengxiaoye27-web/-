import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { products } from "@/data/products";
import { productCategories } from "@/data/categories";
import { solutions } from "@/data/solutions";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/solutions",
    "/projects",
    "/resources",
    "/about",
    "/contact",
    "/legal/privacy-policy",
    "/legal/terms-of-use",
  ];

  const dynamicRoutes = [
    ...productCategories.map((c) => `/products/${c.slug}`),
    ...products.map((p) => `/products/${p.slug}`),
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...projects.map((p) => `/projects/${p.slug}`),
    ...articles.map((a) => `/resources/blog/${a.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}

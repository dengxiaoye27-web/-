"use client";

import NextLink from "next/link";
import { ComponentProps } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { defaultLocale } from "@/i18n/config";

type LinkProps = ComponentProps<typeof NextLink>;

function isLocalizable(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function localizeHref(href: string, locale: string) {
  if (!isLocalizable(href) || locale === defaultLocale) return href;
  return `/${locale}${href}`;
}

// Drop-in replacement for next/link's Link that prefixes internal hrefs
// with the current locale (non-default locales only — the default
// locale is served unprefixed via middleware rewrites).
export function Link({ href, ...rest }: LinkProps) {
  const locale = useLocale();
  const resolvedHref =
    typeof href === "string" ? localizeHref(href, locale) : href;
  return <NextLink href={resolvedHref} {...rest} />;
}

export default Link;

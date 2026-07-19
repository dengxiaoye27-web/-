import Link from "next/link";
import { ReactNode } from "react";

export function Card({
  href,
  children,
  className = "",
  dark = false,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const classes = `group block rounded-2xl border ${
    dark
      ? "border-navy-700 bg-navy-800 hover:border-accent-500/60"
      : "border-line-200 bg-white hover:border-accent-500/60"
  } p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}

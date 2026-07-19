import Link from "@/components/ui/LocaleLink";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  solid:
    "bg-accent-500 text-white hover:bg-accent-400 focus-visible:outline-accent-500",
  outline:
    "border border-current text-inherit hover:bg-white/10 focus-visible:outline-accent-500",
  ghost: "text-inherit hover:bg-white/10 focus-visible:outline-accent-500",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({
  href,
  variant = "solid",
  children,
  className = "",
  ...rest
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: { canonical: "/legal/terms-of-use" },
};

export default function TermsOfUsePage() {
  return (
    <div className="container-page py-16 md:py-20">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Terms of Use" },
        ]}
      />
      <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight text-ink-900">
        Terms of Use
      </h1>
      <div className="mt-8 max-w-3xl space-y-6 text-ink-600 leading-relaxed">
        <p>
          This website is operated by {siteConfig.legalName}. Product
          specifications published on this site are provided for reference
          and are subject to change without notice; final specifications are
          confirmed at the time of order via written quotation.
        </p>
        <p>
          Content on this site, including product descriptions, diagrams and
          case studies, is the property of {siteConfig.legalName} and may not
          be reproduced without permission.
        </p>
        <p>For questions about these terms, contact us at {siteConfig.email}.</p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/legal/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-16 md:py-20">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight text-ink-900">
        Privacy Policy
      </h1>
      <div className="mt-8 max-w-3xl space-y-6 text-ink-600 leading-relaxed">
        <p>
          {siteConfig.legalName} (&quot;Haisen&quot;, &quot;we&quot;, &quot;us&quot;) collects information
          submitted through this website&apos;s inquiry and request-a-quote forms
          — including name, company, country, email, WhatsApp number and
          project details — solely to respond to product and project
          inquiries.
        </p>
        <p>
          We do not sell submitted information to third parties. Information
          may be shared internally with our sales and engineering teams to
          prepare a response or quotation.
        </p>
        <p>
          To request access to, correction of, or deletion of information you
          have submitted, contact us at {siteConfig.email}.
        </p>
      </div>
    </div>
  );
}

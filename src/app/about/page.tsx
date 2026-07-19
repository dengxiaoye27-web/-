import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTile } from "@/components/ui/StatTile";
import { Button } from "@/components/ui/Button";
import { certifications } from "@/data/certifications";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Guangdong Haisen New Building Materials Technology Co., Ltd. is a factory-direct manufacturer of data center infrastructure and critical power products, offering OEM/ODM, engineering support and global project delivery.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            About Haisen
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">
            {siteConfig.legalName} is a factory-direct manufacturer of data
            center infrastructure and critical power products, serving data
            center, telecom, government and industrial customers worldwide.
          </p>
        </div>
      </div>

      <div className="container-page py-16 md:py-20 space-y-20">
        <section id="overview">
          <SectionHeading eyebrow="Company Overview" title="Who We Are" />
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <p className="text-ink-600 leading-relaxed">
              Haisen designs and manufactures data center infrastructure and
              critical power products — rack PDUs and intelligent PDUs, UPS
              systems, network and server cabinets, micro modular and
              containerized data centers, precision and liquid cooling
              systems, raised flooring, cable management, and energy storage
              systems. We work directly with data center operators, telecom
              operators, system integrators, EPC contractors and
              distributors, supplying both standard catalog products and
              project-specific engineered systems.
            </p>
            <p className="text-ink-600 leading-relaxed">
              As a factory-direct manufacturer, Haisen supports OEM and ODM
              programs, custom electrical and mechanical specifications, and
              engineering consultation from early project design through
              commissioning — positioning Haisen as a single infrastructure
              partner rather than a single-product vendor.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatTile value="9" label="Product Categories" />
            <StatTile value="OEM/ODM" label="Custom Manufacturing" />
            <StatTile value="6" label="Target Export Regions" />
            <StatTile value="Factory Direct" label="Manufacturing Model" />
          </div>
        </section>

        <section id="factory">
          <SectionHeading eyebrow="Manufacturing" title="Factory & Manufacturing" />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed">
            Haisen operates factory-direct production for cabinets, power
            distribution and enclosure systems, with in-house engineering for
            electrical, mechanical and thermal design. Production is
            organized around standard catalog specifications as well as
            project-configured builds for micro modular and containerized
            data center orders.
          </p>
        </section>

        <section id="quality-control">
          <SectionHeading eyebrow="Assurance" title="Quality Control" />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed">
            Products are tested at defined stages of production — incoming
            material inspection, in-process checks and final function/output
            testing before packing — with electrical safety and performance
            verified prior to shipment.
          </p>
        </section>

        <section id="certifications">
          <SectionHeading eyebrow="Standards" title="Certifications" />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="rounded-xl border border-line-200 px-5 py-6 text-center">
                <p className="text-lg font-semibold text-ink-900">{cert.name}</p>
                <p className="mt-1 text-xs text-ink-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="global-markets">
          <SectionHeading eyebrow="Reach" title="Global Markets" />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed">
            Haisen exports data center infrastructure products and project
            solutions to the Middle East, Africa, Southeast Asia, Europe,
            South America and Central Asia, supporting distributors,
            wholesalers, EPC contractors and direct end-user projects.
          </p>
        </section>

        <section id="history">
          <SectionHeading eyebrow="Engineering Support" title="Custom Solutions & Project Delivery" />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed">
            Beyond catalog products, Haisen&apos;s engineering team supports
            project-specific configuration — from PDU outlet layout and
            cabinet dimensions to complete micro modular and containerized
            data center system design — backed by technical documentation
            and delivery coordination for overseas projects.
          </p>
        </section>

        <section className="rounded-2xl border border-navy-700 bg-navy-900 text-white p-8 md:p-10 text-center">
          <h3 className="text-2xl font-semibold">Want to Work With Our Engineering Team?</h3>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">Contact Engineering Team</Button>
          </div>
        </section>
      </div>
    </div>
  );
}

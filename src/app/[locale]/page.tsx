import type { Metadata } from "next";
import Link from "@/components/ui/LocaleLink";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTile } from "@/components/ui/StatTile";
import { Reveal } from "@/components/ui/Reveal";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { getFeaturedProducts } from "@/data/products";
import { articles } from "@/data/articles";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Data Center Infrastructure & Critical Power Solutions",
  description:
    "Haisen is a China-based manufacturer of data center infrastructure and critical power solutions — PDUs, UPS, cabinets, micro modular and containerized data centers, liquid cooling and energy storage — for data center, telecom, government and industrial customers worldwide.",
  alternates: { canonical: "/" },
};

const coreSolutions = [
  {
    title: "Critical Power",
    description: "Redundant, monitored power architecture from utility feed to IT load.",
    href: "/solutions/critical-power",
  },
  {
    title: "Power Distribution",
    description: "Intelligent, metered and switched PDUs with outlet-level monitoring.",
    href: "/products/power-distribution",
  },
  {
    title: "Data Center Cabinets",
    description: "Engineered enclosures for airflow, load capacity and cable management.",
    href: "/products/network-server-cabinets",
  },
  {
    title: "Micro Modular Data Centers",
    description: "Factory-integrated data centers ready for rapid site deployment.",
    href: "/solutions/micro-modular-data-center",
  },
  {
    title: "Containerized Data Centers",
    description: "Site-independent, factory-built data centers deployed in weeks.",
    href: "/solutions/containerized-data-center",
  },
  {
    title: "Cooling & Liquid Cooling",
    description: "Precision, in-row and cold plate liquid cooling for high-density racks.",
    href: "/solutions/liquid-cooling",
  },
  {
    title: "Energy Storage",
    description: "Battery energy storage for resilience, peak shaving and renewables.",
    href: "/solutions/energy-storage",
  },
];

const industries = [
  "Data Centers",
  "Telecommunications",
  "Banking",
  "Government",
  "Energy",
  "Industrial",
  "Cloud Computing",
  "Edge Computing",
];

const whyHaisen = [
  { title: "Manufacturing Capability", description: "Factory-direct production of power, enclosure and cooling systems at scale." },
  { title: "Engineering Expertise", description: "In-house engineering for power, thermal and system architecture design." },
  { title: "Customization", description: "Configurable specifications matched to project electrical and site requirements." },
  { title: "OEM & ODM", description: "Private-label and custom-designed programs for distributors and partners." },
  { title: "Global Delivery", description: "Export experience across the Middle East, Africa, Southeast Asia, Europe and beyond." },
  { title: "Quality Control", description: "Factory testing at every production stage before shipment." },
];

const markets = ["Middle East", "Africa", "Southeast Asia", "Europe", "South America", "Central Asia"];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      {/* 01 Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(0,145,255,0.25), transparent 45%), radial-gradient(circle at 80% 60%, rgba(34,211,238,0.15), transparent 40%)",
          }}
          aria-hidden
        />
        <div className="container-page relative py-28 md:py-40">
          <p className="eyebrow mb-6">One-Stop Data Center Infrastructure &amp; Critical Power Solution Provider</p>
          <h1 className="max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight">
            Powering the Infrastructure Behind the Digital World
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
            Integrated Data Center Infrastructure, Critical Power, Cooling and
            Modular Data Center Solutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/solutions">Explore Solutions</Button>
            <Button href="/contact" variant="outline">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* 02 Trusted Partner */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="About Haisen"
              title="Trusted Data Center Infrastructure Partner"
              description="Guangdong Haisen New Building Materials Technology Co., Ltd. designs and manufactures data center infrastructure and critical power products — from rack PDUs to full containerized data centers — supplying data center operators, telecom operators, system integrators and EPC contractors across global markets."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatTile value="9" label="Product Categories" />
            <StatTile value="50+" label="Data Center Infrastructure Products" />
            <StatTile value="6" label="Target Regions Served" />
            <StatTile value="OEM/ODM" label="Factory-Direct Manufacturing" />
          </div>
        </div>
      </section>

      {/* 03 Core Solutions */}
      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="What We Provide"
              title="Our Core Solutions"
              description="A complete infrastructure stack, engineered as one coordinated system rather than sold as disconnected products."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreSolutions.map((item) => (
              <Card key={item.title} href={item.href}>
                <h3 className="text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{item.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-accent-500 group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Featured Products */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Featured Products" title="Engineered for Data Center Deployment" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Card key={product.slug} href={`/products/${product.slug}`}>
                <p className="eyebrow mb-2">{product.shortName}</p>
                <h3 className="text-lg font-semibold text-ink-900">{product.name}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{product.tagline}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/products" className="text-sm font-medium text-accent-500 hover:text-accent-400">
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* 05 One-Stop Solution */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              light
              eyebrow="System Architecture"
              title="One-Stop Data Center Solution"
              description="Haisen doesn't sell a single product — we engineer the full path from grid power to the rack."
            />
          </Reveal>
          <div className="mt-12">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* 06 Industries */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Who We Serve" title="Industries We Serve" />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-line-200 px-5 py-6 text-center hover:border-accent-500/60 transition-colors"
              >
                <p className="font-medium text-ink-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Why Haisen */}
      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Why Choose Us" title="Why Haisen" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyHaisen.map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 08 Global Projects */}
      <section className="bg-navy-950 py-20 md:py-28 text-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Global Reach"
              title="Global Projects"
              description="Haisen infrastructure is deployed across data center, telecom and government projects in key growth markets."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {markets.map((market) => (
              <div key={market} className="rounded-xl border border-navy-700 bg-navy-900 px-5 py-6 text-center">
                <p className="font-medium">{market}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/projects" className="text-sm font-medium text-accent-400 hover:text-accent-500">
              View project case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* 09 Certifications */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Standards" title="Certifications" />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="rounded-xl border border-line-200 px-5 py-6 text-center">
                <p className="text-lg font-semibold text-ink-900">{cert.name}</p>
                <p className="mt-1 text-xs text-ink-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Latest Insights */}
      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Knowledge Center" title="Latest Insights" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {latestArticles.map((article) => (
              <Card key={article.slug} href={`/resources/blog/${article.slug}`}>
                <p className="eyebrow mb-2">{article.category}</p>
                <h3 className="text-lg font-semibold text-ink-900">{article.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{article.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 11 Final CTA */}
      <section className="bg-navy-950 py-20 md:py-28 text-white text-center">
        <div className="container-page">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Planning a Data Center Project?
          </h2>
          <p className="mt-4 text-lg text-white/70">Talk to Our Engineering Team</p>
          <div className="mt-10 flex justify-center gap-4">
            <Button href="/contact">Request a Quote</Button>
            <Button href="/solutions" variant="outline">
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

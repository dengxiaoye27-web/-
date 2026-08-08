import { ProductCategory } from "./types";

export const productCategories: ProductCategory[] = [
  {
    slug: "power-distribution",
    name: "Power Distribution",
    shortDescription:
      "Rack PDUs, intelligent PDUs, high power PDUs, ATS PDUs and STS for reliable, monitored power distribution at the rack level.",
    heroTagline: "Precision power distribution for every rack, every load.",
    sellingPoints: [
      "Multiple outlet standards — Schuko, NEMA, UK, IEC",
      "1U horizontal or 0U vertical mounting options",
      "Optional surge protection (SPD)",
      "Metered, monitored or switched intelligence levels available",
      "Factory-direct supply with OEM/ODM customization",
    ],
  },
  {
    slug: "ups-systems",
    name: "UPS Systems",
    shortDescription:
      "Rack mount, tower, online, modular and industrial UPS systems delivering clean, continuous power for critical loads.",
    heroTagline: "Uninterrupted power for mission-critical infrastructure.",
  },
  {
    slug: "network-server-cabinets",
    name: "Network & Server Cabinets",
    shortDescription:
      "19-inch network cabinets, server racks and data center cabinets engineered for airflow, load capacity and cable management.",
    heroTagline: "Engineered enclosures built for density and airflow.",
  },
  {
    slug: "micro-modular-data-center",
    name: "Micro Modular Data Center",
    shortDescription:
      "Factory-integrated micro modules combining cabinets, UPS, cooling, PDU, fire suppression and monitoring in one system.",
    heroTagline: "A complete data center, pre-integrated and rack-ready.",
  },
  {
    slug: "containerized-data-center",
    name: "Containerized Data Center",
    shortDescription:
      "20ft and 40ft containerized data centers for rapid deployment at telecom, mining, oil & gas and edge sites.",
    heroTagline: "Deploy a full data center in weeks, not years.",
  },
  {
    slug: "cooling-solutions",
    name: "Cooling Solutions",
    shortDescription:
      "Precision air conditioning, row-based and in-row cooling, and liquid cooling systems for high-density IT loads.",
    heroTagline: "Thermal management engineered for high-density compute.",
  },
  {
    slug: "raised-floor",
    name: "Data Center Flooring",
    shortDescription:
      "Anti-static, calcium sulphate and steel cementitious raised floor systems for airflow management and cable routing.",
    heroTagline: "The foundation layer of a well-engineered data hall.",
  },
  {
    slug: "cable-management",
    name: "Cable Management",
    shortDescription:
      "Wire mesh and ladder cable trays for structured, serviceable cable pathways across the data center.",
    heroTagline: "Structured pathways for power and data cabling.",
  },
  {
    slug: "energy-storage",
    name: "Energy Storage",
    shortDescription:
      "Battery energy storage systems, containerized ESS and solar power systems for resilient, sustainable site power.",
    heroTagline: "Resilient energy storage for grid-independent operation.",
  },
];

export function getCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

import { ProjectCaseStudy } from "./types";

export const projects: ProjectCaseStudy[] = [
  {
    slug: "southeast-asia-colocation-expansion",
    title: "Colocation Data Hall Power & Cabinet Upgrade",
    industry: "Data Center",
    location: "Southeast Asia",
    summary:
      "Full-scope power distribution and cabinet supply for a colocation operator expanding two data halls to N+1 redundancy.",
    background:
      "A regional colocation operator was expanding two existing data halls to onboard new enterprise tenants, requiring a consistent, monitored power and enclosure standard across both halls.",
    challenge:
      "The operator needed to raise power redundancy to N+1 without a full facility shutdown, standardize cabinet specifications across two halls originally built by different contractors, and give tenants visibility into their own power consumption.",
    requirements: [
      "N+1 UPS and PDU redundancy",
      "Outlet-level power monitoring per tenant",
      "Standardized 47U cabinet specification across both halls",
      "Phased cutover with no downtime to existing tenants",
    ],
    solution:
      "Wandtung supplied modular UPS frames configured for N+1 operation, intelligent PDUs for outlet-level tenant metering, and a standardized data center cabinet specification deployed across both halls, with a phased installation plan sequenced around existing tenant load.",
    productsUsed: ["Modular UPS", "Intelligent PDU", "Data Center Cabinet"],
    technicalConfiguration: [
      { label: "Redundancy Level", value: "N+1" },
      { label: "Cabinets Deployed", value: "220 x 47U" },
      { label: "PDU Monitoring", value: "Outlet-level, SNMP" },
    ],
    implementation:
      "Installation was phased hall-by-hall and rack-by-rack, with new UPS modules and PDUs commissioned and load-tested before existing tenant circuits were migrated, avoiding downtime.",
    results: [
      "N+1 redundancy achieved across both data halls",
      "Tenant-level power visibility enabled via intelligent PDU metering",
      "Zero downtime to existing tenant load during migration",
    ],
  },
  {
    slug: "middle-east-telecom-network-rollout",
    title: "Telecom Network Cabinet & ATS Rollout",
    industry: "Telecom",
    location: "Middle East",
    summary:
      "Standardized network cabinet and automatic transfer switch deployment across a multi-site telecom network expansion.",
    background:
      "A telecom operator expanding network coverage needed a standardized equipment room design that could be replicated quickly across many sites with varying power reliability.",
    challenge:
      "Sites experienced inconsistent utility power reliability, requiring automatic switch-over to generator or secondary feed without manual intervention, while equipment rooms needed a compact, repeatable cabinet layout.",
    requirements: [
      "Automatic transfer switching between utility and generator feeds",
      "Standardized compact network cabinet design",
      "Rapid, repeatable rollout process across many sites",
    ],
    solution:
      "Wandtung supplied ATS PDUs for automatic feed switching and a standardized network cabinet template, enabling the operator's installation teams to replicate the same equipment room design at each new site.",
    productsUsed: ["ATS PDU", "Network Cabinet"],
    technicalConfiguration: [
      { label: "Sites Deployed", value: "60+ equipment rooms" },
      { label: "Transfer Switching", value: "Automatic, dual-feed" },
      { label: "Cabinet Standard", value: "42U network cabinet, standardized layout" },
    ],
    implementation:
      "A standardized bill-of-materials and installation guide allowed the operator's regional teams to deploy the same design at each site without site-specific engineering.",
    results: [
      "Consistent equipment room standard across 60+ sites",
      "Automatic failover eliminated manual switch-over incidents",
      "Faster site commissioning through standardized design",
    ],
  },
  {
    slug: "west-africa-edge-container-deployment",
    title: "Containerized Edge Data Center Deployment",
    industry: "Overseas Projects",
    location: "West Africa",
    summary:
      "40ft containerized data center deployed to extend network and cloud edge capacity to a region with limited built-facility options.",
    background:
      "A regional cloud and network operator needed to establish edge computing capacity in a location without suitable existing building infrastructure or timeline for new construction.",
    challenge:
      "Conventional data room construction was not feasible within the operator's deployment timeline, and the site required a self-contained, outdoor-rated solution including power, cooling and security.",
    requirements: [
      "Self-contained outdoor-rated enclosure",
      "Integrated power, cooling, fire protection and security",
      "Deployment within weeks of order confirmation",
    ],
    solution:
      "Wandtung delivered a fully factory-integrated 40ft container data center with intelligent PDU and modular UPS power distribution, precision cooling, fire suppression and remote monitoring, tested at the factory before shipment.",
    productsUsed: ["40ft Container Data Center", "Intelligent PDU", "Modular UPS"],
    technicalConfiguration: [
      { label: "Container Size", value: "40ft ISO" },
      { label: "Power Redundancy", value: "N+1 UPS" },
      { label: "Cooling", value: "Precision air conditioning" },
    ],
    implementation:
      "The container was fully integrated and function-tested at the Wandtung factory, shipped by standard container logistics, and commissioned on site after foundation and utility connection.",
    results: [
      "Edge data center capacity live within weeks of factory completion",
      "Self-contained system required no additional building construction",
      "Remote monitoring enabled unattended operation post-deployment",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

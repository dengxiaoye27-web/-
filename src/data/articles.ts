import { Article } from "./types";

export const articles: Article[] = [
  {
    slug: "what-is-a-smart-pdu",
    title: "What Is a Smart PDU?",
    category: "Power Distribution",
    excerpt:
      "A plain-language explanation of intelligent PDUs — what they monitor, how they communicate, and when a facility needs one.",
    publishedAt: "2026-05-12",
    readingTime: "5 min read",
    body: [
      {
        heading: "Definition",
        content:
          "A smart (intelligent) PDU is a rack power distribution unit with built-in monitoring and network connectivity. Unlike a basic PDU, which only distributes power, a smart PDU measures current, voltage, power and energy consumption, and in switched models, allows remote control of individual outlets.",
      },
      {
        heading: "What a Smart PDU Monitors",
        content:
          "Typical monitoring points include per-outlet or per-circuit current and voltage, total power draw, cumulative energy consumption for cost and PUE tracking, and — with optional sensor ports — rack-level temperature and humidity.",
      },
      {
        heading: "Communication Protocols",
        content:
          "Smart PDUs commonly support SNMP for integration with network management systems, Modbus RTU/TCP for building/DCIM integration, RS485 for serial daisy-chaining, and a web interface for direct browser-based management.",
      },
      {
        heading: "When You Need One",
        content:
          "A smart PDU is worth the investment whenever a facility needs remote visibility into power usage (multi-tenant colocation, PUE reporting), or remote control of equipment power (unattended/edge sites, remote reboot of hung servers).",
      },
    ],
    faqs: [
      {
        question: "Is a smart PDU the same as a metered PDU?",
        answer:
          "Not exactly. A metered PDU adds local or remote power readings but not remote outlet control. \"Smart\" or \"intelligent\" PDU is often used as an umbrella term covering metered, monitored and switched capability — check the specific model's feature list.",
      },
      {
        question: "Does a smart PDU require a network connection to function?",
        answer:
          "A smart PDU distributes power normally even without network connectivity — the network connection is only required to access monitoring data and remote switching features.",
      },
    ],
  },
  {
    slug: "what-is-intelligent-pdu",
    title: "What Is an Intelligent PDU? A Practical Guide for Data Center Buyers",
    metaTitle: "What Is an Intelligent PDU? A Data Center Buyer's Guide | WANDTUNG",
    category: "Power Distribution",
    excerpt:
      "Learn what an intelligent PDU is, how metered, monitored and switched rack PDUs differ, and when your data center needs one. A practical guide from a PDU manufacturer.",
    publishedAt: "2026-07-20",
    readingTime: "6 min read",
    body: [
      {
        heading: "Overview",
        content:
          "Every rack in a data center needs power delivered cleanly, safely, and in a way operators can actually see and control. That is the job of the PDU (Power Distribution Unit). But not all PDUs are equal. A basic PDU simply splits one input into many outlets. An intelligent PDU does that and adds measurement, monitoring, and in some cases remote control of the power at each rack. If you are sourcing power distribution for a data center, telecom room, or edge site, understanding where a basic PDU ends and an intelligent PDU begins will save you money on the racks that don't need one and prevent blind spots on the racks that do.",
      },
      {
        heading: "What \"Intelligent\" Actually Means",
        content:
          "The word \"intelligent\" gets used loosely by suppliers. In practice it refers to any rack PDU that reports data or accepts remote commands over a network connection. Strip away the marketing and there are three real capability levels stacked on top of the basic unit. A metered PDU measures current, voltage, and power draw and shows it — either on a local digital display at the unit, or over the network — the entry point to \"intelligent,\" answering how much load is actually on a rack right now. A monitored (networked) PDU takes that metering and pushes it onto the network so it can be read remotely through SNMP, a web interface, or a DCIM platform, letting operators see every rack's power from one dashboard and set alert thresholds instead of walking the floor with a clamp meter. A switched PDU adds remote control of individual outlets — an operator can power-cycle a frozen server, sequence equipment startup after an outage, or lock unused outlets, all without sending someone to the site, which matters most for lights-out facilities and remote edge nodes. Higher tiers include everything below them: a switched PDU is also metered and monitored.",
      },
      {
        heading: "Why Intelligent PDUs Matter for AI and High-Density Racks",
        content:
          "Traditional enterprise racks drew a few kilowatts. AI and GPU workloads push individual racks toward 30, 50, even 100 kW. At that density, two things change. First, the margin for error on power shrinks — a rack running near its circuit limit needs continuous measurement, not a monthly spot check. Second, the cost of downtime climbs, so remote power-cycling and outlet-level control pay for themselves quickly. This is why intelligent PDUs have moved from \"nice to have\" to standard specification in modern high-density and AI data center builds. Accurate per-rack power data also feeds capacity planning: you can't safely fill a row if you don't know what each rack is really drawing.",
      },
      {
        heading: "Do You Need One on Every Rack?",
        content:
          "No — and a good supplier will tell you that. A sensible approach mixes tiers: basic or metered PDUs on low-density, stable racks where load rarely changes; monitored PDUs across the main production floor where visibility drives capacity decisions; and switched PDUs on remote, unmanned, or mission-critical racks where remote control avoids costly site visits. Matching the PDU tier to the role of the rack controls cost without creating monitoring blind spots.",
      },
      {
        heading: "Key Specifications to Check Before You Buy",
        content:
          "When comparing rack PDUs, look past the outlet count and confirm the input plug and outlet standard — Schuko (European/CEE), NEMA (North American), IEC, or a mix, matched to the region and the equipment it powers; rated current and voltage, which must comfortably exceed peak rack load with headroom; form factor — 1U horizontal, or zero-U vertical mounted in the rack side channel to save rack space; metering accuracy — billing-grade (±1%) if you charge tenants for power; network protocol — SNMP, HTTP/HTTPS, and DCIM compatibility for monitored and switched units; and surge protection (SPD), important in regions with unstable grid power.",
      },
      {
        heading: "WANDTUNG Rack PDUs",
        content:
          "WANDTUNG manufactures rack PDUs across all three intelligent tiers — metered, monitored, and switched — in Schuko, NEMA, and universal multi-standard outlet configurations for European, North American, and global markets. Units are available in 1U horizontal and zero-U vertical form factors, with optional surge protection and factory-direct OEM/ODM customization of outlet type, count, and interface. If you are specifying power distribution for a new build or expansion, our engineering team can help you match PDU tiers to your rack roles.",
      },
    ],
    ctaLinks: [
      { label: "Explore our Rack PDU range →", href: "/products/pdu" },
      { label: "Request a quote →", href: "/contact" },
    ],
    faqs: [
      {
        question: "What is the difference between a basic PDU and an intelligent PDU?",
        answer:
          "A basic PDU distributes power to multiple outlets with no measurement. An intelligent PDU adds metering, network monitoring, and — in switched models — remote outlet control.",
      },
      {
        question: "What does a metered PDU measure?",
        answer:
          "Current, voltage, and power consumption, shown on a local display or over the network, so operators can track rack load against circuit capacity.",
      },
      {
        question: "When should I use a switched PDU?",
        answer:
          "On remote, unmanned, or critical racks where the ability to remotely power-cycle equipment and control individual outlets avoids on-site visits and shortens recovery time.",
      },
      {
        question: "Are intelligent PDUs necessary for AI data centers?",
        answer:
          "At high rack densities typical of AI and GPU workloads, per-rack power visibility and remote control become essential for safety and capacity planning, making intelligent PDUs a standard specification.",
      },
    ],
  },
  {
    slug: "metered-vs-switched-pdu",
    title: "Metered vs Switched PDU: Which Does Your Rack Actually Need?",
    metaTitle: "Metered vs Switched PDU: What's the Difference? | WANDTUNG",
    category: "Power Distribution",
    excerpt:
      "Metered, monitored or switched rack PDU — which does your data center actually need? A clear comparison of features, cost and use cases from a PDU manufacturer.",
    publishedAt: "2026-07-20",
    readingTime: "4 min read",
    body: [
      {
        heading: "Overview",
        content:
          "\"Metered,\" \"monitored,\" \"switched\" — rack PDU datasheets throw these terms around as if buyers already know the difference. They don't always, and picking the wrong tier is expensive in both directions: over-specify and you pay for control you never use; under-specify and you lose the visibility or remote access you needed. This guide lays out exactly what separates the tiers and how to choose.",
      },
      {
        heading: "The Four Rack PDU Tiers, Briefly",
        content:
          "Rack PDUs sit on a ladder of capability, each rung adding to the one below. A basic PDU distributes power to multiple outlets with no measurement, no network — reliable and cheap for stable, low-density racks. A metered PDU adds measurement of current, voltage, and power, typically shown on a local digital display at the unit — you still read it in person, but you finally know each rack's real load against its breaker limit. A monitored PDU takes that same metering data onto the network, so you read every rack remotely through SNMP, a web page, or a DCIM dashboard, and set alerts instead of walking the floor. A switched PDU adds remote control of individual outlets on top of full monitoring — power-cycle a hung server, sequence startup after an outage, or disable unused outlets, all remotely.",
      },
      {
        heading: "Metered vs Switched: The Core Difference",
        content:
          "The single distinction that matters most is read versus control. A metered PDU tells you what is happening — how much power the rack is drawing — a one-way flow of information, perfect when your goal is visibility and capacity planning: knowing how full a rack is, how close to the circuit limit, and how load trends over time. A switched PDU lets you act on it — remotely turning outlets on and off, two-way control that earns its higher price only when someone would otherwise have to physically visit the rack: rebooting frozen equipment, staging power-up sequences, or securing outlets in a shared facility. If nobody would ever need to remotely cut power to a specific outlet, you are paying for a switched PDU's capability without using it. If your team currently drives to a site just to reboot a device, a switched PDU pays for itself fast.",
      },
      {
        heading: "A Simple Way to Choose",
        content:
          "Match the PDU tier to the rack's role, not to a blanket policy. Stable, low-density racks where load rarely changes need only a basic or metered PDU — a load reading, not a dashboard. The main production floor, with active capacity planning, calls for a monitored PDU, where remote visibility across every rack drives fill decisions and alerting. Remote sites, unmanned edge nodes, and mission-critical racks need a switched PDU, where remote power-cycling avoids costly, slow site visits. Multi-tenant or colocation environments billing tenants for power need a metered or monitored PDU with billing-grade (±1%) accuracy. Most real data centers mix tiers across the floor — that is the cost-efficient answer, not a compromise.",
      },
      {
        heading: "Don't Forget the Physical Specs",
        content:
          "Whichever tier you choose, the fundamentals still have to match your site: outlet standard — Schuko, NEMA, IEC or universal, matched to region and equipment; rated current/voltage with headroom above peak load; form factor — 1U horizontal or zero-U vertical to preserve rack space; surge protection for unstable-grid regions; and network protocol — confirm SNMP/HTTPS/DCIM compatibility for monitored and switched units.",
      },
      {
        heading: "WANDTUNG Rack PDUs Across Every Tier",
        content:
          "WANDTUNG manufactures metered, monitored, and switched rack PDUs in Schuko, NEMA, and universal multi-standard configurations, in both 1U horizontal and zero-U vertical form factors. Because we are factory-direct, outlet type, count, rated current, interface, and surge protection can be customized to your project via OEM/ODM. If you are unsure which tier fits which rack, our engineers will help you map it out.",
      },
    ],
    ctaLinks: [
      { label: "Explore our Rack PDU range →", href: "/products/pdu" },
      { label: "Request a quote →", href: "/contact" },
    ],
    faqs: [
      {
        question: "What is the main difference between a metered and a switched PDU?",
        answer:
          "A metered PDU measures and reports power (read-only). A switched PDU adds remote control of individual outlets, letting you power-cycle equipment without visiting the rack.",
      },
      {
        question: "Is a monitored PDU the same as a metered PDU?",
        answer:
          "No. A metered PDU shows readings locally; a monitored PDU puts those readings on the network for remote viewing and alerting through SNMP or a DCIM platform.",
      },
      {
        question: "Which PDU is best for a remote or unmanned site?",
        answer:
          "A switched PDU, because remote outlet control lets you reboot equipment and manage power without a site visit.",
      },
      {
        question: "Do I need the same PDU tier on every rack?",
        answer:
          "Usually not. Mixing tiers — basic or metered on stable racks, monitored on the main floor, switched on critical or remote racks — controls cost while keeping visibility where it matters.",
      },
    ],
  },
  {
    slug: "what-is-a-micro-modular-data-center",
    title: "What Is a Micro Modular Data Center?",
    category: "Micro Modular Data Center",
    excerpt: "How factory-integrated micro modules compress data room construction from months to weeks.",
    publishedAt: "2026-04-10",
    readingTime: "5 min read",
    body: [
      {
        heading: "Definition",
        content:
          "A micro modular data center is a factory pre-integrated system combining IT cabinets, power distribution, UPS, cooling, fire suppression, access control and monitoring into a single standardized unit.",
      },
      {
        heading: "Why Use One Instead of Building a Data Room",
        content:
          "Traditional data room construction requires coordinating multiple specialist contractors on site — electrical, mechanical, fire protection, security — often over several months. A micro module is engineered and tested as one system at the factory, reducing on-site work to placement and connection.",
      },
      {
        heading: "Typical Configurations",
        content:
          "Micro modules are commonly available in single-row (cabinets on one side of a central aisle) and dual-row (cabinets facing each other with hot/cold aisle containment) configurations, sized from a handful of racks up to a full small data room.",
      },
    ],
    faqs: [
      {
        question: "Does Wandtung provide micro modular data center solutions?",
        answer:
          "Yes. Wandtung designs and manufactures single-row, dual-row and all-in-one micro modular data centers with integrated power, cooling, fire suppression and monitoring, engineered and factory-tested as a complete system before deployment.",
      },
    ],
  },
  {
    slug: "what-is-micro-modular-data-center",
    title: "What Is a Micro Modular Data Center?",
    metaTitle: "What Is a Micro Modular Data Center? Benefits & Use Cases | WANDTUNG",
    category: "Micro Modular Data Center",
    excerpt:
      "A micro modular data center integrates racks, power, cooling and monitoring into one prefabricated unit. Learn how it works, its benefits, and when to use one.",
    publishedAt: "2026-07-20",
    readingTime: "6 min read",
    body: [
      {
        heading: "Overview",
        content:
          "Building a traditional data center room is slow. You pour into a shell, then bring in separate contractors for racks, power, cooling, fire suppression, and monitoring, and integrate them on site over months. A micro modular data center collapses that process into a single, factory-integrated product: racks, power distribution, precision cooling, monitoring, and fire safety, pre-assembled and tested before it ever reaches your site. The result is a self-contained data center you deploy in weeks instead of months, in spaces where a full data hall would never fit.",
      },
      {
        heading: "How a Micro Modular Data Center Works",
        content:
          "A micro module packages the complete physical infrastructure stack into one enclosed system, typically one to a few racks up to a full row: racks and enclosures sealed for hot-aisle/cold-aisle containment so cooling isn't wasted on the surrounding room; power distribution — UPS, PDUs, and switchgear — integrated and pre-wired; precision cooling, in-row or in-rack, sized to the enclosed load and far more efficient than cooling an open room; monitoring and management through environmental sensors, power metering, and a controller, often with remote access built in; and fire detection and suppression plus physical security as integrated options. Because it is engineered and tested as one system at the factory, the module arrives as a known quantity. On site, the work is largely placing it, connecting power and network, and commissioning — not integrating a dozen separate trades.",
      },
      {
        heading: "Why It Shortens Deployment From Months to Weeks",
        content:
          "The time saving comes from moving integration off the critical path. In a conventional build, each subsystem is installed and integrated sequentially at the site, and problems surface late, when they are expensive to fix. In a modular approach, that integration happens in parallel at the factory while the site is being prepared, and the module is validated before shipping. Site work shrinks to placement and connection. For operators facing AI-driven demand, this speed is often the deciding factor: capacity that arrives in weeks captures opportunity that capacity arriving in a year would miss.",
      },
      {
        heading: "Where Micro Modular Data Centers Make Sense",
        content:
          "They are not a replacement for every hyperscale hall — they excel in specific situations: edge and distributed compute, for retail, manufacturing, telecom sites, and 5G nodes that need local processing close to where data is generated, without a dedicated IT room; rapid capacity expansion, adding compute to an existing facility or standing up new capacity faster than a traditional build allows; space-constrained sites, such as offices, hospitals, or industrial floors where no purpose-built data hall exists; and standardized rollouts, where enterprises deploying identical compute to many locations benefit from a repeatable, pre-engineered unit rather than a bespoke build each time. For larger or mobile needs, the same principles scale up to containerized data centers, which house many racks in a shipping-container form factor for field deployment.",
      },
      {
        heading: "What to Look for in a Supplier",
        content:
          "A micro module is only as good as the integration behind it. When evaluating suppliers, check that the cooling is sized to the real rack density you plan to run, including high-density and liquid-cooling-ready options; that power, cooling, and monitoring are genuinely integrated and factory-tested as one system, not loosely bundled; that components carry appropriate certifications and the supplier can support your target market's standards; and that the supplier can customize rack count, power capacity, and cooling type to your workload.",
      },
      {
        heading: "WANDTUNG Modular Data Center Solutions",
        content:
          "WANDTUNG designs and manufactures the complete physical infrastructure stack — racks, PDUs and UPS, precision and liquid cooling (including CDUs and cold plates), containment, and monitoring — which lets us integrate micro modular and containerized data centers as coordinated systems rather than assembled parts. Every module is engineered from our own product lines and factory-tested before delivery, with OEM/ODM customization of rack count, power, and cooling to match your workload and site.",
      },
    ],
    ctaLinks: [
      { label: "Explore our modular data center solutions →", href: "/solutions" },
      { label: "Request a quote →", href: "/contact" },
    ],
    faqs: [
      {
        question: "What is a micro modular data center?",
        answer:
          "A prefabricated, self-contained data center that integrates racks, power distribution, precision cooling, monitoring, and fire safety into one factory-tested unit, deployable in weeks.",
      },
      {
        question: "How is it different from a containerized data center?",
        answer:
          "A micro module is typically a compact, indoor unit of one to a few racks. A containerized data center scales the same integrated approach up to many racks inside a shipping-container form factor for field or outdoor deployment.",
      },
      {
        question: "How fast can a micro modular data center be deployed?",
        answer:
          "Because integration and testing happen at the factory in parallel with site preparation, on-site work is reduced to placement, connection, and commissioning — typically weeks rather than the months a conventional build requires.",
      },
      {
        question: "When should I choose a micro modular data center over a traditional build?",
        answer:
          "When you need edge/local compute, rapid capacity, deployment in a space-constrained site, or a repeatable standardized unit across many locations.",
      },
    ],
  },
  {
    slug: "20ft-vs-40ft-container-data-center",
    title: "20ft vs 40ft Container Data Center: Which Should You Choose?",
    category: "Containerized Data Center",
    excerpt: "A practical comparison to help size a containerized data center to your IT load and site constraints.",
    publishedAt: "2026-03-22",
    readingTime: "4 min read",
    body: [
      {
        heading: "Capacity",
        content:
          "A 40ft container roughly doubles the usable internal footprint of a 20ft unit, supporting more IT racks, larger power and cooling plant, and in many designs, a walk-in maintenance aisle.",
      },
      {
        heading: "Site Constraints",
        content:
          "20ft containers suit sites with limited space, weight/logistics restrictions, or smaller IT load targets — common at edge or temporary sites. 40ft units suit larger, longer-term deployments.",
      },
      {
        heading: "Logistics",
        content:
          "Both sizes move via standard ISO container logistics; 40ft units may face more restrictive access at sites with tight roads or limited crane capacity, which should be assessed during site survey.",
      },
    ],
    faqs: [
      {
        question: "Can multiple containers be linked for more capacity?",
        answer:
          "Yes — both 20ft and 40ft containerized data centers can be deployed in multiples and interconnected for larger capacity requirements as load grows.",
      },
    ],
  },
  {
    slug: "what-is-a-cdu-in-liquid-cooling",
    title: "What Is a CDU in Liquid Cooling?",
    category: "Liquid Cooling",
    excerpt: "Understanding the Coolant Distribution Unit at the center of every liquid cooling architecture.",
    publishedAt: "2026-03-05",
    readingTime: "4 min read",
    body: [
      {
        heading: "Definition",
        content:
          "A CDU (Coolant Distribution Unit) manages and isolates the primary (facility) and secondary (rack/server) coolant loops in a liquid cooling system, controlling flow, temperature and pressure.",
      },
      {
        heading: "Why Loop Isolation Matters",
        content:
          "Facility water can vary in quality, pressure and temperature. The CDU's heat exchanger keeps that primary loop separate from the closed secondary loop that touches IT hardware, protecting servers from contamination and pressure swings.",
      },
      {
        heading: "What a CDU Monitors",
        content:
          "Typical CDU monitoring includes supply/return temperature, flow rate, pressure and leak detection status, reported to the facility monitoring system.",
      },
    ],
    faqs: [
      {
        question: "Does Wandtung provide liquid cooling and CDU solutions?",
        answer:
          "Yes. Wandtung provides cold plate liquid cooling systems with CDU-managed primary/secondary loops, leak detection and monitoring for AI and high-density compute deployments.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-data-center-pdu",
    title: "How to Choose a Data Center PDU",
    category: "Power Distribution",
    excerpt: "A step-by-step checklist for specifying the right rack PDU for your data center project.",
    publishedAt: "2026-02-18",
    readingTime: "6 min read",
    body: [
      {
        heading: "1. Match Voltage and Current to Your Circuit",
        content:
          "Confirm the rated voltage and current of the upstream circuit (e.g. 200-250V/32A three-phase) and select a PDU rated to match, with margin for load growth.",
      },
      {
        heading: "2. Choose Mounting Format",
        content:
          "Vertical (0U) mounting suits high outlet counts and deep racks; horizontal (1U-2U) mounting suits shallow racks or low outlet-count requirements.",
      },
      {
        heading: "3. Decide on Monitoring and Control",
        content:
          "Basic PDUs suit non-critical loads with no reporting need; metered/monitored PDUs suit facilities tracking power usage; switched PDUs suit unattended or remote sites needing remote power-cycling.",
      },
      {
        heading: "4. Confirm Outlet Type",
        content:
          "Match outlet type (IEC C13/C19, country-specific, or custom) to the power cords of the equipment that will be connected.",
      },
      {
        heading: "5. Plan for Redundancy",
        content:
          "For dual-corded equipment, plan for A/B PDU feeds from independent power sources to support true redundancy.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a basic PDU and a metered or monitored PDU?",
        answer:
          "A basic PDU only distributes power. A metered PDU adds a local current/voltage display. A monitored PDU adds remote, network-based monitoring. A switched PDU adds remote outlet control on top of monitoring.",
      },
    ],
  },
  {
    slug: "what-is-n-plus-1-redundancy",
    title: "What Is N+1 Redundancy?",
    category: "Critical Power",
    excerpt: "A clear explanation of N+1, 2N and other redundancy levels used in data center power design.",
    publishedAt: "2026-01-30",
    readingTime: "4 min read",
    body: [
      {
        heading: "N — The Baseline",
        content:
          "\"N\" represents the capacity actually required to support the load — for example, if a facility needs 3 UPS modules to carry its IT load, N = 3.",
      },
      {
        heading: "N+1",
        content:
          "N+1 adds one additional unit beyond N, so a single module or unit failure does not interrupt power to the load — using the example above, N+1 would mean 4 UPS modules installed to support a 3-module load.",
      },
      {
        heading: "2N and 2N+1",
        content:
          "2N duplicates the entire power path — two fully independent systems, each sized for the full load — for facilities that cannot tolerate any single point of failure. 2N+1 adds a further module of redundancy on top of that.",
      },
    ],
    faqs: [
      {
        question: "Does Wandtung design systems to a specific redundancy tier?",
        answer:
          "Wandtung designs power architecture to the redundancy level (N, N+1, 2N) specified by the project — modular UPS and ATS/STS transfer switching make it practical to implement redundancy at the module, system or full-path level.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

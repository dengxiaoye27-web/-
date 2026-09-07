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
    slug: "metered-vs-switched-pdu",
    title: "Metered PDU vs Switched PDU: What's the Difference?",
    category: "Power Distribution",
    excerpt: "How to tell metered, monitored and switched PDUs apart, and which one your rack actually needs.",
    publishedAt: "2026-04-28",
    readingTime: "4 min read",
    body: [
      {
        heading: "Metered PDU",
        content:
          "A metered PDU displays current and/or voltage locally, usually on a built-in LCD or LED display, giving on-site staff a quick load reading without remote access.",
      },
      {
        heading: "Monitored PDU",
        content:
          "A monitored PDU adds network connectivity, reporting current, voltage, power and often energy consumption remotely — useful for tracking load and PUE without a site visit.",
      },
      {
        heading: "Switched PDU",
        content:
          "A switched PDU includes monitoring capability and adds remote, individually addressable outlet control — administrators can power-cycle a single device or sequence a rack's power-up remotely.",
      },
      {
        heading: "Choosing Between Them",
        content:
          "Choose metered for basic on-site load visibility, monitored when remote reporting matters more than control, and switched when remote power-cycling or sequenced start-up is required — typically unattended or remote sites.",
      },
    ],
    faqs: [
      {
        question: "Can a switched PDU do everything a monitored PDU does?",
        answer:
          "Yes — switched PDUs include the monitoring functions of a monitored PDU plus remote outlet control, making them a superset rather than a separate category.",
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
  {
    slug: "aluminum-cable-tray-manufacturer-guide",
    title: "Aluminum Cable Tray Manufacturer Guide (2026)",
    category: "Cable Management",
    excerpt:
      "How aluminum cable tray compares to steel, why data centers and solar plants use it, and what a custom aluminum cable tray manufacturer can build to your spec.",
    publishedAt: "2026-09-07",
    readingTime: "8 min read",
    body: [
      {
        heading: "What Is an Aluminum Cable Tray?",
        content:
          "An aluminum cable tray is a cable-support system extruded from aluminum alloy profile (most commonly 6063-T5) rather than roll-formed or welded from carbon steel or pultruded from glass-fiber-reinforced plastic (FRP/GRP). The core difference is in the material itself: steel tray relies on a zinc or hot-dip galvanized coating for corrosion resistance and carries the most weight per meter of any tray type; FRP tray is fully non-conductive and corrosion-proof but has the lowest mechanical strength and can become brittle under UV exposure; aluminum tray sits between the two, offering natural corrosion resistance without a coating, roughly a third of the weight of an equivalent steel tray, and enough mechanical strength for most power and data cabling spans found in a data center or industrial site.",
      },
      {
        heading: "Why Aluminum Cable Tray Suits Data Centers and Solar Power Plants",
        content:
          "Weight and corrosion resistance are the two properties that matter most in these environments. On a raised floor or overhead in a [data center cabinet](/products/network-cabinet) row, every kilogram of tray is dead load competing with structural and seismic bracing budgets — a lighter aluminum tray reduces that load and is easier for a two-person crew to lift and position without mechanical assistance, shortening installation time. In outdoor and rooftop [solar power system](/products/solar-power-system) installations, cable tray is exposed to rain, humidity and salt-laden air; aluminum's natural oxide layer resists corrosion without relying on a coating that can be scratched during transport or installation, which matters over a 20-25 year PV system design life. Aluminum is also non-magnetic and has lower electrical resistance than steel, which some EMI-sensitive data cabling runs specify directly.",
      },
      {
        heading: "From Aluminum Extrusion to Finished Cable Tray: The Manufacturing Process",
        content:
          "Production starts with round or flat 6063 aluminum billet, which is heated and pushed through a custom steel die under extreme pressure — extrusion — to form the tray's structural profile (side rail, base or rung, in one continuous cross-section). The extruded lengths are then age-hardened (T5 temper) to reach final strength, cut to standard or ordered lengths, and CNC-punched or drilled for connector and support-bracket holes. Surface treatment follows: anodizing for a hard, corrosion-resistant, paintable oxide layer, or powder coating where a specific RAL color is required. Finished sections, connectors, covers and support brackets are then kitted and packed per project bill of materials before shipment.",
        image: {
          alt: "Aluminum cable tray extrusion press at Wandtung's Hongxiang Aluminum factory",
          caption:
            "Suggested factory photo: billet loading and the extrusion press forming the tray profile.",
        },
      },
      {
        heading: "Customization: Non-Standard Sizes, Surface Finishes and Tooling Lead Time",
        content:
          "Because the tray profile comes from a die rather than a fixed roll-forming line, non-standard widths, depths and rung spacing are a tooling and extrusion-run decision rather than a full re-engineering exercise — useful when a project's cable fill doesn't match a catalog width. Surface treatment options typically include clear or color anodizing, powder coating in custom RAL colors, and mill (untreated) finish for indoor, low-corrosion applications. New die development for a fully custom profile typically takes several weeks; projects that fit an existing die library ship from stock profile with no tooling lead time at all.",
        image: {
          alt: "Custom aluminum cable tray dies and finished profile samples",
          caption: "Suggested factory photo: die library and anodized/powder-coated finish samples.",
        },
      },
      {
        heading: "How to Choose the Right Aluminum Cable Tray",
        content:
          "Selecting an aluminum cable tray comes down to matching three things to the installation: load, span and environment. Load capacity should be checked against the actual cable fill weight per meter, including growth margin, against the manufacturer's load-span table — not assumed from a steel-tray reference, since aluminum's lower material strength means a given profile may need closer support spacing to carry the same load as steel. Span is set by the support/hanger spacing the site allows; reducing support spacing is usually cheaper than stepping up to a heavier profile. Environment determines finish: anodized or powder-coated aluminum for outdoor, coastal or corrosive sites, and mill finish for dry indoor data halls where cost matters more than added corrosion margin.",
      },
      {
        heading: "Factory-Direct Supply: Our Own Aluminum Extrusion Plant",
        content:
          "Wandtung's aluminum cable tray is produced at Hongxiang Aluminum (鸿翔铝业), our own aluminum extrusion facility, rather than sourced through a trading intermediary. That gives us direct control over billet quality, die tooling and anodizing, and it means custom widths, non-standard lengths and specific RAL finishes are a production scheduling question, not a quoting round-trip through a third-party mill. Combined with Wandtung's existing lines for cabinets and [rack PDUs](/products/pdu), a project sourcing aluminum cable tray alongside its cabinets and power distribution can consolidate that procurement with one factory-direct supplier instead of coordinating separate vendors for each product line.",
      },
      {
        heading: "Get a Quote for Your Project",
        content:
          "For a closer look at load ratings and construction, see Wandtung's aluminum alloy cable ladder and general cable tray product pages. To get a quote for a specific project — standard profile or custom die — reach out through the form below with your required width, span and finish, and our engineering team will confirm load-span data and lead time.",
      },
    ],
    faqs: [
      {
        question: "Is aluminum cable tray as strong as steel cable tray?",
        answer:
          "Not per unit weight-for-weight comparison of raw material strength, but a correctly specified aluminum profile carries typical data center and industrial cable loads reliably — the difference is usually addressed with slightly closer support spacing rather than by avoiding aluminum altogether. Always check the manufacturer's load-span table for the specific profile.",
      },
      {
        question: "How much lighter is aluminum cable tray than steel?",
        answer:
          "Aluminum alloy cable tray typically weighs roughly a third of an equivalent steel tray, which reduces structural dead load and allows faster, less labor-intensive installation.",
      },
      {
        question: "Can Wandtung produce non-standard aluminum cable tray sizes?",
        answer:
          "Yes. Because Wandtung's aluminum cable tray is produced in-house at our own extrusion facility, non-standard widths, lengths and finishes can be scheduled directly with our production line rather than requoted through a third-party mill.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

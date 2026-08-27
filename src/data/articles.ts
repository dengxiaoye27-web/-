import { Article } from "./types";

export const articles: Article[] = [
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
    relatedArticleSlugs: ["why-ai-clusters-need-integrated-liquid-cooling"],
  },
  {
    slug: "why-ai-clusters-need-integrated-liquid-cooling",
    title: "Beyond Just Cooling: Why AI Data Centers Require an Integrated Liquid-to-Rack Architecture",
    category: "Liquid Cooling",
    excerpt:
      "Traditional air cooling has hit the thermal wall. For NVIDIA H100/H200 clusters, liquid cooling isn't just an option—it's a requirement. Here is why Wandtung advocates for a coordinated D2C approach.",
    publishedAt: "2026-08-08",
    readingTime: "6 min read",
    body: [
      {
        heading: "The AI Power Wall: Why Air Cooling Fails at 20kW+",
        content:
          "As AI chips like the H100 push TDP (Thermal Design Power) beyond 700W, the heat density per rack is soaring past 40kW. At Wandtung, we've observed that standard air-cooled CRAC systems reach their physical limit at 20kW per rack. Pushing air faster only increases noise and energy waste without solving the core heat-stagnation problem at the chip level.",
      },
      {
        heading: "Wandtung's Direct-to-Chip (D2C) Advantage",
        content:
          "We don't just sell cold plates. The Wandtung solution integrates the D2C manifold directly into our heavy-duty server cabinets. By delivering coolant to the heat source and removing 90% of IT heat through liquid, we help operators achieve a PUE (Power Usage Effectiveness) as low as 1.15—a benchmark air-cooled facilities simply cannot match.",
      },
      {
        heading: "The Danger of Fragmented Infrastructure",
        content:
          "Many integrators source liquid cooling from one vendor and racks from another. This leads to poor cable management, compromised leak detection, and electrical interference. Wandtung's \"One Coordinated System\" ensures that the Liquid Cooling Cabinet, the Manifold, and the Intelligent PDU work as a single organism, with integrated sensors communicating on a unified dashboard.",
      },
      {
        heading: "Future-Proofing for the 80kW+ Era",
        content:
          "AI evolution isn't slowing down. Our liquid cooling architecture is designed for scalability. Whether you are deploying 20kW today or planning for 100kW next year, the physical chassis remains the same. This modular engineering is what defines Wandtung's commitment to sustainable IDC growth.",
      },
    ],
    faqs: [
      {
        question: "Can I retrofit air-cooled racks to liquid cooling?",
        answer:
          "While possible, it is inefficient. Wandtung recommends a \"Liquid-Ready\" rack architecture that supports hybrid cooling to ensure long-term structural integrity and leak safety.",
      },
    ],
    ctaLinks: [
      { label: "Explore Liquid Cooling Solutions", href: "/solutions/liquid-cooling" },
      { label: "Consult Our Engineers", href: "/contact" },
    ],
    relatedArticleSlugs: ["what-is-a-cdu-in-liquid-cooling"],
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
    slug: "air-cooling-vs-liquid-cooling-ai-data-centers",
    title: "Air Cooling vs Liquid Cooling for AI Data Centers",
    metaTitle: "Air Cooling vs Liquid Cooling for AI Data Centers | WANDTUNG",
    category: "Liquid Cooling",
    excerpt:
      "Air cooling vs liquid cooling for AI data centers: when precision AC and in-row cooling are enough, and when cold plate cooling with a CDU is needed.",
    publishedAt: "2026-08-10",
    readingTime: "6 min read",
    body: [
      {
        heading: "Why AI Racks Are Changing Data Center Cooling Requirements",
        content:
          "For most of the industry's history, air cooling was simply the default. A raised floor, a row of precision air conditioners, and enough airflow to keep a few kilowatts per rack within range — that was the whole design problem. AI and HPC compute racks broke that assumption. GPU servers pack far more heat into the same footprint than traditional enterprise racks: where a conventional enterprise rack typically drew somewhere in the range of 3–8 kW, AI and GPU racks in new deployments now commonly run at 30–100 kW per rack, and dense training clusters can push higher still. The result is that \"how do we cool this rack\" is no longer a single answer. Air cooling hasn't become obsolete — plenty of infrastructure around and alongside AI clusters still runs comfortably on air. But above a certain density, air alone struggles to remove heat fast enough, and liquid cooling stops being an exotic option and becomes the practical one. Choosing correctly, rack by rack, is now a real engineering decision — not a default.",
      },
      {
        heading: "Air Cooling: Precision AC and In-Row Cooling",
        content:
          "Air cooling covers the largest share of data center white space today, and for good reason: it's a mature, well-understood approach with a large base of installed expertise, and it remains the right choice for a wide range of rack densities. Precision (close-control) air conditioning — sometimes called CRAC — is built specifically for IT environments rather than general comfort cooling. It holds tighter temperature and humidity tolerances than a standard HVAC unit, runs continuously in 24/7 duty cycles, and moves far more air per ton of cooling capacity. Precision units are typically deployed at the room perimeter, distributing conditioned air under a raised floor or from overhead, and they remain a cost-effective baseline for lower-density rooms — data halls, telecom equipment rooms, and control rooms where rack loads stay within air's comfortable range. WANDTUNG precision air conditioners are available in a range of cooling capacities to match different room-level loads. In-row cooling takes the same underlying approach and moves it closer to the load. Instead of cooling the whole room from the perimeter, in-row units sit directly within the cabinet row, in the same footprint as an IT cabinet, placing cooling capacity immediately next to the racks generating heat. Paired with hot/cold aisle containment, this shortens the airflow path and gives tighter, more predictable temperature control at the row level — a meaningful step up in density over pure room cooling, without moving to liquid. Air cooling — whether room-level or row-level — is the right call when rack density stays within air's practical limits, when a facility needs to standardize on infrastructure with broad site experience, and when a lower-density room doesn't justify the added plumbing complexity of a liquid loop. As a general industry guideline, air-based cooling (including in-row) is most commonly applied up to around 15–20 kW per rack, though the practical limit depends on containment and airflow design.",
      },
      {
        heading: "Liquid Cooling: Cold Plate and CDU",
        content:
          "Once rack power density crosses that threshold, air cooling runs into physics: there's a limit to how much heat a given volume of air can carry away per unit time, no matter how much airflow you add. Liquid cooling exists because liquid has far higher thermal capacity than air, letting it move much more heat through a much smaller footprint. Cold plate (direct-to-chip) liquid cooling attaches a liquid-cooled plate directly to the CPU, GPU, or other high-heat components inside the server, removing heat at the source rather than relying on air to carry it away from the whole chassis. This is the technology behind most high-density AI and GPU training deployments today, because it scales to power densities that air cooling — even in-row — cannot practically reach. Cold plate cooling doesn't work in isolation; it depends on a CDU (Coolant Distribution Unit), the equipment that manages the loop. A CDU separates and controls the primary (facility) cooling loop from the secondary (rack/server) loop, handling pumping, heat exchange, filtration, leak detection, and flow/temperature/pressure monitoring. This separation matters because it isolates facility water — which varies in quality, pressure, and cleanliness — from the closed, controlled loop that actually touches IT hardware, protecting servers while still allowing precise temperature control at the rack. Liquid cooling is the right call for AI training clusters, HPC racks, and any deployment where GPU density has pushed per-rack power beyond what air cooling can reject — accepting the added complexity of a coolant loop, leak detection, and CDU management in exchange for cooling capacity air simply cannot deliver at that density.",
      },
      {
        heading: "How to Choose: Matching Cooling to Rack Power Density",
        content:
          "There's no universal cutover point that applies to every facility — the right answer depends on rack layout, containment, ambient conditions, and site infrastructure as much as on power density alone. But as a starting framework: lower-density rooms, where per-rack load stays roughly under 10 kW, are generally well served by precision (room-level) air conditioning as a baseline, especially in telecom rooms, control rooms, and smaller equipment spaces without dedicated high-density zones. Mid-to-higher density racks, in the range of roughly 10–20 kW per rack, typically benefit from moving to in-row cooling, which keeps the simplicity of an air-based system while closing the distance between cooling capacity and the load. High-density AI/GPU racks, above roughly 20 kW per rack, are where cold plate liquid cooling with a CDU becomes the practical choice, since air (room or row-level) can no longer reject heat fast enough regardless of airflow. These ranges are general industry guidelines, not fixed rules — the actual crossover for your facility depends on containment, airflow, and site conditions. Many real deployments don't pick one approach exclusively — a facility might run air cooling across its general enterprise floor while carving out a liquid-cooled zone for a dedicated AI cluster, or use room cooling as a baseline layer alongside row-based units at hot spots. Because WANDTUNG manufactures precision air conditioners, in-row cooling units, cold plate liquid cooling systems, and CDUs, we can help specify a design that covers the full range from air to liquid within a single project — including hybrid layouts — rather than treating it as an either/or decision made once for the whole facility.",
      },
    ],
    ctaLinks: [
      { label: "Explore our cooling solutions →", href: "/solutions" },
      { label: "Request a quote →", href: "/contact" },
    ],
    faqs: [
      {
        question: "Is liquid cooling always better than air cooling for AI workloads?",
        answer:
          "Not automatically — \"better\" depends on rack density and site requirements. Liquid cooling handles higher power densities than air can reject, but it adds plumbing, leak detection, and CDU management that isn't necessary for racks air can already cool effectively. The right choice depends on the actual load per rack, not the workload type alone.",
      },
      {
        question: "Can air cooling and liquid cooling be used in the same data center?",
        answer:
          "Yes. It's common to run air cooling — room-level or in-row — across general enterprise racks while using cold plate liquid cooling with a CDU in a dedicated zone for high-density AI or GPU racks, rather than converting an entire facility to one method.",
      },
      {
        question: "What is a CDU and why does cold plate cooling need one?",
        answer:
          "A CDU (Coolant Distribution Unit) manages the coolant loop for cold plate liquid cooling, separating the facility (primary) water loop from the closed secondary loop that touches IT hardware, while handling pumping, heat exchange, filtration, leak detection, and monitoring. Without it, facility water quality and pressure variation would be a direct risk to server hardware.",
      },
      {
        question: "At what rack power density should I consider switching from air to liquid cooling?",
        answer:
          "This depends on your specific rack layout, containment, and site conditions, so there's no single number that applies everywhere. As a general industry guideline, air-based cooling is common up to around 15–20 kW per rack, with cold plate liquid cooling becoming the practical choice above that. Our engineering team can review your target rack density and recommend whether air, liquid, or a hybrid approach fits your deployment.",
      },
    ],
  },
  {
    slug: "solar-storage-bess-data-center-guide",
    title: "What Is a BESS (Battery Energy Storage System)? A Buyer's Guide for Data Centers & C&I Projects",
    metaTitle: "What Is a BESS? A Buyer's Guide for Data Centers | WANDTUNG",
    category: "Energy Storage",
    excerpt:
      "What is a BESS (Battery Energy Storage System)? A buyer's guide to solar + storage for data centers and C&I sites, covering sizing, specs and suppliers.",
    publishedAt: "2026-08-27",
    readingTime: "7 min read",
    body: [
      {
        heading: "Overview",
        content:
          "Grid power in much of Southeast Asia and the Middle East wasn't built for the load profile modern data centers and industrial sites now demand — voltage sags, planned and unplanned outages, and rising peak-hour tariffs all cut into uptime and margin at once. A battery energy storage system (BESS), especially paired with solar generation, has become one of the most direct ways to buy back control over both problems. This guide covers what a BESS actually is, why data center and commercial and industrial (C&I) buyers are specifying one, the parameters that matter most when comparing systems, and what to check before choosing a supplier.",
      },
      {
        heading: "What Is a Solar + Storage / BESS System?",
        content:
          "A BESS combines three core components: battery racks — almost always lithium iron phosphate (LFP) today, for its stability and cycle life over other lithium chemistries — a power conversion system (PCS) that converts between the battery's DC and the site's AC power, and an energy management system (EMS) that decides when the system charges, discharges, or islands from the grid. Pair that with a solar (PV) array and you have a solar-plus-storage system: the array generates during the day, the BESS stores what isn't used immediately, and the EMS releases it based on load, tariff schedule, or grid status. It's worth being clear about how this differs from equipment already on most sites. A UPS protects IT load for minutes during a transfer to backup power; a diesel generator provides long-duration backup but only after it starts and only while fuel lasts. A BESS does both — bridging the gap instantly like a UPS, but sustaining load for hours like a generator — while also working continuously for peak shaving and, when paired with solar, using clean generation instead of burning fuel.",
        diagram: {
          nodes: ["Solar PV Array", "Battery Racks (LFP)", "PCS", "EMS", "Site Load / Grid"],
          caption:
            "Simplified solar-plus-storage architecture — the PV array generates power, the PCS converts between DC and AC, and the EMS directs energy to site load, storage, or the grid based on demand and tariff conditions.",
        },
      },
      {
        heading: "Why Data Centers and C&I Sites Need BESS",
        content:
          "Three drivers keep coming up in buyer conversations. Grid reliability: in markets where the grid itself is a variable — voltage fluctuation, load shedding, or unplanned outages — a BESS provides ride-through and backup that doesn't depend on a generator start sequence. Energy cost management: many commercial tariff structures charge a demand rate based on peak draw, separate from consumption — a BESS can shave that peak by discharging during high-tariff windows, and in time-of-use markets it can charge on cheap off-peak power and discharge when rates are high. Compliance and sustainability targets: an increasing number of data center customers and industrial buyers face ESG reporting or customer audit requirements that favor renewable-backed power, and solar-plus-storage is one of the more straightforward ways to show progress against those targets. A BESS doesn't replace a data center's existing power and cooling infrastructure — it sits alongside the UPS, precision air conditioning and rack cabinets already on site, adding a layer of resilience and cost control rather than competing with what's already installed.",
      },
      {
        heading: "Grid Conditions in Southeast Asia and the Middle East",
        content:
          "Grid conditions across Southeast Asia and the Middle East vary by country and even by industrial zone, but a few patterns come up repeatedly with prospective buyers in these markets. Distribution feeders serving newer industrial parks or rural sites are often more prone to voltage sags and brief interruptions than to long outages — exactly the failure mode a BESS rides through better than a generator that needs time to start. Commercial and industrial tariff structures in many of these markets separate a demand charge, based on peak draw, from the energy charge, based on total consumption, so a facility's peak load during a short window — not just its average draw — can drive a meaningful share of the power bill. And as solar adoption accelerates across the region, some utilities are asking new large loads to bring their own backup or storage capacity rather than drawing entirely from grid infrastructure that's still catching up to demand growth. None of this is universal — grid quality, tariff design and interconnection rules differ by country and by utility — which is why sizing a BESS starts with your own site's load profile and local grid conditions, not a generic regional assumption.",
      },
      {
        heading: "Key Specifications to Check When Choosing a BESS",
        content:
          "Capacity (kWh/MWh): size the system to the load you actually need to carry and for how long — a backup-only application sized for 30 minutes of ride-through looks very different from a peak-shaving system sized to shift several hours of demand. Battery chemistry: LFP is now the standard choice for stationary storage because of its thermal stability and long cycle life compared to older lithium chemistries — our containerized systems, for example, are rated for more than 6,000 cycles. Form factor: a cabinet-format system — outdoor-rated, liquid-cooled, and built around a compact footprint — suits C&I sites that want to start small and add cabinets in parallel as load grows, typically covering roughly 250kW–1000kW per multi-cabinet system; a containerized system packages everything into a single outdoor ISO container and suits sites that need a large amount of capacity — up to several thousand kWh — in one self-contained unit. Grid mode: confirm whether you need grid-tied (offsetting consumption while staying connected), off-grid (fully independent), or hybrid operation, since this affects both the PCS and EMS configuration. Certifications: our battery energy storage and solar power systems are CE certified, and our containerized ESS is additionally built to UL/IEC international safety standards — for any given project, confirm which specific certifications apply to the exact model being quoted, since coverage can still vary by configuration. Exact ratings, dimensions and cycle-life figures for any specific configuration are confirmed in your project quotation.",
      },
      {
        heading: "How to Choose a BESS Supplier",
        content:
          "Beyond the datasheet, the practical differences between suppliers show up in customization ability, lead time, after-sales support and spare parts availability in your region, and a track record you can actually verify. On that last point, be precise about what a supplier is telling you: a market a company is targeting or capable of serving is not the same claim as a project it has already delivered, and a buyer evaluating suppliers should ask which is which. Wandtung's own background is in cross-border industrial trade, and our energy storage and structural work benefits from an in-house aluminum processing base that supports the mounting structures, cabinets and enclosures built around the battery and power electronics — a manufacturing synergy that's genuinely part of how these systems get built, not a separate marketing claim. If you're evaluating a data center backup or C&I energy storage system for a project in Southeast Asia, the Middle East, or elsewhere, we're glad to review your load profile and site conditions and suggest a configuration to quote.",
      },
    ],
    ctaLinks: [
      { label: "Explore our Energy Storage & Solar products →", href: "/products/energy-storage" },
      { label: "Request a quote →", href: "/contact" },
    ],
    faqs: [
      {
        question: "How long does a BESS typically last?",
        answer:
          "Lifespan is usually described in charge/discharge cycles rather than years alone, since it depends on how hard the system is used. LFP-based systems are generally rated for several thousand cycles at the pack level — our containerized ESS, for example, is rated above 6,000 cycles. Actual calendar life depends on operating conditions and duty cycle, and is confirmed for each configuration in the project quotation.",
      },
      {
        question: "What's the difference between a containerized BESS and a cabinet-format BESS?",
        answer:
          "A containerized system packages the full battery, PCS, EMS and cooling inside a single outdoor ISO container and suits sites needing a large amount of capacity in one self-contained unit. A cabinet-format system is a smaller, outdoor-rated all-in-one unit that's easier to stage — you can start with one cabinet and parallel more as load grows, which suits many C&I sites better than committing to full container capacity upfront.",
      },
      {
        question: "Can a solar-plus-storage system run fully off-grid, without the utility connection?",
        answer:
          "Yes, when the PCS and EMS are configured for off-grid (or hybrid) operation — but the array and battery capacity both need to be sized for the site's actual load and the local solar resource, not just peak demand, so that sizing exercise should happen before you request a quote, not after installation.",
      },
      {
        question: "How long does it take to receive a BESS system after ordering?",
        answer:
          "Lead time depends on the capacity, form factor and level of customization ordered, so there's no single number that applies to every order — ask for a project-specific lead time as part of your quotation request.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

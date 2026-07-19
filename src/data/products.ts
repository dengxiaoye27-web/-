import { Product } from "./types";

export const products: Product[] = [
  // ---------------- Power Distribution ----------------
  {
    slug: "pdu",
    category: "power-distribution",
    name: "Rack PDU (Power Distribution Unit)",
    shortName: "Rack PDU",
    tagline: "Reliable rack-level power distribution for data center and telecom cabinets.",
    overview:
      "The Haisen Rack PDU distributes utility or UPS power to IT equipment inside a cabinet. It is manufactured in basic, metered, monitored and switched variants, in single-phase and three-phase configurations, and is available in vertical (0U) and horizontal rack-mount formats for data center, telecom and industrial environments.",
    featured: true,
    keyFeatures: [
      "Single-phase and three-phase configurations",
      "Vertical (0U) and horizontal mounting formats",
      "IEC C13/C19 and country-specific outlet options",
      "High-grade copper busbar for low impedance and heat rise",
      "Overload and surge protection on every circuit",
      "Custom outlet layout and cable length on request",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "100–125V / 200–250V / 380–415V" },
          { label: "Rated Current", value: "16A / 20A / 32A / 63A" },
          { label: "Rated Frequency", value: "50/60 Hz" },
          { label: "Phase", value: "Single-phase / Three-phase" },
        ],
      },
      {
        title: "Input / Output",
        specs: [
          { label: "Input Plug", value: "IEC 60309, C20, country-specific" },
          { label: "Output Sockets", value: "IEC C13, C19, Schuko, universal, custom" },
          { label: "Socket Count", value: "6–36 outlets per unit" },
        ],
      },
      {
        title: "Mechanical",
        specs: [
          { label: "Mounting", value: "0U vertical / 1U–2U horizontal" },
          { label: "Housing Material", value: "Cold-rolled steel, powder-coated" },
          { label: "Protection", value: "MCB per circuit group, surge protection" },
        ],
      },
    ],
    applications: [
      "Data center IT racks",
      "Telecom equipment rooms",
      "Colocation cabinets",
      "Industrial control cabinets",
    ],
    customizationOptions: [
      "Outlet type and quantity",
      "Input plug and cable length",
      "Circuit breaker grouping",
      "Custom branding / labeling",
      "OEM / ODM packaging",
    ],
    standards: ["CE", "RoHS", "IEC 60320", "IEC 60309"],
    faqs: [
      {
        question: "What is a rack PDU used for?",
        answer:
          "A rack PDU (power distribution unit) distributes incoming power from a UPS or utility feed to multiple pieces of IT equipment mounted in a server or network rack, replacing multiple individual power cords with a single organized, protected distribution point.",
      },
      {
        question: "What is the difference between a basic PDU and a metered or monitored PDU?",
        answer:
          "A basic PDU only distributes power. A metered PDU adds a local current/voltage display. A monitored PDU adds remote, network-based monitoring of power and environmental data. A switched PDU adds the ability to remotely turn individual outlets on or off.",
      },
      {
        question: "Can Haisen customize PDU outlet configuration?",
        answer:
          "Yes. Haisen is a factory-direct manufacturer and configures outlet type, quantity, input plug, circuit breaker grouping and cable length to match each project's electrical and rack specification, including OEM/ODM branding.",
      },
    ],
    relatedProductSlugs: ["intelligent-pdu", "high-power-pdu", "network-cabinet"],
    relatedSolutionSlugs: ["smart-power-distribution", "critical-power"],
  },
  {
    slug: "intelligent-pdu",
    category: "power-distribution",
    name: "Intelligent PDU",
    shortName: "Intelligent PDU",
    tagline: "Network-managed rack power distribution with monitoring, metering and remote switching.",
    overview:
      "The Haisen Intelligent PDU is a network-managed power distribution unit built for data centers that require visibility and control at the outlet level. It combines current, voltage, power and energy monitoring, temperature & humidity sensing, and remote outlet switching, accessible via SNMP, Modbus, RS485 and a web management interface.",
    featured: true,
    keyFeatures: [
      "Outlet-level current, voltage and power monitoring",
      "Cumulative energy consumption logging",
      "Temperature & humidity sensor ports",
      "Remote individual outlet switching and sequencing",
      "SNMP, Modbus RTU/TCP and RS485 communication",
      "Web-based management interface with alarm thresholds",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "200–250V / 380–415V" },
          { label: "Rated Current", value: "16A / 32A / 63A" },
          { label: "Monitoring Accuracy", value: "±1% current / voltage" },
        ],
      },
      {
        title: "Monitoring & Communication",
        specs: [
          { label: "Protocols", value: "SNMP v1/v2c/v3, Modbus RTU/TCP, RS485, TCP/IP" },
          { label: "Monitoring Points", value: "Voltage, current, power, energy, temperature, humidity" },
          { label: "Switching", value: "Per-outlet on/off, sequenced power-up" },
          { label: "Alarm Management", value: "Threshold alarms via SNMP trap, email, web" },
        ],
      },
      {
        title: "Mechanical",
        specs: [
          { label: "Mounting", value: "0U vertical / horizontal" },
          { label: "Display", value: "Local LCD (voltage/current/power)" },
          { label: "Outlet Options", value: "IEC C13/C19, country-specific" },
        ],
      },
    ],
    applications: [
      "Hyperscale and colocation data centers",
      "Remote / lights-out telecom sites",
      "Edge data centers requiring remote power cycling",
      "Environments requiring energy usage reporting (PUE tracking)",
    ],
    customizationOptions: [
      "Outlet count, type and grouping",
      "Communication protocol selection",
      "Firmware / SNMP MIB customization",
      "Environmental sensor kit selection",
    ],
    standards: ["CE", "RoHS", "IEC 60320", "SNMP MIB-II"],
    faqs: [
      {
        question: "What is a smart PDU?",
        answer:
          "A smart (intelligent) PDU is a rack power distribution unit with built-in monitoring and network connectivity, allowing administrators to remotely measure current, voltage, power and energy consumption at the unit or outlet level, and in switched models, remotely turn outlets on or off.",
      },
      {
        question: "Metered PDU vs switched PDU — what's the difference?",
        answer:
          "A metered PDU reports power usage locally or remotely but cannot control outlets. A switched PDU includes everything a metered PDU offers plus remote, individually addressable outlet control, useful for remote reboot of hung equipment and sequenced power-up.",
      },
      {
        question: "Does Haisen manufacture intelligent PDUs?",
        answer:
          "Yes. Haisen designs and manufactures intelligent PDUs with outlet-level monitoring, SNMP/Modbus/RS485 connectivity and remote switching for data center, telecom and industrial customers worldwide, including OEM/ODM programs.",
      },
      {
        question: "How do I choose a data center PDU?",
        answer:
          "Match rated current and voltage to your rack's circuit, choose vertical (0U) mounting for high outlet counts or horizontal for shallow racks, decide whether you need metering, monitoring, or remote switching, and confirm outlet type against your equipment's power cords.",
      },
    ],
    relatedProductSlugs: ["pdu", "high-power-pdu", "intelligent-cabinet"],
    relatedSolutionSlugs: ["smart-power-distribution", "critical-power"],
  },
  {
    slug: "high-power-pdu",
    category: "power-distribution",
    name: "High Power PDU",
    shortName: "High Power PDU",
    tagline: "High-current three-phase PDU for dense compute and AI training racks.",
    overview:
      "The Haisen High Power PDU is designed for high-density racks such as AI training clusters, GPU servers and blade enclosures, supporting three-phase input up to 63A and high outlet counts with reinforced busbar and thermal design.",
    keyFeatures: [
      "Three-phase input up to 63A",
      "Reinforced copper busbar for low heat rise under sustained high load",
      "High outlet density for GPU / blade server racks",
      "Optional monitoring and remote switching",
      "Balanced phase loading design guidance provided per project",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "380–415V three-phase" },
          { label: "Rated Current", value: "32A / 63A per phase" },
          { label: "Load Balancing", value: "Three-phase balanced outlet grouping" },
        ],
      },
      {
        title: "Mechanical",
        specs: [
          { label: "Mounting", value: "0U vertical" },
          { label: "Outlet Options", value: "IEC C13/C19, custom high-current outlets" },
          { label: "Thermal Design", value: "Reinforced busbar, derated for continuous load" },
        ],
      },
    ],
    applications: ["AI / GPU compute racks", "High-density colocation", "Blade server enclosures"],
    customizationOptions: ["Phase balancing layout", "Outlet mix", "Monitoring module"],
    standards: ["CE", "RoHS", "IEC 60309"],
    faqs: [
      {
        question: "When is a high power PDU required instead of a standard PDU?",
        answer:
          "High power PDUs are used when rack IT load exceeds what a standard 16A/20A PDU can safely deliver — typically dense GPU/AI compute racks or blade enclosures — requiring 32A or 63A three-phase input and reinforced busbar design.",
      },
    ],
    relatedProductSlugs: ["intelligent-pdu", "pdu", "modular-ups"],
    relatedSolutionSlugs: ["ai-data-center", "critical-power"],
  },

  // ---------------- UPS Systems ----------------
  {
    slug: "rack-mount-ups",
    category: "ups-systems",
    name: "Rack Mount UPS",
    shortName: "Rack Mount UPS",
    tagline: "Online double-conversion UPS for rack-mounted deployment in data center and telecom environments.",
    overview:
      "The Haisen Rack Mount UPS is a double-conversion online UPS packaged in a standard 19-inch rack format, providing clean, regulated backup power for IT and network equipment with flexible battery run-time configurations.",
    featured: true,
    keyFeatures: [
      "True online double-conversion topology",
      "Rack-mount 2U–6U formats",
      "Extended battery pack options for longer runtime",
      "RS232 / USB / SNMP / dry-contact communication",
      "Automatic bypass on overload or fault",
    ],
    specGroups: [
      {
        title: "Power",
        specs: [
          { label: "Power Capacity", value: "1 kVA – 20 kVA" },
          { label: "Input Voltage", value: "110/220/230/240V single-phase" },
          { label: "Output Voltage", value: "220/230/240V ±1%" },
          { label: "Power Factor", value: "0.9" },
          { label: "Efficiency", value: "Up to 94% (online mode)" },
        ],
      },
      {
        title: "Battery & Runtime",
        specs: [
          { label: "Battery Configuration", value: "Internal + external extended battery cabinet" },
          { label: "Backup Time", value: "5 min – several hours (load dependent)" },
        ],
      },
      {
        title: "Communication",
        specs: [
          { label: "Interfaces", value: "RS232, USB, SNMP card (optional), dry contact" },
          { label: "Parallel Capability", value: "Up to 4 units (model dependent)" },
        ],
      },
    ],
    applications: ["Server and network racks", "Telecom equipment rooms", "SME data rooms"],
    customizationOptions: ["Rack height (2U/3U/6U)", "Battery runtime package", "Communication card"],
    standards: ["CE", "RoHS", "IEC 62040"],
    faqs: [
      {
        question: "What is an online UPS?",
        answer:
          "An online (double-conversion) UPS continuously converts incoming AC power to DC and back to AC, providing a constant, regulated output with zero transfer time to battery, which is why it is the standard topology for data center and critical IT loads.",
      },
      {
        question: "How do I select UPS runtime and capacity?",
        answer:
          "Size the UPS kVA/kW rating to your connected IT load with headroom for growth, then size battery capacity to the required ride-through time before generator start or safe shutdown, typically 5–15 minutes for grid-backed sites and longer for generator-less sites.",
      },
    ],
    relatedProductSlugs: ["modular-ups", "intelligent-pdu"],
    relatedSolutionSlugs: ["critical-power"],
  },
  {
    slug: "modular-ups",
    category: "ups-systems",
    name: "Modular UPS",
    shortName: "Modular UPS",
    tagline: "Hot-swappable power module UPS for scalable, high-availability critical power.",
    overview:
      "The Haisen Modular UPS uses hot-swappable power modules within a common frame, allowing capacity to scale with IT load growth and redundancy (N+1/N+X) to be built in without oversizing day-one investment.",
    keyFeatures: [
      "Hot-swappable power modules",
      "N+X redundancy without full system shutdown",
      "Scalable capacity within a single frame",
      "Parallel frame expansion for large sites",
      "Full digital control and remote monitoring",
    ],
    specGroups: [
      {
        title: "Power",
        specs: [
          { label: "Power Capacity", value: "10 kVA – 800 kVA (frame + module dependent)" },
          { label: "Input Voltage", value: "380/400/415V three-phase" },
          { label: "Output Voltage", value: "380/400/415V three-phase" },
          { label: "Efficiency", value: "Up to 97% (ECO / online mode)" },
        ],
      },
      {
        title: "Redundancy & Communication",
        specs: [
          { label: "Redundancy", value: "N+1, N+X module and frame level" },
          { label: "Parallel Capability", value: "Multiple frames, up to system design limit" },
          { label: "Communication", value: "SNMP, Modbus, touchscreen HMI" },
        ],
      },
    ],
    applications: [
      "Enterprise and colocation data centers",
      "Critical facilities requiring N+1 redundancy",
      "Sites with phased IT load growth",
    ],
    customizationOptions: ["Module power rating", "Frame slot count", "Battery cabinet integration"],
    standards: ["CE", "RoHS", "IEC 62040"],
    faqs: [
      {
        question: "What is N+1 redundancy?",
        answer:
          "N+1 redundancy means one additional power module or unit beyond what is required to support the actual load (N) is installed, so a single module failure does not interrupt power to the load. Modular UPS systems make N+1 practical by allowing one extra module in the same frame.",
      },
    ],
    relatedProductSlugs: ["rack-mount-ups", "high-power-pdu"],
    relatedSolutionSlugs: ["critical-power", "data-center-infrastructure"],
  },

  // ---------------- Network & Server Cabinets ----------------
  {
    slug: "network-cabinet",
    category: "network-server-cabinets",
    name: "Network Cabinet",
    shortName: "Network Cabinet",
    tagline: "19-inch network cabinet engineered for structured cabling and network equipment.",
    overview:
      "The Haisen Network Cabinet is a 19-inch enclosure for switches, patch panels and network equipment, built with reinforced steel frame, adjustable mounting rails, and configurable cable management, ventilation and door options for telecom rooms and IT closets.",
    featured: true,
    keyFeatures: [
      "19-inch EIA-standard mounting rails, front and rear",
      "Perforated or mesh door options for airflow",
      "Adjustable depth and cable entry points",
      "Top and bottom cable access with brush strips",
      "Optional PDU rail mounting, front and rear",
    ],
    specGroups: [
      {
        title: "Structure & Dimensions",
        specs: [
          { label: "Rack Units", value: "12U – 47U" },
          { label: "Width", value: "600 mm / 800 mm" },
          { label: "Depth", value: "600 / 800 / 1000 / 1200 mm" },
          { label: "Load Capacity", value: "Up to 800 kg (static)" },
        ],
      },
      {
        title: "Construction",
        specs: [
          { label: "Material", value: "Cold-rolled steel (SPCC)" },
          { label: "Steel Thickness", value: "1.2 – 2.0 mm (frame dependent)" },
          { label: "IP Rating", value: "IP20 (indoor); IP54/IP55 outdoor variant available" },
          { label: "Finish", value: "Powder-coated, RAL color options" },
        ],
      },
    ],
    applications: ["Telecom equipment rooms", "Network / IT closets", "Data center support infrastructure"],
    customizationOptions: [
      "Height / width / depth",
      "Door type (perforated, mesh, glass, solid)",
      "Side panel (removable, lockable)",
      "Cable management accessories",
      "Color / branding",
    ],
    standards: ["CE", "RoHS", "IEC 60297 (19-inch)"],
    faqs: [
      {
        question: "What is a network cabinet used for?",
        answer:
          "A network cabinet is a 19-inch standard enclosure that houses switches, patch panels, routers and other network equipment, providing physical security, organized cable management and controlled airflow for IT closets and equipment rooms.",
      },
      {
        question: "What steel thickness should a data center cabinet use?",
        answer:
          "Frame components are typically 1.5–2.0 mm cold-rolled steel for structural load-bearing members, with 1.0–1.2 mm acceptable for doors and side panels — Haisen specifies thickness per model and can reinforce frames for heavier static/dynamic load ratings on request.",
      },
    ],
    relatedProductSlugs: ["server-rack", "data-center-cabinet", "cold-aisle-cabinet"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "data-center-cabinet",
    category: "network-server-cabinets",
    name: "Data Center Cabinet",
    shortName: "DC Cabinet",
    tagline: "High-load-capacity server cabinet for data center white space deployment.",
    overview:
      "The Haisen Data Center Cabinet is purpose-built for data hall deployment, supporting high static and dynamic load ratings, hot/cold aisle containment compatibility, and integrated cable and PDU management for dense server and storage deployments.",
    keyFeatures: [
      "High static load rating for dense server/storage stacks",
      "Hot aisle / cold aisle containment compatible",
      "Vertical 0U PDU mounting channels front and rear",
      "Grounded, bonded frame for electrical safety",
      "Blanking panel and brush-strip airflow sealing",
    ],
    specGroups: [
      {
        title: "Structure & Dimensions",
        specs: [
          { label: "Rack Units", value: "42U / 45U / 47U" },
          { label: "Width", value: "600 mm / 800 mm" },
          { label: "Depth", value: "1000 / 1100 / 1200 mm" },
          { label: "Load Capacity", value: "Up to 1200 kg static" },
        ],
      },
      {
        title: "Construction",
        specs: [
          { label: "Material", value: "Cold-rolled steel" },
          { label: "IP Rating", value: "IP20" },
          { label: "Containment", value: "Compatible with hot/cold aisle containment systems" },
        ],
      },
    ],
    applications: ["Hyperscale and colocation data halls", "Enterprise server rooms", "High-density storage deployments"],
    customizationOptions: ["Load rating", "Aisle containment interface", "PDU channel configuration"],
    standards: ["CE", "RoHS", "IEC 60297"],
    faqs: [
      {
        question: "What load capacity does a data center cabinet need?",
        answer:
          "Load capacity should exceed the fully populated weight of servers, storage, cabling and PDUs with margin — Haisen data center cabinets are rated up to 1200 kg static load to support dense compute and storage deployments.",
      },
    ],
    relatedProductSlugs: ["network-cabinet", "cold-aisle-cabinet", "intelligent-cabinet"],
    relatedSolutionSlugs: ["data-center-infrastructure", "ai-data-center"],
  },

  // ---------------- Micro Modular Data Center ----------------
  {
    slug: "smart-micro-module",
    category: "micro-modular-data-center",
    name: "Smart Micro Module Data Center",
    shortName: "Smart Micro Module",
    tagline: "Factory-integrated micro data center combining cabinets, power, cooling and monitoring.",
    overview:
      "The Haisen Smart Micro Module integrates IT cabinets, UPS, PDU, precision cooling, battery, fire suppression, access control and environmental monitoring into a single pre-engineered, factory-tested system, deployable in single-row or dual-row configuration for small to mid-size data rooms.",
    featured: true,
    keyFeatures: [
      "Factory pre-integration and testing before shipment",
      "Single-row or dual-row cabinet configuration",
      "Hot/cold aisle containment built in",
      "Integrated fire suppression and access control",
      "Centralized environmental and power monitoring platform",
    ],
    specGroups: [
      {
        title: "System Composition",
        specs: [
          { label: "IT Cabinets", value: "42U / 47U, single or dual row" },
          { label: "Power", value: "Modular UPS + intelligent PDU" },
          { label: "Cooling", value: "In-row or precision air conditioning" },
          { label: "Monitoring", value: "DCIM-compatible centralized monitoring" },
        ],
      },
      {
        title: "Safety Systems",
        specs: [
          { label: "Fire Suppression", value: "Gas-based automatic suppression" },
          { label: "Access Control", value: "Card / biometric access, door sensors" },
          { label: "Leak Detection", value: "Optional water leak detection" },
        ],
      },
    ],
    applications: ["Enterprise IT rooms", "Bank branch data rooms", "Edge / regional data centers"],
    customizationOptions: ["Row configuration", "Power redundancy level", "Cooling type", "Fire suppression agent"],
    standards: ["CE", "RoHS", "IEC 62040"],
    faqs: [
      {
        question: "What is a micro modular data center?",
        answer:
          "A micro modular data center is a factory pre-integrated system combining IT cabinets, power distribution, UPS, cooling, fire suppression, access control and monitoring into a single standardized unit, reducing on-site construction time compared to a traditional built data room.",
      },
      {
        question: "Does Haisen provide micro modular data center solutions?",
        answer:
          "Yes. Haisen designs and manufactures single-row, dual-row and all-in-one micro modular data centers with integrated power, cooling, fire suppression and monitoring, engineered and factory-tested as a complete system before deployment.",
      },
    ],
    relatedProductSlugs: ["intelligent-cabinet", "intelligent-pdu", "in-row-cooling"],
    relatedSolutionSlugs: ["micro-modular-data-center", "data-center-infrastructure"],
  },

  // ---------------- Containerized Data Center ----------------
  {
    slug: "40ft-container-data-center",
    category: "containerized-data-center",
    name: "40ft Container Data Center",
    shortName: "40ft Container DC",
    tagline: "Fully pre-integrated 40-foot containerized data center for rapid, large-scale deployment.",
    overview:
      "The Haisen 40ft Container Data Center is a complete, factory-built data center in a standard 40-foot ISO container shell, pre-installed with IT cabinets, power distribution, UPS, cooling, fire protection, security and monitoring — engineered for telecom, mining, oil & gas, edge computing and emergency deployment where speed and site independence matter.",
    keyFeatures: [
      "Complete IT + power + cooling integration inside a standard ISO container",
      "Reinforced, insulated container structure rated for outdoor deployment",
      "Redundant power distribution and UPS options",
      "Precision or liquid cooling options for higher density",
      "Rapid deployment — typically weeks from factory to site power-on",
      "Scalable — link multiple containers for larger capacity",
    ],
    specGroups: [
      {
        title: "Container Structure",
        specs: [
          { label: "Container Size", value: "40ft standard ISO (also available in 20ft)" },
          { label: "Insulation", value: "Thermal + acoustic insulated panel wall" },
          { label: "IP Rating", value: "IP55 (outdoor deployment)" },
        ],
      },
      {
        title: "IT & Power",
        specs: [
          { label: "IT Cabinets", value: "Configurable rack count per layout" },
          { label: "Power Distribution", value: "Intelligent PDU, modular UPS" },
          { label: "Cooling", value: "Precision air conditioning or liquid cooling option" },
        ],
      },
      {
        title: "Safety & Monitoring",
        specs: [
          { label: "Fire Protection", value: "Automatic gas suppression" },
          { label: "Security", value: "Access control, CCTV-ready" },
          { label: "Monitoring", value: "Remote DCIM-compatible monitoring" },
        ],
      },
    ],
    applications: ["Telecom network expansion", "Mining sites", "Oil & gas remote operations", "Edge computing", "Government / emergency data centers"],
    customizationOptions: ["Rack count and layout", "Power redundancy", "Cooling type", "Exterior paint / branding"],
    standards: ["CE", "RoHS", "ISO container structural standards"],
    faqs: [
      {
        question: "20ft vs 40ft container data center — which should I choose?",
        answer:
          "A 20ft container suits smaller IT loads or edge sites with limited space and typically holds fewer racks, while a 40ft container offers roughly double the internal footprint for higher rack counts, larger power/cooling plant, or walk-in maintenance aisles — the right choice depends on target IT load and available site space.",
      },
      {
        question: "Does Haisen provide containerized data centers?",
        answer:
          "Yes. Haisen manufactures 20ft and 40ft containerized data centers pre-integrated with IT cabinets, power distribution, UPS, cooling, fire protection and monitoring for telecom, mining, oil & gas, edge computing and government deployments.",
      },
      {
        question: "How fast can a container data center be deployed?",
        answer:
          "Because IT, power, cooling and safety systems are integrated and tested at the factory, on-site work is largely limited to foundation preparation, external power/network connection and commissioning — typically a matter of weeks rather than the months required for a conventional built data room.",
      },
    ],
    relatedProductSlugs: ["smart-micro-module", "intelligent-pdu", "modular-ups"],
    relatedSolutionSlugs: ["containerized-data-center", "edge-data-center"],
  },

  // ---------------- Cooling Solutions ----------------
  {
    slug: "precision-air-conditioner",
    category: "cooling-solutions",
    name: "Precision Air Conditioner",
    shortName: "Precision AC",
    tagline: "Close-control precision cooling for data center and telecom equipment rooms.",
    overview:
      "The Haisen Precision Air Conditioner provides tight temperature and humidity control for data halls and telecom rooms, with downflow or upflow air distribution and capacities suited to small equipment rooms through large data center white space.",
    keyFeatures: [
      "Precise temperature and humidity control",
      "Downflow / upflow air distribution options",
      "Variable-speed EC fans for energy efficiency",
      "Remote monitoring and alarm integration",
    ],
    specGroups: [
      {
        title: "Performance",
        specs: [
          { label: "Cooling Capacity", value: "7 kW – 150 kW per unit" },
          { label: "Air Distribution", value: "Downflow / Upflow" },
          { label: "Humidity Control", value: "±5% RH" },
        ],
      },
    ],
    applications: ["Data center white space", "Telecom equipment rooms", "Control rooms"],
    customizationOptions: ["Capacity", "Air distribution direction", "Refrigerant type"],
    standards: ["CE", "RoHS"],
    faqs: [
      {
        question: "What is a precision air conditioner?",
        answer:
          "A precision (close-control) air conditioner is designed specifically for IT environments, providing tighter temperature and humidity control, higher airflow per ton, and continuous duty-cycle operation compared to comfort air conditioning systems.",
      },
    ],
    relatedProductSlugs: ["in-row-cooling", "cdu", "liquid-cooling"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "liquid-cooling",
    category: "cooling-solutions",
    name: "Liquid Cooling Solution",
    shortName: "Liquid Cooling",
    tagline: "Cold plate liquid cooling for high-density AI and HPC compute racks.",
    overview:
      "Haisen's liquid cooling solution combines cold plate liquid cooling at the server level with a coolant distribution unit (CDU) managing primary and secondary loops, enabling data centers to cool high-density AI training and HPC racks beyond the practical limits of air cooling.",
    featured: true,
    keyFeatures: [
      "Cold plate direct-to-chip liquid cooling",
      "CDU-managed primary and secondary loop separation",
      "Integrated leak detection",
      "Compatible with high-density AI / GPU racks",
    ],
    specGroups: [
      {
        title: "System",
        specs: [
          { label: "Cooling Method", value: "Cold plate direct-to-chip" },
          { label: "Loop Design", value: "Primary (facility) / Secondary (rack) loop via CDU" },
          { label: "Leak Detection", value: "Integrated sensor-based detection" },
        ],
      },
    ],
    applications: ["AI training clusters", "HPC compute racks", "High-density GPU deployments"],
    customizationOptions: ["CDU capacity", "Loop configuration", "Rack manifold layout"],
    standards: ["CE", "RoHS"],
    faqs: [
      {
        question: "What is a CDU in liquid cooling?",
        answer:
          "A CDU (Coolant Distribution Unit) is the equipment that separates and manages the primary (facility) cooling loop from the secondary (rack/server) loop in a liquid cooling system, controlling coolant flow, temperature and pressure while isolating facility water from IT hardware.",
      },
      {
        question: "Does Haisen provide liquid cooling and CDU solutions?",
        answer:
          "Yes. Haisen provides cold plate liquid cooling systems with CDU-managed primary/secondary loops, leak detection and monitoring for AI and high-density compute deployments.",
      },
    ],
    relatedProductSlugs: ["cdu", "precision-air-conditioner"],
    relatedSolutionSlugs: ["liquid-cooling", "ai-data-center"],
  },
  {
    slug: "cdu",
    category: "cooling-solutions",
    name: "CDU — Coolant Distribution Unit",
    shortName: "CDU",
    tagline: "Coolant distribution unit managing primary and secondary liquid cooling loops.",
    overview:
      "The Haisen CDU manages coolant distribution between the facility (primary) loop and the rack-level (secondary) loop in a liquid cooling deployment, providing pumping, heat exchange, filtration, leak detection and monitoring in a single rack-mountable or standalone unit.",
    keyFeatures: [
      "Primary/secondary loop isolation via heat exchanger",
      "Redundant pumps for continuous operation",
      "Integrated filtration and leak detection",
      "Remote monitoring of flow, temperature and pressure",
    ],
    specGroups: [
      {
        title: "Performance",
        specs: [
          { label: "Cooling Capacity", value: "Up to several hundred kW per unit (model dependent)" },
          { label: "Pump Configuration", value: "N+1 redundant pumps" },
          { label: "Monitoring", value: "Flow, supply/return temperature, pressure, leak status" },
        ],
      },
    ],
    applications: ["AI / HPC data centers", "High-density colocation"],
    customizationOptions: ["Capacity", "Form factor (rack-mount / standalone)", "Redundancy level"],
    standards: ["CE", "RoHS"],
    faqs: [
      {
        question: "Why is a CDU needed instead of connecting facility water directly to servers?",
        answer:
          "A CDU isolates facility (primary) water — which can vary in quality and pressure — from the closed, controlled secondary loop that touches IT hardware, protecting servers from contamination and pressure fluctuations while enabling precise temperature control at the rack.",
      },
    ],
    relatedProductSlugs: ["liquid-cooling", "precision-air-conditioner"],
    relatedSolutionSlugs: ["liquid-cooling", "ai-data-center"],
  },

  // ---------------- Raised Floor ----------------
  {
    slug: "anti-static-raised-floor",
    category: "raised-floor",
    name: "Anti-Static Raised Floor",
    shortName: "Anti-Static Raised Floor",
    tagline: "Raised access flooring for airflow management and cable routing in data center white space.",
    overview:
      "Haisen anti-static raised floor panels provide an elevated, load-rated deck for underfloor air distribution and cable routing, with a static-dissipative surface finish suited to data center and control room environments.",
    keyFeatures: [
      "Static-dissipative HPL or PVC surface finish",
      "Steel or calcium sulphate core options",
      "Adjustable pedestal height",
      "High point-load and uniform-load rating",
    ],
    specGroups: [
      {
        title: "Panel Specification",
        specs: [
          { label: "Panel Size", value: "600 x 600 mm" },
          { label: "Core Material", value: "Steel-encased / calcium sulphate" },
          { label: "Load Rating", value: "Up to 1000 kg concentrated load (model dependent)" },
          { label: "Surface Resistance", value: "10^6–10^9 Ω (anti-static)" },
        ],
      },
    ],
    applications: ["Data center white space", "Control rooms", "Clean rooms"],
    customizationOptions: ["Panel core type", "Finish", "Pedestal height"],
    standards: ["CE", "RoHS"],
    faqs: [
      {
        question: "What is anti-static raised flooring used for in a data center?",
        answer:
          "Anti-static raised flooring creates a void beneath the data hall floor for underfloor air distribution and cable routing, while its static-dissipative surface reduces the risk of electrostatic discharge damaging sensitive IT equipment.",
      },
    ],
    relatedProductSlugs: ["cable-tray", "precision-air-conditioner"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },

  // ---------------- Cable Management ----------------
  {
    slug: "cable-tray",
    category: "cable-management",
    name: "Cable Tray",
    shortName: "Cable Tray",
    tagline: "Wire mesh and ladder cable trays for structured data center cable pathways.",
    overview:
      "Haisen cable trays provide structured, serviceable pathways for power and data cabling above racks or under raised floors, available in wire mesh and ladder-type construction for different load and cable-fill requirements.",
    keyFeatures: [
      "Wire mesh and ladder-type construction",
      "Tool-free or bolted section connectors",
      "Zinc-plated or hot-dip galvanized finish",
      "Modular splice, tee and elbow accessories",
    ],
    specGroups: [
      {
        title: "Construction",
        specs: [
          { label: "Type", value: "Wire mesh / Ladder" },
          { label: "Width", value: "100 – 600 mm" },
          { label: "Finish", value: "Zinc-plated / hot-dip galvanized" },
        ],
      },
    ],
    applications: ["Data center overhead cabling", "Telecom rooms", "Industrial cabling pathways"],
    customizationOptions: ["Width", "Finish", "Accessory set"],
    standards: ["CE", "RoHS"],
    faqs: [
      {
        question: "Wire mesh vs ladder cable tray — which is better for a data center?",
        answer:
          "Wire mesh tray is lightweight, easy to modify on site and well suited to structured data/fiber cabling, while ladder tray offers higher load capacity and better heat dissipation for heavier power cable runs — many data centers use both, segregated by cable type.",
      },
    ],
    relatedProductSlugs: ["anti-static-raised-floor", "network-cabinet"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },

  // ---------------- Energy Storage ----------------
  {
    slug: "battery-energy-storage-system",
    category: "energy-storage",
    name: "Battery Energy Storage System (BESS)",
    shortName: "BESS",
    tagline: "Containerized and cabinet-based battery energy storage for resilient site power.",
    overview:
      "The Haisen Battery Energy Storage System integrates battery racks, a power conversion system (PCS) and an energy management system (EMS) in cabinet or containerized form factors, supporting peak shaving, backup power and renewable energy integration for data centers and industrial sites.",
    keyFeatures: [
      "Cabinet or containerized form factor",
      "Integrated PCS and EMS",
      "Peak shaving and demand-charge management",
      "Renewable (solar) integration ready",
      "Remote monitoring and safety management",
    ],
    specGroups: [
      {
        title: "System",
        specs: [
          { label: "Configuration", value: "Battery cabinet or containerized ESS" },
          { label: "Components", value: "Battery racks, PCS, EMS, fire suppression" },
          { label: "Monitoring", value: "Remote EMS dashboard, alarm management" },
        ],
      },
    ],
    applications: ["Data center backup / peak shaving", "Industrial facilities", "Renewable energy integration sites"],
    customizationOptions: ["Energy capacity", "PCS rating", "Form factor (cabinet / container)"],
    standards: ["CE", "RoHS"],
    faqs: [
      {
        question: "What is a battery energy storage system used for in a data center?",
        answer:
          "A BESS can supplement or replace traditional UPS batteries, provide peak shaving to reduce demand charges, and store renewable energy for use during grid outages or high-tariff periods, improving both resilience and energy cost efficiency.",
      },
    ],
    relatedProductSlugs: ["solar-power-system", "modular-ups"],
    relatedSolutionSlugs: ["energy-storage", "critical-power"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

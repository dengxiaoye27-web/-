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
      "The Wandtung Rack PDU distributes utility or UPS power to IT equipment inside a cabinet. It is manufactured in basic, metered, monitored and switched variants, in single-phase and three-phase configurations, and is available in vertical (0U) and horizontal rack-mount formats for data center, telecom and industrial environments.",
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
    standards: ["Designed to IEC 60320 / IEC 60309 connector standards", "Certification available on request per project spec"],
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
        question: "Can Wandtung customize PDU outlet configuration?",
        answer:
          "Yes. Wandtung is a factory-direct manufacturer and configures outlet type, quantity, input plug, circuit breaker grouping and cable length to match each project's electrical and rack specification, including OEM/ODM branding.",
      },
    ],
    relatedProductSlugs: ["intelligent-pdu", "high-power-pdu", "network-cabinet", "schuko-pdu", "nema-pdu", "multi-function-pdu", "uk-pdu", "iec-pdu"],
    relatedSolutionSlugs: ["smart-power-distribution", "critical-power"],
  },
  {
    slug: "schuko-pdu",
    category: "power-distribution",
    name: "German Standard (Schuko) PDU",
    shortName: "Schuko PDU",
    tagline: "1U rack-mount PDU with German standard Schuko outlets for European and CEE-market cabinets.",
    overview:
      "The Wandtung Schuko PDU is a 1U rack-mount power distribution unit fitted with German standard (Schuko/CEE 7/3) outlets, an illuminated overload-protected power switch and an integrated surge protection module, built for European and CEE-market data center and telecom cabinets. It mounts horizontally or vertically, ships with a heavy-duty Schuko power cord, and is available in standard black or a custom orange housing.",
    featured: true,
    images: [
      "/products/schuko-pdu/01-main.png",
      "/products/schuko-pdu/08-spec-annotated.png",
      "/products/schuko-pdu/07-switch-detail.png",
      "/products/schuko-pdu/03-spd-protection.png",
      "/products/schuko-pdu/04-plug-cable.png",
      "/products/schuko-pdu/05-mounting-show.png",
      "/products/schuko-pdu/02-orange-series.png",
      "/products/schuko-pdu/06-overview-scene.png",
    ],
    keyFeatures: [
      "Eight German standard (Schuko/CEE 7/3) outlets",
      "Illuminated rocker power switch with automatic overload protection",
      "Integrated SPD surge protection module with fireproof shell",
      "Durable aluminum shell for 1U horizontal or vertical rack mounting",
      "16A Schuko power cord, 1.5mm² copper core, VDE-style plug shell",
      "Standard black or custom orange housing; OEM/ODM available",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "230V" },
          { label: "Rated Current", value: "16A" },
          { label: "Rated Power", value: "4000W" },
          { label: "Rated Frequency", value: "50 Hz" },
        ],
      },
      {
        title: "Input / Output",
        specs: [
          { label: "Input Plug", value: "16A Schuko (CEE 7/7) angled plug" },
          { label: "Output Sockets", value: "8 × German standard Schuko (CEE 7/3)" },
          { label: "Cable", value: "1.5mm² copper core, VDE-style shell, custom lengths available" },
        ],
      },
      {
        title: "Mechanical & Protection",
        specs: [
          { label: "Mounting", value: "1U rack, vertical or horizontal" },
          { label: "Housing Material", value: "Aluminum alloy shell" },
          { label: "Housing Color", value: "Black (standard) / Orange (custom)" },
          { label: "Protection", value: "Illuminated overload switch, SPD surge protection, fireproof shell" },
        ],
      },
    ],
    applications: [
      "European and CEE-market data center racks",
      "Telecom equipment rooms in Schuko-standard regions",
      "Colocation cabinets",
      "Industrial and network control cabinets",
    ],
    customizationOptions: [
      "Housing color (black / orange / custom)",
      "Outlet count and cable length",
      "Input plug and cord length",
      "Custom branding / labeling",
      "OEM / ODM packaging",
    ],
    standards: ["Designed to CEE 7/3 (Schuko) and VDE connector standards", "Certification available on request per project spec"],
    faqs: [
      {
        question: "What is a Schuko PDU and where is it used?",
        answer:
          "A Schuko PDU is a rack power distribution unit fitted with German standard (Schuko/CEE 7/3) outlets, the standard socket type used across Germany and much of continental Europe. It is used to distribute rack power to IT equipment fitted with Schuko-style power cords.",
      },
      {
        question: "Does the Schuko PDU include surge protection?",
        answer:
          "Yes. Each unit includes an integrated SPD (surge protection device) module with a fireproof shell, alongside an illuminated rocker switch with automatic overload protection.",
      },
      {
        question: "Can the housing color or outlet layout be customized?",
        answer:
          "Yes. Wandtung is a factory-direct manufacturer and offers the Schuko PDU in standard black or a custom orange housing, with outlet count, cable length and branding configured per project, including OEM/ODM.",
      },
    ],
    relatedProductSlugs: ["pdu", "intelligent-pdu", "network-cabinet"],
    relatedSolutionSlugs: ["smart-power-distribution", "critical-power"],
  },
  {
    slug: "nema-pdu",
    category: "power-distribution",
    name: "American Standard (NEMA) PDU",
    shortName: "NEMA PDU",
    tagline: "1U rack-mount PDU with US standard NEMA 5-15R outlets for North American cabinets.",
    overview:
      "The Wandtung NEMA PDU is a 1U rack-mount power distribution unit fitted with US standard NEMA 5-15R outlets, a dual-pole illuminated power switch under a protective cover and an integrated SPD surge protection module in a fire-retardant shell, built for North American data center and telecom cabinets. It uses a 99.9% pure red copper busbar and a heavy-duty 1.5mm aluminum enclosure, ships with a NEMA 5-15P power cord, and is available in standard black or a custom orange housing.",
    featured: true,
    images: [
      "/products/nema-pdu/01-main.png",
      "/products/nema-pdu/02-hero.png",
      "/products/nema-pdu/03-outlet-count.png",
      "/products/nema-pdu/04-spd-protection.png",
      "/products/nema-pdu/05-copper-busbar.png",
      "/products/nema-pdu/06-aluminum-shell.png",
      "/products/nema-pdu/07-copper-core-cable.png",
      "/products/nema-pdu/08-input-plugs.png",
      "/products/nema-pdu/09-orange-series.png",
    ],
    keyFeatures: [
      "Eight US standard NEMA 5-15R outlets, UL-listed style",
      "Dual-pole illuminated power switch under a protective safety cover",
      "Integrated SPD surge protection module with fire-retardant shell",
      "99.9% pure red copper busbar for low impedance and heat rise",
      "1.5mm heavy-duty aluminum shell, flame-retardant and impact-resistant",
      "NEMA 5-15P power cord with 1.5mm² heavy-duty copper core, UL compliant",
      "Standard black or custom orange housing; OEM/ODM available",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "125V" },
          { label: "Rated Current", value: "15A" },
          { label: "Rated Frequency", value: "60 Hz" },
        ],
      },
      {
        title: "Input / Output",
        specs: [
          { label: "Input Plug", value: "NEMA 5-15P" },
          { label: "Output Sockets", value: "8 × NEMA 5-15R, UL-listed style" },
          { label: "Cable", value: "1.5mm² copper core, UL-compliant, custom lengths available" },
        ],
      },
      {
        title: "Mechanical & Protection",
        specs: [
          { label: "Mounting", value: "1U rack, horizontal" },
          { label: "Housing Material", value: "1.5mm heavy-duty aluminum shell" },
          { label: "Busbar Material", value: "99.9% pure red copper" },
          { label: "Housing Color", value: "Black (standard) / Orange (custom)" },
          { label: "Protection", value: "Dual-pole illuminated switch with safety cover, SPD surge protection, fire-retardant shell" },
        ],
      },
    ],
    applications: [
      "North American data center racks",
      "US-standard telecom equipment rooms",
      "Colocation cabinets",
      "Industrial and network control cabinets",
    ],
    customizationOptions: [
      "Housing color (black / orange / custom)",
      "Outlet count and cable length",
      "Input plug and cord length (NEMA, IEC, Schuko, UK, AU, CN and other regional standards)",
      "Custom branding / labeling",
      "OEM / ODM packaging",
    ],
    standards: ["Designed to NEMA 5-15 connector standards, UL-listed style construction", "Certification available on request per project spec"],
    faqs: [
      {
        question: "What is a NEMA PDU and where is it used?",
        answer:
          "A NEMA PDU is a rack power distribution unit fitted with US standard NEMA 5-15R outlets, the standard socket type used across North America. It is used to distribute rack power to IT equipment fitted with NEMA 5-15P power cords.",
      },
      {
        question: "Does the NEMA PDU include surge protection?",
        answer:
          "Yes. Each unit includes an integrated SPD (surge protection device) module with a fire-retardant shell, alongside a dual-pole illuminated switch protected by a hinged safety cover.",
      },
      {
        question: "Can the housing color or input plug be customized?",
        answer:
          "Yes. Wandtung is a factory-direct manufacturer and offers the NEMA PDU in standard black or a custom orange housing, with the input plug configurable to NEMA, IEC, Schuko, UK, AU, CN and other regional standards per project, including OEM/ODM.",
      },
    ],
    relatedProductSlugs: ["pdu", "schuko-pdu", "intelligent-pdu"],
    relatedSolutionSlugs: ["smart-power-distribution", "critical-power"],
  },
  {
    slug: "multi-function-pdu",
    category: "power-distribution",
    name: "Multi-Function Universal Socket PDU",
    shortName: "Multi-Function PDU",
    tagline: "1U rack PDU with universal multi-standard sockets and a 360° rotatable mounting bracket.",
    overview:
      "The Wandtung Multi-Function PDU is a 1U, 19-inch rack power strip fitted with six universal multi-standard sockets, a dual power switch and an integrated SPD surge protection module with a green LED safety indicator. A 360° rotatable, tool-free heavy-duty steel mounting bracket allows flexible orientation in the rack, while child-safety shutters rated to 75N add protection in mixed-use environments.",
    featured: true,
    images: [
      "/products/multi-function-pdu/01-main.jpg",
      "/products/multi-function-pdu/04-features-overview.jpg",
      "/products/multi-function-pdu/02-rotating-bracket.jpg",
      "/products/multi-function-pdu/03-dimensions.jpg",
      "/products/multi-function-pdu/05-data-center-scene.jpg",
    ],
    keyFeatures: [
      "Six universal multi-standard sockets accepting common 2-pin and 3-pin plug types",
      "Dual power switch with SPD surge protection and green LED safety indicator",
      "360° rotatable, tool-free heavy-duty steel mounting bracket",
      "1.5mm² copper core cable for stable high-current transmission",
      "Child safety shutters rated to 75N resistance",
      "19-inch 1U rack mount; OEM/ODM available",
    ],
    specGroups: [
      {
        title: "Structure & Dimensions",
        specs: [
          { label: "Mounting", value: "19-inch, 1U rack" },
          { label: "Overall Width", value: "483 mm" },
          { label: "Mounting Hole Span", value: "436 mm" },
          { label: "Height", value: "45 mm" },
        ],
      },
      {
        title: "Electrical & Protection",
        specs: [
          { label: "Output Sockets", value: "6 × universal multi-standard sockets" },
          { label: "Switch", value: "Dual power switch, illuminated" },
          { label: "Surge Protection", value: "Integrated SPD with green LED indicator" },
          { label: "Cable", value: "1.5mm² copper core" },
          { label: "Child Safety", value: "Shutters rated to 75N resistance" },
        ],
      },
      {
        title: "Mounting",
        specs: [
          { label: "Bracket", value: "360° rotatable, tool-free installation" },
          { label: "Bracket Material", value: "Heavy-duty steel" },
        ],
      },
    ],
    applications: [
      "Data center IT racks",
      "Multi-region equipment rooms requiring mixed plug compatibility",
      "Telecom cabinets",
      "Server rooms and network closets",
    ],
    customizationOptions: [
      "Outlet count and layout",
      "Input plug and cable length",
      "Bracket orientation / mounting kit",
      "Custom branding / labeling",
      "OEM / ODM packaging",
    ],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "What does 'universal socket' mean on this PDU?",
        answer:
          "Each outlet on the Multi-Function PDU is designed to accept common 2-pin and 3-pin plug types, so a single unit can serve equipment fitted with different regional power cords without needing adapters.",
      },
      {
        question: "What is the 360° rotatable bracket for?",
        answer:
          "The heavy-duty steel mounting bracket rotates a full 360° and installs without tools, letting the PDU be oriented to fit different rack layouts and cable routing needs.",
      },
      {
        question: "Does it include surge protection?",
        answer:
          "Yes. The unit has an integrated SPD (surge protection device) module with a green LED indicator, alongside a dual power switch and child-safety outlet shutters rated to 75N.",
      },
    ],
    relatedProductSlugs: ["pdu", "schuko-pdu", "nema-pdu"],
    relatedSolutionSlugs: ["smart-power-distribution", "critical-power"],
  },
  {
    slug: "uk-pdu",
    category: "power-distribution",
    name: "UK Standard (BS1363) PDU",
    shortName: "UK PDU",
    tagline: "1U rack-mount PDU with UK standard BS1363 outlets for British and CEE-market cabinets.",
    overview:
      "The Wandtung UK PDU is a 1U rack-mount power distribution unit fitted with UK standard BS1363 outlets, a double-pole illuminated switch under a dust-proof cover, an integrated circuit breaker and an SPD surge protection module with a green LED indicator, built for British and CEE-market data center and telecom cabinets. It uses a 99.9% pure red copper busbar and a heavy-duty 1.5mm aluminum enclosure, ships with a 13A-rated power cord, and is available with 6, 8, 10 or 12 outlets and custom input plug types.",
    featured: true,
    images: [
      "/products/uk-pdu/01-main.png",
      "/products/uk-pdu/02-overview.png",
      "/products/uk-pdu/10-server-room-scene.png",
      "/products/uk-pdu/03-double-pole-spd.png",
      "/products/uk-pdu/04-copper-busbar.png",
      "/products/uk-pdu/05-aluminum-shell.png",
      "/products/uk-pdu/06-copper-core-cable.png",
      "/products/uk-pdu/07-custom-outlet-qty.png",
      "/products/uk-pdu/08-custom-plug-types.png",
      "/products/uk-pdu/09-global-socket-standards.png",
    ],
    keyFeatures: [
      "UK standard BS1363 outlets, 6/8/10/12-outlet configurations",
      "Double-pole illuminated switch under a dust-proof protective cover, cuts live and neutral simultaneously",
      "Integrated circuit breaker and SPD surge protection with green LED indicator",
      "99.9% pure red copper busbar for low impedance and heat rise",
      "1.5mm heavy-duty aluminum shell, flame-retardant and impact-resistant",
      "13A-rated power cord, 1.5mm² heavy-duty copper core, 2500W capacity, heat resistant",
      "Custom input plug types (BS1363, NEMA, Schuko, AS3112, IEC C14/C20); OEM/ODM available",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "230V" },
          { label: "Rated Current", value: "13A" },
          { label: "Rated Power", value: "2500W" },
          { label: "Rated Frequency", value: "50 Hz" },
        ],
      },
      {
        title: "Input / Output",
        specs: [
          { label: "Input Plug", value: "BS1363 (custom NEMA, Schuko, AS3112, IEC C14/C20 available)" },
          { label: "Output Sockets", value: "6 / 8 / 10 / 12 × BS1363 outlets" },
          { label: "Cable", value: "1.5mm² copper core, heat resistant, custom lengths available" },
        ],
      },
      {
        title: "Mechanical & Protection",
        specs: [
          { label: "Mounting", value: "1U rack, horizontal" },
          { label: "Housing Material", value: "1.5mm heavy-duty aluminum shell" },
          { label: "Busbar Material", value: "99.9% pure red copper" },
          { label: "Protection", value: "Double-pole illuminated switch with dust-proof cover, integrated circuit breaker, SPD surge protection" },
        ],
      },
    ],
    applications: [
      "UK and CEE-market data center racks",
      "British-standard telecom equipment rooms",
      "Colocation cabinets",
      "Industrial and network control cabinets",
    ],
    customizationOptions: [
      "Outlet quantity (6 / 8 / 10 / 12)",
      "Input plug and cord length (BS1363, NEMA, Schuko, AS3112, IEC C14/C20 and other regional standards)",
      "Custom branding / labeling",
      "OEM / ODM packaging",
    ],
    standards: ["Designed to BS1363 connector standards", "Certification available on request per project spec"],
    faqs: [
      {
        question: "What is a UK PDU and where is it used?",
        answer:
          "A UK PDU is a rack power distribution unit fitted with BS1363 outlets, the standard socket type used across the United Kingdom and several CEE-market countries. It is used to distribute rack power to IT equipment fitted with BS1363-style power cords.",
      },
      {
        question: "Does the UK PDU include surge protection?",
        answer:
          "Yes. Each unit includes an integrated SPD (surge protection device) module with a green LED indicator and an integrated circuit breaker, alongside a double-pole illuminated switch under a dust-proof cover that cuts both live and neutral simultaneously.",
      },
      {
        question: "Can the outlet quantity or input plug be customized?",
        answer:
          "Yes. Wandtung is a factory-direct manufacturer and offers the UK PDU with 6, 8, 10 or 12 outlets, with the input plug configurable to BS1363, NEMA, Schuko, AS3112, IEC C14/C20 and other regional standards per project, including OEM/ODM.",
      },
    ],
    relatedProductSlugs: ["pdu", "schuko-pdu", "nema-pdu"],
    relatedSolutionSlugs: ["smart-power-distribution", "critical-power"],
  },
  {
    slug: "iec-pdu",
    category: "power-distribution",
    name: "IEC Standard PDU (C13/C19)",
    shortName: "IEC PDU",
    tagline: "1U rack-mount PDU with IEC C13 and C19 outlets for global data center cabinets.",
    overview:
      "The Wandtung IEC PDU is a 1U rack-mount power distribution unit fitted with IEC 60320 C13 and C19 outlets, an integrated illuminated power switch and automatic overload protection, built for data center and telecom cabinets worldwide. It mounts vertically (0U) or horizontally, uses a heavy-duty copper core power cord rated to 1875W, and installs with built-in mounting ears for a secure, versatile fit.",
    featured: true,
    images: [
      "/products/iec-pdu/01-main.png",
      "/products/iec-pdu/02-spec-annotated.png",
      "/products/iec-pdu/03-c13-c19-detail.png",
      "/products/iec-pdu/04-copper-busbar.png",
      "/products/iec-pdu/05-aluminum-shell.png",
      "/products/iec-pdu/06-copper-core-cable.png",
      "/products/iec-pdu/07-mounting-scene.png",
    ],
    keyFeatures: [
      "Mixed IEC 60320 C13 and C19 outlets (e.g. 6× C13 and 2× C19) for server and network equipment",
      "Illuminated power switch with automatic overload protection",
      "Robust black metal housing for vertical (0U) or horizontal rack mounting",
      "Built-in mounting ears for secure, versatile installation",
      "14 AWG / 2.08mm² heavy-duty copper core cable, 1875W capacity, UL-standard construction",
      "OEM/ODM available",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "100–125V / 200–250V" },
          { label: "Rated Power", value: "1875W" },
          { label: "Rated Frequency", value: "50/60 Hz" },
        ],
      },
      {
        title: "Input / Output",
        specs: [
          { label: "Output Sockets", value: "IEC 60320 C13 and C19, custom mix available" },
          { label: "Cable", value: "14 AWG / 2.08mm² copper core, UL-standard construction" },
        ],
      },
      {
        title: "Mechanical & Protection",
        specs: [
          { label: "Mounting", value: "0U vertical or horizontal rack, built-in mounting ears" },
          { label: "Housing Material", value: "Robust black metal housing" },
          { label: "Protection", value: "Illuminated switch with automatic overload protection" },
        ],
      },
    ],
    applications: [
      "Data center IT racks worldwide",
      "Server rooms requiring mixed C13/C19 equipment power cords",
      "Telecom and network equipment cabinets",
      "Colocation cabinets",
    ],
    customizationOptions: [
      "C13/C19 outlet count and mix",
      "Input plug and cable length",
      "Mounting orientation",
      "Custom branding / labeling",
      "OEM / ODM packaging",
    ],
    standards: ["Designed to IEC 60320 connector standards", "Certification available on request per project spec"],
    faqs: [
      {
        question: "What is the difference between a C13 and a C19 outlet?",
        answer:
          "C13 is the standard IEC outlet used by most servers, switches and network equipment power cords; C19 is a higher-current outlet used by equipment with heavier power draw, such as blade enclosures and some UPS units. Mixing both on one PDU lets a single unit serve equipment of both power cord types.",
      },
      {
        question: "Can the IEC PDU be mounted vertically in the rack?",
        answer:
          "Yes. The unit is designed for either 0U vertical mounting along the side of the rack or horizontal 1U mounting, with built-in mounting ears for a secure fit either way.",
      },
      {
        question: "Can Wandtung customize the C13/C19 outlet mix?",
        answer:
          "Yes. Wandtung is a factory-direct manufacturer and configures the C13/C19 outlet count and mix, input plug and cable length to match each project's rack and equipment specification, including OEM/ODM.",
      },
    ],
    relatedProductSlugs: ["pdu", "schuko-pdu", "uk-pdu"],
    relatedSolutionSlugs: ["smart-power-distribution", "critical-power"],
  },
  {
    slug: "intelligent-pdu",
    category: "power-distribution",
    name: "Intelligent PDU",
    shortName: "Intelligent PDU",
    tagline: "Network-managed rack power distribution with monitoring, metering and remote switching.",
    overview:
      "The Wandtung Intelligent PDU is a network-managed power distribution unit built for data centers that require visibility and control at the outlet level. It combines current, voltage, power and energy monitoring, temperature & humidity sensing, and remote outlet switching, accessible via SNMP, Modbus, RS485 and a web management interface.",
    featured: true,
    images: [
      "/products/intelligent-pdu/01-main.png",
      "/products/intelligent-pdu/02-lcd-monitoring.png",
      "/products/intelligent-pdu/03-power-analytics.jpg",
      "/products/intelligent-pdu/04-anti-shedding-sockets.png",
      "/products/intelligent-pdu/05-surge-protection.png",
    ],
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
    standards: ["Designed to IEC 60320 connector standards", "SNMP MIB-II compliant", "Certification available on request per project spec"],
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
        question: "Does Wandtung manufacture intelligent PDUs?",
        answer:
          "Yes. Wandtung designs and manufactures intelligent PDUs with outlet-level monitoring, SNMP/Modbus/RS485 connectivity and remote switching for data center, telecom and industrial customers worldwide, including OEM/ODM programs.",
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
      "The Wandtung High Power PDU is designed for high-density racks such as AI training clusters, GPU servers and blade enclosures, supporting three-phase input up to 63A and high outlet counts with reinforced busbar and thermal design.",
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
    standards: ["Designed to IEC 60309 connector standards", "Certification available on request per project spec"],
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
  {
    slug: "metered-pdu",
    category: "power-distribution",
    name: "Metered PDU",
    shortName: "Metered PDU",
    tagline: "Rack PDU with local current and voltage display for on-site load visibility.",
    overview:
      "The Wandtung Metered PDU adds a built-in digital display to a standard rack PDU, showing current and/or voltage draw at a glance without requiring network access — a straightforward upgrade for sites that need load visibility during installation and maintenance but don't require remote monitoring.",
    keyFeatures: [
      "Local LCD/LED display of current and voltage",
      "Single-phase and three-phase configurations",
      "No network dependency for basic load readings",
      "Same rugged busbar and outlet options as the base Rack PDU",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "200–250V / 380–415V" },
          { label: "Rated Current", value: "16A / 32A / 63A" },
          { label: "Display", value: "Local digital current/voltage meter" },
        ],
      },
      {
        title: "Mechanical",
        specs: [
          { label: "Mounting", value: "0U vertical / horizontal" },
          { label: "Outlet Options", value: "IEC C13/C19, country-specific" },
        ],
      },
    ],
    applications: ["Server rooms without DCIM integration", "Installation and commissioning load checks", "Small IT closets"],
    customizationOptions: ["Outlet type and quantity", "Display placement", "Input plug"],
    standards: ["Designed to IEC 60320 connector standards", "Certification available on request per project spec"],
    faqs: [
      {
        question: "Is a metered PDU enough, or do I need a monitored PDU?",
        answer:
          "A metered PDU is sufficient if on-site staff only need an occasional visual load check. If you need to see power data remotely without a site visit, a monitored PDU is the right upgrade — a metered PDU has no network connectivity.",
      },
    ],
    relatedProductSlugs: ["pdu", "intelligent-pdu"],
    relatedSolutionSlugs: ["smart-power-distribution"],
  },
  {
    slug: "monitored-pdu",
    category: "power-distribution",
    name: "Monitored PDU",
    shortName: "Monitored PDU",
    tagline: "Network-connected PDU reporting current, voltage, power and energy data remotely.",
    overview:
      "The Wandtung Monitored PDU reports current, voltage, power and energy consumption over the network via SNMP or Modbus, giving facility and IT teams remote visibility into rack-level power usage without on-site checks — without the outlet-switching capability of a fully intelligent PDU.",
    keyFeatures: [
      "Remote current, voltage, power and energy monitoring",
      "SNMP and Modbus RTU/TCP connectivity",
      "Web-based monitoring interface",
      "Threshold alarm notifications",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "200–250V / 380–415V" },
          { label: "Rated Current", value: "16A / 32A / 63A" },
        ],
      },
      {
        title: "Monitoring & Communication",
        specs: [
          { label: "Protocols", value: "SNMP v1/v2c/v3, Modbus RTU/TCP" },
          { label: "Monitoring Points", value: "Voltage, current, power, energy" },
          { label: "Switching", value: "Not included — see Switched PDU" },
        ],
      },
    ],
    applications: ["Multi-tenant colocation billing/reporting", "PUE tracking", "Remote facility monitoring"],
    customizationOptions: ["Outlet count and type", "Communication protocol", "Alarm thresholds"],
    standards: ["Designed to IEC 60320 connector standards", "SNMP MIB-II compliant", "Certification available on request per project spec"],
    faqs: [
      {
        question: "Metered PDU vs monitored PDU — what's the difference?",
        answer:
          "A metered PDU only shows readings locally on a built-in display. A monitored PDU adds network connectivity so those readings — and often energy consumption over time — can be viewed remotely without a site visit.",
      },
    ],
    relatedProductSlugs: ["intelligent-pdu", "switched-pdu", "pdu"],
    relatedSolutionSlugs: ["smart-power-distribution"],
  },
  {
    slug: "switched-pdu",
    category: "power-distribution",
    name: "Switched PDU",
    shortName: "Switched PDU",
    tagline: "Monitored PDU with remote, individually addressable outlet switching.",
    overview:
      "The Wandtung Switched PDU includes everything a monitored PDU offers — remote current, voltage, power and energy visibility — plus individually addressable outlet control, so administrators can remotely power-cycle a single device or sequence a rack's power-up without a site visit.",
    keyFeatures: [
      "Remote monitoring at unit and outlet level",
      "Individually addressable outlet on/off control",
      "Sequenced power-up to manage inrush current",
      "SNMP, Modbus and web management",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "200–250V / 380–415V" },
          { label: "Rated Current", value: "16A / 32A / 63A" },
        ],
      },
      {
        title: "Monitoring & Control",
        specs: [
          { label: "Switching", value: "Per-outlet remote on/off, sequenced start" },
          { label: "Protocols", value: "SNMP, Modbus RTU/TCP, web interface" },
        ],
      },
    ],
    applications: ["Unattended / remote sites needing remote reboot", "Sequenced rack power-up", "Edge data centers"],
    customizationOptions: ["Outlet count and grouping", "Communication protocol", "Sequencing profile"],
    standards: ["Designed to IEC 60320 connector standards", "SNMP MIB-II compliant", "Certification available on request per project spec"],
    faqs: [
      {
        question: "When do I need a switched PDU instead of a monitored PDU?",
        answer:
          "Choose a switched PDU whenever you need to remotely power-cycle equipment or sequence rack power-up — for example, unattended edge sites where a hung server would otherwise require a truck roll to reset.",
      },
    ],
    relatedProductSlugs: ["intelligent-pdu", "monitored-pdu", "ats-pdu"],
    relatedSolutionSlugs: ["smart-power-distribution", "edge-data-center"],
  },
  {
    slug: "three-phase-pdu",
    category: "power-distribution",
    name: "Three Phase PDU",
    shortName: "Three Phase PDU",
    tagline: "Balanced three-phase power distribution for higher-capacity racks.",
    overview:
      "The Wandtung Three Phase PDU distributes three-phase input across balanced single-phase outlet groups, giving racks with moderate-to-high power draw a higher-capacity feed than a single-phase PDU can provide, while keeping phase loading even across L1/L2/L3.",
    keyFeatures: [
      "Three-phase input with balanced single-phase outlet grouping",
      "Per-phase current display on monitored variants",
      "Delta and wye (star) configurations available",
      "0U vertical mounting for high outlet counts",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "380–415V three-phase" },
          { label: "Rated Current", value: "16A / 32A per phase" },
          { label: "Configuration", value: "Delta or Wye (star)" },
        ],
      },
      {
        title: "Mechanical",
        specs: [
          { label: "Mounting", value: "0U vertical" },
          { label: "Outlet Options", value: "IEC C13/C19, custom" },
        ],
      },
    ],
    applications: ["Mixed-load racks above single-phase capacity", "Colocation cage-level distribution", "Enterprise server rooms"],
    customizationOptions: ["Phase configuration", "Outlet mix per phase", "Monitoring level"],
    standards: ["Designed to IEC 60309 connector standards", "Certification available on request per project spec"],
    faqs: [
      {
        question: "Why use a three-phase PDU instead of multiple single-phase PDUs?",
        answer:
          "A three-phase PDU delivers more total capacity through a single, higher-capacity circuit and simplifies balanced load planning across phases, rather than requiring separate single-phase circuits and PDUs to reach the same total power.",
      },
    ],
    relatedProductSlugs: ["high-power-pdu", "intelligent-pdu"],
    relatedSolutionSlugs: ["critical-power", "ai-data-center"],
  },
  {
    slug: "ats-pdu",
    category: "power-distribution",
    name: "ATS PDU",
    shortName: "ATS PDU",
    tagline: "Rack PDU with a built-in automatic transfer switch for dual-feed redundancy.",
    overview:
      "The Wandtung ATS PDU combines a rack PDU with an automatic transfer switch, accepting two independent power inputs — such as utility and generator, or A/B utility feeds — and automatically switching to the live source if the primary feed fails, protecting single-corded equipment without requiring a separate transfer switch panel.",
    keyFeatures: [
      "Dual power input with automatic failover",
      "Protects single-corded equipment with feed-level redundancy",
      "Transfer time fast enough for most IT power supplies to ride through",
      "Remote monitoring available on intelligent variants",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "200–250V" },
          { label: "Rated Current", value: "16A / 32A" },
          { label: "Transfer Time", value: "Typically under 1 cycle to a few ms" },
        ],
      },
      {
        title: "Redundancy",
        specs: [
          { label: "Inputs", value: "Dual, independent A/B feeds" },
          { label: "Switching", value: "Automatic, source-loss triggered" },
        ],
      },
    ],
    applications: ["Single-corded equipment needing feed redundancy", "Telecom equipment rooms with dual feeds", "Racks fed from utility + generator"],
    customizationOptions: ["Outlet count and type", "Transfer sensitivity", "Monitoring level"],
    standards: ["Designed to IEC 60309 connector standards", "Certification available on request per project spec"],
    faqs: [
      {
        question: "What is an ATS PDU used for in telecom sites?",
        answer:
          "An ATS (automatic transfer switch) PDU automatically switches load between two independent power feeds — typically utility and generator, or dual utility feeds — without manual intervention, maintaining uptime if one feed fails.",
      },
      {
        question: "Do I need an ATS PDU if my equipment already has dual power supplies?",
        answer:
          "Dual-corded equipment can typically be fed from two separate standard PDUs directly. An ATS PDU is most valuable for single-corded equipment, which otherwise has no way to benefit from a redundant feed.",
      },
    ],
    relatedProductSlugs: ["sts", "automatic-transfer-switch", "pdu"],
    relatedSolutionSlugs: ["critical-power", "telecom-data-center"],
  },
  {
    slug: "sts",
    category: "power-distribution",
    name: "STS (Static Transfer Switch)",
    shortName: "STS",
    tagline: "Solid-state transfer switch for near-instantaneous switching between two power sources.",
    overview:
      "The Wandtung STS (Static Transfer Switch) uses solid-state switching to transfer load between two independent power sources in a fraction of a cycle — far faster than a mechanical ATS — protecting loads that cannot tolerate even momentary interruption, typically deployed ahead of PDUs or UPS distribution in critical facilities.",
    keyFeatures: [
      "Solid-state switching, sub-cycle transfer time",
      "Dual independent source inputs",
      "Continuous source-quality monitoring on both feeds",
      "Panel or rack-mount form factors",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "200–415V" },
          { label: "Rated Current", value: "Up to 400A (model dependent)" },
          { label: "Transfer Time", value: "Sub-cycle (typically <4 ms)" },
        ],
      },
      {
        title: "Monitoring",
        specs: [
          { label: "Source Monitoring", value: "Continuous voltage/frequency quality checks on both feeds" },
          { label: "Communication", value: "SNMP, Modbus, dry contact alarms" },
        ],
      },
    ],
    applications: ["Facilities requiring zero-interruption transfer", "Upstream of critical PDU/UPS distribution", "Data centers with dual utility feeds"],
    customizationOptions: ["Current rating", "Form factor (panel / rack-mount)", "Monitoring package"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "What is the difference between an ATS and an STS?",
        answer:
          "An ATS (automatic transfer switch) mechanically switches load between two power sources, typically with a brief transfer time, while an STS (static transfer switch) uses solid-state switching for near-instantaneous transfer, used where even momentary interruption is unacceptable.",
      },
    ],
    relatedProductSlugs: ["ats-pdu", "automatic-transfer-switch", "modular-ups"],
    relatedSolutionSlugs: ["critical-power"],
  },
  {
    slug: "automatic-transfer-switch",
    category: "power-distribution",
    name: "Automatic Transfer Switch",
    shortName: "ATS",
    tagline: "Panel-level automatic transfer switch for facility and generator failover.",
    overview:
      "The Wandtung Automatic Transfer Switch is a panel-level device that automatically transfers a facility or distribution board load between a primary source and a backup source — typically utility and standby generator — without manual intervention, sized for branch, panel or facility-level loads rather than a single rack.",
    keyFeatures: [
      "Automatic source-loss detection and transfer",
      "Generator start signal output",
      "Manual bypass/override for maintenance",
      "Facility and panel-level current ratings",
    ],
    specGroups: [
      {
        title: "Electrical Parameters",
        specs: [
          { label: "Rated Voltage", value: "380–415V three-phase" },
          { label: "Rated Current", value: "100A – 3000A (model dependent)" },
          { label: "Transfer Time", value: "Seconds (mechanical transfer, generator-start compatible)" },
        ],
      },
      {
        title: "Control",
        specs: [
          { label: "Control Logic", value: "Automatic source-loss detection, generator start signal" },
          { label: "Bypass", value: "Manual bypass/isolation for maintenance" },
        ],
      },
    ],
    applications: ["Facility/generator failover", "Distribution board level redundancy", "Data center site power backup"],
    customizationOptions: ["Current rating", "Enclosure type", "Control/monitoring package"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "How is an automatic transfer switch different from an ATS PDU?",
        answer:
          "A panel-level automatic transfer switch handles facility, distribution board or generator-level failover for a whole branch of the electrical system, while an ATS PDU is a rack-mounted device that applies the same automatic-switching principle to a single rack's power feed.",
      },
    ],
    relatedProductSlugs: ["sts", "ats-pdu", "modular-ups"],
    relatedSolutionSlugs: ["critical-power"],
  },

  // ---------------- UPS Systems ----------------
  {
    slug: "rack-mount-ups",
    category: "ups-systems",
    name: "Rack Mount UPS",
    shortName: "Rack Mount UPS",
    tagline: "Online double-conversion UPS for rack-mounted deployment in data center and telecom environments.",
    overview:
      "The Wandtung Rack Mount UPS is a double-conversion online UPS packaged in a standard 19-inch rack format, providing clean, regulated backup power for IT and network equipment with flexible battery run-time configurations.",
    featured: true,
    images: [
      "/products/rack-mount-ups/01-main.jpg",
      "/products/rack-mount-ups/02-banner.jpg",
      "/products/rack-mount-ups/03-lcd-panel.jpg",
      "/products/rack-mount-ups/04-rear-interfaces.jpg",
      "/products/rack-mount-ups/05-remote-monitoring.jpg",
      "/products/rack-mount-ups/06-data-center-scene.jpg",
    ],
    keyFeatures: [
      "True online double-conversion topology",
      "Rack-mount 2U–6U formats",
      "LCD display panel with real-time input/output/battery/load monitoring",
      "Extended battery pack options for longer runtime",
      "RS232 standard, expandable via smart card slot to RS485, dry contact or SNMP",
      "Remote monitoring via SNMP / RS232 / mobile app with instant power outage alerts",
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
    standards: ["Designed to IEC 62040 UPS performance standards", "Certification available on request per project spec"],
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
      "The Wandtung Modular UPS uses hot-swappable power modules within a common frame, allowing capacity to scale with IT load growth and redundancy (N+1/N+X) to be built in without oversizing day-one investment.",
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
    standards: ["Designed to IEC 62040 UPS performance standards", "Certification available on request per project spec"],
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
  {
    slug: "tower-ups",
    category: "ups-systems",
    name: "Tower UPS",
    shortName: "Tower UPS",
    tagline: "Free-standing online UPS for server rooms and small equipment areas without a rack.",
    overview:
      "The Wandtung Tower UPS delivers the same online double-conversion protection as the rack mount range in a free-standing tower enclosure, suited to server rooms, retail back-offices and equipment areas that don't use a 19-inch rack.",
    keyFeatures: [
      "True online double-conversion topology",
      "Free-standing tower enclosure",
      "Optional rack-mount conversion kit on select models",
      "LCD status panel and audible alarms",
    ],
    specGroups: [
      {
        title: "Power",
        specs: [
          { label: "Power Capacity", value: "1 kVA – 10 kVA" },
          { label: "Input Voltage", value: "220/230/240V single-phase" },
          { label: "Output Voltage", value: "220/230/240V ±1%" },
          { label: "Efficiency", value: "Up to 93% (online mode)" },
        ],
      },
      {
        title: "Communication",
        specs: [
          { label: "Interfaces", value: "RS232, USB, SNMP card (optional)" },
        ],
      },
    ],
    applications: ["Server rooms without racks", "Retail back-office IT", "Small equipment areas"],
    customizationOptions: ["Battery runtime package", "Rack-conversion kit", "Communication card"],
    standards: ["Designed to IEC 62040 UPS performance standards", "Certification available on request per project spec"],
    faqs: [
      {
        question: "Can a tower UPS be converted to rack mount later?",
        answer:
          "Select Wandtung tower UPS models support an optional rack-mount conversion kit, letting the same unit move into a 19-inch rack if the site is upgraded later — confirm compatibility for the specific model with our engineering team.",
      },
    ],
    relatedProductSlugs: ["rack-mount-ups", "online-ups"],
    relatedSolutionSlugs: ["critical-power"],
  },
  {
    slug: "online-ups",
    category: "ups-systems",
    name: "Online UPS",
    shortName: "Online UPS",
    tagline: "Double-conversion UPS providing continuous, regulated power with zero transfer time.",
    overview:
      "The Wandtung Online UPS uses true double-conversion topology, continuously regenerating output power from its inverter rather than switching to battery on disturbance, so connected equipment always sees a clean, regulated waveform with zero transfer time — the standard choice for critical IT and data center loads.",
    keyFeatures: [
      "True online double-conversion topology",
      "Zero transfer time to battery",
      "Wide input voltage window reduces battery cycling",
      "Rack-mount and tower form factors available",
    ],
    specGroups: [
      {
        title: "Power",
        specs: [
          { label: "Power Capacity", value: "1 kVA – 40 kVA" },
          { label: "Input Voltage Window", value: "Wide range, reduces on-battery transfers" },
          { label: "Power Factor", value: "0.9–1.0 (model dependent)" },
          { label: "Efficiency", value: "Up to 95% (online mode)" },
        ],
      },
    ],
    applications: ["Data center IT racks", "Critical process control equipment", "Telecom and networking equipment"],
    customizationOptions: ["Power rating", "Battery runtime", "Form factor"],
    standards: ["Designed to IEC 62040 UPS performance standards", "Certification available on request per project spec"],
    faqs: [
      {
        question: "What is an online UPS?",
        answer:
          "An online (double-conversion) UPS continuously converts incoming AC power to DC and back to AC, providing a constant, regulated output with zero transfer time to battery, which is why it is the standard topology for data center and critical IT loads.",
      },
    ],
    relatedProductSlugs: ["rack-mount-ups", "tower-ups", "modular-ups"],
    relatedSolutionSlugs: ["critical-power"],
  },
  {
    slug: "industrial-ups",
    category: "ups-systems",
    name: "Industrial UPS",
    shortName: "Industrial UPS",
    tagline: "Ruggedized UPS for harsh-environment industrial and process-control power protection.",
    overview:
      "The Wandtung Industrial UPS is built for environments outside typical data center conditions — wider operating temperature range, higher ingress protection, and tolerance for dust, vibration and less stable input power — protecting process control, SCADA and industrial IT equipment in factories, plants and remote industrial sites.",
    keyFeatures: [
      "Extended operating temperature range",
      "Higher IP-rated enclosure options for dusty/humid environments",
      "Wide input voltage tolerance for unstable grids",
      "Vibration-resistant construction",
    ],
    specGroups: [
      {
        title: "Power",
        specs: [
          { label: "Power Capacity", value: "1 kVA – 100 kVA" },
          { label: "Operating Temperature", value: "Extended range vs. standard IT UPS" },
          { label: "IP Rating", value: "Up to IP54 enclosure options" },
        ],
      },
    ],
    applications: ["Factory process control", "SCADA / industrial automation", "Oil & gas and mining site power"],
    customizationOptions: ["Enclosure IP rating", "Power rating", "Extended battery runtime"],
    standards: ["Designed to IEC 62040 UPS performance standards", "Certification available on request per project spec"],
    faqs: [
      {
        question: "How is an industrial UPS different from a standard data center UPS?",
        answer:
          "An industrial UPS is built to tolerate wider temperature swings, dust, vibration and less stable incoming power than a typical data center UPS, and is often housed in a higher IP-rated enclosure suited to factory or outdoor industrial environments.",
      },
    ],
    relatedProductSlugs: ["rack-mount-ups", "battery-energy-storage-system"],
    relatedSolutionSlugs: ["critical-power"],
  },
  {
    slug: "high-power-ups",
    category: "ups-systems",
    name: "High Power UPS",
    shortName: "High Power UPS",
    tagline: "Large-capacity three-phase tower UPS for data center, industrial and medical critical power.",
    overview:
      "The Wandtung High Power UPS is a three-phase, online double-conversion tower UPS delivering 10 kVA to 200 kVA, built for data halls, industrial facilities and medical environments that need pure sine wave output with zero transfer time to battery. It solves the nine most common power quality problems — outages, sags, surges, harmonic distortion, transients, frequency fluctuation, EMI interference, over- and under-voltage — through a single unit, with full digital control and remote monitoring.",
    images: [
      "/products/high-power-ups/01-main.jpg",
      "/products/high-power-ups/02-front-rear-view.jpg",
      "/products/high-power-ups/03-nine-power-problems.jpg",
      "/products/high-power-ups/04-key-features.jpg",
      "/products/high-power-ups/05-selling-points.jpg",
      "/products/high-power-ups/06-application-scene.jpg",
    ],
    keyFeatures: [
      "Three-phase in / three-phase out, online double-conversion topology",
      "10 kVA – 200 kVA power capacity in a tower format",
      "Pure sine wave output, THD < 3%",
      "0ms transfer time to battery — zero interruption",
      "Auto battery switchover on utility failure with auto-restart, no manual intervention",
      "EMI/RFI shielded to EN50091-3 / IEC 61000-4",
      "Triple high-flow cooling fans and full-perforated rear ventilation panel",
      "SNMP / RS232 / RS485 remote monitoring; heavy-duty casters for mobility",
    ],
    specGroups: [
      {
        title: "Power",
        specs: [
          { label: "Power Capacity", value: "10 kVA – 200 kVA" },
          { label: "Input/Output Voltage", value: "380/400/415V three-phase" },
          { label: "Efficiency", value: ">95% (online mode)" },
          { label: "Output Waveform", value: "Pure sine wave, THD < 3%" },
          { label: "Transfer Time", value: "0ms (zero interruption)" },
        ],
      },
      {
        title: "Monitoring & Communication",
        specs: [
          { label: "Interfaces", value: "RS232, RS485, SNMP" },
          { label: "Display", value: "Front-panel LCD/touchscreen control panel" },
        ],
      },
      {
        title: "Mechanical & Protection",
        specs: [
          { label: "Cooling", value: "Triple high-flow fans, full-perforated ventilation panel" },
          { label: "Mobility", value: "Heavy-duty casters" },
          { label: "Parallel Capability", value: "Multiple units for capacity/redundancy" },
        ],
      },
    ],
    applications: ["Data center facility-level power", "Medical facility critical power", "Large industrial and commercial critical loads", "Colocation power plants"],
    customizationOptions: ["Power rating", "Parallel configuration", "Battery cabinet integration"],
    standards: ["Designed to IEC 62040 UPS performance standards", "EMI/RFI shielding to EN50091-3 / IEC 61000-4", "CE / IEC certified", "Certification available on request per project spec"],
    faqs: [
      {
        question: "When is a high power UPS needed instead of a modular UPS?",
        answer:
          "A high power (monolithic) UPS suits facilities with a stable, well-defined large load from day one. A modular UPS is often preferred when load will grow over time, since capacity can be added module-by-module rather than in large fixed steps.",
      },
      {
        question: "What power problems does the High Power UPS protect against?",
        answer:
          "It protects connected equipment against the nine most common power quality issues: outages, voltage sags, voltage surges, lightning surges, harmonic distortion, voltage transients, frequency fluctuation, EMI interference, and over/under-voltage — through online double-conversion with zero transfer time to battery.",
      },
    ],
    relatedProductSlugs: ["modular-ups", "high-power-pdu"],
    relatedSolutionSlugs: ["critical-power", "data-center-infrastructure"],
  },

  // ---------------- Network & Server Cabinets ----------------
  {
    slug: "network-cabinet",
    category: "network-server-cabinets",
    name: "Network Cabinet",
    shortName: "Network Cabinet",
    tagline: "19-inch floor-standing server cabinet with 2.0mm heavy-duty posts, up to 2000kg static load.",
    overview:
      "The Wandtung Network Cabinet is a 19-inch floor-standing enclosure for switches, patch panels, servers and network equipment, built with 2.0mm heavy-duty SPCC cold-rolled steel mounting posts, a top fan system, perforated shelves and a lockable tempered-glass door. Available in 18U/22U/32U/42U heights with 600/800/1000mm depth options, the reinforced internal frame supports a static load of 600–2000kg depending on configuration.",
    featured: true,
    images: [
      "/products/network-cabinet/01-main.jpg",
      "/products/network-cabinet/02-features-overview.jpg",
      "/products/network-cabinet/03-load-capacity.jpg",
      "/products/network-cabinet/04-heavy-duty-mounting-posts.jpg",
      "/products/network-cabinet/05-profile-customization.jpg",
      "/products/network-cabinet/06-profile-structure.jpg",
      "/products/network-cabinet/07-fan-customization.jpg",
      "/products/network-cabinet/08-thickness-coating.jpg",
      "/products/network-cabinet/09-powder-coating-process.jpg",
      "/products/network-cabinet/10-u-position-scale.jpg",
      "/products/network-cabinet/11-casters-leveling-feet.png",
    ],
    keyFeatures: [
      "18U / 22U / 32U / 42U heights available",
      "2.0mm heavy-duty SPCC cold-rolled steel mounting posts, supports up to 1500kg on the frame",
      "Static load rating 600–2000kg depending on configuration",
      "Top fan system for active heat exhaust",
      "19-inch EIA-standard mounting rails with U-position scale markings, front and rear",
      "Lockable tempered-glass front door with perforated rear/side panels for airflow",
      "Perforated, adjustable-position shelves",
      "Nine-fold (9-bend) profile frame construction for added rigidity",
      "Electrostatic powder-coating process for a durable, even finish",
      "Castors with leveling feet for mobility and stable leveling",
    ],
    specGroups: [
      {
        title: "Structure & Dimensions",
        specs: [
          { label: "Rack Units", value: "18U / 22U / 32U / 42U" },
          { label: "Width", value: "600 mm / 800 mm" },
          { label: "Depth", value: "600 / 800 / 1000 mm" },
          { label: "Load Capacity", value: "600 – 2000 kg (static, configuration dependent)" },
          { label: "Mounting Post", value: "2.0mm heavy-duty SPCC steel, supports up to 1500kg" },
        ],
      },
      {
        title: "Construction",
        specs: [
          { label: "Material", value: "Cold-rolled steel (SPCC), nine-fold profile frame" },
          { label: "Steel Thickness", value: "1.2 – 2.0 mm (frame dependent)" },
          { label: "Cooling", value: "Top fan system, perforated door/side panels" },
          { label: "IP Rating", value: "IP20 (indoor); IP54/IP55 outdoor variant available" },
          { label: "Finish", value: "Electrostatic powder-coated, RAL color options" },
          { label: "Mobility", value: "Castors with adjustable leveling feet" },
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
    standards: [
      "CE (LVD 2014/35/EC, EN IEC 62368-1:2020) — K series cabinets",
      "IEC 62368-1 / UL 60950-1 tested (Report No. EED35R800398)",
      "IEC 60297 (19-inch rack format)",
    ],
    faqs: [
      {
        question: "What is a network cabinet used for?",
        answer:
          "A network cabinet is a 19-inch standard enclosure that houses switches, patch panels, routers and other network equipment, providing physical security, organized cable management and controlled airflow for IT closets and equipment rooms.",
      },
      {
        question: "What steel thickness should a data center cabinet use?",
        answer:
          "Frame components are typically 1.5–2.0 mm cold-rolled steel for structural load-bearing members, with 1.0–1.2 mm acceptable for doors and side panels — Wandtung specifies thickness per model and can reinforce frames for heavier static/dynamic load ratings on request.",
      },
      {
        question: "What is the maximum load capacity of the network cabinet?",
        answer:
          "Depending on configuration, the reinforced 2.0mm heavy-duty mounting posts and internal frame support a static load of 600–2000kg, with the mounting post itself rated to support up to 1500kg.",
      },
    ],
    relatedProductSlugs: ["server-rack", "data-center-cabinet", "cold-aisle-cabinet", "wall-mount-cabinet"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "data-center-cabinet",
    category: "network-server-cabinets",
    name: "Data Center Cabinet",
    shortName: "DC Cabinet",
    tagline: "High-load-capacity server cabinet for data center white space deployment.",
    overview:
      "The Wandtung Data Center Cabinet is purpose-built for data hall deployment, supporting high static and dynamic load ratings, hot/cold aisle containment compatibility, and integrated cable and PDU management for dense server and storage deployments.",
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
    standards: ["Designed to IEC 60297 (19-inch rack) standard", "Certification available on request per project spec"],
    faqs: [
      {
        question: "What load capacity does a data center cabinet need?",
        answer:
          "Load capacity should exceed the fully populated weight of servers, storage, cabling and PDUs with margin — Wandtung data center cabinets are rated up to 1200 kg static load to support dense compute and storage deployments.",
      },
    ],
    relatedProductSlugs: ["network-cabinet", "cold-aisle-cabinet", "intelligent-cabinet"],
    relatedSolutionSlugs: ["data-center-infrastructure", "ai-data-center"],
  },
  {
    slug: "server-rack",
    category: "network-server-cabinets",
    name: "Server Rack",
    shortName: "Server Rack",
    tagline: "19-inch server rack built for server and storage weight loads and airflow.",
    overview:
      "The Wandtung Server Rack is a 19-inch enclosure sized and reinforced for server and storage equipment rather than lighter network gear — deeper chassis clearance, stronger static load rating and airflow-optimized doors for compute-dense deployments.",
    keyFeatures: [
      "19-inch EIA-standard mounting, front and rear",
      "Deep chassis clearance for server/storage hardware",
      "High static load rating",
      "Perforated doors for front-to-back airflow",
    ],
    specGroups: [
      {
        title: "Structure & Dimensions",
        specs: [
          { label: "Rack Units", value: "24U – 47U" },
          { label: "Depth", value: "900 – 1200 mm" },
          { label: "Load Capacity", value: "Up to 1000 kg (static)" },
        ],
      },
      {
        title: "Construction",
        specs: [
          { label: "Material", value: "Cold-rolled steel" },
          { label: "Door", value: "Perforated (≥65% open area) standard" },
        ],
      },
    ],
    applications: ["Server rooms", "Storage deployments", "Enterprise IT closets"],
    customizationOptions: ["Height / depth", "Load rating", "Door and side panel options"],
    standards: ["Designed to IEC 60297 (19-inch rack) standard", "Certification available on request per project spec"],
    faqs: [
      {
        question: "What's the difference between a server rack and a network cabinet?",
        answer:
          "Both follow the same 19-inch standard, but a server rack is typically deeper and rated for heavier static loads to support servers and storage chassis, while a network cabinet is optimized for lighter switching/patching equipment and cable management density.",
      },
    ],
    relatedProductSlugs: ["network-cabinet", "data-center-cabinet", "19-inch-rack"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "19-inch-rack",
    category: "network-server-cabinets",
    name: "19 Inch Rack",
    shortName: "19-Inch Rack",
    tagline: "Standard EIA 19-inch rack enclosure for general IT and network equipment mounting.",
    overview:
      "The Wandtung 19 Inch Rack is a standard EIA-310 compliant enclosure sized for general-purpose IT, networking and telecom equipment mounting where a full server-rack or network-cabinet specification isn't required — a flexible base configuration for smaller deployments.",
    keyFeatures: [
      "EIA-310 standard 19-inch mounting rails",
      "Open-frame and enclosed cabinet options",
      "Configurable rack unit height",
      "Compatible with standard rack-mount accessories",
    ],
    specGroups: [
      {
        title: "Structure & Dimensions",
        specs: [
          { label: "Rack Units", value: "9U – 42U" },
          { label: "Width", value: "600 mm" },
          { label: "Depth", value: "600 – 1000 mm" },
        ],
      },
    ],
    applications: ["General IT equipment mounting", "Telecom equipment rooms", "Lab and test environments"],
    customizationOptions: ["Open-frame vs. enclosed", "Height / depth", "Accessory rails"],
    standards: ["Designed to IEC 60297 / EIA-310 (19-inch) standard", "Certification available on request per project spec"],
    faqs: [
      {
        question: "What does '19-inch rack' actually refer to?",
        answer:
          "It refers to the EIA-310 standard 19-inch width of the mounting rail opening, common across server racks, network cabinets and most rack-mount IT equipment — the term describes the mounting standard rather than one specific enclosure design.",
      },
    ],
    relatedProductSlugs: ["network-cabinet", "server-rack"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "cold-aisle-cabinet",
    category: "network-server-cabinets",
    name: "Cold Aisle Cabinet",
    shortName: "Cold Aisle Cabinet",
    tagline: "Cabinet engineered for cold aisle containment airflow separation.",
    overview:
      "The Wandtung Cold Aisle Cabinet is designed for deployment within a cold aisle containment layout, with sealed panel interfaces and door gasketing that keep supply air on the cold-aisle side separated from hot exhaust air, improving cooling efficiency across the row.",
    keyFeatures: [
      "Sealed panel and door interfaces for containment integrity",
      "Compatible with standard containment roof/door systems",
      "Brush-strip cable entry to limit air bypass",
      "Blanking panel kit included for unused rack space",
    ],
    specGroups: [
      {
        title: "Structure & Dimensions",
        specs: [
          { label: "Rack Units", value: "42U / 45U / 47U" },
          { label: "Width", value: "600 mm / 800 mm" },
          { label: "Containment Interface", value: "Compatible with standard aisle containment systems" },
        ],
      },
    ],
    applications: ["Hot/cold aisle containment data halls", "High-density colocation rows", "PUE optimization retrofits"],
    customizationOptions: ["Containment interface type", "Width", "Blanking panel kit"],
    standards: ["Designed to IEC 60297 (19-inch rack) standard", "Certification available on request per project spec"],
    faqs: [
      {
        question: "Do I need special cabinets for cold aisle containment, or just a containment roof/doors?",
        answer:
          "Containment only works if the row of cabinets itself seals well — gaps around doors, side panels and cable entries let air bypass the containment. Cold aisle cabinets are built with that sealing in mind, in addition to the roof/door containment system spanning the aisle.",
      },
    ],
    relatedProductSlugs: ["data-center-cabinet", "network-cabinet", "row-based-cooling"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "intelligent-cabinet",
    category: "network-server-cabinets",
    name: "Intelligent Cabinet",
    shortName: "Intelligent Cabinet",
    tagline: "Cabinet with integrated environmental and access monitoring for lights-out sites.",
    overview:
      "The Wandtung Intelligent Cabinet integrates environmental sensors, door access control and power monitoring at the cabinet level, giving operators visibility and control over individual cabinets in unattended or multi-tenant environments without a separate micro module.",
    keyFeatures: [
      "Integrated temperature/humidity monitoring",
      "Electronic door access control and door-open alarms",
      "Compatible with intelligent PDU integration",
      "Remote monitoring dashboard",
    ],
    specGroups: [
      {
        title: "Monitoring",
        specs: [
          { label: "Sensors", value: "Temperature, humidity, door status" },
          { label: "Access Control", value: "Card / PIN / biometric options" },
          { label: "Communication", value: "Network-connected monitoring module" },
        ],
      },
      {
        title: "Structure",
        specs: [
          { label: "Rack Units", value: "42U / 45U / 47U" },
          { label: "Width", value: "600 mm / 800 mm" },
        ],
      },
    ],
    applications: ["Unattended equipment rooms", "Multi-tenant colocation cabinets", "High-security IT deployments"],
    customizationOptions: ["Sensor package", "Access control method", "PDU integration"],
    standards: ["Designed to IEC 60297 (19-inch rack) standard", "Certification available on request per project spec"],
    faqs: [
      {
        question: "How is an intelligent cabinet different from a micro modular data center?",
        answer:
          "An intelligent cabinet adds monitoring and access control to a single enclosure, while a micro modular data center integrates power, cooling, fire suppression and monitoring across a full row or module — an intelligent cabinet is a lighter-weight option when you only need visibility into one cabinet.",
      },
    ],
    relatedProductSlugs: ["intelligent-pdu", "data-center-cabinet", "smart-micro-module"],
    relatedSolutionSlugs: ["smart-power-distribution", "data-center-infrastructure"],
  },
  {
    slug: "outdoor-cabinet",
    category: "network-server-cabinets",
    name: "Outdoor Cabinet",
    shortName: "Outdoor Cabinet",
    tagline: "Weatherproof cabinet for outdoor telecom and network equipment deployment.",
    overview:
      "The Wandtung Outdoor Cabinet houses network and telecom equipment in outdoor or exposed environments, with a weatherproof enclosure, thermal management and cable entry glanding rated for sun, rain and dust exposure at cell sites, roadside cabinets and remote installations.",
    keyFeatures: [
      "High IP-rated weatherproof enclosure",
      "Integrated thermal management (vented or air-conditioned options)",
      "Sealed cable entry glands",
      "Corrosion-resistant coating for outdoor exposure",
    ],
    specGroups: [
      {
        title: "Environmental",
        specs: [
          { label: "IP Rating", value: "IP55 / IP65 (model dependent)" },
          { label: "Operating Temperature", value: "Extended outdoor range" },
          { label: "Cooling", value: "Passive vented or air-conditioned options" },
        ],
      },
      {
        title: "Structure",
        specs: [
          { label: "Mounting", value: "Wall-mount, pole-mount or floor-standing" },
          { label: "Finish", value: "Corrosion-resistant powder coat" },
        ],
      },
    ],
    applications: ["Telecom base station sites", "Roadside / outdoor network cabinets", "Remote monitoring stations"],
    customizationOptions: ["IP rating", "Cooling method", "Mounting type"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "What IP rating does an outdoor telecom cabinet need?",
        answer:
          "IP55 is a common minimum for outdoor telecom cabinets, protecting against dust ingress and water jets; IP65 provides a higher level of dust and water protection for more exposed sites — the right rating depends on the specific site's exposure conditions.",
      },
    ],
    relatedProductSlugs: ["network-cabinet", "20ft-container-data-center"],
    relatedSolutionSlugs: ["telecom-data-center", "edge-data-center"],
  },
  {
    slug: "wall-mount-cabinet",
    category: "network-server-cabinets",
    name: "Wall Mount Cabinet",
    shortName: "Wall Mount Cabinet",
    tagline: "Compact wall-mounted network cabinet for space-constrained equipment rooms.",
    overview:
      "The Wandtung Wall Mount Cabinet packages a 6U–12U 19-inch enclosure with a 5mm tempered glass door, reinforced cold-rolled steel frame and removable cable entry into a compact wall-mounted footprint, suited to small equipment rooms, offices and telecom closets where floor space isn't available for a full-size cabinet.",
    featured: true,
    images: [
      "/products/wall-mount-cabinet/01-main.jpg",
      "/products/wall-mount-cabinet/02-top-detail.jpg",
      "/products/wall-mount-cabinet/03-tempered-glass-detail.jpg",
      "/products/wall-mount-cabinet/04-column-thickness.jpg",
      "/products/wall-mount-cabinet/05-application-scene.jpg",
      "/products/wall-mount-cabinet/06-key-features-overview.jpg",
    ],
    keyFeatures: [
      "5mm tempered glass front door for visibility and durability",
      "1.5mm cold-rolled SPCC steel frame and mounting columns",
      "Aluminum alloy edge frame around the glass door",
      "Fan ventilation opening in the top panel",
      "Removable top cable entry panel",
      "Lockable door with key",
    ],
    specGroups: [
      {
        title: "Structure & Dimensions",
        specs: [
          { label: "Rack Units", value: "6U – 12U" },
          { label: "Mounting", value: "Wall-mounted" },
          { label: "Door", value: "5mm tempered glass, lockable" },
        ],
      },
      {
        title: "Construction",
        specs: [
          { label: "Frame Material", value: "1.5mm cold-rolled SPCC steel" },
          { label: "Door Frame", value: "Aluminum alloy edge frame" },
          { label: "Ventilation", value: "Top panel fan opening" },
          { label: "Cable Entry", value: "Removable top cable entry panel" },
        ],
      },
    ],
    applications: ["Small equipment rooms", "Office network closets", "Telecom distribution points"],
    customizationOptions: ["Rack unit height (6U/9U/12U)", "Door type (glass/mesh)", "Color / branding", "OEM/ODM"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "How is a wall mount cabinet different from a floor-standing network cabinet?",
        answer:
          "A wall mount cabinet is smaller (typically 6U–12U) and installs directly on a wall rather than the floor, making it suited to smaller equipment loads and rooms without space for a full-size floor-standing cabinet — Wandtung's network cabinet line covers the larger 12U–47U floor-standing range.",
      },
      {
        question: "Does the wall mount cabinet support OEM/ODM customization?",
        answer:
          "Yes. Wandtung supports OEM/ODM for the wall mount cabinet, including rack unit height, door type, color and branding to match a customer's specification.",
      },
    ],
    relatedProductSlugs: ["network-cabinet", "19-inch-rack"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },

  // ---------------- Micro Modular Data Center ----------------
  {
    slug: "smart-micro-module",
    category: "micro-modular-data-center",
    name: "Smart Micro Module Data Center",
    shortName: "Smart Micro Module",
    tagline: "Factory-integrated micro data center combining cabinets, power, cooling and monitoring.",
    overview:
      "The Wandtung Smart Micro Module integrates IT cabinets, UPS, PDU, precision cooling, battery, fire suppression, access control and environmental monitoring into a single pre-engineered, factory-tested system, deployable in single-row or dual-row configuration for small to mid-size data rooms.",
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
    standards: ["Designed to IEC 62040 UPS performance standards", "Certification available on request per project spec"],
    faqs: [
      {
        question: "What is a micro modular data center?",
        answer:
          "A micro modular data center is a factory pre-integrated system combining IT cabinets, power distribution, UPS, cooling, fire suppression, access control and monitoring into a single standardized unit, reducing on-site construction time compared to a traditional built data room.",
      },
      {
        question: "Does Wandtung provide micro modular data center solutions?",
        answer:
          "Yes. Wandtung designs and manufactures single-row, dual-row and all-in-one micro modular data centers with integrated power, cooling, fire suppression and monitoring, engineered and factory-tested as a complete system before deployment.",
      },
    ],
    relatedProductSlugs: ["intelligent-cabinet", "intelligent-pdu", "in-row-cooling"],
    relatedSolutionSlugs: ["micro-modular-data-center", "data-center-infrastructure"],
  },
  {
    slug: "single-row-micro-data-center",
    category: "micro-modular-data-center",
    name: "Single Row Micro Data Center",
    shortName: "Single Row Micro DC",
    tagline: "Compact micro module with cabinets arranged in a single row for small deployments.",
    overview:
      "The Wandtung Single Row Micro Data Center arranges IT cabinets in a single row with rear or side power and cooling infrastructure, sized for small equipment rooms and branch sites where a full dual-row containment layout isn't needed.",
    keyFeatures: [
      "Single-row cabinet layout for compact footprint",
      "Integrated UPS, PDU and cooling",
      "Factory pre-integration and testing",
      "Fire suppression and access control included",
    ],
    specGroups: [
      {
        title: "System Composition",
        specs: [
          { label: "Layout", value: "Single row, 2–6 cabinets typical" },
          { label: "Power", value: "Rack mount or modular UPS + intelligent PDU" },
          { label: "Cooling", value: "In-row or precision air conditioning" },
        ],
      },
    ],
    applications: ["Small branch data rooms", "Retail back-office IT", "Regional office server rooms"],
    customizationOptions: ["Cabinet count", "Power redundancy level", "Cooling type"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "When is a single row micro data center enough, versus dual row?",
        answer:
          "A single row layout suits smaller IT loads (typically under 6 cabinets) where floor space is limited and full aisle containment isn't required — dual row becomes more efficient as cabinet count and cooling density increase.",
      },
    ],
    relatedProductSlugs: ["smart-micro-module", "dual-row-micro-data-center"],
    relatedSolutionSlugs: ["micro-modular-data-center"],
  },
  {
    slug: "dual-row-micro-data-center",
    category: "micro-modular-data-center",
    name: "Dual Row Micro Data Center",
    shortName: "Dual Row Micro DC",
    tagline: "Micro module with cabinets facing in two rows and hot/cold aisle containment.",
    overview:
      "The Wandtung Dual Row Micro Data Center arranges IT cabinets in two facing rows with hot or cold aisle containment between them, improving cooling efficiency over a single-row layout for mid-size deployments with higher cabinet counts or density.",
    keyFeatures: [
      "Dual-row layout with hot/cold aisle containment",
      "Higher cabinet density per footprint than single row",
      "Integrated UPS, PDU, cooling and fire suppression",
      "Centralized monitoring across both rows",
    ],
    specGroups: [
      {
        title: "System Composition",
        specs: [
          { label: "Layout", value: "Dual row, containment aisle between" },
          { label: "Power", value: "Modular UPS + intelligent PDU" },
          { label: "Cooling", value: "In-row cooling within the containment aisle" },
        ],
      },
    ],
    applications: ["Mid-size enterprise data rooms", "Regional data centers", "Higher-density branch deployments"],
    customizationOptions: ["Row length / cabinet count", "Containment type", "Redundancy level"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "What is a micro modular data center?",
        answer:
          "A micro modular data center is a factory pre-integrated system combining IT cabinets, power distribution, UPS, cooling, fire suppression, access control and monitoring into a single standardized unit, reducing on-site construction time compared to a traditional built data room.",
      },
    ],
    relatedProductSlugs: ["smart-micro-module", "single-row-micro-data-center", "in-row-cooling"],
    relatedSolutionSlugs: ["micro-modular-data-center"],
  },
  {
    slug: "all-in-one-micro-data-center",
    category: "micro-modular-data-center",
    name: "All-in-One Micro Data Center",
    shortName: "All-in-One Micro DC",
    tagline: "Single enclosure integrating rack, UPS, PDU and cooling for the smallest deployments.",
    overview:
      "The Wandtung All-in-One Micro Data Center packages IT rack space, UPS, PDU and cooling into a single self-contained enclosure — the smallest step up from a standard cabinet, suited to sites with only a handful of servers and no dedicated equipment room.",
    keyFeatures: [
      "Single self-contained enclosure — rack, power and cooling in one unit",
      "Compact footprint for spaces without a dedicated server room",
      "Built-in fire detection",
      "Plug-and-play factory integration",
    ],
    specGroups: [
      {
        title: "System Composition",
        specs: [
          { label: "IT Space", value: "6U – 24U usable, model dependent" },
          { label: "Power", value: "Integrated UPS + PDU" },
          { label: "Cooling", value: "Integrated close-control cooling unit" },
        ],
      },
    ],
    applications: ["Small offices without a server room", "Retail / branch locations", "Edge compute at small sites"],
    customizationOptions: ["Usable rack space", "Battery runtime", "Cooling capacity"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "Is an all-in-one micro data center the same as a server cabinet with a UPS?",
        answer:
          "It goes further — beyond just housing a UPS inside a cabinet, an all-in-one micro data center integrates power, precision cooling and often fire detection as one factory-engineered and tested system, rather than components assembled on site.",
      },
    ],
    relatedProductSlugs: ["single-row-micro-data-center", "smart-micro-module"],
    relatedSolutionSlugs: ["micro-modular-data-center", "edge-data-center"],
  },

  // ---------------- Containerized Data Center ----------------
  {
    slug: "40ft-container-data-center",
    category: "containerized-data-center",
    name: "40ft Container Data Center",
    shortName: "40ft Container DC",
    tagline: "Fully pre-integrated 40-foot containerized data center for rapid, large-scale deployment.",
    overview:
      "The Wandtung 40ft Container Data Center is a complete, factory-built data center in a standard 40-foot ISO container shell, pre-installed with IT cabinets, power distribution, UPS, cooling, fire protection, security and monitoring — engineered for telecom, mining, oil & gas, edge computing and emergency deployment where speed and site independence matter.",
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
    standards: ["Built on standard ISO container structural dimensions", "Certification available on request per project spec"],
    faqs: [
      {
        question: "20ft vs 40ft container data center — which should I choose?",
        answer:
          "A 20ft container suits smaller IT loads or edge sites with limited space and typically holds fewer racks, while a 40ft container offers roughly double the internal footprint for higher rack counts, larger power/cooling plant, or walk-in maintenance aisles — the right choice depends on target IT load and available site space.",
      },
      {
        question: "Does Wandtung provide containerized data centers?",
        answer:
          "Yes. Wandtung manufactures 20ft and 40ft containerized data centers pre-integrated with IT cabinets, power distribution, UPS, cooling, fire protection and monitoring for telecom, mining, oil & gas, edge computing and government deployments.",
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
  {
    slug: "20ft-container-data-center",
    category: "containerized-data-center",
    name: "20ft Container Data Center",
    shortName: "20ft Container DC",
    tagline: "Compact containerized data center in a 20-foot ISO shell for smaller or space-constrained sites.",
    overview:
      "The Wandtung 20ft Container Data Center packages IT cabinets, power distribution, UPS, cooling, fire protection and monitoring into a standard 20-foot ISO container — a smaller footprint than the 40ft option, suited to space-constrained sites, smaller IT loads, or edge deployments where a full 40ft unit isn't justified.",
    keyFeatures: [
      "Complete IT + power + cooling integration in a compact 20ft footprint",
      "Reinforced, insulated container structure rated for outdoor deployment",
      "Faster crane/transport logistics than a 40ft unit at tight sites",
      "Scalable — deploy additional containers as load grows",
    ],
    specGroups: [
      {
        title: "Container Structure",
        specs: [
          { label: "Container Size", value: "20ft standard ISO" },
          { label: "Insulation", value: "Thermal + acoustic insulated panel wall" },
          { label: "IP Rating", value: "IP55 (outdoor deployment)" },
        ],
      },
      {
        title: "IT & Power",
        specs: [
          { label: "IT Cabinets", value: "Configurable rack count per layout" },
          { label: "Power Distribution", value: "Intelligent PDU, rack mount or modular UPS" },
          { label: "Cooling", value: "Precision air conditioning" },
        ],
      },
    ],
    applications: ["Edge computing", "Space-constrained telecom sites", "Small-to-mid mining/oil & gas sites"],
    customizationOptions: ["Rack count and layout", "Power redundancy", "Cooling type"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "20ft vs 40ft container data center — which should I choose?",
        answer:
          "A 20ft container suits smaller IT loads or edge sites with limited space and typically holds fewer racks, while a 40ft container offers roughly double the internal footprint for higher rack counts, larger power/cooling plant, or walk-in maintenance aisles — the right choice depends on target IT load and available site space.",
      },
    ],
    relatedProductSlugs: ["40ft-container-data-center", "edge-data-center", "smart-micro-module"],
    relatedSolutionSlugs: ["containerized-data-center", "edge-data-center"],
  },
  {
    slug: "modular-container-data-center",
    category: "containerized-data-center",
    name: "Modular Container Data Center",
    shortName: "Modular Container DC",
    tagline: "Multiple interconnected containers scaling to larger capacity than a single unit.",
    overview:
      "The Wandtung Modular Container Data Center links multiple 20ft or 40ft container modules — IT, power and cooling units — into a larger, coordinated facility, letting capacity scale beyond what a single container can hold while keeping the factory-built, rapid-deployment model of containerized infrastructure.",
    keyFeatures: [
      "Multiple container modules interconnected for larger capacity",
      "Dedicated or shared power/cooling modules across the group",
      "Phased deployment — add container modules as load grows",
      "Unified monitoring across all connected modules",
    ],
    specGroups: [
      {
        title: "System",
        specs: [
          { label: "Configuration", value: "Multiple 20ft/40ft modules, interconnected" },
          { label: "Power & Cooling", value: "Dedicated per-module or shared central plant" },
          { label: "Monitoring", value: "Unified DCIM-compatible monitoring across modules" },
        ],
      },
    ],
    applications: ["Growing telecom/edge networks", "Multi-phase remote site buildouts", "Large temporary/emergency deployments"],
    customizationOptions: ["Number and size of modules", "Shared vs. dedicated power/cooling", "Interconnect layout"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "Can capacity be added later to a modular container data center?",
        answer:
          "Yes — additional container modules can be added and interconnected to the existing deployment as IT load grows, avoiding the need to size and build a single large facility on day one.",
      },
    ],
    relatedProductSlugs: ["20ft-container-data-center", "40ft-container-data-center"],
    relatedSolutionSlugs: ["containerized-data-center"],
  },
  {
    slug: "edge-data-center",
    category: "containerized-data-center",
    name: "Edge Data Center",
    shortName: "Edge Data Center",
    tagline: "Compact, factory-built data center for compute deployed close to the network edge.",
    overview:
      "The Wandtung Edge Data Center is a compact containerized or micro modular unit purpose-built for edge computing sites — small footprint, remote/unattended monitoring, and resilient power sized for locations without a traditional data center facility nearby.",
    keyFeatures: [
      "Compact footprint for constrained edge sites",
      "Remote, unattended monitoring for lights-out operation",
      "Resilient UPS and intelligent PDU power design",
      "Rapid factory-to-site deployment",
    ],
    specGroups: [
      {
        title: "System",
        specs: [
          { label: "Form Factor", value: "20ft container or micro module" },
          { label: "Power", value: "UPS + intelligent PDU, remote switching" },
          { label: "Monitoring", value: "Full remote monitoring for unattended sites" },
        ],
      },
    ],
    applications: ["CDN / edge compute nodes", "Telecom base station sites", "Retail and industrial edge locations"],
    customizationOptions: ["Form factor", "IT capacity", "Monitoring package"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "How is an edge data center different from a containerized data center?",
        answer:
          "Edge data centers prioritize compact footprint and remote/unattended operation for distributed sites, while larger containerized data centers are typically sized for more self-contained capacity at a single remote location — Wandtung's 20ft containers and micro modules serve as the building blocks for edge deployments.",
      },
    ],
    relatedProductSlugs: ["20ft-container-data-center", "smart-micro-module", "intelligent-pdu"],
    relatedSolutionSlugs: ["edge-data-center"],
  },

  // ---------------- Cooling Solutions ----------------
  {
    slug: "precision-air-conditioner",
    category: "cooling-solutions",
    name: "Precision Air Conditioner",
    shortName: "Precision AC",
    tagline: "Close-control precision cooling for data center and telecom equipment rooms.",
    overview:
      "The Wandtung Precision Air Conditioner provides tight temperature and humidity control for data halls and telecom rooms, with downflow or upflow air distribution and capacities suited to small equipment rooms through large data center white space.",
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
    standards: ["Certification available on request per project spec"],
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
      "Wandtung's liquid cooling solution combines cold plate liquid cooling at the server level with a coolant distribution unit (CDU) managing primary and secondary loops, enabling data centers to cool high-density AI training and HPC racks beyond the practical limits of air cooling.",
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
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "What is a CDU in liquid cooling?",
        answer:
          "A CDU (Coolant Distribution Unit) is the equipment that separates and manages the primary (facility) cooling loop from the secondary (rack/server) loop in a liquid cooling system, controlling coolant flow, temperature and pressure while isolating facility water from IT hardware.",
      },
      {
        question: "Does Wandtung provide liquid cooling and CDU solutions?",
        answer:
          "Yes. Wandtung provides cold plate liquid cooling systems with CDU-managed primary/secondary loops, leak detection and monitoring for AI and high-density compute deployments.",
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
      "The Wandtung CDU manages coolant distribution between the facility (primary) loop and the rack-level (secondary) loop in a liquid cooling deployment, providing pumping, heat exchange, filtration, leak detection and monitoring in a single rack-mountable or standalone unit.",
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
    standards: ["Certification available on request per project spec"],
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
  {
    slug: "row-based-cooling",
    category: "cooling-solutions",
    name: "Row-Based Cooling",
    shortName: "Row-Based Cooling",
    tagline: "Cooling units placed at the row level for shorter, more efficient airflow paths.",
    overview:
      "Wandtung Row-Based Cooling places cooling capacity within the row of IT cabinets rather than around the perimeter of the room, shortening the airflow path to the load and improving cooling efficiency and predictability at medium-to-high rack densities.",
    keyFeatures: [
      "Cooling capacity distributed within the cabinet row",
      "Shorter airflow path than perimeter (room) cooling",
      "Scales incrementally as row density increases",
      "Works with hot/cold aisle containment",
    ],
    specGroups: [
      {
        title: "Performance",
        specs: [
          { label: "Cooling Capacity", value: "10 kW – 40 kW per unit" },
          { label: "Airflow", value: "Row-level, front-to-back with the cabinet row" },
        ],
      },
    ],
    applications: ["Medium-to-high density data halls", "Containment-based cooling upgrades", "Colocation row deployments"],
    customizationOptions: ["Capacity per unit", "Redundancy (N+1 units per row)", "Containment interface"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "What's the difference between row-based and in-row cooling?",
        answer:
          "The terms are largely interchangeable in the industry — both describe cooling units positioned within the cabinet row rather than around the room perimeter. Wandtung uses \"row-based\" for the broader category and \"in-row\" for units that sit directly between cabinets in the row.",
      },
    ],
    relatedProductSlugs: ["in-row-cooling", "precision-air-conditioner", "cold-aisle-cabinet"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "in-row-cooling",
    category: "cooling-solutions",
    name: "In-Row Cooling",
    shortName: "In-Row Cooling",
    tagline: "Cooling unit installed directly within the cabinet row, next to the IT load it serves.",
    overview:
      "Wandtung In-Row Cooling units install directly within the cabinet row — the same footprint as an IT cabinet — placing cooling capacity immediately next to the racks generating heat, for tight, predictable temperature control at the row level. The unit holds ±0.5°C temperature and ±5% RH humidity precision using variable-speed EC fans, with an intelligent controller for remote monitoring and 24/7 continuous-duty operation.",
    images: [
      "/products/in-row-cooling/01-main.jpg",
      "/products/in-row-cooling/02-key-features.jpg",
      "/products/in-row-cooling/03-front-detail.jpg",
      "/products/in-row-cooling/04-side-detail.jpg",
      "/products/in-row-cooling/05-selling-point.jpg",
      "/products/in-row-cooling/06-data-center-scene.jpg",
    ],
    keyFeatures: [
      "Cabinet-footprint form factor fits directly into the row",
      "Close-coupled to the IT load for tight temperature control",
      "±0.5°C temperature and ±5% RH humidity precision",
      "Variable-speed EC fans for energy-efficient airflow",
      "Intelligent controller with remote monitoring",
      "N+1 unit redundancy within a row",
      "24/7 continuous-duty operation; compatible with hot/cold aisle containment",
    ],
    specGroups: [
      {
        title: "Performance",
        specs: [
          { label: "Cooling Capacity", value: "5 kW – 50 kW per unit" },
          { label: "Form Factor", value: "Standard cabinet footprint" },
          { label: "Temperature Precision", value: "±0.5°C" },
          { label: "Humidity Precision", value: "±5% RH" },
          { label: "Air Distribution", value: "Under-floor / overhead" },
          { label: "Redundancy", value: "N+1 unit-level redundancy supported" },
        ],
      },
      {
        title: "Control",
        specs: [
          { label: "Fans", value: "Variable-speed EC fans" },
          { label: "Controller", value: "Intelligent controller, remote monitoring" },
        ],
      },
    ],
    applications: ["High-density colocation rows", "Micro modular data centers", "Containment-based cooling designs"],
    customizationOptions: ["Capacity", "Redundancy level", "Refrigerant type"],
    standards: ["CE certified", "Certification available on request per project spec"],
    faqs: [
      {
        question: "Why choose in-row cooling over a traditional room air conditioner?",
        answer:
          "In-row cooling places capacity directly next to the IT load rather than relying on room-wide air mixing, giving tighter temperature control, shorter airflow paths and better support for the higher densities seen in modern racks.",
      },
      {
        question: "How precise is the temperature and humidity control?",
        answer:
          "The unit holds ±0.5°C temperature and ±5% RH humidity precision using variable-speed EC fans and an intelligent controller, running continuously in 24/7 duty-cycle operation with remote monitoring.",
      },
    ],
    relatedProductSlugs: ["row-based-cooling", "cdu", "smart-micro-module"],
    relatedSolutionSlugs: ["data-center-infrastructure", "micro-modular-data-center"],
  },
  {
    slug: "room-cooling",
    category: "cooling-solutions",
    name: "Room Cooling",
    shortName: "Room Cooling",
    tagline: "Perimeter precision cooling for the whole data hall or equipment room.",
    overview:
      "Wandtung Room Cooling units condition the whole data hall or equipment room from the room perimeter — the traditional data center cooling approach, well suited to lower-density rooms or as a baseline layer alongside row-based/in-row cooling at higher densities.",
    keyFeatures: [
      "Room-wide, perimeter-mounted cooling",
      "Downflow or upflow air distribution",
      "Cost-effective for lower-density rooms",
      "Can be combined with row-based cooling for hybrid designs",
    ],
    specGroups: [
      {
        title: "Performance",
        specs: [
          { label: "Cooling Capacity", value: "7 kW – 150 kW per unit" },
          { label: "Air Distribution", value: "Downflow / Upflow, room-wide" },
        ],
      },
    ],
    applications: ["Lower-density equipment rooms", "Telecom rooms", "Baseline cooling in hybrid designs"],
    customizationOptions: ["Capacity", "Air distribution direction", "Refrigerant type"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "Is room cooling still relevant with row-based and in-row cooling available?",
        answer:
          "Yes — room cooling remains a cost-effective baseline for lower-density rooms, and is sometimes combined with row-based or in-row units at higher densities to handle general room load while row-level units target hot spots.",
      },
    ],
    relatedProductSlugs: ["precision-air-conditioner", "row-based-cooling", "dry-cooler"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "dry-cooler",
    category: "cooling-solutions",
    name: "V-Type Dry Cooler",
    shortName: "Dry Cooler",
    tagline: "Zero water-loss V-type dry cooler for liquid cooling and chiller heat rejection.",
    overview:
      "The Wandtung V-Type Dry Cooler rejects heat from a liquid cooling or chilled water loop to ambient air with zero water consumption, using V-arranged copper-tube/aluminum-fin coils, EC axial fans with 10–100% variable speed, and a hot-dip galvanized steel frame. It scales from 120kW to 1400kW across a standard model range, supporting the primary or secondary loop of data center liquid cooling and industrial chiller systems.",
    featured: true,
    images: [
      "/products/dry-cooler/01-main.jpg",
      "/products/dry-cooler/02-banner.jpg",
      "/products/dry-cooler/03-front-detail.jpg",
      "/products/dry-cooler/04-side-structure.jpg",
      "/products/dry-cooler/05-spec-table.jpg",
      "/products/dry-cooler/06-materials-craftsmanship.png",
      "/products/dry-cooler/07-roof-installation-scene.jpg",
    ],
    keyFeatures: [
      "Zero water-loss dry cooling — no evaporative water consumption",
      "V-type copper-tube, aluminum-fin coil arrangement",
      "EC axial direct-drive fans, 10–100% variable speed",
      "Hot-dip galvanized steel frame with protective fan guards",
      "RS485 communication for BMS/monitoring integration",
      "Model range from 120kW to 1400kW; OEM/ODM and custom capacity available",
    ],
    specGroups: [
      {
        title: "Performance (by model)",
        specs: [
          { label: "DC-120", value: "120kW, 2 fans, 3.6kW fan power, 60dB" },
          { label: "DC-400", value: "400kW, 8 fans, 14.4kW fan power, 65dB" },
          { label: "DC-800", value: "800kW, 18 fans, 32.4kW fan power, 68dB" },
          { label: "DC-1400", value: "1400kW, 20 fans, 80kW fan power, 70dB" },
        ],
      },
      {
        title: "Construction",
        specs: [
          { label: "Coil Type", value: "Copper tube + aluminum fin, V-type arrangement" },
          { label: "Fan Type", value: "EC axial direct drive, 10–100% variable speed" },
          { label: "Frame", value: "Hot-dip galvanized steel" },
          { label: "Design Pressure", value: "1.0 MPa" },
          { label: "Communication", value: "RS485" },
        ],
      },
    ],
    applications: ["Data center liquid cooling loop heat rejection", "Chilled water system heat rejection", "Industrial process cooling", "Sites requiring zero water consumption for cooling"],
    customizationOptions: ["Cooling capacity", "Fan count / configuration", "Coil coating", "OEM/ODM"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "What is a dry cooler and how is it different from a cooling tower?",
        answer:
          "A dry cooler rejects heat to ambient air through a closed liquid loop and finned coil, using no evaporative water — unlike a cooling tower, which relies on water evaporation to reject heat. Dry coolers trade some efficiency in hot climates for zero water consumption and lower maintenance.",
      },
      {
        question: "What is the V-type coil arrangement for?",
        answer:
          "Arranging the copper-tube/aluminum-fin coils in a V shape increases the heat exchange surface area within the same footprint compared to a flat coil arrangement, improving heat rejection capacity per unit of floor space.",
      },
      {
        question: "What capacity range does the V-Type Dry Cooler cover?",
        answer:
          "The standard model range spans 120kW to 1400kW (DC-120 through DC-1400), with fan count and fan power scaled to each capacity tier; custom capacities and configurations are available on request.",
      },
    ],
    relatedProductSlugs: ["liquid-cooling", "cdu", "precision-air-conditioner"],
    relatedSolutionSlugs: ["data-center-infrastructure", "liquid-cooling"],
  },

  // ---------------- Raised Floor ----------------
  {
    slug: "anti-static-raised-floor",
    category: "raised-floor",
    name: "Anti-Static Raised Floor",
    shortName: "Anti-Static Raised Floor",
    tagline: "Raised access flooring for airflow management and cable routing in data center white space.",
    overview:
      "Wandtung anti-static raised floor panels provide an elevated, load-rated deck for underfloor air distribution and cable routing, with a static-dissipative surface finish suited to data center and control room environments. Steel panels use 2.0mm cold-rolled SPCC steel with a powder-coated finish and precision corner lock system, available in solid or ventilated (25% open area) versions, on a height-adjustable galvanized pedestal and heavy-duty cross stringer system.",
    images: [
      "/products/anti-static-raised-floor/01-main.jpg",
      "/products/anti-static-raised-floor/02-ventilated-panel.jpg",
      "/products/anti-static-raised-floor/03-panel-structure.jpg",
      "/products/anti-static-raised-floor/04-system-overview.jpg",
      "/products/anti-static-raised-floor/05-cleanroom-scene.jpg",
      "/products/anti-static-raised-floor/06-data-center-scene.jpg",
    ],
    keyFeatures: [
      "Static-dissipative HPL, PVC or powder-coated steel surface finish",
      "Steel or calcium sulphate core options",
      "Ventilated panel option with 25% open area for underfloor airflow",
      "2.0mm cold-rolled SPCC steel with precision corner lock system",
      "Height-adjustable galvanized pedestal and heavy-duty cross stringer frame",
      "High point-load and uniform-load rating",
    ],
    specGroups: [
      {
        title: "Panel Specification",
        specs: [
          { label: "Panel Size", value: "600 x 600 mm (standard), custom sizes available" },
          { label: "Core Material", value: "Steel-encased / calcium sulphate" },
          { label: "Steel Thickness", value: "2.0mm cold-rolled SPCC (steel panels)" },
          { label: "Load Rating", value: "1000–1500 kg/m² (model dependent)" },
          { label: "Surface Resistance", value: "10^6–10^9 Ω (anti-static)" },
          { label: "Ventilated Option", value: "25% open area airflow panel" },
        ],
      },
      {
        title: "Pedestal & Frame",
        specs: [
          { label: "Pedestal Material", value: "Galvanized steel, adjustable" },
          { label: "Height Range", value: "100–500mm, adjustable" },
          { label: "Frame", value: "Heavy-duty cross stringer system" },
        ],
      },
    ],
    applications: ["Data center white space", "Control rooms", "Clean rooms", "Server rooms"],
    customizationOptions: ["Panel core type", "Finish", "Solid or ventilated panel", "Pedestal height"],
    standards: ["CE certified", "ISO 9001", "Certification available on request per project spec"],
    faqs: [
      {
        question: "What is anti-static raised flooring used for in a data center?",
        answer:
          "Anti-static raised flooring creates a void beneath the data hall floor for underfloor air distribution and cable routing, while its static-dissipative surface reduces the risk of electrostatic discharge damaging sensitive IT equipment.",
      },
      {
        question: "What is a ventilated raised floor panel used for?",
        answer:
          "A ventilated (perforated) raised floor panel has roughly 25% open area to direct underfloor cold air up into targeted cold aisles or equipment rows, and is typically mixed with solid panels across a data hall rather than used throughout.",
      },
    ],
    relatedProductSlugs: ["cable-tray", "precision-air-conditioner", "glass-raised-floor"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "glass-raised-floor",
    category: "raised-floor",
    name: "Glass Anti-Static Raised Floor",
    shortName: "Glass Raised Floor",
    tagline: "Transparent tempered glass access floor combining anti-static protection with a decorative, see-through finish.",
    overview:
      "The Wandtung Glass Anti-Static Raised Floor pairs a 12mm tempered glass surface with a precision aluminum alloy edge frame and height-adjustable galvanized pedestal, giving data center white space, network operations centers, offices and exhibition spaces an elevated access floor that is both anti-static and visually transparent, exposing the cable routing beneath.",
    featured: true,
    images: [
      "/products/glass-raised-floor/01-main.jpg",
      "/products/glass-raised-floor/02-key-selling-points.jpg",
      "/products/glass-raised-floor/03-product-detail.jpg",
      "/products/glass-raised-floor/04-pedestal-detail.jpg",
      "/products/glass-raised-floor/05-installation-scene.jpg",
      "/products/glass-raised-floor/06-office-showroom-scene.jpg",
    ],
    keyFeatures: [
      "12mm tempered glass surface, anti-static resistance 10^6–10^9 Ω",
      "See-through design exposing underfloor cable routing",
      "Precision aluminum alloy edge frame",
      "Height-adjustable galvanized pedestal, 100–500mm",
      "High load bearing, 800–1000 kg/m²",
      "Elegant, decorative finish for modern offices and showrooms",
      "Custom panel sizes; OEM/ODM available",
    ],
    specGroups: [
      {
        title: "Panel Specification",
        specs: [
          { label: "Panel Size", value: "600 x 600 mm (standard), custom sizes available" },
          { label: "Surface Material", value: "12mm tempered glass" },
          { label: "Edge Frame", value: "Precision aluminum alloy" },
          { label: "Load Rating", value: "800–1000 kg/m²" },
          { label: "Surface Resistance", value: "10^6–10^9 Ω (anti-static)" },
        ],
      },
      {
        title: "Pedestal",
        specs: [
          { label: "Material", value: "Galvanized steel" },
          { label: "Height Range", value: "100–500mm, adjustable" },
        ],
      },
    ],
    applications: ["Data center white space with visible cable routing", "Network operations centers", "Modern offices", "Showrooms and exhibitions"],
    customizationOptions: ["Panel size", "Pedestal height", "Load rating", "OEM/ODM"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "Is a glass raised floor as strong as a standard anti-static raised floor?",
        answer:
          "Yes. The 12mm tempered glass surface with aluminum alloy edge frame is rated for 800–1000 kg/m², comparable to standard steel or calcium sulphate core anti-static floor panels, while adding a transparent, decorative finish.",
      },
      {
        question: "Where is a glass raised floor typically used instead of a standard raised floor?",
        answer:
          "Glass raised floors are chosen where the underfloor cable routing or infrastructure is meant to be visible as a design feature — modern office lobbies, showrooms, exhibition spaces and network operations centers — while standard opaque anti-static floors are used in general data center white space.",
      },
    ],
    relatedProductSlugs: ["anti-static-raised-floor", "cable-tray"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "calcium-sulphate-raised-floor",
    category: "raised-floor",
    name: "Calcium Sulphate Raised Floor",
    shortName: "Calcium Sulphate Floor",
    tagline: "High-strength calcium sulphate core raised floor panel for heavy load environments.",
    overview:
      "Wandtung Calcium Sulphate Raised Floor panels use a dense calcium sulphate core for high load capacity and dimensional stability, suited to data halls and equipment rooms with heavy point loads or fire-rating requirements beyond a standard steel-encased panel. Panels combine an HPL anti-static surface with precision black edge trim protection, a galvanized steel stringer frame, and a height-adjustable pedestal system.",
    images: [
      "/products/calcium-sulphate-raised-floor/01-main.jpg",
      "/products/calcium-sulphate-raised-floor/02-top-view.jpg",
      "/products/calcium-sulphate-raised-floor/03-structure-detail.jpg",
      "/products/calcium-sulphate-raised-floor/04-edge-detail.jpg",
      "/products/calcium-sulphate-raised-floor/05-installation-scene.jpg",
      "/products/calcium-sulphate-raised-floor/06-data-center-scene.jpg",
    ],
    keyFeatures: [
      "High-density calcium sulphate core for load strength",
      "HPL anti-static surface, resistance 10^6–10^9 Ω",
      "Precision black edge trim protection",
      "Dimensionally stable under humidity variation",
      "Class A fire rating, non-combustible core",
      "Galvanized steel stringer frame and height-adjustable pedestal, 100–500mm",
    ],
    specGroups: [
      {
        title: "Panel Specification",
        specs: [
          { label: "Panel Size", value: "600 x 600 mm (standard), custom sizes available" },
          { label: "Core Material", value: "Calcium sulphate, steel-encased" },
          { label: "Surface Finish", value: "HPL anti-static laminate with black edge trim" },
          { label: "Load Rating", value: "1200 kg/m² uniform load, up to 1250 kg concentrated load (model dependent)" },
          { label: "Surface Resistance", value: "10^6–10^9 Ω (anti-static)" },
          { label: "Fire Rating", value: "Class A, non-combustible core" },
        ],
      },
      {
        title: "Pedestal & Frame",
        specs: [
          { label: "Pedestal Material", value: "Galvanized steel, adjustable" },
          { label: "Height Range", value: "100–500mm, adjustable" },
          { label: "Frame", value: "Galvanized steel stringer system" },
        ],
      },
    ],
    applications: ["High-load data halls", "Fire-rated equipment rooms", "Heavy equipment mounting areas"],
    customizationOptions: ["Panel thickness", "Finish", "Pedestal system"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "When should I choose calcium sulphate over a steel raised floor panel?",
        answer:
          "Calcium sulphate core panels are typically chosen when higher load capacity, better fire resistance, or greater dimensional stability under humidity change is needed compared to a standard steel-encased honeycomb panel.",
      },
      {
        question: "What fire rating does the calcium sulphate panel carry?",
        answer:
          "The calcium sulphate core is non-combustible and the panel carries a Class A fire rating, making it suitable for data halls and equipment rooms with stricter fire-safety requirements than a standard steel-encased panel.",
      },
    ],
    relatedProductSlugs: ["anti-static-raised-floor", "steel-cementitious-raised-floor"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "steel-cementitious-raised-floor",
    category: "raised-floor",
    name: "Steel Cementitious Raised Floor",
    shortName: "Steel Cementitious Floor",
    tagline: "Steel-encased cementitious-core raised floor panel for standard data center loads.",
    overview:
      "Wandtung Steel Cementitious Raised Floor panels use a lightweight cementitious core fully encased in galvanized steel, providing a cost-effective, widely used raised floor option for standard data center and equipment room loads.",
    keyFeatures: [
      "Fully steel-encased cementitious core",
      "Cost-effective for standard load requirements",
      "Consistent panel-to-panel dimensional tolerance",
      "Wide compatibility with standard pedestal/stringer systems",
    ],
    specGroups: [
      {
        title: "Panel Specification",
        specs: [
          { label: "Panel Size", value: "600 x 600 mm" },
          { label: "Core Material", value: "Cementitious, steel-encased" },
          { label: "Load Rating", value: "Up to 900 kg concentrated load (model dependent)" },
        ],
      },
    ],
    applications: ["Standard data center white space", "Equipment rooms", "General commercial raised floor applications"],
    customizationOptions: ["Panel thickness", "Finish", "Pedestal height"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "Is steel cementitious raised floor suitable for a typical data center?",
        answer:
          "Yes — it's one of the most widely used raised floor constructions for standard data center loads, offering a cost-effective balance of load capacity, availability and compatibility with common pedestal systems.",
      },
    ],
    relatedProductSlugs: ["calcium-sulphate-raised-floor", "anti-static-raised-floor"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "airflow-floor",
    category: "raised-floor",
    name: "Airflow Floor",
    shortName: "Airflow Floor",
    tagline: "Perforated raised floor panel engineered for underfloor cold-air distribution.",
    overview:
      "Wandtung Airflow Floor panels are perforated raised floor tiles engineered to deliver a controlled volume of underfloor cold air into the cold aisle, with adjustable or fixed open-area options to balance airflow across the data hall.",
    keyFeatures: [
      "Perforated panel for controlled underfloor air delivery",
      "Adjustable damper options to balance airflow by zone",
      "Compatible with standard 600x600mm raised floor grid",
      "Available in a range of open-area percentages",
    ],
    specGroups: [
      {
        title: "Panel Specification",
        specs: [
          { label: "Panel Size", value: "600 x 600 mm" },
          { label: "Open Area", value: "25% / 40% / 56% (model dependent)" },
          { label: "Damper", value: "Fixed or adjustable options" },
        ],
      },
    ],
    applications: ["Cold aisle underfloor air delivery", "Data center airflow balancing", "Raised-floor cooled equipment rooms"],
    customizationOptions: ["Open-area percentage", "Damper type", "Finish"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "How do I choose the right open-area percentage for airflow floor tiles?",
        answer:
          "Higher open-area tiles deliver more airflow per tile and suit higher-density cold aisles; lower open-area tiles are used where less airflow is needed, to avoid over-pressurizing low-density areas. Airflow modeling or a qualified engineer should size tile placement for the specific room.",
      },
    ],
    relatedProductSlugs: ["anti-static-raised-floor", "row-based-cooling"],
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
      "Wandtung cable trays provide structured, serviceable pathways for power and data cabling above racks or under raised floors, available in wire mesh and ladder-type construction for different load and cable-fill requirements.",
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
    standards: [
      "CE (LVD 2014/35/EU, EN 61537:2007) — ladder, trough and optical fiber raceway lines",
      "TÜV SÜD Attestation of Conformity — cable tray & cable ladder system",
      "UL Certified — cable trays (CSA C22.2 No. 126.1, NFPA 70) and optical fiber raceway (UL 2024)",
    ],
    faqs: [
      {
        question: "Wire mesh vs ladder cable tray — which is better for a data center?",
        answer:
          "Wire mesh tray is lightweight, easy to modify on site and well suited to structured data/fiber cabling, while ladder tray offers higher load capacity and better heat dissipation for heavier power cable runs — many data centers use both, segregated by cable type.",
      },
    ],
    relatedProductSlugs: ["anti-static-raised-floor", "network-cabinet", "fiber-optic-cable-tray"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "fiber-optic-cable-tray",
    category: "cable-management",
    name: "Polymer Fiber Optic Cable Tray",
    shortName: "Fiber Optic Cable Tray",
    tagline: "Modular polymer raceway system protecting fiber optic cable bend radius through the full pathway.",
    overview:
      "The Wandtung Polymer Fiber Optic Cable Tray is a modular, UL94-V0 flame-retardant plastic raceway system with smooth, rounded internal channels that protect fiber optic cable from sharp bends and abrasion along its entire route. The modular fitting range — straight sections in multiple widths, 90° and 45° elbows, tees, reducers and vertical risers — snap together with tool-free connectors to build a complete enclosed fiber pathway between racks, rooms and floors.",
    featured: true,
    images: [
      "/products/fiber-optic-cable-tray/01-straight-120x100.png",
      "/products/fiber-optic-cable-tray/04-90deg-elbow.png",
      "/products/fiber-optic-cable-tray/08-tee-with-connector.png",
      "/products/fiber-optic-cable-tray/11-vertical-riser.png",
      "/products/fiber-optic-cable-tray/06-45deg-up.png",
      "/products/fiber-optic-cable-tray/07-reducer.png",
      "/products/fiber-optic-cable-tray/02-straight-240x100.png",
      "/products/fiber-optic-cable-tray/03-straight-360x100.png",
      "/products/fiber-optic-cable-tray/05-tee-100x100.png",
      "/products/fiber-optic-cable-tray/09-90deg-elbow-50x50.png",
      "/products/fiber-optic-cable-tray/10-square-straight.png",
    ],
    keyFeatures: [
      "UL94-V0 flame-retardant polymer construction",
      "Smooth, rounded internal channel protects fiber bend radius along the full route",
      "Full modular fitting range: straight sections, 90°/45° elbows, tees, reducers, vertical risers",
      "Snap-fit, tool-free connectors between sections",
      "Straight sections available in 120mm, 240mm and 360mm widths (100mm depth)",
      "Reduced-size (50x50mm) fittings for tighter routing",
    ],
    specGroups: [
      {
        title: "Construction",
        specs: [
          { label: "Material", value: "UL94-V0 flame-retardant polymer" },
          { label: "Straight Section Widths", value: "120 / 240 / 360 mm (100mm depth)" },
          { label: "Reduced-Size Fittings", value: "50 x 50 mm elbow" },
          { label: "Connection", value: "Snap-fit, tool-free" },
        ],
      },
      {
        title: "Fitting Range",
        specs: [
          { label: "Elbows", value: "90° horizontal, 45° riser" },
          { label: "Junctions", value: "Tee (plain and with connector port)" },
          { label: "Transitions", value: "Reducer, vertical riser, square straight duct" },
        ],
      },
    ],
    applications: [
      "Fiber optic cable pathways between racks and rows",
      "Inter-room and inter-floor fiber backbone routing",
      "Data center and telecom fiber distribution",
      "Structured cabling rooms requiring bend-radius protection",
    ],
    customizationOptions: ["Section width", "Fitting mix", "Color", "OEM/ODM"],
    standards: ["UL94-V0 flame retardancy", "Certification available on request per project spec"],
    faqs: [
      {
        question: "Why use a dedicated fiber optic cable tray instead of a standard wire mesh or ladder tray?",
        answer:
          "A dedicated polymer fiber tray fully encloses the cable in a smooth, rounded channel that maintains minimum bend radius and protects against abrasion along the entire route, whereas open wire mesh or ladder trays leave fiber exposed and rely on the installer to manage bend radius manually at every turn.",
      },
      {
        question: "What fitting types are available for the polymer fiber tray system?",
        answer:
          "The system includes straight sections in multiple widths, 90° and 45° elbows (including a reduced 50x50mm elbow), tee junctions (plain and with a connector port), reducers, vertical risers and square straight ducts, all connecting with tool-free snap-fit joints to build a complete enclosed pathway.",
      },
    ],
    relatedProductSlugs: ["cable-tray", "wire-mesh-cable-tray"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "wire-mesh-cable-tray",
    category: "cable-management",
    name: "Wire Mesh Cable Tray",
    shortName: "Wire Mesh Tray",
    tagline: "Lightweight welded wire mesh tray for structured, field-modifiable cable pathways.",
    overview:
      "Wandtung Wire Mesh Cable Tray is a welded wire construction that's lightweight, ventilated and easy to cut and reconfigure on site, making it a common choice for structured data and fiber cabling pathways above racks or along containment routes.",
    keyFeatures: [
      "Welded wire construction — lightweight and highly ventilated",
      "Field-cuttable and reconfigurable without special tools",
      "Wide range of standard widths",
      "Zinc-plated or stainless finish options",
    ],
    specGroups: [
      {
        title: "Construction",
        specs: [
          { label: "Type", value: "Welded wire mesh" },
          { label: "Width", value: "50 – 600 mm" },
          { label: "Finish", value: "Zinc-plated / stainless steel" },
        ],
      },
    ],
    applications: ["Structured data/fiber cabling", "Overhead cabling above racks", "Telecom rooms"],
    customizationOptions: ["Width", "Finish", "Accessory splices"],
    standards: [
      "UL Certified — cable trays (CSA C22.2 No. 126.1, NFPA 70)",
      "TÜV SÜD Attestation of Conformity — cable tray system",
    ],
    faqs: [
      {
        question: "Wire mesh vs ladder cable tray — which is better for a data center?",
        answer:
          "Wire mesh tray is lightweight, easy to modify on site and well suited to structured data/fiber cabling, while ladder tray offers higher load capacity and better heat dissipation for heavier power cable runs — many data centers use both, segregated by cable type.",
      },
    ],
    relatedProductSlugs: ["ladder-cable-tray", "cable-tray", "network-cabinet"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "ladder-cable-tray",
    category: "cable-management",
    name: "Ladder Cable Tray",
    shortName: "Ladder Tray",
    tagline: "High-capacity ladder-type tray for heavier power cable runs.",
    overview:
      "Wandtung Ladder Cable Tray uses a rung-and-rail construction rated for higher cable fill and load capacity than wire mesh, with good heat dissipation for heavier power cable runs across data centers, telecom rooms and industrial facilities.",
    keyFeatures: [
      "Rung-and-rail construction for high load capacity",
      "Good heat dissipation for power cable bundles",
      "Bolted or tool-free section connectors",
      "Wide range of standard widths and rung spacing",
    ],
    specGroups: [
      {
        title: "Construction",
        specs: [
          { label: "Type", value: "Ladder (rung-and-rail)" },
          { label: "Width", value: "100 – 900 mm" },
          { label: "Finish", value: "Zinc-plated / hot-dip galvanized" },
        ],
      },
    ],
    applications: ["Power cable runs", "Industrial cabling pathways", "Telecom and data center backbone routing"],
    customizationOptions: ["Width", "Rung spacing", "Finish"],
    standards: [
      "CE (LVD 2014/35/EU, EN 61537:2007) — Certificate No. M.2021.206.C67668",
      "TÜV SÜD Attestation of Conformity — cable tray & cable ladder system",
      "UL Certified — cable trays (CSA C22.2 No. 126.1, NFPA 70)",
    ],
    faqs: [
      {
        question: "When should I use ladder tray instead of wire mesh?",
        answer:
          "Ladder tray is generally preferred for heavier power cable bundles and longer unsupported spans, since its rung-and-rail construction offers higher load capacity and better heat dissipation than lightweight wire mesh tray.",
      },
    ],
    relatedProductSlugs: ["wire-mesh-cable-tray", "cable-tray", "aluminum-cable-ladder"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "aluminum-cable-ladder",
    category: "cable-management",
    name: "Aluminum Alloy Cable Ladder",
    shortName: "Aluminum Ladder Tray",
    tagline: "Lightweight, corrosion-resistant aluminum ladder tray with tool-free T-slot assembly.",
    overview:
      "The Wandtung Aluminum Alloy Cable Ladder is built from 6063-T5 aluminum alloy extrusion with anodized surface treatment, giving it roughly a third of the weight of an equivalent steel ladder tray while remaining corrosion-resistant, with a precision T-slot connection system that assembles with M8 anti-corrosion bolts — no welding required — for fast, modular installation in data center and server room environments.",
    featured: true,
    images: [
      "/products/aluminum-cable-ladder/01-main.jpg",
      "/products/aluminum-cable-ladder/02-structure-detail.jpg",
      "/products/aluminum-cable-ladder/03-profile-material.jpg",
      "/products/aluminum-cable-ladder/04-manufacturing-process.jpg",
      "/products/aluminum-cable-ladder/05-assembly-scene.jpg",
    ],
    keyFeatures: [
      "6063-T5 aluminum alloy extrusion, anodized surface treatment",
      "Lightweight — roughly 1/3 the weight of an equivalent steel ladder tray",
      "Tensile strength ≥160MPa",
      "Precision T-slot connection system, no welding required",
      "Heavy-duty aluminum side rails and aluminum alloy cross rungs",
      "M8 anti-corrosion bolted assembly for fast, modular installation",
      "Corrosion resistant; OEM/ODM available",
    ],
    specGroups: [
      {
        title: "Construction",
        specs: [
          { label: "Type", value: "Ladder (rung-and-rail), aluminum alloy" },
          { label: "Material", value: "6063-T5 aluminum alloy extrusion" },
          { label: "Surface Treatment", value: "Anodized" },
          { label: "Tensile Strength", value: "≥160MPa" },
          { label: "Weight", value: "~1/3 of equivalent steel ladder tray" },
        ],
      },
      {
        title: "Assembly",
        specs: [
          { label: "Connection System", value: "Precision T-slot, tool-free profile fit" },
          { label: "Fasteners", value: "M8 anti-corrosion bolts, no welding required" },
        ],
      },
    ],
    applications: ["Data center power cable runs", "Server rooms", "Telecom equipment rooms", "Corrosive or coastal environments requiring non-ferrous tray"],
    customizationOptions: ["Width", "Rung spacing", "Finish", "OEM/ODM"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "Why choose an aluminum ladder tray over a steel ladder tray?",
        answer:
          "Aluminum ladder tray weighs roughly a third of an equivalent steel tray, simplifying overhead installation and reducing structural loading, while its anodized 6063-T5 aluminum construction resists corrosion without the zinc or hot-dip galvanizing steel trays require — useful in humid, coastal or corrosive environments.",
      },
      {
        question: "Does the aluminum ladder tray require welding to assemble?",
        answer:
          "No. Sections connect through a precision T-slot system fastened with M8 anti-corrosion bolts, allowing fast, modular, tool-light installation without on-site welding.",
      },
    ],
    relatedProductSlugs: ["ladder-cable-tray", "wire-mesh-cable-tray", "cable-tray"],
    relatedSolutionSlugs: ["data-center-infrastructure"],
  },
  {
    slug: "solid-bottom-cable-tray",
    category: "cable-management",
    name: "Solid Bottom (Trough) Cable Tray",
    shortName: "Solid Bottom Tray",
    tagline: "Fully enclosed solid-bottom trough tray with cover for dust and physical protection of cable runs.",
    overview:
      "The Wandtung Solid Bottom Cable Tray is a fully enclosed trough-type tray with a solid base, ventilated side walls and a snap-on cover, giving cables physical protection from dust, debris and accidental contact along the full run. It is manufactured in stainless steel, aluminum alloy, hot-dip galvanized and fireproof variants, ships with a complete fitting range including elbows, and mounts to ceiling, wall or horizontal supports.",
    featured: true,
    images: [
      "/products/solid-bottom-cable-tray/01-main.png",
      "/products/solid-bottom-cable-tray/02-elbow-fitting.jpg",
      "/products/solid-bottom-cable-tray/03-complete-fittings.png",
      "/products/solid-bottom-cable-tray/04-full-range-types.png",
      "/products/solid-bottom-cable-tray/05-custom-sizes.png",
      "/products/solid-bottom-cable-tray/06-easy-installation.png",
      "/products/solid-bottom-cable-tray/07-stacked-detail.jpg",
      "/products/solid-bottom-cable-tray/08-server-room-scene.png",
    ],
    keyFeatures: [
      "Fully enclosed solid-bottom trough with snap-on cover",
      "Ventilated side walls for airflow and cable access",
      "Available in stainless steel, aluminum alloy, hot-dip galvanized and fireproof variants",
      "Complete fitting range: elbows, covers, connectors",
      "Custom width and depth; OEM accepted",
      "Multiple mounting methods — ceiling, wall or horizontal",
    ],
    specGroups: [
      {
        title: "Construction",
        specs: [
          { label: "Type", value: "Solid-bottom trough with cover" },
          { label: "Material Options", value: "Stainless steel / aluminum alloy / hot-dip galvanized / fireproof" },
          { label: "Side Walls", value: "Ventilated (slotted)" },
          { label: "Sizing", value: "Custom width and depth available" },
        ],
      },
      {
        title: "Fittings & Mounting",
        specs: [
          { label: "Fittings", value: "Elbows, covers, connectors — full system" },
          { label: "Mounting", value: "Ceiling, wall or horizontal support" },
        ],
      },
    ],
    applications: ["Data center and server room cabling requiring dust/physical protection", "Telecom rooms", "Industrial cabling pathways", "Environments needing enclosed, tamper-resistant cable routing"],
    customizationOptions: ["Width", "Depth", "Material finish", "Fitting set", "OEM/ODM"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "When should I choose a solid-bottom (trough) tray over an open wire mesh or ladder tray?",
        answer:
          "A solid-bottom trough tray with cover fully encloses the cable run, protecting against dust, debris and accidental contact — useful in areas with foot traffic, dusty environments, or where cables need to be shielded from view, whereas open wire mesh or ladder tray is chosen for easier inspection, ventilation and lower cost.",
      },
      {
        question: "What material options are available for the solid-bottom tray?",
        answer:
          "The tray is manufactured in stainless steel, aluminum alloy, hot-dip galvanized steel and fireproof variants, selected based on the corrosion, weight and fire-rating requirements of the installation environment.",
      },
    ],
    relatedProductSlugs: ["cable-tray", "ladder-cable-tray", "wire-mesh-cable-tray"],
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
      "The Wandtung Battery Energy Storage System integrates battery racks, a power conversion system (PCS) and an energy management system (EMS) in cabinet or containerized form factors, supporting peak shaving, backup power and renewable energy integration for data centers and industrial sites.",
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
    standards: ["Certification available on request per project spec"],
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
  {
    slug: "solar-power-system",
    category: "energy-storage",
    name: "Solar Power System",
    shortName: "Solar Power System",
    tagline: "Grid-tied or off-grid solar generation paired with site energy storage.",
    overview:
      "The Wandtung Solar Power System combines PV generation with inverters and, where required, battery storage to supply site power for grid-tied offset or off-grid operation — sized for data center auxiliary loads, telecom sites and industrial facilities looking to reduce grid dependence.",
    keyFeatures: [
      "Grid-tied or off-grid configuration",
      "PV array with string or central inverters",
      "Optional battery storage integration for off-grid/backup use",
      "Remote monitoring of generation and consumption",
    ],
    specGroups: [
      {
        title: "System",
        specs: [
          { label: "Configuration", value: "Grid-tied / off-grid / hybrid" },
          { label: "Components", value: "PV array, inverter(s), optional battery storage" },
          { label: "Monitoring", value: "Remote generation/consumption dashboard" },
        ],
      },
    ],
    applications: ["Telecom site power offset", "Remote/off-grid facility power", "Data center renewable integration"],
    customizationOptions: ["Array capacity", "Grid-tied vs. off-grid design", "Battery storage integration"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "Can a solar power system fully replace grid power for a data center?",
        answer:
          "For most data centers, solar is deployed to offset a portion of grid consumption or support auxiliary/backup loads rather than fully replace utility power, given the load consistency data centers require — off-grid solar-plus-storage is more common for smaller or remote sites such as telecom base stations.",
      },
    ],
    relatedProductSlugs: ["battery-energy-storage-system", "energy-storage-system", "solar-pv-module"],
    relatedSolutionSlugs: ["energy-storage"],
  },
  {
    slug: "solar-pv-module",
    category: "energy-storage",
    name: "Solar PV Module",
    shortName: "Solar PV Module",
    tagline: "High-efficiency monocrystalline and bifacial solar panels, 380W to 700W, multi-brand sourcing.",
    overview:
      "The Wandtung Solar PV Module range covers high-efficiency monocrystalline panels — including a 640–670W HPBC 2.0 cell series and a 585–595W bifacial dual-glass half-cell series — backed by a 15-year product warranty and 30-year linear power output guarantee, and certified to TUV, CSA and CE standards. Beyond our own panels, Wandtung sources and supplies the full range of major-brand modules (Jinko, LONGI, Trina, JA Solar, Risen, AIKO) with sample services and customized packaging, giving project buyers a single source for solar generation hardware alongside our storage and power systems.",
    featured: true,
    images: [
      "/products/solar-pv-module/01-main.jpg",
      "/products/solar-pv-module/02-key-features.jpg",
      "/products/solar-pv-module/03-dimensions.jpg",
      "/products/solar-pv-module/04-brand-range.jpg",
      "/products/solar-pv-module/05-ground-station-scene.jpg",
      "/products/solar-pv-module/06-installation-scenes.jpg",
    ],
    keyFeatures: [
      "640–670W monocrystalline panel with HPBC 2.0 cell technology",
      "585–595W bifacial dual-glass panel with half-cell technology",
      "Monocrystalline PERC cells, high conversion efficiency",
      "15-year product warranty for materials and workmanship",
      "30-year linear power output guarantee",
      "TUV, CSA and CE certified",
      "Multi-brand sourcing available — Jinko, LONGI, Trina, JA Solar, Risen, AIKO",
      "Sample services and customized packaging",
    ],
    specGroups: [
      {
        title: "Monocrystalline Series",
        specs: [
          { label: "Power Range", value: "640 – 670 W" },
          { label: "Cell Technology", value: "HPBC 2.0" },
          { label: "Dimensions", value: "2382 x 1134 x 30 mm" },
          { label: "Dimensional Tolerance", value: "Length/Width ±2mm" },
        ],
      },
      {
        title: "Bifacial Series",
        specs: [
          { label: "Power Range", value: "585 – 595 W" },
          { label: "Cell Technology", value: "Half-cell, monocrystalline PERC" },
          { label: "Glass Type", value: "Bifacial dual glass" },
        ],
      },
      {
        title: "Warranty & Certification",
        specs: [
          { label: "Product Warranty", value: "15 years, materials and workmanship" },
          { label: "Power Output Guarantee", value: "30-year linear power output guarantee" },
          { label: "Certification", value: "TUV, CSA, CE" },
        ],
      },
    ],
    applications: ["Ground-mounted solar farms", "Rooftop commercial and industrial solar", "Data center and telecom site renewable integration", "Off-grid and hybrid solar-storage systems"],
    customizationOptions: ["Power output tier", "Monocrystalline or bifacial series", "Brand selection (Jinko / LONGI / Trina / JA Solar / Risen / AIKO)", "Packaging", "OEM/ODM"],
    standards: ["TUV certified", "CSA certified", "CE certified"],
    faqs: [
      {
        question: "What is the difference between the monocrystalline and bifacial panel series?",
        answer:
          "The monocrystalline HPBC 2.0 series (640–670W) is a single-sided, front-generating panel optimized for maximum power in a standard footprint. The bifacial dual-glass half-cell series (585–595W) also generates from light reflected onto its rear face, adding extra yield in ground-mount or elevated installations with reflective surfaces beneath.",
      },
      {
        question: "Does Wandtung only sell its own solar panels?",
        answer:
          "No. Alongside our own monocrystalline and bifacial series, Wandtung sources and supplies major-brand solar modules — including Jinko, LONGI, Trina, JA Solar, Risen and AIKO — with sample services and customized packaging, so project buyers can specify the panel brand and power tier that fits their project through a single supplier.",
      },
      {
        question: "What warranty applies to the solar panels?",
        answer:
          "Our own-brand panels carry a 15-year product warranty for materials and workmanship, plus a 30-year linear power output guarantee. Warranty terms for sourced third-party brands follow each manufacturer's standard warranty.",
      },
    ],
    relatedProductSlugs: ["solar-power-system", "battery-energy-storage-system", "containerized-energy-storage-system", "solar-ground-mounting-system"],
    relatedSolutionSlugs: ["energy-storage"],
  },
  {
    slug: "solar-ground-mounting-system",
    category: "energy-storage",
    name: "Solar Ground Mounting System",
    shortName: "Ground Mounting System",
    tagline: "Aluminum alloy rail and hot-dip galvanized steel post ground-mount racking, 10kW to 10MW.",
    overview:
      "The Wandtung Solar Ground Mounting System pairs 6063-T5 aluminum alloy module rails with hot-dip galvanized steel posts and a triangulated wind-resistant brace, giving ground-mount solar arrays a bolt-fixed anchor base, custom tilt angle from 10° to 60°, and a rated wind load of ≥180km/h. The modular design scales from a single-post bracket for small arrays up to utility-scale layouts from 10kW to 10MW, with fast on-site assembly and a 25-year structural warranty.",
    featured: true,
    images: [
      "/products/solar-ground-mounting-system/01-main.jpg",
      "/products/solar-ground-mounting-system/02-single-post-structure.jpg",
      "/products/solar-ground-mounting-system/03-dual-angle-view.jpg",
      "/products/solar-ground-mounting-system/04-ground-installation.jpg",
      "/products/solar-ground-mounting-system/05-utility-scale-installation.jpg",
    ],
    keyFeatures: [
      "6063-T5 aluminum alloy module rail",
      "Hot-dip galvanized steel vertical post",
      "Triangulated / X-brace wind-resistant structure",
      "Bolt-fixed anchor base plate",
      "Custom tilt angle, 10° – 60°",
      "Rated wind load ≥180km/h",
      "Modular design for fast on-site assembly",
      "25-year structural warranty",
    ],
    specGroups: [
      {
        title: "Structure",
        specs: [
          { label: "Rail Material", value: "6063-T5 aluminum alloy" },
          { label: "Post Material", value: "Hot-dip galvanized steel" },
          { label: "Bracing", value: "Triangulated / X-brace wind-resistant structure" },
          { label: "Foundation", value: "Bolt-fixed anchor base plate" },
        ],
      },
      {
        title: "Performance & Scale",
        specs: [
          { label: "Tilt Angle", value: "Custom, 10° – 60°" },
          { label: "Wind Load Rating", value: "≥180km/h" },
          { label: "System Scale", value: "10kW – 10MW+" },
          { label: "Structural Warranty", value: "25 years" },
        ],
      },
    ],
    applications: ["Utility-scale ground-mount solar farms", "Commercial and industrial ground-mount arrays", "Agrivoltaic / farmland solar installations", "Off-grid and remote-site solar arrays"],
    customizationOptions: ["Tilt angle", "Post height / row spacing", "Single-post or multi-post layout", "Regional wind/snow load design", "OEM/ODM"],
    standards: ["25-year structural warranty", "Certification available on request per project spec"],
    faqs: [
      {
        question: "Can the mounting system be customized for local wind and snow loads?",
        answer:
          "Yes. Post spacing, bracing and foundation sizing are engineered per project site conditions, and the standard structure is rated for wind loads of ≥180km/h — higher-load regional designs are available on request.",
      },
      {
        question: "What tilt angle range does the system support?",
        answer:
          "The bracket system supports a custom tilt angle from 10° to 60°, set at installation to match the project's latitude and energy yield target.",
      },
      {
        question: "What project scale does this mounting system suit?",
        answer:
          "The modular single-post and multi-post bracket design scales from small 10kW arrays up to utility-scale ground-mount solar farms of 10MW and above, using the same rail and post components.",
      },
    ],
    relatedProductSlugs: ["solar-pv-module", "solar-power-system", "battery-energy-storage-system"],
    relatedSolutionSlugs: ["energy-storage"],
  },
  {
    slug: "energy-storage-system",
    category: "energy-storage",
    name: "Energy Storage System (ESS)",
    shortName: "ESS",
    tagline: "General-purpose energy storage system combining battery, PCS and EMS.",
    overview:
      "The Wandtung Energy Storage System (ESS) is the general building block behind Wandtung's cabinet and containerized energy storage products — battery racks, a power conversion system (PCS) and an energy management system (EMS) configured to the site's capacity and operating strategy, whether that's backup power, peak shaving or renewable integration.",
    keyFeatures: [
      "Configurable battery, PCS and EMS building blocks",
      "Operating strategy configurable via EMS (backup / peak shaving / renewables)",
      "Cabinet or containerized deployment options",
      "Remote monitoring and safety management",
    ],
    specGroups: [
      {
        title: "System",
        specs: [
          { label: "Components", value: "Battery racks, PCS, EMS" },
          { label: "Deployment", value: "Cabinet or containerized form factor" },
          { label: "Operating Strategy", value: "Configurable via EMS" },
        ],
      },
    ],
    applications: ["Data center resilience", "Industrial peak shaving", "Renewable energy integration"],
    customizationOptions: ["Energy capacity", "PCS rating", "Operating strategy configuration"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "What's the difference between an ESS and a BESS?",
        answer:
          "BESS (Battery Energy Storage System) specifically refers to battery-based storage. ESS (Energy Storage System) is the broader term for the overall system — battery, PCS and EMS — that Wandtung configures for a given site; in practice the terms are often used interchangeably for battery-based deployments.",
      },
    ],
    relatedProductSlugs: ["battery-energy-storage-system", "energy-storage-cabinet"],
    relatedSolutionSlugs: ["energy-storage"],
  },
  {
    slug: "energy-storage-cabinet",
    category: "energy-storage",
    name: "Energy Storage Cabinet",
    shortName: "ESS Cabinet",
    tagline: "Outdoor IP55 liquid-cooled all-in-one BESS cabinet, 51.2V LFP, scalable to utility scale.",
    overview:
      "The Wandtung Energy Storage Cabinet is an outdoor-rated (IP55), liquid-cooled all-in-one battery energy storage cabinet built around 51.2V LFP battery modules (280Ah/314Ah). Each cabinet integrates the battery modules, PCS, EMS, liquid-cooling unit, dehumidifier, fire composite detector and aerosol fire extinguishing device in a single 1350 x 1150 x 2420mm enclosure, and multiple cabinets can be paralleled with a PCS for commercial & industrial (C&I) and utility-scale systems from 250kW to 1000kW.",
    featured: true,
    images: [
      "/products/energy-storage-cabinet/01-main.jpg",
      "/products/energy-storage-cabinet/02-internal-structure.jpg",
      "/products/energy-storage-cabinet/03-liquid-cooling-all-in-one.jpg",
      "/products/energy-storage-cabinet/04-high-power-system.jpg",
      "/products/energy-storage-cabinet/05-system-architecture.jpg",
      "/products/energy-storage-cabinet/06-outdoor-installation.jpg",
    ],
    keyFeatures: [
      "51.2V LFP battery modules, 280Ah/314Ah",
      "Liquid-cooling all-in-one design — 125kW inverter, 261kWh battery per cabinet",
      "Outdoor IP55-rated enclosure, 1350 x 1150 x 2420mm",
      "Integrated fire composite detector and aerosol fire extinguishing device",
      "Integrated EMS, dehumidifier, smoke alarm and air conditioning",
      "Scalable to C&I and utility-scale systems, 250kW – 1000kW",
      "Solar, grid and generator (ATS) integration ready",
      "Remote monitoring via EMS/SCADA",
    ],
    specGroups: [
      {
        title: "Cabinet",
        specs: [
          { label: "Battery Chemistry", value: "LFP (lithium iron phosphate)" },
          { label: "Battery Module", value: "51.2V, 280Ah/314Ah" },
          { label: "Inverter Rating", value: "125 kW (liquid-cooling all-in-one cabinet)" },
          { label: "Battery Capacity", value: "261 kWh per cabinet (liquid-cooling all-in-one)" },
          { label: "Dimensions", value: "1350 x 1150 x 2420 mm" },
          { label: "Protection Rating", value: "IP55, outdoor-rated" },
        ],
      },
      {
        title: "System Integration",
        specs: [
          { label: "System Power Range", value: "250 kW – 1000 kW (multi-cabinet, C&I / utility scale)" },
          { label: "Cooling", value: "Liquid-cooled" },
          { label: "Safety", value: "Fire composite detector, aerosol fire extinguishing device, smoke alarm" },
          { label: "Monitoring", value: "EMS, SCADA-ready, remote alarm management" },
          { label: "Grid Integration", value: "Solar (PV combiner box), grid, generator via ATS" },
        ],
      },
    ],
    applications: [
      "Commercial & industrial peak shaving / demand-charge management",
      "Solar farm and off-grid energy storage",
      "Data center and telecom backup power",
      "Utility-scale grid energy storage",
    ],
    customizationOptions: ["Energy capacity", "PCS rating", "Battery module capacity (280Ah/314Ah)", "OEM/ODM branding"],
    standards: ["Certification available on request per project spec"],
    faqs: [
      {
        question: "When should I choose a cabinet ESS over a containerized ESS?",
        answer:
          "A cabinet-format ESS is a compact, outdoor-rated all-in-one unit well suited to C&I sites and staged capacity growth — multiple cabinets can be paralleled with a shared PCS. A containerized ESS is preferred when a single self-contained unit needs to deliver very large capacity (up to several MWh) at one location.",
      },
      {
        question: "Why is liquid cooling used in the energy storage cabinet?",
        answer:
          "Liquid cooling keeps cell-to-cell temperature variation low across the battery modules, which extends cycle life and allows the cabinet to operate reliably in outdoor conditions and high-power charge/discharge cycles.",
      },
    ],
    relatedProductSlugs: ["battery-energy-storage-system", "containerized-energy-storage-system", "solar-power-system"],
    relatedSolutionSlugs: ["energy-storage"],
  },
  {
    slug: "containerized-energy-storage-system",
    category: "energy-storage",
    name: "Containerized Energy Storage System",
    shortName: "Containerized ESS",
    tagline: "Outdoor-rated liquid-cooled LFP containerized energy storage, up to 3840 kWh per unit.",
    overview:
      "The Wandtung Containerized Energy Storage System packages LFP battery racks, PCS, BMS/EMS, liquid-cooling thermal management and fire suppression inside an outdoor-rated (IP55) ISO container. Rated up to 3840 kWh per unit with precision liquid cooling holding cell-to-cell temperature difference to ΔT ≤ 3°C, it is built to UL/IEC international safety standards for utility-scale, renewable-integration and industrial energy storage, and is factory-tested as a complete system before shipment.",
    featured: true,
    images: [
      "/products/containerized-energy-storage-system/01-main.jpg",
      "/products/containerized-energy-storage-system/02-internal-structure.jpg",
      "/products/containerized-energy-storage-system/03-key-features.jpg",
      "/products/containerized-energy-storage-system/04-certifications-quality.jpg",
      "/products/containerized-energy-storage-system/05-applications.jpg",
      "/products/containerized-energy-storage-system/06-outdoor-installation.jpg",
    ],
    keyFeatures: [
      "Up to 3840 kWh rated capacity per container",
      "LFP (lithium iron phosphate) cells — safest battery chemistry",
      "Liquid-cooling thermal management, cell-to-cell ΔT ≤ 3°C",
      "IP55 outdoor-rated, weatherproof container structure",
      "Integrated BMS, EMS, PCS interface and fire suppression",
      "> 6000 cycle long calendar life",
      "Built to UL / IEC international safety standards",
      "Scalable — deploy multiple containers for larger capacity",
    ],
    specGroups: [
      {
        title: "System",
        specs: [
          { label: "Rated Capacity", value: "Up to 3840 kWh per container" },
          { label: "Battery Chemistry", value: "LFP (lithium iron phosphate)" },
          { label: "Form Factor", value: "Standard ISO container, IP55 outdoor-rated" },
          { label: "Cycle Life", value: "> 6000 cycles" },
        ],
      },
      {
        title: "Thermal & Safety",
        specs: [
          { label: "Thermal Management", value: "Liquid cooling, cell-to-cell ΔT ≤ 3°C" },
          { label: "Fire Suppression", value: "Integrated multi-level fire suppression system" },
          { label: "Protection", value: "IP55 weatherproof enclosure" },
          { label: "Standards", value: "UL / IEC international safety standards" },
        ],
      },
      {
        title: "Integration",
        specs: [
          { label: "Components", value: "LFP battery racks, PCS interface, BMS, EMS, liquid cooling unit, power distribution" },
          { label: "Scalability", value: "Multiple containers interconnected for larger capacity" },
        ],
      },
    ],
    applications: ["Utility-scale / site-level energy storage", "Renewable energy (solar/wind) integration", "Peak shaving and load shifting", "Industrial and data center backup"],
    customizationOptions: ["Energy capacity", "PCS rating", "Thermal management type", "OEM/ODM"],
    standards: ["UL / IEC international safety standards", "IP55 outdoor protection", "Certification available on request per project spec"],
    faqs: [
      {
        question: "Why choose a containerized ESS over a cabinet-based system?",
        answer:
          "A containerized ESS is outdoor-rated (IP55) and self-contained, making it suitable for sites without indoor space or for larger capacity requirements — up to 3840 kWh per unit — than a cabinet-format system can practically house.",
      },
      {
        question: "Why is liquid cooling important for a containerized battery system?",
        answer:
          "Liquid cooling holds the temperature difference between cells to ΔT ≤ 3°C, which is far tighter than air cooling can achieve. Even cell temperatures extend battery life, improve safety, and keep the whole system operating at consistent capacity.",
      },
    ],
    relatedProductSlugs: ["battery-energy-storage-system", "energy-storage-cabinet", "40ft-container-data-center"],
    relatedSolutionSlugs: ["energy-storage"],
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

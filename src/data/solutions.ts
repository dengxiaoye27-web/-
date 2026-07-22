import { Solution } from "./types";

export const solutions: Solution[] = [
  {
    slug: "data-center-infrastructure",
    name: "Data Center Infrastructure Solution",
    tagline: "A complete, coordinated infrastructure stack from utility power to the rack.",
    customerChallenge:
      "Operators building or expanding a data hall must coordinate power distribution, UPS, cabinets, cooling, cable management and monitoring from multiple vendors — a process prone to integration gaps, mismatched capacity planning and schedule risk.",
    solutionArchitecture:
      "Wandtung designs the full infrastructure stack as one coordinated system: utility/generator input feeds redundant UPS, power is distributed to racks through intelligent PDUs, IT load sits in engineered cabinets with hot/cold aisle containment, precision or liquid cooling removes heat, and a monitoring layer ties power, environment and security together.",
    systemComponents: [
      { name: "UPS & Power Distribution", description: "Modular UPS and intelligent PDUs sized to redundancy target (N, N+1, 2N)." },
      { name: "Cabinets & Containment", description: "Data center cabinets with hot/cold aisle containment for airflow separation." },
      { name: "Cooling", description: "Precision air conditioning or liquid cooling matched to rack density." },
      { name: "Cable Management", description: "Structured overhead tray and underfloor routing for power and data." },
      { name: "Monitoring", description: "DCIM-compatible monitoring across power, environment and access control." },
    ],
    howItWorks: [
      "Utility and generator power feeds into redundant UPS systems.",
      "UPS output is distributed to racks via intelligent PDUs with outlet-level monitoring.",
      "IT load is housed in cabinets with hot/cold aisle containment to isolate supply and return air.",
      "Precision or liquid cooling removes heat load, sized to rack density.",
      "A monitoring layer aggregates power, environmental and access data for facility operations.",
    ],
    technicalAdvantages: [
      "Single engineering point of accountability across power, cooling and enclosure systems",
      "Capacity planning coordinated across UPS, PDU and cooling from day one",
      "Factory testing of major subsystems before site delivery",
    ],
    deploymentProcess: [
      { step: "Requirements & Load Assessment", description: "Define IT load, redundancy target and site constraints." },
      { step: "System Design", description: "Engineer power, cooling and cabinet layout as one coordinated architecture." },
      { step: "Manufacturing & Factory Testing", description: "Build and test major subsystems before shipment." },
      { step: "Site Delivery & Installation", description: "Deliver, install and integrate systems on site." },
      { step: "Commissioning & Handover", description: "Full-load commissioning, documentation and operator training." },
    ],
    typicalApplications: ["Enterprise data centers", "Colocation facilities", "Government and financial data halls"],
    faqs: [
      {
        question: "Does Wandtung design complete data center infrastructure, not just individual products?",
        answer:
          "Yes. Wandtung engineers coordinated power, cooling, enclosure and monitoring systems as a single infrastructure solution, sized and integrated together rather than sold as disconnected components.",
      },
    ],
    relatedProductSlugs: ["intelligent-pdu", "modular-ups", "data-center-cabinet", "precision-air-conditioner"],
  },
  {
    slug: "micro-modular-data-center",
    name: "Micro Modular Data Center Solution",
    tagline: "A factory-integrated data center for sites without room to build one.",
    customerChallenge:
      "Enterprises and banks need dedicated data rooms at branch or regional sites, but traditional construction of power, cooling and fire protection systems is slow, requires specialist contractors, and is hard to replicate consistently across many sites.",
    solutionArchitecture:
      "Wandtung pre-integrates IT cabinets, UPS, PDU, cooling, battery, fire suppression, access control and environmental monitoring into a standardized micro module, factory tested as a complete system and shipped ready for on-site placement and commissioning.",
    systemComponents: [
      { name: "IT Cabinets", description: "Single-row or dual-row cabinets with containment." },
      { name: "UPS & PDU", description: "Integrated power protection and distribution sized to module capacity." },
      { name: "Cooling", description: "In-row or precision cooling matched to enclosed module volume." },
      { name: "Fire Suppression", description: "Automatic gas-based suppression system." },
      { name: "Access Control & Monitoring", description: "Card/biometric access and centralized environmental monitoring." },
    ],
    howItWorks: [
      "Module is engineered and pre-assembled at the factory as a complete system.",
      "Power, cooling, fire suppression and monitoring are integrated and function-tested before shipment.",
      "Module is delivered to site and connected to utility power, network and building management.",
      "Centralized monitoring reports power, environment and security status to the operator.",
    ],
    technicalAdvantages: [
      "Consistent, repeatable deployment across multiple branch/regional sites",
      "Reduced on-site construction time versus a traditional built data room",
      "Factory quality control before the system ever reaches site",
    ],
    deploymentProcess: [
      { step: "Site & Capacity Assessment", description: "Confirm space, power availability and IT load target." },
      { step: "Module Configuration", description: "Select row configuration, redundancy and cooling type." },
      { step: "Factory Build & Test", description: "Integrate and test the complete module before shipment." },
      { step: "Site Placement & Connection", description: "Position module, connect utility, network and BMS." },
      { step: "Commissioning", description: "Full-system verification and operator handover." },
    ],
    typicalApplications: ["Bank branch data rooms", "Enterprise regional offices", "Retail / campus IT rooms"],
    faqs: [
      {
        question: "What is a micro modular data center?",
        answer:
          "A micro modular data center is a factory pre-integrated system combining IT cabinets, power distribution, UPS, cooling, fire suppression, access control and monitoring into a single standardized unit, reducing on-site construction time compared to a traditional built data room.",
      },
    ],
    relatedProductSlugs: ["smart-micro-module", "intelligent-pdu", "intelligent-cabinet"],
  },
  {
    slug: "containerized-data-center",
    name: "Containerized Data Center Solution",
    tagline: "Site-independent, factory-built data centers for rapid deployment anywhere.",
    customerChallenge:
      "Telecom operators, mining and oil & gas companies often need data center capacity at remote or temporary sites where conventional building construction is slow, costly, or impossible.",
    solutionArchitecture:
      "Wandtung integrates IT cabinets, power distribution, UPS, cooling, fire protection, security and monitoring inside a reinforced, insulated ISO container shell, engineered for outdoor deployment and rapid connection to site power and network.",
    systemComponents: [
      { name: "Container Structure", description: "Insulated, IP55-rated shell rated for outdoor deployment." },
      { name: "IT & Power", description: "Configurable IT cabinets with intelligent PDU and modular UPS." },
      { name: "Cooling", description: "Precision air conditioning or liquid cooling for higher density." },
      { name: "Safety & Security", description: "Fire suppression, access control and CCTV-ready infrastructure." },
    ],
    howItWorks: [
      "Container is fitted out and function-tested at the factory as a complete data center.",
      "Unit is transported to site by standard container logistics.",
      "On-site work is limited to foundation, power/network connection and commissioning.",
      "Multiple containers can be linked for larger capacity requirements.",
    ],
    technicalAdvantages: [
      "Deployment timelines measured in weeks, not months",
      "Site-independent — suitable for remote, temporary or emergency locations",
      "Scalable by adding container units as capacity needs grow",
    ],
    deploymentProcess: [
      { step: "Requirements Definition", description: "Confirm IT load, environment and logistics constraints." },
      { step: "Container Engineering", description: "Design container layout, power and cooling configuration." },
      { step: "Factory Integration & Test", description: "Build and fully test the container as a system." },
      { step: "Transport & Site Placement", description: "Ship and position the container at the deployment site." },
      { step: "Commissioning", description: "Connect utility/network and verify full-system operation." },
    ],
    typicalApplications: ["Telecom network expansion", "Mining and oil & gas sites", "Edge computing", "Emergency/government deployments"],
    faqs: [
      {
        question: "Does Wandtung provide containerized data centers?",
        answer:
          "Yes. Wandtung manufactures 20ft and 40ft containerized data centers pre-integrated with IT cabinets, power distribution, UPS, cooling, fire protection and monitoring for telecom, mining, oil & gas, edge computing and government deployments.",
      },
    ],
    relatedProductSlugs: ["40ft-container-data-center", "modular-ups", "intelligent-pdu"],
  },
  {
    slug: "edge-data-center",
    name: "Edge Data Center Solution",
    tagline: "Compact, resilient infrastructure for compute at the network edge.",
    customerChallenge:
      "Low-latency applications and distributed content delivery require compute capacity close to end users, often at sites with limited space, unattended operation and inconsistent power quality.",
    solutionArchitecture:
      "Wandtung combines compact micro modules or containerized units with resilient power (UPS + battery), remote monitoring and lights-out management for unattended edge sites.",
    systemComponents: [
      { name: "Compact Enclosure", description: "Micro module or small containerized footprint." },
      { name: "Resilient Power", description: "UPS with battery runtime sized for unattended operation." },
      { name: "Remote Monitoring", description: "Full remote visibility for lights-out sites." },
    ],
    howItWorks: [
      "Compact power, cooling and enclosure system is deployed at the edge site.",
      "Remote monitoring provides visibility without requiring on-site staff.",
      "Intelligent PDUs allow remote power cycling of equipment when needed.",
    ],
    technicalAdvantages: ["Minimal footprint", "Unattended, remotely monitored operation", "Rapid multi-site replication"],
    deploymentProcess: [
      { step: "Site Assessment", description: "Evaluate space, power and connectivity at each edge location." },
      { step: "Standardized Design", description: "Apply a repeatable edge enclosure/power template." },
      { step: "Deployment", description: "Install and connect at each site." },
      { step: "Remote Commissioning", description: "Verify monitoring and remote management before go-live." },
    ],
    typicalApplications: ["CDN / edge compute nodes", "Telecom base station sites", "Retail and industrial edge locations"],
    faqs: [
      {
        question: "How is an edge data center different from a containerized data center?",
        answer:
          "Edge data centers prioritize compact footprint and remote/unattended operation for distributed sites, while containerized data centers are typically sized for larger, self-contained capacity at a single remote location — Wandtung's micro modules and smaller containerized units serve as the building blocks for edge deployments.",
      },
    ],
    relatedProductSlugs: ["smart-micro-module", "intelligent-pdu", "rack-mount-ups"],
  },
  {
    slug: "telecom-data-center",
    name: "Telecom Data Center Solution",
    tagline: "Power and infrastructure engineered for telecom network reliability requirements.",
    customerChallenge:
      "Telecom operators require infrastructure that meets stringent uptime and DC power standards across central offices, base stations and network equipment rooms, often across large, geographically distributed networks.",
    solutionArchitecture:
      "Wandtung supplies rack and network cabinets, DC/AC power distribution, UPS and containerized options standardized for telecom equipment rooms and rapidly replicable across many sites.",
    systemComponents: [
      { name: "Network Cabinets", description: "19-inch cabinets sized for telecom transmission and switching equipment." },
      { name: "Power Distribution", description: "PDUs and ATS for redundant feed switching." },
      { name: "UPS", description: "Rack mount or modular UPS matched to site criticality." },
    ],
    howItWorks: [
      "Standardized cabinet and power templates are applied across telecom sites.",
      "ATS/STS provide automatic switching between redundant power feeds.",
      "PDUs distribute and monitor power to transmission and switching equipment.",
    ],
    technicalAdvantages: ["Standardized, repeatable site design", "Automatic transfer switching for feed redundancy", "Compact footprint for equipment rooms"],
    deploymentProcess: [
      { step: "Network Standard Definition", description: "Establish a standard cabinet/power template for the network." },
      { step: "Site Rollout", description: "Deploy the standard template across multiple sites." },
      { step: "Commissioning", description: "Verify redundancy switching and monitoring at each site." },
    ],
    typicalApplications: ["Central offices", "Base station equipment rooms", "Network operation centers"],
    faqs: [
      {
        question: "What is an ATS PDU used for in telecom sites?",
        answer:
          "An ATS (automatic transfer switch) PDU automatically switches load between two independent power feeds — typically utility and generator, or dual utility feeds — without manual intervention, maintaining uptime if one feed fails.",
      },
    ],
    relatedProductSlugs: ["ats-pdu", "network-cabinet", "rack-mount-ups"],
  },
  {
    slug: "ai-data-center",
    name: "AI Data Center Solution",
    tagline: "High-density power and cooling architecture for AI training and inference infrastructure.",
    customerChallenge:
      "AI training and inference racks draw far more power per rack than traditional IT loads, exceeding what standard air cooling and PDU designs can support, and requiring careful electrical and thermal capacity planning.",
    solutionArchitecture:
      "Wandtung pairs high power three-phase PDUs and high-capacity UPS with liquid cooling (cold plate + CDU) to support dense GPU/AI racks, with monitoring tuned to track power and thermal headroom in real time.",
    systemComponents: [
      { name: "High Power PDU", description: "Three-phase, high-current distribution for GPU/AI racks." },
      { name: "High-Capacity UPS", description: "Sized for sustained high-density load." },
      { name: "Liquid Cooling & CDU", description: "Cold plate direct-to-chip cooling with CDU loop management." },
    ],
    howItWorks: [
      "High power PDUs distribute three-phase power to dense GPU racks with balanced phase loading.",
      "Liquid cooling removes heat directly at the chip level via cold plates.",
      "A CDU manages the primary/secondary coolant loops and monitors flow and temperature.",
    ],
    technicalAdvantages: ["Supports rack densities beyond air-cooling limits", "Balanced three-phase power design for GPU clusters", "Integrated leak detection and thermal monitoring"],
    deploymentProcess: [
      { step: "Density & Load Planning", description: "Define target kW per rack and cooling method." },
      { step: "Power Architecture", description: "Design high power PDU and UPS distribution." },
      { step: "Cooling Integration", description: "Deploy CDU and cold plate liquid cooling loops." },
      { step: "Commissioning", description: "Validate power balance, cooling performance and monitoring." },
    ],
    typicalApplications: ["AI training clusters", "GPU inference farms", "HPC compute centers"],
    faqs: [
      {
        question: "Why do AI data centers need liquid cooling?",
        answer:
          "AI training and GPU racks can draw many times the power density of traditional servers, generating heat loads that exceed what air cooling can economically remove at rack level — liquid cooling extracts heat directly at the chip, enabling much higher density per rack.",
      },
    ],
    relatedProductSlugs: ["high-power-pdu", "liquid-cooling", "cdu"],
  },
  {
    slug: "liquid-cooling",
    name: "Liquid Cooling Solution",
    tagline: "Cold plate liquid cooling and CDU systems for high-density thermal management.",
    customerChallenge:
      "As rack power density rises with AI and HPC workloads, air cooling alone can no longer remove heat efficiently or cost-effectively, risking thermal throttling and reliability issues.",
    solutionArchitecture:
      "Wandtung's liquid cooling solution applies cold plate direct-to-chip cooling at the server level, with a CDU isolating and managing the primary (facility) and secondary (rack) coolant loops, including leak detection and monitoring.",
    systemComponents: [
      { name: "Cold Plates", description: "Direct-to-chip liquid cooling at the server/GPU level." },
      { name: "CDU", description: "Manages primary/secondary loop separation, flow and temperature." },
      { name: "Leak Detection & Monitoring", description: "Sensor-based leak detection and real-time system monitoring." },
    ],
    howItWorks: [
      "Cold plates absorb heat directly from CPUs/GPUs into the secondary coolant loop.",
      "The CDU exchanges heat between the secondary (rack) loop and the primary (facility) loop.",
      "Facility cooling infrastructure rejects heat from the primary loop.",
      "Leak sensors and flow/temperature monitoring protect IT hardware continuously.",
    ],
    technicalAdvantages: ["Enables rack densities beyond air-cooling limits", "Isolates IT hardware from facility water quality/pressure", "Reduces facility cooling energy versus air-only designs at high density"],
    deploymentProcess: [
      { step: "Thermal Assessment", description: "Determine rack heat load and cooling split (liquid vs air)." },
      { step: "CDU & Loop Design", description: "Size CDU capacity and design primary/secondary loop routing." },
      { step: "Installation", description: "Install cold plates, manifolds and CDU." },
      { step: "Commissioning", description: "Verify flow, temperature, pressure and leak detection." },
    ],
    typicalApplications: ["AI training clusters", "HPC compute", "High-density colocation"],
    faqs: [
      {
        question: "What is a CDU in liquid cooling?",
        answer:
          "A CDU (Coolant Distribution Unit) manages and isolates the primary (facility) and secondary (rack) coolant loops in a liquid cooling system, controlling flow, temperature and pressure while protecting IT hardware from facility water quality issues.",
      },
    ],
    relatedProductSlugs: ["cdu", "liquid-cooling", "precision-air-conditioner"],
  },
  {
    slug: "critical-power",
    name: "Critical Power Solution",
    tagline: "Redundant, monitored power architecture from utility feed to IT load.",
    customerChallenge:
      "Mission-critical facilities cannot tolerate power interruption, requiring redundancy and monitoring at every stage from utility/generator input through UPS, distribution and the rack itself.",
    solutionArchitecture:
      "Wandtung designs redundant power architectures combining ATS/STS transfer switching, modular UPS, and intelligent PDUs, monitored end-to-end so operators can see and respond to issues before they affect load.",
    systemComponents: [
      { name: "ATS / STS", description: "Automatic and static transfer switching between power sources." },
      { name: "Modular UPS", description: "N+X redundant power protection." },
      { name: "Intelligent PDU", description: "Outlet-level monitoring and remote switching at the rack." },
    ],
    howItWorks: [
      "ATS/STS automatically switches between primary and backup power feeds.",
      "Modular UPS conditions and protects power with built-in redundancy.",
      "Intelligent PDUs distribute and monitor power down to the outlet level.",
    ],
    technicalAdvantages: ["Redundancy designed at every stage, not just the UPS", "End-to-end power visibility", "Modular scalability as load grows"],
    deploymentProcess: [
      { step: "Redundancy Target Definition", description: "Establish required tier/redundancy level (N, N+1, 2N)." },
      { step: "Power Architecture Design", description: "Design transfer switching, UPS and distribution topology." },
      { step: "Installation & Integration", description: "Install and integrate with facility power infrastructure." },
      { step: "Commissioning", description: "Full-load and failover testing." },
    ],
    typicalApplications: ["Data centers", "Banking and financial facilities", "Government and industrial critical loads"],
    faqs: [
      {
        question: "What is the difference between an ATS and an STS?",
        answer:
          "An ATS (automatic transfer switch) mechanically switches load between two power sources, typically with a brief transfer time, while an STS (static transfer switch) uses solid-state switching for near-instantaneous transfer, used where even momentary interruption is unacceptable.",
      },
    ],
    relatedProductSlugs: ["ats-pdu", "sts", "modular-ups", "intelligent-pdu"],
  },
  {
    slug: "smart-power-distribution",
    name: "Smart Power Distribution Solution",
    tagline: "Network-visible power distribution from the panel to the outlet.",
    customerChallenge:
      "Facility and IT teams need visibility into power consumption and the ability to remotely manage load, but traditional PDUs offer no monitoring or remote control, forcing reliance on manual site visits.",
    solutionArchitecture:
      "Wandtung deploys intelligent PDUs with SNMP/Modbus/RS485 connectivity across the facility, feeding a centralized monitoring platform for real-time power, energy and environmental visibility with remote outlet control.",
    systemComponents: [
      { name: "Intelligent PDU", description: "Outlet-level monitoring, metering and remote switching." },
      { name: "Environmental Sensors", description: "Temperature and humidity monitoring at the rack." },
      { name: "Monitoring Platform", description: "Centralized dashboard aggregating all connected PDUs." },
    ],
    howItWorks: [
      "Intelligent PDUs report current, voltage, power and energy data over the network.",
      "Environmental sensors add temperature/humidity context at the rack.",
      "A central platform aggregates data across all racks for facility-wide visibility and alarms.",
    ],
    technicalAdvantages: ["Facility-wide power visibility without site visits", "Remote outlet-level control for maintenance and incident response", "Data supports PUE tracking and capacity planning"],
    deploymentProcess: [
      { step: "PDU Rollout", description: "Deploy intelligent PDUs across target racks." },
      { step: "Network Integration", description: "Connect PDUs to the monitoring network via SNMP/Modbus." },
      { step: "Dashboard Configuration", description: "Configure thresholds, alarms and reporting." },
    ],
    typicalApplications: ["Multi-tenant colocation", "Enterprise data centers", "Distributed telecom sites"],
    faqs: [
      {
        question: "What communication protocols do Wandtung intelligent PDUs support?",
        answer:
          "Wandtung intelligent PDUs support SNMP (v1/v2c/v3), Modbus RTU/TCP, RS485 and TCP/IP, allowing integration with most DCIM and building management platforms.",
      },
    ],
    relatedProductSlugs: ["intelligent-pdu", "pdu"],
  },
  {
    slug: "energy-storage",
    name: "Energy Storage Solution",
    tagline: "Battery energy storage for resilience, peak shaving and renewable integration.",
    customerChallenge:
      "Facilities facing unreliable grid power, high demand charges, or sustainability targets need energy storage that goes beyond traditional UPS batteries to provide longer-duration resilience and cost management.",
    solutionArchitecture:
      "Wandtung integrates battery racks, PCS and EMS into cabinet or containerized battery energy storage systems, configurable for backup power, peak shaving, or renewable (solar) integration.",
    systemComponents: [
      { name: "Battery Racks", description: "Lithium battery modules sized to required energy capacity." },
      { name: "PCS", description: "Power conversion system managing charge/discharge and grid interface." },
      { name: "EMS", description: "Energy management system controlling operating strategy and monitoring." },
    ],
    howItWorks: [
      "Battery racks store energy from the grid or renewable sources.",
      "The PCS converts stored DC energy to AC for site use, and manages charging.",
      "The EMS applies the operating strategy — backup, peak shaving, or renewable integration — and reports system status.",
    ],
    technicalAdvantages: ["Configurable operating strategy via EMS", "Cabinet or containerized deployment options", "Renewable integration ready"],
    deploymentProcess: [
      { step: "Energy & Use-Case Assessment", description: "Define required capacity and operating strategy." },
      { step: "System Sizing", description: "Size battery, PCS and EMS to the use case." },
      { step: "Installation", description: "Deploy cabinet or containerized ESS at site." },
      { step: "Commissioning", description: "Verify operating strategy and integration with site power." },
    ],
    typicalApplications: ["Data center resilience", "Industrial peak shaving", "Renewable energy sites"],
    faqs: [
      {
        question: "Can a battery energy storage system replace a UPS?",
        answer:
          "A BESS can supplement or, in some architectures, replace part of a traditional UPS battery system, but the two serve different primary purposes — UPS batteries are optimized for short-duration ride-through, while BESS is typically sized for longer-duration backup, peak shaving or renewable integration.",
      },
    ],
    relatedProductSlugs: ["battery-energy-storage-system", "solar-power-system"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

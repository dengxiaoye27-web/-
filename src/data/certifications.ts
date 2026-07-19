import { Certification } from "./types";

// Real certificates on file for Haisen. Each entry is backed by a scanned
// certificate/test report in /public/certifications — do not add entries
// here without a corresponding document, and keep `products` scoped to
// what the certificate actually covers (see each product's `standards`
// field in src/data/products.ts).
export interface CertificateRecord {
  slug: string;
  mark: "CE" | "UL" | "TÜV SÜD";
  title: string;
  productScope: string;
  standard: string;
  certificateNumber: string;
  issuer: string;
  date: string;
  image: string;
}

export const certificateRecords: CertificateRecord[] = [
  {
    slug: "ce-network-cabinet",
    mark: "CE",
    title: "CE — Low Voltage Directive Compliance",
    productScope: "Network Cabinet (K series: KA, KB, KC, KI, KH, KJ, X, KTD)",
    standard: "EN IEC 62368-1:2020 · LVD 2014/35/EC",
    certificateNumber: "CTICAY401243799041036AC",
    issuer: "CTIC Testing Group (Guangdong) Co., Ltd.",
    date: "2024-04-10",
    image: "/certifications/ce-network-cabinet-ctic.jpg",
  },
  {
    slug: "test-report-cabinet",
    mark: "CE",
    title: "Safety Test Report — IEC 62368-1 / UL 60950-1",
    productScope: "K Series Cabinets",
    standard: "IEC 62368-1:2018 · UL 60950-1:2019",
    certificateNumber: "EED35R800398",
    issuer: "CTI (Centre Testing International, Shanghai)",
    date: "2025-01-16",
    image: "/certifications/test-report-cabinet-iec62368-cti.jpg",
  },
  {
    slug: "ce-optical-fiber-raceway",
    mark: "CE",
    title: "CE — Low Voltage Directive Compliance",
    productScope: "Optical Fiber Raceway",
    standard: "EN 61537:2007 · LVD 2014/35/EU",
    certificateNumber: "M.2021.206.C67670",
    issuer: "UDEM International Certification (Turkey)",
    date: "2021-09-13",
    image: "/certifications/ce-optical-fiber-raceway-udem.jpg",
  },
  {
    slug: "ce-ladder-cable-tray",
    mark: "CE",
    title: "CE — Low Voltage Directive Compliance",
    productScope: "Ladder Type Cable Tray",
    standard: "EN 61537:2007 · LVD 2014/35/EU",
    certificateNumber: "M.2021.206.C67668",
    issuer: "UDEM International Certification (Turkey)",
    date: "2021-09-13",
    image: "/certifications/ce-ladder-cable-tray-udem.jpg",
  },
  {
    slug: "ce-trough-cable-tray",
    mark: "CE",
    title: "CE — Low Voltage Directive Compliance",
    productScope: "Trough Cable Tray",
    standard: "EN 61537:2007 · LVD 2014/35/EU",
    certificateNumber: "M.2021.206.C67666",
    issuer: "UDEM International Certification (Turkey)",
    date: "2021-09-13",
    image: "/certifications/ce-trough-cable-tray-udem.jpg",
  },
  {
    slug: "tuv-sud-cable-tray-ladder",
    mark: "TÜV SÜD",
    title: "TÜV SÜD Attestation of Conformity",
    productScope: "Cable Tray System and Cable Ladder System",
    standard: "LVD 2014/35/EU",
    certificateNumber: "N8A 091765 0001",
    issuer: "TÜV SÜD Product Service GmbH",
    date: "2026-05-18",
    image: "/certifications/tuv-sud-cable-tray-ladder.jpg",
  },
  {
    slug: "ul-optical-fiber-raceway",
    mark: "UL",
    title: "UL Certificate of Compliance",
    productScope: "Cable Routing Assemblies — Optical Fiber Raceway & Fittings",
    standard: "UL 2024 — Signaling, Optical Fiber and Communication Raceways and Cable Routing Assemblies",
    certificateNumber: "20160519-E479416",
    issuer: "UL LLC",
    date: "2016-05-19",
    image: "/certifications/ul-optical-fiber-raceway.jpg",
  },
  {
    slug: "ul-cable-trays",
    mark: "UL",
    title: "UL Certificate of Compliance",
    productScope: "Cable Trays",
    standard: "CSA C22.2 No. 126.1-09 · NFPA 70 (National Electrical Code)",
    certificateNumber: "20160404-E479416",
    issuer: "UL LLC",
    date: "2016-04-04",
    image: "/certifications/ul-cable-trays.jpg",
  },
];

// Summary badges shown on the homepage / About page certification strip.
export const certifications: Certification[] = [
  { name: "CE", description: "LVD 2014/35/EU compliance — network cabinets and cable tray systems." },
  { name: "UL", description: "UL-listed cable trays and optical fiber raceway cable routing assemblies." },
  { name: "TÜV SÜD", description: "Attestation of conformity for cable tray and cable ladder systems." },
  { name: "IEC / EN Standards", description: "Tested to IEC 62368-1 and EN 61537 for applicable product lines." },
];

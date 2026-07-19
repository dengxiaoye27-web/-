import { Certification } from "./types";

// Only list certifications Haisen actually holds — do not fabricate.
// Update this list from real certificates before publishing; keep it in
// sync with certificates displayed in the About / Certifications pages.
export const certifications: Certification[] = [
  { name: "CE", description: "Conformité Européenne marking for applicable electrical and electronic products." },
  { name: "RoHS", description: "Restriction of Hazardous Substances compliance for electronic and electrical equipment." },
  { name: "ISO 9001", description: "Quality management system certification for manufacturing processes." },
  { name: "IEC Standards", description: "Product design and testing aligned to relevant IEC standards (e.g. IEC 60320, IEC 62040, IEC 60297)." },
];

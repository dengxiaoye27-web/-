const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconPower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2Z" />
    </svg>
  );
}

export function IconPdu({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="8" r="1.6" />
      <circle cx="12" cy="13" r="1.6" />
      <path d="M9 18h6" />
    </svg>
  );
}

export function IconCabinet({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <rect x="5" y="2.5" width="14" height="19" rx="1.5" />
      <path d="M5 8h14M5 13h14" />
      <path d="M8 5.2h4M8 10.5h4M8 15.8h4" />
    </svg>
  );
}

export function IconModule({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <rect x="3" y="7" width="18" height="12" rx="1.5" />
      <path d="M3 11h18M8.5 7v12M15.5 7v12" />
      <path d="M7 4h10l2 3H5l2-3Z" />
    </svg>
  );
}

export function IconContainer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <rect x="2.5" y="7" width="19" height="11" rx="1" />
      <path d="M6 7v11M10 7v11M14 7v11M18 7v11" />
    </svg>
  );
}

export function IconCooling({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M12 3v18M12 3l-2.5 2.5M12 3l2.5 2.5M12 21l-2.5-2.5M12 21l2.5-2.5" />
      <path d="M4.2 7.5l15.6 9M4.2 7.5 5.1 11M4.2 7.5 7.6 6.4M19.8 16.5l-.9-3.5M19.8 16.5l-3.4 1.1" />
      <path d="M19.8 7.5l-15.6 9M19.8 7.5 18.9 11M19.8 7.5l-3.4-1.1M4.2 16.5l.9-3.5M4.2 16.5l3.4 1.1" />
    </svg>
  );
}

export function IconBattery({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <rect x="3" y="7" width="16" height="10" rx="1.5" />
      <path d="M21 10.5v3" />
      <path d="M11.5 9 9 12.2h3L10 15" />
    </svg>
  );
}

export function IconFactory({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M3 21V9l6 4V9l6 4V5l6-2v18H3Z" />
      <path d="M7 17h2M12 17h2M17 17h2" />
    </svg>
  );
}

export function IconEngineering({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </svg>
  );
}

export function IconCustomize({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h9M17 18h3" />
      <circle cx="15" cy="6" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="15" cy="18" r="2" />
    </svg>
  );
}

export function IconOem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M20.6 13.1a8.6 8.6 0 0 0 0-2.2l2-1.5-2-3.4-2.3.9a8.6 8.6 0 0 0-1.9-1.1L16 3.4h-4l-.4 2.4a8.6 8.6 0 0 0-1.9 1.1l-2.3-.9-2 3.4 2 1.5a8.6 8.6 0 0 0 0 2.2" transform="translate(-2 2) scale(0.95)" />
      <circle cx="12" cy="13" r="3" />
      <path d="M8 21c.8-1.8 2.3-3 4-3s3.2 1.2 4 3" />
    </svg>
  );
}

export function IconGlobe({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export function IconQuality({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M12 2 4.5 5v6c0 4.8 3.2 8.7 7.5 10 4.3-1.3 7.5-5.2 7.5-10V5L12 2Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

export function IconFloor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M3 10 12 5.5 21 10l-9 4.5L3 10Z" />
      <path d="M3 10v4l9 4.5 9-4.5v-4" />
      <path d="M7.5 12.2v4M12 14.5v4M16.5 12.2v4" />
    </svg>
  );
}

export function IconCable({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M3 6h18M3 18h18" />
      <path d="M6 6v12M10 6v12M14 6v12M18 6v12" />
    </svg>
  );
}

export function IconChip({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
      <path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3" />
    </svg>
  );
}

export function IconAntenna({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M12 8.5V21M8 21h8" />
      <circle cx="12" cy="7" r="1.8" />
      <path d="M7.7 2.7a6.2 6.2 0 0 0 0 8.6M16.3 2.7a6.2 6.2 0 0 1 0 8.6" />
    </svg>
  );
}

export function IconSwitch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <circle cx="5" cy="7" r="2" />
      <circle cx="19" cy="17" r="2" />
      <circle cx="5" cy="17" r="2" />
      <path d="M7 7h4a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3h2M7 17h10" />
    </svg>
  );
}

export function IconSolar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
      <path d="M4 11 12 6l8 5-8 5-8-5Z" />
      <path d="M4 11v5l8 5 8-5v-5M8 8.5v5M12 6v10M16 8.5v5" />
    </svg>
  );
}

export const productIcons: Record<string, (props: { className?: string }) => React.ReactElement> = {
  pdu: IconPdu,
  "schuko-pdu": IconPdu,
  "nema-pdu": IconPdu,
  "multi-function-pdu": IconPdu,
  "uk-pdu": IconPdu,
  "iec-pdu": IconPdu,
  "intelligent-pdu": IconPdu,
  "high-power-pdu": IconPdu,
  "metered-pdu": IconPdu,
  "monitored-pdu": IconPdu,
  "switched-pdu": IconPdu,
  "three-phase-pdu": IconPdu,
  "ats-pdu": IconSwitch,
  sts: IconSwitch,
  "automatic-transfer-switch": IconSwitch,
  "modular-ups": IconPower,
  "tower-ups": IconPower,
  "online-ups": IconPower,
  "industrial-ups": IconPower,
  "data-center-cabinet": IconCabinet,
  "server-rack": IconCabinet,
  "19-inch-rack": IconCabinet,
  "cold-aisle-cabinet": IconCabinet,
  "intelligent-cabinet": IconCabinet,
  "outdoor-cabinet": IconCabinet,
  "single-row-micro-data-center": IconModule,
  "dual-row-micro-data-center": IconModule,
  "all-in-one-micro-data-center": IconModule,
  "40ft-container-data-center": IconContainer,
  "20ft-container-data-center": IconContainer,
  "modular-container-data-center": IconContainer,
  "edge-data-center": IconGlobe,
  "precision-air-conditioner": IconCooling,
  "liquid-cooling": IconCooling,
  cdu: IconCooling,
  "row-based-cooling": IconCooling,
  "room-cooling": IconCooling,
  "airflow-floor": IconFloor,
  "cable-tray": IconCable,
  "wire-mesh-cable-tray": IconCable,
  "ladder-cable-tray": IconCable,
  "battery-energy-storage-system": IconBattery,
  "solar-power-system": IconSolar,
  "energy-storage-system": IconBattery,
};

export const solutionIcons: Record<string, (props: { className?: string }) => React.ReactElement> = {
  "data-center-infrastructure": IconModule,
  "micro-modular-data-center": IconCabinet,
  "containerized-data-center": IconContainer,
  "edge-data-center": IconGlobe,
  "telecom-data-center": IconAntenna,
  "ai-data-center": IconChip,
  "liquid-cooling": IconCooling,
  "critical-power": IconPower,
  "smart-power-distribution": IconPdu,
  "energy-storage": IconBattery,
};

export const categoryIcons: Record<string, (props: { className?: string }) => React.ReactElement> = {
  "power-distribution": IconPdu,
  "ups-systems": IconPower,
  "network-server-cabinets": IconCabinet,
  "micro-modular-data-center": IconModule,
  "containerized-data-center": IconContainer,
  "cooling-solutions": IconCooling,
  "raised-floor": IconFloor,
  "cable-management": IconCable,
  "energy-storage": IconBattery,
};

export const coreSolutionIcons = [
  IconPower,
  IconPdu,
  IconCabinet,
  IconModule,
  IconContainer,
  IconCooling,
  IconBattery,
];

export const whyWandtungIcons = [
  IconFactory,
  IconEngineering,
  IconCustomize,
  IconOem,
  IconGlobe,
  IconQuality,
];

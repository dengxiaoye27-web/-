const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden>
      {children}
    </svg>
  );
}

export function TechPdu() {
  return (
    <Frame>
      <rect x="132" y="24" width="56" height="192" rx="8" className="text-accent-500" fill="currentColor" fillOpacity="0.1" />
      <rect x="132" y="24" width="56" height="192" rx="8" {...line} className="text-navy-800" />
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i}>
          <circle cx="160" cy={44 + i * 21} r="6" {...line} className="text-navy-700" />
          <circle
            cx="160"
            cy={44 + i * 21}
            r="1.6"
            className={i % 3 === 0 ? "text-accent-500" : "text-navy-400"}
            fill="currentColor"
          />
        </g>
      ))}
      <path d="M160 216v14M148 230h24" {...line} className="text-navy-700" />
    </Frame>
  );
}

export function TechUps() {
  return (
    <Frame>
      <rect x="60" y="70" width="200" height="100" rx="10" className="text-accent-500" fill="currentColor" fillOpacity="0.1" />
      <rect x="60" y="70" width="200" height="100" rx="10" {...line} className="text-navy-800" />
      <rect x="80" y="88" width="80" height="34" rx="4" {...line} className="text-navy-700" />
      <path d="M86 105h10l6-14 8 24 6-14h12" {...line} className="text-accent-500" />
      {Array.from({ length: 5 }).map((_, i) => (
        <circle key={i} cx={182 + i * 12} cy="96" r="3" className={i === 0 ? "text-accent-500" : "text-navy-500"} fill="currentColor" />
      ))}
      <path d="M80 140h160M80 152h100" {...line} className="text-navy-600" />
    </Frame>
  );
}

export function TechCabinet() {
  return (
    <Frame>
      <rect x="96" y="20" width="128" height="200" rx="6" className="text-accent-500" fill="currentColor" fillOpacity="0.1" />
      <rect x="96" y="20" width="128" height="200" rx="6" {...line} className="text-navy-800" />
      {Array.from({ length: 9 }).map((_, i) => (
        <g key={i}>
          <rect x="106" y={30 + i * 20} width="108" height="14" rx="2" {...line} className="text-navy-600" />
          <circle cx="200" cy={37 + i * 20} r="1.6" className={i % 4 === 0 ? "text-accent-500" : "text-navy-400"} fill="currentColor" />
        </g>
      ))}
    </Frame>
  );
}

export function TechModule() {
  return (
    <Frame>
      <path d="M50 96 160 56l110 40v70L160 206 50 166Z" className="text-accent-500" fill="currentColor" fillOpacity="0.1" />
      <path d="M50 96 160 56l110 40v70L160 206 50 166Z" {...line} className="text-navy-800" />
      <path d="M160 56v150M50 96l110 40 110-40" {...line} className="text-navy-700" />
      <rect x="66" y="108" width="30" height="30" rx="3" {...line} className="text-navy-600" />
      <rect x="176" y="108" width="30" height="30" rx="3" {...line} className="text-navy-600" />
      <path d="M176 123h30" {...line} className="text-accent-500" />
    </Frame>
  );
}

export function TechContainer() {
  return (
    <Frame>
      <rect x="42" y="88" width="236" height="88" rx="6" className="text-accent-500" fill="currentColor" fillOpacity="0.1" />
      <rect x="42" y="88" width="236" height="88" rx="6" {...line} className="text-navy-800" />
      {Array.from({ length: 10 }).map((_, i) => (
        <path key={i} d={`M${62 + i * 21} 88v88`} {...line} className="text-navy-600" />
      ))}
      <rect x="58" y="104" width="26" height="22" rx="2" {...line} className="text-accent-500" />
      <path d="M42 176h236M50 176v14M270 176v14" {...line} className="text-navy-700" />
    </Frame>
  );
}

export function TechCooling() {
  return (
    <Frame>
      <rect x="90" y="40" width="140" height="160" rx="10" className="text-accent-500" fill="currentColor" fillOpacity="0.1" />
      <rect x="90" y="40" width="140" height="160" rx="10" {...line} className="text-navy-800" />
      <circle cx="160" cy="110" r="34" {...line} className="text-navy-700" />
      <path d="M160 110V84M160 110l22 13M160 110l-22 13" {...line} className="text-accent-500" />
      <path d="M110 168h100M110 180h100M110 192h60" {...line} className="text-navy-600" />
      <path d="M60 70q14 20 0 40M260 70q-14 20 0 40" {...line} className="text-navy-500" />
    </Frame>
  );
}

export function TechBattery() {
  return (
    <Frame>
      <rect x="52" y="60" width="216" height="120" rx="10" className="text-accent-500" fill="currentColor" fillOpacity="0.1" />
      <rect x="52" y="60" width="216" height="120" rx="10" {...line} className="text-navy-800" />
      <path d="M268 96v48" {...line} className="text-navy-700" />
      {Array.from({ length: 5 }).map((_, i) => (
        <rect key={i} x={70 + i * 40} y="76" width="28" height="88" rx="4" {...line} className="text-navy-600" />
      ))}
      <path d="M152 110 138 132h14l-10 22" {...line} className="text-accent-500" />
    </Frame>
  );
}

export function TechFloor() {
  return (
    <Frame>
      <path d="M160 40 268 92 160 144 52 92Z" className="text-accent-500" fill="currentColor" fillOpacity="0.1" />
      <path d="M160 40 268 92 160 144 52 92Z" {...line} className="text-navy-800" />
      {[1, 2, 3].map((i) => (
        <path key={i} d={`M${52 + i * 4} ${92 + i * 4}h${216 - i * 8}`} {...line} className="text-navy-500" opacity={0.5} />
      ))}
      <path d="M96 116v56l64 30 64-30v-56" {...line} className="text-navy-700" />
      <path d="M160 144v58" {...line} className="text-navy-600" />
    </Frame>
  );
}

export function TechCable() {
  return (
    <Frame>
      <rect x="50" y="100" width="220" height="60" rx="8" className="text-accent-500" fill="currentColor" fillOpacity="0.1" />
      <rect x="50" y="100" width="220" height="60" rx="8" {...line} className="text-navy-800" />
      {Array.from({ length: 9 }).map((_, i) => (
        <path key={i} d={`M${62 + i * 24} 100v60`} {...line} className="text-navy-600" />
      ))}
      <path d="M50 130q110-30 220 0" {...line} className="text-accent-500" />
      <path d="M50 142q110-26 220 0" {...line} className="text-navy-500" />
    </Frame>
  );
}

export function TechSolar() {
  return (
    <Frame>
      <path d="M60 200 230 130l30 10-170 70Z" className="text-accent-500" fill="currentColor" fillOpacity="0.1" />
      <path d="M60 200 230 130l30 10-170 70Z" {...line} className="text-navy-800" />
      {Array.from({ length: 4 }).map((_, i) => (
        <path key={`h${i}`} d={`M${76 + i * 20} ${196 - i * 3}L${240 + i * 5} ${125 - i * 1}`} {...line} className="text-navy-600" opacity={0.6} />
      ))}
      <circle cx="230" cy="52" r="20" {...line} className="text-accent-500" />
      <path d="M230 20v10M230 74v10M198 52h10M252 52h10M206 28l7 7M254 76l-7-7M206 76l7-7M254 28l-7 7" {...line} className="text-accent-500" />
    </Frame>
  );
}

export function TechSwitch() {
  return (
    <Frame>
      <rect x="70" y="50" width="180" height="140" rx="10" className="text-accent-500" fill="currentColor" fillOpacity="0.1" />
      <rect x="70" y="50" width="180" height="140" rx="10" {...line} className="text-navy-800" />
      <circle cx="110" cy="90" r="10" {...line} className="text-navy-700" />
      <circle cx="210" cy="150" r="10" {...line} className="text-navy-700" />
      <circle cx="110" cy="150" r="10" {...line} className="text-navy-700" />
      <path d="M120 90h30a10 10 0 0 1 10 10v10a10 10 0 0 0 10 10h30" {...line} className="text-accent-500" />
      <path d="M120 150h70" {...line} className="text-navy-500" />
    </Frame>
  );
}

export function TechGlobe() {
  return (
    <Frame>
      <circle cx="160" cy="120" r="72" className="text-accent-500" fill="currentColor" fillOpacity="0.1" />
      <circle cx="160" cy="120" r="72" {...line} className="text-navy-800" />
      <path d="M88 120h144M160 48c22 22 32 48 32 72s-10 50-32 72c-22-22-32-48-32-72s10-50 32-72Z" {...line} className="text-navy-600" />
      {[
        [110, 78],
        [212, 78],
        [110, 164],
        [212, 164],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" className="text-accent-500" fill="currentColor" />
      ))}
    </Frame>
  );
}

export const techIllustrations: Record<string, () => React.ReactElement> = {
  pdu: TechPdu,
  ups: TechUps,
  cabinet: TechCabinet,
  module: TechModule,
  container: TechContainer,
  cooling: TechCooling,
  battery: TechBattery,
  floor: TechFloor,
  cable: TechCable,
  solar: TechSolar,
  switch: TechSwitch,
  globe: TechGlobe,
};

export const productIllustrationKey: Record<string, keyof typeof techIllustrations> = {
  pdu: "pdu",
  "schuko-pdu": "pdu",
  "nema-pdu": "pdu",
  "multi-function-pdu": "pdu",
  "uk-pdu": "pdu",
  "iec-pdu": "pdu",
  "intelligent-pdu": "pdu",
  "high-power-pdu": "pdu",
  "metered-pdu": "pdu",
  "monitored-pdu": "pdu",
  "switched-pdu": "pdu",
  "three-phase-pdu": "pdu",
  "ats-pdu": "switch",
  sts: "switch",
  "automatic-transfer-switch": "switch",
  "modular-ups": "ups",
  "tower-ups": "ups",
  "online-ups": "ups",
  "industrial-ups": "ups",
  "data-center-cabinet": "cabinet",
  "server-rack": "cabinet",
  "19-inch-rack": "cabinet",
  "cold-aisle-cabinet": "cabinet",
  "intelligent-cabinet": "cabinet",
  "outdoor-cabinet": "cabinet",
  "single-row-micro-data-center": "module",
  "dual-row-micro-data-center": "module",
  "all-in-one-micro-data-center": "module",
  "40ft-container-data-center": "container",
  "20ft-container-data-center": "container",
  "modular-container-data-center": "container",
  "edge-data-center": "globe",
  "precision-air-conditioner": "cooling",
  "liquid-cooling": "cooling",
  cdu: "cooling",
  "row-based-cooling": "cooling",
  "room-cooling": "cooling",
  "airflow-floor": "floor",
  "cable-tray": "cable",
  "wire-mesh-cable-tray": "cable",
  "ladder-cable-tray": "cable",
  "battery-energy-storage-system": "battery",
  "solar-power-system": "solar",
  "energy-storage-system": "battery",
};

export const categoryIllustrationKey: Record<string, keyof typeof techIllustrations> = {
  "power-distribution": "pdu",
  "ups-systems": "ups",
  "network-server-cabinets": "cabinet",
  "micro-modular-data-center": "module",
  "containerized-data-center": "container",
  "cooling-solutions": "cooling",
  "raised-floor": "floor",
  "cable-management": "cable",
  "energy-storage": "battery",
};

export const solutionIllustrationKey: Record<string, keyof typeof techIllustrations> = {
  "data-center-infrastructure": "module",
  "micro-modular-data-center": "module",
  "containerized-data-center": "container",
  "edge-data-center": "globe",
  "telecom-data-center": "globe",
  "ai-data-center": "cooling",
  "liquid-cooling": "cooling",
  "critical-power": "ups",
  "smart-power-distribution": "pdu",
  "energy-storage": "battery",
};

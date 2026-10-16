import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  // Legacy static-site URLs (pre-Next.js) that still receive external links
  // or search engine requests. Each target was verified to exist and to be
  // topically equivalent before being added here — do not add a legacy URL
  // without a real, matching destination.
  async redirects() {
    return [
      { source: "/ups.html", destination: "/products/ups-systems", permanent: true },
      { source: "/precision-air-conditioning.html", destination: "/products/precision-air-conditioner", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;

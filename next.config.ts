import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shahidmohammad.com",
      },
      {
        protocol: "https",
        hostname: "web.archive.org",
      },
    ],
    unoptimized: true,
  },
  allowedDevOrigins: [
    "21.0.5.36",
    ".space-z.ai",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* allow the platform preview host to load dev assets without warnings */
  allowedDevOrigins: ["*.space-z.ai"],
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;

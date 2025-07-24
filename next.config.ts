import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.iconify.design",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

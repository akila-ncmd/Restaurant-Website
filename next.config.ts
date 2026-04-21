import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopack: {
      root: '.',
    },
  },
};

export default nextConfig;

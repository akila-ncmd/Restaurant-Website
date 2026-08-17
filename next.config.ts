import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: a stray lockfile above this directory otherwise makes
  // Turbopack infer the wrong root.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

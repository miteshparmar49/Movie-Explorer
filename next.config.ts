import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 🔥 Enable compression
  compress: true,

  // 🚀 Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // ⚡ Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ⚡ Experimental optimizations
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
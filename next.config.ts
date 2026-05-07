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

  // ✅ Force WWW + HTTPS
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "mvpinfotech.in",
          },
        ],
        destination: "https://www.mvpinfotech.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
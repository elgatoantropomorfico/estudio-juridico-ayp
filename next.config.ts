import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Turbopack uses this app directory as the root to prevent chunk path issues
  turbopack: {
    root: __dirname,
  },
  // Allow Next/Image to optimize external images we use (Unsplash)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

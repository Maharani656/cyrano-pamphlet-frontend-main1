// next.config.ts
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'humble-excitement-d3938ee2da.media.strapiapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'figma-backend-ehsr.onrender.com/',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": path.resolve(__dirname, "."),
    };
    return config;
  },
};

export default nextConfig;

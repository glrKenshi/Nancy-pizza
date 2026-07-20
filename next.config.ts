import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dodopizza-a.akamaihd.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.dodostatic.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

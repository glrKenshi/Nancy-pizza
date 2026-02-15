import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    domains: ["dodopizza-a.akamaihd.net"],
  },
};

export default nextConfig;

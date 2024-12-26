import("dotenv/config");

import type { NextConfig } from "next";
import analyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  env: {
    port: process.env.PORT || "3000",
  },
  compress: process.env.APP_ENV === "production",
  webpack(config) {
    return config;
  },
};

export default analyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);

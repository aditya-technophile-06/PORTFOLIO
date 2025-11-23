import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    // @ts-expect-error - turbo config for TLS certs
    turbo: {
      useSystemTlsCerts: true,
    },
  },
};

export default nextConfig;

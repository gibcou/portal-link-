import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Proxy /api/* to Node backend if BACKEND_URL is set
    if (process.env.BACKEND_URL) {
      return [
        {
          source: "/api/:path*",
          destination: `${process.env.BACKEND_URL}/api/:path*`,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;

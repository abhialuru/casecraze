import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['files.edgestore.dev'], // Allow images from this domain
  },
};

export default nextConfig;

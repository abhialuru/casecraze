import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['files.edgestore.dev'], // Allow images from this domain
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/api/:path*',  // Apply CORS headers to API routes
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://casecraze-9yzl.vercel.app',
           //  // Or specify your frontend domain (e.g., 'https://your-frontend-domain.com')
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

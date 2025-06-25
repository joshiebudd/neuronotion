/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all assets
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3153600, must-revalidate", // Cache for 1 year
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: [
      "github.com",
      "raw.githubusercontent.com",
      "neuronotionpullzonw.b-cdn.net",
      "NeuroNotionPullZonw.b-cdn.net"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
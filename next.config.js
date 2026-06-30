/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // In dev, the long cache poisons Next's stable-named chunks (webpack.js,
    // main.js, pages/*.js) after a rebuild: the browser serves year-old cached
    // JS against fresh server HTML, which looks like a hydration mismatch and
    // sends Fast Refresh into an endless full-reload loop. Only cache in prod.
    if (process.env.NODE_ENV !== "production") {
      return [
        {
          source: "/(.*)",
          headers: [{ key: "Cache-Control", value: "no-store, must-revalidate" }],
        },
      ];
    }

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
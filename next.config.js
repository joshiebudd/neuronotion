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
  async redirects() {
    // Route cutover: the new Romi pages took over /, /corporates, and the old
    // Neuro Notion pages moved to /neuronotion*. Keep old links working.
    return [
      { source: "/rominewlanding", destination: "/", permanent: false },
      { source: "/romiforcorporates", destination: "/corporates", permanent: false },
      { source: "/forcorporate", destination: "/neuronotion-corporate", permanent: false },
      // /romiforclinics is the ONLY clinic page now. All old clinic routes (the
      // Claudia clinic page + the standalone pricing page) redirect into it.
      { source: "/forclinics", destination: "/romiforclinics", permanent: false },
      { source: "/forclinics2", destination: "/romiforclinics", permanent: false },
      { source: "/neuronotion-clinics", destination: "/romiforclinics", permanent: false },
      { source: "/clinicpricing", destination: "/romiforclinics#pricing", permanent: false },
      { source: "/forcoaches", destination: "/neuronotion-coaches", permanent: false },
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
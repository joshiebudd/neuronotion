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
    //
    // All permanent (308) since the 18 Aug 2026 SEO audit: the cutover has been
    // stable since 13 Jul, and permanent redirects are what pass link equity.
    // The Claudia-era pages (/team, /pricing, /neuronotion-corporate,
    // /neuronotion-coaches, /claudianewlp, /forcorporate2, /templateshome) were
    // still live and indexable with "Claudia" titles; they now redirect to their
    // Romi equivalents. /neuronotion stays as the archived old homepage.
    return [
      { source: "/rominewlanding", destination: "/", permanent: true },
      { source: "/romiforcorporates", destination: "/corporates", permanent: true },
      { source: "/forcorporate", destination: "/corporates", permanent: true },
      { source: "/forcorporate2", destination: "/corporates", permanent: true },
      { source: "/neuronotion-corporate", destination: "/corporates", permanent: true },
      // /romiforclinics is the ONLY clinic page now. All old clinic routes (the
      // Claudia clinic page + the standalone pricing page) redirect into it.
      { source: "/forclinics", destination: "/romiforclinics", permanent: true },
      { source: "/forclinics2", destination: "/romiforclinics", permanent: true },
      { source: "/neuronotion-clinics", destination: "/romiforclinics", permanent: true },
      { source: "/clinicpricing", destination: "/romiforclinics#pricing", permanent: true },
      { source: "/forcoaches", destination: "/", permanent: true },
      { source: "/neuronotion-coaches", destination: "/", permanent: true },
      // Claudia-era pages retired 18 Aug 2026.
      { source: "/pricing", destination: "/#pricing", permanent: true },
      { source: "/team", destination: "/", permanent: true },
      { source: "/claudianewlp", destination: "/neuronotion", permanent: true },
      { source: "/templateshome", destination: "/templates", permanent: true },
      // The blog index lives at /blogs; /blog is the obvious guess.
      { source: "/blog", destination: "/blogs", permanent: true },
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
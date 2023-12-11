/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'github.com',
      'raw.githubusercontent.com', // Add the domain without the protocol
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  vercelAnalyticsId: 'prj_XPGFnBtOVBZufVUGGE8tAiatzOtj',
};

module.exports = nextConfig;

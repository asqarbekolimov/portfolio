/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Enable ESLint during development and production builds
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
      {
        protocol: 'http',
        hostname: '*',
      },
    ],
  },
};

module.exports = nextConfig;

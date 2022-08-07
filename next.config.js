/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    DEEZER_API: process.env.DEEZER_API
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/artists',
        permanent: true
      }
    ];
  },
}

module.exports = nextConfig

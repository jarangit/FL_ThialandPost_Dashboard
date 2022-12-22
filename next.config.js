/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://183.89.221.119:8119/api/v1/:path*`,
      },
    ]
  },
}

module.exports = nextConfig

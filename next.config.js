/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/',
          destination: '/news/1'
        }
      ]
    }
  }
}

module.exports = nextConfig

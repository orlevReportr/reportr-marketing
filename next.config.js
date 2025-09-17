/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  images: {
    unoptimized: true
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  }
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: ['./app'],
    prependData: `@import "~@/app/styles/variables.scss";`,
  },
  output: 'standalone',
};

module.exports = nextConfig;
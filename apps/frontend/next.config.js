/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        hostname: `${process.env.NEXT_PUBLIC_OSS_BUCKET}.oss-${process.env.NEXT_PUBLIC_OSS_LOCATION}.aliyuncs.com`,
      },
    ],
  },
  webpack(config) {
    // console.log(config)
    config.resolve.fallback = {
      fs: false,
      path: false,
      crypto: false,
    };
    // config.optimization.sideEffects = true;
    // config.optimization.usedExports = true;
    return config
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://zyy-frontend.oss-cn-chengdu.aliyuncs.com' : undefined,
  output: 'standalone',
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)

// module.exports = nextConfig

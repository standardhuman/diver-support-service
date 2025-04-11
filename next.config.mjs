/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/diver-support-service' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/diver-support-service/' : '',
  distDir: 'dist',
  cleanDistDir: true,
}

export default nextConfig 
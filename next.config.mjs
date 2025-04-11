/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath when testing locally, uncomment when deploying to GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/diver-support-service' : '',
}

export default nextConfig 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    // Ігнорувати помилки типізації під час збірки
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ігнорувати помилки лінтера під час збірки
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  poweredByHeader: false,
  reactStrictMode: true,
  // Enable compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Experimental features for better performance
  experimental: {
    // Note: optimizePackageImports removed to avoid icon import issues
    optimizePackageImports: ['@gsap/react', 'gsap', 'lottie-react'],
  },
};

export default nextConfig;

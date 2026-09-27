/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react", "lucide-react"]
  },
  async redirects() {
    return [
      { source: "/book-a-trial", destination: "/contact#book-a-trial", permanent: true },
      { source: "/programs", destination: "/programmes", permanent: true },
      { source: "/programs/:slug", destination: "/programmes/:slug", permanent: true },
      { source: "/blog", destination: "/news", permanent: true },
      { source: "/blog/:slug", destination: "/news/:slug", permanent: true }
    ];
  }
};

export default nextConfig;

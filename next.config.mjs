/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable server-side rendering by default
  reactStrictMode: true,

  // Explicitly handle the exportPathMap to ensure API routes are excluded from static export
  async exportPathMap() {
    return {
      // Define your static pages here
      '/': { page: '/' },
      // Other static pages you may have
      // '/about': { page: '/about' },
    };
  },

  // Disable static generation for API routes
  generateBuildId: async () => {
    return 'build-id';
  },
};

export default nextConfig;

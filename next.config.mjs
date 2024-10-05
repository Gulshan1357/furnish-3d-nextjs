/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable server-side rendering by default
  reactStrictMode: true,

  // Disable static generation for API routes
  generateBuildId: async () => {
    return 'build-id';
  },
};

export default nextConfig;

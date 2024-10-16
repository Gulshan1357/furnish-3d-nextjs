import withBundleAnalyzer from '@next/bundle-analyzer';
import withPWA from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KINDE_SITE_URL:
      process.env.KINDE_SITE_URL ?? `https://${process.env.VERCEL_URL}`,
    KINDE_POST_LOGOUT_REDIRECT_URL:
      process.env.KINDE_POST_LOGOUT_REDIRECT_URL ??
      `https://${process.env.VERCEL_URL}`,
    KINDE_POST_LOGIN_REDIRECT_URL:
      process.env.KINDE_POST_LOGIN_REDIRECT_URL ??
      `https://${process.env.VERCEL_URL}/inventory`,
  },
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  images: {},
  webpack(config, { isServer }) {
    if (!isServer) {
      // We're in the browser build, so we can safely exclude the sharp module
      config.externals.push('sharp');
    }
    // audio support
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: config.inlineImageLimit,
            fallback: 'file-loader',
            publicPath: `${config.assetPrefix}/_next/static/media/`,
            outputPath: `${isServer ? '../' : ''}static/media/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    // shader support
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });

    return config;
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(
  withPWA({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  })(nextConfig),
);

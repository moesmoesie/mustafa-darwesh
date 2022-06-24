/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },

  async redirects() {
    return [
      {
        source: "/studio",
        destination: "/studio/desk",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

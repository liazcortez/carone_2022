module.exports = {
  webpack5: false,
  reactStrictMode: true,
  images: {
    domains: ["carone.com.mx", "automotive-api.s3.us-east-2.amazonaws.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

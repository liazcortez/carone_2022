const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
]);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["carone.com.mx", "automotive-api.s3.us-east-2.amazonaws.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withTM(nextConfig);


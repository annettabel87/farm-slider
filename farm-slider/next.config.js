/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "celes.club",
        port: "",
        pathname: "/uploads/posts/**",
      },
    ],
  },
};

module.exports = nextConfig;

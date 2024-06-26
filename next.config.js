/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.unsplash.com",
      },
    ],
  },
  experimental:{
    serverActions: true,
  }
};

module.exports = nextConfig;
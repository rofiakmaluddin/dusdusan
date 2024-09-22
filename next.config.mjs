/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.movieofthenight.com',
      },
    ],
  },
};

export default nextConfig;

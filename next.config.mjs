/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/online-admission',
        destination: 'https://college.mkrcollege.com/online_admission',
        permanent: true,
      },
      {
        source: '/admission-portal',
        destination: 'https://college.mkrcollege.com/online_admission',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

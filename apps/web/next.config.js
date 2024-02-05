/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sniperfactory.s3.ap-northeast-2.amazonaws.com',
        pathname: '**',
      },
    ],
  },
};

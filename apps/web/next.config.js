/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['3.38.183.51'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sniperfactory.s3.ap-northeast-2.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '8gxpim8pv4.execute-api.ap-northeast-2.amazonaws.com',
        pathname: '**',
      },
    ],
  },
};

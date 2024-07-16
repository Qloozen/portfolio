import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpackDevMiddleware: (config) => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
  //   };
  //   return config;
  // },
  images: {
    domains: ['localhost', 'portfolio-cms.qloozen.nl'],
  },
  output: 'standalone',
};

export default withNextIntl(nextConfig);

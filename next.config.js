/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/maximecamp.github.io' : '',
  assetPrefix: isGithubPages ? '/maximecamp.github.io/' : '',
};

module.exports = nextConfig;

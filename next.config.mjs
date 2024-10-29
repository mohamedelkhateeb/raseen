import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.geeksforgeeks.org', 'rosybrown-otter-562138.hostingersite.com'],
  },
};

export default withNextIntl(nextConfig);

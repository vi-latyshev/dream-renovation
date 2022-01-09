const IS_VERCEL = process.env.VERCEL === '1';
const IS_PRODUCTION = process.env.VERCEL_ENV === 'production';
const HOST = IS_VERCEL ? process.env.VERCEL_URL : 'localhost';
const DOMAIN = IS_VERCEL ? `https://${HOST}` : 'http://localhost:3000';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/services',
                destination: '/#services',
                permanent: true,
            },
        ];
    },
    poweredByHeader: false,
    env: {
        IS_PRODUCTION,
        HOST,
        DOMAIN,
    },
    eslint: {
        dirs: [
            'src',
        ],
    },
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    /* @TODO remove after enabling as default in next.js */
    swcMinify: true,
};

module.exports = nextConfig;

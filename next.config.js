const IS_PRODUCTION = process.env.VERCEL_ENV === 'production';
const DOMAIN = process.env.NEXT_PUBLIC_URL;

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

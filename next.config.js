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
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin',
                    },
                ],
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

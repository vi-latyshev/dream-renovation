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

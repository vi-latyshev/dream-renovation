/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    eslint: {
        dirs: [
            'src',
        ],
    },
};

module.exports = nextConfig;

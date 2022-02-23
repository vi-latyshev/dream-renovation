const {
    PHASE_PRODUCTION_BUILD,
} = require('next/constants');

/**
 * Add environment variables to all app
 *
 * NOTE: Destructure process.env variables won't work due to the nature of webpack DefinePlugin
 *
 * @type {import('./plugins').NextPluginType}
 */
module.exports = (nextConfig, nextComposePlugins = {}) => {
    const { phase = PHASE_PRODUCTION_BUILD } = nextComposePlugins;

    const isBuild = phase === PHASE_PRODUCTION_BUILD;
    const isProd = isBuild && process.env.IS_PRODUCTION === 'true';
    const hasCustomHost = isProd !== true && process.env.HOST !== undefined;

    return {
        env: {
            IS_PRODUCTION: isProd,

            HOST: 'localhost',
            DOMAIN: 'http://localhost:3000',
            ...(isProd && {
                HOST: 'www.dream-renovation.ru',
                DOMAIN: 'https://www.dream-renovation.ru',
            }),
            ...(hasCustomHost && {
                HOST: process.env.HOST,
                DOMAIN: `https://${process.env.HOST}`,
            }),
        },
    };
};

const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const withEnv = require('./next-plugins/withEnv');

const { env } = withEnv({}, { phase: PHASE_PRODUCTION_BUILD });

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: env.DOMAIN,
    changefreq: 'daily',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
};

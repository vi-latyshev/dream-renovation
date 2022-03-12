const withPlugins = require('next-compose-plugins');

const withNextConfig = require('./next-plugins/withNextConfig');
const withEnv = require('./next-plugins/withEnv');

module.exports = withPlugins([
    withNextConfig,
    withEnv,
]);

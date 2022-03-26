const withPlugins = require('next-compose-plugins');
const {
    PHASE_DEVELOPMENT_SERVER,
} = require('next/constants');

const withNextConfig = require('./next-plugins/withNextConfig');
const withCheckRequiredEnv = require('./next-plugins/withCheckRequiredEnv');
const withEnv = require('./next-plugins/withEnv');
const withDevPrecompile = require('./next-plugins/withDevPrecompile');

module.exports = withPlugins([
    withNextConfig,
    withCheckRequiredEnv,
    withEnv,
    [withDevPrecompile, [PHASE_DEVELOPMENT_SERVER]],
]);

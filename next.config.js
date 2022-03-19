const withPlugins = require('next-compose-plugins');
const {
    PHASE_DEVELOPMENT_SERVER,
} = require('next/constants');

const withNextConfig = require('./next-plugins/withNextConfig');
const withEnv = require('./next-plugins/withEnv');
const withDevPrecompile = require('./next-plugins/withDevPrecompile');

module.exports = withPlugins([
    withNextConfig,
    withEnv,
    [withDevPrecompile, [PHASE_DEVELOPMENT_SERVER]],
]);

const fs = require('fs').promises;
const path = require('path');
const waitOn = require('wait-on');
const Log = require('next/dist/build/output/log');

const getWaitOnOptions = (resources) => ({
    resources,
    interval: 2000,
    validateStatus: () => true,
});

const getPreCompileResources = async (basePath) => {
    const files = await fs.readdir('src/pages/api', { withFileTypes: true });

    const resources = files.map((value) => (
        `${basePath}/api/${path.parse(value.name).name}/`
    ));

    return resources;
};

const waitPrecompilePaths = async (basePath) => {
    const resources = await getPreCompileResources(basePath);

    resources.unshift(basePath);

    const opts = getWaitOnOptions(resources);
    await waitOn(opts);
};

/**
 * Precompile index page and /api routes
 *
 * @type {import('./plugins').NextPluginType}
 */
module.exports = (nextConfig, _nextComposePlugins = {}) => {
    const { env: { DOMAIN } } = nextConfig;

    (async () => {
        Log.wait('start wait to precompile...');
        await waitPrecompilePaths(DOMAIN);
        Log.event('precompile done');
    })();

    return {};
};

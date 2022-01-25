const fs = require('fs').promises;
const path = require('path');
const waitOn = require('wait-on');

const defaultUrl = 'http://localhost:3000/';

const getOptions = (resources) => ({
    resources,
    interval: 2000,
    validateStatus: () => true,
});

/**
 * Need only for dev for precompile some pages
 *
 * https://github.com/vercel/next.js/issues/6554#issuecomment-833951620
 *
 * @TODO SWR - mb remove it after adding SWR?
 */
(async () => {
    const files = await fs.readdir('src/pages/api', { withFileTypes: true });

    const resources = files.map((value) => (
        `${defaultUrl}api/${path.parse(value.name).name}/`
    ));
    resources.unshift(defaultUrl);

    const opts = getOptions(resources);
    await waitOn(opts);

    console.info('precompile - done');
})();

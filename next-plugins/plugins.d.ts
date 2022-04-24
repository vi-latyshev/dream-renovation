import type { NextConfig } from 'next';

type NextConfigType = NextConfig & {
    env: NodeJS.ProcessEnv;
};

/**
 * https://github.com/cyrilwanner/next-compose-plugins/tree/master#additional-information
 */
type NextComposePluginType = {
    nextComposePlugins: true,
    /**
     * Next.js phases
     */
    phase: string;
};

type NextPluginType = (
    nextConfig: NextConfigType,
    nextComposePlugins: NextComposePluginType
) => NextConfigType;

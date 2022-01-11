declare namespace NodeJS {
    interface ProcessEnv {
        // vercel
        readonly VERCEL: '1' | undefined;
        readonly VERCEL_ENV: 'production' | 'preview' | 'development';
        readonly VERCEL_URL: string;

        // next.config.js
        readonly IS_PRODUCTION: boolean;
        readonly HOST: string;
        readonly DOMAIN: string;
    }
}

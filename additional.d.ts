declare namespace NodeJS {
    interface ProcessEnv {
        // vercel
        readonly VERCEL: '1' | undefined;
        readonly VERCEL_ENV: 'production' | 'preview' | 'development';

        // next.js
        readonly NEXT_PUBLIC_URL: string;

        // next.config.js
        readonly IS_PRODUCTION: boolean;
        readonly DOMAIN: string;

        // .env
        readonly ACCOUNT_NAME_MAIL: string;
        readonly ACCOUNT_PASS_MAIL: string;
    }
}

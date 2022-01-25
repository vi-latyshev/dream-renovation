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
        readonly MAIL_ACCOUNT_NAME: string;
        readonly MAIL_ACCOUNT_PASS: string;
    }
}

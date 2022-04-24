import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

import { GTM_ID } from '../constants';
import { gtag } from '../gtag';

const IS_PROD = process.env.IS_PRODUCTION;

const GTMPageView = (url: string) => {
    gtag('gtm.historyChange', { page: url });
};

export const GTMScript = () => {
    const router = useRouter();

    useEffect(() => {
        router.events.on('routeChangeComplete', GTMPageView);

        return () => {
            router.events.off('routeChangeComplete', GTMPageView);
        };
    }, []);

    if (!IS_PROD) {
        return null;
    }

    return (
        <>
            <Head>
                <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
                <link rel="preconnect" href="https://www.googletagmanager.com/" />
                <link rel="preload" href={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} as="script" />
            </Head>
            <Script id="gtm-data-layer" strategy="afterInteractive">
                {"window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});"}
            </Script>
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
            />
        </>
    );
};

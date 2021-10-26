import { useEffect } from 'react';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import { theme } from 'styles';
import { BackToTop } from 'components/BackToTop';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        jssStyles?.parentElement?.removeChild(jssStyles);
    }, []);

    return (
        <>
            <Head>
                {/* required meta tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                {/* @TODO wrap this before deplouy on production */}
                <meta name="robots" content="noindex" />

                {/* other meta */}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
                <BackToTop />
            </ThemeProvider>
        </>
    );
};

export default App;

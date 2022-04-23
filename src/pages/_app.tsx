import { useEffect } from 'react';
import { CssBaseline, ThemeProvider, StylesProvider } from '@material-ui/core';

import { theme } from 'styles';
import { GTMScript } from 'lib/gtm';
import { ModalProvider } from 'components/Modal';
import { BackToTop } from 'components/BackToTop';
import { useScrollToHash } from 'hooks/useScrollToHash';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
    useScrollToHash();

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        jssStyles?.parentElement?.removeChild(jssStyles);
    }, []);

    return (
        <>
            <GTMScript />
            <StylesProvider injectFirst={false}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ModalProvider>
                        <Component {...pageProps} />
                    </ModalProvider>
                    <BackToTop />
                </ThemeProvider>
            </StylesProvider>
        </>
    );
};

export default App;

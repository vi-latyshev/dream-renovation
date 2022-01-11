import { useEffect } from 'react';
import { CssBaseline, ThemeProvider, StylesProvider } from '@material-ui/core';

import { theme } from 'styles';
import { BackToTop } from 'components/BackToTop';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        jssStyles?.parentElement?.removeChild(jssStyles);
    }, []);

    return (
        <StylesProvider injectFirst={false}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
                <BackToTop />
            </ThemeProvider>
        </StylesProvider>
    );
};

export default App;

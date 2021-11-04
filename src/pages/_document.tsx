import * as React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core';

import { theme } from 'styles';

// TODO: mb? https://github.com/vercel/next.js/issues/9794
export default class MyDocument extends Document {
    render = () => (
        <Html lang="ru">
            <Head>
                {/* @TODO wrap this before deplouy on production */}
                <meta name="robots" content="noindex" />

                <meta name="theme-color" content={theme.palette.primary.main} />
                <link
                    rel="preconnect"
                    crossOrigin="anonymous"
                    href="https://fonts.gstatic.com"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&family=Montserrat:wght@700&subset=cyrillic&display=swap"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);
    const css = sheets.toString();

    return {
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement({
                dangerouslySetInnerHTML: { __html: css },
            }),
        ],
    };
};

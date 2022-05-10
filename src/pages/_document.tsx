import * as React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core';

import { theme } from 'styles';
import { GTMNoScript } from 'lib/gtm';

const IS_PROD = process.env.IS_PRODUCTION;

export default class MyDocument extends Document {
    render = () => (
        <Html lang="ru">
            <Head>
                <meta name="theme-color" content={theme.palette.primary.main} />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&family=Montserrat:wght@700&subset=cyrillic&display=swap"
                />
                {!IS_PROD && (
                    <meta name="robots" content="noindex" />
                )}
            </Head>
            <body>
                <GTMNoScript />
                <Main />
                <NextScript />
                <div
                    aria-label="author"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: '<!-- Authored by Vi - https://github.com/vi-latyshev | P.s. design system is not mine and it is terribly ugly -->',
                    }}
                />
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

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
                <meta name="theme-color" content={theme.palette.primary.main} />
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

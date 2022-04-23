import { GTM_ID } from '../constants';

const IS_PROD = process.env.IS_PRODUCTION;

export const GTMNoScript = () => {
    if (!IS_PROD) {
        return null;
    }

    return (
        <noscript>
            <iframe
                width="0"
                height="0"
                style={{ display: 'none', visibility: 'hidden' }}
                title="google tag manager"
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            />
        </noscript>
    );
};

import {
    useRef,
    useState,
    useEffect,
    useCallback,
} from 'react';
import Script from 'next/script';
import { makeStyles, Typography } from '@material-ui/core';

/**
 * https://yandex.ru/dev/share/
 * https://yandex.ru/dev/share/doc/dg/api.html
 */
const yandexShareSettings = {
    theme: {
        services: 'vkontakte,telegram,whatsapp,viber,messenger,twitter,facebook,linkedin',
        lang: 'ru',
        size: 'm',
        shape: 'round',
    },
};

const useStyles = makeStyles(() => ({
    social: {
        display: 'flex',
        marginLeft: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    yaShare: {
        marginTop: 20,
        // fcng yandex, i hate u!
        '& .ya-share2__list.ya-share2__list_direction_horizontal > .ya-share2__item': {
            marginRight: 10,
        },
    },
}));

export const SocialShareBlock = () => {
    const classes = useStyles();

    const yandexRef = useRef<HTMLDivElement>(null);
    const [isYandexShareLoaded, setIsYandexShareLoaded] = useState<boolean>(false);

    const handleYaShareLoaded = useCallback(() => {
        setIsYandexShareLoaded(true);
    }, []);

    useEffect(() => {
        if (!isYandexShareLoaded) {
            return undefined;
        }

        // @ts-ignore Yandex, i hate u, x2!
        const share = window.Ya.share2(yandexRef.current, yandexShareSettings);

        return () => {
            share.destroy();
        };
    }, [isYandexShareLoaded]);

    return (
        <>
            <Script
                async
                id="ya-share"
                strategy="lazyOnload"
                src="https://yastatic.net/share2/share.js"
                onLoad={handleYaShareLoaded}
            />
            {isYandexShareLoaded && (
                <div className={classes.social}>
                    <Typography>Поделиться:</Typography>
                    <div ref={yandexRef} className={classes.yaShare} />
                </div>
            )}
        </>
    );
};

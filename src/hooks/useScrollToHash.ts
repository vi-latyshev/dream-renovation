import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

import { theme } from 'styles';

const scrollToHash = (url: string) => {
    const { hash } = new URL(url, window.location.href);

    if (!hash) {
        return;
    }
    const containerId = hash.replace('#', '');
    scroller.scrollTo(containerId, {
        smooth: true,
        duration: theme.transitions.duration.enteringScreen,
    });
};

export const useScrollToHash = () => {
    const router = useRouter();

    useEffect(() => {
        scrollToHash(router.asPath);

        router.events.on('hashChangeStart', scrollToHash);
        router.events.on('routeChangeComplete', scrollToHash);

        return () => {
            router.events.on('hashChangeStart', scrollToHash);
            router.events.off('routeChangeComplete', scrollToHash);
        };
    }, []);
};

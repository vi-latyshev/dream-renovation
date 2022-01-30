import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import { scroller } from 'react-scroll';

import { theme } from 'styles';
import { Link } from 'components/controls';
import {
    ABOUNT_SECTION_ID,
    PRICING_SECTION_ID,
    SERVICES_SECTION_ID,
} from 'views/home';

const NAVIGATION_LIST = [
    { text: 'О нас', to: ABOUNT_SECTION_ID },
    { text: 'Услуги', to: SERVICES_SECTION_ID },
    { text: 'Цены', to: PRICING_SECTION_ID },
];

const useStyles = makeStyles(({ typography, spacing }) => ({
    nav: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: spacing(14),
    },
    link: {
        fontWeight: typography.fontWeightBold,
        marginRight: spacing(8),
        paddingLeft: 5,
        paddingRight: 5,
    },
}));

export const Navigation = () => {
    const classes = useStyles();
    const router = useRouter();

    const scrollToSection = useCallback(async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const { hash, href, pathname: targetPathname } = event.target as HTMLAnchorElement;

        if (router.pathname !== targetPathname) {
            await router.push(href);
        }

        const containerId = hash.replace('#', '');

        scroller.scrollTo(containerId, {
            offset: 50,
            smooth: true,
            isDynamic: true,
            duration: theme.transitions.duration.enteringScreen,
        });
    }, [router]);

    return (
        <nav className={classes.nav}>
            {NAVIGATION_LIST.map(({ text, to }) => (
                <Link
                    key={text + to}
                    href={`/#${to}`}
                    onClick={scrollToSection}
                    className={classes.link}
                >
                    {text}
                </Link>
            ))}
        </nav>
    );
};

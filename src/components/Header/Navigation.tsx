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
    { text: 'Калькулятор' },
    { text: 'Цены', to: PRICING_SECTION_ID },
];

const useStyles = makeStyles(({ typography }) => ({
    nav: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 100,
    },
    link: {
        fontWeight: typography.fontWeightBold,
        marginRight: 40,
        paddingLeft: 5,
        paddingRight: 5,
    },
}));

export const Navigation = () => {
    const classes = useStyles();

    const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        const { hash } = event.target as HTMLAnchorElement;
        const containerId = hash.replace('#', '');

        scroller.scrollTo(containerId, {
            offset: 50,
            smooth: true,
            isDynamic: true,
            duration: theme.transitions.duration.enteringScreen,
        });
    };

    return (
        <nav className={classes.nav}>
            {NAVIGATION_LIST.map(({ text, to }) => (
                <Link
                    key={text + to}
                    href={`#${to}`}
                    onClick={scrollToSection}
                    className={classes.link}
                >
                    {text}
                </Link>
            ))}
        </nav>
    );
};

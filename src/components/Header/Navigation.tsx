import { makeStyles } from '@material-ui/core';
import { scroller } from 'react-scroll';

import { theme } from 'styles';
import { Link } from 'components/controls';
import {
    ABOUNT_SECTION_ID,
    SERVICES_SECTION_ID,
    CALCULATOR_SECTION_ID,
} from 'views/home';

const NAVIGATION_LIST = [
    { text: 'О нас', to: ABOUNT_SECTION_ID },
    { text: 'Услуги', to: SERVICES_SECTION_ID },
    { text: 'Калькулятор', to: CALCULATOR_SECTION_ID },
    { text: 'Цены', to: 'prices' },
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
            smooth: true,
            isDynamic: true,
            duration: theme.transitions.duration.enteringScreen,
        });
    };

    return (
        <nav className={classes.nav}>
            {NAVIGATION_LIST.map(({ text, to }) => (
                <Link
                    key={to}
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

import { makeStyles } from '@material-ui/core';
import { scroller } from 'react-scroll';

import { Link } from 'components/controls';

const useStyles = makeStyles(({ typography }) => ({
    nav: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 100,
        '& > a': {
            fontWeight: typography.fontWeightBold,
            marginRight: 40,
            paddingLeft: 5,
            paddingRight: 5,
        },
    },
}));

export const Navigation = () => {
    const classes = useStyles();

    const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        const { hash } = event.target as HTMLAnchorElement;
        const containerId = hash.replace('#', '');

        scroller.scrollTo(containerId, {
            spy: true,
            hashSpy: true,
            smooth: true,
            isDynamic: true,
            duration: 500,
            offset: -50,
        });
    };

    return (
        <nav className={classes.nav}>
            <Link href="#about" onClick={scrollToSection}>
                О нас
            </Link>
            <Link href="#services" onClick={scrollToSection}>
                Услуги
            </Link>
            <Link href="#calculator" onClick={scrollToSection}>
                Калькулятор
            </Link>
            <Link href="#prices" onClick={scrollToSection}>
                Цены
            </Link>
        </nav>
    );
};

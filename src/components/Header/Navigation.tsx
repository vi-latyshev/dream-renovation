import { makeStyles } from '@material-ui/core';

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

    return (
        <nav className={classes.nav}>
            <Link href="#about">
                О нас
            </Link>
            <Link href="#services">
                Услуги
            </Link>
            <Link href="#calculator">
                Калькулятор
            </Link>
            <Link href="#prices">
                Цены
            </Link>
        </nav>
    );
};

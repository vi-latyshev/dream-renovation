import { makeStyles } from '@material-ui/core';

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

    return (
        <nav className={classes.nav}>
            {NAVIGATION_LIST.map(({ text, to }) => (
                <Link
                    key={text + to}
                    href={`/#${to}`}
                    className={classes.link}
                >
                    {text}
                </Link>
            ))}
        </nav>
    );
};

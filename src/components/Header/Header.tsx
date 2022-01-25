import { Container, makeStyles } from '@material-ui/core';

import { Link } from 'components/controls';
import { LogoIcon } from 'icons/Logo';

import { Navigation } from './Navigation';
import { Socials } from './Socials';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    header: {
        display: 'flex',
        marginTop: 30,
        marginBottom: 30,
    },
    container: {
        display: 'flex',
        width: breakpoints.values.xl - ((breakpoints.values.xl - breakpoints.values.lg) / 2 + spacing(3)),
    },
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <Container component="header" className={classes.header}>
            <div className={classes.container}>
                <Link href="/">
                    <LogoIcon />
                </Link>
                <Navigation />
                <Socials />
            </div>
        </Container>
    );
};

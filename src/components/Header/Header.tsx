import { Container, makeStyles } from '@material-ui/core';

import { LogoIcon } from 'icons/Logo';

import { Navigation } from './Navigation';
import { Socials } from './Socials';

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        marginTop: 30,
        marginBottom: 30,
    },
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <Container component="header" className={classes.header}>
            <LogoIcon />
            <Navigation />
            <Socials />
        </Container>
    );
};

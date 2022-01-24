import { Container, makeStyles } from '@material-ui/core';

import { LogoIcon } from 'icons/Logo';

import { ContactsBlock } from './ContactBlock';

const useStyles = makeStyles(({ spacing }) => ({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing(5, 0),
    },
    logo: {
        width: 222,
        height: 99,
    },
}));

export const Footer = () => {
    const classes = useStyles();

    return (
        <Container component="footer" className={classes.footer}>
            <LogoIcon className={classes.logo} />
            <ContactsBlock />
        </Container>
    );
};

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
}));

export const Footer = () => {
    const classes = useStyles();

    return (
        <Container component="footer" className={classes.footer}>
            <LogoIcon />
            <ContactsBlock />
        </Container>
    );
};

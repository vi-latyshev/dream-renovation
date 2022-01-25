import { alpha, Container, makeStyles } from '@material-ui/core';

import { LogoIcon } from 'icons/Logo';

import { ContactsBlock } from './ContactBlock';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
    footer: {
        display: 'flex',
        justifyContent: 'center',
        boxShadow: `0px -6px 8px ${alpha(palette.text.primary, 0.06)}`,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: breakpoints.values.xl,
        padding: spacing(5, 3),
    },
    logo: {
        width: 222,
        height: 99,
    },
}));

export const Footer = () => {
    const classes = useStyles();

    return (
        <Container component="footer" maxWidth={false} className={classes.footer}>
            <div className={classes.container}>
                <LogoIcon className={classes.logo} />
                <ContactsBlock />
            </div>
        </Container>
    );
};

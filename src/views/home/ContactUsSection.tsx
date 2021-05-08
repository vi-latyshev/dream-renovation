import { Button, makeStyles, Typography } from '@material-ui/core';

import { Section } from 'components/Section';

const useStyles = makeStyles(({ palette }) => ({
    contact: {
        flexDirection: 'column',
        color: palette.common.white,
        background: palette.primary.main,
    },
    button: {
        marginTop: 100,
    },
}));

export const ContactUsSection = () => {
    const classes = useStyles();

    return (
        <Section maxWidth={false} className={classes.contact}>
            <Typography
                component="h1"
                variant="h1"
            >
                Оставьте заявку - обсудим с вами детали
            </Typography>
            <Button
                color="secondary"
                variant="outlined"
                className={classes.button}
            >
                Связаться с нами
            </Button>
        </Section>
    );
};

import { makeStyles, Typography } from '@material-ui/core';

import { Section } from 'components/Section';

import { ContactForm } from './ContactForm';

const useStyles = makeStyles(({ palette }) => ({
    contact: {
        flexDirection: 'column',
        color: palette.common.white,
        background: palette.primary.main,
    },
}));

export const ContactUsSection = () => {
    const classes = useStyles();

    return (
        <Section
            id="contact"
            maxWidth={false}
            className={classes.contact}
        >
            <Typography variant="h1">
                Оставьте заявку - обсудим с вами детали
            </Typography>
            <ContactForm />
        </Section>
    );
};

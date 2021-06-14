import { makeStyles, Typography } from '@material-ui/core';

import { SectionWithContainer } from 'components/Section';

import { ContactForm } from './ContactForm';

const useStyles = makeStyles(({ palette }) => ({
    contactContainer: {
        flexDirection: 'column',
    },
    contact: {
        color: palette.common.white,
        backgroundColor: palette.primary.main,
    },
}));

export const ContactUsSection = () => {
    const classes = useStyles();

    return (
        <SectionWithContainer
            id="contact"
            className={classes.contact}
            containerClassName={classes.contactContainer}
        >
            <Typography variant="h1">
                Оставьте заявку - обсудим с вами детали
            </Typography>
            <ContactForm />
        </SectionWithContainer>
    );
};

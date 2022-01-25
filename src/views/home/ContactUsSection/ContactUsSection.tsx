import { makeStyles, Typography } from '@material-ui/core';

import { SectionWithContainer } from 'components/Section';

import { ContactForm } from './ContactForm';

export const CONTACT_US_SECTION_ID = 'contact';

const useStyles = makeStyles(({ palette }) => ({
    contact: {
        color: palette.common.white,
        backgroundColor: palette.primary.main,
    },
}));

export const ContactUsSection = () => {
    const classes = useStyles();

    return (
        <SectionWithContainer
            maxWidth="lg"
            id={CONTACT_US_SECTION_ID}
            className={classes.contact}
        >
            <Typography variant="h1" component="h2">
                Оставьте заявку - обсудим с вами детали
            </Typography>
            <ContactForm />
        </SectionWithContainer>
    );
};

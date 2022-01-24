import { Button, makeStyles } from '@material-ui/core';

import { FormNames } from 'lib/api/routes/forms/constants';
import { contactUsSchema } from 'lib/api/routes/forms/schemas';
import { Input } from 'components/controls';
import { useReactForm } from 'components/controls/hooks';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        '& > div:not(:last-child)': {
            marginBottom: spacing(8),
        },
    },
    inputContainer: {
        display: 'flex',
        marginTop: 100,
        width: '100%',
        '& > div:not(:last-child)': {
            marginRight: 100,
        },
    },
    messageInput: {
        maxWidth: breakpoints.values.md,
    },
}));

export const ContactForm = () => {
    const classes = useStyles();

    const { control, handleSubmitForm, formState } = useReactForm({
        formName: FormNames.CONTACT_US_FORM,
        schema: contactUsSchema,
    });

    const handleContactForm = handleSubmitForm({
        onSuccessSubmit: async () => {

        },
        onErrorSubmit: async () => {

        },
    });

    return (
        <form onSubmit={handleContactForm} className={classes.contactForm}>
            <div className={classes.inputContainer}>
                <Input
                    required
                    name="name"
                    control={control}
                />
                <Input
                    required
                    name="phone"
                    control={control}
                />
                <Input
                    name="email"
                    control={control}
                />
            </div>
            <Input
                rows={3}
                multiline
                name="message"
                control={control}
                className={classes.messageInput}
            />
            <Button
                type="submit"
                color="secondary"
                variant="outlined"
                disabled={formState.isSubmitting}
            >
                Связаться с нами
            </Button>
        </form>
    );
};

import { useCallback } from 'react';
import { Button, makeStyles } from '@material-ui/core';

import { FormNames } from 'lib/api/routes/forms/constants';
import { contactUsSchema } from 'lib/api/routes/forms/schemas';
import { Input } from 'components/controls';
import { useReactForm } from 'components/controls/hooks';
import { useModal, ModalFormRespSuccess, ModalFormRespError } from 'components/Modal';
import { FormAcceptPolicy } from 'components/FormAcceptPolicy';

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => ({
    contactForm: {
        position: 'relative',
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
        marginTop: spacing(12),
        width: '100%',
        '& > div:not(:last-child)': {
            marginRight: spacing(12),
        },
    },
    messageInput: {
        maxWidth: breakpoints.values.sm,
    },
    policy: {
        '& > a:hover': {
            color: palette.backgroundSecondary.main,
        },
    },
}));

export const ContactForm = () => {
    const classes = useStyles();
    const { showModal } = useModal();

    const { control, handleSubmit, formState } = useReactForm({
        formName: FormNames.CONTACT_US_FORM,
        schema: contactUsSchema,
    });

    const handleContactForm = useCallback(handleSubmit({
        onSuccessSubmit: async () => {
            showModal(ModalFormRespSuccess);
        },
        onErrorSubmit: async () => {
            showModal(ModalFormRespError);
        },
    }), []);

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
                multiline
                minRows={3}
                maxRows={6}
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
            <FormAcceptPolicy className={classes.policy} />
        </form>
    );
};

import { Button, makeStyles } from '@material-ui/core';

import {
    object,
    optional,
    NameScruct,
    EmailStruct,
    PhoneStruct,
} from 'lib/superstruct';
import { Input } from 'components/controls';
import { useReactForm } from 'components/controls/hooks';

const useStyles = makeStyles(() => ({
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    inputContainer: {
        display: 'flex',
        marginTop: 100,
        width: '100%',
        '& > div:not(:last-child)': {
            marginRight: 100,
        },
    },
    button: {
        marginTop: 100,
    },
}));

const apiEndpoint = 'contact_form';

const formSchema = object({
    name: NameScruct,
    phone: PhoneStruct,
    email: optional(EmailStruct),
});

export const ContactForm = () => {
    const classes = useStyles();

    const { control, handleSubmitForm, formState } = useReactForm({ apiEndpoint, formSchema });

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
                    label="Ваше имя"
                    control={control}
                />
                <Input
                    required
                    name="phone"
                    label="Телефон"
                    control={control}
                />
                <Input
                    name="email"
                    label="Почта"
                    control={control}
                />
            </div>
            <Button
                type="submit"
                color="secondary"
                variant="outlined"
                disabled={formState.isSubmitting}
                className={classes.button}
            >
                Связаться с нами
            </Button>
        </form>
    );
};

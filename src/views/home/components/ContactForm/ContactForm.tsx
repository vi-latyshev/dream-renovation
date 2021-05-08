import { Button, makeStyles } from '@material-ui/core';

import { Input } from 'components/controls';

const FORM_INPUTS = [
    { name: 'name', label: 'Ваше имя', required: true },
    { name: 'phone', label: 'Телефон', required: true },
    { name: 'email', label: 'Почта' },
];

const useStyles = makeStyles(() => ({
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 100,
    },
    input: {
        marginRight: 100,
        width: 300,
        '&:last-child': {
            marginRight: 0,
        },
    },
    button: {
        marginTop: 100,
    },
}));

export const ContactForm = () => {
    const classes = useStyles();

    return (
        <form className={classes.contactForm}>
            <div className={classes.inputContainer}>
                {FORM_INPUTS.map(({ name, label, required }) => (
                    <Input
                        key={name}
                        name={name}
                        label={label}
                        required={required}
                        className={classes.input}
                    />
                ))}
            </div>
            <Button
                type="submit"
                color="secondary"
                variant="outlined"
                className={classes.button}
            >
                Связаться с нами
            </Button>
        </form>
    );
};

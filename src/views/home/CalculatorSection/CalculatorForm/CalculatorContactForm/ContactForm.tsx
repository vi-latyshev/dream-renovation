import { useCallback } from 'react';
import { Button, makeStyles } from '@material-ui/core';

import { FormNames } from 'lib/api/routes/forms/constants';
import { calculatorContactSchema } from 'lib/api/routes/forms/schemas';
import { Input } from 'components/controls';
import { useHandleSendForm, useFormBase } from 'components/controls/hooks';
import {
    useModal,
    ModalFormRespError,
    ModalFormRespSuccess,
} from 'components/Modal';

import type { Infer } from 'lib/superstruct/base';
import type { calculatorDataSchema } from 'lib/api/routes/forms/schemas';

type CalculatorDataType = Infer<typeof calculatorDataSchema>;
type CalculatorContactType = Infer<typeof calculatorContactSchema>;

export interface ContactFormProps {
    calculatorData: CalculatorDataType;
}

const useStyles = makeStyles(({ spacing }) => ({
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        margin: spacing(6, 0),
        '& > div:not(:last-child)': {
            marginRight: spacing(18),
        },
    },
}));

export const ContactForm = ({ calculatorData }: ContactFormProps) => {
    const classes = useStyles();
    const { showModal } = useModal();

    const {
        control, handleSubmit, formState, setError,
    } = useFormBase({
        schema: calculatorContactSchema,
    });

    const handleSendForm = useHandleSendForm<CalculatorContactType, CalculatorDataType>({
        formName: FormNames.CALCULATOR_FORM,
        setError,
    });

    const handlePrepeareSendForm = useCallback(handleSendForm({
        onSuccessSubmit: async () => {
            showModal(ModalFormRespSuccess);
        },
        onErrorSubmit: async () => {
            showModal(ModalFormRespError);
        },
    }), []);

    const handleContactFullForm = useCallback(handleSubmit(async (formData) => {
        await handlePrepeareSendForm({ ...formData, ...calculatorData });
    }), [calculatorData]);

    return (
        <form onSubmit={handleContactFullForm} className={classes.contactForm}>
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
            </div>
            <Button
                fullWidth={false}
                type="submit"
                variant="outlined"
                disabled={formState.isSubmitting}
            >
                Отправить
            </Button>
        </form>
    );
};

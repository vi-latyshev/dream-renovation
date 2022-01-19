import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { hookFormSchemaResolver, transformErrorsToClient } from 'lib/superstruct';

import type {
    Path,
    FieldValues,
    UseFormReturn,
    DefaultValues,
} from 'react-hook-form';
import type { Infer, Struct, FieldErrors } from 'lib/superstruct';
import type { APIErrorJSON } from 'lib/api/error';
import type { FormNames } from 'lib/api/routes/forms';

type HandleSubmitForm = (
    handlers: {
        onSuccessSubmit?: () => Promise<void>,
        onErrorSubmit?: () => Promise<void>,
    },
) => (e?: React.BaseSyntheticEvent) => Promise<void>;

interface UseReactFormProps<T, S> {
    formName: FormNames,
    schema: Struct<T, S>,
}

interface UseReactFormReturn<T extends FieldValues> extends Omit<UseFormReturn<T>, 'handleSubmit'> {
    handleSubmitForm: HandleSubmitForm;
}

const FORM_ENDPOINT_API = 'api/forms';

export const useReactForm = <T, S, I = Infer<Struct<T, S>>>({
    formName,
    schema,
}: UseReactFormProps<T, S>): UseReactFormReturn<I> => {
    const {
        reset,
        setError,
        formState,
        getValues,
        handleSubmit,
        ...rest
    } = useForm<I>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: hookFormSchemaResolver(schema),
    });

    // reset all fields after success submit
    // @TODO mb find another way to reset?
    useEffect(() => {
        if (!formState.isSubmitSuccessful) {
            return;
        }
        const values = getValues();
        const defaultValues = Object.keys(values)
            .reduce((acc, key) => ({ ...acc, [key]: '' }), {});

        reset(defaultValues as DefaultValues<I>);
    }, [formState, getValues, reset]);

    const handleSubmitForm: UseReactFormReturn<I>['handleSubmitForm'] = ({
        onSuccessSubmit, onErrorSubmit,
    }) => (e) => handleSubmit(async (formData) => {
        try {
            await axios.post(FORM_ENDPOINT_API, formData, {
                params: { form: formName },
            });
            await onSuccessSubmit?.();
        } catch (error) {
            try {
                if (!axios.isAxiosError(error)) {
                    throw Error(`Unexpected error: ${error}`);
                }
                const { errors } = error.response?.data as APIErrorJSON<FieldErrors>;

                const parsedErrors = transformErrorsToClient(errors!);

                parsedErrors.forEach(({ field, type, message }) => {
                    setError(field as Path<I>, {
                        type,
                        message,
                    });
                });
            } catch (err) {
                await onErrorSubmit?.();
                throw new Error(`Error in submit form: ${err}`);
            }
            throw new Error(`Error in submit form: ${error}`);
        }
    })(e).catch((error) => {
        if (!process.env.IS_PRODUCTION) {
            console.error(error); // eslint-disable-line no-console
        }
    });

    return {
        reset,
        setError,
        formState,
        getValues,
        handleSubmitForm,
        ...rest,
    };
};

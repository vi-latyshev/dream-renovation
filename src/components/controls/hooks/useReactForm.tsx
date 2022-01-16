import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { hookFormResolver } from 'lib/superstruct';

import type { FieldValues, UseFormReturn, DefaultValues } from 'react-hook-form';
import type { Infer, Struct } from 'lib/superstruct';

type SubmitHandlersType<R extends unknown = void, E extends unknown = void> = {
    onSuccessSubmit?: (response: R extends void ? undefined : R) => Promise<void>,
    onErrorSubmit?: (response: E) => Promise<void>,
};

type HandleSubmitForm = <R extends unknown = void, E extends unknown = void>(
    handlers: SubmitHandlersType<R, E>
) => (e?: React.BaseSyntheticEvent) => Promise<void>;

interface UseReactFormProps<T, S> {
    apiEndpoint: string,
    formSchema: Struct<T, S>,
}

interface UseReactFormReturn<T extends FieldValues> extends Omit<UseFormReturn<T>, 'handleSubmit'> {
    handleSubmitForm: HandleSubmitForm;
}

export const useReactForm = <T, S, I = Infer<Struct<T, S>>>({
    apiEndpoint,
    formSchema,
}: UseReactFormProps<T, S>): UseReactFormReturn<I> => {
    const {
        reset,
        formState,
        getValues,
        handleSubmit,
        ...rest
    } = useForm<I>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: hookFormResolver(formSchema, { coerce: true }),
    });

    // reset all fields after success submit
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
            const resp = await axios.post(apiEndpoint, formData);

            await onSuccessSubmit?.(resp?.data);
        } catch (error) {
            try {
                if (!axios.isAxiosError(error)) {
                    throw Error(`Unexpected error: ${error}`);
                }
                await onErrorSubmit?.(error.response?.data);
            } catch (err) {
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
        formState,
        getValues,
        handleSubmitForm,
        ...rest,
    };
};

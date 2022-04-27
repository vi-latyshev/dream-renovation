import { useCallback } from 'react';

import { useFormBase } from './useFormBase';
import { useHandleSendForm } from './useHandleSendForm';

import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { UseFormBaseProps } from './useFormBase';
import type { UseHandleSendFormProps, UseHandleSendFormReturn } from './useHandleSendForm';

interface UseReactFormProps<T, S> extends UseFormBaseProps<T, S>, UseHandleSendFormProps { }

interface UseReactFormReturn<T extends FieldValues> extends Omit<UseFormReturn<T>, 'handleSubmit'> {
    handleSubmit: (...args: Parameters<UseHandleSendFormReturn<T>>) => ReturnType<UseFormReturn<T>['handleSubmit']>;
}

export const useReactForm = <T, S>({
    formName,
    schema,
}: UseReactFormProps<T, S>): UseReactFormReturn<T> => {
    const { handleSubmit, setError, ...formBase } = useFormBase<T, S>({ schema });

    const handleSendForm = useHandleSendForm<T>({ formName, setError });

    const handleSubmitForm = useCallback<UseReactFormReturn<T>['handleSubmit']>((submitFormOptions) => {
        const sendForm = handleSendForm(submitFormOptions);

        return handleSubmit(async (formData) => {
            await sendForm(formData);
        });
    }, []);

    return {
        ...formBase,
        setError,
        handleSubmit: handleSubmitForm,
    };
};

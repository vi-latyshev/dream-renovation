import { useFormBase } from './useFormBase';
import { useHandleSubmitForm } from './useHandleSubmitForm';

import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { UseFormBaseProps } from './useFormBase';
import type { UseHandleSubmitFormProps, UseHandleSubmitFormReturn } from './useHandleSubmitForm';

interface UseReactFormProps<T, S> extends UseFormBaseProps<T, S>, UseHandleSubmitFormProps { }

interface UseReactFormReturn<T extends FieldValues> extends Omit<UseFormReturn<T>, 'handleSubmit'>,
    UseHandleSubmitFormReturn<T> { }

export const useReactForm = <T, S>({
    formName,
    schema,
}: UseReactFormProps<T, S>): UseReactFormReturn<T> => {
    const { handleSubmit, ...formBase } = useFormBase<T, S>({ schema });

    const {
        handleSubmit: handleSubmitForm,
    } = useHandleSubmitForm<T>({ formName }, { handleSubmit, ...formBase });

    return {
        ...formBase,
        handleSubmit: handleSubmitForm,
    };
};

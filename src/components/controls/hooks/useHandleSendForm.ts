import { useCallback } from 'react';
import axios from 'axios';

import { transformErrorsToClient } from 'lib/superstruct/resolver/hook-form-resolver';

import type { Path, FieldValues, UnpackNestedValue } from 'react-hook-form';
import type { APIErrorJSON } from 'lib/api/error';
import type { FieldErrors } from 'lib/superstruct/resolver/hook-form-resolver';
import type { FormNames } from 'lib/api/routes/forms/constants';
import type { UseFormBaseReturn } from './useFormBase';

export interface UseHandleSendFormProps {
    formName?: FormNames;
}

interface UseHandleSendFormFullProps<T extends FieldValues> extends UseHandleSendFormProps,
    Pick<UseFormBaseReturn<T>, 'setError'> { }

interface SendFormHandlers<T extends FieldValues> {
    onSuccessSubmit?: (formData: UnpackNestedValue<T>) => Promise<void>,
    onErrorSubmit?: (formData: UnpackNestedValue<T>) => Promise<void>,
}

export type UseHandleSendFormReturn<T extends FieldValues> = (
    submitFormOptions: SendFormHandlers<T>
) => (formData: UnpackNestedValue<T>) => Promise<void>;

const FORM_ENDPOINT_API = 'api/forms';

export const useHandleSendForm = <T, P = {}>({
    formName,
    setError,
}: UseHandleSendFormFullProps<T>): UseHandleSendFormReturn<T & P> => {
    const handleSendForm = useCallback<UseHandleSendFormReturn<T & P>>(({
        onSuccessSubmit,
        onErrorSubmit,
    }) => (async (formData) => {
        try {
            await axios.post(FORM_ENDPOINT_API, formData, {
                params: { form: formName },
            });
        } catch (error) {
            try {
                if (!axios.isAxiosError(error)) {
                    throw Error(`Unexpected error: ${error}`);
                }
                const { errors, message: respMsg } = error.response?.data as APIErrorJSON<FieldErrors>;

                if (!errors) {
                    throw Error(respMsg);
                }
                const parsedErrors = transformErrorsToClient(errors);

                parsedErrors.forEach(({ field, type, message }) => {
                    setError(field as Path<T>, {
                        type,
                        message,
                    });
                });
            } catch (err) {
                throw new Error(`Handling response error: ${err}`);
            } finally {
                await onErrorSubmit?.(formData);
            }
            throw new Error(`Submit form: ${error}`);
        }
        await onSuccessSubmit?.(formData);
    }), [formName]);

    return handleSendForm;
};

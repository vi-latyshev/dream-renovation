import { useCallback } from 'react';
import axios from 'axios';

import { transformErrorsToClient } from 'lib/superstruct/resolver/hook-form-resolver';

import type { Path, FieldValues, UnpackNestedValue } from 'react-hook-form';
import type { APIErrorJSON } from 'lib/api/error';
import type { FieldErrors } from 'lib/superstruct/resolver/hook-form-resolver';
import type { FormNames } from 'lib/api/routes/forms/constants';
import type { UseFormBaseReturn } from './useFormBase';

export interface UseHandleSubmitFormProps {
    formName?: FormNames;
}

interface SubmitFormHandlers<T extends FieldValues> {
    onSuccessSubmit?: (formData: UnpackNestedValue<T>) => Promise<void>,
    onErrorSubmit?: () => Promise<void>,
}

export interface UseHandleSubmitFormReturn<T extends FieldValues> {
    handleSubmit: (submitFormOptions: SubmitFormHandlers<T>) => (e?: React.BaseSyntheticEvent) => Promise<void>;
}

const FORM_ENDPOINT_API = 'api/forms';

export const useHandleSubmitForm = <T>(
    formHandleProps: UseHandleSubmitFormProps,
    formBaseProps: UseFormBaseReturn<T>,
): UseHandleSubmitFormReturn<T> => {
    const { formName } = formHandleProps;
    const { handleSubmit: handleSubmitBase, setError } = formBaseProps;

    const handleSubmit = useCallback<UseHandleSubmitFormReturn<T>['handleSubmit']>(({
        onSuccessSubmit,
        onErrorSubmit,
    }) => (e) => handleSubmitBase(async (formData) => {
        try {
            await axios.post(FORM_ENDPOINT_API, formData, {
                params: { form: formName },
            });
            await onSuccessSubmit?.(formData);
        } catch (error) {
            try {
                if (!axios.isAxiosError(error)) {
                    throw Error(`Unexpected error: ${error}`);
                }
                const { errors } = error.response?.data as APIErrorJSON<FieldErrors>;

                const parsedErrors = transformErrorsToClient(errors!);

                parsedErrors.forEach(({ field, type, message }) => {
                    setError(field as Path<T>, {
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
            // @TODO logger
            console.error(error); // eslint-disable-line no-console
        }
    }), [formName, handleSubmitBase, setError]);

    return {
        handleSubmit,
    };
};

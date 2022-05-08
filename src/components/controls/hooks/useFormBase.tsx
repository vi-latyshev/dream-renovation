import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { hookFormSchemaResolver } from 'lib/superstruct/resolver/hook-form-resolver';

import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { Infer, Struct } from 'lib/superstruct/base';
import type { DataValues } from 'lib/superstruct/resolver/types';

export interface UseFormBaseProps<T, S> {
    schema: Struct<T, S>,
    defaultValues?: Partial<Infer<Struct<T, S>>>;
}

export interface UseFormBaseReturn<T extends FieldValues> extends UseFormReturn<T> { }

export const useFormBase = <T, S, I = Infer<Struct<T, S>>>({
    schema,
    defaultValues,
}: UseFormBaseProps<T, S>): UseFormBaseReturn<I> => {
    const {
        reset,
        formState,
        handleSubmit: handleSubmitBase,
        ...rest
    } = useForm<I>({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        resolver: hookFormSchemaResolver(schema),
        defaultValues: defaultValues as DataValues,
    });

    useEffect(() => {
        if (!formState.isSubmitSuccessful) {
            return;
        }
        reset();
    }, [formState, reset]);

    const handleSubmit = useCallback<UseFormBaseReturn<I>['handleSubmit']>((
        onValid,
        onInvalid,
    ) => (e) => (
        handleSubmitBase(onValid, onInvalid)(e).catch((error) => {
            if (!process.env.IS_PRODUCTION) {
                // @TODO logger
                console.error(error); // eslint-disable-line no-console
            }
        })
    ), []);

    return {
        reset,
        formState,
        handleSubmit,
        ...rest,
    };
};

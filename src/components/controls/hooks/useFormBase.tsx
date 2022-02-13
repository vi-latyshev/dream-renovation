import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { hookFormSchemaResolver } from 'lib/superstruct/resolver/hook-form-resolver';

import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { Infer, Struct } from 'lib/superstruct/base';

export interface UseFormBaseProps<T, S> {
    schema: Struct<T, S>,
}

export interface UseFormBaseReturn<T extends FieldValues> extends UseFormReturn<T> { }

export const useFormBase = <T, S, I = Infer<Struct<T, S>>>({
    schema,
}: UseFormBaseProps<T, S>): UseFormBaseReturn<I> => {
    const {
        reset,
        formState,
        ...rest
    } = useForm<I>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: hookFormSchemaResolver(schema),
    });

    useEffect(() => {
        if (!formState.isSubmitSuccessful) {
            return;
        }
        reset();
    }, [formState, reset]);

    return {
        reset,
        formState,
        ...rest,
    };
};

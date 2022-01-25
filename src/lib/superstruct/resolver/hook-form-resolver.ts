import { validate } from '../base';
import { parseErrorSchema } from '../parser';

import { humanErrorsMsg } from './constants';

import type { FieldErrors as ReactHookFieldErrors, UnpackNestedValue } from 'react-hook-form';
import type { FieldError, FieldErrors } from '../parser';
import type { StructDataValues, DataValues } from './types';

export type {
    FieldErrors,
};

export type ClientFieldError = Omit<FieldError, 'message'> & {
    message: string;
};

type HookFormResolver = (struct: StructDataValues) => (formValues: DataValues) => UnpackNestedValue<DataValues>;

export const transformErrorsToClient = (
    errors: FieldErrors,
): ClientFieldError[] => errors.map((error) => {
    const { message: errorMessage, validationValues, type } = error;

    const message = humanErrorsMsg[errorMessage]?.(validationValues, type) ?? errorMessage;

    const clientErrors: ClientFieldError = {
        ...error,
        message,
    };

    return clientErrors;
});

const parseErrorsToResolver = (errors: ClientFieldError[]): ReactHookFieldErrors => {
    const fieldErrors: ReactHookFieldErrors = {};

    errors.forEach((error) => {
        const { field, message, type } = error;

        fieldErrors[field] = {
            type,
            message,
        };
    });

    return fieldErrors;
};

/**
 * redefined of @hookform/resolvers/superstruct
 */
export const hookFormSchemaResolver: HookFormResolver = (struct) => (formValues) => {
    const [errors, validatedValues] = validate(formValues, struct, { coerce: true });

    if (errors) {
        return {
            values: {},
            errors: parseErrorsToResolver(transformErrorsToClient(parseErrorSchema(errors))),
        };
    }

    const values: { [field: string]: string; } = {};

    Object.keys(validatedValues).forEach((field) => {
        if (validatedValues[field] !== '') {
            values[field] = validatedValues[field];
        }
    });

    return {
        values,
        errors: {},
    };
};

import { toNestError, validateFieldsNatively } from '@hookform/resolvers';

import { validate } from '../base';

import { parseErrorSchema } from '../parser';
import { humanErrorsMsg } from './constants';

import type { FieldErrors } from 'react-hook-form';
import type { Resolver } from '@hookform/resolvers/superstruct';
import type { StructError } from '../base';

export const parseErrorsToClient = (errors: StructError): FieldErrors => {
    const parsedErrors = parseErrorSchema(errors);

    const fieldErrors: FieldErrors = {};

    parsedErrors.forEach((error) => {
        const {
            field,
            message: errorMessage,
            validationValues,
            type,
        } = error;

        const message = humanErrorsMsg[errorMessage]?.(validationValues, type) ?? errorMessage;

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
export const hookFormResolver: Resolver = (struct, factoryOtions) => (formValues, _, options) => {
    const [errors, values] = validate(formValues, struct, factoryOtions);

    if (errors) {
        return {
            values: {},
            errors: toNestError(parseErrorsToClient(errors), options),
        };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    options.shouldUseNativeValidation && validateFieldsNatively({}, options);

    return {
        values,
        errors: {},
    };
};

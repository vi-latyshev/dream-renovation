import type { StructError, ValidationValues } from '../base';

export enum ErrorMessage {
    INVALID = 'invalid',
    REQUIRED = 'required',
    FORMAT = 'format',
    MIN = 'min',
    MAX = 'max',
    LENGTH = 'length',
}

export type FieldError = {
    type: string;
    field: string;
    message: ErrorMessage;
    validationValues?: ValidationValues;
};

export type FieldErrors = FieldError[];

/**
 * idk for why, but i wanted to
 */
const renameMessage = {
    nonempty: ErrorMessage.REQUIRED,
    never: ErrorMessage.INVALID,
    pattern: ErrorMessage.FORMAT,
    size: ErrorMessage.LENGTH,
};

/**
 * parse errors from schema,
 * uses for client and server side
 */
export const parseErrorSchema = (errors: StructError): FieldErrors => {
    const failures = errors.failures();

    const allFields: { [field: string]: boolean; } = {};
    const parsedErrors: FieldErrors = [];

    failures.forEach((error) => {
        const fieldName = error.path.join('.');

        if (allFields[fieldName] !== undefined) {
            return;
        }
        allFields[fieldName] = true;

        const { type, refinement, validationValues } = error;

        const message = (refinement as keyof typeof renameMessage ?? 'never') as keyof typeof renameMessage;

        const fieldError: FieldError = {
            type,
            field: fieldName,
            message: (renameMessage[message] ?? message) as ErrorMessage,
        };
        if (validationValues !== undefined) {
            fieldError.validationValues = validationValues;
        }
        parsedErrors.push(fieldError);
    });

    if (process.env.NODE_ENV !== 'production') {
        // @TODO logger
        console.warn('"parseErrorSchema": ', failures); // eslint-disable-line no-console
        console.warn('Parsed "parseErrorSchema":', parsedErrors); // eslint-disable-line no-console
    }

    return parsedErrors;
};

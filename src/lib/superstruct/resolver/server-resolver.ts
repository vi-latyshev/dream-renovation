import { APIError } from 'lib/api/error';

import { validate } from '../base';
import { parseErrorSchema } from '../parser';

import type { StructDataValues, DataValues } from './types';

export const serverSchemaResolver = (
    struct: StructDataValues,
    dataValues: DataValues,
): DataValues => {
    const [structErrors, validatedValues] = validate(dataValues, struct, { coerce: true });

    if (structErrors) {
        const errors = parseErrorSchema(structErrors);
        throw new APIError('One or more fields have an error', 400, errors);
    }

    const values: { [field: string]: string; } = {};

    Object.keys(validatedValues).forEach((field) => {
        if (validatedValues[field] !== '') {
            values[field] = validatedValues[field];
        }
    });

    return values;
};

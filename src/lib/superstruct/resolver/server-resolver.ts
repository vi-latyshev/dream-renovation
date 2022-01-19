import { APIError } from 'lib/api/error';

import { validate } from '../base';
import { parseErrorSchema } from '../parser';

import type { UnpackNestedValue } from 'react-hook-form';
import type { StructDataValues, DataValues } from './types';

export const serverSchemaResolver = (
    struct: StructDataValues,
    values: DataValues,
): UnpackNestedValue<DataValues> => {
    const [structErrors, validatedValues] = validate(values, struct, { coerce: true });

    if (structErrors) {
        const errors = parseErrorSchema(structErrors);
        throw new APIError('One or more fields have an error', 400, errors);
    }

    return validatedValues;
};

import {
    size,
    enums,
    string,
    trimmed,
    pattern,
    nonempty,
    undefinedToEmptyStr,
} from '../base';

const baseStrStruct = nonempty(
    trimmed(
        undefinedToEmptyStr(
            string(),
        ),
    ),
);

export const NameScruct = size(
    baseStrStruct,
    1,
    50,
);

/**
 * https://github.com/ajv-validator/ajv-formats/blob/4dd65447575b35d0187c6b125383366969e6267e/src/formats.ts#L64
 */
const mailRegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

export const EmailStruct = pattern(
    size(
        baseStrStruct,
        6,
        30,
    ),
    mailRegExp,
    'yourmail@example.com',
);

const phoneRegExp = /^(\+)?([0-9-\s])+$/;

export const PhoneStruct = pattern(
    size(
        baseStrStruct,
        7,
        30,
    ),
    phoneRegExp,
    '+7 123 456 789',
);

export const MessageStruct = size(
    baseStrStruct,
    1,
    10000,
);

export const SelectValuesStruct = enums([
    'apartment',
    'house',
    'office',
    'shop',
    'cosmetic',
    'euro',
    'design',
]);
export type SelectValuesStructType = Infer<typeof SelectValuesStruct>;


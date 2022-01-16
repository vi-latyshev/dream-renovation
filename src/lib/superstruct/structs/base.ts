import {
    size,
    string,
    trimmed,
    pattern,
    nonempty,
} from '../base';

const trimmedStr = trimmed(string());

export const NameScruct = size(
    nonempty(
        trimmedStr,
    ),
    1,
    50,
);

/**
 * https://github.com/ajv-validator/ajv-formats/blob/4dd65447575b35d0187c6b125383366969e6267e/src/formats.ts#L64
 */
const mailRegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

export const EmailStruct = pattern(
    size(
        nonempty(
            trimmedStr,
        ),
        6,
        30,
    ),
    mailRegExp,
    'yourmail@example.com',
);

const phoneRegExp = /^(\+)?([0-9-\s])+$/;

export const PhoneStruct = pattern(
    size(
        nonempty(
            trimmedStr,
        ),
        7,
        30,
    ),
    phoneRegExp,
    '+7 123 456 789',
);

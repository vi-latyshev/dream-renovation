import {
    enums,
    object,
    assign,
    optional,
} from 'lib/superstruct/base';
import {
    NameScruct,
    EmailStruct,
    PhoneStruct,
    MessageStruct,
    SquareAreaStruct,
} from 'lib/superstruct/structs';

import type { SelectValuesStructType } from 'lib/superstruct/structs';

export const contactUsSchema = object({
    name: NameScruct,
    phone: PhoneStruct,
    email: optional(EmailStruct),
    message: optional(MessageStruct),
});

export const calculatorDataSchema = object({
    placeRepair: enums<SelectValuesStructType>([
        'apartment',
        'house',
        'office',
        'shop',
    ]),
    styleRepair: enums<SelectValuesStructType>([
        'cosmetic',
        'euro',
        'design',
    ]),
    squareArea: SquareAreaStruct,
});

export const calculatorContactSchema = object({
    name: NameScruct,
    phone: PhoneStruct,
});

export const calculatorFullSchema = assign(
    calculatorDataSchema,
    calculatorContactSchema,
);

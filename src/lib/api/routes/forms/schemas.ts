import {
    enums,
    object,
    optional,
} from 'lib/superstruct/base';
import {
    NameScruct,
    EmailStruct,
    PhoneStruct,
    MessageStruct,
} from 'lib/superstruct/structs';

import type { SelectValuesStructType } from 'lib/superstruct/structs';

export const contactUsSchema = object({
    name: NameScruct,
    phone: PhoneStruct,
    email: optional(EmailStruct),
    message: optional(MessageStruct),
});

export const calculatorSchema = object({
    // name: NameScruct,
    // phone: PhoneStruct,
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
});

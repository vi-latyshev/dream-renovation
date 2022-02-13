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

import type { Infer } from 'lib/superstruct/base';
import type { SelectValues } from 'lib/superstruct/structs';

export const contactUsSchema = object({
    name: NameScruct,
    phone: PhoneStruct,
    email: optional(EmailStruct),
    message: optional(MessageStruct),
});

export const calculatorSchema = object({
    // name: NameScruct,
    // phone: PhoneStruct,
    whereRepair: enums<Infer<typeof SelectValues>>(['apartment']),
});

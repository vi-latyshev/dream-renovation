import {
    object,
    optional,
} from 'lib/superstruct/base';
import {
    NameScruct,
    EmailStruct,
    PhoneStruct,
    MessageStruct,
} from 'lib/superstruct/structs';

export const contactUsSchema = object({
    name: NameScruct,
    phone: PhoneStruct,
    email: optional(EmailStruct),
    message: optional(MessageStruct),
});

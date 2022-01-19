import {
    object,
    optional,
    NameScruct,
    EmailStruct,
    PhoneStruct,
} from 'lib/superstruct';

export const contactUsSchema = object({
    name: NameScruct,
    phone: PhoneStruct,
    email: optional(EmailStruct),
});

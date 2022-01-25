import { contactUsSchema } from './schemas';

import type { StructDataValues } from 'lib/superstruct/resolver/types';

export enum FormNames {
    CONTACT_US_FORM = 'contact_us',
}

type FieldHumanNamesType = Record<string, string>;

export const fieldHumanNames: FieldHumanNamesType = {
    name: 'Ваше имя',
    phone: 'Ваш телефон',
    email: 'Ваша почта',
    message: 'Ваше сообщение',
};

type FormHandlerType = {
    [T in FormNames]: {
        subject: string;
        schema: StructDataValues;
    };
};

export const formsHandler: FormHandlerType = {
    [FormNames.CONTACT_US_FORM]: {
        subject: 'Связаться с нами',
        schema: contactUsSchema,
    },
};

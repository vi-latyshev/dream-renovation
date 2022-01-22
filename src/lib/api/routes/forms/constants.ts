import { contactUsSchema } from './schemas';

import type { StructDataValues } from 'lib/superstruct/resolver/types';

export enum FormNames {
    CONTACT_US_FORM = 'contact_us',
}

export const fieldHumanNames = {
    name: 'Ваше имя',
    phone: 'Телефон',
    email: 'Почта',
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

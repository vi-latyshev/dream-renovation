import {
    contactUsSchema,
    calculatorSchema,
} from './schemas';

import type { StructDataValues } from 'lib/superstruct/resolver/types';

export enum FormNames {
    CONTACT_US_FORM = 'contact_us',
    CALCULATOR_FORM = 'calculator',
}

export type FieldHumanType = Record<string, string | number>;

export const fieldHumanNames: FieldHumanType = {
    name: 'Ваше имя',
    phone: 'Ваш телефон',
    email: 'Ваша почта',
    message: 'Ваше сообщение',
    placeRepair: 'Где делаем ремонт',
    styleRepair: 'Вид ремонта',
};

export const fieldHumanValues: FieldHumanType = {
    apartment: 'Квартира',
    house: 'Дом',
    office: 'Офис',
    shop: 'Магазин',
    cosmetic: 'Косметический',
    euro: 'Евроремонт',
    design: 'Дизайнерский',
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
    [FormNames.CALCULATOR_FORM]: {
        subject: 'Калькулятор стоимости',
        schema: calculatorSchema,
    },
};

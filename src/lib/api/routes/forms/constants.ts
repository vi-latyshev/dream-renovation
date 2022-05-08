import { calculatePrice } from 'lib/calculator/calculator-price';

import {
    contactUsSchema,
    calculatorFullSchema,
} from './schemas';

import type { DataValues, StructDataValues } from 'lib/superstruct/resolver/types';

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
    squareArea: 'Площадь помещения',
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
        onPrepareSendValues?: (values: DataValues) => DataValues;
    };
};

export const formsHandler: FormHandlerType = {
    [FormNames.CONTACT_US_FORM]: {
        subject: 'Связаться с нами',
        schema: contactUsSchema,
    },
    [FormNames.CALCULATOR_FORM]: {
        subject: 'Калькулятор стоимости',
        schema: calculatorFullSchema,
        onPrepareSendValues: (values: DataValues) => ({
            ...values,
            Стоимость: `${calculatePrice(values)} руб`,
        }),
    },
};

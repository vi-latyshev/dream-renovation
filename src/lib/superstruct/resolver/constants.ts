import { ErrorMessage } from '../parser';

import type {
    MinErrorType,
    MaxErrorType,
    SizeErrorType,
    PatternErrorType,
    ValidationValues,
} from '../base';

type HumanErrorsMsg = {
    [field in ErrorMessage]: (validationValues: ValidationValues | undefined, type: string) => string;
};

const getTypeValue = (type: string) => {
    switch (type) {
        case 'string': return 'символов';
        case 'number': return 'чисел';
        default: return type;
    }
};

export const humanErrorsMsg: HumanErrorsMsg = {
    [ErrorMessage.INVALID]: () => (
        'Поле заполнено неверно'
    ),
    [ErrorMessage.REQUIRED]: () => (
        'Не заполнено поле'
    ),
    [ErrorMessage.MIN]: (values) => (
        `Минимальное кол-во символов - ${(values as MinErrorType).min}`
    ),
    [ErrorMessage.MAX]: (values) => (
        `Максимальное кол-во символов - ${(values as MaxErrorType).max}`
    ),
    [ErrorMessage.LENGTH]: (values, type) => (
        `Доступный диапазон ${getTypeValue(type)} - от ${(values as SizeErrorType).min} до ${(values as SizeErrorType).max}`
    ),
    [ErrorMessage.FORMAT]: (values) => (
        `Вы ввели недействительный формат.${(values as PatternErrorType).example ? `\nНапример: ${(values as PatternErrorType).example}` : ''}`
    ),
};

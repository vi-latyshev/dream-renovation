import {
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
    PlaceRepairValuesStruct,
    StyleRepairValuesStruct,
} from 'lib/superstruct/structs';

export const contactUsSchema = object({
    name: NameScruct,
    phone: PhoneStruct,
    email: optional(EmailStruct),
    message: optional(MessageStruct),
});

export const calculatorDataSchema = object({
    placeRepair: PlaceRepairValuesStruct,
    styleRepair: StyleRepairValuesStruct,
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

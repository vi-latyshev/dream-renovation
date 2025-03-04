import { numberSplitTo3 } from 'utils/numberSplitTo3';

import type { Infer } from 'lib/superstruct/base';
import type { calculatorDataSchema } from 'lib/api/routes/forms/schemas';

type CalculatorDataType = Infer<typeof calculatorDataSchema>;

type PriceDataType = {
    [field in CalculatorDataType['styleRepair']]: number;
};

export const defaultCalculateData: CalculatorDataType = {
    placeRepair: 'apartment',
    styleRepair: 'cosmetic',
    squareArea: 40,
};

const priceData: PriceDataType = {
    cosmetic: 4250,
    euro: 7000,
    design: 11000,
};

export const calculatePrice = (calculatorData: CalculatorDataType): string => {
    const { styleRepair, squareArea } = { ...defaultCalculateData, ...calculatorData };

    const styleValue = priceData[styleRepair];
    const value = styleValue * squareArea;

    return numberSplitTo3(value);
};

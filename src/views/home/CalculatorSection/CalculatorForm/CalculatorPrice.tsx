import { Typography } from '@material-ui/core';
import { useWatch } from 'react-hook-form';

import { calculatePrice } from 'lib/calculator/calculator-price';

import type { Infer } from 'lib/superstruct/base';
import type { HookUseControllerProps } from 'components/controls';
import type { DataValues } from 'lib/superstruct/resolver/types';
import type { calculatorDataSchema } from 'lib/api/routes/forms/schemas';

type CalculatorDataType = Infer<typeof calculatorDataSchema>;

interface CalculatorPriceProps {
    control: HookUseControllerProps<CalculatorDataType>['control'];
}

export const CalculatorPrice = ({ control }: CalculatorPriceProps) => {
    const results = useWatch({ control });

    const totalSum = calculatePrice(results as DataValues);

    return (
        <Typography
            color="secondary"
            variant="h3"
            component="span"
        >
            {totalSum}
        </Typography>
    );
};

import { useCallback, useState } from 'react';
import { RadioGroup, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { useCalculatorData } from '../../../context/data';
import { useControlsData } from '../../../context/controls_data';

import type { RadioGroupProps } from '@material-ui/core';

import type { PartialCalculatorData } from '../../../context/data';

export type RadioDataNames = string;

export type RadioDataProps<K extends RadioDataNames> = {
    [P in K]: PartialCalculatorData
};

type ControlType<T extends RadioDataNames> = (controlName: T) => {
    value: T;
};

export interface RadioGroupBaseWrapperProps<T extends RadioDataNames>
    extends Omit<RadioGroupProps, 'onChange'> {
    name: string;
    defaultValue?: T;
    groupData: RadioDataProps<T>;
    children: (control: ControlType<T>) => React.ReactElement;
}

type CalculatorDataKeys = keyof PartialCalculatorData;

const useStyles = makeStyles({
    radioGroup: {
        flexDirection: 'row',
    },
});

export const RadioGroupBaseWrapper = <T extends RadioDataNames>({
    name,
    defaultValue,
    groupData,
    children,
    className,
    ...props
}: RadioGroupBaseWrapperProps<T>) => {
    const classes = useStyles();

    const { data, setData } = useCalculatorData();
    const { values, setValues } = useControlsData();

    const [prevData, setPrevData] = useState<PartialCalculatorData>({});

    // kostyl for types of childs @TODO somehow change to types
    const control: ControlType<T> = useCallback((controlName) => ({
        value: controlName,
    }), []);

    const handleChange = (_event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        const valueByControl = groupData[value as T];

        setValues(name, value);
        setPrevData(valueByControl);

        const newValues = { ...data };

        // subtract old choice
        Object.keys(prevData).forEach((key) => {
            newValues[key as CalculatorDataKeys] -= prevData[key as CalculatorDataKeys] ?? 0;
        });
        // add old choice
        Object.keys(valueByControl).forEach((key) => {
            newValues[key as CalculatorDataKeys] += valueByControl[key as CalculatorDataKeys] ?? 0;
        });

        setData(newValues);
    };

    return (
        <RadioGroup
            value={values[name] ?? defaultValue ?? ''}
            onChange={handleChange}
            className={clsx(classes.radioGroup, className)}
            {...props}
        >
            {children(control)}
        </RadioGroup>
    );
};

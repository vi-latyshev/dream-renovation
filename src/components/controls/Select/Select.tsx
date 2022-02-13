import { useMemo } from 'react';
import { MenuItem, Select as MuiSelect } from '@material-ui/core';
import { Controller } from 'react-hook-form';

import { fieldHumanValues } from 'lib/api/routes/forms/constants';

import type { FieldValues, UseControllerProps } from 'react-hook-form';
import type { SelectProps as MuiSelectProps } from '@material-ui/core';
import type { Infer } from 'lib/superstruct/base';
import type { SelectValues } from 'lib/superstruct/structs';

type HookUseControllerProps<T> = Omit<UseControllerProps<T>, 'rules'>;

type MaterialSelectProps = Omit<MuiSelectProps, 'name' | 'error' | 'label' | 'placeholder' | 'defaultValue' | 'required'>;

export interface SelectProps<T> extends HookUseControllerProps<T>, MaterialSelectProps {
    options: Infer<typeof SelectValues>[];
}

export const Select = <T extends FieldValues>(props: SelectProps<T>) => {
    const {
        name, disabled, options = [],
        control, shouldUnregister,
        defaultValue: defaultVal,
        ...rest
    } = props;

    const defaultValue = (defaultVal ?? options[0] ?? '') as SelectProps<T>['defaultValue'];

    /**
     * CAUTION: The MenuItem elements must be direct descendants when native is false.
     *
     * @see https://mui.com/api/select/#props children prop
     */
    const Items = useMemo(() => (
        options.map((value) => {
            const humanValue = fieldHumanValues[value] ?? value;

            return (
                <MenuItem key={value} value={value}>{humanValue}</MenuItem>
            );
        })
    ), [options]);

    return (

        <Controller
            name={name}
            control={control}
            shouldUnregister={shouldUnregister}
            defaultValue={defaultValue}
            render={({
                field,
                fieldState: { error },
                formState: { isSubmitting },
            }) => (
                <MuiSelect
                    fullWidth
                    id={name}
                    disabled={isSubmitting || disabled}
                    error={error !== undefined}
                    {...field}
                    {...rest}
                >
                    {Items}
                </MuiSelect>
            )}
        />
    );
};

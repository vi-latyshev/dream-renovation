import { useCallback } from 'react';
import { Slider as MuiSlider } from '@material-ui/core';
import { Controller } from 'react-hook-form';

import type { FieldValues } from 'react-hook-form';
import type { SliderProps as MuiSliderProps } from '@material-ui/core';
import type { HookUseControllerProps } from '../types';

type MaterialSliderProps = Omit<MuiSliderProps, 'name' | 'error' | 'defaultValue'>;

export interface SliderProps<T> extends HookUseControllerProps<T>, MaterialSliderProps { }

export const Slider = <T extends FieldValues>(props: SliderProps<T>) => {
    const {
        name, disabled,
        control, shouldUnregister,
        defaultValue = '' as SliderProps<T>['defaultValue'],
        ...rest
    } = props;

    return (
        <Controller
            name={name}
            control={control}
            shouldUnregister={shouldUnregister}
            defaultValue={defaultValue}
            render={({
                field: { value, onChange, ...restField },
                formState: { isSubmitting },
            }) => {
                const parsedValue = parseFloat(value);
                const sliderValue = Number.isNaN(parsedValue) ? defaultValue : parsedValue;

                const handleChange = useCallback<Required<MaterialSliderProps>['onChange']>((_, changeValue = defaultValue) => {
                    onChange(changeValue);
                }, [onChange]);

                return (
                    <MuiSlider
                        id={name}
                        value={sliderValue}
                        disabled={isSubmitting || disabled}
                        {...restField}
                        {...rest}
                        onChange={handleChange}
                    />
                );
            }}
        />
    );
};

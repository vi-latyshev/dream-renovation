import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

import { fieldHumanNames } from 'lib/api/routes/forms/constants';

import type { FieldValues } from 'react-hook-form';
import type { TextFieldProps } from '@material-ui/core';
import type { HookUseControllerProps } from '../types';

type MaterialTexFieldProps = Omit<TextFieldProps, 'name' | 'error' | 'label' | 'placeholder' | 'defaultValue'>;

export interface InputProps<T> extends HookUseControllerProps<T>, MaterialTexFieldProps { }

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
    const {
        name, required, disabled,
        control, shouldUnregister,
        defaultValue = '' as InputProps<T>['defaultValue'],
        ...rest
    } = props;

    const label = fieldHumanNames[name] ?? name;

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
            }) => {
                const helperText = error?.message
                    ?.split('\n')
                    .map((str) => <span key={str}>{str}</span>);

                return (
                    <TextField
                        fullWidth
                        id={name}
                        type="text"
                        label={label}
                        placeholder={`${label}${(required ? ' *' : '')}`}
                        disabled={isSubmitting || disabled}
                        error={error !== undefined}
                        helperText={helperText}
                        {...field}
                        {...rest}
                    />
                );
            }}
        />
    );
};

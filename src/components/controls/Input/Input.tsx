import { TextField } from '@material-ui/core';

import type { TextFieldProps } from '@material-ui/core';

export interface InputProps extends Omit<TextFieldProps, 'error' | 'label'> {
    error?: string;
    label?: string;
}

export const Input = ({
    name,
    label,
    error,
    required,
    ...rest
}: InputProps) => (
    <TextField
        id={name}
        name={name}
        type="text"
        label={label}
        placeholder={`${label}${(required ? ' *' : '')}`}
        {...(error && {
            error: true,
            // helperText: error, // no need now
        })}
        {...rest}
    />
);

import { TextField } from '@mui/material';

import type { TextFieldProps } from '@mui/material';

export interface InputProps extends Omit<TextFieldProps, 'error' | 'label'> {
    error?: string;
    label?: string;
}

export const Input = ({
    name,
    label,
    error,
    ...rest
}: InputProps) => (
    <TextField
        id={name}
        name={name}
        type="text"
        label={label}
        {...(error && {
            error: true,
            helperText: error,
        })}
        {...rest}
    />
);

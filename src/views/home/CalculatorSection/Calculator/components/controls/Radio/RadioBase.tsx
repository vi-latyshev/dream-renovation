import {
    Paper,
    Radio as MuiRadio,
    FormControlLabel,
    makeStyles,
    useRadioGroup,
} from '@material-ui/core';
import clsx from 'clsx';

import type { FormControlLabelProps } from '@material-ui/core';

export interface RadioBaseProps extends Omit<FormControlLabelProps, 'control' | 'checked'> {
    radioClassName?: string;
}

const useStyles = makeStyles(({ palette }) => ({
    checked: {
        borderColor: palette.primary.main,
    },
}));

export const RadioBase = ({ radioClassName, ...props }: RadioBaseProps) => {
    const baseClasses = useStyles();
    const radioGroup = useRadioGroup();

    const isChecked = radioGroup?.value === props.value;

    return (
        <Paper variant="outlined" className={clsx({ [baseClasses.checked]: isChecked })}>
            <FormControlLabel
                checked={isChecked}
                control={(
                    <MuiRadio
                        color="primary"
                        className={radioClassName}
                    />
                )}
                {...props}
            />
        </Paper>
    );
};

import {
    alpha,
    Paper,
    Radio as MuiRadio,
    FormControlLabel,
    makeStyles,
    useRadioGroup,
} from '@material-ui/core';
import clsx from 'clsx';

import type { FormControlLabelProps } from '@material-ui/core';

interface RadioProps extends Omit<FormControlLabelProps, 'control' | 'checked'> { }

const useStyles = makeStyles(({ palette }) => ({
    checked: {
        borderColor: palette.primary.main,
    },
    controlLabel: {
        margin: 0,
        paddingRight: 9,
        minWidth: 292,
    },
    radio: {
        color: alpha(palette.primary.main, palette.action.disabledOpacity),
        padding: 10,
        margin: '5px 0',
        marginRight: 20,
    },
}));

export const Radio = ({ ...props }: RadioProps) => {
    const classes = useStyles();
    const radioGroup = useRadioGroup();

    const isChecked = radioGroup?.value === props.value;

    return (
        <Paper variant="outlined" className={clsx({ [classes.checked]: isChecked })}>
            <FormControlLabel
                checked={isChecked}
                control={(
                    <MuiRadio
                        color="primary"
                        className={classes.radio}
                    />
                )}
                className={classes.controlLabel}
                {...props}
            />
        </Paper>
    );
};

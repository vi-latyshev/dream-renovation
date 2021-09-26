import {
    alpha,
    Grid,
    Paper,
    Radio as MuiRadio,
    FormControlLabel,
    makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

import { useCheckedRadio } from '../../../hooks/useCheckedRadio';

import type { FormControlLabelProps } from '@material-ui/core';

interface RadioProps extends Omit<FormControlLabelProps, 'control'> { }

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

export const Radio = ({ checked, ...props }: RadioProps) => {
    const classes = useStyles();

    const [isChecked, handleChange] = useCheckedRadio();

    return (
        <Grid item>
            <Paper variant="outlined" className={clsx({ [classes.checked]: isChecked })}>
                <FormControlLabel
                    checked={checked}
                    onChange={handleChange}
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
        </Grid>
    );
};

import { alpha } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import { RadioBase } from './RadioBase';

import type { RadioBaseProps } from './RadioBase';

interface RadioProps extends RadioBaseProps { }

const useStyles = makeStyles(({ palette }) => ({
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

    return (
        <RadioBase
            className={classes.controlLabel}
            radioClassName={classes.radio}
            {...props}
        />
    );
};

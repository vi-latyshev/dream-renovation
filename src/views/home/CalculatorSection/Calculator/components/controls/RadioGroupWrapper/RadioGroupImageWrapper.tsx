import { RadioGroup, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import type { RadioGroupProps } from '@material-ui/core';

interface RadioGroupImageWrapperProps extends RadioGroupProps { }

const useStyles = makeStyles(({ spacing }) => ({
    radioGroup: {
        flexDirection: 'row',
        '& > *': {
            margin: spacing(0, 2),
            '&:first-child': {
                marginLeft: 0,
            },
        },
    },
}));

export const RadioGroupImageWrapper = ({ className, ...props }: RadioGroupImageWrapperProps) => {
    const classes = useStyles();

    return (
        <RadioGroup
            className={clsx(classes.radioGroup, className)}
            {...props}
        />
    );
};

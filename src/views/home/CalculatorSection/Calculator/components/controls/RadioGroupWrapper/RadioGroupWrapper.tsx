import { RadioGroup, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import type { RadioGroupProps } from '@material-ui/core';

export interface RadioGroupWrapperProps extends RadioGroupProps { }

const useStyles = makeStyles(({ spacing }) => ({
    radioGroup: {
        flexDirection: 'row',
        '& > *': {
            margin: spacing(2, 4),
            '&:nth-child(2n+1)': {
                marginLeft: 0,
            },
        },
    },
}));

export const RadioGroupWrapper = ({ className, ...props }: RadioGroupWrapperProps) => {
    const classes = useStyles();

    return (
        <RadioGroup
            className={clsx(classes.radioGroup, className)}
            {...props}
        />
    );
};

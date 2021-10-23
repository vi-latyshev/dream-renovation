import { makeStyles } from '@material-ui/core';

import { RadioGroupBaseWrapper } from './RadioGroupBaseWrapper';

import type { RadioDataNames, RadioGroupBaseWrapperProps } from './RadioGroupBaseWrapper';

interface RadioGroupImageWrapperProps<T extends RadioDataNames> extends RadioGroupBaseWrapperProps<T> { }

const useStyles = makeStyles(({ spacing }) => ({
    radioGroup: {
        '& > *': {
            margin: spacing(0, 2),
            '&:first-child': {
                marginLeft: 0,
            },
        },
    },
}));

export const RadioGroupImageWrapper = <T extends RadioDataNames>(props: RadioGroupImageWrapperProps<T>) => {
    const classes = useStyles();

    return (
        <RadioGroupBaseWrapper
            className={classes.radioGroup}
            {...props}
        />
    );
};

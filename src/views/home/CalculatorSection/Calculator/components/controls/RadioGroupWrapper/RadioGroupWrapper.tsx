import makeStyles from '@mui/styles/makeStyles';

import { RadioGroupBaseWrapper } from './RadioGroupBaseWrapper';

import type { RadioDataNames, RadioGroupBaseWrapperProps } from './RadioGroupBaseWrapper';

interface RadioGroupWrapperProps<T extends RadioDataNames> extends RadioGroupBaseWrapperProps<T> { }

const useStyles = makeStyles(({ spacing }) => ({
    radioGroup: {
        '& > *': {
            margin: spacing(2, 4),
            '&:nth-child(2n+1)': {
                marginLeft: 0,
            },
        },
    },
}));

export const RadioGroupWrapper = <T extends RadioDataNames>(props: RadioGroupWrapperProps<T>) => {
    const classes = useStyles();

    return (
        <RadioGroupBaseWrapper
            className={classes.radioGroup}
            {...props}
        />
    );
};

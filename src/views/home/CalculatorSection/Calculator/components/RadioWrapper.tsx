import { Grid, makeStyles } from '@material-ui/core';

import type { GridProps } from '@material-ui/core';

interface RadioWrapperProps extends GridProps { }

const useStyles = makeStyles(() => ({
    container: {
        '& > *': {
            marginBottom: 35,
            '&:nth-child(2n)': {
                marginLeft: 80,
            },
        },
    },
}));

export const RadioWrapper = (props: RadioWrapperProps) => {
    const classes = useStyles();

    return (
        <Grid
            item
            container
            className={classes.container}
            {...props}
        />
    );
};

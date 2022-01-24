import { Grid, makeStyles, Typography } from '@material-ui/core';

import { GearIcon } from '../icons/Gear';

interface StepItemProps {
    step: string;
    title: string;
    children: string;
}

const useStyles = makeStyles(({ palette, spacing }) => ({
    itemContainer: {
        width: 440,
        textAlign: 'center',
    },
    stepTitle: {
        position: 'relative',
        color: palette.text.disabled,
        marginBottom: spacing(3),
    },
    stepTitleIcon: {
        position: 'absolute',
        right: -10,
        bottom: -2,
    },
    title: {
        marginBottom: spacing(1),
    },
}));

export const StepItem = ({ step, title, children }: StepItemProps) => {
    const classes = useStyles();

    return (
        <Grid
            item
            container
            direction="column"
            alignItems="center"
            className={classes.itemContainer}
        >
            <Typography variant="h1" component="h2" className={classes.stepTitle}>
                {step}
                <GearIcon color="secondary" className={classes.stepTitleIcon} />
            </Typography>
            <Typography variant="h3" className={classes.title}>
                {title}
            </Typography>
            <Typography>
                {children}
            </Typography>
        </Grid>
    );
};

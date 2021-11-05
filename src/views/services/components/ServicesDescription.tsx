import { Grid, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

import type { GridProps } from '@material-ui/core';

interface ServicesDescriptionProps extends GridProps {
    title?: string;
    description: string[];
}

const useStyles = makeStyles(({ spacing }) => ({
    descrContainer: {
        flexDirection: 'column',
        margin: spacing(5, 0),
    },
    description: {
        margin: spacing(2, 0),
    },
}));

export const ServicesDescription = ({
    title,
    description,
    className,
    ...props
}: ServicesDescriptionProps) => {
    const classes = useStyles();

    return (
        <Grid
            item
            container
            className={clsx(classes.descrContainer, className)}
            {...props}
        >
            {title && (
                <Typography variant="h3" className={classes.description}>
                    {title}
                </Typography>
            )}
            {description.map((item) => (
                <Typography key={item} className={classes.description}>
                    {item}
                </Typography>
            ))}
        </Grid>
    );
};

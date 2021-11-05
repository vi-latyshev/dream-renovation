import { Grid, makeStyles, Typography } from '@material-ui/core';

import type { GridProps } from '@material-ui/core';

interface ServicesDescriptionProps extends GridProps {
    title?: string;
    description: string[];
}

const useStyles = makeStyles(({ spacing }) => ({
    description: {
        margin: spacing(3, 0),
    },
}));

export const ServicesDescription = ({
    title,
    description,
    ...props
}: ServicesDescriptionProps) => {
    const classes = useStyles();

    return (
        <Grid item {...props}>
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

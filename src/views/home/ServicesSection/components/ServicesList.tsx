import { Grid, makeStyles } from '@material-ui/core';
import { ServicesItem } from './ServicesItem';

import type { ServicesItemProps } from './ServicesItem';

export interface ServicesListProps {
    items: ServicesItemProps[];
}

const useStyles = makeStyles(() => ({
    list: {
        marginTop: 60,
        marginBottom: 60,
    },
}));

export const ServicesList = ({ items }: ServicesListProps) => {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={5}
            justifyContent="center"
            className={classes.list}
        >
            {items.map((item) => (
                <ServicesItem key={item.title} {...item} />
            ))}
        </Grid>
    );
};

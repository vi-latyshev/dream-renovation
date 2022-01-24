import { Grid, makeStyles } from '@material-ui/core';

import { ServicesCard } from './ServicesItem';

import type { ServicesCardProps } from './ServicesItem';

export interface ServicesCardListProps {
    items: ServicesCardProps[];
}

const useStyles = makeStyles(({ spacing }) => ({
    list: {
        marginTop: spacing(8),
        marginBottom: spacing(8),
    },
}));

export const ServicesCardList = ({ items }: ServicesCardListProps) => {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={4}
            justifyContent="center"
            className={classes.list}
        >
            {items.map((item) => (
                <ServicesCard key={item.title} {...item} />
            ))}
        </Grid>
    );
};

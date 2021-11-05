import { Container, Grid, makeStyles } from '@material-ui/core';

import { ServicesTypesTitle } from './ServicesTypesTitle';
import { ServicesDescription } from './ServicesDescription';

interface ServicesLayoutRowProps {
    images: React.ReactNode;
    description: string[];
}

const useStyles = makeStyles(({ spacing }) => ({
    container: {
        display: 'flex',
    },
    description: {
        paddingLeft: spacing(8),
    },
}));

export const ServicesLayoutRow = ({ images, description }: ServicesLayoutRowProps) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid
                item
                lg={5}
                container
                spacing={3}
                direction="column"
            >
                {images}
            </Grid>
            <Grid
                item
                lg={9}
                container
                direction="column"
            >
                <Grid item>
                    <ServicesTypesTitle />
                </Grid>
                <ServicesDescription
                    description={description}
                    className={classes.description}
                />
            </Grid>
        </Container>
    );
};

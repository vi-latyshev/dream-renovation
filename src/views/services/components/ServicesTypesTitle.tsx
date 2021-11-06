import { Container, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

interface ServicesTypesTitleProps {
    withCenter?: boolean;
}

const useStyles = makeStyles(({ palette, spacing, mixins }) => ({
    typesContainer: {
        backgroundColor: palette.backgroundSecondary.main,
        padding: spacing(3, 5),
    },
    titleContainer: {
        ...mixins.flexCenter,
    },
}));

export const ServicesTypesTitle = ({ withCenter }: ServicesTypesTitleProps) => {
    const classes = useStyles();

    return (
        <div className={classes.typesContainer}>
            <Container className={clsx({ [classes.titleContainer]: withCenter })}>
                <Typography variant="h3">
                    Основные виды работ
                </Typography>
            </Container>
        </div>
    );
};

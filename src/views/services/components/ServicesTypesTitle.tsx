import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing, mixins }) => ({
    typesTitleContainer: {
        ...mixins.flexCenter,
        backgroundColor: palette.backgroundSecondary.main,
        padding: spacing(3),
    },
}));

export const ServicesTypesTitle = () => {
    const classes = useStyles();

    return (
        <div className={classes.typesTitleContainer}>
            <Typography variant="h3">
                Основные виды работ
            </Typography>
        </div>
    );
};

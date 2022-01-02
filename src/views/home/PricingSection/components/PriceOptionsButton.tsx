import { ButtonBase, makeStyles, Typography } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';

interface PriceOptionsButtonProps {
    onClick: () => void;
}

const useStyles = makeStyles(({ spacing }) => ({
    container: {
        borderRadius: 5,
        padding: '0 10px',
    },
    icon: {
        marginLeft: spacing(1),
    },
}));

export const PriceOptionsButton = ({ onClick }: PriceOptionsButtonProps) => {
    const classes = useStyles();

    return (
        <ButtonBase
            type="button"
            className={classes.container}
            onClick={onClick}
        >
            <Typography variant="h4" color="primary">
                Дополнительно
            </Typography>
            <AddOutlined
                color="primary"
                fontSize="large"
                className={classes.icon}
            />
        </ButtonBase>
    );
};

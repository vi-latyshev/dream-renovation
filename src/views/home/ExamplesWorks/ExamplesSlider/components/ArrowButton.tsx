import { IconButton, makeStyles } from '@material-ui/core';

import type { IconButtonProps } from '@material-ui/core';
import type { SvgIconComponent } from '@material-ui/icons';

interface ArrowButtonProps extends IconButtonProps {
    Icon: SvgIconComponent;
}

const useStyles = makeStyles(({ spacing }) => ({
    arrowButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing(0, 3),
        borderRadius: 5,
    },
}));

export const ArrowButton = ({ Icon, ...props }: ArrowButtonProps) => {
    const classes = useStyles();

    return (
        <IconButton
            className={classes.arrowButton}
            {...props}
        >
            <Icon color="inherit" fontSize="large" />
        </IconButton>
    );
};

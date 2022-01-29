import {
    Fade,
    Paper,
    Modal as MaterialModal,
    useTheme,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

import type { ModalState } from './types';

interface ModalProps extends ModalState {
    onClose: () => void;
}

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: breakpoints.values.lg,
        padding: spacing(4, 6),
    },
    iconClose: {
        position: 'absolute',
        alignSelf: 'flex-end',
        cursor: 'pointer',
    },
}));

export const Modal = ({
    component: Component,
    props,
    isOpen,
    onClose,
}: ModalProps) => {
    const classes = useStyles();
    const theme = useTheme();

    const { title, ...restProps } = props ?? {};

    return (
        <MaterialModal
            closeAfterTransition
            open={isOpen}
            onClose={onClose}
            className={classes.modal}
        >
            <Fade
                in={isOpen}
                unmountOnExit
                timeout={{
                    enter: theme.transitions.duration.enteringScreen,
                    exit: theme.transitions.duration.leavingScreen,
                }}
            >
                <Paper className={classes.paper}>
                    <CloseRounded
                        fontSize="large"
                        color={props?.isError ? 'error' : 'primary'}
                        className={classes.iconClose}
                        onClick={onClose}
                    />
                    <Typography variant="h1" color={props?.isError ? 'error' : 'primary'}>
                        {title}
                    </Typography>
                    {Component && <Component {...restProps} />}
                </Paper>
            </Fade>
        </MaterialModal>
    );
};

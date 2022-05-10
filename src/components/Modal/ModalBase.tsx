import {
    Fade,
    Paper,
    Modal as MaterialModal,
    useTheme,
    makeStyles,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

import type { ModalState } from './types';

interface ModalProps extends ModalState {
    onClose: () => void;
}

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: breakpoints.values.lg,
        backgroundColor: palette.background.default,
        padding: spacing(10),
    },
    iconClose: {
        position: 'absolute',
        cursor: 'pointer',
        top: spacing(6),
        right: spacing(6),
    },
}));

export const Modal = ({
    component: Component,
    isOpen,
    onClose,
    modalProps,
}: ModalProps) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <MaterialModal
            open={isOpen}
            onClose={onClose}
            closeAfterTransition
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
                        onClick={onClose}
                        className={classes.iconClose}
                    />
                    {Component && <Component {...modalProps} />}
                </Paper>
            </Fade>
        </MaterialModal>
    );
};

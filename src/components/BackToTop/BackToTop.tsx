import { useCallback } from 'react';
import {
    Fab,
    Fade,
    makeStyles,
    useScrollTrigger,
} from '@material-ui/core';
import { ExpandLessRounded } from '@material-ui/icons';
import { animateScroll } from 'react-scroll';

import { theme } from 'styles';

const SCROLL_TO_TOP_OFFSET = 100;

const useStyles = makeStyles(({ palette, spacing }) => ({
    backToTop: {
        position: 'fixed',
        bottom: spacing(5),
        right: spacing(8),
    },
    icon: {
        fill: palette.common.white,
    },
}));

export const BackToTop = () => {
    const classes = useStyles();

    const isLowerOffset = useScrollTrigger({
        disableHysteresis: true,
        threshold: SCROLL_TO_TOP_OFFSET,
    });

    const handleClickToTop = useCallback(() => {
        animateScroll.scrollToTop({
            smooth: true,
            duration: theme.transitions.duration.enteringScreen,
        });
    }, []);

    return (
        <Fade in={isLowerOffset}>
            <div className={classes.backToTop}>
                <Fab
                    size="medium"
                    aria-label="scroll back to top"
                    onClick={handleClickToTop}
                >
                    <ExpandLessRounded fontSize="large" className={classes.icon} />
                </Fab>
            </div>
        </Fade>
    );
};

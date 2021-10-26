import { useCallback } from 'react';
import { Fab, Fade, useScrollTrigger } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ExpandLessRounded } from '@mui/icons-material';
import { animateScroll } from 'react-scroll';

import { theme } from 'styles';

const SCROLL_TO_TOP_OFFSET = 100;

const useStyles = makeStyles(({ palette, spacing }) => ({
    container: {
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
            <div className={classes.container}>
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

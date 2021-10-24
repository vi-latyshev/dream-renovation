import { makeStyles, Slider } from '@material-ui/core';

import type { SliderProps } from '@material-ui/core';

interface AnimatedSliderProps extends SliderProps { }

export const SLIDER_ANIMATION_TIME = 700;

const useStyles = makeStyles(() => ({
    root: {
        cursor: 'auto',
    },
    thumb: {
        '&:not($active)': {
            transition: `left ${SLIDER_ANIMATION_TIME}ms ease-in-out`,
        },
    },
    track: {
        transition: `width ${SLIDER_ANIMATION_TIME}ms ease-in-out`,
    },
    active: {},
}));

export const AnimatedSlider = (props: AnimatedSliderProps) => {
    const classes = useStyles();

    return (
        <Slider
            {...props}
            classes={classes}
        />
    );
};

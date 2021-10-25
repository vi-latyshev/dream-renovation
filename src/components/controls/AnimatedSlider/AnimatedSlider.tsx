import { makeStyles, Slider } from '@material-ui/core';

import type { SliderProps } from '@material-ui/core';

interface AnimatedSliderProps extends SliderProps { }

const useStyles = makeStyles(({ transitions }) => ({
    root: {
        cursor: 'auto',
    },
    thumb: {
        '&:not($active)': {
            transition: `left ${transitions.duration.enteringScreen}ms ease-in-out`,
        },
    },
    track: {
        transition: `width ${transitions.duration.enteringScreen}ms ease-in-out`,
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

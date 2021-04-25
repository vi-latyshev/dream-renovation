import { createMuiTheme } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import createSpacing from '@material-ui/core/styles/createSpacing';
import createTypography from '@material-ui/core/styles/createTypography';
import createMixins from '@material-ui/core/styles/createMixins';

const palette = createPalette({
    background: {
        default: '#FBFBFB',
    },
    primary: {
        main: '#2EC5CE',
    },
});

const breakpoints = createBreakpoints({
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1200,
        xl: 1480,
    },
});

const spacing = createSpacing(8);

const typography = createTypography(palette, {
    fontFamily: 'sans-serif',
});

const mixins = createMixins(breakpoints, spacing, {
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexCenterWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const theme = createMuiTheme({
    palette,
    breakpoints,
    spacing,
    typography,
    mixins,
    props: {},
    overrides: {},
});

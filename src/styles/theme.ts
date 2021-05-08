import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import createSpacing from '@material-ui/core/styles/createSpacing';
import createTypography from '@material-ui/core/styles/createTypography';
import createMixins from '@material-ui/core/styles/createMixins';

const palette = createPalette({
    type: 'light',
    primary: {
        main: '#2EC5CE',
    },
    secondary: {
        main: '#FE8A27',
    },
    text: {
        primary: '#333333',
        secondary: '#636363',
    },
    background: {
        default: '#FBFBFB',
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
    h1: {
        fontFamily: [
            '"Montserrat"',
            '"Verdana"',
            'sans-serif',
        ].join(','),
        fontSize: 46,
        fontWeight: 'bold',
    },
    body1: {
        fontSize: 16,
    },
    fontFamily: [
        '"Manrope"',
        'sans-serif',
    ].join(','),
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

let muiTheme = createMuiTheme({
    palette,
    breakpoints,
    spacing,
    typography,
    mixins,
    props: {
        MuiContainer: {
            maxWidth: 'xl',
        },
        MuiLink: {
            variant: 'body1',
            underline: 'none',
            color: 'textPrimary',
        },
    },
    overrides: {
        MuiLink: {
            root: {
                display: 'inline-block',
                transition: '.3s',
                '&:hover': {
                    color: palette.primary.main,
                },
            },
        },
    },
});

muiTheme = responsiveFontSizes(muiTheme);

export const theme = muiTheme;

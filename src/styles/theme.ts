import { createMuiTheme, fade, responsiveFontSizes } from '@material-ui/core';
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
        fontSize: '2.875rem', // 46px
        fontWeight: 'bold',
    },
    h2: {
        fontFamily: [
            '"Montserrat"',
            '"Verdana"',
            'sans-serif',
        ].join(','),
        fontSize: '2.5rem', // 40px
        fontWeight: 'bold',
    },
    body1: {
        fontSize: '1rem', // 16px
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
        MuiButton: {
            disableElevation: true,
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
        MuiButton: {
            root: {
                textTransform: 'unset',
                fontWeight: 'bold',
                fontSize: '1.3125rem', // 21px
            },
            contained: {
                padding: '7px 40px',
            },
            containedPrimary: {
                color: palette.common.white,
            },
            // not used
            // containedSecondary: {},
            outlined: {
                padding: '5px 40px',
            },
            outlinedPrimary: {
                borderWidth: 2,
                '&:hover': {
                    borderWidth: 2,
                },
                '&$disabled': {
                    borderWidth: 2,
                },
            },
            outlinedSecondary: {
                borderWidth: 2,
                color: palette.common.white,
                borderColor: palette.common.white,
                '&:hover': {
                    borderWidth: 2,
                    borderColor: fade(palette.common.white, 0.8),
                    backgroundColor: fade(palette.common.white, 0.05),
                },
                '&$disabled': {
                    borderWidth: 2,
                },
            },
        },
        MuiInput: {
            root: {
                fontWeight: 'bold',
                '&$underline': {
                    '&:not($disabled):before': {
                        transitionProperty: 'border-bottom-color, border-bottom-width',
                        borderBottomColor: palette.common.white,
                    },
                    '&:hover:not($disabled):before': {
                        borderBottomColor: fade(palette.common.white, 0.5),
                    },
                    '&:after': {
                        borderBottomColor: fade(palette.common.white, 0.7),
                    },
                },
            },
        },
        MuiInputLabel: {
            root: {
                color: palette.common.white,
                '&$focused:not($error)': {
                    color: palette.common.white,
                },
            },
        },
    },
});

muiTheme = responsiveFontSizes(muiTheme);

export const theme = muiTheme;

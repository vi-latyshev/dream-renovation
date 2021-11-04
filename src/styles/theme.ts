import { createTheme, alpha, responsiveFontSizes } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import createSpacing from '@material-ui/core/styles/createSpacing';
import createTypography from '@material-ui/core/styles/createTypography';
import createMixins from '@material-ui/core/styles/createMixins';

import type { TypographyStyleOptions } from '@material-ui/core/styles/createTypography';

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
        sm: 576,
        md: 894,
        lg: 1150,
        xl: 1480,
    },
});

const spacing = createSpacing(8);

const defaultTypographyHeadings: TypographyStyleOptions = {
    fontFamily: [
        '"Montserrat"',
        '"Verdana"',
        'sans-serif',
    ].join(','),
    fontWeight: 'bold',
};

const typography = createTypography(palette, {
    h1: {
        ...defaultTypographyHeadings,
        fontSize: '2.875rem', // 46px
    },
    h2: {
        ...defaultTypographyHeadings,
        fontSize: '2.5rem', // 40px
    },
    h3: {
        ...defaultTypographyHeadings,
        fontSize: '1.5rem', // 24px
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

let muiTheme = createTheme({
    palette,
    breakpoints,
    spacing,
    typography,
    mixins,
    transitions: {
        duration: {
            enteringScreen: 700,
            leavingScreen: 700 / 1.2,
        },
    },
    props: {
        MuiContainer: {
            maxWidth: 'lg',
        },
        MuiLink: {
            variant: 'body1',
            underline: 'none',
            color: 'textPrimary',
        },
        MuiButton: {
            color: 'primary',
            variant: 'contained',
            disableElevation: true,
        },
        MuiFab: {
            color: 'primary',
        },
        MuiSvgIcon: {
            color: 'primary',
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
                minWidth: 260,
                textTransform: 'unset',
                fontWeight: 'bold',
                fontSize: '1.25rem', // 20px
            },
            contained: {
                padding: '10px 40px',
            },
            containedPrimary: {
                color: palette.common.white,
            },
            // not used
            // containedSecondary: {},
            outlined: {
                borderWidth: 2,
                padding: '8px 40px',
                color: palette.text.secondary,
                '&:hover': {
                    borderWidth: 2,
                },
                '&$disabled': {
                    borderWidth: 2,
                },
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
                    borderColor: alpha(palette.common.white, 0.8),
                    backgroundColor: alpha(palette.common.white, 0.05),
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
                        borderBottomColor: alpha(palette.common.white, 0.5),
                    },
                    '&:after': {
                        borderBottomColor: alpha(palette.common.white, 0.7),
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
        MuiSlider: {
            track: {
                height: 5,
                borderRadius: 2,
            },
            rail: {
                height: 5,
                borderRadius: 2,
                opacity: 1,
                backgroundColor: palette.action.disabledBackground,
            },
            thumb: {
                width: 22,
                height: 22,
                marginTop: -8.5,
                marginLeft: -11,
                backgroundColor: palette.common.white,
                borderWidth: 2,
                borderStyle: 'solid',
                '&:focus, &:hover, &$active': {
                    boxShadow: 'inherit',
                },
            },
            valueLabel: {
                top: 35,
                left: 'calc(-50% + 2px)',
                fontSize: '1rem',
                '& *': {
                    background: 'transparent',
                    color: palette.text.primary,
                },
            },
        },
        MuiFab: {
            root: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiPaper: {
            rounded: {
                borderRadius: 8,
                transition: 'box-shadow .3s',
            },
            elevation1: {
                boxShadow: `0px 10px 20px ${alpha(palette.text.primary, 0.07)}`,
                '&:hover': {
                    boxShadow: `0px 10px 20px ${alpha(palette.text.primary, 0.2)}`,
                },
            },
        },
    },
});

muiTheme = responsiveFontSizes(muiTheme);

export const theme = muiTheme;

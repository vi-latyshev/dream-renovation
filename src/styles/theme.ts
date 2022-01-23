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
    backgroundSecondary: {
        main: '#F2F2F2',
    },
    error: {
        main: '#FF6464',
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
    h4: {
        ...defaultTypographyHeadings,
        fontSize: '1.25rem', // 20px
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
        MuiTextField: {
            variant: 'outlined',
        },
        MuiInputLabel: {
            shrink: true,
        },
        MuiOutlinedInput: {
            notched: false,
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    // @TODO remove and fix it
                    overflowX: 'hidden',
                },
            },
        },
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
                borderRadius: 5,
                padding: '10px 40px',
            },
            containedPrimary: {
                color: palette.common.white,
            },
            // not used
            // containedSecondary: {},
            outlined: {
                borderWidth: 3,
                borderRadius: 10,
                padding: '8px 40px',
                color: palette.text.secondary,
                '&:hover': {
                    borderWidth: 3,
                },
                '&$disabled': {
                    borderWidth: 3,
                },
            },
            outlinedPrimary: {
                borderWidth: 3,
                '&:hover': {
                    borderWidth: 3,
                },
                '&$disabled': {
                    borderWidth: 3,
                },
            },
            outlinedSecondary: {
                borderWidth: 3,
                color: palette.common.white,
                borderColor: palette.common.white,
                '&:hover': {
                    borderWidth: 3,
                    borderColor: alpha(palette.common.white, 0.8),
                    backgroundColor: alpha(palette.common.white, 0.05),
                },
                '&$disabled': {
                    borderWidth: 3,
                },
            },
        },
        MuiOutlinedInput: {
            root: {
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: palette.background.default,
                borderColor: palette.action.disabledBackground,
                transition: '0.15s',
                '& $notchedOutline': {
                    borderColor: palette.action.disabledBackground,
                },
                '&:hover $notchedOutline': {
                    borderColor: palette.action.disabledBackground,
                },
                '&$focused $notchedOutline': {
                    borderWidth: 1,
                    borderColor: palette.action.disabledBackground,
                },
                '&$disabled $notchedOutline': {
                    backgroundColor: palette.action.disabledBackground,
                },
                '&$error $notchedOutline': {
                    borderWidth: 2,
                },
            },
            input: {
                padding: 20,
            },
        },
        MuiInputLabel: {
            root: {
                fontSize: 0,
            },
        },
        MuiFormHelperText: {
            contained: {
                position: 'absolute',
                top: 70,
                width: '100%',
                '&$error': {
                    margin: 0,
                    backgroundColor: palette.error.main,
                    color: palette.common.white,
                    borderRadius: 10,
                    padding: '8px 16px',
                    fontSize: '0.875rem', // 14px
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        top: -16,
                        border: '8px solid transparent',
                        borderTopColor: 'transparent',
                        borderBottomColor: palette.error.main,
                    },
                },
                '& > span': {
                    display: 'block',
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
                borderRadius: 10,
                transition: 'box-shadow .3s',
                border: `1px solid ${palette.divider}`,
            },
            elevation1: {
                boxShadow: `0px 10px 20px ${alpha(palette.divider, 0.07)}`,
                '&:hover': {
                    boxShadow: `0px 10px 20px ${alpha(palette.divider, 0.2)}`,
                },
            },
        },
    },
});

muiTheme = responsiveFontSizes(muiTheme);

export const theme = muiTheme;

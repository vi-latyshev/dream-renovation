import {
    Fade,
    Button,
    Typography,
    makeStyles,
} from '@material-ui/core';

import { AnimatedSlider, SLIDER_ANIMATION_TIME } from 'components/controls';
import { ArrowLeftIcon } from 'icons/ArrowLeft';

import { useCalculatorSteps } from './context/steps';

import type { TransitionProps } from '@material-ui/core/transitions';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: 500,
    },
    description: {
        fontWeight: 600,
        color: palette.text.secondary,
        marginBottom: 50,
    },
    step: {
        height: '100%',
        overflow: 'hidden',
        width: breakpoints.values.md,
    },
    stepper: {
        display: 'flex',
        alignItems: 'center',
        width: breakpoints.values.md,
        '& > *:not(:last-child)': {
            marginRight: 40,
        },
    },
    backStepButton: {
        minWidth: 'auto',
        padding: 14,
    },
}));

const buttonFadeTimeout: TransitionProps['timeout'] = {
    exit: SLIDER_ANIMATION_TIME / 1.2,
};

const valueLabelSliderFormat = (value: number) => `${Math.round(value)}%`;

export const CalculatorStepContainer: React.FC = ({ children }) => {
    const classes = useStyles();
    const {
        step,
        stepCount,
        prevStep,
        nextStep,
    } = useCalculatorSteps();

    const isStepLessMax = step < stepCount;

    return (
        <div className={classes.wrapper}>
            {isStepLessMax && (
                <Typography className={classes.description}>
                    Рассчитайте стоимость вашего будущего ремонта
                    максимально точно при помощи нашего калькулятора
                </Typography>
            )}
            <div className={classes.step}>
                {children}
            </div>
            {isStepLessMax && (
                <div className={classes.stepper}>
                    <AnimatedSlider
                        min={0}
                        max={100}
                        value={(step / stepCount) * 100}
                        valueLabelDisplay="on"
                        valueLabelFormat={valueLabelSliderFormat}
                    />
                    <Fade in={step > 0} unmountOnExit timeout={buttonFadeTimeout}>
                        <Button
                            color="default"
                            variant="outlined"
                            onClick={prevStep}
                            className={classes.backStepButton}
                        >
                            <ArrowLeftIcon />
                        </Button>
                    </Fade>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={nextStep}
                    >
                        Далее
                    </Button>
                </div>
            )}
        </div>
    );
};

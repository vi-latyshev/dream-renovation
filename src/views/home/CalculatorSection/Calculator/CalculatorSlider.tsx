import { useCallback, useEffect, useState } from 'react';
import { Fade, makeStyles } from '@material-ui/core';

import { theme } from 'styles';

import { useCalculatorSteps } from './context/steps';
import { stepsComponents } from './steps';

import type { TransitionProps } from '@material-ui/core/transitions';

const useStyles = makeStyles(() => ({
    container: {
        height: '100%',
    },
}));

const fadeStepTimeout: TransitionProps['timeout'] = {
    enter: theme.transitions.duration.enteringScreen,
    exit: 0,
};

export const CalculatorSlider = () => {
    const classes = useStyles();
    const { step } = useCalculatorSteps();

    const [stepAfterSlide, setStepAfterSlide] = useState(step);
    const [slideIn, setSlideIn] = useState<boolean>(true);

    useEffect(() => {
        setSlideIn(false);
    }, [step]);

    const handleSlideExited = useCallback(() => {
        setSlideIn(true);
        setStepAfterSlide(step);
    }, [step]);

    const StepComponent = stepsComponents[stepAfterSlide];

    return (
        <Fade
            in={slideIn}
            timeout={fadeStepTimeout}
            onExited={handleSlideExited}
        >
            <div className={classes.container}>
                {step === stepAfterSlide && (
                    <StepComponent />
                )}
            </div>
        </Fade>
    );
};

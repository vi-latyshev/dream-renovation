import {
    useCallback, useEffect, useState, useRef,
} from 'react';

import { modulo } from 'utils/modulo';

import { useThrottleHandler } from './useTrottleHandler';

export interface SliderOptions {
    /**
     * Turn on/off auto change step.
     *
     * @default false
     */
    autoSlide?: boolean;
    /**
     * Delay before auto change in ms.
     *
     * @default 5000
     */
    autoSlideDelay?: number;
    /**
     * Trottle before change after change step in ms.
     *
     * @default 500
     */
    trottleDelay?: number;
}

export const useSlider = (stepCount: number, {
    autoSlide = false,
    autoSlideDelay = 5000,
    trottleDelay = 500,
}: SliderOptions = {}) => {
    const [, forceRender] = useState({});

    const [step, setThrottleStep] = useThrottleHandler(0, trottleDelay);
    const newStepRef = useRef<number>(step);
    const currentStepRef = useRef<number>(step);

    const handleForceUpdate = useCallback((forceUpdate = false) => {
        if (forceUpdate === false || newStepRef.current !== currentStepRef.current) {
            return;
        }
        forceRender({});
    }, []);

    const prevStep = useCallback((forceSet?: boolean) => {
        setThrottleStep((currentStep) => {
            const newStep = currentStep - 1;

            const newValue = modulo(newStep, stepCount);
            newStepRef.current = newValue;

            return newValue;
        }, forceSet);
        handleForceUpdate(forceSet);
    }, [stepCount]);

    const nextStep = useCallback((forceSet?: boolean) => {
        setThrottleStep((currentStep) => {
            const newStep = currentStep + 1;

            const newValue = modulo(newStep, stepCount);
            newStepRef.current = newValue;

            return newValue;
        }, forceSet);
        handleForceUpdate(forceSet);
    }, [stepCount]);

    const setStep = useCallback((value: number, forceSet?: boolean) => {
        setThrottleStep(() => {
            const newValue = Math.min(Math.max(value, 0), stepCount);
            newStepRef.current = newValue;

            return newValue;
        }, forceSet);
        handleForceUpdate(forceSet);
    }, [stepCount]);

    const resetStep = useCallback((forceSet?: boolean) => {
        setThrottleStep(() => {
            const newValue = 0;
            newStepRef.current = newValue;

            return newValue;
        }, forceSet);
        handleForceUpdate(forceSet);
    }, []);

    useEffect(() => {
        currentStepRef.current = step;

        if (autoSlide === false) {
            return undefined;
        }
        const handler = setTimeout(() => {
            nextStep(true);
        }, autoSlideDelay);

        return () => {
            clearTimeout(handler);
        };
    });

    return {
        step,
        prevStep,
        nextStep,
        setStep,
        resetStep,
    };
};

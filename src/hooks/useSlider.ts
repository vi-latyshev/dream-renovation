import { useCallback, useEffect } from 'react';

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
     * @default 1500
     */
    trottleDelay?: number;
}

export const useSlider = (stepCount: number, {
    autoSlide = false,
    autoSlideDelay = 10000,
    trottleDelay = 1500,
}: SliderOptions = {}) => {
    const [step, setThrottleStep] = useThrottleHandler(0, trottleDelay);

    const prevStep = useCallback((forceUpdate?: boolean) => {
        setThrottleStep((currentStep) => {
            const newStep = currentStep - 1;

            return modulo(newStep, stepCount);
        }, forceUpdate);
    }, [stepCount]);

    const nextStep = useCallback((forceUpdate?: boolean) => {
        setThrottleStep((currentStep) => {
            const newStep = currentStep + 1;

            return modulo(newStep, stepCount);
        }, forceUpdate);
    }, [stepCount]);

    const setStep = useCallback((value: number, forceUpdate?: boolean) => {
        setThrottleStep(Math.min(Math.max(value, 0), stepCount), forceUpdate);
    }, [stepCount]);

    const resetStep = useCallback((forceUpdate?: boolean) => {
        setThrottleStep(0, forceUpdate);
    }, []);

    useEffect(() => {
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

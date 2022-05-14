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
    trottleDelay = 2000,
}: SliderOptions = {}) => {
    const [step, setThrottleStep] = useThrottleHandler(0, trottleDelay);

    const prevStep = useCallback(() => {
        setThrottleStep((currentStep) => {
            const newStep = currentStep - 1;

            return modulo(newStep, stepCount);
        });
    }, [stepCount]);

    const nextStep = useCallback(() => {
        setThrottleStep((currentStep) => {
            const newStep = currentStep + 1;

            return modulo(newStep, stepCount);
        });
    }, [stepCount]);

    const setStep = useCallback((value: number, forceUpdate?: boolean) => {
        setThrottleStep(Math.min(Math.max(value, 0), stepCount), forceUpdate);
    }, [stepCount]);

    const resetStep = useCallback((forceUpdate?: boolean) => {
        setThrottleStep(0, forceUpdate);
    }, []);

    useEffect(() => {
        if (autoSlide === false || stepCount <= 1) {
            return undefined;
        }
        const handler = setTimeout(nextStep, autoSlideDelay);

        return () => {
            clearTimeout(handler);
        };
    }, [stepCount, step, autoSlideDelay]);

    return {
        step,
        prevStep,
        nextStep,
        setStep,
        resetStep,
    };
};

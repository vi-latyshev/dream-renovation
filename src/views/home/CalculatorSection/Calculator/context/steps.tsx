import {
    useState,
    useContext,
    useCallback,
    createContext,
} from 'react';

interface CalculatorStepsContextValue {
    step: number;
    stepCount: number;
    prevStep: () => void;
    nextStep: () => void;
    restartSteps: () => void;
}

interface CalculatorStepsProviderProps {
    stepCount: number;
    children: React.ReactNode;
}

const CalculatorStepsContext = createContext<CalculatorStepsContextValue>({
    step: 0,
    stepCount: 0,
    prevStep: () => { },
    nextStep: () => { },
    restartSteps: () => { },
});

export const useCalculatorSteps = () => useContext<CalculatorStepsContextValue>(CalculatorStepsContext);

export const CalculatorStepsProvider = ({ stepCount, children }: CalculatorStepsProviderProps) => {
    const [step, setStep] = useState<number>(0);

    const prevStep = useCallback(() => {
        setStep((currentStep) => {
            const newStep = currentStep - 1;

            return Math.max(newStep, 0);
        });
    }, []);

    const nextStep = useCallback(() => {
        setStep((currentStep) => {
            const newStep = currentStep + 1;

            return Math.min(newStep, stepCount);
        });
    }, [stepCount]);

    const restartSteps = useCallback(() => {
        setStep(0);
    }, []);

    return (
        <CalculatorStepsContext.Provider
            value={{
                step,
                stepCount,
                prevStep,
                nextStep,
                restartSteps,
            }}
        >
            {children}
        </CalculatorStepsContext.Provider>
    );
};

import {
    useState,
    useContext,
    useCallback,
    createContext,
} from 'react';

interface CalculatorStepsContextValue {
    step: number,
    countSteps: number,
    prevStep: () => void;
    nextStep: () => void;
    restartSteps: () => void;
}

interface CalculatorStepsProviderProps {
    countSteps: number;
    children: React.ReactNode;
}

const CalculatorStepsContext = createContext<CalculatorStepsContextValue>({
    step: 0,
    countSteps: 0,
    prevStep: () => { },
    nextStep: () => { },
    restartSteps: () => { },
});

export const useCalculatorSteps = () => useContext<CalculatorStepsContextValue>(CalculatorStepsContext);

export const CalculatorStepsProvider = ({ countSteps, children }: CalculatorStepsProviderProps) => {
    const [calculatorStep, setCalculatorStep] = useState<number>(0);

    const prevStep = useCallback(() => {
        setCalculatorStep((step) => {
            const newStep = step - 1;

            return Math.max(newStep, 0);
        });
    }, []);

    const nextStep = useCallback(() => {
        setCalculatorStep((step) => {
            const newStep = step + 1;

            return Math.min(newStep, countSteps);
        });
    }, [countSteps]);

    const restartSteps = useCallback(() => {
        setCalculatorStep(0);
    }, []);

    return (
        <CalculatorStepsContext.Provider
            value={{
                step: calculatorStep,
                countSteps,
                prevStep,
                nextStep,
                restartSteps,
            }}
        >
            {children}
        </CalculatorStepsContext.Provider>
    );
};

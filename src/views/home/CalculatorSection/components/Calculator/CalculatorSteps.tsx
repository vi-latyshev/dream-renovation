import { useCalculatorSteps } from './context/steps';
import { stepsComponents } from './steps';

export const CalculatorSteps = () => {
    const { step } = useCalculatorSteps();

    const StepComponent = stepsComponents[step];

    return <StepComponent />;
};

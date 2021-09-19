import { CalculatorDataProvider } from './context/data';
import { CalculatorStepsProvider } from './context/steps';
import { STEPS_COUNTS } from './steps';
import { CalculatorSlider } from './CalculatorSlider';
import { CalculatorStepContainer } from './CalculatorStepContainer';

export const Calculator = () => (
    <CalculatorStepsProvider stepCount={STEPS_COUNTS}>
        <CalculatorStepContainer>
            <CalculatorDataProvider>
                <CalculatorSlider />
            </CalculatorDataProvider>
        </CalculatorStepContainer>
    </CalculatorStepsProvider>
);

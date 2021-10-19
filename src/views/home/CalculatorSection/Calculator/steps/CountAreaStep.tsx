import { StepTitle } from '../components/StepTitle';
import { Radio, RadioGroupWrapper } from '../components/controls';

const getLabelWithMetrics = (string: string) => (
    <>{string} m<sup>2</sup></>
);

const CountAreaStep = () => (
    <>
        <StepTitle>Какая у вас общая площадь объекта?</StepTitle>
        <RadioGroupWrapper>
            <Radio
                value="45"
                label={getLabelWithMetrics('до 45')}
            />
            <Radio
                value="90-120"
                label={getLabelWithMetrics('90-120')}
            />
            <Radio
                value="45-70"
                label={getLabelWithMetrics('45-70')}
            />
            <Radio
                value="120-150"
                label={getLabelWithMetrics('120-150')}
            />
            <Radio
                value="70-90"
                label={getLabelWithMetrics('70-90')}
            />
            <Radio
                value="150+"
                label={getLabelWithMetrics('150+')}
            />
        </RadioGroupWrapper>
    </>
);

export default CountAreaStep;

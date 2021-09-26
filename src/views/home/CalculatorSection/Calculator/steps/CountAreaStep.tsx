import { StepTitle } from '../components/StepTitle';
import { RadioWrapper } from '../components/RadioWrapper';
import { Radio } from '../components/controls';

const getLabelWithMetrics = (string: string) => (
    <>{string} m<sup>2</sup></>
);

const CountAreaStep = () => (
    <>
        <StepTitle>Какая у вас общая площадь объекта?</StepTitle>
        <RadioWrapper>
            <Radio
                value="45"
                label={getLabelWithMetrics('до 45')}
            />
            <Radio
                value="90-120"
                label={getLabelWithMetrics('90-120')}
            />
        </RadioWrapper>
        <RadioWrapper>
            <Radio
                value="45-70"
                label={getLabelWithMetrics('45-70')}
            />
            <Radio
                value="120-150"
                label={getLabelWithMetrics('120-150')}
            />
        </RadioWrapper>
        <RadioWrapper>
            <Radio
                value="70-90"
                label={getLabelWithMetrics('70-90')}
            />
            <Radio
                value="150+"
                label={getLabelWithMetrics('150+')}
            />
        </RadioWrapper>
    </>
);

export default CountAreaStep;

import { StepTitle } from '../components/StepTitle';
import { Radio, RadioGroupWrapper } from '../components/controls';

import type { RadioDataProps } from '../components/controls';

type CountAreaControls = '45' | '45-70' | '70-90' | '90-120' | '120-150' | '150+';

const countAreaData: RadioDataProps<CountAreaControls> = {
    45: {},
    '45-70': {},
    '70-90': {},
    '90-120': {},
    '120-150': {},
    '150+': {},
};

const getLabelWithMetrics = (string: string) => (
    <>{string} м<sup>2</sup></>
);

const CountAreaStep = () => (
    <>
        <StepTitle>Какая у вас общая площадь объекта?</StepTitle>
        <RadioGroupWrapper<CountAreaControls> name="count_area" groupData={countAreaData}>
            {(control) => (
                <>
                    <Radio
                        {...control('45')}
                        label={getLabelWithMetrics('до 45')}
                    />
                    <Radio
                        {...control('90-120')}
                        label={getLabelWithMetrics('90-120')}
                    />
                    <Radio
                        {...control('45-70')}
                        label={getLabelWithMetrics('45-70')}
                    />
                    <Radio
                        {...control('120-150')}
                        label={getLabelWithMetrics('120-150')}
                    />
                    <Radio
                        {...control('70-90')}
                        label={getLabelWithMetrics('70-90')}
                    />
                    <Radio
                        {...control('150+')}
                        label={getLabelWithMetrics('150+')}
                    />
                </>
            )}
        </RadioGroupWrapper>
    </>
);

export default CountAreaStep;

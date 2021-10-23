import { StepTitle } from '../components/StepTitle';
import { Radio, RadioGroupWrapper } from '../components/controls';

import type { RadioDataProps } from '../components/controls';

type AlreadyDesignControls = 'yes' | 'no';

const alreadyDesignData: RadioDataProps<AlreadyDesignControls> = {
    yes: {},
    no: {},
};

const AlreadyDesignStep = () => (
    <>
        <StepTitle>Есть ли у вас уже разработанный дизайн-проект?</StepTitle>
        <RadioGroupWrapper<AlreadyDesignControls> name="already_design" groupData={alreadyDesignData}>
            {(controls) => (
                <>
                    <Radio
                        label="Да"
                        {...controls('yes')}
                    />
                    <Radio
                        label="Нет"
                        {...controls('no')}
                    />
                </>
            )}
        </RadioGroupWrapper>
    </>
);

export default AlreadyDesignStep;

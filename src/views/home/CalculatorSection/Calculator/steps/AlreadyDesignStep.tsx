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
            {(control) => (
                <>
                    <Radio
                        label="Да"
                        {...control('yes')}
                    />
                    <Radio
                        label="Нет"
                        {...control('no')}
                    />
                </>
            )}
        </RadioGroupWrapper>
    </>
);

export default AlreadyDesignStep;

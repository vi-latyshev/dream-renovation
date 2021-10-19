import { StepTitle } from '../components/StepTitle';
import { Radio, RadioGroupWrapper } from '../components/controls';

const AlreadyDesignStep = () => (
    <>
        <StepTitle>Есть ли у вас уже разработанный дизайн-проект?</StepTitle>
        <RadioGroupWrapper>
            <Radio
                value="yes"
                label="Да"
            />
            <Radio
                value="no"
                label="Нет"
            />
        </RadioGroupWrapper>
    </>
);

export default AlreadyDesignStep;

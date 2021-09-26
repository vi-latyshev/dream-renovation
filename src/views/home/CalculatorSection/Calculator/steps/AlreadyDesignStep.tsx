import { StepTitle } from '../components/StepTitle';
import { RadioWrapper } from '../components/RadioWrapper';
import { Radio } from '../components/controls';

const AlreadyDesignStep = () => (
    <>
        <StepTitle>Есть ли у вас уже разработанный дизайн-проект?</StepTitle>
        <RadioWrapper>
            <Radio
                value="yes"
                label="Да"
            />
            <Radio
                value="no"
                label="Нет"
            />
        </RadioWrapper>
    </>
);

export default AlreadyDesignStep;

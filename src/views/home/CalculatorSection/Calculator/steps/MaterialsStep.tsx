import { StepTitle } from '../components/StepTitle';
import { RadioWrapper } from '../components/RadioWrapper';
import { Radio } from '../components/controls';

const MaterialsStep = () => (
    <>
        <StepTitle>Какие чистовые материалы вы хотите использовать в будущем интерьере?</StepTitle>
        <RadioWrapper>
            <Radio
                value="domestic"
                label="Отечественные"
            />
            <Radio
                value="imported"
                label="Импортные"
            />
        </RadioWrapper>
        <RadioWrapper>
            <Radio
                value="exclusive"
                label="Эксклюзивные"
            />
            <Radio
                value="mixed"
                label="Смешанный вариант"
            />
        </RadioWrapper>
    </>
);

export default MaterialsStep;

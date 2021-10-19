import { StepTitle } from '../components/StepTitle';
import { Radio, RadioGroupWrapper } from '../components/controls';

const MaterialsStep = () => (
    <>
        <StepTitle>Какие чистовые материалы вы хотите использовать в будущем интерьере?</StepTitle>
        <RadioGroupWrapper>
            <Radio
                value="domestic"
                label="Отечественные"
            />
            <Radio
                value="imported"
                label="Импортные"
            />
            <Radio
                value="exclusive"
                label="Эксклюзивные"
            />
            <Radio
                value="mixed"
                label="Смешанный вариант"
            />
        </RadioGroupWrapper>
    </>
);

export default MaterialsStep;

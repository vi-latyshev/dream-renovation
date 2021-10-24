import { StepTitle } from '../components/StepTitle';
import { Radio, RadioGroupWrapper } from '../components/controls';

import type { RadioDataProps } from '../components/controls';

type MaterialControls = 'domestic' | 'imported' | 'exclusive' | 'mixed';

const materialData: RadioDataProps<MaterialControls> = {
    domestic: {},
    imported: {},
    exclusive: {},
    mixed: {},
};

const MaterialsStep = () => (
    <>
        <StepTitle>Какие чистовые материалы вы хотите использовать в будущем интерьере?</StepTitle>
        <RadioGroupWrapper<MaterialControls> name="material" groupData={materialData}>
            {(control) => (
                <>
                    <Radio
                        label="Отечественные"
                        {...control('domestic')}
                    />
                    <Radio
                        label="Импортные"
                        {...control('imported')}
                    />
                    <Radio
                        label="Эксклюзивные"
                        {...control('exclusive')}
                    />
                    <Radio
                        label="Смешанный вариант"
                        {...control('mixed')}
                    />
                </>
            )}
        </RadioGroupWrapper>
    </>
);

export default MaterialsStep;

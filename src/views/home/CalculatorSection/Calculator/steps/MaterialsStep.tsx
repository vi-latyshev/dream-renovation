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
            {(controls) => (
                <>
                    <Radio
                        label="Отечественные"
                        {...controls('domestic')}
                    />
                    <Radio
                        label="Импортные"
                        {...controls('imported')}
                    />
                    <Radio
                        label="Эксклюзивные"
                        {...controls('exclusive')}
                    />
                    <Radio
                        label="Смешанный вариант"
                        {...controls('mixed')}
                    />
                </>
            )}
        </RadioGroupWrapper>
    </>
);

export default MaterialsStep;

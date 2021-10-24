import { StepTitle } from '../components/StepTitle';
import { RadioImage, RadioGroupImageWrapper } from '../components/controls';

import classicStyleImg from '../images/classic-style.jpg';
import scandinavianStyleImg from '../images/scandinavian-style.jpg';
import minimalismStyleImg from '../images/minimalism-style.jpg';

import type { RadioDataProps } from '../components/controls';

type StyleControls = 'classic' | 'scandinavian' | 'minimalism';

const styleData: RadioDataProps<StyleControls> = {
    classic: {},
    scandinavian: {},
    minimalism: {},
};

const StyleStep = () => (
    <>
        <StepTitle>Какой вы предпочитаете стиль?</StepTitle>
        <RadioGroupImageWrapper<StyleControls> name="style" groupData={styleData}>
            {(control) => (
                <>
                    <RadioImage
                        label="Классический"
                        imgSrc={classicStyleImg}
                        imgAlt="Классический стиль"
                        {...control('classic')}
                    />
                    <RadioImage
                        label="Скандинавский"
                        imgSrc={scandinavianStyleImg}
                        imgAlt="Скандинавский стиль"
                        {...control('scandinavian')}
                    />
                    <RadioImage
                        label="Минимализм"
                        imgSrc={minimalismStyleImg}
                        imgAlt="Минимализм"
                        {...control('minimalism')}
                    />
                </>
            )}
        </RadioGroupImageWrapper>
    </>
);

export default StyleStep;

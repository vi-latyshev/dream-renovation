import { StepTitle } from '../components/StepTitle';
import { RadioImage, RadioGroupImageWrapper } from '../components/controls';

import classicStyleImg from '../images/classic-style.jpg';
import scandinavianStyleImg from '../images/scandinavian-style.jpg';
import minimalismStyleImg from '../images/minimalism-style.jpg';

const StyleStep = () => (
    <>
        <StepTitle>Какой вы предпочитаете стиль?</StepTitle>
        <RadioGroupImageWrapper>
            <RadioImage
                value="classic"
                label="Классический"
                imgSrc={classicStyleImg}
                imgAlt="Классический стиль"
            />
            <RadioImage
                value="scandinavian"
                label="Скандинавский"
                imgSrc={scandinavianStyleImg}
                imgAlt="Скандинавский стиль"
            />
            <RadioImage
                value="minimalism"
                label="Минимализм"
                imgSrc={minimalismStyleImg}
                imgAlt="Минимализм"
            />
        </RadioGroupImageWrapper>
    </>
);

export default StyleStep;

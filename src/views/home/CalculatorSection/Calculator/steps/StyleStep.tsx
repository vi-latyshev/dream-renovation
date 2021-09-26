import { StepTitle } from '../components/StepTitle';
import { RadioWrapper } from '../components/RadioWrapper';
import { RadioImage } from '../components/controls';

import classicStyleImg from '../images/classic-style.jpg';
import scandinavianStyleImg from '../images/scandinavian-style.jpg';
import minimalismStyleImg from '../images/minimalism-style.jpg';

const StyleStep = () => (
    <>
        <StepTitle>Какой вы предпочитаете стиль?</StepTitle>
        <RadioWrapper spacing={4}>
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
        </RadioWrapper>
    </>
);

export default StyleStep;

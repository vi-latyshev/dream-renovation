import { StepTitle } from '../components/StepTitle';
import { RadioWrapper } from '../components/RadioWrapper';
import { Radio } from '../components/controls';

const PlaceStep = () => (
    <>
        <StepTitle>Где необходимо сделать ремонт?</StepTitle>
        <RadioWrapper>
            <Radio
                value="apartment"
                label="Квартира"
            />
            <Radio
                value="office"
                label="Офис"
            />
        </RadioWrapper>
        <RadioWrapper>
            <Radio
                value="townhouse"
                label="Таунхаус"
            />
            <Radio
                value="сottage"
                label="Коттедж"
            />
        </RadioWrapper>
        <RadioWrapper>
            <Radio
                value="shop"
                label="Магазин"
            />
        </RadioWrapper>
    </>
);

export default PlaceStep;

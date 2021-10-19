import { StepTitle } from '../components/StepTitle';
import { Radio, RadioGroupWrapper } from '../components/controls';

const PlaceStep = () => (
    <>
        <StepTitle>Где необходимо сделать ремонт?</StepTitle>
        <RadioGroupWrapper>
            <Radio
                value="apartment"
                label="Квартира"
            />
            <Radio
                value="office"
                label="Офис"
            />
            <Radio
                value="townhouse"
                label="Таунхаус"
            />
            <Radio
                value="сottage"
                label="Коттедж"
            />
            <Radio
                value="shop"
                label="Магазин"
            />
        </RadioGroupWrapper>
    </>
);

export default PlaceStep;

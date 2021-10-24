import { StepTitle } from '../components/StepTitle';
import { Radio, RadioGroupWrapper } from '../components/controls';

import type { RadioDataProps } from '../components/controls';

type PlaceControls = 'apartment' | 'office' | 'townhouse' | 'cottage' | 'shop';

const placeData: RadioDataProps<PlaceControls> = {
    apartment: {},
    office: {},
    townhouse: {},
    cottage: {},
    shop: {},
};

const PlaceStep = () => (
    <>
        <StepTitle>Где необходимо сделать ремонт?</StepTitle>
        <RadioGroupWrapper<PlaceControls> name="place" groupData={placeData}>
            {(control) => (
                <>
                    <Radio
                        label="Квартира"
                        {...control('apartment')}
                    />
                    <Radio
                        label="Офис"
                        {...control('office')}
                    />
                    <Radio
                        label="Таунхаус"
                        {...control('townhouse')}
                    />
                    <Radio
                        label="Коттедж"
                        {...control('cottage')}
                    />
                    <Radio
                        label="Магазин"
                        {...control('shop')}
                    />
                </>
            )}
        </RadioGroupWrapper>
    </>
);

export default PlaceStep;

import Image from 'next/image';
import { Grid } from '@material-ui/core';

import { ServicesLayoutRow } from '../components';

import bathroomImg from './images/bathroom.jpg';

const description = [
    'Демонтаж стен, полов и потолков',
    'Выравнивание стен, стяжка',
    'Проведение сантехники и канализации',
    'Монтаж сантехнического короба',
    'Укладка плитки',
    'Установка двери',
    'Монтаж натяжного потолка',
    'Монтаж сантехники',
];

export const BathroomView = () => (
    <ServicesLayoutRow
        description={description}
        images={(
            <Grid item>
                <Image
                    src={bathroomImg}
                    alt="Полы"
                    width={480}
                    height={918}
                    objectFit="cover"
                />
            </Grid>
        )}
    />
);

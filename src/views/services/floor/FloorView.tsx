import Image from 'next/image';
import { Grid } from '@material-ui/core';

import { ServicesLayoutRow } from '../components';

import floorsImg from './images/floors.jpg';

const description = [
    'Демонтаж паркета и ламината',
    'Установка маячковых направляющих',
    'Прокладка демпферной ленты по периметру помещения',
    'Цементная и наливная стяжка',
    'Укладка ламината или паркетной доски',
];

export const FloorsView = () => (
    <ServicesLayoutRow
        description={description}
        images={(
            <Grid item>
                <Image
                    src={floorsImg}
                    alt="Полы"
                    width={384}
                    height={918}
                    objectFit="cover"
                />
            </Grid>
        )}
    />
);

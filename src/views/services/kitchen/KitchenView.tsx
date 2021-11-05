import Image from 'next/image';
import { Grid } from '@material-ui/core';

import { ServicesLayoutRow } from '../components';

import kitchenImg from './images/kitchen.jpg';
import corridorImg from './images/corridor.jpg';

const images = [
    {
        src: kitchenImg,
        alt: 'Кухня',
    },
    {
        src: corridorImg,
        alt: 'Коридор',
    },
];

const description = [
    'Демонтаж полов, стен и потолков',
    'Штробление стен под провода и прокладка кабеля в гофре',
    'Стяжка полов',
    'Выравнивание стен, потолков под ноль',
    'Подготовка чистовой шпаклевкой стен и потолков, для покраски и обоев',
    'Монтаж гипсокартонных потолков',
    'Монтаж натяжных потолков',
    'Поклейка обоев, покраска стен и потолков',
    'Укладка ламината и паркетной доски',
    'Укладки плитки',
    'Установка розеток',
    'Установка дверей',
    'Монтаж напольных плинтусов',
];

export const KitchenView = () => (
    <ServicesLayoutRow
        description={description}
        images={(
            images.map(({ src, alt }) => (
                <Grid item key={alt}>
                    <Image
                        src={src}
                        alt={alt}
                        width={384}
                        height={430}
                        objectFit="cover"
                    />
                </Grid>
            ))
        )}
    />
);

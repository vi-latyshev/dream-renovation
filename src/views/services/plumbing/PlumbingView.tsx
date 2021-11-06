import Image from 'next/image';

import { ServicesLayoutColumn } from '../components';

import plumbingImg from './images/plumbing.jpg';

const description = [
    {
        description: [
            'Штробление стен под сантехнические трубы',
            'Проведение сантехнических труб и канализации',
            'Установка фильтров и датчиков',
            'Монтаж сантехники',
        ],
    },
];

export const PlumbingView = () => (
    <ServicesLayoutColumn
        descriptions={description}
        images={(
            <Image
                width={1128}
                height={589}
                alt="Сантехника"
                objectFit="cover"
                src={plumbingImg}
            />
        )}
    />
);

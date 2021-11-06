import Image from 'next/image';

import { ServicesLayoutColumn } from '../components';

import electricityImg from './images/electricity.jpg';

const description = [
    {
        description: [
            'Штробление стен для проведения электропроводки',
            'Проведение электропроводки с гофрой',
            'Установка щитка с автоматами и узо',
            'Подключение розеток',
        ],
    },
];

export const ElectricityView = () => (
    <ServicesLayoutColumn
        descriptions={description}
        images={(
            <Image
                width={1128}
                height={407}
                alt="Электрика"
                objectFit="cover"
                placeholder="blur"
                src={electricityImg}
            />
        )}
    />
);

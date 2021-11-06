import { ServicesList } from '../components';

import floorsImg from './images/floors.jpg';
import bathroomImg from './images/bathroom.jpg';
import electricityImg from './images/electricity.jpg';
import plumbingImg from './images/plumbing.jpg';
import fullApartamentImg from './images/full-apartament.jpg';

import type { ServicesItemProps } from '../components';

const features: ServicesItemProps[] = [
    {
        title: 'Полы',
        img: floorsImg,
        url: '/floors',
    },
    {
        title: 'Ванная',
        img: bathroomImg,
        url: '/bathroom',
    },
    {
        title: 'Электрика',
        img: electricityImg,
        url: '/',
    },
    {
        title: 'Сантехника',
        img: plumbingImg,
        url: '/',
    },
    {
        title: 'Квартира целиком',
        img: fullApartamentImg,
        url: '/',
    },
];

export const FeaturesList = () => (
    <ServicesList items={features} />
);

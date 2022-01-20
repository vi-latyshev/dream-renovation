import { ServicesCardList } from '../components';

import floorsImg from './images/floors.jpg';
import bathroomImg from './images/bathroom.jpg';
import electricityImg from './images/electricity.jpg';
import plumbingImg from './images/plumbing.jpg';
import fullApartamentImg from './images/full-apartament.jpg';

import type { ServicesCardProps } from '../components';

const features: ServicesCardProps[] = [
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
        url: '/electricity',
    },
    {
        title: 'Сантехника',
        img: plumbingImg,
        url: '/plumbing',
    },
    {
        title: 'Квартира целиком',
        img: fullApartamentImg,
        url: '/full-apartament',
    },
];

export const FeaturesList = () => (
    <ServicesCardList items={features} />
);
